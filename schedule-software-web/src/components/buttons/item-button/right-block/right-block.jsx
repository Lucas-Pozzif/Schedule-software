import { localLanguage } from "../../../../data/language-selector";
import { timeFormatter } from "../../../../functions/time-formatter";

import './right-block.css'
export function IBRightBlock({
    expansible,
    from,
    duration,
    value,
    expansionHandler,
    expanded
}
) {
    function numberValue() {
        return Array.isArray(value) ? value[0] : value
    }
    function numberDuration() {
        return Array.isArray(duration) ? duration[0] : duration
    }
    function seeMessageHandler() {
        return expanded ? localLanguage.see.less : localLanguage.see.more
    }
    return (
        <>
            {
                expansible ?
                    <div className='right-block'>
                        <div className='value-block'>
                            <div className='value-button' onClick={() => expansionHandler()}>
                                <p className='value-text'>{seeMessageHandler()}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='right-block'>
                        {
                            from ?
                                <p className='from-text'>{localLanguage.fromText}</p> :
                                null
                        }
                        <div className='value-block'>
                            <div className='value-button'>
                                <p className='value-text'>$ {numberValue()}</p>
                            </div>
                            <p className='duration-text'>{timeFormatter(numberDuration())}</p>
                        </div>
                    </div>
            }
        </>

    )
}