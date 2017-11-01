webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_drive_main_drive_component__ = __webpack_require__("../../../../../src/app/main-drive/main-drive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_tags_config_tags_component__ = __webpack_require__("../../../../../src/app/config-tags/config-tags.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'mainDrive' },
    { path: 'mainDrive', component: __WEBPACK_IMPORTED_MODULE_2__main_drive_main_drive_component__["a" /* MainDriveComponent */] },
    { path: 'mainDrive/:drv', component: __WEBPACK_IMPORTED_MODULE_2__main_drive_main_drive_component__["a" /* MainDriveComponent */] },
    { path: 'configtag', component: __WEBPACK_IMPORTED_MODULE_3__config_tags_config_tags_component__["a" /* ConfigTagsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".HolyGrail {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.HolyGrail-content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.HolyGrail-nav, .HolyGrail-ads {\r\n  /* 12em is the width of the columns */\r\n   -webkit-box-flex: 0;\r\n       -ms-flex: 0 0 12em;\r\n           flex: 0 0 12em; \r\n}\r\n\r\n.HolyGrail-nav {\r\n  /* put the nav on the left */\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n}\r\n.HolyGrail,\r\n.HolyGrail-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.HolyGrail-nav {\r\n  -webkit-box-ordinal-group: 0;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .HolyGrail-body {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n  }\r\n  .HolyGrail-nav, .HolyGrail-ads {\r\n    /* 12em is the width of the columns */\r\n     -webkit-box-flex: 0;\r\n         -ms-flex: 0 0 12em;\r\n             flex: 0 0 12em; \r\n  }\r\n}\r\n\r\nnav,aside{\r\n    background-color:#7e57c2;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-main>\r\n</app-main> -->\r\n\r\n\r\n<div class=\"HolyGrail\">\r\n    <header>\r\n        <mat-toolbar color=\"primary\">\r\n            <span>Multiple Drives</span>\r\n        </mat-toolbar>\r\n    </header>\r\n    <div class=\"HolyGrail-body\">\r\n        <main class=\"HolyGrail-content\">\r\n            <router-outlet>\r\n\r\n            </router-outlet>\r\n\r\n        </main>\r\n        <nav class=\"HolyGrail-nav\">\r\n            <app-drives-nav></app-drives-nav>\r\n        </nav>\r\n        <!-- <aside class=\"HolyGrail-ads\">Rightside if wanted</aside> -->\r\n    </div>\r\n    <footer>\r\n        <mat-toolbar color=\"primary\">\r\n            <span>General Electric</span>\r\n        </mat-toolbar>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_hdm_service__ = __webpack_require__("../../../../../src/app/service/hdm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_read_input_service__ = __webpack_require__("../../../../../src/app/service/read-input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__drives_nav_drives_nav_component__ = __webpack_require__("../../../../../src/app/drives-nav/drives-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_router_main_router_component__ = __webpack_require__("../../../../../src/app/main-router/main-router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_drive_main_drive_component__ = __webpack_require__("../../../../../src/app/main-drive/main-drive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_tags_config_tags_component__ = __webpack_require__("../../../../../src/app/config-tags/config-tags.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__drives_nav_drives_nav_component__["a" /* DrivesNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__main_router_main_router_component__["a" /* MainRouterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_drive_main_drive_component__["a" /* MainDriveComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_drive_main_drive_component__["b" /* DialogChangeValue */],
            __WEBPACK_IMPORTED_MODULE_14__config_tags_config_tags_component__["a" /* ConfigTagsComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__main_drive_main_drive_component__["b" /* DialogChangeValue */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatTableModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_hdm_service__["a" /* HDMService */], __WEBPACK_IMPORTED_MODULE_4__service_read_input_service__["a" /* ReadInputService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/config-tags/config-tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\r\n  overflow: auto;\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/config-tags/config-tags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/config-tags/config-tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigTagsComponent; });
/* unused harmony export ExampleDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigTagsComponent = (function () {
    function ConfigTagsComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    ConfigTagsComponent.prototype.ngOnInit = function () {
        data[0].position = 15;
    };
    return ConfigTagsComponent;
}());
ConfigTagsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-config-tags',
        template: __webpack_require__("../../../../../src/app/config-tags/config-tags.component.html"),
        styles: [__webpack_require__("../../../../../src/app/config-tags/config-tags.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfigTagsComponent);

var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data);
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["d" /* DataSource */]));

//# sourceMappingURL=config-tags.component.js.map

/***/ }),

