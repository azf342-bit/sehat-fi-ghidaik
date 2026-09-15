/* =========================================
   تطبيق صحتك في غذائك
   ملف وظائف التطبيق - نسخة مستقرة وكاملة
========================================= */

"use strict";


/* =========================================
   البيانات الافتراضية للمنتجات
========================================= */

const defaultProducts = [
  {
    id: 1,
    name: "DXN Spirulina",
    category: "مكملات غذائية",
    icon: "🌿",
    image: "",
    description: "سبيرولينا DXN هي مكمل غذائي يعتمد على الطحالب الخضراء المزرقة، وتُستخدم ضمن النظام الغذائي اليومي.",
    benefits: "تحتوي على عناصر غذائية متنوعة، ويجب استعمالها وفق تعليمات المنتج واستشارة المختص عند الحاجة.",
    details: "سبيرولينا هي نوع من الطحالب الخضراء المزرقة. تُستخدم كمكمل غذائي، ولا تُعد علاجًا لأي مرض."
  },
  {
    id: 2,
    name: "DXN Reishi Gano (RG)",
    category: "مكملات غذائية",
    icon: "🍄",
    image: "",
    description: "منتج يعتمد على فطر الجانوديرما المعروف باسم الريشي، ويُستخدم كمكمل غذائي.",
    benefits: "يُستخدم ضمن نمط حياة متوازن، مع الالتزام بتعليمات الاستخدام الموجودة على العبوة.",
    details: "يُرجى قراءة مكونات المنتج وطريقة استعماله، واستشارة الطبيب قبل استخدام المكملات عند وجود حالة صحية أو تناول أدوية."
  },
  {
    id: 3,
    name: "DXN Lingzhi Coffee",
    category: "المشروبات",
    icon: "☕",
    image: "",
    description: "قهوة فورية ممزوجة بمكونات نباتية ومستخلص الجانوديرما.",
    benefits: "مشروب يمكن تناوله باعتدال، مع الانتباه إلى كمية الكافيين والسكر حسب نوع المنتج.",
    details: "هذا المنتج مشروب غذائي وليس دواءً. يُنصح باتباع تعليمات التحضير الموجودة على العبوة."
  },
  {
    id: 4,
    name: "DXN Cordyceps",
    category: "مكملات غذائية",
    icon: "🌱",
    image: "",
    description: "مكمل غذائي يحتوي على مكونات مرتبطة بفطر الكورديسيبس.",
    benefits: "يُستخدم كمكمل ضمن نظام غذائي متوازن، ولا ينبغي اعتباره بديلًا للعلاج الطبي.",
    details: "قبل استعمال أي مكمل غذائي، يجب التأكد من ملاءمته للعمر والحالة الصحية والأدوية المستخدمة."
  },
  {
    id: 5,
    name: "DXN Vita Café",
    category: "المشروبات",
    icon: "☕",
    image: "",
    description: "مشروب قهوة فورية للاستخدام اليومي.",
    benefits: "يمكن تناوله باعتدال وفق الاحتياجات الشخصية وتعليمات المنتج.",
    details: "يُرجى الانتباه إلى مكونات المشروب، خاصة الكافيين والسكر."
  },
  {
    id: 6,
    name: "DXN Lion's Mane",
    category: "مكملات غذائية",
    icon: "🍄",
    image: "",
    description: "مكمل غذائي يعتمد على فطر عرف الأسد.",
    benefits: "يُستخدم ضمن النظام الغذائي، ولا توجد في هذا التطبيق وعود علاجية.",
    details: "المعلومات المقدمة للتثقيف فقط، ويجب الرجوع إلى مختص قبل الاستخدام عند الحاجة."
  }
];


/* =========================================
   البيانات الافتراضية للمقالات
========================================= */

const defaultArticles = [
  {
    id: 1,
    title: "أهمية الغذاء المتوازن",
    icon: "🥗",
    image: "",
    content: "الغذاء المتوازن يساعد على تزويد الجسم بالعناصر الغذائية الضرورية. احرص على تنويع الأطعمة وتناول الخضروات والفواكه والحبوب الكاملة وشرب الماء بانتظام."
  },
  {
    id: 2,
    title: "أهمية شرب الماء",
    icon: "💧",
    image: "",
    content: "الماء عنصر أساسي للحياة، ويساعد الجسم على أداء وظائفه المختلفة. تختلف الحاجة إلى الماء حسب العمر والنشاط والطقس والحالة الصحية."
  },
  {
    id: 3,
    title: "النشاط البدني والصحة",
    icon: "🚶",
    image: "",
    content: "يساعد النشاط البدني المنتظم على تحسين اللياقة ودعم الصحة العامة. ابدأ بخطوات بسيطة واختر نشاطًا يناسب قدراتك."
  }
];


/* =========================================
   البيانات الافتراضية للروابط
========================================= */

const defaultLinks = [
  {
    id: 1,
    title: "الموقع الرسمي لشركة DXN",
    url: "https://www.dxn2u.com",
    description: "زيارة الموقع الرسمي للتعرف على الشركة ومنتجاتها."
  },
  {
    id: 2,
    title: "منظمة الصحة العالمية",
    url: "https://www.who.int",
    description: "مصدر عام للمعلومات الصحية والتوعوية."
  }
];


/* =========================================
   المتغيرات العامة
========================================= */

