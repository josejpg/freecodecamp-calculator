import { StateType } from "../types/state.type";
import { addNumberEvent, addOperationEvent, cleanCalcEvent, doCalcEvent } from "../actions/actions";

const mapStateToProps = (state: StateType) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNumberEvent: async (number: number) => {
            dispatch(addNumberEvent(number));
        },
        addOperationEvent: async (operation: string) => {
            dispatch(addOperationEvent(operation));
        },
        cleanCalc: async () => {
            dispatch(cleanCalcEvent());
        },
        doCalcEvent: async () => {
            dispatch(doCalcEvent());
        },
    }
};

export {
    mapStateToProps,
    mapDispatchToProps
}