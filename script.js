/* =========================================
   تطبيق صحتك في غذائك
   ملف وظائف التطبيق
========================================= */


/* =========================================
   بيانات المنتجات
========================================= */

const defaultProducts = [
  {
    id: 1,
    name: "DXN Spirulina",
    category: "مكملات غذائية",
    icon: "🌿",
    image: "",
    description:
      "سبيرولينا DXN هي مكمل غذائي يعتمد على الطحالب الخضراء المزرقة، وتُستخدم ضمن النظام الغذائي اليومي.",
    benefits:
      "تحتوي على عناصر غذائية متنوعة، ويجب استعمالها وفق تعليمات المنتج واستشارة المختص عند الحاجة.",
    details:
      "سبيرولينا هي نوع من الطحالب الخضراء المزرقة. تُستخدم كمكمل غذائي، ولا تُعد علاجًا لأي مرض."
  },
  {
    id: 2,
    name: "DXN Reishi Gano (RG)",
    category: "مكملات غذائية",
    icon: "🍄",
    image: "",
    description:
      "منتج يعتمد على فطر الجانوديرما المعروف باسم الريشي، ويُستخدم كمكمل غذائي.",
    benefits:
      "يُستخدم ضمن نمط حياة متوازن، مع الالتزام بتعليمات الاستخدام الموجودة على العبوة.",
    details:
      "يُرجى قراءة مكونات المنتج وطريقة استعماله، واستشارة الطبيب قبل استخدام المكملات عند وجود حالة صحية أو تناول أدوية."
  },
  {
    id: 3,
    name: "DXN Lingzhi Coffee",
    category: "المشروبات",
    icon: "☕",
    image: "",
    description:
      "قهوة فورية ممزوجة بمكونات نباتية ومستخلص الجانوديرما.",
    benefits:
      "مشروب يمكن تناوله باعتدال، مع الانتباه إلى كمية الكافيين والسكر حسب نوع المنتج.",
    details:
      "هذا المنتج مشروب غذائي وليس دواءً. يُنصح باتباع تعليمات التحضير الموجودة على العبوة."
  },
  {
    id: 4,
    name: "DXN Cordyceps",
    category: "مكملات غذائية",
    icon: "🌱",
    image: "",
    description:
      "مكمل غذائي يحتوي على مكونات مرتبطة بفطر الكورديسيبس.",
    benefits:
      "يُستخدم كمكمل ضمن نظام غذائي متوازن، ولا ينبغي اعتباره بديلًا للعلاج الطبي.",
    details:
      "قبل استعمال أي مكمل غذائي، يجب التأكد من ملاءمته للعمر والحالة الصحية والأدوية المستخدمة."
  },
  {
    id: 5,
    name: "DXN Vita Café",
    category: "المشروبات",
    icon: "☕",
    image: "",
    description:
      "مشروب قهوة فورية للاستخدام اليومي.",
    benefits:
      "يمكن تناوله باعتدال وفق الاحتياجات الشخصية وتعليمات المنتج.",
    details:
      "يُرجى الانتباه إلى مكونات المشروب، خاصة الكافيين والسكر."
  },
  {
    id: 6,
    name: "DXN Lion's Mane",
    category: "مكملات غذائية",
    icon: "🍄",
    image: "",
    description:
      "مكمل غذائي يعتمد على فطر عرف الأسد.",
    benefits:
      "يُستخدم ضمن النظام الغذائي، ولا توجد في هذا التطبيق وعود علاجية.",
    details:
      "المعلومات المقدمة للتثقيف فقط، ويجب الرجوع إلى مختص قبل الاستخدام عند الحاجة."
  }
];


/* =========================================
   بيانات المقالات
========================================= */

const defaultArticles = [
  {
    id: 1,
    title: "أهمية الغذاء المتوازن",
    icon: "🥗",
    image: "",
    content:
      "الغذاء المتوازن يساعد على تزويد الجسم بالعناصر الغذائية الضرورية. احرص على تنويع الأطعمة وتناول الخضروات والفواكه والحبوب الكاملة وشرب الماء بانتظام."
  },
  {
    id: 2,
    title: "أهمية شرب الماء",
    icon: "💧",
    image: "",
    content:
      "الماء عنصر أساسي للحياة، ويساعد الجسم على أداء وظائفه المختلفة. تختلف الحاجة إلى الماء حسب العمر والنشاط والطقس والحالة الصحية."
  },
  {
    id: 3,
    title: "النشاط البدني والصحة",
    icon: "🚶",
    image: "",
    content:
      "يساعد النشاط البدني المنتظم على تحسين اللياقة ودعم الصحة العامة. ابدأ بخطوات بسيطة واختر نشاطًا يناسب قدراتك."
  }
];


