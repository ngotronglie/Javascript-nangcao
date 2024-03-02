const tbody = document.getElementById("tbody");

const show = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      tbody.innerHTML = data
        .map((item, index) => {
          return /*html*/ `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td> <img width="100px" src="${item.image}" alt=""></td>
                    <td>${item.price}</td>
                    <td>
                        <a class="btn btn-warning" href="/update.html?id=${
                          item.id
                        }">update</a>
                        <button class="btn btn-danger" id="btn-delete" data-id="${
                          item.id
                        }">delete</button>
                    </td>
                </tr>
            `;
        })
        .join("");
    })
    .then(() => {
      const btndelete = document.querySelectorAll("#btn-delete");
      for (let btn of btndelete) {
        // console.log(btn);
        btn.addEventListener("click", () => {
          let isconfirm = confirm("Are you sure you want to delete");
          if (isconfirm) {
            const id = btn.dataset.id;
            //   console.log(id);
            fetch("http://localhost:3000/products/" + id, {
              method: "DELETE",
            }).then(() => {
              alert("xoa thanh cong !");
            });
          }
        });
      }
    });
};
show();
