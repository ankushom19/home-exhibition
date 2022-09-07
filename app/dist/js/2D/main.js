(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* jshint laxbreak: true */

'use strict';

require('./polyfills/animFramePolyfill');
require('./polyfills/bindPolyfill');
require('./polyfills/indexOfPolyfill');

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var skrollr = (typeof window !== "undefined" ? window['skrollr'] : typeof global !== "undefined" ? global['skrollr'] : null);
require('./libs/waypointLib');
  
var HASH = require('./modules/hashModule');

var ImagesLoader = require('./classes/LoaderClass');

var Loader = require('./objects2D/LoaderObject2D');
var Menu = require('./objects2D/menuObject2D');
var Wireframe = require('./objects2D/WireframeObject2D');

function mobile () {
  return navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i);
}

jQuery(function () {
  HASH.replacePlaceholders();

  var loader = new Loader();
  var menu = new Menu();
  var imagesLoader = new ImagesLoader([
    './app/public/img/part-beam.png',
    './app/public/img/part-drop.png',
    './app/public/img/part-sphere.png',
    './app/public/img/part-grid.png',
    './app/public/img/part-field.png',
    './app/public/img/part-stars.png'
  ]);

  imagesLoader.onProgress(function (percent) {
    loader.update(percent);
  });

  imagesLoader.start();

  // heads
  skrollr.init({ skrollrBody: 'mobile-body' });

  // tails
  var wireframe = new Wireframe(jQuery('.wireframe'));

  if (!mobile()) {
    var $tails = jQuery('.tails');
    var $tailsSections = $tails.find('.tails__section');

    // prepare els
    $tailsSections.find('.tails__section__el').animate({ opacity: 0, y: 100 }, 0);

    var waypoint = $tailsSections.waypoint({
      offset: 30,
      startAt: $tails.offset().top - 1000
    });

    waypoint.start();

    $tailsSections.on('active', function () {
      var $el = jQuery(this);
      
      if ($el.attr('data-appeared')) {
        return false;
      }

      jQuery(this).find('.tails__section__el').each(function (i) {
        jQuery(this).stop().delay(i * 100).animate({ opacity: 1, y: 0 }, 500);
      });

      $el.attr('data-appeared', true);
    });

    jQuery('.tails__section--site').on('stateChange', function (e, state) {
      if (state === 'active') {
        wireframe.start();
        wireframe.in();
      } else {
        wireframe.stop();
      }
    });
  } else {
    wireframe.in();
  }

  imagesLoader.onComplete(function () {
    loader.out();

    setTimeout(function () {
      menu.in();
    }, 1500);
  });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvbWFpbjJELmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgbGF4YnJlYWs6IHRydWUgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnJlcXVpcmUoJy4vcG9seWZpbGxzL2FuaW1GcmFtZVBvbHlmaWxsJyk7XHJcbnJlcXVpcmUoJy4vcG9seWZpbGxzL2JpbmRQb2x5ZmlsbCcpO1xyXG5yZXF1aXJlKCcuL3BvbHlmaWxscy9pbmRleE9mUG9seWZpbGwnKTtcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG52YXIgc2tyb2xsciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydza3JvbGxyJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydza3JvbGxyJ10gOiBudWxsKTtcclxucmVxdWlyZSgnLi9saWJzL3dheXBvaW50TGliJyk7XHJcbiAgXHJcbnZhciBIQVNIID0gcmVxdWlyZSgnLi9tb2R1bGVzL2hhc2hNb2R1bGUnKTtcclxuXHJcbnZhciBJbWFnZXNMb2FkZXIgPSByZXF1aXJlKCcuL2NsYXNzZXMvTG9hZGVyQ2xhc3MnKTtcclxuXHJcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuL29iamVjdHMyRC9Mb2FkZXJPYmplY3QyRCcpO1xyXG52YXIgTWVudSA9IHJlcXVpcmUoJy4vb2JqZWN0czJEL21lbnVPYmplY3QyRCcpO1xyXG52YXIgV2lyZWZyYW1lID0gcmVxdWlyZSgnLi9vYmplY3RzMkQvV2lyZWZyYW1lT2JqZWN0MkQnKTtcclxuXHJcbmZ1bmN0aW9uIG1vYmlsZSAoKSB7XHJcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcclxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcclxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSlcclxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcclxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcclxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSk7XHJcbn1cclxuXHJcbmpRdWVyeShmdW5jdGlvbiAoKSB7XHJcbiAgSEFTSC5yZXBsYWNlUGxhY2Vob2xkZXJzKCk7XHJcblxyXG4gIHZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XHJcbiAgdmFyIG1lbnUgPSBuZXcgTWVudSgpO1xyXG4gIHZhciBpbWFnZXNMb2FkZXIgPSBuZXcgSW1hZ2VzTG9hZGVyKFtcclxuICAgICcuL2FwcC9wdWJsaWMvaW1nL3BhcnQtYmVhbS5wbmcnLFxyXG4gICAgJy4vYXBwL3B1YmxpYy9pbWcvcGFydC1kcm9wLnBuZycsXHJcbiAgICAnLi9hcHAvcHVibGljL2ltZy9wYXJ0LXNwaGVyZS5wbmcnLFxyXG4gICAgJy4vYXBwL3B1YmxpYy9pbWcvcGFydC1ncmlkLnBuZycsXHJcbiAgICAnLi9hcHAvcHVibGljL2ltZy9wYXJ0LWZpZWxkLnBuZycsXHJcbiAgICAnLi9hcHAvcHVibGljL2ltZy9wYXJ0LXN0YXJzLnBuZydcclxuICBdKTtcclxuXHJcbiAgaW1hZ2VzTG9hZGVyLm9uUHJvZ3Jlc3MoZnVuY3Rpb24gKHBlcmNlbnQpIHtcclxuICAgIGxvYWRlci51cGRhdGUocGVyY2VudCk7XHJcbiAgfSk7XHJcblxyXG4gIGltYWdlc0xvYWRlci5zdGFydCgpO1xyXG5cclxuICAvLyBoZWFkc1xyXG4gIHNrcm9sbHIuaW5pdCh7IHNrcm9sbHJCb2R5OiAnbW9iaWxlLWJvZHknIH0pO1xyXG5cclxuICAvLyB0YWlsc1xyXG4gIHZhciB3aXJlZnJhbWUgPSBuZXcgV2lyZWZyYW1lKGpRdWVyeSgnLndpcmVmcmFtZScpKTtcclxuXHJcbiAgaWYgKCFtb2JpbGUoKSkge1xyXG4gICAgdmFyICR0YWlscyA9IGpRdWVyeSgnLnRhaWxzJyk7XHJcbiAgICB2YXIgJHRhaWxzU2VjdGlvbnMgPSAkdGFpbHMuZmluZCgnLnRhaWxzX19zZWN0aW9uJyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBlbHNcclxuICAgICR0YWlsc1NlY3Rpb25zLmZpbmQoJy50YWlsc19fc2VjdGlvbl9fZWwnKS5hbmltYXRlKHsgb3BhY2l0eTogMCwgeTogMTAwIH0sIDApO1xyXG5cclxuICAgIHZhciB3YXlwb2ludCA9ICR0YWlsc1NlY3Rpb25zLndheXBvaW50KHtcclxuICAgICAgb2Zmc2V0OiAzMCxcclxuICAgICAgc3RhcnRBdDogJHRhaWxzLm9mZnNldCgpLnRvcCAtIDEwMDBcclxuICAgIH0pO1xyXG5cclxuICAgIHdheXBvaW50LnN0YXJ0KCk7XHJcblxyXG4gICAgJHRhaWxzU2VjdGlvbnMub24oJ2FjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICRlbCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGlmICgkZWwuYXR0cignZGF0YS1hcHBlYXJlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBqUXVlcnkodGhpcykuZmluZCgnLnRhaWxzX19zZWN0aW9uX19lbCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykuc3RvcCgpLmRlbGF5KGkgKiAxMDApLmFuaW1hdGUoeyBvcGFjaXR5OiAxLCB5OiAwIH0sIDUwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtYXBwZWFyZWQnLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGpRdWVyeSgnLnRhaWxzX19zZWN0aW9uLS1zaXRlJykub24oJ3N0YXRlQ2hhbmdlJywgZnVuY3Rpb24gKGUsIHN0YXRlKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcclxuICAgICAgICB3aXJlZnJhbWUuc3RhcnQoKTtcclxuICAgICAgICB3aXJlZnJhbWUuaW4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aXJlZnJhbWUuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2lyZWZyYW1lLmluKCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXNMb2FkZXIub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2FkZXIub3V0KCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1lbnUuaW4oKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0pO1xyXG59KTsiXX0=
},{"./classes/LoaderClass":2,"./libs/waypointLib":3,"./modules/hashModule":4,"./objects2D/LoaderObject2D":5,"./objects2D/WireframeObject2D":6,"./objects2D/menuObject2D":7,"./polyfills/animFramePolyfill":8,"./polyfills/bindPolyfill":9,"./polyfills/indexOfPolyfill":10}],2:[function(require,module,exports){
'use strict';

/**
 * Preload images. Notify on update/complete
 *
 * @class ImagesLoader
 * @constructor
 * @param {Array} [images=[]] Images sources
 */
function ImagesLoader (images) {
  this.images = images || [];
  this.total = this.images.length;

  var fn = function () {};
  this.progress = fn;
  this.complete = fn;
}

/**
 * Start to preload
 *
 * @method start
 */
ImagesLoader.prototype.start = function () {
  var loaded = 0;

  var updateQueue = function () {
    loaded++;

    var percent = (loaded * 100) / this.total;
    this.progress(percent);

    if (loaded === this.total) {
      this.complete();
    }
  }.bind(this);

  for (var i = 0; i < this.total; i++) {
    var image = new Image();
    image.src = this.images[i];
    image.onload = image.onerror = updateQueue;
  }
};

/**
 * Pass the update handler
 *
 * @method onProgress
 * @param {Function} [progress] 
 */
ImagesLoader.prototype.onProgress = function (progress) {
  this.progress = progress;
};

/**
 * Pass the complete handler
 *
 * @method onComplete
 * @param {Function} [complete] 
 */
ImagesLoader.prototype.onComplete = function (complete) {
  this.complete = complete;
};

module.exports = ImagesLoader;
},{}],3:[function(require,module,exports){
(function (global){
/* jshint laxbreak: true */

'use strict';

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var debounce = require('../utils/debounceUtil');

module.exports = (function ($) {
  /**
   * Trigger event on element when they enter/leave viewport
   *
   * @class waypoint
   * @constructor
   * @param {Object} [options]
   * @param {jQuery} [options.$viewport=jQuery(window)] Viewport
   * @param {Number} [options.offset=0] Offset
   * @param {Number} [options.startAt=null] Start after certain distance (for performances)
   * @requires jQuery, debounce
   */
  $.fn.waypoint = function (options) {
    var isInContainer = options.$viewport ? true : false;

    var parameters = $.extend({
      $viewport: $(window),
      offset: 0,
      startAt: null
    }, options);

    var $els = $(this);
    var $viewport = parameters.$viewport;

    var viewportHeight = $viewport.height();
    var scrollTop = $viewport.scrollTop();
    var threshold = viewportHeight * (parameters.offset / 100);

    // Store height and top on elements to avoid consecutive computations
    function cacheAttributes () {
      $els.each(function () {
        var $el = $(this);

        var height = parseInt($el.outerHeight());
        var top = isInContainer
          ? parseInt($el.position().top) + scrollTop
          : parseInt($el.offset().top);

        $el.attr({ 'data-height': height, 'data-top': top });
      });
    }

    function onResize () {
      /*jshint validthis: true */

      viewportHeight = $viewport.height();
      threshold = viewportHeight * (parameters.offset / 100);

      cacheAttributes();

      $(this).trigger('scroll');
    }

    var onScroll = debounce(function onScroll () {
      scrollTop = $(this).scrollTop();

      if (parameters.startAt && scrollTop < parameters.startAt) {
        return false;
      }

      var topLimit = scrollTop + threshold;
      var bottomLimit = scrollTop + (viewportHeight - threshold);

      $els.each(function () {
        var $el = $(this);

        var state = $el.attr('data-state');

        var height = parseInt($el.attr('data-height')) || $el.outerHeight();
        var top = isInContainer
          ? parseInt($el.attr('data-top')) + 1 || $el.position().top + 1
          : parseInt($el.attr('data-top')) + 1 || $el.offset().top + 1;
        var bottom = top + height;

        if (top > topLimit && top < bottomLimit
            || bottom > topLimit && bottom < bottomLimit
            || top < topLimit && bottom > bottomLimit) {

          if (!state) {
            $el.attr('data-state', 'visible');
            $el.trigger('active');
            $el.trigger('stateChange', 'active');
          }
        } else {
          if (state) {
            $el.attr('data-state', null);
            $el.trigger('inactive');
            $el.trigger('stateChange', 'inactive');
          }
        }

      });
    }, 20);

    return {
      /**
       * Start waypoint
       *
       * @method start
       */
      start: function () {
        $(window).on('resize', onResize);
        $viewport.on('scroll', onScroll);
        cacheAttributes();
        onScroll();
      },

      /**
       * Stop waypoint
       *
       * @method stop
       */
      stop: function () {
        $(window).off('resize', onResize);
        $viewport.off('scroll', onScroll);
      }
    };
  };

})(jQuery);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvbGlicy93YXlwb2ludExpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoganNoaW50IGxheGJyZWFrOiB0cnVlICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKTtcclxuXHJcbnZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RlYm91bmNlVXRpbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCQpIHtcclxuICAvKipcclxuICAgKiBUcmlnZ2VyIGV2ZW50IG9uIGVsZW1lbnQgd2hlbiB0aGV5IGVudGVyL2xlYXZlIHZpZXdwb3J0XHJcbiAgICpcclxuICAgKiBAY2xhc3Mgd2F5cG9pbnRcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAgICogQHBhcmFtIHtqUXVlcnl9IFtvcHRpb25zLiR2aWV3cG9ydD1qUXVlcnkod2luZG93KV0gVmlld3BvcnRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMub2Zmc2V0PTBdIE9mZnNldFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zdGFydEF0PW51bGxdIFN0YXJ0IGFmdGVyIGNlcnRhaW4gZGlzdGFuY2UgKGZvciBwZXJmb3JtYW5jZXMpXHJcbiAgICogQHJlcXVpcmVzIGpRdWVyeSwgZGVib3VuY2VcclxuICAgKi9cclxuICAkLmZuLndheXBvaW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHZhciBpc0luQ29udGFpbmVyID0gb3B0aW9ucy4kdmlld3BvcnQgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgdmFyIHBhcmFtZXRlcnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgICR2aWV3cG9ydDogJCh3aW5kb3cpLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIHN0YXJ0QXQ6IG51bGxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIHZhciAkZWxzID0gJCh0aGlzKTtcclxuICAgIHZhciAkdmlld3BvcnQgPSBwYXJhbWV0ZXJzLiR2aWV3cG9ydDtcclxuXHJcbiAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSAkdmlld3BvcnQuaGVpZ2h0KCk7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gJHZpZXdwb3J0LnNjcm9sbFRvcCgpO1xyXG4gICAgdmFyIHRocmVzaG9sZCA9IHZpZXdwb3J0SGVpZ2h0ICogKHBhcmFtZXRlcnMub2Zmc2V0IC8gMTAwKTtcclxuXHJcbiAgICAvLyBTdG9yZSBoZWlnaHQgYW5kIHRvcCBvbiBlbGVtZW50cyB0byBhdm9pZCBjb25zZWN1dGl2ZSBjb21wdXRhdGlvbnNcclxuICAgIGZ1bmN0aW9uIGNhY2hlQXR0cmlidXRlcyAoKSB7XHJcbiAgICAgICRlbHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludCgkZWwub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgdmFyIHRvcCA9IGlzSW5Db250YWluZXJcclxuICAgICAgICAgID8gcGFyc2VJbnQoJGVsLnBvc2l0aW9uKCkudG9wKSArIHNjcm9sbFRvcFxyXG4gICAgICAgICAgOiBwYXJzZUludCgkZWwub2Zmc2V0KCkudG9wKTtcclxuXHJcbiAgICAgICAgJGVsLmF0dHIoeyAnZGF0YS1oZWlnaHQnOiBoZWlnaHQsICdkYXRhLXRvcCc6IHRvcCB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKCkge1xyXG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cclxuXHJcbiAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gJHZpZXdwb3J0LmhlaWdodCgpO1xyXG4gICAgICB0aHJlc2hvbGQgPSB2aWV3cG9ydEhlaWdodCAqIChwYXJhbWV0ZXJzLm9mZnNldCAvIDEwMCk7XHJcblxyXG4gICAgICBjYWNoZUF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICQodGhpcykudHJpZ2dlcignc2Nyb2xsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9uU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24gb25TY3JvbGwgKCkge1xyXG4gICAgICBzY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgaWYgKHBhcmFtZXRlcnMuc3RhcnRBdCAmJiBzY3JvbGxUb3AgPCBwYXJhbWV0ZXJzLnN0YXJ0QXQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB0b3BMaW1pdCA9IHNjcm9sbFRvcCArIHRocmVzaG9sZDtcclxuICAgICAgdmFyIGJvdHRvbUxpbWl0ID0gc2Nyb2xsVG9wICsgKHZpZXdwb3J0SGVpZ2h0IC0gdGhyZXNob2xkKTtcclxuXHJcbiAgICAgICRlbHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZSA9ICRlbC5hdHRyKCdkYXRhLXN0YXRlJyk7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUludCgkZWwuYXR0cignZGF0YS1oZWlnaHQnKSkgfHwgJGVsLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHRvcCA9IGlzSW5Db250YWluZXJcclxuICAgICAgICAgID8gcGFyc2VJbnQoJGVsLmF0dHIoJ2RhdGEtdG9wJykpICsgMSB8fCAkZWwucG9zaXRpb24oKS50b3AgKyAxXHJcbiAgICAgICAgICA6IHBhcnNlSW50KCRlbC5hdHRyKCdkYXRhLXRvcCcpKSArIDEgfHwgJGVsLm9mZnNldCgpLnRvcCArIDE7XHJcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHRvcCA+IHRvcExpbWl0ICYmIHRvcCA8IGJvdHRvbUxpbWl0XHJcbiAgICAgICAgICAgIHx8IGJvdHRvbSA+IHRvcExpbWl0ICYmIGJvdHRvbSA8IGJvdHRvbUxpbWl0XHJcbiAgICAgICAgICAgIHx8IHRvcCA8IHRvcExpbWl0ICYmIGJvdHRvbSA+IGJvdHRvbUxpbWl0KSB7XHJcblxyXG4gICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAkZWwuYXR0cignZGF0YS1zdGF0ZScsICd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICRlbC50cmlnZ2VyKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJGVsLnRyaWdnZXIoJ3N0YXRlQ2hhbmdlJywgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RhdGUnLCBudWxsKTtcclxuICAgICAgICAgICAgJGVsLnRyaWdnZXIoJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICRlbC50cmlnZ2VyKCdzdGF0ZUNoYW5nZScsICdpbmFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTdGFydCB3YXlwb2ludFxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbWV0aG9kIHN0YXJ0XHJcbiAgICAgICAqL1xyXG4gICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICAgICR2aWV3cG9ydC5vbignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIGNhY2hlQXR0cmlidXRlcygpO1xyXG4gICAgICAgIG9uU2Nyb2xsKCk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogU3RvcCB3YXlwb2ludFxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAbWV0aG9kIHN0b3BcclxuICAgICAgICovXHJcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgICAgJHZpZXdwb3J0Lm9mZignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG59KShqUXVlcnkpOyJdfQ==
},{"../utils/debounceUtil":11}],4:[function(require,module,exports){
(function (global){
'use strict';

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

/**
 * Extract the current hash
 * and return the corresponding name
 *
 * @module HASH
 * @requires jQuery
 */
var HASH = HASH || (function () {
  var instance = null;

  function init () {
    var agencies = {
      akqa: 'AKQA',
      hki: 'HKI',
      grouek: 'Grouek',
      mediamonks: 'Media Monks',
      soleilnoir: 'Soleil Noir',
      thread: 'Thread',
      ultranoir: 'Ultra Noir'
    };

    function getHash () {
      return window.location.hash.split('#')[1];
    }

    function getAgency (hash) {
      var agency;

      if (hash && agencies[hash]) {
        agency = agencies[hash];
      } else {
        agency = '';
      }

      return agency;
    }

    var hash = getHash();
    var agency = getAgency(hash);

    return {
      hash: hash,
      agency: agency,

      /**
       * Replace all the placeholders by correct agency name
       *
       * @method replacePlaceholders
       */
      replacePlaceholders: function () {
        var $placeholders = jQuery('.placeholder--agency');
        
        $placeholders.each(function () {
          var $placeholder = jQuery(this);

          if ($placeholder.hasClass('placeholder--agency--you')) {
            if (agency !== '') {
              $placeholder.html(agency);
            } else {
              $placeholder.html('you');
            }
          } else {
            if ($placeholder.hasClass('placeholder--agency--capital')) {
              $placeholder.html(agency.toUpperCase());
            } else {
              $placeholder.html(agency);
            }
          }
        });

        var $email = jQuery('.placeholder--email');

        var subject = hash ? '?subject=Hi from ' + agency : '?subject=Hi';
        var body = hash ? '&body=Hi V, we like your work and would love to meet you.' : '&body=Hi V';

        $email.attr('href', [
          'mailto:valentin.marmonier@gmail.com',
          subject,
          body
        ].join(''));
      }
    };
  }

  return {
    /**
     * Get HASH current instance
     *
     * @method getInstance
     * @return {HASH}
     */
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

module.exports = HASH.getInstance();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvbW9kdWxlcy9oYXNoTW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGpRdWVyeSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydqUXVlcnknXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pRdWVyeSddIDogbnVsbCk7XHJcblxyXG4vKipcclxuICogRXh0cmFjdCB0aGUgY3VycmVudCBoYXNoXHJcbiAqIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbmFtZVxyXG4gKlxyXG4gKiBAbW9kdWxlIEhBU0hcclxuICogQHJlcXVpcmVzIGpRdWVyeVxyXG4gKi9cclxudmFyIEhBU0ggPSBIQVNIIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICB2YXIgYWdlbmNpZXMgPSB7XHJcbiAgICAgIGFrcWE6ICdBS1FBJyxcclxuICAgICAgaGtpOiAnSEtJJyxcclxuICAgICAgZ3JvdWVrOiAnR3JvdWVrJyxcclxuICAgICAgbWVkaWFtb25rczogJ01lZGlhIE1vbmtzJyxcclxuICAgICAgc29sZWlsbm9pcjogJ1NvbGVpbCBOb2lyJyxcclxuICAgICAgdGhyZWFkOiAnVGhyZWFkJyxcclxuICAgICAgdWx0cmFub2lyOiAnVWx0cmEgTm9pcidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFnZW5jeSAoaGFzaCkge1xyXG4gICAgICB2YXIgYWdlbmN5O1xyXG5cclxuICAgICAgaWYgKGhhc2ggJiYgYWdlbmNpZXNbaGFzaF0pIHtcclxuICAgICAgICBhZ2VuY3kgPSBhZ2VuY2llc1toYXNoXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZ2VuY3kgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFnZW5jeTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGFzaCA9IGdldEhhc2goKTtcclxuICAgIHZhciBhZ2VuY3kgPSBnZXRBZ2VuY3koaGFzaCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzaDogaGFzaCxcclxuICAgICAgYWdlbmN5OiBhZ2VuY3ksXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogUmVwbGFjZSBhbGwgdGhlIHBsYWNlaG9sZGVycyBieSBjb3JyZWN0IGFnZW5jeSBuYW1lXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBtZXRob2QgcmVwbGFjZVBsYWNlaG9sZGVyc1xyXG4gICAgICAgKi9cclxuICAgICAgcmVwbGFjZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkcGxhY2Vob2xkZXJzID0galF1ZXJ5KCcucGxhY2Vob2xkZXItLWFnZW5jeScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRwbGFjZWhvbGRlcnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgJHBsYWNlaG9sZGVyID0galF1ZXJ5KHRoaXMpO1xyXG5cclxuICAgICAgICAgIGlmICgkcGxhY2Vob2xkZXIuaGFzQ2xhc3MoJ3BsYWNlaG9sZGVyLS1hZ2VuY3ktLXlvdScpKSB7XHJcbiAgICAgICAgICAgIGlmIChhZ2VuY3kgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoYWdlbmN5KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgneW91Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgkcGxhY2Vob2xkZXIuaGFzQ2xhc3MoJ3BsYWNlaG9sZGVyLS1hZ2VuY3ktLWNhcGl0YWwnKSkge1xyXG4gICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKGFnZW5jeS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChhZ2VuY3kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciAkZW1haWwgPSBqUXVlcnkoJy5wbGFjZWhvbGRlci0tZW1haWwnKTtcclxuXHJcbiAgICAgICAgdmFyIHN1YmplY3QgPSBoYXNoID8gJz9zdWJqZWN0PUhpIGZyb20gJyArIGFnZW5jeSA6ICc/c3ViamVjdD1IaSc7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBoYXNoID8gJyZib2R5PUhpIFYsIHdlIGxpa2UgeW91ciB3b3JrIGFuZCB3b3VsZCBsb3ZlIHRvIG1lZXQgeW91LicgOiAnJmJvZHk9SGkgVic7XHJcblxyXG4gICAgICAgICRlbWFpbC5hdHRyKCdocmVmJywgW1xyXG4gICAgICAgICAgJ21haWx0bzp2YWxlbnRpbi5tYXJtb25pZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgICBib2R5XHJcbiAgICAgICAgXS5qb2luKCcnKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgSEFTSCBjdXJyZW50IGluc3RhbmNlXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBnZXRJbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SEFTSH1cclxuICAgICAqL1xyXG4gICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlID0gaW5pdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSEFTSC5nZXRJbnN0YW5jZSgpOyJdfQ==
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

/**
 * Preloader
 *
 * @class Loader
 * @constructor
 * @requires jQuery
 */
function Loader () {
  this.$el = jQuery('.loader');
  this.$title = this.$el.find('.loader__title');
  this.$progress = this.$el.find('.loader__progress');
}

/**
 * Out animation
 *
 * @method out
 */
Loader.prototype.out = function () {
  this.$progress.stop().animate({ width: '100%' }, 1000, function () {
    this.$el.animate({ opacity: 0 }, 1000, function () {
      this.$el.css('display', 'none');
    }.bind(this));

    this.$title.animate({ top: '-10%', opacity: 0 }, 500);
    this.$progress.animate({ height: 0 }, 400);
  }.bind(this));
};

/**
 * Update the percent loaded
 *
 * @method update
 * @param {Number} [percent]
 */
Loader.prototype.update = function () {};

module.exports = Loader;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvb2JqZWN0czJEL0xvYWRlck9iamVjdDJELmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG5cclxuLyoqXHJcbiAqIFByZWxvYWRlclxyXG4gKlxyXG4gKiBAY2xhc3MgTG9hZGVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcmVxdWlyZXMgalF1ZXJ5XHJcbiAqL1xyXG5mdW5jdGlvbiBMb2FkZXIgKCkge1xyXG4gIHRoaXMuJGVsID0galF1ZXJ5KCcubG9hZGVyJyk7XHJcbiAgdGhpcy4kdGl0bGUgPSB0aGlzLiRlbC5maW5kKCcubG9hZGVyX190aXRsZScpO1xyXG4gIHRoaXMuJHByb2dyZXNzID0gdGhpcy4kZWwuZmluZCgnLmxvYWRlcl9fcHJvZ3Jlc3MnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE91dCBhbmltYXRpb25cclxuICpcclxuICogQG1ldGhvZCBvdXRcclxuICovXHJcbkxvYWRlci5wcm90b3R5cGUub3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuJHByb2dyZXNzLnN0b3AoKS5hbmltYXRlKHsgd2lkdGg6ICcxMDAlJyB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRlbC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJGVsLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuJHRpdGxlLmFuaW1hdGUoeyB0b3A6ICctMTAlJywgb3BhY2l0eTogMCB9LCA1MDApO1xyXG4gICAgdGhpcy4kcHJvZ3Jlc3MuYW5pbWF0ZSh7IGhlaWdodDogMCB9LCA0MDApO1xyXG4gIH0uYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlIHRoZSBwZXJjZW50IGxvYWRlZFxyXG4gKlxyXG4gKiBAbWV0aG9kIHVwZGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3BlcmNlbnRdXHJcbiAqL1xyXG5Mb2FkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7Il19
},{}],6:[function(require,module,exports){
(function (global){
/* jshint laxbreak: true */

'use strict';

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

/**
 * Animated wireframe
 *
 * @class Wireframe
 * @constructor
 * @param {jQuery} [$el] DOM element
 * @param {Object} [options]
 * @param {Number} [options.delay] Delay between frames
 * @param {Array} [options.positions] Animated scroll positions
 * @requires jQuery
 */
function Wireframe ($el, options) {
  this.parameters = jQuery.extend({
    delay: 200,
    positions: [-20, -90, -135, -200, -20, 40]
  }, options);

  this.$topLines = $el.find('.wireframe__frame--top');
  this.$bottomLines = $el.find('.wireframe__frame--bottom');
  this.$leftLines = $el.find('.wireframe__frame--left');
  this.$rightLines = $el.find('.wireframe__frame--right');
  this.$leftColumn = $el.find('.wireframe__column--left');
  this.$textLines = $el.find('.wireframe__text__line');
  this.$controlNodes = $el.find('.wireframe__controls__node');

  this.interval = null;
  this.totalPositions = this.parameters.positions.length;
  this.currentPosition = 0;
}

/**
 * In animation
 *
 * @method in
 * @param {Boolean} [out] Out instead of in?
 */
Wireframe.prototype.in = function (out) {
  // targets
  var targetLines;
  var targetTextLines;
  var targetIncompleteTextLines;
  var targetNodes;

  if (out === 0) {
    targetLines = targetTextLines = targetIncompleteTextLines = 0;
    targetNodes = 30;
  } else {
    targetLines = targetTextLines = '100%';
    targetIncompleteTextLines = '60%';
    targetNodes = 0;
  }

  // frames
  var totalFrames = this.$topLines.length;

  var setAnimation = function (index) {
    var $top = jQuery(this.$topLines[index]);
    var $bottom = jQuery(this.$bottomLines[index]);
    var $left = jQuery(this.$leftLines[index]);
    var $right = jQuery(this.$rightLines[index]);

    setTimeout(function () {
      $top.css('width', targetLines);
      $right.css('height', targetLines);
    }, (index * this.parameters.delay) + 400);

    setTimeout(function () {
      $left.css('height', targetLines);
      $bottom.css('width', targetLines);
    }, (index * this.parameters.delay) + 600);
  }.bind(this);

  // set animations for each frame
  for (var i = 0; i < totalFrames; i++) {
    setAnimation(i);
  }

  // text
  var delay = this.parameters.delay;

  this.$textLines.each(function (i) {
    var $line = jQuery(this);

    setTimeout(function () {
      $line.css('width', $line.hasClass('wireframe__text__line--incomplete')
        ? targetIncompleteTextLines
        : targetTextLines);
      
    }, i * delay);
  });

  // control nodes
  this.$controlNodes.each(function (i) {
    var $node = jQuery(this);

    setTimeout(function () {
      $node.css('top', targetNodes);
    }, i * delay);
  });
};

/**
 * Out animation
 *
 * @method out
 */
Wireframe.prototype.out = function () {
  this.$topLines.css('width', 0);
  this.$bottomLines.css('width', 0);
  this.$leftLines.css('height', 0);
  this.$rightLines.css('height', 0);
  this.$textLines.css('width', 0);
  this.$controlNodes.css('top', 30);
};

/**
 * Start animation
 *
 * @method start
 */
Wireframe.prototype.start = function () {
  if (this.interval) {
    return false;
  }

  this.interval = setInterval(function () {
    if (this.currentPosition > this.totalPositions) {
      this.currentPosition = 0;
    }

    this.$leftColumn.css('top', this.parameters.positions[this.currentPosition] + 'px');

    this.currentPosition++;
  }.bind(this), 2000);
};

/**
 * Stop animation
 *
 * @method stop
 */
Wireframe.prototype.stop = function () {
  if (!this.interval) {
    return false;
  }

  window.clearInterval(this.interval);
  this.interval = null;
};

module.exports = Wireframe;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvb2JqZWN0czJEL1dpcmVmcmFtZU9iamVjdDJELmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoganNoaW50IGxheGJyZWFrOiB0cnVlICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKTtcclxuXHJcbi8qKlxyXG4gKiBBbmltYXRlZCB3aXJlZnJhbWVcclxuICpcclxuICogQGNsYXNzIFdpcmVmcmFtZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtqUXVlcnl9IFskZWxdIERPTSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmRlbGF5XSBEZWxheSBiZXR3ZWVuIGZyYW1lc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5wb3NpdGlvbnNdIEFuaW1hdGVkIHNjcm9sbCBwb3NpdGlvbnNcclxuICogQHJlcXVpcmVzIGpRdWVyeVxyXG4gKi9cclxuZnVuY3Rpb24gV2lyZWZyYW1lICgkZWwsIG9wdGlvbnMpIHtcclxuICB0aGlzLnBhcmFtZXRlcnMgPSBqUXVlcnkuZXh0ZW5kKHtcclxuICAgIGRlbGF5OiAyMDAsXHJcbiAgICBwb3NpdGlvbnM6IFstMjAsIC05MCwgLTEzNSwgLTIwMCwgLTIwLCA0MF1cclxuICB9LCBvcHRpb25zKTtcclxuXHJcbiAgdGhpcy4kdG9wTGluZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fZnJhbWUtLXRvcCcpO1xyXG4gIHRoaXMuJGJvdHRvbUxpbmVzID0gJGVsLmZpbmQoJy53aXJlZnJhbWVfX2ZyYW1lLS1ib3R0b20nKTtcclxuICB0aGlzLiRsZWZ0TGluZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fZnJhbWUtLWxlZnQnKTtcclxuICB0aGlzLiRyaWdodExpbmVzID0gJGVsLmZpbmQoJy53aXJlZnJhbWVfX2ZyYW1lLS1yaWdodCcpO1xyXG4gIHRoaXMuJGxlZnRDb2x1bW4gPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fY29sdW1uLS1sZWZ0Jyk7XHJcbiAgdGhpcy4kdGV4dExpbmVzID0gJGVsLmZpbmQoJy53aXJlZnJhbWVfX3RleHRfX2xpbmUnKTtcclxuICB0aGlzLiRjb250cm9sTm9kZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fY29udHJvbHNfX25vZGUnKTtcclxuXHJcbiAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgdGhpcy50b3RhbFBvc2l0aW9ucyA9IHRoaXMucGFyYW1ldGVycy5wb3NpdGlvbnMubGVuZ3RoO1xyXG4gIHRoaXMuY3VycmVudFBvc2l0aW9uID0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluIGFuaW1hdGlvblxyXG4gKlxyXG4gKiBAbWV0aG9kIGluXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW291dF0gT3V0IGluc3RlYWQgb2YgaW4/XHJcbiAqL1xyXG5XaXJlZnJhbWUucHJvdG90eXBlLmluID0gZnVuY3Rpb24gKG91dCkge1xyXG4gIC8vIHRhcmdldHNcclxuICB2YXIgdGFyZ2V0TGluZXM7XHJcbiAgdmFyIHRhcmdldFRleHRMaW5lcztcclxuICB2YXIgdGFyZ2V0SW5jb21wbGV0ZVRleHRMaW5lcztcclxuICB2YXIgdGFyZ2V0Tm9kZXM7XHJcblxyXG4gIGlmIChvdXQgPT09IDApIHtcclxuICAgIHRhcmdldExpbmVzID0gdGFyZ2V0VGV4dExpbmVzID0gdGFyZ2V0SW5jb21wbGV0ZVRleHRMaW5lcyA9IDA7XHJcbiAgICB0YXJnZXROb2RlcyA9IDMwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXRMaW5lcyA9IHRhcmdldFRleHRMaW5lcyA9ICcxMDAlJztcclxuICAgIHRhcmdldEluY29tcGxldGVUZXh0TGluZXMgPSAnNjAlJztcclxuICAgIHRhcmdldE5vZGVzID0gMDtcclxuICB9XHJcblxyXG4gIC8vIGZyYW1lc1xyXG4gIHZhciB0b3RhbEZyYW1lcyA9IHRoaXMuJHRvcExpbmVzLmxlbmd0aDtcclxuXHJcbiAgdmFyIHNldEFuaW1hdGlvbiA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgdmFyICR0b3AgPSBqUXVlcnkodGhpcy4kdG9wTGluZXNbaW5kZXhdKTtcclxuICAgIHZhciAkYm90dG9tID0galF1ZXJ5KHRoaXMuJGJvdHRvbUxpbmVzW2luZGV4XSk7XHJcbiAgICB2YXIgJGxlZnQgPSBqUXVlcnkodGhpcy4kbGVmdExpbmVzW2luZGV4XSk7XHJcbiAgICB2YXIgJHJpZ2h0ID0galF1ZXJ5KHRoaXMuJHJpZ2h0TGluZXNbaW5kZXhdKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJHRvcC5jc3MoJ3dpZHRoJywgdGFyZ2V0TGluZXMpO1xyXG4gICAgICAkcmlnaHQuY3NzKCdoZWlnaHQnLCB0YXJnZXRMaW5lcyk7XHJcbiAgICB9LCAoaW5kZXggKiB0aGlzLnBhcmFtZXRlcnMuZGVsYXkpICsgNDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGxlZnQuY3NzKCdoZWlnaHQnLCB0YXJnZXRMaW5lcyk7XHJcbiAgICAgICRib3R0b20uY3NzKCd3aWR0aCcsIHRhcmdldExpbmVzKTtcclxuICAgIH0sIChpbmRleCAqIHRoaXMucGFyYW1ldGVycy5kZWxheSkgKyA2MDApO1xyXG4gIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgLy8gc2V0IGFuaW1hdGlvbnMgZm9yIGVhY2ggZnJhbWVcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsRnJhbWVzOyBpKyspIHtcclxuICAgIHNldEFuaW1hdGlvbihpKTtcclxuICB9XHJcblxyXG4gIC8vIHRleHRcclxuICB2YXIgZGVsYXkgPSB0aGlzLnBhcmFtZXRlcnMuZGVsYXk7XHJcblxyXG4gIHRoaXMuJHRleHRMaW5lcy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICB2YXIgJGxpbmUgPSBqUXVlcnkodGhpcyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRsaW5lLmNzcygnd2lkdGgnLCAkbGluZS5oYXNDbGFzcygnd2lyZWZyYW1lX190ZXh0X19saW5lLS1pbmNvbXBsZXRlJylcclxuICAgICAgICA/IHRhcmdldEluY29tcGxldGVUZXh0TGluZXNcclxuICAgICAgICA6IHRhcmdldFRleHRMaW5lcyk7XHJcbiAgICAgIFxyXG4gICAgfSwgaSAqIGRlbGF5KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29udHJvbCBub2Rlc1xyXG4gIHRoaXMuJGNvbnRyb2xOb2Rlcy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICB2YXIgJG5vZGUgPSBqUXVlcnkodGhpcyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRub2RlLmNzcygndG9wJywgdGFyZ2V0Tm9kZXMpO1xyXG4gICAgfSwgaSAqIGRlbGF5KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBPdXQgYW5pbWF0aW9uXHJcbiAqXHJcbiAqIEBtZXRob2Qgb3V0XHJcbiAqL1xyXG5XaXJlZnJhbWUucHJvdG90eXBlLm91dCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLiR0b3BMaW5lcy5jc3MoJ3dpZHRoJywgMCk7XHJcbiAgdGhpcy4kYm90dG9tTGluZXMuY3NzKCd3aWR0aCcsIDApO1xyXG4gIHRoaXMuJGxlZnRMaW5lcy5jc3MoJ2hlaWdodCcsIDApO1xyXG4gIHRoaXMuJHJpZ2h0TGluZXMuY3NzKCdoZWlnaHQnLCAwKTtcclxuICB0aGlzLiR0ZXh0TGluZXMuY3NzKCd3aWR0aCcsIDApO1xyXG4gIHRoaXMuJGNvbnRyb2xOb2Rlcy5jc3MoJ3RvcCcsIDMwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTdGFydCBhbmltYXRpb25cclxuICpcclxuICogQG1ldGhvZCBzdGFydFxyXG4gKi9cclxuV2lyZWZyYW1lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvbiA+IHRoaXMudG90YWxQb3NpdGlvbnMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJGxlZnRDb2x1bW4uY3NzKCd0b3AnLCB0aGlzLnBhcmFtZXRlcnMucG9zaXRpb25zW3RoaXMuY3VycmVudFBvc2l0aW9uXSArICdweCcpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uKys7XHJcbiAgfS5iaW5kKHRoaXMpLCAyMDAwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTdG9wIGFuaW1hdGlvblxyXG4gKlxyXG4gKiBAbWV0aG9kIHN0b3BcclxuICovXHJcbldpcmVmcmFtZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaXJlZnJhbWU7Il19
},{}],7:[function(require,module,exports){
(function (global){
'use strict';

var jQuery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

/**
 * Menu
 *
 * @class Menu
 * @constructor
 * @requires jQuery
 */
function Menu () {
  var $el = jQuery('.menu');
  var $button = $el.find('.menu__button');
  var $itemsContainer = $el.find('.menu__items');
  var $items = $el.find('.menu__item');

  var _callback = function () {};
  var timeouts = [];

  function onMouseover () {
    $items.on('click', _callback);

    $itemsContainer.css('display', 'block');

    $el.stop().animate({ left: 0 }, { duration: 400, easing: 'easeOutQuart' });
    $button.stop().animate({ opacity: 0 }, 400);

    $items.each(function (i) {
      var $el = jQuery(this);

      var timeout = window.setTimeout(function () {
        $el.stop().animate({ opacity: 1 }, 400);
      }, i * 200);

      timeouts.push(timeout);
    });

    $el.one('mouseleave', onMouseout);
  }

  function onMouseout () {
    if (timeouts) {
      for (var i = 0, j = timeouts.length; i < j; i++) {
        window.clearTimeout(timeouts[i]);
      }
      timeouts = [];
    }

    $el.stop().animate({ left: 30 }, { duration: 400, easing: 'easeOutQuart' });
    $button.stop().animate({ opacity: 0.5 }, 400);
    $items.stop().animate({ opacity: 0 }, 400, function () {
      $itemsContainer.css('display', 'none');
      $items.off('click', _callback);
    });

    $button.one('mouseover click', onMouseover);
  }

  $button.one('mouseover click', onMouseover);

  return {
    in: function () {
      $el.animate({ top: 0, opacity: 1 }, 500);
    },

    onClick: function (callback) {
      _callback = callback;
    }
  };
}

module.exports = Menu;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zcmMvanMvb2JqZWN0czJEL21lbnVPYmplY3QyRC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG5cclxuLyoqXHJcbiAqIE1lbnVcclxuICpcclxuICogQGNsYXNzIE1lbnVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEByZXF1aXJlcyBqUXVlcnlcclxuICovXHJcbmZ1bmN0aW9uIE1lbnUgKCkge1xyXG4gIHZhciAkZWwgPSBqUXVlcnkoJy5tZW51Jyk7XHJcbiAgdmFyICRidXR0b24gPSAkZWwuZmluZCgnLm1lbnVfX2J1dHRvbicpO1xyXG4gIHZhciAkaXRlbXNDb250YWluZXIgPSAkZWwuZmluZCgnLm1lbnVfX2l0ZW1zJyk7XHJcbiAgdmFyICRpdGVtcyA9ICRlbC5maW5kKCcubWVudV9faXRlbScpO1xyXG5cclxuICB2YXIgX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XHJcbiAgdmFyIHRpbWVvdXRzID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIG9uTW91c2VvdmVyICgpIHtcclxuICAgICRpdGVtcy5vbignY2xpY2snLCBfY2FsbGJhY2spO1xyXG5cclxuICAgICRpdGVtc0NvbnRhaW5lci5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHJcbiAgICAkZWwuc3RvcCgpLmFuaW1hdGUoeyBsZWZ0OiAwIH0sIHsgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnZWFzZU91dFF1YXJ0JyB9KTtcclxuICAgICRidXR0b24uc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDQwMCk7XHJcblxyXG4gICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgICAgdmFyICRlbCA9IGpRdWVyeSh0aGlzKTtcclxuXHJcbiAgICAgIHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRlbC5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgNDAwKTtcclxuICAgICAgfSwgaSAqIDIwMCk7XHJcblxyXG4gICAgICB0aW1lb3V0cy5wdXNoKHRpbWVvdXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGVsLm9uZSgnbW91c2VsZWF2ZScsIG9uTW91c2VvdXQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Nb3VzZW91dCAoKSB7XHJcbiAgICBpZiAodGltZW91dHMpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aW1lb3V0cy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgICB0aW1lb3V0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgICRlbC5zdG9wKCkuYW5pbWF0ZSh7IGxlZnQ6IDMwIH0sIHsgZHVyYXRpb246IDQwMCwgZWFzaW5nOiAnZWFzZU91dFF1YXJ0JyB9KTtcclxuICAgICRidXR0b24uc3RvcCgpLmFuaW1hdGUoeyBvcGFjaXR5OiAwLjUgfSwgNDAwKTtcclxuICAgICRpdGVtcy5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgNDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRpdGVtc0NvbnRhaW5lci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAkaXRlbXMub2ZmKCdjbGljaycsIF9jYWxsYmFjayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkYnV0dG9uLm9uZSgnbW91c2VvdmVyIGNsaWNrJywgb25Nb3VzZW92ZXIpO1xyXG4gIH1cclxuXHJcbiAgJGJ1dHRvbi5vbmUoJ21vdXNlb3ZlciBjbGljaycsIG9uTW91c2VvdmVyKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICRlbC5hbmltYXRlKHsgdG9wOiAwLCBvcGFjaXR5OiAxIH0sIDUwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICBfY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1lbnU7Il19
},{}],8:[function(require,module,exports){
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

'use strict';

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }
 
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
 
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
})();
},{}],9:[function(require,module,exports){
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

'use strict';

(function () {
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs   = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP    = function() {},
          fBound  = function() {
            return fToBind.apply(this instanceof fNOP && oThis
                   ? this
                   : oThis,
                   aArgs.concat(Array.prototype.slice.call(arguments)));
          };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
})();
},{}],10:[function(require,module,exports){
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

'use strict';

(function () {
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement /*, fromIndex */ ) {"use strict";
      if (this == null) {
        throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) {// shortcut for verifying if it's NaN
          n = 0;
        } else if (n != 0 && n != Infinity && n != -Infinity) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if ( k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }
})();
},{}],11:[function(require,module,exports){
'use strict';

/**
 * Debounce a function
 * https://github.com/jashkenas/underscore
 *
 * @method debounce
 * @param {Function} [callback]
 * @param {Number} [delay]
 * @param {Boolean} [immediate]
 * @return {Function}
 */
function debounce (callback, delay, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    var callLater = function () {
      timeout = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(callLater, delay);
    if (callNow) {
      callback.apply(context, args);
    }
  };
}

module.exports = debounce; 
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImFwcFxcc3JjXFxqc1xcbWFpbjJELmpzIiwiYXBwXFxzcmNcXGpzXFxjbGFzc2VzXFxMb2FkZXJDbGFzcy5qcyIsImFwcFxcc3JjXFxqc1xcbGlic1xcd2F5cG9pbnRMaWIuanMiLCJhcHBcXHNyY1xcanNcXG1vZHVsZXNcXGhhc2hNb2R1bGUuanMiLCJhcHBcXHNyY1xcanNcXG9iamVjdHMyRFxcTG9hZGVyT2JqZWN0MkQuanMiLCJhcHBcXHNyY1xcanNcXG9iamVjdHMyRFxcV2lyZWZyYW1lT2JqZWN0MkQuanMiLCJhcHBcXHNyY1xcanNcXG9iamVjdHMyRFxcbWVudU9iamVjdDJELmpzIiwiYXBwXFxzcmNcXGpzXFxwb2x5ZmlsbHNcXGFuaW1GcmFtZVBvbHlmaWxsLmpzIiwiYXBwXFxzcmNcXGpzXFxwb2x5ZmlsbHNcXGJpbmRQb2x5ZmlsbC5qcyIsImFwcFxcc3JjXFxqc1xccG9seWZpbGxzXFxpbmRleE9mUG9seWZpbGwuanMiLCJhcHBcXHNyY1xcanNcXHV0aWxzXFxkZWJvdW5jZVV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoganNoaW50IGxheGJyZWFrOiB0cnVlICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5yZXF1aXJlKCcuL3BvbHlmaWxscy9hbmltRnJhbWVQb2x5ZmlsbCcpO1xyXG5yZXF1aXJlKCcuL3BvbHlmaWxscy9iaW5kUG9seWZpbGwnKTtcclxucmVxdWlyZSgnLi9wb2x5ZmlsbHMvaW5kZXhPZlBvbHlmaWxsJyk7XHJcblxyXG52YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKTtcclxudmFyIHNrcm9sbHIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snc2tyb2xsciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnc2tyb2xsciddIDogbnVsbCk7XHJcbnJlcXVpcmUoJy4vbGlicy93YXlwb2ludExpYicpO1xyXG4gIFxyXG52YXIgSEFTSCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9oYXNoTW9kdWxlJyk7XHJcblxyXG52YXIgSW1hZ2VzTG9hZGVyID0gcmVxdWlyZSgnLi9jbGFzc2VzL0xvYWRlckNsYXNzJyk7XHJcblxyXG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9vYmplY3RzMkQvTG9hZGVyT2JqZWN0MkQnKTtcclxudmFyIE1lbnUgPSByZXF1aXJlKCcuL29iamVjdHMyRC9tZW51T2JqZWN0MkQnKTtcclxudmFyIFdpcmVmcmFtZSA9IHJlcXVpcmUoJy4vb2JqZWN0czJEL1dpcmVmcmFtZU9iamVjdDJEJyk7XHJcblxyXG5mdW5jdGlvbiBtb2JpbGUgKCkge1xyXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKVxyXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXHJcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpO1xyXG59XHJcblxyXG5qUXVlcnkoZnVuY3Rpb24gKCkge1xyXG4gIEhBU0gucmVwbGFjZVBsYWNlaG9sZGVycygpO1xyXG5cclxuICB2YXIgbG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG4gIHZhciBtZW51ID0gbmV3IE1lbnUoKTtcclxuICB2YXIgaW1hZ2VzTG9hZGVyID0gbmV3IEltYWdlc0xvYWRlcihbXHJcbiAgICAnLi9hcHAvcHVibGljL2ltZy9wYXJ0LWJlYW0ucG5nJyxcclxuICAgICcuL2FwcC9wdWJsaWMvaW1nL3BhcnQtZHJvcC5wbmcnLFxyXG4gICAgJy4vYXBwL3B1YmxpYy9pbWcvcGFydC1zcGhlcmUucG5nJyxcclxuICAgICcuL2FwcC9wdWJsaWMvaW1nL3BhcnQtZ3JpZC5wbmcnLFxyXG4gICAgJy4vYXBwL3B1YmxpYy9pbWcvcGFydC1maWVsZC5wbmcnLFxyXG4gICAgJy4vYXBwL3B1YmxpYy9pbWcvcGFydC1zdGFycy5wbmcnXHJcbiAgXSk7XHJcblxyXG4gIGltYWdlc0xvYWRlci5vblByb2dyZXNzKGZ1bmN0aW9uIChwZXJjZW50KSB7XHJcbiAgICBsb2FkZXIudXBkYXRlKHBlcmNlbnQpO1xyXG4gIH0pO1xyXG5cclxuICBpbWFnZXNMb2FkZXIuc3RhcnQoKTtcclxuXHJcbiAgLy8gaGVhZHNcclxuICBza3JvbGxyLmluaXQoeyBza3JvbGxyQm9keTogJ21vYmlsZS1ib2R5JyB9KTtcclxuXHJcbiAgLy8gdGFpbHNcclxuICB2YXIgd2lyZWZyYW1lID0gbmV3IFdpcmVmcmFtZShqUXVlcnkoJy53aXJlZnJhbWUnKSk7XHJcblxyXG4gIGlmICghbW9iaWxlKCkpIHtcclxuICAgIHZhciAkdGFpbHMgPSBqUXVlcnkoJy50YWlscycpO1xyXG4gICAgdmFyICR0YWlsc1NlY3Rpb25zID0gJHRhaWxzLmZpbmQoJy50YWlsc19fc2VjdGlvbicpO1xyXG5cclxuICAgIC8vIHByZXBhcmUgZWxzXHJcbiAgICAkdGFpbHNTZWN0aW9ucy5maW5kKCcudGFpbHNfX3NlY3Rpb25fX2VsJykuYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIHk6IDEwMCB9LCAwKTtcclxuXHJcbiAgICB2YXIgd2F5cG9pbnQgPSAkdGFpbHNTZWN0aW9ucy53YXlwb2ludCh7XHJcbiAgICAgIG9mZnNldDogMzAsXHJcbiAgICAgIHN0YXJ0QXQ6ICR0YWlscy5vZmZzZXQoKS50b3AgLSAxMDAwXHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXlwb2ludC5zdGFydCgpO1xyXG5cclxuICAgICR0YWlsc1NlY3Rpb25zLm9uKCdhY3RpdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkZWwgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoJGVsLmF0dHIoJ2RhdGEtYXBwZWFyZWQnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy50YWlsc19fc2VjdGlvbl9fZWwnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLnN0b3AoKS5kZWxheShpICogMTAwKS5hbmltYXRlKHsgb3BhY2l0eTogMSwgeTogMCB9LCA1MDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLWFwcGVhcmVkJywgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoJy50YWlsc19fc2VjdGlvbi0tc2l0ZScpLm9uKCdzdGF0ZUNoYW5nZScsIGZ1bmN0aW9uIChlLCBzdGF0ZSkge1xyXG4gICAgICBpZiAoc3RhdGUgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgd2lyZWZyYW1lLnN0YXJ0KCk7XHJcbiAgICAgICAgd2lyZWZyYW1lLmluKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2lyZWZyYW1lLnN0b3AoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdpcmVmcmFtZS5pbigpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzTG9hZGVyLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgbG9hZGVyLm91dCgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBtZW51LmluKCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9KTtcclxufSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzl6Y21NdmFuTXZiV0ZwYmpKRUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lCcWMyaHBiblFnYkdGNFluSmxZV3M2SUhSeWRXVWdLaTljY2x4dVhISmNiaWQxYzJVZ2MzUnlhV04wSnp0Y2NseHVYSEpjYm5KbGNYVnBjbVVvSnk0dmNHOXNlV1pwYkd4ekwyRnVhVzFHY21GdFpWQnZiSGxtYVd4c0p5azdYSEpjYm5KbGNYVnBjbVVvSnk0dmNHOXNlV1pwYkd4ekwySnBibVJRYjJ4NVptbHNiQ2NwTzF4eVhHNXlaWEYxYVhKbEtDY3VMM0J2YkhsbWFXeHNjeTlwYm1SbGVFOW1VRzlzZVdacGJHd25LVHRjY2x4dVhISmNiblpoY2lCcVVYVmxjbmtnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuYWxGMVpYSjVKMTBnT2lCMGVYQmxiMllnWjJ4dlltRnNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWjJ4dlltRnNXeWRxVVhWbGNua25YU0E2SUc1MWJHd3BPMXh5WEc1MllYSWdjMnR5YjJ4c2NpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdkMmx1Wkc5M1d5ZHphM0p2Ykd4eUoxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5ZHphM0p2Ykd4eUoxMGdPaUJ1ZFd4c0tUdGNjbHh1Y21WeGRXbHlaU2duTGk5c2FXSnpMM2RoZVhCdmFXNTBUR2xpSnlrN1hISmNiaUFnWEhKY2JuWmhjaUJJUVZOSUlEMGdjbVZ4ZFdseVpTZ25MaTl0YjJSMWJHVnpMMmhoYzJoTmIyUjFiR1VuS1R0Y2NseHVYSEpjYm5aaGNpQkpiV0ZuWlhOTWIyRmtaWElnUFNCeVpYRjFhWEpsS0NjdUwyTnNZWE56WlhNdlRHOWhaR1Z5UTJ4aGMzTW5LVHRjY2x4dVhISmNiblpoY2lCTWIyRmtaWElnUFNCeVpYRjFhWEpsS0NjdUwyOWlhbVZqZEhNeVJDOU1iMkZrWlhKUFltcGxZM1F5UkNjcE8xeHlYRzUyWVhJZ1RXVnVkU0E5SUhKbGNYVnBjbVVvSnk0dmIySnFaV04wY3pKRUwyMWxiblZQWW1wbFkzUXlSQ2NwTzF4eVhHNTJZWElnVjJseVpXWnlZVzFsSUQwZ2NtVnhkV2x5WlNnbkxpOXZZbXBsWTNSek1rUXZWMmx5WldaeVlXMWxUMkpxWldOME1rUW5LVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJRzF2WW1sc1pTQW9LU0I3WEhKY2JpQWdjbVYwZFhKdUlHNWhkbWxuWVhSdmNpNTFjMlZ5UVdkbGJuUXViV0YwWTJnb0wwRnVaSEp2YVdRdmFTbGNjbHh1SUNBZ0lIeDhJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YldGMFkyZ29MM2RsWWs5VEwya3BYSEpjYmlBZ0lDQjhmQ0J1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG0xaGRHTm9LQzlwVUdodmJtVXZhU2xjY2x4dUlDQWdJSHg4SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWJXRjBZMmdvTDJsUVlXUXZhU2xjY2x4dUlDQWdJSHg4SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWJXRjBZMmdvTDJsUWIyUXZhU2xjY2x4dUlDQWdJSHg4SUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWJXRjBZMmdvTDBKc1lXTnJRbVZ5Y25rdmFTbGNjbHh1SUNBZ0lIeDhJRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1YldGMFkyZ29MMWRwYm1SdmQzTWdVR2h2Ym1VdmFTazdYSEpjYm4xY2NseHVYSEpjYm1wUmRXVnllU2htZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnU0VGVFNDNXlaWEJzWVdObFVHeGhZMlZvYjJ4a1pYSnpLQ2s3WEhKY2JseHlYRzRnSUhaaGNpQnNiMkZrWlhJZ1BTQnVaWGNnVEc5aFpHVnlLQ2s3WEhKY2JpQWdkbUZ5SUcxbGJuVWdQU0J1WlhjZ1RXVnVkU2dwTzF4eVhHNGdJSFpoY2lCcGJXRm5aWE5NYjJGa1pYSWdQU0J1WlhjZ1NXMWhaMlZ6VEc5aFpHVnlLRnRjY2x4dUlDQWdJQ2N1TDJGd2NDOXdkV0pzYVdNdmFXMW5MM0JoY25RdFltVmhiUzV3Ym1jbkxGeHlYRzRnSUNBZ0p5NHZZWEJ3TDNCMVlteHBZeTlwYldjdmNHRnlkQzFrY205d0xuQnVaeWNzWEhKY2JpQWdJQ0FuTGk5aGNIQXZjSFZpYkdsakwybHRaeTl3WVhKMExYTndhR1Z5WlM1d2JtY25MRnh5WEc0Z0lDQWdKeTR2WVhCd0wzQjFZbXhwWXk5cGJXY3ZjR0Z5ZEMxbmNtbGtMbkJ1Wnljc1hISmNiaUFnSUNBbkxpOWhjSEF2Y0hWaWJHbGpMMmx0Wnk5d1lYSjBMV1pwWld4a0xuQnVaeWNzWEhKY2JpQWdJQ0FuTGk5aGNIQXZjSFZpYkdsakwybHRaeTl3WVhKMExYTjBZWEp6TG5CdVp5ZGNjbHh1SUNCZEtUdGNjbHh1WEhKY2JpQWdhVzFoWjJWelRHOWhaR1Z5TG05dVVISnZaM0psYzNNb1puVnVZM1JwYjI0Z0tIQmxjbU5sYm5RcElIdGNjbHh1SUNBZ0lHeHZZV1JsY2k1MWNHUmhkR1VvY0dWeVkyVnVkQ2s3WEhKY2JpQWdmU2s3WEhKY2JseHlYRzRnSUdsdFlXZGxjMHh2WVdSbGNpNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQXZMeUJvWldGa2MxeHlYRzRnSUhOcmNtOXNiSEl1YVc1cGRDaDdJSE5yY205c2JISkNiMlI1T2lBbmJXOWlhV3hsTFdKdlpIa25JSDBwTzF4eVhHNWNjbHh1SUNBdkx5QjBZV2xzYzF4eVhHNGdJSFpoY2lCM2FYSmxabkpoYldVZ1BTQnVaWGNnVjJseVpXWnlZVzFsS0dwUmRXVnllU2duTG5kcGNtVm1jbUZ0WlNjcEtUdGNjbHh1WEhKY2JpQWdhV1lnS0NGdGIySnBiR1VvS1NrZ2UxeHlYRzRnSUNBZ2RtRnlJQ1IwWVdsc2N5QTlJR3BSZFdWeWVTZ25MblJoYVd4ekp5azdYSEpjYmlBZ0lDQjJZWElnSkhSaGFXeHpVMlZqZEdsdmJuTWdQU0FrZEdGcGJITXVabWx1WkNnbkxuUmhhV3h6WDE5elpXTjBhVzl1SnlrN1hISmNibHh5WEc0Z0lDQWdMeThnY0hKbGNHRnlaU0JsYkhOY2NseHVJQ0FnSUNSMFlXbHNjMU5sWTNScGIyNXpMbVpwYm1Rb0p5NTBZV2xzYzE5ZmMyVmpkR2x2Ymw5ZlpXd25LUzVoYm1sdFlYUmxLSHNnYjNCaFkybDBlVG9nTUN3Z2VUb2dNVEF3SUgwc0lEQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQjNZWGx3YjJsdWRDQTlJQ1IwWVdsc2MxTmxZM1JwYjI1ekxuZGhlWEJ2YVc1MEtIdGNjbHh1SUNBZ0lDQWdiMlptYzJWME9pQXpNQ3hjY2x4dUlDQWdJQ0FnYzNSaGNuUkJkRG9nSkhSaGFXeHpMbTltWm5ObGRDZ3BMblJ2Y0NBdElERXdNREJjY2x4dUlDQWdJSDBwTzF4eVhHNWNjbHh1SUNBZ0lIZGhlWEJ2YVc1MExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdKSFJoYVd4elUyVmpkR2x2Ym5NdWIyNG9KMkZqZEdsMlpTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ2RtRnlJQ1JsYkNBOUlHcFJkV1Z5ZVNoMGFHbHpLVHRjY2x4dUlDQWdJQ0FnWEhKY2JpQWdJQ0FnSUdsbUlDZ2taV3d1WVhSMGNpZ25aR0YwWVMxaGNIQmxZWEpsWkNjcEtTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCcVVYVmxjbmtvZEdocGN5a3VabWx1WkNnbkxuUmhhV3h6WDE5elpXTjBhVzl1WDE5bGJDY3BMbVZoWTJnb1puVnVZM1JwYjI0Z0tHa3BJSHRjY2x4dUlDQWdJQ0FnSUNCcVVYVmxjbmtvZEdocGN5a3VjM1J2Y0NncExtUmxiR0Y1S0drZ0tpQXhNREFwTG1GdWFXMWhkR1VvZXlCdmNHRmphWFI1T2lBeExDQjVPaUF3SUgwc0lEVXdNQ2s3WEhKY2JpQWdJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSkdWc0xtRjBkSElvSjJSaGRHRXRZWEJ3WldGeVpXUW5MQ0IwY25WbEtUdGNjbHh1SUNBZ0lIMHBPMXh5WEc1Y2NseHVJQ0FnSUdwUmRXVnllU2duTG5SaGFXeHpYMTl6WldOMGFXOXVMUzF6YVhSbEp5a3ViMjRvSjNOMFlYUmxRMmhoYm1kbEp5d2dablZ1WTNScGIyNGdLR1VzSUhOMFlYUmxLU0I3WEhKY2JpQWdJQ0FnSUdsbUlDaHpkR0YwWlNBOVBUMGdKMkZqZEdsMlpTY3BJSHRjY2x4dUlDQWdJQ0FnSUNCM2FYSmxabkpoYldVdWMzUmhjblFvS1R0Y2NseHVJQ0FnSUNBZ0lDQjNhWEpsWm5KaGJXVXVhVzRvS1R0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQjNhWEpsWm5KaGJXVXVjM1J2Y0NncE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlLVHRjY2x4dUlDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ2QybHlaV1p5WVcxbExtbHVLQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0JwYldGblpYTk1iMkZrWlhJdWIyNURiMjF3YkdWMFpTaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0JzYjJGa1pYSXViM1YwS0NrN1hISmNibHh5WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lHMWxiblV1YVc0b0tUdGNjbHh1SUNBZ0lIMHNJREUxTURBcE8xeHlYRzRnSUgwcE8xeHlYRzU5S1RzaVhYMD0iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogUHJlbG9hZCBpbWFnZXMuIE5vdGlmeSBvbiB1cGRhdGUvY29tcGxldGVcclxuICpcclxuICogQGNsYXNzIEltYWdlc0xvYWRlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtBcnJheX0gW2ltYWdlcz1bXV0gSW1hZ2VzIHNvdXJjZXNcclxuICovXHJcbmZ1bmN0aW9uIEltYWdlc0xvYWRlciAoaW1hZ2VzKSB7XHJcbiAgdGhpcy5pbWFnZXMgPSBpbWFnZXMgfHwgW107XHJcbiAgdGhpcy50b3RhbCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcclxuXHJcbiAgdmFyIGZuID0gZnVuY3Rpb24gKCkge307XHJcbiAgdGhpcy5wcm9ncmVzcyA9IGZuO1xyXG4gIHRoaXMuY29tcGxldGUgPSBmbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0YXJ0IHRvIHByZWxvYWRcclxuICpcclxuICogQG1ldGhvZCBzdGFydFxyXG4gKi9cclxuSW1hZ2VzTG9hZGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbG9hZGVkID0gMDtcclxuXHJcbiAgdmFyIHVwZGF0ZVF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbG9hZGVkKys7XHJcblxyXG4gICAgdmFyIHBlcmNlbnQgPSAobG9hZGVkICogMTAwKSAvIHRoaXMudG90YWw7XHJcbiAgICB0aGlzLnByb2dyZXNzKHBlcmNlbnQpO1xyXG5cclxuICAgIGlmIChsb2FkZWQgPT09IHRoaXMudG90YWwpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvdGFsOyBpKyspIHtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5pbWFnZXNbaV07XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBpbWFnZS5vbmVycm9yID0gdXBkYXRlUXVldWU7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhc3MgdGhlIHVwZGF0ZSBoYW5kbGVyXHJcbiAqXHJcbiAqIEBtZXRob2Qgb25Qcm9ncmVzc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvZ3Jlc3NdIFxyXG4gKi9cclxuSW1hZ2VzTG9hZGVyLnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XHJcbiAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhc3MgdGhlIGNvbXBsZXRlIGhhbmRsZXJcclxuICpcclxuICogQG1ldGhvZCBvbkNvbXBsZXRlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wbGV0ZV0gXHJcbiAqL1xyXG5JbWFnZXNMb2FkZXIucHJvdG90eXBlLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoY29tcGxldGUpIHtcclxuICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc0xvYWRlcjsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKiBqc2hpbnQgbGF4YnJlYWs6IHRydWUgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG5cclxudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi4vdXRpbHMvZGVib3VuY2VVdGlsJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoJCkge1xyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgZXZlbnQgb24gZWxlbWVudCB3aGVuIHRoZXkgZW50ZXIvbGVhdmUgdmlld3BvcnRcclxuICAgKlxyXG4gICAqIEBjbGFzcyB3YXlwb2ludFxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuJHZpZXdwb3J0PWpRdWVyeSh3aW5kb3cpXSBWaWV3cG9ydFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5vZmZzZXQ9MF0gT2Zmc2V0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnN0YXJ0QXQ9bnVsbF0gU3RhcnQgYWZ0ZXIgY2VydGFpbiBkaXN0YW5jZSAoZm9yIHBlcmZvcm1hbmNlcylcclxuICAgKiBAcmVxdWlyZXMgalF1ZXJ5LCBkZWJvdW5jZVxyXG4gICAqL1xyXG4gICQuZm4ud2F5cG9pbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIGlzSW5Db250YWluZXIgPSBvcHRpb25zLiR2aWV3cG9ydCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICB2YXIgcGFyYW1ldGVycyA9ICQuZXh0ZW5kKHtcclxuICAgICAgJHZpZXdwb3J0OiAkKHdpbmRvdyksXHJcbiAgICAgIG9mZnNldDogMCxcclxuICAgICAgc3RhcnRBdDogbnVsbFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyICRlbHMgPSAkKHRoaXMpO1xyXG4gICAgdmFyICR2aWV3cG9ydCA9IHBhcmFtZXRlcnMuJHZpZXdwb3J0O1xyXG5cclxuICAgIHZhciB2aWV3cG9ydEhlaWdodCA9ICR2aWV3cG9ydC5oZWlnaHQoKTtcclxuICAgIHZhciBzY3JvbGxUb3AgPSAkdmlld3BvcnQuc2Nyb2xsVG9wKCk7XHJcbiAgICB2YXIgdGhyZXNob2xkID0gdmlld3BvcnRIZWlnaHQgKiAocGFyYW1ldGVycy5vZmZzZXQgLyAxMDApO1xyXG5cclxuICAgIC8vIFN0b3JlIGhlaWdodCBhbmQgdG9wIG9uIGVsZW1lbnRzIHRvIGF2b2lkIGNvbnNlY3V0aXZlIGNvbXB1dGF0aW9uc1xyXG4gICAgZnVuY3Rpb24gY2FjaGVBdHRyaWJ1dGVzICgpIHtcclxuICAgICAgJGVscy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KCRlbC5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICB2YXIgdG9wID0gaXNJbkNvbnRhaW5lclxyXG4gICAgICAgICAgPyBwYXJzZUludCgkZWwucG9zaXRpb24oKS50b3ApICsgc2Nyb2xsVG9wXHJcbiAgICAgICAgICA6IHBhcnNlSW50KCRlbC5vZmZzZXQoKS50b3ApO1xyXG5cclxuICAgICAgICAkZWwuYXR0cih7ICdkYXRhLWhlaWdodCc6IGhlaWdodCwgJ2RhdGEtdG9wJzogdG9wIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoKSB7XHJcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG5cclxuICAgICAgdmlld3BvcnRIZWlnaHQgPSAkdmlld3BvcnQuaGVpZ2h0KCk7XHJcbiAgICAgIHRocmVzaG9sZCA9IHZpZXdwb3J0SGVpZ2h0ICogKHBhcmFtZXRlcnMub2Zmc2V0IC8gMTAwKTtcclxuXHJcbiAgICAgIGNhY2hlQXR0cmlidXRlcygpO1xyXG5cclxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzY3JvbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb25TY3JvbGwgPSBkZWJvdW5jZShmdW5jdGlvbiBvblNjcm9sbCAoKSB7XHJcbiAgICAgIHNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAocGFyYW1ldGVycy5zdGFydEF0ICYmIHNjcm9sbFRvcCA8IHBhcmFtZXRlcnMuc3RhcnRBdCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHRvcExpbWl0ID0gc2Nyb2xsVG9wICsgdGhyZXNob2xkO1xyXG4gICAgICB2YXIgYm90dG9tTGltaXQgPSBzY3JvbGxUb3AgKyAodmlld3BvcnRIZWlnaHQgLSB0aHJlc2hvbGQpO1xyXG5cclxuICAgICAgJGVscy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXRlID0gJGVsLmF0dHIoJ2RhdGEtc3RhdGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KCRlbC5hdHRyKCdkYXRhLWhlaWdodCcpKSB8fCAkZWwub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICB2YXIgdG9wID0gaXNJbkNvbnRhaW5lclxyXG4gICAgICAgICAgPyBwYXJzZUludCgkZWwuYXR0cignZGF0YS10b3AnKSkgKyAxIHx8ICRlbC5wb3NpdGlvbigpLnRvcCArIDFcclxuICAgICAgICAgIDogcGFyc2VJbnQoJGVsLmF0dHIoJ2RhdGEtdG9wJykpICsgMSB8fCAkZWwub2Zmc2V0KCkudG9wICsgMTtcclxuICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAodG9wID4gdG9wTGltaXQgJiYgdG9wIDwgYm90dG9tTGltaXRcclxuICAgICAgICAgICAgfHwgYm90dG9tID4gdG9wTGltaXQgJiYgYm90dG9tIDwgYm90dG9tTGltaXRcclxuICAgICAgICAgICAgfHwgdG9wIDwgdG9wTGltaXQgJiYgYm90dG9tID4gYm90dG9tTGltaXQpIHtcclxuXHJcbiAgICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICRlbC5hdHRyKCdkYXRhLXN0YXRlJywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgJGVsLnRyaWdnZXIoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkZWwudHJpZ2dlcignc3RhdGVDaGFuZ2UnLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAkZWwuYXR0cignZGF0YS1zdGF0ZScsIG51bGwpO1xyXG4gICAgICAgICAgICAkZWwudHJpZ2dlcignaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgJGVsLnRyaWdnZXIoJ3N0YXRlQ2hhbmdlJywgJ2luYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9LCAyMCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFN0YXJ0IHdheXBvaW50XHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBtZXRob2Qgc3RhcnRcclxuICAgICAgICovXHJcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgICAgJHZpZXdwb3J0Lm9uKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgY2FjaGVBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgb25TY3JvbGwoKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTdG9wIHdheXBvaW50XHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBtZXRob2Qgc3RvcFxyXG4gICAgICAgKi9cclxuICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICAkdmlld3BvcnQub2ZmKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbn0pKGpRdWVyeSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzl6Y21NdmFuTXZiR2xpY3k5M1lYbHdiMmx1ZEV4cFlpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b2dhbk5vYVc1MElHeGhlR0p5WldGck9pQjBjblZsSUNvdlhISmNibHh5WEc0bmRYTmxJSE4wY21samRDYzdYSEpjYmx4eVhHNTJZWElnYWxGMVpYSjVJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKMnBSZFdWeWVTZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25hbEYxWlhKNUoxMGdPaUJ1ZFd4c0tUdGNjbHh1WEhKY2JuWmhjaUJrWldKdmRXNWpaU0E5SUhKbGNYVnBjbVVvSnk0dUwzVjBhV3h6TDJSbFltOTFibU5sVlhScGJDY3BPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQW9ablZ1WTNScGIyNGdLQ1FwSUh0Y2NseHVJQ0F2S2lwY2NseHVJQ0FnS2lCVWNtbG5aMlZ5SUdWMlpXNTBJRzl1SUdWc1pXMWxiblFnZDJobGJpQjBhR1Y1SUdWdWRHVnlMMnhsWVhabElIWnBaWGR3YjNKMFhISmNiaUFnSUNwY2NseHVJQ0FnS2lCQVkyeGhjM01nZDJGNWNHOXBiblJjY2x4dUlDQWdLaUJBWTI5dWMzUnlkV04wYjNKY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzI5d2RHbHZibk5kWEhKY2JpQWdJQ29nUUhCaGNtRnRJSHRxVVhWbGNubDlJRnR2Y0hScGIyNXpMaVIyYVdWM2NHOXlkRDFxVVhWbGNua29kMmx1Wkc5M0tWMGdWbWxsZDNCdmNuUmNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UwNTFiV0psY24wZ1cyOXdkR2x2Ym5NdWIyWm1jMlYwUFRCZElFOW1abk5sZEZ4eVhHNGdJQ0FxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0JiYjNCMGFXOXVjeTV6ZEdGeWRFRjBQVzUxYkd4ZElGTjBZWEowSUdGbWRHVnlJR05sY25SaGFXNGdaR2x6ZEdGdVkyVWdLR1p2Y2lCd1pYSm1iM0p0WVc1alpYTXBYSEpjYmlBZ0lDb2dRSEpsY1hWcGNtVnpJR3BSZFdWeWVTd2daR1ZpYjNWdVkyVmNjbHh1SUNBZ0tpOWNjbHh1SUNBa0xtWnVMbmRoZVhCdmFXNTBJRDBnWm5WdVkzUnBiMjRnS0c5d2RHbHZibk1wSUh0Y2NseHVJQ0FnSUhaaGNpQnBjMGx1UTI5dWRHRnBibVZ5SUQwZ2IzQjBhVzl1Y3k0a2RtbGxkM0J2Y25RZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSEJoY21GdFpYUmxjbk1nUFNBa0xtVjRkR1Z1WkNoN1hISmNiaUFnSUNBZ0lDUjJhV1YzY0c5eWREb2dKQ2gzYVc1a2IzY3BMRnh5WEc0Z0lDQWdJQ0J2Wm1aelpYUTZJREFzWEhKY2JpQWdJQ0FnSUhOMFlYSjBRWFE2SUc1MWJHeGNjbHh1SUNBZ0lIMHNJRzl3ZEdsdmJuTXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQWtaV3h6SUQwZ0pDaDBhR2x6S1R0Y2NseHVJQ0FnSUhaaGNpQWtkbWxsZDNCdmNuUWdQU0J3WVhKaGJXVjBaWEp6TGlSMmFXVjNjRzl5ZER0Y2NseHVYSEpjYmlBZ0lDQjJZWElnZG1sbGQzQnZjblJJWldsbmFIUWdQU0FrZG1sbGQzQnZjblF1YUdWcFoyaDBLQ2s3WEhKY2JpQWdJQ0IyWVhJZ2MyTnliMnhzVkc5d0lEMGdKSFpwWlhkd2IzSjBMbk5qY205c2JGUnZjQ2dwTzF4eVhHNGdJQ0FnZG1GeUlIUm9jbVZ6YUc5c1pDQTlJSFpwWlhkd2IzSjBTR1ZwWjJoMElDb2dLSEJoY21GdFpYUmxjbk11YjJabWMyVjBJQzhnTVRBd0tUdGNjbHh1WEhKY2JpQWdJQ0F2THlCVGRHOXlaU0JvWldsbmFIUWdZVzVrSUhSdmNDQnZiaUJsYkdWdFpXNTBjeUIwYnlCaGRtOXBaQ0JqYjI1elpXTjFkR2wyWlNCamIyMXdkWFJoZEdsdmJuTmNjbHh1SUNBZ0lHWjFibU4wYVc5dUlHTmhZMmhsUVhSMGNtbGlkWFJsY3lBb0tTQjdYSEpjYmlBZ0lDQWdJQ1JsYkhNdVpXRmphQ2htZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUNSbGJDQTlJQ1FvZEdocGN5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJvWldsbmFIUWdQU0J3WVhKelpVbHVkQ2drWld3dWIzVjBaWEpJWldsbmFIUW9LU2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFJ2Y0NBOUlHbHpTVzVEYjI1MFlXbHVaWEpjY2x4dUlDQWdJQ0FnSUNBZ0lEOGdjR0Z5YzJWSmJuUW9KR1ZzTG5CdmMybDBhVzl1S0NrdWRHOXdLU0FySUhOamNtOXNiRlJ2Y0Z4eVhHNGdJQ0FnSUNBZ0lDQWdPaUJ3WVhKelpVbHVkQ2drWld3dWIyWm1jMlYwS0NrdWRHOXdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdKR1ZzTG1GMGRISW9leUFuWkdGMFlTMW9aV2xuYUhRbk9pQm9aV2xuYUhRc0lDZGtZWFJoTFhSdmNDYzZJSFJ2Y0NCOUtUdGNjbHh1SUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1puVnVZM1JwYjI0Z2IyNVNaWE5wZW1VZ0tDa2dlMXh5WEc0Z0lDQWdJQ0F2S21wemFHbHVkQ0IyWVd4cFpIUm9hWE02SUhSeWRXVWdLaTljY2x4dVhISmNiaUFnSUNBZ0lIWnBaWGR3YjNKMFNHVnBaMmgwSUQwZ0pIWnBaWGR3YjNKMExtaGxhV2RvZENncE8xeHlYRzRnSUNBZ0lDQjBhSEpsYzJodmJHUWdQU0IyYVdWM2NHOXlkRWhsYVdkb2RDQXFJQ2h3WVhKaGJXVjBaWEp6TG05bVpuTmxkQ0F2SURFd01DazdYSEpjYmx4eVhHNGdJQ0FnSUNCallXTm9aVUYwZEhKcFluVjBaWE1vS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ1FvZEdocGN5a3VkSEpwWjJkbGNpZ25jMk55YjJ4c0p5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHOXVVMk55YjJ4c0lEMGdaR1ZpYjNWdVkyVW9ablZ1WTNScGIyNGdiMjVUWTNKdmJHd2dLQ2tnZTF4eVhHNGdJQ0FnSUNCelkzSnZiR3hVYjNBZ1BTQWtLSFJvYVhNcExuTmpjbTlzYkZSdmNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ2FXWWdLSEJoY21GdFpYUmxjbk11YzNSaGNuUkJkQ0FtSmlCelkzSnZiR3hVYjNBZ1BDQndZWEpoYldWMFpYSnpMbk4wWVhKMFFYUXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYSEpjYmlBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lIWmhjaUIwYjNCTWFXMXBkQ0E5SUhOamNtOXNiRlJ2Y0NBcklIUm9jbVZ6YUc5c1pEdGNjbHh1SUNBZ0lDQWdkbUZ5SUdKdmRIUnZiVXhwYldsMElEMGdjMk55YjJ4c1ZHOXdJQ3NnS0hacFpYZHdiM0owU0dWcFoyaDBJQzBnZEdoeVpYTm9iMnhrS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ1JsYkhNdVpXRmphQ2htZFc1amRHbHZiaUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUNSbGJDQTlJQ1FvZEdocGN5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZEdGMFpTQTlJQ1JsYkM1aGRIUnlLQ2RrWVhSaExYTjBZWFJsSnlrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQm9aV2xuYUhRZ1BTQndZWEp6WlVsdWRDZ2taV3d1WVhSMGNpZ25aR0YwWVMxb1pXbG5hSFFuS1NrZ2ZId2dKR1ZzTG05MWRHVnlTR1ZwWjJoMEtDazdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIUnZjQ0E5SUdselNXNURiMjUwWVdsdVpYSmNjbHh1SUNBZ0lDQWdJQ0FnSUQ4Z2NHRnljMlZKYm5Rb0pHVnNMbUYwZEhJb0oyUmhkR0V0ZEc5d0p5a3BJQ3NnTVNCOGZDQWtaV3d1Y0c5emFYUnBiMjRvS1M1MGIzQWdLeUF4WEhKY2JpQWdJQ0FnSUNBZ0lDQTZJSEJoY25ObFNXNTBLQ1JsYkM1aGRIUnlLQ2RrWVhSaExYUnZjQ2NwS1NBcklERWdmSHdnSkdWc0xtOW1abk5sZENncExuUnZjQ0FySURFN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdKdmRIUnZiU0E5SUhSdmNDQXJJR2hsYVdkb2REdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJ2Y0NBK0lIUnZjRXhwYldsMElDWW1JSFJ2Y0NBOElHSnZkSFJ2YlV4cGJXbDBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIeDhJR0p2ZEhSdmJTQStJSFJ2Y0V4cGJXbDBJQ1ltSUdKdmRIUnZiU0E4SUdKdmRIUnZiVXhwYldsMFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUh4OElIUnZjQ0E4SUhSdmNFeHBiV2wwSUNZbUlHSnZkSFJ2YlNBK0lHSnZkSFJ2YlV4cGJXbDBLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR0YwWlNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa1pXd3VZWFIwY2lnblpHRjBZUzF6ZEdGMFpTY3NJQ2QyYVhOcFlteGxKeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ1JsYkM1MGNtbG5aMlZ5S0NkaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSkdWc0xuUnlhV2RuWlhJb0ozTjBZWFJsUTJoaGJtZGxKeXdnSjJGamRHbDJaU2NwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKR1ZzTG1GMGRISW9KMlJoZEdFdGMzUmhkR1VuTENCdWRXeHNLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKR1ZzTG5SeWFXZG5aWElvSjJsdVlXTjBhWFpsSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNSbGJDNTBjbWxuWjJWeUtDZHpkR0YwWlVOb1lXNW5aU2NzSUNkcGJtRmpkR2wyWlNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUgwcE8xeHlYRzRnSUNBZ2ZTd2dNakFwTzF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCN1hISmNiaUFnSUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ0FnS2lCVGRHRnlkQ0IzWVhsd2IybHVkRnh5WEc0Z0lDQWdJQ0FnS2x4eVhHNGdJQ0FnSUNBZ0tpQkFiV1YwYUc5a0lITjBZWEowWEhKY2JpQWdJQ0FnSUNBcUwxeHlYRzRnSUNBZ0lDQnpkR0Z5ZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNRb2QybHVaRzkzS1M1dmJpZ25jbVZ6YVhwbEp5d2diMjVTWlhOcGVtVXBPMXh5WEc0Z0lDQWdJQ0FnSUNSMmFXVjNjRzl5ZEM1dmJpZ25jMk55YjJ4c0p5d2diMjVUWTNKdmJHd3BPMXh5WEc0Z0lDQWdJQ0FnSUdOaFkyaGxRWFIwY21saWRYUmxjeWdwTzF4eVhHNGdJQ0FnSUNBZ0lHOXVVMk55YjJ4c0tDazdYSEpjYmlBZ0lDQWdJSDBzWEhKY2JseHlYRzRnSUNBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FnSUNvZ1UzUnZjQ0IzWVhsd2IybHVkRnh5WEc0Z0lDQWdJQ0FnS2x4eVhHNGdJQ0FnSUNBZ0tpQkFiV1YwYUc5a0lITjBiM0JjY2x4dUlDQWdJQ0FnSUNvdlhISmNiaUFnSUNBZ0lITjBiM0E2SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0FrS0hkcGJtUnZkeWt1YjJabUtDZHlaWE5wZW1VbkxDQnZibEpsYzJsNlpTazdYSEpjYmlBZ0lDQWdJQ0FnSkhacFpYZHdiM0owTG05bVppZ25jMk55YjJ4c0p5d2diMjVUWTNKdmJHd3BPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TzF4eVhHNGdJSDA3WEhKY2JseHlYRzU5S1NocVVYVmxjbmtwT3lKZGZRPT0iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgalF1ZXJ5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKTtcclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0IHRoZSBjdXJyZW50IGhhc2hcclxuICogYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBuYW1lXHJcbiAqXHJcbiAqIEBtb2R1bGUgSEFTSFxyXG4gKiBAcmVxdWlyZXMgalF1ZXJ5XHJcbiAqL1xyXG52YXIgSEFTSCA9IEhBU0ggfHwgKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICBmdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIHZhciBhZ2VuY2llcyA9IHtcclxuICAgICAgYWtxYTogJ0FLUUEnLFxyXG4gICAgICBoa2k6ICdIS0knLFxyXG4gICAgICBncm91ZWs6ICdHcm91ZWsnLFxyXG4gICAgICBtZWRpYW1vbmtzOiAnTWVkaWEgTW9ua3MnLFxyXG4gICAgICBzb2xlaWxub2lyOiAnU29sZWlsIE5vaXInLFxyXG4gICAgICB0aHJlYWQ6ICdUaHJlYWQnLFxyXG4gICAgICB1bHRyYW5vaXI6ICdVbHRyYSBOb2lyJ1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRIYXNoICgpIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWdlbmN5IChoYXNoKSB7XHJcbiAgICAgIHZhciBhZ2VuY3k7XHJcblxyXG4gICAgICBpZiAoaGFzaCAmJiBhZ2VuY2llc1toYXNoXSkge1xyXG4gICAgICAgIGFnZW5jeSA9IGFnZW5jaWVzW2hhc2hdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFnZW5jeSA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYWdlbmN5O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoYXNoID0gZ2V0SGFzaCgpO1xyXG4gICAgdmFyIGFnZW5jeSA9IGdldEFnZW5jeShoYXNoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoYXNoOiBoYXNoLFxyXG4gICAgICBhZ2VuY3k6IGFnZW5jeSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZXBsYWNlIGFsbCB0aGUgcGxhY2Vob2xkZXJzIGJ5IGNvcnJlY3QgYWdlbmN5IG5hbWVcclxuICAgICAgICpcclxuICAgICAgICogQG1ldGhvZCByZXBsYWNlUGxhY2Vob2xkZXJzXHJcbiAgICAgICAqL1xyXG4gICAgICByZXBsYWNlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRwbGFjZWhvbGRlcnMgPSBqUXVlcnkoJy5wbGFjZWhvbGRlci0tYWdlbmN5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHBsYWNlaG9sZGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciAkcGxhY2Vob2xkZXIgPSBqUXVlcnkodGhpcyk7XHJcblxyXG4gICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5oYXNDbGFzcygncGxhY2Vob2xkZXItLWFnZW5jeS0teW91JykpIHtcclxuICAgICAgICAgICAgaWYgKGFnZW5jeSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChhZ2VuY3kpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCd5b3UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5oYXNDbGFzcygncGxhY2Vob2xkZXItLWFnZW5jeS0tY2FwaXRhbCcpKSB7XHJcbiAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoYWdlbmN5LnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKGFnZW5jeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyICRlbWFpbCA9IGpRdWVyeSgnLnBsYWNlaG9sZGVyLS1lbWFpbCcpO1xyXG5cclxuICAgICAgICB2YXIgc3ViamVjdCA9IGhhc2ggPyAnP3N1YmplY3Q9SGkgZnJvbSAnICsgYWdlbmN5IDogJz9zdWJqZWN0PUhpJztcclxuICAgICAgICB2YXIgYm9keSA9IGhhc2ggPyAnJmJvZHk9SGkgViwgd2UgbGlrZSB5b3VyIHdvcmsgYW5kIHdvdWxkIGxvdmUgdG8gbWVldCB5b3UuJyA6ICcmYm9keT1IaSBWJztcclxuXHJcbiAgICAgICAgJGVtYWlsLmF0dHIoJ2hyZWYnLCBbXHJcbiAgICAgICAgICAnbWFpbHRvOnZhbGVudGluLm1hcm1vbmllckBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgc3ViamVjdCxcclxuICAgICAgICAgIGJvZHlcclxuICAgICAgICBdLmpvaW4oJycpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBIQVNIIGN1cnJlbnQgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIGdldEluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIQVNIfVxyXG4gICAgICovXHJcbiAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBpbml0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIQVNILmdldEluc3RhbmNlKCk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzl6Y21NdmFuTXZiVzlrZFd4bGN5OW9ZWE5vVFc5a2RXeGxMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUozVnpaU0J6ZEhKcFkzUW5PMXh5WEc1Y2NseHVkbUZ5SUdwUmRXVnllU0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRxVVhWbGNua25YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKMnBSZFdWeWVTZGRJRG9nYm5Wc2JDazdYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dSWGgwY21GamRDQjBhR1VnWTNWeWNtVnVkQ0JvWVhOb1hISmNiaUFxSUdGdVpDQnlaWFIxY200Z2RHaGxJR052Y25KbGMzQnZibVJwYm1jZ2JtRnRaVnh5WEc0Z0tseHlYRzRnS2lCQWJXOWtkV3hsSUVoQlUwaGNjbHh1SUNvZ1FISmxjWFZwY21WeklHcFJkV1Z5ZVZ4eVhHNGdLaTljY2x4dWRtRnlJRWhCVTBnZ1BTQklRVk5JSUh4OElDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdkbUZ5SUdsdWMzUmhibU5sSUQwZ2JuVnNiRHRjY2x4dVhISmNiaUFnWm5WdVkzUnBiMjRnYVc1cGRDQW9LU0I3WEhKY2JpQWdJQ0IyWVhJZ1lXZGxibU5wWlhNZ1BTQjdYSEpjYmlBZ0lDQWdJR0ZyY1dFNklDZEJTMUZCSnl4Y2NseHVJQ0FnSUNBZ2FHdHBPaUFuU0V0Skp5eGNjbHh1SUNBZ0lDQWdaM0p2ZFdWck9pQW5SM0p2ZFdWckp5eGNjbHh1SUNBZ0lDQWdiV1ZrYVdGdGIyNXJjem9nSjAxbFpHbGhJRTF2Ym10ekp5eGNjbHh1SUNBZ0lDQWdjMjlzWldsc2JtOXBjam9nSjFOdmJHVnBiQ0JPYjJseUp5eGNjbHh1SUNBZ0lDQWdkR2h5WldGa09pQW5WR2h5WldGa0p5eGNjbHh1SUNBZ0lDQWdkV3gwY21GdWIybHlPaUFuVld4MGNtRWdUbTlwY2lkY2NseHVJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdablZ1WTNScGIyNGdaMlYwU0dGemFDQW9LU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUIzYVc1a2IzY3ViRzlqWVhScGIyNHVhR0Z6YUM1emNHeHBkQ2duSXljcFd6RmRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFRm5aVzVqZVNBb2FHRnphQ2tnZTF4eVhHNGdJQ0FnSUNCMllYSWdZV2RsYm1ONU8xeHlYRzVjY2x4dUlDQWdJQ0FnYVdZZ0tHaGhjMmdnSmlZZ1lXZGxibU5wWlhOYmFHRnphRjBwSUh0Y2NseHVJQ0FnSUNBZ0lDQmhaMlZ1WTNrZ1BTQmhaMlZ1WTJsbGMxdG9ZWE5vWFR0Y2NseHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQmhaMlZ1WTNrZ1BTQW5KenRjY2x4dUlDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlHRm5aVzVqZVR0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjJZWElnYUdGemFDQTlJR2RsZEVoaGMyZ29LVHRjY2x4dUlDQWdJSFpoY2lCaFoyVnVZM2tnUFNCblpYUkJaMlZ1WTNrb2FHRnphQ2s3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUNBZ2FHRnphRG9nYUdGemFDeGNjbHh1SUNBZ0lDQWdZV2RsYm1ONU9pQmhaMlZ1WTNrc1hISmNibHh5WEc0Z0lDQWdJQ0F2S2lwY2NseHVJQ0FnSUNBZ0lDb2dVbVZ3YkdGalpTQmhiR3dnZEdobElIQnNZV05sYUc5c1pHVnljeUJpZVNCamIzSnlaV04wSUdGblpXNWplU0J1WVcxbFhISmNiaUFnSUNBZ0lDQXFYSEpjYmlBZ0lDQWdJQ0FxSUVCdFpYUm9iMlFnY21Wd2JHRmpaVkJzWVdObGFHOXNaR1Z5YzF4eVhHNGdJQ0FnSUNBZ0tpOWNjbHh1SUNBZ0lDQWdjbVZ3YkdGalpWQnNZV05sYUc5c1pHVnljem9nWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lBa2NHeGhZMlZvYjJ4a1pYSnpJRDBnYWxGMVpYSjVLQ2N1Y0d4aFkyVm9iMnhrWlhJdExXRm5aVzVqZVNjcE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNSd2JHRmpaV2h2YkdSbGNuTXVaV0ZqYUNobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNCMllYSWdKSEJzWVdObGFHOXNaR1Z5SUQwZ2FsRjFaWEo1S0hSb2FYTXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJR2xtSUNna2NHeGhZMlZvYjJ4a1pYSXVhR0Z6UTJ4aGMzTW9KM0JzWVdObGFHOXNaR1Z5TFMxaFoyVnVZM2t0TFhsdmRTY3BLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFoyVnVZM2tnSVQwOUlDY25LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSkhCc1lXTmxhRzlzWkdWeUxtaDBiV3dvWVdkbGJtTjVLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWtjR3hoWTJWb2IyeGtaWEl1YUhSdGJDZ25lVzkxSnlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2drY0d4aFkyVm9iMnhrWlhJdWFHRnpRMnhoYzNNb0ozQnNZV05sYUc5c1pHVnlMUzFoWjJWdVkza3RMV05oY0dsMFlXd25LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNSd2JHRmpaV2h2YkdSbGNpNW9kRzFzS0dGblpXNWplUzUwYjFWd2NHVnlRMkZ6WlNncEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBa2NHeGhZMlZvYjJ4a1pYSXVhSFJ0YkNoaFoyVnVZM2twTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQWtaVzFoYVd3Z1BTQnFVWFZsY25rb0p5NXdiR0ZqWldodmJHUmxjaTB0WlcxaGFXd25LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhOMVltcGxZM1FnUFNCb1lYTm9JRDhnSno5emRXSnFaV04wUFVocElHWnliMjBnSnlBcklHRm5aVzVqZVNBNklDYy9jM1ZpYW1WamREMUlhU2M3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR0p2WkhrZ1BTQm9ZWE5vSUQ4Z0p5WmliMlI1UFVocElGWXNJSGRsSUd4cGEyVWdlVzkxY2lCM2IzSnJJR0Z1WkNCM2IzVnNaQ0JzYjNabElIUnZJRzFsWlhRZ2VXOTFMaWNnT2lBbkptSnZaSGs5U0drZ1ZpYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDUmxiV0ZwYkM1aGRIUnlLQ2RvY21WbUp5d2dXMXh5WEc0Z0lDQWdJQ0FnSUNBZ0oyMWhhV3gwYnpwMllXeGxiblJwYmk1dFlYSnRiMjVwWlhKQVoyMWhhV3d1WTI5dEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUhOMVltcGxZM1FzWEhKY2JpQWdJQ0FnSUNBZ0lDQmliMlI1WEhKY2JpQWdJQ0FnSUNBZ1hTNXFiMmx1S0NjbktTazdYSEpjYmlBZ0lDQWdJSDFjY2x4dUlDQWdJSDA3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdlMXh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCSFpYUWdTRUZUU0NCamRYSnlaVzUwSUdsdWMzUmhibU5sWEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FHMWxkR2h2WkNCblpYUkpibk4wWVc1alpWeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRUZUU0gxY2NseHVJQ0FnSUNBcUwxeHlYRzRnSUNBZ1oyVjBTVzV6ZEdGdVkyVTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ2FXWWdLQ0ZwYm5OMFlXNWpaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObElEMGdhVzVwZENncE8xeHlYRzRnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNCeVpYUjFjbTRnYVc1emRHRnVZMlU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVHRjY2x4dWZTa29LVHRjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdTRUZUU0M1blpYUkpibk4wWVc1alpTZ3BPeUpkZlE9PSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG5cclxuLyoqXHJcbiAqIFByZWxvYWRlclxyXG4gKlxyXG4gKiBAY2xhc3MgTG9hZGVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcmVxdWlyZXMgalF1ZXJ5XHJcbiAqL1xyXG5mdW5jdGlvbiBMb2FkZXIgKCkge1xyXG4gIHRoaXMuJGVsID0galF1ZXJ5KCcubG9hZGVyJyk7XHJcbiAgdGhpcy4kdGl0bGUgPSB0aGlzLiRlbC5maW5kKCcubG9hZGVyX190aXRsZScpO1xyXG4gIHRoaXMuJHByb2dyZXNzID0gdGhpcy4kZWwuZmluZCgnLmxvYWRlcl9fcHJvZ3Jlc3MnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE91dCBhbmltYXRpb25cclxuICpcclxuICogQG1ldGhvZCBvdXRcclxuICovXHJcbkxvYWRlci5wcm90b3R5cGUub3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuJHByb2dyZXNzLnN0b3AoKS5hbmltYXRlKHsgd2lkdGg6ICcxMDAlJyB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLiRlbC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJGVsLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuJHRpdGxlLmFuaW1hdGUoeyB0b3A6ICctMTAlJywgb3BhY2l0eTogMCB9LCA1MDApO1xyXG4gICAgdGhpcy4kcHJvZ3Jlc3MuYW5pbWF0ZSh7IGhlaWdodDogMCB9LCA0MDApO1xyXG4gIH0uYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlIHRoZSBwZXJjZW50IGxvYWRlZFxyXG4gKlxyXG4gKiBAbWV0aG9kIHVwZGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3BlcmNlbnRdXHJcbiAqL1xyXG5Mb2FkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXI7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzl6Y21NdmFuTXZiMkpxWldOMGN6SkVMMHh2WVdSbGNrOWlhbVZqZERKRUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjY2x4dVhISmNiblpoY2lCcVVYVmxjbmtnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuYWxGMVpYSjVKMTBnT2lCMGVYQmxiMllnWjJ4dlltRnNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWjJ4dlltRnNXeWRxVVhWbGNua25YU0E2SUc1MWJHd3BPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRkJ5Wld4dllXUmxjbHh5WEc0Z0tseHlYRzRnS2lCQVkyeGhjM01nVEc5aFpHVnlYSEpjYmlBcUlFQmpiMjV6ZEhKMVkzUnZjbHh5WEc0Z0tpQkFjbVZ4ZFdseVpYTWdhbEYxWlhKNVhISmNiaUFxTDF4eVhHNW1kVzVqZEdsdmJpQk1iMkZrWlhJZ0tDa2dlMXh5WEc0Z0lIUm9hWE11SkdWc0lEMGdhbEYxWlhKNUtDY3ViRzloWkdWeUp5azdYSEpjYmlBZ2RHaHBjeTRrZEdsMGJHVWdQU0IwYUdsekxpUmxiQzVtYVc1a0tDY3ViRzloWkdWeVgxOTBhWFJzWlNjcE8xeHlYRzRnSUhSb2FYTXVKSEJ5YjJkeVpYTnpJRDBnZEdocGN5NGtaV3d1Wm1sdVpDZ25MbXh2WVdSbGNsOWZjSEp2WjNKbGMzTW5LVHRjY2x4dWZWeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFOTFkQ0JoYm1sdFlYUnBiMjVjY2x4dUlDcGNjbHh1SUNvZ1FHMWxkR2h2WkNCdmRYUmNjbHh1SUNvdlhISmNia3h2WVdSbGNpNXdjbTkwYjNSNWNHVXViM1YwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lIUm9hWE11SkhCeWIyZHlaWE56TG5OMGIzQW9LUzVoYm1sdFlYUmxLSHNnZDJsa2RHZzZJQ2N4TURBbEp5QjlMQ0F4TURBd0xDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0IwYUdsekxpUmxiQzVoYm1sdFlYUmxLSHNnYjNCaFkybDBlVG9nTUNCOUxDQXhNREF3TENCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJSFJvYVhNdUpHVnNMbU56Y3lnblpHbHpjR3hoZVNjc0lDZHViMjVsSnlrN1hISmNiaUFnSUNCOUxtSnBibVFvZEdocGN5a3BPMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVKSFJwZEd4bExtRnVhVzFoZEdVb2V5QjBiM0E2SUNjdE1UQWxKeXdnYjNCaFkybDBlVG9nTUNCOUxDQTFNREFwTzF4eVhHNGdJQ0FnZEdocGN5NGtjSEp2WjNKbGMzTXVZVzVwYldGMFpTaDdJR2hsYVdkb2REb2dNQ0I5TENBME1EQXBPMXh5WEc0Z0lIMHVZbWx1WkNoMGFHbHpLU2s3WEhKY2JuMDdYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dWWEJrWVhSbElIUm9aU0J3WlhKalpXNTBJR3h2WVdSbFpGeHlYRzRnS2x4eVhHNGdLaUJBYldWMGFHOWtJSFZ3WkdGMFpWeHlYRzRnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnVzNCbGNtTmxiblJkWEhKY2JpQXFMMXh5WEc1TWIyRmtaWEl1Y0hKdmRHOTBlWEJsTG5Wd1pHRjBaU0E5SUdaMWJtTjBhVzl1SUNncElIdDlPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQk1iMkZrWlhJN0lsMTkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKiBqc2hpbnQgbGF4YnJlYWs6IHRydWUgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBqUXVlcnkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snalF1ZXJ5J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqUXVlcnknXSA6IG51bGwpO1xyXG5cclxuLyoqXHJcbiAqIEFuaW1hdGVkIHdpcmVmcmFtZVxyXG4gKlxyXG4gKiBAY2xhc3MgV2lyZWZyYW1lXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gWyRlbF0gRE9NIGVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZGVsYXldIERlbGF5IGJldHdlZW4gZnJhbWVzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLnBvc2l0aW9uc10gQW5pbWF0ZWQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gKiBAcmVxdWlyZXMgalF1ZXJ5XHJcbiAqL1xyXG5mdW5jdGlvbiBXaXJlZnJhbWUgKCRlbCwgb3B0aW9ucykge1xyXG4gIHRoaXMucGFyYW1ldGVycyA9IGpRdWVyeS5leHRlbmQoe1xyXG4gICAgZGVsYXk6IDIwMCxcclxuICAgIHBvc2l0aW9uczogWy0yMCwgLTkwLCAtMTM1LCAtMjAwLCAtMjAsIDQwXVxyXG4gIH0sIG9wdGlvbnMpO1xyXG5cclxuICB0aGlzLiR0b3BMaW5lcyA9ICRlbC5maW5kKCcud2lyZWZyYW1lX19mcmFtZS0tdG9wJyk7XHJcbiAgdGhpcy4kYm90dG9tTGluZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fZnJhbWUtLWJvdHRvbScpO1xyXG4gIHRoaXMuJGxlZnRMaW5lcyA9ICRlbC5maW5kKCcud2lyZWZyYW1lX19mcmFtZS0tbGVmdCcpO1xyXG4gIHRoaXMuJHJpZ2h0TGluZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fZnJhbWUtLXJpZ2h0Jyk7XHJcbiAgdGhpcy4kbGVmdENvbHVtbiA9ICRlbC5maW5kKCcud2lyZWZyYW1lX19jb2x1bW4tLWxlZnQnKTtcclxuICB0aGlzLiR0ZXh0TGluZXMgPSAkZWwuZmluZCgnLndpcmVmcmFtZV9fdGV4dF9fbGluZScpO1xyXG4gIHRoaXMuJGNvbnRyb2xOb2RlcyA9ICRlbC5maW5kKCcud2lyZWZyYW1lX19jb250cm9sc19fbm9kZScpO1xyXG5cclxuICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICB0aGlzLnRvdGFsUG9zaXRpb25zID0gdGhpcy5wYXJhbWV0ZXJzLnBvc2l0aW9ucy5sZW5ndGg7XHJcbiAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAwO1xyXG59XHJcblxyXG4vKipcclxuICogSW4gYW5pbWF0aW9uXHJcbiAqXHJcbiAqIEBtZXRob2QgaW5cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3V0XSBPdXQgaW5zdGVhZCBvZiBpbj9cclxuICovXHJcbldpcmVmcmFtZS5wcm90b3R5cGUuaW4gPSBmdW5jdGlvbiAob3V0KSB7XHJcbiAgLy8gdGFyZ2V0c1xyXG4gIHZhciB0YXJnZXRMaW5lcztcclxuICB2YXIgdGFyZ2V0VGV4dExpbmVzO1xyXG4gIHZhciB0YXJnZXRJbmNvbXBsZXRlVGV4dExpbmVzO1xyXG4gIHZhciB0YXJnZXROb2RlcztcclxuXHJcbiAgaWYgKG91dCA9PT0gMCkge1xyXG4gICAgdGFyZ2V0TGluZXMgPSB0YXJnZXRUZXh0TGluZXMgPSB0YXJnZXRJbmNvbXBsZXRlVGV4dExpbmVzID0gMDtcclxuICAgIHRhcmdldE5vZGVzID0gMzA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldExpbmVzID0gdGFyZ2V0VGV4dExpbmVzID0gJzEwMCUnO1xyXG4gICAgdGFyZ2V0SW5jb21wbGV0ZVRleHRMaW5lcyA9ICc2MCUnO1xyXG4gICAgdGFyZ2V0Tm9kZXMgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gZnJhbWVzXHJcbiAgdmFyIHRvdGFsRnJhbWVzID0gdGhpcy4kdG9wTGluZXMubGVuZ3RoO1xyXG5cclxuICB2YXIgc2V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB2YXIgJHRvcCA9IGpRdWVyeSh0aGlzLiR0b3BMaW5lc1tpbmRleF0pO1xyXG4gICAgdmFyICRib3R0b20gPSBqUXVlcnkodGhpcy4kYm90dG9tTGluZXNbaW5kZXhdKTtcclxuICAgIHZhciAkbGVmdCA9IGpRdWVyeSh0aGlzLiRsZWZ0TGluZXNbaW5kZXhdKTtcclxuICAgIHZhciAkcmlnaHQgPSBqUXVlcnkodGhpcy4kcmlnaHRMaW5lc1tpbmRleF0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkdG9wLmNzcygnd2lkdGgnLCB0YXJnZXRMaW5lcyk7XHJcbiAgICAgICRyaWdodC5jc3MoJ2hlaWdodCcsIHRhcmdldExpbmVzKTtcclxuICAgIH0sIChpbmRleCAqIHRoaXMucGFyYW1ldGVycy5kZWxheSkgKyA0MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkbGVmdC5jc3MoJ2hlaWdodCcsIHRhcmdldExpbmVzKTtcclxuICAgICAgJGJvdHRvbS5jc3MoJ3dpZHRoJywgdGFyZ2V0TGluZXMpO1xyXG4gICAgfSwgKGluZGV4ICogdGhpcy5wYXJhbWV0ZXJzLmRlbGF5KSArIDYwMCk7XHJcbiAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAvLyBzZXQgYW5pbWF0aW9ucyBmb3IgZWFjaCBmcmFtZVxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGcmFtZXM7IGkrKykge1xyXG4gICAgc2V0QW5pbWF0aW9uKGkpO1xyXG4gIH1cclxuXHJcbiAgLy8gdGV4dFxyXG4gIHZhciBkZWxheSA9IHRoaXMucGFyYW1ldGVycy5kZWxheTtcclxuXHJcbiAgdGhpcy4kdGV4dExpbmVzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciAkbGluZSA9IGpRdWVyeSh0aGlzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGxpbmUuY3NzKCd3aWR0aCcsICRsaW5lLmhhc0NsYXNzKCd3aXJlZnJhbWVfX3RleHRfX2xpbmUtLWluY29tcGxldGUnKVxyXG4gICAgICAgID8gdGFyZ2V0SW5jb21wbGV0ZVRleHRMaW5lc1xyXG4gICAgICAgIDogdGFyZ2V0VGV4dExpbmVzKTtcclxuICAgICAgXHJcbiAgICB9LCBpICogZGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb250cm9sIG5vZGVzXHJcbiAgdGhpcy4kY29udHJvbE5vZGVzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuICAgIHZhciAkbm9kZSA9IGpRdWVyeSh0aGlzKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJG5vZGUuY3NzKCd0b3AnLCB0YXJnZXROb2Rlcyk7XHJcbiAgICB9LCBpICogZGVsYXkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE91dCBhbmltYXRpb25cclxuICpcclxuICogQG1ldGhvZCBvdXRcclxuICovXHJcbldpcmVmcmFtZS5wcm90b3R5cGUub3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuJHRvcExpbmVzLmNzcygnd2lkdGgnLCAwKTtcclxuICB0aGlzLiRib3R0b21MaW5lcy5jc3MoJ3dpZHRoJywgMCk7XHJcbiAgdGhpcy4kbGVmdExpbmVzLmNzcygnaGVpZ2h0JywgMCk7XHJcbiAgdGhpcy4kcmlnaHRMaW5lcy5jc3MoJ2hlaWdodCcsIDApO1xyXG4gIHRoaXMuJHRleHRMaW5lcy5jc3MoJ3dpZHRoJywgMCk7XHJcbiAgdGhpcy4kY29udHJvbE5vZGVzLmNzcygndG9wJywgMzApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFN0YXJ0IGFuaW1hdGlvblxyXG4gKlxyXG4gKiBAbWV0aG9kIHN0YXJ0XHJcbiAqL1xyXG5XaXJlZnJhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmludGVydmFsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBvc2l0aW9uID4gdGhpcy50b3RhbFBvc2l0aW9ucykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kbGVmdENvbHVtbi5jc3MoJ3RvcCcsIHRoaXMucGFyYW1ldGVycy5wb3NpdGlvbnNbdGhpcy5jdXJyZW50UG9zaXRpb25dICsgJ3B4Jyk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb24rKztcclxuICB9LmJpbmQodGhpcyksIDIwMDApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFN0b3AgYW5pbWF0aW9uXHJcbiAqXHJcbiAqIEBtZXRob2Qgc3RvcFxyXG4gKi9cclxuV2lyZWZyYW1lLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdpcmVmcmFtZTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOXpjbU12YW5NdmIySnFaV04wY3pKRUwxZHBjbVZtY21GdFpVOWlhbVZqZERKRUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b2dhbk5vYVc1MElHeGhlR0p5WldGck9pQjBjblZsSUNvdlhISmNibHh5WEc0bmRYTmxJSE4wY21samRDYzdYSEpjYmx4eVhHNTJZWElnYWxGMVpYSjVJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKMnBSZFdWeWVTZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25hbEYxWlhKNUoxMGdPaUJ1ZFd4c0tUdGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQkJibWx0WVhSbFpDQjNhWEpsWm5KaGJXVmNjbHh1SUNwY2NseHVJQ29nUUdOc1lYTnpJRmRwY21WbWNtRnRaVnh5WEc0Z0tpQkFZMjl1YzNSeWRXTjBiM0pjY2x4dUlDb2dRSEJoY21GdElIdHFVWFZsY25sOUlGc2taV3hkSUVSUFRTQmxiR1Z0Wlc1MFhISmNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiYjNCMGFXOXVjMTFjY2x4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlGdHZjSFJwYjI1ekxtUmxiR0Y1WFNCRVpXeGhlU0JpWlhSM1pXVnVJR1p5WVcxbGMxeHlYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JiYjNCMGFXOXVjeTV3YjNOcGRHbHZibk5kSUVGdWFXMWhkR1ZrSUhOamNtOXNiQ0J3YjNOcGRHbHZibk5jY2x4dUlDb2dRSEpsY1hWcGNtVnpJR3BSZFdWeWVWeHlYRzRnS2k5Y2NseHVablZ1WTNScGIyNGdWMmx5WldaeVlXMWxJQ2drWld3c0lHOXdkR2x2Ym5NcElIdGNjbHh1SUNCMGFHbHpMbkJoY21GdFpYUmxjbk1nUFNCcVVYVmxjbmt1WlhoMFpXNWtLSHRjY2x4dUlDQWdJR1JsYkdGNU9pQXlNREFzWEhKY2JpQWdJQ0J3YjNOcGRHbHZibk02SUZzdE1qQXNJQzA1TUN3Z0xURXpOU3dnTFRJd01Dd2dMVEl3TENBME1GMWNjbHh1SUNCOUxDQnZjSFJwYjI1ektUdGNjbHh1WEhKY2JpQWdkR2hwY3k0a2RHOXdUR2x1WlhNZ1BTQWtaV3d1Wm1sdVpDZ25MbmRwY21WbWNtRnRaVjlmWm5KaGJXVXRMWFJ2Y0NjcE8xeHlYRzRnSUhSb2FYTXVKR0p2ZEhSdmJVeHBibVZ6SUQwZ0pHVnNMbVpwYm1Rb0p5NTNhWEpsWm5KaGJXVmZYMlp5WVcxbExTMWliM1IwYjIwbktUdGNjbHh1SUNCMGFHbHpMaVJzWldaMFRHbHVaWE1nUFNBa1pXd3VabWx1WkNnbkxuZHBjbVZtY21GdFpWOWZabkpoYldVdExXeGxablFuS1R0Y2NseHVJQ0IwYUdsekxpUnlhV2RvZEV4cGJtVnpJRDBnSkdWc0xtWnBibVFvSnk1M2FYSmxabkpoYldWZlgyWnlZVzFsTFMxeWFXZG9kQ2NwTzF4eVhHNGdJSFJvYVhNdUpHeGxablJEYjJ4MWJXNGdQU0FrWld3dVptbHVaQ2duTG5kcGNtVm1jbUZ0WlY5ZlkyOXNkVzF1TFMxc1pXWjBKeWs3WEhKY2JpQWdkR2hwY3k0a2RHVjRkRXhwYm1WeklEMGdKR1ZzTG1acGJtUW9KeTUzYVhKbFpuSmhiV1ZmWDNSbGVIUmZYMnhwYm1VbktUdGNjbHh1SUNCMGFHbHpMaVJqYjI1MGNtOXNUbTlrWlhNZ1BTQWtaV3d1Wm1sdVpDZ25MbmRwY21WbWNtRnRaVjlmWTI5dWRISnZiSE5mWDI1dlpHVW5LVHRjY2x4dVhISmNiaUFnZEdocGN5NXBiblJsY25aaGJDQTlJRzUxYkd3N1hISmNiaUFnZEdocGN5NTBiM1JoYkZCdmMybDBhVzl1Y3lBOUlIUm9hWE11Y0dGeVlXMWxkR1Z5Y3k1d2IzTnBkR2x2Ym5NdWJHVnVaM1JvTzF4eVhHNGdJSFJvYVhNdVkzVnljbVZ1ZEZCdmMybDBhVzl1SUQwZ01EdGNjbHh1ZlZ4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVsdUlHRnVhVzFoZEdsdmJseHlYRzRnS2x4eVhHNGdLaUJBYldWMGFHOWtJR2x1WEhKY2JpQXFJRUJ3WVhKaGJTQjdRbTl2YkdWaGJuMGdXMjkxZEYwZ1QzVjBJR2x1YzNSbFlXUWdiMllnYVc0L1hISmNiaUFxTDF4eVhHNVhhWEpsWm5KaGJXVXVjSEp2ZEc5MGVYQmxMbWx1SUQwZ1puVnVZM1JwYjI0Z0tHOTFkQ2tnZTF4eVhHNGdJQzh2SUhSaGNtZGxkSE5jY2x4dUlDQjJZWElnZEdGeVoyVjBUR2x1WlhNN1hISmNiaUFnZG1GeUlIUmhjbWRsZEZSbGVIUk1hVzVsY3p0Y2NseHVJQ0IyWVhJZ2RHRnlaMlYwU1c1amIyMXdiR1YwWlZSbGVIUk1hVzVsY3p0Y2NseHVJQ0IyWVhJZ2RHRnlaMlYwVG05a1pYTTdYSEpjYmx4eVhHNGdJR2xtSUNodmRYUWdQVDA5SURBcElIdGNjbHh1SUNBZ0lIUmhjbWRsZEV4cGJtVnpJRDBnZEdGeVoyVjBWR1Y0ZEV4cGJtVnpJRDBnZEdGeVoyVjBTVzVqYjIxd2JHVjBaVlJsZUhSTWFXNWxjeUE5SURBN1hISmNiaUFnSUNCMFlYSm5aWFJPYjJSbGN5QTlJRE13TzF4eVhHNGdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQjBZWEpuWlhSTWFXNWxjeUE5SUhSaGNtZGxkRlJsZUhSTWFXNWxjeUE5SUNjeE1EQWxKenRjY2x4dUlDQWdJSFJoY21kbGRFbHVZMjl0Y0d4bGRHVlVaWGgwVEdsdVpYTWdQU0FuTmpBbEp6dGNjbHh1SUNBZ0lIUmhjbWRsZEU1dlpHVnpJRDBnTUR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4dklHWnlZVzFsYzF4eVhHNGdJSFpoY2lCMGIzUmhiRVp5WVcxbGN5QTlJSFJvYVhNdUpIUnZjRXhwYm1WekxteGxibWQwYUR0Y2NseHVYSEpjYmlBZ2RtRnlJSE5sZEVGdWFXMWhkR2x2YmlBOUlHWjFibU4wYVc5dUlDaHBibVJsZUNrZ2UxeHlYRzRnSUNBZ2RtRnlJQ1IwYjNBZ1BTQnFVWFZsY25rb2RHaHBjeTRrZEc5d1RHbHVaWE5iYVc1a1pYaGRLVHRjY2x4dUlDQWdJSFpoY2lBa1ltOTBkRzl0SUQwZ2FsRjFaWEo1S0hSb2FYTXVKR0p2ZEhSdmJVeHBibVZ6VzJsdVpHVjRYU2s3WEhKY2JpQWdJQ0IyWVhJZ0pHeGxablFnUFNCcVVYVmxjbmtvZEdocGN5NGtiR1ZtZEV4cGJtVnpXMmx1WkdWNFhTazdYSEpjYmlBZ0lDQjJZWElnSkhKcFoyaDBJRDBnYWxGMVpYSjVLSFJvYVhNdUpISnBaMmgwVEdsdVpYTmJhVzVrWlhoZEtUdGNjbHh1WEhKY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdKSFJ2Y0M1amMzTW9KM2RwWkhSb0p5d2dkR0Z5WjJWMFRHbHVaWE1wTzF4eVhHNGdJQ0FnSUNBa2NtbG5hSFF1WTNOektDZG9aV2xuYUhRbkxDQjBZWEpuWlhSTWFXNWxjeWs3WEhKY2JpQWdJQ0I5TENBb2FXNWtaWGdnS2lCMGFHbHpMbkJoY21GdFpYUmxjbk11WkdWc1lYa3BJQ3NnTkRBd0tUdGNjbHh1WEhKY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdKR3hsWm5RdVkzTnpLQ2RvWldsbmFIUW5MQ0IwWVhKblpYUk1hVzVsY3lrN1hISmNiaUFnSUNBZ0lDUmliM1IwYjIwdVkzTnpLQ2QzYVdSMGFDY3NJSFJoY21kbGRFeHBibVZ6S1R0Y2NseHVJQ0FnSUgwc0lDaHBibVJsZUNBcUlIUm9hWE11Y0dGeVlXMWxkR1Z5Y3k1a1pXeGhlU2tnS3lBMk1EQXBPMXh5WEc0Z0lIMHVZbWx1WkNoMGFHbHpLVHRjY2x4dVhISmNiaUFnTHk4Z2MyVjBJR0Z1YVcxaGRHbHZibk1nWm05eUlHVmhZMmdnWm5KaGJXVmNjbHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIUnZkR0ZzUm5KaGJXVnpPeUJwS3lzcElIdGNjbHh1SUNBZ0lITmxkRUZ1YVcxaGRHbHZiaWhwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4dklIUmxlSFJjY2x4dUlDQjJZWElnWkdWc1lYa2dQU0IwYUdsekxuQmhjbUZ0WlhSbGNuTXVaR1ZzWVhrN1hISmNibHh5WEc0Z0lIUm9hWE11SkhSbGVIUk1hVzVsY3k1bFlXTm9LR1oxYm1OMGFXOXVJQ2hwS1NCN1hISmNiaUFnSUNCMllYSWdKR3hwYm1VZ1BTQnFVWFZsY25rb2RHaHBjeWs3WEhKY2JseHlYRzRnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNSc2FXNWxMbU56Y3lnbmQybGtkR2duTENBa2JHbHVaUzVvWVhORGJHRnpjeWduZDJseVpXWnlZVzFsWDE5MFpYaDBYMTlzYVc1bExTMXBibU52YlhCc1pYUmxKeWxjY2x4dUlDQWdJQ0FnSUNBL0lIUmhjbWRsZEVsdVkyOXRjR3hsZEdWVVpYaDBUR2x1WlhOY2NseHVJQ0FnSUNBZ0lDQTZJSFJoY21kbGRGUmxlSFJNYVc1bGN5azdYSEpjYmlBZ0lDQWdJRnh5WEc0Z0lDQWdmU3dnYVNBcUlHUmxiR0Y1S1R0Y2NseHVJQ0I5S1R0Y2NseHVYSEpjYmlBZ0x5OGdZMjl1ZEhKdmJDQnViMlJsYzF4eVhHNGdJSFJvYVhNdUpHTnZiblJ5YjJ4T2IyUmxjeTVsWVdOb0tHWjFibU4wYVc5dUlDaHBLU0I3WEhKY2JpQWdJQ0IyWVhJZ0pHNXZaR1VnUFNCcVVYVmxjbmtvZEdocGN5azdYSEpjYmx4eVhHNGdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ1J1YjJSbExtTnpjeWduZEc5d0p5d2dkR0Z5WjJWMFRtOWtaWE1wTzF4eVhHNGdJQ0FnZlN3Z2FTQXFJR1JsYkdGNUtUdGNjbHh1SUNCOUtUdGNjbHh1ZlR0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCUGRYUWdZVzVwYldGMGFXOXVYSEpjYmlBcVhISmNiaUFxSUVCdFpYUm9iMlFnYjNWMFhISmNiaUFxTDF4eVhHNVhhWEpsWm5KaGJXVXVjSEp2ZEc5MGVYQmxMbTkxZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQjBhR2x6TGlSMGIzQk1hVzVsY3k1amMzTW9KM2RwWkhSb0p5d2dNQ2s3WEhKY2JpQWdkR2hwY3k0a1ltOTBkRzl0VEdsdVpYTXVZM056S0NkM2FXUjBhQ2NzSURBcE8xeHlYRzRnSUhSb2FYTXVKR3hsWm5STWFXNWxjeTVqYzNNb0oyaGxhV2RvZENjc0lEQXBPMXh5WEc0Z0lIUm9hWE11SkhKcFoyaDBUR2x1WlhNdVkzTnpLQ2RvWldsbmFIUW5MQ0F3S1R0Y2NseHVJQ0IwYUdsekxpUjBaWGgwVEdsdVpYTXVZM056S0NkM2FXUjBhQ2NzSURBcE8xeHlYRzRnSUhSb2FYTXVKR052Ym5SeWIyeE9iMlJsY3k1amMzTW9KM1J2Y0Njc0lETXdLVHRjY2x4dWZUdGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQlRkR0Z5ZENCaGJtbHRZWFJwYjI1Y2NseHVJQ3BjY2x4dUlDb2dRRzFsZEdodlpDQnpkR0Z5ZEZ4eVhHNGdLaTljY2x4dVYybHlaV1p5WVcxbExuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQnBaaUFvZEdocGN5NXBiblJsY25aaGJDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnZEdocGN5NXBiblJsY25aaGJDQTlJSE5sZEVsdWRHVnlkbUZzS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lHbG1JQ2gwYUdsekxtTjFjbkpsYm5SUWIzTnBkR2x2YmlBK0lIUm9hWE11ZEc5MFlXeFFiM05wZEdsdmJuTXBJSHRjY2x4dUlDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MFVHOXphWFJwYjI0Z1BTQXdPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVKR3hsWm5SRGIyeDFiVzR1WTNOektDZDBiM0FuTENCMGFHbHpMbkJoY21GdFpYUmxjbk11Y0c5emFYUnBiMjV6VzNSb2FYTXVZM1Z5Y21WdWRGQnZjMmwwYVc5dVhTQXJJQ2R3ZUNjcE8xeHlYRzVjY2x4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZEZCdmMybDBhVzl1S3lzN1hISmNiaUFnZlM1aWFXNWtLSFJvYVhNcExDQXlNREF3S1R0Y2NseHVmVHRjY2x4dVhISmNiaThxS2x4eVhHNGdLaUJUZEc5d0lHRnVhVzFoZEdsdmJseHlYRzRnS2x4eVhHNGdLaUJBYldWMGFHOWtJSE4wYjNCY2NseHVJQ292WEhKY2JsZHBjbVZtY21GdFpTNXdjbTkwYjNSNWNHVXVjM1J2Y0NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQnBaaUFvSVhSb2FYTXVhVzUwWlhKMllXd3BJSHRjY2x4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhkcGJtUnZkeTVqYkdWaGNrbHVkR1Z5ZG1Gc0tIUm9hWE11YVc1MFpYSjJZV3dwTzF4eVhHNGdJSFJvYVhNdWFXNTBaWEoyWVd3Z1BTQnVkV3hzTzF4eVhHNTlPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlhhWEpsWm5KaGJXVTdJbDE5IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGpRdWVyeSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydqUXVlcnknXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pRdWVyeSddIDogbnVsbCk7XHJcblxyXG4vKipcclxuICogTWVudVxyXG4gKlxyXG4gKiBAY2xhc3MgTWVudVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHJlcXVpcmVzIGpRdWVyeVxyXG4gKi9cclxuZnVuY3Rpb24gTWVudSAoKSB7XHJcbiAgdmFyICRlbCA9IGpRdWVyeSgnLm1lbnUnKTtcclxuICB2YXIgJGJ1dHRvbiA9ICRlbC5maW5kKCcubWVudV9fYnV0dG9uJyk7XHJcbiAgdmFyICRpdGVtc0NvbnRhaW5lciA9ICRlbC5maW5kKCcubWVudV9faXRlbXMnKTtcclxuICB2YXIgJGl0ZW1zID0gJGVsLmZpbmQoJy5tZW51X19pdGVtJyk7XHJcblxyXG4gIHZhciBfY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcclxuICB2YXIgdGltZW91dHMgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gb25Nb3VzZW92ZXIgKCkge1xyXG4gICAgJGl0ZW1zLm9uKCdjbGljaycsIF9jYWxsYmFjayk7XHJcblxyXG4gICAgJGl0ZW1zQ29udGFpbmVyLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICRlbC5zdG9wKCkuYW5pbWF0ZSh7IGxlZnQ6IDAgfSwgeyBkdXJhdGlvbjogNDAwLCBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnIH0pO1xyXG4gICAgJGJ1dHRvbi5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgNDAwKTtcclxuXHJcbiAgICAkaXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICB2YXIgJGVsID0galF1ZXJ5KHRoaXMpO1xyXG5cclxuICAgICAgdmFyIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGVsLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCA0MDApO1xyXG4gICAgICB9LCBpICogMjAwKTtcclxuXHJcbiAgICAgIHRpbWVvdXRzLnB1c2godGltZW91dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZWwub25lKCdtb3VzZWxlYXZlJywgb25Nb3VzZW91dCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbk1vdXNlb3V0ICgpIHtcclxuICAgIGlmICh0aW1lb3V0cykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRpbWVvdXRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRpbWVvdXRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgJGVsLnN0b3AoKS5hbmltYXRlKHsgbGVmdDogMzAgfSwgeyBkdXJhdGlvbjogNDAwLCBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnIH0pO1xyXG4gICAgJGJ1dHRvbi5zdG9wKCkuYW5pbWF0ZSh7IG9wYWNpdHk6IDAuNSB9LCA0MDApO1xyXG4gICAgJGl0ZW1zLnN0b3AoKS5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCA0MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGl0ZW1zQ29udGFpbmVyLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICRpdGVtcy5vZmYoJ2NsaWNrJywgX2NhbGxiYWNrKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRidXR0b24ub25lKCdtb3VzZW92ZXIgY2xpY2snLCBvbk1vdXNlb3Zlcik7XHJcbiAgfVxyXG5cclxuICAkYnV0dG9uLm9uZSgnbW91c2VvdmVyIGNsaWNrJywgb25Nb3VzZW92ZXIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGVsLmFuaW1hdGUoeyB0b3A6IDAsIG9wYWNpdHk6IDEgfSwgNTAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgIF9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVudTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOXpjbU12YW5NdmIySnFaV04wY3pKRUwyMWxiblZQWW1wbFkzUXlSQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlkMWMyVWdjM1J5YVdOMEp6dGNjbHh1WEhKY2JuWmhjaUJxVVhWbGNua2dQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25hbEYxWlhKNUoxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5ZHFVWFZsY25rblhTQTZJRzUxYkd3cE8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFMWxiblZjY2x4dUlDcGNjbHh1SUNvZ1FHTnNZWE56SUUxbGJuVmNjbHh1SUNvZ1FHTnZibk4wY25WamRHOXlYSEpjYmlBcUlFQnlaWEYxYVhKbGN5QnFVWFZsY25sY2NseHVJQ292WEhKY2JtWjFibU4wYVc5dUlFMWxiblVnS0NrZ2UxeHlYRzRnSUhaaGNpQWtaV3dnUFNCcVVYVmxjbmtvSnk1dFpXNTFKeWs3WEhKY2JpQWdkbUZ5SUNSaWRYUjBiMjRnUFNBa1pXd3VabWx1WkNnbkxtMWxiblZmWDJKMWRIUnZiaWNwTzF4eVhHNGdJSFpoY2lBa2FYUmxiWE5EYjI1MFlXbHVaWElnUFNBa1pXd3VabWx1WkNnbkxtMWxiblZmWDJsMFpXMXpKeWs3WEhKY2JpQWdkbUZ5SUNScGRHVnRjeUE5SUNSbGJDNW1hVzVrS0NjdWJXVnVkVjlmYVhSbGJTY3BPMXh5WEc1Y2NseHVJQ0IyWVhJZ1gyTmhiR3hpWVdOcklEMGdablZ1WTNScGIyNGdLQ2tnZTMwN1hISmNiaUFnZG1GeUlIUnBiV1Z2ZFhSeklEMGdXMTA3WEhKY2JseHlYRzRnSUdaMWJtTjBhVzl1SUc5dVRXOTFjMlZ2ZG1WeUlDZ3BJSHRjY2x4dUlDQWdJQ1JwZEdWdGN5NXZiaWduWTJ4cFkyc25MQ0JmWTJGc2JHSmhZMnNwTzF4eVhHNWNjbHh1SUNBZ0lDUnBkR1Z0YzBOdmJuUmhhVzVsY2k1amMzTW9KMlJwYzNCc1lYa25MQ0FuWW14dlkyc25LVHRjY2x4dVhISmNiaUFnSUNBa1pXd3VjM1J2Y0NncExtRnVhVzFoZEdVb2V5QnNaV1owT2lBd0lIMHNJSHNnWkhWeVlYUnBiMjQ2SURRd01Dd2daV0Z6YVc1bk9pQW5aV0Z6WlU5MWRGRjFZWEowSnlCOUtUdGNjbHh1SUNBZ0lDUmlkWFIwYjI0dWMzUnZjQ2dwTG1GdWFXMWhkR1VvZXlCdmNHRmphWFI1T2lBd0lIMHNJRFF3TUNrN1hISmNibHh5WEc0Z0lDQWdKR2wwWlcxekxtVmhZMmdvWm5WdVkzUnBiMjRnS0drcElIdGNjbHh1SUNBZ0lDQWdkbUZ5SUNSbGJDQTlJR3BSZFdWeWVTaDBhR2x6S1R0Y2NseHVYSEpjYmlBZ0lDQWdJSFpoY2lCMGFXMWxiM1YwSUQwZ2QybHVaRzkzTG5ObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNSbGJDNXpkRzl3S0NrdVlXNXBiV0YwWlNoN0lHOXdZV05wZEhrNklERWdmU3dnTkRBd0tUdGNjbHh1SUNBZ0lDQWdmU3dnYVNBcUlESXdNQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQjBhVzFsYjNWMGN5NXdkWE5vS0hScGJXVnZkWFFwTzF4eVhHNGdJQ0FnZlNrN1hISmNibHh5WEc0Z0lDQWdKR1ZzTG05dVpTZ25iVzkxYzJWc1pXRjJaU2NzSUc5dVRXOTFjMlZ2ZFhRcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1puVnVZM1JwYjI0Z2IyNU5iM1Z6Wlc5MWRDQW9LU0I3WEhKY2JpQWdJQ0JwWmlBb2RHbHRaVzkxZEhNcElIdGNjbHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBc0lHb2dQU0IwYVcxbGIzVjBjeTVzWlc1bmRHZzdJR2tnUENCcU95QnBLeXNwSUh0Y2NseHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdVkyeGxZWEpVYVcxbGIzVjBLSFJwYldWdmRYUnpXMmxkS1R0Y2NseHVJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQjBhVzFsYjNWMGN5QTlJRnRkTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDUmxiQzV6ZEc5d0tDa3VZVzVwYldGMFpTaDdJR3hsWm5RNklETXdJSDBzSUhzZ1pIVnlZWFJwYjI0NklEUXdNQ3dnWldGemFXNW5PaUFuWldGelpVOTFkRkYxWVhKMEp5QjlLVHRjY2x4dUlDQWdJQ1JpZFhSMGIyNHVjM1J2Y0NncExtRnVhVzFoZEdVb2V5QnZjR0ZqYVhSNU9pQXdMalVnZlN3Z05EQXdLVHRjY2x4dUlDQWdJQ1JwZEdWdGN5NXpkRzl3S0NrdVlXNXBiV0YwWlNoN0lHOXdZV05wZEhrNklEQWdmU3dnTkRBd0xDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNScGRHVnRjME52Ym5SaGFXNWxjaTVqYzNNb0oyUnBjM0JzWVhrbkxDQW5ibTl1WlNjcE8xeHlYRzRnSUNBZ0lDQWthWFJsYlhNdWIyWm1LQ2RqYkdsamF5Y3NJRjlqWVd4c1ltRmpheWs3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQWtZblYwZEc5dUxtOXVaU2duYlc5MWMyVnZkbVZ5SUdOc2FXTnJKeXdnYjI1TmIzVnpaVzkyWlhJcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0pHSjFkSFJ2Ymk1dmJtVW9KMjF2ZFhObGIzWmxjaUJqYkdsamF5Y3NJRzl1VFc5MWMyVnZkbVZ5S1R0Y2NseHVYSEpjYmlBZ2NtVjBkWEp1SUh0Y2NseHVJQ0FnSUdsdU9pQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNSbGJDNWhibWx0WVhSbEtIc2dkRzl3T2lBd0xDQnZjR0ZqYVhSNU9pQXhJSDBzSURVd01DazdYSEpjYmlBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUc5dVEyeHBZMnM2SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHlYRzRnSUNBZ0lDQmZZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjY2x4dUlDQWdJSDFjY2x4dUlDQjlPMXh5WEc1OVhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUUxbGJuVTdJbDE5IiwiLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxyXG4vLyBNSVQgbGljZW5zZVxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBsYXN0VGltZSA9IDA7XHJcbiAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG4gIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gIH1cclxuIFxyXG4gIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9O1xyXG4gIH1cclxuIFxyXG4gIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgfTtcclxuICB9XHJcbn0pKCk7IiwiLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vYmluZFxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XHJcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKG9UaGlzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNVxyXG4gICAgICAgIC8vIGludGVybmFsIElzQ2FsbGFibGUgZnVuY3Rpb25cclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgYUFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICBmVG9CaW5kID0gdGhpcyxcclxuICAgICAgICAgIGZOT1AgICAgPSBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgZkJvdW5kICA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZlRvQmluZC5hcHBseSh0aGlzIGluc3RhbmNlb2YgZk5PUCAmJiBvVGhpc1xyXG4gICAgICAgICAgICAgICAgICAgPyB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICA6IG9UaGlzLFxyXG4gICAgICAgICAgICAgICAgICAgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICBmTk9QLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xyXG4gICAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IGZOT1AoKTtcclxuXHJcbiAgICAgIHJldHVybiBmQm91bmQ7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTsiLCIvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovICkge1widXNlIHN0cmljdFwiO1xyXG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XHJcbiAgICAgIGlmIChsZW4gPT09IDApIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG4gPSAwO1xyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XHJcbiAgICAgICAgaWYgKG4gIT0gbikgey8vIHNob3J0Y3V0IGZvciB2ZXJpZnlpbmcgaWYgaXQncyBOYU5cclxuICAgICAgICAgIG4gPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobiAhPSAwICYmIG4gIT0gSW5maW5pdHkgJiYgbiAhPSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgIG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChuID49IGxlbikge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XHJcbiAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpZiAoIGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogRGVib3VuY2UgYSBmdW5jdGlvblxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcclxuICpcclxuICogQG1ldGhvZCBkZWJvdW5jZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbZGVsYXldXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ltbWVkaWF0ZV1cclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWJvdW5jZSAoY2FsbGJhY2ssIGRlbGF5LCBpbW1lZGlhdGUpIHtcclxuICB2YXIgdGltZW91dDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgIHZhciBjYWxsTGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChjYWxsTGF0ZXIsIGRlbGF5KTtcclxuICAgIGlmIChjYWxsTm93KSB7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7ICJdfQ==
