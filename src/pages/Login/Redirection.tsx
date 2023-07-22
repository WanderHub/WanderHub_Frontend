import React from 'react';
import { useNavigate } from 'react-router-dom';
import SetNickname from './SetNickname';

const Redirection = () => {
  const code = new URL(window.location.href);
  const navigate = useNavigate();
  const accessToken: string | null = code.searchParams.get('access_token');
  const isNewbie = code.searchParams.get('newbie');

  if (accessToken !== null) {
    localStorage.setItem('accessToken', accessToken);
    if (isNewbie === 'false') {
      navigate('/');
    }
  }

  return <>{isNewbie === 'true' && <SetNickname />}</>;
};

export default Redirection;
