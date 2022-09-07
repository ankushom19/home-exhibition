!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = "length" in e && e.length,
      n = J.type(e);
    return (
      "function" !== n &&
      !J.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (J.isFunction(t))
      return J.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return J.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ae.test(t)) return J.filter(t, e, n);
      t = J.filter(t, e);
    }
    return J.grep(e, function (e) {
      return Y.call(t, e) >= 0 !== n;
    });
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function o(e) {
    var t = (de[e] = {});
    return (
      J.each(e.match(he) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function s() {
    Q.removeEventListener("DOMContentLoaded", s, !1),
      e.removeEventListener("load", s, !1),
      J.ready();
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = J.expando + a.uid++);
  }
  function l(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(_e, "-$1").toLowerCase()),
        (n = e.getAttribute(r)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : xe.test(n)
                ? J.parseJSON(n)
                : n));
        } catch (i) {}
        ye.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function u() {
    return !0;
  }
  function c() {
    return !1;
  }
  function f() {
    try {
      return Q.activeElement;
    } catch (e) {}
  }
  function p(e, t) {
    return J.nodeName(e, "table") &&
      J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function h(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function d(e) {
    var t = Le.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function m(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"));
  }
  function g(e, t) {
    var n, r, i, o, s, a, l, u;
    if (1 === t.nodeType) {
      if (
        ve.hasData(e) &&
        ((o = ve.access(e)), (s = ve.set(t, o)), (u = o.events))
      ) {
        delete s.handle, (s.events = {});
        for (i in u)
          for (n = 0, r = u[i].length; n < r; n++) J.event.add(t, i, u[i][n]);
      }
      ye.hasData(e) &&
        ((a = ye.access(e)), (l = J.extend({}, a)), ye.set(t, l));
    }
  }
  function v(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && J.nodeName(e, t)) ? J.merge([e], n) : n;
  }
  function y(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ke.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function x(t, n) {
    var r,
      i = J(n.createElement(t)).appendTo(n.body),
      o =
        e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
          ? r.display
          : J.css(i[0], "display");
    return i.detach(), o;
  }
  function _(e) {
    var t = Q,
      n = Xe[e];
    return (
      n ||
        ((n = x(e, t)),
        ("none" !== n && n) ||
          ((He = (
            He || J("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = He[0].contentDocument),
          t.write(),
          t.close(),
          (n = x(e, t)),
          He.detach()),
        (Xe[e] = n)),
      n
    );
  }
  function b(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style;
    return (
      (n = n || We(e)),
      n && (s = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)),
        Ie.test(s) &&
          ze.test(t) &&
          ((r = a.width),
          (i = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = r),
          (a.minWidth = i),
          (a.maxWidth = o))),
      void 0 !== s ? s + "" : s
    );
  }
  function w(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function T(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--; )
      if (((t = Ge[i] + n), t in e)) return t;
    return r;
  }
  function k(e, t, n) {
    var r = $e.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function S(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (s += J.css(e, n + we[o], !0, i)),
        r
          ? ("content" === n && (s -= J.css(e, "padding" + we[o], !0, i)),
            "margin" !== n &&
              (s -= J.css(e, "border" + we[o] + "Width", !0, i)))
          : ((s += J.css(e, "padding" + we[o], !0, i)),
            "padding" !== n &&
              (s += J.css(e, "border" + we[o] + "Width", !0, i)));
    return s;
  }
  function C(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = We(e),
      s = "border-box" === J.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        ((i = b(e, t, o)), (i < 0 || null == i) && (i = e.style[t]), Ie.test(i))
      )
        return i;
      (r = s && (Z.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + S(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function P(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]),
        r.style &&
          ((o[s] = ve.get(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[s] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                Te(r) &&
                (o[s] = ve.access(r, "olddisplay", _(r.nodeName))))
            : ((i = Te(r)),
              ("none" === n && i) ||
                ve.set(r, "olddisplay", i ? n : J.css(r, "display"))));
    for (s = 0; s < a; s++)
      (r = e[s]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function A(e, t, n, r, i) {
    return new A.prototype.init(e, t, n, r, i);
  }
  function N() {
    return (
      setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = J.now())
    );
  }
  function O(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      (n = we[r]), (i["margin" + n] = i["padding" + n] = e);
    return t && (i.opacity = i.width = e), i;
  }
  function E(e, t, n) {
    for (
      var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function D(e, t, n) {
    var r,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      f = this,
      p = {},
      h = e.style,
      d = e.nodeType && Te(e),
      m = ve.get(e, "fxshow");
    n.queue ||
      ((a = J._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || l();
        })),
      a.unqueued++,
      f.always(function () {
        f.always(function () {
          a.unqueued--, J.queue(e, "fx").length || a.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (u = J.css(e, "display")),
        (c = "none" === u ? ve.get(e, "olddisplay") || _(e.nodeName) : u),
        "inline" === c &&
          "none" === J.css(e, "float") &&
          (h.display = "inline-block")),
      n.overflow &&
        ((h.overflow = "hidden"),
        f.always(function () {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        }));
    for (r in t)
      if (((i = t[r]), Ke.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (d ? "hide" : "show"))
        ) {
          if ("show" !== i || !m || void 0 === m[r]) continue;
          d = !0;
        }
        p[r] = (m && m[r]) || J.style(e, r);
      } else u = void 0;
    if (J.isEmptyObject(p))
      "inline" === ("none" === u ? _(e.nodeName) : u) && (h.display = u);
    else {
      m ? "hidden" in m && (d = m.hidden) : (m = ve.access(e, "fxshow", {})),
        o && (m.hidden = !d),
        d
          ? J(e).show()
          : f.done(function () {
              J(e).hide();
            }),
        f.done(function () {
          var t;
          ve.remove(e, "fxshow");
          for (t in p) J.style(e, t, p[t]);
        });
      for (r in p)
        (s = E(d ? m[r] : 0, r, f)),
          r in m ||
            ((m[r] = s.start),
            d &&
              ((s.end = s.start),
              (s.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function R(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (
        ((r = J.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        J.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (s = J.cssHooks[r]),
        s && "expand" in s)
      ) {
        (o = s.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function j(e, t, n) {
    var r,
      i,
      o = 0,
      s = tt.length,
      a = J.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = Ze || N(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = n / u.duration || 0,
            o = 1 - r,
            s = 0,
            l = u.tweens.length;
          s < l;
          s++
        )
          u.tweens[s].run(o);
        return (
          a.notifyWith(e, [u, o, n]),
          o < 1 && l ? n : (a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: J.extend({}, t),
        opts: J.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || N(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = J.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) u.tweens[n].run(1);
          return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (R(c, u.opts.specialEasing); o < s; o++)
      if ((r = tt[o].call(u, e, c, u.opts))) return r;
    return (
      J.map(c, E, u),
      J.isFunction(u.opts.start) && u.opts.start.call(e, u),
      J.fx.timer(J.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function F(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(he) || [];
      if (J.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function L(e, t, n, r) {
    function i(a) {
      var l;
      return (
        (o[a] = !0),
        J.each(e[a] || [], function (e, a) {
          var u = a(t, n, r);
          return "string" != typeof u || s || o[u]
            ? s
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), i(u), !1);
        }),
        l
      );
    }
    var o = {},
      s = e === xt;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function M(e, t) {
    var n,
      r,
      i = J.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && J.extend(!0, e, r), e;
  }
  function q(e, t, n) {
    for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          l.unshift(i);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (i in n) {
        if (!l[0] || e.converters[i + " " + l[0]]) {
          o = i;
          break;
        }
        s || (s = i);
      }
      o = o || s;
    }
    if (o) return o !== l[0] && l.unshift(o), n[o];
  }
  function H(e, t, n, r) {
    var i,
      o,
      s,
      a,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (((s = u[l + " " + o] || u["* " + o]), !s))
            for (i in u)
              if (
                ((a = i.split(" ")),
                a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]]))
              ) {
                s === !0
                  ? (s = u[i])
                  : u[i] !== !0 && ((o = a[0]), c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e["throws"]) t = s(t);
            else
              try {
                t = s(t);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: s ? f : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function X(e, t, n, r) {
    var i;
    if (J.isArray(t))
      J.each(t, function (t, i) {
        n || kt.test(e)
          ? r(e, i)
          : X(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== J.type(t)) r(e, t);
    else for (i in t) X(e + "[" + i + "]", t[i], n, r);
  }
  function z(e) {
    return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var I = [],
    W = I.slice,
    B = I.concat,
    $ = I.push,
    Y = I.indexOf,
    V = {},
    U = V.toString,
    G = V.hasOwnProperty,
    Z = {},
    Q = e.document,
    K = "2.1.4",
    J = function (e, t) {
      return new J.fn.init(e, t);
    },
    ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    te = /^-ms-/,
    ne = /-([\da-z])/gi,
    re = function (e, t) {
      return t.toUpperCase();
    };
  (J.fn = J.prototype =
    {
      jquery: K,
      constructor: J,
      selector: "",
      length: 0,
      toArray: function () {
        return W.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : W.call(this);
      },
      pushStack: function (e) {
        var t = J.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return J.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          J.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(W.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: $,
      sort: I.sort,
      splice: I.splice,
    }),
    (J.extend = J.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || J.isFunction(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                (r = e[t]),
                s !== r &&
                  (u && r && (J.isPlainObject(r) || (i = J.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && J.isArray(n) ? n : []))
                        : (o = n && J.isPlainObject(n) ? n : {}),
                      (s[t] = J.extend(u, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    J.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === J.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return !J.isArray(e) && e - parseFloat(e) + 1 >= 0;
      },
      isPlainObject: function (e) {
        return (
          "object" === J.type(e) &&
          !e.nodeType &&
          !J.isWindow(e) &&
          !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? V[U.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = J.trim(e)),
          e &&
            (1 === e.indexOf("use strict")
              ? ((t = Q.createElement("script")),
                (t.text = e),
                Q.head.appendChild(t).parentNode.removeChild(t))
              : n(e));
      },
      camelCase: function (e) {
        return e.replace(te, "ms-").replace(ne, re);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i,
          o = 0,
          s = e.length,
          a = n(e);
        if (r) {
          if (a) for (; o < s && ((i = t.apply(e[o], r)), i !== !1); o++);
          else for (o in e) if (((i = t.apply(e[o], r)), i === !1)) break;
        } else if (a)
          for (; o < s && ((i = t.call(e[o], o, e[o])), i !== !1); o++);
        else for (o in e) if (((i = t.call(e[o], o, e[o])), i === !1)) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(ee, "");
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? J.merge(r, "string" == typeof e ? [e] : e)
              : $.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : Y.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
          (r = !t(e[o], o)), r !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          o = 0,
          s = e.length,
          a = n(e),
          l = [];
        if (a) for (; o < s; o++) (i = t(e[o], o, r)), null != i && l.push(i);
        else for (o in e) (i = t(e[o], o, r)), null != i && l.push(i);
        return B.apply([], l);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        if (
          ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          J.isFunction(e))
        )
          return (
            (r = W.call(arguments, 2)),
            (i = function () {
              return e.apply(t || this, r.concat(W.call(arguments)));
            }),
            (i.guid = e.guid = e.guid || J.guid++),
            i
          );
      },
      now: Date.now,
      support: Z,
    }),
    J.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ie = (function (e) {
    function t(e, t, n, r) {
      var i, o, s, a, l, u, f, h, d, m;
      if (
        ((t ? t.ownerDocument || t : X) !== D && E(t),
        (t = t || D),
        (n = n || []),
        (a = t.nodeType),
        "string" != typeof e || !e || (1 !== a && 9 !== a && 11 !== a))
      )
        return n;
      if (!r && j) {
        if (11 !== a && (i = ye.exec(e)))
          if ((s = i[1])) {
            if (9 === a) {
              if (((o = t.getElementById(s)), !o || !o.parentNode)) return n;
              if (o.id === s) return n.push(o), n;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(s)) &&
              q(t, o) &&
              o.id === s
            )
              return n.push(o), n;
          } else {
            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if ((s = i[3]) && b.getElementsByClassName)
              return K.apply(n, t.getElementsByClassName(s)), n;
          }
        if (b.qsa && (!F || !F.test(e))) {
          if (
            ((h = f = H),
            (d = t),
            (m = 1 !== a && e),
            1 === a && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              u = S(e),
                (f = t.getAttribute("id"))
                  ? (h = f.replace(_e, "\\$&"))
                  : t.setAttribute("id", h),
                h = "[id='" + h + "'] ",
                l = u.length;
              l--;

            )
              u[l] = h + p(u[l]);
            (d = (xe.test(e) && c(t.parentNode)) || t), (m = u.join(","));
          }
          if (m)
            try {
              return K.apply(n, d.querySelectorAll(m)), n;
            } catch (g) {
            } finally {
              f || t.removeAttribute("id");
            }
        }
      }
      return P(e.replace(le, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > w.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[H] = !0), e;
    }
    function i(e) {
      var t = D.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--; ) w.attrHandle[n[r]] = t;
    }
    function s(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function u(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--; )
              n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function p(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function h(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = I++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, s) {
            var a,
              l,
              u = [z, o];
            if (s) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    ((l = t[H] || (t[H] = {})),
                    (a = l[r]) && a[0] === z && a[1] === o)
                  )
                    return (u[2] = a[2]);
                  if (((l[r] = u), (u[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function d(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function g(e, t, n, r, i) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
      return s;
    }
    function v(e, t, n, i, o, s) {
      return (
        i && !i[H] && (i = v(i)),
        o && !o[H] && (o = v(o, s)),
        r(function (r, s, a, l) {
          var u,
            c,
            f,
            p = [],
            h = [],
            d = s.length,
            v = r || m(t || "*", a.nodeType ? [a] : a, []),
            y = !e || (!r && t) ? v : g(v, p, e, a, l),
            x = n ? (o || (r ? e : d || i) ? [] : s) : y;
          if ((n && n(y, x, a, l), i))
            for (u = g(x, h), i(u, [], a, l), c = u.length; c--; )
              (f = u[c]) && (x[h[c]] = !(y[h[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (u = [], c = x.length; c--; )
                  (f = x[c]) && u.push((y[c] = f));
                o(null, (x = []), u, l);
              }
              for (c = x.length; c--; )
                (f = x[c]) &&
                  (u = o ? ee(r, f) : p[c]) > -1 &&
                  (r[u] = !(s[u] = f));
            }
          } else (x = g(x === s ? x.splice(d, x.length) : x)), o ? o(null, s, x, l) : K.apply(s, x);
        })
      );
    }
    function y(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = w.relative[e[0].type],
          s = o || w.relative[" "],
          a = o ? 1 : 0,
          l = h(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          u = h(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== A)) ||
                ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return (t = null), i;
            },
          ];
        a < i;
        a++
      )
        if ((n = w.relative[e[a].type])) c = [h(d(c), n)];
        else {
          if (((n = w.filter[e[a].type].apply(null, e[a].matches)), n[H])) {
            for (r = ++a; r < i && !w.relative[e[r].type]; r++);
            return v(
              a > 1 && d(c),
              a > 1 &&
                p(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(le, "$1"),
              n,
              a < r && y(e.slice(a, r)),
              r < i && y((e = e.slice(r))),
              r < i && p(e)
            );
          }
          c.push(n);
        }
      return d(c);
    }
    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function (r, s, a, l, u) {
          var c,
            f,
            p,
            h = 0,
            d = "0",
            m = r && [],
            v = [],
            y = A,
            x = r || (o && w.find.TAG("*", u)),
            _ = (z += null == y ? 1 : Math.random() || 0.1),
            b = x.length;
          for (u && (A = s !== D && s); d !== b && null != (c = x[d]); d++) {
            if (o && c) {
              for (f = 0; (p = e[f++]); )
                if (p(c, s, a)) {
                  l.push(c);
                  break;
                }
              u && (z = _);
            }
            i && ((c = !p && c) && h--, r && m.push(c));
          }
          if (((h += d), i && d !== h)) {
            for (f = 0; (p = n[f++]); ) p(m, v, s, a);
            if (r) {
              if (h > 0) for (; d--; ) m[d] || v[d] || (v[d] = Z.call(l));
              v = g(v);
            }
            K.apply(l, v),
              u && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(l);
          }
          return u && ((z = _), (A = y)), m;
        };
      return i ? r(s) : s;
    }
    var _,
      b,
      w,
      T,
      k,
      S,
      C,
      P,
      A,
      N,
      O,
      E,
      D,
      R,
      j,
      F,
      L,
      M,
      q,
      H = "sizzle" + 1 * new Date(),
      X = e.document,
      z = 0,
      I = 0,
      W = n(),
      B = n(),
      $ = n(),
      Y = function (e, t) {
        return e === t && (O = !0), 0;
      },
      V = 1 << 31,
      U = {}.hasOwnProperty,
      G = [],
      Z = G.pop,
      Q = G.push,
      K = G.push,
      J = G.slice,
      ee = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ie = re.replace("w", "w#"),
      oe =
        "\\[" +
        ne +
        "*(" +
        re +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ie +
        "))|)" +
        ne +
        "*\\]",
      se =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        oe +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      le = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      pe = new RegExp(se),
      he = new RegExp("^" + ie + "$"),
      de = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + se),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      me = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      xe = /[+~]/,
      _e = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      we = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      Te = function () {
        E();
      };
    try {
      K.apply((G = J.call(X.childNodes)), X.childNodes),
        G[X.childNodes.length].nodeType;
    } catch (ke) {
      K = {
        apply: G.length
          ? function (e, t) {
              Q.apply(e, J.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (b = t.support = {}),
      (k = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (E = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : X;
          return r !== D && 9 === r.nodeType && r.documentElement
            ? ((D = r),
              (R = r.documentElement),
              (n = r.defaultView),
              n &&
                n !== n.top &&
                (n.addEventListener
                  ? n.addEventListener("unload", Te, !1)
                  : n.attachEvent && n.attachEvent("onunload", Te)),
              (j = !k(r)),
              (b.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (b.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(r.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (b.getElementsByClassName = ve.test(r.getElementsByClassName)),
              (b.getById = i(function (e) {
                return (
                  (R.appendChild(e).id = H),
                  !r.getElementsByName || !r.getElementsByName(H).length
                );
              })),
              b.getById
                ? ((w.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && j) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (w.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete w.find.ID,
                  (w.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (w.find.TAG = b.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : b.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (w.find.CLASS =
                b.getElementsByClassName &&
                function (e, t) {
                  if (j) return t.getElementsByClassName(e);
                }),
              (L = []),
              (F = []),
              (b.qsa = ve.test(r.querySelectorAll)) &&
                (i(function (e) {
                  (R.appendChild(e).innerHTML =
                    "<a id='" +
                    H +
                    "'></a><select id='" +
                    H +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      F.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + H + "-]").length ||
                      F.push("~="),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + H + "+*").length ||
                      F.push(".#.+[+~]");
                }),
                i(function (e) {
                  var t = r.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      F.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      F.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    F.push(",.*:");
                })),
              (b.matchesSelector = ve.test(
                (M =
                  R.matches ||
                  R.webkitMatchesSelector ||
                  R.mozMatchesSelector ||
                  R.oMatchesSelector ||
                  R.msMatchesSelector)
              )) &&
                i(function (e) {
                  (b.disconnectedMatch = M.call(e, "div")),
                    M.call(e, "[s!='']:x"),
                    L.push("!=", se);
                }),
              (F = F.length && new RegExp(F.join("|"))),
              (L = L.length && new RegExp(L.join("|"))),
              (t = ve.test(R.compareDocumentPosition)),
              (q =
                t || ve.test(R.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Y = t
                ? function (e, t) {
                    if (e === t) return (O = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!b.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === r || (e.ownerDocument === X && q(X, e))
                            ? -1
                            : t === r || (t.ownerDocument === X && q(X, t))
                            ? 1
                            : N
                            ? ee(N, e) - ee(N, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (O = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      a = t.parentNode,
                      l = [e],
                      u = [t];
                    if (!o || !a)
                      return e === r
                        ? -1
                        : t === r
                        ? 1
                        : o
                        ? -1
                        : a
                        ? 1
                        : N
                        ? ee(N, e) - ee(N, t)
                        : 0;
                    if (o === a) return s(e, t);
                    for (n = e; (n = n.parentNode); ) l.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; l[i] === u[i]; ) i++;
                    return i
                      ? s(l[i], u[i])
                      : l[i] === X
                      ? -1
                      : u[i] === X
                      ? 1
                      : 0;
                  }),
              r)
            : D;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== D && E(e),
          (n = n.replace(fe, "='$1']")),
          b.matchesSelector && j && (!L || !L.test(n)) && (!F || !F.test(n)))
        )
          try {
            var r = M.call(e, n);
            if (
              r ||
              b.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (i) {}
        return t(n, D, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== D && E(e), q(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== D && E(e);
        var n = w.attrHandle[t.toLowerCase()],
          r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
        return void 0 !== r
          ? r
          : b.attributes || !j
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((O = !b.detectDuplicates),
          (N = !b.sortStable && e.slice(0)),
          e.sort(Y),
          O)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (N = null), e;
      }),
      (T = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += T(t);
          return n;
        }),
      (w = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(be, we)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(be, we)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return de.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      pe.test(n) &&
                      (t = S(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, we).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      f,
                      p,
                      h,
                      d,
                      m = o !== s ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !l && !a;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (f = t; (f = f[m]); )
                            if (
                              a
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          d = m = "only" === e && !d && "nextSibling";
                        }
                        return !0;
                      }
                      if (((d = [s ? g.firstChild : g.lastChild]), s && y)) {
                        for (
                          c = g[H] || (g[H] = {}),
                            u = c[e] || [],
                            h = u[0] === z && u[1],
                            p = u[0] === z && u[2],
                            f = h && g.childNodes[h];
                          (f = (++h && f && f[m]) || (p = h = 0) || d.pop());

                        )
                          if (1 === f.nodeType && ++p && f === t) {
                            c[e] = [z, h, p];
                            break;
                          }
                      } else if (
                        y &&
                        (u = (t[H] || (t[H] = {}))[e]) &&
                        u[0] === z
                      )
                        p = u[1];
                      else
                        for (
                          ;
                          (f = (++h && f && f[m]) || (p = h = 0) || d.pop()) &&
                          ((a
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++p ||
                            (y && ((f[H] || (f[H] = {}))[e] = [z, p]),
                            f !== t));

                        );
                      return (p -= i), p === r || (p % r === 0 && p / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  w.pseudos[e] ||
                  w.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[H]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  w.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                          (r = ee(e, i[s])), (e[r] = !(t[r] = i[s]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = C(e.replace(le, "$1"));
              return i[H]
                ? r(function (e, t, n, r) {
                    for (var o, s = i(e, null, r, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(be, we)),
                function (t) {
                  return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                he.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(be, we).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = j
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === R;
            },
            focus: function (e) {
              return (
                e === D.activeElement &&
                (!D.hasFocus || D.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !w.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return me.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: u(function () {
              return [0];
            }),
            last: u(function (e, t) {
              return [t - 1];
            }),
            eq: u(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: u(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: u(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: u(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: u(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (w.pseudos.nth = w.pseudos.eq);
    for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      w.pseudos[_] = a(_);
    for (_ in { submit: !0, reset: !0 }) w.pseudos[_] = l(_);
    return (
      (f.prototype = w.filters = w.pseudos),
      (w.setFilters = new f()),
      (S = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = B[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (a = e, l = [], u = w.preFilter; a; ) {
            (r && !(i = ue.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
              (r = !1),
              (i = ce.exec(a)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(le, " ") }),
                (a = a.slice(r.length)));
            for (s in w.filter)
              !(i = de[s].exec(a)) ||
                (u[s] && !(i = u[s](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: s, matches: i }),
                (a = a.slice(r.length)));
            if (!r) break;
          }
          return n ? a.length : a ? t.error(e) : B(e, l).slice(0);
        }),
      (C = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = $[e + " "];
          if (!o) {
            for (t || (t = S(e)), n = t.length; n--; )
              (o = y(t[n])), o[H] ? r.push(o) : i.push(o);
            (o = $(e, x(i, r))), (o.selector = e);
          }
          return o;
        }),
      (P = t.select =
        function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            l,
            u = "function" == typeof e && e,
            f = !r && S((e = u.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              ((o = f[0] = f[0].slice(0)),
              o.length > 2 &&
                "ID" === (s = o[0]).type &&
                b.getById &&
                9 === t.nodeType &&
                j &&
                w.relative[o[1].type])
            ) {
              if (
                ((t = (w.find.ID(s.matches[0].replace(be, we), t) || [])[0]),
                !t)
              )
                return n;
              u && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = de.needsContext.test(e) ? 0 : o.length;
              i-- && ((s = o[i]), !w.relative[(a = s.type)]);

            )
              if (
                (l = w.find[a]) &&
                (r = l(
                  s.matches[0].replace(be, we),
                  (xe.test(o[0].type) && c(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), (e = r.length && p(o)), !e))
                  return K.apply(n, r), n;
                break;
              }
          }
          return (
            (u || C(e, f))(r, t, !j, n, (xe.test(e) && c(t.parentNode)) || t), n
          );
        }),
      (b.sortStable = H.split("").sort(Y).join("") === H),
      (b.detectDuplicates = !!O),
      E(),
      (b.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(D.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (b.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var r;
          if (!n)
            return e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      t
    );
  })(e);
  (J.find = ie),
    (J.expr = ie.selectors),
    (J.expr[":"] = J.expr.pseudos),
    (J.unique = ie.uniqueSort),
    (J.text = ie.getText),
    (J.isXMLDoc = ie.isXML),
    (J.contains = ie.contains);
  var oe = J.expr.match.needsContext,
    se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ae = /^.[^:#\[\.,]*$/;
  (J.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? J.find.matchesSelector(r, e)
          ? [r]
          : []
        : J.find.matches(
            e,
            J.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    J.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            J(e).filter(function () {
              for (t = 0; t < n; t++) if (J.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < n; t++) J.find(e, i[t], r);
        return (
          (r = this.pushStack(n > 1 ? J.unique(r) : r)),
          (r.selector = this.selector ? this.selector + " " + e : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && oe.test(e) ? J(e) : e || [],
          !1
        ).length;
      },
    });
  var le,
    ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ce = (J.fn.init = function (e, t) {
      var n, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((n =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : ue.exec(e)),
          !n || (!n[1] && t))
        )
          return !t || t.jquery
            ? (t || le).find(e)
            : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof J ? t[0] : t),
            J.merge(
              this,
              J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)
            ),
            se.test(n[1]) && J.isPlainObject(t))
          )
            for (n in t)
              J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        return (
          (r = Q.getElementById(n[2])),
          r && r.parentNode && ((this.length = 1), (this[0] = r)),
          (this.context = Q),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : J.isFunction(e)
        ? "undefined" != typeof le.ready
          ? le.ready(e)
          : e(J)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          J.makeArray(e, this));
    });
  (ce.prototype = J.fn), (le = J(Q));
  var fe = /^(?:parents|prev(?:Until|All))/,
    pe = { children: !0, contents: !0, next: !0, prev: !0 };
  J.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && J(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    J.fn.extend({
      has: function (e) {
        var t = J(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (J.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            s =
              oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0;
          r < i;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && J.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? J.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? Y.call(J(e), this[0])
            : Y.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(J.unique(J.merge(this.get(), J(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    J.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return J.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return J.dir(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return J.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return J.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return J.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return J.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return J.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return J.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || J.merge([], e.childNodes);
        },
      },
      function (e, t) {
        J.fn[e] = function (n, r) {
          var i = J.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = J.filter(r, i)),
            this.length > 1 &&
              (pe[e] || J.unique(i), fe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var he = /\S+/g,
    de = {};
  (J.Callbacks = function (e) {
    e = "string" == typeof e ? de[e] || o(e) : J.extend({}, e);
    var t,
      n,
      r,
      i,
      s,
      a,
      l = [],
      u = !e.once && [],
      c = function (o) {
        for (
          t = e.memory && o, n = !0, a = i || 0, i = 0, s = l.length, r = !0;
          l && a < s;
          a++
        )
          if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        (r = !1),
          l && (u ? u.length && c(u.shift()) : t ? (l = []) : f.disable());
      },
      f = {
        add: function () {
          if (l) {
            var n = l.length;
            !(function o(t) {
              J.each(t, function (t, n) {
                var r = J.type(n);
                "function" === r
                  ? (e.unique && f.has(n)) || l.push(n)
                  : n && n.length && "string" !== r && o(n);
              });
            })(arguments),
              r ? (s = l.length) : t && ((i = n), c(t));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              J.each(arguments, function (e, t) {
                for (var n; (n = J.inArray(t, l, n)) > -1; )
                  l.splice(n, 1), r && (n <= s && s--, n <= a && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? J.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (s = 0), this;
        },
        disable: function () {
          return (l = u = t = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = void 0), t || f.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return (
            !l ||
              (n && !u) ||
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              r ? u.push(t) : c(t)),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return f;
  }),
    J.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", J.Callbacks("once memory"), "resolved"],
            ["reject", "fail", J.Callbacks("once memory"), "rejected"],
            ["notify", "progress", J.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return J.Deferred(function (n) {
                J.each(t, function (t, o) {
                  var s = J.isFunction(e[t]) && e[t];
                  i[o[1]](function () {
                    var e = s && s.apply(this, arguments);
                    e && J.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[o[0] + "With"](
                          this === r ? n.promise() : this,
                          s ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? J.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          J.each(t, function (e, o) {
            var s = o[2],
              a = o[3];
            (r[o[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = s.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = W.call(arguments),
          s = o.length,
          a = 1 !== s || (e && J.isFunction(e.promise)) ? s : 0,
          l = 1 === a ? e : J.Deferred(),
          u = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? W.call(arguments) : i),
                r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)
            o[i] && J.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(u(i, r, o))
                  .fail(l.reject)
                  .progress(u(i, n, t))
              : --a;
        return a || l.resolveWith(r, o), l.promise();
      },
    });
  var me;
  (J.fn.ready = function (e) {
    return J.ready.promise().done(e), this;
  }),
    J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? J.readyWait++ : J.ready(!0);
      },
      ready: function (e) {
        (e === !0 ? --J.readyWait : J.isReady) ||
          ((J.isReady = !0),
          (e !== !0 && --J.readyWait > 0) ||
            (me.resolveWith(Q, [J]),
            J.fn.triggerHandler &&
              (J(Q).triggerHandler("ready"), J(Q).off("ready"))));
      },
    }),
    (J.ready.promise = function (t) {
      return (
        me ||
          ((me = J.Deferred()),
          "complete" === Q.readyState
            ? setTimeout(J.ready)
            : (Q.addEventListener("DOMContentLoaded", s, !1),
              e.addEventListener("load", s, !1))),
        me.promise(t)
      );
    }),
    J.ready.promise();
  var ge = (J.access = function (e, t, n, r, i, o, s) {
    var a = 0,
      l = e.length,
      u = null == n;
    if ("object" === J.type(n)) {
      i = !0;
      for (a in n) J.access(e, t, a, n[a], !0, o, s);
    } else if (
      void 0 !== r &&
      ((i = !0),
      J.isFunction(r) || (s = !0),
      u &&
        (s
          ? (t.call(e, r), (t = null))
          : ((u = t),
            (t = function (e, t, n) {
              return u.call(J(e), n);
            }))),
      t)
    )
      for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
  });
  (J.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (a.uid = 1),
    (a.accepts = J.acceptData),
    (a.prototype = {
      key: function (e) {
        if (!a.accepts(e)) return 0;
        var t = {},
          n = e[this.expando];
        if (!n) {
          n = a.uid++;
          try {
            (t[this.expando] = { value: n }), Object.defineProperties(e, t);
          } catch (r) {
            (t[this.expando] = n), J.extend(e, t);
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n;
      },
      set: function (e, t, n) {
        var r,
          i = this.key(e),
          o = this.cache[i];
        if ("string" == typeof t) o[t] = n;
        else if (J.isEmptyObject(o)) J.extend(this.cache[i], t);
        else for (r in t) o[r] = t[r];
        return o;
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? ((r = this.get(e, t)),
            void 0 !== r ? r : this.get(e, J.camelCase(t)))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          i,
          o = this.key(e),
          s = this.cache[o];
        if (void 0 === t) this.cache[o] = {};
        else {
          J.isArray(t)
            ? (r = t.concat(t.map(J.camelCase)))
            : ((i = J.camelCase(t)),
              t in s
                ? (r = [t, i])
                : ((r = i), (r = r in s ? [r] : r.match(he) || []))),
            (n = r.length);
          for (; n--; ) delete s[r[n]];
        }
      },
      hasData: function (e) {
        return !J.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var ve = new a(),
    ye = new a(),
    xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _e = /([A-Z])/g;
  J.extend({
    hasData: function (e) {
      return ye.hasData(e) || ve.hasData(e);
    },
    data: function (e, t, n) {
      return ye.access(e, t, n);
    },
    removeData: function (e, t) {
      ye.remove(e, t);
    },
    _data: function (e, t, n) {
      return ve.access(e, t, n);
    },
    _removeData: function (e, t) {
      ve.remove(e, t);
    },
  }),
    J.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = ye.get(o)), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                ((r = s[n].name),
                0 === r.indexOf("data-") &&
                  ((r = J.camelCase(r.slice(5))), l(o, r, i[r])));
            ve.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              ye.set(this, e);
            })
          : ge(
              this,
              function (t) {
                var n,
                  r = J.camelCase(e);
                if (o && void 0 === t) {
                  if (((n = ye.get(o, e)), void 0 !== n)) return n;
                  if (((n = ye.get(o, r)), void 0 !== n)) return n;
                  if (((n = l(o, r, void 0)), void 0 !== n)) return n;
                } else
                  this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, t),
                      e.indexOf("-") !== -1 &&
                        void 0 !== n &&
                        ye.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          ye.remove(this, e);
        });
      },
    }),
    J.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = ve.get(e, t)),
            n &&
              (!r || J.isArray(n)
                ? (r = ve.access(e, t, J.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = J.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = J._queueHooks(e, t),
          s = function () {
            J.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ve.get(e, n) ||
          ve.access(e, n, {
            empty: J.Callbacks("once memory").add(function () {
              ve.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    J.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? J.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          J.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = J.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = ve.get(o[s], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    we = ["Top", "Right", "Bottom", "Left"],
    Te = function (e, t) {
      return (
        (e = t || e),
        "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
      );
    },
    ke = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = Q.createDocumentFragment(),
      t = e.appendChild(Q.createElement("div")),
      n = Q.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Se = "undefined";
  Z.focusinBubbles = "onfocusin" in e;
  var Ce = /^key/,
    Pe = /^(?:mouse|pointer|contextmenu)|click/,
    Ae = /^(?:focusinfocus|focusoutblur)$/,
    Ne = /^([^.]*)(?:\.(.+)|)$/;
  (J.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        p,
        h,
        d,
        m,
        g = ve.get(e);
      if (g)
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)),
            n.guid || (n.guid = J.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return typeof J !== Se && J.event.triggered !== t.type
                    ? J.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(he) || [""],
            u = t.length;
          u--;

        )
          (a = Ne.exec(t[u]) || []),
            (h = m = a[1]),
            (d = (a[2] || "").split(".").sort()),
            h &&
              ((f = J.event.special[h] || {}),
              (h = (i ? f.delegateType : f.bindType) || h),
              (f = J.event.special[h] || {}),
              (c = J.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && J.expr.match.needsContext.test(i),
                  namespace: d.join("."),
                },
                o
              )),
              (p = l[h]) ||
                ((p = l[h] = []),
                (p.delegateCount = 0),
                (f.setup && f.setup.call(e, r, d, s) !== !1) ||
                  (e.addEventListener && e.addEventListener(h, s, !1))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (J.event.global[h] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        p,
        h,
        d,
        m,
        g = ve.hasData(e) && ve.get(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(he) || [""], u = t.length; u--; )
          if (
            ((a = Ne.exec(t[u]) || []),
            (h = m = a[1]),
            (d = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = J.event.special[h] || {},
                h = (r ? f.delegateType : f.bindType) || h,
                p = l[h] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && f.teardown.call(e, d, g.handle) !== !1) ||
                J.removeEvent(e, h, g.handle),
              delete l[h]);
          } else for (h in l) J.event.remove(e, h + t[u], n, r, !0);
        J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        p = [r || Q],
        h = G.call(t, "type") ? t.type : t,
        d = G.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = a = r = r || Q),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ae.test(h + J.event.triggered) &&
          (h.indexOf(".") >= 0 &&
            ((d = h.split(".")), (h = d.shift()), d.sort()),
          (u = h.indexOf(":") < 0 && "on" + h),
          (t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = d.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : J.makeArray(n, [t])),
          (f = J.event.special[h] || {}),
          i || !f.trigger || f.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !f.noBubble && !J.isWindow(r)) {
          for (
            l = f.delegateType || h, Ae.test(l + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (a = s);
          a === (r.ownerDocument || Q) &&
            p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? l : f.bindType || h),
            (c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle")),
            c && c.apply(s, n),
            (c = u && s[u]),
            c &&
              c.apply &&
              J.acceptData(s) &&
              ((t.result = c.apply(s, n)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = h),
          i ||
            t.isDefaultPrevented() ||
            (f._default && f._default.apply(p.pop(), n) !== !1) ||
            !J.acceptData(r) ||
            (u &&
              J.isFunction(r[h]) &&
              !J.isWindow(r) &&
              ((a = r[u]),
              a && (r[u] = null),
              (J.event.triggered = h),
              r[h](),
              (J.event.triggered = void 0),
              a && (r[u] = a))),
          t.result
        );
      }
    },
    dispatch: function (e) {
      e = J.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = [],
        a = W.call(arguments),
        l = (ve.get(this, "events") || {})[e.type] || [],
        u = J.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !u.preDispatch || u.preDispatch.call(this, e) !== !1)
      ) {
        for (
          s = J.event.handlers.call(this, e, l), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              (r = (
                (J.event.special[o.origType] || {}).handle || o.handler
              ).apply(i.elem, a)),
              void 0 !== r &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        l = e.target;
      if (a && l.nodeType && (!e.button || "click" !== e.type))
        for (; l !== this; l = l.parentNode || this)
          if (l.disabled !== !0 || "click" !== e.type) {
            for (r = [], n = 0; n < a; n++)
              (o = t[n]),
                (i = o.selector + " "),
                void 0 === r[i] &&
                  (r[i] = o.needsContext
                    ? J(i, this).index(l) >= 0
                    : J.find(i, this, null, [l]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: l, handlers: r });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = e.target.ownerDocument || Q),
            (r = n.documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[J.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            Pe.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new J.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = Q),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== f() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === f() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            J.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return J.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = J.extend(new J.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? J.event.trigger(i, null, t) : J.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (J.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (J.Event = function (e, t) {
      return this instanceof J.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? u
                  : c))
            : (this.type = e),
          t && J.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || J.now()),
          void (this[J.expando] = !0))
        : new J.Event(e, t);
    }),
    (J.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = u),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = u),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = u),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    J.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        J.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || J.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    Z.focusinBubbles ||
      J.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          J.event.simulate(t, e.target, J.event.fix(e), !0);
        };
        J.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = ve.access(r, t);
            i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = ve.access(r, t) - 1;
            i
              ? ve.access(r, t, i)
              : (r.removeEventListener(e, n, !0), ve.remove(r, t));
          },
        };
      }),
    J.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          "string" != typeof t && ((n = n || t), (t = void 0));
          for (s in e) this.on(s, t, n, e[s], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          r === !1)
        )
          r = c;
        else if (!r) return this;
        return (
          1 === i &&
            ((o = r),
            (r = function (e) {
              return J().off(e), o.apply(this, arguments);
            }),
            (r.guid = o.guid || (o.guid = J.guid++))),
          this.each(function () {
            J.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            J(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
          n === !1 && (n = c),
          this.each(function () {
            J.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          J.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return J.event.trigger(e, t, n, !0);
      },
    });
  var Oe =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ee = /<([\w:]+)/,
    De = /<|&#?\w+;/,
    Re = /<(?:script|style|link)/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Fe = /^$|\/(?:java|ecma)script/i,
    Le = /^true\/(.*)/,
    Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    qe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (qe.optgroup = qe.option),
    (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
    (qe.th = qe.td),
    J.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.cloneNode(!0),
          l = J.contains(e.ownerDocument, e);
        if (
          !(
            Z.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            J.isXMLDoc(e)
          )
        )
          for (s = v(a), o = v(e), r = 0, i = o.length; r < i; r++)
            y(o[r], s[r]);
        if (t)
          if (n)
            for (o = o || v(e), s = s || v(a), r = 0, i = o.length; r < i; r++)
              g(o[r], s[r]);
          else g(e, a);
        return (
          (s = v(a, "script")), s.length > 0 && m(s, !l && v(e, "script")), a
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i,
            o,
            s,
            a,
            l,
            u,
            c = t.createDocumentFragment(),
            f = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if (((i = e[p]), i || 0 === i))
            if ("object" === J.type(i)) J.merge(f, i.nodeType ? [i] : i);
            else if (De.test(i)) {
              for (
                o = o || c.appendChild(t.createElement("div")),
                  s = (Ee.exec(i) || ["", ""])[1].toLowerCase(),
                  a = qe[s] || qe._default,
                  o.innerHTML = a[1] + i.replace(Oe, "<$1></$2>") + a[2],
                  u = a[0];
                u--;

              )
                o = o.lastChild;
              J.merge(f, o.childNodes),
                (o = c.firstChild),
                (o.textContent = "");
            } else f.push(t.createTextNode(i));
        for (c.textContent = "", p = 0; (i = f[p++]); )
          if (
            (!r || J.inArray(i, r) === -1) &&
            ((l = J.contains(i.ownerDocument, i)),
            (o = v(c.appendChild(i), "script")),
            l && m(o),
            n)
          )
            for (u = 0; (i = o[u++]); ) Fe.test(i.type || "") && n.push(i);
        return c;
      },
      cleanData: function (e) {
        for (
          var t, n, r, i, o = J.event.special, s = 0;
          void 0 !== (n = e[s]);
          s++
        ) {
          if (
            J.acceptData(n) &&
            ((i = n[ve.expando]), i && (t = ve.cache[i]))
          ) {
            if (t.events)
              for (r in t.events)
                o[r] ? J.event.remove(n, r) : J.removeEvent(n, r, t.handle);
            ve.cache[i] && delete ve.cache[i];
          }
          delete ye.cache[n[ye.expando]];
        }
      },
    }),
    J.fn.extend({
      text: function (e) {
        return ge(
          this,
          function (e) {
            return void 0 === e
              ? J.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? J.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || J.cleanData(v(n)),
            n.parentNode &&
              (t && J.contains(n.ownerDocument, n) && m(v(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (J.cleanData(v(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return J.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ge(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Re.test(e) &&
              !qe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(Oe, "<$1></$2>");
              try {
                for (; n < r; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (J.cleanData(v(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              J.cleanData(v(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = B.apply([], e);
        var n,
          r,
          i,
          o,
          s,
          a,
          l = 0,
          u = this.length,
          c = this,
          f = u - 1,
          p = e[0],
          m = J.isFunction(p);
        if (m || (u > 1 && "string" == typeof p && !Z.checkClone && je.test(p)))
          return this.each(function (n) {
            var r = c.eq(n);
            m && (e[0] = p.call(this, n, r.html())), r.domManip(e, t);
          });
        if (
          u &&
          ((n = J.buildFragment(e, this[0].ownerDocument, !1, this)),
          (r = n.firstChild),
          1 === n.childNodes.length && (n = r),
          r)
        ) {
          for (i = J.map(v(n, "script"), h), o = i.length; l < u; l++)
            (s = n),
              l !== f &&
                ((s = J.clone(s, !0, !0)), o && J.merge(i, v(s, "script"))),
              t.call(this[l], s, l);
          if (o)
            for (
              a = i[i.length - 1].ownerDocument, J.map(i, d), l = 0;
              l < o;
              l++
            )
              (s = i[l]),
                Fe.test(s.type || "") &&
                  !ve.access(s, "globalEval") &&
                  J.contains(a, s) &&
                  (s.src
                    ? J._evalUrl && J._evalUrl(s.src)
                    : J.globalEval(s.textContent.replace(Me, "")));
        }
        return this;
      },
    }),
    J.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        J.fn[e] = function (e) {
          for (var n, r = [], i = J(e), o = i.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)),
              J(i[s])[t](n),
              $.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var He,
    Xe = {},
    ze = /^margin/,
    Ie = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
    We = function (t) {
      return t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : e.getComputedStyle(t, null);
    };
  !(function () {
    function t() {
      (s.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
        (s.innerHTML = ""),
        i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      (n = "1%" !== t.top), (r = "4px" === t.width), i.removeChild(o);
    }
    var n,
      r,
      i = Q.documentElement,
      o = Q.createElement("div"),
      s = Q.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (Z.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (o.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      o.appendChild(s),
      e.getComputedStyle &&
        J.extend(Z, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return null == r && t(), r;
          },
          reliableMarginRight: function () {
            var t,
              n = s.appendChild(Q.createElement("div"));
            return (
              (n.style.cssText = s.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (s.style.width = "1px"),
              i.appendChild(o),
              (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
              i.removeChild(o),
              s.removeChild(n),
              t
            );
          },
        }));
  })(),
    (J.swap = function (e, t, n, r) {
      var i,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = s[o];
      return i;
    });
  var Be = /^(none|table(?!-c[ea]).+)/,
    $e = new RegExp("^(" + be + ")(.*)$", "i"),
    Ye = new RegExp("^([+-])=(" + be + ")", "i"),
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ue = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "O", "Moz", "ms"];
  J.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = b(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = J.camelCase(t),
          l = e.style;
        return (
          (t = J.cssProps[a] || (J.cssProps[a] = T(l, a))),
          (s = J.cssHooks[t] || J.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : l[t]
            : ((o = typeof n),
              "string" === o &&
                (i = Ye.exec(n)) &&
                ((n = (i[1] + 1) * i[2] + parseFloat(J.css(e, t))),
                (o = "number")),
              null != n &&
                n === n &&
                ("number" !== o || J.cssNumber[a] || (n += "px"),
                Z.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (l[t] = n)),
              void 0)
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = J.camelCase(t);
      return (
        (t = J.cssProps[a] || (J.cssProps[a] = T(e.style, a))),
        (s = J.cssHooks[t] || J.cssHooks[a]),
        s && "get" in s && (i = s.get(e, !0, n)),
        void 0 === i && (i = b(e, t, r)),
        "normal" === i && t in Ue && (i = Ue[t]),
        "" === n || n
          ? ((o = parseFloat(i)), n === !0 || J.isNumeric(o) ? o || 0 : i)
          : i
      );
    },
  }),
    J.each(["height", "width"], function (e, t) {
      J.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return Be.test(J.css(e, "display")) && 0 === e.offsetWidth
              ? J.swap(e, Ve, function () {
                  return C(e, t, r);
                })
              : C(e, t, r);
        },
        set: function (e, n, r) {
          var i = r && We(e);
          return k(
            e,
            n,
            r ? S(e, t, r, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0
          );
        },
      };
    }),
    (J.cssHooks.marginRight = w(Z.reliableMarginRight, function (e, t) {
      if (t)
        return J.swap(e, { display: "inline-block" }, b, [e, "marginRight"]);
    })),
    J.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (J.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + we[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        ze.test(e) || (J.cssHooks[e + t].set = k);
    }),
    J.fn.extend({
      css: function (e, t) {
        return ge(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (J.isArray(t)) {
              for (r = We(e), i = t.length; s < i; s++)
                o[t[s]] = J.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? J.style(e, t, n) : J.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return P(this, !0);
      },
      hide: function () {
        return P(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Te(this) ? J(this).show() : J(this).hide();
            });
      },
    }),
    (J.Tween = A),
    (A.prototype = {
      constructor: A,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (J.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = A.propHooks[this.prop];
        return e && e.get ? e.get(this) : A.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = A.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                J.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : A.propHooks._default.set(this),
          this
        );
      },
    }),
    (A.prototype.init.prototype = A.prototype),
    (A.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = J.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          J.fx.step[e.prop]
            ? J.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop])
            ? J.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (A.propHooks.scrollTop = A.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (J.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (J.fx = A.prototype.init),
    (J.fx.step = {});
  var Ze,
    Qe,
    Ke = /^(?:toggle|show|hide)$/,
    Je = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
    et = /queueHooks$/,
    tt = [D],
    nt = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Je.exec(t),
            o = (i && i[3]) || (J.cssNumber[e] ? "" : "px"),
            s =
              (J.cssNumber[e] || ("px" !== o && +r)) &&
              Je.exec(J.css(n.elem, e)),
            a = 1,
            l = 20;
          if (s && s[3] !== o) {
            (o = o || s[3]), (i = i || []), (s = +r || 1);
            do (a = a || ".5"), (s /= a), J.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && 1 !== a && --l);
          }
          return (
            i &&
              ((s = n.start = +s || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  (J.Animation = J.extend(j, {
    tweener: function (e, t) {
      J.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (nt[n] = nt[n] || []), nt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? tt.unshift(e) : tt.push(e);
    },
  })),
    (J.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? J.extend({}, e)
          : {
              complete: n || (!n && t) || (J.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !J.isFunction(t) && t),
            };
      return (
        (r.duration = J.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in J.fx.speeds
          ? J.fx.speeds[r.duration]
          : J.fx.speeds._default),
        (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          J.isFunction(r.old) && r.old.call(this),
            r.queue && J.dequeue(this, r.queue);
        }),
        r
      );
    }),
    J.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Te)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = J.isEmptyObject(e),
          o = J.speed(t, n, r),
          s = function () {
            var t = j(this, J.extend({}, e), o);
            (i || ve.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = J.timers,
              s = ve.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || J.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ve.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = J.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                J.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    J.each(["toggle", "show", "hide"], function (e, t) {
      var n = J.fn[t];
      J.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(O(t, !0), e, r, i);
      };
    }),
    J.each(
      {
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        J.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (J.timers = []),
    (J.fx.tick = function () {
      var e,
        t = 0,
        n = J.timers;
      for (Ze = J.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || J.fx.stop(), (Ze = void 0);
    }),
    (J.fx.timer = function (e) {
      J.timers.push(e), e() ? J.fx.start() : J.timers.pop();
    }),
    (J.fx.interval = 13),
    (J.fx.start = function () {
      Qe || (Qe = setInterval(J.fx.tick, J.fx.interval));
    }),
    (J.fx.stop = function () {
      clearInterval(Qe), (Qe = null);
    }),
    (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (J.fn.delay = function (e, t) {
      return (
        (e = J.fx ? J.fx.speeds[e] || e : e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = Q.createElement("input"),
        t = Q.createElement("select"),
        n = t.appendChild(Q.createElement("option"));
      (e.type = "checkbox"),
        (Z.checkOn = "" !== e.value),
        (Z.optSelected = n.selected),
        (t.disabled = !0),
        (Z.optDisabled = !n.disabled),
        (e = Q.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (Z.radioValue = "t" === e.value);
    })();
  var rt,
    it,
    ot = J.expr.attrHandle;
  J.fn.extend({
    attr: function (e, t) {
      return ge(this, J.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        J.removeAttr(this, e);
      });
    },
  }),
    J.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute === Se
            ? J.prop(e, t, n)
            : ((1 === o && J.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r = J.attrHooks[t] || (J.expr.match.bool.test(t) ? it : rt))),
              void 0 === n
                ? r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = J.find.attr(e, t)), null == i ? void 0 : i)
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void J.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(he);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = J.propFix[n] || n),
              J.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!Z.radioValue && "radio" === t && J.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (it = {
      set: function (e, t, n) {
        return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ot[t] || J.find.attr;
      ot[t] = function (e, t, r) {
        var i, o;
        return (
          r ||
            ((o = ot[t]),
            (ot[t] = i),
            (i = null != n(e, t, r) ? t.toLowerCase() : null),
            (ot[t] = o)),
          i
        );
      };
    });
  var st = /^(?:input|select|textarea|button)$/i;
  J.fn.extend({
    prop: function (e, t) {
      return ge(this, J.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[J.propFix[e] || e];
      });
    },
  }),
    J.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          o,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return (
            (o = 1 !== s || !J.isXMLDoc(e)),
            o && ((t = J.propFix[t] || t), (i = J.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    Z.optSelected ||
      (J.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    J.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        J.propFix[this.toLowerCase()] = this;
      }
    );
  var at = /[\t\r\n\f]/g;
  J.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = "string" == typeof e && e,
        l = 0,
        u = this.length;
      if (J.isFunction(e))
        return this.each(function (t) {
          J(this).addClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(he) || []; l < u; l++)
          if (
            ((n = this[l]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(at, " ") : " ")))
          ) {
            for (o = 0; (i = t[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (s = J.trim(r)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = 0 === arguments.length || ("string" == typeof e && e),
        l = 0,
        u = this.length;
      if (J.isFunction(e))
        return this.each(function (t) {
          J(this).removeClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(he) || []; l < u; l++)
          if (
            ((n = this[l]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(at, " ") : "")))
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            (s = e ? J.trim(r) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : J.isFunction(e)
        ? this.each(function (n) {
            J(this).toggleClass(e.call(this, n, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var t, r = 0, i = J(this), o = e.match(he) || [];
                (t = o[r++]);

              )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (n !== Se && "boolean" !== n) ||
                (this.className &&
                  ve.set(this, "__className__", this.className),
                (this.className =
                  this.className || e === !1
                    ? ""
                    : ve.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  });
  var lt = /\r/g;
  J.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = J.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, J(this).val()) : e),
                null == i
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : J.isArray(i) &&
                    (i = J.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  J.valHooks[this.type] ||
                  J.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (
            (t = J.valHooks[i.type] || J.valHooks[i.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(i, "value"))
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
          );
      }
    },
  }),
    J.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = J.find.attr(e, "value");
            return null != t ? t : J.trim(J.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || i < 0,
                s = o ? null : [],
                a = o ? i + 1 : r.length,
                l = i < 0 ? a : o ? i : 0;
              l < a;
              l++
            )
              if (
                ((n = r[l]),
                (n.selected || l === i) &&
                  (Z.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !J.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((t = J(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = J.makeArray(t), s = i.length;
              s--;

            )
              (r = i[s]), (r.selected = J.inArray(r.value, o) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    J.each(["radio", "checkbox"], function () {
      (J.valHooks[this] = {
        set: function (e, t) {
          if (J.isArray(t)) return (e.checked = J.inArray(J(e).val(), t) >= 0);
        },
      }),
        Z.checkOn ||
          (J.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    J.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        J.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    J.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var ut = J.now(),
    ct = /\?/;
  (J.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (J.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
      } catch (r) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          J.error("Invalid XML: " + e),
        t
      );
    });
  var ft = /#.*$/,
    pt = /([?&])_=[^&]*/,
    ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    mt = /^(?:GET|HEAD)$/,
    gt = /^\/\//,
    vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    yt = {},
    xt = {},
    _t = "*/".concat("*"),
    bt = e.location.href,
    wt = vt.exec(bt.toLowerCase()) || [];
  J.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt,
      type: "GET",
      isLocal: dt.test(wt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": _t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": J.parseJSON,
        "text xml": J.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? M(M(e, J.ajaxSettings), t) : M(J.ajaxSettings, e);
    },
    ajaxPrefilter: F(yt),
    ajaxTransport: F(xt),
    ajax: function (e, t) {
      function n(e, t, n, s) {
        var l,
          c,
          v,
          y,
          _,
          w = t;
        2 !== x &&
          ((x = 2),
          a && clearTimeout(a),
          (r = void 0),
          (o = s || ""),
          (b.readyState = e > 0 ? 4 : 0),
          (l = (e >= 200 && e < 300) || 304 === e),
          n && (y = q(f, b, n)),
          (y = H(f, y, b, l)),
          l
            ? (f.ifModified &&
                ((_ = b.getResponseHeader("Last-Modified")),
                _ && (J.lastModified[i] = _),
                (_ = b.getResponseHeader("etag")),
                _ && (J.etag[i] = _)),
              204 === e || "HEAD" === f.type
                ? (w = "nocontent")
                : 304 === e
                ? (w = "notmodified")
                : ((w = y.state), (c = y.data), (v = y.error), (l = !v)))
            : ((v = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
          (b.status = e),
          (b.statusText = (t || w) + ""),
          l ? d.resolveWith(p, [c, w, b]) : d.rejectWith(p, [b, w, v]),
          b.statusCode(g),
          (g = void 0),
          u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [b, f, l ? c : v]),
          m.fireWith(p, [b, w]),
          u &&
            (h.trigger("ajaxComplete", [b, f]),
            --J.active || J.event.trigger("ajaxStop")));
      }
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var r,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        f = J.ajaxSetup({}, t),
        p = f.context || f,
        h = f.context && (p.nodeType || p.jquery) ? J(p) : J.event,
        d = J.Deferred(),
        m = J.Callbacks("once memory"),
        g = f.statusCode || {},
        v = {},
        y = {},
        x = 0,
        _ = "canceled",
        b = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!s)
                for (s = {}; (t = ht.exec(o)); ) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === x ? o : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || ((e = y[n] = y[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return x || (f.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (x < 2) for (t in e) g[t] = [g[t], e[t]];
              else b.always(e[b.status]);
            return this;
          },
          abort: function (e) {
            var t = e || _;
            return r && r.abort(t), n(0, t), this;
          },
        };
      if (
        ((d.promise(b).complete = m.add),
        (b.success = b.done),
        (b.error = b.fail),
        (f.url = ((e || f.url || bt) + "")
          .replace(ft, "")
          .replace(gt, wt[1] + "//")),
        (f.type = t.method || t.type || f.method || f.type),
        (f.dataTypes = J.trim(f.dataType || "*")
          .toLowerCase()
          .match(he) || [""]),
        null == f.crossDomain &&
          ((l = vt.exec(f.url.toLowerCase())),
          (f.crossDomain = !(
            !l ||
            (l[1] === wt[1] &&
              l[2] === wt[2] &&
              (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                (wt[3] || ("http:" === wt[1] ? "80" : "443")))
          ))),
        f.data &&
          f.processData &&
          "string" != typeof f.data &&
          (f.data = J.param(f.data, f.traditional)),
        L(yt, f, t, b),
        2 === x)
      )
        return b;
      (u = J.event && f.global),
        u && 0 === J.active++ && J.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !mt.test(f.type)),
        (i = f.url),
        f.hasContent ||
          (f.data &&
            ((i = f.url += (ct.test(i) ? "&" : "?") + f.data), delete f.data),
          f.cache === !1 &&
            (f.url = pt.test(i)
              ? i.replace(pt, "$1_=" + ut++)
              : i + (ct.test(i) ? "&" : "?") + "_=" + ut++)),
        f.ifModified &&
          (J.lastModified[i] &&
            b.setRequestHeader("If-Modified-Since", J.lastModified[i]),
          J.etag[i] && b.setRequestHeader("If-None-Match", J.etag[i])),
        ((f.data && f.hasContent && f.contentType !== !1) || t.contentType) &&
          b.setRequestHeader("Content-Type", f.contentType),
        b.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
            : f.accepts["*"]
        );
      for (c in f.headers) b.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(p, b, f) === !1 || 2 === x))
        return b.abort();
      _ = "abort";
      for (c in { success: 1, error: 1, complete: 1 }) b[c](f[c]);
      if ((r = L(xt, f, t, b))) {
        (b.readyState = 1),
          u && h.trigger("ajaxSend", [b, f]),
          f.async &&
            f.timeout > 0 &&
            (a = setTimeout(function () {
              b.abort("timeout");
            }, f.timeout));
        try {
          (x = 1), r.send(v, n);
        } catch (w) {
          if (!(x < 2)) throw w;
          n(-1, w);
        }
      } else n(-1, "No Transport");
      return b;
    },
    getJSON: function (e, t, n) {
      return J.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return J.get(e, void 0, t, "script");
    },
  }),
    J.each(["get", "post"], function (e, t) {
      J[t] = function (e, n, r, i) {
        return (
          J.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          J.ajax({ url: e, type: t, dataType: i, data: n, success: r })
        );
      };
    }),
    (J._evalUrl = function (e) {
      return J.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    J.fn.extend({
      wrapAll: function (e) {
        var t;
        return J.isFunction(e)
          ? this.each(function (t) {
              J(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = J(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return J.isFunction(e)
          ? this.each(function (t) {
              J(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = J(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = J.isFunction(e);
        return this.each(function (n) {
          J(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (J.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (J.expr.filters.visible = function (e) {
      return !J.expr.filters.hidden(e);
    });
  var Tt = /%20/g,
    kt = /\[\]$/,
    St = /\r?\n/g,
    Ct = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  (J.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = J.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional),
      J.isArray(e) || (e.jquery && !J.isPlainObject(e)))
    )
      J.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) X(n, e[n], t, i);
    return r.join("&").replace(Tt, "+");
  }),
    J.fn.extend({
      serialize: function () {
        return J.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = J.prop(this, "elements");
          return e ? J.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !J(this).is(":disabled") &&
              Pt.test(this.nodeName) &&
              !Ct.test(e) &&
              (this.checked || !ke.test(e))
            );
          })
          .map(function (e, t) {
            var n = J(this).val();
            return null == n
              ? null
              : J.isArray(n)
              ? J.map(n, function (e) {
                  return { name: t.name, value: e.replace(St, "\r\n") };
                })
              : { name: t.name, value: n.replace(St, "\r\n") };
          })
          .get();
      },
    }),
    (J.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var At = 0,
    Nt = {},
    Ot = { 0: 200, 1223: 204 },
    Et = J.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in Nt) Nt[e]();
    }),
    (Z.cors = !!Et && "withCredentials" in Et),
    (Z.ajax = Et = !!Et),
    J.ajaxTransport(function (e) {
      var t;
      if (Z.cors || (Et && !e.crossDomain))
        return {
          send: function (n, r) {
            var i,
              o = e.xhr(),
              s = ++At;
            if (
              (o.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (i in e.xhrFields) o[i] = e.xhrFields[i];
            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
              e.crossDomain ||
                n["X-Requested-With"] ||
                (n["X-Requested-With"] = "XMLHttpRequest");
            for (i in n) o.setRequestHeader(i, n[i]);
            (t = function (e) {
              return function () {
                t &&
                  (delete Nt[s],
                  (t = o.onload = o.onerror = null),
                  "abort" === e
                    ? o.abort()
                    : "error" === e
                    ? r(o.status, o.statusText)
                    : r(
                        Ot[o.status] || o.status,
                        o.statusText,
                        "string" == typeof o.responseText
                          ? { text: o.responseText }
                          : void 0,
                        o.getAllResponseHeaders()
                      ));
              };
            }),
              (o.onload = t()),
              (o.onerror = t("error")),
              (t = Nt[s] = t("abort"));
            try {
              o.send((e.hasContent && e.data) || null);
            } catch (a) {
              if (t) throw a;
            }
          },
          abort: function () {
            t && t();
          },
        };
    }),
    J.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return J.globalEval(e), e;
        },
      },
    }),
    J.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    J.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (r, i) {
            (t = J("<script>")
              .prop({ async: !0, charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              Q.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Dt = [],
    Rt = /(=)\?(?=&|$)|\?\?/;
  J.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Dt.pop() || J.expando + "_" + ut++;
      return (this[e] = !0), e;
    },
  }),
    J.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        s,
        a =
          t.jsonp !== !1 &&
          (Rt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Rt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            J.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Rt, "$1" + i))
            : t.jsonp !== !1 &&
              (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || J.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Dt.push(i)),
              s && J.isFunction(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (J.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || Q);
      var r = se.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = J.buildFragment([e], t, i)),
          i && i.length && J(i).remove(),
          J.merge([], r.childNodes));
    });
  var jt = J.fn.load;
  (J.fn.load = function (e, t, n) {
    if ("string" != typeof e && jt) return jt.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      a >= 0 && ((r = J.trim(e.slice(a))), (e = e.slice(0, a))),
      J.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      s.length > 0 &&
        J.ajax({ url: e, type: i, dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(r ? J("<div>").append(J.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                s.each(n, o || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    J.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        J.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (J.expr.filters.animated = function (e) {
      return J.grep(J.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var Ft = e.document.documentElement;
  (J.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        l,
        u,
        c = J.css(e, "position"),
        f = J(e),
        p = {};
      "static" === c && (e.style.position = "relative"),
        (a = f.offset()),
        (o = J.css(e, "top")),
        (l = J.css(e, "left")),
        (u =
          ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1),
        u
          ? ((r = f.position()), (s = r.top), (i = r.left))
          : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
        J.isFunction(t) && (t = t.call(e, n, a)),
        null != t.top && (p.top = t.top - a.top + s),
        null != t.left && (p.left = t.left - a.left + i),
        "using" in t ? t.using.call(e, p) : f.css(p);
    },
  }),
    J.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                J.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0],
          i = { top: 0, left: 0 },
          o = r && r.ownerDocument;
        if (o)
          return (
            (t = o.documentElement),
            J.contains(t, r)
              ? (typeof r.getBoundingClientRect !== Se &&
                  (i = r.getBoundingClientRect()),
                (n = z(o)),
                {
                  top: i.top + n.pageYOffset - t.clientTop,
                  left: i.left + n.pageXOffset - t.clientLeft,
                })
              : i
          );
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === J.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                J.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += J.css(e[0], "borderTopWidth", !0)),
                (r.left += J.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - J.css(n, "marginTop", !0),
              left: t.left - r.left - J.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Ft;
            e && !J.nodeName(e, "html") && "static" === J.css(e, "position");

          )
            e = e.offsetParent;
          return e || Ft;
        });
      },
    }),
    J.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, n) {
        var r = "pageYOffset" === n;
        J.fn[t] = function (i) {
          return ge(
            this,
            function (t, i, o) {
              var s = z(t);
              return void 0 === o
                ? s
                  ? s[n]
                  : t[i]
                : void (s
                    ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset)
                    : (t[i] = o));
            },
            t,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    J.each(["top", "left"], function (e, t) {
      J.cssHooks[t] = w(Z.pixelPosition, function (e, n) {
        if (n) return (n = b(e, t)), Ie.test(n) ? J(e).position()[t] + "px" : n;
      });
    }),
    J.each({ Height: "height", Width: "width" }, function (e, t) {
      J.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          J.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              s = n || (r === !0 || i === !0 ? "margin" : "border");
            return ge(
              this,
              function (t, n, r) {
                var i;
                return J.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? J.css(t, n, s)
                  : J.style(t, n, r, s);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    (J.fn.size = function () {
      return this.length;
    }),
    (J.fn.andSelf = J.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return J;
      });
  var Lt = e.jQuery,
    Mt = e.$;
  return (
    (J.noConflict = function (t) {
      return e.$ === J && (e.$ = Mt), t && e.jQuery === J && (e.jQuery = Lt), J;
    }),
    typeof t === Se && (e.jQuery = e.$ = J),
    J
  );
}),
  (function (e, t) {
    "use strict";
    var n = (e.GreenSockGlobals = e.GreenSockGlobals || e);
    if (!n.TweenLite) {
      var r,
        i,
        o,
        s,
        a,
        l = function (e) {
          var t,
            r = e.split("."),
            i = n;
          for (t = 0; t < r.length; t++) i[r[t]] = i = i[r[t]] || {};
          return i;
        },
        u = l("com.greensock"),
        c = 1e-10,
        f = function (e) {
          var t,
            n = [],
            r = e.length;
          for (t = 0; t !== r; n.push(e[t++]));
          return n;
        },
        p = function () {},
        h = (function () {
          var e = Object.prototype.toString,
            t = e.call([]);
          return function (n) {
            return (
              null != n &&
              (n instanceof Array ||
                ("object" == typeof n && !!n.push && e.call(n) === t))
            );
          };
        })(),
        d = {},
        m = function (r, i, o, s) {
          (this.sc = d[r] ? d[r].sc : []),
            (d[r] = this),
            (this.gsClass = null),
            (this.func = o);
          var a = [];
          (this.check = function (u) {
            for (var c, f, p, h, g = i.length, v = g; --g > -1; )
              (c = d[i[g]] || new m(i[g], [])).gsClass
                ? ((a[g] = c.gsClass), v--)
                : u && c.sc.push(this);
            if (0 === v && o)
              for (
                f = ("com.greensock." + r).split("."),
                  p = f.pop(),
                  h = l(f.join("."))[p] = this.gsClass = o.apply(o, a),
                  s &&
                    ((n[p] = h),
                    "function" == typeof define && define.amd
                      ? define(
                          (e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") +
                            r.split(".").pop(),
                          [],
                          function () {
                            return h;
                          }
                        )
                      : r === t &&
                        "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = h)),
                  g = 0;
                g < this.sc.length;
                g++
              )
                this.sc[g].check();
          }),
            this.check(!0);
        },
        g = (e._gsDefine = function (e, t, n, r) {
          return new m(e, t, n, r);
        }),
        v = (u._class = function (e, t, n) {
          return (
            (t = t || function () {}),
            g(
              e,
              [],
              function () {
                return t;
              },
              n
            ),
            t
          );
        });
      g.globals = n;
      var y = [0, 0, 1, 1],
        x = [],
        _ = v(
          "easing.Ease",
          function (e, t, n, r) {
            (this._func = e),
              (this._type = n || 0),
              (this._power = r || 0),
              (this._params = t ? y.concat(t) : y);
          },
          !0
        ),
        b = (_.map = {}),
        w = (_.register = function (e, t, n, r) {
          for (
            var i,
              o,
              s,
              a,
              l = t.split(","),
              c = l.length,
              f = (n || "easeIn,easeOut,easeInOut").split(",");
            --c > -1;

          )
            for (
              o = l[c],
                i = r ? v("easing." + o, null, !0) : u.easing[o] || {},
                s = f.length;
              --s > -1;

            )
              (a = f[s]),
                (b[o + "." + a] =
                  b[a + o] =
                  i[a] =
                    e.getRatio ? e : e[a] || new e());
        });
      for (
        o = _.prototype,
          o._calcEnd = !1,
          o.getRatio = function (e) {
            if (this._func)
              return (
                (this._params[0] = e), this._func.apply(null, this._params)
              );
            var t = this._type,
              n = this._power,
              r = 1 === t ? 1 - e : 2 === t ? e : e < 0.5 ? 2 * e : 2 * (1 - e);
            return (
              1 === n
                ? (r *= r)
                : 2 === n
                ? (r *= r * r)
                : 3 === n
                ? (r *= r * r * r)
                : 4 === n && (r *= r * r * r * r),
              1 === t ? 1 - r : 2 === t ? r : e < 0.5 ? r / 2 : 1 - r / 2
            );
          },
          r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          i = r.length;
        --i > -1;

      )
        (o = r[i] + ",Power" + i),
          w(new _(null, null, 1, i), o, "easeOut", !0),
          w(
            new _(null, null, 2, i),
            o,
            "easeIn" + (0 === i ? ",easeNone" : "")
          ),
          w(new _(null, null, 3, i), o, "easeInOut");
      (b.linear = u.easing.Linear.easeIn), (b.swing = u.easing.Quad.easeInOut);
      var T = v("events.EventDispatcher", function (e) {
        (this._listeners = {}), (this._eventTarget = e || this);
      });
      (o = T.prototype),
        (o.addEventListener = function (e, t, n, r, i) {
          i = i || 0;
          var o,
            l,
            u = this._listeners[e],
            c = 0;
          for (
            null == u && (this._listeners[e] = u = []), l = u.length;
            --l > -1;

          )
            (o = u[l]),
              o.c === t && o.s === n
                ? u.splice(l, 1)
                : 0 === c && o.pr < i && (c = l + 1);
          u.splice(c, 0, { c: t, s: n, up: r, pr: i }),
            this !== s || a || s.wake();
        }),
        (o.removeEventListener = function (e, t) {
          var n,
            r = this._listeners[e];
          if (r)
            for (n = r.length; --n > -1; )
              if (r[n].c === t) return void r.splice(n, 1);
        }),
        (o.dispatchEvent = function (e) {
          var t,
            n,
            r,
            i = this._listeners[e];
          if (i)
            for (t = i.length, n = this._eventTarget; --t > -1; )
              (r = i[t]),
                r &&
                  (r.up
                    ? r.c.call(r.s || n, { type: e, target: n })
                    : r.c.call(r.s || n));
        });
      var k = e.requestAnimationFrame,
        S = e.cancelAnimationFrame,
        C =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        P = C();
      for (r = ["ms", "moz", "webkit", "o"], i = r.length; --i > -1 && !k; )
        (k = e[r[i] + "RequestAnimationFrame"]),
          (S =
            e[r[i] + "CancelAnimationFrame"] ||
            e[r[i] + "CancelRequestAnimationFrame"]);
      v("Ticker", function (e, t) {
        var n,
          r,
          i,
          o,
          l,
          u = this,
          f = C(),
          h = t !== !1 && k,
          d = 500,
          m = 33,
          g = "tick",
          v = function (e) {
            var t,
              s,
              a = C() - P;
            a > d && (f += a - m),
              (P += a),
              (u.time = (P - f) / 1e3),
              (t = u.time - l),
              (!n || t > 0 || e === !0) &&
                (u.frame++, (l += t + (t >= o ? 0.004 : o - t)), (s = !0)),
              e !== !0 && (i = r(v)),
              s && u.dispatchEvent(g);
          };
        T.call(u),
          (u.time = u.frame = 0),
          (u.tick = function () {
            v(!0);
          }),
          (u.lagSmoothing = function (e, t) {
            (d = e || 1 / c), (m = Math.min(t, d, 0));
          }),
          (u.sleep = function () {
            null != i &&
              (h && S ? S(i) : clearTimeout(i),
              (r = p),
              (i = null),
              u === s && (a = !1));
          }),
          (u.wake = function () {
            null !== i ? u.sleep() : u.frame > 10 && (P = C() - d + 5),
              (r =
                0 === n
                  ? p
                  : h && k
                  ? k
                  : function (e) {
                      return setTimeout(e, (1e3 * (l - u.time) + 1) | 0);
                    }),
              u === s && (a = !0),
              v(2);
          }),
          (u.fps = function (e) {
            return arguments.length
              ? ((n = e),
                (o = 1 / (n || 60)),
                (l = this.time + o),
                void u.wake())
              : n;
          }),
          (u.useRAF = function (e) {
            return arguments.length ? (u.sleep(), (h = e), void u.fps(n)) : h;
          }),
          u.fps(e),
          setTimeout(function () {
            h && (!i || u.frame < 5) && u.useRAF(!1);
          }, 1500);
      }),
        (o = u.Ticker.prototype = new u.events.EventDispatcher()),
        (o.constructor = u.Ticker);
      var A = v("core.Animation", function (e, t) {
        if (
          ((this.vars = t = t || {}),
          (this._duration = this._totalDuration = e || 0),
          (this._delay = Number(t.delay) || 0),
          (this._timeScale = 1),
          (this._active = t.immediateRender === !0),
          (this.data = t.data),
          (this._reversed = t.reversed === !0),
          W)
        ) {
          a || s.wake();
          var n = this.vars.useFrames ? I : W;
          n.add(this, n._time), this.vars.paused && this.paused(!0);
        }
      });
      (s = A.ticker = new u.Ticker()),
        (o = A.prototype),
        (o._dirty = o._gc = o._initted = o._paused = !1),
        (o._totalTime = o._time = 0),
        (o._rawPrevTime = -1),
        (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
        (o._paused = !1);
      var N = function () {
        a && C() - P > 2e3 && s.wake(), setTimeout(N, 2e3);
      };
      N(),
        (o.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (o.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (o.resume = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!1);
        }),
        (o.seek = function (e, t) {
          return this.totalTime(Number(e), t !== !1);
        }),
        (o.restart = function (e, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(e ? -this._delay : 0, t !== !1, !0);
        }),
        (o.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (o.render = function (e, t, n) {}),
        (o.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (!this._gc && this.timeline) || this._enabled(!0),
            this
          );
        }),
        (o.isActive = function () {
          var e,
            t = this._timeline,
            n = this._startTime;
          return (
            !t ||
            (!this._gc &&
              !this._paused &&
              t.isActive() &&
              (e = t.rawTime()) >= n &&
              e < n + this.totalDuration() / this._timeScale)
          );
        }),
        (o._enabled = function (e, t) {
          return (
            a || s.wake(),
            (this._gc = !e),
            (this._active = this.isActive()),
            t !== !0 &&
              (e && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !e && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (o._kill = function (e, t) {
          return this._enabled(!1, !1);
        }),
        (o.kill = function (e, t) {
          return this._kill(e, t), this;
        }),
        (o._uncache = function (e) {
          for (var t = e ? this : this.timeline; t; )
            (t._dirty = !0), (t = t.timeline);
          return this;
        }),
        (o._swapSelfInParams = function (e) {
          for (var t = e.length, n = e.concat(); --t > -1; )
            "{self}" === e[t] && (n[t] = this);
          return n;
        }),
        (o.eventCallback = function (e, t, n, r) {
          if ("on" === (e || "").substr(0, 2)) {
            var i = this.vars;
            if (1 === arguments.length) return i[e];
            null == t
              ? delete i[e]
              : ((i[e] = t),
                (i[e + "Params"] =
                  h(n) && n.join("").indexOf("{self}") !== -1
                    ? this._swapSelfInParams(n)
                    : n),
                (i[e + "Scope"] = r)),
              "onUpdate" === e && (this._onUpdate = t);
          }
          return this;
        }),
        (o.delay = function (e) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (o.duration = function (e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== e &&
                this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (o.totalDuration = function (e) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(e) : this._totalDuration
          );
        }),
        (o.time = function (e, t) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(e > this._duration ? this._duration : e, t))
            : this._time;
        }),
        (o.totalTime = function (e, t, n) {
          if ((a || s.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (e < 0 && !n && (e += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var r = this._totalDuration,
                i = this._timeline;
              if (
                (e > r && !n && (e = r),
                (this._startTime =
                  (this._paused ? this._pauseTime : i._time) -
                  (this._reversed ? r - e : e) / this._timeScale),
                i._dirty || this._uncache(!1),
                i._timeline)
              )
                for (; i._timeline; )
                  i._timeline._time !==
                    (i._startTime + i._totalTime) / i._timeScale &&
                    i.totalTime(i._totalTime, !0),
                    (i = i._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime === e && 0 !== this._duration) ||
                (this.render(e, t, !1), j.length && B());
          }
          return this;
        }),
        (o.progress = o.totalProgress =
          function (e, t) {
            return arguments.length
              ? this.totalTime(this.duration() * e, t)
              : this._time / this.duration();
          }),
        (o.startTime = function (e) {
          return arguments.length
            ? (e !== this._startTime &&
                ((this._startTime = e),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, e - this._delay)),
              this)
            : this._startTime;
        }),
        (o.endTime = function (e) {
          return (
            this._startTime +
            (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (o.timeScale = function (e) {
          if (!arguments.length) return this._timeScale;
          if (
            ((e = e || c), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var t = this._pauseTime,
              n = t || 0 === t ? t : this._timeline.totalTime();
            this._startTime = n - ((n - this._startTime) * this._timeScale) / e;
          }
          return (this._timeScale = e), this._uncache(!1);
        }),
        (o.reversed = function (e) {
          return arguments.length
            ? (e != this._reversed &&
                ((this._reversed = e),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (o.paused = function (e) {
          if (!arguments.length) return this._paused;
          if (e != this._paused && this._timeline) {
            a || e || s.wake();
            var t = this._timeline,
              n = t.rawTime(),
              r = n - this._pauseTime;
            !e &&
              t.smoothChildTiming &&
              ((this._startTime += r), this._uncache(!1)),
              (this._pauseTime = e ? n : null),
              (this._paused = e),
              (this._active = this.isActive()),
              !e &&
                0 !== r &&
                this._initted &&
                this.duration() &&
                this.render(
                  t.smoothChildTiming
                    ? this._totalTime
                    : (n - this._startTime) / this._timeScale,
                  !0,
                  !0
                );
          }
          return this._gc && !e && this._enabled(!0, !1), this;
        });
      var O = v("core.SimpleTimeline", function (e) {
        A.call(this, 0, e),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (o = O.prototype = new A()),
        (o.constructor = O),
        (o.kill()._gc = !1),
        (o._first = o._last = o._recent = null),
        (o._sortChildren = !1),
        (o.add = o.insert =
          function (e, t, n, r) {
            var i, o;
            if (
              ((e._startTime = Number(t || 0) + e._delay),
              e._paused &&
                this !== e._timeline &&
                (e._pauseTime =
                  e._startTime +
                  (this.rawTime() - e._startTime) / e._timeScale),
              e.timeline && e.timeline._remove(e, !0),
              (e.timeline = e._timeline = this),
              e._gc && e._enabled(!0, !0),
              (i = this._last),
              this._sortChildren)
            )
              for (o = e._startTime; i && i._startTime > o; ) i = i._prev;
            return (
              i
                ? ((e._next = i._next), (i._next = e))
                : ((e._next = this._first), (this._first = e)),
              e._next ? (e._next._prev = e) : (this._last = e),
              (e._prev = i),
              (this._recent = e),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (o._remove = function (e, t) {
          return (
            e.timeline === this &&
              (t || e._enabled(!1, !0),
              e._prev
                ? (e._prev._next = e._next)
                : this._first === e && (this._first = e._next),
              e._next
                ? (e._next._prev = e._prev)
                : this._last === e && (this._last = e._prev),
              (e._next = e._prev = e.timeline = null),
              e === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (o.render = function (e, t, n) {
          var r,
            i = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = e; i; )
            (r = i._next),
              (i._active || (e >= i._startTime && !i._paused)) &&
                (i._reversed
                  ? i.render(
                      (i._dirty ? i.totalDuration() : i._totalDuration) -
                        (e - i._startTime) * i._timeScale,
                      t,
                      n
                    )
                  : i.render((e - i._startTime) * i._timeScale, t, n)),
              (i = r);
        }),
        (o.rawTime = function () {
          return a || s.wake(), this._totalTime;
        });
      var E = v(
          "TweenLite",
          function (t, n, r) {
            if (
              (A.call(this, n, r),
              (this.render = E.prototype.render),
              null == t)
            )
              throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : E.selector(t) || t;
            var i,
              o,
              s,
              a =
                t.jquery ||
                (t.length &&
                  t !== e &&
                  t[0] &&
                  (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))),
              l = this.vars.overwrite;
            if (
              ((this._overwrite = l =
                null == l
                  ? z[E.defaultOverwrite]
                  : "number" == typeof l
                  ? l >> 0
                  : z[l]),
              (a || t instanceof Array || (t.push && h(t))) &&
                "number" != typeof t[0])
            )
              for (
                this._targets = s = f(t),
                  this._propLookup = [],
                  this._siblings = [],
                  i = 0;
                i < s.length;
                i++
              )
                (o = s[i]),
                  o
                    ? "string" != typeof o
                      ? o.length &&
                        o !== e &&
                        o[0] &&
                        (o[0] === e ||
                          (o[0].nodeType && o[0].style && !o.nodeType))
                        ? (s.splice(i--, 1),
                          (this._targets = s = s.concat(f(o))))
                        : ((this._siblings[i] = $(o, this, !1)),
                          1 === l &&
                            this._siblings[i].length > 1 &&
                            V(o, this, null, 1, this._siblings[i]))
                      : ((o = s[i--] = E.selector(o)),
                        "string" == typeof o && s.splice(i + 1, 1))
                    : s.splice(i--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = $(t, this, !1)),
                1 === l &&
                  this._siblings.length > 1 &&
                  V(t, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === n &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -c), this.render(-this._delay));
          },
          !0
        ),
        D = function (t) {
          return (
            t &&
            t.length &&
            t !== e &&
            t[0] &&
            (t[0] === e || (t[0].nodeType && t[0].style && !t.nodeType))
          );
        },
        R = function (e, t) {
          var n,
            r = {};
          for (n in e)
            X[n] ||
              (n in t &&
                "transform" !== n &&
                "x" !== n &&
                "y" !== n &&
                "width" !== n &&
                "height" !== n &&
                "className" !== n &&
                "border" !== n) ||
              !(!M[n] || (M[n] && M[n]._autoCSS)) ||
              ((r[n] = e[n]), delete e[n]);
          e.css = r;
        };
      (o = E.prototype = new A()),
        (o.constructor = E),
        (o.kill()._gc = !1),
        (o.ratio = 0),
        (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
        (o._notifyPluginsOfEnabled = o._lazy = !1),
        (E.version = "1.15.1"),
        (E.defaultEase = o._ease = new _(null, null, 1, 1)),
        (E.defaultOverwrite = "auto"),
        (E.ticker = s),
        (E.autoSleep = !0),
        (E.lagSmoothing = function (e, t) {
          s.lagSmoothing(e, t);
        }),
        (E.selector =
          e.$ ||
          e.jQuery ||
          function (t) {
            var n = e.$ || e.jQuery;
            return n
              ? ((E.selector = n), n(t))
              : "undefined" == typeof document
              ? t
              : document.querySelectorAll
              ? document.querySelectorAll(t)
              : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
          });
      var j = [],
        F = {},
        L = (E._internals = { isArray: h, isSelector: D, lazyTweens: j }),
        M = (E._plugins = {}),
        q = (L.tweenLookup = {}),
        H = 0,
        X = (L.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
        }),
        z = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        I = (A._rootFramesTimeline = new O()),
        W = (A._rootTimeline = new O()),
        B = (L.lazyRender = function () {
          var e,
            t = j.length;
          for (F = {}; --t > -1; )
            (e = j[t]),
              e &&
                e._lazy !== !1 &&
                (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
          j.length = 0;
        });
      (W._startTime = s.time),
        (I._startTime = s.frame),
        (W._active = I._active = !0),
        setTimeout(B, 1),
        (A._updateRoot = E.render =
          function () {
            var e, t, n;
            if (
              (j.length && B(),
              W.render((s.time - W._startTime) * W._timeScale, !1, !1),
              I.render((s.frame - I._startTime) * I._timeScale, !1, !1),
              j.length && B(),
              !(s.frame % 120))
            ) {
              for (n in q) {
                for (t = q[n].tweens, e = t.length; --e > -1; )
                  t[e]._gc && t.splice(e, 1);
                0 === t.length && delete q[n];
              }
              if (
                ((n = W._first),
                (!n || n._paused) &&
                  E.autoSleep &&
                  !I._first &&
                  1 === s._listeners.tick.length)
              ) {
                for (; n && n._paused; ) n = n._next;
                n || s.sleep();
              }
            }
          }),
        s.addEventListener("tick", A._updateRoot);
      var $ = function (e, t, n) {
          var r,
            i,
            o = e._gsTweenID;
          if (
            (q[o || (e._gsTweenID = o = "t" + H++)] ||
              (q[o] = { target: e, tweens: [] }),
            t && ((r = q[o].tweens), (r[(i = r.length)] = t), n))
          )
            for (; --i > -1; ) r[i] === t && r.splice(i, 1);
          return q[o].tweens;
        },
        Y = function (e, t, n, r) {
          var i,
            o,
            s = e.vars.onOverwrite;
          return (
            s && (i = s(e, t, n, r)),
            (s = E.onOverwrite),
            s && (o = s(e, t, n, r)),
            i !== !1 && o !== !1
          );
        },
        V = function (e, t, n, r, i) {
          var o, s, a, l;
          if (1 === r || r >= 4) {
            for (l = i.length, o = 0; o < l; o++)
              if ((a = i[o]) !== t)
                a._gc || (Y(a, t) && a._enabled(!1, !1) && (s = !0));
              else if (5 === r) break;
            return s;
          }
          var u,
            f = t._startTime + c,
            p = [],
            h = 0,
            d = 0 === t._duration;
          for (o = i.length; --o > -1; )
            (a = i[o]) === t ||
              a._gc ||
              a._paused ||
              (a._timeline !== t._timeline
                ? ((u = u || U(t, 0, d)), 0 === U(a, u, d) && (p[h++] = a))
                : a._startTime <= f &&
                  a._startTime + a.totalDuration() / a._timeScale > f &&
                  (((d || !a._initted) && f - a._startTime <= 2e-10) ||
                    (p[h++] = a)));
          for (o = h; --o > -1; )
            if (
              ((a = p[o]),
              2 === r && a._kill(n, e, t) && (s = !0),
              2 !== r || (!a._firstPT && a._initted))
            ) {
              if (2 !== r && !Y(a, t)) continue;
              a._enabled(!1, !1) && (s = !0);
            }
          return s;
        },
        U = function (e, t, n) {
          for (
            var r = e._timeline, i = r._timeScale, o = e._startTime;
            r._timeline;

          ) {
            if (((o += r._startTime), (i *= r._timeScale), r._paused))
              return -100;
            r = r._timeline;
          }
          return (
            (o /= i),
            o > t
              ? o - t
              : (n && o === t) || (!e._initted && o - t < 2 * c)
              ? c
              : (o += e.totalDuration() / e._timeScale / i) > t + c
              ? 0
              : o - t - c
          );
        };
      (o._init = function () {
        var e,
          t,
          n,
          r,
          i,
          o = this.vars,
          s = this._overwrittenProps,
          a = this._duration,
          l = !!o.immediateRender,
          u = o.ease;
        if (o.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (i = {});
          for (r in o.startAt) i[r] = o.startAt[r];
          if (
            ((i.overwrite = !1),
            (i.immediateRender = !0),
            (i.lazy = l && o.lazy !== !1),
            (i.startAt = i.delay = null),
            (this._startAt = E.to(this.target, 0, i)),
            l)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== a) return;
        } else if (o.runBackwards && 0 !== a)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (l = !1), (n = {});
            for (r in o) (X[r] && "autoCSS" !== r) || (n[r] = o[r]);
            if (
              ((n.overwrite = 0),
              (n.data = "isFromStart"),
              (n.lazy = l && o.lazy !== !1),
              (n.immediateRender = l),
              (this._startAt = E.to(this.target, 0, n)),
              l)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u =
            u
              ? u instanceof _
                ? u
                : "function" == typeof u
                ? new _(u, o.easeParams)
                : b[u] || E.defaultEase
              : E.defaultEase),
          o.easeParams instanceof Array &&
            u.config &&
            (this._ease = u.config.apply(u, o.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (e = this._targets.length; --e > -1; )
            this._initProps(
              this._targets[e],
              (this._propLookup[e] = {}),
              this._siblings[e],
              s ? s[e] : null
            ) && (t = !0);
        else
          t = this._initProps(this.target, this._propLookup, this._siblings, s);
        if (
          (t && E._onPluginEvent("_onInitAllProps", this),
          s &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          o.runBackwards)
        )
          for (n = this._firstPT; n; )
            (n.s += n.c), (n.c = -n.c), (n = n._next);
        (this._onUpdate = o.onUpdate), (this._initted = !0);
      }),
        (o._initProps = function (t, n, r, i) {
          var o, s, a, l, u, c;
          if (null == t) return !1;
          F[t._gsTweenID] && B(),
            this.vars.css ||
              (t.style &&
                t !== e &&
                t.nodeType &&
                M.css &&
                this.vars.autoCSS !== !1 &&
                R(this.vars, t));
          for (o in this.vars) {
            if (((c = this.vars[o]), X[o]))
              c &&
                (c instanceof Array || (c.push && h(c))) &&
                c.join("").indexOf("{self}") !== -1 &&
                (this.vars[o] = c = this._swapSelfInParams(c, this));
            else if (
              M[o] &&
              (l = new M[o]())._onInitTween(t, this.vars[o], this)
            ) {
              for (
                this._firstPT = u =
                  {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: o,
                    pg: !0,
                    pr: l._priority,
                  },
                  s = l._overwriteProps.length;
                --s > -1;

              )
                n[l._overwriteProps[s]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (a = !0),
                (l._onDisable || l._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT =
                n[o] =
                u =
                  {
                    _next: this._firstPT,
                    t: t,
                    p: o,
                    f: "function" == typeof t[o],
                    n: o,
                    pg: !1,
                    pr: 0,
                  }),
                (u.s = u.f
                  ? t[
                      o.indexOf("set") ||
                      "function" != typeof t["get" + o.substr(3)]
                        ? o
                        : "get" + o.substr(3)
                    ]()
                  : parseFloat(t[o])),
                (u.c =
                  "string" == typeof c && "=" === c.charAt(1)
                    ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2))
                    : Number(c) - u.s || 0);
            u && u._next && (u._next._prev = u);
          }
          return i && this._kill(i, t)
            ? this._initProps(t, n, r, i)
            : this._overwrite > 1 &&
              this._firstPT &&
              r.length > 1 &&
              V(t, this, n, this._overwrite, r)
            ? (this._kill(n, t), this._initProps(t, n, r, i))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (F[t._gsTweenID] = !0),
              a);
        }),
        (o.render = function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = this._time,
            l = this._duration,
            u = this._rawPrevTime;
          if (e >= l)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((r = !0), (i = "onComplete")),
              0 === l &&
                (this._initted || !this.vars.lazy || n) &&
                (this._startTime === this._timeline._duration && (e = 0),
                (0 === e || u < 0 || (u === c && "isPause" !== this.data)) &&
                  u !== e &&
                  ((n = !0), u > c && (i = "onReverseComplete")),
                (this._rawPrevTime = s = !t || e || u === e ? e : c));
          else if (e < 1e-7)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== a || (0 === l && u > 0 && u !== c)) &&
                ((i = "onReverseComplete"), (r = this._reversed)),
              e < 0 &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || n) &&
                  (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0),
                  (this._rawPrevTime = s = !t || e || u === e ? e : c))),
              this._initted || (n = !0);
          else if (((this._totalTime = this._time = e), this._easeType)) {
            var f = e / l,
              p = this._easeType,
              h = this._easePower;
            (1 === p || (3 === p && f >= 0.5)) && (f = 1 - f),
              3 === p && (f *= 2),
              1 === h
                ? (f *= f)
                : 2 === h
                ? (f *= f * f)
                : 3 === h
                ? (f *= f * f * f)
                : 4 === h && (f *= f * f * f * f),
              1 === p
                ? (this.ratio = 1 - f)
                : 2 === p
                ? (this.ratio = f)
                : e / l < 0.5
                ? (this.ratio = f / 2)
                : (this.ratio = 1 - f / 2);
          } else this.ratio = this._ease.getRatio(e / l);
          if (this._time !== a || n) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !n &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = a),
                  (this._rawPrevTime = u),
                  j.push(this),
                  void (this._lazy = [e, t])
                );
              this._time && !r
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : r &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== a &&
                    e >= 0 &&
                    (this._active = !0)),
                0 === a &&
                  (this._startAt &&
                    (e >= 0
                      ? this._startAt.render(e, t, n)
                      : i || (i = "_dummyGS")),
                  this.vars.onStart &&
                    ((0 === this._time && 0 !== l) ||
                      t ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || x
                      ))),
                o = this._firstPT;
              o;

            )
              o.f
                ? o.t[o.p](o.c * this.ratio + o.s)
                : (o.t[o.p] = o.c * this.ratio + o.s),
                (o = o._next);
            this._onUpdate &&
              (e < 0 &&
                this._startAt &&
                e !== -1e-4 &&
                this._startAt.render(e, t, n),
              t ||
                ((this._time !== a || r) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || x
                  ))),
              i &&
                ((this._gc && !n) ||
                  (e < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    e !== -1e-4 &&
                    this._startAt.render(e, t, n),
                  r &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !t &&
                    this.vars[i] &&
                    this.vars[i].apply(
                      this.vars[i + "Scope"] || this,
                      this.vars[i + "Params"] || x
                    ),
                  0 === l &&
                    this._rawPrevTime === c &&
                    s !== c &&
                    (this._rawPrevTime = 0)));
          }
        }),
        (o._kill = function (e, t, n) {
          if (
            ("all" === e && (e = null),
            null == e && (null == t || t === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          t =
            "string" != typeof t
              ? t || this._targets || this.target
              : E.selector(t) || t;
          var r, i, o, s, a, l, u, c, f;
          if ((h(t) || D(t)) && "number" != typeof t[0])
            for (r = t.length; --r > -1; ) this._kill(e, t[r]) && (l = !0);
          else {
            if (this._targets) {
              for (r = this._targets.length; --r > -1; )
                if (t === this._targets[r]) {
                  (a = this._propLookup[r] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (i = this._overwrittenProps[r] =
                      e ? this._overwrittenProps[r] || {} : "all");
                  break;
                }
            } else {
              if (t !== this.target) return !1;
              (a = this._propLookup),
                (i = this._overwrittenProps =
                  e ? this._overwrittenProps || {} : "all");
            }
            if (a) {
              if (
                ((u = e || a),
                (c =
                  e !== i &&
                  "all" !== i &&
                  e !== a &&
                  ("object" != typeof e || !e._tempKill)),
                n && (E.onOverwrite || this.vars.onOverwrite))
              ) {
                for (o in u) a[o] && (f || (f = []), f.push(o));
                if (!Y(this, n, t, f)) return !1;
              }
              for (o in u)
                (s = a[o]) &&
                  (s.pg && s.t._kill(u) && (l = !0),
                  (s.pg && 0 !== s.t._overwriteProps.length) ||
                    (s._prev
                      ? (s._prev._next = s._next)
                      : s === this._firstPT && (this._firstPT = s._next),
                    s._next && (s._next._prev = s._prev),
                    (s._next = s._prev = null)),
                  delete a[o]),
                  c && (i[o] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (o.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              E._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            A.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -c), this.render(-this._delay)),
            this
          );
        }),
        (o._enabled = function (e, t) {
          if ((a || s.wake(), e && this._gc)) {
            var n,
              r = this._targets;
            if (r)
              for (n = r.length; --n > -1; )
                this._siblings[n] = $(r[n], this, !0);
            else this._siblings = $(this.target, this, !0);
          }
          return (
            A.prototype._enabled.call(this, e, t),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
          );
        }),
        (E.to = function (e, t, n) {
          return new E(e, t, n);
        }),
        (E.from = function (e, t, n) {
          return (
            (n.runBackwards = !0),
            (n.immediateRender = 0 != n.immediateRender),
            new E(e, t, n)
          );
        }),
        (E.fromTo = function (e, t, n, r) {
          return (
            (r.startAt = n),
            (r.immediateRender =
              0 != r.immediateRender && 0 != n.immediateRender),
            new E(e, t, r)
          );
        }),
        (E.delayedCall = function (e, t, n, r, i) {
          return new E(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: !1,
            lazy: !1,
            useFrames: i,
            overwrite: 0,
          });
        }),
        (E.set = function (e, t) {
          return new E(e, 0, t);
        }),
        (E.getTweensOf = function (e, t) {
          if (null == e) return [];
          e = "string" != typeof e ? e : E.selector(e) || e;
          var n, r, i, o;
          if ((h(e) || D(e)) && "number" != typeof e[0]) {
            for (n = e.length, r = []; --n > -1; )
              r = r.concat(E.getTweensOf(e[n], t));
            for (n = r.length; --n > -1; )
              for (o = r[n], i = n; --i > -1; ) o === r[i] && r.splice(n, 1);
          } else
            for (r = $(e).concat(), n = r.length; --n > -1; )
              (r[n]._gc || (t && !r[n].isActive())) && r.splice(n, 1);
          return r;
        }),
        (E.killTweensOf = E.killDelayedCallsTo =
          function (e, t, n) {
            "object" == typeof t && ((n = t), (t = !1));
            for (var r = E.getTweensOf(e, t), i = r.length; --i > -1; )
              r[i]._kill(n, e);
          });
      var G = v(
        "plugins.TweenPlugin",
        function (e, t) {
          (this._overwriteProps = (e || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = t || 0),
            (this._super = G.prototype);
        },
        !0
      );
      if (
        ((o = G.prototype),
        (G.version = "1.10.1"),
        (G.API = 2),
        (o._firstPT = null),
        (o._addTween = function (e, t, n, r, i, o) {
          var s, a;
          if (
            null != r &&
            (s =
              "number" == typeof r || "=" !== r.charAt(1)
                ? Number(r) - n
                : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)))
          )
            return (
              (this._firstPT = a =
                {
                  _next: this._firstPT,
                  t: e,
                  p: t,
                  s: n,
                  c: s,
                  f: "function" == typeof e[t],
                  n: i || t,
                  r: o,
                }),
              a._next && (a._next._prev = a),
              a
            );
        }),
        (o.setRatio = function (e) {
          for (var t, n = this._firstPT, r = 1e-6; n; )
            (t = n.c * e + n.s),
              n.r ? (t = Math.round(t)) : t < r && t > -r && (t = 0),
              n.f ? n.t[n.p](t) : (n.t[n.p] = t),
              (n = n._next);
        }),
        (o._kill = function (e) {
          var t,
            n = this._overwriteProps,
            r = this._firstPT;
          if (null != e[this._propName]) this._overwriteProps = [];
          else for (t = n.length; --t > -1; ) null != e[n[t]] && n.splice(t, 1);
          for (; r; )
            null != e[r.n] &&
              (r._next && (r._next._prev = r._prev),
              r._prev
                ? ((r._prev._next = r._next), (r._prev = null))
                : this._firstPT === r && (this._firstPT = r._next)),
              (r = r._next);
          return !1;
        }),
        (o._roundProps = function (e, t) {
          for (var n = this._firstPT; n; )
            (e[this._propName] ||
              (null != n.n && e[n.n.split(this._propName + "_").join("")])) &&
              (n.r = t),
              (n = n._next);
        }),
        (E._onPluginEvent = function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = t._firstPT;
          if ("_onInitAllProps" === e) {
            for (; a; ) {
              for (s = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
              (a._prev = r ? r._prev : o) ? (a._prev._next = a) : (i = a),
                (a._next = r) ? (r._prev = a) : (o = a),
                (a = s);
            }
            a = t._firstPT = i;
          }
          for (; a; )
            a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0),
              (a = a._next);
          return n;
        }),
        (G.activate = function (e) {
          for (var t = e.length; --t > -1; )
            e[t].API === G.API && (M[new e[t]()._propName] = e[t]);
          return !0;
        }),
        (g.plugin = function (e) {
          if (!(e && e.propName && e.init && e.API))
            throw "illegal plugin definition.";
          var t,
            n = e.propName,
            r = e.priority || 0,
            i = e.overwriteProps,
            o = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            s = v(
              "plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin",
              function () {
                G.call(this, n, r), (this._overwriteProps = i || []);
              },
              e.global === !0
            ),
            a = (s.prototype = new G(n));
          (a.constructor = s), (s.API = e.API);
          for (t in o) "function" == typeof e[t] && (a[o[t]] = e[t]);
          return (s.version = e.version), G.activate([s]), s;
        }),
        (r = e._gsQueue))
      ) {
        for (i = 0; i < r.length; i++) r[i]();
        for (o in d)
          d[o].func ||
            e.console.log(
              "GSAP encountered missing dependency: com.greensock." + o
            );
      }
      a = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenLite"
  );
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "plugins.CSSPlugin",
    ["plugins.TweenPlugin", "TweenLite"],
    function (e, t) {
      var n,
        r,
        i,
        o,
        s = function () {
          e.call(this, "css"),
            (this._overwriteProps.length = 0),
            (this.setRatio = s.prototype.setRatio);
        },
        a = _gsScope._gsDefine.globals,
        l = {},
        u = (s.prototype = new e("css"));
      (u.constructor = s),
        (s.version = "1.15.1"),
        (s.API = 2),
        (s.defaultTransformPerspective = 0),
        (s.defaultSkewType = "compensated"),
        (u = "px"),
        (s.suffixMap = {
          top: u,
          right: u,
          bottom: u,
          left: u,
          width: u,
          height: u,
          fontSize: u,
          padding: u,
          margin: u,
          perspective: u,
          lineHeight: "",
        });
      var c,
        f,
        p,
        h,
        d,
        m,
        g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        _ = /(?:\d|\-|\+|=|#|\.)*/g,
        b = /opacity *= *([^)]*)/i,
        w = /opacity:([^;]*)/i,
        T = /alpha\(opacity *=.+?\)/i,
        k = /^(rgb|hsl)/,
        S = /([A-Z])/g,
        C = /-([a-z])/gi,
        P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        A = function (e, t) {
          return t.toUpperCase();
        },
        N = /(?:Left|Right|Width)/i,
        O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        D = /,(?=[^\)]*(?:\(|$))/gi,
        R = Math.PI / 180,
        j = 180 / Math.PI,
        F = {},
        L = document,
        M = function (e) {
          return L.createElementNS
            ? L.createElementNS("http://www.w3.org/1999/xhtml", e)
            : L.createElement(e);
        },
        q = M("div"),
        H = M("img"),
        X = (s._internals = { _specialProps: l }),
        z = navigator.userAgent,
        I = (function () {
          var e = z.indexOf("Android"),
            t = M("a");
          return (
            (p =
              z.indexOf("Safari") !== -1 &&
              z.indexOf("Chrome") === -1 &&
              (e === -1 || Number(z.substr(e + 8, 1)) > 3)),
            (d = p && Number(z.substr(z.indexOf("Version/") + 8, 1)) < 6),
            (h = z.indexOf("Firefox") !== -1),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) &&
              (m = parseFloat(RegExp.$1)),
            !!t &&
              ((t.style.cssText = "top:1px;opacity:.55;"),
              /^0.55/.test(t.style.opacity))
          );
        })(),
        W = function (e) {
          return b.test(
            "string" == typeof e
              ? e
              : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        },
        B = function (e) {
          window.console && console.log(e);
        },
        $ = "",
        Y = "",
        V = function (e, t) {
          t = t || q;
          var n,
            r,
            i = t.style;
          if (void 0 !== i[e]) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1),
              n = ["O", "Moz", "ms", "Ms", "Webkit"],
              r = 5;
            --r > -1 && void 0 === i[n[r] + e];

          );
          return r >= 0
            ? ((Y = 3 === r ? "ms" : n[r]),
              ($ = "-" + Y.toLowerCase() + "-"),
              Y + e)
            : null;
        },
        U = L.defaultView ? L.defaultView.getComputedStyle : function () {},
        G = (s.getStyle = function (e, t, n, r, i) {
          var o;
          return I || "opacity" !== t
            ? (!r && e.style[t]
                ? (o = e.style[t])
                : (n = n || U(e))
                ? (o =
                    n[t] ||
                    n.getPropertyValue(t) ||
                    n.getPropertyValue(t.replace(S, "-$1").toLowerCase()))
                : e.currentStyle && (o = e.currentStyle[t]),
              null == i ||
              (o && "none" !== o && "auto" !== o && "auto auto" !== o)
                ? o
                : i)
            : W(e);
        }),
        Z = (X.convertToPixels = function (e, n, r, i, o) {
          if ("px" === i || !i) return r;
          if ("auto" === i || !r) return 0;
          var a,
            l,
            u,
            c = N.test(n),
            f = e,
            p = q.style,
            h = r < 0;
          if ((h && (r = -r), "%" === i && n.indexOf("border") !== -1))
            a = (r / 100) * (c ? e.clientWidth : e.clientHeight);
          else {
            if (
              ((p.cssText =
                "border:0 solid red;position:" +
                G(e, "position") +
                ";line-height:0;"),
              "%" !== i && f.appendChild)
            )
              p[c ? "borderLeftWidth" : "borderTopWidth"] = r + i;
            else {
              if (
                ((f = e.parentNode || L.body),
                (l = f._gsCache),
                (u = t.ticker.frame),
                l && c && l.time === u)
              )
                return (l.width * r) / 100;
              p[c ? "width" : "height"] = r + i;
            }
            f.appendChild(q),
              (a = parseFloat(q[c ? "offsetWidth" : "offsetHeight"])),
              f.removeChild(q),
              c &&
                "%" === i &&
                s.cacheWidths !== !1 &&
                ((l = f._gsCache = f._gsCache || {}),
                (l.time = u),
                (l.width = (a / r) * 100)),
              0 !== a || o || (a = Z(e, n, r, i, !0));
          }
          return h ? -a : a;
        }),
        Q = (X.calculateOffset = function (e, t, n) {
          if ("absolute" !== G(e, "position", n)) return 0;
          var r = "left" === t ? "Left" : "Top",
            i = G(e, "margin" + r, n);
          return (
            e["offset" + r] - (Z(e, t, parseFloat(i), i.replace(_, "")) || 0)
          );
        }),
        K = function (e, t) {
          var n,
            r,
            i = {};
          if ((t = t || U(e, null)))
            for (n in t)
              (n.indexOf("Transform") !== -1 && we !== n) || (i[n] = t[n]);
          else if ((t = e.currentStyle || e.style))
            for (n in t)
              "string" == typeof n &&
                void 0 === i[n] &&
                (i[n.replace(C, A)] = t[n]);
          return (
            I || (i.opacity = W(e)),
            (r = De(e, t, !1)),
            (i.rotation = r.rotation),
            (i.skewX = r.skewX),
            (i.scaleX = r.scaleX),
            (i.scaleY = r.scaleY),
            (i.x = r.x),
            (i.y = r.y),
            Se &&
              ((i.z = r.z),
              (i.rotationX = r.rotationX),
              (i.rotationY = r.rotationY),
              (i.scaleZ = r.scaleZ)),
            i.filters && delete i.filters,
            i
          );
        },
        J = function (e, t, n, r, i) {
          var o,
            s,
            a,
            l = {},
            u = e.style;
          for (s in n)
            "cssText" !== s &&
              "length" !== s &&
              isNaN(s) &&
              (t[s] !== (o = n[s]) || (i && i[s])) &&
              s.indexOf("Origin") === -1 &&
              (("number" != typeof o && "string" != typeof o) ||
                ((l[s] =
                  "auto" !== o || ("left" !== s && "top" !== s)
                    ? ("" !== o && "auto" !== o && "none" !== o) ||
                      "string" != typeof t[s] ||
                      "" === t[s].replace(x, "")
                      ? o
                      : 0
                    : Q(e, s)),
                void 0 !== u[s] && (a = new he(u, s, u[s], a))));
          if (r) for (s in r) "className" !== s && (l[s] = r[s]);
          return { difs: l, firstMPT: a };
        },
        ee = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
        te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ne = function (e, t, n) {
          var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
            i = ee[t],
            o = i.length;
          for (n = n || U(e, null); --o > -1; )
            (r -= parseFloat(G(e, "padding" + i[o], n, !0)) || 0),
              (r -= parseFloat(G(e, "border" + i[o] + "Width", n, !0)) || 0);
          return r;
        },
        re = function (e, t) {
          (null != e && "" !== e && "auto" !== e && "auto auto" !== e) ||
            (e = "0 0");
          var n = e.split(" "),
            r =
              e.indexOf("left") !== -1
                ? "0%"
                : e.indexOf("right") !== -1
                ? "100%"
                : n[0],
            i =
              e.indexOf("top") !== -1
                ? "0%"
                : e.indexOf("bottom") !== -1
                ? "100%"
                : n[1];
          return (
            null == i
              ? (i = "center" === r ? "50%" : "0")
              : "center" === i && (i = "50%"),
            ("center" === r ||
              (isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1)) &&
              (r = "50%"),
            t &&
              ((t.oxp = r.indexOf("%") !== -1),
              (t.oyp = i.indexOf("%") !== -1),
              (t.oxr = "=" === r.charAt(1)),
              (t.oyr = "=" === i.charAt(1)),
              (t.ox = parseFloat(r.replace(x, ""))),
              (t.oy = parseFloat(i.replace(x, "")))),
            r + " " + i + (n.length > 2 ? " " + n[2] : "")
          );
        },
        ie = function (e, t) {
          return "string" == typeof e && "=" === e.charAt(1)
            ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))
            : parseFloat(e) - parseFloat(t);
        },
        oe = function (e, t) {
          return null == e
            ? t
            : "string" == typeof e && "=" === e.charAt(1)
            ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t
            : parseFloat(e);
        },
        se = function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            l,
            u = 1e-6;
          return (
            null == e
              ? (a = t)
              : "number" == typeof e
              ? (a = e)
              : ((i = 360),
                (o = e.split("_")),
                (l = "=" === e.charAt(1)),
                (s =
                  (l
                    ? parseInt(e.charAt(0) + "1", 10) *
                      parseFloat(o[0].substr(2))
                    : parseFloat(o[0])) *
                    (e.indexOf("rad") === -1 ? 1 : j) -
                  (l ? 0 : t)),
                o.length &&
                  (r && (r[n] = t + s),
                  e.indexOf("short") !== -1 &&
                    ((s %= i),
                    s !== s % (i / 2) && (s = s < 0 ? s + i : s - i)),
                  e.indexOf("_cw") !== -1 && s < 0
                    ? (s = ((s + 9999999999 * i) % i) - ((s / i) | 0) * i)
                    : e.indexOf("ccw") !== -1 &&
                      s > 0 &&
                      (s = ((s - 9999999999 * i) % i) - ((s / i) | 0) * i)),
                (a = t + s)),
            a < u && a > -u && (a = 0),
            a
          );
        },
        ae = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        le = function (e, t, n) {
          return (
            (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e),
            (255 *
              (6 * e < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) +
              0.5) |
              0
          );
        },
        ue = (s.parseColor = function (e) {
          var t, n, r, i, o, s;
          return e && "" !== e
            ? "number" == typeof e
              ? [e >> 16, (e >> 8) & 255, 255 & e]
              : ("," === e.charAt(e.length - 1) &&
                  (e = e.substr(0, e.length - 1)),
                ae[e]
                  ? ae[e]
                  : "#" === e.charAt(0)
                  ? (4 === e.length &&
                      ((t = e.charAt(1)),
                      (n = e.charAt(2)),
                      (r = e.charAt(3)),
                      (e = "#" + t + t + n + n + r + r)),
                    (e = parseInt(e.substr(1), 16)),
                    [e >> 16, (e >> 8) & 255, 255 & e])
                  : "hsl" === e.substr(0, 3)
                  ? ((e = e.match(g)),
                    (i = (Number(e[0]) % 360) / 360),
                    (o = Number(e[1]) / 100),
                    (s = Number(e[2]) / 100),
                    (n = s <= 0.5 ? s * (o + 1) : s + o - s * o),
                    (t = 2 * s - n),
                    e.length > 3 && (e[3] = Number(e[3])),
                    (e[0] = le(i + 1 / 3, t, n)),
                    (e[1] = le(i, t, n)),
                    (e[2] = le(i - 1 / 3, t, n)),
                    e)
                  : ((e = e.match(g) || ae.transparent),
                    (e[0] = Number(e[0])),
                    (e[1] = Number(e[1])),
                    (e[2] = Number(e[2])),
                    e.length > 3 && (e[3] = Number(e[3])),
                    e))
            : ae.black;
        }),
        ce = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
      for (u in ae) ce += "|" + u + "\\b";
      ce = new RegExp(ce + ")", "gi");
      var fe = function (e, t, n, r) {
          if (null == e)
            return function (e) {
              return e;
            };
          var i,
            o = t ? (e.match(ce) || [""])[0] : "",
            s = e.split(o).join("").match(y) || [],
            a = e.substr(0, e.indexOf(s[0])),
            l = ")" === e.charAt(e.length - 1) ? ")" : "",
            u = e.indexOf(" ") !== -1 ? " " : ",",
            c = s.length,
            f = c > 0 ? s[0].replace(g, "") : "";
          return c
            ? (i = t
                ? function (e) {
                    var t, p, h, d;
                    if ("number" == typeof e) e += f;
                    else if (r && D.test(e)) {
                      for (
                        d = e.replace(D, "|").split("|"), h = 0;
                        h < d.length;
                        h++
                      )
                        d[h] = i(d[h]);
                      return d.join(",");
                    }
                    if (
                      ((t = (e.match(ce) || [o])[0]),
                      (p = e.split(t).join("").match(y) || []),
                      (h = p.length),
                      c > h--)
                    )
                      for (; ++h < c; ) p[h] = n ? p[((h - 1) / 2) | 0] : s[h];
                    return (
                      a +
                      p.join(u) +
                      u +
                      t +
                      l +
                      (e.indexOf("inset") !== -1 ? " inset" : "")
                    );
                  }
                : function (e) {
                    var t, o, p;
                    if ("number" == typeof e) e += f;
                    else if (r && D.test(e)) {
                      for (
                        o = e.replace(D, "|").split("|"), p = 0;
                        p < o.length;
                        p++
                      )
                        o[p] = i(o[p]);
                      return o.join(",");
                    }
                    if (((t = e.match(y) || []), (p = t.length), c > p--))
                      for (; ++p < c; ) t[p] = n ? t[((p - 1) / 2) | 0] : s[p];
                    return a + t.join(u) + l;
                  })
            : function (e) {
                return e;
              };
        },
        pe = function (e) {
          return (
            (e = e.split(",")),
            function (t, n, r, i, o, s, a) {
              var l,
                u = (n + "").split(" ");
              for (a = {}, l = 0; l < 4; l++)
                a[e[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
              return i.parse(t, a, o, s);
            }
          );
        },
        he =
          ((X._setPluginRatio = function (e) {
            this.plugin.setRatio(e);
            for (
              var t,
                n,
                r,
                i,
                o = this.data,
                s = o.proxy,
                a = o.firstMPT,
                l = 1e-6;
              a;

            )
              (t = s[a.v]),
                a.r ? (t = Math.round(t)) : t < l && t > -l && (t = 0),
                (a.t[a.p] = t),
                (a = a._next);
            if ((o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === e))
              for (a = o.firstMPT; a; ) {
                if (((n = a.t), n.type)) {
                  if (1 === n.type) {
                    for (i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++)
                      i += n["xn" + r] + n["xs" + (r + 1)];
                    n.e = i;
                  }
                } else n.e = n.s + n.xs0;
                a = a._next;
              }
          }),
          function (e, t, n, r, i) {
            (this.t = e),
              (this.p = t),
              (this.v = n),
              (this.r = i),
              r && ((r._prev = this), (this._next = r));
          }),
        de =
          ((X._parseToProxy = function (e, t, n, r, i, o) {
            var s,
              a,
              l,
              u,
              c,
              f = r,
              p = {},
              h = {},
              d = n._transform,
              m = F;
            for (
              n._transform = null,
                F = t,
                r = c = n.parse(e, t, r, i),
                F = m,
                o &&
                  ((n._transform = d),
                  f && ((f._prev = null), f._prev && (f._prev._next = null)));
              r && r !== f;

            ) {
              if (
                r.type <= 1 &&
                ((a = r.p),
                (h[a] = r.s + r.c),
                (p[a] = r.s),
                o || ((u = new he(r, "s", a, u, r.r)), (r.c = 0)),
                1 === r.type)
              )
                for (s = r.l; --s > 0; )
                  (l = "xn" + s),
                    (a = r.p + "_" + l),
                    (h[a] = r.data[l]),
                    (p[a] = r[l]),
                    o || (u = new he(r, l, a, u, r.rxp[l]));
              r = r._next;
            }
            return { proxy: p, end: h, firstMPT: u, pt: c };
          }),
          (X.CSSPropTween = function (e, t, r, i, s, a, l, u, c, f, p) {
            (this.t = e),
              (this.p = t),
              (this.s = r),
              (this.c = i),
              (this.n = l || t),
              e instanceof de || o.push(this.n),
              (this.r = u),
              (this.type = a || 0),
              c && ((this.pr = c), (n = !0)),
              (this.b = void 0 === f ? r : f),
              (this.e = void 0 === p ? r + i : p),
              s && ((this._next = s), (s._prev = this));
          })),
        me = (s.parseComplex = function (e, t, n, r, i, o, s, a, l, u) {
          (n = n || o || ""),
            (s = new de(e, t, 0, 0, s, u ? 2 : 1, null, !1, a, n, r)),
            (r += "");
          var f,
            p,
            h,
            d,
            m,
            y,
            x,
            _,
            b,
            w,
            T,
            S,
            C = n.split(", ").join(",").split(" "),
            P = r.split(", ").join(",").split(" "),
            A = C.length,
            N = c !== !1;
          for (
            (r.indexOf(",") === -1 && n.indexOf(",") === -1) ||
              ((C = C.join(" ").replace(D, ", ").split(" ")),
              (P = P.join(" ").replace(D, ", ").split(" ")),
              (A = C.length)),
              A !== P.length && ((C = (o || "").split(" ")), (A = C.length)),
              s.plugin = l,
              s.setRatio = u,
              f = 0;
            f < A;
            f++
          )
            if (((d = C[f]), (m = P[f]), (_ = parseFloat(d)), _ || 0 === _))
              s.appendXtra(
                "",
                _,
                ie(m, _),
                m.replace(v, ""),
                N && m.indexOf("px") !== -1,
                !0
              );
            else if (i && ("#" === d.charAt(0) || ae[d] || k.test(d)))
              (S = "," === m.charAt(m.length - 1) ? ")," : ")"),
                (d = ue(d)),
                (m = ue(m)),
                (b = d.length + m.length > 6),
                b && !I && 0 === m[3]
                  ? ((s["xs" + s.l] += s.l ? " transparent" : "transparent"),
                    (s.e = s.e.split(P[f]).join("transparent")))
                  : (I || (b = !1),
                    s
                      .appendXtra(
                        b ? "rgba(" : "rgb(",
                        d[0],
                        m[0] - d[0],
                        ",",
                        !0,
                        !0
                      )
                      .appendXtra("", d[1], m[1] - d[1], ",", !0)
                      .appendXtra("", d[2], m[2] - d[2], b ? "," : S, !0),
                    b &&
                      ((d = d.length < 4 ? 1 : d[3]),
                      s.appendXtra(
                        "",
                        d,
                        (m.length < 4 ? 1 : m[3]) - d,
                        S,
                        !1
                      )));
            else if ((y = d.match(g))) {
              if (((x = m.match(v)), !x || x.length !== y.length)) return s;
              for (h = 0, p = 0; p < y.length; p++)
                (T = y[p]),
                  (w = d.indexOf(T, h)),
                  s.appendXtra(
                    d.substr(h, w - h),
                    Number(T),
                    ie(x[p], T),
                    "",
                    N && "px" === d.substr(w + T.length, 2),
                    0 === p
                  ),
                  (h = w + T.length);
              s["xs" + s.l] += d.substr(h);
            } else s["xs" + s.l] += s.l ? " " + d : d;
          if (r.indexOf("=") !== -1 && s.data) {
            for (S = s.xs0 + s.data.s, f = 1; f < s.l; f++)
              S += s["xs" + f] + s.data["xn" + f];
            s.e = S + s["xs" + f];
          }
          return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
        }),
        ge = 9;
      for (u = de.prototype, u.l = u.pr = 0; --ge > 0; )
        (u["xn" + ge] = 0), (u["xs" + ge] = "");
      (u.xs0 = ""),
        (u._next =
          u._prev =
          u.xfirst =
          u.data =
          u.plugin =
          u.setRatio =
          u.rxp =
            null),
        (u.appendXtra = function (e, t, n, r, i, o) {
          var s = this,
            a = s.l;
          return (
            (s["xs" + a] += o && a ? " " + e : e || ""),
            n || 0 === a || s.plugin
              ? (s.l++,
                (s.type = s.setRatio ? 2 : 1),
                (s["xs" + s.l] = r || ""),
                a > 0
                  ? ((s.data["xn" + a] = t + n),
                    (s.rxp["xn" + a] = i),
                    (s["xn" + a] = t),
                    s.plugin ||
                      ((s.xfirst = new de(
                        s,
                        "xn" + a,
                        t,
                        n,
                        s.xfirst || s,
                        0,
                        s.n,
                        i,
                        s.pr
                      )),
                      (s.xfirst.xs0 = 0)),
                    s)
                  : ((s.data = { s: t + n }),
                    (s.rxp = {}),
                    (s.s = t),
                    (s.c = n),
                    (s.r = i),
                    s))
              : ((s["xs" + a] += t + (r || "")), s)
          );
        });
      var ve = function (e, t) {
          (t = t || {}),
            (this.p = t.prefix ? V(e) || e : e),
            (l[e] = l[this.p] = this),
            (this.format =
              t.formatter ||
              fe(t.defaultValue, t.color, t.collapsible, t.multi)),
            t.parser && (this.parse = t.parser),
            (this.clrs = t.color),
            (this.multi = t.multi),
            (this.keyword = t.keyword),
            (this.dflt = t.defaultValue),
            (this.pr = t.priority || 0);
        },
        ye = (X._registerComplexSpecialProp = function (e, t, n) {
          "object" != typeof t && (t = { parser: n });
          var r,
            i,
            o = e.split(","),
            s = t.defaultValue;
          for (n = n || [s], r = 0; r < o.length; r++)
            (t.prefix = 0 === r && t.prefix),
              (t.defaultValue = n[r] || s),
              (i = new ve(o[r], t));
        }),
        xe = function (e) {
          if (!l[e]) {
            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
            ye(e, {
              parser: function (e, n, r, i, o, s, u) {
                var c = a.com.greensock.plugins[t];
                return c
                  ? (c._cssRegister(), l[r].parse(e, n, r, i, o, s, u))
                  : (B("Error: " + t + " js file not loaded."), o);
              },
            });
          }
        };
      (u = ve.prototype),
        (u.parseComplex = function (e, t, n, r, i, o) {
          var s,
            a,
            l,
            u,
            c,
            f,
            p = this.keyword;
          if (
            (this.multi &&
              (D.test(n) || D.test(t)
                ? ((a = t.replace(D, "|").split("|")),
                  (l = n.replace(D, "|").split("|")))
                : p && ((a = [t]), (l = [n]))),
            l)
          ) {
            for (
              u = l.length > a.length ? l.length : a.length, s = 0;
              s < u;
              s++
            )
              (t = a[s] = a[s] || this.dflt),
                (n = l[s] = l[s] || this.dflt),
                p &&
                  ((c = t.indexOf(p)),
                  (f = n.indexOf(p)),
                  c !== f && ((n = f === -1 ? l : a), (n[s] += " " + p)));
            (t = a.join(", ")), (n = l.join(", "));
          }
          return me(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, o);
        }),
        (u.parse = function (e, t, n, r, o, s, a) {
          return this.parseComplex(
            e.style,
            this.format(G(e, this.p, i, !1, this.dflt)),
            this.format(t),
            o,
            s
          );
        }),
        (s.registerSpecialProp = function (e, t, n) {
          ye(e, {
            parser: function (e, r, i, o, s, a, l) {
              var u = new de(e, i, 0, 0, s, 2, i, !1, n);
              return (u.plugin = a), (u.setRatio = t(e, r, o._tween, i)), u;
            },
            priority: n,
          });
        });
      var _e,
        be =
          "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          ),
        we = V("transform"),
        Te = $ + "transform",
        ke = V("transformOrigin"),
        Se = null !== V("perspective"),
        Ce = (X.Transform = function () {
          (this.perspective = parseFloat(s.defaultTransformPerspective) || 0),
            (this.force3D =
              !(s.defaultForce3D === !1 || !Se) &&
              (s.defaultForce3D || "auto"));
        }),
        Pe = window.SVGElement,
        Ae = function (e, t, n) {
          var r,
            i = L.createElementNS("http://www.w3.org/2000/svg", e),
            o = /([a-z])([A-Z])/g;
          for (r in n)
            i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
          return t.appendChild(i), i;
        },
        Ne = document.documentElement,
        Oe = (function () {
          var e,
            t,
            n,
            r = m || (/Android/i.test(z) && !window.chrome);
          return (
            L.createElementNS &&
              !r &&
              ((e = Ae("svg", Ne)),
              (t = Ae("rect", e, { width: 100, height: 50, x: 100 })),
              (n = t.getBoundingClientRect().width),
              (t.style[ke] = "50% 50%"),
              (t.style[we] = "scaleX(0.5)"),
              (r = n === t.getBoundingClientRect().width && !(h && Se)),
              Ne.removeChild(e)),
            r
          );
        })(),
        Ee = function (e, t, n) {
          var r = e.getBBox();
          (t = re(t).split(" ")),
            (n.xOrigin =
              (t[0].indexOf("%") !== -1
                ? (parseFloat(t[0]) / 100) * r.width
                : parseFloat(t[0])) + r.x),
            (n.yOrigin =
              (t[1].indexOf("%") !== -1
                ? (parseFloat(t[1]) / 100) * r.height
                : parseFloat(t[1])) + r.y);
        },
        De = (X.getTransform = function (e, t, n, r) {
          if (e._gsTransform && n && !r) return e._gsTransform;
          var o,
            a,
            l,
            u,
            c,
            f,
            p,
            h,
            d,
            m,
            g = n ? e._gsTransform || new Ce() : new Ce(),
            v = g.scaleX < 0,
            y = 2e-5,
            x = 1e5,
            _ = Se
              ? parseFloat(G(e, ke, t, !1, "0 0 0").split(" ")[2]) ||
                g.zOrigin ||
                0
              : 0,
            b = parseFloat(s.defaultTransformPerspective) || 0;
          if (
            (we
              ? (a = G(e, Te, t, !0))
              : e.currentStyle &&
                ((a = e.currentStyle.filter.match(O)),
                (a =
                  a && 4 === a.length
                    ? [
                        a[0].substr(4),
                        Number(a[2].substr(4)),
                        Number(a[1].substr(4)),
                        a[3].substr(4),
                        g.x || 0,
                        g.y || 0,
                      ].join(",")
                    : "")),
            (o = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a),
            (g.svg = !!(
              Pe &&
              "function" == typeof e.getBBox &&
              e.getCTM &&
              (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM))
            )),
            g.svg &&
              (Ee(e, G(e, ke, i, !1, "50% 50%") + "", g),
              (_e = s.useSVGTransformAttr || Oe),
              (l = e.getAttribute("transform")),
              o && l && l.indexOf("matrix") !== -1 && ((a = l), (o = 0))),
            !o)
          ) {
            for (
              l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                u = l.length;
              --u > -1;

            )
              (c = Number(l[u])),
                (l[u] = (f = c - (c |= 0))
                  ? ((f * x + (f < 0 ? -0.5 : 0.5)) | 0) / x + c
                  : c);
            if (16 === l.length) {
              var w,
                T,
                k,
                S,
                C,
                P = l[0],
                A = l[1],
                N = l[2],
                E = l[3],
                D = l[4],
                R = l[5],
                F = l[6],
                L = l[7],
                M = l[8],
                q = l[9],
                H = l[10],
                X = l[12],
                z = l[13],
                I = l[14],
                W = l[11],
                B = Math.atan2(F, H);
              g.zOrigin &&
                ((I = -g.zOrigin),
                (X = M * I - l[12]),
                (z = q * I - l[13]),
                (I = H * I + g.zOrigin - l[14])),
                (g.rotationX = B * j),
                B &&
                  ((S = Math.cos(-B)),
                  (C = Math.sin(-B)),
                  (w = D * S + M * C),
                  (T = R * S + q * C),
                  (k = F * S + H * C),
                  (M = D * -C + M * S),
                  (q = R * -C + q * S),
                  (H = F * -C + H * S),
                  (W = L * -C + W * S),
                  (D = w),
                  (R = T),
                  (F = k)),
                (B = Math.atan2(M, H)),
                (g.rotationY = B * j),
                B &&
                  ((S = Math.cos(-B)),
                  (C = Math.sin(-B)),
                  (w = P * S - M * C),
                  (T = A * S - q * C),
                  (k = N * S - H * C),
                  (q = A * C + q * S),
                  (H = N * C + H * S),
                  (W = E * C + W * S),
                  (P = w),
                  (A = T),
                  (N = k)),
                (B = Math.atan2(A, P)),
                (g.rotation = B * j),
                B &&
                  ((S = Math.cos(-B)),
                  (C = Math.sin(-B)),
                  (P = P * S + D * C),
                  (T = A * S + R * C),
                  (R = A * -C + R * S),
                  (F = N * -C + F * S),
                  (A = T)),
                g.rotationX &&
                  Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 &&
                  ((g.rotationX = g.rotation = 0), (g.rotationY += 180)),
                (g.scaleX = ((Math.sqrt(P * P + A * A) * x + 0.5) | 0) / x),
                (g.scaleY = ((Math.sqrt(R * R + q * q) * x + 0.5) | 0) / x),
                (g.scaleZ = ((Math.sqrt(F * F + H * H) * x + 0.5) | 0) / x),
                (g.skewX = 0),
                (g.perspective = W ? 1 / (W < 0 ? -W : W) : 0),
                (g.x = X),
                (g.y = z),
                (g.z = I);
            } else if (
              (!Se ||
                r ||
                !l.length ||
                g.x !== l[4] ||
                g.y !== l[5] ||
                (!g.rotationX && !g.rotationY)) &&
              (void 0 === g.x || "none" !== G(e, "display", t))
            ) {
              var $ = l.length >= 6,
                Y = $ ? l[0] : 1,
                V = l[1] || 0,
                U = l[2] || 0,
                Z = $ ? l[3] : 1;
              (g.x = l[4] || 0),
                (g.y = l[5] || 0),
                (p = Math.sqrt(Y * Y + V * V)),
                (h = Math.sqrt(Z * Z + U * U)),
                (d = Y || V ? Math.atan2(V, Y) * j : g.rotation || 0),
                (m = U || Z ? Math.atan2(U, Z) * j + d : g.skewX || 0),
                Math.abs(m) > 90 &&
                  Math.abs(m) < 270 &&
                  (v
                    ? ((p *= -1),
                      (m += d <= 0 ? 180 : -180),
                      (d += d <= 0 ? 180 : -180))
                    : ((h *= -1), (m += m <= 0 ? 180 : -180))),
                (g.scaleX = p),
                (g.scaleY = h),
                (g.rotation = d),
                (g.skewX = m),
                Se &&
                  ((g.rotationX = g.rotationY = g.z = 0),
                  (g.perspective = b),
                  (g.scaleZ = 1));
            }
            g.zOrigin = _;
            for (u in g) g[u] < y && g[u] > -y && (g[u] = 0);
          }
          return n && (e._gsTransform = g), g;
        }),
        Re = function (e) {
          var t,
            n,
            r = this.data,
            i = -r.rotation * R,
            o = i + r.skewX * R,
            s = 1e5,
            a = ((Math.cos(i) * r.scaleX * s) | 0) / s,
            l = ((Math.sin(i) * r.scaleX * s) | 0) / s,
            u = ((Math.sin(o) * -r.scaleY * s) | 0) / s,
            c = ((Math.cos(o) * r.scaleY * s) | 0) / s,
            f = this.t.style,
            p = this.t.currentStyle;
          if (p) {
            (n = l), (l = -u), (u = -n), (t = p.filter), (f.filter = "");
            var h,
              d,
              g = this.t.offsetWidth,
              v = this.t.offsetHeight,
              y = "absolute" !== p.position,
              x =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                a +
                ", M12=" +
                l +
                ", M21=" +
                u +
                ", M22=" +
                c,
              w = r.x + (g * r.xPercent) / 100,
              T = r.y + (v * r.yPercent) / 100;
            if (
              (null != r.ox &&
                ((h = (r.oxp ? g * r.ox * 0.01 : r.ox) - g / 2),
                (d = (r.oyp ? v * r.oy * 0.01 : r.oy) - v / 2),
                (w += h - (h * a + d * l)),
                (T += d - (h * u + d * c))),
              y
                ? ((h = g / 2),
                  (d = v / 2),
                  (x +=
                    ", Dx=" +
                    (h - (h * a + d * l) + w) +
                    ", Dy=" +
                    (d - (h * u + d * c) + T) +
                    ")"))
                : (x += ", sizingMethod='auto expand')"),
              t.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1
                ? (f.filter = t.replace(E, x))
                : (f.filter = x + " " + t),
              (0 !== e && 1 !== e) ||
                (1 === a &&
                  0 === l &&
                  0 === u &&
                  1 === c &&
                  ((y && x.indexOf("Dx=0, Dy=0") === -1) ||
                    (b.test(t) && 100 !== parseFloat(RegExp.$1)) ||
                    (t.indexOf(t.indexOf("Alpha")) === -1 &&
                      f.removeAttribute("filter")))),
              !y)
            ) {
              var k,
                S,
                C,
                P = m < 8 ? 1 : -1;
              for (
                h = r.ieOffsetX || 0,
                  d = r.ieOffsetY || 0,
                  r.ieOffsetX = Math.round(
                    (g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * v)) / 2 + w
                  ),
                  r.ieOffsetY = Math.round(
                    (v - ((c < 0 ? -c : c) * v + (u < 0 ? -u : u) * g)) / 2 + T
                  ),
                  ge = 0;
                ge < 4;
                ge++
              )
                (S = te[ge]),
                  (k = p[S]),
                  (n =
                    k.indexOf("px") !== -1
                      ? parseFloat(k)
                      : Z(this.t, S, parseFloat(k), k.replace(_, "")) || 0),
                  (C =
                    n !== r[S]
                      ? ge < 2
                        ? -r.ieOffsetX
                        : -r.ieOffsetY
                      : ge < 2
                      ? h - r.ieOffsetX
                      : d - r.ieOffsetY),
                  (f[S] =
                    (r[S] = Math.round(
                      n - C * (0 === ge || 2 === ge ? 1 : P)
                    )) + "px");
            }
          }
        },
        je = (X.set3DTransformRatio = function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            m,
            g,
            v,
            y,
            x,
            _,
            b,
            w,
            T = this.data,
            k = this.t.style,
            S = T.rotation * R,
            C = T.scaleX,
            P = T.scaleY,
            A = T.scaleZ,
            N = T.x,
            O = T.y,
            E = T.z,
            D = T.perspective;
          if (
            !(
              (1 !== e && 0 !== e && T.force3D) ||
              T.force3D === !0 ||
              T.rotationY ||
              T.rotationX ||
              1 !== A ||
              D ||
              E
            )
          )
            return void Fe.call(this, e);
          if (
            (h &&
              ((m = 1e-4),
              C < m && C > -m && (C = A = 2e-5),
              P < m && P > -m && (P = A = 2e-5),
              !D || T.z || T.rotationX || T.rotationY || (D = 0)),
            S || T.skewX)
          )
            (g = t = Math.cos(S)),
              (v = i = Math.sin(S)),
              T.skewX &&
                ((S -= T.skewX * R),
                (g = Math.cos(S)),
                (v = Math.sin(S)),
                "simple" === T.skewType &&
                  ((y = Math.tan(T.skewX * R)),
                  (y = Math.sqrt(1 + y * y)),
                  (g *= y),
                  (v *= y))),
              (n = -v),
              (o = g);
          else {
            if (!(T.rotationY || T.rotationX || 1 !== A || D || T.svg))
              return void (k[we] =
                (T.xPercent || T.yPercent
                  ? "translate(" +
                    T.xPercent +
                    "%," +
                    T.yPercent +
                    "%) translate3d("
                  : "translate3d(") +
                N +
                "px," +
                O +
                "px," +
                E +
                "px)" +
                (1 !== C || 1 !== P ? " scale(" + C + "," + P + ")" : ""));
            (t = o = 1), (n = i = 0);
          }
          (u = 1),
            (r = s = a = l = c = f = 0),
            (p = D ? -1 / D : 0),
            (d = T.zOrigin),
            (m = 1e-6),
            (b = ","),
            (w = "0"),
            (S = T.rotationY * R),
            S &&
              ((g = Math.cos(S)),
              (v = Math.sin(S)),
              (a = -v),
              (c = p * -v),
              (r = t * v),
              (s = i * v),
              (u = g),
              (p *= g),
              (t *= g),
              (i *= g)),
            (S = T.rotationX * R),
            S &&
              ((g = Math.cos(S)),
              (v = Math.sin(S)),
              (y = n * g + r * v),
              (x = o * g + s * v),
              (l = u * v),
              (f = p * v),
              (r = n * -v + r * g),
              (s = o * -v + s * g),
              (u *= g),
              (p *= g),
              (n = y),
              (o = x)),
            1 !== A && ((r *= A), (s *= A), (u *= A), (p *= A)),
            1 !== P && ((n *= P), (o *= P), (l *= P), (f *= P)),
            1 !== C && ((t *= C), (i *= C), (a *= C), (c *= C)),
            (d || T.svg) &&
              (d && ((N += r * -d), (O += s * -d), (E += u * -d + d)),
              T.svg &&
                ((N += T.xOrigin - (T.xOrigin * t + T.yOrigin * n)),
                (O += T.yOrigin - (T.xOrigin * i + T.yOrigin * o))),
              N < m && N > -m && (N = w),
              O < m && O > -m && (O = w),
              E < m && E > -m && (E = 0)),
            (_ =
              T.xPercent || T.yPercent
                ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d("
                : "matrix3d("),
            (_ +=
              (t < m && t > -m ? w : t) +
              b +
              (i < m && i > -m ? w : i) +
              b +
              (a < m && a > -m ? w : a)),
            (_ +=
              b +
              (c < m && c > -m ? w : c) +
              b +
              (n < m && n > -m ? w : n) +
              b +
              (o < m && o > -m ? w : o)),
            T.rotationX || T.rotationY
              ? ((_ +=
                  b +
                  (l < m && l > -m ? w : l) +
                  b +
                  (f < m && f > -m ? w : f) +
                  b +
                  (r < m && r > -m ? w : r)),
                (_ +=
                  b +
                  (s < m && s > -m ? w : s) +
                  b +
                  (u < m && u > -m ? w : u) +
                  b +
                  (p < m && p > -m ? w : p) +
                  b))
              : (_ += ",0,0,0,0,1,0,"),
            (_ += N + b + O + b + E + b + (D ? 1 + -E / D : 1) + ")"),
            (k[we] = _);
        }),
        Fe = (X.set2DTransformRatio = function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            p = this.data,
            h = this.t,
            d = h.style,
            m = p.x,
            g = p.y;
          return !(
            p.rotationX ||
            p.rotationY ||
            p.z ||
            p.force3D === !0 ||
            ("auto" === p.force3D && 1 !== e && 0 !== e)
          ) ||
            (p.svg && _e) ||
            !Se
            ? ((i = p.scaleX),
              (o = p.scaleY),
              void (p.rotation || p.skewX || p.svg
                ? ((t = p.rotation * R),
                  (n = t - p.skewX * R),
                  (r = 1e5),
                  (s = Math.cos(t) * i),
                  (a = Math.sin(t) * i),
                  (l = Math.sin(n) * -o),
                  (u = Math.cos(n) * o),
                  p.svg &&
                    ((m += p.xOrigin - (p.xOrigin * s + p.yOrigin * l)),
                    (g += p.yOrigin - (p.xOrigin * a + p.yOrigin * u)),
                    (f = 1e-6),
                    m < f && m > -f && (m = 0),
                    g < f && g > -f && (g = 0)),
                  (c =
                    ((s * r) | 0) / r +
                    "," +
                    ((a * r) | 0) / r +
                    "," +
                    ((l * r) | 0) / r +
                    "," +
                    ((u * r) | 0) / r +
                    "," +
                    m +
                    "," +
                    g +
                    ")"),
                  p.svg && _e
                    ? h.setAttribute("transform", "matrix(" + c)
                    : (d[we] =
                        (p.xPercent || p.yPercent
                          ? "translate(" +
                            p.xPercent +
                            "%," +
                            p.yPercent +
                            "%) matrix("
                          : "matrix(") + c))
                : (d[we] =
                    (p.xPercent || p.yPercent
                      ? "translate(" +
                        p.xPercent +
                        "%," +
                        p.yPercent +
                        "%) matrix("
                      : "matrix(") +
                    i +
                    ",0,0," +
                    o +
                    "," +
                    m +
                    "," +
                    g +
                    ")")))
            : ((this.setRatio = je), void je.call(this, e));
        });
      (u = Ce.prototype),
        (u.x =
          u.y =
          u.z =
          u.skewX =
          u.skewY =
          u.rotation =
          u.rotationX =
          u.rotationY =
          u.zOrigin =
          u.xPercent =
          u.yPercent =
            0),
        (u.scaleX = u.scaleY = u.scaleZ = 1),
        ye(
          "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
          {
            parser: function (e, t, n, r, o, a, l) {
              if (r._lastParsedTransform === l) return o;
              r._lastParsedTransform = l;
              var u,
                c,
                f,
                p,
                h,
                d,
                m,
                g = (r._transform = De(e, i, !0, l.parseTransform)),
                v = e.style,
                y = 1e-6,
                x = be.length,
                _ = l,
                b = {};
              if ("string" == typeof _.transform && we)
                (f = q.style),
                  (f[we] = _.transform),
                  (f.display = "block"),
                  (f.position = "absolute"),
                  L.body.appendChild(q),
                  (u = De(q, null, !1)),
                  L.body.removeChild(q);
              else if ("object" == typeof _) {
                if (
                  ((u = {
                    scaleX: oe(null != _.scaleX ? _.scaleX : _.scale, g.scaleX),
                    scaleY: oe(null != _.scaleY ? _.scaleY : _.scale, g.scaleY),
                    scaleZ: oe(_.scaleZ, g.scaleZ),
                    x: oe(_.x, g.x),
                    y: oe(_.y, g.y),
                    z: oe(_.z, g.z),
                    xPercent: oe(_.xPercent, g.xPercent),
                    yPercent: oe(_.yPercent, g.yPercent),
                    perspective: oe(_.transformPerspective, g.perspective),
                  }),
                  (m = _.directionalRotation),
                  null != m)
                )
                  if ("object" == typeof m) for (f in m) _[f] = m[f];
                  else _.rotation = m;
                "string" == typeof _.x &&
                  _.x.indexOf("%") !== -1 &&
                  ((u.x = 0), (u.xPercent = oe(_.x, g.xPercent))),
                  "string" == typeof _.y &&
                    _.y.indexOf("%") !== -1 &&
                    ((u.y = 0), (u.yPercent = oe(_.y, g.yPercent))),
                  (u.rotation = se(
                    "rotation" in _
                      ? _.rotation
                      : "shortRotation" in _
                      ? _.shortRotation + "_short"
                      : "rotationZ" in _
                      ? _.rotationZ
                      : g.rotation,
                    g.rotation,
                    "rotation",
                    b
                  )),
                  Se &&
                    ((u.rotationX = se(
                      "rotationX" in _
                        ? _.rotationX
                        : "shortRotationX" in _
                        ? _.shortRotationX + "_short"
                        : g.rotationX || 0,
                      g.rotationX,
                      "rotationX",
                      b
                    )),
                    (u.rotationY = se(
                      "rotationY" in _
                        ? _.rotationY
                        : "shortRotationY" in _
                        ? _.shortRotationY + "_short"
                        : g.rotationY || 0,
                      g.rotationY,
                      "rotationY",
                      b
                    ))),
                  (u.skewX = null == _.skewX ? g.skewX : se(_.skewX, g.skewX)),
                  (u.skewY = null == _.skewY ? g.skewY : se(_.skewY, g.skewY)),
                  (c = u.skewY - g.skewY) &&
                    ((u.skewX += c), (u.rotation += c));
              }
              for (
                Se && null != _.force3D && ((g.force3D = _.force3D), (d = !0)),
                  g.skewType = _.skewType || g.skewType || s.defaultSkewType,
                  h =
                    g.force3D ||
                    g.z ||
                    g.rotationX ||
                    g.rotationY ||
                    u.z ||
                    u.rotationX ||
                    u.rotationY ||
                    u.perspective,
                  h || null == _.scale || (u.scaleZ = 1);
                --x > -1;

              )
                (n = be[x]),
                  (p = u[n] - g[n]),
                  (p > y || p < -y || null != _[n] || null != F[n]) &&
                    ((d = !0),
                    (o = new de(g, n, g[n], p, o)),
                    n in b && (o.e = b[n]),
                    (o.xs0 = 0),
                    (o.plugin = a),
                    r._overwriteProps.push(o.n));
              return (
                (p = _.transformOrigin),
                p &&
                  g.svg &&
                  (Ee(e, re(p), u),
                  (o = new de(
                    g,
                    "xOrigin",
                    g.xOrigin,
                    u.xOrigin - g.xOrigin,
                    o,
                    -1,
                    "transformOrigin"
                  )),
                  (o.b = g.xOrigin),
                  (o.e = o.xs0 = u.xOrigin),
                  (o = new de(
                    g,
                    "yOrigin",
                    g.yOrigin,
                    u.yOrigin - g.yOrigin,
                    o,
                    -1,
                    "transformOrigin"
                  )),
                  (o.b = g.yOrigin),
                  (o.e = o.xs0 = u.yOrigin),
                  (p = "0px 0px")),
                (p || (Se && h && g.zOrigin)) &&
                  (we
                    ? ((d = !0),
                      (n = ke),
                      (p = (p || G(e, n, i, !1, "50% 50%")) + ""),
                      (o = new de(v, n, 0, 0, o, -1, "transformOrigin")),
                      (o.b = v[n]),
                      (o.plugin = a),
                      Se
                        ? ((f = g.zOrigin),
                          (p = p.split(" ")),
                          (g.zOrigin =
                            (p.length > 2 && (0 === f || "0px" !== p[2])
                              ? parseFloat(p[2])
                              : f) || 0),
                          (o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px"),
                          (o = new de(g, "zOrigin", 0, 0, o, -1, o.n)),
                          (o.b = f),
                          (o.xs0 = o.e = g.zOrigin))
                        : (o.xs0 = o.e = p))
                    : re(p + "", g)),
                d &&
                  (r._transformType =
                    (g.svg && _e) || (!h && 3 !== this._transformType) ? 2 : 3),
                o
              );
            },
            prefix: !0,
          }
        ),
        ye("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset",
        }),
        ye("borderRadius", {
          defaultValue: "0px",
          parser: function (e, t, n, o, s, a) {
            t = this.format(t);
            var l,
              u,
              c,
              f,
              p,
              h,
              d,
              m,
              g,
              v,
              y,
              x,
              _,
              b,
              w,
              T,
              k = [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius",
              ],
              S = e.style;
            for (
              g = parseFloat(e.offsetWidth),
                v = parseFloat(e.offsetHeight),
                l = t.split(" "),
                u = 0;
              u < k.length;
              u++
            )
              this.p.indexOf("border") && (k[u] = V(k[u])),
                (p = f = G(e, k[u], i, !1, "0px")),
                p.indexOf(" ") !== -1 &&
                  ((f = p.split(" ")), (p = f[0]), (f = f[1])),
                (h = c = l[u]),
                (d = parseFloat(p)),
                (x = p.substr((d + "").length)),
                (_ = "=" === h.charAt(1)),
                _
                  ? ((m = parseInt(h.charAt(0) + "1", 10)),
                    (h = h.substr(2)),
                    (m *= parseFloat(h)),
                    (y = h.substr((m + "").length - (m < 0 ? 1 : 0)) || ""))
                  : ((m = parseFloat(h)), (y = h.substr((m + "").length))),
                "" === y && (y = r[n] || x),
                y !== x &&
                  ((b = Z(e, "borderLeft", d, x)),
                  (w = Z(e, "borderTop", d, x)),
                  "%" === y
                    ? ((p = (b / g) * 100 + "%"), (f = (w / v) * 100 + "%"))
                    : "em" === y
                    ? ((T = Z(e, "borderLeft", 1, "em")),
                      (p = b / T + "em"),
                      (f = w / T + "em"))
                    : ((p = b + "px"), (f = w + "px")),
                  _ &&
                    ((h = parseFloat(p) + m + y), (c = parseFloat(f) + m + y))),
                (s = me(S, k[u], p + " " + f, h + " " + c, !1, "0px", s));
            return s;
          },
          prefix: !0,
          formatter: fe("0px 0px 0px 0px", !1, !0),
        }),
        ye("backgroundPosition", {
          defaultValue: "0 0",
          parser: function (e, t, n, r, o, s) {
            var a,
              l,
              u,
              c,
              f,
              p,
              h = "background-position",
              d = i || U(e, null),
              g = this.format(
                (d
                  ? m
                    ? d.getPropertyValue(h + "-x") +
                      " " +
                      d.getPropertyValue(h + "-y")
                    : d.getPropertyValue(h)
                  : e.currentStyle.backgroundPositionX +
                    " " +
                    e.currentStyle.backgroundPositionY) || "0 0"
              ),
              v = this.format(t);
            if (
              (g.indexOf("%") !== -1) != (v.indexOf("%") !== -1) &&
              ((p = G(e, "backgroundImage").replace(P, "")), p && "none" !== p)
            ) {
              for (
                a = g.split(" "),
                  l = v.split(" "),
                  H.setAttribute("src", p),
                  u = 2;
                --u > -1;

              )
                (g = a[u]),
                  (c = g.indexOf("%") !== -1),
                  c !== (l[u].indexOf("%") !== -1) &&
                    ((f =
                      0 === u
                        ? e.offsetWidth - H.width
                        : e.offsetHeight - H.height),
                    (a[u] = c
                      ? (parseFloat(g) / 100) * f + "px"
                      : (parseFloat(g) / f) * 100 + "%"));
              g = a.join(" ");
            }
            return this.parseComplex(e.style, g, v, o, s);
          },
          formatter: re,
        }),
        ye("backgroundSize", { defaultValue: "0 0", formatter: re }),
        ye("perspective", { defaultValue: "0px", prefix: !0 }),
        ye("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
        ye("transformStyle", { prefix: !0 }),
        ye("backfaceVisibility", { prefix: !0 }),
        ye("userSelect", { prefix: !0 }),
        ye("margin", {
          parser: pe("marginTop,marginRight,marginBottom,marginLeft"),
        }),
        ye("padding", {
          parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft"),
        }),
        ye("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function (e, t, n, r, o, s) {
            var a, l, u;
            return (
              m < 9
                ? ((l = e.currentStyle),
                  (u = m < 8 ? " " : ","),
                  (a =
                    "rect(" +
                    l.clipTop +
                    u +
                    l.clipRight +
                    u +
                    l.clipBottom +
                    u +
                    l.clipLeft +
                    ")"),
                  (t = this.format(t).split(",").join(u)))
                : ((a = this.format(G(e, this.p, i, !1, this.dflt))),
                  (t = this.format(t))),
              this.parseComplex(e.style, a, t, o, s)
            );
          },
        }),
        ye("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0,
        }),
        ye("autoRound,strictUnits", {
          parser: function (e, t, n, r, i) {
            return i;
          },
        }),
        ye("border", {
          defaultValue: "0px solid #000",
          parser: function (e, t, n, r, o, s) {
            return this.parseComplex(
              e.style,
              this.format(
                G(e, "borderTopWidth", i, !1, "0px") +
                  " " +
                  G(e, "borderTopStyle", i, !1, "solid") +
                  " " +
                  G(e, "borderTopColor", i, !1, "#000")
              ),
              this.format(t),
              o,
              s
            );
          },
          color: !0,
          formatter: function (e) {
            var t = e.split(" ");
            return (
              t[0] +
              " " +
              (t[1] || "solid") +
              " " +
              (e.match(ce) || ["#000"])[0]
            );
          },
        }),
        ye("borderWidth", {
          parser: pe(
            "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
          ),
        }),
        ye("float,cssFloat,styleFloat", {
          parser: function (e, t, n, r, i, o) {
            var s = e.style,
              a = "cssFloat" in s ? "cssFloat" : "styleFloat";
            return new de(s, a, 0, 0, i, -1, n, !1, 0, s[a], t);
          },
        });
      var Le = function (e) {
        var t,
          n = this.t,
          r = n.filter || G(this.data, "filter") || "",
          i = (this.s + this.c * e) | 0;
        100 === i &&
          (r.indexOf("atrix(") === -1 &&
          r.indexOf("radient(") === -1 &&
          r.indexOf("oader(") === -1
            ? (n.removeAttribute("filter"), (t = !G(this.data, "filter")))
            : ((n.filter = r.replace(T, "")), (t = !0))),
          t ||
            (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"),
            r.indexOf("pacity") === -1
              ? (0 === i && this.xn1) ||
                (n.filter = r + " alpha(opacity=" + i + ")")
              : (n.filter = r.replace(b, "opacity=" + i)));
      };
      ye("opacity,alpha,autoAlpha", {
        defaultValue: "1",
        parser: function (e, t, n, r, o, s) {
          var a = parseFloat(G(e, "opacity", i, !1, "1")),
            l = e.style,
            u = "autoAlpha" === n;
          return (
            "string" == typeof t &&
              "=" === t.charAt(1) &&
              (t =
                ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a),
            u &&
              1 === a &&
              "hidden" === G(e, "visibility", i) &&
              0 !== t &&
              (a = 0),
            I
              ? (o = new de(l, "opacity", a, t - a, o))
              : ((o = new de(l, "opacity", 100 * a, 100 * (t - a), o)),
                (o.xn1 = u ? 1 : 0),
                (l.zoom = 1),
                (o.type = 2),
                (o.b = "alpha(opacity=" + o.s + ")"),
                (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                (o.data = e),
                (o.plugin = s),
                (o.setRatio = Le)),
            u &&
              ((o = new de(
                l,
                "visibility",
                0,
                0,
                o,
                -1,
                null,
                !1,
                0,
                0 !== a ? "inherit" : "hidden",
                0 === t ? "hidden" : "inherit"
              )),
              (o.xs0 = "inherit"),
              r._overwriteProps.push(o.n),
              r._overwriteProps.push(n)),
            o
          );
        },
      });
      var Me = function (e, t) {
          t &&
            (e.removeProperty
              ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)),
                e.removeProperty(t.replace(S, "-$1").toLowerCase()))
              : e.removeAttribute(t));
        },
        qe = function (e) {
          if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
            this.t.setAttribute("class", 0 === e ? this.b : this.e);
            for (var t = this.data, n = this.t.style; t; )
              t.v ? (n[t.p] = t.v) : Me(n, t.p), (t = t._next);
            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        };
      ye("className", {
        parser: function (e, t, r, o, s, a, l) {
          var u,
            c,
            f,
            p,
            h,
            d = e.getAttribute("class") || "",
            m = e.style.cssText;
          if (
            ((s = o._classNamePT = new de(e, r, 0, 0, s, 2)),
            (s.setRatio = qe),
            (s.pr = -11),
            (n = !0),
            (s.b = d),
            (c = K(e, i)),
            (f = e._gsClassPT))
          ) {
            for (p = {}, h = f.data; h; ) (p[h.p] = 1), (h = h._next);
            f.setRatio(1);
          }
          return (
            (e._gsClassPT = s),
            (s.e =
              "=" !== t.charAt(1)
                ? t
                : d.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") +
                  ("+" === t.charAt(0) ? " " + t.substr(2) : "")),
            o._tween._duration &&
              (e.setAttribute("class", s.e),
              (u = J(e, c, K(e), l, p)),
              e.setAttribute("class", d),
              (s.data = u.firstMPT),
              (e.style.cssText = m),
              (s = s.xfirst = o.parse(e, u.difs, s, a))),
            s
          );
        },
      });
      var He = function (e) {
        if (
          (1 === e || 0 === e) &&
          this.data._totalTime === this.data._totalDuration &&
          "isFromStart" !== this.data.data
        ) {
          var t,
            n,
            r,
            i,
            o = this.t.style,
            s = l.transform.parse;
          if ("all" === this.e) (o.cssText = ""), (i = !0);
          else
            for (
              t = this.e.split(" ").join("").split(","), r = t.length;
              --r > -1;

            )
              (n = t[r]),
                l[n] &&
                  (l[n].parse === s
                    ? (i = !0)
                    : (n = "transformOrigin" === n ? ke : l[n].p)),
                Me(o, n);
          i && (Me(o, we), this.t._gsTransform && delete this.t._gsTransform);
        }
      };
      for (
        ye("clearProps", {
          parser: function (e, t, r, i, o) {
            return (
              (o = new de(e, r, 0, 0, o, 2)),
              (o.setRatio = He),
              (o.e = t),
              (o.pr = -10),
              (o.data = i._tween),
              (n = !0),
              o
            );
          },
        }),
          u = "bezier,throwProps,physicsProps,physics2D".split(","),
          ge = u.length;
        ge--;

      )
        xe(u[ge]);
      (u = s.prototype),
        (u._firstPT = u._lastParsedTransform = u._transform = null),
        (u._onInitTween = function (e, t, a) {
          if (!e.nodeType) return !1;
          (this._target = e),
            (this._tween = a),
            (this._vars = t),
            (c = t.autoRound),
            (n = !1),
            (r = t.suffixMap || s.suffixMap),
            (i = U(e, "")),
            (o = this._overwriteProps);
          var l,
            u,
            h,
            m,
            g,
            v,
            y,
            x,
            _,
            b = e.style;
          if (
            (f &&
              "" === b.zIndex &&
              ((l = G(e, "zIndex", i)),
              ("auto" !== l && "" !== l) || this._addLazySet(b, "zIndex", 0)),
            "string" == typeof t &&
              ((m = b.cssText),
              (l = K(e, i)),
              (b.cssText = m + ";" + t),
              (l = J(e, l, K(e)).difs),
              !I && w.test(t) && (l.opacity = parseFloat(RegExp.$1)),
              (t = l),
              (b.cssText = m)),
            (this._firstPT = u = this.parse(e, t, null)),
            this._transformType)
          ) {
            for (
              _ = 3 === this._transformType,
                we
                  ? p &&
                    ((f = !0),
                    "" === b.zIndex &&
                      ((y = G(e, "zIndex", i)),
                      ("auto" !== y && "" !== y) ||
                        this._addLazySet(b, "zIndex", 0)),
                    d &&
                      this._addLazySet(
                        b,
                        "WebkitBackfaceVisibility",
                        this._vars.WebkitBackfaceVisibility ||
                          (_ ? "visible" : "hidden")
                      ))
                  : (b.zoom = 1),
                h = u;
              h && h._next;

            )
              h = h._next;
            (x = new de(e, "transform", 0, 0, null, 2)),
              this._linkCSSP(x, null, h),
              (x.setRatio = _ && Se ? je : we ? Fe : Re),
              (x.data = this._transform || De(e, i, !0)),
              o.pop();
          }
          if (n) {
            for (; u; ) {
              for (v = u._next, h = m; h && h.pr > u.pr; ) h = h._next;
              (u._prev = h ? h._prev : g) ? (u._prev._next = u) : (m = u),
                (u._next = h) ? (h._prev = u) : (g = u),
                (u = v);
            }
            this._firstPT = m;
          }
          return !0;
        }),
        (u.parse = function (e, t, n, o) {
          var s,
            a,
            u,
            f,
            p,
            h,
            d,
            m,
            g,
            v,
            y = e.style;
          for (s in t)
            (h = t[s]),
              (a = l[s]),
              a
                ? (n = a.parse(e, h, s, this, n, o, t))
                : ((p = G(e, s, i) + ""),
                  (g = "string" == typeof h),
                  "color" === s ||
                  "fill" === s ||
                  "stroke" === s ||
                  s.indexOf("Color") !== -1 ||
                  (g && k.test(h))
                    ? (g ||
                        ((h = ue(h)),
                        (h =
                          (h.length > 3 ? "rgba(" : "rgb(") +
                          h.join(",") +
                          ")")),
                      (n = me(y, s, p, h, !0, "transparent", n, 0, o)))
                    : !g || (h.indexOf(" ") === -1 && h.indexOf(",") === -1)
                    ? ((u = parseFloat(p)),
                      (d = u || 0 === u ? p.substr((u + "").length) : ""),
                      ("" !== p && "auto" !== p) ||
                        ("width" === s || "height" === s
                          ? ((u = ne(e, s, i)), (d = "px"))
                          : "left" === s || "top" === s
                          ? ((u = Q(e, s, i)), (d = "px"))
                          : ((u = "opacity" !== s ? 0 : 1), (d = ""))),
                      (v = g && "=" === h.charAt(1)),
                      v
                        ? ((f = parseInt(h.charAt(0) + "1", 10)),
                          (h = h.substr(2)),
                          (f *= parseFloat(h)),
                          (m = h.replace(_, "")))
                        : ((f = parseFloat(h)),
                          (m = g ? h.replace(_, "") : "")),
                      "" === m && (m = s in r ? r[s] : d),
                      (h = f || 0 === f ? (v ? f + u : f) + m : t[s]),
                      d !== m &&
                        "" !== m &&
                        (f || 0 === f) &&
                        u &&
                        ((u = Z(e, s, u, d)),
                        "%" === m
                          ? ((u /= Z(e, s, 100, "%") / 100),
                            t.strictUnits !== !0 && (p = u + "%"))
                          : "em" === m
                          ? (u /= Z(e, s, 1, "em"))
                          : "px" !== m && ((f = Z(e, s, f, m)), (m = "px")),
                        v && (f || 0 === f) && (h = f + u + m)),
                      v && (f += u),
                      (!u && 0 !== u) || (!f && 0 !== f)
                        ? void 0 !== y[s] &&
                          (h || (h + "" != "NaN" && null != h))
                          ? ((n = new de(
                              y,
                              s,
                              f || u || 0,
                              0,
                              n,
                              -1,
                              s,
                              !1,
                              0,
                              p,
                              h
                            )),
                            (n.xs0 =
                              "none" !== h ||
                              ("display" !== s && s.indexOf("Style") === -1)
                                ? h
                                : p))
                          : B("invalid " + s + " tween value: " + t[s])
                        : ((n = new de(
                            y,
                            s,
                            u,
                            f - u,
                            n,
                            0,
                            s,
                            c !== !1 && ("px" === m || "zIndex" === s),
                            0,
                            p,
                            h
                          )),
                          (n.xs0 = m)))
                    : (n = me(y, s, p, h, !0, null, n, 0, o))),
              o && n && !n.plugin && (n.plugin = o);
          return n;
        }),
        (u.setRatio = function (e) {
          var t,
            n,
            r,
            i = this._firstPT,
            o = 1e-6;
          if (
            1 !== e ||
            (this._tween._time !== this._tween._duration &&
              0 !== this._tween._time)
          )
            if (
              e ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time) ||
              this._tween._rawPrevTime === -1e-6
            )
              for (; i; ) {
                if (
                  ((t = i.c * e + i.s),
                  i.r ? (t = Math.round(t)) : t < o && t > -o && (t = 0),
                  i.type)
                )
                  if (1 === i.type)
                    if (((r = i.l), 2 === r))
                      i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                    else if (3 === r)
                      i.t[i.p] =
                        i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                    else if (4 === r)
                      i.t[i.p] =
                        i.xs0 +
                        t +
                        i.xs1 +
                        i.xn1 +
                        i.xs2 +
                        i.xn2 +
                        i.xs3 +
                        i.xn3 +
                        i.xs4;
                    else if (5 === r)
                      i.t[i.p] =
                        i.xs0 +
                        t +
                        i.xs1 +
                        i.xn1 +
                        i.xs2 +
                        i.xn2 +
                        i.xs3 +
                        i.xn3 +
                        i.xs4 +
                        i.xn4 +
                        i.xs5;
                    else {
                      for (n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++)
                        n += i["xn" + r] + i["xs" + (r + 1)];
                      i.t[i.p] = n;
                    }
                  else
                    i.type === -1
                      ? (i.t[i.p] = i.xs0)
                      : i.setRatio && i.setRatio(e);
                else i.t[i.p] = t + i.xs0;
                i = i._next;
              }
            else
              for (; i; )
                2 !== i.type ? (i.t[i.p] = i.b) : i.setRatio(e), (i = i._next);
          else
            for (; i; )
              2 !== i.type ? (i.t[i.p] = i.e) : i.setRatio(e), (i = i._next);
        }),
        (u._enableTransforms = function (e) {
          (this._transform = this._transform || De(this._target, i, !0)),
            (this._transformType =
              (this._transform.svg && _e) || (!e && 3 !== this._transformType)
                ? 2
                : 3);
        });
      var Xe = function (e) {
        (this.t[this.p] = this.e),
          this.data._linkCSSP(this, this._next, null, !0);
      };
      (u._addLazySet = function (e, t, n) {
        var r = (this._firstPT = new de(e, t, 0, 0, this._firstPT, 2));
        (r.e = n), (r.setRatio = Xe), (r.data = this);
      }),
        (u._linkCSSP = function (e, t, n, r) {
          return (
            e &&
              (t && (t._prev = e),
              e._next && (e._next._prev = e._prev),
              e._prev
                ? (e._prev._next = e._next)
                : this._firstPT === e && ((this._firstPT = e._next), (r = !0)),
              n
                ? (n._next = e)
                : r || null !== this._firstPT || (this._firstPT = e),
              (e._next = t),
              (e._prev = n)),
            e
          );
        }),
        (u._kill = function (t) {
          var n,
            r,
            i,
            o = t;
          if (t.autoAlpha || t.alpha) {
            o = {};
            for (r in t) o[r] = t[r];
            (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
          }
          return (
            t.className &&
              (n = this._classNamePT) &&
              ((i = n.xfirst),
              i && i._prev
                ? this._linkCSSP(i._prev, n._next, i._prev._prev)
                : i === this._firstPT && (this._firstPT = n._next),
              n._next && this._linkCSSP(n._next, n._next._next, i._prev),
              (this._classNamePT = null)),
            e.prototype._kill.call(this, o)
          );
        });
      var ze = function (e, t, n) {
        var r, i, o, s;
        if (e.slice) for (i = e.length; --i > -1; ) ze(e[i], t, n);
        else
          for (r = e.childNodes, i = r.length; --i > -1; )
            (o = r[i]),
              (s = o.type),
              o.style && (t.push(K(o)), n && n.push(o)),
              (1 !== s && 9 !== s && 11 !== s) ||
                !o.childNodes.length ||
                ze(o, t, n);
      };
      return (
        (s.cascadeTo = function (e, n, r) {
          var i,
            o,
            s,
            a = t.to(e, n, r),
            l = [a],
            u = [],
            c = [],
            f = [],
            p = t._internals.reservedProps;
          for (
            e = a._targets || a.target,
              ze(e, u, f),
              a.render(n, !0),
              ze(e, c),
              a.render(0, !0),
              a._enabled(!0),
              i = f.length;
            --i > -1;

          )
            if (((o = J(f[i], u[i], c[i])), o.firstMPT)) {
              o = o.difs;
              for (s in r) p[s] && (o[s] = r[s]);
              l.push(t.to(f[i], n, o));
            }
          return l;
        }),
        e.activate([s]),
        s
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (e) {
    "use strict";
    var t = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[e];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], t)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = t()));
  })("CSSPlugin"),
  (function (e) {
    "use strict";
    var t,
      n,
      r,
      i = e.fn.animate,
      o = e.fn.stop,
      s = !0,
      a = function (e) {
        var t,
          n = {};
        for (t in e) n[t] = e[t];
        return n;
      },
      l = {
        overwrite: 1,
        delay: 1,
        useFrames: 1,
        runBackwards: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        autoCSS: 1,
      },
      u = function (e, t) {
        for (var n in l) l[n] && void 0 !== e[n] && (t[n] = e[n]);
      },
      c = function (e) {
        return function (t) {
          return e.getRatio(t);
        };
      },
      f = {},
      p = function () {
        var i,
          o,
          s,
          a = window.GreenSockGlobals || window;
        if (
          ((t = a.TweenMax || a.TweenLite),
          t &&
            ((i = (t.version + ".0.0").split(".")),
            (o = !(Number(i[0]) > 0 && Number(i[1]) > 7)),
            (a = a.com.greensock),
            (n = a.plugins.CSSPlugin),
            (f = a.easing.Ease.map || {})),
          !t || !n || o)
        )
          return (
            (t = null),
            void (
              !r &&
              window.console &&
              (window.console.log(
                "The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." +
                  (o ? " Version " + i.join(".") + " is too old." : "")
              ),
              (r = !0))
            )
          );
        if (e.easing) {
          for (s in f) e.easing[s] = c(f[s]);
          p = !1;
        }
      };
    (e.fn.animate = function (r, o, l, c) {
      if (((r = r || {}), p && (p(), !t || !n)))
        return i.call(this, r, o, l, c);
      if (
        !s ||
        r.skipGSAP === !0 ||
        ("object" == typeof o && "function" == typeof o.step) ||
        null != r.scrollTop ||
        null != r.scrollLeft
      )
        return i.call(this, r, o, l, c);
      var h,
        d,
        m,
        g,
        v = e.speed(o, l, c),
        y = { ease: f[v.easing] || (v.easing === !1 ? f.linear : f.swing) },
        x = this,
        _ = "object" == typeof o ? o.specialEasing : null;
      for (d in r) {
        if (
          ((h = r[d]),
          h instanceof Array &&
            f[h[1]] &&
            ((_ = _ || {}), (_[d] = h[1]), (h = h[0])),
          "toggle" === h || "hide" === h || "show" === h)
        )
          return i.call(this, r, o, l, c);
        y[d.indexOf("-") === -1 ? d : e.camelCase(d)] = h;
      }
      if (_) {
        (y = a(y)), (g = []);
        for (d in _)
          (h = g[g.length] = {}),
            u(y, h),
            (h.ease = f[_[d]] || y.ease),
            d.indexOf("-") !== -1 && (d = e.camelCase(d)),
            (h[d] = y[d]),
            delete y[d];
        0 === g.length && (g = null);
      }
      return (
        (m = function (n) {
          var r,
            i = a(y);
          if (g)
            for (r = g.length; --r > -1; )
              t.to(this, e.fx.off ? 0 : v.duration / 1e3, g[r]);
          (i.onComplete = function () {
            n ? n() : v.old && e(this).each(v.old);
          }),
            t.to(this, e.fx.off ? 0 : v.duration / 1e3, i);
        }),
        v.queue !== !1
          ? (x.queue(v.queue, m),
            "function" == typeof v.old &&
              x.queue(v.queue, function (e) {
                v.old.call(this), e();
              }))
          : m.call(x),
        x
      );
    }),
      (e.fn.stop = function (e, n) {
        if ((o.call(this, e, n), t)) {
          if (n)
            for (var r, i = t.getTweensOf(this), s = i.length; --s > -1; )
              (r = i[s].totalTime() / i[s].totalDuration()),
                r > 0 && r < 1 && i[s].seek(i[s].totalDuration());
          t.killTweensOf(this);
        }
        return this;
      }),
      (e.gsap = {
        enabled: function (e) {
          s = e;
        },
        version: "0.1.9",
      });
  })(jQuery),
  (function (e, t, n) {
    "use strict";
    function r(n) {
      if (
        ((i = t.documentElement),
        (o = t.body),
        $(),
        (ae = this),
        (n = n || {}),
        (pe = n.constants || {}),
        n.easing)
      )
        for (var r in n.easing) U[r] = n.easing[r];
      (xe = n.edgeStrategy || "set"),
        (ce = {
          beforerender: n.beforerender,
          render: n.render,
          keyframe: n.keyframe,
        }),
        (fe = n.forceHeight !== !1),
        fe && (Le = n.scale || 1),
        (he = n.mobileDeceleration || k),
        (me = n.smoothScrolling !== !1),
        (ge = n.smoothScrollingDuration || C),
        (ve = { targetTop: ae.getScrollTop() }),
        (Be = (
          n.mobileCheck ||
          function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
              navigator.userAgent || navigator.vendor || e.opera
            );
          }
        )()),
        Be
          ? ((ue = t.getElementById(n.skrollrBody || S)),
            ue && se(),
            G(),
            Oe(i, [y, b], [x]))
          : Oe(i, [y, _], [x]),
        ae.refresh(),
        we(e, "resize orientationchange", function () {
          var e = i.clientWidth,
            t = i.clientHeight;
          (t === ze && e === Xe) || ((ze = t), (Xe = e), (Ie = !0));
        });
      var s = Y();
      return (
        (function a() {
          K(), (be = s(a));
        })(),
        ae
      );
    }
    var i,
      o,
      s = {
        get: function () {
          return ae;
        },
        init: function (e) {
          return ae || new r(e);
        },
        VERSION: "0.6.29",
      },
      a = Object.prototype.hasOwnProperty,
      l = e.Math,
      u = e.getComputedStyle,
      c = "touchstart",
      f = "touchmove",
      p = "touchcancel",
      h = "touchend",
      d = "skrollable",
      m = d + "-before",
      g = d + "-between",
      v = d + "-after",
      y = "skrollr",
      x = "no-" + y,
      _ = y + "-desktop",
      b = y + "-mobile",
      w = "linear",
      T = 1e3,
      k = 0.004,
      S = "skrollr-body",
      C = 200,
      P = "start",
      A = "end",
      N = "center",
      O = "bottom",
      E = "___skrollable_id",
      D = /^(?:input|textarea|button|select)$/i,
      R = /^\s+|\s+$/g,
      j =
        /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
      F = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
      L = /^(@?[a-z\-]+)\[(\w+)\]$/,
      M = /-([a-z0-9_])/g,
      q = function (e, t) {
        return t.toUpperCase();
      },
      H = /[\-+]?[\d]*\.?[\d]+/g,
      X = /\{\?\}/g,
      z = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
      I = /[a-z\-]+-gradient/g,
      W = "",
      B = "",
      $ = function () {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (u) {
          var t = u(o, null);
          for (var n in t)
            if ((W = n.match(e) || (+n == n && t[n].match(e)))) break;
          if (!W) return void (W = B = "");
          (W = W[0]),
            "-" === W.slice(0, 1)
              ? ((B = W),
                (W = {
                  "-webkit-": "webkit",
                  "-moz-": "Moz",
                  "-ms-": "ms",
                  "-o-": "O",
                }[W]))
              : (B = "-" + W.toLowerCase() + "-");
        }
      },
      Y = function () {
        var t =
            e.requestAnimationFrame ||
            e[W.toLowerCase() + "RequestAnimationFrame"],
          n = Re();
        return (
          (!Be && t) ||
            (t = function (t) {
              var r = Re() - n,
                i = l.max(0, 1e3 / 60 - r);
              return e.setTimeout(function () {
                (n = Re()), t();
              }, i);
            }),
          t
        );
      },
      V = function () {
        var t =
          e.cancelAnimationFrame || e[W.toLowerCase() + "CancelAnimationFrame"];
        return (
          (!Be && t) ||
            (t = function (t) {
              return e.clearTimeout(t);
            }),
          t
        );
      },
      U = {
        begin: function () {
          return 0;
        },
        end: function () {
          return 1;
        },
        linear: function (e) {
          return e;
        },
        quadratic: function (e) {
          return e * e;
        },
        cubic: function (e) {
          return e * e * e;
        },
        swing: function (e) {
          return -l.cos(e * l.PI) / 2 + 0.5;
        },
        sqrt: function (e) {
          return l.sqrt(e);
        },
        outCubic: function (e) {
          return l.pow(e - 1, 3) + 1;
        },
        bounce: function (e) {
          var t;
          if (e <= 0.5083) t = 3;
          else if (e <= 0.8489) t = 9;
          else if (e <= 0.96208) t = 27;
          else {
            if (!(e <= 0.99981)) return 1;
            t = 91;
          }
          return 1 - l.abs((3 * l.cos(e * t * 1.028)) / t);
        },
      };
    (r.prototype.refresh = function (e) {
      var r,
        i,
        o = !1;
      for (
        e === n
          ? ((o = !0), (le = []), (We = 0), (e = t.getElementsByTagName("*")))
          : e.length === n && (e = [e]),
          r = 0,
          i = e.length;
        r < i;
        r++
      ) {
        var s = e[r],
          a = s,
          l = [],
          u = me,
          c = xe,
          f = !1;
        if ((o && E in s && delete s[E], s.attributes)) {
          for (var p = 0, h = s.attributes.length; p < h; p++) {
            var m = s.attributes[p];
            if ("data-anchor-target" !== m.name)
              if ("data-smooth-scrolling" !== m.name)
                if ("data-edge-strategy" !== m.name)
                  if ("data-emit-events" !== m.name) {
                    var g = m.name.match(j);
                    if (null !== g) {
                      var v = {
                        props: m.value,
                        element: s,
                        eventType: m.name.replace(M, q),
                      };
                      l.push(v);
                      var y = g[1];
                      y && (v.constant = y.substr(1));
                      var x = g[2];
                      /p$/.test(x)
                        ? ((v.isPercentage = !0),
                          (v.offset = (0 | x.slice(0, -1)) / 100))
                        : (v.offset = 0 | x);
                      var _ = g[3],
                        b = g[4] || _;
                      _ && _ !== P && _ !== A
                        ? ((v.mode = "relative"), (v.anchors = [_, b]))
                        : ((v.mode = "absolute"),
                          _ === A
                            ? (v.isEnd = !0)
                            : v.isPercentage || (v.offset = v.offset * Le));
                    }
                  } else f = !0;
                else c = m.value;
              else u = "off" !== m.value;
            else if (((a = t.querySelector(m.value)), null === a))
              throw 'Unable to find anchor target "' + m.value + '"';
          }
          if (l.length) {
            var w, T, k;
            !o && E in s
              ? ((k = s[E]), (w = le[k].styleAttr), (T = le[k].classAttr))
              : ((k = s[E] = We++), (w = s.style.cssText), (T = Ne(s))),
              (le[k] = {
                element: s,
                styleAttr: w,
                classAttr: T,
                anchorTarget: a,
                keyFrames: l,
                smoothScrolling: u,
                edgeStrategy: c,
                emitEvents: f,
                lastFrameIndex: -1,
              }),
              Oe(s, [d], []);
          }
        }
      }
      for (Ce(), r = 0, i = e.length; r < i; r++) {
        var S = le[e[r][E]];
        S !== n && (J(S), te(S));
      }
      return ae;
    }),
      (r.prototype.relativeToAbsolute = function (e, t, n) {
        var r = i.clientHeight,
          o = e.getBoundingClientRect(),
          s = o.top,
          a = o.bottom - o.top;
        return (
          t === O ? (s -= r) : t === N && (s -= r / 2),
          n === O ? (s += a) : n === N && (s += a / 2),
          (s += ae.getScrollTop()),
          (s + 0.5) | 0
        );
      }),
      (r.prototype.animateTo = function (e, t) {
        t = t || {};
        var r = Re(),
          i = ae.getScrollTop(),
          o = t.duration === n ? T : t.duration;
        return (
          (de = {
            startTop: i,
            topDiff: e - i,
            targetTop: e,
            duration: o,
            startTime: r,
            endTime: r + o,
            easing: U[t.easing || w],
            done: t.done,
          }),
          de.topDiff || (de.done && de.done.call(ae, !1), (de = n)),
          ae
        );
      }),
      (r.prototype.stopAnimateTo = function () {
        de && de.done && de.done.call(ae, !0), (de = n);
      }),
      (r.prototype.isAnimatingTo = function () {
        return !!de;
      }),
      (r.prototype.isMobile = function () {
        return Be;
      }),
      (r.prototype.setScrollTop = function (t, n) {
        return (
          (ye = n === !0),
          Be ? ($e = l.min(l.max(t, 0), Fe)) : e.scrollTo(0, t),
          ae
        );
      }),
      (r.prototype.getScrollTop = function () {
        return Be ? $e : e.pageYOffset || i.scrollTop || o.scrollTop || 0;
      }),
      (r.prototype.getMaxScrollTop = function () {
        return Fe;
      }),
      (r.prototype.on = function (e, t) {
        return (ce[e] = t), ae;
      }),
      (r.prototype.off = function (e) {
        return delete ce[e], ae;
      }),
      (r.prototype.destroy = function () {
        var e = V();
        e(be), ke(), Oe(i, [x], [y, _, b]);
        for (var t = 0, r = le.length; t < r; t++) oe(le[t].element);
        (i.style.overflow = o.style.overflow = ""),
          (i.style.height = o.style.height = ""),
          ue && s.setStyle(ue, "transform", "none"),
          (ae = n),
          (ue = n),
          (ce = n),
          (fe = n),
          (Fe = 0),
          (Le = 1),
          (pe = n),
          (he = n),
          (Me = "down"),
          (qe = -1),
          (Xe = 0),
          (ze = 0),
          (Ie = !1),
          (de = n),
          (me = n),
          (ge = n),
          (ve = n),
          (ye = n),
          (We = 0),
          (xe = n),
          (Be = !1),
          ($e = 0),
          (_e = n);
      });
    var G = function () {
        var r, s, a, u, d, m, g, v, y, x, _, b;
        we(i, [c, f, p, h].join(" "), function (e) {
          var i = e.changedTouches[0];
          for (u = e.target; 3 === u.nodeType; ) u = u.parentNode;
          switch (
            ((d = i.clientY),
            (m = i.clientX),
            (x = e.timeStamp),
            D.test(u.tagName) || e.preventDefault(),
            e.type)
          ) {
            case c:
              r && r.blur(),
                ae.stopAnimateTo(),
                (r = u),
                (s = g = d),
                (a = m),
                (y = x);
              break;
            case f:
              D.test(u.tagName) && t.activeElement !== u && e.preventDefault(),
                (v = d - g),
                (b = x - _),
                ae.setScrollTop($e - v, !0),
                (g = d),
                (_ = x);
              break;
            default:
            case p:
            case h:
              var o = s - d,
                w = a - m,
                T = w * w + o * o;
              if (T < 49) {
                if (!D.test(r.tagName)) {
                  r.focus();
                  var k = t.createEvent("MouseEvents");
                  k.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    e.view,
                    1,
                    i.screenX,
                    i.screenY,
                    i.clientX,
                    i.clientY,
                    e.ctrlKey,
                    e.altKey,
                    e.shiftKey,
                    e.metaKey,
                    0,
                    null
                  ),
                    r.dispatchEvent(k);
                }
                return;
              }
              r = n;
              var S = v / b;
              S = l.max(l.min(S, 3), -3);
              var C = l.abs(S / he),
                P = S * C + 0.5 * he * C * C,
                A = ae.getScrollTop() - P,
                N = 0;
              A > Fe
                ? ((N = (Fe - A) / P), (A = Fe))
                : A < 0 && ((N = -A / P), (A = 0)),
                (C *= 1 - N),
                ae.animateTo((A + 0.5) | 0, {
                  easing: "outCubic",
                  duration: C,
                });
          }
        }),
          e.scrollTo(0, 0),
          (i.style.overflow = o.style.overflow = "hidden");
      },
      Z = function () {
        var e,
          t,
          n,
          r,
          o,
          s,
          a,
          u,
          c,
          f,
          p,
          h = i.clientHeight,
          d = Pe();
        for (u = 0, c = le.length; u < c; u++)
          for (
            e = le[u],
              t = e.element,
              n = e.anchorTarget,
              r = e.keyFrames,
              o = 0,
              s = r.length;
            o < s;
            o++
          )
            (a = r[o]),
              (f = a.offset),
              (p = d[a.constant] || 0),
              (a.frame = f),
              a.isPercentage && ((f *= h), (a.frame = f)),
              "relative" === a.mode &&
                (oe(t),
                (a.frame =
                  ae.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - f),
                oe(t, !0)),
              (a.frame += p),
              fe && !a.isEnd && a.frame > Fe && (Fe = a.frame);
        for (Fe = l.max(Fe, Ae()), u = 0, c = le.length; u < c; u++) {
          for (e = le[u], r = e.keyFrames, o = 0, s = r.length; o < s; o++)
            (a = r[o]),
              (p = d[a.constant] || 0),
              a.isEnd && (a.frame = Fe - a.offset + p);
          e.keyFrames.sort(je);
        }
      },
      Q = function (e, t) {
        for (var n = 0, r = le.length; n < r; n++) {
          var i,
            o,
            l = le[n],
            u = l.element,
            c = l.smoothScrolling ? e : t,
            f = l.keyFrames,
            p = f.length,
            h = f[0],
            y = f[f.length - 1],
            x = c < h.frame,
            _ = c > y.frame,
            b = x ? h : y,
            w = l.emitEvents,
            T = l.lastFrameIndex;
          if (x || _) {
            if ((x && l.edge === -1) || (_ && 1 === l.edge)) continue;
            switch (
              (x
                ? (Oe(u, [m], [v, g]),
                  w &&
                    T > -1 &&
                    (Se(u, h.eventType, Me), (l.lastFrameIndex = -1)))
                : (Oe(u, [v], [m, g]),
                  w &&
                    T < p &&
                    (Se(u, y.eventType, Me), (l.lastFrameIndex = p))),
              (l.edge = x ? -1 : 1),
              l.edgeStrategy)
            ) {
              case "reset":
                oe(u);
                continue;
              case "ease":
                c = b.frame;
                break;
              default:
              case "set":
                var k = b.props;
                for (i in k)
                  a.call(k, i) &&
                    ((o = ie(k[i].value)),
                    0 === i.indexOf("@")
                      ? u.setAttribute(i.substr(1), o)
                      : s.setStyle(u, i, o));
                continue;
            }
          } else 0 !== l.edge && (Oe(u, [d, g], [m, v]), (l.edge = 0));
          for (var S = 0; S < p - 1; S++)
            if (c >= f[S].frame && c <= f[S + 1].frame) {
              var C = f[S],
                P = f[S + 1];
              for (i in C.props)
                if (a.call(C.props, i)) {
                  var A = (c - C.frame) / (P.frame - C.frame);
                  (A = C.props[i].easing(A)),
                    (o = re(C.props[i].value, P.props[i].value, A)),
                    (o = ie(o)),
                    0 === i.indexOf("@")
                      ? u.setAttribute(i.substr(1), o)
                      : s.setStyle(u, i, o);
                }
              w &&
                T !== S &&
                ("down" === Me
                  ? Se(u, C.eventType, Me)
                  : Se(u, P.eventType, Me),
                (l.lastFrameIndex = S));
              break;
            }
        }
      },
      K = function () {
        Ie && ((Ie = !1), Ce());
        var e,
          t,
          r = ae.getScrollTop(),
          i = Re();
        if (de)
          i >= de.endTime
            ? ((r = de.targetTop), (e = de.done), (de = n))
            : ((t = de.easing((i - de.startTime) / de.duration)),
              (r = (de.startTop + t * de.topDiff) | 0)),
            ae.setScrollTop(r, !0);
        else if (!ye) {
          var o = ve.targetTop - r;
          o &&
            (ve = {
              startTop: qe,
              topDiff: r - qe,
              targetTop: r,
              startTime: He,
              endTime: He + ge,
            }),
            i <= ve.endTime &&
              ((t = U.sqrt((i - ve.startTime) / ge)),
              (r = (ve.startTop + t * ve.topDiff) | 0));
        }
        if (ye || qe !== r) {
          (Me = r > qe ? "down" : r < qe ? "up" : Me), (ye = !1);
          var a = { curTop: r, lastTop: qe, maxTop: Fe, direction: Me },
            l = ce.beforerender && ce.beforerender.call(ae, a);
          l !== !1 &&
            (Q(r, ae.getScrollTop()),
            Be &&
              ue &&
              s.setStyle(ue, "transform", "translate(0, " + -$e + "px) " + _e),
            (qe = r),
            ce.render && ce.render.call(ae, a)),
            e && e.call(ae, !1);
        }
        He = i;
      },
      J = function (e) {
        for (var t = 0, n = e.keyFrames.length; t < n; t++) {
          for (
            var r, i, o, s, a = e.keyFrames[t], l = {};
            null !== (s = F.exec(a.props));

          )
            (o = s[1]),
              (i = s[2]),
              (r = o.match(L)),
              null !== r ? ((o = r[1]), (r = r[2])) : (r = w),
              (i = i.indexOf("!") ? ee(i) : [i.slice(1)]),
              (l[o] = { value: i, easing: U[r] });
          a.props = l;
        }
      },
      ee = function (e) {
        var t = [];
        return (
          (z.lastIndex = 0),
          (e = e.replace(z, function (e) {
            return e.replace(H, function (e) {
              return (e / 255) * 100 + "%";
            });
          })),
          B &&
            ((I.lastIndex = 0),
            (e = e.replace(I, function (e) {
              return B + e;
            }))),
          (e = e.replace(H, function (e) {
            return t.push(+e), "{?}";
          })),
          t.unshift(e),
          t
        );
      },
      te = function (e) {
        var t,
          n,
          r = {};
        for (t = 0, n = e.keyFrames.length; t < n; t++) ne(e.keyFrames[t], r);
        for (r = {}, t = e.keyFrames.length - 1; t >= 0; t--)
          ne(e.keyFrames[t], r);
      },
      ne = function (e, t) {
        var n;
        for (n in t) a.call(e.props, n) || (e.props[n] = t[n]);
        for (n in e.props) t[n] = e.props[n];
      },
      re = function (e, t, n) {
        var r,
          i = e.length;
        if (i !== t.length)
          throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var o = [e[0]];
        for (r = 1; r < i; r++) o[r] = e[r] + (t[r] - e[r]) * n;
        return o;
      },
      ie = function (e) {
        var t = 1;
        return (
          (X.lastIndex = 0),
          e[0].replace(X, function () {
            return e[t++];
          })
        );
      },
      oe = function (e, t) {
        e = [].concat(e);
        for (var n, r, i = 0, o = e.length; i < o; i++)
          (r = e[i]),
            (n = le[r[E]]),
            n &&
              (t
                ? ((r.style.cssText = n.dirtyStyleAttr),
                  Oe(r, n.dirtyClassAttr))
                : ((n.dirtyStyleAttr = r.style.cssText),
                  (n.dirtyClassAttr = Ne(r)),
                  (r.style.cssText = n.styleAttr),
                  Oe(r, n.classAttr)));
      },
      se = function () {
        (_e = "translateZ(0)"), s.setStyle(ue, "transform", _e);
        var e = u(ue),
          t = e.getPropertyValue("transform"),
          n = e.getPropertyValue(B + "transform"),
          r = (t && "none" !== t) || (n && "none" !== n);
        r || (_e = "");
      };
    s.setStyle = function (e, t, n) {
      var r = e.style;
      if (((t = t.replace(M, q).replace("-", "")), "zIndex" === t))
        isNaN(n) ? (r[t] = n) : (r[t] = "" + (0 | n));
      else if ("float" === t) r.styleFloat = r.cssFloat = n;
      else
        try {
          W && (r[W + t.slice(0, 1).toUpperCase() + t.slice(1)] = n),
            (r[t] = n);
        } catch (i) {}
    };
    var ae,
      le,
      ue,
      ce,
      fe,
      pe,
      he,
      de,
      me,
      ge,
      ve,
      ye,
      xe,
      _e,
      be,
      we = (s.addEvent = function (t, n, r) {
        var i = function (t) {
          return (
            (t = t || e.event),
            t.target || (t.target = t.srcElement),
            t.preventDefault ||
              (t.preventDefault = function () {
                (t.returnValue = !1), (t.defaultPrevented = !0);
              }),
            r.call(this, t)
          );
        };
        n = n.split(" ");
        for (var o, s = 0, a = n.length; s < a; s++)
          (o = n[s]),
            t.addEventListener
              ? t.addEventListener(o, r, !1)
              : t.attachEvent("on" + o, i),
            Ye.push({ element: t, name: o, listener: r });
      }),
      Te = (s.removeEvent = function (e, t, n) {
        t = t.split(" ");
        for (var r = 0, i = t.length; r < i; r++)
          e.removeEventListener
            ? e.removeEventListener(t[r], n, !1)
            : e.detachEvent("on" + t[r], n);
      }),
      ke = function () {
        for (var e, t = 0, n = Ye.length; t < n; t++)
          (e = Ye[t]), Te(e.element, e.name, e.listener);
        Ye = [];
      },
      Se = function (e, t, n) {
        ce.keyframe && ce.keyframe.call(ae, e, t, n);
      },
      Ce = function () {
        var e = ae.getScrollTop();
        (Fe = 0),
          fe && !Be && (o.style.height = ""),
          Z(),
          fe && !Be && (o.style.height = Fe + i.clientHeight + "px"),
          Be
            ? ae.setScrollTop(l.min(ae.getScrollTop(), Fe))
            : ae.setScrollTop(e, !0),
          (ye = !0);
      },
      Pe = function () {
        var e,
          t,
          n = i.clientHeight,
          r = {};
        for (e in pe)
          (t = pe[e]),
            "function" == typeof t
              ? (t = t.call(ae))
              : /p$/.test(t) && (t = (t.slice(0, -1) / 100) * n),
            (r[e] = t);
        return r;
      },
      Ae = function () {
        var e,
          t = 0;
        return (
          ue && (t = l.max(ue.offsetHeight, ue.scrollHeight)),
          (e = l.max(
            t,
            o.scrollHeight,
            o.offsetHeight,
            i.scrollHeight,
            i.offsetHeight,
            i.clientHeight
          )),
          e - i.clientHeight
        );
      },
      Ne = function (t) {
        var n = "className";
        return (
          e.SVGElement &&
            t instanceof e.SVGElement &&
            ((t = t[n]), (n = "baseVal")),
          t[n]
        );
      },
      Oe = function (t, r, i) {
        var o = "className";
        if (
          (e.SVGElement &&
            t instanceof e.SVGElement &&
            ((t = t[o]), (o = "baseVal")),
          i === n)
        )
          return void (t[o] = r);
        for (var s = t[o], a = 0, l = i.length; a < l; a++)
          s = De(s).replace(De(i[a]), " ");
        s = Ee(s);
        for (var u = 0, c = r.length; u < c; u++)
          De(s).indexOf(De(r[u])) === -1 && (s += " " + r[u]);
        t[o] = Ee(s);
      },
      Ee = function (e) {
        return e.replace(R, "");
      },
      De = function (e) {
        return " " + e + " ";
      },
      Re =
        Date.now ||
        function () {
          return +new Date();
        },
      je = function (e, t) {
        return e.frame - t.frame;
      },
      Fe = 0,
      Le = 1,
      Me = "down",
      qe = -1,
      He = Re(),
      Xe = 0,
      ze = 0,
      Ie = !1,
      We = 0,
      Be = !1,
      $e = 0,
      Ye = [];
    "function" == typeof define && define.amd
      ? define([], function () {
          return s;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = s)
      : (e.skrollr = s);
  })(window, document);