/***/ "../../../../../src/app/drives-nav/drives-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drNav{\r\n    padding:4px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    vertical-align:middle;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\nbutton{\r\n    width:100%;\r\n    text-align: left;\r\n}\r\n\r\n.drMain {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-preferred-size: 0;\r\n        flex-basis: 0;\r\n    /* ... */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drives-nav/drives-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"drNav\">\r\n  <div class=\"drMain\" *ngFor=\"let d of drives;let i=index\"><button mat-button [routerLink]=\"['/mainDrive', i]\">{{d.driveDisplayText}}-{{d.ipAddress}}</button></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/drives-nav/drives-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__ = __webpack_require__("../../../../../src/app/service/read-input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_drive__ = __webpack_require__("../../../../../src/app/model/drive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrivesNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrivesNavComponent = (function () {
    function DrivesNavComponent(readInputService) {
        this.readInputService = readInputService;
    }
    DrivesNavComponent.prototype.ngOnInit = function () {
        this.getDrivesFromService();
    };
    DrivesNavComponent.prototype.getDrivesFromService = function () {
        var _this = this;
        this.readInputService.getDrives().subscribe(function (data) {
            var drivesFromJson = data.json().drives;
            //console.log(drivesFromJson);
            _this.drives = __WEBPACK_IMPORTED_MODULE_2__model_drive__["a" /* Drive */].getDrivesFromJson(drivesFromJson);
            // console.log(this.drives);
            // this.drives.forEach(element => {
            //   console.log(element.getHDMReadXml());
            //   console.log(element.getUrl());
            // });
        });
    };
    return DrivesNavComponent;
}());
DrivesNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-drives-nav',
        template: __webpack_require__("../../../../../src/app/drives-nav/drives-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drives-nav/drives-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__["a" /* ReadInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__["a" /* ReadInputService */]) === "function" && _a || Object])
], DrivesNavComponent);

var _a;
//# sourceMappingURL=drives-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-drive/dialog-component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.displayText}}</h1>\r\n<div mat-dialog-content>\r\n    <!-- <p>New Value for {{data.id}}</p> -->\r\n    <mat-form-field>\r\n        <input matInput tabindex=\"1\" mdInput type=\"number\" min=\"{{data.minValue}}\" placeholder=\"New Value for {{data.id}}\" [(ngModel)]=\"data.setValue\">\r\n        <mat-hint *ngIf=\"getErrorText(data)\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{getErrorText(data)}}</mat-hint>\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [disabled]=\"getErrorText(data)!=''\" [mat-dialog-close]=\"data\" tabindex=\"2\">Save</button>\r\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-drive/main-drive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.flexChild {\r\n -ms-flex-preferred-size: 0;\r\n     flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n\r\n\r\n.flexParent{\r\n    width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n\r\n}\r\n\r\n.childEnd{\r\n   -ms-flex-line-pack: end;\r\n       align-content: flex-end;\r\n}\r\nbutton{\r\n    width:100%;\r\n    min-width: 310px;\r\n    text-align: left;\r\n            /* padding-block-end: true;\r\n            border-left-style: solid;\r\n            border-left-color: #7e57c2;\r\n            border-bottom-style: solid; */\r\n\r\n}\r\n\r\n/* .gridVal{\r\n  background: red;\r\n  width: 310px; \r\n}\r\n\r\n\r\n\r\nmd-grid-list{\r\n  background: yellow;\r\n}\r\n\r\nmd-grid-tile{\r\n    min-width: 310px; \r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-drive/main-drive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexParent\" *ngIf=\"resource\" id=\"parent\">\r\n  <div class=\"flexChild\" *ngFor=\"let v of resource.variables \">\r\n    <button mat-raised-button (click)=\"openDialog(v) \">\r\n    <mat-grid-list  class=\"flexParent\" cols=\"4 \" rowHeight=\"40px \">\r\n      <mat-grid-tile class=\"flexChild\">\r\n        {{v.displayText}}\r\n      </mat-grid-tile>\r\n      <mat-grid-tile  class=\"flexChild\">\r\n        {{v.id}}\r\n      </mat-grid-tile>\r\n      <mat-grid-tile  class=\"flexChild\">\r\n        <b>{{v.value}}</b>\r\n      </mat-grid-tile>\r\n            <mat-grid-tile class=\"flexChild childEnd\">\r\n              <i  *ngIf=\"v.canWrite\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" style=\"color:green\"></i>\r\n              <i *ngIf=\"!v.canWrite\" class=\"fa fa-eye\" aria-hidden=\"true\" style=\"color:gray\"></i>\r\n            </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- <mat-accordion class=\"flexParent \" *ngIf=\"resource \">\r\n  <mat-expansion-panel class=\"flexChild \" *ngFor=\"let v of resource.variables \" hideToggle=\"true \" (opened)=\"openPanel=v.id\r\n  \" (click)=\"openDialog(v) \"\r\n    [expanded]=\"v.id===openPanel \" [disabled]=\"!v.canWrite \">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        {{v.displayText}}\r\n      </mat-panel-title>\r\n      <mat-panel-title>\r\n        {{v.id}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <b>{{v.value}}</b>\r\n        <mat-icon *ngIf=\"v.canWrite \">arrow_drop_down</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header> -->\r\n<!-- \r\n    <table class=\"example-full-width \" cellspacing=\"0 \" *ngIf=\"v.canWrite \">\r\n      <tr>\r\n        <td>\r\n          <mat-form-field class=\"example-full-width \">\r\n            <input mdInput type=\"number \" min=\"{{v.minValue}} \" placeholder=\"New Value for {{v.id}} \" [(ngModel)]=\"v.setValue \">\r\n            <mat-hint *ngIf=\"getErrorText(v) \" [ngStyle]=\"{ 'color': 'red'} \" align=\"start \">{{getErrorText(v)}}</mat-hint>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <button mat-button color=\"primary \" (click)=\"openDialog(v) \" [disabled]=\"getErrorText(v)!='' \">Save</button>\r\n        </td>\r\n      </tr>\r\n    </table> -->\r\n<!-- </mat-expansion-panel>\r\n</mat-accordion> -->\r\n\r\n<!-- <ol>\r\n  <li>\r\n    <mat-form-field>\r\n      <input mdInput [(ngModel)]=\"name \" placeholder=\"What 's your name?\">\r\n    </mat-form-field>\r\n  </li>\r\n  <li>\r\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n  </li>\r\n  <li *ngIf=\"animal\">\r\n    You chose: <i>{{animal}}</i>\r\n  </li>\r\n</ol> -->"

