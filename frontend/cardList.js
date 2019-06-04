webix.ready(function () {

    function clickInvite() {
        let url = document.location.search;
        let result = $$("inviteUserForm").getValues();
        let regexp = /board=([^&]+)/i;
        let boardId = '';
        if (!!regexp.exec(url))
            boardId = regexp.exec(url)[1];
        result.boardId = boardId;
        webix.ajax("inviteUser.php", result, function (data) {
            if (data == 0) {
                webix.message("Пользователя с данным id не найдено");
            }
            if (data == 1) {
                $$("inviteUserForm").clear();
                webix.message("Пользователь добавлен к доске");
            }
            if (data == 2) {
                $$("inviteUserForm").clear();
                webix.message("Этот пользователь уже закреплён за данной доской");
            }
        });
    }

    webix.ui({
        view: "popup",
        id: "my_pop",
        head: "inviteForm",
        width: 300,
        body: {
            view: "form",
            id: "inviteUserForm",
            container: "areaA",
            width: 300,
            elements: [
                { view: "text", label: "Имя", name: "name", id: "popapLabel" },
                {
                    margin: 5, cols: [
                        { view: "button", value: "Пригласить", css: "webix_primary", click: clickInvite },
                    ]
                }
            ]
        }
    });

    webix.ui({
        rows: [
            {
                css: "toolbar",
                borderless: true,
                paddingY: 7,
                paddingX: 10,
                margin: 7,
                cols: [
                    { view: "button", value: "Пригласить пользователя", width: 250, align: "left", popup: "my_pop" },
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
                    },
                    onListAfterDrop: function (dragContext, e, list) {
                        // item id
                        var item = this.getItem(dragContext.start);

                        // if we move an item from one list to another
                        if (dragContext.from != dragContext.to) {
                            var status = dragContext.to.config.status;
                            // show a message with new status and order
                            webix.message("Item '" + item.text + "' was moved into '" + status + "' column to the " + item.$index + " position");
                            webix.ajax(`dragCard.php?status=${status}&cardId=${dragContext.start}`);
                        }
                        else
                            webix.message("Item '" + item.text + "' was moved to the " + item.$index + " position");
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
                editor: true,
                data: getData,
                colors: [
                    { id: 1, value: "Стандартный", color: "#1CA1C1" },
                    { id: 2, value: "Незначительно", color: "green" },
                    { id: 3, value: "Средне", color: "orange" },
                    { id: 4, value: "Срочно", color: "red" }
                ]
                //tags: tags_set,
                //users: users_set
            }
        ]
    });
});