import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: "LinqU - Don't let your place of residence limit your career!"
  });
});
router.post('/', (req, res, next) => {
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    host: 'SMTP SERVER',
    port: 587,
    secure: false, /* Use STARTTLS, instead of deprecated SMTPS */
    auth: {
      user: 'SMTP USER',
      pass: 'SMTP PASSWORD'
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
