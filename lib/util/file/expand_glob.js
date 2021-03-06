/**
 * Expand glob filename patterns.
 * @memberof module:coz/lib/util/file
 * @function expandGlob
 * @param {string|string[]} pattern - Filename patterns.
 * @param {object} options - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Working directory path.
 * @param {function} callback - Callback when done.
 */

"use strict";

var ext = require('../../ext'),
    async = ext.async,
    glob = ext.glob;


/** @lends expandGlob */
function expandGlob(pattern, options, callback) {
    options = options || {};
    if (typeof(options) === 'function') {
        callback = callback || options;
        options = {};
    }

    pattern = [].concat(pattern || []);
    async.concat(pattern, function (pattern, callback) {
        glob(pattern, {
            cwd: options.cwd || process.cwd()
        }, callback);
    }, function (err, filenames) {
        if (err) {
            callback(err);
        } else {
            var notFound = (pattern.length > 0) && (filenames.length == 0);
            if (notFound) {
                console.warn('File not found with pattern:', pattern);
            }
            callback(null, filenames);
        }
    });
}

/**
 * Glob with sync.
 * @param {string|string[]} patterns - Patterns to expand.
 * @param {object} options - Optional settings.
 * @returns {string[]} - Expanded patterns.
 */
expandGlob.sync = function (patterns, options) {
    return [].concat(patterns || []).map(function (pattern) {
        return glob.sync(pattern, options);
    }).reduce(function (a, b) {
        return a.concat(b);
    }, []);
};


module.exports = expandGlob;