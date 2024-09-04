import { ICommand } from '../interfaces/ICommand';

export class AddCommand implements ICommand {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class SubtractCommand implements ICommand {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class MultiplyCommand implements ICommand {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class DivideCommand implements ICommand {
  execute(a: number, b: number): number {
    return a / b;
  }
}

export class PowerCommand implements ICommand {
  execute(a: number, b: number): number {
    return Math.pow(a, b);
  }
}

export class RemainderCommand implements ICommand {
  execute(a: number, b: number): number {
    return a % b;
  }
}

export class CircleAreaCommand implements ICommand {
  execute(radius: number, _: number): number {
    return Math.PI * radius * radius;
  }
}

export class SumLoopCommand implements ICommand {
  private addAllNumbersFromZero(inputNumber: number): number {
    let numbersArray = new Array(inputNumber + 1); // [0, - inputNumber]

    for (let i = 0; i <= inputNumber; i++) {
      numbersArray[i] = i;
    }

    // Add each number with its closest higher neighbour
    let sum: number = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
    }

    return sum;
  }

  execute(a: number, _: number): number {
    return this.addAllNumbersFromZero(a);
  }
}
