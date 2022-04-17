$(document).ready(function () {
  $("#register-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      phone: {
        required: true,
        number: true,
        min: 10,
        max: 10,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: {
          depends: function (elem) {
            let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z].(8,16))$/;
            return $("#password").val() == passw;
          },
        },
      },
      Confirm_password: {
        required: true,
      },
    },
    messages: {
      name: {
        minlength: "FullName should be at least 5 characters",
      },
      phone: {
        required: "Please enter your phone number",
        number: "Please enter your phone number as a numerical value",
        min: "Your phone number must containt 10 numbers",
        max: "Your phone number must containt 10 numbers",
      },
      email: {
        email: "The email should be in the format: abc@domain.com",
        required: "Please enter your email.",
      },
      password: {
        required:
          "The password must contain at least One numeric digit, one Uppercase and one lowercase letter ",
        min: " The password must have at least 8 character",
      },
      Confirm_password: {
        required: "Please Enter the same password",
      },
    },
  });
});