/***/ }),

/***/ "../../../../../src/app/main-drive/main-drive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__ = __webpack_require__("../../../../../src/app/service/read-input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_drive__ = __webpack_require__("../../../../../src/app/model/drive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_hdm_service__ = __webpack_require__("../../../../../src/app/service/hdm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_variable__ = __webpack_require__("../../../../../src/app/model/variable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDriveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogChangeValue; });
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







var MainDriveComponent = (function () {
    function MainDriveComponent(readInputService, hdmservice, route, dialog) {
        this.readInputService = readInputService;
        this.hdmservice = hdmservice;
        this.route = route;
        this.dialog = dialog;
        this.dIndex = 0;
        this.openPanel = '';
    }
    MainDriveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDrivesFromService();
        this.dIndex = 0;
        this.route.params.subscribe(function (params) {
            _this.dIndex = params['drv']; // (+) converts string 'id' to a number
            if (_this.drives && _this.dIndex)
                _this.resource = _this.drives[_this.dIndex].resources[0];
            _this.openPanel = '';
            // In a real app: dispatch action to load the details here.
        });
    };
    MainDriveComponent.prototype.getDrivesFromService = function () {
        var _this = this;
        this.readInputService.getDrives().subscribe(function (data) {
            var drivesFromJson = data.json().drives;
            //console.log(drivesFromJson);
            _this.drives = __WEBPACK_IMPORTED_MODULE_2__model_drive__["a" /* Drive */].getDrivesFromJson(drivesFromJson);
            // console.log(this.drives);
            // this.drives.forEach(element => {
            //   console.log(element.getHDMReadXml());
            //   console.log(element.getUrl());
            // });
            if (_this.drives && _this.dIndex) {
                _this.resource = _this.drives[_this.dIndex].resources[0];
                _this.inputHdmString = _this.resource.getHDM();
                _this.getValuesFromHDM();
            }
        });
    };
    MainDriveComponent.prototype.getValuesFromHDM = function (fromTimeout) {
        var _this = this;
        if (fromTimeout === void 0) { fromTimeout = 0; }
        this.hdmservice.Call_HDM('', this.inputHdmString).subscribe(function (data) {
            var str = data._body;
            _this.resource.variables.forEach(function (element) {
                var prefix = '"' + element.id + '">';
                var re = new RegExp(prefix + "-?\\d*[.]?\\d*", "gi");
                var value = str.match(re)[0].replace(prefix, '');
                if (value)
                    element.value = value;
                if (fromTimeout == 0)
                    element.setValue = value;
            });
            //console.log(this.resource.getHDM());
            setTimeout(function () { return _this.getValuesFromHDM(1); }, 1000);
        });
    };
    MainDriveComponent.prototype.getshowhide = function (v) {
        if (v.canWrite)
            return '';
        else
            return 'false';
    };
    MainDriveComponent.prototype.setValue = function (v) {
        var _this = this;
        var writeHdmString = this.resource.getHDMWrite(v);
        this.hdmservice.Call_HDM('', writeHdmString).subscribe(function (data) { _this.openPanel = ''; console.log(data._body); });
        //console.log(writeHdmString);
    };
    MainDriveComponent.prototype.openDialog = function (v) {
        if (!v.canWrite)
            return;
        v.setValue = v.value;
        var dialogRef = this.dialog.open(DialogChangeValue, {
            //width: '310px',
            data: v
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(v);
            // this.animal = result;
        });
    };
    return MainDriveComponent;
}());
MainDriveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-main-drive',
        template: __webpack_require__("../../../../../src/app/main-drive/main-drive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-drive/main-drive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__["a" /* ReadInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_read_input_service__["a" /* ReadInputService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_hdm_service__["a" /* HDMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_hdm_service__["a" /* HDMService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatDialog */]) === "function" && _d || Object])
], MainDriveComponent);

