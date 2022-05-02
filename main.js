(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luke\Documents\developer_page_angular\developer-page\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_circular_bar_card_circular_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-circular-bar/card-circular-bar.component */ "keyl");





function AboutComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-circular-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardConfig", card_r1);
} }
class AboutComponent {
    constructor(messengerService, scroller) {
        this.messengerService = messengerService;
        this.scroller = scroller;
        this.innerHeight = 0;
        this.scrollPosition = 0;
        this.animationOff = true;
        this.cards = [];
        this.java = {
            description: "Java",
            textColor: "orange",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "1s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "0s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 65,
                animationTimeS: 2,
                animationDelay: 0,
                centerColor: "rgb(150,150,150)",
                barColor: "rgb(179, 116, 0)",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 1
            },
        };
        this.springBoot = {
            description: "Spring_Boot",
            textColor: "green",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "1.2s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "0.2s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 55,
                animationTimeS: 2,
                animationDelay: 0.2,
                centerColor: "rgb(150,150,150)",
                barColor: "green",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 1.2
            },
        };
        this.angular = {
            description: "Angular",
            textColor: "red",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "1.4s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "0.4s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 50,
                animationTimeS: 2,
                animationDelay: 0.4,
                centerColor: "rgb(150,150,150)",
                barColor: "red",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 1.4
            },
        };
        this.typeScript = {
            description: "TypeScript",
            textColor: "blue",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "1.6s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "0.6s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 45,
                animationTimeS: 2,
                animationDelay: 0.6,
                centerColor: "rgb(150,150,150)",
                barColor: "blue",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 1.6
            },
        };
        this.css = {
            description: "CSS",
            textColor: "blue",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "1.8s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "0.8s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 40,
                animationTimeS: 2,
                animationDelay: 0.8,
                centerColor: "rgb(150,150,150)",
                barColor: "blue",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 1.8
            },
        };
        this.html = {
            description: "HTML",
            textColor: "red",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "2s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "1s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 40,
                animationTimeS: 2,
                animationDelay: 1,
                centerColor: "rgb(150,150,150)",
                barColor: "red",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 2
            },
        };
        this.sql = {
            description: "SQL",
            textColor: "blue",
            cardColor: "rgb(40,40,40)",
            descriptionBlurAnimeDelay: "2.2s",
            descriptionBlurAnimeDuration: "2s",
            cardAnimeDelay: "1.2s",
            cardAnimeDuration: "2s",
            barConfig: {
                percentage: 35,
                animationTimeS: 2,
                animationDelay: 1.2,
                centerColor: "rgb(150,150,150)",
                barColor: "blue",
                progressTextColor: "rgba(0,0,0,0.8)",
                backgroundColor: "rgb(40,40,40)",
                fadeInTimeS: 2,
                fadeInDelayS: 2.2,
            },
        };
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight;
        this.checkPosition();
    }
    onResize() {
        this.innerHeight = window.innerHeight;
        this.checkPosition();
    }
    onScroll() {
        this.scrollPosition = this.scroller.getScrollPosition()[1];
        this.checkPosition();
    }
    checkPosition() {
        if (this.animationOff) {
            if ((this.innerHeight + this.scrollPosition) > 1350) {
                this.cards.push(this.java, this.springBoot, this.angular, this.typeScript, this.css, this.html, this.sql);
                this.animationOff = false;
            }
        }
    }
    send() {
        this.messengerService.send("about_hover");
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AboutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function AboutComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 1, consts: [["id", "background", 3, "mouseenter"], ["id", "block"], ["id", "skills"], ["id", "container", 1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], ["id", "card", 1, "column", 3, "cardConfig"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AboutComponent_Template_div_mouseenter_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_circular_bar_card_circular_bar_component__WEBPACK_IMPORTED_MODULE_3__["CardCircularBarComponent"]], styles: ["#background[_ngcontent-%COMP%] {\r\n    height:800px;\r\n    background-color:rgb(60,60,60);\r\n    position: relative;\r\n}\r\n\r\n#block[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    width: 80rem;\r\n    margin:auto;\r\n    border-radius: 20px;\r\n    background-color: rgb(40,40,40);\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n    top:150px;\r\n    position: relative;\r\n}\r\n\r\n#skills[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 80rem;\r\n    position: relative;\r\n    top:5rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    min-width:80rem;\r\n    position:relative; \r\n    top:8rem; \r\n    left:5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0I7OzRCQUV3QjtJQUN4QixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEI7bUZBQytFO0FBQ25GOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztBQUNiIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2MCw2MCw2MCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNibG9jayB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDgwcmVtO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCA1cHggYmxhY2ssXHJcbiAgICAgICAgaW5zZXQgNXB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxyXG4gICAgICAgIDIwcHggMjBweCAyMHB4IGJsYWNrO1xyXG4gICAgdG9wOjE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2tpbGxzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDgwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjVyZW07IFxyXG4gICAgY29sb3I6cmdiKDIyMCwyMjAsMjIwKTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjayxcclxuICAgICAtMXB4IDAgcmdiKDEwMiwgMTAxLCAxMDEpLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOjgwcmVtO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgdG9wOjhyZW07IFxyXG4gICAgbGVmdDo1cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "8wlJ":
/*!****************************************************!*\
  !*** ./src/app/main-modal/main-modal.component.ts ***!
  \****************************************************/
/*! exports provided: MainModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModalComponent", function() { return MainModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainModalComponent {
    constructor() {
        this.modalMessage = { title: "", description: "" };
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    closeModal() {
        this.close.emit();
    }
}
MainModalComponent.ɵfac = function MainModalComponent_Factory(t) { return new (t || MainModalComponent)(); };
MainModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainModalComponent, selectors: [["app-main-modal"]], inputs: { modalMessage: "modalMessage" }, outputs: { close: "close" }, decls: 9, vars: 2, consts: [["id", "background", 3, "click"], ["id", "modal"], ["id", "x", 3, "click"]], template: function MainModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainModalComponent_Template_div_click_1_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainModalComponent_Template_div_click_7_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalMessage.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalMessage.description);
    } }, styles: ["#background[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:rgba(0,0,0,0.3);\r\n    position:absolute;\r\n    display: var(--modal_display);\r\n}\r\n\r\n#modal[_ngcontent-%COMP%] {\r\n    height:640px;\r\n    width:480px;\r\n    border-radius: 20px;\r\n    background-color: rgb(40,40,40);\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        40px 40px 40px black;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin:auto;\r\n    position: relative;\r\n    top:5rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    position: relative;\r\n    top:4rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n    font-size: 18px;\r\n}\r\n\r\n#x[_ngcontent-%COMP%] {\r\n    top:30px;\r\n    right:30px;\r\n    position:absolute;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0I7OzRCQUV3QjtJQUN4QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QjttRkFDK0U7QUFDbkY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEI7bUZBQytFO0lBQy9FLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6Im1haW4tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IHZhcigtLW1vZGFsX2Rpc3BsYXkpO1xyXG59XHJcblxyXG4jbW9kYWwge1xyXG4gICAgaGVpZ2h0OjY0MHB4O1xyXG4gICAgd2lkdGg6NDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCA1cHggYmxhY2ssXHJcbiAgICAgICAgaW5zZXQgNXB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxyXG4gICAgICAgIDQwcHggNDBweCA0MHB4IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjVyZW07IFxyXG4gICAgY29sb3I6cmdiKDIyMCwyMjAsMjIwKTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjayxcclxuICAgICAtMXB4IDAgcmdiKDEwMiwgMTAxLCAxMDEpLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo0cmVtOyBcclxuICAgIGNvbG9yOnJnYigyMjAsMjIwLDIyMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICAgLTFweCAwIHJnYigxMDIsIDEwMSwgMTAxKSwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4jeCB7XHJcbiAgICB0b3A6MzBweDtcclxuICAgIHJpZ2h0OjMwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-modal',
                templateUrl: './main-modal.component.html',
                styleUrls: ['./main-modal.component.css']
            }]
    }], function () { return []; }, { modalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "OC0u":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../intro/intro.component */ "drGS");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.component */ "84zG");
/* harmony import */ var _card_block_card_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-block/card-block.component */ "n28D");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");








class MainViewComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MainViewComponent.ɵfac = function MainViewComponent_Factory(t) { return new (t || MainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainViewComponent, selectors: [["app-main-view"]], decls: 6, vars: 0, consts: [["id", "view"], ["id", "navbar"], ["id", "intro"], ["id", "about"], ["id", "portfolio"], ["id", "contact"]], template: function MainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card-block", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _card_block_card_block_component__WEBPACK_IMPORTED_MODULE_5__["CardBlockComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]], styles: ["#view[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n#intro[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n#about[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n#portfolio[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n#contact[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6Im1haW4tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNuYXZiYXIge1xyXG5cclxufVxyXG5cclxuI2ludHJvIHtcclxuICAgIFxyXG59XHJcblxyXG4jYWJvdXQge1xyXG4gICAgXHJcbn1cclxuXHJcbiNwb3J0Zm9saW8ge1xyXG4gICAgXHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-view',
                templateUrl: './main-view.component.html',
                styleUrls: ['./main-view.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-service/message-service.service */ "kZhF");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-view/main-view.component */ "OC0u");




class AppComponent {
    constructor(message) {
        this.message = message;
        this.title = 'developer-page';
    }
    ngOnInit() {
        this.message.startMessageService();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-view");
    } }, directives: [_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _card_block_card_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-block/card-block.component */ "n28D");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-view/main-view.component */ "OC0u");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _about_card_circular_bar_bar_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/card-circular-bar/bar/bar.component */ "i8Uz");
/* harmony import */ var _about_card_circular_bar_card_circular_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/card-circular-bar/card-circular-bar.component */ "keyl");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _card_modal_card_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card-modal/card-modal.component */ "fQSD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_modal_main_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-modal/main-modal.component */ "8wlJ");




















const routes = [
    {
        path: "",
        component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"]
    }
];
const routerOptions = {
    anchorScrolling: "enabled"
    //scrollPositionRestoration: "enabled"
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(routes, routerOptions)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_block_card_block_component__WEBPACK_IMPORTED_MODULE_4__["CardBlockComponent"],
        _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _about_card_circular_bar_bar_bar_component__WEBPACK_IMPORTED_MODULE_10__["BarComponent"],
        _about_card_circular_bar_card_circular_bar_component__WEBPACK_IMPORTED_MODULE_11__["CardCircularBarComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
        _card_modal_card_modal_component__WEBPACK_IMPORTED_MODULE_13__["CardModalComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _main_modal_main_modal_component__WEBPACK_IMPORTED_MODULE_17__["MainModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _card_block_card_block_component__WEBPACK_IMPORTED_MODULE_4__["CardBlockComponent"],
                    _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _about_card_circular_bar_bar_bar_component__WEBPACK_IMPORTED_MODULE_10__["BarComponent"],
                    _about_card_circular_bar_card_circular_bar_component__WEBPACK_IMPORTED_MODULE_11__["CardCircularBarComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
                    _card_modal_card_modal_component__WEBPACK_IMPORTED_MODULE_13__["CardModalComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _main_modal_main_modal_component__WEBPACK_IMPORTED_MODULE_17__["MainModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(routes, routerOptions)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_modal_main_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-modal/main-modal.component */ "8wlJ");






function ContactComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.emailMessage);
} }
function ContactComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Server is currently unavailable. Try again later or send message directly to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "chajdas.lukasz@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.isDisabled = false;
        this.connected = false;
        this.emailMessage = "";
        this.contact = { name: "", email: "", message: "" };
        this.modalMessage = { title: "", description: "" };
        this.modal = "none";
    }
    ngOnInit() {
        this.messageService.connectedStatus.subscribe(next => this.refreshConnectedStatus(next));
    }
    refreshConnectedStatus(status) {
        this.connected = status;
        this.onChange();
    }
    onChange() {
        if (this.connected) {
            if (this.isEmailOk()) {
                this.isDisabled = false;
            }
            else {
                this.isDisabled = true;
            }
        }
        else {
            this.isDisabled = true;
        }
    }
    isEmailOk() {
        if (this.contact.email.length > 0) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)) {
                this.emailMessage = "";
                return true;
            }
            else {
                this.emailMessage = "You have entered an invalid email address!";
            }
        }
        else {
            this.emailMessage = "Email is required.";
        }
        return false;
    }
    onSubmit() {
        this.messageService.saveContact(this.contact).subscribe(response => {
            if (response) {
                this.showSuccessResponse();
            }
            else {
                this.showFailureResponse();
            }
        });
    }
    send() {
        this.messageService.send("contact_hover");
    }
    showSuccessResponse() {
        this.modalMessage.title = "Message succesfully send.";
        this.showModal();
    }
    showFailureResponse() {
        this.modalMessage.title = "Message could not be send due to an internal server error.";
        this.showModal();
    }
    showModal() {
        this.modal = "initial";
    }
    closeModal() {
        this.modal = "none";
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], hostVars: 2, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--modal_display", ctx.modal);
    } }, outputs: { modalMessage: "modalMessage" }, decls: 22, vars: 7, consts: [["id", "bl3", 3, "mouseenter"], ["id", "contact"], ["id", "container"], [2, "width", "500px", "margin", "auto", "top", "50px", "position", "relative"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "message"], ["type", "text", "rows", "4", "id", "message", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "submitbutton", 3, "disabled", "click"], ["style", "padding: 30px;", 4, "ngIf"], ["id", "modal", 3, "modalMessage", "close"], [1, "alert", "alert-danger"], [2, "padding", "30px"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ContactComponent_Template_div_mouseenter_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_8_listener($event) { return ctx.contact.name = $event; })("ngModelChange", function ContactComponent_Template_input_ngModelChange_8_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_12_listener($event) { return ctx.contact.email = $event; })("ngModelChange", function ContactComponent_Template_input_ngModelChange_12_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.contact.message = $event; })("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_17_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_div_20_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-main-modal", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ContactComponent_Template_app_main_modal_close_21_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modalMessage", ctx.modalMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _main_modal_main_modal_component__WEBPACK_IMPORTED_MODULE_4__["MainModalComponent"]], styles: ["#bl3[_ngcontent-%COMP%] {\r\n    background-color: rgb(44, 44, 44);\r\n    color:white;\r\n    height: 1200px;\r\n}\r\n\r\n#contact[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 80rem;\r\n    position: relative;\r\n    top:5rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 700px;\r\n    padding: 50px;\r\n    top:150px;\r\n    border-radius: 10px;\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n    position: relative;\r\n    background-color: rgb(60,60,60);\r\n    margin:auto;\r\n}\r\n\r\n#message[_ngcontent-%COMP%], #name[_ngcontent-%COMP%], #email[_ngcontent-%COMP%] {\r\n    background-color: rgb(200,200,200);\r\n    box-shadow: inset 2px 2px 2px black,\r\n    inset -2px -2px 2px  white;\r\n    border:none;\r\n}\r\n\r\n#message[_ngcontent-%COMP%] {\r\n    resize: none;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]:focus, #name[_ngcontent-%COMP%]:focus, #email[_ngcontent-%COMP%]:focus {\r\n    box-shadow: inset 6px 6px 6px black,\r\n    inset -6px -6px 6px  white;\r\n}\r\n\r\n#message[_ngcontent-%COMP%]:hover, #name[_ngcontent-%COMP%]:hover, #email[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(220,220,220);\r\n    box-shadow: inset 4px 4px 4px black,\r\n    inset -4px -4px 4px  white;\r\n}\r\n\r\n#submitbutton[_ngcontent-%COMP%] {\r\n    background-color: rgb(71, 144, 68);\r\n    border: none;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 10px 2px;\r\n    cursor: pointer;\r\n    box-shadow: inset 2px 2px 2px black,\r\n        inset -2px -2px 2px  rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n#submitbutton[_ngcontent-%COMP%]:disabled {\r\n    background-color: rgb(184, 0, 0);\r\n}\r\n\r\n#submitbutton[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 5px 5px 5px black,\r\n  inset -5px -5px 5px  rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n#modal[_ngcontent-%COMP%] {\r\n    left:0px;\r\n    top:0px;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 15;\r\n    display: var(--modal_display);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCO21GQUMrRTtBQUNuRjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkI7OzRCQUV3QjtJQUN4QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQzs4QkFDMEI7SUFDMUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJOzhCQUMwQjtBQUM5Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQzs4QkFDMEI7QUFDOUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmO3FEQUNpRDtBQUNyRDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtFQUNFOytDQUM2QztBQUMvQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixPQUFPO0lBQ1AsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmwzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMjAwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDgwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjVyZW07IFxyXG4gICAgY29sb3I6cmdiKDIyMCwyMjAsMjIwKTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjayxcclxuICAgICAtMXB4IDAgcmdiKDEwMiwgMTAxLCAxMDEpLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB0b3A6MTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTVweCAtNXB4IDVweCBibGFjayxcclxuICAgICAgICBpbnNldCA1cHggNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXHJcbiAgICAgICAgMjBweCAyMHB4IDIwcHggYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsNjAsNjApO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbiNtZXNzYWdlLCAjbmFtZSwgI2VtYWlsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCBibGFjayxcclxuICAgIGluc2V0IC0ycHggLTJweCAycHggIHdoaXRlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbiNtZXNzYWdlIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuI21lc3NhZ2U6Zm9jdXMsICNuYW1lOmZvY3VzLCAjZW1haWw6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCA2cHggYmxhY2ssXHJcbiAgICBpbnNldCAtNnB4IC02cHggNnB4ICB3aGl0ZTtcclxufVxyXG5cclxuI21lc3NhZ2U6aG92ZXIsICNuYW1lOmhvdmVyLCAjZW1haWw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwyMjAsMjIwKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDRweCA0cHggNHB4IGJsYWNrLFxyXG4gICAgaW5zZXQgLTRweCAtNHB4IDRweCAgd2hpdGU7XHJcbn1cclxuXHJcbiNzdWJtaXRidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNDQsIDY4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICAgICAgaW5zZXQgLTJweCAtMnB4IDJweCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4jc3VibWl0YnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDAsIDApO1xyXG59XHJcblxyXG4jc3VibWl0YnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDVweCBibGFjayxcclxuICBpbnNldCAtNXB4IC01cHggNXB4ICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNtb2RhbCB7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHRvcDowcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE1O1xyXG4gICAgZGlzcGxheTogdmFyKC0tbW9kYWxfZGlzcGxheSk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, { modalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--modal_display"]
        }] }); })();


