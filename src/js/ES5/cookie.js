"use strict";

var cookie = {
  create: function create(key, value, expires) {
    var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';

    if (!isNaN(expires)) {
      var date = new Date();
      date.setDate(date.getDate() + expires);
      cookieText = cookieText + ';expires=' + date;
    }

    document.cookie = cookieText;
  },
  get: function get(key) {
    var str = document.cookie;
    var arr = str.split('; ');

    for (var i = 0; i < arr.length; i++) {
      var list = arr[i].split('=');

      if (encodeURIComponent(key) == list[0]) {
        return decodeURIComponent(list[1]);
      }
    }
  },
  remove: function remove(key) {
    document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(-1);
  }
};

function abc(cookieStr) {
  if (!cookieStr) {
    return {};
  }

  return JSON.parse(cookieStr);
}