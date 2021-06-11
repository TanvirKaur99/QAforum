const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  //requireTLS:true,
  auth: {
    user: 'qaforum2021@gmail.com ', // generated ethereal user
    pass: 'qa2021forum', // generated ethereal password
  }
});

// send mail with defined transport object
let mailOptions = {
  from: '"QAForum 👻" <qaforum2021@gmail.com>', // sender address
  to: "sanghatanvir9299@gmail.com", // list of receivers
  subject: "Forgetting a password✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
    res.end("error");
  } else {
    console.log("Message sent: ");
    res.end("sent"); // This part does NOT get executed.
  };
});
