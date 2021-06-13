"use strict";

var fs =  require("fs");
var path = require("path");

if(require.main == module){
    main({argv:process.argv})
}

function main(options){
    var argv = options.argv;
    var input = argv[2];
    var output = argv[3];

    var file = path.join(__dirname, input);
    var buffer = fs.readFileSync(file)
    var text = buffer.toString()

    text = text.toUpperCase()

    fs.writeFileSync(output, text);
    console.log(text);
    console.log(argv);
}