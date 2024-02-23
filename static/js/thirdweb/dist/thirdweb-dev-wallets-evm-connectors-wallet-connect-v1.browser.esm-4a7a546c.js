import { e as y, _ as o, a as f, b as _, c as s, g as w, f as I, W as S, h as E, w as N } from "./main-55ef2e00.js";
import { W, U as P, S as U } from "./errors-105ad187.browser.esm-d85fe089.js";
import { n as L } from "./normalizeChainId-e4cc0175.browser.esm-b0ad20b4.js";
const v = "last-used-chain-id", C = "last-session";
var a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakSet(), A = /* @__PURE__ */ new WeakSet();
class R extends W {
  constructor(e) {
    super(e), y(this, A), y(this, q), o(this, "id", N.walletConnectV1), o(this, "name", "WalletConnectV1"), o(this, "ready", !0), f(this, a, {
      writable: !0,
      value: void 0
    }), f(this, l, {
      writable: !0,
      value: void 0
    }), o(this, "walletName", void 0), o(this, "onSwitchChain", () => {
      this.emit("message", {
        type: "switch_chain"
      });
    }), o(this, "onDisplayUri", async (t, n) => {
      t && this.emit("message", {
        data: t,
        type: "display_uri_error"
      }), this.emit("message", {
        data: n.params[0],
        type: "display_uri"
      });
    }), o(this, "onRequestSent", (t, n) => {
      t && this.emit("message", {
        data: t,
        type: "request"
      }), this.emit("message", {
        data: n.params[0],
        type: "request"
      });
    }), o(this, "onMessage", (t) => {
      this.emit("message", t);
    }), o(this, "onAccountsChanged", (t) => {
      t.length === 0 ? this.emit("disconnect") : this.emit("change", {
        account: w(t[0])
      });
    }), o(this, "onChainChanged", (t) => {
      const n = L(t), i = this.isChainUnsupported(n);
      s(this, l).setItem(v, String(t)), this.emit("change", {
        chain: {
          id: n,
          unsupported: i
        }
      });
    }), o(this, "onDisconnect", async () => {
      this.walletName = void 0, s(this, l).removeItem(v), s(this, l).removeItem(C), I(this, A, D).call(this), this.emit("disconnect");
    }), _(this, l, e.storage);
  }
  async connect() {
    var t, n;
    let {
      chainId: e
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
      let i = e;
      if (!i) {
        const m = await s(this, l).getItem(v), p = m ? parseInt(m) : void 0;
        p && !this.isChainUnsupported(p) && (i = p);
      }
      const h = await this.getProvider({
        chainId: i,
        create: !0
      });
      this.setupListeners(), setTimeout(() => this.emit("message", {
        type: "connecting"
      }), 0);
      const r = await h.enable(), d = w(r[0]);
      let u = await this.getChainId(), c = this.isChainUnsupported(u);
      if (this.walletName = ((n = (t = h.connector) == null ? void 0 : t.peerMeta) == null ? void 0 : n.name) ?? "", e)
        try {
          await this.switchChain(e), u = e, c = this.isChainUnsupported(u);
        } catch (m) {
          console.error(`could not switch to desired chain id: ${e} `, m);
        }
      return I(this, q, M).call(this), this.emit("connect", {
        account: d,
        chain: {
          id: u,
          unsupported: c
        },
        provider: h
      }), {
        account: d,
        chain: {
          id: u,
          unsupported: c
        },
        provider: new S(h)
      };
    } catch (i) {
      throw /user closed modal/i.test(i.message) ? new P(i) : i;
    }
  }
  async disconnect() {
    await (await this.getProvider()).disconnect();
  }
  async getAccount() {
    const t = (await this.getProvider()).accounts;
    return w(t[0]);
  }
  async getChainId() {
    const e = await this.getProvider();
    return L(e.chainId);
  }
  async getProvider() {
    var n, i, h;
    let {
      chainId: e,
      create: t
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!s(this, a) || e || t) {
      const r = (n = this.options) != null && n.infuraId ? {} : this.chains.reduce((m, p) => ({
        ...m,
        [p.chainId]: p.rpc[0]
      }), {}), d = (await import("./index-42b0f5f5.browser.esm-d080372e.js")).default, u = await s(this, l).getItem(C), c = u ? JSON.parse(u) : void 0;
      this.walletName = ((i = c == null ? void 0 : c.peerMeta) == null ? void 0 : i.name) || void 0, _(this, a, new d({
        ...this.options,
        chainId: e,
        rpc: {
          ...r,
          ...(h = this.options) == null ? void 0 : h.rpc
        },
        session: c || void 0
      }));
    }
    return s(this, a);
  }
  async getSigner() {
    let {
      chainId: e
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [t, n] = await Promise.all([this.getProvider({
      chainId: e
    }), this.getAccount()]);
    return new S(t, e).getSigner(n);
  }
  async isAuthorized() {
    try {
      return !!await this.getAccount();
    } catch {
      return !1;
    }
  }
  async switchChain(e) {
    const t = await this.getProvider(), n = E(e);
    try {
      return await Promise.race([t.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: n
        }]
      }), new Promise((i) => this.on("change", (h) => {
        let {
          chain: r
        } = h;
        (r == null ? void 0 : r.id) === e && i(e);
      }))]), this.chains.find((i) => i.chainId === e) ?? {
        chainId: e,
        name: `Chain ${n}`,
        network: `${n}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        shortName: "eth",
        chain: "ETH",
        slug: "ethereum",
        testnet: !1
      };
    } catch (i) {
      const h = typeof i == "string" ? i : i == null ? void 0 : i.message;
      if (/user rejected request/i.test(h))
        throw new P(i);
      const r = this.chains.find((d) => d.chainId === e);
      if (!r)
        throw new U(`Chain ${e} is not added in the list of supported chains`);
      if (/Unrecognized chain ID/i.test(h)) {
        this.emit("message", {
          type: "add_chain"
        });
        const d = this.getBlockExplorerUrls(r);
        return await t.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: n,
            chainName: r.name,
            nativeCurrency: r.nativeCurrency,
            rpcUrls: r.rpc,
            blockExplorerUrls: d
          }]
        }), r;
      } else
        throw new U(i);
    }
  }
  async setupListeners() {
    s(this, a) && (s(this, a).on("accountsChanged", this.onAccountsChanged), s(this, a).on("chainChanged", this.onChainChanged), s(this, a).on("disconnect", this.onDisconnect), s(this, a).on("message", this.onMessage), s(this, a).on("switchChain", this.onSwitchChain), s(this, a).on("display_uri", this.onDisplayUri), s(this, a).on("call_request_sent", this.onRequestSent));
  }
}
async function M() {
  var t, n;
  const g = (t = s(this, a)) == null ? void 0 : t.connector.session;
  this.walletName = ((n = g == null ? void 0 : g.peerMeta) == null ? void 0 : n.name) || "";
  const e = JSON.stringify(g);
  s(this, l).setItem(C, e);
}
function D() {
  s(this, a) && (s(this, a).removeListener("accountsChanged", this.onAccountsChanged), s(this, a).removeListener("chainChanged", this.onChainChanged), s(this, a).removeListener("disconnect", this.onDisconnect), s(this, a).removeListener("message", this.onMessage), s(this, a).removeListener("switchChain", this.onSwitchChain), s(this, a).removeListener("display_uri", this.onDisplayUri), s(this, a).removeListener("call_request_sent", this.onRequestSent));
}
export {
  R as WalletConnectV1Connector
};
