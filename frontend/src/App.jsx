import { Header, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

export default function App() {
  return (
    <>
      <div className="flex-1 max-sm:w-full max-w-[1280px] my-[150px] mx-auto sm:pr-5 bg-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </>
  );
}
