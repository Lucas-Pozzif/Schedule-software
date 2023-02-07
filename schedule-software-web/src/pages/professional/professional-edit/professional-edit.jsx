import _ from 'lodash'
import { useState } from 'react'
import { HeaderButton } from '../../../components/buttons/header-button/header-button'
import { IconButton } from '../../../components/buttons/icon-button/icon-button'
import { LargeButton } from '../../../components/buttons/large-button/large-button'
import { langData } from '../../../data/data management/database-management'
import { EPData } from './data/data'
import { EPDelete } from './delete/delete'

import './professional-edit.css'
import { EPTime } from './time/time'

export function ProfessionalEdit() {

    const [professional, setProfessional] = useState({
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
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        "chat": null
    }

    )
    const [page, setPage] = useState('data')
    const [saved, setSaved] = useState(true)

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


    function saveProfessional() {
        setSaved(true);
        setProfessional(editedProfessional)
    }

    function isSaved() {
        if (saved != _.isEqual(editedProfessional, professional)) {
            setSaved(_.isEqual(editedProfessional, professional));
        }
        return saved
    }
    function changePage(newPage) {
        setPage(newPage);
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
                    <EPTime time={time} setTime={setTime} />
                );
            case "delete":
                return (
                    <EPDelete professional={professional} setProfessional={setProfessional} setPage={setPage} />
                )
            default:
                return (
                    <p>Lost</p>
                )
        }
    }

    return (
        <div className="professional-edit-page">
            <HeaderButton title={professional.name} subtitle={professional.occupations} image={professional.photo} />
            <div className='ep-tabs'>
                <div onClick={() => { changePage('data') }}>
                    <IconButton icon={""} text={langData.editProfessional.tab.data} />
                </div>
                <div onClick={() => { changePage('services') }}>
                    <IconButton icon={""} text={langData.editProfessional.tab.services} />
                </div>
                <div onClick={() => { changePage('time') }}>
                    <IconButton icon={""} text={langData.editProfessional.tab.time} />
                </div>
                <div onClick={() => { changePage('delete') }}>
                    <IconButton icon={""} text={langData.editProfessional.tab.delete} />
                </div>
            </div>
            {pageContent(page)}
            <div onClick={() => { saveProfessional(editedProfessional) }} className='ep-large-button'>
                <LargeButton hide={isSaved()} text={langData.save} />
            </div>
        </div>
    )
}