'use strict';

var ISML = require('dw/template/ISML');

function start() {
    ISML.renderTemplate('core/m2e_multichannel_home')
}
start.public = true;
exports.Start = start;