/***/ }),

/***/ "drGS":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");



class IntroComponent {
    constructor(messengerService) {
        this.messengerService = messengerService;
    }
    ngOnInit() {
    }
    send() {
        this.messengerService.send("intro_hover");
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 19, vars: 0, consts: [["id", "background", 3, "mouseenter"], ["id", "block"], ["id", "inner"], ["id", "i1", 1, "inner_anime"], ["id", "i2", 1, "inner_anime"], ["id", "i3", 1, "inner_anime"], ["id", "i4", 1, "inner_anime"], ["id", "i5", 1, "inner_anime"], ["id", "i6", 1, "inner_anime"], ["id", "i7", 1, "inner_anime"], ["id", "i8", 1, "inner_anime"], ["id", "i9", 1, "inner_anime"], ["id", "i10", 1, "inner_anime"], ["id", "inner2"], ["id", "text"], [2, "text-align", "center"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function IntroComponent_Template_div_mouseenter_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0141ukasz Chajda\u015B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Junior full-stack developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#background[_ngcontent-%COMP%] {\r\n    height:800px;\r\n    background-color: rgb(50,50,50);\r\n    position: relative;\r\n}\r\n\r\n#block[_ngcontent-%COMP%] {\r\n    background-color: rgb(60,60,60);\r\n    height: 600px;\r\n    width: 1280px;\r\n    top:100px;\r\n    position: relative;\r\n    margin:auto;\r\n    border-radius: 30px;\r\n    box-shadow:inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n}\r\n\r\n.inner_anime[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    border-radius: 5px;\r\n    width: 295px;\r\n    height: 125px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(1.8);\r\n    box-shadow: \r\n    inset 1px 1px 1px black,\r\n    inset -1px -1px 1px rgba(255, 255, 255, 0.3);\r\n    animation-name: inner_anime;\r\n    animation-duration: 20s;\r\n    animation-iteration-count: infinite;\r\n    animation-timing-function: ease-in;\r\n    z-index: 1;\r\n}\r\n\r\n#i1[_ngcontent-%COMP%] {\r\n    animation-delay: -18s;\r\n}\r\n\r\n#i2[_ngcontent-%COMP%] {\r\n    animation-delay: -16s;\r\n}\r\n\r\n#i3[_ngcontent-%COMP%] {\r\n    animation-delay: -14s;\r\n}\r\n\r\n#i4[_ngcontent-%COMP%] {\r\n    animation-delay: -12s;\r\n}\r\n\r\n#i5[_ngcontent-%COMP%] {\r\n    animation-delay: -10s;\r\n}\r\n\r\n#i6[_ngcontent-%COMP%] {\r\n    animation-delay: -8s;\r\n}\r\n\r\n#i7[_ngcontent-%COMP%] {\r\n    animation-delay: -6s;\r\n}\r\n\r\n#i8[_ngcontent-%COMP%] {\r\n    animation-delay: -4s;\r\n}\r\n\r\n#i9[_ngcontent-%COMP%] {\r\n    animation-delay: -2s;\r\n}\r\n\r\n#i10[_ngcontent-%COMP%] {\r\n    animation-delay: 0s;\r\n}\r\n\r\n@keyframes inner_anime {\r\n    0% {\r\n        transform: translate(-50%, -50%) scale(1.8);\r\n        opacity: 1;\r\n    }\r\n    98% {\r\n        transform: translate(-50%, -50%) scale(3.98);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate(-50%, -50%) scale(4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n#inner[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 1180px;\r\n    height: 500px;\r\n    border-radius: 20px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: inset -3px -3px 3px rgba(255, 255, 255, 0.3),\r\n     inset 3px 3px 4px black,\r\n     -3px -3px 4px black,\r\n     3px 3px 3px rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n#inner2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 590px;\r\n    height: 250px;\r\n    border-radius: 10px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: inset 2px 2px 2px black,\r\n    inset -2px -2px 2px rgba(255, 255, 255, 0.3);\r\n    z-index: 2;\r\n    background-color: rgb(60,60,60);\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    color:white;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-shadow: 4px 4px 4px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n    color:rgb(220,220,220);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQjs7NEJBRXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkNBQTJDO0lBQzNDOztnREFFNEM7SUFDNUMsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksMkNBQTJDO1FBQzNDLFVBQVU7SUFDZDtJQUNBO1FBQ0ksNENBQTRDO1FBQzVDLFVBQVU7SUFDZDtJQUNBO1FBQ0kseUNBQXlDO1FBQ3pDLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDOzs7eUNBR3FDO0FBQ3pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDO2dEQUM0QztJQUM1QyxVQUFVO0lBQ1YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQzttRkFDK0U7SUFDL0Usc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsNTAsNTApO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYmxvY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLDYwLDYwKTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAtNXB4IC01cHggNXB4IGJsYWNrLFxyXG4gICAgICAgIGluc2V0IDVweCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcclxuICAgICAgICAyMHB4IDIwcHggMjBweCBibGFjaztcclxufVxyXG5cclxuLmlubmVyX2FuaW1lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS44KTtcclxuICAgIGJveC1zaGFkb3c6IFxyXG4gICAgaW5zZXQgMXB4IDFweCAxcHggYmxhY2ssXHJcbiAgICBpbnNldCAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbm5lcl9hbmltZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjBzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2kxIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTE4cztcclxufVxyXG5cclxuI2kyIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTE2cztcclxufVxyXG5cclxuI2kzIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTE0cztcclxufVxyXG5cclxuI2k0IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEycztcclxufVxyXG5cclxuI2k1IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEwcztcclxufVxyXG5cclxuI2k2IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLThzO1xyXG59XHJcblxyXG4jaTcge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNnM7XHJcbn1cclxuXHJcbiNpOCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC00cztcclxufVxyXG5cclxuI2k5IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG59XHJcblxyXG4jaTEwIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5uZXJfYW5pbWUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuOCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDk4JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMy45OCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTE4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtM3B4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXHJcbiAgICAgaW5zZXQgM3B4IDNweCA0cHggYmxhY2ssXHJcbiAgICAgLTNweCAtM3B4IDRweCBibGFjayxcclxuICAgICAzcHggM3B4IDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNpbm5lcjIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICBpbnNldCAtMnB4IC0ycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsNjAsNjApO1xyXG59XHJcblxyXG4jdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggYmxhY2ssXHJcbiAgICAgLTFweCAwIHJnYigxMDIsIDEwMSwgMTAxKSwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgY29sb3I6cmdiKDIyMCwyMjAsMjIwKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, null); })();


/***/ }),

/***/ "fQSD":
/*!****************************************************!*\
  !*** ./src/app/card-modal/card-modal.component.ts ***!
  \****************************************************/
/*! exports provided: CardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModalComponent", function() { return CardModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CardModalComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardModalComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.send(ctx_r1.card.title + " hero"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open app on Heroku");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.card.appUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CardModalComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.card = {};
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    send(code) {
        this.messageService.send(code);
    }
    closeModal() {
        this.close.emit();
    }
}
CardModalComponent.ɵfac = function CardModalComponent_Factory(t) { return new (t || CardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
CardModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardModalComponent, selectors: [["app-card-modal"]], inputs: { card: "card" }, outputs: { close: "close" }, decls: 12, vars: 6, consts: [["id", "modal"], ["id", "modal_img", 3, "src"], ["id", "modal_img2", 3, "src"], ["id", "modal_title"], ["id", "modal_description"], ["id", "modal_bt1", "class", "btn btn-outline-success myButton", "target", "_blank", 3, "href", "click", 4, "ngIf"], ["id", "modal_bt2", "target", "_blank", 1, "btn", "btn-outline-danger", "myButton", 3, "href", "click"], ["id", "x", 3, "click"], ["id", "modal_bt1", "target", "_blank", 1, "btn", "btn-outline-success", "myButton", 3, "href", "click"]], template: function CardModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardModalComponent_a_7_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardModalComponent_Template_a_click_8_listener() { return ctx.send(ctx.card.title + " git"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open github repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardModalComponent_Template_div_click_10_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.img2Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.appButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.card.repoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#modal[_ngcontent-%COMP%] {\r\n    top:50px;\r\n    left:50px;\r\n    height:1300px;\r\n    width:1180px;\r\n    border-radius: 20px;\r\n    background-color: rgb(40,40,40);\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n    position: absolute;\r\n    z-index: 3;\r\n}\r\n\r\n#x[_ngcontent-%COMP%] {\r\n    top:30px;\r\n    right:30px;\r\n    position:absolute;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    cursor:pointer;\r\n}\r\n\r\n#modal_img[_ngcontent-%COMP%] {\r\n    top:50px;\r\n    left:50px;\r\n    position:absolute;\r\n    width: 500px;\r\n    height: 500px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#modal_img2[_ngcontent-%COMP%] {\r\n    top:50px;\r\n    left:570px;\r\n    position:absolute;\r\n    width: 500px;\r\n    height: 500px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#modal_title[_ngcontent-%COMP%] {\r\n    top:600px;\r\n    left:100px;\r\n    color:blanchedalmond;\r\n    position:absolute;\r\n}\r\n\r\n#modal_description[_ngcontent-%COMP%] {\r\n    top:700px;\r\n    left:100px;\r\n    width: 980px;\r\n    color:blanchedalmond;\r\n    position:absolute;\r\n}\r\n\r\n#modal_bt1[_ngcontent-%COMP%] {\r\n    top:1000px;\r\n    left:500px;\r\n    position:absolute;\r\n}\r\n\r\n#modal_bt2[_ngcontent-%COMP%] {\r\n    top:1000px;\r\n    left:700px;\r\n    position:absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9COzs0QkFFd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY2FyZC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vZGFsIHtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDo1MHB4O1xyXG4gICAgaGVpZ2h0OjEzMDBweDtcclxuICAgIHdpZHRoOjExODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsNDAsNDApO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTVweCAtNXB4IDVweCBibGFjayxcclxuICAgICAgICBpbnNldCA1cHggNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXHJcbiAgICAgICAgMjBweCAyMHB4IDIwcHggYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jeCB7XHJcbiAgICB0b3A6MzBweDtcclxuICAgIHJpZ2h0OjMwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4jbW9kYWxfaW1nIHtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDo1MHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jbW9kYWxfaW1nMiB7XHJcbiAgICB0b3A6NTBweDtcclxuICAgIGxlZnQ6NTcwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jbW9kYWxfdGl0bGUge1xyXG4gICAgdG9wOjYwMHB4O1xyXG4gICAgbGVmdDoxMDBweDtcclxuICAgIGNvbG9yOmJsYW5jaGVkYWxtb25kO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbiNtb2RhbF9kZXNjcmlwdGlvbiB7XHJcbiAgICB0b3A6NzAwcHg7XHJcbiAgICBsZWZ0OjEwMHB4O1xyXG4gICAgd2lkdGg6IDk4MHB4O1xyXG4gICAgY29sb3I6YmxhbmNoZWRhbG1vbmQ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuI21vZGFsX2J0MSB7XHJcbiAgICB0b3A6MTAwMHB4O1xyXG4gICAgbGVmdDo1MDBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4jbW9kYWxfYnQyIHtcclxuICAgIHRvcDoxMDAwcHg7XHJcbiAgICBsZWZ0OjcwMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-modal',
                templateUrl: './card-modal.component.html',
                styleUrls: ['./card-modal.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "i8Uz":
/*!**************************************************************!*\
  !*** ./src/app/about/card-circular-bar/bar/bar.component.ts ***!
  \**************************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BarComponent {
    constructor() {
        this.barConfig = {};
        this.leftrotation = "0deg";
        this.rightrotation = "0deg";
        this.blockerzindex = 5;
        this.centercolor = "";
        this.barcolor = "";
        this.textcolor = "";
        this.blockercolor = "";
        this.fadeInDelay = "";
        this.fadeInDuration = "";
        this.progress = "";
        this.percentage = 0;
        this.barAngle = 0;
        this.increaseInterval = 20;
    }
    ngOnInit() {
        this.bindValues();
        setTimeout(() => this.startAnimation(), this.barConfig.fadeInDelayS * 1000);
    }
    bindValues() {
        this.centercolor = this.barConfig.centerColor;
        this.barcolor = this.barConfig.barColor;
        this.textcolor = this.barConfig.progressTextColor;
        this.blockercolor = this.barConfig.backgroundColor;
        this.fadeInDelay = this.barConfig.fadeInDelayS + "s";
        this.fadeInDuration = this.barConfig.fadeInTimeS + "s";
    }
    startAnimation() {
        this.computeFrameTime();
        setTimeout(() => this.runAnime(), this.barConfig.animationDelay * 1000);
    }
    runAnime() {
        let interval = setInterval(() => {
            if (this.percentage < this.barConfig.percentage) {
                this.percentage++;
            }
            else {
                clearInterval(interval);
            }
            this.computeBarAngle(this.percentage);
            this.setPercentage(this.percentage);
            this.setBarAngle(this.barAngle);
        }, this.increaseInterval);
    }
    computeFrameTime() {
        this.increaseInterval = (this.barConfig.animationTimeS / this.barConfig.percentage) * 1000;
    }
    computeBarAngle(percentage) {
        this.barAngle = percentage * 3.6;
    }
    setPercentage(percentage) {
        this.progress = percentage + "%";
    }
    setBarAngle(angle) {
        if (angle <= 360 && angle >= 0) {
            this.setAngle(angle);
        }
    }
    setAngle(angle) {
        if (this.barAngle <= 180) {
            this.moveLeftHalfCircle(angle);
            this.moveRightHalfCircle(angle);
            this.setRightVisible(false);
        }
        else {
            this.moveLeftHalfCircle(180);
            this.moveRightHalfCircle(angle);
            this.setRightVisible(true);
        }
    }
    moveLeftHalfCircle(angle) {
        this.leftrotation = angle + "deg";
    }
    moveRightHalfCircle(angle) {
        this.rightrotation = angle + "deg";
    }
    setRightVisible(visible) {
        if (visible) {
            this.blockerzindex = 2;
        }
        else {
            this.blockerzindex = 5;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["app-bar"]], hostVars: 18, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--leftrotation", ctx.leftrotation)("--rightrotation", ctx.rightrotation)("--blockerzindex", ctx.blockerzindex)("--centercolor", ctx.centercolor)("--barcolor", ctx.barcolor)("--textcolor", ctx.textcolor)("--blockercolor", ctx.blockercolor)("--fadeindelay", ctx.fadeInDelay)("--fadeinduration", ctx.fadeInDuration);
    } }, inputs: { barConfig: "barConfig" }, decls: 9, vars: 1, consts: [["id", "bar"], ["id", "background"], ["id", "left_blocker"], ["id", "right_blocker"], ["id", "left"], ["id", "right"], ["id", "center"], ["id", "text"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.progress);
    } }, styles: ["#bar[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    position: relative;\r\n    opacity: var(--opacity);\r\n    animation: barfadein;\r\n    animation-delay: var(--fadeindelay);\r\n    animation-duration: var(--fadeinduration);\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes barfadein {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n#background[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    position:absolute;\r\n    background-color: var(--blockercolor);\r\n    border-radius: 50%;\r\n    border: 1px solid rgba(255,255,255,0.2);\r\n    z-index: 0;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 5px 5px 3px 3px black, -3px -3px 3px 3px rgba(255, 255, 255, 0.3);\r\n    \r\n}\r\n\r\n#left_blocker[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index:var(--blockerzindex);\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    background-color: var(--blockercolor);\r\n    -webkit-clip-path: inset(0px 50px 0px 0px);\r\n            clip-path: inset(0px 50px 0px 0px);\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#right_blocker[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index:1;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    background-color: var(--blockercolor);\r\n    -webkit-clip-path: inset(0px 0px 0px 50px);\r\n            clip-path: inset(0px 0px 0px 50px);\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) rotate(var(--leftrotation));\r\n    z-index:4;\r\n    width: 96px;\r\n    height: 96px;\r\n    background-color: var(--barcolor);\r\n    border-radius: 50%;\r\n    -webkit-clip-path: inset(0px 48px 0px 0px);\r\n            clip-path: inset(0px 48px 0px 0px);\r\n    border:1px solid rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n#right[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%) rotate(var(--rightrotation));\r\n    z-index: 3;\r\n    width: 96px;\r\n    height: 96px;\r\n    background-color: var(--barcolor);\r\n    border-radius: 50%;\r\n    -webkit-clip-path: inset(0px 48px 0px 0px);\r\n            clip-path: inset(0px 48px 0px 0px);\r\n    border:1px solid rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n#center[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    z-index:6;\r\n    width: 70px;\r\n    height: 70px;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%, -50%);\r\n    background-color: var(--centercolor);\r\n    border-radius: 50%;\r\n    border:1px solid rgba(119, 127, 155, 0.486);\r\n    box-shadow: inset 3px 3px 3px 1px rgb(0, 0, 0),\r\n    -1px -1px 1px 1px rgba(0,0,0,0.4),\r\n    1px 1px 1px 1px rgba(255,255,255,0.3);\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 7;\r\n    top:53%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size:22px;\r\n    font-weight: bold;\r\n    color:var(--textcolor);\r\n    text-shadow: 1px 1px 1px black, -1px 0 rgba(255,255,255,0.2), 0 1px rgba(255,255,255,0.2), 1px 0 rgba(255,255,255,0.2), 0 -1px rgba(255,255,255,0.2);\r\n    font-family: bazzaronite;\r\n}\r\n\r\n@font-face {\r\n    font-family:bazzaronite;\r\n    src: url(bazaronite.regular.ttf)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHlDQUF5QztJQUN6Qyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixLQUFLLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyw2RUFBNkU7O0FBRWpGOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsT0FBTztJQUNQLFFBQVE7SUFDUixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUiw0REFBNEQ7SUFDNUQsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDZEQUE2RDtJQUM3RCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDOzt5Q0FFcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG9KQUFvSjtJQUNwSix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSiIsImZpbGUiOiJiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jYmFyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5KTtcclxuICAgIGFuaW1hdGlvbjogYmFyZmFkZWluO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYWRlaW5kZWxheSk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhZGVpbmR1cmF0aW9uKTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFyZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuI2JhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tlcmNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IDNweCBibGFjaywgLTNweCAtM3B4IDNweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgXHJcbn1cclxuXHJcbiNsZWZ0X2Jsb2NrZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDp2YXIoLS1ibG9ja2VyemluZGV4KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9ja2VyY29sb3IpO1xyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHggNTBweCAwcHggMHB4KTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4jcmlnaHRfYmxvY2tlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2tlcmNvbG9yKTtcclxuICAgIGNsaXAtcGF0aDogaW5zZXQoMHB4IDBweCAwcHggNTBweCk7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKHZhcigtLWxlZnRyb3RhdGlvbikpO1xyXG4gICAgei1pbmRleDo0O1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXJjb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjbGlwLXBhdGg6IGluc2V0KDBweCA0OHB4IDBweCAwcHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbiNyaWdodCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSh2YXIoLS1yaWdodHJvdGF0aW9uKSk7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXJjb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjbGlwLXBhdGg6IGluc2V0KDBweCA0OHB4IDBweCAwcHgpO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbiNjZW50ZXIge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OjY7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZW50ZXJjb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTE5LCAxMjcsIDE1NSwgMC40ODYpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDNweCAzcHggMXB4IHJnYigwLCAwLCAwKSxcclxuICAgIC0xcHggLTFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC40KSxcclxuICAgIDFweCAxcHggMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbn1cclxuXHJcbiN0ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDc7XHJcbiAgICB0b3A6NTMlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjp2YXIoLS10ZXh0Y29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrLCAtMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjIpLCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwgMCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBiYXp6YXJvbml0ZTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTpiYXp6YXJvbml0ZTtcclxuICAgIHNyYzogdXJsKGJhemFyb25pdGUucmVndWxhci50dGYpXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar',
                templateUrl: './bar.component.html',
                styleUrls: ['./bar.component.css']
            }]
    }], function () { return []; }, { barConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leftrotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--leftrotation"]
        }], rightrotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--rightrotation"]
        }], blockerzindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--blockerzindex"]
        }], centercolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--centercolor"]
        }], barcolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--barcolor"]
        }], textcolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--textcolor"]
        }], blockercolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--blockercolor"]
        }], fadeInDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--fadeindelay"]
        }], fadeInDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--fadeinduration"]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");




class NavbarComponent {
    constructor(scroller, messageService) {
        this.scroller = scroller;
        this.messageService = messageService;
        this.model = "home";
    }
    ngOnInit() { }
    hover() {
        this.messageService.send("navbar_hover");
    }
    home() {
        this.messageService.send("intro_button_click");
        this.scroller.scrollToAnchor("intro");
    }
    portfolio() {
        this.messageService.send("portfolio_button_click");
        this.scroller.scrollToAnchor("portfolio");
    }
    about() {
        this.messageService.send("about_button_click");
        this.scroller.scrollToAnchor("about");
    }
    contact() {
        this.messageService.send("contact_button_click");
        this.scroller.scrollToAnchor("contact");
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_2__["MessageServiceService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [["id", "navbar", 3, "mouseenter"], ["id", "buttongroup"], [1, "button", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_div_mouseenter_0_listener() { return ctx.hover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.about(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.portfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() { return ctx.contact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#navbar[_ngcontent-%COMP%] {\r\n    height:80px;\r\n    width:100%;\r\n    background-color: rgb(80,80,80);\r\n    top:0;\r\n    position:fixed;\r\n    z-index: 4;\r\n}\r\n\r\n#buttongroup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: rgb(80,80,80);\r\n  border: none;\r\n  border-radius: 10px;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  box-shadow: inset 2px 2px 2px black,\r\n   inset -2px -2px 2px  rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 5px 5px 5px black,\r\n  inset -5px -5px 5px  rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:active {\r\n  box-shadow: inset 8px 8px 8px black,\r\n  inset -8px -8px 8px  rgba(255, 255, 255, 0.3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsS0FBSztJQUNMLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmO2dEQUM4QztBQUNoRDs7QUFFQTtFQUNFOytDQUM2QztBQUMvQzs7QUFFQTtFQUNFOytDQUM2QztBQUMvQyIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXIge1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuICAgIHRvcDowO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4jYnV0dG9uZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IGJsYWNrLFxyXG4gICBpbnNldCAtMnB4IC0ycHggMnB4ICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggNXB4IGJsYWNrLFxyXG4gIGluc2V0IC01cHggLTVweCA1cHggIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDhweCA4cHggOHB4IGJsYWNrLFxyXG4gIGluc2V0IC04cHggLThweCA4cHggIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }, { type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_2__["MessageServiceService"] }]; }, null); })();


/***/ }),

