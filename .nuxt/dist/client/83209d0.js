(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{200:function(n,e,t){"use strict";t.r(e);var r=t(34),component=Object(r.a)({},(function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",{staticClass:"main-nav black"},[t("div",{staticClass:"row"},[t("div",{staticClass:"site-logo"},[t("a",{attrs:{href:"/"}},[n._v("KH")])]),n._v(" "),t("ul",{staticClass:"main-menu"},[t("li",[t("a",{attrs:{href:"/"}},[n._v("Resume")])]),n._v(" "),t("li",[t("a",{attrs:{href:"/"}},[n._v("Portfolio")])])])])])}],!1,null,null,null);e.default=component.exports},205:function(n,e,t){"use strict";t.r(e);var r=t(34),component=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"container"},[t("SiteHeader")],1),n._v(" "),t("style",[n._v('\n#typewriter {\n  font-size: 2em;\n  margin: 0;\n  font-family: "Courier New";\n}\n#typewriter:after {\n  content: "|";\n  -webkit-animation: blink 500ms linear infinite alternate;\n          animation: blink 500ms linear infinite alternate;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n')]),n._v(" "),n._m(0),n._v(" "),t("script",[n._v('\n\n    function setupTypewriter(t) {\n      var HTML = t.innerHTML;\n\n      t.innerHTML = "";\n\n      var cursorPosition = 0,\n          tag = "",\n          writingTag = false,\n          tagOpen = false,\n          typeSpeed = 100,\n        tempTypeSpeed = 0;\n\n      var type = function() {\n        \n          if (writingTag === true) {\n              tag += HTML[cursorPosition];\n          }\n\n          if (HTML[cursorPosition] === "<") {\n              tempTypeSpeed = 0;\n              if (tagOpen) {\n                  tagOpen = false;\n                  writingTag = true;\n              } else {\n                  tag = "";\n                  tagOpen = true;\n                  writingTag = true;\n                  tag += HTML[cursorPosition];\n              }\n          }\n          if (!writingTag && tagOpen) {\n              tag.innerHTML += HTML[cursorPosition];\n          }\n          if (!writingTag && !tagOpen) {\n              if (HTML[cursorPosition] === " ") {\n                  tempTypeSpeed = 0;\n              }\n              else {\n                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;\n              }\n              t.innerHTML += HTML[cursorPosition];\n          }\n          if (writingTag === true && HTML[cursorPosition] === ">") {\n              tempTypeSpeed = (Math.random() * typeSpeed) + 50;\n              writingTag = false;\n              if (tagOpen) {\n                  var newSpan = document.createElement("span");\n                  t.appendChild(newSpan);\n                  newSpan.innerHTML = tag;\n                  tag = newSpan.firstChild;\n              }\n          }\n\n          cursorPosition += 1;\n          if (cursorPosition < HTML.length - 1) {\n              setTimeout(type, tempTypeSpeed);\n          }\n\n      };\n\n      return {\n          type: type\n      };\n  }\n\n  var typer = document.getElementById(\'typewriter\');\n\n  typewriter = setupTypewriter(typewriter);\n\n  typewriter.type();\n\n')])])}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",{attrs:{id:"typewriter"}},[t("span",{staticClass:"var-highlight"},[n._v("Kyle Huffling")]),n._v("\n"),t("span",{staticClass:"string-highlight"},[n._v("Web Developer")]),n._v("\n"),t("span",{staticClass:"string-highlight"},[n._v("I build websites that work for people and businesses.")]),n._v("  \n")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteHeader:t(200).default})}}]);