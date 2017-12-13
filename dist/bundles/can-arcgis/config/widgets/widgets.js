define("can-arcgis@1.0.0#config/widgets/widgets",["exports","can-stache","can-route"],function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(t),a=o(i),n=(0,r.default)('\n    <p style="background:#fff;padding:10px;">Current Zoom: {{round(view.zoom, 0)}}<br />\n    Coordinates: {{round(view.center.longitude,4)}}, {{round(view.center.latitude, 4)}}</p>\n'),p=document.createElement("div");p.style="background: #fff;display:block; padding:10px;",p.innerHTML=a.default.link("Back to Viewer",{configName:"viewer"}),e.default={debug:!0,viewOptions:{center:[-85.05019999999857,33.12552399999943],zoom:6},mapOptions:{basemap:"gray",layers:[{path:"esri/layers/FeatureLayer",options:{url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",renderer:{type:"simple",symbol:{type:"simple-fill",outline:{color:"lightgray",width:.5}},label:"% population in poverty by county",visualVariables:[{type:"color",field:"POP_POVERTY",normalizationField:"TOTPOP_CY",stops:[{value:.1,color:"#FFFCD4",label:"<10%"},{value:.3,color:"#350242",label:">30%"}]}]},outFields:["*"],popupTemplate:{title:"{COUNTY}, {STATE}",content:"{POP_POVERTY} of {TOTPOP_CY} people live below the poverty line.",fieldInfos:[{fieldName:"POP_POVERTY",format:{digitSeparator:!0,places:0}},{fieldName:"TOTPOP_CY",format:{digitSeparator:!0,places:0}}]}}}]},widgets:[{parent:"view",position:"top-right",type:"component",component:p},{parent:"view",type:"renderer",renderer:n,options:{round:function(e,t){var i=Math.pow(10,t);return Math.round(e*i)/i}},position:"bottom-left"},{type:"esri",parent:"view",path:"esri/widgets/Legend",position:"bottom-right"},{type:"esri",parent:"expand",path:"esri/widgets/LayerList",iconClass:"esri-icon-layers",position:"top-right"},{type:"esri",parent:"view",path:"esri/widgets/Home",position:"top-left"},{type:"esri",parent:"expand",iconClass:"esri-icon-basemap",path:"esri/widgets/BasemapGallery"}]}});
//# sourceMappingURL=widgets.js.map