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


//  Selectors
const a = document.getElementsByTagName(`a`);
const myBR = document.createElement(`br`);
const siteLogo = document.getElementById(`logo-img`);
const siteNavigation = document.getElementsByTagName(`nav`)[0];

const siteHeader = document.querySelectorAll(`h1`);
const ctaButton = document.querySelectorAll(`button`);
const ctaImage =document.getElementById(`cta-img`);

const textTitles = document.querySelectorAll(`h4`);
const textContent = document.querySelectorAll(`p`);

const middleImage = document.getElementById(`middle-img`);

const footerText = document.getElementsByTagName(`p`)[8];

// Assigning Data To Elements
a[0].textContent = siteContent.nav["nav-item-1"];
a[1].textContent = siteContent.nav["nav-item-2"];
a[2].textContent = siteContent.nav["nav-item-3"];
a[3].textContent = siteContent.nav["nav-item-4"];
a[4].textContent = siteContent.nav["nav-item-5"];
a[5].textContent = siteContent.nav["nav-item-6"];

siteLogo.src = siteContent.nav["img-src"];

siteHeader[0].textContent = siteContent.cta.h1;
ctaImage.src = siteContent.cta["img-src"];
ctaButton[0].textContent = siteContent.cta.button;

textTitles[0].textContent = siteContent["main-content"]["features-h4"];
textContent[0].textContent = siteContent["main-content"]["features-content"];

textTitles[1].textContent = siteContent["main-content"]["about-h4"];
textContent[1].textContent = siteContent["main-content"]["about-content"];

middleImage.src = siteContent["main-content"]["middle-img-src"];

textTitles[2].textContent = siteContent["main-content"]["services-h4"];
textContent[2].textContent = siteContent["main-content"]["services-content"];

textTitles[3].textContent = siteContent["main-content"]["product-h4"];
textContent[3].textContent = siteContent["main-content"]["product-content"];

textTitles[4].textContent = siteContent["main-content"]["vision-h4"];
textContent[4].textContent = siteContent["main-content"]["vision-content"];

textTitles[5].textContent = siteContent.contact["contact-h4"];
textContent[5].textContent = siteContent.contact.address;
textContent[6].textContent = siteContent.contact.phone;
textContent[7].textContent = siteContent.contact.email;

footerText.textContent = siteContent.footer.copyright;

const A = document.createElement(`a`);
const newIdeas = document.createElement(`a`);
A.href = `#`;
newIdeas.href = '#';
A.textContent = `Blog`;
newIdeas.textContent = `New Ideas`;

siteNavigation.appendChild(A);
siteNavigation.prepend(newIdeas);

Array.from(a).forEach((link) => {
  link.style.color = `green`;
});


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
