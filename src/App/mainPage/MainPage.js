import "./MainPage.css";
import "../generalStyles/buttons/buttons.css";
import "../generalStyles/inputs/inputs.css";
import "../generalStyles/lines/lines.css";
import "../generalStyles/texts/text.css";
import "../generalStyles/icons/icons.css";
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
import Logging from "../admin_pages/logging/logging";
import Dashboard from "../admin_pages/dashboard/dashboard";
import AddTraining from "../admin_pages/dashboard/add_news/add_news";
import EditTraining from "../admin_pages/dashboard/edit_news/edit_news";
import NavbarAdmin from "../admin_pages/dashboard/navbar/Navbar";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
function MainPage() {
  return (
    <Router basename="/A2kcent">
      <ScrollToTop>
        <div className="body-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <MainView />
                  {/* <OpinionView /> */}
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
                  <Navbar />
                  <Promotions />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Harmonogram"
              element={
                <>
                  <Navbar />
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
                  <Navbar />
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
                  <Navbar />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Napisz_do_nas"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/laboratory"
              element={
                <>
                  <Navbar />
                  <OfertsLaboratory />
                  <Footer />
                </>
              }
            />
            <Route
              path="/companies"
              element={
                <>
                  <Navbar />
                  <OfertsCompanies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/producers"
              element={
                <>
                  <Navbar />
                  <OfertsProducers />
                  <Footer />
                </>
              }
            />
            <Route
              path="/training"
              element={
                <>
                  <Navbar />
                  <OfertsTraining />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  <Logging />
                </>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <>
                  <NavbarAdmin />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/admin/dashboard/add"
              element={
                <>
                  <NavbarAdmin />
                  <AddTraining />
                </>
              }
            />
            <Route
              path="/admin/dashboard/edit/:id"
              element={
                <>
                  <NavbarAdmin />
                  <EditTraining />
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
