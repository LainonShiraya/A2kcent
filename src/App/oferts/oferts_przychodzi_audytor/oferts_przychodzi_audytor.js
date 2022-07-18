import React from "react";
import "../oferts_closed_training/oferts_closed_training.css";
import { Link } from "react-router-dom";

const Oferts_przychodzi_audytor = () => {
  return (
    <div className="ofertsTraining-container">
      <div className="ofertsTraining-title-container">
        <h1 className="header-title-training">Przychodzi Audytor</h1>
        <h2 className="sub-title-training"> do Laboratorium</h2>
      </div>
      <div className="ofertsTraining-text-container">
        <span>
          to cykl przeprowadzanych na żywo, on-line audytów systemowych i
          technicznych w różnych obszarach badań. Audyty przeprowadzają
          współpracujący z nami Audytorzy wiodący i techniczni. Stroną ocenianą
          są pracownicy wybranych Laboratoriów Badawczych. Celem tego cyklu jest
          przedstawienie wszystkich elementów audytu oraz jak prawidłowo i
          bezstresowo przeprowadzać audytu, a także przedstawienie prawidłowych
          i różnych sposobów prowadzenia zapisów dotyczących systemu
          zarządzania.
          <Link to="../Napisz_do_nas" className="text-bolded text-color-green">
            {" "}
            wysłanie do nas zapytania{" "}
          </Link>{" "}
          , a my postaramy się przedstawić Państwu atrakcyjną ofertę.
        </span>
      </div>
    </div>
  );
};

export default Oferts_przychodzi_audytor;
