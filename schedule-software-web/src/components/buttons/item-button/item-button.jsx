import React, { useState } from "react";
import { IBLeftBlock } from "./left-block/left-block";
import { IBRightBlock } from "./right-block/right-block";

import './item-button.css'
import { IBExpandedMenu } from "./expanded-menu/expanded-menu";

export function ItemButton({
    title,
    subtitle,
    stages,
    from,
    duration,
    value,
    image
}
) {
    const [expand, setExpand] = useState(false)

    function expansionHandler() {
        setExpand(!expand)
    }
    function hasStages() {
        return stages == null ? false : true
    }

    return (
        <div className="item-button-group">
            <div className='item-button'>
                <IBLeftBlock image={image} title={title} subtitle={subtitle} />
                <IBRightBlock
                    expansible={hasStages()}
                    from={from}
                    duration={duration}
                    value={value}
                    expansionHandler={expansionHandler}
                    expanded={expand}
                />
            </div>
            {
                expand ?
                    <IBExpandedMenu stages={stages} from={from} value={value} duration={duration} />
                    : null
            }
        </div>
    )
}