export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (typeof students !== 'object') {
      throw new TypeError('Students must be an array of strings');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(values) {
    if (typeof values !== 'object') {
      throw new TypeError('Students must be an array of strings');
    } else {
      values.forEach((value) => {
        if (typeof value !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      });
    }
    this._students = values;
  }
}
