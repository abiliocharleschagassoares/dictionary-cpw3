import ReactDOM from 'react-dom/client';
import App from './App';
import PaletteStyles from './stylesheets/palette';
import FontStyles from './stylesheets/font';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <PaletteStyles />
    <FontStyles />
    <App />
  </>
);