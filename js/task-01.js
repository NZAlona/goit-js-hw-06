const totalEl = document.querySelector('#categories');

console.log(`Number of categories: ${totalEl.children.length}`);

const categoryEl = document.querySelectorAll('h2');

for (let i = 0; i < categoryEl.length; i += 1) {
  console.log(`Category: ${categoryEl[i].textContent}`);
  console.log(categoryEl[i].nextElementSibling.children.length);
}
