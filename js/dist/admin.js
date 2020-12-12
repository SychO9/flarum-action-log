module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/components/ActionLogEntryList.js":
/*!****************************************************!*\
  !*** ./src/admin/components/ActionLogEntryList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogEntryList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);









var ActionLogEntryList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogEntryList, _Component);

  function ActionLogEntryList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ActionLogEntryList.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.state = this.attrs.state;
  };

  _proto.view = function view() {
    if (this.state.loading) {
      return m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "LoadingIndicator--block"
      });
    }

    if (!this.state.entries.length) {
      return m(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default.a, {
        text: app.translator.trans('sycho-action-log.admin.no_entries')
      });
    }

    var _this$state$controls$ = this.state.controls.actions(),
        icons = _this$state$controls$.icons;

    return m("div", {
      className: "ActionLogGrid"
    }, this.state.entries.map(function (entry) {
      return m("div", {
        className: "ActionLogGrid-item"
      }, m("div", {
        className: "ActionLogGrid-itemIcon"
      }, m("div", {
        className: "ActionLogGrid-itemIconMain"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(icons.resourceTypes[entry.resourceType()]), m("span", {
        className: "ActionLogGrid-itemIconSecondary Badge",
        title: entry.name(),
        oncreate: function oncreate(vnode) {
          return $(vnode.dom).tooltip({
            placement: 'bottom'
          });
        }
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(icons.actionNames[entry.name()])))), m("div", {
        className: "ActionLogGrid-Avatar"
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(entry.actor())), m("div", {
        className: "ActionLogGrid-itemContent"
      }, m("div", {
        className: "ActionLogGrid-entryActor"
      }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(entry.actor())), m("div", {
        className: "ActionLogGrid-entryName"
      }, entry.formattedName), m("div", {
        className: "ActionLogGrid-entryDetails"
      }, m("div", {
        className: "ActionLogGrid-entryType"
      }, entry.type()), m("div", {
        className: "ActionLogGrid-entryTime"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()('far fa-clock'), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(entry.createdAt())))));
    }));
  };

  return ActionLogEntryList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/ActionLogPage.js":
/*!***********************************************!*\
  !*** ./src/admin/components/ActionLogPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionLogSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionLogSection */ "./src/admin/components/ActionLogSection.js");
/* harmony import */ var _modals_ActionLogSettingsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/ActionLogSettingsModal */ "./src/admin/modals/ActionLogSettingsModal.js");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _states_ActionLogSectionState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/ActionLogSectionState */ "./src/admin/states/ActionLogSectionState.js");








var ActionLogPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogPage, _ExtensionPage);

  function ActionLogPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = ActionLogPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.actionLogSectionState = new _states_ActionLogSectionState__WEBPACK_IMPORTED_MODULE_6__["default"]();
  };

  _proto.sections = function sections() {
    var sections = _ExtensionPage.prototype.sections.call(this);

    sections.replace('content', this.content(), 2);
    sections.add('actionLogList', m(_ActionLogSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: this.actionLogSectionState
    }), 1);
    return sections;
  };

  _proto.content = function content() {
    return m("div", {
      className: "ExtensionPage-settings"
    }, m("div", {
      className: "container ActionLogPage-mainControls"
    }, this.mainControls().toArray()));
  };

  _proto.mainControls = function mainControls() {
    var _this = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add('clear', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button Button--primary",
      icon: "fas fa-trash",
      onclick: this.actionLogSectionState.clear.bind(this.actionLogSectionState)
    }, app.translator.trans('sycho-action-log.admin.clear')));
    items.add('settings', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button",
      icon: "fas fa-cogs",
      onclick: function onclick() {
        return app.modal.show(_modals_ActionLogSettingsModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
          actions: _this.actionLogSectionState.controls.actions()
        });
      }
    }, app.translator.trans('sycho-action-log.admin.settings')));
    return items;
  };

  return ActionLogPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/ActionLogSection.js":
