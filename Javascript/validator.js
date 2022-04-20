$(document).ready(function () {
  $("#covid_button").click(function () {
    window.location = "./covid19.html";
  });
  $.validator.addMethod(
    "validpassword",
    function (value, element) {
      return (
        this.optional(element) ||
        /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).*$/.test(value)
      );
    },
    "The password must contain a minimum of one lower case character," +
      " one upper case character, one digit, one special character and must" +
      "to contain at least 8 characters. "
  );

  $("#register-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        validpassword: true,
        minlength: 8,
      },
      Confirm_password: {
        required: true,
        equalTo: "[name='password']",
      },
    },
    messages: {
      name: {
        minlength: "FullName should be at least 5 characters",
      },
      phone: {
        required: "Please enter your phone number",
        number: "Please enter your phone number as a numerical value",
        minlength: "Your phone number must containt 10 numbers",
      },
      email: {
        email: "The email should be in the format: abc@domain.com",
        required: "Please enter your email.",
      },
      Confirm_password: {
        required: "Password does not match",
      },
    },
  });

  $("#booking-form").validate({
    rules: {
        From: "required",
        to: "required",
  	  datefrom: "required",
  	  returndate: "required",
  	  passengers: {
    		required: true,
    		min:1,
    		max:5
  		}


    },
    // Specify validation error messages
    messages: {
      From: "Please Location From",
      to: "Please Destination",
      datefrom: "Please Enter Start Date",
      returndate: "Please Enter Return Date",
      passengers: {
        required: "Enter No of Passengers",
        min: "Min should be 1",
        max: "No of passengers should be between 1 to 5"
      }
    },

    submitHandler: function(form) {
      Swal.fire(
        'Your reservation has been done!',
        'The details will be sent to your email',
        'ok'
      ).then(res => {
        window.location.href = 'index.html'
      })
    }
  });
});
