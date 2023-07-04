
 jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><svg data-src="/assest/icons/icons/topArrow.svg"></svg></div><div class="quantity-button quantity-down"><svg data-src="/assest/icons/icons/downArrow.svg"></svg></div></div>').insertAfter('.quantity input');
 jQuery('.quantity').each(function() {
   var spinner = jQuery(this),
     input = spinner.find('input[type="number"]'),
     btnUp = spinner.find('.quantity-up'),
     btnDown = spinner.find('.quantity-down'),
     min = input.attr('min'),
     max = input.attr('max');

   btnUp.click(function() {
     var oldValue = parseFloat(input.val());
     if (oldValue >= max) {
       var newVal = oldValue;
     } else {
       var newVal = oldValue + 1;
     }
     spinner.find("input").val(newVal);
     spinner.find("input").trigger("change");
   });

   btnDown.click(function() {
     var oldValue = parseFloat(input.val());
     if (oldValue <= min) {
       var newVal = oldValue;
     } else {
       var newVal = oldValue - 1;
     }
     spinner.find("input").val(newVal);
     spinner.find("input").trigger("change");
   });

 });

function sideNavbar(type){
  let side = document.querySelector(".navbar-toggle-js")
  type==="open"?side.classList.add("show-nav") : side.classList.remove("show-nav")
  
  
}
