import mixitup from "mixitup";

function productMix() {
  let productMix = document.getElementById("productMixContainer");
  if (productMix) {
    let mixer = mixitup(productMix);
    mixer.filter(".category-new");
  }
}

productMix();
