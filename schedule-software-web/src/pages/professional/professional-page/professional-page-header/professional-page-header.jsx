import { SmallButton } from "../../../../components/buttons/small-button/small-button";
import { ReturnButton } from "../../../../components/buttons/return-button/return-button";
import { localLanguage } from "../../../../data/language-selector";

import './professional-page-header.css'

export function PPHeader() {
    return (
        <div className="professional-page-header">
            <ReturnButton light={true} size={48} />
            <div className='pp-header-right-block'>
                <p className='pp-header-title'>{localLanguage.professionalPage.header.title}</p>
                <div className="pp-header-subtitle-block">
                    <p className="pp-header-subtitle">{localLanguage.professionalPage.header.subtitle}</p>
                    <SmallButton text={localLanguage.noPreference} />
                </div>
            </div>
        </div>
    )
}