webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/RestService/restservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestService = /** @class */ (function () {
    function RestService(http, _http) {
        this.http = http;
        this._http = _http;
        this.viewuser = [];
    }
    RestService.prototype.postdetails = function (url, userData) {
        return this.http.post(url, userData).map(function (response) {
            var data = response.json();
            //console.log(response);
            return data;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    RestService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        return this._http.post('http://localhost:3000/download', body, {
            responseType: 'blob',
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().append('Content-Type', 'application/json')
        });
    };
    RestService.prototype.getdetails = function (url) {
        return this.http.get(url).map(function (response) {
            var details = response.json();
            return details;
        }).catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    RestService.prototype.updateDetails = function (url, body) {
        return this.http.put(url, body).map(function (response) {
            var data = response.json();
            return data;
        });
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/app-material/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatStepperModule */],
            ],
            declarations: []
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular2_simple_countdown_countdown__ = __webpack_require__("./node_modules/angular2-simple-countdown/countdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_material_app_material_module__ = __webpack_require__("./src/app/app-material/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_setting_user_setting_component__ = __webpack_require__("./src/app/user-setting/user-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__subscription_subscription_component__ = __webpack_require__("./src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_setting_create_user_create_user_component__ = __webpack_require__("./src/app/user-setting/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_setting_userprivileges_userprivileges_component__ = __webpack_require__("./src/app/user-setting/userprivileges/userprivileges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__subscription_myplan_myplan_component__ = __webpack_require__("./src/app/subscription/myplan/myplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__subscription_billing_info_billing_info_component__ = __webpack_require__("./src/app/subscription/billing-info/billing-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__generatereport_generatereport_component__ = __webpack_require__("./src/app/generatereport/generatereport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_dashboard_jobsviewed_jobsviewed_component__ = __webpack_require__("./src/app/dashboard/jobsviewed/jobsviewed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_setting_viewuser_viewuser_component__ = __webpack_require__("./src/app/user-setting/viewuser/viewuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_dashboard_jobseekerapplied_jobseekerapplied_component__ = __webpack_require__("./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_dashboard_jobseekerrelevant_jobseekerrelevant_component__ = __webpack_require__("./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_dashboard_jobseekerirrelevant_jobseekerirrelevant_component__ = __webpack_require__("./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_dashboard_jobsactive_jobsactive_component__ = __webpack_require__("./src/app/dashboard/jobsactive/jobsactive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_dashboard_jobsinactive_jobsinactive_component__ = __webpack_require__("./src/app/dashboard/jobsinactive/jobsinactive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_dashboard_jobsclosed_jobsclosed_component__ = __webpack_require__("./src/app/dashboard/jobsclosed/jobsclosed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_dashboard_jobstotal_jobstotal_component__ = __webpack_require__("./src/app/dashboard/jobstotal/jobstotal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_dashboard_employerviewed_employerviewed_component__ = __webpack_require__("./src/app/dashboard/employerviewed/employerviewed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_dashboard_employershortlisted_employershortlisted_component__ = __webpack_require__("./src/app/dashboard/employershortlisted/employershortlisted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_dashboard_employerscheduled_employerscheduled_component__ = __webpack_require__("./src/app/dashboard/employerscheduled/employerscheduled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_dashboard_employerselected_employerselected_component__ = __webpack_require__("./src/app/dashboard/employerselected/employerselected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dashboard_employerrejected_employerrejected_component__ = __webpack_require__("./src/app/dashboard/employerrejected/employerrejected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_approved_approved_component__ = __webpack_require__("./src/app/dashboard/approved/approved.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dashboard_incuration_incuration_component__ = __webpack_require__("./src/app/dashboard/incuration/incuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__exporttoexcel_component_exporttoexcel_component__ = __webpack_require__("./src/app/exporttoexcel.component/exporttoexcel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_collapsible__ = __webpack_require__("./node_modules/angular2-collapsible/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__dashboard_matchedprofiles_matchedprofiles_component__ = __webpack_require__("./src/app/dashboard/matchedprofiles/matchedprofiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__user_setting_userprivileges_edituserprev_edituserprev_component__ = __webpack_require__("./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__userssettings_userssettings_component__ = __webpack_require__("./src/app/userssettings/userssettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__userssettings_edituserdetails_edituserdetails_component__ = __webpack_require__("./src/app/userssettings/edituserdetails/edituserdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__userssettings_viewuserdetails_viewuserdetails_component__ = __webpack_require__("./src/app/userssettings/viewuserdetails/viewuserdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */], children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */] }, { path: 'edituserdetails', component: __WEBPACK_IMPORTED_MODULE_43__userssettings_edituserdetails_edituserdetails_component__["a" /* EdituserdetailsComponent */] }, { path: 'edituserdetails/:id', component: __WEBPACK_IMPORTED_MODULE_43__userssettings_edituserdetails_edituserdetails_component__["a" /* EdituserdetailsComponent */] },
            { path: 'viewuserdetails', component: __WEBPACK_IMPORTED_MODULE_44__userssettings_viewuserdetails_viewuserdetails_component__["a" /* ViewuserdetailsComponent */] }, { path: 'viewuserdetails/:id', component: __WEBPACK_IMPORTED_MODULE_44__userssettings_viewuserdetails_viewuserdetails_component__["a" /* ViewuserdetailsComponent */] }, { path: 'usersettings', component: __WEBPACK_IMPORTED_MODULE_42__userssettings_userssettings_component__["b" /* UserssettingsComponent */] }, { path: 'users', component: __WEBPACK_IMPORTED_MODULE_15__user_setting_user_setting_component__["a" /* UserSettingComponent */],
                children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_17__user_setting_create_user_create_user_component__["a" /* CreateUserComponent */] },
                    { path: 'userprivileges', component: __WEBPACK_IMPORTED_MODULE_18__user_setting_userprivileges_userprivileges_component__["a" /* UserprivilegesComponent */] }] },
            { path: 'subscription', component: __WEBPACK_IMPORTED_MODULE_16__subscription_subscription_component__["a" /* SubscriptionComponent */],
                children: [{ path: 'myplan', component: __WEBPACK_IMPORTED_MODULE_19__subscription_myplan_myplan_component__["a" /* MyplanComponent */] },
                    { path: 'billinginfo', component: __WEBPACK_IMPORTED_MODULE_20__subscription_billing_info_billing_info_component__["a" /* BillingInfoComponent */] }] },
            { path: 'generate', component: __WEBPACK_IMPORTED_MODULE_21__generatereport_generatereport_component__["a" /* GeneratereportComponent */] },
            { path: 'jviewed', component: __WEBPACK_IMPORTED_MODULE_22__app_dashboard_jobsviewed_jobsviewed_component__["a" /* JobsviewedComponent */] },
            { path: 'jviewed/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_22__app_dashboard_jobsviewed_jobsviewed_component__["a" /* JobsviewedComponent */] },
            { path: 'erejected', component: __WEBPACK_IMPORTED_MODULE_35__dashboard_employerrejected_employerrejected_component__["a" /* EmployerrejectedComponent */] },
            { path: 'erejected/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_35__dashboard_employerrejected_employerrejected_component__["a" /* EmployerrejectedComponent */] },
            { path: 'eselected', component: __WEBPACK_IMPORTED_MODULE_34__app_dashboard_employerselected_employerselected_component__["a" /* EmployerselectedComponent */] },
            { path: 'eselected/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_34__app_dashboard_employerselected_employerselected_component__["a" /* EmployerselectedComponent */] },
            { path: 'escheduled', component: __WEBPACK_IMPORTED_MODULE_33__app_dashboard_employerscheduled_employerscheduled_component__["a" /* EmployerscheduledComponent */] },
            { path: 'escheduled/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_33__app_dashboard_employerscheduled_employerscheduled_component__["a" /* EmployerscheduledComponent */] },
            { path: 'eshort', component: __WEBPACK_IMPORTED_MODULE_32__app_dashboard_employershortlisted_employershortlisted_component__["a" /* EmployershortlistedComponent */] },
            { path: 'eshort/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_32__app_dashboard_employershortlisted_employershortlisted_component__["a" /* EmployershortlistedComponent */] },
            { path: 'eviewed', component: __WEBPACK_IMPORTED_MODULE_31__app_dashboard_employerviewed_employerviewed_component__["a" /* EmployerviewedComponent */] },
            { path: 'eviewed/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_31__app_dashboard_employerviewed_employerviewed_component__["a" /* EmployerviewedComponent */] },
            { path: 'approved', component: __WEBPACK_IMPORTED_MODULE_36__dashboard_approved_approved_component__["a" /* ApprovedComponent */] },
            { path: 'approved/:flag/:by_location/:by_user/:from_date/:to_date', component: __WEBPACK_IMPORTED_MODULE_36__dashboard_approved_approved_component__["a" /* ApprovedComponent */] },
            { path: 'curation', component: __WEBPACK_IMPORTED_MODULE_37__dashboard_incuration_incuration_component__["a" /* IncurationComponent */] },
            { path: 'curation/:flag/:by_user/:by_location/:from_date/:to_date', component: __WEBPACK_IMPORTED_MODULE_37__dashboard_incuration_incuration_component__["a" /* IncurationComponent */] },
            { path: 'jtotal', component: __WEBPACK_IMPORTED_MODULE_30__app_dashboard_jobstotal_jobstotal_component__["a" /* JobstotalComponent */] },
            { path: 'jtotal/:flag/:by_user/:by_location/:from_date/:to_date', component: __WEBPACK_IMPORTED_MODULE_30__app_dashboard_jobstotal_jobstotal_component__["a" /* JobstotalComponent */] },
            { path: 'jactive', component: __WEBPACK_IMPORTED_MODULE_27__app_dashboard_jobsactive_jobsactive_component__["a" /* JobsactiveComponent */] },
            { path: 'jactive/:flag', component: __WEBPACK_IMPORTED_MODULE_27__app_dashboard_jobsactive_jobsactive_component__["a" /* JobsactiveComponent */] },
            { path: 'jinactive', component: __WEBPACK_IMPORTED_MODULE_28__app_dashboard_jobsinactive_jobsinactive_component__["a" /* JobsinactiveComponent */] },
            { path: 'jinactive/:flag', component: __WEBPACK_IMPORTED_MODULE_28__app_dashboard_jobsinactive_jobsinactive_component__["a" /* JobsinactiveComponent */] },
            { path: 'jclosed', component: __WEBPACK_IMPORTED_MODULE_29__app_dashboard_jobsclosed_jobsclosed_component__["a" /* JobsclosedComponent */] },
            { path: 'jclosed/:flag', component: __WEBPACK_IMPORTED_MODULE_29__app_dashboard_jobsclosed_jobsclosed_component__["a" /* JobsclosedComponent */] },
            { path: 'japplied', component: __WEBPACK_IMPORTED_MODULE_24__app_dashboard_jobseekerapplied_jobseekerapplied_component__["a" /* JobseekerappliedComponent */] },
            { path: 'japplied/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_24__app_dashboard_jobseekerapplied_jobseekerapplied_component__["a" /* JobseekerappliedComponent */] },
            { path: 'jrelevant', component: __WEBPACK_IMPORTED_MODULE_25__app_dashboard_jobseekerrelevant_jobseekerrelevant_component__["a" /* JobseekerrelevantComponent */] },
            { path: 'jrelevant/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_25__app_dashboard_jobseekerrelevant_jobseekerrelevant_component__["a" /* JobseekerrelevantComponent */] },
            { path: 'matched', component: __WEBPACK_IMPORTED_MODULE_40__dashboard_matchedprofiles_matchedprofiles_component__["a" /* MatchedprofilesComponent */] },
            { path: 'matched/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_40__dashboard_matchedprofiles_matchedprofiles_component__["a" /* MatchedprofilesComponent */] },
            { path: 'jirrelevant', component: __WEBPACK_IMPORTED_MODULE_26__app_dashboard_jobseekerirrelevant_jobseekerirrelevant_component__["a" /* JobseekerirrelevantComponent */] },
            { path: 'jirrelevant/:flag/:jobid/:by_location/:from_date/:to_date/:by_user', component: __WEBPACK_IMPORTED_MODULE_26__app_dashboard_jobseekerirrelevant_jobseekerirrelevant_component__["a" /* JobseekerirrelevantComponent */] },
            { path: 'viewuser', component: __WEBPACK_IMPORTED_MODULE_23__user_setting_viewuser_viewuser_component__["a" /* ViewuserComponent */] },
            { path: 'viewuser/:id', component: __WEBPACK_IMPORTED_MODULE_23__user_setting_viewuser_viewuser_component__["a" /* ViewuserComponent */] },
            { path: 'edituserprev', component: __WEBPACK_IMPORTED_MODULE_41__user_setting_userprivileges_edituserprev_edituserprev_component__["a" /* EdituserprevComponent */] },
            { path: 'edituserprev/:id', component: __WEBPACK_IMPORTED_MODULE_41__user_setting_userprivileges_edituserprev_edituserprev_component__["a" /* EdituserprevComponent */] }
        ] }, { path: '**', component: __WEBPACK_IMPORTED_MODULE_45__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_38__exporttoexcel_component_exporttoexcel_component__["a" /* ExporttoexcelComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angular2_simple_countdown_countdown__["a" /* CountDown */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_setting_user_setting_component__["a" /* UserSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__subscription_subscription_component__["a" /* SubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_setting_create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_setting_userprivileges_userprivileges_component__["a" /* UserprivilegesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__subscription_myplan_myplan_component__["a" /* MyplanComponent */],
                __WEBPACK_IMPORTED_MODULE_20__subscription_billing_info_billing_info_component__["a" /* BillingInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angular2_simple_countdown_countdown__["a" /* CountDown */],
                __WEBPACK_IMPORTED_MODULE_21__generatereport_generatereport_component__["a" /* GeneratereportComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__app_dashboard_jobsviewed_jobsviewed_component__["a" /* JobsviewedComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_setting_viewuser_viewuser_component__["a" /* ViewuserComponent */],
                __WEBPACK_IMPORTED_MODULE_24__app_dashboard_jobseekerapplied_jobseekerapplied_component__["a" /* JobseekerappliedComponent */],
                __WEBPACK_IMPORTED_MODULE_25__app_dashboard_jobseekerrelevant_jobseekerrelevant_component__["a" /* JobseekerrelevantComponent */],
                __WEBPACK_IMPORTED_MODULE_26__app_dashboard_jobseekerirrelevant_jobseekerirrelevant_component__["a" /* JobseekerirrelevantComponent */],
                __WEBPACK_IMPORTED_MODULE_27__app_dashboard_jobsactive_jobsactive_component__["a" /* JobsactiveComponent */],
                __WEBPACK_IMPORTED_MODULE_28__app_dashboard_jobsinactive_jobsinactive_component__["a" /* JobsinactiveComponent */],
                __WEBPACK_IMPORTED_MODULE_29__app_dashboard_jobsclosed_jobsclosed_component__["a" /* JobsclosedComponent */],
                __WEBPACK_IMPORTED_MODULE_30__app_dashboard_jobstotal_jobstotal_component__["a" /* JobstotalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__app_dashboard_employerviewed_employerviewed_component__["a" /* EmployerviewedComponent */],
                __WEBPACK_IMPORTED_MODULE_32__app_dashboard_employershortlisted_employershortlisted_component__["a" /* EmployershortlistedComponent */],
                __WEBPACK_IMPORTED_MODULE_33__app_dashboard_employerscheduled_employerscheduled_component__["a" /* EmployerscheduledComponent */],
                __WEBPACK_IMPORTED_MODULE_34__app_dashboard_employerselected_employerselected_component__["a" /* EmployerselectedComponent */],
                __WEBPACK_IMPORTED_MODULE_35__dashboard_employerrejected_employerrejected_component__["a" /* EmployerrejectedComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dashboard_approved_approved_component__["a" /* ApprovedComponent */],
                __WEBPACK_IMPORTED_MODULE_37__dashboard_incuration_incuration_component__["a" /* IncurationComponent */],
                __WEBPACK_IMPORTED_MODULE_40__dashboard_matchedprofiles_matchedprofiles_component__["a" /* MatchedprofilesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__user_setting_userprivileges_edituserprev_edituserprev_component__["a" /* EdituserprevComponent */], __WEBPACK_IMPORTED_MODULE_42__userssettings_userssettings_component__["a" /* DialogOverviewExampleDialog */], __WEBPACK_IMPORTED_MODULE_42__userssettings_userssettings_component__["b" /* UserssettingsComponent */], __WEBPACK_IMPORTED_MODULE_43__userssettings_edituserdetails_edituserdetails_component__["a" /* EdituserdetailsComponent */], __WEBPACK_IMPORTED_MODULE_44__userssettings_viewuserdetails_viewuserdetails_component__["a" /* ViewuserdetailsComponent */], __WEBPACK_IMPORTED_MODULE_45__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_39_angular2_collapsible__["a" /* CollapsibleModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_material_app_material_module__["a" /* AppMaterialModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__RestService_restservice__["a" /* RestService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_42__userssettings_userssettings_component__["a" /* DialogOverviewExampleDialog */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/approved/approved.component.css":
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n.example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n \r\n  }\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/dashboard/approved/approved.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n</mat-icon>back</button>\n<table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n  <thead>\n    <tr >\n      <th style=\"color:black\">position_name</th>\n      <th style=\"color:black\">location</th>\n      <th style=\"color:black\">min_exp</th>\n      <th style=\"color:black\">max_exp</th>\n      <th style=\"color:black\">min_sal</th>\n      <th style=\"color:black\">max_sal</th>\n      <th style=\"color:black\">Skill_Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jvs of jvs\">\n  \n      <td>{{jvs.position_name}}</td>\n      <td>{{jvs.location}}</td>\n      <td>{{jvs.min_exp}}</td>\n      <td>{{jvs.max_exp}}</td>\n      <td>{{jvs.min_sal}}</td>\n      <td>{{jvs.max_sal}}</td>\n      <td>{{jvs.Skill_Name}}</td>\n    </tr>\n    \n  </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/dashboard/approved/approved.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApprovedComponent = /** @class */ (function () {
    function ApprovedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.A = "A";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    ApprovedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_user != null || this.by_location != null || this.from_date != null || this.to_date != null) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    ApprovedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            curation_status_id: this.A,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curation', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    ApprovedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            curation_status_id: this.A,
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationsortsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], ApprovedComponent.prototype, "dtElement", void 0);
    ApprovedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-approved',
            template: __webpack_require__("./src/app/dashboard/approved/approved.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/approved/approved.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], ApprovedComponent);
    return ApprovedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".sort{\r\n    height:20px;\r\n    width:18px;\r\n}\r\n.jobseeker{\r\n    height:70px;\r\n    width:70px;\r\n}\r\n.show{\r\nfont-size: 1rem;\r\npadding-left: 15px;\r\ncolor:black; \r\nfont-family:serif;\r\n}\r\n.filter{\r\n    font-size: 1rem;\r\n    color:black; \r\n    font-family: \"Times New Roman\", Times, serif;\r\n    }\r\n.generate{\r\n        font-size: 1rem;\r\n        color:black; \r\n        font-family: \"Times New Roman\", Times, serif;\r\n        }\r\n.expires{\r\n            font-size: 1rem;\r\n            color:black; \r\n            font-family: \"Times New Roman\", Times, serif;\r\n            }\r\n.progress-bar-striped {\r\n                background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);\r\n                background-size: 1rem 1rem;\r\n            }\r\n.progress-barg {\r\n            \r\n                display: -webkit-box;\r\n            \r\n                display: -ms-flexbox;\r\n            \r\n                display: flex;\r\n                -webkit-box-orient: vertical;\r\n                -webkit-box-direction: normal;\r\n             \r\n                -ms-flex-direction: column;\r\n             \r\n                    flex-direction: column;\r\n                -webkit-box-pack: center;\r\n            \r\n                -ms-flex-pack: center;\r\n            \r\n                    justify-content: center;\r\n                color: #fff;\r\n                text-align: center;\r\n                background-color: green;\r\n                -webkit-transition: width .6s ease;\r\n                transition: width .6s ease;\r\n            }\r\n.progress-baro {\r\n                \r\n                    display: -webkit-box;\r\n                \r\n                    display: -ms-flexbox;\r\n                \r\n                    display: flex;\r\n                    -webkit-box-orient: vertical;\r\n                    -webkit-box-direction: normal;\r\n                 \r\n                    -ms-flex-direction: column;\r\n                 \r\n                        flex-direction: column;\r\n                    -webkit-box-pack: center;\r\n                \r\n                    -ms-flex-pack: center;\r\n                \r\n                        justify-content: center;\r\n                    color: #fff;\r\n                    text-align: center;\r\n                    background-color: orange;\r\n                    -webkit-transition: width .6s ease;\r\n                    transition: width .6s ease;\r\n                }\r\n.progress-barr {\r\n                    \r\n                        display: -webkit-box;\r\n                    \r\n                        display: -ms-flexbox;\r\n                    \r\n                        display: flex;\r\n                        -webkit-box-orient: vertical;\r\n                        -webkit-box-direction: normal;\r\n                     \r\n                        -ms-flex-direction: column;\r\n                     \r\n                            flex-direction: column;\r\n                        -webkit-box-pack: center;\r\n                    \r\n                        -ms-flex-pack: center;\r\n                    \r\n                            justify-content: center;\r\n                        color: #fff;\r\n                        text-align: center;\r\n                        background-color: red;\r\n                        -webkit-transition: width .6s ease;\r\n                        transition: width .6s ease;\r\n                    }\r\n.jsaction{\r\n                        padding-bottom: 0px;\r\n                        margin-top: 8px;\r\n                        -webkit-transition: -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: box-shadow 280ms cubic-bezier(.4,0,.2,1), -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        display: block;\r\n                        position: relative;\r\n                  \r\n                        border-radius: 6px;\r\n                    }\r\n.employeraction{\r\n                        padding-bottom: 30px;\r\n                        margin-top: 8px;\r\n                        -webkit-transition: -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        transition: box-shadow 280ms cubic-bezier(.4,0,.2,1), -webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n                        display: block;\r\n                        position: relative;\r\n                  \r\n                        border-radius: 6px;\r\n                    }\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n                        -webkit-box-shadow: 2px 5px 3px 4px  rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n                                box-shadow: 2px 5px 3px 4px  rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n                    }\r\n                  "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div style=\"margin-top: 2px\" >\n    <header  style=\"background: grey\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"row\" >\n              <div class=\"col-md-7\">\n              <h6 class=\"show\"> Show me status for :</h6>\n            </div>\n            <div class=\"col-md-5\">\n                <select #selectedvalue (change)=\"onChange(selectedvalue)\">\n                        <option value=\"\" selected disabled >Please select</option>\n                        <option name=\"sai\" [value]=\"'today'\">Todays</option>\n                <option name=\"sai\" [value]=\"'yesterday'\">Yesterday</option>\n                <option name=\"sai\" [value]=\"'week'\">This Week</option>\n                <option name=\"sai\" [value]=\"'month'\">This Month</option>\n                <option name=\"sai\" [value]=\"'quarter'\">Quarterly</option>\n                <option name=\"sai\" [value]=\"'yearly'\">Yearly</option>\n                <option name=\"sai\" [value]=\"'overall'\">Overall</option>\n                </select>\n\n        </div>\n      </div>\n          </div>\n          \n          <div class=\"col-md-3\" style=\"text-align: center\" >\n              <span (click)=\"showDialog = !showDialog\"  class=\"filter\">Filter By: <img class=\"sort\"      \n                src=\"assets/images/sort.png\"></span>\n              \n              <app-dialog [(visible)]=\"showDialog\">\n                 <h6>FILTER</h6>\n                 <hr>\n                 <div align=\"right\">\n                 <button mat-raised-button color=\"primary\" (click)=\"resetAll()\">Reset All<mat-icon aria-label=\"Example icon-button with a heart icon\">refresh</mat-icon></button>\n                 \n                        \n                   \n                </div>\n                 <div>\n                        <form [formGroup]=\"sortForm\" (ngSubmit)=\"onSort()\">\n                 <div class=\"row\">\n                     <div class=\"col-md-4\">\n                         Select User:\n                     </div>\n                     <div class=\"col-md-8\">\n                            <div class=\"form-group\" >\n                                <mat-form-field>\n                                    <mat-select placeholder=\"users\" formControlName=\"user\" multiple [(ngModel)]=\"user\" (ngModelChange)=\"userChange()\">\n                                      <mat-option *ngFor=\"let users of users\" [value]=\"users.id\">{{users.contact_name}}</mat-option>\n                                      \n                                    </mat-select>\n                                    <mat-error *ngIf= \"sortForm.get('user').invalid\">{{getusername()}}</mat-error>\n                                </mat-form-field>\n                     </div> </div>\n                 </div>\n                 <div class=\"row\">\n                        <div class=\"col-md-4\">\n                                \n                                Select Job:\n                        </div>\n                        <div class=\"col-md-8\">\n                                <div class=\"form-group\" >\n                                <mat-form-field>\n                                        <mat-select placeholder=\"Jobs\"  multiple formControlName=\"job\" [(ngModel)]=\"jobid\" (ngModelChange)=\"jobChange()\">\n                                          <mat-option *ngFor=\"let gjob of gjob\" [value]=\"gjob.jobid\">{{gjob.job_name}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                        </div></div>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                    Select Location:\n                            </div>\n                            <div class=\"col-md-8\">\n                                    <div class=\"form-group\" >\n                                        <mat-form-field>\n                                            <mat-select placeholder=\"Locations\" formControlName=\"locations\" multiple>\n                                              <mat-option *ngFor=\"let locations of locations\" [value]=\"locations.id\">{{locations.location}}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                            </div>   </div>\n                        </div>\n                        <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                        Select from Date:\n                                </div>\n                                <div class=\"col-md-8\">\n                                        <div class=\"form-group\" >\n                                                <mat-form-field>\n                                                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"fromdate\">\n                                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                        <mat-datepicker #picker></mat-datepicker>\n                                                      </mat-form-field>\n        \n                                </div>   </div>\n                            </div>\n                            <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                            Select to Date:\n                                    </div>\n                                    <div class=\"col-md-8\">\n                                            <div class=\"form-group\" >\n                                                    <mat-form-field>\n                                                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\" formControlName=\"todate\" >\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker1></mat-datepicker>\n                                                          </mat-form-field>\n                                            \n                                    </div>   </div>\n                                </div>\n                                <button mat-raised-button color=\"accent\" (click)=\"showDialog = !showDialog\">Close<mat-icon aria-label=\"Example icon-button with a heart icon\">clear</mat-icon></button>\n                                <button mat-raised-button color=\"primary\" type=\"submit\">Submit<mat-icon aria-label=\"Example icon-button with a heart icon\">check</mat-icon></button>\n                          \n                        </form>\n                            </div>\n               \n              </app-dialog>\n              </div>\n          <div class=\"col-md-2\">\n              <span class=\"generate\" [routerLink]=\"['/generate']\">Generate Report <img class=\"sort\"      \n                src=\"assets/images/generate.png\"></span>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"row\">\n      <div class=\"col-md-3\">\n          <h6 class=\"expires\">Expires in :</h6>\n      </div>\n      <div class=\"col-md-9\">\n            <count-down [text]=\"text\" units=\"Days | Hours | Minutes \" [end]=\" date| date:'fullDate'\"></count-down>\n           <!--  <count-down units=\"Days | Hours | Minutes \" [end]=\"date| date\"></count-down>\n            <count-down units=\"Days | Hours \" [end]=\"date| date\"></count-down>\n            <count-down units=\"Days | Hours | Minutes\" [end]=\"date| date\"></count-down> -->\n\n        </div>\n            </div>\n          </div>\n        </div>\n      </header>\n    </div>\n    <div class=\"col-md-12\" >\n      <div class=\"row\">\n        \n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\" >\n                        <mat-card class=\"jsaction\" style=\"padding-top: 8px\">\n                                <span style=\"color:#00a3d3; font-family:serif;font-size: 18px;\"> Jobseeker Actions </span>\n                                <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                            <img class=\"jobseeker\"      \n                                            src=\"../../assets/images/jobs.png\">\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jviewed']\" [queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                    <div class=\"col-md-8\">\n                                  <h6 style=\"font-family:serif;\">Jobs Viewed: </h6>\n                                </div>\n                                <div class=\"col-md-4\" *ngFor=\"let Jobseekeractions of Jobseekeractions\">\n                                    <h6 style=\"font-family:serif;\">{{Jobseekeractions.count_views}}</h6>\n                                  </div> \n                                </div>\n                            \n                            <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/japplied']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                <div class=\"col-md-8\">\n                              <h6 style=\"font-family:serif;\">Applied: </h6>\n                            </div>\n                            <div class=\"col-md-4\" *ngFor=\"let Jobseekeractions of Jobseekeractions\">\n                                <h6 style=\"font-family:serif;\">{{Jobseekeractions.applied}}</h6>\n                              </div>\n                         \n                            </div>\n                            <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jrelevant']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                <div class=\"col-md-8\">\n                              <h6 style=\"font-family:serif;\">Relevant: </h6>\n                            </div>\n                            <div class=\"col-md-4\" *ngFor=\"let Jobseekeractions of Jobseekeractions\">\n                                <h6 style=\"font-family:serif;\">{{Jobseekeractions.relevant}}</h6>\n                              </div>\n                           \n                            </div>\n                            <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jirrelevant']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                <div class=\"col-md-8\">\n                              <h6 style=\"font-family:serif;\">Irrelevant: </h6>\n                            </div>\n                            <div class=\"col-md-4\" *ngFor=\"let Jobseekeractions of Jobseekeractions\">\n                                <h6 style=\"font-family:serif;\">{{Jobseekeractions.irrelevant}}</h6>\n                              </div>\n                            \n                            </div>\n                        </div>\n                          </div>\n                          <hr>\n                          <div class=\"row\">\n                                <div class=\"col-md-12\">\n                       \n                                        <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/matched']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\">\n                                                <div class=\"col-md-7\" >\n                                              <h6 style=\"font-family:serif;\">Matched Profiles: </h6>\n                                            </div>\n                                            <div class=\"col-md-2\">\n                                                <h6 style=\"font-family:serif;\">{{matchedprofiles}}</h6>\n                                              </div>\n                                              <div class=\"col-md-3\">\n                                                  <!-- <div class=\"progress\">\n                                                      <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n                                                        40%\n                                                      </div>\n                                                    </div> -->\n                                             \n                                            </div>\n                                        </div>\n                                   \n                                 </div>\n                              </div>\n                        </mat-card>\n                </div>\n               \n            </div>\n            \n        </div>\n        <div class=\"col-md-5\">\n        <div class=\"row\">\n                <div class=\"col-md-12\" >\n                        <mat-card class=\"employeraction\" style=\"padding-top: 8px\">\n                                <span style=\"color:#00a3d3;font-family:serif;font-size: 18px; \"> Employer Actions </span>  \n                                <div class=\"row\">\n                                        <div class=\"col-md-3\">\n                                                <img class=\"jobseeker\"      \n                                                src=\"../../assets/images/employer.png\">\n                                        </div>\n                                        <div class=\"col-md-9\">\n                                               \n                                                <div class=\"jsaction1\" style=\"color:black\">\n                                                  <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/eviewed']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                                      <div class=\"col-md-5\">\n                                                    <h6 style=\"font-family:serif;\">Profiles Viewed: </h6>\n                                                  </div>\n                                                  <div class=\"col-md-2\"*ngFor=\"let employeractions of employeractions\">\n                                                      <h6 style=\"font-family:serif;\">{{employeractions.profiles_viewed}}</h6>\n                                                    </div>\n                                                    <div class=\"col-md-5\">\n                                                        <!-- <div class=\"progress\">\n                                                            <div class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                            style=\"min-width: 2em;\" [style.width]=\"(viewed/100)*100 + '%'\">\n                                                            {{viewed| number : fractionSize}}%\n                                                            </div>\n                                                        </div> -->\n                                                    </div>\n                                                  </div>\n                                                  <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/eshort']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                                      <div class=\"col-md-5\">\n                                                    <h6 style=\"font-family:serif;\">Shortlisted: </h6>\n                                                  </div>\n                                                  <div class=\"col-md-2\" *ngFor=\"let employeractions of employeractions\">\n                                                      <h6 style=\"font-family:serif;\">{{employeractions.shortlisted}}</h6>\n                                                    </div>\n                                                    <div class=\"col-md-5\">\n                                                        <div class=\"progress\">\n                                                            <div class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                            style=\"min-width: 2em;\" [style.width]=\"(shortlisted/100)*100 + '%'\">\n                                                            {{shortlisted| number : fractionSize}}%\n                                                            </div>\n                                                        </div></div>\n                                                  </div>\n                                                  <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/escheduled']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                                      <div class=\"col-md-5\">\n                                                    <h6 style=\"font-family:serif;\">Scheduled: </h6>\n                                                  </div>\n                                                  <div class=\"col-md-2\" *ngFor=\"let employeractions of employeractions\">\n                                                      <h6 style=\"font-family:serif;\">{{employeractions.scheduled}}</h6>\n                                                    </div>\n                                                    <div class=\"col-md-5\">\n                                                        <div class=\"progress\">\n                                                            <div class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                            style=\"min-width: 2em;\" [style.width]=\"(scheduled/100)*100 + '%'\">\n                                                            {{scheduled| number : fractionSize}}%\n                                                            </div>\n                                                        </div></div>\n                                                  </div>\n                                                  <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/eselected']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                                      <div class=\"col-md-5\">\n                                                    <h6 style=\"font-family:serif;\">Selected: </h6>\n                                                  </div>\n                                                  <div class=\"col-md-2\" *ngFor=\"let employeractions of employeractions\">\n                                                      <h6 style=\"color:green\" style=\"font-family:serif;\">{{employeractions.selected}}</h6>\n                                                    </div>\n                                                    <div class=\"col-md-5\">\n                                                        <div class=\"progress\">\n                                                            <div class=\"progress-barg progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                            style=\"min-width: 2em;\" [style.width]=\"(selected/100)*100 + '%'\">\n                                                            {{selected| number : fractionSize}}%\n                                                            </div>\n                                                        </div></div>\n                                                  </div>\n                                                  <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/erejected']\"[queryParams] =\"{'flagSelected':flagSelected,'jobid':jobid,'by_location':by_location,'from_date':from_date,'to_date':to_date,'by_user':by_user}\" >\n                                                      <div class=\"col-md-5\">\n                                                    <h6 style=\"font-family:serif;\">Rejected: </h6>\n                                                  </div>\n                                                  <div class=\"col-md-2\" *ngFor=\"let employeractions of employeractions\">\n                                                      <h6 style=\"font-family:serif;\" style=\"color:red\">{{employeractions.rejected}}</h6>\n                                                    </div>\n                                                    <div class=\"col-md-5\">\n                                                        <div class=\"progress\">\n                                                            <div class=\"progress-barr progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                            style=\"min-width: 2em;\" [style.width]=\"(rejected/100)*100 + '%'\">\n                                                            {{rejected| number : fractionSize}}%\n                                                            </div>\n                                                        </div></div>\n                                                  </div>\n                                                   \n                                                </div>\n                                        </div>\n                                </div>\n                            </mat-card>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n                <div class=\"row\">\n                        <div class=\"col-md-12\" >\n                                <mat-card class=\"jsaction\" style=\"padding-top: 8px\">\n                                        <span style=\"color:#00a3d3;font-family:serif;font-size: 18px;\" >Posted Jobs </span>\n                                        <div class=\"row\">\n                                                <div class=\"col-md-3\">\n                                                        <img class=\"jobseeker\"      \n                                                        src=\"../../assets/images/jobseeker.JPG\">\n                                                </div>\n                                                <div class=\"col-md-9\">\n                                                <div class=\"jsaction1\" style=\"color:black\">\n                                                        <div class=\"row\"onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jtotal']\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                            <div class=\"col-md-5\" >\n                                                                <h6 style=\"font-family:serif;\" >Jobs posted:</h6>\n                                                              </div>\n                                                              <div class=\"col-md-2\" *ngFor=\"let jobs of jobs\">\n                                                                  <h6 style=\"font-family:serif;\" >{{jobs.total_jobs}}</h6>\n                                                                </div> \n                                                                 <div class=\"col-md-5\">\n                                                                        <!-- <div class=\"progress\">\n                                                                            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                                            style=\"min-width: 2em;\" [style.width]=\"100 + '%'\">\n                                                                            100%\n                                                                            </div>\n                                                                        </div> -->\n                                                                    </div>\n                                                                    </div>\n                                \n                                                    <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jactive']\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                        <div class=\"col-md-5\">\n                                                      <h6 style=\"font-family:serif;\" >Active Jobs: </h6>\n                                                    </div>\n                                                    <div class=\"col-md-2\" *ngFor=\"let jobs of jobs\">\n                                                        <h6 style=\"font-family:serif;\"  style=\"color:green\">{{jobs.active_jobs}}</h6>\n                                                      </div>\n                                                      <div class=\"col-md-5\">\n                                                          <div class=\"progress\">\n                                                              <div class=\"progress-barg progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                              style=\"min-width: 2em;\" [style.width]=\"(activejobs/100)*100 + '%'\">\n                                                              {{activejobs| number : fractionSize}}%\n                                                              </div>\n                                                          </div></div>\n                                                    </div>\n                                                    <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jinactive']\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                        <div class=\"col-md-5\">\n                                                      <h6 style=\"font-family:serif;\" >Inactive: </h6>\n                                                    </div>\n                                                    <div class=\"col-md-2\" *ngFor=\"let jobs of jobs\">\n                                                        <h6 style=\"font-family:serif;\"  style=\"color:orange\">{{jobs.inactive_jobs}}</h6>\n                                                      </div>\n                                                      <div class=\"col-md-5\">\n                                                          <div class=\"progress\">\n                                                              <div class=\"progress-baro progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                              style=\"min-width: 2em;\" [style.width]=\"(inactivejobs/100)*100 + '%'\">\n                                                              {{inactivejobs| number : fractionSize}}%\n                                                              </div>\n                                                          </div></div>\n                                                    </div>\n                                                    <div class=\"row\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/jclosed']\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                        <div class=\"col-md-5\">\n                                                      <h6 style=\"font-family:serif;\" >closed: </h6>\n                                                    </div>\n                                                    <div class=\"col-md-2\" *ngFor=\"let jobs of jobs\">\n                                                        <h6 style=\"font-family:serif;\"  style=\"color:red\" >{{jobs.closed_jobs}}</h6>\n                                                      </div>\n                                                      <div class=\"col-md-5\">\n                                                          <div class=\"progress\" >\n                                                              <div class=\"progress-barr progress-bar-success progress-bar-striped\" role=\"progressbar\" [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax =\"100\" \n                                                              style=\"min-width: 2em;\" [style.width]=\"(closedjobs/100)*100 + '%'\">\n                                                              {{closedjobs| number : fractionSize}}%\n                                                              </div>\n                                                          </div></div>\n                                                    </div>\n                                            \n                                                </div>\n                                                  </div>\n                                        </div>\n                                        <hr>\n                                        <div class=\"row\">\n                                                <div class=\"col-md-6\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/curation']\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                   \n                                                     <div class=\"row\" style=\"color:black\">\n                                                   <div class=\"col-md-8\">\n                                                       <h6 style=\"font-family:serif;\">In curation:</h6>\n                                                     </div>\n                                                     <div class=\"col-md-2\" *ngFor=\"let curationapproved of curationapproved\">\n                                                         <h6 style=\"color: orange\">{{curationapproved.in_curation}}</h6>\n                                                       </div></div>\n                                                  \n                                                </div>\n                                                <div class=\"col-md-6\" onmouseover=\"\" style=\"cursor: pointer;\" [routerLink]=\"['/approved' ]\"[queryParams] =\"{'flagSelected':flagSelected,'by_user':by_user,'by_location':by_location,'from_date':from_date,'to_date':to_date}\" >\n                                                  \n                                                       <div class=\"row\" style=\"color:black\">\n                                                           <div class=\"col-md-8\">\n                                                               <h6 style=\"font-family:serif;\">Approved :</h6>\n                                                             </div>\n                                                             <div class=\"col-md-2\" *ngFor=\"let curationapproved of curationapproved\">\n                                                                 <h6 style=\"color: green\">{{curationapproved.approved}}</h6>\n                                                               </div></div>\n                                                    \n                                                 </div>\n                                              </div>\n                                </mat-card>\n                        </div>\n                    </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\"  style=\"margin: 0px\">\n            \n            <div #chartTarget class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"></div>\n            <div #chartTarget1 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\" ></div>\n            <div #chartTarget2 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"></div>\n            <div #chartTarget3 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"></div>\n            </div>   \n                \n        <div class=\"row\" style=\"padding-top:5px\" style=\"margin: 0px\">\n            \n            <div #chartTarget4 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"> </div>\n            <div #chartTarget5 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"></div>\n            <div #chartTarget6 class=\"col-md-3\" style=\" height: 160px; border:1px solid black;\"></div>\n            <!-- <div #chartTarget7 class=\"col-md-3\" style=\" height: 160px; \"></div> -->\n            </div>   \n           \n        </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__("./node_modules/highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(restService, router, activatedRoute) {
        this.restService = restService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.called = false;
        this.showDialog = false;
        this.flag = "overall";
        this.userid = "19";
        this.cmpny_id = "13";
        this.user_type = "1";
        this.xdata = [];
        this.rdata = [];
        this.jxdata = [];
        this.jrdata = [];
        this.axdata = [];
        this.ardata = [];
        this.pxdata = [];
        this.prdata = [];
        this.sxdata = [];
        this.srdata = [];
        this.scxdata = [];
        this.scrdata = [];
        this.srxdata = [];
        this.srrdata = [];
        this.rrxdata = [];
        this.rrrdata = [];
        this.userVal = false;
        this.text = { "Days": "Days", "Hours": "Hours",
            Minutes: "Minutes"
        };
        this.flagSelected = this.flag;
        this.subscription();
        this.jobseekeractions();
        this.employeration();
        this.jobsposted();
        this.curationaprovedfunc();
        this.getusers();
        this.profiless();
        this.resumechart();
        this.jobspostedchart();
        this.appliedprofileschart();
        this.shortlistedprofileschart();
        this.scheduledprofileschart();
        this.rejectedprofileschart();
        this.selectedprofileschart();
        this.profilesviewedchart();
        this.sortForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            'user': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required,]),
            'job': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
            'locations': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
            'fromdate': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
            'todate': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null)
        });
        Object.assign(this, {});
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        if (this.activatedRoute.snapshot.queryParams['flagSelected'] && !this.called) {
            this.called = true;
            this.days = this.flagSelected = this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
            this.onChnge(this.days);
        }
    };
    DashboardComponent.prototype.onSelect = function (event) {
    };
    DashboardComponent.prototype.subscription = function () {
        var _this = this;
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'subscriptionplan?cmpny_id=13').subscribe(function (response) {
            if (response.message) {
                _this.myplan = response.message[0];
                _this.date = _this.myplan[0].subs_expiry_date;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.jobseekeractions = function () {
        var _this = this;
        var jobse;
        jobse = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekeractions', jobse).subscribe(function (response) {
            if (response.status) {
                _this.Jobseekeractions = response.message;
                _this.jv_count = _this.Jobseekeractions[0].count_views;
                _this.jviewed = _this.availableProfilesPercentage * _this.jv_count;
                _this.a = _this.jv_count / 100;
                _this.ja_count = _this.Jobseekeractions[0].applied;
                _this.jviewedapplied = _this.ja_count / _this.a;
                _this.jr_count = _this.Jobseekeractions[0].relevant;
                _this.jrelevant = (_this.jr_count / _this.ja_count) * 100;
                _this.jir_count = _this.Jobseekeractions[0].irrelevant;
                _this.jirrelevant = (_this.jir_count / _this.ja_count) * 100;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.employeration = function () {
        var _this = this;
        var emp;
        emp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employeractions', emp).subscribe(function (response) {
            if (response.status) {
                _this.employeractions = response.message;
                _this.eviewed = _this.employeractions[0].profiles_viewed;
                _this.viewed = _this.availableProfilesPercentage * _this.eviewed;
                _this.eshortlisted = _this.employeractions[0].shortlisted;
                _this.escheduled = _this.employeractions[0].scheduled;
                _this.eselected = _this.employeractions[0].selected;
                _this.erejected = _this.employeractions[0].rejected;
                _this.shortlisted = (_this.eshortlisted / _this.eviewed) * 100;
                _this.scheduled = (_this.escheduled / _this.eshortlisted) * 100;
                _this.selected = (_this.eselected / _this.escheduled) * 100;
                _this.rejected = (_this.erejected / _this.escheduled) * 100;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.jobsposted = function () {
        var _this = this;
        var jobss;
        jobss = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobs', jobss).subscribe(function (response) {
            if (response.status) {
                _this.jobs = response.message;
                _this.etjobs = _this.jobs[0].total_jobs;
                _this.eajobs = _this.jobs[0].active_jobs;
                _this.einajobs = _this.jobs[0].inactive_jobs;
                _this.ecjobs = _this.jobs[0].closed_jobs;
                _this.activejobs = (_this.eajobs / _this.etjobs) * 100;
                _this.inactivejobs = (_this.einajobs / _this.etjobs) * 100;
                _this.closedjobs = (_this.ecjobs / _this.etjobs) * 100;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.curationaprovedfunc = function () {
        var _this = this;
        var curationapproved;
        curationapproved = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationapproved', curationapproved).subscribe(function (response) {
            if (response.status) {
                _this.curationapproved = response.message;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.jobChange = function () {
        var _this = this;
        var location;
        location = {
            jobid: this.jobid
        };
        this.locations = [];
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'getlocations', location).subscribe(function (response) {
            if (response.status) {
                _this.locations = response.message;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.userChange = function () {
        var _this = this;
        var gjob;
        console.log(this.user);
        gjob = {
            by_user: this.user
        };
        this.gjob = [];
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'getjobs', gjob).subscribe(function (response) {
            if (response.status) {
                _this.gjob = response.message;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.getusers = function () {
        var _this = this;
        var users;
        users = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'getusers', users).subscribe(function (response) {
            if (response.status) {
                _this.users = response.message;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.profiless = function () {
        var _this = this;
        var profilesbody;
        profilesbody = {
            userid: this.userid,
            flag: this.flag,
            cmpny_id: this.cmpny_id
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofiles', profilesbody).subscribe(function (response) {
            if (response.status) {
                _this.matchedprofiles = response.message[2][0].matched_profiles;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.resumechart = function () {
        var _this = this;
        var rd;
        rd = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "Resume Downloaded",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'resumedownload', rd).subscribe(function (response) {
            if (response.status) {
                _this.rd = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.xdata.push(xdataa);
                    _this.rdata.push(rdataa);
                }
                var options = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Resume Download',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.xdata
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Downloads'
                        }
                    },
                    series: [{
                            name: 'Downloads',
                            data: _this.rdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget.nativeElement, options);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.jobspostedchart = function () {
        var _this = this;
        var jp;
        jp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsposted', jp).subscribe(function (response) {
            if (response.status) {
                _this.jp = response.message;
                _this.jxdata = [];
                _this.jrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.jxdata.push(xdataa);
                    _this.jrdata.push(rdataa);
                }
                var options1 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Jobs Posted',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.jxdata
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Jobs Posted'
                        }
                    },
                    series: [{
                            name: 'posted',
                            data: _this.jrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget1.nativeElement, options1);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.appliedprofileschart = function () {
        var _this = this;
        var ap;
        ap = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'appliedprofiles', ap).subscribe(function (response) {
            if (response.status) {
                _this.ap = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.axdata.push(xdataa);
                    _this.ardata.push(rdataa);
                }
                var options2 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Applied Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.axdata
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'applied profiles'
                        }
                    },
                    series: [{
                            name: 'applied profiles',
                            data: _this.ardata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget2.nativeElement, options2);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.profilesviewedchart = function () {
        var _this = this;
        var pv;
        pv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "profile viewed",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'profilesviewed', pv).subscribe(function (response) {
            if (response.status) {
                _this.pv = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.pxdata.push(xdataa);
                    _this.prdata.push(rdataa);
                }
                var options3 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Profiles Viewed',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.pxdata
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'profiles viewed'
                        }
                    },
                    series: [{
                            name: 'viewed',
                            data: _this.prdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget3.nativeElement, options3);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.shortlistedprofileschart = function () {
        var _this = this;
        var sp;
        sp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "Profile Shortlisted",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'shortlistedprofiles', sp).subscribe(function (response) {
            if (response.status) {
                _this.sp = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.sxdata.push(xdataa);
                    _this.srdata.push(rdataa);
                }
                var options4 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Shortlisted Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.sxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'shortlisted profiles'
                        }
                    },
                    series: [{
                            name: 'shorlisted',
                            data: _this.srdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget4.nativeElement, options4);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.scheduledprofileschart = function () {
        var _this = this;
        var scp;
        scp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "Profile Scheduled",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'scheduledprofiles', scp).subscribe(function (response) {
            if (response.status) {
                _this.scp = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.scxdata.push(xdataa);
                    _this.scrdata.push(rdataa);
                }
                var options5 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Scheduled Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.scxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Scheduled profiles'
                        }
                    },
                    series: [{
                            name: 'scheduled',
                            data: _this.scrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget5.nativeElement, options5);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.rejectedprofileschart = function () {
        var _this = this;
        var rrp;
        rrp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "Profile Rejected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rejectedprofiles', rrp).subscribe(function (response) {
            if (response.status) {
                _this.rrp = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.rrxdata.push(xdataa);
                    _this.rrrdata.push(rdataa);
                }
                var options7 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.rrxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Rejected Profiles'
                        }
                    },
                    series: [{
                            name: 'Rejected',
                            data: _this.rrrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget7.nativeElement, options7);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.selectedprofileschart = function () {
        var _this = this;
        var srp;
        srp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            chart_type: "Profile Selected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'selectedprofiles', srp).subscribe(function (response) {
            if (response.status) {
                _this.srp = response.message;
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.srxdata.push(xdataa);
                    _this.srrdata.push(rdataa);
                }
                var options6 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Selected/Rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.srxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Selected/Rejected Profiles'
                        }
                    },
                    series: [
                        {
                            name: 'selected',
                            data: _this.srrdata
                        },
                        {
                            name: 'rejected',
                            data: _this.rrrdata
                        }
                    ],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget6.nativeElement, options6);
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.resetAll = function () {
        this.sortForm.reset();
        this.onChnge(this.flag);
    };
    DashboardComponent.prototype.onChnge = function (selectedvalue) {
        var _this = this;
        this.days = selectedvalue;
        var curationapproved;
        this.flagSelected = this.days;
        curationapproved = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationapproved', curationapproved).subscribe(function (response) {
            if (response.status) {
                _this.curationapproved = response.message;
            }
            else {
                console.log(response.message);
            }
        });
        var profilesbody;
        profilesbody = {
            userid: this.userid,
            flag: this.days,
            cmpny_id: this.cmpny_id
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofiles', profilesbody).subscribe(function (response) {
            if (response.status) {
                _this.matchedprofiles = response.message[2][0].matched_profiles;
            }
            else {
                console.log(response.message);
            }
        });
        var rd;
        rd = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Resume Downloaded",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'resumedownload', rd).subscribe(function (response) {
            if (response.status) {
                _this.rd = response.message;
                _this.xdata = [];
                _this.rdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.xdata.push(xdataa);
                    _this.rdata.push(rdataa);
                }
                var options = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Resume Download',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.xdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Downloads'
                        }
                    },
                    series: [{
                            name: 'Downloads',
                            data: _this.rdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget.nativeElement, options);
            }
            else {
                console.log(response.message);
            }
        });
        var jp;
        jp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsposted', jp).subscribe(function (response) {
            if (response.status) {
                _this.jp = response.message;
                _this.jxdata = [];
                _this.jrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.jxdata.push(xdataa);
                    _this.jrdata.push(rdataa);
                }
                var options1 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Jobs Posted',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.jxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Jobs Posted'
                        }
                    },
                    series: [{
                            name: 'posted',
                            data: _this.jrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget1.nativeElement, options1);
            }
            else {
                console.log(response.message);
            }
        });
        var ap;
        ap = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'appliedprofiles', ap).subscribe(function (response) {
            if (response.status) {
                _this.ap = response.message;
                _this.axdata = [];
                _this.ardata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.axdata.push(xdataa);
                    _this.ardata.push(rdataa);
                }
                var options2 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Applied Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.axdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'applied profiles'
                        }
                    },
                    series: [{
                            name: 'applied profiles',
                            data: _this.ardata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget2.nativeElement, options2);
            }
            else {
                console.log(response.message);
            }
        });
        var pv;
        pv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "profile viewed",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'profilesviewed', pv).subscribe(function (response) {
            if (response.status) {
                _this.pv = response.message;
                _this.pxdata = [];
                _this.prdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.pxdata.push(xdataa);
                    _this.prdata.push(rdataa);
                }
                var options3 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Profiles Viewed',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.pxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'profiles viewed'
                        }
                    },
                    series: [{
                            name: 'viewed',
                            data: _this.prdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget3.nativeElement, options3);
            }
            else {
                console.log(response.message);
            }
        });
        var sp;
        sp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Shortlisted",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'shortlistedprofiles', sp).subscribe(function (response) {
            if (response.status) {
                _this.sp = response.message;
                _this.sxdata = [];
                _this.srdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.sxdata.push(xdataa);
                    _this.srdata.push(rdataa);
                }
                var options4 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Shortlisted Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.sxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'shortlisted profiles'
                        }
                    },
                    series: [{
                            name: 'shorlisted',
                            data: _this.srdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget4.nativeElement, options4);
            }
            else {
                console.log(response.message);
            }
        });
        var scp;
        scp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Scheduled",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'scheduledprofiles', scp).subscribe(function (response) {
            if (response.status) {
                _this.scp = response.message;
                _this.scxdata = [];
                _this.scrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.scxdata.push(xdataa);
                    _this.scrdata.push(rdataa);
                }
                var options5 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Scheduled Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.scxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Scheduled profiles'
                        }
                    },
                    series: [{
                            name: 'scheduled',
                            data: _this.scrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget5.nativeElement, options5);
            }
            else {
                console.log(response.message);
            }
        });
        var rrp;
        rrp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Rejected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rejectedprofiles', rrp).subscribe(function (response) {
            if (response.status) {
                _this.rrp = response.message;
                _this.rrxdata = [];
                _this.rrrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.rrxdata.push(xdataa);
                    _this.rrrdata.push(rdataa);
                }
                var options7 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.rrxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Rejected Profiles'
                        }
                    },
                    series: [{
                            name: 'Rejected',
                            data: _this.rrrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget7.nativeElement, options7);
            }
            else {
                console.log(response.message);
            }
        });
        var srp;
        srp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Selected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'selectedprofiles', srp).subscribe(function (response) {
            if (response.status) {
                _this.srp = response.message;
                _this.srxdata = [];
                _this.srrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.srxdata.push(xdataa);
                    _this.srrdata.push(rdataa);
                }
                var options6 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Selected/Rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.srxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Selected/Rejected Profiles'
                        }
                    },
                    series: [{
                            name: 'selected',
                            data: _this.srrdata
                        }, {
                            name: 'rejected',
                            data: _this.rrrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget6.nativeElement, options6);
            }
            else {
                console.log(response.message);
            }
        });
        var jobse;
        jobse = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekeractions', jobse).subscribe(function (response) {
            if (response.status) {
                _this.Jobseekeractions = response.message;
                _this.jv_count = _this.Jobseekeractions[0].count_views;
                _this.jviewed = _this.availableProfilesPercentage * _this.jv_count;
                _this.a = _this.jv_count / 100;
                _this.ja_count = _this.Jobseekeractions[0].applied;
                _this.jviewedapplied = _this.ja_count / _this.a;
                _this.jr_count = _this.Jobseekeractions[0].relevant;
                _this.jrelevant = (_this.jr_count / _this.ja_count) * 100;
                _this.jir_count = _this.Jobseekeractions[0].irrelevant;
                _this.jirrelevant = (_this.jir_count / _this.ja_count) * 100;
            }
            else {
                console.log(response.message);
            }
        });
        var emp;
        emp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employeractions', emp).subscribe(function (response) {
            if (response.status) {
                _this.employeractions = response.message;
                _this.eviewed = _this.employeractions[0].profiles_viewed;
                _this.viewed = _this.availableProfilesPercentage * _this.eviewed;
                _this.eshortlisted = _this.employeractions[0].shortlisted;
                _this.escheduled = _this.employeractions[0].scheduled;
                _this.eselected = _this.employeractions[0].selected;
                _this.erejected = _this.employeractions[0].rejected;
                _this.shortlisted = (_this.eshortlisted / _this.eviewed) * 100;
                _this.scheduled = (_this.escheduled / _this.eshortlisted) * 100;
                _this.selected = (_this.eselected / _this.escheduled) * 100;
                _this.rejected = (_this.erejected / _this.escheduled) * 100;
            }
            else {
                console.log(response.message);
            }
        });
        var jobss;
        jobss = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobs', jobss).subscribe(function (response) {
            if (response.status) {
                _this.jobs = response.message;
                _this.etjobs = _this.jobs[0].total_jobs;
                _this.eajobs = _this.jobs[0].active_jobs;
                _this.einajobs = _this.jobs[0].inactive_jobs;
                _this.ecjobs = _this.jobs[0].closed_jobs;
                _this.activejobs = (_this.eajobs / _this.etjobs) * 100;
                _this.inactivejobs = (_this.einajobs / _this.etjobs) * 100;
                _this.closedjobs = (_this.ecjobs / _this.etjobs) * 100;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.onChange = function (selectedvalue) {
        var _this = this;
        this.days = this.selectedvalue.nativeElement.value;
        var curationapproved;
        this.flagSelected = this.days;
        curationapproved = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationapproved', curationapproved).subscribe(function (response) {
            if (response.status) {
                _this.curationapproved = response.message;
            }
            else {
                console.log(response.message);
            }
        });
        var profilesbody;
        profilesbody = {
            userid: this.userid,
            flag: this.days,
            cmpny_id: this.cmpny_id
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofiles', profilesbody).subscribe(function (response) {
            if (response.status) {
                _this.matchedprofiles = response.message[2][0].matched_profiles;
            }
            else {
            }
        });
        var rd;
        rd = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Resume Downloaded",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'resumedownload', rd).subscribe(function (response) {
            if (response.status) {
                _this.rd = response.message;
                _this.xdata = [];
                _this.rdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.xdata.push(xdataa);
                    _this.rdata.push(rdataa);
                }
                var options = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Resume Download',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.xdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Downloads'
                        }
                    },
                    series: [{
                            name: 'Downloads',
                            data: _this.rdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget.nativeElement, options);
            }
            else {
                console.log(response.message);
            }
        });
        var jp;
        jp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsposted', jp).subscribe(function (response) {
            if (response.status) {
                _this.jp = response.message;
                _this.jxdata = [];
                _this.jrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.jxdata.push(xdataa);
                    _this.jrdata.push(rdataa);
                }
                var options1 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Jobs Posted',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.jxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Jobs Posted'
                        }
                    },
                    series: [{
                            name: 'posted',
                            data: _this.jrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget1.nativeElement, options1);
            }
            else {
                console.log(response.message);
            }
        });
        var ap;
        ap = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'appliedprofiles', ap).subscribe(function (response) {
            if (response.status) {
                _this.ap = response.message;
                _this.axdata = [];
                _this.ardata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.axdata.push(xdataa);
                    _this.ardata.push(rdataa);
                }
                var options2 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Applied Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.axdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'applied profiles'
                        }
                    },
                    series: [{
                            name: 'applied profiles',
                            data: _this.ardata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget2.nativeElement, options2);
            }
            else {
                console.log(response.message);
            }
        });
        var pv;
        pv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "profile viewed",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'profilesviewed', pv).subscribe(function (response) {
            if (response.status) {
                _this.pv = response.message;
                _this.pxdata = [];
                _this.prdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.pxdata.push(xdataa);
                    _this.prdata.push(rdataa);
                }
                var options3 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Profiles Viewed',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.pxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'profiles viewed'
                        }
                    },
                    series: [{
                            name: 'viewed',
                            data: _this.prdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget3.nativeElement, options3);
            }
            else {
                console.log(response.message);
            }
        });
        var sp;
        sp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Shortlisted",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'shortlistedprofiles', sp).subscribe(function (response) {
            if (response.status) {
                _this.sp = response.message;
                _this.sxdata = [];
                _this.srdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.sxdata.push(xdataa);
                    _this.srdata.push(rdataa);
                }
                var options4 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Shortlisted Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.sxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'shortlisted profiles'
                        }
                    },
                    series: [{
                            name: 'shorlisted',
                            data: _this.srdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget4.nativeElement, options4);
            }
            else {
                console.log(response.message);
            }
        });
        var scp;
        scp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Scheduled",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'scheduledprofiles', scp).subscribe(function (response) {
            if (response.status) {
                _this.scp = response.message;
                _this.scxdata = [];
                _this.scrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.scxdata.push(xdataa);
                    _this.scrdata.push(rdataa);
                }
                var options5 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Scheduled Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.scxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Scheduled profiles'
                        }
                    },
                    series: [{
                            name: 'scheduled',
                            data: _this.scrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget5.nativeElement, options5);
            }
            else {
                console.log(response.message);
            }
        });
        var rrp;
        rrp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Rejected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rejectedprofiles', rrp).subscribe(function (response) {
            if (response.status) {
                _this.rrp = response.message;
                _this.rrxdata = [];
                _this.rrrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.rrxdata.push(xdataa);
                    _this.rrrdata.push(rdataa);
                }
                var options7 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'line'
                    },
                    title: {
                        text: 'Rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.rrxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Rejected Profiles'
                        }
                    },
                    series: [{
                            name: 'Rejected',
                            data: _this.rrrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget7.nativeElement, options7);
            }
            else {
                console.log(response.message);
            }
        });
        var srp;
        srp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            chart_type: "Profile Selected",
            org_subs_id: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'selectedprofiles', srp).subscribe(function (response) {
            if (response.status) {
                _this.srp = response.message;
                _this.srxdata = [];
                _this.srrdata = [];
                for (var i = 0; i < response.message.length; i++) {
                    var xdataa = response.message[i].xaxis;
                    var rdataa = response.message[i].data_value;
                    _this.srxdata.push(xdataa);
                    _this.srrdata.push(rdataa);
                }
                var options6 = {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [
                                [0, 'white']
                            ]
                        },
                        type: 'column'
                    },
                    title: {
                        text: 'Selected/Rejected Profiles',
                        style: {
                            color: '#00a3d3',
                            fontFamily: 'serif'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: _this.srxdata
                    },
                    yAxis: { min: 0,
                        title: {
                            text: 'Selected/Rejected Profiles'
                        }
                    },
                    series: [{
                            name: 'selected',
                            data: _this.srrdata
                        }, {
                            name: 'rejected',
                            data: _this.rrrdata
                        }],
                    legend: {
                        itemStyle: {
                            color: 'black'
                        }
                    }
                };
                _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget6.nativeElement, options6);
            }
            else {
                console.log(response.message);
            }
        });
        var jobse;
        jobse = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekeractions', jobse).subscribe(function (response) {
            if (response.status) {
                _this.Jobseekeractions = response.message;
                _this.jv_count = _this.Jobseekeractions[0].count_views;
                _this.jviewed = _this.availableProfilesPercentage * _this.jv_count;
                _this.a = _this.jv_count / 100;
                _this.ja_count = _this.Jobseekeractions[0].applied;
                _this.jviewedapplied = _this.ja_count / _this.a;
                _this.jr_count = _this.Jobseekeractions[0].relevant;
                _this.jrelevant = (_this.jr_count / _this.ja_count) * 100;
                _this.jir_count = _this.Jobseekeractions[0].irrelevant;
                _this.jirrelevant = (_this.jir_count / _this.ja_count) * 100;
            }
            else {
                console.log(response.message);
            }
        });
        var emp;
        emp = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employeractions', emp).subscribe(function (response) {
            if (response.status) {
                _this.employeractions = response.message;
                _this.eviewed = _this.employeractions[0].profiles_viewed;
                _this.viewed = _this.availableProfilesPercentage * _this.eviewed;
                _this.eshortlisted = _this.employeractions[0].shortlisted;
                _this.escheduled = _this.employeractions[0].scheduled;
                _this.eselected = _this.employeractions[0].selected;
                _this.erejected = _this.employeractions[0].rejected;
                _this.shortlisted = (_this.eshortlisted / _this.eviewed) * 100;
                _this.scheduled = (_this.escheduled / _this.eshortlisted) * 100;
                _this.selected = (_this.eselected / _this.escheduled) * 100;
                _this.rejected = (_this.erejected / _this.escheduled) * 100;
            }
            else {
                console.log(response.message);
            }
        });
        var jobss;
        jobss = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.days,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobs', jobss).subscribe(function (response) {
            if (response.status) {
                _this.jobs = response.message;
                _this.etjobs = _this.jobs[0].total_jobs;
                _this.eajobs = _this.jobs[0].active_jobs;
                _this.einajobs = _this.jobs[0].inactive_jobs;
                _this.ecjobs = _this.jobs[0].closed_jobs;
                _this.activejobs = (_this.eajobs / _this.etjobs) * 100;
                _this.inactivejobs = (_this.einajobs / _this.etjobs) * 100;
                _this.closedjobs = (_this.ecjobs / _this.etjobs) * 100;
            }
            else {
                console.log(response.message);
            }
        });
    };
    DashboardComponent.prototype.getusername = function () {
        return this.sortForm.get('user').hasError('required') ? "User is required" : '';
    };
    DashboardComponent.prototype.onSort = function () {
        var _this = this;
        if (this.sortForm.get('fromdate').value == null && this.sortForm.get('todate').value == null && this.sortForm.get('user').value == null && this.sortForm.get('job').value == null && this.sortForm.get('locations').value == null) {
            this.onChnge(this.flag);
            this.showDialog = !this.showDialog;
        }
        else {
            var jobids;
            var locids;
            console.log(this.sortForm.get('job').value);
            if (this.sortForm.get('job').value == undefined || this.sortForm.get('job').value == null) {
                jobids = "";
            }
            else {
                jobids = this.sortForm.get('job').value;
            }
            if (this.sortForm.get('locations').value == undefined || this.sortForm.get('locations').value == null) {
                locids = "";
            }
            else {
                locids = this.sortForm.get('locations').value;
            }
            console.log(jobids, locids);
            var datecurr = new Date();
            var datePipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]("en-US");
            var fromdate = datePipe.transform(this.sortForm.get('fromdate').value, 'yyyy-MM-dd');
            var todate = datePipe.transform(this.sortForm.get('todate').value, 'yyyy-MM-dd');
            var matchedprofilessort = void 0;
            matchedprofilessort = {
                userid: this.sortForm.get('user').value,
                from_date: fromdate,
                to_date: todate,
                jobid: jobids,
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofilesfilter', matchedprofilessort).subscribe(function (response) {
                if (response.status) {
                    _this.matchedprofiles = response.message[2][0].matched_profiles;
                }
                else {
                    console.log(response.message);
                }
            });
            var rd = void 0;
            rd = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "Resume Downloaded"
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsresume', rd).subscribe(function (response) {
                if (response.status) {
                    _this.rd = response.message;
                    _this.xdata = [];
                    _this.rdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.xdata.push(xdataa);
                        _this.rdata.push(rdataa);
                    }
                    var options = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'column'
                        },
                        title: {
                            text: 'Resume Download',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.xdata
                        },
                        yAxis: { min: 0,
                            title: {
                                text: 'Downloads'
                            }
                        },
                        series: [{
                                name: 'Downloads',
                                data: _this.rdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget.nativeElement, options);
                }
                else {
                    console.log(response.message);
                }
            });
            var jp = void 0;
            jp = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsjobposted', jp).subscribe(function (response) {
                if (response.status) {
                    _this.jp = response.message;
                    _this.jxdata = [];
                    _this.jrdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.jxdata.push(xdataa);
                        _this.jrdata.push(rdataa);
                    }
                    var options1 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Jobs Posted',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.jxdata
                        },
                        yAxis: { min: 0,
                            title: {
                                text: 'Jobs Posted'
                            }
                        },
                        series: [{
                                name: 'posted',
                                data: _this.jrdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget1.nativeElement, options1);
                }
                else {
                    console.log(response.message);
                }
            });
            var ap = void 0;
            ap = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsapplied', ap).subscribe(function (response) {
                if (response.status) {
                    _this.ap = response.message;
                    _this.axdata = [];
                    _this.ardata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.axdata.push(xdataa);
                        _this.ardata.push(rdataa);
                    }
                    var options2 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Applied Profiles',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.axdata
                        },
                        yAxis: { min: 0,
                            title: {
                                text: 'applied profiles'
                            }
                        },
                        series: [{
                                name: 'applied profiles',
                                data: _this.ardata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget2.nativeElement, options2);
                }
                else {
                    console.log(response.message);
                }
            });
            var pv = void 0;
            pv = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "profile viewed"
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'chartsprofileviewed', pv).subscribe(function (response) {
                if (response.status) {
                    _this.pv = response.message;
                    _this.pxdata = [];
                    _this.prdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.pxdata.push(xdataa);
                        _this.prdata.push(rdataa);
                    }
                    var options3 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Profiles Viewed',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.pxdata
                        },
                        yAxis: { min: 0,
                            title: {
                                text: 'profiles viewed'
                            }
                        },
                        series: [{
                                name: 'viewed',
                                data: _this.prdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget3.nativeElement, options3);
                }
                else {
                    console.log(response.message);
                }
            });
            var sp = void 0;
            sp = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "Profile Shortlisted"
            };
            console.log(sp);
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsshortlisted', sp).subscribe(function (response) {
                if (response.status) {
                    _this.sp = response.message;
                    _this.sxdata = [];
                    _this.srdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.sxdata.push(xdataa);
                        _this.srdata.push(rdataa);
                    }
                    var options4 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Shortlisted Profiles',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.sxdata
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'shortlisted profiles'
                            }
                        },
                        series: [{
                                name: 'shorlisted',
                                data: _this.srdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget4.nativeElement, options4);
                }
                else {
                    console.log(response.message);
                }
            });
            var scp = void 0;
            scp = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "Profile Scheduled"
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsscheduled', scp).subscribe(function (response) {
                if (response.status) {
                    _this.scp = response.message;
                    _this.scxdata = [];
                    _this.scrdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.scxdata.push(xdataa);
                        _this.scrdata.push(rdataa);
                    }
                    var options5 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Scheduled Profiles',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.scxdata
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Scheduled profiles'
                            }
                        },
                        series: [{
                                name: 'scheduled',
                                data: _this.scrdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget5.nativeElement, options5);
                }
                else {
                    console.log(response.message);
                }
            });
            var rrp = void 0;
            rrp = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "Profile Rejected"
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsrejected', rrp).subscribe(function (response) {
                if (response.status) {
                    _this.rrp = response.message;
                    _this.rrxdata = [];
                    _this.rrrdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.rrxdata.push(xdataa);
                        _this.rrrdata.push(rdataa);
                    }
                    var options7 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'line'
                        },
                        title: {
                            text: 'Rejected Profiles',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.rrxdata
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Rejected Profiles'
                            }
                        },
                        series: [{
                                name: 'Rejected',
                                data: _this.rrrdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget7.nativeElement, options7);
                }
                else {
                    console.log(response.message);
                }
            });
            var srp = void 0;
            srp = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                by_job: jobids,
                from_date: fromdate,
                to_date: todate,
                chart_type: "Profile Selected"
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'bottomchartsselected', srp).subscribe(function (response) {
                if (response.status) {
                    _this.srp = response.message;
                    _this.srxdata = [];
                    _this.srrdata = [];
                    for (var i = 0; i < response.message.length; i++) {
                        var xdataa = response.message[i].xaxis;
                        var rdataa = response.message[i].data_value;
                        _this.srxdata.push(xdataa);
                        _this.srrdata.push(rdataa);
                    }
                    var options6 = {
                        chart: {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                                stops: [
                                    [0, 'white']
                                ]
                            },
                            type: 'column'
                        },
                        title: {
                            text: 'Selected/Rejected Profiles',
                            style: {
                                color: '#00a3d3',
                                fontFamily: 'serif'
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        xAxis: {
                            categories: _this.srxdata
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Selected/Rejected Profiles'
                            }
                        },
                        series: [{
                                name: 'selected',
                                data: _this.srrdata
                            }, {
                                name: 'rejected',
                                data: _this.rrrdata
                            }],
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        }
                    };
                    _this.chart = Object(__WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"])(_this.chartTarget6.nativeElement, options6);
                }
                else {
                    console.log(response.message);
                }
            });
            this.jobid = jobids;
            this.by_location = locids;
            this.from_date = fromdate;
            this.to_date = todate;
            this.by_user = this.sortForm.get('user').value;
            this.showDialog = !this.showDialog;
            var body = void 0;
            body = {
                by_user: this.sortForm.get('user').value,
                jobid: jobids,
                by_location: locids,
                from_date: fromdate,
                to_date: todate
            };
            console.log(body);
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'empsort', body).subscribe(function (response) {
                if (response.status) {
                    console.log(response.message);
                    _this.employeractions = response.message;
                    _this.eviewed = _this.employeractions[0].profiles_viewed;
                    _this.viewed = _this.availableProfilesPercentage * _this.eviewed;
                    _this.eshortlisted = _this.employeractions[0].shortlisted;
                    _this.escheduled = _this.employeractions[0].scheduled;
                    _this.eselected = _this.employeractions[0].selected;
                    _this.erejected = _this.employeractions[0].rejected;
                    _this.shortlisted = (_this.eshortlisted / _this.eviewed) * 100;
                    _this.scheduled = (_this.escheduled / _this.eshortlisted) * 100;
                    _this.selected = (_this.eselected / _this.escheduled) * 100;
                    _this.rejected = (_this.erejected / _this.escheduled) * 100;
                }
                else {
                    console.log(response.message);
                }
            });
            var joby = void 0;
            joby = {
                by_user: this.sortForm.get('user').value,
                by_location: locids,
                from_date: fromdate,
                to_date: todate
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobssort', joby).subscribe(function (response) {
                if (response.status) {
                    _this.jobs = response.message;
                    _this.etjobs = _this.jobs[0].total_jobs;
                    _this.eajobs = _this.jobs[0].active_jobs;
                    _this.einajobs = _this.jobs[0].inactive_jobs;
                    _this.ecjobs = _this.jobs[0].closed_jobs;
                    _this.activejobs = (_this.eajobs / _this.etjobs) * 100;
                    _this.inactivejobs = (_this.einajobs / _this.etjobs) * 100;
                    _this.closedjobs = (_this.ecjobs / _this.etjobs) * 100;
                }
                else {
                    console.log(response.message);
                }
            });
            var jobseekersort = void 0;
            jobseekersort = {
                by_user: this.sortForm.get('user').value,
                jobid: jobids,
                by_location: locids,
                from_date: fromdate,
                to_date: todate
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekersort', jobseekersort).subscribe(function (response) {
                if (response.status) {
                    _this.Jobseekeractions = response.message;
                    _this.jv_count = _this.Jobseekeractions[0].count_views;
                    _this.jviewed = _this.availableProfilesPercentage * _this.jv_count;
                    _this.a = _this.jv_count / 100;
                    _this.ja_count = _this.Jobseekeractions[0].applied;
                    _this.jviewedapplied = _this.ja_count / _this.a;
                    _this.jr_count = _this.Jobseekeractions[0].relevant;
                    _this.jrelevant = (_this.jr_count / _this.ja_count) * 100;
                    _this.jir_count = _this.Jobseekeractions[0].irrelevant;
                    _this.jirrelevant = (_this.jir_count / _this.ja_count) * 100;
                }
                else {
                    console.log(response.message);
                }
            });
            var pro = void 0;
            pro = {
                by_user: this.sortForm.get('user').value,
                from_date: fromdate,
                to_date: todate
            };
            var cur = void 0;
            cur = {
                by_user: this.sortForm.get('user').value,
                from_date: fromdate,
                to_date: todate
            };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationsort', pro).subscribe(function (response) {
                if (response.status) {
                    _this.curationapproved = response.message;
                }
                else {
                    console.log(response.message);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget5'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget6'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('chartTarget7'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "chartTarget7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('selectedvalue'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "selectedvalue", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employerrejected/employerrejected.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/employerrejected/employerrejected.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/employerrejected/employerrejected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerrejectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployerrejectedComponent = /** @class */ (function () {
    function EmployerrejectedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.ProfileRejected = "Profile Rejected";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    EmployerrejectedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    EmployerrejectedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.ProfileRejected,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    EmployerrejectedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.ProfileRejected,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employersls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], EmployerrejectedComponent.prototype, "dtElement", void 0);
    EmployerrejectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employerrejected',
            template: __webpack_require__("./src/app/dashboard/employerrejected/employerrejected.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/employerrejected/employerrejected.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EmployerrejectedComponent);
    return EmployerrejectedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employerscheduled/employerscheduled.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/employerscheduled/employerscheduled.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/employerscheduled/employerscheduled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerscheduledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployerscheduledComponent = /** @class */ (function () {
    function EmployerscheduledComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.ProfileScheduled = "Profile Scheduled";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    EmployerscheduledComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    EmployerscheduledComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.ProfileScheduled,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    EmployerscheduledComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.ProfileScheduled,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employersls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], EmployerscheduledComponent.prototype, "dtElement", void 0);
    EmployerscheduledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employerscheduled',
            template: __webpack_require__("./src/app/dashboard/employerscheduled/employerscheduled.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/employerscheduled/employerscheduled.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EmployerscheduledComponent);
    return EmployerscheduledComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employerselected/employerselected.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/employerselected/employerselected.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/employerselected/employerselected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerselectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployerselectedComponent = /** @class */ (function () {
    function EmployerselectedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.ProfileSelected = "Profile Selected";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    EmployerselectedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    EmployerselectedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.ProfileSelected,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    EmployerselectedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.ProfileSelected,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employersls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], EmployerselectedComponent.prototype, "dtElement", void 0);
    EmployerselectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employerselected',
            template: __webpack_require__("./src/app/dashboard/employerselected/employerselected.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/employerselected/employerselected.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EmployerselectedComponent);
    return EmployerselectedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employershortlisted/employershortlisted.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/employershortlisted/employershortlisted.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/employershortlisted/employershortlisted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployershortlistedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployershortlistedComponent = /** @class */ (function () {
    function EmployershortlistedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.profileShortlisted = "profile Shortlisted";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    EmployershortlistedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    EmployershortlistedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.profileShortlisted,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    EmployershortlistedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.profileShortlisted,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employersls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], EmployershortlistedComponent.prototype, "dtElement", void 0);
    EmployershortlistedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employershortlisted',
            template: __webpack_require__("./src/app/dashboard/employershortlisted/employershortlisted.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/employershortlisted/employershortlisted.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EmployershortlistedComponent);
    return EmployershortlistedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/employerviewed/employerviewed.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/employerviewed/employerviewed.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/employerviewed/employerviewed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerviewedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployerviewedComponent = /** @class */ (function () {
    function EmployerviewedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.isSort = false;
        this.profileviewed = "profile viewed";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    EmployerviewedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    EmployerviewedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.profileviewed,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    EmployerviewedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.profileviewed,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'employersls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], EmployerviewedComponent.prototype, "dtElement", void 0);
    EmployerviewedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employerviewed',
            template: __webpack_require__("./src/app/dashboard/employerviewed/employerviewed.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/employerviewed/employerviewed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], EmployerviewedComponent);
    return EmployerviewedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/incuration/incuration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/incuration/incuration.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">position_name</th>\n        <th style=\"color:black\">location</th>\n        <th style=\"color:black\">min_exp</th>\n        <th style=\"color:black\">max_exp</th>\n        <th style=\"color:black\">min_sal</th>\n        <th style=\"color:black\">max_sal</th>\n        <th style=\"color:black\">Skill_Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.position_name}}</td>\n        <td>{{jvs.location}}</td>\n        <td>{{jvs.min_exp}}</td>\n        <td>{{jvs.max_exp}}</td>\n        <td>{{jvs.min_sal}}</td>\n        <td>{{jvs.max_sal}}</td>\n        <td>{{jvs.Skill_Name}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/incuration/incuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IncurationComponent = /** @class */ (function () {
    function IncurationComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.SA = "SA";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    IncurationComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_user != null || this.by_location != null || this.from_date != null || this.to_date != null) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    IncurationComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            curation_status_id: this.SA,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curation', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    IncurationComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            curation_status_id: this.SA,
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'curationsortsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], IncurationComponent.prototype, "dtElement", void 0);
    IncurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-incuration',
            template: __webpack_require__("./src/app/dashboard/incuration/incuration.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/incuration/incuration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], IncurationComponent);
    return IncurationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobsactive/jobsactive.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobsactive/jobsactive.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">position_name</th>\n        <th style=\"color:black\">location</th>\n        <th style=\"color:black\">min_exp</th>\n        <th style=\"color:black\">max_exp</th>\n        <th style=\"color:black\">min_sal</th>\n        <th style=\"color:black\">max_sal</th>\n        <th style=\"color:black\">Skill_Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.position_name}}</td>\n        <td>{{jvs.location}}</td>\n        <td>{{jvs.min_exp}}</td>\n        <td>{{jvs.max_exp}}</td>\n        <td>{{jvs.min_sal}}</td>\n        <td>{{jvs.max_sal}}</td>\n        <td>{{jvs.Skill_Name}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobsactive/jobsactive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsactiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobsactiveComponent = /** @class */ (function () {
    function JobsactiveComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.active = "1";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobsactiveComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobsactiveComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            job_status_id: this.active,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsactive', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobsactiveComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            job_status_id: this.active,
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobssls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobsactiveComponent.prototype, "dtElement", void 0);
    JobsactiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobsactive',
            template: __webpack_require__("./src/app/dashboard/jobsactive/jobsactive.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobsactive/jobsactive.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobsactiveComponent);
    return JobsactiveComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobsclosed/jobsclosed.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobsclosed/jobsclosed.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">position_name</th>\n        <th style=\"color:black\">location</th>\n        <th style=\"color:black\">min_exp</th>\n        <th style=\"color:black\">max_exp</th>\n        <th style=\"color:black\">min_sal</th>\n        <th style=\"color:black\">max_sal</th>\n        <th style=\"color:black\">Skill_Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.position_name}}</td>\n        <td>{{jvs.location}}</td>\n        <td>{{jvs.min_exp}}</td>\n        <td>{{jvs.max_exp}}</td>\n        <td>{{jvs.min_sal}}</td>\n        <td>{{jvs.max_sal}}</td>\n        <td>{{jvs.Skill_Name}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobsclosed/jobsclosed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsclosedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobsclosedComponent = /** @class */ (function () {
    function JobsclosedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.closed = "2";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobsclosedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobsclosedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            job_status_id: this.closed,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsactive', jv).subscribe(function (response) {
            if (response.status) {
                //console.log(response.message,this.dtOptions,this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                //console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobsclosedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            job_status_id: this.closed,
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobssls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobsclosedComponent.prototype, "dtElement", void 0);
    JobsclosedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobsclosed',
            template: __webpack_require__("./src/app/dashboard/jobsclosed/jobsclosed.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobsclosed/jobsclosed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobsclosedComponent);
    return JobsclosedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobseekerappliedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobseekerappliedComponent = /** @class */ (function () {
    function JobseekerappliedComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.Applied = "Applied";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobseekerappliedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobseekerappliedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.Applied,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobseekerappliedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.Applied,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewedsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobseekerappliedComponent.prototype, "dtElement", void 0);
    JobseekerappliedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobseekerapplied',
            template: __webpack_require__("./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobseekerapplied/jobseekerapplied.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobseekerappliedComponent);
    return JobseekerappliedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobseekerirrelevantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobseekerirrelevantComponent = /** @class */ (function () {
    function JobseekerirrelevantComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.no = "no";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobseekerirrelevantComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobseekerirrelevantComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.no,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobseekerirrelevantComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.no,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewedsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobseekerirrelevantComponent.prototype, "dtElement", void 0);
    JobseekerirrelevantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobseekerirrelevant',
            template: __webpack_require__("./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobseekerirrelevant/jobseekerirrelevant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobseekerirrelevantComponent);
    return JobseekerirrelevantComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobseekerrelevantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobseekerrelevantComponent = /** @class */ (function () {
    function JobseekerrelevantComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.yes = "yes";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobseekerrelevantComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobseekerrelevantComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.yes,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobseekerrelevantComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.yes,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewedsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobseekerrelevantComponent.prototype, "dtElement", void 0);
    JobseekerrelevantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobseekerrelevant',
            template: __webpack_require__("./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobseekerrelevant/jobseekerrelevant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobseekerrelevantComponent);
    return JobseekerrelevantComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobsinactive/jobsinactive.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobsinactive/jobsinactive.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n<table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">position_name</th>\n        <th style=\"color:black\">location</th>\n        <th style=\"color:black\">min_exp</th>\n        <th style=\"color:black\">max_exp</th>\n        <th style=\"color:black\">min_sal</th>\n        <th style=\"color:black\">max_sal</th>\n        <th style=\"color:black\">Skill_Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.position_name}}</td>\n        <td>{{jvs.location}}</td>\n        <td>{{jvs.min_exp}}</td>\n        <td>{{jvs.max_exp}}</td>\n        <td>{{jvs.min_sal}}</td>\n        <td>{{jvs.max_sal}}</td>\n        <td>{{jvs.Skill_Name}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobsinactive/jobsinactive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsinactiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobsinactiveComponent = /** @class */ (function () {
    function JobsinactiveComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.inactive = "0";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobsinactiveComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobsinactiveComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            job_status_id: this.inactive,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobsactive', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobsinactiveComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            job_status_id: this.inactive,
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobssls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobsinactiveComponent.prototype, "dtElement", void 0);
    JobsinactiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobsinactive',
            template: __webpack_require__("./src/app/dashboard/jobsinactive/jobsinactive.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobsinactive/jobsinactive.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobsinactiveComponent);
    return JobsinactiveComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobstotal/jobstotal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/jobstotal/jobstotal.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr >\n        <th style=\"color:black\">position_name</th>\n        <th style=\"color:black\">location</th>\n        <th style=\"color:black\">min_exp</th>\n        <th style=\"color:black\">max_exp</th>\n        <th style=\"color:black\">min_sal</th>\n        <th style=\"color:black\">max_sal</th>\n        <th style=\"color:black\">Skill_Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n    \n        <td>{{jvs.position_name}}</td>\n        <td>{{jvs.location}}</td>\n        <td>{{jvs.min_exp}}</td>\n        <td>{{jvs.max_exp}}</td>\n        <td>{{jvs.min_sal}}</td>\n        <td>{{jvs.max_sal}}</td>\n        <td>{{jvs.Skill_Name}}</td>\n      </tr>\n      \n    </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/dashboard/jobstotal/jobstotal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobstotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobstotalComponent = /** @class */ (function () {
    function JobstotalComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobstotalComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobstotalComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'totaljobs', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobstotalComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date']
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'totaljobssls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobstotalComponent.prototype, "dtElement", void 0);
    JobstotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobstotal',
            template: __webpack_require__("./src/app/dashboard/jobstotal/jobstotal.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobstotal/jobstotal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobstotalComponent);
    return JobstotalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/jobsviewed/jobsviewed.component.css":
/***/ (function(module, exports) {

module.exports = ".dataTables_filter {\r\n  float: none;\r\n  text-align: center;\r\n}\r\nbody{\r\n  background: white;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/jobsviewed/jobsviewed.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n<table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" >\n    <thead>\n      <tr >\n        <th style=\"color:black\">Name</th>\n        <th style=\"color:black\">Position</th>\n        <th style=\"color:black\">Current company</th>\n        <th style=\"color:black\">Notice period</th>\n        <th style=\"color:black\">Job name</th>\n        <th style=\"color:black\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let jvs of jvs\">\n  \n        <td>{{jvs.name}}</td>\n        <td>{{jvs.position}}</td>\n        <td>{{jvs.current_company}}</td>\n        <td>{{jvs.Notice_period}}</td>\n        <td>{{jvs.job_name}}</td>\n        <td>{{jvs.date}}</td>\n      </tr>\n      \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/dashboard/jobsviewed/jobsviewed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsviewedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobsviewedComponent = /** @class */ (function () {
    function JobsviewedComponent(_location, router, restService, activatedRoute) {
        this._location = _location;
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.user_type = "1";
        this.viewed = "viewed";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    JobsviewedComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    JobsviewedComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            user_type: this.user_type,
            flag: this.flag,
            action_type: this.viewed,
            org_subs_id: 1
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewed', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    JobsviewedComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            action_type: this.viewed,
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            by_location: this.activatedRoute.snapshot.queryParams['by_location'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'jobseekerviewedsls', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message;
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], JobsviewedComponent.prototype, "dtElement", void 0);
    JobsviewedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobsviewed',
            template: __webpack_require__("./src/app/dashboard/jobsviewed/jobsviewed.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/jobsviewed/jobsviewed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], JobsviewedComponent);
    return JobsviewedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/matchedprofiles/matchedprofiles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/matchedprofiles/matchedprofiles.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" [routerLink]=\"['/']\" [queryParams] =\"queryPrms\">  <mat-icon aria-label=\"Example icon-button with a icon\">keyboard_arrow_left\n  </mat-icon>back</button>\n  <table border=\"2\" class=\"row-border hover\" datatable  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n  <thead>\n    <tr >\n        \"first_name\": \"Punam \",\n        \"last_name\": \"Asawa \",\n        \"designation\": \"Associate Software Engineer\",\n        \"company_name\": \"Careator Tech \",\n        \"notice_period\": \"45 Days\",\n        \"exp_in_years\": 4,\n        \"exp_in_mon\": 5,\n        \"cur_sal_lac\": 10,\n        \"cur_sal_thou\": 0,\n        \"pref_loc\": \"Hyderabad\",\n        \"expc_max_sal\": 16,\n        \"expc_min_sal\": 8\n      <th style=\"color:black\">Full name</th>\n      <th style=\"color:black\">Designation</th>\n      <th style=\"color:black\">Current company</th>\n      <th style=\"color:black\">Notice period</th>\n      <th style=\"color:black\">years of Exp</th>\n      <th style=\"color:black\">Current sal</th>\n      <th style=\"color:black\">Expected sal</th>\n      <th style=\"color:black\">Preferred Location</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jvs of jvs\">\n\n      <td>{{jvs.first_name}} {{jvs.last_name}}</td>\n      <td>{{jvs.designation}}</td>\n      <td>{{jvs.company_name}}</td>\n      <td>{{jvs.notice_period}}</td>\n      <td>{{jvs.exp_in_years}}years {{jvs.exp_in_mon}}months</td>\n      <td>{{jvs.cur_sal_lac}}lakhs {{jvs.cur_sal_thou}}thousand</td>\n      <td>{{jvs.expc_min_sal}} to {{jvs.expc_max_sal}} lakhs</td>\n      <td>{{jvs.pref_loc}}</td>\n    </tr>\n    \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/dashboard/matchedprofiles/matchedprofiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchedprofilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatchedprofilesComponent = /** @class */ (function () {
    function MatchedprofilesComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.cmpny_id = "13";
        this.userid = "19";
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    MatchedprofilesComponent.prototype.ngOnInit = function () {
        this.flag = this.activatedRoute.snapshot.queryParams['flagSelected'];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.jobid = this.activatedRoute.snapshot.queryParams['jobid'];
        this.by_location = this.activatedRoute.snapshot.queryParams['by_location'];
        this.from_date = this.activatedRoute.snapshot.queryParams['from_date'];
        this.to_date = this.activatedRoute.snapshot.queryParams['to_date'];
        this.by_user = this.activatedRoute.snapshot.queryParams['by_user'];
        this.queryPrms = { 'flagSelected': this.flag, 'jobid': this.jobid, 'by_location': this.by_location, 'from_date': this.from_date, 'to_date': this.to_date, 'by_user': this.by_user };
        if (this.jobid != null || this.by_location != null || this.from_date != null || this.to_date != null || this.by_user) {
            this.afterSort();
        }
        else {
            this.beforeSort();
        }
    };
    MatchedprofilesComponent.prototype.beforeSort = function () {
        var _this = this;
        var jv;
        jv = {
            cmpny_id: this.cmpny_id,
            userid: this.userid,
            flag: this.flag,
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofiles', jv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message[0];
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    MatchedprofilesComponent.prototype.afterSort = function () {
        var _this = this;
        var sv;
        sv = {
            jobid: this.activatedRoute.snapshot.queryParams['jobid'],
            from_date: this.activatedRoute.snapshot.queryParams['from_date'],
            to_date: this.activatedRoute.snapshot.queryParams['to_date'],
            by_user: this.activatedRoute.snapshot.queryParams['by_user'],
        };
        console.log(sv);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'matchedprofilesfilter', sv).subscribe(function (response) {
            if (response.status) {
                console.log(response.message, _this.dtOptions, _this.dtTrigger);
                _this.jvs = response.message[0];
                _this.dtTrigger.next();
            }
            else {
                console.log(response.message);
                _this.dtTrigger.next();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], MatchedprofilesComponent.prototype, "dtElement", void 0);
    MatchedprofilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-matchedprofiles',
            template: __webpack_require__("./src/app/dashboard/matchedprofiles/matchedprofiles.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/matchedprofiles/matchedprofiles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], MatchedprofilesComponent);
    return MatchedprofilesComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 520px;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n            box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  }"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n  <ng-content></ng-content>\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/exporttoexcel.component/exporttoexcel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExporttoexcelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//declare var XLSX : any;
//import 'script-loader!../../node_modules/xlsx/dist/xlsx.full.min.js';


var ExporttoexcelComponent = /** @class */ (function () {
    function ExporttoexcelComponent(el) {
        this.sheetName = "Test Sheet";
        this.workbook = {
            Sheets: {},
            SheetNames: [],
            Props: {}
        };
    }
    ExporttoexcelComponent.prototype.transformData = function (data) {
        var dataNew = [];
        var keys_arr = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](data, function (json) {
            var arr = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](json, function (value, index) {
                if (typeof value !== "object") {
                    keys_arr.push(__WEBPACK_IMPORTED_MODULE_3_lodash__["startCase"]("'" + index + "'"));
                    return value;
                }
            });
            dataNew.push(arr);
        });
        dataNew.unshift(__WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](keys_arr));
        return dataNew;
    };
    ExporttoexcelComponent.prototype.onclick = function () {
        this.downloadExcel();
    };
    ExporttoexcelComponent.prototype.sheet_from_array_of_arrays = function (data) {
        //console.log('data',data);
        var ws = {};
        var endCell = { c: 10000000, r: 10000000 };
        var startCell = { c: 0, r: 0 };
        var range = { s: endCell, e: startCell };
        var wscols = [];
        for (var R = 0; R != data.length; ++R) {
            for (var C = 0; C != data[R].length; ++C) {
                wscols.push({ wch: 20 });
                if (range.s.r > R)
                    range.s.r = R;
                if (range.s.c > C)
                    range.s.c = C;
                if (range.e.r < R)
                    range.e.r = R;
                if (range.e.c < C)
                    range.e.c = C;
                var cell = { v: data[R][C], t: 's', s: {} };
                if (R === 0) {
                    cell.s = { "font": { "bold": true, "sz": 13, "alignment": { "horizontal": "center", "vertical": "center" } } };
                }
                if (cell.v == null)
                    continue;
                var cell_ref = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].encode_cell({ c: C, r: R });
                if (typeof cell.v === 'number')
                    cell.t = 'n';
                else if (typeof cell.v === 'boolean')
                    cell.t = 'b';
                else
                    cell.t = 's';
                ws[cell_ref] = cell;
            }
        }
        ws['!cols'] = wscols;
        //console.log("Worksheet goes here", ws);
        if (range.s.c < 10000000)
            ws['!ref'] = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].encode_range(endCell, startCell);
        return ws;
    };
    ExporttoexcelComponent.prototype.datenum = function (v, date1904) {
        if (date1904)
            v += 1462;
        var epoch = Date.parse(v);
        var dt = new Date(Date.UTC(1899, 11, 30));
        return (epoch - dt) / (24 * 60 * 60 * 1000);
    };
    ExporttoexcelComponent.prototype.generateExcelFile = function () {
        this.ws = this.sheet_from_array_of_arrays(this.transformData(this.data));
        this.workbook.SheetNames.push(this.sheetName);
        this.workbook.Sheets[this.sheetName] = this.ws;
        this.wbout = __WEBPACK_IMPORTED_MODULE_1_xlsx__["write"](this.workbook, { bookType: 'xlsx', type: 'binary', cellStyles: true });
        return this.wbout;
    };
    ExporttoexcelComponent.prototype.s2ab = function (s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    };
    ExporttoexcelComponent.prototype.downloadExcel = function () {
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](new Blob([this.s2ab(this.generateExcelFile())], { type: "application/octet-stream" }), "test.xlsx");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ExporttoexcelComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExporttoexcelComponent.prototype, "onclick", null);
    ExporttoexcelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'export-to-excel',
            template: '<button class="btn btn-warning btn-sm"><i class="fa fa-file-excel-o" aria-hidden="true">&nbsp;</i>Export</button>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ExporttoexcelComponent);
    return ExporttoexcelComponent;
}());



/***/ }),

/***/ "./src/app/generatereport/generatereport.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/generatereport/generatereport.component.html":
/***/ (function(module, exports) {

module.exports = "<div align=\"center\">\n  <mat-card> \n  <h2>Generate Report</h2>\n    <form  [formGroup]=\"generateForm\" >\n        <div class=\"form-group\" >\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"From\" [formControl]=\"from\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field></div>\n      <div class=\"form-group\" >\n          <mat-form-field>\n              <input matInput [matDatepicker]=\"picker2\" placeholder=\"To\" [formControl]=\"to\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker #picker2></mat-datepicker>\n            </mat-form-field></div>\n  <export-to-excel [data]=\"someData\">\n  </export-to-excel>\n</form>\n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/generatereport/generatereport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratereportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneratereportComponent = /** @class */ (function () {
    function GeneratereportComponent() {
        this.someData = [
            { name: "Ashish Santikari", technol: "OO JavaScript" },
            { name: "Ashish Santikari", technol: "Angular 1" },
            { name: "Ashish Santikari", technol: "Angular 2" }
        ];
    }
    GeneratereportComponent.prototype.ngOnInit = function () {
        this.generateForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({ 'from': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'to': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    };
    GeneratereportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-generatereport',
            template: __webpack_require__("./src/app/generatereport/generatereport.component.html"),
            styles: [__webpack_require__("./src/app/generatereport/generatereport.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneratereportComponent);
    return GeneratereportComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".img-responsive2{\r\n    width: 180px;\r\n    height:40px\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav  style=\"padding-bottom: 0px\" class=\"navbar navbar-expand-sm navbar-light bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"img-responsive2\"       \n    src=\"assets/images/logo.png\"></a>\n  <button class=\"navbar-toggler\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" (click)=\"collapse=true\" [hidden]=\"collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" style=\"color:aliceblue\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/usersettings']\" style=\"color:aliceblue\">User Settings</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/subscription/myplan']\" style=\"color:aliceblue\">Your Subscription</a>\n      </li>\n  \n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.collapse = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100%;\r\n    color: grey\r\n}"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin: 20px\">\n    <h6 style=\"color: grey\" align=\"center\">Page not found</h6>\n    </mat-card>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/subscription/billing-info/billing-info.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n} */\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/subscription/billing-info/billing-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ol>\r\n  <li>\r\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n  </li>\r\n</ol>\r\n\r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n    <!-- <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button> -->\r\n\r\n\r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license --> -->"

/***/ }),

/***/ "./src/app/subscription/billing-info/billing-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillingInfoComponent = /** @class */ (function () {
    function BillingInfoComponent() {
    }
    BillingInfoComponent.prototype.ngOnInit = function () {
    };
    BillingInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-billing-info',
            template: __webpack_require__("./src/app/subscription/billing-info/billing-info.component.html"),
            styles: [__webpack_require__("./src/app/subscription/billing-info/billing-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillingInfoComponent);
    return BillingInfoComponent;
}());



/***/ }),

/***/ "./src/app/subscription/myplan/myplan.component.css":
/***/ (function(module, exports) {

module.exports = ".feature{\r\n    height: 32rem;\r\n   margin-top: 10px;\r\n  \r\n}\r\n.myplan{\r\n    margin-top: 10px; \r\n    height: 19.5rem;\r\n}\r\n.remaining{\r\n    margin-top: 10px;\r\n    height: 12rem;\r\n}\r\n.sai{\r\n    font-size: 1rem;\r\n    color: \t\t#038fd2\r\n}\r\n.Features{\r\n    border-style: solid;\r\n    border-width: thin;\r\n    height: 30rem;\r\n    margin: 1px px 20px -5px;\r\n    padding: 10px 10px 10px 10px;\r\n }\r\n.myplanFeatures{\r\n    border-style: solid;\r\n    border-width: thin;\r\n    height: 17rem;\r\n    margin: 40px -5px 20px -5px;\r\n    padding: 10px 10px 10px 10px;\r\n }\r\n.remainFeatures{\r\n    border-style: solid;\r\n    border-width: thin;\r\n    height: 9.5rem;\r\n    margin: 6px -5px 20px -5px;\r\n    padding: 10px 10px 10px 10px;\r\n }\r\nsai{\r\n   \r\n        height:100px;\r\n        width:100px;\r\n        border:10px solid black;\r\n   \r\n}\r\nh5 {\r\n    font-size: 1rem;\r\n    background:white;\r\n    margin-top:-19px;\r\n    color: \t\t#038fd2;\r\n    margin-left:5px;\r\n    width:120px;\r\n}\r\n.planh {\r\n    font-size: 1rem;\r\n    background:white;\r\n    margin-top:-19px;\r\n    color: \t\t#038fd2;\r\n    margin-left:5px;\r\n    width:65px;\r\n}"

/***/ }),

/***/ "./src/app/subscription/myplan/myplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"row\">\r\n  <div class=\"col-md-6\" >\r\n    <mat-card class=\"feature\">\r\n\r\n      <div class=\"Features\">\r\n        <h5>My Subscription</h5>\r\n    <h4 class=\"sai\" style=\"margin-top: 30px\"><u>Features :</u></h4>\r\n    <div>\r\n        <div class=\"row\" *ngFor=\"let myfeatures of myfeatures\">\r\n            <div class=\"col-md-4\"> \r\n                <h6>{{myfeatures.feat_nm}}</h6>\r\n               \r\n               </div>\r\n              <div class=\"col-md-4\">\r\n                  <h6>{{myfeatures.feat_des}}</h6>\r\n    \r\n        </div>\r\n        <div class=\"col-md-4\">\r\n           <h6>{{myfeatures.feat_qnty}}</h6>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    </mat-card>\r\n   </div>\r\n   <div class=\"col-md-6\">\r\n     <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n      <mat-card class=\"myplan\" >\r\n          <div class=\"myplanFeatures\">\r\n              <h5 class=\"planh\">My Plan</h5>\r\n              <div >\r\n                  <div class=\"row\" *ngFor=\"let myplan of myplan\">\r\n                      <div class=\"col-md-2\"> \r\n                          <h6>Duration:</h6>\r\n                         </div>\r\n                        <div class=\"col-md-10\">\r\n                    <h6>{{myplan.duration}}Days</h6>\r\n                  </div>\r\n                 \r\n                  </div>\r\n                  <div class=\"row\" *ngFor=\"let myplan of myplan\">\r\n                      <div class=\"col-md-2\"> \r\n                          <h6>package name:</h6>\r\n                         </div>\r\n                        <div class=\"col-md-10\">\r\n                    <h6>{{myplan.package_name}}</h6>\r\n                  </div>\r\n                 \r\n                  </div>\r\n                  <div class=\"row\" *ngFor=\"let myplan of myplan\">\r\n                      <div class=\"col-md-2\"> \r\n                          <h6>price:</h6>\r\n                         </div>\r\n                        <div class=\"col-md-10\">\r\n                    <h6>{{myplan.price}}</h6>\r\n                  </div>\r\n                 \r\n                  </div>\r\n                  <div class=\"row\" *ngFor=\"let myplan of myplan\">\r\n                      <div class=\"col-md-2\"> \r\n                          <h6>Started on:</h6>\r\n                         </div>\r\n                        <div class=\"col-md-10\">\r\n                    <h6>{{myplan.subs_begin_date}}</h6>\r\n                  </div>\r\n                 \r\n                  </div>\r\n                  <div class=\"row\" *ngFor=\"let myplan of myplan\">\r\n                      <div class=\"col-md-2\"> \r\n                          <h6>Expiries on:</h6>\r\n                         </div>\r\n                        <div class=\"col-md-10\">\r\n                    <h6>{{myplan.subs_expiry_date}}</h6>\r\n                  </div>\r\n                 \r\n                  </div>\r\n                </div>\r\n              </div>\r\n      </mat-card>\r\n    </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n        <mat-card class=\"remaining\" >\r\n            <div class=\"remainFeatures\">\r\n                <h5>Your Remaining</h5>\r\n                <div *ngFor=\"let myplans of myplan\">\r\n                    <div class=\"row\" >\r\n                        <div class=\"col-md-6\"> \r\n                            <h6>Postings remaining:</h6>\r\n                           </div>\r\n                          <div class=\"col-md-6\">\r\n                      <h6>{{myplans.remaining_postings}}</h6>\r\n                    </div>\r\n                   \r\n                    </div>\r\n            \r\n                  </div>\r\n                </div>\r\n        </mat-card>\r\n      </div>\r\n      </div>\r\n     </div>\r\n\r\n    </div> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/subscription/myplan/myplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyplanComponent = /** @class */ (function () {
    function MyplanComponent(restService) {
        this.restService = restService;
    }
    MyplanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'subscriptionfeatures?cmpny_id=13').subscribe(function (response) {
            if (response.message) {
                _this.myfeatures = response.message[0];
            }
            else {
                //console.log(response.message);
            }
        });
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'subscriptionplan?cmpny_id=13').subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                _this.myplan = response.message[0];
                //console.log(this.myplan);
            }
            else {
                //console.log(response.message);
            }
        });
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'subscriptionremaining?userid=19&cmpny_id=13').subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                _this.myremaining = response.message;
                //console.log(this.myremaining);
            }
            else {
                //console.log(response.message);
            }
        });
    };
    MyplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myplan',
            template: __webpack_require__("./src/app/subscription/myplan/myplan.component.html"),
            styles: [__webpack_require__("./src/app/subscription/myplan/myplan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__RestService_restservice__["a" /* RestService */]])
    ], MyplanComponent);
    return MyplanComponent;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.component.css":
/***/ (function(module, exports) {

module.exports = ".yourplan{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto; \r\n  }\r\n.billinginfo{\r\n    -webkit-box-flex: 0.04;\r\n        -ms-flex: 0.04 1 auto;\r\n            flex: 0.04 1 auto; \r\n  }\r\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\r\n    font: 500 17px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n    margin: 0;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 40px;\r\n}"

/***/ }),

/***/ "./src/app/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span class=\"yourplan\"></span>\r\n    <span [routerLink]=\"['/subscription/myplan']\">My Plan</span>\r\n    \r\n    <span class=\"billinginfo\"></span>\r\n      <span [routerLink]=\"['/subscription/billinginfo']\" >Billing Info</span>\r\n      \r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent() {
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
    };
    SubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subscription',
            template: __webpack_require__("./src/app/subscription/subscription.component.html"),
            styles: [__webpack_require__("./src/app/subscription/subscription.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/user-setting/create-user/create-user.component.css":
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    width: 300px;\r\n    height: 300px;\r\n    margin-top: 50px;\r\n  }\r\n.example-container {\r\n    background: #e8e8e8;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n.btn-position {\r\n    margin: 0 25px;\r\n}\r\n.error-message \r\n{\r\n    color: red;\r\n}\r\ninput.ng-invalid.ng-touched\r\n{\r\n    border-color: red;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/user-setting/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" >\r\n  <div *ngIf=\"!buttonWasClicked\">\r\n    <button mat-raised-button color=\"accent\" (click)=\"setButtonClicked(true)\">CREATE NEW USER\r\n        <mat-icon aria-label=\"Example icon-button with a icon\">add</mat-icon>\r\n    </button>\r\n    <!-- <h1>{{title}}</h1> -->\r\n    \r\n   <collapsible-list [type]=\"'accordion'\" (click)=\"setExpandable(true)\" *ngFor=\"let viewusers of viewusers; let index = index\">\r\n     \r\n     <collapsible-list-item (click)=\"viewuserdetails(index)\">\r\n       <collapsible-header class=\"waves-effect\" >\r\n         <div class=\"row\" >\r\n             <div class=\"col-md-2\" >\r\n                <label for=\"email\">{{viewusers.name | titlecase}}</label>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                    <label for=\"email\">{{viewusers.userrole}}</label>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                        <label for=\"email\">{{viewusers.email | lowercase}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"email\">{{viewusers.designation | titlecase}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"email\">{{viewusers.mobile_no}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        \r\n                        <label for=\"email\">Assigned to:{{viewusers.assigned_to}}</label>\r\n                        </div>\r\n            </div>\r\n       </collapsible-header>\r\n       <collapsible-body *ngIf=\"expanded\">\r\n  \r\n       </collapsible-body>\r\n     </collapsible-list-item>\r\n    \r\n\r\n    \r\n   </collapsible-list>\r\n  </div>\r\n\r\n  <mat-card *ngIf=\"buttonWasClicked\">\r\n  <form  [formGroup]=\"userForm\" (ngSubmit)=\"onCreate()\">\r\n    <div class=\"row\">\r\n<div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <input matInput   name = \"username\" formControlName=\"username\" placeholder=\"Username\" required>\r\n      \r\n        <!-- <mat-error *ngIf= \"userForm.get('username').invalid\">{{getUsernameMessage()}}</mat-error> -->\r\n        </mat-form-field>\r\n        <span class=\"error-message\" *ngIf=\"!userForm.get('username').valid && userForm.get('username').touched\" >Enter valid username</span>\r\n      </div>\r\n</div>\r\n<div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <input matInput   name = \"email\" formControlName=\"email\" placeholder=\"Email\" required>\r\n       \r\n        <mat-error *ngIf= \"userForm.get('email').invalid\">{{getEmailMessage()}}</mat-error>\r\n        </mat-form-field>\r\n        <!-- <span class=\"error-message\" *ngIf=\"!userForm.get('email').valid && userForm.get('email').touched\" >Enter valid Email</span> -->\r\n      </div>\r\n</div>\r\n<div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n        <mat-form-field class=\"example-full-width\">\r\n        <input matInput   name = \"password\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" required>\r\n        <!-- <mat-error *ngIf= \"userForm.get('password').invalid\">{{getPasswordMessage()}}</mat-error> -->\r\n        </mat-form-field>\r\n        <span class=\"error-message\" *ngIf=\"!userForm.get('password').valid && userForm.get('password').touched\" >Enter valid Email</span>\r\n      </div>\r\n</div>\r\n</div>\r\n\r\n  \r\n \r\n    <div class=\"row\">\r\n    \r\n      <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\">\r\n              <input matInput   name = \"mobile\" formControlName=\"mobile\" type=\"tel\" placeholder=\"Mobile Number\" required>\r\n              <!-- <mat-error *ngIf= \"userForm.get('mobile').invalid\">{{getMobileMessage()}}</mat-error> -->\r\n              </mat-form-field>\r\n              <span class=\"error-message\" *ngIf=\"!userForm.get('mobile').valid && userForm.get('mobile').touched\" >Enter valid Email</span>\r\n            </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\"> \r\n              <input matInput   name = \"designation\" formControlName=\"designation\" [id]='1' type=\"text\" placeholder=\"Designation\" required>\r\n              <!-- <mat-error *ngIf= \"userForm.get('designation').invalid\">{{getDesignationMessage()}}</mat-error> -->\r\n              </mat-form-field>\r\n              <span class=\"error-message\" *ngIf=\"!userForm.get('designation').valid && userForm.get('designation').touched\" >Enter valid Email</span>\r\n            </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n        <mat-select placeholder=\"userrole\" formControlName=\"userrole\" required >\r\n         \r\n            <mat-option *ngFor=\"let rolesmeta of rolesmeta\"  [value]=\"rolesmeta.Role_Id\">\r\n             {{rolesmeta.Role_Name}}\r\n            </mat-option>\r\n            \r\n          </mat-select>\r\n          <!-- <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\r\n          <mat-hint>{{animalControl.value?.sound}}</mat-hint> -->\r\n        </mat-form-field>\r\n        <span class=\"error-message\" *ngIf=\"!userForm.get('userrole').valid && userForm.get('userrole').touched\" >Enter valid Email</span>\r\n          </div>\r\n    </div>\r\n    </div>\r\n      \r\n    <div class=\"row\">\r\n        \r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <mat-form-field>\r\n            <mat-select placeholder=\"Assigned to\" formControlName=\"assigned\" required >\r\n             \r\n                <mat-option *ngFor=\"let assignmeta of assignmeta\"  [value]=\"assignmeta.id\">\r\n                 {{assignmeta.contact_name}}\r\n                </mat-option>\r\n                \r\n              </mat-select>\r\n   \r\n            </mat-form-field>\r\n            <span class=\"error-message\" *ngIf=\"!userForm.get('assigned').valid && userForm.get('assigned').touched\" >Enter valid Email</span>\r\n              </div>\r\n        </div>\r\n  \r\n        </div>\r\n          <button mat-raised-button color=\"accent\" (click)=\"setButtonClicked(false)\">Cancel</button>\r\n         \r\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!userForm.valid\">Create User</button> \r\n       \r\n        </form>\r\n</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/user-setting/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(router, restService) {
        this.router = router;
        this.restService = restService;
        this.expanded = false;
        this.buttonWasClicked = false;
        this.userid = "19";
        this.usertype = "Employer";
        this.type = "1";
        this.cmpny_id = "13";
        this.jobEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'view_user').subscribe(function (response) {
            if (response.message) {
                _this.viewusers = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rolesmeta').subscribe(function (response) {
            if (response.message) {
                _this.rolesmeta = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
        var assign;
        assign = {
            userid: this.userid,
            user_type: this.type,
            cmpny_id: this.cmpny_id
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'assignedmeta', assign).subscribe(function (response) {
            if (response.message) {
                _this.assignmeta = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
        localStorage.setItem('userid', '19');
        localStorage.setItem('User_Type', "employer");
        this.userForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({ 'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]),
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'userrole': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'assigned': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_2__global__["b" /* passwordRegex */])]) });
    };
    CreateUserComponent.prototype.setButtonClicked = function (clicked) {
        this.buttonWasClicked = clicked;
    };
    CreateUserComponent.prototype.setExpandable = function (clicked) {
        this.expanded = clicked;
    };
    CreateUserComponent.prototype.onCreate = function () {
        var _this = this;
        var body;
        body =
            {
                name: this.userForm.get('username').value,
                email: this.userForm.get('email').value,
                mobile_no: this.userForm.get('mobile').value,
                password: this.userForm.get('password').value,
                designation: this.userForm.get('designation').value,
                adminid: this.userid,
                cmpny_id: this.cmpny_id,
                usertype: this.usertype,
                assigned_to: this.userForm.get('assigned').value,
                userrole: this.userForm.get('userrole').value
            };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'createuser', body).subscribe(function (response) {
            if (response.status) {
                _this.setButtonClicked(false);
            }
            else {
                //console.log(response);
                _this.errorMessage = response.message;
                alert("please try again");
            }
        }, function (error) {
        });
    };
    CreateUserComponent.prototype.viewuserdetails = function (ids) {
        //console.log(ids);
        this.jobEmitter.emit(ids);
        this.router.navigate(['viewuser/' + ids]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateUserComponent.prototype, "jobEmitter", void 0);
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-user',
            template: __webpack_require__("./src/app/user-setting/create-user/create-user.component.html"),
            styles: [__webpack_require__("./src/app/user-setting/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__RestService_restservice__["a" /* RestService */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/user-setting/user-setting.component.css":
/***/ (function(module, exports) {

module.exports = ".CreateUser{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto; \r\n  }\r\n.UserPrivileges{\r\n    -webkit-box-flex: 0.04;\r\n        -ms-flex: 0.04 1 auto;\r\n            flex: 0.04 1 auto; \r\n  }\r\n.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {\r\n    font: 500 17px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n    margin: 0;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-setting/user-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        \r\n      </div>\r\n      <div class=\"col-md-3\">\r\n          <button mat-raised-button color=\"primary\" style=\"color:black\" [routerLink]=\"['/users/']\">Create User</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <button mat-raised-button color=\"primary\" style=\"color:black\"[routerLink]=\"['/users/userprivileges']\" >User Privileges</button>\r\n          </div>\r\n  </div>\r\n   \r\n</header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/user-setting/user-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSettingComponent = /** @class */ (function () {
    function UserSettingComponent() {
    }
    UserSettingComponent.prototype.ngOnInit = function () {
    };
    UserSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-setting',
            template: __webpack_require__("./src/app/user-setting/user-setting.component.html"),
            styles: [__webpack_require__("./src/app/user-setting/user-setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSettingComponent);
    return UserSettingComponent;
}());



/***/ }),

/***/ "./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <mat-card style=\"margin-top: 5px;\">\n    <div class=\"row\" >\n      <div class=\"col-md-3\">\n<span>{{edit.name | titlecase }}</span>\n      </div>\n      <div class=\"col-md-3\">\n          <span>{{edit.userrole}}</span>\n                </div>\n                <div class=\"col-md-3\">\n                    <span>{{edit.email | lowercase}}</span>\n                          </div>\n                          <div class=\"col-md-3\">\n                              <span>Assigned to:{{edit.assigned_to}}</span>\n                                    </div>\n    </div>\n  </mat-card>\n  </div>\n\n\n  <div style=\"margin-top:20px\">\n      \n    <mat-card *ngIf=\"!isEdit\">\n        <div align=\"right\"><button mat-raised-button color=\"accent\"(click)=\"setButtonClicked(true)\"> <mat-icon aria-label=\"Example icon-button with a icon\">edit</mat-icon></button></div>\n      <h6><u>Privileges for {{edit.name}}</u></h6>\n\n      <form>\n        <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n              <mat-checkbox value=\"\" disabled readonly>Active/Inactve Jobs</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox value=\"\" disabled readonly>Closed Jobs</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox value=\"\" disabled readonly>Can edit company Details</mat-checkbox>\n          </div>  \n </div>\n        \n        <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-4\"><label>Job postings :</label></div>\n              \n              <div class=\"col-md-2\"><input type=\"text\" name=\"posting\" [value]='jobpostings' readonly></div><br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"><label>Profiles Viewed :</label></div>\n                <div class=\"col-md-2\"><input type=\"text\" name=\"vehicle\" value=\"0\" readonly></div><br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"><label>Resume Download:</label></div>\n                <div class=\"col-md-2\"><input type=\"text\" name=\"vehicle\" value=\"0\" readonly></div><br>\n            </div>\n          \n        </div>\n      </div></form> \n    </mat-card>\n  </div>\n  <div style=\"margin-top:20px\">\n      \n    <mat-card *ngIf=\"isEdit\">\n      <h6><u>Privileges for {{edit.name}}</u></h6>\n\n      <form>\n        <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n              <mat-checkbox value=\"\" >Active/Inactve Jobs</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox value=\"\" >Closed Jobs</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox value=\"\" >Can edit company Details</mat-checkbox>\n          </div>  \n </div>\n        \n        <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-md-4\"><label>Job postings :</label></div>\n              \n              <div class=\"col-md-2\"><input type=\"text\" name=\"posting\" [value]='jobpostings' ></div><br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"><label>Profiles Viewed :</label></div>\n                <div class=\"col-md-2\"><input type=\"text\" name=\"vehicle\" value=\"0\" ></div><br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"><label>Resume Download:</label></div>\n                <div class=\"col-md-2\"><input type=\"text\" name=\"vehicle\" value=\"0\" ></div><br>\n            </div>\n          \n        </div>\n      </div>\n      <div align=\"right\">\n        <button mat-raised-button color=\"accent\" (click)=\"setButtonClicked(false)\">CANCEL</button>\n     <button mat-raised-button color=\"accent\" >SAVE</button></div>\n    </form> \n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserprevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EdituserprevComponent = /** @class */ (function () {
    function EdituserprevComponent(router, restService, activatedRoute) {
        var _this = this;
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.isEdit = false;
        //console.log(this.index=this.activatedRoute.snapshot.params['id']);
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'view_user').subscribe(function (response) {
            if (response.message) {
                _this.viewusers = response.message;
                ;
                _this.edit = _this.viewusers[_this.index];
                //console.log(this.userid=this.viewusers[this.index].ids);
                _this.userprevilege();
            }
            else {
                //console.log(response.message);
            }
        });
    }
    EdituserprevComponent.prototype.ngOnInit = function () {
    };
    EdituserprevComponent.prototype.userprevilege = function () {
        var _this = this;
        var body;
        body = {
            'userid': this.userid
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'viewuserpri', body).subscribe(function (response) {
            if (response.message) {
                _this.jobpostings = response.message[0].Quantity;
                //console.log(this.jobpostings);
            }
            else {
                //console.log(response.message);
            }
        });
    };
    EdituserprevComponent.prototype.setButtonClicked = function (clicked) {
        this.isEdit = clicked;
    };
    EdituserprevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edituserprev',
            template: __webpack_require__("./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.html"),
            styles: [__webpack_require__("./src/app/user-setting/userprivileges/edituserprev/edituserprev.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EdituserprevComponent);
    return EdituserprevComponent;
}());



/***/ }),

/***/ "./src/app/user-setting/userprivileges/userprivileges.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-setting/userprivileges/userprivileges.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 style=\"margin-top:5px\" align=\"left\"><u>User Priveleges</u></h6>\r\n\r\n\r\n<div>\r\n  <mat-card style=\"margin-top: 15px;\"  *ngFor=\"let viewusers of viewusers; let index = index\"(click)=\"viewprivelege(index)\">\r\n    <div class=\"row\" >\r\n      <div class=\"col-md-3\">\r\n<span>{{viewusers.name | titlecase }}</span>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n          <span>{{viewusers.userrole}}</span>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <span>{{viewusers.email | lowercase}}</span>\r\n                          </div>\r\n                          <div class=\"col-md-3\">\r\n                              <span>Assigned to:{{viewusers.assigned_to}}</span>\r\n                                    </div>\r\n    </div>\r\n  </mat-card>\r\n  </div>\r\n  <!-- <mat-accordion>\r\n    <mat-expansion-panel >\r\n      <mat-expansion-panel-header (click)=\"viewprivelege(index)\">\r\n         \r\n           \r\n        <mat-panel-title>\r\n          \r\n            <span></span> -->\r\n            \r\n              <!-- This fills the remaining space of the current row -->\r\n              <!-- <span class=\"example-fill-remaining-space\"></span>\r\n              <span></span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            <span></span> -->\r\n            \r\n              <!-- This fills the remaining space of the current row -->\r\n              <!-- <span class=\"example-fill-remaining-spacee\"></span>\r\n              <span>Assigned to:{{viewusers.assigned_to}}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n     \r\n      <button mat-raised-button color=\"accent\" *ngIf=\"isEdit\" (click)=\"setButtonClicked()\">edit</button>\r\n    \r\n        <mat-form-field *ngFor=\"let usersprivelege of usersprivelege\">\r\n          <input matInput placeholder=\"Job postings\" [value]='usersprivelege.Quantity'  [readonly]=\"isEdit\">\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"accent\" *ngIf=\"!isEdit\" >cancel</button>\r\n        <button mat-raised-button color=\"accent\" *ngIf=\"!isEdit\" >save</button>\r\n    </mat-expansion-panel>\r\n</mat-accordion> -->\r\n"

/***/ }),

/***/ "./src/app/user-setting/userprivileges/userprivileges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprivilegesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprivilegesComponent = /** @class */ (function () {
    function UserprivilegesComponent(router, restService) {
        this.router = router;
        this.restService = restService;
        this.userid = "19";
        this.assigned = "227";
        this.usertype = "Employer";
        this.expanded = false;
        this.cmpny_id = "13";
        this.isEdit = true;
        this.jobEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.panelOpenState = false;
    }
    UserprivilegesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'view_user').subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                _this.viewusers = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
    };
    UserprivilegesComponent.prototype.setButtonClicked = function () {
        this.isEdit = false;
    };
    UserprivilegesComponent.prototype.viewprivelege = function (ids) {
        //console.log(ids);
        this.jobEmitter.emit(ids);
        this.router.navigate(['edituserprev/' + ids]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], UserprivilegesComponent.prototype, "jobEmitter", void 0);
    UserprivilegesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userprivileges',
            template: __webpack_require__("./src/app/user-setting/userprivileges/userprivileges.component.html"),
            styles: [__webpack_require__("./src/app/user-setting/userprivileges/userprivileges.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__["a" /* RestService */]])
    ], UserprivilegesComponent);
    return UserprivilegesComponent;
}());



/***/ }),

