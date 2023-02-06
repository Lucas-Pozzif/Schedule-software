import { DetailButton } from "../../../../components/buttons/detail-button/detail-button";
import { Input } from "../../../../components/input/input";
import { localLanguage } from "../../../../data/language-selector";
import { Line } from '../../../../components/line/line'

import './data.css'
import { configData } from "../../../../data/config-data";
import { HorizontalIconButton } from "../../../../components/buttons/horizontal-icon-button/horizontal-icon-button";

export function EPData({
    professional
}) {
    console.log(professional)
    return (
        <div className="edit-professional-data">
            <Input label={localLanguage.input.editName.label} placeholder={localLanguage.input.editName.placeholder} />
            <Input label={localLanguage.input.editEmail.label} placeholder={localLanguage.input.editEmail.placeholder} />
            <div className="epd-bottom-div">
                <div className="epd-occupation-block">
                    <div className="epd-occupation-list">
                        {
                            configData.occupations.map((occupation) => {
                                return (
                                    <div className="epd-occupation">
                                        <DetailButton text={occupation} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Input
                        label={localLanguage.editProfessional.data.otherOccupation.label}
                        placeholder={localLanguage.editProfessional.data.otherOccupation.placeholder}
                    />
                </div>
                <div className="epd-line">
                    <Line vertical={true} light={true}></Line>
                </div>
                <div className="epd-image-block">
                    {
                        professional.photo ?
                            <div className="epd-image">
                                <img src={professional.photo} />
                            </div> :
                            <HorizontalIconButton reverse={true} text={localLanguage.editProfessional.data.addImage} />
                    }

                </div>
            </div>
        </div>
    )
}