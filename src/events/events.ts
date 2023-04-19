import { EventAddNumberInterface } from "../types/event-add-number.interface";
import { ADD_NUMBER, ADD_OPERATOR, CLEAN_CALC, DO_CALCS } from "./consts";
import { EventAddSymbolInterface } from "../types/event-add-symbol.interface";
import { EventDoCalcIntrface } from "../types/event-do-calc.intrface";
import { EventCleanCalcInterface } from "../types/event-clean-calc.interface";

const addNumberEvent = (number: number): EventAddNumberInterface => {
    return {
        type: ADD_NUMBER,
        number
    }
};

const addOperationEvent = (operation: string): EventAddSymbolInterface => {
    return {
        type: ADD_OPERATOR,
        operation
    }
};

const doCalcEvent = (): EventDoCalcIntrface => {
    return {
        type: DO_CALCS
    }
};
const cleanCalcEvent = (): EventCleanCalcInterface => {
    return {
        type: CLEAN_CALC
    }
};

export {
    addNumberEvent,
    addOperationEvent,
    doCalcEvent,
    cleanCalcEvent,
}