/***/ "./src/app/user-setting/viewuser/viewuser.component.css":
/***/ (function(module, exports) {

module.exports = ".example-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/user-setting/viewuser/viewuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"color:white\">\n  <div  *ngIf=\"buttonWasClicked\"> \n        <mat-card >\n                <form [formGroup]=\"editForm\" (ngSubmit)=\"onSave()\">\n      <div class=\"row\">\n            <div class=\"col-md-4\" >\n        <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"name\"value=\"{{edit.name}}\">\n              </mat-form-field>\n      </div>\n      <div class=\"col-md-4\" >\n        <mat-form-field>\n    <mat-select placeholder=\"userrole\" formControlName=\"role\"  >\n     \n        <mat-option *ngFor=\"let rolesmeta of rolesmeta\"  [value]=\"rolesmeta.Role_Id\">\n         {{rolesmeta.Role_Name}}\n        </mat-option>\n        \n      </mat-select>\n    \n    </mat-form-field>\n</div>\n          <div class=\"col-md-4\" >\n                <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" value=\"{{edit.email}}\" readonly>\n                      </mat-form-field>\n              </div>\n      </div>\n      <div class=\"row\">\n            <div class=\"col-md-4\" >\n                    <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Designation\" class=\"form-control\" formControlName=\"designation\" value=\"{{edit.designation}}\" readonly>\n                          </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\" >\n                        <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Mobile Number\"  class=\"form-control\" formControlName=\"mobile\" value=\"{{edit.mobile_no}}\">\n                              </mat-form-field>\n                      </div>\n                      <div class=\"col-md-4\" >\n                            <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Assigned to\" class=\"form-control\" formControlName=\"assigned\" value=\"{{edit.assigned_to}}\" readonly>\n                                  </mat-form-field>\n                          </div>\n      </div>\n      <button mat-raised-button color=\"accent\" (click)=\"setButtonClicked(false)\">Cancel\n            <mat-icon aria-label=\"Example icon-button with a icon\">cancel</mat-icon>\n      </button>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Save\n            <mat-icon aria-label=\"Example icon-button with a icon\">check</mat-icon></button> \n                </form>\n    </mat-card>\n      </div>\n\n<div  *ngIf=\"!buttonWasClicked\">\n        <mat-card >\n                <form [formGroup]=\"editForm\">\n      <div class=\"row\">\n            <div class=\"col-md-4\" >\n        <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"name\" value=\"{{edit.name}}\" readonly>\n              </mat-form-field>\n      </div>\n      <div class=\"col-md-4\" >\n            <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"User role\" class=\"form-control\" formControlName=\"role\" value=\"{{edit.userrole}}\" readonly>\n                  </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" >\n                <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" value=\"{{edit.email}}\" readonly>\n                      </mat-form-field>\n              </div>\n      </div>\n      <div class=\"row\">\n            <div class=\"col-md-4\" >\n                    <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Designation\" class=\"form-control\" formControlName=\"designation\" value=\"{{edit.designation}}\" readonly>\n                          </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\" >\n                        <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Mobile Number\"  class=\"form-control\" formControlName=\"mobile\" value=\"{{edit.mobile_no}}\" readonly>\n                              </mat-form-field>\n                      </div>\n                      <div class=\"col-md-4\" >\n                            <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Assigned to\" class=\"form-control\" formControlName=\"assigned\" value=\"{{edit.assigned_to}}\" readonly>\n                                  </mat-form-field>\n                          </div>\n      </div>\n      <button mat-raised-button color=\"accent\" (click)=\"setButtonClicked(true)\">Edit\n            <mat-icon aria-label=\"Example icon-button with a icon\">edit</mat-icon>\n      </button>\n      <button mat-raised-button color=\"primary\" (click)=\"onDelete()\">Delete User\n            <mat-icon aria-label=\"Example icon-button with a icon\">delete</mat-icon></button> \n        </form>\n    </mat-card>\n            \n </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user-setting/viewuser/viewuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewuserComponent = /** @class */ (function () {
    function ViewuserComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.assigned = 227;
        this.buttonWasClicked = false;
    }
    ViewuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rolesmeta').subscribe(function (response) {
            if (response.message) {
                _this.rolesmeta = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
        //console.log(this.index=this.activatedRoute.snapshot.params['id']);
        // this.edit=this.restService.viewuser[this.index];
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'view_user').subscribe(function (response) {
            if (response.message) {
                _this.viewusers = response.message;
                ;
                _this.edit = _this.viewusers[_this.index];
                //console.log(this.edit);
            }
            else {
                //console.log(response.message);
            }
        });
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'designation': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            'role': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'assigned': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required)
        });
    };
    ViewuserComponent.prototype.onDelete = function () {
        var _this = this;
        var body;
        body =
            {
                userId: this.edit.ids
            };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'deleteuser', body).subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                alert("Deleted successfully");
                _this.router.navigate(['/users/']);
            }
            else {
                //console.log(response.message);
            }
        });
    };
    ViewuserComponent.prototype.setButtonClicked = function (clicked) {
        this.buttonWasClicked = clicked;
    };
    ViewuserComponent.prototype.onSave = function () {
        var _this = this;
        var body = {
            'userid': this.edit.ids,
            'name': this.editForm.get('name').value,
            'mobile_no': this.editForm.get('mobile').value,
            'assigned_to': this.assigned,
            'userrole': this.editForm.get('role').value
        };
        //console.log(body,this.editForm.get('name'));
        this.restService.updateDetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'edit_user', body).subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                alert("updated successfully");
                _this.router.navigate(['/users/']);
            }
            else {
                //console.log(response.message);
            }
        });
    };
    ViewuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewuser',
            template: __webpack_require__("./src/app/user-setting/viewuser/viewuser.component.html"),
            styles: [__webpack_require__("./src/app/user-setting/viewuser/viewuser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ViewuserComponent);
    return ViewuserComponent;
}());



