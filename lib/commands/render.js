/**
 * Handle render command.
 * @memberof module:coz/lib/commands
 * @function render
 * @param {string} src - Source filename. Could be glob pattern.
 * @param {object} options - Optional settings.
 * @param {object} options.verbose - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

"use strict";

var create = require('../create'),
    core = require('../core'),
    fs = core.fs;

/** @lends render */
function render(filename, options, callback) {
    options = options || {};
    var coz = create(options.configuration);

    coz.render(filename, {
        verbose: !!options.verbose
    }, callback);
}

render.help = fs.readFileSync(__dirname + '/helps/render-help.txt', 'utf-8');

module.exports = render;
