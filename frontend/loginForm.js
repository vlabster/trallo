function submit() {
    webix.message(JSON.stringify($$("logForm").getValues(), null, 2));
    webix.ajax().post("checkReg.php", $$("logForm").getValues());
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
            { view:"button", value:"Login" , css:"webix_primary", click: submit },
            { view:"button", value:"Cancel"}
        ]}
    ]
});