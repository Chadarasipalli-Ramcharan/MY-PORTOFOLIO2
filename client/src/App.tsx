import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import WelcomePage from "@/pages/WelcomePage";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/not-found";
import AdminMessages from "@/pages/AdminMessages";
import AdminLogins from "@/pages/AdminLogins";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

const App = () => {
  const { pathname } = useLocation();
  const isWelcome = pathname === "/";
  const isAdminMsgs = pathname === "/admin/messages";
  const isAdminLogins = pathname === "/admin/logins";

  const shouldHideNavbar = isWelcome || isAdminMsgs || isAdminLogins;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/admin/logins" element={<AdminLogins />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isWelcome && <AdminPanel />}
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

export default App;
