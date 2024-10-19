"use strict";(self.webpackChunkneilportfolio=self.webpackChunkneilportfolio||[]).push([[380],{8455:(e,t,n)=>{t.A=void 0;var i=l(n(5043)),r=l(n(5173)),o=l(n(8139));function l(e){return e&&e.__esModule?e:{default:e}}const a=e=>{let{animate:t=!0,className:n="",layout:r="2-columns",lineColor:l="#FFF",children:a}=e;return"object"===typeof window&&document.documentElement.style.setProperty("--line-color",l),i.default.createElement("div",{className:(0,o.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===r,"vertical-timeline--one-column-left":"1-column"===r||"1-column-left"===r,"vertical-timeline--one-column-right":"1-column-right"===r})},a)};a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:r.default.string};var s=a;t.A=s},3695:(e,t,n)=>{t.A=void 0;var i=a(n(5043)),r=a(n(5173)),o=a(n(8139)),l=n(4687);function a(e){return e&&e.__esModule?e:{default:e}}const s=e=>{let{children:t="",className:n="",contentArrowStyle:r=null,contentStyle:a=null,date:s="",dateClassName:u="",icon:c=null,iconClassName:d="",iconOnClick:f=null,onTimelineElementClick:p=null,iconStyle:h=null,id:m="",position:v="",style:y=null,textClassName:b="",intersectionObserverProps:g={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:w=!1}=e;return i.default.createElement(l.InView,g,(e=>{let{inView:l,ref:g}=e;return i.default.createElement("div",{ref:g,id:m,className:(0,o.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:y},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:h,onClick:f,className:(0,o.default)(d,"vertical-timeline-element-icon",{"bounce-in":l||w,"is-hidden":!(l||w)})},c),i.default.createElement("div",{style:a,onClick:p,className:(0,o.default)(b,"vertical-timeline-element-content",{"bounce-in":l||w,"is-hidden":!(l||w)})},i.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,o.default)(u,"vertical-timeline-element-date")},s))))}))};s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})};var u=s;t.A=u},4120:(e,t,n)=>{e.exports={VerticalTimeline:n(8455).A,VerticalTimelineElement:n(3695).A}},4687:(e,t,n)=>{n.r(t),n.d(t,{InView:()=>m,default:()=>m,defaultFallbackInView:()=>c,observe:()=>f,useInView:()=>v});var i=n(5043);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var l=new Map,a=new WeakMap,s=0,u=void 0;function c(e){u=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t]);var n})).toString()}function f(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i=u),"undefined"===typeof window.IntersectionObserver&&void 0!==i){var r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var o=function(e){var t=d(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),a=o.id,s=o.observer,c=o.elements,f=c.get(e)||[];return c.has(e)||c.set(e,f),f.push(t),s.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),l.delete(a))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!==typeof e.children}var m=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),h(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=l.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:o},l)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,p);return i.createElement(a||"div",r({ref:this.handleNode},s),l)},l}(i.Component);function v(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,c=t.initialInView,d=t.fallbackInView,p=i.useRef(),h=i.useState({inView:!!c}),m=h[0],v=h[1],y=i.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),u||e&&(p.current=f(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:r},d))}),[Array.isArray(n)?n.toString():n,a,l,s,u,o,d,r]);(0,i.useEffect)((function(){p.current||!m.entry||s||u||v({inView:!!c})}));var b=[y,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}m.displayName="InView",m.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},6459:()=>{}}]);
//# sourceMappingURL=380.8633fcb5.chunk.js.map