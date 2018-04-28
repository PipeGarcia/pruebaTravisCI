/*var request = require('request');

let fs = require('fs'),
        PDFParser = require("pdf2json");

    let pdfParser = new PDFParser(this,1);
    //var pdfPipe = request({url: pdfUrl, encoding:null}).pipe(pdfParser);


var options = {
    url: 'https://arxiv.org/pdf/1706.02737.pdf',
    headers: {
        'Referer': 'https://arxiv.org',
        'User-Agent': 'request'
    }
}

//request(options).pipe(fs.createWriteStream('resultado2.txt'));
request(options).pipe(pdfParser);
for(var i=0;i<2;i++){


    var a;

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
        //fs.writeFile("./resultado.txt", pdfParser.getRawTextContent());
        a = pdfParser.getRawTextContent();
        console.log(a);
        console.log(i);
});
}*/



//FUNCIONA 


	