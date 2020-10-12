'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name : {
        type : String,
        required : "name is required"

    },
    Created_date:{
        type : Date,
        default : Date.now
    },
    status:{
        type : [{
            type: String,
            enum: ['pending', 'ongoing', 'completed', 'archived']
        }],
        default : ['pending'] 

    },
	
	priority: {
		type: Boolean,
		default: false
	}
	
	//archived: {
		//type: Boolean,
		//default: false
	//}
    
});

module.exports = mongoose.model("Tasks",TaskSchema);