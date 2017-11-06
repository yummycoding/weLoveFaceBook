webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fullPage {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 100vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"fullPage\">\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<!-- <app-selfpost></app-selfpost> -->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_form_login_header_login_header_component__ = __webpack_require__("../../../../../src/app/login-form/login-header/login-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__selfpost_selfpost_component__ = __webpack_require__("../../../../../src/app/selfpost/selfpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__friendlist_friendlist_component__ = __webpack_require__("../../../../../src/app/friendlist/friendlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__regis_form_regis_form_component__ = __webpack_require__("../../../../../src/app/regis-form/regis-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// validate






 // copyright component, used in all pages

// components for dashboard (homepage)

// components for login


// components for Mypost tabs

// components for friendlist tab

// components for home tab







// file upload

// make post

var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_16__login_form_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_guard__["a" /* AuthguardGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'regis-form',
        component: __WEBPACK_IMPORTED_MODULE_21__regis_form_regis_form_component__["a" /* RegisFormComponent */]
    },
    {
        path: 'userprofile',
        component: __WEBPACK_IMPORTED_MODULE_26__user_user_profile_user_profile_component__["a" /* UserProfileComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_form_login_header_login_header_component__["a" /* LoginHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__selfpost_selfpost_component__["a" /* SelfpostComponent */],
            __WEBPACK_IMPORTED_MODULE_19__friendlist_friendlist_component__["b" /* FriendlistComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__regis_form_regis_form_component__["a" /* RegisFormComponent */],
            __WEBPACK_IMPORTED_MODULE_22__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__user_user_new_user_new_component__["a" /* UserNewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__user_user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__user_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__friendlist_friendlist_component__["a" /* AddFriendComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__friendlist_friendlist_component__["a" /* AddFriendComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__authguard_guard__["a" /* AuthguardGuard */],
            __WEBPACK_IMPORTED_MODULE_7__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_27__post_service__["a" /* PostService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardGuard = (function () {
    function AuthguardGuard(user) {
        this.user = user;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoggedIn();
    };
    return AuthguardGuard;
}());
AuthguardGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AuthguardGuard);

var _a;
//# sourceMappingURL=authguard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\n    width: 600px;\n  }\n  \n.post-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/headerimage/head6.jpg") + ");\n  /* background-image: spaceScreen.headerimg; */\n  background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group> \n  <md-tab label=\"Home\">\n    <app-home [curUsername]=\"curUsername\"></app-home>\n  </md-tab>\n  <md-tab label=\"My Post\">\n    <app-selfpost [curUsername]=\"curUsername\"></app-selfpost>\n  </md-tab>\n  <md-tab label=\"Friends List\">\n    <app-friendlist></app-friendlist>\n  </md-tab>\n  <!-- <md-tab label=\"Settings\">\n    <div id=\"page-padding\">\n      <h1>Settings</h1>\n      <p>A bunch of useful settings can be done here</p>\n      <label class=\"label-title\">Number of news displayed</label>\n      <md-slider class=\"md-slider-horizontal\" showTicks=\"true\" max=\"100\" min=\"0\" step=\"1\" thumbLabel=\"true\" value=\"18\"></md-slider>\n      <md-slide-toggle>Some settings</md-slide-toggle>\n    </div>\n  </md-tab> -->\n</md-tab-group>\n\n<h5 id=\"location\">Welcome to Gatorbook!</h5>    <!-- this line used for e2e testing, don't delete -->\n\n\n<!-- <p>\n  Welcome to FitNex!\n  <a routerLink=\"/\">Go Back</a>\n</p> -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.currentuser = JSON.parse(localStorage.getItem("currentUser"));
        this.curUsername = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
        // so need the if clause to get username
        if ('token' in this.currentuser) {
            this.curUsername = this.currentuser.user.username;
        }
        else {
            this.curUsername = this.currentuser.username;
        }
        ;
        // console.log("current username got from dashboard: ", this.curUsername);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Copyright &copy; yummycoding\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/friendlist/addFriend.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>New Friend Request</h1>\n<!-- Hi {{data.name}} -->\n<div md-dialog-content>\n  <p>Friend's name:</p>\n  <md-form-field>\n    <input placeholder= {{data.name}} mdInput tabindex=\"1\" [(ngModel)]=\"data.friendName\">\n  </md-form-field>\n  <p>Friend's email:</p>\n  <md-form-field>\n    <input placeholder= \"Enter the email\" mdInput tabindex=\"2\" [(ngModel)]=\"data.friendEmail\">\n  </md-form-field>\n</div>\n<div md-dialog-actions>\n  <button md-button [md-dialog-close]=\"data\" tabindex=\"3\" color=\"alert\">Send</button>\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"primary\">Cancel</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/friendlist/friendlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friendlist/friendlist.component.html":
/***/ (function(module, exports) {

module.exports = "<md-form-field style=\"width: 300px\">\n    <input mdInput [(ngModel)]=\"name\" placeholder=\"Search\">\n</md-form-field>\n<button md-raised-button (click)=\"openDialog()\" color=\"primary\" style=\"margin-left: 15px\">Add a new friend</button>\n<button color =\"primary\" (click)=\"refreshFriendlist()\" md-raised-button>Refresh</button>\n<md-list>\n  <md-list-item *ngFor=\"let friend of myFriends\">\n    <md-icon md-list-icon>face</md-icon>\n    <p md-line>{{friend.nickname}}</p>\n    <span class=\"spacer\"></span>\n    <button md-icon-button (click)=\"deleteFriend(friend)\">\n      <i class=\"material-icons\">clear</i>  \n    </button>\n  </md-list-item>\n</md-list>\n\n<!-- <md-list>\n  <h3 md-subheader>A</h3>\n  <md-list-item *ngFor=\"let nameA of A\">\n    <md-icon md-list-icon>face</md-icon>\n    <p md-line>{{nameA.name}}</p>\n  </md-list-item>\n  <md-divider></md-divider>\n  <h3 md-subheader>B</h3>\n  <md-list-item *ngFor=\"let nameB of B\">\n    <md-icon md-list-icon>face</md-icon>\n    <p md-line>{{nameB.name}}</p>\n  </md-list-item>\n</md-list> -->\n"

/***/ }),

/***/ "../../../../../src/app/friendlist/friendlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FriendlistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FriendlistComponent = (function () {
    function FriendlistComponent(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        //currentTime: number;
        this.currentuser = JSON.parse(localStorage.getItem("currentUser"));
        this.myFriends = [];
    }
    FriendlistComponent.prototype.ngOnInit = function () {
        // if('token' in this.currentuser){
        this.getFriends(this.currentuser.user);
        // }else {
        //   this.getFriends(this.currentuser);
        // };
    };
    FriendlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddFriendComponent, {
            width: '250px',
            data: { name: this.name, animal: this.friendName, friendEmail: this.friendEmail }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== 'undefined') {
                _this.friendName = result.friendName;
                _this.friendEmail = result.friendEmail;
                if (typeof _this.friendEmail !== 'undefined' && _this.friendEmail !== '') {
                    _this.userService.getUserByUserEmail(_this.friendEmail).then(function (data) {
                        var friend = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
                        Object.assign(friend, data);
                        if (friend._id !== '') {
                            if (_this.currentuser.user.friend.indexOf(friend._id + '$$' + friend.nickname + '$$' + friend.email) === -1) {
                                _this.currentuser.user.friend.push(friend._id + '$$' + friend.nickname + '$$' + friend.email);
                                var updateUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
                                Object.assign(updateUser, _this.currentuser.user);
                                console.log(updateUser);
                                _this.userService.updateFriend(updateUser);
                                localStorage.setItem('currentUser', JSON.stringify(_this.currentuser));
                            }
                            else {
                                console.log('friend already exists');
                            }
                            if (friend.friend.indexOf(_this.currentuser.user._id + '$$' + _this.currentuser.user.nickname + '$$' + _this.currentuser.user.email) === -1) {
                                friend.friend.push(_this.currentuser.user._id + '$$' + _this.currentuser.user.nickname + '$$' + _this.currentuser.user.email);
                                console.log(friend);
                                _this.userService.updateFriend(friend);
                            }
                        }
                        else {
                            console.log('User not exist');
                        }
                    });
                }
                else {
                    _this.userService.getUserByUsername(_this.friendName).then(function (data) {
                        var friend = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
                        Object.assign(friend, data);
                        if (friend._id !== '') {
                            if (_this.currentuser.user.friend.indexOf(friend._id + '$$' + friend.nickname + '$$' + friend.email) === -1) {
                                _this.currentuser.user.friend.push(friend._id + '$$' + friend.nickname + '$$' + friend.email);
                                var updateUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
                                Object.assign(updateUser, _this.currentuser.user);
                                console.log(updateUser);
                                _this.userService.updateFriend(updateUser);
                                localStorage.setItem('currentUser', JSON.stringify(_this.currentuser));
                            }
                            else {
                                console.log('friend already exists');
                            }
                            if (friend.friend.indexOf(_this.currentuser.user._id + '$$' + _this.currentuser.user.nickname + '$$' + _this.currentuser.user.email) === -1) {
                                friend.friend.push(_this.currentuser.user._id + '$$' + _this.currentuser.user.nickname + '$$' + _this.currentuser.user.email);
                                console.log(friend);
                                _this.userService.updateFriend(friend);
                            }
                        }
                        else {
                            console.log('User not exist');
                        }
                    });
                }
            }
        });
    };
    FriendlistComponent.prototype.getFriends = function (user) {
        this.myFriends = [];
        var friends = user.friend;
        for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
            var friend = friends_1[_i];
            if (friend.indexOf('$$') !== -1) {
                var info = friend.split('$$');
                var user_1 = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
                user_1._id = info[0];
                user_1.nickname = info[1];
                user_1.email = info[2];
                this.myFriends.push(user_1);
            }
        }
    };
    FriendlistComponent.prototype.refreshFriendlist = function () {
        this.getFriends(this.currentuser.user);
    };
    FriendlistComponent.prototype.deleteFriend = function (friend) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        //update current user's friendlist
        var index = this.currentuser.user.friend.indexOf(friend._id + '$$' + friend.nickname + '$$' + friend.email);
        this.currentuser.user.friend.splice(index, 1);
        this.userService.updateFriend(this.currentuser.user);
        localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
        //update friend's friendlist
        this.userService.getUserByUserEmail(friend.email).then(function (data) {
            var editfriend = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
            Object.assign(editfriend, data);
            var index1 = editfriend.friend.indexOf(_this.currentuser.user._id + '$$' + _this.currentuser.user.nickname + '$$' + _this.currentuser.user.email);
            editfriend.friend.splice(index1, 1);
            _this.userService.updateFriend(editfriend);
        });
        this.getFriends(this.currentuser.user);
    };
    return FriendlistComponent;
}());
FriendlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friendlist',
        template: __webpack_require__("../../../../../src/app/friendlist/friendlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friendlist/friendlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], FriendlistComponent);

var AddFriendComponent = (function () {
    function AddFriendComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddFriendComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return AddFriendComponent;
}());
AddFriendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addfriend',
        template: __webpack_require__("../../../../../src/app/friendlist/addFriend.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, Object])
], AddFriendComponent);

