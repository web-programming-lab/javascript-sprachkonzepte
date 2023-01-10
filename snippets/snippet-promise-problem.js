/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

loadScript('myScript1.js', function (error, script) {
  loadScript('myScript2.js', function (error, script) {
    loadScript('myScript3.js', function (err, sc) {
      //do sth.
    });
  });
});
