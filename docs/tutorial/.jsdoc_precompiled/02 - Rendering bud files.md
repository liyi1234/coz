### Overview

With coz, you can generate any file with *2* step.

1. Create a `.bud` file.
2. Run `coz render` command.

A bud contains file meta data like:

+ Which template to use?
+ Where to render it?
+ What permission to give?

, and so on.

More detail about bud is described in the next tutorial: [03 - Mastering coz bud][tutorial_03_mastering_coz_bud_url]


*****

### Basic usage.


The most simple usage is generate a single file from a single `.bud` file.

Here is an example:

**.who-likes-what.txt.bud** (bud file)
```javascript
{@lang javascript}/**
 * .who-likes-what.txt.bud
 * This is a bud file for "examples/01-minimum-demo"
 */

// Exports as a Node.js module.
module.exports = {

    // Template string. By default, parsed by Handlebars engine.
    tmpl: '{{#each members}}Hi, my name is {{@key}}. I like {{this}}.\n{{/each}}',

    // Overwrite when already existing.
    force: true,

    // File path to write out.
    path: 'who-likes-what.txt',

    // File permission.
    mode: '444',

    // Data to render.
    data: {
        members: {
            "Mai": "apple",
            "Tom": "Orange",
            "Rita": "Banana"
        }
    }
};

```

As you see, `.bud` file is actuary a JavaScript file and could be exported an a Node.js module.

Save this file as `.who-likes-what.txt.bud` and then, run:

```bash
{@lang bash}# Render the bud file
$ coz render ".who-likes-what.txt.bud"
```

This will generate a file named `who-likes-what.txt`.

**who-likes-what.txt** (generated file)
```
Hi, my name is Mai. I like apple.
Hi, my name is Tom. I like Orange.
Hi, my name is Rita. I like Banana.

```

*****


### Separate template and data.

For more comple rending, you may want to save template and and to seperated files from the `.bud` file.

`tmpl` attribute could be a file path.

`data` attribute may be js/json module, acquired via `require`.


**.what-colors.html.bud** (bud file)

```javascript
{@lang javascript}/**
 * .what-colors.html.bud
 * This is a bud file for "examples/02-separated-template"
 */

// Exports as a Node.js module.
module.exports = {

    // Template file path. Relative to this bud file.
    tmpl: '.what-colors.html.hbs',

    // Overwrite when already existing.
    force: true,

    // File path to write out.
    path: 'what-colors.html',

    // File permission.
    mode: '444',

    // Data to render.
    data: require('./.what-colors.html.json')
};


```

**.what-colors.html.hbs** (template file)

```xml
{@lang xml}<table>
    <caption>Colors</caption>
    <tbody>
    {{#each colors}}
        <tr><th>{{@key}}</th>{{this}}</tr>
    {{/each}}
    </tbody>
</table>
```

And run:

```bash
{@lang bash}# Render the bud file
$ coz render ".what-colors.html.bud"
```

will generate:

**what-colors.html** (generated file)
```xml
{@lang xml}<table>
    <caption>Colors</caption>
    <tbody>
        <tr><th>banana</th>yellow</tr>
        <tr><th>apple</th>red</tr>
        <tr><th>grape</th>purple</tr>
    </tbody>
</table>
```


___

### See also

<!-- See also start -->

+ [03 - Mastering coz bud][tutorial_03_mastering_coz_bud_url]

<!-- See also end -->


### Tutorials

<!-- Tutorials start -->

+ [01 - Installing coz][tutorial_01_installing_coz_url]
+ [02 - Rendering bud files][tutorial_02_rendering_bud_files_url]
+ [03 - Mastering coz bud][tutorial_03_mastering_coz_bud_url]
+ [04 - Using programmatic API][tutorial_04_using_programmatic_a_p_i_url]
+ [05 - Customizing coz][tutorial_05_customizing_coz_url]

<!-- Tutorials end -->

### Links

+ [coz @ npm][my_npm_url]

<!-- URLs start -->

[nodejs_url]: http://nodejs.org/
[nodejs_download_url]: https://nodejs.org/download/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[my_npm_url]: http://www.npmjs.org/package/coz
[my_apiguide_url]: http://okunishinishi.github.io/coz/apiguide/
[tutorial_01_installing_coz_url]: tutorial-01%20-%20Installing%20coz.html
[tutorial_02_rendering_bud_files_url]: tutorial-02%20-%20Rendering%20bud%20files.html
[tutorial_03_mastering_coz_bud_url]: tutorial-03%20-%20Mastering%20coz%20bud.html
[tutorial_04_using_programmatic_a_p_i_url]: tutorial-04%20-%20Using%20programmatic%20API.html
[tutorial_05_customizing_coz_url]: tutorial-05%20-%20Customizing%20coz.html

<!-- URLs end -->