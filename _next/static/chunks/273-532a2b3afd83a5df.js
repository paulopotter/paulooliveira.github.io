(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,i=36e5,n="millisecond",a="second",s="minute",r="hour",o="day",l="week",c="month",d="quarter",u="year",m="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,i){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(i)+e},x={s:v,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),n=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var n=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(n,c),s=i-a<0,r=t.clone().add(n+(s?-1:1),c);return+(-(n+(i-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:o,D:m,h:r,m:s,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var y=function(e){return e instanceof D},_=function e(t,i,n){var a;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();$[s]&&(a=s),i&&($[s]=i,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var o=t.name;$[o]=t,a=o}return!n&&a&&(b=a),a||!n&&b},j=function(e,t){if(y(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new D(i)},M=x;M.l=_,M.i=y,M.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=_(e.locale,null,!0),this.parse(e)}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var i=j(e);return this.startOf(t)<=i&&i<=this.endOf(t)},v.isAfter=function(e,t){return j(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<j(e)},v.$g=function(e,t,i){return M.u(e)?this[t]:this.set(i,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var i=this,n=!!M.u(t)||t,d=M.p(e),h=function(e,t){var a=M.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return n?a:a.endOf(o)},f=function(e,t){return M.w(i.toDate()[e].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},p=this.$W,g=this.$M,v=this.$D,x="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return h(n?v-$:v+(6-$),g);case o:case m:return f(x+"Hours",0);case r:return f(x+"Minutes",1);case s:return f(x+"Seconds",2);case a:return f(x+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var i,l=M.p(e),d="set"+(this.$u?"UTC":""),h=(i={},i[o]=d+"Date",i[m]=d+"Date",i[c]=d+"Month",i[u]=d+"FullYear",i[r]=d+"Hours",i[s]=d+"Minutes",i[a]=d+"Seconds",i[n]=d+"Milliseconds",i)[l],f=l===o?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(m,1);p.$d[h](f),p.init(),this.$d=p.set(m,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(n,d){var m,h=this;n=Number(n);var f=M.p(d),p=function(e){var t=j(h);return M.w(t.date(t.date()+Math.round(e*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===o)return p(1);if(f===l)return p(7);var g=(m={},m[s]=t,m[r]=i,m[a]=e,m)[f]||1,v=this.$d.getTime()+n*g;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),s=this.$H,r=this.$m,o=this.$M,l=i.weekdays,c=i.months,d=function(e,i,a,s){return e&&(e[i]||e(t,n))||a[i].slice(0,s)},u=function(e){return M.s(s%12||12,e,"0")},m=i.meridiem||function(e,t,i){var n=e<12?"AM":"PM";return i?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,l,2),ddd:d(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(s),HH:M.s(s,2,"0"),h:u(1),hh:u(2),a:m(s,r,!0),A:m(s,r,!1),m:String(r),mm:M.s(r,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:a};return n.replace(p,(function(e,t){return t||f[e]||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,m,h){var f,p=M.p(m),g=j(n),v=(g.utcOffset()-this.utcOffset())*t,x=this-g,b=M.m(this,g);return b=(f={},f[u]=b/12,f[c]=b,f[d]=b/3,f[l]=(x-v)/6048e5,f[o]=(x-v)/864e5,f[r]=x/i,f[s]=x/t,f[a]=x/e,f)[p]||x,h?b:M.a(b)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),n=_(e,t,!0);return n&&(i.$L=n),i},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),w=D.prototype;return j.prototype=w,[["$ms",n],["$s",a],["$m",s],["$H",r],["$W",o],["$M",c],["$y",u],["$D",m]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),j.extend=function(e,t){return e.$i||(e(t,D,j),e.$i=!0),j},j.locale=_,j.isDayjs=y,j.unix=function(e){return j(1e3*e)},j.en=$[b],j.Ls=$,j.p={},j}()},7548:function(e,t,i){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(e),n={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return i.default.locale(n,null,!0),n}(i(7484))},5273:function(e,t,i){"use strict";i.d(t,{iS:function(){return b},ug:function(){return T},TY:function(){return C}});var n=i(5893),a=i(7294),s=i(4184),r=i.n(s),o=i(7484),l=i.n(o),c=(i(7548),i(1288)),d=i(2732),u=i(2370),m=i(2846),h=i(3206),f=(0,m.QM)({content:function(e){var t=e.isDarkTheme;return{margin:"1rem .5rem",padding:"1rem",backgroundColor:(0,h.WX)(t,"card"),boxShadow:"0.13em 0.13em 0.25em 0 ".concat((0,h.WX)(t,"boxShadow"))}},img:{borderRadius:"15%",margin:"0 1em 1em",display:"inline-block",float:"right",verticalAlign:"top"},name:{fontSize:"1.2em",fontWeight:"bold"},highlight:{fontSize:"1.1em",fontWeight:"bold"},section:{marginTop:"1em",paddingLeft:"1em",paddingRight:"1em"},sectionDivision:{clear:"both"},socialList:function(e){var t=e.isDarkTheme;return{color:(0,h.WX)(t,"heading"),"font-size":"2em"}},socialItem:function(e){var t=e.isDarkTheme;return{color:(0,h.WX)(t,"link"),"font-size":"1em",display:"inline-block",margin:"0.2em",width:"35px",height:"35px",verticalAlign:"bottom"}},socialIcon:function(e){var t=e.isDarkTheme;return{fill:(0,h.WX)(t,"text"),"&:hover":{fill:(0,h.WX)(t,"link")}}},timeline:{borderLeft:"2px solid"},timelineMark:{listStyle:"inside disclosure-closed",padding:"1em 0","&:first-of-type":{padding:0}},timelineDate:{fontWeight:"bold"},timelineContent:{display:"block",paddingLeft:"1em"},timelineJobTitle:{fontSize:"1.2em"},timelineCompany:{fontStyle:"italic"},languageIcon:{width:"4em !important",height:"4em !important"}}),p=i(7260);l().locale("pt-br");var g=u.Z.AUTHOR_IMG,v=u.Z.SOCIAL,x=u.Z.SITE_URL;function b(){var e=(0,a.useContext)(p.ThemeContext).isDarkTheme,t=f({isDarkTheme:e}),i=l()().diff("2013-10-01","year",!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Fb,{}),(0,n.jsxs)("section",{className:t.content,children:[(0,n.jsx)("img",{src:"".concat(g,"?s=250"),alt:"Foto do meu rosto.",width:"250",height:"250",className:r()(t.img),id:"authorImage"}),(0,n.jsxs)("p",{className:r()(t.section),children:["Ol\xe1, me chamo ",(0,n.jsx)("span",{className:null===t||void 0===t?void 0:t.name,children:"Paulo Oliveira"})," e sou ",(0,n.jsxs)("span",{className:t.highlight,children:["desenvolvedor no ",(0,n.jsx)(d.rU,{href:"https://vemparaglobo.g.globo",children:"Grupo Globo"})," h\xe1 ",i," anos"]}),". ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),"Criei o ",(0,n.jsx)(d.rU,{href:"/",children:"um dev qualquer"})," com o intuito de compartilhar os meus conhecimentos e guardar o meu aprendizado de uma forma estruturada. Sou apaixonado por tecnologia e entusiasta das novidades. ",(0,n.jsx)("br",{}),"Hoje estou focado no desenvolvimento de APPs para ",(0,n.jsx)("span",{className:t.highlight,children:"Smart TV, Acessibilidade"})," e ",(0,n.jsx)("abbr",{title:"Developer eXperience",className:t.highlight,children:"DX"}),"."]}),(0,n.jsxs)("section",{className:r()(t.section),children:[(0,n.jsx)("span",{children:"Entre em contato comigo!"}),(0,n.jsx)("ul",{className:t.socialList,children:null===v||void 0===v?void 0:v.map((function(e,i){var a=c[e.name];return(0,n.jsx)("li",{className:t.socialItem,children:(0,n.jsx)(d.rU,{href:e.url,title:e.name,disableIcon:!0,children:"calendly"===e.name.toLowerCase()?(0,n.jsx)("img",{src:"".concat(x,"/images/icons/calendly-logo.png "),className:t.socialIcon,tabIndex:-1,alt:"".concat(e.name),title:"".concat(e.name)}):(0,n.jsx)(a,{className:t.socialIcon,tabIndex:-1,alt:"".concat(e.name),title:"".concat(e.name)})})},"".concat(e.name,"-").concat(i))}))})]}),(0,n.jsx)("section",{className:r()(t.section,t.sectionDivision),children:(0,n.jsxs)("ul",{className:t.timeline,children:[(0,n.jsxs)("li",{className:t.timelineMark,children:[(0,n.jsx)("span",{className:t.timelineDate,children:"2012"}),(0,n.jsxs)("p",{className:t.timelineContent,children:[(0,n.jsx)("span",{className:t.timelineJobTitle,children:"Est\xe1gio em Desenvolvimento"})," "," - ",(0,n.jsx)("span",{className:t.timelineCompany,children:"MSA RH Consultoria"})]}),(0,n.jsx)("p",{className:t.timelineContent,children:"Participei no desenvolvimento e manuten\xe7\xe3o do sistema de gerenciamento de est\xe1gi\xe1rios da Vale."})]}),(0,n.jsxs)("li",{className:t.timelineMark,children:[(0,n.jsx)("span",{className:t.timelineDate,children:"2013"}),(0,n.jsxs)("p",{className:t.timelineContent,children:[(0,n.jsx)("span",{className:t.timelineJobTitle,children:"Est\xe1gio em Desenvolvimento"})," "," - ",(0,n.jsx)("span",{className:t.timelineCompany,children:"Globo.com"})]}),(0,n.jsxs)("p",{className:t.timelineContent,children:["Participei na manuten\xe7\xe3o e desenvolvimento de features dos sites: ",(0,n.jsx)(d.rU,{href:"https://g1.globo.com",children:"G1"}),", ",(0,n.jsx)(d.rU,{href:"https://ge.globo.com/cartola/",children:"Cartola"})," e ",(0,n.jsx)(d.rU,{href:"https://ge.globo",children:"GE(Globoesporte)"}),"."]})]}),(0,n.jsxs)("li",{className:t.timelineMark,children:[(0,n.jsx)("span",{className:t.timelineDate,children:"2015 - Atual"}),(0,n.jsxs)("p",{className:t.timelineContent,children:[(0,n.jsx)("span",{className:t.timelineJobTitle,children:"Desenvolvedor"})," "," - ",(0,n.jsx)("span",{className:t.timelineCompany,children:"Grupo Globo (HUB digital / antiga globo.com)"})]}),(0,n.jsxs)("p",{className:t.timelineContent,children:["Participei na manuten\xe7\xe3o e desenvolvimento de features do site: ",(0,n.jsx)(d.rU,{href:"https://ge.globo",children:"GE(Globoesporte)"}),"."]}),(0,n.jsx)("p",{className:t.timelineContent,children:"Participei na manuten\xe7\xe3o e desenvolvimento de features do APP para Smart TVs: Canais globo (Antigo globosatplay) e Globoplay."}),(0,n.jsx)("p",{className:t.timelineContent,children:"Hoje atuo no time de pesquisa e desenvolvimento para a melhoria das APP de tv do Globoplay, tanto para o usu\xe1rio final quanto para os desenvolvedores."})]})]})})]})]})}var $,y=(0,m.QM)({content:{display:"flex","flex-direction":"row","flex-wrap":"wrap","justify-content":"center"}}),_=i(4924),j=i(5590),M=(0,m.QM)({article:function(e){var t,i=e.isDarkTheme;return t={display:"flex","justify-content":"space-between",margin:"2em 1em","max-width":"50%","min-height":150,padding:"1em",position:"relative",width:"45%","background-color":(0,h.WX)(i,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,h.WX)(i,"boxShadow"))},(0,_.Z)(t,"@media (max-width: ".concat(h.qk.small,")"),{margin:".5em 0","max-width":"100%",width:"100%"}),(0,_.Z)(t,"@media (max-width: ".concat(h.qk.medium,")"),{"max-width":"100%",width:"100%"}),t},articleFirst:{margin:"2em 1em","flex-direction":"column-reverse","min-width":"100%",width:"100%"},articleContent:($={display:"flex","flex-direction":"column","justify-content":"space-between",width:"calc(100% - 13em)"},(0,_.Z)($,"@media (max-width: ".concat(h.qk.small,")"),{width:"100%"}),(0,_.Z)($,"$articleFirst &",{width:"100%"}),$),titleLink:function(e){var t=e.isDarkTheme;return{"font-family":h.nb.primary,"font-size":"1.1em","font-weight":"bold","line-height":1,"letter-spacing":"-0.5px",color:(0,h.WX)(t,"text"),"&:visited, &:focus":{color:(0,h.WX)(t,"text")}}},category:function(e){var t=e.isDarkTheme;return{"margin-top":"2em","font-weight":700,"font-size":"0.8125em","text-transform":"capitalize",color:(0,h.WX)(t,"dated")}},imageLink:(0,_.Z)({display:"block","$articleFirst &":{position:"relative",width:"100%",height:"15em",padding:0,margin:"0 0 1em",display:"block"}},"@media (max-width: ".concat(h.qk.small,")"),{display:"none"}),imageCover:function(e){var t=e.isDarkTheme;return{height:"11em","object-fit":"cover",padding:"1em",position:"absolute",right:0,top:"-0.8em",width:"11em","background-color":(0,h.WX)(t,"card"),"box-shadow":"2px 2px 4px 0 ".concat((0,h.WX)(t,"boxShadow")," "),"$articleFirst &":{"background-color":"inherit","box-shadow":"inherit",height:"15em",width:"100%",top:0,left:0,position:"relative",display:"block",padding:0}}}}),D=u.Z.DATE_DEFAULT_FORMAT,w=u.Z.POST_DATE_FORMAT,S=u.Z.SITE_URL,k=function(e){var t,i,s=e.post,o=e.index,c=(0,a.useContext)(p.ThemeContext).isDarkTheme,u=M({isDarkTheme:c});return(0,n.jsxs)("article",{className:r()(u.article,(0,_.Z)({},u.articleFirst,0===o)),children:[(0,n.jsxs)("div",{className:u.articleContent,children:[(0,n.jsx)("header",{children:(0,n.jsx)(d.rU,{href:"".concat(S,"/").concat(s.slug),className:u.titleLink,children:0===o?null===s||void 0===s?void 0:s.title:(null===s||void 0===s||null===(t=s.title)||void 0===t?void 0:t.length)>70?s.title.slice(0,70)+"...":s.title})}),N({index:o,post:s}),(0,n.jsxs)("footer",{className:u.category,children:[(0,n.jsx)("span",{"aria-label":"Data de pulica\xe7\xe3o:",children:l()(s.date,D,"pt",!0).format(w).toString()})," ","-"," ",null===s||void 0===s||null===(i=s.category)||void 0===i?void 0:i.map((function(e,t,i){return(0,n.jsxs)("span",{children:[(0,n.jsx)(d.rU,{href:"/category/".concat(e.toLowerCase()),children:e.toUpperCase()}),t<i.length-1?" - ":null]},"".concat(o,"-category-").concat(t))}))]})]}),(null===s||void 0===s?void 0:s.cover_image)&&(0,n.jsx)("a",{href:"".concat(s.slug),className:u.imageLink,tabIndex:-1,children:(0,n.jsx)("img",{className:u.imageCover,src:"".concat(null===s||void 0===s?void 0:s.cover_image),alt:"".concat((null===s||void 0===s?void 0:s.cover_image_alt)||(null===s||void 0===s?void 0:s.title)||""),height:o>1?"144":"500",width:o>1?"144":"500"})})]},o)},N=function(e){var t,i,a,s=e.post;if(0===e.index)return(0,n.jsx)("div",{className:"home_content__article-body-summary",children:(0,n.jsx)(j.D,{skipHtml:!0,children:null!==(a=null===s||void 0===s?void 0:s.summary)&&void 0!==a?a:null===s||void 0===s||null===(t=s.content)||void 0===t||null===(i=t.slice)||void 0===i?void 0:i.call(t,0,140)})})};function T(e){var t=e.posts,i=y();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Fb,{}),(0,n.jsx)("section",{className:i.content,children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,n.jsx)(k,{post:e,index:t},t)}))})]})}var C=function(e){var t=e.post;return(0,n.jsx)(d.C2,{post:t})}}}]);