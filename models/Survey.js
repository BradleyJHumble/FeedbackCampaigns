const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0},
	no: { type: Number, default: 0},
	_user: { type: Schema.Types.ObjectId, ref: 'User'}, // user tagging to each survey
	dateSent: Date,
	lastResponsed: Date
});

mongoose.model('surveys', surveySchema);
