(function () {
  function animateItems() {
    var windowHeight = $(window).outerHeight(),
      scroll = $(window).scrollTop(),
      items = $('.how-it-works__infograph-item').toArray();
    items.forEach(function (elem, index) {
      var _elem = $(elem),
        top = _elem.offset().top,
        height = _elem.height(),
        trigger = scroll + windowHeight - height/2;
      if (trigger >= top) {
       _elem.addClass('show');
      } else {
       _elem.removeClass('show');
      }
    });
  }
  if ($('.how-it-works__infograph').length) {
    animateItems();
    $(window).scroll(animateItems);
  }
})();