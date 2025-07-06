import {
  s as e,
  _ as a,
  d as t,
  u as l,
  r as s,
  g as o,
  a as d,
  b as c,
  w as p,
  e as n,
  f as r,
  h as i,
  i as u,
  j as v,
  k as f,
  p as y,
  o as m,
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
  L as O,
} from "./index-d15e9c92.js";
import { w as U } from "./wxjssdk-85ac63cc.js";
import { g as A } from "./sign-54d406fa.js";
const J = (e) => (F("data-v-beafcb6c"), (e = e()), M(), e),
  D = { id: "page-202507" },
  G = { key: 0, id: "mm", class: "scene-layer bg-mm" },
  H = J(() => k("div", { class: "icon-mm-title" }, null, -1)),
  W = [J(() => k("div", { class: "icon-mm-role" }, null, -1))],
  q = J(() =>
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
  P = { class: "mm-bottom" },
  Q = { class: "mm-bottom-2" },
  V = J(() => k("span", { class: "icon-role-2" }, null, -1)),
  X = { class: "icon-face-1" },
  Y = { class: "icon-face-2" },
  Z = { id: "hand-box" },
  ee = J(() => k("span", { class: "icon-role-hand-1" }, null, -1)),
  ae = J(() => k("span", { class: "icon-role-hand-2" }, null, -1)),
  te = J(() => k("span", { id: "hand-check" }, null, -1)),
  le = J(() => k("span", { id: "hand-dot" }, null, -1)),
  se = J(() => k("span", { class: "icon-role-1" }, null, -1)),
  oe = ["id"],
  de = ["id"],
  ce = { class: "icon-topbar-time" },
  pe = { class: "icon-topbar-score" },
  ne = { id: "page-dialogs", class: "scene-layer" },
  re = { key: 0, class: "dialogs-record" },
  ie = { class: w("bg-record") },
  ue = { class: "recode-tab" },
  ve = { key: 0, class: "recode-list" },
  fe = ["onClick"],
  ye = ["src"],
  me = { key: 1, class: "recode-list" },
  ge = ["onClick"],
  ke = ["src"],
  he = { key: 0 },
  be = { class: "dialogs-puzzle" },
  $e = { class: "bg-puzzle" },
  xe = { class: "puzzle-content" },
  ze = ["src"],
  Ce = [J(() => k("div", { class: w("bg-rule") }, null, -1))],
  we = [J(() => k("div", { class: w("bg-date") }, null, -1))],
  Ie = { class: "dialogs-rank bg-rank" },
  Se = { class: "rank-list" },
  _e = J(() => k("span", { class: "rank-item-num" }, null, -1)),
  Le = { class: "rank-item-name" },
  Be = { class: "rank-item-score" },
  Ee = J(() => k("i", { class: w("num-rank-fen") }, null, -1)),
  Te = { key: 0 },
  Re = { class: "dialogs-game-over" },
  je = { class: "game-over-score" },
  Ke = { key: 0 },
  Ne = { class: "dialogs-pause" },
  Fe = { key: 0, class: "bg-guide-1" },
  Me = { key: 1, class: "bg-guide-2" },
  Oe = { key: 1, class: w("bg-game-tips") },
  Ue = { class: "game-tips-title-text" },
  Ae = { class: "game-tips-content" },
  Je = J(() => k("br", null, null, -1)),
  De = [J(() => k("div", { class: "dialogs-share icon-share" }, null, -1))],
  Ge = { id: "audio-list" },
  He = ["id", "src", "loop"],
  We = R(
    '<div style="" data-v-beafcb6c><span class="icon-role-1" data-v-beafcb6c></span><span class="icon-role-2" data-v-beafcb6c></span><span class="icon-face-1" data-v-beafcb6c></span><span class="icon-face-2" data-v-beafcb6c></span><span class="icon-d-8" data-v-beafcb6c></span></div>',
    1
  ),
  qe = a(
    t({
      __name: "index",
      setup(a) {
        var t;
        let R,
          F,
          M,
          J = "./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image";
        const { proxy: qe } = O();
        let Pe = new U({});
        const Qe = l();
        let Ve = "",
          Xe = s({
            maxLevel: 1,
            skin: [1],
            levelScore: [1],
            levelTime: [60],
            puzzleIdList: [5, 6],
            puzzleImgList: ["1.jpg", "2.jpg"],
            whiteList: ["ofN_u6k80H98YqXrB1gi71xMDXXE"],
            speedFly: 350,
            everyLevelScore: 3e3,
            everyTimeScore: 50,
            everyFindScore: 200,
            skinTitle: ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
            showRank: !0,
            levetTips: [[1, 2]],
          });
        const Ye = (null == (t = Qe.params) ? void 0 : t.userInfo) ?? {};
        M = (null == Ye ? void 0 : Ye.unionid) ?? "";
        const Ze = s("mm"),
          ea = s(""),
          aa = s([]),
          ta = s(o(1600)),
          la = s(o(1600)),
          sa = s(0),
          oa = s(!1),
          da = s(!1),
          ca = s(1),
          pa = s(0),
          na = s([]),
          ra = s(0),
          ia = s([]),
          ua = s(!1),
          va = s(!1),
          fa = s([]),
          ya = s(null),
          ma = s(null),
          ga = s(),
          ka = s(1),
          ha = s(null),
          ba = s([]);
        let $a = null,
          xa = null;
        const za = d({
            volume: !1,
            audioList: [
              { name: "bgm", src: `${J}/audio/bgm.mp3`, loop: !0 },
              { name: "hand-down", src: `${J}/audio/hand-down.mp3`, loop: !1 },
              { name: "good", src: `${J}/audio/good.mp3`, loop: !1 },
              { name: "bad", src: `${J}/audio/bad.mp3`, loop: !1 },
            ],
          }),
          Ca = c(() =>
            Xe.value.whiteList.includes(M)
              ? Xe.value.levelScore.length
              : Xe.value.maxLevel
          );
        p(pa, (e) => {
          e >= Xe.value.levelScore[ca.value - 1] &&
            (ca.value < Ca.value ? Ia(!0) : Ta(!0));
        });
        const wa = c(() => {
            try {
              const e = new Map();
              ba.value.forEach((a) => {
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
          Ia = (a = !1) => {
            a
              ? (ia.value.push(ra.value), na.value.push(pa.value), ca.value++)
              : ((ca.value = 1), (na.value = []), (ia.value = [])),
              (pa.value = 0),
              (oa.value = !1),
              (Ze.value = "game"),
              (ea.value = `game-tips-${ca.value}`),
              (da.value = !1),
              (va.value = !1),
              (fa.value = ((a) => {
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
                    : 6 === a
                    ? (t = [
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
                      ])
                    : 7 === a
                    ? (t = [
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 150,
                          left: 530,
                          dead: 0,
                          gift: 0,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 550,
                          left: 600,
                          dead: 0,
                          gift: 2,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 150,
                          left: 230,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 450,
                          left: 170,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.5,
                          rotate: 0,
                          top: 300,
                          left: 50,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 370,
                          left: 500,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.5,
                          rotate: 0,
                          top: 650,
                          left: 300,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 1,
                          scale: 0.7,
                          rotate: 0,
                          top: 40,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.6,
                          rotate: 0,
                          top: 30,
                          left: 470,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.4,
                          rotate: 0,
                          top: 330,
                          left: 230,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 480,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 600,
                          left: 80,
                          dead: 0,
                        },
                      ])
                    : 8 === a
                    ? (t = [
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 100,
                          left: 480,
                          dead: 0,
                          gift: 0,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 550,
                          left: 600,
                          dead: 0,
                          gift: 1,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 130,
                          left: 50,
                          dead: 0,
                          gift: 2,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 150,
                          left: 230,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 450,
                          left: 170,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 220,
                          left: 600,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 300,
                          left: 50,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.5,
                          rotate: 0,
                          top: 370,
                          left: 500,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.5,
                          rotate: 0,
                          top: 650,
                          left: 300,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 1,
                          scale: 0.7,
                          rotate: 0,
                          top: 40,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.7,
                          rotate: 0,
                          top: -80,
                          left: 180,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.6,
                          rotate: 0,
                          top: 30,
                          left: 470,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.5,
                          rotate: 0,
                          top: 330,
                          left: 230,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 480,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 600,
                          left: 80,
                          dead: 0,
                        },
                      ])
                    : 9 === a &&
                      (t = [
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 90,
                          left: 550,
                          dead: 0,
                          gift: 1,
                          score: 1,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 100,
                          left: 280,
                          dead: 0,
                          gift: 2,
                        },
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 550,
                          left: 600,
                          dead: 0,
                          gift: 3,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 120,
                          left: 70,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 450,
                          left: 30,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 6,
                          scale: 0.5,
                          rotate: 0,
                          top: 530,
                          left: 500,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 14,
                          scale: 0.5,
                          rotate: 0,
                          top: 270,
                          left: 50,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 13,
                          scale: 0.5,
                          rotate: 0,
                          top: 330,
                          left: 550,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.5,
                          rotate: 0,
                          top: 620,
                          left: 300,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 1,
                          scale: 0.7,
                          rotate: 0,
                          top: -30,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.6,
                          rotate: 0,
                          top: -30,
                          left: 470,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.5,
                          rotate: 0,
                          top: 330,
                          left: 230,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.5,
                          rotate: 0,
                          top: 260,
                          left: 430,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 480,
                          left: 300,
                          dead: 0,
                        },
                        {
                          type: 1,
                          scale: 0.55,
                          rotate: 0,
                          top: 600,
                          left: 80,
                          dead: 0,
                        },
                      ]),
                  e(JSON.parse(JSON.stringify(t)))
                );
              })(ca.value)),
              Sa();
          },
          Sa = () => {
            $a && clearInterval($a),
              ($a = null),
              (ra.value = Xe.value.levelTime[ca.value - 1]),
              ($a = setInterval(() => {
                ea.value || ra.value--,
                  ra.value <= 0 &&
                    ($a && clearInterval($a), ($a = null), Ta(!1));
              }, 1e3));
          },
          _a = () => {
            let e = document.getElementById("hand-check"),
              a = document.getElementById("hand-box");
            if (!e || !a) return;
            const t = window.getComputedStyle(a).height;
            let l = e.getBoundingClientRect();
            const { x: s, y: o, width: d } = l;
            if (1 === sa.value) {
              if (s < 0 || s + d > 750 || "1120px" === t)
                return void (sa.value = 2);
              {
                let e = document.getElementById("game-main"),
                  a = document.getElementById("hand-dot");
                if (!e || !a) return;
                const t = a.getBoundingClientRect(),
                  { x: l, y: s } = t;
                Array.from(e.children).forEach((e, a) => {
                  const t = e.getBoundingClientRect(),
                    { left: o, right: d, bottom: c, top: p } = t;
                  if (!fa.value[a].dead && l > o && l < d && s > p && s < c)
                    return (
                      (ya.value = fa.value[a]),
                      (ya.value.dead = 1),
                      (sa.value = 2),
                      void (fa.value[a].score || 7 === fa.value[a].type
                        ? Na("good")
                        : Na("bad"))
                    );
                });
              }
            } else
              2 === sa.value &&
                Math.abs(parseInt(t) - parseInt("100px")) <= 5 &&
                La();
          },
          La = () => {
            if (
              (xa && clearInterval(xa),
              (xa = null),
              (sa.value = 0),
              ya.value && !da.value)
            ) {
              const { type: e, score: a = 0, gift: t = 0 } = ya.value;
              if (((pa.value += a), 2 === t))
                for (let l = 0; l < fa.value.length; l++)
                  if (
                    7 !== fa.value[l].type &&
                    !fa.value[l].dead &&
                    !fa.value[l].score
                  ) {
                    Ba(l);
                    break;
                  }
              setTimeout(() => {
                ya.value = null;
              }, 100);
            }
          },
          Ba = (e) => {
            const a = document.getElementById("hand-dot"),
              t = document.getElementById(`icon-index-${e}`);
            if (!a || !t) return;
            const l = fa.value[e],
              s = a.getBoundingClientRect(),
              o = t.getBoundingClientRect(),
              { left: d, top: c } = o;
            (ma.value = { target: l, startRect: s, endRect: o }),
              j(() => {
                const e = document.getElementById("game-fly");
                if (!e) return;
                e.animate(
                  [{ top: c + "px", left: d + "px", rotate: "360deg" }],
                  {
                    duration: Xe.value.speedFly,
                    iterations: 1,
                    easing: "linear",
                    fill: "forwards",
                  }
                ).onfinish = () => {
                  (ma.value = null), (l.dead = 1);
                };
              });
          },
          Ea = (e) => {
            (ea.value = e), "pause" === e && (oa.value = !0);
          },
          Ta = (e = !1) => {
            $a && clearInterval($a),
              ($a = null),
              (da.value = !0),
              (va.value = e),
              ia.value.push(ra.value),
              na.value.push(pa.value);
            const a = 10 * ca.value + pa.value,
              t = ia.value.reduce((e, a) => e + a, 0);
            let l = 0;
            (l += ca.value * Xe.value.everyLevelScore),
              (l +=
                na.value.reduce((e, a) => e + a, 0) * Xe.value.everyFindScore),
              (l +=
                ia.value.reduce((e, a) => e + a, 0) * Xe.value.everyTimeScore),
              (ga.value = l),
              (ha.value = null);
            const s = {};
            if (e) {
              const e =
                  Xe.value.puzzleIdList[n(0, Xe.value.puzzleIdList.length - 1)],
                a = n(1, 4);
              (ha.value = { id: e, type: a }),
                (ea.value = "puzzle"),
                (s.puzzle = { ...ha.value });
            } else ea.value = e ? "success" : "fail";
            r({
              ownerUnionid: M,
              activityKey: R,
              gameScore: l,
              levelNum: a,
              playTime: t,
              k: Ve,
              s: A({ k: Ve, unionid: M, score: l, level: a }),
              extra: s,
            }).then(() => {
              Ka(), ja();
            });
          },
          Ra = (e) => {
            (ea.value = ""),
              (oa.value = !1),
              1 === e
                ? ((Ze.value = "mm"), $a && clearInterval($a), ($a = null))
                : 2 === e && Ia();
          },
          ja = () => {
            Xe.value.showRank &&
              i({ activityKey: R, periodNum: F, unionid: M, k: Ve }).then(
                ({ code: e, data: a }) => {
                  aa.value = a;
                }
              );
          },
          Ka = () => {
            u({ activityKey: R, periodNum: F, ownerUnionid: M }).then(
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
                    (ba.value = Array.from(t.values()));
                }
              }
            );
          },
          Na = (e, a = !1) => {
            K(za, e, a);
          },
          Fa = (e) => {
            const a = (1e3 * (1 - ta.value)) / 1.3;
            if ("game-main" === e) return { bottom: `-${a}px` };
            if ("game-bg" === e) return { top: -a + "px" };
            if ("game-top" === e) {
              let e = 1100;
              return (
                N() && ((e = 990), window.innerHeight >= 1710 && (e = 1100)),
                { bottom: e - 1.08 * a + "px" }
              );
            }
          },
          Ma = (e) => {
            Pe.onSaveImage(e)
              .then((e) => {
                Oa(e);
              })
              .catch((e) => {
                Oa(e);
              });
          },
          Oa = (e) => {
            qe.$Message.success(e);
          };
        return (
          v(() => {
            var e, a;
            (R = (null == (e = Qe.meta) ? void 0 : e.activityKey) ?? "202507"),
              (F = (null == (a = Qe.meta) ? void 0 : a.periodNum) ?? 1),
              f({ activityKey: R }).then(({ code: e, data: a }) => {
                0 === e &&
                  ((Ve = a.k), a.extra && (Xe.value = a.extra), Ka(), ja());
              }),
              Pe.ready(() => {
                var e, a, t;
                Na("bgm", !0),
                  Pe.updateShareData({
                    title: (null == (e = Qe.meta) ? void 0 : e.title) ?? "",
                    desc: (null == (a = Qe.meta) ? void 0 : a.desc) ?? "",
                    link: location.origin + Qe.path,
                    imgUrl: (null == (t = Qe.meta) ? void 0 : t.imgUrl) ?? "",
                  }),
                  document.addEventListener("visibilitychange", (e) => {
                    document.hidden ? y() : za.volume && Na("bgm", !0);
                  });
              });
          }),
          (e, a) => (
            m(),
            g(
              _,
              null,
              [
                k("div", D, [
                  h(
                    C,
                    { name: "fade" },
                    {
                      default: b(() => [
                        "mm" == Ze.value
                          ? (m(),
                            g("div", G, [
                              H,
                              k(
                                "div",
                                {
                                  class: "mm-role-box",
                                  style: $(`transform:scale(${ta.value})`),
                                },
                                W,
                                4
                              ),
                              q,
                              k("div", P, [
                                k("span", {
                                  class: "btn-start",
                                  onClick:
                                    a[0] ||
                                    (a[0] = (e) => (
                                      (Ze.value = "game"), void Ia()
                                    )),
                                }),
                                k("span", {
                                  class: "btn-rule",
                                  onClick: a[1] || (a[1] = (e) => Ea("rule")),
                                }),
                              ]),
                              k("div", Q, [
                                k("div", {
                                  class: "btn-record",
                                  onClick: a[2] || (a[2] = (e) => Ea("record")),
                                }),
                                k("div", {
                                  class: "btn-date",
                                  onClick: a[3] || (a[3] = (e) => Ea("date")),
                                }),
                                k("div", {
                                  class: "btn-rank",
                                  onClick:
                                    a[4] ||
                                    (a[4] = (e) =>
                                      x(Xe).showRank
                                        ? Ea("rank")
                                        : Oa(
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
                          "game" === Ze.value
                            ? (m(),
                              g(
                                "div",
                                {
                                  key: 0,
                                  id: "game",
                                  class: w({
                                    "moving-down": 1 === sa.value,
                                    "moving-up": 2 === sa.value,
                                    "has-fish": ya.value,
                                    "moving-up-solw":
                                      ya.value && ya.value.type <= 4,
                                  }),
                                },
                                [
                                  k(
                                    "div",
                                    {
                                      class: w([
                                        "game-bg",
                                        `bg-game-${x(Xe).skin[ca.value - 1]}`,
                                      ]),
                                      style: $(Fa("game-bg")),
                                    },
                                    null,
                                    6
                                  ),
                                  k(
                                    "div",
                                    {
                                      id: "game-top",
                                      style: $(Fa("game-top")),
                                    },
                                    [
                                      k(
                                        "div",
                                        {
                                          id: "game-role",
                                          class: w([
                                            { rotate: !sa.value && !ea.value },
                                            `level-${ca.value}`,
                                          ]),
                                        },
                                        [
                                          V,
                                          I(k("span", X, null, 512), [
                                            [S, 2 !== sa.value],
                                          ]),
                                          I(k("span", Y, null, 512), [
                                            [S, 2 === sa.value],
                                          ]),
                                          k("div", Z, [
                                            ee,
                                            (
                                              null == (e = ya.value)
                                                ? void 0
                                                : e.type
                                            )
                                              ? (m(),
                                                g(
                                                  "span",
                                                  {
                                                    key: 0,
                                                    id: "hand-fish",
                                                    class: w(
                                                      `icon-d-${ya.value.type}${
                                                        ya.value.type >= 9 ||
                                                        5 === ya.value.type ||
                                                        4 === ya.value.type
                                                          ? "-1"
                                                          : ""
                                                      }`
                                                    ),
                                                  },
                                                  null,
                                                  2
                                                ))
                                              : z("", !0),
                                            ae,
                                            te,
                                            le,
                                          ]),
                                          se,
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
                                      style: $(Fa("game-main")),
                                    },
                                    [
                                      (m(!0),
                                      g(
                                        _,
                                        null,
                                        L(
                                          fa.value,
                                          (e, a) => (
                                            m(),
                                            g(
                                              _,
                                              { key: "fish-" + a },
                                              [
                                                e.move
                                                  ? (m(),
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
                                                      de
                                                    ))
                                                  : (m(),
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
                                                      oe
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
                                          sa.value ||
                                            ((sa.value = 1),
                                            (ya.value = null),
                                            (xa = setInterval(() => {
                                              _a();
                                            }, 50)),
                                            Na("hand-down"));
                                        }),
                                    },
                                    null,
                                    32
                                  ),
                                  ma.value
                                    ? (m(),
                                      g(
                                        "div",
                                        {
                                          key: 0,
                                          id: "game-fly",
                                          class: "icon-d-8",
                                          style: $(
                                            `\n                    top:${ma.value.startRect.top}px;\n                    left:${ma.value.startRect.left}px;\n                `
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
                                      (a[6] = B((e) => Ea("pause"), ["stop"])),
                                  }),
                                  k("span", ce, E(ra.value) + "s", 1),
                                  k(
                                    "span",
                                    pe,
                                    E(pa.value) +
                                      " / " +
                                      E(x(Xe).levelScore[ca.value - 1]),
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
                      ne,
                      [
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "record" === ea.value
                                ? (m(),
                                  g("div", re, [
                                    k("div", ie, [
                                      k("div", ue, [
                                        k(
                                          "span",
                                          {
                                            onClick:
                                              a[7] ||
                                              (a[7] = (e) => (ka.value = 1)),
                                            class: w({
                                              active: 1 === ka.value,
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
                                              (a[8] = (e) => (ka.value = 2)),
                                            class: w({
                                              active: 2 === ka.value,
                                            }),
                                          },
                                          "已解锁",
                                          2
                                        ),
                                      ]),
                                      1 === ka.value
                                        ? (m(),
                                          g("div", ve, [
                                            (m(!0),
                                            g(
                                              _,
                                              null,
                                              L(
                                                ba.value,
                                                (e, a) => (
                                                  m(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "record-item-" + a,
                                                      onClick: (a) =>
                                                        Ma(
                                                          `${x(J)}/w/${e.id}-${
                                                            e.type
                                                          }.png`
                                                        ),
                                                    },
                                                    [
                                                      k(
                                                        "img",
                                                        {
                                                          src: `${x(J)}/w/${
                                                            e.id
                                                          }-${e.type}.png`,
                                                        },
                                                        null,
                                                        8,
                                                        ye
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
                                      2 === ka.value
                                        ? (m(),
                                          g("div", me, [
                                            (m(!0),
                                            g(
                                              _,
                                              null,
                                              L(
                                                wa.value,
                                                (e, a) => (
                                                  m(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "finish-item-" + a,
                                                      onClick: (a) =>
                                                        Ma(
                                                          `${x(J)}/w/${
                                                            x(Xe).puzzleImgList[
                                                              e - 1
                                                            ]
                                                          }`
                                                        ),
                                                    },
                                                    [
                                                      k(
                                                        "img",
                                                        {
                                                          src: `${x(J)}/w/${
                                                            x(Xe).puzzleImgList[
                                                              e - 1
                                                            ]
                                                          }`,
                                                        },
                                                        null,
                                                        8,
                                                        ke
                                                      ),
                                                    ],
                                                    8,
                                                    ge
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : z("", !0),
                                      k("span", {
                                        class: "dialogs-close",
                                        onClick: a[9] || (a[9] = (e) => Ea("")),
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
                              "puzzle" === ea.value
                                ? (m(),
                                  g("div", he, [
                                    k("div", be, [
                                      k("div", $e, [
                                        k("div", xe, [
                                          k(
                                            "img",
                                            {
                                              src: `${x(J)}/w/${ha.value.id}-${
                                                ha.value.type
                                              }.png`,
                                            },
                                            null,
                                            8,
                                            ze
                                          ),
                                        ]),
                                        k("span", {
                                          class: "dialogs-close",
                                          onClick:
                                            a[10] ||
                                            (a[10] = (e) =>
                                              Ea(
                                                va.value ? "success" : "fail"
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-save",
                                          onClick:
                                            a[11] ||
                                            (a[11] = (e) =>
                                              Ma(
                                                `${x(J)}/w/${ha.value.id}-${
                                                  ha.value.type
                                                }.png`
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-back",
                                          onClick:
                                            a[12] ||
                                            (a[12] = (e) =>
                                              Ea(
                                                va.value ? "success" : "fail"
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
                              "rule" === ea.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-rule",
                                      onClick:
                                        a[13] ||
                                        (a[13] = B((e) => Ea(""), ["stop"])),
                                      style: $(`transform:scale(${la.value})`),
                                    },
                                    Ce,
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
                              "date" === ea.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-date",
                                      onClick:
                                        a[14] ||
                                        (a[14] = B((e) => Ea(""), ["stop"])),
                                    },
                                    we
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
                              "rank" === ea.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      style: $(`transform:scale(${la.value})`),
                                    },
                                    [
                                      k("div", Ie, [
                                        k("span", {
                                          class: "rank-close",
                                          onClick:
                                            a[15] || (a[15] = (e) => Ea("")),
                                        }),
                                        k("div", Se, [
                                          (m(!0),
                                          g(
                                            _,
                                            null,
                                            L(aa.value, (e, a) => {
                                              var t;
                                              return (
                                                m(),
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
                                                    _e,
                                                    k(
                                                      "span",
                                                      Le,
                                                      E(
                                                        (null ==
                                                        (t = e.userInfo)
                                                          ? void 0
                                                          : t.nickname) ?? ""
                                                      ),
                                                      1
                                                    ),
                                                    k("span", Be, [
                                                      (m(!0),
                                                      g(
                                                        _,
                                                        null,
                                                        L(
                                                          e.gameScore + "",
                                                          (e, a) => (
                                                            m(),
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
                                                      Ee,
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
                              ["success", "fail"].includes(ea.value)
                                ? (m(),
                                  g("div", Te, [
                                    k("div", Re, [
                                      k(
                                        "span",
                                        {
                                          class: w([
                                            "game-over-title",
                                            `icon-${ea.value}-title`,
                                          ]),
                                        },
                                        [
                                          k(
                                            "span",
                                            je,
                                            "本次得分为：" + E(ga.value),
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
                                            `icon-${ea.value}-role`,
                                          ]),
                                        },
                                        null,
                                        2
                                      ),
                                      k("span", {
                                        class: "btn-back",
                                        onClick:
                                          a[16] || (a[16] = (e) => Ra(1)),
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
                              "pause" === ea.value
                                ? (m(),
                                  g("div", Ke, [
                                    k("div", Ne, [
                                      k("span", {
                                        class: "btn-pause-home",
                                        onClick:
                                          a[17] || (a[17] = (e) => Ra(1)),
                                      }),
                                      k("span", {
                                        class: "btn-pause-continue",
                                        onClick:
                                          a[18] || (a[18] = (e) => Ra(3)),
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
                              -1 !== ea.value.indexOf("game-tips")
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        a[19] ||
                                        (a[19] = B(
                                          (e) =>
                                            Ea(
                                              1 === ca.value
                                                ? "game-tips-1" === ea.value
                                                  ? "game-tips-guide-1"
                                                  : "game-tips-guide-1" ===
                                                    ea.value
                                                  ? "game-tips-guide-2"
                                                  : ""
                                                : ""
                                            ),
                                          ["stop"]
                                        )),
                                    },
                                    [
                                      -1 !== ea.value.indexOf("guide")
                                        ? (m(),
                                          g(
                                            _,
                                            { key: 0 },
                                            [
                                              "game-tips-guide-1" === ea.value
                                                ? (m(), g("div", Fe))
                                                : z("", !0),
                                              "game-tips-guide-2" === ea.value
                                                ? (m(), g("div", Me))
                                                : z("", !0),
                                            ],
                                            64
                                          ))
                                        : (m(),
                                          g("div", Oe, [
                                            k(
                                              "span",
                                              Ue,
                                              "第" + E(ca.value) + "关",
                                              1
                                            ),
                                            k(
                                              "span",
                                              {
                                                class: w([
                                                  "game-tips-title-icon",
                                                  `icon-t-${
                                                    x(Xe).skin[ca.value - 1]
                                                  }`,
                                                ]),
                                              },
                                              null,
                                              2
                                            ),
                                            k("div", Ae, [
                                              T(
                                                " 本关时间" +
                                                  E(
                                                    x(Xe).levelTime[
                                                      ca.value - 1
                                                    ]
                                                  ) +
                                                  "秒， ",
                                                1
                                              ),
                                              Je,
                                              T(
                                                " 需要收集" +
                                                  E(
                                                    x(Xe).levetTips[
                                                      ca.value - 1
                                                    ][0]
                                                  ) +
                                                  "个碎片和" +
                                                  E(
                                                    x(Xe).levetTips[
                                                      ca.value - 1
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
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        a[20] ||
                                        (a[20] = (e) => (ua.value = !1)),
                                    },
                                    De
                                  ))
                                : z("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ],
                      512
                    ),
                    [[S, ea.value || ua.value]]
                  ),
                ]),
                za.audioList.length
                  ? (m(),
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
                                { active: za.volume },
                                { bottom: "game" == Ze.value },
                              ],
                            ]),
                            onClick: a[21] || (a[21] = (e) => Na("bgm", !0)),
                          },
                          null,
                          2
                        ),
                        I(
                          k(
                            "div",
                            Ge,
                            [
                              (m(!0),
                              g(
                                _,
                                null,
                                L(
                                  za.audioList,
                                  (e) => (
                                    m(),
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
                                      He
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
    [["__scopeId", "data-v-beafcb6c"]]
  );
export { qe as default };
