// ==UserScript==
// @name         xZorro Shizoval
// @version      0.64.3
// @description  Free open-source game cheat for Tanki Online.
// @author       Zorro
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
    
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js
    
// @downloadURL  https://raw.githubusercontent.com/UUID1606/UUID1606/main/release/UUID.user.js
// @updateURL    https://raw.githubusercontent.com/UUID1606/UUID1606/main/release/UUID.meta.js
    
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
    
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/UUID1606/Shizoval-0.64.3/main/release/UUID.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})
