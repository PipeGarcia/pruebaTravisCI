arxiv = require('arxiv');
 
search_query = {
    title: 'RNN',
    author: 'William Chan'
};
 
arxiv.search(search_query, function(err, results) {
    console.log('Found ' + results.items.length + ' results out of ' + results.total);
    console.log(results.items[0].title);
    console.log(results.items[0].authors[0].name);
    console.log('--------------------------------------');
    console.log(results.items[1].title);
    console.log(results.items[1].authors[1].name);
    console.log("<><><><><><><><><><><><><><><><><><><><>");
    console.log(results.items);
    console.log(results.items[0].links[1].href);
});