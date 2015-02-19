var local = {}; local['tabs'] = require('./tabs');

if (typeof window.define === "function" && window.define.amd) {
    define('bower_components/bskyb-tabs/dist/scripts/tabs.requirejs', [], function() {
        'use strict';
        return local['tabs'];
    });
}