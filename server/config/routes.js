var quotes = require('../controllers/quotes.js');
module.exports = function(app){

  app.get('/', function(req,res) {
    quotes.index(req, res)
  })
  app.post('/addnew', function(req,res){
    quotes.create(req,res);
  })
  app.post('/confirm/:id', function(req,res) {
    quotes.update(req,res);
  })
  app.get('/view/:id', function(req,res) {
    quotes.show(req,res)
  })
  app.get('/view/:id/edit', function(req,res){
    quotes.edit(req,res);
  })
  app.get('/addnew', function(req,res){
    quotes.new(req,res);
  })
  app.post('/destroy/:id', function(req,res){
    quotes.destroy(req,res);
  })
}
