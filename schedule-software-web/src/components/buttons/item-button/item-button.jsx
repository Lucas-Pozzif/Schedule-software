import React, { useState } from "react";
import { IBLeftBlock } from "./left-block/left-block";
import { IBRightBlock } from "./right-block/right-block";
import { IBExpandedMenu } from "./expanded-menu/expanded-menu";

import './item-button.css'

export function ItemButton({
    image,
    title,
    subtitle,
    from = false,
    value,
    duration,
    selectable = true,
    stages,

    selected,
    setSelected
}
) {
    const [expanded, setExpanded] = useState(false)

    function expansionHandler() {
        setExpanded(!expanded)
    }
    function selectionHandler(index) {
        try {
            if (!selectable) return
            if (isArray(selected)) {
                const selectedArray = selected
                selectedArray[index] = !selectedArray[index]
                setSelected(selectedArray)
            } else {
                setSelected(!selected)
            }
        } catch {

        }
    }

    function hasStages() {
        return !(stages == null)
    }
    function isArray(data) {
        return Array.isArray(data)
    }



    return (
        <div className="item-button-group">
            <div className={`item-button ${(selected && !isArray(selected)) ? 'terciary-color-background' : 'secondary-color-background'}`}>
                <IBLeftBlock image={image} title={title} subtitle={subtitle} selected={selected && !isArray(selected)} />
                <IBRightBlock
                    expansible={hasStages()}
                    from={from}
                    duration={duration}
                    value={value}
                    expansionHandler={expansionHandler}
                    expanded={expanded}
                    selectionHandler={selectionHandler}
                    selected={selected}
                    selectable={selectable}
                />
            </div>
            {
                expanded ?
                    <IBExpandedMenu
                        stages={stages}
                        from={from}
                        value={value}
                        duration={duration}
                        selectionHandler={selectionHandler}
                        selected={selected}
                    />
                    : null
            }
        </div>
    )
}