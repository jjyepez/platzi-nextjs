_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    0: function (t, e, n) {
      n('74v/'), (t.exports = n('nOHt'))
    },
    '67mL': function (t, e, n) {},
    '74v/': function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('cha2')
        },
      ])
    },
    cha2: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('q1tI'),
        u = n.n(r),
        c = (n('xMo/'), n('67mL'), n('laJZ')),
        i = u.a.createElement
      e.default = function (t) {
        var e = t.Component,
          n = t.pageProps
        return i(c.a, null, i(e, n))
      }
    },
    laJZ: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return l
      }),
        n.d(e, 'c', function () {
          return O
        })
      var r = n('rePB'),
        u = n('q1tI'),
        c = n.n(u),
        i = c.a.createElement
      function o(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                Object(r.a)(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var f = {},
        d = c.a.createContext(f),
        p = c.a.createContext(function () {})
      function s(t, e) {
        var n = e.item,
          u = e.type,
          c = e.quantity,
          i = void 0 === c ? 1 : c,
          o = t[n.id]
        switch (u) {
          case 'add':
            if (void 0 != o) {
              var f = o.quantity + i
              return a(
                a({}, t),
                {},
                Object(r.a)({}, n.id, a(a({}, o), {}, { quantity: f }))
              )
            }
            return a(
              a({}, t),
              {},
              Object(r.a)({}, n.id, a(a({}, n), {}, { quantity: i }))
            )
          case 'remove':
            if (void 0 == o) return t
            var d = o.quantity - 1
            if (d > 0)
              return a(
                a({}, t),
                {},
                Object(r.a)({}, n.id, a(a({}, o), {}, { quantity: d }))
              )
            var p = a({}, t)
            return delete p[n.id], p
          default:
            throw new Error('Unhandled action type: '.concat(u))
        }
      }
      var b = function (t, e) {
          return (t += e.price * e.quantity)
        },
        v = function (t, e) {
          return t + e.quantity
        },
        l = function () {
          var t = Object(u.useContext)(d),
            e = Object.values(t),
            n = e.reduce(v, 0),
            r = e.reduce(b, 0)
          return { items: e, itemsById: t, count: n, subTotal: r }
        },
        O = function () {
          var t = Object(u.useContext)(p)
          return {
            addToCart: function (e, n) {
              return t({ type: 'add', item: e, quantity: n })
            },
            removeFromCart: function (e) {
              return t({ type: 'remove', item: e })
            },
          }
        }
      e.a = function (t) {
        var e = t.children,
          n = Object(u.useReducer)(s, f),
          r = n[0],
          c = n[1]
        return i(d.Provider, { value: r }, i(p.Provider, { value: c }, e))
      }
    },
    rePB: function (t, e, n) {
      'use strict'
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        )
      }
      n.d(e, 'a', function () {
        return r
      })
    },
    'xMo/': function (t, e, n) {},
  },
  [[0, 0, 2, 5, 1]],
])
