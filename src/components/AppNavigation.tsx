import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { MobileNavigation } from '../mobileView/MobileNavigation.tsx';
import { Navigation } from '../Navigation.tsx';

// Pages whose form has no detectable submit button: the classifier falls back to the whole page,
// so navigation links would count as extra buttons.
const ROUTES_WITHOUT_NAVIGATION = new Set(['/singleButtonLogin', '/twoButtonsLogin']);

export const AppNavigation = () => {
  const { pathname } = useLocation();

  if (ROUTES_WITHOUT_NAVIGATION.has(pathname)) {
    return null;
  }

  return isMobile ? <MobileNavigation /> : <Navigation />;
};
