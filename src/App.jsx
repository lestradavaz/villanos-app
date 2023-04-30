import React from 'react';
import { Navbar, Socials, GoTopButton, Footer } from './components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import * as pages from './pages';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Socials />
                <GoTopButton />
                <Routes>
                    <Route
                        index
                        element={<Navigate to="/inicio" replace={true} />}
                    />
                    <Route path="inicio" element={<pages.Inicio />} />
                    <Route path="nosotros" element={<pages.Nosotros />} />
                    <Route path="contacto" element={<pages.Contacto />} />
                    <Route path="404" element={<pages.NotFound />} />
                    <Route
                        path="*"
                        element={<Navigate to="/404" replace={true} />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
