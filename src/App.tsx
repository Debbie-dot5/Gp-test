import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { SidebarProvider } from "./components/ui/sidebar";
import SidebarComponent from "./components/SidebarComponent";
import ProgressDashboard from "./components/ProgressDashboard";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router> 
      <div>
        <SidebarProvider>
          <SidebarComponent />
          <div className="flex flex-col flex-grow overflow-auto">
            <Routes> 
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<ProgressDashboard />} />
              <Route path="/" element={<ProgressDashboard />} /> 
            </Routes>
          </div>
        </SidebarProvider>
      </div>
    </Router>
  );
};

export default App;