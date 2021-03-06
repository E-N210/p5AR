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
})({"LEBx":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @license
 * webxr-polyfill
 * Copyright (c) 2017 Google
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

/**
 * @license
 * cardboard-vr-display
 * Copyright (c) 2015-2017 Google
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

/**
 * @license
 * webvr-polyfill-dpdb 
 * Copyright (c) 2017 Google
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

/**
 * @license
 * wglu-preserve-state
 * Copyright (c) 2016, Brandon Jones.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @license
 * nosleep.js
 * Copyright (c) 2017, Rich Tibbett
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const _global = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};

const PRIVATE = Symbol('@@webxr-polyfill/EventTarget');

class EventTarget {
  constructor() {
    this[PRIVATE] = {
      listeners: new Map()
    };
  }

  addEventListener(type, listener) {
    if (typeof type !== 'string') {
      throw new Error('`type` must be a string');
    }

    if (typeof listener !== 'function') {
      throw new Error('`listener` must be a function');
    }

    const typedListeners = this[PRIVATE].listeners.get(type) || [];
    typedListeners.push(listener);
    this[PRIVATE].listeners.set(type, typedListeners);
  }

  removeEventListener(type, listener) {
    if (typeof type !== 'string') {
      throw new Error('`type` must be a string');
    }

    if (typeof listener !== 'function') {
      throw new Error('`listener` must be a function');
    }

    const typedListeners = this[PRIVATE].listeners.get(type) || [];

    for (let i = typedListeners.length; i >= 0; i--) {
      if (typedListeners[i] === listener) {
        typedListeners.pop();
      }
    }
  }

  dispatchEvent(type, event) {
    const typedListeners = this[PRIVATE].listeners.get(type) || [];
    const queue = [];

    for (let i = 0; i < typedListeners.length; i++) {
      queue[i] = typedListeners[i];
    }

    for (let listener of queue) {
      listener(event);
    }

    if (typeof this[`on${type}`] === 'function') {
      this[`on${type}`](event);
    }
  }

}

const EPSILON = 0.000001;
let ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
const degree = Math.PI / 180;

function create() {
  let out = new ARRAY_TYPE(16);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

function fromRotationTranslation(out, q, v) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}

function getRotation(out, mat) {
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}

function create$1() {
  let out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}

function clone$1(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

function fromValues$1(x, y, z) {
  let out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

function copy$1(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

function add$1(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

function scale$1(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }

  return out;
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cross(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2];
  let bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

function transformQuat(out, a, q) {
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  let x = a[0],
      y = a[1],
      z = a[2];
  let uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

function angle(a, b) {
  let tempA = fromValues$1(a[0], a[1], a[2]);
  let tempB = fromValues$1(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  let cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

const len = length;

const forEach = function () {
  let vec = create$1();
  return function (a, stride, offset, count, fn, arg) {
    let i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

function create$2() {
  let out = new ARRAY_TYPE(9);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

function create$3() {
  let out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}

function clone$3(a) {
  let out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

function fromValues$3(x, y, z, w) {
  let out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

function copy$3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

function normalize$1(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }

  return out;
}

const forEach$1 = function () {
  let vec = create$3();
  return function (a, stride, offset, count, fn, arg) {
    let i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

function create$4() {
  let out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

function multiply$4(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

function slerp(out, a, b, t) {
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  let omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }

  if (1.0 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1.0 - t;
    scale1 = t;
  }

  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}

function invert$2(out, a) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let dot$$1 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot$$1 ? 1.0 / dot$$1 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

function fromMat3(out, m) {
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if (fTrace > 0.0) {
    fRoot = Math.sqrt(fTrace + 1.0);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

function fromEuler(out, x, y, z) {
  let halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  let sx = Math.sin(x);
  let cx = Math.cos(x);
  let sy = Math.sin(y);
  let cy = Math.cos(y);
  let sz = Math.sin(z);
  let cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}

const clone$4 = clone$3;
const fromValues$4 = fromValues$3;
const copy$4 = copy$3;
const normalize$2 = normalize$1;

const rotationTo = function () {
  let tmpvec3 = create$1();
  let xUnitVec3 = fromValues$1(1, 0, 0);
  let yUnitVec3 = fromValues$1(0, 1, 0);
  return function (out, a, b) {
    let dot$$1 = dot(a, b);

    if (dot$$1 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot$$1 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot$$1;
      return normalize$2(out, out);
    }
  };
}();

const sqlerp = function () {
  let temp1 = create$4();
  let temp2 = create$4();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();

const setAxes = function () {
  let matr = create$2();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize$2(out, fromMat3(out, matr));
  };
}();

const PRIVATE$1 = Symbol('@@webxr-polyfill/XRRigidTransform');

class XRRigidTransform$1 {
  constructor() {
    this[PRIVATE$1] = {
      matrix: null,
      position: null,
      orientation: null,
      inverse: null
    };

    if (arguments.length === 0) {
      this[PRIVATE$1].matrix = identity(new Float32Array(16));
    } else if (arguments.length === 1) {
      if (arguments[0] instanceof Float32Array) {
        this[PRIVATE$1].matrix = arguments[0];
      } else {
        this[PRIVATE$1].position = this._getPoint(arguments[0]);
        this[PRIVATE$1].orientation = DOMPointReadOnly.fromPoint({
          x: 0,
          y: 0,
          z: 0,
          w: 1
        });
      }
    } else if (arguments.length === 2) {
      this[PRIVATE$1].position = this._getPoint(arguments[0]);
      this[PRIVATE$1].orientation = this._getPoint(arguments[1]);
    } else {
      throw new Error("Too many arguments!");
    }

    if (this[PRIVATE$1].matrix) {
      let position = create$1();
      getTranslation(position, this[PRIVATE$1].matrix);
      this[PRIVATE$1].position = DOMPointReadOnly.fromPoint({
        x: position[0],
        y: position[1],
        z: position[2]
      });
      let orientation = create$4();
      getRotation(orientation, this[PRIVATE$1].matrix);
      this[PRIVATE$1].orientation = DOMPointReadOnly.fromPoint({
        x: orientation[0],
        y: orientation[1],
        z: orientation[2],
        w: orientation[3]
      });
    } else {
      this[PRIVATE$1].matrix = identity(new Float32Array(16));
      fromRotationTranslation(this[PRIVATE$1].matrix, fromValues$4(this[PRIVATE$1].orientation.x, this[PRIVATE$1].orientation.y, this[PRIVATE$1].orientation.z, this[PRIVATE$1].orientation.w), fromValues$1(this[PRIVATE$1].position.x, this[PRIVATE$1].position.y, this[PRIVATE$1].position.z));
    }
  }

  _getPoint(arg) {
    if (arg instanceof DOMPointReadOnly) {
      return arg;
    }

    return DOMPointReadOnly.fromPoint(arg);
  }

  get matrix() {
    return this[PRIVATE$1].matrix;
  }

  get position() {
    return this[PRIVATE$1].position;
  }

  get orientation() {
    return this[PRIVATE$1].orientation;
  }

  get inverse() {
    if (this[PRIVATE$1].inverse === null) {
      let invMatrix = identity(new Float32Array(16));
      invert(invMatrix, this[PRIVATE$1].matrix);
      this[PRIVATE$1].inverse = new XRRigidTransform$1(invMatrix);
      this[PRIVATE$1].inverse[PRIVATE$1].inverse = this;
    }

    return this[PRIVATE$1].inverse;
  }

}

const PRIVATE$2 = Symbol('@@webxr-polyfill/XRSpace');

class XRSpace {
  constructor(specialType = null, inputSource = null) {
    this[PRIVATE$2] = {
      specialType,
      inputSource,
      baseMatrix: null,
      inverseBaseMatrix: null,
      lastFrameId: -1
    };
  }

  get _specialType() {
    return this[PRIVATE$2].specialType;
  }

  get _inputSource() {
    return this[PRIVATE$2].inputSource;
  }

  _ensurePoseUpdated(device, frameId) {
    if (frameId == this[PRIVATE$2].lastFrameId) return;
    this[PRIVATE$2].lastFrameId = frameId;

    this._onPoseUpdate(device);
  }

  _onPoseUpdate(device) {
    if (this[PRIVATE$2].specialType == 'viewer') {
      this._baseMatrix = device.getBasePoseMatrix();
    }
  }

  set _baseMatrix(matrix) {
    this[PRIVATE$2].baseMatrix = matrix;
    this[PRIVATE$2].inverseBaseMatrix = null;
  }

  get _baseMatrix() {
    if (!this[PRIVATE$2].baseMatrix) {
      if (this[PRIVATE$2].inverseBaseMatrix) {
        this[PRIVATE$2].baseMatrix = new Float32Array(16);
        invert(this[PRIVATE$2].baseMatrix, this[PRIVATE$2].inverseBaseMatrix);
      }
    }

    return this[PRIVATE$2].baseMatrix;
  }

  set _inverseBaseMatrix(matrix) {
    this[PRIVATE$2].inverseBaseMatrix = matrix;
    this[PRIVATE$2].baseMatrix = null;
  }

  get _inverseBaseMatrix() {
    if (!this[PRIVATE$2].inverseBaseMatrix) {
      if (this[PRIVATE$2].baseMatrix) {
        this[PRIVATE$2].inverseBaseMatrix = new Float32Array(16);
        invert(this[PRIVATE$2].inverseBaseMatrix, this[PRIVATE$2].baseMatrix);
      }
    }

    return this[PRIVATE$2].inverseBaseMatrix;
  }

  _getSpaceRelativeTransform(space) {
    if (!this._inverseBaseMatrix || !space._baseMatrix) {
      return null;
    }

    let out = new Float32Array(16);
    multiply(out, this._inverseBaseMatrix, space._baseMatrix);
    return new XRRigidTransform$1(out);
  }

}

const DEFAULT_EMULATION_HEIGHT = 1.6;
const PRIVATE$3 = Symbol('@@webxr-polyfill/XRReferenceSpace');
const XRReferenceSpaceTypes = ['viewer', 'local', 'local-floor', 'bounded-floor', 'unbounded'];

function isFloor(type) {
  return type === 'bounded-floor' || type === 'local-floor';
}

class XRReferenceSpace extends XRSpace {
  constructor(type, transform = null) {
    if (!XRReferenceSpaceTypes.includes(type)) {
      throw new Error(`XRReferenceSpaceType must be one of ${XRReferenceSpaceTypes}`);
    }

    super(type);

    if (type === 'bounded-floor' && !transform) {
      throw new Error(`XRReferenceSpace cannot use 'bounded-floor' type if the platform does not provide the floor level`);
    }

    if (isFloor(type) && !transform) {
      transform = identity(new Float32Array(16));
      transform[13] = DEFAULT_EMULATION_HEIGHT;
    }

    this._inverseBaseMatrix = transform || identity(new Float32Array(16));
    this[PRIVATE$3] = {
      type,
      transform,
      originOffset: identity(new Float32Array(16))
    };
  }

  _transformBasePoseMatrix(out, pose) {
    multiply(out, this._inverseBaseMatrix, pose);
  }

  _originOffsetMatrix() {
    return this[PRIVATE$3].originOffset;
  }

  _adjustForOriginOffset(transformMatrix) {
    let inverseOriginOffsetMatrix = new Float32Array(16);
    invert(inverseOriginOffsetMatrix, this[PRIVATE$3].originOffset);
    multiply(transformMatrix, inverseOriginOffsetMatrix, transformMatrix);
  }

  _getSpaceRelativeTransform(space) {
    let transform = super._getSpaceRelativeTransform(space);

    this._adjustForOriginOffset(transform.matrix);

    return new XRRigidTransform(transform.matrix);
  }

  getOffsetReferenceSpace(additionalOffset) {
    let newSpace = new XRReferenceSpace(this[PRIVATE$3].type, this[PRIVATE$3].transform, this[PRIVATE$3].bounds);
    multiply(newSpace[PRIVATE$3].originOffset, this[PRIVATE$3].originOffset, additionalOffset.matrix);
    return newSpace;
  }

}

const PRIVATE$4 = Symbol('@@webxr-polyfill/XR');
const XRSessionModes = ['inline', 'immersive-vr', 'immersive-ar'];
const DEFAULT_SESSION_OPTIONS = {
  'inline': {
    requiredFeatures: ['viewer'],
    optionalFeatures: []
  },
  'immersive-vr': {
    requiredFeatures: ['viewer', 'local'],
    optionalFeatures: []
  },
  'immersive-ar': {
    requiredFeatures: ['viewer', 'local'],
    optionalFeatures: []
  }
};
const POLYFILL_REQUEST_SESSION_ERROR = `Polyfill Error: Must call navigator.xr.isSessionSupported() with any XRSessionMode
or navigator.xr.requestSession('inline') prior to requesting an immersive
session. This is a limitation specific to the WebXR Polyfill and does not apply
to native implementations of the API.`;

class XRSystem extends EventTarget {
  constructor(devicePromise) {
    super();
    this[PRIVATE$4] = {
      device: null,
      devicePromise,
      immersiveSession: null,
      inlineSessions: new Set()
    };
    devicePromise.then(device => {
      this[PRIVATE$4].device = device;
    });
  }

  async isSessionSupported(mode) {
    if (!this[PRIVATE$4].device) {
      await this[PRIVATE$4].devicePromise;
    }

    if (mode != 'inline') {
      return Promise.resolve(this[PRIVATE$4].device.isSessionSupported(mode));
    }

    return Promise.resolve(true);
  }

  async requestSession(mode, options) {
    if (!this[PRIVATE$4].device) {
      if (mode != 'inline') {
        throw new Error(POLYFILL_REQUEST_SESSION_ERROR);
      } else {
        await this[PRIVATE$4].devicePromise;
      }
    }

    if (!XRSessionModes.includes(mode)) {
      throw new TypeError(`The provided value '${mode}' is not a valid enum value of type XRSessionMode`);
    }

    const defaultOptions = DEFAULT_SESSION_OPTIONS[mode];
    const requiredFeatures = defaultOptions.requiredFeatures.concat(options && options.requiredFeatures ? options.requiredFeatures : []);
    const optionalFeatures = defaultOptions.optionalFeatures.concat(options && options.optionalFeatures ? options.optionalFeatures : []);
    const enabledFeatures = new Set();
    let requirementsFailed = false;

    for (let feature of requiredFeatures) {
      if (!this[PRIVATE$4].device.isFeatureSupported(feature)) {
        console.error(`The required feature '${feature}' is not supported`);
        requirementsFailed = true;
      } else {
        enabledFeatures.add(feature);
      }
    }

    if (requirementsFailed) {
      throw new DOMException('Session does not support some required features', 'NotSupportedError');
    }

    for (let feature of optionalFeatures) {
      if (!this[PRIVATE$4].device.isFeatureSupported(feature)) {
        console.log(`The optional feature '${feature}' is not supported`);
      } else {
        enabledFeatures.add(feature);
      }
    }

    const sessionId = await this[PRIVATE$4].device.requestSession(mode, enabledFeatures);
    const session = new XRSession(this[PRIVATE$4].device, mode, sessionId);

    if (mode == 'inline') {
      this[PRIVATE$4].inlineSessions.add(session);
    } else {
      this[PRIVATE$4].immersiveSession = session;
    }

    const onSessionEnd = () => {
      if (mode == 'inline') {
        this[PRIVATE$4].inlineSessions.delete(session);
      } else {
        this[PRIVATE$4].immersiveSession = null;
      }

      session.removeEventListener('end', onSessionEnd);
    };

    session.addEventListener('end', onSessionEnd);
    return session;
  }

}

let now;

if ('performance' in _global === false) {
  let startTime = Date.now();

  now = () => Date.now() - startTime;
} else {
  now = () => performance.now();
}

var now$1 = now;
const PRIVATE$5 = Symbol('@@webxr-polyfill/XRPose');

class XRPose$1 {
  constructor(transform, emulatedPosition) {
    this[PRIVATE$5] = {
      transform,
      emulatedPosition
    };
  }

  get transform() {
    return this[PRIVATE$5].transform;
  }

  get emulatedPosition() {
    return this[PRIVATE$5].emulatedPosition;
  }

}

const PRIVATE$6 = Symbol('@@webxr-polyfill/XRViewerPose');

class XRViewerPose extends XRPose$1 {
  constructor(transform, views, emulatedPosition = false) {
    super(transform, emulatedPosition);
    this[PRIVATE$6] = {
      views
    };
  }

  get views() {
    return this[PRIVATE$6].views;
  }

}

const PRIVATE$7 = Symbol('@@webxr-polyfill/XRViewport');

class XRViewport {
  constructor(target) {
    this[PRIVATE$7] = {
      target
    };
  }

  get x() {
    return this[PRIVATE$7].target.x;
  }

  get y() {
    return this[PRIVATE$7].target.y;
  }

  get width() {
    return this[PRIVATE$7].target.width;
  }

  get height() {
    return this[PRIVATE$7].target.height;
  }

}

const XREyes = ['left', 'right', 'none'];
const PRIVATE$8 = Symbol('@@webxr-polyfill/XRView');

class XRView {
  constructor(device, transform, eye, sessionId) {
    if (!XREyes.includes(eye)) {
      throw new Error(`XREye must be one of: ${XREyes}`);
    }

    const temp = Object.create(null);
    const viewport = new XRViewport(temp);
    this[PRIVATE$8] = {
      device,
      eye,
      viewport,
      temp,
      sessionId,
      transform
    };
  }

  get eye() {
    return this[PRIVATE$8].eye;
  }

  get projectionMatrix() {
    return this[PRIVATE$8].device.getProjectionMatrix(this.eye);
  }

  get transform() {
    return this[PRIVATE$8].transform;
  }

  _getViewport(layer) {
    if (this[PRIVATE$8].device.getViewport(this[PRIVATE$8].sessionId, this.eye, layer, this[PRIVATE$8].temp)) {
      return this[PRIVATE$8].viewport;
    }

    return undefined;
  }

}

const PRIVATE$9 = Symbol('@@webxr-polyfill/XRFrame');
const NON_ACTIVE_MSG = "XRFrame access outside the callback that produced it is invalid.";
const NON_ANIMFRAME_MSG = "getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.";
let NEXT_FRAME_ID = 0;

class XRFrame {
  constructor(device, session, sessionId) {
    this[PRIVATE$9] = {
      id: ++NEXT_FRAME_ID,
      active: false,
      animationFrame: false,
      device,
      session,
      sessionId
    };
  }

  get session() {
    return this[PRIVATE$9].session;
  }

  getViewerPose(referenceSpace) {
    if (!this[PRIVATE$9].animationFrame) {
      throw new DOMException(NON_ANIMFRAME_MSG, 'InvalidStateError');
    }

    if (!this[PRIVATE$9].active) {
      throw new DOMException(NON_ACTIVE_MSG, 'InvalidStateError');
    }

    const device = this[PRIVATE$9].device;
    const session = this[PRIVATE$9].session;

    session[PRIVATE$15].viewerSpace._ensurePoseUpdated(device, this[PRIVATE$9].id);

    referenceSpace._ensurePoseUpdated(device, this[PRIVATE$9].id);

    let viewerTransform = referenceSpace._getSpaceRelativeTransform(session[PRIVATE$15].viewerSpace);

    const views = [];

    for (let viewSpace of session[PRIVATE$15].viewSpaces) {
      viewSpace._ensurePoseUpdated(device, this[PRIVATE$9].id);

      let viewTransform = referenceSpace._getSpaceRelativeTransform(viewSpace);

      let view = new XRView(device, viewTransform, viewSpace.eye, this[PRIVATE$9].sessionId);
      views.push(view);
    }

    let viewerPose = new XRViewerPose(viewerTransform, views, false);
    return viewerPose;
  }

  getPose(space, baseSpace) {
    if (!this[PRIVATE$9].active) {
      throw new DOMException(NON_ACTIVE_MSG, 'InvalidStateError');
    }

    const device = this[PRIVATE$9].device;

    if (space._specialType === "target-ray" || space._specialType === "grip") {
      return device.getInputPose(space._inputSource, baseSpace, space._specialType);
    } else {
      space._ensurePoseUpdated(device, this[PRIVATE$9].id);

      baseSpace._ensurePoseUpdated(device, this[PRIVATE$9].id);

      let transform = baseSpace._getSpaceRelativeTransform(space);

      if (!transform) {
        return null;
      }

      return new XRPose(transform, false);
    }

    return null;
  }

}

const PRIVATE$10 = Symbol('@@webxr-polyfill/XRRenderState');
const XRRenderStateInit = Object.freeze({
  depthNear: 0.1,
  depthFar: 1000.0,
  inlineVerticalFieldOfView: null,
  baseLayer: null
});

class XRRenderState {
  constructor(stateInit = {}) {
    const config = Object.assign({}, XRRenderStateInit, stateInit);
    this[PRIVATE$10] = {
      config
    };
  }

  get depthNear() {
    return this[PRIVATE$10].config.depthNear;
  }

  get depthFar() {
    return this[PRIVATE$10].config.depthFar;
  }

  get inlineVerticalFieldOfView() {
    return this[PRIVATE$10].config.inlineVerticalFieldOfView;
  }

  get baseLayer() {
    return this[PRIVATE$10].config.baseLayer;
  }

}

const POLYFILLED_XR_COMPATIBLE = Symbol('@@webxr-polyfill/polyfilled-xr-compatible');
const XR_COMPATIBLE = Symbol('@@webxr-polyfill/xr-compatible');
const PRIVATE$11 = Symbol('@@webxr-polyfill/XRWebGLLayer');
const XRWebGLLayerInit = Object.freeze({
  antialias: true,
  depth: false,
  stencil: false,
  alpha: true,
  multiview: false,
  ignoreDepthValues: false,
  framebufferScaleFactor: 1.0
});

class XRWebGLLayer {
  constructor(session, context, layerInit = {}) {
    const config = Object.assign({}, XRWebGLLayerInit, layerInit);

    if (!(session instanceof XRSession$1)) {
      throw new Error('session must be a XRSession');
    }

    if (session.ended) {
      throw new Error(`InvalidStateError`);
    }

    if (context[POLYFILLED_XR_COMPATIBLE]) {
      if (context[XR_COMPATIBLE] !== true) {
        throw new Error(`InvalidStateError`);
      }
    }

    const framebuffer = context.getParameter(context.FRAMEBUFFER_BINDING);
    this[PRIVATE$11] = {
      context,
      config,
      framebuffer,
      session
    };
  }

  get context() {
    return this[PRIVATE$11].context;
  }

  get antialias() {
    return this[PRIVATE$11].config.antialias;
  }

  get ignoreDepthValues() {
    return true;
  }

  get framebuffer() {
    return this[PRIVATE$11].framebuffer;
  }

  get framebufferWidth() {
    return this[PRIVATE$11].context.drawingBufferWidth;
  }

  get framebufferHeight() {
    return this[PRIVATE$11].context.drawingBufferHeight;
  }

  get _session() {
    return this[PRIVATE$11].session;
  }

  getViewport(view) {
    return view._getViewport(this);
  }

  static getNativeFramebufferScaleFactor(session) {
    if (!session) {
      throw new TypeError('getNativeFramebufferScaleFactor must be passed a session.');
    }

    if (session[PRIVATE$15].ended) {
      return 0.0;
    }

    return 1.0;
  }

}

const PRIVATE$12 = Symbol('@@webxr-polyfill/XRInputSourceEvent');

class XRInputSourceEvent extends Event {
  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    this[PRIVATE$12] = {
      frame: eventInitDict.frame,
      inputSource: eventInitDict.inputSource
    };
    Object.setPrototypeOf(this, XRInputSourceEvent.prototype);
  }

  get frame() {
    return this[PRIVATE$12].frame;
  }

  get inputSource() {
    return this[PRIVATE$12].inputSource;
  }

}

const PRIVATE$13 = Symbol('@@webxr-polyfill/XRSessionEvent');

class XRSessionEvent extends Event {
  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    this[PRIVATE$13] = {
      session: eventInitDict.session
    };
    Object.setPrototypeOf(this, XRSessionEvent.prototype);
  }

  get session() {
    return this[PRIVATE$13].session;
  }

}

const PRIVATE$14 = Symbol('@@webxr-polyfill/XRInputSourcesChangeEvent');

class XRInputSourcesChangeEvent extends Event {
  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    this[PRIVATE$14] = {
      session: eventInitDict.session,
      added: eventInitDict.added,
      removed: eventInitDict.removed
    };
    Object.setPrototypeOf(this, XRInputSourcesChangeEvent.prototype);
  }

  get session() {
    return this[PRIVATE$14].session;
  }

  get added() {
    return this[PRIVATE$14].added;
  }

  get removed() {
    return this[PRIVATE$14].removed;
  }

}

const PRIVATE$15 = Symbol('@@webxr-polyfill/XRSession');

class XRViewSpace extends XRSpace {
  constructor(eye) {
    super(eye);
  }

  get eye() {
    return this._specialType;
  }

  _onPoseUpdate(device) {
    this._inverseBaseMatrix = device.getBaseViewMatrix(this._specialType);
  }

}

class XRSession$1 extends EventTarget {
  constructor(device, mode, id) {
    super();
    let immersive = mode != 'inline';
    let initialRenderState = new XRRenderState({
      inlineVerticalFieldOfView: immersive ? null : Math.PI * 0.5
    });
    this[PRIVATE$15] = {
      device,
      mode,
      immersive,
      ended: false,
      suspended: false,
      frameCallbacks: [],
      currentFrameCallbacks: null,
      frameHandle: 0,
      deviceFrameHandle: null,
      id,
      activeRenderState: initialRenderState,
      pendingRenderState: null,
      viewerSpace: new XRReferenceSpace("viewer"),
      viewSpaces: [],
      currentInputSources: []
    };

    if (immersive) {
      this[PRIVATE$15].viewSpaces.push(new XRViewSpace('left'), new XRViewSpace('right'));
    } else {
      this[PRIVATE$15].viewSpaces.push(new XRViewSpace('none'));
    }

    this[PRIVATE$15].onDeviceFrame = () => {
      if (this[PRIVATE$15].ended || this[PRIVATE$15].suspended) {
        return;
      }

      this[PRIVATE$15].deviceFrameHandle = null;
      this[PRIVATE$15].startDeviceFrameLoop();

      if (this[PRIVATE$15].pendingRenderState !== null) {
        this[PRIVATE$15].activeRenderState = new XRRenderState(this[PRIVATE$15].pendingRenderState);
        this[PRIVATE$15].pendingRenderState = null;

        if (this[PRIVATE$15].activeRenderState.baseLayer) {
          this[PRIVATE$15].device.onBaseLayerSet(this[PRIVATE$15].id, this[PRIVATE$15].activeRenderState.baseLayer);
        }
      }

      if (this[PRIVATE$15].activeRenderState.baseLayer === null) {
        return;
      }

      const frame = new XRFrame(device, this, this[PRIVATE$15].id);
      const callbacks = this[PRIVATE$15].currentFrameCallbacks = this[PRIVATE$15].frameCallbacks;
      this[PRIVATE$15].frameCallbacks = [];
      frame[PRIVATE$9].active = true;
      frame[PRIVATE$9].animationFrame = true;
      this[PRIVATE$15].device.onFrameStart(this[PRIVATE$15].id, this[PRIVATE$15].activeRenderState);

      this._checkInputSourcesChange();

      const rightNow = now$1();

      for (let i = 0; i < callbacks.length; i++) {
        try {
          if (!callbacks[i].cancelled && typeof callbacks[i].callback === 'function') {
            callbacks[i].callback(rightNow, frame);
          }
        } catch (err) {
          console.error(err);
        }
      }

      this[PRIVATE$15].currentFrameCallbacks = null;
      frame[PRIVATE$9].active = false;
      this[PRIVATE$15].device.onFrameEnd(this[PRIVATE$15].id);
    };

    this[PRIVATE$15].startDeviceFrameLoop = () => {
      if (this[PRIVATE$15].deviceFrameHandle === null) {
        this[PRIVATE$15].deviceFrameHandle = this[PRIVATE$15].device.requestAnimationFrame(this[PRIVATE$15].onDeviceFrame);
      }
    };

    this[PRIVATE$15].stopDeviceFrameLoop = () => {
      const handle = this[PRIVATE$15].deviceFrameHandle;

      if (handle !== null) {
        this[PRIVATE$15].device.cancelAnimationFrame(handle);
        this[PRIVATE$15].deviceFrameHandle = null;
      }
    };

    this[PRIVATE$15].onPresentationEnd = sessionId => {
      if (sessionId !== this[PRIVATE$15].id) {
        this[PRIVATE$15].suspended = false;
        this[PRIVATE$15].startDeviceFrameLoop();
        this.dispatchEvent('focus', {
          session: this
        });
        return;
      }

      this[PRIVATE$15].ended = true;
      this[PRIVATE$15].stopDeviceFrameLoop();
      device.removeEventListener('@@webxr-polyfill/vr-present-end', this[PRIVATE$15].onPresentationEnd);
      device.removeEventListener('@@webxr-polyfill/vr-present-start', this[PRIVATE$15].onPresentationStart);
      device.removeEventListener('@@webxr-polyfill/input-select-start', this[PRIVATE$15].onSelectStart);
      device.removeEventListener('@@webxr-polyfill/input-select-end', this[PRIVATE$15].onSelectEnd);
      this.dispatchEvent('end', new XRSessionEvent('end', {
        session: this
      }));
    };

    device.addEventListener('@@webxr-polyfill/vr-present-end', this[PRIVATE$15].onPresentationEnd);

    this[PRIVATE$15].onPresentationStart = sessionId => {
      if (sessionId === this[PRIVATE$15].id) {
        return;
      }

      this[PRIVATE$15].suspended = true;
      this[PRIVATE$15].stopDeviceFrameLoop();
      this.dispatchEvent('blur', {
        session: this
      });
    };

    device.addEventListener('@@webxr-polyfill/vr-present-start', this[PRIVATE$15].onPresentationStart);

    this[PRIVATE$15].onSelectStart = evt => {
      if (evt.sessionId !== this[PRIVATE$15].id) {
        return;
      }

      this[PRIVATE$15].dispatchInputSourceEvent('selectstart', evt.inputSource);
    };

    device.addEventListener('@@webxr-polyfill/input-select-start', this[PRIVATE$15].onSelectStart);

    this[PRIVATE$15].onSelectEnd = evt => {
      if (evt.sessionId !== this[PRIVATE$15].id) {
        return;
      }

      this[PRIVATE$15].dispatchInputSourceEvent('selectend', evt.inputSource);
      this[PRIVATE$15].dispatchInputSourceEvent('select', evt.inputSource);
    };

    device.addEventListener('@@webxr-polyfill/input-select-end', this[PRIVATE$15].onSelectEnd);

    this[PRIVATE$15].onSqueezeStart = evt => {
      if (evt.sessionId !== this[PRIVATE$15].id) {
        return;
      }

      this[PRIVATE$15].dispatchInputSourceEvent('squeezestart', evt.inputSource);
    };

    device.addEventListener('@@webxr-polyfill/input-squeeze-start', this[PRIVATE$15].onSqueezeStart);

    this[PRIVATE$15].onSqueezeEnd = evt => {
      if (evt.sessionId !== this[PRIVATE$15].id) {
        return;
      }

      this[PRIVATE$15].dispatchInputSourceEvent('squeezeend', evt.inputSource);
      this[PRIVATE$15].dispatchInputSourceEvent('squeeze', evt.inputSource);
    };

    device.addEventListener('@@webxr-polyfill/input-squeeze-end', this[PRIVATE$15].onSqueezeEnd);

    this[PRIVATE$15].dispatchInputSourceEvent = (type, inputSource) => {
      const frame = new XRFrame(device, this, this[PRIVATE$15].id);
      const event = new XRInputSourceEvent(type, {
        frame,
        inputSource
      });
      frame[PRIVATE$9].active = true;
      this.dispatchEvent(type, event);
      frame[PRIVATE$9].active = false;
    };

    this[PRIVATE$15].startDeviceFrameLoop();
    this.onblur = undefined;
    this.onfocus = undefined;
    this.onresetpose = undefined;
    this.onend = undefined;
    this.onselect = undefined;
    this.onselectstart = undefined;
    this.onselectend = undefined;
  }

  get renderState() {
    return this[PRIVATE$15].activeRenderState;
  }

  get environmentBlendMode() {
    return this[PRIVATE$15].device.environmentBlendMode || 'opaque';
  }

  async requestReferenceSpace(type) {
    if (this[PRIVATE$15].ended) {
      return;
    }

    if (!XRReferenceSpaceTypes.includes(type)) {
      throw new TypeError(`XRReferenceSpaceType must be one of ${XRReferenceSpaceTypes}`);
    }

    if (!this[PRIVATE$15].device.doesSessionSupportReferenceSpace(this[PRIVATE$15].id, type)) {
      throw new DOMException(`The ${type} reference space is not supported by this session.`, 'NotSupportedError');
    }

    if (type === 'viewer') {
      return this[PRIVATE$15].viewerSpace;
    }

    let transform = await this[PRIVATE$15].device.requestFrameOfReferenceTransform(type);

    if (type === 'bounded-floor') {
      if (!transform) {
        throw new DOMException(`${type} XRReferenceSpace not supported by this device.`, 'NotSupportedError');
      }

      let bounds = this[PRIVATE$15].device.requestStageBounds();

      if (!bounds) {
        throw new DOMException(`${type} XRReferenceSpace not supported by this device.`, 'NotSupportedError');
      }

      throw new DOMException(`The WebXR polyfill does not support the ${type} reference space yet.`, 'NotSupportedError');
    }

    return new XRReferenceSpace(type, transform);
  }

  requestAnimationFrame(callback) {
    if (this[PRIVATE$15].ended) {
      return;
    }

    const handle = ++this[PRIVATE$15].frameHandle;
    this[PRIVATE$15].frameCallbacks.push({
      handle,
      callback,
      cancelled: false
    });
    return handle;
  }

  cancelAnimationFrame(handle) {
    let callbacks = this[PRIVATE$15].frameCallbacks;
    let index = callbacks.findIndex(d => d && d.handle === handle);

    if (index > -1) {
      callbacks[index].cancelled = true;
      callbacks.splice(index, 1);
    }

    callbacks = this[PRIVATE$15].currentFrameCallbacks;

    if (callbacks) {
      index = callbacks.findIndex(d => d && d.handle === handle);

      if (index > -1) {
        callbacks[index].cancelled = true;
      }
    }
  }

  get inputSources() {
    return this[PRIVATE$15].device.getInputSources();
  }

  async end() {
    if (this[PRIVATE$15].ended) {
      return;
    }

    if (this[PRIVATE$15].immersive) {
      this[PRIVATE$15].ended = true;
      this[PRIVATE$15].device.removeEventListener('@@webxr-polyfill/vr-present-start', this[PRIVATE$15].onPresentationStart);
      this[PRIVATE$15].device.removeEventListener('@@webxr-polyfill/vr-present-end', this[PRIVATE$15].onPresentationEnd);
      this[PRIVATE$15].device.removeEventListener('@@webxr-polyfill/input-select-start', this[PRIVATE$15].onSelectStart);
      this[PRIVATE$15].device.removeEventListener('@@webxr-polyfill/input-select-end', this[PRIVATE$15].onSelectEnd);
      this.dispatchEvent('end', new XRSessionEvent('end', {
        session: this
      }));
    }

    this[PRIVATE$15].stopDeviceFrameLoop();
    return this[PRIVATE$15].device.endSession(this[PRIVATE$15].id);
  }

  updateRenderState(newState) {
    if (this[PRIVATE$15].ended) {
      const message = "Can't call updateRenderState on an XRSession " + "that has already ended.";
      throw new Error(message);
    }

    if (newState.baseLayer && newState.baseLayer._session !== this) {
      const message = "Called updateRenderState with a base layer that was " + "created by a different session.";
      throw new Error(message);
    }

    const fovSet = newState.inlineVerticalFieldOfView !== null && newState.inlineVerticalFieldOfView !== undefined;

    if (fovSet) {
      if (this[PRIVATE$15].immersive) {
        const message = "inlineVerticalFieldOfView must not be set for an " + "XRRenderState passed to updateRenderState for an " + "immersive session.";
        throw new Error(message);
      } else {
        newState.inlineVerticalFieldOfView = Math.min(3.13, Math.max(0.01, newState.inlineVerticalFieldOfView));
      }
    }

    if (this[PRIVATE$15].pendingRenderState === null) {
      const activeRenderState = this[PRIVATE$15].activeRenderState;
      this[PRIVATE$15].pendingRenderState = {
        depthNear: activeRenderState.depthNear,
        depthFar: activeRenderState.depthFar,
        inlineVerticalFieldOfView: activeRenderState.inlineVerticalFieldOfView,
        baseLayer: activeRenderState.baseLayer
      };
    }

    Object.assign(this[PRIVATE$15].pendingRenderState, newState);
  }

  _checkInputSourcesChange() {
    const added = [];
    const removed = [];
    const newInputSources = this.inputSources;
    const oldInputSources = this[PRIVATE$15].currentInputSources;

    for (const newInputSource of newInputSources) {
      if (!oldInputSources.includes(newInputSource)) {
        added.push(newInputSource);
      }
    }

    for (const oldInputSource of oldInputSources) {
      if (!newInputSources.includes(oldInputSource)) {
        removed.push(oldInputSource);
      }
    }

    if (added.length > 0 || removed.length > 0) {
      this.dispatchEvent('inputsourceschange', new XRInputSourcesChangeEvent('inputsourceschange', {
        session: this,
        added: added,
        removed: removed
      }));
    }

    this[PRIVATE$15].currentInputSources.length = 0;

    for (const newInputSource of newInputSources) {
      this[PRIVATE$15].currentInputSources.push(newInputSource);
    }
  }

}

const PRIVATE$16 = Symbol('@@webxr-polyfill/XRInputSource');

class XRInputSource {
  constructor(impl) {
    this[PRIVATE$16] = {
      impl,
      gripSpace: new XRSpace("grip", this),
      targetRaySpace: new XRSpace("target-ray", this)
    };
  }

  get handedness() {
    return this[PRIVATE$16].impl.handedness;
  }

  get targetRayMode() {
    return this[PRIVATE$16].impl.targetRayMode;
  }

  get gripSpace() {
    let mode = this[PRIVATE$16].impl.targetRayMode;

    if (mode === "gaze" || mode === "screen") {
      return null;
    }

    return this[PRIVATE$16].gripSpace;
  }

  get targetRaySpace() {
    return this[PRIVATE$16].targetRaySpace;
  }

  get profiles() {
    return this[PRIVATE$16].impl.profiles;
  }

  get gamepad() {
    return this[PRIVATE$16].impl.gamepad;
  }

}

const PRIVATE$17 = Symbol('@@webxr-polyfill/XRReferenceSpaceEvent');

class XRReferenceSpaceEvent extends Event {
  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    this[PRIVATE$17] = {
      referenceSpace: eventInitDict.referenceSpace,
      transform: eventInitDict.transform || null
    };
    Object.setPrototypeOf(this, XRReferenceSpaceEvent.prototype);
  }

  get referenceSpace() {
    return this[PRIVATE$17].referenceSpace;
  }

  get transform() {
    return this[PRIVATE$17].transform;
  }

}

var API = {
  XRSystem,
  XRSession: XRSession$1,
  XRSessionEvent,
  XRFrame,
  XRView,
  XRViewport,
  XRViewerPose,
  XRWebGLLayer,
  XRSpace,
  XRReferenceSpace,
  XRReferenceSpaceEvent,
  XRInputSource,
  XRInputSourceEvent,
  XRInputSourcesChangeEvent,
  XRRenderState,
  XRRigidTransform: XRRigidTransform$1,
  XRPose: XRPose$1
};

const polyfillMakeXRCompatible = Context => {
  if (typeof Context.prototype.makeXRCompatible === 'function') {
    return false;
  }

  Context.prototype.makeXRCompatible = function () {
    this[XR_COMPATIBLE] = true;
    return Promise.resolve();
  };

  return true;
};

const polyfillGetContext = Canvas => {
  const getContext = Canvas.prototype.getContext;

  Canvas.prototype.getContext = function (contextType, glAttribs) {
    const ctx = getContext.call(this, contextType, glAttribs);

    if (ctx) {
      ctx[POLYFILLED_XR_COMPATIBLE] = true;

      if (glAttribs && 'xrCompatible' in glAttribs) {
        ctx[XR_COMPATIBLE] = glAttribs.xrCompatible;
      }
    }

    return ctx;
  };
};

const isImageBitmapSupported = global => !!(global.ImageBitmapRenderingContext && global.createImageBitmap);

const isMobile = global => {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(global.navigator.userAgent || global.navigator.vendor || global.opera);

  return check;
};

const applyCanvasStylesForMinimalRendering = canvas => {
  canvas.style.display = 'block';
  canvas.style.position = 'absolute';
  canvas.style.width = canvas.style.height = '1px';
  canvas.style.top = canvas.style.left = '0px';
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var cardboardVrDisplay = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();

    var MIN_TIMESTEP = 0.001;
    var MAX_TIMESTEP = 1;

    var dataUri = function dataUri(mimeType, svg) {
      return 'data:' + mimeType + ',' + encodeURIComponent(svg);
    };

    var lerp = function lerp(a, b, t) {
      return a + (b - a) * t;
    };

    var isIOS = function () {
      var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
      return function () {
        return isIOS;
      };
    }();

    var isWebViewAndroid = function () {
      var isWebViewAndroid = navigator.userAgent.indexOf('Version') !== -1 && navigator.userAgent.indexOf('Android') !== -1 && navigator.userAgent.indexOf('Chrome') !== -1;
      return function () {
        return isWebViewAndroid;
      };
    }();

    var isSafari = function () {
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      return function () {
        return isSafari;
      };
    }();

    var isFirefoxAndroid = function () {
      var isFirefoxAndroid = navigator.userAgent.indexOf('Firefox') !== -1 && navigator.userAgent.indexOf('Android') !== -1;
      return function () {
        return isFirefoxAndroid;
      };
    }();

    var getChromeVersion = function () {
      var match = navigator.userAgent.match(/.*Chrome\/([0-9]+)/);
      var value = match ? parseInt(match[1], 10) : null;
      return function () {
        return value;
      };
    }();

    var isSafariWithoutDeviceMotion = function () {
      var value = false;
      value = isIOS() && isSafari() && navigator.userAgent.indexOf('13_4') !== -1;
      return function () {
        return value;
      };
    }();

    var isChromeWithoutDeviceMotion = function () {
      var value = false;

      if (getChromeVersion() === 65) {
        var match = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);

        if (match) {
          var _match$1$split = match[1].split('.'),
              _match$1$split2 = slicedToArray(_match$1$split, 4),
              major = _match$1$split2[0],
              minor = _match$1$split2[1],
              branch = _match$1$split2[2],
              build = _match$1$split2[3];

          value = parseInt(branch, 10) === 3325 && parseInt(build, 10) < 148;
        }
      }

      return function () {
        return value;
      };
    }();

    var isR7 = function () {
      var isR7 = navigator.userAgent.indexOf('R7 Build') !== -1;
      return function () {
        return isR7;
      };
    }();

    var isLandscapeMode = function isLandscapeMode() {
      var rtn = window.orientation == 90 || window.orientation == -90;
      return isR7() ? !rtn : rtn;
    };

    var isTimestampDeltaValid = function isTimestampDeltaValid(timestampDeltaS) {
      if (isNaN(timestampDeltaS)) {
        return false;
      }

      if (timestampDeltaS <= MIN_TIMESTEP) {
        return false;
      }

      if (timestampDeltaS > MAX_TIMESTEP) {
        return false;
      }

      return true;
    };

    var getScreenWidth = function getScreenWidth() {
      return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio;
    };

    var getScreenHeight = function getScreenHeight() {
      return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio;
    };

    var requestFullscreen = function requestFullscreen(element) {
      if (isWebViewAndroid()) {
        return false;
      }

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        return false;
      }

      return true;
    };

    var exitFullscreen = function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else {
        return false;
      }

      return true;
    };

    var getFullscreenElement = function getFullscreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    };

    var linkProgram = function linkProgram(gl, vertexSource, fragmentSource, attribLocationMap) {
      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexSource);
      gl.compileShader(vertexShader);
      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentSource);
      gl.compileShader(fragmentShader);
      var program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);

      for (var attribName in attribLocationMap) {
        gl.bindAttribLocation(program, attribLocationMap[attribName], attribName);
      }

      gl.linkProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return program;
    };

    var getProgramUniforms = function getProgramUniforms(gl, program) {
      var uniforms = {};
      var uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      var uniformName = '';

      for (var i = 0; i < uniformCount; i++) {
        var uniformInfo = gl.getActiveUniform(program, i);
        uniformName = uniformInfo.name.replace('[0]', '');
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
      }

      return uniforms;
    };

    var orthoMatrix = function orthoMatrix(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right),
          bt = 1 / (bottom - top),
          nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    };

    var isMobile = function isMobile() {
      var check = false;

      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    };

    var extend = function extend(dest, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dest[key] = src[key];
        }
      }

      return dest;
    };

    var safariCssSizeWorkaround = function safariCssSizeWorkaround(canvas) {
      if (isIOS()) {
        var width = canvas.style.width;
        var height = canvas.style.height;
        canvas.style.width = parseInt(width) + 1 + 'px';
        canvas.style.height = parseInt(height) + 'px';
        setTimeout(function () {
          canvas.style.width = width;
          canvas.style.height = height;
        }, 100);
      }

      window.canvas = canvas;
    };

    var frameDataFromPose = function () {
      var piOver180 = Math.PI / 180.0;
      var rad45 = Math.PI * 0.25;

      function mat4_perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan(fov ? fov.upDegrees * piOver180 : rad45),
            downTan = Math.tan(fov ? fov.downDegrees * piOver180 : rad45),
            leftTan = Math.tan(fov ? fov.leftDegrees * piOver180 : rad45),
            rightTan = Math.tan(fov ? fov.rightDegrees * piOver180 : rad45),
            xScale = 2.0 / (leftTan + rightTan),
            yScale = 2.0 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = yScale;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = (upTan - downTan) * yScale * 0.5;
        out[10] = far / (near - far);
        out[11] = -1.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = far * near / (near - far);
        out[15] = 0.0;
        return out;
      }

      function mat4_fromRotationTranslation(out, q, v) {
        var x = q[0],
            y = q[1],
            z = q[2],
            w = q[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,
            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }

      function mat4_translate(out, a, v) {
        var x = v[0],
            y = v[1],
            z = v[2],
            a00,
            a01,
            a02,
            a03,
            a10,
            a11,
            a12,
            a13,
            a20,
            a21,
            a22,
            a23;

        if (a === out) {
          out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
          out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
          out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
          out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
          a00 = a[0];
          a01 = a[1];
          a02 = a[2];
          a03 = a[3];
          a10 = a[4];
          a11 = a[5];
          a12 = a[6];
          a13 = a[7];
          a20 = a[8];
          a21 = a[9];
          a22 = a[10];
          a23 = a[11];
          out[0] = a00;
          out[1] = a01;
          out[2] = a02;
          out[3] = a03;
          out[4] = a10;
          out[5] = a11;
          out[6] = a12;
          out[7] = a13;
          out[8] = a20;
          out[9] = a21;
          out[10] = a22;
          out[11] = a23;
          out[12] = a00 * x + a10 * y + a20 * z + a[12];
          out[13] = a01 * x + a11 * y + a21 * z + a[13];
          out[14] = a02 * x + a12 * y + a22 * z + a[14];
          out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }

        return out;
      }

      function mat4_invert(out, a) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3],
            a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7],
            a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11],
            a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15],
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,
            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
      }

      var defaultOrientation = new Float32Array([0, 0, 0, 1]);
      var defaultPosition = new Float32Array([0, 0, 0]);

      function updateEyeMatrices(projection, view, pose, fov, offset, vrDisplay) {
        mat4_perspectiveFromFieldOfView(projection, fov || null, vrDisplay.depthNear, vrDisplay.depthFar);
        var orientation = pose.orientation || defaultOrientation;
        var position = pose.position || defaultPosition;
        mat4_fromRotationTranslation(view, orientation, position);
        if (offset) mat4_translate(view, view, offset);
        mat4_invert(view, view);
      }

      return function (frameData, pose, vrDisplay) {
        if (!frameData || !pose) return false;
        frameData.pose = pose;
        frameData.timestamp = pose.timestamp;
        updateEyeMatrices(frameData.leftProjectionMatrix, frameData.leftViewMatrix, pose, vrDisplay._getFieldOfView("left"), vrDisplay._getEyeOffset("left"), vrDisplay);
        updateEyeMatrices(frameData.rightProjectionMatrix, frameData.rightViewMatrix, pose, vrDisplay._getFieldOfView("right"), vrDisplay._getEyeOffset("right"), vrDisplay);
        return true;
      };
    }();

    var isInsideCrossOriginIFrame = function isInsideCrossOriginIFrame() {
      var isFramed = window.self !== window.top;
      var refOrigin = getOriginFromUrl(document.referrer);
      var thisOrigin = getOriginFromUrl(window.location.href);
      return isFramed && refOrigin !== thisOrigin;
    };

    var getOriginFromUrl = function getOriginFromUrl(url) {
      var domainIdx;
      var protoSepIdx = url.indexOf("://");

      if (protoSepIdx !== -1) {
        domainIdx = protoSepIdx + 3;
      } else {
        domainIdx = 0;
      }

      var domainEndIdx = url.indexOf('/', domainIdx);

      if (domainEndIdx === -1) {
        domainEndIdx = url.length;
      }

      return url.substring(0, domainEndIdx);
    };

    var getQuaternionAngle = function getQuaternionAngle(quat) {
      if (quat.w > 1) {
        console.warn('getQuaternionAngle: w > 1');
        return 0;
      }

      var angle = 2 * Math.acos(quat.w);
      return angle;
    };

    var warnOnce = function () {
      var observedWarnings = {};
      return function (key, message) {
        if (observedWarnings[key] === undefined) {
          console.warn('webvr-polyfill: ' + message);
          observedWarnings[key] = true;
        }
      };
    }();

    var deprecateWarning = function deprecateWarning(deprecated, suggested) {
      var alternative = suggested ? 'Please use ' + suggested + ' instead.' : '';
      warnOnce(deprecated, deprecated + ' has been deprecated. ' + 'This may not work on native WebVR displays. ' + alternative);
    };

    function WGLUPreserveGLState(gl, bindings, callback) {
      if (!bindings) {
        callback(gl);
        return;
      }

      var boundValues = [];
      var activeTexture = null;

      for (var i = 0; i < bindings.length; ++i) {
        var binding = bindings[i];

        switch (binding) {
          case gl.TEXTURE_BINDING_2D:
          case gl.TEXTURE_BINDING_CUBE_MAP:
            var textureUnit = bindings[++i];

            if (textureUnit < gl.TEXTURE0 || textureUnit > gl.TEXTURE31) {
              console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit");
              boundValues.push(null, null);
              break;
            }

            if (!activeTexture) {
              activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE);
            }

            gl.activeTexture(textureUnit);
            boundValues.push(gl.getParameter(binding), null);
            break;

          case gl.ACTIVE_TEXTURE:
            activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE);
            boundValues.push(null);
            break;

          default:
            boundValues.push(gl.getParameter(binding));
            break;
        }
      }

      callback(gl);

      for (var i = 0; i < bindings.length; ++i) {
        var binding = bindings[i];
        var boundValue = boundValues[i];

        switch (binding) {
          case gl.ACTIVE_TEXTURE:
            break;

          case gl.ARRAY_BUFFER_BINDING:
            gl.bindBuffer(gl.ARRAY_BUFFER, boundValue);
            break;

          case gl.COLOR_CLEAR_VALUE:
            gl.clearColor(boundValue[0], boundValue[1], boundValue[2], boundValue[3]);
            break;

          case gl.COLOR_WRITEMASK:
            gl.colorMask(boundValue[0], boundValue[1], boundValue[2], boundValue[3]);
            break;

          case gl.CURRENT_PROGRAM:
            gl.useProgram(boundValue);
            break;

          case gl.ELEMENT_ARRAY_BUFFER_BINDING:
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boundValue);
            break;

          case gl.FRAMEBUFFER_BINDING:
            gl.bindFramebuffer(gl.FRAMEBUFFER, boundValue);
            break;

          case gl.RENDERBUFFER_BINDING:
            gl.bindRenderbuffer(gl.RENDERBUFFER, boundValue);
            break;

          case gl.TEXTURE_BINDING_2D:
            var textureUnit = bindings[++i];
            if (textureUnit < gl.TEXTURE0 || textureUnit > gl.TEXTURE31) break;
            gl.activeTexture(textureUnit);
            gl.bindTexture(gl.TEXTURE_2D, boundValue);
            break;

          case gl.TEXTURE_BINDING_CUBE_MAP:
            var textureUnit = bindings[++i];
            if (textureUnit < gl.TEXTURE0 || textureUnit > gl.TEXTURE31) break;
            gl.activeTexture(textureUnit);
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, boundValue);
            break;

          case gl.VIEWPORT:
            gl.viewport(boundValue[0], boundValue[1], boundValue[2], boundValue[3]);
            break;

          case gl.BLEND:
          case gl.CULL_FACE:
          case gl.DEPTH_TEST:
          case gl.SCISSOR_TEST:
          case gl.STENCIL_TEST:
            if (boundValue) {
              gl.enable(binding);
            } else {
              gl.disable(binding);
            }

            break;

          default:
            console.log("No GL restore behavior for 0x" + binding.toString(16));
            break;
        }

        if (activeTexture) {
          gl.activeTexture(activeTexture);
        }
      }
    }

    var glPreserveState = WGLUPreserveGLState;
    var distortionVS = ['attribute vec2 position;', 'attribute vec3 texCoord;', 'varying vec2 vTexCoord;', 'uniform vec4 viewportOffsetScale[2];', 'void main() {', '  vec4 viewport = viewportOffsetScale[int(texCoord.z)];', '  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;', '  gl_Position = vec4( position, 1.0, 1.0 );', '}'].join('\n');
    var distortionFS = ['precision mediump float;', 'uniform sampler2D diffuse;', 'varying vec2 vTexCoord;', 'void main() {', '  gl_FragColor = texture2D(diffuse, vTexCoord);', '}'].join('\n');

    function CardboardDistorter(gl, cardboardUI, bufferScale, dirtySubmitFrameBindings) {
      this.gl = gl;
      this.cardboardUI = cardboardUI;
      this.bufferScale = bufferScale;
      this.dirtySubmitFrameBindings = dirtySubmitFrameBindings;
      this.ctxAttribs = gl.getContextAttributes();
      this.instanceExt = gl.getExtension('ANGLE_instanced_arrays');
      this.meshWidth = 20;
      this.meshHeight = 20;
      this.bufferWidth = gl.drawingBufferWidth;
      this.bufferHeight = gl.drawingBufferHeight;
      this.realBindFramebuffer = gl.bindFramebuffer;
      this.realEnable = gl.enable;
      this.realDisable = gl.disable;
      this.realColorMask = gl.colorMask;
      this.realClearColor = gl.clearColor;
      this.realViewport = gl.viewport;

      if (!isIOS()) {
        this.realCanvasWidth = Object.getOwnPropertyDescriptor(gl.canvas.__proto__, 'width');
        this.realCanvasHeight = Object.getOwnPropertyDescriptor(gl.canvas.__proto__, 'height');
      }

      this.isPatched = false;
      this.lastBoundFramebuffer = null;
      this.cullFace = false;
      this.depthTest = false;
      this.blend = false;
      this.scissorTest = false;
      this.stencilTest = false;
      this.viewport = [0, 0, 0, 0];
      this.colorMask = [true, true, true, true];
      this.clearColor = [0, 0, 0, 0];
      this.attribs = {
        position: 0,
        texCoord: 1
      };
      this.program = linkProgram(gl, distortionVS, distortionFS, this.attribs);
      this.uniforms = getProgramUniforms(gl, this.program);
      this.viewportOffsetScale = new Float32Array(8);
      this.setTextureBounds();
      this.vertexBuffer = gl.createBuffer();
      this.indexBuffer = gl.createBuffer();
      this.indexCount = 0;
      this.renderTarget = gl.createTexture();
      this.framebuffer = gl.createFramebuffer();
      this.depthStencilBuffer = null;
      this.depthBuffer = null;
      this.stencilBuffer = null;

      if (this.ctxAttribs.depth && this.ctxAttribs.stencil) {
        this.depthStencilBuffer = gl.createRenderbuffer();
      } else if (this.ctxAttribs.depth) {
        this.depthBuffer = gl.createRenderbuffer();
      } else if (this.ctxAttribs.stencil) {
        this.stencilBuffer = gl.createRenderbuffer();
      }

      this.patch();
      this.onResize();
    }

    CardboardDistorter.prototype.destroy = function () {
      var gl = this.gl;
      this.unpatch();
      gl.deleteProgram(this.program);
      gl.deleteBuffer(this.vertexBuffer);
      gl.deleteBuffer(this.indexBuffer);
      gl.deleteTexture(this.renderTarget);
      gl.deleteFramebuffer(this.framebuffer);

      if (this.depthStencilBuffer) {
        gl.deleteRenderbuffer(this.depthStencilBuffer);
      }

      if (this.depthBuffer) {
        gl.deleteRenderbuffer(this.depthBuffer);
      }

      if (this.stencilBuffer) {
        gl.deleteRenderbuffer(this.stencilBuffer);
      }

      if (this.cardboardUI) {
        this.cardboardUI.destroy();
      }
    };

    CardboardDistorter.prototype.onResize = function () {
      var gl = this.gl;
      var self = this;
      var glState = [gl.RENDERBUFFER_BINDING, gl.TEXTURE_BINDING_2D, gl.TEXTURE0];
      glPreserveState(gl, glState, function (gl) {
        self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, null);

        if (self.scissorTest) {
          self.realDisable.call(gl, gl.SCISSOR_TEST);
        }

        self.realColorMask.call(gl, true, true, true, true);
        self.realViewport.call(gl, 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        self.realClearColor.call(gl, 0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, self.framebuffer);
        gl.bindTexture(gl.TEXTURE_2D, self.renderTarget);
        gl.texImage2D(gl.TEXTURE_2D, 0, self.ctxAttribs.alpha ? gl.RGBA : gl.RGB, self.bufferWidth, self.bufferHeight, 0, self.ctxAttribs.alpha ? gl.RGBA : gl.RGB, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, self.renderTarget, 0);

        if (self.ctxAttribs.depth && self.ctxAttribs.stencil) {
          gl.bindRenderbuffer(gl.RENDERBUFFER, self.depthStencilBuffer);
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, self.bufferWidth, self.bufferHeight);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, self.depthStencilBuffer);
        } else if (self.ctxAttribs.depth) {
          gl.bindRenderbuffer(gl.RENDERBUFFER, self.depthBuffer);
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, self.bufferWidth, self.bufferHeight);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, self.depthBuffer);
        } else if (self.ctxAttribs.stencil) {
          gl.bindRenderbuffer(gl.RENDERBUFFER, self.stencilBuffer);
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, self.bufferWidth, self.bufferHeight);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, self.stencilBuffer);
        }

        if (!gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
          console.error('Framebuffer incomplete!');
        }

        self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, self.lastBoundFramebuffer);

        if (self.scissorTest) {
          self.realEnable.call(gl, gl.SCISSOR_TEST);
        }

        self.realColorMask.apply(gl, self.colorMask);
        self.realViewport.apply(gl, self.viewport);
        self.realClearColor.apply(gl, self.clearColor);
      });

      if (this.cardboardUI) {
        this.cardboardUI.onResize();
      }
    };

    CardboardDistorter.prototype.patch = function () {
      if (this.isPatched) {
        return;
      }

      var self = this;
      var canvas = this.gl.canvas;
      var gl = this.gl;

      if (!isIOS()) {
        canvas.width = getScreenWidth() * this.bufferScale;
        canvas.height = getScreenHeight() * this.bufferScale;
        Object.defineProperty(canvas, 'width', {
          configurable: true,
          enumerable: true,
          get: function get() {
            return self.bufferWidth;
          },
          set: function set(value) {
            self.bufferWidth = value;
            self.realCanvasWidth.set.call(canvas, value);
            self.onResize();
          }
        });
        Object.defineProperty(canvas, 'height', {
          configurable: true,
          enumerable: true,
          get: function get() {
            return self.bufferHeight;
          },
          set: function set(value) {
            self.bufferHeight = value;
            self.realCanvasHeight.set.call(canvas, value);
            self.onResize();
          }
        });
      }

      this.lastBoundFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);

      if (this.lastBoundFramebuffer == null) {
        this.lastBoundFramebuffer = this.framebuffer;
        this.gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
      }

      this.gl.bindFramebuffer = function (target, framebuffer) {
        self.lastBoundFramebuffer = framebuffer ? framebuffer : self.framebuffer;
        self.realBindFramebuffer.call(gl, target, self.lastBoundFramebuffer);
      };

      this.cullFace = gl.getParameter(gl.CULL_FACE);
      this.depthTest = gl.getParameter(gl.DEPTH_TEST);
      this.blend = gl.getParameter(gl.BLEND);
      this.scissorTest = gl.getParameter(gl.SCISSOR_TEST);
      this.stencilTest = gl.getParameter(gl.STENCIL_TEST);

      gl.enable = function (pname) {
        switch (pname) {
          case gl.CULL_FACE:
            self.cullFace = true;
            break;

          case gl.DEPTH_TEST:
            self.depthTest = true;
            break;

          case gl.BLEND:
            self.blend = true;
            break;

          case gl.SCISSOR_TEST:
            self.scissorTest = true;
            break;

          case gl.STENCIL_TEST:
            self.stencilTest = true;
            break;
        }

        self.realEnable.call(gl, pname);
      };

      gl.disable = function (pname) {
        switch (pname) {
          case gl.CULL_FACE:
            self.cullFace = false;
            break;

          case gl.DEPTH_TEST:
            self.depthTest = false;
            break;

          case gl.BLEND:
            self.blend = false;
            break;

          case gl.SCISSOR_TEST:
            self.scissorTest = false;
            break;

          case gl.STENCIL_TEST:
            self.stencilTest = false;
            break;
        }

        self.realDisable.call(gl, pname);
      };

      this.colorMask = gl.getParameter(gl.COLOR_WRITEMASK);

      gl.colorMask = function (r, g, b, a) {
        self.colorMask[0] = r;
        self.colorMask[1] = g;
        self.colorMask[2] = b;
        self.colorMask[3] = a;
        self.realColorMask.call(gl, r, g, b, a);
      };

      this.clearColor = gl.getParameter(gl.COLOR_CLEAR_VALUE);

      gl.clearColor = function (r, g, b, a) {
        self.clearColor[0] = r;
        self.clearColor[1] = g;
        self.clearColor[2] = b;
        self.clearColor[3] = a;
        self.realClearColor.call(gl, r, g, b, a);
      };

      this.viewport = gl.getParameter(gl.VIEWPORT);

      gl.viewport = function (x, y, w, h) {
        self.viewport[0] = x;
        self.viewport[1] = y;
        self.viewport[2] = w;
        self.viewport[3] = h;
        self.realViewport.call(gl, x, y, w, h);
      };

      this.isPatched = true;
      safariCssSizeWorkaround(canvas);
    };

    CardboardDistorter.prototype.unpatch = function () {
      if (!this.isPatched) {
        return;
      }

      var gl = this.gl;
      var canvas = this.gl.canvas;

      if (!isIOS()) {
        Object.defineProperty(canvas, 'width', this.realCanvasWidth);
        Object.defineProperty(canvas, 'height', this.realCanvasHeight);
      }

      canvas.width = this.bufferWidth;
      canvas.height = this.bufferHeight;
      gl.bindFramebuffer = this.realBindFramebuffer;
      gl.enable = this.realEnable;
      gl.disable = this.realDisable;
      gl.colorMask = this.realColorMask;
      gl.clearColor = this.realClearColor;
      gl.viewport = this.realViewport;

      if (this.lastBoundFramebuffer == this.framebuffer) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      }

      this.isPatched = false;
      setTimeout(function () {
        safariCssSizeWorkaround(canvas);
      }, 1);
    };

    CardboardDistorter.prototype.setTextureBounds = function (leftBounds, rightBounds) {
      if (!leftBounds) {
        leftBounds = [0, 0, 0.5, 1];
      }

      if (!rightBounds) {
        rightBounds = [0.5, 0, 0.5, 1];
      }

      this.viewportOffsetScale[0] = leftBounds[0];
      this.viewportOffsetScale[1] = leftBounds[1];
      this.viewportOffsetScale[2] = leftBounds[2];
      this.viewportOffsetScale[3] = leftBounds[3];
      this.viewportOffsetScale[4] = rightBounds[0];
      this.viewportOffsetScale[5] = rightBounds[1];
      this.viewportOffsetScale[6] = rightBounds[2];
      this.viewportOffsetScale[7] = rightBounds[3];
    };

    CardboardDistorter.prototype.submitFrame = function () {
      var gl = this.gl;
      var self = this;
      var glState = [];

      if (!this.dirtySubmitFrameBindings) {
        glState.push(gl.CURRENT_PROGRAM, gl.ARRAY_BUFFER_BINDING, gl.ELEMENT_ARRAY_BUFFER_BINDING, gl.TEXTURE_BINDING_2D, gl.TEXTURE0);
      }

      glPreserveState(gl, glState, function (gl) {
        self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, null);
        var positionDivisor = 0;
        var texCoordDivisor = 0;

        if (self.instanceExt) {
          positionDivisor = gl.getVertexAttrib(self.attribs.position, self.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE);
          texCoordDivisor = gl.getVertexAttrib(self.attribs.texCoord, self.instanceExt.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE);
        }

        if (self.cullFace) {
          self.realDisable.call(gl, gl.CULL_FACE);
        }

        if (self.depthTest) {
          self.realDisable.call(gl, gl.DEPTH_TEST);
        }

        if (self.blend) {
          self.realDisable.call(gl, gl.BLEND);
        }

        if (self.scissorTest) {
          self.realDisable.call(gl, gl.SCISSOR_TEST);
        }

        if (self.stencilTest) {
          self.realDisable.call(gl, gl.STENCIL_TEST);
        }

        self.realColorMask.call(gl, true, true, true, true);
        self.realViewport.call(gl, 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        if (self.ctxAttribs.alpha || isIOS()) {
          self.realClearColor.call(gl, 0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }

        gl.useProgram(self.program);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer);
        gl.enableVertexAttribArray(self.attribs.position);
        gl.enableVertexAttribArray(self.attribs.texCoord);
        gl.vertexAttribPointer(self.attribs.position, 2, gl.FLOAT, false, 20, 0);
        gl.vertexAttribPointer(self.attribs.texCoord, 3, gl.FLOAT, false, 20, 8);

        if (self.instanceExt) {
          if (positionDivisor != 0) {
            self.instanceExt.vertexAttribDivisorANGLE(self.attribs.position, 0);
          }

          if (texCoordDivisor != 0) {
            self.instanceExt.vertexAttribDivisorANGLE(self.attribs.texCoord, 0);
          }
        }

        gl.activeTexture(gl.TEXTURE0);
        gl.uniform1i(self.uniforms.diffuse, 0);
        gl.bindTexture(gl.TEXTURE_2D, self.renderTarget);
        gl.uniform4fv(self.uniforms.viewportOffsetScale, self.viewportOffsetScale);
        gl.drawElements(gl.TRIANGLES, self.indexCount, gl.UNSIGNED_SHORT, 0);

        if (self.cardboardUI) {
          self.cardboardUI.renderNoState();
        }

        self.realBindFramebuffer.call(self.gl, gl.FRAMEBUFFER, self.framebuffer);

        if (!self.ctxAttribs.preserveDrawingBuffer) {
          self.realClearColor.call(gl, 0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }

        if (!self.dirtySubmitFrameBindings) {
          self.realBindFramebuffer.call(gl, gl.FRAMEBUFFER, self.lastBoundFramebuffer);
        }

        if (self.cullFace) {
          self.realEnable.call(gl, gl.CULL_FACE);
        }

        if (self.depthTest) {
          self.realEnable.call(gl, gl.DEPTH_TEST);
        }

        if (self.blend) {
          self.realEnable.call(gl, gl.BLEND);
        }

        if (self.scissorTest) {
          self.realEnable.call(gl, gl.SCISSOR_TEST);
        }

        if (self.stencilTest) {
          self.realEnable.call(gl, gl.STENCIL_TEST);
        }

        self.realColorMask.apply(gl, self.colorMask);
        self.realViewport.apply(gl, self.viewport);

        if (self.ctxAttribs.alpha || !self.ctxAttribs.preserveDrawingBuffer) {
          self.realClearColor.apply(gl, self.clearColor);
        }

        if (self.instanceExt) {
          if (positionDivisor != 0) {
            self.instanceExt.vertexAttribDivisorANGLE(self.attribs.position, positionDivisor);
          }

          if (texCoordDivisor != 0) {
            self.instanceExt.vertexAttribDivisorANGLE(self.attribs.texCoord, texCoordDivisor);
          }
        }
      });

      if (isIOS()) {
        var canvas = gl.canvas;

        if (canvas.width != self.bufferWidth || canvas.height != self.bufferHeight) {
          self.bufferWidth = canvas.width;
          self.bufferHeight = canvas.height;
          self.onResize();
        }
      }
    };

    CardboardDistorter.prototype.updateDeviceInfo = function (deviceInfo) {
      var gl = this.gl;
      var self = this;
      var glState = [gl.ARRAY_BUFFER_BINDING, gl.ELEMENT_ARRAY_BUFFER_BINDING];
      glPreserveState(gl, glState, function (gl) {
        var vertices = self.computeMeshVertices_(self.meshWidth, self.meshHeight, deviceInfo);
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        if (!self.indexCount) {
          var indices = self.computeMeshIndices_(self.meshWidth, self.meshHeight);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.indexBuffer);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
          self.indexCount = indices.length;
        }
      });
    };

    CardboardDistorter.prototype.computeMeshVertices_ = function (width, height, deviceInfo) {
      var vertices = new Float32Array(2 * width * height * 5);
      var lensFrustum = deviceInfo.getLeftEyeVisibleTanAngles();
      var noLensFrustum = deviceInfo.getLeftEyeNoLensTanAngles();
      var viewport = deviceInfo.getLeftEyeVisibleScreenRect(noLensFrustum);
      var vidx = 0;

      for (var e = 0; e < 2; e++) {
        for (var j = 0; j < height; j++) {
          for (var i = 0; i < width; i++, vidx++) {
            var u = i / (width - 1);
            var v = j / (height - 1);
            var s = u;
            var t = v;
            var x = lerp(lensFrustum[0], lensFrustum[2], u);
            var y = lerp(lensFrustum[3], lensFrustum[1], v);
            var d = Math.sqrt(x * x + y * y);
            var r = deviceInfo.distortion.distortInverse(d);
            var p = x * r / d;
            var q = y * r / d;
            u = (p - noLensFrustum[0]) / (noLensFrustum[2] - noLensFrustum[0]);
            v = (q - noLensFrustum[3]) / (noLensFrustum[1] - noLensFrustum[3]);
            u = (viewport.x + u * viewport.width - 0.5) * 2.0;
            v = (viewport.y + v * viewport.height - 0.5) * 2.0;
            vertices[vidx * 5 + 0] = u;
            vertices[vidx * 5 + 1] = v;
            vertices[vidx * 5 + 2] = s;
            vertices[vidx * 5 + 3] = t;
            vertices[vidx * 5 + 4] = e;
          }
        }

        var w = lensFrustum[2] - lensFrustum[0];
        lensFrustum[0] = -(w + lensFrustum[0]);
        lensFrustum[2] = w - lensFrustum[2];
        w = noLensFrustum[2] - noLensFrustum[0];
        noLensFrustum[0] = -(w + noLensFrustum[0]);
        noLensFrustum[2] = w - noLensFrustum[2];
        viewport.x = 1 - (viewport.x + viewport.width);
      }

      return vertices;
    };

    CardboardDistorter.prototype.computeMeshIndices_ = function (width, height) {
      var indices = new Uint16Array(2 * (width - 1) * (height - 1) * 6);
      var halfwidth = width / 2;
      var halfheight = height / 2;
      var vidx = 0;
      var iidx = 0;

      for (var e = 0; e < 2; e++) {
        for (var j = 0; j < height; j++) {
          for (var i = 0; i < width; i++, vidx++) {
            if (i == 0 || j == 0) continue;

            if (i <= halfwidth == j <= halfheight) {
              indices[iidx++] = vidx;
              indices[iidx++] = vidx - width - 1;
              indices[iidx++] = vidx - width;
              indices[iidx++] = vidx - width - 1;
              indices[iidx++] = vidx;
              indices[iidx++] = vidx - 1;
            } else {
              indices[iidx++] = vidx - 1;
              indices[iidx++] = vidx - width;
              indices[iidx++] = vidx;
              indices[iidx++] = vidx - width;
              indices[iidx++] = vidx - 1;
              indices[iidx++] = vidx - width - 1;
            }
          }
        }
      }

      return indices;
    };

    CardboardDistorter.prototype.getOwnPropertyDescriptor_ = function (proto, attrName) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, attrName);

      if (descriptor.get === undefined || descriptor.set === undefined) {
        descriptor.configurable = true;
        descriptor.enumerable = true;

        descriptor.get = function () {
          return this.getAttribute(attrName);
        };

        descriptor.set = function (val) {
          this.setAttribute(attrName, val);
        };
      }

      return descriptor;
    };

    var uiVS = ['attribute vec2 position;', 'uniform mat4 projectionMat;', 'void main() {', '  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );', '}'].join('\n');
    var uiFS = ['precision mediump float;', 'uniform vec4 color;', 'void main() {', '  gl_FragColor = color;', '}'].join('\n');
    var DEG2RAD = Math.PI / 180.0;
    var kAnglePerGearSection = 60;
    var kOuterRimEndAngle = 12;
    var kInnerRimBeginAngle = 20;
    var kOuterRadius = 1;
    var kMiddleRadius = 0.75;
    var kInnerRadius = 0.3125;
    var kCenterLineThicknessDp = 4;
    var kButtonWidthDp = 28;
    var kTouchSlopFactor = 1.5;

    function CardboardUI(gl) {
      this.gl = gl;
      this.attribs = {
        position: 0
      };
      this.program = linkProgram(gl, uiVS, uiFS, this.attribs);
      this.uniforms = getProgramUniforms(gl, this.program);
      this.vertexBuffer = gl.createBuffer();
      this.gearOffset = 0;
      this.gearVertexCount = 0;
      this.arrowOffset = 0;
      this.arrowVertexCount = 0;
      this.projMat = new Float32Array(16);
      this.listener = null;
      this.onResize();
    }

    CardboardUI.prototype.destroy = function () {
      var gl = this.gl;

      if (this.listener) {
        gl.canvas.removeEventListener('click', this.listener, false);
      }

      gl.deleteProgram(this.program);
      gl.deleteBuffer(this.vertexBuffer);
    };

    CardboardUI.prototype.listen = function (optionsCallback, backCallback) {
      var canvas = this.gl.canvas;

      this.listener = function (event) {
        var midline = canvas.clientWidth / 2;
        var buttonSize = kButtonWidthDp * kTouchSlopFactor;

        if (event.clientX > midline - buttonSize && event.clientX < midline + buttonSize && event.clientY > canvas.clientHeight - buttonSize) {
          optionsCallback(event);
        } else if (event.clientX < buttonSize && event.clientY < buttonSize) {
          backCallback(event);
        }
      };

      canvas.addEventListener('click', this.listener, false);
    };

    CardboardUI.prototype.onResize = function () {
      var gl = this.gl;
      var self = this;
      var glState = [gl.ARRAY_BUFFER_BINDING];
      glPreserveState(gl, glState, function (gl) {
        var vertices = [];
        var midline = gl.drawingBufferWidth / 2;
        var physicalPixels = Math.max(screen.width, screen.height) * window.devicePixelRatio;
        var scalingRatio = gl.drawingBufferWidth / physicalPixels;
        var dps = scalingRatio * window.devicePixelRatio;
        var lineWidth = kCenterLineThicknessDp * dps / 2;
        var buttonSize = kButtonWidthDp * kTouchSlopFactor * dps;
        var buttonScale = kButtonWidthDp * dps / 2;
        var buttonBorder = (kButtonWidthDp * kTouchSlopFactor - kButtonWidthDp) * dps;
        vertices.push(midline - lineWidth, buttonSize);
        vertices.push(midline - lineWidth, gl.drawingBufferHeight);
        vertices.push(midline + lineWidth, buttonSize);
        vertices.push(midline + lineWidth, gl.drawingBufferHeight);
        self.gearOffset = vertices.length / 2;

        function addGearSegment(theta, r) {
          var angle = (90 - theta) * DEG2RAD;
          var x = Math.cos(angle);
          var y = Math.sin(angle);
          vertices.push(kInnerRadius * x * buttonScale + midline, kInnerRadius * y * buttonScale + buttonScale);
          vertices.push(r * x * buttonScale + midline, r * y * buttonScale + buttonScale);
        }

        for (var i = 0; i <= 6; i++) {
          var segmentTheta = i * kAnglePerGearSection;
          addGearSegment(segmentTheta, kOuterRadius);
          addGearSegment(segmentTheta + kOuterRimEndAngle, kOuterRadius);
          addGearSegment(segmentTheta + kInnerRimBeginAngle, kMiddleRadius);
          addGearSegment(segmentTheta + (kAnglePerGearSection - kInnerRimBeginAngle), kMiddleRadius);
          addGearSegment(segmentTheta + (kAnglePerGearSection - kOuterRimEndAngle), kOuterRadius);
        }

        self.gearVertexCount = vertices.length / 2 - self.gearOffset;
        self.arrowOffset = vertices.length / 2;

        function addArrowVertex(x, y) {
          vertices.push(buttonBorder + x, gl.drawingBufferHeight - buttonBorder - y);
        }

        var angledLineWidth = lineWidth / Math.sin(45 * DEG2RAD);
        addArrowVertex(0, buttonScale);
        addArrowVertex(buttonScale, 0);
        addArrowVertex(buttonScale + angledLineWidth, angledLineWidth);
        addArrowVertex(angledLineWidth, buttonScale + angledLineWidth);
        addArrowVertex(angledLineWidth, buttonScale - angledLineWidth);
        addArrowVertex(0, buttonScale);
        addArrowVertex(buttonScale, buttonScale * 2);
        addArrowVertex(buttonScale + angledLineWidth, buttonScale * 2 - angledLineWidth);
        addArrowVertex(angledLineWidth, buttonScale - angledLineWidth);
        addArrowVertex(0, buttonScale);
        addArrowVertex(angledLineWidth, buttonScale - lineWidth);
        addArrowVertex(kButtonWidthDp * dps, buttonScale - lineWidth);
        addArrowVertex(angledLineWidth, buttonScale + lineWidth);
        addArrowVertex(kButtonWidthDp * dps, buttonScale + lineWidth);
        self.arrowVertexCount = vertices.length / 2 - self.arrowOffset;
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      });
    };

    CardboardUI.prototype.render = function () {
      var gl = this.gl;
      var self = this;
      var glState = [gl.CULL_FACE, gl.DEPTH_TEST, gl.BLEND, gl.SCISSOR_TEST, gl.STENCIL_TEST, gl.COLOR_WRITEMASK, gl.VIEWPORT, gl.CURRENT_PROGRAM, gl.ARRAY_BUFFER_BINDING];
      glPreserveState(gl, glState, function (gl) {
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.BLEND);
        gl.disable(gl.SCISSOR_TEST);
        gl.disable(gl.STENCIL_TEST);
        gl.colorMask(true, true, true, true);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        self.renderNoState();
      });
    };

    CardboardUI.prototype.renderNoState = function () {
      var gl = this.gl;
      gl.useProgram(this.program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.enableVertexAttribArray(this.attribs.position);
      gl.vertexAttribPointer(this.attribs.position, 2, gl.FLOAT, false, 8, 0);
      gl.uniform4f(this.uniforms.color, 1.0, 1.0, 1.0, 1.0);
      orthoMatrix(this.projMat, 0, gl.drawingBufferWidth, 0, gl.drawingBufferHeight, 0.1, 1024.0);
      gl.uniformMatrix4fv(this.uniforms.projectionMat, false, this.projMat);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.drawArrays(gl.TRIANGLE_STRIP, this.gearOffset, this.gearVertexCount);
      gl.drawArrays(gl.TRIANGLE_STRIP, this.arrowOffset, this.arrowVertexCount);
    };

    function Distortion(coefficients) {
      this.coefficients = coefficients;
    }

    Distortion.prototype.distortInverse = function (radius) {
      var r0 = 0;
      var r1 = 1;
      var dr0 = radius - this.distort(r0);

      while (Math.abs(r1 - r0) > 0.0001) {
        var dr1 = radius - this.distort(r1);
        var r2 = r1 - dr1 * ((r1 - r0) / (dr1 - dr0));
        r0 = r1;
        r1 = r2;
        dr0 = dr1;
      }

      return r1;
    };

    Distortion.prototype.distort = function (radius) {
      var r2 = radius * radius;
      var ret = 0;

      for (var i = 0; i < this.coefficients.length; i++) {
        ret = r2 * (ret + this.coefficients[i]);
      }

      return (ret + 1) * radius;
    };

    var degToRad = Math.PI / 180;
    var radToDeg = 180 / Math.PI;

    var Vector3 = function Vector3(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    };

    Vector3.prototype = {
      constructor: Vector3,
      set: function set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      },
      copy: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
      },
      length: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
      normalize: function normalize() {
        var scalar = this.length();

        if (scalar !== 0) {
          var invScalar = 1 / scalar;
          this.multiplyScalar(invScalar);
        } else {
          this.x = 0;
          this.y = 0;
          this.z = 0;
        }

        return this;
      },
      multiplyScalar: function multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
      },
      applyQuaternion: function applyQuaternion(q) {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var qx = q.x;
        var qy = q.y;
        var qz = q.z;
        var qw = q.w;
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
      },
      dot: function dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      },
      crossVectors: function crossVectors(a, b) {
        var ax = a.x,
            ay = a.y,
            az = a.z;
        var bx = b.x,
            by = b.y,
            bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
      }
    };

    var Quaternion = function Quaternion(x, y, z, w) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w !== undefined ? w : 1;
    };

    Quaternion.prototype = {
      constructor: Quaternion,
      set: function set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
      },
      copy: function copy(quaternion) {
        this.x = quaternion.x;
        this.y = quaternion.y;
        this.z = quaternion.z;
        this.w = quaternion.w;
        return this;
      },
      setFromEulerXYZ: function setFromEulerXYZ(x, y, z) {
        var c1 = Math.cos(x / 2);
        var c2 = Math.cos(y / 2);
        var c3 = Math.cos(z / 2);
        var s1 = Math.sin(x / 2);
        var s2 = Math.sin(y / 2);
        var s3 = Math.sin(z / 2);
        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;
        return this;
      },
      setFromEulerYXZ: function setFromEulerYXZ(x, y, z) {
        var c1 = Math.cos(x / 2);
        var c2 = Math.cos(y / 2);
        var c3 = Math.cos(z / 2);
        var s1 = Math.sin(x / 2);
        var s2 = Math.sin(y / 2);
        var s3 = Math.sin(z / 2);
        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;
        return this;
      },
      setFromAxisAngle: function setFromAxisAngle(axis, angle) {
        var halfAngle = angle / 2,
            s = Math.sin(halfAngle);
        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos(halfAngle);
        return this;
      },
      multiply: function multiply(q) {
        return this.multiplyQuaternions(this, q);
      },
      multiplyQuaternions: function multiplyQuaternions(a, b) {
        var qax = a.x,
            qay = a.y,
            qaz = a.z,
            qaw = a.w;
        var qbx = b.x,
            qby = b.y,
            qbz = b.z,
            qbw = b.w;
        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        return this;
      },
      inverse: function inverse() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this.normalize();
        return this;
      },
      normalize: function normalize() {
        var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

        if (l === 0) {
          this.x = 0;
          this.y = 0;
          this.z = 0;
          this.w = 1;
        } else {
          l = 1 / l;
          this.x = this.x * l;
          this.y = this.y * l;
          this.z = this.z * l;
          this.w = this.w * l;
        }

        return this;
      },
      slerp: function slerp(qb, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(qb);
        var x = this.x,
            y = this.y,
            z = this.z,
            w = this.w;
        var cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;

        if (cosHalfTheta < 0) {
          this.w = -qb.w;
          this.x = -qb.x;
          this.y = -qb.y;
          this.z = -qb.z;
          cosHalfTheta = -cosHalfTheta;
        } else {
          this.copy(qb);
        }

        if (cosHalfTheta >= 1.0) {
          this.w = w;
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
        }

        var halfTheta = Math.acos(cosHalfTheta);
        var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

        if (Math.abs(sinHalfTheta) < 0.001) {
          this.w = 0.5 * (w + this.w);
          this.x = 0.5 * (x + this.x);
          this.y = 0.5 * (y + this.y);
          this.z = 0.5 * (z + this.z);
          return this;
        }

        var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
            ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
        this.w = w * ratioA + this.w * ratioB;
        this.x = x * ratioA + this.x * ratioB;
        this.y = y * ratioA + this.y * ratioB;
        this.z = z * ratioA + this.z * ratioB;
        return this;
      },
      setFromUnitVectors: function () {
        var v1, r;
        var EPS = 0.000001;
        return function (vFrom, vTo) {
          if (v1 === undefined) v1 = new Vector3();
          r = vFrom.dot(vTo) + 1;

          if (r < EPS) {
            r = 0;

            if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
              v1.set(-vFrom.y, vFrom.x, 0);
            } else {
              v1.set(0, -vFrom.z, vFrom.y);
            }
          } else {
            v1.crossVectors(vFrom, vTo);
          }

          this.x = v1.x;
          this.y = v1.y;
          this.z = v1.z;
          this.w = r;
          this.normalize();
          return this;
        };
      }()
    };

    function Device(params) {
      this.width = params.width || getScreenWidth();
      this.height = params.height || getScreenHeight();
      this.widthMeters = params.widthMeters;
      this.heightMeters = params.heightMeters;
      this.bevelMeters = params.bevelMeters;
    }

    var DEFAULT_ANDROID = new Device({
      widthMeters: 0.110,
      heightMeters: 0.062,
      bevelMeters: 0.004
    });
    var DEFAULT_IOS = new Device({
      widthMeters: 0.1038,
      heightMeters: 0.0584,
      bevelMeters: 0.004
    });
    var Viewers = {
      CardboardV1: new CardboardViewer({
        id: 'CardboardV1',
        label: 'Cardboard I/O 2014',
        fov: 40,
        interLensDistance: 0.060,
        baselineLensDistance: 0.035,
        screenLensDistance: 0.042,
        distortionCoefficients: [0.441, 0.156],
        inverseCoefficients: [-0.4410035, 0.42756155, -0.4804439, 0.5460139, -0.58821183, 0.5733938, -0.48303202, 0.33299083, -0.17573841, 0.0651772, -0.01488963, 0.001559834]
      }),
      CardboardV2: new CardboardViewer({
        id: 'CardboardV2',
        label: 'Cardboard I/O 2015',
        fov: 60,
        interLensDistance: 0.064,
        baselineLensDistance: 0.035,
        screenLensDistance: 0.039,
        distortionCoefficients: [0.34, 0.55],
        inverseCoefficients: [-0.33836704, -0.18162185, 0.862655, -1.2462051, 1.0560602, -0.58208317, 0.21609078, -0.05444823, 0.009177956, -9.904169E-4, 6.183535E-5, -1.6981803E-6]
      })
    };

    function DeviceInfo(deviceParams, additionalViewers) {
      this.viewer = Viewers.CardboardV2;
      this.updateDeviceParams(deviceParams);
      this.distortion = new Distortion(this.viewer.distortionCoefficients);

      for (var i = 0; i < additionalViewers.length; i++) {
        var viewer = additionalViewers[i];
        Viewers[viewer.id] = new CardboardViewer(viewer);
      }
    }

    DeviceInfo.prototype.updateDeviceParams = function (deviceParams) {
      this.device = this.determineDevice_(deviceParams) || this.device;
    };

    DeviceInfo.prototype.getDevice = function () {
      return this.device;
    };

    DeviceInfo.prototype.setViewer = function (viewer) {
      this.viewer = viewer;
      this.distortion = new Distortion(this.viewer.distortionCoefficients);
    };

    DeviceInfo.prototype.determineDevice_ = function (deviceParams) {
      if (!deviceParams) {
        if (isIOS()) {
          console.warn('Using fallback iOS device measurements.');
          return DEFAULT_IOS;
        } else {
          console.warn('Using fallback Android device measurements.');
          return DEFAULT_ANDROID;
        }
      }

      var METERS_PER_INCH = 0.0254;
      var metersPerPixelX = METERS_PER_INCH / deviceParams.xdpi;
      var metersPerPixelY = METERS_PER_INCH / deviceParams.ydpi;
      var width = getScreenWidth();
      var height = getScreenHeight();
      return new Device({
        widthMeters: metersPerPixelX * width,
        heightMeters: metersPerPixelY * height,
        bevelMeters: deviceParams.bevelMm * 0.001
      });
    };

    DeviceInfo.prototype.getDistortedFieldOfViewLeftEye = function () {
      var viewer = this.viewer;
      var device = this.device;
      var distortion = this.distortion;
      var eyeToScreenDistance = viewer.screenLensDistance;
      var outerDist = (device.widthMeters - viewer.interLensDistance) / 2;
      var innerDist = viewer.interLensDistance / 2;
      var bottomDist = viewer.baselineLensDistance - device.bevelMeters;
      var topDist = device.heightMeters - bottomDist;
      var outerAngle = radToDeg * Math.atan(distortion.distort(outerDist / eyeToScreenDistance));
      var innerAngle = radToDeg * Math.atan(distortion.distort(innerDist / eyeToScreenDistance));
      var bottomAngle = radToDeg * Math.atan(distortion.distort(bottomDist / eyeToScreenDistance));
      var topAngle = radToDeg * Math.atan(distortion.distort(topDist / eyeToScreenDistance));
      return {
        leftDegrees: Math.min(outerAngle, viewer.fov),
        rightDegrees: Math.min(innerAngle, viewer.fov),
        downDegrees: Math.min(bottomAngle, viewer.fov),
        upDegrees: Math.min(topAngle, viewer.fov)
      };
    };

    DeviceInfo.prototype.getLeftEyeVisibleTanAngles = function () {
      var viewer = this.viewer;
      var device = this.device;
      var distortion = this.distortion;
      var fovLeft = Math.tan(-degToRad * viewer.fov);
      var fovTop = Math.tan(degToRad * viewer.fov);
      var fovRight = Math.tan(degToRad * viewer.fov);
      var fovBottom = Math.tan(-degToRad * viewer.fov);
      var halfWidth = device.widthMeters / 4;
      var halfHeight = device.heightMeters / 2;
      var verticalLensOffset = viewer.baselineLensDistance - device.bevelMeters - halfHeight;
      var centerX = viewer.interLensDistance / 2 - halfWidth;
      var centerY = -verticalLensOffset;
      var centerZ = viewer.screenLensDistance;
      var screenLeft = distortion.distort((centerX - halfWidth) / centerZ);
      var screenTop = distortion.distort((centerY + halfHeight) / centerZ);
      var screenRight = distortion.distort((centerX + halfWidth) / centerZ);
      var screenBottom = distortion.distort((centerY - halfHeight) / centerZ);
      var result = new Float32Array(4);
      result[0] = Math.max(fovLeft, screenLeft);
      result[1] = Math.min(fovTop, screenTop);
      result[2] = Math.min(fovRight, screenRight);
      result[3] = Math.max(fovBottom, screenBottom);
      return result;
    };

    DeviceInfo.prototype.getLeftEyeNoLensTanAngles = function () {
      var viewer = this.viewer;
      var device = this.device;
      var distortion = this.distortion;
      var result = new Float32Array(4);
      var fovLeft = distortion.distortInverse(Math.tan(-degToRad * viewer.fov));
      var fovTop = distortion.distortInverse(Math.tan(degToRad * viewer.fov));
      var fovRight = distortion.distortInverse(Math.tan(degToRad * viewer.fov));
      var fovBottom = distortion.distortInverse(Math.tan(-degToRad * viewer.fov));
      var halfWidth = device.widthMeters / 4;
      var halfHeight = device.heightMeters / 2;
      var verticalLensOffset = viewer.baselineLensDistance - device.bevelMeters - halfHeight;
      var centerX = viewer.interLensDistance / 2 - halfWidth;
      var centerY = -verticalLensOffset;
      var centerZ = viewer.screenLensDistance;
      var screenLeft = (centerX - halfWidth) / centerZ;
      var screenTop = (centerY + halfHeight) / centerZ;
      var screenRight = (centerX + halfWidth) / centerZ;
      var screenBottom = (centerY - halfHeight) / centerZ;
      result[0] = Math.max(fovLeft, screenLeft);
      result[1] = Math.min(fovTop, screenTop);
      result[2] = Math.min(fovRight, screenRight);
      result[3] = Math.max(fovBottom, screenBottom);
      return result;
    };

    DeviceInfo.prototype.getLeftEyeVisibleScreenRect = function (undistortedFrustum) {
      var viewer = this.viewer;
      var device = this.device;
      var dist = viewer.screenLensDistance;
      var eyeX = (device.widthMeters - viewer.interLensDistance) / 2;
      var eyeY = viewer.baselineLensDistance - device.bevelMeters;
      var left = (undistortedFrustum[0] * dist + eyeX) / device.widthMeters;
      var top = (undistortedFrustum[1] * dist + eyeY) / device.heightMeters;
      var right = (undistortedFrustum[2] * dist + eyeX) / device.widthMeters;
      var bottom = (undistortedFrustum[3] * dist + eyeY) / device.heightMeters;
      return {
        x: left,
        y: bottom,
        width: right - left,
        height: top - bottom
      };
    };

    DeviceInfo.prototype.getFieldOfViewLeftEye = function (opt_isUndistorted) {
      return opt_isUndistorted ? this.getUndistortedFieldOfViewLeftEye() : this.getDistortedFieldOfViewLeftEye();
    };

    DeviceInfo.prototype.getFieldOfViewRightEye = function (opt_isUndistorted) {
      var fov = this.getFieldOfViewLeftEye(opt_isUndistorted);
      return {
        leftDegrees: fov.rightDegrees,
        rightDegrees: fov.leftDegrees,
        upDegrees: fov.upDegrees,
        downDegrees: fov.downDegrees
      };
    };

    DeviceInfo.prototype.getUndistortedFieldOfViewLeftEye = function () {
      var p = this.getUndistortedParams_();
      return {
        leftDegrees: radToDeg * Math.atan(p.outerDist),
        rightDegrees: radToDeg * Math.atan(p.innerDist),
        downDegrees: radToDeg * Math.atan(p.bottomDist),
        upDegrees: radToDeg * Math.atan(p.topDist)
      };
    };

    DeviceInfo.prototype.getUndistortedViewportLeftEye = function () {
      var p = this.getUndistortedParams_();
      var viewer = this.viewer;
      var device = this.device;
      var eyeToScreenDistance = viewer.screenLensDistance;
      var screenWidth = device.widthMeters / eyeToScreenDistance;
      var screenHeight = device.heightMeters / eyeToScreenDistance;
      var xPxPerTanAngle = device.width / screenWidth;
      var yPxPerTanAngle = device.height / screenHeight;
      var x = Math.round((p.eyePosX - p.outerDist) * xPxPerTanAngle);
      var y = Math.round((p.eyePosY - p.bottomDist) * yPxPerTanAngle);
      return {
        x: x,
        y: y,
        width: Math.round((p.eyePosX + p.innerDist) * xPxPerTanAngle) - x,
        height: Math.round((p.eyePosY + p.topDist) * yPxPerTanAngle) - y
      };
    };

    DeviceInfo.prototype.getUndistortedParams_ = function () {
      var viewer = this.viewer;
      var device = this.device;
      var distortion = this.distortion;
      var eyeToScreenDistance = viewer.screenLensDistance;
      var halfLensDistance = viewer.interLensDistance / 2 / eyeToScreenDistance;
      var screenWidth = device.widthMeters / eyeToScreenDistance;
      var screenHeight = device.heightMeters / eyeToScreenDistance;
      var eyePosX = screenWidth / 2 - halfLensDistance;
      var eyePosY = (viewer.baselineLensDistance - device.bevelMeters) / eyeToScreenDistance;
      var maxFov = viewer.fov;
      var viewerMax = distortion.distortInverse(Math.tan(degToRad * maxFov));
      var outerDist = Math.min(eyePosX, viewerMax);
      var innerDist = Math.min(halfLensDistance, viewerMax);
      var bottomDist = Math.min(eyePosY, viewerMax);
      var topDist = Math.min(screenHeight - eyePosY, viewerMax);
      return {
        outerDist: outerDist,
        innerDist: innerDist,
        topDist: topDist,
        bottomDist: bottomDist,
        eyePosX: eyePosX,
        eyePosY: eyePosY
      };
    };

    function CardboardViewer(params) {
      this.id = params.id;
      this.label = params.label;
      this.fov = params.fov;
      this.interLensDistance = params.interLensDistance;
      this.baselineLensDistance = params.baselineLensDistance;
      this.screenLensDistance = params.screenLensDistance;
      this.distortionCoefficients = params.distortionCoefficients;
      this.inverseCoefficients = params.inverseCoefficients;
    }

    DeviceInfo.Viewers = Viewers;
    var format = 1;
    var last_updated = "2019-11-09T17:36:14Z";
    var devices = [{
      "type": "android",
      "rules": [{
        "mdmh": "asus/*/Nexus 7/*"
      }, {
        "ua": "Nexus 7"
      }],
      "dpi": [320.8, 323],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "asus/*/ASUS_X00PD/*"
      }, {
        "ua": "ASUS_X00PD"
      }],
      "dpi": 245,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "asus/*/ASUS_X008D/*"
      }, {
        "ua": "ASUS_X008D"
      }],
      "dpi": 282,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "asus/*/ASUS_Z00AD/*"
      }, {
        "ua": "ASUS_Z00AD"
      }],
      "dpi": [403, 404.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel 2 XL/*"
      }, {
        "ua": "Pixel 2 XL"
      }],
      "dpi": 537.9,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel 3 XL/*"
      }, {
        "ua": "Pixel 3 XL"
      }],
      "dpi": [558.5, 553.8],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel XL/*"
      }, {
        "ua": "Pixel XL"
      }],
      "dpi": [537.9, 533],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel 3/*"
      }, {
        "ua": "Pixel 3"
      }],
      "dpi": 442.4,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel 2/*"
      }, {
        "ua": "Pixel 2"
      }],
      "dpi": 441,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Google/*/Pixel/*"
      }, {
        "ua": "Pixel"
      }],
      "dpi": [432.6, 436.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "HTC/*/HTC6435LVW/*"
      }, {
        "ua": "HTC6435LVW"
      }],
      "dpi": [449.7, 443.3],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "HTC/*/HTC One XL/*"
      }, {
        "ua": "HTC One XL"
      }],
      "dpi": [315.3, 314.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "htc/*/Nexus 9/*"
      }, {
        "ua": "Nexus 9"
      }],
      "dpi": 289,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "HTC/*/HTC One M9/*"
      }, {
        "ua": "HTC One M9"
      }],
      "dpi": [442.5, 443.3],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "HTC/*/HTC One_M8/*"
      }, {
        "ua": "HTC One_M8"
      }],
      "dpi": [449.7, 447.4],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "HTC/*/HTC One/*"
      }, {
        "ua": "HTC One"
      }],
      "dpi": 472.8,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Huawei/*/Nexus 6P/*"
      }, {
        "ua": "Nexus 6P"
      }],
      "dpi": [515.1, 518],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Huawei/*/BLN-L24/*"
      }, {
        "ua": "HONORBLN-L24"
      }],
      "dpi": 480,
      "bw": 4,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Huawei/*/BKL-L09/*"
      }, {
        "ua": "BKL-L09"
      }],
      "dpi": 403,
      "bw": 3.47,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LENOVO/*/Lenovo PB2-690Y/*"
      }, {
        "ua": "Lenovo PB2-690Y"
      }],
      "dpi": [457.2, 454.713],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/Nexus 5X/*"
      }, {
        "ua": "Nexus 5X"
      }],
      "dpi": [422, 419.9],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LGMS345/*"
      }, {
        "ua": "LGMS345"
      }],
      "dpi": [221.7, 219.1],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LG-D800/*"
      }, {
        "ua": "LG-D800"
      }],
      "dpi": [422, 424.1],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LG-D850/*"
      }, {
        "ua": "LG-D850"
      }],
      "dpi": [537.9, 541.9],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/VS985 4G/*"
      }, {
        "ua": "VS985 4G"
      }],
      "dpi": [537.9, 535.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/Nexus 5/*"
      }, {
        "ua": "Nexus 5 B"
      }],
      "dpi": [442.4, 444.8],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/Nexus 4/*"
      }, {
        "ua": "Nexus 4"
      }],
      "dpi": [319.8, 318.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LG-P769/*"
      }, {
        "ua": "LG-P769"
      }],
      "dpi": [240.6, 247.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LGMS323/*"
      }, {
        "ua": "LGMS323"
      }],
      "dpi": [206.6, 204.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "LGE/*/LGLS996/*"
      }, {
        "ua": "LGLS996"
      }],
      "dpi": [403.4, 401.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Micromax/*/4560MMX/*"
      }, {
        "ua": "4560MMX"
      }],
      "dpi": [240, 219.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Micromax/*/A250/*"
      }, {
        "ua": "Micromax A250"
      }],
      "dpi": [480, 446.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Micromax/*/Micromax AQ4501/*"
      }, {
        "ua": "Micromax AQ4501"
      }],
      "dpi": 240,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/G5/*"
      }, {
        "ua": "Moto G (5) Plus"
      }],
      "dpi": [403.4, 403],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/DROID RAZR/*"
      }, {
        "ua": "DROID RAZR"
      }],
      "dpi": [368.1, 256.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT830C/*"
      }, {
        "ua": "XT830C"
      }],
      "dpi": [254, 255.9],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1021/*"
      }, {
        "ua": "XT1021"
      }],
      "dpi": [254, 256.7],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1023/*"
      }, {
        "ua": "XT1023"
      }],
      "dpi": [254, 256.7],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1028/*"
      }, {
        "ua": "XT1028"
      }],
      "dpi": [326.6, 327.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1034/*"
      }, {
        "ua": "XT1034"
      }],
      "dpi": [326.6, 328.4],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1053/*"
      }, {
        "ua": "XT1053"
      }],
      "dpi": [315.3, 316.1],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1562/*"
      }, {
        "ua": "XT1562"
      }],
      "dpi": [403.4, 402.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/Nexus 6/*"
      }, {
        "ua": "Nexus 6 B"
      }],
      "dpi": [494.3, 489.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1063/*"
      }, {
        "ua": "XT1063"
      }],
      "dpi": [295, 296.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1064/*"
      }, {
        "ua": "XT1064"
      }],
      "dpi": [295, 295.6],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1092/*"
      }, {
        "ua": "XT1092"
      }],
      "dpi": [422, 424.1],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/XT1095/*"
      }, {
        "ua": "XT1095"
      }],
      "dpi": [422, 423.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "motorola/*/G4/*"
      }, {
        "ua": "Moto G (4)"
      }],
      "dpi": 401,
      "bw": 4,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/A0001/*"
      }, {
        "ua": "A0001"
      }],
      "dpi": [403.4, 401],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE E1001/*"
      }, {
        "ua": "ONE E1001"
      }],
      "dpi": [442.4, 441.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE E1003/*"
      }, {
        "ua": "ONE E1003"
      }],
      "dpi": [442.4, 441.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE E1005/*"
      }, {
        "ua": "ONE E1005"
      }],
      "dpi": [442.4, 441.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE A2001/*"
      }, {
        "ua": "ONE A2001"
      }],
      "dpi": [391.9, 405.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE A2003/*"
      }, {
        "ua": "ONE A2003"
      }],
      "dpi": [391.9, 405.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE A2005/*"
      }, {
        "ua": "ONE A2005"
      }],
      "dpi": [391.9, 405.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A3000/*"
      }, {
        "ua": "ONEPLUS A3000"
      }],
      "dpi": 401,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A3003/*"
      }, {
        "ua": "ONEPLUS A3003"
      }],
      "dpi": 401,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A3010/*"
      }, {
        "ua": "ONEPLUS A3010"
      }],
      "dpi": 401,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A5000/*"
      }, {
        "ua": "ONEPLUS A5000 "
      }],
      "dpi": [403.411, 399.737],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONE A5010/*"
      }, {
        "ua": "ONEPLUS A5010"
      }],
      "dpi": [403, 400],
      "bw": 2,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A6000/*"
      }, {
        "ua": "ONEPLUS A6000"
      }],
      "dpi": 401,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A6003/*"
      }, {
        "ua": "ONEPLUS A6003"
      }],
      "dpi": 401,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A6010/*"
      }, {
        "ua": "ONEPLUS A6010"
      }],
      "dpi": 401,
      "bw": 2,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OnePlus/*/ONEPLUS A6013/*"
      }, {
        "ua": "ONEPLUS A6013"
      }],
      "dpi": 401,
      "bw": 2,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "OPPO/*/X909/*"
      }, {
        "ua": "X909"
      }],
      "dpi": [442.4, 444.1],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9082/*"
      }, {
        "ua": "GT-I9082"
      }],
      "dpi": [184.7, 185.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G360P/*"
      }, {
        "ua": "SM-G360P"
      }],
      "dpi": [196.7, 205.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/Nexus S/*"
      }, {
        "ua": "Nexus S"
      }],
      "dpi": [234.5, 229.8],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9300/*"
      }, {
        "ua": "GT-I9300"
      }],
      "dpi": [304.8, 303.9],
      "bw": 5,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-T230NU/*"
      }, {
        "ua": "SM-T230NU"
      }],
      "dpi": 216,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SGH-T399/*"
      }, {
        "ua": "SGH-T399"
      }],
      "dpi": [217.7, 231.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SGH-M919/*"
      }, {
        "ua": "SGH-M919"
      }],
      "dpi": [440.8, 437.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N9005/*"
      }, {
        "ua": "SM-N9005"
      }],
      "dpi": [386.4, 387],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SAMSUNG-SM-N900A/*"
      }, {
        "ua": "SAMSUNG-SM-N900A"
      }],
      "dpi": [386.4, 387.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9500/*"
      }, {
        "ua": "GT-I9500"
      }],
      "dpi": [442.5, 443.3],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9505/*"
      }, {
        "ua": "GT-I9505"
      }],
      "dpi": 439.4,
      "bw": 4,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G900F/*"
      }, {
        "ua": "SM-G900F"
      }],
      "dpi": [415.6, 431.6],
      "bw": 5,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G900M/*"
      }, {
        "ua": "SM-G900M"
      }],
      "dpi": [415.6, 431.6],
      "bw": 5,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G800F/*"
      }, {
        "ua": "SM-G800F"
      }],
      "dpi": 326.8,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G906S/*"
      }, {
        "ua": "SM-G906S"
      }],
      "dpi": [562.7, 572.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9300/*"
      }, {
        "ua": "GT-I9300"
      }],
      "dpi": [306.7, 304.8],
      "bw": 5,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-T535/*"
      }, {
        "ua": "SM-T535"
      }],
      "dpi": [142.6, 136.4],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N920C/*"
      }, {
        "ua": "SM-N920C"
      }],
      "dpi": [515.1, 518.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N920P/*"
      }, {
        "ua": "SM-N920P"
      }],
      "dpi": [386.3655, 390.144],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N920W8/*"
      }, {
        "ua": "SM-N920W8"
      }],
      "dpi": [515.1, 518.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9300I/*"
      }, {
        "ua": "GT-I9300I"
      }],
      "dpi": [304.8, 305.8],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-I9195/*"
      }, {
        "ua": "GT-I9195"
      }],
      "dpi": [249.4, 256.7],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SPH-L520/*"
      }, {
        "ua": "SPH-L520"
      }],
      "dpi": [249.4, 255.9],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SAMSUNG-SGH-I717/*"
      }, {
        "ua": "SAMSUNG-SGH-I717"
      }],
      "dpi": 285.8,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SPH-D710/*"
      }, {
        "ua": "SPH-D710"
      }],
      "dpi": [217.7, 204.2],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/GT-N7100/*"
      }, {
        "ua": "GT-N7100"
      }],
      "dpi": 265.1,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SCH-I605/*"
      }, {
        "ua": "SCH-I605"
      }],
      "dpi": 265.1,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/Galaxy Nexus/*"
      }, {
        "ua": "Galaxy Nexus"
      }],
      "dpi": [315.3, 314.2],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N910H/*"
      }, {
        "ua": "SM-N910H"
      }],
      "dpi": [515.1, 518],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-N910C/*"
      }, {
        "ua": "SM-N910C"
      }],
      "dpi": [515.2, 520.2],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G130M/*"
      }, {
        "ua": "SM-G130M"
      }],
      "dpi": [165.9, 164.8],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G928I/*"
      }, {
        "ua": "SM-G928I"
      }],
      "dpi": [515.1, 518.4],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G920F/*"
      }, {
        "ua": "SM-G920F"
      }],
      "dpi": 580.6,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G920P/*"
      }, {
        "ua": "SM-G920P"
      }],
      "dpi": [522.5, 577],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G925F/*"
      }, {
        "ua": "SM-G925F"
      }],
      "dpi": 580.6,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G925V/*"
      }, {
        "ua": "SM-G925V"
      }],
      "dpi": [522.5, 576.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G930F/*"
      }, {
        "ua": "SM-G930F"
      }],
      "dpi": 576.6,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G935F/*"
      }, {
        "ua": "SM-G935F"
      }],
      "dpi": 533,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G950F/*"
      }, {
        "ua": "SM-G950F"
      }],
      "dpi": [562.707, 565.293],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G955U/*"
      }, {
        "ua": "SM-G955U"
      }],
      "dpi": [522.514, 525.762],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G955F/*"
      }, {
        "ua": "SM-G955F"
      }],
      "dpi": [522.514, 525.762],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960F/*"
      }, {
        "ua": "SM-G960F"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G9600/*"
      }, {
        "ua": "SM-G9600"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960T/*"
      }, {
        "ua": "SM-G960T"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960N/*"
      }, {
        "ua": "SM-G960N"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960U/*"
      }, {
        "ua": "SM-G960U"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G9608/*"
      }, {
        "ua": "SM-G9608"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960FD/*"
      }, {
        "ua": "SM-G960FD"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G960W/*"
      }, {
        "ua": "SM-G960W"
      }],
      "dpi": [569.575, 571.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G965F/*"
      }, {
        "ua": "SM-G965F"
      }],
      "dpi": 529,
      "bw": 2,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Sony/*/C6903/*"
      }, {
        "ua": "C6903"
      }],
      "dpi": [442.5, 443.3],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Sony/*/D6653/*"
      }, {
        "ua": "D6653"
      }],
      "dpi": [428.6, 427.6],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Sony/*/E6653/*"
      }, {
        "ua": "E6653"
      }],
      "dpi": [428.6, 425.7],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Sony/*/E6853/*"
      }, {
        "ua": "E6853"
      }],
      "dpi": [403.4, 401.9],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Sony/*/SGP321/*"
      }, {
        "ua": "SGP321"
      }],
      "dpi": [224.7, 224.1],
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "TCT/*/ALCATEL ONE TOUCH Fierce/*"
      }, {
        "ua": "ALCATEL ONE TOUCH Fierce"
      }],
      "dpi": [240, 247.5],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "THL/*/thl 5000/*"
      }, {
        "ua": "thl 5000"
      }],
      "dpi": [480, 443.3],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Fly/*/IQ4412/*"
      }, {
        "ua": "IQ4412"
      }],
      "dpi": 307.9,
      "bw": 3,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "ZTE/*/ZTE Blade L2/*"
      }, {
        "ua": "ZTE Blade L2"
      }],
      "dpi": 240,
      "bw": 3,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "BENEVE/*/VR518/*"
      }, {
        "ua": "VR518"
      }],
      "dpi": 480,
      "bw": 3,
      "ac": 500
    }, {
      "type": "ios",
      "rules": [{
        "res": [640, 960]
      }],
      "dpi": [325.1, 328.4],
      "bw": 4,
      "ac": 1000
    }, {
      "type": "ios",
      "rules": [{
        "res": [640, 1136]
      }],
      "dpi": [317.1, 320.2],
      "bw": 3,
      "ac": 1000
    }, {
      "type": "ios",
      "rules": [{
        "res": [750, 1334]
      }],
      "dpi": 326.4,
      "bw": 4,
      "ac": 1000
    }, {
      "type": "ios",
      "rules": [{
        "res": [1242, 2208]
      }],
      "dpi": [453.6, 458.4],
      "bw": 4,
      "ac": 1000
    }, {
      "type": "ios",
      "rules": [{
        "res": [1125, 2001]
      }],
      "dpi": [410.9, 415.4],
      "bw": 4,
      "ac": 1000
    }, {
      "type": "ios",
      "rules": [{
        "res": [1125, 2436]
      }],
      "dpi": 458,
      "bw": 4,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Huawei/*/EML-L29/*"
      }, {
        "ua": "EML-L29"
      }],
      "dpi": 428,
      "bw": 3.45,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "Nokia/*/Nokia 7.1/*"
      }, {
        "ua": "Nokia 7.1"
      }],
      "dpi": [432, 431.9],
      "bw": 3,
      "ac": 500
    }, {
      "type": "ios",
      "rules": [{
        "res": [1242, 2688]
      }],
      "dpi": 458,
      "bw": 4,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G570M/*"
      }, {
        "ua": "SM-G570M"
      }],
      "dpi": 320,
      "bw": 3.684,
      "ac": 1000
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G970F/*"
      }, {
        "ua": "SM-G970F"
      }],
      "dpi": 438,
      "bw": 2.281,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G973F/*"
      }, {
        "ua": "SM-G973F"
      }],
      "dpi": 550,
      "bw": 2.002,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G975F/*"
      }, {
        "ua": "SM-G975F"
      }],
      "dpi": 522,
      "bw": 2.054,
      "ac": 500
    }, {
      "type": "android",
      "rules": [{
        "mdmh": "samsung/*/SM-G977F/*"
      }, {
        "ua": "SM-G977F"
      }],
      "dpi": 505,
      "bw": 2.334,
      "ac": 500
    }, {
      "type": "ios",
      "rules": [{
        "res": [828, 1792]
      }],
      "dpi": 326,
      "bw": 5,
      "ac": 500
    }];
    var DPDB_CACHE = {
      format: format,
      last_updated: last_updated,
      devices: devices
    };

    function Dpdb(url, onDeviceParamsUpdated) {
      this.dpdb = DPDB_CACHE;
      this.recalculateDeviceParams_();

      if (url) {
        this.onDeviceParamsUpdated = onDeviceParamsUpdated;
        var xhr = new XMLHttpRequest();
        var obj = this;
        xhr.open('GET', url, true);
        xhr.addEventListener('load', function () {
          obj.loading = false;

          if (xhr.status >= 200 && xhr.status <= 299) {
            obj.dpdb = JSON.parse(xhr.response);
            obj.recalculateDeviceParams_();
          } else {
            console.error('Error loading online DPDB!');
          }
        });
        xhr.send();
      }
    }

    Dpdb.prototype.getDeviceParams = function () {
      return this.deviceParams;
    };

    Dpdb.prototype.recalculateDeviceParams_ = function () {
      var newDeviceParams = this.calcDeviceParams_();

      if (newDeviceParams) {
        this.deviceParams = newDeviceParams;

        if (this.onDeviceParamsUpdated) {
          this.onDeviceParamsUpdated(this.deviceParams);
        }
      } else {
        console.error('Failed to recalculate device parameters.');
      }
    };

    Dpdb.prototype.calcDeviceParams_ = function () {
      var db = this.dpdb;

      if (!db) {
        console.error('DPDB not available.');
        return null;
      }

      if (db.format != 1) {
        console.error('DPDB has unexpected format version.');
        return null;
      }

      if (!db.devices || !db.devices.length) {
        console.error('DPDB does not have a devices section.');
        return null;
      }

      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      var width = getScreenWidth();
      var height = getScreenHeight();

      if (!db.devices) {
        console.error('DPDB has no devices section.');
        return null;
      }

      for (var i = 0; i < db.devices.length; i++) {
        var device = db.devices[i];

        if (!device.rules) {
          console.warn('Device[' + i + '] has no rules section.');
          continue;
        }

        if (device.type != 'ios' && device.type != 'android') {
          console.warn('Device[' + i + '] has invalid type.');
          continue;
        }

        if (isIOS() != (device.type == 'ios')) continue;
        var matched = false;

        for (var j = 0; j < device.rules.length; j++) {
          var rule = device.rules[j];

          if (this.ruleMatches_(rule, userAgent, width, height)) {
            matched = true;
            break;
          }
        }

        if (!matched) continue;
        var xdpi = device.dpi[0] || device.dpi;
        var ydpi = device.dpi[1] || device.dpi;
        return new DeviceParams({
          xdpi: xdpi,
          ydpi: ydpi,
          bevelMm: device.bw
        });
      }

      console.warn('No DPDB device match.');
      return null;
    };

    Dpdb.prototype.ruleMatches_ = function (rule, ua, screenWidth, screenHeight) {
      if (!rule.ua && !rule.res) return false;
      if (rule.ua && rule.ua.substring(0, 2) === 'SM') rule.ua = rule.ua.substring(0, 7);
      if (rule.ua && ua.indexOf(rule.ua) < 0) return false;

      if (rule.res) {
        if (!rule.res[0] || !rule.res[1]) return false;
        var resX = rule.res[0];
        var resY = rule.res[1];

        if (Math.min(screenWidth, screenHeight) != Math.min(resX, resY) || Math.max(screenWidth, screenHeight) != Math.max(resX, resY)) {
          return false;
        }
      }

      return true;
    };

    function DeviceParams(params) {
      this.xdpi = params.xdpi;
      this.ydpi = params.ydpi;
      this.bevelMm = params.bevelMm;
    }

    function SensorSample(sample, timestampS) {
      this.set(sample, timestampS);
    }

    SensorSample.prototype.set = function (sample, timestampS) {
      this.sample = sample;
      this.timestampS = timestampS;
    };

    SensorSample.prototype.copy = function (sensorSample) {
      this.set(sensorSample.sample, sensorSample.timestampS);
    };

    function ComplementaryFilter(kFilter, isDebug) {
      this.kFilter = kFilter;
      this.isDebug = isDebug;
      this.currentAccelMeasurement = new SensorSample();
      this.currentGyroMeasurement = new SensorSample();
      this.previousGyroMeasurement = new SensorSample();

      if (isIOS()) {
        this.filterQ = new Quaternion(-1, 0, 0, 1);
      } else {
        this.filterQ = new Quaternion(1, 0, 0, 1);
      }

      this.previousFilterQ = new Quaternion();
      this.previousFilterQ.copy(this.filterQ);
      this.accelQ = new Quaternion();
      this.isOrientationInitialized = false;
      this.estimatedGravity = new Vector3();
      this.measuredGravity = new Vector3();
      this.gyroIntegralQ = new Quaternion();
    }

    ComplementaryFilter.prototype.addAccelMeasurement = function (vector, timestampS) {
      this.currentAccelMeasurement.set(vector, timestampS);
    };

    ComplementaryFilter.prototype.addGyroMeasurement = function (vector, timestampS) {
      this.currentGyroMeasurement.set(vector, timestampS);
      var deltaT = timestampS - this.previousGyroMeasurement.timestampS;

      if (isTimestampDeltaValid(deltaT)) {
        this.run_();
      }

      this.previousGyroMeasurement.copy(this.currentGyroMeasurement);
    };

    ComplementaryFilter.prototype.run_ = function () {
      if (!this.isOrientationInitialized) {
        this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample);
        this.previousFilterQ.copy(this.accelQ);
        this.isOrientationInitialized = true;
        return;
      }

      var deltaT = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS;
      var gyroDeltaQ = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, deltaT);
      this.gyroIntegralQ.multiply(gyroDeltaQ);
      this.filterQ.copy(this.previousFilterQ);
      this.filterQ.multiply(gyroDeltaQ);
      var invFilterQ = new Quaternion();
      invFilterQ.copy(this.filterQ);
      invFilterQ.inverse();
      this.estimatedGravity.set(0, 0, -1);
      this.estimatedGravity.applyQuaternion(invFilterQ);
      this.estimatedGravity.normalize();
      this.measuredGravity.copy(this.currentAccelMeasurement.sample);
      this.measuredGravity.normalize();
      var deltaQ = new Quaternion();
      deltaQ.setFromUnitVectors(this.estimatedGravity, this.measuredGravity);
      deltaQ.inverse();

      if (this.isDebug) {
        console.log('Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)', radToDeg * getQuaternionAngle(deltaQ), this.estimatedGravity.x.toFixed(1), this.estimatedGravity.y.toFixed(1), this.estimatedGravity.z.toFixed(1), this.measuredGravity.x.toFixed(1), this.measuredGravity.y.toFixed(1), this.measuredGravity.z.toFixed(1));
      }

      var targetQ = new Quaternion();
      targetQ.copy(this.filterQ);
      targetQ.multiply(deltaQ);
      this.filterQ.slerp(targetQ, 1 - this.kFilter);
      this.previousFilterQ.copy(this.filterQ);
    };

    ComplementaryFilter.prototype.getOrientation = function () {
      return this.filterQ;
    };

    ComplementaryFilter.prototype.accelToQuaternion_ = function (accel) {
      var normAccel = new Vector3();
      normAccel.copy(accel);
      normAccel.normalize();
      var quat = new Quaternion();
      quat.setFromUnitVectors(new Vector3(0, 0, -1), normAccel);
      quat.inverse();
      return quat;
    };

    ComplementaryFilter.prototype.gyroToQuaternionDelta_ = function (gyro, dt) {
      var quat = new Quaternion();
      var axis = new Vector3();
      axis.copy(gyro);
      axis.normalize();
      quat.setFromAxisAngle(axis, gyro.length() * dt);
      return quat;
    };

    function PosePredictor(predictionTimeS, isDebug) {
      this.predictionTimeS = predictionTimeS;
      this.isDebug = isDebug;
      this.previousQ = new Quaternion();
      this.previousTimestampS = null;
      this.deltaQ = new Quaternion();
      this.outQ = new Quaternion();
    }

    PosePredictor.prototype.getPrediction = function (currentQ, gyro, timestampS) {
      if (!this.previousTimestampS) {
        this.previousQ.copy(currentQ);
        this.previousTimestampS = timestampS;
        return currentQ;
      }

      var axis = new Vector3();
      axis.copy(gyro);
      axis.normalize();
      var angularSpeed = gyro.length();

      if (angularSpeed < degToRad * 20) {
        if (this.isDebug) {
          console.log('Moving slowly, at %s deg/s: no prediction', (radToDeg * angularSpeed).toFixed(1));
        }

        this.outQ.copy(currentQ);
        this.previousQ.copy(currentQ);
        return this.outQ;
      }

      var predictAngle = angularSpeed * this.predictionTimeS;
      this.deltaQ.setFromAxisAngle(axis, predictAngle);
      this.outQ.copy(this.previousQ);
      this.outQ.multiply(this.deltaQ);
      this.previousQ.copy(currentQ);
      this.previousTimestampS = timestampS;
      return this.outQ;
    };

    function FusionPoseSensor(kFilter, predictionTime, yawOnly, isDebug) {
      this.yawOnly = yawOnly;
      this.accelerometer = new Vector3();
      this.gyroscope = new Vector3();
      this.filter = new ComplementaryFilter(kFilter, isDebug);
      this.posePredictor = new PosePredictor(predictionTime, isDebug);
      this.isFirefoxAndroid = isFirefoxAndroid();
      this.isIOS = isIOS();
      var chromeVersion = getChromeVersion();
      this.isDeviceMotionInRadians = !this.isIOS && chromeVersion && chromeVersion < 66;
      this.isWithoutDeviceMotion = isChromeWithoutDeviceMotion() || isSafariWithoutDeviceMotion();
      this.filterToWorldQ = new Quaternion();

      if (isIOS()) {
        this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2);
      } else {
        this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2);
      }

      this.inverseWorldToScreenQ = new Quaternion();
      this.worldToScreenQ = new Quaternion();
      this.originalPoseAdjustQ = new Quaternion();
      this.originalPoseAdjustQ.setFromAxisAngle(new Vector3(0, 0, 1), -window.orientation * Math.PI / 180);
      this.setScreenTransform_();

      if (isLandscapeMode()) {
        this.filterToWorldQ.multiply(this.inverseWorldToScreenQ);
      }

      this.resetQ = new Quaternion();
      this.orientationOut_ = new Float32Array(4);
      this.start();
    }

    FusionPoseSensor.prototype.getPosition = function () {
      return null;
    };

    FusionPoseSensor.prototype.getOrientation = function () {
      var orientation = void 0;

      if (this.isWithoutDeviceMotion && this._deviceOrientationQ) {
        this.deviceOrientationFixQ = this.deviceOrientationFixQ || function () {
          var z = new Quaternion().setFromAxisAngle(new Vector3(0, 0, -1), 0);
          var y = new Quaternion();

          if (window.orientation === -90) {
            y.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / -2);
          } else {
            y.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
          }

          return z.multiply(y);
        }();

        this.deviceOrientationFilterToWorldQ = this.deviceOrientationFilterToWorldQ || function () {
          var q = new Quaternion();
          q.setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2);
          return q;
        }();

        orientation = this._deviceOrientationQ;
        var out = new Quaternion();
        out.copy(orientation);
        out.multiply(this.deviceOrientationFilterToWorldQ);
        out.multiply(this.resetQ);
        out.multiply(this.worldToScreenQ);
        out.multiplyQuaternions(this.deviceOrientationFixQ, out);

        if (this.yawOnly) {
          out.x = 0;
          out.z = 0;
          out.normalize();
        }

        this.orientationOut_[0] = out.x;
        this.orientationOut_[1] = out.y;
        this.orientationOut_[2] = out.z;
        this.orientationOut_[3] = out.w;
        return this.orientationOut_;
      } else {
        var filterOrientation = this.filter.getOrientation();
        orientation = this.posePredictor.getPrediction(filterOrientation, this.gyroscope, this.previousTimestampS);
      }

      var out = new Quaternion();
      out.copy(this.filterToWorldQ);
      out.multiply(this.resetQ);
      out.multiply(orientation);
      out.multiply(this.worldToScreenQ);

      if (this.yawOnly) {
        out.x = 0;
        out.z = 0;
        out.normalize();
      }

      this.orientationOut_[0] = out.x;
      this.orientationOut_[1] = out.y;
      this.orientationOut_[2] = out.z;
      this.orientationOut_[3] = out.w;
      return this.orientationOut_;
    };

    FusionPoseSensor.prototype.resetPose = function () {
      this.resetQ.copy(this.filter.getOrientation());
      this.resetQ.x = 0;
      this.resetQ.y = 0;
      this.resetQ.z *= -1;
      this.resetQ.normalize();

      if (isLandscapeMode()) {
        this.resetQ.multiply(this.inverseWorldToScreenQ);
      }

      this.resetQ.multiply(this.originalPoseAdjustQ);
    };

    FusionPoseSensor.prototype.onDeviceOrientation_ = function (e) {
      this._deviceOrientationQ = this._deviceOrientationQ || new Quaternion();
      var alpha = e.alpha,
          beta = e.beta,
          gamma = e.gamma;
      alpha = (alpha || 0) * Math.PI / 180;
      beta = (beta || 0) * Math.PI / 180;
      gamma = (gamma || 0) * Math.PI / 180;

      this._deviceOrientationQ.setFromEulerYXZ(beta, alpha, -gamma);
    };

    FusionPoseSensor.prototype.onDeviceMotion_ = function (deviceMotion) {
      this.updateDeviceMotion_(deviceMotion);
    };

    FusionPoseSensor.prototype.updateDeviceMotion_ = function (deviceMotion) {
      var accGravity = deviceMotion.accelerationIncludingGravity;
      var rotRate = deviceMotion.rotationRate;
      var timestampS = deviceMotion.timeStamp / 1000;
      var deltaS = timestampS - this.previousTimestampS;

      if (deltaS < 0) {
        warnOnce('fusion-pose-sensor:invalid:non-monotonic', 'Invalid timestamps detected: non-monotonic timestamp from devicemotion');
        this.previousTimestampS = timestampS;
        return;
      } else if (deltaS <= MIN_TIMESTEP || deltaS > MAX_TIMESTEP) {
        warnOnce('fusion-pose-sensor:invalid:outside-threshold', 'Invalid timestamps detected: Timestamp from devicemotion outside expected range.');
        this.previousTimestampS = timestampS;
        return;
      }

      this.accelerometer.set(-accGravity.x, -accGravity.y, -accGravity.z);

      if (rotRate) {
        if (isR7()) {
          this.gyroscope.set(-rotRate.beta, rotRate.alpha, rotRate.gamma);
        } else {
          this.gyroscope.set(rotRate.alpha, rotRate.beta, rotRate.gamma);
        }

        if (!this.isDeviceMotionInRadians) {
          this.gyroscope.multiplyScalar(Math.PI / 180);
        }

        this.filter.addGyroMeasurement(this.gyroscope, timestampS);
      }

      this.filter.addAccelMeasurement(this.accelerometer, timestampS);
      this.previousTimestampS = timestampS;
    };

    FusionPoseSensor.prototype.onOrientationChange_ = function (screenOrientation) {
      this.setScreenTransform_();
    };

    FusionPoseSensor.prototype.onMessage_ = function (event) {
      var message = event.data;

      if (!message || !message.type) {
        return;
      }

      var type = message.type.toLowerCase();

      if (type !== 'devicemotion') {
        return;
      }

      this.updateDeviceMotion_(message.deviceMotionEvent);
    };

    FusionPoseSensor.prototype.setScreenTransform_ = function () {
      this.worldToScreenQ.set(0, 0, 0, 1);

      switch (window.orientation) {
        case 0:
          break;

        case 90:
          this.worldToScreenQ.setFromAxisAngle(new Vector3(0, 0, 1), -Math.PI / 2);
          break;

        case -90:
          this.worldToScreenQ.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2);
          break;

        case 180:
          break;
      }

      this.inverseWorldToScreenQ.copy(this.worldToScreenQ);
      this.inverseWorldToScreenQ.inverse();
    };

    FusionPoseSensor.prototype.start = function () {
      this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(this);
      this.onOrientationChangeCallback_ = this.onOrientationChange_.bind(this);
      this.onMessageCallback_ = this.onMessage_.bind(this);
      this.onDeviceOrientationCallback_ = this.onDeviceOrientation_.bind(this);

      if (isIOS() && isInsideCrossOriginIFrame()) {
        window.addEventListener('message', this.onMessageCallback_);
      }

      window.addEventListener('orientationchange', this.onOrientationChangeCallback_);

      if (this.isWithoutDeviceMotion) {
        window.addEventListener('deviceorientation', this.onDeviceOrientationCallback_);
      } else {
        window.addEventListener('devicemotion', this.onDeviceMotionCallback_);
      }
    };

    FusionPoseSensor.prototype.stop = function () {
      window.removeEventListener('devicemotion', this.onDeviceMotionCallback_);
      window.removeEventListener('deviceorientation', this.onDeviceOrientationCallback_);
      window.removeEventListener('orientationchange', this.onOrientationChangeCallback_);
      window.removeEventListener('message', this.onMessageCallback_);
    };

    var SENSOR_FREQUENCY = 60;
    var X_AXIS = new Vector3(1, 0, 0);
    var Z_AXIS = new Vector3(0, 0, 1);
    var SENSOR_TO_VR = new Quaternion();
    SENSOR_TO_VR.setFromAxisAngle(X_AXIS, -Math.PI / 2);
    SENSOR_TO_VR.multiply(new Quaternion().setFromAxisAngle(Z_AXIS, Math.PI / 2));

    var PoseSensor = function () {
      function PoseSensor(config) {
        classCallCheck(this, PoseSensor);
        this.config = config;
        this.sensor = null;
        this.fusionSensor = null;
        this._out = new Float32Array(4);
        this.api = null;
        this.errors = [];
        this._sensorQ = new Quaternion();
        this._outQ = new Quaternion();
        this._onSensorRead = this._onSensorRead.bind(this);
        this._onSensorError = this._onSensorError.bind(this);
        this.init();
      }

      createClass(PoseSensor, [{
        key: 'init',
        value: function init() {
          var sensor = null;

          try {
            sensor = new RelativeOrientationSensor({
              frequency: SENSOR_FREQUENCY,
              referenceFrame: 'screen'
            });
            sensor.addEventListener('error', this._onSensorError);
          } catch (error) {
            this.errors.push(error);

            if (error.name === 'SecurityError') {
              console.error('Cannot construct sensors due to the Feature Policy');
              console.warn('Attempting to fall back using "devicemotion"; however this will ' + 'fail in the future without correct permissions.');
              this.useDeviceMotion();
            } else if (error.name === 'ReferenceError') {
              this.useDeviceMotion();
            } else {
              console.error(error);
            }
          }

          if (sensor) {
            this.api = 'sensor';
            this.sensor = sensor;
            this.sensor.addEventListener('reading', this._onSensorRead);
            this.sensor.start();
          }
        }
      }, {
        key: 'useDeviceMotion',
        value: function useDeviceMotion() {
          this.api = 'devicemotion';
          this.fusionSensor = new FusionPoseSensor(this.config.K_FILTER, this.config.PREDICTION_TIME_S, this.config.YAW_ONLY, this.config.DEBUG);

          if (this.sensor) {
            this.sensor.removeEventListener('reading', this._onSensorRead);
            this.sensor.removeEventListener('error', this._onSensorError);
            this.sensor = null;
          }
        }
      }, {
        key: 'getOrientation',
        value: function getOrientation() {
          if (this.fusionSensor) {
            return this.fusionSensor.getOrientation();
          }

          if (!this.sensor || !this.sensor.quaternion) {
            this._out[0] = this._out[1] = this._out[2] = 0;
            this._out[3] = 1;
            return this._out;
          }

          var q = this.sensor.quaternion;

          this._sensorQ.set(q[0], q[1], q[2], q[3]);

          var out = this._outQ;
          out.copy(SENSOR_TO_VR);
          out.multiply(this._sensorQ);

          if (this.config.YAW_ONLY) {
            out.x = out.z = 0;
            out.normalize();
          }

          this._out[0] = out.x;
          this._out[1] = out.y;
          this._out[2] = out.z;
          this._out[3] = out.w;
          return this._out;
        }
      }, {
        key: '_onSensorError',
        value: function _onSensorError(event) {
          this.errors.push(event.error);

          if (event.error.name === 'NotAllowedError') {
            console.error('Permission to access sensor was denied');
          } else if (event.error.name === 'NotReadableError') {
            console.error('Sensor could not be read');
          } else {
            console.error(event.error);
          }

          this.useDeviceMotion();
        }
      }, {
        key: '_onSensorRead',
        value: function _onSensorRead() {}
      }]);
      return PoseSensor;
    }();

    var rotateInstructionsAsset = "<svg width='198' height='240' viewBox='0 0 198 240' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M149.625 109.527l6.737 3.891v.886c0 .177.013.36.038.549.01.081.02.162.027.242.14 1.415.974 2.998 2.105 3.999l5.72 5.062.081-.09s4.382-2.53 5.235-3.024l25.97 14.993v54.001c0 .771-.386 1.217-.948 1.217-.233 0-.495-.076-.772-.236l-23.967-13.838-.014.024-27.322 15.775-.85-1.323c-4.731-1.529-9.748-2.74-14.951-3.61a.27.27 0 0 0-.007.024l-5.067 16.961-7.891 4.556-.037-.063v27.59c0 .772-.386 1.217-.948 1.217-.232 0-.495-.076-.772-.236l-42.473-24.522c-.95-.549-1.72-1.877-1.72-2.967v-1.035l-.021.047a5.111 5.111 0 0 0-1.816-.399 5.682 5.682 0 0 0-.546.001 13.724 13.724 0 0 1-1.918-.041c-1.655-.153-3.2-.6-4.404-1.296l-46.576-26.89.005.012-10.278-18.75c-1.001-1.827-.241-4.216 1.698-5.336l56.011-32.345a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.659 3.227 1.853l.005-.003.227.413-.006.004a9.63 9.63 0 0 0 1.477 2.018l.277.27c1.914 1.85 4.468 2.801 7.113 2.801 1.949 0 3.948-.517 5.775-1.572.013 0 7.319-4.219 7.319-4.219a4.194 4.194 0 0 1 2.099-.572c1.326 0 2.572.658 3.226 1.853l3.25 5.928.022-.018 6.785 3.917-.105-.182 46.881-26.965m0-1.635c-.282 0-.563.073-.815.218l-46.169 26.556-5.41-3.124-3.005-5.481c-.913-1.667-2.699-2.702-4.66-2.703-1.011 0-2.02.274-2.917.792a3825 3825 0 0 1-7.275 4.195l-.044.024a9.937 9.937 0 0 1-4.957 1.353c-2.292 0-4.414-.832-5.976-2.342l-.252-.245a7.992 7.992 0 0 1-1.139-1.534 1.379 1.379 0 0 0-.06-.122l-.227-.414a1.718 1.718 0 0 0-.095-.154c-.938-1.574-2.673-2.545-4.571-2.545-1.011 0-2.02.274-2.917.792L3.125 155.502c-2.699 1.559-3.738 4.94-2.314 7.538l10.278 18.75c.177.323.448.563.761.704l46.426 26.804c1.403.81 3.157 1.332 5.072 1.508a15.661 15.661 0 0 0 2.146.046 4.766 4.766 0 0 1 .396 0c.096.004.19.011.283.022.109 1.593 1.159 3.323 2.529 4.114l42.472 24.522c.524.302 1.058.455 1.59.455 1.497 0 2.583-1.2 2.583-2.852v-26.562l7.111-4.105a1.64 1.64 0 0 0 .749-.948l4.658-15.593c4.414.797 8.692 1.848 12.742 3.128l.533.829a1.634 1.634 0 0 0 2.193.531l26.532-15.317L193 192.433c.523.302 1.058.455 1.59.455 1.497 0 2.583-1.199 2.583-2.852v-54.001c0-.584-.312-1.124-.818-1.416l-25.97-14.993a1.633 1.633 0 0 0-1.636.001c-.606.351-2.993 1.73-4.325 2.498l-4.809-4.255c-.819-.725-1.461-1.933-1.561-2.936a7.776 7.776 0 0 0-.033-.294 2.487 2.487 0 0 1-.023-.336v-.886c0-.584-.312-1.123-.817-1.416l-6.739-3.891a1.633 1.633 0 0 0-.817-.219' fill='#455A64'/><path d='M96.027 132.636l46.576 26.891c1.204.695 1.979 1.587 2.242 2.541l-.01.007-81.374 46.982h-.001c-1.654-.152-3.199-.6-4.403-1.295l-46.576-26.891 83.546-48.235' fill='#FAFAFA'/><path d='M63.461 209.174c-.008 0-.015 0-.022-.002-1.693-.156-3.228-.609-4.441-1.309l-46.576-26.89a.118.118 0 0 1 0-.203l83.546-48.235a.117.117 0 0 1 .117 0l46.576 26.891c1.227.708 2.021 1.612 2.296 2.611a.116.116 0 0 1-.042.124l-.021.016-81.375 46.981a.11.11 0 0 1-.058.016zm-50.747-28.303l46.401 26.79c1.178.68 2.671 1.121 4.32 1.276l81.272-46.922c-.279-.907-1.025-1.73-2.163-2.387l-46.517-26.857-83.313 48.1z' fill='#607D8B'/><path d='M148.327 165.471a5.85 5.85 0 0 1-.546.001c-1.894-.083-3.302-1.038-3.145-2.132a2.693 2.693 0 0 0-.072-1.105l-81.103 46.822c.628.058 1.272.073 1.918.042.182-.009.364-.009.546-.001 1.894.083 3.302 1.038 3.145 2.132l79.257-45.759' fill='#FFF'/><path d='M69.07 211.347a.118.118 0 0 1-.115-.134c.045-.317-.057-.637-.297-.925-.505-.61-1.555-1.022-2.738-1.074a5.966 5.966 0 0 0-.535.001 14.03 14.03 0 0 1-1.935-.041.117.117 0 0 1-.103-.092.116.116 0 0 1 .055-.126l81.104-46.822a.117.117 0 0 1 .171.07c.104.381.129.768.074 1.153-.045.316.057.637.296.925.506.61 1.555 1.021 2.739 1.073.178.008.357.008.535-.001a.117.117 0 0 1 .064.218l-79.256 45.759a.114.114 0 0 1-.059.016zm-3.405-2.372c.089 0 .177.002.265.006 1.266.056 2.353.488 2.908 1.158.227.274.35.575.36.882l78.685-45.429c-.036 0-.072-.001-.107-.003-1.267-.056-2.354-.489-2.909-1.158-.282-.34-.402-.724-.347-1.107a2.604 2.604 0 0 0-.032-.91L63.846 208.97a13.91 13.91 0 0 0 1.528.012c.097-.005.194-.007.291-.007z' fill='#607D8B'/><path d='M2.208 162.134c-1.001-1.827-.241-4.217 1.698-5.337l56.011-32.344c1.939-1.12 4.324-.546 5.326 1.281l.232.41a9.344 9.344 0 0 0 1.47 2.021l.278.27c3.325 3.214 8.583 3.716 12.888 1.23l7.319-4.22c1.94-1.119 4.324-.546 5.325 1.282l3.25 5.928-83.519 48.229-10.278-18.75z' fill='#FAFAFA'/><path d='M12.486 181.001a.112.112 0 0 1-.031-.005.114.114 0 0 1-.071-.056L2.106 162.19c-1.031-1.88-.249-4.345 1.742-5.494l56.01-32.344a4.328 4.328 0 0 1 2.158-.588c1.415 0 2.65.702 3.311 1.882.01.008.018.017.024.028l.227.414a.122.122 0 0 1 .013.038 9.508 9.508 0 0 0 1.439 1.959l.275.266c1.846 1.786 4.344 2.769 7.031 2.769 1.977 0 3.954-.538 5.717-1.557a.148.148 0 0 1 .035-.013l7.284-4.206a4.321 4.321 0 0 1 2.157-.588c1.427 0 2.672.716 3.329 1.914l3.249 5.929a.116.116 0 0 1-.044.157l-83.518 48.229a.116.116 0 0 1-.059.016zm49.53-57.004c-.704 0-1.41.193-2.041.557l-56.01 32.345c-1.882 1.086-2.624 3.409-1.655 5.179l10.221 18.645 83.317-48.112-3.195-5.829c-.615-1.122-1.783-1.792-3.124-1.792a4.08 4.08 0 0 0-2.04.557l-7.317 4.225a.148.148 0 0 1-.035.013 11.7 11.7 0 0 1-5.801 1.569c-2.748 0-5.303-1.007-7.194-2.835l-.278-.27a9.716 9.716 0 0 1-1.497-2.046.096.096 0 0 1-.013-.037l-.191-.347a.11.11 0 0 1-.023-.029c-.615-1.123-1.783-1.793-3.124-1.793z' fill='#607D8B'/><path d='M42.434 155.808c-2.51-.001-4.697-1.258-5.852-3.365-1.811-3.304-.438-7.634 3.059-9.654l12.291-7.098a7.599 7.599 0 0 1 3.789-1.033c2.51 0 4.697 1.258 5.852 3.365 1.811 3.304.439 7.634-3.059 9.654l-12.291 7.098a7.606 7.606 0 0 1-3.789 1.033zm13.287-20.683a7.128 7.128 0 0 0-3.555.971l-12.291 7.098c-3.279 1.893-4.573 5.942-2.883 9.024 1.071 1.955 3.106 3.122 5.442 3.122a7.13 7.13 0 0 0 3.556-.97l12.291-7.098c3.279-1.893 4.572-5.942 2.883-9.024-1.072-1.955-3.106-3.123-5.443-3.123z' fill='#607D8B'/><path d='M149.588 109.407l6.737 3.89v.887c0 .176.013.36.037.549.011.081.02.161.028.242.14 1.415.973 2.998 2.105 3.999l7.396 6.545c.177.156.358.295.541.415 1.579 1.04 2.95.466 3.062-1.282.049-.784.057-1.595.023-2.429l-.003-.16v-1.151l25.987 15.003v54c0 1.09-.77 1.53-1.72.982l-42.473-24.523c-.95-.548-1.72-1.877-1.72-2.966v-34.033' fill='#FAFAFA'/><path d='M194.553 191.25c-.257 0-.54-.085-.831-.253l-42.472-24.521c-.981-.567-1.779-1.943-1.779-3.068v-34.033h.234v34.033c0 1.051.745 2.336 1.661 2.866l42.473 24.521c.424.245.816.288 1.103.122.285-.164.442-.52.442-1.002v-53.933l-25.753-14.868.003 1.106c.034.832.026 1.654-.024 2.439-.054.844-.396 1.464-.963 1.746-.619.309-1.45.173-2.28-.373a5.023 5.023 0 0 1-.553-.426l-7.397-6.544c-1.158-1.026-1.999-2.625-2.143-4.076a9.624 9.624 0 0 0-.027-.238 4.241 4.241 0 0 1-.038-.564v-.82l-6.68-3.856.117-.202 6.738 3.89.058.034v.954c0 .171.012.351.036.533.011.083.021.165.029.246.138 1.395.948 2.935 2.065 3.923l7.397 6.545c.173.153.35.289.527.406.758.499 1.504.63 2.047.359.49-.243.786-.795.834-1.551.05-.778.057-1.591.024-2.417l-.004-.163v-1.355l.175.1 25.987 15.004.059.033v54.068c0 .569-.198.996-.559 1.204a1.002 1.002 0 0 1-.506.131' fill='#607D8B'/><path d='M145.685 163.161l24.115 13.922-25.978 14.998-1.462-.307c-6.534-2.17-13.628-3.728-21.019-4.616-4.365-.524-8.663 1.096-9.598 3.62a2.746 2.746 0 0 0-.011 1.928c1.538 4.267 4.236 8.363 7.995 12.135l.532.845-25.977 14.997-24.115-13.922 75.518-43.6' fill='#FFF'/><path d='M94.282 220.818l-.059-.033-24.29-14.024.175-.101 75.577-43.634.058.033 24.29 14.024-26.191 15.122-.045-.01-1.461-.307c-6.549-2.174-13.613-3.725-21.009-4.614a13.744 13.744 0 0 0-1.638-.097c-3.758 0-7.054 1.531-7.837 3.642a2.62 2.62 0 0 0-.01 1.848c1.535 4.258 4.216 8.326 7.968 12.091l.016.021.526.835.006.01.064.102-.105.061-25.977 14.998-.058.033zm-23.881-14.057l23.881 13.788 24.802-14.32c.546-.315.846-.489 1.017-.575l-.466-.74c-3.771-3.787-6.467-7.881-8.013-12.168a2.851 2.851 0 0 1 .011-2.008c.815-2.199 4.203-3.795 8.056-3.795.557 0 1.117.033 1.666.099 7.412.891 14.491 2.445 21.041 4.621.836.175 1.215.254 1.39.304l25.78-14.884-23.881-13.788-75.284 43.466z' fill='#607D8B'/><path d='M167.23 125.979v50.871l-27.321 15.773-6.461-14.167c-.91-1.996-3.428-1.738-5.624.574a10.238 10.238 0 0 0-2.33 4.018l-6.46 21.628-27.322 15.774v-50.871l75.518-43.6' fill='#FFF'/><path d='M91.712 220.567a.127.127 0 0 1-.059-.016.118.118 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.519-43.6a.117.117 0 0 1 .175.101v50.871c0 .041-.023.08-.059.1l-27.321 15.775a.118.118 0 0 1-.094.01.12.12 0 0 1-.071-.063l-6.46-14.168c-.375-.822-1.062-1.275-1.934-1.275-1.089 0-2.364.686-3.5 1.881a10.206 10.206 0 0 0-2.302 3.972l-6.46 21.627a.118.118 0 0 1-.054.068L91.77 220.551a.12.12 0 0 1-.058.016zm.117-50.92v50.601l27.106-15.65 6.447-21.583a10.286 10.286 0 0 1 2.357-4.065c1.18-1.242 2.517-1.954 3.669-1.954.969 0 1.731.501 2.146 1.411l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M168.543 126.213v50.87l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.624.574a10.248 10.248 0 0 0-2.33 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6' fill='#FFF'/><path d='M93.025 220.8a.123.123 0 0 1-.059-.015.12.12 0 0 1-.058-.101v-50.871c0-.042.023-.08.058-.101l75.518-43.6a.112.112 0 0 1 .117 0c.036.02.059.059.059.1v50.871a.116.116 0 0 1-.059.101l-27.321 15.774a.111.111 0 0 1-.094.01.115.115 0 0 1-.071-.062l-6.46-14.168c-.375-.823-1.062-1.275-1.935-1.275-1.088 0-2.363.685-3.499 1.881a10.19 10.19 0 0 0-2.302 3.971l-6.461 21.628a.108.108 0 0 1-.053.067l-27.322 15.775a.12.12 0 0 1-.058.015zm.117-50.919v50.6l27.106-15.649 6.447-21.584a10.293 10.293 0 0 1 2.357-4.065c1.179-1.241 2.516-1.954 3.668-1.954.969 0 1.732.502 2.147 1.412l6.407 14.051 27.152-15.676v-50.601l-75.284 43.466z' fill='#607D8B'/><path d='M169.8 177.083l-27.322 15.774-6.46-14.168c-.91-1.995-3.428-1.738-5.625.574a10.246 10.246 0 0 0-2.329 4.019l-6.461 21.627-27.321 15.774v-50.87l75.518-43.6v50.87z' fill='#FAFAFA'/><path d='M94.282 220.917a.234.234 0 0 1-.234-.233v-50.871c0-.083.045-.161.117-.202l75.518-43.601a.234.234 0 1 1 .35.202v50.871a.233.233 0 0 1-.116.202l-27.322 15.775a.232.232 0 0 1-.329-.106l-6.461-14.168c-.36-.789-.992-1.206-1.828-1.206-1.056 0-2.301.672-3.415 1.844a10.099 10.099 0 0 0-2.275 3.924l-6.46 21.628a.235.235 0 0 1-.107.136l-27.322 15.774a.23.23 0 0 1-.116.031zm.233-50.969v50.331l26.891-15.525 6.434-21.539a10.41 10.41 0 0 1 2.384-4.112c1.201-1.265 2.569-1.991 3.753-1.991 1.018 0 1.818.526 2.253 1.48l6.354 13.934 26.982-15.578v-50.331l-75.051 43.331z' fill='#607D8B'/><path d='M109.894 199.943c-1.774 0-3.241-.725-4.244-2.12a.224.224 0 0 1 .023-.294.233.233 0 0 1 .301-.023c.78.547 1.705.827 2.75.827 1.323 0 2.754-.439 4.256-1.306 5.311-3.067 9.631-10.518 9.631-16.611 0-1.927-.442-3.56-1.278-4.724a.232.232 0 0 1 .323-.327c1.671 1.172 2.591 3.381 2.591 6.219 0 6.242-4.426 13.863-9.865 17.003-1.574.908-3.084 1.356-4.488 1.356zm-2.969-1.542c.813.651 1.82.877 2.968.877h.001c1.321 0 2.753-.327 4.254-1.194 5.311-3.067 9.632-10.463 9.632-16.556 0-1.979-.463-3.599-1.326-4.761.411 1.035.625 2.275.625 3.635 0 6.243-4.426 13.883-9.865 17.023-1.574.909-3.084 1.317-4.49 1.317-.641 0-1.243-.149-1.799-.341z' fill='#607D8B'/><path d='M113.097 197.23c5.384-3.108 9.748-10.636 9.748-16.814 0-2.051-.483-3.692-1.323-4.86-1.784-1.252-4.374-1.194-7.257.47-5.384 3.108-9.748 10.636-9.748 16.814 0 2.051.483 3.692 1.323 4.86 1.784 1.252 4.374 1.194 7.257-.47' fill='#FAFAFA'/><path d='M108.724 198.614c-1.142 0-2.158-.213-3.019-.817-.021-.014-.04.014-.055-.007-.894-1.244-1.367-2.948-1.367-4.973 0-6.242 4.426-13.864 9.865-17.005 1.574-.908 3.084-1.363 4.49-1.363 1.142 0 2.158.309 3.018.913a.23.23 0 0 1 .056.056c.894 1.244 1.367 2.972 1.367 4.997 0 6.243-4.426 13.783-9.865 16.923-1.574.909-3.084 1.276-4.49 1.276zm-2.718-1.109c.774.532 1.688.776 2.718.776 1.323 0 2.754-.413 4.256-1.28 5.311-3.066 9.631-10.505 9.631-16.598 0-1.909-.434-3.523-1.255-4.685-.774-.533-1.688-.799-2.718-.799-1.323 0-2.755.441-4.256 1.308-5.311 3.066-9.631 10.506-9.631 16.599 0 1.909.434 3.517 1.255 4.679z' fill='#607D8B'/><path d='M149.318 114.262l-9.984 8.878 15.893 11.031 5.589-6.112-11.498-13.797' fill='#FAFAFA'/><path d='M169.676 120.84l-9.748 5.627c-3.642 2.103-9.528 2.113-13.147.024-3.62-2.089-3.601-5.488.041-7.591l9.495-5.608-6.729-3.885-81.836 47.071 45.923 26.514 3.081-1.779c.631-.365.869-.898.618-1.39-2.357-4.632-2.593-9.546-.683-14.262 5.638-13.92 24.509-24.815 48.618-28.07 8.169-1.103 16.68-.967 24.704.394.852.145 1.776.008 2.407-.357l3.081-1.778-25.825-14.91' fill='#FAFAFA'/><path d='M113.675 183.459a.47.47 0 0 1-.233-.062l-45.924-26.515a.468.468 0 0 1 .001-.809l81.836-47.071a.467.467 0 0 1 .466 0l6.729 3.885a.467.467 0 0 1-.467.809l-6.496-3.75-80.9 46.533 44.988 25.973 2.848-1.644c.192-.111.62-.409.435-.773-2.416-4.748-2.658-9.814-.7-14.65 2.806-6.927 8.885-13.242 17.582-18.263 8.657-4.998 19.518-8.489 31.407-10.094 8.198-1.107 16.79-.97 24.844.397.739.125 1.561.007 2.095-.301l2.381-1.374-25.125-14.506a.467.467 0 0 1 .467-.809l25.825 14.91a.467.467 0 0 1 0 .809l-3.081 1.779c-.721.417-1.763.575-2.718.413-7.963-1.351-16.457-1.486-24.563-.392-11.77 1.589-22.512 5.039-31.065 9.977-8.514 4.916-14.456 11.073-17.183 17.805-1.854 4.578-1.623 9.376.666 13.875.37.725.055 1.513-.8 2.006l-3.081 1.78a.476.476 0 0 1-.234.062' fill='#455A64'/><path d='M153.316 128.279c-2.413 0-4.821-.528-6.652-1.586-1.818-1.049-2.82-2.461-2.82-3.975 0-1.527 1.016-2.955 2.861-4.02l9.493-5.607a.233.233 0 1 1 .238.402l-9.496 5.609c-1.696.979-2.628 2.263-2.628 3.616 0 1.34.918 2.608 2.585 3.571 3.549 2.049 9.343 2.038 12.914-.024l9.748-5.628a.234.234 0 0 1 .234.405l-9.748 5.628c-1.858 1.072-4.296 1.609-6.729 1.609' fill='#607D8B'/><path d='M113.675 182.992l-45.913-26.508M113.675 183.342a.346.346 0 0 1-.175-.047l-45.913-26.508a.35.35 0 1 1 .35-.607l45.913 26.508a.35.35 0 0 1-.175.654' fill='#455A64'/><path d='M67.762 156.484v54.001c0 1.09.77 2.418 1.72 2.967l42.473 24.521c.95.549 1.72.11 1.72-.98v-54.001' fill='#FAFAFA'/><path d='M112.727 238.561c-.297 0-.62-.095-.947-.285l-42.473-24.521c-1.063-.613-1.895-2.05-1.895-3.27v-54.001a.35.35 0 1 1 .701 0v54.001c0 .96.707 2.18 1.544 2.663l42.473 24.522c.344.198.661.243.87.122.206-.119.325-.411.325-.799v-54.001a.35.35 0 1 1 .7 0v54.001c0 .655-.239 1.154-.675 1.406a1.235 1.235 0 0 1-.623.162' fill='#455A64'/><path d='M112.86 147.512h-.001c-2.318 0-4.499-.522-6.142-1.471-1.705-.984-2.643-2.315-2.643-3.749 0-1.445.952-2.791 2.68-3.788l12.041-6.953c1.668-.962 3.874-1.493 6.212-1.493 2.318 0 4.499.523 6.143 1.472 1.704.984 2.643 2.315 2.643 3.748 0 1.446-.952 2.791-2.68 3.789l-12.042 6.952c-1.668.963-3.874 1.493-6.211 1.493zm12.147-16.753c-2.217 0-4.298.497-5.861 1.399l-12.042 6.952c-1.502.868-2.33 1.998-2.33 3.182 0 1.173.815 2.289 2.293 3.142 1.538.889 3.596 1.378 5.792 1.378h.001c2.216 0 4.298-.497 5.861-1.399l12.041-6.953c1.502-.867 2.33-1.997 2.33-3.182 0-1.172-.814-2.288-2.292-3.142-1.539-.888-3.596-1.377-5.793-1.377z' fill='#607D8B'/><path d='M165.63 123.219l-5.734 3.311c-3.167 1.828-8.286 1.837-11.433.02-3.147-1.817-3.131-4.772.036-6.601l5.734-3.31 11.397 6.58' fill='#FAFAFA'/><path d='M154.233 117.448l9.995 5.771-4.682 2.704c-1.434.827-3.352 1.283-5.399 1.283-2.029 0-3.923-.449-5.333-1.263-1.29-.744-2-1.694-2-2.674 0-.991.723-1.955 2.036-2.713l5.383-3.108m0-.809l-5.734 3.31c-3.167 1.829-3.183 4.784-.036 6.601 1.568.905 3.623 1.357 5.684 1.357 2.077 0 4.159-.46 5.749-1.377l5.734-3.311-11.397-6.58M145.445 179.667c-1.773 0-3.241-.85-4.243-2.245-.067-.092-.057-.275.023-.356.08-.081.207-.12.3-.055.781.548 1.706.812 2.751.811 1.322 0 2.754-.446 4.256-1.313 5.31-3.066 9.631-10.522 9.631-16.615 0-1.927-.442-3.562-1.279-4.726a.235.235 0 0 1 .024-.301.232.232 0 0 1 .3-.027c1.67 1.172 2.59 3.38 2.59 6.219 0 6.242-4.425 13.987-9.865 17.127-1.573.908-3.083 1.481-4.488 1.481zM142.476 178c.814.651 1.82 1.002 2.969 1.002 1.322 0 2.753-.452 4.255-1.32 5.31-3.065 9.631-10.523 9.631-16.617 0-1.98-.463-3.63-1.325-4.793.411 1.035.624 2.26.624 3.62 0 6.242-4.425 13.875-9.865 17.015-1.573.909-3.084 1.376-4.489 1.376a5.49 5.49 0 0 1-1.8-.283z' fill='#607D8B'/><path d='M148.648 176.704c5.384-3.108 9.748-10.636 9.748-16.813 0-2.052-.483-3.693-1.322-4.861-1.785-1.252-4.375-1.194-7.258.471-5.383 3.108-9.748 10.636-9.748 16.813 0 2.051.484 3.692 1.323 4.86 1.785 1.253 4.374 1.195 7.257-.47' fill='#FAFAFA'/><path d='M144.276 178.276c-1.143 0-2.158-.307-3.019-.911a.217.217 0 0 1-.055-.054c-.895-1.244-1.367-2.972-1.367-4.997 0-6.241 4.425-13.875 9.865-17.016 1.573-.908 3.084-1.369 4.489-1.369 1.143 0 2.158.307 3.019.91a.24.24 0 0 1 .055.055c.894 1.244 1.367 2.971 1.367 4.997 0 6.241-4.425 13.875-9.865 17.016-1.573.908-3.084 1.369-4.489 1.369zm-2.718-1.172c.773.533 1.687.901 2.718.901 1.322 0 2.754-.538 4.256-1.405 5.31-3.066 9.631-10.567 9.631-16.661 0-1.908-.434-3.554-1.256-4.716-.774-.532-1.688-.814-2.718-.814-1.322 0-2.754.433-4.256 1.3-5.31 3.066-9.631 10.564-9.631 16.657 0 1.91.434 3.576 1.256 4.738z' fill='#607D8B'/><path d='M150.72 172.361l-.363-.295a24.105 24.105 0 0 0 2.148-3.128 24.05 24.05 0 0 0 1.977-4.375l.443.149a24.54 24.54 0 0 1-2.015 4.46 24.61 24.61 0 0 1-2.19 3.189M115.917 191.514l-.363-.294a24.174 24.174 0 0 0 2.148-3.128 24.038 24.038 0 0 0 1.976-4.375l.443.148a24.48 24.48 0 0 1-2.015 4.461 24.662 24.662 0 0 1-2.189 3.188M114 237.476V182.584 237.476' fill='#607D8B'/><g><path d='M81.822 37.474c.017-.135-.075-.28-.267-.392-.327-.188-.826-.21-1.109-.045l-6.012 3.471c-.131.076-.194.178-.191.285.002.132.002.461.002.578v.043l-.007.128-6.591 3.779c-.001 0-2.077 1.046-2.787 5.192 0 0-.912 6.961-.898 19.745.015 12.57.606 17.07 1.167 21.351.22 1.684 3.001 2.125 3.001 2.125.331.04.698-.027 1.08-.248l75.273-43.551c1.808-1.069 2.667-3.719 3.056-6.284 1.213-7.99 1.675-32.978-.275-39.878-.196-.693-.51-1.083-.868-1.282l-2.086-.79c-.727.028-1.416.467-1.534.535L82.032 37.072l-.21.402' fill='#FFF'/><path d='M144.311 1.701l2.085.79c.358.199.672.589.868 1.282 1.949 6.9 1.487 31.887.275 39.878-.39 2.565-1.249 5.215-3.056 6.284L69.21 93.486a1.78 1.78 0 0 1-.896.258l-.183-.011c0 .001-2.782-.44-3.003-2.124-.56-4.282-1.151-8.781-1.165-21.351-.015-12.784.897-19.745.897-19.745.71-4.146 2.787-5.192 2.787-5.192l6.591-3.779.007-.128v-.043c0-.117 0-.446-.002-.578-.003-.107.059-.21.191-.285l6.012-3.472a.98.98 0 0 1 .481-.11c.218 0 .449.053.627.156.193.112.285.258.268.392l.211-.402 60.744-34.836c.117-.068.806-.507 1.534-.535m0-.997l-.039.001c-.618.023-1.283.244-1.974.656l-.021.012-60.519 34.706a2.358 2.358 0 0 0-.831-.15c-.365 0-.704.084-.98.244l-6.012 3.471c-.442.255-.699.69-.689 1.166l.001.15-6.08 3.487c-.373.199-2.542 1.531-3.29 5.898l-.006.039c-.009.07-.92 7.173-.906 19.875.014 12.62.603 17.116 1.172 21.465l.002.015c.308 2.355 3.475 2.923 3.836 2.98l.034.004c.101.013.204.019.305.019a2.77 2.77 0 0 0 1.396-.392l75.273-43.552c1.811-1.071 2.999-3.423 3.542-6.997 1.186-7.814 1.734-33.096-.301-40.299-.253-.893-.704-1.527-1.343-1.882l-.132-.062-2.085-.789a.973.973 0 0 0-.353-.065' fill='#455A64'/><path d='M128.267 11.565l1.495.434-56.339 32.326' fill='#FFF'/><path d='M74.202 90.545a.5.5 0 0 1-.25-.931l18.437-10.645a.499.499 0 1 1 .499.864L74.451 90.478l-.249.067M75.764 42.654l-.108-.062.046-.171 5.135-2.964.17.045-.045.171-5.135 2.964-.063.017M70.52 90.375V46.421l.063-.036L137.84 7.554v43.954l-.062.036L70.52 90.375zm.25-43.811v43.38l66.821-38.579V7.985L70.77 46.564z' fill='#607D8B'/><path d='M86.986 83.182c-.23.149-.612.384-.849.523l-11.505 6.701c-.237.139-.206.252.068.252h.565c.275 0 .693-.113.93-.252L87.7 83.705c.237-.139.428-.253.425-.256a11.29 11.29 0 0 1-.006-.503c0-.274-.188-.377-.418-.227l-.715.463' fill='#607D8B'/><path d='M75.266 90.782H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.236-.138.615-.371.844-.519l.715-.464a.488.488 0 0 1 .266-.089c.172 0 .345.13.345.421 0 .214.001.363.003.437l.006.004-.004.069c-.003.075-.003.075-.486.356l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.108.866-.234l11.505-6.702c.168-.098.294-.173.361-.214-.004-.084-.004-.218-.004-.437l-.095-.171-.131.049-.714.463c-.232.15-.616.386-.854.525l-11.505 6.702-.029.018z' fill='#607D8B'/><path d='M75.266 89.871H74.7c-.2 0-.316-.056-.346-.166-.03-.11.043-.217.215-.317l11.505-6.702c.258-.151.694-.268.993-.268h.565c.2 0 .316.056.346.166.03.11-.043.217-.215.317l-11.505 6.702a2.282 2.282 0 0 1-.992.268zm-.6-.25l.034.001h.566c.252 0 .649-.107.866-.234l11.505-6.702.03-.018-.035-.001h-.565c-.252 0-.649.108-.867.234l-11.505 6.702-.029.018zM74.37 90.801v-1.247 1.247' fill='#607D8B'/><path d='M68.13 93.901c-.751-.093-1.314-.737-1.439-1.376-.831-4.238-1.151-8.782-1.165-21.352-.015-12.784.897-19.745.897-19.745.711-4.146 2.787-5.192 2.787-5.192l74.859-43.219c.223-.129 2.487-1.584 3.195.923 1.95 6.9 1.488 31.887.275 39.878-.389 2.565-1.248 5.215-3.056 6.283L69.21 93.653c-.382.221-.749.288-1.08.248 0 0-2.781-.441-3.001-2.125-.561-4.281-1.152-8.781-1.167-21.351-.014-12.784.898-19.745.898-19.745.71-4.146 2.787-5.191 2.787-5.191l6.598-3.81.871-.119 6.599-3.83.046-.461L68.13 93.901' fill='#FAFAFA'/><path d='M68.317 94.161l-.215-.013h-.001l-.244-.047c-.719-.156-2.772-.736-2.976-2.292-.568-4.34-1.154-8.813-1.168-21.384-.014-12.654.891-19.707.9-19.777.725-4.231 2.832-5.338 2.922-5.382l6.628-3.827.87-.119 6.446-3.742.034-.334a.248.248 0 0 1 .273-.223.248.248 0 0 1 .223.272l-.059.589-6.752 3.919-.87.118-6.556 3.785c-.031.016-1.99 1.068-2.666 5.018-.007.06-.908 7.086-.894 19.702.014 12.539.597 16.996 1.161 21.305.091.691.689 1.154 1.309 1.452a1.95 1.95 0 0 1-.236-.609c-.781-3.984-1.155-8.202-1.17-21.399-.014-12.653.891-19.707.9-19.777.725-4.231 2.832-5.337 2.922-5.382-.004.001 74.444-42.98 74.846-43.212l.028-.017c.904-.538 1.72-.688 2.36-.433.555.221.949.733 1.172 1.52 2.014 7.128 1.46 32.219.281 39.983-.507 3.341-1.575 5.515-3.175 6.462L69.335 93.869a2.023 2.023 0 0 1-1.018.292zm-.147-.507c.293.036.604-.037.915-.217l75.273-43.551c1.823-1.078 2.602-3.915 2.934-6.106 1.174-7.731 1.731-32.695-.268-39.772-.178-.631-.473-1.032-.876-1.192-.484-.193-1.166-.052-1.921.397l-.034.021-74.858 43.218c-.031.017-1.989 1.069-2.666 5.019-.007.059-.908 7.085-.894 19.702.015 13.155.386 17.351 1.161 21.303.09.461.476.983 1.037 1.139.114.025.185.037.196.039h.001z' fill='#455A64'/><path d='M69.317 68.982c.489-.281.885-.056.885.505 0 .56-.396 1.243-.885 1.525-.488.282-.884.057-.884-.504 0-.56.396-1.243.884-1.526' fill='#FFF'/><path d='M68.92 71.133c-.289 0-.487-.228-.487-.625 0-.56.396-1.243.884-1.526a.812.812 0 0 1 .397-.121c.289 0 .488.229.488.626 0 .56-.396 1.243-.885 1.525a.812.812 0 0 1-.397.121m.794-2.459a.976.976 0 0 0-.49.147c-.548.317-.978 1.058-.978 1.687 0 .486.271.812.674.812a.985.985 0 0 0 .491-.146c.548-.317.978-1.057.978-1.687 0-.486-.272-.813-.675-.813' fill='#8097A2'/><path d='M68.92 70.947c-.271 0-.299-.307-.299-.439 0-.491.361-1.116.79-1.363a.632.632 0 0 1 .303-.096c.272 0 .301.306.301.438 0 .491-.363 1.116-.791 1.364a.629.629 0 0 1-.304.096m.794-2.086a.812.812 0 0 0-.397.121c-.488.283-.884.966-.884 1.526 0 .397.198.625.487.625a.812.812 0 0 0 .397-.121c.489-.282.885-.965.885-1.525 0-.397-.199-.626-.488-.626' fill='#8097A2'/><path d='M69.444 85.35c.264-.152.477-.031.477.272 0 .303-.213.67-.477.822-.263.153-.477.031-.477-.271 0-.302.214-.671.477-.823' fill='#FFF'/><path d='M69.23 86.51c-.156 0-.263-.123-.263-.337 0-.302.214-.671.477-.823a.431.431 0 0 1 .214-.066c.156 0 .263.124.263.338 0 .303-.213.67-.477.822a.431.431 0 0 1-.214.066m.428-1.412c-.1 0-.203.029-.307.09-.32.185-.57.618-.57.985 0 .309.185.524.449.524a.63.63 0 0 0 .308-.09c.32-.185.57-.618.57-.985 0-.309-.185-.524-.45-.524' fill='#8097A2'/><path d='M69.23 86.322l-.076-.149c0-.235.179-.544.384-.661l.12-.041.076.151c0 .234-.179.542-.383.66l-.121.04m.428-1.038a.431.431 0 0 0-.214.066c-.263.152-.477.521-.477.823 0 .214.107.337.263.337a.431.431 0 0 0 .214-.066c.264-.152.477-.519.477-.822 0-.214-.107-.338-.263-.338' fill='#8097A2'/><path d='M139.278 7.769v43.667L72.208 90.16V46.493l67.07-38.724' fill='#455A64'/><path d='M72.083 90.375V46.421l.063-.036 67.257-38.831v43.954l-.062.036-67.258 38.831zm.25-43.811v43.38l66.821-38.579V7.985L72.333 46.564z' fill='#607D8B'/></g><path d='M125.737 88.647l-7.639 3.334V84l-11.459 4.713v8.269L99 100.315l13.369 3.646 13.368-15.314' fill='#455A64'/></g></svg>";

    function RotateInstructions() {
      this.loadIcon_();
      var overlay = document.createElement('div');
      var s = overlay.style;
      s.position = 'fixed';
      s.top = 0;
      s.right = 0;
      s.bottom = 0;
      s.left = 0;
      s.backgroundColor = 'gray';
      s.fontFamily = 'sans-serif';
      s.zIndex = 1000000;
      var img = document.createElement('img');
      img.src = this.icon;
      var s = img.style;
      s.marginLeft = '25%';
      s.marginTop = '25%';
      s.width = '50%';
      overlay.appendChild(img);
      var text = document.createElement('div');
      var s = text.style;
      s.textAlign = 'center';
      s.fontSize = '16px';
      s.lineHeight = '24px';
      s.margin = '24px 25%';
      s.width = '50%';
      text.innerHTML = 'Place your phone into your Cardboard viewer.';
      overlay.appendChild(text);
      var snackbar = document.createElement('div');
      var s = snackbar.style;
      s.backgroundColor = '#CFD8DC';
      s.position = 'fixed';
      s.bottom = 0;
      s.width = '100%';
      s.height = '48px';
      s.padding = '14px 24px';
      s.boxSizing = 'border-box';
      s.color = '#656A6B';
      overlay.appendChild(snackbar);
      var snackbarText = document.createElement('div');
      snackbarText.style.float = 'left';
      snackbarText.innerHTML = 'No Cardboard viewer?';
      var snackbarButton = document.createElement('a');
      snackbarButton.href = 'https://www.google.com/get/cardboard/get-cardboard/';
      snackbarButton.innerHTML = 'get one';
      snackbarButton.target = '_blank';
      var s = snackbarButton.style;
      s.float = 'right';
      s.fontWeight = 600;
      s.textTransform = 'uppercase';
      s.borderLeft = '1px solid gray';
      s.paddingLeft = '24px';
      s.textDecoration = 'none';
      s.color = '#656A6B';
      snackbar.appendChild(snackbarText);
      snackbar.appendChild(snackbarButton);
      this.overlay = overlay;
      this.text = text;
      this.hide();
    }

    RotateInstructions.prototype.show = function (parent) {
      if (!parent && !this.overlay.parentElement) {
        document.body.appendChild(this.overlay);
      } else if (parent) {
        if (this.overlay.parentElement && this.overlay.parentElement != parent) this.overlay.parentElement.removeChild(this.overlay);
        parent.appendChild(this.overlay);
      }

      this.overlay.style.display = 'block';
      var img = this.overlay.querySelector('img');
      var s = img.style;

      if (isLandscapeMode()) {
        s.width = '20%';
        s.marginLeft = '40%';
        s.marginTop = '3%';
      } else {
        s.width = '50%';
        s.marginLeft = '25%';
        s.marginTop = '25%';
      }
    };

    RotateInstructions.prototype.hide = function () {
      this.overlay.style.display = 'none';
    };

    RotateInstructions.prototype.showTemporarily = function (ms, parent) {
      this.show(parent);
      this.timer = setTimeout(this.hide.bind(this), ms);
    };

    RotateInstructions.prototype.disableShowTemporarily = function () {
      clearTimeout(this.timer);
    };

    RotateInstructions.prototype.update = function () {
      this.disableShowTemporarily();

      if (!isLandscapeMode() && isMobile()) {
        this.show();
      } else {
        this.hide();
      }
    };

    RotateInstructions.prototype.loadIcon_ = function () {
      this.icon = dataUri('image/svg+xml', rotateInstructionsAsset);
    };

    var DEFAULT_VIEWER = 'CardboardV1';
    var VIEWER_KEY = 'WEBVR_CARDBOARD_VIEWER';
    var CLASS_NAME = 'webvr-polyfill-viewer-selector';

    function ViewerSelector(defaultViewer) {
      try {
        this.selectedKey = localStorage.getItem(VIEWER_KEY);
      } catch (error) {
        console.error('Failed to load viewer profile: %s', error);
      }

      if (!this.selectedKey) {
        this.selectedKey = defaultViewer || DEFAULT_VIEWER;
      }

      this.dialog = this.createDialog_(DeviceInfo.Viewers);
      this.root = null;
      this.onChangeCallbacks_ = [];
    }

    ViewerSelector.prototype.show = function (root) {
      this.root = root;
      root.appendChild(this.dialog);
      var selected = this.dialog.querySelector('#' + this.selectedKey);
      selected.checked = true;
      this.dialog.style.display = 'block';
    };

    ViewerSelector.prototype.hide = function () {
      if (this.root && this.root.contains(this.dialog)) {
        this.root.removeChild(this.dialog);
      }

      this.dialog.style.display = 'none';
    };

    ViewerSelector.prototype.getCurrentViewer = function () {
      return DeviceInfo.Viewers[this.selectedKey];
    };

    ViewerSelector.prototype.getSelectedKey_ = function () {
      var input = this.dialog.querySelector('input[name=field]:checked');

      if (input) {
        return input.id;
      }

      return null;
    };

    ViewerSelector.prototype.onChange = function (cb) {
      this.onChangeCallbacks_.push(cb);
    };

    ViewerSelector.prototype.fireOnChange_ = function (viewer) {
      for (var i = 0; i < this.onChangeCallbacks_.length; i++) {
        this.onChangeCallbacks_[i](viewer);
      }
    };

    ViewerSelector.prototype.onSave_ = function () {
      this.selectedKey = this.getSelectedKey_();

      if (!this.selectedKey || !DeviceInfo.Viewers[this.selectedKey]) {
        console.error('ViewerSelector.onSave_: this should never happen!');
        return;
      }

      this.fireOnChange_(DeviceInfo.Viewers[this.selectedKey]);

      try {
        localStorage.setItem(VIEWER_KEY, this.selectedKey);
      } catch (error) {
        console.error('Failed to save viewer profile: %s', error);
      }

      this.hide();
    };

    ViewerSelector.prototype.createDialog_ = function (options) {
      var container = document.createElement('div');
      container.classList.add(CLASS_NAME);
      container.style.display = 'none';
      var overlay = document.createElement('div');
      var s = overlay.style;
      s.position = 'fixed';
      s.left = 0;
      s.top = 0;
      s.width = '100%';
      s.height = '100%';
      s.background = 'rgba(0, 0, 0, 0.3)';
      overlay.addEventListener('click', this.hide.bind(this));
      var width = 280;
      var dialog = document.createElement('div');
      var s = dialog.style;
      s.boxSizing = 'border-box';
      s.position = 'fixed';
      s.top = '24px';
      s.left = '50%';
      s.marginLeft = -width / 2 + 'px';
      s.width = width + 'px';
      s.padding = '24px';
      s.overflow = 'hidden';
      s.background = '#fafafa';
      s.fontFamily = "'Roboto', sans-serif";
      s.boxShadow = '0px 5px 20px #666';
      dialog.appendChild(this.createH1_('Select your viewer'));

      for (var id in options) {
        dialog.appendChild(this.createChoice_(id, options[id].label));
      }

      dialog.appendChild(this.createButton_('Save', this.onSave_.bind(this)));
      container.appendChild(overlay);
      container.appendChild(dialog);
      return container;
    };

    ViewerSelector.prototype.createH1_ = function (name) {
      var h1 = document.createElement('h1');
      var s = h1.style;
      s.color = 'black';
      s.fontSize = '20px';
      s.fontWeight = 'bold';
      s.marginTop = 0;
      s.marginBottom = '24px';
      h1.innerHTML = name;
      return h1;
    };

    ViewerSelector.prototype.createChoice_ = function (id, name) {
      var div = document.createElement('div');
      div.style.marginTop = '8px';
      div.style.color = 'black';
      var input = document.createElement('input');
      input.style.fontSize = '30px';
      input.setAttribute('id', id);
      input.setAttribute('type', 'radio');
      input.setAttribute('value', id);
      input.setAttribute('name', 'field');
      var label = document.createElement('label');
      label.style.marginLeft = '4px';
      label.setAttribute('for', id);
      label.innerHTML = name;
      div.appendChild(input);
      div.appendChild(label);
      return div;
    };

    ViewerSelector.prototype.createButton_ = function (label, onclick) {
      var button = document.createElement('button');
      button.innerHTML = label;
      var s = button.style;
      s.float = 'right';
      s.textTransform = 'uppercase';
      s.color = '#1094f7';
      s.fontSize = '14px';
      s.letterSpacing = 0;
      s.border = 0;
      s.background = 'none';
      s.marginTop = '16px';
      button.addEventListener('click', onclick);
      return button;
    };

    var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};

    function unwrapExports$$1(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule$$1(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    var NoSleep = createCommonjsModule$$1(function (module, exports) {
      (function webpackUniversalModuleDefinition(root, factory) {
        module.exports = factory();
      })(commonjsGlobal$$1, function () {
        return function (modules) {
          var installedModules = {};

          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }

            var module = installedModules[moduleId] = {
              i: moduleId,
              l: false,
              exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
          }

          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;

          __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
              Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
              });
            }
          };

          __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
              return module['default'];
            } : function getModuleExports() {
              return module;
            };

            __webpack_require__.d(getter, 'a', getter);

            return getter;
          };

          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };

          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 0);
        }([function (module, exports, __webpack_require__) {
          var _createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var mediaFile = __webpack_require__(1);

          var oldIOS = typeof navigator !== 'undefined' && parseFloat(('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) < 10 && !window.MSStream;

          var NoSleep = function () {
            function NoSleep() {
              _classCallCheck(this, NoSleep);

              if (oldIOS) {
                this.noSleepTimer = null;
              } else {
                this.noSleepVideo = document.createElement('video');
                this.noSleepVideo.setAttribute('playsinline', '');
                this.noSleepVideo.setAttribute('src', mediaFile);
                this.noSleepVideo.addEventListener('timeupdate', function (e) {
                  if (this.noSleepVideo.currentTime > 0.5) {
                    this.noSleepVideo.currentTime = Math.random();
                  }
                }.bind(this));
              }
            }

            _createClass(NoSleep, [{
              key: 'enable',
              value: function enable() {
                if (oldIOS) {
                  this.disable();
                  this.noSleepTimer = window.setInterval(function () {
                    window.location.href = '/';
                    window.setTimeout(window.stop, 0);
                  }, 15000);
                } else {
                  this.noSleepVideo.play();
                }
              }
            }, {
              key: 'disable',
              value: function disable() {
                if (oldIOS) {
                  if (this.noSleepTimer) {
                    window.clearInterval(this.noSleepTimer);
                    this.noSleepTimer = null;
                  }
                } else {
                  this.noSleepVideo.pause();
                }
              }
            }]);

            return NoSleep;
          }();

          module.exports = NoSleep;
        }, function (module, exports, __webpack_require__) {
          module.exports = 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=';
        }]);
      });
    });
    var NoSleep$1 = unwrapExports$$1(NoSleep);
    var nextDisplayId = 1000;
    var defaultLeftBounds = [0, 0, 0.5, 1];
    var defaultRightBounds = [0.5, 0, 0.5, 1];
    var raf = window.requestAnimationFrame;
    var caf = window.cancelAnimationFrame;

    function VRFrameData() {
      this.leftProjectionMatrix = new Float32Array(16);
      this.leftViewMatrix = new Float32Array(16);
      this.rightProjectionMatrix = new Float32Array(16);
      this.rightViewMatrix = new Float32Array(16);
      this.pose = null;
    }

    function VRDisplayCapabilities(config) {
      Object.defineProperties(this, {
        hasPosition: {
          writable: false,
          enumerable: true,
          value: config.hasPosition
        },
        hasExternalDisplay: {
          writable: false,
          enumerable: true,
          value: config.hasExternalDisplay
        },
        canPresent: {
          writable: false,
          enumerable: true,
          value: config.canPresent
        },
        maxLayers: {
          writable: false,
          enumerable: true,
          value: config.maxLayers
        },
        hasOrientation: {
          enumerable: true,
          get: function get() {
            deprecateWarning('VRDisplayCapabilities.prototype.hasOrientation', 'VRDisplay.prototype.getFrameData');
            return config.hasOrientation;
          }
        }
      });
    }

    function VRDisplay(config) {
      config = config || {};
      var USE_WAKELOCK = 'wakelock' in config ? config.wakelock : true;
      this.isPolyfilled = true;
      this.displayId = nextDisplayId++;
      this.displayName = '';
      this.depthNear = 0.01;
      this.depthFar = 10000.0;
      this.isPresenting = false;
      Object.defineProperty(this, 'isConnected', {
        get: function get() {
          deprecateWarning('VRDisplay.prototype.isConnected', 'VRDisplayCapabilities.prototype.hasExternalDisplay');
          return false;
        }
      });
      this.capabilities = new VRDisplayCapabilities({
        hasPosition: false,
        hasOrientation: false,
        hasExternalDisplay: false,
        canPresent: false,
        maxLayers: 1
      });
      this.stageParameters = null;
      this.waitingForPresent_ = false;
      this.layer_ = null;
      this.originalParent_ = null;
      this.fullscreenElement_ = null;
      this.fullscreenWrapper_ = null;
      this.fullscreenElementCachedStyle_ = null;
      this.fullscreenEventTarget_ = null;
      this.fullscreenChangeHandler_ = null;
      this.fullscreenErrorHandler_ = null;

      if (USE_WAKELOCK && isMobile()) {
        this.wakelock_ = new NoSleep$1();
      }
    }

    VRDisplay.prototype.getFrameData = function (frameData) {
      return frameDataFromPose(frameData, this._getPose(), this);
    };

    VRDisplay.prototype.getPose = function () {
      deprecateWarning('VRDisplay.prototype.getPose', 'VRDisplay.prototype.getFrameData');
      return this._getPose();
    };

    VRDisplay.prototype.resetPose = function () {
      deprecateWarning('VRDisplay.prototype.resetPose');
      return this._resetPose();
    };

    VRDisplay.prototype.getImmediatePose = function () {
      deprecateWarning('VRDisplay.prototype.getImmediatePose', 'VRDisplay.prototype.getFrameData');
      return this._getPose();
    };

    VRDisplay.prototype.requestAnimationFrame = function (callback) {
      return raf(callback);
    };

    VRDisplay.prototype.cancelAnimationFrame = function (id) {
      return caf(id);
    };

    VRDisplay.prototype.wrapForFullscreen = function (element) {
      if (isIOS()) {
        return element;
      }

      if (!this.fullscreenWrapper_) {
        this.fullscreenWrapper_ = document.createElement('div');
        var cssProperties = ['height: ' + Math.min(screen.height, screen.width) + 'px !important', 'top: 0 !important', 'left: 0 !important', 'right: 0 !important', 'border: 0', 'margin: 0', 'padding: 0', 'z-index: 999999 !important', 'position: fixed'];
        this.fullscreenWrapper_.setAttribute('style', cssProperties.join('; ') + ';');
        this.fullscreenWrapper_.classList.add('webvr-polyfill-fullscreen-wrapper');
      }

      if (this.fullscreenElement_ == element) {
        return this.fullscreenWrapper_;
      }

      if (this.fullscreenElement_) {
        if (this.originalParent_) {
          this.originalParent_.appendChild(this.fullscreenElement_);
        } else {
          this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_);
        }
      }

      this.fullscreenElement_ = element;
      this.originalParent_ = element.parentElement;

      if (!this.originalParent_) {
        document.body.appendChild(element);
      }

      if (!this.fullscreenWrapper_.parentElement) {
        var parent = this.fullscreenElement_.parentElement;
        parent.insertBefore(this.fullscreenWrapper_, this.fullscreenElement_);
        parent.removeChild(this.fullscreenElement_);
      }

      this.fullscreenWrapper_.insertBefore(this.fullscreenElement_, this.fullscreenWrapper_.firstChild);
      this.fullscreenElementCachedStyle_ = this.fullscreenElement_.getAttribute('style');
      var self = this;

      function applyFullscreenElementStyle() {
        if (!self.fullscreenElement_) {
          return;
        }

        var cssProperties = ['position: absolute', 'top: 0', 'left: 0', 'width: ' + Math.max(screen.width, screen.height) + 'px', 'height: ' + Math.min(screen.height, screen.width) + 'px', 'border: 0', 'margin: 0', 'padding: 0'];
        self.fullscreenElement_.setAttribute('style', cssProperties.join('; ') + ';');
      }

      applyFullscreenElementStyle();
      return this.fullscreenWrapper_;
    };

    VRDisplay.prototype.removeFullscreenWrapper = function () {
      if (!this.fullscreenElement_) {
        return;
      }

      var element = this.fullscreenElement_;

      if (this.fullscreenElementCachedStyle_) {
        element.setAttribute('style', this.fullscreenElementCachedStyle_);
      } else {
        element.removeAttribute('style');
      }

      this.fullscreenElement_ = null;
      this.fullscreenElementCachedStyle_ = null;
      var parent = this.fullscreenWrapper_.parentElement;
      this.fullscreenWrapper_.removeChild(element);

      if (this.originalParent_ === parent) {
        parent.insertBefore(element, this.fullscreenWrapper_);
      } else if (this.originalParent_) {
        this.originalParent_.appendChild(element);
      }

      parent.removeChild(this.fullscreenWrapper_);
      return element;
    };

    VRDisplay.prototype.requestPresent = function (layers) {
      var wasPresenting = this.isPresenting;
      var self = this;

      if (!(layers instanceof Array)) {
        deprecateWarning('VRDisplay.prototype.requestPresent with non-array argument', 'an array of VRLayers as the first argument');
        layers = [layers];
      }

      return new Promise(function (resolve, reject) {
        if (!self.capabilities.canPresent) {
          reject(new Error('VRDisplay is not capable of presenting.'));
          return;
        }

        if (layers.length == 0 || layers.length > self.capabilities.maxLayers) {
          reject(new Error('Invalid number of layers.'));
          return;
        }

        var incomingLayer = layers[0];

        if (!incomingLayer.source) {
          resolve();
          return;
        }

        var leftBounds = incomingLayer.leftBounds || defaultLeftBounds;
        var rightBounds = incomingLayer.rightBounds || defaultRightBounds;

        if (wasPresenting) {
          var layer = self.layer_;

          if (layer.source !== incomingLayer.source) {
            layer.source = incomingLayer.source;
          }

          for (var i = 0; i < 4; i++) {
            layer.leftBounds[i] = leftBounds[i];
            layer.rightBounds[i] = rightBounds[i];
          }

          self.wrapForFullscreen(self.layer_.source);
          self.updatePresent_();
          resolve();
          return;
        }

        self.layer_ = {
          predistorted: incomingLayer.predistorted,
          source: incomingLayer.source,
          leftBounds: leftBounds.slice(0),
          rightBounds: rightBounds.slice(0)
        };
        self.waitingForPresent_ = false;

        if (self.layer_ && self.layer_.source) {
          var fullscreenElement = self.wrapForFullscreen(self.layer_.source);

          var onFullscreenChange = function onFullscreenChange() {
            var actualFullscreenElement = getFullscreenElement();
            self.isPresenting = fullscreenElement === actualFullscreenElement;

            if (self.isPresenting) {
              if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape-primary').catch(function (error) {
                  console.error('screen.orientation.lock() failed due to', error.message);
                });
              }

              self.waitingForPresent_ = false;
              self.beginPresent_();
              resolve();
            } else {
              if (screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
              }

              self.removeFullscreenWrapper();
              self.disableWakeLock();
              self.endPresent_();
              self.removeFullscreenListeners_();
            }

            self.fireVRDisplayPresentChange_();
          };

          var onFullscreenError = function onFullscreenError() {
            if (!self.waitingForPresent_) {
              return;
            }

            self.removeFullscreenWrapper();
            self.removeFullscreenListeners_();
            self.disableWakeLock();
            self.waitingForPresent_ = false;
            self.isPresenting = false;
            reject(new Error('Unable to present.'));
          };

          self.addFullscreenListeners_(fullscreenElement, onFullscreenChange, onFullscreenError);

          if (requestFullscreen(fullscreenElement)) {
            self.enableWakeLock();
            self.waitingForPresent_ = true;
          } else if (isIOS() || isWebViewAndroid()) {
            self.enableWakeLock();
            self.isPresenting = true;
            self.beginPresent_();
            self.fireVRDisplayPresentChange_();
            resolve();
          }
        }

        if (!self.waitingForPresent_ && !isIOS()) {
          exitFullscreen();
          reject(new Error('Unable to present.'));
        }
      });
    };

    VRDisplay.prototype.exitPresent = function () {
      var wasPresenting = this.isPresenting;
      var self = this;
      this.isPresenting = false;
      this.layer_ = null;
      this.disableWakeLock();
      return new Promise(function (resolve, reject) {
        if (wasPresenting) {
          if (!exitFullscreen() && isIOS()) {
            self.endPresent_();
            self.fireVRDisplayPresentChange_();
          }

          if (isWebViewAndroid()) {
            self.removeFullscreenWrapper();
            self.removeFullscreenListeners_();
            self.endPresent_();
            self.fireVRDisplayPresentChange_();
          }

          resolve();
        } else {
          reject(new Error('Was not presenting to VRDisplay.'));
        }
      });
    };

    VRDisplay.prototype.getLayers = function () {
      if (this.layer_) {
        return [this.layer_];
      }

      return [];
    };

    VRDisplay.prototype.fireVRDisplayPresentChange_ = function () {
      var event = new CustomEvent('vrdisplaypresentchange', {
        detail: {
          display: this
        }
      });
      window.dispatchEvent(event);
    };

    VRDisplay.prototype.fireVRDisplayConnect_ = function () {
      var event = new CustomEvent('vrdisplayconnect', {
        detail: {
          display: this
        }
      });
      window.dispatchEvent(event);
    };

    VRDisplay.prototype.addFullscreenListeners_ = function (element, changeHandler, errorHandler) {
      this.removeFullscreenListeners_();
      this.fullscreenEventTarget_ = element;
      this.fullscreenChangeHandler_ = changeHandler;
      this.fullscreenErrorHandler_ = errorHandler;

      if (changeHandler) {
        if (document.fullscreenEnabled) {
          element.addEventListener('fullscreenchange', changeHandler, false);
        } else if (document.webkitFullscreenEnabled) {
          element.addEventListener('webkitfullscreenchange', changeHandler, false);
        } else if (document.mozFullScreenEnabled) {
          document.addEventListener('mozfullscreenchange', changeHandler, false);
        } else if (document.msFullscreenEnabled) {
          element.addEventListener('msfullscreenchange', changeHandler, false);
        }
      }

      if (errorHandler) {
        if (document.fullscreenEnabled) {
          element.addEventListener('fullscreenerror', errorHandler, false);
        } else if (document.webkitFullscreenEnabled) {
          element.addEventListener('webkitfullscreenerror', errorHandler, false);
        } else if (document.mozFullScreenEnabled) {
          document.addEventListener('mozfullscreenerror', errorHandler, false);
        } else if (document.msFullscreenEnabled) {
          element.addEventListener('msfullscreenerror', errorHandler, false);
        }
      }
    };

    VRDisplay.prototype.removeFullscreenListeners_ = function () {
      if (!this.fullscreenEventTarget_) return;
      var element = this.fullscreenEventTarget_;

      if (this.fullscreenChangeHandler_) {
        var changeHandler = this.fullscreenChangeHandler_;
        element.removeEventListener('fullscreenchange', changeHandler, false);
        element.removeEventListener('webkitfullscreenchange', changeHandler, false);
        document.removeEventListener('mozfullscreenchange', changeHandler, false);
        element.removeEventListener('msfullscreenchange', changeHandler, false);
      }

      if (this.fullscreenErrorHandler_) {
        var errorHandler = this.fullscreenErrorHandler_;
        element.removeEventListener('fullscreenerror', errorHandler, false);
        element.removeEventListener('webkitfullscreenerror', errorHandler, false);
        document.removeEventListener('mozfullscreenerror', errorHandler, false);
        element.removeEventListener('msfullscreenerror', errorHandler, false);
      }

      this.fullscreenEventTarget_ = null;
      this.fullscreenChangeHandler_ = null;
      this.fullscreenErrorHandler_ = null;
    };

    VRDisplay.prototype.enableWakeLock = function () {
      if (this.wakelock_) {
        this.wakelock_.enable();
      }
    };

    VRDisplay.prototype.disableWakeLock = function () {
      if (this.wakelock_) {
        this.wakelock_.disable();
      }
    };

    VRDisplay.prototype.beginPresent_ = function () {};

    VRDisplay.prototype.endPresent_ = function () {};

    VRDisplay.prototype.submitFrame = function (pose) {};

    VRDisplay.prototype.getEyeParameters = function (whichEye) {
      return null;
    };

    var config = {
      ADDITIONAL_VIEWERS: [],
      DEFAULT_VIEWER: '',
      MOBILE_WAKE_LOCK: true,
      DEBUG: false,
      DPDB_URL: 'https://dpdb.webvr.rocks/dpdb.json',
      K_FILTER: 0.98,
      PREDICTION_TIME_S: 0.040,
      CARDBOARD_UI_DISABLED: false,
      ROTATE_INSTRUCTIONS_DISABLED: false,
      YAW_ONLY: false,
      BUFFER_SCALE: 0.5,
      DIRTY_SUBMIT_FRAME_BINDINGS: false
    };
    var Eye = {
      LEFT: 'left',
      RIGHT: 'right'
    };

    function CardboardVRDisplay(config$$1) {
      var defaults = extend({}, config);
      config$$1 = extend(defaults, config$$1 || {});
      VRDisplay.call(this, {
        wakelock: config$$1.MOBILE_WAKE_LOCK
      });
      this.config = config$$1;
      this.displayName = 'Cardboard VRDisplay';
      this.capabilities = new VRDisplayCapabilities({
        hasPosition: false,
        hasOrientation: true,
        hasExternalDisplay: false,
        canPresent: true,
        maxLayers: 1
      });
      this.stageParameters = null;
      this.bufferScale_ = this.config.BUFFER_SCALE;
      this.poseSensor_ = new PoseSensor(this.config);
      this.distorter_ = null;
      this.cardboardUI_ = null;
      this.dpdb_ = new Dpdb(this.config.DPDB_URL, this.onDeviceParamsUpdated_.bind(this));
      this.deviceInfo_ = new DeviceInfo(this.dpdb_.getDeviceParams(), config$$1.ADDITIONAL_VIEWERS);
      this.viewerSelector_ = new ViewerSelector(config$$1.DEFAULT_VIEWER);
      this.viewerSelector_.onChange(this.onViewerChanged_.bind(this));
      this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer());

      if (!this.config.ROTATE_INSTRUCTIONS_DISABLED) {
        this.rotateInstructions_ = new RotateInstructions();
      }

      if (isIOS()) {
        window.addEventListener('resize', this.onResize_.bind(this));
      }
    }

    CardboardVRDisplay.prototype = Object.create(VRDisplay.prototype);

    CardboardVRDisplay.prototype._getPose = function () {
      return {
        position: null,
        orientation: this.poseSensor_.getOrientation(),
        linearVelocity: null,
        linearAcceleration: null,
        angularVelocity: null,
        angularAcceleration: null
      };
    };

    CardboardVRDisplay.prototype._resetPose = function () {
      if (this.poseSensor_.resetPose) {
        this.poseSensor_.resetPose();
      }
    };

    CardboardVRDisplay.prototype._getFieldOfView = function (whichEye) {
      var fieldOfView;

      if (whichEye == Eye.LEFT) {
        fieldOfView = this.deviceInfo_.getFieldOfViewLeftEye();
      } else if (whichEye == Eye.RIGHT) {
        fieldOfView = this.deviceInfo_.getFieldOfViewRightEye();
      } else {
        console.error('Invalid eye provided: %s', whichEye);
        return null;
      }

      return fieldOfView;
    };

    CardboardVRDisplay.prototype._getEyeOffset = function (whichEye) {
      var offset;

      if (whichEye == Eye.LEFT) {
        offset = [-this.deviceInfo_.viewer.interLensDistance * 0.5, 0.0, 0.0];
      } else if (whichEye == Eye.RIGHT) {
        offset = [this.deviceInfo_.viewer.interLensDistance * 0.5, 0.0, 0.0];
      } else {
        console.error('Invalid eye provided: %s', whichEye);
        return null;
      }

      return offset;
    };

    CardboardVRDisplay.prototype.getEyeParameters = function (whichEye) {
      var offset = this._getEyeOffset(whichEye);

      var fieldOfView = this._getFieldOfView(whichEye);

      var eyeParams = {
        offset: offset,
        renderWidth: this.deviceInfo_.device.width * 0.5 * this.bufferScale_,
        renderHeight: this.deviceInfo_.device.height * this.bufferScale_
      };
      Object.defineProperty(eyeParams, 'fieldOfView', {
        enumerable: true,
        get: function get() {
          deprecateWarning('VRFieldOfView', 'VRFrameData\'s projection matrices');
          return fieldOfView;
        }
      });
      return eyeParams;
    };

    CardboardVRDisplay.prototype.onDeviceParamsUpdated_ = function (newParams) {
      if (this.config.DEBUG) {
        console.log('DPDB reported that device params were updated.');
      }

      this.deviceInfo_.updateDeviceParams(newParams);

      if (this.distorter_) {
        this.distorter_.updateDeviceInfo(this.deviceInfo_);
      }
    };

    CardboardVRDisplay.prototype.updateBounds_ = function () {
      if (this.layer_ && this.distorter_ && (this.layer_.leftBounds || this.layer_.rightBounds)) {
        this.distorter_.setTextureBounds(this.layer_.leftBounds, this.layer_.rightBounds);
      }
    };

    CardboardVRDisplay.prototype.beginPresent_ = function () {
      var gl = this.layer_.source.getContext('webgl');
      if (!gl) gl = this.layer_.source.getContext('experimental-webgl');
      if (!gl) gl = this.layer_.source.getContext('webgl2');
      if (!gl) return;

      if (this.layer_.predistorted) {
        if (!this.config.CARDBOARD_UI_DISABLED) {
          gl.canvas.width = getScreenWidth() * this.bufferScale_;
          gl.canvas.height = getScreenHeight() * this.bufferScale_;
          this.cardboardUI_ = new CardboardUI(gl);
        }
      } else {
        if (!this.config.CARDBOARD_UI_DISABLED) {
          this.cardboardUI_ = new CardboardUI(gl);
        }

        this.distorter_ = new CardboardDistorter(gl, this.cardboardUI_, this.config.BUFFER_SCALE, this.config.DIRTY_SUBMIT_FRAME_BINDINGS);
        this.distorter_.updateDeviceInfo(this.deviceInfo_);
      }

      if (this.cardboardUI_) {
        this.cardboardUI_.listen(function (e) {
          this.viewerSelector_.show(this.layer_.source.parentElement);
          e.stopPropagation();
          e.preventDefault();
        }.bind(this), function (e) {
          this.exitPresent();
          e.stopPropagation();
          e.preventDefault();
        }.bind(this));
      }

      if (this.rotateInstructions_) {
        if (isLandscapeMode() && isMobile()) {
          this.rotateInstructions_.showTemporarily(3000, this.layer_.source.parentElement);
        } else {
          this.rotateInstructions_.update();
        }
      }

      this.orientationHandler = this.onOrientationChange_.bind(this);
      window.addEventListener('orientationchange', this.orientationHandler);
      this.vrdisplaypresentchangeHandler = this.updateBounds_.bind(this);
      window.addEventListener('vrdisplaypresentchange', this.vrdisplaypresentchangeHandler);
      this.fireVRDisplayDeviceParamsChange_();
    };

    CardboardVRDisplay.prototype.endPresent_ = function () {
      if (this.distorter_) {
        this.distorter_.destroy();
        this.distorter_ = null;
      }

      if (this.cardboardUI_) {
        this.cardboardUI_.destroy();
        this.cardboardUI_ = null;
      }

      if (this.rotateInstructions_) {
        this.rotateInstructions_.hide();
      }

      this.viewerSelector_.hide();
      window.removeEventListener('orientationchange', this.orientationHandler);
      window.removeEventListener('vrdisplaypresentchange', this.vrdisplaypresentchangeHandler);
    };

    CardboardVRDisplay.prototype.updatePresent_ = function () {
      this.endPresent_();
      this.beginPresent_();
    };

    CardboardVRDisplay.prototype.submitFrame = function (pose) {
      if (this.distorter_) {
        this.updateBounds_();
        this.distorter_.submitFrame();
      } else if (this.cardboardUI_ && this.layer_) {
        var gl = this.layer_.source.getContext('webgl');
        if (!gl) gl = this.layer_.source.getContext('experimental-webgl');
        if (!gl) gl = this.layer_.source.getContext('webgl2');
        var canvas = gl.canvas;

        if (canvas.width != this.lastWidth || canvas.height != this.lastHeight) {
          this.cardboardUI_.onResize();
        }

        this.lastWidth = canvas.width;
        this.lastHeight = canvas.height;
        this.cardboardUI_.render();
      }
    };

    CardboardVRDisplay.prototype.onOrientationChange_ = function (e) {
      this.viewerSelector_.hide();

      if (this.rotateInstructions_) {
        this.rotateInstructions_.update();
      }

      this.onResize_();
    };

    CardboardVRDisplay.prototype.onResize_ = function (e) {
      if (this.layer_) {
        var gl = this.layer_.source.getContext('webgl');
        if (!gl) gl = this.layer_.source.getContext('experimental-webgl');
        if (!gl) gl = this.layer_.source.getContext('webgl2');
        var cssProperties = ['position: absolute', 'top: 0', 'left: 0', 'width: 100vw', 'height: 100vh', 'border: 0', 'margin: 0', 'padding: 0px', 'box-sizing: content-box'];
        gl.canvas.setAttribute('style', cssProperties.join('; ') + ';');
        safariCssSizeWorkaround(gl.canvas);
      }
    };

    CardboardVRDisplay.prototype.onViewerChanged_ = function (viewer) {
      this.deviceInfo_.setViewer(viewer);

      if (this.distorter_) {
        this.distorter_.updateDeviceInfo(this.deviceInfo_);
      }

      this.fireVRDisplayDeviceParamsChange_();
    };

    CardboardVRDisplay.prototype.fireVRDisplayDeviceParamsChange_ = function () {
      var event = new CustomEvent('vrdisplaydeviceparamschange', {
        detail: {
          vrdisplay: this,
          deviceInfo: this.deviceInfo_
        }
      });
      window.dispatchEvent(event);
    };

    CardboardVRDisplay.VRFrameData = VRFrameData;
    CardboardVRDisplay.VRDisplay = VRDisplay;
    return CardboardVRDisplay;
  });
});
var CardboardVRDisplay = unwrapExports(cardboardVrDisplay);

class XRDevice extends EventTarget {
  constructor(global) {
    super();
    this.global = global;
    this.onWindowResize = this.onWindowResize.bind(this);
    this.global.window.addEventListener('resize', this.onWindowResize);
    this.environmentBlendMode = 'opaque';
  }

  onBaseLayerSet(sessionId, layer) {
    throw new Error('Not implemented');
  }

  isSessionSupported(mode) {
    throw new Error('Not implemented');
  }

  isFeatureSupported(featureDescriptor) {
    throw new Error('Not implemented');
  }

  async requestSession(mode, enabledFeatures) {
    throw new Error('Not implemented');
  }

  requestAnimationFrame(callback) {
    throw new Error('Not implemented');
  }

  onFrameStart(sessionId) {
    throw new Error('Not implemented');
  }

  onFrameEnd(sessionId) {
    throw new Error('Not implemented');
  }

  doesSessionSupportReferenceSpace(sessionId, type) {
    throw new Error('Not implemented');
  }

  requestStageBounds() {
    throw new Error('Not implemented');
  }

  async requestFrameOfReferenceTransform(type, options) {
    return undefined;
  }

  cancelAnimationFrame(handle) {
    throw new Error('Not implemented');
  }

  endSession(sessionId) {
    throw new Error('Not implemented');
  }

  getViewport(sessionId, eye, layer, target) {
    throw new Error('Not implemented');
  }

  getProjectionMatrix(eye) {
    throw new Error('Not implemented');
  }

  getBasePoseMatrix() {
    throw new Error('Not implemented');
  }

  getBaseViewMatrix(eye) {
    throw new Error('Not implemented');
  }

  getInputSources() {
    throw new Error('Not implemented');
  }

  getInputPose(inputSource, coordinateSystem, poseType) {
    throw new Error('Not implemented');
  }

  onWindowResize() {
    this.onWindowResize();
  }

}

let daydream = {
  mapping: '',
  profiles: ['google-daydream', 'generic-trigger-touchpad'],
  buttons: {
    length: 3,
    0: null,
    1: null,
    2: 0
  }
};
let viveFocus = {
  mapping: 'xr-standard',
  profiles: ['htc-vive-focus', 'generic-trigger-touchpad'],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  }
};
let oculusGo = {
  mapping: 'xr-standard',
  profiles: ['oculus-go', 'generic-trigger-touchpad'],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  },
  gripTransform: {
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
};
let oculusTouch = {
  mapping: 'xr-standard',
  displayProfiles: {
    'Oculus Quest': ['oculus-touch-v2', 'oculus-touch', 'generic-trigger-squeeze-thumbstick']
  },
  profiles: ['oculus-touch', 'generic-trigger-squeeze-thumbstick'],
  axes: {
    length: 4,
    0: null,
    1: null,
    2: 0,
    3: 1
  },
  buttons: {
    length: 7,
    0: 1,
    1: 2,
    2: null,
    3: 0,
    4: 3,
    5: 4,
    6: null
  },
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
};
let openVr = {
  mapping: 'xr-standard',
  profiles: ['htc-vive', 'generic-trigger-squeeze-touchpad'],
  displayProfiles: {
    'HTC Vive': ['htc-vive', 'generic-trigger-squeeze-touchpad'],
    'HTC Vive DVT': ['htc-vive', 'generic-trigger-squeeze-touchpad'],
    'Valve Index': ['valve-index', 'generic-trigger-squeeze-touchpad-thumbstick']
  },
  buttons: {
    length: 3,
    0: 1,
    1: 2,
    2: 0
  },
  gripTransform: {
    position: [0, 0, 0.05, 1]
  },
  targetRayTransform: {
    orientation: [Math.PI * -0.08, 0, 0, 1]
  },
  userAgentOverrides: {
    "Firefox": {
      axes: {
        invert: [1, 3]
      }
    }
  }
};
let samsungGearVR = {
  mapping: 'xr-standard',
  profiles: ['samsung-gearvr', 'generic-trigger-touchpad'],
  buttons: {
    length: 3,
    0: 1,
    1: null,
    2: 0
  },
  gripTransform: {
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
};
let samsungOdyssey = {
  mapping: 'xr-standard',
  profiles: ['samsung-odyssey', 'microsoft-mixed-reality', 'generic-trigger-squeeze-touchpad-thumbstick'],
  buttons: {
    length: 4,
    0: 1,
    1: 0,
    2: 2,
    3: 4
  },
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
};
let windowsMixedReality = {
  mapping: 'xr-standard',
  profiles: ['microsoft-mixed-reality', 'generic-trigger-squeeze-touchpad-thumbstick'],
  buttons: {
    length: 4,
    0: 1,
    1: 0,
    2: 2,
    3: 4
  },
  gripTransform: {
    position: [0, -0.02, 0.04, 1],
    orientation: [Math.PI * 0.11, 0, 0, 1]
  }
};
let GamepadMappings = {
  'Daydream Controller': daydream,
  'Gear VR Controller': samsungGearVR,
  'HTC Vive Focus Controller': viveFocus,
  'Oculus Go Controller': oculusGo,
  'Oculus Touch (Right)': oculusTouch,
  'Oculus Touch (Left)': oculusTouch,
  'OpenVR Gamepad': openVr,
  'Spatial Controller (Spatial Interaction Source) 045E-065A': windowsMixedReality,
  'Spatial Controller (Spatial Interaction Source) 045E-065D': samsungOdyssey,
  'Windows Mixed Reality (Right)': windowsMixedReality,
  'Windows Mixed Reality (Left)': windowsMixedReality
};
const HEAD_ELBOW_OFFSET_RIGHTHANDED = fromValues$1(0.155, -0.465, -0.15);
const HEAD_ELBOW_OFFSET_LEFTHANDED = fromValues$1(-0.155, -0.465, -0.15);
const ELBOW_WRIST_OFFSET = fromValues$1(0, 0, -0.25);
const WRIST_CONTROLLER_OFFSET = fromValues$1(0, 0, 0.05);
const ARM_EXTENSION_OFFSET = fromValues$1(-0.08, 0.14, 0.08);
const ELBOW_BEND_RATIO = 0.4;
const EXTENSION_RATIO_WEIGHT = 0.4;
const MIN_ANGULAR_SPEED = 0.61;
const MIN_ANGLE_DELTA = 0.175;
const MIN_EXTENSION_COS = 0.12;
const MAX_EXTENSION_COS = 0.87;
const RAD_TO_DEG = 180 / Math.PI;

function eulerFromQuaternion(out, q, order) {
  function clamp(value, min$$1, max$$1) {
    return value < min$$1 ? min$$1 : value > max$$1 ? max$$1 : value;
  }

  var sqx = q[0] * q[0];
  var sqy = q[1] * q[1];
  var sqz = q[2] * q[2];
  var sqw = q[3] * q[3];

  if (order === 'XYZ') {
    out[0] = Math.atan2(2 * (q[0] * q[3] - q[1] * q[2]), sqw - sqx - sqy + sqz);
    out[1] = Math.asin(clamp(2 * (q[0] * q[2] + q[1] * q[3]), -1, 1));
    out[2] = Math.atan2(2 * (q[2] * q[3] - q[0] * q[1]), sqw + sqx - sqy - sqz);
  } else if (order === 'YXZ') {
    out[0] = Math.asin(clamp(2 * (q[0] * q[3] - q[1] * q[2]), -1, 1));
    out[1] = Math.atan2(2 * (q[0] * q[2] + q[1] * q[3]), sqw - sqx - sqy + sqz);
    out[2] = Math.atan2(2 * (q[0] * q[1] + q[2] * q[3]), sqw - sqx + sqy - sqz);
  } else if (order === 'ZXY') {
    out[0] = Math.asin(clamp(2 * (q[0] * q[3] + q[1] * q[2]), -1, 1));
    out[1] = Math.atan2(2 * (q[1] * q[3] - q[2] * q[0]), sqw - sqx - sqy + sqz);
    out[2] = Math.atan2(2 * (q[2] * q[3] - q[0] * q[1]), sqw - sqx + sqy - sqz);
  } else if (order === 'ZYX') {
    out[0] = Math.atan2(2 * (q[0] * q[3] + q[2] * q[1]), sqw - sqx - sqy + sqz);
    out[1] = Math.asin(clamp(2 * (q[1] * q[3] - q[0] * q[2]), -1, 1));
    out[2] = Math.atan2(2 * (q[0] * q[1] + q[2] * q[3]), sqw + sqx - sqy - sqz);
  } else if (order === 'YZX') {
    out[0] = Math.atan2(2 * (q[0] * q[3] - q[2] * q[1]), sqw - sqx + sqy - sqz);
    out[1] = Math.atan2(2 * (q[1] * q[3] - q[0] * q[2]), sqw + sqx - sqy - sqz);
    out[2] = Math.asin(clamp(2 * (q[0] * q[1] + q[2] * q[3]), -1, 1));
  } else if (order === 'XZY') {
    out[0] = Math.atan2(2 * (q[0] * q[3] + q[1] * q[2]), sqw - sqx + sqy - sqz);
    out[1] = Math.atan2(2 * (q[0] * q[2] + q[1] * q[3]), sqw + sqx - sqy - sqz);
    out[2] = Math.asin(clamp(2 * (q[2] * q[3] - q[0] * q[1]), -1, 1));
  } else {
    console.log('No order given for quaternion to euler conversion.');
    return;
  }
}

class OrientationArmModel {
  constructor() {
    this.hand = 'right';
    this.headElbowOffset = HEAD_ELBOW_OFFSET_RIGHTHANDED;
    this.controllerQ = create$4();
    this.lastControllerQ = create$4();
    this.headQ = create$4();
    this.headPos = create$1();
    this.elbowPos = create$1();
    this.wristPos = create$1();
    this.time = null;
    this.lastTime = null;
    this.rootQ = create$4();
    this.position = create$1();
  }

  setHandedness(hand) {
    if (this.hand != hand) {
      this.hand = hand;

      if (this.hand == 'left') {
        this.headElbowOffset = HEAD_ELBOW_OFFSET_LEFTHANDED;
      } else {
        this.headElbowOffset = HEAD_ELBOW_OFFSET_RIGHTHANDED;
      }
    }
  }

  update(controllerOrientation, headPoseMatrix) {
    this.time = now$1();

    if (controllerOrientation) {
      copy$4(this.lastControllerQ, this.controllerQ);
      copy$4(this.controllerQ, controllerOrientation);
    }

    if (headPoseMatrix) {
      getTranslation(this.headPos, headPoseMatrix);
      getRotation(this.headQ, headPoseMatrix);
    }

    let headYawQ = this.getHeadYawOrientation_();
    let angleDelta = this.quatAngle_(this.lastControllerQ, this.controllerQ);
    let timeDelta = (this.time - this.lastTime) / 1000;
    let controllerAngularSpeed = angleDelta / timeDelta;

    if (controllerAngularSpeed > MIN_ANGULAR_SPEED) {
      slerp(this.rootQ, this.rootQ, headYawQ, Math.min(angleDelta / MIN_ANGLE_DELTA, 1.0));
    } else {
      copy$4(this.rootQ, headYawQ);
    }

    let controllerForward = fromValues$1(0, 0, -1.0);
    transformQuat(controllerForward, controllerForward, this.controllerQ);
    let controllerDotY = dot(controllerForward, [0, 1, 0]);
    let extensionRatio = this.clamp_((controllerDotY - MIN_EXTENSION_COS) / MAX_EXTENSION_COS, 0.0, 1.0);
    let controllerCameraQ = clone$4(this.rootQ);
    invert$2(controllerCameraQ, controllerCameraQ);
    multiply$4(controllerCameraQ, controllerCameraQ, this.controllerQ);
    let elbowPos = this.elbowPos;
    copy$1(elbowPos, this.headPos);
    add$1(elbowPos, elbowPos, this.headElbowOffset);
    let elbowOffset = clone$1(ARM_EXTENSION_OFFSET);
    scale$1(elbowOffset, elbowOffset, extensionRatio);
    add$1(elbowPos, elbowPos, elbowOffset);
    let totalAngle = this.quatAngle_(controllerCameraQ, create$4());
    let totalAngleDeg = totalAngle * RAD_TO_DEG;
    let lerpSuppression = 1 - Math.pow(totalAngleDeg / 180, 4);
    let elbowRatio = ELBOW_BEND_RATIO;
    let wristRatio = 1 - ELBOW_BEND_RATIO;
    let lerpValue = lerpSuppression * (elbowRatio + wristRatio * extensionRatio * EXTENSION_RATIO_WEIGHT);
    let wristQ = create$4();
    slerp(wristQ, wristQ, controllerCameraQ, lerpValue);
    let invWristQ = invert$2(create$4(), wristQ);
    let elbowQ = clone$4(controllerCameraQ);
    multiply$4(elbowQ, elbowQ, invWristQ);
    let wristPos = this.wristPos;
    copy$1(wristPos, WRIST_CONTROLLER_OFFSET);
    transformQuat(wristPos, wristPos, wristQ);
    add$1(wristPos, wristPos, ELBOW_WRIST_OFFSET);
    transformQuat(wristPos, wristPos, elbowQ);
    add$1(wristPos, wristPos, elbowPos);
    let offset = clone$1(ARM_EXTENSION_OFFSET);
    scale$1(offset, offset, extensionRatio);
    add$1(this.position, this.wristPos, offset);
    transformQuat(this.position, this.position, this.rootQ);
    this.lastTime = this.time;
  }

  getPosition() {
    return this.position;
  }

  getHeadYawOrientation_() {
    let headEuler = create$1();
    eulerFromQuaternion(headEuler, this.headQ, 'YXZ');
    let destinationQ = fromEuler(create$4(), 0, headEuler[1] * RAD_TO_DEG, 0);
    return destinationQ;
  }

  clamp_(value, min$$1, max$$1) {
    return Math.min(Math.max(value, min$$1), max$$1);
  }

  quatAngle_(q1, q2) {
    let vec1 = [0, 0, -1];
    let vec2 = [0, 0, -1];
    transformQuat(vec1, vec1, q1);
    transformQuat(vec2, vec2, q2);
    return angle(vec1, vec2);
  }

}

const PRIVATE$18 = Symbol('@@webxr-polyfill/XRRemappedGamepad');
const PLACEHOLDER_BUTTON = {
  pressed: false,
  touched: false,
  value: 0.0
};
Object.freeze(PLACEHOLDER_BUTTON);

class XRRemappedGamepad {
  constructor(gamepad, display, map) {
    if (!map) {
      map = {};
    }

    if (map.userAgentOverrides) {
      for (let agent in map.userAgentOverrides) {
        if (navigator.userAgent.includes(agent)) {
          let override = map.userAgentOverrides[agent];

          for (let key in override) {
            if (key in map) {
              Object.assign(map[key], override[key]);
            } else {
              map[key] = override[key];
            }
          }

          break;
        }
      }
    }

    let axes = new Array(map.axes && map.axes.length ? map.axes.length : gamepad.axes.length);
    let buttons = new Array(map.buttons && map.buttons.length ? map.buttons.length : gamepad.buttons.length);
    let gripTransform = null;

    if (map.gripTransform) {
      let orientation = map.gripTransform.orientation || [0, 0, 0, 1];
      gripTransform = create();
      fromRotationTranslation(gripTransform, normalize$2(orientation, orientation), map.gripTransform.position || [0, 0, 0]);
    }

    let targetRayTransform = null;

    if (map.targetRayTransform) {
      let orientation = map.targetRayTransform.orientation || [0, 0, 0, 1];
      targetRayTransform = create();
      fromRotationTranslation(targetRayTransform, normalize$2(orientation, orientation), map.targetRayTransform.position || [0, 0, 0]);
    }

    let profiles = map.profiles;

    if (map.displayProfiles) {
      if (display.displayName in map.displayProfiles) {
        profiles = map.displayProfiles[display.displayName];
      }
    }

    this[PRIVATE$18] = {
      gamepad,
      map,
      profiles: profiles || [gamepad.id],
      mapping: map.mapping || gamepad.mapping,
      axes,
      buttons,
      gripTransform,
      targetRayTransform
    };

    this._update();
  }

  _update() {
    let gamepad = this[PRIVATE$18].gamepad;
    let map = this[PRIVATE$18].map;
    let axes = this[PRIVATE$18].axes;

    for (let i = 0; i < axes.length; ++i) {
      if (map.axes && i in map.axes) {
        if (map.axes[i] === null) {
          axes[i] = 0;
        } else {
          axes[i] = gamepad.axes[map.axes[i]];
        }
      } else {
        axes[i] = gamepad.axes[i];
      }
    }

    if (map.axes && map.axes.invert) {
      for (let axis of map.axes.invert) {
        if (axis < axes.length) {
          axes[axis] *= -1;
        }
      }
    }

    let buttons = this[PRIVATE$18].buttons;

    for (let i = 0; i < buttons.length; ++i) {
      if (map.buttons && i in map.buttons) {
        if (map.buttons[i] === null) {
          buttons[i] = PLACEHOLDER_BUTTON;
        } else {
          buttons[i] = gamepad.buttons[map.buttons[i]];
        }
      } else {
        buttons[i] = gamepad.buttons[i];
      }
    }
  }

  get id() {
    return '';
  }

  get _profiles() {
    return this[PRIVATE$18].profiles;
  }

  get index() {
    return -1;
  }

  get connected() {
    return this[PRIVATE$18].gamepad.connected;
  }

  get timestamp() {
    return this[PRIVATE$18].gamepad.timestamp;
  }

  get mapping() {
    return this[PRIVATE$18].mapping;
  }

  get axes() {
    return this[PRIVATE$18].axes;
  }

  get buttons() {
    return this[PRIVATE$18].buttons;
  }

  get hapticActuators() {
    return this[PRIVATE$18].gamepad.hapticActuators;
  }

}

class GamepadXRInputSource {
  constructor(polyfill, display, primaryButtonIndex = 0, primarySqueezeButtonIndex = -1) {
    this.polyfill = polyfill;
    this.display = display;
    this.nativeGamepad = null;
    this.gamepad = null;
    this.inputSource = new XRInputSource(this);
    this.lastPosition = create$1();
    this.emulatedPosition = false;
    this.basePoseMatrix = create();
    this.outputMatrix = create();
    this.primaryButtonIndex = primaryButtonIndex;
    this.primaryActionPressed = false;
    this.primarySqueezeButtonIndex = primarySqueezeButtonIndex;
    this.primarySqueezeActionPressed = false;
    this.handedness = '';
    this.targetRayMode = 'gaze';
    this.armModel = null;
  }

  get profiles() {
    return this.gamepad ? this.gamepad._profiles : [];
  }

  updateFromGamepad(gamepad) {
    if (this.nativeGamepad !== gamepad) {
      this.nativeGamepad = gamepad;

      if (gamepad) {
        this.gamepad = new XRRemappedGamepad(gamepad, this.display, GamepadMappings[gamepad.id]);
      } else {
        this.gamepad = null;
      }
    }

    this.handedness = gamepad.hand === '' ? 'none' : gamepad.hand;

    if (this.gamepad) {
      this.gamepad._update();
    }

    if (gamepad.pose) {
      this.targetRayMode = 'tracked-pointer';
      this.emulatedPosition = !gamepad.pose.hasPosition;
    } else if (gamepad.hand === '') {
      this.targetRayMode = 'gaze';
      this.emulatedPosition = false;
    }
  }

  updateBasePoseMatrix() {
    if (this.nativeGamepad && this.nativeGamepad.pose) {
      let pose = this.nativeGamepad.pose;
      let position = pose.position;
      let orientation = pose.orientation;

      if (!position && !orientation) {
        return;
      }

      if (!position) {
        if (!pose.hasPosition) {
          if (!this.armModel) {
            this.armModel = new OrientationArmModel();
          }

          this.armModel.setHandedness(this.nativeGamepad.hand);
          this.armModel.update(orientation, this.polyfill.getBasePoseMatrix());
          position = this.armModel.getPosition();
        } else {
          position = this.lastPosition;
        }
      } else {
        this.lastPosition[0] = position[0];
        this.lastPosition[1] = position[1];
        this.lastPosition[2] = position[2];
      }

      fromRotationTranslation(this.basePoseMatrix, orientation, position);
    } else {
      copy(this.basePoseMatrix, this.polyfill.getBasePoseMatrix());
    }

    return this.basePoseMatrix;
  }

  getXRPose(coordinateSystem, poseType) {
    this.updateBasePoseMatrix();

    switch (poseType) {
      case "target-ray":
        coordinateSystem._transformBasePoseMatrix(this.outputMatrix, this.basePoseMatrix);

        if (this.gamepad && this.gamepad[PRIVATE$18].targetRayTransform) {
          multiply(this.outputMatrix, this.outputMatrix, this.gamepad[PRIVATE$18].targetRayTransform);
        }

        break;

      case "grip":
        if (!this.nativeGamepad || !this.nativeGamepad.pose) {
          return null;
        }

        coordinateSystem._transformBasePoseMatrix(this.outputMatrix, this.basePoseMatrix);

        if (this.gamepad && this.gamepad[PRIVATE$18].gripTransform) {
          multiply(this.outputMatrix, this.outputMatrix, this.gamepad[PRIVATE$18].gripTransform);
        }

        break;

      default:
        return null;
    }

    coordinateSystem._adjustForOriginOffset(this.outputMatrix);

    return new XRPose(new XRRigidTransform(this.outputMatrix), this.emulatedPosition);
  }

}

const TEST_ENV = "production" === 'test';
const EXTRA_PRESENTATION_ATTRIBUTES = {
  highRefreshRate: true
};
const PRIMARY_BUTTON_MAP = {
  oculus: 1,
  openvr: 1,
  'spatial controller (spatial interaction source)': 1
};
let SESSION_ID = 0;

class Session {
  constructor(mode, enabledFeatures, polyfillOptions = {}) {
    this.mode = mode;
    this.enabledFeatures = enabledFeatures;
    this.outputContext = null;
    this.immersive = mode == 'immersive-vr' || mode == 'immersive-ar';
    this.ended = null;
    this.baseLayer = null;
    this.id = ++SESSION_ID;
    this.modifiedCanvasLayer = false;

    if (this.outputContext && !TEST_ENV) {
      const renderContextType = polyfillOptions.renderContextType || '2d';
      this.renderContext = this.outputContext.canvas.getContext(renderContextType);
    }
  }

}

class WebVRDevice extends XRDevice {
  constructor(global, display) {
    const {
      canPresent
    } = display.capabilities;
    super(global);
    this.display = display;
    this.frame = new global.VRFrameData();
    this.sessions = new Map();
    this.immersiveSession = null;
    this.canPresent = canPresent;
    this.baseModelMatrix = create();
    this.gamepadInputSources = {};
    this.tempVec3 = new Float32Array(3);
    this.onVRDisplayPresentChange = this.onVRDisplayPresentChange.bind(this);
    global.window.addEventListener('vrdisplaypresentchange', this.onVRDisplayPresentChange);
    this.CAN_USE_GAMEPAD = global.navigator && 'getGamepads' in global.navigator;
    this.HAS_BITMAP_SUPPORT = isImageBitmapSupported(global);
  }

  get depthNear() {
    return this.display.depthNear;
  }

  set depthNear(val) {
    this.display.depthNear = val;
  }

  get depthFar() {
    return this.display.depthFar;
  }

  set depthFar(val) {
    this.display.depthFar = val;
  }

  onBaseLayerSet(sessionId, layer) {
    const session = this.sessions.get(sessionId);
    const canvas = layer.context.canvas;

    if (session.immersive) {
      const left = this.display.getEyeParameters('left');
      const right = this.display.getEyeParameters('right');
      canvas.width = Math.max(left.renderWidth, right.renderWidth) * 2;
      canvas.height = Math.max(left.renderHeight, right.renderHeight);
      this.display.requestPresent([{
        source: canvas,
        attributes: EXTRA_PRESENTATION_ATTRIBUTES
      }]).then(() => {
        if (!TEST_ENV && !this.global.document.body.contains(canvas)) {
          session.modifiedCanvasLayer = true;
          this.global.document.body.appendChild(canvas);
          applyCanvasStylesForMinimalRendering(canvas);
        }

        session.baseLayer = layer;
      });
    } else {
      session.baseLayer = layer;
    }
  }

  isSessionSupported(mode) {
    if (mode == 'immersive-ar') {
      return false;
    }

    if (mode == 'immersive-vr' && this.canPresent === false) {
      return false;
    }

    return true;
  }

  isFeatureSupported(featureDescriptor) {
    switch (featureDescriptor) {
      case 'viewer':
        return true;

      case 'local':
        return true;

      case 'local-floor':
        return true;

      case 'bounded':
        return false;

      case 'unbounded':
        return false;

      default:
        return false;
    }
  }

  async requestSession(mode, enabledFeatures) {
    if (!this.isSessionSupported(mode)) {
      return Promise.reject();
    }

    let immersive = mode == 'immersive-vr';

    if (immersive) {
      const canvas = this.global.document.createElement('canvas');

      if (!TEST_ENV) {
        const ctx = canvas.getContext('webgl');
      }

      await this.display.requestPresent([{
        source: canvas,
        attributes: EXTRA_PRESENTATION_ATTRIBUTES
      }]);
    }

    const session = new Session(mode, enabledFeatures, {
      renderContextType: this.HAS_BITMAP_SUPPORT ? 'bitmaprenderer' : '2d'
    });
    this.sessions.set(session.id, session);

    if (immersive) {
      this.immersiveSession = session;
      this.dispatchEvent('@@webxr-polyfill/vr-present-start', session.id);
    }

    return Promise.resolve(session.id);
  }

  requestAnimationFrame(callback) {
    return this.display.requestAnimationFrame(callback);
  }

  getPrimaryButtonIndex(gamepad) {
    let primaryButton = 0;
    let name = gamepad.id.toLowerCase();

    for (let key in PRIMARY_BUTTON_MAP) {
      if (name.includes(key)) {
        primaryButton = PRIMARY_BUTTON_MAP[key];
        break;
      }
    }

    return Math.min(primaryButton, gamepad.buttons.length - 1);
  }

  onFrameStart(sessionId, renderState) {
    this.display.depthNear = renderState.depthNear;
    this.display.depthFar = renderState.depthFar;
    this.display.getFrameData(this.frame);
    const session = this.sessions.get(sessionId);

    if (session.immersive && this.CAN_USE_GAMEPAD) {
      let prevInputSources = this.gamepadInputSources;
      this.gamepadInputSources = {};
      let gamepads = this.global.navigator.getGamepads();

      for (let i = 0; i < gamepads.length; ++i) {
        let gamepad = gamepads[i];

        if (gamepad && gamepad.displayId > 0) {
          let inputSourceImpl = prevInputSources[i];

          if (!inputSourceImpl) {
            inputSourceImpl = new GamepadXRInputSource(this, this.display, this.getPrimaryButtonIndex(gamepad));
          }

          inputSourceImpl.updateFromGamepad(gamepad);
          this.gamepadInputSources[i] = inputSourceImpl;

          if (inputSourceImpl.primaryButtonIndex != -1) {
            let primaryActionPressed = gamepad.buttons[inputSourceImpl.primaryButtonIndex].pressed;

            if (primaryActionPressed && !inputSourceImpl.primaryActionPressed) {
              this.dispatchEvent('@@webxr-polyfill/input-select-start', {
                sessionId: session.id,
                inputSource: inputSourceImpl.inputSource
              });
            } else if (!primaryActionPressed && inputSourceImpl.primaryActionPressed) {
              this.dispatchEvent('@@webxr-polyfill/input-select-end', {
                sessionId: session.id,
                inputSource: inputSourceImpl.inputSource
              });
            }

            inputSourceImpl.primaryActionPressed = primaryActionPressed;
          }

          if (inputSourceImpl.primarySqueezeButtonIndex != -1) {
            let primarySqueezeActionPressed = gamepad.buttons[inputSourceImpl.primarySqueezeButtonIndex].pressed;

            if (primarySqueezeActionPressed && !inputSourceImpl.primarySqueezeActionPressed) {
              this.dispatchEvent('@@webxr-polyfill/input-squeeze-start', {
                sessionId: session.id,
                inputSource: inputSourceImpl.inputSource
              });
            } else if (!primarySqueezeActionPressed && inputSourceImpl.primarySqueezeActionPressed) {
              this.dispatchEvent('@@webxr-polyfill/input-squeeze-end', {
                sessionId: session.id,
                inputSource: inputSourceImpl.inputSource
              });
            }

            inputSourceImpl.primarySqueezeActionPressed = primarySqueezeActionPressed;
          }
        }
      }
    }

    if (TEST_ENV) {
      return;
    }

    if (!session.immersive && session.baseLayer) {
      const canvas = session.baseLayer.context.canvas;
      perspective(this.frame.leftProjectionMatrix, renderState.inlineVerticalFieldOfView, canvas.width / canvas.height, renderState.depthNear, renderState.depthFar);
    }
  }

  onFrameEnd(sessionId) {
    const session = this.sessions.get(sessionId);

    if (session.ended || !session.baseLayer) {
      return;
    }

    if (session.outputContext && !(session.immersive && !this.display.capabilities.hasExternalDisplay)) {
      const mirroring = session.immersive && this.display.capabilities.hasExternalDisplay;
      const iCanvas = session.baseLayer.context.canvas;
      const iWidth = mirroring ? iCanvas.width / 2 : iCanvas.width;
      const iHeight = iCanvas.height;

      if (!TEST_ENV) {
        const oCanvas = session.outputContext.canvas;
        const oWidth = oCanvas.width;
        const oHeight = oCanvas.height;
        const renderContext = session.renderContext;

        if (this.HAS_BITMAP_SUPPORT) {
          if (iCanvas.transferToImageBitmap) {
            renderContext.transferFromImageBitmap(iCanvas.transferToImageBitmap());
          } else {
            this.global.createImageBitmap(iCanvas, 0, 0, iWidth, iHeight, {
              resizeWidth: oWidth,
              resizeHeight: oHeight
            }).then(bitmap => renderContext.transferFromImageBitmap(bitmap));
          }
        } else {
          renderContext.drawImage(iCanvas, 0, 0, iWidth, iHeight, 0, 0, oWidth, oHeight);
        }
      }
    }

    if (session.immersive && session.baseLayer) {
      this.display.submitFrame();
    }
  }

  cancelAnimationFrame(handle) {
    this.display.cancelAnimationFrame(handle);
  }

  async endSession(sessionId) {
    const session = this.sessions.get(sessionId);

    if (session.ended) {
      return;
    }

    if (session.immersive) {
      return this.display.exitPresent();
    } else {
      session.ended = true;
    }
  }

  doesSessionSupportReferenceSpace(sessionId, type) {
    const session = this.sessions.get(sessionId);

    if (session.ended) {
      return false;
    }

    return session.enabledFeatures.has(type);
  }

  requestStageBounds() {
    if (this.display.stageParameters) {
      const width = this.display.stageParameters.sizeX;
      const depth = this.display.stageParameters.sizeZ;
      const data = [];
      data.push(-width / 2);
      data.push(-depth / 2);
      data.push(width / 2);
      data.push(-depth / 2);
      data.push(width / 2);
      data.push(depth / 2);
      data.push(-width / 2);
      data.push(depth / 2);
      return data;
    }

    return null;
  }

  async requestFrameOfReferenceTransform(type, options) {
    if ((type === 'local-floor' || type === 'bounded-floor') && this.display.stageParameters && this.display.stageParameters.sittingToStandingTransform) {
      return this.display.stageParameters.sittingToStandingTransform;
    }

    return null;
  }

  getProjectionMatrix(eye) {
    if (eye === 'left') {
      return this.frame.leftProjectionMatrix;
    } else if (eye === 'right') {
      return this.frame.rightProjectionMatrix;
    } else if (eye === 'none') {
      return this.frame.leftProjectionMatrix;
    } else {
      throw new Error(`eye must be of type 'left' or 'right'`);
    }
  }

  getViewport(sessionId, eye, layer, target) {
    const session = this.sessions.get(sessionId);
    const {
      width,
      height
    } = layer.context.canvas;

    if (!session.immersive) {
      target.x = target.y = 0;
      target.width = width;
      target.height = height;
      return true;
    }

    if (eye === 'left' || eye === 'none') {
      target.x = 0;
    } else if (eye === 'right') {
      target.x = width / 2;
    } else {
      return false;
    }

    target.y = 0;
    target.width = width / 2;
    target.height = height;
    return true;
  }

  getBasePoseMatrix() {
    let {
      position,
      orientation
    } = this.frame.pose;

    if (!position && !orientation) {
      return this.baseModelMatrix;
    }

    if (!position) {
      position = this.tempVec3;
      position[0] = position[1] = position[2] = 0;
    }

    fromRotationTranslation(this.baseModelMatrix, orientation, position);
    return this.baseModelMatrix;
  }

  getBaseViewMatrix(eye) {
    if (eye === 'left' || eye === 'none') {
      return this.frame.leftViewMatrix;
    } else if (eye === 'right') {
      return this.frame.rightViewMatrix;
    } else {
      throw new Error(`eye must be of type 'left' or 'right'`);
    }
  }

  getInputSources() {
    let inputSources = [];

    for (let i in this.gamepadInputSources) {
      inputSources.push(this.gamepadInputSources[i].inputSource);
    }

    return inputSources;
  }

  getInputPose(inputSource, coordinateSystem, poseType) {
    if (!coordinateSystem) {
      return null;
    }

    for (let i in this.gamepadInputSources) {
      let inputSourceImpl = this.gamepadInputSources[i];

      if (inputSourceImpl.inputSource === inputSource) {
        return inputSourceImpl.getXRPose(coordinateSystem, poseType);
      }
    }

    return null;
  }

  onWindowResize() {}

  onVRDisplayPresentChange(e) {
    if (!this.display.isPresenting) {
      this.sessions.forEach(session => {
        if (session.immersive && !session.ended) {
          if (session.modifiedCanvasLayer) {
            const canvas = session.baseLayer.context.canvas;
            document.body.removeChild(canvas);
            canvas.setAttribute('style', '');
          }

          if (this.immersiveSession === session) {
            this.immersiveSession = null;
          }

          this.dispatchEvent('@@webxr-polyfill/vr-present-end', session.id);
        }
      });
    }
  }

}

class CardboardXRDevice extends WebVRDevice {
  constructor(global, cardboardConfig) {
    const display = new CardboardVRDisplay(cardboardConfig || {});
    super(global, display);
    this.display = display;
    this.frame = {
      rightViewMatrix: new Float32Array(16),
      leftViewMatrix: new Float32Array(16),
      rightProjectionMatrix: new Float32Array(16),
      leftProjectionMatrix: new Float32Array(16),
      pose: null,
      timestamp: null
    };
  }

}

const TEST_ENV$1 = "production" === 'test';
let SESSION_ID$1 = 0;

class Session$1 {
  constructor(mode, enabledFeatures) {
    this.mode = mode;
    this.enabledFeatures = enabledFeatures;
    this.ended = null;
    this.baseLayer = null;
    this.id = ++SESSION_ID$1;
  }

}

class InlineDevice extends XRDevice {
  constructor(global) {
    super(global);
    this.sessions = new Map();
    this.projectionMatrix = create();
    this.identityMatrix = create();
  }

  onBaseLayerSet(sessionId, layer) {
    const session = this.sessions.get(sessionId);
    session.baseLayer = layer;
  }

  isSessionSupported(mode) {
    return mode == 'inline';
  }

  isFeatureSupported(featureDescriptor) {
    switch (featureDescriptor) {
      case 'viewer':
        return true;

      default:
        return false;
    }
  }

  async requestSession(mode, enabledFeatures) {
    if (!this.isSessionSupported(mode)) {
      return Promise.reject();
    }

    const session = new Session$1(mode, enabledFeatures);
    this.sessions.set(session.id, session);
    return Promise.resolve(session.id);
  }

  requestAnimationFrame(callback) {
    return window.requestAnimationFrame(callback);
  }

  cancelAnimationFrame(handle) {
    window.cancelAnimationFrame(handle);
  }

  onFrameStart(sessionId, renderState) {
    if (TEST_ENV$1) {
      return;
    }

    const session = this.sessions.get(sessionId);

    if (session.baseLayer) {
      const canvas = session.baseLayer.context.canvas;
      perspective(this.projectionMatrix, renderState.inlineVerticalFieldOfView, canvas.width / canvas.height, renderState.depthNear, renderState.depthFar);
    }
  }

  onFrameEnd(sessionId) {}

  async endSession(sessionId) {
    const session = this.sessions.get(sessionId);
    session.ended = true;
  }

  doesSessionSupportReferenceSpace(sessionId, type) {
    const session = this.sessions.get(sessionId);

    if (session.ended) {
      return false;
    }

    return session.enabledFeatures.has(type);
  }

  requestStageBounds() {
    return null;
  }

  async requestFrameOfReferenceTransform(type, options) {
    return null;
  }

  getProjectionMatrix(eye) {
    return this.projectionMatrix;
  }

  getViewport(sessionId, eye, layer, target) {
    const session = this.sessions.get(sessionId);
    const {
      width,
      height
    } = layer.context.canvas;
    target.x = target.y = 0;
    target.width = width;
    target.height = height;
    return true;
  }

  getBasePoseMatrix() {
    return this.identityMatrix;
  }

  getBaseViewMatrix(eye) {
    return this.identityMatrix;
  }

  getInputSources() {
    return [];
  }

  getInputPose(inputSource, coordinateSystem, poseType) {
    return null;
  }

  onWindowResize() {}

}

const getWebVRDevice = async function (global) {
  let device = null;

  if ('getVRDisplays' in global.navigator) {
    try {
      const displays = await global.navigator.getVRDisplays();

      if (displays && displays.length) {
        device = new WebVRDevice(global, displays[0]);
      }
    } catch (e) {}
  }

  return device;
};

const requestXRDevice = async function (global, config) {
  if (config.webvr) {
    let xr = await getWebVRDevice(global);

    if (xr) {
      return xr;
    }
  }

  let mobile = isMobile(global);

  if (mobile && config.cardboard || !mobile && config.allowCardboardOnDesktop) {
    if (!global.VRFrameData) {
      global.VRFrameData = function () {
        this.rightViewMatrix = new Float32Array(16);
        this.leftViewMatrix = new Float32Array(16);
        this.rightProjectionMatrix = new Float32Array(16);
        this.leftProjectionMatrix = new Float32Array(16);
        this.pose = null;
      };
    }

    return new CardboardXRDevice(global, config.cardboardConfig);
  }

  return new InlineDevice(global);
};

const CONFIG_DEFAULTS = {
  global: _global,
  webvr: true,
  cardboard: true,
  cardboardConfig: null,
  allowCardboardOnDesktop: false
};
const partials = ['navigator', 'HTMLCanvasElement', 'WebGLRenderingContext'];

class WebXRPolyfill {
  constructor(config = {}) {
    this.config = Object.freeze(Object.assign({}, CONFIG_DEFAULTS, config));
    this.global = this.config.global;
    this.nativeWebXR = 'xr' in this.global.navigator;
    this.injected = false;

    if (!this.nativeWebXR) {
      this._injectPolyfill(this.global);
    } else {
      this._injectCompatibilityShims(this.global);
    }
  }

  _injectPolyfill(global) {
    if (!partials.every(iface => !!global[iface])) {
      throw new Error(`Global must have the following attributes : ${partials}`);
    }

    for (const className of Object.keys(API)) {
      if (global[className] !== undefined) {
        console.warn(`${className} already defined on global.`);
      } else {
        global[className] = API[className];
      }
    }

    {
      const polyfilledCtx = polyfillMakeXRCompatible(global.WebGLRenderingContext);

      if (polyfilledCtx) {
        polyfillGetContext(global.HTMLCanvasElement);

        if (global.OffscreenCanvas) {
          polyfillGetContext(global.OffscreenCanvas);
        }

        if (global.WebGL2RenderingContext) {
          polyfillMakeXRCompatible(global.WebGL2RenderingContext);
        }

        if (!window.isSecureContext) {
          console.warn(`WebXR Polyfill Warning:
This page is not running in a secure context (https:// or localhost)!
This means that although the page may be able to use the WebXR Polyfill it will
not be able to use native WebXR implementations, and as such will not be able to
access dedicated VR or AR hardware, and will not be able to take advantage of
any performance improvements a native WebXR implementation may offer. Please
host this content on a secure origin for the best user experience.
`);
        }
      }
    }
    this.injected = true;

    this._patchNavigatorXR();
  }

  _patchNavigatorXR() {
    let devicePromise = requestXRDevice(this.global, this.config);
    this.xr = new API.XRSystem(devicePromise);
    Object.defineProperty(this.global.navigator, 'xr', {
      value: this.xr,
      configurable: true
    });
  }

  _injectCompatibilityShims(global) {
    if (!partials.every(iface => !!global[iface])) {
      throw new Error(`Global must have the following attributes : ${partials}`);
    }

    if (global.navigator.xr && 'supportsSession' in global.navigator.xr && !('isSessionSupported' in global.navigator.xr)) {
      let originalSupportsSession = global.navigator.xr.supportsSession;

      global.navigator.xr.isSessionSupported = function (mode) {
        return originalSupportsSession.call(this, mode).then(() => {
          return true;
        }).catch(() => {
          return false;
        });
      };

      global.navigator.xr.supportsSession = function (mode) {
        console.warn("navigator.xr.supportsSession() is deprecated. Please " + "call navigator.xr.isSessionSupported() instead and check the boolean " + "value returned when the promise resolves.");
        return originalSupportsSession.call(this, mode);
      };
    }
  }

}

var _default = WebXRPolyfill;
exports.default = _default;
},{}],"PxDr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatrixArrayType = setMatrixArrayType;
exports.toRadian = toRadian;
exports.equals = equals;
exports.RANDOM = exports.ARRAY_TYPE = exports.EPSILON = void 0;

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
exports.EPSILON = EPSILON;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
exports.ARRAY_TYPE = ARRAY_TYPE;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

exports.RANDOM = RANDOM;

function setMatrixArrayType(type) {
  exports.ARRAY_TYPE = ARRAY_TYPE = type;
}

var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */


function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};
},{}],"hSOw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.str = str;
exports.frob = frob;
exports.LDU = LDU;
exports.add = add;
exports.subtract = subtract;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */


function fromValues(m00, m01, m10, m11) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */


function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */


function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */


function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */


function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/


function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */


function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"PxDr"}],"n7Ma":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromTranslation = fromTranslation;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(6);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */


function fromValues(a, b, c, d, tx, ty) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */


function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */


function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */


function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/


function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/


function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"PxDr"}],"SRDq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.fromMat4 = fromMat4;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromMat2d = fromMat2d;
exports.fromQuat = fromQuat;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(9);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */


function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */


function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */


function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */


function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */


function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */


function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */


function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/


function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/


function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */


function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */


function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */


function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"PxDr"}],"WdlT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.fromTranslation = fromTranslation;
exports.fromScaling = fromScaling;
exports.fromRotation = fromRotation;
exports.fromXRotation = fromXRotation;
exports.fromYRotation = fromYRotation;
exports.fromZRotation = fromZRotation;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromQuat2 = fromQuat2;
exports.getTranslation = getTranslation;
exports.getScaling = getScaling;
exports.getRotation = getRotation;
exports.fromRotationTranslationScale = fromRotationTranslationScale;
exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
exports.fromQuat = fromQuat;
exports.frustum = frustum;
exports.perspective = perspective;
exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
exports.ortho = ortho;
exports.lookAt = lookAt;
exports.targetTo = targetTo;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(16);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */


function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */


function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */


function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */


function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */


function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */


function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/


function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */


function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */


function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */


function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */


function fromQuat2(out, a) {
  var translation = new glMatrix.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */


function getRotation(out, mat) {
  var scaling = new glMatrix.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */


function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */


function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */


function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */


function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */


function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */


function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */


function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"PxDr"}],"Ijz7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.length = length;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.hermite = hermite;
exports.bezier = bezier;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.angle = angle;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(3);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */


function fromValues(x, y, z) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */


function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */


function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */


function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  var z = glMatrix.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */


function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */


function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */


function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */


function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */


function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */


function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */


var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

exports.sqrDist = sqrDist;
var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

exports.len = len;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"PxDr"}],"QGfo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformQuat = transformQuat;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */


function fromValues(x, y, z, w) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */


function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */


function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */


function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */


function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */


function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = glMatrix.RANDOM() * 2 - 1;
    v2 = glMatrix.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = glMatrix.RANDOM() * 2 - 1;
    v4 = glMatrix.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */


function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */


function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */


var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

exports.sqrDist = sqrDist;
var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

exports.len = len;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"PxDr"}],"PXH2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.identity = identity;
exports.setAxisAngle = setAxisAngle;
exports.getAxisAngle = getAxisAngle;
exports.getAngle = getAngle;
exports.multiply = multiply;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.calculateW = calculateW;
exports.exp = exp;
exports.ln = ln;
exports.pow = pow;
exports.slerp = slerp;
exports.random = random;
exports.invert = invert;
exports.conjugate = conjugate;
exports.fromMat3 = fromMat3;
exports.fromEuler = fromEuler;
exports.str = str;
exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

