import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { SharedLayout } from 'components/SharedLayout';
import { PrivateRoute } from '../utils/PrivateRoute';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { Title } from './base/CommonStyle.styled';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Title size="16px" margin="50px auto" position="center">
      Refreshing user...
    </Title>
  ) : (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};
