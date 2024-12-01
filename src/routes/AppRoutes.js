import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Admin from '../pages/Admin/Admin';
import Player from '../pages/Player/Player';
import NotFound from '../pages/NotFound/NotFound';
import { AuthContext } from '../contexts/AuthContext';
import AdminLayout from '../layouts/AdminLayout';
import PlayerLayout from '../layouts/PlayerLayout';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {!auth.token ? (
          <>
            {/* Rutas públicas con MainLayout */}
            <Route
              path="/"
              element={
                <MainLayout>
                  <Login />
                </MainLayout>
              }
            />
            <Route
              path="/register"
              element={
                <MainLayout>
                  <Register />
                </MainLayout>
              }
            />
          </>
        ) : auth.role === 'admin' ? (
          <>
            {/* Rutas protegidas para Admin con AdminLayout */}
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Admin />
                </AdminLayout>
              }
            />
          </>
        ) : (
          <>
            {/* Rutas protegidas para Jugador con PlayerLayout */}
            <Route
              path="/player"
              element={
                <PlayerLayout>
                  <Player />
                </PlayerLayout>
              }
            />
          </>
        )}
        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
