define("can-arcgis@1.0.0#config/group/group",["exports","can-arcgis/components/identify/identify"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(i);e.default={debug:!0,mapOptions:{basemap:"gray",layers:[{type:"group",options:{title:"US Demographics",visible:!0,visibilityMode:"exclusive",layers:[{path:"esri/layers/MapImageLayer",options:{url:"https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Net_Worth/MapServer",title:"US Median Net Worth",visible:!1}},{path:"esri/layers/MapImageLayer",options:{url:"https://server.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Household_Income/MapServer",title:"US Median Household Income"}}]}}]},widgets:[{path:"esri/widgets/LayerList",type:"esri",parent:"view",position:"bottom-left"},{Constructor:r.default}]}});
//# sourceMappingURL=group.js.map