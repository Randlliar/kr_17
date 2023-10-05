export {Worker};
import Person from "./person.js";

class Worker extends Person {
  position = 'Должность';
  #rate = 1000;
  #days = 0;

  constructor(name, lastName, birthday, position) {
    super(name, lastName, birthday)
    this.position = position;
  }

  getLog() {
    console.log(super.getFullName() + ' ' + super.getAge() + ', ' + this.position + '. Отработано дней: ' + this.#days);
    console.log(super.birthday)
  }

  set rate(value) {
    if (value < 1000) {
      throw new Error();
    }
    this.#rate = value;
  }

  get rate() {
    return this.#rate;
  }

  addDays(days) {
    let date = new Date();
    let lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    if (lastDayDate >= this.#days + days && days > 0) {
      this.#days += days;
    } else {
      throw new Error();
    }
  }

  getSalary() {
    let date = new Date().getMonth();
    let currentData = new Date(this.birthday).getMonth();
    const salary = this.rate * this.#days;
    if (date === currentData) {
      return 'Зарплата: ' + Math.round(salary * 0.1 + salary) + ' рублей' ;
    } else {
      return 'Зарплата: ' + Math.round(salary)  + ' рублей';
    }
  }

  static whoWorkedMore(...args) {
    if (args.length === 0) {
      return [];
    }

    let hardWorkersArray = [new Worker(null, null, null, null, 10000, -1)];
    args.forEach(item => {
      if (item.#days > hardWorkersArray[0].#days) {
        hardWorkersArray = [];
        hardWorkersArray.push(item);
      } else if (item.#days === hardWorkersArray[0].#days) {
        hardWorkersArray.push(item);

      }
    })

    for (let i = 0; i < hardWorkersArray.length; i++) {
      console.log('Больше всех отработал: ' + hardWorkersArray[i].getFullName() + '. Количество рабочих дней - ' + hardWorkersArray[i].#days)
    }
  }

  static whoIsYounger(...args) {
    if (args.length === 0) {
      return [];
    }

    let date = new Date(3600 * 24 * 1000);
    // console.log(date)

    let youngerArray = [new Worker(null, null, date, null, 10000, -1)];
    args.forEach(item => {


      if (item.getAge() < youngerArray[0].getAge()) {
        youngerArray = [];
        youngerArray.push(item);
      } else if (item.getAge() === youngerArray[0].getAge()) {
        youngerArray.push(item);
      }
    })


    for (let i = 0; i < youngerArray.length; i++) {
      console.log(youngerArray[i].getFullName() + ' ' + youngerArray[i].getAge());
    }
  }

}


let persons = [
  ['Игорь', 'Шаркевич', '10-02-1999', 'Front End DevOp', 3125, 17],
  ['Максим', 'Паровоз', '10-04-2005', 'Figma Designer', 3123, 21],
  ['Василий', 'Пупкин', '04-03-1989', 'Backend DevOp', 7571, 19],
  ['Мария', 'Коваль', '11-03-1997', 'Figma Designer', 4436, 21],
  ['Петр', 'Залудик', '03-05-2001', 'Front End DevOp', 4436, 21],
]

persons.forEach((item, that) => {
  let person = new Worker(item[0], item[1], item[2], item[3], item[4], item[5]);
  // person.getLog();
  // person.addDays();
  // person.getSalary();
})


const objectPersons = persons.map(item => {
  return new Worker(item[0], item[1], item[2], item[3], item[4], item[5]);
})

// Worker.whoWorkedMore(...objectPersons);
Worker.whoIsYounger(...objectPersons)