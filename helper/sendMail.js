const nodemailer = require('nodemailer');
const date = require('../helper/date');
const currentDate = date.getFullDate();
const path = require('path');
const { NODE_ENV } = process.env;
const fs = require('fs');
const { MAIL_CONFIG } = NODE_ENV === 'production' ? process.env : require('../utils/config');
const { mailSend,
        mailSendService,
        mailSendLink,
        mailHostLink,
        mailHost, 
        mailSendPassword
      } = MAIL_CONFIG;

module.exports = (body) => {
    const dirPath = path.join(__dirname, `../requestsBuffer/${currentDate}-${body.email}.pdf`);
    let transporter = nodemailer.createTransport({
        host:  mailSendLink,
        port: 465,
        service: mailSendService,
        auth: {
          user: mailSend,
          pass:  mailSendPassword,
        },
      })
      
      let result = transporter.sendMail({
        from: mailSend,
        host: mailHostLink,
        port: 993,
        to: mailHost,
        subject: 'Message from Node js',
        text: `Сокол. Заявка от ${body.name}.`,
        attachments: [
            { filename: `${currentDate}-${body.email}.pdf`, path: dirPath },
        ],
      })
      .then(() => {
        fs.unlinkSync(dirPath);
      })
      .catch(e => console.log(e))
}