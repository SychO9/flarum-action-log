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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./src/admin/addActionLogPane.js":
/*!***************************************!*\
  !*** ./src/admin/addActionLogPane.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ActionLogPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ActionLogPage */ "./src/admin/components/ActionLogPage.js");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.actionLog = {
    path: '/logs',
    component: _components_ActionLogPage__WEBPACK_IMPORTED_MODULE_1__["default"].component()
  };
  app.extensionSettings['sycho-action-log'] = m.route(app.route('actionLog'));
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    items.add('actionLog', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      href: app.route('actionLog'),
      icon: 'fas fa-clipboard-list',
      children: app.translator.trans('sycho-action-log.admin.title'),
      description: app.translator.trans('sycho-action-log.admin.description')
    }));
  });
});

/***/ }),

/***/ "./src/admin/compat.js":
/*!*****************************!*\
  !*** ./src/admin/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ActionLogPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActionLogPage */ "./src/admin/components/ActionLogPage.js");
/* harmony import */ var _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ActionLogEntry */ "./src/admin/models/ActionLogEntry.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  'actionLog/components/ActionLogPage': _components_ActionLogPage__WEBPACK_IMPORTED_MODULE_0__["default"],
  'actionLog/models/ActionLogEntry': _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_1__["default"]
});

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
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_9__);











var ActionLogPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActionLogPage, _Page);

  function ActionLogPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ActionLogPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.entries = [];
    this.offset = 0;
    this.limit = 20;
    this.total = 0;
    this.count = 0;
    this.page = 0;
    this.query = m.prop('');
    this.searchTimeout = false;
    this.load();
  };

  _proto.view = function view() {
    return m("div", {
      className: "ActionLogPage"
    }, m("div", {
      className: "ActionLogPage-header"
    }, m("div", {
      className: "container"
    }, m("h2", null, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-clipboard-list'), " ", app.translator.trans('sycho-action-log.admin.title')), m("p", null, app.translator.trans('sycho-action-log.admin.description')), m("p", null, app.translator.trans('sycho-action-log.admin.total_entries', {
      count: this.total
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: "Button Button--primary",
      children: "Clear Log",
      icon: "fas fa-trash"
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: "Button",
      children: "Settings",
      icon: "fas fa-cogs"
    }))), m("div", {
      className: "ActionLogPage-content"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ActionLogPage-navigation"
    }, m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('sycho-action-log.admin.search'),
      value: this.query(),
      oninput: this.search.bind(this)
    })), this.loading ? m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "LoadingIndicator--block"
    }) : this.entries.length ? [m("div", {
      className: "ActionLogGrid"
    }, this.entries.map(function (entry) {
      return m("div", {
        className: "ActionLogGrid-item"
      }, m("div", {
        className: "ActionLogGrid-Avatar"
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(entry.actor())), m("div", {
        className: "ActionLogGrid-itemContent"
      }, m("div", {
        className: "ActionLogGrid-entryDetails"
      }, m("div", {
        className: "ActionLogGrid-entryActor"
      }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(entry.actor())), m("div", {
        className: "ActionLogGrid-entryType"
      }, entry.type()), m("div", {
        className: "ActionLogGrid-entryTime"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('far fa-clock'), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(entry.createdAt()))), m("div", {
        className: "ActionLogGrid-entryName"
      }, entry.formattedName)));
    })), m("div", {
      className: "ActionLogPage-navigation"
    }, this.buildPagination())] : m(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_7___default.a, {
      text: app.translator.trans('sycho-action-log.admin.no_entries')
    }))));
  }
  /**
   * @param entry
   * @returns string
   */
  ;

  _proto.showActor = function showActor(entry) {
    if (!entry.actor()) return;
    return m("a", null, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(entry.actor()), flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(entry.actor()));
  }
  /**
   * Loads the log entries
   */
  ;

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
        query = _ref.query;

    if (typeof offset !== 'undefined') {
      this.offset = offset;
    }

    return {
      page: {
        offset: this.offset,
        limit: this.limit
      },
      filter: {
        q: query
      }
    };
  };

  _proto.handleResponse = function handleResponse(response) {
    var _this2 = this;

    this.entries = response;
    this.total = response.payload.meta.total || 0;
    this.count = response.payload.meta.count || 0;
    this.links = response.payload.links;
    this.page = Math.ceil(this.offset / this.limit);
    this.entries.map(function (entry) {
      entry.formattedName = _this2.formatName(entry);
    });
    return response;
  };

  _proto.buildPagination = function buildPagination() {
    if (this.count <= this.limit) return;
    return m("div", {
      className: "ActionLogPage-pagination"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-arrow-left",
      onclick: this.prev.bind(this),
      disabled: !this.hasPrev()
    }), m(flarum_components_Select__WEBPACK_IMPORTED_MODULE_9___default.a, {
      value: this.page,
      options: this.getPages(),
      onchange: this.changePage.bind(this)
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
  };

  _proto.search = function search(input) {
    var _this3 = this;

    m.withAttr('value', this.query)();
    this.loading = true;

    this.searching = function () {
      return _this3.load({
        query: _this3.query()
      });
    };

    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(this.searching, 250);
  }
  /**
   * Finds the appropriate language string
   * and calls for the resource name to be built
   *
   * @param entry
   * @returns string
   */
  ;

  _proto.formatName = function formatName(entry) {
    var _this4 = this;

    var key = "sycho-action-log.admin.actions." + entry.type();
    var format = entry.format();

    if (entry.resourceType().length) {
      key += "." + entry.resourceType();
    }

    key += "." + entry.name(); // If there are any objects, convert them to strings using the buildResourceName() method

    Object.keys(format).map(function (key, index) {
      if (typeof format[key] !== 'object') return; // The core code tries to get the displayName attribute when the
      // translation parameter key is named 'user', even if the value is a string
      // so we have no choice but to add some ugly hackish code here

      format[key === 'user' ? 'u' : key] = _this4.buildResourceName(key, entry);
      if (key === 'user') delete format.user;
    });
    Object.keys(format).map(function (key, index) {
      format[key] = m("strong", null, format[key]);
    });
    return app.translator.trans(key, format);
  }
  /**
   * Gives context to the resource manipulated
   *
   * @param format
   * @param entry
   * @returns string
   */
  ;

  _proto.buildResourceName = function buildResourceName(key, entry) {
    var format = entry.format()[key] || {};
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
  };

  return ActionLogPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ActionLogEntry */ "./src/admin/models/ActionLogEntry.js");
/* harmony import */ var _addActionLogPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addActionLogPane */ "./src/admin/addActionLogPane.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compat */ "./src/admin/compat.js");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @flarum/core/admin */ "@flarum/core/admin");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_5__);




flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('sycho-action-log', function (app) {
  app.store.models['action-log-entries'] = _models_ActionLogEntry__WEBPACK_IMPORTED_MODULE_2__["default"];
  Object(_addActionLogPane__WEBPACK_IMPORTED_MODULE_3__["default"])();
});



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_5__["compat"], _compat__WEBPACK_IMPORTED_MODULE_4__["default"]);

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

/***/ "@flarum/core/admin":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

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