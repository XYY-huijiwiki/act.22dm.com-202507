const r = (r) => {
    let { k: n, score: t, level: a, unionid: u } = r;
    return o(e(n + "|" + t + "|" + a) + u);
  },
  n = (r) => {
    let { k: n, id: t, unionid: a } = r;
    return o(e(n + "|" + a + "|" + t) + a);
  },
  t = (r) => {
    let { k: n, bottleId: t, unionid: a } = r;
    return o(e(n + "|" + a + "|" + t) + a);
  };
window.r = r;
function e(r) {
  function n(r, n) {
    return (r << n) | (r >>> (32 - n));
  }
  function t(r, n) {
    var t, e, o, a, u;
    return (
      (o = 2147483648 & r),
      (a = 2147483648 & n),
      (u = (1073741823 & r) + (1073741823 & n)),
      (t = 1073741824 & r) & (e = 1073741824 & n)
        ? 2147483648 ^ u ^ o ^ a
        : t | e
        ? 1073741824 & u
          ? 3221225472 ^ u ^ o ^ a
          : 1073741824 ^ u ^ o ^ a
        : u ^ o ^ a
    );
  }
  function e(r, e, o, a, u, c, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return (r & n) | (~r & t);
            })(e, o, a),
            u
          ),
          i
        )
      )),
      t(n(r, c), e)
    );
  }
  function o(r, e, o, a, u, c, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return (r & t) | (n & ~t);
            })(e, o, a),
            u
          ),
          i
        )
      )),
      t(n(r, c), e)
    );
  }
  function a(r, e, o, a, u, c, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return r ^ n ^ t;
            })(e, o, a),
            u
          ),
          i
        )
      )),
      t(n(r, c), e)
    );
  }
  function u(r, e, o, a, u, c, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return n ^ (r | ~t);
            })(e, o, a),
            u
          ),
          i
        )
      )),
      t(n(r, c), e)
    );
  }
  function c(r) {
    var n,
      t = "",
      e = "";
    for (n = 0; n <= 3; n++)
      t += (e = "0" + ((r >>> (8 * n)) & 255).toString(16)).substr(
        e.length - 2,
        2
      );
    return t;
  }
  var i,
    f,
    h,
    C,
    d,
    A,
    g,
    l,
    s,
    v = Array();
  for (
    v = (function (r) {
      for (
        var n,
          t = r.length,
          e = t + 8,
          o = 16 * ((e - (e % 64)) / 64 + 1),
          a = Array(o - 1),
          u = 0,
          c = 0;
        c < t;

      )
        (u = (c % 4) * 8),
          (a[(n = (c - (c % 4)) / 4)] = a[n] | (r.charCodeAt(c) << u)),
          c++;
      return (
        (u = (c % 4) * 8),
        (a[(n = (c - (c % 4)) / 4)] = a[n] | (128 << u)),
        (a[o - 2] = t << 3),
        (a[o - 1] = t >>> 29),
        a
      );
    })(
      (r = (function (r) {
        r = r.replace(/\r\n/g, "\n");
        for (var n = "", t = 0; t < r.length; t++) {
          var e = r.charCodeAt(t);
          e < 128
            ? (n += String.fromCharCode(e))
            : e > 127 && e < 2048
            ? ((n += String.fromCharCode((e >> 6) | 192)),
              (n += String.fromCharCode((63 & e) | 128)))
            : ((n += String.fromCharCode((e >> 12) | 224)),
              (n += String.fromCharCode(((e >> 6) & 63) | 128)),
              (n += String.fromCharCode((63 & e) | 128)));
        }
        return n;
      })(r))
    ),
      A = 1732584193,
      g = 4023233417,
      l = 2562383102,
      s = 271733878,
      i = 0;
    i < v.length;
    i += 16
  )
    (f = A),
      (h = g),
      (C = l),
      (d = s),
      (A = e(A, g, l, s, v[i + 0], 7, 3614090360)),
      (s = e(s, A, g, l, v[i + 1], 12, 3905402710)),
      (l = e(l, s, A, g, v[i + 2], 17, 606105819)),
      (g = e(g, l, s, A, v[i + 3], 22, 3250441966)),
      (A = e(A, g, l, s, v[i + 4], 7, 4118548399)),
      (s = e(s, A, g, l, v[i + 5], 12, 1200080426)),
      (l = e(l, s, A, g, v[i + 6], 17, 2821735955)),
      (g = e(g, l, s, A, v[i + 7], 22, 4249261313)),
      (A = e(A, g, l, s, v[i + 8], 7, 1770035416)),
      (s = e(s, A, g, l, v[i + 9], 12, 2336552879)),
      (l = e(l, s, A, g, v[i + 10], 17, 4294925233)),
      (g = e(g, l, s, A, v[i + 11], 22, 2304563134)),
      (A = e(A, g, l, s, v[i + 12], 7, 1804603682)),
      (s = e(s, A, g, l, v[i + 13], 12, 4254626195)),
      (l = e(l, s, A, g, v[i + 14], 17, 2792965006)),
      (A = o(
        A,
        (g = e(g, l, s, A, v[i + 15], 22, 1236535329)),
        l,
        s,
        v[i + 1],
        5,
        4129170786
      )),
      (s = o(s, A, g, l, v[i + 6], 9, 3225465664)),
      (l = o(l, s, A, g, v[i + 11], 14, 643717713)),
      (g = o(g, l, s, A, v[i + 0], 20, 3921069994)),
      (A = o(A, g, l, s, v[i + 5], 5, 3593408605)),
      (s = o(s, A, g, l, v[i + 10], 9, 38016083)),
      (l = o(l, s, A, g, v[i + 15], 14, 3634488961)),
      (g = o(g, l, s, A, v[i + 4], 20, 3889429448)),
      (A = o(A, g, l, s, v[i + 9], 5, 568446438)),
      (s = o(s, A, g, l, v[i + 14], 9, 3275163606)),
      (l = o(l, s, A, g, v[i + 3], 14, 4107603335)),
      (g = o(g, l, s, A, v[i + 8], 20, 1163531501)),
      (A = o(A, g, l, s, v[i + 13], 5, 2850285829)),
      (s = o(s, A, g, l, v[i + 2], 9, 4243563512)),
      (l = o(l, s, A, g, v[i + 7], 14, 1735328473)),
      (A = a(
        A,
        (g = o(g, l, s, A, v[i + 12], 20, 2368359562)),
        l,
        s,
        v[i + 5],
        4,
        4294588738
      )),
      (s = a(s, A, g, l, v[i + 8], 11, 2272392833)),
      (l = a(l, s, A, g, v[i + 11], 16, 1839030562)),
      (g = a(g, l, s, A, v[i + 14], 23, 4259657740)),
      (A = a(A, g, l, s, v[i + 1], 4, 2763975236)),
      (s = a(s, A, g, l, v[i + 4], 11, 1272893353)),
      (l = a(l, s, A, g, v[i + 7], 16, 4139469664)),
      (g = a(g, l, s, A, v[i + 10], 23, 3200236656)),
      (A = a(A, g, l, s, v[i + 13], 4, 681279174)),
      (s = a(s, A, g, l, v[i + 0], 11, 3936430074)),
      (l = a(l, s, A, g, v[i + 3], 16, 3572445317)),
      (g = a(g, l, s, A, v[i + 6], 23, 76029189)),
      (A = a(A, g, l, s, v[i + 9], 4, 3654602809)),
      (s = a(s, A, g, l, v[i + 12], 11, 3873151461)),
      (l = a(l, s, A, g, v[i + 15], 16, 530742520)),
      (A = u(
        A,
        (g = a(g, l, s, A, v[i + 2], 23, 3299628645)),
        l,
        s,
        v[i + 0],
        6,
        4096336452
      )),
      (s = u(s, A, g, l, v[i + 7], 10, 1126891415)),
      (l = u(l, s, A, g, v[i + 14], 15, 2878612391)),
      (g = u(g, l, s, A, v[i + 5], 21, 4237533241)),
      (A = u(A, g, l, s, v[i + 12], 6, 1700485571)),
      (s = u(s, A, g, l, v[i + 3], 10, 2399980690)),
      (l = u(l, s, A, g, v[i + 10], 15, 4293915773)),
      (g = u(g, l, s, A, v[i + 1], 21, 2240044497)),
      (A = u(A, g, l, s, v[i + 8], 6, 1873313359)),
      (s = u(s, A, g, l, v[i + 15], 10, 4264355552)),
      (l = u(l, s, A, g, v[i + 6], 15, 2734768916)),
      (g = u(g, l, s, A, v[i + 13], 21, 1309151649)),
      (A = u(A, g, l, s, v[i + 4], 6, 4149444226)),
      (s = u(s, A, g, l, v[i + 11], 10, 3174756917)),
      (l = u(l, s, A, g, v[i + 2], 15, 718787259)),
      (g = u(g, l, s, A, v[i + 9], 21, 3951481745)),
      (A = t(A, f)),
      (g = t(g, h)),
      (l = t(l, C)),
      (s = t(s, d));
  return (c(A) + c(g) + c(l) + c(s)).toLowerCase();
}
function o(r) {
  for (
    var n,
      t,
      e,
      o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      a = 0,
      u = r.length,
      c = "";
    a < u;

  ) {
    if (((n = 255 & r.charCodeAt(a++)), a == u)) {
      (c += o.charAt(n >> 2)), (c += o.charAt((3 & n) << 4)), (c += "==");
      break;
    }
    if (((t = r.charCodeAt(a++)), a == u)) {
      (c += o.charAt(n >> 2)),
        (c += o.charAt(((3 & n) << 4) | ((240 & t) >> 4))),
        (c += o.charAt((15 & t) << 2)),
        (c += "=");
      break;
    }
    (e = r.charCodeAt(a++)),
      (c += o.charAt(n >> 2)),
      (c += o.charAt(((3 & n) << 4) | ((240 & t) >> 4))),
      (c += o.charAt(((15 & t) << 2) | ((192 & e) >> 6))),
      (c += o.charAt(63 & e));
  }
  return c;
}
export { n as a, t as b, r as g };
