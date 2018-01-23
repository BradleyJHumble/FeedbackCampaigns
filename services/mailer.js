// file is capitalized to fit naming conventions of exporting an class
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {

	constructor({ subject, recipients}, content){
		super(); // es2015 syntax

		this.sgAPI = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email('no-reply@feedbackcampaigns.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);
		
		this.addContent(this.body); // built in helper function from sendgrid

		this.addClickTracking();
		this.addRecipients();
	}

	formatAddresses(recipients) { // this is an helper fuction to deformat the emails from the array the Mailer Constructor recieves
		return recipients.map(({ email })) => {
			return new helper.Email(email);
		}
	}

	addClickTracking(){ // from sendgrid's doc
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients(){

		const personalize = new helper.Personalization();
		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgAPI.emptyRequest({ // sendgrid's library is ugly...
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});

		const response = this.sgAPI.API(request); // actual sender using sendgrids api helper (API)
		return response;

	}
}

module.exports = Mailer;
