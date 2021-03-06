/**
 * Utility functions for manipulate files.
 * @module coz/lib/util/file
 * @see module:coz/lib/util
 */

"use strict";

module.exports = {
    get expandGlob() { return require('./expand_glob'); },
    get isDir() { return require('./is_dir'); },
    get readFile() { return require('./read_file'); },
    get unlinkFile() { return require('./unlink_file'); },
    get writeFile() { return require('./write_file'); }
};