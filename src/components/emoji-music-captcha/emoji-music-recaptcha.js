function it(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Tn(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = Z(o) ? Ei(o) : Tn(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else {
    if (Z(e))
      return e;
    if (H(e))
      return e;
  }
}
const _i = /;(?![^(]*\))/g, bi = /:([^]+)/, yi = /\/\*.*?\*\//gs;
function Ei(e) {
  const t = {};
  return e.replace(yi, "").split(_i).forEach((n) => {
    if (n) {
      const o = n.split(bi);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ot(e[n]);
      o && (t += o + " ");
    }
  else if (H(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Se(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !Z(t) && (e.class = Ot(t)), n && (e.style = Tn(n)), e;
}
const Ni = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Oi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", wi = /* @__PURE__ */ it(Ni), xi = /* @__PURE__ */ it(Oi), Di = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vi = /* @__PURE__ */ it(Di);
function Ys(e) {
  return !!e || e === "";
}
const lo = (e) => Z(e) ? e : e == null ? "" : $(e) || H(e) && (e.toString === Gs || !A(e.toString)) ? JSON.stringify(e, Qs, 2) : String(e), Qs = (e, t) => t && t.__v_isRef ? Qs(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : Zs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : H(t) && !$(t) && !er(t) ? String(t) : t, q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, kt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, Xs = () => !1, Ci = /^on[^a-z]/, rn = (e) => Ci.test(e), wn = (e) => e.startsWith("onUpdate:"), ee = Object.assign, Io = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Si = Object.prototype.hasOwnProperty, j = (e, t) => Si.call(e, t), $ = Array.isArray, gt = (e) => An(e) === "[object Map]", Zs = (e) => An(e) === "[object Set]", A = (e) => typeof e == "function", Z = (e) => typeof e == "string", Po = (e) => typeof e == "symbol", H = (e) => e !== null && typeof e == "object", ko = (e) => H(e) && A(e.then) && A(e.catch), Gs = Object.prototype.toString, An = (e) => Gs.call(e), Mo = (e) => An(e).slice(8, -1), er = (e) => An(e) === "[object Object]", Fo = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = /* @__PURE__ */ it(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $i = /* @__PURE__ */ it("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ti = /-(\w)/g, Ee = In((e) => e.replace(Ti, (t, n) => n ? n.toString().toUpperCase() : "")), Ai = /\B([A-Z])/g, ye = In((e) => e.replace(Ai, "-$1").toLowerCase()), wt = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ge = In((e) => e ? `on${wt(e)}` : ""), Zt = (e, t) => !Object.is(e, t), Ht = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, xn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ii = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, co = (e) => {
  const t = Z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ss;
const tr = () => ss || (ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ao(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class Pi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else
      process.env.NODE_ENV !== "production" && ao("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ae = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ki(e, t = Ae) {
  t && t.active && t.effects.push(e);
}
function Mi() {
  return Ae;
}
const Gt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, nr = (e) => (e.w & st) > 0, or = (e) => (e.n & st) > 0, Fi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= st;
}, ji = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      nr(s) && !or(s) ? s.delete(e) : t[n++] = s, s.w &= ~st, s.n &= ~st;
    }
    t.length = n;
  }
}, uo = /* @__PURE__ */ new WeakMap();
let Wt = 0, st = 1;
const fo = 30;
let me;
const vt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), po = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class jo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ki(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = me, n = ot;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = me, me = this, ot = !0, st = 1 << ++Wt, Wt <= fo ? Fi(this) : rs(this), this.fn();
    } finally {
      Wt <= fo && ji(this), st = 1 << --Wt, me = this.parent, ot = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (rs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function rs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ot = !0;
const sr = [];
function Dt() {
  sr.push(ot), ot = !1;
}
function Vt() {
  const e = sr.pop();
  ot = e === void 0 ? !0 : e;
}
function ve(e, t, n) {
  if (ot && me) {
    let o = uo.get(e);
    o || uo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Gt());
    const r = process.env.NODE_ENV !== "production" ? { effect: me, target: e, type: t, key: n } : void 0;
    ho(s, r);
  }
}
function ho(e, t) {
  let n = !1;
  Wt <= fo ? or(e) || (e.n |= st, n = !nr(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e), process.env.NODE_ENV !== "production" && me.onTrack && me.onTrack(Object.assign({ effect: me }, t)));
}
function We(e, t, n, o, s, r) {
  const i = uo.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && $(e)) {
    const f = Number(o);
    i.forEach((p, d) => {
      (d === "length" || d >= f) && l.push(p);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        $(e) ? Fo(n) && l.push(i.get("length")) : (l.push(i.get(vt)), gt(e) && l.push(i.get(po)));
        break;
      case "delete":
        $(e) || (l.push(i.get(vt)), gt(e) && l.push(i.get(po)));
        break;
      case "set":
        gt(e) && l.push(i.get(vt));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? It(l[0], a) : It(l[0]));
  else {
    const f = [];
    for (const p of l)
      p && f.push(...p);
    process.env.NODE_ENV !== "production" ? It(Gt(f), a) : It(Gt(f));
  }
}
function It(e, t) {
  const n = $(e) ? e : [...e];
  for (const o of n)
    o.computed && is(o, t);
  for (const o of n)
    o.computed || is(o, t);
}
function is(e, t) {
  (e !== me || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ee({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ri = /* @__PURE__ */ it("__proto__,__v_isRef,__isVue"), rr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Po)
), Li = /* @__PURE__ */ Pn(), Bi = /* @__PURE__ */ Pn(!1, !0), Hi = /* @__PURE__ */ Pn(!0), Ui = /* @__PURE__ */ Pn(!0, !0), ls = /* @__PURE__ */ Ki();
function Ki() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = P(this);
      for (let r = 0, i = this.length; r < i; r++)
        ve(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(P)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Dt();
      const o = P(this)[t].apply(this, n);
      return Vt(), o;
    };
  }), e;
}
function zi(e) {
  const t = P(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
function Pn(e = !1, t = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && r === (e ? t ? pr : dr : t ? fr : ur).get(o))
      return o;
    const i = $(o);
    if (!e) {
      if (i && j(ls, s))
        return Reflect.get(ls, s, r);
      if (s === "hasOwnProperty")
        return zi;
    }
    const l = Reflect.get(o, s, r);
    return (Po(s) ? rr.has(s) : Ri(s)) || (e || ve(o, "get", s), t) ? l : re(l) ? i && Fo(s) ? l : l.value : H(l) ? e ? hr(l) : Lo(l) : l;
  };
}
const Wi = /* @__PURE__ */ ir(), qi = /* @__PURE__ */ ir(!0);
function ir(e = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if (rt(i) && re(i) && !re(s))
      return !1;
    if (!e && (!Dn(s) && !rt(s) && (i = P(i), s = P(s)), !$(n) && re(i) && !re(s)))
      return i.value = s, !0;
    const l = $(n) && Fo(o) ? Number(o) < n.length : j(n, o), a = Reflect.set(n, o, s, r);
    return n === P(r) && (l ? Zt(s, i) && We(n, "set", o, s, i) : We(n, "add", o, s)), a;
  };
}
function Ji(e, t) {
  const n = j(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && We(e, "delete", t, void 0, o), s;
}
function Yi(e, t) {
  const n = Reflect.has(e, t);
  return (!Po(t) || !rr.has(t)) && ve(e, "has", t), n;
}
function Qi(e) {
  return ve(e, "iterate", $(e) ? "length" : vt), Reflect.ownKeys(e);
}
const lr = {
  get: Li,
  set: Wi,
  deleteProperty: Ji,
  has: Yi,
  ownKeys: Qi
}, cr = {
  get: Hi,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && ao(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && ao(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Xi = /* @__PURE__ */ ee({}, lr, {
  get: Bi,
  set: qi
}), Zi = /* @__PURE__ */ ee({}, cr, {
  get: Ui
}), Ro = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function fn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = P(e), r = P(t);
  n || (t !== r && ve(s, "get", t), ve(s, "get", r));
  const { has: i } = kn(s), l = o ? Ro : n ? Bo : en;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function dn(e, t = !1) {
  const n = this.__v_raw, o = P(n), s = P(e);
  return t || (e !== s && ve(o, "has", e), ve(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function pn(e, t = !1) {
  return e = e.__v_raw, !t && ve(P(e), "iterate", vt), Reflect.get(e, "size", e);
}
function cs(e) {
  e = P(e);
  const t = P(this);
  return kn(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function as(e, t) {
  t = P(t);
  const n = P(this), { has: o, get: s } = kn(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && ar(n, o, e) : (e = P(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? Zt(t, i) && We(n, "set", e, t, i) : We(n, "add", e, t), this;
}
function us(e) {
  const t = P(this), { has: n, get: o } = kn(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && ar(t, n, e) : (e = P(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && We(t, "delete", e, void 0, r), i;
}
function fs() {
  const e = P(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? gt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && We(e, "clear", void 0, void 0, n), o;
}
function hn(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = P(i), a = t ? Ro : e ? Bo : en;
    return !e && ve(l, "iterate", vt), i.forEach((f, p) => o.call(s, a(f), a(p), r));
  };
}
function mn(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = P(s), i = gt(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = s[e](...o), p = n ? Ro : t ? Bo : en;
    return !t && ve(r, "iterate", a ? po : vt), {
      // iterator protocol
      next() {
        const { value: d, done: m } = f.next();
        return m ? { value: d, done: m } : {
          value: l ? [p(d[0]), p(d[1])] : p(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ye(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${wt(e)} operation ${n}failed: target is readonly.`, P(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Gi() {
  const e = {
    get(r) {
      return fn(this, r);
    },
    get size() {
      return pn(this);
    },
    has: dn,
    add: cs,
    set: as,
    delete: us,
    clear: fs,
    forEach: hn(!1, !1)
  }, t = {
    get(r) {
      return fn(this, r, !1, !0);
    },
    get size() {
      return pn(this);
    },
    has: dn,
    add: cs,
    set: as,
    delete: us,
    clear: fs,
    forEach: hn(!1, !0)
  }, n = {
    get(r) {
      return fn(this, r, !0);
    },
    get size() {
      return pn(this, !0);
    },
    has(r) {
      return dn.call(this, r, !0);
    },
    add: Ye(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ye(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ye(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ye(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: hn(!0, !1)
  }, o = {
    get(r) {
      return fn(this, r, !0, !0);
    },
    get size() {
      return pn(this, !0);
    },
    has(r) {
      return dn.call(this, r, !0);
    },
    add: Ye(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ye(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ye(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ye(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: hn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = mn(r, !1, !1), n[r] = mn(r, !0, !1), t[r] = mn(r, !1, !0), o[r] = mn(r, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [el, tl, nl, ol] = /* @__PURE__ */ Gi();
function Mn(e, t) {
  const n = t ? e ? ol : nl : e ? tl : el;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(j(n, s) && s in o ? n : o, s, r);
}
const sl = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, rl = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, il = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, ll = {
  get: /* @__PURE__ */ Mn(!0, !0)
};
function ar(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const s = Mo(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const ur = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap();
function cl(e) {
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
function al(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cl(Mo(e));
}
function Lo(e) {
  return rt(e) ? e : Fn(e, !1, lr, sl, ur);
}
function ul(e) {
  return Fn(e, !1, Xi, rl, fr);
}
function hr(e) {
  return Fn(e, !0, cr, il, dr);
}
function Pt(e) {
  return Fn(e, !0, Zi, ll, pr);
}
function Fn(e, t, n, o, s) {
  if (!H(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = al(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return s.set(e, l), l;
}
function _t(e) {
  return rt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Dn(e) {
  return !!(e && e.__v_isShallow);
}
function mo(e) {
  return _t(e) || rt(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function mr(e) {
  return xn(e, "__v_skip", !0), e;
}
const en = (e) => H(e) ? Lo(e) : e, Bo = (e) => H(e) ? hr(e) : e;
function gr(e) {
  ot && me && (e = P(e), process.env.NODE_ENV !== "production" ? ho(e.dep || (e.dep = Gt()), {
    target: e,
    type: "get",
    key: "value"
  }) : ho(e.dep || (e.dep = Gt())));
}
function vr(e, t) {
  e = P(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? It(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : It(n));
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ze(e) {
  return fl(e, !1);
}
function fl(e, t) {
  return re(e) ? e : new dl(e, t);
}
class dl {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : P(t), this._value = n ? t : en(t);
  }
  get value() {
    return gr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Dn(t) || rt(t);
    t = n ? t : P(t), Zt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : en(t), vr(this, t));
  }
}
function _r(e) {
  return re(e) ? e.value : e;
}
const pl = {
  get: (e, t, n) => _r(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return re(s) && !re(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function br(e) {
  return _t(e) ? e : new Proxy(e, pl);
}
var yr;
class hl {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[yr] = !1, this._dirty = !0, this.effect = new jo(t, () => {
      this._dirty || (this._dirty = !0, vr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = P(this);
    return gr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
yr = "__v_isReadonly";
function ml(e, t, n = !1) {
  let o, s;
  const r = A(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, s = e.set);
  const i = new hl(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const bt = [];
function _n(e) {
  bt.push(e);
}
function bn() {
  bt.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Dt();
  const n = bt.length ? bt[bt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = gl();
  if (o)
    ze(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${zn(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...vl(s)), console.warn(...r);
  }
  Vt();
}
function gl() {
  let e = bt[bt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function vl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ..._l(n));
  }), t;
}
function _l({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${zn(e.component, e.type, o)}`, r = ">" + n;
  return e.props ? [s, ...bl(e.props), r] : [s + r];
}
function bl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Er(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Er(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = Er(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
function yl(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? b(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && b(`${t} is NaN - the duration expression might be incorrect.`));
}
const Ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function ze(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    jn(r, t, n);
  }
  return s;
}
function De(e, t, n, o) {
  if (A(e)) {
    const r = ze(e, t, n, o);
    return r && ko(r) && r.catch((i) => {
      jn(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(De(e[r], t, n, o));
  return s;
}
function jn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Ho[n] : n;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ze(a, null, 10, [e, i, l]);
      return;
    }
  }
  El(e, n, s, o);
}
function El(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ho[t];
    if (n && _n(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && bn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let tn = !1, go = !1;
const de = [];
let Re = 0;
const Mt = [];
let je = null, et = 0;
const Nr = /* @__PURE__ */ Promise.resolve();
let Uo = null;
const Nl = 100;
function Or(e) {
  const t = Uo || Nr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ol(e) {
  let t = Re + 1, n = de.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    nn(de[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Rn(e) {
  (!de.length || !de.includes(e, tn && e.allowRecurse ? Re + 1 : Re)) && (e.id == null ? de.push(e) : de.splice(Ol(e.id), 0, e), wr());
}
function wr() {
  !tn && !go && (go = !0, Uo = Nr.then(Vr));
}
function wl(e) {
  const t = de.indexOf(e);
  t > Re && de.splice(t, 1);
}
function xr(e) {
  $(e) ? Mt.push(...e) : (!je || !je.includes(e, e.allowRecurse ? et + 1 : et)) && Mt.push(e), wr();
}
function ds(e, t = tn ? Re + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < de.length; t++) {
    const n = de[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Ko(e, n))
        continue;
      de.splice(t, 1), t--, n();
    }
  }
}
function Dr(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)];
    if (Mt.length = 0, je) {
      je.push(...t);
      return;
    }
    for (je = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), je.sort((n, o) => nn(n) - nn(o)), et = 0; et < je.length; et++)
      process.env.NODE_ENV !== "production" && Ko(e, je[et]) || je[et]();
    je = null, et = 0;
  }
}
const nn = (e) => e.id == null ? 1 / 0 : e.id, xl = (e, t) => {
  const n = nn(e) - nn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vr(e) {
  go = !1, tn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), de.sort(xl);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ko(e, n) : ue;
  try {
    for (Re = 0; Re < de.length; Re++) {
      const n = de[Re];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ze(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Re = 0, de.length = 0, Dr(e), tn = !1, Uo = null, (de.length || Mt.length) && Vr(e);
  }
}
function Ko(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Nl) {
      const o = t.ownerInstance, s = o && Qo(o.type);
      return b(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let yt = !1;
const At = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (tr().__VUE_HMR_RUNTIME__ = {
  createRecord: Qn(Cr),
  rerender: Qn(Cl),
  reload: Qn(Sl)
});
const xt = /* @__PURE__ */ new Map();
function Dl(e) {
  const t = e.type.__hmrId;
  let n = xt.get(t);
  n || (Cr(t, e.type), n = xt.get(t)), n.instances.add(e);
}
function Vl(e) {
  xt.get(e.type.__hmrId).instances.delete(e);
}
function Cr(e, t) {
  return xt.has(e) ? !1 : (xt.set(e, {
    initialDef: Jt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Jt(e) {
  return fi(e) ? e.__vccOpts : e;
}
function Cl(e, t) {
  const n = xt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Jt(o.type).render = t), o.renderCache = [], yt = !0, o.update(), yt = !1;
  }));
}
function Sl(e, t) {
  const n = xt.get(e);
  if (!n)
    return;
  t = Jt(t), ps(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Jt(s.type);
    At.has(r) || (r !== n.initialDef && ps(r, t), At.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (At.add(r), s.ceReload(t.styles), At.delete(r)) : s.parent ? Rn(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  xr(() => {
    for (const s of o)
      At.delete(Jt(s.type));
  });
}
function ps(e, t) {
  ee(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Le, qt = [], vo = !1;
function ln(e, ...t) {
  Le ? Le.emit(e, ...t) : vo || qt.push({ event: e, args: t });
}
function Sr(e, t) {
  var n, o;
  Le = e, Le ? (Le.enabled = !0, qt.forEach(({ event: s, args: r }) => Le.emit(s, ...r)), qt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Sr(r, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vo = !0, qt = []);
  }, 3e3)) : (vo = !0, qt = []);
}
function $l(e, t) {
  ln("app:init", e, t, {
    Fragment: ge,
    Text: an,
    Comment: le,
    Static: Nn
  });
}
function Tl(e) {
  ln("app:unmount", e);
}
const Al = /* @__PURE__ */ zo(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), $r = /* @__PURE__ */ zo(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Il = /* @__PURE__ */ zo(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Pl = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && Il(e);
};
function zo(e) {
  return (t) => {
    ln(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const kl = /* @__PURE__ */ Tr(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Ml = /* @__PURE__ */ Tr(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Tr(e) {
  return (t, n, o) => {
    ln(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Fl(e, t, n) {
  ln("component:emit", e.appContext.app, e, t, n);
}
function jl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || q;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(Ge(t) in d)) && b(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ge(t)}" prop.`);
      else {
        const m = p[t];
        A(m) && (m(...n) || b(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = o[p] || q;
    m && (s = n.map((w) => Z(w) ? w.trim() : w)), d && (s = n.map(Ii));
  }
  if (process.env.NODE_ENV !== "production" && Fl(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Ge(p)] && b(`Event "${p}" is emitted in component ${zn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ye(t)}" instead of "${t}".`);
  }
  let l, a = o[l = Ge(t)] || // also try camelCase event handler (#2249)
  o[l = Ge(Ee(t))];
  !a && r && (a = o[l = Ge(ye(t))]), a && De(a, e, 6, s);
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, De(f, e, 6, s);
  }
}
function Ar(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!A(e)) {
    const a = (f) => {
      const p = Ar(f, t, !0);
      p && (l = !0, ee(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (H(e) && o.set(e, null), null) : ($(r) ? r.forEach((a) => i[a] = null) : ee(i, r), H(e) && o.set(e, i), i);
}
function Ln(e, t) {
  return !e || !rn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, ye(t)) || j(e, t));
}
let ie = null, Ir = null;
function Vn(e) {
  const t = ie;
  return ie = e, Ir = e && e.type.__scopeId || null, t;
}
function Pr(e, t = ie, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Ds(-1);
    const r = Vn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Vn(r), o._d && Ds(1);
    }
    return process.env.NODE_ENV !== "production" && $r(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let _o = !1;
function Cn() {
  _o = !0;
}
function Xn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: r, propsOptions: [i], slots: l, attrs: a, emit: f, render: p, renderCache: d, data: m, setupState: w, ctx: T, inheritAttrs: V } = e;
  let F, J;
  const X = Vn(e);
  process.env.NODE_ENV !== "production" && (_o = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = s || o;
      F = Ie(p.call(K, K, d, r, w, m, T)), J = a;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && a === r && Cn(), F = Ie(K.length > 1 ? K(r, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Cn(), a;
        },
        slots: l,
        emit: f
      } : { attrs: a, slots: l, emit: f }) : K(
        r,
        null
        /* we know it doesn't need it */
      )), J = t.props ? a : Ll(a);
    }
  } catch (K) {
    Qt.length = 0, jn(
      K,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), F = fe(le);
  }
  let z = F, k;
  if (process.env.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([z, k] = Rl(F)), J && V !== !1) {
    const K = Object.keys(J), { shapeFlag: Ne } = z;
    if (K.length) {
      if (Ne & 7)
        i && K.some(wn) && (J = Bl(J, i)), z = Be(z, J);
      else if (process.env.NODE_ENV !== "production" && !_o && z.type !== le) {
        const Oe = Object.keys(a), M = [], U = [];
        for (let Y = 0, se = Oe.length; Y < se; Y++) {
          const D = Oe[Y];
          rn(D) ? wn(D) || M.push(D[2].toLowerCase() + D.slice(3)) : U.push(D);
        }
        U.length && b(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && b(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !hs(z) && b("Runtime directive used on component with non-element root node. The directives will not function as intended."), z = Be(z), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !hs(z) && b("Component inside <Transition> renders non-element root node that cannot be animated."), z.transition = n.transition), process.env.NODE_ENV !== "production" && k ? k(z) : F = z, Vn(X), F;
}
const Rl = (e) => {
  const t = e.children, n = e.dynamicChildren, o = kr(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ie(o), i];
};
function kr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Ft(o)) {
      if (o.type !== le || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ll = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || rn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Bl = (e, t) => {
  const n = {};
  for (const o in e)
    (!wn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, hs = (e) => e.shapeFlag & 7 || e.type === le;
function Hl(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && yt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? ms(o, i, f) : !!i;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const m = p[d];
        if (i[m] !== o[m] && !Ln(f, m))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? ms(o, i, f) : !0 : !!i;
  return !1;
}
function ms(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Ln(n, r))
      return !0;
  }
  return !1;
}
function Ul({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Kl = (e) => e.__isSuspense;
function zl(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : xr(e);
}
function Wl(e, t) {
  if (!ne)
    process.env.NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function yn(e, t, n = !1) {
  const o = ne || ie;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const gn = {};
function Zn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Mr(e, t, n);
}
function Mr(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = q) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (k) => {
    b("Invalid watch source: ", k, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Mi() === (ne == null ? void 0 : ne.scope) ? ne : null;
  let f, p = !1, d = !1;
  if (re(e) ? (f = () => e.value, p = Dn(e)) : _t(e) ? (f = () => e, o = !0) : $(e) ? (d = !0, p = e.some((k) => _t(k) || Dn(k)), f = () => e.map((k) => {
    if (re(k))
      return k.value;
    if (_t(k))
      return ht(k);
    if (A(k))
      return ze(
        k,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(k);
  })) : A(e) ? t ? f = () => ze(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : f = () => {
    if (!(a && a.isUnmounted))
      return m && m(), De(e, a, 3, [w]);
  } : (f = ue, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const k = f;
    f = () => ht(k());
  }
  let m, w = (k) => {
    m = X.onStop = () => {
      ze(
        k,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, T;
  if (sn)
    if (w = ue, t ? n && De(t, a, 3, [
      f(),
      d ? [] : void 0,
      w
    ]) : f(), s === "sync") {
      const k = Xc();
      T = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return ue;
  let V = d ? new Array(e.length).fill(gn) : gn;
  const F = () => {
    if (X.active)
      if (t) {
        const k = X.run();
        (o || p || (d ? k.some((K, Ne) => Zt(K, V[Ne])) : Zt(k, V))) && (m && m(), De(t, a, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          V === gn ? void 0 : d && V[0] === gn ? [] : V,
          w
        ]), V = k);
      } else
        X.run();
  };
  F.allowRecurse = !!t;
  let J;
  s === "sync" ? J = F : s === "post" ? J = () => _e(F, a && a.suspense) : (F.pre = !0, a && (F.id = a.uid), J = () => Rn(F));
  const X = new jo(f, J);
  process.env.NODE_ENV !== "production" && (X.onTrack = r, X.onTrigger = i), t ? n ? F() : V = X.run() : s === "post" ? _e(X.run.bind(X), a && a.suspense) : X.run();
  const z = () => {
    X.stop(), a && a.scope && Io(a.scope.effects, X);
  };
  return T && T.push(z), z;
}
function ql(e, t, n) {
  const o = this.proxy, s = Z(e) ? e.includes(".") ? Fr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const i = ne;
  Rt(this);
  const l = Mr(s, r.bind(o), n);
  return i ? Rt(i) : Nt(), l;
}
function Fr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ht(e, t) {
  if (!H(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), re(e))
    ht(e.value, t);
  else if ($(e))
    for (let n = 0; n < e.length; n++)
      ht(e[n], t);
  else if (Zs(e) || gt(e))
    e.forEach((n) => {
      ht(n, t);
    });
  else if (er(e))
    for (const n in e)
      ht(e[n], t);
  return e;
}
function Jl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Hn(() => {
    e.isMounted = !0;
  }), Ur(() => {
    e.isUnmounting = !0;
  }), e;
}
const xe = [Function, Array], Yl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: xe,
    onEnter: xe,
    onAfterEnter: xe,
    onEnterCancelled: xe,
    // leave
    onBeforeLeave: xe,
    onLeave: xe,
    onAfterLeave: xe,
    onLeaveCancelled: xe,
    // appear
    onBeforeAppear: xe,
    onAppear: xe,
    onAfterAppear: xe,
    onAppearCancelled: xe
  },
  setup(e, { slots: t }) {
    const n = Bc(), o = Jl();
    let s;
    return () => {
      const r = t.default && Lr(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let V = !1;
        for (const F of r)
          if (F.type !== le) {
            if (process.env.NODE_ENV !== "production" && V) {
              b("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = F, V = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = P(e), { mode: a } = l;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && b(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Gn(i);
      const f = gs(i);
      if (!f)
        return Gn(i);
      const p = bo(f, l, o, n);
      yo(f, p);
      const d = n.subTree, m = d && gs(d);
      let w = !1;
      const { getTransitionKey: T } = f.type;
      if (T) {
        const V = T();
        s === void 0 ? s = V : V !== s && (s = V, w = !0);
      }
      if (m && m.type !== le && (!dt(f, m) || w)) {
        const V = bo(m, l, o, n);
        if (yo(m, V), a === "out-in")
          return o.isLeaving = !0, V.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Gn(i);
        a === "in-out" && f.type !== le && (V.delayLeave = (F, J, X) => {
          const z = Rr(o, m);
          z[String(m.key)] = m, F._leaveCb = () => {
            J(), F._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = X;
        });
      }
      return i;
    };
  }
}, jr = Yl;
function Rr(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function bo(e, t, n, o) {
  const { appear: s, mode: r, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: m, onAfterLeave: w, onLeaveCancelled: T, onBeforeAppear: V, onAppear: F, onAfterAppear: J, onAppearCancelled: X } = t, z = String(e.key), k = Rr(n, e), K = (M, U) => {
    M && De(M, o, 9, U);
  }, Ne = (M, U) => {
    const Y = U[1];
    K(M, U), $(M) ? M.every((se) => se.length <= 1) && Y() : M.length <= 1 && Y();
  }, Oe = {
    mode: r,
    persisted: i,
    beforeEnter(M) {
      let U = l;
      if (!n.isMounted)
        if (s)
          U = V || l;
        else
          return;
      M._leaveCb && M._leaveCb(
        !0
        /* cancelled */
      );
      const Y = k[z];
      Y && dt(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), K(U, [M]);
    },
    enter(M) {
      let U = a, Y = f, se = p;
      if (!n.isMounted)
        if (s)
          U = F || a, Y = J || f, se = X || p;
        else
          return;
      let D = !1;
      const G = M._enterCb = (we) => {
        D || (D = !0, we ? K(se, [M]) : K(Y, [M]), Oe.delayedLeave && Oe.delayedLeave(), M._enterCb = void 0);
      };
      U ? Ne(U, [M, G]) : G();
    },
    leave(M, U) {
      const Y = String(e.key);
      if (M._enterCb && M._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return U();
      K(d, [M]);
      let se = !1;
      const D = M._leaveCb = (G) => {
        se || (se = !0, U(), G ? K(T, [M]) : K(w, [M]), M._leaveCb = void 0, k[Y] === e && delete k[Y]);
      };
      k[Y] = e, m ? Ne(m, [M, D]) : D();
    },
    clone(M) {
      return bo(M, t, n, o);
    }
  };
  return Oe;
}
function Gn(e) {
  if (cn(e))
    return e = Be(e), e.children = null, e;
}
function gs(e) {
  return cn(e) ? e.children ? e.children[0] : void 0 : e;
}
function yo(e, t) {
  e.shapeFlag & 6 && e.component ? yo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lr(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ge ? (i.patchFlag & 128 && s++, o = o.concat(Lr(i.children, t, l))) : (t || i.type !== le) && o.push(l != null ? Be(i, { key: l }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function Br(e) {
  return A(e) ? { setup: e, name: e.name } : e;
}
const Yt = (e) => !!e.type.__asyncLoader, cn = (e) => e.type.__isKeepAlive;
function Ql(e, t) {
  Hr(e, "a", t);
}
function Xl(e, t) {
  Hr(e, "da", t);
}
function Hr(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Bn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      cn(s.parent.vnode) && Zl(o, t, n, s), s = s.parent;
  }
}
function Zl(e, t, n, o) {
  const s = Bn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Kr(() => {
    Io(o[t], s);
  }, n);
}
function Bn(e, t, n = ne, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Dt(), Rt(n);
      const l = De(t, n, e, i);
      return Nt(), Vt(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Ge(Ho[e].replace(/ hook$/, ""));
    b(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const qe = (e) => (t, n = ne) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!sn || e === "sp") && Bn(e, (...o) => t(...o), n)
), Gl = qe(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Hn = qe(
  "m"
  /* LifecycleHooks.MOUNTED */
), ec = qe(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), tc = qe(
  "u"
  /* LifecycleHooks.UPDATED */
), Ur = qe(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Kr = qe(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), nc = qe(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), oc = qe(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), sc = qe(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function rc(e, t = ne) {
  Bn("ec", e, t);
}
function zr(e) {
  $i(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function eo(e, t) {
  const n = ie;
  if (n === null)
    return process.env.NODE_ENV !== "production" && b("withDirectives can only be used inside render functions."), e;
  const o = Kn(n) || n.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, a, f = q] = t[r];
    i && (A(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ht(l), s.push({
      dir: i,
      instance: o,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: f
    }));
  }
  return e;
}
function lt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[o];
    a && (Dt(), De(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Vt());
  }
}
const Eo = "components", ic = "directives", Wr = Symbol();
function to(e) {
  return Z(e) ? qr(Eo, e, !1) || e : e || Wr;
}
function lc(e) {
  return qr(ic, e);
}
function qr(e, t, n = !0, o = !1) {
  const s = ie || ne;
  if (s) {
    const r = s.type;
    if (e === Eo) {
      const l = Qo(
        r,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === t || l === Ee(t) || l === wt(Ee(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      vs(s[e] || r[e], t) || // global registration
      vs(s.appContext[e], t)
    );
    if (!i && o)
      return r;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === Eo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      b(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && b(`resolve${wt(e.slice(0, -1))} can only be used in render() or setup().`);
}
function vs(e, t) {
  return e && (e[t] || e[Ee(t)] || e[wt(Ee(t))]);
}
function _s(e, t, n, o) {
  let s;
  const r = n && n[o];
  if ($(e) || Z(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && b(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (H(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, r && r[l]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const f = i[l];
        s[l] = t(e[f], f, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
function $e(e, t, n = {}, o, s) {
  if (ie.isCE || ie.parent && Yt(ie.parent) && ie.parent.isCE)
    return t !== "default" && (n.name = t), fe("slot", n, o && o());
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (b("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), r = () => []), r && r._c && (r._d = !1), te();
  const i = r && Jr(r(n)), l = Xt(
    ge,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Jr(e) {
  return e.some((t) => Ft(t) ? !(t.type === le || t.type === ge && !Jr(t.children)) : !0) ? e : null;
}
function cc(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !H(e))
    return b("v-on with no argument expects an object value."), n;
  for (const o in e)
    n[t && /[A-Z]/.test(o) ? `on:${o}` : Ge(o)] = e[o];
  return n;
}
const No = (e) => e ? ci(e) ? Kn(e) || e.proxy : No(e.parent) : null, Et = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Pt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Pt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Pt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Pt(e.refs) : e.refs,
    $parent: (e) => No(e.parent),
    $root: (e) => No(e.root),
    $emit: (e) => e.emit,
    $options: (e) => qo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Rn(e.update)),
    $nextTick: (e) => e.n || (e.n = Or.bind(e.proxy)),
    $watch: (e) => ql.bind(e)
  })
), Wo = (e) => e === "_" || e === "$", no = (e, t) => e !== q && !e.__isScriptSetup && j(e, t), Yr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (no(o, t))
          return i[t] = 1, o[t];
        if (s !== q && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && j(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== q && j(n, t))
          return i[t] = 4, n[t];
        Oo && (i[t] = 0);
      }
    }
    const p = Et[t];
    let d, m;
    if (p)
      return t === "$attrs" && (ve(e, "get", t), process.env.NODE_ENV !== "production" && Cn()), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== q && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, j(m, t)
    )
      return m[t];
    process.env.NODE_ENV !== "production" && ie && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== q && Wo(t[0]) && j(s, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ie && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return no(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== q && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let l;
    return !!n[i] || e !== q && j(e, i) || no(t, i) || (l = r[0]) && j(l, i) || j(o, i) || j(Et, i) || j(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Yr.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function ac(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Et).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Et[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function uc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function fc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Wo(o[0])) {
        b(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function dc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Oo = !0;
function pc(e) {
  const t = qo(e), n = e.proxy, o = e.ctx;
  Oo = !1, t.beforeCreate && bs(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: p,
    beforeMount: d,
    mounted: m,
    beforeUpdate: w,
    updated: T,
    activated: V,
    deactivated: F,
    beforeDestroy: J,
    beforeUnmount: X,
    destroyed: z,
    unmounted: k,
    render: K,
    renderTracked: Ne,
    renderTriggered: Oe,
    errorCaptured: M,
    serverPrefetch: U,
    // public API
    expose: Y,
    inheritAttrs: se,
    // assets
    components: D,
    directives: G,
    filters: we
  } = t, Ve = process.env.NODE_ENV !== "production" ? dc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const B in L)
        Ve("Props", B);
  }
  if (f && hc(f, o, Ve, e.appContext.config.unwrapInjectedRef), i)
    for (const L in i) {
      const B = i[L];
      A(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = B.bind(n), process.env.NODE_ENV !== "production" && Ve("Methods", L)) : process.env.NODE_ENV !== "production" && b(`Method "${L}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !A(s) && b("The data option must be a function. Plain object usage is no longer supported.");
    const L = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && ko(L) && b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !H(L))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = Lo(L), process.env.NODE_ENV !== "production")
      for (const B in L)
        Ve("Data", B), Wo(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => L[B],
          set: ue
        });
  }
  if (Oo = !0, r)
    for (const L in r) {
      const B = r[L], ke = A(B) ? B.bind(n, n) : A(B.get) ? B.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && ke === ue && b(`Computed property "${L}" has no getter.`);
      const Wn = !A(B) && A(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(`Write operation failed: computed property "${L}" is readonly.`);
      } : ue, Lt = Jc({
        get: ke,
        set: Wn
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (Ct) => Lt.value = Ct
      }), process.env.NODE_ENV !== "production" && Ve("Computed", L);
    }
  if (l)
    for (const L in l)
      Qr(l[L], o, n, L);
  if (a) {
    const L = A(a) ? a.call(n) : a;
    Reflect.ownKeys(L).forEach((B) => {
      Wl(B, L[B]);
    });
  }
  p && bs(
    p,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ce(L, B) {
    $(B) ? B.forEach((ke) => L(ke.bind(n))) : B && L(B.bind(n));
  }
  if (ce(Gl, d), ce(Hn, m), ce(ec, w), ce(tc, T), ce(Ql, V), ce(Xl, F), ce(rc, M), ce(sc, Ne), ce(oc, Oe), ce(Ur, X), ce(Kr, k), ce(nc, U), $(Y))
    if (Y.length) {
      const L = e.exposed || (e.exposed = {});
      Y.forEach((B) => {
        Object.defineProperty(L, B, {
          get: () => n[B],
          set: (ke) => n[B] = ke
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === ue && (e.render = K), se != null && (e.inheritAttrs = se), D && (e.components = D), G && (e.directives = G);
}
function hc(e, t, n = ue, o = !1) {
  $(e) && (e = wo(e));
  for (const s in e) {
    const r = e[s];
    let i;
    H(r) ? "default" in r ? i = yn(
      r.from || s,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = yn(r.from || s) : i = yn(r), re(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && b(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function bs(e, t, n) {
  De($(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qr(e, t, n, o) {
  const s = o.includes(".") ? Fr(n, o) : () => n[o];
  if (Z(e)) {
    const r = t[e];
    A(r) ? Zn(s, r) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    Zn(s, e.bind(n));
  else if (H(e))
    if ($(e))
      e.forEach((r) => Qr(r, t, n, o));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? Zn(s, r, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function qo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach((f) => Sn(a, f, i, !0)), Sn(a, t, i)), H(t) && r.set(t, a), a;
}
function Sn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Sn(e, r, n, !0), s && s.forEach((i) => Sn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = mc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const mc = {
  data: ys,
  props: ft,
  emits: ft,
  // objects
  methods: ft,
  computed: ft,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: ft,
  directives: ft,
  // watch
  watch: vc,
  // provide / inject
  provide: ys,
  inject: gc
};
function ys(e, t) {
  return t ? e ? function() {
    return ee(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t);
  } : t : e;
}
function gc(e, t) {
  return ft(wo(e), wo(t));
}
function wo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? ee(ee(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function vc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ee(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = he(e[o], t[o]);
  return n;
}
function _c(e, t, n, o = !1) {
  const s = {}, r = {};
  xn(r, Un, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Gr(t || {}, s, e), n ? e.props = o ? s : ul(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function bc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function yc(e, t, n, o) {
  const { props: s, attrs: r, vnode: { patchFlag: i } } = e, l = P(s), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && bc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let m = p[d];
        if (Ln(e.emitsOptions, m))
          continue;
        const w = t[m];
        if (a)
          if (j(r, m))
            w !== r[m] && (r[m] = w, f = !0);
          else {
            const T = Ee(m);
            s[T] = xo(
              a,
              l,
              T,
              w,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          w !== r[m] && (r[m] = w, f = !0);
      }
    }
  } else {
    Xr(e, t, s, r) && (f = !0);
    let p;
    for (const d in l)
      (!t || // for camelCase
      !j(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ye(d)) === d || !j(t, p))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[d] = xo(
        a,
        l,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[d]);
    if (r !== l)
      for (const d in r)
        (!t || !j(t, d)) && (delete r[d], f = !0);
  }
  f && We(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Gr(t || {}, s, e);
}
function Xr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (vn(a))
        continue;
      const f = t[a];
      let p;
      s && j(s, p = Ee(a)) ? !r || !r.includes(p) ? n[p] = f : (l || (l = {}))[p] = f : Ln(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (r) {
    const a = P(n), f = l || q;
    for (let p = 0; p < r.length; p++) {
      const d = r[p];
      n[d] = xo(s, a, d, f[d], e, !j(f, d));
    }
  }
  return i;
}
function xo(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && A(a)) {
        const { propsDefaults: f } = s;
        n in f ? o = f[n] : (Rt(s), o = f[n] = a.call(null, t), Nt());
      } else
        o = a;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === ye(n)) && (o = !0));
  }
  return o;
}
function Zr(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!A(e)) {
    const p = (d) => {
      a = !0;
      const [m, w] = Zr(d, t, !0);
      ee(i, m), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !a)
    return H(e) && o.set(e, kt), kt;
  if ($(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !Z(r[p]) && b("props must be strings when using array syntax.", r[p]);
      const d = Ee(r[p]);
      Es(d) && (i[d] = q);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !H(r) && b("invalid props options", r);
    for (const p in r) {
      const d = Ee(p);
      if (Es(d)) {
        const m = r[p], w = i[d] = $(m) || A(m) ? { type: m } : Object.assign({}, m);
        if (w) {
          const T = Os(Boolean, w.type), V = Os(String, w.type);
          w[
            0
            /* BooleanFlags.shouldCast */
          ] = T > -1, w[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = V < 0 || T < V, (T > -1 || j(w, "default")) && l.push(d);
        }
      }
    }
  }
  const f = [i, l];
  return H(e) && o.set(e, f), f;
}
function Es(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Do(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ns(e, t) {
  return Do(e) === Do(t);
}
function Os(e, t) {
  return $(t) ? t.findIndex((n) => Ns(n, e)) : A(t) && Ns(t, e) ? 0 : -1;
}
function Gr(e, t, n) {
  const o = P(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && Ec(r, o[r], i, !j(e, r) && !j(e, ye(r)));
  }
}
function Ec(e, t, n, o) {
  const { type: s, required: r, validator: i } = n;
  if (r && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let l = !1;
      const a = $(s) ? s : [s], f = [];
      for (let p = 0; p < a.length && !l; p++) {
        const { valid: d, expectedType: m } = Oc(t, a[p]);
        f.push(m || ""), l = d;
      }
      if (!l) {
        b(wc(e, t, f));
        return;
      }
    }
    i && !i(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Nc = /* @__PURE__ */ it("String,Number,Boolean,Function,Symbol,BigInt");
function Oc(e, t) {
  let n;
  const o = Do(t);
  if (Nc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = H(e) : o === "Array" ? n = $(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function wc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(wt).join(" | ")}`;
  const s = n[0], r = Mo(t), i = ws(t, s), l = ws(t, r);
  return n.length === 1 && xs(s) && !xc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, xs(r) && (o += `with value ${l}.`), o;
}
function ws(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function xs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ei = (e) => e[0] === "_" || e === "$stable", Jo = (e) => $(e) ? e.map(Ie) : [Ie(e)], Dc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Pr((...s) => (process.env.NODE_ENV !== "production" && ne && b(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Jo(t(...s))), n);
  return o._c = !1, o;
}, ti = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (ei(s))
      continue;
    const r = e[s];
    if (A(r))
      t[s] = Dc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && b(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = Jo(r);
      t[s] = () => i;
    }
  }
}, ni = (e, t) => {
  process.env.NODE_ENV !== "production" && !cn(e.vnode) && b("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Jo(t);
  e.slots.default = () => n;
}, Vc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), xn(t, "_", n)) : ti(t, e.slots = {});
  } else
    e.slots = {}, t && ni(e, t);
  xn(e.slots, Un, 1);
}, Cc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && yt ? ee(s, t) : n && l === 1 ? r = !1 : (ee(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, ti(t, s)), i = t;
  } else
    t && (ni(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !ei(l) && !(l in i) && delete s[l];
};
function oi() {
  return {
    app: null,
    config: {
      isNativeTag: Xs,
      performance: !1,
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
let Sc = 0;
function $c(e, t) {
  return function(o, s = null) {
    A(o) || (o = Object.assign({}, o)), s != null && !H(s) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), s = null);
    const r = oi(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = r.app = {
      _uid: Sc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ss,
      get config() {
        return r.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && b("app.config cannot be replaced. Modify individual options instead.");
      },
      use(f, ...p) {
        return i.has(f) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : f && A(f.install) ? (i.add(f), f.install(a, ...p)) : A(f) ? (i.add(f), f(a, ...p)) : process.env.NODE_ENV !== "production" && b('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(f) {
        return r.mixins.includes(f) ? process.env.NODE_ENV !== "production" && b("Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")) : r.mixins.push(f), a;
      },
      component(f, p) {
        return process.env.NODE_ENV !== "production" && So(f, r.config), p ? (process.env.NODE_ENV !== "production" && r.components[f] && b(`Component "${f}" has already been registered in target app.`), r.components[f] = p, a) : r.components[f];
      },
      directive(f, p) {
        return process.env.NODE_ENV !== "production" && zr(f), p ? (process.env.NODE_ENV !== "production" && r.directives[f] && b(`Directive "${f}" has already been registered in target app.`), r.directives[f] = p, a) : r.directives[f];
      },
      mount(f, p, d) {
        if (l)
          process.env.NODE_ENV !== "production" && b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const m = fe(o, s);
          return m.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(Be(m), f, d);
          }), p && t ? t(m, f) : e(m, f, d), l = !0, a._container = f, f.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = m.component, $l(a, Ss)), Kn(m.component) || m.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Tl(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(f, p) {
        return process.env.NODE_ENV !== "production" && f in r.provides && b(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`), r.provides[f] = p, a;
      }
    };
    return a;
  };
}
function Vo(e, t, n, o, s = !1) {
  if ($(e)) {
    e.forEach((m, w) => Vo(m, t && ($(t) ? t[w] : t), n, o, s));
    return;
  }
  if (Yt(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? Kn(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const f = t && t.r, p = l.refs === q ? l.refs = {} : l.refs, d = l.setupState;
  if (f != null && f !== a && (Z(f) ? (p[f] = null, j(d, f) && (d[f] = null)) : re(f) && (f.value = null)), A(a))
    ze(a, l, 12, [i, p]);
  else {
    const m = Z(a), w = re(a);
    if (m || w) {
      const T = () => {
        if (e.f) {
          const V = m ? j(d, a) ? d[a] : p[a] : a.value;
          s ? $(V) && Io(V, r) : $(V) ? V.includes(r) || V.push(r) : m ? (p[a] = [r], j(d, a) && (d[a] = p[a])) : (a.value = [r], e.k && (p[e.k] = a.value));
        } else
          m ? (p[a] = i, j(d, a) && (d[a] = i)) : w ? (a.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (T.id = -1, _e(T, n)) : T();
    } else
      process.env.NODE_ENV !== "production" && b("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Ut, nt;
function Ue(e, t) {
  e.appContext.config.performance && $n() && nt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && kl(e, t, $n() ? nt.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && $n()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    nt.mark(o), nt.measure(`<${zn(e, e.type)}> ${t}`, n, o), nt.clearMarks(n), nt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ml(e, t, $n() ? nt.now() : Date.now());
}
function $n() {
  return Ut !== void 0 || (typeof window < "u" && window.performance ? (Ut = !0, nt = window.performance) : Ut = !1), Ut;
}
function Tc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const _e = zl;
function Ac(e) {
  return Ic(e);
}
function Ic(e, t) {
  Tc();
  const n = tr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Sr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: r, createElement: i, createText: l, createComment: a, setText: f, setElementText: p, parentNode: d, nextSibling: m, setScopeId: w = ue, insertStaticContent: T } = e, V = (c, u, h, v = null, g = null, E = null, O = !1, y = null, N = process.env.NODE_ENV !== "production" && yt ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !dt(c, u) && (v = un(c), Je(c, g, E, !0), c = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: _, ref: C, shapeFlag: x } = u;
    switch (_) {
      case an:
        F(c, u, h, v);
        break;
      case le:
        J(c, u, h, v);
        break;
      case Nn:
        c == null ? X(u, h, v, O) : process.env.NODE_ENV !== "production" && z(c, u, h, O);
        break;
      case ge:
        G(c, u, h, v, g, E, O, y, N);
        break;
      default:
        x & 1 ? Ne(c, u, h, v, g, E, O, y, N) : x & 6 ? we(c, u, h, v, g, E, O, y, N) : x & 64 || x & 128 ? _.process(c, u, h, v, g, E, O, y, N, St) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", _, `(${typeof _})`);
    }
    C != null && g && Vo(C, c && c.ref, E, u || c, !u);
  }, F = (c, u, h, v) => {
    if (c == null)
      o(u.el = l(u.children), h, v);
    else {
      const g = u.el = c.el;
      u.children !== c.children && f(g, u.children);
    }
  }, J = (c, u, h, v) => {
    c == null ? o(u.el = a(u.children || ""), h, v) : u.el = c.el;
  }, X = (c, u, h, v) => {
    [c.el, c.anchor] = T(c.children, u, h, v, c.el, c.anchor);
  }, z = (c, u, h, v) => {
    if (u.children !== c.children) {
      const g = m(c.anchor);
      K(c), [u.el, u.anchor] = T(u.children, h, g, v);
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, k = ({ el: c, anchor: u }, h, v) => {
    let g;
    for (; c && c !== u; )
      g = m(c), o(c, h, v), c = g;
    o(u, h, v);
  }, K = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = m(c), s(c), c = h;
    s(u);
  }, Ne = (c, u, h, v, g, E, O, y, N) => {
    O = O || u.type === "svg", c == null ? Oe(u, h, v, g, E, O, y, N) : Y(c, u, g, E, O, y, N);
  }, Oe = (c, u, h, v, g, E, O, y) => {
    let N, _;
    const { type: C, props: x, shapeFlag: S, transition: I, dirs: R } = c;
    if (N = c.el = i(c.type, E, x && x.is, x), S & 8 ? p(N, c.children) : S & 16 && U(c.children, N, null, v, g, E && C !== "foreignObject", O, y), R && lt(c, null, v, "created"), M(N, c, c.scopeId, O, v), x) {
      for (const W in x)
        W !== "value" && !vn(W) && r(N, W, null, x[W], E, c.children, v, g, He);
      "value" in x && r(N, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Fe(_, v, c);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(N, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(N, "__vueParentComponent", {
      value: v,
      enumerable: !1
    })), R && lt(c, null, v, "beforeMount");
    const Q = (!g || g && !g.pendingBranch) && I && !I.persisted;
    Q && I.beforeEnter(N), o(N, u, h), ((_ = x && x.onVnodeMounted) || Q || R) && _e(() => {
      _ && Fe(_, v, c), Q && I.enter(N), R && lt(c, null, v, "mounted");
    }, g);
  }, M = (c, u, h, v, g) => {
    if (h && w(c, h), v)
      for (let E = 0; E < v.length; E++)
        w(c, v[E]);
    if (g) {
      let E = g.subTree;
      if (process.env.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = kr(E.children) || E), u === E) {
        const O = g.vnode;
        M(c, O, O.scopeId, O.slotScopeIds, g.parent);
      }
    }
  }, U = (c, u, h, v, g, E, O, y, N = 0) => {
    for (let _ = N; _ < c.length; _++) {
      const C = c[_] = y ? tt(c[_]) : Ie(c[_]);
      V(null, C, u, h, v, g, E, O, y);
    }
  }, Y = (c, u, h, v, g, E, O) => {
    const y = u.el = c.el;
    let { patchFlag: N, dynamicChildren: _, dirs: C } = u;
    N |= c.patchFlag & 16;
    const x = c.props || q, S = u.props || q;
    let I;
    h && ct(h, !1), (I = S.onVnodeBeforeUpdate) && Fe(I, h, u, c), C && lt(u, c, h, "beforeUpdate"), h && ct(h, !0), process.env.NODE_ENV !== "production" && yt && (N = 0, O = !1, _ = null);
    const R = g && u.type !== "foreignObject";
    if (_ ? (se(c.dynamicChildren, _, y, h, v, R, E), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && En(c, u)) : O || ke(c, u, y, null, h, v, R, E, !1), N > 0) {
      if (N & 16)
        D(y, u, x, S, h, v, g);
      else if (N & 2 && x.class !== S.class && r(y, "class", null, S.class, g), N & 4 && r(y, "style", x.style, S.style, g), N & 8) {
        const Q = u.dynamicProps;
        for (let W = 0; W < Q.length; W++) {
          const oe = Q[W], Ce = x[oe], $t = S[oe];
          ($t !== Ce || oe === "value") && r(y, oe, Ce, $t, g, c.children, h, v, He);
        }
      }
      N & 1 && c.children !== u.children && p(y, u.children);
    } else
      !O && _ == null && D(y, u, x, S, h, v, g);
    ((I = S.onVnodeUpdated) || C) && _e(() => {
      I && Fe(I, h, u, c), C && lt(u, c, h, "updated");
    }, v);
  }, se = (c, u, h, v, g, E, O) => {
    for (let y = 0; y < u.length; y++) {
      const N = c[y], _ = u[y], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dt(N, _) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 70) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(N, _, C, null, v, g, E, O, !0);
    }
  }, D = (c, u, h, v, g, E, O) => {
    if (h !== v) {
      if (h !== q)
        for (const y in h)
          !vn(y) && !(y in v) && r(c, y, h[y], null, O, u.children, g, E, He);
      for (const y in v) {
        if (vn(y))
          continue;
        const N = v[y], _ = h[y];
        N !== _ && y !== "value" && r(c, y, _, N, O, u.children, g, E, He);
      }
      "value" in v && r(c, "value", h.value, v.value);
    }
  }, G = (c, u, h, v, g, E, O, y, N) => {
    const _ = u.el = c ? c.el : l(""), C = u.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: S, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (yt || x & 2048) && (x = 0, N = !1, S = null), I && (y = y ? y.concat(I) : I), c == null ? (o(_, h, v), o(C, h, v), U(u.children, h, C, g, E, O, y, N)) : x > 0 && x & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (se(c.dynamicChildren, S, h, g, E, O, y), process.env.NODE_ENV !== "production" && g && g.type.__hmrId ? En(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && En(
        c,
        u,
        !0
        /* shallow */
      )
    )) : ke(c, u, h, C, g, E, O, y, N);
  }, we = (c, u, h, v, g, E, O, y, N) => {
    u.slotScopeIds = y, c == null ? u.shapeFlag & 512 ? g.ctx.activate(u, h, v, O, N) : Ve(u, h, v, g, E, O, N) : ce(c, u, N);
  }, Ve = (c, u, h, v, g, E, O) => {
    const y = c.component = Lc(c, v, g);
    if (process.env.NODE_ENV !== "production" && y.type.__hmrId && Dl(y), process.env.NODE_ENV !== "production" && (_n(c), Ue(y, "mount")), cn(c) && (y.ctx.renderer = St), process.env.NODE_ENV !== "production" && Ue(y, "init"), Uc(y), process.env.NODE_ENV !== "production" && Ke(y, "init"), y.asyncDep) {
      if (g && g.registerDep(y, L), !c.el) {
        const N = y.subTree = fe(le);
        J(null, N, u, h);
      }
      return;
    }
    L(y, c, u, h, g, E, O), process.env.NODE_ENV !== "production" && (bn(), Ke(y, "mount"));
  }, ce = (c, u, h) => {
    const v = u.component = c.component;
    if (Hl(c, u, h))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && _n(u), B(v, u, h), process.env.NODE_ENV !== "production" && bn();
        return;
      } else
        v.next = u, wl(v.update), v.update();
    else
      u.el = c.el, v.vnode = u;
  }, L = (c, u, h, v, g, E, O) => {
    const y = () => {
      if (c.isMounted) {
        let { next: C, bu: x, u: S, parent: I, vnode: R } = c, Q = C, W;
        process.env.NODE_ENV !== "production" && _n(C || c.vnode), ct(c, !1), C ? (C.el = R.el, B(c, C, O)) : C = R, x && Ht(x), (W = C.props && C.props.onVnodeBeforeUpdate) && Fe(W, I, C, R), ct(c, !0), process.env.NODE_ENV !== "production" && Ue(c, "render");
        const oe = Xn(c);
        process.env.NODE_ENV !== "production" && Ke(c, "render");
        const Ce = c.subTree;
        c.subTree = oe, process.env.NODE_ENV !== "production" && Ue(c, "patch"), V(
          Ce,
          oe,
          // parent may have changed if it's in a teleport
          d(Ce.el),
          // anchor may have changed if it's in a fragment
          un(Ce),
          c,
          g,
          E
        ), process.env.NODE_ENV !== "production" && Ke(c, "patch"), C.el = oe.el, Q === null && Ul(c, oe.el), S && _e(S, g), (W = C.props && C.props.onVnodeUpdated) && _e(() => Fe(W, I, C, R), g), process.env.NODE_ENV !== "production" && $r(c), process.env.NODE_ENV !== "production" && bn();
      } else {
        let C;
        const { el: x, props: S } = u, { bm: I, m: R, parent: Q } = c, W = Yt(u);
        if (ct(c, !1), I && Ht(I), !W && (C = S && S.onVnodeBeforeMount) && Fe(C, Q, u), ct(c, !0), x && Yn) {
          const oe = () => {
            process.env.NODE_ENV !== "production" && Ue(c, "render"), c.subTree = Xn(c), process.env.NODE_ENV !== "production" && Ke(c, "render"), process.env.NODE_ENV !== "production" && Ue(c, "hydrate"), Yn(x, c.subTree, c, g, null), process.env.NODE_ENV !== "production" && Ke(c, "hydrate");
          };
          W ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && oe()
          ) : oe();
        } else {
          process.env.NODE_ENV !== "production" && Ue(c, "render");
          const oe = c.subTree = Xn(c);
          process.env.NODE_ENV !== "production" && Ke(c, "render"), process.env.NODE_ENV !== "production" && Ue(c, "patch"), V(null, oe, h, v, c, g, E), process.env.NODE_ENV !== "production" && Ke(c, "patch"), u.el = oe.el;
        }
        if (R && _e(R, g), !W && (C = S && S.onVnodeMounted)) {
          const oe = u;
          _e(() => Fe(C, Q, oe), g);
        }
        (u.shapeFlag & 256 || Q && Yt(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && _e(c.a, g), c.isMounted = !0, process.env.NODE_ENV !== "production" && Al(c), u = h = v = null;
      }
    }, N = c.effect = new jo(
      y,
      () => Rn(_),
      c.scope
      // track it in component's effect scope
    ), _ = c.update = () => N.run();
    _.id = c.uid, ct(c, !0), process.env.NODE_ENV !== "production" && (N.onTrack = c.rtc ? (C) => Ht(c.rtc, C) : void 0, N.onTrigger = c.rtg ? (C) => Ht(c.rtg, C) : void 0, _.ownerInstance = c), _();
  }, B = (c, u, h) => {
    u.component = c;
    const v = c.vnode.props;
    c.vnode = u, c.next = null, yc(c, u.props, v, h), Cc(c, u.children, h), Dt(), ds(), Vt();
  }, ke = (c, u, h, v, g, E, O, y, N = !1) => {
    const _ = c && c.children, C = c ? c.shapeFlag : 0, x = u.children, { patchFlag: S, shapeFlag: I } = u;
    if (S > 0) {
      if (S & 128) {
        Lt(_, x, h, v, g, E, O, y, N);
        return;
      } else if (S & 256) {
        Wn(_, x, h, v, g, E, O, y, N);
        return;
      }
    }
    I & 8 ? (C & 16 && He(_, g, E), x !== _ && p(h, x)) : C & 16 ? I & 16 ? Lt(_, x, h, v, g, E, O, y, N) : He(_, g, E, !0) : (C & 8 && p(h, ""), I & 16 && U(x, h, v, g, E, O, y, N));
  }, Wn = (c, u, h, v, g, E, O, y, N) => {
    c = c || kt, u = u || kt;
    const _ = c.length, C = u.length, x = Math.min(_, C);
    let S;
    for (S = 0; S < x; S++) {
      const I = u[S] = N ? tt(u[S]) : Ie(u[S]);
      V(c[S], I, h, null, g, E, O, y, N);
    }
    _ > C ? He(c, g, E, !0, !1, x) : U(u, h, v, g, E, O, y, N, x);
  }, Lt = (c, u, h, v, g, E, O, y, N) => {
    let _ = 0;
    const C = u.length;
    let x = c.length - 1, S = C - 1;
    for (; _ <= x && _ <= S; ) {
      const I = c[_], R = u[_] = N ? tt(u[_]) : Ie(u[_]);
      if (dt(I, R))
        V(I, R, h, null, g, E, O, y, N);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= S; ) {
      const I = c[x], R = u[S] = N ? tt(u[S]) : Ie(u[S]);
      if (dt(I, R))
        V(I, R, h, null, g, E, O, y, N);
      else
        break;
      x--, S--;
    }
    if (_ > x) {
      if (_ <= S) {
        const I = S + 1, R = I < C ? u[I].el : v;
        for (; _ <= S; )
          V(null, u[_] = N ? tt(u[_]) : Ie(u[_]), h, R, g, E, O, y, N), _++;
      }
    } else if (_ > S)
      for (; _ <= x; )
        Je(c[_], g, E, !0), _++;
    else {
      const I = _, R = _, Q = /* @__PURE__ */ new Map();
      for (_ = R; _ <= S; _++) {
        const pe = u[_] = N ? tt(u[_]) : Ie(u[_]);
        pe.key != null && (process.env.NODE_ENV !== "production" && Q.has(pe.key) && b("Duplicate keys found during update:", JSON.stringify(pe.key), "Make sure keys are unique."), Q.set(pe.key, _));
      }
      let W, oe = 0;
      const Ce = S - R + 1;
      let $t = !1, ts = 0;
      const Bt = new Array(Ce);
      for (_ = 0; _ < Ce; _++)
        Bt[_] = 0;
      for (_ = I; _ <= x; _++) {
        const pe = c[_];
        if (oe >= Ce) {
          Je(pe, g, E, !0);
          continue;
        }
        let Me;
        if (pe.key != null)
          Me = Q.get(pe.key);
        else
          for (W = R; W <= S; W++)
            if (Bt[W - R] === 0 && dt(pe, u[W])) {
              Me = W;
              break;
            }
        Me === void 0 ? Je(pe, g, E, !0) : (Bt[Me - R] = _ + 1, Me >= ts ? ts = Me : $t = !0, V(pe, u[Me], h, null, g, E, O, y, N), oe++);
      }
      const ns = $t ? Pc(Bt) : kt;
      for (W = ns.length - 1, _ = Ce - 1; _ >= 0; _--) {
        const pe = R + _, Me = u[pe], os = pe + 1 < C ? u[pe + 1].el : v;
        Bt[_] === 0 ? V(null, Me, h, os, g, E, O, y, N) : $t && (W < 0 || _ !== ns[W] ? Ct(
          Me,
          h,
          os,
          2
          /* MoveType.REORDER */
        ) : W--);
      }
    }
  }, Ct = (c, u, h, v, g = null) => {
    const { el: E, type: O, transition: y, children: N, shapeFlag: _ } = c;
    if (_ & 6) {
      Ct(c.component.subTree, u, h, v);
      return;
    }
    if (_ & 128) {
      c.suspense.move(u, h, v);
      return;
    }
    if (_ & 64) {
      O.move(c, u, h, St);
      return;
    }
    if (O === ge) {
      o(E, u, h);
      for (let x = 0; x < N.length; x++)
        Ct(N[x], u, h, v);
      o(c.anchor, u, h);
      return;
    }
    if (O === Nn) {
      k(c, u, h);
      return;
    }
    if (v !== 2 && _ & 1 && y)
      if (v === 0)
        y.beforeEnter(E), o(E, u, h), _e(() => y.enter(E), g);
      else {
        const { leave: x, delayLeave: S, afterLeave: I } = y, R = () => o(E, u, h), Q = () => {
          x(E, () => {
            R(), I && I();
          });
        };
        S ? S(E, R, Q) : Q();
      }
    else
      o(E, u, h);
  }, Je = (c, u, h, v = !1, g = !1) => {
    const { type: E, props: O, ref: y, children: N, dynamicChildren: _, shapeFlag: C, patchFlag: x, dirs: S } = c;
    if (y != null && Vo(y, null, h, c, !0), C & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const I = C & 1 && S, R = !Yt(c);
    let Q;
    if (R && (Q = O && O.onVnodeBeforeUnmount) && Fe(Q, u, c), C & 6)
      vi(c.component, h, v);
    else {
      if (C & 128) {
        c.suspense.unmount(h, v);
        return;
      }
      I && lt(c, null, u, "beforeUnmount"), C & 64 ? c.type.remove(c, u, h, g, St, v) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ge || x > 0 && x & 64) ? He(_, u, h, !1, !0) : (E === ge && x & 384 || !g && C & 16) && He(N, u, h), v && qn(c);
    }
    (R && (Q = O && O.onVnodeUnmounted) || I) && _e(() => {
      Q && Fe(Q, u, c), I && lt(c, null, u, "unmounted");
    }, h);
  }, qn = (c) => {
    const { type: u, el: h, anchor: v, transition: g } = c;
    if (u === ge) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && g && !g.persisted ? c.children.forEach((O) => {
        O.type === le ? s(O.el) : qn(O);
      }) : gi(h, v);
      return;
    }
    if (u === Nn) {
      K(c);
      return;
    }
    const E = () => {
      s(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: O, delayLeave: y } = g, N = () => O(h, E);
      y ? y(c.el, E, N) : N();
    } else
      E();
  }, gi = (c, u) => {
    let h;
    for (; c !== u; )
      h = m(c), s(c), c = h;
    s(u);
  }, vi = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Vl(c);
    const { bum: v, scope: g, update: E, subTree: O, um: y } = c;
    v && Ht(v), g.stop(), E && (E.active = !1, Je(O, c, u, h)), y && _e(y, u), _e(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Pl(c);
  }, He = (c, u, h, v = !1, g = !1, E = 0) => {
    for (let O = E; O < c.length; O++)
      Je(c[O], u, h, v, g);
  }, un = (c) => c.shapeFlag & 6 ? un(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), es = (c, u, h) => {
    c == null ? u._vnode && Je(u._vnode, null, null, !0) : V(u._vnode || null, c, u, null, null, null, h), ds(), Dr(), u._vnode = c;
  }, St = {
    p: V,
    um: Je,
    m: Ct,
    r: qn,
    mt: Ve,
    mc: U,
    pc: ke,
    pbc: se,
    n: un,
    o: e
  };
  let Jn, Yn;
  return t && ([Jn, Yn] = t(St)), {
    render: es,
    hydrate: Jn,
    createApp: $c(es, Jn)
  };
}
function ct({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function En(e, t, n = !1) {
  const o = e.children, s = t.children;
  if ($(o) && $(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = tt(s[r]), l.el = i.el), n || En(i, l)), l.type === an && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === le && !l.el && (l.el = i.el);
    }
}
function Pc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const f = e[o];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < f ? r = l + 1 : i = l;
      f < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const kc = (e) => e.__isTeleport, ge = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), an = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), le = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Nn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Qt = [];
let Pe = null;
function te(e = !1) {
  Qt.push(Pe = e ? null : []);
}
function Mc() {
  Qt.pop(), Pe = Qt[Qt.length - 1] || null;
}
let on = 1;
function Ds(e) {
  on += e;
}
function si(e) {
  return e.dynamicChildren = on > 0 ? Pe || kt : null, Mc(), on > 0 && Pe && Pe.push(e), e;
}
function ae(e, t, n, o, s, r) {
  return si(be(
    e,
    t,
    n,
    o,
    s,
    r,
    !0
    /* isBlock */
  ));
}
function Xt(e, t, n, o, s) {
  return si(fe(
    e,
    t,
    n,
    o,
    s,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Ft(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && At.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Fc = (...e) => ii(...e), Un = "__vInternal", ri = ({ key: e }) => e ?? null, On = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Z(e) || re(e) || A(e) ? { i: ie, r: e, k: t, f: !!n } : e : null;
function be(e, t = null, n = null, o = 0, s = null, r = e === ge ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ri(t),
    ref: t && On(t),
    scopeId: Ir,
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
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ie
  };
  return l ? (Yo(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= Z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), on > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const fe = process.env.NODE_ENV !== "production" ? Fc : ii;
function ii(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Wr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = le), Ft(e)) {
    const l = Be(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Yo(l, n), on > 0 && !r && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag |= -2, l;
  }
  if (fi(e) && (e = e.__vccOpts), t) {
    t = Te(t);
    let { class: l, style: a } = t;
    l && !Z(l) && (t.class = Ot(l)), H(a) && (mo(a) && !$(a) && (a = ee({}, a)), t.style = Tn(a));
  }
  const i = Z(e) ? 1 : Kl(e) ? 128 : kc(e) ? 64 : H(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && mo(e) && (e = P(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), be(e, t, n, o, s, i, r, !0);
}
function Te(e) {
  return e ? mo(e) || Un in e ? ee({}, e) : e : null;
}
function Be(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? Co(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ri(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(On(t)) : [s, On(t)] : On(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && $(i) ? i.map(li) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Be(e.ssContent),
    ssFallback: e.ssFallback && Be(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function li(e) {
  const t = Be(e);
  return $(e.children) && (t.children = e.children.map(li)), t;
}
function jt(e = " ", t = 0) {
  return fe(an, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? (te(), Xt(le, null, e)) : fe(le, null, e);
}
function Ie(e) {
  return e == null || typeof e == "boolean" ? fe(le) : $(e) ? fe(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? tt(e) : fe(an, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Be(e);
}
function Yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Yo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Un in t) ? t._ctx = ie : s === 3 && ie && (ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: ie }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Co(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Ot([t.class, o.class]));
      else if (s === "style")
        t.style = Tn([t.style, o.style]);
      else if (rn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !($(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Fe(e, t, n, o = null) {
  De(e, t, 7, [
    n,
    o
  ]);
}
const jc = oi();
let Rc = 0;
function Lc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || jc, r = {
    uid: Rc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Pi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zr(o, s),
    emitsOptions: Ar(o, s),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = ac(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = jl.bind(null, r), e.ce && e.ce(r), r;
}
let ne = null;
const Bc = () => ne || ie, Rt = (e) => {
  ne = e, e.scope.on();
}, Nt = () => {
  ne && ne.scope.off(), ne = null;
}, Hc = /* @__PURE__ */ it("slot,component");
function So(e, t) {
  const n = t.isNativeTag || Xs;
  (Hc(e) || n(e)) && b("Do not use built-in or reserved HTML elements as component id: " + e);
}
function ci(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Uc(e, t = !1) {
  sn = t;
  const { props: n, children: o } = e.vnode, s = ci(e);
  _c(e, n, s, t), Vc(e, o);
  const r = s ? Kc(e, t) : void 0;
  return sn = !1, r;
}
function Kc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && So(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        So(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        zr(r[i]);
    }
    o.compilerOptions && ai() && b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = mr(new Proxy(e.ctx, Yr)), process.env.NODE_ENV !== "production" && uc(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? zc(e) : null;
    Rt(e), Dt();
    const i = ze(s, e, 0, [process.env.NODE_ENV !== "production" ? Pt(e.props) : e.props, r]);
    if (Vt(), Nt(), ko(i)) {
      if (i.then(Nt, Nt), t)
        return i.then((l) => {
          Vs(e, l, t);
        }).catch((l) => {
          jn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        b(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Vs(e, i, t);
  } else
    ui(e, t);
}
function Vs(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : H(t) ? (process.env.NODE_ENV !== "production" && Ft(t) && b("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = br(t), process.env.NODE_ENV !== "production" && fc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), ui(e, n);
}
let $o;
const ai = () => !$o;
function ui(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && $o && !o.render) {
      const s = o.template || qo(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Ue(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = o, f = ee(ee({
          isCustomElement: r,
          delimiters: l
        }, i), a);
        o.render = $o(s, f), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  Rt(e), Dt(), pc(e), Vt(), Nt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function Cs(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return Cn(), ve(e, "get", "$attrs"), t[n];
    },
    set() {
      return b("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return b("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ve(e, "get", "$attrs"), t[n];
    }
  });
}
function zc(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), o != null)) {
      let s = typeof o;
      s === "object" && ($(o) ? s = "array" : re(o) && (s = "ref")), s !== "object" && b(`expose() should be passed a plain object, received ${s}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Cs(e));
    },
    get slots() {
      return Pt(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Cs(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(br(mr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Et)
          return Et[n](e);
      },
      has(t, n) {
        return n in t || n in Et;
      }
    }));
}
const Wc = /(?:^|[-_])(\w)/g, qc = (e) => e.replace(Wc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qo(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zn(e, t, n = !1) {
  let o = Qo(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? qc(o) : n ? "App" : "Anonymous";
}
function fi(e) {
  return A(e) && "__vccOpts" in e;
}
const Jc = (e, t) => ml(e, t, sn);
function Yc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? H(t) && !$(t) ? Ft(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ft(n) && (n = [n]), fe(e, t, n));
}
const Qc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Xc = () => {
  {
    const e = yn(Qc);
    return e || process.env.NODE_ENV !== "production" && b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function oo(e) {
  return !!(e && e.__v_isShallow);
}
function Zc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(d) {
      return H(d) ? d.__isVue ? ["div", e, "VueInstance"] : re(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        l(d.value),
        ">"
      ] : _t(d) ? [
        "div",
        {},
        ["span", e, oo(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${rt(d) ? " (readonly)" : ""}`
      ] : rt(d) ? [
        "div",
        {},
        ["span", e, oo(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const m = [];
    d.type.props && d.props && m.push(i("props", P(d.props))), d.setupState !== q && m.push(i("setup", d.setupState)), d.data !== q && m.push(i("data", P(d.data)));
    const w = a(d, "computed");
    w && m.push(i("computed", w));
    const T = a(d, "inject");
    return T && m.push(i("injected", T)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function i(d, m) {
    return m = ee({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(m[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : H(d) ? ["object", { object: m ? P(d) : d }] : ["span", n, String(d)];
  }
  function a(d, m) {
    const w = d.type;
    if (A(w))
      return;
    const T = {};
    for (const V in d.ctx)
      f(w, V, m) && (T[V] = d.ctx[V]);
    return T;
  }
  function f(d, m, w) {
    const T = d[w];
    if ($(T) && T.includes(m) || H(T) && m in T || d.extends && f(d.extends, m, w) || d.mixins && d.mixins.some((V) => f(V, m, w)))
      return !0;
  }
  function p(d) {
    return oo(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Ss = "3.2.47", Gc = "http://www.w3.org/2000/svg", pt = typeof document < "u" ? document : null, $s = pt && /* @__PURE__ */ pt.createElement("template"), ea = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? pt.createElementNS(Gc, e) : pt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      $s.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = $s.content;
      if (o) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function ta(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function na(e, t, n) {
  const o = e.style, s = Z(n);
  if (n && !s) {
    if (t && !Z(t))
      for (const r in t)
        n[r] == null && To(o, r, "");
    for (const r in n)
      To(o, r, n[r]);
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const oa = /[^\\];\s*$/, Ts = /\s*!important$/;
function To(e, t, n) {
  if ($(n))
    n.forEach((o) => To(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && oa.test(n) && b(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = sa(e, t);
    Ts.test(n) ? e.setProperty(ye(o), n.replace(Ts, ""), "important") : e[o] = n;
  }
}
const As = ["Webkit", "Moz", "ms"], so = {};
function sa(e, t) {
  const n = so[t];
  if (n)
    return n;
  let o = Ee(t);
  if (o !== "filter" && o in e)
    return so[t] = o;
  o = wt(o);
  for (let s = 0; s < As.length; s++) {
    const r = As[s] + o;
    if (r in e)
      return so[t] = r;
  }
  return t;
}
const Is = "http://www.w3.org/1999/xlink";
function ra(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Is, t.slice(6, t.length)) : e.setAttributeNS(Is, t, n);
  else {
    const r = Vi(t);
    n == null || r && !Ys(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function ia(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Ys(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && b(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function la(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ca(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function aa(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (o && i)
    i.value = o;
  else {
    const [l, a] = ua(t);
    if (o) {
      const f = r[t] = pa(o, s);
      la(e, l, f, a);
    } else
      i && (ca(e, l, i, a), r[t] = void 0);
  }
}
const Ps = /(?:Once|Passive|Capture)$/;
function ua(e) {
  let t;
  if (Ps.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ps); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ye(e.slice(2)), t];
}
let ro = 0;
const fa = /* @__PURE__ */ Promise.resolve(), da = () => ro || (fa.then(() => ro = 0), ro = Date.now());
function pa(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    De(ha(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = da(), n;
}
function ha(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const ks = /^on[a-z]/, ma = (e, t, n, o, s = !1, r, i, l, a) => {
  t === "class" ? ta(e, o, s) : t === "style" ? na(e, n, o) : rn(t) ? wn(t) || aa(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ga(e, t, o, s)) ? ia(e, t, o, r, i, l, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ra(e, t, o, s));
};
function ga(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ks.test(t) && A(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ks.test(t) && Z(n) ? !1 : t in e;
}
function di(e, t) {
  const n = Br(e);
  class o extends Xo {
    constructor(r) {
      super(n, r, t);
    }
  }
  return o.def = n, o;
}
const va = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xo extends va {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && b("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Or(() => {
      this._connected || (Us(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const s of o)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o, s = !1) => {
      const { props: r, styles: i } = o;
      let l;
      if (r && !$(r))
        for (const a in r) {
          const f = r[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = co(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ee(a)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(o), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && o.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of o.map(Ee))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Ee(t);
    this._numberProps && this._numberProps[o] && (n = co(n)), this._setProp(o, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), o && (n === !0 ? this.setAttribute(ye(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ye(t), n + "") : n || this.removeAttribute(ye(t))));
  }
  _update() {
    Us(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = fe(this._def, ee({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this.shadowRoot.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, i) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: i
        }));
      };
      n.emit = (r, ...i) => {
        o(r, i), ye(r) !== r && o(ye(r), i);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Xo) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const Qe = "transition", Kt = "animation", Zo = (e, { slots: t }) => Yc(jr, _a(e), t);
Zo.displayName = "Transition";
const pi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
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
Zo.props = /* @__PURE__ */ ee({}, jr.props, pi);
const at = (e, t = []) => {
  $(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ms = (e) => e ? $(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function _a(e) {
  const t = {};
  for (const D in e)
    D in pi || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: s, enterFromClass: r = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: a = r, appearActiveClass: f = i, appearToClass: p = l, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: w = `${n}-leave-to` } = e, T = ba(s), V = T && T[0], F = T && T[1], { onBeforeEnter: J, onEnter: X, onEnterCancelled: z, onLeave: k, onLeaveCancelled: K, onBeforeAppear: Ne = J, onAppear: Oe = X, onAppearCancelled: M = z } = t, U = (D, G, we) => {
    ut(D, G ? p : l), ut(D, G ? f : i), we && we();
  }, Y = (D, G) => {
    D._isLeaving = !1, ut(D, d), ut(D, w), ut(D, m), G && G();
  }, se = (D) => (G, we) => {
    const Ve = D ? Oe : X, ce = () => U(G, D, we);
    at(Ve, [G, ce]), Fs(() => {
      ut(G, D ? a : r), Xe(G, D ? p : l), Ms(Ve) || js(G, o, V, ce);
    });
  };
  return ee(t, {
    onBeforeEnter(D) {
      at(J, [D]), Xe(D, r), Xe(D, i);
    },
    onBeforeAppear(D) {
      at(Ne, [D]), Xe(D, a), Xe(D, f);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(D, G) {
      D._isLeaving = !0;
      const we = () => Y(D, G);
      Xe(D, d), Na(), Xe(D, m), Fs(() => {
        D._isLeaving && (ut(D, d), Xe(D, w), Ms(k) || js(D, o, F, we));
      }), at(k, [D, we]);
    },
    onEnterCancelled(D) {
      U(D, !1), at(z, [D]);
    },
    onAppearCancelled(D) {
      U(D, !0), at(M, [D]);
    },
    onLeaveCancelled(D) {
      Y(D), at(K, [D]);
    }
  });
}
function ba(e) {
  if (e == null)
    return null;
  if (H(e))
    return [io(e.enter), io(e.leave)];
  {
    const t = io(e);
    return [t, t];
  }
}
function io(e) {
  const t = co(e);
  return process.env.NODE_ENV !== "production" && yl(t, "<transition> explicit duration"), t;
}
function Xe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function ut(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Fs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ya = 0;
function js(e, t, n, o) {
  const s = e._endId = ++ya, r = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Ea(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let p = 0;
  const d = () => {
    e.removeEventListener(f, m), r();
  }, m = (w) => {
    w.target === e && ++p >= a && d();
  };
  setTimeout(() => {
    p < a && d();
  }, l + 1), e.addEventListener(f, m);
}
function Ea(e, t) {
  const n = window.getComputedStyle(e), o = (T) => (n[T] || "").split(", "), s = o(`${Qe}Delay`), r = o(`${Qe}Duration`), i = Rs(s, r), l = o(`${Kt}Delay`), a = o(`${Kt}Duration`), f = Rs(l, a);
  let p = null, d = 0, m = 0;
  t === Qe ? i > 0 && (p = Qe, d = i, m = r.length) : t === Kt ? f > 0 && (p = Kt, d = f, m = a.length) : (d = Math.max(i, f), p = d > 0 ? i > f ? Qe : Kt : null, m = p ? p === Qe ? r.length : a.length : 0);
  const w = p === Qe && /\b(transform|all)(,|$)/.test(o(`${Qe}Property`).toString());
  return {
    type: p,
    timeout: d,
    propCount: m,
    hasTransform: w
  };
}
function Rs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Ls(n) + Ls(e[o])));
}
function Ls(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Na() {
  return document.body.offsetHeight;
}
const Oa = ["ctrl", "shift", "alt", "meta"], wa = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Oa.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ao = (e, t) => (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const r = wa[t[s]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...o);
}, Bs = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), zt(e, !0), o.enter(e)) : o.leave(e, () => {
      zt(e, !1);
    }) : zt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zt(e, t);
  }
};
function zt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const xa = /* @__PURE__ */ ee({ patchProp: ma }, ea);
let Hs;
function hi() {
  return Hs || (Hs = Ac(xa));
}
const Us = (...e) => {
  hi().render(...e);
}, Da = (...e) => {
  const t = hi().createApp(...e);
  process.env.NODE_ENV !== "production" && (Va(t), Ca(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Sa(o);
    if (!s)
      return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Va(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => wi(t) || xi(t),
    writable: !1
  });
}
function Ca(e) {
  if (ai()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function Sa(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && b(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function $a() {
  Zc();
}
process.env.NODE_ENV !== "production" && $a();
const mi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Ta = {};
function Aa(e, t) {
  return null;
}
const Ia = /* @__PURE__ */ mi(Ta, [["render", Aa]]), Pa = "/leo.gif", ka = "/buginator.gif", Ks = [
  {
    code: 1,
    label: "Bohemian Rhapsody",
    emoji: "💁‍♂️🔫☠️👹",
    track: "115417954"
  },
  {
    code: 2,
    label: "Fat Bottomed Girls",
    emoji: "💁‍♀️🍑",
    track: "221560013"
  },
  {
    code: 3,
    label: "Bicycle Race",
    emoji: "🚴‍♀️🚴‍♀️🚴‍♀️",
    track: "34571219"
  },
  {
    code: 4,
    label: "Killer Queen",
    emoji: "👸🔪🍾🍰♀️",
    track: "202492629"
  },
  {
    code: 5,
    label: "Under Pressure",
    emoji: "❄️❄️👶 👩‍🎤🤴",
    track: "474987"
  },
  {
    code: 6,
    label: "I’m In Love With My Car",
    emoji: "🚗👉👌",
    track: "34569371"
  },
  {
    code: 7,
    label: "Radio Ga Ga",
    emoji: "📻💩💩",
    track: "1162891207"
  },
  {
    code: 8,
    label: "We Will Rock You",
    emoji: "👟👟👏",
    track: "244071573"
  },
  {
    code: 9,
    label: "Don’t Stop Me Now",
    emoji: "🙅‍♂️⛔️",
    track: "221099243"
  },
  {
    code: 10,
    label: "I Want To Break Free",
    emoji: "🧹👵🏻👧🏼👩🏻‍🦱👨🏻‍🦱🐄",
    track: "95990704"
  }
];
var Ma = Object.defineProperty, Fa = Object.defineProperties, ja = Object.getOwnPropertyDescriptors, zs = Object.getOwnPropertySymbols, Ra = Object.prototype.hasOwnProperty, La = Object.prototype.propertyIsEnumerable, Ws = (e, t, n) => t in e ? Ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tt = (e, t) => {
  for (var n in t || (t = {}))
    Ra.call(t, n) && Ws(e, n, t[n]);
  if (zs)
    for (var n of zs(t))
      La.call(t, n) && Ws(e, n, t[n]);
  return e;
}, qs = (e, t) => Fa(e, ja(t));
const Ba = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const t = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (t) {
        const n = this.getDropdownViewport(), { top: o, bottom: s, height: r } = t.getBoundingClientRect();
        if (o < n.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (s > n.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (n.height - r);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, Ha = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Ua = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, Go = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Ka = {}, za = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Wa = /* @__PURE__ */ be("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), qa = [
  Wa
];
function Ja(e, t) {
  return te(), ae("svg", za, qa);
}
const Ya = /* @__PURE__ */ Go(Ka, [["render", Ja]]), Qa = {}, Xa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Za = /* @__PURE__ */ be("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Ga = [
  Za
];
function eu(e, t) {
  return te(), ae("svg", Xa, Ga);
}
const tu = /* @__PURE__ */ Go(Qa, [["render", eu]]), Js = {
  Deselect: Ya,
  OpenIndicator: tu
}, nu = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: n,
        top: o,
        left: s,
        width: r
      } = t.$refs.toggle.getBoundingClientRect();
      let i = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: r + "px",
        left: i + s + "px",
        top: l + o + n + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function ou(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let su = 0;
function ru() {
  return ++su;
}
const iu = {
  components: Tt({}, Js),
  directives: { appendToBody: nu },
  mixins: [Ba, Ha, Ua],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : ou(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, n) {
        return (t || "").toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((n) => {
          let o = this.getOptionLabel(n);
          return typeof o == "number" && (o = o.toString()), this.filterBy(n, o, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: n, top: o, left: s }) {
        e.style.top = o, e.style.left = s, e.style.width = n;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: n }) {
        return e ? !1 : t && !n;
      }
    },
    uid: {
      type: [String, Number],
      default: () => ru()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: Tt({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: qs(Tt({}, e), { deselect: this.deselect }),
        footer: qs(Tt({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Tt(Tt({}, Js), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const n = this.createOption(this.search);
        this.optionExists(n) || t.unshift(n);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const n = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && n() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const n = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || n.filter(Boolean).some((o) => o.contains(e.target) || o === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (o) => JSON.stringify(this.reduce(o)) === JSON.stringify(e), n = [...this.options, ...this.pushedTags].filter(t);
      return n.length === 1 ? n[0] : n.find((o) => this.optionComparator(o, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (s) => (s.preventDefault(), !this.isComposing && this.typeAheadSelect()), n = {
        8: (s) => this.maybeDeleteValue(),
        9: (s) => this.onTab(),
        27: (s) => this.onEscape(),
        38: (s) => (s.preventDefault(), this.typeAheadUp()),
        40: (s) => (s.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((s) => n[s] = t);
      const o = this.mapKeydown(n, this);
      if (typeof o[e.keyCode] == "function")
        return o[e.keyCode](e);
    }
  }
}, lu = ["dir"], cu = ["id", "aria-expanded", "aria-owns"], au = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, uu = ["disabled", "title", "aria-label", "onClick"], fu = {
  ref: "actions",
  class: "vs__actions"
}, du = ["disabled"], pu = { class: "vs__spinner" }, hu = ["id"], mu = ["id", "aria-selected", "onMouseover", "onClick"], gu = {
  key: 0,
  class: "vs__no-options"
}, vu = /* @__PURE__ */ jt(" Sorry, no matching options. "), _u = ["id"];
function bu(e, t, n, o, s, r) {
  const i = lc("append-to-body");
  return te(), ae("div", {
    dir: n.dir,
    class: Ot(["v-select", r.stateClasses])
  }, [
    $e(e.$slots, "header", Se(Te(r.scope.header))),
    be("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": r.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (l) => r.toggleDropdown(l))
    }, [
      be("div", au, [
        (te(!0), ae(ge, null, _s(r.selectedValue, (l, a) => $e(e.$slots, "selected-option-container", {
          option: r.normalizeOptionForSlot(l),
          deselect: r.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (te(), ae("span", {
            key: n.getOptionKey(l),
            class: "vs__selected"
          }, [
            $e(e.$slots, "selected-option", Se(Te(r.normalizeOptionForSlot(l))), () => [
              jt(lo(n.getOptionLabel(l)), 1)
            ]),
            n.multiple ? (te(), ae("button", {
              key: 0,
              ref_for: !0,
              ref: (f) => s.deselectButtons[a] = f,
              disabled: n.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${n.getOptionLabel(l)}`,
              "aria-label": `Deselect ${n.getOptionLabel(l)}`,
              onClick: (f) => r.deselect(l)
            }, [
              (te(), Xt(to(r.childComponents.Deselect)))
            ], 8, uu)) : mt("", !0)
          ]))
        ])), 256)),
        $e(e.$slots, "search", Se(Te(r.scope.search)), () => [
          be("input", Co({ class: "vs__search" }, r.scope.search.attributes, cc(r.scope.search.events)), null, 16)
        ])
      ], 512),
      be("div", fu, [
        eo(be("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...l) => r.clearSelection && r.clearSelection(...l))
        }, [
          (te(), Xt(to(r.childComponents.Deselect)))
        ], 8, du), [
          [Bs, r.showClearButton]
        ]),
        $e(e.$slots, "open-indicator", Se(Te(r.scope.openIndicator)), () => [
          n.noDrop ? mt("", !0) : (te(), Xt(to(r.childComponents.OpenIndicator), Se(Co({ key: 0 }, r.scope.openIndicator.attributes)), null, 16))
        ]),
        $e(e.$slots, "spinner", Se(Te(r.scope.spinner)), () => [
          eo(be("div", pu, "Loading...", 512), [
            [Bs, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, cu),
    fe(Zo, { name: n.transition }, {
      default: Pr(() => [
        r.dropdownOpen ? eo((te(), ae("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = Ao((...l) => r.onMousedown && r.onMousedown(...l), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...l) => r.onMouseUp && r.onMouseUp(...l))
        }, [
          $e(e.$slots, "list-header", Se(Te(r.scope.listHeader))),
          (te(!0), ae(ge, null, _s(r.filteredOptions, (l, a) => (te(), ae("li", {
            id: `vs${n.uid}__option-${a}`,
            key: n.getOptionKey(l),
            role: "option",
            class: Ot(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": r.isOptionDeselectable(l) && a === e.typeAheadPointer,
              "vs__dropdown-option--selected": r.isOptionSelected(l),
              "vs__dropdown-option--highlight": a === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(l)
            }]),
            "aria-selected": a === e.typeAheadPointer ? !0 : null,
            onMouseover: (f) => n.selectable(l) ? e.typeAheadPointer = a : null,
            onClick: Ao((f) => n.selectable(l) ? r.select(l) : null, ["prevent", "stop"])
          }, [
            $e(e.$slots, "option", Se(Te(r.normalizeOptionForSlot(l))), () => [
              jt(lo(n.getOptionLabel(l)), 1)
            ])
          ], 42, mu))), 128)),
          r.filteredOptions.length === 0 ? (te(), ae("li", gu, [
            $e(e.$slots, "no-options", Se(Te(r.scope.noOptions)), () => [
              vu
            ])
          ])) : mt("", !0),
          $e(e.$slots, "list-footer", Se(Te(r.scope.listFooter)))
        ], 40, hu)), [
          [i]
        ]) : (te(), ae("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, _u))
      ]),
      _: 3
    }, 8, ["name"]),
    $e(e.$slots, "footer", Se(Te(r.scope.footer)))
  ], 10, lu);
}
const yu = /* @__PURE__ */ Go(iu, [["render", bu]]), Eu = {
  key: 0,
  class: "emr--form"
}, Nu = ["src"], Ou = {
  key: 2,
  class: "emr--success"
}, wu = /* @__PURE__ */ be("img", {
  src: Pa,
  width: "200",
  height: "200"
}, null, -1), xu = {
  key: 3,
  class: "emr--error"
}, Du = ["onClick"], Vu = /* @__PURE__ */ be("img", {
  src: ka,
  width: "200",
  height: "136"
}, null, -1), Cu = /* @__PURE__ */ Br({
  __name: "emoji-music-recaptcha.ce",
  props: {
    dark: { type: Boolean, default: !1 }
  },
  emits: ["captchaValidate", "captchaReload"],
  setup(e, { emit: t }) {
    const n = e;
    function o(V, F) {
      return [...V].sort(() => 0.5 - Math.random()).slice(0, F);
    }
    function s(V) {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${V}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
    }
    const r = Ze(o(Ks, 4)), i = Ze(r.value[Math.floor(Math.random() * r.value.length)]), l = Ze(r.value[0]), a = Ze(), f = Ze(), p = Ze(!1), d = Ze(!1);
    Hn(() => {
      window.localStorage.setItem("emoji-secret", i.value.emoji);
    });
    function m() {
      r.value = o(Ks, 4), i.value = r.value[Math.floor(Math.random() * r.value.length)], l.value = r.value[0], window.localStorage.setItem("emoji-secret", i.value.emoji);
    }
    function w() {
      l.value.code === i.value.code ? p.value = !0 : d.value = !0, t("captchaValidate", d.value);
    }
    function T() {
      d.value = !1, m(), t("captchaReload");
    }
    return (V, F) => (te(), ae("div", {
      ref_key: "emr",
      ref: f,
      class: Ot(["emr", n.dark ? "dark" : ""])
    }, [
      !p.value && !d.value ? (te(), ae("div", Eu, [
        fe(_r(yu), {
          modelValue: l.value,
          "onUpdate:modelValue": F[0] || (F[0] = (J) => l.value = J),
          options: r.value,
          onInput: F[1] || (F[1] = (J) => a.value.src = s(l.value.track)),
          clearable: !1
        }, null, 8, ["modelValue", "options"]),
        be("button", {
          type: "button",
          onClick: w
        }, "Верно")
      ])) : mt("", !0),
      !p.value && !d.value ? (te(), ae("iframe", {
        key: 1,
        width: "100%",
        height: "166",
        scrolling: "no",
        frameborder: "no",
        allow: "autoplay",
        ref_key: "soundCloudPlayer",
        ref: a,
        src: s(l.value.track)
      }, null, 8, Nu)) : mt("", !0),
      p.value ? (te(), ae("div", Ou, [
        jt(" Ура! Нападение скайнет отменяется! Вы же человек верно? "),
        wu
      ])) : mt("", !0),
      d.value ? (te(), ae("div", xu, [
        jt(" Скоро брат, скоро. "),
        be("a", {
          href: "#",
          onClick: Ao(T, ["prevent"])
        }, "Повторить попытку", 8, Du),
        Vu
      ])) : mt("", !0)
    ], 2));
  }
}), Su = `:host,:root{--vs-colors--lightest: rgba(60, 60, 60, .26);--vs-colors--light: rgba(60, 60, 60, .5);--vs-colors--dark: #333;--vs-colors--darkest: rgba(0, 0, 0, .15);--vs-search-input-color: inherit;--vs-search-input-placeholder-color: inherit;--vs-font-size: 1rem;--vs-line-height: 1.4;--vs-state-disabled-bg: rgb(248, 248, 248);--vs-state-disabled-color: var(--vs-colors--light);--vs-state-disabled-controls-color: var(--vs-colors--light);--vs-state-disabled-cursor: not-allowed;--vs-border-color: var(--vs-colors--lightest);--vs-border-width: 1px;--vs-border-style: solid;--vs-border-radius: 4px;--vs-actions-padding: 4px 6px 0 3px;--vs-controls-color: var(--vs-colors--light);--vs-controls-size: 1;--vs-controls--deselect-text-shadow: 0 1px 0 #fff;--vs-selected-bg: #f0f0f0;--vs-selected-color: var(--vs-colors--dark);--vs-selected-border-color: var(--vs-border-color);--vs-selected-border-style: var(--vs-border-style);--vs-selected-border-width: var(--vs-border-width);--vs-dropdown-bg: #fff;--vs-dropdown-color: inherit;--vs-dropdown-z-index: 1000;--vs-dropdown-min-width: 160px;--vs-dropdown-max-height: 350px;--vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);--vs-dropdown-option-bg: #000;--vs-dropdown-option-color: var(--vs-dropdown-color);--vs-dropdown-option-padding: 3px 20px;--vs-dropdown-option--active-bg: #5897fb;--vs-dropdown-option--active-color: #fff;--vs-dropdown-option--deselect-bg: #fb5858;--vs-dropdown-option--deselect-color: #fff;--vs-transition-timing-function: cubic-bezier(1, -.115, .975, .855);--vs-transition-duration: .15s}.v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}:root{--vs-transition-timing-function: cubic-bezier(1, .5, .8, 1);--vs-transition-duration: .15s}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes vSelectSpinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity var(--vs-transition-duration) var(--vs-transition-timing-function)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}:root{--vs-disabled-bg: var(--vs-state-disabled-bg);--vs-disabled-color: var(--vs-state-disabled-color);--vs-disabled-cursor: var(--vs-state-disabled-cursor)}.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__clear,.vs--disabled .vs__search,.vs--disabled .vs__selected,.vs--disabled .vs__open-indicator{cursor:var(--vs-disabled-cursor);background-color:var(--vs-disabled-bg)}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-radius:var(--vs-border-radius);white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:var(--vs-actions-padding)}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:var(--vs-controls-color);transform:scale(var(--vs-controls-size));transition:transform var(--vs-transition-duration) var(--vs-transition-timing-function);transition-timing-function:var(--vs-transition-timing-function)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(var(--vs-controls-size))}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:var(--vs-controls-color);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;box-sizing:border-box;position:absolute;top:calc(100% - var(--vs-border-width));left:0;z-index:var(--vs-dropdown-z-index);padding:5px 0;margin:0;width:100%;max-height:var(--vs-dropdown-max-height);min-width:var(--vs-dropdown-min-width);overflow-y:auto;box-shadow:var(--vs-dropdown-box-shadow);border:var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);border-top-style:none;border-radius:0 0 var(--vs-border-radius) var(--vs-border-radius);text-align:left;list-style:none;background:var(--vs-dropdown-bg);color:var(--vs-dropdown-color)}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:var(--vs-dropdown-option-padding);clear:both;color:var(--vs-dropdown-option-color);white-space:nowrap;cursor:pointer}.vs__dropdown-option--highlight{background:var(--vs-dropdown-option--active-bg);color:var(--vs-dropdown-option--active-color)}.vs__dropdown-option--deselect{background:var(--vs-dropdown-option--deselect-bg);color:var(--vs-dropdown-option--deselect-color)}.vs__dropdown-option--disabled{background:var(--vs-state-disabled-bg);color:var(--vs-state-disabled-color);cursor:var(--vs-state-disabled-cursor)}.vs__selected{display:flex;align-items:center;background-color:var(--vs-selected-bg);border:var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);border-radius:var(--vs-border-radius);color:var(--vs-selected-color);line-height:var(--vs-line-height);margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:var(--vs-controls-color);text-shadow:var(--vs-controls--deselect-text-shadow)}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected,.vs--single.vs--loading .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration,.vs__search::-ms-clear{display:none}.vs__search,.vs__search:focus{color:var(--vs-search-input-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:var(--vs-line-height);font-size:var(--vs-font-size);border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1;z-index:1}.vs__search::-moz-placeholder{color:var(--vs-search-input-placeholder-color)}.vs__search::placeholder{color:var(--vs-search-input-placeholder-color)}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid rgba(100,100,100,.1);border-right:.9em solid rgba(100,100,100,.1);border-bottom:.9em solid rgba(100,100,100,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0) scale(var(--vs-controls--spinner-size, var(--vs-controls-size)));-webkit-animation:vSelectSpinner 1.1s infinite linear;animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em;transform:scale(var(--vs-controls--spinner-size, var(--vs-controls-size)))}.vs--loading .vs__spinner{opacity:1}:root,:host{--select-border: #777;--select-focus: blue;--select-arrow: var(--select-border);font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}button{border-radius:8px;border:1px solid transparent;padding:.3em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.emr{width:100%;max-width:480px;padding:.8em;border-radius:3px;box-shadow:0 0 0 1px #00000029}.emr.dark{color:#f0f0f0;box-shadow:0 0 0 1px #dedede29;--vs-selected-color: #f0f0f0;--vs-border-color:#f0f0f0;--vs-controls-color: #f0f0f0;--vs-dropdown-bg: rgb(57, 57, 59)}.emr.dark button{color:#fff;background:#d36e3b}.emr--form{margin-bottom:5px;gap:5px;display:flex;align-items:center}.emr--form .v-select{flex-grow:1;height:100%}.emr--form button{height:34px}.emr--success,.emr--error{display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;font-size:1.2em}.emr--success img,.emr--error img{border-radius:3px;box-shadow:0 0 0 2px #000}@media (prefers-color-scheme: light){:root,:host{color:#213547}a:hover{color:#747bff}button{background-color:#f9f9f9}}@media (prefers-color-scheme: dark){:root,:host{color:#fff}a:hover{color:#747bff}button{background-color:#535369}}
`, $u = /* @__PURE__ */ mi(Cu, [["styles", [Su]]]), Tu = { class: "emr--secret" }, Au = {
  __name: "emoji-secret.ce",
  setup(e) {
    const t = Ze();
    return Hn(() => {
      t.value = window.localStorage.getItem("emoji-secret"), document.querySelector("emoji-music-recaptcha").addEventListener("captchaReload", function() {
        t.value = window.localStorage.getItem("emoji-secret");
      });
    }), (n, o) => (te(), ae("span", Tu, lo(t.value), 1));
  }
}, Iu = di($u);
customElements.define("emoji-music-recaptcha", Iu);
const Pu = di(Au);
customElements.define("emoji-secret", Pu);
Da(Ia).mount("#appEMR");
