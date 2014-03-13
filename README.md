jQuery Flex Vertical Center
===========================

This jQuery plugin provides an easy way to vertically center an element in its parent. Even if the parents height changes after resizing the browser window, in a fluid or responsive layout for example.


Usage
-----

Simply include this file in your project (after loading jQuery) like this:

<script defer src="js/jquery.flexverticalcenter.js"></script>

Then call the plugin on the element which needs to be vertically centered in it's parent.

  <script>
  $(document).ready(function() {
    $('#element-to-be-centered').flexVerticalCenter();
  });
  </script>

This will take the parents height, the elements own height and calculate the distance the element should have from the parents top to be vertically centered. This value is applied to the top margin of the element by default.


Options
-------

You can pass an options hash to the plugin.

 - `onAttribute` - the css attribute that the value should be set on (default: 'margin-top')
 - `verticalOffset` - the number of pixels to offset the vertical alignment by, ie. 10, "50px", -100 (default: 0)
 - `parentSelector` - a selector representing the parent to vertically center this element within, ie. ".parent" (default: the element's immediate parent)

Examples:

  <script>
  $(document).ready(function() {
    $('#element-to-be-centered').flexVerticalCenter();
    $('#element-to-be-centered').flexVerticalCenter({ cssAttribute: 'padding-top', verticalOffset: '50px' });
    $('#element-to-be-centered').flexVerticalCenter({ cssAttribute: 'padding-top', parentSelector: '.parent' });
  });
  </script>


Non-jQuery version
------------------

Matthew Nessworthy has made a vanilla javascript version of this plugin. Great if you don't need or want to use jQuery: https://github.com/devmatt/js-flex-vertical-align


Note
----

The initial code was more or less borrowed from the awesome FitText plugin. http://fittextjs.com/
