import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
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
  const componentRef = useRef(null);
  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => (
            <button className="button-send button-newsletter">
              Wygeneruj pdf
            </button>
          )}
          content={() => componentRef.current}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
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
        </div>
      </div>
    </>
  );
}
