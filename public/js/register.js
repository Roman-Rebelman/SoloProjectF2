const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log("res", res);
  if (!res.email || !res.password) {
    alert("Введите свои данные!");
  } else {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });

      const result = await response.json();

      const msg = document.querySelector(".regMsg");
      const divReg = document.querySelector(".regDiv");
      // window.location.replace('/')
      if (result.err) {
        divReg.innerText = result.err;
        divReg.style.color = "red";

        document.querySelectorAll("input").forEach((el) => (el.value = ""));
      } else {
        divReg.innerText = result.msg;
        divReg.style.color = "green";

        form.remove();

        const nav = document.querySelector(".myNav");
        console.log("nav:", nav);

        document.querySelector("#navbarNav").remove();

        const html = `
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link">
              Hi, ${result.login}
            </span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
       </div>
        `;
        nav.insertAdjacentHTML("beforeend", html);
      }
    } catch (error) {
      console.log(`Что-то сломалось ==> ${error}`);
      alert(`Что-то сломалось ==> ${error}`);
    }
  }
});
