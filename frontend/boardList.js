webix.ui({
    container: "areaB",
    view:"dataview",
  	width:1000,
  	height:500,
    css: "movies",
    type:{
      width: 600,
      height: 200,
      template:"html->template_container"
    },
    data: getData
});