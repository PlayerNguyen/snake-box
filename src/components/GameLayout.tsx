import React, { memo, useEffect, useState } from "react";
import classNames from "classnames";

export interface GameLayoutProps {
  /**
   * Number of horizontal blocks
   */
  width: number;
  /**
   * Number of vertical blocks
   */
  height: number;
}

export enum CeilType {
  EMPTY,
  SNAKE,
  COIN,
}
export default function GameLayout({ width, height }) {
  const [map] = useState<CeilType[][]>([
    ...Array(height).fill(Array(width).fill(CeilType.EMPTY)),
  ]);
  useEffect(() => {
    console.log(map);
  }, []);
  return (
    <div>
      GameLayout
      <div>
        {map.map((y) => {
          return (
            <div className={classNames(`flex flex-row gap-0`)}>
              {y.map(() => {
                return (
                  <div
                    className={classNames(
                      `w-2 h-2 bg-neutral-300 inline-block`
                    )}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
