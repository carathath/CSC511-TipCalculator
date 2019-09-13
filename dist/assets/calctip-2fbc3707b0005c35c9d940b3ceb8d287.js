"use strict"
define("calctip/app",["exports","calctip/resolver","ember-load-initializers","calctip/config/environment"],function(e,t,a,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,a.default)(l,i.default.modulePrefix)
var n=l
e.default=n}),define("calctip/components/calculate",["exports","module"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Component.extend({actions:{calculate:function(e,t,a){t&&!isNaN(t)&&a&&!isNaN(a)||alert("Input valid values!")
var i=parseFloat(t),l=parseFloat(e),n=parseInt(a)
console.log(i),console.log(l)
var r=(i+i*(l/100)).toFixed(2),o="<p>Total Amount: $"+r+"</p> <p>Tip Amount: $"+(l=(i*(l/100)).toFixed(2))+"</p>"
1!=n&&(o+="<p>Total per person: $"+(r/n).toFixed(2)+"</p>"),$("#result").html(o)}}})
e.default=a}),define("calctip/helpers/app-version",["exports","calctip/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=t.default.APP.version,n=i.versionOnly||i.hideSha,r=i.shaOnly||i.hideVersion,o=null
return n&&(i.showExtended&&(o=l.match(a.versionExtendedRegExp)),o||(o=l.match(a.versionRegExp))),r&&(o=l.match(a.shaRegExp)),o?o[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
var l=Ember.Helper.helper(i)
e.default=l}),define("calctip/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calctip/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calctip/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","calctip/config/environment"],function(e,t,a){var i,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(i=a.default.APP.name,l=a.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(i,l)}
e.default=n}),define("calctip/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("calctip/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("calctip/initializers/export-application-global",["exports","calctip/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var i,l=t.default.exportApplicationGlobal
i="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),a[i]||(a[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var i={name:"export-application-global",initialize:a}
e.default=i}),define("calctip/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("calctip/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("calctip/router",["exports","calctip/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){})
var i=a
e.default=i}),define("calctip/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("calctip/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"2lioC1XY",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"Tip Calculator"],[9],[0,"\\n\\n"],[1,[22,"calculate"],false],[0,"\\n"],[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"calctip/templates/application.hbs"}})
e.default=t}),define("calctip/templates/components/calculate",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"A6W7TayY",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","row d-flex justify-content-center"],[8],[0,"\\n    "],[7,"div",true],[10,"class","col-md-6"],[8],[0,"\\n        "],[7,"form",true],[8],[0,"\\n            "],[7,"legend",true],[8],[0,"Find out"],[9],[0,"\\n            "],[7,"label",true],[10,"for","bill"],[8],[0,"Bill Amount: $"],[9],[0,"\\n            "],[1,[28,"input",null,[["value"],[[24,["billAmount"]]]]],false],[0,"\\n            "],[7,"br",true],[8],[9],[7,"br",true],[8],[9],[0,"\\n\\n            "],[7,"label",true],[10,"for","numP"],[8],[0,"Number of people: "],[9],[0,"\\n            "],[1,[28,"input",null,[["value"],[[24,["numP"]]]]],false],[0,"\\n            "],[7,"br",true],[8],[9],[7,"br",true],[8],[9],[0,"\\n\\n            "],[7,"label",true],[10,"for","tip"],[8],[0,"Tip Amount: "],[9],[0,"\\n            "],[7,"button",false],[3,"action",[[23,0,[]],"calculate",15,[24,["billAmount"]],[24,["numP"]]]],[8],[0,"15%"],[9],[0,"\\n            "],[7,"button",false],[3,"action",[[23,0,[]],"calculate",18,[24,["billAmount"]],[24,["numP"]]]],[8],[0,"18%"],[9],[0,"\\n            "],[7,"button",false],[3,"action",[[23,0,[]],"calculate",20,[24,["billAmount"]],[24,["numP"]]]],[8],[0,"20%"],[9],[0,"\\n            "],[7,"br",true],[8],[9],[7,"br",true],[8],[9],[0,"\\n\\n            "],[7,"div",true],[10,"id","result"],[8],[9],[0,"\\n\\n        "],[9],[0,"\\n    "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"calctip/templates/components/calculate.hbs"}})
e.default=t}),define("calctip/config/environment",[],function(){try{var e="calctip/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("calctip/app").default.create({name:"calctip",version:"0.0.0"})
