import { useState } from "react";
import { langData } from "../../../../data/data management/database-management";
import { timeFormatter } from "../../../../functions/time-formatter/time-formatter";

import './expanded-item.css'

export function IBExpandedItem(
    {
        index,
        maxIndex,
        stage,
        from,
        value,
        duration,
        selectionHandler,
        selected
    }
) {
    const [localSelected, setLocalSelected] = useState(selected)

    return (
        <div className={`expanded-item ${localSelected ? 'terciary-color-background' : 'secondary-color-background'} ${index == 0 ? 'borderRadiusUp' : index == maxIndex ? 'borderRadiusDown' : null}`} onClick={() => {
            selectionHandler(index)
            setLocalSelected(!localSelected)
        }}>
            <p className={`stage-text ${localSelected ? 'secondary-color' : 'terciary-color'}`}>{stage}</p>
            <div className={`right-block`}>
                {
                    from ?
                        <p className={`from-text ${localSelected ? 'secondary-color' : 'terciary-color'}`}>{langData.fromText}</p> :
                        null
                }
                <div className={`value-block`}>
                    <div className={`value-button ${localSelected ? 'secondary-color-background' : 'terciary-color-background'}`}>
                        <p className={`value-text ${localSelected ? 'terciary-color' : 'secondary-color'}`}>$ {value}</p>
                    </div>
                    <p className={`duration-text ${localSelected ? 'secondary-color' : 'terciary-color'}`}>{timeFormatter(duration)}</p>
                </div>
            </div>
        </div>
    )

}