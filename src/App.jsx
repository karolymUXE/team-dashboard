import Dashboard from "@pages/Dashboard"
import Statistics from "@pages/Statistics"
import People from "@pages/People"
import Projects from "@pages/Projects"
import Calendar from "@pages/Calendar"
import Poster from "@components/Poster"
import AboutMe from "@pages/AboutMe"
import MainMenu from "@components/MainMenu"
import ErrorPage from "@pages/ErrorPage"
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

const Layout = () => {
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
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/People",
        element: <People />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "/Calendar",
        element: <Calendar />,
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
      main:         '#5b5f97',
      light:        '#b8b8d1',
      dark:         '#37395b',
      contrastText: '#fffffb',
    },
    secondary: {
      main:         '#5e81f4',
      light:        '#dfe6fd',
      dark:         '#384d92',
      contrastText: '#fffffb',
    },
    terciary: {
      main:         '#ff6b6c',
      light:        '#ffe1e2',
      dark:         '#cc5656',
      contrastText: '#fffffb',
    },
    error: {
      main:         '#ff5630',
      light:        '#ffe9d5',
      dark:         '#7a0916',
      contrastText: '#fffffb',
    },
    warning: {
      main:         '#ffab00',
      light:        '#fff5cc',
      dark:         '#7a4100',
      contrastText: '#fffffb',
    },
    info: {
      main:         '#00b8d9',
      light:        '#cafdf5',
      dark:         '#003768',
      contrastText: '#fffffb',
    },
    success: {
      main:         '#22c55e',
      light:        '#d3fcd2',
      dark:         '#065e49',
      contrastText: '#fffffb',
    },
    common: {
      black: '#212B36',
      white: '#fffffb',
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
      900: '#161c24',
    },
    background: {
      paper: '#f3f3f2',
      default: '#f3f3f2',
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default App;