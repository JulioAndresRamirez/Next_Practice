webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var ChannelGrid =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelGrid, _Component);

  function ChannelGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx("div", {
        className: "jsx-369105350"
      }, __jsx("div", {
        className: "jsx-369105350" + " " + "channels"
      }, channels.map(function (ch) {
        return __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          route: "channel",
          params: {
            slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_8__["default"])(ch.title),
            id: ch.id
          },
          prefetch: true
        }, __jsx("div", {
          key: ch.id,
          className: "jsx-369105350"
        }, __jsx("a", {
          className: "jsx-369105350" + " " + "channel"
        }, __jsx("img", {
          src: ch.urls.logo_image.original,
          alt: "logo",
          className: "jsx-369105350"
        })), __jsx("h2", {
          className: "jsx-369105350"
        }, ch.title)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "369105350"
      }, ".channels.jsx-369105350{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat( auto-fill, minmax(150px,1fr) );color:black;}.channel.jsx-369105350{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:4px;box-shadow:0px 3px 4px rgba(0,0,0,0.15);-webkit-text-decoration:none;text-decoration:none;overflow:hidden;-webkit-transition:all ease 0.2s;transition:all ease 0.2s;}.channel.jsx-369105350 img.jsx-369105350{margin:auto;width:100%;}.channel.jsx-369105350:hover{-webkit-transform:translateY(-0.5em);-ms-transform:translateY(-0.5em);transform:translateY(-0.5em);}h2.jsx-369105350{padding:5px;font-size:12px;font-weight:600;margin:0.5em 0 0 0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWxpb3JhbWlyZXpkZWZyZWl0YXMvRGVza3RvcC9OZXh0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0M0QixBQUdzQyxBQVdBLEFBU0QsQUFLaUIsQUFJakIsWUFSRCxBQVNJLENBN0JELFVBcUJsQixJQXBCaUIsQUE2QkcsYUF6QmYsR0EwQmtCLG1CQUNELFlBckJBLE1Bc0J0QixZQXJCK0MsT0FhL0MsRUFuQmdCLFlBQ2hCLG1CQU15QixrREFDTCxnQkFDUywwREFDN0IiLCJmaWxlIjoiL1VzZXJzL2p1bGlvcmFtaXJlemRlZnJlaXRhcy9EZXNrdG9wL05leHQvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgc2x1ZyBmcm9tIFwiLi4vaGVscGVycy9zbHVnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoYW5uZWxzLm1hcChjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlPVwiY2hhbm5lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogc2x1ZyhjaC50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2guaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjaC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57Y2gudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1maWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm1heCgxNTBweCwgMWZyKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbCBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNWVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/julioramirezdefreitas/Desktop/Next/components/ChannelGrid.js */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.51db93441911f7bb8eea.hot-update.js.map