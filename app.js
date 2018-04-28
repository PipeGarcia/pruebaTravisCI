var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'addceb71-3818-4edf-ab98-745f1e260fa5',
  'password': 'lesiNMLoPDPj',
  'version_date': '2017-02-27'
});

var fs = require("fs");

/*fs.readFile('C:\\Users\\pipe-_000\\Desktop\\carpeta\\nue.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});*/
var i = 0;

while(i<31){
    try {  
        var data = fs.readFileSync('C:\\Users\\pipe-_000\\Desktop\\carpeta\\nue.txt', 'utf8');
        //console.log(data);    
    } catch(e) {
        console.log('Error:', e.stack);
    }

    var parameters = {
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
      'limit': 5
    }
  }
}

    natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
    });
    console.log(i);
    i++;
}
