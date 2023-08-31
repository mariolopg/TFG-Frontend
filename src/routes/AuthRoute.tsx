import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN_PATH } from '../constants';
import { useAppSelector } from '../hooks/appHooks';
import { selectToken } from '../redux/authSlice';
import SessionWrapper from './components/SessionWrapper/SessionWrapper';

const AuthRoute = ({ children, sessionRequired }: { children: JSX.Element, sessionRequired?: boolean }) => {
  const session = Cookies.get('session');
  const history = useHistory();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (!token && !session && sessionRequired) {
      history.push(LOGIN_PATH);
      location.reload();
    }
  }, [history, session, token]);

  if (!session && sessionRequired) {
    window.location.replace(LOGIN_PATH)
    return null
  }

  return <SessionWrapper sessionRequired={sessionRequired}>{children}</SessionWrapper>;
};

export default React.memo(AuthRoute);