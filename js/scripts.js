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
