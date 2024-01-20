// ==UserScript==
// @name        sourceforge.net 台灣下載加速
// @description 在 sourceforge.net 直接顯示下載連結並替換鏡像
// @namespace   jfcherng
// @match       https://sourceforge.net/projects/*/files/*
// @version     0.0.2
// @grant       none
// @author      jfcherng
// @license     MIT
// @icon        https://www.google.com/s2/favicons?domain=sourceforge.net
// @updateURL   https://github.com/jfcherng/my-user-js/raw/main/src/sourceforge-tw.user.js
// @downloadURL https://github.com/jfcherng/my-user-js/raw/main/src/sourceforge-tw.user.js
// @supportURL  https://github.com/jfcherng/my-user-js
// ==/UserScript==

const mirror_host = 'netix.dl.sourceforge.net';

// ---------------------------------------------------------------------------

const dl_doms = document.querySelectorAll('a[href$="/download"]');

for (let i = 0; i < dl_doms.length; ++i) {
    let url = dl_doms[i].getAttribute('href');

    url = url.replace(
        /:\/\/sourceforge\.net\/projects\/([^\/]+)\/files\/(.+)\/download/,
        `://${mirror_host}/project/$1/$2`
    );

    dl_doms[i].setAttribute('href', url);
}
