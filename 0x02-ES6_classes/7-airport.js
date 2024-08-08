export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  repr() {
    return `${this.constructor} [${this._code}] ${this.object}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
