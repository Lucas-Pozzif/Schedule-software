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
        selectionHandler,
        selected
    }
) {

    function makeItStagesSize(data) {
        var dataArray = []
        if (Array.isArray(data) && data.length == stages.length) return data
        for (let stageSize = 0; stageSize < stages.length; stageSize++) {
            dataArray.push(data)
        }
        return (dataArray)
    }
    console.log(selected)

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
                                value={value[index]}
                                duration={duration[index]}
                                selectionHandler={selectionHandler}
                                selected={selected[index]}
                            />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )

}