let products = [];
let articles = [];
let links = [];
let galleryImages = [];

let currentProductPage = 1;
const productsPerPage = 10;

let currentCategory = "الكل";


/* =========================================
   مفاتيح التخزين
========================================= */

const STORAGE_KEYS = {
  products: "dxn_products",
  articles: "dxn_articles",
  links: "dxn_links",
  gallery: "dxn_gallery"
};


/* =========================================
   أدوات مساعدة
========================================= */

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}


function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {
  return escapeHTML(value);
}


function createId(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 1;
  }

  return Math.max.apply(
    null,
    items.map(function(item) {
      return Number(item.id) || 0;
    })
  ) + 1;
}


function isValidImageUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
}


function isValidExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
}


/* =========================================
   تحميل البيانات
========================================= */

function loadData() {
  try {
    const savedProducts = localStorage.getItem(STORAGE_KEYS.products);
    const savedArticles = localStorage.getItem(STORAGE_KEYS.articles);
    const savedLinks = localStorage.getItem(STORAGE_KEYS.links);
    const savedGallery = localStorage.getItem(STORAGE_KEYS.gallery);

    products = savedProducts
      ? JSON.parse(savedProducts)
      : cloneData(defaultProducts);

    articles = savedArticles
      ? JSON.parse(savedArticles)
      : cloneData(defaultArticles);

    links = savedLinks
      ? JSON.parse(savedLinks)
      : cloneData(defaultLinks);

    galleryImages = savedGallery
      ? JSON.parse(savedGallery)
      : [];

    if (!Array.isArray(products)) {
      products = cloneData(defaultProducts);
    }

    if (!Array.isArray(articles)) {
      articles = cloneData(defaultArticles);
    }

    if (!Array.isArray(links)) {
      links = cloneData(defaultLinks);
    }

    if (!Array.isArray(galleryImages)) {
      galleryImages = [];
    }

  } catch (error) {
    console.error("خطأ في تحميل البيانات:", error);

    products = cloneData(defaultProducts);
    articles = cloneData(defaultArticles);
    links = cloneData(defaultLinks);
    galleryImages = [];
  }
}


/* =========================================
   حفظ البيانات
========================================= */

function saveData() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.products,
      JSON.stringify(products)
    );

    localStorage.setItem(
      STORAGE_KEYS.articles,
      JSON.stringify(articles)
    );

    localStorage.setItem(
      STORAGE_KEYS.links,
      JSON.stringify(links)
    );

    localStorage.setItem(
      STORAGE_KEYS.gallery,
      JSON.stringify(galleryImages)
    );

    return true;

  } catch (error) {
    console.error("خطأ في حفظ البيانات:", error);

    alert(
      "تعذر حفظ البيانات. قد تكون مساحة التخزين ممتلئة."
    );

    return false;
  }
}


/* =========================================
   التنقل بين الصفحات
========================================= */

function showPage(pageId) {
  try {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (!targetPage) {
      console.error("الصفحة غير موجودة:", pageId);
      return;
    }

    targetPage.classList.add("active");

    if (pageId === "products") {
      renderProducts();
    }

    if (pageId === "articles") {
      renderArticles();
    }

    if (pageId === "images") {
      renderGallery();
    }

    if (pageId === "links") {
      renderLinks();
    }

    if (pageId === "admin") {
      renderAdmin();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {
    console.error("خطأ في التنقل بين الصفحات:", error);
  }
}


/* =========================================
   فئات المنتجات
========================================= */

function renderCategories() {
  const container = document.getElementById("productCategories");

  if (!container) {
    return;
  }

  const categories = ["الكل"];

  products.forEach(function(product) {
    const category = String(product.category || "").trim();

    if (category && !categories.includes(category)) {
      categories.push(category);
    }
  });

  container.innerHTML = "";

  categories.forEach(function(category) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "category-btn";
    button.textContent = category;

    if (category === currentCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", function() {
      currentCategory = category;
      currentProductPage = 1;
      renderProducts();
    });

    container.appendChild(button);
  });
}


/* =========================================
   عرض المنتجات
========================================= */

