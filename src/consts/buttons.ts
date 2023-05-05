import { CalcKeyType } from "../types/calc-key.type";
import { DataTargetEnum } from "../types/data-target.enum";
import { OperatorKeysEnum } from "../types/operator-keys.enum";
import { faDeleteLeft, faDivide, faEquals, faMinus, faMultiply, faPlus } from "@fortawesome/free-solid-svg-icons";

const operatorKeys: CalcKeyType[] = [
    {
        order: 0,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "backspace",
        dataKey: OperatorKeysEnum.BACKSPACE,
        className: "btn-text-secondary",
        ariaLabel: "Backspace",
        icon: faDeleteLeft
    },
    {
        order: 1,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "swap",
        dataKey: OperatorKeysEnum.SWAP,
        className: "btn-text-secondary",
        ariaLabel: "Swap",
        text: '+/-'
    },
    {
        order: 2,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "clear",
        dataKey: OperatorKeysEnum.DELETE,
        className: "btn-text-secondary",
        ariaLabel: "Clear",
        text: "AC"
    },
    {
        order: 3,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "divide",
        dataKey: OperatorKeysEnum.DIVIDE,
        className: "btn-text-secondary",
        ariaLabel: "Divide",
        icon: faDivide,
    },
    {
        order: 11,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "subtract",
        dataKey: OperatorKeysEnum.SUBTRACT,
        className: "btn-text-secondary",
        ariaLabel: "Subtract",
        icon: faMinus,
    },
    {
        order: 15,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: 'add',
        dataKey: OperatorKeysEnum.ADD,
        className: "btn-text-secondary",
        ariaLabel: "Add",
        icon: faPlus,
    },
    {
        order: 18,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "enter",
        dataKey: OperatorKeysEnum.ENTER,
        className: "btn-text-secondary",
        ariaLabel: "Enter",
        icon: faEquals,
    },
];

const operandKeys: CalcKeyType[] = [
    {
        order: 4,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "7",
        ariaLabel: "Seven",
        text: "7",
    },
    {
        order: 5,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "8",
        ariaLabel: "Eight",
        text: "8",
    },
    {
        order: 6,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "9",
        ariaLabel: "Nine",
        text: "9",
    },
    {
        order: 7,
        dataTarget: DataTargetEnum.OPERATOR,
        dataOperator: "multiply",
        dataKey: OperatorKeysEnum.MULTIPLY,
        className: "btn-text-secondary",
        ariaLabel: "Multiply",
        icon: faMultiply,
    },
    {
        order: 8,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "4",
        ariaLabel: "Four",
        text: "4",
    },
    {
        order: 9,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "5",
        ariaLabel: "Five",
        text: "5",
    },
    {
        order: 10,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "6",
        ariaLabel: "Six",
        text: "6",
    },
    {
        order: 12,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "1",
        ariaLabel: "One",
        text: "1",
    },
    {
        order: 13,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "2",
        ariaLabel: "Two",
        text: "2",
    },
    {
        order: 14,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "3",
        ariaLabel: "Three",
        text: "3",
    },
    {
        order: 16,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: "0",
        className: "column-span-2 align-right pr-15",
        ariaLabel: "Zero",
        text: "0",
    },
    {
        order: 17,
        dataTarget: DataTargetEnum.OPERAND,
        dataKey: ".",
        ariaLabel: "Decimal",
        text: ".",
    },
];

const sortCalcKeys = (a: CalcKeyType, b: CalcKeyType): number => a.order - b.order;
const calcKeys: CalcKeyType[] = [...operatorKeys, ...operandKeys].sort(sortCalcKeys);

export {
    calcKeys
}