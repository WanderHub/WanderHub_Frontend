import React from 'react';
import { useNavigate } from 'react-router-dom';
import SetNickname from './SetNickname';
import AuthAPI from '@/api/AuthAPI';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';

const Redirection = async () => {
  const code = new URL(window.location.href);
  const navigate = useNavigate();
  const accessToken: string | null = code.searchParams.get('access_token');
  const isNewbie = code.searchParams.get('newbie');
  const setUserInfo = useSetRecoilState(userInfoAtom);

  if (accessToken !== null) {
    localStorage.setItem('accessToken', accessToken);

    if (isNewbie === 'false') {
      const res = await AuthAPI.get('/members');
      setUserInfo(res.data);
      navigate('/');
    }
  }

  return <>{isNewbie === 'true' && <SetNickname />}</>;
};

export default Redirection;
