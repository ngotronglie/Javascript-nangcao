const formLogin = document.querySelector("#form-login");

const username = document.querySelector("#name");
const password = document.querySelector("#password");
formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (!usernameValue || !passwordValue) {
    alert("Vui lòng nhập tên người dùng và mật khẩu!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("Lỗi kết nối!");
    }

    const data = await response.json();
    const user = data.find(
      (item) =>
        item.username === usernameValue && item.password === passwordValue
    );

    if (user) {
      alert(`Xin chào ${user.username}, đăng nhập thành công!`);
      window.location.href = "index.html";
    } else {
      alert("Tên người dùng hoặc mật khẩu không chính xác!");
    }
  } catch (error) {
    console.error("Lỗi:", error.message);
    alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau!");
  }
});
