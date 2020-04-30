const hackernews = require('./hackernews');

(async () => {
  await hackernews.initialize();
  
  let articles = await hackernews.getArticles(100);

  console.log(articles);

 debugger;

})();

