exports.ids = [4,2];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SiteHeader.vue?vue&type=template&id=0d0c0e8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"main-nav black"},[_vm._ssrNode("<div class=\"row\"><div class=\"site-logo\"><a href=\"/\">KH</a></div> <ul class=\"main-menu\"><li><a href=\"/\">Resume</a></li> <li><a href=\"/\">Portfolio</a></li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SiteHeader.vue?vue&type=template&id=0d0c0e8c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SiteHeader.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48d19f8b"
  
)

/* harmony default export */ var SiteHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/typewritereffect.vue?vue&type=template&id=b26dd502&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SiteHeader')],1),_vm._ssrNode(" <style>\n#typewriter {\n  font-size: 2em;\n  margin: 0;\n  font-family: &quot;Courier New&quot;;\n}\n#typewriter:after {\n  content: &quot;|&quot;;\n  -webkit-animation: blink 500ms linear infinite alternate;\n          animation: blink 500ms linear infinite alternate;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n</style> <pre id=\"typewriter\"><span class=\"var-highlight\">Kyle Huffling</span>\n<span class=\"string-highlight\">Web Developer</span>\n<span class=\"string-highlight\">I build websites that work for people and businesses.</span>  \n</pre> <script>\n\n    function setupTypewriter(t) {\n      var HTML = t.innerHTML;\n\n      t.innerHTML = &quot;&quot;;\n\n      var cursorPosition = 0,\n          tag = &quot;&quot;,\n          writingTag = false,\n          tagOpen = false,\n          typeSpeed = 100,\n        tempTypeSpeed = 0;\n\n      var type = function() {\n        \n          if (writingTag === true) {\n              tag += HTML[cursorPosition];\n          }\n\n          if (HTML[cursorPosition] === &quot;&lt;&quot;) {\n              tempTypeSpeed = 0;\n              if (tagOpen) {\n                  tagOpen = false;\n                  writingTag = true;\n              } else {\n                  tag = &quot;&quot;;\n                  tagOpen = true;\n                  writingTag = true;\n                  tag += HTML[cursorPosition];\n              }\n          }\n          if (!writingTag &amp;&amp; tagOpen) {\n              tag.innerHTML += HTML[cursorPosition];\n          }\n          if (!writingTag &amp;&amp; !tagOpen) {\n              if (HTML[cursorPosition] === &quot; &quot;) {\n                  tempTypeSpeed = 0;\n              }\n              else {\n                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;\n              }\n              t.innerHTML += HTML[cursorPosition];\n          }\n          if (writingTag === true &amp;&amp; HTML[cursorPosition] === &quot;&gt;&quot;) {\n              tempTypeSpeed = (Math.random() * typeSpeed) + 50;\n              writingTag = false;\n              if (tagOpen) {\n                  var newSpan = document.createElement(&quot;span&quot;);\n                  t.appendChild(newSpan);\n                  newSpan.innerHTML = tag;\n                  tag = newSpan.firstChild;\n              }\n          }\n\n          cursorPosition += 1;\n          if (cursorPosition &lt; HTML.length - 1) {\n              setTimeout(type, tempTypeSpeed);\n          }\n\n      };\n\n      return {\n          type: type\n      };\n  }\n\n  var typer = document.getElementById('typewriter');\n\n  typewriter = setupTypewriter(typewriter);\n\n  typewriter.type();\n\n</script>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/typewritereffect.vue?vue&type=template&id=b26dd502&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/typewritereffect.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "38bbc08a"
  
)

/* harmony default export */ var typewritereffect = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SiteHeader: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=typewritereffect.js.map