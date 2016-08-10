import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    var fs    = require("fs");
  var wkhtmltopdf = require('wkhtmltopdf');
 
// URL 
  console.log("processing");

var x=wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
  .pipe(fs.createWriteStream('/home/kishan/out.pdf'));
  console.log(x);
});