/* =========================================
   بيانات الروابط
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
    title: "معلومات عامة عن التغذية",
    url: "https://www.who.int",
    description: "مصدر عام للمعلومات الصحية والتوعوية."
  }
];


/* =========================================
   المتغيرات
========================================= */

let products = [];
let articles = [];
let links = [];

let currentProductPage = 1;
const productsPerPage = 10;

let currentCategory = "الكل";


/* =========================================
   تحميل البيانات من الهاتف
========================================= */

function loadData() {
  try {
    const savedProducts = localStorage.getItem("dxn_products");
    const savedArticles = localStorage.getItem("dxn_articles");
    const savedLinks = localStorage.getItem("dxn_links");

    products = savedProducts
      ? JSON.parse(savedProducts)
      : JSON.parse(JSON.stringify(defaultProducts));

    articles = savedArticles
      ? JSON.parse(savedArticles)
      : JSON.parse(JSON.stringify(defaultArticles));

    links = savedLinks
      ? JSON.parse(savedLinks)
      : JSON.parse(JSON.stringify(defaultLinks));

  } catch (error) {
    console.error("خطأ في تحميل البيانات:", error);

    products = JSON.parse(JSON.stringify(defaultProducts));
    articles = JSON.parse(JSON.stringify(defaultArticles));
    links = JSON.parse(JSON.stringify(defaultLinks));
  }

  saveData();
}


/* =========================================
   حفظ البيانات
========================================= */

function saveData() {
  try {
    localStorage.setItem("dxn_products", JSON.stringify(products));
    localStorage.setItem("dxn_articles", JSON.stringify(articles));
    localStorage.setItem("dxn_links", JSON.stringify(links));
  } catch (error) {
    console.error("خطأ في حفظ البيانات:", error);
  }
}


/* =========================================
   الانتقال بين الصفحات
========================================= */

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  if (pageId === "products") {
    currentProductPage = 1;
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
}


/* =========================================
   عرض فئات المنتجات
========================================= */

