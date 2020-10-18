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