/***/ }),

/***/ "./src/app/userssettings/dailog.css":
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    width: 300px;\r\n    height: 300px;\r\n    margin-top: 50px;\r\n  }\r\n.example-container {\r\n    background: #e8e8e8;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n.btn-position {\r\n    margin: 0 25px;\r\n}\r\n.error-message \r\n{\r\n    color: red;\r\n}\r\ninput.ng-invalid.ng-touched\r\n{\r\n    border-color: red;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/userssettings/dialog-overview-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create user & privileges</h1>\r\n<div mat-dialog-content>\r\n    <mat-horizontal-stepper [linear]=\"!isLinear\" #stepper=\"matHorizontalStepper\">\r\n        <mat-step [stepControl]=\"userForm\">\r\n              <div style=\"margin:10px\">\r\n                  <form [formGroup]=\"userForm\">\r\n            <ng-template matStepLabel>Create User</ng-template>\r\n            <div class=\"row\" align=\"center\">\r\n                  <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input type=\"text\" minlength=3 maxlength=100 matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n              <mat-error *ngIf= \"userForm.get('username').hasError('required')\">Please enter Username</mat-error>\r\n              <mat-error *ngIf= \"userForm.get('username').hasError('minlength')\">Please enter morethan three characters</mat-error> </mat-form-field>\r\n            <!-- <span class=\"error-message\" *ngIf=\"!userForm.get('username').valid && userForm.get('username').touched\" >Enter valid username</span> -->\r\n          </div>\r\n            <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n                  <input type=\"email\" matInput placeholder=\"Email Address\" formControlName=\"email\" required>\r\n                  <mat-error *ngIf= \"userForm.get('email').invalid\">{{getEmailMessage()}}</mat-error>\r\n                  <mat-error *ngIf= \"userForm.get('email').hasError('required')\">Please enter email</mat-error>\r\n                  <mat-error *ngIf= \"userForm.get('email').hasError('isInvalid')\">Enter Official Email Id</mat-error>\r\n\r\n                </mat-form-field>\r\n                <!-- <span class=\"error-message\" *ngIf=\"!userForm.get('email').valid && userForm.get('email').touched\" >Enter valid Email</span> -->\r\n              </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field>\r\n                        <input matInput minlength=\"5\" placeholder=\"Password\" [type]=\"!hide ? 'password' : 'text'\" formControlName=\"password\" required>\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        <mat-error class=\"error-message\" *ngIf=\"!userForm.get('password').valid && userForm.get('password').touched\" >Enter valid Password</mat-error>\r\n                        <mat-error *ngIf= \"userForm.get('password').hasError('minlength')\">Enter minimum 5 characters</mat-error>\r\n                      </mat-form-field>\r\n                      <span style=\"font-size: .7em\">*password should contain @$!^,A,a,12</span>\r\n\r\n                <!-- <mat-form-field>\r\n                      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n                    </mat-form-field>\r\n                    <span class=\"error-message\" *ngIf=\"!userForm.get('password').valid && userForm.get('password').touched\" >Enter valid Password</span> -->\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\" align=\"center\">\r\n                      <div class=\"col-md-4\">\r\n                    <mat-form-field>\r\n                          <input minlength=10 maxlength=10 matInput placeholder=\"Mobile Number\" formControlName=\"mobile\" required>\r\n                          <mat-error class=\"error-message\" *ngIf=\"!userForm.get('mobile').valid && userForm.get('mobile').touched\" >Enter valid mobile number</mat-error>\r\n                         </mat-form-field>\r\n                       \r\n                      </div>\r\n\r\n                        <!-- <div class=\"col-md-4\">\r\n                        <mat-form-field>\r\n                              <input matInput placeholder=\"Designation\" formControlName=\"designation\" required>\r\n                            </mat-form-field>\r\n                          </div> -->\r\n                            <div class=\"col-md-4\">\r\n                            <mat-form-field>\r\n                                  <mat-select placeholder=\"userrole\" formControlName=\"userrole\" required [(ngModel)]=\"userrole\" (ngModelChange)=\"roleChange()\">\r\n                                          \r\n                                             <mat-option *ngFor=\"let rolesmeta of rolesmeta\"  [value]=\"rolesmeta.Role_Id\">\r\n                                              {{rolesmeta.Role_Name}}\r\n                                             </mat-option>\r\n                                             \r\n                                           </mat-select> \r\n                                           <mat-error class=\"error-message\" *ngIf=\"!userForm.get('userrole').valid && userForm.get('userrole').touched\" >please select</mat-error>\r\n                                           </mat-form-field>\r\n                                          \r\n                                          </div> \r\n                                          <div class=\"col-md-4\">\r\n                                            <mat-form-field>\r\n                                                  <mat-select placeholder=\"Assigned to\" formControlName=\"assigned\" required >\r\n                                                          \r\n                                                             <mat-option *ngFor=\"let assignmeta of assignmeta\"  [value]=\"assignmeta.id\">\r\n                                                              {{assignmeta.contact_name}}\r\n                                                             </mat-option>\r\n                                                             \r\n                                                           </mat-select>\r\n                                                           <mat-error class=\"error-message\" *ngIf=\"!userForm.get('assigned').valid && userForm.get('assigned').touched\" >please select</mat-error>\r\n                                           </mat-form-field>\r\n                                  \r\n                                                                      </div>\r\n                                       </div>\r\n                                       <div class=\"row\" align=\"center\">\r\n                                    \r\n                                          </div>\r\n      \r\n            <div align=\"right\">\r\n              <button mat-raised-button color=\"primary\"[disabled]=\"!userForm.valid\" matStepperNext>Next</button>\r\n            </div>\r\n          </form>\r\n      </div>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"privelgeFormGroup\">\r\n              <div style=\"margin:10px;\" >\r\n          <form [formGroup]=\"privelgeFormGroup\">\r\n            <ng-template matStepLabel>Create User privelege</ng-template>\r\n            <div class=\"row\" style=\"padding-left:10px\">\r\n                <div class=\"col\" align=\"center\" >\r\n            <div class=\"row\" *ngFor=\"let privilege of privelgeFormGroup.controls.privilege.controls; let i=index;\">\r\n                  <mat-checkbox [formControl]=\"privilege\">{{listPrivilege[i].name}} </mat-checkbox> \r\n              </div>           \r\n          </div>\r\n      </div>\r\n            <div align=\"right\">\r\n        \r\n                  <div class=\"row\">\r\n              <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext (click)=onCreate()>Submit</button>\r\n            </div> </div>\r\n          \r\n          </form>\r\n        </div>\r\n        </mat-step>\r\n        \r\n      </mat-horizontal-stepper>\r\n      \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/userssettings/edituserdetails/edituserdetails.component.css":
/***/ (function(module, exports) {

module.exports = ".error-message \r\n{\r\n    color: red;\r\n}\r\ninput.ng-invalid.ng-touched\r\n{\r\n    border-color: red;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/userssettings/edituserdetails/edituserdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSave()\">\n<mat-card style=\"margin: 20px\" >\n\n<div class=\"row\">\n<div class=\"col-md-4\" >\n<mat-form-field class=\"example-full-width\">\n<input matInput placeholder=\"Username\" minlength=3  formControlName=\"name\" value=\"{{edit.name}}\">\n\n<mat-error *ngIf= \"editForm.get('name').hasError('required')\">Please enter Username</mat-error>\n<mat-error  *ngIf= \"editForm.get('name').hasError('minlength')\">Please enter morethan three characters</mat-error></mat-form-field>\n\n</div>\n<div class=\"col-md-4\" >\n<mat-form-field >\n<mat-select placeholder=\"userrole\" formControlName=\"role\" [(ngModel)]=\"role\" (ngModelChange)=\"roleChange()\" disabled >\n\n<mat-option *ngFor=\"let rolesmeta of rolesmeta\"  [value]=\"rolesmeta.Role_Id\">\n{{rolesmeta.Role_Name}}\n</mat-option>\n\n</mat-select>\n<mat-error class=\"error-message\" *ngIf=\"!editForm.get('role').valid && editForm.get('role').touched\"  >please select</mat-error>\n</mat-form-field>\n\n</div>\n<div class=\"col-md-4\" >\n<mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Email\"  formControlName=\"email\" value=\"{{edit.email}}\" readonly>\n    </mat-form-field>\n    <span class=\"error-message\" *ngIf=\"!editForm.get('email').valid && editForm.get('email').touched\" >Enter valid email</span>\n</div>\n</div>\n<div class=\"row\">\n\n<div class=\"col-md-4\" >\n      <mat-form-field class=\"example-full-width\">\n              <input minlength=10 maxlength=10  type=\"tel\" matInput placeholder=\"Mobile Number\"  class=\"form-control\" formControlName=\"mobile\" value=\"{{edit.mobile_no}}\">\n              <mat-error class=\"error-message\" *ngIf=\"!editForm.get('mobile').valid && editForm.get('mobile').touched\" >Enter valid mobile number</mat-error>\n              </mat-form-field>\n            \n    </div>\n    <div class=\"col-md-4\" >\n  <mat-form-field>\n  <mat-select placeholder=\"Assigned to\" formControlName=\"assigned\" required >\n   <mat-option *ngFor=\"let assignmeta of assignmeta\"  [value]=\"assignmeta.id\">{{assignmeta.contact_name}}</mat-option>\n                                             \n                                           </mat-select>\n                                           <mat-error class=\"error-message\" *ngIf=\"!editForm.get('assigned').valid && editForm.get('assigned').touched\" >Please select</mat-error>\n                                            </mat-form-field>\n                          \n        </div>\n</div>\n\n</mat-card>\n<mat-card style=\"margin: 20px\">\n<h5 style=\"color:darkcyan\">Privileges for {{edit.name}}</h5>\n<div class=\"row\" style=\"padding-left:10px\">\n<div class=\"col-md-6\"  >\n    \n  <div class=\"row\" *ngFor=\"let privilege of privelgeFormGroup.controls.privilege.controls; let i=index;\">\n      <mat-checkbox [formControl]=\"privilege\" [checked]=\"privilege.value\" >{{listPrivilege[i].name}} </mat-checkbox> \n  </div>   \n</div>\n</div> \n</mat-card>\n<div align=\"center\" >\n<button mat-raised-button color=\"accent\" (click)=\"cancel()\">Cancel</button>\n<button mat-raised-button color=\"primary\"[disabled]=\"!editForm.valid\" type=\"submit\">Save\n</button> \n</div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/userssettings/edituserdetails/edituserdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EdituserdetailsComponent = /** @class */ (function () {
    function EdituserdetailsComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.mobnumPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        this.nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        this.assigned = "227";
        this.listPrivilege = [{
                id: 1,
                name: "Job Posting"
            },
            {
                id: 2,
                name: "Profile View"
            },
            {
                id: 3,
                name: "Resume"
            },
            {
                id: 4,
                name: "Active"
            },
            {
                id: 5,
                name: "Inactive"
            },
            {
                id: 6,
                name: "Closed"
            },
        ];
    }
    EdituserdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.index = this.activatedRoute.snapshot.params['id']);
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern(this.nameRegex)]),
            'role': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'assigned': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            'mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern(this.mobnumPattern)]),
        });
        this.privelgeFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            privilege: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
            ])
        });
        //console.log(this.privelgeFormGroup)
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'rolesmeta').subscribe(function (response) {
            if (response.message) {
                _this.rolesmeta = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
        var assign;
        assign = {
            user_type: this.role,
            cmpny_id: 13
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'assignedmeta', assign).subscribe(function (response) {
            if (response.message) {
                _this.assignmeta = response.message;
                //console.log(this.assignmeta)
            }
            else {
                //console.log(response.message);
            }
        });
        // this.edit=this.restService.viewuser[this.index];
        var body = {
            'userid': this.index
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'viewsingleuser', body).subscribe(function (response) {
            if (response.message) {
                _this.edit = response.message[0];
                _this.editForm.controls['email'].setValue(_this.edit.email);
                _this.editForm.controls['name'].setValue(_this.edit.name);
                _this.editForm.controls['mobile'].setValue(_this.edit.mobile_no);
                _this.editForm.controls['assigned'].setValue(_this.edit.assgnd_to);
                _this.editForm.controls['role'].setValue(_this.edit.userrole_id);
                var assign_1;
                assign_1 = {
                    user_type: _this.edit.userrole_id,
                    cmpny_id: 13
                };
                _this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'assignedmeta', assign_1).subscribe(function (response) {
                    if (response.message) {
                        _this.assignmeta = response.message;
                        //console.log(this.assignmeta)
                    }
                    else {
                        //console.log(response.message);
                    }
                });
                //console.log(this.edit);
            }
            else {
                //console.log(response.message);
            }
        });
        var pribody = {
            'userid': this.index,
            'org_subs_id': 1
        };
        //console.log(body);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'viewuserpri', pribody).subscribe(function (response) {
            if (response.message) {
                _this.pri = response.message;
                /*  for(let controls of formArray) {
                   //console.log(controls)
                   controls.setValue(true)
                 } */
                _this.pri.forEach(function (element, index) {
                    if (element.sts === "Active") {
                        // //console.log( this.privelgeFormGroup.controls.privilege.get(index.toString()).setValue(true))
                        _this.privelgeFormGroup.controls.privilege.get(index.toString()).setValue(true);
                    }
                    else {
                        _this.privelgeFormGroup.controls.privilege.get(index.toString()).setValue(false);
                    }
                    //console.log(element)
                });
                //console.log( this.privelgeFormGroup.controls.privilege)
            }
            else {
                //console.log(response.message);
            }
            //console.log(this.privelgeFormGroup.controls.privilege);
        });
    };
    EdituserdetailsComponent.prototype.onSave = function () {
        var _this = this;
        var body = {
            'userid': this.edit.id,
            'name': this.editForm.get('name').value,
            'mobile_no': this.editForm.get('mobile').value,
            'assigned_to': this.editForm.get('assigned').value,
            'userrole': this.editForm.get('role').value,
            'email': this.editForm.get('email').value,
        };
        //console.log(body);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'edit_user', body).subscribe(function (response) {
            if (response.message) {
                //console.log(response.message);
                _this.preeeevilegeee();
                _this.router.navigate(['/usersettings']);
            }
            else {
                //console.log(response.message);
            }
        });
    };
    EdituserdetailsComponent.prototype.preeeevilegeee = function () {
        var _this = this;
        var userPrivileges = Object.assign({}, {
            priveleges: this.privelgeFormGroup.controls.privilege.value.map(function (selected, i) {
                if (selected) {
                    return {
                        "feature": _this.listPrivilege[i].id,
                        "feat_status": "Active",
                        userid: _this.edit.id,
                        org_subs_id: "1",
                    };
                }
                else {
                    return {
                        "feature": _this.listPrivilege[i].id,
                        "feat_status": "Inactive",
                        userid: _this.edit.id,
                        org_subs_id: "1",
                    };
                }
            })
        });
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'addeditPrivilege', userPrivileges).subscribe(function (response1) {
            if (response1.status) {
                alert("updated Sucessfully");
            }
            else {
                //console.log(response1.message);
            }
        });
    };
    EdituserdetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/usersettings']);
    };
    EdituserdetailsComponent.prototype.roleChange = function () {
        var _this = this;
        var assign;
        assign = {
            user_type: this.role,
            cmpny_id: 13
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* baseUrl */] + 'assignedmeta', assign).subscribe(function (response) {
            if (response.message) {
                _this.assignmeta = response.message;
                //console.log(this.assignmeta)
            }
            else {
                //console.log(response.message);
            }
        });
    };
    EdituserdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edituserdetails',
            template: __webpack_require__("./src/app/userssettings/edituserdetails/edituserdetails.component.html"),
            styles: [__webpack_require__("./src/app/userssettings/edituserdetails/edituserdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EdituserdetailsComponent);
    return EdituserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/userssettings/userssettings.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/userssettings/userssettings.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n      <button style=\"margin-top:10px\" mat-raised-button color=\"accent\" (click)=\"openDialog()\">CREATE NEW USER\n          <mat-icon aria-label=\"Example icon-button with a icon\">add</mat-icon>\n      </button>\n      <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\">\n      \n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n      \n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.name| titlecase}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"userrole\">\n            <mat-header-cell *matHeaderCellDef> User Type</mat-header-cell>\n            <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.userrole}} </mat-cell>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n            <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.email | lowercase}} </mat-cell>\n          </ng-container>\n      \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"mobile_no\">\n            <mat-header-cell *matHeaderCellDef> Mobile </mat-header-cell>\n            <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.mobile_no}} </mat-cell>\n          </ng-container>\n      \n          <!-- Symbol Column -->\n          <!-- <ng-container matColumnDef=\"designation\">\n            <mat-header-cell *matHeaderCellDef> Designation </mat-header-cell>\n            <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.designation| titlecase}} </mat-cell>\n          </ng-container> -->\n         <!-- Position Column -->\n        \n    \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"assigned_to\">\n          <mat-header-cell *matHeaderCellDef>Assigned to</mat-header-cell>\n          <mat-cell *matCellDef=\"let viewusers\"> {{viewusers.assigned_to}} </mat-cell>\n        </ng-container>\n    \n\n\n        \n\n\n\n\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n          <mat-cell *matCellDef=\"let viewusers\">\n            <mat-icon aria-label=\"Example icon-button with a icon\" onmouseover=\"\" style=\"cursor: pointer;\"matTooltip=\"View\" (click)=\"onView(viewusers.ids)\"> remove_red_eye</mat-icon > \n              <mat-icon aria-label=\"Example icon-button with a icon\" onmouseover=\"\" style=\"cursor: pointer;\"matTooltip=\"Edit\"  (click)=\"onEdit(viewusers.ids)\"> edit</mat-icon >\n                <mat-icon aria-label=\"Example icon-button with a icon\"onmouseover=\"\" style=\"cursor: pointer;\"matTooltip=\"Delete\"  (click)=\"onDelete(viewusers.ids)\"> delete</mat-icon >\n                 </mat-cell>\n        </ng-container>\n  \n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        \n      </div>\n      \n        \n     "

/***/ }),

