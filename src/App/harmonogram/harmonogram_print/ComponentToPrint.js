import React from "react";
import Image from "../../../assets/images/logo.png";
import "./print.css";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  console.log(props);
  let nocleg = false;
  return (
    <div ref={ref} className="print-body">
      {" "}
      <div className="print-logo">
        <img className="logo" alt="logo" src={Image} />
      </div>
      <h2 className="print-title">{props.nazwa_szkolenia}</h2>
      <div className="print-firma">
        <h3>Nazwa firmy: {props.nazwa_firmy}</h3>
        <h4>Adres: {props.adres}</h4>
        <h4>NIP/PESEL: {props.nip_pesel}</h4>
        <h4>Osoba kontaktowa: {props.osoba_kontakt}</h4>
        <h4>Email: {props.email}</h4>
        <h4>Telefon: {props.telefon}</h4>
      </div>
      <table className="print-osoby">
        <thead>
          <th>Nr</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Telefon</th>
          {/* {props.osobyHotelStart && <th>Nocleg</th>} */}
          {props.osoby.map(osoba => {
            if (osoba.hotelDateStart) {
              nocleg = true;
              console.log(" if działa");
            }
          })}
          {nocleg && <th>Nocleg</th>}
        </thead>
        <tbody>
          {props.osoby.map(osoba => {
            return (
              <tr>
                <td>{osoba.Id}</td>
                <td>{osoba.Imie}</td>
                <td>{osoba.Nazwisko}</td>
                <td>{osoba.Email}</td>
                <td>{osoba.telefon}</td>
                {osoba.hotelDateStart && (
                  <td>
                    {osoba.hotelDateStart.format("DD-MM-YYYY")} do{" "}
                    {osoba.hotelDateEnd.format("DD-MM-YYYY")}
                  </td>
                )}
                {!osoba.hotelDateStart && nocleg && <td>Brak noclegu</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      {props.tax && (
        <div className="print-regulamin">
          <span>
            Oświadczamy, że nabyta od Centrum Naukowo-Technicznego A2K CeNT s.c.
            usługa powyższego szkolenia zawodowego lub przekwalifikowania
            zawodowego doskonaląca kwalifikacje zawodowe naszych pracowników
            jest finansowana ze środków publicznych i korzysta ze zwolnienia w
            myśl zapisów art. 5 ust 1 ustawy z dn. 27 sierpnia 2009r. o
            finansach publicznych: - w całości – zwolnienie w oparciu o art. 43
            ust. 1 pkt. 29 lit c) ustawy o podatku od towarów i usług z dn. 11
            marca 2004 r. * - w co najmniej 70%, ale mniej niż 100% - zwolnienie
            wynikające z § 13 ust. 1 pkt. 20 rozporządzenia Ministra Finansów z
            dn. 4 kwietnia 2011 r. *
          </span>
        </div>
      )}
    </div>
  );
});