/*!**************************************************!*\
  !*** ./src/admin/components/ActionLogSection.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionLogEntryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionLogEntryList */ "./src/admin/components/ActionLogEntryList.js");




var ActionLogSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogSection, _Component);

  function ActionLogSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ActionLogSection.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.state = this.attrs.state;
    this.state.load();
  };

  _proto.view = function view() {
    return m("div", {
      className: "ActionLogListSection"
    }, m("div", {
      className: "ExtensionPage-permissions-header"
    }, m("div", {
      className: "container"
    }, m("h2", {
      className: "ExtensionTitle"
    }, app.translator.trans('sycho-action-log.admin.total_entries', {
      count: this.state.total || '0'
    })))), m("div", {
      className: "ActionLogListSection-content"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ActionLogListSection-navigation"
    }, this.state.controls.filterControls(this).toArray()), m(_ActionLogEntryList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: this.state
    }), m("div", {
      className: "ActionLogListSection-navigation"
    }, this.state.buildPagination()))));
  };

  return ActionLogSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ActionLogEntry */ "./src/admin/models/ActionLogEntry.js");
/* harmony import */ var _components_ActionLogPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ActionLogPage */ "./src/admin/components/ActionLogPage.js");



flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('sycho-action-log', function (app) {
  app.store.models['action-log-entries'] = _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_1__["default"];
  app.extensionData["for"]('sycho-action-log').registerPage(_components_ActionLogPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
}, -90);

/***/ }),

/***/ "./src/admin/modals/ActionLogSettingsModal.js":
/*!****************************************************!*\
  !*** ./src/admin/modals/ActionLogSettingsModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);






var ActionLogSettingsModal = /*#__PURE__*/function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogSettingsModal, _SettingsModal);

  function ActionLogSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = ActionLogSettingsModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _SettingsModal.prototype.oninit.call(this, vnode);

    this.excludedLoggingSetting = this.setting('sycho-action-log.excluded_logging', JSON.stringify([]));
  };

  _proto.title = function title() {
    return app.translator.trans('sycho-action-log.admin.settings');
  };

  _proto.form = function form() {
    var _this = this;

    var actions = this.attrs.actions.items;
    var icons = this.attrs.actions.icons;
    return [m("p", null, app.translator.trans('sycho-action-log.admin.action_settings')), Object.keys(actions).map(function (key) {
      return m("div", {
        className: "ActionLogSettings-logTypes"
      }, m("h3", null, m("span", null, app.translator.trans("sycho-action-log.admin.actions." + key + ".label"))), Object.keys(actions[key]).map(function (resourceType) {
        return m("div", {
          className: "ActionLogSettings-resourceTypes"
        }, m("h4", null, app.translator.trans("sycho-action-log.admin.actions." + key + "." + resourceType + ".label"), m("span", {
          className: "ActionLog-titleIcon"
        }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(icons.resourceTypes[resourceType]))), actions[key][resourceType].map(function (action) {
          return m("div", {
            className: "Form-group"
          }, m(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2___default.a, {
            state: !_this.getExcludedLoggingValue().includes(key + "." + resourceType + "." + action),
            onchange: _this["switch"].bind(_this, key, resourceType, action)
          }, app.translator.trans("sycho-action-log.admin.actions." + key + "." + resourceType + "." + action + ".label"), m("span", {
            className: "ActionLog-titleIcon"
          }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(icons.actionNames[action]))));
        }));
      }));
    })];
  };

  _proto.getExcludedLoggingValue = function getExcludedLoggingValue() {
    return JSON.parse(this.excludedLoggingSetting());
  };

  _proto["switch"] = function _switch(key, resourceType, action, value) {
    var actionName = key + "." + resourceType + "." + action;
    var excludedLogging = this.getExcludedLoggingValue();
    if (!value) excludedLogging.push(actionName);else excludedLogging = excludedLogging.filter(function (item) {
      return item !== actionName;
    });
    this.excludedLoggingSetting(JSON.stringify(excludedLogging));
  };

  return ActionLogSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/modals/FiltersHelpModal.js":
/*!**********************************************!*\
  !*** ./src/admin/modals/FiltersHelpModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersHelpModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);



var FiltersHelpModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FiltersHelpModal, _Modal);

  function FiltersHelpModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = FiltersHelpModal.prototype;

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, app.translator.trans('sycho-action-log.admin.gambits.description'), m("ul", null, this.gambits().map(function (gambit) {
      return m("li", null, m("strong", null, gambit, ":"), " ", app.translator.trans("sycho-action-log.admin.gambits.items." + gambit));
    })));
  };

  _proto.title = function title() {
    return app.translator.trans('sycho-action-log.admin.gambits.label');
  };

  _proto.gambits = function gambits() {
    return ['type', 'action', 'resource', 'actor'];
  };

  return FiltersHelpModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/models/ActionLogEntry.js":
/*!********************************************!*\
  !*** ./src/admin/models/ActionLogEntry.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogEntry; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var ActionLogEntry = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogEntry, _mixin);

  function ActionLogEntry() {
    return _mixin.apply(this, arguments) || this;
  }

  return ActionLogEntry;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('id'),
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  type: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('type'),
  actor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('actor'),
  resourceType: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('resource_type'),
  resourceId: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('resource_id'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('created_at', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  format: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('format'),
  discussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('discussion'),
  post: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('post'),
  group: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('group'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('user')
}));



/***/ }),

/***/ "./src/admin/states/ActionLogSectionState.js":
/*!***************************************************!*\
  !*** ./src/admin/states/ActionLogSectionState.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogSectionState; });
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ActionLogControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ActionLogControls */ "./src/admin/utils/ActionLogControls.js");
/* harmony import */ var _utils_Formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Formatter */ "./src/admin/utils/Formatter.js");






