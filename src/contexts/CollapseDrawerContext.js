import PropTypes from 'prop-types';
import {createContext, useState, useEffect} from 'react';
// @mui
import {useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

// ----------------------------------------------------------------------

const initialState = {
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {},
};

const CollapseDrawerContext = createContext(initialState);

// ----------------------------------------------------------------------

CollapseDrawerProvider.propTypes = {
  children: PropTypes.node,
};

function CollapseDrawerProvider({children}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [collapse, setCollapse] = useState({
    click: false,
  });

  useEffect(() => {
    if (isMobile) {
      setCollapse({
        click: false,
      });
    }
  }, [isMobile]);

  const handleToggleCollapse = () => {
    setCollapse({...collapse, click: !collapse.click});
  };

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: isMobile ? true : false,
        collapseClick: collapse.click,
        onToggleCollapse: handleToggleCollapse,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
}

export {CollapseDrawerProvider, CollapseDrawerContext};
