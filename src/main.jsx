import './style.css';
import { createRoot } from 'react-dom/client';
import StudioApp from './StudioApp.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<StudioApp />);
