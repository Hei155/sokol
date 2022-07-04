const fs = require('fs');
const PDFkit = require('pdfkit')
const date = require('../helper/date');
const currentDate = date.getFullDate();
const sendMail = require('./sendMail');

async function createDoc(body) {
    try {
        const doc = new PDFkit();
        doc.pipe(fs.createWriteStream(`./requestsBuffer/${currentDate}-${body.email}.pdf`));
        doc.font('./fonts/Inter-Regular.ttf');
        doc.fontSize(14);
        doc.text('1) Услуга:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.serviceType);
        doc.moveDown(0.5);
        doc.text('2) Бюджет:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.budget);
        doc.moveDown(0.5);
        doc.text('3) Имя:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.name);
        doc.moveDown(0.5);
        doc.text('4) Email:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.email);
        doc.moveDown(0.5);
        doc.text('5) Номер телефона:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.phoneNumber);
        doc.moveDown(0.5);
        doc.text('6) Город:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.city);
        doc.moveDown(0.5);
        doc.text('7) Откудвы вы узнали о нас?', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.about);
        doc.moveDown(0.5);
        doc.text('8) Задача:', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.task);
        doc.moveDown(0.5);
        doc.text('9) Когда вам перезвонить?', {
            underline: true,
        });
        doc.moveDown(0.5);
        doc.text(body.time);
        doc.moveDown(0.5);
        doc.end();
    } catch(e) {
        console.log(e)
    } finally {
        sendMail(body);
    }
}

module.exports = (body) => {
    createDoc(body);
}