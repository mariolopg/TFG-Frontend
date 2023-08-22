import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LOGIN_PATH } from '../constants';
import { useAppSelector } from '../hooks/appHooks';
import { selectToken } from '../redux/authSlice';
import SessionWrapper from './components/SessionWrapper/SessionWrapper';
import LoadingSpinner from '../components/LoadingSpinner';

const AuthRoute = ({ children, sessionRequired }: { children: JSX.Element, sessionRequired?: boolean }) => {
  const session = Cookies.get('session');
  const navigate = useHistory();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (!token && !session && sessionRequired) {
      navigate.push(LOGIN_PATH);
      location.reload();
    }
  }, [navigate, session, token]);

  if (!session && sessionRequired) {
    < Redirect exact to={LOGIN_PATH} push />
    return null
  }

  return <SessionWrapper>{children}</SessionWrapper>;
};

export default React.memo(AuthRoute);