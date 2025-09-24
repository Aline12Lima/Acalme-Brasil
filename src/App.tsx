import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NotFound from "./pages/NotFound";

import WhatsAppButton from "@/components/common/WhatsAppButton";

// A custom component that renders the Header and Footer for specific routes
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

const queryClient = new QueryClient();

interface AppProps {
  router: ReturnType<typeof import("react-router-dom").createBrowserRouter>;
}

const App: React.FC<AppProps> = ({ router }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RouterProvider router={router} />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* NotFound route should be the last one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
