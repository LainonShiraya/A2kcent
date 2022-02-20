import "./MainPage.css";
import Navbar from "../navbar/Navbar";
import MainView from "../mainView/MainView";
import OpinionView from "../opinionView/OpinionView";
import RecentPosts from "../recentPosts/RecentPosts";
import Categories from "../categories/Categories";
import Oferts from "../ofertsMain/Oferts";
import Newsletter from "../newsletter/Newsletter";
import Faqs from "../faq/Faqs";
import Footer from "../footer/Footer";
import Promotions from "../promotions/Promotions";
import Harmonogram from "../harmonogram/Harmonogram";
import HarmonogramOfert from "../harmonogram/harmonogram_ofert/Harmonogram_ofert";
import AboutUs from "../about_us/about_us";
import Contact from "../contact/contact";
import OfertsLaboratory from "../oferts/oferts_laboratory/oferts_laboratory";
import OfertsCompanies from "../oferts/oferts_companies/oferts_companies";
import OfertsProducers from "../oferts/oferts_producers/oferts_producers";
import OfertsTraining from "../oferts/oferts_closed_training/oferts_closed_training";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
function MainPage() {
  return (
    <Router>
      <ScrollToTop>
        <div className="body-container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainView />
                  <OpinionView />
                  <RecentPosts />
                  <Categories />
                  <Oferts />
                  <Newsletter />
                  <Faqs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Promocje"
              element={
                <>
                  <Promotions />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Harmonogram"
              element={
                <>
                  <Harmonogram />
                  <Faqs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Harmonogram/:key/:title"
              element={
                <>
                  <HarmonogramOfert />
                  <Faqs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/O_nas"
              element={
                <>
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Napisz_do_nas"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/laboratory"
              element={
                <>
                  <OfertsLaboratory />
                  <Footer />
                </>
              }
            />
            <Route
              path="/companies"
              element={
                <>
                  <OfertsCompanies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/producers"
              element={
                <>
                  <OfertsProducers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/training"
              element={
                <>
                  <OfertsTraining />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

const ScrollToTop = props => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default MainPage;
