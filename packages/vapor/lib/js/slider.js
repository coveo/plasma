// JS used to color coveo-input-slider
// Initialize the component's colors whenever it is rendered by using $(selector).slider()
// ============================================================================================

+function ($) {
    'use strict';

    function updateSliderColors(style, slider, value) {
        var colors = {lower: '#f57f03', upper: '#dddddd'}

        var gradient = [
            'linear-gradient(',
            'to right, ',
            colors.lower + ' ' + value + '%, ',
            colors.upper + ' ' + value + '%)'
        ].join('');

        var webkit = [
            'input[type=range]' + slider + '::-webkit-slider-runnable-track {',
            'background: ',
            gradient,
            '}'
        ].join('');
        var firefox = [
            'input[type=range]' + slider + '::-moz-range-track {',
            'background: ',
            gradient,
            '}'
        ].join('');
        var ie = [
            'input[type=range]' + slider + '::-ms-fill-lower {',
            'background: ',
            colors.lower,
            '}',
            'input[type=range]' + slider + '::-ms-fill-upper {',
            'background: ',
            colors.upper,
            '}'
        ].join('');

        style.html([webkit, firefox, ie].join(''));
    }

    $.fn.slider = function () {
        var $this = $(this)
        var $style = $this.prev('.coveo-input-slider-style');
        var slider = '.coveo-input-slider' + "[data-uid='" + $this.data('uid') + "']";
        var value = $this.val() / $this.prop('max') * 100

        if ($style && slider && (value >= 0 && value <= 100)) {
            updateSliderColors($style, slider, value);
        }

        return this
    }

    $(document).on('input change', 'input[type=range].coveo-input-slider', function (e) {
        $(e.target).slider();
    })

}(jQuery);