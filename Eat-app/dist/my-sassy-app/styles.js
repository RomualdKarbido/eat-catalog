(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important;\n  background: url(\"/assets/bg.jpg\");\n  background-size: cover;\n  background-position: center top;\n  background-attachment: fixed; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n.wrapper {\n  width: 100%;\n  margin: 0 auto; }\ninput, .mat-form-field-infix, textarea {\n  border-radius: 10px;\n  background: #F6F6F6;\n  background: white;\n  border: 1px solid #DDDDDD;\n  padding: 20px 20px;\n  font-size: 16px !important;\n  width: 100%;\n  box-sizing: border-box;\n  outline: none; }\ninput::-webkit-input-placeholder, .mat-form-field-infix::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n    color: #a5a7a9;\n    font-size: 16px !important; }\ninput::-ms-input-placeholder, .mat-form-field-infix::-ms-input-placeholder, textarea::-ms-input-placeholder {\n    color: #a5a7a9;\n    font-size: 16px !important; }\ninput::placeholder, .mat-form-field-infix::placeholder, textarea::placeholder {\n    color: #a5a7a9;\n    font-size: 16px !important; }\n.cdk-overlay-container {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 1000; }\n.mat-form-field {\n  display: block;\n  width: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.mat-select-panel-wrap {\n  flex-basis: 100%; }\n.mat-select-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 0;\n  padding-bottom: 0;\n  max-height: 256px;\n  min-width: 100%;\n  border-radius: 4px;\n  background: white;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.mat-form-field-label {\n  padding-left: 20px;\n  color: #a5a7a9; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  display: none !important; }\n.mat-selected {\n  background: #AE9671;\n  color: white; }\n.mat-selected:hover {\n    background: #AE9671 !important;\n    color: white !important; }\n.mat-option {\n  transition: 0.3s all; }\n.mat-option:hover {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.btn {\n  background: #87BF49;\n  color: white;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px !important;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  transition: all 0.2s;\n  cursor: pointer;\n  outline: none; }\n.btn:hover {\n    background: black; }\n.btn .mdi {\n    font-size: 22px;\n    margin-right: 10px; }\n.btn_dark {\n    background: #AE9671; }\n.btn_dark:hover {\n      background: black; }\n.cart__modal {\n  min-width: 400px;\n  border-radius: 20px;\n  background: white;\n  padding: 30px;\n  position: relative;\n  -webkit-animation: visiblemodal 0.7s;\n          animation: visiblemodal 0.7s;\n  max-width: 505px;\n  box-sizing: border-box; }\n.cart__modal-wrap {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000; }\n.cart__modal-title {\n    font-size: 24px;\n    font-weight: bold;\n    border-bottom: 1px solid #cccccc;\n    margin-bottom: 20px;\n    padding-bottom: 20px; }\n.cart__modal-text {\n    margin-bottom: 20px; }\n.cart__modal-yes-btn {\n    display: flex; }\n.cart__modal-yes-btn .btn {\n      height: 50px;\n      margin-right: 10px;\n      flex: 1; }\n.cart__modal-close {\n    position: absolute;\n    top: -20px;\n    right: -20px;\n    transition: color 0.2s;\n    cursor: pointer;\n    color: white;\n    font-size: 24px; }\n.cart__modal-close:hover {\n      color: #87BF49; }\n.cart__modal-week {\n    display: flex;\n    justify-content: space-between; }\n.cart__modal-day {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 100%;\n    min-height: 55px;\n    min-width: 55px;\n    max-width: 55px;\n    border: 1px solid #87BF49;\n    margin: 0 5px;\n    transition: all 0.2s;\n    cursor: pointer;\n    outline: none;\n    box-sizing: border-box; }\n.cart__modal-day:first-child {\n      margin-left: 0; }\n.cart__modal-day:last-child {\n      margin-right: 0; }\n.cart__modal-day:hover {\n      background: #87BF49;\n      color: white; }\n@-webkit-keyframes visiblemodal {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@keyframes visiblemodal {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@media (max-width: 767px) {\n  .cart__modal {\n    max-width: 85%;\n    min-width: 85%; }\n    .cart__modal-close {\n      right: 10px;\n      top: 10px;\n      color: black; }\n    .cart__modal-week {\n      flex-wrap: wrap;\n      justify-content: flex-start; }\n    .cart__modal-day {\n      margin: 0 3px 6px; }\n      .cart__modal-day:last-child {\n        margin-right: 3px; }\n      .cart__modal-day:first-child {\n        margin-left: 3px; } }\n* {\n  box-sizing: border-box; }\n.cat {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto 100px;\n  max-width: 1200px; }\n.cat__img {\n    padding-bottom: 55%;\n    position: relative;\n    background-size: cover !important;\n    outline: none;\n    transition: all 0.2s;\n    position: relative;\n    background-position: center center !important; }\n.cat__img-bg {\n      background: black;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      cursor: pointer;\n      transition: all 0.2s;\n      opacity: 0; }\n.cat__img:hover .cat__img-bg {\n      opacity: 0.3; }\n.cat__item {\n    border-radius: 10px;\n    overflow: hidden;\n    min-width: calc((100% - (3 - 1) * 20px) / 3);\n    min-width: calc((100% - (3 - 1) * 20px) / 3);\n    flex: 0 0 calc((100% - (3 - 1) * 20px) / 3);\n    margin-right: 20px;\n    margin-bottom: 20px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);\n    background: white;\n    position: relative; }\n.cat__item.disabled {\n      display: none; }\n.cat__item.active .cat__btn-tabs {\n      background: #87BF49;\n      color: white; }\n.cat__item.active .cat__btn-tabs .mdi-silverware {\n        display: none; }\n.cat__item.active .cat__btn-tabs .mdi-playlist-check {\n        display: block; }\n.cat__item.active .cat__tab_one {\n      margin-left: -100%; }\n.cat__item:nth-child(3n) {\n      margin-right: 0; }\n.cat__item.big {\n      min-width: 100%;\n      display: flex; }\n.cat__item.big .cat__img {\n        min-width: calc((100% - (3 - 1) * 20px) / 3);\n        max-width: calc((100% - (3 - 1) * 20px) / 3);\n        padding-bottom: 0; }\n.cat__item.big .cat__tabs {\n        flex-direction: column-reverse; }\n.cat__item.big .cat__btn {\n        top: calc(100% - 165px); }\n.cat__item.big .cat__tab_one {\n        padding-top: 20px;\n        margin-left: 0 !important; }\n.cat__item.big .cat__tab_one .cat__title {\n          display: none; }\n.cat__item.big .cat__tab_two {\n        padding-bottom: 0; }\n.cat__item.big .cat__tab_two .cat__title {\n          font-size: 30px; }\n.cat__item.big .cat__text {\n        margin-bottom: 10px;\n        display: none; }\n.cat__item.big .cat__list-item {\n        margin-bottom: 2px; }\n.cat__item.big .cat__text_big {\n        display: block; }\n.cat__tabs {\n    background: white;\n    overflow: hidden;\n    max-width: 100%;\n    display: flex;\n    flex-wrap: nowrap; }\n.cat__tab {\n    padding: 40px;\n    box-sizing: border-box;\n    font-size: 14px; }\n.cat__tab_one {\n      margin-left: 0;\n      min-width: 100%;\n      max-width: 100%;\n      transition: all 0.3s; }\n.cat__tab_two {\n      min-width: 100%;\n      max-width: 100%; }\n.cat__btn {\n    height: 70px;\n    height: 135px;\n    width: 55px;\n    position: absolute;\n    color: #87BF49;\n    top: calc(100% - 107px);\n    left: calc(50% - 27px);\n    display: flex;\n    align-items: flex-end;\n    cursor: pointer;\n    outline: none; }\n.cat__btn:hover .cat__btn-add {\n      bottom: 65px;\n      opacity: 1;\n      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); }\n.cat__btn:hover .cat__btn-size {\n      bottom: 130px;\n      opacity: 1;\n      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18);\n      outline: none; }\n.cat__btn i {\n      font-size: 24px; }\n.cat__btn .mdi-silverware {\n      display: block; }\n.cat__btn .mdi-playlist-check {\n      display: none; }\n.cat__btn-add {\n      position: absolute;\n      bottom: 0;\n      transition: all 0.3s;\n      opacity: 0;\n      background: white;\n      color: #87BF49;\n      width: 55px;\n      height: 55px;\n      border-radius: 55px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }\n.cat__btn-size {\n      position: absolute;\n      bottom: 0;\n      transition: all 0.3s;\n      opacity: 0;\n      background: white;\n      color: #87BF49;\n      width: 55px;\n      height: 55px;\n      border-radius: 55px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }\n.cat__btn-tabs {\n      width: 55px;\n      height: 55px;\n      border-radius: 100%;\n      background: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); }\n.cat__title {\n    font-size: 22px;\n    font-weight: bold;\n    margin-bottom: 16px;\n    display: block;\n    color: black;\n    text-decoration: none;\n    transition: color 0.2s; }\n.cat__title:hover {\n      color: #ae9671; }\n.cat__title-mini {\n      font-weight: bold;\n      margin-bottom: 20px; }\n.cat__title-mini span {\n        color: #AE9671; }\n.cat__text {\n    line-height: 1.3;\n    margin-bottom: 10px; }\n.cat__text_big {\n      display: none; }\n.cat__list-item {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px dotted gray;\n    margin-bottom: 5px; }\n.cat__list-title {\n    background: white;\n    padding: 5px 5px 5px 0;\n    position: relative;\n    margin-bottom: -8px; }\n.cat__list-value {\n    background: white;\n    padding: 5px 0 5px 5px;\n    position: relative;\n    margin-bottom: -8px; }\n.cat__category {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    background: #87BF49;\n    color: white;\n    font-size: 12px;\n    padding: 3px 10px;\n    border-radius: 9px;\n    z-index: 100; }\n@media (max-width: 1199px) {\n  .cat {\n    max-width: inherit;\n    padding-right: 20px;\n    padding-left: 20px; }\n    .cat__item {\n      min-width: calc((100% - (2 - 1) * 20px) / 2);\n      min-width: calc((100% - (2 - 1) * 20px) / 2); }\n      .cat__item:nth-child(3n) {\n        margin-right: 20px; }\n      .cat__item:nth-child(2n) {\n        margin-right: 0; } }\n@media (max-width: 767px) {\n  .cat {\n    max-width: inherit;\n    padding-right: 16px;\n    padding-left: 16px; }\n    .cat__item {\n      min-width: calc((100% - (1 - 1) * 20px) / 1);\n      min-width: calc((100% - (1 - 1) * 20px) / 1); }\n      .cat__item:nth-child(3n) {\n        margin-right: 0; }\n      .cat__item:nth-child(2n) {\n        margin-right: 0; }\n      .cat__item:nth-child(1n) {\n        margin-right: 0; }\n      .cat__item.big {\n        flex-direction: column; }\n        .cat__item.big .cat__img {\n          padding-bottom: 55%;\n          min-width: 100%; }\n        .cat__item.big .cat__btn {\n          top: calc(100% - 30px); }\n    .cat__tab {\n      padding: 40px 30px 30px 30px; }\n    .cat__list-title, .cat__list-value {\n      font-size: 13px; }\n    .cat__btn {\n      display: flex;\n      overflow: visible;\n      width: 100%;\n      left: 0;\n      right: 0;\n      top: calc(100% - 30px);\n      justify-content: center;\n      align-items: center;\n      height: 55px; }\n      .cat__btn-size, .cat__btn-add, .cat__btn-tabs {\n        opacity: 1;\n        position: relative;\n        margin: 0 5px;\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); }\n      .cat__btn:hover {\n        display: flex;\n        overflow: visible;\n        width: 100%;\n        left: 0;\n        right: 0;\n        top: calc(100% - 30px);\n        justify-content: center;\n        align-items: center;\n        height: 55px; }\n        .cat__btn:hover .cat__btn-size,\n        .cat__btn:hover .cat__btn-add,\n        .cat__btn:hover .cat__btn-tabs {\n          opacity: 1;\n          bottom: 0;\n          position: relative;\n          margin: 0 5px;\n          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); } }\n.cart {\n  max-width: 1200px;\n  background: white;\n  padding: 45px;\n  border-radius: 10px;\n  margin: 0 auto 100px;\n  display: flex;\n  position: relative;\n  box-sizing: border-box; }\n.cart__img {\n    width: 100%;\n    padding-bottom: 80%;\n    background-size: cover !important;\n    background: url('test.jpg') center center;\n    border-radius: 9px;\n    margin-bottom: 40px; }\n.cart__time {\n    text-align: center;\n    font-size: 60px;\n    color: #DCDCDC;\n    font-weight: bold; }\n.cart__left {\n    min-width: 40%;\n    margin-right: 60px; }\n.cart__title {\n    font-size: 33px;\n    font-weight: bold;\n    margin-bottom: 20px; }\n.cart__category {\n    margin-bottom: 20px;\n    display: flex; }\n.cart__category-value {\n      background: #87BF49;\n      padding: 3px 10px;\n      border-radius: 20px;\n      font-size: 12px;\n      color: white; }\n.cart__text {\n    font-size: 16px;\n    line-height: 1.3;\n    margin-bottom: 40px; }\n.cart__text-text {\n      margin-bottom: 10px; }\n.cart__text-title {\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 6.66666667px; }\n.cart__text-title span {\n        color: #AE9671; }\n.cart__text-ing {\n      display: flex;\n      justify-content: space-between;\n      border-bottom: 1px dotted gray;\n      margin-bottom: 5px; }\n.cart__text-ing-title {\n        background: white;\n        padding: 5px 5px 5px 0;\n        margin-bottom: -8px; }\n.cart__text-ing-value {\n        background: white;\n        padding: 5px 0 5px 5px;\n        margin-bottom: -8px; }\n.cart__btns {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: flex; }\n.cart__btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    border-radius: 9px;\n    width: 34px;\n    height: 34px;\n    transition: all 0.2s;\n    cursor: pointer; }\n.cart__btn:hover {\n      background: black; }\n.cart__btn_back {\n      background: #AE9671;\n      margin-right: 5px; }\n.cart__btn_add {\n      background: #87BF49; }\n@media (max-width: 767px) {\n  .cart {\n    flex-direction: column;\n    padding: 0;\n    margin-left: 16px;\n    margin-right: 16px; }\n    .cart__left {\n      padding: 0;\n      margin: 0; }\n    .cart__title {\n      font-size: 30px; }\n    .cart__right {\n      padding: 0 30px 30px 30px; }\n    .cart__text-text {\n      font-size: 14px; }\n    .cart__time {\n      display: none; }\n    .cart__img {\n      border-radius: 10px 10px 0 0; }\n    .cart__list {\n      font-size: 13px; }\n    .cart__btn_back {\n      position: fixed;\n      color: #87BF49;\n      font-size: 24px;\n      width: 55px;\n      height: 55px;\n      background: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18);\n      top: 20px;\n      left: 90px;\n      z-index: 700; } }\n.preloader {\n  height: 4px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100; }\n.preloader__status {\n    height: 100%;\n    width: 0;\n    background: red;\n    -webkit-animation: preloaded 3s infinite ease-in-out;\n            animation: preloaded 3s infinite ease-in-out; }\n@-webkit-keyframes preloaded {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n@keyframes preloaded {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n@media print and (color) {\n  .header, .weekfilter {\n    display: none !important; }\n  .menu {\n    max-width: 80% !important;\n    margin-top: 10% !important;\n    margin-bottom: 10% !important; }\n    .menu__forweek-btn {\n      display: none !important; }\n    .menu__cart {\n      border-radius: 0 !important;\n      background: none;\n      border-top: 1px dotted gray !important;\n      box-shadow: none !important;\n      margin-bottom: 0 !important; }\n      .menu__cart-title {\n        font-size: 22px !important; }\n      .menu__cart-right {\n        padding: 20px 0 !important; }\n      .menu__cart-btn_week {\n        right: 0px !important; }\n      .menu__cart-category {\n        background: none !important;\n        padding-left: 0px !important; }\n      .menu__cart-textleft-text {\n        font-size: 14px !important; }\n      .menu__cart-string {\n        font-size: 14px !important; }\n      .menu__cart-textright-title, .menu__cart-textright-value {\n        font-size: 10px !important; }\n    .menu_list {\n      margin-bottom: 0 !important; }\n    .menu__forweek-title {\n      text-align: left !important;\n      max-width: 1200px !important;\n      margin: 0 auto 10px !important; } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romanarsenev/work/Eat/git/Eat-app/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map