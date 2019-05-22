webix.ui({
    view:"form", 
id:"log_form",
width:300,
elements:[
{ view:"text", label:"Email", name:"email"},
{ view:"text", type:"password", label:"Password", name:"password"},
{ margin:5, cols:[
    { view:"button", value:"Login" , css:"webix_primary"},
    { view:"button", value:"Cancel"}
]}
]
});