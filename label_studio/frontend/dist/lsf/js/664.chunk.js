!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LabelStudio=t():e.LabelStudio=t()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var __webpack_modules__={60674:function(module,__webpack_exports__,__webpack_require__){var enterModule;function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}__webpack_require__.d(__webpack_exports__,{b:function(){return ComputeWorker}}),module=__webpack_require__.hmd(module),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class ComputeWorker{constructor(e){_defineProperty(this,"worker",void 0),this.worker=e}async compute(e){var t,r;const o=await this.sendMessage(this.worker,{data:e,type:"compute"},!0);return null==o||null===(t=o.data)||void 0===t||null===(r=t.result)||void 0===r?void 0:r.data}async precompute(e){await this.sendMessage(this.worker,{data:e,type:"precompute"})}async store(e){await this.sendMessage(this.worker,{data:e,type:"store"})}async getStorage(){var e;const t=await this.sendMessage(this.worker,{type:"getStorage"},!0);return null==t||null===(e=t.data)||void 0===e?void 0:e.result}destroy(){this.worker.terminate()}sendMessage(e,t,r=!1){return new Promise((o=>{const a=Math.random().toString();if(r){const t=r=>{a===r.data.eventId&&(e.removeEventListener("message",t),o(r))};e.addEventListener("message",t)}e.postMessage({...t,eventId:a}),r||o(void 0)}))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_defineProperty(ComputeWorker,"Messenger",{receive({compute:e,precompute:t}){const r={};self.addEventListener("message",(o=>{if(!o.data)return;const{data:a,type:n,eventId:d}=o.data;switch(n){case"compute":((t,o)=>{e(t,r,(e=>{self.postMessage({result:e,eventId:o})}))})(a,d);break;case"precompute":(e=>{null==t||t(e,r,(e=>{Object.assign(r,e)}))})(a);break;case"store":(e=>{Object.assign(r,e.data.data)})(o);break;case"getStorage":(e=>{self.postMessage({result:r,eventId:e})})(d)}}))}}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(ComputeWorker,"ComputeWorker","/Users/jackieyeung/projects/label-studio-frontend/src/lib/AudioUltra/Common/Worker/index.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)},26664:function(e,t,r){var o,a=r(60674);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var n,d;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i({value:e,channelCount:t}){const r=[];for(let o=0;o<t;o++)r[o]=new Float32Array(e.length/t);for(let o=0;o<e.length;o++){const a=o%t,n=Math.floor(o/t);r[a][n]=e[o]}return r}a.b.Messenger.receive({compute:(e,t,r)=>{r({data:i(e)})},precompute:(e,t,r)=>{r({data:i(e)})}}),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"splitChannels","/Users/jackieyeung/projects/label-studio-frontend/src/lib/AudioUltra/Media/SplitChannelWorker.ts"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var __webpack_exports__=__webpack_require__(26664);return __webpack_exports__=__webpack_exports__.default,__webpack_exports__}()}));
//# sourceMappingURL=664.chunk.js.map