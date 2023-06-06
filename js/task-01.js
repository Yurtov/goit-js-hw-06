const refs = {
    numbersCategoriesEl: document.querySelector("#categories"),
    categoriesEl: document.querySelectorAll('li.item')
}

const numbersOfCategories = refs.numbersCategoriesEl.children.length;
console.log(`Number of categories: ${numbersOfCategories}`);

refs.categoriesEl.forEach(element => console.log(`Category: ${element.firstElementChild.innerHTML}
Elements: ${element.lastElementChild.children.length}`));


