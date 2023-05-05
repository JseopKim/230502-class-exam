export default class Multiply {
  constructor() {
    this.result = 0;
  }
  
  isInt(a, b) {
    return typeof(a) === 'number' && typeof(b) === 'number';
  }
  
  multiply(a, b) {
    if(this.isInt(a, b) === true) {
      this.result = a * b;
      return this;
    } 
    else {
      return new Error('a 또는 b가 정수가 아닙니다.');
    }
  }

  getResult() {
    return this.result;
  }
}