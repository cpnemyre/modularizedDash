var mongoose = require('mongoose');

var TigersSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  gender: {type: String, required: true}
});

var Tigers = mongoose.model('Tigers', TigersSchema);
