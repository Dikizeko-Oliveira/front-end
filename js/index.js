// =============== Search button =============
var search = document.querySelector(".search-box .search-button");
var form = document.querySelector(".search-box form");
search.addEventListener("mouseover", () => {
  form.style = "display : block";
});

// ============== Audiovisual scripts ================
var links = document.querySelectorAll(".links ul li");
var content = document.querySelector(".content");

// On window load
window.onload = function(e) {
  imagens.forEach(imagem => {
    var img = document.createElement("img");
    img.setAttribute("src", `${imagem.src}`);
    content.appendChild(img);
  });
  // =============== Slick Carousel scripts =============
  $(".slick-carousel").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
// =============== End Slick Carousel scripts =============
var imagens = [
  {
    id: 1,
    categoria: "Natureza",
    src:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlt_7V81xGLvhOVcKn-4qlgM4mDXEBpp30oPEh9gAgmB70VJp_"
  },
  {
    id: 2,
    categoria: "Natureza",
    src:
      "http://www.elementaryos-fr.org/wp-content/uploads/2013/09/wallpaper-2692643.jpg"
  },
  {
    id: 3,
    categoria: "Natureza",
    src:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8iZy-fQkj4HFJZ-LmnyASSwevMngbvJGT-5wzU3yuKJBMh1Yx"
  },
  {
    id: 4,
    categoria: "Carros",
    src:
      "https://s-media-cache-ak0.pinimg.com/564x/5a/e5/92/5ae5928f8f7b56c03e036a37eabe50a2.jpg"
  },
  {
    id: 5,
    categoria: "Carros",
    src:
      "https://fr.best-wallpaper.net/wallpaper/1600x1200/1401/Lamborghini-Maserati-Ferrari-Porsche-Mercedes-Benz-sea-coast_1600x1200.jpg"
  },
  {
    id: 6,
    categoria: "Carros",
    src:
      "http://st.motortrend.com/uploads/sites/5/2009/04/audi-maserati-mercedes-benz-lamborghini-ferrari-parked.jpg"
  }
];
var target1 = document.querySelector(".links ul li");
var target2 = document.querySelector(".links ul #last");

links.forEach(link => {
  link.addEventListener("click", () => {
    target1.classList.remove("active");
    link.classList.add("active");

    let text = link.innerHTML;
    content.innerHTML = "";
    var selection = imagens.filter(imagem => {
      if (text === "Todos") {
        return imagem;
      } else {
        return imagem.categoria === `${text}`;
      }
    });

    selection.forEach(item => {
      var img = document.createElement("img");
      img.setAttribute("src", `${item.src}`);
      content.appendChild(img);
    });
    // console.log(link.nextElementSibling);
    // atribui a class active
    if (text === "Todos") {
      target2.classList.remove("active");
      link.nextElementSibling.classList.remove("active");
    }
    if (text === "Carros") {
      //   target1.classList.remove("active");
      target2.classList.remove("active");
      link.previousElementSibling.classList.remove("active");
    } else if (text === "Natureza") {
      link.previousElementSibling.classList.remove("active");
    }
  });
});
