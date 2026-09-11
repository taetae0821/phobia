function openPanel() {
    document.getElementById('panel').classList.add('active');
    document.getElementById('blurOverlay').classList.add('active');
}

function closePanel() {
    document.getElementById('panel').classList.remove('active');
    document.getElementById('blurOverlay').classList.remove('active');
    $('#numInput').val('').css({ color: 'black', 'border-color': 'black' });
}
    $(document).ready(function() {
        $('#keypad').keypad();

        $('#numInput').on('change', function() {
            var value = $(this).val();

            if (value.length < 4) {
                $(this).css({ color: 'black', 'border-color': 'black' });
                return;
            }

            if (value === "0714") {
                $(this).css({ color: 'green', 'border-color': 'green' });
                document.querySelector(".lock").style.display = "none";
                console.log("실행");
                
            } else {
                $(this).css({ color: 'red', 'border-color': 'red' });
            }
            setTimeout(closePanel, 400);
        });
    });

    (function($) {
        (function(pluginName) {
            var defaults = {
                inputField: 'input.keypad',
                buttonTemplate: '<button></button>',
                submitButtonText: '전체',
                deleteButtonText: '←',
                submitButtonClass: 'submit',
                deleteButtonClass: 'delete'
            };
            $.fn[pluginName] = function(options) {
                options = $.extend(true, {}, defaults, options);

                return this.each(function() {
                    var elem = this,
                        $elem = $(elem),
                        $input = jQuery.type(options.inputField) == 'string' ? $(options.inputField) : options.inputField,
                        $form = $input.parents('form').length ? $($input.parents('form')[0]) : $elem;

                    var numbers = Array.apply(null, Array(9)).map(function (_, i) {
                        return $(options.buttonTemplate).html(i+1).addClass('number');
                    });
                    numbers.push($(options.buttonTemplate).html(options.submitButtonText).addClass(options.submitButtonClass));
                    numbers.push($(options.buttonTemplate).html("0").addClass('number'));
                    numbers.push($(options.buttonTemplate).html(options.deleteButtonText).addClass(options.deleteButtonClass));

                    $elem.html(numbers).addClass('keypad');

                    $elem.find('.number').click(function(e) {
                        $input.val($input.val() + $(e.target).text());
                        $input.trigger('change');
                    });
                    $elem.find('.' + options.deleteButtonClass).click(function(e) {
                        $input.val($input.val().slice(0, -1));
                        $input.trigger('change');
                    });
                    $elem.find('.' + options.submitButtonClass).click(function(e) {
                        $("#numInput").val("");
                    });
                });
            };
            $.fn[pluginName].defaults = defaults;
        })('keypad');
    })(jQuery);