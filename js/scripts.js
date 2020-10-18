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
function Results (Type,Size,Crust,Toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "You have ordered..." + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (Price,  Quantity, Delivery,Toppings,Crust) {
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
var toppingsName= ["Pepperoni" , "Mushroom" , "Onion" ,"Sausage", " Bacon"]
var crustNames= ["Crispy", "Stuffed", "Glutton-free"]
var crustPrices = [100,120,200]
var deliveryPrices = [0, 200];
$(document).ready(function(){
