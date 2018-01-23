const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Survey = mongoose.model('surveys'); 
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
	
	app.post('/api/surveys', requireLogin, (req, res) => { // requireLogin checks if they are login before executing 
		const {title, subject, body, recipients } = req.body;
		
		const survey = new Survey ({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		// mailer in use taking the survey-post and the template
		const mailer = new Mailer(survey, surveyTemplate(survey));
		mailer.send();
	});
};