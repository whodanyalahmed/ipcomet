/*! For license information please see locations-map.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [37], {
        "027J": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            n("Zej/");

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var o = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, t), this.element = $(e), this.element.slick(Object.assign({}, {
                        speed: 600,
                        prevArrow: '<button type="button" class="arrow slick-prev" role="button" aria-label="Go to previous slide"><i class="i-arrow-left"></i></button>',
                        nextArrow: '<button type="button" class="arrow slick-next" role="button" aria-label="Go to next slide"><i class="i-arrow-right"></i></button>'
                    }, n))
                }
                var e, n, o;
                return e = t, (n = [{
                    key: "changeSlide",
                    value: function(t) {
                        this.element.slick("slickGoTo", t)
                    }
                }]) && i(e.prototype, n), o && i(e, o), t
            }()
        },
        34: function(t, e, n) {
            t.exports = n("yVq1")
        },
        "8oxB": function(t, e) {
            var n, r, i = t.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    n = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    r = a
                }
            }();
            var u, l = [],
                c = !1,
                f = -1;

            function h() {
                c && u && (c = !1, u.length ? l = u.concat(l) : f = -1, l.length && d())
            }

            function d() {
                if (!c) {
                    var t = s(h);
                    c = !0;
                    for (var e = l.length; e;) {
                        for (u = l, l = []; ++f < e;) u && u[f].run();
                        f = -1, e = l.length
                    }
                    u = null, c = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function g() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                l.push(new p(t, e)), 1 !== l.length || c || s(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        E2g8: function(t, e, n) {
            (function(e, n) {
                var r;
                r = function() {
                    "use strict";

                    function t(t) {
                        return "function" == typeof t
                    }
                    var r = Array.isArray ? Array.isArray : function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        i = 0,
                        o = void 0,
                        a = void 0,
                        s = function(t, e) {
                            p[i] = t, p[i + 1] = e, 2 === (i += 2) && (a ? a(g) : b())
                        },
                        u = "undefined" != typeof window ? window : void 0,
                        l = u || {},
                        c = l.MutationObserver || l.WebKitMutationObserver,
                        f = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                        h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function d() {
                        var t = setTimeout;
                        return function() {
                            return t(g, 1)
                        }
                    }
                    var p = new Array(1e3);

                    function g() {
                        for (var t = 0; t < i; t += 2)(0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0;
                        i = 0
                    }
                    var v, y, m, x, b = void 0;

                    function w(t, e) {
                        var n = this,
                            r = new this.constructor(A);
                        void 0 === r[C] && M(r);
                        var i = n._state;
                        if (i) {
                            var o = arguments[i - 1];
                            s((function() {
                                return L(i, r, o, n._result)
                            }))
                        } else T(n, r, t, e);
                        return r
                    }

                    function F(t) {
                        if (t && "object" == typeof t && t.constructor === this) return t;
                        var e = new this(A);
                        return S(e, t), e
                    }
                    f ? b = function() {
                        return e.nextTick(g)
                    } : c ? (y = 0, m = new c(g), x = document.createTextNode(""), m.observe(x, {
                        characterData: !0
                    }), b = function() {
                        x.data = y = ++y % 2
                    }) : h ? ((v = new MessageChannel).port1.onmessage = g, b = function() {
                        return v.port2.postMessage(0)
                    }) : b = void 0 === u ? function() {
                        try {
                            var t = Function("return this")().require("vertx");
                            return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function() {
                                o(g)
                            } : d()
                        } catch (t) {
                            return d()
                        }
                    }() : d();
                    var C = Math.random().toString(36).substring(2);

                    function A() {}

                    function E(e, n, r) {
                        n.constructor === e.constructor && r === w && n.constructor.resolve === F ? function(t, e) {
                            1 === e._state ? B(t, e._result) : 2 === e._state ? _(t, e._result) : T(e, void 0, (function(e) {
                                return S(t, e)
                            }), (function(e) {
                                return _(t, e)
                            }))
                        }(e, n) : void 0 === r ? B(e, n) : t(r) ? function(t, e, n) {
                            s((function(t) {
                                var r = !1,
                                    i = function(t, e, n, r) {
                                        try {
                                            t.call(e, n, r)
                                        } catch (t) {
                                            return t
                                        }
                                    }(n, e, (function(n) {
                                        r || (r = !0, e !== n ? S(t, n) : B(t, n))
                                    }), (function(e) {
                                        r || (r = !0, _(t, e))
                                    }), t._label);
                                !r && i && (r = !0, _(t, i))
                            }), t)
                        }(e, n, r) : B(e, n)
                    }

                    function S(t, e) {
                        if (t === e) _(t, new TypeError("You cannot resolve a promise with itself"));
                        else if (i = typeof(r = e), null === r || "object" !== i && "function" !== i) B(t, e);
                        else {
                            var n = void 0;
                            try {
                                n = e.then
                            } catch (e) {
                                return void _(t, e)
                            }
                            E(t, e, n)
                        }
                        var r, i
                    }

                    function k(t) {
                        t._onerror && t._onerror(t._result), D(t)
                    }

                    function B(t, e) {
                        void 0 === t._state && (t._result = e, t._state = 1, 0 !== t._subscribers.length && s(D, t))
                    }

                    function _(t, e) {
                        void 0 === t._state && (t._state = 2, t._result = e, s(k, t))
                    }

                    function T(t, e, n, r) {
                        var i = t._subscribers,
                            o = i.length;
                        t._onerror = null, i[o] = e, i[o + 1] = n, i[o + 2] = r, 0 === o && t._state && s(D, t)
                    }

                    function D(t) {
                        var e = t._subscribers,
                            n = t._state;
                        if (0 !== e.length) {
                            for (var r = void 0, i = void 0, o = t._result, a = 0; a < e.length; a += 3) r = e[a], i = e[a + n], r ? L(n, r, i, o) : i(o);
                            t._subscribers.length = 0
                        }
                    }

                    function L(e, n, r, i) {
                        var o = t(r),
                            a = void 0,
                            s = void 0,
                            u = !0;
                        if (o) {
                            try {
                                a = r(i)
                            } catch (t) {
                                u = !1, s = t
                            }
                            if (n === a) return void _(n, new TypeError("A promises callback cannot return that same promise."))
                        } else a = i;
                        void 0 !== n._state || (o && u ? S(n, a) : !1 === u ? _(n, s) : 1 === e ? B(n, a) : 2 === e && _(n, a))
                    }
                    var N = 0;

                    function M(t) {
                        t[C] = N++, t._state = void 0, t._result = void 0, t._subscribers = []
                    }
                    var j = function() {
                            function t(t, e) {
                                this._instanceConstructor = t, this.promise = new t(A), this.promise[C] || M(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? B(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && B(this.promise, this._result))) : _(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return t.prototype._enumerate = function(t) {
                                for (var e = 0; void 0 === this._state && e < t.length; e++) this._eachEntry(t[e], e)
                            }, t.prototype._eachEntry = function(t, e) {
                                var n = this._instanceConstructor,
                                    r = n.resolve;
                                if (r === F) {
                                    var i = void 0,
                                        o = void 0,
                                        a = !1;
                                    try {
                                        i = t.then
                                    } catch (t) {
                                        a = !0, o = t
                                    }
                                    if (i === w && void 0 !== t._state) this._settledAt(t._state, e, t._result);
                                    else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                                    else if (n === P) {
                                        var s = new n(A);
                                        a ? _(s, o) : E(s, t, i), this._willSettleAt(s, e)
                                    } else this._willSettleAt(new n((function(e) {
                                        return e(t)
                                    })), e)
                                } else this._willSettleAt(r(t), e)
                            }, t.prototype._settledAt = function(t, e, n) {
                                var r = this.promise;
                                void 0 === r._state && (this._remaining--, 2 === t ? _(r, n) : this._result[e] = n), 0 === this._remaining && B(r, this._result)
                            }, t.prototype._willSettleAt = function(t, e) {
                                var n = this;
                                T(t, void 0, (function(t) {
                                    return n._settledAt(1, e, t)
                                }), (function(t) {
                                    return n._settledAt(2, e, t)
                                }))
                            }, t
                        }(),
                        P = function() {
                            function e(t) {
                                this[C] = N++, this._result = this._state = void 0, this._subscribers = [], A !== t && ("function" != typeof t && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(), this instanceof e ? function(t, e) {
                                    try {
                                        e((function(e) {
                                            S(t, e)
                                        }), (function(e) {
                                            _(t, e)
                                        }))
                                    } catch (e) {
                                        _(t, e)
                                    }
                                }(this, t) : function() {
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                }())
                            }
                            return e.prototype.catch = function(t) {
                                return this.then(null, t)
                            }, e.prototype.finally = function(e) {
                                var n = this.constructor;
                                return t(e) ? this.then((function(t) {
                                    return n.resolve(e()).then((function() {
                                        return t
                                    }))
                                }), (function(t) {
                                    return n.resolve(e()).then((function() {
                                        throw t
                                    }))
                                })) : this.then(e, e)
                            }, e
                        }();
                    return P.prototype.then = w, P.all = function(t) {
                        return new j(this, t).promise
                    }, P.race = function(t) {
                        var e = this;
                        return r(t) ? new e((function(n, r) {
                            for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(n, r)
                        })) : new e((function(t, e) {
                            return e(new TypeError("You must pass an array to race."))
                        }))
                    }, P.resolve = F, P.reject = function(t) {
                        var e = new this(A);
                        return _(e, t), e
                    }, P._setScheduler = function(t) {
                        a = t
                    }, P._setAsap = function(t) {
                        s = t
                    }, P._asap = s, P.polyfill = function() {
                        var t = void 0;
                        if (void 0 !== n) t = n;
                        else if ("undefined" != typeof self) t = self;
                        else try {
                            t = Function("return this")()
                        } catch (t) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var e = t.Promise;
                        if (e) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(e.resolve())
                            } catch (t) {}
                            if ("[object Promise]" === r && !e.cast) return
                        }
                        t.Promise = P
                    }, P.Promise = P, P
                }, t.exports = r()
            }).call(this, n("8oxB"), n("yLpj"))
        },
        GqBi: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            n.r(e), n.d(e, "Location", (function() {
                return i
            }));
            var i = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                for (var n in r(this, t), e) this[n] = e[n]
            }
        },
        JNzk: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("o0o1"),
                i = n.n(r),
                o = n("GqBi");

            function a(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            var l = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    s(this, t), this.storeKey = e, this.options = n, this.storage = r || window.localStorage, this.loadStore()
                }
                var e, n, r, o, l;
                return e = t, (n = [{
                    key: "loadStore",
                    value: function() {
                        this.store = JSON.parse(this.storage.getItem(this.storeKey)) || {}
                    }
                }, {
                    key: "updateStore",
                    value: function() {
                        this.storage.setItem(this.storeKey, JSON.stringify(this.store))
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        var e = this.store[t];
                        return e && e.ttl && Date.now() - e.updatedAt > 1e3 * e.ttl ? void 0 : e ? e.value : void 0
                    }
                }, {
                    key: "put",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        this.store[t] = {
                            value: e,
                            ttl: n || this.options.defaultTtl,
                            updatedAt: Date.now()
                        }, this.updateStore()
                    }
                }, {
                    key: "forget",
                    value: function(t) {
                        delete this.store[t], this.updateStore()
                    }
                }, {
                    key: "remember",
                    value: (o = i.a.mark((function t(e) {
                        var n, r, o = arguments;
                        return i.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = o.length > 1 && void 0 !== o[1] ? o[1] : null, r = o.length > 2 && void 0 !== o[2] ? o[2] : null, !n || void 0 !== this.get(e)) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.t0 = this, t.t1 = e, t.next = 7, n();
                                case 7:
                                    t.t2 = t.sent, t.t3 = r, t.t0.put.call(t.t0, t.t1, t.t2, t.t3);
                                case 10:
                                    return t.abrupt("return", this.get(e));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), l = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var i = o.apply(t, e);

                            function s(t) {
                                a(i, n, r, s, u, "next", t)
                            }

                            function u(t) {
                                a(i, n, r, s, u, "throw", t)
                            }
                            s(void 0)
                        }))
                    }, function(t) {
                        return l.apply(this, arguments)
                    })
                }]) && u(e.prototype, n), r && u(e, r), t
            }();
            n("VLrD");

            function c(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function f(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            c(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            c(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            n.d(e, "LocationFinder", (function() {
                return v
            }));
            var p = new l("fc_store", {
                    defaultTtl: 43200
                }),
                g = function(t) {
                    return t * Math.PI / 180
                },
                v = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        h(this, t), this.locations = e
                    }
                    var e, n, r, a, s, u, l;
                    return e = t, n = [{
                        key: "getLocations",
                        value: (l = f(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.locations) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, t.getDefaultLocations();
                                    case 3:
                                        this.locations = e.sent;
                                    case 4:
                                        return e.abrupt("return", this.locations);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "findCurrent",
                        value: (u = f(i.a.mark((function t() {
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", p.remember("currentLocation", f(i.a.mark((function t() {
                                            var e;
                                            return i.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, $.get("/api/location/city").promise();
                                                    case 3:
                                                        return e = t.sent, t.abrupt("return", new o.Location({
                                                            country: e.country,
                                                            city: e.city ? e.city.names.en : null,
                                                            latitude: e.location.latitude,
                                                            longitude: e.location.longitude
                                                        }));
                                                    case 7:
                                                        return t.prev = 7, t.t0 = t.catch(0), console.error(t.t0), t.abrupt("return", null);
                                                    case 11:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t, null, [
                                                [0, 7]
                                            ])
                                        })))));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function() {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "findNearest",
                        value: (s = f(i.a.mark((function t() {
                            var e, n = this;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, p.remember("nearestDatacenterLocation", f(i.a.mark((function t() {
                                            var e, r, o, a;
                                            return i.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, n.findCurrent();
                                                    case 2:
                                                        if (e = t.sent) {
                                                            t.next = 5;
                                                            break
                                                        }
                                                        return t.abrupt("return", null);
                                                    case 5:
                                                        return t.next = 7, n.getLocations();
                                                    case 7:
                                                        return r = t.sent, o = 99999, a = 0, r.forEach((function(t, n) {
                                                            var r, i, s, u, l, c, f = (i = t, s = g((r = e).latitude), u = g(r.longitude), l = g(i.latitude), c = g(i.longitude), 6371 * Math.sqrt(Math.pow((c - u) * Math.cos((s + l) / 2), 2) + Math.pow(l - s, 2)));
                                                            f < o && (a = n, o = f)
                                                        })), t.abrupt("return", r[a] || null);
                                                    case 12:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))));
                                    case 2:
                                        return e = t.sent, t.abrupt("return", e ? new o.Location(e) : null);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }], r = [{
                        key: "getDefaultLocations",
                        value: (a = f(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.defaultLocations) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, p.remember("defaultDatacenterLocations", f(i.a.mark((function t() {
                                            return i.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, $.get("/api/hosting/data-center/location").promise();
                                                    case 2:
                                                        return t.t0 = function(t) {
                                                            return new o.Location(t)
                                                        }, t.abrupt("return", t.sent.map(t.t0));
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))));
                                    case 3:
                                        t.defaultLocations = e.sent;
                                    case 4:
                                        return e.abrupt("return", t.defaultLocations);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }], n && d(e.prototype, n), r && d(e, r), t
                }()
        },
        VLrD: function(t, e, n) {
            "use strict";
            t.exports = n("E2g8").polyfill()
        },
        dAet: function(t, e, n) {
            var r, i;
            (function() {
                var n, o, a, s, u, l, c, f, h, d, p, v, y;
                t.exports = 0;
                a = "hasOwnProperty", s = /[\.\/]/, u = /\s*,\s*/, l = function(t, e) {
                    return t - e
                }, c = {
                    n: {}
                }, f = function() {
                    for (var t = 0, e = this.length; t < e; t++)
                        if (void 0 !== this[t]) return this[t]
                }, h = function() {
                    for (var t = this.length; --t;)
                        if (void 0 !== this[t]) return this[t]
                }, d = Object.prototype.toString, p = String, v = Array.isArray || function(t) {
                    return t instanceof Array || "[object Array]" == d.call(t)
                }, eve = function(t, e) {
                    var r, i = o,
                        a = Array.prototype.slice.call(arguments, 2),
                        s = eve.listeners(t),
                        u = 0,
                        c = [],
                        d = {},
                        p = [],
                        g = n;
                    p.firstDefined = f, p.lastDefined = h, n = t, o = 0;
                    for (var v = 0, y = s.length; v < y; v++) "zIndex" in s[v] && (c.push(s[v].zIndex), s[v].zIndex < 0 && (d[s[v].zIndex] = s[v]));
                    for (c.sort(l); c[u] < 0;)
                        if (r = d[c[u++]], p.push(r.apply(e, a)), o) return o = i, p;
                    for (v = 0; v < y; v++)
                        if ("zIndex" in (r = s[v]))
                            if (r.zIndex == c[u]) {
                                if (p.push(r.apply(e, a)), o) break;
                                do {
                                    if ((r = d[c[++u]]) && p.push(r.apply(e, a)), o) break
                                } while (r)
                            } else d[r.zIndex] = r;
                    else if (p.push(r.apply(e, a)), o) break;
                    return o = i, n = g, p
                }, eve._events = c, eve.listeners = function(t) {
                    var e, n, r, i, o, a, u, l, f = v(t) ? t : t.split(s),
                        h = c,
                        d = [h],
                        p = [];
                    for (i = 0, o = f.length; i < o; i++) {
                        for (l = [], a = 0, u = d.length; a < u; a++)
                            for (n = [(h = d[a].n)[f[i]], h["*"]], r = 2; r--;)(e = n[r]) && (l.push(e), p = p.concat(e.f || []));
                        d = l
                    }
                    return p
                }, eve.separator = function(t) {
                    t ? (t = "[" + (t = p(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", s = new RegExp(t)) : s = /[\.\/]/
                }, eve.on = function(t, e) {
                    if ("function" != typeof e) return function() {};
                    for (var n = v(t) ? v(t[0]) ? t : [t] : p(t).split(u), r = 0, i = n.length; r < i; r++) ! function(t) {
                        for (var n, r = v(t) ? t : p(t).split(s), i = c, o = 0, a = r.length; o < a; o++) i = (i = i.n).hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {
                            n: {}
                        });
                        for (i.f = i.f || [], o = 0, a = i.f.length; o < a; o++)
                            if (i.f[o] == e) {
                                n = !0;
                                break
                            }! n && i.f.push(e)
                    }(n[r]);
                    return function(t) {
                        +t == +t && (e.zIndex = +t)
                    }
                }, eve.f = function(t) {
                    var e = [].slice.call(arguments, 1);
                    return function() {
                        eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
                    }
                }, eve.stop = function() {
                    o = 1
                }, eve.nt = function(t) {
                    var e = v(n) ? n.join(".") : n;
                    return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
                }, eve.nts = function() {
                    return v(n) ? n : n.split(s)
                }, eve.off = eve.unbind = function(t, e) {
                    if (t) {
                        var n = v(t) ? v(t[0]) ? t : [t] : p(t).split(u);
                        if (n.length > 1)
                            for (var r = 0, i = n.length; r < i; r++) eve.off(n[r], e);
                        else {
                            n = v(t) ? t : p(t).split(s);
                            var o, l, f, h, d, g = [c],
                                y = [];
                            for (r = 0, i = n.length; r < i; r++)
                                for (h = 0; h < g.length; h += f.length - 2) {
                                    if (f = [h, 1], o = g[h].n, "*" != n[r]) o[n[r]] && (f.push(o[n[r]]), y.unshift({
                                        n: o,
                                        name: n[r]
                                    }));
                                    else
                                        for (l in o) o[a](l) && (f.push(o[l]), y.unshift({
                                            n: o,
                                            name: l
                                        }));
                                    g.splice.apply(g, f)
                                }
                            for (r = 0, i = g.length; r < i; r++)
                                for (o = g[r]; o.n;) {
                                    if (e) {
                                        if (o.f) {
                                            for (h = 0, d = o.f.length; h < d; h++)
                                                if (o.f[h] == e) {
                                                    o.f.splice(h, 1);
                                                    break
                                                }! o.f.length && delete o.f
                                        }
                                        for (l in o.n)
                                            if (o.n[a](l) && o.n[l].f) {
                                                var m = o.n[l].f;
                                                for (h = 0, d = m.length; h < d; h++)
                                                    if (m[h] == e) {
                                                        m.splice(h, 1);
                                                        break
                                                    }! m.length && delete o.n[l].f
                                            }
                                    } else
                                        for (l in delete o.f, o.n) o.n[a](l) && o.n[l].f && delete o.n[l].f;
                                    o = o.n
                                }
                            t: for (r = 0, i = y.length; r < i; r++) {
                                for (l in (o = y[r]).n[o.name].f) continue t;
                                for (l in o.n[o.name].n) continue t;
                                delete o.n[o.name]
                            }
                        }
                    } else eve._events = c = {
                        n: {}
                    }
                }, eve.once = function(t, e) {
                    var n = function() {
                        return eve.off(t, n), e.apply(this, arguments)
                    };
                    return eve.on(t, n)
                }, eve.version = "0.5.0", eve.toString = function() {
                    return "You are running Eve 0.5.0"
                }, t.exports ? t.exports = eve : r = function() {
                    return eve
                }.apply(e, []), y = window || this, void 0 === (i = function(t) {
                    return function(t, e) {
                        var n = function(e) {
                                var n, r = {},
                                    i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                                        return setTimeout(t, 16, (new Date).getTime()), !0
                                    },
                                    o = Array.isArray || function(t) {
                                        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                                    },
                                    a = 0,
                                    s = "M" + (+new Date).toString(36),
                                    u = Date.now || function() {
                                        return +new Date
                                    },
                                    l = function(t) {
                                        var e = this;
                                        if (null == t) return e.s;
                                        var n = e.s - t;
                                        e.b += e.dur * n, e.B += e.dur * n, e.s = t
                                    },
                                    c = function(t) {
                                        if (null == t) return this.spd;
                                        this.spd = t
                                    },
                                    f = function(t) {
                                        var e = this;
                                        if (null == t) return e.dur;
                                        e.s = e.s * t / e.dur, e.dur = t
                                    },
                                    h = function() {
                                        var t = this;
                                        delete r[t.id], t.update(), e("mina.stop." + t.id, t)
                                    },
                                    d = function() {
                                        var t = this;
                                        t.pdif || (delete r[t.id], t.update(), t.pdif = t.get() - t.b)
                                    },
                                    p = function() {
                                        var t = this;
                                        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, r[t.id] = t, v())
                                    },
                                    g = function() {
                                        var t, e = this;
                                        if (o(e.start)) {
                                            t = [];
                                            for (var n = 0, r = e.start.length; n < r; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                                        } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                                        e.set(t)
                                    },
                                    v = function(t) {
                                        if (t) {
                                            var o = 0;
                                            for (var a in r)
                                                if (r.hasOwnProperty(a)) {
                                                    var s = r[a],
                                                        u = s.get();
                                                    o++, s.s = (u - s.b) / (s.dur / s.spd), s.s >= 1 && (delete r[a], s.s = 1, o--, function(t) {
                                                        setTimeout((function() {
                                                            e("mina.finish." + t.id, t)
                                                        }))
                                                    }(s)), s.update()
                                                } n = !!o && i(v)
                                        } else n || (n = i(v))
                                    },
                                    y = function(t, e, n, i, o, u, m) {
                                        var x = {
                                            id: s + (a++).toString(36),
                                            start: t,
                                            end: e,
                                            b: n,
                                            s: 0,
                                            dur: i - n,
                                            spd: 1,
                                            get: o,
                                            set: u,
                                            easing: m || y.linear,
                                            status: l,
                                            speed: c,
                                            duration: f,
                                            stop: h,
                                            pause: d,
                                            resume: p,
                                            update: g
                                        };
                                        r[x.id] = x;
                                        var b, w = 0;
                                        for (b in r)
                                            if (r.hasOwnProperty(b) && 2 == ++w) break;
                                        return 1 == w && v(), x
                                    };
                                return y.time = u, y.getById = function(t) {
                                    return r[t] || null
                                }, y.linear = function(t) {
                                    return t
                                }, y.easeout = function(t) {
                                    return Math.pow(t, 1.7)
                                }, y.easein = function(t) {
                                    return Math.pow(t, .48)
                                }, y.easeinout = function(t) {
                                    if (1 == t) return 1;
                                    if (0 == t) return 0;
                                    var e = .48 - t / 1.04,
                                        n = Math.sqrt(.1734 + e * e),
                                        r = n - e,
                                        i = -n - e,
                                        o = Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + .5;
                                    return 3 * (1 - o) * o * o + o * o * o
                                }, y.backin = function(t) {
                                    if (1 == t) return 1;
                                    var e = 1.70158;
                                    return t * t * ((e + 1) * t - e)
                                }, y.backout = function(t) {
                                    if (0 == t) return 0;
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                }, y.elastic = function(t) {
                                    return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                                }, y.bounce = function(t) {
                                    var e = 7.5625,
                                        n = 2.75;
                                    return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                                }, t.mina = y, y
                            }(void 0 === e ? function() {} : e),
                            r = function(t) {
                                function n(t, e) {
                                    if (t) {
                                        if (t.nodeType) return Y(t);
                                        if (T(t, "array") && n.set) return n.set.apply(n, t);
                                        if (t instanceof I) return t;
                                        if (null == e) return Y(t = r.doc.querySelector(String(t)))
                                    }
                                    return new X(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
                                }
                                n.version = "0.5.1", n.toString = function() {
                                    return "Snap v" + this.version
                                }, n._ = {};
                                var r = {
                                    win: t.window,
                                    doc: t.window.document
                                };
                                n._.glob = r;
                                var i, o, a = "hasOwnProperty",
                                    s = String,
                                    u = parseFloat,
                                    l = parseInt,
                                    c = Math,
                                    f = c.max,
                                    h = c.min,
                                    d = c.abs,
                                    p = (c.pow, c.PI),
                                    v = (c.round, Object.prototype.toString),
                                    y = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                                    m = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                                    x = {
                                        hs: 1,
                                        rg: 1
                                    },
                                    b = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                                    w = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                                    F = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                                    C = 0,
                                    A = "S" + (+new Date).toString(36),
                                    E = function(t) {
                                        return (t && t.type ? t.type : "") + A + (C++).toString(36)
                                    },
                                    S = "http://www.w3.org/1999/xlink",
                                    k = "http://www.w3.org/2000/svg",
                                    B = {};

                                function _(t, e) {
                                    if (e) {
                                        if ("#text" == t && (t = r.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = r.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = _(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(S, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(k, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                                        if (1 == t.nodeType) {
                                            for (var n in e)
                                                if (e[a](n)) {
                                                    var i = s(e[n]);
                                                    i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(S, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(k, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
                                                }
                                        } else "text" in e && (t.nodeValue = e.text)
                                    } else t = r.doc.createElementNS(k, t);
                                    return t
                                }

                                function T(t, e) {
                                    return "finite" == (e = s.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || v.call(t).slice(8, -1).toLowerCase() == e
                                }

                                function D(t, e) {
                                    for (var n = 0, r = t.length; n < r; n++)
                                        if (t[n] === e) return t.push(t.splice(n, 1)[0])
                                }

                                function L(t, e, n) {
                                    return function r() {
                                        var i = Array.prototype.slice.call(arguments, 0),
                                            o = i.join("␀"),
                                            s = r.cache = r.cache || {},
                                            u = r.count = r.count || [];
                                        return s[a](o) ? (D(u, o), n ? n(s[o]) : s[o]) : (u.length >= 1e3 && delete s[u.shift()], u.push(o), s[o] = t.apply(e, i), n ? n(s[o]) : s[o])
                                    }
                                }

                                function N(t) {
                                    return t % 360 * p / 180
                                }
                                n.url = function(t) {
                                    return "url('#" + t + "')"
                                }, n._.$ = _, n._.id = E, n.format = (i = /\{([^\}]+)\}/g, o = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e) {
                                    return s(t).replace(i, (function(t, n) {
                                        return function(t, e, n) {
                                            var r = n;
                                            return e.replace(o, (function(t, e, n, i, o) {
                                                e = e || i, r && (e in r && (r = r[e]), "function" == typeof r && o && (r = r()))
                                            })), r = (null == r || r == n ? t : r) + ""
                                        }(t, n, e)
                                    }))
                                }), n._.clone = function t(e) {
                                    if ("function" == typeof e || Object(e) !== e) return e;
                                    var n = new e.constructor;
                                    for (var r in e) e[a](r) && (n[r] = t(e[r]));
                                    return n
                                }, n._.cacher = L, n.rad = N, n.deg = function(t) {
                                    return 180 * t / p % 360
                                }, n.sin = function(t) {
                                    return c.sin(n.rad(t))
                                }, n.tan = function(t) {
                                    return c.tan(n.rad(t))
                                }, n.cos = function(t) {
                                    return c.cos(n.rad(t))
                                }, n.asin = function(t) {
                                    return n.deg(c.asin(t))
                                }, n.acos = function(t) {
                                    return n.deg(c.acos(t))
                                }, n.atan = function(t) {
                                    return n.deg(c.atan(t))
                                }, n.atan2 = function(t) {
                                    return n.deg(c.atan2(t))
                                }, n.angle = function t(e, n, r, i, o, a) {
                                    if (null == o) {
                                        var s = e - r,
                                            u = n - i;
                                        return s || u ? (180 + 180 * c.atan2(-u, -s) / p + 360) % 360 : 0
                                    }
                                    return t(e, n, o, a) - t(r, i, o, a)
                                }, n.len = function(t, e, r, i) {
                                    return Math.sqrt(n.len2(t, e, r, i))
                                }, n.len2 = function(t, e, n, r) {
                                    return (t - n) * (t - n) + (e - r) * (e - r)
                                }, n.closestPoint = function(t, e, n) {
                                    function r(t) {
                                        var r = t.x - e,
                                            i = t.y - n;
                                        return r * r + i * i
                                    }
                                    for (var i, o, a, s, u = t.node, l = u.getTotalLength(), c = l / u.pathSegList.numberOfItems * .125, f = 1 / 0, h = 0; h <= l; h += c)(s = r(a = u.getPointAtLength(h))) < f && (i = a, o = h, f = s);
                                    for (c *= .5; c > .5;) {
                                        var d, p, g, v, y, m;
                                        (g = o - c) >= 0 && (y = r(d = u.getPointAtLength(g))) < f ? (i = d, o = g, f = y) : (v = o + c) <= l && (m = r(p = u.getPointAtLength(v))) < f ? (i = p, o = v, f = m) : c *= .5
                                    }
                                    return i = {
                                        x: i.x,
                                        y: i.y,
                                        length: o,
                                        distance: Math.sqrt(f)
                                    }
                                }, n.is = T, n.snapTo = function(t, e, n) {
                                    if (n = T(n, "finite") ? n : 10, T(t, "array")) {
                                        for (var r = t.length; r--;)
                                            if (d(t[r] - e) <= n) return t[r]
                                    } else {
                                        var i = e % (t = +t);
                                        if (i < n) return e - i;
                                        if (i > t - n) return e - i + t
                                    }
                                    return e
                                }, n.getRGB = L((function(t) {
                                    if (!t || (t = s(t)).indexOf("-") + 1) return {
                                        r: -1,
                                        g: -1,
                                        b: -1,
                                        hex: "none",
                                        error: 1,
                                        toString: O
                                    };
                                    if ("none" == t) return {
                                        r: -1,
                                        g: -1,
                                        b: -1,
                                        hex: "none",
                                        toString: O
                                    };
                                    if (!x[a](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = M(t)), !t) return {
                                        r: -1,
                                        g: -1,
                                        b: -1,
                                        hex: "none",
                                        error: 1,
                                        toString: O
                                    };
                                    var e, r, i, o, d, p, g = t.match(y);
                                    return g ? (g[2] && (i = l(g[2].substring(5), 16), r = l(g[2].substring(3, 5), 16), e = l(g[2].substring(1, 3), 16)), g[3] && (i = l((d = g[3].charAt(3)) + d, 16), r = l((d = g[3].charAt(2)) + d, 16), e = l((d = g[3].charAt(1)) + d, 16)), g[4] && (p = g[4].split(m), e = u(p[0]), "%" == p[0].slice(-1) && (e *= 2.55), r = u(p[1]), "%" == p[1].slice(-1) && (r *= 2.55), i = u(p[2]), "%" == p[2].slice(-1) && (i *= 2.55), "rgba" == g[1].toLowerCase().slice(0, 4) && (o = u(p[3])), p[3] && "%" == p[3].slice(-1) && (o /= 100)), g[5] ? (p = g[5].split(m), e = u(p[0]), "%" == p[0].slice(-1) && (e /= 100), r = u(p[1]), "%" == p[1].slice(-1) && (r /= 100), i = u(p[2]), "%" == p[2].slice(-1) && (i /= 100), ("deg" == p[0].slice(-3) || "°" == p[0].slice(-1)) && (e /= 360), "hsba" == g[1].toLowerCase().slice(0, 4) && (o = u(p[3])), p[3] && "%" == p[3].slice(-1) && (o /= 100), n.hsb2rgb(e, r, i, o)) : g[6] ? (p = g[6].split(m), e = u(p[0]), "%" == p[0].slice(-1) && (e /= 100), r = u(p[1]), "%" == p[1].slice(-1) && (r /= 100), i = u(p[2]), "%" == p[2].slice(-1) && (i /= 100), ("deg" == p[0].slice(-3) || "°" == p[0].slice(-1)) && (e /= 360), "hsla" == g[1].toLowerCase().slice(0, 4) && (o = u(p[3])), p[3] && "%" == p[3].slice(-1) && (o /= 100), n.hsl2rgb(e, r, i, o)) : (e = h(c.round(e), 255), r = h(c.round(r), 255), i = h(c.round(i), 255), o = h(f(o, 0), 1), (g = {
                                        r: e,
                                        g: r,
                                        b: i,
                                        toString: O
                                    }).hex = "#" + (16777216 | i | r << 8 | e << 16).toString(16).slice(1), g.opacity = T(o, "finite") ? o : 1, g)) : {
                                        r: -1,
                                        g: -1,
                                        b: -1,
                                        hex: "none",
                                        error: 1,
                                        toString: O
                                    }
                                }), n), n.hsb = L((function(t, e, r) {
                                    return n.hsb2rgb(t, e, r).hex
                                })), n.hsl = L((function(t, e, r) {
                                    return n.hsl2rgb(t, e, r).hex
                                })), n.rgb = L((function(t, e, n, r) {
                                    if (T(r, "finite")) {
                                        var i = c.round;
                                        return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                                    }
                                    return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                                }));
                                var M = function(t) {
                                        var e = r.doc.getElementsByTagName("head")[0] || r.doc.getElementsByTagName("svg")[0],
                                            n = "rgb(255, 0, 0)";
                                        return (M = L((function(t) {
                                            if ("red" == t.toLowerCase()) return n;
                                            e.style.color = n, e.style.color = t;
                                            var i = r.doc.defaultView.getComputedStyle(e, "").getPropertyValue("color");
                                            return i == n ? null : i
                                        })))(t)
                                    },
                                    j = function() {
                                        return "hsb(" + [this.h, this.s, this.b] + ")"
                                    },
                                    P = function() {
                                        return "hsl(" + [this.h, this.s, this.l] + ")"
                                    },
                                    O = function() {
                                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                                    },
                                    q = function(t, e, r) {
                                        if (null == e && T(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && T(t, string)) {
                                            var i = n.getRGB(t);
                                            t = i.r, e = i.g, r = i.b
                                        }
                                        return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
                                    },
                                    G = function(t, e, r, i) {
                                        var o = {
                                            r: t = c.round(255 * t),
                                            g: e = c.round(255 * e),
                                            b: r = c.round(255 * r),
                                            opacity: T(i, "finite") ? i : 1,
                                            hex: n.rgb(t, e, r),
                                            toString: O
                                        };
                                        return T(i, "finite") && (o.opacity = i), o
                                    };
                                n.color = function(t) {
                                    var e;
                                    return T(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : T(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (T(t, "string") && (t = n.getRGB(t)), T(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : ((t = {
                                        hex: "none"
                                    }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = O, t
                                }, n.hsb2rgb = function(t, e, n, r) {
                                    var i, o, a, s, u;
                                    return T(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), s = (u = n * e) * (1 - d((t = (t *= 360) % 360 / 60) % 2 - 1)), i = o = a = n - u, G(i += [u, s, 0, 0, s, u][t = ~~t], o += [s, u, u, s, 0, 0][t], a += [0, 0, s, u, u, s][t], r)
                                }, n.hsl2rgb = function(t, e, n, r) {
                                    var i, o, a, s, u;
                                    return T(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), s = (u = 2 * e * (n < .5 ? n : 1 - n)) * (1 - d((t = (t *= 360) % 360 / 60) % 2 - 1)), i = o = a = n - u / 2, G(i += [u, s, 0, 0, s, u][t = ~~t], o += [s, u, u, s, 0, 0][t], a += [0, 0, s, u, u, s][t], r)
                                }, n.rgb2hsb = function(t, e, n) {
                                    var r, i;
                                    return t = (n = q(t, e, n))[0], e = n[1], n = n[2], {
                                        h: ((0 == (i = (r = f(t, e, n)) - h(t, e, n)) ? null : r == t ? (e - n) / i : r == e ? (n - t) / i + 2 : (t - e) / i + 4) + 360) % 6 * 60 / 360,
                                        s: 0 == i ? 0 : i / r,
                                        b: r,
                                        toString: j
                                    }
                                }, n.rgb2hsl = function(t, e, n) {
                                    var r, i, o, a;
                                    return t = (n = q(t, e, n))[0], e = n[1], n = n[2], r = ((i = f(t, e, n)) + (o = h(t, e, n))) / 2, {
                                        h: ((0 == (a = i - o) ? null : i == t ? (e - n) / a : i == e ? (n - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360,
                                        s: 0 == a ? 0 : r < .5 ? a / (2 * r) : a / (2 - 2 * r),
                                        l: r,
                                        toString: P
                                    }
                                }, n.parsePathString = function(t) {
                                    if (!t) return null;
                                    var e = n.path(t);
                                    if (e.arr) return n.path.clone(e.arr);
                                    var r = {
                                            a: 7,
                                            c: 6,
                                            o: 2,
                                            h: 1,
                                            l: 2,
                                            m: 2,
                                            r: 4,
                                            q: 4,
                                            s: 4,
                                            t: 2,
                                            v: 1,
                                            u: 3,
                                            z: 0
                                        },
                                        i = [];
                                    return T(t, "array") && T(t[0], "array") && (i = n.path.clone(t)), i.length || s(t).replace(b, (function(t, e, n) {
                                        var o = [],
                                            a = e.toLowerCase();
                                        if (n.replace(F, (function(t, e) {
                                                e && o.push(+e)
                                            })), "m" == a && o.length > 2 && (i.push([e].concat(o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == o.length && i.push([e, o[0]]), "r" == a) i.push([e].concat(o));
                                        else
                                            for (; o.length >= r[a] && (i.push([e].concat(o.splice(0, r[a]))), r[a]););
                                    })), i.toString = n.path.toString, e.arr = n.path.clone(i), i
                                };
                                var V = n.parseTransformString = function(t) {
                                    if (!t) return null;
                                    var e = [];
                                    return T(t, "array") && T(t[0], "array") && (e = n.path.clone(t)), e.length || s(t).replace(w, (function(t, n, r) {
                                        var i = [];
                                        n.toLowerCase(), r.replace(F, (function(t, e) {
                                            e && i.push(+e)
                                        })), e.push([n].concat(i))
                                    })), e.toString = n.path.toString, e
                                };

                                function R(t) {
                                    return t.node.ownerSVGElement && Y(t.node.ownerSVGElement) || n.select("svg")
                                }

                                function z(t) {
                                    T(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                                    for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                                    for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach((function(t) {
                                        r.appendChild(t.node)
                                    })) : r.appendChild(t[e].node);
                                    var i = r.childNodes;
                                    for (e = 0; e < i.length; e++) this[n++] = Y(i[e]);
                                    return this
                                }

                                function I(t) {
                                    if (t.snap in B) return B[t.snap];
                                    var e;
                                    try {
                                        e = t.ownerSVGElement
                                    } catch (t) {}
                                    this.node = t, e && (this.paper = new X(e)), this.type = t.tagName || t.nodeName;
                                    var n = this.id = E(this);
                                    if (this.anims = {}, this._ = {
                                            transform: []
                                        }, t.snap = n, B[n] = this, "g" == this.type && (this.add = z), this.type in {
                                            g: 1,
                                            mask: 1,
                                            pattern: 1,
                                            symbol: 1
                                        })
                                        for (var r in X.prototype) X.prototype[a](r) && (this[r] = X.prototype[r])
                                }

                                function $(t) {
                                    this.node = t
                                }

                                function U(t, e) {
                                    var n = _(t);
                                    return e.appendChild(n), Y(n)
                                }

                                function X(t, e) {
                                    var n, i, o, s = X.prototype;
                                    if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                                        if (t.snap in B) return B[t.snap];
                                        var u = t.ownerDocument;
                                        for (var l in n = new I(t), i = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], i || ((i = _("desc")).appendChild(u.createTextNode("Created with Snap")), n.node.appendChild(i)), o || (o = _("defs"), n.node.appendChild(o)), n.defs = o, s) s[a](l) && (n[l] = s[l]);
                                        n.paper = n.root = n
                                    } else _((n = U("svg", r.doc.body)).node, {
                                        height: e,
                                        version: 1.1,
                                        width: t,
                                        xmlns: k
                                    });
                                    return n
                                }

                                function Y(t) {
                                    return t ? t instanceof I || t instanceof $ ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new X(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new X(t.contentDocument.getElementsByTagName("svg")[0]) : new I(t) : t
                                }
                                n._.svgTransform2string = function(t) {
                                    var e = [];
                                    return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, (function(t, n, r) {
                                        return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), "skewX" == n ? e.push(["m", 1, 0, c.tan(N(r[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, c.tan(N(r[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(r)), t
                                    })), e
                                }, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = function(t, e) {
                                    var r = V(t),
                                        i = new n.Matrix;
                                    if (r)
                                        for (var o = 0, a = r.length; o < a; o++) {
                                            var u, l, c, f, h, d = r[o],
                                                p = d.length,
                                                g = s(d[0]).toLowerCase(),
                                                v = d[0] != g,
                                                y = v ? i.invert() : 0;
                                            "t" == g && 2 == p ? i.translate(d[1], 0) : "t" == g && 3 == p ? v ? (u = y.x(0, 0), l = y.y(0, 0), c = y.x(d[1], d[2]), f = y.y(d[1], d[2]), i.translate(c - u, f - l)) : i.translate(d[1], d[2]) : "r" == g ? 2 == p ? (h = h || e, i.rotate(d[1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == p && (v ? (c = y.x(d[2], d[3]), f = y.y(d[2], d[3]), i.rotate(d[1], c, f)) : i.rotate(d[1], d[2], d[3])) : "s" == g ? 2 == p || 3 == p ? (h = h || e, i.scale(d[1], d[p - 1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == p ? v ? (c = y.x(d[2], d[3]), f = y.y(d[2], d[3]), i.scale(d[1], d[1], c, f)) : i.scale(d[1], d[1], d[2], d[3]) : 5 == p && (v ? (c = y.x(d[3], d[4]), f = y.y(d[3], d[4]), i.scale(d[1], d[2], c, f)) : i.scale(d[1], d[2], d[3], d[4])) : "m" == g && 7 == p && i.add(d[1], d[2], d[3], d[4], d[5], d[6])
                                        }
                                    return i
                                }, n._unit2px = function(t, e, n) {
                                    var r = R(t).node,
                                        i = {},
                                        o = r.querySelector(".svg---mgr");

                                    function a(t) {
                                        if (null == t) return "";
                                        if (t == +t) return t;
                                        _(o, {
                                            width: t
                                        });
                                        try {
                                            return o.getBBox().width
                                        } catch (t) {
                                            return 0
                                        }
                                    }

                                    function s(t) {
                                        if (null == t) return "";
                                        if (t == +t) return t;
                                        _(o, {
                                            height: t
                                        });
                                        try {
                                            return o.getBBox().height
                                        } catch (t) {
                                            return 0
                                        }
                                    }

                                    function u(r, o) {
                                        null == e ? i[r] = o(t.attr(r) || 0) : r == e && (i = o(null == n ? t.attr(r) || 0 : n))
                                    }
                                    switch (o || (o = _("rect"), _(o, {
                                        x: -9e9,
                                        y: -9e9,
                                        width: 10,
                                        height: 10,
                                        class: "svg---mgr",
                                        fill: "none"
                                    }), r.appendChild(o)), t.type) {
                                        case "rect":
                                            u("rx", a), u("ry", s);
                                        case "image":
                                            u("width", a), u("height", s);
                                        case "text":
                                            u("x", a), u("y", s);
                                            break;
                                        case "circle":
                                            u("cx", a), u("cy", s), u("r", a);
                                            break;
                                        case "ellipse":
                                            u("cx", a), u("cy", s), u("rx", a), u("ry", s);
                                            break;
                                        case "line":
                                            u("x1", a), u("x2", a), u("y1", s), u("y2", s);
                                            break;
                                        case "marker":
                                            u("refX", a), u("markerWidth", a), u("refY", s), u("markerHeight", s);
                                            break;
                                        case "radialGradient":
                                            u("fx", a), u("fy", s);
                                            break;
                                        case "tspan":
                                            u("dx", a), u("dy", s);
                                            break;
                                        default:
                                            u(e, a)
                                    }
                                    return r.removeChild(o), i
                                }, r.doc.contains || r.doc.compareDocumentPosition, n._.getSomeDefs = function(t) {
                                    var e = t.node.ownerSVGElement && Y(t.node.ownerSVGElement) || t.node.parentNode && Y(t.node.parentNode) || n.select("svg") || n(0, 0),
                                        r = e.select("defs"),
                                        i = null != r && r.node;
                                    return i || (i = U("defs", e.node).node), i
                                }, n._.getSomeSVG = R, n.select = function(t) {
                                    return t = s(t).replace(/([^\\]):/g, "$1\\:"), Y(r.doc.querySelector(t))
                                }, n.selectAll = function(t) {
                                    for (var e = r.doc.querySelectorAll(t), i = (n.set || Array)(), o = 0; o < e.length; o++) i.push(Y(e[o]));
                                    return i
                                }, setInterval((function() {
                                    for (var t in B)
                                        if (B[a](t)) {
                                            var e = B[t],
                                                n = e.node;
                                            ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete B[t]
                                        }
                                }), 1e4), I.prototype.attr = function(t, n) {
                                    var r = this,
                                        i = r.node;
                                    if (!t) {
                                        if (1 != i.nodeType) return {
                                            text: i.nodeValue
                                        };
                                        for (var o = i.attributes, s = {}, u = 0, l = o.length; u < l; u++) s[o[u].nodeName] = o[u].nodeValue;
                                        return s
                                    }
                                    if (T(t, "string")) {
                                        if (!(arguments.length > 1)) return e("snap.util.getattr." + t, r).firstDefined();
                                        var c = {};
                                        c[t] = n, t = c
                                    }
                                    for (var f in t) t[a](f) && e("snap.util.attr." + f, r, t[f]);
                                    return r
                                }, n.parse = function(t) {
                                    var e = r.doc.createDocumentFragment(),
                                        n = !0,
                                        i = r.doc.createElement("div");
                                    if ((t = s(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), i.innerHTML = t, t = i.getElementsByTagName("svg")[0])
                                        if (n) e = t;
                                        else
                                            for (; t.firstChild;) e.appendChild(t.firstChild);
                                    return new $(e)
                                }, n.fragment = function() {
                                    for (var t = Array.prototype.slice.call(arguments, 0), e = r.doc.createDocumentFragment(), i = 0, o = t.length; i < o; i++) {
                                        var a = t[i];
                                        a.node && a.node.nodeType && e.appendChild(a.node), a.nodeType && e.appendChild(a), "string" == typeof a && e.appendChild(n.parse(a).node)
                                    }
                                    return new $(e)
                                }, n._.make = U, n._.wrap = Y, X.prototype.el = function(t, e) {
                                    var n = U(t, this.node);
                                    return e && n.attr(e), n
                                }, I.prototype.children = function() {
                                    for (var t = [], e = this.node.childNodes, r = 0, i = e.length; r < i; r++) t[r] = n(e[r]);
                                    return t
                                }, I.prototype.toJSON = function() {
                                    var t = [];
                                    return function t(e, n) {
                                        for (var r = 0, i = e.length; r < i; r++) {
                                            var o = {
                                                    type: e[r].type,
                                                    attr: e[r].attr()
                                                },
                                                a = e[r].children();
                                            n.push(o), a.length && t(a, o.childNodes = [])
                                        }
                                    }([this], t), t[0]
                                }, e.on("snap.util.getattr", (function() {
                                    var t = e.nt(),
                                        n = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, (function(t) {
                                            return "-" + t.toLowerCase()
                                        }));
                                    return H[a](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : _(this.node, t)
                                }));
                                var H = {
                                    "alignment-baseline": 0,
                                    "baseline-shift": 0,
                                    clip: 0,
                                    "clip-path": 0,
                                    "clip-rule": 0,
                                    color: 0,
                                    "color-interpolation": 0,
                                    "color-interpolation-filters": 0,
                                    "color-profile": 0,
                                    "color-rendering": 0,
                                    cursor: 0,
                                    direction: 0,
                                    display: 0,
                                    "dominant-baseline": 0,
                                    "enable-background": 0,
                                    fill: 0,
                                    "fill-opacity": 0,
                                    "fill-rule": 0,
                                    filter: 0,
                                    "flood-color": 0,
                                    "flood-opacity": 0,
                                    font: 0,
                                    "font-family": 0,
                                    "font-size": 0,
                                    "font-size-adjust": 0,
                                    "font-stretch": 0,
                                    "font-style": 0,
                                    "font-variant": 0,
                                    "font-weight": 0,
                                    "glyph-orientation-horizontal": 0,
                                    "glyph-orientation-vertical": 0,
                                    "image-rendering": 0,
                                    kerning: 0,
                                    "letter-spacing": 0,
                                    "lighting-color": 0,
                                    marker: 0,
                                    "marker-end": 0,
                                    "marker-mid": 0,
                                    "marker-start": 0,
                                    mask: 0,
                                    opacity: 0,
                                    overflow: 0,
                                    "pointer-events": 0,
                                    "shape-rendering": 0,
                                    "stop-color": 0,
                                    "stop-opacity": 0,
                                    stroke: 0,
                                    "stroke-dasharray": 0,
                                    "stroke-dashoffset": 0,
                                    "stroke-linecap": 0,
                                    "stroke-linejoin": 0,
                                    "stroke-miterlimit": 0,
                                    "stroke-opacity": 0,
                                    "stroke-width": 0,
                                    "text-anchor": 0,
                                    "text-decoration": 0,
                                    "text-rendering": 0,
                                    "unicode-bidi": 0,
                                    visibility: 0,
                                    "word-spacing": 0,
                                    "writing-mode": 0
                                };
                                return e.on("snap.util.attr", (function(t) {
                                    var n = e.nt(),
                                        r = {};
                                    r[n = n.substring(n.lastIndexOf(".") + 1)] = t;
                                    var i = n.replace(/-(\w)/gi, (function(t, e) {
                                            return e.toUpperCase()
                                        })),
                                        o = n.replace(/[A-Z]/g, (function(t) {
                                            return "-" + t.toLowerCase()
                                        }));
                                    H[a](o) ? this.node.style[i] = null == t ? "" : t : _(this.node, r)
                                })), X.prototype, n.ajax = function(t, n, r, i) {
                                    var o = new XMLHttpRequest,
                                        a = E();
                                    if (o) {
                                        if (T(n, "function")) i = r, r = n, n = null;
                                        else if (T(n, "object")) {
                                            var s = [];
                                            for (var u in n) n.hasOwnProperty(u) && s.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                                            n = s.join("&")
                                        }
                                        return o.open(n ? "POST" : "GET", t, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + a + ".0", r), e.once("snap.ajax." + a + ".200", r), e.once("snap.ajax." + a + ".304", r)), o.onreadystatechange = function() {
                                            4 == o.readyState && e("snap.ajax." + a + "." + o.status, i, o)
                                        }, 4 == o.readyState ? o : (o.send(n), o)
                                    }
                                }, n.load = function(t, e, r) {
                                    n.ajax(t, (function(t) {
                                        var i = n.parse(t.responseText);
                                        r ? e.call(r, i) : e(i)
                                    }))
                                }, n.getElementByPoint = function(t, e) {
                                    this.canvas;
                                    var n, i, o, a, s, u, l, c = r.doc.elementFromPoint(t, e);
                                    if (r.win.opera && "svg" == c.tagName) {
                                        var f = (i = (n = c).getBoundingClientRect(), o = n.ownerDocument, a = o.body, s = o.documentElement, u = s.clientTop || a.clientTop || 0, l = s.clientLeft || a.clientLeft || 0, {
                                                y: i.top + (g.win.pageYOffset || s.scrollTop || a.scrollTop) - u,
                                                x: i.left + (g.win.pageXOffset || s.scrollLeft || a.scrollLeft) - l
                                            }),
                                            h = c.createSVGRect();
                                        h.x = t - f.x, h.y = e - f.y, h.width = h.height = 1;
                                        var d = c.getIntersectionList(h, null);
                                        d.length && (c = d[d.length - 1])
                                    }
                                    return c ? Y(c) : null
                                }, n.plugin = function(t) {
                                    t(n, I, X, r, $)
                                }, r.win.Snap = n, n
                            }(t || this);
                        return r.plugin((function(n, r, i, o, a) {
                            var s = r.prototype,
                                u = n.is,
                                l = String,
                                c = n._unit2px,
                                f = n._.$,
                                h = n._.make,
                                d = n._.getSomeDefs,
                                p = "hasOwnProperty",
                                g = n._.wrap;
                            s.getBBox = function(t) {
                                if ("tspan" == this.type) return n._.box(this.node.getClientRects().item(0));
                                if (!n.Matrix || !n.path) return this.node.getBBox();
                                var e = this,
                                    r = new n.Matrix;
                                if (e.removed) return n._.box();
                                for (;
                                    "use" == e.type;)
                                    if (t || (r = r.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                                    else {
                                        var i = e.attr("xlink:href");
                                        e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                                    } var o = e._,
                                    a = n.path.get[e.type] || n.path.get.deflt;
                                try {
                                    return t ? (o.bboxwt = a ? n.path.getBBox(e.realPath = a(e)) : n._.box(e.node.getBBox()), n._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = n.path.getBBox(n.path.map(e.realPath, r.add(e.matrix))), n._.box(o.bbox))
                                } catch (t) {
                                    return n._.box()
                                }
                            };
                            var v = function() {
                                return this.string
                            };

                            function y(t, e) {
                                if (null == e) {
                                    var r = !0;
                                    if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new n.Matrix;
                                    e = n._.svgTransform2string(e)
                                } else e = n._.rgTransform.test(e) ? l(e).replace(/\.{3}|\u2026/g, t._.transform || "") : n._.svgTransform2string(e), u(e, "array") && (e = n.path ? n.path.toString.call(e) : l(e)), t._.transform = e;
                                var i = n._.transform2matrix(e, t.getBBox(1));
                                if (r) return i;
                                t.matrix = i
                            }
                            s.transform = function(t) {
                                var e = this._;
                                if (null == t) {
                                    for (var r, i = this, o = new n.Matrix(this.node.getCTM()), a = y(this), s = [a], u = new n.Matrix, c = a.toTransformString(), h = l(a) == l(this.matrix) ? l(e.transform) : c;
                                        "svg" != i.type && (i = i.parent());) s.push(y(i));
                                    for (r = s.length; r--;) u.add(s[r]);
                                    return {
                                        string: h,
                                        globalMatrix: o,
                                        totalMatrix: u,
                                        localMatrix: a,
                                        diffMatrix: o.clone().add(a.invert()),
                                        global: o.toTransformString(),
                                        total: u.toTransformString(),
                                        local: c,
                                        toString: v
                                    }
                                }
                                return t instanceof n.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : y(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {
                                    gradientTransform: this.matrix
                                }) : "pattern" == this.type ? f(this.node, {
                                    patternTransform: this.matrix
                                }) : f(this.node, {
                                    transform: this.matrix
                                })), this
                            }, s.parent = function() {
                                return g(this.node.parentNode)
                            }, s.append = s.add = function(t) {
                                if (t) {
                                    if ("set" == t.type) {
                                        var e = this;
                                        return t.forEach((function(t) {
                                            e.add(t)
                                        })), this
                                    }
                                    t = g(t), this.node.appendChild(t.node), t.paper = this.paper
                                }
                                return this
                            }, s.appendTo = function(t) {
                                return t && (t = g(t)).append(this), this
                            }, s.prepend = function(t) {
                                if (t) {
                                    if ("set" == t.type) {
                                        var e, n = this;
                                        return t.forEach((function(t) {
                                            e ? e.after(t) : n.prepend(t), e = t
                                        })), this
                                    }
                                    var r = (t = g(t)).parent();
                                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                                }
                                return this
                            }, s.prependTo = function(t) {
                                return (t = g(t)).prepend(this), this
                            }, s.before = function(t) {
                                if ("set" == t.type) {
                                    var e = this;
                                    return t.forEach((function(t) {
                                        var n = t.parent();
                                        e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                                    })), this.parent().add(), this
                                }
                                var n = (t = g(t)).parent();
                                return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                            }, s.after = function(t) {
                                var e = (t = g(t)).parent();
                                return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                            }, s.insertBefore = function(t) {
                                t = g(t);
                                var e = this.parent();
                                return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                            }, s.insertAfter = function(t) {
                                t = g(t);
                                var e = this.parent();
                                return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                            }, s.remove = function() {
                                var t = this.parent();
                                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                            }, s.select = function(t) {
                                return g(this.node.querySelector(t))
                            }, s.selectAll = function(t) {
                                for (var e = this.node.querySelectorAll(t), r = (n.set || Array)(), i = 0; i < e.length; i++) r.push(g(e[i]));
                                return r
                            }, s.asPX = function(t, e) {
                                return null == e && (e = this.attr(t)), +c(this, t, e)
                            }, s.use = function() {
                                var t, e = this.node.id;
                                return e || (e = this.id, f(this.node, {
                                    id: e
                                })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? h(this.type, this.node.parentNode) : h("use", this.node.parentNode), f(t.node, {
                                    "xlink:href": "#" + e
                                }), t.original = this, t
                            }, s.clone = function() {
                                var t = g(this.node.cloneNode(!0));
                                return f(t.node, "id") && f(t.node, {
                                        id: t.id
                                    }),
                                    function(t) {
                                        var e, r = t.selectAll("*"),
                                            i = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                                            o = [],
                                            a = {};

                                        function s(t, e) {
                                            var r = f(t.node, e);
                                            (r = (r = r && r.match(i)) && r[2]) && "#" == r.charAt() && (r = r.substring(1)) && (a[r] = (a[r] || []).concat((function(r) {
                                                var i = {};
                                                i[e] = n.url(r), f(t.node, i)
                                            })))
                                        }

                                        function u(t) {
                                            var e = f(t.node, "xlink:href");
                                            e && "#" == e.charAt() && (e = e.substring(1)) && (a[e] = (a[e] || []).concat((function(e) {
                                                t.attr("xlink:href", "#" + e)
                                            })))
                                        }
                                        for (var l = 0, c = r.length; l < c; l++) {
                                            s(e = r[l], "fill"), s(e, "stroke"), s(e, "filter"), s(e, "mask"), s(e, "clip-path"), u(e);
                                            var h = f(e.node, "id");
                                            h && (f(e.node, {
                                                id: e.id
                                            }), o.push({
                                                old: h,
                                                id: e.id
                                            }))
                                        }
                                        for (l = 0, c = o.length; l < c; l++) {
                                            var d = a[o[l].old];
                                            if (d)
                                                for (var p = 0, g = d.length; p < g; p++) d[p](o[l].id)
                                        }
                                    }(t), t.insertAfter(this), t
                            }, s.toDefs = function() {
                                return d(this).appendChild(this.node), this
                            }, s.pattern = s.toPattern = function(t, e, n, r) {
                                var i = h("pattern", d(this));
                                return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), f(i.node, {
                                    x: t,
                                    y: e,
                                    width: n,
                                    height: r,
                                    patternUnits: "userSpaceOnUse",
                                    id: i.id,
                                    viewBox: [t, e, n, r].join(" ")
                                }), i.node.appendChild(this.node), i
                            }, s.marker = function(t, e, n, r, i, o) {
                                var a = h("marker", d(this));
                                return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, o = t.refY || t.cy, t = t.x), f(a.node, {
                                    viewBox: [t, e, n, r].join(" "),
                                    markerWidth: n,
                                    markerHeight: r,
                                    orient: "auto",
                                    refX: i || 0,
                                    refY: o || 0,
                                    id: a.id
                                }), a.node.appendChild(this.node), a
                            };
                            var m = {};

                            function x(t) {
                                return function() {
                                    var e = t ? "<" + this.type : "",
                                        n = this.node.attributes,
                                        r = this.node.childNodes;
                                    if (t)
                                        for (var i = 0, o = n.length; i < o; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                                    if (r.length) {
                                        for (t && (e += ">"), i = 0, o = r.length; i < o; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += g(r[i]).toString());
                                        t && (e += "</" + this.type + ">")
                                    } else t && (e += "/>");
                                    return e
                                }
                            }
                            s.data = function(t, r) {
                                var i = m[this.id] = m[this.id] || {};
                                if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                                if (1 == arguments.length) {
                                    if (n.is(t, "object")) {
                                        for (var o in t) t[p](o) && this.data(o, t[o]);
                                        return this
                                    }
                                    return e("snap.data.get." + this.id, this, i[t], t), i[t]
                                }
                                return i[t] = r, e("snap.data.set." + this.id, this, r, t), this
                            }, s.removeData = function(t) {
                                return null == t ? m[this.id] = {} : m[this.id] && delete m[this.id][t], this
                            }, s.outerSVG = s.toString = x(1), s.innerSVG = x(), s.toDataURL = function() {
                                if (t && t.btoa) {
                                    var e = this.getBBox(),
                                        r = n.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                                            x: +e.x.toFixed(3),
                                            y: +e.y.toFixed(3),
                                            width: +e.width.toFixed(3),
                                            height: +e.height.toFixed(3),
                                            contents: this.outerSVG()
                                        });
                                    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(r)))
                                }
                            }, a.prototype.select = s.select, a.prototype.selectAll = s.selectAll
                        })), r.plugin((function(t, r, i, o, a) {
                            var s = r.prototype,
                                u = t.is,
                                l = String,
                                c = "hasOwnProperty";

                            function f(t, e, n) {
                                return function(r) {
                                    var i = r.slice(t, e);
                                    return 1 == i.length && (i = i[0]), n ? n(i) : i
                                }
                            }
                            var h = function(t, e, r, i) {
                                "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                            };
                            t._.Animation = h, t.animation = function(t, e, n, r) {
                                return new h(t, e, n, r)
                            }, s.inAnim = function() {
                                var t = [];
                                for (var e in this.anims) this.anims[c](e) && function(e) {
                                    t.push({
                                        anim: new h(e._attrs, e.dur, e.easing, e._callback),
                                        mina: e,
                                        curStatus: e.status(),
                                        status: function(t) {
                                            return e.status(t)
                                        },
                                        stop: function() {
                                            e.stop()
                                        }
                                    })
                                }(this.anims[e]);
                                return t
                            }, t.animate = function(t, r, i, o, a, s) {
                                "function" != typeof a || a.length || (s = a, a = n.linear);
                                var u = n.time(),
                                    l = n(t, r, u, u + o, n.time, i, a);
                                return s && e.once("mina.finish." + l.id, s), l
                            }, s.stop = function() {
                                for (var t = this.inAnim(), e = 0, n = t.length; e < n; e++) t[e].stop();
                                return this
                            }, s.animate = function(t, r, i, o) {
                                "function" != typeof i || i.length || (o = i, i = n.linear), t instanceof h && (o = t.callback, i = t.easing, r = t.dur, t = t.attr);
                                var a, s, d, p, g = [],
                                    v = [],
                                    y = {},
                                    m = this;
                                for (var x in t)
                                    if (t[c](x)) {
                                        m.equal ? (a = (p = m.equal(x, l(t[x]))).from, s = p.to, d = p.f) : (a = +m.attr(x), s = +t[x]);
                                        var b = u(a, "array") ? a.length : 1;
                                        y[x] = f(g.length, g.length + b, d), g = g.concat(a), v = v.concat(s)
                                    } var w = n.time(),
                                    F = n(g, v, w, w + r, n.time, (function(t) {
                                        var e = {};
                                        for (var n in y) y[c](n) && (e[n] = y[n](t));
                                        m.attr(e)
                                    }), i);
                                return m.anims[F.id] = F, F._attrs = t, F._callback = o, e("snap.animcreated." + m.id, F), e.once("mina.finish." + F.id, (function() {
                                    e.off("mina.*." + F.id), delete m.anims[F.id], o && o.call(m)
                                })), e.once("mina.stop." + F.id, (function() {
                                    e.off("mina.*." + F.id), delete m.anims[F.id]
                                })), m
                            }
                        })), r.plugin((function(t, e, n, r, i) {
                            var o = Object.prototype.toString,
                                a = String,
                                s = Math;

                            function u(t, e, n, r, i, a) {
                                if (null == e && "[object SVGMatrix]" == o.call(t)) return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f);
                                null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
                            }! function(e) {
                                function n(t) {
                                    return t[0] * t[0] + t[1] * t[1]
                                }

                                function r(t) {
                                    var e = s.sqrt(n(t));
                                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                                }
                                e.add = function(t, e, n, r, i, o) {
                                    if (t && t instanceof u) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                                    var a = t * this.a + e * this.c,
                                        s = t * this.b + e * this.d;
                                    return this.e += i * this.a + o * this.c, this.f += i * this.b + o * this.d, this.c = n * this.a + r * this.c, this.d = n * this.b + r * this.d, this.a = a, this.b = s, this
                                }, u.prototype.multLeft = function(t, e, n, r, i, o) {
                                    if (t && t instanceof u) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                                    var a = t * this.a + n * this.b,
                                        s = t * this.c + n * this.d,
                                        l = t * this.e + n * this.f + i;
                                    return this.b = e * this.a + r * this.b, this.d = e * this.c + r * this.d, this.f = e * this.e + r * this.f + o, this.a = a, this.c = s, this.e = l, this
                                }, e.invert = function() {
                                    var t = this,
                                        e = t.a * t.d - t.b * t.c;
                                    return new u(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                                }, e.clone = function() {
                                    return new u(this.a, this.b, this.c, this.d, this.e, this.f)
                                }, e.translate = function(t, e) {
                                    return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
                                }, e.scale = function(t, e, n, r) {
                                    return null == e && (e = t), (n || r) && this.translate(n, r), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (n || r) && this.translate(-n, -r), this
                                }, e.rotate = function(e, n, r) {
                                    e = t.rad(e), n = n || 0, r = r || 0;
                                    var i = +s.cos(e).toFixed(9),
                                        o = +s.sin(e).toFixed(9);
                                    return this.add(i, o, -o, i, n, r), this.add(1, 0, 0, 1, -n, -r)
                                }, e.skewX = function(t) {
                                    return this.skew(t, 0)
                                }, e.skewY = function(t) {
                                    return this.skew(0, t)
                                }, e.skew = function(e, n) {
                                    e = e || 0, n = n || 0, e = t.rad(e), n = t.rad(n);
                                    var r = s.tan(e).toFixed(9),
                                        i = s.tan(n).toFixed(9);
                                    return this.add(1, i, r, 1, 0, 0)
                                }, e.x = function(t, e) {
                                    return t * this.a + e * this.c + this.e
                                }, e.y = function(t, e) {
                                    return t * this.b + e * this.d + this.f
                                }, e.get = function(t) {
                                    return +this[a.fromCharCode(97 + t)].toFixed(4)
                                }, e.toString = function() {
                                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                                }, e.offset = function() {
                                    return [this.e.toFixed(4), this.f.toFixed(4)]
                                }, e.determinant = function() {
                                    return this.a * this.d - this.b * this.c
                                }, e.split = function() {
                                    var e = {};
                                    e.dx = this.e, e.dy = this.f;
                                    var i = [
                                        [this.a, this.b],
                                        [this.c, this.d]
                                    ];
                                    e.scalex = s.sqrt(n(i[0])), r(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = s.sqrt(n(i[1])), r(i[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                                    var o = i[0][1],
                                        a = i[1][1];
                                    return a < 0 ? (e.rotate = t.deg(s.acos(a)), o < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(s.asin(o)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                                }, e.toTransformString = function(t) {
                                    var e = t || this.split();
                                    return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
                                }
                            }(u.prototype), t.Matrix = u, t.matrix = function(t, e, n, r, i, o) {
                                return new u(t, e, n, r, i, o)
                            }
                        })), r.plugin((function(t, n, r, i, o) {
                            var a, s = t._.make,
                                u = t._.wrap,
                                l = t.is,
                                c = t._.getSomeDefs,
                                f = /^url\((['"]?)([^)]+)\1\)$/,
                                h = t._.$,
                                d = t.url,
                                p = String,
                                g = t._.separator;

                            function v(r) {
                                return function(i) {
                                    if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, c(this).appendChild(i), i = u(i)), i instanceof n)
                                        if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                                            i.node.id || h(i.node, {
                                                id: i.id
                                            });
                                            var a = d(i.node.id)
                                        } else a = i.attr(r);
                                    else if ((a = t.color(i)).error) {
                                        var s = t(c(this).ownerSVGElement).gradient(i);
                                        s ? (s.node.id || h(s.node, {
                                            id: s.id
                                        }), a = d(s.node.id)) : a = i
                                    } else a = p(a);
                                    var l = {};
                                    l[r] = a, h(this.node, l), this.node.style[r] = ""
                                }
                            }
                            t.deurl = function(t) {
                                var e = String(t).match(f);
                                return e ? e[2] : t
                            }, e.on("snap.util.attr.mask", (function(t) {
                                if (t instanceof n || t instanceof o) {
                                    if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, c(this).appendChild(t), t = u(t)), "mask" == t.type) var r = t;
                                    else(r = s("mask", c(this))).node.appendChild(t.node);
                                    !r.node.id && h(r.node, {
                                        id: r.id
                                    }), h(this.node, {
                                        mask: d(r.id)
                                    })
                                }
                            })), a = function(t) {
                                if (t instanceof n || t instanceof o) {
                                    e.stop();
                                    for (var r, i = t.node; i;) {
                                        if ("clipPath" === i.nodeName) {
                                            r = new n(i);
                                            break
                                        }
                                        if ("svg" === i.nodeName) {
                                            r = void 0;
                                            break
                                        }
                                        i = i.parentNode
                                    }
                                    r || ((r = s("clipPath", c(this))).node.appendChild(t.node), !r.node.id && h(r.node, {
                                        id: r.id
                                    })), h(this.node, {
                                        "clip-path": d(r.node.id || r.id)
                                    })
                                }
                            }, e.on("snap.util.attr.clip", a), e.on("snap.util.attr.clip-path", a), e.on("snap.util.attr.clipPath", a), e.on("snap.util.attr.fill", v("fill")), e.on("snap.util.attr.stroke", v("stroke"));
                            var y = /^([lr])(?:\(([^)]*)\))?(.*)$/i;

                            function m(t) {
                                e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
                            }

                            function x() {
                                return e.stop(), this.node.style.fontSize
                            }
                            e.on("snap.util.grad.parse", (function(t) {
                                    var e = (t = p(t)).match(y);
                                    if (!e) return null;
                                    var n = e[1],
                                        r = e[2],
                                        i = e[3];
                                    1 == (r = r.split(/\s*,\s*/).map((function(t) {
                                        return +t == t ? +t : t
                                    }))).length && 0 == r[0] && (r = []);
                                    var o = (i = (i = i.split("-")).map((function(t) {
                                            var e = {
                                                color: (t = t.split(":"))[0]
                                            };
                                            return t[1] && (e.offset = parseFloat(t[1])), e
                                        }))).length,
                                        a = 0,
                                        s = 0;

                                    function u(t, e) {
                                        for (var n = (e - a) / (t - s), r = s; r < t; r++) i[r].offset = +(+a + n * (r - s)).toFixed(2);
                                        s = t, a = e
                                    }
                                    o--;
                                    for (var l = 0; l < o; l++) "offset" in i[l] && u(l, i[l].offset);
                                    return i[o].offset = i[o].offset || 100, u(o, i[o].offset), {
                                        type: n,
                                        params: r,
                                        stops: i
                                    }
                                })), e.on("snap.util.attr.d", (function(n) {
                                    e.stop(), l(n, "array") && l(n[0], "array") && (n = t.path.toString.call(n)), (n = p(n)).match(/[ruo]/i) && (n = t.path.toAbsolute(n)), h(this.node, {
                                        d: n
                                    })
                                }))(-1), e.on("snap.util.attr.#text", (function(t) {
                                    e.stop(), t = p(t);
                                    for (var n = i.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                                    this.node.appendChild(n)
                                }))(-1), e.on("snap.util.attr.path", (function(t) {
                                    e.stop(), this.attr({
                                        d: t
                                    })
                                }))(-1), e.on("snap.util.attr.class", (function(t) {
                                    e.stop(), this.node.className.baseVal = t
                                }))(-1), e.on("snap.util.attr.viewBox", (function(t) {
                                    var n;
                                    n = l(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : l(t, "array") ? t.join(" ") : t, h(this.node, {
                                        viewBox: n
                                    }), e.stop()
                                }))(-1), e.on("snap.util.attr.transform", (function(t) {
                                    this.transform(t), e.stop()
                                }))(-1), e.on("snap.util.attr.r", (function(t) {
                                    "rect" == this.type && (e.stop(), h(this.node, {
                                        rx: t,
                                        ry: t
                                    }))
                                }))(-1), e.on("snap.util.attr.textpath", (function(t) {
                                    if (e.stop(), "text" == this.type) {
                                        var r, i, o;
                                        if (!t && this.textPath) {
                                            for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                                            return i.remove(), void delete this.textPath
                                        }
                                        if (l(t, "string")) {
                                            var a = c(this),
                                                s = u(a.parentNode).path(t);
                                            a.appendChild(s.node), r = s.id, s.attr({
                                                id: r
                                            })
                                        } else(t = u(t)) instanceof n && ((r = t.attr("id")) || (r = t.id, t.attr({
                                            id: r
                                        })));
                                        if (r)
                                            if (i = this.textPath, o = this.node, i) i.attr({
                                                "xlink:href": "#" + r
                                            });
                                            else {
                                                for (i = h("textPath", {
                                                        "xlink:href": "#" + r
                                                    }); o.firstChild;) i.appendChild(o.firstChild);
                                                o.appendChild(i), this.textPath = u(i)
                                            }
                                    }
                                }))(-1), e.on("snap.util.attr.text", (function(t) {
                                    if ("text" == this.type) {
                                        for (var n = this.node, r = function(t) {
                                                var e = h("tspan");
                                                if (l(t, "array"))
                                                    for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                                                else e.appendChild(i.doc.createTextNode(t));
                                                return e.normalize && e.normalize(), e
                                            }; n.firstChild;) n.removeChild(n.firstChild);
                                        for (var o = r(t); o.firstChild;) n.appendChild(o.firstChild)
                                    }
                                    e.stop()
                                }))(-1), e.on("snap.util.attr.fontSize", m)(-1), e.on("snap.util.attr.font-size", m)(-1), e.on("snap.util.getattr.transform", (function() {
                                    return e.stop(), this.transform()
                                }))(-1), e.on("snap.util.getattr.textpath", (function() {
                                    return e.stop(), this.textPath
                                }))(-1),
                                function() {
                                    function n(n) {
                                        return function() {
                                            e.stop();
                                            var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                                            return "none" == r ? r : t(i.doc.getElementById(r.match(f)[1]))
                                        }
                                    }

                                    function r(t) {
                                        return function(n) {
                                            e.stop();
                                            var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                                            if ("" != n && n) {
                                                if ("marker" == n.type) {
                                                    var i = n.node.id;
                                                    return i || h(n.node, {
                                                        id: n.id
                                                    }), void(this.node.style[r] = d(i))
                                                }
                                            } else this.node.style[r] = "none"
                                        }
                                    }
                                    e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
                                }(), e.on("snap.util.getattr.r", (function() {
                                    if ("rect" == this.type && h(this.node, "rx") == h(this.node, "ry")) return e.stop(), h(this.node, "rx")
                                }))(-1), e.on("snap.util.getattr.text", (function() {
                                    if ("text" == this.type || "tspan" == this.type) {
                                        e.stop();
                                        var t = function t(e) {
                                            for (var n = [], r = e.childNodes, i = 0, o = r.length; i < o; i++) {
                                                var a = r[i];
                                                3 == a.nodeType && n.push(a.nodeValue), "tspan" == a.tagName && (1 == a.childNodes.length && 3 == a.firstChild.nodeType ? n.push(a.firstChild.nodeValue) : n.push(t(a)))
                                            }
                                            return n
                                        }(this.node);
                                        return 1 == t.length ? t[0] : t
                                    }
                                }))(-1), e.on("snap.util.getattr.#text", (function() {
                                    return this.node.textContent
                                }))(-1), e.on("snap.util.getattr.fill", (function(n) {
                                    if (!n) {
                                        e.stop();
                                        var r = e("snap.util.getattr.fill", this, !0).firstDefined();
                                        return t(t.deurl(r)) || r
                                    }
                                }))(-1), e.on("snap.util.getattr.stroke", (function(n) {
                                    if (!n) {
                                        e.stop();
                                        var r = e("snap.util.getattr.stroke", this, !0).firstDefined();
                                        return t(t.deurl(r)) || r
                                    }
                                }))(-1), e.on("snap.util.getattr.viewBox", (function() {
                                    e.stop();
                                    var n = h(this.node, "viewBox");
                                    return n ? (n = n.split(g), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
                                }))(-1), e.on("snap.util.getattr.points", (function() {
                                    var t = h(this.node, "points");
                                    return e.stop(), t ? t.split(g) : void 0
                                }))(-1), e.on("snap.util.getattr.path", (function() {
                                    var t = h(this.node, "d");
                                    return e.stop(), t
                                }))(-1), e.on("snap.util.getattr.class", (function() {
                                    return this.node.className.baseVal
                                }))(-1), e.on("snap.util.getattr.fontSize", x)(-1), e.on("snap.util.getattr.font-size", x)(-1)
                        })), r.plugin((function(t, e, n, r, i) {
                            var o = /\S+/g,
                                a = String,
                                s = e.prototype;
                            s.addClass = function(t) {
                                var e, n, r, i = a(t || "").match(o) || [],
                                    s = this.node,
                                    u = s.className.baseVal,
                                    l = u.match(o) || [];
                                if (i.length) {
                                    for (e = 0; n = i[e++];) ~l.indexOf(n) || l.push(n);
                                    u != (r = l.join(" ")) && (s.className.baseVal = r)
                                }
                                return this
                            }, s.removeClass = function(t) {
                                var e, n, r, i, s = a(t || "").match(o) || [],
                                    u = this.node,
                                    l = u.className.baseVal,
                                    c = l.match(o) || [];
                                if (c.length) {
                                    for (e = 0; r = s[e++];) ~(n = c.indexOf(r)) && c.splice(n, 1);
                                    l != (i = c.join(" ")) && (u.className.baseVal = i)
                                }
                                return this
                            }, s.hasClass = function(t) {
                                return !!~(this.node.className.baseVal.match(o) || []).indexOf(t)
                            }, s.toggleClass = function(t, e) {
                                if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                                var n, r, i, a, s = (t || "").match(o) || [],
                                    u = this.node,
                                    l = u.className.baseVal,
                                    c = l.match(o) || [];
                                for (n = 0; i = s[n++];) ~(r = c.indexOf(i)) ? c.splice(r, 1) : c.push(i);
                                return l != (a = c.join(" ")) && (u.className.baseVal = a), this
                            }
                        })), r.plugin((function(t, n, r, i, o) {
                            var a = {
                                    "+": function(t, e) {
                                        return t + e
                                    },
                                    "-": function(t, e) {
                                        return t - e
                                    },
                                    "/": function(t, e) {
                                        return t / e
                                    },
                                    "*": function(t, e) {
                                        return t * e
                                    }
                                },
                                s = String,
                                u = /[a-z]+$/i,
                                l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;

                            function c(t) {
                                return t
                            }

                            function f(t) {
                                return function(e) {
                                    return +e.toFixed(3) + t
                                }
                            }
                            e.on("snap.util.attr", (function(t) {
                                var n = s(t).match(l);
                                if (n) {
                                    var r = e.nt(),
                                        i = r.substring(r.lastIndexOf(".") + 1),
                                        o = this.attr(i),
                                        c = {};
                                    e.stop();
                                    var f = n[3] || "",
                                        h = o.match(u),
                                        d = a[n[1]];
                                    if (h && h == f ? t = d(parseFloat(o), +n[2]) : (o = this.asPX(i), t = d(this.asPX(i), this.asPX(i, n[2] + f))), isNaN(o) || isNaN(t)) return;
                                    c[i] = t, this.attr(c)
                                }
                            }))(-10), e.on("snap.util.equal", (function(t, n) {
                                var r = s(this.attr(t) || ""),
                                    i = s(n).match(l);
                                if (i) {
                                    e.stop();
                                    var o = i[3] || "",
                                        h = r.match(u),
                                        d = a[i[1]];
                                    return h && h == o ? {
                                        from: parseFloat(r),
                                        to: d(parseFloat(r), +i[2]),
                                        f: f(h)
                                    } : {
                                        from: r = this.asPX(t),
                                        to: d(r, this.asPX(t, i[2] + o)),
                                        f: c
                                    }
                                }
                            }))(-10)
                        })), r.plugin((function(n, r, i, o, a) {
                            var s = i.prototype,
                                u = n.is;
                            s.rect = function(t, e, n, r, i, o) {
                                var a;
                                return null == o && (o = i), u(t, "object") && "[object Object]" == t ? a = t : null != t && (a = {
                                    x: t,
                                    y: e,
                                    width: n,
                                    height: r
                                }, null != i && (a.rx = i, a.ry = o)), this.el("rect", a)
                            }, s.circle = function(t, e, n) {
                                var r;
                                return u(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                                    cx: t,
                                    cy: e,
                                    r: n
                                }), this.el("circle", r)
                            };
                            var l = function() {
                                function t() {
                                    this.parentNode.removeChild(this)
                                }
                                return function(e, n) {
                                    var r = o.doc.createElement("img"),
                                        i = o.doc.body;
                                    r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                                        n.call(r), r.onload = r.onerror = null, i.removeChild(r)
                                    }, r.onerror = t, i.appendChild(r), r.src = e
                                }
                            }();
                            s.image = function(t, e, r, i, o) {
                                    var a = this.el("image");
                                    if (u(t, "object") && "src" in t) a.attr(t);
                                    else if (null != t) {
                                        var s = {
                                            "xlink:href": t,
                                            preserveAspectRatio: "none"
                                        };
                                        null != e && null != r && (s.x = e, s.y = r), null != i && null != o ? (s.width = i, s.height = o) : l(t, (function() {
                                            n._.$(a.node, {
                                                width: this.offsetWidth,
                                                height: this.offsetHeight
                                            })
                                        })), n._.$(a.node, s)
                                    }
                                    return a
                                }, s.ellipse = function(t, e, n, r) {
                                    var i;
                                    return u(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                                        cx: t,
                                        cy: e,
                                        rx: n,
                                        ry: r
                                    }), this.el("ellipse", i)
                                }, s.path = function(t) {
                                    var e;
                                    return u(t, "object") && !u(t, "array") ? e = t : t && (e = {
                                        d: t
                                    }), this.el("path", e)
                                }, s.group = s.g = function(t) {
                                    var e = this.el("g");
                                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                                }, s.svg = function(t, e, n, r, i, o, a, s) {
                                    var l = {};
                                    return u(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != o && null != a && null != s && (l.viewBox = [i, o, a, s])), this.el("svg", l)
                                }, s.mask = function(t) {
                                    var e = this.el("mask");
                                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                                }, s.ptrn = function(t, e, n, r, i, o, a, s) {
                                    if (u(t, "object")) var l = t;
                                    else l = {
                                        patternUnits: "userSpaceOnUse"
                                    }, t && (l.x = t), e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), l.viewBox = null != i && null != o && null != a && null != s ? [i, o, a, s] : [t || 0, e || 0, n || 0, r || 0];
                                    return this.el("pattern", l)
                                }, s.use = function(t) {
                                    return null != t ? (t instanceof r && (t.attr("id") || t.attr({
                                        id: n._.id(t)
                                    }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                                        "xlink:href": "#" + t
                                    })) : r.prototype.use.call(this)
                                }, s.symbol = function(t, e, n, r) {
                                    var i = {};
                                    return null != t && null != e && null != n && null != r && (i.viewBox = [t, e, n, r]), this.el("symbol", i)
                                }, s.text = function(t, e, n) {
                                    var r = {};
                                    return u(t, "object") ? r = t : null != t && (r = {
                                        x: t,
                                        y: e,
                                        text: n || ""
                                    }), this.el("text", r)
                                }, s.line = function(t, e, n, r) {
                                    var i = {};
                                    return u(t, "object") ? i = t : null != t && (i = {
                                        x1: t,
                                        x2: n,
                                        y1: e,
                                        y2: r
                                    }), this.el("line", i)
                                }, s.polyline = function(t) {
                                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                                    var e = {};
                                    return u(t, "object") && !u(t, "array") ? e = t : null != t && (e = {
                                        points: t
                                    }), this.el("polyline", e)
                                }, s.polygon = function(t) {
                                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                                    var e = {};
                                    return u(t, "object") && !u(t, "array") ? e = t : null != t && (e = {
                                        points: t
                                    }), this.el("polygon", e)
                                },
                                function() {
                                    var r = n._.$;

                                    function i() {
                                        return this.selectAll("stop")
                                    }

                                    function o(t, e) {
                                        var i = r("stop"),
                                            o = {
                                                offset: +e + "%"
                                            };
                                        t = n.color(t), o["stop-color"] = t.hex, t.opacity < 1 && (o["stop-opacity"] = t.opacity), r(i, o);
                                        for (var a, s = this.stops(), u = 0; u < s.length; u++)
                                            if (parseFloat(s[u].attr("offset")) > e) {
                                                this.node.insertBefore(i, s[u].node), a = !0;
                                                break
                                            } return a || this.node.appendChild(i), this
                                    }

                                    function a() {
                                        if ("linearGradient" == this.type) {
                                            var t = r(this.node, "x1") || 0,
                                                e = r(this.node, "x2") || 1,
                                                i = r(this.node, "y1") || 0,
                                                o = r(this.node, "y2") || 0;
                                            return n._.box(t, i, math.abs(e - t), math.abs(o - i))
                                        }
                                        var a = this.node.cx || .5,
                                            s = this.node.cy || .5,
                                            u = this.node.r || 0;
                                        return n._.box(a - u, s - u, 2 * u, 2 * u)
                                    }

                                    function u(t) {
                                        var r = t,
                                            i = this.stops();
                                        if ("string" == typeof t && (r = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), n.is(r, "array")) {
                                            for (var o = 0; o < i.length; o++)
                                                if (r[o]) {
                                                    var a = n.color(r[o].color),
                                                        s = {
                                                            offset: r[o].offset + "%"
                                                        };
                                                    s["stop-color"] = a.hex, a.opacity < 1 && (s["stop-opacity"] = a.opacity), i[o].attr(s)
                                                } else i[o].remove();
                                            for (o = i.length; o < r.length; o++) this.addStop(r[o].color, r[o].offset);
                                            return this
                                        }
                                    }

                                    function l(t, e, s, l, c) {
                                        var f = n._.make("linearGradient", t);
                                        return f.stops = i, f.addStop = o, f.getBBox = a, f.setStops = u, null != e && r(f.node, {
                                            x1: e,
                                            y1: s,
                                            x2: l,
                                            y2: c
                                        }), f
                                    }

                                    function c(t, e, s, u, l, c) {
                                        var f = n._.make("radialGradient", t);
                                        return f.stops = i, f.addStop = o, f.getBBox = a, null != e && r(f.node, {
                                            cx: e,
                                            cy: s,
                                            r: u
                                        }), null != l && null != c && r(f.node, {
                                            fx: l,
                                            fy: c
                                        }), f
                                    }
                                    s.gradient = function(t) {
                                        return function(t, n) {
                                            var i, o = e("snap.util.grad.parse", null, n).firstDefined();
                                            if (!o) return null;
                                            o.params.unshift(t), i = "l" == o.type.toLowerCase() ? l.apply(0, o.params) : c.apply(0, o.params), o.type != o.type.toLowerCase() && r(i.node, {
                                                gradientUnits: "userSpaceOnUse"
                                            });
                                            for (var a = o.stops, s = a.length, u = 0; u < s; u++) {
                                                var f = a[u];
                                                i.addStop(f.color, f.offset)
                                            }
                                            return i
                                        }(this.defs, t)
                                    }, s.gradientLinear = function(t, e, n, r) {
                                        return l(this.defs, t, e, n, r)
                                    }, s.gradientRadial = function(t, e, n, r, i) {
                                        return c(this.defs, t, e, n, r, i)
                                    }, s.toString = function() {
                                        var t, e = this.node.ownerDocument,
                                            r = e.createDocumentFragment(),
                                            i = e.createElement("div"),
                                            o = this.node.cloneNode(!0);
                                        return r.appendChild(i), i.appendChild(o), n._.$(o, {
                                            xmlns: "http://www.w3.org/2000/svg"
                                        }), t = i.innerHTML, r.removeChild(r.firstChild), t
                                    }, s.toDataURL = function() {
                                        if (t && t.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
                                    }, s.clear = function() {
                                        for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({
                                            node: e
                                        }), e = t
                                    }
                                }()
                        })), r.plugin((function(t, e, n, r) {
                            var i = e.prototype,
                                o = t.is,
                                a = t._.clone,
                                s = /,?([a-z]),?/gi,
                                u = parseFloat,
                                l = Math,
                                c = l.PI,
                                f = l.min,
                                h = l.max,
                                d = l.pow,
                                p = l.abs;

                            function g(t) {
                                var e = g.ps = g.ps || {};
                                return e[t] ? e[t].sleep = 100 : e[t] = {
                                    sleep: 100
                                }, setTimeout((function() {
                                    for (var n in e) e.hasOwnProperty(n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
                                })), e[t]
                            }

                            function v(t, e, n, r) {
                                return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                                    x: t,
                                    y: e,
                                    width: n,
                                    w: n,
                                    height: r,
                                    h: r,
                                    x2: t + n,
                                    y2: e + r,
                                    cx: t + n / 2,
                                    cy: e + r / 2,
                                    r1: l.min(n, r) / 2,
                                    r2: l.max(n, r) / 2,
                                    r0: l.sqrt(n * n + r * r) / 2,
                                    path: M(t, e, n, r),
                                    vb: [t, e, n, r].join(" ")
                                }
                            }

                            function y() {
                                return this.join(",").replace(s, "$1")
                            }

                            function m(t) {
                                var e = a(t);
                                return e.toString = y, e
                            }

                            function x(t, e, n, r, i, o, a, s, u) {
                                return null == u ? _(t, e, n, r, i, o, a, s) : A(t, e, n, r, i, o, a, s, function(t, e, n, r, i, o, a, s, u) {
                                    if (!(u < 0 || _(t, e, n, r, i, o, a, s) < u)) {
                                        var l, c = .5,
                                            f = 1 - c;
                                        for (l = _(t, e, n, r, i, o, a, s, f); p(l - u) > .01;) l = _(t, e, n, r, i, o, a, s, f += (l < u ? 1 : -1) * (c /= 2));
                                        return f
                                    }
                                }(t, e, n, r, i, o, a, s, u))
                            }

                            function b(n, r) {
                                function i(t) {
                                    return +(+t).toFixed(3)
                                }
                                return t._.cacher((function(t, o, a) {
                                    t instanceof e && (t = t.attr("d"));
                                    for (var s, u, l, c, f, h = "", d = {}, p = 0, g = 0, v = (t = I(t)).length; g < v; g++) {
                                        if ("M" == (l = t[g])[0]) s = +l[1], u = +l[2];
                                        else {
                                            if (p + (c = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6])) > o) {
                                                if (r && !d.start) {
                                                    if (h += ["C" + i((f = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6], o - p)).start.x), i(f.start.y), i(f.m.x), i(f.m.y), i(f.x), i(f.y)], a) return h;
                                                    d.start = h, h = ["M" + i(f.x), i(f.y) + "C" + i(f.n.x), i(f.n.y), i(f.end.x), i(f.end.y), i(l[5]), i(l[6])].join(), p += c, s = +l[5], u = +l[6];
                                                    continue
                                                }
                                                if (!n && !r) return f = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6], o - p)
                                            }
                                            p += c, s = +l[5], u = +l[6]
                                        }
                                        h += l.shift() + l
                                    }
                                    return d.end = h, f = n ? p : r ? d : A(s, u, l[0], l[1], l[2], l[3], l[4], l[5], 1)
                                }), null, t._.clone)
                            }
                            var w = b(1),
                                F = b(),
                                C = b(0, 1);

                            function A(t, e, n, r, i, o, a, s, u) {
                                var f = 1 - u,
                                    h = d(f, 3),
                                    p = d(f, 2),
                                    g = u * u,
                                    v = g * u,
                                    y = t + 2 * u * (n - t) + g * (i - 2 * n + t),
                                    m = e + 2 * u * (r - e) + g * (o - 2 * r + e),
                                    x = n + 2 * u * (i - n) + g * (a - 2 * i + n),
                                    b = r + 2 * u * (o - r) + g * (s - 2 * o + r);
                                return {
                                    x: h * t + 3 * p * u * n + 3 * f * u * u * i + v * a,
                                    y: h * e + 3 * p * u * r + 3 * f * u * u * o + v * s,
                                    m: {
                                        x: y,
                                        y: m
                                    },
                                    n: {
                                        x: x,
                                        y: b
                                    },
                                    start: {
                                        x: f * t + u * n,
                                        y: f * e + u * r
                                    },
                                    end: {
                                        x: f * i + u * a,
                                        y: f * o + u * s
                                    },
                                    alpha: 90 - 180 * l.atan2(y - x, m - b) / c
                                }
                            }

                            function E(e, n, r, i, o, a, s, u) {
                                t.is(e, "array") || (e = [e, n, r, i, o, a, s, u]);
                                var l = z.apply(null, e);
                                return v(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
                            }

                            function S(t, e, n) {
                                return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
                            }

                            function k(t, e) {
                                return t = v(t), S(e = v(e), t.x, t.y) || S(e, t.x2, t.y) || S(e, t.x, t.y2) || S(e, t.x2, t.y2) || S(t, e.x, e.y) || S(t, e.x2, e.y) || S(t, e.x, e.y2) || S(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
                            }

                            function B(t, e, n, r, i) {
                                return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                            }

                            function _(t, e, n, r, i, o, a, s, u) {
                                null == u && (u = 1);
                                for (var c = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) {
                                    var g = c * f[p] + c,
                                        v = B(g, t, n, i, a),
                                        y = B(g, e, r, o, s),
                                        m = v * v + y * y;
                                    d += h[p] * l.sqrt(m)
                                }
                                return c * d
                            }

                            function T(t, e, n, r, i, o, a, s) {
                                if (!(h(t, n) < f(i, a) || f(t, n) > h(i, a) || h(e, r) < f(o, s) || f(e, r) > h(o, s))) {
                                    var u = (t - n) * (o - s) - (e - r) * (i - a);
                                    if (u) {
                                        var l = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / u,
                                            c = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / u,
                                            d = +l.toFixed(2),
                                            p = +c.toFixed(2);
                                        if (!(d < +f(t, n).toFixed(2) || d > +h(t, n).toFixed(2) || d < +f(i, a).toFixed(2) || d > +h(i, a).toFixed(2) || p < +f(e, r).toFixed(2) || p > +h(e, r).toFixed(2) || p < +f(o, s).toFixed(2) || p > +h(o, s).toFixed(2))) return {
                                            x: l,
                                            y: c
                                        }
                                    }
                                }
                            }

                            function D(t, e, n) {
                                if (!k(E(t), E(e))) return n ? 0 : [];
                                for (var r = ~~(_.apply(0, t) / 8), i = ~~(_.apply(0, e) / 8), o = [], a = [], s = {}, u = n ? 0 : [], l = 0; l < r + 1; l++) {
                                    var c = A.apply(0, t.concat(l / r));
                                    o.push({
                                        x: c.x,
                                        y: c.y,
                                        t: l / r
                                    })
                                }
                                for (l = 0; l < i + 1; l++) c = A.apply(0, e.concat(l / i)), a.push({
                                    x: c.x,
                                    y: c.y,
                                    t: l / i
                                });
                                for (l = 0; l < r; l++)
                                    for (var f = 0; f < i; f++) {
                                        var h = o[l],
                                            d = o[l + 1],
                                            g = a[f],
                                            v = a[f + 1],
                                            y = p(d.x - h.x) < .001 ? "y" : "x",
                                            m = p(v.x - g.x) < .001 ? "y" : "x",
                                            x = T(h.x, h.y, d.x, d.y, g.x, g.y, v.x, v.y);
                                        if (x) {
                                            if (s[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                                            s[x.x.toFixed(4)] = x.y.toFixed(4);
                                            var b = h.t + p((x[y] - h[y]) / (d[y] - h[y])) * (d.t - h.t),
                                                w = g.t + p((x[m] - g[m]) / (v[m] - g[m])) * (v.t - g.t);
                                            b >= 0 && b <= 1 && w >= 0 && w <= 1 && (n ? u++ : u.push({
                                                x: x.x,
                                                y: x.y,
                                                t1: b,
                                                t2: w
                                            }))
                                        }
                                    }
                                return u
                            }

                            function L(t, e, n) {
                                t = I(t), e = I(e);
                                for (var r, i, o, a, s, u, l, c, f, h, d = n ? 0 : [], p = 0, g = t.length; p < g; p++) {
                                    var v = t[p];
                                    if ("M" == v[0]) r = s = v[1], i = u = v[2];
                                    else {
                                        "C" == v[0] ? (f = [r, i].concat(v.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                                        for (var y = 0, m = e.length; y < m; y++) {
                                            var x = e[y];
                                            if ("M" == x[0]) o = l = x[1], a = c = x[2];
                                            else {
                                                "C" == x[0] ? (h = [o, a].concat(x.slice(1)), o = h[6], a = h[7]) : (h = [o, a, o, a, l, c, l, c], o = l, a = c);
                                                var b = D(f, h, n);
                                                if (n) d += b;
                                                else {
                                                    for (var w = 0, F = b.length; w < F; w++) b[w].segment1 = p, b[w].segment2 = y, b[w].bez1 = f, b[w].bez2 = h;
                                                    d = d.concat(b)
                                                }
                                            }
                                        }
                                    }
                                }
                                return d
                            }

                            function N(t) {
                                var e = g(t);
                                if (e.bbox) return a(e.bbox);
                                if (!t) return v();
                                for (var n, r = 0, i = 0, o = [], s = [], u = 0, l = (t = I(t)).length; u < l; u++)
                                    if ("M" == (n = t[u])[0]) r = n[1], i = n[2], o.push(r), s.push(i);
                                    else {
                                        var c = z(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
                                        o = o.concat(c.min.x, c.max.x), s = s.concat(c.min.y, c.max.y), r = n[5], i = n[6]
                                    } var d = f.apply(0, o),
                                    p = f.apply(0, s),
                                    y = v(d, p, h.apply(0, o) - d, h.apply(0, s) - p);
                                return e.bbox = a(y), y
                            }

                            function M(t, e, n, r, i) {
                                if (i) return [
                                    ["M", +t + +i, e],
                                    ["l", n - 2 * i, 0],
                                    ["a", i, i, 0, 0, 1, i, i],
                                    ["l", 0, r - 2 * i],
                                    ["a", i, i, 0, 0, 1, -i, i],
                                    ["l", 2 * i - n, 0],
                                    ["a", i, i, 0, 0, 1, -i, -i],
                                    ["l", 0, 2 * i - r],
                                    ["a", i, i, 0, 0, 1, i, -i],
                                    ["z"]
                                ];
                                var o = [
                                    ["M", t, e],
                                    ["l", n, 0],
                                    ["l", 0, r],
                                    ["l", -n, 0],
                                    ["z"]
                                ];
                                return o.toString = y, o
                            }

                            function j(t, e, n, r, i) {
                                if (null == i && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != i) var o = Math.PI / 180,
                                    a = t + n * Math.cos(-r * o),
                                    s = t + n * Math.cos(-i * o),
                                    u = [
                                        ["M", a, e + n * Math.sin(-r * o)],
                                        ["A", n, n, 0, +(i - r > 180), 0, s, e + n * Math.sin(-i * o)]
                                    ];
                                else u = [
                                    ["M", t, e],
                                    ["m", 0, -r],
                                    ["a", n, r, 0, 1, 1, 0, 2 * r],
                                    ["a", n, r, 0, 1, 1, 0, -2 * r],
                                    ["z"]
                                ];
                                return u.toString = y, u
                            }
                            var P = t._unit2px,
                                O = {
                                    path: function(t) {
                                        return t.attr("path")
                                    },
                                    circle: function(t) {
                                        var e = P(t);
                                        return j(e.cx, e.cy, e.r)
                                    },
                                    ellipse: function(t) {
                                        var e = P(t);
                                        return j(e.cx || 0, e.cy || 0, e.rx, e.ry)
                                    },
                                    rect: function(t) {
                                        var e = P(t);
                                        return M(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                                    },
                                    image: function(t) {
                                        var e = P(t);
                                        return M(e.x || 0, e.y || 0, e.width, e.height)
                                    },
                                    line: function(t) {
                                        return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                                    },
                                    polyline: function(t) {
                                        return "M" + t.attr("points")
                                    },
                                    polygon: function(t) {
                                        return "M" + t.attr("points") + "z"
                                    },
                                    deflt: function(t) {
                                        var e = t.node.getBBox();
                                        return M(e.x, e.y, e.width, e.height)
                                    }
                                };

                            function q(e) {
                                var n = g(e);
                                if (n.abs) return m(n.abs);
                                if (o(e, "array") && o(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                                    ["M", 0, 0]
                                ];
                                var r, i = [],
                                    a = 0,
                                    s = 0,
                                    u = 0,
                                    l = 0,
                                    c = 0;
                                "M" == e[0][0] && (u = a = +e[0][1], l = s = +e[0][2], c++, i[0] = ["M", a, s]);
                                for (var f, h, d = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), p = c, v = e.length; p < v; p++) {
                                    if (i.push(f = []), (r = (h = e[p])[0]) != r.toUpperCase()) switch (f[0] = r.toUpperCase(), f[0]) {
                                            case "A":
                                                f[1] = h[1], f[2] = h[2], f[3] = h[3], f[4] = h[4], f[5] = h[5], f[6] = +h[6] + a, f[7] = +h[7] + s;
                                                break;
                                            case "V":
                                                f[1] = +h[1] + s;
                                                break;
                                            case "H":
                                                f[1] = +h[1] + a;
                                                break;
                                            case "R":
                                                for (var x = [a, s].concat(h.slice(1)), b = 2, w = x.length; b < w; b++) x[b] = +x[b] + a, x[++b] = +x[b] + s;
                                                i.pop(), i = i.concat($(x, d));
                                                break;
                                            case "O":
                                                i.pop(), (x = j(a, s, h[1], h[2])).push(x[0]), i = i.concat(x);
                                                break;
                                            case "U":
                                                i.pop(), i = i.concat(j(a, s, h[1], h[2], h[3])), f = ["U"].concat(i[i.length - 1].slice(-2));
                                                break;
                                            case "M":
                                                u = +h[1] + a, l = +h[2] + s;
                                            default:
                                                for (b = 1, w = h.length; b < w; b++) f[b] = +h[b] + (b % 2 ? a : s)
                                        } else if ("R" == r) x = [a, s].concat(h.slice(1)), i.pop(), i = i.concat($(x, d)), f = ["R"].concat(h.slice(-2));
                                        else if ("O" == r) i.pop(), (x = j(a, s, h[1], h[2])).push(x[0]), i = i.concat(x);
                                    else if ("U" == r) i.pop(), i = i.concat(j(a, s, h[1], h[2], h[3])), f = ["U"].concat(i[i.length - 1].slice(-2));
                                    else
                                        for (var F = 0, C = h.length; F < C; F++) f[F] = h[F];
                                    if ("O" != (r = r.toUpperCase())) switch (f[0]) {
                                        case "Z":
                                            a = +u, s = +l;
                                            break;
                                        case "H":
                                            a = f[1];
                                            break;
                                        case "V":
                                            s = f[1];
                                            break;
                                        case "M":
                                            u = f[f.length - 2], l = f[f.length - 1];
                                        default:
                                            a = f[f.length - 2], s = f[f.length - 1]
                                    }
                                }
                                return i.toString = y, n.abs = m(i), i
                            }

                            function G(t, e, n, r) {
                                return [t, e, n, r, n, r]
                            }

                            function V(t, e, n, r, i, o) {
                                return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
                            }

                            function R(e, n, r, i, o, a, s, u, f, h) {
                                var d, g = 120 * c / 180,
                                    v = c / 180 * (+o || 0),
                                    y = [],
                                    m = t._.cacher((function(t, e, n) {
                                        return {
                                            x: t * l.cos(n) - e * l.sin(n),
                                            y: t * l.sin(n) + e * l.cos(n)
                                        }
                                    }));
                                if (!r || !i) return [e, n, u, f, u, f];
                                if (h) k = h[0], B = h[1], E = h[2], S = h[3];
                                else {
                                    e = (d = m(e, n, -v)).x, n = d.y, u = (d = m(u, f, -v)).x, f = d.y, l.cos(c / 180 * o), l.sin(c / 180 * o);
                                    var x = (e - u) / 2,
                                        b = (n - f) / 2,
                                        w = x * x / (r * r) + b * b / (i * i);
                                    w > 1 && (r *= w = l.sqrt(w), i *= w);
                                    var F = r * r,
                                        C = i * i,
                                        A = (a == s ? -1 : 1) * l.sqrt(p((F * C - F * b * b - C * x * x) / (F * b * b + C * x * x))),
                                        E = A * r * b / i + (e + u) / 2,
                                        S = A * -i * x / r + (n + f) / 2,
                                        k = l.asin(((n - S) / i).toFixed(9)),
                                        B = l.asin(((f - S) / i).toFixed(9));
                                    (k = e < E ? c - k : k) < 0 && (k = 2 * c + k), (B = u < E ? c - B : B) < 0 && (B = 2 * c + B), s && k > B && (k -= 2 * c), !s && B > k && (B -= 2 * c)
                                }
                                var _ = B - k;
                                if (p(_) > g) {
                                    var T = B,
                                        D = u,
                                        L = f;
                                    B = k + g * (s && B > k ? 1 : -1), y = R(u = E + r * l.cos(B), f = S + i * l.sin(B), r, i, o, 0, s, D, L, [B, T, E, S])
                                }
                                _ = B - k;
                                var N = l.cos(k),
                                    M = l.sin(k),
                                    j = l.cos(B),
                                    P = l.sin(B),
                                    O = l.tan(_ / 4),
                                    q = 4 / 3 * r * O,
                                    G = 4 / 3 * i * O,
                                    V = [e, n],
                                    z = [e + q * M, n - G * N],
                                    I = [u + q * P, f - G * j],
                                    $ = [u, f];
                                if (z[0] = 2 * V[0] - z[0], z[1] = 2 * V[1] - z[1], h) return [z, I, $].concat(y);
                                for (var U = [], X = 0, Y = (y = [z, I, $].concat(y).join().split(",")).length; X < Y; X++) U[X] = X % 2 ? m(y[X - 1], y[X], v).y : m(y[X], y[X + 1], v).x;
                                return U
                            }

                            function z(t, e, n, r, i, o, a, s) {
                                for (var u, c, d, g, v, y, m, x, b = [], w = [
                                        [],
                                        []
                                    ], F = 0; F < 2; ++F)
                                    if (0 == F ? (c = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * a, d = 3 * n - 3 * t) : (c = 6 * e - 12 * r + 6 * o, u = -3 * e + 9 * r - 9 * o + 3 * s, d = 3 * r - 3 * e), p(u) < 1e-12) {
                                        if (p(c) < 1e-12) continue;
                                        0 < (g = -d / c) && g < 1 && b.push(g)
                                    } else m = c * c - 4 * d * u, x = l.sqrt(m), m < 0 || (0 < (v = (-c + x) / (2 * u)) && v < 1 && b.push(v), 0 < (y = (-c - x) / (2 * u)) && y < 1 && b.push(y));
                                for (var C, A = b.length, E = A; A--;) C = 1 - (g = b[A]), w[0][A] = C * C * C * t + 3 * C * C * g * n + 3 * C * g * g * i + g * g * g * a, w[1][A] = C * C * C * e + 3 * C * C * g * r + 3 * C * g * g * o + g * g * g * s;
                                return w[0][E] = t, w[1][E] = e, w[0][E + 1] = a, w[1][E + 1] = s, w[0].length = w[1].length = E + 2, {
                                    min: {
                                        x: f.apply(0, w[0]),
                                        y: f.apply(0, w[1])
                                    },
                                    max: {
                                        x: h.apply(0, w[0]),
                                        y: h.apply(0, w[1])
                                    }
                                }
                            }

                            function I(t, e) {
                                var n = !e && g(t);
                                if (!e && n.curve) return m(n.curve);
                                for (var r = q(t), i = e && q(e), o = {
                                        x: 0,
                                        y: 0,
                                        bx: 0,
                                        by: 0,
                                        X: 0,
                                        Y: 0,
                                        qx: null,
                                        qy: null
                                    }, a = {
                                        x: 0,
                                        y: 0,
                                        bx: 0,
                                        by: 0,
                                        X: 0,
                                        Y: 0,
                                        qx: null,
                                        qy: null
                                    }, s = function(t, e, n) {
                                        var r, i;
                                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                                        switch (!(t[0] in {
                                            T: 1,
                                            Q: 1
                                        }) && (e.qx = e.qy = null), t[0]) {
                                            case "M":
                                                e.X = t[1], e.Y = t[2];
                                                break;
                                            case "A":
                                                t = ["C"].concat(R.apply(0, [e.x, e.y].concat(t.slice(1))));
                                                break;
                                            case "S":
                                                "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                                                break;
                                            case "T":
                                                "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(V(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                                break;
                                            case "Q":
                                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(V(e.x, e.y, t[1], t[2], t[3], t[4]));
                                                break;
                                            case "L":
                                                t = ["C"].concat(G(e.x, e.y, t[1], t[2]));
                                                break;
                                            case "H":
                                                t = ["C"].concat(G(e.x, e.y, t[1], e.y));
                                                break;
                                            case "V":
                                                t = ["C"].concat(G(e.x, e.y, e.x, t[1]));
                                                break;
                                            case "Z":
                                                t = ["C"].concat(G(e.x, e.y, e.X, e.Y))
                                        }
                                        return t
                                    }, l = function(t, e) {
                                        if (t[e].length > 7) {
                                            t[e].shift();
                                            for (var n = t[e]; n.length;) f[e] = "A", i && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                                            t.splice(e, 1), x = h(r.length, i && i.length || 0)
                                        }
                                    }, c = function(t, e, n, o, a) {
                                        t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], x = h(r.length, i && i.length || 0))
                                    }, f = [], d = [], p = "", v = "", y = 0, x = h(r.length, i && i.length || 0); y < x; y++) {
                                    r[y] && (p = r[y][0]), "C" != p && (f[y] = p, y && (v = f[y - 1])), r[y] = s(r[y], o, v), "A" != f[y] && "C" == p && (f[y] = "C"), l(r, y), i && (i[y] && (p = i[y][0]), "C" != p && (d[y] = p, y && (v = d[y - 1])), i[y] = s(i[y], a, v), "A" != d[y] && "C" == p && (d[y] = "C"), l(i, y)), c(r, i, o, a, y), c(i, r, a, o, y);
                                    var b = r[y],
                                        w = i && i[y],
                                        F = b.length,
                                        C = i && w.length;
                                    o.x = b[F - 2], o.y = b[F - 1], o.bx = u(b[F - 4]) || o.x, o.by = u(b[F - 3]) || o.y, a.bx = i && (u(w[C - 4]) || a.x), a.by = i && (u(w[C - 3]) || a.y), a.x = i && w[C - 2], a.y = i && w[C - 1]
                                }
                                return i || (n.curve = m(r)), i ? [r, i] : r
                            }

                            function $(t, e) {
                                for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                                    var o = [{
                                        x: +t[r - 2],
                                        y: +t[r - 1]
                                    }, {
                                        x: +t[r],
                                        y: +t[r + 1]
                                    }, {
                                        x: +t[r + 2],
                                        y: +t[r + 3]
                                    }, {
                                        x: +t[r + 4],
                                        y: +t[r + 5]
                                    }];
                                    e ? r ? i - 4 == r ? o[3] = {
                                        x: +t[0],
                                        y: +t[1]
                                    } : i - 2 == r && (o[2] = {
                                        x: +t[0],
                                        y: +t[1]
                                    }, o[3] = {
                                        x: +t[2],
                                        y: +t[3]
                                    }) : o[0] = {
                                        x: +t[i - 2],
                                        y: +t[i - 1]
                                    } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                                        x: +t[r],
                                        y: +t[r + 1]
                                    }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                                }
                                return n
                            }
                            t.path = g, t.path.getTotalLength = w, t.path.getPointAtLength = F, t.path.getSubpath = function(t, e, n) {
                                if (this.getTotalLength(t) - n < 1e-6) return C(t, e).end;
                                var r = C(t, n, 1);
                                return e ? C(r, e).end : r
                            }, i.getTotalLength = function() {
                                if (this.node.getTotalLength) return this.node.getTotalLength()
                            }, i.getPointAtLength = function(t) {
                                return F(this.attr("d"), t)
                            }, i.getSubpath = function(e, n) {
                                return t.path.getSubpath(this.attr("d"), e, n)
                            }, t._.box = v, t.path.findDotsAtSegment = A, t.path.bezierBBox = E, t.path.isPointInsideBBox = S, t.closest = function(e, n, r, i) {
                                for (var o = 100, a = v(e - o / 2, n - o / 2, o, o), s = [], u = r[0].hasOwnProperty("x") ? function(t) {
                                        return {
                                            x: r[t].x,
                                            y: r[t].y
                                        }
                                    } : function(t) {
                                        return {
                                            x: r[t],
                                            y: i[t]
                                        }
                                    }, l = 0; o <= 1e6 && !l;) {
                                    for (var c = 0, f = r.length; c < f; c++) {
                                        var h = u(c);
                                        if (S(a, h.x, h.y)) {
                                            l++, s.push(h);
                                            break
                                        }
                                    }
                                    l || (a = v(e - (o *= 2) / 2, n - o / 2, o, o))
                                }
                                if (1e6 != o) {
                                    var d, p = 1 / 0;
                                    for (c = 0, f = s.length; c < f; c++) {
                                        var g = t.len(e, n, s[c].x, s[c].y);
                                        p > g && (p = g, s[c].len = g, d = s[c])
                                    }
                                    return d
                                }
                            }, t.path.isBBoxIntersect = k, t.path.intersection = function(t, e) {
                                return L(t, e)
                            }, t.path.intersectionNumber = function(t, e) {
                                return L(t, e, 1)
                            }, t.path.isPointInside = function(t, e, n) {
                                var r = N(t);
                                return S(r, e, n) && L(t, [
                                    ["M", e, n],
                                    ["H", r.x2 + 10]
                                ], 1) % 2 == 1
                            }, t.path.getBBox = N, t.path.get = O, t.path.toRelative = function(e) {
                                var n = g(e),
                                    r = String.prototype.toLowerCase;
                                if (n.rel) return m(n.rel);
                                t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
                                var i = [],
                                    o = 0,
                                    a = 0,
                                    s = 0,
                                    u = 0,
                                    l = 0;
                                "M" == e[0][0] && (s = o = e[0][1], u = a = e[0][2], l++, i.push(["M", o, a]));
                                for (var c = l, f = e.length; c < f; c++) {
                                    var h = i[c] = [],
                                        d = e[c];
                                    if (d[0] != r.call(d[0])) switch (h[0] = r.call(d[0]), h[0]) {
                                        case "a":
                                            h[1] = d[1], h[2] = d[2], h[3] = d[3], h[4] = d[4], h[5] = d[5], h[6] = +(d[6] - o).toFixed(3), h[7] = +(d[7] - a).toFixed(3);
                                            break;
                                        case "v":
                                            h[1] = +(d[1] - a).toFixed(3);
                                            break;
                                        case "m":
                                            s = d[1], u = d[2];
                                        default:
                                            for (var p = 1, v = d.length; p < v; p++) h[p] = +(d[p] - (p % 2 ? o : a)).toFixed(3)
                                    } else {
                                        h = i[c] = [], "m" == d[0] && (s = d[1] + o, u = d[2] + a);
                                        for (var x = 0, b = d.length; x < b; x++) i[c][x] = d[x]
                                    }
                                    var w = i[c].length;
                                    switch (i[c][0]) {
                                        case "z":
                                            o = s, a = u;
                                            break;
                                        case "h":
                                            o += +i[c][w - 1];
                                            break;
                                        case "v":
                                            a += +i[c][w - 1];
                                            break;
                                        default:
                                            o += +i[c][w - 2], a += +i[c][w - 1]
                                    }
                                }
                                return i.toString = y, n.rel = m(i), i
                            }, t.path.toAbsolute = q, t.path.toCubic = I, t.path.map = function(t, e) {
                                if (!e) return t;
                                var n, r, i, o, a, s, u;
                                for (i = 0, a = (t = I(t)).length; i < a; i++)
                                    for (o = 1, s = (u = t[i]).length; o < s; o += 2) n = e.x(u[o], u[o + 1]), r = e.y(u[o], u[o + 1]), u[o] = n, u[o + 1] = r;
                                return t
                            }, t.path.toString = y, t.path.clone = m
                        })), r.plugin((function(t, r, i, o) {
                            var a = Math.max,
                                s = Math.min,
                                u = function(t) {
                                    if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                                        for (var e = 0, n = t.length; e < n; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                                },
                                l = u.prototype;
                            l.push = function() {
                                for (var t, e, n = 0, r = arguments.length; n < r; n++)(t = arguments[n]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
                                return this
                            }, l.pop = function() {
                                return this.length && delete this[this.length--], this.items.pop()
                            }, l.forEach = function(t, e) {
                                for (var n = 0, r = this.items.length; n < r; n++)
                                    if (!1 === t.call(e, this.items[n], n)) return this;
                                return this
                            }, l.animate = function(r, i, o, a) {
                                "function" != typeof o || o.length || (a = o, o = n.linear), r instanceof t._.Animation && (a = r.callback, o = r.easing, i = o.dur, r = r.attr);
                                var s = arguments;
                                if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var u = !0;
                                var l, c = function() {
                                        l ? this.b = l : l = this.b
                                    },
                                    f = 0,
                                    h = this,
                                    d = a && function() {
                                        ++f == h.length && a.call(this)
                                    };
                                return this.forEach((function(t, n) {
                                    e.once("snap.animcreated." + t.id, c), u ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, d)
                                }))
                            }, l.remove = function() {
                                for (; this.length;) this.pop().remove();
                                return this
                            }, l.bind = function(t, e, n) {
                                var r = {};
                                if ("function" == typeof e) this.bindings[t] = e;
                                else {
                                    var i = n || t;
                                    this.bindings[t] = function(t) {
                                        r[i] = t, e.attr(r)
                                    }
                                }
                                return this
                            }, l.attr = function(t) {
                                var e = {};
                                for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
                                for (var r = 0, i = this.items.length; r < i; r++) this.items[r].attr(e);
                                return this
                            }, l.clear = function() {
                                for (; this.length;) this.pop()
                            }, l.splice = function(t, e, n) {
                                t = t < 0 ? a(this.length + t, 0) : t, e = a(0, s(this.length - t, e));
                                var r, i = [],
                                    o = [],
                                    l = [];
                                for (r = 2; r < arguments.length; r++) l.push(arguments[r]);
                                for (r = 0; r < e; r++) o.push(this[t + r]);
                                for (; r < this.length - t; r++) i.push(this[t + r]);
                                var c = l.length;
                                for (r = 0; r < c + i.length; r++) this.items[t + r] = this[t + r] = r < c ? l[r] : i[r - c];
                                for (r = this.items.length = this.length -= e - c; this[r];) delete this[r++];
                                return new u(o)
                            }, l.exclude = function(t) {
                                for (var e = 0, n = this.length; e < n; e++)
                                    if (this[e] == t) return this.splice(e, 1), !0;
                                return !1
                            }, l.insertAfter = function(t) {
                                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                                return this
                            }, l.getBBox = function() {
                                for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
                                    if (!this.items[i].removed) {
                                        var o = this.items[i].getBBox();
                                        t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
                                    } return {
                                    x: t = s.apply(0, t),
                                    y: e = s.apply(0, e),
                                    x2: n = a.apply(0, n),
                                    y2: r = a.apply(0, r),
                                    width: n - t,
                                    height: r - e,
                                    cx: t + (n - t) / 2,
                                    cy: e + (r - e) / 2
                                }
                            }, l.clone = function(t) {
                                t = new u;
                                for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
                                return t
                            }, l.toString = function() {
                                return "Snap‘s set"
                            }, l.type = "set", t.Set = u, t.set = function() {
                                var t = new u;
                                return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
                            }
                        })), r.plugin((function(t, n, r, i) {
                            var o = {},
                                a = /[%a-z]+$/i,
                                s = String;

                            function u(t) {
                                var e = t[0];
                                switch (e.toLowerCase()) {
                                    case "t":
                                        return [e, 0, 0];
                                    case "m":
                                        return [e, 1, 0, 0, 1, 0, 0];
                                    case "r":
                                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                                    case "s":
                                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                                }
                            }

                            function l(t) {
                                return t
                            }

                            function c(t) {
                                return t.join(" ")
                            }

                            function f(e) {
                                return t.rgb(e[0], e[1], e[2], e[3])
                            }

                            function h(t) {
                                var e, n, r, i, o, a, s = 0,
                                    u = [];
                                for (e = 0, n = t.length; e < n; e++) {
                                    for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; r < i; r++) a[r] = "val[" + s++ + "]";
                                    o += a + "]", u[e] = o
                                }
                                return Function("val", "return Snap.path.toString.call([" + u + "])")
                            }

                            function d(t) {
                                for (var e = [], n = 0, r = t.length; n < r; n++)
                                    for (var i = 1, o = t[n].length; i < o; i++) e.push(t[n][i]);
                                return e
                            }

                            function p(t) {
                                return isFinite(t)
                            }
                            o.stroke = o.fill = "colour", n.prototype.equal = function(t, n) {
                                return e("snap.util.equal", this, t, n).firstDefined()
                            }, e.on("snap.util.equal", (function(e, n) {
                                var r, i, g = s(this.attr(e) || ""),
                                    v = this;
                                if ("colour" == o[e]) return r = t.color(g), i = t.color(n), {
                                    from: [r.r, r.g, r.b, r.opacity],
                                    to: [i.r, i.g, i.b, i.opacity],
                                    f: f
                                };
                                if ("viewBox" == e) return {
                                    from: r = this.attr(e).vb.split(" ").map(Number),
                                    to: i = n.split(" ").map(Number),
                                    f: c
                                };
                                if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof n && (n = s(n).replace(/\.{3}|\u2026/g, g)),
                                    function(e, n, r) {
                                        e = e || new t.Matrix, n = n || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], n = t.parseTransformString(n.toTransformString()) || [];
                                        for (var i, o, a, s, l = Math.max(e.length, n.length), c = [], f = [], p = 0; p < l; p++) {
                                            if (a = e[p] || u(n[p]), s = n[p] || u(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) {
                                                e = t._.transform2matrix(e, r()), n = t._.transform2matrix(n, r()), c = [
                                                    ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                                                ], f = [
                                                    ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                                                ];
                                                break
                                            }
                                            for (c[p] = [], f[p] = [], i = 0, o = Math.max(a.length, s.length); i < o; i++) i in a && (c[p][i] = a[i]), i in s && (f[p][i] = s[i])
                                        }
                                        return {
                                            from: d(c),
                                            to: d(f),
                                            f: h(c)
                                        }
                                    }(g = this.matrix, n = t._.rgTransform.test(n) ? t._.transform2matrix(n, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(n), this.getBBox()), (function() {
                                        return v.getBBox(1)
                                    }));
                                if ("d" == e || "path" == e) return {
                                    from: d((r = t.path.toCubic(g, n))[0]),
                                    to: d(r[1]),
                                    f: h(r[0])
                                };
                                if ("points" == e) return {
                                    from: r = s(g).split(t._.separator),
                                    to: i = s(n).split(t._.separator),
                                    f: function(t) {
                                        return t
                                    }
                                };
                                if (p(g) && p(n)) return {
                                    from: parseFloat(g),
                                    to: parseFloat(n),
                                    f: l
                                };
                                var y, m, x, b = g.match(a),
                                    w = s(n).match(a);
                                return b && (m = b, x = w, t.is(m, "array") && t.is(x, "array") && m.toString() == x.toString()) ? {
                                    from: parseFloat(g),
                                    to: parseFloat(n),
                                    f: (y = b, function(t) {
                                        return +t.toFixed(3) + y
                                    })
                                } : {
                                    from: this.asPX(e),
                                    to: this.asPX(e, n),
                                    f: l
                                }
                            }))
                        })), r.plugin((function(t, n, r, i) {
                            for (var o = n.prototype, a = ("createTouch" in i.doc), s = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
                                    mousedown: "touchstart",
                                    mousemove: "touchmove",
                                    mouseup: "touchend"
                                }, l = function(t, e) {
                                    var n = "y" == t ? "scrollTop" : "scrollLeft",
                                        r = e && e.node ? e.node.ownerDocument : i.doc;
                                    return r[n in r.documentElement ? "documentElement" : "body"][n]
                                }, c = function() {
                                    return this.originalEvent.preventDefault()
                                }, f = function() {
                                    return this.originalEvent.stopPropagation()
                                }, h = function(t, e, n, r) {
                                    var i = a && u[e] ? u[e] : e,
                                        o = function(i) {
                                            var o = l("y", r),
                                                s = l("x", r);
                                            if (a && u.hasOwnProperty(e))
                                                for (var h = 0, d = i.targetTouches && i.targetTouches.length; h < d; h++)
                                                    if (i.targetTouches[h].target == t || t.contains(i.targetTouches[h].target)) {
                                                        var p = i;
                                                        (i = i.targetTouches[h]).originalEvent = p, i.preventDefault = c, i.stopPropagation = f;
                                                        break
                                                    } var g = i.clientX + s,
                                                v = i.clientY + o;
                                            return n.call(r, i, g, v)
                                        };
                                    return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1),
                                        function() {
                                            return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                                        }
                                }, d = [], p = function(t) {
                                    for (var n, r = t.clientX, i = t.clientY, o = l("y"), s = l("x"), u = d.length; u--;) {
                                        if (n = d[u], a) {
                                            for (var c, f = t.touches && t.touches.length; f--;)
                                                if ((c = t.touches[f]).identifier == n.el._drag.id || n.el.node.contains(c.target)) {
                                                    r = c.clientX, i = c.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                                    break
                                                }
                                        } else t.preventDefault();
                                        var h = n.el.node;
                                        h.nextSibling, h.parentNode, h.style.display, r += s, i += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
                                    }
                                }, g = function(n) {
                                    t.unmousemove(p).unmouseup(g);
                                    for (var r, i = d.length; i--;)(r = d[i]).el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n), e.off("snap.drag.*." + r.el.id);
                                    d = []
                                }, v = s.length; v--;) ! function(e) {
                                t[e] = o[e] = function(n, r) {
                                    if (t.is(n, "function")) this.events = this.events || [], this.events.push({
                                        name: e,
                                        f: n,
                                        unbind: h(this.node || document, e, n, r || this)
                                    });
                                    else
                                        for (var i = 0, o = this.events.length; i < o; i++)
                                            if (this.events[i].name == e) try {
                                                this.events[i].f.call(this)
                                            } catch (t) {}
                                    return this
                                }, t["un" + e] = o["un" + e] = function(t) {
                                    for (var n = this.events || [], r = n.length; r--;)
                                        if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                                    return this
                                }
                            }(s[v]);
                            o.hover = function(t, e, n, r) {
                                return this.mouseover(t, n).mouseout(e, r || n)
                            }, o.unhover = function(t, e) {
                                return this.unmouseover(t).unmouseout(e)
                            };
                            var y = [];
                            o.drag = function(n, r, i, o, a, s) {
                                var u, l = this;
                                if (!arguments.length) return l.drag((function(t, e) {
                                    this.attr({
                                        transform: u + (u ? "T" : "t") + [t, e]
                                    })
                                }), (function() {
                                    u = this.transform().local
                                }));

                                function c(u, c, f) {
                                    (u.originalEvent || u).preventDefault(), l._drag.x = c, l._drag.y = f, l._drag.id = u.identifier, !d.length && t.mousemove(p).mouseup(g), d.push({
                                        el: l,
                                        move_scope: o,
                                        start_scope: a,
                                        end_scope: s
                                    }), r && e.on("snap.drag.start." + l.id, r), n && e.on("snap.drag.move." + l.id, n), i && e.on("snap.drag.end." + l.id, i), e("snap.drag.start." + l.id, a || o || l, c, f, u)
                                }

                                function f(t, n, r) {
                                    e("snap.draginit." + l.id, l, t, n, r)
                                }
                                return e.on("snap.draginit." + l.id, c), l._drag = {}, y.push({
                                    el: l,
                                    start: c,
                                    init: f
                                }), l.mousedown(f), l
                            }, o.undrag = function() {
                                for (var n = y.length; n--;) y[n].el == this && (this.unmousedown(y[n].init), y.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
                                return !y.length && t.unmousemove(p).unmouseup(g), this
                            }
                        })), r.plugin((function(t, n, r, i) {
                            n.prototype;
                            var o = r.prototype,
                                a = /^\s*url\((.+)\)/,
                                s = String,
                                u = t._.$;
                            t.filter = {}, o.filter = function(e) {
                                var r = this;
                                "svg" != r.type && (r = r.paper);
                                var i = t.parse(s(e)),
                                    o = t._.id(),
                                    a = (r.node.offsetWidth, r.node.offsetHeight, u("filter"));
                                return u(a, {
                                    id: o,
                                    filterUnits: "userSpaceOnUse"
                                }), a.appendChild(i.node), r.defs.appendChild(a), new n(a)
                            }, e.on("snap.util.getattr.filter", (function() {
                                e.stop();
                                var n = u(this.node, "filter");
                                if (n) {
                                    var r = s(n).match(a);
                                    return r && t.select(r[1])
                                }
                            })), e.on("snap.util.attr.filter", (function(r) {
                                if (r instanceof n && "filter" == r.type) {
                                    e.stop();
                                    var i = r.node.id;
                                    i || (u(r.node, {
                                        id: r.id
                                    }), i = r.id), u(this.node, {
                                        filter: t.url(i)
                                    })
                                }
                                r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
                            })), t.filter.blur = function(e, n) {
                                null == e && (e = 2);
                                var r = null == n ? e : [e, n];
                                return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                                    def: r
                                })
                            }, t.filter.blur.toString = function() {
                                return this()
                            }, t.filter.shadow = function(e, n, r, i, o) {
                                return null == o && (null == i ? (o = r, r = 4, i = "#000") : (o = i, i = r, r = 4)), null == r && (r = 4), null == o && (o = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                                    color: i,
                                    dx: e,
                                    dy: n,
                                    blur: r,
                                    opacity: o
                                })
                            }, t.filter.shadow.toString = function() {
                                return this()
                            }, t.filter.grayscale = function(e) {
                                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                                    a: .2126 + .7874 * (1 - e),
                                    b: .7152 - .7152 * (1 - e),
                                    c: .0722 - .0722 * (1 - e),
                                    d: .2126 - .2126 * (1 - e),
                                    e: .7152 + .2848 * (1 - e),
                                    f: .0722 - .0722 * (1 - e),
                                    g: .2126 - .2126 * (1 - e),
                                    h: .0722 + .9278 * (1 - e)
                                })
                            }, t.filter.grayscale.toString = function() {
                                return this()
                            }, t.filter.sepia = function(e) {
                                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                                    a: .393 + .607 * (1 - e),
                                    b: .769 - .769 * (1 - e),
                                    c: .189 - .189 * (1 - e),
                                    d: .349 - .349 * (1 - e),
                                    e: .686 + .314 * (1 - e),
                                    f: .168 - .168 * (1 - e),
                                    g: .272 - .272 * (1 - e),
                                    h: .534 - .534 * (1 - e),
                                    i: .131 + .869 * (1 - e)
                                })
                            }, t.filter.sepia.toString = function() {
                                return this()
                            }, t.filter.saturate = function(e) {
                                return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                                    amount: 1 - e
                                })
                            }, t.filter.saturate.toString = function() {
                                return this()
                            }, t.filter.hueRotate = function(e) {
                                return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                                    angle: e
                                })
                            }, t.filter.hueRotate.toString = function() {
                                return this()
                            }, t.filter.invert = function(e) {
                                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                                    amount: e,
                                    amount2: 1 - e
                                })
                            }, t.filter.invert.toString = function() {
                                return this()
                            }, t.filter.brightness = function(e) {
                                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                                    amount: e
                                })
                            }, t.filter.brightness.toString = function() {
                                return this()
                            }, t.filter.contrast = function(e) {
                                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                                    amount: e,
                                    amount2: .5 - e / 2
                                })
                            }, t.filter.contrast.toString = function() {
                                return this()
                            }
                        })), r.plugin((function(t, e, n, r, i) {
                            var o = t._.box,
                                a = t.is,
                                s = /^[^a-z]*([tbmlrc])/i,
                                u = function() {
                                    return "T" + this.dx + "," + this.dy
                                };
                            e.prototype.getAlign = function(t, e) {
                                null == e && a(t, "string") && (e = t, t = null);
                                var n = (t = t || this.paper).getBBox ? t.getBBox() : o(t),
                                    r = this.getBBox(),
                                    i = {};
                                switch (e = (e = e && e.match(s)) ? e[1].toLowerCase() : "c") {
                                    case "t":
                                        i.dx = 0, i.dy = n.y - r.y;
                                        break;
                                    case "b":
                                        i.dx = 0, i.dy = n.y2 - r.y2;
                                        break;
                                    case "m":
                                        i.dx = 0, i.dy = n.cy - r.cy;
                                        break;
                                    case "l":
                                        i.dx = n.x - r.x, i.dy = 0;
                                        break;
                                    case "r":
                                        i.dx = n.x2 - r.x2, i.dy = 0;
                                        break;
                                    default:
                                        i.dx = n.cx - r.cx, i.dy = 0
                                }
                                return i.toString = u, i
                            }, e.prototype.align = function(t, e) {
                                return this.transform("..." + this.getAlign(t, e))
                            }
                        })), r.plugin((function(e, n, r, i) {
                            function o(t) {
                                t = t.split(/(?=#)/);
                                var e = new String(t[5]);
                                return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
                            }
                            e.mui = {}, e.flat = {}, e.mui.red = o("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = o("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = o("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = o("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = o("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = o("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = o("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = o("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = o("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = o("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = o("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = o("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = o("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = o("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = o("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = o("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = o("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = o("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = o("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() {
                                for (var n in e.mui) e.mui.hasOwnProperty(n) && (t[n] = e.mui[n])
                            }
                        })), r
                    }(y, t)
                }.apply(e, [r])) || (t.exports = i)
            }).call(window)
        },
        ls82: function(t, e, n) {
            var r = function(t) {
                "use strict";
                var e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n, r) {
                    var i = e && e.prototype instanceof c ? e : c,
                        o = Object.create(i.prototype),
                        a = new F(r || []);
                    return o._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === i) throw o;
                                return A()
                            }
                            for (n.method = i, n.arg = o;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = x(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), o
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var l = {};

                function c() {}

                function f() {}

                function h() {}
                var d = {};
                d[i] = function() {
                    return this
                };
                var p = Object.getPrototypeOf,
                    g = p && p(p(C([])));
                g && g !== e && n.call(g, i) && (d = g);
                var v = h.prototype = c.prototype = Object.create(d);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t)
                        }
                    }))
                }

                function m(t) {
                    var e;
                    this._invoke = function(r, i) {
                        function o() {
                            return new Promise((function(e, o) {
                                ! function e(r, i, o, a) {
                                    var s = u(t[r], t, i);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            c = l.value;
                                        return c && "object" == typeof c && n.call(c, "__await") ? Promise.resolve(c.__await).then((function(t) {
                                            e("next", t, o, a)
                                        }), (function(t) {
                                            e("throw", t, o, a)
                                        })) : Promise.resolve(c).then((function(t) {
                                            l.value = t, o(l)
                                        }), (function(t) {
                                            return e("throw", t, o, a)
                                        }))
                                    }
                                    a(s.arg)
                                }(r, i, e, o)
                            }))
                        }
                        return e = e ? e.then(o, o) : o()
                    }
                }

                function x(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var i = r.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function b(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function w(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function F(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(b, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                o = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: A
                    }
                }

                function A() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = v.constructor = h, h.constructor = f, h[a] = f.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(m.prototype), m.prototype[o] = function() {
                    return this
                }, t.AsyncIterator = m, t.async = function(e, n, r, i) {
                    var o = new m(s(e, n, r, i));
                    return t.isGeneratorFunction(n) ? o : o.next().then((function(t) {
                        return t.done ? t.value : o.next()
                    }))
                }, y(v), v[a] = "Generator", v[i] = function() {
                    return this
                }, v.toString = function() {
                    return "[object Generator]"
                }, t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = C, F.prototype = {
                    constructor: F,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    u = n.call(o, "finallyLoc");
                                if (s && u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), w(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    w(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: C(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = r
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(r)
            }
        },
        o0o1: function(t, e, n) {
            t.exports = n("ls82")
        },
        yLpj: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        yVq1: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("o0o1"),
                i = n.n(r),
                o = n("dAet"),
                a = n.n(o),
                s = n("JNzk"),
                u = n("027J");

            function l(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }
            $(window).on("load", (function() {
                var t, e, n = {
                    init: (t = i.a.mark((function t() {
                        var e;
                        return i.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (new s.LocationFinder).findNearest();
                                case 2:
                                    if (t.t0 = t.sent, t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    t.t0 = {};
                                case 5:
                                    e = t.t0.city, this.mapSvgObj = $("#datacenter-locations-map"), this.slider = new u.a($(".datacenters-slider")), this.activeLocationRings = null, this.mapSvgObj && (this.mapSvgDoc = this.mapSvgObj[0].contentDocument, this.map = a()(this.mapSvgDoc.getElementsByTagName("svg")[0]), this.locations = this.map.selectAll(".location-tooltip"), $.each(this.locations, (function() {
                                        this.click(n.tooltipClick), this.node.id === e && (this.click(), this.addClass("closest"))
                                    })), this.locationsActive = this.map.selectAll(".location-tooltip.active"), this.slider.element.on("beforeChange", this.onSlideChange), e || this.slider.changeSlide(0));
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), e = function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = t.apply(e, n);

                            function a(t) {
                                l(o, r, i, a, s, "next", t)
                            }

                            function s(t) {
                                l(o, r, i, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return e.apply(this, arguments)
                    }),
                    animateTooltip: function(t) {
                        var e = t.select(".line");
                        n.activeLocationRings = t.select("#cloned-rings").selectAll(".ring-group");
                        var r = e.getBBox().h;
                        n.ringAnimation(n.activeLocationRings[0], 0, r, 1e3);
                        for (var i = function(t) {
                                setTimeout((function() {
                                    n.ringAnimation(n.activeLocationRings[t], 0, r, 1e3)
                                }), 300 * t)
                            }, o = 0; o < n.activeLocationRings.length; o++) i(o)
                    },
                    createRings: function(t, e, r) {
                        for (var i = n.map.g().attr("id", "cloned-rings"), o = r; o > 0; o--) {
                            $(e.node).find("ellipse").css("stroke", "#ffd900");
                            var a = e.clone();
                            i.add(a)
                        }
                        t.prepend(i)
                    },
                    ringAnimation: function(t, e, r, i) {
                        t.animate({
                            opacity: "-=1",
                            transform: "t0," + -r + " s2"
                        }, i, (function() {
                            t.transform("t0,0 s1"), $(t.node).css("opacity", "1")
                        })), setTimeout((function() {
                            n.ringAnimation(t, e, r, i)
                        }), i + 800)
                    },
                    onSlideChange: function(t, e, r, i) {
                        n.map.select("#".concat($(e.$slides[i]).find(".slide-content").data("location"))).click()
                    },
                    tooltipClick: function() {
                        if (!$(this.node).hasClass("active")) {
                            $(n.mapSvgDoc).find("#cloned-rings").remove(), $(n.mapSvgDoc).find(".active").removeClass("active"), $(this.node).addClass("active");
                            var t = n.slider.element.find("[data-location=".concat(this.node.id, "]")).closest(".slick-slide").data("slick-index");
                            n.slider.changeSlide(t)
                        }
                    }
                };
                n.init()
            }))
        }
    },
    [
        [34, 0, 1]
    ]
]);