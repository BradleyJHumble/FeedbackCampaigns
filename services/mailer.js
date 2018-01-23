// file is capitalized to fit naming conventions of exporting an class
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {
	
}