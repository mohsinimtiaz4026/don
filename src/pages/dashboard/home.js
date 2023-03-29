// @mui
import {Container, Grid} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import FeedTabs from '../../components/FeedTabs';
import SuggestionMenu from '../../components/SuggestionMenu';
// sections
import {NewPost, LiveNow, Items} from '../../sections/@dashboard/home';
// ----------------------------------------------------------------------

PageHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageHome() {
  const {themeStretch} = useSettings();

  console.log();
  return (
    <Page title="Home">
      <Container
        sx={{
          pl: {xs: '0px !important'},
          pr: {xs: '0px !important'},
        }}
        maxWidth={themeStretch ? false : 'xl'}
      >
        <Grid container>
          <Grid p={1} item xl={8} lg={6} md={6} sm={12}>
            <NewPost />
            <Items />
            <FeedTabs />
          </Grid>
          <Grid p={1} item xl={4} lg={6} md={6} sm={12}>
            <LiveNow />
            <SuggestionMenu />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
