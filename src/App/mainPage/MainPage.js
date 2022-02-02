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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <Router>
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
                <Faqs />
                <Footer />
              </>
            }
          />
          <Route
            path="/Napisz_do_nas"
            element={
              <>
                <Contact />
                <Faqs />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