/***/ "./src/app/userssettings/userssettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserssettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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








var UserssettingsComponent = /** @class */ (function () {
    function UserssettingsComponent(dialog, router, activatedRoute, restService) {
        this.dialog = dialog;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.restService = restService;
        this.displayedColumns = ['name', 'userrole', 'email', 'mobile_no', 'assigned_to', 'actions'];
        this.userid = "19";
        this.usertype = "Employer";
        this.type = "1";
        this.cmpny_id = "13";
        this.jobEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    UserssettingsComponent.prototype.ngOnInit = function () {
        this.viewuser();
    };
    UserssettingsComponent.prototype.viewuser = function () {
        var _this = this;
        var body = {
            userid: "19",
            input_role: "1"
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'view_user', body).subscribe(function (response) {
            if (response.message) {
                _this.viewusers = response.message;
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTableDataSource */](_this.viewusers);
                //console.log(this.viewusers)
            }
            else {
                console.log(response.message);
            }
        });
    };
    UserssettingsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '800px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log(result)
            if (result == undefined) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTableDataSource */](_this.viewusers);
            }
            else {
                _this.viewusers.push(result);
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTableDataSource */](_this.viewusers);
                // this.dataSource.data.push(result);
                // console.log( this.viewusers);
            }
        });
    };
    UserssettingsComponent.prototype.onView = function (ids) {
        //console.log(ids)
        this.jobEmitter.emit(ids);
        this.router.navigate(['viewuserdetails/' + ids]);
    };
    UserssettingsComponent.prototype.onEdit = function (ids) {
        this.jobEmitter.emit(ids);
        this.router.navigate(['edituserdetails/' + ids]);
    };
    UserssettingsComponent.prototype.onDelete = function (ids) {
        var _this = this;
        var retVal = confirm("Are you sure want to delete user?");
        if (retVal == true) {
            this.deleteids = ids;
            var body = void 0;
            body =
                {
                    userId: this.deleteids
                };
            this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'deleteuser', body).subscribe(function (response) {
                if (response.message) {
                    //console.log(response.message);
                    _this.viewuser();
                }
                else {
                }
            });
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], UserssettingsComponent.prototype, "jobEmitter", void 0);
    UserssettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userssettings',
            template: __webpack_require__("./src/app/userssettings/userssettings.component.html"),
            styles: [__webpack_require__("./src/app/userssettings/userssettings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__["a" /* RestService */]])
    ], UserssettingsComponent);
    return UserssettingsComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(router, restService, dialogRef, data) {
        var _this = this;
        this.router = router;
        this.restService = restService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.mobnumPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        this.nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.listPrivilege = [{
                id: 1,
                name: "Job Posting"
            },
            {
                id: 2,
                name: "Profile View"
            },
            {
                id: 3,
                name: "Resume"
            },
            {
                id: 4,
                name: "Active"
            },
            {
                id: 5,
                name: "Inactive"
            },
            {
                id: 6,
                name: "Closed"
            },
        ];
        this.isLinear = false;
        this.userid = "19";
        this.usertype = "Employer";
        this.type = "1";
        this.cmpny_id = "13";
        data = { "ff": "ff" };
        this.restService.getdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'rolesmeta').subscribe(function (response) {
            if (response.message) {
                _this.rolesmeta = response.message;
                ;
            }
            else {
                console.log(response.message);
            }
        });
        this.privelgeFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            privilege: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormArray */]([
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](false)
            ])
        });
        //console.log(this.privelgeFormGroup)
    }
    DialogOverviewExampleDialog.prototype.ngOnInit = function () {
        this.userForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern(this.nameRegex)]),
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].email, this.getEmailMessage.bind(this)]),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__global__["b" /* passwordRegex */])]),
            'mobile': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern(this.mobnumPattern)]),
            // designation: new FormControl('',[Validators.required]),
            'userrole': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]),
            'assigned': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required])
        });
    };
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
    };
    DialogOverviewExampleDialog.prototype.onCreate = function () {
        var _this = this;
        var body;
        body =
            {
                name: this.userForm.get('username').value,
                email: this.userForm.get('email').value,
                mobile_no: this.userForm.get('mobile').value,
                password: this.userForm.get('password').value,
                // designation:this.userForm.get('designation').value,
                adminid: this.userid,
                cmpny_id: this.cmpny_id,
                usertype: this.usertype,
                assigned_to: this.userForm.get('assigned').value,
                userrole: this.userForm.get('userrole').value
            };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'createuser', body).subscribe(function (response) {
            if (response.status) {
                //console.log(response);
                if (response.message.userid == null) {
                    alert(response.message.Result);
                    _this.dialogRef.close();
                }
                else {
                    var userId = response.message.userid;
                    body.ids = userId;
                    var rolesIndex = _this.rolesmeta.findIndex(function (roles) { return roles.Role_Id == body.userrole ? true : false; });
                    var assignedIndex = _this.assignmeta.findIndex(function (meta) { return meta.id == body.assigned_to ? true : false; });
                    _this.data = {
                        assigned_to: _this.assignmeta[assignedIndex].contact_name,
                        // designation : "",
                        email: body.email,
                        ids: userId,
                        mobile_no: body.mobile_no,
                        name: body.name,
                        userrole: _this.rolesmeta[rolesIndex].Role_Name
                    };
                    //console.log(this.data)
                    _this.dialogRef.close(_this.data);
                    var userPrivileges = Object.assign({}, {
                        priveleges: _this.privelgeFormGroup.controls.privilege.value.map(function (selected, i) {
                            if (selected) {
                                return {
                                    "feature": _this.listPrivilege[i].id,
                                    "feat_status": "Active",
                                    userid: userId,
                                    org_subs_id: "1",
                                };
                            }
                            else {
                                return {
                                    "feature": _this.listPrivilege[i].id,
                                    "feat_status": "Inactive",
                                    userid: userId,
                                    org_subs_id: "1",
                                };
                            }
                        })
                    });
                    //console.log("hi")
                    _this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'addeditPrivilege', userPrivileges).subscribe(function (response1) {
                        if (response1.status) {
                            // this.router.navigate(['/usersettings']);
                            //console.log(this.data)
                            _this.dialogRef.close(_this.data);
                            alert("created Sucessfully");
                        }
                        else {
                            //console.log(response1);
                            _this.errorMessage = response1.message;
                            alert("errorMessage");
                        }
                    });
                }
            }
        });
    };
    DialogOverviewExampleDialog.prototype.roleChange = function () {
        var _this = this;
        var assign;
        assign = {
            cmpny_id: this.cmpny_id,
            user_type: this.userrole,
        };
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_4__global__["a" /* baseUrl */] + 'assignedmeta', assign).subscribe(function (response) {
            if (response.message) {
                _this.assignmeta = response.message;
                ;
            }
            else {
                //console.log(response.message);
            }
        });
    };
    DialogOverviewExampleDialog.prototype.getEmailMessage = function (control) {
        if (control) {
            if (control.value.includes("@gmail.com") || control.value.includes("@yahoo.com") || control.value.includes("@orkut.com") || control.value.includes("@rediffmail.com") || control.value.includes("@hotmail.com") || control.value.includes("@outlook.com")) {
                return { "isInvalid": true };
            }
            else
                return null;
        }
        else
            return null;
    };
    DialogOverviewExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__("./src/app/userssettings/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__("./src/app/userssettings/dailog.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/userssettings/viewuserdetails/viewuserdetails.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userssettings/viewuserdetails/viewuserdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin: 20px\" *ngFor=\"let edit of edit\">\n    <h5 style=\"color:darkcyan\">User Details</h5>\n  <div class=\"row\">\n  <div class=\"col-md-4\" >\n  <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Username\" value=\"{{edit.name}}\" readonly>\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-4\" >\n  <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"User role\"  value=\"{{edit.userrole}}\" readonly>\n        </mat-form-field>\n  </div>\n  <div class=\"col-md-4\" >\n      <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Email\"  value=\"{{edit.email}}\" readonly>\n            </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n  <!-- <div class=\"col-md-4\" >\n          <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Designation\"  value=\"{{edit.designation}}\" readonly>\n                </mat-form-field>\n        </div> -->\n        <div class=\"col-md-4\" >\n              <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Mobile Number\"  value=\"{{edit.mobile_no}}\" readonly>\n                    </mat-form-field>\n            </div>\n            <div class=\"col-md-4\" >\n                  <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Assigned to\"  value=\"{{edit.assgnd_to_name}}\" readonly>\n                        </mat-form-field>\n                </div>\n  </div>\n  </mat-card>\n  \n  \n      \n    <mat-card style=\"margin: 20px\">\n        <h5 style=\"color:darkcyan\">Privileges for {{edit.name}}</h5>\n      \n  \n        <div class=\"row\" style=\"padding-left:10px\">\n            <div class=\"col-md-6\"  >\n                  <div class=\"row\" *ngFor=\"let privilege of pri; let i=index;\">\n                          <mat-checkbox [checked]=\"privilege.sts=='Active' ? true : false\" disabled>{{listPrivilege[i].name}} </mat-checkbox> \n                      </div>   \n       <!--  <div class=\"row\" >\n              <mat-checkbox [checked]=\"true\" disabled >Job Postings</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox  disabled>Profiles View</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox  disabled>Resume Download</mat-checkbox>\n          </div>\n       \n      </div>\n      <div class=\"col-md-6\" >\n          <div class=\"row\">\n              <mat-checkbox  disabled>Active Job</mat-checkbox>\n          </div>\n              <div class=\"row\">\n              <mat-checkbox  disabled>Inactive Job</mat-checkbox>\n          </div>\n          <div class=\"row\">\n              <mat-checkbox  disabled>Closed Job</mat-checkbox>\n          </div> -->\n        </div>\n      </div>\n    </mat-card>\n  "

/***/ }),

