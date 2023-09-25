import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../img/common/icon_arrow_left_333.svg'

function Back() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기 처리
  };

  return (
    <div className='back'>
      <button onClick={goBack}>
        <img src={arrow} alt='뒤로가기' />
      </button>
    </div>
  );
}

export default Back;