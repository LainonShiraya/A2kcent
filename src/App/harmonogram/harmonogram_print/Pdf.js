import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import logo from "../../../assets/images/logo.png";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  image: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
  companyDetails: {
    marginVertical: 4,
    marginHorizontal: 40,
    fontSize: 14,
  },
  tableHead: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
  },
  row: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    border: "1px solid black",
    padding: 20,
  },
  space: {},
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  paragraph: {
    marginTop: 40,
    padding: 20,
    fontSize: 9,
  },
});
Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});
const Pdf = props => {
  let nocleg = false;
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Image src={logo} style={styles.image} />
        <View>
          <Text style={styles.title}>{props.nazwa_szkolenia}</Text>
          <Text style={styles.companyDetails}>
            Nazwa firmy: {props.nazwa_firmy}
          </Text>
          <Text style={styles.companyDetails}>Adres: {props.adres}</Text>
          <Text style={styles.companyDetails}>
            NIP/PESEL: {props.nip_pesel}
          </Text>
          <Text style={styles.companyDetails}>
            Osoba kontaktowa: {props.osoba_kontakt}
          </Text>
          <Text style={styles.companyDetails}>Email: {props.email}</Text>
          <Text style={styles.companyDetails}>Telefon: {props.telefon}</Text>
        </View>
        {/* <View style={styles.tableHead}>
          <Text style={styles.numer}>Nr</Text>
          <Text style={styles.imie}> Imię </Text>
          <Text style={styles.nazwisko}>Nazwisko </Text>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.telefon}>Telefon</Text>
          {props.osoby.map(osoba => {
            if (osoba.hotelDateStart) {
              nocleg = true;
              console.log(" if działa");
            }
          })}
          {nocleg && <Text>Nocleg</Text>}
        </View> */}
        <View style={styles.flexContainer}>
          {props.osoby.map(osoba => {
            return (
              <View style={styles.row}>
                <Text style={styles.space}>Numer: {osoba.Id}</Text>
                <Text style={styles.space}>Imie: {osoba.Imie}</Text>
                <Text style={styles.space}>Nazwisko : {osoba.Nazwisko}</Text>
                <Text style={styles.space}>Email: {osoba.Email}</Text>
                <Text style={styles.space}> Telefon: {osoba.telefon}</Text>
                {osoba.hotelDateStart && (
                  <Text>
                    {osoba.hotelDateStart.format("DD-MM-YYYY")} do{" "}
                    {osoba.hotelDateEnd.format("DD-MM-YYYY")}
                  </Text>
                )}
                {!osoba.hotelDateStart && nocleg && <Text>Brak noclegu</Text>}
              </View>
            );
          })}
        </View>
        {props.tax && (
          <Text style={styles.paragraph}>
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
          </Text>
        )}
      </Page>
    </Document>
  );
};

export default Pdf;
