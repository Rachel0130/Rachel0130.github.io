const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BqbaXKQZ.js","assets/ScrapbookDecorations-cyS_fXp7.js","assets/ScrapbookDecorations-jJJIUyTd.css","assets/star-BNiNb-9K.js","assets/bookmark-DrUpkcIR.js","assets/HomeView-BfvLJ7dJ.css","assets/MusicView-B8auzt5e.js","assets/quote-CJhbp7k4.js","assets/MusicView-DDcNXcW-.css","assets/BookView-D-9Y3gwY.js","assets/coffee-W-VRIzES.js","assets/BookView-C9bF_a7l.css","assets/MovieView-BqqvRe4Z.js","assets/MovieView-Cu2XldYd.css","assets/PerfumeView-ac4d8g4f.js","assets/PerfumeView-CmqHJ6id.css"])))=>i.map(i=>d[i]);
let $e, Xf, pu, Ee, no, ic, Ms, du, Zi, fc, De, fu, au, oc, hu, Rs, xs, Pi, uu, js, sl, Mo, Tt, pl;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver((r) => {
      for (const i of r) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(r) {
      const i = {};
      return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function s(r) {
      if (r.ep) return;
      r.ep = true;
      const i = n(r);
      fetch(r.href, i);
    }
  })();
  function Es(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ie = {}, Mt = [], ze = () => {
  }, Kr = () => false, Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), As = (e) => e.startsWith("onUpdate:"), de = Object.assign, Cs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Co = Object.prototype.hasOwnProperty, Y = (e, t) => Co.call(e, t), B = Array.isArray, Ft = (e) => In(e) === "[object Map]", Wr = (e) => In(e) === "[object Set]", U = (e) => typeof e == "function", ce = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", $r = (e) => (oe(e) || U(e)) && U(e.then) && U(e.catch), qr = Object.prototype.toString, In = (e) => qr.call(e), So = (e) => In(e).slice(8, -1), zr = (e) => In(e) === "[object Object]", Ss = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = Es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Nn = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Ro = /-\w/g, Le = Nn((e) => e.replace(Ro, (t) => t.slice(1).toUpperCase())), xo = /\B([A-Z])/g, Ot = Nn((e) => e.replace(xo, "-$1").toLowerCase()), Ln = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), kn = Nn((e) => e ? `on${Ln(e)}` : ""), gt = (e, t) => !Object.is(e, t), Kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Jr = (e, t, n, s = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: s,
      value: n
    });
  }, wo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, To = (e) => {
    const t = ce(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let $s;
  const Dn = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Rs = function(e) {
    if (B(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n], r = ce(s) ? No(s) : Rs(s);
        if (r) for (const i in r) t[i] = r[i];
      }
      return t;
    } else if (ce(e) || oe(e)) return e;
  };
  const Oo = /;(?![^(]*\))/g, Po = /:([^]+)/, Io = /\/\*[^]*?\*\//g;
  function No(e) {
    const t = {};
    return e.replace(Io, "").split(Oo).forEach((n) => {
      if (n) {
        const s = n.split(Po);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }), t;
  }
  xs = function(e) {
    let t = "";
    if (ce(e)) t = e;
    else if (B(e)) for (let n = 0; n < e.length; n++) {
      const s = xs(e[n]);
      s && (t += s + " ");
    }
    else if (oe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Do = Es(Lo);
  function Qr(e) {
    return !!e || e === "";
  }
  let Yr, Xr, Wn;
  Yr = (e) => !!(e && e.__v_isRef === true);
  Mo = (e) => ce(e) ? e : e == null ? "" : B(e) || oe(e) && (e.toString === qr || !U(e.toString)) ? Yr(e) ? Mo(e.value) : JSON.stringify(e, Xr, 2) : String(e);
  Xr = (e, t) => Yr(t) ? Xr(e, t.value) : Ft(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [s, r], i) => (n[Wn(s, i) + " =>"] = r, n), {})
  } : Wr(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Wn(n))
  } : _t(t) ? Wn(t) : oe(t) && !B(t) && !zr(t) ? String(t) : t;
  Wn = (e, t = "") => {
    var n;
    return _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let Re;
  class Fo {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = Re;
        try {
          return Re = this, t();
        } finally {
          Re = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Re, Re = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Re = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, s;
        for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function Ho() {
    return Re;
  }
  let re;
  const $n = /* @__PURE__ */ new WeakSet();
  class Zr {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, $n.has(this) && ($n.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ti(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, qs(this), ni(this);
      const t = re, n = Fe;
      re = this, Fe = true;
      try {
        return this.fn();
      } finally {
        si(this), re = t, Fe = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Os(t);
        this.deps = this.depsTail = void 0, qs(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? $n.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      is(this) && this.run();
    }
    get dirty() {
      return is(this);
    }
  }
  let ei = 0, Jt, Qt;
  function ti(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Qt, Qt = e;
      return;
    }
    e.next = Jt, Jt = e;
  }
  function ws() {
    ei++;
  }
  function Ts() {
    if (--ei > 0) return;
    if (Qt) {
      let t = Qt;
      for (Qt = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Jt; ) {
      let t = Jt;
      for (Jt = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function ni(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function si(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
      const r = s.prevDep;
      s.version === -1 ? (s === n && (n = r), Os(s), Bo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function is(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ri(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function ri(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !is(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = re, s = Fe;
    re = e, Fe = true;
    try {
      ni(e);
      const r = e.fn(e._value);
      (t.version === 0 || gt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      re = n, Fe = s, si(e), e.flags &= -3;
    }
  }
  function Os(e, t = false) {
    const { dep: n, prevSub: s, nextSub: r } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) Os(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Bo(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let Fe = true;
  const ii = [];
  function st() {
    ii.push(Fe), Fe = false;
  }
  function rt() {
    const e = ii.pop();
    Fe = e === void 0 ? true : e;
  }
  function qs(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = re;
      re = void 0;
      try {
        t();
      } finally {
        re = n;
      }
    }
  }
  let nn = 0;
  class Vo {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Ps {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!re || !Fe || re === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== re) n = this.activeLink = new Vo(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, oi(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const s = n.nextDep;
        s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = s);
      }
      return n;
    }
    trigger(t) {
      this.version++, nn++, this.notify(t);
    }
    notify(t) {
      ws();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ts();
      }
    }
  }
  function oi(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let s = t.deps; s; s = s.nextDep) oi(s);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const os = /* @__PURE__ */ new WeakMap(), xt = Symbol(""), ls = Symbol(""), sn = Symbol("");
  function pe(e, t, n) {
    if (Fe && re) {
      let s = os.get(e);
      s || os.set(e, s = /* @__PURE__ */ new Map());
      let r = s.get(n);
      r || (s.set(n, r = new Ps()), r.map = s, r.key = n), r.track();
    }
  }
  function tt(e, t, n, s, r, i) {
    const o = os.get(e);
    if (!o) {
      nn++;
      return;
    }
    const l = (c) => {
      c && c.trigger();
    };
    if (ws(), t === "clear") o.forEach(l);
    else {
      const c = B(e), d = c && Ss(n);
      if (c && n === "length") {
        const f = Number(s);
        o.forEach((a, p) => {
          (p === "length" || p === sn || !_t(p) && p >= f) && l(a);
        });
      } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(sn)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(xt)), Ft(e) && l(o.get(ls)));
          break;
        case "delete":
          c || (l(o.get(xt)), Ft(e) && l(o.get(ls)));
          break;
        case "set":
          Ft(e) && l(o.get(xt));
          break;
      }
    }
    Ts();
  }
  function Nt(e) {
    const t = q(e);
    return t === e ? t : (pe(t, "iterate", sn), Ne(e) ? t : t.map(He));
  }
  function Mn(e) {
    return pe(e = q(e), "iterate", sn), e;
  }
  function ut(e, t) {
    return it(e) ? wt(e) ? Vt(He(t)) : Vt(t) : He(t);
  }
  const jo = {
    __proto__: null,
    [Symbol.iterator]() {
      return qn(this, Symbol.iterator, (e) => ut(this, e));
    },
    concat(...e) {
      return Nt(this).concat(...e.map((t) => B(t) ? Nt(t) : t));
    },
    entries() {
      return qn(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
    },
    every(e, t) {
      return Qe(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Qe(this, "filter", e, t, (n) => n.map((s) => ut(this, s)), arguments);
    },
    find(e, t) {
      return Qe(this, "find", e, t, (n) => ut(this, n), arguments);
    },
    findIndex(e, t) {
      return Qe(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Qe(this, "findLast", e, t, (n) => ut(this, n), arguments);
    },
    findLastIndex(e, t) {
      return Qe(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Qe(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return zn(this, "includes", e);
    },
    indexOf(...e) {
      return zn(this, "indexOf", e);
    },
    join(e) {
      return Nt(this).join(e);
    },
    lastIndexOf(...e) {
      return zn(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Qe(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return kt(this, "pop");
    },
    push(...e) {
      return kt(this, "push", e);
    },
    reduce(e, ...t) {
      return zs(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return zs(this, "reduceRight", e, t);
    },
    shift() {
      return kt(this, "shift");
    },
    some(e, t) {
      return Qe(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return kt(this, "splice", e);
    },
    toReversed() {
      return Nt(this).toReversed();
    },
    toSorted(e) {
      return Nt(this).toSorted(e);
    },
    toSpliced(...e) {
      return Nt(this).toSpliced(...e);
    },
    unshift(...e) {
      return kt(this, "unshift", e);
    },
    values() {
      return qn(this, "values", (e) => ut(this, e));
    }
  };
  function qn(e, t, n) {
    const s = Mn(e), r = s[t]();
    return s !== e && !Ne(e) && (r._next = r.next, r.next = () => {
      const i = r._next();
      return i.done || (i.value = n(i.value)), i;
    }), r;
  }
  const Uo = Array.prototype;
  function Qe(e, t, n, s, r, i) {
    const o = Mn(e), l = o !== e && !Ne(e), c = o[t];
    if (c !== Uo[t]) {
      const a = c.apply(e, i);
      return l ? He(a) : a;
    }
    let d = n;
    o !== e && (l ? d = function(a, p) {
      return n.call(this, ut(e, a), p, e);
    } : n.length > 2 && (d = function(a, p) {
      return n.call(this, a, p, e);
    }));
    const f = c.call(o, d, s);
    return l && r ? r(f) : f;
  }
  function zs(e, t, n, s) {
    const r = Mn(e);
    let i = n;
    return r !== e && (Ne(e) ? n.length > 3 && (i = function(o, l, c) {
      return n.call(this, o, l, c, e);
    }) : i = function(o, l, c) {
      return n.call(this, o, ut(e, l), c, e);
    }), r[t](i, ...s);
  }
  function zn(e, t, n) {
    const s = q(e);
    pe(s, "iterate", sn);
    const r = s[t](...n);
    return (r === -1 || r === false) && Ls(n[0]) ? (n[0] = q(n[0]), s[t](...n)) : r;
  }
  function kt(e, t, n = []) {
    st(), ws();
    const s = q(e)[t].apply(e, n);
    return Ts(), rt(), s;
  }
  const Go = Es("__proto__,__v_isRef,__isVue"), li = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t));
  function ko(e) {
    _t(e) || (e = String(e));
    const t = q(this);
    return pe(t, "has", e), t.hasOwnProperty(e);
  }
  class ci {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, s) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return s === (r ? i ? Zo : di : i ? ai : ui).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
      const o = B(t);
      if (!r) {
        let c;
        if (o && (c = jo[n])) return c;
        if (n === "hasOwnProperty") return ko;
      }
      const l = Reflect.get(t, n, me(t) ? t : s);
      if ((_t(n) ? li.has(n) : Go(n)) || (r || pe(t, "get", n), i)) return l;
      if (me(l)) {
        const c = o && Ss(n) ? l : l.value;
        return r && oe(c) ? fs(c) : c;
      }
      return oe(l) ? r ? fs(l) : Fn(l) : l;
    }
  }
  class fi extends ci {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, s, r) {
      let i = t[n];
      const o = B(t) && Ss(n);
      if (!this._isShallow) {
        const d = it(i);
        if (!Ne(s) && !it(s) && (i = q(i), s = q(s)), !o && me(i) && !me(s)) return d || (i.value = s), true;
      }
      const l = o ? Number(n) < t.length : Y(t, n), c = Reflect.set(t, n, s, me(t) ? t : r);
      return t === q(r) && (l ? gt(s, i) && tt(t, "set", n, s) : tt(t, "add", n, s)), c;
    }
    deleteProperty(t, n) {
      const s = Y(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && s && tt(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const s = Reflect.has(t, n);
      return (!_t(n) || !li.has(n)) && pe(t, "has", n), s;
    }
    ownKeys(t) {
      return pe(t, "iterate", B(t) ? "length" : xt), Reflect.ownKeys(t);
    }
  }
  class Ko extends ci {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const Wo = new fi(), $o = new Ko(), qo = new fi(true);
  const cs = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
  function zo(e, t, n) {
    return function(...s) {
      const r = this.__v_raw, i = q(r), o = Ft(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = r[e](...s), f = n ? cs : t ? Vt : He;
      return !t && pe(i, "iterate", c ? ls : xt), {
        next() {
          const { value: a, done: p } = d.next();
          return p ? {
            value: a,
            done: p
          } : {
            value: l ? [
              f(a[0]),
              f(a[1])
            ] : f(a),
            done: p
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function pn(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Jo(e, t) {
    const n = {
      get(r) {
        const i = this.__v_raw, o = q(i), l = q(r);
        e || (gt(r, l) && pe(o, "get", r), pe(o, "get", l));
        const { has: c } = hn(o), d = t ? cs : e ? Vt : He;
        if (c.call(o, r)) return d(i.get(r));
        if (c.call(o, l)) return d(i.get(l));
        i !== o && i.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && pe(q(r), "iterate", xt), r.size;
      },
      has(r) {
        const i = this.__v_raw, o = q(i), l = q(r);
        return e || (gt(r, l) && pe(o, "has", r), pe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
      },
      forEach(r, i) {
        const o = this, l = o.__v_raw, c = q(l), d = t ? cs : e ? Vt : He;
        return !e && pe(c, "iterate", xt), l.forEach((f, a) => r.call(i, d(f), d(a), o));
      }
    };
    return de(n, e ? {
      add: pn("add"),
      set: pn("set"),
      delete: pn("delete"),
      clear: pn("clear")
    } : {
      add(r) {
        !t && !Ne(r) && !it(r) && (r = q(r));
        const i = q(this);
        return hn(i).has.call(i, r) || (i.add(r), tt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Ne(i) && !it(i) && (i = q(i));
        const o = q(this), { has: l, get: c } = hn(o);
        let d = l.call(o, r);
        d || (r = q(r), d = l.call(o, r));
        const f = c.call(o, r);
        return o.set(r, i), d ? gt(i, f) && tt(o, "set", r, i) : tt(o, "add", r, i), this;
      },
      delete(r) {
        const i = q(this), { has: o, get: l } = hn(i);
        let c = o.call(i, r);
        c || (r = q(r), c = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return c && tt(i, "delete", r, void 0), d;
      },
      clear() {
        const r = q(this), i = r.size !== 0, o = r.clear();
        return i && tt(r, "clear", void 0, void 0), o;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((r) => {
      n[r] = zo(r, e, t);
    }), n;
  }
  function Is(e, t) {
    const n = Jo(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(Y(n, r) && r in s ? n : s, r, i);
  }
  const Qo = {
    get: Is(false, false)
  }, Yo = {
    get: Is(false, true)
  }, Xo = {
    get: Is(true, false)
  };
  const ui = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap();
  function el(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function tl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : el(So(e));
  }
  function Fn(e) {
    return it(e) ? e : Ns(e, false, Wo, Qo, ui);
  }
  function hi(e) {
    return Ns(e, false, qo, Yo, ai);
  }
  function fs(e) {
    return Ns(e, true, $o, Xo, di);
  }
  function Ns(e, t, n, s, r) {
    if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = tl(e);
    if (i === 0) return e;
    const o = r.get(e);
    if (o) return o;
    const l = new Proxy(e, i === 2 ? s : n);
    return r.set(e, l), l;
  }
  function wt(e) {
    return it(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function it(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Ne(e) {
    return !!(e && e.__v_isShallow);
  }
  function Ls(e) {
    return e ? !!e.__v_raw : false;
  }
  function q(e) {
    const t = e && e.__v_raw;
    return t ? q(t) : e;
  }
  function nl(e) {
    return !Y(e, "__v_skip") && Object.isExtensible(e) && Jr(e, "__v_skip", true), e;
  }
  const He = (e) => oe(e) ? Fn(e) : e, Vt = (e) => oe(e) ? fs(e) : e;
  function me(e) {
    return e ? e.__v_isRef === true : false;
  }
  sl = function(e) {
    return pi(e, false);
  };
  function rl(e) {
    return pi(e, true);
  }
  function pi(e, t) {
    return me(e) ? e : new il(e, t);
  }
  class il {
    constructor(t, n) {
      this.dep = new Ps(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : q(t), this._value = n ? t : He(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, s = this.__v_isShallow || Ne(t) || it(t);
      t = s ? t : q(t), gt(t, n) && (this._rawValue = t, this._value = s ? t : He(t), this.dep.trigger());
    }
  }
  Tt = function(e) {
    return me(e) ? e.value : e;
  };
  const ol = {
    get: (e, t, n) => t === "__v_raw" ? e : Tt(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
      const r = e[t];
      return me(r) && !me(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
    }
  };
  function gi(e) {
    return wt(e) ? e : new Proxy(e, ol);
  }
  class ll {
    constructor(t, n, s) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && re !== this) return ti(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return ri(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function cl(e, t, n = false) {
    let s, r;
    return U(e) ? s = e : (s = e.get, r = e.set), new ll(s, r, n);
  }
  const gn = {}, An = /* @__PURE__ */ new WeakMap();
  let Ct;
  function fl(e, t = false, n = Ct) {
    if (n) {
      let s = An.get(n);
      s || An.set(n, s = []), s.push(e);
    }
  }
  function ul(e, t, n = ie) {
    const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, d = (N) => r ? N : Ne(N) || r === false || r === 0 ? pt(N, 1) : pt(N);
    let f, a, p, m, C = false, T = false;
    if (me(e) ? (a = () => e.value, C = Ne(e)) : wt(e) ? (a = () => d(e), C = true) : B(e) ? (T = true, C = e.some((N) => wt(N) || Ne(N)), a = () => e.map((N) => {
      if (me(N)) return N.value;
      if (wt(N)) return d(N);
      if (U(N)) return c ? c(N, 2) : N();
    })) : U(e) ? t ? a = c ? () => c(e, 2) : e : a = () => {
      if (p) {
        st();
        try {
          p();
        } finally {
          rt();
        }
      }
      const N = Ct;
      Ct = f;
      try {
        return c ? c(e, 3, [
          m
        ]) : e(m);
      } finally {
        Ct = N;
      }
    } : a = ze, t && r) {
      const N = a, k = r === true ? 1 / 0 : r;
      a = () => pt(N(), k);
    }
    const j = Ho(), L = () => {
      f.stop(), j && j.active && Cs(j.effects, f);
    };
    if (i && t) {
      const N = t;
      t = (...k) => {
        N(...k), L();
      };
    }
    let I = T ? new Array(e.length).fill(gn) : gn;
    const D = (N) => {
      if (!(!(f.flags & 1) || !f.dirty && !N)) if (t) {
        const k = f.run();
        if (r || C || (T ? k.some((te, Z) => gt(te, I[Z])) : gt(k, I))) {
          p && p();
          const te = Ct;
          Ct = f;
          try {
            const Z = [
              k,
              I === gn ? void 0 : T && I[0] === gn ? [] : I,
              m
            ];
            I = k, c ? c(t, 3, Z) : t(...Z);
          } finally {
            Ct = te;
          }
        }
      } else f.run();
    };
    return l && l(D), f = new Zr(a), f.scheduler = o ? () => o(D, false) : D, m = (N) => fl(N, false, f), p = f.onStop = () => {
      const N = An.get(f);
      if (N) {
        if (c) c(N, 4);
        else for (const k of N) k();
        An.delete(f);
      }
    }, t ? s ? D(true) : I = f.run() : o ? o(D.bind(null, true), true) : f.run(), L.pause = f.pause.bind(f), L.resume = f.resume.bind(f), L.stop = L, L;
  }
  function pt(e, t = 1 / 0, n) {
    if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, me(e)) pt(e.value, t, n);
    else if (B(e)) for (let s = 0; s < e.length; s++) pt(e[s], t, n);
    else if (Wr(e) || Ft(e)) e.forEach((s) => {
      pt(s, t, n);
    });
    else if (zr(e)) {
      for (const s in e) pt(e[s], t, n);
      for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && pt(e[s], t, n);
    }
    return e;
  }
  function an(e, t, n, s) {
    try {
      return s ? e(...s) : e();
    } catch (r) {
      Hn(r, t, n);
    }
  }
  function Be(e, t, n, s) {
    if (U(e)) {
      const r = an(e, t, n, s);
      return r && $r(r) && r.catch((i) => {
        Hn(i, t, n);
      }), r;
    }
    if (B(e)) {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(Be(e[i], t, n, s));
      return r;
    }
  }
  function Hn(e, t, n, s = true) {
    const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ie;
    if (t) {
      let l = t.parent;
      const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const f = l.ec;
        if (f) {
          for (let a = 0; a < f.length; a++) if (f[a](e, c, d) === false) return;
        }
        l = l.parent;
      }
      if (i) {
        st(), an(i, null, 10, [
          e,
          c,
          d
        ]), rt();
        return;
      }
    }
    al(e, n, r, s, o);
  }
  function al(e, t, n, s = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const ye = [];
  let We = -1;
  const Ht = [];
  let at = null, Lt = 0;
  const mi = Promise.resolve();
  let Cn = null;
  function _i(e) {
    const t = Cn || mi;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function dl(e) {
    let t = We + 1, n = ye.length;
    for (; t < n; ) {
      const s = t + n >>> 1, r = ye[s], i = rn(r);
      i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
    }
    return t;
  }
  function Ds(e) {
    if (!(e.flags & 1)) {
      const t = rn(e), n = ye[ye.length - 1];
      !n || !(e.flags & 2) && t >= rn(n) ? ye.push(e) : ye.splice(dl(t), 0, e), e.flags |= 1, vi();
    }
  }
  function vi() {
    Cn || (Cn = mi.then(bi));
  }
  function hl(e) {
    B(e) ? Ht.push(...e) : at && e.id === -1 ? at.splice(Lt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1), vi();
  }
  function Js(e, t, n = We + 1) {
    for (; n < ye.length; n++) {
      const s = ye[n];
      if (s && s.flags & 2) {
        if (e && s.id !== e.uid) continue;
        ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
      }
    }
  }
  function yi(e) {
    if (Ht.length) {
      const t = [
        ...new Set(Ht)
      ].sort((n, s) => rn(n) - rn(s));
      if (Ht.length = 0, at) {
        at.push(...t);
        return;
      }
      for (at = t, Lt = 0; Lt < at.length; Lt++) {
        const n = at[Lt];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      at = null, Lt = 0;
    }
  }
  const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function bi(e) {
    try {
      for (We = 0; We < ye.length; We++) {
        const t = ye[We];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), an(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; We < ye.length; We++) {
        const t = ye[We];
        t && (t.flags &= -2);
      }
      We = -1, ye.length = 0, yi(), Cn = null, (ye.length || Ht.length) && bi();
    }
  }
  let Me = null, Ei = null;
  function Sn(e) {
    const t = Me;
    return Me = e, Ei = e && e.type.__scopeId || null, t;
  }
  pl = function(e, t = Me, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
      s._d && wn(-1);
      const i = Sn(t);
      let o;
      try {
        o = e(...r);
      } finally {
        Sn(i), s._d && wn(1);
      }
      return o;
    };
    return s._n = true, s._c = true, s._d = true, s;
  };
  function yt(e, t, n, s) {
    const r = e.dirs, i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      i && (l.oldValue = i[o].value);
      let c = l.dir[s];
      c && (st(), Be(c, n, 8, [
        e.el,
        l,
        e,
        t
      ]), rt());
    }
  }
  const gl = Symbol("_vte"), Ai = (e) => e.__isTeleport, et = Symbol("_leaveCb"), mn = Symbol("_enterCb");
  function ml() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Pi(() => {
      e.isMounted = true;
    }), Ii(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Ie = [
    Function,
    Array
  ], Ci = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ie,
    onEnter: Ie,
    onAfterEnter: Ie,
    onEnterCancelled: Ie,
    onBeforeLeave: Ie,
    onLeave: Ie,
    onAfterLeave: Ie,
    onLeaveCancelled: Ie,
    onBeforeAppear: Ie,
    onAppear: Ie,
    onAfterAppear: Ie,
    onAppearCancelled: Ie
  }, Si = (e) => {
    const t = e.subTree;
    return t.component ? Si(t.component) : t;
  }, _l = {
    name: "BaseTransition",
    props: Ci,
    setup(e, { slots: t }) {
      const n = so(), s = ml();
      return () => {
        const r = t.default && wi(t.default(), true);
        if (!r || !r.length) return;
        const i = Ri(r), o = q(e), { mode: l } = o;
        if (s.isLeaving) return Jn(i);
        const c = Qs(i);
        if (!c) return Jn(i);
        let d = us(c, o, s, n, (a) => d = a);
        c.type !== be && on(c, d);
        let f = n.subTree && Qs(n.subTree);
        if (f && f.type !== be && !St(f, c) && Si(n).type !== be) {
          let a = us(f, o, s, n);
          if (on(f, a), l === "out-in" && c.type !== be) return s.isLeaving = true, a.afterLeave = () => {
            s.isLeaving = false, n.job.flags & 8 || n.update(), delete a.afterLeave, f = void 0;
          }, Jn(i);
          l === "in-out" && c.type !== be ? a.delayLeave = (p, m, C) => {
            const T = xi(s, f);
            T[String(f.key)] = f, p[et] = () => {
              m(), p[et] = void 0, delete d.delayedLeave, f = void 0;
            }, d.delayedLeave = () => {
              C(), delete d.delayedLeave, f = void 0;
            };
          } : f = void 0;
        } else f && (f = void 0);
        return i;
      };
    }
  };
  function Ri(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== be) {
        t = n;
        break;
      }
    }
    return t;
  }
  const vl = _l;
  function xi(e, t) {
    const { leavingVNodes: n } = e;
    let s = n.get(t.type);
    return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
  }
  function us(e, t, n, s, r) {
    const { appear: i, mode: o, persisted: l = false, onBeforeEnter: c, onEnter: d, onAfterEnter: f, onEnterCancelled: a, onBeforeLeave: p, onLeave: m, onAfterLeave: C, onLeaveCancelled: T, onBeforeAppear: j, onAppear: L, onAfterAppear: I, onAppearCancelled: D } = t, N = String(e.key), k = xi(n, e), te = (G, $) => {
      G && Be(G, s, 9, $);
    }, Z = (G, $) => {
      const ne = $[1];
      te(G, $), B(G) ? G.every((O) => O.length <= 1) && ne() : G.length <= 1 && ne();
    }, he = {
      mode: o,
      persisted: l,
      beforeEnter(G) {
        let $ = c;
        if (!n.isMounted) if (i) $ = j || c;
        else return;
        G[et] && G[et](true);
        const ne = k[N];
        ne && St(e, ne) && ne.el[et] && ne.el[et](), te($, [
          G
        ]);
      },
      enter(G) {
        let $ = d, ne = f, O = a;
        if (!n.isMounted) if (i) $ = L || d, ne = I || f, O = D || a;
        else return;
        let z = false;
        const ae = G[mn] = (xe) => {
          z || (z = true, xe ? te(O, [
            G
          ]) : te(ne, [
            G
          ]), he.delayedLeave && he.delayedLeave(), G[mn] = void 0);
        };
        $ ? Z($, [
          G,
          ae
        ]) : ae();
      },
      leave(G, $) {
        const ne = String(e.key);
        if (G[mn] && G[mn](true), n.isUnmounting) return $();
        te(p, [
          G
        ]);
        let O = false;
        const z = G[et] = (ae) => {
          O || (O = true, $(), ae ? te(T, [
            G
          ]) : te(C, [
            G
          ]), G[et] = void 0, k[ne] === e && delete k[ne]);
        };
        k[ne] = e, m ? Z(m, [
          G,
          z
        ]) : z();
      },
      clone(G) {
        const $ = us(G, t, n, s, r);
        return r && r($), $;
      }
    };
    return he;
  }
  function Jn(e) {
    if (Bn(e)) return e = mt(e), e.children = null, e;
  }
  function Qs(e) {
    if (!Bn(e)) return Ai(e.type) && e.children ? Ri(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && U(n.default)) return n.default();
    }
  }
  function on(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, on(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function wi(e, t = false, n) {
    let s = [], r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
      o.type === $e ? (o.patchFlag & 128 && r++, s = s.concat(wi(o.children, t, l))) : (t || o.type !== be) && s.push(l != null ? mt(o, {
        key: l
      }) : o);
    }
    if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s;
  }
  Ms = function(e, t) {
    return U(e) ? de({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Ti(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  const Rn = /* @__PURE__ */ new WeakMap();
  function Yt(e, t, n, s, r = false) {
    if (B(e)) {
      e.forEach((C, T) => Yt(C, t && (B(t) ? t[T] : t), n, s, r));
      return;
    }
    if (Xt(s) && !r) {
      s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Yt(e, t, n, s.component.subTree);
      return;
    }
    const i = s.shapeFlag & 4 ? Vs(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, d = t && t.r, f = l.refs === ie ? l.refs = {} : l.refs, a = l.setupState, p = q(a), m = a === ie ? Kr : (C) => Y(p, C);
    if (d != null && d !== c) {
      if (Ys(t), ce(d)) f[d] = null, m(d) && (a[d] = null);
      else if (me(d)) {
        d.value = null;
        const C = t;
        C.k && (f[C.k] = null);
      }
    }
    if (U(c)) an(c, l, 12, [
      o,
      f
    ]);
    else {
      const C = ce(c), T = me(c);
      if (C || T) {
        const j = () => {
          if (e.f) {
            const L = C ? m(c) ? a[c] : f[c] : c.value;
            if (r) B(L) && Cs(L, i);
            else if (B(L)) L.includes(i) || L.push(i);
            else if (C) f[c] = [
              i
            ], m(c) && (a[c] = f[c]);
            else {
              const I = [
                i
              ];
              c.value = I, e.k && (f[e.k] = I);
            }
          } else C ? (f[c] = o, m(c) && (a[c] = o)) : T && (c.value = o, e.k && (f[e.k] = o));
        };
        if (o) {
          const L = () => {
            j(), Rn.delete(e);
          };
          L.id = -1, Rn.set(e, L), Te(L, n);
        } else Ys(e), j();
      }
    }
  }
  function Ys(e) {
    const t = Rn.get(e);
    t && (t.flags |= 8, Rn.delete(e));
  }
  Dn().requestIdleCallback;
  Dn().cancelIdleCallback;
  const Xt = (e) => !!e.type.__asyncLoader, Bn = (e) => e.type.__isKeepAlive;
  function yl(e, t) {
    Oi(e, "a", t);
  }
  function bl(e, t) {
    Oi(e, "da", t);
  }
  function Oi(e, t, n = ge) {
    const s = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (Vn(t, s, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Bn(r.parent.vnode) && El(s, t, n, r), r = r.parent;
    }
  }
  function El(e, t, n, s) {
    const r = Vn(t, e, s, true);
    Ni(() => {
      Cs(s[t], r);
    }, n);
  }
  function Vn(e, t, n = ge, s = false) {
    if (n) {
      const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
        st();
        const l = dn(n), c = Be(t, n, e, o);
        return l(), rt(), c;
      });
      return s ? r.unshift(i) : r.push(i), i;
    }
  }
  let ot, Al, Cl, Sl, Ii, Ni, Rl, xl, wl;
  ot = (e) => (t, n = ge) => {
    (!cn || e === "sp") && Vn(e, (...s) => t(...s), n);
  };
  Al = ot("bm");
  Pi = ot("m");
  Cl = ot("bu");
  Sl = ot("u");
  Ii = ot("bum");
  Ni = ot("um");
  Rl = ot("sp");
  xl = ot("rtg");
  wl = ot("rtc");
  function Tl(e, t = ge) {
    Vn("ec", e, t);
  }
  const Li = "components";
  fu = function(e, t) {
    return Mi(Li, e, true, t) || e;
  };
  const Di = Symbol.for("v-ndc");
  uu = function(e) {
    return ce(e) ? Mi(Li, e, false) || e : e || Di;
  };
  function Mi(e, t, n = true, s = false) {
    const r = Me || ge;
    if (r) {
      const i = r.type;
      {
        const l = vc(i, false);
        if (l && (l === t || l === Le(t) || l === Ln(Le(t)))) return i;
      }
      const o = Xs(r[e] || i[e], t) || Xs(r.appContext[e], t);
      return !o && s ? i : o;
    }
  }
  function Xs(e, t) {
    return e && (e[t] || e[Le(t)] || e[Ln(Le(t))]);
  }
  au = function(e, t, n, s) {
    let r;
    const i = n, o = B(e);
    if (o || ce(e)) {
      const l = o && wt(e);
      let c = false, d = false;
      l && (c = !Ne(e), d = it(e), e = Mn(e)), r = new Array(e.length);
      for (let f = 0, a = e.length; f < a; f++) r[f] = t(c ? d ? Vt(He(e[f])) : He(e[f]) : e[f], f, void 0, i);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
    } else if (oe(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const f = l[c];
        r[c] = t(e[f], f, c, i);
      }
    }
    else r = [];
    return r;
  };
  const as = (e) => e ? ro(e) ? Vs(e) : as(e.parent) : null, Zt = de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => as(e.parent),
    $root: (e) => as(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _i.bind(e.proxy)),
    $watch: (e) => Vl.bind(e)
  }), Qn = (e, t) => e !== ie && !e.__isScriptSetup && Y(e, t), Ol = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
      if (t[0] !== "$") {
        const p = o[t];
        if (p !== void 0) switch (p) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
        else {
          if (Qn(s, t)) return o[t] = 1, s[t];
          if (r !== ie && Y(r, t)) return o[t] = 2, r[t];
          if (Y(i, t)) return o[t] = 3, i[t];
          if (n !== ie && Y(n, t)) return o[t] = 4, n[t];
          ds && (o[t] = 0);
        }
      }
      const d = Zt[t];
      let f, a;
      if (d) return t === "$attrs" && pe(e.attrs, "get", ""), d(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== ie && Y(n, t)) return o[t] = 4, n[t];
      if (a = c.config.globalProperties, Y(a, t)) return a[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return Qn(r, t) ? (r[t] = n, true) : s !== ie && Y(s, t) ? (s[t] = n, true) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } }, l) {
      let c;
      return !!(n[l] || e !== ie && l[0] !== "$" && Y(e, l) || Qn(t, l) || Y(i, l) || Y(s, l) || Y(Zt, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Zs(e) {
    return B(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  let ds = true;
  function Pl(e) {
    const t = Hi(e), n = e.proxy, s = e.ctx;
    ds = false, t.beforeCreate && er(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: o, watch: l, provide: c, inject: d, created: f, beforeMount: a, mounted: p, beforeUpdate: m, updated: C, activated: T, deactivated: j, beforeDestroy: L, beforeUnmount: I, destroyed: D, unmounted: N, render: k, renderTracked: te, renderTriggered: Z, errorCaptured: he, serverPrefetch: G, expose: $, inheritAttrs: ne, components: O, directives: z, filters: ae } = t;
    if (d && Il(d, s, null), o) for (const ee in o) {
      const J = o[ee];
      U(J) && (s[ee] = J.bind(n));
    }
    if (r) {
      const ee = r.call(n, n);
      oe(ee) && (e.data = Fn(ee));
    }
    if (ds = true, i) for (const ee in i) {
      const J = i[ee], Je = U(J) ? J.bind(n, n) : U(J.get) ? J.get.bind(n, n) : ze, lt = !U(J) && U(J.set) ? J.set.bind(n) : ze, je = De({
        get: Je,
        set: lt
      });
      Object.defineProperty(s, ee, {
        enumerable: true,
        configurable: true,
        get: () => je.value,
        set: (Ae) => je.value = Ae
      });
    }
    if (l) for (const ee in l) Fi(l[ee], s, n, ee);
    if (c) {
      const ee = U(c) ? c.call(n) : c;
      Reflect.ownKeys(ee).forEach((J) => {
        _n(J, ee[J]);
      });
    }
    f && er(f, e, "c");
    function fe(ee, J) {
      B(J) ? J.forEach((Je) => ee(Je.bind(n))) : J && ee(J.bind(n));
    }
    if (fe(Al, a), fe(Pi, p), fe(Cl, m), fe(Sl, C), fe(yl, T), fe(bl, j), fe(Tl, he), fe(wl, te), fe(xl, Z), fe(Ii, I), fe(Ni, N), fe(Rl, G), B($)) if ($.length) {
      const ee = e.exposed || (e.exposed = {});
      $.forEach((J) => {
        Object.defineProperty(ee, J, {
          get: () => n[J],
          set: (Je) => n[J] = Je,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    k && e.render === ze && (e.render = k), ne != null && (e.inheritAttrs = ne), O && (e.components = O), z && (e.directives = z), G && Ti(e);
  }
  function Il(e, t, n = ze) {
    B(e) && (e = hs(e));
    for (const s in e) {
      const r = e[s];
      let i;
      oe(r) ? "default" in r ? i = nt(r.from || s, r.default, true) : i = nt(r.from || s) : i = nt(r), me(i) ? Object.defineProperty(t, s, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (o) => i.value = o
      }) : t[s] = i;
    }
  }
  function er(e, t, n) {
    Be(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Fi(e, t, n, s) {
    let r = s.includes(".") ? ji(n, s) : () => n[s];
    if (ce(e)) {
      const i = t[e];
      U(i) && vn(r, i);
    } else if (U(e)) vn(r, e.bind(n));
    else if (oe(e)) if (B(e)) e.forEach((i) => Fi(i, t, n, s));
    else {
      const i = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(i) && vn(r, i, e);
    }
  }
  function Hi(e) {
    const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, l = i.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((d) => xn(c, d, o, true)), xn(c, t, o)), oe(t) && i.set(t, c), c;
  }
  function xn(e, t, n, s = false) {
    const { mixins: r, extends: i } = t;
    i && xn(e, i, n, true), r && r.forEach((o) => xn(e, o, n, true));
    for (const o in t) if (!(s && o === "expose")) {
      const l = Nl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
    return e;
  }
  const Nl = {
    data: tr,
    props: nr,
    emits: nr,
    methods: qt,
    computed: qt,
    beforeCreate: _e,
    created: _e,
    beforeMount: _e,
    mounted: _e,
    beforeUpdate: _e,
    updated: _e,
    beforeDestroy: _e,
    beforeUnmount: _e,
    destroyed: _e,
    unmounted: _e,
    activated: _e,
    deactivated: _e,
    errorCaptured: _e,
    serverPrefetch: _e,
    components: qt,
    directives: qt,
    watch: Dl,
    provide: tr,
    inject: Ll
  };
  function tr(e, t) {
    return t ? e ? function() {
      return de(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Ll(e, t) {
    return qt(hs(e), hs(t));
  }
  function hs(e) {
    if (B(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function _e(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function qt(e, t) {
    return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function nr(e, t) {
    return e ? B(e) && B(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : de(/* @__PURE__ */ Object.create(null), Zs(e), Zs(t ?? {})) : t;
  }
  function Dl(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = de(/* @__PURE__ */ Object.create(null), e);
    for (const s in t) n[s] = _e(e[s], t[s]);
    return n;
  }
  function Bi() {
    return {
      app: null,
      config: {
        isNativeTag: Kr,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let Ml = 0;
  function Fl(e, t) {
    return function(s, r = null) {
      U(s) || (s = de({}, s)), r != null && !oe(r) && (r = null);
      const i = Bi(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let c = false;
      const d = i.app = {
        _uid: Ml++,
        _component: s,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: bc,
        get config() {
          return i.config;
        },
        set config(f) {
        },
        use(f, ...a) {
          return o.has(f) || (f && U(f.install) ? (o.add(f), f.install(d, ...a)) : U(f) && (o.add(f), f(d, ...a))), d;
        },
        mixin(f) {
          return i.mixins.includes(f) || i.mixins.push(f), d;
        },
        component(f, a) {
          return a ? (i.components[f] = a, d) : i.components[f];
        },
        directive(f, a) {
          return a ? (i.directives[f] = a, d) : i.directives[f];
        },
        mount(f, a, p) {
          if (!c) {
            const m = d._ceVNode || Ee(s, r);
            return m.appContext = i, p === true ? p = "svg" : p === false && (p = void 0), e(m, f, p), c = true, d._container = f, f.__vue_app__ = d, Vs(m.component);
          }
        },
        onUnmount(f) {
          l.push(f);
        },
        unmount() {
          c && (Be(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
        },
        provide(f, a) {
          return i.provides[f] = a, d;
        },
        runWithContext(f) {
          const a = Bt;
          Bt = d;
          try {
            return f();
          } finally {
            Bt = a;
          }
        }
      };
      return d;
    };
  }
  let Bt = null;
  function _n(e, t) {
    if (ge) {
      let n = ge.provides;
      const s = ge.parent && ge.parent.provides;
      s === n && (n = ge.provides = Object.create(s)), n[e] = t;
    }
  }
  function nt(e, t, n = false) {
    const s = so();
    if (s || Bt) {
      let r = Bt ? Bt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return n && U(t) ? t.call(s && s.proxy) : t;
    }
  }
  const Hl = Symbol.for("v-scx"), Bl = () => nt(Hl);
  function vn(e, t, n) {
    return Vi(e, t, n);
  }
  function Vi(e, t, n = ie) {
    const { immediate: s, deep: r, flush: i, once: o } = n, l = de({}, n), c = t && s || !t && i !== "post";
    let d;
    if (cn) {
      if (i === "sync") {
        const m = Bl();
        d = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!c) {
        const m = () => {
        };
        return m.stop = ze, m.resume = ze, m.pause = ze, m;
      }
    }
    const f = ge;
    l.call = (m, C, T) => Be(m, f, C, T);
    let a = false;
    i === "post" ? l.scheduler = (m) => {
      Te(m, f && f.suspense);
    } : i !== "sync" && (a = true, l.scheduler = (m, C) => {
      C ? m() : Ds(m);
    }), l.augmentJob = (m) => {
      t && (m.flags |= 4), a && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
    };
    const p = ul(e, t, l);
    return cn && (d ? d.push(p) : c && p()), p;
  }
  function Vl(e, t, n) {
    const s = this.proxy, r = ce(e) ? e.includes(".") ? ji(s, e) : () => s[e] : e.bind(s, s);
    let i;
    U(t) ? i = t : (i = t.handler, n = t);
    const o = dn(this), l = Vi(r, i.bind(s), n);
    return o(), l;
  }
  function ji(e, t) {
    const n = t.split(".");
    return () => {
      let s = e;
      for (let r = 0; r < n.length && s; r++) s = s[n[r]];
      return s;
    };
  }
  const jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];
  function Ul(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || ie;
    let r = n;
    const i = t.startsWith("update:"), o = i && jl(s, t.slice(7));
    o && (o.trim && (r = n.map((f) => ce(f) ? f.trim() : f)), o.number && (r = n.map(wo)));
    let l, c = s[l = kn(t)] || s[l = kn(Le(t))];
    !c && i && (c = s[l = kn(Ot(t))]), c && Be(c, e, 6, r);
    const d = s[l + "Once"];
    if (d) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, Be(d, e, 6, r);
    }
  }
  const Gl = /* @__PURE__ */ new WeakMap();
  function Ui(e, t, n = false) {
    const s = n ? Gl : t.emitsCache, r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {}, l = false;
    if (!U(e)) {
      const c = (d) => {
        const f = Ui(d, t, true);
        f && (l = true, de(o, f));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !i && !l ? (oe(e) && s.set(e, null), null) : (B(i) ? i.forEach((c) => o[c] = null) : de(o, i), oe(e) && s.set(e, o), o);
  }
  function jn(e, t) {
    return !e || !Pn(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Ot(t)) || Y(e, t));
  }
  function sr(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: c, render: d, renderCache: f, props: a, data: p, setupState: m, ctx: C, inheritAttrs: T } = e, j = Sn(e);
    let L, I;
    try {
      if (n.shapeFlag & 4) {
        const N = r || s, k = N;
        L = qe(d.call(k, N, f, a, m, p, C)), I = l;
      } else {
        const N = t;
        L = qe(N.length > 1 ? N(a, {
          attrs: l,
          slots: o,
          emit: c
        }) : N(a, null)), I = t.props ? l : kl(l);
      }
    } catch (N) {
      en.length = 0, Hn(N, e, 1), L = Ee(be);
    }
    let D = L;
    if (I && T !== false) {
      const N = Object.keys(I), { shapeFlag: k } = D;
      N.length && k & 7 && (i && N.some(As) && (I = Kl(I, i)), D = mt(D, I, false, true));
    }
    return n.dirs && (D = mt(D, null, false, true), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && on(D, n.transition), L = D, Sn(j), L;
  }
  const kl = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Pn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Kl = (e, t) => {
    const n = {};
    for (const s in e) (!As(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
  function Wl(e, t, n) {
    const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, d = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return s ? rr(s, o, d) : !!o;
      if (c & 8) {
        const f = t.dynamicProps;
        for (let a = 0; a < f.length; a++) {
          const p = f[a];
          if (o[p] !== s[p] && !jn(d, p)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : s === o ? false : s ? o ? rr(s, o, d) : true : !!o;
    return false;
  }
  function rr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return true;
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      if (t[i] !== e[i] && !jn(n, i)) return true;
    }
    return false;
  }
  function $l({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const s = t.subTree;
      if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Gi = {}, ki = () => Object.create(Gi), Ki = (e) => Object.getPrototypeOf(e) === Gi;
  function ql(e, t, n, s = false) {
    const r = {}, i = ki();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Wi(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : hi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
  }
  function zl(e, t, n, s) {
    const { props: r, attrs: i, vnode: { patchFlag: o } } = e, l = q(r), [c] = e.propsOptions;
    let d = false;
    if ((s || o > 0) && !(o & 16)) {
      if (o & 8) {
        const f = e.vnode.dynamicProps;
        for (let a = 0; a < f.length; a++) {
          let p = f[a];
          if (jn(e.emitsOptions, p)) continue;
          const m = t[p];
          if (c) if (Y(i, p)) m !== i[p] && (i[p] = m, d = true);
          else {
            const C = Le(p);
            r[C] = ps(c, l, C, m, e, false);
          }
          else m !== i[p] && (i[p] = m, d = true);
        }
      }
    } else {
      Wi(e, t, r, i) && (d = true);
      let f;
      for (const a in l) (!t || !Y(t, a) && ((f = Ot(a)) === a || !Y(t, f))) && (c ? n && (n[a] !== void 0 || n[f] !== void 0) && (r[a] = ps(c, l, a, void 0, e, true)) : delete r[a]);
      if (i !== l) for (const a in i) (!t || !Y(t, a)) && (delete i[a], d = true);
    }
    d && tt(e.attrs, "set", "");
  }
  function Wi(e, t, n, s) {
    const [r, i] = e.propsOptions;
    let o = false, l;
    if (t) for (let c in t) {
      if (zt(c)) continue;
      const d = t[c];
      let f;
      r && Y(r, f = Le(c)) ? !i || !i.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : jn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, o = true);
    }
    if (i) {
      const c = q(n), d = l || ie;
      for (let f = 0; f < i.length; f++) {
        const a = i[f];
        n[a] = ps(r, c, a, d[a], e, !Y(d, a));
      }
    }
    return o;
  }
  function ps(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
      const l = Y(o, "default");
      if (l && s === void 0) {
        const c = o.default;
        if (o.type !== Function && !o.skipFactory && U(c)) {
          const { propsDefaults: d } = r;
          if (n in d) s = d[n];
          else {
            const f = dn(r);
            s = d[n] = c.call(null, t), f();
          }
        } else s = c;
        r.ce && r.ce._setProp(n, s);
      }
      o[0] && (i && !l ? s = false : o[1] && (s === "" || s === Ot(n)) && (s = true));
    }
    return s;
  }
  const Jl = /* @__PURE__ */ new WeakMap();
  function $i(e, t, n = false) {
    const s = n ? Jl : t.propsCache, r = s.get(e);
    if (r) return r;
    const i = e.props, o = {}, l = [];
    let c = false;
    if (!U(e)) {
      const f = (a) => {
        c = true;
        const [p, m] = $i(a, t, true);
        de(o, p), m && l.push(...m);
      };
      !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
    }
    if (!i && !c) return oe(e) && s.set(e, Mt), Mt;
    if (B(i)) for (let f = 0; f < i.length; f++) {
      const a = Le(i[f]);
      ir(a) && (o[a] = ie);
    }
    else if (i) for (const f in i) {
      const a = Le(f);
      if (ir(a)) {
        const p = i[f], m = o[a] = B(p) || U(p) ? {
          type: p
        } : de({}, p), C = m.type;
        let T = false, j = true;
        if (B(C)) for (let L = 0; L < C.length; ++L) {
          const I = C[L], D = U(I) && I.name;
          if (D === "Boolean") {
            T = true;
            break;
          } else D === "String" && (j = false);
        }
        else T = U(C) && C.name === "Boolean";
        m[0] = T, m[1] = j, (T || Y(m, "default")) && l.push(a);
      }
    }
    const d = [
      o,
      l
    ];
    return oe(e) && s.set(e, d), d;
  }
  function ir(e) {
    return e[0] !== "$" && !zt(e);
  }
  const Fs = (e) => e === "_" || e === "_ctx" || e === "$stable", Hs = (e) => B(e) ? e.map(qe) : [
    qe(e)
  ], Ql = (e, t, n) => {
    if (t._n) return t;
    const s = pl((...r) => Hs(t(...r)), n);
    return s._c = false, s;
  }, qi = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Fs(r)) continue;
      const i = e[r];
      if (U(i)) t[r] = Ql(r, i, s);
      else if (i != null) {
        const o = Hs(i);
        t[r] = () => o;
      }
    }
  }, zi = (e, t) => {
    const n = Hs(t);
    e.slots.default = () => n;
  }, Ji = (e, t, n) => {
    for (const s in t) (n || !Fs(s)) && (e[s] = t[s]);
  }, Yl = (e, t, n) => {
    const s = e.slots = ki();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Ji(s, t, n), n && Jr(s, "_", r, true)) : qi(t, s);
    } else t && zi(e, t);
  }, Xl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = true, o = ie;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? i = false : Ji(r, t, n) : (i = !t.$stable, qi(t, r)), o = t;
    } else t && (zi(e, t), o = {
      default: 1
    });
    if (i) for (const l in r) !Fs(l) && o[l] == null && delete r[l];
  }, Te = sc;
  function Zl(e) {
    return ec(e);
  }
  function ec(e, t) {
    const n = Dn();
    n.__VUE__ = true;
    const { insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: c, setText: d, setElementText: f, parentNode: a, nextSibling: p, setScopeId: m = ze, insertStaticContent: C } = e, T = (u, h, g, v = null, b = null, _ = null, R = void 0, S = null, A = !!h.dynamicChildren) => {
      if (u === h) return;
      u && !St(u, h) && (v = y(u), Ae(u, b, _, true), u = null), h.patchFlag === -2 && (A = false, h.dynamicChildren = null);
      const { type: E, ref: H, shapeFlag: w } = h;
      switch (E) {
        case Un:
          j(u, h, g, v);
          break;
        case be:
          L(u, h, g, v);
          break;
        case yn:
          u == null && I(h, g, v, R);
          break;
        case $e:
          O(u, h, g, v, b, _, R, S, A);
          break;
        default:
          w & 1 ? k(u, h, g, v, b, _, R, S, A) : w & 6 ? z(u, h, g, v, b, _, R, S, A) : (w & 64 || w & 128) && E.process(u, h, g, v, b, _, R, S, A, M);
      }
      H != null && b ? Yt(H, u && u.ref, _, h || u, !h) : H == null && u && u.ref != null && Yt(u.ref, null, _, u, true);
    }, j = (u, h, g, v) => {
      if (u == null) s(h.el = l(h.children), g, v);
      else {
        const b = h.el = u.el;
        h.children !== u.children && d(b, h.children);
      }
    }, L = (u, h, g, v) => {
      u == null ? s(h.el = c(h.children || ""), g, v) : h.el = u.el;
    }, I = (u, h, g, v) => {
      [u.el, u.anchor] = C(u.children, h, g, v, u.el, u.anchor);
    }, D = ({ el: u, anchor: h }, g, v) => {
      let b;
      for (; u && u !== h; ) b = p(u), s(u, g, v), u = b;
      s(h, g, v);
    }, N = ({ el: u, anchor: h }) => {
      let g;
      for (; u && u !== h; ) g = p(u), r(u), u = g;
      r(h);
    }, k = (u, h, g, v, b, _, R, S, A) => {
      if (h.type === "svg" ? R = "svg" : h.type === "math" && (R = "mathml"), u == null) te(h, g, v, b, _, R, S, A);
      else {
        const E = u.el && u.el._isVueCE ? u.el : null;
        try {
          E && E._beginPatch(), G(u, h, b, _, R, S, A);
        } finally {
          E && E._endPatch();
        }
      }
    }, te = (u, h, g, v, b, _, R, S) => {
      let A, E;
      const { props: H, shapeFlag: w, transition: F, dirs: V } = u;
      if (A = u.el = o(u.type, _, H && H.is, H), w & 8 ? f(A, u.children) : w & 16 && he(u.children, A, null, v, b, Yn(u, _), R, S), V && yt(u, null, v, "created"), Z(A, u, u.scopeId, R, v), H) {
        for (const se in H) se !== "value" && !zt(se) && i(A, se, null, H[se], _, v);
        "value" in H && i(A, "value", null, H.value, _), (E = H.onVnodeBeforeMount) && Ke(E, v, u);
      }
      V && yt(u, null, v, "beforeMount");
      const W = tc(b, F);
      W && F.beforeEnter(A), s(A, h, g), ((E = H && H.onVnodeMounted) || W || V) && Te(() => {
        E && Ke(E, v, u), W && F.enter(A), V && yt(u, null, v, "mounted");
      }, b);
    }, Z = (u, h, g, v, b) => {
      if (g && m(u, g), v) for (let _ = 0; _ < v.length; _++) m(u, v[_]);
      if (b) {
        let _ = b.subTree;
        if (h === _ || Xi(_.type) && (_.ssContent === h || _.ssFallback === h)) {
          const R = b.vnode;
          Z(u, R, R.scopeId, R.slotScopeIds, b.parent);
        }
      }
    }, he = (u, h, g, v, b, _, R, S, A = 0) => {
      for (let E = A; E < u.length; E++) {
        const H = u[E] = S ? dt(u[E]) : qe(u[E]);
        T(null, H, h, g, v, b, _, R, S);
      }
    }, G = (u, h, g, v, b, _, R) => {
      const S = h.el = u.el;
      let { patchFlag: A, dynamicChildren: E, dirs: H } = h;
      A |= u.patchFlag & 16;
      const w = u.props || ie, F = h.props || ie;
      let V;
      if (g && bt(g, false), (V = F.onVnodeBeforeUpdate) && Ke(V, g, h, u), H && yt(h, u, g, "beforeUpdate"), g && bt(g, true), (w.innerHTML && F.innerHTML == null || w.textContent && F.textContent == null) && f(S, ""), E ? $(u.dynamicChildren, E, S, g, v, Yn(h, b), _) : R || J(u, h, S, null, g, v, Yn(h, b), _, false), A > 0) {
        if (A & 16) ne(S, w, F, g, b);
        else if (A & 2 && w.class !== F.class && i(S, "class", null, F.class, b), A & 4 && i(S, "style", w.style, F.style, b), A & 8) {
          const W = h.dynamicProps;
          for (let se = 0; se < W.length; se++) {
            const X = W[se], Ce = w[X], Se = F[X];
            (Se !== Ce || X === "value") && i(S, X, Ce, Se, b, g);
          }
        }
        A & 1 && u.children !== h.children && f(S, h.children);
      } else !R && E == null && ne(S, w, F, g, b);
      ((V = F.onVnodeUpdated) || H) && Te(() => {
        V && Ke(V, g, h, u), H && yt(h, u, g, "updated");
      }, v);
    }, $ = (u, h, g, v, b, _, R) => {
      for (let S = 0; S < h.length; S++) {
        const A = u[S], E = h[S], H = A.el && (A.type === $e || !St(A, E) || A.shapeFlag & 198) ? a(A.el) : g;
        T(A, E, H, null, v, b, _, R, true);
      }
    }, ne = (u, h, g, v, b) => {
      if (h !== g) {
        if (h !== ie) for (const _ in h) !zt(_) && !(_ in g) && i(u, _, h[_], null, b, v);
        for (const _ in g) {
          if (zt(_)) continue;
          const R = g[_], S = h[_];
          R !== S && _ !== "value" && i(u, _, S, R, b, v);
        }
        "value" in g && i(u, "value", h.value, g.value, b);
      }
    }, O = (u, h, g, v, b, _, R, S, A) => {
      const E = h.el = u ? u.el : l(""), H = h.anchor = u ? u.anchor : l("");
      let { patchFlag: w, dynamicChildren: F, slotScopeIds: V } = h;
      V && (S = S ? S.concat(V) : V), u == null ? (s(E, g, v), s(H, g, v), he(h.children || [], g, H, b, _, R, S, A)) : w > 0 && w & 64 && F && u.dynamicChildren ? ($(u.dynamicChildren, F, g, b, _, R, S), (h.key != null || b && h === b.subTree) && Qi(u, h, true)) : J(u, h, g, H, b, _, R, S, A);
    }, z = (u, h, g, v, b, _, R, S, A) => {
      h.slotScopeIds = S, u == null ? h.shapeFlag & 512 ? b.ctx.activate(h, g, v, R, A) : ae(h, g, v, b, _, R, A) : xe(u, h, A);
    }, ae = (u, h, g, v, b, _, R) => {
      const S = u.component = hc(u, v, b);
      if (Bn(u) && (S.ctx.renderer = M), pc(S, false, R), S.asyncDep) {
        if (b && b.registerDep(S, fe, R), !u.el) {
          const A = S.subTree = Ee(be);
          L(null, A, h, g), u.placeholder = A.el;
        }
      } else fe(S, u, h, g, b, _, R);
    }, xe = (u, h, g) => {
      const v = h.component = u.component;
      if (Wl(u, h, g)) if (v.asyncDep && !v.asyncResolved) {
        ee(v, h, g);
        return;
      } else v.next = h, v.update();
      else h.el = u.el, v.vnode = h;
    }, fe = (u, h, g, v, b, _, R) => {
      const S = () => {
        if (u.isMounted) {
          let { next: w, bu: F, u: V, parent: W, vnode: se } = u;
          {
            const Ge = Yi(u);
            if (Ge) {
              w && (w.el = se.el, ee(u, w, R)), Ge.asyncDep.then(() => {
                u.isUnmounted || S();
              });
              return;
            }
          }
          let X = w, Ce;
          bt(u, false), w ? (w.el = se.el, ee(u, w, R)) : w = se, F && Kn(F), (Ce = w.props && w.props.onVnodeBeforeUpdate) && Ke(Ce, W, w, se), bt(u, true);
          const Se = sr(u), Ue = u.subTree;
          u.subTree = Se, T(Ue, Se, a(Ue.el), y(Ue), u, b, _), w.el = Se.el, X === null && $l(u, Se.el), V && Te(V, b), (Ce = w.props && w.props.onVnodeUpdated) && Te(() => Ke(Ce, W, w, se), b);
        } else {
          let w;
          const { el: F, props: V } = h, { bm: W, m: se, parent: X, root: Ce, type: Se } = u, Ue = Xt(h);
          bt(u, false), W && Kn(W), !Ue && (w = V && V.onVnodeBeforeMount) && Ke(w, X, h), bt(u, true);
          {
            Ce.ce && Ce.ce._def.shadowRoot !== false && Ce.ce._injectChildStyle(Se);
            const Ge = u.subTree = sr(u);
            T(null, Ge, g, v, u, b, _), h.el = Ge.el;
          }
          if (se && Te(se, b), !Ue && (w = V && V.onVnodeMounted)) {
            const Ge = h;
            Te(() => Ke(w, X, Ge), b);
          }
          (h.shapeFlag & 256 || X && Xt(X.vnode) && X.vnode.shapeFlag & 256) && u.a && Te(u.a, b), u.isMounted = true, h = g = v = null;
        }
      };
      u.scope.on();
      const A = u.effect = new Zr(S);
      u.scope.off();
      const E = u.update = A.run.bind(A), H = u.job = A.runIfDirty.bind(A);
      H.i = u, H.id = u.uid, A.scheduler = () => Ds(H), bt(u, true), E();
    }, ee = (u, h, g) => {
      h.component = u;
      const v = u.vnode.props;
      u.vnode = h, u.next = null, zl(u, h.props, v, g), Xl(u, h.children, g), st(), Js(u), rt();
    }, J = (u, h, g, v, b, _, R, S, A = false) => {
      const E = u && u.children, H = u ? u.shapeFlag : 0, w = h.children, { patchFlag: F, shapeFlag: V } = h;
      if (F > 0) {
        if (F & 128) {
          lt(E, w, g, v, b, _, R, S, A);
          return;
        } else if (F & 256) {
          Je(E, w, g, v, b, _, R, S, A);
          return;
        }
      }
      V & 8 ? (H & 16 && Pe(E, b, _), w !== E && f(g, w)) : H & 16 ? V & 16 ? lt(E, w, g, v, b, _, R, S, A) : Pe(E, b, _, true) : (H & 8 && f(g, ""), V & 16 && he(w, g, v, b, _, R, S, A));
    }, Je = (u, h, g, v, b, _, R, S, A) => {
      u = u || Mt, h = h || Mt;
      const E = u.length, H = h.length, w = Math.min(E, H);
      let F;
      for (F = 0; F < w; F++) {
        const V = h[F] = A ? dt(h[F]) : qe(h[F]);
        T(u[F], V, g, null, b, _, R, S, A);
      }
      E > H ? Pe(u, b, _, true, false, w) : he(h, g, v, b, _, R, S, A, w);
    }, lt = (u, h, g, v, b, _, R, S, A) => {
      let E = 0;
      const H = h.length;
      let w = u.length - 1, F = H - 1;
      for (; E <= w && E <= F; ) {
        const V = u[E], W = h[E] = A ? dt(h[E]) : qe(h[E]);
        if (St(V, W)) T(V, W, g, null, b, _, R, S, A);
        else break;
        E++;
      }
      for (; E <= w && E <= F; ) {
        const V = u[w], W = h[F] = A ? dt(h[F]) : qe(h[F]);
        if (St(V, W)) T(V, W, g, null, b, _, R, S, A);
        else break;
        w--, F--;
      }
      if (E > w) {
        if (E <= F) {
          const V = F + 1, W = V < H ? h[V].el : v;
          for (; E <= F; ) T(null, h[E] = A ? dt(h[E]) : qe(h[E]), g, W, b, _, R, S, A), E++;
        }
      } else if (E > F) for (; E <= w; ) Ae(u[E], b, _, true), E++;
      else {
        const V = E, W = E, se = /* @__PURE__ */ new Map();
        for (E = W; E <= F; E++) {
          const we = h[E] = A ? dt(h[E]) : qe(h[E]);
          we.key != null && se.set(we.key, E);
        }
        let X, Ce = 0;
        const Se = F - W + 1;
        let Ue = false, Ge = 0;
        const Gt = new Array(Se);
        for (E = 0; E < Se; E++) Gt[E] = 0;
        for (E = V; E <= w; E++) {
          const we = u[E];
          if (Ce >= Se) {
            Ae(we, b, _, true);
            continue;
          }
          let ke;
          if (we.key != null) ke = se.get(we.key);
          else for (X = W; X <= F; X++) if (Gt[X - W] === 0 && St(we, h[X])) {
            ke = X;
            break;
          }
          ke === void 0 ? Ae(we, b, _, true) : (Gt[ke - W] = E + 1, ke >= Ge ? Ge = ke : Ue = true, T(we, h[ke], g, null, b, _, R, S, A), Ce++);
        }
        const ks = Ue ? nc(Gt) : Mt;
        for (X = ks.length - 1, E = Se - 1; E >= 0; E--) {
          const we = W + E, ke = h[we], Ks = h[we + 1], Ws = we + 1 < H ? Ks.el || Ks.placeholder : v;
          Gt[E] === 0 ? T(null, ke, g, Ws, b, _, R, S, A) : Ue && (X < 0 || E !== ks[X] ? je(ke, g, Ws, 2) : X--);
        }
      }
    }, je = (u, h, g, v, b = null) => {
      const { el: _, type: R, transition: S, children: A, shapeFlag: E } = u;
      if (E & 6) {
        je(u.component.subTree, h, g, v);
        return;
      }
      if (E & 128) {
        u.suspense.move(h, g, v);
        return;
      }
      if (E & 64) {
        R.move(u, h, g, M);
        return;
      }
      if (R === $e) {
        s(_, h, g);
        for (let w = 0; w < A.length; w++) je(A[w], h, g, v);
        s(u.anchor, h, g);
        return;
      }
      if (R === yn) {
        D(u, h, g);
        return;
      }
      if (v !== 2 && E & 1 && S) if (v === 0) S.beforeEnter(_), s(_, h, g), Te(() => S.enter(_), b);
      else {
        const { leave: w, delayLeave: F, afterLeave: V } = S, W = () => {
          u.ctx.isUnmounted ? r(_) : s(_, h, g);
        }, se = () => {
          _._isLeaving && _[et](true), w(_, () => {
            W(), V && V();
          });
        };
        F ? F(_, W, se) : se();
      }
      else s(_, h, g);
    }, Ae = (u, h, g, v = false, b = false) => {
      const { type: _, props: R, ref: S, children: A, dynamicChildren: E, shapeFlag: H, patchFlag: w, dirs: F, cacheIndex: V } = u;
      if (w === -2 && (b = false), S != null && (st(), Yt(S, null, g, u, true), rt()), V != null && (h.renderCache[V] = void 0), H & 256) {
        h.ctx.deactivate(u);
        return;
      }
      const W = H & 1 && F, se = !Xt(u);
      let X;
      if (se && (X = R && R.onVnodeBeforeUnmount) && Ke(X, h, u), H & 6) vt(u.component, g, v);
      else {
        if (H & 128) {
          u.suspense.unmount(g, v);
          return;
        }
        W && yt(u, null, h, "beforeUnmount"), H & 64 ? u.type.remove(u, h, g, M, v) : E && !E.hasOnce && (_ !== $e || w > 0 && w & 64) ? Pe(E, h, g, false, true) : (_ === $e && w & 384 || !b && H & 16) && Pe(A, h, g), v && Pt(u);
      }
      (se && (X = R && R.onVnodeUnmounted) || W) && Te(() => {
        X && Ke(X, h, u), W && yt(u, null, h, "unmounted");
      }, g);
    }, Pt = (u) => {
      const { type: h, el: g, anchor: v, transition: b } = u;
      if (h === $e) {
        It(g, v);
        return;
      }
      if (h === yn) {
        N(u);
        return;
      }
      const _ = () => {
        r(g), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: R, delayLeave: S } = b, A = () => R(g, _);
        S ? S(u.el, _, A) : A();
      } else _();
    }, It = (u, h) => {
      let g;
      for (; u !== h; ) g = p(u), r(u), u = g;
      r(h);
    }, vt = (u, h, g) => {
      const { bum: v, scope: b, job: _, subTree: R, um: S, m: A, a: E } = u;
      or(A), or(E), v && Kn(v), b.stop(), _ && (_.flags |= 8, Ae(R, u, h, g)), S && Te(S, h), Te(() => {
        u.isUnmounted = true;
      }, h);
    }, Pe = (u, h, g, v = false, b = false, _ = 0) => {
      for (let R = _; R < u.length; R++) Ae(u[R], h, g, v, b);
    }, y = (u) => {
      if (u.shapeFlag & 6) return y(u.component.subTree);
      if (u.shapeFlag & 128) return u.suspense.next();
      const h = p(u.anchor || u.el), g = h && h[gl];
      return g ? p(g) : h;
    };
    let P = false;
    const x = (u, h, g) => {
      u == null ? h._vnode && Ae(h._vnode, null, null, true) : T(h._vnode || null, u, h, null, null, null, g), h._vnode = u, P || (P = true, Js(), yi(), P = false);
    }, M = {
      p: T,
      um: Ae,
      m: je,
      r: Pt,
      mt: ae,
      mc: he,
      pc: J,
      pbc: $,
      n: y,
      o: e
    };
    return {
      render: x,
      hydrate: void 0,
      createApp: Fl(x)
    };
  }
  function Yn({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function bt({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function tc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Qi(e, t, n = false) {
    const s = e.children, r = t.children;
    if (B(s) && B(r)) for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = dt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Qi(o, l)), l.type === Un && l.patchFlag !== -1 && (l.el = o.el), l.type === be && !l.el && (l.el = o.el);
    }
  }
  function nc(e) {
    const t = e.slice(), n = [
      0
    ];
    let s, r, i, o, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
      const d = e[s];
      if (d !== 0) {
        if (r = n[n.length - 1], e[r] < d) {
          t[s] = r, n.push(s);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; ) l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
        d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
    return n;
  }
  function Yi(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Yi(t);
  }
  function or(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Xi = (e) => e.__isSuspense;
  function sc(e, t) {
    t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : hl(e);
  }
  let Un, be, yn, en;
  $e = Symbol.for("v-fgt");
  Un = Symbol.for("v-txt");
  be = Symbol.for("v-cmt");
  yn = Symbol.for("v-stc");
  en = [];
  let Oe = null;
  Zi = function(e = false) {
    en.push(Oe = e ? null : []);
  };
  function rc() {
    en.pop(), Oe = en[en.length - 1] || null;
  }
  let ln = 1;
  function wn(e, t = false) {
    ln += e, e < 0 && Oe && t && (Oe.hasOnce = true);
  }
  function eo(e) {
    return e.dynamicChildren = ln > 0 ? Oe || Mt : null, rc(), ln > 0 && Oe && Oe.push(e), e;
  }
  ic = function(e, t, n, s, r, i) {
    return eo(no(e, t, n, s, r, i, true));
  };
  oc = function(e, t, n, s, r) {
    return eo(Ee(e, t, n, s, r, true));
  };
  function Tn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function St(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const to = ({ key: e }) => e ?? null, bn = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || me(e) || U(e) ? {
    i: Me,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  no = function(e, t = null, n = null, s = 0, r = null, i = e === $e ? 0 : 1, o = false, l = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && to(t),
      ref: t && bn(t),
      scopeId: Ei,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: s,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: Me
    };
    return l ? (Bs(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ce(n) ? 8 : 16), ln > 0 && !o && Oe && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Oe.push(c), c;
  };
  Ee = lc;
  function lc(e, t = null, n = null, s = 0, r = null, i = false) {
    if ((!e || e === Di) && (e = be), Tn(e)) {
      const l = mt(e, t, true);
      return n && Bs(l, n), ln > 0 && !i && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
    }
    if (yc(e) && (e = e.__vccOpts), t) {
      t = cc(t);
      let { class: l, style: c } = t;
      l && !ce(l) && (t.class = xs(l)), oe(c) && (Ls(c) && !B(c) && (c = de({}, c)), t.style = Rs(c));
    }
    const o = ce(e) ? 1 : Xi(e) ? 128 : Ai(e) ? 64 : oe(e) ? 4 : U(e) ? 2 : 0;
    return no(e, t, n, s, r, o, i, true);
  }
  function cc(e) {
    return e ? Ls(e) || Ki(e) ? de({}, e) : e : null;
  }
  function mt(e, t, n = false, s = false) {
    const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, d = t ? uc(r || {}, t) : r, f = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: d,
      key: d && to(d),
      ref: t && t.ref ? n && i ? B(i) ? i.concat(bn(t)) : [
        i,
        bn(t)
      ] : bn(t) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== $e ? o === -1 ? 16 : o | 16 : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && mt(e.ssContent),
      ssFallback: e.ssFallback && mt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return c && s && on(f, c.clone(f)), f;
  }
  fc = function(e = " ", t = 0) {
    return Ee(Un, null, e, t);
  };
  du = function(e, t) {
    const n = Ee(yn, null, e);
    return n.staticCount = t, n;
  };
  hu = function(e = "", t = false) {
    return t ? (Zi(), oc(be, null, e)) : Ee(be, null, e);
  };
  function qe(e) {
    return e == null || typeof e == "boolean" ? Ee(be) : B(e) ? Ee($e, null, e.slice()) : Tn(e) ? dt(e) : Ee(Un, null, String(e));
  }
  function dt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
  }
  function Bs(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (B(t)) n = 16;
    else if (typeof t == "object") if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), Bs(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ki(t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else U(t) ? (t = {
      default: t,
      _ctx: Me
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [
      fc(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function uc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      for (const r in s) if (r === "class") t.class !== s.class && (t.class = xs([
        t.class,
        s.class
      ]));
      else if (r === "style") t.style = Rs([
        t.style,
        s.style
      ]);
      else if (Pn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(B(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
    }
    return t;
  }
  function Ke(e, t, n, s = null) {
    Be(e, t, 7, [
      n,
      s
    ]);
  }
  const ac = Bi();
  let dc = 0;
  function hc(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || ac, i = {
      uid: dc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Fo(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: $i(s, r),
      emitsOptions: Ui(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: s.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return i.ctx = {
      _: i
    }, i.root = t ? t.root : i, i.emit = Ul.bind(null, i), e.ce && e.ce(i), i;
  }
  let ge = null;
  const so = () => ge || Me;
  let On, gs;
  {
    const e = Dn(), t = (n, s) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
        r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
      };
    };
    On = t("__VUE_INSTANCE_SETTERS__", (n) => ge = n), gs = t("__VUE_SSR_SETTERS__", (n) => cn = n);
  }
  const dn = (e) => {
    const t = ge;
    return On(e), e.scope.on(), () => {
      e.scope.off(), On(t);
    };
  }, lr = () => {
    ge && ge.scope.off(), On(null);
  };
  function ro(e) {
    return e.vnode.shapeFlag & 4;
  }
  let cn = false;
  function pc(e, t = false, n = false) {
    t && gs(t);
    const { props: s, children: r } = e.vnode, i = ro(e);
    ql(e, s, i, t), Yl(e, r, n || t);
    const o = i ? gc(e, t) : void 0;
    return t && gs(false), o;
  }
  function gc(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ol);
    const { setup: s } = n;
    if (s) {
      st();
      const r = e.setupContext = s.length > 1 ? _c(e) : null, i = dn(e), o = an(s, e, 0, [
        e.props,
        r
      ]), l = $r(o);
      if (rt(), i(), (l || e.sp) && !Xt(e) && Ti(e), l) {
        if (o.then(lr, lr), t) return o.then((c) => {
          cr(e, c);
        }).catch((c) => {
          Hn(c, e, 0);
        });
        e.asyncDep = o;
      } else cr(e, o);
    } else io(e);
  }
  function cr(e, t, n) {
    U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = gi(t)), io(e);
  }
  function io(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || ze);
    {
      const r = dn(e);
      st();
      try {
        Pl(e);
      } finally {
        rt(), r();
      }
    }
  }
  const mc = {
    get(e, t) {
      return pe(e, "get", ""), e[t];
    }
  };
  function _c(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, mc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Vs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gi(nl(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Zt) return Zt[n](e);
      },
      has(t, n) {
        return n in t || n in Zt;
      }
    })) : e.proxy;
  }
  function vc(e, t = true) {
    return U(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function yc(e) {
    return U(e) && "__vccOpts" in e;
  }
  De = (e, t) => cl(e, t, cn);
  js = function(e, t, n) {
    try {
      wn(-1);
      const s = arguments.length;
      return s === 2 ? oe(t) && !B(t) ? Tn(t) ? Ee(e, null, [
        t
      ]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Tn(n) && (n = [
        n
      ]), Ee(e, t, n));
    } finally {
      wn(1);
    }
  };
  const bc = "3.5.25";
  let ms;
  const fr = typeof window < "u" && window.trustedTypes;
  if (fr) try {
    ms = fr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let oo, Ec, Ac, Ze, ur, Cc, ct, Kt, fn, lo, Sc, Rc, Et, ar;
  oo = ms ? (e) => ms.createHTML(e) : (e) => e;
  Ec = "http://www.w3.org/2000/svg";
  Ac = "http://www.w3.org/1998/Math/MathML";
  Ze = typeof document < "u" ? document : null;
  ur = Ze && Ze.createElement("template");
  Cc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t === "svg" ? Ze.createElementNS(Ec, e) : t === "mathml" ? Ze.createElementNS(Ac, e) : n ? Ze.createElement(e, {
        is: n
      }) : Ze.createElement(e);
      return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
    },
    createText: (e) => Ze.createTextNode(e),
    createComment: (e) => Ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
      else {
        ur.innerHTML = oo(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
        const l = ur.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  ct = "transition";
  Kt = "animation";
  fn = Symbol("_vtc");
  lo = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [
      String,
      Number,
      Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  Sc = de({}, Ci, lo);
  Rc = (e) => (e.displayName = "Transition", e.props = Sc, e);
  pu = Rc((e, { slots: t }) => js(vl, xc(e), t));
  Et = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  ar = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function xc(e) {
    const t = {};
    for (const O in e) O in lo || (t[O] = e[O]);
    if (e.css === false) return t;
    const { name: n = "v", type: s, duration: r, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: d = o, appearToClass: f = l, leaveFromClass: a = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, C = wc(r), T = C && C[0], j = C && C[1], { onBeforeEnter: L, onEnter: I, onEnterCancelled: D, onLeave: N, onLeaveCancelled: k, onBeforeAppear: te = L, onAppear: Z = I, onAppearCancelled: he = D } = t, G = (O, z, ae, xe) => {
      O._enterCancelled = xe, At(O, z ? f : l), At(O, z ? d : o), ae && ae();
    }, $ = (O, z) => {
      O._isLeaving = false, At(O, a), At(O, m), At(O, p), z && z();
    }, ne = (O) => (z, ae) => {
      const xe = O ? Z : I, fe = () => G(z, O, ae);
      Et(xe, [
        z,
        fe
      ]), dr(() => {
        At(z, O ? c : i), Ye(z, O ? f : l), ar(xe) || hr(z, s, T, fe);
      });
    };
    return de(t, {
      onBeforeEnter(O) {
        Et(L, [
          O
        ]), Ye(O, i), Ye(O, o);
      },
      onBeforeAppear(O) {
        Et(te, [
          O
        ]), Ye(O, c), Ye(O, d);
      },
      onEnter: ne(false),
      onAppear: ne(true),
      onLeave(O, z) {
        O._isLeaving = true;
        const ae = () => $(O, z);
        Ye(O, a), O._enterCancelled ? (Ye(O, p), mr(O)) : (mr(O), Ye(O, p)), dr(() => {
          O._isLeaving && (At(O, a), Ye(O, m), ar(N) || hr(O, s, j, ae));
        }), Et(N, [
          O,
          ae
        ]);
      },
      onEnterCancelled(O) {
        G(O, false, void 0, true), Et(D, [
          O
        ]);
      },
      onAppearCancelled(O) {
        G(O, true, void 0, true), Et(he, [
          O
        ]);
      },
      onLeaveCancelled(O) {
        $(O), Et(k, [
          O
        ]);
      }
    });
  }
  function wc(e) {
    if (e == null) return null;
    if (oe(e)) return [
      Xn(e.enter),
      Xn(e.leave)
    ];
    {
      const t = Xn(e);
      return [
        t,
        t
      ];
    }
  }
  function Xn(e) {
    return To(e);
  }
  function Ye(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[fn] || (e[fn] = /* @__PURE__ */ new Set())).add(t);
  }
  function At(e, t) {
    t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
    const n = e[fn];
    n && (n.delete(t), n.size || (e[fn] = void 0));
  }
  function dr(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Tc = 0;
  function hr(e, t, n, s) {
    const r = e._endId = ++Tc, i = () => {
      r === e._endId && s();
    };
    if (n != null) return setTimeout(i, n);
    const { type: o, timeout: l, propCount: c } = Oc(e, t);
    if (!o) return s();
    const d = o + "end";
    let f = 0;
    const a = () => {
      e.removeEventListener(d, p), i();
    }, p = (m) => {
      m.target === e && ++f >= c && a();
    };
    setTimeout(() => {
      f < c && a();
    }, l + 1), e.addEventListener(d, p);
  }
  function Oc(e, t) {
    const n = window.getComputedStyle(e), s = (C) => (n[C] || "").split(", "), r = s(`${ct}Delay`), i = s(`${ct}Duration`), o = pr(r, i), l = s(`${Kt}Delay`), c = s(`${Kt}Duration`), d = pr(l, c);
    let f = null, a = 0, p = 0;
    t === ct ? o > 0 && (f = ct, a = o, p = i.length) : t === Kt ? d > 0 && (f = Kt, a = d, p = c.length) : (a = Math.max(o, d), f = a > 0 ? o > d ? ct : Kt : null, p = f ? f === ct ? i.length : c.length : 0);
    const m = f === ct && /\b(?:transform|all)(?:,|$)/.test(s(`${ct}Property`).toString());
    return {
      type: f,
      timeout: a,
      propCount: p,
      hasTransform: m
    };
  }
  function pr(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, s) => gr(n) + gr(e[s])));
  }
  function gr(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function mr(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function Pc(e, t, n) {
    const s = e[fn];
    s && (t = (t ? [
      t,
      ...s
    ] : [
      ...s
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  const _r = Symbol("_vod"), Ic = Symbol("_vsh"), Nc = Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
  function Dc(e, t, n) {
    const s = e.style, r = ce(n);
    let i = false;
    if (n && !r) {
      if (t) if (ce(t)) for (const o of t.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        n[l] == null && En(s, l, "");
      }
      else for (const o in t) n[o] == null && En(s, o, "");
      for (const o in n) o === "display" && (i = true), En(s, o, n[o]);
    } else if (r) {
      if (t !== n) {
        const o = s[Nc];
        o && (n += ";" + o), s.cssText = n, i = Lc.test(n);
      }
    } else t && e.removeAttribute("style");
    _r in e && (e[_r] = i ? s.display : "", e[Ic] && (s.display = "none"));
  }
  const vr = /\s*!important$/;
  function En(e, t, n) {
    if (B(n)) n.forEach((s) => En(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const s = Mc(e, t);
      vr.test(n) ? e.setProperty(Ot(s), n.replace(vr, ""), "important") : e[s] = n;
    }
  }
  const yr = [
    "Webkit",
    "Moz",
    "ms"
  ], Zn = {};
  function Mc(e, t) {
    const n = Zn[t];
    if (n) return n;
    let s = Le(t);
    if (s !== "filter" && s in e) return Zn[t] = s;
    s = Ln(s);
    for (let r = 0; r < yr.length; r++) {
      const i = yr[r] + s;
      if (i in e) return Zn[t] = i;
    }
    return t;
  }
  const br = "http://www.w3.org/1999/xlink";
  function Er(e, t, n, s, r, i = Do(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(br, t.slice(6, t.length)) : e.setAttributeNS(br, t, n) : n == null || i && !Qr(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : _t(n) ? String(n) : n);
  }
  function Ar(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? oo(n) : n);
      return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let o = false;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = Qr(n) : n == null && l === "string" ? (n = "", o = true) : l === "number" && (n = 0, o = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    o && e.removeAttribute(r || t);
  }
  function Fc(e, t, n, s) {
    e.addEventListener(t, n, s);
  }
  function Hc(e, t, n, s) {
    e.removeEventListener(t, n, s);
  }
  const Cr = Symbol("_vei");
  function Bc(e, t, n, s, r = null) {
    const i = e[Cr] || (e[Cr] = {}), o = i[t];
    if (s && o) o.value = s;
    else {
      const [l, c] = Vc(t);
      if (s) {
        const d = i[t] = Gc(s, r);
        Fc(e, l, d, c);
      } else o && (Hc(e, l, o, c), i[t] = void 0);
    }
  }
  const Sr = /(?:Once|Passive|Capture)$/;
  function Vc(e) {
    let t;
    if (Sr.test(e)) {
      t = {};
      let s;
      for (; s = e.match(Sr); ) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Ot(e.slice(2)),
      t
    ];
  }
  let es = 0;
  const jc = Promise.resolve(), Uc = () => es || (jc.then(() => es = 0), es = Date.now());
  function Gc(e, t) {
    const n = (s) => {
      if (!s._vts) s._vts = Date.now();
      else if (s._vts <= n.attached) return;
      Be(kc(s, n.value), t, 5, [
        s
      ]);
    };
    return n.value = e, n.attached = Uc(), n;
  }
  function kc(e, t) {
    if (B(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((s) => (r) => !r._stopped && s && s(r));
    } else return t;
  }
  const Rr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class" ? Pc(e, s, o) : t === "style" ? Dc(e, n, s) : Pn(t) ? As(t) || Bc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Wc(e, t, s, o)) ? (Ar(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Er(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ce(s)) ? Ar(e, Le(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Er(e, t, s, o));
  };
  function Wc(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Rr(t) && U(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Rr(t) && ce(n) ? false : t in e;
  }
  const $c = de({
    patchProp: Kc
  }, Cc);
  let xr;
  function qc() {
    return xr || (xr = Zl($c));
  }
  const zc = ((...e) => {
    const t = qc().createApp(...e), { mount: n } = t;
    return t.mount = (s) => {
      const r = Qc(s);
      if (!r) return;
      const i = t._component;
      !U(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = n(r, false, Jc(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, t;
  });
  function Jc(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Qc(e) {
    return ce(e) ? document.querySelector(e) : e;
  }
  const Dt = typeof document < "u";
  function co(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Yc(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && co(e.default);
  }
  const Q = Object.assign;
  function ts(e, t) {
    const n = {};
    for (const s in t) {
      const r = t[s];
      n[s] = Ve(r) ? r.map(e) : e(r);
    }
    return n;
  }
  const tn = () => {
  }, Ve = Array.isArray;
  function wr(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n;
  }
  const fo = /#/g, Xc = /&/g, Zc = /\//g, ef = /=/g, tf = /\?/g, uo = /\+/g, nf = /%5B/g, sf = /%5D/g, ao = /%5E/g, rf = /%60/g, ho = /%7B/g, of = /%7C/g, po = /%7D/g, lf = /%20/g;
  function Us(e) {
    return e == null ? "" : encodeURI("" + e).replace(of, "|").replace(nf, "[").replace(sf, "]");
  }
  function cf(e) {
    return Us(e).replace(ho, "{").replace(po, "}").replace(ao, "^");
  }
  function _s(e) {
    return Us(e).replace(uo, "%2B").replace(lf, "+").replace(fo, "%23").replace(Xc, "%26").replace(rf, "`").replace(ho, "{").replace(po, "}").replace(ao, "^");
  }
  function ff(e) {
    return _s(e).replace(ef, "%3D");
  }
  function uf(e) {
    return Us(e).replace(fo, "%23").replace(tf, "%3F");
  }
  function af(e) {
    return uf(e).replace(Zc, "%2F");
  }
  function un(e) {
    if (e == null) return null;
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const df = /\/$/, hf = (e) => e.replace(df, "");
  function ns(e, t, n = "/") {
    let s, r = {}, i = "", o = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return c = l >= 0 && c > l ? -1 : c, c >= 0 && (s = t.slice(0, c), i = t.slice(c, l > 0 ? l : t.length), r = e(i.slice(1))), l >= 0 && (s = s || t.slice(0, l), o = t.slice(l, t.length)), s = _f(s ?? t, n), {
      fullPath: s + i + o,
      path: s,
      query: r,
      hash: un(o)
    };
  }
  function pf(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Tr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function gf(e, t, n) {
    const s = t.matched.length - 1, r = n.matched.length - 1;
    return s > -1 && s === r && jt(t.matched[s], n.matched[r]) && go(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function jt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function go(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!mf(e[n], t[n])) return false;
    return true;
  }
  function mf(e, t) {
    return Ve(e) ? Or(e, t) : Ve(t) ? Or(t, e) : e === t;
  }
  function Or(e, t) {
    return Ve(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
  }
  function _f(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), s = e.split("/"), r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let i = n.length - 1, o, l;
    for (o = 0; o < s.length; o++) if (l = s[o], l !== ".") if (l === "..") i > 1 && i--;
    else break;
    return n.slice(0, i).join("/") + "/" + s.slice(o).join("/");
  }
  const ft = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  let vs = (function(e) {
    return e.pop = "pop", e.push = "push", e;
  })({}), ss = (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e;
  })({});
  function vf(e) {
    if (!e) if (Dt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), hf(e);
  }
  const yf = /^[^#]+#/;
  function bf(e, t) {
    return e.replace(yf, "#") + t;
  }
  function Ef(e, t) {
    const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: s.left - n.left - (t.left || 0),
      top: s.top - n.top - (t.top || 0)
    };
  }
  const Gn = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Af(e) {
    let t;
    if ("el" in e) {
      const n = e.el, s = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!r) return;
      t = Ef(r, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Pr(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const ys = /* @__PURE__ */ new Map();
  function Cf(e, t) {
    ys.set(e, t);
  }
  function Sf(e) {
    const t = ys.get(e);
    return ys.delete(e), t;
  }
  function Rf(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function mo(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  let le = (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
  })({});
  const _o = Symbol("");
  le.MATCHER_NOT_FOUND + "", le.NAVIGATION_GUARD_REDIRECT + "", le.NAVIGATION_ABORTED + "", le.NAVIGATION_CANCELLED + "", le.NAVIGATION_DUPLICATED + "";
  function Ut(e, t) {
    return Q(new Error(), {
      type: e,
      [_o]: true
    }, t);
  }
  function Xe(e, t) {
    return e instanceof Error && _o in e && (t == null || !!(e.type & t));
  }
  const xf = [
    "params",
    "query",
    "hash"
  ];
  function wf(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of xf) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
  }
  function Tf(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < n.length; ++s) {
      const r = n[s].replace(uo, " "), i = r.indexOf("="), o = un(i < 0 ? r : r.slice(0, i)), l = i < 0 ? null : un(r.slice(i + 1));
      if (o in t) {
        let c = t[o];
        Ve(c) || (c = t[o] = [
          c
        ]), c.push(l);
      } else t[o] = l;
    }
    return t;
  }
  function Ir(e) {
    let t = "";
    for (let n in e) {
      const s = e[n];
      if (n = ff(n), s == null) {
        s !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (Ve(s) ? s.map((r) => r && _s(r)) : [
        s && _s(s)
      ]).forEach((r) => {
        r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
      });
    }
    return t;
  }
  function Of(e) {
    const t = {};
    for (const n in e) {
      const s = e[n];
      s !== void 0 && (t[n] = Ve(s) ? s.map((r) => r == null ? null : "" + r) : s == null ? s : "" + s);
    }
    return t;
  }
  const Pf = Symbol(""), Nr = Symbol(""), Gs = Symbol(""), vo = Symbol(""), bs = Symbol("");
  function Wt() {
    let e = [];
    function t(s) {
      return e.push(s), () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      };
    }
    function n() {
      e = [];
    }
    return {
      add: t,
      list: () => e.slice(),
      reset: n
    };
  }
  function ht(e, t, n, s, r, i = (o) => o()) {
    const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((l, c) => {
      const d = (p) => {
        p === false ? c(Ut(le.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : p instanceof Error ? c(p) : Rf(p) ? c(Ut(le.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: p
        })) : (o && s.enterCallbacks[r] === o && typeof p == "function" && o.push(p), l());
      }, f = i(() => e.call(s && s.instances[r], t, n, d));
      let a = Promise.resolve(f);
      e.length < 3 && (a = a.then(d)), a.catch((p) => c(p));
    });
  }
  function rs(e, t, n, s, r = (i) => i()) {
    const i = [];
    for (const o of e) for (const l in o.components) {
      let c = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l])) if (co(c)) {
        const d = (c.__vccOpts || c)[t];
        d && i.push(ht(d, n, s, o, l, r));
      } else {
        let d = c();
        i.push(() => d.then((f) => {
          if (!f) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
          const a = Yc(f) ? f.default : f;
          o.mods[l] = f, o.components[l] = a;
          const p = (a.__vccOpts || a)[t];
          return p && ht(p, n, s, o, l, r)();
        }));
      }
    }
    return i;
  }
  function If(e, t) {
    const n = [], s = [], r = [], i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
      const l = t.matched[o];
      l && (e.matched.find((d) => jt(d, l)) ? s.push(l) : n.push(l));
      const c = e.matched[o];
      c && (t.matched.find((d) => jt(d, c)) || r.push(c));
    }
    return [
      n,
      s,
      r
    ];
  }
  let Nf = () => location.protocol + "//" + location.host;
  function yo(e, t) {
    const { pathname: n, search: s, hash: r } = t, i = e.indexOf("#");
    if (i > -1) {
      let o = r.includes(e.slice(i)) ? e.slice(i).length : 1, l = r.slice(o);
      return l[0] !== "/" && (l = "/" + l), Tr(l, "");
    }
    return Tr(n, e) + s + r;
  }
  function Lf(e, t, n, s) {
    let r = [], i = [], o = null;
    const l = ({ state: p }) => {
      const m = yo(e, location), C = n.value, T = t.value;
      let j = 0;
      if (p) {
        if (n.value = m, t.value = p, o && o === C) {
          o = null;
          return;
        }
        j = T ? p.position - T.position : 0;
      } else s(m);
      r.forEach((L) => {
        L(n.value, C, {
          delta: j,
          type: vs.pop,
          direction: j ? j > 0 ? ss.forward : ss.back : ss.unknown
        });
      });
    };
    function c() {
      o = n.value;
    }
    function d(p) {
      r.push(p);
      const m = () => {
        const C = r.indexOf(p);
        C > -1 && r.splice(C, 1);
      };
      return i.push(m), m;
    }
    function f() {
      if (document.visibilityState === "hidden") {
        const { history: p } = window;
        if (!p.state) return;
        p.replaceState(Q({}, p.state, {
          scroll: Gn()
        }), "");
      }
    }
    function a() {
      for (const p of i) p();
      i = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", f), document.removeEventListener("visibilitychange", f);
    }
    return window.addEventListener("popstate", l), window.addEventListener("pagehide", f), document.addEventListener("visibilitychange", f), {
      pauseListeners: c,
      listen: d,
      destroy: a
    };
  }
  function Lr(e, t, n, s = false, r = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: s,
      position: window.history.length,
      scroll: r ? Gn() : null
    };
  }
  function Df(e) {
    const { history: t, location: n } = window, s = {
      value: yo(e, n)
    }, r = {
      value: t.state
    };
    r.value || i(s.value, {
      back: null,
      current: s.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function i(c, d, f) {
      const a = e.indexOf("#"), p = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + c : Nf() + e + c;
      try {
        t[f ? "replaceState" : "pushState"](d, "", p), r.value = d;
      } catch (m) {
        console.error(m), n[f ? "replace" : "assign"](p);
      }
    }
    function o(c, d) {
      i(c, Q({}, t.state, Lr(r.value.back, c, r.value.forward, true), d, {
        position: r.value.position
      }), true), s.value = c;
    }
    function l(c, d) {
      const f = Q({}, r.value, t.state, {
        forward: c,
        scroll: Gn()
      });
      i(f.current, f, true), i(c, Q({}, Lr(s.value, c, null), {
        position: f.position + 1
      }, d), false), s.value = c;
    }
    return {
      location: s,
      state: r,
      push: l,
      replace: o
    };
  }
  function Mf(e) {
    e = vf(e);
    const t = Df(e), n = Lf(e, t.state, t.location, t.replace);
    function s(i, o = true) {
      o || n.pauseListeners(), history.go(i);
    }
    const r = Q({
      location: "",
      base: e,
      go: s,
      createHref: bf.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(r, "state", {
      enumerable: true,
      get: () => t.state.value
    }), r;
  }
  let Rt = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
  })({});
  var ue = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
  })(ue || {});
  const Ff = {
    type: Rt.Static,
    value: ""
  }, Hf = /[a-zA-Z0-9_]/;
  function Bf(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        Ff
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(m) {
      throw new Error(`ERR (${n})/"${d}": ${m}`);
    }
    let n = ue.Static, s = n;
    const r = [];
    let i;
    function o() {
      i && r.push(i), i = [];
    }
    let l = 0, c, d = "", f = "";
    function a() {
      d && (n === ue.Static ? i.push({
        type: Rt.Static,
        value: d
      }) : n === ue.Param || n === ue.ParamRegExp || n === ue.ParamRegExpEnd ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), i.push({
        type: Rt.Param,
        value: d,
        regexp: f,
        repeatable: c === "*" || c === "+",
        optional: c === "*" || c === "?"
      })) : t("Invalid state to consume buffer"), d = "");
    }
    function p() {
      d += c;
    }
    for (; l < e.length; ) {
      if (c = e[l++], c === "\\" && n !== ue.ParamRegExp) {
        s = n, n = ue.EscapeNext;
        continue;
      }
      switch (n) {
        case ue.Static:
          c === "/" ? (d && a(), o()) : c === ":" ? (a(), n = ue.Param) : p();
          break;
        case ue.EscapeNext:
          p(), n = s;
          break;
        case ue.Param:
          c === "(" ? n = ue.ParamRegExp : Hf.test(c) ? p() : (a(), n = ue.Static, c !== "*" && c !== "?" && c !== "+" && l--);
          break;
        case ue.ParamRegExp:
          c === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + c : n = ue.ParamRegExpEnd : f += c;
          break;
        case ue.ParamRegExpEnd:
          a(), n = ue.Static, c !== "*" && c !== "?" && c !== "+" && l--, f = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === ue.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`), a(), o(), r;
  }
  const Dr = "[^/]+?", Vf = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  var ve = (function(e) {
    return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
  })(ve || {});
  const jf = /[.+*?^${}()[\]/\\]/g;
  function Uf(e, t) {
    const n = Q({}, Vf, t), s = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const d of e) {
      const f = d.length ? [] : [
        ve.Root
      ];
      n.strict && !d.length && (r += "/");
      for (let a = 0; a < d.length; a++) {
        const p = d[a];
        let m = ve.Segment + (n.sensitive ? ve.BonusCaseSensitive : 0);
        if (p.type === Rt.Static) a || (r += "/"), r += p.value.replace(jf, "\\$&"), m += ve.Static;
        else if (p.type === Rt.Param) {
          const { value: C, repeatable: T, optional: j, regexp: L } = p;
          i.push({
            name: C,
            repeatable: T,
            optional: j
          });
          const I = L || Dr;
          if (I !== Dr) {
            m += ve.BonusCustomRegExp;
            try {
              `${I}`;
            } catch (N) {
              throw new Error(`Invalid custom RegExp for param "${C}" (${I}): ` + N.message);
            }
          }
          let D = T ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
          a || (D = j && d.length < 2 ? `(?:/${D})` : "/" + D), j && (D += "?"), r += D, m += ve.Dynamic, j && (m += ve.BonusOptional), T && (m += ve.BonusRepeatable), I === ".*" && (m += ve.BonusWildcard);
        }
        f.push(m);
      }
      s.push(f);
    }
    if (n.strict && n.end) {
      const d = s.length - 1;
      s[d][s[d].length - 1] += ve.BonusStrict;
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");
    function l(d) {
      const f = d.match(o), a = {};
      if (!f) return null;
      for (let p = 1; p < f.length; p++) {
        const m = f[p] || "", C = i[p - 1];
        a[C.name] = m && C.repeatable ? m.split("/") : m;
      }
      return a;
    }
    function c(d) {
      let f = "", a = false;
      for (const p of e) {
        (!a || !f.endsWith("/")) && (f += "/"), a = false;
        for (const m of p) if (m.type === Rt.Static) f += m.value;
        else if (m.type === Rt.Param) {
          const { value: C, repeatable: T, optional: j } = m, L = C in d ? d[C] : "";
          if (Ve(L) && !T) throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);
          const I = Ve(L) ? L.join("/") : L;
          if (!I) if (j) p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : a = true);
          else throw new Error(`Missing required param "${C}"`);
          f += I;
        }
      }
      return f || "/";
    }
    return {
      re: o,
      score: s,
      keys: i,
      parse: l,
      stringify: c
    };
  }
  function Gf(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const s = t[n] - e[n];
      if (s) return s;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === ve.Static + ve.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ve.Static + ve.Segment ? 1 : -1 : 0;
  }
  function bo(e, t) {
    let n = 0;
    const s = e.score, r = t.score;
    for (; n < s.length && n < r.length; ) {
      const i = Gf(s[n], r[n]);
      if (i) return i;
      n++;
    }
    if (Math.abs(r.length - s.length) === 1) {
      if (Mr(s)) return 1;
      if (Mr(r)) return -1;
    }
    return r.length - s.length;
  }
  function Mr(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const kf = {
    strict: false,
    end: true,
    sensitive: false
  };
  function Kf(e, t, n) {
    const s = Uf(Bf(e.path), n), r = Q(s, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
  }
  function Wf(e, t) {
    const n = [], s = /* @__PURE__ */ new Map();
    t = wr(kf, t);
    function r(a) {
      return s.get(a);
    }
    function i(a, p, m) {
      const C = !m, T = Hr(a);
      T.aliasOf = m && m.record;
      const j = wr(t, a), L = [
        T
      ];
      if ("alias" in a) {
        const N = typeof a.alias == "string" ? [
          a.alias
        ] : a.alias;
        for (const k of N) L.push(Hr(Q({}, T, {
          components: m ? m.record.components : T.components,
          path: k,
          aliasOf: m ? m.record : T
        })));
      }
      let I, D;
      for (const N of L) {
        const { path: k } = N;
        if (p && k[0] !== "/") {
          const te = p.record.path, Z = te[te.length - 1] === "/" ? "" : "/";
          N.path = p.record.path + (k && Z + k);
        }
        if (I = Kf(N, p, j), m ? m.alias.push(I) : (D = D || I, D !== I && D.alias.push(I), C && a.name && !Br(I) && o(a.name)), Eo(I) && c(I), T.children) {
          const te = T.children;
          for (let Z = 0; Z < te.length; Z++) i(te[Z], I, m && m.children[Z]);
        }
        m = m || I;
      }
      return D ? () => {
        o(D);
      } : tn;
    }
    function o(a) {
      if (mo(a)) {
        const p = s.get(a);
        p && (s.delete(a), n.splice(n.indexOf(p), 1), p.children.forEach(o), p.alias.forEach(o));
      } else {
        const p = n.indexOf(a);
        p > -1 && (n.splice(p, 1), a.record.name && s.delete(a.record.name), a.children.forEach(o), a.alias.forEach(o));
      }
    }
    function l() {
      return n;
    }
    function c(a) {
      const p = zf(a, n);
      n.splice(p, 0, a), a.record.name && !Br(a) && s.set(a.record.name, a);
    }
    function d(a, p) {
      let m, C = {}, T, j;
      if ("name" in a && a.name) {
        if (m = s.get(a.name), !m) throw Ut(le.MATCHER_NOT_FOUND, {
          location: a
        });
        j = m.record.name, C = Q(Fr(p.params, m.keys.filter((D) => !D.optional).concat(m.parent ? m.parent.keys.filter((D) => D.optional) : []).map((D) => D.name)), a.params && Fr(a.params, m.keys.map((D) => D.name))), T = m.stringify(C);
      } else if (a.path != null) T = a.path, m = n.find((D) => D.re.test(T)), m && (C = m.parse(T), j = m.record.name);
      else {
        if (m = p.name ? s.get(p.name) : n.find((D) => D.re.test(p.path)), !m) throw Ut(le.MATCHER_NOT_FOUND, {
          location: a,
          currentLocation: p
        });
        j = m.record.name, C = Q({}, p.params, a.params), T = m.stringify(C);
      }
      const L = [];
      let I = m;
      for (; I; ) L.unshift(I.record), I = I.parent;
      return {
        name: j,
        path: T,
        params: C,
        matched: L,
        meta: qf(L)
      };
    }
    e.forEach((a) => i(a));
    function f() {
      n.length = 0, s.clear();
    }
    return {
      addRoute: i,
      resolve: d,
      removeRoute: o,
      clearRoutes: f,
      getRoutes: l,
      getRecordMatcher: r
    };
  }
  function Fr(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n;
  }
  function Hr(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: $f(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && {
        default: e.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function $f(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t;
  }
  function Br(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function qf(e) {
    return e.reduce((t, n) => Q(t, n.meta), {});
  }
  function zf(e, t) {
    let n = 0, s = t.length;
    for (; n !== s; ) {
      const i = n + s >> 1;
      bo(e, t[i]) < 0 ? s = i : n = i + 1;
    }
    const r = Jf(e);
    return r && (s = t.lastIndexOf(r, s - 1)), s;
  }
  function Jf(e) {
    let t = e;
    for (; t = t.parent; ) if (Eo(t) && bo(e, t) === 0) return t;
  }
  function Eo({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function Vr(e) {
    const t = nt(Gs), n = nt(vo), s = De(() => {
      const c = Tt(e.to);
      return t.resolve(c);
    }), r = De(() => {
      const { matched: c } = s.value, { length: d } = c, f = c[d - 1], a = n.matched;
      if (!f || !a.length) return -1;
      const p = a.findIndex(jt.bind(null, f));
      if (p > -1) return p;
      const m = jr(c[d - 2]);
      return d > 1 && jr(f) === m && a[a.length - 1].path !== m ? a.findIndex(jt.bind(null, c[d - 2])) : p;
    }), i = De(() => r.value > -1 && eu(n.params, s.value.params)), o = De(() => r.value > -1 && r.value === n.matched.length - 1 && go(n.params, s.value.params));
    function l(c = {}) {
      if (Zf(c)) {
        const d = t[Tt(e.replace) ? "replace" : "push"](Tt(e.to)).catch(tn);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
      }
      return Promise.resolve();
    }
    return {
      route: s,
      href: De(() => s.value.href),
      isActive: i,
      isExactActive: o,
      navigate: l
    };
  }
  function Qf(e) {
    return e.length === 1 ? e[0] : e;
  }
  let Yf;
  Yf = Ms({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: Vr,
    setup(e, { slots: t }) {
      const n = Fn(Vr(e)), { options: s } = nt(Gs), r = De(() => ({
        [Ur(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
        [Ur(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const i = t.default && Qf(t.default(n));
        return e.custom ? i : js("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: r.value
        }, i);
      };
    }
  });
  Xf = Yf;
  function Zf(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function eu(e, t) {
    for (const n in t) {
      const s = t[n], r = e[n];
      if (typeof s == "string") {
        if (s !== r) return false;
      } else if (!Ve(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return false;
    }
    return true;
  }
  function jr(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const Ur = (e, t, n) => e ?? t ?? n, tu = Ms({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, { attrs: t, slots: n }) {
      const s = nt(bs), r = De(() => e.route || s.value), i = nt(Nr, 0), o = De(() => {
        let d = Tt(i);
        const { matched: f } = r.value;
        let a;
        for (; (a = f[d]) && !a.components; ) d++;
        return d;
      }), l = De(() => r.value.matched[o.value]);
      _n(Nr, De(() => o.value + 1)), _n(Pf, l), _n(bs, r);
      const c = sl();
      return vn(() => [
        c.value,
        l.value,
        e.name
      ], ([d, f, a], [p, m, C]) => {
        f && (f.instances[a] = d, m && m !== f && d && d === p && (f.leaveGuards.size || (f.leaveGuards = m.leaveGuards), f.updateGuards.size || (f.updateGuards = m.updateGuards))), d && f && (!m || !jt(f, m) || !p) && (f.enterCallbacks[a] || []).forEach((T) => T(d));
      }, {
        flush: "post"
      }), () => {
        const d = r.value, f = e.name, a = l.value, p = a && a.components[f];
        if (!p) return Gr(n.default, {
          Component: p,
          route: d
        });
        const m = a.props[f], C = m ? m === true ? d.params : typeof m == "function" ? m(d) : m : null, j = js(p, Q({}, C, t, {
          onVnodeUnmounted: (L) => {
            L.component.isUnmounted && (a.instances[f] = null);
          },
          ref: c
        }));
        return Gr(n.default, {
          Component: j,
          route: d
        }) || j;
      };
    }
  });
  function Gr(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const Ao = tu;
  function nu(e) {
    const t = Wf(e.routes, e), n = e.parseQuery || Tf, s = e.stringifyQuery || Ir, r = e.history, i = Wt(), o = Wt(), l = Wt(), c = rl(ft);
    let d = ft;
    Dt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const f = ts.bind(null, (y) => "" + y), a = ts.bind(null, af), p = ts.bind(null, un);
    function m(y, P) {
      let x, M;
      return mo(y) ? (x = t.getRecordMatcher(y), M = P) : M = y, t.addRoute(M, x);
    }
    function C(y) {
      const P = t.getRecordMatcher(y);
      P && t.removeRoute(P);
    }
    function T() {
      return t.getRoutes().map((y) => y.record);
    }
    function j(y) {
      return !!t.getRecordMatcher(y);
    }
    function L(y, P) {
      if (P = Q({}, P || c.value), typeof y == "string") {
        const g = ns(n, y, P.path), v = t.resolve({
          path: g.path
        }, P), b = r.createHref(g.fullPath);
        return Q(g, v, {
          params: p(v.params),
          hash: un(g.hash),
          redirectedFrom: void 0,
          href: b
        });
      }
      let x;
      if (y.path != null) x = Q({}, y, {
        path: ns(n, y.path, P.path).path
      });
      else {
        const g = Q({}, y.params);
        for (const v in g) g[v] == null && delete g[v];
        x = Q({}, y, {
          params: a(g)
        }), P.params = a(P.params);
      }
      const M = t.resolve(x, P), K = y.hash || "";
      M.params = f(p(M.params));
      const u = pf(s, Q({}, y, {
        hash: cf(K),
        path: M.path
      })), h = r.createHref(u);
      return Q({
        fullPath: u,
        hash: K,
        query: s === Ir ? Of(y.query) : y.query || {}
      }, M, {
        redirectedFrom: void 0,
        href: h
      });
    }
    function I(y) {
      return typeof y == "string" ? ns(n, y, c.value.path) : Q({}, y);
    }
    function D(y, P) {
      if (d !== y) return Ut(le.NAVIGATION_CANCELLED, {
        from: P,
        to: y
      });
    }
    function N(y) {
      return Z(y);
    }
    function k(y) {
      return N(Q(I(y), {
        replace: true
      }));
    }
    function te(y, P) {
      const x = y.matched[y.matched.length - 1];
      if (x && x.redirect) {
        const { redirect: M } = x;
        let K = typeof M == "function" ? M(y, P) : M;
        return typeof K == "string" && (K = K.includes("?") || K.includes("#") ? K = I(K) : {
          path: K
        }, K.params = {}), Q({
          query: y.query,
          hash: y.hash,
          params: K.path != null ? {} : y.params
        }, K);
      }
    }
    function Z(y, P) {
      const x = d = L(y), M = c.value, K = y.state, u = y.force, h = y.replace === true, g = te(x, M);
      if (g) return Z(Q(I(g), {
        state: typeof g == "object" ? Q({}, K, g.state) : K,
        force: u,
        replace: h
      }), P || x);
      const v = x;
      v.redirectedFrom = P;
      let b;
      return !u && gf(s, M, x) && (b = Ut(le.NAVIGATION_DUPLICATED, {
        to: v,
        from: M
      }), je(M, M, true, false)), (b ? Promise.resolve(b) : $(v, M)).catch((_) => Xe(_) ? Xe(_, le.NAVIGATION_GUARD_REDIRECT) ? _ : lt(_) : J(_, v, M)).then((_) => {
        if (_) {
          if (Xe(_, le.NAVIGATION_GUARD_REDIRECT)) return Z(Q({
            replace: h
          }, I(_.to), {
            state: typeof _.to == "object" ? Q({}, K, _.to.state) : K,
            force: u
          }), P || v);
        } else _ = O(v, M, true, h, K);
        return ne(v, M, _), _;
      });
    }
    function he(y, P) {
      const x = D(y, P);
      return x ? Promise.reject(x) : Promise.resolve();
    }
    function G(y) {
      const P = It.values().next().value;
      return P && typeof P.runWithContext == "function" ? P.runWithContext(y) : y();
    }
    function $(y, P) {
      let x;
      const [M, K, u] = If(y, P);
      x = rs(M.reverse(), "beforeRouteLeave", y, P);
      for (const g of M) g.leaveGuards.forEach((v) => {
        x.push(ht(v, y, P));
      });
      const h = he.bind(null, y, P);
      return x.push(h), Pe(x).then(() => {
        x = [];
        for (const g of i.list()) x.push(ht(g, y, P));
        return x.push(h), Pe(x);
      }).then(() => {
        x = rs(K, "beforeRouteUpdate", y, P);
        for (const g of K) g.updateGuards.forEach((v) => {
          x.push(ht(v, y, P));
        });
        return x.push(h), Pe(x);
      }).then(() => {
        x = [];
        for (const g of u) if (g.beforeEnter) if (Ve(g.beforeEnter)) for (const v of g.beforeEnter) x.push(ht(v, y, P));
        else x.push(ht(g.beforeEnter, y, P));
        return x.push(h), Pe(x);
      }).then(() => (y.matched.forEach((g) => g.enterCallbacks = {}), x = rs(u, "beforeRouteEnter", y, P, G), x.push(h), Pe(x))).then(() => {
        x = [];
        for (const g of o.list()) x.push(ht(g, y, P));
        return x.push(h), Pe(x);
      }).catch((g) => Xe(g, le.NAVIGATION_CANCELLED) ? g : Promise.reject(g));
    }
    function ne(y, P, x) {
      l.list().forEach((M) => G(() => M(y, P, x)));
    }
    function O(y, P, x, M, K) {
      const u = D(y, P);
      if (u) return u;
      const h = P === ft, g = Dt ? history.state : {};
      x && (M || h ? r.replace(y.fullPath, Q({
        scroll: h && g && g.scroll
      }, K)) : r.push(y.fullPath, K)), c.value = y, je(y, P, x, h), lt();
    }
    let z;
    function ae() {
      z || (z = r.listen((y, P, x) => {
        if (!vt.listening) return;
        const M = L(y), K = te(M, vt.currentRoute.value);
        if (K) {
          Z(Q(K, {
            replace: true,
            force: true
          }), M).catch(tn);
          return;
        }
        d = M;
        const u = c.value;
        Dt && Cf(Pr(u.fullPath, x.delta), Gn()), $(M, u).catch((h) => Xe(h, le.NAVIGATION_ABORTED | le.NAVIGATION_CANCELLED) ? h : Xe(h, le.NAVIGATION_GUARD_REDIRECT) ? (Z(Q(I(h.to), {
          force: true
        }), M).then((g) => {
          Xe(g, le.NAVIGATION_ABORTED | le.NAVIGATION_DUPLICATED) && !x.delta && x.type === vs.pop && r.go(-1, false);
        }).catch(tn), Promise.reject()) : (x.delta && r.go(-x.delta, false), J(h, M, u))).then((h) => {
          h = h || O(M, u, false), h && (x.delta && !Xe(h, le.NAVIGATION_CANCELLED) ? r.go(-x.delta, false) : x.type === vs.pop && Xe(h, le.NAVIGATION_ABORTED | le.NAVIGATION_DUPLICATED) && r.go(-1, false)), ne(M, u, h);
        }).catch(tn);
      }));
    }
    let xe = Wt(), fe = Wt(), ee;
    function J(y, P, x) {
      lt(y);
      const M = fe.list();
      return M.length ? M.forEach((K) => K(y, P, x)) : console.error(y), Promise.reject(y);
    }
    function Je() {
      return ee && c.value !== ft ? Promise.resolve() : new Promise((y, P) => {
        xe.add([
          y,
          P
        ]);
      });
    }
    function lt(y) {
      return ee || (ee = !y, ae(), xe.list().forEach(([P, x]) => y ? x(y) : P()), xe.reset()), y;
    }
    function je(y, P, x, M) {
      const { scrollBehavior: K } = e;
      if (!Dt || !K) return Promise.resolve();
      const u = !x && Sf(Pr(y.fullPath, 0)) || (M || !x) && history.state && history.state.scroll || null;
      return _i().then(() => K(y, P, u)).then((h) => h && Af(h)).catch((h) => J(h, y, P));
    }
    const Ae = (y) => r.go(y);
    let Pt;
    const It = /* @__PURE__ */ new Set(), vt = {
      currentRoute: c,
      listening: true,
      addRoute: m,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: T,
      resolve: L,
      options: e,
      push: N,
      replace: k,
      go: Ae,
      back: () => Ae(-1),
      forward: () => Ae(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: fe.add,
      isReady: Je,
      install(y) {
        y.component("RouterLink", Xf), y.component("RouterView", Ao), y.config.globalProperties.$router = vt, Object.defineProperty(y.config.globalProperties, "$route", {
          enumerable: true,
          get: () => Tt(c)
        }), Dt && !Pt && c.value === ft && (Pt = true, N(r.location).catch((M) => {
        }));
        const P = {};
        for (const M in ft) Object.defineProperty(P, M, {
          get: () => c.value[M],
          enumerable: true
        });
        y.provide(Gs, vt), y.provide(vo, hi(P)), y.provide(bs, c);
        const x = y.unmount;
        It.add(y), y.unmount = function() {
          It.delete(y), It.size < 1 && (d = ft, z && z(), z = null, c.value = ft, Pt = false, ee = false), x();
        };
      }
    };
    function Pe(y) {
      return y.reduce((P, x) => P.then(() => G(x)), Promise.resolve());
    }
    return vt;
  }
  const su = {
    class: "min-h-screen bg-[#f8f5f0] dark:bg-[#1c1917]"
  }, ru = Ms({
    __name: "App",
    setup(e) {
      return (t, n) => (Zi(), ic("div", su, [
        Ee(Tt(Ao))
      ]));
    }
  }), iu = "modulepreload", ou = function(e) {
    return "/" + e;
  }, kr = {}, $t = function(t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      let c = function(d) {
        return Promise.all(d.map((f) => Promise.resolve(f).then((a) => ({
          status: "fulfilled",
          value: a
        }), (a) => ({
          status: "rejected",
          reason: a
        }))));
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      r = c(n.map((d) => {
        if (d = ou(d), d in kr) return;
        kr[d] = true;
        const f = d.endsWith(".css"), a = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${d}"]${a}`)) return;
        const p = document.createElement("link");
        if (p.rel = f ? "stylesheet" : iu, f || (p.as = "script"), p.crossOrigin = "", p.href = d, l && p.setAttribute("nonce", l), document.head.appendChild(p), f) return new Promise((m, C) => {
          p.addEventListener("load", m), p.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${d}`)));
        });
      }));
    }
    function i(o) {
      const l = new Event("vite:preloadError", {
        cancelable: true
      });
      if (l.payload = o, window.dispatchEvent(l), !l.defaultPrevented) throw o;
    }
    return r.then((o) => {
      for (const l of o || []) l.status === "rejected" && i(l.reason);
      return t().catch(i);
    });
  }, lu = [
    {
      path: "/",
      component: () => $t(() => import("./HomeView-BqbaXKQZ.js"), __vite__mapDeps([0,1,2,3,4,5])),
      meta: {
        layout: "LayoutHsc"
      }
    },
    {
      path: "/music",
      component: () => $t(() => import("./MusicView-B8auzt5e.js"), __vite__mapDeps([6,1,2,7,8])),
      meta: {
        layout: "LayoutHsc"
      }
    },
    {
      path: "/books",
      component: () => $t(() => import("./BookView-D-9Y3gwY.js"), __vite__mapDeps([9,1,2,10,7,4,11])),
      meta: {
        layout: "LayoutHsc"
      }
    },
    {
      path: "/movies",
      component: () => $t(() => import("./MovieView-BqqvRe4Z.js"), __vite__mapDeps([12,1,2,3,7,13])),
      meta: {
        layout: "LayoutHsc"
      }
    },
    {
      path: "/perfume",
      component: () => $t(() => import("./PerfumeView-ac4d8g4f.js"), __vite__mapDeps([14,1,2,3,10,15])),
      meta: {
        layout: "LayoutHsc"
      }
    }
  ], cu = nu({
    history: Mf(),
    routes: lu
  });
  zc(ru).use(cu).mount("#app");
})();
export {
  $e as F,
  Xf as R,
  pu as T,
  __tla,
  Ee as a,
  no as b,
  ic as c,
  Ms as d,
  du as e,
  Zi as f,
  fc as g,
  De as h,
  fu as i,
  au as j,
  oc as k,
  hu as l,
  Rs as m,
  xs as n,
  Pi as o,
  uu as p,
  js as q,
  sl as r,
  Mo as t,
  Tt as u,
  pl as w
};
