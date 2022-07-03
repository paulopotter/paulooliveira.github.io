(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",a="minute",o="hour",s="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),a=n-r<0,o=e.clone().add(i+(a?-1:1),c);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:s,D:h,h:o,m:a,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=p;var b=function(t){return t instanceof x},w=function t(e,n,i){var r;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(r=a),n&&(y[a]=n,r=a);var o=e.split("-");if(!r&&o.length>1)return t(o[0])}else{var s=e.name;y[s]=e,r=s}return!i&&r&&($=r),r||!i&&$},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},D=_;D.l=w,D.i=b,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,i=!!D.u(e)||e,l=D.p(t),f=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(s)},m=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case d:return i?f(1,0):f(31,11);case c:return i?f(1,p):f(0,p+1);case u:var $=this.$locale().weekStart||0,y=(g<$?g+7:g)-$;return f(i?v-y:v+(6-y),p);case s:case h:return m(_+"Hours",0);case o:return m(_+"Minutes",1);case a:return m(_+"Seconds",2);case r:return m(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,u=D.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[s]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[o]=l+"Hours",n[a]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[u],m=u===s?this.$D+(e-this.$W):e;if(u===c||u===d){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(i,l){var h,f=this;i=Number(i);var m=D.p(l),g=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===s)return g(1);if(m===u)return g(7);var p=(h={},h[a]=e,h[o]=n,h[r]=t,h)[m]||1,v=this.$d.getTime()+i*p;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),a=this.$H,o=this.$m,s=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,a){return t&&(t[n]||t(e,i))||r[n].slice(0,a)},d=function(t){return D.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:l(n.monthsShort,s,c,3),MMMM:l(c,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,h,f){var m,g=D.p(h),p=M(i),v=(p.utcOffset()-this.utcOffset())*e,_=this-p,$=D.m(this,p);return $=(m={},m[d]=$/12,m[c]=$,m[l]=$/3,m[u]=(_-v)/6048e5,m[s]=(_-v)/864e5,m[o]=_/n,m[a]=_/e,m[r]=_/t,m)[g]||_,f?$:D.a($)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),S=x.prototype;return M.prototype=S,[["$ms",i],["$s",r],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,x,M),t.$i=!0),M},M.locale=w,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=y[$],M.Ls=y,M.p={},M}()},57548:function(t,e,n){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),i={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(t){return t+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return n.default.locale(i,null,!0),i}(n(27484))},48312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(35970)}])},35970:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return p}});var i=n(85893),r=n(67294),a=n(94184),o=n.n(a),s=n(41664),u=n.n(s),c=n(27484),l=n.n(c),d=(n(57548),n(86899)),h=n(98176),f=n(6930),m=n(39045);l().locale("pt-br");var g=!0;function p(t){var e=t.posts,n=function(t,e){var n,r;if(0===t)return(0,i.jsxs)("div",{className:"home_content__article-body-summary",children:[(0,i.jsx)("br",{}),(0,i.jsx)(m.D,{skipHtml:!0,children:null!==(r=e.summary)&&void 0!==r?r:null===e||void 0===e||null===(n=e.content)||void 0===n?void 0:n.slice(0,140)})]})},a=(0,r.useContext)(f.ThemeContext).isDarkTheme,s=(0,h.tJ)({isDarkTheme:a});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Fb,{}),(0,i.jsx)("section",{className:s.content,children:null===e||void 0===e?void 0:e.map((function(t,e){return(0,i.jsxs)("article",{className:o()(s.article,(r={},a=s.articleFirst,c=0===e,a in r?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[a]=c,r)),children:[(0,i.jsxs)("div",{className:s.articleContent,children:[(0,i.jsx)("header",{children:(0,i.jsx)(u(),{href:"".concat(t.slug),children:(0,i.jsx)("a",{className:s.titleLink,children:0===e?t.title:t.title.lenght>70?t.title.slice(0,70)+"...":t.title})})}),n(e,t),(0,i.jsx)("footer",{className:s.category,children:(0,i.jsx)("span",{"aria-label":"Data de pulica\xe7\xe3o:",children:l()(t.date,"YYYY-MM-DD","pt",!0).format("DD MMM YYYY").toString()})})]}),(null===t||void 0===t?void 0:t.cover_image)&&(0,i.jsx)("a",{href:"".concat(t.slug),className:s.imageLink,children:(0,i.jsx)("img",{className:s.imageCover,src:"".concat(null===t||void 0===t?void 0:t.cover_image),alt:"".concat((null===t||void 0===t?void 0:t.cover_image_alt)||(null===t||void 0===t?void 0:t.title)||""),height:e>1?"144":"500",width:e>1?"144":"500"})})]},e);var r,a,c}))})]})}},98176:function(t,e,n){"use strict";n.d(e,{LZ:function(){return u},u9:function(){return c},tJ:function(){return d}});var i,r=n(92846),a=n(7155);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s,u=(0,r.QM)({content:function(t){var e=t.isDarkTheme;return{margin:"1rem .5rem",padding:"1rem",backgroundColor:(0,a.WX)(e,"card"),boxShadow:"0.13em 0.13em 0.25em 0 ".concat((0,a.WX)(e,"boxShadow"))}},img:(i={borderRadius:"15%",display:"block",margin:"0 1em 1em"},o(i,"display","inline-block"),o(i,"float","right"),o(i,"verticalAlign","top"),i),name:function(t){t.isDarkTheme;return{fontSize:"1.2em",fontWeight:"bold"}},highlight:function(t){t.isDarkTheme;return{fontSize:"1.1em",fontWeight:"bold"}},section:{marginTop:"1em",paddingLeft:"1em",paddingRight:"1em"},sectionDivision:{clear:"both"},socialList:function(t){var e=t.isDarkTheme;return{color:(0,a.WX)(e,"heading"),"font-size":"2em"}},socialItem:function(t){var e=t.isDarkTheme;return{color:(0,a.WX)(e,"link"),"font-size":"1em",display:"inline-block",margin:"0.2em"}},socialIcon:function(t){var e=t.isDarkTheme;return{fill:(0,a.WX)(e,"text"),"&:hover":{fill:(0,a.WX)(e,"link")}}},timeline:{borderLeft:"2px solid"},timelineMark:{listStyle:"inside disclosure-closed",padding:"1em 0","&:first-of-type":{padding:0}},timelineDate:{fontWeight:"bold"},timelineContent:{display:"block",paddingLeft:"1em"},timelineJobTitle:{fontSize:"1.2em"},timelineCompany:{fontStyle:"italic"},languageIcon:{width:"4em !important",height:"4em !important"}}),c=(0,r.QM)({messageTitle:function(t){t.isDarkTheme;return{fontFamily:a.nb.secondary,fontSize:"2em",textAlign:"center",marginTop:"25%"}}});function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=(0,r.QM)({content:{display:"flex","flex-direction":"row","flex-wrap":"wrap","justify-content":"center"},article:function(t){var e,n=t.isDarkTheme;return l(e={display:"flex","justify-content":"space-between",margin:"2em 1em","max-width":"50%","min-height":150,padding:"1em",position:"relative",width:"45%","background-color":(0,a.WX)(n,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(n,"boxShadow"))},"@media (max-width: ".concat(a.qk.small,")"),{margin:".5em 0"}),l(e,"@media (max-width: ".concat(a.qk.medium,")"),{"max-width":"inherit",width:"100%"}),e},articleFirst:{margin:"2em 1em","flex-direction":"column-reverse","min-width":"100%",width:"100%"},articleContent:(s={display:"flex","flex-direction":"column","justify-content":"space-between",width:"calc(100% - 13em)"},l(s,"@media (max-width: ".concat(a.qk.small,")"),{width:"100%"}),l(s,"$articleFirst &",{width:"100%"}),s),titleLink:function(t){var e=t.isDarkTheme;return{"font-family":a.nb.primary,"font-size":"1.1em","font-weight":"bold","line-height":1,"letter-spacing":"-0.5px",color:(0,a.WX)(e,"text"),"&:visited, &:focus":{color:(0,a.WX)(e,"text")}}},category:function(t){var e=t.isDarkTheme;return{"margin-top":"2em","font-weight":700,"font-size":"0.8125em","text-transform":"capitalize",color:(0,a.WX)(e,"dated")}},imageLink:l({display:"block","$articleFirst &":{position:"relative",width:"100%",height:"15em",padding:0,margin:"0 0 2em",display:"block"}},"@media (max-width: ".concat(a.qk.small,")"),{display:"none"}),imageCover:function(t){var e=t.isDarkTheme;return{height:"11em","object-fit":"cover",padding:"1em",position:"absolute",right:0,top:"-0.8em",width:"11em","background-color":(0,a.WX)(e,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(e,"boxShadow")," "),"$articleFirst &":{"background-color":"inherit","box-shadow":"inherit",height:"15em",width:"100%",top:0,left:0,position:"relative",display:"block",padding:0}}}});n(69260),n(28474)}},function(t){t.O(0,[774,888,179],(function(){return e=48312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);