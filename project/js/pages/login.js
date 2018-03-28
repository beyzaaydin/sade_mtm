/*
 *  Document   : login.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Log In page
 */

var Login = function() {

    return {
        init: function() {
            /* Jquery Validation, Check out more examples and documentation at https://github.com/jzaefferer/jquery-validation */
            /* Log In form - Initialize Validation */
            $('#form-log-in').validate({
                errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page
                errorElement: 'div',
                errorPlacement: function(error, e) {
                    e.parents('.form-group > div').append(error);
                },
                highlight: function(e) {
                    $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
                    $(e).closest('.help-block').remove();
                },
                success: function(e) {
                    e.closest('.form-group').removeClass('has-success has-error');
                    e.closest('.help-block').remove();
                },
                rules: {
                    'login-email': {
                        required: true,
                        email: true
                    },
                    'login-password': {
                        required: true,
                        minlength: 8
                    }
                },
                messages: {
                    'login-email': 'Please enter your account\'s email',
                    'login-password': {
                        required: 'Please provide your password',
                        minlength: 'Your password must be at least 8 characters long'
                    }
                }
            });
        }
    };
}();
$(document).ready(function(e) {
    $('#login-submit-btn').on('click', function() {
        var sEmail = $('#login-email').val();
// Checking Empty Fields
        if ($.trim(sEmail).length == 0 || $("#fname").val()=="" || $("#lname").val()=="") {
            alert('All fields are mandatory');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            alert('Nice!! your Email is valid, now you can continue..');
        }
        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    });
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
function validateForm() {
    'use strict';

    // Get references to the form elements:
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // Validate the login
    if ((email.value.length > 0) && (password.value.length > 0)) {
        return true;
    } else {
        alert('Please complete the form!');
        return false;
    }
}

function check(form) {

    var emailArray = ("myemail@live.com", "");
    var passwordArray = ("MyLogIn", "");

    if (email.value == "email" && password.value == "password") {
        window.open('features.html');
    } else {
        alert('Please enter correct username or password!');
        return false;
    }
}

function init() {
    'use strict';
    if (alert == 1) {

        // Confirm that document.getElementById() can be used:
        if (document && document.getElementById) {
            var loginForm = document.getElementById('form-log-in');
            loginForm.onsubmit = validateForm;
        }
    }
    else{
        alert('Please check your email and password');
    }
}
window.onload = init;
document.getElementById('');