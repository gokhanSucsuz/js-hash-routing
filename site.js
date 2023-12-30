const myHashLinks = document.querySelectorAll(".nav-link");

const myRoutes = {
  "": {
    title: "Home Page"
  },
  "#contact": {
    title: "Contact Page"
  },
  "#who-we-are": {
    title: "Who we are? Page"
  },
  "#references": {
    title: "References Page"
  }
};

function checkRoute(hash = window.location.hash) {
  console.log(myRoutes[hash]);
  document.title = myRoutes[hash].title;
}

myHashLinks.forEach((item) =>
  item.addEventListener("click", (event) => {
    checkRoute(item.hash);
  })
);
