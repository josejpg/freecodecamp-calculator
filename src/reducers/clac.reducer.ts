import { StateType } from "../types/state.type";
import { ADD_NUMBER, ADD_OPERATOR, CLEAN_CALC, DO_CALCS } from "../consts/actions";

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
    let prevNumber: number = 0;
    let currOperation: string = '';
    return operations.reduce((prev: any, curr: string|number) => {
        if (Number(curr) === curr) {
            curr = Number(curr);
            if (prevNumber === 0) {
                prevNumber = curr;
            } else {
                prevNumber = reduceOperation(currOperation, prevNumber, curr);
            }
        } else {
            currOperation = String(curr);
        }
        return prevNumber;
    }, '');
}
const calcReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                operations: [...state.operations, action.number],
                history: `${state.history} ${action.number}`
            };
        case ADD_OPERATOR:
            return {
                ...state,
                operations: [...state.operations, action.operator],
                history: `${state?.history} ${action.operator}`,
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