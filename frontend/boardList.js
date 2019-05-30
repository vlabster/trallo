function handler(id) {
  webix.message(id);
  //webix.message(document.location.search);
  let url = document.location.search;
  location.href = `http://trallo/cards.php${url}&board=${id}`;
  //webix.message(`http://trallo/cards.php${url}&board=${id}`);
}

webix.ui({
    container: "areaB",
    view:"dataview",
  	width:1000,
  	height:500,
    css: "movies",
    type:{
      width: 260,
      height: 90,
      template:"html->template_container"
    },
    click: handler,
    data: getData
});