function renderProducts() {
  const list = document.getElementById("productsList");
  const pagination = document.getElementById("productPagination");
  const searchInput = document.getElementById("productSearch");

  if (!list) {
    return;
  }

  const searchText = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const filteredProducts = products.filter(function(product) {
    const name = String(product.name || "").toLowerCase();
    const description = String(product.description || "").toLowerCase();
    const category = String(product.category || "").toLowerCase();

    const matchesSearch =
      !searchText ||
      name.includes(searchText) ||
      description.includes(searchText) ||
      category.includes(searchText);

    const matchesCategory =
      currentCategory === "الكل" ||
      product.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  if (currentProductPage > totalPages) {
    currentProductPage = totalPages;
  }

  const startIndex =
    (currentProductPage - 1) * productsPerPage;

  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  list.innerHTML = "";

  if (visibleProducts.length === 0) {
    list.innerHTML = `
      <div class="empty">
        لا توجد منتجات مطابقة للبحث.
      </div>
    `;

    if (pagination) {
      pagination.innerHTML = "";
    }

    renderCategories();
    return;
  }

  visibleProducts.forEach(function(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    let imageHTML = "";

    if (product.image) {
      imageHTML = `
        <img
          class="product-image"
          src="${escapeAttribute(product.image)}"
          alt="${escapeAttribute(product.name)}"
          loading="lazy"
          onerror="this.style.display='none';">
      `;
    } else {
      imageHTML = `
        <div
          class="product-image"
          style="
            height:150px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:65px;
            background:#17251b;
          ">
          ${escapeHTML(product.icon || "🌿")}
        </div>
      `;
    }

    card.innerHTML = `
      ${imageHTML}

      <div class="product-body">

        <div class="product-icon">
          ${escapeHTML(product.icon || "🌿")}
        </div>

        <h3>${escapeHTML(product.name)}</h3>

        <p>
          <strong>الفئة:</strong>
          ${escapeHTML(product.category || "عام")}
        </p>

        <p>
          ${escapeHTML(product.description || "")}
        </p>

        <button
          type="button"
          class="product-button"
          onclick="showProductDetails(${Number(product.id)})">
          التفاصيل 📖
        </button>

      </div>
    `;

    list.appendChild(card);
  });

  renderCategories();
  renderProductPagination(totalPages);
}


/* =========================================
   ترقيم صفحات المنتجات
========================================= */

function renderProductPagination(totalPages) {
  const pagination = document.getElementById("productPagination");

  if (!pagination) {
    return;
  }

  pagination.innerHTML = "";

  if (totalPages <= 1) {
    return;
  }

  const info = document.createElement("div");
  info.className = "page-info";
  info.textContent =
    "الصفحة " + currentProductPage + " من " + totalPages;

  pagination.appendChild(info);

  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.className = "page-arrow";
  previousButton.textContent = "السابق";
  previousButton.disabled = currentProductPage === 1;

  previousButton.addEventListener("click", function() {
    if (currentProductPage > 1) {
      currentProductPage--;
      renderProducts();
    }
  });

  pagination.appendChild(previousButton);

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");

    pageButton.type = "button";
    pageButton.className = "page-number";
    pageButton.textContent = page;

    if (page === currentProductPage) {
      pageButton.classList.add("active");
    }

    pageButton.addEventListener("click", function() {
      currentProductPage = page;
      renderProducts();
    });

    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "page-arrow";
  nextButton.textContent = "التالي";
  nextButton.disabled = currentProductPage === totalPages;

  nextButton.addEventListener("click", function() {
    if (currentProductPage < totalPages) {
      currentProductPage++;
      renderProducts();
    }
  });

  pagination.appendChild(nextButton);
}


/* =========================================
   تفاصيل المنتج
========================================= */

function showProductDetails(productId) {
  const product = products.find(function(item) {
    return Number(item.id) === Number(productId);
  });

  if (!product) {
    alert("لم يتم العثور على المنتج.");
    return;
  }

  const oldDetailsPage =
    document.getElementById("product-details-page");

  if (oldDetailsPage) {
    oldDetailsPage.remove();
  }

  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  const detailsPage = document.createElement("section");

  detailsPage.id = "product-details-page";
  detailsPage.className = "page active";

  let imageHTML = "";

  if (product.image) {
    imageHTML = `
      <img
        src="${escapeAttribute(product.image)}"
        alt="${escapeAttribute(product.name)}"
        style="
          width:100%;
          max-height:300px;
          object-fit:contain;
          border-radius:18px;
          margin-bottom:18px;
        "
        onerror="this.style.display='none';">
    `;
  } else {
    imageHTML = `
      <div
        style="
          font-size:90px;
          text-align:center;
          padding:25px;
          background:#17251b;
          border-radius:18px;
          margin-bottom:18px;
        ">
        ${escapeHTML(product.icon || "🌿")}
      </div>
    `;
  }

  detailsPage.innerHTML = `
    <div class="page-head">

      <button
        type="button"
        class="back-button"
        onclick="closeProductDetails()">
        رجوع
      </button>

      <h2>تفاصيل المنتج</h2>

    </div>

    <div class="info-card">

      ${imageHTML}

      <h3>${escapeHTML(product.name)}</h3>

      <p>
        <strong>الفئة:</strong>
        ${escapeHTML(product.category || "عام")}
      </p>

      <h3>نبذة عن المنتج</h3>

      <p>
        ${escapeHTML(product.description || "لا يوجد وصف متاح.")}
      </p>

      <h3>الفوائد والمعلومات</h3>

      <p>
        ${escapeHTML(product.benefits || "لا توجد معلومات إضافية.")}
      </p>

      <h3>تفاصيل إضافية</h3>

      <p>
        ${escapeHTML(product.details || "لا توجد تفاصيل إضافية.")}
      </p>

      <div class="info-card">
        <p>
      المعلومات للتثقيف والتعريف بدور المكملات الغذائية الطبيعية على الجسم بصفة عامة، ،
          
        </p>
      </div>

    </div>
  `;

  const app = document.getElementById("app");

  if (!app) {
    alert("حدث خطأ: لم يتم العثور على مساحة التطبيق.");
    return;
  }

  app.appendChild(detailsPage);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   إغلاق تفاصيل المنتج
========================================= */

function closeProductDetails() {
  const detailsPage =
    document.getElementById("product-details-page");

  if (detailsPage) {
    detailsPage.remove();
  }

  showPage("products");
}


/* =========================================
   عرض المقالات
========================================= */

function renderArticles() {
  const list = document.getElementById("articlesList");
  const searchInput = document.getElementById("articleSearch");

  if (!list) {
    return;
  }

  const searchText = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const filteredArticles = articles.filter(function(article) {
    return (
      !searchText ||
      String(article.title || "").toLowerCase().includes(searchText) ||
      String(article.content || "").toLowerCase().includes(searchText)
    );
  });

  list.innerHTML = "";

  if (filteredArticles.length === 0) {
    list.innerHTML = `
      <div class="empty">
        لا توجد مقالات مطابقة للبحث.
      </div>
    `;
    return;
  }

  filteredArticles.forEach(function(article) {
    const card = document.createElement("article");
    card.className = "article-card";

    let imageHTML = "";

    if (article.image) {
      imageHTML = `
        <img
          class="article-image"
          src="${escapeAttribute(article.image)}"
          alt="${escapeAttribute(article.title)}"
          loading="lazy"
          onerror="this.style.display='none';">
      `;
    }

    card.innerHTML = `
      ${imageHTML}

      <h3>
        ${escapeHTML(article.icon || "📚")}
        ${escapeHTML(article.title)}
      </h3>

      <p>
        ${escapeHTML(article.content || "")}
      </p>
    `;

    list.appendChild(card);
  });
}


/* =========================================
   معرض الصور
========================================= */

function renderGallery() {
  const gallery = document.getElementById("galleryList");

  if (!gallery) {
    return;
  }

  const images = [];

  /* الصور المضافة من إدارة معرض الصور */
  if (Array.isArray(galleryImages)) {
    galleryImages.forEach(function(item) {
      const source =
        item.url ||
        item.src ||
        item.image ||
        "";

      if (source) {
        images.push({
          src: source,
          title: item.title || "صورة",
          description: item.description || ""
        });
      }
    });
  }

  /* صور المنتجات */
  if (Array.isArray(products)) {
    products.forEach(function(product) {
      if (product.image) {
        images.push({
          src: product.image,
          title: product.name || "منتج",
          description: product.description || ""
        });
      }
    });
  }

  /* صور المقالات */
  if (Array.isArray(articles)) {
    articles.forEach(function(article) {
      if (article.image) {
        images.push({
          src: article.image,
          title: article.title || "مقال",
          description: article.content || ""
        });
      }
    });
  }

  gallery.innerHTML = "";

  if (images.length === 0) {
    gallery.innerHTML = `
      <div class="empty">
        لا توجد صور مضافة حاليًا.
      </div>
    `;
    return;
  }

  images.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "gallery-item";

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.title;
    image.loading = "lazy";

    image.onerror = function() {
      image.style.display = "none";
    };

    const title = document.createElement("h3");
    title.textContent = item.title;

    card.appendChild(image);
    card.appendChild(title);

    if (item.description) {
      const description = document.createElement("p");
      description.textContent = item.description;
      card.appendChild(description);
    }

    gallery.appendChild(card);
  });
}


/* =========================================
   إدارة معرض الصور
========================================= */

function renderAdminGallery() {
  const container = document.getElementById("adminGallery");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!Array.isArray(galleryImages) || galleryImages.length === 0) {
    container.innerHTML = `
      <p class="empty">
        لا توجد صور مستقلة في المعرض.
      </p>
    `;
    return;
  }

  galleryImages.forEach(function(item) {
    const source =
      item.url ||
      item.src ||
      item.image ||
      "";

    const row = document.createElement("div");
    row.className = "admin-item";

    row.innerHTML = `
      <strong>
        🖼️ ${escapeHTML(item.title || "صورة")}
      </strong>

      <p class="small-note">
        ${escapeHTML(source)}
      </p>

      <div class="admin-actions">
        <button
          type="button"
          class="delete-btn"
          onclick="deleteGalleryImage(${Number(item.id)})">
          حذف
        </button>
      </div>
    `;

    container.appendChild(row);
  });
}


