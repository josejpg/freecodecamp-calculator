import { calcKeys } from "../../consts/buttons";
import { CalcKeyType } from "../../types/calc-key.type";
import { Button } from "../button/Button";
import React from "react";

export const CalculatorButtons = (props: any) => {
  return (
      <div className="buttons">
          {calcKeys.map((key: CalcKeyType) => {
              return (
                  <Button dataTarget={key.dataTarget}
                          dataOperation={key.dataOperator}
                          dataKey={key.dataKey}
                          className={key.className}
                          ariaLabel={key.ariaLabel}
                          text={key.text}
                          icon={key.icon}
                          key={key.ariaLabel}
                          id={key.dataOperator ?? key.ariaLabel.toLowerCase()}
                          click={props.eventListenerClickKey}
                  />
              )
          })}
      </div>
  );
}