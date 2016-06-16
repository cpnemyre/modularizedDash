var mongoose = require('mongoose');
var Tigers = mongoose.model('Tigers');
module.exports = {

index: function( req,res){
  Tigers.find({}, function(err, tiger){
    if(err){
      res.json(err);
    }
    else{
      res.render('index', {tigers: tiger});
    }
  })
},
create: function(req, res) {
  var tiger = new Tigers({name: req.body.name, color: req.body.color, gender: req.body.gender});
  tiger.save(function(err){
    if(err){
      res.json(err);
    }
    else{
      res.redirect('/');
    }
  })
},

 update: function(req, res) {
   console.log(req.body);
   Tigers.update({_id:req.params.id}, req.body, function(err){
     if(err){
       res.json(err);
     }
     else{
       res.redirect('/');
     }
        });

  },
 show: function(req,res){
   Tigers.findOne({_id: req.params.id}, function(err, tiger){
     res.render('view', {tiger: tiger});
   })
 },

edit: function(req, res){
  Tigers.findOne({_id: req.params.id}, function(err, tiger){
    res.render('edit', {tiger: tiger});
  })
},
new: function(req,res){
  res.render('addnew');
},
destroy: function(req,res){
  console.log("destroy route");
  Tigers.remove({_id: req.params.id} , function(err, tiger){
    res.redirect('/');

  })
}
}
