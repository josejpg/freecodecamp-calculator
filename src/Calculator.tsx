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

export class Calculator extends Component<any, any> {
    render() {
        return (<>
                <div className="calculator">
                    <div className="toggle-wrapper">
                        <input type="checkbox" id="toggleTheme" className="toggle-checkbox"
                               aria-label="Switch to dark theme"/>
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
                        <button type="button" data-target="clear" data-key="Delete" className="btn-text-secondary"
                                aria-label="Clear">AC
                        </button>
                        <button type="button"
                                data-target="backspace"
                                data-key="Backspace"
                                className="btn-text-secondary"
                                aria-label="backspace">
                            <FontAwesomeIcon icon={faDeleteLeft}/>
                        </button>
                        <button type="button" data-target="percentage" data-key="%" className="btn-text-secondary">
                            <FontAwesomeIcon icon={faPercentage}/>
                        </button>
                        <button type="button"
                                data-target="operator"
                                data-operation="divide"
                                data-key="/"
                                className="btn-bg-secondary"
                                aria-label="divide">
                            <FontAwesomeIcon icon={faDivide}/>
                        </button>
                        <button type="button" data-target="operand" data-key="7">7</button>
                        <button type="button" data-target="operand" data-key="8">8</button>
                        <button type="button" data-target="operand" data-key="9">9</button>
                        <button type="button"
                                data-target="operator"
                                data-operation="multiply"
                                data-key="*"
                                className="btn-bg-secondary"
                                aria-label="multiply">
                            <FontAwesomeIcon icon={faMultiply}/>
                        </button>
                        <button type="button" data-target="operand" data-key="4">4</button>
                        <button type="button" data-target="operand" data-key="5">5</button>
                        <button type="button" data-target="operand" data-key="6">6</button>
                        <button type="button"
                                data-target="operator"
                                data-operation="subtract"
                                data-key="-"
                                className="btn-bg-secondary"
                                aria-label="minus">
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <button type="button" data-target="operand" data-key="1">1</button>
                        <button type="button" data-target="operand" data-key="2">2</button>
                        <button type="button" data-target="operand" data-key="3">3</button>
                        <button type="button"
                                data-target="operator"
                                data-operation="add"
                                data-key="+"
                                className="btn-bg-secondary">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button type="button" data-target="operand" data-key="0" className="column-span-2">0</button>
                        <button type="button" data-target="operand" data-key=".">.</button>
                        <button type="button" data-target="result" data-key="Enter" className="btn-bg-secondary">
                            <FontAwesomeIcon icon={faEquals}/>
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}