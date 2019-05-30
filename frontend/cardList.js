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
                editor: true,
                data: getData,
                //tags: tags_set,
                //users: users_set
            }
        ]
    });
});