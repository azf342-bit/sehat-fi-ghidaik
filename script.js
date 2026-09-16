// ==========================================
// التهيئة والربط بـ Supabase
// ==========================================
const supabaseClient = window.supabaseClient;

// متغيرات حالة التطبيق
let currentCategory = 'all';
let currentSearch = '';

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    setupEventListeners();
    await loadProducts();
    await loadArticles();
    await loadGallery();
    await loadLinks();
}

// ==========================================
// التنقل بين الصفحات
// ==========================================
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ==========================================
// إعداد مستمعات الأحداث (Search / Form)
// ==========================================
function setupEventListeners() {
    const productSearch = document.getElementById('productSearch');
    if (productSearch) {
        productSearch.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            loadProducts();
        });
    }

    const articleSearch = document.getElementById('articleSearch');
    if (articleSearch) {
        articleSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            filterArticles(query);
        });
    }
}

// ==========================================
// جلب وعرض المنتجات (المكملات الغذائية)
// ==========================================
async function loadProducts() {
    const listContainer = document.getElementById('productsList');
    if (!listContainer) return;

    listContainer.innerHTML = '<div class="loading">جاري تحميل المنتجات...</div>';

    try {
        let query = supabaseClient.from('products').select('*');
        
        if (currentCategory !== 'all') {
            query = query.eq('category', currentCategory);
        }

        const { data, error } = await query;

        if (error) throw error;

        let filteredData = data || [];
        if (currentSearch) {
            filteredData = filteredData.filter(item => 
                (item.title && item.title.toLowerCase().includes(currentSearch)) ||
                (item.description && item.description.toLowerCase().includes(currentSearch))
            );
        }

        if (filteredData.length === 0) {
            listContainer.innerHTML = '<div class="empty">لا توجد مكملات غذائية مضافة حالياً.</div>';
            return;
        }

        listContainer.innerHTML = filteredData.map(item => `
            <div class="product-card">
                ${item.image_url ? `<img src="${item.image_url}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/150?text=لا+توجد+صورة'">` : ''}
                <div class="product-info">
                    <h3>${item.title || 'بدون عنوان'}</h3>
                    <p>${item.description || ''}</p>
                    ${item.benefits ? `<p class="benefits"><strong>الفوائد:</strong> ${item.benefits}</p>` : ''}
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error('خطأ في جلب المنتجات:', err);
        listContainer.innerHTML = '<div class="error">حدث خطأ أثناء تحميل البيانات من الخادم.</div>';
    }
}

// ==========================================
// جلب وعرض المعرض / الصور
// ==========================================
async function loadGallery() {
    const galleryContainer = document.getElementById('galleryList');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = '<div class="loading">جاري تحميل الصور...</div>';

    try {
        const { data, error } = await supabaseClient
            .from('gallery')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (!data || data.length === 0) {
            galleryContainer.innerHTML = '<div class="empty">لا توجد صور مضافة بعد.</div>';
            return;
        }

        galleryContainer.innerHTML = data.map(item => `
            <div class="gallery-item">
                <img src="${item.image_url}" alt="${item.caption || 'صورة'}" loading="lazy" onerror="this.parentElement.style.display='none'">
                ${item.caption ? `<p class="caption">${item.caption}</p>` : ''}
            </div>
        `).join('');

    } catch (err) {
        console.error('خطأ في جلب الصور:', err);
        galleryContainer.innerHTML = '<div class="empty">تعذر تحميل الصور حالياً.</div>';
    }
}

// ==========================================
// جلب وعرض المقالات
// ==========================================
async function loadArticles() {
    const articlesContainer = document.getElementById('articlesList');
    if (!articlesContainer) return;

    articlesContainer.innerHTML = '<div class="loading">جاري تحميل المقالات...</div>';

    try {
        const { data, error } = await supabaseClient
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (!data || data.length === 0) {
            articlesContainer.innerHTML = '<div class="empty">لا توجد مقالات مضافة حالياً.</div>';
            return;
        }

        window.allArticles = data; // تخزين المقالات للبحث المحلي
        renderArticles(data);

    } catch (err) {
        console.error('خطأ في جلب المقالات:', err);
        articlesContainer.innerHTML = '<div class="error">حدث خطأ في جلب المقالات.</div>';
    }
}

function renderArticles(articles) {
    const articlesContainer = document.getElementById('articlesList');
    if (!articlesContainer) return;

    articlesContainer.innerHTML = articles.map(item => `
        <article class="info-card">
            ${item.image_url ? `<img src="${item.image_url}" class="article-img" alt="${item.title}">` : ''}
            <h3>${item.title || 'بدون عنوان'}</h3>
            <p>${item.content || ''}</p>
        </article>
    `).join('');
}

function filterArticles(query) {
    if (!window.allArticles) return;
    const filtered = window.allArticles.filter(art => 
        (art.title && art.title.toLowerCase().includes(query)) ||
        (art.content && art.content.toLowerCase().includes(query))
    );
    renderArticles(filtered);
}

// ==========================================
// جلب وعرض الروابط
// ==========================================
async function loadLinks() {
    const linksContainer = document.getElementById('linksList');
    if (!linksContainer) return;

    try {
        const { data, error } = await supabaseClient
            .from('links')
            .select('*');

        if (error) throw error;

        if (!data || data.length === 0) {
            linksContainer.innerHTML = '<div class="empty">لا توجد روابط مضافة.</div>';
            return;
        }

        linksContainer.innerHTML = data.map(item => `
            <div class="info-card">
                <h3>${item.title}</h3>
                <p>${item.description || ''}</p>

                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-btn">زيارة الرابط 🔗</a>

            </div>
        `).join('');

    } catch (err) {
        console.error('خطأ في جلب الروابط:', err);
    }
}

// ==========================================
// إغلاق النوافذ المنبثقة
// ==========================================
function closeForm() {
    const overlay = document.getElementById('formOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}
