(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{220:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{current:1}},computed:{data:function(){return this.$store.state.statistics.data}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.current=e.target.multiple?r:r[0]}}},t._l(3,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n      Q"),r("sub",[t._v(t._s(e))]),t._v(" - Cuartil #"+t._s(e)+"\n    ")])})),0),t._v(" "),r("span",{staticClass:"mt-1 ml-2 text-xl"},[t._v("\n  = "+t._s(t.$quartil(t.data,t.current).toFixed(2))+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},221:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{current:1}},computed:{data:function(){return this.$store.state.statistics.data}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.current=e.target.multiple?r:r[0]}}},t._l(99,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        P"),r("sub",[t._v(t._s(e))]),t._v(" - Percentil #"+t._s(e)+"\n      ")])})),0),t._v(" "),r("span",{staticClass:"mt-1 ml-2 text-xl"},[t._v("\n    = "+t._s(t.$percentile(t.data,t.current).toFixed(2))+"\n    ")])])}),[],!1,null,null,null);e.default=component.exports},222:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{current:1}},computed:{data:function(){return this.$store.state.statistics.data}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.current=e.target.multiple?r:r[0]}}},t._l(9,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n      D"),r("sub",[t._v(t._s(e))]),t._v(" - Decil #"+t._s(e)+"\n    ")])})),0),t._v(" "),r("span",{staticClass:"mt-1 ml-2 text-xl"},[t._v("\n  = "+t._s(t.$decile(t.data,t.current).toFixed(2))+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},223:function(t,e,r){"use strict";r.r(e);r(34);var n={computed:{data:function(){return this.$store.state.statistics.data},orderedData:function(){return this.$store.state.statistics.orderedData}},data:function(){return{chart:""}},methods:{createHistogramChart:function(){var t={type:"line",data:{},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}};this.chart=new Chart(document.getElementById("histograma"),{type:t.type,data:t.data,options:t.options})}},mounted:function(){this.createHistogramChart()},watch:{orderedData:function(t,e){var r=this;t!=e&&(this.chart.data={labels:this.orderedData.map((function(t){return"No. ".concat(t)})),datasets:[{label:"Frecuencia absoluta",data:this.orderedData.map((function(t){return r.$absoluteFrecuency(r.data,t)})),backgroundColor:this.orderedData.map((function(t){return"rgba(255, 2, 255, .4)"})),borderColor:this.orderedData.map((function(t){return"#ff02ff"})),borderWidth:3}]},this.chart.update())}}},o=r(12),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"histograma"}})])}],!1,null,null,null);e.default=component.exports},224:function(t,e,r){"use strict";r.r(e);r(34),r(113);var n={computed:{data:function(){return this.$store.state.statistics.data},orderedData:function(){return this.$store.state.statistics.orderedData},dataTable:function(){var t=this;return this.orderedData.map((function(e,r){return{number:e,absoluteFrecuency:t.$absoluteFrecuency(t.data,e),accAbsoluteFrecuency:t.$accAbsoluteFrecuency(t.data,r),relativeFrecuency:t.$relativeFrecuency(t.data,e),accRelativeFrecuency:t.$accRelativeFrecuency(t.data,r),xi2_fi:e*e*t.$absoluteFrecuency(t.data,e),d_absolute:Math.abs(t.$absoluteFrecuency(t.data,e)-t.$arithmeticMean(t.data)),d_absolute_2:Math.pow(Math.abs(t.$absoluteFrecuency(t.data,e)-t.$arithmeticMean(t.data)),2)}}))},totalAbsoluteFrecuency:function(){return this.dataTable[this.dataTable.length-1].accAbsoluteFrecuency},total_xi2_fi:function(){return this.dataTable.reduce((function(t,e){return t+e.xi2_fi}),0)},total_d_absolute:function(){return this.dataTable.reduce((function(t,e){return t+e.d_absolute}),0)},total_d_absolute_2:function(){return this.dataTable.reduce((function(t,e){return t+e.d_absolute_2}),0)}},watch:{dataTable:function(){this.$store.commit("statistics/setDataTable",this.dataTable),this.$store.commit("statistics/setTotalAbsoluteFrecuency",this.totalAbsoluteFrecuency),this.$store.commit("statistics/setTotal_xi2_fi",this.total_xi2_fi),this.$store.commit("statistics/setTotal_d_absolute",this.total_d_absolute),this.$store.commit("statistics/setTotal_d_absolute_2",this.total_d_absolute_2)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-x-auto"},[r("table",{staticClass:"table"},[t._m(0),t._v(" "),r("tbody",t._l(t.$store.state.statistics.dataTable,(function(data,e){return r("tr",{key:e},[r("td",[t._v(t._s(data.number))]),t._v(" "),r("td",[t._v(t._s(data.absoluteFrecuency))]),t._v(" "),r("td",[t._v(t._s(data.accAbsoluteFrecuency))]),t._v(" "),r("td",[t._v(t._s(data.relativeFrecuency.toFixed(2)))]),t._v(" "),r("td",[t._v(t._s(data.accRelativeFrecuency.toFixed(2)))]),t._v(" "),r("td",[t._v(t._s(data.xi2_fi.toFixed(2)))]),t._v(" "),r("td",[t._v(t._s(data.d_absolute.toFixed(2)))]),t._v(" "),r("td",[t._v(t._s(data.d_absolute_2.toFixed(2)))])])})),0),t._v(" "),r("tfoot",[r("tr",[t._m(1),t._v(" "),r("td",[r("b",[t._v(t._s(t.$store.state.statistics.totalAbsoluteFrecuency))])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("td",[r("b",[t._v(t._s(t.$store.state.statistics.total_xi2_fi.toFixed(2)))])]),t._v(" "),r("td",[r("b",[t._v(t._s(t.$store.state.statistics.total_d_absolute.toFixed(2)))])]),t._v(" "),r("td",[r("b",[t._v(t._s(t.$store.state.statistics.total_d_absolute_2.toFixed(2)))])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"whitespace-no-wrap md:whitespace-normal"},[r("td",[r("b",[t._v("Número ( x"),r("sub",[t._v("i")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Frecuencia Absoluta ( f"),r("sub",[t._v("i")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Frecuencia Absoluta Acumulada ( F"),r("sub",[t._v("i")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Frecuencia Relativa ( f"),r("sub",[t._v("r")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Frecuencia Relativa Acumulada ( F"),r("sub",[t._v("r")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Valor Por Frecuencia Absoluta ( x"),r("sub",[t._v("i")]),r("sup",[t._v("2 ")]),t._v(" * f"),r("sub",[t._v("i")]),t._v(" )")])]),t._v(" "),r("td",[r("b",[t._v("Desviación Absoluta ( | d | )")])]),t._v(" "),r("td",[r("b",[t._v("Varianza ( | d | "),r("sup",[t._v("2")]),t._v(" )")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("b",[this._v("Sumatorio Σ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("b",[this._v("-")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("b",[this._v("1.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("b",[this._v("-")])])}],!1,null,null,null);e.default=component.exports},226:function(t,e,r){"use strict";r.r(e);var n={computed:{medianDeviation:function(){return this.$store.state.statistics.total_d_absolute/this.$store.state.statistics.totalAbsoluteFrecuency},variance:function(){return this.$store.state.statistics.total_d_absolute_2/this.$store.state.statistics.totalAbsoluteFrecuency},typicalDeviation:function(){return Math.sqrt(this.variance)},coefficientOfVariation:function(){return this.typicalDeviation/this.$arithmeticMean(this.$store.state.statistics.data)*100},kurtosis:function(){return.5*(this.$quartil(this.$store.state.statistics.data,3)-this.$quartil(this.$store.state.statistics.data,1))/(this.$percentile(this.$store.state.statistics.data,90)-this.$percentile(this.$store.state.statistics.data,10))}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-x-auto"},[r("table",{staticClass:"table"},[r("tbody",{staticClass:"text-left"},[r("tr",[t._m(0),t._v(" "),r("td",[t._v(t._s(t.medianDeviation.toFixed(2)))])]),t._v(" "),r("tr",[t._m(1),t._v(" "),r("td",[t._v(t._s(t.typicalDeviation.toFixed(2)))])]),t._v(" "),r("tr",[t._m(2),t._v(" "),r("td",[t._v(t._s(t.variance.toFixed(2)))])]),t._v(" "),r("tr",[t._m(3),t._v(" "),r("td",[t._v(t._s(t.coefficientOfVariation.toFixed(2)))])]),t._v(" "),r("tr",[t._m(4),t._v(" "),r("td",[t._v(t._s(t.kurtosis.toFixed(2)))])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Desviación media")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Desviación típica")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Varianza")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Coeficiente de variación")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Curtosis")])])}],!1,null,null,null);e.default=component.exports},228:function(t,e,r){"use strict";r.r(e);var n={computed:{data:function(){return this.$store.state.statistics.data}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-x-auto"},[r("table",{staticClass:"table"},[r("tbody",{staticClass:"text-left"},[r("tr",[t._m(0),t._v(" "),r("td",[t._v(t._s(t.$geometricMean(t.data).toFixed(2)))])]),t._v(" "),r("tr",[t._m(1),t._v(" "),r("td",[t._v(t._s(t.$cuadraticMean(t.data).toFixed(2)))])]),t._v(" "),r("tr",[t._m(2),t._v(" "),r("td",[t._v(t._s(t.$arithmeticMean(t.data).toFixed(2)))])]),t._v(" "),r("tr",[t._m(3),t._v(" "),r("td",[t._v(t._s(t.$arithmeticMedian(t.data).toFixed(2)))])]),t._v(" "),r("tr",[t._m(4),t._v(" "),r("td",[t._v(t._s(t.$arithmeticMode(t.data).toFixed(2)))])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Media geométrica")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Media cuadrática")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Media aritmética")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Mediana")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"left-table-titles whitespace-no-wrap"},[e("b",[this._v("Moda")])])}],!1,null,null,null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{placeholder:"Ingresa los números, separados por una coma, un punto y coma, un espacio o un salto de linea.",data:""}},watch:{data:function(){this.$store.commit("statistics/setData",this.$cleanDataSet(this.data)),this.$store.commit("statistics/setOrderedData",this.$orderedDataSet(this.$store.state.statistics.data))}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],staticClass:"textarea",attrs:{rows:"6",placeholder:t.placeholder},domProps:{value:t.data},on:{input:function(e){e.target.composing||(t.data=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},230:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Calculadora de datos no agrupados"}},methods:{onCopy:function(t){Swal.fire("Tarea realizada con éxito 🥰","Los datos fueron copiados a tu portapapeles","success")},onError:function(t){Swal.fire("Ups... Ocurrió un error 😥","Parece que ocurrió un error al intentar copiar los datos solicitados","error")}},computed:{cleanData:function(){return this.$store.state.statistics.data},orderedData:function(){return this.$store.state.statistics.orderedData}},destroyed:function(){this.$store.commit("statistics/resetState")}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center p-2"},[r("lottie-player",{staticClass:"mx-auto h-64 animate__animated animate__fadeIn",attrs:{src:"./men-chart-lottie.json",background:"transparent",speed:"1",loop:"",autoplay:""}}),t._v(" "),r("h1",{staticClass:"my-3 text-2xl font-bold"},[t._v("Calculadora de datos no agrupados")]),t._v(" "),r("p",{staticClass:"mb-3"},[t._v("Ingresa los datos y en báse a ellos se calcularan sus medidas de tendencia central, cuartiles, deciles, percentiles, histograma, etc.")]),t._v(" "),r("RawDataInput"),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-2 my-2"},[t.cleanData.length>0?r("div",{staticClass:"animate__animated animate__fadeIn"},[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Datos limpios - "+t._s(t.cleanData.length)+" números encontrados\n        "),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.cleanData.join("\n"),expression:"cleanData.join('\\n')",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"rounded bg-blue-500 px-1 text-white",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-copy"})])]),t._v(" "),r("textarea",{staticClass:"textarea",attrs:{rows:"6",disabled:""}},[t._v(t._s(t.cleanData.join("\n")))])]):t._e(),t._v(" "),t.orderedData.length>0?r("div",{staticClass:"animate__animated animate__fadeIn"},[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Datos ordenados - "+t._s(t.orderedData.length)+" números encontrados\n        "),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderedData.join("\n"),expression:"orderedData.join('\\n')",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"rounded bg-blue-500 px-1 text-white",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-copy"})])]),t._v(" "),r("textarea",{staticClass:"textarea",attrs:{rows:"6",disabled:""}},[t._v(t._s(t.orderedData.join("\n")))])]):t._e()]),t._v(" "),t.cleanData.length>0?r("div",{staticClass:"my-8 animate__animated animate__fadeIn"},[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n      Tabla de frecuencia\n    ")]),t._v(" "),r("DataTable")],1):t._e(),t._v(" "),t.cleanData.length>0?r("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-3 my-8 animate__animated animate__fadeIn"},[r("div",[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Cuartiles\n      ")]),t._v(" "),r("Quartiles",{staticClass:"mb-2"}),t._v(" "),r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Deciles\n      ")]),t._v(" "),r("Decile",{staticClass:"mb-2"}),t._v(" "),r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Percentiles\n      ")]),t._v(" "),r("Percentile",{staticClass:"mb-2"})],1),t._v(" "),r("div",[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Medidas de tendencia central\n      ")]),t._v(" "),r("MeasuresOfCentralTendency")],1),t._v(" "),r("div",[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n        Otros datos\n      ")]),t._v(" "),r("ExtraData")],1)]):t._e(),t._v(" "),t.cleanData.length>0?r("div",{staticClass:"my-8 animate__animated animate__fadeIn"},[r("span",{staticClass:"inline-block text-xl font-bold mb-2"},[t._v("\n      Histograma\n    ")]),t._v(" "),r("Histogram")],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RawDataInput:r(229).default,DataTable:r(224).default,Quartiles:r(220).default,Decile:r(222).default,Percentile:r(221).default,MeasuresOfCentralTendency:r(228).default,ExtraData:r(226).default,Histogram:r(223).default})}}]);