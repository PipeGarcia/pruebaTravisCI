var fs = require("fs");
//C:\\Users\\pipe-_000\\Desktop\\carpeta\\nue.txt

fs.readFile('C:\\Users\\pipe-_000\\Desktop\\carpeta\\nue.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});

//hola