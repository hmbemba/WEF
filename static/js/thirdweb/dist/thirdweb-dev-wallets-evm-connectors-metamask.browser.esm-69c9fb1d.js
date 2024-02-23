import { _ as a, a as C, g as w, b as v, c as y, W as A, h as E, d as I, w as S } from "./main-55ef2e00.js";
import { W, C as d, U as u, R as P, a as k, A as U, S as _ } from "./errors-105ad187.browser.esm-d85fe089.js";
import { n as p } from "./normalizeChainId-e4cc0175.browser.esm-b0ad20b4.js";
function D(h) {
  var s;
  if (!h)
    return "Injected";
  const t = (e) => {
    if (e.isAvalanche)
      return "Core Wallet";
    if (e.isBitKeep)
      return "BitKeep";
    if (e.isBraveWallet)
      return "Brave Wallet";
    if (e.isCoinbaseWallet)
      return "Coinbase Wallet";
    if (e.isExodus)
      return "Exodus";
    if (e.isFrame)
      return "Frame";
    if (e.isKuCoinWallet)
      return "KuCoin Wallet";
    if (e.isMathWallet)
      return "MathWallet";
    if (e.isOneInchIOSWallet || e.isOneInchAndroidWallet)
      return "1inch Wallet";
    if (e.isOpera)
      return "Opera";
    if (e.isPortal)
      return "Ripio Portal";
    if (e.isTally)
      return "Tally";
    if (e.isTokenPocket)
      return "TokenPocket";
    if (e.isTokenary)
      return "Tokenary";
    if (e.isTrust || e.isTrustWallet)
      return "Trust Wallet";
    if (e.isMetaMask)
      return "MetaMask";
  };
  if ((s = h.providers) != null && s.length) {
    const e = /* @__PURE__ */ new Set();
    let o = 1;
    for (const n of h.providers) {
      let r = t(n);
      r || (r = `Unknown Wallet #${o}`, o += 1), e.add(r);
    }
    const i = [...e];
    return i.length ? i : i[0] ?? "Injected";
  }
  return t(h) ?? "Injected";
}
var f = /* @__PURE__ */ new WeakMap();
class T extends W {
  /**
   * Name of the injected connector
   */
  /**
   * Whether the connector is ready to be used
   *
   * `true` if the injected provider is found
   */
  constructor(t) {
    const e = {
      ...{
        shimDisconnect: !0,
        getProvider: () => {
          if (I(globalThis.window))
            return globalThis.window.ethereum;
        }
      },
      ...t.options
    };
    super({
      chains: t.chains,
      options: e
    }), a(this, "id", void 0), a(this, "name", void 0), a(this, "ready", void 0), C(this, f, {
      writable: !0,
      value: void 0
    }), a(this, "connectorStorage", void 0), a(this, "shimDisconnectKey", "injected.shimDisconnect"), a(this, "onAccountsChanged", async (i) => {
      i.length === 0 ? this.emit("disconnect") : this.emit("change", {
        account: w(i[0])
      });
    }), a(this, "onChainChanged", (i) => {
      const n = p(i), r = this.isChainUnsupported(n);
      this.emit("change", {
        chain: {
          id: n,
          unsupported: r
        }
      });
    }), a(this, "onDisconnect", async (i) => {
      i.code === 1013 && await this.getProvider() && await this.getAccount() || (this.emit("disconnect"), this.options.shimDisconnect && await this.connectorStorage.removeItem(this.shimDisconnectKey));
    });
    const o = e.getProvider();
    if (typeof e.name == "string")
      this.name = e.name;
    else if (o) {
      const i = D(o);
      e.name ? this.name = e.name(i) : typeof i == "string" ? this.name = i : this.name = i[0];
    } else
      this.name = "Injected";
    this.id = "injected", this.ready = !!o, this.connectorStorage = t.connectorStorage;
  }
  /**
   * * Connect to the injected provider
   * * switch to the given chain if `chainId` is specified as an argument
   */
  async connect() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
      const s = await this.getProvider();
      if (!s)
        throw new d();
      this.setupListeners(), this.emit("message", {
        type: "connecting"
      });
      const e = await s.request({
        method: "eth_requestAccounts"
      }), o = w(e[0]);
      let i = await this.getChainId(), n = this.isChainUnsupported(i);
      if (t.chainId && i !== t.chainId)
        try {
          await this.switchChain(t.chainId), i = t.chainId, n = this.isChainUnsupported(t.chainId);
        } catch (c) {
          console.error(`Could not switch to chain id: ${t.chainId}`, c);
        }
      this.options.shimDisconnect && await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      const r = {
        account: o,
        chain: {
          id: i,
          unsupported: n
        },
        provider: s
      };
      return this.emit("connect", r), r;
    } catch (s) {
      throw this.isUserRejectedRequestError(s) ? new u(s) : s.code === -32002 ? new P(s) : s;
    }
  }
  /**
   * disconnect from the injected provider
   */
  async disconnect() {
    const t = await this.getProvider();
    t != null && t.removeListener && (t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && await this.connectorStorage.removeItem(this.shimDisconnectKey));
  }
  /**
   * @returns The first account address from the injected provider
   */
  async getAccount() {
    const t = await this.getProvider();
    if (!t)
      throw new d();
    const s = await t.request({
      method: "eth_accounts"
    });
    return w(s[0]);
  }
  /**
   * @returns The `chainId` of the currently connected chain from injected provider normalized to a `number`
   */
  async getChainId() {
    const t = await this.getProvider();
    if (!t)
      throw new d();
    return t.request({
      method: "eth_chainId"
    }).then(p);
  }
  /**
   * get the injected provider
   */
  async getProvider() {
    const t = this.options.getProvider();
    return t && v(this, f, t), y(this, f);
  }
  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId: t
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [s, e] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new A(s, t).getSigner(e);
  }
  /**
   *
   * @returns `true` if the connector is connected and address is available, else `false`
   */
  async isAuthorized() {
    try {
      if (this.options.shimDisconnect && // If shim does not exist in storage, wallet is disconnected
      !await this.connectorStorage.getItem(this.shimDisconnectKey))
        return !1;
      if (!await this.getProvider())
        throw new d();
      return !!await this.getAccount();
    } catch {
      return !1;
    }
  }
  /**
   * switch to given chain
   */
  async switchChain(t) {
    var o, i;
    const s = await this.getProvider();
    if (!s)
      throw new d();
    const e = E(t);
    try {
      await s.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: e
        }]
      });
      const n = this.chains.find((r) => r.chainId === t);
      return n || {
        chainId: t,
        name: `Chain ${e}`,
        slug: `${e}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: !0
      };
    } catch (n) {
      const r = this.chains.find((c) => c.chainId === t);
      if (!r)
        throw new k({
          chainId: t,
          connectorId: this.id
        });
      if (n.code === 4902 || // Unwrapping for MetaMask Mobile
      // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
      ((i = (o = n == null ? void 0 : n.data) == null ? void 0 : o.originalError) == null ? void 0 : i.code) === 4902)
        try {
          return await s.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: e,
              chainName: r.name,
              nativeCurrency: r.nativeCurrency,
              rpcUrls: r.rpc,
              blockExplorerUrls: this.getBlockExplorerUrls(r)
            }]
          }), r;
        } catch (c) {
          throw this.isUserRejectedRequestError(c) ? new u(n) : new U();
        }
      throw this.isUserRejectedRequestError(n) ? new u(n) : new _(n);
    }
  }
  async setupListeners() {
    const t = await this.getProvider();
    t.on && (t.on("accountsChanged", this.onAccountsChanged), t.on("chainChanged", this.onChainChanged), t.on("disconnect", this.onDisconnect));
  }
  isUserRejectedRequestError(t) {
    return t.code === 4001;
  }
}
var m = /* @__PURE__ */ new WeakMap();
class b extends T {
  constructor(t) {
    const e = {
      ...{
        name: "MetaMask",
        shimDisconnect: !0,
        shimChainChangedDisconnect: !0,
        getProvider() {
          var i;
          function o(n) {
            if (n != null && n.isMetaMask && !(n.isBraveWallet && !n._events && !n._state) && !n.isAvalanche && !n.isKuCoinWallet && !n.isPortal && !n.isTokenPocket && !n.isTokenary)
              return n;
          }
          if (I(globalThis.window))
            return (i = globalThis.window.ethereum) != null && i.providers ? globalThis.window.ethereum.providers.find(o) : o(globalThis.window.ethereum);
        }
      },
      ...t.options
    };
    super({
      chains: t.chains,
      options: e,
      connectorStorage: t.connectorStorage
    }), a(this, "id", S.metamask), C(this, m, {
      writable: !0,
      value: void 0
    }), v(this, m, e.UNSTABLE_shimOnConnectSelectAccount);
  }
  /**
   * Connect to injected MetaMask provider
   */
  async connect() {
    var s, e;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
      const o = await this.getProvider();
      if (!o)
        throw new d();
      this.setupListeners(), this.emit("message", {
        type: "connecting"
      });
      let i = null;
      if (y(this, m) && ((s = this.options) != null && s.shimDisconnect) && !this.connectorStorage.getItem(this.shimDisconnectKey) && (i = await this.getAccount().catch(() => null), !!i))
        try {
          await o.request({
            method: "wallet_requestPermissions",
            params: [{
              eth_accounts: {}
            }]
          });
        } catch (g) {
          if (this.isUserRejectedRequestError(g))
            throw new u(g);
        }
      if (!i) {
        const l = await o.request({
          method: "eth_requestAccounts"
        });
        i = w(l[0]);
      }
      let n = await this.getChainId(), r = this.isChainUnsupported(n);
      if (t.chainId && n !== t.chainId)
        try {
          await this.switchChain(t.chainId), n = t.chainId, r = this.isChainUnsupported(t.chainId);
        } catch (l) {
          console.error(`Could not switch to chain id : ${t.chainId}`, l);
        }
      (e = this.options) != null && e.shimDisconnect && await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      const c = {
        chain: {
          id: n,
          unsupported: r
        },
        provider: o,
        account: i
      };
      return this.emit("connect", c), c;
    } catch (o) {
      throw this.isUserRejectedRequestError(o) ? new u(o) : o.code === -32002 ? new P(o) : o;
    }
  }
  async switchAccount() {
    await (await this.getProvider()).request({
      method: "wallet_requestPermissions",
      params: [{
        eth_accounts: {}
      }]
    });
  }
}
export {
  b as MetaMaskConnector
};
