const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'addceb71-3818-4edf-ab98-745f1e260fa5',
  'password': 'lesiNMLoPDPj',
  'version_date': '2017-02-27'
});


var request = require('request');

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

var data = request(options).pipe(pdfParser);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
        //fs.writeFile("./resultado.txt", pdfParser.getRawTextContent());
        console.log("bien");
        processDocument(data, pdfParser.getRawTextContent());
});



//FUNCIONA 

function processDocument(data, parser) {
  var parameters = getParameters(data);
    natural_language_understanding.analyze(parameters, function(err, response) {
      if (err)
          console.log('error:', err);
      else
          var words = [];
          response.keywords.forEach(keyword => words.push(keyword.text.toUpperCase()));
          console.log(words);
          
      });
}

function getParameters(data) {
  return {
      //'text': 'In the past few years, with the availability of lot of wine brands it is difficult to identify the good quality wines. Good quality wine depends on the so many important factors such as chemical, scientific as well as technical factors. However in the previous study the researchers always focus on the subjective study to define the quality of wine. The result based on the subjective study takes much time as well as it is not effective compared to the objective study with the analytical methods.',
      'text': data,
      'features': {
        'entities': {
          'emotion': true,
          'sentiment': true,
          'limit': 2
        },
        'keywords': {
          'emotion': true,
          'sentiment': true,
          'limit': 10
        }
      }
    }
}