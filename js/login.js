// btn scroll to top
let btnScrollTotop = document.getElementsByClassName("scrollTotop")[0];

onscroll = () => {
  if (scrollY >= 200) {
    btnScrollTotop.style.display = "block";
  } else {
    btnScrollTotop.style.display = "none";
  }
};
btnScrollTotop.onclick = () => {
  scroll({ top: 0, behavior: "smooth" });
};