var _a, _b, _c;
//# sourceMappingURL=friendlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*header {\n    text-align: center;\n    padding: 20px 0;\n    font-size: 40 px;\n    border-bottom:  2px solid #eee;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <md-toolbar color=\"primary\">\n      <span style=\"text-align:center;\">GatorBook</span>\n      <span class=\"spacer\"></span>\n      <button md-icon-button [mdMenuTriggerFor]=\"menu\" id=\"menubtn\">\n          <i class=\"material-icons\">account_circle</i>  \n      </button>\n      <md-menu #menu=\"mdMenu\">\n          <button md-menu-item>\n              <md-icon>lightbulb_outline</md-icon>\n              <span>Notifications</span>\n          </button>\n          <button md-menu-item id=\"userprofilebtn\" (click)=\"setUserProfile($event)\">\n              <md-icon>person_outline</md-icon>\n              <span>Profile</span>\n          </button>\n          <button md-menu-item>\n              <md-icon>settings</md-icon>\n              <span>Setting</span>\n          </button>\n          <button md-menu-item id=\"logout_header\" (click)=\"logoutUser($event)\">\n              <md-icon>power_settings_new</md-icon>\n              <span>Log Out</span>\n          </button>\n          <!-- <button md-menu-item>\n              <md-icon>notifications_off</md-icon>\n              <span>Disable alerts</span>\n          </button> -->\n      </md-menu>\n  </md-toolbar>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setUserProfile = function (e) {
        this.router.navigate(['/userprofile']);
    };
    HeaderComponent.prototype.logoutUser = function (e) {
        e.preventDefault();
        // console.log(e);
        this.user.setUserLoggedOut();
        // console.log('user logged in? ', this.user.getUserLoggedIn());
        localStorage.removeItem('currentUser');
        this.router.navigate(['']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\n    width: 600px;\n  }\n  \n.post-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/headerimage/head6.jpg") + ");\n  /* background-image: spaceScreen.headerimg; */\n  background-size: cover;\n}\n.make-post {\n  width: 648px;\n}\n.textwidth {\n  width: 100%;\n}\n.icon-align{\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.notification{\n  margin-left: 5px;\n  width:350px;\n}\n.notiTitle{\n  margin-left: 150px;\n  font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<div style=\"float:left\">\n  <div class=\"make-post\">\n    <md-expansion-panel>\n      <md-expansion-panel-header>\n        <md-panel-title>\n          Make Post\n        </md-panel-title>\n        <md-panel-description>\n          What's on your mind?\n        </md-panel-description>\n      </md-expansion-panel-header>\n      <md-form-field class=\"textwidth\">\n        <!-- <input mdInput #message maxlength=\"256\" placeholder=\"Say something\">\n      <md-hint align=\"start\"><strong>Don't disclose personal info</strong> </md-hint> -->\n        <input mdInput [(ngModel)]=\"post.body\" #message maxlength=\"256\">\n        <md-hint align=\"end\">{{message.value.length}} / 256</md-hint>\n      </md-form-field>\n      <div class=\"input\">\n        <input class=\"ng-hide\" id=\"input-file-id\" multiple type=\"file\" #inputFile hidden/>\n        <button color=\"primary\" id=\"selectFile\" md-raised-button>\n          <Label for=\"input-file-id\">\n            <i class=\"material-icons md-18 icon-align\">insert_photo</i>\n            Photo\n          </Label>\n        </button>\n        <button color=\"warn\" (click)=\"sendPost()\" md-raised-button>Post</button>\n      </div>\n    </md-expansion-panel>\n  </div>\n\n  <!-- post information -->\n  <!-- <md-card class=\"post-card\" *ngFor=\"let spaceScreen of spaceScreens | slice: [start] : [end]; let i = index\">\n    <md-card-header>\n      <div md-card-avatar class=\"post-image\"></div>\n      <md-card-title>{{spaceScreen.name}}</md-card-title>\n      <md-card-subtitle>{{spaceScreen.remark}}</md-card-subtitle>\n    </md-card-header>\n    <img md-card-image src=\"{{spaceScreen.img}}\" alt=\"post photo\">\n    <md-card-content>\n      <p>{{spaceScreen.description}}</p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button (click)=\"likeMe(i)\">\n        <i class=\"material-icons md-18\" [class.red-color]=\"spaceScreen.liked == '1'\">favorite</i>\n      </button>\n      <button md-button (click)=\"commentMe(i)\">\n        <i class=\"material-icons md-18\">insert_comment</i>\n      </button>\n      <button md-button (click)=\"shareMe(i)\">\n        <i class=\"material-icons md-18\">share</i>\n      </button>\n    </md-card-actions>\n  </md-card> -->\n  <button color =\"primary\" (click)=\"refreshSelfposts($event)\" md-raised-button>Refresh</button>\n  <md-card class=\"post-card\" *ngFor=\"let homePost of homePosts | slice: [start] : [end]; let i = index\">\n    <md-card-header>\n      <div md-card-avatar class=\"post-image\"></div>\n      <md-card-title>{{homePost.createdBy}}</md-card-title>\n      <md-card-subtitle>{{homePost.createdAt}}</md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <p>{{homePost.body}}</p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button>\n        <i class=\"material-icons md-18\">favorite</i>\n      </button>\n      <button md-button>\n        <i class=\"material-icons md-18\">insert_comment</i>\n      </button>\n      <button md-button>\n        <i class=\"material-icons md-18\">share</i>\n      </button>\n    </md-card-actions>\n  </md-card>\n\n  <!-- choose post amount to display in each page -->\n  <div class=\"make-post\">\n    <md-paginator [length]=\"homePosts.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event; pageChange($event)\">\n    </md-paginator>\n  </div>\n</div>\n\n<!-- notification -->\n<div style=\"float:left\">\n  <p class=\"notiTitle\">Notifications</p>\n  <md-card class=\"notification\">Notifications</md-card>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(userService, postService, http) {
        var _this = this;
        this.userService = userService;
        this.postService = postService;
        this.http = http;
        this.post = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]();
        this.curUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.homePosts = [];
        this.spaceScreens = [];
        this.start = 0;
        this.end = 0;
        this.pageIndex = 0;
        this.pageSize = 2;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.http.get('assets/mock-data-home/data.json')
            .map(function (response) { return response.json().screenshots; })
            .subscribe(function (res) { return _this.spaceScreens = res; });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all user information from database and assign to user and useredit
        this.userService.getUserByUsername(this.curUsername).then(function (data) {
            _this.curUser = data;
            _this.getHomeposts();
        });
        this.end = this.start + this.pageSize;
    };
    HomeComponent.prototype.refreshSelfposts = function (e) {
        this.getHomeposts();
    };
    HomeComponent.prototype.sendPost = function () {
        var _this = this;
        this.post.title = 'wedontneedtitle';
        this.post.createdBy = this.curUsername;
        this.postService.sendPost(this.post).then(function (data) {
            if (data.success === true) {
                _this.getHomeposts(); // refresh homepage after send new post
                console.log("New post sent successfully ", _this.post);
            }
            else {
                console.log("Fail to add new post: ", data.message);
            }
        });
        // clear make post form
        this.post = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */]();
    };
    HomeComponent.prototype.getHomeposts = function () {
        var _this = this;
        this.postService.getHomePosts(this.curUser).then(function (data) {
            if (data.success === true) {
                _this.homePosts = data.posts;
                console.log("Home posts got from database", _this.homePosts);
            }
            else {
                console.log("Error when getting self post from database: ", data.message);
            }
        });
    };
    // count() {
    //   return this.spaceScreens.length;
    // }
    HomeComponent.prototype.likeMe = function (i) {
        if (this.spaceScreens[i].liked !== 1) {
            this.spaceScreens[i].liked = 1;
        }
        else {
            this.spaceScreens[i].liked = 0;
        }
    };
    // deleteMe(i) {
    //   this.spaceScreens.splice(i, 1);
    //   console.log(i);
    // }
    HomeComponent.prototype.commentMe = function (i) {
    };
    HomeComponent.prototype.shareMe = function (i) {
    };
    HomeComponent.prototype.pageChange = function (event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.start = (this.pageIndex + 1) * this.pageSize - this.pageSize;
        this.end = (this.pageIndex + 1) * this.pageSize;
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HomeComponent.prototype, "curUsername", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\ndiv.input {\n    position: relative;\n}\ndiv.input label {\n    position: absolute;\n    top: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 10px;\n    background: white;\n    padding: 5px 2px;\n}\ndiv.input input {\n    padding: 10px 20px;\n    font-size: 25px;\n    outline: 0;\n}\ndiv.input {\n    margin-top: 20px;\n}\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.example-full-width {\n    width: 100%;\n}\n.alert {\n    padding: 20px;\n    /* background-color: #f44336; Red */\n    color: red;\n    margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"loginUser($event)\"> \n  <div class=\"alert\">\n    <flash-messages></flash-messages>\n  </div>\n  <div>\n    <img width=\"500\" src=\"../assets/headerimage/GatorBook.jpg\">\n    <h4 id=\"location\">-- share your beautiful life</h4>     <!-- this line used for e2e testing, don't delete -->\n  </div>\n  <div>\n    <img width=\"500\" src=\"../assets/headerimage/gator.png\">\n  </div>\n  <md-form-field class=\"example-full-width\">\n      <input mdInput placeholder=\"Username\" name=\"signinusername\" [(ngModel)]=\"signinUser.username\">\n  </md-form-field>\n  <md-form-field class=\"example-full-width\">\n      <input type =\"password\" mdInput placeholder=\"Password\" name=\"signinpassword\" [(ngModel)]=\"signinUser.password\">\n  </md-form-field>\n  <div class=\"input\">    \n    <button color =\"primary\" id=signinbtn type =\"submit\" md-raised-button>Sign In</button>   \n    <button color =\"primary\" id=signupbtn routerLink=\"/regis-form\" md-raised-button>Sign Up</button>\n  </div>\n</form>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function LoginFormComponent(router, user, validateService, flashMessage) {
        this.router = router;
        this.user = user;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.signinUser = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        // console.log(e);
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        this.signinUser.username = username;
        this.signinUser.password = password;
        if (!this.validateService.validateLogin(this.signinUser)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert', timeout: 3000 });
            return false;
        }
        this.user.loginUser(username, password)
            .then(function (status) {
            // console.log(status);
            if (status) {
                _this.router.navigate(['dashboard']);
                _this.user.setUserLoggedIn();
            }
            else {
                _this.flashMessage.show('Wrong username or password', { cssClass: 'alert', timeout: 3000 });
                // this.router.navigate(['']);
            }
        }).catch(function (err) { return console.log(err); });
    };
    LoginFormComponent.prototype.getUser = function () {
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-header/login-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-header/login-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <md-toolbar color=\"primary\">\n      <span style=\"text-align:center;\">Gatorbook</span>\n      <span class=\"spacer\"></span>\n  </md-toolbar>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-header/login-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginHeaderComponent = (function () {
    function LoginHeaderComponent() {
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
    };
    return LoginHeaderComponent;
}());
LoginHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-header',
        template: __webpack_require__("../../../../../src/app/login-form/login-header/login-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-header/login-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginHeaderComponent);

//# sourceMappingURL=login-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.sendPost = function (post) {
        console.log("Client > New post to be added > post ", post);
        return this._http.post('/posts/newPost', post).map(function (data) { return data.json(); }).toPromise();
    };
    PostService.prototype.deletePost = function (postid) {
        console.log("client > post to be deleted > postid" > postid);
        return this._http.delete('/posts/deletePost/' + postid).map(function (data) { return data.json(); }).toPromise();
    };
    PostService.prototype.getSelfPosts = function (username) {
        console.log("Client > Get all post of myself > username", username);
        return this._http.get('/posts/getSelfPosts/' + username).map(function (data) { return data.json(); }).toPromise();
    };
    PostService.prototype.getHomePosts = function (curUser) {
        console.log("Client > GET > /posts/getHomePosts/:username", curUser.username);
        return this._http.get('/posts/getHomePosts/' + curUser.username).map(function (data) { return data.json(); }).toPromise();
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(_id, title, body, createdBy, createdAt, // need take care initial value
        likes, likedBy, dislikes, dislikedBy, comments) {
        if (_id === void 0) { _id = ''; }
        if (title === void 0) { title = 'wedontneedtitle'; }
        if (body === void 0) { body = ''; }
        if (createdBy === void 0) { createdBy = ''; }
        if (createdAt === void 0) { createdAt = null; }
        if (likes === void 0) { likes = 0; }
        if (likedBy === void 0) { likedBy = []; }
        if (dislikes === void 0) { dislikes = 0; }
        if (dislikedBy === void 0) { dislikedBy = []; }
        if (comments === void 0) { comments = []; }
        this._id = _id;
        this.title = title;
        this.body = body;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.likes = likes;
        this.likedBy = likedBy;
        this.dislikes = dislikes;
        this.dislikedBy = dislikedBy;
        this.comments = comments;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/regis-form/regis-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n  \n.example-full-width {\n    width: 100%;\n}\n.regis-title {\n    font-weight:bold;\n    font-size: 40px;\n    margin:1.5em 0;\n    display:block;\n}\n.button-style {\n    margin:2.5em 0;\n}\n.gender-style {\n    margin:1.5em 0;\n}\n.alert {\n    padding: 20px;\n    /* background-color: #f44336; Red */\n    color: red;\n    margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/regis-form/regis-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"signupUser()\">\n    <div>\n      <label class=\"regis-title\">Sign Up</label>\n    </div>\n    <div class=\"alert\">\n      <flash-messages></flash-messages>\n    </div>\n    <md-form-field class=\"example-full-width\">\n      <input mdInput placeholder=\"Username\" name=\"signupusername\" [(ngModel)]=\"newUser.username\">\n    </md-form-field>\n    <md-form-field class=\"example-full-width\">\n      <input mdInput placeholder=\"Nickname\" name=\"nickname\" [(ngModel)]=\"newUser.nickname\">\n    </md-form-field>\n    <md-form-field class=\"example-full-width\">\n      <input type =\"password\" mdInput placeholder=\"Password\" name=\"signuppassword\" [(ngModel)]=\"newUser.password\">\n    </md-form-field>\n    <md-form-field class=\"example-full-width\">\n      <input type =\"password\" mdInput placeholder=\"Confirm Password\" name=\"confirmedpassword\" [(ngModel)]=\"confirmedpassword\">\n    </md-form-field>\n    <md-form-field class=\"example-full-width\">\n      <input type =\"text\" mdInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"newUser.email\">\n    </md-form-field>\n    <!-- <md-form-field>\n      <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Birthdate\" [(ngModel)]=\"newUser.dob\">\n      <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n      <md-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></md-datepicker>\n    </md-form-field> -->\n    <md-form-field class=\"example-full-width\">\n      <input type =\"text\" mdInput placeholder=\"Birthday (mm/dd/yy)\" name=\"birthday\" [(ngModel)]=\"newUser.dob\">\n    </md-form-field>\n    <div class=\"gender-style\">\n      <md-radio-group>\n      <md-radio-button value=\"1\">Male</md-radio-button>\n      <md-radio-button value=\"2\">Female</md-radio-button>\n    </md-radio-group>\n    </div>\n    <div class=\"button-style\">    \n      <button color =\"primary\" id=signupsubmitbtn type =\"submit\" md-raised-button>Submit</button>\n      <button color =\"primary\" id=signupcancelbtn routerLink=\"/\" md-raised-button>Cancel</button>\n    </div>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/regis-form/regis-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisFormComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function RegisFormComponent(router, userService, validateService, flashMessage) {
        this.router = router;
        this.userService = userService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.createNewUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.startDate = new Date(1990, 0, 1);
    }
    RegisFormComponent.prototype.ngOnInit = function () {
    };
    RegisFormComponent.prototype.signupUser = function () {
        var _this = this;
        console.log('new user has been created, info: ', this.newUser);
        if (this.newUser.password != this.confirmedpassword) {
            this.flashMessage.show("These passwords don't match. Please try again", { cssClass: 'alert', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateRegister(this.newUser)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert', timeout: 5000 });
            return false;
        }
        if (!this.validateService.validateEmail(this.newUser.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert', timeout: 5000 });
            return false;
        }
        if (this.validateService.validateRegister(this.newUser) && this.validateService.validateEmail(this.newUser.email) && this.newUser.password === this.confirmedpassword) {
            this.userService.create(this.newUser)
                .then(function (status) {
                //localStorage.setItem('currentUser', JSON.stringify(this.newUser));
                _this.userService.setUserLoggedIn();
                _this.router.navigate(['dashboard']);
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    return RegisFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RegisFormComponent.prototype, "createNewUserEvent", void 0);
RegisFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-regis-form',
        template: __webpack_require__("../../../../../src/app/regis-form/regis-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/regis-form/regis-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=regis-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/selfpost/selfpost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\n    width: 600px;\n  }\n  \n.post-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/headerimage/head5.jpg") + ");\n  /* background-image: spaceScreen.headerimg; */\n  background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selfpost/selfpost.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button color =\"primary\" (click)=\"refreshSelfposts($event)\" md-raised-button>Refresh</button>\n<md-card class=\"post-card\" *ngFor=\"let selfPost of selfPosts; let i = index\">\n  <md-card-header>\n      <div md-card-avatar class=\"post-image\"></div>\n      <md-card-title>{{selfPost.createdBy}}</md-card-title>\n      <md-card-subtitle>{{selfPost.createdAt}}</md-card-subtitle>\n  </md-card-header>\n  <!-- <img md-card-image src =\"{{spaceScreen.img}}\"> -->\n  <md-card-content>\n    <p>{{selfPost.body}}</p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button (click)=\"markMe(i)\">\n      <i class=\"material-icons md-18\">bookmark</i> \n    </button>\n    <!-- <button md-button (click)=\"markMe(i)\">\n      <i class=\"material-icons md-18\" [class.green-color]=\"spaceScreen.marked == '1'\">bookmark</i> \n    </button> -->\n    <button md-button (click)=\"deleteSelfposts(i)\">\n      <i class=\"material-icons md-18\">delete</i> \n    </button>\n  </md-card-actions>\n</md-card>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/selfpost/selfpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfpostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelfpostComponent = (function () {
    function SelfpostComponent(userService, postService, http) {
        this.userService = userService;
        this.postService = postService;
        this.http = http;
        // this.http.get('assets/mock-data-mypost/data.json')
        // .map(response => response.json().screenshots)
        // .subscribe(res => this.spaceScreens = res);
    }
    SelfpostComponent.prototype.ngOnInit = function () {
        this.getMyPosts(this.curUsername);
    };
    SelfpostComponent.prototype.refreshSelfposts = function (e) {
        this.getMyPosts(this.curUsername);
    };
    SelfpostComponent.prototype.deleteSelfposts = function (i) {
        var _this = this;
        var postid = this.selfPosts[i]._id;
        this.postService.deletePost(postid).then(function (data) {
            if (data.success === true) {
                _this.getMyPosts(_this.curUsername); // refresh self posts after delete
                console.log("Self posts deleted from database, post id: ", postid);
            }
            else {
                console.log("Error when delete self post from database: ", data.message);
            }
        });
    };
    SelfpostComponent.prototype.getMyPosts = function (curUsername) {
        var _this = this;
        this.postService.getSelfPosts(curUsername).then(function (data) {
            if (data.success === true) {
                _this.selfPosts = data.posts;
                // console.log("Self posts got from database", this.selfPosts);
            }
            else {
                console.log("Error when getting self post from database: ", data.message);
            }
        });
    };
    SelfpostComponent.prototype.markMe = function (i) {
        if (this.spaceScreens[i].marked !== 1) {
            this.spaceScreens[i].marked = 1;
        }
        else {
            this.spaceScreens[i].marked = 0;
        }
    };
    SelfpostComponent.prototype.deleteMe = function (i) {
        this.spaceScreens.splice(i, 1);
        console.log(i);
    };
    return SelfpostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SelfpostComponent.prototype, "curUsername", void 0);
SelfpostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selfpost',
        template: __webpack_require__("../../../../../src/app/selfpost/selfpost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selfpost/selfpost.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
], SelfpostComponent);

var _a, _b, _c;
//# sourceMappingURL=selfpost.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.setUserLoggedOut = function () {
        this.isUserLoggedIn = false;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService.prototype.create = function (user) {
        return this._http.post('/users/register', user).map(function (data) {
            var returnUser = data.json();
            // console.log(returnUser);
            if (returnUser && returnUser.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(returnUser));
            }
            return returnUser.success;
        }).toPromise();
    };
    UserService.prototype.destroy = function (user) {
        return this._http.delete('/users/' + user._id).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.updatePassword = function (user) {
        console.log("Client > New password to be updated > ", user);
        return this._http.put('/users/updatepassword/' + user._id, user).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.updateEmail = function (user) {
        console.log("Client > New email to be updated > ", user);
        return this._http.put('/users/updateemail/' + user._id, user).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUserByUsername = function (username) {
        // console.log('client > Get user by user name > ',username);
        return this._http.get('/users/getuserbyusername/' + username).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUserByUserID = function (userID) {
        // console.log('client > Get user by UserID > ', userID);
        return this._http.get('/users/getuserbyuserid/' + userID).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUser = function (user) {
        return this._http.get('/users/' + user._id).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUsers = function () {
        return this._http.get('/users').map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.loginUser = function (username, password) {
        return this._http.post('/users/authenticate', { username: username, password: password })
            .map(function (data) {
            // login successful if there's a jwt token in the response
            var user = data.json();
            // console.log(user);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            console.log("current user: ", localStorage.getItem('currentUser'));
            return user.success;
        }).toPromise();
    };
    UserService.prototype.getUserByUserEmail = function (email) {
        return this._http.get('/users/getuserbyemail/' + email).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.updateFriend = function (user) {
        //console.log("Client > New friend to be updated > ", user)
        return this._http.put('/users/updatefriend/' + user._id, user).map(function (data) { return data.json(); }).toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, email, nickname, gender, dob, friend, emaileditable, passwordeditable) {
        if (_id === void 0) { _id = ''; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (nickname === void 0) { nickname = ''; }
        if (gender === void 0) { gender = 0; }
        if (dob === void 0) { dob = ''; }
        if (friend === void 0) { friend = []; }
        if (emaileditable === void 0) { emaileditable = false; }
        if (passwordeditable === void 0) { passwordeditable = false; }
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.gender = gender;
        this.dob = dob;
        this.friend = friend;
        this.emaileditable = emaileditable;
        this.passwordeditable = passwordeditable;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"update()\">\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"userEdit.username\">\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"userEdit.password\">\n    <input type=\"submit\">\n</form>\n  "

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user-edit/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditComponent = (function () {
    function UserEditComponent() {
        this.updateUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userEdit = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.user);
        console.log(this.user);
    };
    UserEditComponent.prototype.update = function () {
        this.userEdit.editable = false;
        this.updateUserEvent.emit(this.userEdit);
    };
    return UserEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]) === "function" && _a || Object)
], UserEditComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserEditComponent.prototype, "updateUserEvent", void 0);
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserEditComponent);

var _a;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, editable) {
        if (_id === void 0) { _id = ''; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (editable === void 0) { editable = false; }
        this._id = _id;
        this.username = username;
        this.password = password;
        this.editable = editable;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user of users\">\n  {{ user._id }} - {{ user.username }} - {{ user.password }}\n  <button (click)=\"destroy(user)\">Delete</button>\n  <button (click)=\"user.editable = !user.editable\">Edit</button>\n  <app-user-edit [user]=\"user\" (updateUserEvent)=\"update($event)\" *ngIf=\"user.editable\"></app-user-edit>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = (function () {
    function UserListComponent() {
        this.destroyUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.destroy = function (user) {
        this.destroyUserEvent.emit(user);
    };
    UserListComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "users", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "destroyUserEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserListComponent.prototype, "updateUserEvent", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListComponent);

//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"create()\">\n  <input type=\"text\" name=\"username\" [(ngModel)]=\"newUser.username\">\n  <input type=\"text\" name=\"password\" [(ngModel)]=\"newUser.password\">\n  <input type=\"submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNewComponent = (function () {
    function UserNewComponent() {
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.createNewUserEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent.prototype.create = function () {
        // call server to save
        this.createNewUserEvent.emit(this.newUser);
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */];
    };
    return UserNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserNewComponent.prototype, "createNewUserEvent", void 0);
UserNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-new',
        template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserNewComponent);

//# sourceMappingURL=user-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n.example-full-width {\n  width: 100%;\n}\n\n.example-button-color {\n    color: #80CBC4\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <!-- {{ user | json }} <br>\n    {{ userEdit | json }} -->\n    <form class=\"example-form\">\n        <!-- User name -->\n        <md-form-field class=\"example-full-width\">\n          <input mdInput id=\"prfusername\" placeholder=\"Username\" disabled value={{user.username}}>\n        </md-form-field>\n        <!-- Nick name -->\n        <md-form-field class=\"example-full-width\">\n          <input mdInput id=\"prfnickname\" placeholder=\"Nickname\" disabled value={{user.nickname}}>\n        </md-form-field>\n        <!-- Birthday -->\n        <md-form-field class=\"example-full-width\">\n            <input mdInput id=\"prfbirthday\" placeholder=\"Birthday\" disabled value={{user.dob}}>\n        </md-form-field>\n        <!-- Email -->\n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n          <td><md-form-field class=\"example-full-width\">\n            <input mdInput id=\"prfemail\" placeholder=\"Email\" disabled value={{userEdit.email}}>\n          </md-form-field></td>\n          <td>\n              <button color=\"primary\" id=\"editemailbtn\" (click)=\"userEdit.emaileditable=!userEdit.emaileditable\" md-raised-button>Edit</button>     \n          </td>\n        </tr></table>\n        <table class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"userEdit.emaileditable\"><tr>\n            <td><form class=\"example-form\">\n                <md-form-field class=\"example-full-width\">\n                  <input type=\"text\" mdInput placeholder=\"New Email Address\" name=\"email\" [(ngModel)]=\"userEdit.email\">\n                </md-form-field>\n            </form></td>\n            <td>\n              <button color=\"primary\" id=\"confirmemailbtn\" (click)=\"update_email()\" md-raised-button>Confirm Change</button>\n            </td>  \n        </tr></table>\n        <!-- Password -->\n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n          <td><md-form-field class=\"example-full-width\">\n            <input mdInput placeholder=\"Password\" disabled value=...............................>\n          </md-form-field></td>\n          <td>\n              <button color =\"primary\" id=\"editpasswordbtn\" (click)=\"user.passwordeditable=!user.passwordeditable\" md-raised-button>Edit</button>    \n          </td>\n        </tr></table>\n        <table class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"user.passwordeditable\"><tr>\n            <td><form class=\"example-form\">\n                <md-form-field class=\"example-full-width\">\n                  <input type=\"password\" mdInput placeholder=\"New Password\" name=\"password\" [(ngModel)]=\"userEdit.password\">\n                </md-form-field>\n            </form></td>\n            <td>\n              <button color=\"primary\" id=\"confirmpasswordbtn\" (click)=\"update_password()\" md-raised-button>Confirm Change</button>\n            </td>  \n        </tr></table>\n\n    </form>\n    \n    <button color =\"primary\" routerLink=\"/dashboard\" md-raised-button>Back to Homepage</button>\n\n\n</md-card>\n  "

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(userService) {
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.userEdit = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.currentuser = JSON.parse(localStorage.getItem("currentUser"));
        this.username = '';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
        // so need the if clause to get username
        // console.log(this.currentuser);
        // if('token' in this.currentuser){
        this.username = this.currentuser.user.username;
        // }else {
        //   this.username = this.currentuser.username;
        // };
        // get all user information from database and assign to user and useredit
        this.userService.getUserByUsername(this.username).then(function (data) {
            _this.user = data;
            Object.assign(_this.userEdit, _this.user);
            console.log("user info got from database", _this.user);
        });
    };
    // getUser(user: User) {
    //   this.userService.getUser()
    //   .then(user => this.user = user)
    //   .catch(err => console.log(err));
    // }
    UserProfileComponent.prototype.update_email = function () {
        this.userEdit.emaileditable = false;
        this.user = this.userEdit;
        this.userService.updateEmail(this.userEdit);
    };
    UserProfileComponent.prototype.update_password = function () {
        this.userEdit.passwordeditable = false;
        this.user = this.userEdit;
        this.userService.updatePassword(this.userEdit);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "{{ users | json }}\n<app-user-new (createNewUserEvent)=\"create($event)\"></app-user-new>\n<app-user-list \n[users]=\"users\" \n(destroyUserEvent)=\"destroy($event)\"\n(updateUserEvent)=\"update($event)\"\n></app-user-list>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        // this.getUsers();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.nickname === undefined ||
            user.nickname === '' ||
            user.email === undefined ||
            user.email === '' ||
            user.username === undefined ||
            user.username === '' ||
            user.password === undefined ||
            user.password === '' ||
            user.dob === undefined ||
            user.dob === '') {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === undefined ||
            user.username === '' ||
            user.password === undefined ||
            user.password === '') {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/headerimage/head5.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "head5.41a4de022d0b875cc4d9.jpg";

/***/ }),

/***/ "../../../../../src/assets/headerimage/head6.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map