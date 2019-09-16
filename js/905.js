$(document).ready(function () {
    var iframe_height = parseInt($('html').height());
    // window.parent.postMessage( iframe_height, 'https://bootsnipp.com');
    $("#btnLogin").click(function() {
        var validate = validateForm(); 
        if (validate) {
            console.log("Login successful!");
        }
        else {
            console.log("Login failed!");
        }
    })
    function validateForm() {
        // Bước 1: Lấy giá trị của username và password
        var username = $('#username').val();
        var password = $('#password').val();

        // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
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