import { useState } from 'react'
import { HeaderButton } from '../../../components/buttons/header-button/header-button'
import { IconButton } from '../../../components/buttons/icon-button/icon-button'
import { localLanguage } from '../../../data/language-selector'
import { EPData } from './data/data'

import './edit-professional.css'

export function EditProfessional() {
    const [page, setPage] = useState('data')

    const professional = {
        "email": "lucaspozzif20@gmail.com",
        "name": "Lucas Pozzi",
        "photo": "https://upload.wikimedia.org/wikipedia/pt/d/de/Taylor_swift_me.jpg",
        "schedule": 233,
        "occupations": [
            "peter",
            "ficker",
            "spfder man"
        ],
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

    function pageContent(page) {
        switch (page) {
            case "data":
                return (
                    <EPData />
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
        </div>
    )
}