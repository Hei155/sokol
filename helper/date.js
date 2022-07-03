const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

module.exports.getFullDate = () => {
    let dayAcc = day;
    let monthAcc = month;
      if (day < 10) {
          dayAcc = `0${dayAcc}`
      }
      if (month < 10) {
          monthAcc = `0${monthAcc}`
      }
      return `${dayAcc}.${monthAcc}.${year}`
  }
