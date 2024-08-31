import { ref as No, shallowRef as La, defineComponent as Do, markRaw as Jo, h as $r, resolveComponent as Vr, openBlock as X, createElementBlock as se, createElementVNode as A, withDirectives as Yt, vModelText as Ba, createBlock as ho, withCtx as yo, createCommentVNode as Be, renderSlot as Ui, toDisplayString as mt, Fragment as Nr, createVNode as $a, vModelCheckbox as Qo, renderList as Jn, vShow as Xo, createTextVNode as pt } from "vue";
function ji(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ua } = Object.prototype, { getPrototypeOf: ko } = Object, Zr = /* @__PURE__ */ ((e) => (t) => {
  const r = Ua.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), we = (e) => (e = e.toLowerCase(), (t) => Zr(t) === e), en = (e) => (t) => typeof t === e, { isArray: At } = Array, rr = en("undefined");
function ja(e) {
  return e !== null && !rr(e) && e.constructor !== null && !rr(e.constructor) && pe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qi = we("ArrayBuffer");
function qa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qi(e.buffer), t;
}
const Ha = en("string"), pe = en("function"), Hi = en("number"), tn = (e) => e !== null && typeof e == "object", Va = (e) => e === !0 || e === !1, Ur = (e) => {
  if (Zr(e) !== "object")
    return !1;
  const t = ko(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, za = we("Date"), Wa = we("File"), Ga = we("Blob"), Ka = we("FileList"), Ja = (e) => tn(e) && pe(e.pipe), Qa = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pe(e.append) && ((t = Zr(e)) === "formdata" || // detect form-data instance
  t === "object" && pe(e.toString) && e.toString() === "[object FormData]"));
}, Xa = we("URLSearchParams"), [Ya, Za, es, ts] = ["ReadableStream", "Request", "Response", "Headers"].map(we), rs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function or(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), At(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = a.length;
    let u;
    for (n = 0; n < l; n++)
      u = a[n], t.call(null, e[u], u, e);
  }
}
function Vi(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Qe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zi = (e) => !rr(e) && e !== Qe;
function go() {
  const { caseless: e } = zi(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Vi(t, i) || i;
    Ur(t[a]) && Ur(n) ? t[a] = go(t[a], n) : Ur(n) ? t[a] = go({}, n) : At(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && or(arguments[n], r);
  return t;
}
const ns = (e, t, r, { allOwnKeys: n } = {}) => (or(t, (i, a) => {
  r && pe(i) ? e[a] = ji(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), os = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), is = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, as = (e, t, r, n) => {
  let i, a, l;
  const u = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      l = i[a], (!n || n(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = r !== !1 && ko(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ss = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ls = (e) => {
  if (!e) return null;
  if (At(e)) return e;
  let t = e.length;
  if (!Hi(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, cs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ko(Uint8Array)), us = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, fs = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ds = we("HTMLFormElement"), ps = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Yo = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), hs = we("RegExp"), Wi = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  or(r, (i, a) => {
    let l;
    (l = t(i, a, e)) !== !1 && (n[a] = l || i);
  }), Object.defineProperties(e, n);
}, ys = (e) => {
  Wi(e, (t, r) => {
    if (pe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (pe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, gs = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return At(e) ? n(e) : n(String(e).split(t)), r;
}, ms = () => {
}, vs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Qn = "abcdefghijklmnopqrstuvwxyz", Zo = "0123456789", Gi = {
  DIGIT: Zo,
  ALPHA: Qn,
  ALPHA_DIGIT: Qn + Qn.toUpperCase() + Zo
}, bs = (e = 16, t = Gi.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ws(e) {
  return !!(e && pe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ss = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (tn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = At(n) ? [] : {};
        return or(n, (l, u) => {
          const h = r(l, i + 1);
          !rr(h) && (a[u] = h);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, _s = we("AsyncFunction"), Es = (e) => e && (tn(e) || pe(e)) && pe(e.then) && pe(e.catch), Ki = ((e, t) => e ? setImmediate : t ? ((r, n) => (Qe.addEventListener("message", ({ source: i, data: a }) => {
  i === Qe && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Qe.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  pe(Qe.postMessage)
), As = typeof queueMicrotask < "u" ? queueMicrotask.bind(Qe) : typeof process < "u" && process.nextTick || Ki, y = {
  isArray: At,
  isArrayBuffer: qi,
  isBuffer: ja,
  isFormData: Qa,
  isArrayBufferView: qa,
  isString: Ha,
  isNumber: Hi,
  isBoolean: Va,
  isObject: tn,
  isPlainObject: Ur,
  isReadableStream: Ya,
  isRequest: Za,
  isResponse: es,
  isHeaders: ts,
  isUndefined: rr,
  isDate: za,
  isFile: Wa,
  isBlob: Ga,
  isRegExp: hs,
  isFunction: pe,
  isStream: Ja,
  isURLSearchParams: Xa,
  isTypedArray: cs,
  isFileList: Ka,
  forEach: or,
  merge: go,
  extend: ns,
  trim: rs,
  stripBOM: os,
  inherits: is,
  toFlatObject: as,
  kindOf: Zr,
  kindOfTest: we,
  endsWith: ss,
  toArray: ls,
  forEachEntry: us,
  matchAll: fs,
  isHTMLForm: ds,
  hasOwnProperty: Yo,
  hasOwnProp: Yo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wi,
  freezeMethods: ys,
  toObjectSet: gs,
  toCamelCase: ps,
  noop: ms,
  toFiniteNumber: vs,
  findKey: Vi,
  global: Qe,
  isContextDefined: zi,
  ALPHABET: Gi,
  generateString: bs,
  isSpecCompliantForm: ws,
  toJSONObject: Ss,
  isAsyncFn: _s,
  isThenable: Es,
  setImmediate: Ki,
  asap: As
};
function I(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
y.inherits(I, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ji = I.prototype, Qi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qi[e] = { value: e };
});
Object.defineProperties(I, Qi);
Object.defineProperty(Ji, "isAxiosError", { value: !0 });
I.from = (e, t, r, n, i, a) => {
  const l = Object.create(Ji);
  return y.toFlatObject(e, l, function(h) {
    return h !== Error.prototype;
  }, (u) => u !== "isAxiosError"), I.call(l, e.message, t, r, n, i), l.cause = e, l.name = e.name, a && Object.assign(l, a), l;
};
const xs = null;
function mo(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Xi(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ei(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = Xi(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function Os(e) {
  return y.isArray(e) && !e.some(mo);
}
const Ts = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rn(e, t, r) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = y.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !y.isUndefined(b[v]);
  });
  const n = r.metaTokens, i = r.visitor || d, a = r.dots, l = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(i))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null) return "";
    if (y.isDate(f))
      return f.toISOString();
    if (!h && y.isBlob(f))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(f) || y.isTypedArray(f) ? h && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, v, b) {
    let E = f;
    if (f && !b && typeof f == "object") {
      if (y.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), f = JSON.stringify(f);
      else if (y.isArray(f) && Os(f) || (y.isFileList(f) || y.endsWith(v, "[]")) && (E = y.toArray(f)))
        return v = Xi(v), E.forEach(function(_, T) {
          !(y.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ei([v], T, a) : l === null ? v : v + "[]",
            p(_)
          );
        }), !1;
    }
    return mo(f) ? !0 : (t.append(ei(b, v, a), p(f)), !1);
  }
  const g = [], w = Object.assign(Ts, {
    defaultVisitor: d,
    convertValue: p,
    isVisitable: mo
  });
  function S(f, v) {
    if (!y.isUndefined(f)) {
      if (g.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      g.push(f), y.forEach(f, function(E, O) {
        (!(y.isUndefined(E) || E === null) && i.call(
          t,
          E,
          y.isString(O) ? O.trim() : O,
          v,
          w
        )) === !0 && S(E, v ? v.concat(O) : [O]);
      }), g.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function ti(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Mo(e, t) {
  this._pairs = [], e && rn(e, this, t);
}
const Yi = Mo.prototype;
Yi.append = function(t, r) {
  this._pairs.push([t, r]);
};
Yi.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ti);
  } : ti;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Ps(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Zi(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ps, i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = y.isURLSearchParams(t) ? t.toString() : new Mo(t, r).toString(n), a) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ri {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    y.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ea = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cs = typeof URLSearchParams < "u" ? URLSearchParams : Mo, Rs = typeof FormData < "u" ? FormData : null, Is = typeof Blob < "u" ? Blob : null, Fs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cs,
    FormData: Rs,
    Blob: Is
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Lo = typeof window < "u" && typeof document < "u", vo = typeof navigator == "object" && navigator || void 0, Ns = Lo && (!vo || ["ReactNative", "NativeScript", "NS"].indexOf(vo.product) < 0), Ds = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ks = Lo && window.location.href || "http://localhost", Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Lo,
  hasStandardBrowserEnv: Ns,
  hasStandardBrowserWebWorkerEnv: Ds,
  navigator: vo,
  origin: ks
}, Symbol.toStringTag, { value: "Module" })), le = {
  ...Ms,
  ...Fs
};
function Ls(e, t) {
  return rn(e, new le.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return le.isNode && y.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bs(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $s(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function ta(e) {
  function t(r, n, i, a) {
    let l = r[a++];
    if (l === "__proto__") return !0;
    const u = Number.isFinite(+l), h = a >= r.length;
    return l = !l && y.isArray(i) ? i.length : l, h ? (y.hasOwnProp(i, l) ? i[l] = [i[l], n] : i[l] = n, !u) : ((!i[l] || !y.isObject(i[l])) && (i[l] = []), t(r, n, i[l], a) && y.isArray(i[l]) && (i[l] = $s(i[l])), !u);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const r = {};
    return y.forEachEntry(e, (n, i) => {
      t(Bs(n), i, r, 0);
    }), r;
  }
  return null;
}
function Us(e, t, r) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ir = {
  transitional: ea,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = y.isObject(t);
    if (a && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return i ? JSON.stringify(ta(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ls(t, this.formSerializer).toString();
      if ((u = y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return rn(
          u ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Us(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ir.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (y.isResponse(t) || y.isReadableStream(t))
      return t;
    if (t && y.isString(t) && (n && !this.responseType || i)) {
      const l = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? I.from(u, I.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: le.classes.FormData,
    Blob: le.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ir.headers[e] = {};
});
const js = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), qs = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(l) {
    i = l.indexOf(":"), r = l.substring(0, i).trim().toLowerCase(), n = l.substring(i + 1).trim(), !(!r || t[r] && js[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ni = Symbol("internals");
function Kt(e) {
  return e && String(e).trim().toLowerCase();
}
function jr(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(jr) : String(e);
}
function Hs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Vs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xn(e, t, r, n, i) {
  if (y.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!y.isString(t)) {
    if (y.isString(n))
      return t.indexOf(n) !== -1;
    if (y.isRegExp(n))
      return n.test(t);
  }
}
function zs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ws(e, t) {
  const r = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, l) {
        return this[n].call(this, t, i, a, l);
      },
      configurable: !0
    });
  });
}
class ce {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(u, h, p) {
      const d = Kt(h);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = y.findKey(i, d);
      (!g || i[g] === void 0 || p === !0 || p === void 0 && i[g] !== !1) && (i[g || h] = jr(u));
    }
    const l = (u, h) => y.forEach(u, (p, d) => a(p, d, h));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (y.isString(t) && (t = t.trim()) && !Vs(t))
      l(qs(t), r);
    else if (y.isHeaders(t))
      for (const [u, h] of t.entries())
        a(h, u, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Kt(t), t) {
      const n = y.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Hs(i);
        if (y.isFunction(r))
          return r.call(this, i, n);
        if (y.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Kt(t), t) {
      const n = y.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(l) {
      if (l = Kt(l), l) {
        const u = y.findKey(n, l);
        u && (!r || Xn(n, n[u], u, r)) && (delete n[u], i = !0);
      }
    }
    return y.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Xn(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return y.forEach(this, (i, a) => {
      const l = y.findKey(n, a);
      if (l) {
        r[l] = jr(i), delete r[a];
        return;
      }
      const u = t ? zs(a) : String(a).trim();
      u !== a && delete r[a], r[u] = jr(i), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && y.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[ni] = this[ni] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(l) {
      const u = Kt(l);
      n[u] || (Ws(i, l), n[u] = !0);
    }
    return y.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(ce.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
y.freezeMethods(ce);
function Yn(e, t) {
  const r = this || ir, n = t || r, i = ce.from(n.headers);
  let a = n.data;
  return y.forEach(e, function(u) {
    a = u.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function ra(e) {
  return !!(e && e.__CANCEL__);
}
function xt(e, t, r) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, r), this.name = "CanceledError";
}
y.inherits(xt, I, {
  __CANCEL__: !0
});
function na(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new I(
    "Request failed with status code " + r.status,
    [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Gs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ks(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, l;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), d = n[a];
    l || (l = p), r[i] = h, n[i] = p;
    let g = a, w = 0;
    for (; g !== i; )
      w += r[g++], g = g % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), p - l < t)
      return;
    const S = d && p - d;
    return S ? Math.round(w * 1e3 / S) : void 0;
  };
}
function Js(e, t) {
  let r = 0, n = 1e3 / t, i, a;
  const l = (p, d = Date.now()) => {
    r = d, i = null, a && (clearTimeout(a), a = null), e.apply(null, p);
  };
  return [(...p) => {
    const d = Date.now(), g = d - r;
    g >= n ? l(p, d) : (i = p, a || (a = setTimeout(() => {
      a = null, l(i);
    }, n - g)));
  }, () => i && l(i)];
}
const zr = (e, t, r = 3) => {
  let n = 0;
  const i = Ks(50, 250);
  return Js((a) => {
    const l = a.loaded, u = a.lengthComputable ? a.total : void 0, h = l - n, p = i(h), d = l <= u;
    n = l;
    const g = {
      loaded: l,
      total: u,
      progress: u ? l / u : void 0,
      bytes: h,
      rate: p || void 0,
      estimated: p && u && d ? (u - l) / p : void 0,
      event: a,
      lengthComputable: u != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, r);
}, oi = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, ii = (e) => (...t) => y.asap(() => e(...t)), Qs = le.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = le.navigator && /(msie|trident)/i.test(le.navigator.userAgent), r = document.createElement("a");
    let n;
    function i(a) {
      let l = a;
      return t && (r.setAttribute("href", l), l = r.href), r.setAttribute("href", l), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(l) {
      const u = y.isString(l) ? i(l) : l;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Xs = le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const l = [e + "=" + encodeURIComponent(t)];
      y.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), y.isString(n) && l.push("path=" + n), y.isString(i) && l.push("domain=" + i), a === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ys(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function oa(e, t) {
  return e && !Ys(t) ? Zs(e, t) : t;
}
const ai = (e) => e instanceof ce ? { ...e } : e;
function et(e, t) {
  t = t || {};
  const r = {};
  function n(p, d, g) {
    return y.isPlainObject(p) && y.isPlainObject(d) ? y.merge.call({ caseless: g }, p, d) : y.isPlainObject(d) ? y.merge({}, d) : y.isArray(d) ? d.slice() : d;
  }
  function i(p, d, g) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(p))
        return n(void 0, p, g);
    } else return n(p, d, g);
  }
  function a(p, d) {
    if (!y.isUndefined(d))
      return n(void 0, d);
  }
  function l(p, d) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(p))
        return n(void 0, p);
    } else return n(void 0, d);
  }
  function u(p, d, g) {
    if (g in t)
      return n(p, d);
    if (g in e)
      return n(void 0, p);
  }
  const h = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (p, d) => i(ai(p), ai(d), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const g = h[d] || i, w = g(e[d], t[d], d);
    y.isUndefined(w) && g !== u || (r[d] = w);
  }), r;
}
const ia = (e) => {
  const t = et({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: l, auth: u } = t;
  t.headers = l = ce.from(l), t.url = Zi(oa(t.baseURL, t.url), e.params, e.paramsSerializer), u && l.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let h;
  if (y.isFormData(r)) {
    if (le.hasStandardBrowserEnv || le.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((h = l.getContentType()) !== !1) {
      const [p, ...d] = h ? h.split(";").map((g) => g.trim()).filter(Boolean) : [];
      l.setContentType([p || "multipart/form-data", ...d].join("; "));
    }
  }
  if (le.hasStandardBrowserEnv && (n && y.isFunction(n) && (n = n(t)), n || n !== !1 && Qs(t.url))) {
    const p = i && a && Xs.read(a);
    p && l.set(i, p);
  }
  return t;
}, el = typeof XMLHttpRequest < "u", tl = el && function(e) {
  return new Promise(function(r, n) {
    const i = ia(e);
    let a = i.data;
    const l = ce.from(i.headers).normalize();
    let { responseType: u, onUploadProgress: h, onDownloadProgress: p } = i, d, g, w, S, f;
    function v() {
      S && S(), f && f(), i.cancelToken && i.cancelToken.unsubscribe(d), i.signal && i.signal.removeEventListener("abort", d);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function E() {
      if (!b)
        return;
      const _ = ce.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), C = {
        data: !u || u === "text" || u === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: _,
        config: e,
        request: b
      };
      na(function(B) {
        r(B), v();
      }, function(B) {
        n(B), v();
      }, C), b = null;
    }
    "onloadend" in b ? b.onloadend = E : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, b.onabort = function() {
      b && (n(new I("Request aborted", I.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      n(new I("Network Error", I.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let T = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const C = i.transitional || ea;
      i.timeoutErrorMessage && (T = i.timeoutErrorMessage), n(new I(
        T,
        C.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
        e,
        b
      )), b = null;
    }, a === void 0 && l.setContentType(null), "setRequestHeader" in b && y.forEach(l.toJSON(), function(T, C) {
      b.setRequestHeader(C, T);
    }), y.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), u && u !== "json" && (b.responseType = i.responseType), p && ([w, f] = zr(p, !0), b.addEventListener("progress", w)), h && b.upload && ([g, S] = zr(h), b.upload.addEventListener("progress", g), b.upload.addEventListener("loadend", S)), (i.cancelToken || i.signal) && (d = (_) => {
      b && (n(!_ || _.type ? new xt(null, e, b) : _), b.abort(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(d), i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
    const O = Gs(i.url);
    if (O && le.protocols.indexOf(O) === -1) {
      n(new I("Unsupported protocol " + O + ":", I.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(a || null);
  });
}, rl = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(p) {
      if (!i) {
        i = !0, u();
        const d = p instanceof Error ? p : this.reason;
        n.abort(d instanceof I ? d : new xt(d instanceof Error ? d.message : d));
      }
    };
    let l = t && setTimeout(() => {
      l = null, a(new I(`timeout ${t} of ms exceeded`, I.ETIMEDOUT));
    }, t);
    const u = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(a) : p.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", a));
    const { signal: h } = n;
    return h.unsubscribe = () => y.asap(u), h;
  }
}, nl = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, ol = async function* (e, t, r) {
  for await (const n of e)
    yield* nl(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, si = (e, t, r, n, i) => {
  const a = ol(e, t, i);
  let l = 0, u, h = (p) => {
    u || (u = !0, n && n(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: d, value: g } = await a.next();
        if (d) {
          h(), p.close();
          return;
        }
        let w = g.byteLength;
        if (r) {
          let S = l += w;
          r(S);
        }
        p.enqueue(new Uint8Array(g));
      } catch (d) {
        throw h(d), d;
      }
    },
    cancel(p) {
      return h(p), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, nn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", aa = nn && typeof ReadableStream == "function", bo = nn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), sa = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, il = aa && sa(() => {
  let e = !1;
  const t = new Request(le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), li = 64 * 1024, wo = aa && sa(() => y.isReadableStream(new Response("").body)), Wr = {
  stream: wo && ((e) => e.body)
};
nn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Wr[t] && (Wr[t] = y.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new I(`Response type '${t}' is not supported`, I.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const al = async (e) => {
  if (e == null)
    return 0;
  if (y.isBlob(e))
    return e.size;
  if (y.isSpecCompliantForm(e))
    return (await new Request(le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (y.isArrayBufferView(e) || y.isArrayBuffer(e))
    return e.byteLength;
  if (y.isURLSearchParams(e) && (e = e + ""), y.isString(e))
    return (await bo(e)).byteLength;
}, sl = async (e, t) => {
  const r = y.toFiniteNumber(e.getContentLength());
  return r ?? al(t);
}, ll = nn && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: l,
    onDownloadProgress: u,
    onUploadProgress: h,
    responseType: p,
    headers: d,
    withCredentials: g = "same-origin",
    fetchOptions: w
  } = ia(e);
  p = p ? (p + "").toLowerCase() : "text";
  let S = rl([i, a && a.toAbortSignal()], l), f;
  const v = S && S.unsubscribe && (() => {
    S.unsubscribe();
  });
  let b;
  try {
    if (h && il && r !== "get" && r !== "head" && (b = await sl(d, n)) !== 0) {
      let C = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), F;
      if (y.isFormData(n) && (F = C.headers.get("content-type")) && d.setContentType(F), C.body) {
        const [B, P] = oi(
          b,
          zr(ii(h))
        );
        n = si(C.body, li, B, P, bo);
      }
    }
    y.isString(g) || (g = g ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    f = new Request(t, {
      ...w,
      signal: S,
      method: r.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: E ? g : void 0
    });
    let O = await fetch(f);
    const _ = wo && (p === "stream" || p === "response");
    if (wo && (u || _ && v)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((N) => {
        C[N] = O[N];
      });
      const F = y.toFiniteNumber(O.headers.get("content-length")), [B, P] = u && oi(
        F,
        zr(ii(u), !0)
      ) || [];
      O = new Response(
        si(O.body, li, B, () => {
          P && P(), v && v();
        }, bo),
        C
      );
    }
    p = p || "text";
    let T = await Wr[y.findKey(Wr, p) || "text"](O, e);
    return !_ && v && v(), await new Promise((C, F) => {
      na(C, F, {
        data: T,
        headers: ce.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: f
      });
    });
  } catch (E) {
    throw v && v(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new I("Network Error", I.ERR_NETWORK, e, f),
      {
        cause: E.cause || E
      }
    ) : I.from(E, E && E.code, e, f);
  }
}), So = {
  http: xs,
  xhr: tl,
  fetch: ll
};
y.forEach(So, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ci = (e) => `- ${e}`, cl = (e) => y.isFunction(e) || e === null || e === !1, la = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let l;
      if (n = r, !cl(r) && (n = So[(l = String(r)).toLowerCase()], n === void 0))
        throw new I(`Unknown adapter '${l}'`);
      if (n)
        break;
      i[l || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([u, h]) => `adapter ${u} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? a.length > 1 ? `since :
` + a.map(ci).join(`
`) : " " + ci(a[0]) : "as no adapter specified";
      throw new I(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: So
};
function Zn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new xt(null, e);
}
function ui(e) {
  return Zn(e), e.headers = ce.from(e.headers), e.data = Yn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), la.getAdapter(e.adapter || ir.adapter)(e).then(function(n) {
    return Zn(e), n.data = Yn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ce.from(n.headers), n;
  }, function(n) {
    return ra(n) || (Zn(e), n && n.response && (n.response.data = Yn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ce.from(n.response.headers))), Promise.reject(n);
  });
}
const ca = "1.7.6", Bo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bo[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const fi = {};
Bo.transitional = function(t, r, n) {
  function i(a, l) {
    return "[Axios v" + ca + "] Transitional option '" + a + "'" + l + (n ? ". " + n : "");
  }
  return (a, l, u) => {
    if (t === !1)
      throw new I(
        i(l, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return r && !fi[l] && (fi[l] = !0, console.warn(
      i(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, l, u) : !0;
  };
};
function ul(e, t, r) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], l = t[a];
    if (l) {
      const u = e[a], h = u === void 0 || l(u, a, e);
      if (h !== !0)
        throw new I("option " + a + " must be " + h, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new I("Unknown option " + a, I.ERR_BAD_OPTION);
  }
}
const _o = {
  assertOptions: ul,
  validators: Bo
}, Me = _o.validators;
class Xe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ri(),
      response: new ri()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = et(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && _o.assertOptions(n, {
      silentJSONParsing: Me.transitional(Me.boolean),
      forcedJSONParsing: Me.transitional(Me.boolean),
      clarifyTimeoutError: Me.transitional(Me.boolean)
    }, !1), i != null && (y.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : _o.assertOptions(i, {
      encode: Me.function,
      serialize: Me.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = a && y.merge(
      a.common,
      a[r.method]
    );
    a && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete a[f];
      }
    ), r.headers = ce.concat(l, a);
    const u = [];
    let h = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (h = h && v.synchronous, u.unshift(v.fulfilled, v.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(v) {
      p.push(v.fulfilled, v.rejected);
    });
    let d, g = 0, w;
    if (!h) {
      const f = [ui.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, p), w = f.length, d = Promise.resolve(r); g < w; )
        d = d.then(f[g++], f[g++]);
      return d;
    }
    w = u.length;
    let S = r;
    for (g = 0; g < w; ) {
      const f = u[g++], v = u[g++];
      try {
        S = f(S);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      d = ui.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (g = 0, w = p.length; g < w; )
      d = d.then(p[g++], p[g++]);
    return d;
  }
  getUri(t) {
    t = et(this.defaults, t);
    const r = oa(t.baseURL, t.url);
    return Zi(r, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(t) {
  Xe.prototype[t] = function(r, n) {
    return this.request(et(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, l, u) {
      return this.request(et(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: l
      }));
    };
  }
  Xe.prototype[t] = r(), Xe.prototype[t + "Form"] = r(!0);
});
class $o {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const l = new Promise((u) => {
        n.subscribe(u), a = u;
      }).then(i);
      return l.cancel = function() {
        n.unsubscribe(a);
      }, l;
    }, t(function(a, l, u) {
      n.reason || (n.reason = new xt(a, l, u), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new $o(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
function fl(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function dl(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Eo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Eo).forEach(([e, t]) => {
  Eo[t] = e;
});
function ua(e) {
  const t = new Xe(e), r = ji(Xe.prototype.request, t);
  return y.extend(r, Xe.prototype, t, { allOwnKeys: !0 }), y.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return ua(et(e, i));
  }, r;
}
const H = ua(ir);
H.Axios = Xe;
H.CanceledError = xt;
H.CancelToken = $o;
H.isCancel = ra;
H.VERSION = ca;
H.toFormData = rn;
H.AxiosError = I;
H.Cancel = H.CanceledError;
H.all = function(t) {
  return Promise.all(t);
};
H.spread = fl;
H.isAxiosError = dl;
H.mergeConfig = et;
H.AxiosHeaders = ce;
H.formToJSON = (e) => ta(y.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = la.getAdapter;
H.HttpStatusCode = Eo;
H.default = H;
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hl(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var yl = function(t) {
  return gl(t) && !ml(t);
};
function gl(e) {
  return !!e && typeof e == "object";
}
function ml(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || wl(e);
}
var vl = typeof Symbol == "function" && Symbol.for, bl = vl ? Symbol.for("react.element") : 60103;
function wl(e) {
  return e.$$typeof === bl;
}
function Sl(e) {
  return Array.isArray(e) ? [] : {};
}
function nr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? wt(Sl(e), e, t) : e;
}
function _l(e, t, r) {
  return e.concat(t).map(function(n) {
    return nr(n, r);
  });
}
function El(e, t) {
  if (!t.customMerge)
    return wt;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : wt;
}
function Al(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function di(e) {
  return Object.keys(e).concat(Al(e));
}
function fa(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function xl(e, t) {
  return fa(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Ol(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && di(e).forEach(function(i) {
    n[i] = nr(e[i], r);
  }), di(t).forEach(function(i) {
    xl(e, i) || (fa(e, i) && r.isMergeableObject(t[i]) ? n[i] = El(i, r)(e[i], t[i], r) : n[i] = nr(t[i], r));
  }), n;
}
function wt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || _l, r.isMergeableObject = r.isMergeableObject || yl, r.cloneUnlessOtherwiseSpecified = nr;
  var n = Array.isArray(t), i = Array.isArray(e), a = n === i;
  return a ? n ? r.arrayMerge(e, t, r) : Ol(e, t, r) : nr(t, r);
}
wt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return wt(n, i, r);
  }, {});
};
var Tl = wt, Pl = Tl;
const Cl = /* @__PURE__ */ pl(Pl);
var Rl = Error, Il = EvalError, Fl = RangeError, Nl = ReferenceError, da = SyntaxError, ar = TypeError, Dl = URIError, kl = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = Object.getOwnPropertyDescriptor(t, r);
    if (l.value !== i || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, pi = typeof Symbol < "u" && Symbol, Ml = kl, Ll = function() {
  return typeof pi != "function" || typeof Symbol != "function" || typeof pi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Ml();
}, eo = {
  __proto__: null,
  foo: {}
}, Bl = Object, $l = function() {
  return { __proto__: eo }.foo === eo.foo && !(eo instanceof Bl);
}, Ul = "Function.prototype.bind called on incompatible ", jl = Object.prototype.toString, ql = Math.max, Hl = "[object Function]", hi = function(t, r) {
  for (var n = [], i = 0; i < t.length; i += 1)
    n[i] = t[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, Vl = function(t, r) {
  for (var n = [], i = r, a = 0; i < t.length; i += 1, a += 1)
    n[a] = t[i];
  return n;
}, zl = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, Wl = function(t) {
  var r = this;
  if (typeof r != "function" || jl.apply(r) !== Hl)
    throw new TypeError(Ul + r);
  for (var n = Vl(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var d = r.apply(
        this,
        hi(n, arguments)
      );
      return Object(d) === d ? d : this;
    }
    return r.apply(
      t,
      hi(n, arguments)
    );
  }, l = ql(0, r.length - n.length), u = [], h = 0; h < l; h++)
    u[h] = "$" + h;
  if (i = Function("binder", "return function (" + zl(u, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var p = function() {
    };
    p.prototype = r.prototype, i.prototype = new p(), p.prototype = null;
  }
  return i;
}, Gl = Wl, Uo = Function.prototype.bind || Gl, Kl = Function.prototype.call, Jl = Object.prototype.hasOwnProperty, Ql = Uo, Xl = Ql.call(Kl, Jl), D, Yl = Rl, Zl = Il, ec = Fl, tc = Nl, St = da, bt = ar, rc = Dl, pa = Function, to = function(e) {
  try {
    return pa('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ye = Object.getOwnPropertyDescriptor;
if (Ye)
  try {
    Ye({}, "");
  } catch {
    Ye = null;
  }
var ro = function() {
  throw new bt();
}, nc = Ye ? function() {
  try {
    return arguments.callee, ro;
  } catch {
    try {
      return Ye(arguments, "callee").get;
    } catch {
      return ro;
    }
  }
}() : ro, ht = Ll(), oc = $l(), G = Object.getPrototypeOf || (oc ? function(e) {
  return e.__proto__;
} : null), vt = {}, ic = typeof Uint8Array > "u" || !G ? D : G(Uint8Array), Ze = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? D : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? D : ArrayBuffer,
  "%ArrayIteratorPrototype%": ht && G ? G([][Symbol.iterator]()) : D,
  "%AsyncFromSyncIteratorPrototype%": D,
  "%AsyncFunction%": vt,
  "%AsyncGenerator%": vt,
  "%AsyncGeneratorFunction%": vt,
  "%AsyncIteratorPrototype%": vt,
  "%Atomics%": typeof Atomics > "u" ? D : Atomics,
  "%BigInt%": typeof BigInt > "u" ? D : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? D : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? D : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? D : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Yl,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Zl,
  "%Float32Array%": typeof Float32Array > "u" ? D : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? D : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? D : FinalizationRegistry,
  "%Function%": pa,
  "%GeneratorFunction%": vt,
  "%Int8Array%": typeof Int8Array > "u" ? D : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? D : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? D : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ht && G ? G(G([][Symbol.iterator]())) : D,
  "%JSON%": typeof JSON == "object" ? JSON : D,
  "%Map%": typeof Map > "u" ? D : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ht || !G ? D : G((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? D : Promise,
  "%Proxy%": typeof Proxy > "u" ? D : Proxy,
  "%RangeError%": ec,
  "%ReferenceError%": tc,
  "%Reflect%": typeof Reflect > "u" ? D : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? D : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ht || !G ? D : G((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? D : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ht && G ? G(""[Symbol.iterator]()) : D,
  "%Symbol%": ht ? Symbol : D,
  "%SyntaxError%": St,
  "%ThrowTypeError%": nc,
  "%TypedArray%": ic,
  "%TypeError%": bt,
  "%Uint8Array%": typeof Uint8Array > "u" ? D : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? D : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? D : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? D : Uint32Array,
  "%URIError%": rc,
  "%WeakMap%": typeof WeakMap > "u" ? D : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? D : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? D : WeakSet
};
if (G)
  try {
    null.error;
  } catch (e) {
    var ac = G(G(e));
    Ze["%Error.prototype%"] = ac;
  }
var sc = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = to("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = to("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = to("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && G && (r = G(i.prototype));
  }
  return Ze[t] = r, r;
}, yi = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, sr = Uo, Gr = Xl, lc = sr.call(Function.call, Array.prototype.concat), cc = sr.call(Function.apply, Array.prototype.splice), gi = sr.call(Function.call, String.prototype.replace), Kr = sr.call(Function.call, String.prototype.slice), uc = sr.call(Function.call, RegExp.prototype.exec), fc = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, dc = /\\(\\)?/g, pc = function(t) {
  var r = Kr(t, 0, 1), n = Kr(t, -1);
  if (r === "%" && n !== "%")
    throw new St("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new St("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return gi(t, fc, function(a, l, u, h) {
    i[i.length] = u ? gi(h, dc, "$1") : l || a;
  }), i;
}, hc = function(t, r) {
  var n = t, i;
  if (Gr(yi, n) && (i = yi[n], n = "%" + i[0] + "%"), Gr(Ze, n)) {
    var a = Ze[n];
    if (a === vt && (a = sc(n)), typeof a > "u" && !r)
      throw new bt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new St("intrinsic " + t + " does not exist!");
}, Ot = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new bt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new bt('"allowMissing" argument must be a boolean');
  if (uc(/^%?[^%]*%?$/, t) === null)
    throw new St("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = pc(t), i = n.length > 0 ? n[0] : "", a = hc("%" + i + "%", r), l = a.name, u = a.value, h = !1, p = a.alias;
  p && (i = p[0], cc(n, lc([0, 1], p)));
  for (var d = 1, g = !0; d < n.length; d += 1) {
    var w = n[d], S = Kr(w, 0, 1), f = Kr(w, -1);
    if ((S === '"' || S === "'" || S === "`" || f === '"' || f === "'" || f === "`") && S !== f)
      throw new St("property names with quotes must have matching quotes");
    if ((w === "constructor" || !g) && (h = !0), i += "." + w, l = "%" + i + "%", Gr(Ze, l))
      u = Ze[l];
    else if (u != null) {
      if (!(w in u)) {
        if (!r)
          throw new bt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Ye && d + 1 >= n.length) {
        var v = Ye(u, w);
        g = !!v, g && "get" in v && !("originalValue" in v.get) ? u = v.get : u = u[w];
      } else
        g = Gr(u, w), u = u[w];
      g && !h && (Ze[l] = u);
    }
  }
  return u;
}, ha = { exports: {} }, no, mi;
function jo() {
  if (mi) return no;
  mi = 1;
  var e = Ot, t = e("%Object.defineProperty%", !0) || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return no = t, no;
}
var yc = Ot, qr = yc("%Object.getOwnPropertyDescriptor%", !0);
if (qr)
  try {
    qr([], "length");
  } catch {
    qr = null;
  }
var ya = qr, vi = jo(), gc = da, yt = ar, bi = ya, mc = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new yt("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new yt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new yt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new yt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new yt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new yt("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, h = !!bi && bi(t, r);
  if (vi)
    vi(t, r, {
      configurable: l === null && h ? h.configurable : !l,
      enumerable: i === null && h ? h.enumerable : !i,
      value: n,
      writable: a === null && h ? h.writable : !a
    });
  else if (u || !i && !a && !l)
    t[r] = n;
  else
    throw new gc("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ao = jo(), ga = function() {
  return !!Ao;
};
ga.hasArrayLengthDefineBug = function() {
  if (!Ao)
    return null;
  try {
    return Ao([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var vc = ga, bc = Ot, wi = mc, wc = vc(), Si = ya, _i = ar, Sc = bc("%Math.floor%"), _c = function(t, r) {
  if (typeof t != "function")
    throw new _i("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Sc(r) !== r)
    throw new _i("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in t && Si) {
    var l = Si(t, "length");
    l && !l.configurable && (i = !1), l && !l.writable && (a = !1);
  }
  return (i || a || !n) && (wc ? wi(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : wi(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Uo, r = Ot, n = _c, i = ar, a = r("%Function.prototype.apply%"), l = r("%Function.prototype.call%"), u = r("%Reflect.apply%", !0) || t.call(l, a), h = jo(), p = r("%Math.max%");
  e.exports = function(w) {
    if (typeof w != "function")
      throw new i("a function is required");
    var S = u(t, l, arguments);
    return n(
      S,
      1 + p(0, w.length - (arguments.length - 1)),
      !0
    );
  };
  var d = function() {
    return u(t, a, arguments);
  };
  h ? h(e.exports, "apply", { value: d }) : e.exports.apply = d;
})(ha);
var Ec = ha.exports, ma = Ot, va = Ec, Ac = va(ma("String.prototype.indexOf")), xc = function(t, r) {
  var n = ma(t, !!r);
  return typeof n == "function" && Ac(t, ".prototype.") > -1 ? va(n) : n;
};
const Oc = {}, Tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oc
}, Symbol.toStringTag, { value: "Module" })), Pc = /* @__PURE__ */ hl(Tc);
var qo = typeof Map == "function" && Map.prototype, oo = Object.getOwnPropertyDescriptor && qo ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Jr = qo && oo && typeof oo.get == "function" ? oo.get : null, Ei = qo && Map.prototype.forEach, Ho = typeof Set == "function" && Set.prototype, io = Object.getOwnPropertyDescriptor && Ho ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Qr = Ho && io && typeof io.get == "function" ? io.get : null, Ai = Ho && Set.prototype.forEach, Cc = typeof WeakMap == "function" && WeakMap.prototype, Zt = Cc ? WeakMap.prototype.has : null, Rc = typeof WeakSet == "function" && WeakSet.prototype, er = Rc ? WeakSet.prototype.has : null, Ic = typeof WeakRef == "function" && WeakRef.prototype, xi = Ic ? WeakRef.prototype.deref : null, Fc = Boolean.prototype.valueOf, Nc = Object.prototype.toString, Dc = Function.prototype.toString, kc = String.prototype.match, Vo = String.prototype.slice, $e = String.prototype.replace, Mc = String.prototype.toUpperCase, Oi = String.prototype.toLowerCase, ba = RegExp.prototype.test, Ti = Array.prototype.concat, Te = Array.prototype.join, Lc = Array.prototype.slice, Pi = Math.floor, xo = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ao = Object.getOwnPropertySymbols, Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, _t = typeof Symbol == "function" && typeof Symbol.iterator == "object", re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === _t || !0) ? Symbol.toStringTag : null, wa = Object.prototype.propertyIsEnumerable, Ci = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Ri(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ba.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Pi(-e) : Pi(e);
    if (n !== e) {
      var i = String(n), a = Vo.call(t, i.length + 1);
      return $e.call(i, r, "$&_") + "." + $e.call($e.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $e.call(t, r, "$&_");
}
var To = Pc, Ii = To.custom, Fi = _a(Ii) ? Ii : null, Bc = function e(t, r, n, i) {
  var a = r || {};
  if (Le(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Le(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = Le(a, "customInspect") ? a.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Le(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Le(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var u = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Aa(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var h = String(t);
    return u ? Ri(t, h) : h;
  }
  if (typeof t == "bigint") {
    var p = String(t) + "n";
    return u ? Ri(t, p) : p;
  }
  var d = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof t == "object")
    return Po(t) ? "[Array]" : "[Object]";
  var g = ru(a, n);
  if (typeof i > "u")
    i = [];
  else if (Ea(i, t) >= 0)
    return "[Circular]";
  function w(Y, ue, fe) {
    if (ue && (i = Lc.call(i), i.push(ue)), fe) {
      var Pe = {
        depth: a.depth
      };
      return Le(a, "quoteStyle") && (Pe.quoteStyle = a.quoteStyle), e(Y, Pe, n + 1, i);
    }
    return e(Y, a, n + 1, i);
  }
  if (typeof t == "function" && !Ni(t)) {
    var S = Gc(t), f = Dr(t, w);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (f.length > 0 ? " { " + Te.call(f, ", ") + " }" : "");
  }
  if (_a(t)) {
    var v = _t ? $e.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Oo.call(t);
    return typeof t == "object" && !_t ? Jt(v) : v;
  }
  if (Zc(t)) {
    for (var b = "<" + Oi.call(String(t.nodeName)), E = t.attributes || [], O = 0; O < E.length; O++)
      b += " " + E[O].name + "=" + Sa($c(E[O].value), "double", a);
    return b += ">", t.childNodes && t.childNodes.length && (b += "..."), b += "</" + Oi.call(String(t.nodeName)) + ">", b;
  }
  if (Po(t)) {
    if (t.length === 0)
      return "[]";
    var _ = Dr(t, w);
    return g && !tu(_) ? "[" + Co(_, g) + "]" : "[ " + Te.call(_, ", ") + " ]";
  }
  if (jc(t)) {
    var T = Dr(t, w);
    return !("cause" in Error.prototype) && "cause" in t && !wa.call(t, "cause") ? "{ [" + String(t) + "] " + Te.call(Ti.call("[cause]: " + w(t.cause), T), ", ") + " }" : T.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Te.call(T, ", ") + " }";
  }
  if (typeof t == "object" && l) {
    if (Fi && typeof t[Fi] == "function" && To)
      return To(t, { depth: d - n });
    if (l !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Kc(t)) {
    var C = [];
    return Ei && Ei.call(t, function(Y, ue) {
      C.push(w(ue, t, !0) + " => " + w(Y, t));
    }), Di("Map", Jr.call(t), C, g);
  }
  if (Xc(t)) {
    var F = [];
    return Ai && Ai.call(t, function(Y) {
      F.push(w(Y, t));
    }), Di("Set", Qr.call(t), F, g);
  }
  if (Jc(t))
    return so("WeakMap");
  if (Yc(t))
    return so("WeakSet");
  if (Qc(t))
    return so("WeakRef");
  if (Hc(t))
    return Jt(w(Number(t)));
  if (zc(t))
    return Jt(w(xo.call(t)));
  if (Vc(t))
    return Jt(Fc.call(t));
  if (qc(t))
    return Jt(w(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof be < "u" && t === be)
    return "{ [object globalThis] }";
  if (!Uc(t) && !Ni(t)) {
    var B = Dr(t, w), P = Ci ? Ci(t) === Object.prototype : t instanceof Object || t.constructor === Object, N = t instanceof Object ? "" : "null prototype", j = !P && re && Object(t) === t && re in t ? Vo.call(Ue(t), 8, -1) : N ? "Object" : "", ne = P || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", K = ne + (j || N ? "[" + Te.call(Ti.call([], j || [], N || []), ": ") + "] " : "");
    return B.length === 0 ? K + "{}" : g ? K + "{" + Co(B, g) + "}" : K + "{ " + Te.call(B, ", ") + " }";
  }
  return String(t);
};
function Sa(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function $c(e) {
  return $e.call(String(e), /"/g, "&quot;");
}
function Po(e) {
  return Ue(e) === "[object Array]" && (!re || !(typeof e == "object" && re in e));
}
function Uc(e) {
  return Ue(e) === "[object Date]" && (!re || !(typeof e == "object" && re in e));
}
function Ni(e) {
  return Ue(e) === "[object RegExp]" && (!re || !(typeof e == "object" && re in e));
}
function jc(e) {
  return Ue(e) === "[object Error]" && (!re || !(typeof e == "object" && re in e));
}
function qc(e) {
  return Ue(e) === "[object String]" && (!re || !(typeof e == "object" && re in e));
}
function Hc(e) {
  return Ue(e) === "[object Number]" && (!re || !(typeof e == "object" && re in e));
}
function Vc(e) {
  return Ue(e) === "[object Boolean]" && (!re || !(typeof e == "object" && re in e));
}
function _a(e) {
  if (_t)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Oo)
    return !1;
  try {
    return Oo.call(e), !0;
  } catch {
  }
  return !1;
}
function zc(e) {
  if (!e || typeof e != "object" || !xo)
    return !1;
  try {
    return xo.call(e), !0;
  } catch {
  }
  return !1;
}
var Wc = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Le(e, t) {
  return Wc.call(e, t);
}
function Ue(e) {
  return Nc.call(e);
}
function Gc(e) {
  if (e.name)
    return e.name;
  var t = kc.call(Dc.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Ea(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function Kc(e) {
  if (!Jr || !e || typeof e != "object")
    return !1;
  try {
    Jr.call(e);
    try {
      Qr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Jc(e) {
  if (!Zt || !e || typeof e != "object")
    return !1;
  try {
    Zt.call(e, Zt);
    try {
      er.call(e, er);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Qc(e) {
  if (!xi || !e || typeof e != "object")
    return !1;
  try {
    return xi.call(e), !0;
  } catch {
  }
  return !1;
}
function Xc(e) {
  if (!Qr || !e || typeof e != "object")
    return !1;
  try {
    Qr.call(e);
    try {
      Jr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Yc(e) {
  if (!er || !e || typeof e != "object")
    return !1;
  try {
    er.call(e, er);
    try {
      Zt.call(e, Zt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Zc(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Aa(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Aa(Vo.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = $e.call($e.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, eu);
  return Sa(i, "single", t);
}
function eu(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Mc.call(t.toString(16));
}
function Jt(e) {
  return "Object(" + e + ")";
}
function so(e) {
  return e + " { ? }";
}
function Di(e, t, r, n) {
  var i = n ? Co(r, n) : Te.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function tu(e) {
  for (var t = 0; t < e.length; t++)
    if (Ea(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function ru(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Te.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Te.call(Array(t + 1), r)
  };
}
function Co(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Te.call(e, "," + r) + `
` + t.prev;
}
function Dr(e, t) {
  var r = Po(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = Le(e, i) ? t(e[i], e) : "";
  }
  var a = typeof ao == "function" ? ao(e) : [], l;
  if (_t) {
    l = {};
    for (var u = 0; u < a.length; u++)
      l["$" + a[u]] = a[u];
  }
  for (var h in e)
    Le(e, h) && (r && String(Number(h)) === h && h < e.length || _t && l["$" + h] instanceof Symbol || (ba.call(/[^\w$]/, h) ? n.push(t(h, e) + ": " + t(e[h], e)) : n.push(h + ": " + t(e[h], e))));
  if (typeof ao == "function")
    for (var p = 0; p < a.length; p++)
      wa.call(e, a[p]) && n.push("[" + t(a[p]) + "]: " + t(e[a[p]], e));
  return n;
}
var xa = Ot, Tt = xc, nu = Bc, ou = ar, kr = xa("%WeakMap%", !0), Mr = xa("%Map%", !0), iu = Tt("WeakMap.prototype.get", !0), au = Tt("WeakMap.prototype.set", !0), su = Tt("WeakMap.prototype.has", !0), lu = Tt("Map.prototype.get", !0), cu = Tt("Map.prototype.set", !0), uu = Tt("Map.prototype.has", !0), zo = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = n, n;
}, fu = function(e, t) {
  var r = zo(e, t);
  return r && r.value;
}, du = function(e, t, r) {
  var n = zo(e, t);
  n ? n.value = r : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, pu = function(e, t) {
  return !!zo(e, t);
}, hu = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new ou("Side channel does not contain " + nu(a));
    },
    get: function(a) {
      if (kr && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return iu(t, a);
      } else if (Mr) {
        if (r)
          return lu(r, a);
      } else if (n)
        return fu(n, a);
    },
    has: function(a) {
      if (kr && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return su(t, a);
      } else if (Mr) {
        if (r)
          return uu(r, a);
      } else if (n)
        return pu(n, a);
      return !1;
    },
    set: function(a, l) {
      kr && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new kr()), au(t, a, l)) : Mr ? (r || (r = new Mr()), cu(r, a, l)) : (n || (n = { key: {}, next: null }), du(n, a, l));
    }
  };
  return i;
}, yu = String.prototype.replace, gu = /%20/g, lo = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Wo = {
  default: lo.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return yu.call(e, gu, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: lo.RFC1738,
  RFC3986: lo.RFC3986
}, mu = Wo, co = Object.prototype.hasOwnProperty, Je = Array.isArray, xe = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), vu = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Je(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Oa = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, bu = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Je(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !co.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Je(t) && !Je(r) && (i = Oa(t, n)), Je(t) && Je(r) ? (r.forEach(function(a, l) {
    if (co.call(t, l)) {
      var u = t[l];
      u && typeof u == "object" && a && typeof a == "object" ? t[l] = e(u, a, n) : t.push(a);
    } else
      t[l] = a;
  }), t) : Object.keys(r).reduce(function(a, l) {
    var u = r[l];
    return co.call(a, l) ? a[l] = e(a[l], u, n) : a[l] = u, a;
  }, i);
}, wu = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, Su = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, uo = 1024, _u = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var l = t;
  if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(S) {
      return "%26%23" + parseInt(S.slice(2), 16) + "%3B";
    });
  for (var u = "", h = 0; h < l.length; h += uo) {
    for (var p = l.length >= uo ? l.slice(h, h + uo) : l, d = [], g = 0; g < p.length; ++g) {
      var w = p.charCodeAt(g);
      if (w === 45 || w === 46 || w === 95 || w === 126 || w >= 48 && w <= 57 || w >= 65 && w <= 90 || w >= 97 && w <= 122 || a === mu.RFC1738 && (w === 40 || w === 41)) {
        d[d.length] = p.charAt(g);
        continue;
      }
      if (w < 128) {
        d[d.length] = xe[w];
        continue;
      }
      if (w < 2048) {
        d[d.length] = xe[192 | w >> 6] + xe[128 | w & 63];
        continue;
      }
      if (w < 55296 || w >= 57344) {
        d[d.length] = xe[224 | w >> 12] + xe[128 | w >> 6 & 63] + xe[128 | w & 63];
        continue;
      }
      g += 1, w = 65536 + ((w & 1023) << 10 | p.charCodeAt(g) & 1023), d[d.length] = xe[240 | w >> 18] + xe[128 | w >> 12 & 63] + xe[128 | w >> 6 & 63] + xe[128 | w & 63];
    }
    u += d.join("");
  }
  return u;
}, Eu = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], l = a.obj[a.prop], u = Object.keys(l), h = 0; h < u.length; ++h) {
      var p = u[h], d = l[p];
      typeof d == "object" && d !== null && n.indexOf(d) === -1 && (r.push({ obj: l, prop: p }), n.push(d));
    }
  return vu(r), t;
}, Au = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, xu = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, Ou = function(t, r) {
  return [].concat(t, r);
}, Tu = function(t, r) {
  if (Je(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, Ta = {
  arrayToObject: Oa,
  assign: wu,
  combine: Ou,
  compact: Eu,
  decode: Su,
  encode: _u,
  isBuffer: xu,
  isRegExp: Au,
  maybeMap: Tu,
  merge: bu
}, Pa = hu, Hr = Ta, tr = Wo, Pu = Object.prototype.hasOwnProperty, Ca = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Oe = Array.isArray, Cu = Array.prototype.push, Ra = function(e, t) {
  Cu.apply(e, Oe(t) ? t : [t]);
}, Ru = Date.prototype.toISOString, ki = tr.default, W = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Hr.encode,
  encodeValuesOnly: !1,
  format: ki,
  formatter: tr.formatters[ki],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Ru.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Iu = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, fo = {}, Fu = function e(t, r, n, i, a, l, u, h, p, d, g, w, S, f, v, b, E, O) {
  for (var _ = t, T = O, C = 0, F = !1; (T = T.get(fo)) !== void 0 && !F; ) {
    var B = T.get(t);
    if (C += 1, typeof B < "u") {
      if (B === C)
        throw new RangeError("Cyclic object value");
      F = !0;
    }
    typeof T.get(fo) > "u" && (C = 0);
  }
  if (typeof d == "function" ? _ = d(r, _) : _ instanceof Date ? _ = S(_) : n === "comma" && Oe(_) && (_ = Hr.maybeMap(_, function(M) {
    return M instanceof Date ? S(M) : M;
  })), _ === null) {
    if (l)
      return p && !b ? p(r, W.encoder, E, "key", f) : r;
    _ = "";
  }
  if (Iu(_) || Hr.isBuffer(_)) {
    if (p) {
      var P = b ? r : p(r, W.encoder, E, "key", f);
      return [v(P) + "=" + v(p(_, W.encoder, E, "value", f))];
    }
    return [v(r) + "=" + v(String(_))];
  }
  var N = [];
  if (typeof _ > "u")
    return N;
  var j;
  if (n === "comma" && Oe(_))
    b && p && (_ = Hr.maybeMap(_, p)), j = [{ value: _.length > 0 ? _.join(",") || null : void 0 }];
  else if (Oe(d))
    j = d;
  else {
    var ne = Object.keys(_);
    j = g ? ne.sort(g) : ne;
  }
  var K = h ? r.replace(/\./g, "%2E") : r, Y = i && Oe(_) && _.length === 1 ? K + "[]" : K;
  if (a && Oe(_) && _.length === 0)
    return Y + "[]";
  for (var ue = 0; ue < j.length; ++ue) {
    var fe = j[ue], Pe = typeof fe == "object" && typeof fe.value < "u" ? fe.value : _[fe];
    if (!(u && Pe === null)) {
      var je = w && h ? fe.replace(/\./g, "%2E") : fe, Pt = Oe(_) ? typeof n == "function" ? n(Y, je) : Y : Y + (w ? "." + je : "[" + je + "]");
      O.set(t, C);
      var tt = Pa();
      tt.set(fo, O), Ra(N, e(
        Pe,
        Pt,
        n,
        i,
        a,
        l,
        u,
        h,
        n === "comma" && b && Oe(_) ? null : p,
        d,
        g,
        w,
        S,
        f,
        v,
        b,
        E,
        tt
      ));
    }
  }
  return N;
}, Nu = function(t) {
  if (!t)
    return W;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || W.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = tr.default;
  if (typeof t.format < "u") {
    if (!Pu.call(tr.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = tr.formatters[n], a = W.filter;
  (typeof t.filter == "function" || Oe(t.filter)) && (a = t.filter);
  var l;
  if (t.arrayFormat in Ca ? l = t.arrayFormat : "indices" in t ? l = t.indices ? "indices" : "repeat" : l = W.arrayFormat, "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : W.allowDots : !!t.allowDots;
  return {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : W.addQueryPrefix,
    allowDots: u,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : W.allowEmptyArrays,
    arrayFormat: l,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : W.charsetSentinel,
    commaRoundTrip: t.commaRoundTrip,
    delimiter: typeof t.delimiter > "u" ? W.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : W.encode,
    encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : W.encodeDotInKeys,
    encoder: typeof t.encoder == "function" ? t.encoder : W.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : W.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : W.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : W.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : W.strictNullHandling
  };
}, Du = function(e, t) {
  var r = e, n = Nu(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Oe(n.filter) && (a = n.filter, i = a);
  var l = [];
  if (typeof r != "object" || r === null)
    return "";
  var u = Ca[n.arrayFormat], h = u === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var p = Pa(), d = 0; d < i.length; ++d) {
    var g = i[d];
    n.skipNulls && r[g] === null || Ra(l, Fu(
      r[g],
      g,
      u,
      h,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      p
    ));
  }
  var w = l.join(n.delimiter), S = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? S += "utf8=%26%2310003%3B&" : S += "utf8=%E2%9C%93&"), w.length > 0 ? S + w : "";
}, Et = Ta, Ro = Object.prototype.hasOwnProperty, ku = Array.isArray, q = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: Et.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1
}, Mu = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ia = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, Lu = "utf8=%26%2310003%3B", Bu = "utf8=%E2%9C%93", $u = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, l = i.split(r.delimiter, a), u = -1, h, p = r.charset;
  if (r.charsetSentinel)
    for (h = 0; h < l.length; ++h)
      l[h].indexOf("utf8=") === 0 && (l[h] === Bu ? p = "utf-8" : l[h] === Lu && (p = "iso-8859-1"), u = h, h = l.length);
  for (h = 0; h < l.length; ++h)
    if (h !== u) {
      var d = l[h], g = d.indexOf("]="), w = g === -1 ? d.indexOf("=") : g + 1, S, f;
      w === -1 ? (S = r.decoder(d, q.decoder, p, "key"), f = r.strictNullHandling ? null : "") : (S = r.decoder(d.slice(0, w), q.decoder, p, "key"), f = Et.maybeMap(
        Ia(d.slice(w + 1), r),
        function(b) {
          return r.decoder(b, q.decoder, p, "value");
        }
      )), f && r.interpretNumericEntities && p === "iso-8859-1" && (f = Mu(f)), d.indexOf("[]=") > -1 && (f = ku(f) ? [f] : f);
      var v = Ro.call(n, S);
      v && r.duplicates === "combine" ? n[S] = Et.combine(n[S], f) : (!v || r.duplicates === "last") && (n[S] = f);
    }
  return n;
}, Uu = function(e, t, r, n) {
  for (var i = n ? t : Ia(t, r), a = e.length - 1; a >= 0; --a) {
    var l, u = e[a];
    if (u === "[]" && r.parseArrays)
      l = r.allowEmptyArrays && (i === "" || r.strictNullHandling && i === null) ? [] : [].concat(i);
    else {
      l = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var h = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, p = r.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, d = parseInt(p, 10);
      !r.parseArrays && p === "" ? l = { 0: i } : !isNaN(d) && u !== p && String(d) === p && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (l = [], l[d] = i) : p !== "__proto__" && (l[p] = i);
    }
    i = l;
  }
  return i;
}, ju = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, l = /(\[[^[\]]*])/, u = /(\[[^[\]]*])/g, h = n.depth > 0 && l.exec(a), p = h ? a.slice(0, h.index) : a, d = [];
    if (p) {
      if (!n.plainObjects && Ro.call(Object.prototype, p) && !n.allowPrototypes)
        return;
      d.push(p);
    }
    for (var g = 0; n.depth > 0 && (h = u.exec(a)) !== null && g < n.depth; ) {
      if (g += 1, !n.plainObjects && Ro.call(Object.prototype, h[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      d.push(h[1]);
    }
    if (h) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      d.push("[" + a.slice(h.index) + "]");
    }
    return Uu(d, r, n, i);
  }
}, qu = function(t) {
  if (!t)
    return q;
  if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? q.charset : t.charset, n = typeof t.duplicates > "u" ? q.duplicates : t.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : q.allowDots : !!t.allowDots;
  return {
    allowDots: i,
    allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : q.allowEmptyArrays,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : q.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : q.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : q.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : q.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : q.comma,
    decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : q.decodeDotInKeys,
    decoder: typeof t.decoder == "function" ? t.decoder : q.decoder,
    delimiter: typeof t.delimiter == "string" || Et.isRegExp(t.delimiter) ? t.delimiter : q.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : q.depth,
    duplicates: n,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : q.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : q.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : q.plainObjects,
    strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : q.strictDepth,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : q.strictNullHandling
  };
}, Hu = function(e, t) {
  var r = qu(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? $u(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), l = 0; l < a.length; ++l) {
    var u = a[l], h = ju(u, n[u], r, typeof e == "string");
    i = Et.merge(i, h, r);
  }
  return r.allowSparse === !0 ? i : Et.compact(i);
}, Vu = Du, zu = Hu, Wu = Wo, Mi = {
  formats: Wu,
  parse: zu,
  stringify: Vu
}, Gu = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(be, function() {
    var r = {};
    r.version = "0.2.0";
    var n = r.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    r.configure = function(f) {
      var v, b;
      for (v in f)
        b = f[v], b !== void 0 && f.hasOwnProperty(v) && (n[v] = b);
      return this;
    }, r.status = null, r.set = function(f) {
      var v = r.isStarted();
      f = i(f, n.minimum, 1), r.status = f === 1 ? null : f;
      var b = r.render(!v), E = b.querySelector(n.barSelector), O = n.speed, _ = n.easing;
      return b.offsetWidth, u(function(T) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), h(E, l(f, O, _)), f === 1 ? (h(b, {
          transition: "none",
          opacity: 1
        }), b.offsetWidth, setTimeout(function() {
          h(b, {
            transition: "all " + O + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), T();
          }, O);
        }, O)) : setTimeout(T, O);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var f = function() {
        setTimeout(function() {
          r.status && (r.trickle(), f());
        }, n.trickleSpeed);
      };
      return n.trickle && f(), this;
    }, r.done = function(f) {
      return !f && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(f) {
      var v = r.status;
      return v ? (typeof f != "number" && (f = (1 - v) * i(Math.random() * v, 0.1, 0.95)), v = i(v + f, 0, 0.994), r.set(v)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var f = 0, v = 0;
      r.promise = function(b) {
        return !b || b.state() === "resolved" ? this : (v === 0 && r.start(), f++, v++, b.always(function() {
          v--, v === 0 ? (f = 0, r.done()) : r.set((f - v) / f);
        }), this);
      };
    }(), r.render = function(f) {
      if (r.isRendered()) return document.getElementById("nprogress");
      d(document.documentElement, "nprogress-busy");
      var v = document.createElement("div");
      v.id = "nprogress", v.innerHTML = n.template;
      var b = v.querySelector(n.barSelector), E = f ? "-100" : a(r.status || 0), O = document.querySelector(n.parent), _;
      return h(b, {
        transition: "all 0 linear",
        transform: "translate3d(" + E + "%,0,0)"
      }), n.showSpinner || (_ = v.querySelector(n.spinnerSelector), _ && S(_)), O != document.body && d(O, "nprogress-custom-parent"), O.appendChild(v), v;
    }, r.remove = function() {
      g(document.documentElement, "nprogress-busy"), g(document.querySelector(n.parent), "nprogress-custom-parent");
      var f = document.getElementById("nprogress");
      f && S(f);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var f = document.body.style, v = "WebkitTransform" in f ? "Webkit" : "MozTransform" in f ? "Moz" : "msTransform" in f ? "ms" : "OTransform" in f ? "O" : "";
      return v + "Perspective" in f ? "translate3d" : v + "Transform" in f ? "translate" : "margin";
    };
    function i(f, v, b) {
      return f < v ? v : f > b ? b : f;
    }
    function a(f) {
      return (-1 + f) * 100;
    }
    function l(f, v, b) {
      var E;
      return n.positionUsing === "translate3d" ? E = { transform: "translate3d(" + a(f) + "%,0,0)" } : n.positionUsing === "translate" ? E = { transform: "translate(" + a(f) + "%,0)" } : E = { "margin-left": a(f) + "%" }, E.transition = "all " + v + "ms " + b, E;
    }
    var u = /* @__PURE__ */ function() {
      var f = [];
      function v() {
        var b = f.shift();
        b && b(v);
      }
      return function(b) {
        f.push(b), f.length == 1 && v();
      };
    }(), h = /* @__PURE__ */ function() {
      var f = ["Webkit", "O", "Moz", "ms"], v = {};
      function b(T) {
        return T.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(C, F) {
          return F.toUpperCase();
        });
      }
      function E(T) {
        var C = document.body.style;
        if (T in C) return T;
        for (var F = f.length, B = T.charAt(0).toUpperCase() + T.slice(1), P; F--; )
          if (P = f[F] + B, P in C) return P;
        return T;
      }
      function O(T) {
        return T = b(T), v[T] || (v[T] = E(T));
      }
      function _(T, C, F) {
        C = O(C), T.style[C] = F;
      }
      return function(T, C) {
        var F = arguments, B, P;
        if (F.length == 2)
          for (B in C)
            P = C[B], P !== void 0 && C.hasOwnProperty(B) && _(T, B, P);
        else
          _(T, F[1], F[2]);
      };
    }();
    function p(f, v) {
      var b = typeof f == "string" ? f : w(f);
      return b.indexOf(" " + v + " ") >= 0;
    }
    function d(f, v) {
      var b = w(f), E = b + v;
      p(b, v) || (f.className = E.substring(1));
    }
    function g(f, v) {
      var b = w(f), E;
      p(f, v) && (E = b.replace(" " + v + " ", " "), f.className = E.substring(1, E.length - 1));
    }
    function w(f) {
      return (" " + (f.className || "") + " ").replace(/\s+/gi, " ");
    }
    function S(f) {
      f && f.parentNode && f.parentNode.removeChild(f);
    }
    return r;
  });
})(Gu);
function Fa(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function Ne(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Ku = (e) => Ne("before", { cancelable: !0, detail: { visit: e } }), Ju = (e) => Ne("error", { detail: { errors: e } }), Qu = (e) => Ne("exception", { cancelable: !0, detail: { exception: e } }), Li = (e) => Ne("finish", { detail: { visit: e } }), Xu = (e) => Ne("invalid", { cancelable: !0, detail: { response: e } }), Qt = (e) => Ne("navigate", { detail: { page: e } }), Yu = (e) => Ne("progress", { detail: { progress: e } }), Zu = (e) => Ne("start", { detail: { visit: e } }), ef = (e) => Ne("success", { detail: { page: e } });
function Io(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Io(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Io(t));
}
function Na(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && ka(t, Da(r, n), e[n]);
  return t;
}
function Da(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ka(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => ka(e, Da(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  Na(r, e, t);
}
var tf = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow) throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} };
function gt(e) {
  return new URL(e.toString(), window.location.toString());
}
function Ma(e, t, r, n = "brackets") {
  let i = /^https?:\/\//.test(t.toString()), a = i || t.toString().startsWith("/"), l = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), u = t.toString().includes("?") || e === "get" && Object.keys(r).length, h = t.toString().includes("#"), p = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (p.search = Mi.stringify(Cl(Mi.parse(p.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${p.protocol}//${p.host}` : "", a ? p.pathname : "", l ? p.pathname.substring(1) : "", u ? p.search : "", h ? p.hash : ""].join(""), r];
}
function Xt(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Bi = typeof window > "u", rf = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    this.page = e, this.resolveComponent = t, this.swapComponent = r, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var e;
    this.navigationType === "reload" && ((e = window.history.state) != null && e.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(e) {
    this.page.url += window.location.hash, this.setPage(e, { preserveState: !0 }).then(() => Qt(e));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Fa(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(e) {
    typeof e.target.hasAttribute == "function" && e.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var e;
      return (e = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : e.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((e, t) => {
      let r = this.page.scrollRegions[t];
      if (r) typeof e.scrollTo == "function" ? e.scrollTo(r.left, r.top) : (e.scrollTop = r.top, e.scrollLeft = r.left);
      else return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(e) {
    window.history.state.version = e.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), Qt(e);
    });
  }
  locationVisit(e, t) {
    try {
      let r = { preserveScroll: t };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = e.href, Xt(window.location).href === Xt(e).href && window.location.reload();
    } catch {
      return !1;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return !1;
    }
  }
  handleLocationVisit(e) {
    var r, n;
    let t = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), e.url += window.location.hash, e.rememberedState = ((r = window.history.state) == null ? void 0 : r.rememberedState) ?? {}, e.scrollRegions = ((n = window.history.state) == null ? void 0 : n.scrollRegions) ?? [], this.setPage(e, { preserveScroll: t.preserveScroll, preserveState: !0 }).then(() => {
      t.preserveScroll && this.restoreScrollPositions(), Qt(e);
    });
  }
  isLocationVisitResponse(e) {
    return !!(e && e.status === 409 && e.headers["x-inertia-location"]);
  }
  isInertiaResponse(e) {
    return !!(e != null && e.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(e, { cancelled: t = !1, interrupted: r = !1 }) {
    e && !e.completed && !e.cancelled && !e.interrupted && (e.cancelToken.abort(), e.onCancel(), e.completed = !1, e.cancelled = t, e.interrupted = r, Li(e), e.onFinish(e));
  }
  finishVisit(e) {
    !e.cancelled && !e.interrupted && (e.completed = !0, e.cancelled = !1, e.interrupted = !1, Li(e), e.onFinish(e));
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(e, { method: t = "get", data: r = {}, replace: n = !1, preserveScroll: i = !1, preserveState: a = !1, only: l = [], except: u = [], headers: h = {}, errorBag: p = "", forceFormData: d = !1, onCancelToken: g = () => {
  }, onBefore: w = () => {
  }, onStart: S = () => {
  }, onProgress: f = () => {
  }, onFinish: v = () => {
  }, onCancel: b = () => {
  }, onSuccess: E = () => {
  }, onError: O = () => {
  }, queryStringArrayFormat: _ = "brackets" } = {}) {
    let T = typeof e == "string" ? gt(e) : e;
    if ((Io(r) || d) && !(r instanceof FormData) && (r = Na(r)), !(r instanceof FormData)) {
      let [P, N] = Ma(t, T, r, _);
      T = gt(P), r = N;
    }
    let C = { url: T, method: t, data: r, replace: n, preserveScroll: i, preserveState: a, only: l, except: u, headers: h, errorBag: p, forceFormData: d, queryStringArrayFormat: _, cancelled: !1, completed: !1, interrupted: !1 };
    if (w(C) === !1 || !Ku(C)) return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let F = this.createVisitId();
    this.activeVisit = { ...C, onCancelToken: g, onBefore: w, onStart: S, onProgress: f, onFinish: v, onCancel: b, onSuccess: E, onError: O, queryStringArrayFormat: _, cancelToken: new AbortController() }, g({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), Zu(C), S(C);
    let B = !!(l.length || u.length);
    H({ method: t, url: Xt(T).href, data: t === "get" ? {} : r, params: t === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...h, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...B ? { "X-Inertia-Partial-Component": this.page.component } : {}, ...l.length ? { "X-Inertia-Partial-Data": l.join(",") } : {}, ...u.length ? { "X-Inertia-Partial-Except": u.join(",") } : {}, ...p && p.length ? { "X-Inertia-Error-Bag": p } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (P) => {
      r instanceof FormData && (P.percentage = P.progress ? Math.round(P.progress * 100) : 0, Yu(P), f(P));
    } }).then((P) => {
      var K;
      if (!this.isInertiaResponse(P)) return Promise.reject({ response: P });
      let N = P.data;
      B && N.component === this.page.component && (N.props = { ...this.page.props, ...N.props }), i = this.resolvePreserveOption(i, N), a = this.resolvePreserveOption(a, N), a && ((K = window.history.state) != null && K.rememberedState) && N.component === this.page.component && (N.rememberedState = window.history.state.rememberedState);
      let j = T, ne = gt(N.url);
      return j.hash && !ne.hash && Xt(j).href === ne.href && (ne.hash = j.hash, N.url = ne.href), this.setPage(N, { visitId: F, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let P = this.page.props.errors || {};
      if (Object.keys(P).length > 0) {
        let N = p ? P[p] ? P[p] : {} : P;
        return Ju(N), O(N);
      }
      return ef(this.page), E(this.page);
    }).catch((P) => {
      if (this.isInertiaResponse(P.response)) return this.setPage(P.response.data, { visitId: F });
      if (this.isLocationVisitResponse(P.response)) {
        let N = gt(P.response.headers["x-inertia-location"]), j = T;
        j.hash && !N.hash && Xt(j).href === N.href && (N.hash = j.hash), this.locationVisit(N, i === !0);
      } else if (P.response) Xu(P.response) && tf.show(P.response.data);
      else return Promise.reject(P);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((P) => {
      if (!H.isCancel(P)) {
        let N = Qu(P);
        if (this.activeVisit && this.finishVisit(this.activeVisit), N) return Promise.reject(P);
      }
    });
  }
  setPage(e, { visitId: t = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(e.component)).then((a) => {
      t === this.visitId && (e.scrollRegions = e.scrollRegions || [], e.rememberedState = e.rememberedState || {}, r = r || gt(e.url).href === window.location.href, r ? this.replaceState(e) : this.pushState(e), this.swapComponent({ component: a, page: e, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || Qt(e);
      }));
    });
  }
  pushState(e) {
    this.page = e, window.history.pushState(e, "", e.url);
  }
  replaceState(e) {
    this.page = e, window.history.replaceState(e, "", e.url);
  }
  handlePopstateEvent(e) {
    if (e.state !== null) {
      let t = e.state, r = this.createVisitId();
      Promise.resolve(this.resolveComponent(t.component)).then((n) => {
        r === this.visitId && (this.page = t, this.swapComponent({ component: n, page: t, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), Qt(t);
        }));
      });
    } else {
      let t = gt(this.page.url);
      t.hash = window.location.hash, this.replaceState({ ...this.page, url: t.href }), this.resetScrollPositions();
    }
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  reload(e = {}) {
    return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0 });
  }
  replace(e, t = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${t.method ?? "get"}() instead.`), this.visit(e, { preserveState: !0, ...t, replace: !0 });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  remember(e, t = "default") {
    var r;
    Bi || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [t]: e } });
  }
  restore(e = "default") {
    var t, r;
    if (!Bi) return (r = (t = window.history.state) == null ? void 0 : t.rememberedState) == null ? void 0 : r[e];
  }
  on(e, t) {
    let r = (n) => {
      let i = t(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${e}`, r), () => document.removeEventListener(`inertia:${e}`, r);
  }
}, nf = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script ")) return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((i) => {
    n.setAttribute(i, r.getAttribute(i) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Fa(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, l;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let i = t.splice(n, 1)[0];
    i && !r.isEqualNode(i) && ((l = r == null ? void 0 : r.parentNode) == null || l.replaceChild(i, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function of(e, t, r) {
  let n = {}, i = 0;
  function a() {
    let d = i += 1;
    return n[d] = [], d.toString();
  }
  function l(d) {
    d === null || Object.keys(n).indexOf(d) === -1 || (delete n[d], p());
  }
  function u(d, g = []) {
    d !== null && Object.keys(n).indexOf(d) > -1 && (n[d] = g), p();
  }
  function h() {
    let d = t(""), g = { ...d ? { title: `<title inertia="">${d}</title>` } : {} }, w = Object.values(n).reduce((S, f) => S.concat(f), []).reduce((S, f) => {
      if (f.indexOf("<") === -1) return S;
      if (f.indexOf("<title ") === 0) {
        let b = f.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return S.title = b ? `${b[1]}${t(b[2])}${b[3]}` : f, S;
      }
      let v = f.match(/ inertia="[^"]+"/);
      return v ? S[v[0]] = f : S[Object.keys(S).length] = f, S;
    }, g);
    return Object.values(w);
  }
  function p() {
    e ? r(h()) : nf.update(h());
  }
  return p(), { forceUpdate: p, createProvider: function() {
    let d = a();
    return { update: (g) => u(d, g), disconnect: () => l(d) };
  } };
}
function af(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey);
}
var Fo = new rf(), Xr = { exports: {} };
Xr.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", l = "[object Array]", u = "[object Boolean]", h = "[object Date]", p = "[object Error]", d = "[object Function]", g = "[object GeneratorFunction]", w = "[object Map]", S = "[object Number]", f = "[object Object]", v = "[object Promise]", b = "[object RegExp]", E = "[object Set]", O = "[object String]", _ = "[object Symbol]", T = "[object WeakMap]", C = "[object ArrayBuffer]", F = "[object DataView]", B = "[object Float32Array]", P = "[object Float64Array]", N = "[object Int8Array]", j = "[object Int16Array]", ne = "[object Int32Array]", K = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", fe = "[object Uint32Array]", Pe = /[\\^$.*+?()[\]{}|]/g, je = /\w*$/, Pt = /^\[object .+?Constructor\]$/, tt = /^(?:0|[1-9]\d*)$/, M = {};
  M[a] = M[l] = M[C] = M[F] = M[u] = M[h] = M[B] = M[P] = M[N] = M[j] = M[ne] = M[w] = M[S] = M[f] = M[b] = M[E] = M[O] = M[_] = M[K] = M[Y] = M[ue] = M[fe] = !0, M[p] = M[d] = M[T] = !1;
  var on = typeof be == "object" && be && be.Object === Object && be, an = typeof self == "object" && self && self.Object === Object && self, ye = on || an || Function("return this")(), lr = t && !t.nodeType && t, U = lr && !0 && e && !e.nodeType && e, cr = U && U.exports === lr;
  function sn(o, s) {
    return o.set(s[0], s[1]), o;
  }
  function ge(o, s) {
    return o.add(s), o;
  }
  function ur(o, s) {
    for (var c = -1, m = o ? o.length : 0; ++c < m && s(o[c], c, o) !== !1; )
      ;
    return o;
  }
  function fr(o, s) {
    for (var c = -1, m = s.length, R = o.length; ++c < m; )
      o[R + c] = s[c];
    return o;
  }
  function Ct(o, s, c, m) {
    for (var R = -1, x = o ? o.length : 0; ++R < x; )
      c = s(c, o[R], R, o);
    return c;
  }
  function Rt(o, s) {
    for (var c = -1, m = Array(o); ++c < o; )
      m[c] = s(c);
    return m;
  }
  function dr(o, s) {
    return o == null ? void 0 : o[s];
  }
  function It(o) {
    var s = !1;
    if (o != null && typeof o.toString != "function")
      try {
        s = !!(o + "");
      } catch {
      }
    return s;
  }
  function pr(o) {
    var s = -1, c = Array(o.size);
    return o.forEach(function(m, R) {
      c[++s] = [R, m];
    }), c;
  }
  function Ft(o, s) {
    return function(c) {
      return o(s(c));
    };
  }
  function hr(o) {
    var s = -1, c = Array(o.size);
    return o.forEach(function(m) {
      c[++s] = m;
    }), c;
  }
  var ln = Array.prototype, cn = Function.prototype, rt = Object.prototype, Nt = ye["__core-js_shared__"], yr = function() {
    var o = /[^.]+$/.exec(Nt && Nt.keys && Nt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), gr = cn.toString, Se = rt.hasOwnProperty, nt = rt.toString, un = RegExp(
    "^" + gr.call(Se).replace(Pe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = cr ? ye.Buffer : void 0, ot = ye.Symbol, Dt = ye.Uint8Array, he = Ft(Object.getPrototypeOf, Object), mr = Object.create, vr = rt.propertyIsEnumerable, fn = ln.splice, kt = Object.getOwnPropertySymbols, it = qe ? qe.isBuffer : void 0, br = Ft(Object.keys, Object), at = ve(ye, "DataView"), He = ve(ye, "Map"), me = ve(ye, "Promise"), st = ve(ye, "Set"), Mt = ve(ye, "WeakMap"), Ve = ve(Object, "create"), Lt = oe(at), ze = oe(He), Bt = oe(me), $t = oe(st), Ut = oe(Mt), De = ot ? ot.prototype : void 0, wr = De ? De.valueOf : void 0;
  function Ce(o) {
    var s = -1, c = o ? o.length : 0;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function dn() {
    this.__data__ = Ve ? Ve(null) : {};
  }
  function pn(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function hn(o) {
    var s = this.__data__;
    if (Ve) {
      var c = s[o];
      return c === n ? void 0 : c;
    }
    return Se.call(s, o) ? s[o] : void 0;
  }
  function Sr(o) {
    var s = this.__data__;
    return Ve ? s[o] !== void 0 : Se.call(s, o);
  }
  function jt(o, s) {
    var c = this.__data__;
    return c[o] = Ve && s === void 0 ? n : s, this;
  }
  Ce.prototype.clear = dn, Ce.prototype.delete = pn, Ce.prototype.get = hn, Ce.prototype.has = Sr, Ce.prototype.set = jt;
  function J(o) {
    var s = -1, c = o ? o.length : 0;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function yn() {
    this.__data__ = [];
  }
  function gn(o) {
    var s = this.__data__, c = ct(s, o);
    if (c < 0)
      return !1;
    var m = s.length - 1;
    return c == m ? s.pop() : fn.call(s, c, 1), !0;
  }
  function mn(o) {
    var s = this.__data__, c = ct(s, o);
    return c < 0 ? void 0 : s[c][1];
  }
  function vn(o) {
    return ct(this.__data__, o) > -1;
  }
  function bn(o, s) {
    var c = this.__data__, m = ct(c, o);
    return m < 0 ? c.push([o, s]) : c[m][1] = s, this;
  }
  J.prototype.clear = yn, J.prototype.delete = gn, J.prototype.get = mn, J.prototype.has = vn, J.prototype.set = bn;
  function Z(o) {
    var s = -1, c = o ? o.length : 0;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function wn() {
    this.__data__ = {
      hash: new Ce(),
      map: new (He || J)(),
      string: new Ce()
    };
  }
  function Sn(o) {
    return Ge(this, o).delete(o);
  }
  function _n(o) {
    return Ge(this, o).get(o);
  }
  function En(o) {
    return Ge(this, o).has(o);
  }
  function An(o, s) {
    return Ge(this, o).set(o, s), this;
  }
  Z.prototype.clear = wn, Z.prototype.delete = Sn, Z.prototype.get = _n, Z.prototype.has = En, Z.prototype.set = An;
  function ie(o) {
    this.__data__ = new J(o);
  }
  function xn() {
    this.__data__ = new J();
  }
  function On(o) {
    return this.__data__.delete(o);
  }
  function Tn(o) {
    return this.__data__.get(o);
  }
  function Pn(o) {
    return this.__data__.has(o);
  }
  function Cn(o, s) {
    var c = this.__data__;
    if (c instanceof J) {
      var m = c.__data__;
      if (!He || m.length < r - 1)
        return m.push([o, s]), this;
      c = this.__data__ = new Z(m);
    }
    return c.set(o, s), this;
  }
  ie.prototype.clear = xn, ie.prototype.delete = On, ie.prototype.get = Tn, ie.prototype.has = Pn, ie.prototype.set = Cn;
  function lt(o, s) {
    var c = zt(o) || ft(o) ? Rt(o.length, String) : [], m = c.length, R = !!m;
    for (var x in o)
      Se.call(o, x) && !(R && (x == "length" || Hn(x, m))) && c.push(x);
    return c;
  }
  function _r(o, s, c) {
    var m = o[s];
    (!(Se.call(o, s) && Tr(m, c)) || c === void 0 && !(s in o)) && (o[s] = c);
  }
  function ct(o, s) {
    for (var c = o.length; c--; )
      if (Tr(o[c][0], s))
        return c;
    return -1;
  }
  function _e(o, s) {
    return o && Vt(s, Gt(s), o);
  }
  function qt(o, s, c, m, R, x, L) {
    var k;
    if (m && (k = x ? m(o, R, x, L) : m(o)), k !== void 0)
      return k;
    if (!Ae(o))
      return o;
    var V = zt(o);
    if (V) {
      if (k = jn(o), !s)
        return Bn(o, k);
    } else {
      var $ = Ie(o), ee = $ == d || $ == g;
      if (Pr(o))
        return ut(o, s);
      if ($ == f || $ == a || ee && !x) {
        if (It(o))
          return x ? o : {};
        if (k = Ee(ee ? {} : o), !s)
          return $n(o, _e(k, o));
      } else {
        if (!M[$])
          return x ? o : {};
        k = qn(o, $, qt, s);
      }
    }
    L || (L = new ie());
    var ae = L.get(o);
    if (ae)
      return ae;
    if (L.set(o, k), !V)
      var z = c ? Un(o) : Gt(o);
    return ur(z || o, function(te, Q) {
      z && (Q = te, te = o[Q]), _r(k, Q, qt(te, s, c, m, Q, o, L));
    }), k;
  }
  function Rn(o) {
    return Ae(o) ? mr(o) : {};
  }
  function In(o, s, c) {
    var m = s(o);
    return zt(o) ? m : fr(m, c(o));
  }
  function Fn(o) {
    return nt.call(o);
  }
  function Nn(o) {
    if (!Ae(o) || zn(o))
      return !1;
    var s = Wt(o) || It(o) ? un : Pt;
    return s.test(oe(o));
  }
  function Dn(o) {
    if (!xr(o))
      return br(o);
    var s = [];
    for (var c in Object(o))
      Se.call(o, c) && c != "constructor" && s.push(c);
    return s;
  }
  function ut(o, s) {
    if (s)
      return o.slice();
    var c = new o.constructor(o.length);
    return o.copy(c), c;
  }
  function Ht(o) {
    var s = new o.constructor(o.byteLength);
    return new Dt(s).set(new Dt(o)), s;
  }
  function We(o, s) {
    var c = s ? Ht(o.buffer) : o.buffer;
    return new o.constructor(c, o.byteOffset, o.byteLength);
  }
  function Er(o, s, c) {
    var m = s ? c(pr(o), !0) : pr(o);
    return Ct(m, sn, new o.constructor());
  }
  function Ar(o) {
    var s = new o.constructor(o.source, je.exec(o));
    return s.lastIndex = o.lastIndex, s;
  }
  function kn(o, s, c) {
    var m = s ? c(hr(o), !0) : hr(o);
    return Ct(m, ge, new o.constructor());
  }
  function Mn(o) {
    return wr ? Object(wr.call(o)) : {};
  }
  function Ln(o, s) {
    var c = s ? Ht(o.buffer) : o.buffer;
    return new o.constructor(c, o.byteOffset, o.length);
  }
  function Bn(o, s) {
    var c = -1, m = o.length;
    for (s || (s = Array(m)); ++c < m; )
      s[c] = o[c];
    return s;
  }
  function Vt(o, s, c, m) {
    c || (c = {});
    for (var R = -1, x = s.length; ++R < x; ) {
      var L = s[R], k = void 0;
      _r(c, L, k === void 0 ? o[L] : k);
    }
    return c;
  }
  function $n(o, s) {
    return Vt(o, Re(o), s);
  }
  function Un(o) {
    return In(o, Gt, Re);
  }
  function Ge(o, s) {
    var c = o.__data__;
    return Vn(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
  }
  function ve(o, s) {
    var c = dr(o, s);
    return Nn(c) ? c : void 0;
  }
  var Re = kt ? Ft(kt, Object) : Gn, Ie = Fn;
  (at && Ie(new at(new ArrayBuffer(1))) != F || He && Ie(new He()) != w || me && Ie(me.resolve()) != v || st && Ie(new st()) != E || Mt && Ie(new Mt()) != T) && (Ie = function(o) {
    var s = nt.call(o), c = s == f ? o.constructor : void 0, m = c ? oe(c) : void 0;
    if (m)
      switch (m) {
        case Lt:
          return F;
        case ze:
          return w;
        case Bt:
          return v;
        case $t:
          return E;
        case Ut:
          return T;
      }
    return s;
  });
  function jn(o) {
    var s = o.length, c = o.constructor(s);
    return s && typeof o[0] == "string" && Se.call(o, "index") && (c.index = o.index, c.input = o.input), c;
  }
  function Ee(o) {
    return typeof o.constructor == "function" && !xr(o) ? Rn(he(o)) : {};
  }
  function qn(o, s, c, m) {
    var R = o.constructor;
    switch (s) {
      case C:
        return Ht(o);
      case u:
      case h:
        return new R(+o);
      case F:
        return We(o, m);
      case B:
      case P:
      case N:
      case j:
      case ne:
      case K:
      case Y:
      case ue:
      case fe:
        return Ln(o, m);
      case w:
        return Er(o, m, c);
      case S:
      case O:
        return new R(o);
      case b:
        return Ar(o);
      case E:
        return kn(o, m, c);
      case _:
        return Mn(o);
    }
  }
  function Hn(o, s) {
    return s = s ?? i, !!s && (typeof o == "number" || tt.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  function Vn(o) {
    var s = typeof o;
    return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
  }
  function zn(o) {
    return !!yr && yr in o;
  }
  function xr(o) {
    var s = o && o.constructor, c = typeof s == "function" && s.prototype || rt;
    return o === c;
  }
  function oe(o) {
    if (o != null) {
      try {
        return gr.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Or(o) {
    return qt(o, !0, !0);
  }
  function Tr(o, s) {
    return o === s || o !== o && s !== s;
  }
  function ft(o) {
    return Wn(o) && Se.call(o, "callee") && (!vr.call(o, "callee") || nt.call(o) == a);
  }
  var zt = Array.isArray;
  function dt(o) {
    return o != null && Cr(o.length) && !Wt(o);
  }
  function Wn(o) {
    return Rr(o) && dt(o);
  }
  var Pr = it || Kn;
  function Wt(o) {
    var s = Ae(o) ? nt.call(o) : "";
    return s == d || s == g;
  }
  function Cr(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= i;
  }
  function Ae(o) {
    var s = typeof o;
    return !!o && (s == "object" || s == "function");
  }
  function Rr(o) {
    return !!o && typeof o == "object";
  }
  function Gt(o) {
    return dt(o) ? lt(o) : Dn(o);
  }
  function Gn() {
    return [];
  }
  function Kn() {
    return !1;
  }
  e.exports = Or;
})(Xr, Xr.exports);
Xr.exports;
var Yr = { exports: {} };
Yr.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, l = 9007199254740991, u = "[object Arguments]", h = "[object Array]", p = "[object AsyncFunction]", d = "[object Boolean]", g = "[object Date]", w = "[object Error]", S = "[object Function]", f = "[object GeneratorFunction]", v = "[object Map]", b = "[object Number]", E = "[object Null]", O = "[object Object]", _ = "[object Promise]", T = "[object Proxy]", C = "[object RegExp]", F = "[object Set]", B = "[object String]", P = "[object Symbol]", N = "[object Undefined]", j = "[object WeakMap]", ne = "[object ArrayBuffer]", K = "[object DataView]", Y = "[object Float32Array]", ue = "[object Float64Array]", fe = "[object Int8Array]", Pe = "[object Int16Array]", je = "[object Int32Array]", Pt = "[object Uint8Array]", tt = "[object Uint8ClampedArray]", M = "[object Uint16Array]", on = "[object Uint32Array]", an = /[\\^$.*+?()[\]{}|]/g, ye = /^\[object .+?Constructor\]$/, lr = /^(?:0|[1-9]\d*)$/, U = {};
  U[Y] = U[ue] = U[fe] = U[Pe] = U[je] = U[Pt] = U[tt] = U[M] = U[on] = !0, U[u] = U[h] = U[ne] = U[d] = U[K] = U[g] = U[w] = U[S] = U[v] = U[b] = U[O] = U[C] = U[F] = U[B] = U[j] = !1;
  var cr = typeof be == "object" && be && be.Object === Object && be, sn = typeof self == "object" && self && self.Object === Object && self, ge = cr || sn || Function("return this")(), ur = t && !t.nodeType && t, fr = ur && !0 && e && !e.nodeType && e, Ct = fr && fr.exports === ur, Rt = Ct && cr.process, dr = function() {
    try {
      return Rt && Rt.binding && Rt.binding("util");
    } catch {
    }
  }(), It = dr && dr.isTypedArray;
  function pr(o, s) {
    for (var c = -1, m = o == null ? 0 : o.length, R = 0, x = []; ++c < m; ) {
      var L = o[c];
      s(L, c, o) && (x[R++] = L);
    }
    return x;
  }
  function Ft(o, s) {
    for (var c = -1, m = s.length, R = o.length; ++c < m; )
      o[R + c] = s[c];
    return o;
  }
  function hr(o, s) {
    for (var c = -1, m = o == null ? 0 : o.length; ++c < m; )
      if (s(o[c], c, o))
        return !0;
    return !1;
  }
  function ln(o, s) {
    for (var c = -1, m = Array(o); ++c < o; )
      m[c] = s(c);
    return m;
  }
  function cn(o) {
    return function(s) {
      return o(s);
    };
  }
  function rt(o, s) {
    return o.has(s);
  }
  function Nt(o, s) {
    return o == null ? void 0 : o[s];
  }
  function yr(o) {
    var s = -1, c = Array(o.size);
    return o.forEach(function(m, R) {
      c[++s] = [R, m];
    }), c;
  }
  function gr(o, s) {
    return function(c) {
      return o(s(c));
    };
  }
  function Se(o) {
    var s = -1, c = Array(o.size);
    return o.forEach(function(m) {
      c[++s] = m;
    }), c;
  }
  var nt = Array.prototype, un = Function.prototype, qe = Object.prototype, ot = ge["__core-js_shared__"], Dt = un.toString, he = qe.hasOwnProperty, mr = function() {
    var o = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), vr = qe.toString, fn = RegExp(
    "^" + Dt.call(he).replace(an, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), kt = Ct ? ge.Buffer : void 0, it = ge.Symbol, br = ge.Uint8Array, at = qe.propertyIsEnumerable, He = nt.splice, me = it ? it.toStringTag : void 0, st = Object.getOwnPropertySymbols, Mt = kt ? kt.isBuffer : void 0, Ve = gr(Object.keys, Object), Lt = Re(ge, "DataView"), ze = Re(ge, "Map"), Bt = Re(ge, "Promise"), $t = Re(ge, "Set"), Ut = Re(ge, "WeakMap"), De = Re(Object, "create"), wr = oe(Lt), Ce = oe(ze), dn = oe(Bt), pn = oe($t), hn = oe(Ut), Sr = it ? it.prototype : void 0, jt = Sr ? Sr.valueOf : void 0;
  function J(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function yn() {
    this.__data__ = De ? De(null) : {}, this.size = 0;
  }
  function gn(o) {
    var s = this.has(o) && delete this.__data__[o];
    return this.size -= s ? 1 : 0, s;
  }
  function mn(o) {
    var s = this.__data__;
    if (De) {
      var c = s[o];
      return c === n ? void 0 : c;
    }
    return he.call(s, o) ? s[o] : void 0;
  }
  function vn(o) {
    var s = this.__data__;
    return De ? s[o] !== void 0 : he.call(s, o);
  }
  function bn(o, s) {
    var c = this.__data__;
    return this.size += this.has(o) ? 0 : 1, c[o] = De && s === void 0 ? n : s, this;
  }
  J.prototype.clear = yn, J.prototype.delete = gn, J.prototype.get = mn, J.prototype.has = vn, J.prototype.set = bn;
  function Z(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function wn() {
    this.__data__ = [], this.size = 0;
  }
  function Sn(o) {
    var s = this.__data__, c = ut(s, o);
    if (c < 0)
      return !1;
    var m = s.length - 1;
    return c == m ? s.pop() : He.call(s, c, 1), --this.size, !0;
  }
  function _n(o) {
    var s = this.__data__, c = ut(s, o);
    return c < 0 ? void 0 : s[c][1];
  }
  function En(o) {
    return ut(this.__data__, o) > -1;
  }
  function An(o, s) {
    var c = this.__data__, m = ut(c, o);
    return m < 0 ? (++this.size, c.push([o, s])) : c[m][1] = s, this;
  }
  Z.prototype.clear = wn, Z.prototype.delete = Sn, Z.prototype.get = _n, Z.prototype.has = En, Z.prototype.set = An;
  function ie(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var m = o[s];
      this.set(m[0], m[1]);
    }
  }
  function xn() {
    this.size = 0, this.__data__ = {
      hash: new J(),
      map: new (ze || Z)(),
      string: new J()
    };
  }
  function On(o) {
    var s = ve(this, o).delete(o);
    return this.size -= s ? 1 : 0, s;
  }
  function Tn(o) {
    return ve(this, o).get(o);
  }
  function Pn(o) {
    return ve(this, o).has(o);
  }
  function Cn(o, s) {
    var c = ve(this, o), m = c.size;
    return c.set(o, s), this.size += c.size == m ? 0 : 1, this;
  }
  ie.prototype.clear = xn, ie.prototype.delete = On, ie.prototype.get = Tn, ie.prototype.has = Pn, ie.prototype.set = Cn;
  function lt(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.__data__ = new ie(); ++s < c; )
      this.add(o[s]);
  }
  function _r(o) {
    return this.__data__.set(o, n), this;
  }
  function ct(o) {
    return this.__data__.has(o);
  }
  lt.prototype.add = lt.prototype.push = _r, lt.prototype.has = ct;
  function _e(o) {
    var s = this.__data__ = new Z(o);
    this.size = s.size;
  }
  function qt() {
    this.__data__ = new Z(), this.size = 0;
  }
  function Rn(o) {
    var s = this.__data__, c = s.delete(o);
    return this.size = s.size, c;
  }
  function In(o) {
    return this.__data__.get(o);
  }
  function Fn(o) {
    return this.__data__.has(o);
  }
  function Nn(o, s) {
    var c = this.__data__;
    if (c instanceof Z) {
      var m = c.__data__;
      if (!ze || m.length < r - 1)
        return m.push([o, s]), this.size = ++c.size, this;
      c = this.__data__ = new ie(m);
    }
    return c.set(o, s), this.size = c.size, this;
  }
  _e.prototype.clear = qt, _e.prototype.delete = Rn, _e.prototype.get = In, _e.prototype.has = Fn, _e.prototype.set = Nn;
  function Dn(o, s) {
    var c = ft(o), m = !c && Tr(o), R = !c && !m && dt(o), x = !c && !m && !R && Rr(o), L = c || m || R || x, k = L ? ln(o.length, String) : [], V = k.length;
    for (var $ in o)
      he.call(o, $) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      x && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
      qn($, V))) && k.push($);
    return k;
  }
  function ut(o, s) {
    for (var c = o.length; c--; )
      if (Or(o[c][0], s))
        return c;
    return -1;
  }
  function Ht(o, s, c) {
    var m = s(o);
    return ft(o) ? m : Ft(m, c(o));
  }
  function We(o) {
    return o == null ? o === void 0 ? N : E : me && me in Object(o) ? Ie(o) : xr(o);
  }
  function Er(o) {
    return Ae(o) && We(o) == u;
  }
  function Ar(o, s, c, m, R) {
    return o === s ? !0 : o == null || s == null || !Ae(o) && !Ae(s) ? o !== o && s !== s : kn(o, s, c, m, Ar, R);
  }
  function kn(o, s, c, m, R, x) {
    var L = ft(o), k = ft(s), V = L ? h : Ee(o), $ = k ? h : Ee(s);
    V = V == u ? O : V, $ = $ == u ? O : $;
    var ee = V == O, ae = $ == O, z = V == $;
    if (z && dt(o)) {
      if (!dt(s))
        return !1;
      L = !0, ee = !1;
    }
    if (z && !ee)
      return x || (x = new _e()), L || Rr(o) ? Vt(o, s, c, m, R, x) : $n(o, s, V, c, m, R, x);
    if (!(c & i)) {
      var te = ee && he.call(o, "__wrapped__"), Q = ae && he.call(s, "__wrapped__");
      if (te || Q) {
        var ke = te ? o.value() : o, Fe = Q ? s.value() : s;
        return x || (x = new _e()), R(ke, Fe, c, m, x);
      }
    }
    return z ? (x || (x = new _e()), Un(o, s, c, m, R, x)) : !1;
  }
  function Mn(o) {
    if (!Cr(o) || Vn(o))
      return !1;
    var s = Pr(o) ? fn : ye;
    return s.test(oe(o));
  }
  function Ln(o) {
    return Ae(o) && Wt(o.length) && !!U[We(o)];
  }
  function Bn(o) {
    if (!zn(o))
      return Ve(o);
    var s = [];
    for (var c in Object(o))
      he.call(o, c) && c != "constructor" && s.push(c);
    return s;
  }
  function Vt(o, s, c, m, R, x) {
    var L = c & i, k = o.length, V = s.length;
    if (k != V && !(L && V > k))
      return !1;
    var $ = x.get(o);
    if ($ && x.get(s))
      return $ == s;
    var ee = -1, ae = !0, z = c & a ? new lt() : void 0;
    for (x.set(o, s), x.set(s, o); ++ee < k; ) {
      var te = o[ee], Q = s[ee];
      if (m)
        var ke = L ? m(Q, te, ee, s, o, x) : m(te, Q, ee, o, s, x);
      if (ke !== void 0) {
        if (ke)
          continue;
        ae = !1;
        break;
      }
      if (z) {
        if (!hr(s, function(Fe, Ke) {
          if (!rt(z, Ke) && (te === Fe || R(te, Fe, c, m, x)))
            return z.push(Ke);
        })) {
          ae = !1;
          break;
        }
      } else if (!(te === Q || R(te, Q, c, m, x))) {
        ae = !1;
        break;
      }
    }
    return x.delete(o), x.delete(s), ae;
  }
  function $n(o, s, c, m, R, x, L) {
    switch (c) {
      case K:
        if (o.byteLength != s.byteLength || o.byteOffset != s.byteOffset)
          return !1;
        o = o.buffer, s = s.buffer;
      case ne:
        return !(o.byteLength != s.byteLength || !x(new br(o), new br(s)));
      case d:
      case g:
      case b:
        return Or(+o, +s);
      case w:
        return o.name == s.name && o.message == s.message;
      case C:
      case B:
        return o == s + "";
      case v:
        var k = yr;
      case F:
        var V = m & i;
        if (k || (k = Se), o.size != s.size && !V)
          return !1;
        var $ = L.get(o);
        if ($)
          return $ == s;
        m |= a, L.set(o, s);
        var ee = Vt(k(o), k(s), m, R, x, L);
        return L.delete(o), ee;
      case P:
        if (jt)
          return jt.call(o) == jt.call(s);
    }
    return !1;
  }
  function Un(o, s, c, m, R, x) {
    var L = c & i, k = Ge(o), V = k.length, $ = Ge(s), ee = $.length;
    if (V != ee && !L)
      return !1;
    for (var ae = V; ae--; ) {
      var z = k[ae];
      if (!(L ? z in s : he.call(s, z)))
        return !1;
    }
    var te = x.get(o);
    if (te && x.get(s))
      return te == s;
    var Q = !0;
    x.set(o, s), x.set(s, o);
    for (var ke = L; ++ae < V; ) {
      z = k[ae];
      var Fe = o[z], Ke = s[z];
      if (m)
        var Ko = L ? m(Ke, Fe, z, s, o, x) : m(Fe, Ke, z, o, s, x);
      if (!(Ko === void 0 ? Fe === Ke || R(Fe, Ke, c, m, x) : Ko)) {
        Q = !1;
        break;
      }
      ke || (ke = z == "constructor");
    }
    if (Q && !ke) {
      var Ir = o.constructor, Fr = s.constructor;
      Ir != Fr && "constructor" in o && "constructor" in s && !(typeof Ir == "function" && Ir instanceof Ir && typeof Fr == "function" && Fr instanceof Fr) && (Q = !1);
    }
    return x.delete(o), x.delete(s), Q;
  }
  function Ge(o) {
    return Ht(o, Gt, jn);
  }
  function ve(o, s) {
    var c = o.__data__;
    return Hn(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
  }
  function Re(o, s) {
    var c = Nt(o, s);
    return Mn(c) ? c : void 0;
  }
  function Ie(o) {
    var s = he.call(o, me), c = o[me];
    try {
      o[me] = void 0;
      var m = !0;
    } catch {
    }
    var R = vr.call(o);
    return m && (s ? o[me] = c : delete o[me]), R;
  }
  var jn = st ? function(o) {
    return o == null ? [] : (o = Object(o), pr(st(o), function(s) {
      return at.call(o, s);
    }));
  } : Gn, Ee = We;
  (Lt && Ee(new Lt(new ArrayBuffer(1))) != K || ze && Ee(new ze()) != v || Bt && Ee(Bt.resolve()) != _ || $t && Ee(new $t()) != F || Ut && Ee(new Ut()) != j) && (Ee = function(o) {
    var s = We(o), c = s == O ? o.constructor : void 0, m = c ? oe(c) : "";
    if (m)
      switch (m) {
        case wr:
          return K;
        case Ce:
          return v;
        case dn:
          return _;
        case pn:
          return F;
        case hn:
          return j;
      }
    return s;
  });
  function qn(o, s) {
    return s = s ?? l, !!s && (typeof o == "number" || lr.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  function Hn(o) {
    var s = typeof o;
    return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
  }
  function Vn(o) {
    return !!mr && mr in o;
  }
  function zn(o) {
    var s = o && o.constructor, c = typeof s == "function" && s.prototype || qe;
    return o === c;
  }
  function xr(o) {
    return vr.call(o);
  }
  function oe(o) {
    if (o != null) {
      try {
        return Dt.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Or(o, s) {
    return o === s || o !== o && s !== s;
  }
  var Tr = Er(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Er : function(o) {
    return Ae(o) && he.call(o, "callee") && !at.call(o, "callee");
  }, ft = Array.isArray;
  function zt(o) {
    return o != null && Wt(o.length) && !Pr(o);
  }
  var dt = Mt || Kn;
  function Wn(o, s) {
    return Ar(o, s);
  }
  function Pr(o) {
    if (!Cr(o))
      return !1;
    var s = We(o);
    return s == S || s == f || s == p || s == T;
  }
  function Wt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function Cr(o) {
    var s = typeof o;
    return o != null && (s == "object" || s == "function");
  }
  function Ae(o) {
    return o != null && typeof o == "object";
  }
  var Rr = It ? cn(It) : Ln;
  function Gt(o) {
    return zt(o) ? Dn(o) : Bn(o);
  }
  function Gn() {
    return [];
  }
  function Kn() {
    return !1;
  }
  e.exports = Wn;
})(Yr, Yr.exports);
Yr.exports;
var de = No(null), Lr = No(null), po = La(null), Br = No(null), $i = null;
Do({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  de.value = t ? Jo(t) : null, Lr.value = e, Br.value = null;
  let a = typeof window > "u";
  return $i = of(a, n, i), a || (Fo.init({ initialPage: e, resolveComponent: r, swapComponent: async (l) => {
    de.value = Jo(l.component), Lr.value = l.page, Br.value = l.preserveState ? Br.value : Date.now();
  } }), Fo.on("navigate", () => $i.forceUpdate())), () => {
    if (de.value) {
      de.value.inheritAttrs = !!de.value.inheritAttrs;
      let l = $r(de.value, { ...Lr.value.props, key: Br.value });
      return po.value && (de.value.layout = po.value, po.value = null), de.value.layout ? typeof de.value.layout == "function" ? de.value.layout($r, l) : (Array.isArray(de.value.layout) ? de.value.layout : [de.value.layout]).concat(l).reverse().reduce((u, h) => (h.inheritAttrs = !!h.inheritAttrs, $r(h, { ...Lr.value.props }, () => u))) : l;
    }
  };
} });
Do({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let i = e.props[n];
    return ["key", "head-key"].includes(n) ? r : i === "" ? r + ` ${n}` : r + ` ${n}="${i}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, r) => t + this.renderTag(r), "");
}, isFunctionNode(e) {
  return typeof e.type == "function";
}, isComponentNode(e) {
  return typeof e.type == "object";
}, isCommentNode(e) {
  return /(comment|cmt)/i.test(e.type.toString());
}, isFragmentNode(e) {
  return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}, isTextNode(e) {
  return /(text|txt)/i.test(e.type.toString());
}, renderTag(e) {
  if (this.isTextNode(e)) return e.children;
  if (this.isFragmentNode(e) || this.isCommentNode(e)) return "";
  let t = this.renderTagStart(e);
  return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${e.type}>`), t;
}, addTitleElement(e) {
  return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title inertia>${this.title}</title>`), e;
}, renderNodes(e) {
  return this.addTitleElement(e.flatMap((t) => this.resolveNode(t)).map((t) => this.renderTag(t)).filter((t) => t));
}, resolveNode(e) {
  return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
var sf = Do({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let n = e.as.toLowerCase(), i = e.method.toLowerCase(), [a, l] = Ma(i, e.href || "", e.data, e.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), $r(e.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (u) => {
      af(u) && (u.preventDefault(), Fo.visit(a, { data: l, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, t);
  };
} }), lf = sf;
const Go = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, cf = {
  components: {
    Link: lf
  },
  props: {
    isCheckAll: {
      type: Boolean,
      required: !0
    },
    createUrl: String,
    createFun: {
      type: Function
    }
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("on-search", this.search);
    },
    handleMassDelete() {
      this.$emit("mass-delete");
    }
  }
}, uf = { class: "flex items-center space-x-2" }, ff = { class: "relative" }, df = /* @__PURE__ */ A("div", { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, [
  /* @__PURE__ */ A("svg", {
    class: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ A("path", {
      "fill-rule": "evenodd",
      d: "M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.386zM8 14a6 6 0 100-12 6 6 0 000 12z",
      "clip-rule": "evenodd"
    })
  ])
], -1), pf = { class: "flex space-x-4" }, hf = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
  })
], -1), yf = /* @__PURE__ */ A("span", { class: "" }, "Create data", -1), gf = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
  })
], -1), mf = /* @__PURE__ */ A("span", { class: "" }, "Create data", -1), vf = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
  })
], -1), bf = /* @__PURE__ */ A("span", null, "Delete", -1), wf = [
  vf,
  bf
];
function Sf(e, t, r, n, i, a) {
  const l = Vr("Link"), u = Vr("Button");
  return X(), se("div", uf, [
    A("div", ff, [
      Yt(A("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (h) => i.search = h),
        onInput: t[1] || (t[1] = (...h) => a.handleSearch && a.handleSearch(...h)),
        type: "text",
        class: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        placeholder: "Search"
      }, null, 544), [
        [Ba, i.search]
      ]),
      df
    ]),
    A("div", pf, [
      r.createUrl ? (X(), ho(l, {
        key: 0,
        href: r.createUrl,
        class: "inline-flex hover:bg-neutral-100 items-center px-3 py-2 text-neutral-700 hover:text-neutral-900 text-xs space-x-1 dark:focus:ring-blue-800 rounded-md"
      }, {
        default: yo(() => [
          hf,
          yf
        ]),
        _: 1
      }, 8, ["href"])) : Be("", !0),
      r.createFun ? (X(), ho(u, {
        key: 1,
        onClick: r.createFun,
        class: "inline-flex hover:bg-neutral-100 items-center px-3 py-2 text-neutral-700 hover:text-neutral-900 text-xs space-x-1 dark:focus:ring-blue-800 rounded-md"
      }, {
        default: yo(() => [
          gf,
          mf
        ]),
        _: 1
      }, 8, ["onClick"])) : Be("", !0),
      r.isCheckAll ? (X(), se("button", {
        key: 2,
        onClick: t[2] || (t[2] = (...h) => a.handleMassDelete && a.handleMassDelete(...h)),
        class: "inline-flex hover:bg-neutral-100 items-center px-3 py-2 text-neutral-700 hover:text-red-500 text-xs space-x-1 dark:focus:ring-blue-800 rounded-md"
      }, wf)) : Be("", !0),
      Ui(e.$slots, "filter")
    ])
  ]);
}
const _f = /* @__PURE__ */ Go(cf, [["render", Sf]]), Ef = {
  props: {
    text: {
      type: String,
      default: "Are you sure you want to delete this item?"
    }
  }
}, Af = { class: "fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50" }, xf = { class: "relative w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800" }, Of = /* @__PURE__ */ A("div", { class: "text-lg font-medium text-gray-900 dark:text-white" }, " Confirm ", -1), Tf = { class: "mt-4 text-sm text-gray-500 dark:text-gray-400" }, Pf = { class: "flex justify-end mt-6" };
function Cf(e, t, r, n, i, a) {
  return X(), se("div", Af, [
    A("div", xf, [
      Of,
      A("p", Tf, mt(r.text), 1),
      A("div", Pf, [
        A("button", {
          onClick: t[0] || (t[0] = (l) => e.$emit("cancel")),
          class: "px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600"
        }, " Cancel "),
        A("button", {
          onClick: t[1] || (t[1] = (l) => e.$emit("confirm")),
          class: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        }, " Confirm ")
      ])
    ])
  ]);
}
const Rf = /* @__PURE__ */ Go(Ef, [["render", Cf]]), If = {
  components: {
    TableOptions: _f,
    ConfirmationModal: Rf
  },
  props: {
    hiddenIndex: {
      type: Array,
      required: !1
    },
    primaryKey: {
      type: String,
      default: "id"
    },
    data: {
      type: Object,
      required: !0
    },
    header: {
      type: Array,
      required: !0
    },
    createFun: {
      required: !1
    },
    editFun: Function,
    deleteFun: Function,
    alertText: {
      type: String,
      default: "Are you sure you want to delete this item?"
    },
    customParam: {
      type: Object,
      default: () => ({})
    },
    hasCheck: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      search: "",
      isCheckAll: !1,
      checkedItems: [],
      selectedId: null,
      showDeleteModal: !1,
      createUrl: null,
      createFunData: null
    };
  },
  mounted() {
    typeof this.createFun == "string" ? this.createUrl = this.createFun : typeof this.createFun == "function" && (this.createFunData = this.createFun);
  },
  methods: {
    onSearchHandler(e) {
      this.$emit("on-search", e);
    },
    checkAllHandler() {
      this.checkedItems = this.isCheckAll ? this.data.data.map((e) => e[this.primaryKey]) : [];
    },
    clearCheckHandler() {
      this.isCheckAll = !1, this.checkedItems = [];
    },
    onChangePage(e) {
      this.$emit("on-change-page", e);
    },
    toggleDeleteModal() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    singleDeleteHandler(e) {
      this.selectedId = [e], this.toggleDeleteModal();
    },
    massDeleteHandler() {
      this.checkedItems.length > 0 && (this.selectedId = this.checkedItems, this.toggleDeleteModal());
    },
    acceptDeleteHandler() {
      this.deleteFun(this.selectedId), this.toggleDeleteModal(), this.clearCheckHandler();
    }
  }
}, Ff = { class: "flex flex-col pt-3" }, Nf = { class: "overflow-x-auto" }, Df = { class: "w-full divide-y whitespace-nowrap divide-gray-200 dark:divide-gray-600" }, kf = { class: "bg-gray-100 dark:bg-gray-700" }, Mf = {
  key: 0,
  class: "p-4 w-6"
}, Lf = { class: "flex items-center" }, Bf = /* @__PURE__ */ A("label", {
  for: "checkbox-all",
  class: "sr-only"
}, "checkbox", -1), $f = { class: "p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" }, Uf = { class: "bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700" }, jf = {
  key: 0,
  class: "w-4 p-4"
}, qf = { class: "flex items-center" }, Hf = ["id", "value"], Vf = ["for"], zf = { class: "p-4 space-x-2 whitespace-nowrap" }, Wf = ["onClick"], Gf = /* @__PURE__ */ A("svg", {
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ A("path", { d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" }),
  /* @__PURE__ */ A("path", {
    "fill-rule": "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    "clip-rule": "evenodd"
  })
], -1), Kf = ["onClick"], Jf = /* @__PURE__ */ A("svg", {
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ A("path", {
    "fill-rule": "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Qf = { class: "sticky bottom-0 right-0 w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700" }, Xf = { class: "flex items-center mb-4 sm:mb-0" }, Yf = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
  })
], -1), Zf = [
  Yf
], ed = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
  })
], -1), td = [
  ed
], rd = { class: "text-sm font-normal text-gray-500 dark:text-gray-400" }, nd = { class: "font-semibold text-gray-900 dark:text-white" }, od = { class: "font-semibold text-gray-900 dark:text-white" }, id = { class: "flex items-center space-x-3" }, ad = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
  })
], -1), sd = /* @__PURE__ */ A("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ A("path", {
    fill: "currentColor",
    d: "M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
  })
], -1);
function ld(e, t, r, n, i, a) {
  var h, p, d;
  const l = Vr("TableOptions"), u = Vr("ConfirmationModal");
  return X(), se(Nr, null, [
    $a(l, {
      onOnSearch: a.onSearchHandler,
      onMassDelete: a.massDeleteHandler,
      "create-url": i.createUrl,
      "create-fun": i.createFunData,
      "is-check-all": i.isCheckAll,
      onClearCheck: a.clearCheckHandler
    }, {
      filter: yo(() => [
        Ui(e.$slots, "filter")
      ]),
      _: 3
    }, 8, ["onOnSearch", "onMassDelete", "create-url", "create-fun", "is-check-all", "onClearCheck"]),
    A("div", Ff, [
      A("div", Nf, [
        A("table", Df, [
          A("thead", kf, [
            A("tr", null, [
              r.hasCheck ? (X(), se("th", Mf, [
                A("div", Lf, [
                  Yt(A("input", {
                    onChange: t[0] || (t[0] = (...g) => a.checkAllHandler && a.checkAllHandler(...g)),
                    "onUpdate:modelValue": t[1] || (t[1] = (g) => i.isCheckAll = g),
                    id: "checkbox-all",
                    type: "checkbox",
                    class: "w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  }, null, 544), [
                    [Qo, i.isCheckAll]
                  ]),
                  Bf
                ])
              ])) : Be("", !0),
              (X(!0), se(Nr, null, Jn(r.header, (g, w) => (X(), se("th", {
                key: w,
                class: "p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
              }, mt(g), 1))), 128)),
              Yt(A("th", $f, " Actions ", 512), [
                [Xo, r.deleteFun != null || r.editFun != null]
              ])
            ])
          ]),
          A("tbody", Uf, [
            (X(!0), se(Nr, null, Jn(r.data.data, (g, w) => (X(), se("tr", {
              key: w,
              class: "hover:bg-gray-100 dark:hover:bg-gray-700"
            }, [
              r.hasCheck ? (X(), se("td", jf, [
                A("div", qf, [
                  Yt(A("input", {
                    id: "checkbox-" + g.id,
                    value: g.id,
                    "onUpdate:modelValue": t[2] || (t[2] = (S) => i.checkedItems = S),
                    type: "checkbox",
                    class: "w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  }, null, 8, Hf), [
                    [Qo, i.checkedItems]
                  ]),
                  A("label", {
                    for: "checkbox-" + g.id,
                    class: "sr-only"
                  }, "checkbox", 8, Vf)
                ])
              ])) : Be("", !0),
              (X(!0), se(Nr, null, Jn(g, (S, f) => {
                var v;
                return Yt((X(), se("td", {
                  key: f,
                  class: "p-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                }, mt(S), 1)), [
                  [Xo, f != r.primaryKey && !((v = r.hiddenIndex) != null && v.includes(f))]
                ]);
              }), 128)),
              A("td", zf, [
                r.editFun ? (X(), se("button", {
                  key: 0,
                  onClick: (S) => r.editFun(g.id),
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                }, [
                  Gf,
                  pt(" Edit ")
                ], 8, Wf)) : Be("", !0),
                r.deleteFun ? (X(), se("button", {
                  key: 1,
                  onClick: (S) => a.singleDeleteHandler(g.id),
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                }, [
                  Jf,
                  pt(" Delete ")
                ], 8, Kf)) : Be("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])
    ]),
    A("div", Qf, [
      A("div", Xf, [
        A("button", {
          onClick: t[3] || (t[3] = (g) => a.onChangePage(r.data.prev_page_url)),
          class: "inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }, Zf),
        A("button", {
          onClick: t[4] || (t[4] = (g) => a.onChangePage(r.data.next_page_url)),
          class: "inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }, td),
        A("span", rd, [
          pt(" Showing "),
          A("span", nd, mt(((h = r.data) == null ? void 0 : h.from) ?? 0) + "-" + mt(((p = r.data) == null ? void 0 : p.to) ?? 0), 1),
          pt(" of "),
          A("span", od, mt(((d = r.data) == null ? void 0 : d.total) ?? 0), 1)
        ])
      ]),
      A("div", id, [
        A("button", {
          onClick: t[5] || (t[5] = (g) => a.onChangePage(r.data.prev_page_url)),
          class: "inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }, [
          ad,
          pt(" Previous ")
        ]),
        A("button", {
          onClick: t[6] || (t[6] = (g) => a.onChangePage(r.data.next_page_url)),
          class: "inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }, [
          pt(" Next "),
          sd
        ])
      ])
    ]),
    i.showDeleteModal ? (X(), ho(u, {
      key: 0,
      onConfirm: a.acceptDeleteHandler,
      onCancel: a.toggleDeleteModal,
      text: r.alertText
    }, null, 8, ["onConfirm", "onCancel", "text"])) : Be("", !0)
  ], 64);
}
const ud = /* @__PURE__ */ Go(If, [["render", ld]]);
export {
  ud as default
};
