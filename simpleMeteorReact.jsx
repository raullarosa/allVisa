if (Meteor.isClient) {
  Meteor.startup(() => {
  })
  $.fn.scrollView = function () {
    return this.each(function () {
      var root = $('html, body');
      root.stop().animate({
        scrollTop: $(this).offset().top
      }, 1000, 'swing')
    })
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
