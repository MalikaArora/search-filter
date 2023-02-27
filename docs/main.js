"use strict";
(self["webpackChunkangular_text_search_highlight"] = self["webpackChunkangular_text_search_highlight"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/filter.pipe */ 9216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/highlight.directive */ 2057);





function AppComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8)(1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_span_7_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const platform_r3 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](platform_r3.selected = $event); })("change", function AppComponent_span_7_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const platform_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onPlatformChecked(platform_r3.selected, platform_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattributeInterpolate1"]("id", "check-box-", platform_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", platform_r3.selected)("ngModel", platform_r3.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", platform_r3.name, " ");
} }
function AppComponent_ng_container_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r7.searchText)("content", a_r8.category)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r8.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r7.searchText)("content", a_r8.query)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r8.query, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r7.searchText)("content", a_r8.reply)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r8.reply, " ");
} }
function AppComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_16_tr_1_Template, 7, 15, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.searchSettings);
} }
function AppComponent_ng_container_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const a_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r10.searchText)("content", a_r11.category)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r11.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r10.searchText)("content", a_r11.query)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r11.query, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("searchedWord", ctx_r10.searchText)("content", a_r11.reply)("classToApply", "font-weight-bold")("setTitle", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", a_r11.reply, " ");
} }
function AppComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_17_tr_1_Template, 7, 15, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.data);
} }
class AppComponent {
    constructor() {
        this.filterPipe = new _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe();
        this.title = 'angular-text-search-highlight';
        this.platformList2 = [];
        this.platformList = new Set();
        this.searchIsOn = false;
        this.searchSettings = [];
        this.inputSearchSettings = [];
        this.categories = [];
        this.searchText = '';
        this.filteredData = '';
        this.platformFilter = [];
        this.data = [
            {
                "category": "Modem",
                "query": "Why do use the terminology CM1X?",
                "reply": "Because we have two variants of Modem:  <br/> With Internal Antenna (CM100) &amp; With External Antenna (CM110)"
            },
            {
                "category": "Internet",
                "query": "Will CM1X although designed to work with 4G, with still work in regions wherein ISPs don’t offer 4G services?",
                "reply": "Yes, CM1X will work with 2G, 3G or LTE (4G) but with subordinate performance and lower speed and with slower data transmission"
            },
            {
                "category": "Machines",
                "query": "How is the Fuel Consumption monitoried for CAN &amp; non-CAN\nMachines?",
                "reply": "We can monitor the fuel consumption only for the CAN Machines. <br /> For non-CAN Machines, as we receive only analog signals, we will report only Fuel Level on the\nCustomer Subscription as it is not possible to report Fuel Consumption."
            },
            {
                "category": "Modem",
                "query": "What is the diffence between CM1X and P&amp;CM Modem?",
                "reply": "Description: Connectivity Module; Processing &amp; Connectivity Module<br />Internet:  4G; 4G<br />Supplier: Tierra (Topcon); Actia<br />Parameters: Max 40 parameters on Fleet Portal &amp; UCR; Max 40 parameters on Fleet portal, 80+ parameters on UCR<br />Compatibilty: CAN \/ non-CAN machine ; CAN machine<br />Connectivity: Wi-Fi \/ Bluetooth; Wi-Fi \/ Bluetooth<br />Remote Assistance Feature: No; Yes (with RST)"
            },
            {
                "category": "Modem",
                "query": "Is it possible for Dealer or customer to swap Modems between Machines?",
                "reply": "No, they don’t because not allowed by CNHi, if someone will do the exchange the modem will be “backlisted” and not reconfigured."
            },
            {
                "category": "Bosch Telematics",
                "query": "Why did we disconnect BOSCH Portal?",
                "reply": "They discontinued their Product Line related to Telematics"
            },
            {
                "category": "Bosch Telematics",
                "query": "What is the solution for existing BOSCH Customers?",
                "reply": "They will gradually need to graduate to the new Telematics"
            },
            {
                "category": "Modem",
                "query": "Which machines will be fitted with CM1X ?",
                "reply": "As of now, all machines in 2023 are planned to rolled-out with CM1X Telematics -Except 450DX"
            },
            {
                "category": "Subscription",
                "query": "What is the subscription cost for 2nd and third year?&nbsp;",
                "reply": "We are yet to decide on this, but the &nbsp;approximate cost will $80-$90 per annum. <br/> We will come up with an attractive plan"
            },
            {
                "category": "Mobile Application",
                "query": "Will there be a Mobile Application for Customers?",
                "reply": "Yes, we are planning to have the same launched by end of 2023"
            },
            {
                "category": "Benefits",
                "query": "How will be the customer benefit?",
                "reply": "Equipment Utilization <br />Idle Time <br /> Fuel Reporting <br />Preventive Maintenance Management<br />Equipment location (for operational dispatch, service\/repair\/theft prevention)\nEquipment availability for jobs<br />Pre and Post Inspection gaps and deficiencies, and manual processes<br />Confirmation of asset use and location, i.e. change orders, billable work stoppage"
            },
            {
                "category": "Benefits",
                "query": "Can the benefits be converted into currency ?",
                "reply": "It has been proven in the real-world that Telematics can bring-in additional revenue related to Parts and Service and also gain customer loyalty due to increased touch points. For CNH, it will all depend on the seriousness and intensity with which we educate our dealer and end-customer on the features of Telematics."
            },
            {
                "category": "Customer Portal",
                "query": "If customer wants his machine not visible, what to do ?",
                "reply": "The customer can see his machine in SiteWatch and will have a choice to enable or disable the machine on SiteWatch. {{withBreaksHtml}} However, the machine will be visible to dealer and CNH Industrial even though the SiteWatch subscription is not renewed."
            },
            {
                "category": "SMS",
                "query": "Will the customer get an SMS. if any abnormality ?",
                "reply": "We can setup alarms and alerts through mails and not through SMS."
            },
            {
                "category": "Benefits",
                "query": "How will the dealer Get benefitted from telematics ?",
                "reply": "The dealer organizations that engage and actively participate with Telematics see greater opportunities and recognize greater profit <br/> Increased customer touch points\nMore efficient rental fleet monitoring and billing\nMaintenance alerts and more efficient scheduling\nReduced data collection costs\nMore efficient troubleshooting\nOpportunity to up-sell and showcase new products\nIncreased parts sales\nIncreased service department revenue\nHigher machine resale with documented care\nIncreased customer satisfaction"
            },
            {
                "category": "Modem",
                "query": "Will Telematics work in remote area ?",
                "reply": "Yes, provided we have internet connectivity in the remote area. If the internet connectivity is not there, then the data will be stored in Modem and the data will be transmitted as soon as the machine shifts to the location where the internet connection is active."
            }
        ];
    }
    ngOnInit() {
        this.searchOriginalSettings = this.data;
        this.categories = [...new Set(this.data.map(item => item.category))];
        console.log(this.categories);
        for (let category of this.categories) {
            this.platformFilter.push({ "name": category, "selected": false });
        }
    }
    onSearchOrders(searchKey) {
        // this.platformList.clear();
        // this.platformFilter.forEach(item => item.selected = false);
        if (searchKey) {
            console.log(searchKey);
            this.searchIsOn = true;
            // this.searchSettings = [];
            const trimmedKeyLowerCase = searchKey.toLowerCase();
            this.searchSettings = Object.values(this.searchOriginalSettings)
                .filter((item) => item.query.toLowerCase().includes(trimmedKeyLowerCase));
            console.log("in trimmedKeyLowerCase", trimmedKeyLowerCase);
            console.log("searchsettings ", this.searchSettings);
        }
        else {
            this.searchSettings = [];
            this.searchIsOn = false;
        }
        this.inputSearchSettings = this.searchSettings;
    }
    onPlatformChecked($event, platformType) {
        const platform = platformType.name;
        platformType.selected = $event;
        this.searchIsOn = true;
        this.searchSettings = [];
        if ($event) {
            this.platformList.add(platform);
        }
        else {
            this.platformList.delete(platform);
        }
        console.log("platformList", this.platformList);
        console.log("inputSearchSettings ", this.inputSearchSettings);
        if (this.inputSearchSettings.length > 0) {
            if (this.platformList.size === 0) {
                this.searchSettings = this.inputSearchSettings;
            }
            else {
                for (const inputSearch of this.inputSearchSettings) {
                    for (const filterPlatform of this.platformList) {
                        if (inputSearch[filterPlatform] !== undefined && !this.data.includes(inputSearch)) {
                            this.searchSettings.push(inputSearch);
                        }
                    }
                }
            }
        }
        else {
            if (this.platformList.size === 0) {
                this.searchIsOn = false;
                console.log(this.searchIsOn);
            }
            else {
                for (const filterPlatform of this.platformList) {
                    console.log(filterPlatform);
                    const trimmedKeyLowerCase = filterPlatform.toLowerCase();
                    console.log(this.searchOriginalSettings);
                    this.searchSettings = Object.values(this.searchOriginalSettings)
                        .filter((item) => {
                        return item.reply.toLowerCase().includes(trimmedKeyLowerCase) ||
                            item.query.toLowerCase().includes(trimmedKeyLowerCase) || item.category.toLowerCase().includes(trimmedKeyLowerCase);
                    });
                    console.log(this.searchSettings);
                }
            }
        }
    }
    clearFilter() {
        this.platformList.clear();
        this.searchIsOn = false;
        this.searchSettings = [];
        this.inputSearchSettings = [];
        this.platformFilter.forEach(item => item.selected = false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 5, consts: [["role", "main", 1, "content"], [1, "card"], [1, "form-group"], ["for", "search-text"], ["type", "email", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Enter text to search", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "platform-filters"], ["class", "ctx-platform-text", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ctx-platform-text"], ["type", "checkbox", 3, "checked", "ngModel", "ngModelChange", "change"], [4, "ngFor", "ngForOf"], ["appHighlight", "", 1, "list-group-item", 3, "searchedWord", "content", "classToApply", "setTitle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Search Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; })("input", function AppComponent_Template_input_input_5_listener() { return ctx.onSearchOrders(ctx.searchText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_span_7_Template, 3, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table")(9, "tr")(10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_ng_container_16_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_ng_container_17_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.platformFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchIsOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchIsOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.searchIsOn, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightDirective], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-width: 0.2rem;\n  border: solid #f8f9fa;\n  position: relative;\n  margin: 1rem 1rem;\n  min-width: 500px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fill-available;\n  height: calc(1em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  overflow: visible;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  -webkit-appearance: textfield;\n  cursor: text;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBSUo7O0FBSEk7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUtOOztBQURBO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFLSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmQge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICBib3JkZXI6IHNvbGlkICNmOGY5ZmE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxcmVtIDFyZW07XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogY2FsYygxZW0gKyAwLjc1cmVtKTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgaW5wdXQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG4gIH1cbn1cbi5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/highlight.directive */ 2057);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/filter.pipe */ 9216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__.HighlightDirective,
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] }); })();


/***/ }),

/***/ 2057:
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightDirective": () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class HighlightDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.setTitle = false;
    }
    ngOnChanges(changes) {
        if (!this.content) {
            return;
        }
        if (this.setTitle) {
            this.renderer.setProperty(this.el.nativeElement, 'title', this.content);
        }
        if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
            return;
        }
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.getFormattedText());
    }
    getFormattedText() {
        const re = new RegExp(`(${this.searchedWord})`, 'gi');
        return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
HighlightDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]], inputs: { searchedWord: "searchedWord", content: "content", classToApply: "classToApply", setTitle: "setTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 9216:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterPipe {
    // transform(value: any, args?: any): any {
    //   if (!value) return null;
    //   if (!args) return value;
    //   args = args.toLowerCase(); debugger;
    //   return value.filter(function (item) {
    //     return JSON.stringify(item)
    //       .toLowerCase()
    //       .includes(args);
    //   });
    // }
    transform(values, args) {
        let res = values.filter(a => {
            return args.length ? args.indexOf(a.status) != -1 : values;
        });
        console.log("Res ", res);
        return res;
    }
    transformvalue(value, key, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        debugger;
        return value.filter(function (item) {
            return JSON.stringify(item.key)
                .toLowerCase()
                .includes(args);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map