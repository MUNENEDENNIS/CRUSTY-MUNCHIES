function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
       if (name === "") {
      alert("PLEASE FILL IN YOUR NAME");
      return false;
    } else if (email === "") {
      alert("PLEASE FILL IN YOUR NAME AND E-MAIL");
      return false;
    } else {
      alert(
        name + "YOUR MESSAGE HAS BEEN SUCCESFULLY RECEIVED, WE APPRECIATE YOUR FEEDBACK"
      );
    }
    event.preventDefault();
  }

  $(document).ready(function(){
    $("#checky").click(function(){
        $("#myForm").toggle("5000")
    });
});
function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "You have ordered..." + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (price,  quantity, delivery,toppings,crust) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.toppings=toppings;
    this.crust=crust;
};
TotalPrice.prototype.finalTotal = function () {
    return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
};
var sizePrices = [1200, 800, 600]
var priceToppings = [100,120,80,150,200]
var toppingsName= ["pepperoni" , "mushroom" , "onion" ,"sausage", " bacon"]
var crustNames= ["crispy", "stuffed", "glutton-free"]
var crustPrices = [100,120,200]
var deliveryPrices = [0, 200];
$(document).ready(function(){
  $('form#myForm').submit(function (event) {
        event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaToppings=parseInt($('#top').val());
    var priceCrust =parseInt($('#crusting').val());
    var pizzaTop = $('#top').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
    var ToppingsCost = priceToppings[pizzaToppings-1];
    var crustCost = crustPrices[priceCrust-1]
    var topNames = toppingsName[pizzaTop-1]
    var crustName = crustNames[priceCrust-1]
    newOrder = new Results(pizzaType,pizzaSize, crustName,topNames,crustName);
    newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
    if (pizzaPick===1){
        alert( newOrder.order());
        alert("YOUR TOTAL BILL IS...: " + newTotal.finalTotal());
        alert("THANK YOU FOR ORDERING FROM CRUSTY-MUNCHIES! " )
        }else{
            if(pizzaPick===2){
               var location= prompt(" WE DELIVER! WHERE WOULD YOU LIKE YOUR CRUSTY-MUNCHIES PIIZZA TO BE DROPPED? ");
               var locations =["Nairobi", "Ngong Road", "Rongai", "CBD",]
               if((location !== locations[0]) && (location !== locations[1]) && (location !== locations[2]) && (location !== locations[3]) && (location !== locations[4]) && (location !== locations[5])){
                alert("Choose a location from the ones listed below...")
                alert(locations)

            }
            else  {
                prompt("PLEASE ENTER YOUR MOBILE PHONE NUMBER TO FACILITATE COMMUNICATION AND FASTER DELIVERY.")
                alert("Your order has been received and will be delivered to " + location + " An additional 100/= will be charged for delivery.");
                alert(newOrder.order());
                alert("YOUR TOTAL BILL IS NOW: " + newTotal.finalTotal());
                alert("THANK YOU FOR ORDERING FROM CRUSTY-MUNCHIES! YOUR PIZZA WILL BE ARRIVING SOON!" )
            }
            }
        }
})
});
