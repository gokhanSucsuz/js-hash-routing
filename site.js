const myHashLinks = document.querySelectorAll(".nav-link");
const app = document.querySelector("#app");

const myRoutes = {
  "": {
    title: "Home Page",
    data: "home.html",
    isApi: false
  },
  "#contact": {
    title: "Contact Page",
    data: "contact-us.html",
    isApi: false
  },
  "#who-we-are": {
    title: "Who we are? Page",
    data: "who-we-are.html",
    isApi: false
  },
  "#references": {
    title: "References Page",
    data: "https://jsonplaceholder.typicode.com/photos/",
    isApi: true
  }
};

function checkRoute(hash = window.location.hash) {
  console.log(myRoutes[hash]);
  document.title = myRoutes[hash].title;
  const dataUrl = myRoutes[hash].data;
  const isApi = myRoutes[hash].isApi;

  if (isApi) {
    app.innerHTML = "";
    const div1 = document.createElement("div");
    div1.classList.add("card-group");
    app.append(div1);

    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          const div2 = document.createElement("div");
          div2.innerHTML = `
            <div class="card">
                <img src="${item.url}" class="img-thumbnail" alt="...">
                <div class="card-body shadow py-3">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.thumbnailUrl}</p>
                </div>
            </div>`;
          div1.append(div2);
        });
      });
  } else if (!isApi) {
    fetch(dataUrl)
      .then((res) => res.text())
      .then((data) => (app.innerHTML = data));
  }
}

myHashLinks.forEach((item) =>
  item.addEventListener("click", (event) => {
    checkRoute(item.hash);
  })
);
