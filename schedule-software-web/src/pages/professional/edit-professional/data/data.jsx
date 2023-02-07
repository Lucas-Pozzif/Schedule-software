import { DetailButton } from "../../../../components/buttons/detail-button/detail-button";
import { Input } from "../../../../components/input/input";
import { localLanguage } from "../../../../data/language-selector";
import { Line } from '../../../../components/line/line'
import { configData } from "../../../../data/config-data";
import { HorizontalIconButton } from "../../../../components/buttons/horizontal-icon-button/horizontal-icon-button";
import { LargeButton } from "../../../../components/buttons/large-button/large-button";

import './data.css'
import { useState } from "react";

export function EPData({
    email,
    name,
    photo,
    occupations,

    setEmail,
    setName,
    setPhoto,
    setOccupations
}) {

    const [occupationList, setOccupationList] = useState(configData.occupations)
    const [newOccupation, setNewOccupation] = useState('')

    function occupationValidator(newOccupation) {
        if (newOccupation == '') {
            return localLanguage.error.cantBeEmpty
        } else if (occupationList.includes(newOccupation)) {
            return localLanguage.error.alreadyExists
        }
    }

    function addNewOccupation(newOccupation) {
        if (newOccupation != '' && !occupationList.includes(newOccupation)) {
            setOccupationList(occupationList => [...occupationList, newOccupation])
        }
    }

    return (
        <div className="edit-professional-data">
            <Input
                label={localLanguage.input.editName.label}
                placeholder={localLanguage.input.editName.placeholder}
                value={name}
                setValue={setName}
            />
            <Input
                label={localLanguage.input.editEmail.label}
                placeholder={localLanguage.input.editEmail.placeholder}
                value={email}
                setValue={setEmail}
            />
            <div className="epd-bottom-div">
                <div className="epd-occupation-block">
                    <div className="epd-occupation-list">
                        {
                            occupationList.map((occupation) => {
                                const profIndex = occupations.indexOf(occupation);

                                const light = !occupations.includes(occupation);

                                return (
                                    <div key={occupation} className="epd-occupation" onClick={() => {
                                        if (occupations.includes(occupation)) {
                                            setOccupations(occupations.filter(item => item != occupation))

                                        } else {
                                            setOccupations(occupations => [...occupations, occupation])
                                        }
                                    }}>
                                        <DetailButton text={occupation} status={light} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addNewOccupation(newOccupation)
                    }}>
                        <Input
                            label={localLanguage.editProfessional.data.otherOccupation.label}
                            placeholder={localLanguage.editProfessional.data.otherOccupation.placeholder}
                            value={newOccupation}
                            setValue={setNewOccupation}
                            errorMessage={occupationValidator(newOccupation)}
                        />
                    </form>
                </div>
                <div className="epd-line">
                    <Line vertical={true} light={true}></Line>
                </div>
                <div className="epd-image-block">
                    {
                        photo ?
                            <div className="epd-image">
                                <img src={photo} />
                            </div> :
                            <HorizontalIconButton reverse={true} text={localLanguage.editProfessional.data.addImage} />
                    }

                </div>
            </div>
        </div>
    )
}