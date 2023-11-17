import React, { lazy } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound/NotFound';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage/PortfolioPage'))
const FinancialReportPage = lazy(() =>
  import('../pages/FinancialReportPage/FinancialReportPage')
)
const VacanciesPage = lazy(() =>
  import('../pages/VacanciesPage/VacanciesPage')
)
const RequisitesPage = lazy(() =>
import('../pages/RequisitesPage/RequisitesPage'))

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<p>loading...</p>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <PortfolioPage />
            </Suspense>
          }
        />
        <Route
          path="/financial-report"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <FinancialReportPage />
            </Suspense>
          }
        />
        <Route
          path="/vacancies"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <VacanciesPage />
            </Suspense>
          }
        />
        <Route
          path = "/requisites"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <RequisitesPage />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default MainRouter;