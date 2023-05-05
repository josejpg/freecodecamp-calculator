import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { DataTargetEnum } from "./data-target.enum";

export type CalcKeyType = {
    order: number
    dataTarget: DataTargetEnum
    dataOperator?: string
    dataKey: string
    className?: string
    ariaLabel: string
    icon?: IconDefinition
    text?: string
}