import { SmallButton } from "../../../../components/buttons/small-button/small-button";
import { ItemButton } from "../../../../components/buttons/item-button/item-button";
import { langData } from "../../../../data/data management/database-management";

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
                <p className="epd-title">{langData.editProfessional.delete.title}</p>
                <div className="epd-subtitle-block">
                    <p className="epd-subtitle">{langData.editProfessional.delete.subtitle}</p>
                    <div onClick={() => {
                        deleteProfessional()
                    }}>
                        <SmallButton light={true} text={langData.editProfessional.delete.buttonText}></SmallButton>
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