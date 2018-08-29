var app = new Vue({
  el: "#global",
  data: {
    sidemenu: false,
    openModal: false
  },
  methods: {
    preventEvent: function (e) {
      e.stopPropagation();
    }
  }
})

$(document).ready(function () {
  handleAnchor(); // anchor smooth 
  handleHeaderOnScroll();
});

/**
 * header
 */
function handleHeaderOnScroll () {
  $(window).scroll(apply);

  var header = $('header');
  function apply () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }
}

/**
 * scrollTo
 */
function scrollTo (top) {
  var body = $("html, body");
  body.stop().animate({scrollTop: top}, 500, 'swing', function() {});
}

/**
 * handleAnchor
 */
function handleAnchor () {
  var anchors = $('a[href^="#"]');
  anchors.each(function (index, el) {
    el = $(el);
    var destId = el.attr('href').substring(1);
    if (destId) {
      el.click(function (e) {
        e.preventDefault();
        var dest = $('#' + destId);
        var top = dest.offset().top;
        var winWidth = $(window).width();
        if (winWidth < 768) { // 모바일
          top -= 60 + 42 + + 42 + 10;
        } else { // pc
          top -= 86 + 42 + 10;
        }
        scrollTo(top);
      });
    }
  });
}
