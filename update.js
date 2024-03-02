const formUpdate = document.querySelector("#formUpdate");

//  ====================== laays id =====================
// console.log(document.location.search); //  output = ?id=2
const searchParam = new URLSearchParams(document.location.search); // laasy tham so duong dan
// console.log(searchParam.get("id")); // output = id = 2
const id = searchParam.get("id");

// =======================================================
var namepr = document.getElementById("name");
var image = document.getElementById("image");
var price = document.getElementById("price");

fetch("http://localhost:3000/products/" + id)
  .then((res) => res.json())
  .then((data) => {
    namepr.value = data.name;
    image.value = data.image;
    price.value = data.price;
  });

formUpdate.addEventListener("submit", (e) => {
  e.preventDefault();

  //   ======================================= validate =================================
  let err = [];
  if (namepr.value.trim() == "") {
    err.push("Name khoong dc de trong !");
  }
  if (image.value.trim() == "") {
    err.push("image khoong dc de trong !");
  }
  if (price.value.trim() == "") {
    err.push("price khoong dc de trong !");
  }
  if (err.length > 0) {
    alert(err.join("\n"));
  } else {
    let updateproduct = {
      name: namepr.value,
      image: image.value,
      price: price.value,
    };
    console.log(updateproduct);
    fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateproduct),
    }).then(() => {
      window.location = "./index.html";
      alert("update product Success");
    });
  }
});
