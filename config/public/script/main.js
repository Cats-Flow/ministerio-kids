function ac(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var h0 = { exports: {} },
  Tl = {},
  v0 = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  fc = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  pc = Symbol.for("react.context"),
  mc = Symbol.for("react.forward_ref"),
  hc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.memo"),
  yc = Symbol.for("react.lazy"),
  Ea = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ea && e[Ea]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var y0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  g0 = Object.assign,
  w0 = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = w0),
    (this.updater = n || y0);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function E0() {}
E0.prototype = wn.prototype;
function Ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = w0),
    (this.updater = n || y0);
}
var ki = (Ai.prototype = new E0());
ki.constructor = Ai;
g0(ki, wn.prototype);
ki.isPureReactComponent = !0;
var Sa = Array.isArray,
  S0 = Object.prototype.hasOwnProperty,
  Ci = { current: null },
  A0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function k0(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      S0.call(t, r) && !A0.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: pr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ci.current,
  };
}
function wc(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function Ec(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Aa = /\/+/g;
function Yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ec("" + e.key)
    : t.toString(36);
}
function Fr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case uc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Yl(i, 0) : r),
      Sa(l)
        ? ((n = ""),
          e != null && (n = e.replace(Aa, "$&/") + "/"),
          Fr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (xi(l) &&
            (l = wc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Aa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Sa(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Yl(o, a);
      i += Fr(o, t, n, u, l);
    }
  else if (((u = gc(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Yl(o, a++)), (i += Fr(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Sc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  $r = { transition: null },
  Ac = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: Ci,
  };
function C0() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: Er,
  forEach: function (e, t, n) {
    Er(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Er(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Er(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = wn;
R.Fragment = sc;
R.Profiler = fc;
R.PureComponent = Ai;
R.StrictMode = cc;
R.Suspense = hc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ac;
R.act = C0;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = g0({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ci.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      S0.call(t, u) &&
        !A0.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = k0;
R.createFactory = function (e) {
  var t = k0.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: mc, render: e };
};
R.isValidElement = xi;
R.lazy = function (e) {
  return { $$typeof: yc, _payload: { _status: -1, _result: e }, _init: Sc };
};
R.memo = function (e, t) {
  return { $$typeof: vc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
R.unstable_act = C0;
R.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
R.useContext = function (e) {
  return de.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
R.useId = function () {
  return de.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return de.current.useRef(e);
};
R.useState = function (e) {
  return de.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return de.current.useTransition();
};
R.version = "18.3.1";
v0.exports = R;
var P = v0.exports;
const c = dr(P),
  kc = ac({ __proto__: null, default: c }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = P,
  xc = Symbol.for("react.element"),
  Tc = Symbol.for("react.fragment"),
  Pc = Object.prototype.hasOwnProperty,
  _c = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function x0(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Pc.call(t, r) && !Oc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: xc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: _c.current,
  };
}
Tl.Fragment = Tc;
Tl.jsx = x0;
Tl.jsxs = x0;
h0.exports = Tl;
var S = h0.exports,
  Ao = {},
  T0 = { exports: {} },
  xe = {},
  P0 = { exports: {} },
  _0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, N) {
    var L = T.length;
    T.push(N);
    e: for (; 0 < L; ) {
      var G = (L - 1) >>> 1,
        ee = T[G];
      if (0 < l(ee, N)) (T[G] = N), (T[L] = ee), (L = G);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var N = T[0],
      L = T.pop();
    if (L !== N) {
      T[0] = L;
      e: for (var G = 0, ee = T.length, gr = ee >>> 1; G < gr; ) {
        var Tt = 2 * (G + 1) - 1,
          Kl = T[Tt],
          Pt = Tt + 1,
          wr = T[Pt];
        if (0 > l(Kl, L))
          Pt < ee && 0 > l(wr, Kl)
            ? ((T[G] = wr), (T[Pt] = L), (G = Pt))
            : ((T[G] = Kl), (T[Tt] = L), (G = Tt));
        else if (Pt < ee && 0 > l(wr, L)) (T[G] = wr), (T[Pt] = L), (G = Pt);
        else break e;
      }
    }
    return N;
  }
  function l(T, N) {
    var L = T.sortIndex - N.sortIndex;
    return L !== 0 ? L : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    m = 1,
    p = null,
    h = 3,
    y = !1,
    g = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var N = n(s); N !== null; ) {
      if (N.callback === null) r(s);
      else if (N.startTime <= T)
        r(s), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(s);
    }
  }
  function E(T) {
    if (((w = !1), v(T), !g))
      if (n(u) !== null) (g = !0), Wl(C);
      else {
        var N = n(s);
        N !== null && Ql(E, N.startTime - T);
      }
  }
  function C(T, N) {
    (g = !1), w && ((w = !1), d(M), (M = -1)), (y = !0);
    var L = h;
    try {
      for (
        v(N), p = n(u);
        p !== null && (!(p.expirationTime > N) || (T && !Le()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var ee = G(p.expirationTime <= N);
          (N = e.unstable_now()),
            typeof ee == "function" ? (p.callback = ee) : p === n(u) && r(u),
            v(N);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var gr = !0;
      else {
        var Tt = n(s);
        Tt !== null && Ql(E, Tt.startTime - N), (gr = !1);
      }
      return gr;
    } finally {
      (p = null), (h = L), (y = !1);
    }
  }
  var _ = !1,
    O = null,
    M = -1,
    Y = 5,
    V = -1;
  function Le() {
    return !(e.unstable_now() - V < Y);
  }
  function An() {
    if (O !== null) {
      var T = e.unstable_now();
      V = T;
      var N = !0;
      try {
        N = O(!0, T);
      } finally {
        N ? kn() : ((_ = !1), (O = null));
      }
    } else _ = !1;
  }
  var kn;
  if (typeof f == "function")
    kn = function () {
      f(An);
    };
  else if (typeof MessageChannel < "u") {
    var wa = new MessageChannel(),
      ic = wa.port2;
    (wa.port1.onmessage = An),
      (kn = function () {
        ic.postMessage(null);
      });
  } else
    kn = function () {
      k(An, 0);
    };
  function Wl(T) {
    (O = T), _ || ((_ = !0), kn());
  }
  function Ql(T, N) {
    M = k(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), Wl(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var L = h;
      h = N;
      try {
        return T();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = h;
      h = T;
      try {
        return N();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, L) {
      var G = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? G + L : G))
          : (L = G),
        T)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = L + ee),
        (T = {
          id: m++,
          callback: N,
          priorityLevel: T,
          startTime: L,
          expirationTime: ee,
          sortIndex: -1,
        }),
        L > G
          ? ((T.sortIndex = L),
            t(s, T),
            n(u) === null &&
              T === n(s) &&
              (w ? (d(M), (M = -1)) : (w = !0), Ql(E, L - G)))
          : ((T.sortIndex = ee), t(u, T), g || y || ((g = !0), Wl(C))),
        T
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (T) {
      var N = h;
      return function () {
        var L = h;
        h = N;
        try {
          return T.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(_0);
P0.exports = _0;
var Mc = P0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jc = P,
  Ce = Mc;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var O0 = new Set(),
  Yn = {};
function zt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) O0.add(t[e]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ko = Object.prototype.hasOwnProperty,
  Nc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ka = {},
  Ca = {};
function Lc(e) {
  return ko.call(Ca, e)
    ? !0
    : ko.call(ka, e)
    ? !1
    : Nc.test(e)
    ? (Ca[e] = !0)
    : ((ka[e] = !0), !1);
}
function Rc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vc(e, t, n, r) {
  if (t === null || typeof t > "u" || Rc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ti = /[\-:]([a-z])/g;
function Pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ti, Pi);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ti, Pi);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ti, Pi);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _i(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vc(t, n, l, r) && (n = null),
    r || l === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  Oi = Symbol.for("react.strict_mode"),
  Co = Symbol.for("react.profiler"),
  M0 = Symbol.for("react.provider"),
  j0 = Symbol.for("react.context"),
  Mi = Symbol.for("react.forward_ref"),
  xo = Symbol.for("react.suspense"),
  To = Symbol.for("react.suspense_list"),
  ji = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  N0 = Symbol.for("react.offscreen"),
  xa = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Gl;
function Rn(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Xl = !1;
function Jl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jl(e.type, !1)), e;
    case 11:
      return (e = Jl(e.type.render, !1)), e;
    case 1:
      return (e = Jl(e.type, !0)), e;
    default:
      return "";
  }
}
function Po(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Wt:
      return "Portal";
    case Co:
      return "Profiler";
    case Oi:
      return "StrictMode";
    case xo:
      return "Suspense";
    case To:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case j0:
        return (e.displayName || "Context") + ".Consumer";
      case M0:
        return (e._context.displayName || "Context") + ".Provider";
      case Mi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ji:
        return (
          (t = e.displayName || null), t !== null ? t : Po(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return Po(e(t));
        } catch {}
    }
  return null;
}
function Fc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Po(t);
    case 8:
      return t === Oi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function St(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function L0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $c(e) {
  var t = L0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ar(e) {
  e._valueTracker || (e._valueTracker = $c(e));
}
function R0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = L0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _o(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function V0(e, t) {
  (t = t.checked), t != null && _i(e, "checked", t, !1);
}
function Oo(e, t) {
  V0(e, t);
  var n = St(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mo(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mo(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function H0(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Oa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function F0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? F0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  $0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  Zc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
  });
});
function Z0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function I0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Z0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ic = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lo(e, t) {
  if (t) {
    if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Ro(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vo = null;
function Ni(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ho = null,
  ln = null,
  on = null;
function Ma(e) {
  if ((e = vr(e))) {
    if (typeof Ho != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = jl(t)), Ho(e.stateNode, e.type, t));
  }
}
function z0(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function D0() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function U0(e, t) {
  return e(t);
}
function B0() {}
var ql = !1;
function W0(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return U0(e, t, n);
  } finally {
    (ql = !1), (ln !== null || on !== null) && (B0(), D0());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Fo = !1;
if (et)
  try {
    var xn = {};
    Object.defineProperty(xn, "passive", {
      get: function () {
        Fo = !0;
      },
    }),
      window.addEventListener("test", xn, xn),
      window.removeEventListener("test", xn, xn);
  } catch {
    Fo = !1;
  }
function zc(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (m) {
    this.onError(m);
  }
}
var In = !1,
  Jr = null,
  qr = !1,
  $o = null,
  Dc = {
    onError: function (e) {
      (In = !0), (Jr = e);
    },
  };
function Uc(e, t, n, r, l, o, i, a, u) {
  (In = !1), (Jr = null), zc.apply(Dc, arguments);
}
function Bc(e, t, n, r, l, o, i, a, u) {
  if ((Uc.apply(this, arguments), In)) {
    if (In) {
      var s = Jr;
      (In = !1), (Jr = null);
    } else throw Error(A(198));
    qr || ((qr = !0), ($o = s));
  }
}
function Dt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Q0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ja(e) {
  if (Dt(e) !== e) throw Error(A(188));
}
function Wc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dt(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ja(l), e;
        if (o === r) return ja(l), t;
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function K0(e) {
  return (e = Wc(e)), e !== null ? Y0(e) : null;
}
function Y0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Y0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var G0 = Ce.unstable_scheduleCallback,
  Na = Ce.unstable_cancelCallback,
  Qc = Ce.unstable_shouldYield,
  Kc = Ce.unstable_requestPaint,
  X = Ce.unstable_now,
  Yc = Ce.unstable_getCurrentPriorityLevel,
  Li = Ce.unstable_ImmediatePriority,
  X0 = Ce.unstable_UserBlockingPriority,
  br = Ce.unstable_NormalPriority,
  Gc = Ce.unstable_LowPriority,
  J0 = Ce.unstable_IdlePriority,
  Pl = null,
  Qe = null;
function Xc(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : bc,
  Jc = Math.log,
  qc = Math.LN2;
function bc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / qc) | 0)) | 0;
}
var Cr = 64,
  xr = 4194304;
function Hn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Hn(a)) : ((o &= i), o !== 0 && (r = Hn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Hn(i)) : o !== 0 && (r = Hn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ef(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ze(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = ef(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function q0() {
  var e = Cr;
  return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), e;
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function nf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ri(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function b0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var es,
  Vi,
  ts,
  ns,
  rs,
  Io = !1,
  Tr = [],
  pt = null,
  mt = null,
  ht = null,
  Jn = new Map(),
  qn = new Map(),
  ut = [],
  rf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function La(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vr(t)), t !== null && Vi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = Tn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (mt = Tn(mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Tn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jn.set(o, Tn(Jn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), qn.set(o, Tn(qn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ls(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Q0(n)), t !== null)) {
          (e.blockedOn = t),
            rs(e.priority, function () {
              ts(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vo = r), n.target.dispatchEvent(r), (Vo = null);
    } else return (t = vr(n)), t !== null && Vi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Zr(e) && n.delete(t);
}
function of() {
  (Io = !1),
    pt !== null && Zr(pt) && (pt = null),
    mt !== null && Zr(mt) && (mt = null),
    ht !== null && Zr(ht) && (ht = null),
    Jn.forEach(Ra),
    qn.forEach(Ra);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Io ||
      ((Io = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, of)));
}
function bn(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Tr.length) {
    Pn(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Pn(pt, e),
      mt !== null && Pn(mt, e),
      ht !== null && Pn(ht, e),
      Jn.forEach(t),
      qn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    ls(n), n.blockedOn === null && ut.shift();
}
var an = lt.ReactCurrentBatchConfig,
  tl = !0;
function af(e, t, n, r) {
  var l = F,
    o = an.transition;
  an.transition = null;
  try {
    (F = 1), Hi(e, t, n, r);
  } finally {
    (F = l), (an.transition = o);
  }
}
function uf(e, t, n, r) {
  var l = F,
    o = an.transition;
  an.transition = null;
  try {
    (F = 4), Hi(e, t, n, r);
  } finally {
    (F = l), (an.transition = o);
  }
}
function Hi(e, t, n, r) {
  if (tl) {
    var l = zo(e, t, n, r);
    if (l === null) so(e, t, r, nl, n), La(e, r);
    else if (lf(l, e, t, n, r)) r.stopPropagation();
    else if ((La(e, r), t & 4 && -1 < rf.indexOf(e))) {
      for (; l !== null; ) {
        var o = vr(l);
        if (
          (o !== null && es(o),
          (o = zo(e, t, n, r)),
          o === null && so(e, t, r, nl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else so(e, t, r, null, n);
  }
}
var nl = null;
function zo(e, t, n, r) {
  if (((nl = null), (e = Ni(r)), (e = Mt(e)), e !== null))
    if (((t = Dt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Q0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function os(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yc()) {
        case Li:
          return 1;
        case X0:
          return 4;
        case br:
        case Gc:
          return 16;
        case J0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Fi = null,
  Ir = null;
function is() {
  if (Ir) return Ir;
  var e,
    t = Fi,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function Va() {
  return !1;
}
function Te(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pr
        : Va),
      (this.isPropagationStopped = Va),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $i = Te(En),
  hr = Q({}, En, { view: 0, detail: 0 }),
  sf = Te(hr),
  eo,
  to,
  _n,
  _l = Q({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((eo = e.screenX - _n.screenX), (to = e.screenY - _n.screenY))
              : (to = eo = 0),
            (_n = e)),
          eo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : to;
    },
  }),
  Ha = Te(_l),
  cf = Q({}, _l, { dataTransfer: 0 }),
  ff = Te(cf),
  df = Q({}, hr, { relatedTarget: 0 }),
  no = Te(df),
  pf = Q({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mf = Te(pf),
  hf = Q({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vf = Te(hf),
  yf = Q({}, En, { data: 0 }),
  Fa = Te(yf),
  gf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  wf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ef = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function Zi() {
  return Sf;
}
var Af = Q({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = gf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zi,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kf = Te(Af),
  Cf = Q({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $a = Te(Cf),
  xf = Q({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zi,
  }),
  Tf = Te(xf),
  Pf = Q({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = Te(Pf),
  Of = Q({}, _l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Mf = Te(Of),
  jf = [9, 13, 27, 32],
  Ii = et && "CompositionEvent" in window,
  zn = null;
et && "documentMode" in document && (zn = document.documentMode);
var Nf = et && "TextEvent" in window && !zn,
  as = et && (!Ii || (zn && 8 < zn && 11 >= zn)),
  Za = " ",
  Ia = !1;
function us(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ss(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return ss(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ia = !0), Za);
    case "textInput":
      return (e = t.data), e === Za && Ia ? null : e;
    default:
      return null;
  }
}
function Rf(e, t) {
  if (Kt)
    return e === "compositionend" || (!Ii && us(e, t))
      ? ((e = is()), (Ir = Fi = ct = null), (Kt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return as && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vf[e.type] : t === "textarea";
}
function cs(e, t, n, r) {
  z0(r),
    (t = rl(t, "onChange")),
    0 < t.length &&
      ((n = new $i("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  er = null;
function Hf(e) {
  Ss(e, 0);
}
function Ol(e) {
  var t = Xt(e);
  if (R0(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var fs = !1;
if (et) {
  var ro;
  if (et) {
    var lo = "oninput" in document;
    if (!lo) {
      var Da = document.createElement("div");
      Da.setAttribute("oninput", "return;"),
        (lo = typeof Da.oninput == "function");
    }
    ro = lo;
  } else ro = !1;
  fs = ro && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  Dn && (Dn.detachEvent("onpropertychange", ds), (er = Dn = null));
}
function ds(e) {
  if (e.propertyName === "value" && Ol(er)) {
    var t = [];
    cs(t, er, e, Ni(e)), W0(Hf, t);
  }
}
function $f(e, t, n) {
  e === "focusin"
    ? (Ua(), (Dn = t), (er = n), Dn.attachEvent("onpropertychange", ds))
    : e === "focusout" && Ua();
}
function Zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(er);
}
function If(e, t) {
  if (e === "click") return Ol(t);
}
function zf(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function Df(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ze = typeof Object.is == "function" ? Object.is : Df;
function tr(e, t) {
  if (ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ko.call(t, l) || !ze(e[l], t[l])) return !1;
  }
  return !0;
}
function Ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = Ba(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ba(n);
  }
}
function ps(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ps(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ms() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Uf(e) {
  var t = ms(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ps(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Wa(n, o));
        var i = Wa(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bf = et && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  Do = null,
  Un = null,
  Uo = !1;
function Qa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uo ||
    Yt == null ||
    Yt !== Xr(r) ||
    ((r = Yt),
    "selectionStart" in r && zi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && tr(Un, r)) ||
      ((Un = r),
      (r = rl(Do, "onSelect")),
      0 < r.length &&
        ((t = new $i("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  oo = {},
  hs = {};
et &&
  ((hs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Ml(e) {
  if (oo[e]) return oo[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hs) return (oo[e] = t[n]);
  return e;
}
var vs = Ml("animationend"),
  ys = Ml("animationiteration"),
  gs = Ml("animationstart"),
  ws = Ml("transitionend"),
  Es = new Map(),
  Ka =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  Es.set(e, t), zt(t, [e]);
}
for (var io = 0; io < Ka.length; io++) {
  var ao = Ka[io],
    Wf = ao.toLowerCase(),
    Qf = ao[0].toUpperCase() + ao.slice(1);
  kt(Wf, "on" + Qf);
}
kt(vs, "onAnimationEnd");
kt(ys, "onAnimationIteration");
kt(gs, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(ws, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bc(r, t, void 0, e), (e.currentTarget = null);
}
function Ss(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Ya(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Ya(l, a, s), (o = u);
        }
    }
  }
  if (qr) throw ((e = $o), (qr = !1), ($o = null), e);
}
function Z(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (As(t, e, 2, !1), n.add(r));
}
function uo(e, t, n) {
  var r = 0;
  t && (r |= 4), As(n, e, r, t);
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function nr(e) {
  if (!e[Or]) {
    (e[Or] = !0),
      O0.forEach(function (n) {
        n !== "selectionchange" && (Kf.has(n) || uo(n, !1, e), uo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), uo("selectionchange", !1, t));
  }
}
function As(e, t, n, r) {
  switch (os(t)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = uf;
      break;
    default:
      l = Hi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function so(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Mt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  W0(function () {
    var s = o,
      m = Ni(n),
      p = [];
    e: {
      var h = Es.get(e);
      if (h !== void 0) {
        var y = $i,
          g = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = kf;
            break;
          case "focusin":
            (g = "focus"), (y = no);
            break;
          case "focusout":
            (g = "blur"), (y = no);
            break;
          case "beforeblur":
          case "afterblur":
            y = no;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Tf;
            break;
          case vs:
          case ys:
          case gs:
            y = mf;
            break;
          case ws:
            y = _f;
            break;
          case "scroll":
            y = sf;
            break;
          case "wheel":
            y = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = $a;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          d = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              d !== null && ((E = Xn(f, d)), E != null && w.push(rr(f, E, v)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((h = new y(h, g, null, n, m)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Vo &&
            (g = n.relatedTarget || n.fromElement) &&
            (Mt(g) || g[tt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = s),
              (g = g ? Mt(g) : null),
              g !== null &&
                ((k = Dt(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = s)),
          y !== g)
        ) {
          if (
            ((w = Ha),
            (E = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = $a),
              (E = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (k = y == null ? h : Xt(y)),
            (v = g == null ? h : Xt(g)),
            (h = new w(E, f + "leave", y, n, m)),
            (h.target = k),
            (h.relatedTarget = v),
            (E = null),
            Mt(m) === s &&
              ((w = new w(d, f + "enter", g, n, m)),
              (w.target = v),
              (w.relatedTarget = k),
              (E = w)),
            (k = E),
            y && g)
          )
            t: {
              for (w = y, d = g, f = 0, v = w; v; v = Ut(v)) f++;
              for (v = 0, E = d; E; E = Ut(E)) v++;
              for (; 0 < f - v; ) (w = Ut(w)), f--;
              for (; 0 < v - f; ) (d = Ut(d)), v--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Ut(w)), (d = Ut(d));
              }
              w = null;
            }
          else w = null;
          y !== null && Ga(p, h, y, w, !1),
            g !== null && k !== null && Ga(p, k, g, w, !0);
        }
      }
      e: {
        if (
          ((h = s ? Xt(s) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var C = Ff;
        else if (za(h))
          if (fs) C = zf;
          else {
            C = Zf;
            var _ = $f;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = If);
        if (C && (C = C(e, s))) {
          cs(p, C, n, m);
          break e;
        }
        _ && _(e, h, s),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            Mo(h, "number", h.value);
      }
      switch (((_ = s ? Xt(s) : window), e)) {
        case "focusin":
          (za(_) || _.contentEditable === "true") &&
            ((Yt = _), (Do = s), (Un = null));
          break;
        case "focusout":
          Un = Do = Yt = null;
          break;
        case "mousedown":
          Uo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Uo = !1), Qa(p, n, m);
          break;
        case "selectionchange":
          if (Bf) break;
        case "keydown":
        case "keyup":
          Qa(p, n, m);
      }
      var O;
      if (Ii)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Kt
          ? us(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (as &&
          n.locale !== "ko" &&
          (Kt || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Kt && (O = is())
            : ((ct = m),
              (Fi = "value" in ct ? ct.value : ct.textContent),
              (Kt = !0))),
        (_ = rl(s, M)),
        0 < _.length &&
          ((M = new Fa(M, e, null, n, m)),
          p.push({ event: M, listeners: _ }),
          O ? (M.data = O) : ((O = ss(n)), O !== null && (M.data = O)))),
        (O = Nf ? Lf(e, n) : Rf(e, n)) &&
          ((s = rl(s, "onBeforeInput")),
          0 < s.length &&
            ((m = new Fa("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: s }),
            (m.data = O)));
    }
    Ss(p, t);
  });
}
function rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Xn(e, n)),
      o != null && r.unshift(rr(e, o, l)),
      (o = Xn(e, t)),
      o != null && r.push(rr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ga(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Xn(n, o)), u != null && i.unshift(rr(n, u, a)))
        : l || ((u = Xn(n, o)), u != null && i.push(rr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Yf = /\r\n?/g,
  Gf = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yf,
      `
`
    )
    .replace(Gf, "");
}
function Mr(e, t, n) {
  if (((t = Xa(t)), Xa(e) !== t && n)) throw Error(A(425));
}
function ll() {}
var Bo = null,
  Wo = null;
function Qo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
  Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ja = typeof Promise == "function" ? Promise : void 0,
  Jf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ja < "u"
      ? function (e) {
          return Ja.resolve(null).then(e).catch(qf);
        }
      : Ko;
function qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function co(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), bn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  bn(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + Sn,
  lr = "__reactProps$" + Sn,
  tt = "__reactContainer$" + Sn,
  Yo = "__reactEvents$" + Sn,
  bf = "__reactListeners$" + Sn,
  e2 = "__reactHandles$" + Sn;
function Mt(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qa(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = qa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[We] || e[tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function jl(e) {
  return e[lr] || null;
}
var Go = [],
  Jt = -1;
function Ct(e) {
  return { current: e };
}
function I(e) {
  0 > Jt || ((e.current = Go[Jt]), (Go[Jt] = null), Jt--);
}
function $(e, t) {
  Jt++, (Go[Jt] = e.current), (e.current = t);
}
var At = {},
  se = Ct(At),
  ye = Ct(!1),
  Ht = At;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return At;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  I(ye), I(se);
}
function ba(e, t, n) {
  if (se.current !== At) throw Error(A(168));
  $(se, t), $(ye, n);
}
function ks(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(A(108, Fc(e) || "Unknown", l));
  return Q({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || At),
    (Ht = se.current),
    $(se, e),
    $(ye, ye.current),
    !0
  );
}
function eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = ks(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(ye),
      I(se),
      $(se, e))
    : I(ye),
    $(ye, n);
}
var Xe = null,
  Nl = !1,
  fo = !1;
function Cs(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function t2(e) {
  (Nl = !0), Cs(e);
}
function xt() {
  if (!fo && Xe !== null) {
    fo = !0;
    var e = 0,
      t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Nl = !1);
    } catch (l) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), G0(Li, xt), l);
    } finally {
      (F = t), (fo = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  al = null,
  ul = 0,
  Pe = [],
  _e = 0,
  Ft = null,
  Je = 1,
  qe = "";
function _t(e, t) {
  (qt[bt++] = ul), (qt[bt++] = al), (al = e), (ul = t);
}
function xs(e, t, n) {
  (Pe[_e++] = Je), (Pe[_e++] = qe), (Pe[_e++] = Ft), (Ft = e);
  var r = Je;
  e = qe;
  var l = 32 - Ze(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ze(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Je = (1 << (32 - Ze(t) + l)) | (n << l) | r),
      (qe = o + e);
  } else (Je = (1 << o) | (n << l) | r), (qe = e);
}
function Di(e) {
  e.return !== null && (_t(e, 1), xs(e, 1, 0));
}
function Ui(e) {
  for (; e === al; )
    (al = qt[--bt]), (qt[bt] = null), (ul = qt[--bt]), (qt[bt] = null);
  for (; e === Ft; )
    (Ft = Pe[--_e]),
      (Pe[_e] = null),
      (qe = Pe[--_e]),
      (Pe[_e] = null),
      (Je = Pe[--_e]),
      (Pe[_e] = null);
}
var ke = null,
  Ae = null,
  U = !1,
  Fe = null;
function Ts(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Ae = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Je, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (U) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!tu(e, t)) {
        if (Xo(e)) throw Error(A(418));
        t = vt(n.nextSibling);
        var r = ke;
        t && tu(e, t)
          ? Ts(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e));
      }
    } else {
      if (Xo(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e);
    }
  }
}
function nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function jr(e) {
  if (e !== ke) return !1;
  if (!U) return nu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Xo(e)) throw (Ps(), Error(A(418)));
    for (; t; ) Ts(e, t), (t = vt(t.nextSibling));
  }
  if ((nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = ke ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ps() {
  for (var e = Ae; e; ) e = vt(e.nextSibling);
}
function mn() {
  (Ae = ke = null), (U = !1);
}
function Bi(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var n2 = lt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ru(e) {
  var t = e._init;
  return t(e._payload);
}
function _s(e) {
  function t(d, f) {
    if (e) {
      var v = d.deletions;
      v === null ? ((d.deletions = [f]), (d.flags |= 16)) : v.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Et(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, v) {
    return (
      (d.index = v),
      e
        ? ((v = d.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((d.flags |= 2), f) : v)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, v, E) {
    return f === null || f.tag !== 6
      ? ((f = wo(v, d.mode, E)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function u(d, f, v, E) {
    var C = v.type;
    return C === Qt
      ? m(d, f, v.props.children, E, v.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === it &&
            ru(C) === f.type))
      ? ((E = l(f, v.props)), (E.ref = On(d, f, v)), (E.return = d), E)
      : ((E = Yr(v.type, v.key, v.props, null, d.mode, E)),
        (E.ref = On(d, f, v)),
        (E.return = d),
        E);
  }
  function s(d, f, v, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Eo(v, d.mode, E)), (f.return = d), f)
      : ((f = l(f, v.children || [])), (f.return = d), f);
  }
  function m(d, f, v, E, C) {
    return f === null || f.tag !== 7
      ? ((f = Rt(v, d.mode, E, C)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function p(d, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = wo("" + f, d.mode, v)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Sr:
          return (
            (v = Yr(f.type, f.key, f.props, null, d.mode, v)),
            (v.ref = On(d, null, f)),
            (v.return = d),
            v
          );
        case Wt:
          return (f = Eo(f, d.mode, v)), (f.return = d), f;
        case it:
          var E = f._init;
          return p(d, E(f._payload), v);
      }
      if (Vn(f) || Cn(f))
        return (f = Rt(f, d.mode, v, null)), (f.return = d), f;
      Nr(d, f);
    }
    return null;
  }
  function h(d, f, v, E) {
    var C = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(d, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Sr:
          return v.key === C ? u(d, f, v, E) : null;
        case Wt:
          return v.key === C ? s(d, f, v, E) : null;
        case it:
          return (C = v._init), h(d, f, C(v._payload), E);
      }
      if (Vn(v) || Cn(v)) return C !== null ? null : m(d, f, v, E, null);
      Nr(d, v);
    }
    return null;
  }
  function y(d, f, v, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (d = d.get(v) || null), a(f, d, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Sr:
          return (d = d.get(E.key === null ? v : E.key) || null), u(f, d, E, C);
        case Wt:
          return (d = d.get(E.key === null ? v : E.key) || null), s(f, d, E, C);
        case it:
          var _ = E._init;
          return y(d, f, v, _(E._payload), C);
      }
      if (Vn(E) || Cn(E)) return (d = d.get(v) || null), m(f, d, E, C, null);
      Nr(f, E);
    }
    return null;
  }
  function g(d, f, v, E) {
    for (
      var C = null, _ = null, O = f, M = (f = 0), Y = null;
      O !== null && M < v.length;
      M++
    ) {
      O.index > M ? ((Y = O), (O = null)) : (Y = O.sibling);
      var V = h(d, O, v[M], E);
      if (V === null) {
        O === null && (O = Y);
        break;
      }
      e && O && V.alternate === null && t(d, O),
        (f = o(V, f, M)),
        _ === null ? (C = V) : (_.sibling = V),
        (_ = V),
        (O = Y);
    }
    if (M === v.length) return n(d, O), U && _t(d, M), C;
    if (O === null) {
      for (; M < v.length; M++)
        (O = p(d, v[M], E)),
          O !== null &&
            ((f = o(O, f, M)), _ === null ? (C = O) : (_.sibling = O), (_ = O));
      return U && _t(d, M), C;
    }
    for (O = r(d, O); M < v.length; M++)
      (Y = y(O, d, M, v[M], E)),
        Y !== null &&
          (e && Y.alternate !== null && O.delete(Y.key === null ? M : Y.key),
          (f = o(Y, f, M)),
          _ === null ? (C = Y) : (_.sibling = Y),
          (_ = Y));
    return (
      e &&
        O.forEach(function (Le) {
          return t(d, Le);
        }),
      U && _t(d, M),
      C
    );
  }
  function w(d, f, v, E) {
    var C = Cn(v);
    if (typeof C != "function") throw Error(A(150));
    if (((v = C.call(v)), v == null)) throw Error(A(151));
    for (
      var _ = (C = null), O = f, M = (f = 0), Y = null, V = v.next();
      O !== null && !V.done;
      M++, V = v.next()
    ) {
      O.index > M ? ((Y = O), (O = null)) : (Y = O.sibling);
      var Le = h(d, O, V.value, E);
      if (Le === null) {
        O === null && (O = Y);
        break;
      }
      e && O && Le.alternate === null && t(d, O),
        (f = o(Le, f, M)),
        _ === null ? (C = Le) : (_.sibling = Le),
        (_ = Le),
        (O = Y);
    }
    if (V.done) return n(d, O), U && _t(d, M), C;
    if (O === null) {
      for (; !V.done; M++, V = v.next())
        (V = p(d, V.value, E)),
          V !== null &&
            ((f = o(V, f, M)), _ === null ? (C = V) : (_.sibling = V), (_ = V));
      return U && _t(d, M), C;
    }
    for (O = r(d, O); !V.done; M++, V = v.next())
      (V = y(O, d, M, V.value, E)),
        V !== null &&
          (e && V.alternate !== null && O.delete(V.key === null ? M : V.key),
          (f = o(V, f, M)),
          _ === null ? (C = V) : (_.sibling = V),
          (_ = V));
    return (
      e &&
        O.forEach(function (An) {
          return t(d, An);
        }),
      U && _t(d, M),
      C
    );
  }
  function k(d, f, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Qt &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Sr:
          e: {
            for (var C = v.key, _ = f; _ !== null; ) {
              if (_.key === C) {
                if (((C = v.type), C === Qt)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (f = l(_, v.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === it &&
                    ru(C) === _.type)
                ) {
                  n(d, _.sibling),
                    (f = l(_, v.props)),
                    (f.ref = On(d, _, v)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            v.type === Qt
              ? ((f = Rt(v.props.children, d.mode, E, v.key)),
                (f.return = d),
                (d = f))
              : ((E = Yr(v.type, v.key, v.props, null, d.mode, E)),
                (E.ref = On(d, f, v)),
                (E.return = d),
                (d = E));
          }
          return i(d);
        case Wt:
          e: {
            for (_ = v.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Eo(v, d.mode, E)), (f.return = d), (d = f);
          }
          return i(d);
        case it:
          return (_ = v._init), k(d, f, _(v._payload), E);
      }
      if (Vn(v)) return g(d, f, v, E);
      if (Cn(v)) return w(d, f, v, E);
      Nr(d, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, v)), (f.return = d), (d = f))
          : (n(d, f), (f = wo(v, d.mode, E)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return k;
}
var hn = _s(!0),
  Os = _s(!1),
  sl = Ct(null),
  cl = null,
  en = null,
  Wi = null;
function Qi() {
  Wi = en = cl = null;
}
function Ki(e) {
  var t = sl.current;
  I(sl), (e._currentValue = t);
}
function qo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function un(e, t) {
  (cl = e),
    (Wi = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (Wi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (cl === null) throw Error(A(308));
      (en = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var jt = null;
function Yi(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function Ms(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Yi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    nt(e, r)
  );
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Gi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function js(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Yi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    nt(e, n)
  );
}
function Dr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n);
  }
}
function lu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== i &&
        (a === null ? (m.firstBaseUpdate = s) : (a.next = s),
        (m.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (m = s = u = null), (a = o);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            w = a;
          switch (((h = t), (y = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                p = g.call(y, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (h = typeof g == "function" ? g.call(y, p, h) : g),
                h == null)
              )
                break e;
              p = Q({}, p, h);
              break e;
            case 2:
              at = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((s = m = y), (u = p)) : (m = m.next = y),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Zt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ou(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(A(191, l));
        l.call(r);
      }
    }
}
var yr = {},
  Ke = Ct(yr),
  or = Ct(yr),
  ir = Ct(yr);
function Nt(e) {
  if (e === yr) throw Error(A(174));
  return e;
}
function Xi(e, t) {
  switch (($(ir, t), $(or, e), $(Ke, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  I(Ke), $(Ke, t);
}
function vn() {
  I(Ke), I(or), I(ir);
}
function Ns(e) {
  Nt(ir.current);
  var t = Nt(Ke.current),
    n = No(t, e.type);
  t !== n && ($(or, e), $(Ke, n));
}
function Ji(e) {
  or.current === e && (I(Ke), I(or));
}
var B = Ct(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var po = [];
function qi() {
  for (var e = 0; e < po.length; e++)
    po[e]._workInProgressVersionPrimary = null;
  po.length = 0;
}
var Ur = lt.ReactCurrentDispatcher,
  mo = lt.ReactCurrentBatchConfig,
  $t = 0,
  W = null,
  q = null,
  te = null,
  pl = !1,
  Bn = !1,
  ar = 0,
  r2 = 0;
function ie() {
  throw Error(A(321));
}
function bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ze(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, o) {
  if (
    (($t = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? a2 : u2),
    (e = n(r, l)),
    Bn)
  ) {
    o = 0;
    do {
      if (((Bn = !1), (ar = 0), 25 <= o)) throw Error(A(301));
      (o += 1),
        (te = q = null),
        (t.updateQueue = null),
        (Ur.current = s2),
        (e = n(r, l));
    } while (Bn);
  }
  if (
    ((Ur.current = ml),
    (t = q !== null && q.next !== null),
    ($t = 0),
    (te = q = W = null),
    (pl = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function ta() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (W.memoizedState = te = e) : (te = te.next = e), te;
}
function Ne() {
  if (q === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = te === null ? W.memoizedState : te.next;
  if (t !== null) (te = t), (q = e);
  else {
    if (e === null) throw Error(A(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      te === null ? (W.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ho(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = q,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var m = s.lane;
      if (($t & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: m,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (i = r)) : (u = u.next = p),
          (W.lanes |= m),
          (Zt |= m);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      ze(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (Zt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vo(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ze(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ls() {}
function Rs(e, t) {
  var n = W,
    r = Ne(),
    l = t(),
    o = !ze(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    na(Fs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Hs.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(A(349));
    $t & 30 || Vs(n, t, l);
  }
  return l;
}
function Vs(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $s(t) && Zs(e);
}
function Fs(e, t, n) {
  return n(function () {
    $s(t) && Zs(e);
  });
}
function $s(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ze(e, n);
  } catch {
    return !0;
  }
}
function Zs(e) {
  var t = nt(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function iu(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = i2.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Is() {
  return Ne().memoizedState;
}
function Br(e, t, n, r) {
  var l = Be();
  (W.flags |= e),
    (l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var i = q.memoizedState;
    if (((o = i.destroy), r !== null && bi(r, i.deps))) {
      l.memoizedState = sr(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = sr(1 | t, n, o, r));
}
function au(e, t) {
  return Br(8390656, 8, e, t);
}
function na(e, t) {
  return Ll(2048, 8, e, t);
}
function zs(e, t) {
  return Ll(4, 2, e, t);
}
function Ds(e, t) {
  return Ll(4, 4, e, t);
}
function Us(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bs(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ll(4, 4, Us.bind(null, t, e), n)
  );
}
function ra() {}
function Ws(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Qs(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ks(e, t, n) {
  return $t & 21
    ? (ze(n, t) || ((n = q0()), (W.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function l2(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = mo.transition;
  mo.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (mo.transition = r);
  }
}
function Ys() {
  return Ne().memoizedState;
}
function o2(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gs(e))
  )
    Xs(t, n);
  else if (((n = Ms(e, t, n, r)), n !== null)) {
    var l = fe();
    Ie(n, e, r, l), Js(n, t, r);
  }
}
function i2(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gs(e)) Xs(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ze(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Yi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ms(e, t, l, r)),
      n !== null && ((l = fe()), Ie(n, e, r, l), Js(n, t, r));
  }
}
function Gs(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Xs(e, t) {
  Bn = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Js(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n);
  }
}
var ml = {
    readContext: je,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  a2 = {
    readContext: je,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: au,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, Us.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = o2.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: iu,
    useDebugValue: ra,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = iu(!1),
        t = e[0];
      return (e = l2.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Be();
      if (U) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(A(349));
        $t & 30 || Vs(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        au(Fs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sr(9, Hs.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = ne.identifierPrefix;
      if (U) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = r2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  u2 = {
    readContext: je,
    useCallback: Ws,
    useContext: je,
    useEffect: na,
    useImperativeHandle: Bs,
    useInsertionEffect: zs,
    useLayoutEffect: Ds,
    useMemo: Qs,
    useReducer: ho,
    useRef: Is,
    useState: function () {
      return ho(ur);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = Ne();
      return Ks(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = ho(ur)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Ls,
    useSyncExternalStore: Rs,
    useId: Ys,
    unstable_isNewReconciler: !1,
  },
  s2 = {
    readContext: je,
    useCallback: Ws,
    useContext: je,
    useEffect: na,
    useImperativeHandle: Bs,
    useInsertionEffect: zs,
    useLayoutEffect: Ds,
    useMemo: Qs,
    useReducer: vo,
    useRef: Is,
    useState: function () {
      return vo(ur);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = Ne();
      return q === null ? (t.memoizedState = e) : Ks(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = vo(ur)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Ls,
    useSyncExternalStore: Rs,
    useId: Ys,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ie(t, e, l, r), Dr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      o = be(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ie(t, e, l, r), Dr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = wt(e),
      l = be(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Ie(t, e, r, n), Dr(t, e, r));
  },
};
function uu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !tr(n, r) || !tr(l, o)
      : !0
  );
}
function qs(e, t, n) {
  var r = !1,
    l = At,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = je(o))
      : ((l = ge(t) ? Ht : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? pn(e, l) : At)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function su(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function ei(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = je(o))
    : ((o = ge(t) ? Ht : se.current), (l.context = pn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (bo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
      fl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function yo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var c2 = typeof WeakMap == "function" ? WeakMap : Map;
function bs(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vl || ((vl = !0), (fi = r)), ti(e, t);
    }),
    n
  );
}
function e1(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ti(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ti(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function cu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new c2();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = C2.bind(null, e, t, n)), t.then(e, e));
}
function fu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function du(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = be(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var f2 = lt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Os(t, null, n, r) : hn(t, e.child, n, r);
}
function pu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, l),
    (r = ea(e, t, n, r, o, l)),
    (n = ta()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        rt(e, t, l))
      : (U && n && Di(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function mu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !fa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), t1(e, t, o, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tr), n(i, r) && e.ref === t.ref)
    )
      return rt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Et(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function t1(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tr(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), rt(e, t, l);
  }
  return ni(e, t, n, r, l);
}
function n1(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(nn, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(nn, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        $(nn, Se),
        (Se |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(nn, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function r1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ni(e, t, n, r, l) {
  var o = ge(n) ? Ht : se.current;
  return (
    (o = pn(t, o)),
    un(t, l),
    (n = ea(e, t, n, r, o, l)),
    (r = ta()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        rt(e, t, l))
      : (U && r && Di(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function hu(e, t, n, r, l) {
  if (ge(n)) {
    var o = !0;
    il(t);
  } else o = !1;
  if ((un(t, l), t.stateNode === null))
    Wr(e, t), qs(t, n, r), ei(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = je(s))
      : ((s = ge(n) ? Ht : se.current), (s = pn(t, s)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && su(t, i, r, s)),
      (at = !1);
    var h = t.memoizedState;
    (i.state = h),
      fl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || h !== u || ye.current || at
        ? (typeof m == "function" && (bo(t, n, m, r), (u = t.memoizedState)),
          (a = at || uu(t, n, a, r, h, u, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      js(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : Ve(t.type, a)),
      (i.props = s),
      (p = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = je(u))
        : ((u = ge(n) ? Ht : se.current), (u = pn(t, u)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || h !== u) && su(t, i, r, u)),
      (at = !1),
      (h = t.memoizedState),
      (i.state = h),
      fl(t, r, i, l);
    var g = t.memoizedState;
    a !== p || h !== g || ye.current || at
      ? (typeof y == "function" && (bo(t, n, y, r), (g = t.memoizedState)),
        (s = at || uu(t, n, s, r, h, g, u) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ri(e, t, n, r, o, l);
}
function ri(e, t, n, r, l, o) {
  r1(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && eu(t, n, !1), rt(e, t, o);
  (r = t.stateNode), (f2.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hn(t, e.child, null, o)), (t.child = hn(t, null, a, o)))
      : ce(e, t, a, o),
    (t.memoizedState = r.state),
    l && eu(t, n, !0),
    t.child
  );
}
function l1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ba(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ba(e, t.context, !1),
    Xi(e, t.containerInfo);
}
function vu(e, t, n, r, l) {
  return mn(), Bi(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var li = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function o1(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    $(B, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Fl(i, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = oi(n)),
              (t.memoizedState = li),
              e)
            : la(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return d2(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Et(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Et(a, o)) : ((o = Rt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? oi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = li),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Et(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function la(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Bi(r),
    hn(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function d2(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yo(Error(A(422)))), Lr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Fl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Rt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hn(t, e.child, null, i),
        (t.child.memoizedState = oi(i)),
        (t.memoizedState = li),
        o);
  if (!(t.mode & 1)) return Lr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(A(419))), (r = yo(o, r, void 0)), Lr(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), ve || a)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), nt(e, l), Ie(r, e, l, -1));
    }
    return ca(), (r = yo(Error(A(421)))), Lr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = x2.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = vt(l.nextSibling)),
      (ke = t),
      (U = !0),
      (Fe = null),
      e !== null &&
        ((Pe[_e++] = Je),
        (Pe[_e++] = qe),
        (Pe[_e++] = Ft),
        (Je = e.id),
        (qe = e.overflow),
        (Ft = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qo(e.return, t, n);
}
function go(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function i1(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yu(e, n, t);
        else if (e.tag === 19) yu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && dl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          go(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && dl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        go(t, !0, n, null, o);
        break;
      case "together":
        go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Et(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function p2(e, t, n) {
  switch (t.tag) {
    case 3:
      l1(t), mn();
      break;
    case 5:
      Ns(t);
      break;
    case 1:
      ge(t.type) && il(t);
      break;
    case 4:
      Xi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      $(sl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? o1(e, t, n)
          : ($(B, B.current & 1),
            (e = rt(e, t, n)),
            e !== null ? e.sibling : null);
      $(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return i1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        $(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), n1(e, t, n);
  }
  return rt(e, t, n);
}
var a1, ii, u1, s1;
a1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ii = function () {};
u1 = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        (l = _o(e, l)), (r = _o(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = jo(e, l)), (r = jo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    Lo(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Yn.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Yn.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && Z("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
s1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function m2(e, t, n) {
  var r = t.pendingProps;
  switch ((Ui(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return ge(t.type) && ol(), ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        I(ye),
        I(se),
        qi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (mi(Fe), (Fe = null)))),
        ii(e, t),
        ae(t),
        null
      );
    case 5:
      Ji(t);
      var l = Nt(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        u1(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return ae(t), null;
        }
        if (((e = Nt(Ke.current)), jr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[We] = t), (r[lr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) Z(Fn[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Ta(r, o), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              _a(r, o), Z("invalid", r);
          }
          Lo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Yn.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              Ar(r), Pa(r, o, !0);
              break;
            case "textarea":
              Ar(r), Oa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = F0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[We] = t),
            (e[lr] = r),
            a1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ro(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) Z(Fn[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (l = r);
                break;
              case "details":
                Z("toggle", e), (l = r);
                break;
              case "input":
                Ta(e, r), (l = _o(e, r)), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                _a(e, r), (l = jo(e, r)), Z("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? I0(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && $0(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Gn(e, u)
                    : typeof u == "number" && Gn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Yn.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Z("scroll", e)
                      : u != null && _i(e, o, u, i));
              }
            switch (n) {
              case "input":
                Ar(e), Pa(e, r, !1);
                break;
              case "textarea":
                Ar(e), Oa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) s1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Nt(ir.current)), Nt(Ke.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ae(t), null;
    case 13:
      if (
        (I(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Ps(), mn(), (t.flags |= 98560), (o = !1);
        else if (((o = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(A(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(A(317));
            o[We] = t;
          } else
            mn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (o = !1);
        } else Fe !== null && (mi(Fe), (Fe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? b === 0 && (b = 3) : ca())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        vn(), ii(e, t), e === null && nr(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return Ki(t.type._context), ae(t), null;
    case 17:
      return ge(t.type) && ol(), ae(t), null;
    case 19:
      if ((I(B), (o = t.memoizedState), o === null)) return ae(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Mn(o, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = dl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Mn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > gn &&
            ((t.flags |= 128), (r = !0), Mn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return ae(t), null;
          } else
            2 * X() - o.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = B.current),
          $(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function h2(e, t) {
  switch ((Ui(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        I(ye),
        I(se),
        qi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ji(t), null;
    case 13:
      if ((I(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(A(340));
        mn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(B), null;
    case 4:
      return vn(), null;
    case 10:
      return Ki(t.type._context), null;
    case 22:
    case 23:
      return sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  ue = !1,
  v2 = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function ai(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var gu = !1;
function y2(e, t) {
  if (((Bo = tl), (e = ms()), zi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++s === l && (a = i),
                h === o && ++m === r && (u = i),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wo = { focusedElem: e, selectionRange: n }, tl = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    k = g.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ve(t.type, w),
                      k
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (E) {
          K(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (g = gu), (gu = !1), g;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ai(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ui(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function c1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), c1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[lr], delete t[Yo], delete t[bf], delete t[e2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function f1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || f1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function si(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), (e = e.sibling);
}
function ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), (e = e.sibling);
}
var re = null,
  He = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) d1(e, t, n), (n = n.sibling);
}
function d1(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || tn(n, t);
    case 6:
      var r = re,
        l = He;
      (re = null),
        ot(e, t, n),
        (re = r),
        (He = l),
        re !== null &&
          (He
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (He
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? co(e.parentNode, n)
              : e.nodeType === 1 && co(e, n),
            bn(e))
          : co(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = He),
        (re = n.stateNode.containerInfo),
        (He = !0),
        ot(e, t, n),
        (re = r),
        (He = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ai(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          K(n, t, a);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ot(e, t, n), (ue = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Eu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new v2()),
      t.forEach(function (r) {
        var l = T2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (re = a.stateNode), (He = !1);
              break e;
            case 3:
              (re = a.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (re = a.stateNode.containerInfo), (He = !0);
              break e;
          }
          a = a.return;
        }
        if (re === null) throw Error(A(160));
        d1(o, i, l), (re = null), (He = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        K(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) p1(t, e), (t = t.sibling);
}
function p1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ue(e), r & 4)) {
        try {
          Wn(3, e, e.return), Vl(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          Wn(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Re(t, e), Ue(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ue(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && V0(l, o),
              Ro(a, i);
            var s = Ro(a, o);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i],
                p = u[i + 1];
              m === "style"
                ? I0(l, p)
                : m === "dangerouslySetInnerHTML"
                ? $0(l, p)
                : m === "children"
                ? Gn(l, p)
                : _i(l, m, p, s);
            }
            switch (a) {
              case "input":
                Oo(l, o);
                break;
              case "textarea":
                H0(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? rn(l, !!o.multiple, y, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rn(l, !!o.multiple, o.defaultValue, !0)
                      : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[lr] = o;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          bn(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      Re(t, e), Ue(e);
      break;
    case 13:
      Re(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (aa = X())),
        r & 4 && Eu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (s = ue) || m), Re(t, e), (ue = s)) : Re(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !m && e.mode & 1)
        )
          for (x = e, m = e.child; m !== null; ) {
            for (p = x = m; x !== null; ) {
              switch (((h = x), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, h, h.return);
                  break;
                case 1:
                  tn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Au(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (x = y)) : Au(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Z0("display", i)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ue(e), r & 4 && Eu(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (f1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ""), (r.flags &= -33));
          var o = wu(e);
          ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = wu(e);
          si(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g2(e, t, n) {
  (x = e), m1(e);
}
function m1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Rr;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ue;
        a = Rr;
        var s = ue;
        if (((Rr = i), (ue = u) && !s))
          for (x = l; x !== null; )
            (i = x),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ku(l)
                : u !== null
                ? ((u.return = i), (x = u))
                : ku(l);
        for (; o !== null; ) (x = o), m1(o), (o = o.sibling);
        (x = l), (Rr = a), (ue = s);
      }
      Su(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (x = o)) : Su(e);
  }
}
function Su(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ou(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ou(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var m = s.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && bn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        ue || (t.flags & 512 && ui(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Au(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function ku(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, l, u);
            }
          }
          var o = t.return;
          try {
            ui(t);
          } catch (u) {
            K(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ui(t);
          } catch (u) {
            K(t, i, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      x = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (x = a);
      break;
    }
    x = t.return;
  }
}
var w2 = Math.ceil,
  hl = lt.ReactCurrentDispatcher,
  oa = lt.ReactCurrentOwner,
  Me = lt.ReactCurrentBatchConfig,
  H = 0,
  ne = null,
  J = null,
  le = 0,
  Se = 0,
  nn = Ct(0),
  b = 0,
  cr = null,
  Zt = 0,
  Hl = 0,
  ia = 0,
  Qn = null,
  he = null,
  aa = 0,
  gn = 1 / 0,
  Ge = null,
  vl = !1,
  fi = null,
  gt = null,
  Vr = !1,
  ft = null,
  yl = 0,
  Kn = 0,
  di = null,
  Qr = -1,
  Kr = 0;
function fe() {
  return H & 6 ? X() : Qr !== -1 ? Qr : (Qr = X());
}
function wt(e) {
  return e.mode & 1
    ? H & 2 && le !== 0
      ? le & -le
      : n2.transition !== null
      ? (Kr === 0 && (Kr = q0()), Kr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : os(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Kn) throw ((Kn = 0), (di = null), Error(A(185)));
  mr(e, n, r),
    (!(H & 2) || e !== ne) &&
      (e === ne && (!(H & 2) && (Hl |= n), b === 4 && st(e, le)),
      we(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((gn = X() + 500), Nl && xt()));
}
function we(e, t) {
  var n = e.callbackNode;
  tf(e, t);
  var r = el(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && Na(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Na(n), t === 1))
      e.tag === 0 ? t2(Cu.bind(null, e)) : Cs(Cu.bind(null, e)),
        Jf(function () {
          !(H & 6) && xt();
        }),
        (n = null);
    else {
      switch (b0(r)) {
        case 1:
          n = Li;
          break;
        case 4:
          n = X0;
          break;
        case 16:
          n = br;
          break;
        case 536870912:
          n = J0;
          break;
        default:
          n = br;
      }
      n = A1(n, h1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function h1(e, t) {
  if (((Qr = -1), (Kr = 0), H & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = el(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = y1();
    (ne !== e || le !== t) && ((Ge = null), (gn = X() + 500), Lt(e, t));
    do
      try {
        A2();
        break;
      } catch (a) {
        v1(e, a);
      }
    while (!0);
    Qi(),
      (hl.current = o),
      (H = l),
      J !== null ? (t = 0) : ((ne = null), (le = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Zo(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1)
    )
      throw ((n = cr), Lt(e, 0), st(e, r), we(e, X()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !E2(l) &&
          ((t = gl(e, r)),
          t === 2 && ((o = Zo(e)), o !== 0 && ((r = o), (t = pi(e, o)))),
          t === 1))
      )
        throw ((n = cr), Lt(e, 0), st(e, r), we(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Ot(e, he, Ge);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = aa + 500 - X()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ko(Ot.bind(null, e, he, Ge), t);
            break;
          }
          Ot(e, he, Ge);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * w2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ko(Ot.bind(null, e, he, Ge), r);
            break;
          }
          Ot(e, he, Ge);
          break;
        case 5:
          Ot(e, he, Ge);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return we(e, X()), e.callbackNode === n ? h1.bind(null, e) : null;
}
function pi(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = gl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && mi(t)),
    e
  );
}
function mi(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function E2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ze(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~ia,
      t &= ~Hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cu(e) {
  if (H & 6) throw Error(A(327));
  sn();
  var t = el(e, 0);
  if (!(t & 1)) return we(e, X()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zo(e);
    r !== 0 && ((t = r), (n = pi(e, r)));
  }
  if (n === 1) throw ((n = cr), Lt(e, 0), st(e, t), we(e, X()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, he, Ge),
    we(e, X()),
    null
  );
}
function ua(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((gn = X() + 500), Nl && xt());
  }
}
function It(e) {
  ft !== null && ft.tag === 0 && !(H & 6) && sn();
  var t = H;
  H |= 1;
  var n = Me.transition,
    r = F;
  try {
    if (((Me.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Me.transition = n), (H = t), !(H & 6) && xt();
  }
}
function sa() {
  (Se = nn.current), I(nn);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xf(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Ui(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          vn(), I(ye), I(se), qi();
          break;
        case 5:
          Ji(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          I(B);
          break;
        case 19:
          I(B);
          break;
        case 10:
          Ki(r.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (J = e = Et(e.current, null)),
    (le = Se = t),
    (b = 0),
    (cr = null),
    (ia = Hl = Zt = 0),
    (he = Qn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function v1(e, t) {
  do {
    var n = J;
    try {
      if ((Qi(), (Ur.current = ml), pl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        (($t = 0),
        (te = q = W = null),
        (Bn = !1),
        (ar = 0),
        (oa.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (cr = t), (J = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = le),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            m = a,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = fu(i);
          if (y !== null) {
            (y.flags &= -257),
              du(y, i, a, o, t),
              y.mode & 1 && cu(o, s, t),
              (t = y),
              (u = s);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              cu(o, s, t), ca();
              break e;
            }
            u = Error(A(426));
          }
        } else if (U && a.mode & 1) {
          var k = fu(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              du(k, i, a, o, t),
              Bi(yn(u, a));
            break e;
          }
        }
        (o = u = yn(u, a)),
          b !== 4 && (b = 2),
          Qn === null ? (Qn = [o]) : Qn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = bs(o, u, t);
              lu(o, d);
              break e;
            case 1:
              a = u;
              var f = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (gt === null || !gt.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = e1(o, a, t);
                lu(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      w1(n);
    } catch (C) {
      (t = C), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function y1() {
  var e = hl.current;
  return (hl.current = ml), e === null ? ml : e;
}
function ca() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(Zt & 268435455) && !(Hl & 268435455)) || st(ne, le);
}
function gl(e, t) {
  var n = H;
  H |= 2;
  var r = y1();
  (ne !== e || le !== t) && ((Ge = null), Lt(e, t));
  do
    try {
      S2();
      break;
    } catch (l) {
      v1(e, l);
    }
  while (!0);
  if ((Qi(), (H = n), (hl.current = r), J !== null)) throw Error(A(261));
  return (ne = null), (le = 0), b;
}
function S2() {
  for (; J !== null; ) g1(J);
}
function A2() {
  for (; J !== null && !Qc(); ) g1(J);
}
function g1(e) {
  var t = S1(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? w1(e) : (J = t),
    (oa.current = null);
}
function w1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = h2(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (J = null);
        return;
      }
    } else if (((n = m2(n, t, Se)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Ot(e, t, n) {
  var r = F,
    l = Me.transition;
  try {
    (Me.transition = null), (F = 1), k2(e, t, n, r);
  } finally {
    (Me.transition = l), (F = r);
  }
  return null;
}
function k2(e, t, n, r) {
  do sn();
  while (ft !== null);
  if (H & 6) throw Error(A(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (nf(e, o),
    e === ne && ((J = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vr ||
      ((Vr = !0),
      A1(br, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Me.transition), (Me.transition = null);
    var i = F;
    F = 1;
    var a = H;
    (H |= 4),
      (oa.current = null),
      y2(e, n),
      p1(n, e),
      Uf(Wo),
      (tl = !!Bo),
      (Wo = Bo = null),
      (e.current = n),
      g2(n),
      Kc(),
      (H = a),
      (F = i),
      (Me.transition = o);
  } else e.current = n;
  if (
    (Vr && ((Vr = !1), (ft = e), (yl = l)),
    (o = e.pendingLanes),
    o === 0 && (gt = null),
    Xc(n.stateNode),
    we(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw ((vl = !1), (e = fi), (fi = null), e);
  return (
    yl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === di ? Kn++ : ((Kn = 0), (di = e))) : (Kn = 0),
    xt(),
    null
  );
}
function sn() {
  if (ft !== null) {
    var e = b0(yl),
      t = Me.transition,
      n = F;
    try {
      if (((Me.transition = null), (F = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (yl = 0), H & 6)) throw Error(A(331));
        var l = H;
        for (H |= 4, x = e.current; x !== null; ) {
          var o = x,
            i = o.child;
          if (x.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (x = s; x !== null; ) {
                  var m = x;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, m, o);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (x = p);
                  else
                    for (; x !== null; ) {
                      m = x;
                      var h = m.sibling,
                        y = m.return;
                      if ((c1(m), m === s)) {
                        x = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (x = h);
                        break;
                      }
                      x = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (x = i);
          else
            e: for (; x !== null; ) {
              if (((o = x), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (x = d);
                break e;
              }
              x = o.return;
            }
        }
        var f = e.current;
        for (x = f; x !== null; ) {
          i = x;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (x = v);
          else
            e: for (i = f; x !== null; ) {
              if (((a = x), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, a);
                  }
                } catch (C) {
                  K(a, a.return, C);
                }
              if (a === i) {
                x = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (x = E);
                break e;
              }
              x = a.return;
            }
        }
        if (
          ((H = l), xt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Me.transition = t);
    }
  }
  return !1;
}
function xu(e, t, n) {
  (t = yn(n, t)),
    (t = bs(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = fe()),
    e !== null && (mr(e, 1, t), we(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) xu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = e1(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = fe()),
            t !== null && (mr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function C2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (b === 4 || (b === 3 && (le & 130023424) === le && 500 > X() - aa)
        ? Lt(e, 0)
        : (ia |= n)),
    we(e, t);
}
function E1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xr), (xr <<= 1), !(xr & 130023424) && (xr = 4194304))
      : (t = 1));
  var n = fe();
  (e = nt(e, t)), e !== null && (mr(e, t, n), we(e, n));
}
function x2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), E1(e, n);
}
function T2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), E1(e, n);
}
var S1;
S1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), p2(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), U && t.flags & 1048576 && xs(t, ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var l = pn(t, se.current);
      un(t, n), (l = ea(null, t, r, e, l, n));
      var o = ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), il(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Gi(t),
            (l.updater = Rl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ei(t, r, e, n),
            (t = ri(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && Di(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _2(r)),
          (e = Ve(r, e)),
          l)
        ) {
          case 0:
            t = ni(null, t, r, e, n);
            break e;
          case 1:
            t = hu(null, t, r, e, n);
            break e;
          case 11:
            t = pu(null, t, r, e, n);
            break e;
          case 14:
            t = mu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        ni(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        hu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((l1(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          js(e, t),
          fl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = yn(Error(A(423)), t)), (t = vu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yn(Error(A(424)), t)), (t = vu(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = vt(t.stateNode.containerInfo.firstChild),
                ke = t,
                U = !0,
                Fe = null,
                n = Os(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mn(), r === l)) {
            t = rt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ns(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Qo(r, l) ? (i = null) : o !== null && Qo(r, o) && (t.flags |= 32),
        r1(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return o1(e, t, n);
    case 4:
      return (
        Xi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        pu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          $(sl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ze(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = be(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var m = s.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      qo(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(A(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  qo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = je(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ve(r, t.pendingProps)),
        (l = Ve(r.type, l)),
        mu(e, t, r, l, n)
      );
    case 15:
      return t1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Wr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), il(t)) : (e = !1),
        un(t, n),
        qs(t, r, l),
        ei(t, r, l, n),
        ri(null, t, r, !0, e, n)
      );
    case 19:
      return i1(e, t, n);
    case 22:
      return n1(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function A1(e, t) {
  return G0(e, t);
}
function P2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new P2(e, t, n, r);
}
function fa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _2(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mi)) return 11;
    if (e === ji) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) fa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return Rt(n.children, l, o, t);
      case Oi:
        (i = 8), (l |= 8);
        break;
      case Co:
        return (
          (e = Oe(12, n, t, l | 2)), (e.elementType = Co), (e.lanes = o), e
        );
      case xo:
        return (e = Oe(13, n, t, l)), (e.elementType = xo), (e.lanes = o), e;
      case To:
        return (e = Oe(19, n, t, l)), (e.elementType = To), (e.lanes = o), e;
      case N0:
        return Fl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case M0:
              i = 10;
              break e;
            case j0:
              i = 9;
              break e;
            case Mi:
              i = 11;
              break e;
            case ji:
              i = 14;
              break e;
            case it:
              (i = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rt(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = N0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wo(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function Eo(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O2(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function da(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new O2(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Oe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gi(o),
    e
  );
}
function M2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function k1(e) {
  if (!e) return At;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return ks(e, n, t);
  }
  return t;
}
function C1(e, t, n, r, l, o, i, a, u) {
  return (
    (e = da(n, r, !0, e, l, o, i, a, u)),
    (e.context = k1(null)),
    (n = e.current),
    (r = fe()),
    (l = wt(n)),
    (o = be(r, l)),
    (o.callback = t ?? null),
    yt(n, o, l),
    (e.current.lanes = l),
    mr(e, l, r),
    we(e, r),
    e
  );
}
function $l(e, t, n, r) {
  var l = t.current,
    o = fe(),
    i = wt(l);
  return (
    (n = k1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, i)),
    e !== null && (Ie(e, l, i, o), Dr(e, l, i)),
    i
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function j2() {
  return null;
}
var x1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Zl.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  $l(e, t, null, null);
};
Zl.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
      $l(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ns();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && ls(e);
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pu() {}
function N2(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = wl(i);
        o.call(s);
      };
    }
    var i = C1(t, r, e, 0, null, !1, !1, "", Pu);
    return (
      (e._reactRootContainer = i),
      (e[tt] = i.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      It(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = wl(u);
      a.call(s);
    };
  }
  var u = da(e, 0, !1, null, null, !1, !1, "", Pu);
  return (
    (e._reactRootContainer = u),
    (e[tt] = u.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      $l(t, u, n, r);
    }),
    u
  );
}
function zl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = wl(i);
        a.call(u);
      };
    }
    $l(t, i, e, l);
  } else i = N2(n, t, e, l, r);
  return wl(i);
}
es = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hn(t.pendingLanes);
        n !== 0 &&
          (Ri(t, n | 1), we(t, X()), !(H & 6) && ((gn = X() + 500), xt()));
      }
      break;
    case 13:
      It(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var l = fe();
          Ie(r, e, 1, l);
        }
      }),
        pa(e, 1);
  }
};
Vi = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ie(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
ts = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = nt(e, t);
    if (n !== null) {
      var r = fe();
      Ie(n, e, t, r);
    }
    pa(e, t);
  }
};
ns = function () {
  return F;
};
rs = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Ho = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = jl(r);
            if (!l) throw Error(A(90));
            R0(r), Oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      H0(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
U0 = ua;
B0 = It;
var L2 = { usingClientEntryPoint: !1, Events: [vr, Xt, jl, z0, D0, ua] },
  jn = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  R2 = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = K0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || j2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      (Pl = Hr.inject(R2)), (Qe = Hr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L2;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(A(200));
  return M2(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!ha(e)) throw Error(A(299));
  var n = !1,
    r = "",
    l = x1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = da(e, 1, !1, null, null, n, !1, r, l)),
    (e[tt] = t.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = K0(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return It(e);
};
xe.hydrate = function (e, t, n) {
  if (!Il(t)) throw Error(A(200));
  return zl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = x1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = C1(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[tt] = t.current),
    nr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Zl(t);
};
xe.render = function (e, t, n) {
  if (!Il(t)) throw Error(A(200));
  return zl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Il(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (It(function () {
        zl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = ua;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Il(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return zl(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function T1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T1);
    } catch (e) {
      console.error(e);
    }
}
T1(), (T0.exports = xe);
var V2 = T0.exports,
  _u = V2;
(Ao.createRoot = _u.createRoot), (Ao.hydrateRoot = _u.hydrateRoot);
var P1 = { exports: {} },
  H2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  F2 = H2,
  $2 = F2;
function _1() {}
function O1() {}
O1.resetWarningCache = _1;
var Z2 = function () {
  function e(r, l, o, i, a, u) {
    if (u !== $2) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: O1,
    resetWarningCache: _1,
  };
  return (n.PropTypes = n), n;
};
P1.exports = Z2();
var I2 = P1.exports;
const z = dr(I2);
function z2(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var M1 = P,
  D2 = z2(M1);
function Ou(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function U2(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var B2 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function W2(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(l) {
    return l.displayName || l.name || "Component";
  }
  return function (o) {
    if (typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var i = [],
      a;
    function u() {
      (a = e(
        i.map(function (m) {
          return m.props;
        })
      )),
        s.canUseDOM ? t(a) : n && (a = n(a));
    }
    var s = (function (m) {
      U2(p, m);
      function p() {
        return m.apply(this, arguments) || this;
      }
      (p.peek = function () {
        return a;
      }),
        (p.rewind = function () {
          if (p.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var g = a;
          return (a = void 0), (i = []), g;
        });
      var h = p.prototype;
      return (
        (h.UNSAFE_componentWillMount = function () {
          i.push(this), u();
        }),
        (h.componentDidUpdate = function () {
          u();
        }),
        (h.componentWillUnmount = function () {
          var g = i.indexOf(this);
          i.splice(g, 1), u();
        }),
        (h.render = function () {
          return D2.createElement(o, this.props);
        }),
        p
      );
    })(M1.PureComponent);
    return (
      Ou(s, "displayName", "SideEffect(" + r(o) + ")"),
      Ou(s, "canUseDOM", B2),
      s
    );
  };
}
var Q2 = W2;
const K2 = dr(Q2);
var Y2 = typeof Element < "u",
  G2 = typeof Map == "function",
  X2 = typeof Set == "function",
  J2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Gr(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, l;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Gr(e[r], t[r])) return !1;
      return !0;
    }
    var o;
    if (G2 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!Gr(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (X2 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (J2 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((l = Object.keys(e)), (n = l.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, l[r])) return !1;
    if (Y2 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (l[r] === "_owner" || l[r] === "__v" || l[r] === "__o") &&
          e.$$typeof
        ) &&
        !Gr(e[l[r]], t[l[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var q2 = function (t, n) {
  try {
    return Gr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const b2 = dr(q2);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Mu = Object.getOwnPropertySymbols,
  ed = Object.prototype.hasOwnProperty,
  td = Object.prototype.propertyIsEnumerable;
function nd(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function rd() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var l = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        l[o] = o;
      }),
      Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var ld = rd()
  ? Object.assign
  : function (e, t) {
      for (var n, r = nd(e), l, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o]);
        for (var i in n) ed.call(n, i) && (r[i] = n[i]);
        if (Mu) {
          l = Mu(n);
          for (var a = 0; a < l.length; a++)
            td.call(n, l[a]) && (r[l[a]] = n[l[a]]);
        }
      }
      return r;
    };
const od = dr(ld);
var Vt = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  j = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(j).map(function (e) {
  return j[e];
});
var D = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  El = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  fr = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  id = Object.keys(El).reduce(function (e, t) {
    return (e[El[t]] = t), e;
  }, {}),
  ad = [j.NOSCRIPT, j.SCRIPT, j.STYLE],
  $e = "data-react-helmet",
  ud =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  sd = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  cd = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  me =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  fd = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  ju = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  dd = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  hi = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  pd = function (t) {
    var n = cn(t, j.TITLE),
      r = cn(t, fr.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var l = cn(t, fr.DEFAULT_TITLE);
    return n || l || void 0;
  },
  md = function (t) {
    return cn(t, fr.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  So = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, l) {
        return me({}, r, l);
      }, {});
  },
  hd = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[j.BASE] < "u";
      })
      .map(function (r) {
        return r[j.BASE];
      })
      .reverse()
      .reduce(function (r, l) {
        if (!r.length)
          for (var o = Object.keys(l), i = 0; i < o.length; i++) {
            var a = o[i],
              u = a.toLowerCase();
            if (t.indexOf(u) !== -1 && l[u]) return r.concat(l);
          }
        return r;
      }, []);
  },
  Nn = function (t, n, r) {
    var l = {};
    return r
      .filter(function (o) {
        return Array.isArray(o[t])
          ? !0
          : (typeof o[t] < "u" &&
              wd(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  ud(o[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (o) {
        return o[t];
      })
      .reverse()
      .reduce(function (o, i) {
        var a = {};
        i.filter(function (h) {
          for (var y = void 0, g = Object.keys(h), w = 0; w < g.length; w++) {
            var k = g[w],
              d = k.toLowerCase();
            n.indexOf(d) !== -1 &&
              !(y === D.REL && h[y].toLowerCase() === "canonical") &&
              !(d === D.REL && h[d].toLowerCase() === "stylesheet") &&
              (y = d),
              n.indexOf(k) !== -1 &&
                (k === D.INNER_HTML || k === D.CSS_TEXT || k === D.ITEM_PROP) &&
                (y = k);
          }
          if (!y || !h[y]) return !1;
          var f = h[y].toLowerCase();
          return (
            l[y] || (l[y] = {}),
            a[y] || (a[y] = {}),
            l[y][f] ? !1 : ((a[y][f] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (h) {
            return o.push(h);
          });
        for (var u = Object.keys(a), s = 0; s < u.length; s++) {
          var m = u[s],
            p = od({}, l[m], a[m]);
          l[m] = p;
        }
        return o;
      }, [])
      .reverse();
  },
  cn = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var l = t[r];
      if (l.hasOwnProperty(n)) return l[n];
    }
    return null;
  },
  vd = function (t) {
    return {
      baseTag: hd([D.HREF, D.TARGET], t),
      bodyAttributes: So(Vt.BODY, t),
      defer: cn(t, fr.DEFER),
      encode: cn(t, fr.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: So(Vt.HTML, t),
      linkTags: Nn(j.LINK, [D.REL, D.HREF], t),
      metaTags: Nn(
        j.META,
        [D.NAME, D.CHARSET, D.HTTPEQUIV, D.PROPERTY, D.ITEM_PROP],
        t
      ),
      noscriptTags: Nn(j.NOSCRIPT, [D.INNER_HTML], t),
      onChangeClientState: md(t),
      scriptTags: Nn(j.SCRIPT, [D.SRC, D.INNER_HTML], t),
      styleTags: Nn(j.STYLE, [D.CSS_TEXT], t),
      title: pd(t),
      titleAttributes: So(Vt.TITLE, t),
    };
  },
  vi = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            vi(t);
          }, 0);
    };
  })(),
  Nu = function (t) {
    return clearTimeout(t);
  },
  yd =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        vi
      : global.requestAnimationFrame || vi,
  gd =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Nu
      : global.cancelAnimationFrame || Nu,
  wd = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  Ln = null,
  Ed = function (t) {
    Ln && gd(Ln),
      t.defer
        ? (Ln = yd(function () {
            Lu(t, function () {
              Ln = null;
            });
          }))
        : (Lu(t), (Ln = null));
  },
  Lu = function (t, n) {
    var r = t.baseTag,
      l = t.bodyAttributes,
      o = t.htmlAttributes,
      i = t.linkTags,
      a = t.metaTags,
      u = t.noscriptTags,
      s = t.onChangeClientState,
      m = t.scriptTags,
      p = t.styleTags,
      h = t.title,
      y = t.titleAttributes;
    yi(j.BODY, l), yi(j.HTML, o), Sd(h, y);
    var g = {
        baseTag: Bt(j.BASE, r),
        linkTags: Bt(j.LINK, i),
        metaTags: Bt(j.META, a),
        noscriptTags: Bt(j.NOSCRIPT, u),
        scriptTags: Bt(j.SCRIPT, m),
        styleTags: Bt(j.STYLE, p),
      },
      w = {},
      k = {};
    Object.keys(g).forEach(function (d) {
      var f = g[d],
        v = f.newTags,
        E = f.oldTags;
      v.length && (w[d] = v), E.length && (k[d] = g[d].oldTags);
    }),
      n && n(),
      s(t, w, k);
  },
  j1 = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  Sd = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = j1(t)),
      yi(j.TITLE, n);
  },
  yi = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var l = r.getAttribute($e),
          o = l ? l.split(",") : [],
          i = [].concat(o),
          a = Object.keys(n),
          u = 0;
        u < a.length;
        u++
      ) {
        var s = a[u],
          m = n[s] || "";
        r.getAttribute(s) !== m && r.setAttribute(s, m),
          o.indexOf(s) === -1 && o.push(s);
        var p = i.indexOf(s);
        p !== -1 && i.splice(p, 1);
      }
      for (var h = i.length - 1; h >= 0; h--) r.removeAttribute(i[h]);
      o.length === i.length
        ? r.removeAttribute($e)
        : r.getAttribute($e) !== a.join(",") && r.setAttribute($e, a.join(","));
    }
  },
  Bt = function (t, n) {
    var r = document.head || document.querySelector(j.HEAD),
      l = r.querySelectorAll(t + "[" + $e + "]"),
      o = Array.prototype.slice.call(l),
      i = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (u) {
          var s = document.createElement(t);
          for (var m in u)
            if (u.hasOwnProperty(m))
              if (m === D.INNER_HTML) s.innerHTML = u.innerHTML;
              else if (m === D.CSS_TEXT)
                s.styleSheet
                  ? (s.styleSheet.cssText = u.cssText)
                  : s.appendChild(document.createTextNode(u.cssText));
              else {
                var p = typeof u[m] > "u" ? "" : u[m];
                s.setAttribute(m, p);
              }
          s.setAttribute($e, "true"),
            o.some(function (h, y) {
              return (a = y), s.isEqualNode(h);
            })
              ? o.splice(a, 1)
              : i.push(s);
        }),
      o.forEach(function (u) {
        return u.parentNode.removeChild(u);
      }),
      i.forEach(function (u) {
        return r.appendChild(u);
      }),
      { oldTags: o, newTags: i }
    );
  },
  N1 = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var l = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + l : l;
    }, "");
  },
  Ad = function (t, n, r, l) {
    var o = N1(r),
      i = j1(n);
    return o
      ? "<" + t + " " + $e + '="true" ' + o + ">" + hi(i, l) + "</" + t + ">"
      : "<" + t + " " + $e + '="true">' + hi(i, l) + "</" + t + ">";
  },
  kd = function (t, n, r) {
    return n.reduce(function (l, o) {
      var i = Object.keys(o)
          .filter(function (s) {
            return !(s === D.INNER_HTML || s === D.CSS_TEXT);
          })
          .reduce(function (s, m) {
            var p = typeof o[m] > "u" ? m : m + '="' + hi(o[m], r) + '"';
            return s ? s + " " + p : p;
          }, ""),
        a = o.innerHTML || o.cssText || "",
        u = ad.indexOf(t) === -1;
      return (
        l +
        "<" +
        t +
        " " +
        $e +
        '="true" ' +
        i +
        (u ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  L1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, l) {
      return (r[El[l] || l] = t[l]), r;
    }, n);
  },
  Cd = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, l) {
      return (r[id[l] || l] = t[l]), r;
    }, n);
  },
  xd = function (t, n, r) {
    var l,
      o = ((l = { key: n }), (l[$e] = !0), l),
      i = L1(r, o);
    return [c.createElement(j.TITLE, i, n)];
  },
  Td = function (t, n) {
    return n.map(function (r, l) {
      var o,
        i = ((o = { key: l }), (o[$e] = !0), o);
      return (
        Object.keys(r).forEach(function (a) {
          var u = El[a] || a;
          if (u === D.INNER_HTML || u === D.CSS_TEXT) {
            var s = r.innerHTML || r.cssText;
            i.dangerouslySetInnerHTML = { __html: s };
          } else i[u] = r[a];
        }),
        c.createElement(t, i)
      );
    });
  },
  Ye = function (t, n, r) {
    switch (t) {
      case j.TITLE:
        return {
          toComponent: function () {
            return xd(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return Ad(t, n.title, n.titleAttributes, r);
          },
        };
      case Vt.BODY:
      case Vt.HTML:
        return {
          toComponent: function () {
            return L1(n);
          },
          toString: function () {
            return N1(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return Td(t, n);
          },
          toString: function () {
            return kd(t, n, r);
          },
        };
    }
  },
  R1 = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      l = t.encode,
      o = t.htmlAttributes,
      i = t.linkTags,
      a = t.metaTags,
      u = t.noscriptTags,
      s = t.scriptTags,
      m = t.styleTags,
      p = t.title,
      h = p === void 0 ? "" : p,
      y = t.titleAttributes;
    return {
      base: Ye(j.BASE, n, l),
      bodyAttributes: Ye(Vt.BODY, r, l),
      htmlAttributes: Ye(Vt.HTML, o, l),
      link: Ye(j.LINK, i, l),
      meta: Ye(j.META, a, l),
      noscript: Ye(j.NOSCRIPT, u, l),
      script: Ye(j.SCRIPT, s, l),
      style: Ye(j.STYLE, m, l),
      title: Ye(j.TITLE, { title: h, titleAttributes: y }, l),
    };
  },
  Pd = function (t) {
    var n, r;
    return (
      (r = n =
        (function (l) {
          fd(o, l);
          function o() {
            return sd(this, o), dd(this, l.apply(this, arguments));
          }
          return (
            (o.prototype.shouldComponentUpdate = function (a) {
              return !b2(this.props, a);
            }),
            (o.prototype.mapNestedChildrenToProps = function (a, u) {
              if (!u) return null;
              switch (a.type) {
                case j.SCRIPT:
                case j.NOSCRIPT:
                  return { innerHTML: u };
                case j.STYLE:
                  return { cssText: u };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (o.prototype.flattenArrayTypeChildren = function (a) {
              var u,
                s = a.child,
                m = a.arrayTypeChildren,
                p = a.newChildProps,
                h = a.nestedChildren;
              return me(
                {},
                m,
                ((u = {}),
                (u[s.type] = [].concat(m[s.type] || [], [
                  me({}, p, this.mapNestedChildrenToProps(s, h)),
                ])),
                u)
              );
            }),
            (o.prototype.mapObjectTypeChildren = function (a) {
              var u,
                s,
                m = a.child,
                p = a.newProps,
                h = a.newChildProps,
                y = a.nestedChildren;
              switch (m.type) {
                case j.TITLE:
                  return me(
                    {},
                    p,
                    ((u = {}),
                    (u[m.type] = y),
                    (u.titleAttributes = me({}, h)),
                    u)
                  );
                case j.BODY:
                  return me({}, p, { bodyAttributes: me({}, h) });
                case j.HTML:
                  return me({}, p, { htmlAttributes: me({}, h) });
              }
              return me({}, p, ((s = {}), (s[m.type] = me({}, h)), s));
            }),
            (o.prototype.mapArrayTypeChildrenToProps = function (a, u) {
              var s = me({}, u);
              return (
                Object.keys(a).forEach(function (m) {
                  var p;
                  s = me({}, s, ((p = {}), (p[m] = a[m]), p));
                }),
                s
              );
            }),
            (o.prototype.warnOnInvalidChildren = function (a, u) {
              return !0;
            }),
            (o.prototype.mapChildrenToProps = function (a, u) {
              var s = this,
                m = {};
              return (
                c.Children.forEach(a, function (p) {
                  if (!(!p || !p.props)) {
                    var h = p.props,
                      y = h.children,
                      g = ju(h, ["children"]),
                      w = Cd(g);
                    switch ((s.warnOnInvalidChildren(p, y), p.type)) {
                      case j.LINK:
                      case j.META:
                      case j.NOSCRIPT:
                      case j.SCRIPT:
                      case j.STYLE:
                        m = s.flattenArrayTypeChildren({
                          child: p,
                          arrayTypeChildren: m,
                          newChildProps: w,
                          nestedChildren: y,
                        });
                        break;
                      default:
                        u = s.mapObjectTypeChildren({
                          child: p,
                          newProps: u,
                          newChildProps: w,
                          nestedChildren: y,
                        });
                        break;
                    }
                  }
                }),
                (u = this.mapArrayTypeChildrenToProps(m, u)),
                u
              );
            }),
            (o.prototype.render = function () {
              var a = this.props,
                u = a.children,
                s = ju(a, ["children"]),
                m = me({}, s);
              return (
                u && (m = this.mapChildrenToProps(u, m)), c.createElement(t, m)
              );
            }),
            cd(o, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            o
          );
        })(c.Component)),
      (n.propTypes = {
        base: z.object,
        bodyAttributes: z.object,
        children: z.oneOfType([z.arrayOf(z.node), z.node]),
        defaultTitle: z.string,
        defer: z.bool,
        encodeSpecialCharacters: z.bool,
        htmlAttributes: z.object,
        link: z.arrayOf(z.object),
        meta: z.arrayOf(z.object),
        noscript: z.arrayOf(z.object),
        onChangeClientState: z.func,
        script: z.arrayOf(z.object),
        style: z.arrayOf(z.object),
        title: z.string,
        titleAttributes: z.object,
        titleTemplate: z.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var l = t.rewind();
        return (
          l ||
            (l = R1({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          l
        );
      }),
      r
    );
  },
  _d = function () {
    return null;
  },
  Od = K2(vd, Ed, R1)(_d),
  Sl = Pd(Od);
Sl.renderStatic = Sl.rewind;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Al.apply(this, arguments)
  );
}
var dt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(dt || (dt = {}));
const Ru = "popstate";
function Md(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return gi(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : H1(l);
  }
  return Nd(t, n, null, e);
}
function Ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function V1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jd() {
  return Math.random().toString(36).substr(2, 8);
}
function Vu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Al(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dl(t) : t,
      { state: n, key: (t && t.key) || r || jd() }
    )
  );
}
function H1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Nd(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = dt.Pop,
    u = null,
    s = m();
  s == null && ((s = 0), i.replaceState(Al({}, i.state, { idx: s }), ""));
  function m() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    a = dt.Pop;
    let k = m(),
      d = k == null ? null : k - s;
    (s = k), u && u({ action: a, location: w.location, delta: d });
  }
  function h(k, d) {
    a = dt.Push;
    let f = gi(w.location, k, d);
    s = m() + 1;
    let v = Vu(f, s),
      E = w.createHref(f);
    try {
      i.pushState(v, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(E);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function y(k, d) {
    a = dt.Replace;
    let f = gi(w.location, k, d);
    s = m();
    let v = Vu(f, s),
      E = w.createHref(f);
    i.replaceState(v, "", E),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function g(k) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof k == "string" ? k : H1(k);
    return (
      (f = f.replace(/ $/, "%20")),
      Ee(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(k) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ru, p),
        (u = k),
        () => {
          l.removeEventListener(Ru, p), (u = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: g,
    encodeLocation(k) {
      let d = g(k);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: y,
    go(k) {
      return i.go(k);
    },
  };
  return w;
}
var Hu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Hu || (Hu = {}));
function Ld(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dl(t) : t,
    l = Z1(r.pathname || "/", n);
  if (l == null) return null;
  let o = F1(e);
  Rd(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = Qd(l);
    i = Ud(o[a], u);
  }
  return i;
}
function F1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Ee(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = fn([r, u.relativePath]),
      m = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Ee(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      F1(o.children, t, m, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: zd(s, o.index), routesMeta: m });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of $1(o.path)) l(o, i, u);
    }),
    t
  );
}
function $1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = $1(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Rd(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dd(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Vd = /^:[\w-]+$/,
  Hd = 3,
  Fd = 2,
  $d = 1,
  Zd = 10,
  Id = -2,
  Fu = (e) => e === "*";
function zd(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Fu) && (r += Id),
    t && (r += Fd),
    n
      .filter((l) => !Fu(l))
      .reduce((l, o) => l + (Vd.test(o) ? Hd : o === "" ? $d : Zd), r)
  );
}
function Dd(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ud(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      m = Bd(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!m) return null;
    Object.assign(r, m.params);
    let p = a.route;
    o.push({
      params: r,
      pathname: fn([l, m.pathname]),
      pathnameBase: Kd(fn([l, m.pathnameBase])),
      route: p,
    }),
      m.pathnameBase !== "/" && (l = fn([l, m.pathnameBase]));
  }
  return o;
}
function Bd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Wd(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, m, p) => {
      let { paramName: h, isOptional: y } = m;
      if (h === "*") {
        let w = a[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[p];
      return (
        y && !g ? (s[h] = void 0) : (s[h] = (g || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Wd(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    V1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Qd(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      V1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Z1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const fn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Kd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Yd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const I1 = ["post", "put", "patch", "delete"];
new Set(I1);
const Gd = ["get", ...I1];
new Set(Gd);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kl() {
  return (
    (kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kl.apply(this, arguments)
  );
}
const Xd = P.createContext(null),
  Jd = P.createContext(null),
  z1 = P.createContext(null),
  Ul = P.createContext(null),
  Bl = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  D1 = P.createContext(null);
function va() {
  return P.useContext(Ul) != null;
}
function qd() {
  return va() || Ee(!1), P.useContext(Ul).location;
}
function bd(e, t) {
  return e8(e, t);
}
function e8(e, t, n, r) {
  va() || Ee(!1);
  let { navigator: l } = P.useContext(z1),
    { matches: o } = P.useContext(Bl),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = qd(),
    m;
  if (t) {
    var p;
    let k = typeof t == "string" ? Dl(t) : t;
    u === "/" || ((p = k.pathname) != null && p.startsWith(u)) || Ee(!1),
      (m = k);
  } else m = s;
  let h = m.pathname || "/",
    y = h;
  if (u !== "/") {
    let k = u.replace(/^\//, "").split("/");
    y = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let g = Ld(e, { pathname: y }),
    w = o8(
      g &&
        g.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: fn([
              u,
              l.encodeLocation
                ? l.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? u
                : fn([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? P.createElement(
        Ul.Provider,
        {
          value: {
            location: kl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: dt.Pop,
          },
        },
        w
      )
    : w;
}
function t8() {
  let e = s8(),
    t = Yd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null
  );
}
const n8 = P.createElement(t8, null);
class r8 extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Bl.Provider,
          { value: this.props.routeContext },
          P.createElement(D1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function l8(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(Xd);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Bl.Provider, { value: t }, r)
  );
}
function o8(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let m = i.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0
    );
    m >= 0 || Ee(!1), (i = i.slice(0, Math.min(i.length, m + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < i.length; m++) {
      let p = i[m];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = m),
        p.route.id)
      ) {
        let { loaderData: h, errors: y } = n,
          g =
            p.route.loader &&
            h[p.route.id] === void 0 &&
            (!y || y[p.route.id] === void 0);
        if (p.route.lazy || g) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((m, p, h) => {
    let y,
      g = !1,
      w = null,
      k = null;
    n &&
      ((y = a && p.route.id ? a[p.route.id] : void 0),
      (w = p.route.errorElement || n8),
      u &&
        (s < 0 && h === 0
          ? ((g = !0), (k = null))
          : s === h &&
            ((g = !0), (k = p.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, h + 1)),
      f = () => {
        let v;
        return (
          y
            ? (v = w)
            : g
            ? (v = k)
            : p.route.Component
            ? (v = P.createElement(p.route.Component, null))
            : p.route.element
            ? (v = p.route.element)
            : (v = m),
          P.createElement(l8, {
            match: p,
            routeContext: { outlet: m, matches: d, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0)
      ? P.createElement(r8, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: y,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var wi = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(wi || {});
function i8(e) {
  let t = P.useContext(Jd);
  return t || Ee(!1), t;
}
function a8(e) {
  let t = P.useContext(Bl);
  return t || Ee(!1), t;
}
function u8(e) {
  let t = a8(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ee(!1), n.route.id;
}
function s8() {
  var e;
  let t = P.useContext(D1),
    n = i8(wi.UseRouteError),
    r = u8(wi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function $n(e) {
  Ee(!1);
}
function c8(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = dt.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  va() && Ee(!1);
  let u = t.replace(/^\/*/, "/"),
    s = P.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: kl({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Dl(r));
  let {
      pathname: m = "/",
      search: p = "",
      hash: h = "",
      state: y = null,
      key: g = "default",
    } = r,
    w = P.useMemo(() => {
      let k = Z1(m, u);
      return k == null
        ? null
        : {
            location: { pathname: k, search: p, hash: h, state: y, key: g },
            navigationType: l,
          };
    }, [u, m, p, h, y, g, l]);
  return w == null
    ? null
    : P.createElement(
        z1.Provider,
        { value: s },
        P.createElement(Ul.Provider, { children: n, value: w })
      );
}
function f8(e) {
  let { children: t, location: n } = e;
  return bd(Ei(t), n);
}
new Promise(() => {});
function Ei(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, l) => {
      if (!P.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === P.Fragment) {
        n.push.apply(n, Ei(r.props.children, o));
        return;
      }
      r.type !== $n && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Ei(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const d8 = "6";
try {
  window.__reactRouterVersion = d8;
} catch {}
const p8 = "startTransition",
  $u = kc[p8];
function m8(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = P.useRef();
  o.current == null && (o.current = Md({ window: l, v5Compat: !0 }));
  let i = o.current,
    [a, u] = P.useState({ action: i.action, location: i.location }),
    { v7_startTransition: s } = r || {},
    m = P.useCallback(
      (p) => {
        s && $u ? $u(() => u(p)) : u(p);
      },
      [u, s]
    );
  return (
    P.useLayoutEffect(() => i.listen(m), [i, m]),
    P.createElement(c8, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
var Zu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zu || (Zu = {}));
var Iu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Iu || (Iu = {}));
function h8() {
  return (
    P.useEffect(() => {
      const e = setTimeout(() => {
        window.location.href = "/sistema/tutorial";
      }, 5e3);
      return () => clearTimeout(e);
    }, []),
    S.jsx("main", { className: "_home" })
  );
}
var v8 = Object.defineProperty,
  Cl = Object.getOwnPropertySymbols,
  U1 = Object.prototype.hasOwnProperty,
  B1 = Object.prototype.propertyIsEnumerable,
  zu = (e, t, n) =>
    t in e
      ? v8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  y8 = (e, t) => {
    for (var n in t || (t = {})) U1.call(t, n) && zu(e, n, t[n]);
    if (Cl) for (var n of Cl(t)) B1.call(t, n) && zu(e, n, t[n]);
    return e;
  },
  g8 = (e, t) => {
    var n = {};
    for (var r in e) U1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Cl)
      for (var r of Cl(e)) t.indexOf(r) < 0 && B1.call(e, r) && (n[r] = e[r]);
    return n;
  };
const W1 = P.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l = "currentColor",
      size: o = "1em",
      weight: i = "regular",
      mirrored: a = !1,
      children: u,
      weights: s,
    } = n,
    m = g8(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return c.createElement(
    "svg",
    y8(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        fill: l,
        viewBox: "0 0 256 256",
        transform: a ? "scale(-1, 1)" : void 0,
      },
      m
    ),
    !!r && c.createElement("title", null, r),
    u,
    s.get(i)
  );
});
W1.displayName = "SSRBase";
const w8 = W1,
  E8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M212,224a12,12,0,0,1-12,12A108.12,108.12,0,0,1,92,128V61L64.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L116,61v67a84.09,84.09,0,0,0,84,84A12,12,0,0,1,212,224Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", { d: "M152,80H56l48-48Z", opacity: "0.2" }),
        c.createElement("path", {
          d: "M200,216a88.1,88.1,0,0,1-88-88V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,56,88H96v40A104.11,104.11,0,0,0,200,232a8,8,0,0,0,0-16ZM104,43.31,132.69,72H75.31Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V88H56a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,152,88H112v40a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M206,224a6,6,0,0,1-6,6A102.12,102.12,0,0,1,98,128V46.49L60.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L110,46.49V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V51.31L61.66,85.66A8,8,0,0,1,50.34,74.34l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L112,51.31V128a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M204,224a4,4,0,0,1-4,4A100.11,100.11,0,0,1,100,128V41.66L58.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48a4,4,0,0,1-5.66,5.66L108,41.66V128a92.1,92.1,0,0,0,92,92A4,4,0,0,1,204,224Z",
        })
      ),
    ],
  ]),
  S8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M236,144a68.07,68.07,0,0,1-68,68H80a12,12,0,0,1,0-24h88a44,44,0,0,0,0-88H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,76H168A68.08,68.08,0,0,1,236,144Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", { d: "M80,40v96L32,88Z", opacity: "0.2" }),
        c.createElement("path", {
          d: "M168,80H88V40a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,136V96h80a48,48,0,0,1,0,96H80a8,8,0,0,0,0,16h88a64,64,0,0,0,0-128ZM72,116.69,43.31,88,72,59.31Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,40V80h80A64.07,64.07,0,0,1,232,144Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230,144a62.07,62.07,0,0,1-62,62H80a6,6,0,0,1,0-12h88a50,50,0,0,0,0-100H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,82H168A62.07,62.07,0,0,1,230,144Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M228,144a60.07,60.07,0,0,1-60,60H80a4,4,0,0,1,0-8h88a52,52,0,0,0,0-104H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,84H168A60.07,60.07,0,0,1,228,144Z",
        })
      ),
    ],
  ]),
  A8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,24V154.35l-45.65-28.53a12,12,0,0,0-12.72,0L76,154.35V52ZM134.35,173.82a12,12,0,0,0-12.72,0L76,202.35v-19.7l52-32.5,52,32.5v19.7Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M192,176v48l-64-40L64,224V176l64-40Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34ZM72,46H184a2,2,0,0,1,2,2V165.18l-54.83-34.27a6,6,0,0,0-6.36,0L70,165.17V48A2,2,0,0,1,72,46Zm59.17,132.91a6,6,0,0,0-6.36,0L70,213.17V179.33l58-36.25,58,36.25v33.84Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,36H72A12,12,0,0,0,60,48V224a4,4,0,0,0,6.12,3.39L128,188.72l61.89,38.67A4,4,0,0,0,192,228a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,196,224V48A12,12,0,0,0,184,36ZM72,44H184a4,4,0,0,1,4,4V168.78l-57.89-36.17a4,4,0,0,0-4.24,0L68,168.78V48A4,4,0,0,1,72,44Zm58.11,136.61a4,4,0,0,0-4.24,0L68,216.78V178.22l60-37.5,60,37.5v38.56Z",
        })
      ),
    ],
  ]),
  k8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z",
        })
      ),
    ],
  ]),
  C8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z",
        })
      ),
    ],
  ]),
  x8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M114.32,49.8A19.79,19.79,0,0,0,81.72,57L29.22,201.41A19.82,19.82,0,0,0,47.75,228a20,20,0,0,0,6.84-1.22L199,174.28a19.79,19.79,0,0,0,7.24-32.6ZM104.19,183.21l-31.4-31.4L82.94,123.9l49.16,49.16Zm-52.42,26.4Zm12-32.91L79.3,192.26l-24.45,8.89ZM157,164,92,99l10-27.58L184.57,154ZM128,40V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm116.48,83.51a12,12,0,0,1-17,17l-16-16a12,12,0,0,1,17-17Zm-.69-40.13-24,8a12,12,0,0,1-7.59-22.77l24-8a12,12,0,1,1,7.59,22.77ZM156.6,65.93C159.83,47.47,173.39,36,192,36c6.45,0,8.69-2.49,10-4.92a18,18,0,0,0,2-7.22V24a12,12,0,0,1,24,0c0,14.47-9.59,36-36,36-4.94,0-10.21,1.19-11.76,10.06A12,12,0,0,1,168.43,80a12.35,12.35,0,0,1-2.08-.18A12,12,0,0,1,156.6,65.93Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M58.89,154.89l42.22,42.22-50.63,18.4a7.79,7.79,0,0,1-10-10Zm138.82-4.72L105.83,58.29A7.79,7.79,0,0,0,93,61.14l-14.9,41,75.82,75.82,41-14.9A7.79,7.79,0,0,0,197.71,150.17Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26Zm-8.33,135.21-35-35,13.16-36.21,58.05,58.05Zm-55,20,14-38.41,24.45,24.45ZM156,168.64,87.36,100l13-35.87,91.43,91.43ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M110.08,54a13.8,13.8,0,0,0-22.73,5.05L34.85,203.47A13.82,13.82,0,0,0,47.76,222a14,14,0,0,0,4.77-.85l144.38-52.5a13.8,13.8,0,0,0,5-22.73ZM48.43,209.87a1.79,1.79,0,0,1-2.3-2.3L61.31,165.8,90.2,194.68Zm54.21-19.71-36.8-36.81L80.51,113,143,175.49ZM194,156.07a1.74,1.74,0,0,1-1.14,1.3L155.44,171,85,100.55,98.63,63.19a1.72,1.72,0,0,1,1.3-1.14,1.58,1.58,0,0,1,.41,0,1.72,1.72,0,0,1,1.25.53l91.88,91.88A1.73,1.73,0,0,1,194,156.07ZM162,72a35.52,35.52,0,0,1,3.63-14.68C170.57,47.44,179.93,42,192,42c7.47,0,12.53-2.74,15.48-8.38A24.18,24.18,0,0,0,210,24,6,6,0,0,1,216,18h0a6,6,0,0,1,6,6c0,10.38-6.27,30-30,30-7.47,0-12.53,2.74-15.48,8.38A24,24,0,0,0,174,72a6,6,0,0,1-6,6h0A6,6,0,0,1,162,72ZM138,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm98.24,83.76a6,6,0,1,1-8.48,8.48l-16-16a6,6,0,0,1,8.48-8.48Zm5.66-46.07-24,8a6,6,0,1,1-3.8-11.38l24-8a6,6,0,0,1,3.8,11.38Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26Zm-8.33,135.21-35-35,13.16-36.21,58.05,58.05Zm-55,20,14-38.41,24.45,24.45ZM156,168.64,87.36,100l13-35.87,91.43,91.43ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M108.66,55.46a11.79,11.79,0,0,0-19.43,4.31L36.73,204.15a11.81,11.81,0,0,0,11,15.85,11.88,11.88,0,0,0,4.08-.73l144.38-52.5a11.79,11.79,0,0,0,4.31-19.43Zm-6.53,137L63.52,153.87l16.19-44.51,66.92,66.93Zm-53,19.28a3.81,3.81,0,0,1-4.87-4.87l16.27-44.72,33.32,33.32Zm146.8-55.25a3.77,3.77,0,0,1-2.42,2.74l-38.56,14L82.72,101.07l14-38.56a3.77,3.77,0,0,1,2.74-2.42,4.32,4.32,0,0,1,.85-.09A3.65,3.65,0,0,1,103,61.12L194.88,153A3.78,3.78,0,0,1,195.91,156.51ZM220,24c0,9.68-5.85,28-28,28-8.31,0-14.18,3.29-17.42,9.79A26.12,26.12,0,0,0,172,72a4,4,0,0,1-8,0,34.06,34.06,0,0,1,3.42-13.79C170.66,51.73,177.56,44,192,44c19.29,0,20-18,20-20a4,4,0,0,1,4-4h0A4,4,0,0,1,220,24ZM140,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm94.83,85.17a4,4,0,0,1-5.66,5.66l-16-16a4,4,0,0,1,5.66-5.66Zm6.43-49.37-24,8A4,4,0,0,1,216,84a4,4,0,0,1-1.27-7.79l24-8a4,4,0,0,1,2.53,7.59Z",
        })
      ),
    ],
  ]),
  T8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,72H212V64a28,28,0,0,0-28-28H40A28,28,0,0,0,12,64v88a28,28,0,0,0,28,28h96v12a28,28,0,0,0,28,28h60a28,28,0,0,0,28-28V100A28,28,0,0,0,224,72ZM40,156a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4v8H164a28,28,0,0,0-28,28v56Zm188,36a4,4,0,0,1-4,4H164a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4ZM124,208a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h24A12,12,0,0,1,124,208Zm88-84a12,12,0,0,1-12,12H188a12,12,0,0,1,0-24h12A12,12,0,0,1,212,124Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M200,64V80H176a16,16,0,0,0-16,16v80H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184A16,16,0,0,1,200,64Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72Zm8,120a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,74H206V64a22,22,0,0,0-22-22H40A22,22,0,0,0,18,64v96a22,22,0,0,0,22,22H154v10a22,22,0,0,0,22,22h48a22,22,0,0,0,22-22V96A22,22,0,0,0,224,74ZM40,170a10,10,0,0,1-10-10V64A10,10,0,0,1,40,54H184a10,10,0,0,1,10,10V74H176a22,22,0,0,0-22,22v74Zm194,22a10,10,0,0,1-10,10H176a10,10,0,0,1-10-10V96a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10ZM134,208a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h40A6,6,0,0,1,134,208Zm80-96a6,6,0,0,1-6,6H192a6,6,0,0,1,0-12h16A6,6,0,0,1,214,112Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,76H204V64a20,20,0,0,0-20-20H40A20,20,0,0,0,20,64v96a20,20,0,0,0,20,20H156v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V96A20,20,0,0,0,224,76ZM40,172a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H184a12,12,0,0,1,12,12V76H176a20,20,0,0,0-20,20v76Zm196,20a12,12,0,0,1-12,12H176a12,12,0,0,1-12-12V96a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12ZM132,208a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h40A4,4,0,0,1,132,208Zm80-96a4,4,0,0,1-4,4H192a4,4,0,0,1,0-8h16A4,4,0,0,1,212,112Z",
        })
      ),
    ],
  ]),
  P8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z",
        })
      ),
    ],
  ]),
  _8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M234.42,162A12,12,0,1,1,213.58,174l-16.86-29.5a127.19,127.19,0,0,1-30.17,13.86L171.84,190a12,12,0,0,1-9.87,13.8,11.22,11.22,0,0,1-2,.17,12,12,0,0,1-11.82-10L143,163.17a136.5,136.5,0,0,1-30.06,0L107.84,194A12,12,0,0,1,96,204a11.22,11.22,0,0,1-2-.17A12,12,0,0,1,84.16,190l5.29-31.72a127.19,127.19,0,0,1-30.17-13.86L42.42,174A12,12,0,1,1,21.58,162L40,129.85a159.73,159.73,0,0,1-17.31-18.31A12,12,0,0,1,41.34,96.46C57.38,116.32,85.44,140,128,140s70.62-23.68,86.66-43.54a12,12,0,0,1,18.67,15.08A159.73,159.73,0,0,1,216,129.85Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,104c-16.81,20.81-47.63,48-96,48s-79.19-27.19-96-48c16.81-20.81,47.63-48,96-48S207.19,83.19,224,104Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230.94,164A8,8,0,1,1,217.05,172l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a152.8,152.8,0,0,1-19.3-20,8,8,0,0,1,0-10.06C44.56,75.72,77.55,48,128,48s83.44,27.72,102.22,51a8,8,0,0,1,0,10.06,152.8,152.8,0,0,1-19.3,20Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M229.21,165a6,6,0,0,1-10.42,6l-20-35.08a122,122,0,0,1-39,18.09l6.17,37a6,6,0,0,1-4.93,6.91,6.85,6.85,0,0,1-1,.08,6,6,0,0,1-5.91-5L148,156.44a128.86,128.86,0,0,1-40,0L101.92,193A6,6,0,0,1,96,198a6.85,6.85,0,0,1-1-.08A6,6,0,0,1,90.08,191l6.17-37a122,122,0,0,1-39-18.09L37.21,171a6,6,0,1,1-10.42-6l20.85-36.48a152,152,0,0,1-20.31-20.77,6,6,0,0,1,9.34-7.54C53.54,121.11,83.07,146,128,146s74.46-24.89,91.33-45.77a6,6,0,0,1,9.34,7.54,152,152,0,0,1-20.31,20.77Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M226,171.47a3.92,3.92,0,0,1-2,.53,4,4,0,0,1-3.47-2l-21.15-37a120,120,0,0,1-41.91,19.53L164,191.34a4,4,0,0,1-3.29,4.6,3.79,3.79,0,0,1-.67.06,4,4,0,0,1-3.94-3.34l-6.41-38.5a128.17,128.17,0,0,1-43.28,0L100,192.66A4,4,0,0,1,96,196a3.88,3.88,0,0,1-.67-.06,4,4,0,0,1-3.29-4.6l6.48-38.83A120,120,0,0,1,56.62,133L35.47,170A4,4,0,0,1,32,172a3.92,3.92,0,0,1-2-.53A4,4,0,0,1,28.53,166l21.68-37.94a148.24,148.24,0,0,1-21.32-21.56,4,4,0,1,1,6.22-5C52.25,122.71,82.29,148,128,148s75.75-25.29,92.89-46.51a4,4,0,1,1,6.22,5,148.24,148.24,0,0,1-21.32,21.56L227.47,166A4,4,0,0,1,226,171.47Z",
        })
      ),
    ],
  ]),
  O8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M92,128A156.12,156.12,0,0,1,72.5,203.56a12,12,0,1,1-21-11.64A132,132,0,0,0,68,128a60,60,0,0,1,99.68-45,12,12,0,1,1-15.88,18A36,36,0,0,0,92,128Zm84.16-8H176a12,12,0,0,0-12,11.8,226.76,226.76,0,0,1-17,82.84,12,12,0,1,0,22.19,9.13A250.42,250.42,0,0,0,188,132.2,12,12,0,0,0,176.15,120Zm-62.22,81.21a12,12,0,0,0-16,5.54c-1.37,2.81-2.85,5.65-4.38,8.42a12,12,0,1,0,21,11.63c1.74-3.14,3.41-6.35,5-9.55A12,12,0,0,0,113.93,201.21ZM128,116a12,12,0,0,0-12,12,181,181,0,0,1-4.75,41.26,12,12,0,0,0,8.94,14.42,11.79,11.79,0,0,0,2.75.32,12,12,0,0,0,11.67-9.26A204.55,204.55,0,0,0,140,128,12,12,0,0,0,128,116Zm0-96a108,108,0,0,0-31.5,4.67,12,12,0,0,0,7,23A84.06,84.06,0,0,1,212,128a277.39,277.39,0,0,1-6.84,61.34,12,12,0,0,0,9.05,14.36,11.61,11.61,0,0,0,2.66.3,12,12,0,0,0,11.7-9.34A301.89,301.89,0,0,0,236,128,108.12,108.12,0,0,0,128,20ZM68.47,51.74a12,12,0,0,0-17,0A107.32,107.32,0,0,0,20,128a83.26,83.26,0,0,1-7.61,35,12,12,0,1,0,21.81,10A107.11,107.11,0,0,0,44,128,83.42,83.42,0,0,1,68.5,68.71,12,12,0,0,0,68.47,51.74Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.31,62.42A8,8,0,1,0,58.64,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.31,62.42Zm44.58,138.32a8,8,0,0,0-10.6,3.93c-1.93,4.2-4.05,8.39-6.3,12.44A8,8,0,0,0,100.11,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.89,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M126.41,24C70.72,24.85,25.21,70.07,24,125.75a103.48,103.48,0,0,0,13.51,53.5,4,4,0,0,0,7.1-.29A119.29,119.29,0,0,0,56,128,71.93,71.93,0,0,1,73.74,80.67a8.22,8.22,0,0,1,10.8-1.59A8,8,0,0,1,86,91a55.92,55.92,0,0,0-14,37,135.12,135.12,0,0,1-18.44,68.31,4,4,0,0,0,.61,4.85A104.33,104.33,0,0,0,67,212.21,4,4,0,0,0,72.82,211,159.58,159.58,0,0,0,84,189a8,8,0,1,1,14.8,6.1,176.9,176.9,0,0,1-11.85,23.54,4,4,0,0,0,1.89,5.74,103.46,103.46,0,0,0,25,6.7,4,4,0,0,0,4.07-2,206.86,206.86,0,0,0,25.57-85.61,8,8,0,1,1,15.95,1.16,222.83,222.83,0,0,1-21.58,80.75,4,4,0,0,0,4.08,5.74,103.72,103.72,0,0,0,20.6-4.95,4,4,0,0,0,2.35-2.23A247.29,247.29,0,0,0,184,129.76c.22-30.64-23.4-56.67-54-57.73a56.72,56.72,0,0,0-16,1.73,8,8,0,0,1-9.84-6.21,8.23,8.23,0,0,1,6.29-9.39A72.05,72.05,0,0,1,200,128a264.82,264.82,0,0,1-10.66,74.63,4,4,0,0,0,6.47,4.15A104,104,0,0,0,126.41,24ZM128,96a32.05,32.05,0,0,1,23.85,10.67,8,8,0,0,1-1.24,11.79,8.26,8.26,0,0,1-10.88-1.34,16,16,0,0,0-16.78-4.3,16.39,16.39,0,0,0-11,15.67,176.89,176.89,0,0,1-3.19,33A8,8,0,0,1,101,168a7.69,7.69,0,0,1-1.5-.14,8.3,8.3,0,0,1-6.31-9.66A161.12,161.12,0,0,0,96,128,32,32,0,0,1,128,96Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M182,128a244.65,244.65,0,0,1-18.38,93.48,6,6,0,0,1-5.55,3.72,6.13,6.13,0,0,1-2.28-.45,6,6,0,0,1-3.27-7.84A232.64,232.64,0,0,0,170,128a6,6,0,0,1,12,0ZM128,86a42.08,42.08,0,0,1,31.31,14,6,6,0,1,0,8.94-8A54,54,0,0,0,74,128a138.08,138.08,0,0,1-17.22,66.82,6,6,0,1,0,10.49,5.82A150.07,150.07,0,0,0,86,128,42,42,0,0,1,128,86Zm0-60a101.58,101.58,0,0,0-34,5.81,6,6,0,1,0,4,11.31A90.07,90.07,0,0,1,218,128a283.42,283.42,0,0,1-7,62.67,6,6,0,1,0,11.7,2.66A295.41,295.41,0,0,0,230,128,102.12,102.12,0,0,0,128,26ZM68,60.92A6,6,0,0,0,60,52a102.19,102.19,0,0,0-34,76,89.32,89.32,0,0,1-8.15,37.5,6,6,0,1,0,10.9,5A101.12,101.12,0,0,0,38,128,90.15,90.15,0,0,1,68,60.92Zm45.08,141.64a6,6,0,0,0-8,2.95c-2,4.24-4.09,8.47-6.36,12.57a6,6,0,0,0,2.34,8.15,5.88,5.88,0,0,0,2.9.76,6,6,0,0,0,5.25-3.09c2.42-4.36,4.7-8.87,6.78-13.39A6,6,0,0,0,113.08,202.56ZM128,122a6,6,0,0,0-6,6,186.54,186.54,0,0,1-5.86,46.5,6,6,0,0,0,4.32,7.31,5.93,5.93,0,0,0,1.5.19,6,6,0,0,0,5.8-4.5A198.75,198.75,0,0,0,134,128,6,6,0,0,0,128,122Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,128a246.64,246.64,0,0,1-18.54,94.24,8,8,0,0,1-7.4,5,8.19,8.19,0,0,1-3-.6,8,8,0,0,1-4.36-10.45A230.67,230.67,0,0,0,168,128a8,8,0,0,1,16,0ZM128,88a40.06,40.06,0,0,1,29.81,13.33,8,8,0,1,0,11.92-10.67A56,56,0,0,0,72,128a136.06,136.06,0,0,1-17,65.85,8,8,0,1,0,14,7.76A152.14,152.14,0,0,0,88,128,40,40,0,0,1,128,88Zm0-64a103.75,103.75,0,0,0-34.67,5.92A8,8,0,0,0,98.67,45,88.05,88.05,0,0,1,216,128a281.31,281.31,0,0,1-6.94,62.23,8,8,0,0,0,6,9.57,7.77,7.77,0,0,0,1.78.2,8,8,0,0,0,7.8-6.23A298.11,298.11,0,0,0,232,128,104.11,104.11,0,0,0,128,24ZM69.34,62.42A8,8,0,1,0,58.67,50.49,104.16,104.16,0,0,0,24,128a87.29,87.29,0,0,1-8,36.66,8,8,0,0,0,14.54,6.68A103.17,103.17,0,0,0,40,128,88.13,88.13,0,0,1,69.34,62.42Zm44.58,138.32a8,8,0,0,0-10.61,3.93c-1.92,4.2-4,8.39-6.29,12.44A8,8,0,0,0,100.14,228a7.88,7.88,0,0,0,3.87,1,8,8,0,0,0,7-4.12c2.44-4.41,4.74-9,6.84-13.52A8,8,0,0,0,113.92,200.74ZM128,120a8,8,0,0,0-8,8,185.07,185.07,0,0,1-5.79,46,8,8,0,0,0,5.75,9.74,8.12,8.12,0,0,0,2,.25,8,8,0,0,0,7.74-6,200.68,200.68,0,0,0,6.3-50A8,8,0,0,0,128,120Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M180,128a242.63,242.63,0,0,1-18.23,92.72,4,4,0,0,1-7.4-3A234.75,234.75,0,0,0,172,128a4,4,0,0,1,8,0ZM160.79,98.67a4,4,0,0,0,6-5.33A52,52,0,0,0,76,128,140,140,0,0,1,58.52,195.8a4,4,0,0,0,7,3.88A148.13,148.13,0,0,0,84,128a44,44,0,0,1,76.79-29.34ZM128,28a99.9,99.9,0,0,0-33.33,5.69,4,4,0,1,0,2.66,7.54A92.08,92.08,0,0,1,220,128a285.69,285.69,0,0,1-7,63.12,4,4,0,0,0,3,4.78,3.86,3.86,0,0,0,.89.1,4,4,0,0,0,3.89-3.12A293,293,0,0,0,228,128,100.11,100.11,0,0,0,128,28ZM66.67,59.43a4,4,0,0,0-5.34-6A100.17,100.17,0,0,0,28,128a91.3,91.3,0,0,1-8.34,38.33,4,4,0,0,0,2,5.3,3.93,3.93,0,0,0,1.66.37,4,4,0,0,0,3.64-2.33A99.15,99.15,0,0,0,36,128,92.16,92.16,0,0,1,66.67,59.43Zm45.58,144.94a4,4,0,0,0-5.31,2c-2,4.29-4.13,8.57-6.42,12.71a4,4,0,1,0,7,3.88c2.39-4.32,4.65-8.78,6.7-13.25A4,4,0,0,0,112.25,204.37ZM128,124a4,4,0,0,0-4,4,188.67,188.67,0,0,1-5.92,47,4,4,0,0,0,2.87,4.87,3.87,3.87,0,0,0,1,.13,4,4,0,0,0,3.87-3A196.62,196.62,0,0,0,132,128,4,4,0,0,0,128,124Z",
        })
      ),
    ],
  ]),
  M8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M236,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H96a27.8,27.8,0,0,0-4,.29V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V144a4,4,0,0,1,4-4h88a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,236,64ZM80,52A12,12,0,1,1,68,64,12,12,0,0,1,80,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,80,204ZM200,76a12,12,0,1,1,12-12A12,12,0,0,1,200,76Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,64a24,24,0,1,1-24-24A24,24,0,0,1,224,64Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H96a21.84,21.84,0,0,0-10,2.42v-31a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V144a10,10,0,0,1,10-10h88a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,230,64ZM62,64A18,18,0,1,1,80,82,18,18,0,0,1,62,64ZM98,192a18,18,0,1,1-18-18A18,18,0,0,1,98,192ZM200,82a18,18,0,1,1,18-18A18,18,0,0,1,200,82Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M228,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H96a19.91,19.91,0,0,0-12,4V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V144a12,12,0,0,1,12-12h88a20,20,0,0,0,20-20V91.71A28,28,0,0,0,228,64ZM60,64A20,20,0,1,1,80,84,20,20,0,0,1,60,64Zm40,128a20,20,0,1,1-20-20A20,20,0,0,1,100,192ZM200,84a20,20,0,1,1,20-20A20,20,0,0,1,200,84Z",
        })
      ),
    ],
  ]);
var j8 = Object.defineProperty,
  N8 = Object.defineProperties,
  L8 = Object.getOwnPropertyDescriptors,
  Du = Object.getOwnPropertySymbols,
  R8 = Object.prototype.hasOwnProperty,
  V8 = Object.prototype.propertyIsEnumerable,
  Uu = (e, t, n) =>
    t in e
      ? j8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  H8 = (e, t) => {
    for (var n in t || (t = {})) R8.call(t, n) && Uu(e, n, t[n]);
    if (Du) for (var n of Du(t)) V8.call(t, n) && Uu(e, n, t[n]);
    return e;
  },
  F8 = (e, t) => N8(e, L8(t));
const Q1 = P.forwardRef((e, t) =>
  c.createElement(w8, F8(H8({ ref: t }, e), { weights: M8 }))
);
Q1.displayName = "GitBranch";
const $8 = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z",
        })
      ),
    ],
  ]),
  Z8 = P.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
  });
var I8 = Object.defineProperty,
  xl = Object.getOwnPropertySymbols,
  K1 = Object.prototype.hasOwnProperty,
  Y1 = Object.prototype.propertyIsEnumerable,
  Bu = (e, t, n) =>
    t in e
      ? I8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Wu = (e, t) => {
    for (var n in t || (t = {})) K1.call(t, n) && Bu(e, n, t[n]);
    if (xl) for (var n of xl(t)) Y1.call(t, n) && Bu(e, n, t[n]);
    return e;
  },
  Qu = (e, t) => {
    var n = {};
    for (var r in e) K1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && xl)
      for (var r of xl(e)) t.indexOf(r) < 0 && Y1.call(e, r) && (n[r] = e[r]);
    return n;
  };
const G1 = P.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l,
      size: o,
      weight: i,
      mirrored: a,
      children: u,
      weights: s,
    } = n,
    m = Qu(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    p = P.useContext(Z8),
    {
      color: h = "currentColor",
      size: y,
      weight: g = "regular",
      mirrored: w = !1,
    } = p,
    k = Qu(p, ["color", "size", "weight", "mirrored"]);
  return c.createElement(
    "svg",
    Wu(
      Wu(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: o ?? y,
          height: o ?? y,
          fill: l ?? h,
          viewBox: "0 0 256 256",
          transform: a || w ? "scale(-1, 1)" : void 0,
        },
        k
      ),
      m
    ),
    !!r && c.createElement("title", null, r),
    u,
    s.get(i ?? g)
  );
});
G1.displayName = "IconBase";
const De = G1;
var z8 = Object.defineProperty,
  D8 = Object.defineProperties,
  U8 = Object.getOwnPropertyDescriptors,
  Ku = Object.getOwnPropertySymbols,
  B8 = Object.prototype.hasOwnProperty,
  W8 = Object.prototype.propertyIsEnumerable,
  Yu = (e, t, n) =>
    t in e
      ? z8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Q8 = (e, t) => {
    for (var n in t || (t = {})) B8.call(t, n) && Yu(e, n, t[n]);
    if (Ku) for (var n of Ku(t)) W8.call(t, n) && Yu(e, n, t[n]);
    return e;
  },
  K8 = (e, t) => D8(e, U8(t));
const X1 = P.forwardRef((e, t) =>
  c.createElement(De, K8(Q8({ ref: t }, e), { weights: E8 }))
);
X1.displayName = "ArrowBendLeftUp";
var Y8 = Object.defineProperty,
  G8 = Object.defineProperties,
  X8 = Object.getOwnPropertyDescriptors,
  Gu = Object.getOwnPropertySymbols,
  J8 = Object.prototype.hasOwnProperty,
  q8 = Object.prototype.propertyIsEnumerable,
  Xu = (e, t, n) =>
    t in e
      ? Y8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  b8 = (e, t) => {
    for (var n in t || (t = {})) J8.call(t, n) && Xu(e, n, t[n]);
    if (Gu) for (var n of Gu(t)) q8.call(t, n) && Xu(e, n, t[n]);
    return e;
  },
  ep = (e, t) => G8(e, X8(t));
const J1 = P.forwardRef((e, t) =>
  c.createElement(De, ep(b8({ ref: t }, e), { weights: S8 }))
);
J1.displayName = "ArrowUUpLeft";
var tp = Object.defineProperty,
  np = Object.defineProperties,
  rp = Object.getOwnPropertyDescriptors,
  Ju = Object.getOwnPropertySymbols,
  lp = Object.prototype.hasOwnProperty,
  op = Object.prototype.propertyIsEnumerable,
  qu = (e, t, n) =>
    t in e
      ? tp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ip = (e, t) => {
    for (var n in t || (t = {})) lp.call(t, n) && qu(e, n, t[n]);
    if (Ju) for (var n of Ju(t)) op.call(t, n) && qu(e, n, t[n]);
    return e;
  },
  ap = (e, t) => np(e, rp(t));
const q1 = P.forwardRef((e, t) =>
  c.createElement(De, ap(ip({ ref: t }, e), { weights: A8 }))
);
q1.displayName = "Bookmark";
var up = Object.defineProperty,
  sp = Object.defineProperties,
  cp = Object.getOwnPropertyDescriptors,
  bu = Object.getOwnPropertySymbols,
  fp = Object.prototype.hasOwnProperty,
  dp = Object.prototype.propertyIsEnumerable,
  e0 = (e, t, n) =>
    t in e
      ? up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  pp = (e, t) => {
    for (var n in t || (t = {})) fp.call(t, n) && e0(e, n, t[n]);
    if (bu) for (var n of bu(t)) dp.call(t, n) && e0(e, n, t[n]);
    return e;
  },
  mp = (e, t) => sp(e, cp(t));
const b1 = P.forwardRef((e, t) =>
  c.createElement(De, mp(pp({ ref: t }, e), { weights: k8 }))
);
b1.displayName = "Calendar";
var hp = Object.defineProperty,
  vp = Object.defineProperties,
  yp = Object.getOwnPropertyDescriptors,
  t0 = Object.getOwnPropertySymbols,
  gp = Object.prototype.hasOwnProperty,
  wp = Object.prototype.propertyIsEnumerable,
  n0 = (e, t, n) =>
    t in e
      ? hp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ep = (e, t) => {
    for (var n in t || (t = {})) gp.call(t, n) && n0(e, n, t[n]);
    if (t0) for (var n of t0(t)) wp.call(t, n) && n0(e, n, t[n]);
    return e;
  },
  Sp = (e, t) => vp(e, yp(t));
const Si = P.forwardRef((e, t) =>
  c.createElement(De, Sp(Ep({ ref: t }, e), { weights: C8 }))
);
Si.displayName = "Clock";
var Ap = Object.defineProperty,
  kp = Object.defineProperties,
  Cp = Object.getOwnPropertyDescriptors,
  r0 = Object.getOwnPropertySymbols,
  xp = Object.prototype.hasOwnProperty,
  Tp = Object.prototype.propertyIsEnumerable,
  l0 = (e, t, n) =>
    t in e
      ? Ap(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Pp = (e, t) => {
    for (var n in t || (t = {})) xp.call(t, n) && l0(e, n, t[n]);
    if (r0) for (var n of r0(t)) Tp.call(t, n) && l0(e, n, t[n]);
    return e;
  },
  _p = (e, t) => kp(e, Cp(t));
const ec = P.forwardRef((e, t) =>
  c.createElement(De, _p(Pp({ ref: t }, e), { weights: x8 }))
);
ec.displayName = "Confetti";
var Op = Object.defineProperty,
  Mp = Object.defineProperties,
  jp = Object.getOwnPropertyDescriptors,
  o0 = Object.getOwnPropertySymbols,
  Np = Object.prototype.hasOwnProperty,
  Lp = Object.prototype.propertyIsEnumerable,
  i0 = (e, t, n) =>
    t in e
      ? Op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Rp = (e, t) => {
    for (var n in t || (t = {})) Np.call(t, n) && i0(e, n, t[n]);
    if (o0) for (var n of o0(t)) Lp.call(t, n) && i0(e, n, t[n]);
    return e;
  },
  Vp = (e, t) => Mp(e, jp(t));
const tc = P.forwardRef((e, t) =>
  c.createElement(De, Vp(Rp({ ref: t }, e), { weights: T8 }))
);
tc.displayName = "Devices";
var Hp = Object.defineProperty,
  Fp = Object.defineProperties,
  $p = Object.getOwnPropertyDescriptors,
  a0 = Object.getOwnPropertySymbols,
  Zp = Object.prototype.hasOwnProperty,
  Ip = Object.prototype.propertyIsEnumerable,
  u0 = (e, t, n) =>
    t in e
      ? Hp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zp = (e, t) => {
    for (var n in t || (t = {})) Zp.call(t, n) && u0(e, n, t[n]);
    if (a0) for (var n of a0(t)) Ip.call(t, n) && u0(e, n, t[n]);
    return e;
  },
  Dp = (e, t) => Fp(e, $p(t));
const nc = P.forwardRef((e, t) =>
  c.createElement(De, Dp(zp({ ref: t }, e), { weights: P8 }))
);
nc.displayName = "Eye";
var Up = Object.defineProperty,
  Bp = Object.defineProperties,
  Wp = Object.getOwnPropertyDescriptors,
  s0 = Object.getOwnPropertySymbols,
  Qp = Object.prototype.hasOwnProperty,
  Kp = Object.prototype.propertyIsEnumerable,
  c0 = (e, t, n) =>
    t in e
      ? Up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Yp = (e, t) => {
    for (var n in t || (t = {})) Qp.call(t, n) && c0(e, n, t[n]);
    if (s0) for (var n of s0(t)) Kp.call(t, n) && c0(e, n, t[n]);
    return e;
  },
  Gp = (e, t) => Bp(e, Wp(t));
const rc = P.forwardRef((e, t) =>
  c.createElement(De, Gp(Yp({ ref: t }, e), { weights: _8 }))
);
rc.displayName = "EyeClosed";
var Xp = Object.defineProperty,
  Jp = Object.defineProperties,
  qp = Object.getOwnPropertyDescriptors,
  f0 = Object.getOwnPropertySymbols,
  bp = Object.prototype.hasOwnProperty,
  e4 = Object.prototype.propertyIsEnumerable,
  d0 = (e, t, n) =>
    t in e
      ? Xp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  t4 = (e, t) => {
    for (var n in t || (t = {})) bp.call(t, n) && d0(e, n, t[n]);
    if (f0) for (var n of f0(t)) e4.call(t, n) && d0(e, n, t[n]);
    return e;
  },
  n4 = (e, t) => Jp(e, qp(t));
const lc = P.forwardRef((e, t) =>
  c.createElement(De, n4(t4({ ref: t }, e), { weights: O8 }))
);
lc.displayName = "FingerprintSimple";
var r4 = Object.defineProperty,
  l4 = Object.defineProperties,
  o4 = Object.getOwnPropertyDescriptors,
  p0 = Object.getOwnPropertySymbols,
  i4 = Object.prototype.hasOwnProperty,
  a4 = Object.prototype.propertyIsEnumerable,
  m0 = (e, t, n) =>
    t in e
      ? r4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  u4 = (e, t) => {
    for (var n in t || (t = {})) i4.call(t, n) && m0(e, n, t[n]);
    if (p0) for (var n of p0(t)) a4.call(t, n) && m0(e, n, t[n]);
    return e;
  },
  s4 = (e, t) => l4(e, o4(t));
const oc = P.forwardRef((e, t) =>
  c.createElement(De, s4(u4({ ref: t }, e), { weights: $8 }))
);
oc.displayName = "House";
function ya() {
  const e = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return S.jsx(S.Fragment, {
    children: S.jsxs("footer", {
      className: "_footer",
      children: [
        S.jsx("p", { children: "© 2024 Cat`s Flow" }),
        S.jsxs("span", {
          children: [
            S.jsxs("span", { children: [S.jsx(Q1, {}), "B1.0.1"] }),
            S.jsx("button", {
              className: "_btn",
              onClick: e,
              children: S.jsx(X1, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
function ga() {
  return S.jsx("header", {
    className: "_header _jcenter",
    children: S.jsx("img", {
      src: "/config/assets/logotipo.svg",
      alt: "Logotipo do Ministério Kids",
      width: "112px",
      height: "78.84px",
    }),
  });
}
function c4() {
  const e = () => {
    window.history.back();
  };
  return S.jsxs("section", {
    className: "_body _np _hw",
    children: [
      S.jsxs(Sl, {
        children: [
          S.jsx("title", {
            children: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
          S.jsx("meta", {
            name: "title",
            content: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
        ],
      }),
      S.jsx(ga, {}),
      S.jsx("main", {
        className: "_main",
        children: S.jsxs("section", {
          className: "_card _errpage",
          children: [
            S.jsxs("div", {
              className: "_div",
              children: [
                S.jsx("h1", { children: "404" }),
                S.jsx("p", { children: "Parece que a página não existe." }),
              ],
            }),
            S.jsx("div", {
              className: "_div",
              children: S.jsxs("nav", {
                className: "_nav",
                children: [
                  S.jsxs("a", {
                    title: "Página inicial",
                    className: "_btn",
                    href: "/",
                    children: [S.jsx(oc, {}), "Home"],
                  }),
                  S.jsxs("button", {
                    type: "submit",
                    title: "Retornar para página anterior",
                    className: "_btn return",
                    onClick: e,
                    children: [S.jsx(J1, {}), "Voltar"],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      S.jsx(ya, {}),
    ],
  });
}
function f4() {
  const [e, t] = P.useState(!1),
    n = (r) => {
      r.stopPropagation(), t(!e);
    };
  return S.jsxs("section", {
    className: "_body _tutorial",
    children: [
      S.jsx(ga, {}),
      S.jsxs("main", {
        className: "_main",
        children: [
          S.jsxs("section", {
            className: "_card",
            children: [
              S.jsx("div", {
                className: "_fav",
                children: S.jsx(q1, { className: "ico" }),
              }),
              S.jsx("h2", { children: "Sistema Kids" }),
              S.jsxs("div", {
                className: "_div",
                children: [
                  S.jsx("p", {
                    children:
                      "O Ministério Kids lançou seu sistema escolar, onde reúne todas as informações sobre os alunos, além de permitir o registro dos alunos presentes nas aulas.",
                  }),
                  S.jsx("p", {
                    children:
                      "Para o sistema funcionar, há um custo de operação, por isso ele é ativado somente durante as aulas e desativado após o término delas, tornando-se inacessível para todos os usuários.",
                  }),
                ],
              }),
            ],
          }),
          S.jsxs("section", {
            className: "_card",
            children: [
              S.jsx("div", {
                className: "_fav",
                children: S.jsx(Si, { className: "ico" }),
              }),
              S.jsx("h2", { children: "Horário de funcionamento" }),
              S.jsxs("div", {
                className: "_div",
                children: [
                  S.jsxs("span", {
                    className: "_cont",
                    children: [
                      S.jsx(b1, { className: "ico" }),
                      S.jsx("p", { children: "Terças e Sábados" }),
                    ],
                  }),
                  S.jsxs("span", {
                    className: "_cont",
                    children: [
                      S.jsx(Si, { className: "ico" }),
                      S.jsx("p", { children: "Das 21h até 21h35min" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          S.jsxs("section", {
            className: "_card",
            children: [
              S.jsx("div", {
                className: "_fav",
                children: S.jsx(lc, { className: "ico" }),
              }),
              S.jsx("h2", { children: "Autenticação" }),
              S.jsxs("div", {
                className: "_div",
                children: [
                  S.jsx("p", {
                    children:
                      "Todos os professores receberam um usuário único, que não pode ser alterado, e uma senha padrão que deve ser modificada após o primeiro acesso.",
                  }),
                  S.jsxs("p", {
                    children: [
                      "Para alterar a senha após fazer login, o usuário deve clicar no menu superior direito, onde encontrará a opção ",
                      S.jsx("strong", { children: '"Conta"' }),
                      ". Em seguida, haverá um botão de ",
                      S.jsx("strong", { children: '"Trocar senha"' }),
                      ". Agora, é só escolher sua nova senha e armazená-la em um local seguro.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          S.jsxs("form", {
            className: "_card",
            children: [
              S.jsx("h2", {
                className: "center",
                children: "Exemplo do login",
              }),
              S.jsxs("div", {
                className: "_div",
                children: [
                  S.jsx("input", {
                    className: "_input",
                    type: "text",
                    placeholder: "Usuário",
                    name: "user",
                    maxLength: 15,
                    minLength: 5,
                    required: !0,
                    value: "nome.ultimosobrenome",
                  }),
                  S.jsxs("section", {
                    className: "_cnt",
                    children: [
                      S.jsx("input", {
                        className: "_input",
                        type: e ? "text" : "password",
                        placeholder: "Senha",
                        name: "password",
                        maxLength: 25,
                        minLength: 5,
                        required: !0,
                        value: "@MinisterioKids721",
                      }),
                      S.jsx("div", {
                        className: "_btn ico rd",
                        title: e ? "Ocultar senha" : "Mostrar senha",
                        onClick: n,
                        children: e ? S.jsx(rc, {}) : S.jsx(nc, {}),
                      }),
                    ],
                  }),
                ],
              }),
              S.jsx("button", {
                type: "submit",
                className: "_btn active center",
                title: "Entrar",
                children: "Entrar",
              }),
            ],
          }),
          S.jsxs("section", {
            className: "_card",
            children: [
              S.jsx("div", {
                className: "_fav",
                children: S.jsx(ec, { className: "ico" }),
              }),
              S.jsx("h2", { children: "Parabéns!" }),
              S.jsx("div", {
                className: "_div",
                children: S.jsx("p", {
                  children:
                    "Está na hora de começar a utilizar o Sistema Kids agora. Se você tiver alguma dúvida ou encontrar dificuldades para colocá-lo em prática, basta avisar a liderança do ministério. Estamos aqui para ajudar!",
                }),
              }),
              S.jsxs("a", {
                className: "_btn",
                href: "http://35.208.36.27/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [S.jsx(tc, { className: "ico" }), "Sistema Kids"],
              }),
            ],
          }),
        ],
      }),
      S.jsx(ya, {}),
    ],
  });
}
function d4() {
  return S.jsx("main", {
    className: "_loading",
    children: S.jsx("div", { className: "_load loader", id: "loader" }),
  });
}
function p4() {
  return (
    P.useEffect(() => {
      const e = setTimeout(() => {
        window.location.href = "http://35.208.36.27/";
      }, 3e3);
      return () => clearTimeout(e);
    }, []),
    S.jsxs("section", {
      className: "_body _hw",
      children: [
        S.jsx(ga, {}),
        S.jsx("main", { className: "_main", children: S.jsx(d4, {}) }),
        S.jsx(ya, {}),
      ],
    })
  );
}
function m4() {
  return S.jsxs(m8, {
    children: [
      S.jsxs(Sl, {
        children: [
          S.jsx("title", { children: "Ministério Kids" }),
          S.jsx("meta", { name: "title", content: "Ministério Kids" }),
        ],
      }),
      S.jsxs(f8, {
        children: [
          S.jsx($n, { path: "/", element: S.jsx(h8, {}) }),
          S.jsx($n, { path: "/sistema/tutorial", element: S.jsx(f4, {}) }),
          S.jsx($n, { path: "/sistema/kids", element: S.jsx(p4, {}) }),
          S.jsx($n, { path: "/*", element: S.jsx(c4, {}) }),
        ],
      }),
    ],
  });
}
Ao.createRoot(document.getElementById("page")).render(
  S.jsx(c.StrictMode, { children: S.jsx(m4, {}) })
);
