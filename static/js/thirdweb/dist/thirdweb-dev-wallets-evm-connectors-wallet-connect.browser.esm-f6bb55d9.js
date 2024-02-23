import { e as d, _ as l, a as I, b as D, f as o, c as i, g as _, W as U, h as q, w as z } from "./main-55ef2e00.js";
import { W as K, U as k, S as O } from "./errors-105ad187.browser.esm-d85fe089.js";
const j = "eip155", R = "wagmi.requestedChains", M = "wallet_addEthereumChain", y = "last-used-chain-id";
var n = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakSet(), H = /* @__PURE__ */ new WeakSet(), P = /* @__PURE__ */ new WeakSet(), E = /* @__PURE__ */ new WeakSet(), w = /* @__PURE__ */ new WeakSet(), N = /* @__PURE__ */ new WeakSet(), A = /* @__PURE__ */ new WeakSet(), W = /* @__PURE__ */ new WeakSet();
class Z extends K {
  constructor(s) {
    super({
      ...s,
      options: {
        isNewChainsStale: !0,
        ...s.options
      }
    }), d(this, W), d(this, A), d(this, N), d(this, w), d(this, E), d(this, P), d(this, H), d(this, S), l(this, "id", z.walletConnect), l(this, "name", "WalletConnect"), l(this, "ready", !0), I(this, n, {
      writable: !0,
      value: void 0
    }), I(this, f, {
      writable: !0,
      value: void 0
    }), I(this, u, {
      writable: !0,
      value: void 0
    }), l(this, "onAccountsChanged", (e) => {
      e.length === 0 ? this.emit("disconnect") : this.emit("change", {
        account: _(e[0])
      });
    }), l(this, "onChainChanged", (e) => {
      const a = Number(e), t = this.isChainUnsupported(a);
      i(this, u).setItem(y, String(e)), this.emit("change", {
        chain: {
          id: a,
          unsupported: t
        }
      });
    }), l(this, "onDisconnect", () => {
      o(this, w, C).call(this, []), i(this, u).removeItem(y), this.emit("disconnect");
    }), l(this, "onDisplayUri", (e) => {
      this.emit("message", {
        type: "display_uri",
        data: e
      });
    }), l(this, "onConnect", () => {
      this.emit("connect", {
        provider: i(this, n)
      });
    }), D(this, u, s.options.storage), o(this, S, b).call(this);
  }
  async connect() {
    var a;
    let {
      chainId: s,
      pairingTopic: e
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
      let t = s;
      if (!t) {
        const m = await i(this, u).getItem(y), c = m ? parseInt(m) : void 0;
        c && !this.isChainUnsupported(c) ? t = c : t = (a = this.chains[0]) == null ? void 0 : a.chainId;
      }
      if (!t)
        throw new Error("No chains found on connector.");
      const r = await this.getProvider();
      this.setupListeners();
      const p = await o(this, P, T).call(this);
      if (r.session && p && await r.disconnect(), !r.session || p) {
        const m = this.chains.filter((c) => c.chainId !== t).map((c) => c.chainId);
        this.emit("message", {
          type: "connecting"
        }), await r.connect({
          pairingTopic: e,
          chains: [t],
          optionalChains: m.length > 0 ? m : [t]
        }), o(this, w, C).call(this, this.chains.map((c) => {
          let {
            chainId: V
          } = c;
          return V;
        }));
      }
      const v = await r.enable();
      if (v.length === 0)
        throw new Error("No accounts found on provider.");
      const g = _(v[0]), L = await this.getChainId(), Q = this.isChainUnsupported(L);
      return {
        account: g,
        chain: {
          id: L,
          unsupported: Q
        },
        provider: new U(r)
      };
    } catch (t) {
      throw /user rejected/i.test(t == null ? void 0 : t.message) ? new k(t) : t;
    }
  }
  async disconnect() {
    const s = await this.getProvider();
    try {
      await s.disconnect();
    } catch (e) {
      if (!/No matching key/i.test(e.message))
        throw e;
    } finally {
      o(this, E, x).call(this), o(this, w, C).call(this, []);
    }
  }
  async getAccount() {
    const {
      accounts: s
    } = await this.getProvider();
    if (s.length === 0)
      throw new Error("No accounts found on provider.");
    return _(s[0]);
  }
  async getChainId() {
    const {
      chainId: s
    } = await this.getProvider();
    return s;
  }
  async getProvider() {
    let {
      chainId: s
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (i(this, n) || await o(this, S, b).call(this), s && await this.switchChain(s), !i(this, n))
      throw new Error("No provider found.");
    return i(this, n);
  }
  async getSigner() {
    let {
      chainId: s
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [e, a] = await Promise.all([this.getProvider({
      chainId: s
    }), this.getAccount()]);
    return new U(e, s).getSigner(a);
  }
  async isAuthorized() {
    try {
      const [s, e] = await Promise.all([this.getAccount(), this.getProvider()]), a = await o(this, P, T).call(this);
      if (!s)
        return !1;
      if (a && e.session) {
        try {
          await e.disconnect();
        } catch {
        }
        return !1;
      }
      return !0;
    } catch {
      return !1;
    }
  }
  async switchChain(s) {
    var a;
    const e = this.chains.find((t) => t.chainId === s);
    if (!e)
      throw new O(new Error("chain not found on connector."));
    try {
      const t = await this.getProvider(), r = o(this, A, G).call(this), p = o(this, W, J).call(this);
      if (!r.includes(s) && p.includes(M)) {
        await t.request({
          method: M,
          params: [{
            chainId: q(e.chainId),
            blockExplorerUrls: [(a = e.explorers) != null && a.length ? e.explorers[0] : void 0],
            chainName: e.name,
            nativeCurrency: e.nativeCurrency,
            rpcUrls: [...e.rpc]
          }]
        });
        const g = await o(this, N, F).call(this);
        g.push(s), o(this, w, C).call(this, g);
      }
      return await t.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: q(s)
        }]
      }), e;
    } catch (t) {
      const r = typeof t == "string" ? t : t == null ? void 0 : t.message;
      throw /user rejected request/i.test(r) ? new k(t) : new O(t);
    }
  }
  async setupListeners() {
    i(this, n) && (o(this, E, x).call(this), i(this, n).on("accountsChanged", this.onAccountsChanged), i(this, n).on("chainChanged", this.onChainChanged), i(this, n).on("disconnect", this.onDisconnect), i(this, n).on("session_delete", this.onDisconnect), i(this, n).on("display_uri", this.onDisplayUri), i(this, n).on("connect", this.onConnect));
  }
}
async function b() {
  return i(this, f) || D(this, f, o(this, H, Y).call(this)), i(this, f);
}
async function Y() {
  const {
    default: h,
    OPTIONAL_EVENTS: s,
    OPTIONAL_METHODS: e
  } = await import("./index.es-9ff8678e.js"), [a, ...t] = this.chains.map((r) => {
    let {
      chainId: p
    } = r;
    return p;
  });
  a && D(this, n, await h.init({
    showQrModal: this.options.qrcode !== !1,
    projectId: this.options.projectId,
    optionalMethods: e,
    optionalEvents: s,
    chains: [a],
    optionalChains: t,
    metadata: {
      name: this.options.dappMetadata.name,
      description: this.options.dappMetadata.description || "",
      url: this.options.dappMetadata.url,
      icons: [this.options.dappMetadata.logoUrl || ""]
    },
    rpcMap: Object.fromEntries(this.chains.map((r) => [r.chainId, r.rpc[0]])),
    qrModalOptions: {
      ...this.options.qrModalOptions,
      explorerAllowList: [],
      explorerDenyList: []
    }
  }));
}
async function T() {
  if (o(this, W, J).call(this).includes(M) || !this.options.isNewChainsStale)
    return !1;
  const s = await o(this, N, F).call(this), e = this.chains.map((t) => {
    let {
      chainId: r
    } = t;
    return r;
  }), a = o(this, A, G).call(this);
  return a.length && !a.some((t) => e.includes(t)) ? !1 : !e.every((t) => s.includes(t));
}
function x() {
  i(this, n) && (i(this, n).removeListener("accountsChanged", this.onAccountsChanged), i(this, n).removeListener("chainChanged", this.onChainChanged), i(this, n).removeListener("disconnect", this.onDisconnect), i(this, n).removeListener("session_delete", this.onDisconnect), i(this, n).removeListener("display_uri", this.onDisplayUri), i(this, n).removeListener("connect", this.onConnect));
}
function C(h) {
  i(this, u).setItem(R, JSON.stringify(h));
}
async function F() {
  const h = await i(this, u).getItem(R);
  return h ? JSON.parse(h) : [];
}
function G() {
  var s, e, a;
  return i(this, n) ? ((a = (e = (s = i(this, n).session) == null ? void 0 : s.namespaces[j]) == null ? void 0 : e.chains) == null ? void 0 : a.map((t) => parseInt(t.split(":")[1] || ""))) ?? [] : [];
}
function J() {
  var s, e;
  return i(this, n) ? ((e = (s = i(this, n).session) == null ? void 0 : s.namespaces[j]) == null ? void 0 : e.methods) ?? [] : [];
}
export {
  Z as WalletConnectConnector
};