/* =========================================
   نموذج إضافة صورة للمعرض
========================================= */

function openGalleryForm() {
  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    alert("نافذة الإضافة غير موجودة في الصفحة.");
    return;
  }

  title.textContent = "إضافة صورة إلى المعرض";

  content.innerHTML = `
    <label class="form-label">
      عنوان الصورة
    </label>

    <input
      id="formGalleryTitle"
      class="form-input"
      type="text"
      placeholder="مثال: منتجات DXN">

    <label class="form-label">
      رابط الصورة العام
    </label>

    <input
      id="formGalleryUrl"
      class="form-input"
      type="url"
      placeholder="https://example.com/image.png">

    <label class="form-label">
      وصف الصورة، اختياري
    </label>

    <textarea
      id="formGalleryDescription"
      class="form-textarea"
      placeholder="وصف مختصر للصورة"></textarea>

    <p class="small-note">
      يجب أن يكون الرابط عامًا ويبدأ بـ https:// أو http://
      حتى تظهر الصورة لجميع المستخدمين.
    </p>

    <div class="form-actions">

      <button
        type="button"
        class="primary-btn"
        onclick="saveGalleryImage()">
        حفظ الصورة
      </button>

      <button
        type="button"
        class="secondary-btn"
        onclick="closeForm()">
        إلغاء
      </button>

    </div>
  `;

  overlay.classList.add("show");
}


/* =========================================
   حفظ صورة المعرض
========================================= */

