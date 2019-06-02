function handler(id) {
  webix.message(id);
  //webix.message(document.location.search);
  let url = document.location.search;
  location.href = `http://trallo/cards.php${url}&board=${id}`;
  //webix.message(`http://trallo/cards.php${url}&board=${id}`);
}

function clickCreate() {
  let url = document.location.search;
  let result = $$("createBoardForm").getValues();
  let regexp = /id=([^&]+)/i;
  let userId = '';
  if (!!regexp.exec(url))
    userId = regexp.exec(url)[1];
  result.user_id = userId;
  webix.ajax("createBoard.php", result, function (data) {

  });
}

webix.ui({
  view: "popup",
  id: "my_pop",
  head: "createForm",
  width: 300,
  body: {
    view: "form",
    id: "createBoardForm",
    container: "areaA",
    width: 300,
    elements: [
      { view: "text", label: "Имя", name: "name", id: "popapLabel" },
      { view: "checkbox", labelRight: "Приватная доска", checkValue: "on" },
      {
        margin: 5, cols: [
          { view: "button", value: "Создать", css: "webix_primary", click: clickCreate },
        ]
      }
    ]
  }
});

// webix.ui({
//   container: "areaB",
//   view: "dataview",
//   width: 1000,
//   height: 500,
//   css: "movies",
//   type: {
//     width: 260,
//     height: 90,
//     template: "html->template_container"
//   },
//   click: handler,
//   data: getData

// });

webix.ui({
  rows: [
    {
      view: "toolbar",
      id: "myToolbar",
      css: "webix_dark",
      cols: [
        { view: "button", value: "Профиль", width: 100, align: "center" },
        { view: "button", value: "Создать доску", width: 150, align: "left", popup: "my_pop" }
      ]
    },
    {
      container: "areaB",
      view: "dataview",
      width: 543,
      height: 270,
      css: "movies",
      type: {
        width: 260,
        height: 90,
        template: function (obj) {
          return "<div class='overall'><div class='rank'>" + obj.rank + ".</div><div class='title'>" + obj.title + "</div><div class='year'>" + obj.year + " year</div> </div>"
        }
      },
      click: handler,
      data: getData
    }
  ]

});