var ouvert = false;
function navslide() {
  if (ouvert == false) {
    var mapage = document.getElementsByClassName("wrapper");
    mapage[0].style.transform = "translate(-20%)";
    var macard = document.getElementsByClassName("backcard");
    macard[0].style.marginLeft = "25vw";
    macard[0].style.borderRadius = "60px";
    ouvert = true;
  } else {
    var mapage = document.getElementsByClassName("wrapper");
    mapage[0].style.transform = "translate(-50%)";
    var macard = document.getElementsByClassName("backcard");
    macard[0].style.marginLeft = "0vw";
    macard[0].style.borderRadius = "0px";
    ouvert = false;
  }
}
