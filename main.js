
(function(e, f) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = f() : "function" === typeof define && define.amd ? define(f) : (e = e || self,
    e.SimpleBar = f())
}
)(this, function() {
    function e(a, b) {
        return b = {
            exports: {}
        },
        a(b, b.exports),
        b.exports
    }
    function f(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value"in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d)
        }
    }
    function g(a, b, c) {
        b && f(a.prototype, b);
        c && f(a, c);
        return a
    }
    function k(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = null != arguments[b] ? arguments[b] : {}
              , d = Object.keys(c);
            "function" === typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
            })));
            d.forEach(function(b) {
                var d = c[b];
                b in a ? Object.defineProperty(a, b, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = d
            })
        }
        return a
    }
    function l(a, b, c) {
        function d(b) {
            var d = D
              , c = J;
            D = J = void 0;
            l = b;
            return k = a.apply(c, d)
        }
        function h(a) {
            var d = a - v;
            a -= l;
            return void 0 === v || d >= b || 0 > d || r && a >= m
        }
        function q() {
            var a = sa.Date.now();
            if (h(a))
                return e(a);
            var d = setTimeout;
            var c = a - l;
            a = b - (a - v);
            c = r ? Ab(a, m - c) : a;
            f = d(q, c)
        }
        function e(a) {
            f = void 0;
            if (x && D)
                return d(a);
            D = J = void 0;
            return k
        }
        function g() {
            var a = sa.Date.now()
              , c = h(a);
            D = arguments;
            J = this;
            v = a;
            if (c) {
                if (void 0 === f)
                    return l = a = v,
                    f = setTimeout(q, b),
                    Ka ? d(a) : k;
                if (r)
                    return f = setTimeout(q, b),
                    d(v)
            }
            void 0 === f && (f = setTimeout(q, b));
            return k
        }
        var D, J, k, f, v, l = 0, Ka = !1, r = !1, x = !0;
        if ("function" != typeof a)
            throw new TypeError("Expected a function");
        b = H(b) || 0;
        if (t(c)) {
            Ka = !!c.leading;
            var m = (r = "maxWait"in c) ? Bb(H(c.maxWait) || 0, b) : m;
            x = "trailing"in c ? !!c.trailing : x
        }
        g.cancel = function() {
            void 0 !== f && clearTimeout(f);
            l = 0;
            D = v = J = f = void 0
        }
        ;
        g.flush = function() {
            return void 0 === f ? k : e(sa.Date.now())
        }
        ;
        return g
    }
    function t(a) {
        var b = typeof a;
        return !!a && ("object" == b || "function" == b)
    }
    function H(a) {
        if ("number" == typeof a)
            return a;
        var b = a;
        if ("symbol" == typeof b || b && "object" == typeof b && "[object Symbol]" == Cb.call(b))
            return La;
        t(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a,
        a = t(a) ? a + "" : a);
        if ("string" != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(Db, "");
        return (b = Eb.test(a)) || Fb.test(a) ? Gb(a.slice(2), b ? 2 : 8) : Hb.test(a) ? La : +a
    }
    function U(a) {
        var b = typeof a;
        return !!a && ("object" == b || "function" == b)
    }
    function da(a) {
        if ("number" == typeof a)
            return a;
        var b = a;
        if ("symbol" == typeof b || b && "object" == typeof b && "[object Symbol]" == Ib.call(b))
            return Ma;
        U(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a,
        a = U(a) ? a + "" : a);
        if ("string" != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(Jb, "");
        return (b = Kb.test(a)) || Lb.test(a) ? Mb(a.slice(2), b ? 2 : 8) : Nb.test(a) ? Ma : +a
    }
    function ca(a) {
        var b = !1;
        if (null != a && "function" != typeof a.toString)
            try {
                b = !!(a + "")
            } catch (c) {}
        return b
    }
    function E(a) {
        var b = -1
          , c = a ? a.length : 0;
        for (this.clear(); ++b < c; ) {
            var d = a[b];
            this.set(d[0], d[1])
        }
    }
    function I(a) {
        var b = -1
          , c = a ? a.length : 0;
        for (this.clear(); ++b < c; ) {
            var d = a[b];
            this.set(d[0], d[1])
        }
    }
    function z(a) {
        var b = -1
          , c = a ? a.length : 0;
        for (this.clear(); ++b < c; ) {
            var d = a[b];
            this.set(d[0], d[1])
        }
    }
    function M(a, b) {
        for (var c = a.length; c--; ) {
            var d = a[c][0];
            if (d === b || d !== d && b !== b)
                return c
        }
        return -1
    }
    function ba(a, b) {
        a = a.__data__;
        var c = typeof b;
        return ("string" == c || "number" == c || "symbol" == c || "boolean" == c ? "__proto__" !== b : null === b) ? a["string" == typeof b ? "string" : "hash"] : a.map
    }
    function n(a, b) {
        a = null == a ? void 0 : a[b];
        !u(a) || Na && Na in a ? b = !1 : (b = u(a) ? Ob.call(a) : "",
        b = ("[object Function]" == b || "[object GeneratorFunction]" == b || ca(a) ? Pb : Qb).test(zb(a)));
        return b ? a : void 0
    }
    function zb(a) {
        if (null != a) {
            try {
                return Oa.call(a)
            } catch (b) {}
            return a + ""
        }
        return ""
    }
    function A(a, b) {
        if ("function" != typeof a || b && "function" != typeof b)
            throw new TypeError("Expected a function");
        var c = function() {
            var d = arguments
              , h = b ? b.apply(this, d) : d[0]
              , q = c.cache;
            if (q.has(h))
                return q.get(h);
            d = a.apply(this, d);
            c.cache = q.set(h, d);
            return d
        };
        c.cache = new (A.Cache || z);
        return c
    }
    function u(a) {
        var b = typeof a;
        return !!a && ("object" == b || "function" == b)
    }
    function F(a, b) {
        function c() {
            q && (q = !1,
            a());
            e && h()
        }
        function d() {
            Rb(c)
        }
        function h() {
            var a = Date.now();
            if (q) {
                if (2 > a - g)
                    return;
                e = !0
            } else
                q = !0,
                e = !1,
                setTimeout(d, b);
            g = a
        }
        var q = !1
          , e = !1
          , g = 0;
        return h
    }
    function Pa(a) {
        for (var b = [], c = 1; c < arguments.length; c++)
            b[c - 1] = arguments[c];
        return b.reduce(function(b, c) {
            return b + (parseFloat(a["border-" + c + "-width"]) || 0)
        }, 0)
    }
    var Q = function(a) {
        return "object" === typeof a ? null !== a : "function" === typeof a
    }
      , G = function(a) {
        if (!Q(a))
            throw TypeError(a + " is not an object!");
        return a
    }
      , K = function(a) {
        if (void 0 == a)
            throw TypeError("Can't call method on  " + a);
        return a
    }
      , Sb = Math.ceil
      , Tb = Math.floor
      , ea = function(a) {
        return isNaN(a = +a) ? 0 : (0 < a ? Tb : Sb)(a)
    }
      , Ub = Math.min
      , fa = function(a) {
        return 0 < a ? Ub(ea(a), 9007199254740991) : 0
    }
      , Qa = function(a) {
        return function(b, c) {
            b = String(K(b));
            c = ea(c);
            var d = b.length, h;
            if (0 > c || c >= d)
                return a ? "" : void 0;
            var q = b.charCodeAt(c);
            return 55296 > q || 56319 < q || c + 1 === d || 56320 > (h = b.charCodeAt(c + 1)) || 57343 < h ? a ? b.charAt(c) : q : a ? b.slice(c, c + 2) : (q - 55296 << 10) + (h - 56320) + 65536
        }
    }
      , Ra = Qa(!0)
      , Vb = {}.toString
      , ha = function(a) {
        return Vb.call(a).slice(8, -1)
    }
      , w = "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {}
      , N = e(function(a) {
        a = a.exports = {
            version: "2.6.2"
        };
        "number" == typeof __e && (__e = a)
    })
      , y = e(function(a) {
        a = a.exports = "undefined" != typeof window && Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = a)
    })
      , Sa = e(function(a) {
        var b = y["__core-js_shared__"] || (y["__core-js_shared__"] = {});
        (a.exports = function(a, d) {
            return b[a] || (b[a] = void 0 !== d ? d : {})
        }
        )("versions", []).push({
            version: N.version,
            mode: "global",
            copyright: "\u00a9 2019 Denis Pushkarev (zloirock.ru)"
        })
    })
      , Wb = 0
      , Xb = Math.random()
      , ta = function(a) {
        return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++Wb + Xb).toString(36))
    }
      , B = e(function(a) {
        var b = Sa("wks")
          , c = y.Symbol
          , d = "function" == typeof c;
        (a.exports = function(a) {
            return b[a] || (b[a] = d && c[a] || (d ? c : ta)("Symbol." + a))
        }
        ).store = b
    })
      , Yb = B("toStringTag")
      , Zb = "Arguments" == ha(function() {
        return arguments
    }())
      , Ta = function(a) {
        var b;
        if (void 0 === a)
            var c = "Undefined";
        else {
            if (null === a)
                var d = "Null";
            else {
                a: {
                    var h = a = Object(a);
                    try {
                        d = h[Yb];
                        break a
                    } catch (q) {}
                    d = void 0
                }
                d = "string" == typeof (c = d) ? c : Zb ? ha(a) : "Object" == (b = ha(a)) && "function" == typeof a.callee ? "Arguments" : b
            }
            c = d
        }
        return c
    }
      , $b = RegExp.prototype.exec
      , ua = function(a, b) {
        var c = a.exec;
        if ("function" === typeof c) {
            a = c.call(a, b);
            if ("object" !== typeof a)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
            return a
        }
        if ("RegExp" !== Ta(a))
            throw new TypeError("RegExp#exec called on incompatible receiver");
        return $b.call(a, b)
    }
      , ac = function() {
        var a = G(this)
          , b = "";
        a.global && (b += "g");
        a.ignoreCase && (b += "i");
        a.multiline && (b += "m");
        a.unicode && (b += "u");
        a.sticky && (b += "y");
        return b
    }
      , ia = RegExp.prototype.exec
      , bc = String.prototype.replace
      , Ua = ia
      , va = function() {
        var a = /a/
          , b = /b*/g;
        ia.call(a, "a");
        ia.call(b, "a");
        return 0 !== a.lastIndex || 0 !== b.lastIndex
    }()
      , wa = void 0 !== /()??/.exec("")[1];
    if (va || wa)
        Ua = function(a) {
            var b, c, d;
            wa && (c = new RegExp("^" + this.source + "$(?!\\s)",ac.call(this)));
            va && (b = this.lastIndex);
            var h = ia.call(this, a);
            va && h && (this.lastIndex = this.global ? h.index + h[0].length : b);
            wa && h && 1 < h.length && bc.call(h[0], c, function() {
                for (d = 1; d < arguments.length - 2; d++)
                    void 0 === arguments[d] && (h[d] = void 0)
            });
            return h
        }
        ;
    var xa = Ua
      , V = function(a) {
        try {
            return !!a()
        } catch (b) {
            return !0
        }
    }
      , W = !V(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , ja = y.document
      , Va = Q(ja) && Q(ja.createElement)
      , cc = !W && !V(function() {
        return 7 != Object.defineProperty(Va ? ja.createElement("div") : {}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , dc = Object.defineProperty
      , R = {
        f: W ? Object.defineProperty : function(a, b, c) {
            G(a);
            if (Q(b)) {
                var d, h;
                if ("function" == typeof (d = b.toString) && !Q(h = d.call(b)) || "function" == typeof (d = b.valueOf) && !Q(h = d.call(b)))
                    b = h;
                else
                    throw TypeError("Can't convert object to primitive value");
            }
            G(c);
            if (cc)
                try {
                    return dc(a, b, c)
                } catch (q) {}
            if ("get"in c || "set"in c)
                throw TypeError("Accessors not supported!");
            "value"in c && (a[b] = c.value);
            return a
        }
    }
      , ka = function(a, b) {
        return {
            enumerable: !(a & 1),
            configurable: !(a & 2),
            writable: !(a & 4),
            value: b
        }
    }
      , C = W ? function(a, b, c) {
        return R.f(a, b, ka(1, c))
    }
    : function(a, b, c) {
        a[b] = c;
        return a
    }
      , ec = {}.hasOwnProperty
      , S = function(a, b) {
        return ec.call(a, b)
    }
      , la = e(function(a) {
        var b = ta("src")
          , c = Function.toString
          , d = ("" + c).split("toString");
        N.inspectSource = function(a) {
            return c.call(a)
        }
        ;
        (a.exports = function(a, c, e, g) {
            var h = "function" == typeof e;
            h && (S(e, "name") || C(e, "name", c));
            a[c] !== e && (h && (S(e, b) || C(e, b, a[c] ? "" + a[c] : d.join(String(c)))),
            a === y ? a[c] = e : g ? a[c] ? a[c] = e : C(a, c, e) : (delete a[c],
            C(a, c, e)))
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && this[b] || c.call(this)
        })
    })
      , fc = function(a) {
        if ("function" != typeof a)
            throw TypeError(a + " is not a function!");
        return a
    }
      , ya = function(a, b, c) {
        fc(a);
        if (void 0 === b)
            return a;
        switch (c) {
        case 1:
            return function(c) {
                return a.call(b, c)
            }
            ;
        case 2:
            return function(c, h) {
                return a.call(b, c, h)
            }
            ;
        case 3:
            return function(c, h, e) {
                return a.call(b, c, h, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , m = function(a, b, c) {
        var d = a & m.F
          , h = a & m.G
          , e = a & m.S
          , g = a & m.P
          , f = a & m.B;
        e = h ? y : e ? y[b] || (y[b] = {}) : (y[b] || {}).prototype;
        var D = h ? N : N[b] || (N[b] = {}), J = D.prototype || (D.prototype = {}), k;
        h && (c = b);
        for (k in c)
            h = !d && e && void 0 !== e[k],
            b = (h ? e : c)[k],
            h = f && h ? ya(b, y) : g && "function" == typeof b ? ya(Function.call, b) : b,
            e && la(e, k, b, a & m.U),
            D[k] != b && C(D, k, h),
            g && J[k] != b && (J[k] = b)
    };
    y.core = N;
    m.F = 1;
    m.G = 2;
    m.S = 4;
    m.P = 8;
    m.B = 16;
    m.W = 32;
    m.U = 64;
    m.R = 128;
    var O = m;
    O({
        target: "RegExp",
        proto: !0,
        forced: xa !== /./.exec
    }, {
        exec: xa
    });
    var gc = B("species")
      , hc = !V(function() {
        var a = /./;
        a.exec = function() {
            var a = [];
            a.groups = {
                a: "7"
            };
            return a
        }
        ;
        return "7" !== "".replace(a, "$<a>")
    })
      , ic = function() {
        var a = /(?:)/
          , b = a.exec;
        a.exec = function() {
            return b.apply(this, arguments)
        }
        ;
        a = "ab".split(a);
        return 2 === a.length && "a" === a[0] && "b" === a[1]
    }()
      , Wa = function(a, b, c) {
        var d = B(a)
          , h = !V(function() {
            var b = {};
            b[d] = function() {
                return 7
            }
            ;
            return 7 != ""[a](b)
        })
          , e = h ? !V(function() {
            var b = !1
              , c = /a/;
            c.exec = function() {
                b = !0;
                return null
            }
            ;
            "split" === a && (c.constructor = {},
            c.constructor[gc] = function() {
                return c
            }
            );
            c[d]("");
            return !b
        }) : void 0;
        if (!h || !e || "replace" === a && !hc || "split" === a && !ic) {
            var g = /./[d];
            c = c(K, d, ""[a], function(a, b, c, d, e) {
                return b.exec === xa ? h && !e ? {
                    done: !0,
                    value: g.call(b, c, d)
                } : {
                    done: !0,
                    value: a.call(c, b, d)
                } : {
                    done: !1
                }
            });
            var k = c[1];
            la(String.prototype, a, c[0]);
            C(RegExp.prototype, d, 2 == b ? function(a, b) {
                return k.call(a, this, b)
            }
            : function(a) {
                return k.call(a, this)
            }
            )
        }
    }
      , jc = Math.max
      , kc = Math.min
      , lc = Math.floor
      , mc = /\$([$&`']|\d\d?|<[^>]*>)/g
      , nc = /\$([$&`']|\d\d?)/g
      , oc = function(a) {
        return void 0 === a ? a : String(a)
    };
    Wa("replace", 2, function(a, b, c, d) {
        function h(a, b, d, h, e, g) {
            var q = d + a.length
              , k = h.length
              , f = nc;
            void 0 !== e && (e = Object(K(e)),
            f = mc);
            return c.call(g, f, function(c, g) {
                switch (g.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return a;
                case "`":
                    return b.slice(0, d);
                case "'":
                    return b.slice(q);
                case "<":
                    c = e[g.slice(1, -1)];
                    break;
                default:
                    var f = +g;
                    if (0 === f)
                        return c;
                    if (f > k)
                        return f = lc(f / 10),
                        0 === f ? c : f <= k ? void 0 === h[f - 1] ? g.charAt(1) : h[f - 1] + g.charAt(1) : c;
                    c = h[f - 1]
                }
                return void 0 === c ? "" : c
            })
        }
        return [function(d, h) {
            var e = a(this)
              , g = void 0 == d ? void 0 : d[b];
            return void 0 !== g ? g.call(d, e, h) : c.call(String(e), d, h)
        }
        , function(a, b) {
            var e = d(c, a, this, b);
            if (e.done)
                return e.value;
            var g = G(a);
            a = String(this);
            (e = "function" === typeof b) || (b = String(b));
            var f = g.global;
            if (f) {
                var k = g.unicode;
                g.lastIndex = 0
            }
            for (var q = []; ; ) {
                var p = ua(g, a);
                if (null === p)
                    break;
                q.push(p);
                if (!f)
                    break;
                "" === String(p[0]) && (p = fa(g.lastIndex),
                p += k ? Ra(a, p).length : 1,
                g.lastIndex = p)
            }
            k = "";
            for (f = g = 0; f < q.length; f++) {
                p = q[f];
                for (var l = String(p[0]), m = jc(kc(ea(p.index), a.length), 0), r = [], x = 1; x < p.length; x++)
                    r.push(oc(p[x]));
                p = p.groups;
                e ? (r = [l].concat(r, m, a),
                void 0 !== p && r.push(p),
                p = String(b.apply(void 0, r))) : p = h(l, a, m, r, p, b);
                m >= g && (k += a.slice(g, m) + p,
                g = m + l.length)
            }
            return k + a.slice(g)
        }
        ]
    });
    var pc = R.f
      , Xa = Function.prototype
      , qc = /^\s*function ([^ (]*)/;
    "name"in Xa || W && pc(Xa, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(qc)[1]
            } catch (a) {
                return ""
            }
        }
    });
    Wa("match", 1, function(a, b, c, d) {
        return [function(c) {
            var d = a(this)
              , h = void 0 == c ? void 0 : c[b];
            return void 0 !== h ? h.call(c, d) : (new RegExp(c))[b](String(d))
        }
        , function(a) {
            var b = d(c, a, this);
            if (b.done)
                return b.value;
            a = G(a);
            b = String(this);
            if (!a.global)
                return ua(a, b);
            var h = a.unicode;
            a.lastIndex = 0;
            for (var e = [], g = 0, f; null !== (f = ua(a, b)); )
                f = String(f[0]),
                e[g] = f,
                "" === f && (f = fa(a.lastIndex),
                f += h ? Ra(b, f).length : 1,
                a.lastIndex = f),
                g++;
            return 0 === g ? null : e
        }
        ]
    });
    var X = B("unscopables")
      , Y = Array.prototype;
    void 0 == Y[X] && C(Y, X, {});
    var ma = function(a, b) {
        return {
            value: b,
            done: !!a
        }
    }
      , L = {}
      , za = Object("z").propertyIsEnumerable(0) ? Object : function(a) {
        return "String" == ha(a) ? a.split("") : Object(a)
    }
      , rc = Math.max
      , sc = Math.min
      , Ya = Sa("keys")
      , Aa = function(a) {
        return Ya[a] || (Ya[a] = ta(a))
    }
      , tc = function(a) {
        return function(b, c, d) {
            b = za(K(b));
            var h = fa(b.length);
            d = ea(d);
            d = 0 > d ? rc(d + h, 0) : sc(d, h);
            if (a && c != c)
                for (; h > d; ) {
                    if (c = b[d++],
                    c != c)
                        return !0
                }
            else
                for (; h > d; d++)
                    if ((a || d in b) && b[d] === c)
                        return a || d || 0;
            return !a && -1
        }
    }(!1)
      , uc = Aa("IE_PROTO")
      , na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , Za = Object.keys || function(a) {
        a = za(K(a));
        var b = 0, c = [], d;
        for (d in a)
            d != uc && S(a, d) && c.push(d);
        for (; na.length > b; )
            S(a, d = na[b++]) && (~tc(c, d) || c.push(d));
        return c
    }
      , vc = W ? Object.defineProperties : function(a, b) {
        G(a);
        for (var c = Za(b), d = c.length, h = 0, e; d > h; )
            R.f(a, e = c[h++], b[e]);
        return a
    }
      , $a = y.document
      , wc = $a && $a.documentElement
      , xc = Aa("IE_PROTO")
      , Ba = function() {}
      , oa = function() {
        var a = Va ? ja.createElement("iframe") : {}
          , b = na.length;
        a.style.display = "none";
        wc.appendChild(a);
        a.src = "javascript:";
        a = a.contentWindow.document;
        a.open();
        a.write("<script>document.F=Object\x3c/script>");
        a.close();
        for (oa = a.F; b--; )
            delete oa.prototype[na[b]];
        return oa()
    }
      , yc = Object.create || function(a, b) {
        if (null !== a) {
            Ba.prototype = G(a);
            var c = new Ba;
            Ba.prototype = null;
            c[xc] = a
        } else
            c = oa();
        return void 0 === b ? c : vc(c, b)
    }
      , zc = R.f
      , ab = B("toStringTag")
      , bb = function(a, b, c) {
        a && !S(a = c ? a : a.prototype, ab) && zc(a, ab, {
            configurable: !0,
            value: b
        })
    }
      , cb = {};
    C(cb, B("iterator"), function() {
        return this
    });
    var Ac = function(a, b, c) {
        a.prototype = yc(cb, {
            next: ka(1, c)
        });
        bb(a, b + " Iterator")
    }
      , db = Aa("IE_PROTO")
      , Bc = Object.prototype
      , Cc = Object.getPrototypeOf || function(a) {
        a = Object(K(a));
        return S(a, db) ? a[db] : "function" == typeof a.constructor && a instanceof a.constructor ? a.constructor.prototype : a instanceof Object ? Bc : null
    }
      , Z = B("iterator")
      , Ca = !([].keys && "next"in [].keys())
      , eb = function() {
        return this
    }
      , fb = function(a, b, c, d, h, e, g) {
        Ac(c, b, d);
        d = function(a) {
            return !Ca && a in p ? p[a] : function() {
                return new c(this,a)
            }
        }
        ;
        var f = b + " Iterator", k = "values" == h, q = !1, p = a.prototype, l = p[Z] || p["@@iterator"] || h && p[h], m = l || d(h), t = h ? k ? d("entries") : m : void 0, n = "Array" == b ? p.entries || l : l, r;
        n && (a = Cc(n.call(new a)),
        a !== Object.prototype && a.next && (bb(a, f, !0),
        "function" != typeof a[Z] && C(a, Z, eb)));
        k && l && "values" !== l.name && (q = !0,
        m = function() {
            return l.call(this)
        }
        );
        (Ca || q || !p[Z]) && C(p, Z, m);
        L[b] = m;
        L[f] = eb;
        if (h) {
            var x = {
                values: k ? m : d("values"),
                keys: e ? m : d("keys"),
                entries: t
            };
            if (g)
                for (r in x)
                    r in p || la(p, r, x[r]);
            else
                O(O.P + O.F * (Ca || q), b, x)
        }
        return x
    }
      , gb = fb(Array, "Array", function(a, b) {
        this._t = za(K(a));
        this._i = 0;
        this._k = b
    }, function() {
        var a = this._t
          , b = this._k
          , c = this._i++;
        return !a || c >= a.length ? (this._t = void 0,
        ma(1)) : "keys" == b ? ma(0, c) : "values" == b ? ma(0, a[c]) : ma(0, [c, a[c]])
    }, "values");
    L.Arguments = L.Array;
    Y[X].keys = !0;
    Y[X].values = !0;
    Y[X].entries = !0;
    for (var hb = B("iterator"), ib = B("toStringTag"), jb = L.Array, kb = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, lb = Za(kb), Da = 0; Da < lb.length; Da++) {
        var pa = lb[Da], Dc = kb[pa], mb = y[pa], P = mb && mb.prototype, qa;
        if (P && (P[hb] || C(P, hb, jb),
        P[ib] || C(P, ib, pa),
        L[pa] = jb,
        Dc))
            for (qa in gb)
                P[qa] || la(P, qa, gb[qa], !0)
    }
    var Ec = Qa(!0);
    fb(String, "String", function(a) {
        this._t = String(a);
        this._i = 0
    }, function() {
        var a = this._t
          , b = this._i;
        if (b >= a.length)
            return {
                value: void 0,
                done: !0
            };
        a = Ec(a, b);
        this._i += a.length;
        return {
            value: a,
            done: !1
        }
    });
    var Fc = B("iterator")
      , Gc = Array.prototype
      , Hc = B("iterator")
      , Ic = N.getIteratorMethod = function(a) {
        if (void 0 != a)
            return a[Hc] || a["@@iterator"] || L[Ta(a)]
    }
      , Ea = B("iterator")
      , nb = !1;
    try {
        [7][Ea]()["return"] = function() {
            nb = !0
        }
    } catch (a) {}
    O(O.S + O.F * !function(a, b) {
        if (!b && !nb)
            return !1;
        var c = !1;
        try {
            b = [7];
            var d = b[Ea]();
            d.next = function() {
                return {
                    done: c = !0
                }
            }
            ;
            b[Ea] = function() {
                return d
            }
            ;
            a(b)
        } catch (h) {}
        return c
    }(function(a) {}), "Array", {
        from: function(a) {
            var b = Object(K(a)), c = "function" == typeof this ? this : Array, d = arguments.length, h = 1 < d ? arguments[1] : void 0, e = void 0 !== h, g = 0, f = Ic(b), k;
            e && (h = ya(h, 2 < d ? arguments[2] : void 0, 2));
            if (void 0 != f && (c != Array || void 0 === f || L.Array !== f && Gc[Fc] !== f))
                for (b = f.call(b),
                c = new c; !(k = b.next()).done; g++) {
                    var l = c;
                    d = g;
                    if (e) {
                        f = b;
                        var m = h;
                        k = [k.value, g];
                        try {
                            var n = m(G(k)[0], k[1])
                        } catch (v) {
                            throw h = f["return"],
                            void 0 !== h && G(h.call(f)),
                            v;
                        }
                    } else
                        n = k.value;
                    f = l;
                    l = n;
                    d in f ? R.f(f, d, ka(0, l)) : f[d] = l
                }
            else
                for (n = fa(b.length),
                c = new c(n); n > g; g++)
                    d = c,
                    f = g,
                    l = e ? h(b[g], g) : b[g],
                    f in d ? R.f(d, f, ka(0, l)) : d[f] = l;
            c.length = g;
            return c
        }
    });
    var ob = e(function(a, b) {
        (function(b, d) {
            a.exports = d()
        }
        )(w, function() {
            return function() {
                if ("undefined" === typeof document)
                    return 0;
                var a = document.body
                  , b = document.createElement("div")
                  , h = b.style;
                h.position = "absolute";
                h.top = h.left = "-9999px";
                h.width = h.height = "100px";
                h.overflow = "scroll";
                a.appendChild(b);
                h = b.offsetWidth - b.clientWidth;
                a.removeChild(b);
                return h
            }
        })
    })
      , La = 0 / 0
      , Db = /^\s+|\s+$/g
      , Hb = /^[-+]0x[0-9a-f]+$/i
      , Eb = /^0b[01]+$/i
      , Fb = /^0o[0-7]+$/i
      , Gb = parseInt
      , Jc = "object" == typeof self && self && self.Object === Object && self
      , sa = "object" == typeof w && w && w.Object === Object && w || Jc || Function("return this")()
      , Cb = Object.prototype.toString
      , Bb = Math.max
      , Ab = Math.min
      , pb = function(a, b, c) {
        var d = !0
          , h = !0;
        if ("function" != typeof a)
            throw new TypeError("Expected a function");
        t(c) && (d = "leading"in c ? !!c.leading : d,
        h = "trailing"in c ? !!c.trailing : h);
        return l(a, b, {
            leading: d,
            maxWait: b,
            trailing: h
        })
    }
      , Ma = 0 / 0
      , Jb = /^\s+|\s+$/g
      , Nb = /^[-+]0x[0-9a-f]+$/i
      , Kb = /^0b[01]+$/i
      , Lb = /^0o[0-7]+$/i
      , Mb = parseInt
      , Kc = "object" == typeof self && self && self.Object === Object && self
      , Fa = "object" == typeof w && w && w.Object === Object && w || Kc || Function("return this")()
      , Ib = Object.prototype.toString
      , Lc = Math.max
      , Mc = Math.min
      , qb = function(a, b, c) {
        function d(b) {
            var c = k
              , d = l;
            k = l = void 0;
            t = b;
            return m = a.apply(d, c)
        }
        function h(a) {
            var c = a - v;
            a -= t;
            return void 0 === v || c >= b || 0 > c || r && a >= w
        }
        function e() {
            var a = Fa.Date.now();
            if (h(a))
                return f(a);
            var c = setTimeout;
            var d = a - t;
            a = b - (a - v);
            d = r ? Mc(a, w - d) : a;
            n = c(e, d)
        }
        function f(a) {
            n = void 0;
            if (x && k)
                return d(a);
            k = l = void 0;
            return m
        }
        function g() {
            var a = Fa.Date.now()
              , c = h(a);
            k = arguments;
            l = this;
            v = a;
            if (c) {
                if (void 0 === n)
                    return t = a = v,
                    n = setTimeout(e, b),
                    u ? d(a) : m;
                if (r)
                    return n = setTimeout(e, b),
                    d(v)
            }
            void 0 === n && (n = setTimeout(e, b));
            return m
        }
        var k, l, m, n, v, t = 0, u = !1, r = !1, x = !0;
        if ("function" != typeof a)
            throw new TypeError("Expected a function");
        b = da(b) || 0;
        if (U(c)) {
            u = !!c.leading;
            var w = (r = "maxWait"in c) ? Lc(da(c.maxWait) || 0, b) : w;
            x = "trailing"in c ? !!c.trailing : x
        }
        g.cancel = function() {
            void 0 !== n && clearTimeout(n);
            t = 0;
            k = v = l = n = void 0
        }
        ;
        g.flush = function() {
            return void 0 === n ? m : f(Fa.Date.now())
        }
        ;
        return g
    }
      , Qb = /^\[object .+?Constructor\]$/
      , Nc = "object" == typeof self && self && self.Object === Object && self
      , rb = "object" == typeof w && w && w.Object === Object && w || Nc || Function("return this")()
      , Oc = Array.prototype
      , Pc = Function.prototype
      , sb = Object.prototype
      , Ga = rb["__core-js_shared__"]
      , Na = function() {
        var a = /[^.]+$/.exec(Ga && Ga.keys && Ga.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : ""
    }()
      , Oa = Pc.toString
      , Ha = sb.hasOwnProperty
      , Ob = sb.toString
      , Pb = RegExp("^" + Oa.call(Ha).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , Qc = Oc.splice
      , Rc = n(rb, "Map")
      , aa = n(Object, "create");
    E.prototype.clear = function() {
        this.__data__ = aa ? aa(null) : {}
    }
    ;
    E.prototype["delete"] = function(a) {
        return this.has(a) && delete this.__data__[a]
    }
    ;
    E.prototype.get = function(a) {
        var b = this.__data__;
        return aa ? (a = b[a],
        "__lodash_hash_undefined__" === a ? void 0 : a) : Ha.call(b, a) ? b[a] : void 0
    }
    ;
    E.prototype.has = function(a) {
        var b = this.__data__;
        return aa ? void 0 !== b[a] : Ha.call(b, a)
    }
    ;
    E.prototype.set = function(a, b) {
        this.__data__[a] = aa && void 0 === b ? "__lodash_hash_undefined__" : b;
        return this
    }
    ;
    I.prototype.clear = function() {
        this.__data__ = []
    }
    ;
    I.prototype["delete"] = function(a) {
        var b = this.__data__;
        a = M(b, a);
        if (0 > a)
            return !1;
        a == b.length - 1 ? b.pop() : Qc.call(b, a, 1);
        return !0
    }
    ;
    I.prototype.get = function(a) {
        var b = this.__data__;
        a = M(b, a);
        return 0 > a ? void 0 : b[a][1]
    }
    ;
    I.prototype.has = function(a) {
        return -1 < M(this.__data__, a)
    }
    ;
    I.prototype.set = function(a, b) {
        var c = this.__data__
          , d = M(c, a);
        0 > d ? c.push([a, b]) : c[d][1] = b;
        return this
    }
    ;
    z.prototype.clear = function() {
        this.__data__ = {
            hash: new E,
            map: new (Rc || I),
            string: new E
        }
    }
    ;
    z.prototype["delete"] = function(a) {
        return ba(this, a)["delete"](a)
    }
    ;
    z.prototype.get = function(a) {
        return ba(this, a).get(a)
    }
    ;
    z.prototype.has = function(a) {
        return ba(this, a).has(a)
    }
    ;
    z.prototype.set = function(a, b) {
        ba(this, a).set(a, b);
        return this
    }
    ;
    A.Cache = z;
    var tb = function() {
        function a(a, c) {
            var b = -1;
            a.some(function(a, d) {
                return a[0] === c ? (b = d,
                !0) : !1
            });
            return b
        }
        return "undefined" !== typeof Map ? Map : function() {
            function b() {
                this.__entries__ = []
            }
            Object.defineProperty(b.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.get = function(b) {
                b = a(this.__entries__, b);
                return (b = this.__entries__[b]) && b[1]
            }
            ;
            b.prototype.set = function(b, d) {
                var c = a(this.__entries__, b);
                ~c ? this.__entries__[c][1] = d : this.__entries__.push([b, d])
            }
            ;
            b.prototype.delete = function(b) {
                var c = this.__entries__;
                b = a(c, b);
                ~b && c.splice(b, 1)
            }
            ;
            b.prototype.has = function(b) {
                return !!~a(this.__entries__, b)
            }
            ;
            b.prototype.clear = function() {
                this.__entries__.splice(0)
            }
            ;
            b.prototype.forEach = function(a, b) {
                void 0 === b && (b = null);
                for (var c = 0, d = this.__entries__; c < d.length; c++) {
                    var e = d[c];
                    a.call(b, e[1], e[0])
                }
            }
            ;
            return b
        }()
    }()
      , Ia = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document
      , ra = "undefined" !== typeof global && global.Math === Math ? global : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && Math === Math ? window : Function("return this")()
      , Rb = function() {
        return "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(ra) : function(a) {
            return setTimeout(function() {
                return a(Date.now())
            }, 1E3 / 60)
        }
    }()
      , Sc = "top right bottom left width height size weight".split(" ")
      , Tc = "undefined" !== typeof MutationObserver
      , Uc = function() {
        function a() {
            this.mutationEventsAdded_ = this.connected_ = !1;
            this.mutationsObserver_ = null;
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = F(this.refresh.bind(this), 20)
        }
        a.prototype.addObserver = function(a) {
            ~this.observers_.indexOf(a) || this.observers_.push(a);
            this.connected_ || this.connect_()
        }
        ;
        a.prototype.removeObserver = function(a) {
            var b = this.observers_;
            a = b.indexOf(a);
            ~a && b.splice(a, 1);
            !b.length && this.connected_ && this.disconnect_()
        }
        ;
        a.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }
        ;
        a.prototype.updateObservers_ = function() {
            var a = this.observers_.filter(function(a) {
                return a.gatherActive(),
                a.hasActive()
            });
            a.forEach(function(a) {
                return a.broadcastActive()
            });
            return 0 < a.length
        }
        ;
        a.prototype.connect_ = function() {
            Ia && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Tc ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
            this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
            this.mutationEventsAdded_ = !0),
            this.connected_ = !0)
        }
        ;
        a.prototype.disconnect_ = function() {
            Ia && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
            this.mutationsObserver_ = null,
            this.connected_ = this.mutationEventsAdded_ = !1)
        }
        ;
        a.prototype.onTransitionEnd_ = function(a) {
            a = a.propertyName;
            var b = void 0 === a ? "" : a;
            Sc.some(function(a) {
                return !!~b.indexOf(a)
            }) && this.refresh()
        }
        ;
        a.getInstance = function() {
            this.instance_ || (this.instance_ = new a);
            return this.instance_
        }
        ;
        a.instance_ = null;
        return a
    }()
      , ub = function(a, b) {
        for (var c = 0, d = Object.keys(b); c < d.length; c++) {
            var h = d[c];
            Object.defineProperty(a, h, {
                value: b[h],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return a
    }
      , T = function(a) {
        return a && a.ownerDocument && a.ownerDocument.defaultView || ra
    }
      , vb = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
      , Vc = function() {
        return "undefined" !== typeof SVGGraphicsElement ? function(a) {
            return a instanceof T(a).SVGGraphicsElement
        }
        : function(a) {
            return a instanceof T(a).SVGElement && "function" === typeof a.getBBox
        }
    }()
      , Wc = function() {
        function a(a) {
            this.broadcastHeight = this.broadcastWidth = 0;
            this.contentRect_ = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            this.target = a
        }
        a.prototype.isActive = function() {
            var a = this.target;
            if (Ia)
                if (Vc(a)) {
                    var c = a.getBBox();
                    c = {
                        x: 0,
                        y: 0,
                        width: c.width,
                        height: c.height
                    }
                } else {
                    var d = a.clientWidth
                      , h = a.clientHeight;
                    if (d || h) {
                        var e = T(a).getComputedStyle(a);
                        c = {};
                        for (var g = 0, f = ["top", "right", "bottom", "left"]; g < f.length; g++) {
                            var k = f[g];
                            c[k] = parseFloat(e["padding-" + k]) || 0
                        }
                        var l = c.left + c.right;
                        k = c.top + c.bottom;
                        g = parseFloat(e.width) || 0;
                        f = parseFloat(e.height) || 0;
                        "border-box" === e.boxSizing && (Math.round(g + l) !== d && (g -= Pa(e, "left", "right") + l),
                        Math.round(f + k) !== h && (f -= Pa(e, "top", "bottom") + k));
                        a !== T(a).document.documentElement && (a = Math.round(g + l) - d,
                        h = Math.round(f + k) - h,
                        1 !== Math.abs(a) && (g -= a),
                        1 !== Math.abs(h) && (f -= h));
                        c = {
                            x: c.left,
                            y: c.top,
                            width: g,
                            height: f
                        }
                    } else
                        c = vb
                }
            else
                c = vb;
            this.contentRect_ = c;
            return c.width !== this.broadcastWidth || c.height !== this.broadcastHeight
        }
        ;
        a.prototype.broadcastRect = function() {
            var a = this.contentRect_;
            this.broadcastWidth = a.width;
            this.broadcastHeight = a.height;
            return a
        }
        ;
        return a
    }()
      , Xc = function() {
        return function(a, b) {
            var c = b.x
              , d = b.y
              , h = b.width;
            b = b.height;
            var e = Object.create(("undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype);
            ub(e, {
                x: c,
                y: d,
                width: h,
                height: b,
                top: d,
                right: c + h,
                bottom: b + d,
                left: c
            });
            ub(this, {
                target: a,
                contentRect: e
            })
        }
    }()
      , Yc = function() {
        function a(a, c, d) {
            this.activeObservations_ = [];
            this.observations_ = new tb;
            if ("function" !== typeof a)
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = a;
            this.controller_ = c;
            this.callbackCtx_ = d
        }
        a.prototype.observe = function(a) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(a instanceof T(a).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var b = this.observations_;
                b.has(a) || (b.set(a, new Wc(a)),
                this.controller_.addObserver(this),
                this.controller_.refresh())
            }
        }
        ;
        a.prototype.unobserve = function(a) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(a instanceof T(a).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var b = this.observations_;
                b.has(a) && (b.delete(a),
                b.size || this.controller_.removeObserver(this))
            }
        }
        ;
        a.prototype.disconnect = function() {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this)
        }
        ;
        a.prototype.gatherActive = function() {
            var a = this;
            this.clearActive();
            this.observations_.forEach(function(b) {
                b.isActive() && a.activeObservations_.push(b)
            })
        }
        ;
        a.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var a = this.callbackCtx_
                  , c = this.activeObservations_.map(function(a) {
                    return new Xc(a.target,a.broadcastRect())
                });
                this.callback_.call(a, c, a);
                this.clearActive()
            }
        }
        ;
        a.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }
        ;
        a.prototype.hasActive = function() {
            return 0 < this.activeObservations_.length
        }
        ;
        return a
    }()
      , wb = "undefined" !== typeof WeakMap ? new WeakMap : new tb
      , xb = function() {
        function a(b) {
            if (!(this instanceof a))
                throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var c = Uc.getInstance();
            c = new Yc(b,c,this);
            wb.set(this, c)
        }
        return a
    }();
    ["observe", "unobserve", "disconnect"].forEach(function(a) {
        xb.prototype[a] = function() {
            var b;
            return (b = wb.get(this))[a].apply(b, arguments)
        }
    });
    var Zc = "undefined" !== typeof ra.ResizeObserver ? ra.ResizeObserver : xb;
    var yb = !("undefined" === typeof window || !window.document || !window.document.createElement)
      , Ja = function() {
        function a(b, c) {
            var d = this;
            if (!(this instanceof a))
                throw new TypeError("Cannot call a class as a function");
            this.onScroll = function() {
                d.scrollXTicking || (window.requestAnimationFrame(d.scrollX),
                d.scrollXTicking = !0);
                d.scrollYTicking || (window.requestAnimationFrame(d.scrollY),
                d.scrollYTicking = !0)
            }
            ;
            this.scrollX = function() {
                d.axis.x.isOverflowing && (d.showScrollbar("x"),
                d.positionScrollbar("x"));
                d.scrollXTicking = !1
            }
            ;
            this.scrollY = function() {
                d.axis.y.isOverflowing && (d.showScrollbar("y"),
                d.positionScrollbar("y"));
                d.scrollYTicking = !1
            }
            ;
            this.onMouseEnter = function() {
                d.showScrollbar("x");
                d.showScrollbar("y")
            }
            ;
            this.onMouseMove = function(a) {
                d.mouseX = a.clientX;
                d.mouseY = a.clientY;
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible)
                    d.onMouseMoveForAxis("x");
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible)
                    d.onMouseMoveForAxis("y")
            }
            ;
            this.onMouseLeave = function() {
                d.onMouseMove.cancel();
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible)
                    d.onMouseLeaveForAxis("x");
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible)
                    d.onMouseLeaveForAxis("y");
                d.mouseX = -1;
                d.mouseY = -1
            }
            ;
            this.onWindowResize = function() {
                d.scrollbarWidth = ob();
                d.hideNativeScrollbar()
            }
            ;
            this.hideScrollbars = function() {
                d.axis.x.track.rect = d.axis.x.track.el.getBoundingClientRect();
                d.axis.y.track.rect = d.axis.y.track.el.getBoundingClientRect();
                d.isWithinBounds(d.axis.y.track.rect) || (d.axis.y.scrollbar.el.classList.remove(d.classNames.visible),
                d.axis.y.isVisible = !1);
                d.isWithinBounds(d.axis.x.track.rect) || (d.axis.x.scrollbar.el.classList.remove(d.classNames.visible),
                d.axis.x.isVisible = !1)
            }
            ;
            this.onPointerEvent = function(a) {
                d.axis.x.scrollbar.rect = d.axis.x.scrollbar.el.getBoundingClientRect();
                d.axis.y.scrollbar.rect = d.axis.y.scrollbar.el.getBoundingClientRect();
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible)
                    var b = d.isWithinBounds(d.axis.x.scrollbar.rect);
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible)
                    var c = d.isWithinBounds(d.axis.y.scrollbar.rect);
                if (c || b)
                    if (a.preventDefault(),
                    a.stopPropagation(),
                    "mousedown" === a.type) {
                        if (c)
                            d.onDragStart(a, "y");
                        if (b)
                            d.onDragStart(a, "x")
                    }
            }
            ;
            this.drag = function(b) {
                var c = d.axis[d.draggedAxis].track
                  , e = c.rect[d.axis[d.draggedAxis].sizeAttr]
                  , h = d.axis[d.draggedAxis].scrollbar;
                b.preventDefault();
                b.stopPropagation();
                b = (("y" === d.draggedAxis ? b.pageY : b.pageX) - c.rect[d.axis[d.draggedAxis].offsetAttr] - d.axis[d.draggedAxis].dragOffset) / c.rect[d.axis[d.draggedAxis].sizeAttr] * d.contentEl[d.axis[d.draggedAxis].scrollSizeAttr];
                "x" === d.draggedAxis && (b = d.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? b - (e + h.size) : b,
                b = d.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -b : b);
                d.contentEl[d.axis[d.draggedAxis].scrollOffsetAttr] = b
            }
            ;
            this.onEndDrag = function(a) {
                a.preventDefault();
                a.stopPropagation();
                document.removeEventListener("mousemove", d.drag);
                document.removeEventListener("mouseup", d.onEndDrag)
            }
            ;
            this.el = b;
            this.flashTimeout;
            this.contentEl;
            this.offsetEl;
            this.maskEl;
            this.globalObserver;
            this.mutationObserver;
            this.resizeObserver;
            this.scrollbarWidth;
            this.minScrollbarWidth = 20;
            this.options = k({}, a.defaultOptions, c);
            this.classNames = k({}, a.defaultOptions.classNames, this.options.classNames);
            this.isRtl;
            this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            };
            this.recalculate = pb(this.recalculate.bind(this), 64);
            this.onMouseMove = pb(this.onMouseMove.bind(this), 64);
            this.hideScrollbars = qb(this.hideScrollbars.bind(this), this.options.timeout);
            this.onWindowResize = qb(this.onWindowResize.bind(this), 64, {
                leading: !0
            });
            a.getRtlHelpers = A(a.getRtlHelpers);
            this.getContentElement = this.getScrollElement;
            this.init()
        }
        g(a, [{
            key: "init",
            value: function() {
                this.el.SimpleBar = this;
                yb && (this.initDOM(),
                this.scrollbarWidth = ob(),
                this.recalculate(),
                this.initListeners())
            }
        }, {
            key: "initDOM",
            value: function() {
                var a = this;
                if (Array.from(this.el.children).filter(function(b) {
                    return b.classList.contains(a.classNames.wrapper)
                }).length)
                    this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper)),
                    this.contentEl = this.el.querySelector(".".concat(this.classNames.content)),
                    this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset)),
                    this.maskEl = this.el.querySelector(".".concat(this.classNames.mask)),
                    this.placeholderEl = this.el.querySelector(".".concat(this.classNames.placeholder)),
                    this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)),
                    this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)),
                    this.axis.x.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.horizontal)),
                    this.axis.y.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
                else {
                    this.wrapperEl = document.createElement("div");
                    this.contentEl = document.createElement("div");
                    this.offsetEl = document.createElement("div");
                    this.maskEl = document.createElement("div");
                    this.placeholderEl = document.createElement("div");
                    this.heightAutoObserverWrapperEl = document.createElement("div");
                    this.heightAutoObserverEl = document.createElement("div");
                    this.wrapperEl.classList.add(this.classNames.wrapper);
                    this.contentEl.classList.add(this.classNames.content);
                    this.offsetEl.classList.add(this.classNames.offset);
                    this.maskEl.classList.add(this.classNames.mask);
                    this.placeholderEl.classList.add(this.classNames.placeholder);
                    this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
                    for (this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; )
                        this.contentEl.appendChild(this.el.firstChild);
                    this.offsetEl.appendChild(this.contentEl);
                    this.maskEl.appendChild(this.offsetEl);
                    this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
                    this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
                    this.wrapperEl.appendChild(this.maskEl);
                    this.wrapperEl.appendChild(this.placeholderEl);
                    this.el.appendChild(this.wrapperEl)
                }
                if (!this.axis.x.track.el || !this.axis.y.track.el) {
                    var c = document.createElement("div")
                      , d = document.createElement("div");
                    c.classList.add(this.classNames.track);
                    d.classList.add(this.classNames.scrollbar);
                    this.options.autoHide || d.classList.add(this.classNames.visible);
                    c.appendChild(d);
                    this.axis.x.track.el = c.cloneNode(!0);
                    this.axis.x.track.el.classList.add(this.classNames.horizontal);
                    this.axis.y.track.el = c.cloneNode(!0);
                    this.axis.y.track.el.classList.add(this.classNames.vertical);
                    this.el.appendChild(this.axis.x.track.el);
                    this.el.appendChild(this.axis.y.track.el)
                }
                this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar));
                this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar));
                this.el.setAttribute("data-simplebar", "init")
            }
        }, {
            key: "initListeners",
            value: function() {
                var a = this;
                this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter);
                "mousedown click dblclick touchstart touchend touchmove".split(" ").forEach(function(b) {
                    a.el.addEventListener(b, a.onPointerEvent, !0)
                });
                this.el.addEventListener("mousemove", this.onMouseMove);
                this.el.addEventListener("mouseleave", this.onMouseLeave);
                this.contentEl.addEventListener("scroll", this.onScroll);
                window.addEventListener("resize", this.onWindowResize);
                "undefined" !== typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(b) {
                    b.forEach(function(b) {
                        (b.target === a.el || !a.isChildNode(b.target) || b.addedNodes.length || b.removedNodes.length) && a.recalculate()
                    })
                }
                ),
                this.mutationObserver.observe(this.el, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }));
                this.resizeObserver = new Zc(this.recalculate);
                this.resizeObserver.observe(this.el)
            }
        }, {
            key: "recalculate",
            value: function() {
                var a = 1 >= this.heightAutoObserverEl.offsetHeight;
                this.elStyles = window.getComputedStyle(this.el);
                this.isRtl = "rtl" === this.elStyles.direction;
                this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
                this.contentEl.style.height = a ? "auto" : "100%";
                this.placeholderEl.style.width = "".concat(this.contentEl.scrollWidth, "px");
                this.placeholderEl.style.height = "".concat(this.contentEl.scrollHeight, "px");
                this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
                this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect();
                this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect();
                this.axis.x.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollWidth : this.contentEl.scrollWidth - this.minScrollbarWidth) > Math.ceil(this.axis.x.track.rect.width);
                this.axis.y.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollHeight : this.contentEl.scrollHeight - this.minScrollbarWidth) > Math.ceil(this.axis.y.track.rect.height);
                this.axis.x.isOverflowing = "hidden" === this.elStyles.overflowX ? !1 : this.axis.x.isOverflowing;
                this.axis.y.isOverflowing = "hidden" === this.elStyles.overflowY ? !1 : this.axis.y.isOverflowing;
                this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible;
                this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible;
                this.axis.x.scrollbar.size = this.getScrollbarSize("x");
                this.axis.y.scrollbar.size = this.getScrollbarSize("y");
                this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
                this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
                this.positionScrollbar("x");
                this.positionScrollbar("y");
                this.toggleTrackVisibility("x");
                this.toggleTrackVisibility("y");
                this.hideNativeScrollbar()
            }
        }, {
            key: "getScrollbarSize",
            value: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , c = this.axis[a].track.rect[this.axis[a].sizeAttr];
                if (this.axis[a].isOverflowing)
                    return a = Math.max(~~(c / (this.scrollbarWidth ? this.contentEl[this.axis[a].scrollSizeAttr] : this.contentEl[this.axis[a].scrollSizeAttr] - this.minScrollbarWidth) * c), this.options.scrollbarMinSize),
                    this.options.scrollbarMaxSize && (a = Math.min(a, this.options.scrollbarMaxSize)),
                    a
            }
        }, {
            key: "positionScrollbar",
            value: function() {
                var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , c = this.contentEl[this.axis[b].scrollSizeAttr]
                  , d = this.axis[b].track.rect[this.axis[b].sizeAttr]
                  , e = parseInt(this.elStyles[this.axis[b].sizeAttr], 10)
                  , g = this.axis[b].scrollbar
                  , f = this.contentEl[this.axis[b].scrollOffsetAttr];
                f = "x" === b && this.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -f : f;
                c = ~~(f / (c - e) * (d - g.size));
                c = "x" === b && this.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? c + (d - g.size) : c;
                g.el.style.transform = "x" === b ? "translate3d(".concat(c, "px, 0, 0)") : "translate3d(0, ".concat(c, "px, 0)")
            }
        }, {
            key: "toggleTrackVisibility",
            value: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , c = this.axis[a].track.el
                  , d = this.axis[a].scrollbar.el;
                this.axis[a].isOverflowing || this.axis[a].forceVisible ? (c.style.visibility = "visible",
                this.contentEl.style[this.axis[a].overflowAttr] = "scroll") : (c.style.visibility = "hidden",
                this.contentEl.style[this.axis[a].overflowAttr] = "hidden");
                d.style.visibility = this.axis[a].isOverflowing ? "visible" : "hidden"
            }
        }, {
            key: "hideNativeScrollbar",
            value: function() {
                this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0;
                this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0;
                if (!this.scrollbarWidth) {
                    var a = [this.isRtl ? "paddingLeft" : "paddingRight"];
                    this.contentEl.style[a] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "calc(".concat(this.elStyles[a], " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles[a];
                    this.contentEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "calc(".concat(this.elStyles.paddingBottom, " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles.paddingBottom
                }
            }
        }, {
            key: "onMouseMoveForAxis",
            value: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                this.axis[a].track.rect = this.axis[a].track.el.getBoundingClientRect();
                this.axis[a].scrollbar.rect = this.axis[a].scrollbar.el.getBoundingClientRect();
                this.isWithinBounds(this.axis[a].scrollbar.rect) ? this.axis[a].scrollbar.el.classList.add(this.classNames.hover) : this.axis[a].scrollbar.el.classList.remove(this.classNames.hover);
                this.isWithinBounds(this.axis[a].track.rect) ? (this.showScrollbar(a),
                this.axis[a].track.el.classList.add(this.classNames.hover)) : this.axis[a].track.el.classList.remove(this.classNames.hover)
            }
        }, {
            key: "onMouseLeaveForAxis",
            value: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                this.axis[a].track.el.classList.remove(this.classNames.hover);
                this.axis[a].scrollbar.el.classList.remove(this.classNames.hover)
            }
        }, {
            key: "showScrollbar",
            value: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , c = this.axis[a].scrollbar.el;
                this.axis[a].isVisible || (c.classList.add(this.classNames.visible),
                this.axis[a].isVisible = !0);
                this.options.autoHide && this.hideScrollbars()
            }
        }, {
            key: "onDragStart",
            value: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "y";
                this.axis[b].dragOffset = ("y" === b ? a.pageY : a.pageX) - this.axis[b].scrollbar.el.getBoundingClientRect()[this.axis[b].offsetAttr];
                this.draggedAxis = b;
                document.addEventListener("mousemove", this.drag);
                document.addEventListener("mouseup", this.onEndDrag)
            }
        }, {
            key: "getScrollElement",
            value: function() {
                return this.contentEl
            }
        }, {
            key: "removeListeners",
            value: function() {
                var a = this;
                this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter);
                "mousedown click dblclick touchstart touchend touchmove".split(" ").forEach(function(b) {
                    a.el.removeEventListener(b, a.onPointerEvent)
                });
                this.el.removeEventListener("mousemove", this.onMouseMove);
                this.el.removeEventListener("mouseleave", this.onMouseLeave);
                this.contentEl.removeEventListener("scroll", this.onScroll);
                window.removeEventListener("resize", this.onWindowResize);
                this.mutationObserver && this.mutationObserver.disconnect();
                this.resizeObserver.disconnect();
                this.recalculate.cancel();
                this.onMouseMove.cancel();
                this.hideScrollbars.cancel();
                this.onWindowResize.cancel()
            }
        }, {
            key: "unMount",
            value: function() {
                this.removeListeners();
                this.el.SimpleBar = null
            }
        }, {
            key: "isChildNode",
            value: function(a) {
                return null === a ? !1 : a === this.el ? !0 : this.isChildNode(a.parentNode)
            }
        }, {
            key: "isWithinBounds",
            value: function(a) {
                return this.mouseX >= a.left && this.mouseX <= a.left + a.width && this.mouseY >= a.top && this.mouseY <= a.top + a.height
            }
        }], [{
            key: "getRtlHelpers",
            value: function() {
                var b = document.createElement("div");
                b.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var c = b.firstElementChild;
                document.body.appendChild(c);
                var d = c.firstElementChild;
                c.scrollLeft = 0;
                b = a.getOffset(c);
                var e = a.getOffset(d);
                c.scrollLeft = 999;
                c = a.getOffset(d);
                return {
                    isRtlScrollingInverted: b.left !== e.left && 0 !== e.left - c.left,
                    isRtlScrollbarInverted: b.left !== e.left
                }
            }
        }, {
            key: "initHtmlApi",
            value: function() {
                this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
                "undefined" !== typeof MutationObserver && (this.globalObserver = new MutationObserver(function(b) {
                    b.forEach(function(b) {
                        Array.from(b.addedNodes).forEach(function(b) {
                            1 === b.nodeType && (b.hasAttribute("data-simplebar") ? !b.SimpleBar && new a(b,a.getElOptions(b)) : Array.from(b.querySelectorAll("[data-simplebar]")).forEach(function(b) {
                                !b.SimpleBar && new a(b,a.getElOptions(b))
                            }))
                        });
                        Array.from(b.removedNodes).forEach(function(a) {
                            1 === a.nodeType && (a.hasAttribute("data-simplebar") ? a.SimpleBar && a.SimpleBar.unMount() : Array.from(a.querySelectorAll("[data-simplebar]")).forEach(function(a) {
                                a.SimpleBar && a.SimpleBar.unMount()
                            }))
                        })
                    })
                }
                ),
                this.globalObserver.observe(document, {
                    childList: !0,
                    subtree: !0
                }));
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                window.addEventListener("load", this.initDOMLoadedElements))
            }
        }, {
            key: "getElOptions",
            value: function(a) {
                return Array.from(a.attributes).reduce(function(a, b) {
                    var c = b.name.match(/data-simplebar-(.+)/);
                    if (c)
                        switch (c = c[1].replace(/\W+(.)/g, function(a, b) {
                            return b.toUpperCase()
                        }),
                        b.value) {
                        case "true":
                            a[c] = !0;
                            break;
                        case "false":
                            a[c] = !1;
                            break;
                        case void 0:
                            a[c] = !0;
                            break;
                        default:
                            a[c] = b.value
                        }
                    return a
                }, {})
            }
        }, {
            key: "removeObserver",
            value: function() {
                this.globalObserver.disconnect()
            }
        }, {
            key: "initDOMLoadedElements",
            value: function() {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
                window.removeEventListener("load", this.initDOMLoadedElements);
                Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(b) {
                    b.SimpleBar || new a(b,a.getElOptions(b))
                })
            }
        }, {
            key: "getOffset",
            value: function(a) {
                a = a.getBoundingClientRect();
                return {
                    top: a.top + (window.pageYOffset || document.documentElement.scrollTop),
                    left: a.left + (window.pageXOffset || document.documentElement.scrollLeft)
                }
            }
        }]);
        return a
    }();
    Ja.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        classNames: {
            content: "simplebar-content",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1E3
    };
    yb && Ja.initHtmlApi();
    return Ja
});
setPagesCount();
customSelect();
toggleMobileMenu();
function customSelect() {
    function e(e) {
    	var form = document.querySelector('.mainScreen__form');
    	var f = document.querySelectorAll(".form-input");
    	document.addEventListener('click', function(event){
		var isClickInside = form.contains(event.target);
		if(!isClickInside){
			[].forEach.call(f, function(f) {
        f.classList.remove("is-open");
    });
			
		}
	});


        [].forEach.call(f, function(f) {
            f != e.currentTarget || f.classList.contains("form__pages") ? f.classList.remove("is-open") : e.currentTarget.classList.toggle("is-open")
        })
    }
    var f = document.querySelectorAll(".form-input");
    [].forEach.call(f, function(f) {
        f.addEventListener("click", e)
    });
    [].forEach.call(f, function(e) {
        e.addEventListener("click", function(e) {
            var f = this.querySelectorAll(".form-input__select-item");
            e.target.classList.contains("form-input__select-item") && (this.classList.remove("is-open"),
            [].forEach.call(f, function(e) {
                e.classList.remove("selected")
            }),
            e.target.classList.add("selected"),
            this.querySelector(".form-input__field").innerHTML = e.target.innerHTML,
            f = e.target.getAttribute("data-value"),
            this.querySelector(".form-input__hidden").options[0].setAttribute("value", f),
            this.querySelector(".form-input__hidden").options[0].innerHTML = e.target.innerHTML)
        })
    })
}
//detectOutsideClick();
function detectOutsideClick(elem){
	//var form = document.querySelector('.mainScreen__form');
	//var screen = document.querySelector('.mainScreen');
	document.addEventListener('click', function(event){
		var isClickInside = elem.contains(event.target);
		return isClickInside;
	})

}

