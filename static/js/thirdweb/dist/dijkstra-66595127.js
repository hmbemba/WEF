var F = function(u) {
  for (var e = [], t = u.length, s = 0; s < t; s++) {
    var r = u.charCodeAt(s);
    if (r >= 55296 && r <= 56319 && t > s + 1) {
      var o = u.charCodeAt(s + 1);
      o >= 56320 && o <= 57343 && (r = (r - 55296) * 1024 + o - 56320 + 65536, s += 1);
    }
    if (r < 128) {
      e.push(r);
      continue;
    }
    if (r < 2048) {
      e.push(r >> 6 | 192), e.push(r & 63 | 128);
      continue;
    }
    if (r < 55296 || r >= 57344 && r < 65536) {
      e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(r & 63 | 128);
      continue;
    }
    if (r >= 65536 && r <= 1114111) {
      e.push(r >> 18 | 240), e.push(r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128), e.push(r & 63 | 128);
      continue;
    }
    e.push(239, 191, 189);
  }
  return new Uint8Array(e).buffer;
}, d = { exports: {} };
(function(i) {
  var u = {
    single_source_shortest_paths: function(e, t, s) {
      var r = {}, o = {};
      o[t] = 0;
      var a = u.PriorityQueue.make();
      a.push(t, 0);
      for (var c, n, f, v, h, x, _, p, l; !a.empty(); ) {
        c = a.pop(), n = c.value, v = c.cost, h = e[n] || {};
        for (f in h)
          h.hasOwnProperty(f) && (x = h[f], _ = v + x, p = o[f], l = typeof o[f] > "u", (l || p > _) && (o[f] = _, a.push(f, _), r[f] = n));
      }
      if (typeof s < "u" && typeof o[s] > "u") {
        var y = ["Could not find a path from ", t, " to ", s, "."].join("");
        throw new Error(y);
      }
      return r;
    },
    extract_shortest_path_from_predecessor_list: function(e, t) {
      for (var s = [], r = t; r; )
        s.push(r), e[r], r = e[r];
      return s.reverse(), s;
    },
    find_path: function(e, t, s) {
      var r = u.single_source_shortest_paths(e, t, s);
      return u.extract_shortest_path_from_predecessor_list(
        r,
        s
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(e) {
        var t = u.PriorityQueue, s = {}, r;
        e = e || {};
        for (r in t)
          t.hasOwnProperty(r) && (s[r] = t[r]);
        return s.queue = [], s.sorter = e.sorter || t.default_sorter, s;
      },
      default_sorter: function(e, t) {
        return e.cost - t.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(e, t) {
        var s = { value: e, cost: t };
        this.queue.push(s), this.queue.sort(this.sorter);
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
  i.exports = u;
})(d);
var m = d.exports;
export {
  m as d,
  F as e
};
