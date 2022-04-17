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
});
