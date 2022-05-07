
const mainPage = document.getElementById('main-page');
const galleryPage = document.getElementById('gallery-page');
const contactPage = document.getElementById('contact-page');

const main = document.getElementById('main-tab');
const gallery = document.getElementById('gallery-tab');
const contact = document.getElementById('contact-tab');

const tabMenu = [main, gallery, contact];

(function initialLoading() {
    main.innerHTML = `<div id=\"${main.innerText.toLocaleLowerCase()}-tab-text\" href=\"\" style=\"color:#E63946;\"><span id=\"${main.innerText.toLocaleLowerCase()}-tab-line\"class=\"nav-deco\" style=\"background-color:#E63946;\"></span>${main.innerText}</div>`;
    mainPage.style.display = 'block';
})();

tabMenu.forEach(item => {
    item.addEventListener('click', () => {
        tabMenu.forEach(item => {
            item.innerHTML = `<div id=\"${item.innerText.toLocaleLowerCase()}-tab-text\" href=\"\" style=\"color:#999A9B;\"><span id=\"${item.innerText.toLocaleLowerCase()}-tab-line\"class=\"nav-deco\" style=\"background-color:#999A9B;\"></span>${item.innerText}</div>`;
            let newItem = item.innerText.toLowerCase() + 'Page';
            eval(newItem).style.visibility = 'hidden';
            eval(newItem).style.opacity = '0';
        })
        item.innerHTML = `<div id=\"${item.innerText.toLocaleLowerCase()}-tab-text\" href=\"\" style=\"color:#E63946;\"><span id=\"${item.innerText.toLocaleLowerCase()}-tab-line\"class=\"nav-deco\" style=\"background-color:#E63946;\"></span>${item.innerText}</div>`;
        let newItem = item.innerText.toLowerCase() + 'Page';
        eval(newItem).style.visibility = 'visible';
        eval(newItem).style.opacity = '1';
    });
})

function showPage() {
}