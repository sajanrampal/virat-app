(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-deshboard-module"],{

/***/ "YXIl":
/*!**************************************************************************!*\
  !*** ./apps/virat-frontend-app/src/app/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* eslint-disable @typescript-eslint/no-empty-function */



class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.sajan = 'sajan';
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["virat-app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'virat-app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "diKn":
/*!***********************************************************************!*\
  !*** ./apps/virat-frontend-app/src/app/dashboard/deshboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "YXIl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                    children: [
                        {
                            path: 'home',
                            loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~login-login-module~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "qpJx")).then(m => m.HomeModule)
                        },
                        {
                            path: 'tasks',
                            loadChildren: () => Promise.all(/*! import() | pages-tasks-tasks-module */[__webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("pages-tasks-tasks-module")]).then(__webpack_require__.bind(null, /*! ./pages/tasks/tasks.module */ "NGDy")).then(m => m.TasksModule)
                        },
                        {
                            path: 'task',
                            loadChildren: () => Promise.all(/*! import() | pages-task-task-module */[__webpack_require__.e("default~login-login-module~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("pages-task-task-module")]).then(__webpack_require__.bind(null, /*! ./pages/task/task.module */ "mGpS")).then(m => m.TaskModule)
                        },
                        {
                            path: '',
                            redirectTo: 'home'
                        }
                    ]
                    //   {
                    //     path: 'decision-trees',
                    //     loadChildren:
                    //       './pages/decision-trees/decision-trees.module#DecisionTreesModule'
                    //   },
                    //   {
                    //     path: 'faqs',
                    //     loadChildren: './pages/faqs/faqs.module#FaqsModule'
                    //   },
                    //   {
                    //     path: 'picture-guides',
                    //     loadChildren:
                    //       './pages/picture-guides/picture-guides.module#PictureGuidesModule'
                    //   },
                    //   {
                    //     path: 'home',
                    //     loadChildren: './pages/home/home.module#HomeModule'
                    //   },
                    //   {
                    //     path: 'articles',
                    //     loadChildren: './pages/articles/articles.module#ArticlesModule'
                    //   },
                    //   {
                    //     path: 'collabs',
                    //     loadChildren: './pages/collabs/collabs.module#CollabsModule'
                    //   },
                    //   {
                    //     path: 'profile',
                    //     loadChildren: './pages/profile/profile.module#ProfileModule'
                    //   },
                    //   {
                    //     path: 'comparisons',
                    //     loadChildren:
                    //       './pages/comparisons/comparisons.module#ComparisonsModule'
                    //   },
                    //   {
                    //     path: 'lms',
                    //     loadChildren: './pages/lms/lms.module#LmsModule',
                    //     canLoad: [LmsGuardService]
                    //   },
                    //   {
                    //     path: '',
                    //     redirectTo: 'home'
                    //   }
                    // ]
                }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
                            children: [
                                {
                                    path: 'home',
                                    loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~login-login-module~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "qpJx")).then(m => m.HomeModule)
                                },
                                {
                                    path: 'tasks',
                                    loadChildren: () => Promise.all(/*! import() | pages-tasks-tasks-module */[__webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("pages-tasks-tasks-module")]).then(__webpack_require__.bind(null, /*! ./pages/tasks/tasks.module */ "NGDy")).then(m => m.TasksModule)
                                },
                                {
                                    path: 'task',
                                    loadChildren: () => Promise.all(/*! import() | pages-task-task-module */[__webpack_require__.e("default~login-login-module~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module~pages-tasks-tasks-module"), __webpack_require__.e("default~pages-home-home-module~pages-task-task-module"), __webpack_require__.e("pages-task-task-module")]).then(__webpack_require__.bind(null, /*! ./pages/task/task.module */ "mGpS")).then(m => m.TaskModule)
                                },
                                {
                                    path: '',
                                    redirectTo: 'home'
                                }
                            ]
                            //   {
                            //     path: 'decision-trees',
                            //     loadChildren:
                            //       './pages/decision-trees/decision-trees.module#DecisionTreesModule'
                            //   },
                            //   {
                            //     path: 'faqs',
                            //     loadChildren: './pages/faqs/faqs.module#FaqsModule'
                            //   },
                            //   {
                            //     path: 'picture-guides',
                            //     loadChildren:
                            //       './pages/picture-guides/picture-guides.module#PictureGuidesModule'
                            //   },
                            //   {
                            //     path: 'home',
                            //     loadChildren: './pages/home/home.module#HomeModule'
                            //   },
                            //   {
                            //     path: 'articles',
                            //     loadChildren: './pages/articles/articles.module#ArticlesModule'
                            //   },
                            //   {
                            //     path: 'collabs',
                            //     loadChildren: './pages/collabs/collabs.module#CollabsModule'
                            //   },
                            //   {
                            //     path: 'profile',
                            //     loadChildren: './pages/profile/profile.module#ProfileModule'
                            //   },
                            //   {
                            //     path: 'comparisons',
                            //     loadChildren:
                            //       './pages/comparisons/comparisons.module#ComparisonsModule'
                            //   },
                            //   {
                            //     path: 'lms',
                            //     loadChildren: './pages/lms/lms.module#LmsModule',
                            //     canLoad: [LmsGuardService]
                            //   },
                            //   {
                            //     path: '',
                            //     redirectTo: 'home'
                            //   }
                            // ]
                        }
                    ]),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-deshboard-module.js.map