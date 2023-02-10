import React from "react";
import { Line } from "../../../line/line";
import { IBExpandedItem } from "../expanded-item/expanded-item";

import './expanded-menu.css'

export function IBExpandedMenu(
    {
        stages,
        from,
        value,
        duration,
        selected,
        setSelected
    }
) {

    function makeItStagesSize(data) {
        const isArray = Array.isArray(data);
        const isStagesSize = data.length == stages.length

        var dataArray = []
        //If it is already the same size of the stages, then just return it
        if (isArray && isStagesSize) return data

        stages.map(() => dataArray.push(data))
        return (dataArray)
    }

    const valueArray = makeItStagesSize(value);
    const durationArray = Array.isArray(duration) ? duration : makeItStagesSize(duration);
    return (
        <div className="expanded-menu">
            {
                stages.map((stage) => {
                    const index = stages.indexOf(stage)
                    return (
                        <React.Fragment key={index}>
                            {
                                index == 0 ?
                                    null :
                                    <Line />
                            }
                            <IBExpandedItem
                                index={index}
                                maxIndex={stages.length - 1}

                                stage={stage}
                                from={from}
                                value={valueArray[index]}
                                duration={durationArray[index]}

                                selected={selected}
                                setSelected={setSelected}
                            />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )

}