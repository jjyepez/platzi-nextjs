_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    '8OQS': function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          n,
          r = {},
          c = Object.keys(e)
        for (n = 0; n < c.length; n++)
          (a = c[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
        return r
      }
    },
    MPSb: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ICNK'),
        d = a('Y53p'),
        u = a('H+2d'),
        p = a('ZeOK'),
        b = a('MZgk')
      function m(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('header', a),
          l = Object(o.a)(m, e),
          p = Object(d.a)(m, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(m.handledProps = ['as', 'children', 'className', 'content']),
        (m.propTypes = {}),
        (m.create = Object(b.d)(m, function (e) {
          return { content: e }
        }))
      var f = m
      function O(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('description', a),
          l = Object(o.a)(O, e),
          p = Object(d.a)(O, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(O.handledProps = ['as', 'children', 'className', 'content']),
        (O.propTypes = {}),
        (O.create = Object(b.d)(O, function (e) {
          return { content: e }
        }))
      var j = O
      function v(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('extra', a),
          l = Object(o.a)(v, e),
          p = Object(d.a)(v, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(v.handledProps = ['as', 'children', 'className', 'content']),
        (v.propTypes = {}),
        (v.create = Object(b.d)(v, function (e) {
          return { content: e }
        }))
      var h = v
      function g(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('meta', a),
          l = Object(o.a)(g, e),
          p = Object(d.a)(g, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(g.handledProps = ['as', 'children', 'className', 'content']),
        (g.propTypes = {}),
        (g.create = Object(b.d)(g, function (e) {
          return { content: e }
        }))
      var N = g
      function y(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          b = e.header,
          m = e.meta,
          O = e.verticalAlign,
          v = i()(Object(p.f)(O), 'content', a),
          g = Object(o.a)(y, e),
          w = Object(d.a)(y, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              w,
              r()({}, g, { className: v }),
              f.create(b, { autoGenerateKey: !1 }),
              N.create(m, { autoGenerateKey: !1 }),
              j.create(c, { autoGenerateKey: !1 }),
              h.create(l, { autoGenerateKey: !1 }),
              n
            )
          : s.a.createElement(w, r()({}, g, { className: v }), t)
      }
      ;(y.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'meta',
        'verticalAlign',
      ]),
        (y.propTypes = {})
      var w = y,
        P = a('QILm'),
        E = a.n(P),
        x = a('3WF5'),
        k = a.n(x)
      function I(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.divided,
          l = e.items,
          b = e.link,
          m = e.relaxed,
          f = e.unstackable,
          O = i()(
            'ui',
            Object(p.a)(c, 'divided'),
            Object(p.a)(b, 'link'),
            Object(p.a)(f, 'unstackable'),
            Object(p.b)(m, 'relaxed'),
            'items',
            a
          ),
          j = Object(o.a)(I, e),
          v = Object(d.a)(I, e)
        if (!u.b.isNil(t))
          return s.a.createElement(v, r()({}, j, { className: O }), t)
        if (!u.b.isNil(n))
          return s.a.createElement(v, r()({}, j, { className: O }), n)
        var h = k()(l, function (e) {
          var t = e.childKey,
            a = E()(e, ['childKey']),
            n = t || [a.content, a.description, a.header, a.meta].join('-')
          return s.a.createElement(R, r()({}, a, { key: n }))
        })
        return s.a.createElement(v, r()({}, j, { className: O }), h)
      }
      ;(I.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'divided',
        'items',
        'link',
        'relaxed',
        'unstackable',
      ]),
        (I.propTypes = {})
      var A = I,
        C = a('5XkN')
      function T(e) {
        var t = e.size,
          a = Object(o.a)(T, e)
        return s.a.createElement(
          C.a,
          r()({}, a, { size: t, ui: !!t, wrapped: !0 })
        )
      }
      ;(T.handledProps = ['size']),
        (T.propTypes = {}),
        (T.create = Object(b.d)(T, function (e) {
          return { src: e }
        }))
      var S = T
      function K(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          p = e.header,
          b = e.image,
          m = e.meta,
          f = i()('item', a),
          O = Object(o.a)(K, e),
          j = Object(d.a)(K, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              j,
              r()({}, O, { className: f }),
              S.create(b, { autoGenerateKey: !1 }),
              s.a.createElement(w, {
                content: n,
                description: c,
                extra: l,
                header: p,
                meta: m,
              })
            )
          : s.a.createElement(j, r()({}, O, { className: f }), t)
      }
      ;(K.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'image',
        'meta',
      ]),
        (K.Content = w),
        (K.Description = j),
        (K.Extra = h),
        (K.Group = A),
        (K.Header = f),
        (K.Image = S),
        (K.Meta = N),
        (K.propTypes = {})
      var R = (t.a = K)
    },
    Mt1y: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ZeOK'),
        d = a('ICNK'),
        u = a('Y53p'),
        p = a('H+2d')
      function b(e) {
        var t = e.children,
          a = e.className,
          n = e.clearing,
          c = e.content,
          l = e.fitted,
          m = e.hidden,
          f = e.horizontal,
          O = e.inverted,
          j = e.section,
          v = e.vertical,
          h = i()(
            'ui',
            Object(o.a)(n, 'clearing'),
            Object(o.a)(l, 'fitted'),
            Object(o.a)(m, 'hidden'),
            Object(o.a)(f, 'horizontal'),
            Object(o.a)(O, 'inverted'),
            Object(o.a)(j, 'section'),
            Object(o.a)(v, 'vertical'),
            'divider',
            a
          ),
          g = Object(d.a)(b, e),
          N = Object(u.a)(b, e)
        return s.a.createElement(
          N,
          r()({}, g, { className: h }),
          p.b.isNil(t) ? c : t
        )
      }
      ;(b.handledProps = [
        'as',
        'children',
        'className',
        'clearing',
        'content',
        'fitted',
        'hidden',
        'horizontal',
        'inverted',
        'section',
        'vertical',
      ]),
        (b.propTypes = {}),
        (t.a = b)
    },
    QILm: function (e, t, a) {
      var n = a('8OQS')
      e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          r,
          c = n(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (a = i[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (c[a] = e[a]))
        }
        return c
      }
    },
    SqSx: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return a('nt2N')
        },
      ])
    },
    nt2N: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__N_SSG', function () {
          return Ae
        })
      var n = a('q1tI'),
        r = a.n(n),
        c = a('pdCo'),
        i = a('MPSb'),
        l = a('MqQV'),
        s = a('o0o1'),
        o = a.n(s)
      function d(e, t, a, n, r, c, i) {
        try {
          var l = e[c](i),
            s = l.value
        } catch (o) {
          return void a(o)
        }
        l.done ? t(s) : Promise.resolve(s).then(n, r)
      }
      var u = a('pVnL'),
        p = a.n(u),
        b = a('J4zp'),
        m = a.n(b),
        f = a('MVZn'),
        O = a.n(f),
        j = a('lwsE'),
        v = a.n(j),
        h = a('W8MJ'),
        g = a.n(h),
        N = a('a1gu'),
        y = a.n(N),
        w = a('Nsbk'),
        P = a.n(w),
        E = a('PJYZ'),
        x = a.n(E),
        k = a('7W2i'),
        I = a.n(k),
        A = a('lSNA'),
        C = a.n(A),
        T = a('ijCd'),
        S = a.n(T),
        K = a('3WF5'),
        R = a.n(K),
        M = a('Og4/'),
        _ = a.n(M),
        z = a('mwIZ'),
        G = a.n(z),
        Q = a('J2iB'),
        Z = a.n(Q),
        D = a('Z4ph'),
        H = a('TSYQ'),
        L = a.n(H),
        Y = (a('17x9'), a('ICNK')),
        F = a('526f'),
        J = a('ZeOK'),
        W = a('Y53p'),
        q = a('H+2d'),
        B = a('MZgk'),
        V = a('QetY'),
        U = a('D1pA'),
        X = (function (e) {
          function t() {
            var e, a
            v()(this, t)
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i]
            return (
              (a = y()(this, (e = P()(t)).call.apply(e, [this].concat(c)))),
              C()(x()(a), 'inputRef', Object(n.createRef)()),
              C()(x()(a), 'computeIcon', function () {
                var e = a.props,
                  t = e.loading,
                  n = e.icon
                return Z()(n) ? (t ? 'spinner' : void 0) : n
              }),
              C()(x()(a), 'computeTabIndex', function () {
                var e = a.props,
                  t = e.disabled,
                  n = e.tabIndex
                return Z()(n) ? (t ? -1 : void 0) : n
              }),
              C()(x()(a), 'focus', function () {
                return a.inputRef.current.focus()
              }),
              C()(x()(a), 'select', function () {
                return a.inputRef.current.select()
              }),
              C()(x()(a), 'handleChange', function (e) {
                var t = G()(e, 'target.value')
                _()(a.props, 'onChange', e, O()({}, a.props, { value: t }))
              }),
              C()(x()(a), 'handleChildOverrides', function (e, t) {
                return O()({}, t, e.props, {
                  ref: function (t) {
                    Object(D.a)(e.ref, t), (a.inputRef.current = t)
                  },
                })
              }),
              C()(x()(a), 'partitionProps', function () {
                var e = a.props,
                  n = e.disabled,
                  r = e.type,
                  c = a.computeTabIndex(),
                  i = Object(Y.a)(t, a.props),
                  l = Object(F.b)(i),
                  s = m()(l, 2),
                  o = s[0],
                  d = s[1]
                return [
                  O()({}, o, {
                    disabled: n,
                    type: r,
                    tabIndex: c,
                    onChange: a.handleChange,
                    ref: a.inputRef,
                  }),
                  d,
                ]
              }),
              a
            )
          }
          return (
            I()(t, e),
            g()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    a = this.props,
                    c = a.action,
                    i = a.actionPosition,
                    s = a.children,
                    o = a.className,
                    d = a.disabled,
                    u = a.error,
                    b = a.fluid,
                    f = a.focus,
                    O = a.icon,
                    j = a.iconPosition,
                    v = a.input,
                    h = a.inverted,
                    g = a.label,
                    N = a.labelPosition,
                    y = a.loading,
                    w = a.size,
                    P = a.transparent,
                    E = a.type,
                    x = L()(
                      'ui',
                      w,
                      Object(J.a)(d, 'disabled'),
                      Object(J.a)(u, 'error'),
                      Object(J.a)(b, 'fluid'),
                      Object(J.a)(f, 'focus'),
                      Object(J.a)(h, 'inverted'),
                      Object(J.a)(y, 'loading'),
                      Object(J.a)(P, 'transparent'),
                      Object(J.e)(i, 'action') || Object(J.a)(c, 'action'),
                      Object(J.e)(j, 'icon') || Object(J.a)(O || y, 'icon'),
                      Object(J.e)(N, 'labeled') || Object(J.a)(g, 'labeled'),
                      'input',
                      o
                    ),
                    k = Object(W.a)(t, this.props),
                    I = this.partitionProps(),
                    A = m()(I, 2),
                    C = A[0],
                    T = A[1]
                  if (!q.b.isNil(s)) {
                    var K = R()(n.Children.toArray(s), function (t) {
                      return 'input' !== t.type
                        ? t
                        : Object(n.cloneElement)(
                            t,
                            e.handleChildOverrides(t, C)
                          )
                    })
                    return r.a.createElement(k, p()({}, T, { className: x }), K)
                  }
                  var M = V.a.create(c, { autoGenerateKey: !1 }),
                    _ = l.a.create(g, {
                      defaultProps: {
                        className: L()('label', S()(N, 'corner') && N),
                      },
                      autoGenerateKey: !1,
                    })
                  return r.a.createElement(
                    k,
                    p()({}, T, { className: x }),
                    'left' === i && M,
                    'right' !== N && _,
                    Object(B.a)(v || E, {
                      defaultProps: C,
                      autoGenerateKey: !1,
                    }),
                    U.a.create(this.computeIcon(), { autoGenerateKey: !1 }),
                    'left' !== i && M,
                    'right' === N && _
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)
      C()(X, 'defaultProps', { type: 'text' }),
        C()(X, 'handledProps', [
          'action',
          'actionPosition',
          'as',
          'children',
          'className',
          'disabled',
          'error',
          'fluid',
          'focus',
          'icon',
          'iconPosition',
          'input',
          'inverted',
          'label',
          'labelPosition',
          'loading',
          'onChange',
          'size',
          'tabIndex',
          'transparent',
          'type',
        ]),
        (X.propTypes = {}),
        (X.create = Object(B.d)(X, function (e) {
          return { type: e }
        }))
      var $ = X,
        ee = a('+lUf'),
        te = a('laJZ'),
        ae = r.a.createElement,
        ne = function (e) {
          var t = ''
          return e < 1 && (t = "Can't be blank"), t
        },
        re = function (e) {
          var t = e.product,
            a = Object(n.useState)(!1),
            c = a[0],
            i = a[1],
            l = Object(n.useState)(''),
            s = l[0],
            u = l[1],
            p = Object(n.useState)(1),
            b = p[0],
            m = p[1],
            f = Object(n.useState)(!1),
            O = f[0],
            j = f[1],
            v = Object(te.c)().addToCart,
            h = (function () {
              var e,
                a =
                  ((e = o.a.mark(function e() {
                    var a
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(a = ne(b)),
                              u(a),
                              a ||
                                (i(!0),
                                new Promise(function (e, t) {
                                  window.setTimeout(e, 600)
                                })
                                  .then(function () {
                                    v(t, b),
                                      i(!1),
                                      m(b),
                                      j(!0),
                                      setTimeout(function () {
                                        j(!1)
                                      }, 1e3)
                                  })
                                  .catch(function (e) {
                                    u('Error: '.concat(e) || !1), i(!1)
                                  }))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })),
                  function () {
                    var t = this,
                      a = arguments
                    return new Promise(function (n, r) {
                      var c = e.apply(t, a)
                      function i(e) {
                        d(c, n, r, i, l, 'next', e)
                      }
                      function l(e) {
                        d(c, n, r, i, l, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return a.apply(this, arguments)
              }
            })()
          return ae(
            r.a.Fragment,
            null,
            ae($, {
              type: 'number',
              placeholder: 'Quantity',
              value: b,
              min: 1,
              step: 1,
              error: !!s,
              onChange: function (e) {
                var t = e.target
                return m(parseInt(t.value, 10))
              },
              action: {
                color: 'green',
                content: 'Add to Cart',
                icon: 'plus cart',
                onClick: h,
                loading: c,
                disabled: c,
              },
            }),
            s &&
              ae('div', { style: { color: 'red', position: 'absolute' } }, s),
            ae(
              ee.a,
              { duration: { hide: 500, show: 500 }, visible: O },
              ae(
                'div',
                { style: { color: 'green', position: 'absolute' } },
                ae(U.a, { name: 'check' }),
                'Added to cart'
              )
            )
          )
        },
        ce = a('Ff2n'),
        ie = a('MX0m'),
        le = a.n(ie),
        se = a('aQu0'),
        oe = a('Mt1y')
      a('Wt1U')
      function de(e) {
        var t = e.children,
          a = e.className,
          n = L()(a),
          c = Object(Y.a)(de, e),
          i = Object(W.a)(de, e)
        return r.a.createElement(i, p()({}, c, { className: n }), t)
      }
      ;(de.handledProps = ['as', 'children', 'className']),
        (de.defaultProps = { as: 'tbody' }),
        (de.propTypes = {})
      var ue = de
      function pe(e) {
        var t = e.active,
          a = e.children,
          n = e.className,
          c = e.collapsing,
          i = e.content,
          l = e.disabled,
          s = e.error,
          o = e.icon,
          d = e.negative,
          u = e.positive,
          b = e.selectable,
          m = e.singleLine,
          f = e.textAlign,
          O = e.verticalAlign,
          j = e.warning,
          v = e.width,
          h = L()(
            Object(J.a)(t, 'active'),
            Object(J.a)(c, 'collapsing'),
            Object(J.a)(l, 'disabled'),
            Object(J.a)(s, 'error'),
            Object(J.a)(d, 'negative'),
            Object(J.a)(u, 'positive'),
            Object(J.a)(b, 'selectable'),
            Object(J.a)(m, 'single line'),
            Object(J.a)(j, 'warning'),
            Object(J.d)(f),
            Object(J.f)(O),
            Object(J.g)(v, 'wide'),
            n
          ),
          g = Object(Y.a)(pe, e),
          N = Object(W.a)(pe, e)
        return q.b.isNil(a)
          ? r.a.createElement(N, p()({}, g, { className: h }), U.a.create(o), i)
          : r.a.createElement(N, p()({}, g, { className: h }), a)
      }
      ;(pe.handledProps = [
        'active',
        'as',
        'children',
        'className',
        'collapsing',
        'content',
        'disabled',
        'error',
        'icon',
        'negative',
        'positive',
        'selectable',
        'singleLine',
        'textAlign',
        'verticalAlign',
        'warning',
        'width',
      ]),
        (pe.defaultProps = { as: 'td' }),
        (pe.propTypes = {}),
        (pe.create = Object(B.d)(pe, function (e) {
          return { content: e }
        }))
      var be = pe
      function me(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.fullWidth,
          i = L()(Object(J.a)(c, 'full-width'), a),
          l = Object(Y.a)(me, e),
          s = Object(W.a)(me, e)
        return r.a.createElement(
          s,
          p()({}, l, { className: i }),
          q.b.isNil(t) ? n : t
        )
      }
      ;(me.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'fullWidth',
      ]),
        (me.defaultProps = { as: 'thead' }),
        (me.propTypes = {})
      var fe = me
      function Oe(e) {
        var t = e.as,
          a = Object(Y.a)(Oe, e)
        return r.a.createElement(fe, p()({}, a, { as: t }))
      }
      ;(Oe.handledProps = ['as']),
        (Oe.propTypes = {}),
        (Oe.defaultProps = { as: 'tfoot' })
      var je = Oe
      function ve(e) {
        var t = e.as,
          a = e.className,
          n = e.sorted,
          c = L()(Object(J.e)(n, 'sorted'), a),
          i = Object(Y.a)(ve, e)
        return r.a.createElement(be, p()({}, i, { as: t, className: c }))
      }
      ;(ve.handledProps = ['as', 'className', 'sorted']),
        (ve.propTypes = {}),
        (ve.defaultProps = { as: 'th' })
      var he = ve
      function ge(e) {
        var t = e.active,
          a = e.cellAs,
          n = e.cells,
          c = e.children,
          i = e.className,
          l = e.disabled,
          s = e.error,
          o = e.negative,
          d = e.positive,
          u = e.textAlign,
          b = e.verticalAlign,
          m = e.warning,
          f = L()(
            Object(J.a)(t, 'active'),
            Object(J.a)(l, 'disabled'),
            Object(J.a)(s, 'error'),
            Object(J.a)(o, 'negative'),
            Object(J.a)(d, 'positive'),
            Object(J.a)(m, 'warning'),
            Object(J.d)(u),
            Object(J.f)(b),
            i
          ),
          O = Object(Y.a)(ge, e),
          j = Object(W.a)(ge, e)
        return q.b.isNil(c)
          ? r.a.createElement(
              j,
              p()({}, O, { className: f }),
              R()(n, function (e) {
                return be.create(e, { defaultProps: { as: a } })
              })
            )
          : r.a.createElement(j, p()({}, O, { className: f }), c)
      }
      ;(ge.handledProps = [
        'active',
        'as',
        'cellAs',
        'cells',
        'children',
        'className',
        'disabled',
        'error',
        'negative',
        'positive',
        'textAlign',
        'verticalAlign',
        'warning',
      ]),
        (ge.defaultProps = { as: 'tr', cellAs: 'td' }),
        (ge.propTypes = {}),
        (ge.create = Object(B.d)(ge, function (e) {
          return { cells: e }
        }))
      var Ne = ge
      function ye(e) {
        var t = e.attached,
          a = e.basic,
          n = e.celled,
          c = e.children,
          i = e.className,
          l = e.collapsing,
          s = e.color,
          o = e.columns,
          d = e.compact,
          u = e.definition,
          b = e.fixed,
          m = e.footerRow,
          f = e.headerRow,
          O = e.headerRows,
          j = e.inverted,
          v = e.padded,
          h = e.renderBodyRow,
          g = e.selectable,
          N = e.singleLine,
          y = e.size,
          w = e.sortable,
          P = e.stackable,
          E = e.striped,
          x = e.structured,
          k = e.tableData,
          I = e.textAlign,
          A = e.unstackable,
          C = e.verticalAlign,
          T = L()(
            'ui',
            s,
            y,
            Object(J.a)(n, 'celled'),
            Object(J.a)(l, 'collapsing'),
            Object(J.a)(u, 'definition'),
            Object(J.a)(b, 'fixed'),
            Object(J.a)(j, 'inverted'),
            Object(J.a)(g, 'selectable'),
            Object(J.a)(N, 'single line'),
            Object(J.a)(w, 'sortable'),
            Object(J.a)(P, 'stackable'),
            Object(J.a)(E, 'striped'),
            Object(J.a)(x, 'structured'),
            Object(J.a)(A, 'unstackable'),
            Object(J.b)(t, 'attached'),
            Object(J.b)(a, 'basic'),
            Object(J.b)(d, 'compact'),
            Object(J.b)(v, 'padded'),
            Object(J.d)(I),
            Object(J.f)(C),
            Object(J.g)(o, 'column'),
            'table',
            i
          ),
          S = Object(Y.a)(ye, e),
          K = Object(W.a)(ye, e)
        if (!q.b.isNil(c))
          return r.a.createElement(K, p()({}, S, { className: T }), c)
        var M = { defaultProps: { cellAs: 'th' } },
          _ =
            (f || O) &&
            r.a.createElement(
              fe,
              null,
              Ne.create(f, M),
              R()(O, function (e) {
                return Ne.create(e, M)
              })
            )
        return r.a.createElement(
          K,
          p()({}, S, { className: T }),
          _,
          r.a.createElement(
            ue,
            null,
            h &&
              R()(k, function (e, t) {
                return Ne.create(h(e, t))
              })
          ),
          m && r.a.createElement(je, null, Ne.create(m))
        )
      }
      ;(ye.handledProps = [
        'as',
        'attached',
        'basic',
        'celled',
        'children',
        'className',
        'collapsing',
        'color',
        'columns',
        'compact',
        'definition',
        'fixed',
        'footerRow',
        'headerRow',
        'headerRows',
        'inverted',
        'padded',
        'renderBodyRow',
        'selectable',
        'singleLine',
        'size',
        'sortable',
        'stackable',
        'striped',
        'structured',
        'tableData',
        'textAlign',
        'unstackable',
        'verticalAlign',
      ]),
        (ye.defaultProps = { as: 'table' }),
        (ye.propTypes = {}),
        (ye.Body = ue),
        (ye.Cell = be),
        (ye.Footer = je),
        (ye.Header = fe),
        (ye.HeaderCell = he),
        (ye.Row = Ne)
      var we = ye,
        Pe = r.a.createElement,
        Ee = function (e) {
          var t = e.description,
            a = Object(ce.a)(e, ['description']),
            n = { Ingredients: [] }
          Object.keys(a).forEach(function (e) {
            if (e.includes('strIngredient') || e.includes('strMeasure')) {
              var t = e.replace('strIngredient', '').replace('strMeasure', '')
              n.Ingredients[t] || (n.Ingredients[t] = {}),
                (n.Ingredients[t][e.replace(t, '')] = a[e])
            }
          })
          var r = n.Ingredients.filter(function (e) {
            return e.strIngredient
          }).map(function (e) {
            return (e.strMeasure ? e.strMeasure + ', ' : '') + e.strIngredient
          })
          console.log({ ingredients: r })
          var c = {
            strDrink: 'Drink Name',
            strDrinkAlternate: '',
            strVideo: '',
            strCategory: '',
            strIBA: '',
            strAlcoholic: '',
            strGlass: '',
            strInstructions: '',
          }
          return Pe(
            'section',
            { className: 'jsx-95276425 container' },
            Pe(se.a, { as: 'h3' }, 'About this drink'),
            Pe('p', { className: 'jsx-95276425' }, t),
            Pe(oe.a, null),
            Pe(
              we,
              { celled: !0 },
              Pe(
                we.Header,
                null,
                Pe(
                  we.Row,
                  null,
                  Pe(we.HeaderCell, { colSpan: '2' }, 'Drink Details')
                )
              ),
              Pe(
                we.Body,
                null,
                Object.keys(a).map(function (e) {
                  return (
                    Object.keys(c).includes(e) &&
                    a[e] &&
                    Pe(
                      we.Row,
                      { key: e },
                      Pe(
                        we.Cell,
                        { className: 'attr-name' },
                        (function (e) {
                          return '' == c[e].trim()
                            ? e
                                .replace(/str/, '')
                                .replace(/([a-z])([A-Z])/g, '$1 $2')
                            : c[e]
                        })(e)
                      ),
                      Pe(we.Cell, null, a[e])
                    )
                  )
                }),
                Pe(
                  we.Row,
                  null,
                  Pe(we.Cell, null, 'Ingredients'),
                  Pe(
                    we.Cell,
                    null,
                    r.map(function (e) {
                      return Pe('div', { className: 'jsx-95276425' }, e)
                    })
                  )
                )
              )
            ),
            Pe(le.a, { id: '95276425' }, [
              '.container.jsx-95276425 .attr-name{text-transform:capitalize;white-space:nowrap;}',
            ])
          )
        },
        xe = r.a.createElement,
        ke = function (e) {
          var t = e.product
          return xe(
            r.a.Fragment,
            null,
            xe(
              i.a.Group,
              { as: 'section' },
              xe(
                i.a,
                { style: { alignItems: 'center' } },
                xe(
                  i.a.Image,
                  { size: 'medium' },
                  xe('img', { src: t.image, alt: t.name })
                ),
                xe(
                  i.a.Content,
                  null,
                  xe(i.a.Header, { as: 'h1' }, t.name),
                  xe(
                    i.a.Description,
                    null,
                    xe('p', null, 'US$ ', t.price.toFixed(2)),
                    xe(l.a, null, 'SKU: '.concat(t.sku))
                  ),
                  xe(i.a.Extra, null, xe(re, { product: t }))
                )
              )
            ),
            xe(Ee, t.attributes)
          )
        },
        Ie = r.a.createElement,
        Ae = !0
      t.default = function (e) {
        var t = e.product
        return Ie(c.a, null, null == t ? null : Ie(ke, { product: t }))
      }
    },
  },
  [['SqSx', 0, 2, 1, 3, 4]],
])
