(function($) {
  $.fn.accordion = function(options) {
    return this.each(function() {
      var settings = $.extend(
        {
          firstChildExpand: true,
          multiExpand: false,
          slideSpeed: 500,
          dropDownIcon: ""
        },
        options
      );
      $(this)
        .children("a")
        .each(function() {
          $(this)
            .next("")
            .andSelf()
            .wrapAll("<div class='accordion-item'></div>");
        });
      $(this)
        .children()
        .children("div")
        .addClass("accordion-content");
      $(this)
        .find("a")
        .wrap("<div class='accordion-header'></div>");
      $(this)
        .find("a")
        .after("<div>" + settings.dropDownIcon + "</div>");
      $(this)
        .children(".accordion-item")
        .wrap('<div class="drawer"></div>');
      if (settings.firstChildExpand == true) {
        $(this)
          .find(".accordion-header:first")
          .toggleClass("accordion-header-active");
        $(this)
          .find(".accordion-header:first")
          .parent()
          .toggleClass("accordion-item-active");
        $(this)
          .find(".accordion-header:first")
          .next()
          .slideToggle(0);
        $(this)
          .find(".accordion-header:first")
          .children()
          .toggleClass("");
      }
      $(this)
        .find(".accordion-header")
        .click(function() {
          if (settings.multiExpand == false) {
            if (!$(this).hasClass("accordion-header-active")) {
              $(this)
                .parent()
                .parent()
                .parent()
                .find(".accordion-header-active")
                .removeClass("accordion-header-active");
              $(this)
                .parent()
                .parent()
                .parent()
                .find(".accordion-item-active")
                .children(".accordion-content")
                .slideUp(settings.slideSpeed);
              $(this)
                .parent()
                .parent()
                .parent()
                .find("")
                .removeClass("");
              $(this)
                .parent()
                .parent()
                .parent()
                .find(".accordion-item-active")
                .removeClass("accordion-item-active");
            }
          }
          $(this).toggleClass("accordion-header-active");
          $(this)
            .parent()
            .toggleClass("accordion-item-active");
          $(this)
            .next()
            .slideToggle(settings.slideSpeed);
          $(this)
            .children("")
            .toggleClass("");
        });
    });
  };
})(jQuery);