function renderCategories() {
  const container = document.getElementById("productCategories");

  if (!container) {
    return;
  }

  const categories = ["الكل"];

  products.forEach(function(product) {
    if (product.category && !categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  container.innerHTML = "";

  categories.forEach(function(category) {
    const button = document.createElement("button");

    button.className = "category-btn";

    if (category === currentCategory) {
      button.classList.add("active");
    }

    button.textContent = category;

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

  let filteredProducts = products.filter(function(product) {
    const matchesSearch =
      !searchText ||
      String(product.name || "").toLowerCase().includes(searchText) ||
      String(product.description || "").toLowerCase().includes(searchText) ||
      String(product.category || "").toLowerCase().includes(searchText);

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

  const startIndex = (currentProductPage - 1) * productsPerPage;
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
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
        >
      `;
    } else {
      imageHTML = `
        <div
          class="product-image"
          style="height:150px;display:flex;align-items:center;justify-content:center;font-size:65px;background:#17251b;"
        >
          ${product.icon || "🌿"}
        </div>
      `;
    }

    card.innerHTML = `
      ${imageHTML}

      <div class="product-body">

        <div class="product-icon">
          ${product.icon || "🌿"}
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
          class="product-button"
          onclick="showProductDetails(${product.id})"
        >
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
   صفحات المنتجات
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
   تفاصيل المنتج - إصلاح الصفحة الفارغة
========================================= */

function showProductDetails(productId) {
  const product = products.find(function(item) {
    return Number(item.id) === Number(productId);
  });

  if (!product) {
    alert("لم يتم العثور على المنتج.");
    return;
  }

  const oldDetailsPage = document.getElementById("product-details-page");

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
        src="${product.image}"
        alt="${escapeHTML(product.name)}"
        style="width:100%;max-height:300px;object-fit:contain;border-radius:18px;margin-bottom:18px;"
      >
    `;
  } else {
    imageHTML = `
      <div
        style="font-size:90px;text-align:center;padding:25px;background:#17251b;border-radius:18px;margin-bottom:18px;"
      >
        ${product.icon || "🌿"}
      </div>
    `;
  }

  detailsPage.innerHTML = `
    <div class="page-head">

      <button
        class="back-button"
        onclick="closeProductDetails()"
      >
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
          ⚠️ المعلومات للتثقيف والتعريف فقط، وليست وصفة علاجية،
          ولا تغني عن استشارة الطبيب أو المختص.
        </p>
      </div>

    </div>
  `;

  const app = document.getElementById("app");

  if (app) {
    app.appendChild(detailsPage);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   إغلاق تفاصيل المنتج
========================================= */

function closeProductDetails() {
  const detailsPage = document.getElementById("product-details-page");

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
          src="${article.image}"
          alt="${escapeHTML(article.title)}"
        >
      `;
    }

    card.innerHTML = `
      ${imageHTML}

      <h3>
        ${article.icon || "📚"}
        ${escapeHTML(article.title)}
      </h3>

      <p>
        ${escapeHTML(article.content)}
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

  gallery.innerHTML = `
    <div class="empty">
      يمكنك إضافة الصور من قسم الإدارة.
    </div>
  `;
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

    card.innerHTML = `
      <h3>🔗 ${escapeHTML(link.title)}</h3>

      <p>
        ${escapeHTML(link.description || "")}
      </p>

      <button
        class="primary-btn"
        onclick="openExternalLink('${encodeURIComponent(link.url)}')"
      >
        فتح الرابط
      </button>
    `;

    list.appendChild(card);
  });
}


/* =========================================
   فتح رابط خارجي
========================================= */

function openExternalLink(encodedUrl) {
  const url = decodeURIComponent(encodedUrl);

  if (url) {
    window.open(url, "_blank");
  }
}


/* =========================================
   لوحة الإدارة
========================================= */

/* =========================================
   لوحة الإدارة والإعدادات
========================================= */

function renderAdmin() {
  renderAdminProductPages();
  renderAdminProducts();
  renderAdminArticles();
  renderAdminLinks();
}


/* =========================================
   إدارة صفحات المنتجات
========================================= */

function renderAdminProductPages() {
  const container = document.getElementById("adminProductPages");

  if (!container) {
    return;
  }

  const totalPages = Math.max(
    1,
    Math.ceil(products.length / productsPerPage)
  );

  let html = `
    <div class="admin-box">

      <div class="admin-title">
        <h3>صفحات المنتجات</h3>
      </div>

      <p class="small-note">
        عدد المنتجات الحالية: ${products.length}
      </p>

      <div class="admin-pages">
  `;

  for (let page = 1; page <= totalPages; page++) {
    const start = (page - 1) * productsPerPage;
    const end = Math.min(start + productsPerPage, products.length);
    const count = Math.max(0, end - start);

    html += `
      <button
        class="admin-page-btn ${page === currentProductPage ? "current" : ""}"
        onclick="goToAdminProductPage(${page})"
      >
        صفحة ${page}
        <small>${count} منتجات</small>
      </button>
    `;
  }

  html += `
      </div>

      <p class="small-note">
        يمكنك اختيار صفحة لمراجعة المنتجات الموجودة فيها.
      </p>

    </div>
  `;

  container.innerHTML = html;
}


/* =========================================
   الانتقال إلى صفحة منتجات من الإعدادات
========================================= */

function goToAdminProductPage(page) {
  currentProductPage = Number(page) || 1;

  showPage("products");
  renderProducts();
}


/* إتاحة الدالة للأزرار */
window.goToAdminProductPage = goToAdminProductPage;
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
        class="primary-btn"
        onclick="openProductForm()"
      >
        + إضافة منتج
      </button>
  `;

  if (products.length === 0) {
    html += `
      <p class="empty">لا توجد منتجات.</p>
    `;
  }

  products.forEach(function(product) {
    html += `
      <div class="admin-item">

        <strong>
          ${product.icon || "🌿"}
          ${escapeHTML(product.name)}
        </strong>

        <p class="small-note">
          ${escapeHTML(product.category || "عام")}
        </p>

        <div class="admin-actions">

          <button
            class="edit-btn"
            onclick="openProductForm(${product.id})"
          >
            تعديل
          </button>

          <button
            class="delete-btn"
            onclick="deleteProduct(${product.id})"
          >
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
   إضافة أو تعديل منتج
========================================= */

function openProductForm(productId) {
  const product = productId
    ? products.find(function(item) {
        return Number(item.id) === Number(productId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    alert("نافذة الإدارة غير موجودة في الصفحة.");
    return;
  }

  title.textContent = product ? "تعديل المنتج" : "إضافة منتج";

  content.innerHTML = `
    <label class="form-label">اسم المنتج</label>
    <input
      id="formProductName"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.name) : ""}"
      placeholder="اسم المنتج"
    >

    <label class="form-label">الفئة</label>
    <input
      id="formProductCategory"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.category) : ""}"
      placeholder="مثل: مكملات غذائية"
    >

    <label class="form-label">الأيقونة</label>
    <input
      id="formProductIcon"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.icon) : "🌿"}"
      placeholder="🌿"
    >

    <label class="form-label">الوصف</label>
    <textarea
      id="formProductDescription"
      class="form-textarea"
      placeholder="وصف المنتج"
    >${product ? escapeHTML(product.description) : ""}</textarea>

    <label class="form-label">الفوائد والمعلومات</label>
    <textarea
      id="formProductBenefits"
      class="form-textarea"
      placeholder="الفوائد والمعلومات"
    >${product ? escapeHTML(product.benefits) : ""}</textarea>

    <label class="form-label">التفاصيل</label>
    <textarea
      id="formProductDetails"
      class="form-textarea"
      placeholder="تفاصيل إضافية"
    >${product ? escapeHTML(product.details) : ""}</textarea>

    <label class="form-label">رابط الصورة، اختياري</label>
    <input
      id="formProductImage"
      class="form-input"
      type="text"
      value="${product ? escapeAttribute(product.image) : ""}"
      placeholder="اتركه فارغًا إذا لم توجد صورة"
    >

    <div class="form-actions">

      <button
        class="primary-btn"
        onclick="saveProductForm(${product ? product.id : "null"})"
      >
        حفظ
      </button>

      <button
        class="secondary-btn"
        onclick="closeForm()"
      >
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
  const name = document.getElementById("formProductName").value.trim();
  const category = document.getElementById("formProductCategory").value.trim();
  const icon = document.getElementById("formProductIcon").value.trim();
  const description = document.getElementById("formProductDescription").value.trim();
  const benefits = document.getElementById("formProductBenefits").value.trim();
  const details = document.getElementById("formProductDetails").value.trim();
  const image = document.getElementById("formProductImage").value.trim();

  if (!name) {
    alert("اكتب اسم المنتج أولًا.");
    return;
  }

  if (productId) {
    const index = products.findIndex(function(item) {
      return Number(item.id) === Number(productId);
    });

    if (index !== -1) {
      products[index] = {
        ...products[index],
        name,
        category: category || "عام",
        icon: icon || "🌿",
        description,
        benefits,
        details,
        image
      };
    }
  } else {
    const newId = products.length
      ? Math.max(...products.map(function(item) {
          return Number(item.id) || 0;
        })) + 1
      : 1;

    products.push({
      id: newId,
      name,
      category: category || "عام",
      icon: icon || "🌿",
      description,
      benefits,
      details,
      image
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
        class="primary-btn"
        onclick="openArticleForm()"
      >
        + إضافة مقال
      </button>
  `;

  articles.forEach(function(article) {
    html += `
      <div class="admin-item">

        <strong>
          ${article.icon || "📚"}
          ${escapeHTML(article.title)}
        </strong>

        <div class="admin-actions">

          <button
            class="edit-btn"
            onclick="openArticleForm(${article.id})"
          >
            تعديل
          </button>

          <button
            class="delete-btn"
            onclick="deleteArticle(${article.id})"
          >
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
   إضافة أو تعديل مقال
========================================= */

function openArticleForm(articleId) {
  const article = articleId
    ? articles.find(function(item) {
        return Number(item.id) === Number(articleId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    return;
  }

  title.textContent = article ? "تعديل المقال" : "إضافة مقال";

  content.innerHTML = `
    <label class="form-label">عنوان المقال</label>
    <input
      id="formArticleTitle"
      class="form-input"
      type="text"
      value="${article ? escapeAttribute(article.title) : ""}"
      placeholder="عنوان المقال"
    >

    <label class="form-label">الأيقونة</label>
    <input
      id="formArticleIcon"
      class="form-input"
      type="text"
      value="${article ? escapeAttribute(article.icon) : "📚"}"
      placeholder="📚"
    >

    <label class="form-label">محتوى المقال</label>
    <textarea
      id="formArticleContent"
      class="form-textarea"
      placeholder="اكتب محتوى المقال"
    >${article ? escapeHTML(article.content) : ""}</textarea>

    <label class="form-label">رابط الصورة، اختياري</label>
    <input
      id="formArticleImage"
      class="form-input"
      type="text"
      value="${article ? escapeAttribute(article.image) : ""}"
      placeholder="رابط الصورة أو اتركه فارغًا"
    >

    <div class="form-actions">

      <button
        class="primary-btn"
        onclick="saveArticleForm(${article ? article.id : "null"})"
      >
        حفظ
      </button>

      <button
        class="secondary-btn"
        onclick="closeForm()"
      >
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
  const title = document.getElementById("formArticleTitle").value.trim();
  const icon = document.getElementById("formArticleIcon").value.trim();
  const content = document.getElementById("formArticleContent").value.trim();
  const image = document.getElementById("formArticleImage").value.trim();

  if (!title) {
    alert("اكتب عنوان المقال أولًا.");
    return;
  }

  if (articleId) {
    const index = articles.findIndex(function(item) {
      return Number(item.id) === Number(articleId);
    });

    if (index !== -1) {
      articles[index] = {
        ...articles[index],
        title,
        icon: icon || "📚",
        content,
        image
      };
    }
  } else {
    const newId = articles.length
      ? Math.max(...articles.map(function(item) {
          return Number(item.id) || 0;
        })) + 1
      : 1;

    articles.push({
      id: newId,
      title,
      icon: icon || "📚",
      content,
      image
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
        class="primary-btn"
        onclick="openLinkForm()"
      >
        + إضافة رابط
      </button>
  `;

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
            class="edit-btn"
            onclick="openLinkForm(${link.id})"
          >
            تعديل
          </button>

          <button
            class="delete-btn"
            onclick="deleteLink(${link.id})"
          >
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
   إضافة أو تعديل رابط
========================================= */

function openLinkForm(linkId) {
  const link = linkId
    ? links.find(function(item) {
        return Number(item.id) === Number(linkId);
      })
    : null;

  const overlay = document.getElementById("formOverlay");
  const title = document.getElementById("formTitle");
  const content = document.getElementById("formContent");

  if (!overlay || !title || !content) {
    return;
  }

  title.textContent = link ? "تعديل الرابط" : "إضافة رابط";

  content.innerHTML = `
    <label class="form-label">اسم الرابط</label>
    <input
      id="formLinkTitle"
      class="form-input"
      type="text"
      value="${link ? escapeAttribute(link.title) : ""}"
      placeholder="اسم الرابط"
    >

    <label class="form-label">الرابط</label>
    <input
      id="formLinkUrl"
      class="form-input"
      type="url"
      value="${link ? escapeAttribute(link.url) : ""}"
      placeholder="https://example.com"
    >

    <label class="form-label">الوصف</label>
    <textarea
      id="formLinkDescription"
      class="form-textarea"
      placeholder="وصف الرابط"
    >${link ? escapeHTML(link.description) : ""}</textarea>

    <div class="form-actions">

      <button
        class="primary-btn"
        onclick="saveLinkForm(${link ? link.id : "null"})"
      >
        حفظ
      </button>

      <button
        class="secondary-btn"
        onclick="closeForm()"
      >
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
  const title = document.getElementById("formLinkTitle").value.trim();
  const url = document.getElementById("formLinkUrl").value.trim();
  const description = document.getElementById("formLinkDescription").value.trim();

  if (!title || !url) {
    alert("اكتب اسم الرابط والرابط.");
    return;
  }

  if (linkId) {
    const index = links.findIndex(function(item) {
      return Number(item.id) === Number(linkId);
    });

    if (index !== -1) {
      links[index] = {
        ...links[index],
        title,
        url,
        description
      };
    }
  } else {
    const newId = links.length
      ? Math.max(...links.map(function(item) {
          return Number(item.id) || 0;
        })) + 1
      : 1;

    links.push({
      id: newId,
      title,
      url,
      description
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
   إغلاق نافذة الإدارة
========================================= */

function closeForm() {
  const overlay = document.getElementById("formOverlay");

  if (overlay) {
    overlay.classList.remove("show");
  }
}


/* =========================================
   البحث في المنتجات والمقالات
========================================= */

document.addEventListener("DOMContentLoaded", function() {
  const productSearch = document.getElementById("productSearch");
  const articleSearch = document.getElementById("articleSearch");

  if (productSearch) {
    productSearch.addEventListener("input", function() {
      currentProductPage = 1;
      renderProducts();
    });
  }

  if (articleSearch) {
    articleSearch.addEventListener("input", function() {
      renderArticles();
    });
  }
});


/* =========================================
   حماية النصوص من HTML
========================================= */

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


/* =========================================
   تشغيل التطبيق
========================================= */

loadData();
renderProducts();
renderArticles();
renderGallery();
renderLinks();


/* =========================================
   جعل الدوال متاحة للأزرار
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

window.closeForm = closeForm;
window.renderAdmin = renderAdmin;
