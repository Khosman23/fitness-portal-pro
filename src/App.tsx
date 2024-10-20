import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">FitLife</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-300">Hjem</Link>
              <Link to="/about" className="hover:text-gray-300">Om Oss</Link>
              <Link to="/locations" className="hover:text-gray-300">Lokasjoner</Link>
              <Link to="/schedule" className="hover:text-gray-300">Timeplan</Link>
              <Link to="/membership" className="hover:text-gray-300">Medlemskap</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Andre ruter vil bli lagt til her senere */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;