var PdfReader = require("pdfreader").PdfReader;
new PdfReader().parseFileItems("C:\\Users\\pipe-_000\\Desktop\\prueba.pdf", function(err, item){
  if (item && item.text)
    console.log(item.text);
});