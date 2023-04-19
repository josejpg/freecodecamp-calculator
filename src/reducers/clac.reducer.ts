import { StateType } from "../types/state.type";
import { ADD_NUMBER, ADD_OPERATOR, CLEAN_CALC, DO_CALCS } from "../events/consts";

const initialState: StateType = {
    operations: [],
    display: '0',
    history: '',
};

const calculation = (operations: any[]): string => {
    const reduceOperation = (operation: string, prevValue: number, currValue: number) => {
        switch (operation) {
            case '/':
                return prevValue / currValue;
            case '*':
                return prevValue * currValue;
            case '+':
                return prevValue + currValue;
            case '-':
                return prevValue - currValue;
            case '=':
            default:
                return currValue;
        }
    }
    let currOperation: string = '';
    return operations.reduce((prev: string|number, curr: string|number) => {
        if (Number.isInteger(curr) && Number.isInteger(prev)) {
            return reduceOperation(currOperation, Number(prev), Number(curr));
        }
        currOperation = String(curr);
        return prev;
    }, '');
}
const calcReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                operations: [...state.operations, action.number],
                history: `${state.history} ${action.number}`,
                display: calculation([...state.operations, action.number])
            };
        case ADD_OPERATOR:
            return {
                ...state,
                operations: [...state.operations, action.operator],
                history: `${state.history} ${action.operator}`,
            };
        case DO_CALCS:
            return {
                ...state,
                display: calculation(state.operations)
            };
        case CLEAN_CALC:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export {
    calcReducer
}