import { DetailButton } from "../../../../components/buttons/detail-button/detail-button";
import { Input } from "../../../../components/input/input";
import { localLanguage } from "../../../../data/language-selector";
import { Line } from '../../../../components/line/line'

import './data.css'
import { configData } from "../../../../data/config-data";

export function EPData() {

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
                <div>
                <Line vertical={true}></Line>
                <button>Teste</button>
                </div>
            </div>
        </div>
    )
}