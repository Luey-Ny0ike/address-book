function Contact(first, last) {
  this.firstName = first;
  this.secondName = second;
  this.stateName = state;
}

Contact.prototype.fullName = function() {
  return this.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
}


//User interface logic//
$(document).ready(function() {
  $("forms#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStateName = $("input#new-state-name").val();
    var inputtedCity = $("input#new-city-name").val();
    var inputtedStreet = $("input#new-street-name").val();

    var newContact = new contact(inputtedFirstName, inputtedLastName, inputtedStateName,
      inputtedCity, inputtedStreet);
    $("ul#addresses").append("<li><span class='contact'>" + newContact.fullName + "</span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".state-name").text(newContact.stateName);
  });
});
});