function saveGalleryImage() {
  const titleElement = document.getElementById("formGalleryTitle");
  const urlElement = document.getElementById("formGalleryUrl");
  const descriptionElement =
    document.getElementById("formGalleryDescription");

  if (!titleElement || !urlElement || !descriptionElement) {
    alert("حدث خطأ في نموذج الصورة.");
    return;
  }

  const title = titleElement.value.trim();
  const url = urlElement.value.trim();
  const description = descriptionElement.value.trim();

  if (!title) {
    alert("اكتب عنوان الصورة.");
    return;
  }

  if (!url) {
    alert("ضع رابط الصورة.");
    return;
  }

  if (!isValidImageUrl(url)) {
    alert(
      "رابط الصورة غير صحيح. يجب أن يبدأ بـ http:// أو https://"
    );
    return;
  }

  galleryImages.push({
    id: createId(galleryImages),
    title: title,
    url: url,
    description: description
  });

  if (saveData()) {
    closeForm();
    renderGallery();
    renderAdminGallery();
    alert("تمت إضافة الصورة بنجاح.");
  }
}


/* =========================================
   حذف صورة من المعرض
========================================= */

function deleteGalleryImage(imageId) {
  const image = galleryImages.find(function(item) {
    return Number(item.id) === Number(imageId);
  });

  if (!image) {
    return;
  }

  const confirmed = confirm(
    "هل تريد حذف الصورة: " +
    (image.title || "هذه الصورة") +
    " ؟"
  );

  if (!confirmed) {
    return;
  }

  galleryImages = galleryImages.filter(function(item) {
    return Number(item.id) !== Number(imageId);
  });

  saveData();
  renderGallery();
  renderAdminGallery();
}


/* =========================================
   عرض الروابط
========================================= */

function renderLinks() {
  const list = document.getElementById("linksList");

  if (!list) {
    return;
  }

  list.innerHTML = "";

  if (links.length === 0) {
    list.innerHTML = `
      <div class="empty">
        لا توجد روابط حاليًا.
      </div>
    `;
    return;
  }

  links.forEach(function(link) {
    const card = document.createElement("article");
    card.className = "link-card";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-btn";
    button.textContent = "فتح الرابط";

    button.addEventListener("click", function() {
      openExternalLink(link.url);
    });

    card.innerHTML = `
      <h3>🔗 ${escapeHTML(link.title)}</h3>

      <p>
        ${escapeHTML(link.description || "")}
      </p>
    `;

    card.appendChild(button);
    list.appendChild(card);
  });
}


/* =========================================
   فتح رابط خارجي
========================================= */

