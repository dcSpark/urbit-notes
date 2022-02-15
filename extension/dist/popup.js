(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter3;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter3 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error2) {
            e = { error: error2 };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter3);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/@dcspark/uv-core/dist/types.js
  var VISOR_ID = "oadimaacghcacmfipakhadejgalcaepg";

  // node_modules/@dcspark/uv-core/dist/messaging.js
  var Messaging = {
    pushEvent: function(event, recipients) {
      for (let id of recipients) {
        if (typeof id == "number")
          chrome.tabs.sendMessage(id, { app: "urbitVisorEvent", event });
        if (typeof id == "string")
          chrome.runtime.sendMessage(id, { app: "urbitVisorEvent", event });
      }
    },
    callVisor: function({ app, action, data }) {
      return new Promise((res, rej) => {
        const requestId = Math.random().toString(36).substr(2, 9);
        window.addEventListener("message", function responseHandler(e) {
          const response = e.data;
          if (response.app !== "urbitVisorResponse" || response.id !== requestId)
            return;
          window.removeEventListener("message", responseHandler);
          if (response.error)
            rej(response.error);
          else
            res(response);
        });
        window.postMessage({ action, data, app, id: requestId }, window.origin);
      });
    }
  };

  // node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }

  // node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError = createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription = function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._teardowns = null;
    }
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialTeardown = this.initialTeardown;
        if (isFunction(initialTeardown)) {
          try {
            initialTeardown();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _teardowns = this._teardowns;
        if (_teardowns) {
          this._teardowns = null;
          try {
            for (var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
              var teardown_1 = _teardowns_1_1.value;
              try {
                execTeardown(teardown_1);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return))
                _b.call(_teardowns_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execTeardown(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _teardowns = this._teardowns;
      _teardowns && arrRemove(_teardowns, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function() {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execTeardown(teardown) {
    if (isFunction(teardown)) {
      teardown();
    } else {
      teardown.unsubscribe();
    }
  }

  // node_modules/rxjs/dist/esm5/internal/config.js
  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider = {
    setTimeout: function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      var onUnhandledError = config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {
  }

  // node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", void 0, void 0);
  }();
  function errorNotification(error2) {
    return createNotification("E", void 0, error2);
  }
  function nextNotification(value) {
    return createNotification("N", value, void 0);
  }
  function createNotification(kind, value, error2) {
    return {
      kind,
      value,
      error: error2
    };
  }

  // node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  var context = null;
  function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context, errorThrown = _a.errorThrown, error2 = _a.error;
        context = null;
        if (errorThrown) {
          throw error2;
        }
      }
    } else {
      cb();
    }
  }
  function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function(next, error2, complete) {
      return new SafeSubscriber(next, error2, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification(nextNotification(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification(errorNotification(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification(COMPLETE_NOTIFICATION, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription);
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error2, complete) {
      var _this = _super.call(this) || this;
      var next;
      if (isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        next = observerOrNext.next, error2 = observerOrNext.error, complete = observerOrNext.complete;
        var context_1;
        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
        } else {
          context_1 = observerOrNext;
        }
        next = next === null || next === void 0 ? void 0 : next.bind(context_1);
        error2 = error2 === null || error2 === void 0 ? void 0 : error2.bind(context_1);
        complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
      }
      _this.destination = {
        next: next ? wrapForErrorHandling(next, _this) : noop,
        error: wrapForErrorHandling(error2 !== null && error2 !== void 0 ? error2 : defaultErrorHandler, _this),
        complete: complete ? wrapForErrorHandling(complete, _this) : noop
      };
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  function wrapForErrorHandling(handler, instance) {
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      try {
        handler.apply(void 0, __spreadArray([], __read(args)));
      } catch (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          captureError(err);
        } else {
          reportUnhandledError(err);
        }
      }
    };
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  // node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity(x) {
    return x;
  }

  // node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable = function() {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function(operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error2, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error2, complete);
      errorContext(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  // node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a;
      var closed = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    };
    return OperatorSubscriber2;
  }(Subscriber);

  // node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };

  // node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  // node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function(subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function(subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function(subscriber) {
      process(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
      delay = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }

  // node_modules/rxjs/dist/esm5/internal/operators/map.js
  function map(project, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(new OperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
  var isArray = Array.isArray;
  function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
    return map(function(args) {
      return callOrApply(fn, args);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      if (isComplete && !buffer.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function(value) {
      return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom(project(value, index++)).subscribe(new OperatorSubscriber(subscriber, function(innerValue) {
        onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function() {
        innerComplete = true;
      }, void 0, function() {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function() {
              var bufferedValue = buffer.shift();
              if (innerSubScheduler) {
                executeSchedule(subscriber, innerSubScheduler, function() {
                  return doInnerSub(bufferedValue);
                });
              } else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(new OperatorSubscriber(subscriber, outerNext, function() {
      isComplete = true;
      checkComplete();
    }));
    return function() {
      additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    if (isFunction(resultSelector)) {
      return mergeMap(function(a, i) {
        return map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        })(innerFrom(project(a, i)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return operate(function(source, subscriber) {
      return mergeInternals(source, subscriber, project, concurrent);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
  var nodeEventEmitterMethods = ["addListener", "removeListener"];
  var eventTargetMethods = ["addEventListener", "removeEventListener"];
  var jqueryMethods = ["on", "off"];
  function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
      resultSelector = options;
      options = void 0;
    }
    if (resultSelector) {
      return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler, options);
      };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
      if (isArrayLike(target)) {
        return mergeMap(function(subTarget) {
          return fromEvent(subTarget, eventName, options);
        })(innerFrom(target));
      }
    }
    if (!add) {
      throw new TypeError("Invalid event target");
    }
    return new Observable(function(subscriber) {
      var handler = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return subscriber.next(1 < args.length ? args : args[0]);
      };
      add(handler);
      return function() {
        return remove(handler);
      };
    });
  }
  function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler);
      };
    };
  }
  function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
  }
  function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
  }
  function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
  }

  // node_modules/@dcspark/uv-core/dist/modals.js
  function visorPromptModal() {
    const background = document.createElement("div");
    background.style.cssText = "display:none;opacity:0;background-color:rgb(0,0,0,0.7);position:fixed;top:0;left:0;width:100%;height:100%;transition: top 2s, opacity 2s;z-index:2147483646";
    background.id = "urbit-visor-modal-bg";
    const foreground = document.createElement("div");
    foreground.id = "urbit-visor-modal-fg";
    foreground.style.cssText = "color:white;background-color:black;border:3px solid red;position:fixed;top:20px;right:50px;width:200px;height:200px;padding:0.5rem;text-align:center;font-weight:700;z-index:2147483647";
    const logo = document.createElement("div");
    logo.style.cssText = "margin: auto";
    logo.innerHTML = `
  <svg width="70" height="70" viewBox="0 0 189 131" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50.0064 0C44.6958 0 28.0999 10.375 26.1084 12.2614L29.2616 20.4356L48.7799 30.741C51.3799 27.073 55.4831 16.6629 56.6448 10.6894C57.5768 5.89692 55.3171 0 50.0064 0Z" fill="url(#paint0_linear_114_28)"/>
  <path d="M189 63.8201C189 54.4017 182.609 51.2622 177.917 52.2536C158.563 59.0283 122.996 54.8974 107.447 50.436C91.8973 45.9747 57.3242 30.6077 51.0382 28.2944C33.1727 22.0155 26.9468 14.5799 26.1201 12.2666C11.728 52.0884 -19.4313 102.456 17.1272 119.504C72.0472 145.116 145.99 120.165 161.209 109.26C176.428 98.3543 189 73.2385 189 63.8201Z" fill="#00B171"/>
  <mask id="mask0_114_28" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="12" width="189" height="119">
  <path d="M188.901 63.8948C188.901 54.4724 182.514 51.3317 177.825 52.3235C158.485 59.1009 122.944 54.9683 107.405 50.5051C91.8667 46.0419 57.3182 30.6687 51.0366 28.3544C33.1838 22.0729 26.9623 14.6342 26.1362 12.3199C11.7544 52.1582 -19.3828 102.547 17.1497 119.602C72.0307 145.224 145.921 120.263 161.129 109.353C176.337 98.4433 188.901 73.3171 188.901 63.8948Z" fill="#00B171"/>
  </mask>
  <g mask="url(#mask0_114_28)">
  <path d="M19.1936 145.781L77.8762 4.55055L132.799 25.8005L88.1742 151.339L19.1936 145.781Z" fill="url(#paint1_linear_114_28)"/>
  <ellipse cx="50.6305" cy="67.6561" rx="52.3136" ry="91.5041" transform="rotate(23.6845 50.6305 67.6561)" fill="url(#paint2_linear_114_28)"/>
  <path d="M73.2879 97.3029C128.323 103.911 187.396 58.2952 195.109 53.8428L182.896 156.074L84.5292 180.621L-37.9013 66.3106C-19.1832 74.4386 29.2599 92.0163 73.2879 97.3029Z" fill="url(#paint3_linear_114_28)"/>
  </g>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M50.1332 56.5836C41.1595 52.4827 32.7068 55.95 27.1697 59.797C21.5827 63.6786 17.3509 68.9603 15.5447 72.0572L22.4552 76.0877C23.7348 73.8937 27.1995 69.5175 31.7342 66.367C36.2795 63.2092 41.6137 61.4647 46.8507 63.8794L46.9194 63.9111L46.9892 63.9402C48.8137 64.6991 50.2634 66.1003 51.5379 67.9234C52.5026 69.3034 53.1907 70.6334 53.8971 71.9988C54.1825 72.5504 54.4708 73.1077 54.7815 73.6764C54.9622 74.0071 55.1748 74.42 55.4154 74.8872C56.1186 76.253 57.0609 78.0832 58.1455 79.6838C59.7038 81.9835 61.9032 84.416 65.1981 85.9393C70.4603 88.3721 76.0995 87.489 80.3844 85.368C84.7208 83.2215 88.2908 79.6646 90.7728 76.1905L84.2634 71.54C82.3107 74.2733 79.6767 76.7918 76.8354 78.1983C74.0977 79.5534 71.0589 79.8353 68.5552 78.6778C67.0354 77.9752 65.8466 76.7875 64.7683 75.1961C63.9697 74.0176 63.3975 72.9042 62.7708 71.6846C62.4706 71.1005 62.1579 70.4921 61.8019 69.8404C61.6353 69.5356 61.4386 69.1549 61.2137 68.7198C60.4612 67.2636 59.3944 65.1991 58.0946 63.3397C56.3377 60.8266 53.8274 58.1412 50.1332 56.5836Z" fill="url(#paint4_linear_114_28)"/>
  <defs>
  <linearGradient id="paint0_linear_114_28" x1="41.4789" y1="0" x2="41.4789" y2="30.741" gradientUnits="userSpaceOnUse">
  <stop stop-color="#03A268"/>
  <stop offset="1" stop-color="#005738" stop-opacity="0.88"/>
  </linearGradient>
  <linearGradient id="paint1_linear_114_28" x1="29.4917" y1="38.0601" x2="104.847" y2="140.06" gradientUnits="userSpaceOnUse">
  <stop stop-color="#11DE94"/>
  <stop offset="1" stop-color="#11DE94" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint2_linear_114_28" x1="62.5199" y1="43.0204" x2="-12.2066" y2="85.8061" gradientUnits="userSpaceOnUse">
  <stop stop-color="#72FFCC" stop-opacity="0.59"/>
  <stop offset="1" stop-color="#47EAAF" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint3_linear_114_28" x1="135.184" y1="170.568" x2="85.6661" y2="51.9512" gradientUnits="userSpaceOnUse">
  <stop stop-color="#004F32"/>
  <stop offset="1" stop-color="#00B171" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint4_linear_114_28" x1="53.1588" y1="54.7361" x2="42.1725" y2="86.5655" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>
      `;
    const arrow = document.createElement("p");
    arrow.innerText = "\u2191";
    arrow.style.cssText = "font-size: 3rem; margin: 0";
    const message = document.createElement("p");
    message.style.cssText = "margin-top: 0; margin-bottom: 2px; overflow: hidden;";
    message.id = "urbit-visor-modal-text";
    foreground.appendChild(arrow);
    foreground.appendChild(message);
    foreground.appendChild(logo);
    background.appendChild(foreground);
    return background;
  }
  function inject(node) {
    document.body.appendChild(node);
  }
  function showPopup(text) {
    const background = document.getElementById("urbit-visor-modal-bg");
    if (background) {
      background.style.display = "block";
      background.style.opacity = "0.9";
      const modalText = document.getElementById("urbit-visor-modal-text");
      if (modalText)
        modalText.innerText = text;
      setTimeout(() => background.style.display = "none", 3e3);
    }
  }
  function promptUnlock() {
    showPopup("Connect to a ship with your Urbit Visor");
  }
  function promptPerms() {
    showPopup("Open your Urbit Visor to grant permissions.");
  }

  // node_modules/@dcspark/uv-core/dist/visor.js
  var __awaiter2 = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var modal = visorPromptModal();
  console.log(modal, "modal injected");
  inject(modal);
  var urbitVisor = {
    registerName: (name) => callVisor("register_name", { consumerName: name }),
    isConnected: () => requestData("check_connection"),
    promptConnection: () => promptUnlock(),
    authorizedPermissions: () => requestData("check_perms"),
    getShip: () => requestData("shipName"),
    getURL: () => requestData("shipURL"),
    requestPermissions: (permissions) => requestData("perms", permissions),
    scry: (payload) => requestData("scry", payload),
    poke: (payload) => requestData("poke", payload),
    thread: (payload) => requestData("thread", payload),
    subscribe: (payload, once) => requestData("subscribe", { payload, once }),
    unsubscribe: (payload) => requestData("unsubscribe", payload),
    on: (eventType, keys, callback) => addListener(eventType, keys, callback),
    off: (subscription) => subscription.unsubscribe(),
    require: (perms, callback) => initialize(perms, callback)
  };
  function initialize(perms, callback) {
    return __awaiter2(this, void 0, void 0, function* () {
      const sub = urbitVisor.on("connected", [], () => initialize(perms, callback));
      const sub2 = urbitVisor.on("permissions_granted", [], () => initialize(perms, callback));
      const isConnected = yield requestData("check_connection");
      if (isConnected.response) {
        urbitVisor.off(sub);
        const existing = yield requestData("check_perms");
        const granted = perms.every((p) => existing.response.includes(p));
        if (granted)
          urbitVisor.off(sub2), callback();
        else
          requestData("perms", perms);
      } else
        promptUnlock();
    });
  }
  function addListener(eventType, keys, callback) {
    const get_in = (object, array) => {
      if (object && typeof object === "object" && array.length)
        return get_in(object[array[0]], array.slice(1));
      else
        return object;
    };
    const messages = fromEvent(window, "message");
    return messages.subscribe((message) => {
      var _a, _b;
      const data = (_b = (_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.event) === null || _b === void 0 ? void 0 : _b.data;
      if (message.data.app == "urbitVisorEvent" && message.data.event.action == eventType) {
        if (!data)
          callback();
        else {
          const result = get_in(data, keys);
          if (result)
            callback(result);
        }
      }
    });
  }
  function callVisor(action, data) {
    return new Promise((resolve, reject) => {
      const request = { app: "urbitVisor", action, data };
      chrome.runtime.sendMessage(VISOR_ID, request, (response) => resolve(response));
    });
  }
  var cleared = "check_connection";
  function requestData(action, data = null) {
    return __awaiter2(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => __awaiter2(this, void 0, void 0, function* () {
        const response = yield branchRequest(action, data);
        if (response.status === "locked" && action !== cleared)
          promptUnlock();
        if (response.status == "noperms" && action !== cleared)
          promptPerms();
        if (response.error)
          reject(response);
        else
          resolve(response);
      }));
    });
  }
  function branchRequest(action, data, count = 0) {
    return __awaiter2(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => __awaiter2(this, void 0, void 0, function* () {
        var _a;
        if ((_a = chrome.runtime) === null || _a === void 0 ? void 0 : _a.id)
          resolve(callVisor(action, data));
        else {
          if (window.urbitVisor)
            resolve(Messaging.callVisor({ app: "urbitVisor", action, data }));
          else if (count < 10)
            setTimeout(() => resolve(branchRequest(action, data, count++)), 1e3);
          else
            reject("error");
        }
      }));
    });
  }

  // src/popup.ts
  var myShip = "";
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.code === "Comma")
      window.parent.postMessage("close_iframe", "*");
    if (e.code === "Escape")
      window.parent.postMessage("remove_iframe", "*");
  });
  var iframe = document.getElementById("background");
  var textarea = document.getElementById("textarea");
  var button = document.getElementById("button");
  var createButton = document.getElementById("create-button");
  button.addEventListener("click", saveNote);
  createButton.addEventListener("click", createChannel);
  function initiateVisor() {
    urbitVisor.registerName("Urbit Notes Everywhere");
    urbitVisor.require(["shipName", "scry", "poke", "thread"], setData);
  }
  function setData() {
    urbitVisor.getShip().then((res) => {
      console.log(res.response, "r");
      myShip = res.response;
      if (iframe)
        iframe.style.display = "block";
      checkChannelExists(res.response);
    });
  }
  initiateVisor();
  function checkChannelExists(ship) {
    urbitVisor.scry({ app: "graph-store", path: "/keys" }).then((res) => {
      console.log(res, "wut");
      if (res.status === "ok") {
        const keys = res.response["graph-update"].keys;
        const haveKey = !!keys.find((key) => key.ship === ship && key.name === "my-urbit-notes");
        if (haveKey)
          allow();
        else
          disallow();
      } else
        error();
    });
  }
  function allow() {
    textarea.value = "";
    createButton.style.display = "none";
    button.style.display = "block";
  }
  function disallow() {
    textarea.value = `
  Welcome to Urbit Notes Everywhere
  It appears you don't have an Urbit Notes Notebook yet
  Click the button below to create it
  `;
    button.style.display = "none";
    createButton.style.display = "block";
  }
  function error() {
    button.innerText = "Error";
    button.disabled = true;
  }
  async function createChannel() {
    console.log("creating channel");
    const body = {
      create: {
        resource: {
          ship: `~${myShip}`,
          name: "my-urbit-notes"
        },
        title: "My Urbit Notes",
        description: "My Awesome Private Urbit Notebook",
        associated: {
          policy: {
            invite: { pending: [] }
          }
        },
        module: "publish",
        mark: "graph-validator-publish"
      }
    };
    urbitVisor.thread({
      threadName: "graph-create",
      inputMark: "landscape/graph-view-action",
      outputMark: "json",
      body
    }).then((res) => {
      console.log(res, "thread called");
      if (res.status === "ok")
        checkChannelExists(myShip);
    });
  }
  function makeIndex() {
    const DA_UNIX_EPOCH = BigInt("170141184475152167957503069145530368000");
    const DA_SECOND = BigInt("18446744073709551616");
    const timeSinceEpoch = BigInt(Date.now()) * DA_SECOND / BigInt(1e3);
    return "/" + (DA_UNIX_EPOCH + timeSinceEpoch).toString();
  }
  function buildPost(index, contents = []) {
    return {
      author: "~" + myShip,
      contents,
      hash: null,
      index,
      signatures: [],
      "time-sent": Date.now()
    };
  }
  function buildNotebookPost(title, text) {
    const index = makeIndex();
    const contents = [{ text: title }, { text }];
    const children = {
      "1": {
        post: buildPost(`${index}/1`),
        children: {
          "1": {
            children: null,
            post: buildPost(`${index}/1/1`, contents)
          }
        }
      },
      "2": {
        post: buildPost(`${index}/2`),
        children: null
      }
    };
    const nodes = {};
    nodes[index] = {
      children,
      post: buildPost(index)
    };
    const body = {
      "add-nodes": {
        resource: { name: "my-urbit-notes", ship: `~${myShip}` },
        nodes
      }
    };
    return body;
  }
  function extractText() {
    const text = document.querySelector("textarea").value;
    const title = text.split("\n")[0].substring(0, 50);
    const rest = text.replace(title, " ");
    return [title, rest];
  }
  function saveNote() {
    const [title, text] = extractText();
    const body = buildNotebookPost(title, text);
    urbitVisor.poke({ app: "graph-store", mark: "graph-update-3", json: body }).then((res) => {
      button.disabled = true;
      if (res.status === "ok")
        button.innerText = "OK", close();
      else
        button.innerText = "Error";
    });
  }
  function close() {
    setTimeout(() => {
      window.parent.postMessage("close_iframe", "*");
      window.close();
    }, 2e3);
  }
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
