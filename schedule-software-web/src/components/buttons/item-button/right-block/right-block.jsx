import { localLanguage } from "../../../../data/language-selector";
import { timeFormatter } from "../../../../functions/time-formatter/time-formatter";

import './right-block.css';

export function IBRightBlock({
    expansible,
    from,
    duration,
    value,
    expansionHandler,
    expanded,
    selectionHandler,
    selected,
    selectable
}) {
    function numberData(data) {
        return Array.isArray(data) ? data[0] : data
    }
    function seeMessageHandler() {
        return expanded ? localLanguage.see.less : localLanguage.see.more
    }
    function selectStateHandler() {
        return selected ? localLanguage.selected.masculine.singular : localLanguage.select
    }

    function checkSelected() {
        const count = selected.filter(Boolean).length
        return count > 0 ?
            expanded ?
                null :
                `
                    ${count} ${count == 1 ?
                    `${localLanguage.selected.masculine.singular}` :
                    `${localLanguage.selected.masculine.plural}`}
                    `:
            null
    }

    return (
        <>
            {
                expansible ?
                    <div className={`right-block`}>
                        <div className={`value-block`}>
                            <div className={`value-button terciary-color-background`} onClick={() => {
                                expansionHandler()
                            }}>
                                <p className={`value-text`}>{seeMessageHandler()}</p>
                            </div>
                            <p className={`duration-text`}>{checkSelected()}</p>
                        </div>
                    </div>
                    :
                    <div className={`right-block`}>
                        {
                            from ?
                                <p className={`from-text ${selected ? 'secondary-color' : 'terciary-color'}`}>{localLanguage.fromText}</p> :
                                null
                        }
                        <div className={`value-block`}>
                            <div className={`value-button ${selected ? 'secondary-color-background' : 'terciary-color-background'}`} onClick={() => { selectionHandler() }}>
                                <p className={`value-text ${selected ? 'terciary-color' : 'secondary-color'}`}>{
                                    value ?
                                        numberData(value) :
                                        selectStateHandler()
                                }</p>
                            </div>
                            <p className={`duration-text ${selected ? 'secondary-color' : 'terciary-color'}`}>{timeFormatter(numberData(duration))}</p>
                        </div>
                    </div>
            }
        </>

    )
}