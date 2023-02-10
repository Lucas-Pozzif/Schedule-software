import React, { useState } from "react";
import { ItemButton } from "../../../components/buttons/item-button/item-button";
import { Input } from "../../../components/input/input";
import { langData, profData } from "../../../data/data management/database-management";
import { PLHeader } from "./professional-list-header/professional-list-header";

import "./professional-list.css";

export function ProfessionalList() {
  const [text, setText] = useState("");

  return (
    <div className='professional-list-page'>
      <PLHeader />
      <div className='pl-search-bar-div'>
        <Input placeholder={langData.input.search} value={text} setValue={setText} />
      </div>
      <div className='pl-professional-list'>
        {profData.map((prof) => {
          const name = prof.name.toLowerCase().includes(text.toLowerCase().trim())
          const occupation = prof.occupations
            .join(' ')
            .toLowerCase()
            .includes(text.toLowerCase().trim())

          if (name || occupation) {
            return (
              <React.Fragment key={profData.indexOf(prof)}>
                <ItemButton image={prof.photo} title={prof.name} subtitle={prof.occupations} />
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
}
