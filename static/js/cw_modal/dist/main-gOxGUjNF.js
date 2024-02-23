function sl(t, e = {}) {
  const { fees: r = t.fees, formatters: n = t.formatters, serializers: o = t.serializers } = e;
  return {
    ...t,
    fees: r,
    formatters: n,
    serializers: o
  };
}
const Mh = /* @__PURE__ */ sl({
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
    default: { name: "Arbiscan", url: "https://arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
}), Uh = "1.19.10", Lh = (t) => t, Ws = (t) => t, jh = () => `viem@${Uh}`;
class H extends Error {
  constructor(e, r = {}) {
    var i;
    super(), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ViemError"
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: jh()
    });
    const n = r.cause instanceof H ? r.cause.details : (i = r.cause) != null && i.message ? r.cause.message : r.details, o = r.cause instanceof H && r.cause.docsPath || r.docsPath;
    this.message = [
      e || "An error occurred.",
      "",
      ...r.metaMessages ? [...r.metaMessages, ""] : [],
      ...o ? [
        `Docs: https://viem.sh${o}.html${r.docsSlug ? `#${r.docsSlug}` : ""}`
      ] : [],
      ...n ? [`Details: ${n}`] : [],
      `Version: ${this.version}`
    ].join(`
`), r.cause && (this.cause = r.cause), this.details = n, this.docsPath = o, this.metaMessages = r.metaMessages, this.shortMessage = e;
  }
  walk(e) {
    return ed(this, e);
  }
}
function ed(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t ? ed(t.cause, e) : e ? null : t;
}
class Fh extends H {
  constructor({ max: e, min: r, signed: n, size: o, value: i }) {
    super(`Number "${i}" is not in safe ${o ? `${o * 8}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${r} to ${e})` : `(above ${r})`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntegerOutOfRangeError"
    });
  }
}
class Wh extends H {
  constructor(e) {
    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidHexBooleanError"
    });
  }
}
class zh extends H {
  constructor({ givenSize: e, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeOverflowError"
    });
  }
}
function zt(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function Ve(t) {
  return zt(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
function Yr(t, { dir: e = "left" } = {}) {
  let r = typeof t == "string" ? t.replace("0x", "") : t, n = 0;
  for (let o = 0; o < r.length - 1 && r[e === "left" ? o : r.length - o - 1].toString() === "0"; o++)
    n++;
  return r = e === "left" ? r.slice(n) : r.slice(0, r.length - n), typeof t == "string" ? (r.length === 1 && e === "right" && (r = `${r}0`), `0x${r.length % 2 === 1 ? `0${r}` : r}`) : r;
}
class td extends H {
  constructor({ offset: e, position: r, size: n }) {
    super(`Slice ${r === "start" ? "starting" : "ending"} at offset "${e}" is out-of-bounds (size: ${n}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SliceOffsetOutOfBoundsError"
    });
  }
}
class rd extends H {
  constructor({ size: e, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SizeExceedsPaddingSizeError"
    });
  }
}
function Xn(t, { dir: e, size: r = 32 } = {}) {
  return typeof t == "string" ? yr(t, { dir: e, size: r }) : Hh(t, { dir: e, size: r });
}
function yr(t, { dir: e, size: r = 32 } = {}) {
  if (r === null)
    return t;
  const n = t.replace("0x", "");
  if (n.length > r * 2)
    throw new rd({
      size: Math.ceil(n.length / 2),
      targetSize: r,
      type: "hex"
    });
  return `0x${n[e === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function Hh(t, { dir: e, size: r = 32 } = {}) {
  if (r === null)
    return t;
  if (t.length > r)
    throw new rd({
      size: t.length,
      targetSize: r,
      type: "bytes"
    });
  const n = new Uint8Array(r);
  for (let o = 0; o < r; o++) {
    const i = e === "right";
    n[i ? o : r - o - 1] = t[i ? o : t.length - o - 1];
  }
  return n;
}
const qh = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function ar(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? ue(t, e) : typeof t == "string" ? al(t, e) : typeof t == "boolean" ? nd(t, e) : Bi(t, e);
}
function nd(t, e = {}) {
  const r = `0x${Number(t)}`;
  return typeof e.size == "number" ? (Nr(r, { size: e.size }), Xn(r, { size: e.size })) : r;
}
function Bi(t, e = {}) {
  let r = "";
  for (let o = 0; o < t.length; o++)
    r += qh[t[o]];
  const n = `0x${r}`;
  return typeof e.size == "number" ? (Nr(n, { size: e.size }), Xn(n, { dir: "right", size: e.size })) : n;
}
function ue(t, e = {}) {
  const { signed: r, size: n } = e, o = BigInt(t);
  let i;
  n ? r ? i = (1n << BigInt(n) * 8n - 1n) - 1n : i = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
  const s = typeof i == "bigint" && r ? -i - 1n : 0;
  if (i && o > i || o < s) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new Fh({
      max: i ? `${i}${c}` : void 0,
      min: `${s}${c}`,
      signed: r,
      size: n,
      value: `${t}${c}`
    });
  }
  const a = `0x${(r && o < 0 ? (1n << BigInt(n * 8)) + BigInt(o) : o).toString(16)}`;
  return n ? Xn(a, { size: n }) : a;
}
const Gh = /* @__PURE__ */ new TextEncoder();
function al(t, e = {}) {
  const r = Gh.encode(t);
  return Bi(r, e);
}
const Vh = /* @__PURE__ */ new TextEncoder();
function $r(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? Kh(t, e) : typeof t == "boolean" ? Zh(t, e) : zt(t) ? cl(t, e) : er(t, e);
}
function Zh(t, e = {}) {
  const r = new Uint8Array(1);
  return r[0] = Number(t), typeof e.size == "number" ? (Nr(r, { size: e.size }), Xn(r, { size: e.size })) : r;
}
const Jt = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function yu(t) {
  if (t >= Jt.zero && t <= Jt.nine)
    return t - Jt.zero;
  if (t >= Jt.A && t <= Jt.F)
    return t - (Jt.A - 10);
  if (t >= Jt.a && t <= Jt.f)
    return t - (Jt.a - 10);
}
function cl(t, e = {}) {
  let r = t;
  e.size && (Nr(r, { size: e.size }), r = Xn(r, { dir: "right", size: e.size }));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  const o = n.length / 2, i = new Uint8Array(o);
  for (let s = 0, a = 0; s < o; s++) {
    const c = yu(n.charCodeAt(a++)), l = yu(n.charCodeAt(a++));
    if (c === void 0 || l === void 0)
      throw new H(`Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`);
    i[s] = c * 16 + l;
  }
  return i;
}
function Kh(t, e) {
  const r = ue(t, e);
  return cl(r);
}
function er(t, e = {}) {
  const r = Vh.encode(t);
  return typeof e.size == "number" ? (Nr(r, { size: e.size }), Xn(r, { dir: "right", size: e.size })) : r;
}
function Nr(t, { size: e }) {
  if (Ve(t) > e)
    throw new zh({
      givenSize: Ve(t),
      maxSize: e
    });
}
function zs(t, e = {}) {
  const { signed: r } = e;
  e.size && Nr(t, { size: e.size });
  const n = BigInt(t);
  if (!r)
    return n;
  const o = (t.length - 2) / 2, i = (1n << BigInt(o) * 8n - 1n) - 1n;
  return n <= i ? n : n - BigInt(`0x${"f".padStart(o * 2, "f")}`) - 1n;
}
function Yh(t, e = {}) {
  let r = t;
  if (e.size && (Nr(r, { size: e.size }), r = Yr(r)), Yr(r) === "0x00")
    return !1;
  if (Yr(r) === "0x01")
    return !0;
  throw new Wh(r);
}
function ot(t, e = {}) {
  return Number(zs(t, e));
}
function id(t, e = {}) {
  let r = cl(t);
  return e.size && (Nr(r, { size: e.size }), r = Yr(r, { dir: "right" })), new TextDecoder().decode(r);
}
const od = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559"
};
function sd(t) {
  const e = {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    chainId: t.chainId ? ot(t.chainId) : void 0,
    gas: t.gas ? BigInt(t.gas) : void 0,
    gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
    maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0,
    nonce: t.nonce ? ot(t.nonce) : void 0,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    type: t.type ? od[t.type] : void 0,
    typeHex: t.type ? t.type : void 0,
    value: t.value ? BigInt(t.value) : void 0,
    v: t.v ? BigInt(t.v) : void 0
  };
  return e.yParity = (() => {
    if (t.yParity)
      return Number(t.yParity);
    if (typeof e.v == "bigint") {
      if (e.v === 0n || e.v === 27n)
        return 0;
      if (e.v === 1n || e.v === 28n)
        return 1;
      if (e.v >= 35n)
        return e.v % 2n === 0n ? 1 : 0;
    }
  })(), e.type === "legacy" && (delete e.accessList, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas, delete e.yParity), e.type === "eip2930" && (delete e.maxFeePerGas, delete e.maxPriorityFeePerGas), e;
}
function ad(t) {
  var r;
  const e = (r = t.transactions) == null ? void 0 : r.map((n) => typeof n == "string" ? n : sd(n));
  return {
    ...t,
    baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
    difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
    gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
    hash: t.hash ? t.hash : null,
    logsBloom: t.logsBloom ? t.logsBloom : null,
    nonce: t.nonce ? t.nonce : null,
    number: t.number ? BigInt(t.number) : null,
    size: t.size ? BigInt(t.size) : void 0,
    timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
    transactions: e,
    totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null
  };
}
function kt(t, { args: e, eventName: r } = {}) {
  return {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    logIndex: t.logIndex ? Number(t.logIndex) : null,
    transactionHash: t.transactionHash ? t.transactionHash : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    ...r ? { args: e, eventName: r } : {}
  };
}
const Jh = {
  "0x0": "reverted",
  "0x1": "success"
};
function Xh(t) {
  return {
    ...t,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    contractAddress: t.contractAddress ? t.contractAddress : null,
    cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
    effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
    logs: t.logs ? t.logs.map((e) => kt(e)) : null,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? ot(t.transactionIndex) : null,
    status: t.status ? Jh[t.status] : null,
    type: t.type ? od[t.type] || t.type : null
  };
}
const Qh = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2"
};
function Hs(t) {
  return {
    ...t,
    gas: typeof t.gas < "u" ? ue(t.gas) : void 0,
    gasPrice: typeof t.gasPrice < "u" ? ue(t.gasPrice) : void 0,
    maxFeePerGas: typeof t.maxFeePerGas < "u" ? ue(t.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: typeof t.maxPriorityFeePerGas < "u" ? ue(t.maxPriorityFeePerGas) : void 0,
    nonce: typeof t.nonce < "u" ? ue(t.nonce) : void 0,
    type: typeof t.type < "u" ? Qh[t.type] : void 0,
    value: typeof t.value < "u" ? ue(t.value) : void 0
  };
}
class Mi extends H {
  constructor({ address: e }) {
    super(`Address "${e}" is invalid.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAddressError"
    });
  }
}
class sc extends H {
  constructor({ blockNumber: e, chain: r, contract: n }) {
    super(`Chain "${r.name}" does not support contract "${n.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...e && n.blockCreated && n.blockCreated > e ? [
          `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`
        ] : [
          `- The chain does not have the contract "${n.name}" configured.`
        ]
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDoesNotSupportContract"
    });
  }
}
class e1 extends H {
  constructor({ chain: e, currentChainId: r }) {
    super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
      metaMessages: [
        `Current Chain ID:  ${r}`,
        `Expected Chain ID: ${e.id} – ${e.name}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainMismatchError"
    });
  }
}
class t1 extends H {
  constructor() {
    super([
      "No chain was provided to the request.",
      "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainNotFoundError"
    });
  }
}
class cd extends H {
  constructor() {
    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ClientChainNotConfiguredError"
    });
  }
}
const r1 = {
  gwei: 9,
  wei: 18
}, n1 = {
  ether: -9,
  wei: 9
}, i1 = {
  ether: -18,
  gwei: -9
};
function os(t, e) {
  let r = t.toString();
  const n = r.startsWith("-");
  n && (r = r.slice(1)), r = r.padStart(e, "0");
  let [o, i] = [
    r.slice(0, r.length - e),
    r.slice(r.length - e)
  ];
  return i = i.replace(/(0+)$/, ""), `${n ? "-" : ""}${o || "0"}${i ? `.${i}` : ""}`;
}
function pt(t, e = "wei") {
  return os(t, n1[e]);
}
class Sn extends H {
  constructor({ cause: e, message: r } = {}) {
    var o;
    const n = (o = r == null ? void 0 : r.replace("execution reverted: ", "")) == null ? void 0 : o.replace("execution reverted", "");
    super(`Execution reverted ${n ? `with reason: ${n}` : "for an unknown reason"}.`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(Sn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(Sn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class ss extends H {
  constructor({ cause: e, maxFeePerGas: r } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${pt(r)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooHigh"
    });
  }
}
Object.defineProperty(ss, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class ac extends H {
  constructor({ cause: e, maxFeePerGas: r } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${pt(r)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeCapTooLow"
    });
  }
}
Object.defineProperty(ac, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class cc extends H {
  constructor({ cause: e, nonce: r } = {}) {
    super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}is higher than the next one expected.`, { cause: e }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooHighError"
    });
  }
}
Object.defineProperty(cc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class lc extends H {
  constructor({ cause: e, nonce: r } = {}) {
    super([
      `Nonce provided for the transaction ${r ? `(${r}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: e }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceTooLowError"
    });
  }
}
Object.defineProperty(lc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class uc extends H {
  constructor({ cause: e, nonce: r } = {}) {
    super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}exceeds the maximum allowed nonce.`, { cause: e }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "NonceMaxValueError"
    });
  }
}
Object.defineProperty(uc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class dc extends H {
  constructor({ cause: e } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: e,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(dc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds/
});
class fc extends H {
  constructor({ cause: e, gas: r } = {}) {
    super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(fc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class hc extends H {
  constructor({ cause: e, gas: r } = {}) {
    super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction is too low.`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(hc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class pc extends H {
  constructor({ cause: e }) {
    super("The transaction type is not supported for this chain.", {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(pc, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class as extends H {
  constructor({ cause: e, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${r ? ` = ${pt(r)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n ? ` = ${pt(n)} gwei` : ""}).`
    ].join(`
`), {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(as, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class qs extends H {
  constructor({ cause: e }) {
    super(`An error occurred while executing: ${e == null ? void 0 : e.shortMessage}`, {
      cause: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownNodeError"
    });
  }
}
const o1 = /^0x[a-fA-F0-9]{40}$/;
function On(t) {
  return o1.test(t);
}
function tr(t) {
  return typeof t[0] == "string" ? ll(t) : s1(t);
}
function s1(t) {
  let e = 0;
  for (const o of t)
    e += o.length;
  const r = new Uint8Array(e);
  let n = 0;
  for (const o of t)
    r.set(o, n), n += o.length;
  return r;
}
function ll(t) {
  return `0x${t.reduce((e, r) => e + r.replace("0x", ""), "")}`;
}
function a1(t, e) {
  const r = t.exec(e);
  return r == null ? void 0 : r.groups;
}
const vu = /^tuple(?<array>(\[(\d*)\])*)$/;
function gc(t) {
  let e = t.type;
  if (vu.test(t.type) && "components" in t) {
    e = "(";
    const r = t.components.length;
    for (let o = 0; o < r; o++) {
      const i = t.components[o];
      e += gc(i), o < r - 1 && (e += ", ");
    }
    const n = a1(vu, t.type);
    return e += `)${(n == null ? void 0 : n.array) ?? ""}`, gc({
      ...t,
      type: e
    });
  }
  return "indexed" in t && t.indexed && (e = `${e} indexed`), t.name ? `${e} ${t.name}` : e;
}
function fi(t) {
  let e = "";
  const r = t.length;
  for (let n = 0; n < r; n++) {
    const o = t[n];
    e += gc(o), n !== r - 1 && (e += ", ");
  }
  return e;
}
function c1(t) {
  return t.type === "function" ? `function ${t.name}(${fi(t.inputs)})${t.stateMutability && t.stateMutability !== "nonpayable" ? ` ${t.stateMutability}` : ""}${t.outputs.length ? ` returns (${fi(t.outputs)})` : ""}` : t.type === "event" ? `event ${t.name}(${fi(t.inputs)})` : t.type === "error" ? `error ${t.name}(${fi(t.inputs)})` : t.type === "constructor" ? `constructor(${fi(t.inputs)})${t.stateMutability === "payable" ? " payable" : ""}` : t.type === "fallback" ? "fallback()" : "receive() external payable";
}
function oe(t, e, r) {
  return (n) => {
    var o;
    return ((o = t[e.name || r]) == null ? void 0 : o.call(t, n)) ?? e(t, n);
  };
}
function ln(t, { includeName: e = !1 } = {}) {
  if (t.type !== "function" && t.type !== "event" && t.type !== "error")
    throw new x1(t.type);
  return `${t.name}(${Gs(t.inputs, { includeName: e })})`;
}
function Gs(t, { includeName: e = !1 } = {}) {
  return t ? t.map((r) => l1(r, { includeName: e })).join(e ? ", " : ",") : "";
}
function l1(t, { includeName: e }) {
  return t.type.startsWith("tuple") ? `(${Gs(t.components, { includeName: e })})${t.type.slice(5)}` : t.type + (e && t.name ? ` ${t.name}` : "");
}
class u1 extends H {
  constructor({ docsPath: e }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorNotFoundError"
    });
  }
}
class xu extends H {
  constructor({ docsPath: e }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiConstructorParamsNotFoundError"
    });
  }
}
class ul extends H {
  constructor({ data: e, params: r, size: n }) {
    super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Gs(r, { includeName: !0 })})`,
        `Data:   ${e} (${n} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e, this.params = r, this.size = n;
  }
}
class Vs extends H {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiDecodingZeroDataError"
    });
  }
}
class d1 extends H {
  constructor({ expectedLength: e, givenLength: r, type: n }) {
    super([
      `ABI encoding array length mismatch for type ${n}.`,
      `Expected length: ${e}`,
      `Given length: ${r}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingArrayLengthMismatchError"
    });
  }
}
class f1 extends H {
  constructor({ expectedSize: e, value: r }) {
    super(`Size of bytes "${r}" (bytes${Ve(r)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingBytesSizeMismatchError"
    });
  }
}
class h1 extends H {
  constructor({ expectedLength: e, givenLength: r }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${e}`,
      `Given length (values): ${r}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEncodingLengthMismatchError"
    });
  }
}
class ld extends H {
  constructor(e, { docsPath: r }) {
    super([
      `Encoded error signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = e;
  }
}
class p1 extends H {
  constructor({ docsPath: e }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class g1 extends H {
  constructor(e, { docsPath: r }) {
    super([
      `Encoded event signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventSignatureNotFoundError"
    });
  }
}
class Cu extends H {
  constructor(e, { docsPath: r } = {}) {
    super([
      `Event ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiEventNotFoundError"
    });
  }
}
class cs extends H {
  constructor(e, { docsPath: r } = {}) {
    super([
      `Function ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionNotFoundError"
    });
  }
}
class w1 extends H {
  constructor(e, { docsPath: r }) {
    super([
      `Function "${e}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: r
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class m1 extends H {
  constructor({ expectedSize: e, givenSize: r }) {
    super(`Expected bytes${e}, got bytes${r}.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BytesSizeMismatchError"
    });
  }
}
class Xr extends H {
  constructor({ abiItem: e, data: r, params: n, size: o }) {
    super([
      `Data size of ${o} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Gs(n, { includeName: !0 })})`,
        `Data:   ${r} (${o} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e, this.data = r, this.params = n, this.size = o;
  }
}
class Qn extends H {
  constructor({ abiItem: e, param: r }) {
    super([
      `Expected a topic for indexed event parameter${r.name ? ` "${r.name}"` : ""} on event "${ln(e, { includeName: !0 })}".`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "DecodeLogTopicsMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e;
  }
}
class b1 extends H {
  constructor(e, { docsPath: r }) {
    super([
      `Type "${e}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: r }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiEncodingType"
    });
  }
}
class y1 extends H {
  constructor(e, { docsPath: r }) {
    super([
      `Type "${e}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: r }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiDecodingType"
    });
  }
}
class v1 extends H {
  constructor(e) {
    super([`Value "${e}" is not a valid array.`].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidArrayError"
    });
  }
}
class x1 extends H {
  constructor(e) {
    super([
      `"${e}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidDefinitionTypeError"
    });
  }
}
class C1 extends H {
  constructor(e) {
    super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FilterTypeNotSupportedError"
    });
  }
}
function _1(t) {
  let e = !0, r = "", n = 0, o = "", i = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    if (["(", ")", ","].includes(a) && (e = !0), a === "(" && n++, a === ")" && n--, !!e) {
      if (n === 0) {
        if (a === " " && ["event", "function", ""].includes(o))
          o = "";
        else if (o += a, a === ")") {
          i = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        t[s - 1] !== "," && r !== "," && r !== ",(" && (r = "", e = !1);
        continue;
      }
      o += a, r += a;
    }
  }
  if (!i)
    throw new H("Unable to normalize signature.");
  return o;
}
const ud = (t) => {
  const e = typeof t == "string" ? t : c1(t);
  return _1(e);
}, E1 = (t) => ud(t);
function _u(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Wrong positive integer: ${t}`);
}
function dd(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function Eu(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function $1(t, e) {
  dd(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const Wo = /* @__PURE__ */ BigInt(2 ** 32 - 1), $u = /* @__PURE__ */ BigInt(32);
function A1(t, e = !1) {
  return e ? { h: Number(t & Wo), l: Number(t >> $u & Wo) } : { h: Number(t >> $u & Wo) | 0, l: Number(t & Wo) | 0 };
}
function S1(t, e = !1) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let o = 0; o < t.length; o++) {
    const { h: i, l: s } = A1(t[o], e);
    [r[o], n[o]] = [i, s];
  }
  return [r, n];
}
const D1 = (t, e, r) => t << r | e >>> 32 - r, P1 = (t, e, r) => e << r | t >>> 32 - r, I1 = (t, e, r) => e << r - 32 | t >>> 64 - r, T1 = (t, e, r) => t << r - 32 | e >>> 64 - r;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const O1 = (t) => t instanceof Uint8Array, N1 = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), k1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!k1)
  throw new Error("Non little-endian hardware is not supported");
function R1(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function fd(t) {
  if (typeof t == "string" && (t = R1(t)), !O1(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
class B1 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function M1(t) {
  const e = (n) => t().update(fd(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
const [hd, pd, gd] = [[], [], []], U1 = /* @__PURE__ */ BigInt(0), hi = /* @__PURE__ */ BigInt(1), L1 = /* @__PURE__ */ BigInt(2), j1 = /* @__PURE__ */ BigInt(7), F1 = /* @__PURE__ */ BigInt(256), W1 = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = hi, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], hd.push(2 * (5 * n + r)), pd.push((t + 1) * (t + 2) / 2 % 64);
  let o = U1;
  for (let i = 0; i < 7; i++)
    e = (e << hi ^ (e >> j1) * W1) % F1, e & L1 && (o ^= hi << (hi << /* @__PURE__ */ BigInt(i)) - hi);
  gd.push(o);
}
const [z1, H1] = /* @__PURE__ */ S1(gd, !0), Au = (t, e, r) => r > 32 ? I1(t, e, r) : D1(t, e, r), Su = (t, e, r) => r > 32 ? T1(t, e, r) : P1(t, e, r);
function q1(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let s = 0; s < 10; s++)
      r[s] = t[s] ^ t[s + 10] ^ t[s + 20] ^ t[s + 30] ^ t[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const a = (s + 8) % 10, c = (s + 2) % 10, l = r[c], f = r[c + 1], p = Au(l, f, 1) ^ r[a], g = Su(l, f, 1) ^ r[a + 1];
      for (let w = 0; w < 50; w += 10)
        t[s + w] ^= p, t[s + w + 1] ^= g;
    }
    let o = t[2], i = t[3];
    for (let s = 0; s < 24; s++) {
      const a = pd[s], c = Au(o, i, a), l = Su(o, i, a), f = hd[s];
      o = t[f], i = t[f + 1], t[f] = c, t[f + 1] = l;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let a = 0; a < 10; a++)
        r[a] = t[s + a];
      for (let a = 0; a < 10; a++)
        t[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= z1[n], t[1] ^= H1[n];
  }
  r.fill(0);
}
class dl extends B1 {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, n, o = !1, i = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, _u(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = N1(this.state);
  }
  keccak() {
    q1(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Eu(this);
    const { blockLen: r, state: n } = this;
    e = fd(e);
    const o = e.length;
    for (let i = 0; i < o; ) {
      const s = Math.min(r - this.pos, o - i);
      for (let a = 0; a < s; a++)
        n[this.pos++] ^= e[i++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: r, pos: n, blockLen: o } = this;
    e[n] ^= r, r & 128 && n === o - 1 && this.keccak(), e[o - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Eu(this, !1), dd(e), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let o = 0, i = e.length; o < i; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, i - o);
      e.set(r.subarray(this.posOut, this.posOut + s), o), this.posOut += s, o += s;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return _u(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ($1(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: n, outputLen: o, rounds: i, enableXOF: s } = this;
    return e || (e = new dl(r, n, o, s, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = o, e.enableXOF = s, e.destroyed = this.destroyed, e;
  }
}
const G1 = (t, e, r) => M1(() => new dl(e, t, r)), V1 = /* @__PURE__ */ G1(1, 136, 256 / 8);
function at(t, e) {
  const r = e || "hex", n = V1(zt(t, { strict: !1 }) ? $r(t) : t);
  return r === "bytes" ? n : ar(n);
}
const Z1 = (t) => at($r(t)), fl = (t) => Z1(E1(t));
function He(t, e, r, { strict: n } = {}) {
  return zt(t, { strict: !1 }) ? Y1(t, e, r, {
    strict: n
  }) : K1(t, e, r, {
    strict: n
  });
}
function wd(t, e) {
  if (typeof e == "number" && e > 0 && e > Ve(t) - 1)
    throw new td({
      offset: e,
      position: "start",
      size: Ve(t)
    });
}
function md(t, e, r) {
  if (typeof e == "number" && typeof r == "number" && Ve(t) !== r - e)
    throw new td({
      offset: r,
      position: "end",
      size: Ve(t)
    });
}
function K1(t, e, r, { strict: n } = {}) {
  wd(t, e);
  const o = t.slice(e, r);
  return n && md(o, e, r), o;
}
function Y1(t, e, r, { strict: n } = {}) {
  wd(t, e);
  const o = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (r ?? t.length) * 2)}`;
  return n && md(o, e, r), o;
}
function Co(t, e) {
  if (t.length !== e.length)
    throw new h1({
      expectedLength: t.length,
      givenLength: e.length
    });
  const r = J1({
    params: t,
    values: e
  }), n = pl(r);
  return n.length === 0 ? "0x" : n;
}
function J1({ params: t, values: e }) {
  const r = [];
  for (let n = 0; n < t.length; n++)
    r.push(hl({ param: t[n], value: e[n] }));
  return r;
}
function hl({ param: t, value: e }) {
  const r = Zs(t.type);
  if (r) {
    const [n, o] = r;
    return Q1(e, { length: n, param: { ...t, type: o } });
  }
  if (t.type === "tuple")
    return ip(e, {
      param: t
    });
  if (t.type === "address")
    return X1(e);
  if (t.type === "bool")
    return tp(e);
  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
    const n = t.type.startsWith("int");
    return rp(e, { signed: n });
  }
  if (t.type.startsWith("bytes"))
    return ep(e, { param: t });
  if (t.type === "string")
    return np(e);
  throw new b1(t.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function pl(t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const { dynamic: s, encoded: a } = t[i];
    s ? e += 32 : e += Ve(a);
  }
  const r = [], n = [];
  let o = 0;
  for (let i = 0; i < t.length; i++) {
    const { dynamic: s, encoded: a } = t[i];
    s ? (r.push(ue(e + o, { size: 32 })), n.push(a), o += Ve(a)) : r.push(a);
  }
  return tr([...r, ...n]);
}
function X1(t) {
  if (!On(t))
    throw new Mi({ address: t });
  return { dynamic: !1, encoded: yr(t.toLowerCase()) };
}
function Q1(t, { length: e, param: r }) {
  const n = e === null;
  if (!Array.isArray(t))
    throw new v1(t);
  if (!n && t.length !== e)
    throw new d1({
      expectedLength: e,
      givenLength: t.length,
      type: `${r.type}[${e}]`
    });
  let o = !1;
  const i = [];
  for (let s = 0; s < t.length; s++) {
    const a = hl({ param: r, value: t[s] });
    a.dynamic && (o = !0), i.push(a);
  }
  if (n || o) {
    const s = pl(i);
    if (n) {
      const a = ue(i.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: i.length > 0 ? tr([a, s]) : a
      };
    }
    if (o)
      return { dynamic: !0, encoded: s };
  }
  return {
    dynamic: !1,
    encoded: tr(i.map(({ encoded: s }) => s))
  };
}
function ep(t, { param: e }) {
  const [, r] = e.type.split("bytes"), n = Ve(t);
  if (!r) {
    let o = t;
    return n % 32 !== 0 && (o = yr(o, {
      dir: "right",
      size: Math.ceil((t.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: tr([yr(ue(n, { size: 32 })), o])
    };
  }
  if (n !== parseInt(r))
    throw new f1({
      expectedSize: parseInt(r),
      value: t
    });
  return { dynamic: !1, encoded: yr(t, { dir: "right" }) };
}
function tp(t) {
  return { dynamic: !1, encoded: yr(nd(t)) };
}
function rp(t, { signed: e }) {
  return {
    dynamic: !1,
    encoded: ue(t, {
      size: 32,
      signed: e
    })
  };
}
function np(t) {
  const e = al(t), r = Math.ceil(Ve(e) / 32), n = [];
  for (let o = 0; o < r; o++)
    n.push(yr(He(e, o * 32, (o + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: tr([
      yr(ue(Ve(e), { size: 32 })),
      ...n
    ])
  };
}
function ip(t, { param: e }) {
  let r = !1;
  const n = [];
  for (let o = 0; o < e.components.length; o++) {
    const i = e.components[o], s = Array.isArray(t) ? o : i.name, a = hl({
      param: i,
      value: t[s]
    });
    n.push(a), a.dynamic && (r = !0);
  }
  return {
    dynamic: r,
    encoded: r ? pl(n) : tr(n.map(({ encoded: o }) => o))
  };
}
function Zs(t) {
  const e = t.match(/^(.*)\[(\d+)?\]$/);
  return e ? (
    // Return `null` if the array is dynamic.
    [e[2] ? Number(e[2]) : null, e[1]]
  ) : void 0;
}
const op = (t) => at($r(t)), gl = (t) => He(op(ud(t)), 0, 4);
function _o({ abi: t, args: e = [], name: r }) {
  const n = zt(r, { strict: !1 }), o = t.filter((i) => n ? i.type === "function" ? gl(i) === r : i.type === "event" ? fl(i) === r : !1 : "name" in i && i.name === r);
  if (o.length !== 0) {
    if (o.length === 1)
      return o[0];
    for (const i of o) {
      if (!("inputs" in i))
        continue;
      if (!e || e.length === 0) {
        if (!i.inputs || i.inputs.length === 0)
          return i;
        continue;
      }
      if (!i.inputs || i.inputs.length === 0 || i.inputs.length !== e.length)
        continue;
      if (e.every((a, c) => {
        const l = "inputs" in i && i.inputs[c];
        return l ? wc(a, l) : !1;
      }))
        return i;
    }
    return o[0];
  }
}
function wc(t, e) {
  const r = typeof t, n = e.type;
  switch (n) {
    case "address":
      return On(t);
    case "bool":
      return r === "boolean";
    case "function":
      return r === "string";
    case "string":
      return r === "string";
    default:
      return n === "tuple" && "components" in e ? Object.values(e.components).every((o, i) => wc(Object.values(t)[i], o)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n) ? r === "number" || r === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n) ? r === "string" || t instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n) ? Array.isArray(t) && t.every((o) => wc(o, {
        ...e,
        // Pop off `[]` or `[M]` from end of type
        type: n.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function Eo({ abi: t, eventName: e, args: r }) {
  var a;
  let n = t[0];
  if (e && (n = _o({
    abi: t,
    args: r,
    name: e
  }), !n))
    throw new Cu(e, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  if (n.type !== "event")
    throw new Cu(void 0, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  const o = ln(n), i = fl(o);
  let s = [];
  if (r && "inputs" in n) {
    const c = (a = n.inputs) == null ? void 0 : a.filter((f) => "indexed" in f && f.indexed), l = Array.isArray(r) ? r : Object.values(r).length > 0 ? (c == null ? void 0 : c.map((f) => r[f.name])) ?? [] : [];
    l.length > 0 && (s = (c == null ? void 0 : c.map((f, p) => Array.isArray(l[p]) ? l[p].map((g, w) => Du({ param: f, value: l[p][w] })) : l[p] ? Du({ param: f, value: l[p] }) : null)) ?? []);
  }
  return [i, ...s];
}
function Du({ param: t, value: e }) {
  if (t.type === "string" || t.type === "bytes")
    return at($r(e));
  if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
    throw new C1(t.type);
  return Co([t], [e]);
}
function Ks(t, { method: e }) {
  var n, o;
  const r = {};
  return t.transport.type === "fallback" && ((o = (n = t.transport).onResponse) == null || o.call(n, ({ method: i, response: s, status: a, transport: c }) => {
    a === "success" && e === i && (r[s] = c.request);
  })), (i) => r[i] || t.request;
}
async function bd(t, { address: e, abi: r, args: n, eventName: o, fromBlock: i, strict: s, toBlock: a }) {
  const c = Ks(t, {
    method: "eth_newFilter"
  }), l = o ? Eo({
    abi: r,
    args: n,
    eventName: o
  }) : void 0, f = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: e,
        fromBlock: typeof i == "bigint" ? ue(i) : i,
        toBlock: typeof a == "bigint" ? ue(a) : a,
        topics: l
      }
    ]
  });
  return {
    abi: r,
    args: n,
    eventName: o,
    id: f,
    request: c(f),
    strict: s,
    type: "event"
  };
}
function It(t) {
  return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
}
function kr({ abi: t, args: e, functionName: r }) {
  let n = t[0];
  if (r && (n = _o({
    abi: t,
    args: e,
    name: r
  }), !n))
    throw new cs(r, {
      docsPath: "/docs/contract/encodeFunctionData"
    });
  if (n.type !== "function")
    throw new cs(void 0, {
      docsPath: "/docs/contract/encodeFunctionData"
    });
  const o = ln(n), i = gl(o), s = "inputs" in n && n.inputs ? Co(n.inputs, e ?? []) : void 0;
  return ll([i, s ?? "0x"]);
}
const yd = {
  1: "An `assert` condition failed.",
  17: "Arithmic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, sp = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, ap = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
function wl(t, e) {
  const r = e ? `${e}${t.toLowerCase()}` : t.substring(2).toLowerCase(), n = at(er(r), "bytes"), o = (e ? r.substring(`${e}0x`.length) : r).split("");
  for (let i = 0; i < 40; i += 2)
    n[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()), (n[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
  return `0x${o.join("")}`;
}
function Nt(t, e) {
  if (!On(t))
    throw new Mi({ address: t });
  return wl(t, e);
}
function Ys(t, e) {
  if (e === "0x" && t.length > 0)
    throw new Vs();
  if (Ve(e) && Ve(e) < 32)
    throw new ul({
      data: e,
      params: t,
      size: Ve(e)
    });
  return cp({
    data: e,
    params: t
  });
}
function cp({ data: t, params: e }) {
  const r = [];
  let n = 0;
  for (let o = 0; o < e.length; o++) {
    if (n >= Ve(t))
      throw new ul({
        data: t,
        params: e,
        size: Ve(t)
      });
    const i = e[o], { consumed: s, value: a } = Pn({ data: t, param: i, position: n });
    r.push(a), n += s;
  }
  return r;
}
function Pn({ data: t, param: e, position: r }) {
  const n = Zs(e.type);
  if (n) {
    const [i, s] = n;
    return up(t, {
      length: i,
      param: { ...e, type: s },
      position: r
    });
  }
  if (e.type === "tuple")
    return gp(t, { param: e, position: r });
  if (e.type === "string")
    return pp(t, { position: r });
  if (e.type.startsWith("bytes"))
    return fp(t, { param: e, position: r });
  const o = He(t, r, r + 32, { strict: !0 });
  if (e.type.startsWith("uint") || e.type.startsWith("int"))
    return hp(o, { param: e });
  if (e.type === "address")
    return lp(o);
  if (e.type === "bool")
    return dp(o);
  throw new y1(e.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
function lp(t) {
  return { consumed: 32, value: wl(He(t, -20)) };
}
function up(t, { param: e, length: r, position: n }) {
  if (!r) {
    const s = ot(He(t, n, n + 32, { strict: !0 })), a = ot(He(t, s, s + 32, { strict: !0 }));
    let c = 0;
    const l = [];
    for (let f = 0; f < a; ++f) {
      const p = Pn({
        data: He(t, s + 32),
        param: e,
        position: c
      });
      c += p.consumed, l.push(p.value);
    }
    return { value: l, consumed: 32 };
  }
  if (ls(e)) {
    const s = Zs(e.type), a = !(s != null && s[0]);
    let c = 0;
    const l = [];
    for (let f = 0; f < r; ++f) {
      const p = ot(He(t, n, n + 32, { strict: !0 })), g = Pn({
        data: He(t, p),
        param: e,
        position: a ? c : f * 32
      });
      c += g.consumed, l.push(g.value);
    }
    return { value: l, consumed: 32 };
  }
  let o = 0;
  const i = [];
  for (let s = 0; s < r; ++s) {
    const a = Pn({
      data: t,
      param: e,
      position: n + o
    });
    o += a.consumed, i.push(a.value);
  }
  return { value: i, consumed: o };
}
function dp(t) {
  return { consumed: 32, value: Yh(t) };
}
function fp(t, { param: e, position: r }) {
  const [n, o] = e.type.split("bytes");
  if (!o) {
    const s = ot(He(t, r, r + 32, { strict: !0 })), a = ot(He(t, s, s + 32, { strict: !0 }));
    return a === 0 ? { consumed: 32, value: "0x" } : { consumed: 32, value: He(t, s + 32, s + 32 + a, {
      strict: !0
    }) };
  }
  return { consumed: 32, value: He(t, r, r + parseInt(o), {
    strict: !0
  }) };
}
function hp(t, { param: e }) {
  const r = e.type.startsWith("int");
  return {
    consumed: 32,
    value: parseInt(e.type.split("int")[1] || "256") > 48 ? zs(t, { signed: r }) : ot(t, { signed: r })
  };
}
function pp(t, { position: e }) {
  const r = ot(He(t, e, e + 32, { strict: !0 })), n = ot(He(t, r, r + 32, { strict: !0 }));
  return n === 0 ? { consumed: 32, value: "" } : { consumed: 32, value: id(Yr(He(t, r + 32, r + 32 + n, { strict: !0 }))) };
}
function gp(t, { param: e, position: r }) {
  const n = e.components.length === 0 || e.components.some(({ name: s }) => !s), o = n ? [] : {};
  let i = 0;
  if (ls(e)) {
    const s = ot(He(t, r, r + 32, { strict: !0 }));
    for (let a = 0; a < e.components.length; ++a) {
      const c = e.components[a], l = Pn({
        data: He(t, s),
        param: c,
        position: i
      });
      i += l.consumed, o[n ? a : c == null ? void 0 : c.name] = l.value;
    }
    return { consumed: 32, value: o };
  }
  for (let s = 0; s < e.components.length; ++s) {
    const a = e.components[s], c = Pn({
      data: t,
      param: a,
      position: r + i
    });
    i += c.consumed, o[n ? s : a == null ? void 0 : a.name] = c.value;
  }
  return { consumed: i, value: o };
}
function ls(t) {
  var n;
  const { type: e } = t;
  if (e === "string" || e === "bytes" || e.endsWith("[]"))
    return !0;
  if (e === "tuple")
    return (n = t.components) == null ? void 0 : n.some(ls);
  const r = Zs(t.type);
  return !!(r && ls({ ...t, type: r[1] }));
}
function wp({ abi: t, data: e }) {
  const r = He(e, 0, 4);
  if (r === "0x")
    throw new Vs();
  const o = [...t || [], sp, ap].find((i) => i.type === "error" && r === gl(ln(i)));
  if (!o)
    throw new ld(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? Ys(o.inputs, He(e, 4)) : void 0,
    errorName: o.name
  };
}
const ct = (t, e, r) => JSON.stringify(t, (n, o) => {
  const i = typeof o == "bigint" ? o.toString() : o;
  return typeof e == "function" ? e(n, i) : i;
}, r);
function vd({ abiItem: t, args: e, includeFunctionName: r = !0, includeName: n = !1 }) {
  if ("name" in t && "inputs" in t && t.inputs)
    return `${r ? t.name : ""}(${t.inputs.map((o, i) => `${n && o.name ? `${o.name}: ` : ""}${typeof e[i] == "object" ? ct(e[i]) : e[i]}`).join(", ")})`;
}
function ml(t, e = "wei") {
  return os(t, r1[e]);
}
function $o(t) {
  const e = Object.entries(t).map(([n, o]) => o === void 0 || o === !1 ? null : [n, o]).filter(Boolean), r = e.reduce((n, [o]) => Math.max(n, o.length), 0);
  return e.map(([n, o]) => `  ${`${n}:`.padEnd(r + 1)}  ${o}`).join(`
`);
}
class mp extends H {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "FeeConflictError"
    });
  }
}
class bp extends H {
  constructor({ transaction: e }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        $o(e),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSerializableTransactionError"
    });
  }
}
class yp extends H {
  constructor(e, { account: r, docsPath: n, chain: o, data: i, gas: s, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: f, to: p, value: g }) {
    var m;
    const w = $o({
      chain: o && `${o == null ? void 0 : o.name} (id: ${o == null ? void 0 : o.id})`,
      from: r == null ? void 0 : r.address,
      to: p,
      value: typeof g < "u" && `${ml(g)} ${((m = o == null ? void 0 : o.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: i,
      gas: s,
      gasPrice: typeof a < "u" && `${pt(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pt(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pt(l)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: n,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Request Arguments:",
        w
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionExecutionError"
    }), this.cause = e;
  }
}
class xd extends H {
  constructor({ blockHash: e, blockNumber: r, blockTag: n, hash: o, index: i }) {
    let s = "Transaction";
    n && i !== void 0 && (s = `Transaction at block time "${n}" at index "${i}"`), e && i !== void 0 && (s = `Transaction at block hash "${e}" at index "${i}"`), r && i !== void 0 && (s = `Transaction at block number "${r}" at index "${i}"`), o && (s = `Transaction with hash "${o}"`), super(`${s} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionNotFoundError"
    });
  }
}
class Cd extends H {
  constructor({ hash: e }) {
    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionReceiptNotFoundError"
    });
  }
}
class vp extends H {
  constructor({ hash: e }) {
    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WaitForTransactionReceiptTimeoutError"
    });
  }
}
class _d extends H {
  constructor(e, { account: r, docsPath: n, chain: o, data: i, gas: s, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: f, to: p, value: g }) {
    var v;
    const w = r ? It(r) : void 0, m = $o({
      from: w == null ? void 0 : w.address,
      to: p,
      value: typeof g < "u" && `${ml(g)} ${((v = o == null ? void 0 : o.nativeCurrency) == null ? void 0 : v.symbol) || "ETH"}`,
      data: i,
      gas: s,
      gasPrice: typeof a < "u" && `${pt(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pt(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pt(l)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: n,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Raw Call Arguments:",
        m
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CallExecutionError"
    }), this.cause = e;
  }
}
class bl extends H {
  constructor(e, { abi: r, args: n, contractAddress: o, docsPath: i, functionName: s, sender: a }) {
    const c = _o({ abi: r, args: n, name: s }), l = c ? vd({
      abiItem: c,
      args: n,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, f = c ? ln(c, { includeName: !0 }) : void 0, p = $o({
      address: o && Lh(o),
      function: f,
      args: l && l !== "()" && `${[...Array((s == null ? void 0 : s.length) ?? 0).keys()].map(() => " ").join("")}${l}`,
      sender: a
    });
    super(e.shortMessage || `An unknown error occurred while executing the contract function "${s}".`, {
      cause: e,
      docsPath: i,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Contract Call:",
        p
      ].filter(Boolean)
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionExecutionError"
    }), this.abi = r, this.args = n, this.cause = e, this.contractAddress = o, this.functionName = s, this.sender = a;
  }
}
class mc extends H {
  constructor({ abi: e, data: r, functionName: n, message: o }) {
    let i, s, a, c;
    if (r && r !== "0x")
      try {
        s = wp({ abi: e, data: r });
        const { abiItem: f, errorName: p, args: g } = s;
        if (p === "Error")
          c = g[0];
        else if (p === "Panic") {
          const [w] = g;
          c = yd[w];
        } else {
          const w = f ? ln(f, { includeName: !0 }) : void 0, m = f && g ? vd({
            abiItem: f,
            args: g,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          a = [
            w ? `Error: ${w}` : "",
            m && m !== "()" ? `       ${[...Array((p == null ? void 0 : p.length) ?? 0).keys()].map(() => " ").join("")}${m}` : ""
          ];
        }
      } catch (f) {
        i = f;
      }
    else
      o && (c = o);
    let l;
    i instanceof ld && (l = i.signature, a = [
      `Unable to decode signature "${l}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`
    ]), super(c && c !== "execution reverted" || l ? [
      `The contract function "${n}" reverted with the following ${l ? "signature" : "reason"}:`,
      c || l
    ].join(`
`) : `The contract function "${n}" reverted.`, {
      cause: i,
      metaMessages: a
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = s, this.reason = c, this.signature = l;
  }
}
class xp extends H {
  constructor({ functionName: e }) {
    super(`The contract function "${e}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${e}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ContractFunctionZeroDataError"
    });
  }
}
class yl extends H {
  constructor({ data: e, message: r }) {
    super(r || ""), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RawContractError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e;
  }
}
class Ai extends H {
  constructor({ body: e, details: r, headers: n, status: o, url: i }) {
    super("HTTP request failed.", {
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${Ws(i)}`,
        e && `Request body: ${ct(e)}`
      ].filter(Boolean)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = e, this.headers = n, this.status = o, this.url = i;
  }
}
class Cp extends H {
  constructor({ body: e, details: r, url: n }) {
    super("WebSocket request failed.", {
      details: r,
      metaMessages: [`URL: ${Ws(n)}`, `Request body: ${ct(e)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "WebSocketRequestError"
    });
  }
}
class vl extends H {
  constructor({ body: e, error: r, url: n }) {
    super("RPC Request failed.", {
      cause: r,
      details: r.message,
      metaMessages: [`URL: ${Ws(n)}`, `Request body: ${ct(e)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = r.code;
  }
}
class bc extends H {
  constructor({ body: e, url: r }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Ws(r)}`, `Request body: ${ct(e)}`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TimeoutError"
    });
  }
}
const _p = -1;
class wt extends H {
  constructor(e, { code: r, docsPath: n, metaMessages: o, shortMessage: i }) {
    super(i, {
      cause: e,
      docsPath: n,
      metaMessages: o || (e == null ? void 0 : e.metaMessages)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = e.name, this.code = e instanceof vl ? e.code : r ?? _p;
  }
}
class ei extends wt {
  constructor(e, r) {
    super(e, r), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderRpcError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = r.data;
  }
}
class Ui extends wt {
  constructor(e) {
    super(e, {
      code: Ui.code,
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ParseRpcError"
    });
  }
}
Object.defineProperty(Ui, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Li extends wt {
  constructor(e) {
    super(e, {
      code: Li.code,
      shortMessage: "JSON is not a valid request object."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidRequestRpcError"
    });
  }
}
Object.defineProperty(Li, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class ji extends wt {
  constructor(e) {
    super(e, {
      code: ji.code,
      shortMessage: "The method does not exist / is not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotFoundRpcError"
    });
  }
}
Object.defineProperty(ji, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class Fi extends wt {
  constructor(e) {
    super(e, {
      code: Fi.code,
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParamsRpcError"
    });
  }
}
Object.defineProperty(Fi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Nn extends wt {
  constructor(e) {
    super(e, {
      code: Nn.code,
      shortMessage: "An internal error was received."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InternalRpcError"
    });
  }
}
Object.defineProperty(Nn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class Qr extends wt {
  constructor(e) {
    super(e, {
      code: Qr.code,
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidInputRpcError"
    });
  }
}
Object.defineProperty(Qr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class Wi extends wt {
  constructor(e) {
    super(e, {
      code: Wi.code,
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(Wi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class kn extends wt {
  constructor(e) {
    super(e, {
      code: kn.code,
      shortMessage: "Requested resource not available."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceUnavailableRpcError"
    });
  }
}
Object.defineProperty(kn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class zi extends wt {
  constructor(e) {
    super(e, {
      code: zi.code,
      shortMessage: "Transaction creation failed."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "TransactionRejectedRpcError"
    });
  }
}
Object.defineProperty(zi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class Hi extends wt {
  constructor(e) {
    super(e, {
      code: Hi.code,
      shortMessage: "Method is not implemented."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MethodNotSupportedRpcError"
    });
  }
}
Object.defineProperty(Hi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class qi extends wt {
  constructor(e) {
    super(e, {
      code: qi.code,
      shortMessage: "Request exceeds defined limit."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "LimitExceededRpcError"
    });
  }
}
Object.defineProperty(qi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class Gi extends wt {
  constructor(e) {
    super(e, {
      code: Gi.code,
      shortMessage: "Version of JSON-RPC protocol is not supported."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "JsonRpcVersionUnsupportedError"
    });
  }
}
Object.defineProperty(Gi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class ht extends ei {
  constructor(e) {
    super(e, {
      code: ht.code,
      shortMessage: "User rejected the request."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UserRejectedRequestError"
    });
  }
}
Object.defineProperty(ht, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class Vi extends ei {
  constructor(e) {
    super(e, {
      code: Vi.code,
      shortMessage: "The requested method and/or account has not been authorized by the user."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnauthorizedProviderError"
    });
  }
}
Object.defineProperty(Vi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class Zi extends ei {
  constructor(e) {
    super(e, {
      code: Zi.code,
      shortMessage: "The Provider does not support the requested method."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnsupportedProviderMethodError"
    });
  }
}
Object.defineProperty(Zi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Ki extends ei {
  constructor(e) {
    super(e, {
      code: Ki.code,
      shortMessage: "The Provider is disconnected from all chains."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ProviderDisconnectedError"
    });
  }
}
Object.defineProperty(Ki, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Yi extends ei {
  constructor(e) {
    super(e, {
      code: Yi.code,
      shortMessage: "The Provider is not connected to the requested chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ChainDisconnectedError"
    });
  }
}
Object.defineProperty(Yi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class rr extends ei {
  constructor(e) {
    super(e, {
      code: rr.code,
      shortMessage: "An error occurred when attempting to switch chain."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SwitchChainError"
    });
  }
}
Object.defineProperty(rr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class Ep extends wt {
  constructor(e) {
    super(e, {
      shortMessage: "An unknown RPC error occurred."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownRpcError"
    });
  }
}
const $p = 3;
function Ji(t, { abi: e, address: r, args: n, docsPath: o, functionName: i, sender: s }) {
  const { code: a, data: c, message: l, shortMessage: f } = t instanceof yl ? t : t instanceof H ? t.walk((g) => "data" in g) || t.walk() : {}, p = t instanceof Vs ? new xp({ functionName: i }) : [$p, Nn.code].includes(a) && (c || l || f) ? new mc({
    abi: e,
    data: typeof c == "object" ? c.data : c,
    functionName: i,
    message: f ?? l
  }) : t;
  return new bl(p, {
    abi: e,
    args: n,
    contractAddress: r,
    docsPath: o,
    functionName: i,
    sender: s
  });
}
class ti extends H {
  constructor({ docsPath: e } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."
    ].join(`
`), {
      docsPath: e,
      docsSlug: "account"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AccountNotFoundError"
    });
  }
}
class Ap extends H {
  constructor(e, { account: r, docsPath: n, chain: o, data: i, gas: s, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: f, to: p, value: g }) {
    var m;
    const w = $o({
      from: r == null ? void 0 : r.address,
      to: p,
      value: typeof g < "u" && `${ml(g)} ${((m = o == null ? void 0 : o.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: i,
      gas: s,
      gasPrice: typeof a < "u" && `${pt(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${pt(c)} gwei`,
      maxPriorityFeePerGas: typeof l < "u" && `${pt(l)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: n,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        w
      ].filter(Boolean)
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EstimateGasExecutionError"
    }), this.cause = e;
  }
}
function xl(t, e) {
  const r = (t.details || "").toLowerCase(), n = t.walk((o) => o.code === Sn.code);
  return n instanceof H ? new Sn({
    cause: t,
    message: n.details
  }) : Sn.nodeMessage.test(r) ? new Sn({
    cause: t,
    message: t.details
  }) : ss.nodeMessage.test(r) ? new ss({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : ac.nodeMessage.test(r) ? new ac({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : cc.nodeMessage.test(r) ? new cc({ cause: t, nonce: e == null ? void 0 : e.nonce }) : lc.nodeMessage.test(r) ? new lc({ cause: t, nonce: e == null ? void 0 : e.nonce }) : uc.nodeMessage.test(r) ? new uc({ cause: t, nonce: e == null ? void 0 : e.nonce }) : dc.nodeMessage.test(r) ? new dc({ cause: t }) : fc.nodeMessage.test(r) ? new fc({ cause: t, gas: e == null ? void 0 : e.gas }) : hc.nodeMessage.test(r) ? new hc({ cause: t, gas: e == null ? void 0 : e.gas }) : pc.nodeMessage.test(r) ? new pc({ cause: t }) : as.nodeMessage.test(r) ? new as({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas,
    maxPriorityFeePerGas: e == null ? void 0 : e.maxPriorityFeePerGas
  }) : new qs({
    cause: t
  });
}
function Sp(t, { docsPath: e, ...r }) {
  const n = (() => {
    const o = xl(t, r);
    return o instanceof qs ? t : o;
  })();
  return new Ap(n, {
    docsPath: e,
    ...r
  });
}
function Cl(t, { format: e }) {
  if (!e)
    return {};
  const r = {};
  function n(i) {
    const s = Object.keys(i);
    for (const a of s)
      a in t && (r[a] = t[a]), i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && n(i[a]);
  }
  const o = e(t || {});
  return n(o), r;
}
function Ao(t) {
  const { account: e, gasPrice: r, maxFeePerGas: n, maxPriorityFeePerGas: o, to: i } = t, s = e ? It(e) : void 0;
  if (s && !On(s.address))
    throw new Mi({ address: s.address });
  if (i && !On(i))
    throw new Mi({ address: i });
  if (typeof r < "u" && (typeof n < "u" || typeof o < "u"))
    throw new mp();
  if (n && n > 2n ** 256n - 1n)
    throw new ss({ maxFeePerGas: n });
  if (o && n && o > n)
    throw new as({ maxFeePerGas: n, maxPriorityFeePerGas: o });
}
class Dp extends H {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseFeeScalarError"
    });
  }
}
class _l extends H {
  constructor() {
    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Eip1559FeesNotSupportedError"
    });
  }
}
class Pp extends H {
  constructor({ maxPriorityFeePerGas: e }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${pt(e)} gwei).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "MaxFeePerGasTooLowError"
    });
  }
}
class Ed extends H {
  constructor({ blockHash: e, blockNumber: r }) {
    let n = "Block";
    e && (n = `Block at hash "${e}"`), r && (n = `Block at number "${r}"`), super(`${n} could not be found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BlockNotFoundError"
    });
  }
}
async function Ar(t, { blockHash: e, blockNumber: r, blockTag: n, includeTransactions: o } = {}) {
  var f, p, g;
  const i = n ?? "latest", s = o ?? !1, a = r !== void 0 ? ue(r) : void 0;
  let c = null;
  if (e ? c = await t.request({
    method: "eth_getBlockByHash",
    params: [e, s]
  }) : c = await t.request({
    method: "eth_getBlockByNumber",
    params: [a || i, s]
  }), !c)
    throw new Ed({ blockHash: e, blockNumber: r });
  return (((g = (p = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : p.block) == null ? void 0 : g.format) || ad)(c);
}
async function El(t) {
  const e = await t.request({
    method: "eth_gasPrice"
  });
  return BigInt(e);
}
async function Ip(t, e) {
  return $d(t, e);
}
async function $d(t, e) {
  var i, s, a;
  const { block: r, chain: n = t.chain, request: o } = e || {};
  if (typeof ((i = n == null ? void 0 : n.fees) == null ? void 0 : i.defaultPriorityFee) == "function") {
    const c = r || await oe(t, Ar, "getBlock")({});
    return n.fees.defaultPriorityFee({
      block: c,
      client: t,
      request: o
    });
  }
  if (typeof ((s = n == null ? void 0 : n.fees) == null ? void 0 : s.defaultPriorityFee) < "u")
    return (a = n == null ? void 0 : n.fees) == null ? void 0 : a.defaultPriorityFee;
  try {
    const c = await t.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return zs(c);
  } catch {
    const [c, l] = await Promise.all([
      r ? Promise.resolve(r) : oe(t, Ar, "getBlock")({}),
      oe(t, El, "getGasPrice")({})
    ]);
    if (typeof c.baseFeePerGas != "bigint")
      throw new _l();
    const f = l - c.baseFeePerGas;
    return f < 0n ? 0n : f;
  }
}
async function Tp(t, e) {
  return yc(t, e);
}
async function yc(t, e) {
  var g, w;
  const { block: r, chain: n = t.chain, request: o, type: i = "eip1559" } = e || {}, s = await (async () => {
    var m, v;
    return typeof ((m = n == null ? void 0 : n.fees) == null ? void 0 : m.baseFeeMultiplier) == "function" ? n.fees.baseFeeMultiplier({
      block: r,
      client: t,
      request: o
    }) : ((v = n == null ? void 0 : n.fees) == null ? void 0 : v.baseFeeMultiplier) ?? 1.2;
  })();
  if (s < 1)
    throw new Dp();
  const c = 10 ** (((g = s.toString().split(".")[1]) == null ? void 0 : g.length) ?? 0), l = (m) => m * BigInt(Math.ceil(s * c)) / BigInt(c), f = r || await oe(t, Ar, "getBlock")({});
  if (typeof ((w = n == null ? void 0 : n.fees) == null ? void 0 : w.estimateFeesPerGas) == "function")
    return n.fees.estimateFeesPerGas({
      block: r,
      client: t,
      multiply: l,
      request: o,
      type: i
    });
  if (i === "eip1559") {
    if (typeof f.baseFeePerGas != "bigint")
      throw new _l();
    const m = o != null && o.maxPriorityFeePerGas ? o.maxPriorityFeePerGas : await $d(t, {
      block: f,
      chain: n,
      request: o
    }), v = l(f.baseFeePerGas);
    return {
      maxFeePerGas: (o == null ? void 0 : o.maxFeePerGas) ?? v + m,
      maxPriorityFeePerGas: m
    };
  }
  return {
    gasPrice: (o == null ? void 0 : o.gasPrice) ?? l(await oe(t, El, "getGasPrice")({}))
  };
}
async function Ad(t, { address: e, blockTag: r = "latest", blockNumber: n }) {
  const o = await t.request({
    method: "eth_getTransactionCount",
    params: [e, n ? ue(n) : r]
  });
  return ot(o);
}
function Op(t) {
  if (t.type)
    return t.type;
  if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof t.gasPrice < "u")
    return typeof t.accessList < "u" ? "eip2930" : "legacy";
  throw new bp({ transaction: t });
}
async function Js(t, e) {
  const { account: r = t.account, chain: n, gas: o, nonce: i, type: s } = e;
  if (!r)
    throw new ti();
  const a = It(r), c = await oe(t, Ar, "getBlock")({ blockTag: "latest" }), l = { ...e, from: a.address };
  if (typeof i > "u" && (l.nonce = await oe(t, Ad, "getTransactionCount")({
    address: a.address,
    blockTag: "pending"
  })), typeof s > "u")
    try {
      l.type = Op(l);
    } catch {
      l.type = typeof c.baseFeePerGas == "bigint" ? "eip1559" : "legacy";
    }
  if (l.type === "eip1559") {
    const { maxFeePerGas: f, maxPriorityFeePerGas: p } = await yc(t, {
      block: c,
      chain: n,
      request: l
    });
    if (typeof e.maxPriorityFeePerGas > "u" && e.maxFeePerGas && e.maxFeePerGas < p)
      throw new Pp({
        maxPriorityFeePerGas: p
      });
    l.maxPriorityFeePerGas = p, l.maxFeePerGas = f;
  } else {
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
      throw new _l();
    const { gasPrice: f } = await yc(t, {
      block: c,
      chain: n,
      request: l,
      type: "legacy"
    });
    l.gasPrice = f;
  }
  return typeof o > "u" && (l.gas = await oe(t, $l, "estimateGas")({
    ...l,
    account: { address: a.address, type: "json-rpc" }
  })), Ao(l), l;
}
async function $l(t, e) {
  var o, i, s;
  const r = e.account ?? t.account;
  if (!r)
    throw new ti({
      docsPath: "/docs/actions/public/estimateGas"
    });
  const n = It(r);
  try {
    const { accessList: a, blockNumber: c, blockTag: l, data: f, gas: p, gasPrice: g, maxFeePerGas: w, maxPriorityFeePerGas: m, nonce: v, to: _, value: D, ...y } = n.type === "local" ? await Js(t, e) : e, x = (c ? ue(c) : void 0) || l;
    Ao(e);
    const E = (s = (i = (o = t.chain) == null ? void 0 : o.formatters) == null ? void 0 : i.transactionRequest) == null ? void 0 : s.format, d = (E || Hs)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...Cl(y, { format: E }),
      from: n.address,
      accessList: a,
      data: f,
      gas: p,
      gasPrice: g,
      maxFeePerGas: w,
      maxPriorityFeePerGas: m,
      nonce: v,
      to: _,
      value: D
    }), S = await t.request({
      method: "eth_estimateGas",
      params: x ? [d, x] : [d]
    });
    return BigInt(S);
  } catch (a) {
    throw Sp(a, {
      ...e,
      account: n,
      chain: t.chain
    });
  }
}
async function Np(t, { abi: e, address: r, args: n, functionName: o, ...i }) {
  const s = kr({
    abi: e,
    args: n,
    functionName: o
  });
  try {
    return await oe(t, $l, "estimateGas")({
      data: s,
      to: r,
      ...i
    });
  } catch (a) {
    const c = i.account ? It(i.account) : void 0;
    throw Ji(a, {
      abi: e,
      address: r,
      args: n,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: c == null ? void 0 : c.address
    });
  }
}
const Pu = "/docs/contract/decodeEventLog";
function So({ abi: t, data: e, strict: r, topics: n }) {
  const o = r ?? !0, [i, ...s] = n;
  if (!i)
    throw new p1({
      docsPath: Pu
    });
  const a = t.find((m) => m.type === "event" && i === fl(ln(m)));
  if (!(a && "name" in a) || a.type !== "event")
    throw new g1(i, {
      docsPath: Pu
    });
  const { name: c, inputs: l } = a, f = l == null ? void 0 : l.some((m) => !("name" in m && m.name));
  let p = f ? [] : {};
  const g = l.filter((m) => "indexed" in m && m.indexed);
  for (let m = 0; m < g.length; m++) {
    const v = g[m], _ = s[m];
    if (!_)
      throw new Qn({
        abiItem: a,
        param: v
      });
    p[v.name || m] = kp({ param: v, value: _ });
  }
  const w = l.filter((m) => !("indexed" in m && m.indexed));
  if (w.length > 0) {
    if (e && e !== "0x")
      try {
        const m = Ys(w, e);
        if (m)
          if (f)
            p = [...p, ...m];
          else
            for (let v = 0; v < w.length; v++)
              p[w[v].name] = m[v];
      } catch (m) {
        if (o)
          throw m instanceof ul ? new Xr({
            abiItem: a,
            data: m.data,
            params: m.params,
            size: m.size
          }) : m;
      }
    else if (o)
      throw new Xr({
        abiItem: a,
        data: "0x",
        params: w,
        size: 0
      });
  }
  return {
    eventName: c,
    args: Object.values(p).length > 0 ? p : void 0
  };
}
function kp({ param: t, value: e }) {
  return t.type === "string" || t.type === "bytes" || t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/) ? e : (Ys([t], e) || [])[0];
}
async function Al(t, { address: e, blockHash: r, fromBlock: n, toBlock: o, event: i, events: s, args: a, strict: c } = {}) {
  const l = c ?? !1, f = s ?? (i ? [i] : void 0);
  let p = [];
  f && (p = [
    f.flatMap((w) => Eo({
      abi: [w],
      eventName: w.name,
      args: a
    }))
  ], i && (p = p[0]));
  let g;
  return r ? g = await t.request({
    method: "eth_getLogs",
    params: [{ address: e, topics: p, blockHash: r }]
  }) : g = await t.request({
    method: "eth_getLogs",
    params: [
      {
        address: e,
        topics: p,
        fromBlock: typeof n == "bigint" ? ue(n) : n,
        toBlock: typeof o == "bigint" ? ue(o) : o
      }
    ]
  }), g.map((w) => {
    var m;
    try {
      const { eventName: v, args: _ } = f ? So({
        abi: f,
        data: w.data,
        topics: w.topics,
        strict: l
      }) : { eventName: void 0, args: void 0 };
      return kt(w, { args: _, eventName: v });
    } catch (v) {
      let _, D;
      if (v instanceof Xr || v instanceof Qn) {
        if (l)
          return;
        _ = v.abiItem.name, D = (m = v.abiItem.inputs) == null ? void 0 : m.some((y) => !("name" in y && y.name));
      }
      return kt(w, { args: D ? [] : {}, eventName: _ });
    }
  }).filter(Boolean);
}
async function Sd(t, { abi: e, address: r, args: n, blockHash: o, eventName: i, fromBlock: s, toBlock: a, strict: c }) {
  const l = i ? _o({ abi: e, name: i }) : void 0, f = l ? void 0 : e.filter((p) => p.type === "event");
  return oe(t, Al, "getLogs")({
    address: r,
    args: n,
    blockHash: o,
    event: l,
    events: f,
    fromBlock: s,
    toBlock: a,
    strict: c
  });
}
const Sa = "/docs/contract/decodeFunctionResult";
function ri({ abi: t, args: e, functionName: r, data: n }) {
  let o = t[0];
  if (r && (o = _o({
    abi: t,
    args: e,
    name: r
  }), !o))
    throw new cs(r, { docsPath: Sa });
  if (o.type !== "function")
    throw new cs(void 0, { docsPath: Sa });
  if (!o.outputs)
    throw new w1(o.name, { docsPath: Sa });
  const i = Ys(o.outputs, n);
  if (i && i.length > 1)
    return i;
  if (i && i.length === 1)
    return i[0];
}
const vc = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Dd = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  }
], Pd = [
  ...Dd,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], Rp = [
  ...Dd,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], Iu = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Tu = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], Bp = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  }
], Mp = "0x82ad56cb";
function ni({ blockNumber: t, chain: e, contract: r }) {
  var o;
  const n = (o = e == null ? void 0 : e.contracts) == null ? void 0 : o[r];
  if (!n)
    throw new sc({
      chain: e,
      contract: { name: r }
    });
  if (t && n.blockCreated && n.blockCreated > t)
    throw new sc({
      blockNumber: t,
      chain: e,
      contract: {
        name: r,
        blockCreated: n.blockCreated
      }
    });
  return n.address;
}
function Up(t, { docsPath: e, ...r }) {
  const n = (() => {
    const o = xl(t, r);
    return o instanceof qs ? t : o;
  })();
  return new _d(n, {
    docsPath: e,
    ...r
  });
}
const Da = /* @__PURE__ */ new Map();
function Sl({ fn: t, id: e, shouldSplitBatch: r, wait: n = 0, sort: o }) {
  const i = async () => {
    const f = c();
    s();
    const p = f.map(({ args: g }) => g);
    p.length !== 0 && t(p).then((g) => {
      var w;
      o && Array.isArray(g) && g.sort(o);
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: v } = f[m];
        (w = v.resolve) == null || w.call(v, [g[m], g]);
      }
    }).catch((g) => {
      var w;
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: v } = f[m];
        (w = v.reject) == null || w.call(v, g);
      }
    });
  }, s = () => Da.delete(e), a = () => c().map(({ args: f }) => f), c = () => Da.get(e) || [], l = (f) => Da.set(e, [...c(), f]);
  return {
    flush: s,
    async schedule(f) {
      const p = {}, g = new Promise((v, _) => {
        p.resolve = v, p.reject = _;
      });
      return (r == null ? void 0 : r([...a(), f])) && i(), c().length > 0 ? (l({ args: f, pendingPromise: p }), g) : (l({ args: f, pendingPromise: p }), setTimeout(i, n), g);
    }
  };
}
async function Xs(t, e) {
  var D, y, C, x;
  const { account: r = t.account, batch: n = !!((D = t.batch) != null && D.multicall), blockNumber: o, blockTag: i = "latest", accessList: s, data: a, gas: c, gasPrice: l, maxFeePerGas: f, maxPriorityFeePerGas: p, nonce: g, to: w, value: m, ...v } = e, _ = r ? It(r) : void 0;
  try {
    Ao(e);
    const A = (o ? ue(o) : void 0) || i, d = (x = (C = (y = t.chain) == null ? void 0 : y.formatters) == null ? void 0 : C.transactionRequest) == null ? void 0 : x.format, O = (d || Hs)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...Cl(v, { format: d }),
      from: _ == null ? void 0 : _.address,
      accessList: s,
      data: a,
      gas: c,
      gasPrice: l,
      maxFeePerGas: f,
      maxPriorityFeePerGas: p,
      nonce: g,
      to: w,
      value: m
    });
    if (n && Lp({ request: O }))
      try {
        return await jp(t, {
          ...O,
          blockNumber: o,
          blockTag: i
        });
      } catch (k) {
        if (!(k instanceof cd) && !(k instanceof sc))
          throw k;
      }
    const N = await t.request({
      method: "eth_call",
      params: A ? [O, A] : [O]
    });
    return N === "0x" ? { data: void 0 } : { data: N };
  } catch (E) {
    const A = Fp(E), { offchainLookup: d, offchainLookupSignature: S } = await import("./ccip-82Pi_QcQ.js");
    if ((A == null ? void 0 : A.slice(0, 10)) === S && w)
      return { data: await d(t, { data: A, to: w }) };
    throw Up(E, {
      ...e,
      account: _,
      chain: t.chain
    });
  }
}
function Lp({ request: t }) {
  const { data: e, to: r, ...n } = t;
  return !(!e || e.startsWith(Mp) || !r || Object.values(n).filter((o) => typeof o < "u").length > 0);
}
async function jp(t, e) {
  var v;
  const { batchSize: r = 1024, wait: n = 0 } = typeof ((v = t.batch) == null ? void 0 : v.multicall) == "object" ? t.batch.multicall : {}, { blockNumber: o, blockTag: i = "latest", data: s, multicallAddress: a, to: c } = e;
  let l = a;
  if (!l) {
    if (!t.chain)
      throw new cd();
    l = ni({
      blockNumber: o,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const p = (o ? ue(o) : void 0) || i, { schedule: g } = Sl({
    id: `${t.uid}.${p}`,
    wait: n,
    shouldSplitBatch(_) {
      return _.reduce((y, { data: C }) => y + (C.length - 2), 0) > r * 2;
    },
    fn: async (_) => {
      const D = _.map((x) => ({
        allowFailure: !0,
        callData: x.data,
        target: x.to
      })), y = kr({
        abi: vc,
        args: [D],
        functionName: "aggregate3"
      }), C = await t.request({
        method: "eth_call",
        params: [
          {
            data: y,
            to: l
          },
          p
        ]
      });
      return ri({
        abi: vc,
        args: [D],
        functionName: "aggregate3",
        data: C || "0x"
      });
    }
  }), [{ returnData: w, success: m }] = await g({ data: s, to: c });
  if (!m)
    throw new yl({ data: w });
  return w === "0x" ? { data: void 0 } : { data: w };
}
function Fp(t) {
  if (!(t instanceof H))
    return;
  const e = t.walk();
  return typeof e.data == "object" ? e.data.data : e.data;
}
async function Sr(t, { abi: e, address: r, args: n, functionName: o, ...i }) {
  const s = kr({
    abi: e,
    args: n,
    functionName: o
  });
  try {
    const { data: a } = await oe(t, Xs, "call")({
      data: s,
      to: r,
      ...i
    });
    return ri({
      abi: e,
      args: n,
      functionName: o,
      data: a || "0x"
    });
  } catch (a) {
    throw Ji(a, {
      abi: e,
      address: r,
      args: n,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function Wp(t, { abi: e, address: r, args: n, dataSuffix: o, functionName: i, ...s }) {
  const a = s.account ? It(s.account) : void 0, c = kr({
    abi: e,
    args: n,
    functionName: i
  });
  try {
    const { data: l } = await oe(t, Xs, "call")({
      batch: !1,
      data: `${c}${o ? o.replace("0x", "") : ""}`,
      to: r,
      ...s
    });
    return {
      result: ri({
        abi: e,
        args: n,
        functionName: i,
        data: l || "0x"
      }),
      request: {
        abi: e,
        address: r,
        args: n,
        dataSuffix: o,
        functionName: i,
        ...s
      }
    };
  } catch (l) {
    throw Ji(l, {
      abi: e,
      address: r,
      args: n,
      docsPath: "/docs/contract/simulateContract",
      functionName: i,
      sender: a == null ? void 0 : a.address
    });
  }
}
const Pa = /* @__PURE__ */ new Map(), Ou = /* @__PURE__ */ new Map();
let zp = 0;
function ii(t, e, r) {
  const n = ++zp, o = () => Pa.get(t) || [], i = () => {
    const f = o();
    Pa.set(t, f.filter((p) => p.id !== n));
  }, s = () => {
    const f = Ou.get(t);
    o().length === 1 && f && f(), i();
  }, a = o();
  if (Pa.set(t, [
    ...a,
    { id: n, fns: e }
  ]), a && a.length > 0)
    return s;
  const c = {};
  for (const f in e)
    c[f] = (...p) => {
      var w, m;
      const g = o();
      if (g.length !== 0)
        for (const v of g)
          (m = (w = v.fns)[f]) == null || m.call(w, ...p);
    };
  const l = r(c);
  return typeof l == "function" && Ou.set(t, l), s;
}
async function us(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Do(t, { emitOnBegin: e, initialWaitTime: r, interval: n }) {
  let o = !0;
  const i = () => o = !1;
  return (async () => {
    let a;
    e && (a = await t({ unpoll: i }));
    const c = await (r == null ? void 0 : r(a)) ?? n;
    await us(c);
    const l = async () => {
      o && (await t({ unpoll: i }), await us(n), l());
    };
    l();
  })(), i;
}
const Hp = /* @__PURE__ */ new Map(), qp = /* @__PURE__ */ new Map();
function Gp(t) {
  const e = (o, i) => ({
    clear: () => i.delete(o),
    get: () => i.get(o),
    set: (s) => i.set(o, s)
  }), r = e(t, Hp), n = e(t, qp);
  return {
    clear: () => {
      r.clear(), n.clear();
    },
    promise: r,
    response: n
  };
}
async function Vp(t, { cacheKey: e, cacheTime: r = 1 / 0 }) {
  const n = Gp(e), o = n.response.get();
  if (o && r > 0 && (/* @__PURE__ */ new Date()).getTime() - o.created.getTime() < r)
    return o.data;
  let i = n.promise.get();
  i || (i = t(), n.promise.set(i));
  try {
    const s = await i;
    return n.response.set({ created: /* @__PURE__ */ new Date(), data: s }), s;
  } finally {
    n.promise.clear();
  }
}
const Zp = (t) => `blockNumber.${t}`;
async function Po(t, { cacheTime: e = t.cacheTime, maxAge: r } = {}) {
  const n = await Vp(() => t.request({
    method: "eth_blockNumber"
  }), { cacheKey: Zp(t.uid), cacheTime: r ?? e });
  return BigInt(n);
}
async function Qs(t, { filter: e }) {
  const r = "strict" in e && e.strict;
  return (await e.request({
    method: "eth_getFilterChanges",
    params: [e.id]
  })).map((o) => {
    var i;
    if (typeof o == "string")
      return o;
    try {
      const { eventName: s, args: a } = "abi" in e && e.abi ? So({
        abi: e.abi,
        data: o.data,
        topics: o.topics,
        strict: r
      }) : { eventName: void 0, args: void 0 };
      return kt(o, { args: a, eventName: s });
    } catch (s) {
      let a, c;
      if (s instanceof Xr || s instanceof Qn) {
        if ("strict" in e && e.strict)
          return;
        a = s.abiItem.name, c = (i = s.abiItem.inputs) == null ? void 0 : i.some((l) => !("name" in l && l.name));
      }
      return kt(o, { args: c ? [] : {}, eventName: a });
    }
  }).filter(Boolean);
}
async function ea(t, { filter: e }) {
  return e.request({
    method: "eth_uninstallFilter",
    params: [e.id]
  });
}
function Kp(t, { abi: e, address: r, args: n, batch: o = !0, eventName: i, onError: s, onLogs: a, poll: c, pollingInterval: l = t.pollingInterval, strict: f }) {
  return (typeof c < "u" ? c : t.transport.type !== "webSocket") ? (() => {
    const m = ct([
      "watchContractEvent",
      r,
      n,
      o,
      t.uid,
      i,
      l
    ]), v = f ?? !1;
    return ii(m, { onLogs: a, onError: s }, (_) => {
      let D, y, C = !1;
      const x = Do(async () => {
        var E;
        if (!C) {
          try {
            y = await oe(t, bd, "createContractEventFilter")({
              abi: e,
              address: r,
              args: n,
              eventName: i,
              strict: v
            });
          } catch {
          }
          C = !0;
          return;
        }
        try {
          let A;
          if (y)
            A = await oe(t, Qs, "getFilterChanges")({ filter: y });
          else {
            const d = await oe(t, Po, "getBlockNumber")({});
            D && D !== d ? A = await oe(t, Sd, "getContractEvents")({
              abi: e,
              address: r,
              args: n,
              eventName: i,
              fromBlock: D + 1n,
              toBlock: d,
              strict: v
            }) : A = [], D = d;
          }
          if (A.length === 0)
            return;
          if (o)
            _.onLogs(A);
          else
            for (const d of A)
              _.onLogs([d]);
        } catch (A) {
          y && A instanceof Qr && (C = !1), (E = _.onError) == null || E.call(_, A);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        y && await oe(t, ea, "uninstallFilter")({ filter: y }), x();
      };
    });
  })() : (() => {
    let m = !0, v = () => m = !1;
    return (async () => {
      try {
        const _ = i ? Eo({
          abi: e,
          eventName: i,
          args: n
        }) : [], { unsubscribe: D } = await t.transport.subscribe({
          params: ["logs", { address: r, topics: _ }],
          onData(y) {
            var x;
            if (!m)
              return;
            const C = y.result;
            try {
              const { eventName: E, args: A } = So({
                abi: e,
                data: C.data,
                topics: C.topics,
                strict: f
              }), d = kt(C, {
                args: A,
                eventName: E
              });
              a([d]);
            } catch (E) {
              let A, d;
              if (E instanceof Xr || E instanceof Qn) {
                if (f)
                  return;
                A = E.abiItem.name, d = (x = E.abiItem.inputs) == null ? void 0 : x.some((O) => !("name" in O && O.name));
              }
              const S = kt(C, {
                args: d ? [] : {},
                eventName: A
              });
              a([S]);
            }
          },
          onError(y) {
            s == null || s(y);
          }
        });
        v = D, m || v();
      } catch (_) {
        s == null || s(_);
      }
    })(), v;
  })();
}
function Id({ chain: t, currentChainId: e }) {
  if (!t)
    throw new t1();
  if (e !== t.id)
    throw new e1({ chain: t, currentChainId: e });
}
function Yp(t, { docsPath: e, ...r }) {
  const n = (() => {
    const o = xl(t, r);
    return o instanceof qs ? t : o;
  })();
  return new yp(n, {
    docsPath: e,
    ...r
  });
}
async function Xi(t) {
  const e = await t.request({
    method: "eth_chainId"
  });
  return ot(e);
}
async function Dl(t, { serializedTransaction: e }) {
  return t.request({
    method: "eth_sendRawTransaction",
    params: [e]
  });
}
async function Pl(t, e) {
  var v, _, D, y;
  const { account: r = t.account, chain: n = t.chain, accessList: o, data: i, gas: s, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: l, nonce: f, to: p, value: g, ...w } = e;
  if (!r)
    throw new ti({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const m = It(r);
  try {
    Ao(e);
    let C;
    if (n !== null && (C = await oe(t, Xi, "getChainId")({}), Id({
      currentChainId: C,
      chain: n
    })), m.type === "local") {
      const d = await oe(t, Js, "prepareTransactionRequest")({
        account: m,
        accessList: o,
        chain: n,
        data: i,
        gas: s,
        gasPrice: a,
        maxFeePerGas: c,
        maxPriorityFeePerGas: l,
        nonce: f,
        to: p,
        value: g,
        ...w
      });
      C || (C = await oe(t, Xi, "getChainId")({}));
      const S = (v = n == null ? void 0 : n.serializers) == null ? void 0 : v.transaction, O = await m.signTransaction({
        ...d,
        chainId: C
      }, { serializer: S });
      return await oe(t, Dl, "sendRawTransaction")({
        serializedTransaction: O
      });
    }
    const x = (y = (D = (_ = t.chain) == null ? void 0 : _.formatters) == null ? void 0 : D.transactionRequest) == null ? void 0 : y.format, A = (x || Hs)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...Cl(w, { format: x }),
      accessList: o,
      data: i,
      from: m.address,
      gas: s,
      gasPrice: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      nonce: f,
      to: p,
      value: g
    });
    return await t.request({
      method: "eth_sendTransaction",
      params: [A]
    });
  } catch (C) {
    throw Yp(C, {
      ...e,
      account: m,
      chain: e.chain || void 0
    });
  }
}
async function Jp(t, { abi: e, address: r, args: n, dataSuffix: o, functionName: i, ...s }) {
  const a = kr({
    abi: e,
    args: n,
    functionName: i
  });
  return await oe(t, Pl, "sendTransaction")({
    data: `${a}${o ? o.replace("0x", "") : ""}`,
    to: r,
    ...s
  });
}
async function Xp(t, { chain: e }) {
  const { id: r, name: n, nativeCurrency: o, rpcUrls: i, blockExplorers: s } = e;
  await t.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: ue(r),
        chainName: n,
        nativeCurrency: o,
        rpcUrls: i.default.http,
        blockExplorerUrls: s ? Object.values(s).map(({ url: a }) => a) : void 0
      }
    ]
  });
}
const xc = 256;
let zo = xc, Ho;
function Qp(t = 11) {
  if (!Ho || zo + t > xc * 2) {
    Ho = "", zo = 0;
    for (let e = 0; e < xc; e++)
      Ho += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Ho.substring(zo, zo++ + t);
}
function Td(t) {
  const { batch: e, cacheTime: r = t.pollingInterval ?? 4e3, key: n = "base", name: o = "Base Client", pollingInterval: i = 4e3, type: s = "base" } = t, a = t.chain, c = t.account ? It(t.account) : void 0, { config: l, request: f, value: p } = t.transport({
    chain: a,
    pollingInterval: i
  }), g = { ...l, ...p }, w = {
    account: c,
    batch: e,
    cacheTime: r,
    chain: a,
    key: n,
    name: o,
    pollingInterval: i,
    request: f,
    transport: g,
    type: s,
    uid: Qp()
  };
  function m(v) {
    return (_) => {
      const D = _(v);
      for (const C in w)
        delete D[C];
      const y = { ...v, ...D };
      return Object.assign(y, { extend: m(y) });
    };
  }
  return Object.assign(w, { extend: m(w) });
}
function Cc(t, { delay: e = 100, retryCount: r = 2, shouldRetry: n = () => !0 } = {}) {
  return new Promise((o, i) => {
    const s = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: l }) => {
        const f = typeof e == "function" ? e({ count: a, error: l }) : e;
        f && await us(f), s({ count: a + 1 });
      };
      try {
        const l = await t();
        o(l);
      } catch (l) {
        if (a < r && await n({ count: a, error: l }))
          return c({ error: l });
        i(l);
      }
    };
    s();
  });
}
const Od = (t) => "code" in t ? t.code !== -1 && t.code !== -32004 && t.code !== -32005 && t.code !== -32042 && t.code !== -32603 : t instanceof Ai && t.status ? t.status !== 403 && t.status !== 408 && t.status !== 413 && t.status !== 429 && t.status !== 500 && t.status !== 502 && t.status !== 503 && t.status !== 504 : !1;
function eg(t, { retryDelay: e = 150, retryCount: r = 3 } = {}) {
  return async (n) => Cc(async () => {
    try {
      return await t(n);
    } catch (o) {
      const i = o;
      switch (i.code) {
        case Ui.code:
          throw new Ui(i);
        case Li.code:
          throw new Li(i);
        case ji.code:
          throw new ji(i);
        case Fi.code:
          throw new Fi(i);
        case Nn.code:
          throw new Nn(i);
        case Qr.code:
          throw new Qr(i);
        case Wi.code:
          throw new Wi(i);
        case kn.code:
          throw new kn(i);
        case zi.code:
          throw new zi(i);
        case Hi.code:
          throw new Hi(i);
        case qi.code:
          throw new qi(i);
        case Gi.code:
          throw new Gi(i);
        case ht.code:
          throw new ht(i);
        case Vi.code:
          throw new Vi(i);
        case Zi.code:
          throw new Zi(i);
        case Ki.code:
          throw new Ki(i);
        case Yi.code:
          throw new Yi(i);
        case rr.code:
          throw new rr(i);
        case 5e3:
          throw new ht(i);
        default:
          throw o instanceof H ? o : new Ep(i);
      }
    }
  }, {
    delay: ({ count: o, error: i }) => {
      var s;
      if (i && i instanceof Ai) {
        const a = (s = i == null ? void 0 : i.headers) == null ? void 0 : s.get("Retry-After");
        if (a != null && a.match(/\d/))
          return parseInt(a) * 1e3;
      }
      return ~~(1 << o) * e;
    },
    retryCount: r,
    shouldRetry: ({ error: o }) => !Od(o)
  });
}
function ta({ key: t, name: e, request: r, retryCount: n = 3, retryDelay: o = 150, timeout: i, type: s }, a) {
  return {
    config: { key: t, name: e, request: r, retryCount: n, retryDelay: o, timeout: i, type: s },
    request: eg(r, { retryCount: n, retryDelay: o }),
    value: a
  };
}
function Il(t, e = {}) {
  const { key: r = "custom", name: n = "Custom Provider", retryDelay: o } = e;
  return ({ retryCount: i }) => ta({
    key: r,
    name: n,
    request: t.request.bind(t),
    retryCount: e.retryCount ?? i,
    retryDelay: o,
    type: "custom"
  });
}
function Nu(t, e = {}) {
  const { key: r = "fallback", name: n = "Fallback", rank: o = !1, retryCount: i, retryDelay: s } = e;
  return ({ chain: a, pollingInterval: c = 4e3, timeout: l }) => {
    let f = t, p = () => {
    };
    const g = ta({
      key: r,
      name: n,
      async request({ method: w, params: m }) {
        const v = async (_ = 0) => {
          const D = f[_]({ chain: a, retryCount: 0, timeout: l });
          try {
            const y = await D.request({
              method: w,
              params: m
            });
            return p({
              method: w,
              params: m,
              response: y,
              transport: D,
              status: "success"
            }), y;
          } catch (y) {
            if (p({
              error: y,
              method: w,
              params: m,
              transport: D,
              status: "error"
            }), Od(y) || _ === f.length - 1)
              throw y;
            return v(_ + 1);
          }
        };
        return v();
      },
      retryCount: i,
      retryDelay: s,
      type: "fallback"
    }, {
      onResponse: (w) => p = w,
      transports: f.map((w) => w({ chain: a, retryCount: 0 }))
    });
    if (o) {
      const w = typeof o == "object" ? o : {};
      tg({
        chain: a,
        interval: w.interval ?? c,
        onTransports: (m) => f = m,
        sampleCount: w.sampleCount,
        timeout: w.timeout,
        transports: f,
        weights: w.weights
      });
    }
    return g;
  };
}
function tg({ chain: t, interval: e = 4e3, onTransports: r, sampleCount: n = 10, timeout: o = 1e3, transports: i, weights: s = {} }) {
  const { stability: a = 0.7, latency: c = 0.3 } = s, l = [], f = async () => {
    const p = await Promise.all(i.map(async (m) => {
      const v = m({ chain: t, retryCount: 0, timeout: o }), _ = Date.now();
      let D, y;
      try {
        await v.request({ method: "net_listening" }), y = 1;
      } catch {
        y = 0;
      } finally {
        D = Date.now();
      }
      return { latency: D - _, success: y };
    }));
    l.push(p), l.length > n && l.shift();
    const g = Math.max(...l.map((m) => Math.max(...m.map(({ latency: v }) => v)))), w = i.map((m, v) => {
      const _ = l.map((E) => E[v].latency), y = 1 - _.reduce((E, A) => E + A, 0) / _.length / g, C = l.map((E) => E[v].success), x = C.reduce((E, A) => E + A, 0) / C.length;
      return x === 0 ? [0, v] : [
        c * y + a * x,
        v
      ];
    }).sort((m, v) => v[0] - m[0]);
    r(w.map(([, m]) => i[m])), await us(e), f();
  };
  f();
}
class Nd extends H {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
}
function rg() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof global.WebSocket < "u")
    return global.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const ku = rg();
function kd(t, { errorInstance: e = new Error("timed out"), timeout: r, signal: n }) {
  return new Promise((o, i) => {
    (async () => {
      let s;
      try {
        const a = new AbortController();
        r > 0 && (s = setTimeout(() => {
          n ? a.abort() : i(e);
        }, r)), o(await t({ signal: a == null ? void 0 : a.signal }));
      } catch (a) {
        a.name === "AbortError" && i(e), i(a);
      } finally {
        clearTimeout(s);
      }
    })();
  });
}
let _c = 0;
async function ng(t, { body: e, fetchOptions: r = {}, timeout: n = 1e4 }) {
  var a;
  const { headers: o, method: i, signal: s } = r;
  try {
    const c = await kd(async ({ signal: f }) => await fetch(t, {
      ...r,
      body: Array.isArray(e) ? ct(e.map((g) => ({
        jsonrpc: "2.0",
        id: g.id ?? _c++,
        ...g
      }))) : ct({ jsonrpc: "2.0", id: e.id ?? _c++, ...e }),
      headers: {
        ...o,
        "Content-Type": "application/json"
      },
      method: i || "POST",
      signal: s || (n > 0 ? f : void 0)
    }), {
      errorInstance: new bc({ body: e, url: t }),
      timeout: n,
      signal: !0
    });
    let l;
    if ((a = c.headers.get("Content-Type")) != null && a.startsWith("application/json") ? l = await c.json() : l = await c.text(), !c.ok)
      throw new Ai({
        body: e,
        details: ct(l.error) || c.statusText,
        headers: c.headers,
        status: c.status,
        url: t
      });
    return l;
  } catch (c) {
    throw c instanceof Ai || c instanceof bc ? c : new Ai({
      body: e,
      details: c.message,
      url: t
    });
  }
}
const Ia = /* @__PURE__ */ new Map();
async function Ta(t) {
  let e = Ia.get(t);
  if (e)
    return e;
  const { schedule: r } = Sl({
    id: t,
    fn: async () => {
      const i = new ku(t), s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = ({ data: f }) => {
        const p = JSON.parse(f), g = p.method === "eth_subscription", w = g ? p.params.subscription : p.id, m = g ? a : s, v = m.get(w);
        v && v({ data: f }), g || m.delete(w);
      }, l = () => {
        Ia.delete(t), i.removeEventListener("close", l), i.removeEventListener("message", c);
      };
      return i.addEventListener("close", l), i.addEventListener("message", c), i.readyState === ku.CONNECTING && await new Promise((f, p) => {
        i && (i.onopen = f, i.onerror = p);
      }), e = Object.assign(i, {
        requests: s,
        subscriptions: a
      }), Ia.set(t, e), [e];
    }
  }), [n, [o]] = await r();
  return o;
}
function ig(t, { body: e, onResponse: r }) {
  if (t.readyState === t.CLOSED || t.readyState === t.CLOSING)
    throw new Cp({
      body: e,
      url: t.url,
      details: "Socket is closed."
    });
  const n = _c++, o = ({ data: i }) => {
    var a;
    const s = JSON.parse(i);
    typeof s.id == "number" && n !== s.id || (r == null || r(s), e.method === "eth_subscribe" && typeof s.result == "string" && t.subscriptions.set(s.result, o), e.method === "eth_unsubscribe" && t.subscriptions.delete((a = e.params) == null ? void 0 : a[0]));
  };
  return t.requests.set(n, o), t.send(JSON.stringify({ jsonrpc: "2.0", ...e, id: n })), t;
}
async function og(t, { body: e, timeout: r = 1e4 }) {
  return kd(() => new Promise((n) => In.webSocket(t, {
    body: e,
    onResponse: n
  })), {
    errorInstance: new bc({ body: e, url: t.url }),
    timeout: r
  });
}
const In = {
  http: ng,
  webSocket: ig,
  webSocketAsync: og
};
function sg(t, e = {}) {
  const { batch: r, fetchOptions: n, key: o = "http", name: i = "HTTP JSON-RPC", retryDelay: s } = e;
  return ({ chain: a, retryCount: c, timeout: l }) => {
    const { batchSize: f = 1e3, wait: p = 0 } = typeof r == "object" ? r : {}, g = e.retryCount ?? c, w = l ?? e.timeout ?? 1e4, m = t || (a == null ? void 0 : a.rpcUrls.default.http[0]);
    if (!m)
      throw new Nd();
    return ta({
      key: o,
      name: i,
      async request({ method: v, params: _ }) {
        const D = { method: v, params: _ }, { schedule: y } = Sl({
          id: `${t}`,
          wait: p,
          shouldSplitBatch(A) {
            return A.length > f;
          },
          fn: (A) => In.http(m, {
            body: A,
            fetchOptions: n,
            timeout: w
          }),
          sort: (A, d) => A.id - d.id
        }), C = async (A) => r ? y(A) : [await In.http(m, { body: A, fetchOptions: n, timeout: w })], [{ error: x, result: E }] = await C(D);
        if (x)
          throw new vl({
            body: D,
            error: x,
            url: m
          });
        return E;
      },
      retryCount: g,
      retryDelay: s,
      timeout: w,
      type: "http"
    }, {
      fetchOptions: n,
      url: t
    });
  };
}
function Tl(t, e) {
  var n, o, i;
  if (!(t instanceof H))
    return !1;
  const r = t.walk((s) => s instanceof mc);
  return r instanceof mc ? !!(((n = r.data) == null ? void 0 : n.errorName) === "ResolverNotFound" || ((o = r.data) == null ? void 0 : o.errorName) === "ResolverWildcardNotSupported" || (i = r.reason) != null && i.includes("Wildcard on non-extended resolvers is not supported") || e === "reverse" && r.reason === yd[50]) : !1;
}
function Rd(t) {
  if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
    return null;
  const e = `0x${t.slice(1, 65)}`;
  return zt(e) ? e : null;
}
function Xo(t) {
  let e = new Uint8Array(32).fill(0);
  if (!t)
    return Bi(e);
  const r = t.split(".");
  for (let n = r.length - 1; n >= 0; n -= 1) {
    const o = Rd(r[n]), i = o ? $r(o) : at(er(r[n]), "bytes");
    e = at(tr([e, i]), "bytes");
  }
  return Bi(e);
}
function ag(t) {
  return `[${t.slice(2)}]`;
}
function cg(t) {
  const e = new Uint8Array(32).fill(0);
  return t ? Rd(t) || at(er(t)) : Bi(e);
}
function ra(t) {
  const e = t.replace(/^\.|\.$/gm, "");
  if (e.length === 0)
    return new Uint8Array(1);
  const r = new Uint8Array(er(e).byteLength + 2);
  let n = 0;
  const o = e.split(".");
  for (let i = 0; i < o.length; i++) {
    let s = er(o[i]);
    s.byteLength > 255 && (s = er(ag(cg(o[i])))), r[n] = s.length, r.set(s, n + 1), n += s.length + 1;
  }
  return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
}
async function lg(t, { blockNumber: e, blockTag: r, coinType: n, name: o, universalResolverAddress: i }) {
  let s = i;
  if (!s) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    s = ni({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const a = kr({
      abi: Tu,
      functionName: "addr",
      ...n != null ? { args: [Xo(o), BigInt(n)] } : { args: [Xo(o)] }
    }), c = await oe(t, Sr, "readContract")({
      address: s,
      abi: Pd,
      functionName: "resolve",
      args: [ar(ra(o)), a],
      blockNumber: e,
      blockTag: r
    });
    if (c[0] === "0x")
      return null;
    const l = ri({
      abi: Tu,
      args: n != null ? [Xo(o), BigInt(n)] : void 0,
      functionName: "addr",
      data: c[0]
    });
    return l === "0x" || Yr(l) === "0x00" ? null : l;
  } catch (a) {
    if (Tl(a, "resolve"))
      return null;
    throw a;
  }
}
class ug extends H {
  constructor({ data: e }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(e)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidMetadataError"
    });
  }
}
class pi extends H {
  constructor({ reason: e }) {
    super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarInvalidNftUriError"
    });
  }
}
class Ol extends H {
  constructor({ uri: e }) {
    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUriResolutionError"
    });
  }
}
class dg extends H {
  constructor({ namespace: e }) {
    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "EnsAvatarUnsupportedNamespaceError"
    });
  }
}
const fg = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, hg = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, pg = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, gg = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function wg(t) {
  try {
    const e = await fetch(t, { method: "HEAD" });
    if (e.status === 200) {
      const r = e.headers.get("content-type");
      return r == null ? void 0 : r.startsWith("image/");
    }
    return !1;
  } catch (e) {
    return typeof e == "object" && typeof e.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((r) => {
      const n = new Image();
      n.onload = () => {
        r(!0);
      }, n.onerror = () => {
        r(!1);
      }, n.src = t;
    });
  }
}
function Ru(t, e) {
  return t ? t.endsWith("/") ? t.slice(0, -1) : t : e;
}
function Bd({ uri: t, gatewayUrls: e }) {
  const r = pg.test(t);
  if (r)
    return { uri: t, isOnChain: !0, isEncoded: r };
  const n = Ru(e == null ? void 0 : e.ipfs, "https://ipfs.io"), o = Ru(e == null ? void 0 : e.arweave, "https://arweave.net"), i = t.match(fg), { protocol: s, subpath: a, target: c, subtarget: l = "" } = (i == null ? void 0 : i.groups) || {}, f = s === "ipns:/" || a === "ipns/", p = s === "ipfs:/" || a === "ipfs/" || hg.test(t);
  if (t.startsWith("http") && !f && !p) {
    let w = t;
    return e != null && e.arweave && (w = t.replace(/https:\/\/arweave.net/g, e == null ? void 0 : e.arweave)), { uri: w, isOnChain: !1, isEncoded: !1 };
  }
  if ((f || p) && c)
    return {
      uri: `${n}/${f ? "ipns" : "ipfs"}/${c}${l}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (s === "ar:/" && c)
    return {
      uri: `${o}/${c}${l || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let g = t.replace(gg, "");
  if (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`), g.startsWith("data:") || g.startsWith("{"))
    return {
      uri: g,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new Ol({ uri: t });
}
function Md(t) {
  if (typeof t != "object" || !("image" in t) && !("image_url" in t) && !("image_data" in t))
    throw new ug({ data: t });
  return t.image || t.image_url || t.image_data;
}
async function mg({ gatewayUrls: t, uri: e }) {
  try {
    const r = await fetch(e).then((o) => o.json());
    return await Nl({
      gatewayUrls: t,
      uri: Md(r)
    });
  } catch {
    throw new Ol({ uri: e });
  }
}
async function Nl({ gatewayUrls: t, uri: e }) {
  const { uri: r, isOnChain: n } = Bd({ uri: e, gatewayUrls: t });
  if (n || await wg(r))
    return r;
  throw new Ol({ uri: e });
}
function bg(t) {
  let e = t;
  e.startsWith("did:nft:") && (e = e.replace("did:nft:", "").replace(/_/g, "/"));
  const [r, n, o] = e.split("/"), [i, s] = r.split(":"), [a, c] = n.split(":");
  if (!i || i.toLowerCase() !== "eip155")
    throw new pi({ reason: "Only EIP-155 supported" });
  if (!s)
    throw new pi({ reason: "Chain ID not found" });
  if (!c)
    throw new pi({
      reason: "Contract address not found"
    });
  if (!o)
    throw new pi({ reason: "Token ID not found" });
  if (!a)
    throw new pi({ reason: "ERC namespace not found" });
  return {
    chainID: parseInt(s),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: o
  };
}
async function yg(t, { nft: e }) {
  if (e.namespace === "erc721")
    return Sr(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(e.tokenID)]
    });
  if (e.namespace === "erc1155")
    return Sr(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(e.tokenID)]
    });
  throw new dg({ namespace: e.namespace });
}
async function vg(t, { gatewayUrls: e, record: r }) {
  return /eip155:/i.test(r) ? xg(t, { gatewayUrls: e, record: r }) : Nl({ uri: r, gatewayUrls: e });
}
async function xg(t, { gatewayUrls: e, record: r }) {
  const n = bg(r), o = await yg(t, { nft: n }), { uri: i, isOnChain: s, isEncoded: a } = Bd({ uri: o, gatewayUrls: e });
  if (s && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
    const l = a ? (
      // if it is encoded, decode it
      atob(i.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      i
    ), f = JSON.parse(l);
    return Nl({ uri: Md(f), gatewayUrls: e });
  }
  let c = n.tokenID;
  return n.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), mg({
    gatewayUrls: e,
    uri: i.replace(/(?:0x)?{id}/, c)
  });
}
async function Ud(t, { blockNumber: e, blockTag: r, name: n, key: o, universalResolverAddress: i }) {
  let s = i;
  if (!s) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    s = ni({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const a = await oe(t, Sr, "readContract")({
      address: s,
      abi: Pd,
      functionName: "resolve",
      args: [
        ar(ra(n)),
        kr({
          abi: Iu,
          functionName: "text",
          args: [Xo(n), o]
        })
      ],
      blockNumber: e,
      blockTag: r
    });
    if (a[0] === "0x")
      return null;
    const c = ri({
      abi: Iu,
      functionName: "text",
      data: a[0]
    });
    return c === "" ? null : c;
  } catch (a) {
    if (Tl(a, "resolve"))
      return null;
    throw a;
  }
}
async function Cg(t, { blockNumber: e, blockTag: r, gatewayUrls: n, name: o, universalResolverAddress: i }) {
  const s = await oe(t, Ud, "getEnsText")({
    blockNumber: e,
    blockTag: r,
    key: "avatar",
    name: o,
    universalResolverAddress: i
  });
  if (!s)
    return null;
  try {
    return await vg(t, { record: s, gatewayUrls: n });
  } catch {
    return null;
  }
}
async function _g(t, { address: e, blockNumber: r, blockTag: n, universalResolverAddress: o }) {
  let i = o;
  if (!i) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    i = ni({
      blockNumber: r,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const s = `${e.toLowerCase().substring(2)}.addr.reverse`;
  try {
    return (await oe(t, Sr, "readContract")({
      address: i,
      abi: Rp,
      functionName: "reverse",
      args: [ar(ra(s))],
      blockNumber: r,
      blockTag: n
    }))[0];
  } catch (a) {
    if (Tl(a, "reverse"))
      return null;
    throw a;
  }
}
async function Eg(t, { blockNumber: e, blockTag: r, name: n, universalResolverAddress: o }) {
  let i = o;
  if (!i) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    i = ni({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [s] = await oe(t, Sr, "readContract")({
    address: i,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [ar(ra(n))],
    blockNumber: e,
    blockTag: r
  });
  return s;
}
async function $g(t) {
  const e = Ks(t, {
    method: "eth_newBlockFilter"
  }), r = await t.request({
    method: "eth_newBlockFilter"
  });
  return { id: r, request: e(r), type: "block" };
}
async function Ld(t, { address: e, args: r, event: n, events: o, fromBlock: i, strict: s, toBlock: a } = {}) {
  const c = o ?? (n ? [n] : void 0), l = Ks(t, {
    method: "eth_newFilter"
  });
  let f = [];
  c && (f = [
    c.flatMap((g) => Eo({
      abi: [g],
      eventName: g.name,
      args: r
    }))
  ], n && (f = f[0]));
  const p = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: e,
        fromBlock: typeof i == "bigint" ? ue(i) : i,
        toBlock: typeof a == "bigint" ? ue(a) : a,
        ...f.length ? { topics: f } : {}
      }
    ]
  });
  return {
    abi: c,
    args: r,
    eventName: n ? n.name : void 0,
    fromBlock: i,
    id: p,
    request: l(p),
    strict: s,
    toBlock: a,
    type: "event"
  };
}
async function jd(t) {
  const e = Ks(t, {
    method: "eth_newPendingTransactionFilter"
  }), r = await t.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: r, request: e(r), type: "transaction" };
}
async function Ag(t, { address: e, blockNumber: r, blockTag: n = "latest" }) {
  const o = r ? ue(r) : void 0, i = await t.request({
    method: "eth_getBalance",
    params: [e, o || n]
  });
  return BigInt(i);
}
async function Sg(t, { blockHash: e, blockNumber: r, blockTag: n = "latest" } = {}) {
  const o = r !== void 0 ? ue(r) : void 0;
  let i;
  return e ? i = await t.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [e]
  }) : i = await t.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [o || n]
  }), ot(i);
}
async function Dg(t, { address: e, blockNumber: r, blockTag: n = "latest" }) {
  const o = r !== void 0 ? ue(r) : void 0, i = await t.request({
    method: "eth_getCode",
    params: [e, o || n]
  });
  if (i !== "0x")
    return i;
}
function Pg(t) {
  var e;
  return {
    baseFeePerGas: t.baseFeePerGas.map((r) => BigInt(r)),
    gasUsedRatio: t.gasUsedRatio,
    oldestBlock: BigInt(t.oldestBlock),
    reward: (e = t.reward) == null ? void 0 : e.map((r) => r.map((n) => BigInt(n)))
  };
}
async function Ig(t, { blockCount: e, blockNumber: r, blockTag: n = "latest", rewardPercentiles: o }) {
  const i = r ? ue(r) : void 0, s = await t.request({
    method: "eth_feeHistory",
    params: [
      ue(e),
      i || n,
      o
    ]
  });
  return Pg(s);
}
async function Tg(t, { filter: e }) {
  const r = e.strict ?? !1;
  return (await e.request({
    method: "eth_getFilterLogs",
    params: [e.id]
  })).map((o) => {
    var i;
    try {
      const { eventName: s, args: a } = "abi" in e && e.abi ? So({
        abi: e.abi,
        data: o.data,
        topics: o.topics,
        strict: r
      }) : { eventName: void 0, args: void 0 };
      return kt(o, { args: a, eventName: s });
    } catch (s) {
      let a, c;
      if (s instanceof Xr || s instanceof Qn) {
        if ("strict" in e && e.strict)
          return;
        a = s.abiItem.name, c = (i = s.abiItem.inputs) == null ? void 0 : i.some((l) => !("name" in l && l.name));
      }
      return kt(o, { args: c ? [] : {}, eventName: a });
    }
  }).filter(Boolean);
}
const Og = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Ng = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function kg({ domain: t, message: e, primaryType: r, types: n }) {
  const o = typeof t > "u" ? {} : t, i = {
    EIP712Domain: Gd({ domain: o }),
    ...n
  };
  qd({
    domain: o,
    message: e,
    primaryType: r,
    types: i
  });
  const s = ["0x1901"];
  return o && s.push(Rg({
    domain: o,
    types: i
  })), r !== "EIP712Domain" && s.push(Fd({
    data: e,
    primaryType: r,
    types: i
  })), at(tr(s));
}
function Rg({ domain: t, types: e }) {
  return Fd({
    data: t,
    primaryType: "EIP712Domain",
    types: e
  });
}
function Fd({ data: t, primaryType: e, types: r }) {
  const n = Wd({
    data: t,
    primaryType: e,
    types: r
  });
  return at(n);
}
function Wd({ data: t, primaryType: e, types: r }) {
  const n = [{ type: "bytes32" }], o = [Bg({ primaryType: e, types: r })];
  for (const i of r[e]) {
    const [s, a] = Hd({
      types: r,
      name: i.name,
      type: i.type,
      value: t[i.name]
    });
    n.push(s), o.push(a);
  }
  return Co(n, o);
}
function Bg({ primaryType: t, types: e }) {
  const r = ar(Mg({ primaryType: t, types: e }));
  return at(r);
}
function Mg({ primaryType: t, types: e }) {
  let r = "";
  const n = zd({ primaryType: t, types: e });
  n.delete(t);
  const o = [t, ...Array.from(n).sort()];
  for (const i of o)
    r += `${i}(${e[i].map(({ name: s, type: a }) => `${a} ${s}`).join(",")})`;
  return r;
}
function zd({ primaryType: t, types: e }, r = /* @__PURE__ */ new Set()) {
  const n = t.match(/^\w*/u), o = n == null ? void 0 : n[0];
  if (r.has(o) || e[o] === void 0)
    return r;
  r.add(o);
  for (const i of e[o])
    zd({ primaryType: i.type, types: e }, r);
  return r;
}
function Hd({ types: t, name: e, type: r, value: n }) {
  if (t[r] !== void 0)
    return [
      { type: "bytes32" },
      at(Wd({ data: n, primaryType: r, types: t }))
    ];
  if (r === "bytes")
    return n = `0x${(n.length % 2 ? "0" : "") + n.slice(2)}`, [{ type: "bytes32" }, at(n)];
  if (r === "string")
    return [{ type: "bytes32" }, at(ar(n))];
  if (r.lastIndexOf("]") === r.length - 1) {
    const o = r.slice(0, r.lastIndexOf("[")), i = n.map((s) => Hd({
      name: e,
      type: o,
      types: t,
      value: s
    }));
    return [
      { type: "bytes32" },
      at(Co(i.map(([s]) => s), i.map(([, s]) => s)))
    ];
  }
  return [{ type: r }, n];
}
function qd({ domain: t, message: e, primaryType: r, types: n }) {
  const o = n, i = (s, a) => {
    for (const c of s) {
      const { name: l, type: f } = c, p = f, g = a[l], w = p.match(Ng);
      if (w && (typeof g == "number" || typeof g == "bigint")) {
        const [_, D, y] = w;
        ue(g, {
          signed: D === "int",
          size: parseInt(y) / 8
        });
      }
      if (p === "address" && typeof g == "string" && !On(g))
        throw new Mi({ address: g });
      const m = p.match(Og);
      if (m) {
        const [_, D] = m;
        if (D && Ve(g) !== parseInt(D))
          throw new m1({
            expectedSize: parseInt(D),
            givenSize: Ve(g)
          });
      }
      const v = o[p];
      v && i(v, g);
    }
  };
  if (o.EIP712Domain && t && i(o.EIP712Domain, t), r !== "EIP712Domain") {
    const s = o[r];
    i(s, e);
  }
}
function Gd({ domain: t }) {
  return [
    typeof (t == null ? void 0 : t.name) == "string" && { name: "name", type: "string" },
    (t == null ? void 0 : t.version) && { name: "version", type: "string" },
    typeof (t == null ? void 0 : t.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (t == null ? void 0 : t.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (t == null ? void 0 : t.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
const Oa = "/docs/contract/encodeDeployData";
function Vd({ abi: t, args: e, bytecode: r }) {
  if (!e || e.length === 0)
    return r;
  const n = t.find((i) => "type" in i && i.type === "constructor");
  if (!n)
    throw new u1({ docsPath: Oa });
  if (!("inputs" in n))
    throw new xu({ docsPath: Oa });
  if (!n.inputs || n.inputs.length === 0)
    throw new xu({ docsPath: Oa });
  const o = Co(n.inputs, e);
  return ll([r, o]);
}
const Ug = `Ethereum Signed Message:
`;
function Lg(t, e) {
  const r = typeof t == "string" ? er(t) : t.raw instanceof Uint8Array ? t.raw : $r(t.raw), n = er(`${Ug}${r.length}`);
  return at(tr([n, r]), e);
}
function jg(t) {
  return t.map((e) => ({
    ...e,
    value: BigInt(e.value)
  }));
}
function Fg(t) {
  return {
    ...t,
    balance: t.balance ? BigInt(t.balance) : void 0,
    nonce: t.nonce ? ot(t.nonce) : void 0,
    storageProof: t.storageProof ? jg(t.storageProof) : void 0
  };
}
async function Wg(t, { address: e, blockNumber: r, blockTag: n, storageKeys: o }) {
  const i = n ?? "latest", s = r !== void 0 ? ue(r) : void 0, a = await t.request({
    method: "eth_getProof",
    params: [e, o, s || i]
  });
  return Fg(a);
}
async function zg(t, { address: e, blockNumber: r, blockTag: n = "latest", slot: o }) {
  const i = r !== void 0 ? ue(r) : void 0;
  return await t.request({
    method: "eth_getStorageAt",
    params: [e, o, i || n]
  });
}
async function kl(t, { blockHash: e, blockNumber: r, blockTag: n, hash: o, index: i }) {
  var f, p, g;
  const s = n || "latest", a = r !== void 0 ? ue(r) : void 0;
  let c = null;
  if (o ? c = await t.request({
    method: "eth_getTransactionByHash",
    params: [o]
  }) : e ? c = await t.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [e, ue(i)]
  }) : (a || s) && (c = await t.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [a || s, ue(i)]
  })), !c)
    throw new xd({
      blockHash: e,
      blockNumber: r,
      blockTag: s,
      hash: o,
      index: i
    });
  return (((g = (p = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : p.transaction) == null ? void 0 : g.format) || sd)(c);
}
async function Hg(t, { hash: e, transactionReceipt: r }) {
  const [n, o] = await Promise.all([
    oe(t, Po, "getBlockNumber")({}),
    e ? oe(t, kl, "getBlockNumber")({ hash: e }) : void 0
  ]), i = (r == null ? void 0 : r.blockNumber) || (o == null ? void 0 : o.blockNumber);
  return i ? n - i + 1n : 0n;
}
async function Ec(t, { hash: e }) {
  var o, i, s;
  const r = await t.request({
    method: "eth_getTransactionReceipt",
    params: [e]
  });
  if (!r)
    throw new Cd({ hash: e });
  return (((s = (i = (o = t.chain) == null ? void 0 : o.formatters) == null ? void 0 : i.transactionReceipt) == null ? void 0 : s.format) || Xh)(r);
}
async function qg(t, e) {
  var v;
  const { allowFailure: r = !0, batchSize: n, blockNumber: o, blockTag: i, contracts: s, multicallAddress: a } = e, c = n ?? (typeof ((v = t.batch) == null ? void 0 : v.multicall) == "object" && t.batch.multicall.batchSize || 1024);
  let l = a;
  if (!l) {
    if (!t.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    l = ni({
      blockNumber: o,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const f = [[]];
  let p = 0, g = 0;
  for (let _ = 0; _ < s.length; _++) {
    const { abi: D, address: y, args: C, functionName: x } = s[_];
    try {
      const E = kr({
        abi: D,
        args: C,
        functionName: x
      });
      g += (E.length - 2) / 2, // Check if batching is enabled.
      c > 0 && // Check if the current size of the batch exceeds the size limit.
      g > c && // Check if the current chunk is not already empty.
      f[p].length > 0 && (p++, g = (E.length - 2) / 2, f[p] = []), f[p] = [
        ...f[p],
        {
          allowFailure: !0,
          callData: E,
          target: y
        }
      ];
    } catch (E) {
      const A = Ji(E, {
        abi: D,
        address: y,
        args: C,
        docsPath: "/docs/contract/multicall",
        functionName: x
      });
      if (!r)
        throw A;
      f[p] = [
        ...f[p],
        {
          allowFailure: !0,
          callData: "0x",
          target: y
        }
      ];
    }
  }
  const w = await Promise.allSettled(f.map((_) => oe(t, Sr, "readContract")({
    abi: vc,
    address: l,
    args: [_],
    blockNumber: o,
    blockTag: i,
    functionName: "aggregate3"
  }))), m = [];
  for (let _ = 0; _ < w.length; _++) {
    const D = w[_];
    if (D.status === "rejected") {
      if (!r)
        throw D.reason;
      for (let C = 0; C < f[_].length; C++)
        m.push({
          status: "failure",
          error: D.reason,
          result: void 0
        });
      continue;
    }
    const y = D.value;
    for (let C = 0; C < y.length; C++) {
      const { returnData: x, success: E } = y[C], { callData: A } = f[_][C], { abi: d, address: S, functionName: O, args: N } = s[m.length];
      try {
        if (A === "0x")
          throw new Vs();
        if (!E)
          throw new yl({ data: x });
        const k = ri({
          abi: d,
          args: N,
          data: x,
          functionName: O
        });
        m.push(r ? { result: k, status: "success" } : k);
      } catch (k) {
        const V = Ji(k, {
          abi: d,
          address: S,
          args: N,
          docsPath: "/docs/contract/multicall",
          functionName: O
        });
        if (!r)
          throw V;
        m.push({ error: V, result: void 0, status: "failure" });
      }
    }
  }
  if (m.length !== s.length)
    throw new H("multicall results mismatch");
  return m;
}
const Gg = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
BigInt(1);
BigInt(2);
function Vg(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Zg(t, e) {
  const r = zt(t) ? $r(t) : t, n = zt(e) ? $r(e) : e;
  return Vg(r, n);
}
async function Zd(t, { address: e, hash: r, signature: n, ...o }) {
  const i = zt(n) ? n : ar(n);
  try {
    const { data: s } = await oe(t, Xs, "call")({
      data: Vd({
        abi: Bp,
        args: [e, r, i],
        bytecode: Gg
      }),
      ...o
    });
    return Zg(s ?? "0x0", "0x1");
  } catch (s) {
    if (s instanceof _d)
      return !1;
    throw s;
  }
}
async function Kg(t, { address: e, message: r, signature: n, ...o }) {
  const i = Lg(r);
  return Zd(t, {
    address: e,
    hash: i,
    signature: n,
    ...o
  });
}
async function Yg(t, { address: e, signature: r, message: n, primaryType: o, types: i, domain: s, ...a }) {
  const c = kg({ message: n, primaryType: o, types: i, domain: s });
  return Zd(t, {
    address: e,
    hash: c,
    signature: r,
    ...a
  });
}
function Kd(t, { emitOnBegin: e = !1, emitMissed: r = !1, onBlockNumber: n, onError: o, poll: i, pollingInterval: s = t.pollingInterval }) {
  const a = typeof i < "u" ? i : t.transport.type !== "webSocket";
  let c;
  return a ? (() => {
    const p = ct([
      "watchBlockNumber",
      t.uid,
      e,
      r,
      s
    ]);
    return ii(p, { onBlockNumber: n, onError: o }, (g) => Do(async () => {
      var w;
      try {
        const m = await oe(t, Po, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (m === c)
            return;
          if (m - c > 1 && r)
            for (let v = c + 1n; v < m; v++)
              g.onBlockNumber(v, c), c = v;
        }
        (!c || m > c) && (g.onBlockNumber(m, c), c = m);
      } catch (m) {
        (w = g.onError) == null || w.call(g, m);
      }
    }, {
      emitOnBegin: e,
      interval: s
    }));
  })() : (() => {
    let p = !0, g = () => p = !1;
    return (async () => {
      try {
        const { unsubscribe: w } = await t.transport.subscribe({
          params: ["newHeads"],
          onData(m) {
            var _;
            if (!p)
              return;
            const v = zs((_ = m.result) == null ? void 0 : _.number);
            n(v, c), c = v;
          },
          onError(m) {
            o == null || o(m);
          }
        });
        g = w, p || g();
      } catch (w) {
        o == null || o(w);
      }
    })(), g;
  })();
}
async function Jg(t, { confirmations: e = 1, hash: r, onReplaced: n, pollingInterval: o = t.pollingInterval, timeout: i }) {
  const s = ct(["waitForTransactionReceipt", t.uid, r]);
  let a, c, l, f = !1;
  return new Promise((p, g) => {
    i && setTimeout(() => g(new vp({ hash: r })), i);
    const w = ii(s, { onReplaced: n, resolve: p, reject: g }, (m) => {
      const v = oe(t, Kd, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: o,
        async onBlockNumber(_) {
          if (f)
            return;
          let D = _;
          const y = (C) => {
            v(), C(), w();
          };
          try {
            if (l) {
              if (e > 1 && (!l.blockNumber || D - l.blockNumber + 1n < e))
                return;
              y(() => m.resolve(l));
              return;
            }
            if (a || (f = !0, await Cc(async () => {
              a = await oe(t, kl, "getTransaction")({ hash: r }), a.blockNumber && (D = a.blockNumber);
            }, {
              // exponential backoff
              delay: ({ count: C }) => ~~(1 << C) * 200,
              retryCount: 6
            }), f = !1), l = await oe(t, Ec, "getTransactionReceipt")({ hash: r }), e > 1 && (!l.blockNumber || D - l.blockNumber + 1n < e))
              return;
            y(() => m.resolve(l));
          } catch (C) {
            if (a && (C instanceof xd || C instanceof Cd))
              try {
                c = a, f = !0;
                const x = await Cc(() => oe(t, Ar, "getBlock")({
                  blockNumber: D,
                  includeTransactions: !0
                }), {
                  // exponential backoff
                  delay: ({ count: d }) => ~~(1 << d) * 200,
                  retryCount: 6,
                  shouldRetry: ({ error: d }) => d instanceof Ed
                });
                f = !1;
                const E = x.transactions.find(({ from: d, nonce: S }) => d === c.from && S === c.nonce);
                if (!E || (l = await oe(t, Ec, "getTransactionReceipt")({
                  hash: E.hash
                }), e > 1 && (!l.blockNumber || D - l.blockNumber + 1n < e)))
                  return;
                let A = "replaced";
                E.to === c.to && E.value === c.value ? A = "repriced" : E.from === E.to && E.value === 0n && (A = "cancelled"), y(() => {
                  var d;
                  (d = m.onReplaced) == null || d.call(m, {
                    reason: A,
                    replacedTransaction: c,
                    transaction: E,
                    transactionReceipt: l
                  }), m.resolve(l);
                });
              } catch (x) {
                y(() => m.reject(x));
              }
            else
              y(() => m.reject(C));
          }
        }
      });
    });
  });
}
function Xg(t, { blockTag: e = "latest", emitMissed: r = !1, emitOnBegin: n = !1, onBlock: o, onError: i, includeTransactions: s, poll: a, pollingInterval: c = t.pollingInterval }) {
  const l = typeof a < "u" ? a : t.transport.type !== "webSocket", f = s ?? !1;
  let p;
  return l ? (() => {
    const m = ct([
      "watchBlocks",
      t.uid,
      r,
      n,
      f,
      c
    ]);
    return ii(m, { onBlock: o, onError: i }, (v) => Do(async () => {
      var _;
      try {
        const D = await oe(t, Ar, "getBlock")({
          blockTag: e,
          includeTransactions: f
        });
        if (D.number && (p != null && p.number)) {
          if (D.number === p.number)
            return;
          if (D.number - p.number > 1 && r)
            for (let y = (p == null ? void 0 : p.number) + 1n; y < D.number; y++) {
              const C = await oe(t, Ar, "getBlock")({
                blockNumber: y,
                includeTransactions: f
              });
              v.onBlock(C, p), p = C;
            }
        }
        // If no previous block exists, emit.
        (!(p != null && p.number) || // If the block tag is "pending" with no block number, emit.
        e === "pending" && !(D != null && D.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        D.number && D.number > p.number) && (v.onBlock(D, p), p = D);
      } catch (D) {
        (_ = v.onError) == null || _.call(v, D);
      }
    }, {
      emitOnBegin: n,
      interval: c
    }));
  })() : (() => {
    let m = !0, v = () => m = !1;
    return (async () => {
      try {
        const { unsubscribe: _ } = await t.transport.subscribe({
          params: ["newHeads"],
          onData(D) {
            var x, E, A;
            if (!m)
              return;
            const C = (((A = (E = (x = t.chain) == null ? void 0 : x.formatters) == null ? void 0 : E.block) == null ? void 0 : A.format) || ad)(D.result);
            o(C, p), p = C;
          },
          onError(D) {
            i == null || i(D);
          }
        });
        v = _, m || v();
      } catch (_) {
        i == null || i(_);
      }
    })(), v;
  })();
}
function Qg(t, { address: e, args: r, batch: n = !0, event: o, events: i, onError: s, onLogs: a, poll: c, pollingInterval: l = t.pollingInterval, strict: f }) {
  const p = typeof c < "u" ? c : t.transport.type !== "webSocket", g = f ?? !1;
  return p ? (() => {
    const v = ct([
      "watchEvent",
      e,
      r,
      n,
      t.uid,
      o,
      l
    ]);
    return ii(v, { onLogs: a, onError: s }, (_) => {
      let D, y, C = !1;
      const x = Do(async () => {
        var E;
        if (!C) {
          try {
            y = await oe(t, Ld, "createEventFilter")({
              address: e,
              args: r,
              event: o,
              events: i,
              strict: g
            });
          } catch {
          }
          C = !0;
          return;
        }
        try {
          let A;
          if (y)
            A = await oe(t, Qs, "getFilterChanges")({ filter: y });
          else {
            const d = await oe(t, Po, "getBlockNumber")({});
            D && D !== d ? A = await oe(t, Al, "getLogs")({
              address: e,
              args: r,
              event: o,
              events: i,
              fromBlock: D + 1n,
              toBlock: d
            }) : A = [], D = d;
          }
          if (A.length === 0)
            return;
          if (n)
            _.onLogs(A);
          else
            for (const d of A)
              _.onLogs([d]);
        } catch (A) {
          y && A instanceof Qr && (C = !1), (E = _.onError) == null || E.call(_, A);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        y && await oe(t, ea, "uninstallFilter")({ filter: y }), x();
      };
    });
  })() : (() => {
    let v = !0, _ = () => v = !1;
    return (async () => {
      try {
        const D = i ?? (o ? [o] : void 0);
        let y = [];
        D && (y = [
          D.flatMap((x) => Eo({
            abi: [x],
            eventName: x.name,
            args: r
          }))
        ], o && (y = y[0]));
        const { unsubscribe: C } = await t.transport.subscribe({
          params: ["logs", { address: e, topics: y }],
          onData(x) {
            var A;
            if (!v)
              return;
            const E = x.result;
            try {
              const { eventName: d, args: S } = So({
                abi: D,
                data: E.data,
                topics: E.topics,
                strict: g
              }), O = kt(E, {
                args: S,
                eventName: d
              });
              a([O]);
            } catch (d) {
              let S, O;
              if (d instanceof Xr || d instanceof Qn) {
                if (f)
                  return;
                S = d.abiItem.name, O = (A = d.abiItem.inputs) == null ? void 0 : A.some((k) => !("name" in k && k.name));
              }
              const N = kt(E, {
                args: O ? [] : {},
                eventName: S
              });
              a([N]);
            }
          },
          onError(x) {
            s == null || s(x);
          }
        });
        _ = C, v || _();
      } catch (D) {
        s == null || s(D);
      }
    })(), _;
  })();
}
function ew(t, { batch: e = !0, onError: r, onTransactions: n, poll: o, pollingInterval: i = t.pollingInterval }) {
  return (typeof o < "u" ? o : t.transport.type !== "webSocket") ? (() => {
    const l = ct([
      "watchPendingTransactions",
      t.uid,
      e,
      i
    ]);
    return ii(l, { onTransactions: n, onError: r }, (f) => {
      let p;
      const g = Do(async () => {
        var w;
        try {
          if (!p)
            try {
              p = await oe(t, jd, "createPendingTransactionFilter")({});
              return;
            } catch (v) {
              throw g(), v;
            }
          const m = await oe(t, Qs, "getFilterChanges")({ filter: p });
          if (m.length === 0)
            return;
          if (e)
            f.onTransactions(m);
          else
            for (const v of m)
              f.onTransactions([v]);
        } catch (m) {
          (w = f.onError) == null || w.call(f, m);
        }
      }, {
        emitOnBegin: !0,
        interval: i
      });
      return async () => {
        p && await oe(t, ea, "uninstallFilter")({ filter: p }), g();
      };
    });
  })() : (() => {
    let l = !0, f = () => l = !1;
    return (async () => {
      try {
        const { unsubscribe: p } = await t.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(g) {
            if (!l)
              return;
            const w = g.result;
            n([w]);
          },
          onError(g) {
            r == null || r(g);
          }
        });
        f = p, l || f();
      } catch (p) {
        r == null || r(p);
      }
    })(), f;
  })();
}
function tw(t) {
  return {
    call: (e) => Xs(t, e),
    createBlockFilter: () => $g(t),
    createContractEventFilter: (e) => bd(t, e),
    createEventFilter: (e) => Ld(t, e),
    createPendingTransactionFilter: () => jd(t),
    estimateContractGas: (e) => Np(t, e),
    estimateGas: (e) => $l(t, e),
    getBalance: (e) => Ag(t, e),
    getBlock: (e) => Ar(t, e),
    getBlockNumber: (e) => Po(t, e),
    getBlockTransactionCount: (e) => Sg(t, e),
    getBytecode: (e) => Dg(t, e),
    getChainId: () => Xi(t),
    getContractEvents: (e) => Sd(t, e),
    getEnsAddress: (e) => lg(t, e),
    getEnsAvatar: (e) => Cg(t, e),
    getEnsName: (e) => _g(t, e),
    getEnsResolver: (e) => Eg(t, e),
    getEnsText: (e) => Ud(t, e),
    getFeeHistory: (e) => Ig(t, e),
    estimateFeesPerGas: (e) => Tp(t, e),
    getFilterChanges: (e) => Qs(t, e),
    getFilterLogs: (e) => Tg(t, e),
    getGasPrice: () => El(t),
    getLogs: (e) => Al(t, e),
    getProof: (e) => Wg(t, e),
    estimateMaxPriorityFeePerGas: (e) => Ip(t, e),
    getStorageAt: (e) => zg(t, e),
    getTransaction: (e) => kl(t, e),
    getTransactionConfirmations: (e) => Hg(t, e),
    getTransactionCount: (e) => Ad(t, e),
    getTransactionReceipt: (e) => Ec(t, e),
    multicall: (e) => qg(t, e),
    prepareTransactionRequest: (e) => Js(t, e),
    readContract: (e) => Sr(t, e),
    sendRawTransaction: (e) => Dl(t, e),
    simulateContract: (e) => Wp(t, e),
    verifyMessage: (e) => Kg(t, e),
    verifyTypedData: (e) => Yg(t, e),
    uninstallFilter: (e) => ea(t, e),
    waitForTransactionReceipt: (e) => Jg(t, e),
    watchBlocks: (e) => Xg(t, e),
    watchBlockNumber: (e) => Kd(t, e),
    watchContractEvent: (e) => Kp(t, e),
    watchEvent: (e) => Qg(t, e),
    watchPendingTransactions: (e) => ew(t, e)
  };
}
function Bu(t) {
  const { key: e = "public", name: r = "Public Client" } = t;
  return Td({
    ...t,
    key: e,
    name: r,
    type: "publicClient"
  }).extend(tw);
}
function rw(t, { abi: e, args: r, bytecode: n, ...o }) {
  const i = Vd({
    abi: e,
    args: r,
    bytecode: n
  });
  return Pl(t, {
    ...o,
    data: i
  });
}
async function nw(t) {
  var r;
  return ((r = t.account) == null ? void 0 : r.type) === "local" ? [t.account.address] : (await t.request({ method: "eth_accounts" })).map((n) => wl(n));
}
async function iw(t) {
  return await t.request({ method: "wallet_getPermissions" });
}
async function ow(t) {
  return (await t.request({ method: "eth_requestAccounts" })).map((r) => Nt(r));
}
async function sw(t, e) {
  return t.request({
    method: "wallet_requestPermissions",
    params: [e]
  });
}
async function aw(t, { account: e = t.account, message: r }) {
  if (!e)
    throw new ti({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const n = It(e);
  if (n.type === "local")
    return n.signMessage({ message: r });
  const o = typeof r == "string" ? al(r) : r.raw instanceof Uint8Array ? ar(r.raw) : r.raw;
  return t.request({
    method: "personal_sign",
    params: [o, n.address]
  });
}
async function cw(t, e) {
  var l, f, p, g;
  const { account: r = t.account, chain: n = t.chain, ...o } = e;
  if (!r)
    throw new ti({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const i = It(r);
  Ao({
    account: i,
    ...e
  });
  const s = await oe(t, Xi, "getChainId")({});
  n !== null && Id({
    currentChainId: s,
    chain: n
  });
  const a = (n == null ? void 0 : n.formatters) || ((l = t.chain) == null ? void 0 : l.formatters), c = ((f = a == null ? void 0 : a.transactionRequest) == null ? void 0 : f.format) || Hs;
  return i.type === "local" ? i.signTransaction({
    ...o,
    chainId: s
  }, { serializer: (g = (p = t.chain) == null ? void 0 : p.serializers) == null ? void 0 : g.transaction }) : await t.request({
    method: "eth_signTransaction",
    params: [
      {
        ...c(o),
        chainId: ue(s),
        from: i.address
      }
    ]
  });
}
async function lw(t, { account: e = t.account, domain: r, message: n, primaryType: o, types: i }) {
  if (!e)
    throw new ti({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const s = It(e), a = {
    EIP712Domain: Gd({ domain: r }),
    ...i
  };
  if (qd({
    domain: r,
    message: n,
    primaryType: o,
    types: a
  }), s.type === "local")
    return s.signTypedData({
      domain: r,
      primaryType: o,
      types: a,
      message: n
    });
  const c = ct({ domain: r ?? {}, primaryType: o, types: a, message: n }, (l, f) => zt(f) ? f.toLowerCase() : f);
  return t.request({
    method: "eth_signTypedData_v4",
    params: [s.address, c]
  });
}
async function uw(t, { id: e }) {
  await t.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: ue(e)
      }
    ]
  });
}
async function dw(t, e) {
  return await t.request({
    method: "wallet_watchAsset",
    params: e
  });
}
function fw(t) {
  return {
    addChain: (e) => Xp(t, e),
    deployContract: (e) => rw(t, e),
    getAddresses: () => nw(t),
    getChainId: () => Xi(t),
    getPermissions: () => iw(t),
    prepareTransactionRequest: (e) => Js(t, e),
    requestAddresses: () => ow(t),
    requestPermissions: (e) => sw(t, e),
    sendRawTransaction: (e) => Dl(t, e),
    sendTransaction: (e) => Pl(t, e),
    signMessage: (e) => aw(t, e),
    signTransaction: (e) => cw(t, e),
    signTypedData: (e) => lw(t, e),
    switchChain: (e) => uw(t, e),
    watchAsset: (e) => dw(t, e),
    writeContract: (e) => Jp(t, e)
  };
}
function Rl(t) {
  const { key: e = "wallet", name: r = "Wallet Client", transport: n } = t;
  return Td({
    ...t,
    key: e,
    name: r,
    transport: (i) => n({ ...i, retryCount: 0 }),
    type: "walletClient"
  }).extend(fw);
}
function hw(t, e = {}) {
  const { key: r = "webSocket", name: n = "WebSocket JSON-RPC", retryDelay: o } = e;
  return ({ chain: i, retryCount: s, timeout: a }) => {
    var p;
    const c = e.retryCount ?? s, l = a ?? e.timeout ?? 1e4, f = t || ((p = i == null ? void 0 : i.rpcUrls.default.webSocket) == null ? void 0 : p[0]);
    if (!f)
      throw new Nd();
    return ta({
      key: r,
      name: n,
      async request({ method: g, params: w }) {
        const m = { method: g, params: w }, v = await Ta(f), { error: _, result: D } = await In.webSocketAsync(v, {
          body: m,
          timeout: l
        });
        if (_)
          throw new vl({
            body: m,
            error: _,
            url: f
          });
        return D;
      },
      retryCount: c,
      retryDelay: o,
      timeout: l,
      type: "webSocket"
    }, {
      getSocket() {
        return Ta(f);
      },
      async subscribe({ params: g, onData: w, onError: m }) {
        const v = await Ta(f), { result: _ } = await new Promise((D, y) => In.webSocket(v, {
          body: {
            method: "eth_subscribe",
            params: g
          },
          onResponse(C) {
            if (C.error) {
              y(C.error), m == null || m(C.error);
              return;
            }
            if (typeof C.id == "number") {
              D(C);
              return;
            }
            C.method === "eth_subscription" && w(C.params);
          }
        }));
        return {
          subscriptionId: _,
          async unsubscribe() {
            return new Promise((D) => In.webSocket(v, {
              body: {
                method: "eth_unsubscribe",
                params: [_]
              },
              onResponse: D
            }));
          }
        };
      }
    });
  };
}
const Yd = /* @__PURE__ */ sl({
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0x56522D00C410a43BFfDF00a9A569489297385790",
      blockCreated: 8765204
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: !0
}), Si = /* @__PURE__ */ sl({
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://cloudflare-eth.com"]
    },
    public: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
      blockCreated: 16966585
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});
var Jd = class extends Error {
  constructor({
    chainId: t,
    connectorId: e
  }) {
    super(`Chain "${t}" not configured for connector "${e}".`), this.name = "ChainNotConfiguredForConnectorError";
  }
}, Gr = class extends Error {
  constructor() {
    super(...arguments), this.name = "ConnectorNotFoundError", this.message = "Connector not found";
  }
};
function ds(t) {
  return typeof t == "string" ? Number.parseInt(
    t,
    t.trim().substring(0, 2) === "0x" ? 16 : 10
  ) : typeof t == "bigint" ? Number(t) : t;
}
var Bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function na(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Xd(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Qd = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function o(c, l, f) {
    this.fn = c, this.context = l, this.once = f || !1;
  }
  function i(c, l, f, p, g) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var w = new o(f, p || c, g), m = r ? r + l : l;
    return c._events[m] ? c._events[m].fn ? c._events[m] = [c._events[m], w] : c._events[m].push(w) : (c._events[m] = w, c._eventsCount++), c;
  }
  function s(c, l) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[l];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var l = [], f, p;
    if (this._eventsCount === 0)
      return l;
    for (p in f = this._events)
      e.call(f, p) && l.push(r ? p.slice(1) : p);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(f)) : l;
  }, a.prototype.listeners = function(l) {
    var f = r ? r + l : l, p = this._events[f];
    if (!p)
      return [];
    if (p.fn)
      return [p.fn];
    for (var g = 0, w = p.length, m = new Array(w); g < w; g++)
      m[g] = p[g].fn;
    return m;
  }, a.prototype.listenerCount = function(l) {
    var f = r ? r + l : l, p = this._events[f];
    return p ? p.fn ? 1 : p.length : 0;
  }, a.prototype.emit = function(l, f, p, g, w, m) {
    var v = r ? r + l : l;
    if (!this._events[v])
      return !1;
    var _ = this._events[v], D = arguments.length, y, C;
    if (_.fn) {
      switch (_.once && this.removeListener(l, _.fn, void 0, !0), D) {
        case 1:
          return _.fn.call(_.context), !0;
        case 2:
          return _.fn.call(_.context, f), !0;
        case 3:
          return _.fn.call(_.context, f, p), !0;
        case 4:
          return _.fn.call(_.context, f, p, g), !0;
        case 5:
          return _.fn.call(_.context, f, p, g, w), !0;
        case 6:
          return _.fn.call(_.context, f, p, g, w, m), !0;
      }
      for (C = 1, y = new Array(D - 1); C < D; C++)
        y[C - 1] = arguments[C];
      _.fn.apply(_.context, y);
    } else {
      var x = _.length, E;
      for (C = 0; C < x; C++)
        switch (_[C].once && this.removeListener(l, _[C].fn, void 0, !0), D) {
          case 1:
            _[C].fn.call(_[C].context);
            break;
          case 2:
            _[C].fn.call(_[C].context, f);
            break;
          case 3:
            _[C].fn.call(_[C].context, f, p);
            break;
          case 4:
            _[C].fn.call(_[C].context, f, p, g);
            break;
          default:
            if (!y)
              for (E = 1, y = new Array(D - 1); E < D; E++)
                y[E - 1] = arguments[E];
            _[C].fn.apply(_[C].context, y);
        }
    }
    return !0;
  }, a.prototype.on = function(l, f, p) {
    return i(this, l, f, p, !1);
  }, a.prototype.once = function(l, f, p) {
    return i(this, l, f, p, !0);
  }, a.prototype.removeListener = function(l, f, p, g) {
    var w = r ? r + l : l;
    if (!this._events[w])
      return this;
    if (!f)
      return s(this, w), this;
    var m = this._events[w];
    if (m.fn)
      m.fn === f && (!g || m.once) && (!p || m.context === p) && s(this, w);
    else {
      for (var v = 0, _ = [], D = m.length; v < D; v++)
        (m[v].fn !== f || g && !m[v].once || p && m[v].context !== p) && _.push(m[v]);
      _.length ? this._events[w] = _.length === 1 ? _[0] : _ : s(this, w);
    }
    return this;
  }, a.prototype.removeAllListeners = function(l) {
    var f;
    return l ? (f = r ? r + l : l, this._events[f] && s(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
})(Qd);
var pw = Qd.exports;
const gw = /* @__PURE__ */ na(pw);
var Ml = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, De = (t, e, r) => (Ml(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ft = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Qi = (t, e, r, n) => (Ml(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Qe = (t, e, r) => (Ml(t, e, "access private method"), r), Ul = class extends gw {
  constructor({
    chains: t = [Si, Yd],
    options: e
  }) {
    super(), this.chains = t, this.options = e;
  }
  getBlockExplorerUrls(t) {
    const { default: e, ...r } = t.blockExplorers ?? {};
    if (e)
      return [
        e.url,
        ...Object.values(r).map((n) => n.url)
      ];
  }
  isChainUnsupported(t) {
    return !this.chains.some((e) => e.id === t);
  }
  setStorage(t) {
    this.storage = t;
  }
};
function ww(t) {
  var r;
  if (!t)
    return "Injected";
  const e = (n) => {
    if (n.isApexWallet)
      return "Apex Wallet";
    if (n.isAvalanche)
      return "Core Wallet";
    if (n.isBackpack)
      return "Backpack";
    if (n.isBifrost)
      return "Bifrost Wallet";
    if (n.isBitKeep)
      return "BitKeep";
    if (n.isBitski)
      return "Bitski";
    if (n.isBlockWallet)
      return "BlockWallet";
    if (n.isBraveWallet)
      return "Brave Wallet";
    if (n.isCoin98)
      return "Coin98 Wallet";
    if (n.isCoinbaseWallet)
      return "Coinbase Wallet";
    if (n.isDawn)
      return "Dawn Wallet";
    if (n.isDefiant)
      return "Defiant";
    if (n.isDesig)
      return "Desig Wallet";
    if (n.isEnkrypt)
      return "Enkrypt";
    if (n.isExodus)
      return "Exodus";
    if (n.isFordefi)
      return "Fordefi";
    if (n.isFrame)
      return "Frame";
    if (n.isFrontier)
      return "Frontier Wallet";
    if (n.isGamestop)
      return "GameStop Wallet";
    if (n.isHaqqWallet)
      return "HAQQ Wallet";
    if (n.isHyperPay)
      return "HyperPay Wallet";
    if (n.isImToken)
      return "ImToken";
    if (n.isHaloWallet)
      return "Halo Wallet";
    if (n.isKuCoinWallet)
      return "KuCoin Wallet";
    if (n.isMathWallet)
      return "MathWallet";
    if (n.isNovaWallet)
      return "Nova Wallet";
    if (n.isOkxWallet || n.isOKExWallet)
      return "OKX Wallet";
    if (n.isOneInchIOSWallet || n.isOneInchAndroidWallet)
      return "1inch Wallet";
    if (n.isOpera)
      return "Opera";
    if (n.isPhantom)
      return "Phantom";
    if (n.isPortal)
      return "Ripio Portal";
    if (n.isRabby)
      return "Rabby Wallet";
    if (n.isRainbow)
      return "Rainbow";
    if (n.isSafePal)
      return "SafePal Wallet";
    if (n.isStatus)
      return "Status";
    if (n.isSubWallet)
      return "SubWallet";
    if (n.isTalisman)
      return "Talisman";
    if (n.isTally)
      return "Taho";
    if (n.isTokenPocket)
      return "TokenPocket";
    if (n.isTokenary)
      return "Tokenary";
    if (n.isTrust || n.isTrustWallet)
      return "Trust Wallet";
    if (n.isTTWallet)
      return "TTWallet";
    if (n.isXDEFI)
      return "XDEFI Wallet";
    if (n.isZeal)
      return "Zeal";
    if (n.isZerion)
      return "Zerion";
    if (n.isMetaMask)
      return "MetaMask";
  };
  if ((r = t.providers) != null && r.length) {
    const n = /* @__PURE__ */ new Set();
    let o = 1;
    for (const s of t.providers) {
      let a = e(s);
      a || (a = `Unknown Wallet #${o}`, o += 1), n.add(a);
    }
    const i = [...n];
    return i.length ? i : i[0] ?? "Injected";
  }
  return e(t) ?? "Injected";
}
var Qo, Ll = class extends Ul {
  constructor({
    chains: t,
    options: e
  } = {}) {
    const r = {
      shimDisconnect: !0,
      getProvider() {
        if (typeof window > "u")
          return;
        const o = window.ethereum;
        return o != null && o.providers && o.providers.length > 0 ? o.providers[0] : o;
      },
      ...e
    };
    super({ chains: t, options: r }), this.id = "injected", ft(this, Qo, void 0), this.shimDisconnectKey = `${this.id}.shimDisconnect`, this.onAccountsChanged = (o) => {
      o.length === 0 ? this.emit("disconnect") : this.emit("change", {
        account: Nt(o[0])
      });
    }, this.onChainChanged = (o) => {
      const i = ds(o), s = this.isChainUnsupported(i);
      this.emit("change", { chain: { id: i, unsupported: s } });
    }, this.onDisconnect = async (o) => {
      var i;
      o.code === 1013 && await this.getProvider() && await this.getAccount() || (this.emit("disconnect"), this.options.shimDisconnect && ((i = this.storage) == null || i.removeItem(this.shimDisconnectKey)));
    };
    const n = r.getProvider();
    if (typeof r.name == "string")
      this.name = r.name;
    else if (n) {
      const o = ww(n);
      r.name ? this.name = r.name(o) : typeof o == "string" ? this.name = o : this.name = o[0];
    } else
      this.name = "Injected";
    this.ready = !!n;
  }
  async connect({ chainId: t } = {}) {
    var e;
    try {
      const r = await this.getProvider();
      if (!r)
        throw new Gr();
      r.on && (r.on("accountsChanged", this.onAccountsChanged), r.on("chainChanged", this.onChainChanged), r.on("disconnect", this.onDisconnect)), this.emit("message", { type: "connecting" });
      const n = await r.request({
        method: "eth_requestAccounts"
      }), o = Nt(n[0]);
      let i = await this.getChainId(), s = this.isChainUnsupported(i);
      return t && i !== t && (i = (await this.switchChain(t)).id, s = this.isChainUnsupported(i)), this.options.shimDisconnect && ((e = this.storage) == null || e.setItem(this.shimDisconnectKey, !0)), { account: o, chain: { id: i, unsupported: s } };
    } catch (r) {
      throw this.isUserRejectedRequestError(r) ? new ht(r) : r.code === -32002 ? new kn(r) : r;
    }
  }
  async disconnect() {
    var e;
    const t = await this.getProvider();
    t != null && t.removeListener && (t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && ((e = this.storage) == null || e.removeItem(this.shimDisconnectKey)));
  }
  async getAccount() {
    const t = await this.getProvider();
    if (!t)
      throw new Gr();
    const e = await t.request({
      method: "eth_accounts"
    });
    return Nt(e[0]);
  }
  async getChainId() {
    const t = await this.getProvider();
    if (!t)
      throw new Gr();
    return t.request({ method: "eth_chainId" }).then(ds);
  }
  async getProvider() {
    const t = this.options.getProvider();
    return t && Qi(this, Qo, t), De(this, Qo);
  }
  async getWalletClient({
    chainId: t
  } = {}) {
    const [e, r] = await Promise.all([
      this.getProvider(),
      this.getAccount()
    ]), n = this.chains.find((o) => o.id === t);
    if (!e)
      throw new Error("provider is required.");
    return Rl({
      account: r,
      chain: n,
      transport: Il(e)
    });
  }
  async isAuthorized() {
    var t;
    try {
      if (this.options.shimDisconnect && !((t = this.storage) != null && t.getItem(this.shimDisconnectKey)))
        return !1;
      if (!await this.getProvider())
        throw new Gr();
      return !!await this.getAccount();
    } catch {
      return !1;
    }
  }
  async switchChain(t) {
    var n, o, i;
    const e = await this.getProvider();
    if (!e)
      throw new Gr();
    const r = ue(t);
    try {
      return await Promise.all([
        e.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: r }]
        }),
        new Promise(
          (s) => this.on("change", ({ chain: a }) => {
            (a == null ? void 0 : a.id) === t && s();
          })
        )
      ]), this.chains.find((s) => s.id === t) ?? {
        id: t,
        name: `Chain ${r}`,
        network: `${r}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (s) {
      const a = this.chains.find((c) => c.id === t);
      if (!a)
        throw new Jd({
          chainId: t,
          connectorId: this.id
        });
      if (s.code === 4902 || ((o = (n = s == null ? void 0 : s.data) == null ? void 0 : n.originalError) == null ? void 0 : o.code) === 4902)
        try {
          if (await e.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: r,
                chainName: a.name,
                nativeCurrency: a.nativeCurrency,
                rpcUrls: [((i = a.rpcUrls.public) == null ? void 0 : i.http[0]) ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(a)
              }
            ]
          }), await this.getChainId() !== t)
            throw new ht(
              new Error("User rejected switch after adding network.")
            );
          return a;
        } catch (c) {
          throw new ht(c);
        }
      throw this.isUserRejectedRequestError(s) ? new ht(s) : new rr(s);
    }
  }
  async watchAsset({
    address: t,
    decimals: e = 18,
    image: r,
    symbol: n
  }) {
    const o = await this.getProvider();
    if (!o)
      throw new Gr();
    return o.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: t,
          decimals: e,
          image: r,
          symbol: n
        }
      }
    });
  }
  isUserRejectedRequestError(t) {
    return t.code === 4001;
  }
};
Qo = /* @__PURE__ */ new WeakMap();
var jl = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Na = (t, e, r) => (jl(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ka = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, qo = (t, e, r, n) => (jl(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), mw = (t, e, r) => (jl(t, e, "access private method"), r), bw = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const yw = (t) => (e, r, n) => {
  const o = n.subscribe;
  return n.subscribe = (s, a, c) => {
    let l = s;
    if (a) {
      const f = (c == null ? void 0 : c.equalityFn) || Object.is;
      let p = s(n.getState());
      l = (g) => {
        const w = s(g);
        if (!f(p, w)) {
          const m = p;
          a(p = w, m);
        }
      }, c != null && c.fireImmediately && a(p, p);
    }
    return o(l);
  }, t(e, r, n);
}, vw = yw;
function xw(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (c) => c === null ? null : JSON.parse(c, e == null ? void 0 : e.reviver), a = (i = r.getItem(o)) != null ? i : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (o, i) => r.setItem(
      o,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (o) => r.removeItem(o)
  };
}
const eo = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return eo(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return eo(n)(r);
      }
    };
  }
}, Cw = (t, e) => (r, n, o) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (_) => _,
    version: 0,
    merge: (_, D) => ({
      ...D,
      ..._
    }),
    ...e
  }, s = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l;
  try {
    l = i.getStorage();
  } catch {
  }
  if (!l)
    return t(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(..._);
      },
      n,
      o
    );
  const f = eo(i.serialize), p = () => {
    const _ = i.partialize({ ...n() });
    let D;
    const y = f({ state: _, version: i.version }).then(
      (C) => l.setItem(i.name, C)
    ).catch((C) => {
      D = C;
    });
    if (D)
      throw D;
    return y;
  }, g = o.setState;
  o.setState = (_, D) => {
    g(_, D), p();
  };
  const w = t(
    (..._) => {
      r(..._), p();
    },
    n,
    o
  );
  let m;
  const v = () => {
    var _;
    if (!l)
      return;
    s = !1, a.forEach((y) => y(n()));
    const D = ((_ = i.onRehydrateStorage) == null ? void 0 : _.call(i, n())) || void 0;
    return eo(l.getItem.bind(l))(i.name).then((y) => {
      if (y)
        return i.deserialize(y);
    }).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var C;
      return m = i.merge(
        y,
        (C = n()) != null ? C : w
      ), r(m, !0), p();
    }).then(() => {
      D == null || D(m, void 0), s = !0, c.forEach((y) => y(m));
    }).catch((y) => {
      D == null || D(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (_) => {
      i = {
        ...i,
        ..._
      }, _.getStorage && (l = _.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => s,
    onHydrate: (_) => (a.add(_), () => {
      a.delete(_);
    }),
    onFinishHydration: (_) => (c.add(_), () => {
      c.delete(_);
    })
  }, v(), m || w;
}, _w = (t, e) => (r, n, o) => {
  let i = {
    storage: xw(() => localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, _) => ({
      ..._,
      ...v
    }),
    ...e
  }, s = !1;
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = i.storage;
  if (!l)
    return t(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...v);
      },
      n,
      o
    );
  const f = () => {
    const v = i.partialize({ ...n() });
    return l.setItem(i.name, {
      state: v,
      version: i.version
    });
  }, p = o.setState;
  o.setState = (v, _) => {
    p(v, _), f();
  };
  const g = t(
    (...v) => {
      r(...v), f();
    },
    n,
    o
  );
  let w;
  const m = () => {
    var v, _;
    if (!l)
      return;
    s = !1, a.forEach((y) => {
      var C;
      return y((C = n()) != null ? C : g);
    });
    const D = ((_ = i.onRehydrateStorage) == null ? void 0 : _.call(i, (v = n()) != null ? v : g)) || void 0;
    return eo(l.getItem.bind(l))(i.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              y.state,
              y.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return y.state;
    }).then((y) => {
      var C;
      return w = i.merge(
        y,
        (C = n()) != null ? C : g
      ), r(w, !0), f();
    }).then(() => {
      D == null || D(w, void 0), w = n(), s = !0, c.forEach((y) => y(w));
    }).catch((y) => {
      D == null || D(void 0, y);
    });
  };
  return o.persist = {
    setOptions: (v) => {
      i = {
        ...i,
        ...v
      }, v.storage && (l = v.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => m(),
    hasHydrated: () => s,
    onHydrate: (v) => (a.add(v), () => {
      a.delete(v);
    }),
    onFinishHydration: (v) => (c.add(v), () => {
      c.delete(v);
    })
  }, i.skipHydration || m(), w || g;
}, Ew = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((bw ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Cw(t, e)) : _w(t, e), $w = Ew;
var Aw = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Mu = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (c, l) => {
    const f = typeof c == "function" ? c(e) : c;
    if (!Object.is(f, e)) {
      const p = e;
      e = l ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((g) => g(e, p));
    }
  }, o = () => e, a = { setState: n, getState: o, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (Aw ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return e = t(n, o, a), a;
}, Sw = (t) => t ? Mu(t) : Mu;
function ef(t, e) {
  if (Object.is(t, e))
    return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  if (t instanceof Map && e instanceof Map) {
    if (t.size !== e.size)
      return !1;
    for (const [n, o] of t)
      if (!Object.is(o, e.get(n)))
        return !1;
    return !0;
  }
  if (t instanceof Set && e instanceof Set) {
    if (t.size !== e.size)
      return !1;
    for (const n of t)
      if (!e.has(n))
        return !1;
    return !0;
  }
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(e, r[n]) || !Object.is(t[r[n]], e[r[n]]))
      return !1;
  return !0;
}
function Dw(t, e, {
  batch: r = { multicall: { wait: 32 } },
  pollingInterval: n = 4e3,
  rank: o,
  retryCount: i,
  retryDelay: s,
  stallTimeout: a
} = {}) {
  if (!t.length)
    throw new Error("must have at least one chain");
  let c = [];
  const l = {}, f = {};
  for (const p of t) {
    let g = !1;
    for (const w of e) {
      const m = w(p);
      m && (g = !0, c.some(({ id: v }) => v === p.id) || (c = [...c, m.chain]), l[p.id] = [
        ...l[p.id] || [],
        ...m.rpcUrls.http
      ], m.rpcUrls.webSocket && (f[p.id] = [
        ...f[p.id] || [],
        ...m.rpcUrls.webSocket
      ]));
    }
    if (!g)
      throw new Error(
        [
          `Could not find valid provider configuration for chain "${p.name}".
`,
          "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.",
          "Read more: https://wagmi.sh/core/providers/jsonRpc"
        ].join(`
`)
      );
  }
  return {
    chains: c,
    publicClient: ({ chainId: p }) => {
      const g = c.find((v) => v.id === p) ?? t[0], w = l[g.id];
      if (!w || !w[0])
        throw new Error(`No providers configured for chain "${g.id}"`);
      const m = Bu({
        batch: r,
        chain: g,
        transport: Nu(
          w.map((v) => sg(v, { timeout: a })),
          { rank: o, retryCount: i, retryDelay: s }
        ),
        pollingInterval: n
      });
      return Object.assign(m, {
        chains: c
      });
    },
    webSocketPublicClient: ({ chainId: p }) => {
      const g = c.find((v) => v.id === p) ?? t[0], w = f[g.id];
      if (!w || !w[0])
        return;
      const m = Bu({
        batch: r,
        chain: g,
        transport: Nu(
          w.map((v) => hw(v, { timeout: a })),
          { rank: o, retryCount: i, retryDelay: s }
        ),
        pollingInterval: n
      });
      return Object.assign(m, {
        chains: c
      });
    }
  };
}
var Pw = class extends Error {
  constructor({
    chainId: t,
    connectorId: e
  }) {
    super(
      `Chain "${t}" not configured${e ? ` for connector "${e}"` : ""}.`
    ), this.name = "ChainNotConfigured";
  }
}, Iw = class extends Error {
  constructor() {
    super(...arguments), this.name = "ConnectorAlreadyConnectedError", this.message = "Connector already connected";
  }
}, Tw = class extends Error {
  constructor() {
    super(...arguments), this.name = "ConfigChainsNotFound", this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work.";
  }
}, Ow = class extends Error {
  constructor({ connector: t }) {
    super(`"${t.name}" does not support programmatic chain switching.`), this.name = "SwitchChainNotSupportedError";
  }
}, $c = (t, {
  find: e,
  replace: r
}) => t && e(t) ? r(t) : typeof t != "object" ? t : Array.isArray(t) ? t.map((n) => $c(n, { find: e, replace: r })) : t instanceof Object ? Object.entries(t).reduce(
  (n, [o, i]) => ({
    ...n,
    [o]: $c(i, { find: e, replace: r })
  }),
  {}
) : t;
function Nw(t) {
  const e = JSON.parse(t);
  return $c(e, {
    find: (n) => typeof n == "string" && n.startsWith("#bigint."),
    replace: (n) => BigInt(n.replace("#bigint.", ""))
  });
}
function Uu(t) {
  return typeof t == "number" ? t : t === "wei" ? 0 : Math.abs(i1[t]);
}
function Lu(t, e) {
  return t.slice(0, e).join(".") || ".";
}
function ju(t, e) {
  const { length: r } = t;
  for (let n = 0; n < r; ++n)
    if (t[n] === e)
      return n + 1;
  return 0;
}
function kw(t, e) {
  const r = typeof t == "function", n = typeof e == "function", o = [], i = [];
  return function(a, c) {
    if (typeof c == "object")
      if (o.length) {
        const l = ju(o, this);
        l === 0 ? o[o.length] = this : (o.splice(l), i.splice(l)), i[i.length] = a;
        const f = ju(o, c);
        if (f !== 0)
          return n ? e.call(
            this,
            a,
            c,
            Lu(i, f)
          ) : `[ref=${Lu(i, f)}]`;
      } else
        o[0] = c, i[0] = a;
    return r ? t.call(this, a, c) : c;
  };
}
function Rw(t, e, r, n) {
  return JSON.stringify(
    t,
    kw((o, i) => {
      const s = typeof i == "bigint" ? `#bigint.${i.toString()}` : i;
      return (e == null ? void 0 : e(o, s)) || s;
    }, n),
    r ?? void 0
  );
}
var Bw = {
  getItem: (t) => "",
  setItem: (t, e) => null,
  removeItem: (t) => null
};
function Mw({
  deserialize: t = Nw,
  key: e = "wagmi",
  serialize: r = Rw,
  storage: n
}) {
  return {
    ...n,
    getItem: (o, i = null) => {
      const s = n.getItem(`${e}.${o}`);
      try {
        return s ? t(s) : i;
      } catch (a) {
        return console.warn(a), i;
      }
    },
    setItem: (o, i) => {
      if (i === null)
        n.removeItem(`${e}.${o}`);
      else
        try {
          n.setItem(`${e}.${o}`, r(i));
        } catch (s) {
          console.error(s);
        }
    },
    removeItem: (o) => n.removeItem(`${e}.${o}`)
  };
}
var Fu = "store", Cn, xi, Ac, tf, Uw = class {
  constructor({
    autoConnect: t = !1,
    connectors: e = [new Ll()],
    publicClient: r,
    storage: n = Mw({
      storage: typeof window < "u" ? window.localStorage : Bw
    }),
    logger: o = {
      warn: console.warn
    },
    webSocketPublicClient: i
  }) {
    var l, f;
    ka(this, Ac), this.publicClients = /* @__PURE__ */ new Map(), this.webSocketPublicClients = /* @__PURE__ */ new Map(), ka(this, Cn, void 0), ka(this, xi, void 0), this.args = {
      autoConnect: t,
      connectors: e,
      logger: o,
      publicClient: r,
      storage: n,
      webSocketPublicClient: i
    };
    let s = "disconnected", a;
    if (t)
      try {
        const p = n.getItem(Fu), g = (l = p == null ? void 0 : p.state) == null ? void 0 : l.data;
        s = g != null && g.account ? "reconnecting" : "connecting", a = (f = g == null ? void 0 : g.chain) == null ? void 0 : f.id;
      } catch {
      }
    const c = typeof e == "function" ? e() : e;
    c.forEach((p) => p.setStorage(n)), this.store = Sw(
      vw(
        $w(
          () => ({
            connectors: c,
            publicClient: this.getPublicClient({ chainId: a }),
            status: s,
            webSocketPublicClient: this.getWebSocketPublicClient({ chainId: a })
          }),
          {
            name: Fu,
            storage: n,
            partialize: (p) => {
              var g, w;
              return {
                ...t && {
                  data: {
                    account: (g = p == null ? void 0 : p.data) == null ? void 0 : g.account,
                    chain: (w = p == null ? void 0 : p.data) == null ? void 0 : w.chain
                  }
                },
                chains: p == null ? void 0 : p.chains
              };
            },
            version: 2
          }
        )
      )
    ), this.storage = n, qo(this, xi, n == null ? void 0 : n.getItem("wallet")), mw(this, Ac, tf).call(this), t && typeof window < "u" && setTimeout(async () => await this.autoConnect(), 0);
  }
  get chains() {
    return this.store.getState().chains;
  }
  get connectors() {
    return this.store.getState().connectors;
  }
  get connector() {
    return this.store.getState().connector;
  }
  get data() {
    return this.store.getState().data;
  }
  get error() {
    return this.store.getState().error;
  }
  get lastUsedChainId() {
    var t, e;
    return (e = (t = this.data) == null ? void 0 : t.chain) == null ? void 0 : e.id;
  }
  get publicClient() {
    return this.store.getState().publicClient;
  }
  get status() {
    return this.store.getState().status;
  }
  get subscribe() {
    return this.store.subscribe;
  }
  get webSocketPublicClient() {
    return this.store.getState().webSocketPublicClient;
  }
  setState(t) {
    const e = typeof t == "function" ? t(this.store.getState()) : t;
    this.store.setState(e, !0);
  }
  clearState() {
    this.setState((t) => ({
      ...t,
      chains: void 0,
      connector: void 0,
      data: void 0,
      error: void 0,
      status: "disconnected"
    }));
  }
  async destroy() {
    var t, e;
    this.connector && await ((e = (t = this.connector).disconnect) == null ? void 0 : e.call(t)), qo(this, Cn, !1), this.clearState(), this.store.destroy();
  }
  async autoConnect() {
    if (Na(this, Cn))
      return;
    qo(this, Cn, !0), this.setState((r) => {
      var n;
      return {
        ...r,
        status: (n = r.data) != null && n.account ? "reconnecting" : "connecting"
      };
    });
    const t = Na(this, xi) ? [...this.connectors].sort(
      (r) => r.id === Na(this, xi) ? -1 : 1
    ) : this.connectors;
    let e = !1;
    for (const r of t) {
      if (!r.ready || !r.isAuthorized || !await r.isAuthorized())
        continue;
      const o = await r.connect();
      this.setState((i) => ({
        ...i,
        connector: r,
        chains: r == null ? void 0 : r.chains,
        data: o,
        status: "connected"
      })), e = !0;
      break;
    }
    return e || this.setState((r) => ({
      ...r,
      data: void 0,
      status: "disconnected"
    })), qo(this, Cn, !1), this.data;
  }
  setConnectors(t) {
    this.args = {
      ...this.args,
      connectors: t
    };
    const e = typeof t == "function" ? t() : t;
    e.forEach((r) => r.setStorage(this.args.storage)), this.setState((r) => ({
      ...r,
      connectors: e
    }));
  }
  getPublicClient({ chainId: t } = {}) {
    let e = this.publicClients.get(-1);
    if (e && (e == null ? void 0 : e.chain.id) === t || (e = this.publicClients.get(t ?? -1), e))
      return e;
    const { publicClient: r } = this.args;
    return e = typeof r == "function" ? r({ chainId: t }) : r, this.publicClients.set(t ?? -1, e), e;
  }
  setPublicClient(t) {
    var r, n;
    const e = (n = (r = this.data) == null ? void 0 : r.chain) == null ? void 0 : n.id;
    this.args = {
      ...this.args,
      publicClient: t
    }, this.publicClients.clear(), this.setState((o) => ({
      ...o,
      publicClient: this.getPublicClient({ chainId: e })
    }));
  }
  getWebSocketPublicClient({ chainId: t } = {}) {
    let e = this.webSocketPublicClients.get(-1);
    if (e && (e == null ? void 0 : e.chain.id) === t || (e = this.webSocketPublicClients.get(t ?? -1), e))
      return e;
    const { webSocketPublicClient: r } = this.args;
    return e = typeof r == "function" ? r({ chainId: t }) : r, e && this.webSocketPublicClients.set(t ?? -1, e), e;
  }
  setWebSocketPublicClient(t) {
    var r, n;
    const e = (n = (r = this.data) == null ? void 0 : r.chain) == null ? void 0 : n.id;
    this.args = {
      ...this.args,
      webSocketPublicClient: t
    }, this.webSocketPublicClients.clear(), this.setState((o) => ({
      ...o,
      webSocketPublicClient: this.getWebSocketPublicClient({
        chainId: e
      })
    }));
  }
  setLastUsedConnector(t = null) {
    var e;
    (e = this.storage) == null || e.setItem("wallet", t);
  }
};
Cn = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Ac = /* @__PURE__ */ new WeakSet();
tf = function() {
  const t = (a) => {
    this.setState((c) => ({
      ...c,
      data: { ...c.data, ...a }
    }));
  }, e = () => {
    this.clearState();
  }, r = (a) => {
    this.setState((c) => ({ ...c, error: a }));
  };
  this.store.subscribe(
    ({ connector: a }) => a,
    (a, c) => {
      var l, f, p, g, w, m;
      (l = c == null ? void 0 : c.off) == null || l.call(c, "change", t), (f = c == null ? void 0 : c.off) == null || f.call(c, "disconnect", e), (p = c == null ? void 0 : c.off) == null || p.call(c, "error", r), a && ((g = a.on) == null || g.call(a, "change", t), (w = a.on) == null || w.call(a, "disconnect", e), (m = a.on) == null || m.call(a, "error", r));
    }
  );
  const { publicClient: n, webSocketPublicClient: o } = this.args;
  (typeof n == "function" || typeof o == "function") && this.store.subscribe(
    ({ data: a }) => {
      var c;
      return (c = a == null ? void 0 : a.chain) == null ? void 0 : c.id;
    },
    (a) => {
      this.setState((c) => ({
        ...c,
        publicClient: this.getPublicClient({ chainId: a }),
        webSocketPublicClient: this.getWebSocketPublicClient({
          chainId: a
        })
      }));
    }
  );
};
var Sc;
function Lw(t) {
  const e = new Uw(t);
  return Sc = e, e;
}
function cr() {
  if (!Sc)
    throw new Error(
      "No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config"
    );
  return Sc;
}
async function Wu({ chainId: t, connector: e }) {
  const r = cr(), n = r.connector;
  if (n && e.id === n.id)
    throw new Iw();
  try {
    r.setState((i) => ({ ...i, status: "connecting" }));
    const o = await e.connect({ chainId: t });
    return r.setLastUsedConnector(e.id), r.setState((i) => ({
      ...i,
      connector: e,
      chains: e == null ? void 0 : e.chains,
      data: o,
      status: "connected"
    })), r.storage.setItem("connected", !0), { ...o, connector: e };
  } catch (o) {
    throw r.setState((i) => ({
      ...i,
      status: i.connector ? "connected" : "disconnected"
    })), o;
  }
}
async function jw() {
  const t = cr();
  t.connector && await t.connector.disconnect(), t.clearState(), t.storage.removeItem("connected");
}
var Fw = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
], Ww = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
function oi({ chainId: t } = {}) {
  const e = cr();
  return t && e.getPublicClient({ chainId: t }) || e.publicClient;
}
async function zw({
  chainId: t,
  contracts: e,
  blockNumber: r,
  blockTag: n,
  ...o
}) {
  const i = oi({ chainId: t });
  if (!i.chains)
    throw new Tw();
  if (t && i.chain.id !== t)
    throw new Pw({ chainId: t });
  return i.multicall({
    allowFailure: o.allowFailure ?? !0,
    blockNumber: r,
    blockTag: n,
    contracts: e
  });
}
async function Hw({
  address: t,
  account: e,
  chainId: r,
  abi: n,
  args: o,
  functionName: i,
  blockNumber: s,
  blockTag: a
}) {
  return oi({ chainId: r }).readContract({
    abi: n,
    address: t,
    account: e,
    functionName: i,
    args: o,
    blockNumber: s,
    blockTag: a
  });
}
async function qw({
  contracts: t,
  blockNumber: e,
  blockTag: r,
  ...n
}) {
  const { allowFailure: o = !0 } = n;
  try {
    const i = oi(), s = t.reduce((f, p, g) => {
      const w = p.chainId ?? i.chain.id;
      return {
        ...f,
        [w]: [...f[w] || [], { contract: p, index: g }]
      };
    }, {}), a = () => Object.entries(s).map(
      ([f, p]) => zw({
        allowFailure: o,
        chainId: parseInt(f),
        contracts: p.map(
          ({ contract: g }) => g
        ),
        blockNumber: e,
        blockTag: r
      })
    ), c = (await Promise.all(a())).flat(), l = Object.values(s).flatMap(
      (f) => f.map(({ index: p }) => p)
    );
    return c.reduce((f, p, g) => (f && (f[l[g]] = p), f), []);
  } catch (i) {
    if (i instanceof bl)
      throw i;
    const s = () => t.map(
      (a) => Hw({ ...a, blockNumber: e, blockTag: r })
    );
    return o ? (await Promise.allSettled(s())).map((a) => a.status === "fulfilled" ? { result: a.value, status: "success" } : { error: a.reason, result: void 0, status: "failure" }) : await Promise.all(s());
  }
}
async function Gw({
  address: t,
  chainId: e,
  formatUnits: r,
  token: n
}) {
  const o = cr(), i = oi({ chainId: e });
  if (n) {
    const l = async ({ abi: f }) => {
      const p = { abi: f, address: n, chainId: e }, [g, w, m] = await qw({
        allowFailure: !1,
        contracts: [
          {
            ...p,
            functionName: "balanceOf",
            args: [t]
          },
          { ...p, functionName: "decimals" },
          { ...p, functionName: "symbol" }
        ]
      });
      return {
        decimals: w,
        formatted: os(g ?? "0", Uu(r ?? w)),
        symbol: m,
        value: g
      };
    };
    try {
      return await l({ abi: Fw });
    } catch (f) {
      if (f instanceof bl) {
        const { symbol: p, ...g } = await l({
          abi: Ww
        });
        return {
          symbol: id(Yr(p, { dir: "right" })),
          ...g
        };
      }
      throw f;
    }
  }
  const s = [
    ...o.publicClient.chains || [],
    ...o.chains ?? []
  ], a = await i.getBalance({ address: t }), c = s.find((l) => l.id === i.chain.id);
  return {
    decimals: (c == null ? void 0 : c.nativeCurrency.decimals) ?? 18,
    formatted: os(a ?? "0", Uu(r ?? 18)),
    symbol: (c == null ? void 0 : c.nativeCurrency.symbol) ?? "ETH",
    value: a
  };
}
function Dc() {
  const { data: t, connector: e, status: r } = cr();
  switch (r) {
    case "connected":
      return {
        address: t == null ? void 0 : t.account,
        connector: e,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: r
      };
    case "reconnecting":
      return {
        address: t == null ? void 0 : t.account,
        connector: e,
        isConnected: !!(t != null && t.account),
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: r
      };
    case "connecting":
      return {
        address: t == null ? void 0 : t.account,
        connector: e,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: r
      };
    case "disconnected":
      return {
        address: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: r
      };
  }
}
function Pc() {
  var o, i, s, a;
  const t = cr(), e = (i = (o = t.data) == null ? void 0 : o.chain) == null ? void 0 : i.id, r = t.chains ?? [], n = [
    ...((s = t.publicClient) == null ? void 0 : s.chains) || [],
    ...r
  ].find((c) => c.id === e) ?? {
    id: e,
    name: `Chain ${e}`,
    network: `${e}`,
    nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
    rpcUrls: {
      default: { http: [""] },
      public: { http: [""] }
    }
  };
  return {
    chain: e ? {
      ...n,
      ...(a = t.data) == null ? void 0 : a.chain,
      id: e
    } : void 0,
    chains: r
  };
}
async function Vw({
  chainId: t
}) {
  const { connector: e } = cr();
  if (!e)
    throw new Gr();
  if (!e.switchChain)
    throw new Ow({
      connector: e
    });
  return e.switchChain(t);
}
function Zw(t, { selector: e = (r) => r } = {}) {
  const r = cr(), n = () => t(Dc());
  return r.subscribe(
    ({ data: i, connector: s, status: a }) => e({
      address: i == null ? void 0 : i.account,
      connector: s,
      status: a
    }),
    n,
    {
      equalityFn: ef
    }
  );
}
function Kw(t, { selector: e = (r) => r } = {}) {
  const r = cr(), n = () => t(Pc());
  return r.subscribe(
    ({ data: i, chains: s }) => {
      var a;
      return e({ chainId: (a = i == null ? void 0 : i.chain) == null ? void 0 : a.id, chains: s });
    },
    n,
    {
      equalityFn: ef
    }
  );
}
async function Yw({
  name: t,
  chainId: e
}) {
  const { normalize: r } = await import("./index-gwIGpeZR.js");
  return await oi({ chainId: e }).getEnsAvatar({ name: r(t) });
}
async function Jw({
  address: t,
  chainId: e
}) {
  return oi({ chainId: e }).getEnsName({
    address: Nt(t)
  });
}
const Xw = Symbol(), zu = Object.getPrototypeOf, Ic = /* @__PURE__ */ new WeakMap(), Qw = (t) => t && (Ic.has(t) ? Ic.get(t) : zu(t) === Object.prototype || zu(t) === Array.prototype), e2 = (t) => Qw(t) && t[Xw] || null, Hu = (t, e = !0) => {
  Ic.set(t, e);
};
var fs = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Ra = (t) => typeof t == "object" && t !== null, gr = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakSet(), t2 = (t = Object.is, e = (l, f) => new Proxy(l, f), r = (l) => Ra(l) && !Ci.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), n = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, o = /* @__PURE__ */ new WeakMap(), i = (l, f, p = n) => {
  const g = o.get(l);
  if ((g == null ? void 0 : g[0]) === f)
    return g[1];
  const w = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Hu(w, !0), o.set(l, [f, w]), Reflect.ownKeys(l).forEach((m) => {
    if (Object.getOwnPropertyDescriptor(w, m))
      return;
    const v = Reflect.get(l, m), _ = {
      value: v,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Ci.has(v))
      Hu(v, !1);
    else if (v instanceof Promise)
      delete _.value, _.get = () => p(v);
    else if (gr.has(v)) {
      const [D, y] = gr.get(
        v
      );
      _.value = i(
        D,
        y(),
        p
      );
    }
    Object.defineProperty(w, m, _);
  }), Object.preventExtensions(w);
}, s = /* @__PURE__ */ new WeakMap(), a = [1, 1], c = (l) => {
  if (!Ra(l))
    throw new Error("object required");
  const f = s.get(l);
  if (f)
    return f;
  let p = a[0];
  const g = /* @__PURE__ */ new Set(), w = (O, N = ++a[0]) => {
    p !== N && (p = N, g.forEach((k) => k(O, N)));
  };
  let m = a[1];
  const v = (O = ++a[1]) => (m !== O && !g.size && (m = O, D.forEach(([N]) => {
    const k = N[1](O);
    k > p && (p = k);
  })), p), _ = (O) => (N, k) => {
    const V = [...N];
    V[1] = [O, ...V[1]], w(V, k);
  }, D = /* @__PURE__ */ new Map(), y = (O, N) => {
    if ((fs ? "production" : void 0) !== "production" && D.has(O))
      throw new Error("prop listener already exists");
    if (g.size) {
      const k = N[3](_(O));
      D.set(O, [N, k]);
    } else
      D.set(O, [N]);
  }, C = (O) => {
    var N;
    const k = D.get(O);
    k && (D.delete(O), (N = k[1]) == null || N.call(k));
  }, x = (O) => (g.add(O), g.size === 1 && D.forEach(([k, V], J) => {
    if ((fs ? "production" : void 0) !== "production" && V)
      throw new Error("remove already exists");
    const W = k[3](_(J));
    D.set(J, [k, W]);
  }), () => {
    g.delete(O), g.size === 0 && D.forEach(([k, V], J) => {
      V && (V(), D.set(J, [k]));
    });
  }), E = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), d = e(E, {
    deleteProperty(O, N) {
      const k = Reflect.get(O, N);
      C(N);
      const V = Reflect.deleteProperty(O, N);
      return V && w(["delete", [N], k]), V;
    },
    set(O, N, k, V) {
      const J = Reflect.has(O, N), W = Reflect.get(O, N, V);
      if (J && (t(W, k) || s.has(k) && t(W, s.get(k))))
        return !0;
      C(N), Ra(k) && (k = e2(k) || k);
      let U = k;
      if (k instanceof Promise)
        k.then((B) => {
          k.status = "fulfilled", k.value = B, w(["resolve", [N], B]);
        }).catch((B) => {
          k.status = "rejected", k.reason = B, w(["reject", [N], B]);
        });
      else {
        !gr.has(k) && r(k) && (U = c(k));
        const B = !Ci.has(U) && gr.get(U);
        B && y(N, B);
      }
      return Reflect.set(O, N, U, V), w(["set", [N], k, W]), !0;
    }
  });
  s.set(l, d);
  const S = [
    E,
    v,
    i,
    x
  ];
  return gr.set(d, S), Reflect.ownKeys(l).forEach((O) => {
    const N = Object.getOwnPropertyDescriptor(
      l,
      O
    );
    "value" in N && (d[O] = l[O], delete N.value, delete N.writable), Object.defineProperty(E, O, N);
  }), d;
}) => [
  // public functions
  c,
  // shared state
  gr,
  Ci,
  // internal things
  t,
  e,
  r,
  n,
  o,
  i,
  s,
  a
], [r2] = t2();
function ut(t = {}) {
  return r2(t);
}
function Rr(t, e, r) {
  const n = gr.get(t);
  (fs ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let o;
  const i = [], s = n[3];
  let a = !1;
  const l = s((f) => {
    if (i.push(f), r) {
      e(i.splice(0));
      return;
    }
    o || (o = Promise.resolve().then(() => {
      o = void 0, a && e(i.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, l();
  };
}
function ov(t, e) {
  const r = gr.get(t);
  (fs ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, o, i] = r;
  return i(n, o(), e);
}
function to(t) {
  return Ci.add(t), t;
}
function Bt(t, e, r, n) {
  let o = t[e];
  return Rr(
    t,
    () => {
      const i = t[e];
      Object.is(o, i) || r(o = i);
    },
    n
  );
}
const _i = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  ONE_SEC_MS: 1e3,
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ]
}, te = {
  isMobile() {
    return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
  },
  isAndroid() {
    const t = navigator.userAgent.toLowerCase();
    return te.isMobile() && t.includes("android");
  },
  isIos() {
    const t = navigator.userAgent.toLowerCase();
    return te.isMobile() && (t.includes("iphone") || t.includes("ipad"));
  },
  isClient() {
    return typeof window < "u";
  },
  isPairingExpired(t) {
    return t ? t - Date.now() <= _i.TEN_SEC_MS : !0;
  },
  isAllowedRetry(t) {
    return Date.now() - t >= _i.ONE_SEC_MS;
  },
  copyToClopboard(t) {
    navigator.clipboard.writeText(t);
  },
  getPairingExpiry() {
    return Date.now() + _i.FOUR_MINUTES_MS;
  },
  getPlainAddress(t) {
    return t.split(":")[2];
  },
  async wait(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  },
  debounce(t, e = 500) {
    let r;
    return (...n) => {
      function o() {
        t(...n);
      }
      r && clearTimeout(r), r = setTimeout(o, e);
    };
  },
  isHttpUrl(t) {
    return t.startsWith("http://") || t.startsWith("https://");
  },
  formatNativeUrl(t, e) {
    if (te.isHttpUrl(t))
      return this.formatUniversalUrl(t, e);
    let r = t;
    r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`);
    const n = encodeURIComponent(e);
    return {
      redirect: `${r}wc?uri=${n}`,
      href: r
    };
  },
  formatUniversalUrl(t, e) {
    if (!te.isHttpUrl(t))
      return this.formatNativeUrl(t, e);
    let r = t;
    r.endsWith("/") || (r = `${r}/`);
    const n = encodeURIComponent(e);
    return {
      redirect: `${r}wc?uri=${n}`,
      href: r
    };
  },
  openHref(t, e) {
    window.open(t, e, "noreferrer noopener");
  },
  async preloadImage(t) {
    const e = new Promise((r, n) => {
      const o = new Image();
      o.onload = r, o.onerror = n, o.crossOrigin = "anonymous", o.src = t;
    });
    return Promise.race([e, te.wait(2e3)]);
  },
  formatBalance(t, e) {
    var n;
    let r;
    if (t === "0")
      r = "0.000";
    else if (typeof t == "string") {
      const o = Number(t);
      o && (r = (n = o.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : n[0]);
    }
    return r ? `${r} ${e}` : "0.000";
  },
  isRestrictedRegion() {
    try {
      const { timeZone: t } = new Intl.DateTimeFormat().resolvedOptions(), e = t.toUpperCase();
      return _i.RESTRICTED_TIMEZONES.includes(e);
    } catch {
      return !1;
    }
  },
  getApiUrl() {
    return te.isRestrictedRegion() ? "https://api.web3modal.org" : "https://api.web3modal.com";
  },
  getBlockchainApiUrl() {
    return te.isRestrictedRegion() ? "https://rpc.walletconnect.org" : "https://rpc.walletconnect.com";
  },
  getAnalyticsUrl() {
    return te.isRestrictedRegion() ? "https://pulse.walletconnect.org" : "https://pulse.walletconnect.com";
  },
  getUUID() {
    return crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  }
}, Fe = ut({
  isConnected: !1
}), Ae = {
  state: Fe,
  subscribe(t) {
    return Rr(Fe, () => t(Fe));
  },
  subscribeKey(t, e) {
    return Bt(Fe, t, e);
  },
  setIsConnected(t) {
    Fe.isConnected = t;
  },
  setCaipAddress(t) {
    Fe.caipAddress = t, Fe.address = t ? te.getPlainAddress(t) : void 0;
  },
  setBalance(t, e) {
    Fe.balance = t, Fe.balanceSymbol = e;
  },
  setProfileName(t) {
    Fe.profileName = t;
  },
  setProfileImage(t) {
    Fe.profileImage = t;
  },
  setAddressExplorerUrl(t) {
    Fe.addressExplorerUrl = t;
  },
  resetAccount() {
    Fe.isConnected = !1, Fe.caipAddress = void 0, Fe.address = void 0, Fe.balance = void 0, Fe.balanceSymbol = void 0, Fe.profileName = void 0, Fe.profileImage = void 0, Fe.addressExplorerUrl = void 0;
  }
};
class Fl {
  constructor({ baseUrl: e }) {
    this.baseUrl = e;
  }
  async get({ headers: e, ...r }) {
    const n = this.createUrl(r);
    return (await fetch(n, { method: "GET", headers: e })).json();
  }
  async getBlob({ headers: e, ...r }) {
    const n = this.createUrl(r);
    return (await fetch(n, { method: "GET", headers: e })).blob();
  }
  async post({ body: e, headers: r, ...n }) {
    const o = this.createUrl(n);
    return (await fetch(o, {
      method: "POST",
      headers: r,
      body: e ? JSON.stringify(e) : void 0
    })).json();
  }
  async put({ body: e, headers: r, ...n }) {
    const o = this.createUrl(n);
    return (await fetch(o, {
      method: "PUT",
      headers: r,
      body: e ? JSON.stringify(e) : void 0
    })).json();
  }
  async delete({ body: e, headers: r, ...n }) {
    const o = this.createUrl(n);
    return (await fetch(o, {
      method: "DELETE",
      headers: r,
      body: e ? JSON.stringify(e) : void 0
    })).json();
  }
  createUrl({ path: e, params: r }) {
    const n = new URL(e, this.baseUrl);
    return r && Object.entries(r).forEach(([o, i]) => {
      i && n.searchParams.append(o, i);
    }), n;
  }
}
const Ba = "WALLETCONNECT_DEEPLINK_CHOICE", qu = "@w3m/recent", Gu = "@w3m/connected_wallet_image_url", $t = {
  setWalletConnectDeepLink({ href: t, name: e }) {
    try {
      localStorage.setItem(Ba, JSON.stringify({ href: t, name: e }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const t = localStorage.getItem(Ba);
      if (t)
        return JSON.parse(t);
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
  },
  deleteWalletConnectDeepLink() {
    try {
      localStorage.removeItem(Ba);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setWeb3ModalRecent(t) {
    try {
      const e = $t.getRecentWallets();
      e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), localStorage.setItem(qu, JSON.stringify(e)));
    } catch {
      console.info("Unable to set Web3Modal recent");
    }
  },
  getRecentWallets() {
    try {
      const t = localStorage.getItem(qu);
      return t ? JSON.parse(t) : [];
    } catch {
      console.info("Unable to get Web3Modal recent");
    }
    return [];
  },
  setConnectedWalletImageUrl(t) {
    try {
      localStorage.setItem(Gu, t);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
  },
  getConnectedWalletImageUrl() {
    try {
      return localStorage.getItem(Gu);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
  }
}, hr = ut({
  walletImages: {},
  networkImages: {},
  connectorImages: {},
  tokenImages: {}
}), vr = {
  state: hr,
  subscribeNetworkImages(t) {
    return Rr(hr.networkImages, () => t(hr.networkImages));
  },
  subscribeKey(t, e) {
    return Bt(hr, t, e);
  },
  setWalletImage(t, e) {
    hr.walletImages[t] = e;
  },
  setNetworkImage(t, e) {
    hr.networkImages[t] = e;
  },
  setConnectorImage(t, e) {
    hr.connectorImages[t] = e;
  },
  setTokenImage(t, e) {
    hr.tokenImages[t] = e;
  }
}, gi = ut({
  connectors: []
}), At = {
  state: gi,
  subscribeKey(t, e) {
    return Bt(gi, t, e);
  },
  setConnectors(t) {
    gi.connectors = t.map((e) => to(e));
  },
  addConnector(t) {
    gi.connectors.push(to(t));
  },
  getConnectors() {
    return gi.connectors;
  }
}, wi = ut({
  open: !1,
  selectedNetworkId: void 0
}), Rn = {
  state: wi,
  subscribe(t) {
    return Rr(wi, () => t(wi));
  },
  set(t) {
    Object.assign(wi, { ...wi, ...t });
  }
}, nt = ut({
  supportsAllNetworks: !0,
  isDefaultCaipNetwork: !1
}), Re = {
  state: nt,
  subscribeKey(t, e) {
    return Bt(nt, t, e);
  },
  _getClient() {
    if (!nt._client)
      throw new Error("NetworkController client not set");
    return nt._client;
  },
  setClient(t) {
    nt._client = to(t);
  },
  setCaipNetwork(t) {
    nt.caipNetwork = t, Rn.set({ selectedNetworkId: t == null ? void 0 : t.id });
  },
  setDefaultCaipNetwork(t) {
    nt.caipNetwork = t, Rn.set({ selectedNetworkId: t == null ? void 0 : t.id }), nt.isDefaultCaipNetwork = !0;
  },
  setRequestedCaipNetworks(t) {
    nt.requestedCaipNetworks = t;
  },
  async getApprovedCaipNetworksData() {
    const t = await this._getClient().getApprovedCaipNetworksData();
    nt.supportsAllNetworks = t.supportsAllNetworks, nt.approvedCaipNetworkIds = t.approvedCaipNetworkIds;
  },
  async switchActiveNetwork(t) {
    await this._getClient().switchCaipNetwork(t), nt.caipNetwork = t;
  },
  resetNetwork() {
    nt.isDefaultCaipNetwork || (nt.caipNetwork = void 0), nt.approvedCaipNetworkIds = void 0, nt.supportsAllNetworks = !0;
  }
}, yt = ut({
  projectId: "",
  sdkType: "w3m",
  sdkVersion: "html-wagmi-undefined"
}), Ee = {
  state: yt,
  subscribeKey(t, e) {
    return Bt(yt, t, e);
  },
  setProjectId(t) {
    yt.projectId = t;
  },
  setIncludeWalletIds(t) {
    yt.includeWalletIds = t;
  },
  setExcludeWalletIds(t) {
    yt.excludeWalletIds = t;
  },
  setFeaturedWalletIds(t) {
    yt.featuredWalletIds = t;
  },
  setTokens(t) {
    yt.tokens = t;
  },
  setTermsConditionsUrl(t) {
    yt.termsConditionsUrl = t;
  },
  setPrivacyPolicyUrl(t) {
    yt.privacyPolicyUrl = t;
  },
  setCustomWallets(t) {
    yt.customWallets = t;
  },
  setEnableAnalytics(t) {
    yt.enableAnalytics = t;
  },
  setSdkVersion(t) {
    yt.sdkVersion = t;
  },
  setMetadata(t) {
    yt.metadata = t;
  }
}, n2 = te.getApiUrl(), Ut = new Fl({ baseUrl: n2 }), i2 = "40", Vu = "4", st = ut({
  page: 1,
  count: 0,
  featured: [],
  recommended: [],
  wallets: [],
  search: []
}), ve = {
  state: st,
  subscribeKey(t, e) {
    return Bt(st, t, e);
  },
  _getApiHeaders() {
    const { projectId: t, sdkType: e, sdkVersion: r } = Ee.state;
    return {
      "x-project-id": t,
      "x-sdk-type": e,
      "x-sdk-version": r
    };
  },
  async _fetchWalletImage(t) {
    const e = `${Ut.baseUrl}/getWalletImage/${t}`, r = await Ut.getBlob({ path: e, headers: ve._getApiHeaders() });
    vr.setWalletImage(t, URL.createObjectURL(r));
  },
  async _fetchNetworkImage(t) {
    const e = `${Ut.baseUrl}/public/getAssetImage/${t}`, r = await Ut.getBlob({ path: e, headers: ve._getApiHeaders() });
    vr.setNetworkImage(t, URL.createObjectURL(r));
  },
  async _fetchConnectorImage(t) {
    const e = `${Ut.baseUrl}/public/getAssetImage/${t}`, r = await Ut.getBlob({ path: e, headers: ve._getApiHeaders() });
    vr.setConnectorImage(t, URL.createObjectURL(r));
  },
  async fetchNetworkImages() {
    const { requestedCaipNetworks: t } = Re.state, e = t == null ? void 0 : t.map(({ imageId: r }) => r).filter(Boolean);
    e && await Promise.allSettled(e.map((r) => ve._fetchNetworkImage(r)));
  },
  async fetchConnectorImages() {
    const { connectors: t } = At.state, e = t.map(({ imageId: r }) => r).filter(Boolean);
    await Promise.allSettled(e.map((r) => ve._fetchConnectorImage(r)));
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds: t } = Ee.state;
    if (t != null && t.length) {
      const { data: e } = await Ut.get({
        path: "/getWallets",
        headers: ve._getApiHeaders(),
        params: {
          page: "1",
          entries: t != null && t.length ? String(t.length) : Vu,
          include: t == null ? void 0 : t.join(",")
        }
      });
      e.sort((n, o) => t.indexOf(n.id) - t.indexOf(o.id));
      const r = e.map((n) => n.image_id).filter(Boolean);
      await Promise.allSettled(r.map((n) => ve._fetchWalletImage(n))), st.featured = e;
    }
  },
  async fetchRecommendedWallets() {
    const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: r } = Ee.state, n = [...e ?? [], ...r ?? []].filter(Boolean), { data: o, count: i } = await Ut.get({
      path: "/getWallets",
      headers: ve._getApiHeaders(),
      params: {
        page: "1",
        entries: Vu,
        include: t == null ? void 0 : t.join(","),
        exclude: n == null ? void 0 : n.join(",")
      }
    }), s = $t.getRecentWallets(), a = o.map((l) => l.image_id).filter(Boolean), c = s.map((l) => l.image_id).filter(Boolean);
    await Promise.allSettled([...a, ...c].map((l) => ve._fetchWalletImage(l))), st.recommended = o, st.count = i ?? 0;
  },
  async fetchWallets({ page: t }) {
    const { includeWalletIds: e, excludeWalletIds: r, featuredWalletIds: n } = Ee.state, o = [
      ...st.recommended.map(({ id: c }) => c),
      ...r ?? [],
      ...n ?? []
    ].filter(Boolean), { data: i, count: s } = await Ut.get({
      path: "/getWallets",
      headers: ve._getApiHeaders(),
      params: {
        page: String(t),
        entries: i2,
        include: e == null ? void 0 : e.join(","),
        exclude: o.join(",")
      }
    }), a = i.map((c) => c.image_id).filter(Boolean);
    await Promise.allSettled([
      ...a.map((c) => ve._fetchWalletImage(c)),
      te.wait(300)
    ]), st.wallets = [...st.wallets, ...i], st.count = s > st.count ? s : st.count, st.page = t;
  },
  async searchWallet({ search: t }) {
    const { includeWalletIds: e, excludeWalletIds: r } = Ee.state;
    st.search = [];
    const { data: n } = await Ut.get({
      path: "/getWallets",
      headers: ve._getApiHeaders(),
      params: {
        page: "1",
        entries: "100",
        search: t,
        include: e == null ? void 0 : e.join(","),
        exclude: r == null ? void 0 : r.join(",")
      }
    }), o = n.map((i) => i.image_id).filter(Boolean);
    await Promise.allSettled([
      ...o.map((i) => ve._fetchWalletImage(i)),
      te.wait(300)
    ]), st.search = n;
  },
  prefetch() {
    st.prefetchPromise = Promise.race([
      Promise.allSettled([
        ve.fetchFeaturedWallets(),
        ve.fetchRecommendedWallets(),
        ve.fetchNetworkImages(),
        ve.fetchConnectorImages()
      ]),
      te.wait(3e3)
    ]);
  }
}, o2 = te.getAnalyticsUrl(), s2 = new Fl({ baseUrl: o2 }), a2 = ["MODAL_CREATED"], mn = ut({
  timestamp: Date.now(),
  data: {
    type: "track",
    event: "MODAL_CREATED"
  }
}), Se = {
  state: mn,
  subscribe(t) {
    return Rr(mn, () => t(mn));
  },
  _getApiHeaders() {
    const { projectId: t, sdkType: e, sdkVersion: r } = Ee.state;
    return {
      "x-project-id": t,
      "x-sdk-type": e,
      "x-sdk-version": r
    };
  },
  async _sendAnalyticsEvent(t) {
    try {
      if (a2.includes(t.data.event) || typeof window > "u")
        return;
      await s2.post({
        path: "/e",
        headers: Se._getApiHeaders(),
        body: {
          eventId: te.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: t.timestamp,
          props: t.data
        }
      });
    } catch {
    }
  },
  sendEvent(t) {
    mn.timestamp = Date.now(), mn.data = t, Ee.state.enableAnalytics && Se._sendAnalyticsEvent(mn);
  }
}, tt = ut({
  view: "Connect",
  history: ["Connect"]
}), he = {
  state: tt,
  subscribeKey(t, e) {
    return Bt(tt, t, e);
  },
  push(t, e) {
    t !== tt.view && (tt.view = t, tt.history.push(t), tt.data = e);
  },
  reset(t) {
    tt.view = t, tt.history = [t];
  },
  replace(t) {
    tt.history.length > 1 && tt.history.at(-1) !== t && (tt.view = t, tt.history[tt.history.length - 1] = t);
  },
  goBack() {
    if (tt.history.length > 1) {
      tt.history.pop();
      const [t] = tt.history.slice(-1);
      t && (tt.view = t);
    }
  }
}, Go = ut({
  open: !1
}), et = {
  state: Go,
  subscribeKey(t, e) {
    return Bt(Go, t, e);
  },
  async open(t) {
    await ve.state.prefetchPromise, t != null && t.view ? he.reset(t.view) : Ae.state.isConnected ? he.reset("Account") : he.reset("Connect"), Go.open = !0, Rn.set({ open: !0 }), Se.sendEvent({ type: "track", event: "MODAL_OPEN" });
  },
  close() {
    Go.open = !1, Rn.set({ open: !1 }), Se.sendEvent({ type: "track", event: "MODAL_CLOSE" });
  }
}, c2 = te.getBlockchainApiUrl(), Zu = new Fl({ baseUrl: c2 }), rf = {
  fetchIdentity({ caipChainId: t, address: e }) {
    return Zu.get({
      path: `/v1/identity/${e}`,
      params: {
        chainId: t,
        projectId: Ee.state.projectId
      }
    });
  },
  fetchTransactions({ account: t, projectId: e, cursor: r }) {
    const n = r ? { cursor: r } : {};
    return Zu.get({
      path: `/v1/account/${t}/history?projectId=${e}`,
      params: n
    });
  }
}, Xt = ut({
  message: "",
  variant: "success",
  open: !1
}), St = {
  state: Xt,
  subscribeKey(t, e) {
    return Bt(Xt, t, e);
  },
  showSuccess(t) {
    Xt.message = t, Xt.variant = "success", Xt.open = !0;
  },
  showError(t) {
    Xt.message = t, Xt.variant = "error", Xt.open = !0;
  },
  hide() {
    Xt.open = !1;
  }
}, We = ut({
  transactions: [],
  transactionsByYear: {},
  loading: !1,
  empty: !1,
  next: void 0
}), Ot = {
  state: We,
  subscribe(t) {
    return Rr(We, () => t(We));
  },
  async fetchTransactions(t) {
    const { projectId: e } = Ee.state;
    if (!e || !t)
      throw new Error("Transactions can't be fetched without a projectId and an accountAddress");
    We.loading = !0;
    try {
      const r = await rf.fetchTransactions({
        account: t,
        projectId: e,
        cursor: We.next
      }), n = this.filterSpamTransactions(r.data), o = [...We.transactions, ...n];
      We.loading = !1, We.transactions = o, We.transactionsByYear = this.groupTransactionsByYear(We.transactionsByYear, n), We.empty = o.length === 0, We.next = r.next ? r.next : void 0;
    } catch {
      Se.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: t,
          projectId: e,
          cursor: We.next
        }
      }), St.showError("Failed to fetch transactions"), We.loading = !1, We.empty = !0;
    }
  },
  groupTransactionsByYear(t = {}, e = []) {
    const r = t;
    return e.forEach((n) => {
      var i;
      const o = new Date(n.metadata.minedAt).getFullYear();
      r[o] || (r[o] = []), (i = r[o]) == null || i.push(n);
    }), r;
  },
  filterSpamTransactions(t) {
    return t.filter((e) => !e.transfers.every((n) => {
      var o;
      return ((o = n.nft_info) == null ? void 0 : o.flags.is_spam) === !0;
    }));
  },
  resetTransactions() {
    We.transactions = [], We.transactionsByYear = {}, We.loading = !1, We.empty = !1, We.next = void 0;
  }
}, Xe = ut({
  wcError: !1,
  buffering: !1
}), $e = {
  state: Xe,
  subscribeKey(t, e) {
    return Bt(Xe, t, e);
  },
  _getClient() {
    if (!Xe._client)
      throw new Error("ConnectionController client not set");
    return Xe._client;
  },
  setClient(t) {
    Xe._client = to(t);
  },
  connectWalletConnect() {
    Xe.wcPromise = this._getClient().connectWalletConnect((t) => {
      Xe.wcUri = t, Xe.wcPairingExpiry = te.getPairingExpiry();
    });
  },
  async connectExternal(t) {
    var e, r;
    await ((r = (e = this._getClient()).connectExternal) == null ? void 0 : r.call(e, t));
  },
  checkInstalled(t) {
    var e, r;
    return (r = (e = this._getClient()).checkInstalled) == null ? void 0 : r.call(e, t);
  },
  resetWcConnection() {
    Xe.wcUri = void 0, Xe.wcPairingExpiry = void 0, Xe.wcPromise = void 0, Xe.wcLinking = void 0, Xe.recentWallet = void 0, Ot.resetTransactions(), $t.deleteWalletConnectDeepLink();
  },
  setWcLinking(t) {
    Xe.wcLinking = t;
  },
  setWcError(t) {
    Xe.wcError = t, Xe.buffering = !1;
  },
  setRecentWallet(t) {
    Xe.recentWallet = t;
  },
  setBuffering(t) {
    Xe.buffering = t;
  },
  async disconnect() {
    await this._getClient().disconnect(), this.resetWcConnection();
  }
}, Ct = ut({
  status: "uninitialized"
}), Lt = {
  state: Ct,
  subscribeKey(t, e) {
    return Bt(Ct, t, e);
  },
  subscribe(t) {
    return Rr(Ct, () => t(Ct));
  },
  _getClient() {
    if (!Ct._client)
      throw new Error("SIWEController client not set");
    return Ct._client;
  },
  setSIWEClient(t) {
    Ct._client = to(t), Ct.status = "ready";
  },
  setNonce(t) {
    Ct.nonce = t;
  },
  setStatus(t) {
    Ct.status = t;
  },
  setMessage(t) {
    Ct.message = t;
  },
  setSession(t) {
    Ct.session = t;
  }
}, bn = ut({
  themeMode: "dark",
  themeVariables: {}
}), _t = {
  state: bn,
  subscribe(t) {
    return Rr(bn, () => t(bn));
  },
  setThemeMode(t) {
    bn.themeMode = t;
  },
  setThemeVariables(t) {
    bn.themeVariables = { ...bn.themeVariables, ...t };
  }
}, ze = {
  getWalletImage(t) {
    if (t != null && t.image_url)
      return t == null ? void 0 : t.image_url;
    if (t != null && t.image_id)
      return vr.state.walletImages[t.image_id];
  },
  getNetworkImage(t) {
    if (t != null && t.imageUrl)
      return t == null ? void 0 : t.imageUrl;
    if (t != null && t.imageId)
      return vr.state.networkImages[t.imageId];
  },
  getConnectorImage(t) {
    if (t != null && t.imageUrl)
      return t.imageUrl;
    if (t != null && t.imageId)
      return vr.state.connectorImages[t.imageId];
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const es = globalThis, Wl = es.ShadowRoot && (es.ShadyCSS === void 0 || es.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, zl = Symbol(), Ku = /* @__PURE__ */ new WeakMap();
let nf = class {
  constructor(e, r, n) {
    if (this._$cssResult$ = !0, n !== zl)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Wl && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = Ku.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ku.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ft = (t) => new nf(typeof t == "string" ? t : t + "", void 0, zl), re = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((n, o, i) => n + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[i + 1], t[0]);
  return new nf(r, t, zl);
}, l2 = (t, e) => {
  if (Wl)
    t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else
    for (const r of e) {
      const n = document.createElement("style"), o = es.litNonce;
      o !== void 0 && n.setAttribute("nonce", o), n.textContent = r.cssText, t.appendChild(n);
    }
}, Yu = Wl ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules)
    r += n.cssText;
  return Ft(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: u2, defineProperty: d2, getOwnPropertyDescriptor: f2, getOwnPropertyNames: h2, getOwnPropertySymbols: p2, getPrototypeOf: g2 } = Object, xr = globalThis, Ju = xr.trustedTypes, w2 = Ju ? Ju.emptyScript : "", Ma = xr.reactiveElementPolyfillSupport, Di = (t, e) => t, hs = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? w2 : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Hl = (t, e) => !u2(t, e), Xu = { attribute: !0, type: String, converter: hs, reflect: !1, hasChanged: Hl };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), xr.litPropertyMetadata ?? (xr.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let _n = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = Xu) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(e, r), !r.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, r);
      o !== void 0 && d2(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: o, set: i } = f2(this.prototype, e) ?? { get() {
      return this[r];
    }, set(s) {
      this[r] = s;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(s) {
      const a = o == null ? void 0 : o.call(this);
      i.call(this, s), this.requestUpdate(e, a, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Xu;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Di("elementProperties")))
      return;
    const e = g2(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Di("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Di("properties"))) {
      const r = this.properties, n = [...h2(r), ...p2(r)];
      for (const o of n)
        this.createProperty(o, r[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0)
        for (const [n, o] of r)
          this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const o = this._$Eu(r, n);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n)
        r.unshift(Yu(o));
    } else
      e !== void 0 && r.push(Yu(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$Eg = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$E_ ?? (this._$E_ = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$E_) == null || r.delete(e);
  }
  _$ES() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys())
      this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return l2(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$E_) == null || e.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$E_) == null || e.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$EO(e, r) {
    var i;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const s = (((i = n.converter) == null ? void 0 : i.toAttribute) !== void 0 ? n.converter : hs).toAttribute(r, n.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var i;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = n.getPropertyOptions(o), a = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((i = s.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? s.converter : hs;
      this._$Em = o, this[o] = a.fromAttribute(r, s.type), this._$Em = null;
    }
  }
  requestUpdate(e, r, n, o = !1, i) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Hl)(o ? i : this[e], r))
        return;
      this.C(e, r, n);
    }
    this.isUpdatePending === !1 && (this._$Eg = this._$EP());
  }
  C(e, r, n) {
    this._$AL.has(e) || this._$AL.set(e, r), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, s] of this._$Ep)
          this[i] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [i, s] of o)
          s.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.C(i, this[i], s);
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (n = this._$E_) == null || n.forEach((o) => {
        var i;
        return (i = o.hostUpdate) == null ? void 0 : i.call(o);
      }), this.update(r)) : this._$ET();
    } catch (o) {
      throw e = !1, this._$ET(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$E_) == null || r.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EO(r, this[r]))), this._$ET();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
_n.elementStyles = [], _n.shadowRootOptions = { mode: "open" }, _n[Di("elementProperties")] = /* @__PURE__ */ new Map(), _n[Di("finalized")] = /* @__PURE__ */ new Map(), Ma == null || Ma({ ReactiveElement: _n }), (xr.reactiveElementVersions ?? (xr.reactiveElementVersions = [])).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pi = globalThis, ps = Pi.trustedTypes, Qu = ps ? ps.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, of = "$lit$", wr = `lit$${(Math.random() + "").slice(9)}$`, sf = "?" + wr, m2 = `<${sf}>`, en = document, ro = () => en.createComment(""), no = (t) => t === null || typeof t != "object" && typeof t != "function", af = Array.isArray, b2 = (t) => af(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Ua = `[ 	
\f\r]`, mi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, e0 = /-->/g, t0 = />/g, Wr = RegExp(`>|${Ua}(?:([^\\s"'>=/]+)(${Ua}*=${Ua}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), r0 = /'/g, n0 = /"/g, cf = /^(?:script|style|textarea|title)$/i, lf = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), F = lf(1), G = lf(2), tn = Symbol.for("lit-noChange"), Le = Symbol.for("lit-nothing"), i0 = /* @__PURE__ */ new WeakMap(), Zr = en.createTreeWalker(en, 129);
function uf(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Qu !== void 0 ? Qu.createHTML(e) : e;
}
const y2 = (t, e) => {
  const r = t.length - 1, n = [];
  let o, i = e === 2 ? "<svg>" : "", s = mi;
  for (let a = 0; a < r; a++) {
    const c = t[a];
    let l, f, p = -1, g = 0;
    for (; g < c.length && (s.lastIndex = g, f = s.exec(c), f !== null); )
      g = s.lastIndex, s === mi ? f[1] === "!--" ? s = e0 : f[1] !== void 0 ? s = t0 : f[2] !== void 0 ? (cf.test(f[2]) && (o = RegExp("</" + f[2], "g")), s = Wr) : f[3] !== void 0 && (s = Wr) : s === Wr ? f[0] === ">" ? (s = o ?? mi, p = -1) : f[1] === void 0 ? p = -2 : (p = s.lastIndex - f[2].length, l = f[1], s = f[3] === void 0 ? Wr : f[3] === '"' ? n0 : r0) : s === n0 || s === r0 ? s = Wr : s === e0 || s === t0 ? s = mi : (s = Wr, o = void 0);
    const w = s === Wr && t[a + 1].startsWith("/>") ? " " : "";
    i += s === mi ? c + m2 : p >= 0 ? (n.push(l), c.slice(0, p) + of + c.slice(p) + wr + w) : c + wr + (p === -2 ? a : w);
  }
  return [uf(t, i + (t[r] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
let Tc = class df {
  constructor({ strings: e, _$litType$: r }, n) {
    let o;
    this.parts = [];
    let i = 0, s = 0;
    const a = e.length - 1, c = this.parts, [l, f] = y2(e, r);
    if (this.el = df.createElement(l, n), Zr.currentNode = this.el.content, r === 2) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (o = Zr.nextNode()) !== null && c.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const p of o.getAttributeNames())
            if (p.endsWith(of)) {
              const g = f[s++], w = o.getAttribute(p).split(wr), m = /([.?@])?(.*)/.exec(g);
              c.push({ type: 1, index: i, name: m[2], strings: w, ctor: m[1] === "." ? x2 : m[1] === "?" ? C2 : m[1] === "@" ? _2 : ia }), o.removeAttribute(p);
            } else
              p.startsWith(wr) && (c.push({ type: 6, index: i }), o.removeAttribute(p));
        if (cf.test(o.tagName)) {
          const p = o.textContent.split(wr), g = p.length - 1;
          if (g > 0) {
            o.textContent = ps ? ps.emptyScript : "";
            for (let w = 0; w < g; w++)
              o.append(p[w], ro()), Zr.nextNode(), c.push({ type: 2, index: ++i });
            o.append(p[g], ro());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === sf)
          c.push({ type: 2, index: i });
        else {
          let p = -1;
          for (; (p = o.data.indexOf(wr, p + 1)) !== -1; )
            c.push({ type: 7, index: i }), p += wr.length - 1;
        }
      i++;
    }
  }
  static createElement(e, r) {
    const n = en.createElement("template");
    return n.innerHTML = e, n;
  }
};
function Bn(t, e, r = t, n) {
  var s, a;
  if (e === tn)
    return e;
  let o = n !== void 0 ? (s = r._$Co) == null ? void 0 : s[n] : r._$Cl;
  const i = no(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== i && ((a = o == null ? void 0 : o._$AO) == null || a.call(o, !1), i === void 0 ? o = void 0 : (o = new i(t), o._$AT(t, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = o : r._$Cl = o), o !== void 0 && (e = Bn(t, o._$AS(t, e.values), o, n)), e;
}
let v2 = class {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? en).importNode(r, !0);
    Zr.currentNode = o;
    let i = Zr.nextNode(), s = 0, a = 0, c = n[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let l;
        c.type === 2 ? l = new ql(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new E2(i, this, e)), this._$AV.push(l), c = n[++a];
      }
      s !== (c == null ? void 0 : c.index) && (i = Zr.nextNode(), s++);
    }
    return Zr.currentNode = en, o;
  }
  p(e) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, r), r += n.strings.length - 2) : n._$AI(e[r])), r++;
  }
}, ql = class ff {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, n, o) {
    this.type = 2, this._$AH = Le, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = Bn(this, e, r), no(e) ? e === Le || e == null || e === "" ? (this._$AH !== Le && this._$AR(), this._$AH = Le) : e !== this._$AH && e !== tn && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : b2(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== Le && no(this._$AH) ? this._$AA.nextSibling.data = e : this.$(en.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var i;
    const { values: r, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Tc.createElement(uf(n.h, n.h[0]), this.options)), n);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === o)
      this._$AH.p(r);
    else {
      const s = new v2(o, this), a = s.u(this.options);
      s.p(r), this.$(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = i0.get(e.strings);
    return r === void 0 && i0.set(e.strings, r = new Tc(e)), r;
  }
  T(e) {
    af(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, o = 0;
    for (const i of e)
      o === r.length ? r.push(n = new ff(this.k(ro()), this.k(ro()), this, this.options)) : n = r[o], n._$AI(i), o++;
    o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}, ia = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, n, o, i) {
    this.type = 1, this._$AH = Le, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Le;
  }
  _$AI(e, r = this, n, o) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      e = Bn(this, e, r, 0), s = !no(e) || e !== this._$AH && e !== tn, s && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = i[0], c = 0; c < i.length - 1; c++)
        l = Bn(this, a[n + c], r, c), l === tn && (l = this._$AH[c]), s || (s = !no(l) || l !== this._$AH[c]), l === Le ? e = Le : e !== Le && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
    }
    s && !o && this.O(e);
  }
  O(e) {
    e === Le ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, x2 = class extends ia {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(e) {
    this.element[this.name] = e === Le ? void 0 : e;
  }
}, C2 = class extends ia {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Le);
  }
}, _2 = class extends ia {
  constructor(e, r, n, o, i) {
    super(e, r, n, o, i), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = Bn(this, e, r, 0) ?? Le) === tn)
      return;
    const n = this._$AH, o = e === Le && n !== Le || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== Le && (n === Le || o);
    o && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, E2 = class {
  constructor(e, r, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Bn(this, e);
  }
};
const La = Pi.litHtmlPolyfillSupport;
La == null || La(Tc, ql), (Pi.litHtmlVersions ?? (Pi.litHtmlVersions = [])).push("3.1.0");
const $2 = (t, e, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const i = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = o = new ql(e.insertBefore(ro(), i), i, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ne = class extends _n {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = $2(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return tn;
  }
};
var J0;
ne._$litElement$ = !0, ne.finalized = !0, (J0 = globalThis.litElementHydrateSupport) == null || J0.call(globalThis, { LitElement: ne });
const ja = globalThis.litElementPolyfillSupport;
ja == null || ja({ LitElement: ne });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.2");
let Ii, Cr, _r;
function A2(t, e) {
  Ii = document.createElement("style"), Cr = document.createElement("style"), _r = document.createElement("style"), Ii.textContent = Tn(t).core.cssText, Cr.textContent = Tn(t).dark.cssText, _r.textContent = Tn(t).light.cssText, document.head.appendChild(Ii), document.head.appendChild(Cr), document.head.appendChild(_r), hf(e);
}
function hf(t) {
  Cr && _r && (t === "light" ? (Cr.removeAttribute("media"), _r.media = "enabled") : (_r.removeAttribute("media"), Cr.media = "enabled"));
}
function S2(t) {
  Ii && Cr && _r && (Ii.textContent = Tn(t).core.cssText, Cr.textContent = Tn(t).dark.cssText, _r.textContent = Tn(t).light.cssText);
}
function Tn(t) {
  return {
    core: re`
      :root {
        --w3m-color-mix-strength: ${Ft(t != null && t["--w3m-color-mix-strength"] ? `${t["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${Ft((t == null ? void 0 : t["--w3m-font-family"]) || "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Ft((t == null ? void 0 : t["--w3m-font-size-master"]) || "10px")};
        --w3m-border-radius-master: ${Ft((t == null ? void 0 : t["--w3m-border-radius-master"]) || "4px")};
        --w3m-z-index: ${Ft((t == null ? void 0 : t["--w3m-z-index"]) || 100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,
    light: re`
      :root {
        --w3m-color-mix: ${Ft((t == null ? void 0 : t["--w3m-color-mix"]) || "#fff")};
        --w3m-accent: ${Ft((t == null ? void 0 : t["--w3m-accent"]) || "#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,
    dark: re`
      :root {
        --w3m-color-mix: ${Ft((t == null ? void 0 : t["--w3m-color-mix"]) || "#000")};
        --w3m-accent: ${Ft((t == null ? void 0 : t["--w3m-accent"]) || "#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `
  };
}
const ce = re`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`, Ze = re`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`, Gl = re`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;
function D2(t, e) {
  const { kind: r, elements: n } = e;
  return {
    kind: r,
    elements: n,
    finisher(o) {
      customElements.get(t) || customElements.define(t, o);
    }
  };
}
function P2(t, e) {
  return customElements.get(t) || customElements.define(t, e), e;
}
function q(t) {
  return function(r) {
    return typeof r == "function" ? P2(t, r) : D2(t, r);
  };
}
const I2 = re`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;
var T2 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Oc = class extends ne {
  render() {
    return F`<slot></slot>`;
  }
};
Oc.styles = [ce, I2];
Oc = T2([
  q("wui-card")
], Oc);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O2 = { attribute: !0, type: String, converter: hs, reflect: !1, hasChanged: Hl }, N2 = (t = O2, e, r) => {
  const { kind: n, metadata: o } = r;
  let i = globalThis.litPropertyMetadata.get(o);
  if (i === void 0 && globalThis.litPropertyMetadata.set(o, i = /* @__PURE__ */ new Map()), i.set(r.name, t), n === "accessor") {
    const { name: s } = r;
    return { set(a) {
      const c = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(s, c, t);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, t), a;
    } };
  }
  if (n === "setter") {
    const { name: s } = r;
    return function(a) {
      const c = this[s];
      e.call(this, a), this.requestUpdate(s, c, t);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function T(t) {
  return (e, r) => typeof r == "object" ? N2(t, e, r) : ((n, o, i) => {
    const s = o.hasOwnProperty(i);
    return o.constructor.createProperty(i, s ? { ...n, wrapped: !0 } : n), s ? Object.getOwnPropertyDescriptor(o, i) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Vl(t) {
  return T({ ...t, state: !0, attribute: !1 });
}
const k2 = re`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`, R2 = G`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`, B2 = G`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`, M2 = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`, U2 = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`, L2 = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`, j2 = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`, F2 = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`, W2 = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`, z2 = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`, H2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`, q2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`, G2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`, V2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`, Z2 = G`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`, K2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`, Y2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`, J2 = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`, X2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`, Q2 = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`, em = G` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`, tm = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`, rm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`, nm = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`, im = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`, om = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`, sm = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`, am = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`, cm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`, lm = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`, um = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`, dm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`, fm = G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`, hm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`, pm = G`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`, gm = G`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`, wm = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`, mm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`, bm = G` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`, ym = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`, vm = G`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`, xm = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`, Cm = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`, _m = G`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`, Em = G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`, $m = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `, Am = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`, Sm = G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`, Dm = G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`, Pm = G`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`, Im = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`, Tm = G`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`, Om = G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var oa = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const Nm = {
  allWallets: R2,
  appStore: B2,
  chromeStore: Z2,
  apple: M2,
  arrowBottom: U2,
  arrowLeft: L2,
  arrowRight: j2,
  arrowTop: F2,
  browser: W2,
  checkmark: z2,
  chevronBottom: H2,
  chevronLeft: q2,
  chevronRight: G2,
  chevronTop: V2,
  clock: K2,
  close: Y2,
  compass: X2,
  coinPlaceholder: J2,
  copy: Q2,
  cursor: em,
  desktop: tm,
  disconnect: rm,
  discord: nm,
  etherscan: im,
  extension: om,
  externalLink: sm,
  facebook: am,
  filters: cm,
  github: lm,
  google: um,
  helpCircle: dm,
  infoCircle: fm,
  mail: hm,
  mobile: pm,
  networkPlaceholder: gm,
  nftPlaceholder: wm,
  off: mm,
  playStore: bm,
  qrCode: ym,
  refresh: vm,
  search: xm,
  swapHorizontal: Cm,
  swapHorizontalBold: _m,
  swapVertical: Em,
  telegram: $m,
  twitch: Am,
  twitter: Sm,
  twitterIcon: Dm,
  wallet: Im,
  walletConnect: Tm,
  walletPlaceholder: Pm,
  warningCircle: Om
};
let Mn = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.name = "copy", this.color = "fg-300";
  }
  render() {
    return this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `, F`${Nm[this.name]}`;
  }
};
Mn.styles = [ce, Gl, k2];
oa([
  T()
], Mn.prototype, "size", void 0);
oa([
  T()
], Mn.prototype, "name", void 0);
oa([
  T()
], Mn.prototype, "color", void 0);
Mn = oa([
  q("wui-icon")
], Mn);
const km = re`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
var Zl = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let io = class extends ne {
  constructor() {
    super(...arguments), this.src = "./path/to/image.jpg", this.alt = "Image";
  }
  render() {
    return F`<img src=${this.src} alt=${this.alt} />`;
  }
};
io.styles = [ce, Gl, km];
Zl([
  T()
], io.prototype, "src", void 0);
Zl([
  T()
], io.prototype, "alt", void 0);
io = Zl([
  q("wui-image")
], io);
const Rm = re`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var Bm = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Nc = class extends ne {
  render() {
    return F`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
  }
};
Nc.styles = [ce, Rm];
Nc = Bm([
  q("wui-loading-hexagon")
], Nc);
const Mm = re`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
var Kl = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let oo = class extends ne {
  constructor() {
    super(...arguments), this.color = "accent-100", this.size = "lg";
  }
  render() {
    return this.style.cssText = `--local-color: var(--wui-color-${this.color});`, this.dataset.size = this.size, F`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
oo.styles = [ce, Mm];
Kl([
  T()
], oo.prototype, "color", void 0);
Kl([
  T()
], oo.prototype, "size", void 0);
oo = Kl([
  q("wui-loading-spinner")
], oo);
const Um = re`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var pf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let gs = class extends ne {
  constructor() {
    super(...arguments), this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const e = this.radius > 50 ? 50 : this.radius, n = 36 - e, o = 116 + n, i = 245 + n, s = 360 + n * 1.75;
    return F`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `;
  }
};
gs.styles = [ce, Um];
pf([
  T({ type: Number })
], gs.prototype, "radius", void 0);
gs = pf([
  q("wui-loading-thumbnail")
], gs);
const Lm = re`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
var sa = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Un = class extends ne {
  constructor() {
    super(...arguments), this.width = "", this.height = "", this.borderRadius = "m";
  }
  render() {
    return this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `, F`<slot></slot>`;
  }
};
Un.styles = [Lm];
sa([
  T()
], Un.prototype, "width", void 0);
sa([
  T()
], Un.prototype, "height", void 0);
sa([
  T()
], Un.prototype, "borderRadius", void 0);
Un = sa([
  q("wui-shimmer")
], Un);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gf = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, wf = (t) => (...e) => ({ _$litDirective$: t, values: e });
let mf = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, n) {
    this._$Ct = e, this._$AM = r, this._$Ci = n;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jm = wf(class extends mf {
  constructor(t) {
    var e;
    if (super(t), t.type !== gf.ATTRIBUTE || t.name !== "class" || ((e = t.strings) == null ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var n, o;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.st = new Set(t.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in e)
        e[i] && !((n = this.st) != null && n.has(i)) && this.it.add(i);
      return this.render(e);
    }
    const r = t.element.classList;
    for (const i of this.it)
      i in e || (r.remove(i), this.it.delete(i));
    for (const i in e) {
      const s = !!e[i];
      s === this.it.has(i) || (o = this.st) != null && o.has(i) || (s ? (r.add(i), this.it.add(i)) : (r.remove(i), this.it.delete(i)));
    }
    return tn;
  }
}), Fm = re`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;
var aa = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ln = class extends ne {
  constructor() {
    super(...arguments), this.variant = "paragraph-500", this.color = "fg-300", this.align = "left";
  }
  render() {
    const e = {
      [`wui-font-${this.variant}`]: !0,
      [`wui-color-${this.color}`]: !0
    };
    return this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `, F`<slot class=${jm(e)}></slot>`;
  }
};
Ln.styles = [ce, Fm];
aa([
  T()
], Ln.prototype, "variant", void 0);
aa([
  T()
], Ln.prototype, "color", void 0);
aa([
  T()
], Ln.prototype, "align", void 0);
Ln = aa([
  q("wui-text")
], Ln);
const Wm = G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `, zm = G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `, Hm = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`, qm = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `, Gm = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `, Vm = G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`, Zm = G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`, Km = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `, Ym = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`, Jm = G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `, Xm = G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`, Qm = G`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `, e3 = G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `, t3 = re`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;
var bf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const r3 = {
  browser: Wm,
  dao: zm,
  defi: Hm,
  defiAlt: qm,
  eth: Gm,
  layers: Vm,
  lock: Zm,
  login: Km,
  network: Ym,
  nft: Jm,
  noun: Xm,
  profile: Qm,
  system: e3
};
let ws = class extends ne {
  constructor() {
    super(...arguments), this.name = "browser";
  }
  render() {
    return F`${r3[this.name]}`;
  }
};
ws.styles = [ce, t3];
bf([
  T()
], ws.prototype, "name", void 0);
ws = bf([
  q("wui-visual")
], ws);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jr = (t) => t ?? Le, Te = {
  getSpacingStyles(t, e) {
    if (Array.isArray(t))
      return t[e] ? `var(--wui-spacing-${t[e]})` : void 0;
    if (typeof t == "string")
      return `var(--wui-spacing-${t})`;
  },
  getFormattedDate(t) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(t);
  },
  getHostName(t) {
    return new URL(t).hostname;
  },
  getTruncateString({ string: t, charsStart: e, charsEnd: r, truncate: n }) {
    return t.length <= e + r ? t : n === "end" ? `${t.substring(0, e)}...` : n === "start" ? `...${t.substring(t.length - r)}` : `${t.substring(0, Math.floor(e))}...${t.substring(t.length - Math.floor(r))}`;
  },
  generateAvatarColors(t) {
    const r = t.toLowerCase().replace(/^0x/iu, "").substring(0, 6), n = this.hexToRgb(r), o = [];
    for (let i = 0; i < 5; i += 1) {
      const s = this.tintColor(n, 0.15 * i);
      o.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`);
    }
    return `
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `;
  },
  hexToRgb(t) {
    const e = parseInt(t, 16), r = e >> 16 & 255, n = e >> 8 & 255, o = e & 255;
    return [r, n, o];
  },
  tintColor(t, e) {
    const [r, n, o] = t, i = Math.round(r + (255 - r) * e), s = Math.round(n + (255 - n) * e), a = Math.round(o + (255 - o) * e);
    return [i, s, a];
  },
  isNumber(t) {
    return {
      number: /^[0-9]+$/u
    }.number.test(t);
  },
  getColorTheme(t) {
    return t || (typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "dark");
  }
}, n3 = re`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var vt = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let lt = class extends ne {
  render() {
    return this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && Te.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && Te.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && Te.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && Te.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && Te.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && Te.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && Te.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && Te.getSpacingStyles(this.margin, 3)};
    `, F`<slot></slot>`;
  }
};
lt.styles = [ce, n3];
vt([
  T()
], lt.prototype, "flexDirection", void 0);
vt([
  T()
], lt.prototype, "flexWrap", void 0);
vt([
  T()
], lt.prototype, "flexBasis", void 0);
vt([
  T()
], lt.prototype, "flexGrow", void 0);
vt([
  T()
], lt.prototype, "flexShrink", void 0);
vt([
  T()
], lt.prototype, "alignItems", void 0);
vt([
  T()
], lt.prototype, "justifyContent", void 0);
vt([
  T()
], lt.prototype, "columnGap", void 0);
vt([
  T()
], lt.prototype, "rowGap", void 0);
vt([
  T()
], lt.prototype, "gap", void 0);
vt([
  T()
], lt.prototype, "padding", void 0);
vt([
  T()
], lt.prototype, "margin", void 0);
lt = vt([
  q("wui-flex")
], lt);
const i3 = re`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;
var ca = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let jn = class extends ne {
  constructor() {
    super(...arguments), this.imageSrc = void 0, this.alt = void 0, this.address = void 0;
  }
  render() {
    return F`${this.visualTemplate()}`;
  }
  visualTemplate() {
    if (this.imageSrc)
      return this.dataset.variant = "image", F`<wui-image src=${this.imageSrc} alt=${this.alt ?? "avatar"}></wui-image>`;
    if (this.address) {
      this.dataset.variant = "generated";
      const e = Te.generateAvatarColors(this.address);
      return this.style.cssText = e, null;
    }
    return this.dataset.variant = "default", null;
  }
};
jn.styles = [ce, i3];
ca([
  T()
], jn.prototype, "imageSrc", void 0);
ca([
  T()
], jn.prototype, "alt", void 0);
ca([
  T()
], jn.prototype, "address", void 0);
jn = ca([
  q("wui-avatar")
], jn);
const o3 = re`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var lr = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Rt = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.background = "transparent", this.border = !1, this.borderColor = "wui-color-bg-125", this.icon = "copy";
  }
  render() {
    const e = this.iconSize || this.size, r = this.size === "lg", n = r ? "12%" : "16%", o = r ? "xxs" : "3xl", i = this.background === "gray", s = this.background === "opaque", a = this.backgroundColor === "accent-100" && s || this.backgroundColor === "success-100" && s || this.backgroundColor === "error-100" && s || this.backgroundColor === "inverse-100" && s;
    let c = `var(--wui-color-${this.backgroundColor})`;
    return a ? c = `var(--wui-icon-box-bg-${this.backgroundColor})` : i && (c = `var(--wui-gray-${this.backgroundColor})`), this.style.cssText = `
       --local-bg-value: ${c};
       --local-bg-mix: ${a || i ? "100%" : n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? "2px" : "1px"} solid ${this.border ? `var(--${this.borderColor})` : "transparent"}
   `, F` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `;
  }
};
Rt.styles = [ce, Ze, o3];
lr([
  T()
], Rt.prototype, "size", void 0);
lr([
  T()
], Rt.prototype, "backgroundColor", void 0);
lr([
  T()
], Rt.prototype, "iconColor", void 0);
lr([
  T()
], Rt.prototype, "iconSize", void 0);
lr([
  T()
], Rt.prototype, "background", void 0);
lr([
  T({ type: Boolean })
], Rt.prototype, "border", void 0);
lr([
  T()
], Rt.prototype, "borderColor", void 0);
lr([
  T()
], Rt.prototype, "icon", void 0);
Rt = lr([
  q("wui-icon-box")
], Rt);
const s3 = re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;
var un = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let nr = class extends ne {
  constructor() {
    super(...arguments), this.networkSrc = void 0, this.avatarSrc = void 0, this.balance = void 0, this.disabled = !1, this.isProfileName = !1, this.address = "";
  }
  render() {
    return F`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${Jr(this.balance ? void 0 : "local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Te.getTruncateString({
      string: this.address,
      charsStart: this.isProfileName ? 18 : 4,
      charsEnd: this.isProfileName ? 0 : 6,
      truncate: this.isProfileName ? "end" : "middle"
    })}
          </wui-text>
        </wui-flex>
      </button>
    `;
  }
  balanceTemplate() {
    if (this.balance) {
      const e = this.networkSrc ? F`<wui-image src=${this.networkSrc}></wui-image>` : F`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;
      return F`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `;
    }
    return null;
  }
};
nr.styles = [ce, Ze, s3];
un([
  T()
], nr.prototype, "networkSrc", void 0);
un([
  T()
], nr.prototype, "avatarSrc", void 0);
un([
  T()
], nr.prototype, "balance", void 0);
un([
  T({ type: Boolean })
], nr.prototype, "disabled", void 0);
un([
  T({ type: Boolean })
], nr.prototype, "isProfileName", void 0);
un([
  T()
], nr.prototype, "address", void 0);
nr = un([
  q("wui-account-button")
], nr);
const a3 = re`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;
var Io = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let rn = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.name = "";
  }
  render() {
    let e = "xxs";
    return this.size === "lg" ? e = "m" : this.size === "md" ? e = "xs" : e = "xxs", this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `, this.walletIcon && (this.dataset.walletIcon = this.walletIcon), F` ${this.templateVisual()}`;
  }
  templateVisual() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : this.walletIcon ? F`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>` : F`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
rn.styles = [ce, a3];
Io([
  T()
], rn.prototype, "size", void 0);
Io([
  T()
], rn.prototype, "name", void 0);
Io([
  T()
], rn.prototype, "imageSrc", void 0);
Io([
  T()
], rn.prototype, "walletIcon", void 0);
rn = Io([
  q("wui-wallet-image")
], rn);
const c3 = re`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;
var yf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const Fa = 4;
let ms = class extends ne {
  constructor() {
    super(...arguments), this.walletImages = [];
  }
  render() {
    const e = this.walletImages.length < Fa;
    return F`${this.walletImages.slice(0, Fa).map(({ src: r, walletName: n }) => F`
          <wui-wallet-image
            size="inherit"
            imageSrc=${r}
            name=${Jr(n)}
          ></wui-wallet-image>
        `)}
    ${e ? [...Array(Fa - this.walletImages.length)].map(() => F` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}`;
  }
};
ms.styles = [ce, c3];
yf([
  T({ type: Array })
], ms.prototype, "walletImages", void 0);
ms = yf([
  q("wui-all-wallets-image")
], ms);
const l3 = re`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;
var si = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Dr = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.disabled = !1, this.fullWidth = !1, this.loading = !1, this.variant = "fill";
  }
  render() {
    this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};`;
    const e = this.size === "md" ? "paragraph-600" : "small-600";
    return F`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled || this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
  loadingTemplate() {
    return this.loading ? F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>` : F``;
  }
};
Dr.styles = [ce, Ze, l3];
si([
  T()
], Dr.prototype, "size", void 0);
si([
  T({ type: Boolean })
], Dr.prototype, "disabled", void 0);
si([
  T({ type: Boolean })
], Dr.prototype, "fullWidth", void 0);
si([
  T({ type: Boolean })
], Dr.prototype, "loading", void 0);
si([
  T()
], Dr.prototype, "variant", void 0);
Dr = si([
  q("wui-button")
], Dr);
const vf = G`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`, u3 = re`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;
var xf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let bs = class extends ne {
  constructor() {
    super(...arguments), this.type = "wallet";
  }
  render() {
    return F`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === "network" ? F` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${vf}` : F`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
};
bs.styles = [ce, Ze, u3];
xf([
  T()
], bs.prototype, "type", void 0);
bs = xf([
  q("wui-card-select-loader")
], bs);
const d3 = G`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`, f3 = re`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;
var To = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let nn = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.name = "uknown", this.selected = !1;
  }
  render() {
    const e = this.size === "lg";
    return this.style.cssText = `
      --local-stroke: ${this.selected ? "var(--wui-color-accent-100)" : "var(--wui-gray-glass-010)"};
      --local-path: ${e ? "var(--wui-path-network-lg)" : "var(--wui-path-network)"};
      --local-width: ${e ? "86px" : "48px"};
      --local-height: ${e ? "96px" : "54px"};
      --local-icon-size: ${e ? "42px" : "24px"};
    `, F`${this.templateVisual()} ${e ? d3 : vf}`;
  }
  templateVisual() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
  }
};
nn.styles = [ce, f3];
To([
  T()
], nn.prototype, "size", void 0);
To([
  T()
], nn.prototype, "name", void 0);
To([
  T()
], nn.prototype, "imageSrc", void 0);
To([
  T({ type: Boolean })
], nn.prototype, "selected", void 0);
nn = To([
  q("wui-network-image")
], nn);
const h3 = re`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;
var ai = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Pr = class extends ne {
  constructor() {
    super(...arguments), this.name = "Unknown", this.type = "wallet", this.imageSrc = void 0, this.disabled = !1, this.selected = !1;
  }
  render() {
    return F`
      <button data-selected=${Jr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected ? "accent-100" : "inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `;
  }
  imageTemplate() {
    return this.type === "network" ? F`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Jr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      ` : F`
      <wui-wallet-image size="md" imageSrc=${Jr(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `;
  }
};
Pr.styles = [ce, Ze, h3];
ai([
  T()
], Pr.prototype, "name", void 0);
ai([
  T()
], Pr.prototype, "type", void 0);
ai([
  T()
], Pr.prototype, "imageSrc", void 0);
ai([
  T({ type: Boolean })
], Pr.prototype, "disabled", void 0);
ai([
  T({ type: Boolean })
], Pr.prototype, "selected", void 0);
Pr = ai([
  q("wui-card-select")
], Pr);
const p3 = re`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;
var ci = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ir = class extends ne {
  constructor() {
    super(...arguments), this.variant = "fill", this.imageSrc = void 0, this.disabled = !1, this.icon = "externalLink", this.href = "";
  }
  render() {
    const e = this.variant === "transparent" ? "small-600" : "paragraph-600";
    return F`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled ? "disabled" : ""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Te.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `;
  }
  imageTemplate() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc}></wui-image>` : null;
  }
};
Ir.styles = [ce, Ze, p3];
ci([
  T()
], Ir.prototype, "variant", void 0);
ci([
  T()
], Ir.prototype, "imageSrc", void 0);
ci([
  T({ type: Boolean })
], Ir.prototype, "disabled", void 0);
ci([
  T()
], Ir.prototype, "icon", void 0);
ci([
  T()
], Ir.prototype, "href", void 0);
Ir = ci([
  q("wui-chip")
], Ir);
const g3 = re`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;
var Yl = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let so = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.loading = !1;
  }
  render() {
    const e = this.size === "md" ? "paragraph-600" : "small-600";
    return F`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading ? "accent-100" : "inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  loadingTemplate() {
    return this.loading ? F`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>` : null;
  }
};
so.styles = [ce, Ze, g3];
Yl([
  T()
], so.prototype, "size", void 0);
Yl([
  T({ type: Boolean })
], so.prototype, "loading", void 0);
so = Yl([
  q("wui-connect-button")
], so);
const w3 = re`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var la = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Fn = class extends ne {
  constructor() {
    super(...arguments), this.disabled = !1, this.label = "", this.buttonLabel = "";
  }
  render() {
    return F`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs", "2l", "1xs", "2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
Fn.styles = [ce, Ze, w3];
la([
  T({ type: Boolean })
], Fn.prototype, "disabled", void 0);
la([
  T()
], Fn.prototype, "label", void 0);
la([
  T()
], Fn.prototype, "buttonLabel", void 0);
Fn = la([
  q("wui-cta-button")
], Fn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m3 = (t) => t.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ti = (t, e) => {
  var n;
  const r = t._$AN;
  if (r === void 0)
    return !1;
  for (const o of r)
    (n = o._$AO) == null || n.call(o, e, !1), Ti(o, e);
  return !0;
}, ys = (t) => {
  let e, r;
  do {
    if ((e = t._$AM) === void 0)
      break;
    r = e._$AN, r.delete(t), t = e;
  } while ((r == null ? void 0 : r.size) === 0);
}, Cf = (t) => {
  for (let e; e = t._$AM; t = e) {
    let r = e._$AN;
    if (r === void 0)
      e._$AN = r = /* @__PURE__ */ new Set();
    else if (r.has(t))
      break;
    r.add(t), v3(e);
  }
};
function b3(t) {
  this._$AN !== void 0 ? (ys(this), this._$AM = t, Cf(this)) : this._$AM = t;
}
function y3(t, e = !1, r = 0) {
  const n = this._$AH, o = this._$AN;
  if (o !== void 0 && o.size !== 0)
    if (e)
      if (Array.isArray(n))
        for (let i = r; i < n.length; i++)
          Ti(n[i], !1), ys(n[i]);
      else
        n != null && (Ti(n, !1), ys(n));
    else
      Ti(this, t);
}
const v3 = (t) => {
  t.type == gf.CHILD && (t._$AP ?? (t._$AP = y3), t._$AQ ?? (t._$AQ = b3));
};
let x3 = class extends mf {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, r, n) {
    super._$AT(e, r, n), Cf(this), this.isConnected = e._$AU;
  }
  _$AO(e, r = !0) {
    var n, o;
    e !== this.isConnected && (this.isConnected = e, e ? (n = this.reconnected) == null || n.call(this) : (o = this.disconnected) == null || o.call(this)), r && (Ti(this, e), ys(this));
  }
  setValue(e) {
    if (m3(this._$Ct))
      this._$Ct._$AI(e, this);
    else {
      const r = [...this._$Ct._$AH];
      r[this._$Ci] = e, this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _f = () => new C3();
let C3 = class {
};
const Wa = /* @__PURE__ */ new WeakMap(), Ef = wf(class extends x3 {
  render(t) {
    return Le;
  }
  update(t, [e]) {
    var n;
    const r = e !== this.G;
    return r && this.G !== void 0 && this.ot(void 0), (r || this.rt !== this.lt) && (this.G = e, this.ct = (n = t.options) == null ? void 0 : n.host, this.ot(this.lt = t.element)), Le;
  }
  ot(t) {
    if (typeof this.G == "function") {
      const e = this.ct ?? globalThis;
      let r = Wa.get(e);
      r === void 0 && (r = /* @__PURE__ */ new WeakMap(), Wa.set(e, r)), r.get(this.G) !== void 0 && this.G.call(this.ct, void 0), r.set(this.G, t), t !== void 0 && this.G.call(this.ct, t);
    } else
      this.G.value = t;
  }
  get rt() {
    var t, e;
    return typeof this.G == "function" ? (t = Wa.get(this.ct ?? globalThis)) == null ? void 0 : t.get(this.G) : (e = this.G) == null ? void 0 : e.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
}), _3 = re`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;
var dn = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let ir = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.disabled = !1, this.placeholder = "", this.type = "text", this.inputElementRef = _f();
  }
  render() {
    const e = `wui-size-${this.size}`;
    return F` ${this.templateIcon()}
      <input
        ${Ef(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Jr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`;
  }
  templateIcon() {
    return this.icon ? F`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>` : null;
  }
  dispatchInputChangeEvent() {
    var e;
    this.dispatchEvent(new CustomEvent("inputChange", {
      detail: (e = this.inputElementRef.value) == null ? void 0 : e.value,
      bubbles: !0,
      composed: !0
    }));
  }
};
ir.styles = [ce, Ze, _3];
dn([
  T()
], ir.prototype, "size", void 0);
dn([
  T()
], ir.prototype, "icon", void 0);
dn([
  T({ type: Boolean })
], ir.prototype, "disabled", void 0);
dn([
  T()
], ir.prototype, "placeholder", void 0);
dn([
  T()
], ir.prototype, "type", void 0);
dn([
  T()
], ir.prototype, "keyHint", void 0);
ir = dn([
  q("wui-input-text")
], ir);
const E3 = re`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;
var $f = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let vs = class extends ne {
  render() {
    return F`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `;
  }
  templateError() {
    return this.errorMessage ? F`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>` : null;
  }
};
vs.styles = [ce, E3];
$f([
  T()
], vs.prototype, "errorMessage", void 0);
vs = $f([
  q("wui-email-input")
], vs);
const $3 = re`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;
var Oo = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let on = class extends ne {
  constructor() {
    super(...arguments), this.size = "md", this.disabled = !1, this.icon = "copy", this.iconColor = "inherit";
  }
  render() {
    return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
on.styles = [ce, Ze, Gl, $3];
Oo([
  T()
], on.prototype, "size", void 0);
Oo([
  T({ type: Boolean })
], on.prototype, "disabled", void 0);
Oo([
  T()
], on.prototype, "icon", void 0);
Oo([
  T()
], on.prototype, "iconColor", void 0);
on = Oo([
  q("wui-icon-link")
], on);
const A3 = re`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;
var Af = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let xs = class extends ne {
  constructor() {
    super(...arguments), this.icon = "copy";
  }
  render() {
    return F`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
xs.styles = [ce, Ze, A3];
Af([
  T()
], xs.prototype, "icon", void 0);
xs = Af([
  q("wui-input-element")
], xs);
const S3 = re`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;
var Sf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Cs = class extends ne {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  render() {
    return F`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `;
  }
};
Cs.styles = [ce, Ze, S3];
Sf([
  T({ type: Boolean })
], Cs.prototype, "disabled", void 0);
Cs = Sf([
  q("wui-input-numeric")
], Cs);
const D3 = re`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;
var Jl = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let ao = class extends ne {
  constructor() {
    super(...arguments), this.disabled = !1, this.color = "inherit";
  }
  render() {
    return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
ao.styles = [ce, Ze, D3];
Jl([
  T({ type: Boolean })
], ao.prototype, "disabled", void 0);
Jl([
  T()
], ao.prototype, "color", void 0);
ao = Jl([
  q("wui-link")
], ao);
const P3 = re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
var Zt = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Dt = class extends ne {
  constructor() {
    super(...arguments), this.variant = "icon", this.disabled = !1, this.imageSrc = void 0, this.alt = void 0, this.chevron = !1, this.loading = !1;
  }
  render() {
    return F`
      <button
        ?disabled=${this.loading ? !0 : !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Jr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
  }
  visualTemplate() {
    if (this.variant === "image" && this.imageSrc)
      return F`<wui-image src=${this.imageSrc} alt=${this.alt ?? "list item"}></wui-image>`;
    if (this.iconVariant === "square" && this.icon && this.variant === "icon")
      return F`<wui-icon name=${this.icon}></wui-icon>`;
    if (this.variant === "icon" && this.icon && this.iconVariant) {
      const e = ["blue", "square-blue"].includes(this.iconVariant) ? "accent-100" : "fg-200", r = this.iconVariant === "square-blue" ? "mdl" : "md", n = this.iconSize ? this.iconSize : r;
      return F`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  loadingTemplate() {
    return this.loading ? F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>` : F``;
  }
  chevronTemplate() {
    return this.chevron ? F`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>` : null;
  }
};
Dt.styles = [ce, Ze, P3];
Zt([
  T()
], Dt.prototype, "icon", void 0);
Zt([
  T()
], Dt.prototype, "iconSize", void 0);
Zt([
  T()
], Dt.prototype, "variant", void 0);
Zt([
  T()
], Dt.prototype, "iconVariant", void 0);
Zt([
  T({ type: Boolean })
], Dt.prototype, "disabled", void 0);
Zt([
  T()
], Dt.prototype, "imageSrc", void 0);
Zt([
  T()
], Dt.prototype, "alt", void 0);
Zt([
  T({ type: Boolean })
], Dt.prototype, "chevron", void 0);
Zt([
  T({ type: Boolean })
], Dt.prototype, "loading", void 0);
Dt = Zt([
  q("wui-list-item")
], Dt);
var kc;
(function(t) {
  t.approve = "approved", t.bought = "bought", t.borrow = "borrowed", t.burn = "burnt", t.cancel = "canceled", t.claim = "claimed", t.deploy = "deployed", t.deposit = "deposited", t.execute = "executed", t.mint = "minted", t.receive = "received", t.repay = "repaid", t.send = "sent", t.sell = "sold", t.stake = "staked", t.trade = "swapped", t.unstake = "unstaked", t.withdraw = "withdrawn";
})(kc || (kc = {}));
const I3 = re`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;
var fn = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let or = class extends ne {
  constructor() {
    super(...arguments), this.images = [], this.secondImage = {
      type: void 0,
      url: ""
    };
  }
  render() {
    const [e, r] = this.images, n = (e == null ? void 0 : e.type) === "NFT", o = r != null && r.url ? r.type === "NFT" : n, i = n ? "var(--wui-border-radius-xxs)" : "var(--wui-border-radius-s)", s = o ? "var(--wui-border-radius-xxs)" : "var(--wui-border-radius-s)";
    return this.style.cssText = `
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `, F`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`;
  }
  templateVisual() {
    const [e, r] = this.images, n = e == null ? void 0 : e.type;
    return this.images.length === 2 && (e != null && e.url || r != null && r.url) ? F`<div class="swap-images-container">
        ${e != null && e.url ? F`<wui-image src=${e.url} alt="Transaction image"></wui-image>` : null}
        ${r != null && r.url ? F`<wui-image src=${r.url} alt="Transaction image"></wui-image>` : null}
      </div>` : e != null && e.url ? F`<wui-image src=${e.url} alt="Transaction image"></wui-image>` : n === "NFT" ? F`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>` : F`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`;
  }
  templateIcon() {
    let e = "accent-100", r;
    return r = this.getIcon(), this.status && (e = this.getStatusColor()), r ? F`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    ` : null;
  }
  getDirectionIcon() {
    switch (this.direction) {
      case "in":
        return "arrowBottom";
      case "out":
        return "arrowTop";
      default:
        return;
    }
  }
  getIcon() {
    return this.onlyDirectionIcon ? this.getDirectionIcon() : this.type === "trade" ? "swapHorizontalBold" : this.type === "approve" ? "checkmark" : this.type === "cancel" ? "close" : this.getDirectionIcon();
  }
  getStatusColor() {
    switch (this.status) {
      case "confirmed":
        return "success-100";
      case "failed":
        return "error-100";
      case "pending":
        return "inverse-100";
      default:
        return "accent-100";
    }
  }
};
or.styles = [I3];
fn([
  T()
], or.prototype, "type", void 0);
fn([
  T()
], or.prototype, "status", void 0);
fn([
  T()
], or.prototype, "direction", void 0);
fn([
  T()
], or.prototype, "onlyDirectionIcon", void 0);
fn([
  T()
], or.prototype, "images", void 0);
fn([
  T()
], or.prototype, "secondImage", void 0);
or = fn([
  q("wui-transaction-visual")
], or);
const T3 = re`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
var Br = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ht = class extends ne {
  constructor() {
    super(...arguments), this.type = "approve", this.onlyDirectionIcon = !1, this.images = [];
  }
  render() {
    return F`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${kc[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `;
  }
  templateDescription() {
    var r;
    const e = (r = this.descriptions) == null ? void 0 : r[0];
    return e ? F`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        ` : null;
  }
  templateSecondDescription() {
    var r;
    const e = (r = this.descriptions) == null ? void 0 : r[1];
    return e ? F`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        ` : null;
  }
};
Ht.styles = [ce, T3];
Br([
  T()
], Ht.prototype, "type", void 0);
Br([
  T()
], Ht.prototype, "descriptions", void 0);
Br([
  T()
], Ht.prototype, "date", void 0);
Br([
  T()
], Ht.prototype, "onlyDirectionIcon", void 0);
Br([
  T()
], Ht.prototype, "status", void 0);
Br([
  T()
], Ht.prototype, "direction", void 0);
Br([
  T()
], Ht.prototype, "images", void 0);
Ht = Br([
  q("wui-transaction-list-item")
], Ht);
const O3 = re`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;
var N3 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Rc = class extends ne {
  render() {
    return F`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `;
  }
};
Rc.styles = [ce, O3];
Rc = N3([
  q("wui-transaction-list-item-loader")
], Rc);
const k3 = re`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;
var Df = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let _s = class extends ne {
  constructor() {
    super(...arguments), this.variant = "main";
  }
  render() {
    return this.dataset.variant = this.variant, F`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
_s.styles = [ce, k3];
Df([
  T()
], _s.prototype, "variant", void 0);
_s = Df([
  q("wui-tag")
], _s);
const R3 = re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;
var Kt = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Pt = class extends ne {
  constructor() {
    super(...arguments), this.walletImages = [], this.imageSrc = "", this.name = "", this.disabled = !1, this.showAllWallets = !1;
  }
  render() {
    return F`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc ? F` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> ` : this.showAllWallets && this.walletIcon ? F` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> ` : null;
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc ? F`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>` : !this.showAllWallets && !this.imageSrc ? F`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>` : null;
  }
  templateStatus() {
    return this.tagLabel && this.tagVariant ? F`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>` : this.icon ? F`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>` : null;
  }
};
Pt.styles = [ce, Ze, R3];
Kt([
  T({ type: Array })
], Pt.prototype, "walletImages", void 0);
Kt([
  T()
], Pt.prototype, "imageSrc", void 0);
Kt([
  T()
], Pt.prototype, "name", void 0);
Kt([
  T()
], Pt.prototype, "tagLabel", void 0);
Kt([
  T()
], Pt.prototype, "tagVariant", void 0);
Kt([
  T()
], Pt.prototype, "icon", void 0);
Kt([
  T()
], Pt.prototype, "walletIcon", void 0);
Kt([
  T({ type: Boolean })
], Pt.prototype, "disabled", void 0);
Kt([
  T({ type: Boolean })
], Pt.prototype, "showAllWallets", void 0);
Pt = Kt([
  q("wui-list-wallet")
], Pt);
const B3 = re`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;
var Pf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Es = class extends ne {
  constructor() {
    super(...arguments), this.logo = "google";
  }
  render() {
    return F`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
  }
};
Es.styles = [ce, B3];
Pf([
  T()
], Es.prototype, "logo", void 0);
Es = Pf([
  q("wui-logo")
], Es);
const M3 = re`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var Xl = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let co = class extends ne {
  constructor() {
    super(...arguments), this.logo = "google", this.disabled = !1;
  }
  render() {
    return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `;
  }
};
co.styles = [ce, Ze, M3];
Xl([
  T()
], co.prototype, "logo", void 0);
Xl([
  T({ type: Boolean })
], co.prototype, "disabled", void 0);
co = Xl([
  q("wui-logo-select")
], co);
const U3 = re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;
var Ql = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let lo = class extends ne {
  constructor() {
    super(...arguments), this.imageSrc = void 0, this.disabled = !1;
  }
  render() {
    return F`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  visualTemplate() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc}></wui-image>` : F`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
lo.styles = [ce, Ze, U3];
Ql([
  T()
], lo.prototype, "imageSrc", void 0);
Ql([
  T({ type: Boolean })
], lo.prototype, "disabled", void 0);
lo = Ql([
  q("wui-network-button")
], lo);
const L3 = re`
  :host {
    position: relative;
    display: block;
  }
`;
var If = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let $s = class extends ne {
  constructor() {
    super(...arguments), this.length = 6, this.numerics = [], this.handleKeyDown = (e, r) => {
      const n = e.target, o = this.getInputElement(n), i = ["ArrowLeft", "ArrowRight", "Shift", "Delete"];
      if (!o)
        return;
      i.includes(e.key) && e.preventDefault();
      const s = o.selectionStart;
      switch (e.key) {
        case "ArrowLeft":
          s && o.setSelectionRange(s + 1, s + 1), this.focusInputField("prev", r);
          break;
        case "ArrowRight":
          this.focusInputField("next", r);
          break;
        case "Shift":
          this.focusInputField("next", r);
          break;
        case "Delete":
          o.value === "" ? this.focusInputField("prev", r) : o.value = "";
          break;
        case "Backspace":
          o.value === "" ? this.focusInputField("prev", r) : o.value = "";
          break;
      }
    }, this.focusInputField = (e, r) => {
      if (e === "next") {
        const n = r + 1, o = this.numerics[n < this.length ? n : r], i = o ? this.getInputElement(o) : void 0;
        i && i.focus();
      }
      if (e === "prev") {
        const n = r - 1, o = this.numerics[n > -1 ? n : r], i = o ? this.getInputElement(o) : void 0;
        i && i.focus();
      }
    };
  }
  firstUpdated() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelectorAll("wui-input-numeric");
    e && (this.numerics = Array.from(e));
  }
  render() {
    return F`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e, r) => F`
            <wui-input-numeric
              @input=${(n) => this.handleInput(n, r)}
              @keydown=${(n) => this.handleKeyDown(n, r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `;
  }
  handleInput(e, r) {
    const n = e.target, o = this.getInputElement(n);
    if (o) {
      const i = o.value;
      e.inputType === "insertFromPaste" ? this.handlePaste(o, i, r) : Te.isNumber(i) && e.data ? (o.value = e.data, this.focusInputField("next", r)) : o.value = "";
    }
  }
  handlePaste(e, r, n) {
    const o = r[0];
    if (o && Te.isNumber(o)) {
      e.value = o;
      const s = r.substring(1);
      if (n + 1 < this.length && s.length) {
        const a = this.numerics[n + 1], c = a ? this.getInputElement(a) : void 0;
        c && this.handlePaste(c, s, n + 1);
      } else
        this.focusInputField("next", n);
    } else
      e.value = "";
  }
  getInputElement(e) {
    var r;
    return (r = e.shadowRoot) != null && r.querySelector("input") ? e.shadowRoot.querySelector("input") : null;
  }
};
$s.styles = [ce, L3];
If([
  T({ type: Number })
], $s.prototype, "length", void 0);
$s = If([
  q("wui-otp")
], $s);
var No = {}, j3 = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Tf = {}, xt = {};
let eu;
const F3 = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
xt.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
xt.getSymbolTotalCodewords = function(e) {
  return F3[e];
};
xt.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
xt.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  eu = e;
};
xt.isKanjiModeEnabled = function() {
  return typeof eu < "u";
};
xt.toSJIS = function(e) {
  return eu(e);
};
var ua = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  t.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, t.from = function(n, o) {
    if (t.isValid(n))
      return n;
    try {
      return e(n);
    } catch {
      return o;
    }
  };
})(ua);
function Of() {
  this.buffer = [], this.length = 0;
}
Of.prototype = {
  get: function(t) {
    const e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (let r = 0; r < e; r++)
      this.putBit((t >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var W3 = Of;
function ko(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
ko.prototype.set = function(t, e, r, n) {
  const o = t * this.size + e;
  this.data[o] = r, n && (this.reservedBit[o] = !0);
};
ko.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
ko.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
};
ko.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var z3 = ko, Nf = {};
(function(t) {
  const e = xt.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    const o = Math.floor(n / 7) + 2, i = e(n), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, a = [i - 7];
    for (let c = 1; c < o - 1; c++)
      a[c] = a[c - 1] - s;
    return a.push(6), a.reverse();
  }, t.getPositions = function(n) {
    const o = [], i = t.getRowColCoords(n), s = i.length;
    for (let a = 0; a < s; a++)
      for (let c = 0; c < s; c++)
        a === 0 && c === 0 || // top-left
        a === 0 && c === s - 1 || // bottom-left
        a === s - 1 && c === 0 || o.push([i[a], i[c]]);
    return o;
  };
})(Nf);
var kf = {};
const H3 = xt.getSymbolSize, o0 = 7;
kf.getPositions = function(e) {
  const r = H3(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [r - o0, 0],
    // bottom-left
    [0, r - o0]
  ];
};
var Rf = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, t.from = function(o) {
    return t.isValid(o) ? parseInt(o, 10) : void 0;
  }, t.getPenaltyN1 = function(o) {
    const i = o.size;
    let s = 0, a = 0, c = 0, l = null, f = null;
    for (let p = 0; p < i; p++) {
      a = c = 0, l = f = null;
      for (let g = 0; g < i; g++) {
        let w = o.get(p, g);
        w === l ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), l = w, a = 1), w = o.get(g, p), w === f ? c++ : (c >= 5 && (s += e.N1 + (c - 5)), f = w, c = 1);
      }
      a >= 5 && (s += e.N1 + (a - 5)), c >= 5 && (s += e.N1 + (c - 5));
    }
    return s;
  }, t.getPenaltyN2 = function(o) {
    const i = o.size;
    let s = 0;
    for (let a = 0; a < i - 1; a++)
      for (let c = 0; c < i - 1; c++) {
        const l = o.get(a, c) + o.get(a, c + 1) + o.get(a + 1, c) + o.get(a + 1, c + 1);
        (l === 4 || l === 0) && s++;
      }
    return s * e.N2;
  }, t.getPenaltyN3 = function(o) {
    const i = o.size;
    let s = 0, a = 0, c = 0;
    for (let l = 0; l < i; l++) {
      a = c = 0;
      for (let f = 0; f < i; f++)
        a = a << 1 & 2047 | o.get(l, f), f >= 10 && (a === 1488 || a === 93) && s++, c = c << 1 & 2047 | o.get(f, l), f >= 10 && (c === 1488 || c === 93) && s++;
    }
    return s * e.N3;
  }, t.getPenaltyN4 = function(o) {
    let i = 0;
    const s = o.data.length;
    for (let c = 0; c < s; c++)
      i += o.data[c];
    return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * e.N4;
  };
  function r(n, o, i) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(o, i) {
    const s = i.size;
    for (let a = 0; a < s; a++)
      for (let c = 0; c < s; c++)
        i.isReserved(c, a) || i.xor(c, a, r(o, c, a));
  }, t.getBestMask = function(o, i) {
    const s = Object.keys(t.Patterns).length;
    let a = 0, c = 1 / 0;
    for (let l = 0; l < s; l++) {
      i(l), t.applyMask(l, o);
      const f = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
      t.applyMask(l, o), f < c && (c = f, a = l);
    }
    return a;
  };
})(Rf);
var da = {};
const br = ua, Vo = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Zo = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
da.getBlocksCount = function(e, r) {
  switch (r) {
    case br.L:
      return Vo[(e - 1) * 4 + 0];
    case br.M:
      return Vo[(e - 1) * 4 + 1];
    case br.Q:
      return Vo[(e - 1) * 4 + 2];
    case br.H:
      return Vo[(e - 1) * 4 + 3];
    default:
      return;
  }
};
da.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case br.L:
      return Zo[(e - 1) * 4 + 0];
    case br.M:
      return Zo[(e - 1) * 4 + 1];
    case br.Q:
      return Zo[(e - 1) * 4 + 2];
    case br.H:
      return Zo[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Bf = {}, fa = {};
const Oi = new Uint8Array(512), As = new Uint8Array(256);
(function() {
  let e = 1;
  for (let r = 0; r < 255; r++)
    Oi[r] = e, As[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (let r = 255; r < 512; r++)
    Oi[r] = Oi[r - 255];
})();
fa.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return As[e];
};
fa.exp = function(e) {
  return Oi[e];
};
fa.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : Oi[As[e] + As[r]];
};
(function(t) {
  const e = fa;
  t.mul = function(n, o) {
    const i = new Uint8Array(n.length + o.length - 1);
    for (let s = 0; s < n.length; s++)
      for (let a = 0; a < o.length; a++)
        i[s + a] ^= e.mul(n[s], o[a]);
    return i;
  }, t.mod = function(n, o) {
    let i = new Uint8Array(n);
    for (; i.length - o.length >= 0; ) {
      const s = i[0];
      for (let c = 0; c < o.length; c++)
        i[c] ^= e.mul(o[c], s);
      let a = 0;
      for (; a < i.length && i[a] === 0; )
        a++;
      i = i.slice(a);
    }
    return i;
  }, t.generateECPolynomial = function(n) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < n; i++)
      o = t.mul(o, new Uint8Array([1, e.exp(i)]));
    return o;
  };
})(Bf);
const Mf = Bf;
function tu(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
tu.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Mf.generateECPolynomial(this.degree);
};
tu.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const n = Mf.mod(r, this.genPoly), o = this.degree - n.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(n, o), i;
  }
  return n;
};
var q3 = tu, Uf = {}, Mr = {}, ru = {};
ru.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var Yt = {};
const Lf = "[0-9]+", G3 = "[A-Z $%*+\\-./:]+";
let uo = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
uo = uo.replace(/u/g, "\\u");
const V3 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + uo + `)(?:.|[\r
]))+`;
Yt.KANJI = new RegExp(uo, "g");
Yt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Yt.BYTE = new RegExp(V3, "g");
Yt.NUMERIC = new RegExp(Lf, "g");
Yt.ALPHANUMERIC = new RegExp(G3, "g");
const Z3 = new RegExp("^" + uo + "$"), K3 = new RegExp("^" + Lf + "$"), Y3 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Yt.testKanji = function(e) {
  return Z3.test(e);
};
Yt.testNumeric = function(e) {
  return K3.test(e);
};
Yt.testAlphanumeric = function(e) {
  return Y3.test(e);
};
(function(t) {
  const e = ru, r = Yt;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(i, s) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!e.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
  }, t.getBestModeForData = function(i) {
    return r.testNumeric(i) ? t.NUMERIC : r.testAlphanumeric(i) ? t.ALPHANUMERIC : r.testKanji(i) ? t.KANJI : t.BYTE;
  }, t.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function(i, s) {
    if (t.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return s;
    }
  };
})(Mr);
(function(t) {
  const e = xt, r = da, n = ua, o = Mr, i = ru, s = 7973, a = e.getBCHDigit(s);
  function c(g, w, m) {
    for (let v = 1; v <= 40; v++)
      if (w <= t.getCapacity(v, m, g))
        return v;
  }
  function l(g, w) {
    return o.getCharCountIndicator(g, w) + 4;
  }
  function f(g, w) {
    let m = 0;
    return g.forEach(function(v) {
      const _ = l(v.mode, w);
      m += _ + v.getBitsLength();
    }), m;
  }
  function p(g, w) {
    for (let m = 1; m <= 40; m++)
      if (f(g, m) <= t.getCapacity(m, w, o.MIXED))
        return m;
  }
  t.from = function(w, m) {
    return i.isValid(w) ? parseInt(w, 10) : m;
  }, t.getCapacity = function(w, m, v) {
    if (!i.isValid(w))
      throw new Error("Invalid QR Code version");
    typeof v > "u" && (v = o.BYTE);
    const _ = e.getSymbolTotalCodewords(w), D = r.getTotalCodewordsCount(w, m), y = (_ - D) * 8;
    if (v === o.MIXED)
      return y;
    const C = y - l(v, w);
    switch (v) {
      case o.NUMERIC:
        return Math.floor(C / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(C / 11 * 2);
      case o.KANJI:
        return Math.floor(C / 13);
      case o.BYTE:
      default:
        return Math.floor(C / 8);
    }
  }, t.getBestVersionForData = function(w, m) {
    let v;
    const _ = n.from(m, n.M);
    if (Array.isArray(w)) {
      if (w.length > 1)
        return p(w, _);
      if (w.length === 0)
        return 1;
      v = w[0];
    } else
      v = w;
    return c(v.mode, v.getLength(), _);
  }, t.getEncodedBits = function(w) {
    if (!i.isValid(w) || w < 7)
      throw new Error("Invalid QR Code version");
    let m = w << 12;
    for (; e.getBCHDigit(m) - a >= 0; )
      m ^= s << e.getBCHDigit(m) - a;
    return w << 12 | m;
  };
})(Uf);
var jf = {};
const Bc = xt, Ff = 1335, J3 = 21522, s0 = Bc.getBCHDigit(Ff);
jf.getEncodedBits = function(e, r) {
  const n = e.bit << 3 | r;
  let o = n << 10;
  for (; Bc.getBCHDigit(o) - s0 >= 0; )
    o ^= Ff << Bc.getBCHDigit(o) - s0;
  return (n << 10 | o) ^ J3;
};
var Wf = {};
const X3 = Mr;
function Wn(t) {
  this.mode = X3.NUMERIC, this.data = t.toString();
}
Wn.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
Wn.prototype.getLength = function() {
  return this.data.length;
};
Wn.prototype.getBitsLength = function() {
  return Wn.getBitsLength(this.data.length);
};
Wn.prototype.write = function(e) {
  let r, n, o;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), o = parseInt(n, 10), e.put(o, 10);
  const i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), o = parseInt(n, 10), e.put(o, i * 3 + 1));
};
var Q3 = Wn;
const eb = Mr, za = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function zn(t) {
  this.mode = eb.ALPHANUMERIC, this.data = t;
}
zn.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
zn.prototype.getLength = function() {
  return this.data.length;
};
zn.prototype.getBitsLength = function() {
  return zn.getBitsLength(this.data.length);
};
zn.prototype.write = function(e) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let n = za.indexOf(this.data[r]) * 45;
    n += za.indexOf(this.data[r + 1]), e.put(n, 11);
  }
  this.data.length % 2 && e.put(za.indexOf(this.data[r]), 6);
};
var tb = zn, rb = function(e) {
  for (var r = [], n = e.length, o = 0; o < n; o++) {
    var i = e.charCodeAt(o);
    if (i >= 55296 && i <= 56319 && n > o + 1) {
      var s = e.charCodeAt(o + 1);
      s >= 56320 && s <= 57343 && (i = (i - 55296) * 1024 + s - 56320 + 65536, o += 1);
    }
    if (i < 128) {
      r.push(i);
      continue;
    }
    if (i < 2048) {
      r.push(i >> 6 | 192), r.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      r.push(i >> 18 | 240), r.push(i >> 12 & 63 | 128), r.push(i >> 6 & 63 | 128), r.push(i & 63 | 128);
      continue;
    }
    r.push(239, 191, 189);
  }
  return new Uint8Array(r).buffer;
};
const nb = rb, ib = Mr;
function Hn(t) {
  this.mode = ib.BYTE, typeof t == "string" && (t = nb(t)), this.data = new Uint8Array(t);
}
Hn.getBitsLength = function(e) {
  return e * 8;
};
Hn.prototype.getLength = function() {
  return this.data.length;
};
Hn.prototype.getBitsLength = function() {
  return Hn.getBitsLength(this.data.length);
};
Hn.prototype.write = function(t) {
  for (let e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var ob = Hn;
const sb = Mr, ab = xt;
function qn(t) {
  this.mode = sb.KANJI, this.data = t;
}
qn.getBitsLength = function(e) {
  return e * 13;
};
qn.prototype.getLength = function() {
  return this.data.length;
};
qn.prototype.getBitsLength = function() {
  return qn.getBitsLength(this.data.length);
};
qn.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = ab.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var cb = qn, zf = { exports: {} };
(function(t) {
  var e = {
    single_source_shortest_paths: function(r, n, o) {
      var i = {}, s = {};
      s[n] = 0;
      var a = e.PriorityQueue.make();
      a.push(n, 0);
      for (var c, l, f, p, g, w, m, v, _; !a.empty(); ) {
        c = a.pop(), l = c.value, p = c.cost, g = r[l] || {};
        for (f in g)
          g.hasOwnProperty(f) && (w = g[f], m = p + w, v = s[f], _ = typeof s[f] > "u", (_ || v > m) && (s[f] = m, a.push(f, m), i[f] = l));
      }
      if (typeof o < "u" && typeof s[o] > "u") {
        var D = ["Could not find a path from ", n, " to ", o, "."].join("");
        throw new Error(D);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var o = [], i = n; i; )
        o.push(i), r[i], i = r[i];
      return o.reverse(), o;
    },
    find_path: function(r, n, o) {
      var i = e.single_source_shortest_paths(r, n, o);
      return e.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var n = e.PriorityQueue, o = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (o[i] = n[i]);
        return o.queue = [], o.sorter = r.sorter || n.default_sorter, o;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(r, n) {
        var o = { value: r, cost: n };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  t.exports = e;
})(zf);
var lb = zf.exports;
(function(t) {
  const e = Mr, r = Q3, n = tb, o = ob, i = cb, s = Yt, a = xt, c = lb;
  function l(D) {
    return unescape(encodeURIComponent(D)).length;
  }
  function f(D, y, C) {
    const x = [];
    let E;
    for (; (E = D.exec(C)) !== null; )
      x.push({
        data: E[0],
        index: E.index,
        mode: y,
        length: E[0].length
      });
    return x;
  }
  function p(D) {
    const y = f(s.NUMERIC, e.NUMERIC, D), C = f(s.ALPHANUMERIC, e.ALPHANUMERIC, D);
    let x, E;
    return a.isKanjiModeEnabled() ? (x = f(s.BYTE, e.BYTE, D), E = f(s.KANJI, e.KANJI, D)) : (x = f(s.BYTE_KANJI, e.BYTE, D), E = []), y.concat(C, x, E).sort(function(d, S) {
      return d.index - S.index;
    }).map(function(d) {
      return {
        data: d.data,
        mode: d.mode,
        length: d.length
      };
    });
  }
  function g(D, y) {
    switch (y) {
      case e.NUMERIC:
        return r.getBitsLength(D);
      case e.ALPHANUMERIC:
        return n.getBitsLength(D);
      case e.KANJI:
        return i.getBitsLength(D);
      case e.BYTE:
        return o.getBitsLength(D);
    }
  }
  function w(D) {
    return D.reduce(function(y, C) {
      const x = y.length - 1 >= 0 ? y[y.length - 1] : null;
      return x && x.mode === C.mode ? (y[y.length - 1].data += C.data, y) : (y.push(C), y);
    }, []);
  }
  function m(D) {
    const y = [];
    for (let C = 0; C < D.length; C++) {
      const x = D[C];
      switch (x.mode) {
        case e.NUMERIC:
          y.push([
            x,
            { data: x.data, mode: e.ALPHANUMERIC, length: x.length },
            { data: x.data, mode: e.BYTE, length: x.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          y.push([
            x,
            { data: x.data, mode: e.BYTE, length: x.length }
          ]);
          break;
        case e.KANJI:
          y.push([
            x,
            { data: x.data, mode: e.BYTE, length: l(x.data) }
          ]);
          break;
        case e.BYTE:
          y.push([
            { data: x.data, mode: e.BYTE, length: l(x.data) }
          ]);
      }
    }
    return y;
  }
  function v(D, y) {
    const C = {}, x = { start: {} };
    let E = ["start"];
    for (let A = 0; A < D.length; A++) {
      const d = D[A], S = [];
      for (let O = 0; O < d.length; O++) {
        const N = d[O], k = "" + A + O;
        S.push(k), C[k] = { node: N, lastCount: 0 }, x[k] = {};
        for (let V = 0; V < E.length; V++) {
          const J = E[V];
          C[J] && C[J].node.mode === N.mode ? (x[J][k] = g(C[J].lastCount + N.length, N.mode) - g(C[J].lastCount, N.mode), C[J].lastCount += N.length) : (C[J] && (C[J].lastCount = N.length), x[J][k] = g(N.length, N.mode) + 4 + e.getCharCountIndicator(N.mode, y));
        }
      }
      E = S;
    }
    for (let A = 0; A < E.length; A++)
      x[E[A]].end = 0;
    return { map: x, table: C };
  }
  function _(D, y) {
    let C;
    const x = e.getBestModeForData(D);
    if (C = e.from(y, x), C !== e.BYTE && C.bit < x.bit)
      throw new Error('"' + D + '" cannot be encoded with mode ' + e.toString(C) + `.
 Suggested mode is: ` + e.toString(x));
    switch (C === e.KANJI && !a.isKanjiModeEnabled() && (C = e.BYTE), C) {
      case e.NUMERIC:
        return new r(D);
      case e.ALPHANUMERIC:
        return new n(D);
      case e.KANJI:
        return new i(D);
      case e.BYTE:
        return new o(D);
    }
  }
  t.fromArray = function(y) {
    return y.reduce(function(C, x) {
      return typeof x == "string" ? C.push(_(x, null)) : x.data && C.push(_(x.data, x.mode)), C;
    }, []);
  }, t.fromString = function(y, C) {
    const x = p(y, a.isKanjiModeEnabled()), E = m(x), A = v(E, C), d = c.find_path(A.map, "start", "end"), S = [];
    for (let O = 1; O < d.length - 1; O++)
      S.push(A.table[d[O]].node);
    return t.fromArray(w(S));
  }, t.rawSplit = function(y) {
    return t.fromArray(
      p(y, a.isKanjiModeEnabled())
    );
  };
})(Wf);
const ha = xt, Ha = ua, ub = W3, db = z3, fb = Nf, hb = kf, Mc = Rf, Uc = da, pb = q3, Ss = Uf, gb = jf, wb = Mr, qa = Wf;
function mb(t, e) {
  const r = t.size, n = hb.getPositions(e);
  for (let o = 0; o < n.length; o++) {
    const i = n[o][0], s = n[o][1];
    for (let a = -1; a <= 7; a++)
      if (!(i + a <= -1 || r <= i + a))
        for (let c = -1; c <= 7; c++)
          s + c <= -1 || r <= s + c || (a >= 0 && a <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? t.set(i + a, s + c, !0, !0) : t.set(i + a, s + c, !1, !0));
  }
}
function bb(t) {
  const e = t.size;
  for (let r = 8; r < e - 8; r++) {
    const n = r % 2 === 0;
    t.set(r, 6, n, !0), t.set(6, r, n, !0);
  }
}
function yb(t, e) {
  const r = fb.getPositions(e);
  for (let n = 0; n < r.length; n++) {
    const o = r[n][0], i = r[n][1];
    for (let s = -2; s <= 2; s++)
      for (let a = -2; a <= 2; a++)
        s === -2 || s === 2 || a === -2 || a === 2 || s === 0 && a === 0 ? t.set(o + s, i + a, !0, !0) : t.set(o + s, i + a, !1, !0);
  }
}
function vb(t, e) {
  const r = t.size, n = Ss.getEncodedBits(e);
  let o, i, s;
  for (let a = 0; a < 18; a++)
    o = Math.floor(a / 3), i = a % 3 + r - 8 - 3, s = (n >> a & 1) === 1, t.set(o, i, s, !0), t.set(i, o, s, !0);
}
function Ga(t, e, r) {
  const n = t.size, o = gb.getEncodedBits(e, r);
  let i, s;
  for (i = 0; i < 15; i++)
    s = (o >> i & 1) === 1, i < 6 ? t.set(i, 8, s, !0) : i < 8 ? t.set(i + 1, 8, s, !0) : t.set(n - 15 + i, 8, s, !0), i < 8 ? t.set(8, n - i - 1, s, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, s, !0) : t.set(8, 15 - i - 1, s, !0);
  t.set(n - 8, 8, 1, !0);
}
function xb(t, e) {
  const r = t.size;
  let n = -1, o = r - 1, i = 7, s = 0;
  for (let a = r - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!t.isReserved(o, a - c)) {
          let l = !1;
          s < e.length && (l = (e[s] >>> i & 1) === 1), t.set(o, a - c, l), i--, i === -1 && (s++, i = 7);
        }
      if (o += n, o < 0 || r <= o) {
        o -= n, n = -n;
        break;
      }
    }
}
function Cb(t, e, r) {
  const n = new ub();
  r.forEach(function(c) {
    n.put(c.mode.bit, 4), n.put(c.getLength(), wb.getCharCountIndicator(c.mode, t)), c.write(n);
  });
  const o = ha.getSymbolTotalCodewords(t), i = Uc.getTotalCodewordsCount(t, e), s = (o - i) * 8;
  for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  const a = (s - n.getLengthInBits()) / 8;
  for (let c = 0; c < a; c++)
    n.put(c % 2 ? 17 : 236, 8);
  return _b(n, t, e);
}
function _b(t, e, r) {
  const n = ha.getSymbolTotalCodewords(e), o = Uc.getTotalCodewordsCount(e, r), i = n - o, s = Uc.getBlocksCount(e, r), a = n % s, c = s - a, l = Math.floor(n / s), f = Math.floor(i / s), p = f + 1, g = l - f, w = new pb(g);
  let m = 0;
  const v = new Array(s), _ = new Array(s);
  let D = 0;
  const y = new Uint8Array(t.buffer);
  for (let d = 0; d < s; d++) {
    const S = d < c ? f : p;
    v[d] = y.slice(m, m + S), _[d] = w.encode(v[d]), m += S, D = Math.max(D, S);
  }
  const C = new Uint8Array(n);
  let x = 0, E, A;
  for (E = 0; E < D; E++)
    for (A = 0; A < s; A++)
      E < v[A].length && (C[x++] = v[A][E]);
  for (E = 0; E < g; E++)
    for (A = 0; A < s; A++)
      C[x++] = _[A][E];
  return C;
}
function Eb(t, e, r, n) {
  let o;
  if (Array.isArray(t))
    o = qa.fromArray(t);
  else if (typeof t == "string") {
    let l = e;
    if (!l) {
      const f = qa.rawSplit(t);
      l = Ss.getBestVersionForData(f, r);
    }
    o = qa.fromString(t, l || 40);
  } else
    throw new Error("Invalid data");
  const i = Ss.getBestVersionForData(o, r);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = i;
  else if (e < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const s = Cb(e, r, o), a = ha.getSymbolSize(e), c = new db(a);
  return mb(c, e), bb(c), yb(c, e), Ga(c, r, 0), e >= 7 && vb(c, e), xb(c, s), isNaN(n) && (n = Mc.getBestMask(
    c,
    Ga.bind(null, c, r)
  )), Mc.applyMask(n, c), Ga(c, r, n), {
    modules: c,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: o
  };
}
Tf.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let n = Ha.M, o, i;
  return typeof r < "u" && (n = Ha.from(r.errorCorrectionLevel, Ha.M), o = Ss.from(r.version), i = Mc.from(r.maskPattern), r.toSJISFunc && ha.setToSJISFunction(r.toSJISFunc)), Eb(e, o, n, i);
};
var Hf = {}, nu = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    const o = parseInt(n.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  t.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: o,
      color: {
        dark: e(n.color.dark || "#000000ff"),
        light: e(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, t.getScale = function(n, o) {
    return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
  }, t.getImageWidth = function(n, o) {
    const i = t.getScale(n, o);
    return Math.floor((n + o.margin * 2) * i);
  }, t.qrToImageData = function(n, o, i) {
    const s = o.modules.size, a = o.modules.data, c = t.getScale(s, i), l = Math.floor((s + i.margin * 2) * c), f = i.margin * c, p = [i.color.light, i.color.dark];
    for (let g = 0; g < l; g++)
      for (let w = 0; w < l; w++) {
        let m = (g * l + w) * 4, v = i.color.light;
        if (g >= f && w >= f && g < l - f && w < l - f) {
          const _ = Math.floor((g - f) / c), D = Math.floor((w - f) / c);
          v = p[a[_ * s + D] ? 1 : 0];
        }
        n[m++] = v.r, n[m++] = v.g, n[m++] = v.b, n[m] = v.a;
      }
  };
})(nu);
(function(t) {
  const e = nu;
  function r(o, i, s) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, s, a) {
    let c = a, l = s;
    typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), s || (l = n()), c = e.getOptions(c);
    const f = e.getImageWidth(i.modules.size, c), p = l.getContext("2d"), g = p.createImageData(f, f);
    return e.qrToImageData(g.data, i, c), r(p, l, f), p.putImageData(g, 0, 0), l;
  }, t.renderToDataURL = function(i, s, a) {
    let c = a;
    typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), c || (c = {});
    const l = t.render(i, s, c), f = c.type || "image/png", p = c.rendererOpts || {};
    return l.toDataURL(f, p.quality);
  };
})(Hf);
var qf = {};
const $b = nu;
function a0(t, e) {
  const r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function Va(t, e, r) {
  let n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function Ab(t, e, r) {
  let n = "", o = 0, i = !1, s = 0;
  for (let a = 0; a < t.length; a++) {
    const c = Math.floor(a % e), l = Math.floor(a / e);
    !c && !i && (i = !0), t[a] ? (s++, a > 0 && c > 0 && t[a - 1] || (n += i ? Va("M", c + r, 0.5 + l + r) : Va("m", o, 0), o = 0, i = !1), c + 1 < e && t[a + 1] || (n += Va("h", s), s = 0)) : o++;
  }
  return n;
}
qf.render = function(e, r, n) {
  const o = $b.getOptions(r), i = e.modules.size, s = e.modules.data, a = i + o.margin * 2, c = o.color.light.a ? "<path " + a0(o.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", l = "<path " + a0(o.color.dark, "stroke") + ' d="' + Ab(s, i, o.margin) + '"/>', f = 'viewBox="0 0 ' + a + " " + a + '"', g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + c + l + `</svg>
`;
  return typeof n == "function" && n(null, g), g;
};
const Sb = j3, Lc = Tf, Gf = Hf, Db = qf;
function iu(t, e, r, n, o) {
  const i = [].slice.call(arguments, 1), s = i.length, a = typeof i[s - 1] == "function";
  if (!a && !Sb())
    throw new Error("Callback required as last argument");
  if (a) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (o = r, r = e, e = n = void 0) : s === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = r, r = e, e = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (r = e, e = n = void 0) : s === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(c, l) {
      try {
        const f = Lc.create(r, n);
        c(t(f, e, n));
      } catch (f) {
        l(f);
      }
    });
  }
  try {
    const c = Lc.create(r, n);
    o(null, t(c, e, n));
  } catch (c) {
    o(c);
  }
}
No.create = Lc.create;
No.toCanvas = iu.bind(null, Gf.render);
No.toDataURL = iu.bind(null, Gf.renderToDataURL);
No.toString = iu.bind(null, function(t, e, r) {
  return Db.render(t, r);
});
const Pb = 0.1, c0 = 2.5, Qt = 7;
function Za(t, e, r) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= r + Pb;
}
function Ib(t, e) {
  const r = Array.prototype.slice.call(No.create(t, { errorCorrectionLevel: e }).modules.data, 0), n = Math.sqrt(r.length);
  return r.reduce((o, i, s) => (s % n === 0 ? o.push([i]) : o[o.length - 1].push(i)) && o, []);
}
const Tb = {
  generate(t, e, r) {
    const n = "#141414", o = "transparent", s = [], a = Ib(t, "Q"), c = e / a.length, l = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    l.forEach(({ x: v, y: _ }) => {
      const D = (a.length - Qt) * c * v, y = (a.length - Qt) * c * _, C = 0.45;
      for (let x = 0; x < l.length; x += 1) {
        const E = c * (Qt - x * 2);
        s.push(G`
            <rect
              fill=${x === 2 ? n : o}
              width=${x === 0 ? E - 5 : E}
              rx= ${x === 0 ? (E - 5) * C : E * C}
              ry= ${x === 0 ? (E - 5) * C : E * C}
              stroke=${n}
              stroke-width=${x === 0 ? 5 : 0}
              height=${x === 0 ? E - 5 : E}
              x= ${x === 0 ? y + c * x + 5 / 2 : y + c * x}
              y= ${x === 0 ? D + c * x + 5 / 2 : D + c * x}
            />
          `);
      }
    });
    const f = Math.floor((r + 25) / c), p = a.length / 2 - f / 2, g = a.length / 2 + f / 2 - 1, w = [];
    a.forEach((v, _) => {
      v.forEach((D, y) => {
        if (a[_][y] && !(_ < Qt && y < Qt || _ > a.length - (Qt + 1) && y < Qt || _ < Qt && y > a.length - (Qt + 1)) && !(_ > p && _ < g && y > p && y < g)) {
          const C = _ * c + c / 2, x = y * c + c / 2;
          w.push([C, x]);
        }
      });
    });
    const m = {};
    return w.forEach(([v, _]) => {
      var D;
      m[v] ? (D = m[v]) == null || D.push(_) : m[v] = [_];
    }), Object.entries(m).map(([v, _]) => {
      const D = _.filter((y) => _.every((C) => !Za(y, C, c)));
      return [Number(v), D];
    }).forEach(([v, _]) => {
      _.forEach((D) => {
        s.push(G`<circle cx=${v} cy=${D} fill=${n} r=${c / c0} />`);
      });
    }), Object.entries(m).filter(([v, _]) => _.length > 1).map(([v, _]) => {
      const D = _.filter((y) => _.some((C) => Za(y, C, c)));
      return [Number(v), D];
    }).map(([v, _]) => {
      _.sort((y, C) => y < C ? -1 : 1);
      const D = [];
      for (const y of _) {
        const C = D.find((x) => x.some((E) => Za(y, E, c)));
        C ? C.push(y) : D.push([y]);
      }
      return [v, D.map((y) => [y[0], y[y.length - 1]])];
    }).forEach(([v, _]) => {
      _.forEach(([D, y]) => {
        s.push(G`
              <line
                x1=${v}
                x2=${v}
                y1=${D}
                y2=${y}
                stroke=${n}
                stroke-width=${c / (c0 / 2)}
                stroke-linecap="round"
              />
            `);
      });
    }), s;
  }
}, Ob = re`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
var li = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Tr = class extends ne {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0;
  }
  render() {
    return this.dataset.theme = this.theme, this.style.cssText = `--local-size: ${this.size}px`, F`${this.templateVisual()} ${this.templateSvg()}`;
  }
  templateSvg() {
    const e = this.theme === "light" ? this.size : this.size - 32;
    return G`
      <svg height=${e} width=${e}>
        ${Tb.generate(this.uri, e, e / 4)}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>` : F`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
Tr.styles = [ce, Ob];
li([
  T()
], Tr.prototype, "uri", void 0);
li([
  T({ type: Number })
], Tr.prototype, "size", void 0);
li([
  T()
], Tr.prototype, "theme", void 0);
li([
  T()
], Tr.prototype, "imageSrc", void 0);
li([
  T()
], Tr.prototype, "alt", void 0);
Tr = li([
  q("wui-qr-code")
], Tr);
const Nb = re`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var kb = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let jc = class extends ne {
  constructor() {
    super(...arguments), this.inputComponentRef = _f();
  }
  render() {
    return F`
      <wui-input-text
        ${Ef(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
  }
  clearValue() {
    const e = this.inputComponentRef.value, r = e == null ? void 0 : e.inputElementRef.value;
    r && (r.value = "", r.focus(), r.dispatchEvent(new Event("input")));
  }
};
jc.styles = [ce, Nb];
jc = kb([
  q("wui-search-bar")
], jc);
const Rb = re`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;
var Ro = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let sn = class extends ne {
  constructor() {
    super(...arguments), this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.icon = "checkmark", this.message = "";
  }
  render() {
    return F`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `;
  }
};
sn.styles = [ce, Rb];
Ro([
  T()
], sn.prototype, "backgroundColor", void 0);
Ro([
  T()
], sn.prototype, "iconColor", void 0);
Ro([
  T()
], sn.prototype, "icon", void 0);
Ro([
  T()
], sn.prototype, "message", void 0);
sn = Ro([
  q("wui-snackbar")
], sn);
const Bb = re`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
var Ur = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let qt = class extends ne {
  constructor() {
    super(...arguments), this.tabs = [], this.onTabChange = () => null, this.buttons = [], this.disabled = !1, this.activeTab = 0, this.localTabWidth = "100px", this.isDense = !1;
  }
  render() {
    return this.isDense = this.tabs.length > 3, this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `, this.dataset.type = this.isDense ? "flex" : "block", this.tabs.map((e, r) => {
      const n = r === this.activeTab;
      return F`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
    });
  }
  firstUpdated() {
    this.shadowRoot && this.isDense && (this.buttons = [...this.shadowRoot.querySelectorAll("button")], setTimeout(() => {
      this.animateTabs(0, !0);
    }, 0));
  }
  onTabClick(e) {
    this.buttons && this.animateTabs(e, !1), this.activeTab = e, this.onTabChange(e);
  }
  animateTabs(e, r) {
    const n = this.buttons[this.activeTab], o = this.buttons[e], i = n == null ? void 0 : n.querySelector("wui-text"), s = o == null ? void 0 : o.querySelector("wui-text"), a = o == null ? void 0 : o.getBoundingClientRect(), c = s == null ? void 0 : s.getBoundingClientRect();
    n && i && !r && e !== this.activeTab && (i.animate([{ opacity: 0 }], {
      duration: 50,
      easing: "ease",
      fill: "forwards"
    }), n.animate([{ width: "34px" }], {
      duration: 500,
      easing: "ease",
      fill: "forwards"
    })), o && a && c && s && (e !== this.activeTab || r) && (this.localTabWidth = `${Math.round(a.width + c.width) + 6}px`, o.animate([{ width: `${a.width + c.width}px` }], {
      duration: r ? 0 : 500,
      fill: "forwards",
      easing: "ease"
    }), s.animate([{ opacity: 1 }], {
      duration: r ? 0 : 125,
      delay: r ? 0 : 200,
      fill: "forwards",
      easing: "ease"
    }));
  }
};
qt.styles = [ce, Ze, Bb];
Ur([
  T({ type: Array })
], qt.prototype, "tabs", void 0);
Ur([
  T()
], qt.prototype, "onTabChange", void 0);
Ur([
  T({ type: Array })
], qt.prototype, "buttons", void 0);
Ur([
  T({ type: Boolean })
], qt.prototype, "disabled", void 0);
Ur([
  Vl()
], qt.prototype, "activeTab", void 0);
Ur([
  Vl()
], qt.prototype, "localTabWidth", void 0);
Ur([
  Vl()
], qt.prototype, "isDense", void 0);
qt = Ur([
  q("wui-tabs")
], qt);
const Mb = re`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
var ou = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let fo = class extends ne {
  constructor() {
    super(...arguments), this.placement = "top", this.message = "";
  }
  render() {
    return F`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`;
  }
};
fo.styles = [ce, Ze, Mb];
ou([
  T()
], fo.prototype, "placement", void 0);
ou([
  T()
], fo.prototype, "message", void 0);
fo = ou([
  q("wui-tooltip")
], fo);
const Ub = re`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;
var pa = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Gn = class extends ne {
  render() {
    return this.style.cssText = `--local-border-radius: ${this.borderRadiusFull ? "1000px" : "20px"};`, F`${this.templateVisual()}`;
  }
  templateVisual() {
    return this.imageSrc ? F`<wui-image src=${this.imageSrc} alt=${this.alt ?? ""}></wui-image>` : F`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
Gn.styles = [ce, Ub];
pa([
  T()
], Gn.prototype, "imageSrc", void 0);
pa([
  T()
], Gn.prototype, "alt", void 0);
pa([
  T({ type: Boolean })
], Gn.prototype, "borderRadiusFull", void 0);
Gn = pa([
  q("wui-visual-thumbnail")
], Gn);
const Lb = re`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var Tt = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let gt = class extends ne {
  render() {
    return this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && Te.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && Te.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && Te.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && Te.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && Te.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && Te.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && Te.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && Te.getSpacingStyles(this.margin, 3)};
    `, F`<slot></slot>`;
  }
};
gt.styles = [ce, Lb];
Tt([
  T()
], gt.prototype, "gridTemplateRows", void 0);
Tt([
  T()
], gt.prototype, "gridTemplateColumns", void 0);
Tt([
  T()
], gt.prototype, "justifyItems", void 0);
Tt([
  T()
], gt.prototype, "alignItems", void 0);
Tt([
  T()
], gt.prototype, "justifyContent", void 0);
Tt([
  T()
], gt.prototype, "alignContent", void 0);
Tt([
  T()
], gt.prototype, "columnGap", void 0);
Tt([
  T()
], gt.prototype, "rowGap", void 0);
Tt([
  T()
], gt.prototype, "gap", void 0);
Tt([
  T()
], gt.prototype, "padding", void 0);
Tt([
  T()
], gt.prototype, "margin", void 0);
gt = Tt([
  q("wui-grid")
], gt);
const jb = re`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;
var Vf = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ds = class extends ne {
  constructor() {
    super(...arguments), this.text = "";
  }
  render() {
    return F`${this.template()}`;
  }
  template() {
    return this.text ? F`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>` : null;
  }
};
Ds.styles = [ce, jb];
Vf([
  T()
], Ds.prototype, "text", void 0);
Ds = Vf([
  q("wui-separator")
], Ds);
var Zf = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Bl, function() {
    var r = 1e3, n = 6e4, o = 36e5, i = "millisecond", s = "second", a = "minute", c = "hour", l = "day", f = "week", p = "month", g = "quarter", w = "year", m = "date", v = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
      var U = ["th", "st", "nd", "rd"], B = W % 100;
      return "[" + W + (U[(B - 20) % 10] || U[B] || U[0]) + "]";
    } }, C = function(W, U, B) {
      var M = String(W);
      return !M || M.length >= U ? W : "" + Array(U + 1 - M.length).join(B) + W;
    }, x = { s: C, z: function(W) {
      var U = -W.utcOffset(), B = Math.abs(U), M = Math.floor(B / 60), L = B % 60;
      return (U <= 0 ? "+" : "-") + C(M, 2, "0") + ":" + C(L, 2, "0");
    }, m: function W(U, B) {
      if (U.date() < B.date())
        return -W(B, U);
      var M = 12 * (B.year() - U.year()) + (B.month() - U.month()), L = U.clone().add(M, p), Z = B - L < 0, Y = U.clone().add(M + (Z ? -1 : 1), p);
      return +(-(M + (B - L) / (Z ? L - Y : Y - L)) || 0);
    }, a: function(W) {
      return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
    }, p: function(W) {
      return { M: p, y: w, w: f, d: l, D: m, h: c, m: a, s, ms: i, Q: g }[W] || String(W || "").toLowerCase().replace(/s$/, "");
    }, u: function(W) {
      return W === void 0;
    } }, E = "en", A = {};
    A[E] = y;
    var d = "$isDayjsObject", S = function(W) {
      return W instanceof V || !(!W || !W[d]);
    }, O = function W(U, B, M) {
      var L;
      if (!U)
        return E;
      if (typeof U == "string") {
        var Z = U.toLowerCase();
        A[Z] && (L = Z), B && (A[Z] = B, L = Z);
        var Y = U.split("-");
        if (!L && Y.length > 1)
          return W(Y[0]);
      } else {
        var K = U.name;
        A[K] = U, L = K;
      }
      return !M && L && (E = L), L || !M && E;
    }, N = function(W, U) {
      if (S(W))
        return W.clone();
      var B = typeof U == "object" ? U : {};
      return B.date = W, B.args = arguments, new V(B);
    }, k = x;
    k.l = O, k.i = S, k.w = function(W, U) {
      return N(W, { locale: U.$L, utc: U.$u, x: U.$x, $offset: U.$offset });
    };
    var V = function() {
      function W(B) {
        this.$L = O(B.locale, null, !0), this.parse(B), this.$x = this.$x || B.x || {}, this[d] = !0;
      }
      var U = W.prototype;
      return U.parse = function(B) {
        this.$d = function(M) {
          var L = M.date, Z = M.utc;
          if (L === null)
            return /* @__PURE__ */ new Date(NaN);
          if (k.u(L))
            return /* @__PURE__ */ new Date();
          if (L instanceof Date)
            return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var Y = L.match(_);
            if (Y) {
              var K = Y[2] - 1 || 0, X = (Y[7] || "0").substring(0, 3);
              return Z ? new Date(Date.UTC(Y[1], K, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, X)) : new Date(Y[1], K, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, X);
            }
          }
          return new Date(L);
        }(B), this.init();
      }, U.init = function() {
        var B = this.$d;
        this.$y = B.getFullYear(), this.$M = B.getMonth(), this.$D = B.getDate(), this.$W = B.getDay(), this.$H = B.getHours(), this.$m = B.getMinutes(), this.$s = B.getSeconds(), this.$ms = B.getMilliseconds();
      }, U.$utils = function() {
        return k;
      }, U.isValid = function() {
        return this.$d.toString() !== v;
      }, U.isSame = function(B, M) {
        var L = N(B);
        return this.startOf(M) <= L && L <= this.endOf(M);
      }, U.isAfter = function(B, M) {
        return N(B) < this.startOf(M);
      }, U.isBefore = function(B, M) {
        return this.endOf(M) < N(B);
      }, U.$g = function(B, M, L) {
        return k.u(B) ? this[M] : this.set(L, B);
      }, U.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, U.valueOf = function() {
        return this.$d.getTime();
      }, U.startOf = function(B, M) {
        var L = this, Z = !!k.u(M) || M, Y = k.p(B), K = function(ge, ae) {
          var be = k.w(L.$u ? Date.UTC(L.$y, ae, ge) : new Date(L.$y, ae, ge), L);
          return Z ? be : be.endOf(l);
        }, X = function(ge, ae) {
          return k.w(L.toDate()[ge].apply(L.toDate("s"), (Z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)), L);
        }, z = this.$W, Q = this.$M, ie = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (Y) {
          case w:
            return Z ? K(1, 0) : K(31, 11);
          case p:
            return Z ? K(1, Q) : K(0, Q + 1);
          case f:
            var fe = this.$locale().weekStart || 0, le = (z < fe ? z + 7 : z) - fe;
            return K(Z ? ie - le : ie + (6 - le), Q);
          case l:
          case m:
            return X(de + "Hours", 0);
          case c:
            return X(de + "Minutes", 1);
          case a:
            return X(de + "Seconds", 2);
          case s:
            return X(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, U.endOf = function(B) {
        return this.startOf(B, !1);
      }, U.$set = function(B, M) {
        var L, Z = k.p(B), Y = "set" + (this.$u ? "UTC" : ""), K = (L = {}, L[l] = Y + "Date", L[m] = Y + "Date", L[p] = Y + "Month", L[w] = Y + "FullYear", L[c] = Y + "Hours", L[a] = Y + "Minutes", L[s] = Y + "Seconds", L[i] = Y + "Milliseconds", L)[Z], X = Z === l ? this.$D + (M - this.$W) : M;
        if (Z === p || Z === w) {
          var z = this.clone().set(m, 1);
          z.$d[K](X), z.init(), this.$d = z.set(m, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          K && this.$d[K](X);
        return this.init(), this;
      }, U.set = function(B, M) {
        return this.clone().$set(B, M);
      }, U.get = function(B) {
        return this[k.p(B)]();
      }, U.add = function(B, M) {
        var L, Z = this;
        B = Number(B);
        var Y = k.p(M), K = function(Q) {
          var ie = N(Z);
          return k.w(ie.date(ie.date() + Math.round(Q * B)), Z);
        };
        if (Y === p)
          return this.set(p, this.$M + B);
        if (Y === w)
          return this.set(w, this.$y + B);
        if (Y === l)
          return K(1);
        if (Y === f)
          return K(7);
        var X = (L = {}, L[a] = n, L[c] = o, L[s] = r, L)[Y] || 1, z = this.$d.getTime() + B * X;
        return k.w(z, this);
      }, U.subtract = function(B, M) {
        return this.add(-1 * B, M);
      }, U.format = function(B) {
        var M = this, L = this.$locale();
        if (!this.isValid())
          return L.invalidDate || v;
        var Z = B || "YYYY-MM-DDTHH:mm:ssZ", Y = k.z(this), K = this.$H, X = this.$m, z = this.$M, Q = L.weekdays, ie = L.months, de = L.meridiem, fe = function(ae, be, xe, ye) {
          return ae && (ae[be] || ae(M, Z)) || xe[be].slice(0, ye);
        }, le = function(ae) {
          return k.s(K % 12 || 12, ae, "0");
        }, ge = de || function(ae, be, xe) {
          var ye = ae < 12 ? "AM" : "PM";
          return xe ? ye.toLowerCase() : ye;
        };
        return Z.replace(D, function(ae, be) {
          return be || function(xe) {
            switch (xe) {
              case "YY":
                return String(M.$y).slice(-2);
              case "YYYY":
                return k.s(M.$y, 4, "0");
              case "M":
                return z + 1;
              case "MM":
                return k.s(z + 1, 2, "0");
              case "MMM":
                return fe(L.monthsShort, z, ie, 3);
              case "MMMM":
                return fe(ie, z);
              case "D":
                return M.$D;
              case "DD":
                return k.s(M.$D, 2, "0");
              case "d":
                return String(M.$W);
              case "dd":
                return fe(L.weekdaysMin, M.$W, Q, 2);
              case "ddd":
                return fe(L.weekdaysShort, M.$W, Q, 3);
              case "dddd":
                return Q[M.$W];
              case "H":
                return String(K);
              case "HH":
                return k.s(K, 2, "0");
              case "h":
                return le(1);
              case "hh":
                return le(2);
              case "a":
                return ge(K, X, !0);
              case "A":
                return ge(K, X, !1);
              case "m":
                return String(X);
              case "mm":
                return k.s(X, 2, "0");
              case "s":
                return String(M.$s);
              case "ss":
                return k.s(M.$s, 2, "0");
              case "SSS":
                return k.s(M.$ms, 3, "0");
              case "Z":
                return Y;
            }
            return null;
          }(ae) || Y.replace(":", "");
        });
      }, U.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, U.diff = function(B, M, L) {
        var Z, Y = this, K = k.p(M), X = N(B), z = (X.utcOffset() - this.utcOffset()) * n, Q = this - X, ie = function() {
          return k.m(Y, X);
        };
        switch (K) {
          case w:
            Z = ie() / 12;
            break;
          case p:
            Z = ie();
            break;
          case g:
            Z = ie() / 3;
            break;
          case f:
            Z = (Q - z) / 6048e5;
            break;
          case l:
            Z = (Q - z) / 864e5;
            break;
          case c:
            Z = Q / o;
            break;
          case a:
            Z = Q / n;
            break;
          case s:
            Z = Q / r;
            break;
          default:
            Z = Q;
        }
        return L ? Z : k.a(Z);
      }, U.daysInMonth = function() {
        return this.endOf(p).$D;
      }, U.$locale = function() {
        return A[this.$L];
      }, U.locale = function(B, M) {
        if (!B)
          return this.$L;
        var L = this.clone(), Z = O(B, M, !0);
        return Z && (L.$L = Z), L;
      }, U.clone = function() {
        return k.w(this.$d, this);
      }, U.toDate = function() {
        return new Date(this.valueOf());
      }, U.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, U.toISOString = function() {
        return this.$d.toISOString();
      }, U.toString = function() {
        return this.$d.toUTCString();
      }, W;
    }(), J = V.prototype;
    return N.prototype = J, [["$ms", i], ["$s", s], ["$m", a], ["$H", c], ["$W", l], ["$M", p], ["$y", w], ["$D", m]].forEach(function(W) {
      J[W[1]] = function(U) {
        return this.$g(U, W[0], W[1]);
      };
    }), N.extend = function(W, U) {
      return W.$i || (W(U, V, N), W.$i = !0), N;
    }, N.locale = O, N.isDayjs = S, N.unix = function(W) {
      return N(1e3 * W);
    }, N.en = A[E], N.Ls = A, N.p = {}, N;
  });
})(Zf);
var Fb = Zf.exports;
const ho = /* @__PURE__ */ na(Fb);
var Kf = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Bl, function() {
    return function(r, n, o) {
      o.updateLocale = function(i, s) {
        var a = o.Ls[i];
        if (a)
          return (s ? Object.keys(s) : []).forEach(function(c) {
            a[c] = s[c];
          }), a;
      };
    };
  });
})(Kf);
var Wb = Kf.exports;
const zb = /* @__PURE__ */ na(Wb);
var Yf = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Bl, function() {
    return function(r, n, o) {
      r = r || {};
      var i = n.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(l, f, p, g) {
        return i.fromToBase(l, f, p, g);
      }
      o.en.relativeTime = s, i.fromToBase = function(l, f, p, g, w) {
        for (var m, v, _, D = p.$locale().relativeTime || s, y = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], C = y.length, x = 0; x < C; x += 1) {
          var E = y[x];
          E.d && (m = g ? o(l).diff(p, E.d, !0) : p.diff(l, E.d, !0));
          var A = (r.rounding || Math.round)(Math.abs(m));
          if (_ = m > 0, A <= E.r || !E.r) {
            A <= 1 && x > 0 && (E = y[x - 1]);
            var d = D[E.l];
            w && (A = w("" + A)), v = typeof d == "string" ? d.replace("%d", A) : d(A, f, E.l, _);
            break;
          }
        }
        if (f)
          return v;
        var S = _ ? D.future : D.past;
        return typeof S == "function" ? S(v) : S.replace("%s", v);
      }, i.to = function(l, f) {
        return a(l, f, this, !0);
      }, i.from = function(l, f) {
        return a(l, f, this);
      };
      var c = function(l) {
        return l.$u ? o.utc() : o();
      };
      i.toNow = function(l) {
        return this.to(c(this), l);
      }, i.fromNow = function(l) {
        return this.from(c(this), l);
      };
    };
  });
})(Yf);
var Hb = Yf.exports;
const qb = /* @__PURE__ */ na(Hb);
ho.extend(qb);
ho.extend(zb);
ho.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%s sec",
    m: "1 min",
    mm: "%d min",
    h: "1 hr",
    hh: "%d hrs",
    d: "1 d",
    dd: "%d d",
    M: "1 mo",
    MM: "%d mo",
    y: "1 yr",
    yy: "%d yr"
  }
});
const Jf = {
  getYear(t = (/* @__PURE__ */ new Date()).toISOString()) {
    return ho(t).year();
  },
  getRelativeDateFromNow(t) {
    return ho(t).fromNow(!0);
  }
}, Gb = 3, Vb = ["receive", "deposit", "borrow", "claim"], Zb = ["withdraw", "repay", "burn"], Dn = {
  getTransactionGroupTitle(t) {
    const e = Jf.getYear();
    return t === e ? "This Year" : t;
  },
  getTransactionImages(t) {
    const [e, r] = t, n = !!e && (t == null ? void 0 : t.every((s) => !!s.nft_info)), o = (t == null ? void 0 : t.length) > 1;
    return (t == null ? void 0 : t.length) === 2 && !n ? [this.getTransactionImage(e), this.getTransactionImage(r)] : o ? t.map((s) => this.getTransactionImage(s)) : [this.getTransactionImage(e)];
  },
  getTransactionImage(t) {
    return {
      type: Dn.getTransactionTransferTokenType(t),
      url: Dn.getTransactionImageURL(t)
    };
  },
  getTransactionImageURL(t) {
    var o, i, s, a, c;
    let e = null;
    const r = !!(t != null && t.nft_info), n = !!(t != null && t.fungible_info);
    return t && r ? e = (s = (i = (o = t == null ? void 0 : t.nft_info) == null ? void 0 : o.content) == null ? void 0 : i.preview) == null ? void 0 : s.url : t && n && (e = (c = (a = t == null ? void 0 : t.fungible_info) == null ? void 0 : a.icon) == null ? void 0 : c.url), e;
  },
  getTransactionTransferTokenType(t) {
    return t != null && t.fungible_info ? "FUNGIBLE" : t != null && t.nft_info ? "NFT" : null;
  },
  getTransactionDescriptions(t) {
    var p, g, w;
    const e = (p = t.metadata) == null ? void 0 : p.operationType, r = t.transfers, n = ((g = t.transfers) == null ? void 0 : g.length) > 0, o = ((w = t.transfers) == null ? void 0 : w.length) > 1, i = n && (r == null ? void 0 : r.every((m) => !!m.fungible_info)), [s, a] = r;
    let c = this.getTransferDescription(s), l = this.getTransferDescription(a);
    if (!n)
      return (e === "send" || e === "receive") && i ? (c = Te.getTruncateString({
        string: t.metadata.sentFrom,
        charsStart: 4,
        charsEnd: 6,
        truncate: "middle"
      }), l = Te.getTruncateString({
        string: t.metadata.sentTo,
        charsStart: 4,
        charsEnd: 6,
        truncate: "middle"
      }), [c, l]) : [t.metadata.status];
    if (o)
      return r.map((m) => this.getTransferDescription(m));
    let f = "";
    return Vb.includes(e) ? f = "+" : Zb.includes(e) && (f = "-"), c = f.concat(c), [c];
  },
  getTransferDescription(t) {
    var r;
    let e = "";
    return t && (t != null && t.nft_info ? e = ((r = t == null ? void 0 : t.nft_info) == null ? void 0 : r.name) || "-" : t != null && t.fungible_info && (e = this.getFungibleTransferDescription(t) || "-")), e;
  },
  getFungibleTransferDescription(t) {
    var n;
    return t ? [this.getQuantityFixedValue(t == null ? void 0 : t.quantity.numeric), (n = t == null ? void 0 : t.fungible_info) == null ? void 0 : n.symbol].join(" ").trim() : null;
  },
  getQuantityFixedValue(t) {
    return t ? parseFloat(t).toFixed(Gb) : null;
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ts = globalThis, su = ts.ShadowRoot && (ts.ShadyCSS === void 0 || ts.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, au = Symbol(), l0 = /* @__PURE__ */ new WeakMap();
let Xf = class {
  constructor(e, r, n) {
    if (this._$cssResult$ = !0, n !== au)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (su && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = l0.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && l0.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Kb = (t) => new Xf(typeof t == "string" ? t : t + "", void 0, au), dt = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((n, o, i) => n + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[i + 1], t[0]);
  return new Xf(r, t, au);
}, Yb = (t, e) => {
  if (su)
    t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else
    for (const r of e) {
      const n = document.createElement("style"), o = ts.litNonce;
      o !== void 0 && n.setAttribute("nonce", o), n.textContent = r.cssText, t.appendChild(n);
    }
}, u0 = su ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules)
    r += n.cssText;
  return Kb(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Jb, defineProperty: Xb, getOwnPropertyDescriptor: Qb, getOwnPropertyNames: e5, getOwnPropertySymbols: t5, getPrototypeOf: r5 } = Object, Er = globalThis, d0 = Er.trustedTypes, n5 = d0 ? d0.emptyScript : "", Ka = Er.reactiveElementPolyfillSupport, Ni = (t, e) => t, Ps = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? n5 : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, cu = (t, e) => !Jb(t, e), f0 = { attribute: !0, type: String, converter: Ps, reflect: !1, hasChanged: cu };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Er.litPropertyMetadata ?? (Er.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class En extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = f0) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(e, r), !r.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, r);
      o !== void 0 && Xb(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: o, set: i } = Qb(this.prototype, e) ?? { get() {
      return this[r];
    }, set(s) {
      this[r] = s;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(s) {
      const a = o == null ? void 0 : o.call(this);
      i.call(this, s), this.requestUpdate(e, a, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? f0;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ni("elementProperties")))
      return;
    const e = r5(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ni("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ni("properties"))) {
      const r = this.properties, n = [...e5(r), ...t5(r)];
      for (const o of n)
        this.createProperty(o, r[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0)
        for (const [n, o] of r)
          this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const o = this._$Eu(r, n);
      o !== void 0 && this._$Eh.set(o, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n)
        r.unshift(u0(o));
    } else
      e !== void 0 && r.push(u0(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$Eg = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$E_ ?? (this._$E_ = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$E_) == null || r.delete(e);
  }
  _$ES() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys())
      this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Yb(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$E_) == null || e.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$E_) == null || e.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$EO(e, r) {
    var i;
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const s = (((i = n.converter) == null ? void 0 : i.toAttribute) !== void 0 ? n.converter : Ps).toAttribute(r, n.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var i;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const s = n.getPropertyOptions(o), a = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((i = s.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? s.converter : Ps;
      this._$Em = o, this[o] = a.fromAttribute(r, s.type), this._$Em = null;
    }
  }
  requestUpdate(e, r, n, o = !1, i) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? cu)(o ? i : this[e], r))
        return;
      this.C(e, r, n);
    }
    this.isUpdatePending === !1 && (this._$Eg = this._$EP());
  }
  C(e, r, n) {
    this._$AL.has(e) || this._$AL.set(e, r), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$Eg;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, s] of this._$Ep)
          this[i] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0)
        for (const [i, s] of o)
          s.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.C(i, this[i], s);
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (n = this._$E_) == null || n.forEach((o) => {
        var i;
        return (i = o.hostUpdate) == null ? void 0 : i.call(o);
      }), this.update(r)) : this._$ET();
    } catch (o) {
      throw e = !1, this._$ET(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$E_) == null || r.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EO(r, this[r]))), this._$ET();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
En.elementStyles = [], En.shadowRootOptions = { mode: "open" }, En[Ni("elementProperties")] = /* @__PURE__ */ new Map(), En[Ni("finalized")] = /* @__PURE__ */ new Map(), Ka == null || Ka({ ReactiveElement: En }), (Er.reactiveElementVersions ?? (Er.reactiveElementVersions = [])).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ki = globalThis, Is = ki.trustedTypes, h0 = Is ? Is.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Qf = "$lit$", mr = `lit$${(Math.random() + "").slice(9)}$`, eh = "?" + mr, i5 = `<${eh}>`, an = document, po = () => an.createComment(""), go = (t) => t === null || typeof t != "object" && typeof t != "function", th = Array.isArray, o5 = (t) => th(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Ya = `[ 	
\f\r]`, bi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, p0 = /-->/g, g0 = />/g, zr = RegExp(`>|${Ya}(?:([^\\s"'>=/]+)(${Ya}*=${Ya}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), w0 = /'/g, m0 = /"/g, rh = /^(?:script|style|textarea|title)$/i, s5 = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), j = s5(1), Vn = Symbol.for("lit-noChange"), Ge = Symbol.for("lit-nothing"), b0 = /* @__PURE__ */ new WeakMap(), Kr = an.createTreeWalker(an, 129);
function nh(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return h0 !== void 0 ? h0.createHTML(e) : e;
}
const a5 = (t, e) => {
  const r = t.length - 1, n = [];
  let o, i = e === 2 ? "<svg>" : "", s = bi;
  for (let a = 0; a < r; a++) {
    const c = t[a];
    let l, f, p = -1, g = 0;
    for (; g < c.length && (s.lastIndex = g, f = s.exec(c), f !== null); )
      g = s.lastIndex, s === bi ? f[1] === "!--" ? s = p0 : f[1] !== void 0 ? s = g0 : f[2] !== void 0 ? (rh.test(f[2]) && (o = RegExp("</" + f[2], "g")), s = zr) : f[3] !== void 0 && (s = zr) : s === zr ? f[0] === ">" ? (s = o ?? bi, p = -1) : f[1] === void 0 ? p = -2 : (p = s.lastIndex - f[2].length, l = f[1], s = f[3] === void 0 ? zr : f[3] === '"' ? m0 : w0) : s === m0 || s === w0 ? s = zr : s === p0 || s === g0 ? s = bi : (s = zr, o = void 0);
    const w = s === zr && t[a + 1].startsWith("/>") ? " " : "";
    i += s === bi ? c + i5 : p >= 0 ? (n.push(l), c.slice(0, p) + Qf + c.slice(p) + mr + w) : c + mr + (p === -2 ? a : w);
  }
  return [nh(t, i + (t[r] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class wo {
  constructor({ strings: e, _$litType$: r }, n) {
    let o;
    this.parts = [];
    let i = 0, s = 0;
    const a = e.length - 1, c = this.parts, [l, f] = a5(e, r);
    if (this.el = wo.createElement(l, n), Kr.currentNode = this.el.content, r === 2) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (o = Kr.nextNode()) !== null && c.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes())
          for (const p of o.getAttributeNames())
            if (p.endsWith(Qf)) {
              const g = f[s++], w = o.getAttribute(p).split(mr), m = /([.?@])?(.*)/.exec(g);
              c.push({ type: 1, index: i, name: m[2], strings: w, ctor: m[1] === "." ? l5 : m[1] === "?" ? u5 : m[1] === "@" ? d5 : ga }), o.removeAttribute(p);
            } else
              p.startsWith(mr) && (c.push({ type: 6, index: i }), o.removeAttribute(p));
        if (rh.test(o.tagName)) {
          const p = o.textContent.split(mr), g = p.length - 1;
          if (g > 0) {
            o.textContent = Is ? Is.emptyScript : "";
            for (let w = 0; w < g; w++)
              o.append(p[w], po()), Kr.nextNode(), c.push({ type: 2, index: ++i });
            o.append(p[g], po());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === eh)
          c.push({ type: 2, index: i });
        else {
          let p = -1;
          for (; (p = o.data.indexOf(mr, p + 1)) !== -1; )
            c.push({ type: 7, index: i }), p += mr.length - 1;
        }
      i++;
    }
  }
  static createElement(e, r) {
    const n = an.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Zn(t, e, r = t, n) {
  var s, a;
  if (e === Vn)
    return e;
  let o = n !== void 0 ? (s = r._$Co) == null ? void 0 : s[n] : r._$Cl;
  const i = go(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== i && ((a = o == null ? void 0 : o._$AO) == null || a.call(o, !1), i === void 0 ? o = void 0 : (o = new i(t), o._$AT(t, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = o : r._$Cl = o), o !== void 0 && (e = Zn(t, o._$AS(t, e.values), o, n)), e;
}
let c5 = class {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? an).importNode(r, !0);
    Kr.currentNode = o;
    let i = Kr.nextNode(), s = 0, a = 0, c = n[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let l;
        c.type === 2 ? l = new Bo(i, i.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(i, c.name, c.strings, this, e) : c.type === 6 && (l = new f5(i, this, e)), this._$AV.push(l), c = n[++a];
      }
      s !== (c == null ? void 0 : c.index) && (i = Kr.nextNode(), s++);
    }
    return Kr.currentNode = an, o;
  }
  p(e) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, r), r += n.strings.length - 2) : n._$AI(e[r])), r++;
  }
};
class Bo {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, r, n, o) {
    this.type = 2, this._$AH = Ge, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = Zn(this, e, r), go(e) ? e === Ge || e == null || e === "" ? (this._$AH !== Ge && this._$AR(), this._$AH = Ge) : e !== this._$AH && e !== Vn && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : o5(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== Ge && go(this._$AH) ? this._$AA.nextSibling.data = e : this.$(an.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var i;
    const { values: r, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = wo.createElement(nh(n.h, n.h[0]), this.options)), n);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === o)
      this._$AH.p(r);
    else {
      const s = new c5(o, this), a = s.u(this.options);
      s.p(r), this.$(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let r = b0.get(e.strings);
    return r === void 0 && b0.set(e.strings, r = new wo(e)), r;
  }
  T(e) {
    th(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, o = 0;
    for (const i of e)
      o === r.length ? r.push(n = new Bo(this.k(po()), this.k(po()), this, this.options)) : n = r[o], n._$AI(i), o++;
    o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cv = e, (r = this._$AP) == null || r.call(this, e));
  }
}
class ga {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, n, o, i) {
    this.type = 1, this._$AH = Ge, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Ge;
  }
  _$AI(e, r = this, n, o) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      e = Zn(this, e, r, 0), s = !go(e) || e !== this._$AH && e !== Vn, s && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = i[0], c = 0; c < i.length - 1; c++)
        l = Zn(this, a[n + c], r, c), l === Vn && (l = this._$AH[c]), s || (s = !go(l) || l !== this._$AH[c]), l === Ge ? e = Ge : e !== Ge && (e += (l ?? "") + i[c + 1]), this._$AH[c] = l;
    }
    s && !o && this.O(e);
  }
  O(e) {
    e === Ge ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class l5 extends ga {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(e) {
    this.element[this.name] = e === Ge ? void 0 : e;
  }
}
class u5 extends ga {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Ge);
  }
}
class d5 extends ga {
  constructor(e, r, n, o, i) {
    super(e, r, n, o, i), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = Zn(this, e, r, 0) ?? Ge) === Vn)
      return;
    const n = this._$AH, o = e === Ge && n !== Ge || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== Ge && (n === Ge || o);
    o && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class f5 {
  constructor(e, r, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Zn(this, e);
  }
}
const Ja = ki.litHtmlPolyfillSupport;
Ja == null || Ja(wo, Bo), (ki.litHtmlVersions ?? (ki.litHtmlVersions = [])).push("3.1.0");
const h5 = (t, e, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const i = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = o = new Bo(e.insertBefore(po(), i), i, void 0, r ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ce extends En {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const e = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = h5(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Vn;
  }
}
var X0;
Ce._$litElement$ = !0, Ce.finalized = !0, (X0 = globalThis.litElementHydrateSupport) == null || X0.call(globalThis, { LitElement: Ce });
const Xa = globalThis.litElementPolyfillSupport;
Xa == null || Xa({ LitElement: Ce });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p5 = { attribute: !0, type: String, converter: Ps, reflect: !1, hasChanged: cu }, g5 = (t = p5, e, r) => {
  const { kind: n, metadata: o } = r;
  let i = globalThis.litPropertyMetadata.get(o);
  if (i === void 0 && globalThis.litPropertyMetadata.set(o, i = /* @__PURE__ */ new Map()), i.set(r.name, t), n === "accessor") {
    const { name: s } = r;
    return { set(a) {
      const c = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(s, c, t);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, t), a;
    } };
  }
  if (n === "setter") {
    const { name: s } = r;
    return function(a) {
      const c = this[s];
      e.call(this, a), this.requestUpdate(s, c, t);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Ke(t) {
  return (e, r) => typeof r == "object" ? g5(t, e, r) : ((n, o, i) => {
    const s = o.hasOwnProperty(i);
    return o.constructor.createProperty(i, s ? { ...n, wrapped: !0 } : n), s ? Object.getOwnPropertyDescriptor(o, i) : void 0;
  })(t, e, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function se(t) {
  return Ke({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e = (t) => t ?? Ge;
var ur = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Gt = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.networkImages = vr.state.networkImages, this.disabled = !1, this.balance = "show", this.address = Ae.state.address, this.balanceVal = Ae.state.balance, this.balanceSymbol = Ae.state.balanceSymbol, this.profileName = Ae.state.profileName, this.profileImage = Ae.state.profileImage, this.network = Re.state.caipNetwork, this.unsubscribe.push(Ae.subscribe((e) => {
      e.isConnected ? (this.address = e.address, this.balanceVal = e.balance, this.profileName = e.profileName, this.profileImage = e.profileImage, this.balanceSymbol = e.balanceSymbol) : (this.address = "", this.balanceVal = "", this.profileName = "", this.profileImage = "", this.balanceSymbol = "");
    }), Re.subscribeKey("caipNetwork", (e) => this.network = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var n;
    const e = this.networkImages[((n = this.network) == null ? void 0 : n.imageId) ?? ""], r = this.balance === "show";
    return j`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${_e(this.profileName ?? this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${_e(e)}
        avatarSrc=${_e(this.profileImage)}
        balance=${r ? te.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    et.open();
  }
};
ur([
  Ke({ type: Boolean })
], Gt.prototype, "disabled", void 0);
ur([
  Ke()
], Gt.prototype, "balance", void 0);
ur([
  se()
], Gt.prototype, "address", void 0);
ur([
  se()
], Gt.prototype, "balanceVal", void 0);
ur([
  se()
], Gt.prototype, "balanceSymbol", void 0);
ur([
  se()
], Gt.prototype, "profileName", void 0);
ur([
  se()
], Gt.prototype, "profileImage", void 0);
ur([
  se()
], Gt.prototype, "network", void 0);
Gt = ur([
  q("w3m-account-button")
], Gt);
var hn = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Or = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.disabled = !1, this.balance = void 0, this.size = void 0, this.label = void 0, this.loadingLabel = void 0, this.isAccount = Ae.state.isConnected, this.unsubscribe.push(Ae.subscribeKey("isConnected", (e) => {
      this.isAccount = e;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return this.isAccount ? j`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${_e(this.balance)}
          >
          </w3m-account-button>
        ` : j`
          <w3m-connect-button
            size=${_e(this.size)}
            label=${_e(this.label)}
            loadingLabel=${_e(this.loadingLabel)}
          ></w3m-connect-button>
        `;
  }
};
hn([
  Ke({ type: Boolean })
], Or.prototype, "disabled", void 0);
hn([
  Ke()
], Or.prototype, "balance", void 0);
hn([
  Ke()
], Or.prototype, "size", void 0);
hn([
  Ke()
], Or.prototype, "label", void 0);
hn([
  Ke()
], Or.prototype, "loadingLabel", void 0);
hn([
  se()
], Or.prototype, "isAccount", void 0);
Or = hn([
  q("w3m-button")
], Or);
var Mo = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Kn = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.size = "md", this.label = "Connect Wallet", this.loadingLabel = "Connecting...", this.open = et.state.open, this.unsubscribe.push(et.subscribeKey("open", (e) => this.open = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return j`
      <wui-connect-button
        size=${_e(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    this.open ? et.close() : et.open();
  }
};
Mo([
  Ke()
], Kn.prototype, "size", void 0);
Mo([
  Ke()
], Kn.prototype, "label", void 0);
Mo([
  Ke()
], Kn.prototype, "loadingLabel", void 0);
Mo([
  se()
], Kn.prototype, "open", void 0);
Kn = Mo([
  q("w3m-connect-button")
], Kn);
const w5 = dt`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;
var ih = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const y0 = "scroll-lock";
let mo = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.abortController = void 0, this.open = et.state.open, this.initializeTheming(), ve.prefetch(), this.unsubscribe.push(et.subscribeKey("open", (e) => e ? this.onOpen() : this.onClose())), Se.sendEvent({ type: "track", event: "MODAL_LOADED" });
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
  }
  render() {
    return this.open ? j`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        ` : null;
  }
  onOverlayClick(e) {
    e.target === e.currentTarget && et.close();
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: r } = _t.state, n = Te.getColorTheme(r);
    A2(e, n);
  }
  async onClose() {
    this.onScrollUnlock(), await this.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      easing: "ease",
      fill: "forwards"
    }).finished, St.hide(), this.open = !1, this.onRemoveKeyboardListener();
  }
  async onOpen() {
    this.onScrollLock(), this.open = !0, await this.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      easing: "ease",
      fill: "forwards",
      delay: 300
    }).finished, this.onAddKeyboardListener();
  }
  onScrollLock() {
    const e = document.createElement("style");
    e.dataset.w3m = y0, e.textContent = `
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `, document.head.appendChild(e);
  }
  onScrollUnlock() {
    const e = document.head.querySelector(`style[data-w3m="${y0}"]`);
    e && e.remove();
  }
  onAddKeyboardListener() {
    var r;
    this.abortController = new AbortController();
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector("wui-card");
    e == null || e.focus(), window.addEventListener("keydown", (n) => {
      if (n.key === "Escape")
        et.close();
      else if (n.key === "Tab") {
        const { tagName: o } = n.target;
        o && !o.includes("W3M-") && !o.includes("WUI-") && (e == null || e.focus());
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = void 0;
  }
};
mo.styles = w5;
ih([
  se()
], mo.prototype, "open", void 0);
mo = ih([
  q("w3m-modal")
], mo);
const m5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get W3mModal() {
    return mo;
  }
}, Symbol.toStringTag, { value: "Module" }));
var wa = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let bo = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.disabled = !1, this.network = Re.state.caipNetwork, this.connected = Ae.state.isConnected, this.unsubscribe.push(Re.subscribeKey("caipNetwork", (e) => this.network = e), Ae.subscribeKey("isConnected", (e) => this.connected = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    var e;
    return j`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${_e(ze.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e = this.network) == null ? void 0 : e.name) ?? (this.connected ? "Unknown Network" : "Select Network")}
      </wui-network-button>
    `;
  }
  onClick() {
    et.open({ view: "Networks" });
  }
};
wa([
  Ke({ type: Boolean })
], bo.prototype, "disabled", void 0);
wa([
  se()
], bo.prototype, "network", void 0);
wa([
  se()
], bo.prototype, "connected", void 0);
bo = wa([
  q("w3m-network-button")
], bo);
const b5 = dt`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;
var oh = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ts = class extends Ce {
  constructor() {
    super(), this.resizeObserver = void 0, this.prevHeight = "0px", this.prevHistoryLength = 1, this.unsubscribe = [], this.view = he.state.view, this.unsubscribe.push(he.subscribeKey("view", (e) => this.onViewChange(e)));
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([e]) => {
      const r = `${e == null ? void 0 : e.contentRect.height}px`;
      this.prevHeight !== "0px" && (await this.animate([{ height: this.prevHeight }, { height: r }], {
        duration: 150,
        easing: "ease",
        fill: "forwards"
      }).finished, this.style.height = "auto"), this.prevHeight = r;
    }), this.resizeObserver.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var e;
    (e = this.resizeObserver) == null || e.unobserve(this.getWrapper()), this.unsubscribe.forEach((r) => r());
  }
  render() {
    return j`<div>${this.viewTemplate()}</div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "Connect":
        return j`<w3m-connect-view></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return j`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingExternal":
        return j`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return j`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "AllWallets":
        return j`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "Networks":
        return j`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return j`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Account":
        return j`<w3m-account-view></w3m-account-view>`;
      case "WhatIsAWallet":
        return j`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "WhatIsANetwork":
        return j`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "GetWallet":
        return j`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Downloads":
        return j`<w3m-downloads-view></w3m-downloads-view>`;
      case "Transactions":
        return j`<w3m-transactions-view></w3m-transactions-view>`;
      default:
        return j`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  async onViewChange(e) {
    const { history: r } = he.state;
    let n = -10, o = 10;
    r.length < this.prevHistoryLength && (n = 10, o = -10), this.prevHistoryLength = r.length, await this.animate([
      { opacity: 1, transform: "translateX(0px)" },
      { opacity: 0, transform: `translateX(${n}px)` }
    ], { duration: 150, easing: "ease", fill: "forwards" }).finished, this.view = e, await this.animate([
      { opacity: 0, transform: `translateX(${o}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ], { duration: 150, easing: "ease", fill: "forwards", delay: 50 }).finished;
  }
  getWrapper() {
    var e;
    return (e = this.shadowRoot) == null ? void 0 : e.querySelector("div");
  }
};
Ts.styles = b5;
oh([
  se()
], Ts.prototype, "view", void 0);
Ts = oh([
  q("w3m-router")
], Ts);
const y5 = dt`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;
var Lr = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Vt = class extends Ce {
  constructor() {
    super(), this.usubscribe = [], this.networkImages = vr.state.networkImages, this.address = Ae.state.address, this.profileImage = Ae.state.profileImage, this.profileName = Ae.state.profileName, this.balance = Ae.state.balance, this.balanceSymbol = Ae.state.balanceSymbol, this.network = Re.state.caipNetwork, this.disconecting = !1, this.usubscribe.push(Ae.subscribe((e) => {
      e.address ? (this.address = e.address, this.profileImage = e.profileImage, this.profileName = e.profileName, this.balance = e.balance, this.balanceSymbol = e.balanceSymbol) : et.close();
    }), Re.subscribeKey("caipNetwork", (e) => {
      e != null && e.id && (this.network = e);
    }));
  }
  disconnectedCallback() {
    this.usubscribe.forEach((e) => e());
  }
  render() {
    var r, n;
    if (!this.address)
      throw new Error("w3m-account-view: No account provided");
    const e = this.networkImages[((r = this.network) == null ? void 0 : r.imageId) ?? ""];
    return j`
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "m", "s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${_e(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName ? Te.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : Te.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${te.formatBalance(this.balance, this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        <wui-list-item
          .variant=${e ? "image" : "icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${_e(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n = this.network) == null ? void 0 : n.name) ?? "Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `;
  }
  explorerBtnTemplate() {
    const { addressExplorerUrl: e } = Ae.state;
    return e ? j`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    ` : null;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks: e } = Re.state, r = e ? e.length > 1 : !1, n = e == null ? void 0 : e.find(({ id: o }) => {
      var i;
      return o === ((i = this.network) == null ? void 0 : i.id);
    });
    return r || !n;
  }
  onCopyAddress() {
    try {
      this.address && (te.copyToClopboard(this.address), St.showSuccess("Address copied"));
    } catch {
      St.showError("Failed to copy");
    }
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() && he.push("Networks");
  }
  onTransactions() {
    Se.sendEvent({ type: "track", event: "CLICK_TRANSACTIONS" }), he.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconecting = !0, await $e.disconnect(), Se.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" }), et.close();
    } catch {
      Se.sendEvent({ type: "track", event: "DISCONNECT_ERROR" }), St.showError("Failed to disconnect");
    } finally {
      this.disconecting = !1;
    }
  }
  onExplorer() {
    const { addressExplorerUrl: e } = Ae.state;
    e && te.openHref(e, "_blank");
  }
};
Vt.styles = y5;
Lr([
  se()
], Vt.prototype, "address", void 0);
Lr([
  se()
], Vt.prototype, "profileImage", void 0);
Lr([
  se()
], Vt.prototype, "profileName", void 0);
Lr([
  se()
], Vt.prototype, "balance", void 0);
Lr([
  se()
], Vt.prototype, "balanceSymbol", void 0);
Lr([
  se()
], Vt.prototype, "network", void 0);
Lr([
  se()
], Vt.prototype, "disconecting", void 0);
Vt = Lr([
  q("w3m-account-view")
], Vt);
var sh = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Fc = class extends Ce {
  constructor() {
    super(...arguments), this.search = "", this.onDebouncedSearch = te.debounce((e) => {
      this.search = e;
    });
  }
  render() {
    const e = this.search.length >= 2;
    return j`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e ? j`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>` : j`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  qrButtonTemplate() {
    return te.isMobile() ? j`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      ` : null;
  }
  onWalletConnectQr() {
    he.push("ConnectingWalletConnect");
  }
};
sh([
  se()
], Fc.prototype, "search", void 0);
Fc = sh([
  q("w3m-all-wallets-view")
], Fc);
const v5 = dt`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var ah = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Os = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.connectors = At.state.connectors, this.unsubscribe.push(At.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return j`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  walletConnectConnectorTemplate() {
    if (te.isMobile())
      return null;
    const e = this.connectors.find((r) => r.type === "WALLET_CONNECT");
    return e ? j`
      <wui-list-wallet
        imageSrc=${_e(ze.getConnectorImage(e))}
        name=${e.name ?? "Unknown"}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    ` : null;
  }
  customTemplate() {
    const { customWallets: e } = Ee.state;
    return e != null && e.length ? this.filterOutDuplicateWallets(e).map((n) => j`
        <wui-list-wallet
          imageSrc=${_e(ze.getWalletImage(n))}
          name=${n.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `) : null;
  }
  featuredTemplate() {
    const { featured: e } = ve.state;
    return e.length ? this.filterOutDuplicateWallets(e).map((n) => j`
        <wui-list-wallet
          imageSrc=${_e(ze.getWalletImage(n))}
          name=${n.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `) : null;
  }
  recentTemplate() {
    return $t.getRecentWallets().map((r) => j`
        <wui-list-wallet
          imageSrc=${_e(ze.getWalletImage(r))}
          name=${r.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(r)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `);
  }
  announcedTemplate() {
    return this.connectors.map((e) => e.type !== "ANNOUNCED" ? null : j`
        <wui-list-wallet
          imageSrc=${_e(ze.getConnectorImage(e))}
          name=${e.name ?? "Unknown"}
          @click=${() => this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `);
  }
  injectedTemplate() {
    const e = this.connectors.find((r) => r.type === "ANNOUNCED");
    return this.connectors.map((r) => r.type !== "INJECTED" || !$e.checkInstalled() ? null : j`
        <wui-list-wallet
          imageSrc=${_e(ze.getConnectorImage(r))}
          name=${r.name ?? "Unknown"}
          @click=${() => this.onConnector(r)}
          tagLabel=${_e(e ? void 0 : "installed")}
          tagVariant=${_e(e ? void 0 : "success")}
        >
        </wui-list-wallet>
      `);
  }
  connectorsTemplate() {
    return this.connectors.map((e) => ["WALLET_CONNECT", "INJECTED", "ANNOUNCED"].includes(e.type) ? null : j`
        <wui-list-wallet
          imageSrc=${_e(ze.getConnectorImage(e))}
          name=${e.name ?? "Unknown"}
          @click=${() => this.onConnector(e)}
        >
        </wui-list-wallet>
      `);
  }
  allWalletsTemplate() {
    const e = Math.floor(ve.state.count / 10) * 10;
    return j`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `;
  }
  recommendedTemplate() {
    const { recommended: e } = ve.state, { customWallets: r, featuredWalletIds: n } = Ee.state, { connectors: o } = At.state, i = $t.getRecentWallets(), s = o.filter((f) => f.type === "ANNOUNCED");
    if (n || r || !e.length)
      return null;
    const a = s.length + i.length, c = Math.max(0, 2 - a);
    return this.filterOutDuplicateWallets(e).slice(0, c).map((f) => j`
        <wui-list-wallet
          imageSrc=${_e(ze.getWalletImage(f))}
          name=${(f == null ? void 0 : f.name) ?? "Unknown"}
          @click=${() => this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `);
  }
  onConnector(e) {
    e.type === "WALLET_CONNECT" ? te.isMobile() ? he.push("AllWallets") : he.push("ConnectingWalletConnect") : he.push("ConnectingExternal", { connector: e });
  }
  filterOutDuplicateWallets(e) {
    const { connectors: r } = At.state, o = $t.getRecentWallets().map((a) => a.id), i = r.map((a) => {
      var c;
      return (c = a.info) == null ? void 0 : c.rdns;
    }).filter(Boolean);
    return e.filter((a) => !o.includes(a.id) && !i.includes(a.rdns ?? void 0));
  }
  onAllWallets() {
    Se.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }), he.push("AllWallets");
  }
  onConnectWallet(e) {
    he.push("ConnectingWalletConnect", { wallet: e });
  }
};
Os.styles = v5;
ah([
  se()
], Os.prototype, "connectors", void 0);
Os = ah([
  q("w3m-connect-view")
], Os);
const x5 = dt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
var pn = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
class mt extends Ce {
  constructor() {
    var e, r, n, o;
    super(), this.wallet = (e = he.state.data) == null ? void 0 : e.wallet, this.connector = (r = he.state.data) == null ? void 0 : r.connector, this.timeout = void 0, this.secondaryBtnLabel = "Try again", this.secondaryBtnIcon = "refresh", this.secondaryLabel = "Accept connection request in the wallet", this.onConnect = void 0, this.onRender = void 0, this.onAutoConnect = void 0, this.isWalletConnect = !0, this.unsubscribe = [], this.imageSrc = ze.getWalletImage(this.wallet) ?? ze.getConnectorImage(this.connector), this.name = ((n = this.wallet) == null ? void 0 : n.name) ?? ((o = this.connector) == null ? void 0 : o.name) ?? "Wallet", this.isRetrying = !1, this.uri = $e.state.wcUri, this.error = $e.state.wcError, this.ready = !1, this.showRetry = !1, this.buffering = !1, this.isMobile = !1, this.onRetry = void 0, this.unsubscribe.push($e.subscribeKey("wcUri", (i) => {
      var s;
      this.uri = i, this.isRetrying && this.onRetry && (this.isRetrying = !1, (s = this.onConnect) == null || s.call(this));
    }), $e.subscribeKey("wcError", (i) => this.error = i), $e.subscribeKey("buffering", (i) => this.buffering = i));
  }
  firstUpdated() {
    var e;
    (e = this.onAutoConnect) == null || e.call(this), this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), clearTimeout(this.timeout);
  }
  render() {
    var n;
    (n = this.onRender) == null || n.call(this), this.onShowRetry();
    const e = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let r = `Continue in ${this.name}`;
    return this.buffering && (r = "Connecting..."), this.error && (r = "Connection declined"), j`
      <wui-flex
        data-error=${_e(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${_e(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? j`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var e;
    this.error && !this.showRetry && (this.showRetry = !0, ((e = this.shadowRoot) == null ? void 0 : e.querySelector("wui-button")).animate([{ opacity: 0 }, { opacity: 1 }], {
      fill: "forwards",
      easing: "ease"
    }));
  }
  onTryAgain() {
    var e, r;
    this.buffering || ($e.setWcError(!1), this.onRetry ? (this.isRetrying = !0, (e = this.onRetry) == null || e.call(this)) : (r = this.onConnect) == null || r.call(this));
  }
  loaderTemplate() {
    const e = _t.state.themeVariables["--w3m-border-radius-master"], r = e ? parseInt(e.replace("px", ""), 10) : 4;
    return j`<wui-loading-thumbnail radius=${r * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (te.copyToClopboard(this.uri), St.showSuccess("Link copied"));
    } catch {
      St.showError("Failed to copy");
    }
  }
}
mt.styles = x5;
pn([
  se()
], mt.prototype, "uri", void 0);
pn([
  se()
], mt.prototype, "error", void 0);
pn([
  se()
], mt.prototype, "ready", void 0);
pn([
  se()
], mt.prototype, "showRetry", void 0);
pn([
  se()
], mt.prototype, "buffering", void 0);
pn([
  Ke({ type: Boolean })
], mt.prototype, "isMobile", void 0);
pn([
  Ke()
], mt.prototype, "onRetry", void 0);
var C5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const _5 = {
  INJECTED: "browser",
  ANNOUNCED: "browser"
};
let v0 = class extends mt {
  constructor() {
    if (super(), !this.connector)
      throw new Error("w3m-connecting-view: No connector provided");
    Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: _5[this.connector.type] ?? "external"
      }
    }), this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), this.isWalletConnect = !1;
  }
  async onConnectProxy() {
    try {
      this.error = !1, this.connector && (this.connector.imageUrl && $t.setConnectedWalletImageUrl(this.connector.imageUrl), await $e.connectExternal(this.connector), et.close(), Se.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "external" }
      }));
    } catch (e) {
      Se.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (e == null ? void 0 : e.message) ?? "Unknown" }
      }), this.error = !0;
    }
  }
};
v0 = C5([
  q("w3m-connecting-external-view")
], v0);
var E5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let x0 = class extends Ce {
  constructor() {
    var e, r;
    super(...arguments), this.dappUrl = (e = Ee.state.metadata) == null ? void 0 : e.url, this.dappName = (r = Ee.state.metadata) == null ? void 0 : r.name;
  }
  render() {
    return j`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `;
  }
  urlTemplate() {
    return this.dappUrl ? j`<wui-flex .padding=${["0", "0", "l", "0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>` : null;
  }
  onDappLink() {
    this.dappUrl && te.openHref(this.dappUrl, "_blank");
  }
  onSign() {
  }
  onCancel() {
    he.goBack();
  }
};
x0 = E5([
  q("w3m-connecting-siwe-view")
], x0);
var lu = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Ns = class extends Ce {
  constructor() {
    var e;
    super(), this.interval = void 0, this.lastRetry = Date.now(), this.wallet = (e = he.state.data) == null ? void 0 : e.wallet, this.platform = void 0, this.platforms = [], this.initializeConnection(), this.interval = setInterval(this.initializeConnection.bind(this), _i.TEN_SEC_MS);
  }
  disconnectedCallback() {
    clearTimeout(this.interval);
  }
  render() {
    return this.wallet ? (this.determinePlatforms(), j`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `) : j`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
  }
  async initializeConnection(e = !1) {
    try {
      const { wcPairingExpiry: r } = $e.state;
      if (e || te.isPairingExpired(r)) {
        if ($e.connectWalletConnect(), this.wallet) {
          const n = ze.getWalletImage(this.wallet);
          n && $t.setConnectedWalletImageUrl(n);
        } else {
          const o = At.state.connectors.find((s) => s.type === "WALLET_CONNECT"), i = ze.getConnectorImage(o);
          i && $t.setConnectedWalletImageUrl(i);
        }
        await $e.state.wcPromise, this.finalizeConnection(), et.close();
      }
    } catch (r) {
      Se.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (r == null ? void 0 : r.message) ?? "Unknown" }
      }), $e.setWcError(!0), te.isAllowedRetry(this.lastRetry) && (St.showError("Declined"), this.lastRetry = Date.now(), this.initializeConnection(!0));
    }
  }
  finalizeConnection() {
    const { wcLinking: e, recentWallet: r } = $e.state;
    e && $t.setWalletConnectDeepLink(e), r && $t.setWeb3ModalRecent(r), Se.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: e ? "mobile" : "qrcode"
      }
    });
  }
  determinePlatforms() {
    if (!this.wallet)
      throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");
    if (this.platform)
      return;
    const { mobile_link: e, desktop_link: r, webapp_link: n, injected: o, rdns: i } = this.wallet, s = o == null ? void 0 : o.map(({ injected_id: m }) => m).filter(Boolean), a = i ? [i] : s ?? [], c = a.length, l = e, f = n, p = $e.checkInstalled(a), g = c && p, w = r && !te.isMobile();
    g && this.platforms.push("browser"), l && this.platforms.push(te.isMobile() ? "mobile" : "qrcode"), f && this.platforms.push("web"), w && this.platforms.push("desktop"), !g && c && this.platforms.push("unsupported"), this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return j`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "desktop":
        return j`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
      case "web":
        return j`
          <w3m-connecting-wc-web .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;
      case "mobile":
        return j`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return j`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return j`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1 ? j`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    ` : null;
  }
  async onSelectPlatform(e) {
    var n;
    const r = (n = this.shadowRoot) == null ? void 0 : n.querySelector("div");
    r && (await r.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }).finished, this.platform = e, r.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }));
  }
};
lu([
  se()
], Ns.prototype, "platform", void 0);
lu([
  se()
], Ns.prototype, "platforms", void 0);
Ns = lu([
  q("w3m-connecting-wc-view")
], Ns);
var $5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let C0 = class extends Ce {
  constructor() {
    var e;
    super(...arguments), this.wallet = (e = he.state.data) == null ? void 0 : e.wallet;
  }
  render() {
    if (!this.wallet)
      throw new Error("w3m-downloads-view");
    return j`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var e;
    return (e = this.wallet) != null && e.chrome_store ? j`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>` : null;
  }
  iosTemplate() {
    var e;
    return (e = this.wallet) != null && e.app_store ? j`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>` : null;
  }
  androidTemplate() {
    var e;
    return (e = this.wallet) != null && e.play_store ? j`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>` : null;
  }
  homepageTemplate() {
    var e;
    return (e = this.wallet) != null && e.homepage ? j`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    ` : null;
  }
  onChromeStore() {
    var e;
    (e = this.wallet) != null && e.chrome_store && te.openHref(this.wallet.chrome_store, "_blank");
  }
  onAppStore() {
    var e;
    (e = this.wallet) != null && e.app_store && te.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var e;
    (e = this.wallet) != null && e.play_store && te.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var e;
    (e = this.wallet) != null && e.homepage && te.openHref(this.wallet.homepage, "_blank");
  }
};
C0 = $5([
  q("w3m-downloads-view")
], C0);
var A5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const S5 = "https://walletconnect.com/explorer";
let _0 = class extends Ce {
  render() {
    return j`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      te.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended: e, featured: r } = ve.state, { customWallets: n } = Ee.state;
    return [...r, ...n ?? [], ...e].slice(0, 4).map((i) => j`
        <wui-list-wallet
          name=${i.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${_e(ze.getWalletImage(i))}
          @click=${() => {
      te.openHref(i.homepage ?? S5, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
_0 = A5([
  q("w3m-get-wallet-view")
], _0);
const D5 = dt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
var ma = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Yn = class extends Ce {
  constructor() {
    var e;
    super(), this.network = (e = he.state.data) == null ? void 0 : e.network, this.unsubscribe = [], this.showRetry = !1, this.error = !1, this.currentNetwork = Re.state.caipNetwork, this.unsubscribe.push(Re.subscribeKey("caipNetwork", (r) => {
      var n;
      (r == null ? void 0 : r.id) !== ((n = this.currentNetwork) == null ? void 0 : n.id) && he.goBack();
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network)
      throw new Error("w3m-network-switch-view: No network provided");
    this.onShowRetry();
    const e = this.error ? "Switch declined" : "Approve in wallet", r = this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
    return j`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${_e(ze.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : j`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  onShowRetry() {
    var e;
    this.error && !this.showRetry && (this.showRetry = !0, ((e = this.shadowRoot) == null ? void 0 : e.querySelector("wui-button")).animate([{ opacity: 0 }, { opacity: 1 }], {
      fill: "forwards",
      easing: "ease"
    }));
  }
  async onSwitchNetwork() {
    try {
      this.error = !1, this.network && (await Re.switchActiveNetwork(this.network), he.goBack());
    } catch {
      this.error = !0;
    }
  }
};
Yn.styles = D5;
ma([
  se()
], Yn.prototype, "showRetry", void 0);
ma([
  se()
], Yn.prototype, "error", void 0);
ma([
  se()
], Yn.prototype, "currentNetwork", void 0);
Yn = ma([
  q("w3m-network-switch-view")
], Yn);
var ch = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Wc = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.caipNetwork = Re.state.caipNetwork, this.unsubscribe.push(Re.subscribeKey("caipNetwork", (e) => this.caipNetwork = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return j`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  onNetworkHelp() {
    Se.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" }), he.push("WhatIsANetwork");
  }
  networksTemplate() {
    const { approvedCaipNetworkIds: e, requestedCaipNetworks: r, supportsAllNetworks: n } = Re.state, o = e, i = r;
    return o != null && o.length && (i == null || i.sort((s, a) => o.indexOf(a.id) - o.indexOf(s.id))), i == null ? void 0 : i.map((s) => {
      var a;
      return j`
        <wui-card-select
          .selected=${((a = this.caipNetwork) == null ? void 0 : a.id) === s.id}
          imageSrc=${_e(ze.getNetworkImage(s))}
          type="network"
          name=${s.name ?? s.id}
          @click=${() => this.onSwitchNetwork(s)}
          .disabled=${!n && !(o != null && o.includes(s.id))}
        ></wui-card-select>
      `;
    });
  }
  async onSwitchNetwork(e) {
    const { isConnected: r } = Ae.state, { approvedCaipNetworkIds: n, supportsAllNetworks: o, caipNetwork: i } = Re.state;
    r && (i == null ? void 0 : i.id) !== e.id ? n != null && n.includes(e.id) ? await Re.switchActiveNetwork(e) : o && he.push("SwitchNetwork", { network: e }) : r || (Re.setCaipNetwork(e), he.push("Connect"));
  }
};
ch([
  se()
], Wc.prototype, "caipNetwork", void 0);
Wc = ch([
  q("w3m-networks-view")
], Wc);
const P5 = dt`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;
var gn = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const Ko = "last-transaction", I5 = 7;
let sr = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.paginationObserver = void 0, this.address = Ae.state.address, this.transactions = Ot.state.transactions, this.transactionsByYear = Ot.state.transactionsByYear, this.loading = Ot.state.loading, this.empty = Ot.state.empty, this.next = Ot.state.next, this.unsubscribe.push(Ae.subscribe((e) => {
      e.isConnected && this.address !== e.address && (this.address = e.address, Ot.resetTransactions(), Ot.fetchTransactions(e.address));
    }), Ot.subscribe((e) => {
      this.transactions = e.transactions, this.transactionsByYear = e.transactionsByYear, this.loading = e.loading, this.empty = e.empty, this.next = e.next;
    }));
  }
  firstUpdated() {
    this.transactions.length === 0 && Ot.fetchTransactions(this.address), this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return j`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty ? null : this.templateTransactionsByYear()}
        ${this.loading ? this.templateLoading() : null}
        ${!this.loading && this.empty ? this.templateEmpty() : null}
      </wui-flex>
    `;
  }
  templateTransactionsByYear() {
    const e = Object.keys(this.transactionsByYear).sort().reverse();
    return e.map((r, n) => {
      const o = n === e.length - 1, i = parseInt(r, 10), s = Dn.getTransactionGroupTitle(i), a = this.transactionsByYear[i];
      return a ? j`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs", "s", "s", "s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a, o)}
          </wui-flex>
        </wui-flex>
      ` : null;
    });
  }
  templateRenderTransaction(e, r) {
    const { date: n, descriptions: o, direction: i, isAllNFT: s, images: a, status: c, transfers: l, type: f } = this.getTransactionListItemProps(e), p = (l == null ? void 0 : l.length) > 1;
    return (l == null ? void 0 : l.length) === 2 && !s ? j`
        <wui-transaction-list-item
          date=${n}
          direction=${i}
          id=${r && this.next ? Ko : ""}
          status=${c}
          type=${f}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      ` : p ? l.map((w, m) => {
      const v = Dn.getTransferDescription(w), _ = r && m === l.length - 1;
      return j` <wui-transaction-list-item
          date=${n}
          direction=${w.direction}
          id=${_ && this.next ? Ko : ""}
          status=${c}
          type=${f}
          onlyDirectionIcon=${!0}
          .images=${[a == null ? void 0 : a[m]]}
          .descriptions=${[v]}
        ></wui-transaction-list-item>`;
    }) : j`
      <wui-transaction-list-item
        date=${n}
        direction=${i}
        id=${r && this.next ? Ko : ""}
        status=${c}
        type=${f}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(e, r) {
    return e.map((n, o) => {
      const i = r && o === e.length - 1;
      return j`${this.templateRenderTransaction(n, i)}`;
    });
  }
  templateEmpty() {
    return j`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `;
  }
  templateLoading() {
    return Array(I5).fill(j` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e) => e);
  }
  createPaginationObserver() {
    const { projectId: e } = Ee.state;
    this.paginationObserver = new IntersectionObserver(([r]) => {
      r != null && r.isIntersecting && !this.loading && (Ot.fetchTransactions(this.address), Se.sendEvent({
        type: "track",
        event: "LOAD_MORE_TRANSACTIONS",
        properties: {
          address: this.address,
          projectId: e,
          cursor: this.next
        }
      }));
    }, {}), this.setPaginationObserver();
  }
  setPaginationObserver() {
    var r, n, o;
    (r = this.paginationObserver) == null || r.disconnect();
    const e = (n = this.shadowRoot) == null ? void 0 : n.querySelector(`#${Ko}`);
    e && ((o = this.paginationObserver) == null || o.observe(e));
  }
  getTransactionListItemProps(e) {
    var c, l, f, p, g;
    const r = Jf.getRelativeDateFromNow((c = e == null ? void 0 : e.metadata) == null ? void 0 : c.minedAt), n = Dn.getTransactionDescriptions(e), o = e == null ? void 0 : e.transfers, i = (l = e == null ? void 0 : e.transfers) == null ? void 0 : l[0], s = !!i && ((f = e == null ? void 0 : e.transfers) == null ? void 0 : f.every((w) => !!w.nft_info)), a = Dn.getTransactionImages(o);
    return {
      date: r,
      direction: i == null ? void 0 : i.direction,
      descriptions: n,
      isAllNFT: s,
      images: a,
      status: (p = e.metadata) == null ? void 0 : p.status,
      transfers: o,
      type: (g = e.metadata) == null ? void 0 : g.operationType
    };
  }
};
sr.styles = P5;
gn([
  se()
], sr.prototype, "address", void 0);
gn([
  se()
], sr.prototype, "transactions", void 0);
gn([
  se()
], sr.prototype, "transactionsByYear", void 0);
gn([
  se()
], sr.prototype, "loading", void 0);
gn([
  se()
], sr.prototype, "empty", void 0);
gn([
  se()
], sr.prototype, "next", void 0);
sr = gn([
  q("w3m-transactions-view")
], sr);
var T5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const O5 = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
let E0 = class extends Ce {
  render() {
    return j`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${O5}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${() => {
      te.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
E0 = T5([
  q("w3m-what-is-a-network-view")
], E0);
var N5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const k5 = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
let $0 = class extends Ce {
  render() {
    return j`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${k5}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    Se.sendEvent({ type: "track", event: "CLICK_GET_WALLET" }), he.push("GetWallet");
  }
};
$0 = N5([
  q("w3m-what-is-a-wallet-view")
], $0);
const R5 = dt`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var Uo = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const A0 = "local-paginator";
let cn = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.paginationObserver = void 0, this.initial = !ve.state.wallets.length, this.wallets = ve.state.wallets, this.recommended = ve.state.recommended, this.featured = ve.state.featured, this.unsubscribe.push(ve.subscribeKey("wallets", (e) => this.wallets = e), ve.subscribeKey("recommended", (e) => this.recommended = e), ve.subscribeKey("featured", (e) => this.featured = e));
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e;
    this.unsubscribe.forEach((r) => r()), (e = this.paginationObserver) == null || e.disconnect();
  }
  render() {
    return j`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector("wui-grid");
    this.initial && e && (await ve.fetchWallets({ page: 1 }), await e.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }).finished, this.initial = !1, e.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }));
  }
  shimmerTemplate(e, r) {
    return [...Array(e)].map(() => j`
        <wui-card-select-loader type="wallet" id=${_e(r)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    return [...this.featured, ...this.recommended, ...this.wallets].map((r) => j`
        <wui-card-select
          imageSrc=${_e(ze.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${() => this.onConnectWallet(r)}
        ></wui-card-select>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets: e, recommended: r, featured: n, count: o } = ve.state, i = window.innerWidth < 352 ? 3 : 4, s = e.length + r.length;
    let c = Math.ceil(s / i) * i - s + i;
    return c -= e.length ? n.length % i : 0, o === 0 || [...n, ...e, ...r].length < o ? this.shimmerTemplate(c, A0) : null;
  }
  createPaginationObserver() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector(`#${A0}`);
    e && (this.paginationObserver = new IntersectionObserver(([n]) => {
      if (n != null && n.isIntersecting && !this.initial) {
        const { page: o, count: i, wallets: s } = ve.state;
        s.length < i && ve.fetchWallets({ page: o + 1 });
      }
    }), this.paginationObserver.observe(e));
  }
  onConnectWallet(e) {
    const { connectors: r } = At.state, n = r.find(({ explorerId: o }) => o === e.id);
    n ? he.push("ConnectingExternal", { connector: n }) : he.push("ConnectingWalletConnect", { wallet: e });
  }
};
cn.styles = R5;
Uo([
  se()
], cn.prototype, "initial", void 0);
Uo([
  se()
], cn.prototype, "wallets", void 0);
Uo([
  se()
], cn.prototype, "recommended", void 0);
Uo([
  se()
], cn.prototype, "featured", void 0);
cn = Uo([
  q("w3m-all-wallets-list")
], cn);
const B5 = dt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;
var uu = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let yo = class extends Ce {
  constructor() {
    super(...arguments), this.prevQuery = "", this.loading = !0, this.query = "";
  }
  render() {
    return this.onSearch(), this.loading ? j`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    this.query !== this.prevQuery && (this.prevQuery = this.query, this.loading = !0, await ve.searchWallet({ search: this.query }), this.loading = !1);
  }
  walletsTemplate() {
    const { search: e } = ve.state;
    return e.length ? j`
      <wui-grid
        .padding=${["0", "s", "s", "s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map((r) => j`
            <wui-card-select
              imageSrc=${_e(ze.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${() => this.onConnectWallet(r)}
            ></wui-card-select>
          `)}
      </wui-grid>
    ` : j`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(e) {
    const { connectors: r } = At.state, n = r.find(({ explorerId: o }) => o === e.id);
    n ? he.push("ConnectingExternal", { connector: n }) : he.push("ConnectingWalletConnect", { wallet: e });
  }
};
yo.styles = B5;
uu([
  se()
], yo.prototype, "loading", void 0);
uu([
  Ke()
], yo.prototype, "query", void 0);
yo = uu([
  q("w3m-all-wallets-search")
], yo);
var ba = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let vo = class extends Ce {
  constructor() {
    super(), this.platformTabs = [], this.unsubscribe = [], this.platforms = [], this.onSelectPlatfrom = void 0, this.buffering = !1, this.unsubscribe.push($e.subscribeKey("buffering", (e) => this.buffering = e));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.generateTabs();
    return j`
      <wui-flex justifyContent="center" .padding=${["l", "0", "0", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const e = this.platforms.map((r) => r === "browser" ? { label: "Browser", icon: "extension", platform: "browser" } : r === "mobile" ? { label: "Mobile", icon: "mobile", platform: "mobile" } : r === "qrcode" ? { label: "Mobile", icon: "mobile", platform: "qrcode" } : r === "web" ? { label: "Webapp", icon: "browser", platform: "web" } : r === "desktop" ? { label: "Desktop", icon: "desktop", platform: "desktop" } : { label: "Browser", icon: "extension", platform: "unsupported" });
    return this.platformTabs = e.map(({ platform: r }) => r), e;
  }
  onTabChange(e) {
    var n;
    const r = this.platformTabs[e];
    r && ((n = this.onSelectPlatfrom) == null || n.call(this, r));
  }
};
ba([
  Ke({ type: Array })
], vo.prototype, "platforms", void 0);
ba([
  Ke()
], vo.prototype, "onSelectPlatfrom", void 0);
ba([
  se()
], vo.prototype, "buffering", void 0);
vo = ba([
  q("w3m-connecting-header")
], vo);
var M5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let S0 = class extends mt {
  constructor() {
    if (super(), !this.wallet)
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    try {
      this.error = !1;
      const { connectors: e } = At.state, r = e.find((o) => {
        var i, s;
        return o.type === "ANNOUNCED" && ((i = o.info) == null ? void 0 : i.rdns) === ((s = this.wallet) == null ? void 0 : s.rdns);
      }), n = e.find((o) => o.type === "INJECTED");
      r ? await $e.connectExternal(r) : n && await $e.connectExternal(n), et.close(), Se.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser" }
      });
    } catch (e) {
      Se.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (e == null ? void 0 : e.message) ?? "Unknown" }
      }), this.error = !0;
    }
  }
};
S0 = M5([
  q("w3m-connecting-wc-browser")
], S0);
var U5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let D0 = class extends mt {
  constructor() {
    if (super(), !this.wallet)
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    !this.ready && this.uri && (this.ready = !0, this.timeout = setTimeout(() => {
      var e;
      (e = this.onConnect) == null || e.call(this);
    }, 200));
  }
  onConnectProxy() {
    var e;
    if ((e = this.wallet) != null && e.desktop_link && this.uri)
      try {
        this.error = !1;
        const { desktop_link: r, name: n } = this.wallet, { redirect: o, href: i } = te.formatNativeUrl(r, this.uri);
        $e.setWcLinking({ name: n, href: i }), $e.setRecentWallet(this.wallet), te.openHref(o, "_self");
      } catch {
        this.error = !0;
      }
  }
};
D0 = U5([
  q("w3m-connecting-wc-desktop")
], D0);
var L5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let P0 = class extends mt {
  constructor() {
    if (super(), !this.wallet)
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), document.addEventListener("visibilitychange", this.onBuffering.bind(this)), Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
  }
  onRenderProxy() {
    var e;
    !this.ready && this.uri && (this.ready = !0, (e = this.onConnect) == null || e.call(this));
  }
  onConnectProxy() {
    var e;
    if ((e = this.wallet) != null && e.mobile_link && this.uri)
      try {
        this.error = !1;
        const { mobile_link: r, name: n } = this.wallet, { redirect: o, href: i } = te.formatNativeUrl(r, this.uri);
        $e.setWcLinking({ name: n, href: i }), $e.setRecentWallet(this.wallet), te.openHref(o, "_self");
      } catch {
        this.error = !0;
      }
  }
  onBuffering() {
    const e = te.isIos();
    (document == null ? void 0 : document.visibilityState) === "visible" && !this.error && e && ($e.setBuffering(!0), setTimeout(() => {
      $e.setBuffering(!1);
    }, 5e3));
  }
};
P0 = L5([
  q("w3m-connecting-wc-mobile")
], P0);
const j5 = dt`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
var F5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let zc = class extends mt {
  constructor() {
    var e;
    super(), this.forceUpdate = () => {
      this.requestUpdate();
    }, window.addEventListener("resize", this.forceUpdate), Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((e = this.wallet) == null ? void 0 : e.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    return this.onRenderProxy(), j`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    !this.ready && this.uri && (this.timeout = setTimeout(() => {
      this.ready = !0;
    }, 200));
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready)
      return null;
    const e = this.getBoundingClientRect().width - 40, r = this.wallet ? this.wallet.name : void 0;
    return $e.setWcLinking(void 0), $e.setRecentWallet(this.wallet), j`<wui-qr-code
      size=${e}
      theme=${_t.state.themeMode}
      uri=${this.uri}
      imageSrc=${_e(ze.getWalletImage(this.wallet))}
      alt=${_e(r)}
    ></wui-qr-code>`;
  }
};
zc.styles = j5;
zc = F5([
  q("w3m-connecting-wc-qrcode")
], zc);
const W5 = dt`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var z5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Hc = class extends Ce {
  constructor() {
    var e;
    super(...arguments), this.dappImageUrl = (e = Ee.state.metadata) == null ? void 0 : e.icons, this.walletImageUrl = $t.getConnectedWalletImageUrl();
  }
  firstUpdated() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelectorAll("wui-visual-thumbnail");
    e != null && e[0] && this.createAnimation(e[0], "translate(18px)"), e != null && e[1] && this.createAnimation(e[1], "translate(-18px)");
  }
  render() {
    var e;
    return j`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e = this.dappImageUrl) == null ? void 0 : e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(e, r) {
    e.animate([{ transform: "translateX(0px)" }, { transform: r }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: 1 / 0
    });
  }
};
Hc.styles = W5;
Hc = z5([
  q("w3m-connecting-siwe")
], Hc);
var H5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let I0 = class extends Ce {
  constructor() {
    var e;
    if (super(), this.wallet = (e = he.state.data) == null ? void 0 : e.wallet, !this.wallet)
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return j`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${_e(ze.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
I0 = H5([
  q("w3m-connecting-wc-unsupported")
], I0);
var q5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let T0 = class extends mt {
  constructor() {
    if (super(), !this.wallet)
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.secondaryBtnLabel = "Open", this.secondaryLabel = "Open and continue in a new browser tab", this.secondaryBtnIcon = "externalLink", Se.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  onConnectProxy() {
    var e;
    if ((e = this.wallet) != null && e.webapp_link && this.uri)
      try {
        this.error = !1;
        const { webapp_link: r, name: n } = this.wallet, { redirect: o, href: i } = te.formatUniversalUrl(r, this.uri);
        $e.setWcLinking({ name: n, href: i }), $e.setRecentWallet(this.wallet), te.openHref(o, "_blank");
      } catch {
        this.error = !0;
      }
  }
};
T0 = q5([
  q("w3m-connecting-wc-web")
], T0);
const G5 = dt`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;
var ya = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
function O0() {
  var o, i, s, a, c, l;
  const t = (i = (o = he.state.data) == null ? void 0 : o.connector) == null ? void 0 : i.name, e = (a = (s = he.state.data) == null ? void 0 : s.wallet) == null ? void 0 : a.name, r = (l = (c = he.state.data) == null ? void 0 : c.network) == null ? void 0 : l.name, n = e ?? t;
  return {
    Connect: "Connect Wallet",
    Account: void 0,
    ConnectingExternal: n ?? "Connect Wallet",
    ConnectingWalletConnect: n ?? "WalletConnect",
    ConnectingSiwe: "Sign In",
    Networks: "Choose Network",
    SwitchNetwork: r ?? "Switch Network",
    AllWallets: "All Wallets",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    GetWallet: "Get a Wallet",
    Downloads: n ? `Get ${n}` : "Downloads",
    Transactions: "Activity"
  };
}
let Jn = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.heading = O0()[he.state.view], this.buffering = !1, this.showBack = !1, this.unsubscribe.push(he.subscribeKey("view", (e) => {
      this.onViewChange(e), this.onHistoryChange();
    }), $e.subscribeKey("buffering", (e) => this.buffering = e));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return j`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${et.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `;
  }
  onWalletHelp() {
    Se.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" }), he.push("WhatIsAWallet");
  }
  titleTemplate() {
    return j`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`;
  }
  dynamicButtonTemplate() {
    const { view: e } = he.state, r = e === "Connect";
    return this.showBack ? j`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${he.goBack}
      ></wui-icon-link>` : j`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  separatorTemplate() {
    return this.heading ? j`<wui-separator></wui-separator>` : null;
  }
  getPadding() {
    return this.heading ? ["l", "2l", "l", "2l"] : ["l", "2l", "0", "2l"];
  }
  async onViewChange(e) {
    var n;
    const r = (n = this.shadowRoot) == null ? void 0 : n.querySelector("wui-text");
    if (r) {
      const o = O0()[e];
      await r.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished, this.heading = o, r.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onHistoryChange() {
    var n;
    const { history: e } = he.state, r = (n = this.shadowRoot) == null ? void 0 : n.querySelector("#dynamic");
    e.length > 1 && !this.showBack && r ? (await r.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }).finished, this.showBack = !0, r.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    })) : e.length <= 1 && this.showBack && r && (await r.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }).finished, this.showBack = !1, r.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
      easing: "ease"
    }));
  }
};
Jn.styles = [G5];
ya([
  se()
], Jn.prototype, "heading", void 0);
ya([
  se()
], Jn.prototype, "buffering", void 0);
ya([
  se()
], Jn.prototype, "showBack", void 0);
Jn = ya([
  q("w3m-header")
], Jn);
var lh = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let qc = class extends Ce {
  constructor() {
    super(...arguments), this.data = [];
  }
  render() {
    return j`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e) => j`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((r) => j`<wui-visual name=${r}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
lh([
  Ke({ type: Array })
], qc.prototype, "data", void 0);
qc = lh([
  q("w3m-help-widget")
], qc);
const V5 = dt`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;
var Z5 = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let Gc = class extends Ce {
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = Ee.state;
    return !e && !r ? null : j`
      <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = Ee.state;
    return e && r ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = Ee.state;
    return e ? j`<a href=${e}>Terms of Service</a>` : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = Ee.state;
    return e ? j`<a href=${e}>Privacy Policy</a>` : null;
  }
};
Gc.styles = [V5];
Gc = Z5([
  q("w3m-legal-footer")
], Gc);
const K5 = dt`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
var uh = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
let ks = class extends Ce {
  constructor() {
    super(...arguments), this.wallet = void 0;
  }
  render() {
    if (!this.wallet)
      return this.style.display = "none", null;
    const { name: e, app_store: r, play_store: n, chrome_store: o, homepage: i } = this.wallet, s = te.isMobile(), a = te.isIos(), c = te.isAndroid(), l = [r, n, i, o].filter(Boolean).length > 1, f = Te.getTruncateString({
      string: e,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    return l && !s ? j`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${() => he.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      ` : !l && i ? j`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      ` : r && a ? j`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      ` : n && c ? j`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      ` : (this.style.display = "none", null);
  }
  onAppStore() {
    var e;
    (e = this.wallet) != null && e.app_store && te.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var e;
    (e = this.wallet) != null && e.play_store && te.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var e;
    (e = this.wallet) != null && e.homepage && te.openHref(this.wallet.homepage, "_blank");
  }
};
ks.styles = [K5];
uh([
  Ke({ type: Object })
], ks.prototype, "wallet", void 0);
ks = uh([
  q("w3m-mobile-download-links")
], ks);
const Y5 = dt`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;
var dh = function(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
};
const J5 = {
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
let Rs = class extends Ce {
  constructor() {
    super(), this.unsubscribe = [], this.timeout = void 0, this.open = St.state.open, this.unsubscribe.push(St.subscribeKey("open", (e) => {
      this.open = e, this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { message: e, variant: r } = St.state, n = J5[r];
    return j`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout), this.open ? (this.animate([
      { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
      { opacity: 1, transform: "translateX(-50%) scale(1)" }
    ], {
      duration: 150,
      fill: "forwards",
      easing: "ease"
    }), this.timeout = setTimeout(() => St.hide(), 2500)) : this.animate([
      { opacity: 1, transform: "translateX(-50%) scale(1)" },
      { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
    ], {
      duration: 150,
      fill: "forwards",
      easing: "ease"
    });
  }
};
Rs.styles = Y5;
dh([
  se()
], Rs.prototype, "open", void 0);
Rs = dh([
  q("w3m-snackbar")
], Rs);
let N0 = !1;
class X5 {
  constructor(e) {
    this.initPromise = void 0, this.setIsConnected = (r) => {
      Ae.setIsConnected(r);
    }, this.setCaipAddress = (r) => {
      Ae.setCaipAddress(r);
    }, this.setBalance = (r, n) => {
      Ae.setBalance(r, n);
    }, this.setProfileName = (r) => {
      Ae.setProfileName(r);
    }, this.setProfileImage = (r) => {
      Ae.setProfileImage(r);
    }, this.resetAccount = () => {
      Ae.resetAccount();
    }, this.setCaipNetwork = (r) => {
      Re.setCaipNetwork(r);
    }, this.getCaipNetwork = () => Re.state.caipNetwork, this.setRequestedCaipNetworks = (r) => {
      Re.setRequestedCaipNetworks(r);
    }, this.getApprovedCaipNetworksData = () => Re.getApprovedCaipNetworksData(), this.resetNetwork = () => {
      Re.resetNetwork();
    }, this.setConnectors = (r) => {
      At.setConnectors(r);
    }, this.addConnector = (r) => {
      At.addConnector(r);
    }, this.getConnectors = () => At.getConnectors(), this.resetWcConnection = () => {
      $e.resetWcConnection();
    }, this.fetchIdentity = (r) => rf.fetchIdentity(r), this.setAddressExplorerUrl = (r) => {
      Ae.setAddressExplorerUrl(r);
    }, this.setSIWENonce = (r) => {
      Lt.setNonce(r);
    }, this.setSIWESession = (r) => {
      Lt.setSession(r);
    }, this.setSIWEStatus = (r) => {
      Lt.setStatus(r);
    }, this.setSIWEMessage = (r) => {
      Lt.setMessage(r);
    }, this.getSIWENonce = () => Lt.state.nonce, this.getSIWESession = () => Lt.state.session, this.getSIWEStatus = () => Lt.state.status, this.getSIWEMessage = () => Lt.state.message, this.initControllers(e), this.initOrContinue();
  }
  async open(e) {
    await this.initOrContinue(), et.open(e);
  }
  async close() {
    await this.initOrContinue(), et.close();
  }
  getThemeMode() {
    return _t.state.themeMode;
  }
  getThemeVariables() {
    return _t.state.themeVariables;
  }
  setThemeMode(e) {
    _t.setThemeMode(e), hf(_t.state.themeMode);
  }
  setThemeVariables(e) {
    _t.setThemeVariables(e), S2(_t.state.themeVariables);
  }
  subscribeTheme(e) {
    return _t.subscribe(e);
  }
  getState() {
    return { ...Rn.state };
  }
  subscribeState(e) {
    return Rn.subscribe(e);
  }
  getEvent() {
    return { ...Se.state };
  }
  subscribeEvents(e) {
    return Se.subscribe(e);
  }
  subscribeSIWEState(e) {
    return Lt.subscribe(e);
  }
  initControllers(e) {
    Re.setClient(e.networkControllerClient), Re.setDefaultCaipNetwork(e.defaultChain), Ee.setProjectId(e.projectId), Ee.setIncludeWalletIds(e.includeWalletIds), Ee.setExcludeWalletIds(e.excludeWalletIds), Ee.setFeaturedWalletIds(e.featuredWalletIds), Ee.setTokens(e.tokens), Ee.setTermsConditionsUrl(e.termsConditionsUrl), Ee.setPrivacyPolicyUrl(e.privacyPolicyUrl), Ee.setCustomWallets(e.customWallets), Ee.setEnableAnalytics(e.enableAnalytics), Ee.setSdkVersion(e._sdkVersion), $e.setClient(e.connectionControllerClient), e.siweControllerClient && Lt.setSIWEClient(e.siweControllerClient), e.metadata && Ee.setMetadata(e.metadata), e.themeMode && _t.setThemeMode(e.themeMode), e.themeVariables && _t.setThemeVariables(e.themeVariables);
  }
  async initOrContinue() {
    return !this.initPromise && !N0 && te.isClient() && (N0 = !0, this.initPromise = new Promise(async (e) => {
      await Promise.all([import("./index-BEbsuu2W.js"), Promise.resolve().then(() => m5)]);
      const r = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", r), e();
    })), this.initPromise;
  }
}
const we = {
  WALLET_CONNECT_CONNECTOR_ID: "walletConnect",
  INJECTED_CONNECTOR_ID: "injected",
  COINBASE_CONNECTOR_ID: "coinbaseWallet",
  SAFE_CONNECTOR_ID: "safe",
  LEDGER_CONNECTOR_ID: "ledger",
  EIP6963_CONNECTOR_ID: "eip6963",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  VERSION: "3.4.0"
}, Vr = {
  ConnectorExplorerIds: {
    [we.COINBASE_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [we.SAFE_CONNECTOR_ID]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [we.LEDGER_CONNECTOR_ID]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"
  },
  EIP155NetworkImageIds: {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    1313161554: "3ff73439-a619-4894-9262-4470c773a100"
  },
  ConnectorImageIds: {
    [we.COINBASE_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [we.SAFE_CONNECTOR_ID]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [we.LEDGER_CONNECTOR_ID]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [we.WALLET_CONNECT_CONNECTOR_ID]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [we.INJECTED_CONNECTOR_ID]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [we.INJECTED_CONNECTOR_ID]: "Browser Wallet",
    [we.WALLET_CONNECT_CONNECTOR_ID]: "WalletConnect",
    [we.COINBASE_CONNECTOR_ID]: "Coinbase",
    [we.LEDGER_CONNECTOR_ID]: "Ledger",
    [we.SAFE_CONNECTOR_ID]: "Safe"
  },
  ConnectorTypesMap: {
    [we.INJECTED_CONNECTOR_ID]: "INJECTED",
    [we.WALLET_CONNECT_CONNECTOR_ID]: "WALLET_CONNECT",
    [we.EIP6963_CONNECTOR_ID]: "ANNOUNCED"
  }
}, yn = {
  caipNetworkIdToNumber(t) {
    return t ? Number(t.split(":")[1]) : void 0;
  },
  getCaipTokens(t) {
    if (!t)
      return;
    const e = {};
    return Object.entries(t).forEach(([r, n]) => {
      e[`${we.EIP155}:${r}`] = n;
    }), e;
  }
};
function Q5(t) {
  if (t)
    return {
      id: `${we.EIP155}:${t.id}`,
      name: t.name,
      imageId: Vr.EIP155NetworkImageIds[t.id]
    };
}
const e6 = "wagmi.wallet";
class t6 extends X5 {
  constructor(e) {
    const { wagmiConfig: r, siweConfig: n, chains: o, defaultChain: i, tokens: s, _sdkVersion: a, ...c } = e;
    if (!r)
      throw new Error("web3modal:constructor - wagmiConfig is undefined");
    if (!c.projectId)
      throw new Error("web3modal:constructor - projectId is undefined");
    if (!r.connectors.find((p) => p.id === we.WALLET_CONNECT_CONNECTOR_ID))
      throw new Error("web3modal:constructor - WalletConnectConnector is required");
    const l = {
      switchCaipNetwork: async (p) => {
        const g = yn.caipNetworkIdToNumber(p == null ? void 0 : p.id);
        g && await Vw({ chainId: g });
      },
      async getApprovedCaipNetworksData() {
        var g, w, m, v;
        const p = localStorage.getItem(e6);
        if (p != null && p.includes(we.WALLET_CONNECT_CONNECTOR_ID)) {
          const _ = r.connectors.find((E) => E.id === we.WALLET_CONNECT_CONNECTOR_ID);
          if (!_)
            throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
          const y = (w = (g = (await _.getProvider()).signer) == null ? void 0 : g.session) == null ? void 0 : w.namespaces, C = (m = y == null ? void 0 : y[we.EIP155]) == null ? void 0 : m.methods, x = (v = y == null ? void 0 : y[we.EIP155]) == null ? void 0 : v.chains;
          return {
            supportsAllNetworks: C == null ? void 0 : C.includes(we.ADD_CHAIN_METHOD),
            approvedCaipNetworkIds: x
          };
        }
        return { approvedCaipNetworkIds: void 0, supportsAllNetworks: !0 };
      }
    }, f = {
      connectWalletConnect: async (p) => {
        var m;
        const g = r.connectors.find((v) => v.id === we.WALLET_CONNECT_CONNECTOR_ID);
        if (!g)
          throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
        g.on("message", (v) => {
          v.type === "display_uri" && (p(v.data), g.removeAllListeners());
        });
        const w = yn.caipNetworkIdToNumber((m = this.getCaipNetwork()) == null ? void 0 : m.id);
        await Wu({ connector: g, chainId: w });
      },
      connectExternal: async ({ id: p, provider: g, info: w }) => {
        var _, D;
        const m = r.connectors.find((y) => y.id === p);
        if (!m)
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        g && w && m.id === we.EIP6963_CONNECTOR_ID && ((_ = m.setEip6963Wallet) == null || _.call(m, { provider: g, info: w }));
        const v = yn.caipNetworkIdToNumber((D = this.getCaipNetwork()) == null ? void 0 : D.id);
        await Wu({ connector: m, chainId: v });
      },
      checkInstalled: (p) => {
        const g = this.getConnectors().filter((m) => m.type === "ANNOUNCED"), w = this.getConnectors().find((m) => m.type === "INJECTED");
        return p ? g.length && p.some((v) => g.some((_) => {
          var D;
          return ((D = _.info) == null ? void 0 : D.rdns) === v;
        })) ? !0 : w && window != null && window.ethereum ? p.some((m) => {
          var v;
          return !!((v = window.ethereum) != null && v[String(m)]);
        }) : !1 : !!window.ethereum;
      },
      disconnect: jw
    };
    super({
      networkControllerClient: l,
      connectionControllerClient: f,
      siweControllerClient: n,
      defaultChain: Q5(i),
      tokens: yn.getCaipTokens(s),
      _sdkVersion: a ?? `html-wagmi-${we.VERSION}`,
      ...c
    }), this.hasSyncedConnectedAccount = !1, this.options = void 0, this.options = e, this.syncRequestedNetworks(o), this.syncConnectors(r), this.listenConnectors(r), Zw(() => this.syncAccount()), Kw(() => this.syncNetwork());
  }
  getState() {
    const e = super.getState();
    return {
      ...e,
      selectedNetworkId: yn.caipNetworkIdToNumber(e.selectedNetworkId)
    };
  }
  subscribeState(e) {
    return super.subscribeState((r) => e({
      ...r,
      selectedNetworkId: yn.caipNetworkIdToNumber(r.selectedNetworkId)
    }));
  }
  syncRequestedNetworks(e) {
    const r = e == null ? void 0 : e.map((n) => {
      var o, i;
      return {
        id: `${we.EIP155}:${n.id}`,
        name: n.name,
        imageId: Vr.EIP155NetworkImageIds[n.id],
        imageUrl: (i = (o = this.options) == null ? void 0 : o.chainImages) == null ? void 0 : i[n.id]
      };
    });
    this.setRequestedCaipNetworks(r ?? []);
  }
  async syncAccount() {
    const { address: e, isConnected: r } = Dc(), { chain: n } = Pc();
    if (this.resetAccount(), r && e && n) {
      const o = `${we.EIP155}:${n.id}:${e}`;
      this.setIsConnected(r), this.setCaipAddress(o), await Promise.all([
        this.syncProfile(e),
        this.syncBalance(e, n),
        this.getApprovedCaipNetworksData()
      ]), this.hasSyncedConnectedAccount = !0;
    } else
      !r && this.hasSyncedConnectedAccount && (this.resetWcConnection(), this.resetNetwork());
  }
  async syncNetwork() {
    var o, i, s, a;
    const { address: e, isConnected: r } = Dc(), { chain: n } = Pc();
    if (n) {
      const c = String(n.id), l = `${we.EIP155}:${c}`;
      if (this.setCaipNetwork({
        id: l,
        name: n.name,
        imageId: Vr.EIP155NetworkImageIds[n.id],
        imageUrl: (i = (o = this.options) == null ? void 0 : o.chainImages) == null ? void 0 : i[n.id]
      }), r && e) {
        const f = `${we.EIP155}:${n.id}:${e}`;
        if (this.setCaipAddress(f), (a = (s = n.blockExplorers) == null ? void 0 : s.default) != null && a.url) {
          const p = `${n.blockExplorers.default.url}/address/${e}`;
          this.setAddressExplorerUrl(p);
        } else
          this.setAddressExplorerUrl(void 0);
        this.hasSyncedConnectedAccount && await this.syncBalance(e, n);
      }
    }
  }
  async syncProfile(e) {
    try {
      const { name: r, avatar: n } = await this.fetchIdentity({
        caipChainId: `${we.EIP155}:${Si.id}`,
        address: e
      });
      this.setProfileName(r), this.setProfileImage(n);
    } catch {
      const r = await Jw({ address: e, chainId: Si.id });
      if (r) {
        this.setProfileName(r);
        const n = await Yw({ name: r, chainId: Si.id });
        n && this.setProfileImage(n);
      }
    }
  }
  async syncBalance(e, r) {
    var o, i, s;
    const n = await Gw({
      address: e,
      chainId: r.id,
      token: (s = (i = (o = this.options) == null ? void 0 : o.tokens) == null ? void 0 : i[r.id]) == null ? void 0 : s.address
    });
    this.setBalance(n.formatted, n.symbol);
  }
  syncConnectors(e) {
    const r = [];
    e.connectors.forEach(({ id: n, name: o }) => {
      var i, s;
      n !== we.EIP6963_CONNECTOR_ID && r.push({
        id: n,
        explorerId: Vr.ConnectorExplorerIds[n],
        imageId: Vr.ConnectorImageIds[n],
        imageUrl: (s = (i = this.options) == null ? void 0 : i.connectorImages) == null ? void 0 : s[n],
        name: Vr.ConnectorNamesMap[n] ?? o,
        type: Vr.ConnectorTypesMap[n] ?? "EXTERNAL"
      });
    }), this.setConnectors(r);
  }
  eip6963EventHandler(e, r) {
    var n, o;
    if (r.detail) {
      const { info: i, provider: s } = r.detail;
      this.getConnectors().find((l) => l.name === i.name) || (this.addConnector({
        id: we.EIP6963_CONNECTOR_ID,
        type: "ANNOUNCED",
        imageUrl: i.icon ?? ((o = (n = this.options) == null ? void 0 : n.connectorImages) == null ? void 0 : o[we.EIP6963_CONNECTOR_ID]),
        name: i.name,
        provider: s,
        info: i
      }), e.isAuthorized({ info: i, provider: s }));
    }
  }
  listenConnectors(e) {
    const r = e.connectors.find((n) => n.id === we.EIP6963_CONNECTOR_ID);
    if (typeof window < "u" && r) {
      const n = this.eip6963EventHandler.bind(this, r);
      window.addEventListener(we.EIP6963_ANNOUNCE_EVENT, n), window.dispatchEvent(new Event(we.EIP6963_REQUEST_EVENT));
    }
  }
}
var Yo = function(t, e, r, n, o) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !o)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !o : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? o.call(t, r) : o ? o.value = r : e.set(t, r), r;
}, Jo = function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, rs, pr;
const Qa = "connectedRdns";
class r6 extends Ll {
  constructor(e) {
    super({ chains: e.chains, options: { shimDisconnect: !0 } }), this.id = "eip6963", this.name = "EIP6963", rs.set(this, void 0), pr.set(this, void 0), Yo(this, rs, this.options.getProvider(), "f");
  }
  async connect(e) {
    var n;
    const r = await super.connect(e);
    return Jo(this, pr, "f") && ((n = this.storage) == null || n.setItem(Qa, Jo(this, pr, "f").info.rdns)), r;
  }
  async disconnect() {
    var e;
    await super.disconnect(), (e = this.storage) == null || e.removeItem(Qa), Yo(this, pr, void 0, "f");
  }
  async isAuthorized(e) {
    var n;
    const r = (n = this.storage) == null ? void 0 : n.getItem(Qa);
    if (r) {
      if (!e || r !== e.info.rdns)
        return !0;
      Yo(this, pr, e, "f");
    }
    return super.isAuthorized();
  }
  async getProvider() {
    var e;
    return Promise.resolve(((e = Jo(this, pr, "f")) == null ? void 0 : e.provider) ?? Jo(this, rs, "f"));
  }
  setEip6963Wallet(e) {
    Yo(this, pr, e, "f");
  }
}
rs = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap();
var fh = {}, va = {};
va.byteLength = o6;
va.toByteArray = a6;
va.fromByteArray = u6;
var Wt = [], Et = [], n6 = typeof Uint8Array < "u" ? Uint8Array : Array, ec = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vn = 0, i6 = ec.length; vn < i6; ++vn)
  Wt[vn] = ec[vn], Et[ec.charCodeAt(vn)] = vn;
Et[45] = 62;
Et[95] = 63;
function hh(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function o6(t) {
  var e = hh(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function s6(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function a6(t) {
  var e, r = hh(t), n = r[0], o = r[1], i = new n6(s6(t, n, o)), s = 0, a = o > 0 ? n - 4 : n, c;
  for (c = 0; c < a; c += 4)
    e = Et[t.charCodeAt(c)] << 18 | Et[t.charCodeAt(c + 1)] << 12 | Et[t.charCodeAt(c + 2)] << 6 | Et[t.charCodeAt(c + 3)], i[s++] = e >> 16 & 255, i[s++] = e >> 8 & 255, i[s++] = e & 255;
  return o === 2 && (e = Et[t.charCodeAt(c)] << 2 | Et[t.charCodeAt(c + 1)] >> 4, i[s++] = e & 255), o === 1 && (e = Et[t.charCodeAt(c)] << 10 | Et[t.charCodeAt(c + 1)] << 4 | Et[t.charCodeAt(c + 2)] >> 2, i[s++] = e >> 8 & 255, i[s++] = e & 255), i;
}
function c6(t) {
  return Wt[t >> 18 & 63] + Wt[t >> 12 & 63] + Wt[t >> 6 & 63] + Wt[t & 63];
}
function l6(t, e, r) {
  for (var n, o = [], i = e; i < r; i += 3)
    n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (t[i + 2] & 255), o.push(c6(n));
  return o.join("");
}
function u6(t) {
  for (var e, r = t.length, n = r % 3, o = [], i = 16383, s = 0, a = r - n; s < a; s += i)
    o.push(l6(t, s, s + i > a ? a : s + i));
  return n === 1 ? (e = t[r - 1], o.push(
    Wt[e >> 2] + Wt[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], o.push(
    Wt[e >> 10] + Wt[e >> 4 & 63] + Wt[e << 2 & 63] + "="
  )), o.join("");
}
var du = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
du.read = function(t, e, r, n, o) {
  var i, s, a = o * 8 - n - 1, c = (1 << a) - 1, l = c >> 1, f = -7, p = r ? o - 1 : 0, g = r ? -1 : 1, w = t[e + p];
  for (p += g, i = w & (1 << -f) - 1, w >>= -f, f += a; f > 0; i = i * 256 + t[e + p], p += g, f -= 8)
    ;
  for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = s * 256 + t[e + p], p += g, f -= 8)
    ;
  if (i === 0)
    i = 1 - l;
  else {
    if (i === c)
      return s ? NaN : (w ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), i = i - l;
  }
  return (w ? -1 : 1) * s * Math.pow(2, i - n);
};
du.write = function(t, e, r, n, o, i) {
  var s, a, c, l = i * 8 - o - 1, f = (1 << l) - 1, p = f >> 1, g = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = n ? 0 : i - 1, m = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + p >= 1 ? e += g / c : e += g * Math.pow(2, 1 - p), e * c >= 2 && (s++, c /= 2), s + p >= f ? (a = 0, s = f) : s + p >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s = s + p) : (a = e * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + w] = a & 255, w += m, a /= 256, o -= 8)
    ;
  for (s = s << o | a, l += o; l > 0; t[r + w] = s & 255, w += m, s /= 256, l -= 8)
    ;
  t[r + w - m] |= v * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = va, r = du, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = y, t.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  t.kMaxLength = o, a.TYPED_ARRAY_SUPPORT = i(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const b = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(b, u), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(b) {
    if (b > o)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const u = new Uint8Array(b);
    return Object.setPrototypeOf(u, a.prototype), u;
  }
  function a(b, u, h) {
    if (typeof b == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return p(b);
    }
    return c(b, u, h);
  }
  a.poolSize = 8192;
  function c(b, u, h) {
    if (typeof b == "string")
      return g(b, u);
    if (ArrayBuffer.isView(b))
      return m(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (Pe(b, ArrayBuffer) || b && Pe(b.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Pe(b, SharedArrayBuffer) || b && Pe(b.buffer, SharedArrayBuffer)))
      return v(b, u, h);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const $ = b.valueOf && b.valueOf();
    if ($ != null && $ !== b)
      return a.from($, u, h);
    const P = _(b);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return a.from(b[Symbol.toPrimitive]("string"), u, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  a.from = function(b, u, h) {
    return c(b, u, h);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function l(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function f(b, u, h) {
    return l(b), b <= 0 ? s(b) : u !== void 0 ? typeof h == "string" ? s(b).fill(u, h) : s(b).fill(u) : s(b);
  }
  a.alloc = function(b, u, h) {
    return f(b, u, h);
  };
  function p(b) {
    return l(b), s(b < 0 ? 0 : D(b) | 0);
  }
  a.allocUnsafe = function(b) {
    return p(b);
  }, a.allocUnsafeSlow = function(b) {
    return p(b);
  };
  function g(b, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const h = C(b, u) | 0;
    let $ = s(h);
    const P = $.write(b, u);
    return P !== h && ($ = $.slice(0, P)), $;
  }
  function w(b) {
    const u = b.length < 0 ? 0 : D(b.length) | 0, h = s(u);
    for (let $ = 0; $ < u; $ += 1)
      h[$] = b[$] & 255;
    return h;
  }
  function m(b) {
    if (Pe(b, Uint8Array)) {
      const u = new Uint8Array(b);
      return v(u.buffer, u.byteOffset, u.byteLength);
    }
    return w(b);
  }
  function v(b, u, h) {
    if (u < 0 || b.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < u + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let $;
    return u === void 0 && h === void 0 ? $ = new Uint8Array(b) : h === void 0 ? $ = new Uint8Array(b, u) : $ = new Uint8Array(b, u, h), Object.setPrototypeOf($, a.prototype), $;
  }
  function _(b) {
    if (a.isBuffer(b)) {
      const u = D(b.length) | 0, h = s(u);
      return h.length === 0 || b.copy(h, 0, 0, u), h;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || je(b.length) ? s(0) : w(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return w(b.data);
  }
  function D(b) {
    if (b >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return b | 0;
  }
  function y(b) {
    return +b != b && (b = 0), a.alloc(+b);
  }
  a.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== a.prototype;
  }, a.compare = function(u, h) {
    if (Pe(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), Pe(h, Uint8Array) && (h = a.from(h, h.offset, h.byteLength)), !a.isBuffer(u) || !a.isBuffer(h))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === h)
      return 0;
    let $ = u.length, P = h.length;
    for (let I = 0, R = Math.min($, P); I < R; ++I)
      if (u[I] !== h[I]) {
        $ = u[I], P = h[I];
        break;
      }
    return $ < P ? -1 : P < $ ? 1 : 0;
  }, a.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(u, h) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return a.alloc(0);
    let $;
    if (h === void 0)
      for (h = 0, $ = 0; $ < u.length; ++$)
        h += u[$].length;
    const P = a.allocUnsafe(h);
    let I = 0;
    for ($ = 0; $ < u.length; ++$) {
      let R = u[$];
      if (Pe(R, Uint8Array))
        I + R.length > P.length ? (a.isBuffer(R) || (R = a.from(R)), R.copy(P, I)) : Uint8Array.prototype.set.call(
          P,
          R,
          I
        );
      else if (a.isBuffer(R))
        R.copy(P, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += R.length;
    }
    return P;
  };
  function C(b, u) {
    if (a.isBuffer(b))
      return b.length;
    if (ArrayBuffer.isView(b) || Pe(b, ArrayBuffer))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const h = b.length, $ = arguments.length > 2 && arguments[2] === !0;
    if (!$ && h === 0)
      return 0;
    let P = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return fr(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return qe(b).length;
        default:
          if (P)
            return $ ? -1 : fr(b).length;
          u = ("" + u).toLowerCase(), P = !0;
      }
  }
  a.byteLength = C;
  function x(b, u, h) {
    let $ = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, u >>>= 0, h <= u))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return Z(this, u, h);
        case "utf8":
        case "utf-8":
          return W(this, u, h);
        case "ascii":
          return M(this, u, h);
        case "latin1":
        case "binary":
          return L(this, u, h);
        case "base64":
          return J(this, u, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, u, h);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), $ = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function E(b, u, h) {
    const $ = b[u];
    b[u] = b[h], b[h] = $;
  }
  a.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < u; h += 2)
      E(this, h, h + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < u; h += 4)
      E(this, h, h + 3), E(this, h + 1, h + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < u; h += 8)
      E(this, h, h + 7), E(this, h + 1, h + 6), E(this, h + 2, h + 5), E(this, h + 3, h + 4);
    return this;
  }, a.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? W(this, 0, u) : x.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(u) {
    if (!a.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : a.compare(this, u) === 0;
  }, a.prototype.inspect = function() {
    let u = "";
    const h = t.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (u += " ... "), "<Buffer " + u + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(u, h, $, P, I) {
    if (Pe(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (h === void 0 && (h = 0), $ === void 0 && ($ = u ? u.length : 0), P === void 0 && (P = 0), I === void 0 && (I = this.length), h < 0 || $ > u.length || P < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (P >= I && h >= $)
      return 0;
    if (P >= I)
      return -1;
    if (h >= $)
      return 1;
    if (h >>>= 0, $ >>>= 0, P >>>= 0, I >>>= 0, this === u)
      return 0;
    let R = I - P, ee = $ - h;
    const me = Math.min(R, ee), ke = this.slice(P, I), Me = u.slice(h, $);
    for (let Ie = 0; Ie < me; ++Ie)
      if (ke[Ie] !== Me[Ie]) {
        R = ke[Ie], ee = Me[Ie];
        break;
      }
    return R < ee ? -1 : ee < R ? 1 : 0;
  };
  function A(b, u, h, $, P) {
    if (b.length === 0)
      return -1;
    if (typeof h == "string" ? ($ = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, je(h) && (h = P ? 0 : b.length - 1), h < 0 && (h = b.length + h), h >= b.length) {
      if (P)
        return -1;
      h = b.length - 1;
    } else if (h < 0)
      if (P)
        h = 0;
      else
        return -1;
    if (typeof u == "string" && (u = a.from(u, $)), a.isBuffer(u))
      return u.length === 0 ? -1 : d(b, u, h, $, P);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? P ? Uint8Array.prototype.indexOf.call(b, u, h) : Uint8Array.prototype.lastIndexOf.call(b, u, h) : d(b, [u], h, $, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function d(b, u, h, $, P) {
    let I = 1, R = b.length, ee = u.length;
    if ($ !== void 0 && ($ = String($).toLowerCase(), $ === "ucs2" || $ === "ucs-2" || $ === "utf16le" || $ === "utf-16le")) {
      if (b.length < 2 || u.length < 2)
        return -1;
      I = 2, R /= 2, ee /= 2, h /= 2;
    }
    function me(Me, Ie) {
      return I === 1 ? Me[Ie] : Me.readUInt16BE(Ie * I);
    }
    let ke;
    if (P) {
      let Me = -1;
      for (ke = h; ke < R; ke++)
        if (me(b, ke) === me(u, Me === -1 ? 0 : ke - Me)) {
          if (Me === -1 && (Me = ke), ke - Me + 1 === ee)
            return Me * I;
        } else
          Me !== -1 && (ke -= ke - Me), Me = -1;
    } else
      for (h + ee > R && (h = R - ee), ke = h; ke >= 0; ke--) {
        let Me = !0;
        for (let Ie = 0; Ie < ee; Ie++)
          if (me(b, ke + Ie) !== me(u, Ie)) {
            Me = !1;
            break;
          }
        if (Me)
          return ke;
      }
    return -1;
  }
  a.prototype.includes = function(u, h, $) {
    return this.indexOf(u, h, $) !== -1;
  }, a.prototype.indexOf = function(u, h, $) {
    return A(this, u, h, $, !0);
  }, a.prototype.lastIndexOf = function(u, h, $) {
    return A(this, u, h, $, !1);
  };
  function S(b, u, h, $) {
    h = Number(h) || 0;
    const P = b.length - h;
    $ ? ($ = Number($), $ > P && ($ = P)) : $ = P;
    const I = u.length;
    $ > I / 2 && ($ = I / 2);
    let R;
    for (R = 0; R < $; ++R) {
      const ee = parseInt(u.substr(R * 2, 2), 16);
      if (je(ee))
        return R;
      b[h + R] = ee;
    }
    return R;
  }
  function O(b, u, h, $) {
    return Ue(fr(u, b.length - h), b, h, $);
  }
  function N(b, u, h, $) {
    return Ue(di(u), b, h, $);
  }
  function k(b, u, h, $) {
    return Ue(qe(u), b, h, $);
  }
  function V(b, u, h, $) {
    return Ue(Fo(u, b.length - h), b, h, $);
  }
  a.prototype.write = function(u, h, $, P) {
    if (h === void 0)
      P = "utf8", $ = this.length, h = 0;
    else if ($ === void 0 && typeof h == "string")
      P = h, $ = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite($) ? ($ = $ >>> 0, P === void 0 && (P = "utf8")) : (P = $, $ = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const I = this.length - h;
    if (($ === void 0 || $ > I) && ($ = I), u.length > 0 && ($ < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let R = !1;
    for (; ; )
      switch (P) {
        case "hex":
          return S(this, u, h, $);
        case "utf8":
        case "utf-8":
          return O(this, u, h, $);
        case "ascii":
        case "latin1":
        case "binary":
          return N(this, u, h, $);
        case "base64":
          return k(this, u, h, $);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return V(this, u, h, $);
        default:
          if (R)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), R = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function J(b, u, h) {
    return u === 0 && h === b.length ? e.fromByteArray(b) : e.fromByteArray(b.slice(u, h));
  }
  function W(b, u, h) {
    h = Math.min(b.length, h);
    const $ = [];
    let P = u;
    for (; P < h; ) {
      const I = b[P];
      let R = null, ee = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (P + ee <= h) {
        let me, ke, Me, Ie;
        switch (ee) {
          case 1:
            I < 128 && (R = I);
            break;
          case 2:
            me = b[P + 1], (me & 192) === 128 && (Ie = (I & 31) << 6 | me & 63, Ie > 127 && (R = Ie));
            break;
          case 3:
            me = b[P + 1], ke = b[P + 2], (me & 192) === 128 && (ke & 192) === 128 && (Ie = (I & 15) << 12 | (me & 63) << 6 | ke & 63, Ie > 2047 && (Ie < 55296 || Ie > 57343) && (R = Ie));
            break;
          case 4:
            me = b[P + 1], ke = b[P + 2], Me = b[P + 3], (me & 192) === 128 && (ke & 192) === 128 && (Me & 192) === 128 && (Ie = (I & 15) << 18 | (me & 63) << 12 | (ke & 63) << 6 | Me & 63, Ie > 65535 && Ie < 1114112 && (R = Ie));
        }
      }
      R === null ? (R = 65533, ee = 1) : R > 65535 && (R -= 65536, $.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), $.push(R), P += ee;
    }
    return B($);
  }
  const U = 4096;
  function B(b) {
    const u = b.length;
    if (u <= U)
      return String.fromCharCode.apply(String, b);
    let h = "", $ = 0;
    for (; $ < u; )
      h += String.fromCharCode.apply(
        String,
        b.slice($, $ += U)
      );
    return h;
  }
  function M(b, u, h) {
    let $ = "";
    h = Math.min(b.length, h);
    for (let P = u; P < h; ++P)
      $ += String.fromCharCode(b[P] & 127);
    return $;
  }
  function L(b, u, h) {
    let $ = "";
    h = Math.min(b.length, h);
    for (let P = u; P < h; ++P)
      $ += String.fromCharCode(b[P]);
    return $;
  }
  function Z(b, u, h) {
    const $ = b.length;
    (!u || u < 0) && (u = 0), (!h || h < 0 || h > $) && (h = $);
    let P = "";
    for (let I = u; I < h; ++I)
      P += Ye[b[I]];
    return P;
  }
  function Y(b, u, h) {
    const $ = b.slice(u, h);
    let P = "";
    for (let I = 0; I < $.length - 1; I += 2)
      P += String.fromCharCode($[I] + $[I + 1] * 256);
    return P;
  }
  a.prototype.slice = function(u, h) {
    const $ = this.length;
    u = ~~u, h = h === void 0 ? $ : ~~h, u < 0 ? (u += $, u < 0 && (u = 0)) : u > $ && (u = $), h < 0 ? (h += $, h < 0 && (h = 0)) : h > $ && (h = $), h < u && (h = u);
    const P = this.subarray(u, h);
    return Object.setPrototypeOf(P, a.prototype), P;
  };
  function K(b, u, h) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + u > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(u, h, $) {
    u = u >>> 0, h = h >>> 0, $ || K(u, h, this.length);
    let P = this[u], I = 1, R = 0;
    for (; ++R < h && (I *= 256); )
      P += this[u + R] * I;
    return P;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(u, h, $) {
    u = u >>> 0, h = h >>> 0, $ || K(u, h, this.length);
    let P = this[u + --h], I = 1;
    for (; h > 0 && (I *= 256); )
      P += this[u + --h] * I;
    return P;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(u, h) {
    return u = u >>> 0, h || K(u, 1, this.length), this[u];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(u, h) {
    return u = u >>> 0, h || K(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(u, h) {
    return u = u >>> 0, h || K(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, a.prototype.readBigUInt64LE = Ne(function(u) {
    u = u >>> 0, ye(u, "offset");
    const h = this[u], $ = this[u + 7];
    (h === void 0 || $ === void 0) && bt(u, this.length - 8);
    const P = h + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, I = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + $ * 2 ** 24;
    return BigInt(P) + (BigInt(I) << BigInt(32));
  }), a.prototype.readBigUInt64BE = Ne(function(u) {
    u = u >>> 0, ye(u, "offset");
    const h = this[u], $ = this[u + 7];
    (h === void 0 || $ === void 0) && bt(u, this.length - 8);
    const P = h * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], I = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + $;
    return (BigInt(P) << BigInt(32)) + BigInt(I);
  }), a.prototype.readIntLE = function(u, h, $) {
    u = u >>> 0, h = h >>> 0, $ || K(u, h, this.length);
    let P = this[u], I = 1, R = 0;
    for (; ++R < h && (I *= 256); )
      P += this[u + R] * I;
    return I *= 128, P >= I && (P -= Math.pow(2, 8 * h)), P;
  }, a.prototype.readIntBE = function(u, h, $) {
    u = u >>> 0, h = h >>> 0, $ || K(u, h, this.length);
    let P = h, I = 1, R = this[u + --P];
    for (; P > 0 && (I *= 256); )
      R += this[u + --P] * I;
    return I *= 128, R >= I && (R -= Math.pow(2, 8 * h)), R;
  }, a.prototype.readInt8 = function(u, h) {
    return u = u >>> 0, h || K(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, a.prototype.readInt16LE = function(u, h) {
    u = u >>> 0, h || K(u, 2, this.length);
    const $ = this[u] | this[u + 1] << 8;
    return $ & 32768 ? $ | 4294901760 : $;
  }, a.prototype.readInt16BE = function(u, h) {
    u = u >>> 0, h || K(u, 2, this.length);
    const $ = this[u + 1] | this[u] << 8;
    return $ & 32768 ? $ | 4294901760 : $;
  }, a.prototype.readInt32LE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, a.prototype.readInt32BE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, a.prototype.readBigInt64LE = Ne(function(u) {
    u = u >>> 0, ye(u, "offset");
    const h = this[u], $ = this[u + 7];
    (h === void 0 || $ === void 0) && bt(u, this.length - 8);
    const P = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + ($ << 24);
    return (BigInt(P) << BigInt(32)) + BigInt(h + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), a.prototype.readBigInt64BE = Ne(function(u) {
    u = u >>> 0, ye(u, "offset");
    const h = this[u], $ = this[u + 7];
    (h === void 0 || $ === void 0) && bt(u, this.length - 8);
    const P = (h << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(P) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + $);
  }), a.prototype.readFloatLE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), r.read(this, u, !0, 23, 4);
  }, a.prototype.readFloatBE = function(u, h) {
    return u = u >>> 0, h || K(u, 4, this.length), r.read(this, u, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(u, h) {
    return u = u >>> 0, h || K(u, 8, this.length), r.read(this, u, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(u, h) {
    return u = u >>> 0, h || K(u, 8, this.length), r.read(this, u, !1, 52, 8);
  };
  function X(b, u, h, $, P, I) {
    if (!a.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > P || u < I)
      throw new RangeError('"value" argument is out of bounds');
    if (h + $ > b.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(u, h, $, P) {
    if (u = +u, h = h >>> 0, $ = $ >>> 0, !P) {
      const ee = Math.pow(2, 8 * $) - 1;
      X(this, u, h, $, ee, 0);
    }
    let I = 1, R = 0;
    for (this[h] = u & 255; ++R < $ && (I *= 256); )
      this[h + R] = u / I & 255;
    return h + $;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(u, h, $, P) {
    if (u = +u, h = h >>> 0, $ = $ >>> 0, !P) {
      const ee = Math.pow(2, 8 * $) - 1;
      X(this, u, h, $, ee, 0);
    }
    let I = $ - 1, R = 1;
    for (this[h + I] = u & 255; --I >= 0 && (R *= 256); )
      this[h + I] = u / R & 255;
    return h + $;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 1, 255, 0), this[h] = u & 255, h + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 2, 65535, 0), this[h] = u & 255, this[h + 1] = u >>> 8, h + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 2, 65535, 0), this[h] = u >>> 8, this[h + 1] = u & 255, h + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 4, 4294967295, 0), this[h + 3] = u >>> 24, this[h + 2] = u >>> 16, this[h + 1] = u >>> 8, this[h] = u & 255, h + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 4, 4294967295, 0), this[h] = u >>> 24, this[h + 1] = u >>> 16, this[h + 2] = u >>> 8, this[h + 3] = u & 255, h + 4;
  };
  function z(b, u, h, $, P) {
    xe(u, $, P, b, h, 7);
    let I = Number(u & BigInt(4294967295));
    b[h++] = I, I = I >> 8, b[h++] = I, I = I >> 8, b[h++] = I, I = I >> 8, b[h++] = I;
    let R = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[h++] = R, R = R >> 8, b[h++] = R, R = R >> 8, b[h++] = R, R = R >> 8, b[h++] = R, h;
  }
  function Q(b, u, h, $, P) {
    xe(u, $, P, b, h, 7);
    let I = Number(u & BigInt(4294967295));
    b[h + 7] = I, I = I >> 8, b[h + 6] = I, I = I >> 8, b[h + 5] = I, I = I >> 8, b[h + 4] = I;
    let R = Number(u >> BigInt(32) & BigInt(4294967295));
    return b[h + 3] = R, R = R >> 8, b[h + 2] = R, R = R >> 8, b[h + 1] = R, R = R >> 8, b[h] = R, h + 8;
  }
  a.prototype.writeBigUInt64LE = Ne(function(u, h = 0) {
    return z(this, u, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = Ne(function(u, h = 0) {
    return Q(this, u, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(u, h, $, P) {
    if (u = +u, h = h >>> 0, !P) {
      const me = Math.pow(2, 8 * $ - 1);
      X(this, u, h, $, me - 1, -me);
    }
    let I = 0, R = 1, ee = 0;
    for (this[h] = u & 255; ++I < $ && (R *= 256); )
      u < 0 && ee === 0 && this[h + I - 1] !== 0 && (ee = 1), this[h + I] = (u / R >> 0) - ee & 255;
    return h + $;
  }, a.prototype.writeIntBE = function(u, h, $, P) {
    if (u = +u, h = h >>> 0, !P) {
      const me = Math.pow(2, 8 * $ - 1);
      X(this, u, h, $, me - 1, -me);
    }
    let I = $ - 1, R = 1, ee = 0;
    for (this[h + I] = u & 255; --I >= 0 && (R *= 256); )
      u < 0 && ee === 0 && this[h + I + 1] !== 0 && (ee = 1), this[h + I] = (u / R >> 0) - ee & 255;
    return h + $;
  }, a.prototype.writeInt8 = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[h] = u & 255, h + 1;
  }, a.prototype.writeInt16LE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 2, 32767, -32768), this[h] = u & 255, this[h + 1] = u >>> 8, h + 2;
  }, a.prototype.writeInt16BE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 2, 32767, -32768), this[h] = u >>> 8, this[h + 1] = u & 255, h + 2;
  }, a.prototype.writeInt32LE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 4, 2147483647, -2147483648), this[h] = u & 255, this[h + 1] = u >>> 8, this[h + 2] = u >>> 16, this[h + 3] = u >>> 24, h + 4;
  }, a.prototype.writeInt32BE = function(u, h, $) {
    return u = +u, h = h >>> 0, $ || X(this, u, h, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[h] = u >>> 24, this[h + 1] = u >>> 16, this[h + 2] = u >>> 8, this[h + 3] = u & 255, h + 4;
  }, a.prototype.writeBigInt64LE = Ne(function(u, h = 0) {
    return z(this, u, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = Ne(function(u, h = 0) {
    return Q(this, u, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ie(b, u, h, $, P, I) {
    if (h + $ > b.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("Index out of range");
  }
  function de(b, u, h, $, P) {
    return u = +u, h = h >>> 0, P || ie(b, u, h, 4), r.write(b, u, h, $, 23, 4), h + 4;
  }
  a.prototype.writeFloatLE = function(u, h, $) {
    return de(this, u, h, !0, $);
  }, a.prototype.writeFloatBE = function(u, h, $) {
    return de(this, u, h, !1, $);
  };
  function fe(b, u, h, $, P) {
    return u = +u, h = h >>> 0, P || ie(b, u, h, 8), r.write(b, u, h, $, 52, 8), h + 8;
  }
  a.prototype.writeDoubleLE = function(u, h, $) {
    return fe(this, u, h, !0, $);
  }, a.prototype.writeDoubleBE = function(u, h, $) {
    return fe(this, u, h, !1, $);
  }, a.prototype.copy = function(u, h, $, P) {
    if (!a.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if ($ || ($ = 0), !P && P !== 0 && (P = this.length), h >= u.length && (h = u.length), h || (h = 0), P > 0 && P < $ && (P = $), P === $ || u.length === 0 || this.length === 0)
      return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if ($ < 0 || $ >= this.length)
      throw new RangeError("Index out of range");
    if (P < 0)
      throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), u.length - h < P - $ && (P = u.length - h + $);
    const I = P - $;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, $, P) : Uint8Array.prototype.set.call(
      u,
      this.subarray($, P),
      h
    ), I;
  }, a.prototype.fill = function(u, h, $, P) {
    if (typeof u == "string") {
      if (typeof h == "string" ? (P = h, h = 0, $ = this.length) : typeof $ == "string" && (P = $, $ = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !a.isEncoding(P))
        throw new TypeError("Unknown encoding: " + P);
      if (u.length === 1) {
        const R = u.charCodeAt(0);
        (P === "utf8" && R < 128 || P === "latin1") && (u = R);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (h < 0 || this.length < h || this.length < $)
      throw new RangeError("Out of range index");
    if ($ <= h)
      return this;
    h = h >>> 0, $ = $ === void 0 ? this.length : $ >>> 0, u || (u = 0);
    let I;
    if (typeof u == "number")
      for (I = h; I < $; ++I)
        this[I] = u;
    else {
      const R = a.isBuffer(u) ? u : a.from(u, P), ee = R.length;
      if (ee === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (I = 0; I < $ - h; ++I)
        this[I + h] = R[I % ee];
    }
    return this;
  };
  const le = {};
  function ge(b, u, h) {
    le[b] = class extends h {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
      }
      get code() {
        return b;
      }
      set code(P) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: P,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  ge(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ge(
    "ERR_INVALID_ARG_TYPE",
    function(b, u) {
      return `The "${b}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), ge(
    "ERR_OUT_OF_RANGE",
    function(b, u, h) {
      let $ = `The value of "${b}" is out of range.`, P = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? P = ae(String(h)) : typeof h == "bigint" && (P = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (P = ae(P)), P += "n"), $ += ` It must be ${u}. Received ${P}`, $;
    },
    RangeError
  );
  function ae(b) {
    let u = "", h = b.length;
    const $ = b[0] === "-" ? 1 : 0;
    for (; h >= $ + 4; h -= 3)
      u = `_${b.slice(h - 3, h)}${u}`;
    return `${b.slice(0, h)}${u}`;
  }
  function be(b, u, h) {
    ye(u, "offset"), (b[u] === void 0 || b[u + h] === void 0) && bt(u, b.length - (h + 1));
  }
  function xe(b, u, h, $, P, I) {
    if (b > h || b < u) {
      const R = typeof u == "bigint" ? "n" : "";
      let ee;
      throw I > 3 ? u === 0 || u === BigInt(0) ? ee = `>= 0${R} and < 2${R} ** ${(I + 1) * 8}${R}` : ee = `>= -(2${R} ** ${(I + 1) * 8 - 1}${R}) and < 2 ** ${(I + 1) * 8 - 1}${R}` : ee = `>= ${u}${R} and <= ${h}${R}`, new le.ERR_OUT_OF_RANGE("value", ee, b);
    }
    be($, P, I);
  }
  function ye(b, u) {
    if (typeof b != "number")
      throw new le.ERR_INVALID_ARG_TYPE(u, "number", b);
  }
  function bt(b, u, h) {
    throw Math.floor(b) !== b ? (ye(b, h), new le.ERR_OUT_OF_RANGE(h || "offset", "an integer", b)) : u < 0 ? new le.ERR_BUFFER_OUT_OF_BOUNDS() : new le.ERR_OUT_OF_RANGE(
      h || "offset",
      `>= ${h ? 1 : 0} and <= ${u}`,
      b
    );
  }
  const dr = /[^+/0-9A-Za-z-_]/g;
  function Fr(b) {
    if (b = b.split("=")[0], b = b.trim().replace(dr, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function fr(b, u) {
    u = u || 1 / 0;
    let h;
    const $ = b.length;
    let P = null;
    const I = [];
    for (let R = 0; R < $; ++R) {
      if (h = b.charCodeAt(R), h > 55295 && h < 57344) {
        if (!P) {
          if (h > 56319) {
            (u -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (R + 1 === $) {
            (u -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          P = h;
          continue;
        }
        if (h < 56320) {
          (u -= 3) > -1 && I.push(239, 191, 189), P = h;
          continue;
        }
        h = (P - 55296 << 10 | h - 56320) + 65536;
      } else
        P && (u -= 3) > -1 && I.push(239, 191, 189);
      if (P = null, h < 128) {
        if ((u -= 1) < 0)
          break;
        I.push(h);
      } else if (h < 2048) {
        if ((u -= 2) < 0)
          break;
        I.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((u -= 3) < 0)
          break;
        I.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((u -= 4) < 0)
          break;
        I.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function di(b) {
    const u = [];
    for (let h = 0; h < b.length; ++h)
      u.push(b.charCodeAt(h) & 255);
    return u;
  }
  function Fo(b, u) {
    let h, $, P;
    const I = [];
    for (let R = 0; R < b.length && !((u -= 2) < 0); ++R)
      h = b.charCodeAt(R), $ = h >> 8, P = h % 256, I.push(P), I.push($);
    return I;
  }
  function qe(b) {
    return e.toByteArray(Fr(b));
  }
  function Ue(b, u, h, $) {
    let P;
    for (P = 0; P < $ && !(P + h >= u.length || P >= b.length); ++P)
      u[P + h] = b[P];
    return P;
  }
  function Pe(b, u) {
    return b instanceof u || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === u.name;
  }
  function je(b) {
    return b !== b;
  }
  const Ye = function() {
    const b = "0123456789abcdef", u = new Array(256);
    for (let h = 0; h < 16; ++h) {
      const $ = h * 16;
      for (let P = 0; P < 16; ++P)
        u[$ + P] = b[h] + b[P];
    }
    return u;
  }();
  function Ne(b) {
    return typeof BigInt > "u" ? Je : b;
  }
  function Je() {
    throw new Error("BigInt not supported");
  }
})(fh);
var Q0;
typeof window < "u" && (window.Buffer || (window.Buffer = fh.Buffer), window.global || (window.global = window), window.process || (window.process = {}), (Q0 = window.process) != null && Q0.env || (window.process = { env: {} }));
var Ei, $n, d6 = class extends Ul {
  constructor({ chains: t, options: e }) {
    super({
      chains: t,
      options: {
        reloadOnDisconnect: !1,
        ...e
      }
    }), this.id = "coinbaseWallet", this.name = "Coinbase Wallet", this.ready = !0, ft(this, Ei, void 0), ft(this, $n, void 0), this.onAccountsChanged = (r) => {
      r.length === 0 ? this.emit("disconnect") : this.emit("change", { account: Nt(r[0]) });
    }, this.onChainChanged = (r) => {
      const n = ds(r), o = this.isChainUnsupported(n);
      this.emit("change", { chain: { id: n, unsupported: o } });
    }, this.onDisconnect = () => {
      this.emit("disconnect");
    };
  }
  async connect({ chainId: t } = {}) {
    try {
      const e = await this.getProvider();
      e.on("accountsChanged", this.onAccountsChanged), e.on("chainChanged", this.onChainChanged), e.on("disconnect", this.onDisconnect), this.emit("message", { type: "connecting" });
      const r = await e.enable(), n = Nt(r[0]);
      let o = await this.getChainId(), i = this.isChainUnsupported(o);
      return t && o !== t && (o = (await this.switchChain(t)).id, i = this.isChainUnsupported(o)), {
        account: n,
        chain: { id: o, unsupported: i }
      };
    } catch (e) {
      throw /(user closed modal|accounts received is empty)/i.test(
        e.message
      ) ? new ht(e) : e;
    }
  }
  async disconnect() {
    if (!De(this, $n))
      return;
    const t = await this.getProvider();
    t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect), t.disconnect(), t.close();
  }
  async getAccount() {
    const e = await (await this.getProvider()).request({
      method: "eth_accounts"
    });
    return Nt(e[0]);
  }
  async getChainId() {
    const t = await this.getProvider();
    return ds(t.chainId);
  }
  async getProvider() {
    var t;
    if (!De(this, $n)) {
      let e = (await import("./index-rjFlf0L6.js").then((s) => s.i)).default;
      typeof e != "function" && typeof e.default == "function" && (e = e.default), Qi(this, Ei, new e(this.options));
      const r = (t = De(this, Ei).walletExtension) == null ? void 0 : t.getChainId(), n = this.chains.find(
        (s) => this.options.chainId ? s.id === this.options.chainId : s.id === r
      ) || this.chains[0], o = this.options.chainId || (n == null ? void 0 : n.id), i = this.options.jsonRpcUrl || (n == null ? void 0 : n.rpcUrls.default.http[0]);
      Qi(this, $n, De(this, Ei).makeWeb3Provider(i, o));
    }
    return De(this, $n);
  }
  async getWalletClient({
    chainId: t
  } = {}) {
    const [e, r] = await Promise.all([
      this.getProvider(),
      this.getAccount()
    ]), n = this.chains.find((o) => o.id === t);
    if (!e)
      throw new Error("provider is required.");
    return Rl({
      account: r,
      chain: n,
      transport: Il(e)
    });
  }
  async isAuthorized() {
    try {
      return !!await this.getAccount();
    } catch {
      return !1;
    }
  }
  async switchChain(t) {
    var n;
    const e = await this.getProvider(), r = ue(t);
    try {
      return await e.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: r }]
      }), this.chains.find((o) => o.id === t) ?? {
        id: t,
        name: `Chain ${r}`,
        network: `${r}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (o) {
      const i = this.chains.find((s) => s.id === t);
      if (!i)
        throw new Jd({
          chainId: t,
          connectorId: this.id
        });
      if (o.code === 4902)
        try {
          return await e.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: r,
                chainName: i.name,
                nativeCurrency: i.nativeCurrency,
                rpcUrls: [((n = i.rpcUrls.public) == null ? void 0 : n.http[0]) ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(i)
              }
            ]
          }), i;
        } catch (s) {
          throw new ht(s);
        }
      throw new rr(o);
    }
  }
  async watchAsset({
    address: t,
    decimals: e = 18,
    image: r,
    symbol: n
  }) {
    return (await this.getProvider()).request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: t,
          decimals: e,
          image: r,
          symbol: n
        }
      }
    });
  }
};
Ei = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
var f6 = {}, xa = {}, pe = {}, ph = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, c) {
    var l = a >>> 16 & 65535, f = a & 65535, p = c >>> 16 & 65535, g = c & 65535;
    return f * g + (l * g + f * p << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(a, c) {
    return a + c | 0;
  }
  t.add = r;
  function n(a, c) {
    return a - c | 0;
  }
  t.sub = n;
  function o(a, c) {
    return a << c | a >>> 32 - c;
  }
  t.rotl = o;
  function i(a, c) {
    return a << 32 - c | a >>> c;
  }
  t.rotr = i;
  function s(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || s, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(ph);
Object.defineProperty(pe, "__esModule", { value: !0 });
var gh = ph;
function h6(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
pe.readInt16BE = h6;
function p6(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
pe.readUint16BE = p6;
function g6(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
pe.readInt16LE = g6;
function w6(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
pe.readUint16LE = w6;
function wh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
pe.writeUint16BE = wh;
pe.writeInt16BE = wh;
function mh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
pe.writeUint16LE = mh;
pe.writeInt16LE = mh;
function Vc(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
pe.readInt32BE = Vc;
function Zc(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
pe.readUint32BE = Zc;
function Kc(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
pe.readInt32LE = Kc;
function Yc(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
pe.readUint32LE = Yc;
function Bs(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
pe.writeUint32BE = Bs;
pe.writeInt32BE = Bs;
function Ms(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
pe.writeUint32LE = Ms;
pe.writeInt32LE = Ms;
function m6(t, e) {
  e === void 0 && (e = 0);
  var r = Vc(t, e), n = Vc(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
pe.readInt64BE = m6;
function b6(t, e) {
  e === void 0 && (e = 0);
  var r = Zc(t, e), n = Zc(t, e + 4);
  return r * 4294967296 + n;
}
pe.readUint64BE = b6;
function y6(t, e) {
  e === void 0 && (e = 0);
  var r = Kc(t, e), n = Kc(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
pe.readInt64LE = y6;
function v6(t, e) {
  e === void 0 && (e = 0);
  var r = Yc(t, e), n = Yc(t, e + 4);
  return n * 4294967296 + r;
}
pe.readUint64LE = v6;
function bh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Bs(t / 4294967296 >>> 0, e, r), Bs(t >>> 0, e, r + 4), e;
}
pe.writeUint64BE = bh;
pe.writeInt64BE = bh;
function yh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Ms(t >>> 0, e, r), Ms(t / 4294967296 >>> 0, e, r + 4), e;
}
pe.writeUint64LE = yh;
pe.writeInt64LE = yh;
function x6(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, o = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * o, o *= 256;
  return n;
}
pe.readUintBE = x6;
function C6(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, o = 1, i = r; i < r + t / 8; i++)
    n += e[i] * o, o *= 256;
  return n;
}
pe.readUintLE = C6;
function _6(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!gh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / o & 255, o *= 256;
  return r;
}
pe.writeUintBE = _6;
function E6(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!gh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, i = n; i < n + t / 8; i++)
    r[i] = e / o & 255, o *= 256;
  return r;
}
pe.writeUintLE = E6;
function $6(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
pe.readFloat32BE = $6;
function A6(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
pe.readFloat32LE = A6;
function S6(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
pe.readFloat64BE = S6;
function D6(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
pe.readFloat64LE = D6;
function P6(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
pe.writeFloat32BE = P6;
function I6(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
pe.writeFloat32LE = I6;
function T6(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
pe.writeFloat64BE = T6;
function O6(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
pe.writeFloat64LE = O6;
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
function N6(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
Mt.wipe = N6;
Object.defineProperty(xa, "__esModule", { value: !0 });
var it = pe, Jc = Mt, k6 = 20;
function R6(t, e, r) {
  for (var n = 1634760805, o = 857760878, i = 2036477234, s = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], p = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], g = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], w = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], m = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], v = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], _ = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], D = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], y = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], C = n, x = o, E = i, A = s, d = a, S = c, O = l, N = f, k = p, V = g, J = w, W = m, U = v, B = _, M = D, L = y, Z = 0; Z < k6; Z += 2)
    C = C + d | 0, U ^= C, U = U >>> 16 | U << 16, k = k + U | 0, d ^= k, d = d >>> 20 | d << 12, x = x + S | 0, B ^= x, B = B >>> 16 | B << 16, V = V + B | 0, S ^= V, S = S >>> 20 | S << 12, E = E + O | 0, M ^= E, M = M >>> 16 | M << 16, J = J + M | 0, O ^= J, O = O >>> 20 | O << 12, A = A + N | 0, L ^= A, L = L >>> 16 | L << 16, W = W + L | 0, N ^= W, N = N >>> 20 | N << 12, E = E + O | 0, M ^= E, M = M >>> 24 | M << 8, J = J + M | 0, O ^= J, O = O >>> 25 | O << 7, A = A + N | 0, L ^= A, L = L >>> 24 | L << 8, W = W + L | 0, N ^= W, N = N >>> 25 | N << 7, x = x + S | 0, B ^= x, B = B >>> 24 | B << 8, V = V + B | 0, S ^= V, S = S >>> 25 | S << 7, C = C + d | 0, U ^= C, U = U >>> 24 | U << 8, k = k + U | 0, d ^= k, d = d >>> 25 | d << 7, C = C + S | 0, L ^= C, L = L >>> 16 | L << 16, J = J + L | 0, S ^= J, S = S >>> 20 | S << 12, x = x + O | 0, U ^= x, U = U >>> 16 | U << 16, W = W + U | 0, O ^= W, O = O >>> 20 | O << 12, E = E + N | 0, B ^= E, B = B >>> 16 | B << 16, k = k + B | 0, N ^= k, N = N >>> 20 | N << 12, A = A + d | 0, M ^= A, M = M >>> 16 | M << 16, V = V + M | 0, d ^= V, d = d >>> 20 | d << 12, E = E + N | 0, B ^= E, B = B >>> 24 | B << 8, k = k + B | 0, N ^= k, N = N >>> 25 | N << 7, A = A + d | 0, M ^= A, M = M >>> 24 | M << 8, V = V + M | 0, d ^= V, d = d >>> 25 | d << 7, x = x + O | 0, U ^= x, U = U >>> 24 | U << 8, W = W + U | 0, O ^= W, O = O >>> 25 | O << 7, C = C + S | 0, L ^= C, L = L >>> 24 | L << 8, J = J + L | 0, S ^= J, S = S >>> 25 | S << 7;
  it.writeUint32LE(C + n | 0, t, 0), it.writeUint32LE(x + o | 0, t, 4), it.writeUint32LE(E + i | 0, t, 8), it.writeUint32LE(A + s | 0, t, 12), it.writeUint32LE(d + a | 0, t, 16), it.writeUint32LE(S + c | 0, t, 20), it.writeUint32LE(O + l | 0, t, 24), it.writeUint32LE(N + f | 0, t, 28), it.writeUint32LE(k + p | 0, t, 32), it.writeUint32LE(V + g | 0, t, 36), it.writeUint32LE(J + w | 0, t, 40), it.writeUint32LE(W + m | 0, t, 44), it.writeUint32LE(U + v | 0, t, 48), it.writeUint32LE(B + _ | 0, t, 52), it.writeUint32LE(M + D | 0, t, 56), it.writeUint32LE(L + y | 0, t, 60);
}
function vh(t, e, r, n, o) {
  if (o === void 0 && (o = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var i, s;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    i = new Uint8Array(16), s = i.length - e.length, i.set(e, s);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    i = e, s = o;
  }
  for (var a = new Uint8Array(64), c = 0; c < r.length; c += 64) {
    R6(a, i, t);
    for (var l = c; l < c + 64 && l < r.length; l++)
      n[l] = r[l] ^ a[l - c];
    M6(i, 0, s);
  }
  return Jc.wipe(a), o === 0 && Jc.wipe(i), n;
}
xa.streamXOR = vh;
function B6(t, e, r, n) {
  return n === void 0 && (n = 0), Jc.wipe(r), vh(t, e, r, r, n);
}
xa.stream = B6;
function M6(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var xh = {}, jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
function U6(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
jr.select = U6;
function L6(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
jr.lessOrEqual = L6;
function Ch(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
jr.compare = Ch;
function j6(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Ch(t, e) !== 0;
}
jr.equal = j6;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = jr, r = Mt;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function s(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var c = a[0] | a[1] << 8;
        this._r[0] = c & 8191;
        var l = a[2] | a[3] << 8;
        this._r[1] = (c >>> 13 | l << 3) & 8191;
        var f = a[4] | a[5] << 8;
        this._r[2] = (l >>> 10 | f << 6) & 7939;
        var p = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | p << 9) & 8191;
        var g = a[8] | a[9] << 8;
        this._r[4] = (p >>> 4 | g << 12) & 255, this._r[5] = g >>> 1 & 8190;
        var w = a[10] | a[11] << 8;
        this._r[6] = (g >>> 14 | w << 2) & 8191;
        var m = a[12] | a[13] << 8;
        this._r[7] = (w >>> 11 | m << 5) & 8065;
        var v = a[14] | a[15] << 8;
        this._r[8] = (m >>> 8 | v << 8) & 8191, this._r[9] = v >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return s.prototype._blocks = function(a, c, l) {
        for (var f = this._fin ? 0 : 2048, p = this._h[0], g = this._h[1], w = this._h[2], m = this._h[3], v = this._h[4], _ = this._h[5], D = this._h[6], y = this._h[7], C = this._h[8], x = this._h[9], E = this._r[0], A = this._r[1], d = this._r[2], S = this._r[3], O = this._r[4], N = this._r[5], k = this._r[6], V = this._r[7], J = this._r[8], W = this._r[9]; l >= 16; ) {
          var U = a[c + 0] | a[c + 1] << 8;
          p += U & 8191;
          var B = a[c + 2] | a[c + 3] << 8;
          g += (U >>> 13 | B << 3) & 8191;
          var M = a[c + 4] | a[c + 5] << 8;
          w += (B >>> 10 | M << 6) & 8191;
          var L = a[c + 6] | a[c + 7] << 8;
          m += (M >>> 7 | L << 9) & 8191;
          var Z = a[c + 8] | a[c + 9] << 8;
          v += (L >>> 4 | Z << 12) & 8191, _ += Z >>> 1 & 8191;
          var Y = a[c + 10] | a[c + 11] << 8;
          D += (Z >>> 14 | Y << 2) & 8191;
          var K = a[c + 12] | a[c + 13] << 8;
          y += (Y >>> 11 | K << 5) & 8191;
          var X = a[c + 14] | a[c + 15] << 8;
          C += (K >>> 8 | X << 8) & 8191, x += X >>> 5 | f;
          var z = 0, Q = z;
          Q += p * E, Q += g * (5 * W), Q += w * (5 * J), Q += m * (5 * V), Q += v * (5 * k), z = Q >>> 13, Q &= 8191, Q += _ * (5 * N), Q += D * (5 * O), Q += y * (5 * S), Q += C * (5 * d), Q += x * (5 * A), z += Q >>> 13, Q &= 8191;
          var ie = z;
          ie += p * A, ie += g * E, ie += w * (5 * W), ie += m * (5 * J), ie += v * (5 * V), z = ie >>> 13, ie &= 8191, ie += _ * (5 * k), ie += D * (5 * N), ie += y * (5 * O), ie += C * (5 * S), ie += x * (5 * d), z += ie >>> 13, ie &= 8191;
          var de = z;
          de += p * d, de += g * A, de += w * E, de += m * (5 * W), de += v * (5 * J), z = de >>> 13, de &= 8191, de += _ * (5 * V), de += D * (5 * k), de += y * (5 * N), de += C * (5 * O), de += x * (5 * S), z += de >>> 13, de &= 8191;
          var fe = z;
          fe += p * S, fe += g * d, fe += w * A, fe += m * E, fe += v * (5 * W), z = fe >>> 13, fe &= 8191, fe += _ * (5 * J), fe += D * (5 * V), fe += y * (5 * k), fe += C * (5 * N), fe += x * (5 * O), z += fe >>> 13, fe &= 8191;
          var le = z;
          le += p * O, le += g * S, le += w * d, le += m * A, le += v * E, z = le >>> 13, le &= 8191, le += _ * (5 * W), le += D * (5 * J), le += y * (5 * V), le += C * (5 * k), le += x * (5 * N), z += le >>> 13, le &= 8191;
          var ge = z;
          ge += p * N, ge += g * O, ge += w * S, ge += m * d, ge += v * A, z = ge >>> 13, ge &= 8191, ge += _ * E, ge += D * (5 * W), ge += y * (5 * J), ge += C * (5 * V), ge += x * (5 * k), z += ge >>> 13, ge &= 8191;
          var ae = z;
          ae += p * k, ae += g * N, ae += w * O, ae += m * S, ae += v * d, z = ae >>> 13, ae &= 8191, ae += _ * A, ae += D * E, ae += y * (5 * W), ae += C * (5 * J), ae += x * (5 * V), z += ae >>> 13, ae &= 8191;
          var be = z;
          be += p * V, be += g * k, be += w * N, be += m * O, be += v * S, z = be >>> 13, be &= 8191, be += _ * d, be += D * A, be += y * E, be += C * (5 * W), be += x * (5 * J), z += be >>> 13, be &= 8191;
          var xe = z;
          xe += p * J, xe += g * V, xe += w * k, xe += m * N, xe += v * O, z = xe >>> 13, xe &= 8191, xe += _ * S, xe += D * d, xe += y * A, xe += C * E, xe += x * (5 * W), z += xe >>> 13, xe &= 8191;
          var ye = z;
          ye += p * W, ye += g * J, ye += w * V, ye += m * k, ye += v * N, z = ye >>> 13, ye &= 8191, ye += _ * O, ye += D * S, ye += y * d, ye += C * A, ye += x * E, z += ye >>> 13, ye &= 8191, z = (z << 2) + z | 0, z = z + Q | 0, Q = z & 8191, z = z >>> 13, ie += z, p = Q, g = ie, w = de, m = fe, v = le, _ = ge, D = ae, y = be, C = xe, x = ye, c += 16, l -= 16;
        }
        this._h[0] = p, this._h[1] = g, this._h[2] = w, this._h[3] = m, this._h[4] = v, this._h[5] = _, this._h[6] = D, this._h[7] = y, this._h[8] = C, this._h[9] = x;
      }, s.prototype.finish = function(a, c) {
        c === void 0 && (c = 0);
        var l = new Uint16Array(10), f, p, g, w;
        if (this._leftover) {
          for (w = this._leftover, this._buffer[w++] = 1; w < 16; w++)
            this._buffer[w] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, w = 2; w < 10; w++)
          this._h[w] += f, f = this._h[w] >>> 13, this._h[w] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, l[0] = this._h[0] + 5, f = l[0] >>> 13, l[0] &= 8191, w = 1; w < 10; w++)
          l[w] = this._h[w] + f, f = l[w] >>> 13, l[w] &= 8191;
        for (l[9] -= 8192, p = (f ^ 1) - 1, w = 0; w < 10; w++)
          l[w] &= p;
        for (p = ~p, w = 0; w < 10; w++)
          this._h[w] = this._h[w] & p | l[w];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, g = this._h[0] + this._pad[0], this._h[0] = g & 65535, w = 1; w < 8; w++)
          g = (this._h[w] + this._pad[w] | 0) + (g >>> 16) | 0, this._h[w] = g & 65535;
        return a[c + 0] = this._h[0] >>> 0, a[c + 1] = this._h[0] >>> 8, a[c + 2] = this._h[1] >>> 0, a[c + 3] = this._h[1] >>> 8, a[c + 4] = this._h[2] >>> 0, a[c + 5] = this._h[2] >>> 8, a[c + 6] = this._h[3] >>> 0, a[c + 7] = this._h[3] >>> 8, a[c + 8] = this._h[4] >>> 0, a[c + 9] = this._h[4] >>> 8, a[c + 10] = this._h[5] >>> 0, a[c + 11] = this._h[5] >>> 8, a[c + 12] = this._h[6] >>> 0, a[c + 13] = this._h[6] >>> 8, a[c + 14] = this._h[7] >>> 0, a[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, s.prototype.update = function(a) {
        var c = 0, l = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > l && (f = l);
          for (var p = 0; p < f; p++)
            this._buffer[this._leftover + p] = a[c + p];
          if (l -= f, c += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (f = l - l % 16, this._blocks(a, c, f), c += f, l -= f), l) {
          for (var p = 0; p < l; p++)
            this._buffer[this._leftover + p] = a[c + p];
          this._leftover += l;
        }
        return this;
      }, s.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, s.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, s;
    }()
  );
  t.Poly1305 = n;
  function o(s, a) {
    var c = new n(s);
    c.update(a);
    var l = c.digest();
    return c.clean(), l;
  }
  t.oneTimeAuth = o;
  function i(s, a) {
    return s.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(s, a);
  }
  t.equal = i;
})(xh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = xa, r = xh, n = Mt, o = pe, i = jr;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var s = new Uint8Array(16), a = (
    /** @class */
    function() {
      function c(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return c.prototype.seal = function(l, f, p, g) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var w = new Uint8Array(16);
        w.set(l, w.length - l.length);
        var m = new Uint8Array(32);
        e.stream(this._key, w, m, 4);
        var v = f.length + this.tagLength, _;
        if (g) {
          if (g.length !== v)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          _ = g;
        } else
          _ = new Uint8Array(v);
        return e.streamXOR(this._key, w, f, _, 4), this._authenticate(_.subarray(_.length - this.tagLength, _.length), m, _.subarray(0, _.length - this.tagLength), p), n.wipe(w), _;
      }, c.prototype.open = function(l, f, p, g) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var w = new Uint8Array(16);
        w.set(l, w.length - l.length);
        var m = new Uint8Array(32);
        e.stream(this._key, w, m, 4);
        var v = new Uint8Array(this.tagLength);
        if (this._authenticate(v, m, f.subarray(0, f.length - this.tagLength), p), !i.equal(v, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var _ = f.length - this.tagLength, D;
        if (g) {
          if (g.length !== _)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          D = g;
        } else
          D = new Uint8Array(_);
        return e.streamXOR(this._key, w, f.subarray(0, f.length - this.tagLength), D, 4), n.wipe(w), D;
      }, c.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, c.prototype._authenticate = function(l, f, p, g) {
        var w = new r.Poly1305(f);
        g && (w.update(g), g.length % 16 > 0 && w.update(s.subarray(g.length % 16))), w.update(p), p.length % 16 > 0 && w.update(s.subarray(p.length % 16));
        var m = new Uint8Array(8);
        g && o.writeUint64LE(g.length, m), w.update(m), o.writeUint64LE(p.length, m), w.update(m);
        for (var v = w.digest(), _ = 0; _ < v.length; _++)
          l[_] = v[_];
        w.clean(), n.wipe(v), n.wipe(m);
      }, c;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(f6);
var _h = {}, Lo = {}, fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
function F6(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
fu.isSerializableHash = F6;
Object.defineProperty(Lo, "__esModule", { value: !0 });
var jt = fu, W6 = jr, z6 = Mt, Eh = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var o = 0; o < n.length; o++)
        n[o] ^= 54;
      this._inner.update(n);
      for (var o = 0; o < n.length; o++)
        n[o] ^= 106;
      this._outer.update(n), jt.isSerializableHash(this._inner) && jt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), z6.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      jt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), jt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!jt.isSerializableHash(this._inner) || !jt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!jt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Lo.HMAC = Eh;
function H6(t, e, r) {
  var n = new Eh(t, e);
  n.update(r);
  var o = n.digest();
  return n.clean(), o;
}
Lo.hmac = H6;
Lo.equal = W6.equal;
Object.defineProperty(_h, "__esModule", { value: !0 });
var k0 = Lo, R0 = Mt, q6 = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = o;
      var i = k0.hmac(this._hash, n, r);
      this._hmac = new k0.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), n = 0; n < r.length; n++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[n] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), R0.wipe(this._buffer), R0.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), V8 = _h.HKDF = q6, $h = {}, Ca = {}, _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.BrowserRandomSource = void 0;
const B0 = 65536;
class G6 {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += B0)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, B0)));
    return r;
  }
}
_a.BrowserRandomSource = G6;
function V6(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ea = {};
const Z6 = {}, K6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z6
}, Symbol.toStringTag, { value: "Module" })), Y6 = /* @__PURE__ */ Xd(K6);
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.NodeRandomSource = void 0;
const J6 = Mt;
class X6 {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof V6 < "u") {
      const e = Y6;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const n = new Uint8Array(e);
    for (let o = 0; o < n.length; o++)
      n[o] = r[o];
    return (0, J6.wipe)(r), n;
  }
}
Ea.NodeRandomSource = X6;
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.SystemRandomSource = void 0;
const Q6 = _a, e4 = Ea;
class t4 {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Q6.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new e4.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
Ca.SystemRandomSource = t4;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ca, r = pe, n = Mt;
  t.defaultRandomSource = new e.SystemRandomSource();
  function o(l, f = t.defaultRandomSource) {
    return f.randomBytes(l);
  }
  t.randomBytes = o;
  function i(l = t.defaultRandomSource) {
    const f = o(4, l), p = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), p;
  }
  t.randomUint32 = i;
  const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(l, f = s, p = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let g = "";
    const w = f.length, m = 256 - 256 % w;
    for (; l > 0; ) {
      const v = o(Math.ceil(l * 256 / m), p);
      for (let _ = 0; _ < v.length && l > 0; _++) {
        const D = v[_];
        D < m && (g += f.charAt(D % w), l--);
      }
      (0, n.wipe)(v);
    }
    return g;
  }
  t.randomString = a;
  function c(l, f = s, p = t.defaultRandomSource) {
    const g = Math.ceil(l / (Math.log(f.length) / Math.LN2));
    return a(g, f, p);
  }
  t.randomStringForEntropy = c;
})($h);
var r4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = pe, r = Mt;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function a() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, a.prototype.update = function(c, l) {
        if (l === void 0 && (l = c.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = c[f++], l--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (f = i(this._temp, this._state, c, f, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = c[f++], l--;
        return this;
      }, a.prototype.finish = function(c) {
        if (!this._finished) {
          var l = this._bytesHashed, f = this._bufferLength, p = l / 536870912 | 0, g = l << 3, w = l % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var m = f + 1; m < w - 8; m++)
            this._buffer[m] = 0;
          e.writeUint32BE(p, this._buffer, w - 8), e.writeUint32BE(g, this._buffer, w - 4), i(this._temp, this._state, this._buffer, 0, w), this._finished = !0;
        }
        for (var m = 0; m < this.digestLength / 4; m++)
          e.writeUint32BE(this._state[m], c, m * 4);
        return this;
      }, a.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(c) {
        return this._state.set(c.state), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(c) {
        r.wipe(c.state), c.buffer && r.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
      }, a;
    }()
  );
  t.SHA256 = n;
  var o = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function i(a, c, l, f, p) {
    for (; p >= 64; ) {
      for (var g = c[0], w = c[1], m = c[2], v = c[3], _ = c[4], D = c[5], y = c[6], C = c[7], x = 0; x < 16; x++) {
        var E = f + x * 4;
        a[x] = e.readUint32BE(l, E);
      }
      for (var x = 16; x < 64; x++) {
        var A = a[x - 2], d = (A >>> 17 | A << 15) ^ (A >>> 19 | A << 13) ^ A >>> 10;
        A = a[x - 15];
        var S = (A >>> 7 | A << 25) ^ (A >>> 18 | A << 14) ^ A >>> 3;
        a[x] = (d + a[x - 7] | 0) + (S + a[x - 16] | 0);
      }
      for (var x = 0; x < 64; x++) {
        var d = (((_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7)) + (_ & D ^ ~_ & y) | 0) + (C + (o[x] + a[x] | 0) | 0) | 0, S = ((g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10)) + (g & w ^ g & m ^ w & m) | 0;
        C = y, y = D, D = _, _ = v + d | 0, v = m, m = w, w = g, g = d + S | 0;
      }
      c[0] += g, c[1] += w, c[2] += m, c[3] += v, c[4] += _, c[5] += D, c[6] += y, c[7] += C, f += 64, p -= 64;
    }
    return f;
  }
  function s(a) {
    var c = new n();
    c.update(a);
    var l = c.digest();
    return c.clean(), l;
  }
  t.hash = s;
})(r4);
var n4 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = $h, r = Mt;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(x) {
    const E = new Float64Array(16);
    if (x)
      for (let A = 0; A < x.length; A++)
        E[A] = x[A];
    return E;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const i = n([56129, 1]);
  function s(x) {
    let E = 1;
    for (let A = 0; A < 16; A++) {
      let d = x[A] + E + 65535;
      E = Math.floor(d / 65536), x[A] = d - E * 65536;
    }
    x[0] += E - 1 + 37 * (E - 1);
  }
  function a(x, E, A) {
    const d = ~(A - 1);
    for (let S = 0; S < 16; S++) {
      const O = d & (x[S] ^ E[S]);
      x[S] ^= O, E[S] ^= O;
    }
  }
  function c(x, E) {
    const A = n(), d = n();
    for (let S = 0; S < 16; S++)
      d[S] = E[S];
    s(d), s(d), s(d);
    for (let S = 0; S < 2; S++) {
      A[0] = d[0] - 65517;
      for (let N = 1; N < 15; N++)
        A[N] = d[N] - 65535 - (A[N - 1] >> 16 & 1), A[N - 1] &= 65535;
      A[15] = d[15] - 32767 - (A[14] >> 16 & 1);
      const O = A[15] >> 16 & 1;
      A[14] &= 65535, a(d, A, 1 - O);
    }
    for (let S = 0; S < 16; S++)
      x[2 * S] = d[S] & 255, x[2 * S + 1] = d[S] >> 8;
  }
  function l(x, E) {
    for (let A = 0; A < 16; A++)
      x[A] = E[2 * A] + (E[2 * A + 1] << 8);
    x[15] &= 32767;
  }
  function f(x, E, A) {
    for (let d = 0; d < 16; d++)
      x[d] = E[d] + A[d];
  }
  function p(x, E, A) {
    for (let d = 0; d < 16; d++)
      x[d] = E[d] - A[d];
  }
  function g(x, E, A) {
    let d, S, O = 0, N = 0, k = 0, V = 0, J = 0, W = 0, U = 0, B = 0, M = 0, L = 0, Z = 0, Y = 0, K = 0, X = 0, z = 0, Q = 0, ie = 0, de = 0, fe = 0, le = 0, ge = 0, ae = 0, be = 0, xe = 0, ye = 0, bt = 0, dr = 0, Fr = 0, fr = 0, di = 0, Fo = 0, qe = A[0], Ue = A[1], Pe = A[2], je = A[3], Ye = A[4], Ne = A[5], Je = A[6], b = A[7], u = A[8], h = A[9], $ = A[10], P = A[11], I = A[12], R = A[13], ee = A[14], me = A[15];
    d = E[0], O += d * qe, N += d * Ue, k += d * Pe, V += d * je, J += d * Ye, W += d * Ne, U += d * Je, B += d * b, M += d * u, L += d * h, Z += d * $, Y += d * P, K += d * I, X += d * R, z += d * ee, Q += d * me, d = E[1], N += d * qe, k += d * Ue, V += d * Pe, J += d * je, W += d * Ye, U += d * Ne, B += d * Je, M += d * b, L += d * u, Z += d * h, Y += d * $, K += d * P, X += d * I, z += d * R, Q += d * ee, ie += d * me, d = E[2], k += d * qe, V += d * Ue, J += d * Pe, W += d * je, U += d * Ye, B += d * Ne, M += d * Je, L += d * b, Z += d * u, Y += d * h, K += d * $, X += d * P, z += d * I, Q += d * R, ie += d * ee, de += d * me, d = E[3], V += d * qe, J += d * Ue, W += d * Pe, U += d * je, B += d * Ye, M += d * Ne, L += d * Je, Z += d * b, Y += d * u, K += d * h, X += d * $, z += d * P, Q += d * I, ie += d * R, de += d * ee, fe += d * me, d = E[4], J += d * qe, W += d * Ue, U += d * Pe, B += d * je, M += d * Ye, L += d * Ne, Z += d * Je, Y += d * b, K += d * u, X += d * h, z += d * $, Q += d * P, ie += d * I, de += d * R, fe += d * ee, le += d * me, d = E[5], W += d * qe, U += d * Ue, B += d * Pe, M += d * je, L += d * Ye, Z += d * Ne, Y += d * Je, K += d * b, X += d * u, z += d * h, Q += d * $, ie += d * P, de += d * I, fe += d * R, le += d * ee, ge += d * me, d = E[6], U += d * qe, B += d * Ue, M += d * Pe, L += d * je, Z += d * Ye, Y += d * Ne, K += d * Je, X += d * b, z += d * u, Q += d * h, ie += d * $, de += d * P, fe += d * I, le += d * R, ge += d * ee, ae += d * me, d = E[7], B += d * qe, M += d * Ue, L += d * Pe, Z += d * je, Y += d * Ye, K += d * Ne, X += d * Je, z += d * b, Q += d * u, ie += d * h, de += d * $, fe += d * P, le += d * I, ge += d * R, ae += d * ee, be += d * me, d = E[8], M += d * qe, L += d * Ue, Z += d * Pe, Y += d * je, K += d * Ye, X += d * Ne, z += d * Je, Q += d * b, ie += d * u, de += d * h, fe += d * $, le += d * P, ge += d * I, ae += d * R, be += d * ee, xe += d * me, d = E[9], L += d * qe, Z += d * Ue, Y += d * Pe, K += d * je, X += d * Ye, z += d * Ne, Q += d * Je, ie += d * b, de += d * u, fe += d * h, le += d * $, ge += d * P, ae += d * I, be += d * R, xe += d * ee, ye += d * me, d = E[10], Z += d * qe, Y += d * Ue, K += d * Pe, X += d * je, z += d * Ye, Q += d * Ne, ie += d * Je, de += d * b, fe += d * u, le += d * h, ge += d * $, ae += d * P, be += d * I, xe += d * R, ye += d * ee, bt += d * me, d = E[11], Y += d * qe, K += d * Ue, X += d * Pe, z += d * je, Q += d * Ye, ie += d * Ne, de += d * Je, fe += d * b, le += d * u, ge += d * h, ae += d * $, be += d * P, xe += d * I, ye += d * R, bt += d * ee, dr += d * me, d = E[12], K += d * qe, X += d * Ue, z += d * Pe, Q += d * je, ie += d * Ye, de += d * Ne, fe += d * Je, le += d * b, ge += d * u, ae += d * h, be += d * $, xe += d * P, ye += d * I, bt += d * R, dr += d * ee, Fr += d * me, d = E[13], X += d * qe, z += d * Ue, Q += d * Pe, ie += d * je, de += d * Ye, fe += d * Ne, le += d * Je, ge += d * b, ae += d * u, be += d * h, xe += d * $, ye += d * P, bt += d * I, dr += d * R, Fr += d * ee, fr += d * me, d = E[14], z += d * qe, Q += d * Ue, ie += d * Pe, de += d * je, fe += d * Ye, le += d * Ne, ge += d * Je, ae += d * b, be += d * u, xe += d * h, ye += d * $, bt += d * P, dr += d * I, Fr += d * R, fr += d * ee, di += d * me, d = E[15], Q += d * qe, ie += d * Ue, de += d * Pe, fe += d * je, le += d * Ye, ge += d * Ne, ae += d * Je, be += d * b, xe += d * u, ye += d * h, bt += d * $, dr += d * P, Fr += d * I, fr += d * R, di += d * ee, Fo += d * me, O += 38 * ie, N += 38 * de, k += 38 * fe, V += 38 * le, J += 38 * ge, W += 38 * ae, U += 38 * be, B += 38 * xe, M += 38 * ye, L += 38 * bt, Z += 38 * dr, Y += 38 * Fr, K += 38 * fr, X += 38 * di, z += 38 * Fo, S = 1, d = O + S + 65535, S = Math.floor(d / 65536), O = d - S * 65536, d = N + S + 65535, S = Math.floor(d / 65536), N = d - S * 65536, d = k + S + 65535, S = Math.floor(d / 65536), k = d - S * 65536, d = V + S + 65535, S = Math.floor(d / 65536), V = d - S * 65536, d = J + S + 65535, S = Math.floor(d / 65536), J = d - S * 65536, d = W + S + 65535, S = Math.floor(d / 65536), W = d - S * 65536, d = U + S + 65535, S = Math.floor(d / 65536), U = d - S * 65536, d = B + S + 65535, S = Math.floor(d / 65536), B = d - S * 65536, d = M + S + 65535, S = Math.floor(d / 65536), M = d - S * 65536, d = L + S + 65535, S = Math.floor(d / 65536), L = d - S * 65536, d = Z + S + 65535, S = Math.floor(d / 65536), Z = d - S * 65536, d = Y + S + 65535, S = Math.floor(d / 65536), Y = d - S * 65536, d = K + S + 65535, S = Math.floor(d / 65536), K = d - S * 65536, d = X + S + 65535, S = Math.floor(d / 65536), X = d - S * 65536, d = z + S + 65535, S = Math.floor(d / 65536), z = d - S * 65536, d = Q + S + 65535, S = Math.floor(d / 65536), Q = d - S * 65536, O += S - 1 + 37 * (S - 1), S = 1, d = O + S + 65535, S = Math.floor(d / 65536), O = d - S * 65536, d = N + S + 65535, S = Math.floor(d / 65536), N = d - S * 65536, d = k + S + 65535, S = Math.floor(d / 65536), k = d - S * 65536, d = V + S + 65535, S = Math.floor(d / 65536), V = d - S * 65536, d = J + S + 65535, S = Math.floor(d / 65536), J = d - S * 65536, d = W + S + 65535, S = Math.floor(d / 65536), W = d - S * 65536, d = U + S + 65535, S = Math.floor(d / 65536), U = d - S * 65536, d = B + S + 65535, S = Math.floor(d / 65536), B = d - S * 65536, d = M + S + 65535, S = Math.floor(d / 65536), M = d - S * 65536, d = L + S + 65535, S = Math.floor(d / 65536), L = d - S * 65536, d = Z + S + 65535, S = Math.floor(d / 65536), Z = d - S * 65536, d = Y + S + 65535, S = Math.floor(d / 65536), Y = d - S * 65536, d = K + S + 65535, S = Math.floor(d / 65536), K = d - S * 65536, d = X + S + 65535, S = Math.floor(d / 65536), X = d - S * 65536, d = z + S + 65535, S = Math.floor(d / 65536), z = d - S * 65536, d = Q + S + 65535, S = Math.floor(d / 65536), Q = d - S * 65536, O += S - 1 + 37 * (S - 1), x[0] = O, x[1] = N, x[2] = k, x[3] = V, x[4] = J, x[5] = W, x[6] = U, x[7] = B, x[8] = M, x[9] = L, x[10] = Z, x[11] = Y, x[12] = K, x[13] = X, x[14] = z, x[15] = Q;
  }
  function w(x, E) {
    g(x, E, E);
  }
  function m(x, E) {
    const A = n();
    for (let d = 0; d < 16; d++)
      A[d] = E[d];
    for (let d = 253; d >= 0; d--)
      w(A, A), d !== 2 && d !== 4 && g(A, A, E);
    for (let d = 0; d < 16; d++)
      x[d] = A[d];
  }
  function v(x, E) {
    const A = new Uint8Array(32), d = new Float64Array(80), S = n(), O = n(), N = n(), k = n(), V = n(), J = n();
    for (let M = 0; M < 31; M++)
      A[M] = x[M];
    A[31] = x[31] & 127 | 64, A[0] &= 248, l(d, E);
    for (let M = 0; M < 16; M++)
      O[M] = d[M];
    S[0] = k[0] = 1;
    for (let M = 254; M >= 0; --M) {
      const L = A[M >>> 3] >>> (M & 7) & 1;
      a(S, O, L), a(N, k, L), f(V, S, N), p(S, S, N), f(N, O, k), p(O, O, k), w(k, V), w(J, S), g(S, N, S), g(N, O, V), f(V, S, N), p(S, S, N), w(O, S), p(N, k, J), g(S, N, i), f(S, S, k), g(N, N, S), g(S, k, J), g(k, O, d), w(O, V), a(S, O, L), a(N, k, L);
    }
    for (let M = 0; M < 16; M++)
      d[M + 16] = S[M], d[M + 32] = N[M], d[M + 48] = O[M], d[M + 64] = k[M];
    const W = d.subarray(32), U = d.subarray(16);
    m(W, W), g(U, U, W);
    const B = new Uint8Array(32);
    return c(B, U), B;
  }
  t.scalarMult = v;
  function _(x) {
    return v(x, o);
  }
  t.scalarMultBase = _;
  function D(x) {
    if (x.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const E = new Uint8Array(x);
    return {
      publicKey: _(E),
      secretKey: E
    };
  }
  t.generateKeyPairFromSeed = D;
  function y(x) {
    const E = (0, e.randomBytes)(32, x), A = D(E);
    return (0, r.wipe)(E), A;
  }
  t.generateKeyPair = y;
  function C(x, E, A = !1) {
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (E.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const d = v(x, E);
    if (A) {
      let S = 0;
      for (let O = 0; O < d.length; O++)
        S |= d[O];
      if (S === 0)
        throw new Error("X25519: invalid shared key");
    }
    return d;
  }
  t.sharedKey = C;
})(n4);
function i4(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var o = 0; o < t.length; o++) {
    var i = t.charAt(o), s = i.charCodeAt(0);
    if (r[s] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[s] = o;
  }
  var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function p(m) {
    if (m instanceof Uint8Array || (ArrayBuffer.isView(m) ? m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength) : Array.isArray(m) && (m = Uint8Array.from(m))), !(m instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (m.length === 0)
      return "";
    for (var v = 0, _ = 0, D = 0, y = m.length; D !== y && m[D] === 0; )
      D++, v++;
    for (var C = (y - D) * f + 1 >>> 0, x = new Uint8Array(C); D !== y; ) {
      for (var E = m[D], A = 0, d = C - 1; (E !== 0 || A < _) && d !== -1; d--, A++)
        E += 256 * x[d] >>> 0, x[d] = E % a >>> 0, E = E / a >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      _ = A, D++;
    }
    for (var S = C - _; S !== C && x[S] === 0; )
      S++;
    for (var O = c.repeat(v); S < C; ++S)
      O += t.charAt(x[S]);
    return O;
  }
  function g(m) {
    if (typeof m != "string")
      throw new TypeError("Expected String");
    if (m.length === 0)
      return new Uint8Array();
    var v = 0;
    if (m[v] !== " ") {
      for (var _ = 0, D = 0; m[v] === c; )
        _++, v++;
      for (var y = (m.length - v) * l + 1 >>> 0, C = new Uint8Array(y); m[v]; ) {
        var x = r[m.charCodeAt(v)];
        if (x === 255)
          return;
        for (var E = 0, A = y - 1; (x !== 0 || E < D) && A !== -1; A--, E++)
          x += a * C[A] >>> 0, C[A] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        D = E, v++;
      }
      if (m[v] !== " ") {
        for (var d = y - D; d !== y && C[d] === 0; )
          d++;
        for (var S = new Uint8Array(_ + (y - d)), O = _; d !== y; )
          S[O++] = C[d++];
        return S;
      }
    }
  }
  function w(m) {
    var v = g(m);
    if (v)
      return v;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: p,
    decodeUnsafe: g,
    decode: w
  };
}
var o4 = i4, s4 = o4;
const a4 = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, c4 = (t) => new TextEncoder().encode(t), l4 = (t) => new TextDecoder().decode(t);
class u4 {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class d4 {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ah(this, e);
  }
}
class f4 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ah(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ah = (t, e) => new f4({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class h4 {
  constructor(e, r, n, o) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = o, this.encoder = new u4(e, r, n), this.decoder = new d4(e, r, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const $a = ({ name: t, prefix: e, encode: r, decode: n }) => new h4(t, e, r, n), jo = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: o } = s4(r, e);
  return $a({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => a4(o(i))
  });
}, p4 = (t, e, r, n) => {
  const o = {};
  for (let f = 0; f < e.length; ++f)
    o[e[f]] = f;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const s = new Uint8Array(i * r / 8 | 0);
  let a = 0, c = 0, l = 0;
  for (let f = 0; f < i; ++f) {
    const p = o[t[f]];
    if (p === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | p, a += r, a >= 8 && (a -= 8, s[l++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return s;
}, g4 = (t, e, r) => {
  const n = e[e.length - 1] === "=", o = (1 << r) - 1;
  let i = "", s = 0, a = 0;
  for (let c = 0; c < t.length; ++c)
    for (a = a << 8 | t[c], s += 8; s > r; )
      s -= r, i += e[o & a >> s];
  if (s && (i += e[o & a << r - s]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, rt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => $a({
  prefix: e,
  name: t,
  encode(o) {
    return g4(o, n, r);
  },
  decode(o) {
    return p4(o, n, r, t);
  }
}), w4 = $a({
  prefix: "\0",
  name: "identity",
  encode: (t) => l4(t),
  decode: (t) => c4(t)
}), Z8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: w4
}, Symbol.toStringTag, { value: "Module" })), m4 = rt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), K8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: m4
}, Symbol.toStringTag, { value: "Module" })), b4 = rt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Y8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: b4
}, Symbol.toStringTag, { value: "Module" })), y4 = jo({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), J8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: y4
}, Symbol.toStringTag, { value: "Module" })), v4 = rt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), x4 = rt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), X8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: v4,
  base16upper: x4
}, Symbol.toStringTag, { value: "Module" })), C4 = rt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), _4 = rt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), E4 = rt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), $4 = rt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), A4 = rt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), S4 = rt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), D4 = rt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), P4 = rt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), I4 = rt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Q8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: C4,
  base32hex: A4,
  base32hexpad: D4,
  base32hexpadupper: P4,
  base32hexupper: S4,
  base32pad: E4,
  base32padupper: $4,
  base32upper: _4,
  base32z: I4
}, Symbol.toStringTag, { value: "Module" })), T4 = jo({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), O4 = jo({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), ex = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: T4,
  base36upper: O4
}, Symbol.toStringTag, { value: "Module" })), N4 = jo({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), k4 = jo({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), tx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: N4,
  base58flickr: k4
}, Symbol.toStringTag, { value: "Module" })), R4 = rt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), B4 = rt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), M4 = rt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), U4 = rt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: R4,
  base64pad: B4,
  base64url: M4,
  base64urlpad: U4
}, Symbol.toStringTag, { value: "Module" })), Sh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), L4 = Sh.reduce((t, e, r) => (t[r] = e, t), []), j4 = Sh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function F4(t) {
  return t.reduce((e, r) => (e += L4[r], e), "");
}
function W4(t) {
  const e = [];
  for (const r of t) {
    const n = j4[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const z4 = $a({
  prefix: "🚀",
  name: "base256emoji",
  encode: F4,
  decode: W4
}), nx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: z4
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
var H4 = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Xc = function(t, e) {
  return Xc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      n.hasOwnProperty(o) && (r[o] = n[o]);
  }, Xc(t, e);
};
function q4(t, e) {
  Xc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Qc = function() {
  return Qc = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Qc.apply(this, arguments);
};
function G4(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function V4(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (s = t[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(e, r, i) : s(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
function Z4(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function K4(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Y4(t, e, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function a(f) {
      try {
        l(n.next(f));
      } catch (p) {
        s(p);
      }
    }
    function c(f) {
      try {
        l(n.throw(f));
      } catch (p) {
        s(p);
      }
    }
    function l(f) {
      f.done ? i(f.value) : o(f.value).then(a, c);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function J4(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(f) {
      return c([l, f]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
          return i;
        switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (f) {
        l = [6, f], o = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function X4(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Q4(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function el(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Dh(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function ey() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Dh(arguments[e]));
  return t;
}
function ty() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++)
    for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++)
      n[o] = i[s];
  return n;
}
function xo(t) {
  return this instanceof xo ? (this.v = t, this) : new xo(t);
}
function ry(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), o, i = [];
  return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(g) {
    n[g] && (o[g] = function(w) {
      return new Promise(function(m, v) {
        i.push([g, w, m, v]) > 1 || a(g, w);
      });
    });
  }
  function a(g, w) {
    try {
      c(n[g](w));
    } catch (m) {
      p(i[0][3], m);
    }
  }
  function c(g) {
    g.value instanceof xo ? Promise.resolve(g.value.v).then(l, f) : p(i[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function f(g) {
    a("throw", g);
  }
  function p(g, w) {
    g(w), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function ny(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(o) {
    throw o;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(o, i) {
    e[o] = t[o] ? function(s) {
      return (r = !r) ? { value: xo(t[o](s)), done: o === "return" } : i ? i(s) : s;
    } : i;
  }
}
function iy(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof el == "function" ? el(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(s) {
      return new Promise(function(a, c) {
        s = t[i](s), o(a, c, s.done, s.value);
      });
    };
  }
  function o(i, s, a, c) {
    Promise.resolve(c).then(function(l) {
      i({ value: l, done: a });
    }, s);
  }
}
function oy(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function sy(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function ay(t) {
  return t && t.__esModule ? t : { default: t };
}
function cy(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function ly(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Qc;
  },
  __asyncDelegator: ny,
  __asyncGenerator: ry,
  __asyncValues: iy,
  __await: xo,
  __awaiter: Y4,
  __classPrivateFieldGet: cy,
  __classPrivateFieldSet: ly,
  __createBinding: X4,
  __decorate: V4,
  __exportStar: Q4,
  __extends: q4,
  __generator: J4,
  __importDefault: ay,
  __importStar: sy,
  __makeTemplateObject: oy,
  __metadata: K4,
  __param: Z4,
  __read: Dh,
  __rest: G4,
  __spread: ey,
  __spreadArrays: ty,
  __values: el
}, Symbol.toStringTag, { value: "Module" })), Aa = /* @__PURE__ */ Xd(uy);
var tc = {}, yi = {}, M0;
function dy() {
  if (M0)
    return yi;
  M0 = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return yi.delay = t, yi;
}
var Hr = {}, rc = {}, qr = {}, U0;
function fy() {
  return U0 || (U0 = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.ONE_THOUSAND = qr.ONE_HUNDRED = void 0, qr.ONE_HUNDRED = 100, qr.ONE_THOUSAND = 1e3), qr;
}
var nc = {}, L0;
function hy() {
  return L0 || (L0 = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(nc)), nc;
}
var j0;
function Ph() {
  return j0 || (j0 = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Aa;
    e.__exportStar(fy(), t), e.__exportStar(hy(), t);
  }(rc)), rc;
}
var F0;
function py() {
  if (F0)
    return Hr;
  F0 = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.fromMiliseconds = Hr.toMiliseconds = void 0;
  const t = Ph();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Hr.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Hr.fromMiliseconds = r, Hr;
}
var W0;
function gy() {
  return W0 || (W0 = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Aa;
    e.__exportStar(dy(), t), e.__exportStar(py(), t);
  }(tc)), tc;
}
var xn = {}, z0;
function wy() {
  if (z0)
    return xn;
  z0 = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const n = this.get(r);
      if (typeof n.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const o = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: o });
    }
    get(r) {
      const n = this.timestamps.get(r);
      if (typeof n > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return n;
    }
    elapsed(r) {
      const n = this.get(r);
      return n.elapsed || Date.now() - n.started;
    }
  }
  return xn.Watch = t, xn.default = t, xn;
}
var ic = {}, vi = {}, H0;
function my() {
  if (H0)
    return vi;
  H0 = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.IWatch = void 0;
  class t {
  }
  return vi.IWatch = t, vi;
}
var q0;
function by() {
  return q0 || (q0 = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Aa.__exportStar(my(), t);
  }(ic)), ic;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Aa;
  e.__exportStar(gy(), t), e.__exportStar(wy(), t), e.__exportStar(by(), t), e.__exportStar(Ph(), t);
})(H4);
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = Sy = Oe.getLocation = Oe.getLocationOrThrow = Ey = Oe.getNavigator = Oe.getNavigatorOrThrow = xy = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function wn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Oe.getFromWindow = wn;
function ui(t) {
  const e = wn(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = ui;
function yy() {
  return ui("document");
}
Oe.getDocumentOrThrow = yy;
function vy() {
  return wn("document");
}
var xy = Oe.getDocument = vy;
function Cy() {
  return ui("navigator");
}
Oe.getNavigatorOrThrow = Cy;
function _y() {
  return wn("navigator");
}
var Ey = Oe.getNavigator = _y;
function $y() {
  return ui("location");
}
Oe.getLocationOrThrow = $y;
function Ay() {
  return wn("location");
}
var Sy = Oe.getLocation = Ay;
function Dy() {
  return ui("crypto");
}
Oe.getCryptoOrThrow = Dy;
function Py() {
  return wn("crypto");
}
Oe.getCrypto = Py;
function Iy() {
  return ui("localStorage");
}
Oe.getLocalStorageOrThrow = Iy;
function Ty() {
  return wn("localStorage");
}
Oe.getLocalStorage = Ty;
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
var Oy = hu.getWindowMetadata = void 0;
const G0 = Oe;
function Ny() {
  let t, e;
  try {
    t = G0.getDocumentOrThrow(), e = G0.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const p = t.getElementsByTagName("link"), g = [];
    for (let w = 0; w < p.length; w++) {
      const m = p[w], v = m.getAttribute("rel");
      if (v && v.toLowerCase().indexOf("icon") > -1) {
        const _ = m.getAttribute("href");
        if (_)
          if (_.toLowerCase().indexOf("https:") === -1 && _.toLowerCase().indexOf("http:") === -1 && _.indexOf("//") !== 0) {
            let D = e.protocol + "//" + e.host;
            if (_.indexOf("/") === 0)
              D += _;
            else {
              const y = e.pathname.split("/");
              y.pop();
              const C = y.join("/");
              D += C + "/" + _;
            }
            g.push(D);
          } else if (_.indexOf("//") === 0) {
            const D = e.protocol + _;
            g.push(D);
          } else
            g.push(_);
      }
    }
    return g;
  }
  function n(...p) {
    const g = t.getElementsByTagName("meta");
    for (let w = 0; w < g.length; w++) {
      const m = g[w], v = ["itemprop", "property", "name"].map((_) => m.getAttribute(_)).filter((_) => _ ? p.includes(_) : !1);
      if (v.length && v) {
        const _ = m.getAttribute("content");
        if (_)
          return _;
      }
    }
    return "";
  }
  function o() {
    let p = n("name", "og:site_name", "og:title", "twitter:title");
    return p || (p = t.title), p;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const s = o(), a = i(), c = e.origin, l = r();
  return {
    description: a,
    url: c,
    icons: l,
    name: s
  };
}
Oy = hu.getWindowMetadata = Ny;
var ky = {}, Ry = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Ih = "%[a-f0-9]{2}", V0 = new RegExp("(" + Ih + ")|([^%]+?)", "gi"), Z0 = new RegExp("(" + Ih + ")+", "gi");
function tl(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], tl(r), tl(n));
}
function By(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(V0) || [], r = 1; r < e.length; r++)
      t = tl(e, r).join(""), e = t.match(V0) || [];
    return t;
  }
}
function My(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Z0.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = By(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Z0.exec(t);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), i = 0; i < o.length; i++) {
    var s = o[i];
    t = t.replace(new RegExp(s, "g"), e[s]);
  }
  return t;
}
var Uy = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return My(t);
  }
}, Ly = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, jy = function(t, e) {
  for (var r = {}, n = Object.keys(t), o = Array.isArray(e), i = 0; i < n.length; i++) {
    var s = n[i], a = t[s];
    (o ? e.indexOf(s) !== -1 : e(s, a, t)) && (r[s] = a);
  }
  return r;
};
(function(t) {
  const e = Ry, r = Uy, n = Ly, o = jy, i = (y) => y == null, s = Symbol("encodeFragmentIdentifier");
  function a(y) {
    switch (y.arrayFormat) {
      case "index":
        return (C) => (x, E) => {
          const A = x.length;
          return E === void 0 || y.skipNull && E === null || y.skipEmptyString && E === "" ? x : E === null ? [...x, [f(C, y), "[", A, "]"].join("")] : [
            ...x,
            [f(C, y), "[", f(A, y), "]=", f(E, y)].join("")
          ];
        };
      case "bracket":
        return (C) => (x, E) => E === void 0 || y.skipNull && E === null || y.skipEmptyString && E === "" ? x : E === null ? [...x, [f(C, y), "[]"].join("")] : [...x, [f(C, y), "[]=", f(E, y)].join("")];
      case "colon-list-separator":
        return (C) => (x, E) => E === void 0 || y.skipNull && E === null || y.skipEmptyString && E === "" ? x : E === null ? [...x, [f(C, y), ":list="].join("")] : [...x, [f(C, y), ":list=", f(E, y)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const C = y.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (x) => (E, A) => A === void 0 || y.skipNull && A === null || y.skipEmptyString && A === "" ? E : (A = A === null ? "" : A, E.length === 0 ? [[f(x, y), C, f(A, y)].join("")] : [[E, f(A, y)].join(y.arrayFormatSeparator)]);
      }
      default:
        return (C) => (x, E) => E === void 0 || y.skipNull && E === null || y.skipEmptyString && E === "" ? x : E === null ? [...x, f(C, y)] : [...x, [f(C, y), "=", f(E, y)].join("")];
    }
  }
  function c(y) {
    let C;
    switch (y.arrayFormat) {
      case "index":
        return (x, E, A) => {
          if (C = /\[(\d*)\]$/.exec(x), x = x.replace(/\[\d*\]$/, ""), !C) {
            A[x] = E;
            return;
          }
          A[x] === void 0 && (A[x] = {}), A[x][C[1]] = E;
        };
      case "bracket":
        return (x, E, A) => {
          if (C = /(\[\])$/.exec(x), x = x.replace(/\[\]$/, ""), !C) {
            A[x] = E;
            return;
          }
          if (A[x] === void 0) {
            A[x] = [E];
            return;
          }
          A[x] = [].concat(A[x], E);
        };
      case "colon-list-separator":
        return (x, E, A) => {
          if (C = /(:list)$/.exec(x), x = x.replace(/:list$/, ""), !C) {
            A[x] = E;
            return;
          }
          if (A[x] === void 0) {
            A[x] = [E];
            return;
          }
          A[x] = [].concat(A[x], E);
        };
      case "comma":
      case "separator":
        return (x, E, A) => {
          const d = typeof E == "string" && E.includes(y.arrayFormatSeparator), S = typeof E == "string" && !d && p(E, y).includes(y.arrayFormatSeparator);
          E = S ? p(E, y) : E;
          const O = d || S ? E.split(y.arrayFormatSeparator).map((N) => p(N, y)) : E === null ? E : p(E, y);
          A[x] = O;
        };
      case "bracket-separator":
        return (x, E, A) => {
          const d = /(\[\])$/.test(x);
          if (x = x.replace(/\[\]$/, ""), !d) {
            A[x] = E && p(E, y);
            return;
          }
          const S = E === null ? [] : E.split(y.arrayFormatSeparator).map((O) => p(O, y));
          if (A[x] === void 0) {
            A[x] = S;
            return;
          }
          A[x] = [].concat(A[x], S);
        };
      default:
        return (x, E, A) => {
          if (A[x] === void 0) {
            A[x] = E;
            return;
          }
          A[x] = [].concat(A[x], E);
        };
    }
  }
  function l(y) {
    if (typeof y != "string" || y.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(y, C) {
    return C.encode ? C.strict ? e(y) : encodeURIComponent(y) : y;
  }
  function p(y, C) {
    return C.decode ? r(y) : y;
  }
  function g(y) {
    return Array.isArray(y) ? y.sort() : typeof y == "object" ? g(Object.keys(y)).sort((C, x) => Number(C) - Number(x)).map((C) => y[C]) : y;
  }
  function w(y) {
    const C = y.indexOf("#");
    return C !== -1 && (y = y.slice(0, C)), y;
  }
  function m(y) {
    let C = "";
    const x = y.indexOf("#");
    return x !== -1 && (C = y.slice(x)), C;
  }
  function v(y) {
    y = w(y);
    const C = y.indexOf("?");
    return C === -1 ? "" : y.slice(C + 1);
  }
  function _(y, C) {
    return C.parseNumbers && !Number.isNaN(Number(y)) && typeof y == "string" && y.trim() !== "" ? y = Number(y) : C.parseBooleans && y !== null && (y.toLowerCase() === "true" || y.toLowerCase() === "false") && (y = y.toLowerCase() === "true"), y;
  }
  function D(y, C) {
    C = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, C), l(C.arrayFormatSeparator);
    const x = c(C), E = /* @__PURE__ */ Object.create(null);
    if (typeof y != "string" || (y = y.trim().replace(/^[?#&]/, ""), !y))
      return E;
    for (const A of y.split("&")) {
      if (A === "")
        continue;
      let [d, S] = n(C.decode ? A.replace(/\+/g, " ") : A, "=");
      S = S === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(C.arrayFormat) ? S : p(S, C), x(p(d, C), S, E);
    }
    for (const A of Object.keys(E)) {
      const d = E[A];
      if (typeof d == "object" && d !== null)
        for (const S of Object.keys(d))
          d[S] = _(d[S], C);
      else
        E[A] = _(d, C);
    }
    return C.sort === !1 ? E : (C.sort === !0 ? Object.keys(E).sort() : Object.keys(E).sort(C.sort)).reduce((A, d) => {
      const S = E[d];
      return S && typeof S == "object" && !Array.isArray(S) ? A[d] = g(S) : A[d] = S, A;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = v, t.parse = D, t.stringify = (y, C) => {
    if (!y)
      return "";
    C = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, C), l(C.arrayFormatSeparator);
    const x = (S) => C.skipNull && i(y[S]) || C.skipEmptyString && y[S] === "", E = a(C), A = {};
    for (const S of Object.keys(y))
      x(S) || (A[S] = y[S]);
    const d = Object.keys(A);
    return C.sort !== !1 && d.sort(C.sort), d.map((S) => {
      const O = y[S];
      return O === void 0 ? "" : O === null ? f(S, C) : Array.isArray(O) ? O.length === 0 && C.arrayFormat === "bracket-separator" ? f(S, C) + "[]" : O.reduce(E(S), []).join("&") : f(S, C) + "=" + f(O, C);
    }).filter((S) => S.length > 0).join("&");
  }, t.parseUrl = (y, C) => {
    C = Object.assign({
      decode: !0
    }, C);
    const [x, E] = n(y, "#");
    return Object.assign(
      {
        url: x.split("?")[0] || "",
        query: D(v(y), C)
      },
      C && C.parseFragmentIdentifier && E ? { fragmentIdentifier: p(E, C) } : {}
    );
  }, t.stringifyUrl = (y, C) => {
    C = Object.assign({
      encode: !0,
      strict: !0,
      [s]: !0
    }, C);
    const x = w(y.url).split("?")[0] || "", E = t.extract(y.url), A = t.parse(E, { sort: !1 }), d = Object.assign(A, y.query);
    let S = t.stringify(d, C);
    S && (S = `?${S}`);
    let O = m(y.url);
    return y.fragmentIdentifier && (O = `#${C[s] ? f(y.fragmentIdentifier, C) : y.fragmentIdentifier}`), `${x}${S}${O}`;
  }, t.pick = (y, C, x) => {
    x = Object.assign({
      parseFragmentIdentifier: !0,
      [s]: !1
    }, x);
    const { url: E, query: A, fragmentIdentifier: d } = t.parseUrl(y, x);
    return t.stringifyUrl({
      url: E,
      query: o(A, C),
      fragmentIdentifier: d
    }, x);
  }, t.exclude = (y, C, x) => {
    const E = Array.isArray(C) ? (A) => !C.includes(A) : (A, d) => !C(A, d);
    return t.pick(y, E, x);
  };
})(ky);
function oc(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
var Fy = Object.defineProperty, Wy = Object.defineProperties, zy = Object.getOwnPropertyDescriptors, K0 = Object.getOwnPropertySymbols, Hy = Object.prototype.hasOwnProperty, qy = Object.prototype.propertyIsEnumerable, Y0 = (t, e, r) => e in t ? Fy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gy = (t, e) => {
  for (var r in e || (e = {}))
    Hy.call(e, r) && Y0(t, r, e[r]);
  if (K0)
    for (var r of K0(e))
      qy.call(e, r) && Y0(t, r, e[r]);
  return t;
}, Vy = (t, e) => Wy(t, zy(e));
function Th(t) {
  return t.includes(":");
}
function Zy(t) {
  return Th(t) ? t.split(":")[0] : t;
}
function Oh(t) {
  var e, r, n;
  const o = {};
  if (!Ky(t))
    return o;
  for (const [i, s] of Object.entries(t)) {
    const a = Th(i) ? [i] : s.chains, c = s.methods || [], l = s.events || [], f = Zy(i);
    o[f] = Vy(Gy({}, o[f]), { chains: oc(a, (e = o[f]) == null ? void 0 : e.chains), methods: oc(c, (r = o[f]) == null ? void 0 : r.methods), events: oc(l, (n = o[f]) == null ? void 0 : n.events) });
  }
  return o;
}
function Ky(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
var Nh = "eip155", Yy = "store", kh = "requestedChains", rl = "wallet_addEthereumChain", Be, Ri, ns, nl, pu, Rh, is, il, ol, Bh, Us, gu, An, $i, Ls, wu, js, mu, Fs, bu, Jy = class extends Ul {
  constructor(t) {
    super({
      ...t,
      options: { isNewChainsStale: !0, ...t.options }
    }), ft(this, ns), ft(this, pu), ft(this, is), ft(this, ol), ft(this, Us), ft(this, An), ft(this, Ls), ft(this, js), ft(this, Fs), this.id = "walletConnect", this.name = "WalletConnect", this.ready = !0, ft(this, Be, void 0), ft(this, Ri, void 0), this.onAccountsChanged = (e) => {
      e.length === 0 ? this.emit("disconnect") : this.emit("change", { account: Nt(e[0]) });
    }, this.onChainChanged = (e) => {
      const r = Number(e), n = this.isChainUnsupported(r);
      this.emit("change", { chain: { id: r, unsupported: n } });
    }, this.onDisconnect = () => {
      Qe(this, An, $i).call(this, []), this.emit("disconnect");
    }, this.onDisplayUri = (e) => {
      this.emit("message", { type: "display_uri", data: e });
    }, this.onConnect = () => {
      this.emit("connect", {});
    }, Qe(this, ns, nl).call(this);
  }
  async connect({ chainId: t, pairingTopic: e } = {}) {
    var r, n, o, i, s;
    try {
      let a = t;
      if (!a) {
        const m = (r = this.storage) == null ? void 0 : r.getItem(Yy), v = (i = (o = (n = m == null ? void 0 : m.state) == null ? void 0 : n.data) == null ? void 0 : o.chain) == null ? void 0 : i.id;
        v && !this.isChainUnsupported(v) ? a = v : a = (s = this.chains[0]) == null ? void 0 : s.id;
      }
      if (!a)
        throw new Error("No chains found on connector.");
      const c = await this.getProvider();
      Qe(this, ol, Bh).call(this);
      const l = Qe(this, is, il).call(this);
      if (c.session && l && await c.disconnect(), !c.session || l) {
        const m = this.chains.filter((v) => v.id !== a).map((v) => v.id);
        this.emit("message", { type: "connecting" }), await c.connect({
          pairingTopic: e,
          chains: [a],
          optionalChains: m.length ? m : void 0
        }), Qe(this, An, $i).call(this, this.chains.map(({ id: v }) => v));
      }
      const f = await c.enable(), p = Nt(f[0]), g = await this.getChainId(), w = this.isChainUnsupported(g);
      return {
        account: p,
        chain: { id: g, unsupported: w }
      };
    } catch (a) {
      throw /user rejected/i.test(a == null ? void 0 : a.message) ? new ht(a) : a;
    }
  }
  async disconnect() {
    const t = await this.getProvider();
    try {
      await t.disconnect();
    } catch (e) {
      if (!/No matching key/i.test(e.message))
        throw e;
    } finally {
      Qe(this, Us, gu).call(this), Qe(this, An, $i).call(this, []);
    }
  }
  async getAccount() {
    const { accounts: t } = await this.getProvider();
    return Nt(t[0]);
  }
  async getChainId() {
    const { chainId: t } = await this.getProvider();
    return t;
  }
  async getProvider({ chainId: t } = {}) {
    return De(this, Be) || await Qe(this, ns, nl).call(this), t && await this.switchChain(t), De(this, Be);
  }
  async getWalletClient({
    chainId: t
  } = {}) {
    const [e, r] = await Promise.all([
      this.getProvider({ chainId: t }),
      this.getAccount()
    ]), n = this.chains.find((o) => o.id === t);
    if (!e)
      throw new Error("provider is required.");
    return Rl({
      account: r,
      chain: n,
      transport: Il(e)
    });
  }
  async isAuthorized() {
    try {
      const [t, e] = await Promise.all([
        this.getAccount(),
        this.getProvider()
      ]), r = Qe(this, is, il).call(this);
      if (!t)
        return !1;
      if (r && e.session) {
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
  async switchChain(t) {
    var r, n;
    const e = this.chains.find((o) => o.id === t);
    if (!e)
      throw new rr(new Error("chain not found on connector."));
    try {
      const o = await this.getProvider(), i = Qe(this, js, mu).call(this), s = Qe(this, Fs, bu).call(this);
      if (!i.includes(t) && s.includes(rl)) {
        await o.request({
          method: rl,
          params: [
            {
              chainId: ue(e.id),
              blockExplorerUrls: [(n = (r = e.blockExplorers) == null ? void 0 : r.default) == null ? void 0 : n.url],
              chainName: e.name,
              nativeCurrency: e.nativeCurrency,
              rpcUrls: [...e.rpcUrls.default.http]
            }
          ]
        });
        const c = Qe(this, Ls, wu).call(this);
        c.push(t), Qe(this, An, $i).call(this, c);
      }
      return await o.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ue(t) }]
      }), e;
    } catch (o) {
      const i = typeof o == "string" ? o : o == null ? void 0 : o.message;
      throw /user rejected request/i.test(i) ? new ht(o) : new rr(o);
    }
  }
};
Be = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
ns = /* @__PURE__ */ new WeakSet();
nl = async function() {
  return !De(this, Ri) && typeof window < "u" && Qi(this, Ri, Qe(this, pu, Rh).call(this)), De(this, Ri);
};
pu = /* @__PURE__ */ new WeakSet();
Rh = async function() {
  const { EthereumProvider: t, OPTIONAL_EVENTS: e, OPTIONAL_METHODS: r } = await import("./index.es-ee0440GY.js"), [n, ...o] = this.chains.map(({ id: i }) => i);
  if (n) {
    const {
      projectId: i,
      showQrModal: s = !0,
      qrModalOptions: a,
      metadata: c,
      relayUrl: l
    } = this.options;
    Qi(this, Be, await t.init({
      showQrModal: s,
      qrModalOptions: a,
      projectId: i,
      optionalMethods: r,
      optionalEvents: e,
      chains: [n],
      optionalChains: o.length ? o : void 0,
      rpcMap: Object.fromEntries(
        this.chains.map((f) => [
          f.id,
          f.rpcUrls.default.http[0]
        ])
      ),
      metadata: c,
      relayUrl: l
    }));
  }
};
is = /* @__PURE__ */ new WeakSet();
il = function() {
  if (Qe(this, Fs, bu).call(this).includes(rl) || !this.options.isNewChainsStale)
    return !1;
  const e = Qe(this, Ls, wu).call(this), r = this.chains.map(({ id: o }) => o), n = Qe(this, js, mu).call(this);
  return n.length && !n.some((o) => r.includes(o)) ? !1 : !r.every((o) => e.includes(o));
};
ol = /* @__PURE__ */ new WeakSet();
Bh = function() {
  De(this, Be) && (Qe(this, Us, gu).call(this), De(this, Be).on("accountsChanged", this.onAccountsChanged), De(this, Be).on("chainChanged", this.onChainChanged), De(this, Be).on("disconnect", this.onDisconnect), De(this, Be).on("session_delete", this.onDisconnect), De(this, Be).on("display_uri", this.onDisplayUri), De(this, Be).on("connect", this.onConnect));
};
Us = /* @__PURE__ */ new WeakSet();
gu = function() {
  De(this, Be) && (De(this, Be).removeListener("accountsChanged", this.onAccountsChanged), De(this, Be).removeListener("chainChanged", this.onChainChanged), De(this, Be).removeListener("disconnect", this.onDisconnect), De(this, Be).removeListener("session_delete", this.onDisconnect), De(this, Be).removeListener("display_uri", this.onDisplayUri), De(this, Be).removeListener("connect", this.onConnect));
};
An = /* @__PURE__ */ new WeakSet();
$i = function(t) {
  var e;
  (e = this.storage) == null || e.setItem(kh, t);
};
Ls = /* @__PURE__ */ new WeakSet();
wu = function() {
  var t;
  return ((t = this.storage) == null ? void 0 : t.getItem(kh)) ?? [];
};
js = /* @__PURE__ */ new WeakSet();
mu = function() {
  var n, o, i;
  if (!De(this, Be))
    return [];
  const t = (n = De(this, Be).session) == null ? void 0 : n.namespaces;
  return t ? ((i = (o = Oh(t)[Nh]) == null ? void 0 : o.chains) == null ? void 0 : i.map(
    (s) => parseInt(s.split(":")[1] || "")
  )) ?? [] : [];
};
Fs = /* @__PURE__ */ new WeakSet();
bu = function() {
  var n, o;
  if (!De(this, Be))
    return [];
  const t = (n = De(this, Be).session) == null ? void 0 : n.namespaces;
  return t ? ((o = Oh(t)[Nh]) == null ? void 0 : o.methods) ?? [] : [];
};
function Xy() {
  return function(t) {
    return t.rpcUrls.public.http[0] ? {
      chain: t,
      rpcUrls: t.rpcUrls.public
    } : null;
  };
}
const Qy = te.getBlockchainApiUrl();
function ev({ projectId: t }) {
  return function(r) {
    if (![
      1,
      5,
      11155111,
      10,
      420,
      42161,
      421613,
      137,
      80001,
      42220,
      1313161554,
      1313161555,
      56,
      97,
      43114,
      43113,
      100,
      8453,
      84531,
      7777777,
      999,
      324,
      280
    ].includes(r.id))
      return null;
    const o = `${Qy}/v1/?chainId=${we.EIP155}:${r.id}&projectId=${t}`;
    return {
      chain: {
        ...r,
        rpcUrls: {
          ...r.rpcUrls,
          default: { http: [o] }
        }
      },
      rpcUrls: {
        http: [o]
      }
    };
  };
}
function tv({ projectId: t, chains: e, metadata: r }) {
  const { publicClient: n } = Dw(e, [
    ev({ projectId: t }),
    Xy()
  ]);
  return Lw({
    autoConnect: !0,
    connectors: [
      new Jy({ chains: e, options: { projectId: t, showQrModal: !1, metadata: r } }),
      new r6({ chains: e }),
      new Ll({ chains: e, options: { shimDisconnect: !0 } }),
      new d6({ chains: e, options: { appName: (r == null ? void 0 : r.name) ?? "Unknown" } })
    ],
    publicClient: n
  });
}
function ix(t) {
  return new t6({ ...t, _sdkVersion: `html-wagmi-${we.VERSION}` });
}
const rv = "7f44f9a6b43a2e7a0b56e84f83730798", nv = {
  name: "WideEyeFeels",
  description: "WideEyeFeels Connect",
  url: "https://widefeels.us",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
}, iv = [Si, Mh, Yd], ox = tv({ chains: iv, projectId: rv, metadata: nv });
export {
  Cg as $,
  ir as A,
  ao as B,
  Dt as C,
  Ht as D,
  Rc as E,
  Pt as F,
  co as G,
  Es as H,
  lo as I,
  nn as J,
  $s as K,
  Tr as L,
  jc as M,
  sn as N,
  qt as O,
  _s as P,
  fo as Q,
  or as R,
  Gn as S,
  Dn as T,
  Te as U,
  rn as V,
  Oc as W,
  lt as X,
  gt as Y,
  Ds as Z,
  lg as _,
  S2 as a,
  _g as a0,
  Eg as a1,
  Ud as a2,
  cg as a3,
  Xo as a4,
  na as a5,
  ut as a6,
  Rr as a7,
  ov as a8,
  H as a9,
  Aa as aA,
  H4 as aB,
  pe as aC,
  Mt as aD,
  $h as aE,
  n4 as aF,
  V8 as aG,
  r4 as aH,
  f6 as aI,
  xy as aJ,
  Ey as aK,
  Sy as aL,
  Bl as aM,
  Oy as aN,
  Y6 as aO,
  fh as aP,
  q4 as aQ,
  ix as aR,
  ox as aS,
  iv as aT,
  rv as aU,
  Dc as aV,
  Ws as aa,
  ct as ab,
  On as ac,
  Mi as ad,
  wp as ae,
  Co as af,
  tr as ag,
  Xs as ah,
  Ai as ai,
  zt as aj,
  No as ak,
  Z8 as al,
  K8 as am,
  Y8 as an,
  J8 as ao,
  X8 as ap,
  Q8 as aq,
  ex as ar,
  tx as as,
  rx as at,
  nx as au,
  Ly as av,
  jy as aw,
  Ry as ax,
  Uy as ay,
  Xd as az,
  Mn as b,
  q as c,
  io as d,
  Nc as e,
  oo as f,
  gs as g,
  Un as h,
  A2 as i,
  Ln as j,
  ws as k,
  nr as l,
  ms as m,
  jn as n,
  Dr as o,
  bs as p,
  Pr as q,
  Ir as r,
  hf as s,
  so as t,
  Fn as u,
  vs as v,
  Rt as w,
  on as x,
  xs as y,
  Cs as z
};
