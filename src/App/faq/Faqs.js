import "./Faqs.css";
import Faq from "./Faq/Faq";

function Faqs() {
  return (
    <div className="faqs-container">
      <div className="faqs-title-container">
        <h2 className="text-color-green faqs-title">FAQ</h2>
        <h4 className="faqs-description">
          Oto odpowiedzi na najczęściej zadawane pytania
        </h4>
      </div>
      <div className="faq-container">
        <Faq
          title="Jak zapisać się na szkolenie ? "
          text=" Zapisać się na szkolenie można poprzez wypełnienie formularza online na naszej stronie internetowej, w zakładce harmonogram."
        />
        <Faq
          title="Kiedy i jak muszę zapłacić za szkolenie ?"
          text="Po zakończonym szkoleniu, na którego podstawie zostanie przygotowana dla Państwa faktura."
        />
        <Faq
          title="Czy otrzymam zaświadczenie po szkoleniu ?"
          text="Tak. Oryginały wysyłamy w ciągu 3 tygodni od daty szkolenia w wersji papierowej na wskazany adres stacjonarny lub po webinariach w wersji elektronicznej. "
        />
        <Faq
          title="Kiedy wiadomo czy szkolenie się odbędzie ?"
          text=" Najpóźniej tydzień przed terminem szkolenia wysyłamy do Państwa informacje dotyczące szkolenia."
        />
        <Faq
          title="Jakie wymagania sprzętowe muszę spełnić, aby wziąć udział w szkoleniu on-line ?"
          text=" Aby móc uczestniczyć należy posiadać komputer lub urządzenie mobilne z dostępem do Internetu wyposażone w słuchawki,
           głośniki i mikrofon lub słuchawki z mikrofonem. Komunikacja z prowadzącym szkolenie będzie się odbywać przez mikrofon (jeśli Uczestnik posiada)
            lub chat (jeśli nie posiada mikrofonu)."
        />
        <Faq
          title="Jak mogę zamówić szkolenie zamknięte ? "
          text="Proszę wysłać do nas zapytanie ofertowe, a my skontaktujemy się najszybciej jak to będzie możliwe, aby ustalić szczegóły."
        />
        <Faq
          title="Czy przed szkoleniem jest jakieś połączenie próbne ?"
          text=" Tak. Przed szkoleniem każdy Uczestnik otrzyma najpierw link do połączenia próbnego, a dopiero po realizacji połączenia próbnego, 
          otrzymają Państwo właściwy link z zaproszeniem do uczestnictwa w szkoleniu on-line. 
          Połączenie próbne jest przeprowadzane kilka dni przed szkoleniem. Pozwoli to na sprawdzenie czy wszystko działa prawidłowo,
           a w razie jakichkolwiek problemów, jest czas na poprawę jakości połączenia."
        />
      </div>
    </div>
  );
}

export default Faqs;
