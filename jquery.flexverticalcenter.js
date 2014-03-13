/*global jQuery */
/*!
* FlexVerticalCenter.js 1.0
*
* Copyright 2011, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Fri Oct 28 19:12:00 2011 +0100
*/
(function( $ ){

  $.fn.flexVerticalCenter = function( options ) {
    var settings = $.extend({
      cssAttribute:   'margin-top', // the attribute to apply the calculated value to
      verticalOffset: 0,            // the number of pixels to offset the vertical alignment by
      parentSelector: null          // a selector representing the parent to vertically center this element within
    }, options || {});

    return this.each(function(){
      var $this   = $(this); // store the object

      // recalculate the distance to the top of the element to keep it centered
      var resizer = function () {
        var parentHeight = (settings.parentSelector) ? $this.parents(settings.parentSelector).first().height() : $this.parent().height();

        $this.css(
          settings.cssAttribute, ( ( ( parentHeight - $this.height() ) / 2 ) + parseInt(settings.verticalOffset) )
        );
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).resize(resizer);

      // Apply a load event to images within the element so it fires again after an image is loaded
      $this.find('img').load(resizer);

    });

  };

})( jQuery );
