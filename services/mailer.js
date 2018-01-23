// file is capitalized to fit naming conventions of exporting an class
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {

	constructor({ subject, recipients}, content){
		super(); // es2015 syntax

		this.from_email = new helper.Email('no-reply@feedbackcampaigns.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

	}

}

module.exports = Mailer;
