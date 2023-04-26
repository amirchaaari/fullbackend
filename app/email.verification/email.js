const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use SSL,
                auth: {
    user: "dreamdev8@gmail.com",
    pass: "hbplsbpdnzjhhtsq"
  },
  requireTLS:true,
tls: {
rejectUnauthorized: false
}
  
});




exports.sendVerificationEmail = async (email,req) => {


  const mailOptions = {
    from: "fraud.detection@gmail.com",
    to: email,
    subject: "Please verify your email",
    text: "Thank you for signing up! Please click on the following link to verify your email address:",
    html: `<p>Thank you for signing up!</p><p>Please click on the following link to verify your email address:</p><a href="http://${req}/verify-email/${email}">Verify Email</a>`
  };

  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent");
    }
  });};
  
  

  exports.sendPasswordEmail=async(email,req,token)=>{
  const mailOptions = {
    to: email,
    from: "dreamdev8@gmail.com",
    subject: "Reset your password",
    text: `You are receiving this email because you (or someone else) has requested to reset the password for your account. Please click on the following link, or paste this into your browser to complete the process:\n\n
    http://${req}/reset/${token}\n\n // Use token here
    If you did not request this, please ignore this email and your password will remain unchanged.\n`
  };

  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });



 
  


  exports.sendFraudAnalystSignUpEmail = async (email, req) => {
    const mailOptions = {
      to: email,
      from: "dreamdev8@gmail.com",
      subject: "Sign up as a Fraud Analyst",
      text: `You are receiving this email because you have been invited to sign up as a Fraud Analyst on our platform. Please click on the following link, or paste this into your browser to complete the sign up process:\n\n
      http://${req.headers.host}/api/auth/signup/fraud-analyst?appId=${req.params.appId}\n\n // Use app ID here
      If you did not request this, please ignore this email.\n`
    };
  
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Email sent: " + info.response);
    });
  };
  




  
}
 
  

exports.sendNews = async (email, req, token) => {
  const mailOptions = {
    to: email,
    from: "dreamdev8@gmail.com",
    subject: "FraudGuard",
    text: "Protect your business with FraudGuard",
    html: `<!DOCTYPE html>
      <html>
        <head>
          <title>FraudGuard</title>
          <style>
            /* Styles pour le corps de l'email */
            body {
              margin: 0;
              padding: 0;
              background-color: #F2F2F2;
              font-family: Arial, sans-serif;
            }
            /* Styles pour le conteneur principal */
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #FFFFFF;
              padding: 20px;
              box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            }
            /* Styles pour le titre */
            .title {
              font-size: 24px;
              font-weight: bold;
              text-align: center;
              margin-top: 0;
              margin-bottom: 20px;
              color: #003366;
            }
            /* Styles pour l'image */
            .image {
              display: block;
              margin: 0 auto;
              max-width: 100%;
              height: auto;
            }
            /* Styles pour le texte */
            .text {
              font-size: 16px;
              line-height: 1.5;
              margin: 20px 0;
              color: #333333;
              text-align: justify;
            }
            /* Styles pour le bouton */
            .button {
              display: block;
              width: 200px;
              margin: 0 auto;
              background-color: #003366;
              color: #FFFFFF;
              text-align: center;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="title">Protect your business with FraudGuard</h1>
            <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11rc9KFChD57bDfbUcTcX1uz_aGSlz-geW8Dws_kKyLyZvsoqeSSzJWkIfAknSm1A5YQ&usqp=CAU" alt="FraudGuard logo">
            <p class="text">Protect your business from the risks of fraudulent activities with our advanced fraud detection solutions. Our state-of-the-art technology leverages machine learning and artificial intelligence to identify and prevent fraudulent behavior, helping you save valuable time and resources while ensuring the safety of your business.</p>
            <a class="button" href="http://localhost:8081/home">Learn more</a>
          </div>
        </body>
      </html>`,
  };
  await transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
  }
