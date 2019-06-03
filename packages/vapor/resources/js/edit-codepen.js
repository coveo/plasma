$(document).ready(function() {
    $('.codepen-form').each(function() {
        var form = $(this);
        var input = form.find('.codepen-input');
        var content = form.find('.codepen-html');
        var js = '';
        var css = '';
        var script = content.find('script');
        if (script.length) {
            js = js_beautify(script.html());
            script.remove();
        }
        var style = content.find('style');
        if (style.length) {
            css = css_beautify(style.html());
            style.remove();
        }
        var html = html_beautify(content.html());
        content.remove();
        input.val(
            JSON.stringify({
                html_classes: 'coveo-styleguide bg-white',
                html: html,
                js: js,
                js_library: 'jquery',
                js_external:
                    'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js;' +
                    window.location.origin +
                    '/styleguide/dist/js/CoveoStyleGuide.Dependencies.js;' +
                    window.location.origin +
                    '/styleguide/dist/js/scripts.js',
                css: css,
                css_pre_processor: 'scss',
                css_external:
                    window.location.origin +
                    '/styleguide/dist/css/CoveoStyleGuide.css;https://fonts.googleapis.com/css?family=Lato:400,700,300',
            })
        );
    });
});
