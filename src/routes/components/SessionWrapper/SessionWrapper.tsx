import Cookies from 'js-cookie';
import React, { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks';
import { checkSession, selectSessionStatus } from '../../../redux/authSlice';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';
import LoadingSpinner from '../../../components/LoadingSpinner';

interface SessionWrapperProps {
  children: ReactElement;
}

const SessionWrapper = ({ children }: SessionWrapperProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const session = Cookies.get('session');
    const parsedSession = !!session ? JSON.parse(session as string) : {};
    dispatch(checkSession(parsedSession));
  }, []);

  return children;
};

export default React.memo(SessionWrapper);