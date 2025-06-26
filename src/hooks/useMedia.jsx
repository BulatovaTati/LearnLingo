import { useMediaQuery } from 'react-responsive';
import { BP } from '../constants/breakpoints';

export const useMedia = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${BP.mobileMax}px)` });

    const isTablet = useMediaQuery({
        query: `(min-width: ${BP.tabletMin}px) and (max-width: ${BP.tabletMax}px)`,
    });

    const isDesktop = useMediaQuery({ query: `(min-width: ${BP.desktopMin}px)` });

    const isMobileOrTablet = isMobile || isTablet;
    const current = (isMobile && 'mobile') || (isTablet && 'tablet') || (isDesktop && 'desktop');

    return { isMobile, isTablet, isDesktop, isMobileOrTablet, current };
};
