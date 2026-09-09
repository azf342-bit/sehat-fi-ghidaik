/* =========================================================
   صحتك في غذائك - DXN
   نسخة مستقرة: منتجات + 40 صفحة + مقالات + روابط + صور
   لا تحتاج إلى أي مكتبات خارجية.
   ========================================================= */

"use strict";

const PRODUCT_PAGES = 40;
const PRODUCTS_PER_PAGE = 10;

let products = [];
let articles = [];
let links = [];

let currentProductPage = 1;
let currentProductCategory = "الكل";

const KEYS = {
  products: "dxn_products",
  articles: "dxn_articles",
  links: "dxn_links"
};

const defaultProducts = [
  {id:1,name:"DXN Spirulina",category:"مكملات غذائية",icon:"🌿",description:"معلومات عامة عن منتج سبيرولينا.",ingredients:"سبيرولينا ومكونات المنتج كما هي موضحة على العبوة.",forms:"أقراص / حسب العبوة.",image:""},
  {id:2,name:"DXN Reishi Gano (RG)",category:"مكملات غذائية",icon:"🍄",description:"منتج يحتوي على الجانوديرما وفق تركيبة المنتج.",ingredients:"مكونات المنتج حسب الملصق.",forms:"أقراص / حسب العبوة.",image:""},
  {id:3,name:"DXN Ganocelium (GL)",category:"مكملات غذائية",icon:"🍄",description:"معلومات تعريفية عن منتج Ganocelium.",ingredients:"مكونات المنتج حسب الملصق.",forms:"حسب العبوة.",image:""},
  {id:4,name:"DXN Reishilium Powder",category:"مكملات غذائية",icon:"🌿",description:"مسحوق غذائي ضمن منتجات DXN.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"مسحوق.",image:""},
  {id:5,name:"DXN Cordyceps",category:"مكملات غذائية",icon:"🌱",description:"معلومات عامة عن منتج Cordyceps.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:6,name:"DXN Lion's Mane Mushroom",category:"مكملات غذائية",icon:"🍄",description:"منتج مرتبط بفطر عرف الأسد.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:7,name:"DXN Andro-G",category:"مكملات غذائية",icon:"🌿",description:"معلومات عامة عن المنتج.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:8,name:"DXN Lingzhi Coffee 3-in-1",category:"مشروبات",icon:"☕",description:"قهوة سريعة التحضير ضمن منتجات DXN.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"أكياس / حسب العبوة.",image:""},
  {id:9,name:"DXN Lingzhi Black Coffee",category:"مشروبات",icon:"☕",description:"قهوة سوداء سريعة التحضير.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:10,name:"DXN Cocozhi",category:"مشروبات",icon:"🥥",description:"مشروب الكاكاو وجوز الهند.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"أكياس / حسب العبوة.",image:""},
  {id:11,name:"DXN Cordyceps Coffee 3-in-1",category:"مشروبات",icon:"☕",description:"قهوة 3 في 1 ضمن منتجات DXN.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:12,name:"DXN Spirulina Cereal",category:"غذاء",icon:"🥣",description:"منتج غذائي يعتمد على الحبوب مع مكونات موضحة على العبوة.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:13,name:"DXN Morinzhi",category:"مشروبات",icon:"🍹",description:"مشروب غذائي ضمن مجموعة DXN.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""},
  {id:14,name:"DXN Cordypine",category:"مشروبات",icon:"🍍",description:"مشروب غذائي ضمن منتجات DXN.",ingredients:"يرجى مراجعة ملصق المنتج.",forms:"حسب العبوة.",image:""}
];

const defaultArticles = [
  {id:1,title:"الغذاء المتوازن",icon:"🥗",summary:"تعرف على أهمية التنوع الغذائي.",content:"الغذاء المتوازن يعتمد على التنوع والاعتدال واختيار مجموعة مختلفة من الأغذية. لا يعتمد نمط الحياة الصحي على طعام واحد فقط.",image:""},
  {id:2,title:"أهمية شرب الماء",icon:"💧",summary:"الماء جزء أساسي من النظام الغذائي اليومي.",content:"الماء عنصر أساسي للعديد من وظائف الجسم. تختلف الاحتياجات حسب النشاط والطقس والغذاء. اجعل شرب الماء عادة منتظمة خلال اليوم.",image:""},
  {id:3,title:"الحركة والنشاط",icon:"🏃",summary:"الحركة المنتظمة جزء مهم من نمط حياة صحي.",content:"يمكن أن تكون الحركة اليومية بسيطة مثل المشي أو ممارسة تمارين مناسبة لقدرات الشخص. المهم هو الاستمرارية.",image:""}
];

const defaultLinks = [
  {id:1,title:"موقع DXN الرسمي",description:"الموقع الرسمي لشركة DXN.",url:"https://www.dxn2u.com/"}
];

function escapeHTML(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function normalizeUrl(url){
  let value = String(url || "").trim();
  if(!value) return "";
  if(!/^https?:\/\//i.test(value)) value = "https://" + value;
  return value;
}

function loadData(){
  try{ products = JSON.parse(localStorage.getItem(KEYS.products)) || structuredClone(defaultProducts); }
  catch(e){ products = structuredClone(defaultProducts); }
  try{ articles = JSON.parse(localStorage.getItem(KEYS.articles)) || structuredClone(defaultArticles); }
  catch(e){ articles = structuredClone(defaultArticles); }
  try{ links = JSON.parse(localStorage.getItem(KEYS.links)) || structuredClone(defaultLinks); }
  catch(e){ links = structuredClone(defaultLinks); }

  products = products.map((p,i)=>({
    id:p.id ?? Date.now()+i,
    name:p.name || "منتج بدون اسم",
    category:p.category || "عام",
    icon:p.icon || "🌿",
    description:p.description || "",
    ingredients:p.ingredients || "",
    forms:p.forms || "",
    image:p.image || ""
  }));
  articles = articles.map((a,i)=>({
    id:a.id ?? Date.now()+i,title:a.title || "مقال",icon:a.icon || "📖",
    summary:a.summary || "",content:a.content || "",image:a.image || ""
  }));
  links = links.map((l,i)=>({
    id:l.id ?? Date.now()+i,title:l.title || "رابط",description:l.description || "",url:normalizeUrl(l.url)
  }));
}

function saveProducts(){
  try{ localStorage.setItem(KEYS.products,JSON.stringify(products)); return true; }
  catch(e){ alert("⚠️ تعذر حفظ المنتجات. مساحة التخزين قد تكون ممتلئة، جرّب صورة أصغر."); return false; }
}
function saveArticles(){
  try{ localStorage.setItem(KEYS.articles,JSON.stringify(articles)); return true; }
  catch(e){ alert("⚠️ تعذر حفظ المقالات. جرّب صورة أصغر."); return false; }
}
function saveLinks(){
  try{ localStorage.setItem(KEYS.links,JSON.stringify(links)); return true; }
  catch(e){ alert("⚠️ تعذر حفظ الروابط."); return false; }
}

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const page = document.getElementById(id);
  if(!page) return;
  page.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="products") renderProducts();
  if(id==="articles") renderArticles();
  if(id==="images") renderGallery();
  if(id==="links") renderLinks();
  if(id==="admin"){renderAdminProductPages();renderAdminProducts();renderAdminArticles();renderAdminLinks();}
}

function renderCategories(){
  const box = document.getElementById("productCategories");
  if(!box) return;
  const cats = ["الكل",...new Set(products.map(p=>p.category).filter(Boolean))];
  box.innerHTML = cats.map(cat=>`
    <button class="category-btn ${cat===currentProductCategory?"active":""}"
      onclick="filterProducts('${escapeHTML(cat)}')">${escapeHTML(cat)}</button>
  `).join("");
}

function filterProducts(category){
  currentProductCategory = category || "الكل";
  currentProductPage = 1;
  renderProducts();
}

function getFilteredProducts(){
  const search = (document.getElementById("productSearch")?.value || "").trim().toLowerCase();
  return products.filter(p=>{
    const catOK = currentProductCategory==="الكل" || p.category===currentProductCategory;
    const text = [p.name,p.category,p.description,p.ingredients,p.forms].join(" ").toLowerCase();
    return catOK && (!search || text.includes(search));
  });
}

function renderProducts(){
  renderCategories();
  const list = document.getElementById("productsList");
  if(!list) return;

  const filtered = getFilteredProducts();
  const totalPages = PRODUCT_PAGES;
  if(currentProductPage<1) currentProductPage=1;
  if(currentProductPage>totalPages) currentProductPage=totalPages;

  const start=(currentProductPage-1)*PRODUCTS_PER_PAGE;
  const items=filtered.slice(start,start+PRODUCTS_PER_PAGE);

  if(!items.length){
    list.innerHTML=`<div class="empty">لا توجد منتجات في الصفحة ${currentProductPage}.</div>`;
  }else{
    list.innerHTML=items.map(p=>`
      <article class="product-card">
        ${p.image?`<img class="product-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}">`:""}
        <div class="product-body">
          <div class="product-icon">${escapeHTML(p.icon)}</div>
          <h3>${escapeHTML(p.name)}</h3>
          <p>🏷️ ${escapeHTML(p.category)}</p>
          <p>${escapeHTML(p.description)}</p>
          <button class="product-button" onclick="showProductDetails('${escapeHTML(p.id)}')">📖 التفاصيل</button>
        </div>
      </article>
    `).join("");
  }
  renderProductPagination();
}

function renderProductPagination(){
  const box=document.getElementById("productPagination");
  if(!box) return;
  let html=`<div class="page-info">صفحة <strong>${currentProductPage}</strong> من <strong>${PRODUCT_PAGES}</strong> — ${products.length} منتج</div>`;
  html+=`<button class="page-arrow" onclick="prevProductPage()" ${currentProductPage===1?"disabled":""}>◀ السابقة</button>`;
  for(let i=1;i<=PRODUCT_PAGES;i++){
    html+=`<button class="page-number ${i===currentProductPage?"active":""}" onclick="goToProductPage(${i})">${i}</button>`;
  }
  html+=`<button class="page-arrow" onclick="nextProductPage()" ${currentProductPage===PRODUCT_PAGES?"disabled":""}>التالية ▶</button>`;
  box.innerHTML=html;
}

function goToProductPage(page){
  const n=Math.max(1,Math.min(PRODUCT_PAGES,Number(page)||1));
  currentProductPage=n;
  showPage("products");
}
function nextProductPage(){ if(currentProductPage<PRODUCT_PAGES) goToProductPage(currentProductPage+1); }
function prevProductPage(){ if(currentProductPage>1) goToProductPage(currentProductPage-1); }
function searchProducts(){ currentProductPage=1; renderProducts(); }

function showProductDetails(id){
  const p=products.find(x=>String(x.id)===String(id));
  if(!p){alert("⚠️ المنتج غير موجود.");return;}
  const page=document.createElement("section");
  page.className="page active";
  page.id="productDetailsTemp";
  page.innerHTML=`
    <div class="page-head">
      <button class="back-button" onclick="document.getElementById('productDetailsTemp')?.remove();showPage('products')">↩️ رجوع</button>
      <h2>📦 تفاصيل المنتج</h2>
    </div>
    <div class="info-card">
      ${p.image?`<img class="article-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}">`:""}
      <h3>${escapeHTML(p.icon)} ${escapeHTML(p.name)}</h3>
      <p>🏷️ التصنيف: ${escapeHTML(p.category)}</p>
      <p>📝 ${escapeHTML(p.description)}</p>
      <p>🧪 <strong>المكونات:</strong><br>${escapeHTML(p.ingredients)}</p>
      <p>📦 <strong>الشكل:</strong><br>${escapeHTML(p.forms)}</p>
      <p>⚠️ المعلومات للتثقيف فقط. راجع عبوة المنتج ومختصاً عند الحاجة.</p>
    </div>`;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("app").appendChild(page);
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderAdminProductPages(){
  const box=document.getElementById("adminProductPages");
  if(!box)return;
  box.innerHTML="";
  for(let page=1;page<=PRODUCT_PAGES;page++){
    const count=products.slice((page-1)*PRODUCTS_PER_PAGE,page*PRODUCTS_PER_PAGE).length;
    const b=document.createElement("button");
    b.className="admin-page-btn"+(page===currentProductPage?" current":"");
    b.innerHTML=`صفحة ${page}<small>${count} منتج</small>`;
    b.onclick=()=>goToProductPage(page);
    box.appendChild(b);
  }
}

function renderAdminProducts(){
  const box=document.getElementById("adminProducts");
  if(!box)return;
  if(!products.length){box.innerHTML='<div class="empty">لا توجد منتجات.</div>';return;}
  box.innerHTML=products.map((p,i)=>{
    const page=Math.floor(i/PRODUCTS_PER_PAGE)+1;
    return `<div class="admin-item">
      ${p.image?`<img class="article-image" src="${escapeHTML(p.image)}" alt="">`:""}
      <strong>${escapeHTML(p.icon)} ${escapeHTML(p.name)}</strong>
      <div>🏷️ ${escapeHTML(p.category)} — 📄 الصفحة ${page} من ${PRODUCT_PAGES}</div>
      <div class="admin-actions">
        <button class="secondary-btn" onclick="showProductDetails('${escapeHTML(p.id)}')">👁️ عرض</button>
        <button class="edit-btn product-button" onclick="editProduct('${escapeHTML(p.id)}')">✏️ تعديل</button>
        <button class="delete-btn product-button" onclick="deleteProduct('${escapeHTML(p.id)}')">🗑️ حذف</button>
      </div>
    </div>`;
  }).join("");
}

function openProductForm(id=""){
  const p=id?products.find(x=>String(x.id)===String(id)):null;
  if(id && !p){alert("⚠️ المنتج غير موجود.");return;}
  const isEdit=!!p;
  document.getElementById("formTitle").textContent=isEdit?"✏️ تعديل المنتج":"➕ إضافة منتج جديد";
  document.getElementById("formContent").innerHTML=`
    <label class="form-label">اسم المنتج *</label>
    <input id="productName" class="form-input" value="${escapeHTML(p?.name||"")}" placeholder="اكتب اسم المنتج">
    <label class="form-label">التصنيف</label>
    <input id="productCategory" class="form-input" value="${escapeHTML(p?.category||"مكملات غذائية")}" placeholder="مثال: مكملات غذائية">
    <label class="form-label">الأيقونة</label>
    <input id="productIcon" class="form-input" value="${escapeHTML(p?.icon||"🌿")}" placeholder="🌿">
    <label class="form-label">وصف المنتج *</label>
    <textarea id="productDescription" class="form-textarea" placeholder="اكتب وصفاً للمنتج">${escapeHTML(p?.description||"")}</textarea>
    <label class="form-label">المكونات</label>
    <textarea id="productIngredients" class="form-textarea" placeholder="اكتب المكونات">${escapeHTML(p?.ingredients||"")}</textarea>
    <label class="form-label">الشكل / العبوة</label>
    <input id="productForms" class="form-input" value="${escapeHTML(p?.forms||"")}" placeholder="مثال: أقراص / مسحوق">
    <label class="form-label">🖼️ صورة المنتج</label>
    <div class="upload-box">
      <input id="productImage" type="file" accept="image/*" onchange="previewUpload('productImage','productPreview')">
      <img id="productPreview" class="image-preview" style="display:${p?.image?"block":"none"}" src="${escapeHTML(p?.image||"")}" alt="">
      <button type="button" class="secondary-btn" onclick="removePreview('productPreview','productImage')">🗑️ إزالة الصورة</button>
    </div>
    <div class="form-actions">
      <button class="primary-btn" onclick="saveProduct('${escapeHTML(p?.id||"")}')">💾 حفظ</button>
      <button class="secondary-btn" onclick="closeForm()">↩️ إلغاء</button>
    </div>`;
  openForm();
}

async function saveProduct(id=""){
  const name=document.getElementById("productName")?.value.trim();
  const category=document.getElementById("productCategory")?.value.trim()||"عام";
  const icon=document.getElementById("productIcon")?.value.trim()||"🌿";
  const description=document.getElementById("productDescription")?.value.trim();
  const ingredients=document.getElementById("productIngredients")?.value.trim()||"";
  const forms=document.getElementById("productForms")?.value.trim()||"";
  const input=document.getElementById("productImage");

  if(!name || !description){alert("⚠️ يرجى كتابة اسم المنتج ووصف المنتج.");return;}

  let image="";
  if(id){
    const old=products.find(p=>String(p.id)===String(id));
    image=old?.image||"";
  }
  const preview=document.getElementById("productPreview");
  if(preview && preview.src && preview.style.display!=="none" && preview.src.startsWith("data:")) image=preview.src;
  if(input?.files?.[0]){
    try{image=await compressImage(input.files[0]);}
    catch(e){alert("⚠️ تعذر معالجة الصورة.");return;}
  }

  if(!id && products.length>=PRODUCT_PAGES*PRODUCTS_PER_PAGE){
    alert("⚠️ وصلت إلى الحد الأقصى: 400 منتج.");
    return;
  }

  if(id){
    const index=products.findIndex(p=>String(p.id)===String(id));
    if(index===-1){alert("⚠️ المنتج غير موجود.");return;}
    products[index]={...products[index],name,category,icon,description,ingredients,forms,image};
  }else{
    products.push({id:Date.now(),name,category,icon,description,ingredients,forms,image});
  }

  if(saveProducts()){
    closeForm();
    renderAdminProducts();
    renderAdminProductPages();
    renderProducts();
    alert(id?"✅ تم تعديل المنتج بنجاح.":"✅ تمت إضافة المنتج بنجاح.");
  }
}

function editProduct(id){openProductForm(id);}

function deleteProduct(id){
  const p=products.find(x=>String(x.id)===String(id));
  if(!p){alert("⚠️ المنتج غير موجود.");return;}
  if(!confirm("هل تريد حذف المنتج:\n\n"+p.name+" ؟"))return;
  products=products.filter(x=>String(x.id)!==String(id));
  if(saveProducts()){
    renderAdminProducts();renderAdminProductPages();renderProducts();
    alert("✅ تم حذف المنتج.");
  }
}

function renderArticles(){
  const box=document.getElementById("articlesList");
  if(!box)return;
  const q=(document.getElementById("articleSearch")?.value||"").trim().toLowerCase();
  const arr=articles.filter(a=>[a.title,a.summary,a.content].join(" ").toLowerCase().includes(q));
  if(!arr.length){box.innerHTML='<div class="empty">لا توجد مقالات مطابقة.</div>';return;}
  box.innerHTML=arr.map(a=>`
    <article class="article-card">
      ${a.image?`<img class="article-image" src="${escapeHTML(a.image)}" alt="${escapeHTML(a.title)}">`:""}
      <h3>${escapeHTML(a.icon)} ${escapeHTML(a.title)}</h3>
      <p>${escapeHTML(a.summary)}</p>
      <button class="product-button" onclick="showArticleDetails('${escapeHTML(a.id)}')">📖 قراءة المقال</button>
    </article>`).join("");
}

function showArticleDetails(id){
  const a=articles.find(x=>String(x.id)===String(id));
  if(!a){alert("⚠️ المقال غير موجود.");return;}
  const old=document.getElementById("articleDetailsTemp"); if(old)old.remove();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const page=document.createElement("section");
  page.className="page active";page.id="articleDetailsTemp";
  page.innerHTML=`
    <div class="page-head"><button class="back-button" onclick="document.getElementById('articleDetailsTemp')?.remove();showPage('articles')">↩️ رجوع</button><h2>📖 المقال</h2></div>
    <div class="info-card">
      ${a.image?`<img class="article-image" src="${escapeHTML(a.image)}" alt="">`:""}
      <h3>${escapeHTML(a.icon)} ${escapeHTML(a.title)}</h3>
      <h4>${escapeHTML(a.summary)}</h4>
      <p style="white-space:pre-line">${escapeHTML(a.content)}</p>
    </div>`;
  document.getElementById("app").appendChild(page);
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderAdminArticles(){
  const box=document.getElementById("adminArticles");if(!box)return;
  box.innerHTML=articles.length?articles.map(a=>`
    <div class="admin-item"><strong>${escapeHTML(a.icon)} ${escapeHTML(a.title)}</strong>
      <div class="admin-actions">
        <button class="secondary-btn" onclick="showArticleDetails('${escapeHTML(a.id)}')">👁️ عرض</button>
        <button class="edit-btn product-button" onclick="openArticleForm('${escapeHTML(a.id)}')">✏️ تعديل</button>
        <button class="delete-btn product-button" onclick="deleteArticle('${escapeHTML(a.id)}')">🗑️ حذف</button>
      </div>
    </div>`).join(""):'<div class="empty">لا توجد مقالات.</div>';
}

function openArticleForm(id=""){
  const a=id?articles.find(x=>String(x.id)===String(id)):null;
  if(id&&!a){alert("⚠️ المقال غير موجود.");return;}
  document.getElementById("formTitle").textContent=a?"✏️ تعديل المقال":"➕ إضافة مقال";
  document.getElementById("formContent").innerHTML=`
    <label class="form-label">العنوان *</label>
    <input id="articleTitle" class="form-input" value="${escapeHTML(a?.title||"")}" placeholder="عنوان المقال">
    <label class="form-label">الأيقونة</label>
    <input id="articleIcon" class="form-input" value="${escapeHTML(a?.icon||"📖")}" placeholder="📖">
    <label class="form-label">الوصف المختصر *</label>
    <textarea id="articleSummary" class="form-textarea">${escapeHTML(a?.summary||"")}</textarea>
    <label class="form-label">المحتوى *</label>
    <textarea id="articleContent" class="form-textarea" style="min-height:220px">${escapeHTML(a?.content||"")}</textarea>
    <label class="form-label">🖼️ الصورة</label>
    <div class="upload-box">
      <input id="articleImage" type="file" accept="image/*" onchange="previewUpload('articleImage','articlePreview')">
      <img id="articlePreview" class="image-preview" style="display:${a?.image?"block":"none"}" src="${escapeHTML(a?.image||"")}" alt="">
      <button type="button" class="secondary-btn" onclick="removePreview('articlePreview','articleImage')">🗑️ إزالة الصورة</button>
    </div>
    <div class="form-actions">
      <button class="primary-btn" onclick="saveArticle('${escapeHTML(a?.id||"")}')">💾 حفظ</button>
      <button class="secondary-btn" onclick="closeForm()">↩️ إلغاء</button>
    </div>`;
  openForm();
}

async function saveArticle(id=""){
  const title=document.getElementById("articleTitle")?.value.trim();
  const icon=document.getElementById("articleIcon")?.value.trim()||"📖";
  const summary=document.getElementById("articleSummary")?.value.trim();
  const content=document.getElementById("articleContent")?.value.trim();
  const input=document.getElementById("articleImage");
  if(!title||!summary||!content){alert("⚠️ يرجى ملء العنوان والوصف والمحتوى.");return;}
  let image=id?(articles.find(a=>String(a.id)===String(id))?.image||""):"";
  const preview=document.getElementById("articlePreview");
  if(preview&&preview.src&&preview.style.display!=="none"&&preview.src.startsWith("data:"))image=preview.src;
  if(input?.files?.[0]){try{image=await compressImage(input.files[0]);}catch(e){alert("⚠️ تعذر معالجة الصورة.");return;}}
  if(id){
    const i=articles.findIndex(a=>String(a.id)===String(id));
    if(i<0){alert("⚠️ المقال غير موجود.");return;}
    articles[i]={...articles[i],title,icon,summary,content,image};
  }else articles.push({id:Date.now(),title,icon,summary,content,image});
  if(saveArticles()){closeForm();renderArticles();renderAdminArticles();alert(id?"✅ تم تعديل المقال.":"✅ تمت إضافة المقال.");}
}
function deleteArticle(id){
  const a=articles.find(x=>String(x.id)===String(id));if(!a)return;
  if(!confirm("هل تريد حذف المقال:\n\n"+a.title+" ؟"))return;
  articles=articles.filter(x=>String(x.id)!==String(id));
  if(saveArticles()){renderArticles();renderAdminArticles();alert("✅ تم حذف المقال.");}
}

function renderLinks(){
  const box=document.getElementById("linksList");if(!box)return;
  box.innerHTML=links.length?links.map(l=>`
    <div class="link-card">
      <h3>🔗 ${escapeHTML(l.title)}</h3>
      <p>${escapeHTML(l.description)}</p>
      <a class="product-button" style="display:inline-block;text-decoration:none" href="${escapeHTML(l.url)}" target="_blank" rel="noopener noreferrer">🌐 فتح الرابط</a>
    </div>`).join(""):'<div class="empty">لا توجد روابط.</div>';
}

function renderAdminLinks(){
  const box=document.getElementById("adminLinks");if(!box)return;
  box.innerHTML=links.length?links.map(l=>`
    <div class="admin-item"><strong>🔗 ${escapeHTML(l.title)}</strong><div>${escapeHTML(l.url)}</div>
      <div class="admin-actions">
        <button class="secondary-btn" onclick="openExternal('${escapeHTML(l.url)}')">🌐 فتح</button>
        <button class="edit-btn product-button" onclick="openLinkForm('${escapeHTML(l.id)}')">✏️ تعديل</button>
        <button class="delete-btn product-button" onclick="deleteLink('${escapeHTML(l.id)}')">🗑️ حذف</button>
      </div>
    </div>`).join(""):'<div class="empty">لا توجد روابط.</div>';
}

function openLinkForm(id=""){
  const l=id?links.find(x=>String(x.id)===String(id)):null;
  if(id&&!l){alert("⚠️ الرابط غير موجود.");return;}
  document.getElementById("formTitle").textContent=l?"✏️ تعديل الرابط":"➕ إضافة رابط";
  document.getElementById("formContent").innerHTML=`
    <label class="form-label">عنوان الرابط *</label>
    <input id="linkTitle" class="form-input" value="${escapeHTML(l?.title||"")}" placeholder="مثال: موقع DXN الرسمي">
    <label class="form-label">وصف الرابط</label>
    <textarea id="linkDescription" class="form-textarea">${escapeHTML(l?.description||"")}</textarea>
    <label class="form-label">الرابط URL *</label>
    <input id="linkUrl" class="form-input" type="url" value="${escapeHTML(l?.url||"")}" placeholder="https://example.com">
    <div class="form-actions">
      <button class="primary-btn" onclick="saveLink('${escapeHTML(l?.id||"")}')">💾 حفظ الرابط</button>
      <button class="secondary-btn" onclick="closeForm()">↩️ إلغاء</button>
    </div>`;
  openForm();
}

function saveLink(id=""){
  const title=document.getElementById("linkTitle")?.value.trim();
  const description=document.getElementById("linkDescription")?.value.trim()||"";
  const url=normalizeUrl(document.getElementById("linkUrl")?.value);
  if(!title||!url){alert("⚠️ يرجى كتابة عنوان الرابط والرابط.");return;}
  if(!/^https?:\/\/.+/i.test(url)){alert("⚠️ الرابط غير صحيح.");return;}
  if(id){
    const i=links.findIndex(l=>String(l.id)===String(id));
    if(i<0){alert("⚠️ الرابط غير موجود.");return;}
    links[i]={...links[i],title,description,url};
  }else links.push({id:Date.now(),title,description,url});
  if(saveLinks()){closeForm();renderLinks();renderAdminLinks();alert(id?"✅ تم تعديل الرابط.":"✅ تمت إضافة الرابط.");}
}

function deleteLink(id){
  const l=links.find(x=>String(x.id)===String(id));if(!l)return;
  if(!confirm("هل تريد حذف الرابط:\n\n"+l.title+" ؟"))return;
  links=links.filter(x=>String(x.id)!==String(id));
  if(saveLinks()){renderLinks();renderAdminLinks();alert("✅ تم حذف الرابط.");}
}

function openExternal(url){
  const u=normalizeUrl(url);
  if(u) window.open(u,"_blank","noopener,noreferrer");
}

function openForm(){document.getElementById("formOverlay")?.classList.add("show");}
function closeForm(){document.getElementById("formOverlay")?.classList.remove("show");}
function overlayClose(e){if(e.target===e.currentTarget)closeForm();}

function previewUpload(inputId,previewId){
  const input=document.getElementById(inputId), preview=document.getElementById(previewId);
  if(!input?.files?.[0]||!preview)return;
  const reader=new FileReader();
  reader.onload=e=>{preview.src=e.target.result;preview.style.display="block";};
  reader.readAsDataURL(input.files[0]);
}

function removePreview(previewId,inputId){
  const p=document.getElementById(previewId),i=document.getElementById(inputId);
  if(i)i.value="";
  if(p){p.src="";p.style.display="none";}
}

function compressImage(file,maxSize=900,quality=.72){
  return new Promise((resolve,reject)=>{
    if(!file||!file.type.startsWith("image/")){reject(new Error("not-image"));return;}
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        let w=img.width,h=img.height;
        if(w>maxSize||h>maxSize){const r=Math.min(maxSize/w,maxSize/h);w=Math.round(w*r);h=Math.round(h*r);}
        const canvas=document.createElement("canvas");canvas.width=w;canvas.height=h;
        const ctx=canvas.getContext("2d");ctx.drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL("image/jpeg",quality));
      };
      img.onerror=()=>reject(new Error("image"));
      img.src=e.target.result;
    };
    reader.onerror=()=>reject(new Error("read"));
    reader.readAsDataURL(file);
  });
}

function renderGallery(){
  const box=document.getElementById("galleryList");if(!box)return;
  const imgs=products.filter(p=>p.image).map(p=>({src:p.image,title:p.name}))
    .concat(articles.filter(a=>a.image).map(a=>({src:a.image,title:a.title})));
  box.innerHTML=imgs.length?imgs.map(x=>`<div><img src="${escapeHTML(x.src)}" alt="${escapeHTML(x.title)}"><p>${escapeHTML(x.title)}</p></div>`).join("")
    :'<div class="empty">لا توجد صور مضافة بعد.</div>';
}

function resetAllData(){
  if(!confirm("سيتم حذف التعديلات وإرجاع البيانات الافتراضية. هل أنت متأكد؟"))return;
  products=structuredClone(defaultProducts);
  articles=structuredClone(defaultArticles);
  links=structuredClone(defaultLinks);
  saveProducts();saveArticles();saveLinks();
  currentProductPage=1;currentProductCategory="الكل";
  const s=document.getElementById("productSearch");if(s)s.value="";
  renderProducts();renderArticles();renderGallery();renderLinks();
  renderAdminProductPages();renderAdminProducts();renderAdminArticles();renderAdminLinks();
  alert("✅ تمت إعادة البيانات الافتراضية.");
}

document.addEventListener("keydown",e=>{if(e.key==="Escape")closeForm();});

loadData();
renderProducts();
renderArticles();
renderGallery();
renderLinks();

/* مهم جداً: جعل الدوال متاحة للأزرار onclick داخل HTML */
window.showPage=showPage;
window.filterProducts=filterProducts;
window.goToProductPage=goToProductPage;
window.nextProductPage=nextProductPage;
window.prevProductPage=prevProductPage;
window.searchProducts=searchProducts;
window.showProductDetails=showProductDetails;
window.openProductForm=openProductForm;
window.saveProduct=saveProduct;
window.editProduct=editProduct;
window.deleteProduct=deleteProduct;
window.openArticleForm=openArticleForm;
window.saveArticle=saveArticle;
window.deleteArticle=deleteArticle;
window.renderArticles=renderArticles;
window.showArticleDetails=showArticleDetails;
window.openLinkForm=openLinkForm;
window.saveLink=saveLink;
window.deleteLink=deleteLink;
window.openExternal=openExternal;
window.openForm=openForm;
window.closeForm=closeForm;
window.overlayClose=overlayClose;
window.previewUpload=previewUpload;
window.removePreview=removePreview;
window.resetAllData=resetAllData;
