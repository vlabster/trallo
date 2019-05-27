function submit() {
    webix.message(JSON.stringify($$("logForm").getValues(), null, 2));
    webix.ajax("checkReg.php", $$("logForm").getValues(), function (data) {
        if (data == 1) {
            location.href = "boards.php";
        }
        else if (data == 0) {
            webix.message("Неверный логин или пароль")
        }
        else {
            webix.message(data);
        }
    }); 
}

webix.ui({
    view:"form", 
    id:"logForm",
    container: "areaA",
    width:300,
    elements:[
        { view:"text", label:"Логин", name:"login"},
        { view:"text", type:"password", label:"Пароль", name:"password"},
        { margin:5, cols:[
            { view:"button", value:"Войти" , css:"webix_primary", click: submit },
            { view:"button", value:"Отмена"}
        ]}
    ]
});