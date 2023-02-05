import { Line } from "../../../line/line";
import { IBExpandedItem } from "../expanded-item/expanded-item";

import './expanded-menu.css'

export function IBExpandedMenu(
    {
        stages,
        from,
        value,
        duration
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

    const valueArray = makeItStagesSize(value);
    const durationArray = Array.isArray(duration) ? duration : makeItStagesSize(duration);
    return (
        <div className="expanded-menu">
            {
                stages.map((stage) => {
                    const index = stages.indexOf(stage)
                    return (
                        <>
                            {
                                index == 0 ?
                                    null :
                                    <Line />
                            }
                            <IBExpandedItem stage={stage} from={from} value={value[index]} duration={duration[index]} />
                        </>
                    )
                })
            }
        </div>
    )

}