var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};airship.loadBundle("mocvgkwb",["exports","./chunk-6da42a66.js"],function(e,t){var n=window.airship.h,r=function(){function e(e){var t=e.activeClass,n=e.element,r=e.name,i=e.order,o=e.type;this._active=!1,this._activeClass=t,this._element=n,this._name=r,this._order=i,this._type=o}return Object.defineProperty(e.prototype,"active",{get:function(){return this._active},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeClass",{get:function(){return this._activeClass},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this._element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"order",{get:function(){return this._order},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),e.prototype.enable=function(){this.element.classList.add(this._activeClass),this._active=!0},e.prototype.disable=function(){this.element.classList.remove(this._activeClass),this._active=!1},e}();function i(e,t){return new r({activeClass:"as-sidebar--visible",element:e,name:e.getAttribute("data-name")||"Sidebar "+t,order:e.getAttribute("data-tab-order")||0,type:"sidebar"})}function o(e,t){return new r({activeClass:"as-map-panels--visible",element:e,name:e.getAttribute("data-name")||"Panel "+t,order:e.getAttribute("data-tab-order")||0,type:"panels"})}var a=function(e){var t=e.querySelector(".as-map-footer");return t?new r({activeClass:"as-map-footer--visible",element:t,name:t.getAttribute("data-name")||"Bottom Bar",order:t.getAttribute("data-tab-order")||0,type:"mapFooter"}):null},s=function(e){var t=e.querySelector(".as-map-area");return t?new r({activeClass:"as-map-area--visible",element:t,name:t.getAttribute("data-name")||"Map",order:t.getAttribute("data-tab-order")||0,type:"map"}):null},c=function(e){return Array.from(e.querySelectorAll(".as-map-panels")).map(o)},u=function(e){return Array.from(e.querySelectorAll(".as-sidebar")).map(i)},l=function(){function e(){this.sections=[]}return e.prototype.componentWillLoad=function(){this.sections=this.getContentSections()},e.prototype.componentDidLoad=function(){this.ready.emit()},e.prototype.getSections=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.sections]})})},e.prototype.setVisible=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return(t=this.sections.find(function(t){return t.name===e}))&&this.setActive(t),[2]})})},e.prototype.render=function(){return[this._renderTabs(),this._renderContent()]},e.prototype._renderTabs=function(){var e=this,t=this.sections.map(function(t,r){if(t.element)return n("button",{onClick:function(){return e.setActive(t)},role:"tab",class:{"as-tabs__item":!0,"as-tabs__item--active":t.active}},t.name||r)});return n("div",{role:"tablist",class:"as-toolbar-tabs as-tabs as-tabs--xl"},t)},e.prototype._renderContent=function(){return n("section",{class:"as-content"},n("slot",null))},e.prototype.setActive=function(e){e.active||(this.disableActiveSection(),e.enable(),t.redrawChildren(e.element),this.activeSection=e,this.sections=this.sections.slice(),this.sectionChange.emit(e))},e.prototype.disableActiveSection=function(){this.activeSection&&this.activeSection.disable()},e.prototype.getContentSections=function(){var e=[s(this.element)].concat(u(this.element),c(this.element),[a(this.element)]).filter(function(e){return null!==e});return e.length&&(e.sort(function(e,t){return e.order-t.order}),this.setActive(e[0])),e},Object.defineProperty(e,"is",{get:function(){return"as-responsive-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},getSections:{method:!0},sections:{state:!0},setVisible:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ready",method:"ready",bubbles:!0,cancelable:!0,composed:!0},{name:"sectionChange",method:"sectionChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"as-responsive-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;min-height:0}"},enumerable:!0,configurable:!0}),e}();e.AsResponsiveContent=l,Object.defineProperty(e,"__esModule",{value:!0})});