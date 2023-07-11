import React from 'react';

const Redirection = () => {
  console.log(location.search);
  //const url = new URL(window.location.href);
  //localStorage.setItem('access_token', response.data.access_token);
  return (
    <div>
      닉네임을 입력해주세요
      <input />
    </div>
  );
};

export default Redirection;
