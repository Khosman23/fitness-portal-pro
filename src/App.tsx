import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Index from "./pages/Index";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Schedule from "./pages/Schedule";
import Membership from "./pages/Membership";
import GroupClasses from "./pages/GroupClasses";
import PersonalTraining from "./pages/PersonalTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">FitLife</Link>
            <nav className="hidden lg:flex space-x-4">
              <Link to="/" className="hover:text-gray-300">Hjem</Link>
              <Link to="/about" className="hover:text-gray-300">Om Oss</Link>
              <Link to="/locations" className="hover:text-gray-300">Lokasjoner</Link>
              <Link to="/schedule" className="hover:text-gray-300">Timeplan</Link>
              <Link to="/membership" className="hover:text-gray-300">Medlemskap</Link>
            </nav>
            <HamburgerMenu />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/group-classes" element={<GroupClasses />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;