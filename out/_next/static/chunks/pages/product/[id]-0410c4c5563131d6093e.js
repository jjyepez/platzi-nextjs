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
      function f(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('header', a),
          l = Object(o.a)(f, e),
          p = Object(d.a)(f, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(f.handledProps = ['as', 'children', 'className', 'content']),
        (f.propTypes = {}),
        (f.create = Object(b.d)(f, function (e) {
          return { content: e }
        }))
      var m = f
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
          f = e.meta,
          O = e.verticalAlign,
          v = i()(Object(p.f)(O), 'content', a),
          g = Object(o.a)(y, e),
          w = Object(d.a)(y, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              w,
              r()({}, g, { className: v }),
              m.create(b, { autoGenerateKey: !1 }),
              N.create(f, { autoGenerateKey: !1 }),
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
        E = a('QILm'),
        P = a.n(E),
        x = a('3WF5'),
        k = a.n(x)
      function I(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.divided,
          l = e.items,
          b = e.link,
          f = e.relaxed,
          m = e.unstackable,
          O = i()(
            'ui',
            Object(p.a)(c, 'divided'),
            Object(p.a)(b, 'link'),
            Object(p.a)(m, 'unstackable'),
            Object(p.b)(f, 'relaxed'),
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
            a = P()(e, ['childKey']),
            n = t || [a.content, a.description, a.header, a.meta].join('-')
          return s.a.createElement(K, r()({}, a, { key: n }))
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
      function R(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          p = e.header,
          b = e.image,
          f = e.meta,
          m = i()('item', a),
          O = Object(o.a)(R, e),
          j = Object(d.a)(R, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              j,
              r()({}, O, { className: m }),
              S.create(b, { autoGenerateKey: !1 }),
              s.a.createElement(w, {
                content: n,
                description: c,
                extra: l,
                header: p,
                meta: f,
              })
            )
          : s.a.createElement(j, r()({}, O, { className: m }), t)
      }
      ;(R.handledProps = [
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
        (R.Content = w),
        (R.Description = j),
        (R.Extra = h),
        (R.Group = A),
        (R.Header = m),
        (R.Image = S),
        (R.Meta = N),
        (R.propTypes = {})
      var K = (t.a = R)
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
          f = e.hidden,
          m = e.horizontal,
          O = e.inverted,
          j = e.section,
          v = e.vertical,
          h = i()(
            'ui',
            Object(o.a)(n, 'clearing'),
            Object(o.a)(l, 'fitted'),
            Object(o.a)(f, 'hidden'),
            Object(o.a)(m, 'horizontal'),
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
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        c = a('nOHt'),
        i = a('vcXL'),
        l = a.n(i),
        s = a('pdCo'),
        o = a('MPSb'),
        d = a('MqQV'),
        u = a('o0o1'),
        p = a.n(u)
      function b(e, t, a, n, r, c, i) {
        try {
          var l = e[c](i),
            s = l.value
        } catch (o) {
          return void a(o)
        }
        l.done ? t(s) : Promise.resolve(s).then(n, r)
      }
      var f = a('pVnL'),
        m = a.n(f),
        O = a('J4zp'),
        j = a.n(O),
        v = a('MVZn'),
        h = a.n(v),
        g = a('lwsE'),
        N = a.n(g),
        y = a('W8MJ'),
        w = a.n(y),
        E = a('a1gu'),
        P = a.n(E),
        x = a('Nsbk'),
        k = a.n(x),
        I = a('PJYZ'),
        A = a.n(I),
        C = a('7W2i'),
        T = a.n(C),
        S = a('lSNA'),
        R = a.n(S),
        K = a('ijCd'),
        M = a.n(K),
        z = a('3WF5'),
        G = a.n(z),
        _ = a('Og4/'),
        L = a.n(_),
        Q = a('mwIZ'),
        Z = a.n(Q),
        D = a('J2iB'),
        H = a.n(D),
        Y = a('Z4ph'),
        q = a('TSYQ'),
        F = a.n(q),
        J = (a('17x9'), a('ICNK')),
        W = a('526f'),
        B = a('ZeOK'),
        V = a('Y53p'),
        X = a('H+2d'),
        U = a('MZgk'),
        $ = a('QetY'),
        ee = a('D1pA'),
        te = (function (e) {
          function t() {
            var e, a
            N()(this, t)
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i]
            return (
              (a = P()(this, (e = k()(t)).call.apply(e, [this].concat(c)))),
              R()(A()(a), 'inputRef', Object(n.createRef)()),
              R()(A()(a), 'computeIcon', function () {
                var e = a.props,
                  t = e.loading,
                  n = e.icon
                return H()(n) ? (t ? 'spinner' : void 0) : n
              }),
              R()(A()(a), 'computeTabIndex', function () {
                var e = a.props,
                  t = e.disabled,
                  n = e.tabIndex
                return H()(n) ? (t ? -1 : void 0) : n
              }),
              R()(A()(a), 'focus', function () {
                return a.inputRef.current.focus()
              }),
              R()(A()(a), 'select', function () {
                return a.inputRef.current.select()
              }),
              R()(A()(a), 'handleChange', function (e) {
                var t = Z()(e, 'target.value')
                L()(a.props, 'onChange', e, h()({}, a.props, { value: t }))
              }),
              R()(A()(a), 'handleChildOverrides', function (e, t) {
                return h()({}, t, e.props, {
                  ref: function (t) {
                    Object(Y.a)(e.ref, t), (a.inputRef.current = t)
                  },
                })
              }),
              R()(A()(a), 'partitionProps', function () {
                var e = a.props,
                  n = e.disabled,
                  r = e.type,
                  c = a.computeTabIndex(),
                  i = Object(J.a)(t, a.props),
                  l = Object(W.b)(i),
                  s = j()(l, 2),
                  o = s[0],
                  d = s[1]
                return [
                  h()({}, o, {
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
            T()(t, e),
            w()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    a = this.props,
                    c = a.action,
                    i = a.actionPosition,
                    l = a.children,
                    s = a.className,
                    o = a.disabled,
                    u = a.error,
                    p = a.fluid,
                    b = a.focus,
                    f = a.icon,
                    O = a.iconPosition,
                    v = a.input,
                    h = a.inverted,
                    g = a.label,
                    N = a.labelPosition,
                    y = a.loading,
                    w = a.size,
                    E = a.transparent,
                    P = a.type,
                    x = F()(
                      'ui',
                      w,
                      Object(B.a)(o, 'disabled'),
                      Object(B.a)(u, 'error'),
                      Object(B.a)(p, 'fluid'),
                      Object(B.a)(b, 'focus'),
                      Object(B.a)(h, 'inverted'),
                      Object(B.a)(y, 'loading'),
                      Object(B.a)(E, 'transparent'),
                      Object(B.e)(i, 'action') || Object(B.a)(c, 'action'),
                      Object(B.e)(O, 'icon') || Object(B.a)(f || y, 'icon'),
                      Object(B.e)(N, 'labeled') || Object(B.a)(g, 'labeled'),
                      'input',
                      s
                    ),
                    k = Object(V.a)(t, this.props),
                    I = this.partitionProps(),
                    A = j()(I, 2),
                    C = A[0],
                    T = A[1]
                  if (!X.b.isNil(l)) {
                    var S = G()(n.Children.toArray(l), function (t) {
                      return 'input' !== t.type
                        ? t
                        : Object(n.cloneElement)(
                            t,
                            e.handleChildOverrides(t, C)
                          )
                    })
                    return r.a.createElement(k, m()({}, T, { className: x }), S)
                  }
                  var R = $.a.create(c, { autoGenerateKey: !1 }),
                    K = d.a.create(g, {
                      defaultProps: {
                        className: F()('label', M()(N, 'corner') && N),
                      },
                      autoGenerateKey: !1,
                    })
                  return r.a.createElement(
                    k,
                    m()({}, T, { className: x }),
                    'left' === i && R,
                    'right' !== N && K,
                    Object(U.a)(v || P, {
                      defaultProps: C,
                      autoGenerateKey: !1,
                    }),
                    ee.a.create(this.computeIcon(), { autoGenerateKey: !1 }),
                    'left' !== i && R,
                    'right' === N && K
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)
      R()(te, 'defaultProps', { type: 'text' }),
        R()(te, 'handledProps', [
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
        (te.propTypes = {}),
        (te.create = Object(U.d)(te, function (e) {
          return { type: e }
        }))
      var ae = te,
        ne = a('+lUf'),
        re = a('laJZ'),
        ce = r.a.createElement,
        ie = function (e) {
          var t = ''
          return e < 1 && (t = "Can't be blank"), t
        },
        le = function (e) {
          var t = e.product,
            a = Object(n.useState)(!1),
            c = a[0],
            i = a[1],
            l = Object(n.useState)(''),
            s = l[0],
            o = l[1],
            d = Object(n.useState)(1),
            u = d[0],
            f = d[1],
            m = Object(n.useState)(!1),
            O = m[0],
            j = m[1],
            v = Object(re.c)().addToCart,
            h = (function () {
              var e,
                a =
                  ((e = p.a.mark(function e() {
                    var a
                    return p.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(a = ie(u)),
                              o(a),
                              a ||
                                (i(!0),
                                new Promise(function (e, t) {
                                  window.setTimeout(e, 600)
                                })
                                  .then(function () {
                                    v(t, u),
                                      i(!1),
                                      f(u),
                                      j(!0),
                                      setTimeout(function () {
                                        j(!1)
                                      }, 1e3)
                                  })
                                  .catch(function (e) {
                                    o('Error: '.concat(e) || !1), i(!1)
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
                        b(c, n, r, i, l, 'next', e)
                      }
                      function l(e) {
                        b(c, n, r, i, l, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return a.apply(this, arguments)
              }
            })()
          return ce(
            r.a.Fragment,
            null,
            ce(ae, {
              type: 'number',
              placeholder: 'Quantity',
              value: u,
              min: 1,
              step: 1,
              error: !!s,
              onChange: function (e) {
                var t = e.target
                return f(parseInt(t.value, 10))
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
              ce('div', { style: { color: 'red', position: 'absolute' } }, s),
            ce(
              ne.a,
              { duration: { hide: 500, show: 500 }, visible: O },
              ce(
                'div',
                { style: { color: 'green', position: 'absolute' } },
                ce(ee.a, { name: 'check' }),
                'Added to cart'
              )
            )
          )
        },
        se = a('Ff2n'),
        oe = a('MX0m'),
        de = a.n(oe),
        ue = a('aQu0'),
        pe = a('Mt1y')
      a('Wt1U')
      function be(e) {
        var t = e.children,
          a = e.className,
          n = F()(a),
          c = Object(J.a)(be, e),
          i = Object(V.a)(be, e)
        return r.a.createElement(i, m()({}, c, { className: n }), t)
      }
      ;(be.handledProps = ['as', 'children', 'className']),
        (be.defaultProps = { as: 'tbody' }),
        (be.propTypes = {})
      var fe = be
      function me(e) {
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
          p = e.selectable,
          b = e.singleLine,
          f = e.textAlign,
          O = e.verticalAlign,
          j = e.warning,
          v = e.width,
          h = F()(
            Object(B.a)(t, 'active'),
            Object(B.a)(c, 'collapsing'),
            Object(B.a)(l, 'disabled'),
            Object(B.a)(s, 'error'),
            Object(B.a)(d, 'negative'),
            Object(B.a)(u, 'positive'),
            Object(B.a)(p, 'selectable'),
            Object(B.a)(b, 'single line'),
            Object(B.a)(j, 'warning'),
            Object(B.d)(f),
            Object(B.f)(O),
            Object(B.g)(v, 'wide'),
            n
          ),
          g = Object(J.a)(me, e),
          N = Object(V.a)(me, e)
        return X.b.isNil(a)
          ? r.a.createElement(
              N,
              m()({}, g, { className: h }),
              ee.a.create(o),
              i
            )
          : r.a.createElement(N, m()({}, g, { className: h }), a)
      }
      ;(me.handledProps = [
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
        (me.defaultProps = { as: 'td' }),
        (me.propTypes = {}),
        (me.create = Object(U.d)(me, function (e) {
          return { content: e }
        }))
      var Oe = me
      function je(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.fullWidth,
          i = F()(Object(B.a)(c, 'full-width'), a),
          l = Object(J.a)(je, e),
          s = Object(V.a)(je, e)
        return r.a.createElement(
          s,
          m()({}, l, { className: i }),
          X.b.isNil(t) ? n : t
        )
      }
      ;(je.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'fullWidth',
      ]),
        (je.defaultProps = { as: 'thead' }),
        (je.propTypes = {})
      var ve = je
      function he(e) {
        var t = e.as,
          a = Object(J.a)(he, e)
        return r.a.createElement(ve, m()({}, a, { as: t }))
      }
      ;(he.handledProps = ['as']),
        (he.propTypes = {}),
        (he.defaultProps = { as: 'tfoot' })
      var ge = he
      function Ne(e) {
        var t = e.as,
          a = e.className,
          n = e.sorted,
          c = F()(Object(B.e)(n, 'sorted'), a),
          i = Object(J.a)(Ne, e)
        return r.a.createElement(Oe, m()({}, i, { as: t, className: c }))
      }
      ;(Ne.handledProps = ['as', 'className', 'sorted']),
        (Ne.propTypes = {}),
        (Ne.defaultProps = { as: 'th' })
      var ye = Ne
      function we(e) {
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
          p = e.verticalAlign,
          b = e.warning,
          f = F()(
            Object(B.a)(t, 'active'),
            Object(B.a)(l, 'disabled'),
            Object(B.a)(s, 'error'),
            Object(B.a)(o, 'negative'),
            Object(B.a)(d, 'positive'),
            Object(B.a)(b, 'warning'),
            Object(B.d)(u),
            Object(B.f)(p),
            i
          ),
          O = Object(J.a)(we, e),
          j = Object(V.a)(we, e)
        return X.b.isNil(c)
          ? r.a.createElement(
              j,
              m()({}, O, { className: f }),
              G()(n, function (e) {
                return Oe.create(e, { defaultProps: { as: a } })
              })
            )
          : r.a.createElement(j, m()({}, O, { className: f }), c)
      }
      ;(we.handledProps = [
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
        (we.defaultProps = { as: 'tr', cellAs: 'td' }),
        (we.propTypes = {}),
        (we.create = Object(U.d)(we, function (e) {
          return { cells: e }
        }))
      var Ee = we
      function Pe(e) {
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
          p = e.fixed,
          b = e.footerRow,
          f = e.headerRow,
          O = e.headerRows,
          j = e.inverted,
          v = e.padded,
          h = e.renderBodyRow,
          g = e.selectable,
          N = e.singleLine,
          y = e.size,
          w = e.sortable,
          E = e.stackable,
          P = e.striped,
          x = e.structured,
          k = e.tableData,
          I = e.textAlign,
          A = e.unstackable,
          C = e.verticalAlign,
          T = F()(
            'ui',
            s,
            y,
            Object(B.a)(n, 'celled'),
            Object(B.a)(l, 'collapsing'),
            Object(B.a)(u, 'definition'),
            Object(B.a)(p, 'fixed'),
            Object(B.a)(j, 'inverted'),
            Object(B.a)(g, 'selectable'),
            Object(B.a)(N, 'single line'),
            Object(B.a)(w, 'sortable'),
            Object(B.a)(E, 'stackable'),
            Object(B.a)(P, 'striped'),
            Object(B.a)(x, 'structured'),
            Object(B.a)(A, 'unstackable'),
            Object(B.b)(t, 'attached'),
            Object(B.b)(a, 'basic'),
            Object(B.b)(d, 'compact'),
            Object(B.b)(v, 'padded'),
            Object(B.d)(I),
            Object(B.f)(C),
            Object(B.g)(o, 'column'),
            'table',
            i
          ),
          S = Object(J.a)(Pe, e),
          R = Object(V.a)(Pe, e)
        if (!X.b.isNil(c))
          return r.a.createElement(R, m()({}, S, { className: T }), c)
        var K = { defaultProps: { cellAs: 'th' } },
          M =
            (f || O) &&
            r.a.createElement(
              ve,
              null,
              Ee.create(f, K),
              G()(O, function (e) {
                return Ee.create(e, K)
              })
            )
        return r.a.createElement(
          R,
          m()({}, S, { className: T }),
          M,
          r.a.createElement(
            fe,
            null,
            h &&
              G()(k, function (e, t) {
                return Ee.create(h(e, t))
              })
          ),
          b && r.a.createElement(ge, null, Ee.create(b))
        )
      }
      ;(Pe.handledProps = [
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
        (Pe.defaultProps = { as: 'table' }),
        (Pe.propTypes = {}),
        (Pe.Body = fe),
        (Pe.Cell = Oe),
        (Pe.Footer = ge),
        (Pe.Header = ve),
        (Pe.HeaderCell = ye),
        (Pe.Row = Ee)
      var xe = Pe,
        ke = r.a.createElement,
        Ie = function (e) {
          var t = e.description,
            a = Object(se.a)(e, ['description']),
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
          return ke(
            'section',
            { className: 'jsx-95276425 container' },
            ke(ue.a, { as: 'h3' }, 'About this drink'),
            ke('p', { className: 'jsx-95276425' }, t),
            ke(pe.a, null),
            ke(
              xe,
              { celled: !0 },
              ke(
                xe.Header,
                null,
                ke(
                  xe.Row,
                  null,
                  ke(xe.HeaderCell, { colSpan: '2' }, 'Drink Details')
                )
              ),
              ke(
                xe.Body,
                null,
                Object.keys(a).map(function (e) {
                  return (
                    Object.keys(c).includes(e) &&
                    a[e] &&
                    ke(
                      xe.Row,
                      { key: e },
                      ke(
                        xe.Cell,
                        { className: 'attr-name' },
                        (function (e) {
                          return '' == c[e].trim()
                            ? e
                                .replace(/str/, '')
                                .replace(/([a-z])([A-Z])/g, '$1 $2')
                            : c[e]
                        })(e)
                      ),
                      ke(xe.Cell, null, a[e])
                    )
                  )
                }),
                ke(
                  xe.Row,
                  null,
                  ke(xe.Cell, null, 'Ingredients'),
                  ke(
                    xe.Cell,
                    null,
                    r.map(function (e) {
                      return ke('div', { className: 'jsx-95276425' }, e)
                    })
                  )
                )
              )
            ),
            ke(de.a, { id: '95276425' }, [
              '.container.jsx-95276425 .attr-name{text-transform:capitalize;white-space:nowrap;}',
            ])
          )
        },
        Ae = r.a.createElement,
        Ce = function (e) {
          var t = e.product
          return Ae(
            r.a.Fragment,
            null,
            Ae(
              o.a.Group,
              { as: 'section' },
              Ae(
                o.a,
                { style: { alignItems: 'center' } },
                Ae(
                  o.a.Image,
                  { size: 'medium' },
                  Ae('img', { src: t.image, alt: t.name })
                ),
                Ae(
                  o.a.Content,
                  null,
                  Ae(o.a.Header, { as: 'h1' }, t.name),
                  Ae(
                    o.a.Description,
                    null,
                    Ae('p', null, 'US$ ', t.price.toFixed(2)),
                    Ae(d.a, null, 'SKU: '.concat(t.sku))
                  ),
                  Ae(o.a.Extra, null, Ae(le, { product: t }))
                )
              )
            ),
            Ae(Ie, t.attributes)
          )
        },
        Te = r.a.createElement
      t.default = function () {
        var e = Object(c.useRouter)().query,
          t = Object(n.useState)(null),
          a = t[0],
          r = t[1]
        return (
          Object(n.useEffect)(
            function () {
              e.id &&
                l()('/api/avo/'.concat(e.id))
                  .then(function (e) {
                    return e.json()
                  })
                  .then(function (e) {
                    r(e)
                  })
            },
            [e.id]
          ),
          Te(s.a, null, null == a ? null : Te(Ce, { product: a }))
        )
      }
    },
    vcXL: function (e, t, a) {
      'use strict'
      var n = self.fetch.bind(self)
      ;(e.exports = n), (e.exports.default = e.exports)
    },
  },
  [['SqSx', 0, 2, 1, 3, 4]],
])