function openExternalLink(url) {
  if (!url) {
    alert("الرابط غير موجود.");
    return;
  }

  if (!isValidExternalUrl(url)) {
    alert("الرابط غير صحيح.");
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================
   لوحة الإدارة
========================================= */

function renderAdmin() {
  renderAdminProductPages();
  renderAdminProducts();
  renderAdminArticles();
  renderAdminLinks();
  renderAdminGallery();
}


/* =========================================
   إدارة صفحات المنتجات
========================================= */

function renderAdminProductPages() {
  const container = document.getElementById("adminProductPages");

  if (!container) {
    return;
  }

  const totalPages = 40;

  let html = `
    <div class="admin-box">

      <div class="admin-title">
        <h3>إدارة صفحات المنتجات</h3>
      </div>

      <p class="small-note">
        يمكنك اختيار صفحة المنتجات التي تريد إدارتها.
      </p>

      <div class="admin-pages">
  `;

  for (let page = 1; page <= totalPages; page++) {
    const start = (page - 1) * productsPerPage + 1;
    const end = page * productsPerPage;

    html += `
      <button
        type="button"
        class="admin-page-btn"
        onclick="selectAdminProductPage(${page})">
        صفحة ${page}
        <small>${start} - ${end}</small>
      </button>
    `;
  }

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}


/* =========================================
   اختيار صفحة المنتجات من الإدارة
========================================= */

function selectAdminProductPage(page) {
  currentProductPage = Number(page) || 1;

  showPage("products");
  renderProducts();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   إدارة المنتجات
========================================= */

function renderAdminProducts() {
  const container = document.getElementById("adminProducts");

  if (!container) {
    return;
  }

  let html = `
    <div class="admin-box">

      <div class="admin-title">
        <h3>إدارة المنتجات</h3>
      </div>

      <button
        type="button"
        class="primary-btn"
        onclick="openProductForm()">
        + إضافة منتج
      </button>
  `;

  if (products.length === 0) {
    html += `
      <p class="empty">
        لا توجد منتجات.
      </p>
    `;
  }

  products.forEach(function(product) {
    html += `
      <div class="admin-item">

        <strong>
          ${escapeHTML(product.icon || "🌿")}
          ${escapeHTML(product.name)}
        </strong>

        <p class="small-note">
          ${escapeHTML(product.category || "عام")}
        </p>

        <div class="admin-actions">

          <button
            type="button"
            class="edit-btn"
            onclick="openProductForm(${Number(product.id)})">
            تعديل
          </button>

          <button
            type="button"
            class="delete-btn"
            onclick="deleteProduct(${Number(product.id)})">
            حذف
          </button>

        </div>

      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;
}


/* =========================================
   نموذج إضافة أو تعديل منتج
========================================= */

function openProductForm(productId) {
  const product = productId !== undefined && productId !== null
    ? products.find(function(item) {
        return Number(item.id) === Number(productId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    alert("نافذة الإضافة غير موجودة.");
    return;
  }

  title.textContent = product
    ? "تعديل المنتج"
    : "إضافة منتج";

  content.innerHTML = `
    <label class="form-label">اسم المنتج</label>

    <input
      id="formProductName"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.name) : ""}"
      placeholder="اسم المنتج">

    <label class="form-label">الفئة</label>

    <input
      id="formProductCategory"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.category) : ""}"
      placeholder="مثل: مكملات غذائية">

    <label class="form-label">الأيقونة</label>

    <input
      id="formProductIcon"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.icon) : "🌿"}"
      placeholder="🌿">

    <label class="form-label">الوصف</label>

    <textarea
      id="formProductDescription"
      class="form-textarea"
      placeholder="وصف المنتج">${product ? escapeHTML(product.description) : ""}</textarea>

    <label class="form-label">الفوائد والمعلومات</label>

    <textarea
      id="formProductBenefits"
      class="form-textarea"
      placeholder="الفوائد والمعلومات">${product ? escapeHTML(product.benefits) : ""}</textarea>

    <label class="form-label">التفاصيل</label>

    <textarea
      id="formProductDetails"
      class="form-textarea"
      placeholder="تفاصيل إضافية">${product ? escapeHTML(product.details) : ""}</textarea>

    <label class="form-label">رابط الصورة، اختياري</label>

    <input
      id="formProductImage"
      class="form-input"
      type="url"
      value="${product ? escapeAttribute(product.image) : ""}"
      placeholder="https://example.com/image.png">

    <div class="form-actions">

      <button
        type="button"
        class="primary-btn"
        onclick="saveProductForm(${product ? Number(product.id) : "null"})">
        حفظ
      </button>

      <button
        type="button"
        class="secondary-btn"
        onclick="closeForm()">
        إلغاء
      </button>

    </div>
  `;

  overlay.classList.add("show");
}


/* =========================================
   حفظ المنتج
========================================= */

function saveProductForm(productId) {
  const nameElement = document.getElementById("formProductName");
  const categoryElement = document.getElementById("formProductCategory");
  const iconElement = document.getElementById("formProductIcon");
  const descriptionElement =
    document.getElementById("formProductDescription");
  const benefitsElement =
    document.getElementById("formProductBenefits");
  const detailsElement =
    document.getElementById("formProductDetails");
  const imageElement =
    document.getElementById("formProductImage");

  if (
    !nameElement ||
    !categoryElement ||
    !iconElement ||
    !descriptionElement ||
    !benefitsElement ||
    !detailsElement ||
    !imageElement
  ) {
    alert("حدث خطأ في نموذج المنتج.");
    return;
  }

  const name = nameElement.value.trim();
  const category = categoryElement.value.trim();
  const icon = iconElement.value.trim();
  const description = descriptionElement.value.trim();
  const benefits = benefitsElement.value.trim();
  const details = detailsElement.value.trim();
  const image = imageElement.value.trim();

  if (!name) {
    alert("اكتب اسم المنتج أولًا.");
    return;
  }

  if (image && !isValidImageUrl(image)) {
    alert(
      "رابط صورة المنتج غير صحيح. يجب أن يبدأ بـ http:// أو https://"
    );
    return;
  }

  if (productId !== null && productId !== undefined) {
    const index = products.findIndex(function(item) {
      return Number(item.id) === Number(productId);
    });

    if (index !== -1) {
      products[index] = {
        ...products[index],
        name: name,
        category: category || "عام",
        icon: icon || "🌿",
        description: description,
        benefits: benefits,
        details: details,
        image: image
      };
    }
  } else {
    products.push({
      id: createId(products),
      name: name,
      category: category || "عام",
      icon: icon || "🌿",
      description: description,
      benefits: benefits,
      details: details,
      image: image
    });
  }

  saveData();
  closeForm();
  renderProducts();
  renderAdmin();
}


/* =========================================
   حذف منتج
========================================= */

function deleteProduct(productId) {
  const product = products.find(function(item) {
    return Number(item.id) === Number(productId);
  });

  if (!product) {
    return;
  }

  const confirmed = confirm(
    "هل تريد حذف المنتج: " + product.name + " ؟"
  );

  if (!confirmed) {
    return;
  }

  products = products.filter(function(item) {
    return Number(item.id) !== Number(productId);
  });

  saveData();
  renderProducts();
  renderAdmin();
}


/* =========================================
   إدارة المقالات
========================================= */

function renderAdminArticles() {
  const container = document.getElementById("adminArticles");

  if (!container) {
    return;
  }

  let html = `
    <div class="admin-box">

      <div class="admin-title">
        <h3>إدارة المقالات</h3>
      </div>

      <button
        type="button"
        class="primary-btn"
        onclick="openArticleForm()">
        + إضافة مقال
      </button>
  `;

  if (articles.length === 0) {
    html += `
      <p class="empty">
        لا توجد مقالات.
      </p>
    `;
  }

  articles.forEach(function(article) {
    html += `
      <div class="admin-item">

        <strong>
          ${escapeHTML(article.icon || "📚")}
          ${escapeHTML(article.title)}
        </strong>

        <div class="admin-actions">

          <button
            type="button"
            class="edit-btn"
            onclick="openArticleForm(${Number(article.id)})">
            تعديل
          </button>

          <button
            type="button"
            class="delete-btn"
            onclick="deleteArticle(${Number(article.id)})">
            حذف
          </button>

        </div>

      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;
}


