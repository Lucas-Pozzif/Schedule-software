import _ from 'lodash'
import { useState } from 'react'
import { HeaderButton } from '../../../components/buttons/header-button/header-button'
import { IconButton } from '../../../components/buttons/icon-button/icon-button'
import { LargeButton } from '../../../components/buttons/large-button/large-button'
import { localLanguage } from '../../../data/language-selector'
import { EPData } from './data/data'

import './edit-professional.css'

export function EditProfessional() {

    const professional = {
        "email": "lucaspozzif20@gmail.com",
        "name": "Lucas Pozzi",
        "photo": "https://upload.wikimedia.org/wikipedia/pt/d/de/Taylor_swift_me.jpg",
        "schedule": 233,
        "occupations": [
            "peter",
            "ficker",
            "spfder man",
            "Cabeleireiro"
        ],
        "services": [],
        "time": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        "chat": null
    }
    const [page, setPage] = useState('data')

    //All the usestates below are related to the professional data
    const [email, setEmail] = useState(professional.email);
    const [name, setName] = useState(professional.name);
    const [photo, setphoto] = useState(professional.photo);
    const [occupations, setOccupations] = useState(professional.occupations);
    const [services, setServices] = useState(professional.services);
    const [time, setTime] = useState(professional.time);

    const editedProfessional = {
        email: email,
        name: name,
        photo: photo,
        schedule: professional.schedule,
        occupations: occupations,
        services: services,
        time: time,
        chat: professional.chat
    }


    function pageContent(page) {
        switch (page) {
            case "data":
                return (
                    <EPData
                        email={email}
                        name={name}
                        photo={photo}
                        occupations={occupations}

                        setEmail={setEmail}
                        setName={setName}
                        setPhoto={setphoto}
                        setOccupations={setOccupations}
                    />
                );

            case "services":
                return (
                    <p>Services</p>
                );
            case "time":
                return (
                    <p>Time</p>
                );
            case "delete":
                return (
                    <p>Noooo</p>
                )
            default:
                return (
                    <p>Lost</p>
                )
        }
    }

    function changePage(newPage) {
        setPage(newPage);
    }

    return (
        <div className="edit-professional-page">
            <HeaderButton title={professional.name} subtitle={professional.occupations} image={professional.photo} />
            <div className='ep-tabs'>
                <div onClick={() => { changePage('data') }}>
                    <IconButton icon={""} text={localLanguage.editProfessional.tab.data} />
                </div>
                <div onClick={() => { changePage('services') }}>
                    <IconButton icon={""} text={localLanguage.editProfessional.tab.services} />
                </div>
                <div onClick={() => { changePage('time') }}>
                    <IconButton icon={""} text={localLanguage.editProfessional.tab.time} />
                </div>
                <div onClick={() => { changePage('delete') }}>
                    <IconButton icon={""} text={localLanguage.editProfessional.tab.delete} />
                </div>
            </div>
            {pageContent(page)}
            <LargeButton hide={_.isEqual(editedProfessional, professional)} text={localLanguage.save} />
        </div>
    )
}