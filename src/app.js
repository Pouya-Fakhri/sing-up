let form = document.querySelector("#loginForm");
let datas;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  datas = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  console.log(datas);
  postData();
});

function postData() {
  let user = {
    login: datas.email,
    password: datas.password,
  };
  fetch("https://recruitment-api.pyt1.stg.jmr.pl/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  })
    .then((rest) => rest.json())
    .then((res) => {
      console.log(res);
      alert(res.message)
    });
}
