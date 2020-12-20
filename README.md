# aidungeon-kh.user.js
This is a UserScript you can use with a UserScript Manager like Tampermonkey or similar.
It adds some useful often needed keyboard hotkeys during gameplay.  
This script is still a work in progress and this first version is just a quick and rough implementation of this idea.  

## Installing this UserScript

Most UserScript Managers automatically detect a UserScript if you just click the URL to it: https://raw.githubusercontent.com/duke1102/aidungeon-kh.user.js/main/aidkh.user.js

## Current Keyboard Hotkeys

* alt+f1: report output
* alt+w: view world info
* alt+r: remember
* alt+a: alter
* alt+z: undo
* alt+y: redo
* alt+q: retry

## To-Do

- Refactor the code into something more clean (especially not grabbing the DOM selectors for the buttons every time a DOM change happens)
- Customizable Keyboard Hotkeys
- Better Keyboard Hotkeys Cheatsheet
- More Hotkeys!