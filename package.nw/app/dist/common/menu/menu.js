"use strict";function init(){var e=require("../actions/actions.js"),n=new nw.Menu({type:"menubar"}),t=new nw.Menu({type:"menubar"}),i="darwin"===process.platform,r=i?"cmd":"ctrl";if("darwin"===process.platform){var l=function(){var e=[{label:"新建文件",key:"n",modifiers:r,click:d("newFile")},{label:"保存",key:"s",modifiers:r,click:d("save")},{label:"保存所有文件",key:"s",modifiers:"shift+"+r,click:d("saveAll")},{label:"关闭文件",key:"w",modifiers:r,click:d("closeFile")},{type:"separator"},{label:"关闭项目",click:d("closeProject")}],n=new nw.Menu,t=!0,i=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var o=a.value;n.append(new nw.MenuItem(Object.assign(o)))}}catch(e){i=!0,l=e}finally{try{!t&&u.return&&u.return()}finally{if(i)throw l}}return n},a=function(){var e=new nw.Menu({type:"menubar"});e.createMacBuiltin("temp",{hideEdit:!1,hideWindow:!0}),e.items[1].label="编辑";var n=e.items[1].submenu.items[0];e.items[1].submenu.removeAt(0),n.label="撤销";var t=e.items[1].submenu.items[0];e.items[1].submenu.removeAt(0),t.label="重做";var i=e.items[1].submenu.items[2];e.items[1].submenu.removeAt(2),i.label="复制";var r=e.items[1].submenu.items[1];e.items[1].submenu.removeAt(1),r.label="剪切";var l=e.items[1].submenu.items[1];e.items[1].submenu.removeAt(1),l.label="粘贴";var a=u();return a.removeAt(0),a.insert(n,0),a.removeAt(1),a.insert(t,1),a.removeAt(3),a.insert(i,3),a.removeAt(4),a.insert(r,4),a.removeAt(5),a.insert(l,5),a},u=function(){var e=[{label:"撤销",key:"z",modifiers:r,click:d("undo")},{label:"重做",key:"z",modifiers:"shift+"+r,click:d("redo")},{type:"separator"},{label:"复制",key:"c",modifiers:r,click:d("copy")},{label:"剪切",key:"x",modifiers:r,click:d("cut")},{label:"粘贴",key:"v",modifiers:r,click:d("paste")},{type:"separator"},{label:"左缩进",key:"[",modifiers:r,click:d("unindent")},{label:"右缩进",key:"[",modifiers:r,click:d("indent")},{label:"格式化代码",key:"f",modifiers:"shift+alt",click:d("format")},{type:"separator"},{label:"代码上移一行",key:"up",modifiers:"alt",click:d("moveLineUp")},{label:"代码下移一行",key:"down",modifiers:"alt",click:d("moveLineDown")},{label:"复制并向上粘贴",key:"up",modifiers:"shift+alt",click:d("copyLineUp")},{label:"复制并向下粘贴",key:"down",modifiers:"shift+alt",click:d("copyLineDown")}],n=new nw.Menu,t=!0,i=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var o=a.value;n.append(new nw.MenuItem(Object.assign(o)))}}catch(e){i=!0,l=e}finally{try{!t&&u.return&&u.return()}finally{if(i)throw l}}return n},o=function(){var e=[{label:"搜索",key:"f",modifiers:r,click:d("find")},{label:"全局搜索",key:"f",modifiers:"shift+"+r,click:d("globalFind")},{label:"替换",key:i?"f":"h",modifiers:i?"alt+"+r:r,click:d("replace")}],n=new nw.Menu,t=!0,l=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var s=u.value;n.append(new nw.MenuItem(Object.assign(s)))}}catch(e){l=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(l)throw a}}return n},s=function(){var e=[{label:"显示 / 隐藏模拟器",key:"F1",modifiers:r,click:d("toggleSimulatorView")},{label:"显示 / 隐藏目录树",key:"F2",modifiers:r,click:d("toggleFileTreeView")}],n=new nw.Menu,t=!0,i=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var o=a.value;n.append(new nw.MenuItem(Object.assign(o)))}}catch(e){i=!0,l=e}finally{try{!t&&u.return&&u.return()}finally{if(i)throw l}}return n},m=function(){var e=[{label:"跳转到文件",key:"p",modifiers:r,click:d("gotoFile")},{label:"跳转到最近文件",key:"e",modifiers:r,click:d("gotoRecentFile")}],n=new nw.Menu,t=!0,i=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var o=a.value;n.append(new nw.MenuItem(Object.assign(o)))}}catch(e){i=!0,l=e}finally{try{!t&&u.return&&u.return()}finally{if(i)throw l}}return n},c=function(){var e=[{label:"编译",key:"b",modifiers:r,click:d("reBuild")},{label:"刷新",key:"r",modifiers:r,click:d("reBuild")}],n=new nw.Menu,t=!0,i=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var o=a.value;n.append(new nw.MenuItem(Object.assign(o)))}}catch(e){i=!0,l=e}finally{try{!t&&u.return&&u.return()}finally{if(i)throw l}}return n},b=function(){var e=[{label:"开发文档",click:d("jumpDoc")},{label:"更新日志",click:d("showChangeLog")},{label:"关于",click:d("showAbout")}],n=new nw.Menu,t=!0,i=!1,r=void 0;try{for(var l,a=e[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){var u=l.value;n.append(new nw.MenuItem(Object.assign(u)))}}catch(e){i=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(i)throw r}}return n},w=function(){var e=[{label:"开发者社区",click:d("jumpBbs")}],n=new nw.Menu,t=!0,i=!1,r=void 0;try{for(var l,a=e[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){var u=l.value;n.append(new nw.MenuItem(Object.assign(u)))}}catch(e){i=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(i)throw r}}return n},d=function(n){return function(){this.enabled&&e[n]()}};n.createMacBuiltin(nw.App.manifest.name,{hideEdit:!1,hideWindow:!0}),t.createMacBuiltin(nw.App.manifest.name,{hideEdit:!0,hideWindow:!0}),n.items[0].submenu.insert(new nw.MenuItem({label:"设置",key:",",modifiers:r,click:d("showSetting")}),2),n.items[0].submenu.insert(new nw.MenuItem({type:"separator"}),3),t.items[0].submenu.insert(new nw.MenuItem({label:"设置",key:",",modifiers:r,click:d("showSetting")}),2),t.items[0].submenu.insert(new nw.MenuItem({type:"separator"}),3),t.insert(new nw.MenuItem({label:"文件",submenu:l()}),1),t.append(new nw.MenuItem({label:"编辑",submenu:a()})),t.append(new nw.MenuItem({label:"查找",submenu:o()})),t.append(new nw.MenuItem({label:"界面",submenu:s()})),t.append(new nw.MenuItem({label:"跳转",submenu:m()})),n.append(new nw.MenuItem({label:"工具",submenu:c()})),n.append(new nw.MenuItem({label:"帮助",submenu:b()})),n.append(new nw.MenuItem({label:"开发者社区",submenu:w()})),t.append(new nw.MenuItem({label:"工具",submenu:c()})),t.append(new nw.MenuItem({label:"帮助",submenu:b()})),t.append(new nw.MenuItem({label:"开发者社区",submenu:w()})),_export={menu:n,menuWithEdit:t}}else _export={menu:{},menuWithEdit:{}}}var _export;init(),module.exports=_export;