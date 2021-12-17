function checkPrompt(num) {
  if(num === null) throw new Error('Не валидное число [null]');
  if(num.trim() === '') throw new Error('Не валидное число [пустая строка]');
  if(isNaN(num)) throw new Error('Не валидное число [NaN]');

  return true;
}


let calculator = {
  read(
    num1 = prompt('Введите первое число', 0),
    num2 = prompt('Введите второе число', 0)
  ) {
    
    this.num1 = +num1;
    this.num2 = +num2;

    checkPrompt(num1);
    checkPrompt(num2);
  },
  
  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );