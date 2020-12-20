// ==UserScript==
// @name         AIDungeon Keyboard Hotkeys
// @namespace    https://github.com/duke1102/aidungeon-kh-user
// @version      0.1
// @description  Some useful often needed keyboard hotkeys during gameplay
// @author       duke1102
// @match        https://play.aidungeon.io/main/adventurePlay*
// @grant        GM_notification
// @require      https://unpkg.com/hotkeys-js/dist/hotkeys.min.js
// @run-at       document-end
// ==/UserScript==

(async function () {
    'use strict';
    console.debug("AIDungeon Keyboard Hotkeys Userscript loaded!");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.debug("[AIDKH] Waited 3 seconds");
    GM_notification({ title: "AIDungeon Keyboard Hotkeys", text: "[alt+f1]: report output\r\n[alt+w]: view world info\r\n[alt+r]: remember\r\n[alt+a]: alter\r\n[alt+z]: undo\r\n[alt+y]: redo\r\n[alt+q]: retry", silent: true, timeout: 30000 });
    const grabButtonSelectors = () => {
        console.debug("[AIDKH] grabButtonSelectors()");
        return {
            btnReportOutput: document.querySelector('[aria-label="report AI output"]'),
            btnViewWorldInfo: document.querySelector('[aria-label="view world info"]'),
            btnRemember: document.querySelector('[aria-label="remember"]'),
            btnAlter: document.querySelector('[aria-label="alter"]'),
            btnUndo: document.querySelector('[aria-label="undo"]'),
            btnRedo: document.querySelector('[aria-label="redo"]'),
            btnRetry: document.querySelector('[aria-label="retry"]')
        };
    };
    var gameButtons = grabButtonSelectors();

    let observer = new MutationObserver((mutations, observer) => {
        console.debug({
            mutations,
            observer
        });
        gameButtons = grabButtonSelectors();
    });

    observer.observe(document, {
        subtree: true,
        attributes: true
        //...
    });

    hotkeys("alt+f1,alt+w,alt+r,alt+a,alt+z,alt+y,alt+q", function (event, handler) {
        switch (handler.key) {
            case "alt+f1":
                console.debug("[AIDKH] ALT + F1 pressed = Report Output");
                gameButtons.btnReportOutput.click();
                break;
            case "alt+w":
                console.debug("[AIDKH] ALT + W pressed = View World Info");
                gameButtons.btnViewWorldInfo.click();
                break;
            case "alt+r":
                console.debug("[AIDKH] ALT + R pressed = Remember");
                gameButtons.btnRemember.click();
                break;
            case "alt+a":
                console.debug("[AIDKH] ALT + A pressed = Alter");
                gameButtons.btnAlter.click();
                break;
            case "alt+z":
                console.debug("[AIDKH] ALT + Z pressed = Undo");
                gameButtons.btnUndo.click();
                break;
            case "alt+y":
                console.debug("[AIDKH] ALT + Y pressed = Redo");
                gameButtons.btnRedo.click();
                break;
            case "alt+q":
                console.debug("[AIDKH] ALT + Q pressed = Retry");
                gameButtons.btnRetry.click();
                break;
            default:
                break;
        }
        return false;
    });

})();