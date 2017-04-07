(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var DB_SERVER_URL = 'http://localhost:3002/';
    var SERVER_URL = 'http://localhost:3000/';


    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        console.log(selector);
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSumbitHandler = function() {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            var fullname = data.firstName + data.lastName;
            data.id = fullname;

            $.get(DB_SERVER_URL + 'posts/' + data.id).then(function() {
                console.log(' exist');
                $('#form-error').text("This Boss Already Exists").css('color', 'red');
                $.cookie("id", data.id);
                window.location.replace(SERVER_URL + 'comment.html')
            }, function() {
                console.log('dont exist');
                $('#form-error').text("success").css('color', 'green');
                $.post(DB_SERVER_URL + 'posts/', data);
                $.cookie("id", data.id);
                window.location.replace(SERVER_URL + 'comment.html')
            });
        });

    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
