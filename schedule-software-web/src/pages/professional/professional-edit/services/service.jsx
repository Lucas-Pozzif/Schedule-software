import React from "react";
import { ItemButton } from "../../../../components/buttons/item-button/item-button";
import { profData, servData } from "../../../../data/data management/database-management";

import './service.css'

function serviceHandler(services, setServices, id) {
    const newArr = [...services]
    if (services.includes(id)) {
        newArr.splice(newArr.indexOf(id), 1);
    } else {
        newArr.push(id)
    }
    setServices(newArr)
}

export function EPService({
    services,
    setServices
}) {



    return (
        <div className="professional-edit-service">
            {
                servData.map((serv) => {
                    const id = serv.id
                    var professionals = []

                    profData.map((prof) => {
                        if (prof.services.includes(id)) {
                            professionals.push(prof.name)
                        }
                    })
                    professionals = professionals.length ? professionals : null
                    return (
                        <div className="pes-item" onClick={() => {
                            serviceHandler(services, setServices, id)
                        }}>
                            <ItemButton image={serv.photo} title={serv.name} subtitle={professionals} selected={services.includes(id)} />
                        </div>
                    )
                })
            }
        </div>
    )
}