function setPagesCount() {
    document.querySelector(".form-pages");
    var e = document.getElementById("pagesIncrease"), f = document.getElementById("pagesDecrease"), g = document.getElementById("inputPages"), k;
    e.onclick = function() {
        k = +g.value;
        k += 1;
        g.value = k;
        g.setAttribute("value", k)
    }
    ;
    f.onclick = function() {
        k = +g.value;
        1 != k && (--k,
        g.value = k,
        g.setAttribute("value", k))
    }
}
/*
function toggleMobileMenu() {
    var e = document.getElementById("toggle-navigation-btn")
      , f = document.getElementById("navCloseBtn")
      , g = document.getElementById("mainNav")
      , k = g.querySelectorAll(".nav__item_with-sub");
    e.onclick = function() {
        g.classList.toggle("nav_open")
    }
    ;
    f.onclick = function() {
        g.classList.remove("nav_open");
        [].forEach.call(k, function(e) {
            e.classList.remove("is-open")
        })
    }
    ;
    [].forEach.call(k, function(e) {
        e.addEventListener("click", function(f) {
        	console.log(e)
            e.classList.toggle("is-open")
        })
    })
}
;*/

function toggleMobileMenu(){
	var nav = document.getElementById("mainNav"),
	openBtn = document.getElementById("toggle-navigation-btn"),
	closeBtn = document.getElementById("navCloseBtn"),
	itemWithSub = nav.querySelectorAll(".nav__item_with-sub");
	[].forEach.call(itemWithSub, function(items) {
        items.addEventListener("click", function(e) {
        	[].forEach.call(itemWithSub, function(item){
        		if(e.currentTarget != item){
        			item.classList.remove("is-open")
        		} else {
        			item.classList.toggle("is-open")
        		}
        	})
            
        })
    })
	openBtn.onclick = function() {
        nav.classList.add("nav_open")
    }
    ;
    closeBtn.onclick = closeNav;
    nav.addEventListener('click', function(e){
    	if(e.target.classList.contains('nav-wrap')){
    		closeNav();
    	}
    });

    function closeNav(){
        nav.classList.remove("nav_open");
        [].forEach.call(itemWithSub, function(e) {
            e.classList.remove("is-open")
        })
    }
}
/*
(function() {
    var e = document.getElementById("nonwrappinglabel");
    new Choices(e,{
        searchEnabled: !1,
        shouldSort: !1,
        position: "top"
    });
}
)();
              <select name="nonwrappinglabel" required id="nonwrappinglabel" class="form-control">
  <optgroup label="General">
    <option value="1" selected="selected">Option 1</option>
    <option value="2">Option 2</option>
    <option value="1" selected="selected">Option 1</option>
    <option value="2">Option 2</option>
    <option value="1" selected="selected">Option 1</option>
    <option value="2">Option 2</option>
    <option value="1" selected="selected">Option 1</option>
    <option value="2">Option 2</option>
  </optgroup>
</select>
*/

