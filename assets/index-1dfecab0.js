import {
  s as e,
  _ as t,
  d as a,
  u as l,
  r as o,
  g as s,
  a as d,
  b as p,
  w as c,
  e as r,
  f as n,
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
  z as j,
  F as S,
  A as L,
  B as _,
  C as T,
  D as B,
  E,
  G as R,
  H as K,
  I as N,
  J as F,
  K as M,
  L as O,
} from "./index-8ef695a2.js";
import { w as U } from "./wxjssdk-9207b813.js";
import { g as A } from "./sign-54d406fa.js";
const J = (e) => (F("data-v-18f69434"), (e = e()), M(), e),
  D = { id: "page-202507" },
  H = { key: 0, id: "mm", class: "scene-layer bg-mm" },
  q = J(() => k("div", { class: "icon-mm-title" }, null, -1)),
  G = [J(() => k("div", { class: "icon-mm-role" }, null, -1))],
  P = J(() =>
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
  Q = { class: "mm-bottom" },
  V = { class: "mm-bottom-2" },
  W = J(() => k("span", { class: "icon-role-2" }, null, -1)),
  X = { class: "icon-face-1" },
  Y = { class: "icon-face-2" },
  Z = { id: "hand-box" },
  ee = J(() => k("span", { class: "icon-role-hand-1" }, null, -1)),
  te = J(() => k("span", { class: "icon-role-hand-2" }, null, -1)),
  ae = J(() => k("span", { id: "hand-check" }, null, -1)),
  le = J(() => k("span", { id: "hand-dot" }, null, -1)),
  oe = J(() => k("span", { class: "icon-role-1" }, null, -1)),
  se = ["id"],
  de = ["id"],
  pe = { class: "icon-topbar-time" },
  ce = { class: "icon-topbar-score" },
  re = { id: "page-dialogs", class: "scene-layer" },
  ne = { key: 0, class: "dialogs-record" },
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
  je = { class: "rank-list" },
  Se = J(() => k("span", { class: "rank-item-num" }, null, -1)),
  Le = { class: "rank-item-name" },
  _e = { class: "rank-item-score" },
  Te = J(() => k("i", { class: w("num-rank-fen") }, null, -1)),
  Be = { key: 0 },
  Ee = { class: "dialogs-game-over" },
  Re = { class: "game-over-score" },
  Ke = { key: 0 },
  Ne = { class: "dialogs-pause" },
  Fe = { key: 0, class: "bg-guide-1" },
  Me = { key: 1, class: "bg-guide-2" },
  Oe = { key: 1, class: w("bg-game-tips") },
  Ue = { class: "game-tips-title-text" },
  Ae = { class: "game-tips-content" },
  Je = J(() => k("br", null, null, -1)),
  De = [J(() => k("div", { class: "dialogs-share icon-share" }, null, -1))],
  He = { id: "audio-list" },
  qe = ["id", "src", "loop"],
  Ge = E(
    '<div style="" data-v-18f69434><span class="icon-role-1" data-v-18f69434></span><span class="icon-role-2" data-v-18f69434></span><span class="icon-face-1" data-v-18f69434></span><span class="icon-face-2" data-v-18f69434></span><span class="icon-d-8" data-v-18f69434></span></div>',
    1
  ),
  Pe = t(
    a({
      __name: "index",
      setup(t) {
        var a;
        let E,
          F,
          M,
          J = "../cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image";
        const { proxy: Pe } = O();
        let Qe = new U({});
        const Ve = l();
        let We = "",
          Xe = o({
            maxLevel: 10,
            skin: [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
            levelScore: [3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6],
            levelTime: [
              60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
            ],
            puzzleIdList: [9, 10],
            puzzleImgList: [
              "1.jpg",
              "2.jpg",
              "3.jpg",
              "4.jpg",
              "5-0706.jpg",
              "6-0706.jpg",
              "7.jpg",
              "8.jpg",
              "9.jpg",
              "10.jpg",
              "11.jpg",
              "12.jpg",
              "13.jpg",
              "14.jpg",
              "15.jpg",
              "16.jpg",
              "17.jpg",
              "18.jpg",
              "19.jpg",
              "20.jpg",
            ],
            whiteList: [],
            speedFly: 350,
            everyLevelScore: 3e3,
            everyTimeScore: 50,
            everyFindScore: 200,
            skinTitle: ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
            showRank: 0,
            levetTips: [
              [1, 2],
              [1, 3],
              [1, 4],
              [1, 4],
              [4, 1],
              [2, 3],
              [2, 3],
              [3, 3],
              [3, 3],
              [2, 4],
              [3, 3],
              [3, 3],
              [3, 3],
              [3, 3],
              [3, 3],
            ],
            giftTime: 15,
          });
        const Ye = (null == (a = Ve.params) ? void 0 : a.userInfo) ?? {};
        M = (null == Ye ? void 0 : Ye.unionid) ?? "";
        const Ze = o("mm"),
          et = o(""),
          tt = o([]),
          at = o(s(1600)),
          lt = o(s(1600)),
          ot = o(0),
          st = o(!1),
          dt = o(!1),
          pt = o(1),
          ct = o(0),
          rt = o([]),
          nt = o(0),
          it = o([]),
          ut = o(!1),
          vt = o(!1),
          ft = o([]),
          yt = o(null),
          mt = o(null),
          gt = o(),
          kt = o(1),
          ht = o(null),
          bt = o([]);
        let $t = null,
          xt = null;
        const zt = d({
            volume: !1,
            audioList: [
              { name: "bgm", src: `${J}/audio/bgm.mp3`, loop: !0 },
              { name: "hand-down", src: `${J}/audio/hand-down.mp3`, loop: !1 },
              { name: "good", src: `${J}/audio/good.mp3`, loop: !1 },
              { name: "bad", src: `${J}/audio/bad.mp3`, loop: !1 },
            ],
          }),
          Ct = p(() =>
            Xe.value.whiteList.includes(M)
              ? Xe.value.levelScore.length
              : Xe.value.maxLevel
          );
        c(ct, (e) => {
          e >= Xe.value.levelScore[pt.value - 1] &&
            (pt.value < Ct.value ? It(!0) : Bt(!0));
        });
        const wt = p(() => {
            try {
              const e = new Map();
              bt.value.forEach((t) => {
                e.has(t.id) || e.set(t.id, new Set()), e.get(t.id).add(t.type);
              });
              const t = [];
              for (const [a, l] of e.entries())
                [1, 2, 3, 4].every((e) => l.has(e)) && t.push(a);
              return t;
            } catch (e) {
              return [];
            }
          }),
          It = (t = !1) => {
            t
              ? (it.value.push(nt.value), rt.value.push(ct.value), pt.value++)
              : ((pt.value = 1), (rt.value = []), (it.value = [])),
              (ct.value = 0),
              (st.value = !1),
              (Ze.value = "game"),
              (et.value = `game-tips-${pt.value}`),
              (dt.value = !1),
              (vt.value = !1),
              (ft.value = ((t) => {
                let a;
                return (
                  1 === t
                    ? (a = [
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
                    : 2 === t
                    ? (a = [
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
                    : 3 === t
                    ? (a = [
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
                    : 4 === t
                    ? (a = [
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
                    : 5 === t
                    ? (a = [
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
                    : 6 === t
                    ? (a = [
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
                    : 7 === t
                    ? (a = [
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
                    : 8 === t
                    ? (a = [
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
                          score: 1,
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
                    : 9 === t
                    ? (a = [
                        {
                          type: 7,
                          scale: 0.5,
                          rotate: 0,
                          top: 90,
                          left: 550,
                          dead: 0,
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
                          score: 1,
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
                      ])
                    : 10 === t
                    ? (a = [
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 20,
                          left: 160,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 700,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 250,
                          left: 120,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 400,
                          left: 600,
                          dead: 0,
                          gift: 3,
                        },
                        {
                          type: 13,
                          scale: 0.5,
                          rotate: 0,
                          top: 400,
                          left: 50,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.5,
                          rotate: 0,
                          top: 280,
                          left: 570,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.5,
                          rotate: 0,
                          top: 600,
                          left: 570,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 14,
                          scale: 0.5,
                          rotate: 0,
                          top: 530,
                          left: 150,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 600,
                          left: 350,
                          dead: 0,
                          score: 1,
                        },
                        { type: 5, dead: 0, score: 1, top: -80, left: 320 },
                        { type: 5, dead: 0, score: 1, top: 170, left: 200 },
                      ])
                    : 11 === t
                    ? (a = [
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 20,
                          left: 160,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 150,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 700,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 250,
                          left: 120,
                          dead: 0,
                          gift: 3,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 400,
                          left: 600,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 400,
                          left: 50,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.5,
                          rotate: 0,
                          top: 600,
                          left: 570,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.5,
                          rotate: 0,
                          top: 550,
                          left: 150,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.5,
                          rotate: 0,
                          top: 600,
                          left: 350,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: -80,
                          left: 320,
                          move: 1,
                          p: "1",
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: 170,
                          left: 200,
                          move: 1,
                          p: "2",
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: 330,
                          left: 150,
                          move: 1,
                          p: "3",
                        },
                      ])
                    : 12 === t &&
                      (a = [
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 220,
                          left: 180,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 30,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 0,
                          left: 500,
                          dead: 0,
                        },
                        {
                          type: 2,
                          scale: 0.7,
                          rotate: 0,
                          top: 700,
                          left: 100,
                          dead: 0,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 60,
                          left: 150,
                          dead: 0,
                          gift: 3,
                        },
                        {
                          type: 7,
                          scale: 0.55,
                          rotate: 0,
                          top: 380,
                          left: 420,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 9,
                          scale: 0.5,
                          rotate: 0,
                          top: 150,
                          left: 20,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 10,
                          scale: 0.5,
                          rotate: 0,
                          top: 280,
                          left: 570,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 11,
                          scale: 0.5,
                          rotate: 0,
                          top: 550,
                          left: 60,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 12,
                          scale: 0.5,
                          rotate: 0,
                          top: 530,
                          left: 580,
                          dead: 0,
                          score: 1,
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: 20,
                          left: 320,
                          move: 1,
                          p: "1",
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: 270,
                          left: -50,
                          move: 1,
                          p: "2",
                        },
                        {
                          type: 5,
                          dead: 0,
                          score: 1,
                          top: 470,
                          left: 110,
                          move: 1,
                          p: "3",
                        },
                      ]),
                  e(JSON.parse(JSON.stringify(a)))
                );
              })(pt.value)),
              jt();
          },
          jt = () => {
            $t && clearInterval($t),
              ($t = null),
              (nt.value = Xe.value.levelTime[pt.value - 1]),
              ($t = setInterval(() => {
                et.value || nt.value--,
                  nt.value <= 0 &&
                    ($t && clearInterval($t), ($t = null), Bt(!1));
              }, 1e3));
          },
          St = () => {
            let e = document.getElementById("hand-check"),
              t = document.getElementById("hand-box");
            if (!e || !t) return;
            const a = window.getComputedStyle(t).height;
            let l = e.getBoundingClientRect();
            const { x: o, y: s, width: d } = l;
            if (1 === ot.value) {
              if (o < 0 || o + d > 750 || "1120px" === a)
                return void (ot.value = 2);
              {
                let e = document.getElementById("game-main"),
                  t = document.getElementById("hand-dot");
                if (!e || !t) return;
                const a = t.getBoundingClientRect(),
                  { x: l, y: o } = a;
                Array.from(e.children).forEach((e, t) => {
                  const a = e.getBoundingClientRect(),
                    { left: s, right: d, bottom: p, top: c } = a;
                  if (!ft.value[t].dead && l > s && l < d && o > c && o < p)
                    return (
                      (yt.value = ft.value[t]),
                      (yt.value.dead = 1),
                      (ot.value = 2),
                      void (ft.value[t].score || 7 === ft.value[t].type
                        ? Nt("good")
                        : Nt("bad"))
                    );
                });
              }
            } else
              2 === ot.value &&
                Math.abs(parseInt(a) - parseInt("100px")) <= 5 &&
                Lt();
          },
          Lt = () => {
            if (
              (xt && clearInterval(xt),
              (xt = null),
              (ot.value = 0),
              yt.value && !dt.value)
            ) {
              const { type: e, score: t = 0, gift: a = 0 } = yt.value;
              if (((ct.value += t), 2 === a)) {
                for (let l = 0; l < ft.value.length; l++)
                  if (
                    7 !== ft.value[l].type &&
                    !ft.value[l].dead &&
                    !ft.value[l].score
                  ) {
                    _t(l);
                    break;
                  }
              } else 3 === a && (nt.value += Xe.value.giftTime);
              setTimeout(() => {
                yt.value = null;
              }, 100);
            }
          },
          _t = (e) => {
            const t = document.getElementById("hand-dot"),
              a = document.getElementById(`icon-index-${e}`);
            if (!t || !a) return;
            const l = ft.value[e],
              o = t.getBoundingClientRect(),
              s = a.getBoundingClientRect(),
              { left: d, top: p } = s;
            (mt.value = { target: l, startRect: o, endRect: s }),
              R(() => {
                const e = document.getElementById("game-fly");
                if (!e) return;
                e.animate(
                  [{ top: p + "px", left: d + "px", rotate: "360deg" }],
                  {
                    duration: Xe.value.speedFly,
                    iterations: 1,
                    easing: "linear",
                    fill: "forwards",
                  }
                ).onfinish = () => {
                  (mt.value = null), (l.dead = 1);
                };
              });
          },
          Tt = (e) => {
            (et.value = e), "pause" === e && (st.value = !0);
          },
          Bt = (e = !1) => {
            $t && clearInterval($t),
              ($t = null),
              (dt.value = !0),
              (vt.value = e),
              it.value.push(nt.value),
              rt.value.push(ct.value);
            const t = 10 * pt.value + ct.value,
              a = it.value.reduce((e, t) => e + t, 0);
            let l = 0;
            (l += pt.value * Xe.value.everyLevelScore),
              (l +=
                rt.value.reduce((e, t) => e + t, 0) * Xe.value.everyFindScore),
              (l +=
                it.value.reduce((e, t) => e + t, 0) * Xe.value.everyTimeScore),
              (gt.value = l),
              (ht.value = null);
            const o = {};
            if (e) {
              const e =
                  Xe.value.puzzleIdList[r(0, Xe.value.puzzleIdList.length - 1)],
                t = r(1, 4);
              (ht.value = { id: e, type: t }),
                (et.value = "puzzle"),
                (o.puzzle = { ...ht.value });
            } else et.value = e ? "success" : "fail";
            n({
              ownerUnionid: M,
              activityKey: E,
              gameScore: l,
              levelNum: t,
              playTime: a,
              k: We,
              s: A({ k: We, unionid: M, score: l, level: t }),
              extra: o,
            }).then(() => {
              Kt(), Rt();
            });
          },
          Et = (e) => {
            (et.value = ""),
              (st.value = !1),
              1 === e
                ? ((Ze.value = "mm"), $t && clearInterval($t), ($t = null))
                : 2 === e && It();
          },
          Rt = () => {
            Xe.value.showRank &&
              i({ activityKey: E, periodNum: F, unionid: M, k: We }).then(
                ({ code: e, data: t }) => {
                  tt.value = t;
                }
              );
          },
          Kt = () => {
            u({ activityKey: E, periodNum: F, ownerUnionid: M }).then(
              ({ code: e, data: t }) => {
                if (null == t ? void 0 : t.length) {
                  const e = [];
                  t.map((t) => {
                    var a;
                    (null == (a = null == t ? void 0 : t.extra)
                      ? void 0
                      : a.puzzle) && e.push(t.extra.puzzle);
                  });
                  const a = new Map();
                  e.forEach((e) => {
                    const t = `${e.id}_${e.type}`;
                    a.has(t) ? a.get(t).count++ : a.set(t, { ...e, count: 1 });
                  }),
                    (bt.value = Array.from(a.values()));
                }
              }
            );
          },
          Nt = (e, t = !1) => {
            K(zt, e, t);
          },
          Ft = (e) => {
            const t = (1e3 * (1 - at.value)) / 1.3;
            if ("game-main" === e) return { bottom: `-${t}px` };
            if ("game-bg" === e) return { top: -t + "px" };
            if ("game-top" === e) {
              let e = 1100;
              return (
                N() && ((e = 990), window.innerHeight >= 1710 && (e = 1100)),
                { bottom: e - 1.08 * t + "px" }
              );
            }
          },
          Mt = (e) => {
            Qe.onSaveImage(e)
              .then((e) => {
                Ot(e);
              })
              .catch((e) => {
                Ot(e);
              });
          },
          Ot = (e) => {
            Pe.$Message.success(e);
          };
        return (
          v(() => {
            var e, t;
            (E = (null == (e = Ve.meta) ? void 0 : e.activityKey) ?? "202507"),
              (F = (null == (t = Ve.meta) ? void 0 : t.periodNum) ?? 1),
              f({ activityKey: E }).then(({ code: e, data: t }) => {
                0 === e &&
                  ((We = t.k), t.extra && (Xe.value = t.extra), Kt(), Rt());
              }),
              Qe.ready(() => {
                var e, t, a;
                Nt("bgm", !0),
                  Qe.updateShareData({
                    title: (null == (e = Ve.meta) ? void 0 : e.title) ?? "",
                    desc: (null == (t = Ve.meta) ? void 0 : t.desc) ?? "",
                    link: location.origin + Ve.path,
                    imgUrl: (null == (a = Ve.meta) ? void 0 : a.imgUrl) ?? "",
                  }),
                  document.addEventListener("visibilitychange", (e) => {
                    document.hidden ? y() : zt.volume && Nt("bgm", !0);
                  });
              });
          }),
          (e, t) => (
            m(),
            g(
              S,
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
                            g("div", H, [
                              q,
                              k(
                                "div",
                                {
                                  class: "mm-role-box",
                                  style: $(`transform:scale(${at.value})`),
                                },
                                G,
                                4
                              ),
                              P,
                              k("div", Q, [
                                k("span", {
                                  class: "btn-start",
                                  onClick:
                                    t[0] ||
                                    (t[0] = (e) => (
                                      (Ze.value = "game"), void It()
                                    )),
                                }),
                                k("span", {
                                  class: "btn-rule",
                                  onClick: t[1] || (t[1] = (e) => Tt("rule")),
                                }),
                              ]),
                              k("div", V, [
                                k("div", {
                                  class: "btn-record",
                                  onClick: t[2] || (t[2] = (e) => Tt("record")),
                                }),
                                k("div", {
                                  class: "btn-date",
                                  onClick: t[3] || (t[3] = (e) => Tt("date")),
                                }),
                                k("div", {
                                  class: "btn-rank",
                                  onClick:
                                    t[4] ||
                                    (t[4] = (e) =>
                                      x(Xe).showRank
                                        ? Tt("rank")
                                        : Ot(
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
                                    "moving-down": 1 === ot.value,
                                    "moving-up": 2 === ot.value,
                                    "has-fish": yt.value,
                                    "moving-up-solw":
                                      yt.value && yt.value.type <= 4,
                                  }),
                                },
                                [
                                  k(
                                    "div",
                                    {
                                      class: w([
                                        "game-bg",
                                        `bg-game-${x(Xe).skin[pt.value - 1]}`,
                                      ]),
                                      style: $(Ft("game-bg")),
                                    },
                                    null,
                                    6
                                  ),
                                  k(
                                    "div",
                                    {
                                      id: "game-top",
                                      style: $(Ft("game-top")),
                                    },
                                    [
                                      k(
                                        "div",
                                        {
                                          id: "game-role",
                                          class: w([
                                            { rotate: !ot.value && !et.value },
                                            `level-${pt.value}`,
                                          ]),
                                        },
                                        [
                                          W,
                                          I(k("span", X, null, 512), [
                                            [j, 2 !== ot.value],
                                          ]),
                                          I(k("span", Y, null, 512), [
                                            [j, 2 === ot.value],
                                          ]),
                                          k("div", Z, [
                                            ee,
                                            (
                                              null == (e = yt.value)
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
                                                      `icon-d-${yt.value.type}${
                                                        yt.value.type >= 9 ||
                                                        5 === yt.value.type ||
                                                        4 === yt.value.type
                                                          ? "-1"
                                                          : ""
                                                      }`
                                                    ),
                                                  },
                                                  null,
                                                  2
                                                ))
                                              : z("", !0),
                                            te,
                                            ae,
                                            le,
                                          ]),
                                          oe,
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
                                      style: $(Ft("game-main")),
                                    },
                                    [
                                      (m(!0),
                                      g(
                                        S,
                                        null,
                                        L(
                                          ft.value,
                                          (e, t) => (
                                            m(),
                                            g(
                                              S,
                                              { key: "fish-" + t },
                                              [
                                                e.move
                                                  ? (m(),
                                                    g(
                                                      "span",
                                                      {
                                                        key: 1,
                                                        id: "icon-index-" + t,
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
                                                        id: "icon-index-" + t,
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
                                        t[5] ||
                                        (t[5] = (e) => {
                                          ot.value ||
                                            ((ot.value = 1),
                                            (yt.value = null),
                                            (xt = setInterval(() => {
                                              St();
                                            }, 50)),
                                            Nt("hand-down"));
                                        }),
                                    },
                                    null,
                                    32
                                  ),
                                  mt.value
                                    ? (m(),
                                      g(
                                        "div",
                                        {
                                          key: 0,
                                          id: "game-fly",
                                          class: "icon-d-8",
                                          style: $(
                                            `\n                    top:${mt.value.startRect.top}px;\n                    left:${mt.value.startRect.left}px;\n                `
                                          ),
                                        },
                                        null,
                                        4
                                      ))
                                    : z("", !0),
                                  k("span", {
                                    class: "btn-pause",
                                    onClick:
                                      t[6] ||
                                      (t[6] = _((e) => Tt("pause"), ["stop"])),
                                  }),
                                  k("span", pe, T(nt.value) + "s", 1),
                                  k(
                                    "span",
                                    ce,
                                    T(ct.value) +
                                      " / " +
                                      T(x(Xe).levelScore[pt.value - 1]),
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
                      re,
                      [
                        h(
                          C,
                          { name: "fade" },
                          {
                            default: b(() => [
                              "record" === et.value
                                ? (m(),
                                  g("div", ne, [
                                    k("div", ie, [
                                      k("div", ue, [
                                        k(
                                          "span",
                                          {
                                            onClick:
                                              t[7] ||
                                              (t[7] = (e) => (kt.value = 1)),
                                            class: w({
                                              active: 1 === kt.value,
                                            }),
                                          },
                                          "已收集",
                                          2
                                        ),
                                        k(
                                          "span",
                                          {
                                            onClick:
                                              t[8] ||
                                              (t[8] = (e) => (kt.value = 2)),
                                            class: w({
                                              active: 2 === kt.value,
                                            }),
                                          },
                                          "已解锁",
                                          2
                                        ),
                                      ]),
                                      1 === kt.value
                                        ? (m(),
                                          g("div", ve, [
                                            (m(!0),
                                            g(
                                              S,
                                              null,
                                              L(
                                                bt.value,
                                                (e, t) => (
                                                  m(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "record-item-" + t,
                                                      onClick: (t) =>
                                                        Mt(
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
                                      2 === kt.value
                                        ? (m(),
                                          g("div", me, [
                                            (m(!0),
                                            g(
                                              S,
                                              null,
                                              L(
                                                wt.value,
                                                (e, t) => (
                                                  m(),
                                                  g(
                                                    "span",
                                                    {
                                                      class: "recode-item",
                                                      key: "finish-item-" + t,
                                                      onClick: (t) =>
                                                        Mt(
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
                                        onClick: t[9] || (t[9] = (e) => Tt("")),
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
                              "puzzle" === et.value
                                ? (m(),
                                  g("div", he, [
                                    k("div", be, [
                                      k("div", $e, [
                                        k("div", xe, [
                                          k(
                                            "img",
                                            {
                                              src: `${x(J)}/w/${ht.value.id}-${
                                                ht.value.type
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
                                            t[10] ||
                                            (t[10] = (e) =>
                                              Tt(
                                                vt.value ? "success" : "fail"
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-save",
                                          onClick:
                                            t[11] ||
                                            (t[11] = (e) =>
                                              Mt(
                                                `${x(J)}/w/${ht.value.id}-${
                                                  ht.value.type
                                                }.png`
                                              )),
                                        }),
                                        k("span", {
                                          class: "puzzle-back",
                                          onClick:
                                            t[12] ||
                                            (t[12] = (e) =>
                                              Tt(
                                                vt.value ? "success" : "fail"
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
                              "rule" === et.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-rule",
                                      onClick:
                                        t[13] ||
                                        (t[13] = _((e) => Tt(""), ["stop"])),
                                      style: $(`transform:scale(${lt.value})`),
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
                              "date" === et.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      class: "dialogs-date",
                                      onClick:
                                        t[14] ||
                                        (t[14] = _((e) => Tt(""), ["stop"])),
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
                              "rank" === et.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      style: $(`transform:scale(${lt.value})`),
                                    },
                                    [
                                      k("div", Ie, [
                                        k("span", {
                                          class: "rank-close",
                                          onClick:
                                            t[15] || (t[15] = (e) => Tt("")),
                                        }),
                                        k("div", je, [
                                          (m(!0),
                                          g(
                                            S,
                                            null,
                                            L(tt.value, (e, t) => {
                                              var a;
                                              return (
                                                m(),
                                                g(
                                                  "span",
                                                  {
                                                    class: w([
                                                      "rank-item",
                                                      `num-rank-head-${t + 1}`,
                                                    ]),
                                                    key: "rank-item-" + t,
                                                  },
                                                  [
                                                    Se,
                                                    k(
                                                      "span",
                                                      Le,
                                                      T(
                                                        (null ==
                                                        (a = e.userInfo)
                                                          ? void 0
                                                          : a.nickname) ?? ""
                                                      ),
                                                      1
                                                    ),
                                                    k("span", _e, [
                                                      (m(!0),
                                                      g(
                                                        S,
                                                        null,
                                                        L(
                                                          e.gameScore + "",
                                                          (e, t) => (
                                                            m(),
                                                            g(
                                                              "i",
                                                              {
                                                                key:
                                                                  "topbar-score-" +
                                                                  t,
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
                                                      Te,
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
                              ["success", "fail"].includes(et.value)
                                ? (m(),
                                  g("div", Be, [
                                    k("div", Ee, [
                                      k(
                                        "span",
                                        {
                                          class: w([
                                            "game-over-title",
                                            `icon-${et.value}-title`,
                                          ]),
                                        },
                                        [
                                          k(
                                            "span",
                                            Re,
                                            "本次得分为：" + T(gt.value),
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
                                            `icon-${et.value}-role`,
                                          ]),
                                        },
                                        null,
                                        2
                                      ),
                                      k("span", {
                                        class: "btn-back",
                                        onClick:
                                          t[16] || (t[16] = (e) => Et(1)),
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
                              "pause" === et.value
                                ? (m(),
                                  g("div", Ke, [
                                    k("div", Ne, [
                                      k("span", {
                                        class: "btn-pause-home",
                                        onClick:
                                          t[17] || (t[17] = (e) => Et(1)),
                                      }),
                                      k("span", {
                                        class: "btn-pause-continue",
                                        onClick:
                                          t[18] || (t[18] = (e) => Et(3)),
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
                              -1 !== et.value.indexOf("game-tips")
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        t[19] ||
                                        (t[19] = _(
                                          (e) =>
                                            Tt(
                                              1 === pt.value
                                                ? "game-tips-1" === et.value
                                                  ? "game-tips-guide-1"
                                                  : "game-tips-guide-1" ===
                                                    et.value
                                                  ? "game-tips-guide-2"
                                                  : ""
                                                : ""
                                            ),
                                          ["stop"]
                                        )),
                                    },
                                    [
                                      -1 !== et.value.indexOf("guide")
                                        ? (m(),
                                          g(
                                            S,
                                            { key: 0 },
                                            [
                                              "game-tips-guide-1" === et.value
                                                ? (m(), g("div", Fe))
                                                : z("", !0),
                                              "game-tips-guide-2" === et.value
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
                                              "第" + T(pt.value) + "关",
                                              1
                                            ),
                                            k(
                                              "span",
                                              {
                                                class: w([
                                                  "game-tips-title-icon",
                                                  `icon-t-${
                                                    x(Xe).skin[pt.value - 1]
                                                  }`,
                                                ]),
                                              },
                                              null,
                                              2
                                            ),
                                            k("div", Ae, [
                                              B(
                                                " 本关时间" +
                                                  T(
                                                    x(Xe).levelTime[
                                                      pt.value - 1
                                                    ]
                                                  ) +
                                                  "秒， ",
                                                1
                                              ),
                                              Je,
                                              B(
                                                " 需要收集" +
                                                  T(
                                                    x(Xe).levetTips[
                                                      pt.value - 1
                                                    ][0]
                                                  ) +
                                                  "个碎片和" +
                                                  T(
                                                    x(Xe).levetTips[
                                                      pt.value - 1
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
                              ut.value
                                ? (m(),
                                  g(
                                    "div",
                                    {
                                      key: 0,
                                      onClick:
                                        t[20] ||
                                        (t[20] = (e) => (ut.value = !1)),
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
                    [[j, et.value || ut.value]]
                  ),
                ]),
                zt.audioList.length
                  ? (m(),
                    g(
                      S,
                      { key: 0 },
                      [
                        k(
                          "div",
                          {
                            class: w([
                              "btn-music",
                              [
                                { active: zt.volume },
                                { bottom: "game" == Ze.value },
                              ],
                            ]),
                            onClick: t[21] || (t[21] = (e) => Nt("bgm", !0)),
                          },
                          null,
                          2
                        ),
                        I(
                          k(
                            "div",
                            He,
                            [
                              (m(!0),
                              g(
                                S,
                                null,
                                L(
                                  zt.audioList,
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
                                      qe
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            512
                          ),
                          [[j, !1]]
                        ),
                      ],
                      64
                    ))
                  : z("", !0),
                Ge,
              ],
              64
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-18f69434"]]
  );
export { Pe as default };
