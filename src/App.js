import AllCampaigns from "./components/AllCampaigns";
import Body from "./components/Body";

import Navbar from "./components/Navbar";
import CreateCampaign from "./components/CreateCampaign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NgoState from "./context/ngoState";
import Campaign from "./components/Campaign";
import ViewCampaign from "./components/ViewCampaign";
function App() {
  return (
    <BrowserRouter>
      <NgoState>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Body />
                <AllCampaigns />
                <AboutUs />
              </div>
            }
          />
          <Route exact path="/createCampaign" element={<CreateCampaign />} />
          <Route exact path="/:id" element={<ViewCampaign />} />
        </Routes>
        <Footer />
      </NgoState>
    </BrowserRouter>
  );
}

export default App;
