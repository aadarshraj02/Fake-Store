const cards = document.querySelector(".cards");

const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  let results = "";
  data.map((result) => {
    results += `<div class="card">
    <h1 class="title">${result.title}</h1>
    <img class="images" src=${result.image} alt="img" />
    <p>${result.description}</p>
    <p class="category">${result.category}</p>
    <p class="price">${result.price}$</p>
  </div>`;
  });
  cards.innerHTML = results;
};
getProducts();