/***/ "kZhF":
/*!************************************************************!*\
  !*** ./src/app/message-service/message-service.service.ts ***!
  \************************************************************/
/*! exports provided: MessageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageServiceService", function() { return MessageServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MessageServiceService {
    constructor(http) {
        this.http = http;
        this.connectedStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.connected = false;
        this.rootUrl = "https://xcyfqoiwe.xyz/input";
        //private rootUrl = "http://localhost:8081/input";
        this.tokenUrl = this.rootUrl + "/auth";
        this.pulseUrl = this.rootUrl + "/load";
        this.contactSaveUrl = this.rootUrl + "/contact";
        this.pingTimer = 0;
        this.pingInterval = 55;
    }
    startMessageService() {
        this.getAuth().subscribe(response => {
            if (this.isResponseTrue(response)) {
                this.connected = true;
                this.connectedStatus.next(true);
                this.runPingTimer();
            }
        });
    }
    send(code) {
        if (this.connected) {
            this.resetPingTimer();
            this.sendAction(this.encodeMessage(code));
        }
    }
    saveContact(contact) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            if (this.connected) {
                this.resetPingTimer();
                this.http.put(this.contactSaveUrl + "/", contact, { observe: 'response' })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("post account"))).subscribe(response => {
                    observer.next(this.isResponseTrue(response));
                });
            }
            else {
                return observer.next(false);
            }
        });
    }
    resetPingTimer() {
        this.pingTimer = 0;
    }
    runPingTimer() {
        setInterval(() => {
            if (this.pingTimer == this.pingInterval)
                this.send("ping");
            this.pingTimer++;
        }, 1000);
    }
    getAuth() {
        return this.http.get(this.tokenUrl, { observe: 'response', withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("auth")));
    }
    isResponseTrue(response) {
        if (response != null) {
            if (response.status == 200) {
                return true;
            }
        }
        return false;
    }
    sendAction(code) {
        return this.http.post(this.pulseUrl, { message: code }, { observe: 'response', withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("post action data"))).subscribe();
    }
    encodeMessage(code) {
        let now = new Date();
        return "s_" + window.scrollY.toFixed(0) + "_w_" + window.innerWidth.toFixed(0) + "_h_" + window.innerHeight.toFixed(0) + "_c_" + code;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error + ` ${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
MessageServiceService.ɵfac = function MessageServiceService_Factory(t) { return new (t || MessageServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MessageServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageServiceService, factory: MessageServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "keyl":
/*!************************************************************************!*\
  !*** ./src/app/about/card-circular-bar/card-circular-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: CardCircularBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCircularBarComponent", function() { return CardCircularBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/message-service/message-service.service */ "kZhF");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar/bar.component */ "i8Uz");




class CardCircularBarComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.cardConfig = {};
        this.barConfig = {};
        this.description = "";
        this.textColor = "";
        this.cardColor = "";
        this.descriptionBlurAnimeDelay = "";
        this.descriptionBlurAnimeDuration = "";
        this.cardAnimeDelay = "";
        this.cardAnimeDuration = "";
    }
    ngOnInit() {
        this.barConfig = this.cardConfig.barConfig;
        this.description = this.cardConfig.description;
        this.textColor = this.cardConfig.textColor;
        this.cardColor = this.cardConfig.cardColor;
        this.descriptionBlurAnimeDelay = this.cardConfig.descriptionBlurAnimeDelay;
        this.descriptionBlurAnimeDuration = this.cardConfig.descriptionBlurAnimeDuration;
        this.cardAnimeDelay = this.cardConfig.cardAnimeDelay;
        this.cardAnimeDuration = this.cardConfig.cardAnimeDuration;
    }
    send() {
        //this.messageService.send("skill_card_" + this.cardConfig.description + "_hover");
    }
}
CardCircularBarComponent.ɵfac = function CardCircularBarComponent_Factory(t) { return new (t || CardCircularBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
CardCircularBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCircularBarComponent, selectors: [["app-card-circular-bar"]], hostVars: 12, hostBindings: function CardCircularBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--textcolor", ctx.textColor)("--card_color", ctx.cardColor)("--description_blur_anime_delay", ctx.descriptionBlurAnimeDelay)("--description_blur_anime_duration", ctx.descriptionBlurAnimeDuration)("--card_anime_delay", ctx.cardAnimeDelay)("--card_anime_duration", ctx.cardAnimeDuration);
    } }, inputs: { cardConfig: "cardConfig" }, decls: 4, vars: 2, consts: [["id", "card", 3, "mouseenter"], ["id", "circular_bar", 3, "barConfig"], ["id", "description"]], template: function CardCircularBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardCircularBarComponent_Template_div_mouseenter_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("barConfig", ctx.barConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [_bar_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"]], styles: ["#card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 120px;\r\n    height: 180px;\r\n    animation:cardanime;\r\n    animation-delay: var(--card_anime_delay);\r\n    animation-duration: var(--card_anime_duration);\r\n    animation-fill-mode:both;\r\n    border-radius: 20px;\r\n    box-shadow:  inset 3px 3px 3px rgb(0, 0, 0), inset -2px -2px 2px rgba(255, 255, 255, 0.4),\r\n    0px 0px 0px rgba(255,255,255,0.4), 0px 0px 0px black;\r\n    background-color: var(--card_color);\r\n    z-index: 1;\r\n    transition:0.2s;\r\n    transform: scale(1.2);\r\n    margin:24px 20px;\r\n}\r\n\r\n#card[_ngcontent-%COMP%]:hover {\r\n    box-shadow:inset 0px 0px 3px rgb(0, 0, 0), inset 0px 0px 2px rgba(255, 255, 255, 0.4),\r\n     -4px -4px 4px rgba(255,255,255,0.4), 6px 6px 6px black;\r\n}\r\n\r\n@keyframes cardanime {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n#circular_bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:35%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 4;\r\n}\r\n\r\n#description[_ngcontent-%COMP%] {\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n    position: absolute;\r\n    top:80%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n    color: var(--textcolor);\r\n    font-size: 1.5rem;\r\n    animation: descriptionanimation;\r\n    animation-delay:var(--description_blur_anime_delay);\r\n    animation-duration: var(--description_blur_anime_duration);\r\n    animation-fill-mode: both;\r\n    z-index: 4;\r\n}\r\n\r\n@keyframes descriptionanimation {\r\n    from {opacity: 0; }\r\n    to { opacity: 1; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtY2lyY3VsYXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5Qyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CO3dEQUNvRDtJQUNwRCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7MkRBQ3VEO0FBQzNEOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFFQTtJQUNJO21GQUMrRTtJQUMvRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsbURBQW1EO0lBQ25ELDBEQUEwRDtJQUMxRCx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksTUFBTSxVQUFVLEVBQUU7SUFDbEIsS0FBSyxVQUFVLEVBQUU7QUFDckIiLCJmaWxlIjoiY2FyZC1jaXJjdWxhci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBhbmltYXRpb246Y2FyZGFuaW1lO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1jYXJkX2FuaW1lX2RlbGF5KTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tY2FyZF9hbmltZV9kdXJhdGlvbik7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogIGluc2V0IDNweCAzcHggM3B4IHJnYigwLCAwLCAwKSwgaW5zZXQgLTJweCAtMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXHJcbiAgICAwcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksIDBweCAwcHggMHB4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZF9jb2xvcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjowLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgbWFyZ2luOjI0cHggMjBweDtcclxufVxyXG5cclxuI2NhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAwcHggMHB4IDNweCByZ2IoMCwgMCwgMCksIGluc2V0IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcclxuICAgICAtNHB4IC00cHggNHB4IHJnYmEoMjU1LDI1NSwyNTUsMC40KSwgNnB4IDZweCA2cHggYmxhY2s7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZGFuaW1lIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuI2NpcmN1bGFyX2JhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MzUlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICAgLTFweCAwIHJnYigxMDIsIDEwMSwgMTAxKSwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjgwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYW5pbWF0aW9uOiBkZXNjcmlwdGlvbmFuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kZWxheTp2YXIoLS1kZXNjcmlwdGlvbl9ibHVyX2FuaW1lX2RlbGF5KTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZGVzY3JpcHRpb25fYmx1cl9hbmltZV9kdXJhdGlvbik7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkZXNjcmlwdGlvbmFuaW1hdGlvbiB7XHJcbiAgICBmcm9tIHtvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardCircularBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-circular-bar',
                templateUrl: './card-circular-bar.component.html',
                styleUrls: ['./card-circular-bar.component.css']
            }]
    }], function () { return [{ type: src_app_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, { cardConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--textcolor"]
        }], cardColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--card_color"]
        }], descriptionBlurAnimeDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--description_blur_anime_delay"]
        }], descriptionBlurAnimeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--description_blur_anime_duration"]
        }], cardAnimeDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--card_anime_delay"]
        }], cardAnimeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--card_anime_duration"]
        }] }); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");



class CardComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.card = {};
        this.cardEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    loadModal() {
        this.messageService.send("opening_card_" + this.card.title);
        this.cardEmit.emit(this.card);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, outputs: { cardEmit: "cardEmit" }, decls: 10, vars: 3, consts: [["id", "card", 1, "column"], ["id", "mask", 1, "screen"], ["id", "description"], ["id", "title"], ["id", "tech"], ["id", "button", 1, "btn", "btn-outline-danger", "myButton", 3, "click"], ["id", "img", 1, "screen", 3, "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_a_click_7_listener() { return ctx.loadModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.tech);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["#card[_ngcontent-%COMP%] {\r\n    margin:5px;\r\n    height:370px;\r\n    width:370px;\r\n    border-radius: 20px;\r\n    background-color: rgb(40,40,40);\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n    position: relative;\r\n}\r\n\r\n#img[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n    -5px -5px 5px black\r\n}\r\n\r\n.screen[_ngcontent-%COMP%] {\r\n    top:15px;\r\n    left:15px;\r\n    position: absolute;\r\n    width:340px;\r\n    height:340px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#mask[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    box-shadow: inset -5px -5px 5px rgba(255, 255, 255, 0.3),\r\n    inset 5px 5px 5px black\r\n}\r\n\r\n#mask[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\r\n\r\n#description[_ngcontent-%COMP%] {\r\n    top:85px;\r\n    position: relative;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin:auto;\r\n    text-align: center;\r\n    color:lightcoral;\r\n}\r\n\r\n#tech[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin:auto;\r\n    text-align: center;\r\n    color:lightsalmon;\r\n}\r\n\r\n#button[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top:50px;\r\n    left:115px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0I7OzRCQUV3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7O0FBRUo7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZCIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FyZCB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgaGVpZ2h0OjM3MHB4O1xyXG4gICAgd2lkdGg6MzcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCA1cHggYmxhY2ssXHJcbiAgICAgICAgaW5zZXQgNXB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxyXG4gICAgICAgIDIwcHggMjBweCAyMHB4IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jaW1nIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXHJcbiAgICAtNXB4IC01cHggNXB4IGJsYWNrXHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gICAgdG9wOjE1cHg7XHJcbiAgICBsZWZ0OjE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDozNDBweDtcclxuICAgIGhlaWdodDozNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNtYXNrIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxyXG4gICAgaW5zZXQgNXB4IDVweCA1cHggYmxhY2tcclxufVxyXG5cclxuI21hc2s6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uIHtcclxuICAgIHRvcDo4NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpsaWdodGNvcmFsO1xyXG59XHJcblxyXG4jdGVjaCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmxpZ2h0c2FsbW9uO1xyXG59XHJcblxyXG4jYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo1MHB4O1xyXG4gICAgbGVmdDoxMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "n28D":
/*!****************************************************!*\
  !*** ./src/app/card-block/card-block.component.ts ***!
  \****************************************************/
/*! exports provided: CardBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBlockComponent", function() { return CardBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-service/message-service.service */ "kZhF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_modal_card_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-modal/card-modal.component */ "fQSD");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");






function CardBlockComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardEmit", function CardBlockComponent_div_6_Template_app_card_cardEmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.loadModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r2);
} }
function CardBlockComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardEmit", function CardBlockComponent_div_11_Template_app_card_cardEmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.loadModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r5);
} }
class CardBlockComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.modal = "none";
        this.cards = [];
        this.cards2 = [];
        this.cardModal = {};
        //modal Urls
        this.imageUrl = "";
        this.image2Url = "";
        this.title = "";
        this.description = "";
        this.appUrl = "";
        this.repoUrl = "";
    }
    ngOnInit() {
        let cardToDo = {
            title: "TodoApp",
            tech: "Angular/Spring Boot",
            imgUrl: "assets/images/todo/img1.jpg",
            img2Url: "assets/images/todo/img2.jpg",
            description: "This is the simplest application that I was able to use to learn proper full-stack development. When I started this app I knew nothing about front-end development so started from vanilla js. I quickly learned that programming client with vanilla js is quite pointless and moved to jquery. Jquery code quickly became quite chaotic. I was aware then that newer frameworks structure code better so I moved to Angular with typescript as the ultimate solution. This was an interesting course in the history of evolution in front-end development for me.",
            appUrl: "https://morning-coast-72770.herokuapp.com/",
            appButton: true,
            repoUrl: "https://github.com/Luke1024/ToDo_fullStackApp"
        };
        let cardTrading = {
            title: "TradingApp",
            tech: "Angular/Spring Boot",
            imgUrl: "assets/images/trading/img1.jpg",
            img2Url: "assets/images/trading/img2.jpg",
            description: "This app is my earlier project (https://github.com/Luke1024/financial-analytics) extremely simplified to actually make it possible to finish it in a reasonable time (or finish at all) and show it as a portfolio project. The idea for this app came to me naturally because I was engaged in trading earlier in my career. This app can simulate trading on the forex market on EUR/USD currency pair. App using external API to update EUR/USD exchange rate in real-time every 5 minutes (limits of free API) and using this data to compute profits and balance of accounts created by a user.",
            appUrl: "https://protected-stream-68029.herokuapp.com/",
            appButton: true,
            repoUrl: "https://github.com/Luke1024/TradingApp"
        };
        let cardDeveloper = {
            title: "This_page",
            tech: "Angular/Spring Boot",
            imgUrl: "assets/images/page/img1.jpg",
            img2Url: "assets/images/page/img2.jpg",
            description: "This page is my first occasion for some fun in CSS and to try some styling. I caught some neumorphic vibe and tried to implement it. This is not the final version but I definitely will try to have more design fun with frontends instead of focusing only on basic functionality. This page has also some user tracking functionality. Yes, I could have used hotjar or google analytics but sometimes it's fun to implement something like this by myself.",
            appUrl: "",
            appButton: false,
            repoUrl: "https://github.com/Luke1024/developer_page_in_angular"
        };
        let cardCircularBar = {
            title: "Circular_progress_bar",
            tech: "Angular",
            imgUrl: "assets/images/bar/img1.jpg",
            img2Url: "assets/images/bar/img2.jpg",
            description: "This is what the name implies. Although it is also animated and configurable.",
            appUrl: "",
            appButton: false,
            repoUrl: "https://github.com/Luke1024/Circular_progress_bar_in_angular"
        };
        this.cards.push(cardDeveloper, cardTrading, cardToDo);
        this.cards2.push(cardCircularBar);
    }
    send() {
        this.messageService.send("projects_hover");
    }
    loadModal(card) {
        this.cardModal = card;
        this.messageService.send("opened_modal_" + this.cardModal.title);
        this.modal = "initial";
    }
    closeModal() {
        this.cardModal = {};
        this.modal = "none";
        this.messageService.send("closed_modal_" + this.cardModal.title);
    }
}
CardBlockComponent.ɵfac = function CardBlockComponent_Factory(t) { return new (t || CardBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"])); };
CardBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardBlockComponent, selectors: [["app-card-block"]], hostVars: 2, hostBindings: function CardBlockComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--modal_display", ctx.modal);
    } }, decls: 13, vars: 3, consts: [["id", "background", 3, "mouseenter"], ["id", "block"], ["id", "projects"], ["id", "container", 1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], ["id", "mprojects"], ["id", "container2", 1, "container"], ["id", "modal", 3, "card", "close"], [3, "card", "cardEmit"]], template: function CardBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardBlockComponent_Template_div_mouseenter_0_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardBlockComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mini projects:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardBlockComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-card-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function CardBlockComponent_Template_app_card_modal_close_12_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.cardModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_modal_card_modal_component__WEBPACK_IMPORTED_MODULE_3__["CardModalComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: ["#background[_ngcontent-%COMP%] {\r\n    height:1600px;\r\n    position: relative;\r\n    background-color: rgb(70,70,70);\r\n}\r\n\r\n#block[_ngcontent-%COMP%] {\r\n    height:1400px;\r\n    width:1280px;\r\n    margin:auto;\r\n    border-radius: 20px;\r\n    background-color: rgb(50,50,50);\r\n    box-shadow: inset -5px -5px 5px black,\r\n        inset 5px 5px 5px rgba(255, 255, 255, 0.3),\r\n        20px 20px 20px black;\r\n    position: relative;\r\n    top:100px;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left:30px;\r\n    top:150px;\r\n    min-width: 1200px;\r\n    margin: auto;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left:30px;\r\n    top:400px;\r\n    min-width: 1200px;\r\n    margin:auto;\r\n}\r\n\r\n#modal[_ngcontent-%COMP%] {\r\n    display: var(--modal_display);\r\n}\r\n\r\n#projects[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 80rem;\r\n    position: relative;\r\n    top:5rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n}\r\n\r\n#mprojects[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin:auto;\r\n    width: 80rem;\r\n    position: relative;\r\n    top:20rem; \r\n    color:rgb(220,220,220);\r\n    text-shadow: 2px 2px 2px black,\r\n     -1px 0 rgb(102, 101, 101), 0 1px black, 1px 0 black, 0 -1px rgb(102, 102, 102);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQjs7NEJBRXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QjttRkFDK0U7QUFDbkY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNCQUFzQjtJQUN0QjttRkFDK0U7QUFDbkYiLCJmaWxlIjoiY2FyZC1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xyXG4gICAgaGVpZ2h0OjE2MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCw3MCw3MCk7XHJcbn1cclxuXHJcbiNibG9jayB7XHJcbiAgICBoZWlnaHQ6MTQwMHB4O1xyXG4gICAgd2lkdGg6MTI4MHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLDUwLDUwKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggLTVweCA1cHggYmxhY2ssXHJcbiAgICAgICAgaW5zZXQgNXB4IDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxyXG4gICAgICAgIDIwcHggMjBweCAyMHB4IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjEwMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6MzBweDtcclxuICAgIHRvcDoxNTBweDtcclxuICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jY29udGFpbmVyMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjMwcHg7XHJcbiAgICB0b3A6NDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4jbW9kYWwge1xyXG4gICAgZGlzcGxheTogdmFyKC0tbW9kYWxfZGlzcGxheSk7XHJcbn1cclxuXHJcbiNwcm9qZWN0cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHdpZHRoOiA4MHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo1cmVtOyBcclxuICAgIGNvbG9yOnJnYigyMjAsMjIwLDIyMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICAgLTFweCAwIHJnYigxMDIsIDEwMSwgMTAxKSwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4jbXByb2plY3RzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgd2lkdGg6IDgwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjIwcmVtOyBcclxuICAgIGNvbG9yOnJnYigyMjAsMjIwLDIyMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2ssXHJcbiAgICAgLTFweCAwIHJnYigxMDIsIDEwMSwgMTAxKSwgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-block',
                templateUrl: './card-block.component.html',
                styleUrls: ['./card-block.component.css']
            }]
    }], function () { return [{ type: _message_service_message_service_service__WEBPACK_IMPORTED_MODULE_1__["MessageServiceService"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style.--modal_display"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map