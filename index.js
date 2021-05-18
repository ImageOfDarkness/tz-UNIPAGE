class UserService {
    username;
    password;
    
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get username() {
        return this.username; // this
    }

    get password() {
        throw "you are not allowed to get password";
    }

    authenticate_user(_userService) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://examples.com/api/user/authenticate?username=' + //POST запрос лучше
            UserService.username + '&password=' + UserService.password, true);
        xhr.onload = function() {
            if(xhr.status !== '200') {
                result = xhr.response;
            } else {
                result = true;
            }
        };
        return result
    }
}

$('form #login').click(function() {
    var username = $('#username')[0].value; // обратится к [0].value
    var password = $('#password')[0].value;

    var res = new UserService(username, password).authenticate_user();// new

    if(res == true) {
        document.location.href = '/home';
    } else {
        alert(res.error);
    }
})
