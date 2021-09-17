/**
 * Created by Hamed-Desktop on 8/6/2016/
 */

(function ($) {
    $.fn.infiniteJscroll = function () {

        var $win = this;
        // extend the options from pre-defined values:
        var options = $.extend({
            offset: 100,
            topOfPage: function () {
            },
            bottomOfPage: function () {
            },
            pageInit: function () {
            }
        }, arguments[0] || {});

        $(document).ready(function () {
            options.pageInit.call(this);
        });

        $win.scroll(function () {
            //console.log("win height:" + $win.height());
            //console.log("doc height:" + $win[0].scrollHeight);
            if ($win.scrollTop() == 0) {

                // call the callback and apply the scope:
                options.topOfPage.call(this);
            }
            else if ($win.scrollTop() + options.offset >= $(document).height() - $(window).height()) {
                // call the callback and apply the scope:
                options.bottomOfPage.call(this);
            }
        });
    };
}(jQuery));