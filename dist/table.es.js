import { resolveComponent as _, openBlock as n, createElementBlock as o, createElementVNode as e, withDirectives as y, vModelText as A, createBlock as F, withCtx as H, createCommentVNode as c, renderSlot as z, toDisplayString as g, Fragment as f, createVNode as B, vModelCheckbox as T, renderList as p, vShow as D, createTextVNode as h } from "vue";
const b = (s, r) => {
  const t = s.__vccOpts || s;
  for (const [x, i] of r)
    t[x] = i;
  return t;
}, V = {
  props: {
    isCheckAll: {
      type: Boolean,
      required: !0
    },
    createFun: {
      type: Function
    }
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("on-search", this.search);
    },
    handleMassDelete() {
      this.$emit("mass-delete");
    }
  }
}, S = { class: "flex items-center space-x-2" }, I = { class: "relative" }, j = /* @__PURE__ */ e("div", { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, [
  /* @__PURE__ */ e("svg", {
    class: "w-5 h-5 text-gray-500 dark:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ e("path", {
      "fill-rule": "evenodd",
      d: "M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.386zM8 14a6 6 0 100-12 6 6 0 000 12z",
      "clip-rule": "evenodd"
    })
  ])
], -1), O = { class: "flex space-x-4" }, P = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
  })
], -1), L = /* @__PURE__ */ e("span", { class: "" }, "Create data", -1), N = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
  })
], -1), U = /* @__PURE__ */ e("span", null, "Delete", -1), E = [
  N,
  U
];
function K(s, r, t, x, i, a) {
  const u = _("Button");
  return n(), o("div", S, [
    e("div", I, [
      y(e("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (d) => i.search = d),
        onInput: r[1] || (r[1] = (...d) => a.handleSearch && a.handleSearch(...d)),
        type: "text",
        class: "block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        placeholder: "Search"
      }, null, 544), [
        [A, i.search]
      ]),
      j
    ]),
    e("div", O, [
      t.createFun ? (n(), F(u, {
        key: 0,
        onClick: t.createFun,
        class: "inline-flex hover:bg-neutral-100 items-center px-3 py-2 text-neutral-700 hover:text-neutral-900 text-xs space-x-1 dark:focus:ring-blue-800 rounded-md"
      }, {
        default: H(() => [
          P,
          L
        ]),
        _: 1
      }, 8, ["onClick"])) : c("", !0),
      t.isCheckAll ? (n(), o("button", {
        key: 1,
        onClick: r[2] || (r[2] = (...d) => a.handleMassDelete && a.handleMassDelete(...d)),
        class: "inline-flex hover:bg-neutral-100 items-center px-3 py-2 text-neutral-700 hover:text-red-500 text-xs space-x-1 dark:focus:ring-blue-800 rounded-md"
      }, E)) : c("", !0),
      z(s.$slots, "filter")
    ])
  ]);
}
const G = /* @__PURE__ */ b(V, [["render", K]]), J = {
  props: {
    text: {
      type: String,
      default: "Are you sure you want to delete this item?"
    }
  }
}, Q = { class: "fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50" }, R = { class: "relative w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800" }, W = /* @__PURE__ */ e("div", { class: "text-lg font-medium text-gray-900 dark:text-white" }, " Confirm ", -1), X = { class: "mt-4 text-sm text-gray-500 dark:text-gray-400" }, Y = { class: "flex justify-end mt-6" };
function Z(s, r, t, x, i, a) {
  return n(), o("div", Q, [
    e("div", R, [
      W,
      e("p", X, g(t.text), 1),
      e("div", Y, [
        e("button", {
          onClick: r[0] || (r[0] = (u) => s.$emit("cancel")),
          class: "px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600"
        }, " Cancel "),
        e("button", {
          onClick: r[1] || (r[1] = (u) => s.$emit("confirm")),
          class: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        }, " Confirm ")
      ])
    ])
  ]);
}
const $ = /* @__PURE__ */ b(J, [["render", Z]]), ee = {
  components: {
    TableOptions: G,
    ConfirmationModal: $
  },
  props: {
    hiddenIndex: {
      type: Array,
      required: !1
    },
    primaryKey: {
      type: String,
      default: "id"
    },
    data: {
      type: Object,
      required: !0
    },
    header: {
      type: Array,
      required: !0
    },
    createFun: {
      required: !1
    },
    editFun: Function,
    deleteFun: Function,
    alertText: {
      type: String,
      default: "Are you sure you want to delete this item?"
    },
    customParam: {
      type: Object,
      default: () => ({})
    },
    hasCheck: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      search: "",
      isCheckAll: !1,
      checkedItems: [],
      selectedId: null,
      showDeleteModal: !1,
      createUrl: null,
      createFunData: null
    };
  },
  mounted() {
    typeof this.createFun == "string" ? this.createUrl = this.createFun : typeof this.createFun == "function" && (this.createFunData = this.createFun);
  },
  methods: {
    onSearchHandler(s) {
      this.$emit("on-search", s);
    },
    checkAllHandler() {
      this.checkedItems = this.isCheckAll ? this.data.data.map((s) => s[this.primaryKey]) : [];
    },
    clearCheckHandler() {
      this.isCheckAll = !1, this.checkedItems = [];
    },
    onChangePage(s) {
      this.$emit("on-change-page", s);
    },
    toggleDeleteModal() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    singleDeleteHandler(s) {
      this.selectedId = [s], this.toggleDeleteModal();
    },
    massDeleteHandler() {
      this.checkedItems.length > 0 && (this.selectedId = this.checkedItems, this.toggleDeleteModal());
    },
    acceptDeleteHandler() {
      this.deleteFun(this.selectedId), this.toggleDeleteModal(), this.clearCheckHandler();
    }
  }
}, te = { class: "flex flex-col pt-3" }, re = { class: "overflow-x-auto" }, ae = { class: "w-full divide-y whitespace-nowrap divide-gray-200 dark:divide-gray-600" }, se = { class: "bg-gray-100 dark:bg-gray-700" }, le = {
  key: 0,
  class: "p-4 w-6"
}, ne = { class: "flex items-center" }, oe = /* @__PURE__ */ e("label", {
  for: "checkbox-all",
  class: "sr-only"
}, "checkbox", -1), ie = { class: "p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" }, de = { class: "bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700" }, ce = {
  key: 0,
  class: "w-4 p-4"
}, he = { class: "flex items-center" }, ge = ["id", "value"], ue = ["for"], me = { class: "p-4 space-x-2 whitespace-nowrap" }, ye = ["onClick"], xe = /* @__PURE__ */ e("svg", {
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ e("path", { d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" }),
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    "clip-rule": "evenodd"
  })
], -1), fe = ["onClick"], ke = /* @__PURE__ */ e("svg", {
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), ve = { class: "sticky bottom-0 right-0 w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700" }, pe = { class: "flex items-center mb-4 sm:mb-0" }, _e = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
  })
], -1), be = [
  _e
], we = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
  })
], -1), Ce = [
  we
], qe = { class: "text-sm font-normal text-gray-500 dark:text-gray-400" }, Me = { class: "font-semibold text-gray-900 dark:text-white" }, Te = { class: "font-semibold text-gray-900 dark:text-white" }, De = { class: "flex items-center space-x-3" }, Fe = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
  })
], -1), He = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("path", {
    fill: "currentColor",
    d: "M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
  })
], -1);
function ze(s, r, t, x, i, a) {
  var w, C, q;
  const u = _("TableOptions"), d = _("ConfirmationModal");
  return n(), o(f, null, [
    B(u, {
      onOnSearch: a.onSearchHandler,
      onMassDelete: a.massDeleteHandler,
      "create-fun": () => t.createFun(),
      "is-check-all": i.isCheckAll,
      onClearCheck: a.clearCheckHandler
    }, {
      filter: H(() => [
        z(s.$slots, "filter")
      ]),
      _: 3
    }, 8, ["onOnSearch", "onMassDelete", "create-fun", "is-check-all", "onClearCheck"]),
    e("div", te, [
      e("div", re, [
        e("table", ae, [
          e("thead", se, [
            e("tr", null, [
              t.hasCheck ? (n(), o("th", le, [
                e("div", ne, [
                  y(e("input", {
                    onChange: r[0] || (r[0] = (...l) => a.checkAllHandler && a.checkAllHandler(...l)),
                    "onUpdate:modelValue": r[1] || (r[1] = (l) => i.isCheckAll = l),
                    id: "checkbox-all",
                    type: "checkbox",
                    class: "w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  }, null, 544), [
                    [T, i.isCheckAll]
                  ]),
                  oe
                ])
              ])) : c("", !0),
              (n(!0), o(f, null, p(t.header, (l, k) => (n(), o("th", {
                key: k,
                class: "p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
              }, g(l), 1))), 128)),
              y(e("th", ie, " Actions ", 512), [
                [D, t.deleteFun != null || t.editFun != null]
              ])
            ])
          ]),
          e("tbody", de, [
            (n(!0), o(f, null, p(t.data.data, (l, k) => (n(), o("tr", {
              key: k,
              class: "hover:bg-gray-100 dark:hover:bg-gray-700"
            }, [
              t.hasCheck ? (n(), o("td", ce, [
                e("div", he, [
                  y(e("input", {
                    id: "checkbox-" + l.id,
                    value: l.id,
                    "onUpdate:modelValue": r[2] || (r[2] = (m) => i.checkedItems = m),
                    type: "checkbox",
                    class: "w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  }, null, 8, ge), [
                    [T, i.checkedItems]
                  ]),
                  e("label", {
                    for: "checkbox-" + l.id,
                    class: "sr-only"
                  }, "checkbox", 8, ue)
                ])
              ])) : c("", !0),
              (n(!0), o(f, null, p(l, (m, v) => {
                var M;
                return y((n(), o("td", {
                  key: v,
                  class: "p-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                }, g(m), 1)), [
                  [D, v != t.primaryKey && !((M = t.hiddenIndex) != null && M.includes(v))]
                ]);
              }), 128)),
              e("td", me, [
                t.editFun ? (n(), o("button", {
                  key: 0,
                  onClick: (m) => t.editFun(l.id),
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                }, [
                  xe,
                  h(" Edit ")
                ], 8, ye)) : c("", !0),
                t.deleteFun ? (n(), o("button", {
                  key: 1,
                  onClick: (m) => a.singleDeleteHandler(l.id),
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                }, [
                  ke,
                  h(" Delete ")
                ], 8, fe)) : c("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])
    ]),
    e("div", ve, [
      e("div", pe, [
        e("button", {
          onClick: r[3] || (r[3] = (l) => a.onChangePage(t.data.prev_page_url)),
          class: "inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }, be),
        e("button", {
          onClick: r[4] || (r[4] = (l) => a.onChangePage(t.data.next_page_url)),
          class: "inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }, Ce),
        e("span", qe, [
          h(" Showing "),
          e("span", Me, g(((w = t.data) == null ? void 0 : w.from) ?? 0) + "-" + g(((C = t.data) == null ? void 0 : C.to) ?? 0), 1),
          h(" of "),
          e("span", Te, g(((q = t.data) == null ? void 0 : q.total) ?? 0), 1)
        ])
      ]),
      e("div", De, [
        e("button", {
          onClick: r[5] || (r[5] = (l) => a.onChangePage(t.data.prev_page_url)),
          class: "inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }, [
          Fe,
          h(" Previous ")
        ]),
        e("button", {
          onClick: r[6] || (r[6] = (l) => a.onChangePage(t.data.next_page_url)),
          class: "inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        }, [
          h(" Next "),
          He
        ])
      ])
    ]),
    i.showDeleteModal ? (n(), F(d, {
      key: 0,
      onConfirm: a.acceptDeleteHandler,
      onCancel: a.toggleDeleteModal,
      text: t.alertText
    }, null, 8, ["onConfirm", "onCancel", "text"])) : c("", !0)
  ], 64);
}
const Be = /* @__PURE__ */ b(ee, [["render", ze]]);
export {
  Be as default
};
