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
                    { view: "label", label: "You can add and remove cards in Kanban Board" },
                    {
                        view: "button", type: "danger", label: "Remove selected", width: 150, click: () => {
                            var id = $$("myBoard").getSelectedId();
                            if (!id) {
                                return webix.alert("Please selected a card that you want to remove!");
                            }
                            $$("myBoard").remove(id);
                        }
                    },
                    {
                        view: "button", type: "form", label: "Add new card", width: 150, click: () => {
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