// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*Hello\u6211\u662F\u5C0F\u90D1\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60\u3002\n   *\u9996\u5148\uFF0C\u753B\u4E00\u4E2A\u9EC4\u8272\u7684\u76AE\u80A4\n   **/\n  #face {\n    background: #ffe600;\n  }\n  /*\u63A5\u7740\uFF0C\u753B\u4E24\u4E2A\u773C\u775B\n   **/\n  .eye {\n    border: 3px solid black;\n    background: #2e2e2e;\n    border-radius: 50%;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  .eye::before {\n    border: 3px solid black;\n    background: white;\n    transform: translateX(9px);\n  }\n  /*\u63A5\u4E0B\u6765\u662F\u9F3B\u5B50~\n   **/\n  .nose {\n    border: 12px solid;\n    margin-left: -12px;\n  }\n  /*\u753B\u4E00\u4E0B\u4FCF\u76AE\u7684\u4E0A\u5634\u5507\n   **/\n  .mouth .upper .lip {\n    border: 3px solid black;\n  }\n  .mouth .upper .lip.left {\n    border-bottom-left-radius: 40px 25px;\n    transform: rotate(-19deg) translateX(-37px);\n  }\n  .mouth .upper .lip.right {\n    border-bottom-right-radius: 40px 25px;\n    transform: rotate(19deg) translateX(37px);\n  }\n  .mouth .upper .lip {\n    background: #ffe600;\n  }\n  /*\u7136\u540E\u662F\u4E00\u4E2A\u5927\u5634\u5DF4..?\n   **/\n  .mouth .lower .circle1 {\n    border: 3px solid black;\n    background: #9b000a;\n  }\n  /*\u8FD8\u6709\u820C\u5934~\n   **/\n  .mouth .lower .circle1 .circle2 {\n    background: #ff485f;\n  }\n  /*\u6700\u540E\u52A0\u4E0A\u5706\u5706\u7684\u8138\u86CB\n   **/\n  .cheek {\n    border: 3px solid black;\n    background: red;\n  }\n  .cheek.left {\n    transform: translateX(-160px);\n  }\n  .cheek.right {\n    transform: translateX(160px);\n  }\n  /*\u597D\u5566\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60~\n   *\u8BD5\u8BD5\u7528\u9F20\u6807\u79FB\u5230\u9F3B\u5B50\u4E0A~\n   **/\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 50,
  id: undefined,
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function (_run) {
    function run() {
      return _run.apply(this, arguments);
    }

    run.toString = function () {
      return _run.toString();
    };

    return run;
  }(function () {
    player.ui.html.innerText = _css.default.substr(0, player.n);
    player.ui.style.innerHTML = _css.default.substr(0, player.n);
    player.ui.html.scrollTop = player.ui.html.scrollHeight;
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(run);
    }
  }),
  pause: function pause() {
    window.clearInterval(player.id);
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  slow: function slow() {
    player.pause();
    player.time = 150;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.8704771e.js.map