////////////////
var DialogChangeValue = (function () {
    function DialogChangeValue(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data.canWrite);
    }
    DialogChangeValue.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogChangeValue.prototype.getErrorText = function (v) {
        if (v.value == v.setValue)
            return '  ';
        if (v.maxValue == v.minValue)
            return '';
        if (v.setValue < v.minValue)
            return 'Min value is ' + v.minValue;
        if (v.setValue > v.maxValue)
            return 'Max value is ' + v.maxValue;
        return '';
    };
    return DialogChangeValue;
}());
DialogChangeValue = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'dialog-overview-example-dialog',
        template: __webpack_require__("../../../../../src/app/main-drive/dialog-component.html"),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__model_variable__["a" /* Variable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__model_variable__["a" /* Variable */]) === "function" && _f || Object])
], DialogChangeValue);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=main-drive.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  main-router works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-router/main-router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainRouterComponent = (function () {
    function MainRouterComponent() {
    }
    MainRouterComponent.prototype.ngOnInit = function () {
    };
    return MainRouterComponent;
}());
MainRouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-main-router',
        template: __webpack_require__("../../../../../src/app/main-router/main-router.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-router/main-router.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainRouterComponent);

//# sourceMappingURL=main-router.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmain {\r\n\r\n    display: -webkit-box;\r\n\r\n    display: -ms-flexbox;\r\n\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex:1;\r\n        -ms-flex-positive:1;\r\n            flex-grow:1;\r\n}\r\n\r\narticle {\r\n\r\n    -webkit-box-flex:1;\r\n\r\n        -ms-flex:1;\r\n\r\n            flex:1\r\n    /*order: -1;*/\r\n}\r\n\r\nnav\r\n {\r\n   /* width:310px; */\r\n\r\n}\r\n\r\n#bodycontent{\r\n  min-height:100vh;\r\n  width:100vw;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n\r\nnav {\r\n     background-color:#7e57c2;\r\n}\r\n\r\n/*@media screen and (max-width: 500px) {\r\n    \r\n    main {\r\n        flex-direction: column;\r\n    }\r\n    \r\n}*/\r\n\r\n\r\n\r\n\r\nfooter{\r\n \r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-expansion-panel-header,\r\n.mat-expansion-panel-header-description {\r\n    color: #221D1D !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bodycontent\">\r\n  <header class=\"page-header\">\r\n    <mat-toolbar color=\"primary\">\r\n      <span>Multiple Drives</span>\r\n\r\n      <!-- This fills the remaining space of the current row -->\r\n\r\n    </mat-toolbar>\r\n  </header>\r\n\r\n  <main class=\"page-content\" *ngIf=\"resource\">\r\n    <nav class=\"content-navigation\">\r\n      <h1>{{resource.resourceName}}</h1>\r\n    </nav>\r\n    <article class=\"content-article\">\r\n      <!-- <h1 *ngFor=\"let v of resource.variables\">{{v.displayText}} - {{v.id}} - {{v.value}}</h1>\r\n    </article> -->\r\n      <mat-accordion class=\"example-headers-align\">\r\n        <mat-expansion-panel *ngFor=\"let v of resource.variables\" hideToggle=\"true\" (opened)=\"openPanel=v.id\" [expanded]=\"v.id===openPanel\"\r\n          [disabled]=\"!v.canWrite\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{v.displayText}}\r\n            </mat-panel-title>\r\n            <mat-panel-title>\r\n              {{v.id}}\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              <b>{{v.value}}</b>\r\n              <mat-icon *ngIf=\"v.canWrite\">arrow_drop_down</mat-icon>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n          <table class=\"example-full-width\" cellspacing=\"0\" *ngIf=\"v.canWrite\">\r\n            <tr>\r\n              <td>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input mdInput type=\"number\" min=\"{{v.minValue}}\" placeholder=\"New Value for {{v.id}}\" [(ngModel)]=\"v.setValue\">\r\n                  <mat-hint *ngIf=\"getErrorText(v)\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{getErrorText(v)}}</mat-hint>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <button mat-button color=\"primary\" (click)=\"setValue(v)\" [disabled]=\"getErrorText(v)!=''\">Save</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </article>\r\n  </main>\r\n\r\n  <footer class=\"page-footer\">\r\n    <mat-toolbar color=\"primary\">\r\n      <span>General Electric</span>\r\n\r\n\r\n    </mat-toolbar>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hdm_service__ = __webpack_require__("../../../../../src/app/service/hdm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_read_input_service__ = __webpack_require__("../../../../../src/app/service/read-input.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(hdmservice, readInputService) {
        this.hdmservice = hdmservice;
        this.readInputService = readInputService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getResourceFromService();
        this.openPanel = '';
    };
    MainComponent.prototype.getResourceFromService = function () {
        // this.readInputService.getResource().subscribe(data => {
        //   let resource = data.json() as Resource;
        //   console.log(resource);
        //   this.resource = new Resource(resource.resourceName, resource.service);
        //   resource.variables.forEach(element => {
        //     this.resource.variables.push(new Variable(element.displayText, element.dataType, element.id, element.canWrite, element.minValue, element.maxValue));
        //   });
        //   this.inputHdmString = this.resource.getHDM();
        //   this.getValuesFromHDM();
        // });
    };
    MainComponent.prototype.getValuesFromHDM = function (fromTimeout) {
        var _this = this;
        if (fromTimeout === void 0) { fromTimeout = 0; }
        this.hdmservice.Call_HDM('', this.inputHdmString).subscribe(function (data) {
            var str = data._body;
            _this.resource.variables.forEach(function (element) {
                var prefix = '"' + element.id + '">';
                var re = new RegExp(prefix + "-?\\d*[.]?\\d*", "gi");
                var value = str.match(re)[0].replace(prefix, '');
                if (value)
                    element.value = value;
                if (fromTimeout == 0)
                    element.setValue = value;
            });
            //console.log(this.resource.getHDM());
            setTimeout(function () { return _this.getValuesFromHDM(1); }, 1000);
        });
    };
    MainComponent.prototype.getshowhide = function (v) {
        if (v.canWrite)
            return '';
        else
            return 'false';
    };
    MainComponent.prototype.setValue = function (v) {
        var _this = this;
        var writeHdmString = this.resource.getHDMWrite(v);
        this.hdmservice.Call_HDM('', writeHdmString).subscribe(function (data) { _this.openPanel = ''; console.log(data._body); });
        //console.log(writeHdmString);
    };
    MainComponent.prototype.getErrorText = function (v) {
        if (v.value == v.setValue)
            return '  ';
        if (v.maxValue == v.minValue)
            return '';
        if (v.setValue < v.minValue)
            return 'Min value is ' + v.minValue;
        if (v.setValue > v.maxValue)
            return 'Max value is ' + v.maxValue;
        return '';
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_hdm_service__["a" /* HDMService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_hdm_service__["a" /* HDMService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_read_input_service__["a" /* ReadInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_read_input_service__["a" /* ReadInputService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/drive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__("../../../../../src/app/model/resource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variable__ = __webpack_require__("../../../../../src/app/model/variable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drive; });


var Drive = (function () {
    function Drive(driveDisplayText, ipAddress) {
        this.driveDisplayText = driveDisplayText;
        this.ipAddress = ipAddress;
        this.resources = Array();
    }
    Drive.getDrivesFromJson = function (data) {
        var _this = this;
        var drives = Array();
        data.forEach(function (driveFromJson) {
            var drive = new Drive(driveFromJson.driveDisplayText, driveFromJson.ipAddress);
            drive.resources = _this.getResourcesFromDriveJson(driveFromJson.resources);
            drives.push(drive);
        });
        return drives;
    };
    Drive.getResourcesFromDriveJson = function (data) {
        var resources = Array();
        data.forEach(function (resourceFromJson) {
            var resource = new __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */](resourceFromJson.resourceName, resourceFromJson.service);
            resourceFromJson.variables.forEach(function (element) {
                resource.variables.push(new __WEBPACK_IMPORTED_MODULE_1__variable__["a" /* Variable */](element.displayText, element.dataType, element.id, element.canWrite, element.minValue, element.maxValue));
            });
            resources.push(resource);
        });
        return resources;
    };
    Drive.prototype.getUrl = function () {
        return 'http://' + this.ipAddress + '/peccgi/system/driver/HDMDRV?request=byPostData';
    };
    Drive.prototype.getHDMReadXml = function () {
        var resourcesXML = '';
        this.resources.forEach(function (element) {
            resourcesXML += element.getResource();
        });
        return '<hdm>' + resourcesXML + '</hdm>';
    };
    return Drive;
}());

