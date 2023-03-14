import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { BottomNavigation, BottomNavigationAction, Container, makeStyles } from '@mui/material';
import { Add, Favorite, HomeMax, LocationCity, Restore } from '@mui/icons-material';
import Database from '@/Database';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [value, setValue] = React.useState(-1);


  React.useEffect(() => {
    new Database()
  }, [])
  React.useEffect(() => {
    switch(value) {
      case 0:
        window.location.href = "/"
        break
      case 1:
        window.location.href = "/add-record"
        break
    }
  }, [value])
  return (
    <CacheProvider 
    value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container
          sx={{
            mb: "86px"
          }}
        >
        <Component {...pageProps} />
        </Container>
        <BottomNavigation
          showLabels
          value={value}
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeMax />} />
          <BottomNavigationAction label="Add" icon={<Add />} />
        </BottomNavigation>
      </ThemeProvider>
    </CacheProvider>
  );
}