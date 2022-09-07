!(function t(e, i, n) {
  function o(s, a) {
    if (!i[s]) {
      if (!e[s]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(s, !0);
        if (r) return r(s, !0);
        var u = new Error("Cannot find module '" + s + "'");
        throw ((u.code = "MODULE_NOT_FOUND"), u);
      }
      var f = (i[s] = { exports: {} });
      e[s][0].call(
        f.exports,
        function (t) {
          var i = e[s][1][t];
          return o(i ? i : t);
        },
        f,
        f.exports,
        t,
        e,
        i,
        n
      );
    }
    return i[s].exports;
  }
  for (
    var r = "function" == typeof require && require, s = 0;
    s < n.length;
    s++
  )
    o(n[s]);
  return o;
})(
  {
    1: [
      function (t, e, i) {
        (function (e) {
          "use strict";
          function i() {
            return (
              navigator.userAgent.match(/Android/i) ||
              navigator.userAgent.match(/webOS/i) ||
              navigator.userAgent.match(/iPhone/i) ||
              navigator.userAgent.match(/iPad/i) ||
              navigator.userAgent.match(/iPod/i) ||
              navigator.userAgent.match(/BlackBerry/i) ||
              navigator.userAgent.match(/Windows Phone/i)
            );
          }
          t("./polyfills/animFramePolyfill"),
            t("./polyfills/bindPolyfill"),
            t("./polyfills/indexOfPolyfill");
          var n =
              "undefined" != typeof window
                ? window.jQuery
                : "undefined" != typeof e
                ? e.jQuery
                : null,
            o =
              "undefined" != typeof window
                ? window.skrollr
                : "undefined" != typeof e
                ? e.skrollr
                : null;
          t("./libs/waypointLib");
          var r = t("./modules/hashModule"),
            s = t("./classes/LoaderClass"),
            a = t("./objects2D/LoaderObject2D"),
            l = t("./objects2D/menuObject2D"),
            u = t("./objects2D/WireframeObject2D");
          n(function () {
            r.replacePlaceholders();
            var t = new a(),
              e = new l(),
              f = new s([
                "./app/public/img/part-beam.png",
                "./app/public/img/part-drop.png",
                "./app/public/img/part-sphere.png",
                "./app/public/img/part-grid.png",
                "./app/public/img/part-field.png",
                "./app/public/img/part-stars.png",
              ]);
            f.onProgress(function (e) {
              t.update(e);
            }),
              f.start(),
              o.init({ skrollrBody: "mobile-body" });
            var c = new u(n(".wireframe"));
            if (i()) c["in"]();
            else {
              var p = n(".tails"),
                d = p.find(".tails__section");
              d.find(".tails__section__el").animate({ opacity: 0, y: 100 }, 0);
              var h = d.waypoint({ offset: 30, startAt: p.offset().top - 1e3 });
              h.start(),
                d.on("active", function () {
                  var t = n(this);
                  return (
                    !t.attr("data-appeared") &&
                    (n(this)
                      .find(".tails__section__el")
                      .each(function (t) {
                        n(this)
                          .stop()
                          .delay(100 * t)
                          .animate({ opacity: 1, y: 0 }, 500);
                      }),
                    void t.attr("data-appeared", !0))
                  );
                }),
                n(".tails__section--site").on("stateChange", function (t, e) {
                  "active" === e ? (c.start(), c["in"]()) : c.stop();
                });
            }
            f.onComplete(function () {
              t.out(),
                setTimeout(function () {
                  e["in"]();
                }, 1500);
            });
          });
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {
        "./classes/LoaderClass": 2,
        "./libs/waypointLib": 3,
        "./modules/hashModule": 4,
        "./objects2D/LoaderObject2D": 5,
        "./objects2D/WireframeObject2D": 6,
        "./objects2D/menuObject2D": 7,
        "./polyfills/animFramePolyfill": 8,
        "./polyfills/bindPolyfill": 9,
        "./polyfills/indexOfPolyfill": 10,
      },
    ],
    2: [
      function (t, e, i) {
        "use strict";
        function n(t) {
          (this.images = t || []), (this.total = this.images.length);
          var e = function () {};
          (this.progress = e), (this.complete = e);
        }
        (n.prototype.start = function () {
          for (
            var t = 0,
              e = function () {
                t++;
                var e = (100 * t) / this.total;
                this.progress(e), t === this.total && this.complete();
              }.bind(this),
              i = 0;
            i < this.total;
            i++
          ) {
            var n = new Image();
            (n.src = this.images[i]), (n.onload = n.onerror = e);
          }
        }),
          (n.prototype.onProgress = function (t) {
            this.progress = t;
          }),
          (n.prototype.onComplete = function (t) {
            this.complete = t;
          }),
          (e.exports = n);
      },
      {},
    ],
    3: [
      function (t, e, i) {
        (function (i) {
          "use strict";
          var n =
              "undefined" != typeof window
                ? window.jQuery
                : "undefined" != typeof i
                ? i.jQuery
                : null,
            o = t("../utils/debounceUtil");
          e.exports = (function (t) {
            t.fn.waypoint = function (e) {
              function i() {
                a.each(function () {
                  var e = t(this),
                    i = parseInt(e.outerHeight()),
                    n = r
                      ? parseInt(e.position().top) + f
                      : parseInt(e.offset().top);
                  e.attr({ "data-height": i, "data-top": n });
                });
              }
              function n() {
                (u = l.height()),
                  (c = u * (s.offset / 100)),
                  i(),
                  t(this).trigger("scroll");
              }
              var r = !!e.$viewport,
                s = t.extend(
                  { $viewport: t(window), offset: 0, startAt: null },
                  e
                ),
                a = t(this),
                l = s.$viewport,
                u = l.height(),
                f = l.scrollTop(),
                c = u * (s.offset / 100),
                p = o(function () {
                  if (((f = t(this).scrollTop()), s.startAt && f < s.startAt))
                    return !1;
                  var e = f + c,
                    i = f + (u - c);
                  a.each(function () {
                    var n = t(this),
                      o = n.attr("data-state"),
                      s = parseInt(n.attr("data-height")) || n.outerHeight(),
                      a = r
                        ? parseInt(n.attr("data-top")) + 1 ||
                          n.position().top + 1
                        : parseInt(n.attr("data-top")) + 1 ||
                          n.offset().top + 1,
                      l = a + s;
                    (a > e && a < i) || (l > e && l < i) || (a < e && l > i)
                      ? o ||
                        (n.attr("data-state", "visible"),
                        n.trigger("active"),
                        n.trigger("stateChange", "active"))
                      : o &&
                        (n.attr("data-state", null),
                        n.trigger("inactive"),
                        n.trigger("stateChange", "inactive"));
                  });
                }, 20);
              return {
                start: function () {
                  t(window).on("resize", n), l.on("scroll", p), i(), p();
                },
                stop: function () {
                  t(window).off("resize", n), l.off("scroll", p);
                },
              };
            };
          })(n);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "../utils/debounceUtil": 11 },
    ],
    4: [
      function (t, e, i) {
        (function (t) {
          "use strict";
          var i =
              "undefined" != typeof window
                ? window.jQuery
                : "undefined" != typeof t
                ? t.jQuery
                : null,
            n =
              n ||
              (function () {
                function t() {
                  function t() {
                    return window.location.hash.split("#")[1];
                  }
                  function e(t) {
                    var e;
                    return (e = t && n[t] ? n[t] : "");
                  }
                  var n = {
                      akqa: "AKQA",
                      hki: "HKI",
                      grouek: "Grouek",
                      mediamonks: "Media Monks",
                      soleilnoir: "Soleil Noir",
                      thread: "Thread",
                      ultranoir: "Ultra Noir",
                    },
                    o = t(),
                    r = e(o);
                  return {
                    hash: o,
                    agency: r,
                    replacePlaceholders: function () {
                      var t = i(".placeholder--agency");
                      t.each(function () {
                        var t = i(this);
                        t.hasClass("placeholder--agency--you")
                          ? "" !== r
                            ? t.html(r)
                            : t.html("you")
                          : t.hasClass("placeholder--agency--capital")
                          ? t.html(r.toUpperCase())
                          : t.html(r);
                      });
                      var e = i(".placeholder--email");
                      e.attr(
                        "href",
                        ["mailto:ankush19om@outlook.com"].join("")
                      );
                    },
                  };
                }
                var e = null;
                return {
                  getInstance: function () {
                    return e || (e = t()), e;
                  },
                };
              })();
          e.exports = n.getInstance();
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    5: [
      function (t, e, i) {
        (function (t) {
          "use strict";
          function i() {
            (this.$el = n(".loader")),
              (this.$title = this.$el.find(".loader__title")),
              (this.$progress = this.$el.find(".loader__progress"));
          }
          var n =
            "undefined" != typeof window
              ? window.jQuery
              : "undefined" != typeof t
              ? t.jQuery
              : null;
          (i.prototype.out = function () {
            this.$progress.stop().animate(
              { width: "100%" },
              1e3,
              function () {
                this.$el.animate(
                  { opacity: 0 },
                  1e3,
                  function () {
                    this.$el.css("display", "none");
                  }.bind(this)
                ),
                  this.$title.animate({ top: "-10%", opacity: 0 }, 500),
                  this.$progress.animate({ height: 0 }, 400);
              }.bind(this)
            );
          }),
            (i.prototype.update = function () {}),
            (e.exports = i);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    6: [
      function (t, e, i) {
        (function (t) {
          "use strict";
          function i(t, e) {
            (this.parameters = n.extend(
              { delay: 200, positions: [-20, -90, -135, -200, -20, 40] },
              e
            )),
              (this.$topLines = t.find(".wireframe__frame--top")),
              (this.$bottomLines = t.find(".wireframe__frame--bottom")),
              (this.$leftLines = t.find(".wireframe__frame--left")),
              (this.$rightLines = t.find(".wireframe__frame--right")),
              (this.$leftColumn = t.find(".wireframe__column--left")),
              (this.$textLines = t.find(".wireframe__text__line")),
              (this.$controlNodes = t.find(".wireframe__controls__node")),
              (this.interval = null),
              (this.totalPositions = this.parameters.positions.length),
              (this.currentPosition = 0);
          }
          var n =
            "undefined" != typeof window
              ? window.jQuery
              : "undefined" != typeof t
              ? t.jQuery
              : null;
          (i.prototype["in"] = function (t) {
            var e, i, o, r;
            0 === t
              ? ((e = i = o = 0), (r = 30))
              : ((e = i = "100%"), (o = "60%"), (r = 0));
            for (
              var s = this.$topLines.length,
                a = function (t) {
                  var i = n(this.$topLines[t]),
                    o = n(this.$bottomLines[t]),
                    r = n(this.$leftLines[t]),
                    s = n(this.$rightLines[t]);
                  setTimeout(function () {
                    i.css("width", e), s.css("height", e);
                  }, t * this.parameters.delay + 400),
                    setTimeout(function () {
                      r.css("height", e), o.css("width", e);
                    }, t * this.parameters.delay + 600);
                }.bind(this),
                l = 0;
              l < s;
              l++
            )
              a(l);
            var u = this.parameters.delay;
            this.$textLines.each(function (t) {
              var e = n(this);
              setTimeout(function () {
                e.css(
                  "width",
                  e.hasClass("wireframe__text__line--incomplete") ? o : i
                );
              }, t * u);
            }),
              this.$controlNodes.each(function (t) {
                var e = n(this);
                setTimeout(function () {
                  e.css("top", r);
                }, t * u);
              });
          }),
            (i.prototype.out = function () {
              this.$topLines.css("width", 0),
                this.$bottomLines.css("width", 0),
                this.$leftLines.css("height", 0),
                this.$rightLines.css("height", 0),
                this.$textLines.css("width", 0),
                this.$controlNodes.css("top", 30);
            }),
            (i.prototype.start = function () {
              return (
                !this.interval &&
                void (this.interval = setInterval(
                  function () {
                    this.currentPosition > this.totalPositions &&
                      (this.currentPosition = 0),
                      this.$leftColumn.css(
                        "top",
                        this.parameters.positions[this.currentPosition] + "px"
                      ),
                      this.currentPosition++;
                  }.bind(this),
                  2e3
                ))
              );
            }),
            (i.prototype.stop = function () {
              return (
                !!this.interval &&
                (window.clearInterval(this.interval),
                void (this.interval = null))
              );
            }),
            (e.exports = i);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    7: [
      function (t, e, i) {
        (function (t) {
          "use strict";
          function i() {
            function t() {
              s.on("click", a),
                r.css("display", "block"),
                i
                  .stop()
                  .animate(
                    { left: 0 },
                    { duration: 400, easing: "easeOutQuart" }
                  ),
                o.stop().animate({ opacity: 0 }, 400),
                s.each(function (t) {
                  var e = n(this),
                    i = window.setTimeout(function () {
                      e.stop().animate({ opacity: 1 }, 400);
                    }, 200 * t);
                  l.push(i);
                }),
                i.one("mouseleave", e);
            }
            function e() {
              if (l) {
                for (var e = 0, n = l.length; e < n; e++)
                  window.clearTimeout(l[e]);
                l = [];
              }
              i
                .stop()
                .animate(
                  { left: 30 },
                  { duration: 400, easing: "easeOutQuart" }
                ),
                o.stop().animate({ opacity: 0.5 }, 400),
                s.stop().animate({ opacity: 0 }, 400, function () {
                  r.css("display", "none"), s.off("click", a);
                }),
                o.one("mouseover click", t);
            }
            var i = n(".menu"),
              o = i.find(".menu__button"),
              r = i.find(".menu__items"),
              s = i.find(".menu__item"),
              a = function () {},
              l = [];
            return (
              o.one("mouseover click", t),
              {
                in: function () {
                  i.animate({ top: 0, opacity: 1 }, 500);
                },
                onClick: function (t) {
                  a = t;
                },
              }
            );
          }
          var n =
            "undefined" != typeof window
              ? window.jQuery
              : "undefined" != typeof t
              ? t.jQuery
              : null;
          e.exports = i;
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    8: [
      function (t, e, i) {
        "use strict";
        !(function () {
          for (
            var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
            i < e.length && !window.requestAnimationFrame;
            ++i
          )
            (window.requestAnimationFrame =
              window[e[i] + "RequestAnimationFrame"]),
              (window.cancelAnimationFrame =
                window[e[i] + "CancelAnimationFrame"] ||
                window[e[i] + "CancelRequestAnimationFrame"]);
          window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e) {
              var i = new Date().getTime(),
                n = Math.max(0, 16 - (i - t)),
                o = window.setTimeout(function () {
                  e(i + n);
                }, n);
              return (t = i + n), o;
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (t) {
                clearTimeout(t);
              });
        })();
      },
      {},
    ],
    9: [
      function (t, e, i) {
        "use strict";
        !(function () {
          Function.prototype.bind ||
            (Function.prototype.bind = function (t) {
              if ("function" != typeof this)
                throw new TypeError(
                  "Function.prototype.bind - what is trying to be bound is not callable"
                );
              var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function () {},
                o = function () {
                  return i.apply(
                    this instanceof n && t ? this : t,
                    e.concat(Array.prototype.slice.call(arguments))
                  );
                };
              return (n.prototype = this.prototype), (o.prototype = new n()), o;
            });
        })();
      },
      {},
    ],
    10: [
      function (t, e, i) {
        "use strict";
        !(function () {
          Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (t) {
              if (null == this) throw new TypeError();
              var e = Object(this),
                i = e.length >>> 0;
              if (0 === i) return -1;
              var n = 0;
              if (
                (arguments.length > 1 &&
                  ((n = Number(arguments[1])),
                  n != n
                    ? (n = 0)
                    : 0 != n &&
                      n != 1 / 0 &&
                      n != -(1 / 0) &&
                      (n = (n > 0 || -1) * Math.floor(Math.abs(n)))),
                n >= i)
              )
                return -1;
              for (
                var o = n >= 0 ? n : Math.max(i - Math.abs(n), 0);
                o < i;
                o++
              )
                if (o in e && e[o] === t) return o;
              return -1;
            });
        })();
      },
      {},
    ],
    11: [
      function (t, e, i) {
        "use strict";
        function n(t, e, i) {
          var n;
          return function () {
            var o = this,
              r = arguments,
              s = function () {
                (n = null), i || t.apply(o, r);
              },
              a = i && !n;
            window.clearTimeout(n),
              (n = window.setTimeout(s, e)),
              a && t.apply(o, r);
          };
        }
        e.exports = n;
      },
      {},
    ],
  },
  {},
  [1]
);
