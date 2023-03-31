import {useState} from 'react';
// next
import NextLink from 'next/link';
// @mui
import {alpha} from '@mui/material/styles';
import {Box, Divider, Typography, Stack, MenuItem, Avatar} from '@mui/material';
import Iconify from '../../../components/Iconify';
// components
import MenuPopover from '../../../components/MenuPopover';
import {IconButtonAnimate} from '../../../components/animate';
import useResponsive from '../../../hooks/useResponsive';
import {IconButton} from '@mui/material';
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: '/',
  },
  {
    label: 'Settings',
    linkTo: '/',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const isDesktop = useResponsive('up', 'lg');

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        style={{
          display: 'flex',
          cursor: 'pointer',
          textAlign: 'left',
          alignItems: 'center',
        }}
      >
        <Avatar
          // src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
          alt="Sample Name"
        />
        <Box style={{paddingLeft: '10px'}}>
          <Typography sx={{color: 'text.secondary'}} variant="subtitle2" noWrap>
            Sample Name
          </Typography>
          <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
            sample75@gmail.com
          </Typography>
        </Box>
        <Box style={{paddingLeft: '10px'}}>
          <Iconify
            icon={'material-symbols:keyboard-arrow-down-rounded'}
            width={20}
            height={20}
          />
        </Box>
      </Box>
      <IconButton></IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{my: 1.5, px: 2.5}}>
          <Typography variant="subtitle2" noWrap>
            Sample Name
          </Typography>
          <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
            sample75@gmail.com
          </Typography>
        </Box>

        <Divider sx={{borderStyle: 'dashed'}} />

        <Stack sx={{p: 1}}>
          {MENU_OPTIONS.map((option) => (
            <NextLink key={option.label} href={option.linkTo} passHref>
              <MenuItem key={option.label} onClick={handleClose}>
                {option.label}
              </MenuItem>
            </NextLink>
          ))}
        </Stack>

        <Divider sx={{borderStyle: 'dashed'}} />

        <MenuItem sx={{m: 1}}>Logout</MenuItem>
      </MenuPopover>
    </>
  );
}
