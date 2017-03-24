/* var quotes=[
  {quote: "1.Look deep into nature, and then you will understand everything better."},
  {quote: "5.The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep."},
  {quote: "Change is inevitable. Change is constant. -Benjamin Disraeli"},
  
 {quote: "2.Change is inevitable. Change is constant. -Benjamin Disraeli"},

   {quote: "3.Change is inevitable. Change is constant. -Benjamin Disraeli"},
  
   {quote: "4.Change is inevitable. Change is constant. -Benjamin Disraeli"}
]



$(document).ready(function(){
  
  $("#new-quote").click(function(){
    quotek=quotes[Math.round(Math.random() *  6)].quote.toUpperCase()
       
    $("#randomquote").html(quotek);
  });
  
  $("#tweetButton").click(function(){
    // document.open("https://twitter.com/intent/tweet?text="+quotek)
    alert(3);
  });
  
 
});
 */

$(document).ready(function(){
  var hi="hello";
    console.log(hi);
  getQuote();
  $("#new-quote").click( function(){
    getQuote();
    });
  
  $("#tweetButton").click(function(){
window.open("https://twitter.com/intent/tweet?text="+tweet);
                  });
    
  function getQuote()
  {
 
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(val)
    {
      randomQuote = val.quoteText;
      author = val.quoteAuthor;
      tweet= randomQuote+" -" + author;
      $("#author").html("test");
      $("#randomquote").html('"' + randomQuote.toUpperCase() +'"' + "<br>" + "-" + author);
      
      
    });
    
    }
  
});