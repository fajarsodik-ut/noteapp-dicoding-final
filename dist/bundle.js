(() => {
  var t = {
      177: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                ((n = this),
                (o = i((o = s))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, c || [], i(n).constructor)
                    : o.apply(n, c),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(s, n),
            (c = s),
            (u = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n            :host {\n                display: block;\n            }\n\n            footer {\n                margin-top: 30px;\n                height: 50px;\n                bottom: 0;\n                padding: 15px;\n                width: 100%;\n                color: rgb(100 116 139);\n                background-color: #0f172a;\n                text-align: center;\n                font-weight: 500;\n                font-size: 0.9rem;\n            }\n            \n            footer p .instagram {\n                font-weight: 700;\n                color: salmon;\n                text-decoration: none;\n            }\n            \n            footer p .html {\n                font-weight: 500;\n                color: orangered;\n            }\n            \n            footer p .css {\n                font-weight: 500;\n                color: rgb(14 165 233);\n            }\n            \n            footer p .js {\n                font-weight: 500;\n                color: #eab308;\n            }\n            \n            @media screen and (max-width: 768px) {\n                footer {\n                    font-size: 0.7em;\n                }\n            }\n            \n            @media screen and (max-width: 576px) {\n                footer {\n                    font-size: 0.6em;\n                }\n            }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <footer>\n            <p> Made with ❤️ by\n                <a href="https://www.instagram.com/aufaahsnt" target="_blank" class="instagram">Aufaa Husniati</a> using <span class="html">HTML5</span>, <span class="css">CSS3</span>, and <span class="js">javascript</span>\n            </p>\n        </footer>\n    '));
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define("footer-bar", c);
      },
      915: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                ((n = this),
                (o = i((o = s))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, c || [], i(n).constructor)
                    : o.apply(n, c),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(s, n),
            (c = s),
            (u = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n            :host {\n                display: block;\n            }\n\n            nav {\n                display: flex;\n                width: 100%;\n                background-color: #6e8adb;\n                justify-content: center;\n                padding: 20px;\n                position: fixed;\n                z-index: 1;\n            }\n            \n            nav .logo img {\n                width: 150px;\n            }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <nav>\n            <div class="logo">\n                <img src="logo.png" alt="logo" />\n            </div>\n        </nav>\n    '));
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define("header-bar", c);
      },
      327: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                ((n = this),
                (o = i((o = s))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, c || [], i(n).constructor)
                    : o.apply(n, c),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(s, n),
            (c = s),
            (u = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n    :host {\n      display: block;\n    }\n\n    .wrapper {\n      display: flex;\n      align-items: center;\n      padding-top: 10%;\n      flex-direction: column;\n  }\n  \n  .wrapper .form-wrapper {\n      background-color: white;\n      opacity: 0.8;\n      border: none;\n      border-radius: 10px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      justify-content: center;\n      padding-left: 2em;\n      padding-right: 1em;\n      padding-bottom: 3em;\n      width: 600px;\n      height: 350px;\n  }\n  \n  .form-wrapper h1 {\n      text-align: center;\n      margin-bottom: 1em;\n      font-weight: 800;\n  }\n\n  .form-title input {\n      margin-bottom: 10px;\n      width: 93%;\n      padding: 10px;\n  }\n  \n  .form-desc textarea {\n      padding: 6px;\n      width: 95%;\n  }\n  \n  .form-group button {\n    color: white;\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    background-color: green;\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    border-radius: 5px;\n    transition: all 0.2s ease-in-out;\n    border: white;\n    width: 98%;\n    cursor: pointer;\n  }\n\n  .form-group button:hover {\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrapper {\n        padding-top: 20%;\n    }\n\n    .wrapper .form-wrapper {\n      width: 50%;\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    .wrapper {\n        padding-top: 30%;\n    }\n\n    .form-wrapper h1 {\n      font-size: 20px;\n      padding-bottom: 5px;\n    }\n\n    .wrapper .form-wrapper {\n      margin-left: 10px;\n      width: 320px;\n      height: 320px;\n    }\n\n    .form-title input {\n      padding: 10px;\n    }\n\n    .form-group .form-desc {\n      padding-top: 10px;\n    }    \n\n  }\n    ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  (this.render(),
                    this._shadowRoot
                      .querySelector("#form")
                      .addEventListener(
                        "submit",
                        this._handleSubmit.bind(this),
                      ));
                },
              },
              {
                key: "_handleSubmit",
                value: function (t) {
                  t.preventDefault();
                  var e = this._shadowRoot.querySelector("#title").value,
                    n = this._shadowRoot.querySelector("#description").value,
                    r = {
                      id: "notes-".concat(
                        Math.random().toString(36).substring(2, 9),
                      ),
                      title: e,
                      body: n,
                      createdAt: new Date().toISOString(),
                      archived: !1,
                    };
                  (this.dispatchEvent(
                    new CustomEvent("note-added", { detail: r }),
                  ),
                    (this._shadowRoot.querySelector("#title").value = ""),
                    (this._shadowRoot.querySelector("#description").value =
                      ""));
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n        <div class="wrapper">\n            <div class="form-wrapper">\n                <h1>Add New Notes</h1>\n                <form action="" class="form" id="form">\n                    <div class="form-group">\n                        <div class="form-title">\n                            <label for="title"></label>\n                            <input type="text" id="title" name="title" placeholder="Title" required>\n                        </div>\n                        <div class="form-desc">\n                            <label for="description"></label>\n                            <textarea name="description" id="description" cols="30" rows="10" placeholder="Description" required></textarea>\n                        </div>\n\n                        <button type="submit" name="submit" class="btn-submit">Add Notes</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        '));
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define("note-input", c);
      },
      784: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r));
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return (n && o(a, n.prototype), a);
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return ((t.__proto__ = e), t);
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function s() {
            var e, n, o, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                ((n = this),
                (o = i((o = s))),
                (e = (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(
                  n,
                  r()
                    ? Reflect.construct(o, c || [], i(n).constructor)
                    : o.apply(n, c),
                ))),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              a(e, "_note", {
                id: null,
                title: null,
                body: null,
                createdAt: null,
              }),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              ((t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e));
            })(s, n),
            (c = s),
            (u = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "note",
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  ((this._note = t), this.render());
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n        :host {\n          display: block;\n        }\n\n        .grid-wrapper {\n          padding-top: 5%;\n          display: grid;\n        }\n\n        .grid-wrapper .all-notes {\n            padding-top: 1em;\n            text-align: center;\n        }\n\n        hr {\n            width: 20%;\n            border: 1.8px solid #DE9D7E;\n        }\n      \n        .grid-wrapper .grid-container {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            align-items: center;\n            justify-items: center;\n            gap: 2em;\n            padding: 2em;\n        }\n        \n        .grid-container .card-note {\n            background-color: white;\n            opacity: 0.8;\n            border: none;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            width: 90%;\n            height: 90%;\n            padding: 1em;\n        }\n\n        .card-note .date {\n          font-size: 0.70em;\n          margin-top: -9px;\n        }\n        \n        .card-note .desc {\n              padding-top: 1em;\n              font-size: 0.90em;\n          }\n\n        .card-note .note-delete {\n            padding-top: 1em;\n        }\n\n        .note-delete .button-delete {\n            background-color: red;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            padding: 8px;\n            cursor: pointer;\n        }\n    ";
                },
              },
              {
                key: "render",
                value: function () {
                  (this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n\n          <div class="grid-wrapper">\n            <h1 class="all-notes">All Notes</h1><hr>\n            <div class="grid-container">\n            '.concat(
                        this._note
                          .map(function (t) {
                            return '\n                <div class="card-note">\n                    <h4>'
                              .concat(
                                t.title,
                                '</h4>\n                    <p class="date">',
                              )
                              .concat(
                                new Date(t.createdAt).toLocaleString(),
                                '</p>\n                    <p class="desc">',
                              )
                              .concat(
                                t.body,
                                '</p>\n\n                    <div class="note-delete">\n                        <button class="button-delete" type="button" data-id="',
                              )
                              .concat(
                                t.id,
                                '" >Delete</button>\n                    </div>\n                </div>\n                ',
                              );
                          })
                          .join(""),
                        "\n            </div>\n        </div>\n    ",
                      )));
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(n(HTMLElement));
        customElements.define("note-item", c);
      },
      919: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => s });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Poppins", sans-serif;\n}\n\nbody {\n  background-color: #fefaee;\n}\n\nmain {\n  padding-bottom: 2em;\n}\n\n.loadingIndicator {\n  display: flex;\n  padding-top: 2rem;\n  justify-content: center;\n}\n\n.text-load {\n  padding-top: 20px;\n  color: black;\n  text-align: center;\n  font-weight: bold;\n  width: 50%;\n}\n',
          "",
        ]);
        const s = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = r.base ? c[0] + r.base : c[0],
              l = i[u] || 0,
              p = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var f = n(p),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) (e[f].references++, e[f].updater(d));
            else {
              var h = o(d, r);
              ((r.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: h, references: 1 }));
            }
            a.push(p);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              e[s].references--;
            }
            for (var c = r(t, o), u = 0; u < i.length; u++) {
              var l = n(i[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return (t.setAttributes(e, t.attributes), t.insert(e, t.options), e);
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                (n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {")));
                var o = void 0 !== n.layer;
                (o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}"));
                var i = n.sourceMap;
                (i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options));
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return (t[r](i, i.exports, n), i.exports);
  }
  ((n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return (n.d(e, { a: e }), e);
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        s = n(56),
        c = n.n(s),
        u = n(540),
        l = n.n(u),
        p = n(113),
        f = n.n(p),
        d = n(919),
        h = {};
      ((h.styleTagTransform = f()),
        (h.setAttributes = c()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(d.A, h),
        d.A && d.A.locals && d.A.locals,
        n(915),
        n(327),
        n(784),
        n(177));
      const y = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        m = (t) => 1e3 * t,
        b = (t) => t / 1e3,
        v = () => {},
        g = (t) => t;
      function w(t, e = !0) {
        if (t && "finished" !== t.playState)
          try {
            t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      const x = (t) => t(),
        S = (t, e, n = y.duration) =>
          new Proxy(
            { animations: t.map(x).filter(Boolean), duration: n, options: e },
            _,
          ),
        _ = {
          get: (t, e) => {
            const n = t.animations[0];
            switch (e) {
              case "duration":
                return t.duration;
              case "currentTime":
                return b((null == n ? void 0 : n[e]) || 0);
              case "playbackRate":
              case "playState":
                return null == n ? void 0 : n[e];
              case "finished":
                return (
                  t.finished ||
                    (t.finished = Promise.all(t.animations.map(O)).catch(v)),
                  t.finished
                );
              case "stop":
                return () => {
                  t.animations.forEach((t) => w(t));
                };
              case "forEachNative":
                return (e) => {
                  t.animations.forEach((n) => e(n, t));
                };
              default:
                return void 0 === (null == n ? void 0 : n[e])
                  ? void 0
                  : () => t.animations.forEach((t) => t[e]());
            }
          },
          set: (t, e, n) => {
            switch (e) {
              case "currentTime":
                n = m(n);
              case "playbackRate":
                for (let r = 0; r < t.animations.length; r++)
                  t.animations[r][e] = n;
                return !0;
            }
            return !1;
          },
        },
        O = (t) => t.finished,
        T = (t) => "object" == typeof t && Boolean(t.createAnimation),
        j = (t) => "number" == typeof t,
        E = (t) => Array.isArray(t) && !j(t[0]),
        M = (t, e, n) => -n * t + n * e + t,
        R = (t, e, n) => (e - t == 0 ? 1 : (n - t) / (e - t));
      function P(t, e) {
        const n = t[t.length - 1];
        for (let r = 1; r <= e; r++) {
          const o = R(0, e, r);
          t.push(M(n, 1, o));
        }
      }
      const k = (t, e, n) => Math.min(Math.max(n, t), e);
      const D = (t, e, n) =>
          (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
        A = 1e-7,
        C = 12;
      function q(t, e, n, r) {
        if (t === e && n === r) return g;
        return (o) =>
          0 === o || 1 === o
            ? o
            : D(
                (function (t, e, n, r, o) {
                  let i,
                    a,
                    s = 0;
                  do {
                    ((a = e + (n - e) / 2),
                      (i = D(a, r, o) - t),
                      i > 0 ? (n = a) : (e = a));
                  } while (Math.abs(i) > A && ++s < C);
                  return a;
                })(o, 0, 1, t, n),
                e,
                r,
              );
      }
      const L = (t) => "function" == typeof t,
        H = (t) => Array.isArray(t) && j(t[0]),
        I = {
          ease: q(0.25, 0.1, 0.25, 1),
          "ease-in": q(0.42, 0, 1, 1),
          "ease-in-out": q(0.42, 0, 0.58, 1),
          "ease-out": q(0, 0, 0.58, 1),
        },
        N = /\((.*?)\)/;
      function B(t) {
        if (L(t)) return t;
        if (H(t)) return q(...t);
        if (I[t]) return I[t];
        if (t.startsWith("steps")) {
          const e = N.exec(t);
          if (e) {
            const t = e[1].split(",");
            return (
              (t, e = "end") =>
              (n) => {
                const r =
                    (n =
                      "end" === e ? Math.min(n, 0.999) : Math.max(n, 0.001)) *
                    t,
                  o = "end" === e ? Math.floor(r) : Math.ceil(r);
                return k(0, 1, o / t);
              }
            )(parseFloat(t[0]), t[1].trim());
          }
        }
        return g;
      }
      class z {
        constructor(
          t,
          e = [0, 1],
          {
            easing: n,
            duration: r = y.duration,
            delay: o = y.delay,
            endDelay: i = y.endDelay,
            repeat: a = y.repeat,
            offset: s,
            direction: c = "normal",
            autoplay: u = !0,
          } = {},
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = g),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((t, e) => {
              ((this.resolve = t), (this.reject = e));
            })),
            (n = n || y.easing),
            T(n))
          ) {
            const t = n.createAnimation(e);
            ((n = t.easing), (e = t.keyframes || e), (r = t.duration || r));
          }
          ((this.repeat = a),
            (this.easing = E(n) ? g : B(n)),
            this.updateDuration(r));
          const l = (function (
            t,
            e = (function (t) {
              const e = [0];
              return (P(e, t - 1), e);
            })(t.length),
            n = g,
          ) {
            const r = t.length,
              o = r - e.length;
            return (
              o > 0 && P(e, o),
              (o) => {
                let i = 0;
                for (; i < r - 2 && !(o < e[i + 1]); i++);
                let a = k(0, 1, R(e[i], e[i + 1], o));
                const s = (function (t, e) {
                  return E(t)
                    ? t[
                        ((t, e, n) => {
                          const r = e - t;
                          return ((((n - t) % r) + r) % r) + t;
                        })(0, t.length, e)
                      ]
                    : t;
                })(n, i);
                return ((a = s(a)), M(t[i], t[i + 1], a));
              }
            );
          })(e, s, E(n) ? n.map(B) : g);
          ((this.tick = (e) => {
            var n;
            let r = 0;
            ((r =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (e - this.startTime) * this.rate),
              (this.t = r),
              (r /= 1e3),
              (r = Math.max(r - o, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (r = this.totalDuration));
            const a = r / this.duration;
            let s = Math.floor(a),
              u = a % 1;
            (!u && a >= 1 && (u = 1), 1 === u && s--);
            const p = s % 2;
            ("reverse" === c ||
              ("alternate" === c && p) ||
              ("alternate-reverse" === c && !p)) &&
              (u = 1 - u);
            const f = r >= this.totalDuration ? 1 : Math.min(u, 1),
              d = l(this.easing(f));
            (t(d),
              void 0 === this.pauseTime &&
              ("finished" === this.playState || r >= this.totalDuration + i)
                ? ((this.playState = "finished"),
                  null === (n = this.resolve) ||
                    void 0 === n ||
                    n.call(this, d))
                : "idle" !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick)));
          }),
            u && this.play());
        }
        play() {
          const t = performance.now();
          ((this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick)));
        }
        pause() {
          ((this.playState = "paused"), (this.pauseTime = this.t));
        }
        finish() {
          ((this.playState = "finished"), this.tick(0));
        }
        stop() {
          var t;
          ((this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1));
        }
        cancel() {
          (this.stop(), this.tick(this.cancelTimestamp));
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          ((this.duration = t), (this.totalDuration = t * (this.repeat + 1)));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      class F {
        setAnimation(t) {
          ((this.animation = t),
            null == t ||
              t.finished.then(() => this.clearAnimation()).catch(() => {}));
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      const $ = new WeakMap();
      function V(t) {
        return (
          $.has(t) || $.set(t, { transforms: [], values: new Map() }),
          $.get(t)
        );
      }
      const U = ["", "X", "Y", "Z"],
        W = { x: "translateX", y: "translateY", z: "translateZ" },
        X = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (t) => t + "deg",
        },
        Y = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (t) => t + "px",
          },
          rotate: X,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: g },
          skew: X,
        },
        J = new Map(),
        K = (t) => `--motion-${t}`,
        Z = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((t) => {
        U.forEach((e) => {
          (Z.push(t + e), J.set(K(t + e), Y[t]));
        });
      });
      const G = (t, e) => Z.indexOf(t) - Z.indexOf(e),
        Q = new Set(Z),
        tt = (t) => Q.has(t),
        et = (t) => t.sort(G).reduce(nt, "").trim(),
        nt = (t, e) => `${t} ${e}(var(${K(e)}))`,
        rt = (t) => t.startsWith("--"),
        ot = new Set(),
        it = (t, e) => document.createElement("div").animate(t, e),
        at = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              it({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            Boolean(it({ opacity: [0, 1] }, { duration: 0.001 }).finished),
          linearEasing: () => {
            try {
              it({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        st = {},
        ct = {};
      for (const t in at)
        ct[t] = () => (void 0 === st[t] && (st[t] = at[t]()), st[t]);
      const ut = (t, e) =>
          L(t)
            ? ct.linearEasing()
              ? `linear(${((t, e) => {
                  let n = "";
                  const r = Math.round(e / 0.015);
                  for (let e = 0; e < r; e++) n += t(R(0, r - 1, e)) + ", ";
                  return n.substring(0, n.length - 2);
                })(t, e)})`
              : y.easing
            : H(t)
              ? lt(t)
              : t,
        lt = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;
      function pt(t) {
        return (W[t] && (t = W[t]), tt(t) ? K(t) : t);
      }
      const ft = (t, e) => {
          e = pt(e);
          let n = rt(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
          if (!n && 0 !== n) {
            const t = J.get(e);
            t && (n = t.initialValue);
          }
          return n;
        },
        dt = (t, e, n) => {
          ((e = pt(e)), rt(e) ? t.style.setProperty(e, n) : (t.style[e] = n));
        },
        ht = (t) => "string" == typeof t;
      function yt(t, e) {
        var n;
        let r = (null == e ? void 0 : e.toDefaultUnit) || g;
        const o = t[t.length - 1];
        if (ht(o)) {
          const t =
            (null === (n = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n
              ? void 0
              : n[2]) || "";
          t && (r = (e) => e + t);
        }
        return r;
      }
      function mt(t, e, n, r = {}, o) {
        const i = window.__MOTION_DEV_TOOLS_RECORD,
          a = !1 !== r.record && i;
        let s,
          {
            duration: c = y.duration,
            delay: u = y.delay,
            endDelay: l = y.endDelay,
            repeat: p = y.repeat,
            easing: f = y.easing,
            persist: d = !1,
            direction: h,
            offset: b,
            allowWebkitAcceleration: g = !1,
            autoplay: x = !0,
          } = r;
        const S = V(t),
          _ = tt(e);
        let O = ct.waapi();
        _ &&
          ((t, e) => {
            W[e] && (e = W[e]);
            const { transforms: n } = V(t);
            var r, o;
            ((o = e),
              -1 === (r = n).indexOf(o) && r.push(o),
              (t.style.transform = et(n)));
          })(t, e);
        const M = pt(e),
          R = (function (t, e) {
            return (t.has(e) || t.set(e, new F()), t.get(e));
          })(S.values, M),
          P = J.get(M);
        return (
          w(R.animation, !(T(f) && R.generator) && !1 !== r.record),
          () => {
            const y = () => {
              var e, n;
              return null !==
                (n =
                  null !== (e = ft(t, M)) && void 0 !== e
                    ? e
                    : null == P
                      ? void 0
                      : P.initialValue) && void 0 !== n
                ? n
                : 0;
            };
            let w = (function (t, e) {
              for (let n = 0; n < t.length; n++)
                null === t[n] && (t[n] = n ? t[n - 1] : e());
              return t;
            })(((t) => (Array.isArray(t) ? t : [t]))(n), y);
            const S = yt(w, P);
            if (T(f)) {
              const t = f.createAnimation(w, "opacity" !== e, y, M, R);
              ((f = t.easing), (w = t.keyframes || w), (c = t.duration || c));
            }
            if (
              (rt(M) &&
                (ct.cssRegisterProperty()
                  ? (function (t) {
                      if (!ot.has(t)) {
                        ot.add(t);
                        try {
                          const { syntax: e, initialValue: n } = J.has(t)
                            ? J.get(t)
                            : {};
                          CSS.registerProperty({
                            name: t,
                            inherits: !1,
                            syntax: e,
                            initialValue: n,
                          });
                        } catch (t) {}
                      }
                    })(M)
                  : (O = !1)),
              _ &&
                !ct.linearEasing() &&
                (L(f) || (E(f) && f.some(L))) &&
                (O = !1),
              O)
            ) {
              (P && (w = w.map((t) => (j(t) ? P.toDefaultUnit(t) : t))),
                1 !== w.length ||
                  (ct.partialKeyframes() && !a) ||
                  w.unshift(y()));
              const e = {
                delay: m(u),
                duration: m(c),
                endDelay: m(l),
                easing: E(f) ? void 0 : ut(f, c),
                direction: h,
                iterations: p + 1,
                fill: "both",
              };
              ((s = t.animate(
                {
                  [M]: w,
                  offset: b,
                  easing: E(f) ? f.map((t) => ut(t, c)) : void 0,
                },
                e,
              )),
                s.finished ||
                  (s.finished = new Promise((t, e) => {
                    ((s.onfinish = t), (s.oncancel = e));
                  })));
              const n = w[w.length - 1];
              (s.finished
                .then(() => {
                  d || (dt(t, M, n), s.cancel());
                })
                .catch(v),
                g || (s.playbackRate = 1.000001));
            } else if (o && _)
              ((w = w.map((t) => ("string" == typeof t ? parseFloat(t) : t))),
                1 === w.length && w.unshift(parseFloat(y())),
                (s = new o(
                  (e) => {
                    dt(t, M, S ? S(e) : e);
                  },
                  w,
                  Object.assign(Object.assign({}, r), {
                    duration: c,
                    easing: f,
                  }),
                )));
            else {
              const e = w[w.length - 1];
              dt(t, M, P && j(e) ? P.toDefaultUnit(e) : e);
            }
            return (
              a &&
                i(
                  t,
                  e,
                  w,
                  { duration: c, delay: u, easing: f, repeat: p, offset: b },
                  "motion-one",
                ),
              R.setAnimation(s),
              s && !x && s.pause(),
              s
            );
          }
        );
      }
      const bt = (t, e) =>
        t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
      function vt(t, e, n) {
        return L(t) ? t(e, n) : t;
      }
      const gt =
        ((wt = z),
        function (t, e, n = {}) {
          const r = (t = (function (t, e) {
            return (
              "string" == typeof t
                ? (t = document.querySelectorAll(t))
                : t instanceof Element && (t = [t]),
              Array.from(t || [])
            );
          })(t)).length;
          (Boolean(r), Boolean(e));
          const o = [];
          for (let i = 0; i < r; i++) {
            const a = t[i];
            for (const t in e) {
              const s = bt(n, t);
              s.delay = vt(s.delay, i, r);
              const c = mt(a, t, e[t], s, wt);
              o.push(c);
            }
          }
          return S(o, n, n.duration);
        });
      var wt;
      function xt(t, e = {}) {
        return S(
          [
            () => {
              const n = new z(t, [0, 1], e);
              return (n.finished.catch(() => {}), n);
            },
          ],
          e,
          e.duration,
        );
      }
      function St(t, e, n) {
        const r = Math.max(e - 5, 0);
        return ((o = n - t(r)), (i = e - r) ? o * (1e3 / i) : 0);
        var o, i;
      }
      function _t(t) {
        return j(t) && !isNaN(t);
      }
      function Ot(t) {
        return ht(t) ? parseFloat(t) : t;
      }
      const Tt = (function (t) {
        const e = new WeakMap();
        return (t = {}) => {
          const n = new Map(),
            r = (e = 0, r = 100, o = 0, i = !1) => {
              const a = `${e}-${r}-${o}-${i}`;
              return (
                n.has(a) ||
                  n.set(
                    a,
                    (({
                      from: t = 0,
                      velocity: e = 0,
                      power: n = 0.8,
                      decay: r = 0.325,
                      bounceDamping: o,
                      bounceStiffness: i,
                      changeTarget: a,
                      min: s,
                      max: c,
                      restDistance: u = 0.5,
                      restSpeed: l,
                    }) => {
                      r = m(r);
                      const p = {
                          hasReachedTarget: !1,
                          done: !1,
                          current: t,
                          target: t,
                        },
                        f = (t) =>
                          void 0 === s
                            ? c
                            : void 0 === c || Math.abs(s - t) < Math.abs(c - t)
                              ? s
                              : c;
                      let d = n * e;
                      const h = t + d,
                        y = void 0 === a ? h : a(h);
                      ((p.target = y), y !== h && (d = y - t));
                      const v = (t) => -d * Math.exp(-t / r),
                        g = (t) => y + v(t),
                        w = (t) => {
                          const e = v(t),
                            n = g(t);
                          ((p.done = Math.abs(e) <= u),
                            (p.current = p.done ? y : n));
                        };
                      let x, S;
                      const _ = (t) => {
                        var e;
                        ((e = p.current),
                          ((void 0 !== s && e < s) ||
                            (void 0 !== c && e > c)) &&
                            ((x = t),
                            (S = (({
                              stiffness: t = 100,
                              damping: e = 10,
                              mass: n = 1,
                              from: r = 0,
                              to: o = 1,
                              velocity: i = 0,
                              restSpeed: a,
                              restDistance: s,
                            } = {}) => {
                              i = i ? b(i) : 0;
                              const c = {
                                  done: !1,
                                  hasReachedTarget: !1,
                                  current: r,
                                  target: o,
                                },
                                u = o - r,
                                l = Math.sqrt(t / n) / 1e3,
                                p = ((t = 100, e = 10, n = 1) =>
                                  e / (2 * Math.sqrt(t * n)))(t, e, n),
                                f = Math.abs(u) < 5;
                              let d;
                              if (
                                (a || (a = f ? 0.01 : 2),
                                s || (s = f ? 0.005 : 0.5),
                                p < 1)
                              ) {
                                const t = l * Math.sqrt(1 - p * p);
                                d = (e) =>
                                  o -
                                  Math.exp(-p * l * e) *
                                    (((p * l * u - i) / t) * Math.sin(t * e) +
                                      u * Math.cos(t * e));
                              } else
                                d = (t) =>
                                  o - Math.exp(-l * t) * (u + (l * u - i) * t);
                              return (t) => {
                                c.current = d(t);
                                const e = 0 === t ? i : St(d, t, c.current),
                                  n = Math.abs(e) <= a,
                                  u = Math.abs(o - c.current) <= s;
                                var l, p, f;
                                return (
                                  (c.done = n && u),
                                  (c.hasReachedTarget =
                                    ((l = r),
                                    (p = o),
                                    (f = c.current),
                                    (l < p && f >= p) || (l > p && f <= p))),
                                  c
                                );
                              };
                            })({
                              from: p.current,
                              to: f(p.current),
                              velocity: St(g, t, p.current),
                              damping: o,
                              stiffness: i,
                              restDistance: u,
                              restSpeed: l,
                            }))));
                      };
                      return (
                        _(0),
                        (t) => {
                          let e = !1;
                          return (
                            S || void 0 !== x || ((e = !0), w(t), _(t)),
                            void 0 !== x && t > x
                              ? ((p.hasReachedTarget = !0), S(t - x))
                              : ((p.hasReachedTarget = !1), !e && w(t), p)
                          );
                        }
                      );
                    })(Object.assign({ from: e, to: r, velocity: o }, t)),
                  ),
                n.get(a)
              );
            },
            o = (t, n) => (
              e.has(t) ||
                e.set(
                  t,
                  (function (t, e = g) {
                    let n,
                      r = 10,
                      o = t(0);
                    const i = [e(o.current)];
                    for (; !o.done && r < 1e4; )
                      ((o = t(r)),
                        i.push(e(o.done ? o.target : o.current)),
                        void 0 === n && o.hasReachedTarget && (n = r),
                        (r += 10));
                    const a = r - 10;
                    return (
                      1 === i.length && i.push(o.current),
                      {
                        keyframes: i,
                        duration: a / 1e3,
                        overshootDuration: (null != n ? n : a) / 1e3,
                      }
                    );
                  })(t, n),
                ),
              e.get(t)
            );
          return {
            createAnimation: (t, e = !0, n, i, a) => {
              let s,
                c,
                u,
                l = 0,
                p = g;
              const f = t.length;
              if (e)
                if (
                  ((p = yt(t, i ? J.get(pt(i)) : void 0)),
                  (u = Ot(t[f - 1])),
                  f > 1 && null !== t[0])
                )
                  c = Ot(t[0]);
                else {
                  const t = null == a ? void 0 : a.generator;
                  if (t) {
                    const { animation: e, generatorStartTime: n } = a,
                      r = (null == e ? void 0 : e.startTime) || n || 0,
                      o =
                        (null == e ? void 0 : e.currentTime) ||
                        performance.now() - r,
                      i = t(o).current;
                    ((c = i), (l = St((e) => t(e).current, o, i)));
                  } else n && (c = Ot(n()));
                }
              if (_t(c) && _t(u)) {
                const t = r(c, u, l, null == i ? void 0 : i.includes("scale"));
                ((s = Object.assign(Object.assign({}, o(t, p)), {
                  easing: "linear",
                })),
                  a &&
                    ((a.generator = t),
                    (a.generatorStartTime = performance.now())));
              }
              return (
                s ||
                  (s = {
                    easing: "ease",
                    duration: o(r(0, 100)).overshootDuration,
                  }),
                s
              );
            },
          };
        };
      })();
      var jt = "https://notes-api.dicoding.dev/v2",
        Et = function () {
          fetch("".concat(jt, "/notes"))
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              t.error ? Rt(t.message) : (console.log(t.data), Mt(t.data));
            })
            .catch(function (t) {
              Rt(t);
            });
        },
        Mt = function (t) {
          var e = document.querySelectorAll("note-item");
          ((e.innerHTML = ""),
            e.forEach(function (e) {
              ((e.note = t),
                e.shadowRoot
                  .querySelectorAll(".note-delete")
                  .forEach(function (t) {
                    var e = t.querySelector(".button-delete");
                    e &&
                      e.addEventListener("click", function (t) {
                        var e;
                        ((e = t.target.dataset.id),
                          fetch("".concat(jt, "/notes/").concat(e), {
                            method: "DELETE",
                            headers: { "X-Auth-Token": "12345" },
                          }),
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your note has been deleted.",
                            icon: "success",
                          })
                            .then(function (t) {
                              Et();
                            })
                            .catch(function (t) {
                              (kt(), Rt(t));
                            }));
                      });
                  }));
            }));
        },
        Rt = function t(e) {
          (Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question",
          }),
            t(e));
        };
      document.addEventListener("DOMContentLoaded", function () {
        Et();
        var t = document.querySelector("note-input");
        t &&
          t.addEventListener("note-added", function (t) {
            var e;
            ((e = t.detail),
              Pt(),
              fetch("".concat(jt, "/notes"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Auth-Token": "12345",
                },
                body: JSON.stringify({ title: e.title, body: e.body }),
              }),
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Notes has been added",
                showConfirmButton: !1,
                timer: 1500,
              })
                .then(function (t) {
                  (kt(), Et());
                })
                .catch(function (t) {
                  (kt(), Rt(t));
                }));
          });
      });
      var Pt = function () {
          document.querySelector(".loadingIndicator").style.display = "flex";
        },
        kt = function () {
          document.querySelector(".loadingIndicator").style.display = "none";
        };
      !(function (t, e, n) {
        (L(t) ? xt : gt)(t, { y: 0 }, n);
      })("#itemNotes", 0, { easing: Tt({ velocity: -50 }) });
    })());
})();
