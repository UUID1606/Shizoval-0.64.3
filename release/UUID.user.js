// ==UserScript==
// @name         Hi_Hi_Cyclone
// @version      0.64.3
// @description  Free open-source game cheat for Tanki Online.
// @author       sheezzmee
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
    
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js
    
// @downloadURL  https://raw.githubusercontent.com/T0HBA/TOHBA/main/release/TOHBA.user.js
// @updateURL    https://raw.githubusercontent.com/T0HBA/TOHBA/main/release/TOHBA.meta.js
    
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
    
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/T0HBA/TOHBA/main/release/TOHBA.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})

// Писать код здесь