$(document).ready(function () {
  $("#mas").click(function () {
    $("#menu").toggle();
  });
  $(window).scroll(function () {
    navbartop()
  })
  //desde aca en adelante es el control del navbar
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    //para fullscreen 973
    if (winHeight < 975 && winHeight >= 795) {
      if (scrollPercentRounded <= 6) {
        mostrar();
      } else if (scrollPercentRounded <= 40) {
        mostrar("title1")
      } else if (scrollPercentRounded <= 76) {
        mostrar("title2")
      } else if (scrollPercentRounded <= 99) {
        mostrar("title3")
      } else {
        mostrar("title4")
      }
    } else if (winHeight < 795 && winHeight >= 665) {
      if (scrollPercentRounded <= 6) {
        mostrar();
      } else if (scrollPercentRounded <= 39) {
        mostrar("title1")
      } else if (scrollPercentRounded <= 77) {
        mostrar("title2")
      } else if (scrollPercentRounded <= 99) {
        mostrar("title3")
      } else {
        mostrar("title4")
      }
    } else if (winHeight < 665) {
      if (scrollPercentRounded <= 5) {
        mostrar();
      } else if (scrollPercentRounded <= 34) {
        mostrar("title1")
      } else if (scrollPercentRounded <= 78) {
        mostrar("title2")
      } else if (scrollPercentRounded <= 99) {
        mostrar("title3")
      } else {
        mostrar("title4")
      }
    }
  });

  // ponerle lazy loading a las cosas en mobile
  if ($(window).width() < 768) {
    const imagenes = document.getElementsByClassName('img-galery');
    for (imagen of imagenes) {
      imagen.setAttribute('loading', 'lazy');
    }
  }
});

function mostrar(dato) {
  let t1 = document.getElementById('title1');
  let t2 = document.getElementById('title2');
  let t3 = document.getElementById('title3');
  let t4 = document.getElementById('title4');
  switch (dato) {
    case "":
      t1.style.display = "none"
      t2.style.display = "none"
      t3.style.display = "none"
      t4.style.display = "none"
      break;
    case "title1":
      t1.style.display = "block"
      t2.style.display = "none"
      t3.style.display = "none"
      t4.style.display = "none"
      break;
    case "title2":
      t1.style.display = "none"
      t2.style.display = "block"
      t3.style.display = "none"
      t4.style.display = "none"
      break;
    case "title3":
      t1.style.display = "none"
      t2.style.display = "none"
      t3.style.display = "block"
      t4.style.display = "none"
      break;
    case "title4":
      t1.style.display = "none"
      t2.style.display = "none"
      t3.style.display = "none"
      t4.style.display = "block"
      break;
    default:
      t1.style.display = "none"
      t2.style.display = "none"
      t3.style.display = "none"
      t4.style.display = "none"
      break;
  }
}

function navbartop() {
  if (window.scrollY > 500) {
    document.getElementById('menu').style.display = 'none';
  } else {
    document.getElementById('menu').style.display = 'block';
  }
}