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
	
	$.fn.flexVerticalCenter = function( onAttribute ) {
	
		return this.each(function(){
			var $this		= $(this);              // store the object
			var attribute	= onAttribute || 'margin-top'; // the attribute to put the calculated value on
        	
			// resize to box the maintain the set ratio
			var resizer = function () {
				// get parent height minus own height and devide by 2
				$this.css(
					attribute, ( ( $this.parent().height() - $this.height() ) / 2 )
				);
			};

			// Call once to set.
			resizer();
				
			// Call on resize. Opera debounces their resize by default. 
      		$(window).resize(resizer);
      	
		});

	};

})( jQuery );