function Contact(first, second) {
  this.firstName = first;
  this.secondName = second;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.secondName;
}



//User interface logic//
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address-name">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street-name">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-state-name">State</label>' +
      '<input type="text" class="form-control new-state-name">' +
      '</div>' +
      '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedSecondName = $("input#new-second-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedSecondName);


    $("#new-addresses").each(function() {
      var inputtedStreet = $(this).find("input#new-street-name").val();
      var inputtedCity = $(this).find("input#new-city-name").val();
      var inputtedState = $(this).find("input#new-state-name").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").click(function() {

      $("#show-contact").last().show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".second-name").text(newContact.secondName);

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
      });

    });
    $("input#new-first-name").val("");
    $("input#new-second-name").val("");
    $("input#new-street-name").val("");
    $("input#new-city-name").val("");
    $("input#new-state-name").val("");
  });
});