var mat3 = _interopRequireWildcard(require("./mat3.js"));

var vec3 = _interopRequireWildcard(require("./vec3.js"));

var vec4 = _interopRequireWildcard(require("./vec4.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */


function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/


function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */


function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > glMatrix.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */


function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */


function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */


function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */


function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */


function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */


function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */


function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > glMatrix.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */


function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = glMatrix.RANDOM();
  var u2 = glMatrix.RANDOM();
  var u3 = glMatrix.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */


function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */


function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */


function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */


function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */


var clone = vec4.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

exports.clone = clone;
var fromValues = vec4.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

exports.fromValues = fromValues;
var copy = vec4.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

exports.copy = copy;
var set = vec4.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

exports.set = set;
var add = vec4.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

exports.add = add;
var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

exports.mul = mul;
var scale = vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

exports.scale = scale;
var dot = vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

exports.dot = dot;
var lerp = vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

exports.lerp = lerp;
var length = vec4.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

exports.length = length;
var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

exports.len = len;
var squaredLength = vec4.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

exports.squaredLength = squaredLength;
var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

exports.sqrLen = sqrLen;
var normalize = vec4.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

exports.normalize = normalize;
var exactEquals = vec4.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

exports.exactEquals = exactEquals;
var equals = vec4.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

exports.equals = equals;

var rotationTo = function () {
  var tmpvec3 = vec3.create();
  var xUnitVec3 = vec3.fromValues(1, 0, 0);
  var yUnitVec3 = vec3.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = vec3.dot(a, b);

    if (dot < -0.999999) {
      vec3.cross(tmpvec3, xUnitVec3, a);
      if (vec3.len(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
      vec3.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      vec3.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */


exports.rotationTo = rotationTo;

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */


exports.sqlerp = sqlerp;

var setAxes = function () {
  var matr = mat3.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

exports.setAxes = setAxes;
},{"./common.js":"PxDr","./mat3.js":"SRDq","./vec3.js":"Ijz7","./vec4.js":"QGfo"}],"BYXr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.fromRotationTranslationValues = fromRotationTranslationValues;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromMat4 = fromMat4;
exports.copy = copy;
exports.identity = identity;
exports.set = set;
exports.getDual = getDual;
exports.setDual = setDual;
exports.getTranslation = getTranslation;
exports.translate = translate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotateByQuatAppend = rotateByQuatAppend;
exports.rotateByQuatPrepend = rotateByQuatPrepend;
exports.rotateAroundAxis = rotateAroundAxis;
exports.add = add;
exports.multiply = multiply;
exports.scale = scale;
exports.lerp = lerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.normalize = normalize;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.dot = exports.mul = exports.setReal = exports.getReal = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

var quat = _interopRequireWildcard(require("./quat.js"));

var mat4 = _interopRequireWildcard(require("./mat4.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  var dq = new glMatrix.ARRAY_TYPE(8);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */


function clone(a) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */


function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */


function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */


function fromMat4(out, a) {
  //TODO Optimize this
  var outer = quat.create();
  mat4.getRotation(outer, a);
  var t = new glMatrix.ARRAY_TYPE(3);
  mat4.getTranslation(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */


function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */


function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */


var getReal = quat.copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

exports.getReal = getReal;

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */


var setReal = quat.copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

exports.setReal = setReal;

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */


function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */


function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */


function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */


function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */


function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < glMatrix.EPSILON) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */


function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */


var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

exports.mul = mul;

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */


var dot = quat.dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

exports.dot = dot;

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */


function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */


function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */


var length = quat.length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

exports.length = length;
var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

exports.len = len;
var squaredLength = quat.squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

exports.squaredLength = squaredLength;
var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

exports.sqrLen = sqrLen;

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */


function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}
},{"./common.js":"PxDr","./quat.js":"PXH2","./mat4.js":"WdlT"}],"cHtt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat2 = transformMat2;
exports.transformMat2d = transformMat2d;
exports.transformMat3 = transformMat3;
exports.transformMat4 = transformMat4;
exports.rotate = rotate;
exports.angle = angle;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(2);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */


function fromValues(x, y) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */


function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */


function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */


function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */


function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */


function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */


function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */


var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

exports.len = len;
var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

exports.sqrDist = sqrDist;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"PxDr"}],"CPlc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

exports.glMatrix = glMatrix;

var mat2 = _interopRequireWildcard(require("./mat2.js"));

exports.mat2 = mat2;

var mat2d = _interopRequireWildcard(require("./mat2d.js"));

exports.mat2d = mat2d;

var mat3 = _interopRequireWildcard(require("./mat3.js"));

exports.mat3 = mat3;

var mat4 = _interopRequireWildcard(require("./mat4.js"));

exports.mat4 = mat4;

var quat = _interopRequireWildcard(require("./quat.js"));

exports.quat = quat;

var quat2 = _interopRequireWildcard(require("./quat2.js"));

exports.quat2 = quat2;

var vec2 = _interopRequireWildcard(require("./vec2.js"));

exports.vec2 = vec2;

var vec3 = _interopRequireWildcard(require("./vec3.js"));

exports.vec3 = vec3;

var vec4 = _interopRequireWildcard(require("./vec4.js"));

exports.vec4 = vec4;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./common.js":"PxDr","./mat2.js":"hSOw","./mat2d.js":"n7Ma","./mat3.js":"SRDq","./mat4.js":"WdlT","./quat.js":"PXH2","./quat2.js":"BYXr","./vec2.js":"cHtt","./vec3.js":"Ijz7","./vec4.js":"QGfo"}],"OW83":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class p5xrViewer {
  constructor() {
    this._pose = null;
    this._view = null;
    this.poseMatrix = new p5.Matrix();
    this.initialMVMatrix = new p5.Matrix();
    this.leftPMatrix = new p5.Matrix();
    this.rightPMatrix = new p5.Matrix();
    this.position = new p5.Vector(0, 0, 0);

    this.setPosition = function (x, y, z) {
      this.position.set(x, y, z);

      p5.instance._renderer.translate(-x, -y, -z);
    };
  }

  set pose(newPose) {
    this._pose = newPose;
    this.poseMatrix.set(newPose.poseModelMatrix);
  }

  get pose() {
    return this._pose;
  } // TODO: set matrices for non polyfill


  set view(newView) {
    this._view = newView;

    p5.instance._renderer.uMVMatrix.set(this._view.transform.inverse.matrix);

    p5.instance._renderer.uPMatrix.set(this._view.projectionMatrix);

    p5.instance._renderer._curCamera.cameraMatrix.set(p5.Matrix.identity().mult(this._view.transform.inverse.matrix));

    if (newView.eye === 'left') {
      this.leftPMatrix.set(p5.instance._renderer.uPMatrix.copy());
    } else {
      this.rightPMatrix.set(p5.instance._renderer.uPMatrix.copy());
    }
  }

  get view() {
    return this._view;
  }

}

exports.default = p5xrViewer;

p5.prototype.setViewerPosition = function (x, y, z) {
  const {
    viewer
  } = p5xr.instance;
  viewer.setPosition(x, y, z);
};

p5.prototype.sticky = function (drawOnTop = false) {
  push();
  p5xr.instance.viewer.drawOnTop = drawOnTop;
  if (drawOnTop) p5.instance._renderer.GL.disable(p5.instance._renderer.GL.DEPTH_TEST);

  p5.instance._renderer.uMVMatrix.set(p5.Matrix.identity());

  const viewerPosition = p5xr.instance.viewer.position;
  setViewerPosition(viewerPosition.x, viewerPosition.y, viewerPosition.z);
};

p5.prototype.noSticky = function () {
  p5.instance._renderer.GL.enable(p5.instance._renderer.GL.DEPTH_TEST);

  pop();
};
},{}],"Rl5r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// This is primarily adopted from webxr-button.js
// copying the original license here
// TODO :: custom solution for buttons
//
//
//
// Copyright 2016 Google Inc.
//
//     Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
// This is a stripped down and specialized version of WebVR-UI
// (https://github.com/googlevr/webvr-ui) that takes out most of the state
// management in favor of providing a simple way of listing available devices
// for the needs of the sample pages. Functionality like beginning sessions
// is intentionally left out so that the sample pages can demonstrate them more
// clearly.
class p5xrButton {
  constructor(options) {
    this.options = options || {};
    this.options.color = options.color || 'rgb(237, 34, 93)';
    this.options.background = options.background || false;
    this.options.disabledOpacity = options.disabledOpacity || 0.5;
    this.options.height = options.height || window.innerWidth / 5;
    this.options.corners = options.corners || 'square';
    this.options.cssprefix = options.cssprefix || 'webvr-ui';
    this.options.textEnterXRTitle = options.textEnterXRTitle || 'ENTER XR';
    this.options.textXRNotFoundTitle = options.textXRNotFoundTitle || 'XR NOT FOUND';
    this.options.textExitXRTitle = options.textExitXRTitle || 'EXIT XR';

    this.options.onRequestSession = options.onRequestSession || function () {};

    this.options.onEndSession = options.onEndSession || function () {};

    this.options.injectCSS = options.injectCSS !== false;
    this.options = options;
    this.device = null;
    this.session = null;
    this.logoScale = 1.2;
    this._WEBXR_UI_CSS_INJECTED = {}; // Pass in your own domElement if you really dont want to use ours

    this.domElement = options.domElement || this.createDefaultView(options);
    this.__defaultDisplayStyle = this.domElement.style.display || 'initial'; // Bind button click events to __onClick

    this.domElement.addEventListener('click', () => this.__onXRButtonClick());
    this.__forceDisabled = false;

    this.__setDisabledAttribute(true);

    this.setTitle(this.options.textXRNotFoundTitle);
  }

