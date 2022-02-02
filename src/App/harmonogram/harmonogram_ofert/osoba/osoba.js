import React from "react";

const Osoba = ({ Id, Imie, Nazwisko, Email, osoby, setOsoby }) => {
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
      <h1>{Imie}</h1>
      <h1>{Nazwisko}</h1>
      <h1>{Email}</h1>
    </div>
  );
};

export default Osoba;
