const t=window.airship.h;class e{componentWillLoad(){this.actions=this.element.querySelector(".as-toolbar__actions")}componentWillUpdate(){this.actions=this.element.querySelector(".as-toolbar__actions")}render(){return t("header",{class:"as-toolbar"},this._renderToggleButton(),t("slot",null))}_toggleDrawer(){this.actions.classList.toggle("as-toolbar__actions--visible")}_renderToggleButton(){if(this.actions)return t("button",{onClick:this._toggleDrawer.bind(this),class:"as-toolbar__item as-toolbar__toggle"},t("i",{class:"as-icon-hamburguer as-title as-m--0"}))}static get is(){return"as-toolbar"}static get properties(){return{element:{elementRef:!0}}}static get style(){return"as-toolbar{display:block;z-index:3}"}}export{e as AsToolbar};