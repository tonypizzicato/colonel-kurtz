module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/**
	 * Colonel Kurts
	 * A custom block editor
	 * @flow
	 */
	
	var App = __webpack_require__(6);
	var Diode = __webpack_require__(1);
	var EditorCreate = __webpack_require__(10);
	var EditorStore = __webpack_require__(7);
	var React = __webpack_require__(2);
	var seed = __webpack_require__(8);
	var uid = __webpack_require__(9);
	
	__webpack_require__(12);
	
	var ColonelKurtz = (function () {
	  function ColonelKurtz(config) {
	    var _this = this;
	    _classCallCheck(this, ColonelKurtz);
	
	    this.id = uid();
	    this.el = config.el;
	    this._callbacks = [];
	
	    EditorCreate(_extends({
	      id: this.id,
	      block: seed(undefined, config.seed || []) }, config));
	
	    Diode.subscribe(function () {
	      return _this.simulateChange();
	    });
	
	    setTimeout(this.simulateChange.bind(this), 10);
	  }
	
	  _prototypeProperties(ColonelKurtz, null, {
	    render: {
	      value: function render() {
	        React.render(this._rootComponent(), this._getDomElement());
	        return this;
	      },
	      writable: true,
	      configurable: true
	    },
	    simulateChange: {
	      value: function simulateChange() {
	        this._runCallbacks();
	      },
	      writable: true,
	      configurable: true
	    },
	    addCallback: {
	      value: function addCallback(callback) {
	        this._callbacks = this._callbacks.concat(callback);
	      },
	      writable: true,
	      configurable: true
	    },
	    removeCallback: {
	      value: function removeCallback(callback) {
	        this._callbacks = this._callbacks.filter(function (c) {
	          return c !== callback;
	        });
	      },
	      writable: true,
	      configurable: true
	    },
	    toJSON: {
	      value: function toJSON() {
	        return EditorStore.find(this.id).block.toJSON().blocks;
	      },
	      writable: true,
	      configurable: true
	    },
	    toHtml: {
	      value: function toHtml() {
	        var json = this.toJSON(),
	            html = "";
	        json.forEach(function (block) {
	          html += block.content.html;
	        });
	
	        return html;
	      },
	      writable: true,
	      configurable: true
	    },
	    _rootComponent: {
	
	      // Private
	
	      value: function _rootComponent() {
	        return React.createElement(App, { editorId: this.id });
	      },
	      writable: true,
	      configurable: true
	    },
	    _getDomElement: {
	      value: function _getDomElement() {
	        return this.el;
	      },
	      writable: true,
	      configurable: true
	    },
	    _runCallbacks: {
	      value: function _runCallbacks() {
	        var json = this.toJSON();
	
	        this._callbacks.forEach(function (callback) {
	          callback(json);
	        });
	      },
	      writable: true,
	      configurable: true
	    }
	  });
	
	  return ColonelKurtz;
	})();
	
	ColonelKurtz.addons = __webpack_require__(3);
	ColonelKurtz.createBlock = __webpack_require__(4);
	ColonelKurtz.addBlockType = __webpack_require__(5);
	
	module.exports = ColonelKurtz;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("diode");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    Medium: __webpack_require__(21),
	    Image: __webpack_require__(22),
	    YouTube: __webpack_require__(23)
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * This utility takes an object and mixes in the required boilerplate
	 * needed to integrate it into ColonelKurtz.
	 *
	 * @flow
	 */
	
	var React = __webpack_require__(2);
	var BlockType = __webpack_require__(13);
	
	module.exports = function (spec) {
	  var mixins = spec.mixins || [];
	
	  if (mixins.indexOf(BlockType) < 0) {
	    mixins = mixins.concat(BlockType);
	  }
	
	  return React.createClass(_extends({}, spec, { React: React, mixins: mixins }));
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * This utility adds a new block type to ColonelKurtz. If not given a
	 * valid React element, it produces one using ./createBlock
	 *
	 * @flow
	 */
	
	var CreateBlockType = __webpack_require__(14);
	var React = __webpack_require__(2);
	var createBlock = __webpack_require__(4);
	
	module.exports = function (options) {
	  var component = options.component;
	
	  if (React.isValidElement(component) === false) {
	    component = createBlock(component);
	  }
	
	  CreateBlockType(_extends({}, options, { component: component }));
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * This is the root component that contains sections for
	 * toggling between viewing modes and viewing managed content
	 *
	 * @flow
	 */
	
	var ContentSection = __webpack_require__(15);
	var EditorStore = __webpack_require__(7);
	var Modes = __webpack_require__(24);
	var ModeSelection = __webpack_require__(16);
	var React = __webpack_require__(2);
	var Stateful = __webpack_require__(11);
	var Strings = __webpack_require__(25);
	var fullscreen = __webpack_require__(17);
	
	var App = React.createClass({
	  displayName: "App",
	
	
	  mixins: [Stateful],
	
	  getState: function getState() {
	    return {
	      editor: EditorStore.find(this.props.editorId)
	    };
	  },
	
	  fullscreen: (function (_fullscreen) {
	    var _fullscreenWrapper = function fullscreen() {
	      return _fullscreen.apply(this, arguments);
	    };
	
	    _fullscreenWrapper.toString = function () {
	      return _fullscreen.toString();
	    };
	
	    return _fullscreenWrapper;
	  })(function () {
	    fullscreen(this.getDOMNode());
	  }),
	
	  render: function render() {
	    var editor = this.state.editor;
	
	
	    return React.createElement(
	      "div",
	      { className: "colonel" },
	      React.createElement(ModeSelection, { editor: editor }),
	      React.createElement(ContentSection, { editor: editor }),
	      React.createElement(
	        "button",
	        { type: "button", "aria-label": Strings.fullscreen, className: "col-fullscreen", onClick: this._onFullscreenClick },
	        "Fullscreen"
	      )
	    );
	  },
	
	  _onFullscreenClick: function _onFullscreenClick(e) {
	    e.preventDefault();
	    this.fullscreen();
	  }
	
	});
	
	module.exports = App;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var BlockType = __webpack_require__(18);
	var Diode = __webpack_require__(1);
	var Dispatcher = __webpack_require__(26);
	var Modes = __webpack_require__(24);
	var invariant = __webpack_require__(27);
	
	var _editors = [];
	var getDefaults = function () {
	  return {
	    mode: Modes.EDIT_MODE,
	    types: BlockType.keys(),
	    preview: true
	  };
	};
	
	var EditorStore = {
	
	  find: function find(id, safe) {
	    var editor = _editors.filter(function (block) {
	      return block.id === id;
	    })[0];
	
	    if (!safe) {
	      invariant(editor, "Unable to find editor with an id of %s", id);
	    }
	
	    return editor;
	  },
	
	  _create: function _create(params) {
	    var editor = _extends({}, getDefaults(), params);
	
	    invariant(Modes[editor.mode], "Unacceptable mode for editor: " + editor.mode);
	    invariant(!EditorStore.find(editor.id, true), "Editors must have a unique identifier");
	
	    _editors = _editors.concat(editor);
	
	    Diode.publish();
	  },
	
	  _update: function _update(id, params) {
	    var editor = EditorStore.find(id);
	    var index = _editors.indexOf(editor);
	
	    _editors = _editors.concat();
	    _editors[index] = _extends({}, getDefaults(), editor, params);
	
	    Diode.publish();
	  },
	
	  dispatchToken: Dispatcher.register(function (action) {
	    switch (action.type) {
	
	      case __webpack_require__(10):
	        EditorStore._create(action.params);
	        break;
	
	      case __webpack_require__(19):
	        EditorStore._update(action.id, action.params);
	        break;
	    }
	  })
	
	};
	
	module.exports = EditorStore;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Given a root block list, this function will populate
	 * an editor with content
	 */
	
	var BlockStore = __webpack_require__(20);
	
	module.exports = function seed(parent, blocks) {
	  return BlockStore._seed(parent, blocks);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var uidCounter = 0;
	
	var uid = function () {
	  return uidCounter += 1;
	};
	
	module.exports = uid;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function CreateEditor(params) {
	  Dispatcher.dispatch({ type: CreateEditor, params: params });
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("diode/stateful");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/* Begin: Common Block Type Interface
	 *
	 * Each block type component must include the BlockType mixin and implement:
	 * - defaultContent()
	 * - renderEditor()
	 * - renderPreviewer()
	 *
	 * Calls to setContent() update both this component's state as well as
	 * the block instance's content.
	 *
	 * @flow
	 */
	
	var React = __webpack_require__(2);
	var Modes = __webpack_require__(24);
	var invariant = __webpack_require__(27);
	
	var BlockType = {
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: Modes.EDIT_MODE
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    invariant(this.defaultContent, "BlockType mixin requires `defaultContent` implementation.");
	
	    return {
	      content: this.props.initialContent || this.defaultContent()
	    };
	  },
	
	  setContent: function setContent(params) {
	    var content = _extends({}, this.state.content, params);
	
	    this.setState({ content: content }, function () {
	      this.props.updateContent(this.state.content);
	    });
	  },
	
	  editMode: function editMode() {
	    return this.props.mode === Modes.EDIT_MODE;
	  },
	
	  render: function render() {
	    invariant(this.renderEditor, "BlockType mixin requires `renderEditor` implementation.");
	    invariant(this.renderPreviewer, "BlockType mixin requires `renderPreviewer` implementation.");
	
	    return this.editMode() ? this.renderEditor() : this.renderPreviewer();
	  }
	
	};
	
	module.exports = BlockType;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function CreateBlockType(params) {
	  Dispatcher.dispatch({ type: CreateBlockType, params: params });
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };
	
	/* @flow */
	
	var React = __webpack_require__(2);
	var Modes = __webpack_require__(24);
	
	var _types = (function () {
	  var _types2 = {};
	
	  _defineProperty(_types2, Modes.EDIT_MODE, __webpack_require__(28));
	
	  _defineProperty(_types2, Modes.PREVIEW_MODE, __webpack_require__(29));
	
	  return _types2;
	})();
	
	var ContentSection = React.createClass({
	  displayName: "ContentSection",
	
	
	  render: function render() {
	    var editor = this.props.editor;
	    var block = editor.block;
	
	    return React.createElement(_types[editor.mode], { block: block, editor: editor });
	  }
	
	});
	
	module.exports = ContentSection;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var Button = __webpack_require__(30);
	var React = __webpack_require__(2);
	var Types = React.PropTypes;
	var UpdateEditor = __webpack_require__(19);
	var modes = __webpack_require__(24);
	var Pure = __webpack_require__(31);
	
	var ModeSelection = React.createClass({
	  displayName: "ModeSelection",
	  mixins: [Pure],
	
	  propType: {
	    editor: Types.object.isRequired,
	    modes: Types.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return { modes: modes };
	  },
	
	  getTab: function getTab(key) {
	    var _this = this;
	    var _props = this.props;
	    var editor = _props.editor;
	    var modes = _props.modes;
	
	
	    var props = {
	      className: "col-tabs-btn",
	      disabled: editor.mode === modes[key],
	      onClick: function (e) {
	        return _this._onModeClick(e, modes[key]);
	      }
	    };
	
	    return React.createElement(
	      "li",
	      { key: key, className: "col-tabs-list-item", role: "tab" },
	      React.createElement(
	        Button,
	        props,
	        key.replace("_", " ")
	      )
	    );
	  },
	
	  getTabs: function getTabs() {
	    return Object.keys(this.props.modes).map(this.getTab);
	  },
	
	  render: function render() {
	    return this.props.editor.preview ? React.createElement(
	      "nav",
	      { role: "navigation", className: "col-tabs" },
	      React.createElement(
	        "ul",
	        { className: "col-tabs-list", role: "tablist" },
	        this.getTabs()
	      )
	    ) : null;
	  },
	
	  _onModeClick: function _onModeClick(e, mode) {
	    e.preventDefault();
	    UpdateEditor(this.props.editor.id, { mode: mode });
	  }
	
	});
	
	module.exports = ModeSelection;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// See https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
	
	module.exports = function (el) {
	  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
	    if (el.requestFullscreen) {
	      el.requestFullscreen();
	    } else if (el.msRequestFullscreen) {
	      el.msRequestFullscreen();
	    } else if (el.mozRequestFullScreen) {
	      el.mozRequestFullScreen();
	    } else if (el.webkitRequestFullscreen) {
	      el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	    }
	  } else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.msExitFullscreen) {
	      document.msExitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	      document.webkitExitFullscreen();
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/* @flow */
	
	var Dispatcher = __webpack_require__(26);
	var React = __webpack_require__(2);
	var invariant = __webpack_require__(27);
	
	var _blockTypes = [];
	var _defaults = {
	  icon: null,
	  types: null
	};
	
	var BlockTypeStore = {
	
	  keys: function keys() {
	    return _blockTypes.map(function (b) {
	      return b.id;
	    });
	  },
	
	  find: function find(id) {
	    var type = _blockTypes.filter(function (b) {
	      return b.id === id;
	    })[0];
	
	    invariant(type, "Unable to find block type with an id of %s");
	
	    return type;
	  },
	
	  _create: function _create(params) {
	    var record = _extends({}, _defaults, params);
	
	    invariant(record.id, "BlockType must have an identifier");
	
	    _blockTypes = _blockTypes.concat(record);
	  },
	
	  _remove: function _remove(id) {
	    _blockTypes = _blockTypes.filter(function (i) {
	      return i.id !== id;
	    });
	  },
	
	  dispatchToken: Dispatcher.register(function (action) {
	    switch (action.type) {
	
	      case __webpack_require__(14):
	        BlockTypeStore._create(action.params);
	        break;
	
	    }
	  })
	
	};
	
	module.exports = BlockTypeStore;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function UpdateEditor(id, params) {
	  Dispatcher.dispatch({ type: UpdateEditor, id: id, params: params });
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/* @flow */
	
	var Diode = __webpack_require__(1);
	var Block = __webpack_require__(32);
	var Dispatcher = __webpack_require__(26);
	var invariant = __webpack_require__(27);
	
	var _blocks = [];
	
	var BlockStore = {
	
	  childrenFor: function childrenFor(block) {
	    return _blocks.filter(function (b) {
	      return b.parent === block;
	    });
	  },
	
	  all: function all() {
	    return _blocks;
	  },
	
	  last: function last() {
	    return _blocks[_blocks.length - 1];
	  },
	
	  find: function find(id) {
	    var block = _blocks.filter(function (b) {
	      return b.id === id;
	    })[0];
	
	    invariant(block, "Unable to find block with id of %s", id);
	
	    return block;
	  },
	
	  _create: function _create(_ref, position) {
	    var content = _ref.content;
	    var type = _ref.type;
	    var parent = _ref.parent;
	    var block = new Block({ content: content, type: type, parent: parent });
	
	    if (position instanceof Block) {
	      position = BlockStore._indexOf(position.id) + 1;
	    } else if (position == void 0) {
	      position = _blocks.length;
	    }
	
	    _blocks.splice(position, 0, block);
	
	    Diode.publish();
	
	    return block;
	  },
	
	  _destroy: function _destroy(id) {
	    _blocks = _blocks.filter(function (node) {
	      for (var n = node; n; n = n.parent) {
	        if (n.id == id) return false;
	      }
	
	      return true;
	    });
	
	    Diode.publish();
	  },
	
	  _update: function _update(id, content) {
	    var block = BlockStore.find(id);
	
	    block.content = _extends({}, block.content, content);
	
	    Diode.publish();
	  },
	
	  _indexOf: function _indexOf(id) {
	    return _blocks.indexOf(BlockStore.find(id));
	  },
	
	  _move: function _move(fromId, toId) {
	    var from = BlockStore._indexOf(fromId);
	    var to = BlockStore._indexOf(toId);
	
	    _blocks.splice(to, 0, _blocks.splice(from, 1)[0]);
	
	    Diode.publish();
	  },
	
	  _seed: function _seed() {
	    var parent = arguments[0] === undefined ? BlockStore._create({}) : arguments[0];
	    var items = arguments[1] === undefined ? [] : arguments[1];
	    for (var _iterator = items[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
	      var _step$value = _step.value;
	      var blocks = _step$value.blocks;
	      var content = _step$value.content;
	      var type = _step$value.type;
	      BlockStore._seed(BlockStore._create({ content: content, parent: parent, type: type }), blocks);
	    }
	
	    return parent;
	  },
	
	  dispatchToken: Dispatcher.register(function (action) {
	    switch (action.type) {
	
	      case __webpack_require__(33):
	        BlockStore._create(action.params, action.position);
	        break;
	
	      case __webpack_require__(34):
	        BlockStore._destroy(action.id);
	        break;
	
	      case __webpack_require__(35):
	        BlockStore._update(action.id, action.content);
	        break;
	
	      case __webpack_require__(36):
	        BlockStore._move(action.fromId, action.toId);
	        break;
	    }
	  })
	
	};
	
	module.exports = BlockStore;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * This component adds a medium.com-like rich text editor block type.
	 *
	 * Source for this component can be found here:
	 * https://github.com/daviferreira/medium-editor
	 */
	
	var Editor = __webpack_require__(37);
	var Previewer = __webpack_require__(38);
	var React = __webpack_require__(2);
	
	__webpack_require__(39);
	
	var Medium = {
	
	  defaultContent: function defaultContent() {
	    return { html: "", text: "" };
	  },
	
	  renderEditor: function renderEditor() {
	    return React.createElement(Editor, _extends({ onBlur: this.setContent }, this.state.content));
	  },
	
	  renderPreviewer: function renderPreviewer() {
	    return React.createElement(Previewer, this.state.content);
	  }
	
	};
	
	module.exports = Medium;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * Image Colonel Kurtz Addon
	 * This component adds a basic image block type, including a
	 * src, caption, and credit
	 */
	
	var Editor = __webpack_require__(40);
	var Previewer = __webpack_require__(41);
	var React = __webpack_require__(2);
	
	__webpack_require__(42);
	
	var Image = {
	
	  defaultContent: function defaultContent() {
	    return { src: "", caption: "", attribution: "" };
	  },
	
	  renderEditor: function renderEditor() {
	    return React.createElement(Editor, _extends({ onChange: this.setContent }, this.state.content));
	  },
	
	  renderPreviewer: function renderPreviewer() {
	    return React.createElement(Previewer, this.state.content);
	  }
	
	};
	
	module.exports = Image;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * Image Colonel Kurtz Addon
	 * This component adds a basic image block type, including a
	 * src, caption, and credit
	 */
	
	var Editor = __webpack_require__(43);
	var Previewer = __webpack_require__(44);
	var React = __webpack_require__(2);
	
	__webpack_require__(45);
	
	var YouTube = {
	
	  defaultContent: function defaultContent() {
	    return { video_id: "" };
	  },
	
	  renderEditor: function renderEditor() {
	    return React.createElement(Editor, _extends({ onChange: this.setContent }, this.state.content));
	  },
	
	  renderPreviewer: function renderPreviewer() {
	    return React.createElement(Previewer, this.state.content);
	  }
	
	};
	
	module.exports = YouTube;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var KeyMirror = __webpack_require__(46);
	
	module.exports = KeyMirror({
	  EDIT_MODE: null,
	  PREVIEW_MODE: null
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  remove: "Remove this block",
	  fullscreen: "Toggle fullscreen mode"
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks.
	 *
	 * This is different from generic pub-sub systems in two ways:
	 *
	 * - Callbacks are not subscribed to particular events. Every payload is dispatched to every registered callback.
	 * - Callbacks can be deferred in whole or part until other callbacks have been executed.
	 *
	 * See http://facebook.github.io/flux/docs/dispatcher.html
	 */
	
	var Dispatcher = __webpack_require__(48).Dispatcher;
	
	module.exports = new Dispatcher();

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== process.env.NODE_ENV) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow weak */
	var Animation = __webpack_require__(47);
	var BlockMenu = __webpack_require__(49);
	var EditorBlock = __webpack_require__(50);
	var HasBlocks = __webpack_require__(53);
	var React = __webpack_require__(2);
	
	var Editor = React.createClass({
	  displayName: "Editor",
	
	
	  mixins: [HasBlocks],
	
	  getBlock: function getBlock(block) {
	    return React.createElement(EditorBlock, { key: block.id, block: block, editor: this.props.editor });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var block = _props.block;
	    var editor = _props.editor;
	
	
	    return React.createElement(
	      Animation,
	      { component: "div", className: "col-content", transitionName: "col-block" },
	      React.createElement(BlockMenu, { key: "block_menu", block: block, editor: editor }),
	      this.state.blocks.map(this.getBlock)
	    );
	  }
	
	});
	
	module.exports = Editor;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var BlockStore = __webpack_require__(20);
	var HasBlocks = __webpack_require__(53);
	var PreviewerBlock = __webpack_require__(51);
	var React = __webpack_require__(2);
	
	var Previewer = React.createClass({
	  displayName: "Previewer",
	
	
	  mixins: [HasBlocks],
	
	  getBlock: function getBlock(block) {
	    return React.createElement(PreviewerBlock, { key: block.id, block: block, editor: this.props.editor });
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-blocks" },
	      this.state.blocks.map(this.getBlock)
	    );
	  }
	
	});
	
	module.exports = Previewer;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var React = _interopRequire(__webpack_require__(2));
	
	var Button = React.createClass({
	  displayName: "Button",
	
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: "button",
	      type: "button"
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var tagName = _props.tagName;
	    var attrs = _objectWithoutProperties(_props, ["children", "tagName"]);
	
	    return React.createElement(tagName, attrs, [children]);
	  }
	});
	
	module.exports = Button;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	"use strict";
	
	var shallowEqual = __webpack_require__(52);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	/* @flow */
	var uid = __webpack_require__(9);
	
	var Block = (function () {
	  function Block(params) {
	    _classCallCheck(this, Block);
	
	    this.id = uid();
	    this.content = params.content || null;
	    this.parent = params.parent;
	    this.type = params.type;
	  }
	
	  _prototypeProperties(Block, null, {
	    toJSON: {
	      value: function toJSON() {
	        var BlockStore = __webpack_require__(20);
	
	        return {
	          blocks: BlockStore.childrenFor(this).map(function (i) {
	            return i.toJSON();
	          }),
	          content: this.content,
	          type: this.type
	        };
	      },
	      writable: true,
	      configurable: true
	    }
	  });
	
	  return Block;
	})();
	
	module.exports = Block;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function CreateBlock(params, position) {
	  Dispatcher.dispatch({ type: CreateBlock, params: params, position: position });
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function DestroyBlock(id) {
	  Dispatcher.dispatch({ type: DestroyBlock, id: id });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function UpdateBlock(id, content) {
	  Dispatcher.dispatch({ type: UpdateBlock, id: id, content: content });
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Dispatcher = __webpack_require__(26);
	
	module.exports = function MoveBlock(fromId, toId) {
	  Dispatcher.dispatch({ type: MoveBlock, fromId: fromId, toId: toId });
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var MediumEditor = __webpack_require__(54);
	var React = __webpack_require__(2);
	var Types = React.PropTypes;
	
	var Editor = React.createClass({
	  displayName: "Editor",
	
	
	  propTypes: {
	    html: Types.string.isRequired,
	    onBlur: Types.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      options: {
	        buttons: ["header1", "header2", "bold", "italic", "underline", "anchor", "quote", "unorderedlist", "orderedlist"],
	        firstHeader: "h1",
	        secondHeader: "h2",
	        diffLeft: 0,
	        diffTop: -10,
	        disableDoubleReturn: true
	      }
	    };
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(props, state) {
	    return false;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.setState({
	      editor: new MediumEditor(this.refs.editor.getDOMNode(), this.props.options)
	    });
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.state.editor.deactivate();
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-block-medium" },
	      React.createElement("div", { className: "col-medium", onBlur: this._onBlur, role: "textarea", "aria-multiline": "true", ref: "editor", dangerouslySetInnerHTML: { __html: this.props.html } })
	    );
	  },
	
	  _onBlur: function _onBlur() {
	    var editor = this.refs.editor.getDOMNode();
	
	    this.props.onBlur({
	      text: editor.textContent,
	      html: editor.innerHTML
	    });
	  }
	
	});
	
	module.exports = Editor;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	
	var Previewer = React.createClass({
	  displayName: "Previewer",
	
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-block-content" },
	      React.createElement("div", { className: "col-medium-preview", dangerouslySetInnerHTML: { __html: this.props.html } })
	    );
	  }
	
	});
	
	module.exports = Previewer;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Field = __webpack_require__(55);
	var Graphic = __webpack_require__(56);
	var React = __webpack_require__(2);
	var Types = React.PropTypes;
	
	var Editor = React.createClass({
	  displayName: "Editor",
	
	
	  propTypes: {
	    src: Types.string,
	    caption: Types.string,
	    attribution: Types.string,
	    onChange: Types.func.isRequired
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var src = _props.src;
	    var caption = _props.caption;
	    var attribution = _props.attribution;
	
	
	    return React.createElement(
	      "div",
	      { className: "col-img" },
	      React.createElement(Graphic, this.props),
	      React.createElement(
	        "fieldset",
	        { className: "col-img-fieldset" },
	        React.createElement(Field, { label: "Image Source", type: "url", value: src, name: "image_src", onChange: this._onSrcChange }),
	        React.createElement(Field, { label: "Caption", type: "text", value: caption, name: "image_caption", onChange: this._onCaptionChange }),
	        React.createElement(Field, { label: "Attribution", type: "text", value: attribution, name: "image_attribution", onChange: this._onAttributionChange })
	      )
	    );
	  },
	
	  _onSrcChange: function _onSrcChange(e) {
	    this.props.onChange({ src: e.currentTarget.value });
	  },
	
	  _onCaptionChange: function _onCaptionChange(e) {
	    this.props.onChange({ caption: e.currentTarget.value });
	  },
	
	  _onAttributionChange: function _onAttributionChange(e) {
	    this.props.onChange({ attribution: e.currentTarget.value });
	  }
	
	});
	
	module.exports = Editor;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	var Graphic = __webpack_require__(56);
	
	var Previewer = React.createClass({
	  displayName: "Previewer",
	
	
	  render: function render() {
	    return React.createElement(Graphic, this.props);
	  }
	
	});
	
	module.exports = Previewer;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Field = __webpack_require__(55);
	var Player = __webpack_require__(57);
	var React = __webpack_require__(2);
	var Types = React.PropTypes;
	
	var Editor = React.createClass({
	  displayName: "Editor",
	
	
	  propTypes: {
	    src: Types.string,
	    onChange: Types.func.isRequired
	  },
	
	  render: function render() {
	    var video_id = this.props.video_id;
	
	
	    return React.createElement(
	      "div",
	      { className: "col-youtube" },
	      React.createElement(Player, { video_id: video_id }),
	      React.createElement(
	        "fieldset",
	        { className: "col-youtube-fieldset" },
	        React.createElement(Field, { label: "YouTube Video ID", value: video_id, name: "youtube_video_id", onChange: this._onChange })
	      )
	    );
	  },
	
	  _onChange: function _onChange(e) {
	    this.props.onChange({ video_id: e.currentTarget.value });
	  }
	
	});
	
	module.exports = Editor;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	var Player = __webpack_require__(57);
	
	var Previewer = React.createClass({
	  displayName: "Previewer",
	
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-youtube" },
	      React.createElement(Player, { src: this.props.src })
	    );
	  }
	
	});
	
	module.exports = Previewer;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(27);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== process.env.NODE_ENV ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/ReactCSSTransitionGroup");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(63)


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var AddBlock = __webpack_require__(59);
	var BlockType = __webpack_require__(18);
	var React = __webpack_require__(2);
	var Stateful = __webpack_require__(11);
	
	var BlockMenu = React.createClass({
	  displayName: "BlockMenu",
	  mixins: [Stateful],
	
	  propTypes: {
	    editor: React.PropTypes.any.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      position: 0
	    };
	  },
	
	  getState: function getState() {
	    var _props = this.props;
	    var editor = _props.editor;
	    var block = _props.block;
	
	
	    // If there is a given block, then use the accepted types provided by that definition
	    // Otherwise, fallback to the editor.
	    return {
	      types: block.type ? BlockType.find(block.type).types : editor.types
	    };
	  },
	
	  getButton: function getButton(type) {
	    var _props = this.props;
	    var block = _props.block;
	    var position = _props.position;
	
	
	    return React.createElement(AddBlock, { key: type, type: type, block: block, position: position });
	  },
	
	  getNavigation: function getNavigation() {
	    return React.createElement(
	      "nav",
	      { className: "col-menu", role: "navigation" },
	      this.state.types.map(this.getButton)
	    );
	  },
	
	  render: function render() {
	    return this.state.types ? this.getNavigation() : null;
	  } });
	
	module.exports = BlockMenu;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Animation = __webpack_require__(47);
	var Block = __webpack_require__(60);
	var BlockMenu = __webpack_require__(49);
	var HasBlocks = __webpack_require__(53);
	var Orderable = __webpack_require__(61);
	var React = __webpack_require__(2);
	var Toolbar = __webpack_require__(62);
	
	var EditorBlock = React.createClass({
	  displayName: "EditorBlock",
	  mixins: [HasBlocks],
	
	  getBlock: function getBlock(block) {
	    return React.createElement(EditorBlock, { key: block.id, block: block, editor: this.props.editor });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var block = _props.block;
	    var editor = _props.editor;
	
	
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        Orderable,
	        { block: block },
	        React.createElement(BlockMenu, { ref: "prepend", block: block, editor: editor, position: block.parent }),
	        React.createElement(Block, { block: block, mode: editor.mode }),
	        React.createElement(
	          Animation,
	          { component: "div", className: "col-blocks", transitionName: "col-block" },
	          this.state.blocks.map(this.getBlock)
	        ),
	        React.createElement(Toolbar, { block: block })
	      ),
	      React.createElement(BlockMenu, { ref: "append", block: block.parent, editor: editor, position: block })
	    );
	  }
	});
	
	module.exports = EditorBlock;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var Block = __webpack_require__(60);
	var HasBlocks = __webpack_require__(53);
	var React = __webpack_require__(2);
	
	var PreviewerBlock = React.createClass({
	  displayName: "PreviewerBlock",
	
	
	  mixins: [HasBlocks],
	
	  getBlock: function getBlock(block) {
	    return React.createElement(PreviewerBlock, { key: block.id, block: block, editor: this.props.editor });
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var block = _props.block;
	    var editor = _props.editor;
	
	
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(Block, { block: block, mode: editor.mode }),
	      this.state.blocks.map(this.getBlock)
	    );
	  }
	
	});
	
	module.exports = PreviewerBlock;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var BlockStore = __webpack_require__(20);
	var React = __webpack_require__(2);
	var Stateful = __webpack_require__(11);
	
	module.exports = {
	  mixins: [Stateful],
	
	  propTypes: {
	    block: React.PropTypes.any.isRequired
	  },
	
	  getState: function getState() {
	    return {
	      blocks: BlockStore.childrenFor(this.props.block)
	    };
	  }
	
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	// Full polyfill for browsers with no classList support
	if (!("classList" in document.createElement("_"))) {
	    (function (view) {
	        "use strict";
	
	        if (!("Element" in view)) return;
	
	        var classListProp = "classList",
	            protoProp = "prototype",
	            elemCtrProto = view.Element[protoProp],
	            objCtr = Object,
	            strTrim = String[protoProp].trim || function () {
	            return this.replace(/^\s+|\s+$/g, "");
	        },
	            arrIndexOf = Array[protoProp].indexOf || function (item) {
	            var i = 0,
	                len = this.length;
	            for (; i < len; i++) {
	                if (i in this && this[i] === item) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	        // Vendors: please allow content code to instantiate DOMExceptions
	        ,
	            DOMEx = function (type, message) {
	            this.name = type;
	            this.code = DOMException[type];
	            this.message = message;
	        },
	            checkTokenAndGetIndex = function (classList, token) {
	            if (token === "") {
	                throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
	            }
	            if (/\s/.test(token)) {
	                throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
	            }
	            return arrIndexOf.call(classList, token);
	        },
	            ClassList = function (elem) {
	            var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
	                classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
	                i = 0,
	                len = classes.length;
	            for (; i < len; i++) {
	                this.push(classes[i]);
	            }
	            this._updateClassName = function () {
	                elem.setAttribute("class", this.toString());
	            };
	        },
	            classListProto = ClassList[protoProp] = [],
	            classListGetter = function () {
	            return new ClassList(this);
	        };
	        // Most DOMException implementations don't allow calling DOMException's toString()
	        // on non-DOMExceptions. Error's toString() is sufficient here.
	        DOMEx[protoProp] = Error[protoProp];
	        classListProto.item = function (i) {
	            return this[i] || null;
	        };
	        classListProto.contains = function (token) {
	            token += "";
	            return checkTokenAndGetIndex(this, token) !== -1;
	        };
	        classListProto.add = function () {
	            var tokens = arguments,
	                i = 0,
	                l = tokens.length,
	                token,
	                updated = false;
	            do {
	                token = tokens[i] + "";
	                if (checkTokenAndGetIndex(this, token) === -1) {
	                    this.push(token);
	                    updated = true;
	                }
	            } while (++i < l);
	
	            if (updated) {
	                this._updateClassName();
	            }
	        };
	        classListProto.remove = function () {
	            var tokens = arguments,
	                i = 0,
	                l = tokens.length,
	                token,
	                updated = false,
	                index;
	            do {
	                token = tokens[i] + "";
	                index = checkTokenAndGetIndex(this, token);
	                while (index !== -1) {
	                    this.splice(index, 1);
	                    updated = true;
	                    index = checkTokenAndGetIndex(this, token);
	                }
	            } while (++i < l);
	
	            if (updated) {
	                this._updateClassName();
	            }
	        };
	        classListProto.toggle = function (token, force) {
	            token += "";
	
	            var result = this.contains(token),
	                method = result ? force !== true && "remove" : force !== false && "add";
	
	            if (method) {
	                this[method](token);
	            }
	
	            if (force === true || force === false) {
	                return force;
	            } else {
	                return !result;
	            }
	        };
	        classListProto.toString = function () {
	            return this.join(" ");
	        };
	
	        if (objCtr.defineProperty) {
	            var classListPropDesc = {
	                get: classListGetter,
	                enumerable: true,
	                configurable: true
	            };
	            try {
	                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	            } catch (ex) {
	                // IE 8 doesn't support enumerable:true
	                if (ex.number === -2146823252) {
	                    classListPropDesc.enumerable = false;
	                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	                }
	            }
	        } else if (objCtr[protoProp].__defineGetter__) {
	            elemCtrProto.__defineGetter__(classListProp, classListGetter);
	        }
	    })(self);
	}
	
	(function (root, factory) {
	    "use strict";
	    if (true) {
	        module.exports = factory;
	    } else if (typeof define === "function" && define.amd) {
	        define(function () {
	            return factory;
	        });
	    } else {
	        root.MediumEditor = factory;
	    }
	})(undefined, (function () {
	    "use strict";
	
	    var Util;
	
	    (function (window, document) {
	        "use strict";
	
	        function copyInto(dest, source, overwrite) {
	            var prop;
	            dest = dest || {};
	            for (prop in source) {
	                if (source.hasOwnProperty(prop) && (overwrite || dest.hasOwnProperty(prop) === false)) {
	                    dest[prop] = source[prop];
	                }
	            }
	            return dest;
	        }
	
	        Util = {
	
	            // http://stackoverflow.com/questions/17907445/how-to-detect-ie11#comment30165888_17907562
	            // by rg89
	            isIE: navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape" && new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) !== null,
	
	            // https://github.com/jashkenas/underscore
	            keyCode: {
	                BACKSPACE: 8,
	                TAB: 9,
	                ENTER: 13,
	                ESCAPE: 27,
	                SPACE: 32,
	                DELETE: 46
	            },
	
	            parentElements: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre"],
	
	            defaults: function defaults(dest, source) {
	                return copyInto(dest, source);
	            },
	
	            extend: function extend(dest, source) {
	                return copyInto(dest, source, true);
	            },
	
	            derives: function derives(base, derived) {
	                var origPrototype = derived.prototype;
	                function Proto() {}
	                Proto.prototype = base.prototype;
	                derived.prototype = new Proto();
	                derived.prototype.constructor = base;
	                derived.prototype = copyInto(derived.prototype, origPrototype);
	                return derived;
	            },
	
	            // Find the next node in the DOM tree that represents any text that is being
	            // displayed directly next to the targetNode (passed as an argument)
	            // Text that appears directly next to the current node can be:
	            //  - A sibling text node
	            //  - A descendant of a sibling element
	            //  - A sibling text node of an ancestor
	            //  - A descendant of a sibling element of an ancestor
	            findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(rootNode, targetNode, ownerDocument) {
	                var pastTarget = false,
	                    nextNode,
	                    nodeIterator = ownerDocument.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT, null, false);
	
	                // Use a native NodeIterator to iterate over all the text nodes that are descendants
	                // of the rootNode.  Once past the targetNode, choose the first non-empty text node
	                nextNode = nodeIterator.nextNode();
	                while (nextNode) {
	                    if (nextNode === targetNode) {
	                        pastTarget = true;
	                    } else if (pastTarget) {
	                        if (nextNode.nodeType === 3 && nextNode.nodeValue && nextNode.nodeValue.trim().length > 0) {
	                            break;
	                        }
	                    }
	                    nextNode = nodeIterator.nextNode();
	                }
	
	                return nextNode;
	            },
	
	            isDescendant: function isDescendant(parent, child) {
	                if (!parent || !child) {
	                    return false;
	                }
	                var node = child.parentNode;
	                while (node !== null) {
	                    if (node === parent) {
	                        return true;
	                    }
	                    node = node.parentNode;
	                }
	                return false;
	            },
	
	            // https://github.com/jashkenas/underscore
	            isElement: function isElement(obj) {
	                return !!(obj && obj.nodeType === 1);
	            },
	
	            now: function now() {
	                return Date.now || new Date().getTime();
	            },
	
	            // https://github.com/jashkenas/underscore
	            throttle: function throttle(func, wait) {
	                var THROTTLE_INTERVAL = 50,
	                    context,
	                    args,
	                    result,
	                    timeout = null,
	                    previous = 0,
	                    later;
	
	                if (!wait && wait !== 0) {
	                    wait = THROTTLE_INTERVAL;
	                }
	
	                later = function () {
	                    previous = Util.now();
	                    timeout = null;
	                    result = func.apply(context, args);
	                    if (!timeout) {
	                        context = args = null;
	                    }
	                };
	
	                return function () {
	                    var currNow = Util.now(),
	                        remaining = wait - (currNow - previous);
	                    context = this;
	                    args = arguments;
	                    if (remaining <= 0 || remaining > wait) {
	                        clearTimeout(timeout);
	                        timeout = null;
	                        previous = currNow;
	                        result = func.apply(context, args);
	                        if (!timeout) {
	                            context = args = null;
	                        }
	                    } else if (!timeout) {
	                        timeout = setTimeout(later, remaining);
	                    }
	                    return result;
	                };
	            },
	
	            traverseUp: function (current, testElementFunction) {
	                do {
	                    if (current.nodeType === 1) {
	                        if (testElementFunction(current)) {
	                            return current;
	                        }
	                        // do not traverse upwards past the nearest containing editor
	                        if (current.getAttribute("data-medium-element")) {
	                            return false;
	                        }
	                    }
	
	                    current = current.parentNode;
	                } while (current);
	
	                return false;
	            },
	
	            htmlEntities: function (str) {
	                // converts special characters (like <) into their escaped/encoded values (like &lt;).
	                // This allows you to show to display the string without the browser reading it as HTML.
	                return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
	            },
	
	            // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
	            insertHTMLCommand: function (doc, html) {
	                var selection, range, el, fragment, node, lastNode;
	
	                if (doc.queryCommandSupported("insertHTML")) {
	                    try {
	                        return doc.execCommand("insertHTML", false, html);
	                    } catch (ignore) {}
	                }
	
	                selection = window.getSelection();
	                if (selection.getRangeAt && selection.rangeCount) {
	                    range = selection.getRangeAt(0);
	                    range.deleteContents();
	
	                    el = doc.createElement("div");
	                    el.innerHTML = html;
	                    fragment = doc.createDocumentFragment();
	                    while (el.firstChild) {
	                        node = el.firstChild;
	                        lastNode = fragment.appendChild(node);
	                    }
	                    range.insertNode(fragment);
	
	                    // Preserve the selection:
	                    if (lastNode) {
	                        range = range.cloneRange();
	                        range.setStartAfter(lastNode);
	                        range.collapse(true);
	                        selection.removeAllRanges();
	                        selection.addRange(range);
	                    }
	                }
	            },
	
	            // TODO: not sure if this should be here
	            setTargetBlank: function (el) {
	                var i;
	                if (el.tagName.toLowerCase() === "a") {
	                    el.target = "_blank";
	                } else {
	                    el = el.getElementsByTagName("a");
	
	                    for (i = 0; i < el.length; i += 1) {
	                        el[i].target = "_blank";
	                    }
	                }
	            },
	
	            isListItemChild: function (node) {
	                var parentNode = node.parentNode,
	                    tagName = parentNode.tagName.toLowerCase();
	                while (this.parentElements.indexOf(tagName) === -1 && tagName !== "div") {
	                    if (tagName === "li") {
	                        return true;
	                    }
	                    parentNode = parentNode.parentNode;
	                    if (parentNode && parentNode.tagName) {
	                        tagName = parentNode.tagName.toLowerCase();
	                    } else {
	                        return false;
	                    }
	                }
	                return false;
	            }
	        };
	    })(window, document);
	
	    var Selection;
	
	    (function (window, document) {
	        "use strict";
	
	        Selection = {
	            // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
	            // by You
	            getSelectionStart: function (ownerDocument) {
	                var node = ownerDocument.getSelection().anchorNode,
	                    startNode = node && node.nodeType === 3 ? node.parentNode : node;
	                return startNode;
	            },
	
	            findMatchingSelectionParent: function (testElementFunction, contentWindow) {
	                var selection = contentWindow.getSelection(),
	                    range,
	                    current;
	
	                if (selection.rangeCount === 0) {
	                    return false;
	                }
	
	                range = selection.getRangeAt(0);
	                current = range.commonAncestorContainer;
	
	                return Util.traverseUp(current, testElementFunction);
	            },
	
	            getSelectionElement: function (contentWindow) {
	                return this.findMatchingSelectionParent(function (el) {
	                    return el.getAttribute("data-medium-element");
	                }, contentWindow);
	            },
	
	            selectionInContentEditableFalse: function (contentWindow) {
	                return this.findMatchingSelectionParent(function (el) {
	                    return el && el.nodeName !== "#text" && el.getAttribute("contenteditable") === "false";
	                }, contentWindow);
	            },
	
	            // http://stackoverflow.com/questions/4176923/html-of-selected-text
	            // by Tim Down
	            getSelectionHtml: function getSelectionHtml() {
	                var i,
	                    html = "",
	                    sel,
	                    len,
	                    container;
	                if (this.options.contentWindow.getSelection !== undefined) {
	                    sel = this.options.contentWindow.getSelection();
	                    if (sel.rangeCount) {
	                        container = this.options.ownerDocument.createElement("div");
	                        for (i = 0, len = sel.rangeCount; i < len; i += 1) {
	                            container.appendChild(sel.getRangeAt(i).cloneContents());
	                        }
	                        html = container.innerHTML;
	                    }
	                } else if (this.options.ownerDocument.selection !== undefined) {
	                    if (this.options.ownerDocument.selection.type === "Text") {
	                        html = this.options.ownerDocument.selection.createRange().htmlText;
	                    }
	                }
	                return html;
	            },
	
	            /**
	             *  Find the caret position within an element irrespective of any inline tags it may contain.
	             *
	             *  @param {DOMElement} An element containing the cursor to find offsets relative to.
	             *  @param {Range} A Range representing cursor position. Will window.getSelection if none is passed.
	             *  @return {Object} 'left' and 'right' attributes contain offsets from begining and end of Element
	             */
	            getCaretOffsets: function getCaretOffsets(element, range) {
	                var preCaretRange, postCaretRange;
	
	                if (!range) {
	                    range = window.getSelection().getRangeAt(0);
	                }
	
	                preCaretRange = range.cloneRange();
	                postCaretRange = range.cloneRange();
	
	                preCaretRange.selectNodeContents(element);
	                preCaretRange.setEnd(range.endContainer, range.endOffset);
	
	                postCaretRange.selectNodeContents(element);
	                postCaretRange.setStart(range.endContainer, range.endOffset);
	
	                return {
	                    left: preCaretRange.toString().length,
	                    right: postCaretRange.toString().length
	                };
	            },
	
	            // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox
	            rangeSelectsSingleNode: function (range) {
	                var startNode = range.startContainer;
	                return startNode === range.endContainer && startNode.hasChildNodes() && range.endOffset === range.startOffset + 1;
	            },
	
	            getSelectedParentElement: function (range) {
	                var selectedParentElement = null;
	                if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
	                    selectedParentElement = range.startContainer.childNodes[range.startOffset];
	                } else if (range.startContainer.nodeType === 3) {
	                    selectedParentElement = range.startContainer.parentNode;
	                } else {
	                    selectedParentElement = range.startContainer;
	                }
	                return selectedParentElement;
	            },
	
	            getSelectionData: function (el) {
	                var tagName;
	
	                if (el && el.tagName) {
	                    tagName = el.tagName.toLowerCase();
	                }
	
	                while (el && Util.parentElements.indexOf(tagName) === -1) {
	                    el = el.parentNode;
	                    if (el && el.tagName) {
	                        tagName = el.tagName.toLowerCase();
	                    }
	                }
	
	                return {
	                    el: el,
	                    tagName: tagName
	                };
	            }
	        };
	    })(document, window);
	
	    var DefaultButton, ButtonsData;
	
	    (function (window, document) {
	        "use strict";
	
	        ButtonsData = {
	            bold: {
	                name: "bold",
	                action: "bold",
	                aria: "bold",
	                tagNames: ["b", "strong"],
	                style: {
	                    prop: "font-weight",
	                    value: "700|bold"
	                },
	                useQueryState: true,
	                contentDefault: "<b>B</b>",
	                contentFA: "<i class=\"fa fa-bold\"></i>",
	                key: "b"
	            },
	            italic: {
	                name: "italic",
	                action: "italic",
	                aria: "italic",
	                tagNames: ["i", "em"],
	                style: {
	                    prop: "font-style",
	                    value: "italic"
	                },
	                useQueryState: true,
	                contentDefault: "<b><i>I</i></b>",
	                contentFA: "<i class=\"fa fa-italic\"></i>",
	                key: "i"
	            },
	            underline: {
	                name: "underline",
	                action: "underline",
	                aria: "underline",
	                tagNames: ["u"],
	                style: {
	                    prop: "text-decoration",
	                    value: "underline"
	                },
	                useQueryState: true,
	                contentDefault: "<b><u>U</u></b>",
	                contentFA: "<i class=\"fa fa-underline\"></i>",
	                key: "u"
	            },
	            strikethrough: {
	                name: "strikethrough",
	                action: "strikethrough",
	                aria: "strike through",
	                tagNames: ["strike"],
	                style: {
	                    prop: "text-decoration",
	                    value: "line-through"
	                },
	                useQueryState: true,
	                contentDefault: "<s>A</s>",
	                contentFA: "<i class=\"fa fa-strikethrough\"></i>"
	            },
	            superscript: {
	                name: "superscript",
	                action: "superscript",
	                aria: "superscript",
	                tagNames: ["sup"],
	                /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
	                   https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
	                // useQueryState: true
	                contentDefault: "<b>x<sup>1</sup></b>",
	                contentFA: "<i class=\"fa fa-superscript\"></i>"
	            },
	            subscript: {
	                name: "subscript",
	                action: "subscript",
	                aria: "subscript",
	                tagNames: ["sub"],
	                /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
	                   https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
	                // useQueryState: true
	                contentDefault: "<b>x<sub>1</sub></b>",
	                contentFA: "<i class=\"fa fa-subscript\"></i>"
	            },
	            image: {
	                name: "image",
	                action: "image",
	                aria: "image",
	                tagNames: ["img"],
	                contentDefault: "<b>image</b>",
	                contentFA: "<i class=\"fa fa-picture-o\"></i>"
	            },
	            quote: {
	                name: "quote",
	                action: "append-blockquote",
	                aria: "blockquote",
	                tagNames: ["blockquote"],
	                contentDefault: "<b>&ldquo;</b>",
	                contentFA: "<i class=\"fa fa-quote-right\"></i>"
	            },
	            orderedlist: {
	                name: "orderedlist",
	                action: "insertorderedlist",
	                aria: "ordered list",
	                tagNames: ["ol"],
	                useQueryState: true,
	                contentDefault: "<b>1.</b>",
	                contentFA: "<i class=\"fa fa-list-ol\"></i>"
	            },
	            unorderedlist: {
	                name: "unorderedlist",
	                action: "insertunorderedlist",
	                aria: "unordered list",
	                tagNames: ["ul"],
	                useQueryState: true,
	                contentDefault: "<b>&bull;</b>",
	                contentFA: "<i class=\"fa fa-list-ul\"></i>"
	            },
	            pre: {
	                name: "pre",
	                action: "append-pre",
	                aria: "preformatted text",
	                tagNames: ["pre"],
	                contentDefault: "<b>0101</b>",
	                contentFA: "<i class=\"fa fa-code fa-lg\"></i>"
	            },
	            indent: {
	                name: "indent",
	                action: "indent",
	                aria: "indent",
	                tagNames: [],
	                contentDefault: "<b>&rarr;</b>",
	                contentFA: "<i class=\"fa fa-indent\"></i>"
	            },
	            outdent: {
	                name: "outdent",
	                action: "outdent",
	                aria: "outdent",
	                tagNames: [],
	                contentDefault: "<b>&larr;</b>",
	                contentFA: "<i class=\"fa fa-outdent\"></i>"
	            },
	            justifyCenter: {
	                name: "justifyCenter",
	                action: "justifyCenter",
	                aria: "center justify",
	                tagNames: [],
	                style: {
	                    prop: "text-align",
	                    value: "center"
	                },
	                useQueryState: true,
	                contentDefault: "<b>C</b>",
	                contentFA: "<i class=\"fa fa-align-center\"></i>"
	            },
	            justifyFull: {
	                name: "justifyFull",
	                action: "justifyFull",
	                aria: "full justify",
	                tagNames: [],
	                style: {
	                    prop: "text-align",
	                    value: "justify"
	                },
	                useQueryState: true,
	                contentDefault: "<b>J</b>",
	                contentFA: "<i class=\"fa fa-align-justify\"></i>"
	            },
	            justifyLeft: {
	                name: "justifyLeft",
	                action: "justifyLeft",
	                aria: "left justify",
	                tagNames: [],
	                style: {
	                    prop: "text-align",
	                    value: "left"
	                },
	                useQueryState: true,
	                contentDefault: "<b>L</b>",
	                contentFA: "<i class=\"fa fa-align-left\"></i>"
	            },
	            justifyRight: {
	                name: "justifyRight",
	                action: "justifyRight",
	                aria: "right justify",
	                tagNames: [],
	                style: {
	                    prop: "text-align",
	                    value: "right"
	                },
	                useQueryState: true,
	                contentDefault: "<b>R</b>",
	                contentFA: "<i class=\"fa fa-align-right\"></i>"
	            },
	            header1: {
	                name: "header1",
	                action: function (options) {
	                    return "append-" + options.firstHeader;
	                },
	                aria: function (options) {
	                    return options.firstHeader;
	                },
	                tagNames: function (options) {
	                    return [options.firstHeader];
	                },
	                contentDefault: "<b>H1</b>"
	            },
	            header2: {
	                name: "header2",
	                action: function (options) {
	                    return "append-" + options.secondHeader;
	                },
	                aria: function (options) {
	                    return options.secondHeader;
	                },
	                tagNames: function (options) {
	                    return [options.secondHeader];
	                },
	                contentDefault: "<b>H2</b>"
	            }
	        };
	
	        DefaultButton = function (options, instance) {
	            this.options = options;
	            this.name = options.name;
	            this.init(instance);
	        };
	
	        DefaultButton.prototype = {
	            init: function (instance) {
	                this.base = instance;
	
	                this.button = this.createButton();
	                this.base.on(this.button, "click", this.handleClick.bind(this));
	            },
	            getButton: function () {
	                return this.button;
	            },
	            getAction: function () {
	                return typeof this.options.action === "function" ? this.options.action(this.base.options) : this.options.action;
	            },
	            getAria: function () {
	                return typeof this.options.aria === "function" ? this.options.aria(this.base.options) : this.options.aria;
	            },
	            getTagNames: function () {
	                return typeof this.options.tagNames === "function" ? this.options.tagNames(this.base.options) : this.options.tagNames;
	            },
	            createButton: function () {
	                var button = this.base.options.ownerDocument.createElement("button"),
	                    content = this.options.contentDefault;
	                button.classList.add("medium-editor-action");
	                button.classList.add("medium-editor-action-" + this.name);
	                button.setAttribute("data-action", this.getAction());
	                button.setAttribute("aria-label", this.getAria());
	                if (this.base.options.buttonLabels) {
	                    if (this.base.options.buttonLabels === "fontawesome" && this.options.contentFA) {
	                        content = this.options.contentFA;
	                    } else if (typeof this.base.options.buttonLabels === "object" && this.base.options.buttonLabels[this.name]) {
	                        content = this.base.options.buttonLabels[this.options.name];
	                    }
	                }
	                button.innerHTML = content;
	                return button;
	            },
	            handleClick: function (evt) {
	                evt.preventDefault();
	                evt.stopPropagation();
	
	                var action = this.getAction();
	
	                if (action) {
	                    this.base.execAction(action);
	                }
	            },
	            isActive: function () {
	                return this.button.classList.contains(this.base.options.activeButtonClass);
	            },
	            setInactive: function () {
	                this.button.classList.remove(this.base.options.activeButtonClass);
	                delete this.knownState;
	            },
	            setActive: function () {
	                this.button.classList.add(this.base.options.activeButtonClass);
	                delete this.knownState;
	            },
	            queryCommandState: function () {
	                var queryState = null;
	                if (this.options.useQueryState) {
	                    queryState = this.base.queryCommandState(this.getAction());
	                }
	                return queryState;
	            },
	            isAlreadyApplied: function (node) {
	                var isMatch = false,
	                    tagNames = this.getTagNames(),
	                    styleVals,
	                    computedStyle;
	
	                if (this.knownState === false || this.knownState === true) {
	                    return this.knownState;
	                }
	
	                if (tagNames && tagNames.length > 0 && node.tagName) {
	                    isMatch = tagNames.indexOf(node.tagName.toLowerCase()) !== -1;
	                }
	
	                if (!isMatch && this.options.style) {
	                    styleVals = this.options.style.value.split("|");
	                    computedStyle = this.base.options.contentWindow.getComputedStyle(node, null).getPropertyValue(this.options.style.prop);
	                    styleVals.forEach((function (val) {
	                        if (!this.knownState) {
	                            this.knownState = isMatch = computedStyle.indexOf(val) !== -1;
	                        }
	                    }).bind(this));
	                }
	
	                return isMatch;
	            }
	        };
	    })(window, document);
	
	    var pasteHandler;
	
	    (function (window, document) {
	        "use strict";
	        /*jslint regexp: true*/
	        /*
	            jslint does not allow character negation, because the negation
	            will not match any unicode characters. In the regexes in this
	            block, negation is used specifically to match the end of an html
	            tag, and in fact unicode characters *should* be allowed.
	        */
	        function createReplacements() {
	            return [
	
	            // replace two bogus tags that begin pastes from google docs
	            [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""],
	
	            // un-html spaces and newlines inserted by OS X
	            [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"],
	
	            // replace google docs italics+bold with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi), "<span class=\"replace-with italic bold\">"],
	
	            // replace google docs italics with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), "<span class=\"replace-with italic\">"],
	
	            //[replace google docs bolds with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi), "<span class=\"replace-with bold\">"],
	
	            // replace manually entered b/i/a tags with real ones
	            [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"],
	
	            // replace manually a tags with real ones, converting smart-quotes from google docs
	            [new RegExp(/&lt;a\s+href=(&quot;|&rdquo;|&ldquo;|“|”)([^&]+)(&quot;|&rdquo;|&ldquo;|“|”)&gt;/gi), "<a href=\"$2\">"]];
	        }
	        /*jslint regexp: false*/
	
	        pasteHandler = {
	            handlePaste: function (element, evt, options) {
	                var paragraphs,
	                    html = "",
	                    p,
	                    dataFormatHTML = "text/html",
	                    dataFormatPlain = "text/plain";
	
	                element.classList.remove("medium-editor-placeholder");
	                if (!options.forcePlainText && !options.cleanPastedHTML) {
	                    return element;
	                }
	
	                if (options.contentWindow.clipboardData && evt.clipboardData === undefined) {
	                    evt.clipboardData = options.contentWindow.clipboardData;
	                    // If window.clipboardData exists, but e.clipboardData doesn't exist,
	                    // we're probably in IE. IE only has two possibilities for clipboard
	                    // data format: 'Text' and 'URL'.
	                    //
	                    // Of the two, we want 'Text':
	                    dataFormatHTML = "Text";
	                    dataFormatPlain = "Text";
	                }
	
	                if (evt.clipboardData && evt.clipboardData.getData && !evt.defaultPrevented) {
	                    evt.preventDefault();
	
	                    if (options.cleanPastedHTML && evt.clipboardData.getData(dataFormatHTML)) {
	                        return this.cleanPaste(evt.clipboardData.getData(dataFormatHTML), options);
	                    }
	                    if (!(options.disableReturn || element.getAttribute("data-disable-return"))) {
	                        paragraphs = evt.clipboardData.getData(dataFormatPlain).split(/[\r\n]/g);
	                        for (p = 0; p < paragraphs.length; p += 1) {
	                            if (paragraphs[p] !== "") {
	                                html += "<p>" + Util.htmlEntities(paragraphs[p]) + "</p>";
	                            }
	                        }
	                        Util.insertHTMLCommand(options.ownerDocument, html);
	                    } else {
	                        html = Util.htmlEntities(evt.clipboardData.getData(dataFormatPlain));
	                        Util.insertHTMLCommand(options.ownerDocument, html);
	                    }
	                }
	            },
	
	            cleanPaste: function (text, options) {
	                var i,
	                    elList,
	                    workEl,
	                    el = Selection.getSelectionElement(options.contentWindow),
	                    multiline = /<p|<br|<div/.test(text),
	                    replacements = createReplacements();
	
	                for (i = 0; i < replacements.length; i += 1) {
	                    text = text.replace(replacements[i][0], replacements[i][1]);
	                }
	
	                if (multiline) {
	                    // double br's aren't converted to p tags, but we want paragraphs.
	                    elList = text.split("<br><br>");
	
	                    this.pasteHTML("<p>" + elList.join("</p><p>") + "</p>", options.ownerDocument);
	
	                    try {
	                        options.ownerDocument.execCommand("insertText", false, "\n");
	                    } catch (ignore) {}
	
	                    // block element cleanup
	                    elList = el.querySelectorAll("a,p,div,br");
	                    for (i = 0; i < elList.length; i += 1) {
	                        workEl = elList[i];
	
	                        switch (workEl.tagName.toLowerCase()) {
	                            case "a":
	                                if (options.targetBlank) {
	                                    Util.setTargetBlank(workEl);
	                                }
	                                break;
	                            case "p":
	                            case "div":
	                                this.filterCommonBlocks(workEl);
	                                break;
	                            case "br":
	                                this.filterLineBreak(workEl);
	                                break;
	                        }
	                    }
	                } else {
	                    this.pasteHTML(text, options.ownerDocument);
	                }
	            },
	
	            pasteHTML: function (html, ownerDocument) {
	                var elList,
	                    workEl,
	                    i,
	                    fragmentBody,
	                    pasteBlock = ownerDocument.createDocumentFragment();
	
	                pasteBlock.appendChild(ownerDocument.createElement("body"));
	
	                fragmentBody = pasteBlock.querySelector("body");
	                fragmentBody.innerHTML = html;
	
	                this.cleanupSpans(fragmentBody, ownerDocument);
	
	                elList = fragmentBody.querySelectorAll("*");
	                for (i = 0; i < elList.length; i += 1) {
	                    workEl = elList[i];
	
	                    // delete ugly attributes
	                    workEl.removeAttribute("class");
	                    workEl.removeAttribute("style");
	                    workEl.removeAttribute("dir");
	
	                    if (workEl.tagName.toLowerCase() === "meta") {
	                        workEl.parentNode.removeChild(workEl);
	                    }
	                }
	                Util.insertHTMLCommand(ownerDocument, fragmentBody.innerHTML.replace(/&nbsp;/g, " "));
	            },
	            isCommonBlock: function (el) {
	                return el && (el.tagName.toLowerCase() === "p" || el.tagName.toLowerCase() === "div");
	            },
	            filterCommonBlocks: function (el) {
	                if (/^\s*$/.test(el.textContent)) {
	                    el.parentNode.removeChild(el);
	                }
	            },
	            filterLineBreak: function (el) {
	                if (this.isCommonBlock(el.previousElementSibling)) {
	                    // remove stray br's following common block elements
	                    el.parentNode.removeChild(el);
	                } else if (this.isCommonBlock(el.parentNode) && (el.parentNode.firstChild === el || el.parentNode.lastChild === el)) {
	                    // remove br's just inside open or close tags of a div/p
	                    el.parentNode.removeChild(el);
	                } else if (el.parentNode.childElementCount === 1 && el.parentNode.textContent === "") {
	                    // and br's that are the only child of a div/p
	                    this.removeWithParent(el);
	                }
	            },
	
	            // remove an element, including its parent, if it is the only element within its parent
	            removeWithParent: function (el) {
	                if (el && el.parentNode) {
	                    if (el.parentNode.parentNode && el.parentNode.childElementCount === 1) {
	                        el.parentNode.parentNode.removeChild(el.parentNode);
	                    } else {
	                        el.parentNode.removeChild(el.parentNode);
	                    }
	                }
	            },
	
	            cleanupSpans: function (container_el, ownerDocument) {
	                var i,
	                    el,
	                    new_el,
	                    spans = container_el.querySelectorAll(".replace-with"),
	                    isCEF = function (el) {
	                    return el && el.nodeName !== "#text" && el.getAttribute("contenteditable") === "false";
	                };
	
	                for (i = 0; i < spans.length; i += 1) {
	                    el = spans[i];
	                    new_el = ownerDocument.createElement(el.classList.contains("bold") ? "b" : "i");
	
	                    if (el.classList.contains("bold") && el.classList.contains("italic")) {
	                        // add an i tag as well if this has both italics and bold
	                        new_el.innerHTML = "<i>" + el.innerHTML + "</i>";
	                    } else {
	                        new_el.innerHTML = el.innerHTML;
	                    }
	                    el.parentNode.replaceChild(new_el, el);
	                }
	
	                spans = container_el.querySelectorAll("span");
	                for (i = 0; i < spans.length; i += 1) {
	                    el = spans[i];
	
	                    // bail if span is in contenteditable = false
	                    if (Util.traverseUp(el, isCEF)) {
	                        return false;
	                    }
	
	                    // remove empty spans, replace others with their contents
	                    if (/^\s*$/.test()) {
	                        el.parentNode.removeChild(el);
	                    } else {
	                        el.parentNode.replaceChild(ownerDocument.createTextNode(el.textContent), el);
	                    }
	                }
	            }
	        };
	    })(window, document);
	
	    var AnchorExtension;
	
	    (function (window, document) {
	        "use strict";
	
	        function AnchorDerived() {
	            this.parent = true;
	            this.options = {
	                name: "anchor",
	                action: "createLink",
	                aria: "link",
	                tagNames: ["a"],
	                contentDefault: "<b>#</b>",
	                contentFA: "<i class=\"fa fa-link\"></i>"
	            };
	            this.name = "anchor";
	            this.hasForm = true;
	        }
	
	        AnchorDerived.prototype = {
	
	            // Button and Extension handling
	
	            // Called when the button the toolbar is clicked
	            // Overrides DefaultButton.handleClick
	            handleClick: function (evt) {
	                evt.preventDefault();
	                evt.stopPropagation();
	
	                if (!this.base.selection) {
	                    this.base.checkSelection();
	                }
	
	                var selectedParentElement = Selection.getSelectedParentElement(this.base.selectionRange);
	                if (selectedParentElement.tagName && selectedParentElement.tagName.toLowerCase() === "a") {
	                    return this.base.execAction("unlink");
	                }
	
	                if (!this.isDisplayed()) {
	                    this.showForm();
	                }
	
	                return false;
	            },
	
	            // Called by medium-editor to append form to the toolbar
	            getForm: function () {
	                if (!this.anchorForm) {
	                    this.anchorForm = this.createForm();
	                }
	                return this.anchorForm;
	            },
	
	            // Used by medium-editor when the default toolbar is to be displayed
	            isDisplayed: function () {
	                return this.getForm().style.display === "block";
	            },
	
	            hideForm: function () {
	                this.getForm().style.display = "none";
	                this.getInput().value = "";
	            },
	
	            showForm: function (link_value) {
	                var input = this.getInput();
	
	                this.base.saveSelection();
	                this.base.hideToolbarDefaultActions();
	                this.getForm().style.display = "block";
	                this.base.setToolbarPosition();
	                this.base.keepToolbarAlive = true;
	
	                input.value = link_value || "";
	                input.focus();
	            },
	
	            // Called by core when tearing down medium-editor (deactivate)
	            deactivate: function () {
	                if (!this.anchorForm) {
	                    return false;
	                }
	
	                if (this.anchorForm.parentNode) {
	                    this.anchorForm.parentNode.removeChild(this.anchorForm);
	                }
	
	                delete this.anchorForm;
	            },
	
	            // core methods
	
	            doLinkCreation: function () {
	                var targetCheckbox = this.getForm().querySelector(".medium-editor-toolbar-anchor-target"),
	                    buttonCheckbox = this.getForm().querySelector(".medium-editor-toolbar-anchor-button"),
	                    opts = {
	                    url: this.getInput().value
	                };
	
	                this.base.restoreSelection();
	
	                if (this.base.options.checkLinkFormat) {
	                    opts.url = this.checkLinkFormat(opts.url);
	                }
	
	                if (targetCheckbox && targetCheckbox.checked) {
	                    opts.target = "_blank";
	                } else {
	                    opts.target = "_self";
	                }
	
	                if (buttonCheckbox && buttonCheckbox.checked) {
	                    opts.buttonClass = this.base.options.anchorButtonClass;
	                }
	
	                this.base.createLink(opts);
	                this.base.keepToolbarAlive = false;
	                this.base.checkSelection();
	            },
	
	            checkLinkFormat: function (value) {
	                var re = /^(https?|ftps?|rtmpt?):\/\/|mailto:/;
	                return (re.test(value) ? "" : "http://") + value;
	            },
	
	            doFormCancel: function () {
	                this.base.restoreSelection();
	                this.base.keepToolbarAlive = false;
	                this.base.checkSelection();
	            },
	
	            // form creation and event handling
	
	            createForm: function () {
	                var doc = this.base.options.ownerDocument,
	                    form = doc.createElement("div"),
	                    input = doc.createElement("input"),
	                    close = doc.createElement("a"),
	                    save = doc.createElement("a"),
	                    target,
	                    target_label,
	                    button,
	                    button_label;
	
	                // Anchor Form (div)
	                form.className = "medium-editor-toolbar-form";
	                form.id = "medium-editor-toolbar-form-anchor-" + this.base.id;
	
	                // Handle clicks on the form itself
	                this.base.on(form, "click", this.handleFormClick.bind(this));
	
	                // Add url textbox
	                input.setAttribute("type", "text");
	                input.className = "medium-editor-toolbar-input";
	                input.setAttribute("placeholder", this.base.options.anchorInputPlaceholder);
	                form.appendChild(input);
	
	                // Handle typing in the textbox
	                this.base.on(input, "keyup", this.handleTextboxKeyup.bind(this));
	
	                // Handle clicks into the textbox
	                this.base.on(input, "click", this.handleFormClick.bind(this));
	
	                // Add save buton
	                save.setAttribute("href", "#");
	                save.className = "medium-editor-toobar-save";
	                save.innerHTML = this.base.options.buttonLabels === "fontawesome" ? "<i class=\"fa fa-check\"></i>" : "&#10003;";
	                form.appendChild(save);
	
	                // Handle save button clicks (capture)
	                this.base.on(save, "click", this.handleSaveClick.bind(this), true);
	
	                // Add close button
	                close.setAttribute("href", "#");
	                close.className = "medium-editor-toobar-close";
	                close.innerHTML = this.base.options.buttonLabels === "fontawesome" ? "<i class=\"fa fa-times\"></i>" : "&times;";
	                form.appendChild(close);
	
	                // Handle close button clicks
	                this.base.on(close, "click", this.handleCloseClick.bind(this));
	
	                // (Optional) Add 'open in new window' checkbox
	                if (this.base.options.anchorTarget) {
	                    target = doc.createElement("input");
	                    target.setAttribute("type", "checkbox");
	                    target.className = "medium-editor-toolbar-anchor-target";
	
	                    target_label = doc.createElement("label");
	                    target_label.innerHTML = this.base.options.anchorInputCheckboxLabel;
	                    target_label.insertBefore(target, target_label.firstChild);
	
	                    form.appendChild(target_label);
	                }
	
	                // (Optional) Add 'add button class to anchor' checkbox
	                if (this.base.options.anchorButton) {
	                    button = doc.createElement("input");
	                    button.setAttribute("type", "checkbox");
	                    button.className = "medium-editor-toolbar-anchor-button";
	
	                    button_label = doc.createElement("label");
	                    button_label.innerHTML = "Button";
	                    button_label.insertBefore(button, button_label.firstChild);
	
	                    form.appendChild(button_label);
	                }
	
	                // Handle click (capture) & focus (capture) outside of the form
	                this.base.on(doc.body, "click", this.handleOutsideInteraction.bind(this), true);
	                this.base.on(doc.body, "focus", this.handleOutsideInteraction.bind(this), true);
	
	                return form;
	            },
	
	            getInput: function () {
	                return this.getForm().querySelector("input.medium-editor-toolbar-input");
	            },
	
	            handleOutsideInteraction: function (event) {
	                if (event.target !== this.getForm() && !Util.isDescendant(this.getForm(), event.target) && !Util.isDescendant(this.base.toolbarActions, event.target)) {
	                    this.base.keepToolbarAlive = false;
	                    this.base.checkSelection();
	                }
	            },
	
	            handleTextboxKeyup: function (event) {
	                // For ENTER -> create the anchor
	                if (event.keyCode === Util.keyCode.ENTER) {
	                    event.preventDefault();
	                    this.doLinkCreation();
	                    return;
	                }
	
	                // For ESCAPE -> close the form
	                if (event.keyCode === Util.keyCode.ESCAPE) {
	                    event.preventDefault();
	                    this.doFormCancel();
	                }
	            },
	
	            handleFormClick: function (event) {
	                // make sure not to hide form when clicking inside the form
	                event.stopPropagation();
	                this.base.keepToolbarAlive = true;
	            },
	
	            handleSaveClick: function (event) {
	                // Clicking Save -> create the anchor
	                event.preventDefault();
	                this.doLinkCreation();
	            },
	
	            handleCloseClick: function (event) {
	                // Click Close -> close the form
	                event.preventDefault();
	                this.doFormCancel();
	            }
	        };
	
	        AnchorExtension = Util.derives(DefaultButton, AnchorDerived);
	    })(window, document);
	
	    function MediumEditor(elements, options) {
	        "use strict";
	        return this.init(elements, options);
	    }
	
	    (function () {
	        "use strict";
	
	        MediumEditor.statics = {
	            ButtonsData: ButtonsData,
	            DefaultButton: DefaultButton,
	            AnchorExtension: AnchorExtension
	        };
	
	        MediumEditor.prototype = {
	            defaults: {
	                allowMultiParagraphSelection: true,
	                anchorInputPlaceholder: "Paste or type a link",
	                anchorInputCheckboxLabel: "Open in new window",
	                anchorPreviewHideDelay: 500,
	                buttons: ["bold", "italic", "underline", "anchor", "header1", "header2", "quote"],
	                buttonLabels: false,
	                checkLinkFormat: false,
	                cleanPastedHTML: false,
	                delay: 0,
	                diffLeft: 0,
	                diffTop: -10,
	                disableReturn: false,
	                disableDoubleReturn: false,
	                disableToolbar: false,
	                disableEditing: false,
	                disablePlaceholders: false,
	                toolbarAlign: "center",
	                elementsContainer: false,
	                imageDragging: true,
	                standardizeSelectionStart: false,
	                contentWindow: window,
	                ownerDocument: document,
	                firstHeader: "h3",
	                forcePlainText: true,
	                placeholder: "Type your text",
	                secondHeader: "h4",
	                targetBlank: false,
	                anchorTarget: false,
	                anchorButton: false,
	                anchorButtonClass: "btn",
	                extensions: {},
	                activeButtonClass: "medium-editor-button-active",
	                firstButtonClass: "medium-editor-button-first",
	                lastButtonClass: "medium-editor-button-last"
	            },
	
	            init: function (elements, options) {
	                var uniqueId = 1;
	
	                this.options = Util.defaults(options, this.defaults);
	                this.setElementSelection(elements);
	                if (this.elements.length === 0) {
	                    return;
	                }
	
	                if (!this.options.elementsContainer) {
	                    this.options.elementsContainer = this.options.ownerDocument.body;
	                }
	
	                while (this.options.elementsContainer.querySelector("#medium-editor-toolbar-" + uniqueId)) {
	                    uniqueId = uniqueId + 1;
	                }
	
	                this.id = uniqueId;
	
	                return this.setup();
	            },
	
	            setup: function () {
	                this.events = [];
	                this.isActive = true;
	                this.initThrottledMethods().initCommands().initElements().bindSelect().bindDragDrop().bindPaste().setPlaceholders().bindElementActions().bindWindowActions();
	            },
	
	            on: function (target, event, listener, useCapture) {
	                target.addEventListener(event, listener, useCapture);
	                this.events.push([target, event, listener, useCapture]);
	            },
	
	            off: function (target, event, listener, useCapture) {
	                var index = this.indexOfListener(target, event, listener, useCapture),
	                    e;
	                if (index !== -1) {
	                    e = this.events.splice(index, 1)[0];
	                    e[0].removeEventListener(e[1], e[2], e[3]);
	                }
	            },
	
	            indexOfListener: function (target, event, listener, useCapture) {
	                var i, n, item;
	                for (i = 0, n = this.events.length; i < n; i = i + 1) {
	                    item = this.events[i];
	                    if (item[0] === target && item[1] === event && item[2] === listener && item[3] === useCapture) {
	                        return i;
	                    }
	                }
	                return -1;
	            },
	
	            delay: function (fn) {
	                var self = this;
	                setTimeout(function () {
	                    if (self.isActive) {
	                        fn();
	                    }
	                }, this.options.delay);
	            },
	
	            removeAllEvents: function () {
	                var e = this.events.pop();
	                while (e) {
	                    e[0].removeEventListener(e[1], e[2], e[3]);
	                    e = this.events.pop();
	                }
	            },
	
	            initThrottledMethods: function () {
	                var self = this;
	
	                // handleResize is throttled because:
	                // - It will be called when the browser is resizing, which can fire many times very quickly
	                // - For some event (like resize) a slight lag in UI responsiveness is OK and provides performance benefits
	                this.handleResize = Util.throttle(function () {
	                    if (self.isActive) {
	                        self.positionToolbarIfShown();
	                    }
	                });
	
	                // handleBlur is throttled because:
	                // - This method could be called many times due to the type of event handlers that are calling it
	                // - We want a slight delay so that other events in the stack can run, some of which may
	                //   prevent the toolbar from being hidden (via this.keepToolbarAlive).
	                this.handleBlur = Util.throttle(function () {
	                    if (self.isActive && !self.keepToolbarAlive) {
	                        self.hideToolbarActions();
	                    }
	                });
	
	                return this;
	            },
	
	            initElements: function () {
	                var i,
	                    addToolbar = false;
	                for (i = 0; i < this.elements.length; i += 1) {
	                    if (!this.options.disableEditing && !this.elements[i].getAttribute("data-disable-editing")) {
	                        this.elements[i].setAttribute("contentEditable", true);
	                    }
	                    if (!this.elements[i].getAttribute("data-placeholder")) {
	                        this.elements[i].setAttribute("data-placeholder", this.options.placeholder);
	                    }
	                    this.elements[i].setAttribute("data-medium-element", true);
	                    this.elements[i].setAttribute("role", "textbox");
	                    this.elements[i].setAttribute("aria-multiline", true);
	                    this.bindParagraphCreation(i);
	                    if (!this.options.disableToolbar && !this.elements[i].getAttribute("data-disable-toolbar")) {
	                        addToolbar = true;
	                    }
	                }
	                // Init toolbar
	                if (addToolbar) {
	                    this.initToolbar().setFirstAndLastButtons().bindAnchorPreview();
	                }
	                return this;
	            },
	
	            setElementSelection: function (selector) {
	                if (!selector) {
	                    selector = [];
	                }
	                // If string, use as query selector
	                if (typeof selector === "string") {
	                    selector = this.options.ownerDocument.querySelectorAll(selector);
	                }
	                // If element, put into array
	                if (Util.isElement(selector)) {
	                    selector = [selector];
	                }
	                // Convert NodeList (or other array like object) into an array
	                this.elements = Array.prototype.slice.apply(selector);
	            },
	
	            bindBlur: function () {
	                var self = this,
	                    blurFunction = function (e) {
	                    var isDescendantOfEditorElements = false,
	                        selection = self.options.contentWindow.getSelection(),
	                        selRange = selection.isCollapsed ? null : Selection.getSelectedParentElement(selection.getRangeAt(0)),
	                        i;
	
	                    // This control was introduced also to avoid the toolbar
	                    // to disapper when selecting from right to left and
	                    // the selection ends at the beginning of the text.
	                    for (i = 0; i < self.elements.length; i += 1) {
	                        if (Util.isDescendant(self.elements[i], e.target) || Util.isDescendant(self.elements[i], selRange)) {
	                            isDescendantOfEditorElements = true;
	                            break;
	                        }
	                    }
	                    // If it's not part of the editor, or the toolbar
	                    if (e.target !== self.toolbar && self.elements.indexOf(e.target) === -1 && !isDescendantOfEditorElements && !Util.isDescendant(self.toolbar, e.target) && !Util.isDescendant(self.anchorPreview, e.target)) {
	                        // Activate the placeholder
	                        if (!self.options.disablePlaceholders) {
	                            self.placeholderWrapper(e, self.elements[0]);
	                        }
	
	                        // Hide the toolbar after a small delay so we can prevent this on toolbar click
	                        self.handleBlur();
	                    }
	                };
	
	                // Hide the toolbar when focusing outside of the editor.
	                this.on(this.options.ownerDocument.body, "click", blurFunction, true);
	                this.on(this.options.ownerDocument.body, "focus", blurFunction, true);
	
	                return this;
	            },
	
	            bindClick: function (i) {
	                var self = this;
	
	                this.on(this.elements[i], "click", function () {
	                    if (!self.options.disablePlaceholders) {
	                        // Remove placeholder
	                        this.classList.remove("medium-editor-placeholder");
	                    }
	
	                    if (self.options.staticToolbar) {
	                        self.setToolbarPosition();
	                    }
	                });
	
	                return this;
	            },
	
	            /**
	             * This handles blur and keypress events on elements
	             * Including Placeholders, and tooldbar hiding on blur
	             */
	            bindElementActions: function () {
	                var i;
	
	                for (i = 0; i < this.elements.length; i += 1) {
	                    if (!this.options.disablePlaceholders) {
	                        // Active all of the placeholders
	                        this.activatePlaceholder(this.elements[i]);
	                    }
	
	                    // Bind the return and tab keypress events
	                    this.bindReturn(i).bindKeydown(i).bindClick(i);
	                }
	
	                return this;
	            },
	
	            // Two functions to handle placeholders
	            activatePlaceholder: function (el) {
	                if (!el.querySelector("img") && !el.querySelector("blockquote") && el.textContent.replace(/^\s+|\s+$/g, "") === "") {
	                    el.classList.add("medium-editor-placeholder");
	                }
	            },
	            placeholderWrapper: function (evt, el) {
	                el = el || evt.target;
	                el.classList.remove("medium-editor-placeholder");
	                if (evt.type !== "keypress") {
	                    this.activatePlaceholder(el);
	                }
	            },
	
	            serialize: function () {
	                var i,
	                    elementid,
	                    content = {};
	                for (i = 0; i < this.elements.length; i += 1) {
	                    elementid = this.elements[i].id !== "" ? this.elements[i].id : "element-" + i;
	                    content[elementid] = {
	                        value: this.elements[i].innerHTML.trim()
	                    };
	                }
	                return content;
	            },
	
	            initExtension: function (extension, name) {
	                if (extension.parent) {
	                    extension.base = this;
	                }
	                if (typeof extension.init === "function") {
	                    extension.init(this);
	                }
	                if (!extension.name) {
	                    extension.name = name;
	                }
	                return extension;
	            },
	
	            initCommands: function () {
	                var buttons = this.options.buttons,
	                    extensions = this.options.extensions,
	                    ext,
	                    name;
	                this.commands = [];
	
	                buttons.forEach((function (buttonName) {
	                    if (extensions[buttonName]) {
	                        ext = this.initExtension(extensions[buttonName], buttonName);
	                        this.commands.push(ext);
	                    } else if (buttonName === "anchor") {
	                        ext = this.initExtension(new AnchorExtension(), buttonName);
	                        this.commands.push(ext);
	                    } else if (ButtonsData.hasOwnProperty(buttonName)) {
	                        ext = new DefaultButton(ButtonsData[buttonName], this);
	                        this.commands.push(ext);
	                    }
	                }).bind(this));
	
	                for (name in extensions) {
	                    if (extensions.hasOwnProperty(name) && buttons.indexOf(name) === -1) {
	                        ext = this.initExtension(extensions[name], name);
	                    }
	                }
	
	                return this;
	            },
	
	            getExtensionByName: function (name) {
	                var extension;
	                if (this.commands && this.commands.length) {
	                    this.commands.forEach(function (ext) {
	                        if (ext.name === name) {
	                            extension = ext;
	                        }
	                    });
	                }
	                return extension;
	            },
	
	            /**
	             * Helper function to call a method with a number of parameters on all registered extensions.
	             * The function assures that the function exists before calling.
	             *
	             * @param {string} funcName name of the function to call
	             * @param [args] arguments passed into funcName
	             */
	            callExtensions: function (funcName) {
	                if (arguments.length < 1) {
	                    return;
	                }
	
	                var args = Array.prototype.slice.call(arguments, 1),
	                    ext,
	                    name;
	
	                for (name in this.options.extensions) {
	                    if (this.options.extensions.hasOwnProperty(name)) {
	                        ext = this.options.extensions[name];
	                        if (ext[funcName] !== undefined) {
	                            ext[funcName].apply(ext, args);
	                        }
	                    }
	                }
	                return this;
	            },
	
	            bindParagraphCreation: function (index) {
	                var self = this;
	                this.on(this.elements[index], "keypress", function (e) {
	                    var node, tagName;
	                    if (e.which === Util.keyCode.SPACE) {
	                        node = Selection.getSelectionStart(self.options.ownerDocument);
	                        tagName = node.tagName.toLowerCase();
	                        if (tagName === "a") {
	                            self.options.ownerDocument.execCommand("unlink", false, null);
	                        }
	                    }
	                });
	
	                this.on(this.elements[index], "keyup", function (e) {
	                    var node = Selection.getSelectionStart(self.options.ownerDocument),
	                        tagName,
	                        editorElement;
	
	                    if (node && node.getAttribute("data-medium-element") && node.children.length === 0 && !(self.options.disableReturn || node.getAttribute("data-disable-return"))) {
	                        self.options.ownerDocument.execCommand("formatBlock", false, "p");
	                    }
	                    if (e.which === Util.keyCode.ENTER) {
	                        node = Selection.getSelectionStart(self.options.ownerDocument);
	                        tagName = node.tagName.toLowerCase();
	                        editorElement = Selection.getSelectionElement(self.options.contentWindow);
	
	                        if (!(self.options.disableReturn || editorElement.getAttribute("data-disable-return")) && tagName !== "li" && !Util.isListItemChild(node)) {
	                            if (!e.shiftKey) {
	                                // paragraph creation should not be forced within a header tag
	                                if (!/h\d/.test(tagName)) {
	                                    self.options.ownerDocument.execCommand("formatBlock", false, "p");
	                                }
	                            }
	                            if (tagName === "a") {
	                                self.options.ownerDocument.execCommand("unlink", false, null);
	                            }
	                        }
	                    }
	                });
	                return this;
	            },
	
	            bindReturn: function (index) {
	                var self = this;
	                this.on(this.elements[index], "keypress", function (e) {
	                    if (e.which === Util.keyCode.ENTER) {
	                        if (self.options.disableReturn || this.getAttribute("data-disable-return")) {
	                            e.preventDefault();
	                        } else if (self.options.disableDoubleReturn || this.getAttribute("data-disable-double-return")) {
	                            var node = Selection.getSelectionStart(self.options.contentWindow);
	                            if (node && node.textContent.trim() === "") {
	                                e.preventDefault();
	                            }
	                        }
	                    }
	                });
	                return this;
	            },
	
	            bindKeydown: function (index) {
	                var self = this;
	                this.on(this.elements[index], "keydown", function (e) {
	                    var node, tag, key;
	
	                    if (e.which === Util.keyCode.TAB) {
	                        // Override tab only for pre nodes
	                        node = Selection.getSelectionStart(self.options.ownerDocument);
	                        tag = node && node.tagName.toLowerCase();
	
	                        if (tag === "pre") {
	                            e.preventDefault();
	                            self.options.ownerDocument.execCommand("insertHtml", null, "    ");
	                        }
	
	                        // Tab to indent list structures!
	                        if (tag === "li" || Util.isListItemChild(node)) {
	                            e.preventDefault();
	
	                            // If Shift is down, outdent, otherwise indent
	                            if (e.shiftKey) {
	                                self.options.ownerDocument.execCommand("outdent", e);
	                            } else {
	                                self.options.ownerDocument.execCommand("indent", e);
	                            }
	                        }
	                    } else if (e.which === Util.keyCode.BACKSPACE || e.which === Util.keyCode.DELETE || e.which === Util.keyCode.ENTER) {
	                        // Bind keys which can create or destroy a block element: backspace, delete, return
	                        self.onBlockModifier(e);
	                    } else if (e.ctrlKey || e.metaKey) {
	                        key = String.fromCharCode(e.which || e.keyCode).toLowerCase();
	                        self.commands.forEach(function (extension) {
	                            if (extension.options.key && extension.options.key === key) {
	                                extension.handleClick(e);
	                            }
	                        });
	                    }
	                });
	                return this;
	            },
	
	            onBlockModifier: function (e) {
	                var range,
	                    sel,
	                    p,
	                    node = Selection.getSelectionStart(this.options.ownerDocument),
	                    tagName = node.tagName.toLowerCase(),
	                    isEmpty = /^(\s+|<br\/?>)?$/i,
	                    isHeader = /h\d/i;
	
	                if ((e.which === Util.keyCode.BACKSPACE || e.which === Util.keyCode.ENTER) && node.previousElementSibling
	                // in a header
	                 && isHeader.test(tagName)
	                // at the very end of the block
	                 && Selection.getCaretOffsets(node).left === 0) {
	                    if (e.which === Util.keyCode.BACKSPACE && isEmpty.test(node.previousElementSibling.innerHTML)) {
	                        // backspacing the begining of a header into an empty previous element will
	                        // change the tagName of the current node to prevent one
	                        // instead delete previous node and cancel the event.
	                        node.previousElementSibling.parentNode.removeChild(node.previousElementSibling);
	                        e.preventDefault();
	                    } else if (e.which === Util.keyCode.ENTER) {
	                        // hitting return in the begining of a header will create empty header elements before the current one
	                        // instead, make "<p><br></p>" element, which are what happens if you hit return in an empty paragraph
	                        p = this.options.ownerDocument.createElement("p");
	                        p.innerHTML = "<br>";
	                        node.previousElementSibling.parentNode.insertBefore(p, node);
	                        e.preventDefault();
	                    }
	                } else if (e.which === Util.keyCode.DELETE && node.nextElementSibling && node.previousElementSibling
	                // not in a header
	                 && !isHeader.test(tagName)
	                // in an empty tag
	                 && isEmpty.test(node.innerHTML)
	                // when the next tag *is* a header
	                 && isHeader.test(node.nextElementSibling.tagName)) {
	                    // hitting delete in an empty element preceding a header, ex:
	                    //  <p>[CURSOR]</p><h1>Header</h1>
	                    // Will cause the h1 to become a paragraph.
	                    // Instead, delete the paragraph node and move the cursor to the begining of the h1
	
	                    // remove node and move cursor to start of header
	                    range = document.createRange();
	                    sel = window.getSelection();
	
	                    range.setStart(node.nextElementSibling, 0);
	                    range.collapse(true);
	
	                    sel.removeAllRanges();
	                    sel.addRange(range);
	
	                    node.previousElementSibling.parentNode.removeChild(node);
	
	                    e.preventDefault();
	                }
	            },
	
	            initToolbar: function () {
	                if (this.toolbar) {
	                    return this;
	                }
	                this.toolbar = this.createToolbar();
	                this.keepToolbarAlive = false;
	                this.toolbarActions = this.toolbar.querySelector(".medium-editor-toolbar-actions");
	                this.anchorPreview = this.createAnchorPreview();
	
	                return this;
	            },
	
	            createToolbar: function () {
	                var toolbar = this.options.ownerDocument.createElement("div");
	                toolbar.id = "medium-editor-toolbar-" + this.id;
	                toolbar.className = "medium-editor-toolbar";
	
	                if (this.options.staticToolbar) {
	                    toolbar.className += " static-toolbar";
	                } else {
	                    toolbar.className += " stalker-toolbar";
	                }
	
	                toolbar.appendChild(this.toolbarButtons());
	
	                // Add any forms that extensions may have
	                this.commands.forEach(function (extension) {
	                    if (extension.hasForm) {
	                        toolbar.appendChild(extension.getForm());
	                    }
	                });
	
	                this.options.elementsContainer.appendChild(toolbar);
	                return toolbar;
	            },
	
	            //TODO: actionTemplate
	            toolbarButtons: function () {
	                var ul = this.options.ownerDocument.createElement("ul"),
	                    li,
	                    btn;
	
	                ul.id = "medium-editor-toolbar-actions" + this.id;
	                ul.className = "medium-editor-toolbar-actions clearfix";
	
	                this.commands.forEach((function (extension) {
	                    if (typeof extension.getButton === "function") {
	                        btn = extension.getButton(this);
	                        li = this.options.ownerDocument.createElement("li");
	                        if (Util.isElement(btn)) {
	                            li.appendChild(btn);
	                        } else {
	                            li.innerHTML = btn;
	                        }
	                        ul.appendChild(li);
	                    }
	                }).bind(this));
	
	                return ul;
	            },
	
	            bindSelect: function () {
	                var i,
	                    blurHelper = (function (event) {
	                    // Do not close the toolbar when bluring the editable area and clicking into the anchor form
	                    if (event && event.type && event.type.toLowerCase() === "blur" && event.relatedTarget && Util.isDescendant(this.toolbar, event.relatedTarget)) {
	                        return false;
	                    }
	                    this.checkSelection();
	                }).bind(this),
	                    timeoutHelper = (function () {
	                    setTimeout((function () {
	                        this.checkSelection();
	                    }).bind(this), 0);
	                }).bind(this);
	
	                this.on(this.options.ownerDocument.documentElement, "mouseup", this.checkSelection.bind(this));
	
	                for (i = 0; i < this.elements.length; i += 1) {
	                    this.on(this.elements[i], "keyup", this.checkSelection.bind(this));
	                    this.on(this.elements[i], "blur", blurHelper);
	                    this.on(this.elements[i], "click", timeoutHelper);
	                }
	
	                return this;
	            },
	
	            bindDragDrop: function () {
	                var self = this,
	                    i,
	                    className,
	                    onDrag,
	                    onDrop,
	                    element;
	
	                if (!self.options.imageDragging) {
	                    return this;
	                }
	
	                className = "medium-editor-dragover";
	
	                onDrag = function (e) {
	                    e.preventDefault();
	                    e.dataTransfer.dropEffect = "copy";
	
	                    if (e.type === "dragover") {
	                        this.classList.add(className);
	                    } else {
	                        this.classList.remove(className);
	                    }
	                };
	
	                onDrop = function (e) {
	                    var files;
	                    e.preventDefault();
	                    e.stopPropagation();
	                    files = Array.prototype.slice.call(e.dataTransfer.files, 0);
	                    files.some(function (file) {
	                        if (file.type.match("image")) {
	                            var fileReader, id;
	                            fileReader = new FileReader();
	                            fileReader.readAsDataURL(file);
	
	                            id = "medium-img-" + +new Date();
	                            Util.insertHTMLCommand(self.options.ownerDocument, "<img class=\"medium-image-loading\" id=\"" + id + "\" />");
	
	                            fileReader.onload = function () {
	                                var img = document.getElementById(id);
	                                if (img) {
	                                    img.removeAttribute("id");
	                                    img.removeAttribute("class");
	                                    img.src = fileReader.result;
	                                }
	                            };
	                        }
	                    });
	                    this.classList.remove(className);
	                };
	
	                for (i = 0; i < this.elements.length; i += 1) {
	                    element = this.elements[i];
	
	
	                    this.on(element, "dragover", onDrag);
	                    this.on(element, "dragleave", onDrag);
	                    this.on(element, "drop", onDrop);
	                }
	                return this;
	            },
	
	            stopSelectionUpdates: function () {
	                this.preventSelectionUpdates = true;
	            },
	
	            startSelectionUpdates: function () {
	                this.preventSelectionUpdates = false;
	            },
	
	            checkSelection: function () {
	                var newSelection, selectionElement;
	
	                if (!this.preventSelectionUpdates && this.keepToolbarAlive !== true && !this.options.disableToolbar) {
	                    newSelection = this.options.contentWindow.getSelection();
	                    if (!this.options.updateOnEmptySelection && newSelection.toString().trim() === "" || this.options.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected() || Selection.selectionInContentEditableFalse(this.options.contentWindow)) {
	                        if (!this.options.staticToolbar) {
	                            this.hideToolbarActions();
	                        } else {
	                            this.showAndUpdateToolbar();
	                        }
	                    } else {
	                        selectionElement = Selection.getSelectionElement(this.options.contentWindow);
	                        if (!selectionElement || selectionElement.getAttribute("data-disable-toolbar")) {
	                            if (!this.options.staticToolbar) {
	                                this.hideToolbarActions();
	                            }
	                        } else {
	                            this.checkSelectionElement(newSelection, selectionElement);
	                        }
	                    }
	                }
	                return this;
	            },
	
	            // Checks for existance of multiple block elements in the current selection
	            multipleBlockElementsSelected: function () {
	                /*jslint regexp: true*/
	                var selectionHtml = Selection.getSelectionHtml.call(this).replace(/<[\S]+><\/[\S]+>/gim, ""),
	                    hasMultiParagraphs = selectionHtml.match(/<(p|h[1-6]|blockquote)[^>]*>/g);
	                /*jslint regexp: false*/
	
	                return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;
	            },
	
	            checkSelectionElement: function (newSelection, selectionElement) {
	                var i,
	                    adjacentNode,
	                    offset = 0,
	                    newRange;
	                this.selection = newSelection;
	                this.selectionRange = this.selection.getRangeAt(0);
	
	                /*
	                * In firefox, there are cases (ie doubleclick of a word) where the selectionRange start
	                * will be at the very end of an element.  In other browsers, the selectionRange start
	                * would instead be at the very beginning of an element that actually has content.
	                * example:
	                *   <span>foo</span><span>bar</span>
	                *
	                * If the text 'bar' is selected, most browsers will have the selectionRange start at the beginning
	                * of the 'bar' span.  However, there are cases where firefox will have the selectionRange start
	                * at the end of the 'foo' span.  The contenteditable behavior will be ok, but if there are any
	                * properties on the 'bar' span, they won't be reflected accurately in the toolbar
	                * (ie 'Bold' button wouldn't be active)
	                *
	                * So, for cases where the selectionRange start is at the end of an element/node, find the next
	                * adjacent text node that actually has content in it, and move the selectionRange start there.
	                */
	                if (this.options.standardizeSelectionStart && this.selectionRange.startContainer.nodeValue && this.selectionRange.startOffset === this.selectionRange.startContainer.nodeValue.length) {
	                    adjacentNode = Util.findAdjacentTextNodeWithContent(Selection.getSelectionElement(this.options.contentWindow), this.selectionRange.startContainer, this.options.ownerDocument);
	                    if (adjacentNode) {
	                        offset = 0;
	                        while (adjacentNode.nodeValue.substr(offset, 1).trim().length === 0) {
	                            offset = offset + 1;
	                        }
	                        newRange = this.options.ownerDocument.createRange();
	                        newRange.setStart(adjacentNode, offset);
	                        newRange.setEnd(this.selectionRange.endContainer, this.selectionRange.endOffset);
	                        this.selection.removeAllRanges();
	                        this.selection.addRange(newRange);
	                        this.selectionRange = newRange;
	                    }
	                }
	
	                for (i = 0; i < this.elements.length; i += 1) {
	                    if (this.elements[i] === selectionElement) {
	                        this.showAndUpdateToolbar();
	                        return;
	                    }
	                }
	
	                if (!this.options.staticToolbar) {
	                    this.hideToolbarActions();
	                }
	            },
	
	            showAndUpdateToolbar: function () {
	                this.setToolbarButtonStates().setToolbarPosition().showToolbarDefaultActions();
	            },
	
	            setToolbarPosition: function () {
	                // document.documentElement for IE 9
	                var scrollTop = this.options.ownerDocument.documentElement && this.options.ownerDocument.documentElement.scrollTop || this.options.ownerDocument.body.scrollTop,
	                    selection = this.options.contentWindow.getSelection(),
	                    windowWidth = this.options.contentWindow.innerWidth,
	                    container = Selection.getSelectionElement(this.options.contentWindow),
	                    buttonHeight = 50,
	                    toolbarWidth,
	                    toolbarHeight,
	                    halfOffsetWidth,
	                    defaultLeft,
	                    containerRect,
	                    containerTop,
	                    containerCenter,
	                    range,
	                    boundary,
	                    middleBoundary,
	                    targetLeft;
	
	                // If there isn't a valid selection, bail
	                if (!container || !this.options.contentWindow.getSelection().focusNode) {
	                    return this;
	                }
	
	                // If the container isn't part of this medium-editor instance, bail
	                if (this.elements.indexOf(container) === -1) {
	                    return this;
	                }
	
	                // Calculate container dimensions
	                containerRect = container.getBoundingClientRect();
	                containerTop = containerRect.top + scrollTop;
	                containerCenter = containerRect.left + containerRect.width / 2;
	
	                // position the toolbar at left 0, so we can get the real width of the toolbar
	                this.toolbar.style.left = "0";
	                toolbarWidth = this.toolbar.offsetWidth;
	                toolbarHeight = this.toolbar.offsetHeight;
	                halfOffsetWidth = toolbarWidth / 2;
	                defaultLeft = this.options.diffLeft - halfOffsetWidth;
	
	                if (this.options.staticToolbar) {
	                    this.showToolbar();
	
	                    if (this.options.stickyToolbar) {
	                        // If it's beyond the height of the editor, position it at the bottom of the editor
	                        if (scrollTop > containerTop + container.offsetHeight - toolbarHeight) {
	                            this.toolbar.style.top = containerTop + container.offsetHeight - toolbarHeight + "px";
	                            this.toolbar.classList.remove("sticky-toolbar");
	
	                            // Stick the toolbar to the top of the window
	                        } else if (scrollTop > containerTop - toolbarHeight) {
	                            this.toolbar.classList.add("sticky-toolbar");
	                            this.toolbar.style.top = "0px";
	
	                            // Normal static toolbar position
	                        } else {
	                            this.toolbar.classList.remove("sticky-toolbar");
	                            this.toolbar.style.top = containerTop - toolbarHeight + "px";
	                        }
	                    } else {
	                        this.toolbar.style.top = containerTop - toolbarHeight + "px";
	                    }
	
	                    if (this.options.toolbarAlign === "left") {
	                        targetLeft = containerRect.left;
	                    } else if (this.options.toolbarAlign === "center") {
	                        targetLeft = containerCenter - halfOffsetWidth;
	                    } else if (this.options.toolbarAlign === "right") {
	                        targetLeft = containerRect.right - toolbarWidth;
	                    }
	
	                    if (targetLeft < 0) {
	                        targetLeft = 0;
	                    } else if (targetLeft + toolbarWidth > windowWidth) {
	                        targetLeft = windowWidth - toolbarWidth;
	                    }
	
	                    this.toolbar.style.left = targetLeft + "px";
	                } else if (!selection.isCollapsed) {
	                    this.showToolbar();
	
	                    range = selection.getRangeAt(0);
	                    boundary = range.getBoundingClientRect();
	                    middleBoundary = (boundary.left + boundary.right) / 2;
	
	                    if (boundary.top < buttonHeight) {
	                        this.toolbar.classList.add("medium-toolbar-arrow-over");
	                        this.toolbar.classList.remove("medium-toolbar-arrow-under");
	                        this.toolbar.style.top = buttonHeight + boundary.bottom - this.options.diffTop + this.options.contentWindow.pageYOffset - toolbarHeight + "px";
	                    } else {
	                        this.toolbar.classList.add("medium-toolbar-arrow-under");
	                        this.toolbar.classList.remove("medium-toolbar-arrow-over");
	                        this.toolbar.style.top = boundary.top + this.options.diffTop + this.options.contentWindow.pageYOffset - toolbarHeight + "px";
	                    }
	                    if (middleBoundary < halfOffsetWidth) {
	                        this.toolbar.style.left = defaultLeft + halfOffsetWidth + "px";
	                    } else if (windowWidth - middleBoundary < halfOffsetWidth) {
	                        this.toolbar.style.left = windowWidth + defaultLeft - halfOffsetWidth + "px";
	                    } else {
	                        this.toolbar.style.left = defaultLeft + middleBoundary + "px";
	                    }
	                }
	
	                this.hideAnchorPreview();
	
	                return this;
	            },
	
	            setToolbarButtonStates: function () {
	                this.commands.forEach((function (extension) {
	                    if (typeof extension.isActive === "function") {
	                        extension.setInactive();
	                    }
	                }).bind(this));
	                this.checkActiveButtons();
	                return this;
	            },
	
	            checkActiveButtons: function () {
	                var elements = Array.prototype.slice.call(this.elements),
	                    manualStateChecks = [],
	                    queryState = null,
	                    parentNode,
	                    checkExtension = function (extension) {
	                    if (typeof extension.checkState === "function") {
	                        extension.checkState(parentNode);
	                    } else if (typeof extension.isActive === "function" && typeof extension.isAlreadyApplied === "function") {
	                        if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {
	                            extension.setActive();
	                        }
	                    }
	                };
	
	                if (!this.selectionRange) {
	                    return;
	                }
	                parentNode = Selection.getSelectedParentElement(this.selectionRange);
	
	                // Loop through all commands
	                this.commands.forEach(function (command) {
	                    // For those commands where we can use document.queryCommandState(), do so
	                    if (typeof command.queryCommandState === "function") {
	                        queryState = command.queryCommandState();
	                        // If queryCommandState returns a valid value, we can trust the browser
	                        // and don't need to do our manual checks
	                        if (queryState !== null) {
	                            if (queryState) {
	                                command.setActive();
	                            }
	                            return;
	                        }
	                    }
	                    // We can't use queryCommandState for this command, so add to manualStateChecks
	                    manualStateChecks.push(command);
	                });
	
	                // Climb up the DOM and do manual checks for whether a certain command is currently enabled for this node
	                while (parentNode.tagName !== undefined && Util.parentElements.indexOf(parentNode.tagName.toLowerCase) === -1) {
	                    manualStateChecks.forEach(checkExtension.bind(this));
	
	                    // we can abort the search upwards if we leave the contentEditable element
	                    if (elements.indexOf(parentNode) !== -1) {
	                        break;
	                    }
	                    parentNode = parentNode.parentNode;
	                }
	            },
	
	            setFirstAndLastButtons: function () {
	                var buttons = this.toolbar.querySelectorAll("button");
	                if (buttons.length > 0) {
	                    buttons[0].className += " " + this.options.firstButtonClass;
	                    buttons[buttons.length - 1].className += " " + this.options.lastButtonClass;
	                }
	                return this;
	            },
	
	            // Wrapper around document.queryCommandState for checking whether an action has already
	            // been applied to the current selection
	            queryCommandState: function (action) {
	                var fullAction = /^full-(.+)$/gi,
	                    match,
	                    queryState = null;
	
	                // Actions starting with 'full-' need to be modified since this is a medium-editor concept
	                match = fullAction.exec(action);
	                if (match) {
	                    action = match[1];
	                }
	
	                try {
	                    queryState = this.options.ownerDocument.queryCommandState(action);
	                } catch (exc) {
	                    queryState = null;
	                }
	
	                return queryState;
	            },
	
	            execAction: function (action, opts) {
	                /*jslint regexp: true*/
	                var fullAction = /^full-(.+)$/gi,
	                    match,
	                    result;
	                /*jslint regexp: false*/
	
	                // Actions starting with 'full-' should be applied to to the entire contents of the editable element
	                // (ie full-bold, full-append-pre, etc.)
	                match = fullAction.exec(action);
	                if (match) {
	                    // Store the current selection to be restored after applying the action
	                    this.saveSelection();
	                    // Select all of the contents before calling the action
	                    this.selectAllContents();
	                    result = this.execActionInternal(match[1], opts);
	                    // Restore the previous selection
	                    this.restoreSelection();
	                } else {
	                    result = this.execActionInternal(action, opts);
	                }
	
	                this.checkSelection();
	                return result;
	            },
	
	            execActionInternal: function (action, opts) {
	                /*jslint regexp: true*/
	                var appendAction = /^append-(.+)$/gi,
	                    match;
	                /*jslint regexp: false*/
	
	                // Actions starting with 'append-' should attempt to format a block of text ('formatBlock') using a specific
	                // type of block element (ie append-blockquote, append-h1, append-pre, etc.)
	                match = appendAction.exec(action);
	                if (match) {
	                    return this.execFormatBlock(match[1]);
	                }
	
	                if (action === "createLink") {
	                    return this.createLink(opts);
	                }
	
	                if (action === "image") {
	                    return this.options.ownerDocument.execCommand("insertImage", false, this.options.contentWindow.getSelection());
	                }
	
	                return this.options.ownerDocument.execCommand(action, false, null);
	            },
	
	            // TODO: move these two methods to selection.js
	            // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox
	            rangeSelectsSingleNode: function (range) {
	                var startNode = range.startContainer;
	                return startNode === range.endContainer && startNode.hasChildNodes() && range.endOffset === range.startOffset + 1;
	            },
	
	            getSelectedParentElement: function () {
	                var selectedParentElement = null,
	                    range = this.selectionRange;
	                if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
	                    selectedParentElement = range.startContainer.childNodes[range.startOffset];
	                } else if (range.startContainer.nodeType === 3) {
	                    selectedParentElement = range.startContainer.parentNode;
	                } else {
	                    selectedParentElement = range.startContainer;
	                }
	                return selectedParentElement;
	            },
	
	            execFormatBlock: function (el) {
	                var selectionData = Selection.getSelectionData(this.selection.anchorNode);
	                // FF handles blockquote differently on formatBlock
	                // allowing nesting, we need to use outdent
	                // https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla
	                if (el === "blockquote" && selectionData.el && selectionData.el.parentNode.tagName.toLowerCase() === "blockquote") {
	                    return this.options.ownerDocument.execCommand("outdent", false, null);
	                }
	                if (selectionData.tagName === el) {
	                    el = "p";
	                }
	                // When IE we need to add <> to heading elements and
	                //  blockquote needs to be called as indent
	                // http://stackoverflow.com/questions/10741831/execcommand-formatblock-headings-in-ie
	                // http://stackoverflow.com/questions/1816223/rich-text-editor-with-blockquote-function/1821777#1821777
	                if (Util.isIE) {
	                    if (el === "blockquote") {
	                        return this.options.ownerDocument.execCommand("indent", false, el);
	                    }
	                    el = "<" + el + ">";
	                }
	                return this.options.ownerDocument.execCommand("formatBlock", false, el);
	            },
	
	            isToolbarDefaultActionsShown: function () {
	                return !!this.toolbarActions && this.toolbarActions.style.display === "block";
	            },
	
	            hideToolbarDefaultActions: function () {
	                if (this.toolbarActions && this.isToolbarDefaultActionsShown()) {
	                    this.commands.forEach(function (extension) {
	                        if (extension.onHide && typeof extension.onHide === "function") {
	                            extension.onHide();
	                        }
	                    });
	                    this.toolbarActions.style.display = "none";
	                }
	            },
	
	            showToolbarDefaultActions: function () {
	                this.hideExtensionForms();
	
	                if (this.toolbarActions && !this.isToolbarDefaultActionsShown()) {
	                    this.toolbarActions.style.display = "block";
	                }
	
	                this.keepToolbarAlive = false;
	                // Using setTimeout + options.delay because:
	                // We will actually be displaying the toolbar, which should be controlled by options.delay
	                this.delay((function () {
	                    this.showToolbar();
	                }).bind(this));
	
	                return this;
	            },
	
	            hideExtensionForms: function () {
	                // Hide all extension forms
	                this.commands.forEach(function (extension) {
	                    if (extension.hasForm && extension.isDisplayed()) {
	                        extension.hideForm();
	                    }
	                });
	            },
	
	            isToolbarShown: function () {
	                return this.toolbar && this.toolbar.classList.contains("medium-editor-toolbar-active");
	            },
	
	            showToolbar: function () {
	                if (this.toolbar && !this.isToolbarShown()) {
	                    this.toolbar.classList.add("medium-editor-toolbar-active");
	                    if (typeof this.options.onShowToolbar === "function") {
	                        this.options.onShowToolbar();
	                    }
	                }
	            },
	
	            hideToolbar: function () {
	                if (this.isToolbarShown()) {
	                    this.toolbar.classList.remove("medium-editor-toolbar-active");
	                    if (typeof this.options.onHideToolbar === "function") {
	                        this.options.onHideToolbar();
	                    }
	                }
	            },
	
	            hideToolbarActions: function () {
	                this.commands.forEach(function (extension) {
	                    if (extension.onHide && typeof extension.onHide === "function") {
	                        extension.onHide();
	                    }
	                });
	                this.keepToolbarAlive = false;
	                this.hideToolbar();
	            },
	
	            selectAllContents: function () {
	                var range = this.options.ownerDocument.createRange(),
	                    sel = this.options.contentWindow.getSelection(),
	                    currNode = Selection.getSelectionElement(this.options.contentWindow);
	
	                if (currNode) {
	                    // Move to the lowest descendant node that still selects all of the contents
	                    while (currNode.children.length === 1) {
	                        currNode = currNode.children[0];
	                    }
	
	                    range.selectNodeContents(currNode);
	                    sel.removeAllRanges();
	                    sel.addRange(range);
	                }
	            },
	
	            // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
	            // Tim Down
	            // TODO: move to selection.js and clean up old methods there
	            saveSelection: function () {
	                this.selectionState = null;
	
	                var selection = this.options.contentWindow.getSelection(),
	                    range,
	                    preSelectionRange,
	                    start,
	                    editableElementIndex = -1;
	
	                if (selection.rangeCount > 0) {
	                    range = selection.getRangeAt(0);
	                    preSelectionRange = range.cloneRange();
	
	                    // Find element current selection is inside
	                    this.elements.forEach(function (el, index) {
	                        if (el === range.startContainer || Util.isDescendant(el, range.startContainer)) {
	                            editableElementIndex = index;
	                            return false;
	                        }
	                    });
	
	                    if (editableElementIndex > -1) {
	                        preSelectionRange.selectNodeContents(this.elements[editableElementIndex]);
	                        preSelectionRange.setEnd(range.startContainer, range.startOffset);
	                        start = preSelectionRange.toString().length;
	
	                        this.selectionState = {
	                            start: start,
	                            end: start + range.toString().length,
	                            editableElementIndex: editableElementIndex
	                        };
	                    }
	                }
	            },
	
	            // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
	            // Tim Down
	            // TODO: move to selection.js and clean up old methods there
	            restoreSelection: function () {
	                if (!this.selectionState) {
	                    return;
	                }
	
	                var editableElement = this.elements[this.selectionState.editableElementIndex],
	                    charIndex = 0,
	                    range = this.options.ownerDocument.createRange(),
	                    nodeStack = [editableElement],
	                    node,
	                    foundStart = false,
	                    stop = false,
	                    i,
	                    sel,
	                    nextCharIndex;
	
	                range.setStart(editableElement, 0);
	                range.collapse(true);
	
	                node = nodeStack.pop();
	                while (!stop && node) {
	                    if (node.nodeType === 3) {
	                        nextCharIndex = charIndex + node.length;
	                        if (!foundStart && this.selectionState.start >= charIndex && this.selectionState.start <= nextCharIndex) {
	                            range.setStart(node, this.selectionState.start - charIndex);
	                            foundStart = true;
	                        }
	                        if (foundStart && this.selectionState.end >= charIndex && this.selectionState.end <= nextCharIndex) {
	                            range.setEnd(node, this.selectionState.end - charIndex);
	                            stop = true;
	                        }
	                        charIndex = nextCharIndex;
	                    } else {
	                        i = node.childNodes.length - 1;
	                        while (i >= 0) {
	                            nodeStack.push(node.childNodes[i]);
	                            i -= 1;
	                        }
	                    }
	                    if (!stop) {
	                        node = nodeStack.pop();
	                    }
	                }
	
	                sel = this.options.contentWindow.getSelection();
	                sel.removeAllRanges();
	                sel.addRange(range);
	            },
	
	            hideAnchorPreview: function () {
	                this.anchorPreview.classList.remove("medium-editor-anchor-preview-active");
	            },
	
	            // TODO: break method
	            showAnchorPreview: function (anchorEl) {
	                if (this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || anchorEl.getAttribute("data-disable-preview")) {
	                    return true;
	                }
	
	                var self = this,
	                    buttonHeight = 40,
	                    boundary = anchorEl.getBoundingClientRect(),
	                    middleBoundary = (boundary.left + boundary.right) / 2,
	                    halfOffsetWidth,
	                    defaultLeft;
	
	                self.anchorPreview.querySelector("i").textContent = anchorEl.attributes.href.value;
	                halfOffsetWidth = self.anchorPreview.offsetWidth / 2;
	                defaultLeft = self.options.diffLeft - halfOffsetWidth;
	
	                self.observeAnchorPreview(anchorEl);
	
	                self.anchorPreview.classList.add("medium-toolbar-arrow-over");
	                self.anchorPreview.classList.remove("medium-toolbar-arrow-under");
	                self.anchorPreview.style.top = Math.round(buttonHeight + boundary.bottom - self.options.diffTop + this.options.contentWindow.pageYOffset - self.anchorPreview.offsetHeight) + "px";
	                if (middleBoundary < halfOffsetWidth) {
	                    self.anchorPreview.style.left = defaultLeft + halfOffsetWidth + "px";
	                } else if (this.options.contentWindow.innerWidth - middleBoundary < halfOffsetWidth) {
	                    self.anchorPreview.style.left = this.options.contentWindow.innerWidth + defaultLeft - halfOffsetWidth + "px";
	                } else {
	                    self.anchorPreview.style.left = defaultLeft + middleBoundary + "px";
	                }
	
	                if (this.anchorPreview && !this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")) {
	                    this.anchorPreview.classList.add("medium-editor-anchor-preview-active");
	                }
	
	                return this;
	            },
	
	            // TODO: break method
	            observeAnchorPreview: function (anchorEl) {
	                var self = this,
	                    lastOver = new Date().getTime(),
	                    over = true,
	                    stamp = function () {
	                    lastOver = new Date().getTime();
	                    over = true;
	                },
	                    unstamp = function (e) {
	                    if (!e.relatedTarget || !/anchor-preview/.test(e.relatedTarget.className)) {
	                        over = false;
	                    }
	                },
	                    interval_timer = setInterval(function () {
	                    if (over) {
	                        return true;
	                    }
	                    var durr = new Date().getTime() - lastOver;
	                    if (durr > self.options.anchorPreviewHideDelay) {
	                        // hide the preview 1/2 second after mouse leaves the link
	                        self.hideAnchorPreview();
	
	                        // cleanup
	                        clearInterval(interval_timer);
	                        self.off(self.anchorPreview, "mouseover", stamp);
	                        self.off(self.anchorPreview, "mouseout", unstamp);
	                        self.off(anchorEl, "mouseover", stamp);
	                        self.off(anchorEl, "mouseout", unstamp);
	                    }
	                }, 200);
	
	                this.on(self.anchorPreview, "mouseover", stamp);
	                this.on(self.anchorPreview, "mouseout", unstamp);
	                this.on(anchorEl, "mouseover", stamp);
	                this.on(anchorEl, "mouseout", unstamp);
	            },
	
	            createAnchorPreview: function () {
	                var self = this,
	                    anchorPreview = this.options.ownerDocument.createElement("div");
	
	                anchorPreview.id = "medium-editor-anchor-preview-" + this.id;
	                anchorPreview.className = "medium-editor-anchor-preview";
	                anchorPreview.innerHTML = this.anchorPreviewTemplate();
	                this.options.elementsContainer.appendChild(anchorPreview);
	
	                this.on(anchorPreview, "click", function () {
	                    self.anchorPreviewClickHandler();
	                });
	
	                return anchorPreview;
	            },
	
	            anchorPreviewTemplate: function () {
	                return "<div class=\"medium-editor-toolbar-anchor-preview\" id=\"medium-editor-toolbar-anchor-preview\">" + "    <i class=\"medium-editor-toolbar-anchor-preview-inner\"></i>" + "</div>";
	            },
	
	            anchorPreviewClickHandler: function (event) {
	                var range,
	                    sel,
	                    anchorExtension = this.getExtensionByName("anchor");
	
	                if (anchorExtension && this.activeAnchor) {
	                    range = this.options.ownerDocument.createRange();
	                    range.selectNodeContents(this.activeAnchor);
	
	                    sel = this.options.contentWindow.getSelection();
	                    sel.removeAllRanges();
	                    sel.addRange(range);
	                    // Using setTimeout + options.delay because:
	                    // We may actually be displaying the anchor form, which should be controlled by options.delay
	                    this.delay((function () {
	                        if (this.activeAnchor) {
	                            anchorExtension.showForm(this.activeAnchor.attributes.href.value);
	                        }
	                        this.keepToolbarAlive = false;
	                    }).bind(this));
	                }
	
	                this.hideAnchorPreview();
	            },
	
	            editorAnchorObserver: function (e) {
	                var self = this,
	                    overAnchor = true,
	                    leaveAnchor = function () {
	                    // mark the anchor as no longer hovered, and stop listening
	                    overAnchor = false;
	                    self.off(self.activeAnchor, "mouseout", leaveAnchor);
	                };
	
	                if (e.target && e.target.tagName.toLowerCase() === "a") {
	                    // Detect empty href attributes
	                    // The browser will make href="" or href="#top"
	                    // into absolute urls when accessed as e.targed.href, so check the html
	                    if (!/href=["']\S+["']/.test(e.target.outerHTML) || /href=["']#\S+["']/.test(e.target.outerHTML)) {
	                        return true;
	                    }
	
	                    // only show when hovering on anchors
	                    if (this.isToolbarShown()) {
	                        // only show when toolbar is not present
	                        return true;
	                    }
	                    this.activeAnchor = e.target;
	                    this.on(this.activeAnchor, "mouseout", leaveAnchor);
	                    // Using setTimeout + options.delay because:
	                    // - We're going to show the anchor preview according to the configured delay
	                    //   if the mouse has not left the anchor tag in that time
	                    this.delay(function () {
	                        if (overAnchor) {
	                            self.showAnchorPreview(e.target);
	                        }
	                    });
	                }
	            },
	
	            bindAnchorPreview: function (index) {
	                var i,
	                    self = this;
	                this.editorAnchorObserverWrapper = function (e) {
	                    self.editorAnchorObserver(e);
	                };
	                for (i = 0; i < this.elements.length; i += 1) {
	                    this.on(this.elements[i], "mouseover", this.editorAnchorObserverWrapper);
	                }
	                return this;
	            },
	
	            createLink: function (opts) {
	                var customEvent, i;
	
	                if (opts.url && opts.url.trim().length > 0) {
	                    this.options.ownerDocument.execCommand("createLink", false, opts.url);
	
	                    if (this.options.targetBlank || opts.target === "_blank") {
	                        Util.setTargetBlank(Selection.getSelectionStart(this.options.ownerDocument));
	                    }
	
	                    if (opts.buttonClass) {
	                        this.setButtonClass(opts.buttonClass);
	                    }
	                }
	
	                if (this.options.targetBlank || opts.target === "_blank" || opts.buttonClass) {
	                    customEvent = this.options.ownerDocument.createEvent("HTMLEvents");
	                    customEvent.initEvent("input", true, true, this.options.contentWindow);
	                    for (i = 0; i < this.elements.length; i += 1) {
	                        this.elements[i].dispatchEvent(customEvent);
	                    }
	                }
	            },
	
	            setButtonClass: function (buttonClass) {
	                var el = Selection.getSelectionStart(this.options.ownerDocument),
	                    classes = buttonClass.split(" "),
	                    i,
	                    j;
	                if (el.tagName.toLowerCase() === "a") {
	                    for (j = 0; j < classes.length; j += 1) {
	                        el.classList.add(classes[j]);
	                    }
	                } else {
	                    el = el.getElementsByTagName("a");
	                    for (i = 0; i < el.length; i += 1) {
	                        for (j = 0; j < classes.length; j += 1) {
	                            el[i].classList.add(classes[j]);
	                        }
	                    }
	                }
	            },
	
	            positionToolbarIfShown: function () {
	                if (this.isToolbarShown()) {
	                    this.setToolbarPosition();
	                }
	            },
	
	            bindWindowActions: function () {
	                var self = this;
	
	                // Add a scroll event for sticky toolbar
	                if (this.options.staticToolbar && this.options.stickyToolbar) {
	                    // On scroll, re-position the toolbar
	                    this.on(this.options.contentWindow, "scroll", function () {
	                        self.positionToolbarIfShown();
	                    }, true);
	                }
	
	                this.on(this.options.contentWindow, "resize", function () {
	                    self.handleResize();
	                });
	
	                this.bindBlur();
	
	                return this;
	            },
	
	            activate: function () {
	                if (this.isActive) {
	                    return;
	                }
	
	                this.setup();
	            },
	
	            // TODO: break method
	            deactivate: function () {
	                var i;
	                if (!this.isActive) {
	                    return;
	                }
	                this.isActive = false;
	
	                if (this.toolbar !== undefined) {
	                    this.options.elementsContainer.removeChild(this.anchorPreview);
	                    this.options.elementsContainer.removeChild(this.toolbar);
	                    delete this.toolbar;
	                    delete this.anchorPreview;
	                }
	
	                for (i = 0; i < this.elements.length; i += 1) {
	                    this.elements[i].removeAttribute("contentEditable");
	                    this.elements[i].removeAttribute("data-medium-element");
	                }
	
	                this.commands.forEach((function (extension) {
	                    if (typeof extension.deactivate === "function") {
	                        extension.deactivate();
	                    }
	                }).bind(this));
	
	                this.removeAllEvents();
	            },
	
	            bindPaste: function () {
	                var i,
	                    self = this;
	                this.pasteWrapper = function (e) {
	                    pasteHandler.handlePaste(this, e, self.options);
	                };
	                for (i = 0; i < this.elements.length; i += 1) {
	                    this.on(this.elements[i], "paste", this.pasteWrapper);
	                }
	                return this;
	            },
	
	            setPlaceholders: function () {
	                if (!this.options.disablePlaceholders && this.elements && this.elements.length) {
	                    this.elements.forEach((function (el) {
	                        this.activatePlaceholder(el);
	                        this.on(el, "blur", this.placeholderWrapper.bind(this));
	                        this.on(el, "keypress", this.placeholderWrapper.bind(this));
	                    }).bind(this));
	                }
	
	                return this;
	            },
	
	            cleanPaste: function (text) {
	                pasteHandler.cleanPaste(text, this.options);
	            },
	
	            pasteHTML: function (html) {
	                pasteHandler.pasteHTML(html, this.options.ownerDocument);
	            }
	        };
	    })();
	
	    return MediumEditor;
	})());

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	
	var Field = React.createClass({
	  displayName: "Field",
	
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: "text"
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var name = _props.name;
	    var type = _props.type;
	    var props = _objectWithoutProperties(_props, ["label", "name", "type"]);
	
	    return React.createElement(
	      "div",
	      { className: "col-img-field" },
	      React.createElement(
	        "label",
	        { className: "col-img-label", htmlFor: name || this.props.id },
	        label
	      ),
	      React.createElement("input", _extends({ className: "col-img-input", type: type }, props, { name: name || this.props.id }))
	    );
	  }
	
	});
	
	module.exports = Field;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	
	var Graphic = React.createClass({
	  displayName: "Graphic",
	
	
	  getCaption: function getCaption() {
	    var caption = this.props.caption;
	
	    return caption ? React.createElement(
	      "figcaption",
	      { className: "col-img-caption" },
	      caption
	    ) : null;
	  },
	
	  render: function render() {
	    var src = this.props.src;
	
	
	    return src ? React.createElement(
	      "figure",
	      { className: "col-img-figure" },
	      React.createElement("img", { className: "col-img-graphic", src: src, alt: "" }),
	      this.getCaption()
	    ) : null;
	  }
	
	});
	
	module.exports = Graphic;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	
	var _baseUrl = "https://www.youtube.com/embed/";
	
	var Player = React.createClass({
	  displayName: "Player",
	
	
	  render: function render() {
	    var video_id = this.props.video_id;
	
	
	    return video_id ? React.createElement(
	      "div",
	      { className: "col-youtube-player" },
	      React.createElement("iframe", { className: "col-youtube-frame", src: _baseUrl + video_id, frameBorder: "0", allowFullScreen: true })
	    ) : null;
	  } });
	
	module.exports = Player;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canMutationObserver = typeof window !== 'undefined'
	    && window.MutationObserver;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;
	
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }
	
	    var queue = [];
	
	    if (canMutationObserver) {
	        var hiddenDiv = document.createElement("div");
	        var observer = new MutationObserver(function () {
	            var queueList = queue.slice();
	            queue.length = 0;
	            queueList.forEach(function (fn) {
	                fn();
	            });
	        });
	
	        observer.observe(hiddenDiv, { attributes: true });
	
	        return function nextTick(fn) {
	            if (!queue.length) {
	                hiddenDiv.setAttribute('yes', 'no');
	            }
	            queue.push(fn);
	        };
	    }
	
	    if (canPost) {
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var BlockType = __webpack_require__(18);
	var Button = __webpack_require__(30);
	var CreateBlock = __webpack_require__(33);
	var React = __webpack_require__(2);
	
	var AddBlock = React.createClass({
	  displayName: "AddBlock",
	
	
	  getInitialState: function getInitialState() {
	    return BlockType.find(this.props.type);
	  },
	
	  render: function render() {
	    var _state = this.state;
	    var icon = _state.icon;
	    var id = _state.id;
	    var label = _state.label;
	
	
	    return React.createElement(
	      Button,
	      { "aria-label": label, className: "col-btn-icon", onClick: this._onClick },
	      React.createElement("img", { src: icon, alt: id, "aria-hidden": "true" })
	    );
	  },
	
	  _onClick: function _onClick(e) {
	    var _props = this.props;
	    var block = _props.block;
	    var position = _props.position;
	    var type = _props.type;
	
	
	    CreateBlock({
	      content: null,
	      parent: block,
	      type: type
	    }, position);
	
	    e.preventDefault();
	  }
	
	});
	
	module.exports = AddBlock;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/* @flow */
	
	var BlockType = __webpack_require__(18);
	var Pure = __webpack_require__(31);
	var Stateful = __webpack_require__(11);
	var React = __webpack_require__(2);
	var UpdateBlock = __webpack_require__(35);
	
	var Block = React.createClass({
	  displayName: "Block",
	  mixins: [Stateful, Pure],
	
	  propTypes: {
	    block: React.PropTypes.any.isRequired
	  },
	
	  getState: function getState() {
	    return BlockType.find(this.props.block.type);
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var block = _props.block;
	    var props = _objectWithoutProperties(_props, ["block"]);
	
	    var Component = this.state.component;
	
	
	    return React.createElement(Component, _extends({ initialContent: block.content, updateContent: this._onUpdateContent }, props));
	  },
	
	  _onUpdateContent: function _onUpdateContent(content) {
	    UpdateBlock(this.props.block.id, content);
	  }
	
	});
	
	module.exports = Block;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	var Dragon = __webpack_require__(66);
	var MoveBlock = __webpack_require__(36);
	var React = __webpack_require__(2);
	
	var Orderable = React.createClass({
	  displayName: "Orderable",
	
	
	  render: function render() {
	    var _props = this.props;
	    var block = _props.block;
	    var children = _props.children;
	
	
	    return React.createElement(
	      Dragon,
	      { className: "col-block", message: block.id, onDrop: this._onDrop },
	      children
	    );
	  },
	
	  _onDrop: function _onDrop(fromId) {
	    MoveBlock(fromId, this.props.block.id);
	  }
	
	});
	
	module.exports = Orderable;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var React = __webpack_require__(2);
	var RemoveBlock = __webpack_require__(64);
	
	var Toolbar = React.createClass({
	  displayName: "Toolbar",
	
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "col-toolbar" },
	      React.createElement(RemoveBlock, { block: this.props.block })
	    );
	  }
	
	});
	
	module.exports = Toolbar;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(65);
	
	var _lastID = 1;
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };
	
	
	module.exports = Dispatcher;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* @flow */
	
	var Button = __webpack_require__(30);
	var DestroyBlock = __webpack_require__(34);
	var Strings = __webpack_require__(25);
	var React = __webpack_require__(2);
	
	var RemoveBlock = React.createClass({
	  displayName: "RemoveBlock",
	
	
	  render: function render() {
	    return React.createElement(
	      Button,
	      { "aria-label": Strings.remove, className: "col-btn-remove", onClick: this._onClick },
	      "×"
	    );
	  },
	
	  _onClick: function _onClick(e) {
	    e.preventDefault();
	    DestroyBlock(this.props.block.id);
	  }
	
	});
	
	module.exports = RemoveBlock;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = _interopRequire(__webpack_require__(2));
	
	var cx = _interopRequire(__webpack_require__(67));
	
	var Dragon = React.createClass({
	  displayName: "Dragon",
	
	
	  propTypes: {
	    onDrop: React.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      allow: "all",
	      className: "",
	      effect: "copy",
	      element: "div",
	      message: {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      draggable: true,
	      dragging: false,
	      droppable: false
	    };
	  },
	
	  render: function render() {
	    var dragging = this.state.dragging;
	    var draggable = this.state.draggable;
	    var droppable = this.state.droppable;
	    var className = this.props.className;
	    var children = this.props.children;
	    var element = this.props.element;
	    var onDrop = this.props.onDrop;
	    var message = this.props.message;
	    var allow = this.props.allow;
	    var effect = this.props.effect;
	    var safe = _objectWithoutProperties(this.props, ["className", "children", "element", "onDrop", "message", "allow", "effect"]);
	
	    var modifiers = cx({
	      "dragon-dragging": dragging,
	      "dragon-droppable": droppable
	    });
	
	    return React.createElement(element, _extends({
	      className: cx("dragon", cx(className), modifiers),
	      draggable: draggable,
	      onBlur: this._handle({ draggable: true }),
	      onFocus: this._handle({ draggable: false }),
	      onDragEnd: this._handle({ droppable: false, dragging: false }, true),
	      onDragLeave: this._handle({ droppable: false }, true),
	      onDragOver: this._handle({ droppable: true }, true),
	      onDragStart: this._onDragStart,
	      onDrop: this._onDrop }, safe), children);
	  },
	
	  _handle: function _handle(state, prevent) {
	    var _this = this;
	    return function (event) {
	      if (prevent) event.preventDefault();
	      _this.setState(state);
	    };
	  },
	
	  _onDragStart: function _onDragStart(e) {
	    var effect = this.props.effect;
	    var allow = this.props.allow;
	    var message = this.props.message;
	
	
	    e.dataTransfer.setData("text/plain", JSON.stringify(message));
	    e.dataTransfer.dropEffect = effect;
	    e.dataTransfer.effectAllowed = allow;
	
	    this.setState({ dragging: true });
	  },
	
	  _onDrop: function _onDrop(e) {
	    e.preventDefault();
	
	    var message = JSON.parse(e.dataTransfer.getData("text/plain"));
	    var receiver = this.props.message;
	
	    this.props.onDrop(message, receiver);
	
	    this.setState({ droppable: false, dragging: false });
	  }
	
	});
	
	module.exports = Dragon;
	
	//# sourceMappingURL=dragon.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	function cx(classNames) {
	  var names = '';
	
	  if (typeof classNames == 'object') {
	    for (var name in classNames) {
	      if (!classNames.hasOwnProperty(name) || !classNames[name]) {
	        continue;
	      }
	      names += name + ' ';
	    }
	  } else {
	    for (var i = 0; i < arguments.length; i++) {
	      // We should technically exclude 0 too, but for the sake of backward
	      // compat we'll keep it (for now)
	      if (arguments[i] == null) {
	        continue;
	      }
	      names += arguments[i] + ' ';
	    }
	  }
	
	  return names.trim();
	}
	
	module.exports = cx;


/***/ }
/******/ ])
//# sourceMappingURL=colonel-kurtz.js.map