import { SmallButton } from "../../../../components/buttons/small-button/small-button";
import { ReturnButton } from "../../../../components/buttons/return-button/return-button";
import { localLanguage } from "../../../../data/language-selector";

import './professional-list-header.css'

export function PLHeader() {
    return (
        <div className="professional-list-header">
            <ReturnButton light={true} size={48} />
            <div className='pl-header-right-block'>
                <p className='pl-header-title'>{localLanguage.professionalList.header.title}</p>
                <div className="pl-header-subtitle-block">
                    <p className="pl-header-subtitle">{localLanguage.professionalList.header.subtitle}</p>
                    <SmallButton text={localLanguage.noPreference} />
                </div>
            </div>
        </div>
    )
}