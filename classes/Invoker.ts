import { ICommand } from '../interfaces/ICommand';

class CalculatorInvoker {
  private command!: ICommand;

  setCommand(command: ICommand) {
    this.command = command;
  }

  executeCommand(a: number, b: number): number {
    return this.command.execute(a, b);
  }
}

export const calculator = new CalculatorInvoker();
