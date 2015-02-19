var Tabs = require('./tabs')



$.fn.tabs = function() {
    return this.each(function() {
        new Tabs($(this));
    });
};
