(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{475:function(j,e,n){var map={"./af":339,"./af.js":339,"./ar":340,"./ar-dz":341,"./ar-dz.js":341,"./ar-kw":342,"./ar-kw.js":342,"./ar-ly":343,"./ar-ly.js":343,"./ar-ma":344,"./ar-ma.js":344,"./ar-sa":345,"./ar-sa.js":345,"./ar-tn":346,"./ar-tn.js":346,"./ar.js":340,"./az":347,"./az.js":347,"./be":348,"./be.js":348,"./bg":349,"./bg.js":349,"./bm":350,"./bm.js":350,"./bn":351,"./bn-bd":352,"./bn-bd.js":352,"./bn.js":351,"./bo":353,"./bo.js":353,"./br":354,"./br.js":354,"./bs":355,"./bs.js":355,"./ca":356,"./ca.js":356,"./cs":357,"./cs.js":357,"./cv":358,"./cv.js":358,"./cy":359,"./cy.js":359,"./da":360,"./da.js":360,"./de":361,"./de-at":362,"./de-at.js":362,"./de-ch":363,"./de-ch.js":363,"./de.js":361,"./dv":364,"./dv.js":364,"./el":365,"./el.js":365,"./en-au":366,"./en-au.js":366,"./en-ca":367,"./en-ca.js":367,"./en-gb":368,"./en-gb.js":368,"./en-ie":369,"./en-ie.js":369,"./en-il":370,"./en-il.js":370,"./en-in":371,"./en-in.js":371,"./en-nz":372,"./en-nz.js":372,"./en-sg":373,"./en-sg.js":373,"./eo":374,"./eo.js":374,"./es":375,"./es-do":376,"./es-do.js":376,"./es-mx":377,"./es-mx.js":377,"./es-us":378,"./es-us.js":378,"./es.js":375,"./et":379,"./et.js":379,"./eu":380,"./eu.js":380,"./fa":381,"./fa.js":381,"./fi":382,"./fi.js":382,"./fil":383,"./fil.js":383,"./fo":384,"./fo.js":384,"./fr":385,"./fr-ca":386,"./fr-ca.js":386,"./fr-ch":387,"./fr-ch.js":387,"./fr.js":385,"./fy":388,"./fy.js":388,"./ga":389,"./ga.js":389,"./gd":390,"./gd.js":390,"./gl":391,"./gl.js":391,"./gom-deva":392,"./gom-deva.js":392,"./gom-latn":393,"./gom-latn.js":393,"./gu":394,"./gu.js":394,"./he":395,"./he.js":395,"./hi":396,"./hi.js":396,"./hr":397,"./hr.js":397,"./hu":398,"./hu.js":398,"./hy-am":399,"./hy-am.js":399,"./id":400,"./id.js":400,"./is":401,"./is.js":401,"./it":402,"./it-ch":403,"./it-ch.js":403,"./it.js":402,"./ja":404,"./ja.js":404,"./jv":405,"./jv.js":405,"./ka":406,"./ka.js":406,"./kk":407,"./kk.js":407,"./km":408,"./km.js":408,"./kn":409,"./kn.js":409,"./ko":410,"./ko.js":410,"./ku":411,"./ku.js":411,"./ky":412,"./ky.js":412,"./lb":413,"./lb.js":413,"./lo":414,"./lo.js":414,"./lt":415,"./lt.js":415,"./lv":416,"./lv.js":416,"./me":417,"./me.js":417,"./mi":418,"./mi.js":418,"./mk":419,"./mk.js":419,"./ml":420,"./ml.js":420,"./mn":421,"./mn.js":421,"./mr":422,"./mr.js":422,"./ms":423,"./ms-my":424,"./ms-my.js":424,"./ms.js":423,"./mt":425,"./mt.js":425,"./my":426,"./my.js":426,"./nb":427,"./nb.js":427,"./ne":428,"./ne.js":428,"./nl":429,"./nl-be":430,"./nl-be.js":430,"./nl.js":429,"./nn":431,"./nn.js":431,"./oc-lnc":432,"./oc-lnc.js":432,"./pa-in":433,"./pa-in.js":433,"./pl":434,"./pl.js":434,"./pt":435,"./pt-br":436,"./pt-br.js":436,"./pt.js":435,"./ro":437,"./ro.js":437,"./ru":438,"./ru.js":438,"./sd":439,"./sd.js":439,"./se":440,"./se.js":440,"./si":441,"./si.js":441,"./sk":442,"./sk.js":442,"./sl":443,"./sl.js":443,"./sq":444,"./sq.js":444,"./sr":445,"./sr-cyrl":446,"./sr-cyrl.js":446,"./sr.js":445,"./ss":447,"./ss.js":447,"./sv":448,"./sv.js":448,"./sw":449,"./sw.js":449,"./ta":450,"./ta.js":450,"./te":451,"./te.js":451,"./tet":452,"./tet.js":452,"./tg":453,"./tg.js":453,"./th":454,"./th.js":454,"./tk":455,"./tk.js":455,"./tl-ph":456,"./tl-ph.js":456,"./tlh":457,"./tlh.js":457,"./tr":458,"./tr.js":458,"./tzl":459,"./tzl.js":459,"./tzm":460,"./tzm-latn":461,"./tzm-latn.js":461,"./tzm.js":460,"./ug-cn":462,"./ug-cn.js":462,"./uk":463,"./uk.js":463,"./ur":464,"./ur.js":464,"./uz":465,"./uz-latn":466,"./uz-latn.js":466,"./uz.js":465,"./vi":467,"./vi.js":467,"./x-pseudo":468,"./x-pseudo.js":468,"./yo":469,"./yo.js":469,"./zh-cn":470,"./zh-cn.js":470,"./zh-hk":471,"./zh-hk.js":471,"./zh-mo":472,"./zh-mo.js":472,"./zh-tw":473,"./zh-tw.js":473};function t(j){var e=r(j);return n(e)}function r(j){if(!n.o(map,j)){var e=new Error("Cannot find module '"+j+"'");throw e.code="MODULE_NOT_FOUND",e}return map[j]}t.keys=function(){return Object.keys(map)},t.resolve=r,j.exports=t,t.id=475},476:function(j,e,n){"use strict";n.r(e);var t=n(0),r=Object(t.b)({__name:"DoughnutChart",setup:function(j){var e=n(474),r=Object(t.d)(null);return Object(t.c)((function(){if(null!=r.value){var canvas=r.value;new e(canvas,{type:"doughnut",data:{labels:["Red","Blue","Yellow"],datasets:[{label:"My First Dataset",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}})}})),{__sfc:!0,Chart:e,canvasRef:r}}}),l=n(70),component=Object(l.a)(r,(function(){var j=this._self._c;this._self._setupProxy;return j("canvas",{ref:"canvasRef"})}),[],!1,null,null,null);e.default=component.exports}}]);