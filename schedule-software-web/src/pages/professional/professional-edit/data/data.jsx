import { DetailButton } from "../../../../components/buttons/detail-button/detail-button";
import { Input } from "../../../../components/input/input";
import {
  langData,
  configData,
} from "../../../../data/data management/database-management";
import { Line } from "../../../../components/line/line";
import { HorizontalIconButton } from "../../../../components/buttons/horizontal-icon-button/horizontal-icon-button";

import "./data.css";
import { useState } from "react";

export function EPData({
  email,
  name,
  photo,
  occupations,

  setEmail,
  setName,
  setPhoto,
  setOccupations,
}) {
  const [occupationList, setOccupationList] = useState(configData.data.occupations);
  const [newOccupation, setNewOccupation] = useState("");

  function occupationValidator(newOccupation) {
    if (newOccupation == "") {
      return langData.error.cantBeEmpty;
    } else if (occupationList.includes(newOccupation)) {
      return langData.error.alreadyExists;
    }
  }

  function addNewOccupation(newOccupation) {
    if (newOccupation != "" && !occupationList.includes(newOccupation)) {
      setOccupationList((occupationList) => [...occupationList, newOccupation]);
    }
  }

  return (
    <div className="professional-edit-data">
      <Input
        label={langData.input.editName.label}
        placeholder={langData.input.editName.placeholder}
        value={name}
        setValue={setName}
      />
      <Input
        label={langData.input.editEmail.label}
        placeholder={langData.input.editEmail.placeholder}
        value={email}
        setValue={setEmail}
      />
      <div className="epd-bottom-div">
        <div className="epd-occupation-block">
          <div className="epd-occupation-list">
            {occupationList.map((occupation) => {
              const profIndex = occupations.indexOf(occupation);

              const light = !occupations.includes(occupation);

              return (
                <div
                  key={occupation}
                  className="epd-occupation"
                  onClick={() => {
                    if (occupations.includes(occupation)) {
                      setOccupations(
                        occupations.filter((item) => item != occupation)
                      );
                    } else {
                      setOccupations((occupations) => [
                        ...occupations,
                        occupation,
                      ]);
                    }
                  }}>
                  <DetailButton text={occupation} status={light} />
                </div>
              );
            })}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewOccupation(newOccupation);
            }}>
            <Input
              label={langData.editProfessional.data.otherOccupation.label}
              placeholder={
                langData.editProfessional.data.otherOccupation.placeholder
              }
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
          {photo ? (
            <div className="epd-image">
              <img src={photo} />
            </div>
          ) : (
            <HorizontalIconButton
              reverse={true}
              text={langData.editProfessional.data.addImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
