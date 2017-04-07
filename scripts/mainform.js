(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-boss="form"]';
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSumbitHandler(FORM_SELECTOR);

})(window);
