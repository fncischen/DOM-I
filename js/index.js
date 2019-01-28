const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// helper functions 

function ObjToArray(array){
  return Object.entries(array); // returns array of key pair values
}

function isContentHeader(value){
  return value[0].includes("h4");
}

function notContentHeader(value) {
  return !value[0].includes("h4")
}

function populateHeaderMenu(menu, image) {

}

function populateMainContent(oldContent, newHeaders, newText) {
  let headerContent = oldContent.querySelectorAll(".text-content h4")
  for (let i = 0; i <= headerContent.length; i++) {
    headerContent[i].textContent = newHeaders[i];
  }

  let textContent = oldContent.querySelectorAll(".text-content p")
  for (let i = 0; i <= headerContent.length; i++) {
    headerContent[i].textContent = newText[i];
  }
}

// Step 1 // declare data & relevant properties 

let navItems = siteContent.nav;

let header = document.querySelector("header");
let nav = document.querySelector("header nav");
let listOfLinks = nav.querySelectorAll("a");

let ctaItems = siteContent.cta;
let cta = document.querySelector(".cta");

let main_content_items = siteContent["main-content"]; 
let maincontent = document.querySelector(".main-content");
console.log(maincontent);

let contactItems = siteContent.contact;
let contact = document.querySelector(".contact");

let footerItem = siteContent.footer;
let footer = document.querySelector(".footer");

// Step 2 // filter out by property / class.

const navImg = ObjToArray(navItems).filter(e => e[0].includes("img-src"));
const navItemHyperlinks = ObjToArray(navItems).filter(e => e[0].includes("nav-item"));

ctaItems = ObjToArray(ctaItems);

const mainContentHeadings = ObjToArray(main_content_items).filter(isContentHeader);
const mainContentText = ObjToArray(main_content_items).filter(notContentHeader);

const contactHeadings = ObjToArray(contactItems).filter(isContentHeader);
const contactText = ObjToArray(contactItems).filter(notContentHeader);

footerItem = ObjToArray(footerItem);

// Step 3 // vertically populate all relevant fields. 



