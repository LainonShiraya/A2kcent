import React from "react";

const Osoba = ({ Id, Imie, Nazwisko, Email, osoby, telefon, setOsoby }) => {
  const deleteOsoba = () => {
    const osoba = osoby.filter(element => element.Id !== Id);
    console.log(osoba);
    setOsoby(osoba);
  };
  return (
    <div className="harmongoram-osoba">
      <div className="bin-icon-container" onClick={deleteOsoba}>
        <i class="fas fa-trash"></i>
      </div>
      <i class="fas fa-user-tie avatar"></i>
      <div className="text-hover " data-text={Imie}>
        <h1>{Imie}</h1>
      </div>
      <div className="text-hover " data-text={Nazwisko}>
        <h1 data-text={Nazwisko}>{Nazwisko}</h1>
      </div>
      <div className="text-hover " data-text={Email}>
        <h1 data-text={Email}>{Email}</h1>
      </div>
      <div className="text-hover " data-text={telefon}>
        <h1 data-text={telefon}>{telefon}</h1>
      </div>
    </div>
  );
};

export default Osoba;
