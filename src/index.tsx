import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from './routes';

const container = document.getElementById('root');

createRoot(container!).render(<Router />);