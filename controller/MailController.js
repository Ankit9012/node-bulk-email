

const xlsx = require('xlsx');
const fs = require('fs')

const { sendMailsNodeMailer } = require('../helpers/sendEmail.helper');

const sendMails = (req, res) => {
    const { message, html, replayTo, subject } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(500).send(({ 'error': "Something gone wrng" }))
    }

    /**Get sheet data */
    const workbook = xlsx.readFile(file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
    sendMailsNodeMailer(
        data, html, replayTo, subject
    );

    fs.unlinkSync(file.path);

    return res.status(200).send({ data, message });
}


module.exports = {
    sendMails,
}