const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
require("dotenv").config();
const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        text
    }
    sgMail.send(msg, function (err, result) {
        if (err) {
            console.log(err);
            console.log(" Not sent");
        } else {
            console.log("Email was sent");
        }
    });
};

module.exports = sendEmail;