var ActionLogSectionState = /*#__PURE__*/function () {
  function ActionLogSectionState() {
    this.entries = [];
    this.sortingOptions = {
      newest: '-createdAt',
      oldest: 'createdAt'
    };
    this.sort = 'newest';
    this.offset = 0;
    this.limit = 20;
    this.total = 0;
    this.count = 0;
    this.page = 0;
    this.query = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default()('');
    this.controls = new _utils_ActionLogControls__WEBPACK_IMPORTED_MODULE_3__["default"](this);
  }
  /**
   * Loads the log entries
   */


  var _proto = ActionLogSectionState.prototype;

  _proto.load = function load(params) {
    var _this = this;

    this.loading = true;
    app.store.find('action-log-entries', this.requestParams(params || {})).then(this.handleResponse.bind(this)).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.requestParams = function requestParams(_ref) {
    var offset = _ref.offset,
        query = _ref.query,
        sort = _ref.sort;

    if (typeof offset !== 'undefined') {
      this.offset = offset;
    }

    if (typeof sort !== 'undefined') {
      this.sort = sort;
    }

    return {
      page: {
        offset: this.offset,
        limit: this.limit
      },
      filter: {
        q: query
      },
      sort: this.sortingOptions[this.sort]
    };
  };

  _proto.handleResponse = function handleResponse(response) {
    var _this2 = this;

    this.entries = response;
    this.total = response.payload.meta.total || 0;
    this.count = response.payload.meta.count || 0;
    this.links = response.payload.links;
    this.page = Math.ceil(this.offset / this.limit);
    this.entries = this.entries.filter(function (entry) {
      return !(!_this2.isTagsEnabled() && (entry.resourceType() === 'tag' || entry.name() === 'tagged'));
    });
    this.entries.map(function (entry) {
      entry.formattedName = _this2.formatName(entry);
    });
    return response;
  };

  _proto.buildPagination = function buildPagination() {
    if (this.count <= this.limit) return m("div", {
      className: "ActionLogListSection-pagination"
    });
    return m("div", {
      className: "ActionLogListSection-pagination"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-arrow-left",
      onclick: this.prev.bind(this),
      disabled: !this.hasPrev()
    }), m(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_1___default.a, {
      value: this.page,
      options: this.getPages(),
      onchange: this.changePage.bind(this)
    }), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-arrow-right",
      onclick: this.next.bind(this),
      disabled: !this.hasNext()
    }));
  };

  _proto.next = function next() {
    if (!this.hasNext()) return;
    this.load({
      offset: this.offset + this.limit
    });
  };

  _proto.prev = function prev() {
    if (!this.hasPrev()) return;
    this.load({
      offset: this.offset - this.limit
    });
  };

  _proto.hasNext = function hasNext() {
    return this.offset + this.limit < this.count;
  };

  _proto.hasPrev = function hasPrev() {
    return this.links.prev;
  };

  _proto.getPages = function getPages() {
    var pageRange = Array.from({
      length: Math.ceil(this.count / this.limit)
    }, function (v, k) {
      return k + 1;
    });
    pageRange.map(function (number, index) {
      pageRange[index] = app.translator.trans('sycho-action-log.admin.page', {
        number: number
      });
    });
    return pageRange;
  };

  _proto.changePage = function changePage(value) {
    if (!Object.keys(this.getPages()).includes(value)) return;
    this.load({
      offset: value * this.limit
    });
  }
  /**
   * @param entry
   * @returns {string}
   */
  ;

  _proto.formatName = function formatName(entry) {
    return new _utils_Formatter__WEBPACK_IMPORTED_MODULE_4__["default"](entry).handle();
  }
  /**
   * @return {boolean}
   */
  ;

  _proto.isTagsEnabled = function isTagsEnabled() {
    return JSON.parse(app.data.settings.extensions_enabled).indexOf('flarum-tags') !== -1;
  };

  _proto.clear = function clear() {
    var _this3 = this;

    if (!confirm(app.translator.trans('sycho-action-log.admin.clear_confirmation'))) return;
    this.loading = true;
    app.request({
      url: app.forum.attribute('apiUrl') + '/action-log-entries',
      method: 'DELETE'
    }).then(function () {
      return _this3.load();
    });
  };

  return ActionLogSectionState;
}();



/***/ }),

/***/ "./src/admin/utils/ActionLogControls.js":
/*!**********************************************!*\
  !*** ./src/admin/utils/ActionLogControls.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionLogControls; });
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modals_FiltersHelpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/FiltersHelpModal */ "./src/admin/modals/FiltersHelpModal.js");
/* harmony import */ var _sycho_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sycho-uikit */ "@sycho-uikit");
/* harmony import */ var _sycho_uikit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sycho_uikit__WEBPACK_IMPORTED_MODULE_4__);





var Input = _sycho_uikit__WEBPACK_IMPORTED_MODULE_4__["uikit"].Input;

