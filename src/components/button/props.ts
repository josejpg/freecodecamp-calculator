import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Props = {
    text?: string
    icon?: IconDefinition
    dataTarget: string
    dataOperation?: string
    dataKey: string
    ariaLabel: string
    className?: string
    id: string
    click?: Function
}