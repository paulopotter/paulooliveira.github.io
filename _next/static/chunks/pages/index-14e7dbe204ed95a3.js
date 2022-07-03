(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",a="minute",s="hour",o="day",u="week",c="month",d="quarter",l="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),a=n-r<0,s=e.clone().add(i+(a?-1:1),c);return+(-(i+(n-r)/(a?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:h,h:s,m:a,s:r,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",M={};M[$]=v;var w=function(t){return t instanceof b},y=function t(e,n,i){var r;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();M[a]&&(r=a),n&&(M[a]=n,r=a);var s=e.split("-");if(!r&&s.length>1)return t(s[0])}else{var o=e.name;M[o]=e,r=o}return!i&&r&&($=r),r||!i&&$},x=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},D=_;D.l=y,D.i=w,D.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function v(t){this.$L=y(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return x(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<x(t)},p.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!D.u(e)||e,d=D.p(t),f=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,v=this.$M,p=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case l:return i?f(1,0):f(31,11);case c:return i?f(1,v):f(0,v+1);case u:var $=this.$locale().weekStart||0,M=(g<$?g+7:g)-$;return f(i?p-M:p+(6-M),v);case o:case h:return m(_+"Hours",0);case s:return m(_+"Minutes",1);case a:return m(_+"Seconds",2);case r:return m(_+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=D.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[s]=d+"Hours",n[a]=d+"Minutes",n[r]=d+"Seconds",n[i]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[D.p(t)]()},p.add=function(i,d){var h,f=this;i=Number(i);var m=D.p(d),g=function(t){var e=x(f);return D.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===o)return g(1);if(m===u)return g(7);var v=(h={},h[a]=e,h[s]=n,h[r]=t,h)[m]||1,p=this.$d.getTime()+i*v;return D.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),a=this.$H,s=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=function(t,n,r,a){return t&&(t[n]||t(e,i))||r[n].slice(0,a)},l=function(t){return D.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:D.s(a,2,"0"),h:l(1),hh:l(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,f){var m,g=D.p(h),v=x(i),p=(v.utcOffset()-this.utcOffset())*e,_=this-v,$=D.m(this,v);return $=(m={},m[l]=$/12,m[c]=$,m[d]=$/3,m[u]=(_-p)/6048e5,m[o]=(_-p)/864e5,m[s]=_/n,m[a]=_/e,m[r]=_/t,m)[g]||_,f?$:D.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return M[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=y(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),S=b.prototype;return x.prototype=S,[["$ms",i],["$s",r],["$m",a],["$H",s],["$W",o],["$M",c],["$y",l],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,b,x),t.$i=!0),x},x.locale=y,x.isDayjs=w,x.unix=function(t){return x(1e3*t)},x.en=M[$],x.Ls=M,x.p={},x}()},57548:function(t,e,n){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),i={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(t){return t+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return n.default.locale(i,null,!0),i}(n(27484))},48312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(35970)}])},35970:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return v}});var i=n(85893),r=n(67294),a=n(94184),s=n.n(a),o=n(41664),u=n.n(o),c=n(27484),d=n.n(c),l=(n(57548),n(28212)),h=n(98176),f=n(6930),m=n(39045);d().locale("pt-br");var g=!0;function v(t){var e=t.posts,n=function(t,e){var n,r;if(0===t)return(0,i.jsxs)("div",{className:"home_content__article-body-summary",children:[(0,i.jsx)("br",{}),(0,i.jsx)(m.D,{skipHtml:!0,children:null!==(r=e.summary)&&void 0!==r?r:null===e||void 0===e||null===(n=e.content)||void 0===n?void 0:n.slice(0,140)})]})},a=(0,r.useContext)(f.ThemeContext).isDarkTheme,o=(0,h.tJ)({isDarkTheme:a});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Fb,{}),(0,i.jsx)("section",{className:o.content,children:null===e||void 0===e?void 0:e.map((function(t,e){return(0,i.jsxs)("article",{className:s()(o.article,(r={},a=o.articleFirst,c=0===e,a in r?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[a]=c,r)),children:[(0,i.jsxs)("div",{className:o.articleContent,children:[(0,i.jsx)("header",{children:(0,i.jsx)(u(),{href:"".concat(t.slug),children:(0,i.jsx)("a",{className:o.titleLink,children:0===e?t.title:t.title.lenght>70?t.title.slice(0,70)+"...":t.title})})}),n(e,t),(0,i.jsx)("footer",{className:o.category,children:(0,i.jsx)("span",{"aria-label":"Data de pulica\xe7\xe3o:",children:d()(t.date,"YYYY-MM-DD","pt",!0).format("DD MMM YYYY").toString()})})]}),(null===t||void 0===t?void 0:t.cover_image)&&(0,i.jsx)("a",{href:"".concat(t.slug),className:o.imageLink,children:(0,i.jsx)("img",{className:o.imageCover,src:"".concat(null===t||void 0===t?void 0:t.cover_image),alt:"".concat((null===t||void 0===t?void 0:t.cover_image_alt)||(null===t||void 0===t?void 0:t.title)||""),height:e>1?"144":"500",width:e>1?"144":"500"})})]},e);var r,a,c}))})]})}},98176:function(t,e,n){"use strict";n.d(e,{LZ:function(){return s},u9:function(){return o},tJ:function(){return c}});var i,r=n(92846),a=n(7155),s=(0,r.QM)({content:function(t){var e=t.isDarkTheme;return{margin:"1rem .5rem",padding:"1rem 0",backgroundColor:(0,a.WX)(e,"card"),boxShadow:"0.13em 0.13em 0.25em 0 ".concat((0,a.WX)(e,"boxShadow"))}}}),o=(0,r.QM)({messageTitle:function(t){t.isDarkTheme;return{fontFamily:a.nb.secondary,fontSize:"2em",textAlign:"center",marginTop:"25%"}}});function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=(0,r.QM)({content:{display:"flex","flex-direction":"row","flex-wrap":"wrap","justify-content":"center"},article:function(t){var e,n=t.isDarkTheme;return u(e={display:"flex","justify-content":"space-between",margin:"2em 1em","max-width":"50%","min-height":150,padding:"1em",position:"relative",width:"45%","background-color":(0,a.WX)(n,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(n,"boxShadow"))},"@media (max-width: ".concat(a.qk.small,")"),{margin:".5em 0"}),u(e,"@media (max-width: ".concat(a.qk.medium,")"),{"max-width":"inherit",width:"100%"}),e},articleFirst:{margin:"2em 1em","flex-direction":"column-reverse","min-width":"100%",width:"100%"},articleContent:(i={display:"flex","flex-direction":"column","justify-content":"space-between",width:"calc(100% - 13em)"},u(i,"@media (max-width: ".concat(a.qk.small,")"),{width:"100%"}),u(i,"$articleFirst &",{width:"100%"}),i),titleLink:function(t){var e=t.isDarkTheme;return{"font-family":a.nb.primary,"font-size":"1.1em","font-weight":"bold","line-height":1,"letter-spacing":"-0.5px",color:(0,a.WX)(e,"text"),"&:visited, &:focus":{color:(0,a.WX)(e,"text")}}},category:function(t){var e=t.isDarkTheme;return{"margin-top":"2em","font-weight":700,"font-size":"0.8125em","text-transform":"capitalize",color:(0,a.WX)(e,"dated")}},imageLink:u({display:"block","$articleFirst &":{position:"relative",width:"100%",height:"15em",padding:0,margin:"0 0 2em",display:"block"}},"@media (max-width: ".concat(a.qk.small,")"),{display:"none"}),imageCover:function(t){var e=t.isDarkTheme;return{height:"11em","object-fit":"cover",padding:"1em",position:"absolute",right:0,top:"-0.8em",width:"11em","background-color":(0,a.WX)(e,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(e,"boxShadow")," "),"$articleFirst &":{"background-color":"inherit","box-shadow":"inherit",height:"15em",width:"100%",top:0,left:0,position:"relative",display:"block",padding:0}}}});n(69260),n(28474)}},function(t){t.O(0,[774,888,179],(function(){return e=48312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);