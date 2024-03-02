const formAdd = document.querySelector("#formAdd");

console.log(formAdd);

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;

  //   ======================================= validate =================================
  let err = [];
  if (name.trim() == "") {
    err.push("Name khoong dc de trong!");
  }
  if (image.trim() == "") {
    err.push("image khoong dc de trong!");
  }
  if (price.trim() == "") {
    err.push("price khoong dc de trong!");
  }
  if (err.length > 0) {
    alert(err.join("\n"));
  } else {
    let product = {
      name: name,
      image: image,
      price: price,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      window.location = "./index.html";
      alert("Add product Success");
    });
  }
});
