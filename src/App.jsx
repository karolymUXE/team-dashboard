import Home from "@modules/Home"
import Teams from "@modules/Teams"
import Reward from "@reward/Reward"
import Merit from "@reward/Merit"
import Salary from "@reward/Salary"
import Recognition from "@reward/Recognition"
import Poster from "@modules/Poster"
import Talent from "@talent/Talent"
import Develop from "@develop/Develop"
import CareersPlan from "@develop/CareersPlan"
import Experiments from "@develop/Experiments"
import Perform from "@perform/Perform"
import Feedback from "@perform/Feedback"
import ActionPlans from "@perform/ActionPlans"
import KPIs from "@perform/KPIs"
import AboutMe from "@modules/AboutMe"
import MainMenu from "@components/MainMenu"
import Diversity from "@talent/Diversity"
import ErrorPage from "@modules/ErrorPage"
import Engagement from "@engagement/Engagement"
import Culture from "@engagement/Culture"
import OKRs from "@engagement/OKRs"
import Motivators from "@engagement/Motivators"
import TalentHunt from "@talent/TalentHunt"
import CaseStudies from "@modules/CaseStudies"
import CompetencyMatrix from "@talent/CompetencyMatrix"
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
        children: [
          {
            path: "/Talent/Diversity",
            element: <Diversity />,
          },
          {
            path: "/Talent/Competency-Matrix",
            element: <CompetencyMatrix />,
          },
          {
            path: "/Talent/Talent-Hunt",
            element: <TalentHunt />,
          },
        ],
      },
      {
        path: "/Engagement",
        element: <Engagement />,
        children: [
          {
            path: "/Engagement/Culture",
            element: <Culture />,
          },
          {
            path: "/Engagement/OKRs",
            element: <OKRs />,
          },
          {
            path: "/Engagement/Motivators",
            element: <Motivators />,
          },
        ],
      },
      {
        path: "/Develop",
        element: <Develop />,
        children: [
          {
            path: "/Develop/Careers-Plan",
            element: <CareersPlan />,
          },
          {
            path: "/Develop/Experiments",
            element: <Experiments />,
          },
        ],
      },
      {
        path: "/Perform",
        element: <Perform />,
        children: [
          {
            path: "/Perform/Feedback",
            element: <Feedback />,
          },
          {
            path: "/Perform/Action-Plans",
            element: <ActionPlans />,
          },
          {
            path: "/Perform/KPIs",
            element: <KPIs />,
          },
        ],
      },
      {
        path: "/Reward",
        element: <Reward />,
        children: [
          {
            path: "/Reward/Merit",
            element: <Merit />,
          },
          {
            path: "/Reward/Salary",
            element: <Salary />,
          },
          {
            path: "/Reward/Recognition",
            element: <Recognition />,
          },
        ],
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
      main:         '#006644',
      light:        '#e5f3f0',
      dark:         '#007867',
      contrastText: '#f9fafb'
    },
    secondary: {
      main:         '#8e33ff',
      light:        '#efd6ff',
      dark:         '#27097a',
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
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default App;
