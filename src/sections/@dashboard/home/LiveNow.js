// @mui
import {useTheme} from '@mui/material/styles';
import {Box, Card, Avatar, Typography, IconButton} from '@mui/material';
import Badge from '@mui/material/Badge';
// @components
import ActiveUsers from '@/components/ActiveUsers';
import SvgIconStyle from '@/components/SvgIconStyle';
import useSettings from '../../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function LiveNow() {
  const {themeMode} = useSettings();
  const theme = useTheme();
  return (
    <Card sx={{px: {md: 3, xs: 1, sm: 2}, py: 1}}>
      <Typography
        sx={{py: 2}}
        style={{
          color: themeMode == 'light' ? '#000' : '#fff',
          fontWeight: 600,
        }}
      >
        Live Now
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8px',
            gap: '10px',
            width: '340px',
            height: 'auto',
            background: themeMode === 'light' ? '#F0EDF1' : '#261033',
            borderRadius: '96px',
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            badgeContent={
              <SvgIconStyle
                alt="Remy Sharp"
                src="/icons/ic_live.svg"
                bgColor="#1AD343"
              />
            }
          >
            <Avatar
              alt="Travis Howard"
              src="/images/1.png"
              sx={{
                border: '1px solid #1DA1F2',
              }}
            />
          </Badge>
          <Box
            style={{
              marginLeft: '10px',
            }}
          >
            <Box>
              <Box style={{display: 'flex', alignItems: 'center'}}>
                <Typography
                  style={{
                    color: themeMode == 'light' ? '#000' : '#fff',
                    fontWeight: 600,
                  }}
                >
                  @Joli
                </Typography>
                <Box sx={{ml: 1}} style={{lineHeight: '10px'}}>
                  <SvgIconStyle src="/icons/ic_batch.svg" bgColor="#1D9FEE" />
                </Box>
              </Box>
              <Typography
                style={{
                  color: themeMode === 'light' ? '#100616' : '#E9E9E9',
                }}
              >
                10000 people / 678 Watching now
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            pl: 2,
          }}
        >
          <IconButton>
            <SvgIconStyle
              src="/icons/ic_cross.svg"
              bgColor="#676E7E"
              sx={{width: '16px', height: '16px'}}
            />
          </IconButton>
        </Box>
      </Box>
      <ActiveUsers />
    </Card>
  );
}
