const categoriesLists = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesLists.length}`);

categoriesLists.forEach((categoryList) => {
  console.log(`Category: ${categoryList.querySelector("h2").textContent}`);
  console.log(`Elements: ${categoryList.querySelectorAll("li").length}`);
});