  generateInnerHTML(cssPrefix, height) {
    const logoHeight = height * this.logoScale;
    const svgString = this.generateXRIconString(cssPrefix, logoHeight) + this.generateNoXRIconString(cssPrefix, logoHeight);
    return `<button class="${cssPrefix}-button">
    <div class="${cssPrefix}-title"></div>
    <div class="${cssPrefix}-logo" >${svgString}</div>
    </button>`;
  }

  createDefaultView(options) {
    const fontSize = options.height / 3;

    if (options.injectCSS) {
      // Check that css isnt already injected
      if (!this._WEBXR_UI_CSS_INJECTED[options.cssprefix]) {
        this.injectCSS(this.generateCSS(options, fontSize));
        this._WEBXR_UI_CSS_INJECTED[options.cssprefix] = true;
      }
    }

    const el = document.createElement('div');
    el.innerHTML = this.generateInnerHTML(options.cssprefix, fontSize);
    return el.firstChild;
  }

  createXRIcon(cssPrefix, height) {
    const el = document.createElement('div');
    el.innerHTML = generateXRIconString(cssPrefix, height);
    return el.firstChild;
  }

  createNoXRIcon(cssPrefix, height) {
    const el = document.createElement('div');
    el.innerHTML = generateNoXRIconString(cssPrefix, height);
    return el.firstChild;
  }

