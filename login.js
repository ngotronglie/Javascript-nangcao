const formLogin = document.querySelector("#form-login");

const username = document.querySelector("#name");
const password = document.querySelector("#password");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (!usernameValue || !passwordValue) {
    alert("Vui lòng nhập tên người dùng và mật khẩu!");
    return;
  }

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (item) =>
          item.username === usernameValue && item.password === passwordValue
      );

      if (user) {
        alert(`Xin chào ${user.username}, đăng nhập thành công!`);
        window.location = "index.html";
      } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
      }
    });
});
