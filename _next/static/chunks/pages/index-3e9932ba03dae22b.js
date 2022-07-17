(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,n="millisecond",r="second",a="minute",o="hour",s="day",u="week",c="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},_={s:v,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),r=i%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(r,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),r=e.clone().add(n,c),a=i-r<0,o=e.clone().add(n+(a?-1:1),c);return+(-(n+(i-r)/(a?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:s,D:h,h:o,m:a,s:r,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=p;var w=function(t){return t instanceof D},M=function t(e,i,n){var r;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(r=a),i&&(y[a]=i,r=a);var o=e.split("-");if(!r&&o.length>1)return t(o[0])}else{var s=e.name;y[s]=e,r=s}return!n&&r&&($=r),r||!n&&$},b=function(t,e){if(w(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new D(i)},x=_;x.l=M,x.i=w,x.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var r=n[2]-1||0,a=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return x},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var i=b(t);return this.startOf(e)<=i&&i<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,i){return x.u(t)?this[e]:this.set(i,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var i=this,n=!!x.u(e)||e,l=x.p(t),f=function(t,e){var r=x.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?r:r.endOf(s)},m=function(t,e){return x.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},g=this.$W,p=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case d:return n?f(1,0):f(31,11);case c:return n?f(1,p):f(0,p+1);case u:var $=this.$locale().weekStart||0,y=(g<$?g+7:g)-$;return f(n?v-y:v+(6-y),p);case s:case h:return m(_+"Hours",0);case o:return m(_+"Minutes",1);case a:return m(_+"Seconds",2);case r:return m(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var i,u=x.p(t),l="set"+(this.$u?"UTC":""),f=(i={},i[s]=l+"Date",i[h]=l+"Date",i[c]=l+"Month",i[d]=l+"FullYear",i[o]=l+"Hours",i[a]=l+"Minutes",i[r]=l+"Seconds",i[n]=l+"Milliseconds",i)[u],m=u===s?this.$D+(e-this.$W):e;if(u===c||u===d){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[x.p(t)]()},v.add=function(n,l){var h,f=this;n=Number(n);var m=x.p(l),g=function(t){var e=b(f);return x.w(e.date(e.date()+Math.round(t*n)),f)};if(m===c)return this.set(c,this.$M+n);if(m===d)return this.set(d,this.$y+n);if(m===s)return g(1);if(m===u)return g(7);var p=(h={},h[a]=e,h[o]=i,h[r]=t,h)[m]||1,v=this.$d.getTime()+n*p;return x.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),a=this.$H,o=this.$m,s=this.$M,u=i.weekdays,c=i.months,l=function(t,i,r,a){return t&&(t[i]||t(e,n))||r[i].slice(0,a)},d=function(t){return x.s(a%12||12,t,"0")},h=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:l(i.monthsShort,s,c,3),MMMM:l(c,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,u,2),ddd:l(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:x.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return n.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,f){var m,g=x.p(h),p=b(n),v=(p.utcOffset()-this.utcOffset())*e,_=this-p,$=x.m(this,p);return $=(m={},m[d]=$/12,m[c]=$,m[l]=$/3,m[u]=(_-v)/6048e5,m[s]=(_-v)/864e5,m[o]=_/i,m[a]=_/e,m[r]=_/t,m)[g]||_,f?$:x.a($)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=M(t,e,!0);return n&&(i.$L=n),i},v.clone=function(){return x.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),S=D.prototype;return b.prototype=S,[["$ms",n],["$s",r],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,D,b),t.$i=!0),b},b.locale=M,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=y[$],b.Ls=y,b.p={},b}()},7548:function(t,e,i){t.exports=function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=e(t),n={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(t){return t+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return i.default.locale(n,null,!0),n}(i(7484))},8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5970)}])},5970:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return $},default:function(){return y}});var n=i(5893),r=i(7294),a=i(4184),o=i.n(a),s=i(1664),u=i.n(s),c=i(7484),l=i.n(c),d=(i(7548),i(9045)),h=i(1532),f=i(7750),m=i(8176),g=i(6930);var p=h.Z.DATE_DEFAULT_FORMAT,v=h.Z.DEFAULT_LANG,_=h.Z.POST_DATE_FORMAT;l().locale(v.toLowerCase());var $=!0;function y(t){var e=t.posts,i=function(t,e){var i,r;if(0===t)return(0,n.jsx)("div",{className:"home_content__article-body-summary",children:(0,n.jsx)(d.D,{skipHtml:!0,children:null!==(r=e.summary)&&void 0!==r?r:null===e||void 0===e||null===(i=e.content)||void 0===i?void 0:i.slice(0,140)})})},a=(0,r.useContext)(g.ThemeContext).isDarkTheme,s=(0,m.tJ)({isDarkTheme:a});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Fb,{}),(0,n.jsx)("section",{className:s.content,children:null===e||void 0===e?void 0:e.map((function(t,e){return(0,n.jsxs)("article",{className:o()(s.article,(r={},a=s.articleFirst,c=0===e,a in r?Object.defineProperty(r,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[a]=c,r)),children:[(0,n.jsxs)("div",{className:s.articleContent,children:[(0,n.jsx)("header",{children:(0,n.jsx)(u(),{href:"".concat(t.slug),children:(0,n.jsx)("a",{className:s.titleLink,children:0===e?t.title:t.title.lenght>70?t.title.slice(0,70)+"...":t.title})})}),i(e,t),(0,n.jsx)("footer",{className:s.category,children:(0,n.jsx)("span",{"aria-label":"Data de pulica\xe7\xe3o:",children:l()(t.date,p,"pt",!0).format(_).toString()})})]}),(null===t||void 0===t?void 0:t.cover_image)&&(0,n.jsx)("a",{href:"".concat(t.slug),className:s.imageLink,tabIndex:-1,children:(0,n.jsx)("img",{className:s.imageCover,src:"".concat(null===t||void 0===t?void 0:t.cover_image),alt:"".concat((null===t||void 0===t?void 0:t.cover_image_alt)||(null===t||void 0===t?void 0:t.title)||""),height:e>1?"144":"500",width:e>1?"144":"500"})})]},e);var r,a,c}))})]})}},8176:function(t,e,i){"use strict";i.d(e,{LZ:function(){return o},u9:function(){return s},tJ:function(){return c}});var n,r=i(2846),a=i(7155),o=(0,r.QM)({content:function(t){var e=t.isDarkTheme;return{margin:"1rem .5rem",padding:"1rem",backgroundColor:(0,a.WX)(e,"card"),boxShadow:"0.13em 0.13em 0.25em 0 ".concat((0,a.WX)(e,"boxShadow"))}},img:{borderRadius:"15%",margin:"0 1em 1em",display:"inline-block",float:"right",verticalAlign:"top"},name:{fontSize:"1.2em",fontWeight:"bold"},highlight:{fontSize:"1.1em",fontWeight:"bold"},section:{marginTop:"1em",paddingLeft:"1em",paddingRight:"1em"},sectionDivision:{clear:"both"},socialList:function(t){var e=t.isDarkTheme;return{color:(0,a.WX)(e,"heading"),"font-size":"2em"}},socialItem:function(t){var e=t.isDarkTheme;return{color:(0,a.WX)(e,"link"),"font-size":"1em",display:"inline-block",margin:"0.2em"}},socialIcon:function(t){var e=t.isDarkTheme;return{fill:(0,a.WX)(e,"text"),"&:hover":{fill:(0,a.WX)(e,"link")}}},timeline:{borderLeft:"2px solid"},timelineMark:{listStyle:"inside disclosure-closed",padding:"1em 0","&:first-of-type":{padding:0}},timelineDate:{fontWeight:"bold"},timelineContent:{display:"block",paddingLeft:"1em"},timelineJobTitle:{fontSize:"1.2em"},timelineCompany:{fontStyle:"italic"},languageIcon:{width:"4em !important",height:"4em !important"}}),s=(0,r.QM)({messageTitle:{fontFamily:a.nb.secondary,fontSize:"2em",textAlign:"center",marginTop:"25%"}});function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=(0,r.QM)({content:{display:"flex","flex-direction":"row","flex-wrap":"wrap","justify-content":"center"},article:function(t){var e,i=t.isDarkTheme;return u(e={display:"flex","justify-content":"space-between",margin:"2em 1em","max-width":"50%","min-height":150,padding:"1em",position:"relative",width:"45%","background-color":(0,a.WX)(i,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(i,"boxShadow"))},"@media (max-width: ".concat(a.qk.small,")"),{margin:".5em 0"}),u(e,"@media (max-width: ".concat(a.qk.medium,")"),{"max-width":"inherit",width:"100%"}),e},articleFirst:{margin:"2em 1em","flex-direction":"column-reverse","min-width":"100%",width:"100%"},articleContent:(n={display:"flex","flex-direction":"column","justify-content":"space-between",width:"calc(100% - 13em)"},u(n,"@media (max-width: ".concat(a.qk.small,")"),{width:"100%"}),u(n,"$articleFirst &",{width:"100%"}),n),titleLink:function(t){var e=t.isDarkTheme;return{"font-family":a.nb.primary,"font-size":"1.1em","font-weight":"bold","line-height":1,"letter-spacing":"-0.5px",color:(0,a.WX)(e,"text"),"&:visited, &:focus":{color:(0,a.WX)(e,"text")}}},category:function(t){var e=t.isDarkTheme;return{"margin-top":"2em","font-weight":700,"font-size":"0.8125em","text-transform":"capitalize",color:(0,a.WX)(e,"dated")}},imageLink:u({display:"block","$articleFirst &":{position:"relative",width:"100%",height:"15em",padding:0,margin:"0 0 1em",display:"block"}},"@media (max-width: ".concat(a.qk.small,")"),{display:"none"}),imageCover:function(t){var e=t.isDarkTheme;return{height:"11em","object-fit":"cover",padding:"1em",position:"absolute",right:0,top:"-0.8em",width:"11em","background-color":(0,a.WX)(e,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,a.WX)(e,"boxShadow")," "),"$articleFirst &":{"background-color":"inherit","box-shadow":"inherit",height:"15em",width:"100%",top:0,left:0,position:"relative",display:"block",padding:0}}}});i(9260),i(8474)}},function(t){t.O(0,[774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);