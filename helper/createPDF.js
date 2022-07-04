const fs = require('fs');
const PDFkit = require('pdfkit')
const date = require('../helper/date');
const currentDate = date.getFullDate();
const doc = new PDFkit();
const sendMail = require('./sendMail');

module.exports = (body) => {
    doc.pipe(fs.createWriteStream(`./requestsBuffer/${currentDate}-${body.email}.pdf`));
        doc.font('./fonts/Inter-Regular.ttf');
        doc.fontSize(14);
        doc.text('1) Услуга:', 100, 100, {
            underline: true,
        });
        doc.text(body.serviceType, 400, 100);
        doc.text('2) Бюджет:', 100, 130, {
            underline: true,
        });
        doc.text(body.budget, 400, 130);
        doc.text('3) Имя:', 100, 160, {
            underline: true,
        });
        doc.text(body.name, 400, 160);
        doc.text('4) Email:', 100, 190, {
            underline: true,
        });
        doc.text(body.email, 400, 190);
        doc.text('5) Номер телефона:', 100, 220, {
            underline: true,
        });
        doc.text(body.phoneNumber, 400, 220);
        doc.text('6) Город:', 100, 250, {
            underline: true,
        });
        doc.text(body.city, 400, 250);
        doc.text('7) Откудвы вы узнали о нас?', 100, 280, {
            underline: true,
        });
        doc.text(body.about, 400, 280);
        doc.text('8) Задача:', 100, 310, {
            underline: true,
        });
        doc.text(body.task, 100, 330);
        doc.text('9) Когда вам перезвонить?', 100, 530, {
            underline: true,
        });
        doc.text(body.time, 100, 550);
        doc.end();
        sendMail(body);
}