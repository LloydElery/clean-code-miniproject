import {
  AddCommand,
  CircleAreaCommand,
  DivideCommand,
  MultiplyCommand,
  PowerCommand,
  RemainderCommand,
  SubtractCommand,
  SumLoopCommand,
} from './classes/Commands';
import { ICommand } from './interfaces/ICommand';

export default class Calculation {
  private inputA: number;
  private inputB: number;
  private operations: Map<string, ICommand>;

  constructor() {
    this.inputA = 0;
    this.inputB = 0;

    this.operations = new Map<string, ICommand>([
      ['+', new AddCommand()],
      ['-', new SubtractCommand()],
      ['*', new MultiplyCommand()],
      ['/', new DivideCommand()],
      ['^', new PowerCommand()],
      ['%', new RemainderCommand()],
      ['circle', new CircleAreaCommand()],
      ['sumLoop', new SumLoopCommand()],
    ]);
  }

  public numbers(x: number, y: number, operator: string): number {
    this.inputA = x;
    this.inputB = y;

    const command = this.operations.get(operator);

    if (command) {
      return command.execute(this.inputA, this.inputB);
    } else {
      return 0;
    }
  }

  v(): void {
    const calc = new Calculation();

    let res = calc.numbers(5, 3, '*');
    console.log('Result: ' + res); // Result: 15

    res = calc.numbers(9, 3, '/');
    console.log('Result: ' + res); // Result: 3

    res = calc.numbers(2, 8, '^');
    console.log('Result: ' + res); // Result: 256

    res = calc.numbers(7, 0, 'circle');
    console.log('Area of Circle: ' + res); // Area of Circle: 153.93804002589985

    res = calc.numbers(10, 0, 'sumLoop');
    console.log('Sum of first 10 numbers: ' + res); // Sum of first 10 numbers: 55
  }
}
