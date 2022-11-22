

//Récupération des données de l'Api
fetch("http://localhost:3000/api/products")
  .then(function (res) {
    // racourci: .then((res)=> res.json())
    if (res.ok) {
      return res.json();
    }
  })
  // En cas d'échec de récupération des données de l'API
  .catch(function (error) {
    alert(error);
  })
  // Création d'une liste des produits à partir des données de l'API
  .then(function (products) {
    for (const product of products){
        document.getElementById(
            "items"
          ).innerHTML += `<a href="./product.html?id =${product._id}">
          <article>
          <img src ="${product.imageUrl}" alt = "${product.altTxt}">
          <h3 class = "productName"> ${product.name}</h3>
          <p class = "productDescription"> ${product.description}</p>
          </article>
          </a>`;
    }
  });
