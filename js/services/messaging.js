"use strict";

onlineAdsApp.factory('messaging', function () {

    function messageSuccess(text) {
        noty({
            text: text, 
            layout: 'topCenter',
            timeout: 3000}
        );
    }
        
    function messageError(text) {
        noty({
            text: text, 
            type: 'error',
            layout: 'topCenter',
            timeout: 3000}
        );
    }

    return {
        messageSuccess: messageSuccess,
        messageError: messageError
    }

});
