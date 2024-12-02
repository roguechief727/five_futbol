import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Admin from '../pages/Admin/Admin';
import Player from '../pages/Player/Player';
import NotFound from '../pages/NotFound/NotFound';
import { AuthContext } from '../contexts/AuthContext';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home'
import ListaCalificacion from '../pages/ListaCalificacion/ListaCalificacion';
import DetalleJugador from '../pages/ListaCalificacion/DetalleJugador';
import MatchHistory from '../pages/MatchHistory/MatchHistory';
import ListaPartidos from '../pages/ListaPartidosJugador/ListaPartidosJugador';
import DetallePartido from '../pages/ListaPartidosJugador/DetallePartido';
import CriticList from '../pages/ListaDeCriticas/CriticList';
import ListaJugadores from '../pages/ListaJugadores/ListaJugadores';

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
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/login"
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
        ) : auth.role === 'administrador' ? (
          <>
            {/* Rutas protegidas para Admin con AdminLayout */}
            <Route
              path="/admin"
              element={
                <MainLayout>
                  <Admin />
                </MainLayout>
              }
            />
            <Route
              path="/admin/lista-jugadores"
              element={
                <MainLayout>
                  <ListaJugadores />
                </MainLayout>
              }
            />
            <Route
              path="/admin/match-history"
              element={
                <MainLayout>
                  <MatchHistory />
                </MainLayout>
              }
            />
          </>
        ) : (
          <>
            {/* Rutas protegidas para Jugador con PlayerLayout */}
            <Route
              path="/player"
              element={
                <MainLayout>
                  <Player />
                </MainLayout>
              }
            />
            <Route
              path="/jugadores"
              element={
                <MainLayout>
                  <ListaCalificacion />
                </MainLayout>
              }
            />
            <Route
              path="/jugadores/:id"
              element={
                <MainLayout>
                  <DetalleJugador />
                </MainLayout>
              }
            />
            <Route
              path="/partidos"
              element={
                <MainLayout>
                  <ListaPartidos />
                </MainLayout>
              }
            />
            <Route
              path="/partidos/:id"
              element={
                <MainLayout>
                  <DetallePartido />
                </MainLayout>
              }
            />
            <Route
              path="/Criticas"
              element={
                <MainLayout>
                  <CriticList />
                </MainLayout>
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
