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
          title="Co zawierają kursy ?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus et justo efficitur consequat. 
          Integer eget mi dapibus, accumsan sem vel, tincidunt mi. Donec volutpat elit in nibh mattis volutpat. 
          Vestibulum imperdiet sit amet ligula at porta. Nunc varius risus quis mauris blandit pulvinar quis ac nisl. 
          Praesent egestas magna erat, sit amet sodales enim sodales vel. 
          Phasellus pulvinar dignissim diam. Vivamus at metus ultricies, consequat tellus ac, tristique erat.
           Proin sagittis augue vel ultricies malesuada. Praesent commodo augue quis elit egestas sagittis. 
           Duis tempus, quam et viverra rutrum, libero ligula tincidunt sapien, ac euismod risus sapien id orci.
            Etiam non augue hendrerit, pharetra velit quis, ullamcorper nisl. Nullam urna eros, tincidunt ac lacus nec, molestie dictum enim. 
            Sed ac ornare leo, vitae rutrum tortor. "
        />
        <Faq
          title="Jak wygląda uczestnictwo w szkoleniu ?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus et justo efficitur consequat. 
         Integer eget mi dapibus, accumsan sem vel, tincidunt mi. Donec volutpat elit in nibh mattis volutpat. 
         Vestibulum imperdiet sit amet ligula at porta. Nunc varius risus quis mauris blandit pulvinar quis ac nisl. 
         Praesent egestas magna erat, sit amet sodales enim sodales vel. 
         Phasellus pulvinar dignissim diam. Vivamus at metus ultricies, consequat tellus ac, tristique erat.
          Proin sagittis augue vel ultricies malesuada. Praesent commodo augue quis elit egestas sagittis. 
          Duis tempus, quam et viverra rutrum, libero ligula tincidunt sapien, ac euismod risus sapien id orci.
           Etiam non augue hendrerit, pharetra velit quis, ullamcorper nisl. Nullam urna eros, tincidunt ac lacus nec, molestie dictum enim. 
           Sed ac ornare leo, vitae rutrum tortor.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus et justo efficitur consequat. 
         Integer eget mi dapibus, accumsan sem vel, tincidunt mi. Donec volutpat elit in nibh mattis volutpat. 
         Vestibulum imperdiet sit amet ligula at porta. Nunc varius risus quis mauris blandit pulvinar quis ac nisl. 
         Praesent egestas magna erat, sit amet sodales enim sodales vel. 
         Phasellus pulvinar dignissim diam. Vivamus at metus ultricies, consequat tellus ac, tristique erat.
          Proin sagittis augue vel ultricies malesuada. Praesent commodo augue quis elit egestas sagittis. 
          Duis tempus, quam et viverra rutrum, libero ligula tincidunt sapien, ac euismod risus sapien id orci.
           Etiam non augue hendrerit, pharetra velit quis, ullamcorper nisl. Nullam urna eros, tincidunt ac lacus nec, molestie dictum enim. 
           Sed ac ornare leo, vitae rutrum tortor.  "
        />
        <Faq title="Jak się zapisać ?" />
        <Faq title=" Czy mogę otrzymać fakturę ?" />
        <Faq title=" Czy mogę zrezygnować z szkolenia ?" />
      </div>
    </div>
  );
}

export default Faqs;
