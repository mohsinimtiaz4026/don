import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
// next
import {useRouter} from 'next/router';
// @mui
import {styled, useTheme} from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Typography,
  Divider,
  Button,
  IconButton,
} from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import {NAVBAR} from '../../../config';
// components
import Scrollbar from '../../../components/Scrollbar';
import {NavSectionVertical} from '../../../components/nav-section';
import useSettings from '@/hooks/useSettings';
import SvgIconStyle from '../../../components/SvgIconStyle';
import NavbarButtons from '../../../components/NavbarButtons';
//
import navConfig from './NavConfig';
import NavbarDocs from './NavbarDocs';
import NavbarAccount from './NavbarAccount';
import CollapseButton from './CollapseButton';
import {useMediaQuery} from '@mui/material';
import Iconify from '@/components/Iconify';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({theme}) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({isOpenSidebar, onCloseSidebar}) {
  const theme = useTheme();
  const {themeMode} = useSettings();

  const {pathname} = useRouter();

  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && {alignItems: 'center'}),
          backgroundColor: themeMode === 'light' ? '#fff' : '#1A0A23',
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            display: isMobile ? 'block' : 'none',
            transition: (theme) =>
              theme.transitions.create('transform', {
                duration: theme.transitions.duration.shorter,
              }),
            cursor: 'pointer',
          }}
          onClick={() => onCloseSidebar()}
        >
          <Iconify
            sx={{width: 30, height: 25}}
            icon="material-symbols:menu-open-rounded"
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              color: themeMode === 'light' ? '#100616' : '#fff',
              fontWeight: 400,
              cursor: 'pointer',
            }}
          >
            Menu
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{backgroundColor: themeMode === 'light' ? '#fff' : '#1A0A23'}}>
        <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />
      </Box>
      <Box sx={{flexGrow: 1}} />
      <Divider />
      <Box
        sx={{
          pt: 2,
          px: 2,
          pb: 2,
          backgroundColor: themeMode === 'light' ? '#fff' : '#1A0A23',
        }}
      >
        {isDesktop && !isCollapse && <NavbarButtons />}
        {isDesktop && isCollapse && (
          <Stack>
            <IconButton>
              <SvgIconStyle src="/icons/ic_go_live.svg" bgColor="#F34A65" />
            </IconButton>
            <IconButton>
              <SvgIconStyle
                src="/icons/ic_plus.svg"
                bgColor={themeMode === 'light' ? '' : '#fff'}
              />
            </IconButton>
          </Stack>
        )}
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      <Drawer
        open={isMobile ? isOpenSidebar : true}
        variant="persistent"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: {
            width: NAVBAR.DASHBOARD_WIDTH,
            borderRightStyle: 'dashed',
            bgcolor: 'background.default',
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.standard,
              }),
            ...(isCollapse && {
              width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
            }),
            ...(collapseHover && {
              ...cssStyles(theme).bgBlur(),
              boxShadow: (theme) => theme.customShadows.z24,
            }),
          },
        }}
      >
        {renderContent}
      </Drawer>
    </RootStyle>
  );
}
