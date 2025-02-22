if (!window.console) {
    window.console = {};
  }
  var consoleMethods = [
    "log",
    "warn",
    "error",
    "info",
    "debug",
    "clear",
    "assert",
    "dir",
    "dirxml",
    "group",
    "groupEnd",
    "time",
    "timeEnd",
    "trace"
  ];
  for (var i = 0; i < consoleMethods.length; i++) {
    if (!window.console[consoleMethods[i]]) {
      window.console[consoleMethods[i]] = function () {};
    }
  }