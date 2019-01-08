const p5 = require('p5');

const recordButton = document.getElementsByClassName('record-button')[0];
recordButton.addEventListener('click', e => {
  createRecordCard('The quick fox jumped over the log');
})

const createRecordCard = (title) => {
  const record = document.createElement('div');
  record.classList.add('record-card');
  const recordTitle = record.appendChild(document.createElement('h1'));
  recordTitle.classList.add('record-card-title');
  recordTitle.innerText = title;
  const recordTime = record.appendChild(document.createElement('h3'));
  recordTime.classList.add('record-card-time');
  recordTime.innerText = '0:00';
  document.body.appendChild(record)
}

let mic;

const setup = () => {
  mic = new p5.AudioIn()
  mic.start();
  console.log('fdasfdsfs');
}

setup();