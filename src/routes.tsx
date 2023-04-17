import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Sobre = lazy(() => import('pages/Sobre'));
const Prato = lazy(() => import('pages/Prato'));


export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Suspense fallback={<p> Carregando ... </p>}>
          <Menu />
          <Routes>
            <Route path='/' element={<PaginaPadrao />} >
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}