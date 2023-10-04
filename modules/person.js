export default class Person {

  firstName = '';
  lastName = '';
  #birthday = '';

  constructor(name, lastName, birthday) {
    this.firstName = name;
    this.lastName = lastName;
    this.#birthday = birthday;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getAge() {
    const currentDate = new Date();
    const personBirthday = new Date(this.birthday);
    let ageOfPerson = currentDate.getFullYear() - personBirthday.getFullYear() ;

    if (personBirthday.getMonth() <= currentDate.getMonth()) {
      if (personBirthday.getMonth() === currentDate.getMonth()) {
        if (personBirthday.getDate() > currentDate.getDate()) {
          ageOfPerson--;
        }
      } else {
        ageOfPerson--;
      }
    }

    let lastNumber = ageOfPerson % 10;

    if (lastNumber === 1) {
      return ageOfPerson + ' год';
    } else if (lastNumber > 1 && lastNumber <= 4) {
      return ageOfPerson + ' года';

    } else {
      return ageOfPerson + ' лет';

    }
  }

  get birthday() {
    return this.#birthday;
  }
}

