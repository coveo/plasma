$(document).ready(function() {
    // manually reset the hash to force the browser to go to the selected menu item on page refresh
    var hash = window.location.hash;
    window.location.hash = '';
    window.location.hash = hash;

    $('.coveo-slider-input').slider();
    $('.coveo-datepicker').DatePicker({
        mode: 'single',
        inline: true,
        date: new Date(),
    });
    $('[title]').tooltip({
        container: 'body',
    });

    var selectedTab;
    if (window.location.hash) {
        var selectedTabChild = $(
            '.navigation-menu-section-item-link[href="' + window.location.pathname + window.location.hash + '"]'
        );
        selectedTab = selectedTabChild.parent().addClass('state-active');
    } else {
        var selectedTabParend = $('.navigation-menu-section-item-link[href*="' + window.location.pathname + '"]');
        selectedTab = $(selectedTabParend[0])
            .parent()
            .addClass('state-active');
    }

    $('.navigation-menu-section-item').click(function() {
        if (selectedTab) {
            selectedTab.removeClass('state-active');
        }
        $(this).addClass('state-active');
        selectedTab = $(this);
    });

    $('.navigation-menu-section-header').click(function(event) {
        $(this)
            .find('.collapsible-arrow')
            .toggleClass('open');
        $(this)
            .next('.navigation-menu-section-items')
            .slideToggle();
    });

    // Simple script to handle opening/closing modals
    function modalHandler() {
        var backdrop = $('.modal-backdrop');

        $('.js-modal-trigger').each(function(i, modalTrigger) {
            var modal = $('#' + modalTrigger.getAttribute('data-modal'));
            var modalPrompt = $('#' + modalTrigger.getAttribute('data-modal') + 'Prompt');

            var closeButton = modal.find('.js-modal-close');
            var promptCloseButton = modalPrompt.find('.js-modal-close');

            function removeModal() {
                modal.removeClass('opened');

                backdrop.addClass('closed');

                backdrop.off('click', removeModal);
            }

            function removePrompt() {
                modalPrompt.removeClass('opened');

                modal.find('.prompt-backdrop').addClass('closed');

                backdrop.off('click', removePrompt);

                backdrop.on('click', removeModal);
            }

            $(modalTrigger).on('click', function() {
                modal.addClass('opened');

                backdrop.removeClass('closed');

                if (modalPrompt.length > 0) {
                    modalPrompt.addClass('opened');

                    backdrop.on('click', removePrompt);
                } else {
                    backdrop.on('click', removeModal);
                }
            });

            closeButton.on('click', function(event) {
                event.stopPropagation();
                removeModal();
            });

            promptCloseButton.on('click', function(event) {
                event.stopPropagation();
                removePrompt();
            });
        });
    }

    modalHandler();

    function expandRowView($el) {
        $el.find('tr.heading-row').addClass('opened');
        $el.find('tr.collapsible-row').addClass('in');
        $el.find('tr.collapsible-row .container').slideDown(400);
        $el.find('[data-collapse-state]').attr('data-collapse-state', 'expanded');
    }

    function collapseRowView($el) {
        $el.find('tr.heading-row').removeClass('opened');
        $el.find('tr.collapsible-row').removeClass('in');
        $el.find('tr.collapsible-row .container').slideUp(400);
        $el.find('[data-collapse-state]').attr('data-collapse-state', 'collapsed');
    }

    $('tr.heading-row').click(function(jQueryEventObject) {
        var $el = $(jQueryEventObject.currentTarget);
        if ($el.hasClass('opened')) {
            collapseRowView($el.parent());
        } else {
            expandRowView($el.parent());
        }
    });

    // Handle open/close dropdown
    $('button.dropdown-toggle').click(function(event) {
        var dropdownEl = $(event.currentTarget).parent();
        dropdownEl.toggleClass('open', !dropdownEl.hasClass('open'));
    });

    // Handle open/close dropdown search
    $('.mod-search button.dropdown-toggle').click(function(event) {
        var buttonEl = $(event.currentTarget);
        var dropdownEl = $(event.currentTarget).parent();
        buttonEl.toggleClass('open', !dropdownEl.hasClass('open'));
        buttonEl.toggleClass('hidden', !dropdownEl.hasClass('hidden'));

        dropdownEl.find('.coveo-filter-container').toggleClass('hidden');
        dropdownEl.find('.filter-box').focus();
    });

    $('.mod-search .filter-box').blur(function(event) {
        var filterElement = $(event.currentTarget).parent();
        var dropdownEl = filterElement.parent();
        filterElement.find('filter-box').context.value = '';
        filterElement.addClass('hidden');

        dropdownEl.removeClass('open');
        dropdownEl.find('button.dropdown-button-search-container').removeClass('hidden');
    });

    // Handle selection in flat-select
    $('.flat-select-option').click(function(event) {
        var optionEl = $(event.currentTarget);
        var flatSelectEl = optionEl.parent();

        flatSelectEl.find('.flat-select-option:not(.selectable)').addClass('selectable');
        optionEl.removeClass('selectable');
    });

    // Handle flippable flip/unflip
    $('.flippable').click(function() {
        $(this)
            .find('.flipper')
            .toggleClass('show-back')
            .toggleClass('show-front');
    });

    // handle side nav toggle
    document.querySelector('.header-hamburger').addEventListener('click', () => {
        document.querySelector('.navigation-wrapper').classList.toggle('navigation-wrapper-opened');
        document.querySelector('.header-hamburger').classList.toggle('header-hamburger-opened');
    });
});