/* =========================================
   نموذج المقال
========================================= */

function openArticleForm(articleId) {
  const article = articleId !== undefined && articleId !== null
    ? articles.find(function(item) {
        return Number(item.id) === Number(articleId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    alert("نافذة الإضافة غير موجودة.");
    return;
  }

  title.textContent = article
    ? "تعديل المقال"
    : "إضافة مقال";

  content.innerHTML = `
    <label class="form-label">عنوان المقال</label>

    <input
      id="formArticleTitle"
      class="form-input"
      type="text"
      value="${article ? escapeAttribute(article.title) : ""}"
      placeholder="عنوان المقال">

    <label class="form-label">الأيقونة</label>

    <input
      id="formArticleIcon"
      class="form-input"
      type="text"
      value="${article ? escapeAttribute(article.icon) : "📚"}"
      placeholder="📚">

    <label class="form-label">محتوى المقال</label>

    <textarea
      id="formArticleContent"
      class="form-textarea"
      placeholder="اكتب محتوى المقال">${article ? escapeHTML(article.content) : ""}</textarea>

    <label class="form-label">رابط الصورة، اختياري</label>

    <input
      id="formArticleImage"
      class="form-input"
      type="url"
      value="${article ? escapeAttribute(article.image) : ""}"
      placeholder="https://example.com/image.png">

    <div class="form-actions">

      <button
        type="button"
        class="primary-btn"
        onclick="saveArticleForm(${article ? Number(article.id) : "null"})">
        حفظ
      </button>

      <button
        type="button"
        class="secondary-btn"
        onclick="closeForm()">
        إلغاء
      </button>

    </div>
  `;

  overlay.classList.add("show");
}


/* =========================================
   حفظ المقال
========================================= */

function saveArticleForm(articleId) {
  const titleElement = document.getElementById("formArticleTitle");
  const iconElement = document.getElementById("formArticleIcon");
  const contentElement = document.getElementById("formArticleContent");
  const imageElement = document.getElementById("formArticleImage");

  if (
    !titleElement ||
    !iconElement ||
    !contentElement ||
    !imageElement
  ) {
    alert("حدث خطأ في نموذج المقال.");
    return;
  }

  const title = titleElement.value.trim();
  const icon = iconElement.value.trim();
  const content = contentElement.value.trim();
  const image = imageElement.value.trim();

  if (!title) {
    alert("اكتب عنوان المقال أولًا.");
    return;
  }

  if (image && !isValidImageUrl(image)) {
    alert(
      "رابط صورة المقال غير صحيح. يجب أن يبدأ بـ http:// أو https://"
    );
    return;
  }

  if (articleId !== null && articleId !== undefined) {
    const index = articles.findIndex(function(item) {
      return Number(item.id) === Number(articleId);
    });

    if (index !== -1) {
      articles[index] = {
        ...articles[index],
        title: title,
        icon: icon || "📚",
        content: content,
        image: image
      };
    }
  } else {
    articles.push({
      id: createId(articles),
      title: title,
      icon: icon || "📚",
      content: content,
      image: image
    });
  }

  saveData();
  closeForm();
  renderArticles();
  renderAdmin();
}


/* =========================================
   حذف مقال
========================================= */

function deleteArticle(articleId) {
  const confirmed = confirm("هل تريد حذف هذا المقال؟");

  if (!confirmed) {
    return;
  }

  articles = articles.filter(function(item) {
    return Number(item.id) !== Number(articleId);
  });

  saveData();
  renderArticles();
  renderAdmin();
}


/* =========================================
   إدارة الروابط
========================================= */

function renderAdminLinks() {
  const container = document.getElementById("adminLinks");

  if (!container) {
    return;
  }

  let html = `
    <div class="admin-box">

      <div class="admin-title">
        <h3>إدارة الروابط</h3>
      </div>

      <button
        type="button"
        class="primary-btn"
        onclick="openLinkForm()">
        + إضافة رابط
      </button>
  `;

  if (links.length === 0) {
    html += `
      <p class="empty">
        لا توجد روابط.
      </p>
    `;
  }

  links.forEach(function(link) {
    html += `
      <div class="admin-item">

        <strong>
          🔗 ${escapeHTML(link.title)}
        </strong>

        <p class="small-note">
          ${escapeHTML(link.url)}
        </p>

        <div class="admin-actions">

          <button
            type="button"
            class="edit-btn"
            onclick="openLinkForm(${Number(link.id)})">
            تعديل
          </button>

          <button
            type="button"
            class="delete-btn"
            onclick="deleteLink(${Number(link.id)})">
            حذف
          </button>

        </div>

      </div>
    `;
  });

  html += `</div>`;

  container.innerHTML = html;
}


/* =========================================
   نموذج الرابط
========================================= */

function openLinkForm(linkId) {
  const link = linkId !== undefined && linkId !== null
    ? links.find(function(item) {
        return Number(item.id) === Number(linkId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    alert("نافذة الإضافة غير موجودة.");
    return;
  }

  title.textContent = link
    ? "تعديل الرابط"
    : "إضافة رابط";

  content.innerHTML = `
    <label class="form-label">اسم الرابط</label>

    <input
      id="formLinkTitle"
      class="form-input"
      type="text"
      value="${link ? escapeAttribute(link.title) : ""}"
      placeholder="اسم الرابط">

    <label class="form-label">الرابط</label>

    <input
      id="formLinkUrl"
      class="form-input"
      type="url"
      value="${link ? escapeAttribute(link.url) : ""}"
      placeholder="https://example.com">

    <label class="form-label">الوصف</label>

    <textarea
      id="formLinkDescription"
      class="form-textarea"
      placeholder="وصف الرابط">${link ? escapeHTML(link.description) : ""}</textarea>

    <div class="form-actions">

      <button
        type="button"
        class="primary-btn"
        onclick="saveLinkForm(${link ? Number(link.id) : "null"})">
        حفظ
      </button>

      <button
        type="button"
        class="secondary-btn"
        onclick="closeForm()">
        إلغاء
      </button>

    </div>
  `;

  overlay.classList.add("show");
}


/* =========================================
   حفظ الرابط
========================================= */

function saveLinkForm(linkId) {
  const titleElement = document.getElementById("formLinkTitle");
  const urlElement = document.getElementById("formLinkUrl");
  const descriptionElement =
    document.getElementById("formLinkDescription");

  if (
    !titleElement ||
    !urlElement ||
    !descriptionElement
  ) {
    alert("حدث خطأ في نموذج الرابط.");
    return;
  }

  const title = titleElement.value.trim();
  const url = urlElement.value.trim();
  const description = descriptionElement.value.trim();

  if (!title || !url) {
    alert("اكتب اسم الرابط والرابط.");
    return;
  }

  if (!isValidExternalUrl(url)) {
    alert(
      "الرابط غير صحيح. يجب أن يبدأ بـ http:// أو https://"
    );
    return;
  }

  if (linkId !== null && linkId !== undefined) {
    const index = links.findIndex(function(item) {
      return Number(item.id) === Number(linkId);
    });

    if (index !== -1) {
      links[index] = {
        ...links[index],
        title: title,
        url: url,
        description: description
      };
    }
  } else {
    links.push({
      id: createId(links),
      title: title,
      url: url,
      description: description
    });
  }

  saveData();
  closeForm();
  renderLinks();
  renderAdmin();
}


/* =========================================
   حذف رابط
========================================= */

function deleteLink(linkId) {
  const confirmed = confirm("هل تريد حذف هذا الرابط؟");

  if (!confirmed) {
    return;
  }

  links = links.filter(function(item) {
    return Number(item.id) !== Number(linkId);
  });

  saveData();
  renderLinks();
  renderAdmin();
}


/* =========================================
   إغلاق نافذة الإضافة
========================================= */

function closeForm() {
  const overlay = document.getElementById("formOverlay");

  if (overlay) {
    overlay.classList.remove("show");
  }
}


/* =========================================
   البحث
========================================= */

function setupSearch() {
  const productSearch = document.getElementById("productSearch");
  const articleSearch = document.getElementById("articleSearch");

  if (productSearch && !productSearch.dataset.ready) {
    productSearch.dataset.ready = "true";

    productSearch.addEventListener("input", function() {
      currentProductPage = 1;
      renderProducts();
    });
  }

  if (articleSearch && !articleSearch.dataset.ready) {
    articleSearch.dataset.ready = "true";

    articleSearch.addEventListener("input", function() {
      renderArticles();
    });
  }
}


/* =========================================
   تشغيل التطبيق بأمان
========================================= */

function startApp() {
  try {
    loadData();
  } catch (error) {
    console.error("خطأ في تحميل البيانات:", error);
  }

  try {
    renderProducts();
  } catch (error) {
    console.error("خطأ في عرض المنتجات:", error);
  }

  try {
    renderArticles();
  } catch (error) {
    console.error("خطأ في عرض المقالات:", error);
  }

  try {
    renderGallery();
  } catch (error) {
    console.error("خطأ في عرض الصور:", error);
  }

  try {
    renderLinks();
  } catch (error) {
    console.error("خطأ في عرض الروابط:", error);
  }

  try {
    setupSearch();
  } catch (error) {
    console.error("خطأ في تشغيل البحث:", error);
  }
}


/* =========================================
   جعل الدوال متاحة لأزرار HTML
========================================= */

window.showPage = showPage;

window.showProductDetails = showProductDetails;
window.closeProductDetails = closeProductDetails;

window.openExternalLink = openExternalLink;

window.openProductForm = openProductForm;
window.saveProductForm = saveProductForm;
window.deleteProduct = deleteProduct;

window.openArticleForm = openArticleForm;
window.saveArticleForm = saveArticleForm;
window.deleteArticle = deleteArticle;

window.openLinkForm = openLinkForm;
window.saveLinkForm = saveLinkForm;
window.deleteLink = deleteLink;

window.openGalleryForm = openGalleryForm;
window.saveGalleryImage = saveGalleryImage;
window.deleteGalleryImage = deleteGalleryImage;

window.closeForm = closeForm;

window.renderAdmin = renderAdmin;
window.renderAdminProductPages = renderAdminProductPages;
window.selectAdminProductPage = selectAdminProductPage;


/* =========================================
   بدء التطبيق
========================================= */

startApp();
