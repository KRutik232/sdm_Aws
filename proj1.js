var http=require('http');
var onReceive=function(req,res)
  {
    res.write('<h1>Welcome to IET CDAC Pune</h1>');
    res.end();
  }
var app=http.createServer(onReceive);
app.listen(9000);
console.log("Test web");
