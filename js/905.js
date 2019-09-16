$(document).ready(function() {
    $("#btnLogin").click(function() {
        var validate = validateForm();
        if (validate) {
            //"Validate successful!"
        } else {
            //"Validate failed!"
        }
    })

    function validateForm() {
        var username = $('#username').val();
        var password = $('#password').val();

        var isValid = true;
        $(".msg-error").remove();
        if (username == '') {
            $("#username").after('<span class="msg-error text-danger">The username field is required</span>');
            $("#username").addClass("border-danger");
            isValid = false;
        }
        if (password == '') {
            $("#password").after('<span class="msg-error text-danger">The password field is required</span>');
            $("#password").addClass("border border-danger");
            isValid = false;
        }
        if (isValid) {
            $("#username").removeClass("border border-danger");
            $("#password").removeClass("border border-danger");
        }
        return isValid;
    }
});