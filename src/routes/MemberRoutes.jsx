import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Member/Dashboard";
import Services from "../pages/Member/Services";
import ServicesRequestForm from "../components/Member/Services/ServicesRequestForm";
import Tracking from "../pages/Member/Tracking";
import Notifications from "../pages/Member/Notifications";
import Profile from "../pages/Member/Profile";
import Support from "../pages/Member/Support";
import Documents from "../pages/Member/Documents";

function MemberRoutes() {
  return (
    <Routes>
      <Route path="/member/dashboard" element={<Dashboard />} />
      <Route path="/member/services" element={<Services />} />
      <Route path="/member/documents" element={<Documents />} />
      <Route
        path="/member/request-service/:serviceId"
        element={<ServicesRequestForm />}
      />
      <Route path="/member/tracking" element={<Tracking />} />
      <Route path="/member/notifications" element={<Notifications />} />
      <Route path="/member/profile" element={<Profile />} />
      <Route path="/member/support" element={<Support />} />
    </Routes>
  );
}

export default MemberRoutes;