  generateXRIconString(cssPrefix, height) {
    const aspect = 28 / 18;
    return `<svg class="${cssPrefix}-svg" version="1.1" x="0px" y="0px"
        width="${aspect * height}px" height="${height}px" viewBox="0 0 28 18" xml:space="preserve">
        <path d="M26.8,1.1C26.1,0.4,25.1,0,24.2,0H3.4c-1,0-1.7,0.4-2.4,1.1C0.3,1.7,0,2.7,0,3.6v10.7
        c0,1,0.3,1.9,0.9,2.6C1.6,17.6,2.4,18,3.4,18h5c0.7,0,1.3-0.2,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l
        1.5-2.6C13.2,13.1,13,13,14,13v0h-0.2 h0c0.3,0,0.7,0.1,0.8,0.5l1.4,2.6c0.3,0.6,0.8,1.1,1.3,
        1.4c0.6,0.3,1.2,0.5,1.8,0.5h5c1,0,2-0.4,2.7-1.1c0.7-0.7,1.2-1.6,1.2-2.6 V3.6C28,2.7,27.5,
        1.7,26.8,1.1z M7.4,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8
        C10.2,10.5,8.9,11.8,7.4,11.8z M20.1,11.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8C21.7
        ,6.2,23,7.4,23,9 C23,10.5,21.7,11.8,20.1,11.8z"/>
    </svg>`;
  }

