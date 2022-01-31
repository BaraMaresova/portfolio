import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../src/pages/Homepage.jsx';
import { Experiences } from './pages/Experiences.jsx';
import { References } from './pages/References.jsx';
import { Skills } from './pages/Skills.jsx';
import { GlobalStyles } from './utils/theme/GlobalStyles';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState(theme);

  React.useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </>
  );
}

export default App;