/***/ "./src/app/userssettings/viewuserdetails/viewuserdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewuserdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("./src/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__ = __webpack_require__("./src/app/RestService/restservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewuserdetailsComponent = /** @class */ (function () {
    function ViewuserdetailsComponent(router, restService, activatedRoute) {
        this.router = router;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.listPrivilege = [{
                id: 1,
                name: "Job Posting"
            },
            {
                id: 2,
                name: "Profile View"
            },
            {
                id: 3,
                name: "Resume Download"
            },
            {
                id: 4,
                name: "Active Job"
            },
            {
                id: 5,
                name: "Inactive Job"
            },
            {
                id: 6,
                name: "Closed Job"
            },
        ];
    }
    ViewuserdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.index = this.activatedRoute.snapshot.params['id']);
        var body = {
            'userid': this.index
        };
        console.log(body);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'viewsingleuser', body).subscribe(function (response) {
            if (response.message) {
                _this.edit = response.message;
                ;
                //console.log(this.edit);
            }
            else {
                console.log(response.message);
            }
        });
        var pribody = {
            'userid': this.index,
            'org_subs_id': 1
        };
        //console.log(body);
        this.restService.postdetails(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* baseUrl */] + 'viewuserpri', pribody).subscribe(function (response) {
            if (response.message) {
                _this.pri = response.message;
                //console.log(this.pri);
            }
            else {
                console.log(response.message);
            }
        });
    };
    ViewuserdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewuserdetails',
            template: __webpack_require__("./src/app/userssettings/viewuserdetails/viewuserdetails.component.html"),
            styles: [__webpack_require__("./src/app/userssettings/viewuserdetails/viewuserdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__RestService_restservice__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ViewuserdetailsComponent);
    return ViewuserdetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return passwordRegex; });

var baseUrl = 'http://192.168.2.49:2200/';
var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__ = __webpack_require__("./node_modules/core-js/es6/weak-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_web_animations_js__ = __webpack_require__("./node_modules/web-animations-js/web-animations.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_web_animations_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/














/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
 // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map