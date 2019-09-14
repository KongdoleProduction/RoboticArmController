const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(express.static('public'))
app.use(function(req,res,next) {
    req.connection.setNoDelay(true);
    next();
});

app.get('/', function(req, res) {
  res.render('index.html')
})

app.get('/update/', function(req, res) {
  console.log("data received: ")
  console.log(req.query)
  res.send('')
})

app.listen(8080, function() {
  console.log("Server running on 8080...")
})