var ActionLogControls = /*#__PURE__*/function () {
  function ActionLogControls(state) {
    this.state = state;
  }

  var _proto = ActionLogControls.prototype;

  _proto.filterControls = function filterControls() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_0___default.a();
    items.add('search', m(Input, {
      icon: "fas fa-filter",
      parentClassName: "ActionLog-search",
      className: "FormControl",
      placeholder: app.translator.trans('sycho-action-log.admin.search'),
      value: this.state.query(),
      oninput: this.search.bind(this)
    }));
    items.add('help', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-question",
      onclick: function onclick() {
        return app.modal.show(_modals_FiltersHelpModal__WEBPACK_IMPORTED_MODULE_3__["default"]);
      }
    }));
    items.add('sort', m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
      buttonClassName: "Button",
      label: app.translator.trans("sycho-action-log.admin.sort." + this.state.sort)
    }, Object.keys(this.state.sortingOptions).map(function (key) {
      var active = _this.state.sort === key;
      return m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        icon: active ? 'fas fa-check' : true,
        onclick: _this.updateSort.bind(_this, key),
        active: active
      }, app.translator.trans("sycho-action-log.admin.sort." + key));
    })));
    items.add('pagination', m("div", null, this.state.buildPagination()));
    items.add('refresh', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-sync",
      onclick: this.state.load.bind(this.state)
    }));
    return items;
  };

  _proto.actions = function actions() {
    var items = {
      moderation: {
        discussion: ['locked', 'unlocked', 'hidden', 'restored', 'deleted', 'stickied', 'unstickied', 'tagged', 'renamed'],
        user: ['suspended', 'unsuspended', 'activated'],
        post: ['approved']
      },
      administration: {
        group: ['created', 'deleted'],
        tag: ['created', 'deleted'],
        extension: ['enabled', 'disabled', 'uninstalled'],
        permission: ['edited']
      }
    };
    var icons = {
      resourceTypes: {
        discussion: 'fas fa-comments',
        user: 'fas fa-user',
        post: 'fas fa-reply',
        extension: 'fas fa-puzzle-piece',
        group: 'fas fa-user-friends',
        tag: 'fas fa-tag',
        permission: 'fas fa-key'
      },
      actionNames: {
        locked: 'fas fa-lock',
        unlocked: 'fas fa-unlock',
        deleted: 'fas fa-trash',
        stickied: 'fas fa-thumbtack',
        unstickied: 'fas fa-thumbtack',
        suspended: 'fas fa-ban',
        unsuspended: 'fas fa-check',
        approved: 'fas fa-check',
        created: 'fas fa-plus',
        enabled: 'fas fa-check',
        disabled: 'fas fa-ban',
        uninstalled: 'fas fa-times',
        tagged: 'fas fa-tag',
        renamed: 'fas fa-pencil-alt',
        hidden: 'fas fa-eye-slash',
        restored: 'fas fa-reply',
        activated: 'fas fa-bolt',
        edited: 'fas fa-cog'
      }
    };
    return {
      items: items,
      icons: icons
    };
  };

  _proto.updateSort = function updateSort(sort) {
    this.state.load({
      sort: sort
    });
  };

  _proto.search = function search(e) {
    var _this2 = this;

    this.state.query(e.target.value);
    this.state.loading = true;

    this.searching = function () {
      return _this2.state.load({
        query: _this2.state.query()
      });
    };

    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(this.searching, 250);
  };

  return ActionLogControls;
}();



/***/ }),

/***/ "./src/admin/utils/Formatter.js":
/*!**************************************!*\
  !*** ./src/admin/utils/Formatter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formatter; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ActionLogEntry */ "./src/admin/models/ActionLogEntry.js");
/* harmony import */ var flarum_tags_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/helpers/tagsLabel */ "flarum/tags/helpers/tagsLabel");
/* harmony import */ var flarum_tags_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Finds the appropriate language string
 * and builds the name of the action taken
 */

