$(function() {
    $('form#new-contact').submit(function(event) {
            var new_First_Name = $('input#new-first-name').val();
            var new_Last_Name = $('input#new-last-name').val();
            var new_Street = $('input#new-street').val();
            var new_City = $('input#new-city').val();
            var new_State = $('input#new-state').val();
            var new_Zip = $('input#new-zip').val();
            var new_Address = { street: new_Street,
                                city: new_City,
                                state: new_State,
                                zip: new_Zip,
                                fullAddress: function() {
                                    return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
                                }
                              };

            var newContact = { first_Name: new_First_Name,
                               last_Name: new_Last_Name,
                               address: new_Address.fullAddress()
                             };

            $("ul#contacts").append("<li><span class='contact'>" +
                                newContact.first_Name + " " +
                                newContact.last_Name + "</span></li>");

            $("input#new-first-name").val("");
            $("input#new-last-name").val("");
            $('input#new-street').val("");
            $('input#new-city').val("");
            $('input#new-state').val("");
            $('input#new-zip').val("");

            $(".contact").last().click(function() {
                $("#show-contact").show();
                $("#show-contact h2").text(newContact.first_Name + " " + newContact.last_Name);
                $(".first-name").text(newContact.first_Name);
                $(".last-name").text(newContact.last_Name);
                $(".address").text(newContact.address);
            });

            event.preventDefault();
    });
});
