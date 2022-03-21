import "./Oferts.css";
import Ofert from "./Ofert/Ofert";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
function Category() {
  // eslint-disable-next-line no-undef
  const newComponent = withReveal(
    <Ofert
      id="123akpfgdfok"
      title="Analiza i ocena wyników w obszarze badań chemicznych "
      type="Szkolenie"
      date="01.10.2022"
      price="1900"
      place="online"
    />,
    <Fade left />
  );
  return (
    <div className="oferts-container">
      <Fade duration={1500} left>
        <Ofert
          id="123akpfgdfok"
          title="Analiza i ocena wyników w obszarze badań chemicznych "
          type="Szkolenie"
          date="01.10.2022"
          price="1900"
          place="online"
        />
      </Fade>
      <Fade duration={1000} right>
        <Ofert
          id="123akphgfdddhok"
          title="Analiza i ocena wyników w obszarze badań chemicznych "
          type="Szkolenie"
          date="01.10.2022"
          price="1900"
          place="online"
        />
      </Fade>
      <Fade duration={1000} left>
        <Ofert
          id="123akpqqwqwqok"
          title="Analiza i ocena wyników w obszarze badań chemicznych "
          type="Szkolenie"
          date="01.10.2022"
          price="1900"
          place="online"
        />
      </Fade>
      <Fade duration={1000} right>
        <Ofert
          id="123ak2132132pok"
          title="Analiza i ocena wyników w obszarze badań chemicznych "
          type="Szkolenie"
          date="01.10.2022"
          price="1900"
          place="online"
        />
      </Fade>
      <Fade duration={1000} left>
        <Ofert
          id="123akpok"
          title="Analiza i ocena wyników w obszarze badań chemicznych "
          type="Szkolenie"
          date="01.10.2022"
          price="1900"
          place="online"
        />
      </Fade>
    </div>
  );
}

export default Category;
