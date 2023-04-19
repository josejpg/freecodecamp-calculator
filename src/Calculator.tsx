import React, { Component } from 'react';
import './styles/initial.sass';
import './styles/calculator.sass';
import './styles/buttons.sass';
import './styles/dark-mode.sass';
import './styles/display.sass';
import './styles/footer.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDeleteLeft, faDivide,
    faEquals,
    faMinus, faMoon, faMultiply, faPercentage,
    faPlus, faSun
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./components/footer/Footer";
import { Button } from "./components/button/Button";

export class Calculator extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            darkMode: false
        }
    }

    enableDarkMode = () => document.body.className = this.state.darkMode ? 'dark' : 'light';

    handledLightMode = () => {
        this.setState(
            (prev: any) => {
                return {
                    darkMode: !prev.darkMode
                }
            },
            () => this.enableDarkMode()
        );
    }

    render() {
        return (<>
                <div className="calculator">
                    <div className="toggle-wrapper">
                        <input type="checkbox" id="toggleTheme" className="toggle-checkbox"
                               aria-label="Switch to dark theme" onClick={this.handledLightMode}/>
                        <label htmlFor="toggleTheme" className="toggle-label">
                            <FontAwesomeIcon icon={faSun}/>
                            <FontAwesomeIcon icon={faMoon}/>
                        </label>
                    </div>
                    <div className="output">
                        <div className="operation-display"></div>
                        <div className="main-display">0</div>
                    </div>
                    <div className="buttons">
                        <Button dataTarget="clear"
                                dataKey="Delete"
                                className="btn-text-secondary"
                                ariaLabel="Clear"
                                text="AC"
                                key="Delete"/>

                        <Button dataTarget="backspace"
                                dataKey="Backspace"
                                className="btn-text-secondary"
                                ariaLabel="Backspace"
                                icon={faDeleteLeft}
                                key="Backspace"/>

                        <Button dataTarget="percentage"
                                dataKey="%"
                                className="btn-text-secondary"
                                ariaLabel="Percentage"
                                icon={faPercentage}
                                key="Percentage"/>

                        <Button dataTarget="operator"
                                data-operation="divide"
                                dataKey="/"
                                className="btn-text-secondary"
                                ariaLabel="Divide"
                                icon={faDivide}
                                key="Divide"/>

                        <Button dataTarget="operand"
                                dataKey="7"
                                ariaLabel="Seven"
                                text="7"
                                key="7"/>

                        <Button dataTarget="operand"
                                dataKey="8"
                                ariaLabel="Eight"
                                text="8"
                                key="8"/>

                        <Button dataTarget="operand"
                                dataKey="9"
                                ariaLabel="Nine"
                                text="9"
                                key="9"/>

                        <Button dataTarget="operator"
                                data-operation="multiply"
                                dataKey="*"
                                className="btn-text-secondary"
                                ariaLabel="Multiply"
                                icon={faMultiply}
                                key="Multiply"/>

                        <Button dataTarget="operand"
                                dataKey="4"
                                ariaLabel="Four"
                                text="4"
                                key="4"/>

                        <Button dataTarget="operand"
                                dataKey="5"
                                ariaLabel="Five"
                                text="5"
                                key="5"/>

                        <Button dataTarget="operand"
                                dataKey="6"
                                ariaLabel="Six"
                                text="6"
                                key="6"/>

                        <Button dataTarget="operator"
                                data-operation="subtract"
                                dataKey="-"
                                className="btn-text-secondary"
                                ariaLabel="Subtract"
                                icon={faMinus}
                                key="Subtract"/>

                        <Button dataTarget="operand"
                                dataKey="1"
                                ariaLabel="One"
                                text="1"
                                key="1"/>

                        <Button dataTarget="operand"
                                dataKey="2"
                                ariaLabel="Two"
                                text="2"
                                key="2"/>

                        <Button dataTarget="operand"
                                dataKey="3"
                                ariaLabel="Three"
                                text="3"
                                key="3"/>

                        <Button dataTarget="operator"
                                data-operation="add"
                                dataKey="+"
                                className="btn-text-secondary"
                                ariaLabel="Add"
                                icon={faPlus}
                                key="Add"/>

                        <Button dataTarget="operand"
                                dataKey="0"
                                className="column-span-2"
                                ariaLabel="Zero"
                                text="0"
                                key="0"/>

                        <Button dataTarget="operand"
                                dataKey="."
                                ariaLabel="Dot"
                                text="."
                                key="."/>

                        <Button dataTarget="operator"
                                data-operation="enter"
                                dataKey="Enter"
                                className="btn-text-secondary"
                                ariaLabel="Enter"
                                icon={faEquals}
                                key="Enter"/>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }

    componentDidMount() {
        this.enableDarkMode();
    }
}