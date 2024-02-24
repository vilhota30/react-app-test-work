import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import VortexLoader from '../components/VortexLoader/VortexLoader';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Layout from './Layout/Layout';

const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LogIn/LogInPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const UserProfile = lazy(() =>import('../pages/UserProfile/UserProfile'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

export const App = () => {
  return (
     <>
     <Suspense fallback={<VortexLoader />}>
           <Routes>

           <Route path="/" element={<Layout />}>
           <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="user" element={<UserProfile />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
             <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserProfile />} />

            </Route>
            <Route path="*" element={<NotFoundPage />} />
            </Route> 
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
     </>
  );
};

