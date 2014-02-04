/*global jQuery */
/*!	
* FlexVerticalCenter.js 1.0
*
* Copyright 2011, Paul Sprangers http://paulsprangers.com
* Modifications:
*  (29/06/2013) added parentSelector and verticalOffset options (Graham Swan http://grahamswan.com)
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Fri Oct 28 19:12:00 2011 +0100
*/
(function( $ ){
	
	$.fn.flexVerticalCenter = function( onAttribute, verticalOffset, parentSelector ) {
	
		return this.each(function(){
			var $this		= $(this);              // store the object
			var attribute	= onAttribute || 'margin-top'; // the attribute to put the calculated value on
			var offset = parseInt(verticalOffset) || 0; // the number of pixels to offset the vertical alignment by
			var parent_selector = parentSelector || null; // a selector representing the parent to vertically center this element within
        	
			// recalculate the distance to the top of the element to keep it centered
			var resizer = function () {
				var parent_height = (parent_selector) ? $this.parents(parent_selector).first().height() : $this.parent().height();
				
				$this.css(
					attribute, ( ( ( parent_height - $this.height() ) / 2 ) + offset )
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
