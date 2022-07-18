import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import Pdf from "./Pdf";
export default function PrintComponent({
  nazwa_szkolenia,
  nazwa_firmy,
  adres,
  nip_pesel,
  osoba_kontakt,
  email,
  telefon,
  tax,
  osoby,
}) {
  const styles = StyleSheet.create({
    download: {
      display: "block",
      color: "#2f512a",
      padding: "1rem",
      width: "60%",
      margin: "auto",
      border: "2px solid #2f512a",
      boxShadow: "4px 8px 19px -3px rgba(0, 0, 0, 0.27)",
      transition: "250ms",
      borderRadius: 15,
      marginTop: 40,
    },
  });
  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        {/* <ReactToPrint
          trigger={() => (
            <button className="button-send button-newsletter">
              Wygeneruj pdf
            </button>
          )} */}
        {/* content={() => componentRef.current}
        /> */}
        {/* TESTING */}
        {/* <button className="button-send button-newsletter"> */}
        <PDFDownloadLink
          document={
            <Pdf
              nazwa_szkolenia={nazwa_szkolenia}
              nazwa_firmy={nazwa_firmy}
              adres={adres}
              nip_pesel={nip_pesel}
              osoba_kontakt={osoba_kontakt}
              email={email}
              telefon={telefon}
              tax={tax}
              osoby={osoby}
            />
          }
          fileName="movielist.pdf"
          style={styles.download}
          // style={{
          //   textDecoration: "underline !important",
          //   color: "#2f512a",
          //   fontSize: 28,
          //   "&:hover, &:active, &:focus": {
          //     fontSize: 32,
          //   },
          // }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Wczytuje dokument pdf..." : "Wygeneruj pdf"
          }
        </PDFDownloadLink>
        {/* </button> */}
        {/* component to be printed */}
        {/* <div style={{ display: "none" }}>
          <ComponentToPrint
            ref={componentRef}
            nazwa_szkolenia={nazwa_szkolenia}
            nazwa_firmy={nazwa_firmy}
            adres={adres}
            nip_pesel={nip_pesel}
            osoba_kontakt={osoba_kontakt}
            email={email}
            telefon={telefon}
            tax={tax}
            osoby={osoby}
          />
        </div> */}
      </div>
    </>
  );
}
