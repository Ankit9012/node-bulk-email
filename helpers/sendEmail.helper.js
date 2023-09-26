const nodemailer = require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

async function sendMailsNodeMailer(emails,html,replayTo,subject) {
    for (const mail of emails) {
        const mailResponse=await transporter.sendMail({
            from: process.env.MAIL_FROM_ADDRESS,
            to: mail.Emails,
            subject: subject,
            html: html,
            replyTo:replayTo
        });
        console.log(mailResponse);
    }
}

module.exports = { sendMailsNodeMailer };