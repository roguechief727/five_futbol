import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MatchHistoryProvider } from './contexts/MatchHistoryContext';
import { MatchProvider } from './contexts/MatchContext';
import { PlayersProvider } from './contexts/PlayersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayersProvider>
    <MatchHistoryProvider>
    <MatchProvider>
    <AuthProvider>
      <Header />
        <App />
      <Footer />
    </AuthProvider>
    </MatchProvider>
    </MatchHistoryProvider>
    </PlayersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
