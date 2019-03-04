var __awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(a,o){function n(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(n,s)}c((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var r,i,a,o,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=2&o[0]?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(a=(a=n.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){n=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(6===o[0]&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};airship.loadBundle("lviodzsm",["exports","./chunk-acd3c32f.js","./chunk-481bf590.js","./chunk-035d4608.js"],function(e,t,r,i){var a=window.airship.h,o=function(){function e(){this.categories=[],this.disableInteractivity=!1,this.valueFormatter=this.defaultFormatter,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.isLoading=!1,this.error="",this.errorDescription="",this.noDataHeaderMessage="NO DATA AVAILABLE",this.noDataBodyMessage="There is no data to display.",this.selectedCategories=[]}return e.prototype.defaultFormatter=function(e){return""+t.readableNumber(e)},e.prototype.getSelectedCategories=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.selectedCategories]})})},e.prototype.clearSelection=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.selectedCategories.length?(this.selectedCategories=[],this._onCategoriesChanged(),[2]):[2]})})},e.prototype.render=function(){return[this._renderHeader(),this._renderSelection(),this._renderContent()]},e.prototype._renderSelection=function(){var e=this;if(this.isLoading||this._isEmpty()||this.error||!this.showClearButton)return"";var t=this.selectedCategories.length;return a("as-widget-selection",{selection:(t||"All")+" selected",clearText:"Clear selection",showClear:t>0,onClear:function(){return e.clearSelection()}})},e.prototype._renderHeader=function(){if(this.showHeader)return a("as-widget-header",{header:this.heading,subheader:this.description,"is-empty":this._isEmpty(),"is-loading":this.isLoading,error:this.error,"no-data-message":this.noDataHeaderMessage})},e.prototype._renderContent=function(){return i.contentFragment(this.isLoading,this.error,this._isEmpty(),this.heading,this.errorDescription,this.noDataBodyMessage,this._renderCategoryList())},e.prototype._renderCategoryList=function(){return a("ul",{class:{"as-category-widget__list":!0,"as-category-widget__list--disabled":this.disableInteractivity}},this._renderCategories())},e.prototype._renderCategories=function(){var e,t=this,r=this.categories.length>this.visibleCategories,i=this._parseCategories(),a=i.categories,o=i.otherCategory,n=a.slice(0,this.visibleCategories),s=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getCategoriesMaximumValue(a,Boolean(o));return(o||r)&&(e=this._renderOtherCategory(o,{maximumValue:s})),[n.map(function(e){return t._renderCategory(e,{maximumValue:s})}),e]},e.prototype._renderCategory=function(e,t){var r=this,i=t.isOther,o=t.maximumValue,n=this._isSelected(e.name),s=this.selectedCategories.length>0,c={backgroundColor:this._getBarColor(e.color,{isSelected:n,isOther:i})||"var(--as--category-bar--color)",width:e.value/o*100+"%"},l={"as-category-widget__category":!0,"as-category-widget__category--not-selected":s&&(!n||i),"as-category-widget__category--other":i,"as-category-widget__category--selected":n},u=this.valueFormatter(e.value);return a("li",{class:l,onClick:function(){return r._toggleCategory(e)}},a("p",{class:"as-category-widget__info as-body"},a("div",{class:"as-category-widget__title"},e.name),u),a("div",{class:"as-category-widget__bar"},a("div",{class:"as-category-widget__bar-value",style:c})))},e.prototype._renderOtherCategory=function(e,t){var r=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(r,{maximumValue:t.maximumValue,isOther:!0})},e.prototype._isSelected=function(e){return this.selectedCategories.includes(e)},e.prototype._toggleCategory=function(e){this.disableInteractivity||(this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter(function(t){return t!==e.name}):this.selectedCategories.concat([e.name]),this._onCategoriesChanged())},e.prototype._onCategoriesChanged=function(){this.categoriesSelected.emit(this.selectedCategories)},e.prototype._getCategoriesMaximumValue=function(e,t){return void 0===t&&(t=!1),this._getVisibleCategories(e,t).reduce(function(e,t){return t.value>e?t.value:e},0)},e.prototype._getCategoriesTotalValue=function(e){return e.reduce(function(e,t){return t.value+e},0)},e.prototype._getBarColor=function(e,t){return void 0===t&&(t={}),t.isOther?"#747474":t.isSelected?r.shadeOrBlend(-.16,e):e},e.prototype._parseCategories=function(){var e=this.categories.find(function(e){return"Other"===e.name});return e?{categories:this.categories.filter(function(t){return t.name!==e.name}),otherCategory:e}:{categories:this.categories}},e.prototype._getVisibleCategories=function(e,t){return t?e:e.slice(0,this.visibleCategories)},e.prototype._isEmpty=function(){return!this.categories||!this.categories.length},Object.defineProperty(e,"is",{get:function(){return"as-category-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},disableInteractivity:{type:Boolean,attr:"disable-interactivity"},error:{type:String,attr:"error"},errorDescription:{type:String,attr:"error-description"},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},isLoading:{type:Boolean,attr:"is-loading"},noDataBodyMessage:{type:String,attr:"no-data-body-message"},noDataHeaderMessage:{type:String,attr:"no-data-header-message"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},valueFormatter:{type:"Any",attr:"value-formatter"},visibleCategories:{type:Number,attr:"visible-categories"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"as-category-widget{--as--category-bar--background-color:var(--as--color--ui-02,#f5f5f5);--as--category-bar--color:var(--as--color--complementary,#47db99);--as--category-widget--background-color:var(--as--color--ui-01,#fff);--as--category-widget--bar--height:4px;--as--category-widget--description--color:var(--as--color--type-02,#747474);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:228px;height:100%;overflow-y:auto;background:var(--as--category-widget--background-color)}as-category-widget .content{min-height:100px}as-category-widget .as-category-widget__count{color:var(--as--category-widget--description--color)}as-category-widget .as-category-widget__list{-ms-flex:1;flex:1;margin:0;padding:0;overflow-y:auto;list-style:none}as-category-widget .as-category-widget__list.as-category-widget__list--disabled li{pointer-events:none}as-category-widget .as-category-widget__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__list+.as-category-widget__footer{margin-top:16px}as-category-widget .as-category-widget__info{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:var(--as--category-widget--bar--height);border-radius:2px;background-color:var(--as--category-bar--background-color)}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:var(--as--category-widget--bar--height);-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}"},enumerable:!0,configurable:!0}),e}();e.AsCategoryWidget=o,Object.defineProperty(e,"__esModule",{value:!0})});