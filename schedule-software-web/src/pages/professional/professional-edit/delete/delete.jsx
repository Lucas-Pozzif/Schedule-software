import { SmallButton } from "../../../../components/buttons/small-button/small-button";
import { ItemButton } from "../../../../components/buttons/item-button/item-button";
import { localLanguage } from "../../../../data/language-selector";

import { useNavigate } from "react-router-dom";

import './delete.css'

export function EPDelete({
    professional,
    setProfessional,
    setPage

}) {
    const navigate = useNavigate()

    function deleteProfessional() {
        setProfessional({})
        setPage('deleted')
        setTimeout(() => {
            navigate('/')
        }, 3000);

    }

    return (
        <div className="professional-edit-delete">
            <div className="epd-header">
                <p className="epd-title">{localLanguage.editProfessional.delete.title}</p>
                <div className="epd-subtitle-block">
                    <p className="epd-subtitle">{localLanguage.editProfessional.delete.subtitle}</p>
                    <div onClick={() => {
                        deleteProfessional()
                    }}>
                        <SmallButton light={true} text={localLanguage.editProfessional.delete.buttonText}></SmallButton>
                    </div>
                </div>
            </div>
            <div className="epd-item-button" >
                <ItemButton

                    image={professional.photo}
                    title={professional.name}
                    subtitle={professional.occupations}

                />

            </div>

        </div>
    )
}