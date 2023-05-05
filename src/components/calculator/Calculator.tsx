import React, { Component } from 'react';
import '../../styles/initial.sass';
import '../../styles/calculator.sass';
import '../../styles/buttons.sass';
import '../../styles/dark-mode.sass';
import '../../styles/display.sass';
import '../../styles/footer.sass';
import { Footer } from "../footer/Footer";
import { CalcKeyType } from "../../types/calc-key.type";
import { DataTargetEnum } from "../../types/data-target.enum";
import { OperatorKeysEnum } from "../../types/operator-keys.enum";
import { enableDarkMode, ToggleTheme } from "../toggle-theme/ToggleTheme";
import { Display } from "../display/Display";
import { calcKeys } from "../../consts/buttons";
import { CalculatorButtons } from "../calculator-buttons/CalculatorButtons";

export class Calculator extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            darkMode: false,
            currentNumber: "0",
            calc: true
        }
    }

    eventListenerPressKey = (event: any): void => {
        const key: CalcKeyType | null = calcKeys.find((key: CalcKeyType) => key.dataKey === event.key) ?? null;
        if (key) {
            this.handlePressKey(key);
        }
    }
    eventListenerClickKey = (event: any): void => {
        const button: HTMLButtonElement = event.target.closest('button');
        const key: CalcKeyType | null = calcKeys.find((key: CalcKeyType) => key.dataKey === button.getAttribute('data-key')) ?? null;
        if (key) {
            this.handlePressKey(key);
        }
    }

    addOperand = (currNumber: string, operand: string): boolean => (operand !== '.' || (operand === '.' && currNumber.slice(-1) !== '.'));
    handlePressKey = (key: CalcKeyType): void => {
        if (key.dataTarget === DataTargetEnum.OPERAND) {
            if (this.addOperand(this.state.currentNumber, key.dataKey)) {
                this.setState(
                    (prev: any) => {
                        return {
                            currentNumber: prev.currentNumber === '0' && key.dataKey !== '.' ?
                                key.dataKey :
                                prev.currentNumber + key.dataKey
                        }
                    }
                );
            }
        } else if (key.dataTarget === DataTargetEnum.OPERATOR) {
            switch (key.dataKey) {
                case OperatorKeysEnum.ADD:
                case OperatorKeysEnum.SUBTRACT:
                case OperatorKeysEnum.MULTIPLY:
                case OperatorKeysEnum.DIVIDE:
                case OperatorKeysEnum.PERCENTAGE:
                    this.setState({ calc: true });
                    if (this.state.currentNumber !== "0") {
                        this.props.addNumberEvent(Number(this.state.currentNumber));
                    }
                    this.setState({ currentNumber: ""});
                    this.props.addOperationEvent(key.dataKey);
                    break;
                case OperatorKeysEnum.ENTER:
                    this.props.addNumberEvent(Number(this.state.currentNumber));
                    this.props.doCalcEvent();
                    this.setState({ currentNumber: "0", calc: false });
                    break;
                case OperatorKeysEnum.DELETE:
                    this.props.cleanCalc();
                    this.setState({ currentNumber: "0", calc: true });
                    break;
                case OperatorKeysEnum.BACKSPACE:
                    this.setState(
                        (prev: any) => {
                            return {
                                currentNumber: prev.currentNumber.slice(0, -1),
                                calc: true
                            }
                        }
                    );
                    break;
                case OperatorKeysEnum.SWAP:
                    this.setState(
                        (prev: any) => {
                            return {
                                currentNumber: prev.currentNumber > 0 ? prev.currentNumber * -1 : Math.abs(prev.currentNumber),
                                calc: true
                            }
                        }
                    );
                    break;
            }

        }
    }

    render() {
        return (<>
                <div className="calculator">
                    <ToggleTheme />
                    <Display
                        history={this.props.history}
                        calc={this.state.calc}
                        display={this.props.display}
                        currentNumber={this.state.currentNumber}
                    />
                    <CalculatorButtons eventListenerClickKey={this.eventListenerClickKey}/>
                </div>
                <Footer/>
            </>
        );
    }

    componentDidMount() {
        enableDarkMode();
        document.addEventListener("keydown", this.eventListenerPressKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.eventListenerPressKey);
    }
}