  generateNoXRIconString(cssPrefix, height) {
    const aspect = 28 / 18;
    return `<svg class="${cssPrefix}-svg-error" x="0px" y="0px"
        width="${aspect * height}px" height="${aspect * height}px" viewBox="0 0 28 28" xml:space="preserve">
        <path d="M17.6,13.4c0-0.2-0.1-0.4-0.1-0.6c0-1.6,1.3-2.8,2.8-2.8s2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8
        c-0.2,0-0.4,0-0.6-0.1l5.9,5.9c0.5-0.2,0.9-0.4,1.3-0.8
        c0.7-0.7,1.1-1.6,1.1-2.5V7.4c0-1-0.4-1.9-1.1-2.5c-0.7-0.7-1.6-1-2.5-1
        H8.1 L17.6,13.4z"/>
        <path d="M10.1,14.2c-0.5,0.9-1.4,1.4-2.4,1.4c-1.6,0-2.8-1.3-2.8-2.8c0-1.1,0.6-2,1.4-2.5
        L0.9,5.1 C0.3,5.7,0,6.6,0,7.5v10.7c0,1,0.4,1.8,1.1,2.5c0.7,0.7,1.6,1,2.5,1
        h5c0.7,0,1.3-0.1,1.8-0.5c0.6-0.3,1-0.8,1.3-1.4l1.3-2.6 L10.1,14.2z"/>
        <path d="M25.5,27.5l-25-25C-0.1,2-0.1,1,0.5,0.4l0,0C1-0.1,2-0.1,2.6,0.4l25,25c0.6,0.6,0.6,1.5
        ,0,2.1l0,0 C27,28.1,26,28.1,25.5,27.5z"/>
    </svg>`;
  }
  /**
   * Sets the XRDevice this button is associated with.
   * @param {XRDevice} device
   * @return {EnterXRButton}
   */


  setDevice(device) {
    this.device = device;

    this.__updateButtonState();

    return this;
  }
  /**
  * Indicate that there's an active XRSession. Switches the button to "Exit XR"
  * state if not null, or "Enter XR" state if null.
  * @param {XRSession} session
  * @return {EnterXRButton}
  */


  setSession(session) {
    this.session = session;

    this.__updateButtonState();

    return this;
  }
  /**
  * Set the title of the button
  * @param {string} text
  * @return {EnterXRButton}
  */


  setTitle(text) {
    this.domElement.title = text;
    this.ifChild(this.domElement, this.options.cssprefix, 'title', title => {
      if (!text) {
        title.style.display = 'none';
      } else {
        title.innerText = text;
        title.style.display = 'initial';
      }
    });
    return this;
  }
  /**
  * Generate the CSS string to inject
  *
  * @param {Object} options
  * @param {Number} [fontSize=18]
  * @return {string}
  */


  generateCSS(options, fontSize = 18) {
    const {
      height
    } = options;
    const borderWidth = 2;
    const borderColor = options.background ? options.background : options.color;
    const cssPrefix = options.cssprefix;
    let borderRadius;

    if (options.corners == 'round') {
      borderRadius = options.height / 2;
    } else if (options.corners == 'square') {
      borderRadius = 2;
    } else {
      borderRadius = options.corners;
    }

    return `
      @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src: local('Karla'), local('Karla-Regular'),
              url(https://fonts.gstatic.com/s/karla/v5/31P4mP32i98D9CEnGyeX9Q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src: local('Karla'), local('Karla-Regular'),
              url(https://fonts.gstatic.com/s/karla/v5/Zi_e6rBgGqv33BWF8WTq8g.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
                        U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }

      button.${cssPrefix}-button {
          font-family: 'Karla', sans-serif;

          border: ${borderColor} ${borderWidth}px solid;
          border-radius: ${borderRadius}px;
          box-sizing: border-box;
          background: ${options.background ? options.background : 'none'};

          height: ${height}px;
          min-width: ${fontSize * 9.6}px;
          display: inline-block;
          position: absolute;
          top: 5%;
          left: 15%;
          cursor: pointer;
      }

      button.${cssPrefix}-button:focus {
        outline: none;
      }

      /*
      * Logo
      */

      .${cssPrefix}-logo {
          width: ${height}px;
          height: ${height}px;
          position: absolute;
          top:0px;
          left:0px;
          width: ${height - 4}px;
          height: ${height - 4}px;
      }
      .${cssPrefix}-svg {
          fill: ${options.color};
          margin-top: ${(height - fontSize * this.logoScale) / 2 - 2}px;
          margin-left: ${height / 3}px;
      }
      .${cssPrefix}-svg-error {
          fill: ${options.color};
          display:none;
          margin-top: ${(height - 28 / 18 * fontSize * this.logoScale) / 2 - 2}px;
          margin-left: ${height / 3}px;
      }


      /*
      * Title
      */

      .${cssPrefix}-title {
          color: ${options.color};
          position: relative;
          font-size: ${fontSize}px;
          padding-left: ${height * 1.05}px;
          padding-right: ${borderRadius - 10 < 5 ? height / 3 : borderRadius - 10}px;
      }

      /*
      * disabled
      */

      button.${cssPrefix}-button[disabled=true] {
          opacity: ${options.disabledOpacity};
      }

      button.${cssPrefix}-button[disabled=true] > .${cssPrefix}-logo > .${cssPrefix}-svg {
          display:none;
      }

      button.${cssPrefix}-button[disabled=true] > .${cssPrefix}-logo > .${cssPrefix}-svg-error {
          display:initial;
      }
    `;
  }

  injectCSS(cssText) {
    // Create the css
    const style = document.createElement('style');
    style.innerHTML = cssText;
    const head = document.getElementsByTagName('head')[0];
    head.insertBefore(style, head.firstChild);
  }

  ifChild(el, cssPrefix, suffix, fn) {
    const c = el.querySelector(`.${cssPrefix}-${suffix}`);
    c && fn(c);
  }
  /**
  * Set the tooltip of the button
  * @param {string} tooltip
  * @return {EnterXRButton}
  */


  setTooltip(tooltip) {
    this.domElement.title = tooltip;
    return this;
  }
  /**
  * Show the button
  * @return {EnterXRButton}
  */


  show() {
    this.domElement.style.display = this.__defaultDisplayStyle;
    return this;
  }
  /**
  * Hide the button
  * @return {EnterXRButton}
  */


  hide() {
    this.domElement.style.display = 'none';
    return this;
  }
  /**
  * Enable the button
  * @return {EnterXRButton}
  */


  enable() {
    this.__setDisabledAttribute(false);

    this.__forceDisabled = false;
    return this;
  }
  /**
  * Disable the button from being clicked
  * @return {EnterXRButton}
  */


  disable() {
    this.__setDisabledAttribute(true);

    this.__forceDisabled = true;
    return this;
  }
  /**
  * clean up object for garbage collection
  */


  remove() {
    if (this.domElement.parentElement) {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }
  /**
  * Set the disabled attribute
  * @param {boolean} disabled
  * @private
  */


  __setDisabledAttribute(disabled) {
    if (disabled || this.__forceDisabled) {
      this.domElement.setAttribute('disabled', 'true');
    } else {
      this.domElement.removeAttribute('disabled');
    }
  }
  /**
  * Handling click event from button
  * @private
  */


  __onXRButtonClick() {
    if (this.session) {
      this.options.onEndSession(this.session);
    } else if (this.device) {
      // feature detect
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', () => {});
          }
        }).catch(console.error);
      }

      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', () => {});
          }
        }).catch(console.error);
      }

      this.options.onRequestSession(this.device);
    }
  }
  /**
  * Updates the display of the button based on it's current state
  * @private
  */


  __updateButtonState() {
    if (this.session) {
      this.setTitle(this.options.textExitXRTitle);
      this.setTooltip('Exit XR presentation');

      this.__setDisabledAttribute(false);
    } else if (this.device) {
      this.setTitle(this.options.textEnterXRTitle);
      this.setTooltip('Enter XR');

      this.__setDisabledAttribute(false);
    } else {
      this.setTitle(this.options.textXRNotFoundTitle);
      this.setTooltip('No XR headset found.');

      this.__setDisabledAttribute(true);
    }
  }

}

exports.default = p5xrButton;
},{}],"OcXM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * p5xrInput holds all state and methods related to XR device input
 * @class
 */
class p5xrInput {
  /**
   * Represents the input data of the device
   * @constructor
   * @param {XRInputSource} inputSource The input source of the XR device
   */
  constructor(inputSource) {
    this._inputSource = inputSource;
    this._pose;
    this.gamepad = inputSource.gamepad;
  }
  /** @returns {Float32Array} Returns the current 4x4 pose matrix */


  get pose() {
    this.updatePose();
    return this._pose.transform.matrix;
  }
  /** @returns {p5.Vector} Returns the current position as a Vector */


  get position() {
    this.updatePose();
    const p = this._pose.transform.position;
    return new p5.Vector(p.x, p.y, p.z);
  }
  /** Retrieves the latest XRPose from the current XRFrame */


  updatePose() {
    this._pose = window.p5xr.instance.frame.getPose(this._inputSource.gripSpace, window.p5xr.instance.xrRefSpace);
  }
  /** @returns {GamepadButton} Returns a GamepadButton object corresponding to the controller's trigger button */


  get trigger() {
    this.updateGamepad();
    return this.gamepad.buttons[0];
  }
  /** @returns {GamepadButton} Returns a GamepadButton object corresponding to the controller's grip button */


  get grip() {
    this.updateGamepad();
    return this.gamepad.buttons[1];
  }
  /** @returns {GamepadButton} Returns a GamepadButton object corresponding to the controller's touchpad button */


  get touchpad() {
    this.updateGamepad();
    return this.gamepad.buttons[2];
  }
  /** @returns {GamepadButton} Returns a GamepadButton object corresponding to the controller's thumbstick button */


  get thumbstick() {
    this.updateGamepad();
    return this.gamepad.buttons[3];
  }
  /** @returns {p5.Vector} Returns a Vector with the touchpad's X and Y values */


  get touchpad2D() {
    this.updateGamepad();
    return new p5.Vector(this.gamepad.axes[0], this.gamepad.axes[1]);
  }
  /** @returns {p5.Vector} Returns a Vector with the thumbstick's X and Y values */


  get thumbstick2D() {
    this.updateGamepad();
    return new p5.Vector(this.gamepad.axes[2], this.gamepad.axes[3]);
  }
  /** Retrieves the latest Gamepad from the XRInputSource */


  updateGamepad() {
    this.gamepad = this._inputSource.gamepad;
  }

}

exports.default = p5xrInput;
},{}],"QKDM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _p5xrViewer = _interopRequireDefault(require("./p5xrViewer"));

var _p5xrButton = _interopRequireDefault(require("./p5xrButton"));

var _p5xrInput = _interopRequireDefault(require("./p5xrInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * p5vr class holds all state and methods that are specific to VR
 * @class
 *
 * @constructor
 *
 * @property vrDevice  {XRDevice} the current VR compatible device
 * @property vrSession  {XRSession} the current VR session
 * @property vrFrameOfRef  {XRFrameOfReference} the current VR frame of reference
 * (starting point for transform, default eye-level)
 * @property gl  {WebGLRenderingContext} points to p5.RendererGL.GL (the WebGL Rendering Context)
 * @property curClearColor  {Color} background clear color set by global `setVRBackgroundColor`
 */
class p5xr {
  constructor() {
    this.xrDevice = null;
    this.xrButton = null;
    this.isVR = null;
    this.xrSession = null;
    this.xrRefSpace = null;
    this.xrViewerSpace = null;
    this.xrHitTestSource = null;
    this.frame = null;
    this.gl = null;
    this.curClearColor = color(255, 255, 255);
    this.viewer = new _p5xrViewer.default();
  }

  removeLoadingElement() {
    const loadingScreen = document.getElementById(window._loadingScreenId);

    if (loadingScreen) {
      loadingScreen.parentNode.removeChild(loadingScreen);
    }
  }

  _updatexr() {
    const renderer = p5.instance._renderer; // reset light data for new frame.

    renderer.ambientLightColors.length = 0;
    renderer.specularColors = [1, 1, 1];
    renderer.directionalLightDirections.length = 0;
    renderer.directionalLightDiffuseColors.length = 0;
    renderer.directionalLightSpecularColors.length = 0;
    renderer.pointLightPositions.length = 0;
    renderer.pointLightDiffuseColors.length = 0;
    renderer.pointLightSpecularColors.length = 0;
    renderer.spotLightPositions.length = 0;
    renderer.spotLightDirections.length = 0;
    renderer.spotLightDiffuseColors.length = 0;
    renderer.spotLightSpecularColors.length = 0;
    renderer.spotLightAngle.length = 0;
    renderer.spotLightConc.length = 0;
    renderer._enableLighting = false; // reset tint value for new frame

    renderer._tint = [255, 255, 255, 255];
  } // Substitute for p5._setup() which creates a default webgl canvas


  _setupxr() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    p5.instance._setupDone = true;
  }
  /**
   * Called by `createVRCanvas()` or `createARCanvas`.
   * Creates the button for entering XR.
   * Requests an XRDevice object based on current device.
   * Checks if the device supports an immersive session.
   * Then binds the device to the button. <br>
   * <b>TODO:</b> Custom styling for button prior to VR canvas creation.
   */


  init() {
    p5.instance._incrementPreload();

    this._setupxr();

    this.removeLoadingElement(); // Is WebXR available on this UA?

    this.xrButton = new _p5xrButton.default({
      onRequestSession: this.onXRButtonClicked.bind(this),
      onEndSession: this.onSessionEnded.bind(this),
      textEnterXRTitle: this.isVR ? 'ENTER VR' : 'ENTER AR'
    });
    let header = document.querySelector('header');

    if (!header) {
      header = document.createElement('header');
      document.querySelector('body').appendChild(header);
    }

    header.appendChild(this.xrButton.domElement); // WebXR available

    if (navigator.xr) {
      this.sessionCheck();
    }
  }

  disableButton() {
    this.xrButton.setTitle('AR Unavailable');
    this.xrButton.setTooltip('No XR headset found.');

    this.xrButton.__setDisabledAttribute(true);
  }

  sessionCheck() {
    const msg = window.injectedPolyfill ? ' with polyfill' : ' without polyfill';

    if (this.isVR) {
      navigator.xr.isSessionSupported('immersive-vr').then(supported => {
        if (supported) {
          console.log(`VR supported${msg}`);
          this.xrButton.setDevice(true);
          this.isImmersive = true;
        } else {
          console.log('This device does not support immersive VR sessions.');
          this.isImmersive = false;
        }

        this.xrButton.setDevice(true);
      }).catch(e => {
        console.log(e.message);
      });
    } else {
      navigator.xr.isSessionSupported('immersive-ar').then(supported => {
        if (supported) {
          console.log(`AR supported ${msg}`);
          this.xrButton.setDevice(true);
        } else {
          this.disableButton();
        }
      });
    }
  }
  /**
   * This is the method that is attached to the event that announces
   * availability of a new frame. The next animation frame is requested here,
   * the device pose is retrieved, the modelViewMatrix (`uMVMatrix`) for p5 is set,
   * and each eye is drawn
   * @param frame {XRFrame}
   */


  onXRFrame(t, frame) {
    const session = this.xrSession = frame.session;

    if (session === null || this.gl === null) {
      return;
    } // Inform the session that we're ready for the next frame.


    session.requestAnimationFrame(this.onXRFrame.bind(this));
    let targetRefSpace = this.xrRefSpace;

    if (this.isVR && !this.isImmersive) {
      // Account for the click-and-drag mouse movement or touch movement when
      // calculating the viewer pose for inline sessions.
      targetRefSpace = this.getAdjustedRefSpace(this.xrRefSpace);
    } // Get the XRDevice pose relative to the Frame of Reference we created
    // earlier.


    const viewer = frame.getViewerPose(this.xrRefSpace);
    const glLayer = session.renderState.baseLayer;
    this.frame = frame; // Getting the pose may fail if, for example, tracking is lost. So we
    // have to check to make sure that we got a valid pose before attempting
    // to render with it. If not in this case we'll just leave the
    // framebuffer cleared, so tracking loss means the scene will simply
    // dissapear.

    if (viewer) {
      this.viewer.pose = frame.getViewerPose(targetRefSpace); // If we do have a valid pose, bind the WebGL layer's framebuffer,
      // which is where any content to be displayed on the XRDevice must be
      // rendered.

      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, glLayer.framebuffer);

      if (this.isVR) {
        this._clearVR();
      }

      let i = 0;

      for (const view of this.viewer.pose.views) {
        this.viewer.view = view;
        const viewport = glLayer.getViewport(this.viewer.view);
        this.gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

        this._updateViewport(viewport);

        this._drawEye(i);

        i++;
      }
    }
  }

  _updateViewport(viewport) {
    p5.instance._renderer._viewport[0] = viewport.x;
    p5.instance._renderer._viewport[1] = viewport.y;
    p5.instance._renderer._viewport[2] = viewport.width;
    p5.instance._renderer._viewport[3] = viewport.height;
  }
  /**
   * Runs the code that the user has in `draw()` once for each eye
   */


  _drawEye(eyeIndex) {
    const context = window;
    const userSetup = context.setup;
    const userDraw = context.draw;
    const userCalculate = context.calculate;

    if (this.isVR) {
      if (eyeIndex === 0) {
        if (typeof userCalculate === 'function') {
          userCalculate();
        }
      }
    } else {
      // Scale is much smaller in AR
      scale(0.01);
    } // 2D Mode should use graphics object


    if (!p5.instance._renderer.isP3D) {
      console.error('Sketch does not have 3D Renderer');
      return;
    }

    if (typeof userDraw === 'function') {
      if (typeof userSetup === 'undefined') {
        context.scale(context._pixelDensity, context._pixelDensity);
      }

      this._updatexr();

      p5.instance._inUserDraw = true;

      try {
        userDraw();
      } finally {
        p5.instance._inUserDraw = false;
      }

      if (eyeIndex === 1 || !this.isImmersive) {
        context._setProperty('frameCount', context.frameCount + 1);
      }
    }
  }

  getXRInput(input) {
    let inputDevice;
    this.xrSession.inputSources.forEach(inputSource => {
      if (inputSource.handedness == input) {
        inputDevice = new _p5xrInput.default(inputSource);
      }
    });
    return inputDevice;
  }
  /**
  * Called either when the user has explicitly ended the session
  *  or when the UA has ended the session for any reason.
  * The xrSession is ended and discarded. p5 is reset with `remove()`
  *
  */


  onSessionEnded() {
    if (!this.isVR) {
      this.xrHitTestSource.cancel();
      this.xrHitTestSource = null;
    }

    if (this.xrSession) {
      this.xrSession.end();
      this.xrSession = null;
    }

    const p5Canvi = document.getElementsByClassName('p5Canvas');

    while (p5Canvi.length > 0) {
      p5Canvi[0].parentNode.removeChild(p5Canvi[0]);
    }

    this.xrButton.session = null;
    this.xrButton.setTitle(this.isVR ? 'ENTER VR' : 'ENTER AR');
    this.gl = null;
  }

  printUnsupportedMessage() {
    console.warn('Your browser/hardware does not work with AR Mode currently. This is' + ' undergoing heavy development currently.' + 'You may be able to fix this by enabling WebXR flags in Chrome.');
  }

  remove() {
    if (this.xrButton) {
      this.xrButton.remove();
    }

    window.p5xr.instance = null;
  }

  get instance() {
    return window.p5xr.instance;
  }

  set instance(p5xrInst) {
    window.p5xr.instance = p5xrInst;
    return window.p5xr.instance;
  }

}

exports.default = p5xr;
},{"./p5xrViewer":"OW83","./p5xrButton":"Rl5r","./p5xrInput":"OcXM"}],"pooP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glMatrix = require("gl-matrix");

var _p5xr = _interopRequireDefault(require("../core/p5xr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * p5vr class holds all state and methods that are specific to VR
 * @class
 *
 * @constructor
 *
 */
class p5vr extends _p5xr.default {
  constructor() {
    super();
    this.isVR = true;
    this.isImmersive = true;
    this.lookYaw = 0;
    this.lookPitch = 0;
    this.LOOK_SPEED = 0.0025; // Keep track of touch-related state so that users can touch and drag on
    // the canvas to adjust the viewer pose in an inline session.

    this.primaryTouch = undefined;
    this.prevTouchX = undefined;
    this.prevTouchY = undefined;
  }

  initVR() {
    this.init();
  }
  /**
   * This is where the actual p5 canvas is first created, and
   * the GL rendering context is accessed by p5vr.
   * The current XRSession also gets a frame of reference and
   * base rendering layer. <br>
   * @param {XRSession}
   */


  startSketch(session) {
    this.xrSession = this.xrButton.session = session;
    this.canvas = p5.instance.canvas;
    this.canvas.style.visibility = 'visible';
    this.xrSession.addEventListener('end', this.onSessionEnded.bind(this));

    if (typeof window.setup === 'function') {
      window.setup();
    }

    this.onRequestSession();
  }
  /**
   * `device.requestSession()` must be called within a user gesture event.
   * @param {XRDevice}
   */


  onXRButtonClicked() {
    if (this.isImmersive) {
      console.log('requesting session with mode: immersive-vr');
      navigator.xr.requestSession('immersive-vr').then(this.startSketch.bind(this));
    } else {
      console.log('requesting session with mode: non-immersive-vr');
      this.xrButton.hide(); // Start up an inline session, which should always be supported on
      // browsers that support WebXR regardless of the available hardware.

      navigator.xr.requestSession('inline').then(this.startSketch.bind(this));
    }
  }

  onRequestSession() {
    this.xrButton.setTitle(this.isVR ? 'EXIT VR' : 'EXIT AR');
    p5.instance._renderer._curCamera.cameraType = 'custom';
    this.gl = this.canvas.getContext('webgl', {
      xrCompatible: true
    }); // Use the p5's WebGL context to create a XRWebGLLayer and set it as the
    // sessions baseLayer. This allows any content rendered to the layer to
    // be displayed on the XRDevice;

    this.xrSession.updateRenderState({
      baseLayer: new XRWebGLLayer(this.xrSession, this.gl)
    }); // Get a frame of reference, which is required for querying poses.
    // 'local' places the initial pose relative to initial location of viewer
    // 'viewer' is only for inline experiences and only allows rotation

    const refSpaceRequest = this.isImmersive ? 'local' : 'viewer';
    this.xrSession.requestReferenceSpace(refSpaceRequest).then(refSpace => {
      this.xrRefSpace = refSpace; // Inform the session that we're ready to begin drawing.

      this.xrSession.requestAnimationFrame(this.onXRFrame.bind(this));

      if (!this.isImmersive) {
        this.xrSession.updateRenderState({
          inlineVerticalFieldOfView: 90 * (Math.PI / 180)
        });
        this.addInlineViewListeners(this.canvas);
      }
    });
  }
  /**
   * clears the background based on the current clear color (`curClearColor`)
   */


  _clearVR() {
    if (this.curClearColor === null) {
      return;
    }

    p5.instance.background(this.curClearColor);
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
  } // XRReferenceSpace offset is immutable, so return a new reference space
  // that has an updated orientation.


  getAdjustedRefSpace(refSpace) {
    // Represent the rotational component of the reference space as a
    // quaternion.
    // TODO: Add rotation ability to xrViewer
    const invOrientation = _glMatrix.quat.create();

    _glMatrix.quat.rotateX(invOrientation, invOrientation, -this.lookPitch);

    _glMatrix.quat.rotateY(invOrientation, invOrientation, -this.lookYaw);

    const xform = new XRRigidTransform({
      x: 0,
      y: 0,
      z: 0
    }, {
      x: invOrientation[0],
      y: invOrientation[1],
      z: invOrientation[2],
      w: invOrientation[3]
    });
    return refSpace.getOffsetReferenceSpace(xform);
  }

  rotateView(dx, dy) {
    this.lookYaw += dx * this.LOOK_SPEED;
    this.lookPitch += dy * this.LOOK_SPEED;
    if (this.lookPitch < -Math.PI * 0.5) this.lookPitch = -Math.PI * 0.5;
    if (this.lookPitch > Math.PI * 0.5) this.lookPitch = Math.PI * 0.5;
  } // Make the canvas listen for mouse and touch events so that we can
  // adjust the viewer pose accordingly in inline sessions.


  addInlineViewListeners(canvas) {
    this.canvas.addEventListener('mousemove', event => {
      // Only rotate when the right button is pressed
      if (event.buttons && 2) {
        this.rotateView(event.movementX, event.movementY);
      }
    }); // Keep track of all active touches, but only use the first touch to
    // adjust the viewer pose.

    this.canvas.addEventListener('touchstart', event => {
      if (this.primaryTouch === undefined) {
        const touch = event.changedTouches[0];
        this.primaryTouch = touch.identifier;
        this.prevTouchX = touch.pageX;
        this.prevTouchY = touch.pageY;
      }
    }); // Update the set of active touches now that one or more touches
    // finished. If the primary touch just finished, update the viewer pose
    // based on the final touch movement.

    canvas.addEventListener('touchend', event => {
      for (const touch of event.changedTouches) {
        if (this.primaryTouch === touch.identifier) {
          this.primaryTouch = undefined;
          this.rotateView(touch.pageX - this.prevTouchX, touch.pageY - this.prevTouchY);
        }
      }
    }); // Update the set of active touches now that one or more touches was
    // cancelled. Don't update the viewer pose when the primary touch was
    // cancelled.

    canvas.addEventListener('touchcancel', event => {
      for (const touch of event.changedTouches) {
        if (this.primaryTouch === touch.identifier) {
          this.primaryTouch = undefined;
        }
      }
    }); // Only use the delta between the most recent and previous events for
    // the primary touch. Ignore the other touches.

    canvas.addEventListener('touchmove', event => {
      for (const touch of event.changedTouches) {
        if (this.primaryTouch === touch.identifier) {
          this.rotateView(touch.pageX - this.prevTouchX, touch.pageY - this.prevTouchY);
          this.prevTouchX = touch.pageX;
          this.prevTouchY = touch.pageY;
        }
      }
    });
  }

}

exports.default = p5vr;
},{"gl-matrix":"CPlc","../core/p5xr":"QKDM"}],"NyZf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ARAnchor {
  constructor(x, y, z) {
    this.position = {
      x: x * 100,
      y: y * 100,
      z: z * 100
    };
  }

  dispose() {
    delete this;
  }

  isTracking() {}

  isStopped() {}

  transform() {
    translate(this.position.x, this.position.y, this.position.z);
  }

}

exports.default = ARAnchor;
},{}],"lmQh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _p5xr = _interopRequireDefault(require("../core/p5xr"));

var _ARAnchor = _interopRequireDefault(require("./ARAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class p5ar extends _p5xr.default {
  constructor() {
    super();
    this.canvas = null;
  } //* ********************************************************//
  //* *********ARCORE and ARKIT BASED AR BELOW****************//
  //* ********************************************************//

  /**
     * This is where the actual p5 canvas is first created, and
     * the GL rendering context is accessed by p5vr.
     * The current XRSession also gets a frame of reference and
     * base rendering layer. <br>
     * @param {XRSession}
     */


  startSketch(session) {
    this.xrSession = this.xrButton.session = session;
    this.xrSession.addEventListener('end', this.onSessionEnded);

    if (typeof touchStarted === 'function') {
      this.xrSession.addEventListener('select', touchStarted);
    }

    this.canvas = p5.instance.canvas;
    p5.instance._renderer._curCamera.cameraType = 'custom';
    this.onRequestSession();

    p5.instance._decrementPreload();
  }

  onSelect(event) {
    const context = window;
    const userMousePressed = context.mousePressed;

    if (typeof userMousePressed === 'function') {
      userMousePressed();
    }
  }

  detectHit(ev) {
    if (ev === null || typeof ev === 'undefined') {
      console.warn('You must pass the touchStarted event to detectHit.');
      return null;
    }

    if (!this.xrSession) {
      return null;
    }

    const y = ev.clientY / window.innerHeight;
    const x = ev.clientX / window.innerWidth;

    if (this.xrHitTestSource && this.viewer.pose && this.frame) {
      const hitTestResults = this.frame.getHitTestResults(this.xrHitTestSource);

      if (hitTestResults.length > 0) {
        // const pose = hitTestResults[0].getPose(ev.inputSource.targetRaySpace, this.xrRefSpace);
        const pose = hitTestResults[0].getPose(this.xrRefSpace);
        return createVector(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);
      }
    }
  }

  createAnchor(vec) {
    if (vec === null || typeof vec === 'undefined') {
      return null;
    }

    return new _ARAnchor.default(vec.x, vec.y, vec.z);
  }
  /**
   * `device.requestSession()` must be called within a user gesture event.
   * @param {XRDevice}
   */


  onXRButtonClicked(device) {
    if (window.injectedPolyfill) {
      console.log('ARCORE mode is not supported with a polyfill. Try using a more recent browser version');
      return;
    } // Normalize the various vendor prefixed versions of getUserMedia.


    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local', 'hit-test']
    }).then(session => {
      this.startSketch(session);
    }, error => {
      console.log(`${error} unable to request an immersive-ar session.`);
    });
  }

  onRequestSession() {
    this.gl = this.canvas.getContext('webgl', {
      xrCompatible: true
    });
    this.gl.makeXRCompatible().then(() => {
      this.xrSession.updateRenderState({
        baseLayer: new XRWebGLLayer(this.xrSession, this.gl)
      });
    });
    this.xrSession.requestReferenceSpace('viewer').then(refSpace => {
      this.xrViewerSpace = refSpace;
      this.xrSession.requestHitTestSource({
        space: this.xrViewerSpace
      }).then(hitTestSource => {
        this.xrHitTestSource = hitTestSource;
      });
    });
    this.xrSession.requestReferenceSpace('local').then(refSpace => {
      this.xrRefSpace = refSpace; // Inform the session that we're ready to begin drawing.

      this.xrSession.requestAnimationFrame(this.onXRFrame.bind(this));
    });
  }

}

exports.default = p5ar;
},{"../core/p5xr":"QKDM","./ARAnchor":"NyZf"}],"NyeQ":[function(require,module,exports) {
"use strict";

var _p5xrViewer = _interopRequireDefault(require("./p5xrViewer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_p5xrViewer.default.prototype.getRayFromScreen = function (screenX, screenY) {
  const ray = {
    origin: new p5.Vector(0, 0, 0),
    direction: new p5.Vector()
  };
  let poseMatrix = this.poseMatrix.copy();
  poseMatrix.transpose(poseMatrix);
  poseMatrix = poseMatrix.mat4; // set origin of ray to pose position

  ray.origin.x = poseMatrix[3];
  ray.origin.y = poseMatrix[7];
  ray.origin.z = poseMatrix[11];
  let initialMVMatrix = this.initialMVMatrix.copy();
  initialMVMatrix.transpose(initialMVMatrix);
  initialMVMatrix = initialMVMatrix.mat4; // transform ray origin to view space

  const rayOriginCopy = ray.origin.copy();
  ray.origin.x = initialMVMatrix[0] * rayOriginCopy.x + initialMVMatrix[1] * rayOriginCopy.y + initialMVMatrix[2] * rayOriginCopy.z + initialMVMatrix[3];
  ray.origin.y = initialMVMatrix[4] * rayOriginCopy.x + initialMVMatrix[5] * rayOriginCopy.y + initialMVMatrix[6] * rayOriginCopy.z + initialMVMatrix[7];
  ray.origin.z = initialMVMatrix[8] * rayOriginCopy.x + initialMVMatrix[9] * rayOriginCopy.y + initialMVMatrix[10] * rayOriginCopy.z + initialMVMatrix[11]; // get ray direction from left eye

  const leftDirection = new p5.Vector(screenX, screenY, -1);
  let leftPMatrixInverse = new p5.Matrix();
  leftPMatrixInverse.invert(this.leftPMatrix.copy());
  leftPMatrixInverse.transpose(leftPMatrixInverse);
  leftPMatrixInverse = leftPMatrixInverse.mat4;
  const leftDirectionCopy = leftDirection.copy();
  leftDirection.x = leftPMatrixInverse[0] * leftDirectionCopy.x + leftPMatrixInverse[1] * leftDirectionCopy.y + leftPMatrixInverse[2] * leftDirectionCopy.z;
  leftDirection.y = leftPMatrixInverse[4] * leftDirectionCopy.x + leftPMatrixInverse[5] * leftDirectionCopy.y + leftPMatrixInverse[6] * leftDirectionCopy.z;
  leftDirection.normalize(); // get ray direction from right eye

  const rightDirection = new p5.Vector(screenX, screenY, -1);
  let rightPMatrixInverse = new p5.Matrix();
  rightPMatrixInverse.invert(this.rightPMatrix.copy());
  rightPMatrixInverse.transpose(rightPMatrixInverse);
  rightPMatrixInverse = rightPMatrixInverse.mat4;
  const rightDirectionCopy = rightDirection.copy();
  rightDirection.x = rightPMatrixInverse[0] * rightDirectionCopy.x + rightPMatrixInverse[1] * rightDirectionCopy.y + rightPMatrixInverse[2] * rightDirectionCopy.z;
  rightDirection.y = rightPMatrixInverse[4] * rightDirectionCopy.x + rightPMatrixInverse[5] * rightDirectionCopy.y + rightPMatrixInverse[6] * rightDirectionCopy.z;
  rightDirection.normalize(); // combine both ray directions

  ray.direction = p5.Vector.add(leftDirection, rightDirection).normalize();
  return ray;
};

p5.prototype.intersectsSphere = function () {
  const radius = arguments[0];
  let ray = {
    origin: null,
    direction: null
  };

  if (arguments.length !== 2 || !arguments[1].hasOwnProperty('origin')) {
    const screenX = arguments[1] || 0;
    const screenY = arguments[2] || 0;
    ray = p5xr.instance.viewer.getRayFromScreen(screenX, screenY);
  } else {
    ray.origin = arguments[1].origin.copy();
    ray.direction = arguments[1].direction.copy();
  }

  if (ray === null) return false; // sphere in View space

  let uMVMatrix = p5.instance._renderer.uMVMatrix.copy();

  uMVMatrix.transpose(uMVMatrix);
  uMVMatrix = uMVMatrix.mat4;
  const sphereCenter = new p5.Vector(0, 0, 0);
  sphereCenter.x = uMVMatrix[3];
  sphereCenter.y = uMVMatrix[7];
  sphereCenter.z = uMVMatrix[11];

  if (p5.Vector.sub(ray.origin, sphereCenter).mag() <= radius) {
    return true;
  } // check if sphere is in front of ray


  if (p5.Vector.dot(p5.Vector.sub(sphereCenter, ray.origin), ray.direction) < 0) {
    return false;
  }

  const sphereToRayOrigin = p5.Vector.sub(ray.origin, sphereCenter);
  const b = 2 * p5.Vector.dot(ray.direction, sphereToRayOrigin);
  const c = p5.Vector.mag(sphereToRayOrigin) * p5.Vector.mag(sphereToRayOrigin) - radius * radius;
  const det = b * b - 4 * c;
  return det >= 0;
};

p5.prototype.intersectsBox = function () {
  const width = arguments[0];
  let height;
  let depth;
  let ray = {
    origin: null,
    direction: null
  };

  if (arguments[arguments.length - 1].hasOwnProperty('origin')) {
    ray.origin = arguments[arguments.length - 1].origin.copy();
    ray.direction = arguments[arguments.length - 1].direction.copy();
    height = arguments.length > 2 ? arguments[1] : width;
    depth = arguments.length > 3 ? arguments[2] : height;
  } else if (arguments.length === 5) {
    // if screenX, screenY is specified => width, height, depth must also be specified
    ray = p5xr.instance.viewer.getRayFromScreen(arguments[3], arguments[4]);
    height = arguments[1];
    depth = arguments[2];
  } else {
    ray = p5xr.instance.viewer.getRayFromScreen(0, 0);
    height = arguments.length > 1 ? arguments[1] : width;
    depth = arguments.length > 2 ? arguments[2] : height;
  } // bounding box in view space will not be axis aligned
  // so we will transform ray to box space by applying inverse(uMVMatrix) to origin and direction


  let uMVMatrixInv = p5.instance._renderer.uMVMatrix.copy();

  uMVMatrixInv.transpose(uMVMatrixInv);
  uMVMatrixInv.invert(uMVMatrixInv);
  uMVMatrixInv = uMVMatrixInv.mat4;
  const rayOriginCopy = ray.origin.copy();
  ray.origin.x = uMVMatrixInv[0] * rayOriginCopy.x + uMVMatrixInv[1] * rayOriginCopy.y + uMVMatrixInv[2] * rayOriginCopy.z + uMVMatrixInv[3];
  ray.origin.y = uMVMatrixInv[4] * rayOriginCopy.x + uMVMatrixInv[5] * rayOriginCopy.y + uMVMatrixInv[6] * rayOriginCopy.z + uMVMatrixInv[7];
  ray.origin.z = uMVMatrixInv[8] * rayOriginCopy.x + uMVMatrixInv[9] * rayOriginCopy.y + uMVMatrixInv[10] * rayOriginCopy.z + uMVMatrixInv[11];
  const rayDirectionCopy = ray.direction.copy();
  ray.direction.x = uMVMatrixInv[0] * rayDirectionCopy.x + uMVMatrixInv[1] * rayDirectionCopy.y + uMVMatrixInv[2] * rayDirectionCopy.z;
  ray.direction.y = uMVMatrixInv[4] * rayDirectionCopy.x + uMVMatrixInv[5] * rayDirectionCopy.y + uMVMatrixInv[6] * rayDirectionCopy.z;
  ray.direction.z = uMVMatrixInv[8] * rayDirectionCopy.x + uMVMatrixInv[9] * rayDirectionCopy.y + uMVMatrixInv[10] * rayDirectionCopy.z;
  ray.direction.normalize(); // representing AABB (Axis aligned bounding box) with 2 extreme points

  const min = new p5.Vector(-0.5 * width, -0.5 * height, -0.5 * depth);
  const max = new p5.Vector(0.5 * width, 0.5 * height, 0.5 * depth); // ray-AABB intersection algorithm

  const t1 = (min.x - ray.origin.x) / ray.direction.x;
  const t2 = (max.x - ray.origin.x) / ray.direction.x;
  const t3 = (min.y - ray.origin.y) / ray.direction.y;
  const t4 = (max.y - ray.origin.y) / ray.direction.y;
  const t5 = (min.z - ray.origin.z) / ray.direction.z;
  const t6 = (max.z - ray.origin.z) / ray.direction.z;
  const tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
  const tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

  if (tmax < 0 || tmin > tmax) {
    return false;
  }

  return true;
};

p5.prototype.intersectsPlane = function () {
  let ray = {
    origin: null,
    direction: null
  };

  if (arguments[0].hasOwnProperty('origin')) {
    ray.origin = arguments[0].origin.copy();
    ray.direction = arguments[0].direction.copy();
  } else {
    ray = p5xr.instance.viewer.getRayFromScreen(arguments[0], arguments[1]);
  } // transforming ray to local plane space
  // intersection point will be with respect to the plane


  let uMVMatrixInv = p5.instance._renderer.uMVMatrix.copy();

  uMVMatrixInv.transpose(uMVMatrixInv);
  uMVMatrixInv.invert(uMVMatrixInv);
  uMVMatrixInv = uMVMatrixInv.mat4;
  const rayOriginCopy = ray.origin.copy();
  ray.origin.x = uMVMatrixInv[0] * rayOriginCopy.x + uMVMatrixInv[1] * rayOriginCopy.y + uMVMatrixInv[2] * rayOriginCopy.z + uMVMatrixInv[3];
  ray.origin.y = uMVMatrixInv[4] * rayOriginCopy.x + uMVMatrixInv[5] * rayOriginCopy.y + uMVMatrixInv[6] * rayOriginCopy.z + uMVMatrixInv[7];
  ray.origin.z = uMVMatrixInv[8] * rayOriginCopy.x + uMVMatrixInv[9] * rayOriginCopy.y + uMVMatrixInv[10] * rayOriginCopy.z + uMVMatrixInv[11];
  const rayDirectionCopy = ray.direction.copy();
  ray.direction.x = uMVMatrixInv[0] * rayDirectionCopy.x + uMVMatrixInv[1] * rayDirectionCopy.y + uMVMatrixInv[2] * rayDirectionCopy.z;
  ray.direction.y = uMVMatrixInv[4] * rayDirectionCopy.x + uMVMatrixInv[5] * rayDirectionCopy.y + uMVMatrixInv[6] * rayDirectionCopy.z;
  ray.direction.z = uMVMatrixInv[8] * rayDirectionCopy.x + uMVMatrixInv[9] * rayDirectionCopy.y + uMVMatrixInv[10] * rayDirectionCopy.z;
  ray.direction.normalize(); // represeting plane

  const planeNormal = new p5.Vector(0, 0, 1);
  const planePoint = new p5.Vector(0, 0, 0); // ray-plane intersection algorithm

  const w = p5.Vector.sub(planePoint, ray.origin);
  const d = Math.abs(p5.Vector.dot(ray.direction, planeNormal));

  if (d === 0) {
    return null;
  }

  const k = Math.abs(p5.Vector.dot(w, planeNormal) / d);
  const intersectionPoint = p5.Vector.add(ray.origin, ray.direction.copy().setMag(k));
  return createVector(intersectionPoint.x, intersectionPoint.y);
};

p5.prototype.generateRay = function (x1, y1, z1, x2, y2, z2) {
  const origin = new p5.Vector(x1, y1, z1);
  let direction = new p5.Vector(x2, y2, z2);
  direction = p5.Vector.sub(direction, origin);
  direction.normalize();

  let uMVMatrix = p5.instance._renderer.uMVMatrix.copy();

  uMVMatrix.transpose(uMVMatrix);
  uMVMatrix = uMVMatrix.mat4;
  const originCopy = origin.copy();
  origin.x = uMVMatrix[0] * originCopy.x + uMVMatrix[1] * originCopy.y + uMVMatrix[2] * originCopy.z + uMVMatrix[3];
  origin.y = uMVMatrix[4] * originCopy.x + uMVMatrix[5] * originCopy.y + uMVMatrix[6] * originCopy.z + uMVMatrix[7];
  origin.z = uMVMatrix[8] * originCopy.x + uMVMatrix[9] * originCopy.y + uMVMatrix[10] * originCopy.z + uMVMatrix[11];
  const directionCopy = direction.copy();
  direction.x = uMVMatrix[0] * directionCopy.x + uMVMatrix[1] * directionCopy.y + uMVMatrix[2] * directionCopy.z;
  direction.y = uMVMatrix[4] * directionCopy.x + uMVMatrix[5] * directionCopy.y + uMVMatrix[6] * directionCopy.z;
  direction.z = uMVMatrix[8] * directionCopy.x + uMVMatrix[9] * directionCopy.y + uMVMatrix[10] * directionCopy.z;
  direction.normalize();
  return {
    origin,
    direction
  };
};
},{"./p5xrViewer":"OW83"}],"A2T1":[function(require,module,exports) {
"use strict";

var _webxrPolyfill = _interopRequireDefault(require("webxr-polyfill"));

var _p5vr = _interopRequireDefault(require("./p5xr/p5vr/p5vr"));

var _p5ar = _interopRequireDefault(require("./p5xr/p5ar/p5ar"));

require("./p5xr/core/raycasting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.p5xr = {
  instance: null
};

function polyfillIfRequired() {
  if ('xr' in navigator === false) {
    window.injectedPolyfill = true;
    window.polyfill = new _webxrPolyfill.default();
  } else {
    window.injectedPolyfill = false;
  }
}

polyfillIfRequired();
/**
 * starts the process of creating a VR-ready canvas
 * This actually just creates a button that will set into motion
 * the creation of a VR canvas and creates a new p5vr object.
 *  This should be called in `preload()` so
 * that the entire sketch can wait to start until the user has "entered VR"
 * via a button click gesture
 * @method createVRCanvas
 */

p5.prototype.createVRCanvas = function () {
  noLoop();
  p5xr.instance = new _p5vr.default();
  p5xr.instance.initVR();
};
/**
 * starts the process of creating a VR-ready canvas
 * This actually just creates a button that will set into motion
 * the creation of a AR canvas and creates a new p5ar object.
 * This should be called in `preload()` so
 * that the entire sketch can wait to start until the user has "entered AR"
 * via a button click gesture
 * @method createARCanvas
 */


p5.prototype.createARCanvas = function () {
  noLoop();
  p5xr.instance = new _p5ar.default();
  p5xr.instance.init();
};
/**
 * Sets the clear color for VR-Mode. <br><br>
 * This has to happen separately from calls to background
 * to avoid clearing between drawing the eyes
 * @method setVRBackgroundColor
 * @param  {Number} r red value of background
 * @param  {Number} g green value of background
 * @param  {Number} b blue value of background
 */


p5.prototype.setVRBackgroundColor = function (r, g, b) {
  p5xr.instance.curClearColor = color(r, g, b);
};

p5.prototype.surroundTexture = function (tex) {
  push();
  texture(tex);
  rotateX(PI);
  scale(-1, 1, 1);
  sphere(300, 60, 40);
  pop();
};

p5.prototype.createAnchor = function (vec) {
  if (p5xr.instance.isVR) {
    return;
  }

  return p5xr.instance.createAnchor(vec);
};

p5.prototype.detectHit = function (ev) {
  if (p5xr.instance.isVR) {
    return;
  }

  return p5xr.instance.detectHit(ev);
};

p5.prototype.getXRInput = function (input) {
  if (p5xr.instance.xrSession.inputSources.length === 0) {
    return;
  }

  return p5xr.instance.getXRInput(input);
};
},{"webxr-polyfill":"LEBx","./p5xr/p5vr/p5vr":"pooP","./p5xr/p5ar/p5ar":"lmQh","./p5xr/core/raycasting":"NyeQ"}]},{},["A2T1"], null)