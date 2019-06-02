function submitLog() {
    webix.message(JSON.stringify($$("logForm").getValues(), null, 2));
    webix.ajax("checkReg.php", $$("logForm").getValues(), function (data) {
        if (data == 0) {
            webix.message("Неверный логин или пароль");
        }
        else {
            let result = JSON.parse(data);
            webix.message(`http://trallo/boardList.php?login=${result.login}&id=${result.id}`);
            location.href = `http://trallo/boardList.php?login=${result.login}&id=${result.id}`;
            //window.open(`http://trallo/boardList.php?login=${result.login}&board=${result.id}`);
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
            { view:"button", value:"Войти" , css:"webix_primary", click: submitLog },
            { view:"button", value:"Отмена"}
        ]}
    ]
});