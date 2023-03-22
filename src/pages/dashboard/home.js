// @mui
import {Container, Grid} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import FeedTabs from "../../components/FeedTabs";
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
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={8} md={6}>
            <NewPost />
            <Items />
            <FeedTabs />
          </Grid>
          <Grid item xs={4} md={6}>
            {/* <LiveNow /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
