import {
  s as e,
  _ as a,
  d as t,
  u as l,
  r as s,
  g as o,
  a as d,
  b as n,
  w as c,
  e as i,
  f as p,
  h as u,
  i as r,
  j as v,
  k as m,
  p as y,
  o as f,
  c as g,
  l as k,
  m as h,
  n as b,
  q as $,
  t as x,
  v as z,
  T as C,
  x as w,
  y as I,
  z as S,
  F as _,
  A as L,
  B,
  C as E,
  D as T,
  E as R,
  G as j,
  H as K,
  I as N,
  J as F,
  K as M,
} from "./index-4f9d678f.js";
import { w as O } from "./wxjssdk-2ab43263.js";
import { g as U } from "./sign-54d406fa.js";
const A = (e) => (N("data-v-4ec6378b"), (e = e()), F(), e),
  J = { id: "page-202507" },
  D = { key: 0, id: "mm", class: "scene-layer bg-mm" },
  G = A(() => k("div", { class: "icon-mm-title" }, null, -1)),
  W = [A(() => k("div", { class: "icon-mm-role" }, null, -1))],
  q = A(() =>
    k(
      "div",
      { class: "mm-top" },
      [
        k("span", { class: "icon-logo" }),
        k("span", { class: "icon-logo-line" }),
        k("span", { class: "icon-logo2" }),
      ],
      -1
    )
  ),
  H = { class: "mm-bottom" },
  P = { class: "mm-bottom-2" },
  Q = A(() => k("span", { class: "icon-role-2" }, null, -1)),
  V = { class: "icon-face-1" },
  X = { class: "icon-face-2" },
  Y = { id: "hand-box" },
  Z = A(() => k("span", { class: "icon-role-hand-1" }, null, -1)),
  ee = A(() => k("span", { class: "icon-role-hand-2" }, null, -1)),
  ae = A(() => k("span", { id: "hand-check" }, null, -1)),
  te = A(() => k("span", { id: "hand-dot" }, null, -1)),
  le = A(() => k("span", { class: "icon-role-1" }, null, -1)),
  se = ["id"],
  oe = ["id"],
  de = { class: "icon-topbar-time" },
  ne = { class: "icon-topbar-score" },
  ce = { id: "page-dialogs", class: "scene-layer" },
  ie = { key: 0, class: "dialogs-record" },
  pe = { class: w("bg-record") },
  ue = { class: "recode-tab" },
  re = { key: 0, class: "recode-list" },
  ve = ["onClick"],
  me = ["src"],
  ye = { key: 1, class: "recode-list" },
  fe = ["onClick"],
  ge = ["src"],
  ke = { key: 0 },
  he = { class: "dialogs-puzzle" },
  be = { class: "bg-puzzle" },
  $e = { class: "puzzle-content" },
  xe = ["src"],
  ze = [A(() => k("div", { class: w("bg-rule") }, null, -1))],
  Ce = [A(() => k("div", { class: w("bg-date") }, null, -1))],
  we = { class: "dialogs-rank bg-rank" },
  Ie = { class: "rank-list" },
  Se = A(() => k("span", { class: "rank-item-num" }, null, -1)),
  _e = { class: "rank-item-name" },
  Le = { class: "rank-item-score" },
  Be = A(() => k("i", { class: w("num-rank-fen") }, null, -1)),
  Ee = { key: 0 },
  Te = { class: "dialogs-game-over" },
  Re = { class: "game-over-score" },
  je = { key: 0 },
  Ke = { class: "dialogs-pause" },
  Ne = { key: 0, class: "bg-guide-1" },
  Fe = { key: 1, class: "bg-guide-2" },
  Me = { key: 1, class: w("bg-game-tips") },
  Oe = { class: "game-tips-title-text" },
  Ue = { class: "game-tips-content" },
  Ae = A(() => k("br", null, null, -1)),
  Je = [A(() => k("div", { class: "dialogs-share icon-share" }, null, -1))],
  De = { id: "audio-list" },
  Ge = ["id", "src", "loop"],
  We = R(
    '<div style="" data-v-4ec6378b><span class="icon-role-1" data-v-4ec6378b></span><span class="icon-role-2" data-v-4ec6378b></span><span class="icon-face-1" data-v-4ec6378b></span><span class="icon-face-2" data-v-4ec6378b></span><span class="icon-d-8" data-v-4ec6378b></span></div>',
    1
  ),
  qe = a(
    t({
      __name: "index",
      setup(a) {
        var t;
        let R,
          N,
          F,
          A = "./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image";
        // "https://cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image";
        const { proxy: qe } = M();
        let He = new O({});
        const Pe = l();
        let Qe = "",
          Ve = s({
            maxLevel: 5,
            skin: [1, 1, 1, 1, 1],
            levelScore: [3, 4, 5, 5, 5],
            levelTime: [60, 60, 60, 60, 60],
            puzzleIdList: [1, 2],
            puzzleImgList: ["1.jpg", "2.jpg"],
            whiteList: [__UNION_ID__],
            speedFly: 350,
            everyLevelScore: 3e3,
            everyTimeScore: 50,
            everyFindScore: 200,
            skinTitle: ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
            showRank: !1,
            levetTips: [
              [1, 2],
              [1, 3],
              [1, 4],
              [1, 4],
              [4, 1],
              [2, 3],
            ],
          });
        const Xe = (null == (t = Pe.params) ? void 0 : t.userInfo) ?? {};
        F = (null == Xe ? void 0 : Xe.unionid) ?? "";
        const Ye = s("mm"),
          Ze = s(""),
          ea = s([]),
          aa = s(o(1600)),
          ta = s(o(1600)),
          la = s(0),
          sa = s(!1),
          oa = s(!1),
          da = s(1),
          na = s(0),
          ca = s([]),
          ia = s(0),
          pa = s([]),
          ua = s(!1),
          ra = s(!1),
          va = s([]),
          ma = s(null),
          ya = s(null),
          fa = s(),
          ga = s(1),
          ka = s(null),
          ha = s([]);
        let ba = null,
          $a = null;
        const xa = d({
            volume: !1,
            audioList: [
              {
                name: "bgm",
                src: `${A}/audio/bgm.mp3`,
                loop: !0,
              },
              {
                name: "hand-down",
                src: `${A}/audio/hand-down.mp3`,
                loop: !1,
              },
              {
                name: "good",
                src: `${A}/audio/good.mp3`,
                loop: !1,
              },
              {
                name: "bad",
                src: `${A}/audio/bad.mp3`,
                loop: !1,
              },
            ],
          }),
          za = n(() =>
            Ve.value.whiteList.includes(F)
              ? Ve.value.levelScore.length
              : Ve.value.maxLevel
          );
        c(na, (e) => {
          e >= Ve.value.levelScore[da.value - 1] &&
            (da.value < za.value ? wa(!0) : Ea(!0));
        });
        const Ca = n(() => {
            try {
              const e = new Map();
              ha.value.forEach((a) => {
                e.has(a.id) || e.set(a.id, new Set()), e.get(a.id).add(a.type);
              });
              const a = [];
              for (const [t, l] of e.entries())
                [1, 2, 3, 4].every((e) => l.has(e)) && a.push(t);
              return a;
            } catch (e) {
              return [];
            }
          }),
          wa = (a = !1) => {
            a
              ? (pa.value.push(ia.value), ca.value.push(na.value), da.value++)
              : ((da.value = 1), (ca.value = []), (pa.value = [])),
              (na.value = 0),
              (sa.value = !1),
              (Ye.value = "game"),
              (Ze.value = `game-tips-${da.value}`),
              (oa.value = !1),
              (ra.value = !1),
              (va.value = ((a) => {
                let t;
                return (
                  1 === a
                    ? (t = [
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 50,
                          left: 280,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 370,
                          left: 30,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.6,
                          rotate: 0,
                          top: 400,
                          left: 480,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 30,
                          left: 450,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.4,
                          rotate: 0,
                          top: 200,
                          left: 50,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.9,
                          rotate: 0,
                          top: 220,
                          left: 220,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 220,
                          left: 600,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 500,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 700,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 650,
                          left: 330,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 700,
                          left: 600,
                          dead: 0,
                        },
                      ])
                    : 2 === a
                    ? (t = [
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 50,
                          left: 280,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.5,
                          rotate: 0,
                          top: 370,
                          left: 30,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.6,
                          rotate: 0,
                          top: 550,
                          left: 150,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 13,
                          scale: 0.6,
                          rotate: 0,
                          top: 580,
                          left: 480,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.6,
                          rotate: 0,
                          top: 380,
                          left: 520,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 30,
                          left: 450,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.4,
                          rotate: 0,
                          top: 200,
                          left: 50,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.9,
                          rotate: 0,
                          top: 220,
                          left: 220,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 220,
                          left: 600,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 500,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 700,
                          left: 100,
                          dead: 0,
                        },
                      ])
                    : 3 === a
                    ? (t = [
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 580,
                          left: 260,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 320,
                          left: 30,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.6,
                          rotate: 0,
                          top: 600,
                          left: 80,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.6,
                          rotate: 0,
                          top: 150,
                          left: 300,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 14,
                          scale: 0.6,
                          rotate: 0,
                          top: 500,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 180,
                          left: 40,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 550,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.55,
                          rotate: 0,
                          top: 350,
                          left: 570,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 470,
                          left: 60,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.9,
                          rotate: 0,
                          top: 0,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 0,
                          left: 350,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 220,
                          left: 600,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 350,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 470,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 650,
                          left: 330,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.5,
                          rotate: 0,
                          top: 700,
                          left: 600,
                          dead: 0,
                        },
                      ])
                    : 4 === a
                    ? (t = [
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 150,
                          left: 600,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 450,
                          left: 100,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.48,
                          rotate: 0,
                          top: 150,
                          left: 150,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 14,
                          scale: 0.5,
                          rotate: 0,
                          top: 350,
                          left: 300,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 13,
                          scale: 0.5,
                          rotate: 0,
                          top: 600,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 80,
                          left: 0,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 120,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: 0,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 300,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.75,
                          rotate: 0,
                          top: 180,
                          left: 350,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: 300,
                          left: 560,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 450,
                          left: 550,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.9,
                          rotate: 0,
                          top: 550,
                          left: 280,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: 600,
                          left: 50,
                          dead: 0,
                        },
                      ])
                    : 5 === a
                    ? (t = [
                        {
                          type: 9,
                          scale: 0.55,
                          rotate: 0,
                          top: 300,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 100,
                          left: 80,
                          dead: 0,
                          gift: 0,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 420,
                          left: 250,
                          dead: 0,
                          score: 1,
                          gift: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 300,
                          left: 350,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 630,
                          left: 420,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 650,
                          left: 150,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.55,
                          rotate: 0,
                          top: 370,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 480,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: -20,
                          left: 110,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 0,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 230,
                          left: 20,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 520,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.6,
                          rotate: 0,
                          top: 300,
                          left: 200,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.65,
                          rotate: 0,
                          top: 530,
                          left: 50,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 650,
                          left: 250,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 750,
                          left: 450,
                          dead: 0,
                        },
                      ])
                    : a >= 6 &&
                      (t = [
                        {
                          type: 9,
                          scale: 0.6,
                          rotate: 0,
                          top: 400,
                          left: 30,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.6,
                          rotate: 0,
                          top: 300,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 13,
                          scale: 0.55,
                          rotate: 0,
                          top: 620,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 7,
                          scale: 0.7,
                          rotate: 0,
                          top: 600,
                          left: 200,
                          dead: 0,
                          score: 1,
                          gift: 1,
                        },
                        {
                          type: 7,
                          scale: 0.6,
                          rotate: 0,
                          top: 180,
                          left: 30,
                          dead: 0,
                          gift: 0,
                        },
                        {
                          type: 7,
                          scale: 0.6,
                          rotate: 0,
                          top: 100,
                          left: 530,
                          dead: 0,
                          gift: 0,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 300,
                          left: 350,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: 0,
                          left: 20,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.75,
                          rotate: 0,
                          top: -20,
                          left: 520,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 200,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 370,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.8,
                          rotate: 0,
                          top: 450,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 480,
                          left: 550,
                          dead: 0,
                        },
                        {
                          type: 3,
                          scale: 0.7,
                          rotate: 0,
                          top: 600,
                          left: 50,
                          dead: 0,
                        },
                      ]),
                  e(JSON.parse(JSON.stringify(t)))
                );
              })(da.value)),
              Ia();
          },
          Ia = () => {
            ba && clearInterval(ba),
              (ba = null),
              (ia.value = Ve.value.levelTime[da.value - 1]),
              (ba = setInterval(() => {
                Ze.value || ia.value--,
                  ia.value <= 0 &&
                    (ba && clearInterval(ba), (ba = null), Ea(!1));
              }, 1e3));
          },
          Sa = () => {
            let e = document.getElementById("hand-check"),
              a = document.getElementById("hand-box");
            if (!e || !a) return;
            const t = window.getComputedStyle(a).height;
            let l = e.getBoundingClientRect();
            const { x: s, y: o, width: d } = l;
            if (1 === la.value) {
              if (s < 0 || s + d > 750 || "1120px" === t)
                return void (la.value = 2);
              {
                let e = document.getElementById("game-main"),
                  a = document.getElementById("hand-dot");
                if (!e || !a) return;
                const t = a.getBoundingClientRect(),
                  { x: l, y: s } = t;
                Array.from(e.children).forEach((e, a) => {
                  const t = e.getBoundingClientRect(),
                    { left: o, right: d, bottom: n, top: c } = t;
                  if (!va.value[a].dead && l > o && l < d && s > c && s < n)
                    return (
                      (ma.value = va.value[a]),
                      (ma.value.dead = 1),
                      (la.value = 2),
                      void (va.value[a].score || 7 === va.value[a].type
                        ? Ka("good")
                        : Ka("bad"))
                    );
                });
              }
            } else
              2 === la.value &&
                Math.abs(parseInt(t) - parseInt("100px")) <= 5 &&
                _a();
          },
          _a = () => {
            if (
              ($a && clearInterval($a),
              ($a = null),
              (la.value = 0),
              ma.value && !oa.value)
            ) {
              const { type: e, score: a = 0, gift: t = 0 } = ma.value;
              if (((na.value += a), 2 === t))
                for (let l = 0; l < va.value.length; l++)
                  if (
                    7 !== va.value[l].type &&
                    !va.value[l].dead &&
                    !va.value[l].score
                  ) {
                    La(l);
                    break;
                  }
              setTimeout(() => {
                ma.value = null;
              }, 100);
            }
          },
          La = (e) => {
            const a = document.getElementById("hand-dot"),
              t = document.getElementById(`icon-index-${e}`);
            if (!a || !t) return;
            const l = va.value[e],
              s = a.getBoundingClientRect(),
              o = t.getBoundingClientRect(),
              { left: d, top: n } = o;
            (ya.value = { target: l, startRect: s, endRect: o }),
              j(() => {
                const e = document.getElementById("game-fly");
                if (!e) return;
                e.animate(
                  [{ top: n + "px", left: d + "px", rotate: "360deg" }],
                  {
                    duration: Ve.value.speedFly,
                    iterations: 1,
                    easing: "linear",
                    fill: "forwards",
                  }
                ).onfinish = () => {
                  (ya.value = null), (l.dead = 1);
                };
              });
          },
          Ba = (e) => {
            (Ze.value = e), "pause" === e && (sa.value = !0);
          },
          Ea = (e = !1) => {
            ba && clearInterval(ba),
              (ba = null),
              (oa.value = !0),
              (ra.value = e),
              pa.value.push(ia.value),
              ca.value.push(na.value);
            const a = 10 * da.value + na.value,
              t = pa.value.reduce((e, a) => e + a, 0);
            let l = 0;
            (l += da.value * Ve.value.everyLevelScore),
              (l +=
                ca.value.reduce((e, a) => e + a, 0) * Ve.value.everyFindScore),
              (l +=
                pa.value.reduce((e, a) => e + a, 0) * Ve.value.everyTimeScore),
              (fa.value = l),
              (ka.value = null);
            const s = {};
            if (e) {
              const e =
                  Ve.value.puzzleIdList[i(0, Ve.value.puzzleIdList.length - 1)],
                a = i(1, 4);
              (ka.value = { id: e, type: a }),
                (Ze.value = "puzzle"),
                (s.puzzle = { ...ka.value });
            } else Ze.value = e ? "success" : "fail";
            p({
              ownerUnionid: F,
              activityKey: R,
              gameScore: l,
              levelNum: a,
              playTime: t,
              k: Qe,
              s: U({ k: Qe, unionid: F, score: l, level: a }),
              extra: s,
            }).then(() => {
              ja(), Ra();
            });
          },
          Ta = (e) => {
            (Ze.value = ""),
              (sa.value = !1),
              1 === e
                ? ((Ye.value = "mm"), ba && clearInterval(ba), (ba = null))
                : 2 === e && wa();
          },
          Ra = () => {
            Ve.value.showRank &&
              u({ activityKey: R, periodNum: N, unionid: F, k: Qe }).then(
                ({ code: e, data: a }) => {
                  ea.value = a;
                }
              );
          },
          ja = () => {
            r({ activityKey: R, periodNum: N, ownerUnionid: F }).then(
              ({ code: e, data: a }) => {
                if (null == a ? void 0 : a.length) {
                  const e = [];
                  a.map((a) => {
                    var t;
                    (null == (t = null == a ? void 0 : a.extra)
                      ? void 0
                      : t.puzzle) && e.push(a.extra.puzzle);
                  });
                  const t = new Map();
                  e.forEach((e) => {
                    const a = `${e.id}_${e.type}`;
                    t.has(a) ? t.get(a).count++ : t.set(a, { ...e, count: 1 });
                  }),
                    (ha.value = Array.from(t.values()));
                }
              }
            );
          },
          Ka = (e, a = !1) => {
            K(xa, e, a);
          },
          Na = (e) => {
            const a = (1e3 * (1 - aa.value)) / 1.3;
            if ("game-main" === e) return { bottom: `-${a}px` };
            if ("game-bg" === e) return { top: -a + "px" };
            if ("game-top" === e) {
              return { bottom: 1100 - 1.08 * a + "px" };
            }
          },
          Fa = (e) => {
            He.onSaveImage(e)
              .then((e) => {
                Ma(e);
              })
              .catch((e) => {
                Ma(e);
              });
          },
          Ma = (e) => {
            qe.$Message.success(e);
          };
        return (
          v(() => {
            var e, a;
            (R = (null == (e = Pe.meta) ? void 0 : e.activityKey) ?? "202507"),
              (N = (null == (a = Pe.meta) ? void 0 : a.periodNum) ?? 1),
              m({ activityKey: R }).then(({ code: e, data: a }) => {
                0 === e &&
                  ((Qe = a.k), a.extra && (Ve.value = a.extra), ja(), Ra());
              }),
              He.ready(() => {
                var e, a, t;
                Ka("bgm", !0),
                  He.updateShareData({
                    title: (null == (e = Pe.meta) ? void 0 : e.title) ?? "",
                    desc: (null == (a = Pe.meta) ? void 0 : a.desc) ?? "",
                    link: location.origin + Pe.path,
                    imgUrl: (null == (t = Pe.meta) ? void 0 : t.imgUrl) ?? "",
                  }),
                  document.addEventListener("visibilitychange", (e) => {
                    document.hidden ? y() : xa.volume && Ka("bgm", !0);
                  });
              });
          }),
          (e, a) => (
            f(),
            g(
              _,
              null,
              [
                k("div", J, [
                  h(
                    C,
                    { name: "fade" },
                    {
                      default: b(() => [
                        "mm" == Ye.value
                          ? (f(),
                            g("div", D, [
                              G,
                              k(
                                "div",
                                {
                                  class: "mm-role-box",
                                  style: $(`transform:scale(${aa.value})`),
                                },
                                W,
                                4
                              ),
                              q,
                              k("div", H, [
                                k("span", {
                                  class: "btn-start",
                                  onClick:
                                    a[0] ||
                                    (a[0] = (e) => (
                                      (Ye.value = "game"), void wa()
                                    )),
                                }),
                                k("span", {
                                  class: "btn-rule",
                                  onClick: a[1] || (a[1] = (e) => Ba("rule")),
                                }),
                              ]),
                              k("div", P, [
                                k("div", {
                                  class: "btn-record",
                                  onClick: a[2] || (a[2] = (e) => Ba("record")),
                                }),
                                k("div", {
                                  class: "btn-date",
                                  onClick: a[3] || (a[3] = (e) => Ba("date")),
                                }),
                                k("div", {
                                  class: "btn-rank",
                                  onClick:
                                    a[4] ||
                                    (a[4] = (e) =>
                                      x(Ve).showRank
                                        ? Ba("rank")
                                        : Ma(
                                            "「狂野」排行榜将在7月14日开启哦！"
                                          )),
                                }),
                              ]),
                            ]))
                          : z("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                  h(
                    C,
                    { name: "fade" },
                    {
                      default: b(() => {
                        var e;
                        return [
                          "game" === Ye.value
                            ? (f(),
                              g(
                                "div",
                                {
                                  key: 0,
                                  id: "game",
                                  class: w({
                                    "moving-down": 1 === la.value,
                                    "moving-up": 2 === la.value,
                                    "has-fish": ma.value,
                                    "moving-up-solw":
                                      ma.value && ma.value.type <= 4,
                                  }),
                                },
                                [
                                  k(
                                    "div",
                                    {
                                      class: w([
                                        "game-bg",
                                        `bg-game-${x(Ve).skin[da.value - 1]}`,
                                      ]),
                                      style: $(Na("game-bg")),
                                    },
                                    null,
                                    6
                                  ),
                                  k(
                                    "div",
                                    {
                                      id: "game-top",
                                      style: $(Na("game-top")),
                                    },
                                    [
                                      k(
                                        "div",
                                        {
                                          id: "game-role",
                                          class: w([
                                            { rotate: !la.value && !Ze.value },
                                            `level-${da.value}`,
                                          ]),
                                        },
                                        [
                                          Q,
                                          I(k("span", V, null, 512), [
                                            [S, 2 !== la.value],
                                          ]),
                                          I(k("span", X, null, 512), [
                                            [S, 2 === la.value],
                                          ]),
                                          k("div", Y, [
                                            Z,
                                            (
                                              null == (e = ma.value)
                                                ? void 0
                                                : e.type
                                            )
                                              ? (f(),
                                                g(
                                                  "span",
                                                  {
                                                    key: 0,
                                                    id: "hand-fish",
                                                    class: w(
                                                      `icon-d-${ma.value.type}${
                                                        ma.value.type >= 9 ||
                                                        5 === ma.value.type ||
                                                        4 === ma.value.type
                                                          ? "-1"
                                                          : ""
                                                      }`
                                                    ),
                                                  },
                                                  null,
                                                  2
                                                ))
                                              : z("", !0),
                                            ee,
                                            ae,
                                            te,
                                          ]),
                                          le,
                                        ],
                                        2
                                      ),
                                    ],
                                    4
                                  ),
                                  k(
                                    "div",
                                    {
                                      id: "game-main",
                                      style: $(Na("game-main")),
                                    },
                                    [
                                      (f(!0),
                                      g(
                                        _,
                                        null,
                                        L(
                                          va.value,
                                          (e, a) => (
                                            f(),
                                            g(
                                              _,
                                              { key: "fish-" + a },
                                              [
                                                e.move
                                                  ? (f(),
                                                    g(
                                                      "span",
                                                      {
                                                        key: 1,
                                                        id: "icon-index-" + a,
                                                        class: w([
                                                          `icon-d-${e.type}`,
                                                          `p-${e.p}`,
                                                          { dead: e.dead },
                                                        ]),
                                                        style: $(
                                                          `\n                                top:${e.top}px;\n                                left:${e.left}px;\n                            `
                                                        ),
                                                      },
                                                      null,
                                                      14,
                                                      oe
                                                    ))
                                                  : (f(),
                                                    g(
                                                      "span",
                                                      {
                                                        key: 0,
                                                        id: "icon-index-" + a,
                                                        class: w([
                                                          `icon-d-${e.type}`,
                                                          { dead: e.dead },
                                                        ]),
                                                        style: $(
                                                          `\n                                transform:scale(${e.scale}) rotate(${e.rotate}deg);\n                                top:${e.top}px;\n                                left:${e.left}px;\n                            `
                                                        ),
                                                      },
                                                      null,
                                                      14,
                                                      se
                                                    )),
                                              ],
                                              64
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ],
                                    4
                                  ),
                                  k(
                                    "div",
                                    {
                                      id: "game-touch",
                                      onTouchstart:
                                        a[5] ||
                                        (a[5] = (e) => {
                                          la.value ||
                                            ((la.value = 1),
                                            (ma.value = null),
                                            ($a = setInterval(() => {
                                              Sa();
                                            }, 50)),
                                            Ka("hand-down"));
                                        }),
                                    },
                                    null,
                                    32
                                  ),
                                  ya.value
                                    ? (f(),
                                      g(
                                        "div",
                                        {
                                          key: 0,
                                          id: "game-fly",
                                          class: "icon-d-8",
                                          style: $(
                                            `\n                    top:${ya.value.startRect.top}px;\n                    left:${ya.value.startRect.left}px;\n                `
                                          ),
                                        },
                                        null,
                                        4
                                      ))
                                    : z("", !0),
                                  k("span", {
                                    class: "btn-pause",
                                    onClick:
                                      a[6] ||
                                      (a[6] = B((e) => Ba("pause"), ["stop"])),
                                  }),
                                  k("span", de, E(ia.value) + "s", 1),
                                  k(
                                    "span",
                                    ne,
                                    E(na.value) +
                                      " / " +
                                      E(x(Ve).levelScore[da.value - 1]),
                                    1
                                  ),
                                ],
                                2
                              ))
                            : z("", !0),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                  I(
                    k(
                      "div",
                      ce,
                      [
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "record" === Ze.value
                                ? (f(),
                                  g("div", ie, [
                                    k("div", pe, [
                                      k("div", ue, [
                                        k(
                                          "span",
                                          {
                                            onClick:
                                              a[7] ||
                                              (a[7] = (e) => (ga.value = 1)),
                                            class: w({
                                              active: 1 === ga.value,
                                            }),
                                          },
                                          "已收集",
                                          2
                                        ),
                                        k(
                                          "span",
                                          {
                                            onClick:
                                              a[8] ||
                                              (a[8] = (e) => (ga.value = 2)),
                                            class: w({
                                              active: 2 === ga.value,
                                            }),
                                          },
                                          "已解锁",
                                          2
                                        ),
                                      ]),
                                      1 === ga.value
                                        ? (f(),
                                          g("div", re, [
                                            (f(!0),
                                            g(
                                              _,
                                              null,
                                              L(
                                                ha.value,
                                                (e, a) => (
                                                  f(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "record-item-" + a,
                                                      onClick: (a) =>
                                                        Fa(
                                                          `${x(A)}/w/${e.id}-${
                                                            e.type
                                                          }.png`
                                                        ),
                                                    },
                                                    [
                                                      k(
                                                        "img",
                                                        {
                                                          src: `${x(A)}/w/${
                                                            e.id
                                                          }-${e.type}.png`,
                                                        },
                                                        null,
                                                        8,
                                                        me
                                                      ),
                                                    ],
                                                    8,
                                                    ve
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : z("", !0),
                                      2 === ga.value
                                        ? (f(),
                                          g("div", ye, [
                                            (f(!0),
                                            g(
                                              _,
                                              null,
                                              L(
                                                Ca.value,
                                                (e, a) => (
                                                  f(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "finish-item-" + a,
                                                      onClick: (a) =>
                                                        Fa(
                                                          `${x(A)}/w/${
                                                            x(Ve).puzzleImgList[
                                                              e - 1
                                                            ]
                                                          }`
                                                        ),
                                                    },
                                                    [
                                                      k(
                                                        "img",
                                                        {
                                                          src: `${x(A)}/w/${
                                                            x(Ve).puzzleImgList[
                                                              e - 1
                                                            ]
                                                          }`,
                                                        },
                                                        null,
                                                        8,
                                                        ge
                                                      ),
                                                    ],
                                                    8,
                                                    fe
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : z("", !0),
                                      k("span", {
                                        class: "dialogs-close",
                                        onClick: a[9] || (a[9] = (e) => Ba("")),
                                      }),
                                    ]),
                                  ]))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "puzzle" === Ze.value
                                ? (f(),
                                  g("div", ke, [
                                    k("div", he, [
                                      k("div", be, [
                                        k("div", $e, [
                                          k(
                                            "img",
                                            {
                                              src: `${x(A)}/w/${ka.value.id}-${
                                                ka.value.type
                                              }.png`,
                                            },
                                            null,
                                            8,
                                            xe
                                          ),
                                        ]),
                                        k("span", {
                                          class: "dialogs-close",
                                          onClick:
                                            a[10] ||
                                            (a[10] = (e) =>
                                              Ba(
                                                ra.value ? "success" : "fail"
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-save",
                                          onClick:
                                            a[11] ||
                                            (a[11] = (e) =>
                                              Fa(
                                                `${x(A)}/w/${ka.value.id}-${
                                                  ka.value.type
                                                }.png`
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-back",
                                          onClick:
                                            a[12] ||
                                            (a[12] = (e) =>
                                              Ba(
                                                ra.value ? "success" : "fail"
                                              )),
                                        }),
                                      ]),
                                    ]),
                                  ]))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "rule" === Ze.value
                                ? (f(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-rule",
                                      onClick:
                                        a[13] ||
                                        (a[13] = B((e) => Ba(""), ["stop"])),
                                      style: $(`transform:scale(${ta.value})`),
                                    },
                                    ze,
                                    4
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "date" === Ze.value
                                ? (f(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-date",
                                      onClick:
                                        a[14] ||
                                        (a[14] = B((e) => Ba(""), ["stop"])),
                                    },
                                    Ce
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "rank" === Ze.value
                                ? (f(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      style: $(`transform:scale(${ta.value})`),
                                    },
                                    [
                                      k("div", we, [
                                        k("span", {
                                          class: "rank-close",
                                          onClick:
                                            a[15] || (a[15] = (e) => Ba("")),
                                        }),
                                        k("div", Ie, [
                                          (f(!0),
                                          g(
                                            _,
                                            null,
                                            L(ea.value, (e, a) => {
                                              var t;
                                              return (
                                                f(),
                                                g(
                                                  "span",
                                                  {
                                                    class: w([
                                                      "rank-item",
                                                      `num-rank-head-${a + 1}`,
                                                    ]),
                                                    key: "rank-item-" + a,
                                                  },
                                                  [
                                                    Se,
                                                    k(
                                                      "span",
                                                      _e,
                                                      E(
                                                        (null ==
                                                        (t = e.userInfo)
                                                          ? void 0
                                                          : t.nickname) ?? ""
                                                      ),
                                                      1
                                                    ),
                                                    k("span", Le, [
                                                      (f(!0),
                                                      g(
                                                        _,
                                                        null,
                                                        L(
                                                          e.gameScore + "",
                                                          (e, a) => (
                                                            f(),
                                                            g(
                                                              "i",
                                                              {
                                                                key:
                                                                  "topbar-score-" +
                                                                  a,
                                                                class: w(
                                                                  `num-rank-${e}`
                                                                ),
                                                              },
                                                              null,
                                                              2
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      )),
                                                      Be,
                                                    ]),
                                                  ],
                                                  2
                                                )
                                              );
                                            }),
                                            128
                                          )),
                                        ]),
                                      ]),
                                    ],
                                    4
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              ["success", "fail"].includes(Ze.value)
                                ? (f(),
                                  g("div", Ee, [
                                    k("div", Te, [
                                      k(
                                        "span",
                                        {
                                          class: w([
                                            "game-over-title",
                                            `icon-${Ze.value}-title`,
                                          ]),
                                        },
                                        [
                                          k(
                                            "span",
                                            Re,
                                            "本次得分为：" + E(fa.value),
                                            1
                                          ),
                                        ],
                                        2
                                      ),
                                      k(
                                        "span",
                                        {
                                          class: w([
                                            "game-over-role",
                                            `icon-${Ze.value}-role`,
                                          ]),
                                        },
                                        null,
                                        2
                                      ),
                                      k("span", {
                                        class: "btn-back",
                                        onClick:
                                          a[16] || (a[16] = (e) => Ta(1)),
                                      }),
                                    ]),
                                  ]))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "pause" === Ze.value
                                ? (f(),
                                  g("div", je, [
                                    k("div", Ke, [
                                      k("span", {
                                        class: "btn-pause-home",
                                        onClick:
                                          a[17] || (a[17] = (e) => Ta(1)),
                                      }),
                                      k("span", {
                                        class: "btn-pause-continue",
                                        onClick:
                                          a[18] || (a[18] = (e) => Ta(3)),
                                      }),
                                    ]),
                                  ]))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              -1 !== Ze.value.indexOf("game-tips")
                                ? (f(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        a[19] ||
                                        (a[19] = B(
                                          (e) =>
                                            Ba(
                                              1 === da.value
                                                ? "game-tips-1" === Ze.value
                                                  ? "game-tips-guide-1"
                                                  : "game-tips-guide-1" ===
                                                    Ze.value
                                                  ? "game-tips-guide-2"
                                                  : ""
                                                : ""
                                            ),
                                          ["stop"]
                                        )),
                                    },
                                    [
                                      -1 !== Ze.value.indexOf("guide")
                                        ? (f(),
                                          g(
                                            _,
                                            { key: 0 },
                                            [
                                              "game-tips-guide-1" === Ze.value
                                                ? (f(), g("div", Ne))
                                                : z("", !0),
                                              "game-tips-guide-2" === Ze.value
                                                ? (f(), g("div", Fe))
                                                : z("", !0),
                                            ],
                                            64
                                          ))
                                        : (f(),
                                          g("div", Me, [
                                            k(
                                              "span",
                                              Oe,
                                              "第" + E(da.value) + "关",
                                              1
                                            ),
                                            k(
                                              "span",
                                              {
                                                class: w([
                                                  "game-tips-title-icon",
                                                  `icon-t-${
                                                    x(Ve).skin[da.value - 1]
                                                  }`,
                                                ]),
                                              },
                                              null,
                                              2
                                            ),
                                            k("div", Ue, [
                                              T(
                                                " 本关时间" +
                                                  E(
                                                    x(Ve).levelTime[
                                                      da.value - 1
                                                    ]
                                                  ) +
                                                  "秒， ",
                                                1
                                              ),
                                              Ae,
                                              T(
                                                " 需要收集" +
                                                  E(
                                                    x(Ve).levetTips[
                                                      da.value - 1
                                                    ][0]
                                                  ) +
                                                  "个碎片和" +
                                                  E(
                                                    x(Ve).levetTips[
                                                      da.value - 1
                                                    ][1]
                                                  ) +
                                                  "同伴 ",
                                                1
                                              ),
                                            ]),
                                          ])),
                                    ]
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              ua.value
                                ? (f(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        a[20] ||
                                        (a[20] = (e) => (ua.value = !1)),
                                    },
                                    Je
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ],
                      512
                    ),
                    [[S, Ze.value || ua.value]]
                  ),
                ]),
                xa.audioList.length
                  ? (f(),
                    g(
                      _,
                      { key: 0 },
                      [
                        k(
                          "div",
                          {
                            class: w([
                              "btn-music",
                              [
                                { active: xa.volume },
                                { bottom: "game" == Ye.value },
                              ],
                            ]),
                            onClick: a[21] || (a[21] = (e) => Ka("bgm", !0)),
                          },
                          null,
                          2
                        ),
                        I(
                          k(
                            "div",
                            De,
                            [
                              (f(!0),
                              g(
                                _,
                                null,
                                L(
                                  xa.audioList,
                                  (e) => (
                                    f(),
                                    g(
                                      "audio",
                                      {
                                        id: "audio-item-" + e.name,
                                        key: "audio-item-" + e.name,
                                        src: e.src,
                                        loop: e.loop ?? !1,
                                      },
                                      null,
                                      8,
                                      Ge
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            512
                          ),
                          [[S, !1]]
                        ),
                      ],
                      64
                    ))
                  : z("", !0),
                We,
              ],
              64
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-4ec6378b"]]
  );
export { qe as default };
