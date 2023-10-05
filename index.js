import {Worker} from "./modules/worker.js";

const workersArray = [
  new Worker('Игорь', 'Шаркевич', '10-02-1999', 'Front End DevOp', 3125, 18),
  new Worker('Максим', 'Паровоз', '10-04-2005', 'Figma Designer', 3123, 13),
  new Worker('Василий', 'Пупкин', '04-03-1989', 'Backend DevOp', 7571, 19),
  new Worker('Мария', 'Коваль', '11-03-1997', 'Figma Designer', 1111, 21),
  new Worker('Петр', 'Залудик', '03-05-2001', 'Front End DevOp', 4436, 21)];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

workersArray[getRandomInt(0, workersArray.length)].rate = getRandomInt(1000, 10000);
workersArray[getRandomInt(0, workersArray.length)].rate = getRandomInt(1000, 10000);
workersArray[getRandomInt(0, workersArray.length)].rate = getRandomInt(1000, 10000);


for (let i = 0; i < workersArray.length; i++) {
  workersArray[i].addDays(getRandomInt(1,30));
  console.log(workersArray[i].getFullName() + ' ' +  workersArray[i].getSalary());
  console.log(workersArray[i])
}


Worker.whoWorkedMore(...workersArray);
Worker.whoIsYounger(...workersArray);