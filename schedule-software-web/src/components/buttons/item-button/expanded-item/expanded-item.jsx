import { localLanguage } from "../../../../data/language-selector";
import { timeFormatter } from "../../../../functions/time-formatter";

import './expanded-item.css'

export function IBExpandedItem(
    {
        stage,
        from,
        value,
        duration
    }
) {

    return (
        <div className="expanded-item">
            <p className="stage-text">{stage}</p>
            <div className="right-block">
                {
                    from ?
                        <p className='from-text'>{localLanguage.fromText}</p> :
                        null
                }
                <div className='value-block'>
                    <div className='value-button'>
                        <p className='value-text'>$ {value}</p>
                    </div>
                    <p className='duration-text'>{timeFormatter(duration)}</p>
                </div>
            </div>
        </div>
    )

}