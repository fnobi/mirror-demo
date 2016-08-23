(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

var el = document.querySelector('.js-video');

window.navigator.getUserMedia({ video: true }, function (localMediaStream) {
    el.src = window.URL.createObjectURL(localMediaStream);
    el.onloadedmetadata = function (e) {
        // TODO: 描画状況・透明ピクセルを計測して、アスペクト比出して、いい具合にトリミング

        el.addEventListener('click', function () {
            el.paused ? el.play() : el.pause();
        });
    };
}, function () {
    alert('fail.');
});

},{}]},{},[1]);
