(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      (function() {
        function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              console.warn(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                info[0],
                info[1]
              );
            }
          });
        }
        function getIteratorFn(maybeIterable) {
          if (null === maybeIterable || "object" !== typeof maybeIterable)
            return null;
          maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
          return "function" === typeof maybeIterable ? maybeIterable : null;
        }
        function warnNoop(publicInstance, callerName) {
          publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
          var warningKey = publicInstance + "." + callerName;
          didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function ComponentDummy() {
        }
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        function noop() {
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              JSCompiler_inline_result$jscomp$0
            );
            return testStringCoercion(value);
          }
        }
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ("function" === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
          if ("string" === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
              return "Activity";
          }
          if ("object" === typeof type)
            switch ("number" === typeof type.tag && console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ), type.$$typeof) {
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
              case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {
                }
            }
          return null;
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return "<>";
          if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
            return "<...>";
          try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
          } catch (x) {
            return "<...>";
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error("react-stack-top-frame");
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
          }
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            props,
            _owner: owner
          };
          null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: false,
            get: elementRefGetterWithDeprecationWarning
          }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
          type._store = {};
          Object.defineProperty(type._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: 0
          });
          Object.defineProperty(type, "_debugInfo", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: null
          });
          Object.defineProperty(type, "_debugStack", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugStack
          });
          Object.defineProperty(type, "_debugTask", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: debugTask
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          newKey = ReactElement(
            oldElement.type,
            newKey,
            oldElement.props,
            oldElement._owner,
            oldElement._debugStack,
            oldElement._debugTask
          );
          oldElement._store && (newKey._store.validated = oldElement._store.validated);
          return newKey;
        }
        function validateChildKeys(node) {
          isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
        }
        function isValidElement(object) {
          return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function escape(key) {
          var escaperLookup = { "=": "=0", ":": "=2" };
          return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
          });
        }
        function getElementKey(element, index) {
          return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
        }
        function resolveThenable(thenable) {
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
            default:
              switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
                function(fulfilledValue) {
                  "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                },
                function(error) {
                  "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              )), thenable.status) {
                case "fulfilled":
                  return thenable.value;
                case "rejected":
                  throw thenable.reason;
              }
          }
          throw thenable;
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if ("undefined" === type || "boolean" === type) children = null;
          var invokeCallback = false;
          if (null === children) invokeCallback = true;
          else
            switch (type) {
              case "bigint":
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                    break;
                  case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    );
                }
            }
          if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
              return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
              callback,
              escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
                userProvidedKeyEscapeRegex,
                "$&/"
              ) + "/") + childKey
            ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
          }
          invokeCallback = 0;
          childKey = "" === nameSoFar ? "." : nameSoFar + ":";
          if (isArrayImpl(children))
            for (var i = 0; i < children.length; i++)
              nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if (i = getIteratorFn(children), "function" === typeof i)
            for (i === children.entries && (didWarnAboutMaps || console.warn(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
              nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              );
          else if ("object" === type) {
            if ("function" === typeof children.then)
              return mapIntoArray(
                resolveThenable(children),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
            array = String(children);
            throw Error(
              "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
            );
          }
          return invokeCallback;
        }
        function mapChildren(children, func, context) {
          if (null == children) return children;
          var result = [], count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function lazyInitializer(payload) {
          if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(
              function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 1;
                  payload._result = moduleObject;
                  var _ioInfo = payload._ioInfo;
                  null != _ioInfo && (_ioInfo.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
              },
              function(error) {
                if (0 === payload._status || -1 === payload._status) {
                  payload._status = 2;
                  payload._result = error;
                  var _ioInfo2 = payload._ioInfo;
                  null != _ioInfo2 && (_ioInfo2.end = performance.now());
                  void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
              }
            );
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
              ioInfo.value = thenable;
              var displayName = thenable.displayName;
              "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
          }
          if (1 === payload._status)
            return ioInfo = payload._result, void 0 === ioInfo && console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ioInfo
            ), "default" in ioInfo || console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ioInfo
            ), ioInfo.default;
          throw payload._result;
        }
        function resolveDispatcher() {
          var dispatcher = ReactSharedInternals.H;
          null === dispatcher && console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
          return dispatcher;
        }
        function releaseAsyncTransition() {
          ReactSharedInternals.asyncTransitions--;
        }
        function enqueueTask(task) {
          if (null === enqueueTaskImpl)
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              enqueueTaskImpl = (module && module[requireString]).call(
                module,
                "timers"
              ).setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          return enqueueTaskImpl(task);
        }
        function aggregateErrors(errors) {
          return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
        }
        function popActScope(prevActQueue, prevActScopeDepth) {
          prevActScopeDepth !== actScopeDepth - 1 && console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
          actScopeDepth = prevActScopeDepth;
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          var queue = ReactSharedInternals.actQueue;
          if (null !== queue)
            if (0 !== queue.length)
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
              } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
              }
            else ReactSharedInternals.actQueue = null;
          0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
        }
        function flushActQueue(queue) {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i];
                do {
                  ReactSharedInternals.didUsePromise = false;
                  var continuation = callback(false);
                  if (null !== continuation) {
                    if (ReactSharedInternals.didUsePromise) {
                      queue[i] = callback;
                      queue.splice(0, i);
                      return;
                    }
                    callback = continuation;
                  } else break;
                } while (1);
              }
              queue.length = 0;
            } catch (error) {
              queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally {
              isFlushing = false;
            }
          }
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
          isMounted: function() {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
          }
        }, assign = Object.assign, emptyObject = {};
        Object.freeze(emptyObject);
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        var deprecatedAPIs = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
          ]
        };
        for (fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        ComponentDummy.prototype = Component.prototype;
        deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
        deprecatedAPIs.constructor = PureComponent;
        assign(deprecatedAPIs, Component.prototype);
        deprecatedAPIs.isPureReactComponent = true;
        var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          asyncTransitions: 0,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0
        }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
          return null;
        };
        deprecatedAPIs = {
          react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
          }
        };
        var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
          deprecatedAPIs,
          UnknownOwner
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
          if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
              bubbles: true,
              cancelable: true,
              message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
              error
            });
            if (!window.dispatchEvent(event)) return;
          } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
          }
          console.error(error);
        }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
          queueMicrotask(function() {
            return queueMicrotask(callback);
          });
        } : enqueueTask;
        deprecatedAPIs = Object.freeze({
          __proto__: null,
          c: function(size) {
            return resolveDispatcher().useMemoCache(size);
          }
        });
        var fnName = {
          map: mapChildren,
          forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function() {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          },
          count: function(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          },
          toArray: function(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          },
          only: function(children) {
            if (!isValidElement(children))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return children;
          }
        };
        exports.Activity = REACT_ACTIVITY_TYPE;
        exports.Children = fnName;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
        exports.__COMPILER_RUNTIME = deprecatedAPIs;
        exports.act = function(callback) {
          var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
          try {
            var result = callback();
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
              didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
            });
            return {
              then: function(resolve, reject) {
                didAwaitActCall = true;
                thenable.then(
                  function(returnValue) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    if (0 === prevActScopeDepth) {
                      try {
                        flushActQueue(queue), enqueueTask(function() {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        });
                      } catch (error$0) {
                        ReactSharedInternals.thrownErrors.push(error$0);
                      }
                      if (0 < ReactSharedInternals.thrownErrors.length) {
                        var _thrownError = aggregateErrors(
                          ReactSharedInternals.thrownErrors
                        );
                        ReactSharedInternals.thrownErrors.length = 0;
                        reject(_thrownError);
                      }
                    } else resolve(returnValue);
                  },
                  function(error) {
                    popActScope(prevActQueue, prevActScopeDepth);
                    0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                  }
                );
              }
            };
          }
          var returnValue$jscomp$0 = result;
          popActScope(prevActQueue, prevActScopeDepth);
          0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
            ));
          }), ReactSharedInternals.actQueue = null);
          if (0 < ReactSharedInternals.thrownErrors.length)
            throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              })) : resolve(returnValue$jscomp$0);
            }
          };
        };
        exports.cache = function(fn) {
          return function() {
            return fn.apply(null, arguments);
          };
        };
        exports.cacheSignal = function() {
          return null;
        };
        exports.captureOwnerStack = function() {
          var getCurrentStack = ReactSharedInternals.getCurrentStack;
          return null === getCurrentStack ? null : getCurrentStack();
        };
        exports.cloneElement = function(element, config, children) {
          if (null === element || void 0 === element)
            throw Error(
              "The argument must be a React element, but you passed " + element + "."
            );
          var props = assign({}, element.props), key = element.key, owner = element._owner;
          if (null != config) {
            var JSCompiler_inline_result;
            a: {
              if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) && JSCompiler_inline_result.isReactWarning) {
                JSCompiler_inline_result = false;
                break a;
              }
              JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for (propName in config)
              !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
          }
          var propName = arguments.length - 2;
          if (1 === propName) props.children = children;
          else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for (var i = 0; i < propName; i++)
              JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
          }
          props = ReactElement(
            element.type,
            key,
            props,
            owner,
            element._debugStack,
            element._debugTask
          );
          for (key = 2; key < arguments.length; key++)
            validateChildKeys(arguments[key]);
          return props;
        };
        exports.createContext = function(defaultValue) {
          defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          defaultValue.Provider = defaultValue;
          defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
          };
          defaultValue._currentRenderer = null;
          defaultValue._currentRenderer2 = null;
          return defaultValue;
        };
        exports.createElement = function(type, config, children) {
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i]);
          i = {};
          var key = null;
          if (null != config)
            for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
              hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
          var childrenLength = arguments.length - 2;
          if (1 === childrenLength) i.children = children;
          else if (1 < childrenLength) {
            for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
              childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
          }
          if (type && type.defaultProps)
            for (propName in childrenLength = type.defaultProps, childrenLength)
              void 0 === i[propName] && (i[propName] = childrenLength[propName]);
          key && defineKeyPropWarningGetter(
            i,
            "function" === typeof type ? type.displayName || type.name || "Unknown" : type
          );
          var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          return ReactElement(
            type,
            key,
            i,
            getOwner(),
            propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
            propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
          );
        };
        exports.createRef = function() {
          var refObject = { current: null };
          Object.seal(refObject);
          return refObject;
        };
        exports.forwardRef = function(render) {
          null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          ) : "function" !== typeof render ? console.error(
            "forwardRef requires a render function but was given %s.",
            null === render ? "null" : typeof render
          ) : 0 !== render.length && 2 !== render.length && console.error(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
          );
          null != render && null != render.defaultProps && console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
          var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
            }
          });
          return elementType;
        };
        exports.isValidElement = isValidElement;
        exports.lazy = function(ctor) {
          ctor = { _status: -1, _result: ctor };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
          }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
          };
          ctor._ioInfo = ioInfo;
          lazyType._debugInfo = [{ awaited: ioInfo }];
          return lazyType;
        };
        exports.memo = function(type, compare) {
          null == type && console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
          compare = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: void 0 === compare ? null : compare
          };
          var ownName;
          Object.defineProperty(compare, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
            }
          });
          return compare;
        };
        exports.startTransition = function(scope) {
          var prevTransition = ReactSharedInternals.T, currentTransition = {};
          currentTransition._updatedFibers = /* @__PURE__ */ new Set();
          ReactSharedInternals.T = currentTransition;
          try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
          } catch (error) {
            reportGlobalError(error);
          } finally {
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
              "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
            ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
          }
        };
        exports.unstable_useCacheRefresh = function() {
          return resolveDispatcher().useCacheRefresh();
        };
        exports.use = function(usable) {
          return resolveDispatcher().use(usable);
        };
        exports.useActionState = function(action, initialState, permalink) {
          return resolveDispatcher().useActionState(
            action,
            initialState,
            permalink
          );
        };
        exports.useCallback = function(callback, deps) {
          return resolveDispatcher().useCallback(callback, deps);
        };
        exports.useContext = function(Context) {
          var dispatcher = resolveDispatcher();
          Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
          return dispatcher.useContext(Context);
        };
        exports.useDebugValue = function(value, formatterFn) {
          return resolveDispatcher().useDebugValue(value, formatterFn);
        };
        exports.useDeferredValue = function(value, initialValue) {
          return resolveDispatcher().useDeferredValue(value, initialValue);
        };
        exports.useEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useEffect(create, deps);
        };
        exports.useEffectEvent = function(callback) {
          return resolveDispatcher().useEffectEvent(callback);
        };
        exports.useId = function() {
          return resolveDispatcher().useId();
        };
        exports.useImperativeHandle = function(ref, create, deps) {
          return resolveDispatcher().useImperativeHandle(ref, create, deps);
        };
        exports.useInsertionEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useInsertionEffect(create, deps);
        };
        exports.useLayoutEffect = function(create, deps) {
          null == create && console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
          return resolveDispatcher().useLayoutEffect(create, deps);
        };
        exports.useMemo = function(create, deps) {
          return resolveDispatcher().useMemo(create, deps);
        };
        exports.useOptimistic = function(passthrough, reducer) {
          return resolveDispatcher().useOptimistic(passthrough, reducer);
        };
        exports.useReducer = function(reducer, initialArg, init) {
          return resolveDispatcher().useReducer(reducer, initialArg, init);
        };
        exports.useRef = function(initialValue) {
          return resolveDispatcher().useRef(initialValue);
        };
        exports.useState = function(initialState) {
          return resolveDispatcher().useState(initialState);
        };
        exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
          return resolveDispatcher().useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          );
        };
        exports.useTransition = function() {
          return resolveDispatcher().useTransition();
        };
        exports.version = "19.2.7";
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // JLeagueSim.jsx
  var import_react = __toESM(require_react());
  var CONFIG = {
    ABILITY_BASE_CAP: 200,
    ABILITY_CAP_VARIANCE: 0,
    PLAYER_CAP: 250,
    // 11スタメン＋控え3名の計14名へ配分する総枠
    AI_CAP_MIN: 185,
    // AIのスタメン枠（中心を≈200に置き、控え込み均等配分の典型XI≈200でも勝負可）
    AI_CAP_MAX: 220,
    MIN_ABILITY: 1,
    MAX_ABILITY: 5,
    PLAYERS_PER_TEAM: 11,
    TOTAL_TEAMS: 20,
    MATCHDAYS: 38,
    HOME_BONUS: 1.12,
    BASE_CHANCES: 9,
    CONVERSION_COEF: 0.6,
    UPSET_RATE: 0.22,
    STRENGTH_EXP: 1.15,
    // 強さ曲線（低いほど“尖り”の雪だるまを抑制し均衡型が戦える）
    GOAL_CLAMP: 7,
    SIMPLE_AVG_GOALS: 1.35,
    SIMPLE_STRENGTH_AMP: 2.7,
    ASSIST_RATE: 0.5,
    FIN_BASE: 0.6,
    // 決定力係数の下駄
    FIN_SPAN: 0.7,
    // 決定力の伸び幅
    DEF_BASE: 1.3,
    // 守備の堅さ係数の下駄（決定力の対称項）
    DEF_SPAN: 0.5,
    // 守備の堅さの効き幅（組織的守備が決定機の質を下げる）
    DEF_ORG_BONUS: 0.12,
    // 組織力→守備の堅さへの上乗せ（団結した守備を評価）
    ORG_MID: 0.05,
    // 組織力→中盤ボーナス上限（組織サッカーを強く評価）
    ORG_DEF: 0.04,
    // 組織力→守備ボーナス上限
    ORG_STD_REF: 6,
    // 組織力の基準（外野能力合計の標準偏差）
    WL_DEF: 0.16,
    // 守備の最弱リンク罰（穴のある編成を強く罰する）
    ALLOC_TILT_JIT: 0.25,
    // AI配分の能力内ばらつき
    ALLOC_SHARE_JIT: 0.12,
    // AI選手間の総量ばらつき（小さいほど均質で強い）
    STYLE_EDGE: 0.12,
    // スタイル相性「強い」の攻撃増減（±）
    STYLE_EDGE_SOFT: 0.06,
    // スタイル相性「やや強い」の攻撃増減（±）
    STYLE_META_SHARE: 0.55,
    // シーズン：流行スタイルを採用するAIの割合（トレンド形成）
    FOREIGN_WEIGHTS: [2, 4, 3, 2],
    // 外国人 0/1/2/3 人の出現重み（上限3）
    FORMATIONS: {
      "4-4-2": { df: 4, mf: 4, fw: 2, atk: 1, def: 1, mid: 1, note: "\u30D0\u30E9\u30F3\u30B9\u578B\u3002\u7A74\u304C\u5C11\u306A\u3044\u4E07\u80FD\u5E03\u9663\u3002" },
      "4-3-3": { df: 4, mf: 3, fw: 3, atk: 1.12, def: 0.94, mid: 0.96, note: "\u653B\u6483\u5BC4\u308A\u3002\u524D\u7DDA3\u679A\u3067\u5F97\u70B9\u529B\u304C\u9AD8\u3044\u3002" },
      "3-4-3": { df: 3, mf: 4, fw: 3, atk: 1.14, def: 0.88, mid: 1.02, note: "\u8D85\u653B\u6483\u7684\u30023\u30C8\u30C3\u30D7\uFF0B\u539A\u3044\u4E2D\u76E4\u3001\u6700\u7D42\u30E9\u30A4\u30F3\u306F\u8584\u3044\u3002" },
      "3-5-2": { df: 3, mf: 5, fw: 2, atk: 1.02, def: 0.9, mid: 1.16, note: "\u4E2D\u76E4\u652F\u914D\u578B\u3002\u305F\u3060\u3057\u6700\u7D42\u30E9\u30A4\u30F3\u306F\u8584\u3044\u3002" },
      "4-2-3-1": { df: 4, mf: 5, fw: 1, atk: 0.96, def: 1.06, mid: 1.1, note: "\u4E2D\u76E4\u539A\u3081\uFF06\u5B88\u5099\u5B89\u5B9A\u3002\u5805\u5B9F\u306B\u52DD\u3061\u70B9\u3092\u62FE\u3046\u3002" },
      "3-4-2-1": { df: 3, mf: 4, fw: 1, atk: 1.08, def: 0.92, mid: 1.08, note: "3\u30D0\u30C3\u30AF\uFF0B2\u30B7\u30E3\u30C9\u30FC\u3002\u4E2D\u592E\u306B\u539A\u304F\u653B\u6483\u7684\u3002" },
      "5-3-2": { df: 5, mf: 3, fw: 2, atk: 0.9, def: 1.2, mid: 0.95, note: "\u5B88\u5099\u7684\u3002\u76F8\u624B\u306E\u524D\u7DDA\u304C\u539A\u3044\u307B\u3069\u5F37\u3044\u3002" },
      "5-2-3": { df: 5, mf: 2, fw: 3, atk: 1, def: 1.16, mid: 0.84, note: "5\u30D0\u30C3\u30AF\u304B\u3089\u524D3\u679A\u3078\u3002\u4E2D\u76E4\u306F\u8584\u3044\u304C\u5B88\u5099\u3068\u901F\u653B\u3092\u4E21\u7ACB\u3002" },
      "5-4-1": { df: 5, mf: 4, fw: 1, atk: 0.86, def: 1.22, mid: 1, note: "5-4-1\u3002\u6700\u3082\u5B88\u5099\u7684\u3067\u3001\u5805\u5B88\u901F\u653B\u5411\u304D\u3002" }
    },
    // 広域ポジション別：能力[shoot,pass,speed,physical,defense,gk]→attack/defense/midfield 寄与
    POS_WEIGHTS: {
      GK: { attack: [0, 0, 0, 0, 0, 0], defense: [0, 0, 0, 0, 0, 0], midfield: [0, 0, 0, 0, 0, 0] },
      DF: { attack: [0.1, 0.2, 0.1, 0.1, 0, 0.1], defense: [0, 0, 0.1, 0.4, 0.6, 0], midfield: [0, 0.3, 0.2, 0.1, 0.1, 0.1] },
      MF: { attack: [0.3, 0.4, 0.3, 0.1, 0, 0.3], defense: [0, 0.1, 0.2, 0.2, 0.3, 0], midfield: [0.2, 0.5, 0.4, 0.1, 0.1, 0.3] },
      FW: { attack: [0.55, 0.2, 0.4, 0.3, 0, 0.4], defense: [0, 0, 0.1, 0.1, 0.05, 0], midfield: [0.1, 0.2, 0.2, 0.05, 0, 0.15] }
    }
  };
  var STYLES = ["possession", "shortcounter", "longcounter", "retreat", "highpress"];
  var STYLE_LABEL = {
    possession: "\u30DD\u30BC\u30C3\u30B7\u30E7\u30F3",
    shortcounter: "\u30B7\u30E7\u30FC\u30C8\u30AB\u30A6\u30F3\u30BF\u30FC",
    longcounter: "\u30ED\u30F3\u30B0\u30AB\u30A6\u30F3\u30BF\u30FC",
    retreat: "\u30EA\u30C8\u30EA\u30FC\u30C8",
    highpress: "\u30CF\u30A4\u30D7\u30EC\u30B9"
  };
  var STYLE_STRONG = {
    // X が強く有利な相手
    possession: "retreat",
    retreat: "shortcounter",
    shortcounter: "longcounter",
    longcounter: "highpress",
    highpress: "possession"
  };
  var STYLE_SLIGHT = {
    // X がやや有利な相手（二次的な相性）
    possession: "longcounter",
    // 保持で速攻を封じる
    shortcounter: "possession",
    // 局所的な奪取で刺す
    longcounter: "retreat",
    // 攻撃意欲の差
    retreat: "highpress",
    // 高い守備ラインを消耗・逆襲
    highpress: "shortcounter"
    // より高い強度で上回る
  };
  var STYLE_BEATS = {};
  STYLES.forEach((s) => STYLE_BEATS[s] = [STYLE_STRONG[s], STYLE_SLIGHT[s]]);
  var counterOf = (style) => STYLES.find((s) => STYLE_STRONG[s] === style);
  var STYLE_MODS = {
    possession: { atk: 1, def: 1, mid: 1.08, poss: 1.12, conv: 1 },
    shortcounter: { atk: 1.05, def: 0.98, mid: 0.95, poss: 0.85, conv: 1.12 },
    longcounter: { atk: 1, def: 1.1, mid: 0.92, poss: 0.72, conv: 1.14 },
    retreat: { atk: 0.95, def: 1.12, mid: 0.95, poss: 0.8, conv: 1 },
    highpress: { atk: 1.08, def: 0.92, mid: 1.06, poss: 1.05, conv: 1 }
  };
  var MENTALITIES = ["attacking", "balanced", "defensive"];
  var MENTALITY_LABEL = { attacking: "\u653B\u6483\u7684", balanced: "\u30D0\u30E9\u30F3\u30B9", defensive: "\u5B88\u5099\u7684" };
  var MENTALITY_MODS = {
    attacking: { atk: 1.12, def: 0.9, mid: 1.02, poss: 1.04 },
    balanced: { atk: 1, def: 1, mid: 1, poss: 1 },
    defensive: { atk: 0.9, def: 1.12, mid: 0.98, poss: 0.96 }
  };
  var DETAIL_TO_BROAD = {
    GK: "GK",
    CB: "DF",
    LB: "DF",
    RB: "DF",
    LWB: "DF",
    RWB: "DF",
    DM: "MF",
    CM: "MF",
    LM: "MF",
    RM: "MF",
    AM: "MF",
    LAM: "MF",
    RAM: "MF",
    ST: "FW",
    CF: "FW",
    LW: "FW",
    RW: "FW",
    SS: "FW"
  };
  var broadPos = (code) => DETAIL_TO_BROAD[code] || "MF";
  var FORMATION_LAYOUT = {
    "4-4-2": {
      slots: ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "ST", "ST"],
      coords: [[50, 86], [82, 74], [60, 76], [40, 76], [18, 74], [84, 48], [60, 50], [40, 50], [16, 48], [60, 22], [40, 22]]
    },
    "4-3-3": {
      slots: ["GK", "RB", "CB", "CB", "LB", "CM", "DM", "CM", "RW", "ST", "LW"],
      coords: [[50, 86], [82, 74], [60, 76], [40, 76], [18, 74], [68, 52], [50, 58], [32, 52], [82, 26], [50, 18], [18, 26]]
    },
    "3-5-2": {
      slots: ["GK", "CB", "CB", "CB", "RM", "CM", "AM", "CM", "LM", "ST", "ST"],
      coords: [[50, 86], [66, 75], [50, 70], [34, 75], [84, 50], [64, 54], [50, 40], [36, 54], [16, 50], [60, 20], [40, 20]]
    },
    "4-2-3-1": {
      slots: ["GK", "RB", "CB", "CB", "LB", "DM", "DM", "RAM", "AM", "LAM", "ST"],
      coords: [[50, 86], [82, 74], [60, 76], [40, 76], [18, 74], [62, 56], [38, 56], [82, 36], [50, 34], [18, 36], [50, 16]]
    },
    "3-4-2-1": {
      slots: ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "RAM", "LAM", "ST"],
      coords: [[50, 86], [66, 75], [50, 70], [34, 75], [86, 54], [60, 56], [40, 56], [14, 54], [64, 32], [36, 32], [50, 16]]
    },
    "5-3-2": {
      slots: ["GK", "RWB", "CB", "CB", "CB", "LWB", "CM", "CM", "CM", "ST", "ST"],
      coords: [[50, 86], [90, 66], [66, 75], [50, 70], [34, 75], [10, 66], [68, 52], [50, 54], [32, 52], [60, 22], [40, 22]]
    },
    "3-4-3": {
      slots: ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "RW", "ST", "LW"],
      coords: [[50, 86], [66, 75], [50, 70], [34, 75], [86, 54], [60, 56], [40, 56], [14, 54], [82, 24], [50, 18], [18, 24]]
    },
    "5-2-3": {
      slots: ["GK", "RWB", "CB", "CB", "CB", "LWB", "CM", "CM", "RW", "ST", "LW"],
      coords: [[50, 86], [90, 68], [66, 75], [50, 70], [34, 75], [10, 68], [62, 54], [38, 54], [82, 26], [50, 22], [18, 26]]
    },
    "5-4-1": {
      slots: ["GK", "RWB", "CB", "CB", "CB", "LWB", "RM", "CM", "CM", "LM", "ST"],
      coords: [[50, 86], [90, 66], [66, 75], [50, 70], [34, 75], [10, 66], [84, 50], [60, 52], [40, 52], [16, 50], [50, 22]]
    }
  };
  var formationSlots = (f) => FORMATION_LAYOUT[f].slots;
  var formationCoords = (f) => FORMATION_LAYOUT[f].coords;
  function transformLayout(formation, _mentality = "balanced") {
    const base = FORMATION_LAYOUT[formation];
    return { slots: base.slots.slice(), coords: base.coords.map((c) => c.slice()) };
  }
  function bakeMentality(team) {
    team.coords = FORMATION_LAYOUT[team.formation].coords.map((c) => c.slice());
    return team;
  }
  var rnd = (min, max) => Math.random() * (max - min) + min;
  var randint = (min, max) => Math.floor(rnd(min, max + 1));
  var pick = (arr) => arr[randint(0, arr.length - 1)];
  var uid = () => Math.random().toString(36).slice(2, 9);
  function poisson(lambda) {
    const L = Math.exp(-lambda);
    let k = 0, p = 1;
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    return k - 1;
  }
  function weightedPick(items, weights) {
    const total = weights.reduce((s, w) => s + w, 0);
    if (total <= 0) return items[randint(0, items.length - 1)];
    let r = Math.random() * total;
    for (let i = 0; i < items.length; i++) {
      r -= weights[i];
      if (r <= 0) return items[i];
    }
    return items[items.length - 1];
  }
  var weightedIndex = (weights) => {
    const total = weights.reduce((s, w) => s + w, 0);
    let r = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
      r -= weights[i];
      if (r <= 0) return i;
    }
    return weights.length - 1;
  };
  var STAT_KEYS = ["shoot", "pass", "speed", "physical", "defense", "technique"];
  var STAT_IDX = { shoot: 0, pass: 1, speed: 2, physical: 3, defense: 4, technique: 5 };
  var baseAbility = () => ({ shoot: 1, pass: 1, speed: 1, physical: 1, defense: 1, technique: 1 });
  function coordMod(x, y, _broad) {
    const w = Math.abs(x - 50) / 50;
    const adv = (100 - y) / 100;
    const m = [1, 1, 1, 1, 1, 1];
    m[2] *= 1 + 0.45 * w;
    m[5] *= 1 + 0.14 * w;
    m[3] *= (1 - 0.2 * w) * (1 + 0.2 * (1 - w));
    m[4] *= (1 - 0.12 * w) * (1 + 0.12 * (1 - w));
    m[1] *= 1 + 0.12 * (1 - w);
    m[0] *= 1 + 0.28 * adv;
    m[5] *= 1 + 0.14 * adv;
    m[4] *= 1 + 0.2 * (1 - adv);
    m[3] *= 1 + 0.1 * (1 - adv);
    return m;
  }
  var STYLE_ROLE = {
    possession: { all: { pass: 1.15, technique: 1.15 }, FW: { physical: 0.95 } },
    highpress: { all: { speed: 1.08 }, FW: { defense: 1.7, speed: 1.12 }, MF: { defense: 1.25 }, DF: { speed: 1.12 } },
    longcounter: { FW: { speed: 1.25, defense: 0.4 }, MF: { defense: 1.2 }, DF: { defense: 1.15, physical: 1.1 } },
    shortcounter: { FW: { shoot: 1.15, speed: 1.12 }, MF: { speed: 1.1, defense: 1.08 } },
    retreat: { all: { defense: 1.2, physical: 1.1 }, FW: { shoot: 0.95, speed: 1.05 } }
  };
  function styleRoleMod(style, broad) {
    const m = [1, 1, 1, 1, 1, 1];
    const sr = STYLE_ROLE[style];
    if (!sr) return m;
    const apply = (o) => {
      if (o) for (const k in o) m[STAT_IDX[k]] *= o[k];
    };
    apply(sr.all);
    apply(sr[broad]);
    return m;
  }
  function effWeights(broad, x, y, style) {
    const base = CONFIG.POS_WEIGHTS[broad] || CONFIG.POS_WEIGHTS.MF;
    const cm = coordMod(x, y, broad), sm = styleRoleMod(style, broad);
    const comb = (arr) => arr.map((v, i) => v * cm[i] * sm[i]);
    return { attack: comb(base.attack), defense: comb(base.defense), midfield: comb(base.midfield) };
  }
  var KEEP_W = { defense: 0.55, physical: 0.25, speed: 0.12, technique: 0.08 };
  var gkKeeping = (p) => KEEP_W.defense * p.ability.defense + KEEP_W.physical * p.ability.physical + KEEP_W.speed * p.ability.speed + KEEP_W.technique * p.ability.technique;
  var GK_ALLOC = [0.1, 0.5, 0.9, 1.6, 2.6, 0.6];
  function distributePoints(players, cap, formation, style = "balanced", even = false, shareJit = CONFIG.ALLOC_SHARE_JIT) {
    const coords = formationCoords(formation);
    const N = players.length;
    let remaining = Math.max(0, cap - N * 6);
    const share = players.map(() => rnd(1 - shareJit, 1 + shareJit));
    const tilt = players.map((p, i) => {
      const bp = broadPos(p.position), c = coords[i] || [50, 50];
      let aw;
      if (bp === "GK") aw = GK_ALLOC.slice();
      else {
        const w = effWeights(bp, c[0], c[1], style);
        aw = STAT_KEYS.map((_, j) => w.attack[j] + w.defense[j] + w.midfield[j]);
      }
      return aw.map((v) => Math.max(0.05, v * rnd(1 - CONFIG.ALLOC_TILT_JIT, 1 + CONFIG.ALLOC_TILT_JIT)));
    });
    if (even) {
      const sShare = share.reduce((a, b) => a + b, 0) || 1;
      let targets = share.map((s) => Math.round(remaining * s / sShare));
      let diff = remaining - targets.reduce((a, b) => a + b, 0);
      for (let k = 0; diff !== 0 && N; k = (k + 1) % N) {
        const d = diff > 0 ? 1 : -1;
        if (targets[k] + d >= 0) {
          targets[k] += d;
          diff -= d;
        }
      }
      players.forEach((p, i) => {
        let pts = targets[i], guard2 = 600;
        while (pts > 0 && guard2-- > 0) {
          const ww = STAT_KEYS.map((k, j) => p.ability[k] >= CONFIG.MAX_ABILITY ? 0 : tilt[i][j]);
          if (ww.every((w) => w <= 0)) break;
          p.ability[STAT_KEYS[weightedIndex(ww)]]++;
          pts--;
        }
      });
      return players;
    }
    let guard = 12e3;
    while (remaining > 0 && guard-- > 0) {
      const selW = players.map((p2, i) => STAT_KEYS.some((k) => p2.ability[k] < CONFIG.MAX_ABILITY) ? share[i] : 0);
      if (selW.every((w) => w <= 0)) break;
      const pi = weightedIndex(selW);
      const p = players[pi];
      const ww = STAT_KEYS.map((k, j) => p.ability[k] >= CONFIG.MAX_ABILITY ? 0 : tilt[pi][j]);
      if (ww.every((w) => w <= 0)) continue;
      p.ability[STAT_KEYS[weightedIndex(ww)]]++;
      remaining--;
    }
    return players;
  }
  function playerStarScore(p) {
    const out = STAT_KEYS.reduce((s, k) => s + p.ability[k], 0);
    const mx = Math.max(...STAT_KEYS.map((k) => p.ability[k]));
    return out + mx * 1.5;
  }
  function pickNotablePlayers(teams, count = 3) {
    const all = [];
    Object.values(teams).forEach((t) => t.players.forEach((p) => {
      if (broadPos(p.position) === "GK") return;
      all.push({ id: p.id, teamId: t.id, teamName: t.name, name: p.name, position: p.position, foreign: p.foreign, ability: p.ability, score: playerStarScore(p) });
    }));
    all.sort((a, b) => b.score - a.score);
    const picked = [], usedTeams = /* @__PURE__ */ new Set();
    for (const c of all) {
      if (usedTeams.has(c.teamId)) continue;
      picked.push(c);
      usedTeams.add(c.teamId);
      if (picked.length >= count) break;
    }
    return picked;
  }
  var CITIES = ["\u672D\u5E4C", "\u516B\u6238", "\u76DB\u5CA1", "\u79CB\u7530", "\u5C71\u5F62", "\u4ED9\u53F0", "\u3044\u308F\u304D", "\u6C34\u6238", "\u5B87\u90FD\u5BAE", "\u524D\u6A4B", "\u5927\u5BAE", "\u3055\u3044\u305F\u307E", "\u5343\u8449", "\u67CF", "\u753A\u7530", "\u6771\u4EAC", "\u6A2A\u6D5C", "\u5DDD\u5D0E", "\u76F8\u6A21\u539F", "\u5E73\u585A", "\u7532\u5E9C", "\u677E\u672C", "\u9577\u91CE", "\u65B0\u6F5F", "\u5BCC\u5C71", "\u91D1\u6CA2", "\u798F\u4E95", "\u85E4\u679D", "\u78D0\u7530", "\u6E05\u6C34", "\u6CBC\u6D25", "\u6D5C\u677E", "\u540D\u53E4\u5C4B", "\u8C4A\u7530", "\u5C90\u961C", "\u56DB\u65E5\u5E02", "\u4EAC\u90FD", "\u5927\u962A", "\u5439\u7530", "\u583A", "\u795E\u6238", "\u59EB\u8DEF", "\u5948\u826F", "\u548C\u6B4C\u5C71", "\u9CE5\u53D6", "\u677E\u6C5F", "\u5CA1\u5C71", "\u5E83\u5CF6", "\u798F\u5C71", "\u4E0B\u95A2", "\u5C71\u53E3", "\u5FB3\u5CF6", "\u9AD8\u677E", "\u4ECA\u6CBB", "\u677E\u5C71", "\u9AD8\u77E5", "\u5317\u4E5D\u5DDE", "\u798F\u5CA1", "\u4E45\u7559\u7C73", "\u9CE5\u6816", "\u9577\u5D0E", "\u718A\u672C", "\u5927\u5206", "\u5BAE\u5D0E", "\u9E7F\u5150\u5CF6", "\u90A3\u8987"];
  var CLUB_WORDS = ["\u30E6\u30CA\u30A4\u30C6\u30C3\u30C9", "\u30B7\u30C6\u30A3", "\u30A2\u30B9\u30EC\u30C6\u30A3\u30C3\u30AF", "\u30ED\u30F4\u30A1\u30FC\u30BA", "\u30EF\u30F3\u30C0\u30E9\u30FC\u30BA", "\u30A2\u30EB\u30D3\u30AA\u30F3", "\u30EC\u30F3\u30B8\u30E3\u30FC\u30BA", "\u30B9\u30DD\u30EB\u30C6\u30A3\u30F3\u30B0", "\u30C7\u30DD\u30EB\u30C6\u30A3\u30FC\u30DC", "\u30CA\u30B7\u30AA\u30CA\u30EB", "\u30A2\u30C8\u30EC\u30C6\u30A3\u30B3", "\u30A4\u30F3\u30C6\u30EB", "\u30C7\u30A3\u30CA\u30E2", "\u30AA\u30EA\u30F3\u30D4\u30B3", "\u30B9\u30DD\u30EB\u30C8", "\u30EC\u30A2\u30EB", "\u30EC\u30AC\u30FC\u30EC", "\u30C8\u30EA\u30AA\u30F3\u30D5\u30A9", "\u30D5\u30A9\u30EB\u30C4\u30A1", "\u30A2\u30F4\u30A1\u30F3\u30C6\u30A3", "\u30F4\u30A7\u30ED\u30FC\u30C1\u30A7", "\u30A2\u30AF\u30A4\u30E9", "\u30EC\u30AA\u30FC\u30CD", "\u30EB\u30FC\u30DD", "\u30D5\u30A1\u30EB\u30B3", "\u30B3\u30EB\u30F4\u30A9", "\u30C9\u30E9\u30B4", "\u30B9\u30C6\u30C3\u30E9", "\u30B3\u30E1\u30FC\u30BF", "\u30C6\u30F3\u30DA\u30B9\u30BF", "\u30DE\u30A8\u30B9\u30C8\u30ED", "\u30F4\u30A3\u30AA\u30E9", "\u30A2\u30BA\u30FC\u30EA", "\u30E9\u30D4\u30FC\u30C9", "\u30BB\u30EC\u30B9\u30C6", "\u30A8\u30B9\u30C8\u30EC\u30FC\u30B8\u30E3"];
  var SURNAMES = ["\u4F50\u85E4", "\u9234\u6728", "\u9AD8\u6A4B", "\u7530\u4E2D", "\u4F0A\u85E4", "\u6E21\u8FBA", "\u5C71\u672C", "\u4E2D\u6751", "\u5C0F\u6797", "\u52A0\u85E4", "\u5409\u7530", "\u5C71\u7530", "\u4F50\u3005\u6728", "\u5C71\u53E3", "\u677E\u672C", "\u4E95\u4E0A", "\u6728\u6751", "\u6797", "\u658E\u85E4", "\u6E05\u6C34", "\u5C71\u5D0E", "\u68EE", "\u6C60\u7530", "\u6A4B\u672C", "\u963F\u90E8", "\u77F3\u5DDD", "\u5C71\u4E0B", "\u4E2D\u5CF6", "\u77F3\u4E95", "\u5C0F\u5DDD", "\u524D\u7530", "\u5CA1\u7530", "\u9577\u8C37\u5DDD", "\u85E4\u7530", "\u5F8C\u85E4", "\u8FD1\u85E4", "\u6751\u4E0A", "\u9060\u85E4", "\u9752\u6728", "\u5742\u672C", "\u6589\u85E4", "\u798F\u7530", "\u592A\u7530", "\u897F\u6751", "\u85E4\u4E95", "\u91D1\u5B50", "\u5CA1\u672C", "\u85E4\u539F", "\u4E2D\u91CE", "\u4E09\u6D66", "\u4E2D\u5DDD", "\u539F\u7530", "\u5C0F\u91CE", "\u7530\u6751", "\u7AF9\u5185", "\u91D1\u6CA2", "\u548C\u7530", "\u4E2D\u5C71", "\u77F3\u7530", "\u4E0A\u7530", "\u68EE\u7530", "\u539F", "\u67F4\u7530", "\u9152\u4E95", "\u5DE5\u85E4", "\u6A2A\u5C71", "\u5BAE\u5D0E", "\u5BAE\u672C", "\u5185\u7530", "\u9AD8\u6728", "\u5B89\u85E4", "\u5CF6\u7530", "\u8C37\u53E3", "\u5927\u91CE", "\u9AD8\u7530", "\u4E38\u5C71", "\u4ECA\u4E95", "\u6CB3\u91CE", "\u6B66\u7530", "\u4E0A\u91CE", "\u5343\u8449", "\u83C5\u539F", "\u4E45\u4FDD", "\u5E73\u91CE", "\u5927\u585A", "\u5C0F\u5CF6", "\u685C\u4E95", "\u91CE\u53E3", "\u677E\u7530", "\u6728\u4E0B"];
  var GIVENNAMES = ["\u60A0\u6597", "\u5927\u7FD4", "\u84EE", "\u967D\u6597", "\u6E4A", "\u6A39", "\u5927\u548C", "\u7FD4\u592A", "\u62D3\u6D77", "\u99FF", "\u7FD4", "\u6D77\u6597", "\u9678", "\u98AF\u592A", "\u60A0\u771F", "\u745B\u592A", "\u76F4\u6A39", "\u7FD4\u5E73", "\u4EAE", "\u5927\u8F1D", "\u6DBC", "\u5065", "\u7FFC", "\u8061", "\u8AA0", "\u667A\u4E5F", "\u62D3\u4E5F", "\u96C4\u592A", "\u614E\u592A\u90CE", "\u7D14", "\u822A", "\u548C\u4E5F", "\u76F4\u4EBA", "\u512A", "\u4EAE\u592A", "\u99FF\u4ECB", "\u5065\u592A", "\u96BC\u4EBA", "\u5EB7\u5E73", "\u4FCA\u4ECB", "\u62D3\u4E5F", "\u907C", "\u88D5\u592A", "\u5927\u5730", "\u99FF\u592A", "\u60A0", "\u88D5\u4ECB", "\u84BC", "\u98AF", "\u594F\u592A", "\u967D\u5411", "\u7D50\u7FD4", "\u65B0", "\u6E4A\u6597", "\u78A7", "\u5F8B", "\u671D\u967D", "\u6696", "\u594F", "\u6E4A\u592A", "\u58EE\u771F", "\u7409\u751F", "\u7D50\u4EBA", "\u60A0\u4EBA", "\u666F", "\u84BC\u7A7A", "\u7A7A", "\u6A39\u751F", "\u96BC", "\u84BC\u4ECB", "\u601C", "\u5DE7", "\u7A1C", "\u65ED", "\u67CA", "\u51EA", "\u6FAA", "\u58F1", "\u9065\u6597", "\u98AF\u771F", "\u864E\u592A\u90CE", "\u6854\u5E73", "\u5343\u5C0B", "\u5FD7\u97F3", "\u76F4\u54C9", "\u6A59\u771F", "\u96C5", "\u6602", "\u51CC\u99D5", "\u771F\u7434"];
  var FOREIGN_GIVEN = ["\u30AB\u30EB\u30ED\u30B9", "\u30EB\u30FC\u30AB\u30B9", "\u30DE\u30C6\u30A6\u30B9", "\u30C7\u30A3\u30A8\u30B4", "\u30D6\u30EB\u30FC\u30CE", "\u30E9\u30D5\u30A1\u30A8\u30EB", "\u30A2\u30F3\u30C9\u30EC", "\u30F4\u30A3\u30CB\u30B7\u30A6\u30B9", "\u30B8\u30A8\u30B4", "\u30D1\u30A6\u30ED", "\u30A8\u30DF\u30EB", "\u30E4\u30CB\u30C3\u30AF", "\u30C9\u30E9\u30AC\u30F3", "\u30B9\u30C6\u30D5\u30A1\u30F3", "\u30A2\u30EA", "\u30AA\u30DE\u30EB", "\u30AD\u30E0", "\u30D1\u30AF", "\u30BD\u30F3", "\u30C1\u30E7", "\u30EC\u30A2\u30F3\u30C9\u30ED", "\u30C1\u30A2\u30B4", "\u30DA\u30C9\u30ED", "\u30AC\u30D6\u30EA\u30A8\u30EB", "\u30D5\u30A7\u30EA\u30DA", "\u30DE\u30EB\u30B3", "\u30A4\u30F4\u30A1\u30F3", "\u30CB\u30B3\u30E9", "\u30C0\u30CB\u30FC\u30ED", "\u30D5\u30A7\u30EB\u30CA\u30F3\u30C9", "\u30A2\u30C9\u30EA\u30A2\u30FC\u30CE", "\u30B8\u30E7\u30A2\u30F3", "\u30A8\u30C9\u30A5\u30A2\u30EB\u30C9", "\u30F4\u30A1\u30EC\u30F3\u30C6\u30A3\u30F3", "\u30DF\u30ED\u30B7\u30E5", "\u30CF\u30E1\u30C9", "\u30E6\u30B9\u30D5", "\u30BF\u30EC\u30AF", "\u30A8\u30F3\u30BE", "\u30DE\u30C6\u30A3\u30A2\u30B9", "\u30BB\u30EB\u30D2\u30AA", "\u30DB\u30A2\u30AD\u30F3", "\u30EB\u30A4\u30B9", "\u30A2\u30EC\u30C3\u30AF\u30B9", "\u30E8\u30A2\u30F3", "\u30C6\u30A3\u30E2", "\u30E9\u30FC\u30B9", "\u30F4\u30A7\u30B9\u30EA\u30FC", "\u30A2\u30D6\u30C9\u30A5\u30EB", "\u30AA\u30E9", "\u30B8\u30E7\u30EB\u30B8\u30E5", "\u30DE\u30EB\u30BB\u30ED", "\u30A8\u30B9\u30C6\u30D0\u30F3", "\u30C6\u30A3\u30A2\u30B4", "\u30CC\u30FC\u30CE", "\u30B8\u30E7\u30EB\u30C7\u30A3", "\u30DF\u30B1\u30FC\u30EC", "\u30E4\u30F3", "\u30D5\u30ED\u30FC\u30EA\u30A2\u30F3", "\u30BB\u30D0\u30B9\u30C6\u30A3\u30A2\u30F3", "\u30A2\u30AF\u30BB\u30EB", "\u30CF\u30AD\u30E0", "\u30E2\u30CF\u30E1\u30C9", "\u30B5\u30F3\u30C6\u30A3", "\u30ED\u30C9\u30EA\u30B4"];
  var FOREIGN_FAMILY = ["\u30B7\u30EB\u30D0", "\u30B5\u30F3\u30C8\u30B9", "\u30B3\u30B9\u30BF", "\u30D5\u30A7\u30EB\u30CA\u30F3\u30C7\u30B9", "\u30ED\u30C9\u30EA\u30B2\u30B9", "\u30DF\u30E5\u30E9\u30FC", "\u30B7\u30E5\u30CA\u30A4\u30C0\u30FC", "\u30A4\u30D0\u30CE\u30F4\u30A3\u30C3\u30C1", "\u30DA\u30C8\u30ED\u30F4\u30A3\u30C3\u30C1", "\u30CF\u30C3\u30B5\u30F3", "\u30A2\u30EA\u30A8\u30D5", "\u30B8\u30E7\u30F3\u30BD\u30F3", "\u30B9\u30DF\u30B9", "\u30CA\u30AB", "\u30C1\u30A7\u30F3", "\u30AA\u30EA\u30F4\u30A7\u30A4\u30E9", "\u30BD\u30A6\u30B6", "\u30A2\u30A6\u30D9\u30B9", "\u30B4\u30E1\u30B9", "\u30DE\u30EB\u30C6\u30A3\u30CD\u30B9", "\u30AC\u30EB\u30B7\u30A2", "\u30ED\u30DA\u30B9", "\u30F4\u30A1\u30FC\u30B0\u30CA\u30FC", "\u30D9\u30C3\u30AB\u30FC", "\u30DB\u30D5\u30DE\u30F3", "\u30CE\u30F4\u30A1\u30AF", "\u30DB\u30EB\u30F4\u30A1\u30C8", "\u30B9\u30C8\u30E4\u30CE\u30D5", "\u30C7\u30A3\u30A2\u30ED", "\u30C8\u30E9\u30AA\u30EC", "\u30F3\u30C9\u30A4\u30A7", "\u30EA\u30FC", "\u30E4\u30DE\u30E2\u30C8", "\u30B3\u30F4\u30A1\u30C1", "\u30A2\u30F3\u30C7\u30EB\u30BD\u30F3", "\u30E9\u30FC\u30B7\u30E7\u30F3", "\u30CB\u30EB\u30BB\u30F3", "\u30E1\u30F3\u30C7\u30B9", "\u30D0\u30C6\u30A3\u30B9\u30BF", "\u30AB\u30EB\u30C9\u30FC\u30BE", "\u30EA\u30D9\u30A4\u30ED", "\u30E2\u30EC\u30CE", "\u30D6\u30E9\u30F3\u30B3", "\u30D5\u30A7\u30EC\u30A4\u30E9", "\u30AF\u30E9\u30A4\u30D5\u30A1\u30FC\u30C8", "\u30D0\u30EB\u30C7\u30B9", "\u30B6\u30CD\u30C3\u30C6\u30A3", "\u30D9\u30EB\u30CA\u30EB\u30C9", "\u30AF\u30EB\u30FC\u30BC", "\u30F4\u30A3\u30C0\u30EB", "\u30AA\u30B3\u30C1\u30E3", "\u30A2\u30E4\u30E9", "\u30C9\u30A5\u30F3\u30D3\u30A2"];
  function makeTeamName(usedNames, usedClubs = null, usedCities = null) {
    let name, guard = 400;
    do {
      let city = pick(CITIES);
      if (usedCities) {
        let g = 200;
        while (usedCities.has(city) && g-- > 0) city = pick(CITIES);
        if (!usedCities.has(city)) usedCities.add(city);
      }
      let club = pick(CLUB_WORDS);
      if (usedClubs) {
        let g2 = 200;
        while (usedClubs.has(club) && g2-- > 0) club = pick(CLUB_WORDS);
        if (!usedClubs.has(club)) usedClubs.add(club);
      }
      name = clipKana(Math.random() < 0.5 ? city + club : club + city, 8);
    } while (usedNames.has(name) && guard-- > 0);
    usedNames.add(name);
    return name;
  }
  var makeJpName = () => pick(SURNAMES) + " " + pick(GIVENNAMES);
  var makeForeignName = () => clipLen(pick(FOREIGN_GIVEN) + "\u30FB" + pick(FOREIGN_FAMILY), 12);
  function buildPlayers(formation, cap, { foreignCount = 0, style = "balanced" } = {}) {
    const slots = formationSlots(formation);
    const idxs = slots.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = randint(0, i);
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    const foreignIdx = new Set(idxs.slice(0, Math.min(foreignCount, 3)));
    const players = slots.map((code, idx) => ({
      id: uid(),
      position: code,
      foreign: foreignIdx.has(idx),
      name: foreignIdx.has(idx) ? makeForeignName() : makeJpName(),
      ability: baseAbility()
    }));
    distributePoints(players, cap, formation, style);
    return players;
  }
  var rollForeignCount = () => weightedIndex(CONFIG.FOREIGN_WEIGHTS);
  var REP_COORD = { GK: [50, 92], DF: [50, 78], MF: [50, 50], FW: [50, 20] };
  var BENCH_SPREAD = ["GK", "CB", "DM", "LM", "ST"];
  function distributeBench(players, cap, style) {
    let remaining = cap - players.length * 6;
    const tilt = players.map((p) => {
      const bp = broadPos(p.position), c = REP_COORD[bp] || [50, 50];
      let aw;
      if (bp === "GK") aw = GK_ALLOC.slice();
      else {
        const w = effWeights(bp, c[0], c[1], style || "balanced");
        aw = STAT_KEYS.map((_, j) => w.attack[j] + w.defense[j] + w.midfield[j]);
      }
      return aw.map((v) => Math.max(0.05, v * rnd(0.7, 1.3)));
    });
    let guard = 8e3;
    while (remaining > 0 && guard-- > 0) {
      const pi = randint(0, players.length - 1), p = players[pi];
      const ww = STAT_KEYS.map((k, j) => p.ability[k] >= CONFIG.MAX_ABILITY ? 0 : tilt[pi][j]);
      if (ww.every((x) => x <= 0)) continue;
      p.ability[STAT_KEYS[weightedIndex(ww)]]++;
      remaining--;
    }
    return players;
  }
  function buildBench(style = "balanced", totalCap = 80, foreign = false) {
    const players = BENCH_SPREAD.map((code, i) => ({ id: uid(), position: code, foreign: foreign && i === 4, name: foreign && i === 4 ? makeForeignName() : makeJpName(), ability: baseAbility() }));
    distributeBench(players, totalCap, style);
    return players;
  }
  var benchCapFor = (starterCap) => Math.round(starterCap / 11 * BENCH_SPREAD.length * 0.86);
  function aiHalftimeAdjust(team, deficit) {
    let mentality = team.mentality;
    if (deficit < 0) mentality = "attacking";
    else if (deficit > 0) mentality = "defensive";
    let players = team.players, bench = team.bench;
    if (bench && bench.length && Math.random() < 0.4) {
      const bi = randint(0, bench.length - 1), inP = bench[bi], bp = broadPos(inP.position);
      const cand = players.map((p, i) => ({ p, i })).filter((o) => o.i !== 0 && broadPos(o.p.position) === bp);
      if (cand.length) {
        const o = pick(cand);
        players = players.slice();
        players[o.i] = { ...inP, position: o.p.position };
        bench = bench.slice();
        bench[bi] = o.p;
      }
    }
    return bakeMentality({ ...team, mentality, players, bench });
  }
  function makeAITeam(usedNames, style = null, usedClubs = null, usedCities = null) {
    const name = makeTeamName(usedNames, usedClubs, usedCities);
    const cap = randint(CONFIG.AI_CAP_MIN, CONFIG.AI_CAP_MAX);
    const formation = pick(Object.keys(CONFIG.FORMATIONS));
    const finalStyle = style || pick(STYLES);
    const mentality = pick(MENTALITIES);
    const players = buildPlayers(formation, cap, { foreignCount: rollForeignCount(), style: finalStyle });
    const bench = buildBench(finalStyle, benchCapFor(cap), Math.random() < 0.4);
    const team = { id: uid(), name, color: "#3b82f6", formation, style: finalStyle, mentality, players, bench, isPlayer: false, cap };
    return bakeMentality(team);
  }
  function rollSeasonStyles(count) {
    const meta = pick(STYLES);
    return Array.from({ length: count }, () => Math.random() < CONFIG.STYLE_META_SHARE ? meta : pick(STYLES));
  }
  function generateLeague(aiCount) {
    const used = /* @__PURE__ */ new Set();
    const usedClubs = /* @__PURE__ */ new Set();
    const usedCities = /* @__PURE__ */ new Set();
    const styles = rollSeasonStyles(aiCount);
    return styles.map((st) => makeAITeam(used, st, usedClubs, usedCities));
  }
  function deriveStats(team) {
    const { FORMATIONS } = CONFIG;
    const coords = team.coords || formationCoords(team.formation);
    let attack = 0, defense = 0, midfield = 0, finishingSum = 0, fwCount = 0, keeping = 2.5;
    const outQ = [], dfDef = [];
    team.players.forEach((p, i) => {
      const bp = broadPos(p.position);
      const c = coords[i] || [50, 50];
      const a = [p.ability.shoot, p.ability.pass, p.ability.speed, p.ability.physical, p.ability.defense, p.ability.technique];
      if (bp === "GK") {
        keeping = gkKeeping(p);
        return;
      }
      const w = effWeights(bp, c[0], c[1], team.style);
      attack += w.attack.reduce((s, wi, j) => s + wi * a[j], 0);
      defense += w.defense.reduce((s, wi, j) => s + wi * a[j], 0);
      midfield += w.midfield.reduce((s, wi, j) => s + wi * a[j], 0);
      if (bp === "FW") {
        finishingSum += 0.8 * p.ability.shoot + 0.2 * p.ability.technique;
        fwCount++;
      }
      outQ.push(a.reduce((s, v) => s + v, 0));
      if (bp === "DF") dfDef.push(0.4 * p.ability.physical + 0.6 * p.ability.defense);
    });
    const mean = outQ.reduce((s, x) => s + x, 0) / (outQ.length || 1);
    const std = Math.sqrt(outQ.reduce((s, x) => s + (x - mean) ** 2, 0) / (outQ.length || 1));
    const org = Math.max(0, Math.min(1, 1 - std / CONFIG.ORG_STD_REF));
    midfield *= 1 + CONFIG.ORG_MID * org;
    defense *= 1 + CONFIG.ORG_DEF * org;
    if (dfDef.length) {
      const dmean = dfDef.reduce((s, x) => s + x, 0) / dfDef.length;
      const hole = dmean > 0 ? Math.max(0, (dmean - Math.min(...dfDef)) / dmean) : 0;
      defense *= 1 - CONFIG.WL_DEF * hole;
    }
    const f = FORMATIONS[team.formation];
    const sm = STYLE_MODS[team.style] || STYLE_MODS.possession;
    const mm = MENTALITY_MODS[team.mentality] || MENTALITY_MODS.balanced;
    attack *= f.atk * sm.atk * mm.atk;
    defense *= f.def * sm.def * mm.def;
    midfield *= f.mid * sm.mid * mm.mid;
    let defSolid = dfDef.length ? dfDef.reduce((s, x) => s + x, 0) / dfDef.length : 2.5;
    defSolid *= (1 + CONFIG.DEF_ORG_BONUS * org) * f.def * (sm.def || 1) * (mm.def || 1);
    return {
      attack,
      defense,
      midfield,
      finishing: fwCount ? finishingSum / fwCount : 2.5,
      keeping,
      poss: sm.poss * (mm.poss || 1),
      conv: sm.conv,
      org,
      defSolid
    };
  }
  function formationMatchup(myF, oppF) {
    const me = CONFIG.FORMATIONS[myF], opp = CONFIG.FORMATIONS[oppF];
    let defMod = 1;
    if (me.df <= 3 && opp.fw >= 3) defMod *= 0.9;
    if (me.df >= 5) defMod *= 1 + (opp.fw - 2) * 0.04;
    return { defMod };
  }
  function styleEdge(myStyle, oppStyle) {
    if (STYLE_STRONG[myStyle] === oppStyle) return 1 + CONFIG.STYLE_EDGE;
    if (STYLE_SLIGHT[myStyle] === oppStyle) return 1 + CONFIG.STYLE_EDGE_SOFT;
    if (STYLE_STRONG[oppStyle] === myStyle) return 1 - CONFIG.STYLE_EDGE;
    if (STYLE_SLIGHT[oppStyle] === myStyle) return 1 - CONFIG.STYLE_EDGE_SOFT;
    return 1;
  }
  function computeXG(chances, atk, finishing, conv, oppDef, oppKeep, homeBonus, oppDefMod, sEdge, oppDefSolid) {
    const effDef = oppDef * oppDefMod;
    const e = CONFIG.STRENGTH_EXP;
    const atkRatio = Math.pow(atk, e) / (Math.pow(atk, e) + Math.pow(effDef, e) || 1);
    const finFactor = (CONFIG.FIN_BASE + finishing / 5 * CONFIG.FIN_SPAN) * conv;
    const keepFactor = 1.35 - oppKeep / 5 * 0.7;
    const solid = oppDefSolid != null ? oppDefSolid : 2.5;
    const defFactor = Math.max(0.72, Math.min(1.22, CONFIG.DEF_BASE - solid / 5 * CONFIG.DEF_SPAN));
    let v = chances * atkRatio * finFactor * keepFactor * defFactor * CONFIG.CONVERSION_COEF * homeBonus * sEdge;
    v *= rnd(1 - CONFIG.UPSET_RATE, 1 + CONFIG.UPSET_RATE);
    return Math.max(0.05, v);
  }
  function simulateDetailed(home, away) {
    const H = deriveStats(home), A = deriveStats(away);
    const hMid = H.midfield * H.poss, aMid = A.midfield * A.poss;
    const midTotal = hMid + aMid || 1;
    const hShare = hMid / midTotal;
    const chancesH = CONFIG.BASE_CHANCES * (0.5 + (hShare - 0.5) * 0.8);
    const chancesA = CONFIG.BASE_CHANCES * (0.5 + (1 - hShare - 0.5) * 0.8);
    const hM = formationMatchup(home.formation, away.formation);
    const aM = formationMatchup(away.formation, home.formation);
    const hEdge = styleEdge(home.style, away.style);
    const aEdge = styleEdge(away.style, home.style);
    const xgH = computeXG(chancesH, H.attack, H.finishing, H.conv, A.defense, A.keeping, CONFIG.HOME_BONUS, aM.defMod, hEdge, A.defSolid);
    const xgA = computeXG(chancesA, A.attack, A.finishing, A.conv, H.defense, H.keeping, 1, hM.defMod, aEdge, H.defSolid);
    return {
      homeScore: Math.min(poisson(xgH), CONFIG.GOAL_CLAMP),
      awayScore: Math.min(poisson(xgA), CONFIG.GOAL_CLAMP),
      possession: Math.round(hShare * 100)
    };
  }
  function simulateSimple(home, away) {
    const H = deriveStats(home), A = deriveStats(away);
    const sH = H.attack + H.defense + H.midfield;
    const sA = A.attack + A.defense + A.midfield;
    const tot = sH + sA || 1;
    let share = 0.5 + (sH / tot - 0.5) * CONFIG.SIMPLE_STRENGTH_AMP;
    share = Math.max(0.18, Math.min(0.82, share));
    const hEdge = styleEdge(home.style, away.style);
    const aEdge = styleEdge(away.style, home.style);
    const AVG = CONFIG.SIMPLE_AVG_GOALS;
    const upset = () => rnd(1 - CONFIG.UPSET_RATE, 1 + CONFIG.UPSET_RATE);
    const xgH = Math.max(0.05, AVG * (2 * share) * CONFIG.HOME_BONUS * hEdge * upset());
    const xgA = Math.max(0.05, AVG * (2 * (1 - share)) * aEdge * upset());
    return {
      homeScore: Math.min(poisson(xgH), CONFIG.GOAL_CLAMP),
      awayScore: Math.min(poisson(xgA), CONFIG.GOAL_CLAMP),
      possession: Math.round(share * 100)
    };
  }
  var SCORE_W = {
    ST: 3.3,
    CF: 3.3,
    RW: 2.5,
    LW: 2.5,
    AM: 2.1,
    RAM: 1.9,
    LAM: 1.9,
    RM: 1.25,
    LM: 1.25,
    CM: 1.1,
    DM: 0.5,
    RWB: 0.48,
    LWB: 0.48,
    RB: 0.4,
    LB: 0.4,
    CB: 0.16,
    GK: 0.02
  };
  var scorerWeightOf = (p) => (SCORE_W[p.position] ?? { FW: 2.8, MF: 1.2, DF: 0.3, GK: 0.02 }[broadPos(p.position)]) * (p.ability.shoot + 1);
  function assignGoals(team, goals) {
    const scorers = [], assists = [], events = [];
    const scoreW = team.players.map(scorerWeightOf);
    const minutes = Array.from({ length: goals }, () => Math.random() < 0.08 ? 90 + randint(1, 5) : randint(1, 90)).sort((a, b) => a - b);
    for (let g = 0; g < goals; g++) {
      const scorer = weightedPick(team.players, scoreW);
      scorers.push(scorer.id);
      let assistId = null;
      if (Math.random() < CONFIG.ASSIST_RATE) {
        const assistW = team.players.map((p) => p.id === scorer.id ? 0 : { FW: 1.2, MF: 2.2, DF: 0.6, GK: 0.02 }[broadPos(p.position)] * (p.ability.pass + 1));
        const assister = weightedPick(team.players, assistW);
        if (assister && assister.id !== scorer.id) {
          assists.push(assister.id);
          assistId = assister.id;
        }
      }
      events.push({ minute: minutes[g], scorerId: scorer.id, assistId });
    }
    return { scorers, assists, events };
  }
  var pickScorerP = (team) => weightedPick(team.players, team.players.map(scorerWeightOf));
  var OFFSIDE_W = {
    ST: 3.5,
    CF: 3.5,
    RW: 2,
    LW: 2,
    AM: 1.5,
    RAM: 1.35,
    LAM: 1.35,
    RM: 0.45,
    LM: 0.45,
    CM: 0.18,
    DM: 0.06,
    RWB: 0.1,
    LWB: 0.1,
    RB: 0.05,
    LB: 0.05,
    CB: 0.025,
    GK: 0
  };
  var offsideWeightOf = (p) => OFFSIDE_W[p.position] ?? { FW: 2.5, MF: 0.4, DF: 0.04, GK: 0 }[broadPos(p.position)];
  var pickOffsideP = (team) => weightedPick(team.players, team.players.map(offsideWeightOf));
  var pickAssistP = (team, scorerId) => {
    const w = team.players.map((p) => p.id === scorerId ? 0 : { FW: 1.2, MF: 2.2, DF: 0.6, GK: 0.02 }[broadPos(p.position)] * (p.ability.pass + 1));
    const a = weightedPick(team.players, w);
    return a && a.id !== scorerId ? a : null;
  };
  function simulateHalf(home, away) {
    const H = deriveStats(home), A = deriveStats(away);
    const hMid = H.midfield * H.poss, aMid = A.midfield * A.poss;
    const midTotal = hMid + aMid || 1, hShare = hMid / midTotal;
    const chancesH = CONFIG.BASE_CHANCES / 2 * (0.5 + (hShare - 0.5) * 0.8);
    const chancesA = CONFIG.BASE_CHANCES / 2 * (0.5 + (1 - hShare - 0.5) * 0.8);
    const hM = formationMatchup(home.formation, away.formation);
    const aM = formationMatchup(away.formation, home.formation);
    const xgH = computeXG(chancesH, H.attack, H.finishing, H.conv, A.defense, A.keeping, CONFIG.HOME_BONUS, aM.defMod, styleEdge(home.style, away.style), A.defSolid);
    const xgA = computeXG(chancesA, A.attack, A.finishing, A.conv, H.defense, H.keeping, 1, hM.defMod, styleEdge(away.style, home.style), H.defSolid);
    return { hg: Math.min(poisson(xgH), CONFIG.GOAL_CLAMP), ag: Math.min(poisson(xgA), CONFIG.GOAL_CLAMP), hShare };
  }
  var clipKana = (s, max = 8) => {
    let out = "", k = 0;
    for (const ch of String(s)) {
      if (/[\u30A0-\u30FF\u31F0-\u31FF]/.test(ch)) {
        if (k >= max) continue;
        k++;
      }
      out += ch;
    }
    return out;
  };
  var clipLen = (s, max = 12) => {
    const a = [...String(s)];
    return a.length > max ? a.slice(0, max).join("") : String(s);
  };
  var BUILDUP_STYLE = {
    possession: ["\u7D30\u304B\u3044\u30D1\u30B9\u30EF\u30FC\u30AF\u3067\u76F8\u624B\u3092\u5D29\u3057", "\u30DD\u30BC\u30C3\u30B7\u30E7\u30F3\u304B\u3089\u4E2D\u592E\u3092\u3053\u3058\u958B\u3051", "\u30DC\u30FC\u30EB\u3092\u63E1\u3063\u3066\u5DE6\u53F3\u306B\u63FA\u3055\u3076\u308A", "\u4E09\u4EBA\u76EE\u306E\u52D5\u304D\u3067\u5B88\u5099\u3092\u7FFB\u5F04\u3057", "\u30EF\u30F3\u30BF\u30C3\u30C1\u30D1\u30B9\u3092\u9023\u306D\u3066\u524D\u9032\u3057", "\u4E01\u5BE7\u306B\u3064\u306A\u3044\u3067\u76F8\u624B\u3092\u62BC\u3057\u8FBC\u307F", "\u9045\u653B\u304B\u3089\u3058\u308F\u308A\u3068\u30B9\u30DA\u30FC\u30B9\u3092\u4F5C\u308A", "\u30DC\u30FC\u30EB\u4FDD\u6301\u3067\u4E3B\u5C0E\u6A29\u3092\u63E1\u308A\u76F8\u624B\u3092\u8D70\u3089\u305B", "\u83EF\u9E97\u306A\u9023\u4FC2\u3067\u4E2D\u76E4\u3092\u652F\u914D\u3057", "\u30D1\u30B9\u306E\u51FA\u3057\u5165\u308C\u3067\u7DBB\u3073\u3092\u751F\u307F", "\u30DD\u30BC\u30C3\u30B7\u30E7\u30F3\u3092\u9AD8\u3081\u3066\u76F8\u624B\u3092\u75B2\u5F0A\u3055\u305B"],
    shortcounter: ["\u9AD8\u3044\u4F4D\u7F6E\u3067\u596A\u3046\u3068\u3059\u3050\u3055\u307E", "\u30B7\u30E7\u30FC\u30C8\u30AB\u30A6\u30F3\u30BF\u30FC\u304B\u3089\u7D20\u65E9\u304F", "\u30BB\u30AB\u30F3\u30C9\u30DC\u30FC\u30EB\u3092\u62FE\u3063\u3066\u624B\u6570\u3092\u304B\u3051\u305A", "\u76F8\u624B\u306E\u30DF\u30B9\u3092\u7A81\u3044\u3066\u4E00\u6C17\u306B", "\u596A\u53D6\u304B\u3089\u9593\u9AEA\u5165\u308C\u305A\u7E26\u306B\u901F\u304F", "\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u9663\u5F62\u3067\u596A\u3044\u8FD4\u3057\u3066", "\u30DC\u30FC\u30EB\u596A\u53D6\u304B\u30893\u624B\u3067", "\u524D\u5411\u304D\u306E\u596A\u53D6\u304B\u3089\u30C0\u30A4\u30EC\u30AF\u30C8\u306B", "\u76F8\u624B\u306E\u88CF\u3092\u5373\u5EA7\u306B\u7A81\u3044\u3066", "\u5208\u308A\u53D6\u308A\u3056\u307E\u306B\u524D\u7DDA\u3078"],
    longcounter: ["\u6700\u7D42\u30E9\u30A4\u30F3\u304B\u3089\u306E\u30ED\u30F3\u30B0\u30D5\u30A3\u30FC\u30C9\u3067\u80CC\u5F8C\u3092\u53D6\u308A", "\u30AB\u30A6\u30F3\u30BF\u30FC\u3067\u5E83\u5927\u306A\u30B9\u30DA\u30FC\u30B9\u3092\u7A81\u304D", "\u4E00\u672C\u306E\u7E26\u30D1\u30B9\u3067\u88CF\u3078\u629C\u3051\u51FA\u3057", "\u901F\u3044\u653B\u3081\u3067\u4E00\u6C17\u306B\u76F8\u624B\u9663\u3092\u9665\u308C", "\u92ED\u3044\u30ED\u30F3\u30B0\u30AB\u30A6\u30F3\u30BF\u30FC\u304B\u3089", "\u524D\u7DDA\u3078\u9577\u3044\u30DC\u30FC\u30EB\u3092\u9001\u308A\u8FBC\u307F", "GK\u306E\u30D5\u30A3\u30FC\u30C9\u304B\u3089\u4E00\u6C17\u306B\u3072\u3063\u304F\u308A\u8FD4\u3057", "\u76F8\u624B\u306E\u524D\u639B\u304B\u308A\u3092\u9006\u624B\u306B\u53D6\u3063\u3066", "\u30ED\u30F3\u30B0\u30DC\u30FC\u30EB\u4E00\u672C\u3067\u5C40\u9762\u3092\u6253\u958B\u3057", "\u9593\u5EF6\u3073\u3057\u305F\u76F8\u624B\u306E\u80CC\u5F8C\u3092\u7A81\u304D"],
    retreat: ["\u7C98\u308A\u5F37\u304F\u5B88\u3063\u3066\u304B\u3089\u4E00\u8EE2", "\u6570\u5C11\u306A\u3044\u597D\u6A5F\u3092\u9003\u3055\u305A", "\u8010\u3048\u3066\u304B\u3089\u306E\u30EF\u30F3\u30C1\u30E3\u30F3\u30B9\u3067", "\u5805\u5B88\u304B\u3089\u306E\u901F\u653B\u3067", "\u6211\u6162\u306E\u6642\u9593\u3092\u7D4C\u3066", "\u5B88\u5099\u304B\u3089\u92ED\u304F\u5207\u308A\u66FF\u3048\u3066", "\u30D6\u30ED\u30C3\u30AF\u3092\u6577\u3044\u3066\u304B\u3089\u306E\u53CD\u6483\u3067", "\u4E00\u77AC\u306E\u9699\u3092\u9003\u3055\u305A", "\u5B88\u308A\u5012\u3057\u3066\u304B\u3089\u306E\u30AB\u30A6\u30F3\u30BF\u30FC\u3067"],
    highpress: ["\u6575\u9663\u9AD8\u3044\u4F4D\u7F6E\u3067\u596A\u3044\u5207\u308A", "\u524D\u7DDA\u304B\u3089\u306E\u9023\u52D5\u30D7\u30EC\u30B9\u3067\u596A\u3063\u3066", "\u30CF\u30A4\u30D7\u30EC\u30B9\u3067\u30B7\u30E7\u30FC\u30C8\u30AB\u30A6\u30F3\u30BF\u30FC\u306B\u8EE2\u3058", "\u76F8\u624B\u9663\u5185\u3067\u5208\u308A\u53D6\u3063\u3066\u305D\u306E\u307E\u307E", "\u9AD8\u3044\u4F4D\u7F6E\u306E\u5727\u529B\u304B\u3089\u30DC\u30FC\u30EB\u3092\u596A\u3044", "\u679C\u6562\u306A\u524D\u9032\u5B88\u5099\u3067\u3072\u3063\u304B\u3051\u3066", "GK\u307E\u3067\u8FFD\u3044\u8FBC\u3093\u3067\u596A\u3044", "\u731B\u7136\u3068\u30D7\u30EC\u30B9\u3092\u304B\u3051\u3066\u56DE\u53CE\u3057", "\u84CB\u3092\u3059\u308B\u3088\u3046\u306A\u5727\u529B\u304B\u3089\u596A\u53D6\u3057\u3066"]
  };
  var BUILDUP_WIDE = ["\u53F3\u30B5\u30A4\u30C9\u3092\u5207\u308A\u88C2\u3044\u3066\u306E\u30AF\u30ED\u30B9\u304B\u3089", "\u5DE6\u3092\u6DF1\u304F\u3048\u3050\u3063\u305F\u6298\u308A\u8FD4\u3057\u306B", "\u30B5\u30A4\u30C9\u3092\u5E83\u304F\u4F7F\u3063\u3066\u5D29\u3057", "\u30A6\u30A4\u30F3\u30B0\u306E\u7A81\u7834\u304B\u3089\u30DE\u30A4\u30CA\u30B9\u306E\u6298\u308A\u8FD4\u3057\u3067", "\u5927\u5916\u3092\u99C6\u3051\u4E0A\u304C\u3063\u3066\u306E\u30AF\u30ED\u30B9\u306B", "\u5E45\u3092\u53D6\u3063\u305F\u653B\u6483\u304B\u3089\u4E2D\u592E\u3078\u9001\u308A", "\u30B5\u30A4\u30C9\u30C1\u30A7\u30F3\u30B8\u304B\u3089\u4E00\u6C17\u306B\u5C55\u958B\u3057\u3066", "\u7E26\u306B\u4ED5\u639B\u3051\u3066\u5165\u308C\u305F\u92ED\u3044\u30AF\u30ED\u30B9\u306B", "\u30AA\u30FC\u30D0\u30FC\u30E9\u30C3\u30D7\u304B\u3089\u306E\u4F4E\u3044\u6298\u308A\u8FD4\u3057\u306B", "\u30B5\u30A4\u30C9\u306E\u5D29\u3057\u304B\u3089\u30CB\u30A2\u3078\u901F\u3044\u30DC\u30FC\u30EB\u3092\u9001\u308A"];
  var BUILDUP_CENTRAL = ["\u4E2D\u592E\u3092\u30B9\u30EB\u30FC\u30D1\u30B9\u3067\u5272\u308A", "\u30D0\u30A4\u30BF\u30EB\u30A8\u30EA\u30A2\u3078\u306E\u7E26\u30D1\u30B9\u304B\u3089", "\u4E2D\u592E\u306E\u5BC6\u96C6\u3092\u901A\u3059\u30D1\u30B9\u3067", "\u30CF\u30FC\u30D5\u30B9\u30DA\u30FC\u30B9\u3092\u9665\u308C\u3066", "\u3069\u771F\u3093\u4E2D\u3092\u7E26\u306B\u6253\u958B\u3057", "\u30EF\u30F3\u30C4\u30FC\u3067\u4E2D\u592E\u3092\u5207\u308A\u88C2\u304D", "\u7D76\u5999\u306A\u30B9\u30EB\u30FC\u30D1\u30B9\u3067\u6700\u7D42\u30E9\u30A4\u30F3\u3092\u7834\u308A", "\u304F\u3055\u3073\u3092\u8D77\u70B9\u306B\u3057\u305F\u5D29\u3057\u3067", "\u30A2\u30AF\u30ED\u30D0\u30C6\u30A3\u30C3\u30AF\u306A\u53CD\u8EE2\u304B\u3089\u4E2D\u592E\u3092\u7A81\u3044\u3066"];
  var BUILDUP_SET = ["\u30BB\u30C3\u30C8\u30D7\u30EC\u30FC\u306E\u6D41\u308C\u304B\u3089", "\u7372\u5F97\u3057\u305FFK\u304B\u3089", "\u30B3\u30FC\u30CA\u30FC\u30AD\u30C3\u30AF\u306E\u6DF7\u6226\u3067", "\u30BB\u30C3\u30C8\u30D7\u30EC\u30FC\u306E\u3053\u307C\u308C\u7403\u304B\u3089", "\u6B63\u78BA\u306ACK\u306E\u30DC\u30FC\u30EB\u306B", "\u92ED\u3044FK\u306E\u3053\u307C\u308C\u306B", "\u30B7\u30E7\u30FC\u30C8\u30B3\u30FC\u30CA\u30FC\u304B\u3089\u306E\u5D29\u3057\u3067", "\u30ED\u30F3\u30B0\u30B9\u30ED\u30FC\u306E\u6DF7\u6226\u304B\u3089"];
  var FINISH = {
    FW: ["\u51B7\u9759\u306B\u6D41\u3057\u8FBC\u3080", "\u53F3\u8DB3\u3092\u632F\u308A\u629C\u304F", "\u8C6A\u5FEB\u306B\u8E74\u308A\u8FBC\u3080", "\u30EF\u30F3\u30BF\u30C3\u30C1\u3067\u5408\u308F\u305B\u308B", "GK\u3068\u306E\u4E00\u5BFE\u4E00\u3092\u5236\u3059", "\u30CB\u30A2\u3092\u6483\u3061\u629C\u304F", "\u5DE7\u307F\u306BGK\u306E\u9006\u3092\u7A81\u304F", "\u6280\u3042\u308A\u306E\u4E00\u6483\u3092\u6C7A\u3081\u308B", "\u5DE6\u8DB3\u3067\u82B8\u8853\u7684\u306B\u5DFB\u3044\u3066\u6C7A\u3081\u308B", "\u30C8\u30E9\u30C3\u30D7\u304B\u3089\u7D20\u65E9\u304F\u6C88\u3081\u308B", "\u30EB\u30FC\u30D7\u3067\u982D\u4E0A\u3092\u8D8A\u3059", "\u30D5\u30A1\u30FC\u3078\u6D41\u3057\u8FBC\u3080", "\u5F37\u70C8\u306A\u7121\u56DE\u8EE2\u3092\u7A81\u304D\u523A\u3059", "\u80F8\u30C8\u30E9\u30C3\u30D7\u304B\u3089\u53CD\u8EE2\u3057\u3066\u6C7A\u3081\u308B"],
    MF: ["\u8D70\u308A\u8FBC\u3093\u3067\u4ED5\u7559\u3081\u308B", "\u30DF\u30C9\u30EB\u30EC\u30F3\u30B8\u304B\u3089\u7A81\u304D\u523A\u3059", "\u30B3\u30FC\u30B9\u3092\u4E01\u5BE7\u306B\u7A81\u304F", "\u5DE6\u8DB3\u3092\u4E00\u9583\u3055\u305B\u308B", "\u3053\u307C\u308C\u7403\u3092\u62BC\u3057\u8FBC\u3080", "\u610F\u8868\u3092\u7A81\u304F\u30B7\u30E5\u30FC\u30C8\u3092\u6C7A\u3081\u308B", "\u8C6A\u5FEB\u306A\u30DF\u30C9\u30EB\u3092\u53E9\u304D\u8FBC\u3080", "\u9060\u76EE\u304B\u3089\u601D\u3044\u5207\u308A\u826F\u304F\u6C7A\u3081\u308B", "\u4E8C\u5217\u76EE\u304B\u3089\u98DB\u3073\u51FA\u3057\u3066\u4ED5\u7559\u3081\u308B", "\u30DA\u30CA\u30EB\u30C6\u30A3\u5916\u304B\u3089\u9BAE\u3084\u304B\u306B\u6C7A\u3081\u308B"],
    DF: ["\u9AD8\u3055\u3067\u7AF6\u308A\u52DD\u3063\u3066\u53E9\u304D\u8FBC\u3080", "\u982D\u3067\u62BC\u3057\u8FBC\u3080", "\u3053\u307C\u308C\u7403\u306B\u8A70\u3081\u308B", "\u8C6A\u5FEB\u306B\u30D8\u30C7\u30A3\u30F3\u30B0\u3092\u6C7A\u3081\u308B", "\u6700\u5F8C\u5C3E\u304B\u3089\u98DB\u3073\u8FBC\u3093\u3067\u4ED5\u7559\u3081\u308B", "\u6DF7\u6226\u304B\u3089\u62BC\u3057\u8FBC\u3080", "\u30CB\u30A2\u3067\u53CD\u3089\u3057\u3066\u6C7A\u3081\u308B", "\u30BB\u30C3\u30C8\u30D7\u30EC\u30FC\u3067\u9AD8\u3055\u3092\u793A\u3059"],
    GK: ["\u307E\u3055\u304B\u306E\u4E00\u767A\u3092\u6C88\u3081\u308B", "\u76F8\u624B\u30B4\u30FC\u30EB\u524D\u306E\u6DF7\u6226\u306B\u98DB\u3073\u8FBC\u3093\u3067\u6C7A\u3081\u308B"]
  };
  var FINISH_HEADER = ["\u982D\u3067\u5408\u308F\u305B\u308B", "\u30D8\u30C7\u30A3\u30F3\u30B0\u30B7\u30E5\u30FC\u30C8\u3092\u53E9\u304D\u8FBC\u3080", "\u9AD8\u3055\u3092\u751F\u304B\u3057\u3066\u306D\u3058\u8FBC\u3080", "\u6253\u70B9\u306E\u9AD8\u3044\u30D8\u30C3\u30C9\u3067\u6C7A\u3081\u308B", "\u5B8C\u74A7\u306A\u30D8\u30C3\u30C9\u3067\u7A81\u304D\u523A\u3059", "\u7AF6\u308A\u52DD\u3063\u3066\u30D8\u30C3\u30C9\u3092\u6C88\u3081\u308B"];
  var MISS = [
    { t: "\u67A0\u306E\u5916\u3078\u5916\u308C\u308B", on: false },
    { t: "GK\u306E\u597D\u5B88\u306B\u963B\u307E\u308C\u308B", on: true },
    { t: "\u30DD\u30B9\u30C8\u306B\u5F3E\u304B\u308C\u308B", on: false },
    { t: "\u67A0\u3092\u6349\u3048\u3089\u308C\u306A\u3044", on: false },
    { t: "\u30D6\u30ED\u30C3\u30AF\u306B\u906D\u3046", on: false },
    { t: "GK\u6B63\u9762\u3092\u7A81\u3044\u3066\u3057\u307E\u3046", on: true },
    { t: "\u308F\u305A\u304B\u306B\u4E0A\u3078\u9038\u308C\u308B", on: false },
    { t: "\u60DC\u3057\u304F\u3082\u67A0\u306E\u5DE6\u3078\u5207\u308C\u308B", on: false },
    { t: "\u30AF\u30ED\u30B9\u30D0\u30FC\u3092\u53E9\u304F", on: false },
    { t: "DF\u306E\u6C7A\u6B7B\u306E\u30B9\u30E9\u30A4\u30C7\u30A3\u30F3\u30B0\u306B\u906D\u3046", on: false },
    { t: "GK\u306E\u30D3\u30C3\u30B0\u30BB\u30FC\u30D6\u306B\u963B\u307E\u308C\u308B", on: true },
    { t: "\u3075\u304B\u3057\u3066\u3057\u307E\u3046", on: false },
    { t: "\u67A0\u306E\u53F3\u3078\u50C5\u304B\u306B\u5916\u308C\u308B", on: false },
    { t: "GK\u304C\u5F3E\u304D\u51FA\u3059", on: true },
    { t: "\u76F8\u624B\u306E\u4F53\u306B\u5F53\u305F\u3063\u3066\u30B3\u30FC\u30B9\u304C\u5909\u308F\u308B", on: false },
    { t: "\u304E\u308A\u304E\u308A\u3067\u67A0\u3092\u5916\u308C\u308B", on: false }
  ];
  var WIDE_SET = /* @__PURE__ */ new Set(["LW", "RW", "LWB", "RWB", "LM", "RM", "LAM", "RAM"]);
  var isWideFormation = (f) => formationSlots(f).some((c) => WIDE_SET.has(c));
  function makeBuildup(team, scorer) {
    const isDef = scorer && broadPos(scorer.position) === "DF";
    const setP = isDef ? 0.62 : 0.12;
    const r = Math.random();
    if (r < setP) return { phrase: pick(BUILDUP_SET), cross: true };
    if (r < setP + 0.46) return { phrase: pick(BUILDUP_STYLE[team.style] || BUILDUP_STYLE.possession), cross: false };
    if (isWideFormation(team.formation) && Math.random() < 0.65) return { phrase: pick(BUILDUP_WIDE), cross: true };
    return { phrase: pick(BUILDUP_CENTRAL), cross: false };
  }
  var makeFinish = (scorer, cross) => cross && Math.random() < 0.6 ? pick(FINISH_HEADER) : pick(FINISH[broadPos(scorer.position)] || FINISH.MF);
  function goalText(team, scorer, assist) {
    const b = makeBuildup(team, scorer);
    return `${b.phrase}\u3001${clipLen(scorer.name, 12)}\u304C${makeFinish(scorer, b.cross)}\uFF01${assist ? `\uFF08\u30A2\u30B7\u30B9\u30C8: ${clipLen(assist.name, 12)}\uFF09` : ""}`;
  }
  function chanceText(team, p) {
    const b = makeBuildup(team, p), miss = pick(MISS);
    return { text: `${b.phrase}\u3001${clipLen(p.name, 12)}\u304C\u72D9\u3046\u3082${miss.t}`, on: miss.on };
  }
  var OFFSIDE_STYLE = { longcounter: 1.8, shortcounter: 1.4, possession: 0.7, retreat: 0.6, highpress: 1.1 };
  var FOUL_STYLE = { highpress: 1.7, shortcounter: 1.2, possession: 0.8, longcounter: 1, retreat: 1.15 };
  var offsideTendency = (t) => (OFFSIDE_STYLE[t.style] ?? 1) * (0.8 + (CONFIG.FORMATIONS[t.formation]?.fw ?? 2) * 0.12);
  var foulTendency = (t) => (FOUL_STYLE[t.style] ?? 1) * ({ attacking: 1, balanced: 1, defensive: 1.1 }[t.mentality] ?? 1);
  function disciplineCounts(team) {
    const fouls = poisson(8 * foulTendency(team));
    const offsides = poisson(1.6 * offsideTendency(team));
    const yellows = Math.min(3, poisson(fouls * 0.028));
    const reds = Math.random() < 4e-3 * foulTendency(team) ? 1 : 0;
    return { fouls, offsides, yellows, reds };
  }
  function buildHalfTimeline(home, away, half, ctx) {
    const { hg, ag, hShare } = simulateHalf(home, away);
    const base = half === 1 ? 0 : 45;
    ctx = ctx || { booked: /* @__PURE__ */ new Set(), off: /* @__PURE__ */ new Set() };
    const at = half === 1 ? randint(1, 3) : randint(2, 5);
    const minuteIn = () => Math.random() < 0.12 ? base + 45 + randint(1, at) : base + randint(1, 45);
    const mkGoals = (team, side, n) => {
      const arr = [];
      for (let i = 0; i < n; i++) {
        const scorer = pickScorerP(team);
        const a = Math.random() < CONFIG.ASSIST_RATE ? pickAssistP(team, scorer.id) : null;
        arr.push({ minute: minuteIn(), half, side, type: "goal", onTarget: true, scorerId: scorer.id, assistId: a ? a.id : null, text: goalText(team, scorer, a) });
      }
      return arr;
    };
    const mkChances = (team, side, share) => {
      const n = randint(0, 1) + Math.round(Math.max(0, share) * 2.2);
      return Array.from({ length: n }, () => {
        const c = chanceText(team, pickScorerP(team));
        return { minute: base + randint(2, 44), half, side, type: "chance", onTarget: c.on, text: c.text };
      });
    };
    const mkDiscipline = (team, side) => {
      const evs = [];
      const ft = foulTendency(team);
      const off = poisson(0.5 * offsideTendency(team));
      for (let i = 0; i < off; i++) evs.push({ minute: base + randint(2, 44), half, side, type: "offside", text: `${clipLen(pickOffsideP(team).name, 12)}\u304C\u30AA\u30D5\u30B5\u30A4\u30C9\u306B\u304B\u304B\u308B` });
      const fl = poisson(4 * ft);
      for (let i = 0; i < fl; i++) {
        const p = pick(team.players);
        let card = null, text;
        if (ctx.off.has(p.id)) {
          text = `${clipLen(p.name, 12)}\u304C\u30D5\u30A1\u30A6\u30EB\u3092\u72AF\u3059`;
        } else if (Math.random() < 15e-4 * ft) {
          card = "red";
          ctx.off.add(p.id);
          text = `${clipLen(p.name, 12)}\u306B\u4E00\u767A\u30EC\u30C3\u30C9\u3001\u9000\u5834`;
        } else if (Math.random() < 0.028) {
          if (ctx.booked.has(p.id)) {
            card = "red";
            ctx.off.add(p.id);
            text = `${clipLen(p.name, 12)}\u306B2\u679A\u76EE\u306E\u8B66\u544A\u3001\u9000\u5834`;
          } else {
            card = "yellow";
            ctx.booked.add(p.id);
            text = `${clipLen(p.name, 12)}\u306B\u8B66\u544A\uFF08\u30A4\u30A8\u30ED\u30FC\u30AB\u30FC\u30C9\uFF09`;
          }
        } else {
          text = `${clipLen(p.name, 12)}\u304C\u30D5\u30A1\u30A6\u30EB\u3092\u72AF\u3059`;
        }
        evs.push({ minute: base + randint(2, 44), half, side, type: "foul", card, playerId: p.id, text });
      }
      return evs;
    };
    const possSegments = [];
    for (let s = 0; s < 3; s++) {
      const sh = Math.max(0.25, Math.min(0.75, hShare + (Math.random() - 0.5) * 0.22));
      possSegments.push({ from: base + s * 15, to: base + (s + 1) * 15, hShare: sh });
    }
    const goalsHome = mkGoals(home, "home", hg), goalsAway = mkGoals(away, "away", ag);
    const events = [
      ...goalsHome,
      ...goalsAway,
      ...mkChances(home, "home", hShare),
      ...mkChances(away, "away", 1 - hShare),
      ...mkDiscipline(home, "home"),
      ...mkDiscipline(away, "away")
    ].sort((x, y) => x.minute - y.minute);
    return { hg, ag, hShare, at, endMinute: base + 45 + at, events, goalsHome, goalsAway, possSegments };
  }
  function applyOneSub(team, want, minImprove) {
    const bench = (team.bench || []).slice();
    if (!bench.length) return null;
    const starters = team.players;
    const advanced = (p) => {
      const b = broadPos(p.position);
      return b === "FW" || ["AM", "RAM", "LAM", "RW", "LW"].includes(p.position);
    };
    const defensive = (p) => broadPos(p.position) === "DF" || p.position === "DM";
    const inSlot = want === "shoot" ? advanced : want === "defense" ? defensive : (p) => broadPos(p.position) !== "GK";
    const cand = bench.reduce((a, b) => b.ability[want] > a.ability[want] ? b : a, bench[0]);
    let outIdx = -1, lo = Infinity;
    starters.forEach((p, i) => {
      if (broadPos(p.position) === "GK" || !inSlot(p)) return;
      if (p.ability[want] < lo) {
        lo = p.ability[want];
        outIdx = i;
      }
    });
    if (outIdx < 0) return null;
    if (cand.ability[want] - starters[outIdx].ability[want] < minImprove) return null;
    const players = starters.slice();
    const out = players[outIdx];
    players[outIdx] = { ...cand, position: out.position };
    const nextBench = bench.filter((b) => b.id !== cand.id).concat([{ ...out }]);
    return { team: bakeMentality({ ...team, players, bench: nextBench }), inId: cand.id, outId: out.id };
  }
  function autoHalftimeSubs(team, deficit) {
    const behind = deficit < 0, ahead = deficit > 0, a = Math.abs(deficit);
    const wants = behind ? ["shoot", "speed", "technique"] : ahead ? ["defense", "physical", "speed"] : Math.random() < 0.5 ? ["shoot", "defense"] : ["defense", "shoot"];
    const maxSubs = Math.min(3, (team.bench || []).length);
    let cur = team;
    const subs = [];
    for (let s = 0; s < maxSubs; s++) {
      if (s === 0) {
        if (!behind && !ahead && Math.random() > 0.3) break;
      } else {
        const p = a >= 2 ? 0.6 : a === 1 ? 0.4 : 0.18;
        if (Math.random() > p) break;
      }
      const minImprove = behind || ahead ? 1 : 2;
      let r = applyOneSub(cur, wants[Math.min(s, wants.length - 1)], minImprove);
      if (!r) {
        for (const w of wants) {
          r = applyOneSub(cur, w, minImprove);
          if (r) break;
        }
      }
      if (!r) break;
      subs.push({ inId: r.inId, outId: r.outId });
      cur = r.team;
    }
    return { team: cur, subs };
  }
  function computeRatings(team, gf, ga, scorers, assists) {
    const gCount = {}, aCount = {};
    scorers.forEach((id) => gCount[id] = (gCount[id] || 0) + 1);
    assists.forEach((id) => aCount[id] = (aCount[id] || 0) + 1);
    const won = gf > ga, draw = gf === ga, clean = ga === 0;
    const ratings = {};
    for (const p of team.players) {
      const b = broadPos(p.position);
      const backline = b === "GK" || b === "DF";
      let r = 6;
      r += (gCount[p.id] || 0) * 1;
      r += (aCount[p.id] || 0) * 0.6;
      r += won ? 0.3 : draw ? 0.05 : -0.2;
      if (backline) {
        if (clean) r += 0.7;
        else if (ga <= 1) r += 0.35;
        else r -= Math.min(0.6, (ga - 1) * 0.18);
        r += won ? 0.25 : draw ? 0.1 : 0;
        r += p.ability.defense / 5 * 0.2;
      } else if (p.position === "DM") {
        if (clean) r += 0.4;
        else if (ga <= 1) r += 0.2;
      }
      r += rnd(-0.2, 0.2);
      ratings[p.id] = Math.max(4, Math.min(10, Math.round(r * 10) / 10));
    }
    return ratings;
  }
  function buildMatchRecord(home, away, halves, round) {
    const gh = [], ga = [], allEvents = [], segs = [];
    for (const t of halves) {
      gh.push(...t.goalsHome);
      ga.push(...t.goalsAway);
      allEvents.push(...t.events);
      segs.push(...t.possSegments);
    }
    const homeScorers = gh.map((e) => e.scorerId), awayScorers = ga.map((e) => e.scorerId);
    const homeAssists = gh.filter((e) => e.assistId).map((e) => e.assistId), awayAssists = ga.filter((e) => e.assistId).map((e) => e.assistId);
    const homeEvents = gh.map((e) => ({ minute: e.minute, half: e.half, scorerId: e.scorerId, assistId: e.assistId })).sort((a, b) => a.half - b.half || a.minute - b.minute);
    const awayEvents = ga.map((e) => ({ minute: e.minute, half: e.half, scorerId: e.scorerId, assistId: e.assistId })).sort((a, b) => a.half - b.half || a.minute - b.minute);
    const hs = gh.length, as = ga.length;
    const disc = { home: { f: 0, o: 0, y: 0, r: 0 }, away: { f: 0, o: 0, y: 0, r: 0 } };
    const cards = { home: [], away: [] };
    for (const e of allEvents) {
      if (e.type === "offside") disc[e.side].o++;
      else if (e.type === "foul") {
        disc[e.side].f++;
        if (e.card === "yellow") {
          disc[e.side].y++;
          cards[e.side].push({ playerId: e.playerId, type: "yellow" });
        } else if (e.card === "red") {
          disc[e.side].r++;
          cards[e.side].push({ playerId: e.playerId, type: "red" });
        }
      }
    }
    const poss = Math.round(segs.reduce((s, v) => s + v.hShare, 0) / (segs.length || 1) * 100);
    const evs = allEvents.filter((e) => !(e.type === "foul" && !e.card)).map((e) => ({ minute: e.minute, half: e.half, side: e.side, type: e.type, card: e.card || null, text: e.text, onTarget: !!e.onTarget }));
    const h1evs = evs.filter((e) => e.half === 1).sort((a, b) => a.minute - b.minute);
    const h2evs = evs.filter((e) => e.half === 2).sort((a, b) => a.minute - b.minute);
    const timeline = [{ type: "marker", text: "\u30AD\u30C3\u30AF\u30AA\u30D5" }, ...h1evs, { type: "marker", text: "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0" }, ...h2evs, { type: "marker", text: "\u8A66\u5408\u7D42\u4E86" }];
    return {
      round,
      home: home.id,
      away: away.id,
      homeScore: hs,
      awayScore: as,
      possession: poss,
      homeFormation: home.formation,
      awayFormation: away.formation,
      homeStyle: home.style,
      awayStyle: away.style,
      homeMentality: home.mentality,
      awayMentality: away.mentality,
      homeScorers,
      awayScorers,
      homeAssists,
      awayAssists,
      homeEvents,
      awayEvents,
      homeFouls: disc.home.f,
      awayFouls: disc.away.f,
      homeOffsides: disc.home.o,
      awayOffsides: disc.away.o,
      homeYellows: disc.home.y,
      awayYellows: disc.away.y,
      homeReds: disc.home.r,
      awayReds: disc.away.r,
      homeCards: cards.home,
      awayCards: cards.away,
      timeline,
      homeRatings: computeRatings(home, hs, as, homeScorers, homeAssists),
      awayRatings: computeRatings(away, as, hs, awayScorers, awayAssists)
    };
  }
  function generateSchedule(teamIds) {
    const n = teamIds.length, fixed = teamIds[0];
    let rest = teamIds.slice(1);
    const first = [];
    for (let r = 0; r < n - 1; r++) {
      const line = [fixed, ...rest], round = [];
      for (let i = 0; i < n / 2; i++) {
        const a = line[i], b = line[n - 1 - i];
        round.push(r % 2 === 0 ? { home: a, away: b } : { home: b, away: a });
      }
      first.push(round);
      rest = [rest[rest.length - 1], ...rest.slice(0, -1)];
    }
    const second = first.map((round) => round.map((m) => ({ home: m.away, away: m.home })));
    return [...first, ...second];
  }
  function buildStandings(teams, results) {
    const table = {};
    Object.values(teams).forEach((t) => table[t.id] = { teamId: t.id, played: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 });
    for (const m of results) {
      const h = table[m.home], a = table[m.away];
      h.played++;
      a.played++;
      h.gf += m.homeScore;
      h.ga += m.awayScore;
      a.gf += m.awayScore;
      a.ga += m.homeScore;
      if (m.homeScore > m.awayScore) {
        h.w++;
        h.pts += 3;
        a.l++;
      } else if (m.homeScore < m.awayScore) {
        a.w++;
        a.pts += 3;
        h.l++;
      } else {
        h.d++;
        a.d++;
        h.pts++;
        a.pts++;
      }
    }
    const rows = Object.values(table);
    rows.sort((x, y) => y.pts - x.pts || y.gf - y.ga - (x.gf - x.ga) || y.gf - x.gf);
    return rows;
  }
  function buildPlayerStats(teams, results, playerTeamId) {
    const stats = {};
    const init = (t, p, isBench) => stats[p.id] = {
      teamId: t.id,
      name: p.name,
      position: p.position,
      foreign: p.foreign,
      bench: !!isBench,
      goals: 0,
      assists: 0,
      apps: 0,
      ratingSum: 0,
      ratedApps: 0
    };
    Object.values(teams).forEach((t) => {
      t.players.forEach((p) => init(t, p, false));
      if (t.id === playerTeamId && t.bench) t.bench.forEach((p) => init(t, p, true));
    });
    const counted = {}, subCount = {};
    for (const m of results) {
      counted[m.home] = (counted[m.home] || 0) + 1;
      counted[m.away] = (counted[m.away] || 0) + 1;
      (m.homeScorers || []).forEach((id) => stats[id] && stats[id].goals++);
      (m.awayScorers || []).forEach((id) => stats[id] && stats[id].goals++);
      (m.homeAssists || []).forEach((id) => stats[id] && stats[id].assists++);
      (m.awayAssists || []).forEach((id) => stats[id] && stats[id].assists++);
      if (m.homeRatings) for (const id in m.homeRatings) stats[id] && (stats[id].ratingSum += m.homeRatings[id], stats[id].ratedApps++);
      if (m.awayRatings) for (const id in m.awayRatings) stats[id] && (stats[id].ratingSum += m.awayRatings[id], stats[id].ratedApps++);
      (m.pSubs || []).forEach((id) => subCount[id] = (subCount[id] || 0) + 1);
    }
    Object.values(teams).forEach((t) => {
      const isP = t.id === playerTeamId;
      t.players.forEach((p) => {
        stats[p.id].apps = counted[t.id] || 0;
        stats[p.id].avg = stats[p.id].ratedApps ? stats[p.id].ratingSum / stats[p.id].ratedApps : 0;
      });
      if (isP && t.bench) t.bench.forEach((p) => {
        stats[p.id].apps = subCount[p.id] || 0;
        stats[p.id].avg = stats[p.id].ratedApps ? stats[p.id].ratingSum / stats[p.id].ratedApps : 0;
      });
    });
    return stats;
  }
  function pickMVP(teams, results, standings) {
    const stats = buildPlayerStats(teams, results);
    const rankBonus = {};
    standings.forEach((r, i) => rankBonus[r.teamId] = Math.max(0, 20 - i) * 0.15);
    let best = null, bestScore = -Infinity;
    for (const id in stats) {
      const s = stats[id];
      if (!s.apps) continue;
      const score = (s.avg - 6) * s.apps + s.goals * 1 + s.assists * 0.5 + (rankBonus[s.teamId] || 0);
      if (score > bestScore) {
        bestScore = score;
        best = { id, ...s, score };
      }
    }
    return best;
  }
  function rankOf(standings, teamId) {
    return standings.findIndex((r) => r.teamId === teamId) + 1;
  }
  function styleMatchupMark(myStyle, oppStyle) {
    if (myStyle === oppStyle) return "-";
    if (STYLE_STRONG[myStyle] === oppStyle) return "AA";
    if (STYLE_SLIGHT[myStyle] === oppStyle) return "A";
    if (STYLE_STRONG[oppStyle] === myStyle) return "DD";
    if (STYLE_SLIGHT[oppStyle] === myStyle) return "D";
    return "-";
  }
  function generateMatchSummary(rec, teams) {
    const h = teams[rec.home], a = teams[rec.away];
    const hs = rec.homeScore, as = rec.awayScore;
    const draw = hs === as, homeWin = hs > as;
    const winT = homeWin ? h : a, loseT = homeWin ? a : h;
    const winScore = Math.max(hs, as), loseScore = Math.min(hs, as), diff = winScore - loseScore;
    const winPoss = homeWin ? rec.possession : 100 - rec.possession;
    const scorersOf = (events, team) => {
      const c = {};
      (events || []).forEach((e) => c[e.scorerId] = (c[e.scorerId] || 0) + 1);
      return Object.entries(c).map(([id, n]) => ({ name: (team.players.find((p) => p.id === id) || {}).name, n })).sort((x, y) => y.n - x.n);
    };
    const winScorers = scorersOf(homeWin ? rec.homeEvents : rec.awayEvents, winT);
    const top = winScorers[0];
    if (draw) {
      if (hs === 0) return pick([
        "\u4E21\u8005\u8B72\u3089\u305A\u3001\u30B9\u30B3\u30A2\u30EC\u30B9\u30C9\u30ED\u30FC\u306B\u7D42\u308F\u3063\u305F\u3002",
        "\u4E92\u3044\u306B\u6700\u5F8C\u306E\u7CBE\u5EA6\u3092\u6B20\u304D\u30010-0\u306E\u307E\u307E\u8A66\u5408\u3092\u7D42\u3048\u305F\u3002",
        "\u7DCA\u5F35\u611F\u306E\u3042\u308B\u653B\u9632\u304C\u7D9A\u3044\u305F\u304C\u3001\u30B4\u30FC\u30EB\u306F\u751F\u307E\u308C\u306A\u304B\u3063\u305F\u3002",
        "\u5805\u3044\u5B88\u5099\u540C\u58EB\u306E\u3076\u3064\u304B\u308A\u5408\u3044\u306F\u3001\u5F97\u70B9\u306A\u3057\u3067\u6C7A\u7740\u3057\u305F\u3002",
        "\u6C7A\u5B9A\u6A5F\u306E\u6570\u3053\u305D\u3042\u3063\u305F\u304C\u3001\u6700\u5F8C\u307E\u3067\u30CD\u30C3\u30C8\u306F\u63FA\u308C\u306A\u304B\u3063\u305F\u3002"
      ]);
      return pick([
        `${h.name}\u3068${a.name}\u304C${hs}-${as}\u3067\u6253\u3061\u5408\u3044\u3001\u52DD\u70B91\u3092\u5206\u3051\u5408\u3063\u305F\u3002`,
        `\u4E00\u9032\u4E00\u9000\u306E\u597D\u30B2\u30FC\u30E0\u306F${hs}-${as}\u306E\u30C9\u30ED\u30FC\u3002\u4E21\u8005\u306B\u3068\u3063\u3066\u6094\u3057\u3044\u7D50\u672B\u3068\u306A\u3063\u305F\u3002`,
        `\u70B9\u306E\u53D6\u308A\u5408\u3044\u3068\u306A\u3063\u305F\u4E00\u6226\u306F${hs}-${as}\u3002\u6700\u5F8C\u307E\u3067\u6C7A\u7740\u306F\u3064\u304B\u306A\u304B\u3063\u305F\u3002`,
        `\u4E92\u3044\u306B\u8B72\u3089\u306C\u5C55\u958B\u306F${hs}-${as}\u3067\u75DB\u307F\u5206\u3051\u3002\u52DD\u70B9\u30921\u305A\u3064\u6301\u3061\u5E30\u3063\u305F\u3002`,
        `${hs}-${as}\u3068\u52E2\u3044\u304C\u884C\u304D\u4EA4\u3046\u71B1\u6226\u306F\u3001\u5F15\u304D\u5206\u3051\u306B\u7D42\u308F\u3063\u305F\u3002`
      ]);
    }
    const domi = winPoss >= 60 ? pick([`${winT.name}\u304C\u8A66\u5408\u3092\u5B8C\u5168\u306B\u652F\u914D\u3057\u3001`, `\u7D42\u59CB\u30DC\u30FC\u30EB\u3092\u63E1\u3063\u305F${winT.name}\u304C\u3001`, `${winT.name}\u304C\u5727\u5012\u7684\u306B\u30B2\u30FC\u30E0\u3092\u9032\u3081\u3001`, `${winT.name}\u304C\u30DC\u30FC\u30EB\u3092\u96E2\u3055\u305A\u4E3B\u5C0E\u6A29\u3092\u63E1\u308A\u3001`]) : winPoss >= 53 ? pick([`${winT.name}\u304C\u4E3B\u5C0E\u6A29\u3092\u63E1\u308B\u3068\u3001`, `${winT.name}\u304C\u3084\u3084\u512A\u52E2\u306B\u8A66\u5408\u3092\u904B\u3073\u3001`, `${winT.name}\u304C\u6D41\u308C\u3092\u5F15\u304D\u5BC4\u305B\u3001`]) : winPoss <= 43 ? pick([`\u30DC\u30FC\u30EB\u652F\u914D\u3067\u306F${loseT.name}\u3092\u4E0A\u56DE\u3089\u305B\u306A\u304C\u3089\u3082\u3001${winT.name}\u304C\u8981\u6240\u3092\u7DE0\u3081\u3001`, `${winT.name}\u304C\u6211\u6162\u306E\u5C55\u958B\u3092\u8010\u3048\u629C\u304D\u3001`, `${winT.name}\u304C\u5B88\u3063\u3066\u304B\u3089\u306E\u4E00\u6483\u3067\u3001`]) : pick([`\u62EE\u6297\u3057\u305F\u5C55\u958B\u306E\u306A\u304B\u3001${winT.name}\u304C\u5730\u529B\u3092\u898B\u305B\u3001`, `\u4E92\u3044\u306B\u8B72\u3089\u306C\u653B\u9632\u3092${winT.name}\u304C\u5236\u3057\u3001`, `\u4E94\u5206\u306E\u6226\u3044\u3092${winT.name}\u304C\u5F15\u304D\u5BC4\u305B\u3001`]);
    let hero = "";
    if (top && top.n >= 3) hero = pick([`${top.name}\u304C\u30CF\u30C3\u30C8\u30C8\u30EA\u30C3\u30AF\u306E\u5927\u66B4\u308C\u3002`, `${top.name}\u304C${top.n}\u5F97\u70B9\u3068\u8A66\u5408\u3092\u6C7A\u5B9A\u3065\u3051\u3001`, `${top.name}\u306E${top.n}\u767A\u304C\u76F8\u624B\u3092\u7C89\u7815\u3057\u3001`]);
    else if (top && top.n === 2) hero = pick([`${top.name}\u306E2\u30B4\u30FC\u30EB\u3067\u7A81\u304D\u653E\u3059\u3068\u3001`, `${top.name}\u304C2\u5F97\u70B9\u306E\u6D3B\u8E8D\u3092\u898B\u305B\u3001`, `${top.name}\u306E\u4E00\u4EBA2\u5F97\u70B9\u304C\u52B9\u304D\u3001`]);
    else if (winScorers.length >= 2) hero = pick([`\u8907\u6570\u306E\u9078\u624B\u304C\u30CD\u30C3\u30C8\u3092\u63FA\u3089\u3057\u3001`, `\u653B\u6483\u9663\u304C\u305D\u308D\u3063\u3066\u7D50\u679C\u3092\u6B8B\u3057\u3001`, `\u591A\u5F69\u306A\u5F97\u70B9\u30D1\u30BF\u30FC\u30F3\u3092\u898B\u305B\u3001`]);
    else if (top) hero = pick([`${top.name}\u306E\u4E00\u6483\u304C\u6C7A\u52DD\u70B9\u3068\u306A\u308A\u3001`, `${top.name}\u306E\u30B4\u30FC\u30EB\u304C\u5747\u8861\u3092\u7834\u308A\u3001`, `${top.name}\u304C\u5024\u5343\u91D1\u306E\u4E00\u70B9\u3092\u596A\u3044\u3001`]);
    const res = loseScore === 0 && diff >= 3 ? pick([`${winScore}-0\u3068\u5B8C\u5C01\u3067\u5FEB\u52DD\u3057\u305F\u3002`, `${winScore}-0\u306E\u5B8C\u52DD\u3092\u53CE\u3081\u305F\u3002`, `${winScore}-0\u3068\u9699\u306E\u306A\u3044\u5B8C\u52DD\u5287\u3060\u3063\u305F\u3002`]) : diff >= 3 ? pick([`${winScore}-${loseScore}\u3067\u5927\u52DD\u3057\u305F\u3002`, `${winScore}-${loseScore}\u3068\u529B\u306E\u5DEE\u3092\u898B\u305B\u3064\u3051\u305F\u3002`, `${winScore}-${loseScore}\u306E\u5FEB\u52DD\u3067\u7DE0\u3081\u304F\u304F\u3063\u305F\u3002`]) : diff === 2 ? pick([`${winScore}-${loseScore}\u3067\u5371\u306A\u3052\u306A\u304F\u52DD\u3061\u5207\u3063\u305F\u3002`, `${winScore}-${loseScore}\u3067\u5FEB\u52DD\u3057\u305F\u3002`, `${winScore}-${loseScore}\u3068\u7740\u5B9F\u306B\u52DD\u70B93\u3092\u5F97\u305F\u3002`]) : pick([`${winScore}-${loseScore}\u3067\u7AF6\u308A\u52DD\u3063\u305F\u3002`, `${winScore}-${loseScore}\u306E\u63A5\u6226\u3092\u3082\u306E\u306B\u3057\u305F\u3002`, `${winScore}-${loseScore}\u3067\u8F9B\u304F\u3082\u9003\u3052\u5207\u3063\u305F\u3002`, `${winScore}-${loseScore}\u306E\u50C5\u5DEE\u3092\u5236\u3057\u305F\u3002`]);
    return (domi + hero + res).replace(/、。/g, "\u3002").replace(/。。/g, "\u3002");
  }
  function generateSeasonSummary(teams, results, standings, playerTeamId) {
    const player = teams[playerTeamId];
    const row = standings.find((r) => r.teamId === playerTeamId);
    const rank = rankOf(standings, playerTeamId);
    let fh = 0, sh = 0;
    const vs = {};
    STYLES.forEach((s) => vs[s] = { pts: 0, g: 0 });
    let bigWin = null;
    for (const m of results) {
      const isH = m.home === playerTeamId, isA = m.away === playerTeamId;
      if (!isH && !isA) continue;
      const gf = isH ? m.homeScore : m.awayScore, ga = isH ? m.awayScore : m.homeScore;
      const pts = gf > ga ? 3 : gf === ga ? 1 : 0;
      if (m.round < CONFIG.MATCHDAYS / 2) fh += pts;
      else sh += pts;
      vs[teams[isH ? m.away : m.home].style].pts += pts;
      vs[teams[isH ? m.away : m.home].style].g++;
      if (gf - ga >= 3 && (!bigWin || gf - ga > bigWin.diff)) bigWin = { gf, ga, diff: gf - ga, opp: teams[isH ? m.away : m.home].name };
    }
    let worst = null, worstPPG = 99;
    for (const s in vs) if (vs[s].g >= 3) {
      const ppg = vs[s].pts / vs[s].g;
      if (ppg < worstPPG) {
        worstPPG = ppg;
        worst = s;
      }
    }
    const stats = buildPlayerStats(teams, results);
    const ace = Object.values(stats).filter((s) => s.teamId === playerTeamId).sort((a, b) => b.goals - a.goals)[0];
    const styleL = STYLE_LABEL[player.style];
    const avgGF = row.gf / CONFIG.MATCHDAYS, avgGA = row.ga / CONFIG.MATCHDAYS;
    const aceL = ace ? clipLen(ace.name, 12) : "";
    const s1 = avgGF >= 1.9 ? pick([
      `${styleL}\u3092\u524D\u9762\u306B\u62BC\u3057\u51FA\u3057\u305F\u4ECA\u30B7\u30FC\u30BA\u30F3\u306F\u3001\u30EA\u30FC\u30B0\u5C48\u6307\u306E\u653B\u6483\u529B\u3067\u591A\u304F\u306E\u8A66\u5408\u3092\u5F69\u3063\u305F\u3002`,
      `${styleL}\u3092\u8CAB\u3044\u305F\u4ECA\u5B63\u3001\u524D\u7DDA\u306F\u6B62\u307E\u308B\u3053\u3068\u3092\u77E5\u3089\u305A\u3001\u6BCE\u7BC0\u306E\u3088\u3046\u306B\u5F97\u70B9\u3092\u91CF\u7523\u3057\u305F\u3002`,
      `\u653B\u6483\u7684\u306A${styleL}\u304C\u898B\u4E8B\u306B\u306F\u307E\u308A\u3001\u76F8\u624B\u5B88\u5099\u3092\u518D\u4E09\u306B\u308F\u305F\u3063\u3066\u5207\u308A\u88C2\u3044\u305F\u3002`
    ]) : avgGF >= 1.4 ? pick([
      `${styleL}\u3092\u57FA\u76E4\u306B\u636E\u3048\u305F\u4ECA\u30B7\u30FC\u30BA\u30F3\u306F\u3001\u5B89\u5B9A\u3057\u305F\u653B\u6483\u3067\u7740\u5B9F\u306B\u5F97\u70B9\u3092\u7A4D\u307F\u4E0A\u3052\u305F\u3002`,
      `${styleL}\u3092\u4E3B\u4F53\u306B\u3001\u52DD\u8CA0\u3069\u3053\u308D\u3067\u3057\u3063\u304B\u308A\u3068\u70B9\u3092\u53D6\u308A\u5207\u308B\u4E00\u5E74\u3060\u3063\u305F\u3002`,
      `${styleL}\u3092\u8EF8\u306B\u3001\u6D3E\u624B\u3055\u306F\u306A\u3044\u304C\u52B9\u7387\u306E\u826F\u3044\u653B\u6483\u3067\u30B4\u30FC\u30EB\u3092\u91CD\u306D\u305F\u3002`
    ]) : pick([
      `${styleL}\u3067\u6311\u3093\u3060\u4ECA\u30B7\u30FC\u30BA\u30F3\u306F\u3001\u5F97\u70B9\u529B\u306B\u8AB2\u984C\u3092\u6B8B\u3059\u82E6\u3057\u3044\u6226\u3044\u3068\u306A\u3063\u305F\u3002`,
      `${styleL}\u3092\u5FD7\u5411\u3057\u305F\u3082\u306E\u306E\u3001\u6700\u5F8C\u307E\u3067\u30B4\u30FC\u30EB\u304C\u9060\u304F\u3001\u6211\u6162\u306E\u5C55\u958B\u304C\u7D9A\u3044\u305F\u3002`,
      `${styleL}\u3092\u63B2\u3052\u3066\u6226\u3063\u305F\u304C\u3001\u5F97\u70B9\u4E0D\u8DB3\u306B\u6CE3\u304B\u3055\u308C\u308B\u5834\u9762\u304C\u76EE\u7ACB\u3063\u305F\u3002`
    ]);
    const s2 = sh > fh + 4 ? pick(["\u5C3B\u4E0A\u304C\u308A\u306B\u8ABF\u5B50\u3092\u4E0A\u3052\u3001\u5F8C\u534A\u6226\u3067\u5927\u304D\u304F\u9806\u4F4D\u3092\u4F38\u3070\u3057\u305F\u3002", "\u5E8F\u76E4\u306E\u51FA\u9045\u308C\u3092\u53D6\u308A\u8FD4\u3057\u3001\u7D42\u76E4\u306B\u304B\u3051\u3066\u52E2\u3044\u3092\u5897\u3057\u3066\u3044\u3063\u305F\u3002", "\u5F8C\u534A\u6226\u306E\u8FFD\u3044\u4E0A\u3052\u304C\u5149\u308B\u3001\u53F3\u80A9\u4E0A\u304C\u308A\u306E\u30B7\u30FC\u30BA\u30F3\u3068\u306A\u3063\u305F\u3002"]) : fh > sh + 4 ? pick(["\u597D\u8ABF\u306A\u524D\u534A\u6226\u306E\u8CAF\u91D1\u3092\u751F\u304B\u3057\u3001\u30EA\u30FC\u30C9\u3092\u4FDD\u3063\u305F\u307E\u307E\u8D70\u308A\u5207\u3063\u305F\u3002", "\u5E8F\u76E4\u304B\u3089\u98DB\u3070\u3057\u3001\u524D\u534A\u6226\u306E\u3046\u3061\u306B\u512A\u4F4D\u3092\u7BC9\u3044\u305F\u3002", "\u524D\u534A\u6226\u306E\u52E2\u3044\u304C\u5927\u304D\u304B\u3063\u305F\u4E00\u65B9\u3001\u7D42\u76E4\u306F\u5931\u901F\u6C17\u5473\u3060\u3063\u305F\u3002"]) : pick(["\u5927\u304D\u306A\u6CE2\u306F\u306A\u304F\u3001\u4E00\u5E74\u3092\u901A\u3057\u3066\u5B89\u5B9A\u3057\u305F\u6226\u3044\u3076\u308A\u3092\u898B\u305B\u305F\u3002", "\u6975\u7AEF\u306A\u597D\u4E0D\u8ABF\u306E\u6CE2\u306F\u306A\u304F\u3001\u6DE1\u3005\u3068\u52DD\u70B9\u3092\u7A4D\u307F\u4E0A\u3052\u305F\u3002", "\u30B7\u30FC\u30BA\u30F3\u3092\u901A\u3057\u3066\u5927\u5D29\u308C\u305B\u305A\u3001\u5805\u5B9F\u306B\u52DD\u70B9\u3092\u91CD\u306D\u305F\u3002"]);
    const s3 = avgGA <= 1 ? pick(["\u5B88\u5099\u306F\u5805\u56FA\u3067\u3001\u6700\u5F8C\u307E\u3067\u96C6\u4E2D\u3092\u5207\u3089\u3055\u306A\u304B\u3063\u305F\u3002", "\u9244\u58C1\u306E\u6700\u7D42\u30E9\u30A4\u30F3\u304C\u30C1\u30FC\u30E0\u306E\u751F\u547D\u7DDA\u3068\u306A\u3063\u305F\u3002", "\u5931\u70B9\u306E\u5C11\u306A\u3055\u306F\u3001\u30EA\u30FC\u30B0\u3067\u3082\u5C48\u6307\u306E\u5805\u5B88\u3060\u3063\u305F\u3002"]) : avgGA <= 1.5 ? pick(["\u5B88\u5099\u3082\u5927\u5D29\u308C\u306F\u305B\u305A\u3001\u8A66\u5408\u3092\u843D\u3061\u7740\u3044\u3066\u904B\u3076\u3053\u3068\u304C\u3067\u304D\u305F\u3002", "\u5B88\u5099\u9663\u306F\u304A\u304A\u3080\u306D\u53CA\u7B2C\u70B9\u306E\u51FA\u6765\u3067\u3001\u8A66\u5408\u3092\u58CA\u3055\u306A\u304B\u3063\u305F\u3002", "\u5B88\u5099\u306F\u5E73\u5747\u7684\u306A\u304C\u3089\u3001\u5FC5\u8981\u306A\u5834\u9762\u3067\u306F\u8E0F\u3093\u5F35\u308A\u3092\u898B\u305B\u305F\u3002"]) : pick(["\u4E00\u65B9\u3067\u5B88\u5099\u306F\u4E0D\u5B89\u5B9A\u3055\u3092\u6B8B\u3057\u3001\u6700\u5F8C\u307E\u3067\u8AB2\u984C\u3068\u306A\u3063\u305F\u3002", "\u5931\u70B9\u306E\u591A\u3055\u306B\u306F\u76EE\u3092\u3064\u3076\u308C\u306A\u3044\u4E00\u5E74\u3067\u3082\u3042\u3063\u305F\u3002", "\u5B88\u5099\u306E\u6574\u5099\u306F\u6765\u5B63\u306B\u5411\u3051\u305F\u5927\u304D\u306A\u5BBF\u984C\u3068\u306A\u3063\u305F\u3002"]);
    const s4 = worst ? pick([`${STYLE_LABEL[worst]}\u5FD7\u5411\u306E\u76F8\u624B\u306B\u306F\u305F\u3073\u305F\u3073\u82E6\u6226\u3092\u5F37\u3044\u3089\u308C\u305F\u3002`, `${STYLE_LABEL[worst]}\u3092\u4ED5\u639B\u3051\u3066\u304F\u308B\u30C1\u30FC\u30E0\u3092\u76F8\u624B\u306B\u3001\u52DD\u70B9\u3092\u53D6\u308A\u3053\u307C\u3059\u5834\u9762\u3082\u3042\u3063\u305F\u3002`, `\u5929\u6575\u306F${STYLE_LABEL[worst]}\u306E\u30C1\u30FC\u30E0\u3067\u3001\u76F8\u6027\u306E\u60AA\u3055\u304C\u6700\u5F8C\u307E\u3067\u97FF\u3044\u305F\u3002`]) : "";
    const sAce = ace && ace.goals >= 10 ? pick([`${aceL}\u306F${ace.goals}\u30B4\u30FC\u30EB\u3068\u5927\u8ECA\u8F2A\u306E\u6D3B\u8E8D\u3067\u30C1\u30FC\u30E0\u3092\u727D\u5F15\u3057\u305F\u3002`, `\u5F97\u70B9\u6E90\u306E${aceL}\u304C${ace.goals}\u767A\u3092\u53E9\u304D\u8FBC\u307F\u3001\u653B\u6483\u3092\u652F\u3048\u7D9A\u3051\u305F\u3002`]) : ace && ace.goals >= 6 ? pick([`${aceL}\u3082${ace.goals}\u5F97\u70B9\u3068\u3001\u8981\u6240\u3067\u78BA\u304B\u306A\u7D50\u679C\u3092\u6B8B\u3057\u305F\u3002`, `${aceL}\u306E${ace.goals}\u30B4\u30FC\u30EB\u304C\u3001\u3053\u3053\u305E\u306E\u5834\u9762\u3067\u30C1\u30FC\u30E0\u3092\u6551\u3063\u305F\u3002`]) : "";
    const sBig = bigWin && Math.random() < 0.5 ? pick([`${bigWin.opp}\u3092${bigWin.gf}-${bigWin.ga}\u3067\u4E0B\u3057\u305F\u4E00\u6226\u306F\u3001\u30B7\u30FC\u30BA\u30F3\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3068\u306A\u3063\u305F\u3002`, `${bigWin.opp}\u76F8\u624B\u306E${bigWin.gf}-${bigWin.ga}\u306E\u5FEB\u52DD\u306F\u3001\u898B\u308B\u8005\u306E\u8A18\u61B6\u306B\u6B8B\u3063\u305F\u3002`]) : "";
    const s6 = rank === 1 ? row.w === CONFIG.MATCHDAYS ? "\u305D\u3057\u3066\u7121\u6557\u306E\u307E\u307E\u5168\u52DD\u512A\u52DD\u3068\u3044\u3046\u524D\u4EBA\u672A\u5230\u306E\u5049\u696D\u3092\u6210\u3057\u9042\u3052\u305F\u3002" : pick(["\u6700\u7D42\u7684\u306B\u30C1\u30FC\u30E0\u306F\u30EA\u30FC\u30B0\u306E\u9802\u70B9\u306B\u7ACB\u3061\u3001\u6804\u51A0\u3092\u63B4\u3093\u3060\u3002", "\u305D\u3057\u3066\u6FC0\u3057\u3044\u512A\u52DD\u4E89\u3044\u3092\u5236\u3057\u3001\u5802\u3005\u306E\u30EA\u30FC\u30B0\u5236\u8987\u3092\u9054\u6210\u3057\u305F\u3002"]) : rank <= 3 ? pick([`\u6700\u7D42\u9806\u4F4D\u306F${rank}\u4F4D\u3001\u8868\u5F70\u53F0\u570F\u5185\u3067\u30B7\u30FC\u30BA\u30F3\u3092\u7D42\u3048\u305F\u3002`, `\u3042\u3068\u4E00\u6B69\u3067\u9802\u70B9\u306B\u306F\u5C4A\u304B\u306A\u304B\u3063\u305F\u304C\u3001${rank}\u4F4D\u3068\u3044\u3046\u78BA\u304B\u306A\u6210\u7E3E\u3092\u6B8B\u3057\u305F\u3002`]) : rank <= 7 ? pick([`${rank}\u4F4D\u3067\u4E0A\u4F4D\u4E89\u3044\u3092\u6F14\u3058\u3001\u78BA\u304B\u306A\u624B\u5FDC\u3048\u3092\u6B8B\u3057\u305F\u3002`, `\u6700\u7D42\u7684\u306B${rank}\u4F4D\u3068\u3001\u4E0A\u4F4D\u30B0\u30EB\u30FC\u30D7\u3067\u30B7\u30FC\u30BA\u30F3\u3092\u7DE0\u3081\u304F\u304F\u3063\u305F\u3002`]) : rank <= 13 ? pick([`${rank}\u4F4D\u3068\u4E2D\u4F4D\u306B\u843D\u3061\u7740\u304D\u3001\u6765\u5B63\u3078\u306E\u8AB2\u984C\u3082\u898B\u3048\u305F\u4E00\u5E74\u3068\u306A\u3063\u305F\u3002`, `\u9806\u4F4D\u306F${rank}\u4F4D\u3002\u53EF\u80FD\u6027\u3068\u8AB2\u984C\u304C\u5165\u308A\u6DF7\u3058\u308B\u30B7\u30FC\u30BA\u30F3\u3060\u3063\u305F\u3002`]) : pick([`\u6700\u7D42\u9806\u4F4D\u306F${rank}\u4F4D\u306B\u6C88\u307F\u3001\u6094\u3057\u3055\u306E\u6B8B\u308B\u30B7\u30FC\u30BA\u30F3\u3068\u306A\u3063\u305F\u3002`, `${rank}\u4F4D\u3068\u3044\u3046\u7D50\u679C\u306B\u7D42\u308F\u308A\u3001\u5DFB\u304D\u8FD4\u3057\u306F\u6765\u5B63\u306B\u6301\u3061\u8D8A\u3057\u3068\u306A\u3063\u305F\u3002`]);
    return [s1, s2, s3, s4, sAce, sBig, s6].filter(Boolean).join("");
  }
  function seasonTrend(teams) {
    const c = {};
    STYLES.forEach((s) => c[s] = 0);
    Object.values(teams).forEach((t) => c[t.style] = (c[t.style] || 0) + 1);
    const trend = STYLES.reduce((a, b) => c[b] > c[a] ? b : a, STYLES[0]);
    return { counts: c, trend, counter: counterOf(trend) };
  }
  var ABILITY_KEYS = ["shoot", "pass", "technique", "defense", "physical", "speed"];
  var ABILITY_FULL = { shoot: "\u30B7\u30E5\u30FC\u30C8", pass: "\u30D1\u30B9", speed: "\u30B9\u30D4\u30FC\u30C9", physical: "\u30D5\u30A3\u30B8\u30AB\u30EB", defense: "\u30C7\u30A3\u30D5\u30A7\u30F3\u30B9", technique: "\u30C6\u30AF\u30CB\u30C3\u30AF" };
  var FORMATION_LIST = Object.keys(CONFIG.FORMATIONS);
  var POS_COLOR = { GK: "#f59e0b", DF: "#38bdf8", MF: "#34d399", FW: "#fb7185" };
  var COLOR_PRESETS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#0ea5e9", "#14b8a6"];
  var STYLE_DESC = {
    possession: "\u30DC\u30FC\u30EB\u3092\u4FDD\u6301\u3057\u3066\u4E3B\u5C0E\u6A29\u3092\u63E1\u308A\u3001\u76F8\u624B\u3092\u62BC\u3057\u8FBC\u3080\u3002",
    shortcounter: "\u9AD8\u3044\u4F4D\u7F6E\u3067\u596A\u3044\u3001\u624B\u6570\u3092\u304B\u3051\u305A\u7D20\u65E9\u304F\u4ED5\u7559\u3081\u308B\u3002",
    longcounter: "\u6DF1\u304F\u69CB\u3048\u3066\u596A\u3044\u3001\u4E00\u6C17\u306B\u9577\u3044\u8DDD\u96E2\u3092\u3072\u3063\u304F\u308A\u8FD4\u3059\u3002",
    retreat: "\u81EA\u9663\u3092\u56FA\u304F\u5B88\u308A\u3001\u5805\u5B9F\u306B\u30AB\u30A6\u30F3\u30BF\u30FC\u3092\u72D9\u3046\u3002",
    highpress: "\u524D\u7DDA\u304B\u3089\u7A4D\u6975\u7684\u306B\u5727\u3092\u304B\u3051\u3001\u9AD8\u3044\u4F4D\u7F6E\u3067\u596A\u3046\u3002"
  };
  var REGION = "JAPAN";
  var GAME_TITLE = `MY CLUB ${REGION} LEAGUE`;
  var SHARE_URL = "https://example.com";
  var SHARE_HASHTAG = "#MYCLUBJAPANLEAGUE";
  var NP_KEY = "jl_name_presets";
  var storageAvailable = typeof window !== "undefined" && !!window.storage;
  var memoryPresets = [];
  async function loadPresets() {
    if (storageAvailable) {
      try {
        const r = await window.storage.get(NP_KEY);
        return r ? JSON.parse(r.value) : [];
      } catch {
        return [];
      }
    }
    return memoryPresets;
  }
  async function persistPresets(list) {
    memoryPresets = list;
    if (storageAvailable) {
      try {
        await window.storage.set(NP_KEY, JSON.stringify(list));
      } catch {
      }
    }
  }
  function tint(hex, a) {
    const h = (hex || "#3b82f6").replace("#", "");
    const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(f, 16);
    return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${a})`;
  }
  function teamBg(c1, c2) {
    const a = c1 || "#3b82f6", b = c2 || c1 || "#3b82f6";
    return `linear-gradient(135deg, ${tint(a, 0.78)} 0%, ${tint(a, 0.62)} 38%, ${tint(b, 0.62)} 62%, ${tint(b, 0.78)} 100%), #0b1020`;
  }
  function buildSeasonCanvas({ playerTeam, standings, teams, myStats, rank }) {
    const W = 1600, H = 1200;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    const c1 = playerTeam.color || "#3b82f6";
    const c2 = playerTeam.color2 || c1;
    const posCol = (b) => ({ GK: "#f59e0b", DF: "#38bdf8", MF: "#34d399", FW: "#fb7185" })[b] || "#94a3b8";
    const rr = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };
    const trunc = (s, n) => s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
    ctx.fillStyle = "#0a0f1f";
    ctx.fillRect(0, 0, W, H);
    let g = ctx.createLinearGradient(0, 0, W, 360);
    g.addColorStop(0, tint(c1, 0.55));
    g.addColorStop(0.55, tint(c1, 0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, 360);
    g = ctx.createLinearGradient(W, 0, 0, 300);
    g.addColorStop(0, tint(c2, 0.5));
    g.addColorStop(0.55, tint(c2, 0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, 300);
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, 16, H);
    ctx.fillStyle = c2;
    ctx.fillRect(16, 0, 8, H);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f1f5f9";
    ctx.font = "bold 56px sans-serif";
    ctx.fillText(trunc(playerTeam.name, 16), 60, 92);
    ctx.fillStyle = "#a8b3c4";
    ctx.font = "500 26px sans-serif";
    ctx.fillText(`${GAME_TITLE}  \u30FB  ${playerTeam.formation} / ${STYLE_LABEL[playerTeam.style]} / ${MENTALITY_LABEL[playerTeam.mentality]}`, 62, 132);
    ctx.textAlign = "right";
    ctx.fillStyle = "#8aa0b8";
    ctx.font = "600 24px sans-serif";
    ctx.fillText("FINAL RANK", W - 70, 56);
    ctx.fillStyle = rank === 1 ? "#fbbf24" : "#f1f5f9";
    ctx.font = "bold 104px sans-serif";
    ctx.fillText(String(rank), W - 110, 150);
    ctx.fillStyle = rank === 1 ? "#fbbf24" : "#f1f5f9";
    ctx.font = "bold 34px sans-serif";
    ctx.fillText("\u4F4D", W - 64, 150);
    const lx = 56, ly = 210, lw = 700, lh = 940;
    ctx.fillStyle = "rgba(15,23,42,0.72)";
    rr(lx, ly, lw, lh, 18);
    ctx.fill();
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("\u6700\u7D42\u9806\u4F4D\u8868", lx + 26, ly + 46);
    const colPts = lx + lw - 44, colGD = lx + lw - 120, colL = lx + lw - 190, colD = lx + lw - 250, colW = lx + lw - 310;
    ctx.font = "600 20px sans-serif";
    ctx.fillStyle = "#8aa0b8";
    ctx.textAlign = "center";
    ctx.fillText("\u52DD", colW, ly + 84);
    ctx.fillText("\u5206", colD, ly + 84);
    ctx.fillText("\u6557", colL, ly + 84);
    ctx.fillText("\u5F97\u5931", colGD, ly + 84);
    ctx.fillText("\u70B9", colPts, ly + 84);
    ctx.textAlign = "left";
    ctx.fillText("# \u30AF\u30E9\u30D6", lx + 26, ly + 84);
    const rowH = (lh - 110) / 20, y0 = ly + 100;
    standings.forEach((r, i) => {
      const ry = y0 + i * rowH;
      const isMe = r.teamId === playerTeam.id;
      if (isMe) {
        ctx.fillStyle = tint(c1, 0.4);
        rr(lx + 10, ry + 3, lw - 20, rowH - 4, 8);
        ctx.fill();
      } else if (i % 2) {
        ctx.fillStyle = "rgba(148,163,184,0.06)";
        ctx.fillRect(lx + 10, ry + 3, lw - 20, rowH - 4);
      }
      const tname = teams[r.teamId].name;
      ctx.font = isMe ? "bold 22px sans-serif" : "500 22px sans-serif";
      ctx.fillStyle = i === 0 ? "#fbbf24" : "#cbd5e1";
      ctx.textAlign = "right";
      ctx.fillText(String(i + 1), lx + 46, ry + rowH / 2 + 8);
      ctx.textAlign = "left";
      ctx.fillStyle = isMe ? "#ffffff" : "#e2e8f0";
      ctx.fillText(trunc(tname, 12), lx + 60, ry + rowH / 2 + 8);
      ctx.textAlign = "center";
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 21px sans-serif";
      ctx.fillText(String(r.w), colW, ry + rowH / 2 + 8);
      ctx.fillText(String(r.d), colD, ry + rowH / 2 + 8);
      ctx.fillText(String(r.l), colL, ry + rowH / 2 + 8);
      const gd = r.gf - r.ga;
      ctx.fillText((gd > 0 ? "+" : "") + gd, colGD, ry + rowH / 2 + 8);
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText(String(r.pts), colPts, ry + rowH / 2 + 8);
    });
    const rx = 772, ryTop = 210, rw = W - 772 - 56, rh = 940;
    ctx.fillStyle = "rgba(15,23,42,0.72)";
    rr(rx, ryTop, rw, rh, 18);
    ctx.fill();
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3 & \u9078\u624B\u6210\u7E3E", rx + 26, ryTop + 46);
    const px = rx + 26, py = ryTop + 70, pw = rw - 52, ph = 320;
    const pg = ctx.createLinearGradient(0, py, 0, py + ph);
    pg.addColorStop(0, "#15803d");
    pg.addColorStop(1, "#166534");
    ctx.fillStyle = pg;
    rr(px, py, pw, ph, 12);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(px + 10, py + 10, pw - 20, ph - 20);
    ctx.beginPath();
    ctx.moveTo(px + 10, py + ph / 2);
    ctx.lineTo(px + pw - 10, py + ph / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(px + pw / 2, py + ph / 2, 34, 0, Math.PI * 2);
    ctx.stroke();
    const coords = playerTeam.coords || formationCoords(playerTeam.formation);
    playerTeam.players.forEach((p, i) => {
      const cc = coords[i] || [50, 50];
      const dx = px + cc[0] / 100 * pw, dy = py + cc[1] / 100 * ph;
      const b = broadPos(p.position);
      ctx.beginPath();
      ctx.arc(dx, dy, 17, 0, Math.PI * 2);
      ctx.fillStyle = c1;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.position, dx, dy);
      ctx.fillStyle = "#e8f0e8";
      ctx.font = "600 14px sans-serif";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(trunc(p.name.split(" ")[0], 5), dx, dy + 28);
    });
    const by = py + ph + 20;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#8aa0b8";
    ctx.font = "600 18px sans-serif";
    ctx.fillText("\u63A7\u3048", px + 6, by);
    const benchArr = (playerTeam.bench || []).slice(0, 3);
    const bw = (pw - 96) / 3;
    benchArr.forEach((bp, i) => {
      const bx = px + 84 + i * bw;
      ctx.fillStyle = "#64748b";
      ctx.beginPath();
      ctx.arc(bx + 13, by, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("\u63A7", bx + 13, by + 1);
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "500 19px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(trunc(bp.name, 8), bx + 34, by + 1);
    });
    ctx.textBaseline = "alphabetic";
    const sy = py + ph + 64;
    const cName = rx + 30, cApp = rx + rw - 340, cG = rx + rw - 250, cA = rx + rw - 160, cR = rx + rw - 40;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.font = "600 20px sans-serif";
    ctx.fillStyle = "#8aa0b8";
    ctx.fillText("POS / \u9078\u624B", cName, sy);
    ctx.textAlign = "center";
    ctx.fillText("\u51FA\u5834", cApp, sy);
    ctx.fillText("\u5F97\u70B9", cG, sy);
    ctx.fillText("\u30A2\u30B7", cA, sy);
    ctx.textAlign = "right";
    ctx.fillText("\u5E73\u5747\u70B9", cR, sy);
    const srowH = (rh - (sy - ryTop) - 24) / myStats.length, sy0 = sy + 16;
    myStats.forEach((s, i) => {
      const ry = sy0 + i * srowH, midY = ry + srowH / 2 + 7;
      if (i % 2) {
        ctx.fillStyle = "rgba(148,163,184,0.06)";
        ctx.fillRect(rx + 14, ry + 2, rw - 28, srowH - 3);
      }
      const b = broadPos(s.position);
      ctx.fillStyle = posCol(b);
      rr(cName, ry + srowH / 2 - 13, 52, 26, 6);
      ctx.fill();
      ctx.fillStyle = "#0a0f1f";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(s.position, cName + 26, midY - 1);
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "500 22px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(trunc(s.name, 12), cName + 64, midY);
      ctx.textAlign = "center";
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 21px sans-serif";
      ctx.fillText(String(s.apps), cApp, midY);
      ctx.fillStyle = s.goals ? "#fbbf24" : "#94a3b8";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText(String(s.goals), cG, midY);
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "500 21px sans-serif";
      ctx.fillText(String(s.assists), cA, midY);
      ctx.textAlign = "right";
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "600 21px sans-serif";
      ctx.fillText(s.avg ? s.avg.toFixed(2) : "-", cR, midY);
    });
    return cv;
  }
  function openSeasonImage(args) {
    const cv = buildSeasonCanvas(args);
    const fileName = `${args.playerTeam.name}_season_result.png`;
    const dl = (url) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    try {
      if (cv.toBlob) {
        cv.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          dl(url);
          setTimeout(() => URL.revokeObjectURL(url), 6e4);
        }, "image/png");
      } else {
        dl(cv.toDataURL("image/png"));
      }
    } catch (e) {
    }
  }
  function dataURLtoBlob(dataURL) {
    const c = dataURL.indexOf(",");
    const mime = (dataURL.slice(0, c).match(/:(.*?);/) || [, "image/png"])[1];
    const bin = atob(dataURL.slice(c + 1)), u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return new Blob([u8], { type: mime });
  }
  function shareSeasonToX(args) {
    const { playerTeam, rank } = args;
    const text = `${playerTeam.name}\u306F${rank}\u4F4D\u3067\u30B7\u30FC\u30BA\u30F3\u3092\u7D42\u3048\u307E\u3057\u305F\uFF01

${SHARE_URL}
${SHARE_HASHTAG}`;
    const intent = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    const fileName = `${playerTeam.name}_season_result.png`;
    const openIntent = () => window.open(intent, "_blank", "noopener");
    let cv;
    try {
      cv = buildSeasonCanvas(args);
    } catch (e) {
      openIntent();
      return;
    }
    let file = null;
    try {
      file = new File([dataURLtoBlob(cv.toDataURL("image/png"))], fileName, { type: "image/png" });
    } catch (e) {
      file = null;
    }
    const downloadThenIntent = () => {
      try {
        if (file) {
          const url = URL.createObjectURL(file);
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(() => URL.revokeObjectURL(url), 6e4);
        }
      } catch (e) {
      }
      openIntent();
    };
    if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      navigator.share({ files: [file], text }).catch((err) => {
        if (err && err.name === "AbortError") return;
        downloadThenIntent();
      });
      return;
    }
    downloadThenIntent();
  }
  function Stepper({ value, onDec, onInc, disabledInc, locked }) {
    if (locked) {
      return /* @__PURE__ */ import_react.default.createElement("span", { className: "w-12 text-center font-mono tabular-nums text-amber-400 font-bold" }, value);
    }
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onDec, className: "w-6 h-6 rounded bg-slate-700 text-slate-200 leading-none hover:bg-slate-600 disabled:opacity-30", disabled: value <= CONFIG.MIN_ABILITY }, "\u2212"), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-4 text-center font-mono tabular-nums text-slate-100" }, value), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onInc, className: "w-6 h-6 rounded bg-slate-700 text-slate-200 leading-none hover:bg-slate-600 disabled:opacity-30", disabled: value >= CONFIG.MAX_ABILITY || disabledInc }, "\uFF0B"));
  }
  function PosBadge({ code }) {
    const b = broadPos(code);
    return /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-bold px-1.5 py-0.5 rounded", style: { backgroundColor: POS_COLOR[b] + "22", color: POS_COLOR[b] } }, code);
  }
  function PitchView({ players, coords, color, selectedId, onSelect, ratings, goals, dimIds }) {
    return /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "relative w-full rounded-xl overflow-hidden border border-emerald-900",
        style: { paddingBottom: "118%", background: "linear-gradient(180deg,#0d3b2e,#0a2c22)" }
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute inset-2 border border-emerald-700 rounded", style: { opacity: 0.4 } }),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute left-2 right-2 border-t border-emerald-700", style: { top: "50%", opacity: 0.3 } }),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute rounded-full border border-emerald-700", style: { left: "50%", top: "50%", width: 64, height: 64, transform: "translate(-50%,-50%)", opacity: 0.3 } }),
      players.map((p, i) => {
        const [x, y0] = coords[i] || [50, 50];
        const y = 3 + y0 * 0.9;
        const sel = p.id === selectedId;
        const off = dimIds && dimIds.has(p.id);
        const b = broadPos(p.position);
        const g = goals ? goals[p.id] || 0 : 0;
        return /* @__PURE__ */ import_react.default.createElement(
          "button",
          {
            key: p.id,
            onClick: () => onSelect && onSelect(p.id),
            className: "absolute focus:outline-none",
            style: { left: x + "%", top: y + "%", transform: "translate(-50%,-50%)", opacity: off ? 0.4 : 1 }
          },
          /* @__PURE__ */ import_react.default.createElement(
            "span",
            {
              className: "relative flex items-center justify-center rounded-full font-bold shadow",
              style: {
                width: 26,
                height: 26,
                fontSize: 10,
                background: off ? "#475569" : sel ? "#fff" : POS_COLOR[b],
                color: off ? "#cbd5e1" : sel ? "#0a2c22" : "#06231b",
                border: sel ? `2px solid ${color}` : "2px solid rgba(0,0,0,.25)"
              }
            },
            off ? "\u{1F7E5}" : p.position,
            /* @__PURE__ */ import_react.default.createElement("div", { className: "absolute left-1/2 flex flex-col items-center", style: { transform: "translateX(-50%)", width: 88, top: "108%" } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "px-1 rounded text-center leading-tight", style: { fontSize: 9, maxWidth: 88, whiteSpace: "normal", wordBreak: "break-all", backgroundColor: "rgba(0,0,0,.6)", color: off ? "#94a3b8" : "#f1f5f9", textDecoration: off ? "line-through" : "none" } }, p.name || "\u2014", g > 0 ? ` \u26BD${g}` : ""), ratings && ratings[p.id] != null && /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono font-bold", style: { fontSize: 9, color: ratings[p.id] >= 7 ? "#fbbf24" : "#cbd5e1" } }, ratings[p.id].toFixed(1)))
          )
        );
      })
    );
  }
  function MentalitySelector({ value, onChange }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-2" }, MENTALITIES.map((m) => {
      const active = value === m;
      return /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          key: m,
          onClick: () => onChange(m),
          className: "py-2 px-1 rounded-lg text-sm border " + (active ? "bg-sky-500 text-slate-950 border-sky-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500")
        },
        MENTALITY_LABEL[m]
      );
    }));
  }
  function StyleMatchup({ style }) {
    const MARK = { AA: "\u25B2\u25B2", A: "\u25B2", "-": "\uFF0D", D: "\u25BC", DD: "\u25BC\u25BC" };
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-3 flex flex-wrap gap-x-3 gap-y-1" }, STYLES.map((opp) => {
      const mk = styleMatchupMark(style, opp);
      const col = mk === "AA" || mk === "A" ? "#34d399" : mk === "D" || mk === "DD" ? "#fb7185" : "#64748b";
      return /* @__PURE__ */ import_react.default.createElement("span", { key: opp, className: "text-xs text-slate-300" }, STYLE_LABEL[opp], /* @__PURE__ */ import_react.default.createElement("span", { className: "font-bold ml-0.5", style: { color: col } }, MARK[mk]));
    }));
  }
  function StyleSelector({ value, onChange, trend }) {
    return /* @__PURE__ */ import_react.default.createElement("div", null, trend && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-300 mb-2" }, "\u4ECA\u5B63\u306E\u30C8\u30EC\u30F3\u30C9\u306F ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-amber-300 font-semibold" }, STYLE_LABEL[trend]), " \u3067\u3059"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-2" }, STYLES.map((s) => {
      const active = value === s;
      return /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          key: s,
          onClick: () => onChange(s),
          className: "py-2 px-1 rounded-lg text-sm border " + (active ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500")
        },
        STYLE_LABEL[s]
      );
    })), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-2 pt-2 border-t border-slate-700/60" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-500 mb-1" }, "\u76F8\u6027\uFF08\u25B2\u6709\u5229\uFF0F\u25BC\u4E0D\u5229\uFF09"), /* @__PURE__ */ import_react.default.createElement(StyleMatchup, { style: value })));
  }
  function TitleScreen({ onStart }) {
    const [help, setHelp] = (0, import_react.useState)(false);
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "min-h-screen flex flex-col items-center justify-center px-6 text-center" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "uppercase tracking-widest text-emerald-400 text-xs mb-3" }, "Build Your Ideal Club"), /* @__PURE__ */ import_react.default.createElement("h1", { className: "text-4xl sm:text-5xl font-black tracking-tight text-slate-50 leading-tight" }, "MY CLUB ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-emerald-400" }, REGION), " LEAGUE"), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-5 text-slate-300 max-w-md text-lg font-medium leading-relaxed" }, "\u3042\u306A\u305F\u3060\u3051\u306E\u30AF\u30E9\u30D6\u3067\u3001\u3042\u306A\u305F\u3060\u3051\u306E\u6804\u5149\u3092\u3002"), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-2 text-slate-400 max-w-md leading-relaxed text-center" }, "\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u30B9\u30AB\u30C3\u30C9\u3092\u69CB\u7BC9\u3057\u3001\u516820\u30C1\u30FC\u30E0\u306E\u9802\u70B9\u3092\u76EE\u6307\u305B\u3002", /* @__PURE__ */ import_react.default.createElement("br", null), "\u30B7\u30FC\u30BA\u30F3\u306E\u30C8\u30EC\u30F3\u30C9\u3092\u8AAD\u307F\u3001\u76EE\u6307\u3059\u306F", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-amber-400 font-semibold" }, "38\u6226\u3001\u5168\u52DD\u512A\u52DD"), "\u3002"), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-10 flex flex-col gap-3 w-full max-w-xs" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onStart, className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-lg transition" }, "\u306F\u3058\u3081\u304B\u3089"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setHelp(true), className: "border border-slate-700 hover:border-slate-500 text-slate-200 py-3 rounded-lg transition" }, "\u904A\u3073\u65B9")), help && /* @__PURE__ */ import_react.default.createElement(HowToPlay, { onClose: () => setHelp(false) }), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-8 text-slate-600 text-xs tracking-widest" }, "ver.1.0.0"));
  }
  function HowToPlay({ onClose }) {
    const rows = [
      ["1. \u30AF\u30E9\u30D6\u4F5C\u6210", "\u30AF\u30E9\u30D6\u540D\u30FB\u30AB\u30E9\u30FC\u30FB\u30B9\u30BF\u30A4\u30EB\u30FB\u6226\u8853\u610F\u8B58\u30FB\u5E03\u9663\u3092\u6C7A\u3081\u3001\u5148\u767A11\u4EBA\u3068\u63A7\u30483\u4EBA\u3092\u540D\u524D\u3068\u80FD\u529B\u3064\u304D\u3067\u767B\u9332\u3059\u308B\u3002\u63A7\u3048\u306F\u56FA\u5B9A\u30DD\u30B8\u30B7\u30E7\u30F3\u3092\u6301\u305F\u305A\u3001\u3069\u306E\u4F4D\u7F6E\u306B\u3082\u6295\u5165\u3067\u304D\u308B\u3002"],
      ["2. \u80FD\u529B\u914D\u5206", "\u30C1\u30FC\u30E0\u7DCF\u67A0250\u30DD\u30A4\u30F3\u30C8\u309214\u4EBA\uFF08\u5148\u767A11\uFF0B\u63A7\u30483\uFF09\u306B\u914D\u5206\u3059\u308B\u30026\u80FD\u529B\uFF08\u30B7\u30E5\u30FC\u30C8/\u30D1\u30B9/\u30C6\u30AF\u30CB\u30C3\u30AF/\u30C7\u30A3\u30D5\u30A7\u30F3\u30B9/\u30D5\u30A3\u30B8\u30AB\u30EB/\u30B9\u30D4\u30FC\u30C9\u3001\u54041\u301C5\uFF09\u3092GK\u542B\u3081\u5272\u308A\u632F\u308B\u3002\u4E00\u90E8\u306B\u80FD\u529B\u3092\u96C6\u4E2D\u3055\u305B\u308B\u3088\u308A\u3001\u7A74\u306E\u5C11\u306A\u3044\u7D44\u7E54\u7684\u306A\u7DE8\u6210\u306E\u307B\u3046\u304C\u5F37\u304F\u306A\u308A\u3084\u3059\u3044\u3002AI\u306F\u5148\u767A\u306B185\u301C220\u3067\u500B\u5225\u6C7A\u5B9A\u3002"],
      ["3. \u30B9\u30BF\u30A4\u30EB(5\u7A2E)\u3068\u76F8\u6027", "\u30DD\u30BC\u30C3\u30B7\u30E7\u30F3/\u30B7\u30E7\u30FC\u30C8\u30AB\u30A6\u30F3\u30BF\u30FC/\u30ED\u30F3\u30B0\u30AB\u30A6\u30F3\u30BF\u30FC/\u30EA\u30C8\u30EA\u30FC\u30C8/\u30CF\u30A4\u30D7\u30EC\u30B9\u3002\u5404\u30B9\u30BF\u30A4\u30EB\u306F2\u3064\u306B\u5F37\u304F2\u3064\u306B\u5F31\u3044\u3002\u4ECA\u5B63\u306E\u6D41\u884C\u306B\u523A\u3055\u308B\u4E00\u624B\u3092\u8AAD\u3082\u3046\u3002"],
      ["4. \u6226\u8853\u610F\u8B58", "\u653B\u6483\u7684/\u30D0\u30E9\u30F3\u30B9/\u5B88\u5099\u7684\u3002\u5E03\u9663\u306E\u5F62\u306F\u5909\u3048\u305A\u306B\u653B\u5B88\u306E\u91CD\u307F\u4ED8\u3051\u3092\u8ABF\u6574\u3057\u3001\u8A66\u5408\u7D50\u679C\u306B\u53CD\u6620\u3055\u308C\u308B\u3002"],
      ["5. \u6226\u8853\u306E\u5909\u66F4", "\u5E03\u9663\u30FB\u30B9\u30BF\u30A4\u30EB\u30FB\u6226\u8853\u610F\u8B58\u30FB\u9078\u624B\u914D\u7F6E\u306F\u3001\u30B7\u30FC\u30BA\u30F3\u753B\u9762\uFF08\u4EE5\u964D\u306E\u65E2\u5B9A\uFF09\uFF0F\u8A66\u5408\u524D\uFF08\u305D\u306E\u8A66\u5408\u306E\u307F\uFF09\uFF0F\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0\u3067\u5909\u66F4\u3067\u304D\u308B\u3002\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0\u3067\u306F\u63A7\u3048\u3068\u306E\u4EA4\u4EE3\u3082\u53EF\u80FD\u3002"],
      ["6. \u8A66\u5408\u3068\u30B7\u30FC\u30BA\u30F3", "\u30DB\u30FC\u30E0&\u30A2\u30A6\u30A7\u30A4\u516838\u7BC0\u3002\u30D5\u30EB\u30BF\u30A4\u30E0\u89B3\u6226\u30FB\u30B9\u30AD\u30C3\u30D7\u306E\u3069\u3061\u3089\u3067\u3082\u7D50\u679C\u306F\u540C\u3058\u3002\u5F97\u70B9\u3084\u30C1\u30E3\u30F3\u30B9\u306B\u52A0\u3048\u30D5\u30A1\u30A6\u30EB/\u30AA\u30D5\u30B5\u30A4\u30C9/\u30AB\u30FC\u30C9\uFF08\u30A4\u30A8\u30ED\u30FC2\u679A\u3067\u9000\u5834\uFF09\u3082\u767A\u751F\u3059\u308B\u3002\u8A66\u5408\u8A73\u7D30\u3067\u30B9\u30BF\u30C3\u30C4\u30FB\u30ED\u30B0\u30FB\u5E03\u9663\u30FB\u8A55\u4FA1\u70B9\u3092\u78BA\u8A8D\u3067\u304D\u3001\u6700\u5F8C\u306B\u5F97\u70B9\u738B\u30FB\u30EA\u30FC\u30B0MVP\u30FB38\u52DD\u5224\u5B9A\u3002\u7D42\u4E86\u5F8C\u306FX\u3078\u306E\u5171\u6709\u3082\u3067\u304D\u308B\u3002"]
    ];
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50", onClick: onClose }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-5", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-lg font-bold text-slate-50 mb-3" }, "\u904A\u3073\u65B9"), /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-3" }, rows.map(([t, d]) => /* @__PURE__ */ import_react.default.createElement("div", { key: t }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-emerald-400 font-semibold text-sm" }, t), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-300 text-sm" }, d)))), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onClose, className: "mt-5 w-full bg-slate-700 hover:bg-slate-600 text-slate-100 py-2 rounded-lg" }, "\u9589\u3058\u308B")));
  }
  function freshRoster(formation) {
    const slots = formationSlots(formation);
    return slots.map((code) => ({ id: uid(), position: code, foreign: false, name: "", ability: baseAbility() }));
  }
  function freshBench(n = 3) {
    return Array.from({ length: n }, () => ({ id: uid(), position: "SUB", foreign: false, name: "", ability: baseAbility() }));
  }
  function CreateScreen({ draft, seed, onConfirm, onBack }) {
    const cap = CONFIG.PLAYER_CAP;
    const [clubName, setClubName] = (0, import_react.useState)(seed ? seed.name : "");
    const [color, setColor] = (0, import_react.useState)(seed ? seed.color : COLOR_PRESETS[3]);
    const [color2, setColor2] = (0, import_react.useState)(seed ? seed.color2 || COLOR_PRESETS[5] : COLOR_PRESETS[5]);
    const [formation, setFormation] = (0, import_react.useState)(seed ? seed.formation : "4-4-2");
    const [style, setStyle] = (0, import_react.useState)(seed ? seed.style : "possession");
    const [mentality, setMentality] = (0, import_react.useState)(seed ? seed.mentality : "balanced");
    const [players, setPlayers] = (0, import_react.useState)(() => seed ? seed.players.map((p) => ({ ...p, ability: { ...p.ability } })) : freshRoster("4-4-2"));
    const [bench, setBench] = (0, import_react.useState)(() => seed && seed.bench && seed.bench.length ? seed.bench.map((p) => ({ ...p, ability: { ...p.ability } })) : freshBench(3));
    const [selectedId, setSelectedId] = (0, import_react.useState)(null);
    const [presets, setPresets] = (0, import_react.useState)([]);
    const [presetLabel, setPresetLabel] = (0, import_react.useState)("");
    (0, import_react.useEffect)(() => {
      loadPresets().then(setPresets);
    }, []);
    const eff = (0, import_react.useMemo)(() => transformLayout(formation, mentality), [formation, mentality]);
    const effPlayers = players.map((p, i) => ({ ...p, position: eff.slots[i] }));
    const teamName = clubName.trim();
    const sumAb = (arr) => arr.reduce((s, p) => s + ABILITY_KEYS.reduce((t, k) => t + p.ability[k], 0), 0);
    const used = sumAb(players) + sumAb(bench);
    const remaining = cap - used;
    const changeFormation = (f) => {
      setFormation(f);
      const slots = formationSlots(f);
      setPlayers((prev) => prev.map((p, i) => ({ ...p, position: slots[i] })));
    };
    const bump = (setter, idx, key, delta) => setter((prev) => prev.map((p, i) => {
      if (i !== idx) return p;
      const nv = p.ability[key] + delta;
      if (nv < CONFIG.MIN_ABILITY || nv > CONFIG.MAX_ABILITY) return p;
      if (delta > 0 && remaining <= 0) return p;
      return { ...p, ability: { ...p.ability, [key]: nv } };
    }));
    const setAbility = (idx, key, delta) => bump(setPlayers, idx, key, delta);
    const setBenchAbility = (idx, key, delta) => bump(setBench, idx, key, delta);
    const setPlayerName = (idx, v) => setPlayers((prev) => prev.map((p, i) => i === idx ? { ...p, name: v } : p));
    const setBenchName = (idx, v) => setBench((prev) => prev.map((p, i) => i === idx ? { ...p, name: v } : p));
    const randName = (p) => p.foreign ? makeForeignName() : makeJpName();
    const randomNames = () => {
      setPlayers((ps) => ps.map((p) => ({ ...p, name: randName(p) })));
      setBench((bs) => bs.map((p) => ({ ...p, name: makeJpName() })));
    };
    const randomParams = () => {
      const benchBudgets = bench.map(() => randint(15, 17));
      const starterCap = cap - benchBudgets.reduce((a, b) => a + b, 0);
      setPlayers((ps) => {
        const r = ps.map((p) => ({ ...p, ability: baseAbility() }));
        distributePoints(r, starterCap, formation, style, true, 0.32);
        return r.map((p) => ({ ...p }));
      });
      setBench((bs) => {
        const extra = ["speed", "physical", "pass", "technique"][randint(0, 3)];
        const primaries = ["shoot", "defense", extra].sort(() => Math.random() - 0.5);
        return bs.map((p, i) => {
          const ab = baseAbility();
          let rem = benchBudgets[i] - 6;
          const prim = primaries[i % primaries.length];
          const toPrim = Math.min(CONFIG.MAX_ABILITY - ab[prim], rem);
          ab[prim] += toPrim;
          rem -= toPrim;
          let g = 400;
          while (rem > 0 && g-- > 0) {
            const k = ABILITY_KEYS[randint(0, 5)];
            const lim = k === prim ? CONFIG.MAX_ABILITY : CONFIG.MAX_ABILITY - 1;
            if (ab[k] < lim) {
              ab[k]++;
              rem--;
            }
          }
          return { ...p, ability: ab };
        });
      });
    };
    const randomBoth = () => {
      randomNames();
      randomParams();
    };
    const saveCurrentPreset = () => {
      if (players.every((p) => p.name.trim() === "") && bench.every((p) => p.name.trim() === "")) return;
      const label = (presetLabel.trim() || `\u30BB\u30C3\u30C8${presets.length + 1}`).slice(0, 20);
      const snap = (p) => ({ name: p.name, ability: { ...p.ability } });
      const entry = { label, players: players.map(snap), bench: bench.map(snap) };
      const next = [entry, ...presets.filter((p) => p.label !== label)].slice(0, 12);
      setPresets(next);
      persistPresets(next);
      setPresetLabel("");
    };
    const applyPreset = (preset) => {
      if (preset.players) {
        setPlayers((prev) => prev.map((p, i) => preset.players[i] ? { ...p, name: preset.players[i].name, ability: { ...p.ability, ...preset.players[i].ability } } : p));
        if (preset.bench) setBench((prev) => prev.map((p, i) => preset.bench[i] ? { ...p, name: preset.bench[i].name, ability: { ...p.ability, ...preset.bench[i].ability } } : p));
      } else if (preset.names) {
        setPlayers((prev) => prev.map((p, i) => preset.names[i] != null ? { ...p, name: preset.names[i] } : p));
      }
    };
    const deletePreset = (label) => {
      const next = presets.filter((p) => p.label !== label);
      setPresets(next);
      persistPresets(next);
    };
    const namesOK = clubName.trim() !== "" && players.every((p) => p.name.trim() !== "") && bench.every((p) => p.name.trim() !== "");
    const overCap = used > cap;
    const canStart = namesOK && !overCap;
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "min-h-screen px-4 py-5 max-w-3xl mx-auto pb-24" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onBack, className: "text-slate-400 text-sm hover:text-slate-200" }, "\u2190 \u623B\u308B"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-lg font-bold text-slate-50" }, "\u30AF\u30E9\u30D6\u4F5C\u6210"), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-12" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "sticky top-0 z-20 bg-slate-900 border border-slate-700 rounded-xl p-3 mb-4 flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400" }, "\u80FD\u529B\u4E0A\u9650"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-2xl font-black font-mono tabular-nums text-slate-50" }, cap, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sm text-slate-500" }, " pt"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "text-right" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400" }, "\u6B8B\u308A\u5272\u308A\u632F\u308A\u53EF\u80FD"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-2xl font-black font-mono tabular-nums " + (remaining < 0 ? "text-rose-400" : remaining === 0 ? "text-amber-400" : "text-emerald-400") }, remaining))), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-1" }, "\u30AF\u30E9\u30D6\u540D"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex gap-2 mb-4" }, /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        value: clubName,
        onChange: (e) => setClubName(e.target.value),
        placeholder: "\u4F8B\uFF1A\u30C8\u30EC\u30B8\u30E3\u30FC\u30BA\u6771\u4EAC",
        className: "flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:border-emerald-500 outline-none"
      }
    ), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => {
      setClubName(makeTeamName(/* @__PURE__ */ new Set()));
      const i = randint(0, COLOR_PRESETS.length - 1);
      let j = randint(0, COLOR_PRESETS.length - 1);
      if (j === i) j = (j + 1) % COLOR_PRESETS.length;
      setColor(COLOR_PRESETS[i]);
      setColor2(COLOR_PRESETS[j]);
    }, className: "px-3 rounded-lg border border-slate-700 text-slate-300 text-sm hover:border-slate-500 whitespace-nowrap" }, "\u30E9\u30F3\u30C0\u30E0")), /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-2" }, "\u30C1\u30FC\u30E0\u30AB\u30E9\u30FC\uFF08\u30E1\u30A4\u30F3\uFF0F\u30B5\u30D6\uFF09"), /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-500 w-10" }, "\u30E1\u30A4\u30F3"), COLOR_PRESETS.map((c) => /* @__PURE__ */ import_react.default.createElement("button", { key: c, onClick: () => setColor(c), className: "w-7 h-7 rounded-full border-2", style: { backgroundColor: c, borderColor: color === c ? "#fff" : "transparent" } })), /* @__PURE__ */ import_react.default.createElement("input", { type: "color", value: color, onChange: (e) => setColor(e.target.value), className: "w-7 h-7 rounded bg-transparent border border-slate-700" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-500 w-10" }, "\u30B5\u30D6"), COLOR_PRESETS.map((c) => /* @__PURE__ */ import_react.default.createElement("button", { key: c, onClick: () => setColor2(c), className: "w-7 h-7 rounded-full border-2", style: { backgroundColor: c, borderColor: color2 === c ? "#fff" : "transparent" } })), /* @__PURE__ */ import_react.default.createElement("input", { type: "color", value: color2, onChange: (e) => setColor2(e.target.value), className: "w-7 h-7 rounded bg-transparent border border-slate-700" }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-3 h-12 rounded-lg border border-slate-700", style: { background: teamBg(color, color2) } })), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-2" }, "\u30B9\u30BF\u30A4\u30EB"), /* @__PURE__ */ import_react.default.createElement(StyleSelector, { value: style, onChange: setStyle, trend: draft?.trend?.trend }), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mt-2" }, STYLE_DESC[style])), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-2" }, "\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-2 mb-2" }, FORMATION_LIST.map((f) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: f,
        onClick: () => changeFormation(f),
        className: "py-2 rounded-lg font-mono text-sm border " + (formation === f ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500")
      },
      f
    ))), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400" }, CONFIG.FORMATIONS[formation].note)), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-2" }, "\u6226\u8853\u610F\u8B58"), /* @__PURE__ */ import_react.default.createElement(MentalitySelector, { value: mentality, onChange: setMentality }), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mt-2" }, mentality === "attacking" ? "\u653B\u6483\u306B\u91CD\u5FC3\u3002\u5F97\u70B9\u529B\u304C\u4E0A\u304C\u308B\u53CD\u9762\u3001\u5931\u70B9\u30EA\u30B9\u30AF\u3082\u5897\u3048\u308B\u3002" : mentality === "defensive" ? "\u5B88\u5099\u306B\u91CD\u5FC3\u3002\u5931\u70B9\u3092\u6291\u3048\u308B\u304C\u3001\u5F97\u70B9\u529B\u306F\u843D\u3061\u308B\u3002" : "\u653B\u5B88\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u53D6\u3063\u305F\u6A19\u6E96\u7684\u306A\u610F\u8B58\u3002")), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm text-slate-300 mb-2" }, "\u30DD\u30B8\u30B7\u30E7\u30F3\u4FEF\u77B0\u56F3\uFF08", formation, "\uFF0F\u30BF\u30C3\u30D7\u3067\u8A72\u5F53\u9078\u624B\u3078\uFF09"), /* @__PURE__ */ import_react.default.createElement("div", { className: "max-w-xs sm:max-w-sm mx-auto" }, /* @__PURE__ */ import_react.default.createElement(PitchView, { players: effPlayers, coords: eff.coords, color, selectedId, onSelect: setSelectedId }))), /* @__PURE__ */ import_react.default.createElement("section", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2" }, /* @__PURE__ */ import_react.default.createElement("label", { className: "text-sm text-slate-300" }, "\u9078\u624B\u767B\u9332"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-500" }, "\u30E9\u30F3\u30C0\u30E0"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: randomNames, className: "text-xs bg-slate-700 hover:bg-slate-600 text-slate-100 px-2.5 py-1.5 rounded-lg" }, "\u540D\u524D"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: randomParams, className: "text-xs bg-slate-700 hover:bg-slate-600 text-slate-100 px-2.5 py-1.5 rounded-lg" }, "\u30D1\u30E9\u30E1\u30FC\u30BF"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: randomBoth, className: "text-xs bg-slate-700 hover:bg-slate-600 text-slate-100 px-2.5 py-1.5 rounded-lg" }, "\u4E21\u65B9"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-800/60 border border-slate-700 rounded-lg p-2.5 mb-3" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 mb-2" }, /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        value: presetLabel,
        onChange: (e) => setPresetLabel(e.target.value),
        placeholder: "\u4FDD\u5B58\u540D",
        className: "flex-1 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-100 focus:border-emerald-500 outline-none"
      }
    ), /* @__PURE__ */ import_react.default.createElement("button", { onClick: saveCurrentPreset, className: "text-xs bg-emerald-600 hover:bg-emerald-500 text-slate-50 px-3 py-1.5 rounded-lg whitespace-nowrap" }, "\u4FDD\u5B58")), presets.length === 0 ? /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-500" }, "\u540D\u524D\u3068\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002", storageAvailable ? "" : "\uFF08\u3053\u306E\u74B0\u5883\u3067\u306F\u4ECA\u56DE\u306E\u307F\uFF09") : /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-wrap gap-1.5" }, presets.map((p) => /* @__PURE__ */ import_react.default.createElement("span", { key: p.label, className: "inline-flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-full pl-2.5 pr-1 py-0.5 text-xs" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => applyPreset(p), className: "text-slate-200 hover:text-emerald-300" }, p.label), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => deletePreset(p.label), className: "w-4 h-4 rounded-full bg-slate-700 text-slate-400 hover:bg-rose-700 hover:text-white leading-none text-xs" }, "\xD7"))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, players.map((p, idx) => /* @__PURE__ */ import_react.default.createElement("div", { key: p.id, className: "bg-slate-800 border rounded-lg p-2 " + (p.id === selectedId ? "border-emerald-400" : "border-slate-700") }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 mb-2" }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: eff.slots[idx] }), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        value: p.name,
        maxLength: 12,
        onChange: (e) => setPlayerName(idx, e.target.value),
        onFocus: () => setSelectedId(p.id),
        placeholder: "\u9078\u624B " + (idx + 1),
        className: "flex-1 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-slate-100 focus:border-emerald-500 outline-none"
      }
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-mono text-slate-500 tabular-nums" }, "\u8A08", ABILITY_KEYS.reduce((t, k) => t + p.ability[k], 0))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-x-2 gap-y-1.5" }, ABILITY_KEYS.map((k) => /* @__PURE__ */ import_react.default.createElement("div", { key: k, className: "flex flex-col gap-0.5" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-400" }, ABILITY_FULL[k]), /* @__PURE__ */ import_react.default.createElement(Stepper, { value: p.ability[k], onDec: () => setAbility(idx, k, -1), onInc: () => setAbility(idx, k, 1), disabledInc: remaining <= 0 }))))))), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-300 mt-4 mb-2" }, "\u63A7\u3048 3\u540D"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, bench.map((p, idx) => /* @__PURE__ */ import_react.default.createElement("div", { key: p.id, className: "bg-slate-800 border border-slate-700 rounded-lg p-2" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 mb-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-bold px-1.5 py-0.5 rounded", style: { backgroundColor: "#64748b22", color: "#94a3b8" } }, "\u63A7\u3048"), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        value: p.name,
        maxLength: 12,
        onChange: (e) => setBenchName(idx, e.target.value),
        placeholder: "\u63A7\u3048 " + (idx + 1),
        className: "flex-1 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-slate-100 focus:border-emerald-500 outline-none"
      }
    ), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-mono text-slate-500 tabular-nums" }, "\u8A08", ABILITY_KEYS.reduce((t, k) => t + p.ability[k], 0))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-x-2 gap-y-1.5" }, ABILITY_KEYS.map((k) => /* @__PURE__ */ import_react.default.createElement("div", { key: k, className: "flex flex-col gap-0.5" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-400" }, ABILITY_FULL[k]), /* @__PURE__ */ import_react.default.createElement(Stepper, { value: p.ability[k], onDec: () => setBenchAbility(idx, k, -1), onInc: () => setBenchAbility(idx, k, 1), disabledInc: remaining <= 0 })))))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4" }, !namesOK && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-rose-400 text-sm mb-1" }, "\u30AF\u30E9\u30D6\u540D\u3068\u5168\u9078\u624B\u30FB\u63A7\u3048\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"), overCap && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-rose-400 text-sm mb-1" }, "\u80FD\u529B\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059"), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => onConfirm({ id: uid(), name: teamName, color, color2, formation, style, mentality, players: effPlayers, coords: eff.coords, bench: bench.map((p) => ({ ...p, ability: { ...p.ability } })), isPlayer: true, cap }),
        disabled: !canStart,
        className: "w-full py-3 rounded-lg font-bold transition " + (canStart ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-600 cursor-not-allowed")
      },
      "\u30B7\u30FC\u30BA\u30F3\u958B\u59CB"
    )));
  }
  function StandingsTable({ standings, teams, playerTeamId }) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ import_react.default.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ import_react.default.createElement("thead", null, /* @__PURE__ */ import_react.default.createElement("tr", { className: "text-slate-500 text-xs border-b border-slate-700" }, /* @__PURE__ */ import_react.default.createElement("th", { className: "text-left py-1.5 pl-1 font-medium" }, "#"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-left py-1.5 font-medium" }, "\u30AF\u30E9\u30D6"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 font-medium" }, "\u8A66"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 font-medium" }, "\u52DD"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 font-medium" }, "\u5206"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 font-medium" }, "\u6557"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 font-medium" }, "\u5DEE"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center py-1.5 pr-1 font-medium" }, "\u70B9"))), /* @__PURE__ */ import_react.default.createElement("tbody", { className: "font-mono tabular-nums" }, standings.map((r, i) => {
      const t = teams[r.teamId];
      const isPlayer = r.teamId === playerTeamId;
      return /* @__PURE__ */ import_react.default.createElement("tr", { key: r.teamId, className: "border-b border-slate-800 " + (isPlayer ? "bg-slate-800" : ""), style: isPlayer ? { boxShadow: `inset 3px 0 0 ${t.color}` } : {} }, /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1.5 pl-2 " + (i < 1 ? "text-amber-400 font-bold" : i < 3 ? "text-emerald-400" : i >= 17 ? "text-rose-400" : "text-slate-500") }, i + 1), /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1.5 font-sans" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "inline-flex items-center gap-1.5" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-2 h-2 rounded-full inline-block", style: { backgroundColor: t.color } }), /* @__PURE__ */ import_react.default.createElement("span", { className: isPlayer ? "text-slate-50 font-semibold" : "text-slate-200" }, t.name), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-slate-500" }, STYLE_LABEL[t.style]))), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-400" }, r.played), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-200" }, r.w), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-400" }, r.d), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-400" }, r.l), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-300" }, r.gf - r.ga > 0 ? "+" : "", r.gf - r.ga), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center pr-2 font-bold text-slate-50" }, r.pts));
    }))));
  }
  function playerHalfSkip(homeT, awayT, isHome, round) {
    const ctx = { booked: /* @__PURE__ */ new Set(), off: /* @__PURE__ */ new Set() };
    const h1 = buildHalfTimeline(homeT, awayT, 1, ctx);
    const pg = h1.goalsHome.length, ag = h1.goalsAway.length;
    const playerGoals = isHome ? pg : ag, oppGoals = isHome ? ag : pg;
    const opp = isHome ? awayT : homeT;
    const oppAdj = aiHalftimeAdjust(opp, oppGoals - playerGoals);
    const sub = autoHalftimeSubs(isHome ? homeT : awayT, playerGoals - oppGoals);
    const pAdj = sub.team;
    const h2home = applySendOffs(isHome ? pAdj : oppAdj, ctx.off);
    const h2away = applySendOffs(isHome ? oppAdj : pAdj, ctx.off);
    const h2 = buildHalfTimeline(h2home, h2away, 2, ctx);
    const recHome = isHome ? pAdj : homeT, recAway = isHome ? awayT : pAdj;
    const rec = buildMatchRecord(recHome, recAway, [h1, h2], round);
    rec.pSubs = sub.subs.map((s) => s.inId);
    return rec;
  }
  function playMatch(home, away, involvesPlayer, round) {
    const sim = involvesPlayer ? simulateDetailed(home, away) : simulateSimple(home, away);
    const hg = assignGoals(home, sim.homeScore);
    const ag = assignGoals(away, sim.awayScore);
    const hr = computeRatings(home, sim.homeScore, sim.awayScore, hg.scorers, hg.assists);
    const ar = computeRatings(away, sim.awayScore, sim.homeScore, ag.scorers, ag.assists);
    const hd = disciplineCounts(home), ad = disciplineCounts(away);
    return {
      round,
      home: home.id,
      away: away.id,
      homeScore: sim.homeScore,
      awayScore: sim.awayScore,
      possession: sim.possession,
      homeFormation: home.formation,
      awayFormation: away.formation,
      homeStyle: home.style,
      awayStyle: away.style,
      homeMentality: home.mentality,
      awayMentality: away.mentality,
      homeScorers: hg.scorers,
      awayScorers: ag.scorers,
      homeAssists: hg.assists,
      awayAssists: ag.assists,
      homeEvents: hg.events,
      awayEvents: ag.events,
      homeFouls: hd.fouls,
      awayFouls: ad.fouls,
      homeOffsides: hd.offsides,
      awayOffsides: ad.offsides,
      homeYellows: hd.yellows,
      awayYellows: ad.yellows,
      homeReds: hd.reds,
      awayReds: ad.reds,
      homeRatings: hr,
      awayRatings: ar
    };
  }
  function TacticsEditor({ team, allowSubs = false, compact = false, sentOff, onChange }) {
    const [formation, setFormation] = (0, import_react.useState)(team.formation);
    const [style, setStyle] = (0, import_react.useState)(team.style);
    const [mentality, setMentality] = (0, import_react.useState)(team.mentality);
    const [order, setOrder] = (0, import_react.useState)(() => team.players.slice());
    const [bench, setBench] = (0, import_react.useState)(() => team.bench ? team.bench.slice() : []);
    const [sel, setSel] = (0, import_react.useState)(null);
    const [benchSel, setBenchSel] = (0, import_react.useState)(null);
    const isOff = (id) => !!(sentOff && sentOff.has(id));
    const slots = formationSlots(formation);
    const coords = formationCoords(formation);
    const display = order.map((p, i) => ({ ...p, position: slots[i] }));
    (0, import_react.useEffect)(() => {
      onChange && onChange({ formation, style, mentality, players: order.map((p, i) => ({ ...p, position: slots[i] })), bench });
    }, [formation, style, mentality, order, bench]);
    const doSub = (starterIdx, benchIdx) => {
      const inP = bench[benchIdx], outP = order[starterIdx];
      const nextOrder = order.slice();
      nextOrder[starterIdx] = inP;
      const nextBench = bench.slice();
      nextBench[benchIdx] = outP;
      setOrder(nextOrder);
      setBench(nextBench);
      setSel(null);
      setBenchSel(null);
    };
    const onPitchSelect = (id) => {
      const idx = order.findIndex((p) => p.id === id);
      if (idx < 0) return;
      if (isOff(order[idx].id)) return;
      if (benchSel != null) {
        if (idx === 0) return;
        doSub(idx, benchSel);
        return;
      }
      if (idx === 0) return;
      if (sel == null) {
        setSel(idx);
        return;
      }
      if (sel === idx) {
        setSel(null);
        return;
      }
      const next = order.slice();
      [next[sel], next[idx]] = [next[idx], next[sel]];
      setOrder(next);
      setSel(null);
    };
    const onBenchTap = (benchIdx) => {
      if (isOff(bench[benchIdx].id)) return;
      if (sel != null) {
        doSub(sel, benchIdx);
        return;
      }
      setBenchSel((prev) => prev === benchIdx ? null : benchIdx);
    };
    const selId = sel != null ? order[sel].id : null;
    const TBL = ["shoot", "pass", "technique", "defense", "physical", "speed"];
    const TBL_H = ["\u30B7", "\u30D1", "\u30C6", "\u30C7", "\u30D5", "\u30B9"];
    const Row = ({ pos, p }) => {
      const off = isOff(p.id);
      return /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-1 py-1 border-b border-slate-800", style: { fontSize: 11, opacity: off ? 0.45 : 1 } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-9 shrink-0" }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: off ? "\u9000" : pos })), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 min-w-0 truncate text-slate-200", style: { textDecoration: off ? "line-through" : "none" } }, p.name, off ? " \u{1F7E5}" : ""), TBL.map((k) => /* @__PURE__ */ import_react.default.createElement("span", { key: k, className: "w-5 text-center font-mono text-slate-300" }, p.ability[k])));
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u30D5\u30A9\u30FC\u30E1\u30FC\u30B7\u30E7\u30F3"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-1.5" }, FORMATION_LIST.map((f) => /* @__PURE__ */ import_react.default.createElement("button", { key: f, onClick: () => {
      setFormation(f);
      setSel(null);
      setBenchSel(null);
    }, className: "py-1.5 rounded font-mono text-xs border " + (formation === f ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700") }, f)))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u30B9\u30BF\u30A4\u30EB"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-1.5" }, STYLES.map((s) => /* @__PURE__ */ import_react.default.createElement("button", { key: s, onClick: () => setStyle(s), className: "py-1.5 rounded text-xs border " + (style === s ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700") }, STYLE_LABEL[s])))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u6226\u8853\u610F\u8B58"), /* @__PURE__ */ import_react.default.createElement(MentalitySelector, { value: mentality, onChange: setMentality })), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u914D\u7F6E"), /* @__PURE__ */ import_react.default.createElement("div", { style: { maxWidth: compact ? 300 : 360, margin: "0 auto" } }, /* @__PURE__ */ import_react.default.createElement(PitchView, { players: display, coords, color: team.color || "#3b82f6", selectedId: selId, onSelect: onPitchSelect, dimIds: sentOff }))), sentOff && sentOff.size > 0 && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-rose-300", style: { marginTop: -4 } }, "\u{1F7E5} \u9000\u5834\u3057\u305F\u9078\u624B\u306F\u914D\u7F6E\u30FB\u4EA4\u4EE3\u306E\u5BFE\u8C61\u5916\u3067\u3059"), allowSubs && bench.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u63A7\u3048", benchSel != null ? "\uFF08\u6295\u5165\u3059\u308B\u4F4D\u7F6E\u3092\u30D4\u30C3\u30C1\u3067\u30BF\u30C3\u30D7\uFF09" : ""), /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-1" }, bench.map((b, bi) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: b.id,
        onClick: () => onBenchTap(bi),
        style: { opacity: isOff(b.id) ? 0.45 : 1 },
        className: "w-full px-2 py-1.5 rounded border text-left " + (benchSel === bi ? "border-emerald-400 bg-emerald-900/30" : "border-slate-600 bg-slate-800 hover:border-emerald-400")
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-bold px-1.5 py-0.5 rounded", style: { backgroundColor: "#64748b22", color: "#94a3b8" } }, "\u63A7\u3048"), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sm text-slate-100 flex-1 truncate", style: { textDecoration: isOff(b.id) ? "line-through" : "none" } }, b.name, isOff(b.id) ? " \u{1F7E5}" : ""), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs text-emerald-300" }, benchSel === bi ? "\u9078\u629E\u4E2D" : "\u6295\u5165")),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-2 mt-1 pl-1", style: { fontSize: 10 } }, TBL.map((k, j) => /* @__PURE__ */ import_react.default.createElement("span", { key: k, className: "text-slate-400" }, TBL_H[j], /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-slate-200 ml-0.5" }, b.ability[k]))))
    )))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u9078\u624B\u4E00\u89A7"), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/70 border border-slate-800 rounded-lg px-2 py-1" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-1 text-slate-500", style: { fontSize: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-9 shrink-0" }, "POS"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1" }, "\u540D\u524D"), TBL_H.map((h) => /* @__PURE__ */ import_react.default.createElement("span", { key: h, className: "w-5 text-center" }, h))), display.map((p, i) => /* @__PURE__ */ import_react.default.createElement(Row, { key: p.id, pos: slots[i], p })), bench.map((b) => /* @__PURE__ */ import_react.default.createElement(Row, { key: b.id, pos: "\u63A7", p: b })))));
  }
  var LIVE_SPEEDS = { normal: { min: 2, pause: 3e3, label: "\u901A\u5E38" }, fast: { min: 4, pause: 1500, label: "\u9AD8\u901F" }, ultra: { min: 5, pause: 800, label: "\u8D85\u9AD8\u901F" } };
  function applyTacticsDraft(team, d) {
    if (!d) return bakeMentality({ ...team });
    return bakeMentality({ ...team, formation: d.formation, style: d.style, mentality: d.mentality, players: d.players, bench: d.bench });
  }
  function applySendOffs(team, offSet) {
    if (!offSet || offSet.size === 0) return team;
    const players = team.players.map((p) => offSet.has(p.id) ? { ...p, ability: { shoot: 1, pass: 1, speed: 1, physical: 1, defense: 1, technique: 1 } } : p);
    return bakeMentality({ ...team, players });
  }
  function clockLabel(c, half) {
    const min = Math.floor(c);
    if (half === 1) return min <= 45 ? `\u524D\u534A ${min}'` : `\u524D\u534A 45+${min - 45}'`;
    return min <= 90 ? `\u5F8C\u534A ${min}'` : `\u5F8C\u534A 90+${min - 90}'`;
  }
  function fmtMinute(e) {
    const m = e.minute;
    if (e.half === 2) return m > 90 ? `90+${m - 90}` : `${m}`;
    return m > 45 ? `45+${m - 45}` : `${m}`;
  }
  function LiveMatch({ home, away, playerIsHome, playerTeam, mode, round, onComplete }) {
    const [phase, setPhase] = (0, import_react.useState)("firstHalf");
    const [speed, setSpeed] = (0, import_react.useState)("normal");
    const [clock, setClock] = (0, import_react.useState)(0);
    const [score, setScore] = (0, import_react.useState)({ h: 0, a: 0 });
    const [curHome, setCurHome] = (0, import_react.useState)(home);
    const [curAway, setCurAway] = (0, import_react.useState)(away);
    const [log, setLog] = (0, import_react.useState)([{ type: "marker", text: "\u30AD\u30C3\u30AF\u30AA\u30D5" }]);
    const htDraftRef = (0, import_react.useRef)(null);
    const pSubsRef = (0, import_react.useRef)([]);
    const tl = (0, import_react.useRef)(null), ptr = (0, import_react.useRef)(0), halfEnd = (0, import_react.useRef)(46), clockRef = (0, import_react.useRef)(0), pauseUntil = (0, import_react.useRef)(0);
    const speedRef = (0, import_react.useRef)("normal");
    (0, import_react.useEffect)(() => {
      speedRef.current = speed;
    }, [speed]);
    const acc = (0, import_react.useRef)({ goalsHome: [], goalsAway: [], halves: [], segments: [] });
    const dctx = (0, import_react.useRef)({ booked: /* @__PURE__ */ new Set(), off: /* @__PURE__ */ new Set() });
    const logBox = (0, import_react.useRef)(null);
    const stick = (0, import_react.useRef)(true);
    const onLogScroll = () => {
      const el = logBox.current;
      if (!el) return;
      stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    };
    (0, import_react.useEffect)(() => {
      if (logBox.current && stick.current) logBox.current.scrollTop = logBox.current.scrollHeight;
    }, [log]);
    const startHalf = (half, h, a) => {
      const t = buildHalfTimeline(h, a, half, dctx.current);
      tl.current = t;
      ptr.current = 0;
      halfEnd.current = t.endMinute;
      acc.current.goalsHome.push(...t.goalsHome);
      acc.current.goalsAway.push(...t.goalsAway);
      acc.current.halves.push(t);
      acc.current.segments.push(...t.possSegments);
      return t;
    };
    const syncScore = () => setScore({ h: acc.current.goalsHome.length, a: acc.current.goalsAway.length });
    const revealRemaining = () => {
      const t = tl.current;
      if (!t) return;
      const rest = t.events.slice(ptr.current);
      if (rest.length) setLog((L) => [...L, ...rest]);
      ptr.current = t.events.length;
      clockRef.current = t.endMinute;
      setClock(t.endMinute);
    };
    const inited = (0, import_react.useRef)(false);
    (0, import_react.useEffect)(() => {
      if (inited.current) return;
      inited.current = true;
      startHalf(1, home, away);
      if (mode === "htskip") {
        revealRemaining();
        syncScore();
        setPhase("halftime");
      } else {
        clockRef.current = 0;
        setClock(0);
      }
    }, []);
    (0, import_react.useEffect)(() => {
      if (phase === "halftime") setLog((L) => L.some((x) => x.type === "marker" && x.text === "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0") ? L : [...L, { type: "marker", text: "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0" }]);
      if (phase === "fulltime") setLog((L) => L.some((x) => x.type === "marker" && x.text === "\u8A66\u5408\u7D42\u4E86") ? L : [...L, { type: "marker", text: "\u8A66\u5408\u7D42\u4E86" }]);
    }, [phase]);
    const tickRef = (0, import_react.useRef)(() => {
    });
    tickRef.current = () => {
      if (phase !== "firstHalf" && phase !== "secondHalf") return;
      if (Date.now() < pauseUntil.current) return;
      const t = tl.current;
      if (!t) return;
      let c = clockRef.current + LIVE_SPEEDS[speedRef.current].min * 0.12;
      let goal = false;
      while (ptr.current < t.events.length && t.events[ptr.current].minute <= c) {
        const ev = t.events[ptr.current];
        ptr.current++;
        setLog((L) => [...L, ev]);
        if (ev.type === "goal") {
          setScore((s) => ev.side === "home" ? { h: s.h + 1, a: s.a } : { h: s.h, a: s.a + 1 });
          c = ev.minute;
          pauseUntil.current = Date.now() + LIVE_SPEEDS[speedRef.current].pause;
          goal = true;
          break;
        }
      }
      clockRef.current = c;
      setClock(c);
      if (!goal && c >= halfEnd.current && ptr.current >= t.events.length) {
        setPhase((ph) => ph === "firstHalf" ? "halftime" : "fulltime");
      }
    };
    (0, import_react.useEffect)(() => {
      const id = setInterval(() => tickRef.current(), 120);
      return () => clearInterval(id);
    }, []);
    const kickoff2 = (skip, autoSub) => {
      setLog((L) => L.some((x) => x.type === "marker" && x.text === "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0") ? L : [...L, { type: "marker", text: "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0" }]);
      const pg0 = acc.current.goalsHome.length, ag0 = acc.current.goalsAway.length;
      const deficit = playerIsHome ? pg0 - ag0 : ag0 - pg0;
      const adj = autoSub ? autoHalftimeSubs(playerTeam, deficit).team : applyTacticsDraft(playerTeam, htDraftRef.current);
      const benchIds = new Set((playerTeam.bench || []).map((b) => b.id));
      pSubsRef.current = adj.players.filter((p) => benchIds.has(p.id)).map((p) => p.id);
      const opp = playerIsHome ? away : home;
      const pg = acc.current.goalsHome.length, ag2 = acc.current.goalsAway.length;
      const playerGoals = playerIsHome ? pg : ag2, oppGoals = playerIsHome ? ag2 : pg;
      const oppAdj = aiHalftimeAdjust(opp, oppGoals - playerGoals);
      const offSet = dctx.current.off;
      const h2 = playerIsHome ? applySendOffs(adj, offSet) : applySendOffs(oppAdj, offSet);
      const a2 = playerIsHome ? applySendOffs(oppAdj, offSet) : applySendOffs(adj, offSet);
      setCurHome(h2);
      setCurAway(a2);
      startHalf(2, h2, a2);
      if (skip) {
        revealRemaining();
        syncScore();
        setPhase("fulltime");
      } else {
        clockRef.current = 45;
        setClock(45);
        setPhase("secondHalf");
      }
    };
    const skipToHalftime = () => {
      const t = tl.current;
      if (!t) return;
      setLog([{ type: "marker", text: "\u30AD\u30C3\u30AF\u30AA\u30D5" }, ...t.events.slice()]);
      ptr.current = t.events.length;
      syncScore();
      clockRef.current = t.endMinute;
      setClock(t.endMinute);
      setPhase("halftime");
    };
    const skipToFulltime = () => {
      revealRemaining();
      syncScore();
      if (phase === "firstHalf") kickoff2(true, true);
      else setPhase("fulltime");
    };
    const finalize = () => {
      const rec = buildMatchRecord(home, away, acc.current.halves, round);
      rec.pSubs = pSubsRef.current;
      onComplete(rec);
    };
    const myColor = playerIsHome ? home.color : away.color;
    const phaseLabel = phase === "firstHalf" ? clockLabel(clock, 1) : phase === "halftime" ? "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0" : phase === "secondHalf" ? clockLabel(clock, 2) : "\u8A66\u5408\u7D42\u4E86";
    const inHalf = phase === "firstHalf" || phase === "secondHalf";
    const isShot = (e) => e.type === "goal" || e.type === "chance";
    const cnt = (side, fn) => log.filter((e) => e.side === side && fn(e)).length;
    const shotsH = cnt("home", isShot), shotsA = cnt("away", isShot);
    const onH = cnt("home", (e) => e.onTarget), onA = cnt("away", (e) => e.onTarget);
    const foulsH = cnt("home", (e) => e.type === "foul"), foulsA = cnt("away", (e) => e.type === "foul");
    const offH = cnt("home", (e) => e.type === "offside"), offA = cnt("away", (e) => e.type === "offside");
    const yelH = cnt("home", (e) => e.card === "yellow"), yelA = cnt("away", (e) => e.card === "yellow");
    const redH = cnt("home", (e) => e.card === "red"), redA = cnt("away", (e) => e.card === "red");
    const segs = acc.current.segments;
    const curSeg = segs.find((s) => clock >= s.from && clock < s.to) || segs[segs.length - 1];
    const hPoss = curSeg ? Math.round(curSeg.hShare * 100) : 50;
    const StatRow = ({ label, h, a }) => /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-3 text-xs" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-14 text-right font-mono tabular-nums text-slate-100" }, h), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-20 text-center text-slate-400" }, label), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-14 text-left font-mono tabular-nums text-slate-100" }, a));
    const logItems = log.length === 0 ? /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-500 text-sm text-center mt-6" }, "\u30AD\u30C3\u30AF\u30AA\u30D5\uFF01") : log.filter((e) => !(e.type === "foul" && !e.card)).map((e, i) => {
      if (e.type === "marker") return /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "text-center text-slate-500 py-1", style: { fontSize: 11 } }, "- ", e.text, " -");
      const isGoal = e.type === "goal";
      const mine = e.side === (playerIsHome ? "home" : "away");
      const teamName = e.side === "home" ? home.name : away.name;
      const icon = isGoal ? "\u26BD " : e.type === "offside" ? "\u{1F6A9} " : e.card === "red" ? "\u{1F7E5} " : e.card === "yellow" ? "\u{1F7E8} " : "\u30FB ";
      const tc = isGoal ? mine ? "text-emerald-300" : "text-rose-300" : e.card === "red" ? "text-rose-300" : e.card === "yellow" ? "text-amber-300" : e.type === "offside" ? "text-slate-400" : "text-slate-300";
      return /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "flex items-start gap-2 text-sm " + (isGoal ? "font-bold" : "") }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-xs text-slate-500 w-9 shrink-0 text-right pt-0.5" }, fmtMinute(e), "'"), /* @__PURE__ */ import_react.default.createElement("span", { className: "min-w-0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: (mine ? "text-emerald-400" : "text-rose-400") + " font-semibold mr-1" }, clipKana(teamName)), /* @__PURE__ */ import_react.default.createElement("span", { className: tc }, icon, e.text)));
    });
    const htPanel = /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/90 border border-slate-700 rounded-xl p-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-bold text-slate-100 mb-2" }, "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0"), /* @__PURE__ */ import_react.default.createElement(TacticsEditor, { team: playerTeam, allowSubs: true, compact: true, sentOff: dctx.current.off, onChange: (d) => {
      htDraftRef.current = d;
    } }));
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "fixed inset-0 z-50 flex flex-col", style: { background: teamBg(myColor, playerTeam.color2) } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "max-w-2xl w-full mx-auto flex flex-col h-full min-h-0 px-4 py-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/85 border border-slate-700 rounded-xl p-3 mb-3 shrink-0" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-center text-xs text-amber-300 font-mono mb-1" }, phaseLabel), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-4" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-right font-bold text-slate-50 truncate" }, home.name), /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono tabular-nums text-3xl font-black text-slate-50" }, score.h, " - ", score.a), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-left font-bold text-slate-50 truncate" }, away.name)), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-4", style: { fontSize: 10 } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-right font-mono text-slate-400 truncate" }, curHome.formation, " \u30FB ", STYLE_LABEL[curHome.style]), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-12" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-left font-mono text-slate-400 truncate" }, curAway.formation, " \u30FB ", STYLE_LABEL[curAway.style])), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-2 pt-2 border-t border-slate-700/60 space-y-0.5" }, /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u652F\u914D\u7387", h: `${hPoss}%`, a: `${100 - hPoss}%` }), /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u30B7\u30E5\u30FC\u30C8", h: shotsH, a: shotsA }), /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u67A0\u5185", h: onH, a: onA }), /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u30D5\u30A1\u30A6\u30EB", h: foulsH, a: foulsA }), /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u30AA\u30D5\u30B5\u30A4\u30C9", h: offH, a: offA }), /* @__PURE__ */ import_react.default.createElement(StatRow, { label: "\u30AB\u30FC\u30C9", h: `\u{1F7E8}${yelH} \u{1F7E5}${redH}`, a: `\u{1F7E8}${yelA} \u{1F7E5}${redA}` })), inHalf && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-2 mt-2" }, Object.keys(LIVE_SPEEDS).map((k) => /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        key: k,
        onClick: () => setSpeed(k),
        className: "text-xs px-2.5 py-1 rounded border " + (speed === k ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold" : "bg-slate-800 text-slate-300 border-slate-700")
      },
      LIVE_SPEEDS[k].label
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-2 mt-2" }, phase === "firstHalf" && /* @__PURE__ */ import_react.default.createElement("button", { onClick: skipToHalftime, className: "text-xs px-3 py-1 rounded border border-slate-600 text-slate-300 hover:border-slate-400" }, "\u30CF\u30FC\u30D5\u30BF\u30A4\u30E0\u307E\u3067\u30B9\u30AD\u30C3\u30D7"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: skipToFulltime, className: "text-xs px-3 py-1 rounded border border-slate-600 text-slate-300 hover:border-slate-400" }, "\u8A66\u5408\u7D42\u4E86\u307E\u3067\u30B9\u30AD\u30C3\u30D7")))), inHalf ? /* @__PURE__ */ import_react.default.createElement("div", { ref: logBox, onScroll: onLogScroll, className: "flex-1 overflow-y-auto bg-slate-900/70 border border-slate-800 rounded-xl p-3 space-y-1.5 min-h-0" }, logItems) : phase === "halftime" ? /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-h-0 flex flex-col" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-h-0 overflow-y-auto space-y-3" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mb-1" }, "\u524D\u534A\u306E\u30ED\u30B0"), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/70 border border-slate-800 rounded-xl p-3 space-y-1.5", style: { maxHeight: "28vh", overflowY: "auto" } }, logItems)), htPanel), /* @__PURE__ */ import_react.default.createElement("div", { className: "shrink-0 grid grid-cols-2 gap-2 pt-2" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => kickoff2(false), className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg" }, "\u5F8C\u534A\u30AD\u30C3\u30AF\u30AA\u30D5"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => kickoff2(true), className: "border border-slate-600 hover:border-slate-400 text-slate-200 py-2.5 rounded-lg" }, "\u5F8C\u534A\u3092\u30B9\u30AD\u30C3\u30D7"))) : /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-h-0 overflow-y-auto space-y-3" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/70 border border-slate-800 rounded-xl p-3 space-y-1.5", style: { maxHeight: "26vh", overflowY: "auto" } }, logItems), phase === "fulltime" && /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/90 border border-emerald-700 rounded-xl p-4 text-center" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-200 mb-3" }, "\u8A66\u5408\u7D42\u4E86\u3000", home.name, " ", score.h, " - ", score.a, " ", away.name), /* @__PURE__ */ import_react.default.createElement("button", { onClick: finalize, className: "bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-6 rounded-lg" }, "\u7D50\u679C\u3092\u78BA\u5B9A")))));
  }
  function SeasonScreen({ game, setGame, onFinish }) {
    const { teams, playerTeamId, schedule, matchday, results, trend, notables } = game;
    const [detail, setDetail] = (0, import_react.useState)(null);
    const [live, setLive] = (0, import_react.useState)(null);
    const [preMatch, setPreMatch] = (0, import_react.useState)(false);
    const [editTactics, setEditTactics] = (0, import_react.useState)(false);
    const [matchAdjusted, setMatchAdjusted] = (0, import_react.useState)(false);
    const preDraftRef = (0, import_react.useRef)(null);
    const seasonDraftRef = (0, import_react.useRef)(null);
    const matchDraftRef = (0, import_react.useRef)(null);
    const standings = (0, import_react.useMemo)(() => buildStandings(teams, results), [teams, results]);
    const playerTeam = teams[playerTeamId];
    const done = matchday >= CONFIG.MATCHDAYS;
    const nextRound = !done ? schedule[matchday] : null;
    const myFixture = nextRound?.find((m) => m.home === playerTeamId || m.away === playerTeamId);
    const isHome = myFixture && myFixture.home === playerTeamId;
    const oppId = myFixture ? isHome ? myFixture.away : myFixture.home : null;
    const recent = results.slice(-12).reverse();
    const myRow = standings.find((r) => r.teamId === playerTeamId);
    const commit = (newRecs, rankBefore, playerRec) => {
      const allResults = [...results, ...newRecs];
      const rankAfter = rankOf(buildStandings(teams, allResults), playerTeamId);
      matchDraftRef.current = null;
      setMatchAdjusted(false);
      setGame({ ...game, results: allResults, matchday: matchday + 1 });
      setDetail({ rec: playerRec, rankBefore, rankAfter });
    };
    const startMatch = (mode, ptm) => {
      if (done || !myFixture) return;
      const round = schedule[matchday];
      const rankBefore = rankOf(standings, playerTeamId);
      const aiRecords = [];
      for (const m of round) {
        if (m.home === playerTeamId || m.away === playerTeamId) continue;
        aiRecords.push(playMatch(teams[m.home], teams[m.away], false, matchday));
      }
      const pTeam = ptm || playerTeam;
      const homeT = myFixture.home === playerTeamId ? pTeam : teams[myFixture.home];
      const awayT = myFixture.away === playerTeamId ? pTeam : teams[myFixture.away];
      if (mode === "skip") {
        const rec = playerHalfSkip(homeT, awayT, isHome, matchday);
        commit([...aiRecords, rec], rankBefore, rec);
      } else {
        setLive({ home: homeT, away: awayT, playerIsHome: isHome, playerTeam: pTeam, mode, aiRecords, rankBefore });
      }
    };
    const startMatchNow = (mode) => startMatch(mode, matchDraftRef.current ? applyTacticsDraft(playerTeam, matchDraftRef.current) : null);
    const simulateRest = () => {
      let allResults = [...results];
      for (let md = matchday; md < CONFIG.MATCHDAYS; md++)
        for (const m of schedule[md]) {
          const involvesPlayer = m.home === playerTeamId || m.away === playerTeamId;
          if (involvesPlayer) {
            const homeT = teams[m.home], awayT = teams[m.away];
            allResults.push(playerHalfSkip(homeT, awayT, m.home === playerTeamId, md));
          } else {
            allResults.push(playMatch(teams[m.home], teams[m.away], false, md));
          }
        }
      setGame({ ...game, results: allResults, matchday: CONFIG.MATCHDAYS });
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "min-h-screen px-4 py-5 max-w-3xl mx-auto pb-24", style: { background: teamBg(playerTeam.color, playerTeam.color2), backgroundAttachment: "fixed" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "rounded-xl p-4 mb-4 border border-slate-800", style: { background: `linear-gradient(135deg, ${tint(playerTeam.color, 0.22)}, transparent)` } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs uppercase tracking-wider text-slate-400" }, "\u3042\u306A\u305F\u306E\u30AF\u30E9\u30D6"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-xl font-black text-slate-50 flex items-center gap-2" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-3 h-3 rounded-full inline-block", style: { backgroundColor: playerTeam.color } }), playerTeam.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 font-mono mt-0.5" }, playerTeam.formation, " \u30FB ", STYLE_LABEL[playerTeam.style], " \u30FB ", MENTALITY_LABEL[playerTeam.mentality]), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => {
      seasonDraftRef.current = null;
      setEditTactics(true);
    }, className: "mt-2 text-xs px-3 py-1 rounded border border-slate-600 text-slate-200 hover:border-emerald-400" }, "\u6226\u8853\u30FB\u7DE8\u6210\u3092\u5909\u66F4")), /* @__PURE__ */ import_react.default.createElement("div", { className: "text-right font-mono tabular-nums" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-3xl font-black text-slate-50" }, rankOf(standings, playerTeamId), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sm text-slate-500" }, "\u4F4D")), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400" }, myRow.w, "\u52DD ", myRow.d, "\u5206 ", myRow.l, "\u6557 / ", myRow.pts, "pt"))), trend && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 mt-2" }, "\u4ECA\u5B63\u306E\u30C8\u30EC\u30F3\u30C9\uFF1A", STYLE_LABEL[trend.trend], "\u304C\u6D41\u884C")), notables && notables.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u4ECA\u5B63\u306E\u6CE8\u76EE\u9078\u624B"), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2" }, notables.map((n) => {
      const isMine = n.teamId === playerTeamId;
      return /* @__PURE__ */ import_react.default.createElement("div", { key: n.id, className: "rounded-lg p-2.5 border " + (isMine ? "border-emerald-500/60 bg-emerald-500/5" : "border-slate-700 bg-slate-800/50") }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-1 mb-1" }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: n.position })), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-50 truncate" }, n.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 truncate" }, n.teamName));
    }))), !done ? /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-400" }, "\u7B2C ", /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-slate-100 font-bold" }, matchday + 1), " \u7BC0 / ", CONFIG.MATCHDAYS), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300" }, isHome ? "HOME" : "AWAY")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-3 py-2" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 text-right" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-slate-50" }, isHome ? playerTeam.name : teams[oppId].name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-500 font-mono" }, isHome ? playerTeam.formation : teams[oppId].formation, " \u30FB ", STYLE_LABEL[isHome ? playerTeam.style : teams[oppId].style])), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-600 font-mono" }, "vs"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 text-left" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-slate-50" }, isHome ? teams[oppId].name : playerTeam.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-500 font-mono" }, isHome ? teams[oppId].formation : playerTeam.formation, " \u30FB ", STYLE_LABEL[isHome ? teams[oppId].style : playerTeam.style]))), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => {
          preDraftRef.current = matchDraftRef.current;
          setPreMatch(true);
        },
        className: "w-full mt-2 text-sm py-2 rounded-lg border border-slate-600 text-slate-200 hover:border-emerald-400"
      },
      "\u3053\u306E\u8A66\u5408\u306E\u6226\u8853\u3092\u8ABF\u6574",
      matchAdjusted ? "\uFF08\u8ABF\u6574\u6E08\u307F\uFF09" : ""
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-3 gap-2 mt-2" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => startMatchNow("full"), className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg text-sm" }, "\u30D5\u30EB\u30BF\u30A4\u30E0\u89B3\u6226"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => startMatchNow("htskip"), className: "bg-emerald-600/80 hover:bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-lg text-sm" }, "\u30CF\u30FC\u30D5\u307E\u3067\u30B9\u30AD\u30C3\u30D7"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => startMatchNow("skip"), className: "border border-slate-700 hover:border-slate-500 text-slate-200 py-2.5 rounded-lg text-sm" }, "\u8A66\u5408\u3092\u30B9\u30AD\u30C3\u30D7")), /* @__PURE__ */ import_react.default.createElement("button", { onClick: simulateRest, className: "w-full mt-2 border border-slate-700 hover:border-slate-500 text-slate-300 py-2 rounded-lg text-sm" }, "\u30B7\u30FC\u30BA\u30F3\u7D42\u4E86\u307E\u3067\u4E00\u62EC\u30B9\u30AD\u30C3\u30D7")) : /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-emerald-700 rounded-xl p-4 mb-4 text-center" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-300 mb-3" }, "\u516838\u7BC0 \u7D42\u4E86"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onFinish, className: "bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-6 rounded-lg" }, "\u7D50\u679C\u3092\u898B\u308B")), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u9806\u4F4D\u8868"), /* @__PURE__ */ import_react.default.createElement(StandingsTable, { standings, teams, playerTeamId })), recent.length > 0 && /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u76F4\u8FD1\u306E\u8A66\u5408\uFF08\u30BF\u30C3\u30D7\u3067\u8A73\u7D30\uFF09"), /* @__PURE__ */ import_react.default.createElement("div", { className: "space-y-1" }, recent.map((m, i) => {
      const mine = m.home === playerTeamId || m.away === playerTeamId;
      return /* @__PURE__ */ import_react.default.createElement("button", { key: i, onClick: () => setDetail({ rec: m }), className: "w-full flex items-center justify-between text-sm rounded px-2 py-1 hover:bg-slate-800/70 " + (mine ? "bg-slate-800" : "") }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-right text-slate-300 truncate" }, teams[m.home].name), /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono tabular-nums text-slate-50 font-bold px-3" }, m.homeScore, " - ", m.awayScore), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1 text-left text-slate-300 truncate" }, teams[m.away].name));
    }))), detail && /* @__PURE__ */ import_react.default.createElement(MatchDetailModal, { data: detail, teams, playerTeamId, onClose: () => setDetail(null) }), live && /* @__PURE__ */ import_react.default.createElement(
      LiveMatch,
      {
        home: live.home,
        away: live.away,
        playerIsHome: live.playerIsHome,
        playerTeam: live.playerTeam,
        mode: live.mode,
        round: matchday,
        onComplete: (rec) => {
          const { aiRecords, rankBefore } = live;
          setLive(null);
          commit([...aiRecords, rec], rankBefore, rec);
        }
      }
    ), preMatch && /* @__PURE__ */ import_react.default.createElement("div", { className: "fixed inset-0 z-50 bg-slate-950/95 flex flex-col" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "max-w-2xl w-full mx-auto flex flex-col h-full min-h-0 px-4 py-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-base font-bold text-slate-50 mb-3 shrink-0" }, "\u3053\u306E\u8A66\u5408\u306E\u6226\u8853"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-h-0 overflow-y-auto" }, /* @__PURE__ */ import_react.default.createElement(TacticsEditor, { team: matchDraftRef.current ? applyTacticsDraft(playerTeam, matchDraftRef.current) : playerTeam, allowSubs: true, onChange: (d) => {
      preDraftRef.current = d;
    } })), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-2 gap-2 mt-3 shrink-0" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => {
          matchDraftRef.current = preDraftRef.current;
          setMatchAdjusted(true);
          setPreMatch(false);
        },
        className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg"
      },
      "\u78BA\u5B9A"
    ), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setPreMatch(false), className: "border border-slate-600 text-slate-200 py-2.5 rounded-lg" }, "\u623B\u308B")))), editTactics && /* @__PURE__ */ import_react.default.createElement("div", { className: "fixed inset-0 z-50 bg-slate-950/95 flex flex-col" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "max-w-2xl w-full mx-auto flex flex-col h-full min-h-0 px-4 py-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-base font-bold text-slate-50 mb-3 shrink-0" }, "\u6226\u8853\u30FB\u7DE8\u6210"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 min-h-0 overflow-y-auto" }, /* @__PURE__ */ import_react.default.createElement(TacticsEditor, { team: playerTeam, onChange: (d) => {
      seasonDraftRef.current = d;
    } })), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-2 gap-2 mt-3 shrink-0" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => {
          const nt = applyTacticsDraft(playerTeam, seasonDraftRef.current);
          setGame({ ...game, teams: { ...teams, [playerTeamId]: nt } });
          setEditTactics(false);
        },
        className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg"
      },
      "\u4FDD\u5B58"
    ), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setEditTactics(false), className: "border border-slate-600 text-slate-200 py-2.5 rounded-lg" }, "\u30AD\u30E3\u30F3\u30BB\u30EB")))));
  }
  function LineupColumn({ team, scorers, assists, ratings, motmId, align }) {
    const gCount = {}, aCount = {};
    (scorers || []).forEach((id) => gCount[id] = (gCount[id] || 0) + 1);
    (assists || []).forEach((id) => aCount[id] = (aCount[id] || 0) + 1);
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "text-xs" }, team.players.map((p) => {
      const r = ratings ? ratings[p.id] : null;
      const g = gCount[p.id] || 0, a = aCount[p.id] || 0;
      const motm = p.id === motmId;
      return /* @__PURE__ */ import_react.default.createElement("div", { key: p.id, className: "flex items-center gap-1 py-0.5 " + (align === "right" ? "flex-row-reverse text-right" : "") }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: p.position }), /* @__PURE__ */ import_react.default.createElement("span", { className: "truncate " + (motm ? "text-amber-300 font-semibold" : "text-slate-300"), style: { maxWidth: 92 } }, p.name), /* @__PURE__ */ import_react.default.createElement("span", { className: "flex-1" }), g > 0 && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-100" }, "\u26BD", g), a > 0 && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sky-300" }, "A", a), r != null && /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono font-bold w-7 text-center", style: { color: r >= 7 ? "#fbbf24" : "#94a3b8" } }, r.toFixed(1)));
    }));
  }
  function MatchDetailModal({ data, teams, playerTeamId, onClose }) {
    const { rec, rankBefore, rankAfter } = data;
    const [tab, setTab] = (0, import_react.useState)("home");
    const [open, setOpen] = (0, import_react.useState)(false);
    const [logOpen, setLogOpen] = (0, import_react.useState)(false);
    const nameInTeam = (team, id) => {
      const p = findInSquad(team, id);
      return p ? p.name : null;
    };
    const home = teams[rec.home], away = teams[rec.away];
    const involves = rec.home === playerTeamId || rec.away === playerTeamId;
    const playerWon = rec.home === playerTeamId && rec.homeScore > rec.awayScore || rec.away === playerTeamId && rec.awayScore > rec.homeScore;
    const draw = rec.homeScore === rec.awayScore;
    const verdict = !involves ? null : draw ? "DRAW" : playerWon ? "WIN" : "LOSE";
    const vColor = draw ? "#94a3b8" : playerWon ? "#34d399" : "#fb7185";
    let motmId = null, motmVal = -1, motmSide = null;
    for (const [side, ratings] of [["home", rec.homeRatings], ["away", rec.awayRatings]])
      if (ratings) {
        for (const id in ratings) if (ratings[id] > motmVal) {
          motmVal = ratings[id];
          motmId = id;
          motmSide = side;
        }
      }
    const motmName = motmSide === "home" ? findInSquad(home, motmId)?.name : findInSquad(away, motmId)?.name;
    const showTeam = tab === "home" ? home : away;
    const isHomeTab = tab === "home";
    const rankDelta = rankBefore != null ? rankBefore - rankAfter : null;
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50", onClick: onClose }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-700 rounded-xl w-full flex flex-col", style: { maxWidth: "28rem", maxHeight: "85vh" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 overflow-y-auto p-5", style: { minHeight: 0 } }, verdict && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-center font-black tracking-widest mb-2", style: { color: vColor } }, verdict), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-center gap-3 mb-3" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 text-right min-w-0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-slate-50 truncate inline-block max-w-full" }, home.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-500 font-mono", style: { fontSize: 10 } }, rec.homeFormation, " \u30FB ", STYLE_LABEL[rec.homeStyle])), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-3xl font-black font-mono tabular-nums text-slate-50 shrink-0" }, rec.homeScore, "-", rec.awayScore), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1 text-left min-w-0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-slate-50 truncate inline-block max-w-full" }, away.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-500 font-mono", style: { fontSize: 10 } }, rec.awayFormation, " \u30FB ", STYLE_LABEL[rec.awayStyle]))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-800/70 border-l-2 border-emerald-500 rounded-r-lg px-3 py-2 mb-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-200 leading-relaxed" }, generateMatchSummary(rec, teams))), (rec.homeScore > 0 || rec.awayScore > 0) && /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-2 gap-3 text-xs mb-3" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-right text-slate-300" }, goalLines(home, rec.homeEvents).map((l, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "truncate" }, l))), /* @__PURE__ */ import_react.default.createElement("div", { className: "text-left text-slate-300" }, goalLines(away, rec.awayEvents).map((l, i) => /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "truncate" }, l)))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-800 rounded-lg p-2.5 mb-2" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between text-slate-400 mb-1", style: { fontSize: 11 } }, /* @__PURE__ */ import_react.default.createElement("span", null, "\u30DD\u30BC\u30C3\u30B7\u30E7\u30F3 ", rec.possession, "% - ", 100 - rec.possession, "%"), motmName && /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-amber-400 font-bold" }, "MOTM"), " ", motmName, " ", /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-amber-300" }, motmVal.toFixed(1)))), /* @__PURE__ */ import_react.default.createElement("div", { className: "h-1.5 rounded-full overflow-hidden bg-slate-700 flex" }, /* @__PURE__ */ import_react.default.createElement("div", { style: { width: rec.possession + "%", backgroundColor: home.color } }), /* @__PURE__ */ import_react.default.createElement("div", { style: { width: 100 - rec.possession + "%", backgroundColor: away.color } })), rec.homeFouls != null && /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-2 space-y-0.5 text-slate-300", style: { fontSize: 11 } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-right font-mono" }, rec.homeFouls), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500" }, "\u30D5\u30A1\u30A6\u30EB"), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-left font-mono" }, rec.awayFouls)), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-right font-mono" }, rec.homeOffsides), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500" }, "\u30AA\u30D5\u30B5\u30A4\u30C9"), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-left font-mono" }, rec.awayOffsides)), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-right font-mono" }, "\u{1F7E8}", rec.homeYellows, " \u{1F7E5}", rec.homeReds), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500" }, "\u30AB\u30FC\u30C9"), /* @__PURE__ */ import_react.default.createElement("span", { className: "w-16 text-left font-mono" }, "\u{1F7E8}", rec.awayYellows, " \u{1F7E5}", rec.awayReds))), rec.homeCards && rec.homeCards.length || rec.awayCards && rec.awayCards.length ? /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-2 pt-2 border-t border-slate-700/60 grid grid-cols-2 gap-2", style: { fontSize: 11 } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-right text-slate-300" }, (rec.homeCards || []).map((c, i) => {
      const nm = nameInTeam(home, c.playerId);
      return nm ? /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "truncate" }, nm, " ", c.type === "red" ? "\u{1F7E5}" : "\u{1F7E8}") : null;
    })), /* @__PURE__ */ import_react.default.createElement("div", { className: "text-left text-slate-300" }, (rec.awayCards || []).map((c, i) => {
      const nm = nameInTeam(away, c.playerId);
      return nm ? /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "truncate" }, c.type === "red" ? "\u{1F7E5}" : "\u{1F7E8}", " ", nm) : null;
    }))) : null), rec.timeline && rec.timeline.length > 0 && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setLogOpen((v) => !v), className: "w-full text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg py-2 mb-2" }, logOpen ? "\u25B2 \u8A66\u5408\u30ED\u30B0\u3092\u9589\u3058\u308B" : "\u25BC \u8A66\u5408\u30ED\u30B0\u3092\u898B\u308B"), logOpen && /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900/70 border border-slate-800 rounded-lg p-2 mb-2 space-y-1", style: { maxHeight: "32vh", overflowY: "auto" } }, rec.timeline.map((e, i) => {
      if (e.type === "marker") return /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "text-center text-slate-500 py-1", style: { fontSize: 11 } }, "- ", e.text, " -");
      const isGoal = e.type === "goal";
      const mine = e.side === (rec.home === playerTeamId ? "home" : "away");
      const teamName = e.side === "home" ? home.name : away.name;
      const icon = isGoal ? "\u26BD " : e.type === "offside" ? "\u{1F6A9} " : e.card === "red" ? "\u{1F7E5} " : e.card === "yellow" ? "\u{1F7E8} " : "\u30FB ";
      const tc = isGoal ? mine ? "text-emerald-300" : "text-rose-300" : e.card === "red" ? "text-rose-300" : e.card === "yellow" ? "text-amber-300" : "text-slate-300";
      return /* @__PURE__ */ import_react.default.createElement("div", { key: i, className: "flex items-start gap-2 " + (isGoal ? "font-bold" : ""), style: { fontSize: 12 } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-mono text-slate-500 w-8 shrink-0 text-right", style: { fontSize: 10, paddingTop: 2 } }, fmtMinute(e), "'"), /* @__PURE__ */ import_react.default.createElement("span", { className: "min-w-0" }, /* @__PURE__ */ import_react.default.createElement("span", { className: (mine ? "text-emerald-400" : "text-rose-400") + " font-semibold mr-1" }, clipKana(teamName)), /* @__PURE__ */ import_react.default.createElement("span", { className: tc }, icon, e.text)));
    }))), rankDelta != null && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-center text-xs text-slate-400 mb-2" }, "\u9806\u4F4D ", rankBefore, "\u4F4D \u2192 ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-200 font-semibold" }, rankAfter, "\u4F4D"), rankDelta > 0 && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-emerald-400" }, " \u25B2", rankDelta), rankDelta < 0 && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-rose-400" }, " \u25BC", -rankDelta)), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setOpen((v) => !v), className: "w-full text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg py-2 mb-2" }, open ? "\u25B2 \u5E03\u9663\u30FB\u8A55\u4FA1\u70B9\u3092\u9589\u3058\u308B" : "\u25BC \u5E03\u9663\u30FB\u8A55\u4FA1\u70B9\u3092\u898B\u308B"), open && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex gap-2 mb-2" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setTab("home"), className: "flex-1 py-1.5 rounded text-xs font-semibold truncate " + (isHomeTab ? "bg-slate-700 text-slate-50" : "bg-slate-800 text-slate-400") }, home.name), /* @__PURE__ */ import_react.default.createElement("button", { onClick: () => setTab("away"), className: "flex-1 py-1.5 rounded text-xs font-semibold truncate " + (!isHomeTab ? "bg-slate-700 text-slate-50" : "bg-slate-800 text-slate-400") }, away.name)), /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto mb-3", style: { maxWidth: "14rem" } }, /* @__PURE__ */ import_react.default.createElement(
      PitchView,
      {
        players: showTeam.players,
        coords: showTeam.coords || formationCoords(showTeam.formation),
        color: showTeam.color,
        ratings: isHomeTab ? rec.homeRatings : rec.awayRatings,
        goals: isHomeTab ? countMap(rec.homeScorers) : countMap(rec.awayScorers)
      }
    )), /* @__PURE__ */ import_react.default.createElement(
      LineupColumn,
      {
        team: showTeam,
        scorers: isHomeTab ? rec.homeScorers : rec.awayScorers,
        assists: isHomeTab ? rec.homeAssists : rec.awayAssists,
        ratings: isHomeTab ? rec.homeRatings : rec.awayRatings,
        motmId: motmSide === tab ? motmId : null,
        align: "left"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "shrink-0 border-t border-slate-700 p-3" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onClose, className: "w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg" }, involves ? "\u6B21\u3078" : "\u9589\u3058\u308B"))));
  }
  function findInSquad(team, id) {
    return team.players.find((x) => x.id === id) || team.bench && team.bench.find((x) => x.id === id) || null;
  }
  function goalLines(team, events) {
    if (!events || events.length === 0) return [];
    const nameOf = (id) => {
      const p = findInSquad(team, id);
      return p ? p.name : "?";
    };
    return [...events].sort((a, b) => a.minute - b.minute).map((e) => `${fmtMinute(e)}' ${nameOf(e.scorerId)}${e.assistId ? `\uFF08A:${nameOf(e.assistId)}\uFF09` : ""} \u26BD`);
  }
  function countMap(ids) {
    const c = {};
    (ids || []).forEach((id) => c[id] = (c[id] || 0) + 1);
    return c;
  }
  function EndScreen({ game, onRetryFresh, onRetryKeep, onTitle }) {
    const { teams, playerTeamId, results } = game;
    const standings = (0, import_react.useMemo)(() => buildStandings(teams, results), [teams, results]);
    const stats = (0, import_react.useMemo)(() => buildPlayerStats(teams, results, playerTeamId), [teams, results, playerTeamId]);
    const mvp = (0, import_react.useMemo)(() => pickMVP(teams, results, standings), [teams, results, standings]);
    const myRow = standings.find((r) => r.teamId === playerTeamId);
    const myRank = rankOf(standings, playerTeamId);
    const perfect = myRow.w === CONFIG.MATCHDAYS;
    const champion = myRank === 1;
    const posOrder = { ST: 0, CF: 0, RW: 1, LW: 2, RAM: 3, AM: 4, LAM: 5, RM: 6, CM: 7, LM: 8, DM: 9, RWB: 10, RB: 11, CB: 12, LB: 13, LWB: 14, GK: 15 };
    const posRank = (p) => posOrder[p] != null ? posOrder[p] : { FW: 0.5, MF: 6.5, DF: 12, GK: 15 }[broadPos(p)] ?? 8;
    const myStats = Object.values(stats).filter((s) => s.teamId === playerTeamId).sort((a, b) => (a.bench ? 1 : 0) - (b.bench ? 1 : 0) || posRank(a.position) - posRank(b.position));
    const topScorers = Object.values(stats).sort((a, b) => b.goals - a.goals || b.assists - a.assists).slice(0, 5);
    const topAssists = Object.values(stats).sort((a, b) => b.assists - a.assists || b.goals - a.goals).slice(0, 5);
    const article = (0, import_react.useMemo)(() => generateSeasonSummary(teams, results, standings, playerTeamId), [teams, results, standings, playerTeamId]);
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "min-h-screen px-4 py-6 max-w-3xl mx-auto pb-20", style: { background: teamBg(teams[playerTeamId].color, teams[playerTeamId].color2), backgroundAttachment: "fixed" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-center mb-6" }, perfect ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-amber-400 uppercase tracking-widest text-xs mb-2" }, "Perfect Season"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-3xl font-black text-amber-400" }, "38\u52DD\u30FB\u5168\u52DD\u512A\u52DD \u9054\u6210\uFF01")) : champion ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-emerald-400 uppercase tracking-widest text-xs mb-2" }, "Champions"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-3xl font-black text-slate-50" }, "\u512A\u52DD\uFF01"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-400 text-sm mt-1" }, "\u60DC\u3057\u304F\u3082\u5168\u52DD\u306F\u306A\u3089\u305A\uFF08", myRow.l + myRow.d, "\u8A66\u5408\u53D6\u308A\u3053\u307C\u3057\uFF09")) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-400 uppercase tracking-widest text-xs mb-2" }, "Season Complete"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "text-3xl font-black text-slate-50" }, myRank, "\u4F4D \u3067\u30D5\u30A3\u30CB\u30C3\u30B7\u30E5"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-400 text-sm mt-1" }, "38\u52DD\u307E\u3067\u306F \u3042\u3068 ", CONFIG.MATCHDAYS - myRow.w, " \u52DD")), /* @__PURE__ */ import_react.default.createElement("p", { className: "font-mono tabular-nums text-slate-300 mt-3" }, myRow.w, "\u52DD ", myRow.d, "\u5206 ", myRow.l, "\u6557 \u30FB \u52DD\u70B9 ", myRow.pts, " \u30FB \u5F97\u5931\u70B9\u5DEE ", myRow.gf - myRow.ga > 0 ? "+" : "", myRow.gf - myRow.ga)), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs uppercase tracking-wider text-emerald-400 mb-2" }, "\u30B7\u30FC\u30BA\u30F3\u30EC\u30D3\u30E5\u30FC"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm text-slate-200 leading-relaxed" }, article), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col sm:flex-row gap-2 mt-3" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => openSeasonImage({ playerTeam: teams[playerTeamId], standings, teams, myStats, rank: myRank }),
        className: "px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 text-sm font-semibold"
      },
      "\u7D50\u679C\u753B\u50CF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => shareSeasonToX({ playerTeam: teams[playerTeamId], standings, teams, myStats, rank: myRank }),
        className: "px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold"
      },
      "X\u306B\u30DD\u30B9\u30C8\u3059\u308B"
    )), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-500 mt-2" }, "\u30B9\u30DE\u30DB\u3067\u306F\u753B\u50CF\u4ED8\u304D\u3067\u5171\u6709\u3067\u304D\u307E\u3059\u3002PC\u3067\u306F\u753B\u50CF\u3092\u4FDD\u5B58\u5F8C\u3001\u6295\u7A3F\u753B\u9762\u3067\u6DFB\u4ED8\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), mvp && /* @__PURE__ */ import_react.default.createElement("div", { className: "rounded-xl p-4 mb-4 border border-amber-500/40 bg-gradient-to-br from-amber-500/15 to-transparent" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-amber-300 uppercase tracking-widest text-xs mb-1" }, "League MVP"), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xl font-black text-slate-50" }, mvp.name), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-slate-400 flex items-center gap-1 mt-0.5" }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: mvp.position }), " ", teams[mvp.teamId].name)), /* @__PURE__ */ import_react.default.createElement("div", { className: "text-right font-mono tabular-nums text-sm" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-slate-200" }, mvp.goals, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500 text-xs" }, "G"), " ", mvp.assists, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500 text-xs" }, "A")), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-amber-300 font-bold" }, "\u5E73\u5747", mvp.avg.toFixed(2))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u6700\u7D42\u9806\u4F4D"), /* @__PURE__ */ import_react.default.createElement(StandingsTable, { standings, teams, playerTeamId })), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid sm:grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u81EA\u30C1\u30FC\u30E0\u500B\u4EBA\u6210\u7E3E"), /* @__PURE__ */ import_react.default.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ import_react.default.createElement("thead", null, /* @__PURE__ */ import_react.default.createElement("tr", { className: "text-slate-500 text-xs" }, /* @__PURE__ */ import_react.default.createElement("th", { className: "text-left py-1" }, "\u9078\u624B"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center" }, "\u51FA\u5834"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center" }, "\u5F97"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center" }, "\u30A2"), /* @__PURE__ */ import_react.default.createElement("th", { className: "text-center" }, "\u8A55"))), /* @__PURE__ */ import_react.default.createElement("tbody", { className: "font-mono tabular-nums" }, myStats.map((s, i) => /* @__PURE__ */ import_react.default.createElement("tr", { key: i, className: "border-t border-slate-800", style: s.bench ? { opacity: 0.78 } : null }, /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1 font-sans text-slate-200 flex items-center gap-1" }, /* @__PURE__ */ import_react.default.createElement(PosBadge, { code: s.position }), s.name, s.bench && /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-400 border border-slate-600 rounded px-1 ml-0.5", style: { fontSize: "10px" } }, "\u63A7")), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-300" }, s.apps), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-50 font-bold" }, s.goals), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-300" }, s.assists), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-slate-400" }, s.avg ? s.avg.toFixed(1) : "\u2014")))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 px-1" }, "\u30EA\u30FC\u30B0\u5F97\u70B9\u738B"), /* @__PURE__ */ import_react.default.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ import_react.default.createElement("tbody", { className: "font-mono tabular-nums" }, topScorers.map((s, i) => /* @__PURE__ */ import_react.default.createElement("tr", { key: i, className: "border-t border-slate-800" }, /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1 text-slate-500 w-6" }, i + 1), /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1 font-sans text-slate-200" }, s.name, " ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500 text-xs" }, "/ ", teams[s.teamId].name)), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-amber-400 font-bold" }, s.goals))))), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-semibold text-slate-300 mb-2 mt-4 px-1" }, "\u30EA\u30FC\u30B0\u30A2\u30B7\u30B9\u30C8\u738B"), /* @__PURE__ */ import_react.default.createElement("table", { className: "w-full text-sm" }, /* @__PURE__ */ import_react.default.createElement("tbody", { className: "font-mono tabular-nums" }, topAssists.map((s, i) => /* @__PURE__ */ import_react.default.createElement("tr", { key: i, className: "border-t border-slate-800" }, /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1 text-slate-500 w-6" }, i + 1), /* @__PURE__ */ import_react.default.createElement("td", { className: "py-1 font-sans text-slate-200" }, s.name, " ", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-slate-500 text-xs" }, "/ ", teams[s.teamId].name)), /* @__PURE__ */ import_react.default.createElement("td", { className: "text-center text-sky-400 font-bold" }, s.assists))))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, /* @__PURE__ */ import_react.default.createElement("button", { onClick: onRetryKeep, className: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-lg" }, "\u8A2D\u5B9A\u3092\u5F15\u304D\u7D99\u3044\u3067\u518D\u6311\u6226"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onRetryFresh, className: "border border-slate-600 hover:border-slate-400 text-slate-200 py-3 rounded-lg" }, "\u5168\u3066\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u518D\u6311\u6226"), /* @__PURE__ */ import_react.default.createElement("button", { onClick: onTitle, className: "border border-slate-700 hover:border-slate-500 text-slate-300 py-3 rounded-lg" }, "\u30BF\u30A4\u30C8\u30EB\u3078")));
  }
  function App() {
    const [screen, setScreen] = (0, import_react.useState)("title");
    const [game, setGame] = (0, import_react.useState)(null);
    const [draft, setDraft] = (0, import_react.useState)(null);
    const [seed, setSeed] = (0, import_react.useState)(null);
    (0, import_react.useEffect)(() => {
      try {
        window.scrollTo(0, 0);
        if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {
      }
    }, [screen]);
    const enterCreate = (carry = null) => {
      const ai = generateLeague(CONFIG.TOTAL_TEAMS - 1);
      const teamsObj = Object.fromEntries(ai.map((t) => [t.id, t]));
      setDraft({ ai, trend: seasonTrend(teamsObj) });
      setSeed(carry);
      setScreen("create");
    };
    const startSeason = (playerTeam) => {
      const ai = draft.ai;
      const teamsArr = [playerTeam, ...ai];
      const teams = {};
      teamsArr.forEach((t) => teams[t.id] = t);
      const ids = teamsArr.map((t) => t.id);
      const shuffled = [ids[0], ...ids.slice(1).sort(() => Math.random() - 0.5)];
      const schedule = generateSchedule(shuffled);
      const notables = pickNotablePlayers(teams, 3);
      setGame({ teams, playerTeamId: playerTeam.id, schedule, matchday: 0, results: [], trend: draft.trend, notables });
      setScreen("season");
    };
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "bg-slate-950 text-slate-100 min-h-screen", style: { fontFamily: "system-ui, -apple-system, sans-serif" } }, screen === "title" && /* @__PURE__ */ import_react.default.createElement(TitleScreen, { onStart: () => enterCreate(null) }), screen === "create" && /* @__PURE__ */ import_react.default.createElement(CreateScreen, { draft, seed, onConfirm: startSeason, onBack: () => setScreen("title") }), screen === "season" && game && /* @__PURE__ */ import_react.default.createElement(SeasonScreen, { game, setGame, onFinish: () => setScreen("end") }), screen === "end" && game && /* @__PURE__ */ import_react.default.createElement(EndScreen, { game, onRetryFresh: () => enterCreate(null), onRetryKeep: () => enterCreate(game.teams[game.playerTeamId]), onTitle: () => {
      setGame(null);
      setDraft(null);
      setSeed(null);
      setScreen("title");
    } }));
  }
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
