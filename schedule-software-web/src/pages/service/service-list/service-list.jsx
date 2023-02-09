import { useState } from "react";
import { ItemButton } from "../../../components/buttons/item-button/item-button";
import { Input } from "../../../components/input/input";
import { langData, servData } from "../../../data/data management/database-management";
import { SLHeader } from "./service-list-header/service-list-header";

export function ServiceList() {
  const [text, setText] = useState("");

  return (
    <div className='professional-list-page'>
      <SLHeader />
      <div className='pl-search-bar-div'>
        <Input placeholder={langData.input.search} value={text} setValue={setText} />
      </div>
      <div className='pl-professional-list'>
        {servData.map((serv) => {
          if (serv.name.toLowerCase().includes(text.toLowerCase())) {
            return <ItemButton image={serv.photo} value={serv.value} from={serv.from} duration={serv.time} stages={serv.stages} />;
          }
        })}
      </div>
    </div>
  );
}
