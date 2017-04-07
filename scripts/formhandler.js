(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;


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

            $.get('http://localhost:3002/posts/' + data.id).then(function() {
                console.log(' exist');
                $('#form-error').text("This Boss Already Exists").css('color', 'red');
            }, function() {
                console.log('dont exist');
                $('#form-error').text("success").css('color', 'green');
                $.post('http://localhost:3002/posts/', data);
                $.cookie("id", data.id);
                window.location.replace("http://localhost:3000/comment.html")
            });
        });

    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
