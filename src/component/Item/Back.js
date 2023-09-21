import React from 'react';
import { useNavigate } from 'react-router-dom';

function Back() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기 처리
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
}

export default Back;