//# sourceMappingURL=drive.js.map

/***/ }),

/***/ "../../../../../src/app/model/resource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
var Resource = (function () {
    /**
     *
     */
    function Resource(resourceName, service) {
        this.resourceName = resourceName;
        this.service = service;
        this.variables = Array();
    }
    Resource.prototype.getResource = function () {
        var returnVal = '';
        this.variables.forEach(function (element) {
            returnVal += element.getTag();
        });
        return '<Request resource="' + this.resourceName + '" service= "' + this.service + '" > ' + returnVal + '</Request>';
    };
    Resource.prototype.getHDM = function () {
        return '<hdm>' + this.getResource() + '</hdm>';
    };
    Resource.prototype.getResourceWrite = function (v) {
        return '<Request resource="' + this.resourceName + '" service= "setValues" > ' + v.getWriteTag() + '</Request>';
    };
    Resource.prototype.getHDMWrite = function (v) {
        return '<hdm>' + this.getResourceWrite(v) + '</hdm>';
    };
    return Resource;
}());

//# sourceMappingURL=resource.js.map

/***/ }),

/***/ "../../../../../src/app/model/variable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Variable; });
var Variable = (function () {
    /**
     *
     */
    function Variable(displayText, dataType, id, canWrite, minValue, maxValue, value) {
        if (canWrite === void 0) { canWrite = false; }
        if (minValue === void 0) { minValue = 0; }
        if (maxValue === void 0) { maxValue = 0; }
        if (value === void 0) { value = 0; }
        this.displayText = displayText;
        this.dataType = dataType;
        this.id = id;
        this.value = value;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.canWrite = canWrite;
    }
    Variable.prototype.getTag = function () {
        return '<Var dt="' + this.dataType + '" id= "' + this.id + '" >' + this.value + '</Var>';
    };
    Variable.prototype.getWriteTag = function () {
        return '<Var dt="' + this.dataType + '" id= "' + this.id + '" >' + this.setValue + '</Var>';
    };
    return Variable;
}());

//# sourceMappingURL=variable.js.map

/***/ }),

/***/ "../../../../../src/app/service/hdm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HDMService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HDMService = (function () {
    function HDMService(http) {
        this.http = http;
        //private _barUrl = 'http://10.0.0.85/peccgi/system/driver/HDMDRV?request=byPostData';
        this._barUrl = 'd1/';
    }
    HDMService.prototype.Call_HDM = function (ip_addr_str, xml_str) {
        return this.http.post(this._barUrl, xml_str);
    };
    return HDMService;
}());
HDMService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HDMService);

var _a;
//# sourceMappingURL=hdm.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/read-input.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadInputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadInputService = (function () {
    function ReadInputService(http) {
        this.http = http;
    }
    ReadInputService.prototype.getDrives = function () {
        return this.http.get('input.json');
    };
    return ReadInputService;
}());
ReadInputService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReadInputService);

var _a;
//# sourceMappingURL=read-input.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map