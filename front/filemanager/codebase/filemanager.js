/**
 * @license
 * Webix FileManager v.6.2.6
 * This software is covered by Webix Trial License.
 * Usage without proper license is prohibited.
 * (c) XB Software Ltd.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(t){t.attachEvent("onComponentInit",function(){return function e(r){var c=r.getMenu();c&&(c.attachEvent("onItemClick",function(e,t){var n=this.getItem(e),i=r[n.method]||r[e];if(i){var o=r.getActive();if(r.callEvent("onbefore"+(n.event||n.method||e),[o])){"upload"==e&&r.config.legacyUploader||(r._uploadPopup&&r._uploadPopup.hide(),c.hide());var a=[o];"upload"==e&&(t=webix.html.pos(t),a.push(t)),webix.delay(function(){i.apply(r,a),r.callEvent("onafter"+(n.event||n.method||e),[])})}}}),c.attachEvent("onBeforeShow",function(e){c.filter(""),c.hide();var t=c.getContext();return t&&t.obj&&!t.id&&t.obj.unselectAll(),!t||!t.obj||t.obj.callEvent("onBeforeMenuShow",[t.id,e])}))}(t)});var i=t.config.templateName,e={view:"filemenu",id:"actions",width:200,padding:0,autofocus:!1,css:"webix_fmanager_actions",template:function(e,t){var n=i(e,t);return"<span class='"+(-1==e.icon.indexOf("fm-")?e.icon:"webix_fmanager_icon "+e.icon)+"'></span> "+n},data:function n(){return[{id:"copy",batch:"item",method:"markCopy",icon:"fm-copy",value:webix.i18n.filemanager.copy},{id:"cut",batch:"item",method:"markCut",icon:"fm-cut",value:webix.i18n.filemanager.cut},{id:"paste",method:"pasteFile",icon:"fm-paste",value:webix.i18n.filemanager.paste},{$template:"Separator"},{id:"create",method:"createFolder",icon:"fm-folder",value:webix.i18n.filemanager.create},{id:"remove",batch:"item",method:"deleteFile",icon:"fm-delete",value:webix.i18n.filemanager.remove},{id:"edit",batch:"item",method:"editFile",icon:"fm-edit",value:webix.i18n.filemanager.rename},{id:"upload",method:"uploadFile",event:"UploadDialog",icon:"fm-upload",value:webix.i18n.filemanager.upload}]}()};t.callEvent("onViewInit",["actions",e]),t._contextMenu=t.ui(e),t.attachEvent("onDestruct",function(){t._contextMenu.destructor()})}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}webix.type(webix.ui.tree,{name:"FileTree",css:"webix_fmanager_tree",dragTemplate:webix.template("#value#"),icon:function(e){for(var t="",n=1;n<e.$level;n++)t+="<div class='webix_tree_none'></div>";return e.webix_child_branch&&!e.$count?t+="<div class='webix_tree_child_branch webix_fmanager_icon webix_tree_close'></div>":0<e.$count?e.open?t+="<div class='webix_fmanager_icon webix_tree_open'></div>":t+="<div class='webix_fmanager_icon webix_tree_close'></div>":t+="<div class='webix_tree_none'></div>",t},folder:function(e){return e.$count&&e.open?"<div class='webix_fmanager_icon webix_folder_open'></div>":"<div class='webix_fmanager_icon webix_folder'></div>"}}),webix.type(webix.ui.dataview,{name:"FileView",css:"webix_fmanager_files",height:110,margin:10,width:150,template:function(e,t){var n=t.templateName(e,t);return"<div class='webix_fmanager_file'><div class='webix_fmanager_data_icon'>"+t.templateIcon(e,t)+"</div>"+n+"</div>"}}),webix.i18n.filemanager={actions:"Actions",back:"Back",forward:"Forward",levelUp:"Level Up",name:"Name",size:"Size",type:"Type",date:"Date",copy:"Copy",cut:"Cut",paste:"Paste",upload:"Upload",remove:"Delete",create:"Create Folder",rename:"Rename",location:"Location",select:"Select Files",sizeLabels:["B","KB","MB","GB"],iconsView:"Icons View",tableView:"Table View",hideTree:"Hide Tree",showTree:"Show Tree",collapseTree:"Collapse Tree",expandTree:"Expand Tree",saving:"Saving...",errorResponse:"Error: changes were not saved!",replaceConfirmation:"The folder already contains files with such names. Would you like to replace existing files ?",createConfirmation:"The folder with such a name already exists. Would you like to replace it ?",renameConfirmation:"The file with such a name already exists. Would you like to replace it ?",yes:"Yes",no:"No",types:{folder:"Folder",doc:"Document",excel:"Excel",pdf:"PDF",pp:"PowerPoint",text:"Text File",video:"Video File",image:"Image",
code:"Code",audio:"Audio",archive:"Archive",file:"File"}},webix.protoUI({name:"filelist"},webix.EditAbility,webix.ui.list),webix.protoUI({name:"filemenu"},webix.ContextHelper,webix.ui.submenu),webix.protoUI({name:"filetree",$dragHTML:function(e,t){var n=webix.DragControl.getContext(),i=this.type,o=i.dragTemplate(e,i),a=webix.html.getTextSize(o),r=webix.html.offset(this.$view),c=t.x-r.x;return n.x_offset=c>a.width?-a.width/4:-c,n.y_offset=-a.height/2,"<div class='webix_tree_item webix_fmanager_drag' style='width:auto'>"+o+"</div>"}},webix.EditAbility,webix.ui.tree),webix.protoUI({name:"filetable",$dragHTML:function(e,t){var n=webix.DragControl.getContext(),i=this.getColumnIndex("value"),o=this.config.columns[i].template(e,this.type),a=webix.html.getTextSize(o),r=webix.html.offset(this.$view),c=t.clientX-r.x;n.x_offset=c>a.width?-a.width/4:-c,n.y_offset=-a.height/2;var s="<div class='webix_dd_drag webix_fmanager_drag' >";return(s+="<div style='width:"+(a.width+40)+"px'>"+o+"</div>")+"</div>"}},webix.ui.datatable),webix.protoUI({name:"fileview"},webix.EditAbility,webix.ui.dataview),webix.protoUI({name:"path",defaults:{layout:"x",separator:",",scroll:!1},$skin:function(){this.type.height=webix.skin.$active.buttonHeight||webix.skin.$active.inputHeight},$init:function(){this.$view.className+=" webix_path"},value_setter:function(e){return this.setValue(),e},setValue:function(e){this.clearAll(),e&&("string"==typeof e&&(e=e.split(this.config.separator)),this.parse(webix.copy(e)))},getValue:function(){return this.serialize()}},webix.ui.list);var t={modes:["table","files"],mode:"table",handlers:{},structure:{},fsIds:!0,templateName:webix.template("#value#"),templateSize:function(e){for(var t=e.size,n=webix.i18n.filemanager.sizeLabels,i=0;1<t/1024;)t/=1024,i++;var o=parseInt(t,10)==t;return webix.Number.numToStr({decimalDelimiter:webix.i18n.decimalDelimiter,groupDelimiter:webix.i18n.groupDelimiter,decimalSize:o?0:webix.i18n.groupSize})(t)+""+n[i]},templateType:function(e){var t=webix.i18n.filemanager.types;return t&&t[e.type]?t[e.type]:e.type},templateDate:function(e){var t=e.date;return"object"!=n(t)&&(t=new Date(1e3*parseInt(e.date,10))),webix.i18n.fullDateFormatStr(t)},templateCreate:function(){return{value:"newFolder",type:"folder",date:new Date}},templateIcon:function(e,t){return"<div class='webix_fmanager_icon fm-"+(t.icons[e.type]||t.icons.file)+"'></div>"},uploadProgress:{type:"icon",hide:!1},icons:{folder:"folder",excel:"file-excel",pdf:"file-pdf",pp:"file-powerpoint",text:"file-text",video:"file-video",image:"file-image",code:"file-code",audio:"file-audio",archive:"file-archive",doc:"file-word",file:"file"}};function i(t){t._cursorHistory=webix.extend([],webix.PowerArray,!0),t.$ready.push(function(){return function e(t){t.attachEvent("onAfterLoad",function(){if(!t.config.disabledHistory){var e=decodeURIComponent(window.location.hash);e&&0===e.indexOf("#!/")&&t.setPath(e.replace("#!/",""))}}),t.attachEvent("onAfterCursorChange",function(e){t._historyIgnore||(t._historyCursor||t._cursorHistory.splice(1),t._cursorHistory[this._historyCursor]!=e&&(20==t._cursorHistory.length&&t._cursorHistory.splice(0,1),t._cursorHistory.push(e),t._historyCursor=this._cursorHistory.length-1)),t._historyIgnore=!1,t.config.disabledHistory||function n(e,t){t=t||e.getCursor(),window.history&&window.history.replaceState?window.history.replaceState({webix:!0,id:e.config.id,value:t},"","#!/"+t):window.location.hash="#!/"+t}(t,e),t.callEvent("onHistoryChange",[e,t._cursorHistory,t._historyCursor])})}(t)})}function o(e,t){if(1<e._cursorHistory.length){var n=e._historyCursor+t;-1<n&&n<e._cursorHistory.length&&(e._historyIgnore=!0,e._historyCursor=n,e.setCursor(e._cursorHistory[n]))}return e.getCursor()}function s(e,t){for(var n=webix.DataStore.prototype.sorting.create(e),i=[],o=[],a=0;a<t.length;a++)"folder"==t[a].type?i.push(t[a]):o.push(t[a]);return i.sort(n),o.sort(n),i.concat(o)}function a(e){e.attachEvent("onBeforeCursorChange",function(){return!(e.$skipDynLoading=!1)}),function t(e){e.dataParser={files:function(e,t){this.config.noFileCache?r(this,
e.id):e.webix_files=0,c(this,t)},branch:function(e,t){this.config.noFileCache?r(this,e.id):(e.webix_branch=0,e.webix_child_branch=0),c(this,t)}}}(e)}function r(t,e){var n=[];t.data.eachChild(e,function(e){t.data.branch[e.id]||"folder"==e.type||n.push(e.id)},t,!0);for(var i=0;i<n.length;i++)t.remove(n[i])}function c(e,t){e.parse(t),e.$skipDynLoading=!0,e._refreshActiveFolder(),e.$skipDynLoading=!1}function l(n,i,o,a){var r=n.getItem(i[0]);n.showProgress();var e=n.config.handlers[o];if(e.load)return e.load(null,{action:o,source:i[0]}).then(function(e){if(n.hideProgress(),e=d(n,e),n.callEvent("onBeforeDynParse",[r,e,o])){r.open=!0,n.dataParser[o].call(n,r,e);var t=i.shift();i.length&&"folder"==n.getItem(i[0]).type?l(n,i,o,a):(n.refreshCursor(),a.resolve(t)),n.callEvent("onAfterDynParse",[r,e,o])}})}function u(e){for(var t in e.dataParser)if(e.config.handlers[t])return t;return null}function f(e,t){e.callEvent("onShowSearchResults",[]),e.$searchResults=!0;var n=e.$$(e.config.mode);n&&n.filter&&(n.clearAll(),e.sortState&&e.sortState.view==n.config.id&&(t=s(e.sortState.sort,t)),n.parse(t))}function d(e,t){return t&&"function"==typeof t.text&&(t=t.text()),e.data.driver.toObject(t)}function h(e){var t,n,i=[];if("string"==typeof e)for(n=e.replace(/^\//,"").split("/"),t=0;t<n.length;t++)i.push(n.slice(0,t+1).join("/"));return i}function v(n,e,i,o){n.callEvent("onBeforeRequest",[e,i])&&(g(n),e.load&&e.load(null,webix.copy(i)).then(function(e){e&&"function"==typeof e.text&&(e=e.text()),e=n.data.driver.toObject(e),function t(e){e._saveMessage&&(webix.html.remove(e._saveMessage),e._saveMessage=null)}(n),n.callEvent("onSuccessResponse",[i,e])&&o&&o.call(n,i,e)},function(e){n.callEvent("onErrorResponse",[i,e])&&p(n)}))}function g(e,t){e._saveMessageDate=new Date,e._saveMessage||(e._saveMessage=webix.html.create("DIV",{"class":"webix_fmanager_save_message"},""),e.$view.style.position="relative",webix.html.insertBefore(e._saveMessage,e.$view));var n="";n=t?webix.i18n.filemanager.errorResponse:webix.i18n.filemanager.saving,e._saveMessage.innerHTML=n}function p(i){var o=i.data.url;if(o){var a=i.data.driver;g(i,!0),webix.ajax().get(o,{success:function(e,t){var n=a.toObject(e,t);n&&(n=a.getDetails(a.getRecords(n)),i.clearAll(),i.parse(n),i.data.url=o)},error:function(){}})}}function m(e,t){return{id:e,width:32,value:'<div class="webix_fmanager_bar_icon webix_fmanager_'+e+'_mode "></div>',tooltip:webix.i18n.filemanager[t+"View"]}}function w(e,t){return e.attachEvent("onComponentInit",function(){return function a(t){var e,n,i=t.$$(t.config.mode),o=t.config.modes;i&&(i.show(),t.attachEvent("onBeforeCursorChange",function(){var e=t.$$(t.config.mode);return e&&e.unselect(),!0}),t.attachEvent("onAfterCursorChange",function(){var e=t.$$(t.config.mode);e&&e.editStop()}));if(o)for(e=0;e<o.length;e++)(n=t.$$(o[e]))&&n.filter&&b(t,n)}(e)}),{animate:!1,cells:t.modes?webix.copy(t.modes):[]}}function b(e,t){!function i(o,r){o.data.attachEvent("onClearAll",function(){return r.clearAll()}),o.data.attachEvent("onIdChange",function(e,t){r.data.pull[e]&&r.data.changeId(e,t)}),r.attachEvent("onBeforeSelect",function(){r.$skipBinding=!0}),o.attachEvent("onBeforeCursorChange",function(){r.$skipBinding=!1}),o.attachEvent("onAfterCursorChange",function(){r.$skipBinding=!1}),r.bind(o,"$data",function(e,t){var n;if(r.$skipBinding)return!1;if(!e)return r.clearAll();if(!o.$searchResults){if(!o.$skipDynLoading)for(var i in o.dataParser)!n&&e["webix_"+i]&&(n=o.config.handlers[i])&&(o.$skipDynLoading=!0,o.loadDynData(n,e,i));!function a(e,t,n,i){var o=[].concat(webix.copy(n.data.getBranch(i.id))).concat(i.files||[]);e.sortState&&e.sortState.view==t.config.id&&(o=s(e.sortState.sort,o));t.data.importData(o,!0)}(o,r,t,e)}})}(e,t),function o(e,t){t.type.icons=e.config.icons,t.type.templateIcon=e.config.templateIcon,t.type.templateName=e.config.templateName,t.type.templateSize=e.config.templateSize,t.type.templateDate=e.config.templateDate,t.type.templateType=e.config.templateType}(e,t),function a(o,e){e.attachEvent("onAfterSelect",function(e){o.getItem(e)&&o.callEvent(
"onItemSelect",[e])}),e.attachEvent("onItemDblClick",function(e){o._onFileDblClick(e)}),o._addElementHotKey("tab",function(e){if(!e.getSelectedId()){var t=e.getFirstId();t&&e.select(t)}},e),e.attachEvent("onFocus",function(){o._activeView=this,webix.html.removeCss(this.$view,"webix_blur")}),e.attachEvent("onBlur",function(){o.getMenu()&&o.getMenu().isVisible()||webix.html.addCss(e.$view,"webix_blur")}),e.attachEvent("onBeforeEditStop",function(e,t){return this.getTopParentView().callEvent("onBeforeEditStop",[t.id||t.row,e,t,this])}),e.attachEvent("onAfterEditStop",function(e,t){var n=this.getTopParentView();n.callEvent("onAfterEditStop",[t.id||t.row,e,t,this])&&(t.column&&"value"!=t.column?t.column&&(n.getItem(t.id||t.row)[t.column]=e.value):n.renameFile(t.id||t.row,e.value))}),e.attachEvent("onBeforeDrop",function(e,t){return o.callEvent("onBeforeDrop",[e])&&e.from&&(o.moveFile(e.source,e.target),o.callEvent("onAfterDrop",[e,t])),!1}),e.attachEvent("onBeforeDrag",function(e,t){return!o.config.readonly&&o.callEvent("onBeforeDrag",[e,t])}),e.attachEvent("onBeforeDragIn",function(e,t){return!o.config.readonly&&o.callEvent("onBeforeDragIn",[e,t])}),o._addElementHotKey("enter",function(e){for(var t=e.getSelectedId(!0),n=0;n<t.length;n++)o._onFileDblClick(t[n]);if(webix.UIManager.setFocus(e),!(t=e.getSelectedId(!0)).length){var i=e.getFirstId();i&&e.select(i)}},e)}(e,t);var n=e.getMenu();n&&!e.config.readonly&&function c(a,e,r){e.on_context.webix_view=function(e,t){this.locate(e.target||e.srcElement)||(r.setContext&&r.setContext({obj:webix.$$(e)}),r.show(e),webix.html.preventEvent(e))},r.attachTo(e),e.attachEvent("onBeforeMenuShow",function(){var e=r.getContext(),n="";if(e.id&&(n="folder"===a.getItem(e.id).type?"folder":"file"),r.filter(function(e){var t=!0;return e.batch&&(t=n?e.batch==n||"item"==e.batch:"empty"==e.batch),a.config.menuFilter&&(t=t&&a.config.menuFilter(e)),t}),r.count()&&e.id){webix.UIManager.setFocus(this);var t=this.getSelectedId(),i=!1;if(webix.isArray(t))for(var o=0;!i&&o<t.length;o++)""+t[o]==""+e.id&&(i=!0);!i&&this.exists(e.id)&&this.select(e.id)}return 0<r.count()}),e.attachEvent("onAfterMenuShow",function(e){if(e){for(var t=this.getSelectedId(!0),n=!1,i=0;i<t.length&&!n;i++)t[i].toString()==e.toString()&&(n=!0);n||this.select(e.toString()),webix.UIManager.setFocus(this)}else this.unselect()})}(e,t,n),e.config.readonly&&(t.define("drag",!1),t.define("editable",!1))}function x(t){return t.attachEvent("onComponentInit",function(){return function e(o){o.$$("table")&&(o.attachEvent("onHideSearchResults",function(){o.$$("table").isColumnVisible("location")&&o.$$("table").hideColumn("location")}),o.attachEvent("onShowSearchResults",function(){o.$$("table").isColumnVisible("location")||o.$$("table").showColumn("location")}),o.$$("table").attachEvent("onBeforeEditStart",function(e){return"object"==n(e)||(this.edit({row:e,column:"value"}),!1)}),o.$$("table").data.attachEvent("onBeforeSort",function(e,t,n,i){if(o.sortState={view:o.$$("table").config.id,sort:i},o.$searchResults&&o.$$("search"))return o.showSearchResults(o.$$("search").getValue()),!1}),o.data.attachEvent("onClearAll",function(){o.sortState=null}))}(t)}),{view:"filetable",css:"webix_fmanager_table",columns:"columns",headerRowHeight:34,editable:!0,editaction:!1,select:"multiselect",drag:!0,navigation:!0,resizeColumn:!0,tabFocus:!0,onContext:{}}}function _(e){return e.attachEvent("onComponentInit",function(){return function t(e){e.$$("hideTree")&&e.$$("hideTree").attachEvent("onItemClick",function(){e.hideTree()})}(e)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_toggle",label:'<div class="webix_fmanager_bar_icon "></div>',width:30,tooltip:webix.i18n.filemanager.hideTree}}function y(e){return e.attachEvent("onComponentInit",function(){return function t(o){var i,a=o.$$("tree");if(a){a.type.icons=o.config.icons,a.sync(o,function(){this.filter(function(e){return e.$count||"folder"==e.type})}),a.on_click.webix_tree_child_branch=function(e,t){var n=o.config.handlers.branch;n&&o.loadDynData(n,this.getItem(t),"branch",!0)},o.attachEvent(
"onBeforeDynParse",function(){i=a.getState()}),o.attachEvent("onAfterDynParse",function(e,t,n){i&&(a.setState(i),i=null),"branch"==n&&e.open&&a.open(e.id)}),a.attachEvent("onAfterSelect",function(e){o.callEvent("onFolderSelect",[e])}),o.attachEvent("onAfterCursorChange",function(e){e&&(a.select(e),a.showItem(e))}),a.attachEvent("onItemClick",function(){o.$searchResults&&o.hideSearchResults()}),o.attachEvent("onItemRename",function(e){a.refresh(e)}),a.attachEvent("onItemDblClick",function(e){this.isBranchOpen(e)?this.close(e):this.open(e)}),a.attachEvent("onBlur",function(){o.getMenu()&&o.getMenu().isVisible()||webix.html.addCss(this.$view,"webix_blur")}),a.attachEvent("onFocus",function(){o._activeView=a,webix.html.removeCss(a.$view,"webix_blur"),o.$$(o.config.mode).unselect()}),o.attachEvent("onPathComplete",function(e){a.showItem(e)}),o.config.readonly||(o.getMenu()&&o.getMenu().attachTo(a),a.attachEvent("onBeforeMenuShow",function(e){var t=o.getMenu(),n=t.getContext(),i="";return n.id&&this.getParentId(n.id)&&(i="folder"===o.getItem(n.id).type?"folder":"file"),t.filter(function(e){var t=!0;return e.batch&&(t=i?e.batch==i||"item"==e.batch:"empty"==e.batch),o.config.menuFilter&&(t=t&&o.config.menuFilter(e)),t}),this.select(e),webix.UIManager.setFocus(this),0<t.count()})),a.attachEvent("onBeforeEditStop",function(e,t){return o.callEvent("onBeforeEditStop",[t.id,e,t,a])}),a.attachEvent("onAfterEditStop",function(e,t){o.callEvent("onAfterEditStop",[t.id,e,t,a])&&o.renameFile(t.id,e.value)}),a.attachEvent("onBeforeDrag",function(e,t){return!o.config.readonly&&o.callEvent("onBeforeDrag",[e,t])}),a.attachEvent("onBeforeDragIn",function(e,t){return!o.config.readonly&&o.callEvent("onBeforeDragIn",[e,t])}),a.attachEvent("onBeforeDrop",function(e,t){return o.callEvent("onBeforeDrop",[e,t])&&e.from&&(o.moveFile(e.source,e.target),o.callEvent("onAfterDrop",[e,t])),!1});var e=function(){a&&webix.UIManager.setFocus(a)};o.attachEvent("onAfterBack",e),o.attachEvent("onAfterForward",e),o.attachEvent("onAfterLevelUp",e),o.attachEvent("onAfterPathClick",e),o.config.readonly&&(a.define("drag",!1),a.define("editable",!1))}}(e)}),{width:251,view:"filetree",id:"tree",select:!0,filterMode:{showSubItems:!1,openParents:!1},type:"FileTree",navigation:!0,editor:"text",editable:!0,editaction:!1,drag:!0,tabFocus:!0,onContext:{}}}function $(t,e){t.structure={mainLayout:function n(){var e={type:"clean",rows:["toolbar","bodyLayout"]};return"undefined"==typeof SVGRect&&(e.css="webix_nosvg"),e}(),toolbar:{css:"webix_fmanager_toolbar",paddingX:10,paddingY:5,margin:7,cols:["menu",{id:"menuSpacer",width:75},{margin:0,cols:["back","forward"]},"up","path","search","modes"]},menu:function i(e){return e.attachEvent("onComponentInit",function(){return function n(e){var t=e.$$("menu");t&&(t.attachEvent("onItemClick",function(){e.callEvent("onBeforeMenu",[])&&(e.getMenu().setContext({obj:e.getActiveView(),id:e.getActive()}),e.getMenu().show(t.$view),e.callEvent("onAfterMenu",[]))}),e.config.readonly&&(t.hide(),e.$$("menuSpacer")&&e.$$("menuSpacer").hide()))}(e)}),{view:"button",type:"htmlbutton",label:'<div class="webix_fmanager_bar_icon "></div>',css:"webix_fmanager_menu",icon:"bars",width:37,tooltip:webix.i18n.filemanager.actions}}(t),back:function o(t){return t.attachEvent("onComponentInit",function(){return function e(i){i.$$("back")&&(i.$$("back").attachEvent("onItemClick",function(){i.callEvent("onBeforeBack",[])&&(i.goBack(),i.callEvent("onAfterBack",[]))}),i.attachEvent("onHistoryChange",function(e,t,n){n?i.$$("back").enable():i.$$("back").disable()}))}(t)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_back",label:'<div class="webix_fmanager_bar_icon "></div>',width:37,tooltip:webix.i18n.filemanager.back}}(t),forward:function a(t){return t.attachEvent("onComponentInit",function(){return function e(i){i.$$("forward")&&(i.$$("forward").attachEvent("onItemClick",function(){i.callEvent("onBeforeForward",[])&&(i.goForward(),i.callEvent("onAfterForward",[]))}),i.attachEvent("onHistoryChange",function(e,t,n){1==t.length||n==t.length-1?i.$$("forward"
).disable():i.$$("forward").enable()}))}(t)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_forward",label:'<div class="webix_fmanager_bar_icon "></div>',width:37,tooltip:webix.i18n.filemanager.forward}}(t),up:function r(e){return e.attachEvent("onComponentInit",function(){return function t(e){e.$$("up")&&e.$$("up").attachEvent("onItemClick",function(){e.callEvent("onBeforeLevelUp",[])&&(e.levelUp(),e.callEvent("onAfterLevelUp",[]))})}(e)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_up",label:'<div class="webix_fmanager_bar_icon "></div>',width:37,tooltip:webix.i18n.filemanager.levelUp}}(t),path:function c(t){return t.attachEvent("onComponentInit",function(){return function e(i){i.$$("path")&&(i.attachEvent("onFolderSelect",function(e){i.$$("path").setValue(i.getPathNames(e))}),i.$$("path").attachEvent("onItemClick",function(e){var t=i.$$("path").getIndexById(e),n=i.$$("path").count()-t-1;if(i.$searchResults&&i.hideSearchResults(),n){for(e=i.getCursor();n;)e=i.getParentId(e),n--;i.setCursor(e)}i.callEvent("onAfterPathClick",[e])}),i.data.attachEvent("onClearAll",function(){i.$$("path").clearAll()}))}(t)}),{view:"path",borderless:!0}}(t),search:function s(t){return t.attachEvent("onComponentInit",function(){return function e(t){var n=t.$$("search");n&&(t.attachEvent("onHideSearchResults",function(){n.setValue("")}),t.attachEvent("onBeforeCursorChange",function(){t.$searchResults&&t.hideSearchResults(!0)}),n.attachEvent("onTimedKeyPress",function(){if(9!=this._code){var e=n.getValue();e?t.callEvent("onBeforeSearch",[e])&&(t.showSearchResults(e),t.callEvent("onAfterSearch",[e])):t.$searchResults&&t.hideSearchResults()}}),n.attachEvent("onKeyPress",function(e){this._code=e}),t.attachEvent("onAfterModeChange",function(){t.$searchResults&&t.showSearchResults(n.getValue())}))}(t)}),{view:"search",gravity:.3,minWidth:80,css:"webix_fmanager_search",icon:" webix_fmanager_icon"}}(t),bodyLayout:{css:"webix_fmanager_body",cols:["sidePanel","treeLayout",{view:"resizer",id:"resizer",width:3},"modeViews"]},treeLayout:{rows:["treeToolbar","tree"]},sidePanel:function l(e){return e.attachEvent("onComponentInit",function(){return function t(e){e.$$("showTree")&&e.$$("showTree").attachEvent("onItemClick",function(){e.showTree()})}(e)}),{hidden:!0,css:"webix_fmanager_panel",type:"clean",rows:[{height:34,paddingY:1,paddingX:0,view:"form",cols:[{view:"button",id:"showTree",type:"htmlbutton",css:"webix_fmanager_toggle",label:'<div class="webix_fmanager_bar_icon "></div>',width:30,tooltip:webix.i18n.filemanager.showTree}]},{template:" "}]}}(t),treeToolbar:{css:"webix_fmanager_tree_toolbar",height:34,paddingX:8,paddingY:1,margin:7,cols:["hideTree",{id:"treeSpacer"},"expandAll","collapseAll"]},showTree:_(t),hideTree:_(t),expandAll:function u(e){return e.attachEvent("onComponentInit",function(){return function t(e){e._getDynMode()&&e.$$("expandAll")&&e.$$("expandAll").hide(),e.$$("expandAll")&&e.$$("tree")&&e.$$("expandAll").attachEvent("onItemClick",function(){e.$$("tree").openAll()})}(e)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_expand",label:'<div class="webix_fmanager_bar_icon "></div>',width:30,tooltip:webix.i18n.filemanager.expandTree}}(t),collapseAll:function f(e){return e.attachEvent("onComponentInit",function(){return function t(e){e._getDynMode()&&e.$$("collapseAll")&&e.$$("collapseAll").hide(),e.$$("collapseAll")&&e.$$("tree")&&e.$$("collapseAll").attachEvent("onItemClick",function(){e.$$("tree").closeAll()})}(e)}),{view:"button",type:"htmlbutton",css:"webix_fmanager_collapse",label:'<div class="webix_fmanager_bar_icon "></div>',width:30,tooltip:webix.i18n.filemanager.collapseTree}}(t),tree:y(t),modeViews:{config:function(e){return w(t,e)}},modes:{config:function(e){return function i(t,e){t.attachEvent("onComponentInit",function(){return function e(n){n.$$("modes")&&n.$$("modes").attachEvent("onBeforeTabClick",function(e){var t=n.$$("modes").getValue();return!(!n.callEvent("onBeforeModeChange",[t,e])||!n.$$(e)||(n.config.mode=e,n.$$(e).show(),n.callEvent("onAfterModeChange",[t,e]),0))})}(t)});var n=[]
;return e.modes.forEach(function(e){"table"==e?n.push(m(e,"table")):"files"==e&&n.push(m(e,"icons"))}),{view:"segmented",width:70,options:n,css:"webix_fmanager_modes",value:e.mode}}(t,e)}},files:{config:{view:"fileview",type:"FileView",select:"multiselect",editable:!0,editaction:!1,editor:"text",editValue:"value",drag:!0,navigation:!0,tabFocus:!0,onContext:{}}},table:{config:x(t)},columns:{config:function d(t){var e=webix.i18n.filemanager;return[{id:"value",header:e.name,fillspace:3,sort:"string",template:function(e,t){var n=t.templateName(e,t);return t.templateIcon(e,t)+n},editor:"text"},{id:"date",header:e.date,fillspace:2,sort:"int",template:function(e,t){return t.templateDate(e,t)}},{id:"type",header:e.type,fillspace:1,sort:"string",template:function(e,t){return t.templateType(e)}},{id:"size",header:e.size,fillspace:1,sort:"int",css:{"text-align":"right"},template:function(e,t){return"folder"==e.type?"":t.templateSize(e)}},{id:"location",header:e.location,fillspace:2,sort:"string",template:function(e){return t._getLocation(e)},hidden:!0}]}(t)}},function h(e,t){var n,i,o=t.structure;if(o)for(i in o)o.hasOwnProperty(i)&&(n=webix.copy(o[i]),e.structure[i]&&e.structure[i].config?e.structure[i].config=n.config||n:e.structure[i]=n.config||n)}(t,e)}function E(e,t,n){var i=t.config||t;return"function"==typeof i?i.call(e,n):webix.copy(i)}function I(e,t){var n=e.structure.mainLayout,i=webix.extend({},n.config||n);return function l(e,t,n){var i,o,a,r,c="",s=["rows","cols","elements","cells","columns","options","data"];for(a=0;a<s.length;a++)t[s[a]]&&(i=t[c=s[a]]);if(i)for("string"==typeof i&&e.structure[i]&&(t[c]=E(e,e.structure[i],n),i=t[c]),a=0;a<i.length;a++)o=null,"string"==typeof i[a]&&(o=r=i[a],e.structure[r]?(i[a]=E(e,webix.extend({},e.structure[r]),n),i[a].id=r):i[a]={}),l(e,i[a],n),o&&(n.on&&n.on.onViewInit&&n.on.onViewInit.apply(this,[o,i[a]]),webix.callEvent("onViewInit",[o,i[a],this]))}(e,i,t),t.on&&t.on.onViewInit&&t.on.onViewInit.apply(e,[t.id||"mainLayout",i]),webix.callEvent("onViewInit",[t.id||"mainLayout",i,e]),function o(){return"undefined"!=typeof SVGRect}()||(t.css=t.css?t.css+" webix_nosvg":"webix_nosvg"),i}function C(e){return e?{view:"uploader",css:"webix_upload_select_ie",type:"iconButton",icon:"check",label:webix.i18n.filemanager.select,formData:{action:"upload"},urlData:{}}:{view:"uploader",apiOnly:!0,formData:{action:"upload"},urlData:{}}}function S(i){var o=A(i);if(o){o.config.upload=i.config.handlers.upload;var e=i.config.modes;if(e&&!i.config.readonly)for(var t=0;t<e.length;t++)i.$$(e[t])&&o.addDropZone(i.$$(e[t]).$view);o.attachEvent("onBeforeFileAdd",function(e){var t=""+function n(e){return e._uploaderFolder||e.getCursor()}(i);return o.config.formData.target=t,o.config.urlData.target=t,o.config.upload=i.config.handlers.upload,i.callEvent("onBeforeFileUpload",[e])}),o.attachEvent("onAfterFileAdd",function(e){i._uploaderFolder=null,e.oldId=e.id,i.add({id:e.id,value:e.name,type:e.type,size:e.size,date:Math.round((new Date).valueOf()/1e3)},-1,o.config.formData.target),i.config.uploadProgress&&i.showProgress(i.config.uploadProgress),i._refreshActiveFolder()}),o.attachEvent("onUploadComplete",function(e){i._uploadPopup&&(i.getMenu().hide(),i._uploadPopup.hide()),i.hideProgress(),i.callEvent("onAfterFileUpload",[e])}),o.attachEvent("onFileUpload",function(e){e.oldId&&i.data.changeId(e.oldId,e.id),e.value&&(i.getItem(e.id).value=e.value),i.getItem(e.id).type=e.type,i._refreshActiveFolder()}),o.attachEvent("onFileUploadError",function(e,t){p(i),i.hideProgress()})}}function F(e,t){t||(t=C(e.config.legacyUploader)),e._uploadPopup=webix.ui({view:"popup",padding:0,width:250,body:t}),e._uploader=e._uploadPopup.getBody(),e.attachEvent("onDestruct",function(){e._uploadPopup.destructor()})}function A(e){return e._uploader}webix.protoUI({name:"filemanager",$init:function(e){var t=this;this.$view.className+=" webix_fmanager",webix.extend(this.data,webix.TreeStore,!0),this.data.provideApi(this,!0),webix.extend(e,this.defaults),e.mode=e.mode||e.modes[0],$(this,e),i(this),a(this),
e.legacyUploader=e.legacyUploader||webix.isUndefined(XMLHttpRequest)||webix.isUndefined((new XMLHttpRequest).upload),this.$ready.push(function(){t._beforeInit(),t.callEvent("onComponentInit",[])}),webix.UIManager.tabControl=!0,webix.extend(e,I(this,e)),this.attachEvent("onAfterLoad",function(){var e=this;if(!this.getCursor||!this.getCursor()){var t=this.config.defaultSelection;t=t?t.call(this):this.getFirstChildId(0),this.setCursor?this.setCursor(t):this.attachEvent("onComponentInit",function(){e.setCursor(t)})}})},handlers_setter:function(e){for(var t in"string"==typeof e&&(e=this.setDefaultHandlers(e)),e){var n=e[t];if("string"==typeof n)if(-1!=n.indexOf("->")){var i=n.split("->");n=webix.proxy(i[0],i[1])}else"upload"!=t&&"download"!=t&&(n=webix.proxy("post",n));e[t]=n}return e},setDefaultHandlers:function(e){return{upload:e,download:e,copy:e,move:e,remove:e,rename:e,create:e}},_beforeInit:function(){e(this),function i(e){var t=e.config.legacyUploader,n=C(t);n&&(t?F(e,webix.copy(n)):(e._uploader=webix.ui(n),e.attachEvent("onDestruct",function(){e._uploader.destructor()}))),S(e)}(this),this.attachEvent("onFolderSelect",function(e){this.setCursor(e)}),this.attachEvent("onBeforeDragIn",function(e){var t=e.target;if(t)for(var n=e.source,i=0;i<n.length;i++)for(;t;){if(t==n[i])return!1;t=this._getParentId(t)}return!0})},_getParentId:function(e){if(this.getItem(e))return webix.TreeStore.getParentId.apply(this,arguments);var t=this.$$(this.config.mode).getItem(e);return t&&t.parent&&this.getItem(t.parent)?t.parent:null},getMenu:function(){return this._contextMenu},getPath:function(e){return function i(e,t){t=t||e.getCursor();for(var n=[];t&&e.getItem(t);)n.push(t),t=e.getParentId(t);return n.reverse()}(this,e)},getPathNames:function(e){return function o(e,t){t=t||e.getCursor();for(var n=null,i=[];t&&e.getItem(t);)n=e.getItem(t),i.push({id:t,value:e.config.templateName(n)}),t=e.getParentId(t);return i.reverse()}(this,e)},setPath:function(e){return function o(e,t){for(var n=t;n&&e.getItem(n);)e.callEvent("onPathLevel",[n]),n=e.getParentId(n);if(e.getItem(t))t!=e.getCursor()&&(e.setCursor(t),e.callEvent("onPathComplete",[t]));else{var i=h(t);e.openFolders(i).then(function(){e.setCursor(t),e.callEvent("onPathComplete",[t])})}}(this,e)},_getLocation:function(e){var t,n="";if(this.getItem(e.id)||e.parent&&this.getItem(e.parent)){e.parent?(t=this.getPathNames(e.parent)).shift():((t=this.getPathNames(e.id)).shift(),t.pop());for(var i=[],o=0;o<t.length;o++)i.push(t[o].value);n="/"+i.join("/")}else if(e.location)n=e.location;else if("string"==typeof e.id){var a=e.id.split("/");a.pop(),n="/"+a.join("/")}return n},getSearchData:function(e,t){var n=[];return this.data.each(function(e){0<=this.config.templateName(e).toLowerCase().indexOf(t.toLowerCase())&&n.push(webix.copy(e))},this,!0,e),n},showSearchResults:function(e){var t=this.getCursor();this.config.handlers.search?function a(t,e,n,i){var o={action:"search",source:n,text:i};if(t.callEvent("onBeforeSearchRequest",[n,o])&&e.load)return e.load(null,o).then(function(e){t.hideProgress(),e=d(t,e),f(t,e),t.$searchValue=i},function(){t.hideProgress()})}(this,this.config.handlers.search,t,e):f(this,this.getSearchData(t,e))},hideSearchResults:function(e){if(this.$searchResults&&(this.callEvent("onHideSearchResults",[]),this.$searchResults=!1,!e)){var t=this.getCursor();this.blockEvent(),this.setCursor(null),this.unblockEvent(),this.setCursor(t)}},goBack:function(e){return o(this,e=e?-1*Math.abs(e):-1)},goForward:function(e){return o(this,e||1)},levelUp:function(e){(e=e||this.getCursor())&&(e=this.getParentId(e),this.setCursor(e))},markCopy:function(e){e&&(webix.isArray(e)||(e=[e]),this._moveData=e,this._copyFiles=!0)},markCut:function(e){e&&(webix.isArray(e)||(e=[e]),this._moveData=e,this._copyFiles=!1)},pasteFile:function(e){webix.isArray(e)&&(e=e[0]),e&&(e=e.toString(),this.getItem(e)&&"folder"==this.getItem(e).type&&this._moveData&&(this._copyFiles?this.copyFile(this._moveData,e):this.moveFile(this._moveData,e)))},download:function(e){var t=this.config.handlers.download;t&&webix.send(t,{
action:"download",source:e})},fileExists:function(t,e,n){var i=!1;return this.data.eachChild(e,webix.bind(function(e){t!=e.value||n&&e.id==n||(i=e.id)},this)),i},_refreshActiveFolder:function(){this.$skipDynLoading=!0,this.$$(this.config.mode).$skipBinding=!1,this.refreshCursor()},_setFSId:function(e){var t=this.getParentId(e.id)+"/"+e.value;e.id!=t&&this.data.changeId(e.id,t)},_changeChildIds:function(e){this.data.eachSubItem(e,webix.bind(function(e){e.value&&this._setFSId(e)},this))},_callbackRename:function(e,t){var n=this.getItem(e);n.value!=t&&(n.value=t,this.$$("tree").updateItem(e,{value:t}),this._refreshActiveFolder(),this.callEvent("onItemRename",[e]))},_moveFile:function(e,t,n){var i=n?"copy":"move",o=[];e.reverse();for(var a=0;a<e.length;a++)if(this.getItem(e[a])){var r=this.move(e[a],0,this,{parent:t,copy:!!n});o.push(r)}this._refreshActiveFolder();var c=this.config.handlers[i];c&&v(this,c,{action:i,source:e.join(","),temp:o.join(","),target:t.toString()},function(e,t){if(t&&webix.isArray(t))for(var n=e.temp.split(","),i=0;i<t.length;i++)t[i].id&&t[i].id!=n[i]&&this.data.pull[n[i]]&&(this.data.changeId(n[i],t[i].id),this.config.fsIds&&this._changeChildIds(t[i].id),t[i].value&&this._callbackRename(t[i].id,t[i].value));this._updateDynSearch()})},_updateDynSearch:function(){this.$searchResults&&this.$searchValue&&this.showSearchResults(this.$searchValue)},copyFile:function(e,t){this.moveFile(e,t,!0)},moveFile:function(e,t,n){var i,o,a;for("string"==typeof e&&(e=e.split(",")),webix.isArray(e)||(e=[e]),t?this.data.branch[t]||"folder"==this.getItem(t.toString()).type||(t=this.getParentId(t)):t=this.getCursor(),a=!0,t=t.toString(),i=0;i<e.length;i++)o=e[i].toString(),a=a&&this._isMovingAllowed(o,t);a?this._moveFile(e,t,!!n):this.callEvent(n?"onCopyError":"onMoveError",[])},deleteFile:function(e,t){"string"==typeof e&&(e=e.split(",")),webix.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var i=e[n];this.$$(this.config.mode).isSelected(i)&&this.$$(this.config.mode).unselect(i),i==this.getCursor()&&this.setCursor(this.getFirstId()),i&&this.remove(i)}this._refreshActiveFolder();var o=this.config.handlers.remove;o?(t&&(t=webix.bind(t,this)),v(this,o,{action:"remove",source:e.join(",")},t)):t&&t.call(this)},_createFolder:function(e,t){this.add(e,0,t),this._refreshActiveFolder();var n=this.config.handlers.create;n&&v(this,n,{id:e.id,source:e.value,target:t,action:"create"},function(e,t){t.id&&(e.id!=t.id&&this.data.changeId(e.id,t.id),this.config.fsIds&&this._changeChildIds(t.id),t.value&&this._callbackRename(t.id,t.value))})},createFolder:function(e){if("string"==typeof e&&(e=e.split(",")),webix.isArray(e)&&(e=e[0]),e){e=""+e;var t=this.getItem(e);this.data.branch[e]||"folder"==t.type||(e=this.getParentId(e));var n=this.config.templateCreate(t);e=""+e,this._createFolder(n,e)}},editFile:function(e){webix.isArray(e)&&(e=e[0]),this.getActiveView()&&this.getActiveView().edit&&this.getActiveView().edit(e)},renameFile:function(e,t,n){var i=this.getItem(e);n=n||"value",i&&(i[n]=t),this.refresh(i?e:""),this._refreshActiveFolder(),this.callEvent("onFolderSelect",[this.getCursor()]);var o=this.config.handlers.rename;o&&v(this,o,{source:e,action:"rename",target:t},function(e,t){t.id&&this.getItem(e.source)&&(e.source!=t.id&&this.data.changeId(e.source,t.id),this.config.fsIds&&this._changeChildIds(t.id),t.value&&this._callbackRename(t.id,t.value)),this._updateDynSearch()})},_isMovingAllowed:function(e,t){for(;t;){if(t==e||!this.data.branch[t]&&"folder"!=this.getItem(t.toString()).type)return!1;t=this.getParentId(t)}return!0},getActiveView:function(){return this._activeView||this.$$("tree")||null},getActive:function(){var e=this.getSelectedFile();return e||this.getCursor()},getCurrentFolder:function(){return this.$$("tree").getSelectedId()},getSelectedFile:function(){var e=null,t=this.$$(this.config.mode).getSelectedId();if(t)if(webix.isArray(t)){e=[];for(var n=0;n<t.length;n++)e.push(t[n].toString())}else e=t.toString();return e},_openFolder:function(e){this.callEvent("onBeforeLevelDown",[e])&&(this.setCursor(e),this.callEvent(
"onAfterLevelDown",[e]))},_runFile:function(e){this.callEvent("onBeforeRun",[e])&&(this.download(e),this.callEvent("onAfterRun",[e]))},_onFileDblClick:function(e){e=e.toString();var t=this.getItem(e);if(t)this.data.branch[e]||"folder"==t.type?this._openFolder(e):this._runFile(e);else if(this.$$(this.config.mode).filter)if("folder"!=(t=this.$$(this.config.mode).getItem(e)).type)this._runFile(e);else{var n=t&&t.parents?t.parents:h(e);n.length&&this.openFolders(n).then(webix.bind(function(){this._openFolder(e)},this))}},openFolders:function(e){return function r(e,t){var n,i,o,a=webix.promise.defer();if((n=u(e))&&t.length){for(i=0;i<t.length;i++){if(!(o=e.getItem(t[i]))||o["webix_"+n])return l(e,t.slice(i),n,a),a;o.open=!0,e.$$("tree")&&e.$$("tree").refresh(t[i])}a.resolve(t[i])}else a.reject();return a}(this,e)},_addElementHotKey:function(e,t,n){var i=webix.UIManager.addHotKey(e,t,n);(n||this).attachEvent("onDestruct",function(){webix.UIManager.removeHotKey(i,t,n)})},clearBranch:function(e){r(this,e)},parseData:function(e){c(this,e)},_getDynMode:function(){return u(this)},loadDynData:function(e,t,n,i){!function a(t,e,n,i,o){if(t.showProgress(),t.callEvent("onBeforeDynLoad",[e,n,i,o])&&e.load)return e.load(null,{action:i,source:n.id}).then(function(e){t.hideProgress(),e=d(t,e),o&&(n.open=!0),t.callEvent("onBeforeDynParse",[n,e,i])&&(t.dataParser[i].call(t,n,e),t.callEvent("onAfterDynParse",[n,e,i]))},function(){t.hideProgress(),t.callEvent("onDynLoadError",[])})}(this,e,t,n,i)},getUploader:function(){return A(this)},uploadFile:function(e,t){return function i(e,t,n){e.data.branch[t]||"folder"==e.getItem(t).type||(t=e.getParentId(t)),e._uploaderFolder=t,e._uploadPopup?(e._uploadPopup.destructor(),F(e),S(e),e._uploadPopup.show(n,{x:20,y:5})):e._uploader&&e._uploader.fileDialog()}(this,e,t)},hideTree:function(){this.callEvent("onBeforeHideTree",[])&&(!function t(e){e.$$("treeLayout")&&(e.$$("treeLayout").hide(),e.$$("resizer")&&e.$$("resizer").hide(),e.$$("sidePanel")&&e.$$("sidePanel").show())}(this),this.callEvent("onAfterHideTree",[]))},showTree:function(){this.callEvent("onBeforeShowTree",[])&&(!function t(e){e.$$("treeLayout")&&(e.$$("treeLayout").show(),e.$$("resizer")&&e.$$("resizer").show(),e.$$("sidePanel")&&e.$$("sidePanel").hide())}(this),this.callEvent("onAfterShowTree",[]))},defaults:t},webix.ProgressBar,webix.IdSpace,webix.ui.layout,webix.TreeDataMove,webix.TreeDataLoader,webix.DataLoader,webix.EventSystem,webix.Settings)});
//# sourceMappingURL=filemanager.js.map
