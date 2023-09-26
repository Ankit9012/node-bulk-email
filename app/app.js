const express = require('express');
const morgan = require('morgan');

const { upload } = require('../helpers/upload');
// const multer=require('multer');

const { sendMails } = require('../controller/MailController');

const app = express();


app.post('/v1/api/send-mail',
    upload.single('mail_file'),
    sendMails);


module.exports = app;