import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: "LinqU - Don't let your place of residence limit your career!"
  });
});
router.post('/contactform', (req, res, next) => {
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    host: 'smtp02.hostnet.nl',
    port: 587,
    secure: false, /* Use STARTTLS, instead of deprecated SMTPS */
    auth: {
      user: 'contactformulier@linqu.io',
      pass: 'IEV6q51u'
    }
  });
  var mailOptions = {
    from: 'info@linqu.io',
    to: 'info@linqu.io',
    replyTo: req.body.email,
    subject: 'Contactformulier: ' + req.body.subject,
    text: req.body.message
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('An error has occured');
    } else {
      res.send('OK');
    }
  }); 
});

export default router;
