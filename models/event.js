var mongoose = require('mongoose');



const eventSchema = mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,
coverphoto: {type: String, required: false},
covertext: {type: String, required: false},
activeOrNot: {type: String, required: false}

}, {collection:'coverEvent'});



module.exports = mongoose.model('Event', eventSchema);