var Formatter = /*#__PURE__*/function () {
  /**
   * @param entry {ActionLogEntry}
   */
  function Formatter(entry) {
    this.entry = entry;
    this.langKey = "sycho-action-log.admin.actions." + entry.type();
  }
  /**
   * @returns {string}
   */


  var _proto = Formatter.prototype;

  _proto.handle = function handle() {
    if (this.entry.resourceType().length) {
      this.langKey += "." + this.entry.resourceType();
    }

    this.langKey += "." + this.entry.name() + ".action";
    var uniqueHandler = this.entry.resourceType() + this.entry.name().charAt(0).toUpperCase() + this.entry.name().slice(1);
    if (this[uniqueHandler]) return this[uniqueHandler]();
    return this.genericHandler();
  }
  /**
   * @returns {string}
   */
  ;

  _proto.genericHandler = function genericHandler() {
    var _this = this;

    var format = this.entry.format(); // If there are any objects, convert them to strings using the buildResourceName() method

    Object.keys(format).map(function (key, index) {
      if (typeof format[key] !== 'object') return;
      var type = format[key].type || key;
      if (!_this[type]) type = 'guessResourceName'; // The core code tries to get the displayName attribute when the
      // translation parameter key is named 'user', even if the value is a string
      // so we have no choice but to add some ugly hackish code here

      format[key === 'user' ? 'u' : key] = _this[type](_this.entry.format()[key] || {}, key);
      if (key === 'user') delete format.user;
    });
    Object.keys(format).map(function (key, index) {
      format[key] = m("strong", null, format[key]);
    });
    return app.translator.trans(this.langKey, format);
  }
  /**
   * Tries to build JSX representing the resource
   *
   * @param format {object}
   * @param key {number}
   * @returns {string || string[]}
   */
  ;

  _proto.guessResourceName = function guessResourceName(format, key) {
    var _this2 = this;

    if (typeof format.items !== 'undefined' && format.items.length) {
      return format.items.map(function (item) {
        return _this2.guessResourceName(item, format.type);
      });
    }

    var name = format.title || '';

    if (format.id) {
      format.version = "#" + format.id;
    }

    if (format.version) {
      name = [name, m("i", null, " (", format.version, ")")];
    }

    if (format.icon) {
      name = [m("span", {
        className: "Badge ActionLogExtensionIcon",
        style: format.icon
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(format.icon.name)), name];
    }

    if (format.link) {
      name = m("a", {
        href: format.link
      }, name);
    }

    return name;
  }
  /**
   * Special handler for discussion tagging actions
   */
  ;

  _proto.discussionTagged = function discussionTagged() {
    var format = this.entry.format();
    if (Object.keys(format.tags.items).length && Object.keys(format.oldTags.items).length) this.langKey += '.add_remove';else if (Object.keys(format.tags.items).length) this.langKey += '.add';else this.langKey += '.remove';

    var tagTextConstructor = function tagTextConstructor(tags) {
      return app.translator.transChoice(Formatter.tagsText, Object.keys(tags).length, {
        tags: flarum_tags_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2___default()(Object.keys(tags).map(function (key) {
          return new flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a({
            attributes: tags[key]
          });
        }))
      });
    };

    format.tags = tagTextConstructor(format.tags.items);
    format.oldTags = tagTextConstructor(format.oldTags.items);
    format.discussion = m("strong", null, this.guessResourceName(format.discussion, 'discussion'));
    return app.translator.trans(this.langKey, format);
  }
  /**
   * @param format
   * @param key
   */
  ;

  _proto.tag = function tag(format, key) {
    return flarum_tags_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2___default()([new flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a({
      attributes: format
    })]);
  }
  /**
   * @param format {object}
   * @returns {*}
   */
  ;

  _proto.groups = function groups(format) {
    return format.items.map(function (group) {
      return m("span", {
        className: "Badge ActionLogExtensionIcon",
        title: group.name,
        oncreate: function oncreate(vnode) {
          return $(vnode.dom).tooltip({
            placement: 'top'
          });
        },
        style: {
          backgroundColor: group.icon.backgroundColor
        }
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(group.icon.name));
    });
  }
  /**
   * @param format {object}
   * @returns {*}
   */
  ;

  _proto.permission = function permission(format) {
    return m("code", null, format.title);
  };

  return Formatter;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Formatter, "tagsText", 'sycho-action-log.admin.actions.moderation.discussion.tagged.action.tags_text');



/***/ }),

/***/ "@sycho-uikit":
/*!***************************************************!*\
  !*** external "flarum.extensions['sycho-uikit']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['sycho-uikit'];

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/tags/helpers/tagsLabel":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagsLabel']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagsLabel'];

/***/ }),

/***/ "flarum/tags/models/Tag":
/*!********************************************************!*\
  !*** external "flarum.core.compat['tags/models/Tag']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/models/Tag'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map