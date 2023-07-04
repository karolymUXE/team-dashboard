import Home from "@pages/Home"
import Teams from "@pages/Teams"
import Reward from "@pages/Reward"
import Poster from "@pages/Poster"
import Talent from "@pages/Talent"
import Develop from "@pages/Develop"
import Perform from "@pages/Perform"
import AboutMe from "@pages/AboutMe"
import MainMenu from "@components/MainMenu"
import ErrorPage from "@pages/ErrorPage"
import Engagement from "@pages/Engagement"
import CaseStudies from "@pages/CaseStudies"
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

const DashBoard = () => {
  return (
    <div>
      <MainMenu />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Teams",
        element: <Teams />,
      },
      {
        path: "/Talent",
        element: <Talent />,
      },
      {
        path: "/Engagement",
        element: <Engagement />,
      },
      {
        path: "/Develop",
        element: <Develop />,
      },
      {
        path: "/Perform",
        element: <Perform />,
      },
      {
        path: "/Reward",
        element: <Reward />,
      },
      {
        path: "/Case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/About-me",
        element: <AboutMe />,
      },
    ],
  },
  {
    path: "/poster/:id",
    element: <Poster />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Public Sans"',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main:         '#006141',
      light:        '#ccdfd9',
      dark:         '#004e34',
      contrastText: '#f9fafb'
    },
    secondary: {
      main:         '#1B567E',
      light:        '#d1dde5',
      dark:         '#10344c',
      contrastText: '#f9fafb'
    },
    error: {
      main:         '#ff5630',
      light:        '#ffe9d5',
      dark:         '#7a0916',
      contrastText: '#f9fafb'
    },
    warning: {
      main:         '#ffab00',
      light:        '#fff5cc',
      dark:         '#7a4100',
      contrastText: '#f9fafb'
    },
    info: {
      main:         '#00b8d9',
      light:        '#cafdf5',
      dark:         '#003768',
      contrastText: '#f9fafb'
    },
    success: {
      main:         '#22c55e',
      light:        '#d3fcd2',
      dark:         '#065e49',
      contrastText: '#f9fafb'
    },
    common: {
      black: '#212B36',
      white: '#f9fafb'
    },
    grey: {
      50:  '#f9f9f1',
      100: '#f9fafb',
      200: '#f4f6f8',
      300: '#dfe3e8',
      400: '#c4cdd5',
      500: '#919eab',
      600: '#637381',
      700: '#454f5b',
      800: '#212b36',
      900: '#161c24'
    },
    background: {
      paper: '#FFFCF5',
      default: '#FFFCF5',
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default App;
