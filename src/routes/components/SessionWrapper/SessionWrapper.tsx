import Cookies from 'js-cookie';
import React, { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks';
import { checkSession, selectSessionStatus } from '../../../redux/authSlice';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

interface SessionWrapperProps {
  children: ReactElement;
  sessionRequired?: boolean,
}

const SessionWrapper = ({ children, sessionRequired }: SessionWrapperProps) => {
  const dispatch = useAppDispatch();
  const requestStatus = useAppSelector(selectSessionStatus);

  useEffect(() => {
    const session = Cookies.get('session');
    const parsedSession = !!session ? JSON.parse(session as string) : {};
    dispatch(checkSession(parsedSession));
  }, []);

  if (sessionRequired && requestStatus === QueryStatus.fulfilled) {
    return children;
  }

  if (!sessionRequired) {
    return children;
  }

};

export default React.memo(SessionWrapper);