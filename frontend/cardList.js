webix.ready(function () {
    webix.ui({
        rows: [
            {
                css: "toolbar",
                borderless: true,
                paddingY: 7,
                paddingX: 10,
                margin: 7,
                cols: [
                    { view: "label", label: "Вы можете добавить или удалить карточку" },
                    {
                        view: "button", type: "danger", label: "Удалить карточку", width: 200, click: () => {
                            var id = $$("myBoard").getSelectedId();
                            if (!id) {
                                return webix.alert("Выберите карточку, которую вы хотите удалить!");
                            }
                            $$("myBoard").remove(id);
                            webix.ajax(`deleteCard.php?id=${id}`);
                        }
                    },
                    {
                        view: "button", type: "form", label: "Добавить карточку", width: 200, click: () => {
                            $$("myBoard").showEditor();
                        }
                    }
                ]
            },
            {
                view: "kanban", type: "space", id: "myBoard",
                on: {
                    onBeforeEditorAction: function (action, editor, data) {
                        webix.message(action);
                        let result = editor.getForm().getValues();
                        let regexp = /id=([^&]+)/i;
                        let userId = '';
                        if (!!regexp.exec(document.location.search)) 
                            userId = regexp.exec(document.location.search)[1];
                        regexp = /board=([^&]+)/i;
                        let boardId = '';
                        if (!!regexp.exec(document.location.search)) 
                            boardId = regexp.exec(document.location.search)[1];
                        result.user_id = userId;
                        result.board = boardId;
                        webix.ajax("createOrEditCard.php", result);
                        //webix.message(JSON.stringify(editor.getForm().getValues()));
                    },
                    onListAfterDrop: function (dragContext,e,list){
                        // item id
                        var item = this.getItem(dragContext.start);
                      
                        // if we move an item from one list to another
                        if(dragContext.from != dragContext.to){
                          var status = dragContext.to.config.status;
                          // show a message with new status and order
                          webix.message("Item '"+item.text+"' was moved into '"+status+"' column to the "+item.$index +" position");
                          webix.ajax(`dragCard.php?status=${status}&cardId=${dragContext.start}`);
                        }
                        else
                          webix.message("Item '"+item.text+"' was moved to the "+item.$index +" position");
                      },
                },
                cols: [
                    {
                        header: "Задачи",
                        body: { view: "kanbanlist", status: "new" }
                    },
                    {
                        header: "В работе",
                        body: { view: "kanbanlist", status: "work" }
                    },
                    {
                        header: "Тестирование",
                        body: { view: "kanbanlist", status: "test" }
                    },
                    {
                        header: "Проверено",
                        body: { view: "kanbanlist", status: "done" }
                    }
                ],
                //userList: true,
                editor: {
                    // elements:[     
                    //     { id: "myTextarea", view: "textarea", label: "Задание", height: 100 },
                    //     { id: "muButton", view: "button", value: "Сохранить" },                                         
                    // ],                                                      
                    // rules:{
                    //     $all:webix.rules.isNotEmpty
                    // }
                },
                data: getData,
                //tags: tags_set,
                //users: users_set
            }
        ]
    });
});