$(document).ready(function () {

// contentfull pulls

var cflAPI = "https://cdn.contentful.com/spaces/49fgnbx2n475/entries?access_token=8b2c3007ac98ac9904d3458c65bf0e9da5aaee23975c54274e457a8ef5f37dd3"
var cfOptions = {

};

function displaystuff(data) {
  $('body').html($('<div class="" style="position: absolute; width: 200px; height: 100pxp; top: 0;"></div>'));
 }
$.getJSON(cflAPI, cfOptions, displaystuff);

}); //end ready