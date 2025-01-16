import React from 'react';
import Cardlist from '../component/cardlist/Cardlist';
import { useMediaQuery } from 'react-responsive';

export default function Trip() {
  const isMobile = useMediaQuery({ query: '(max-width:1280px)' });
  const tripWrap = {
    width: isMobile ? '100%' : '1280px',
    height: 'auto',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '100px',
    padding: isMobile ? '16px' : '0px', // 쉼표 추가
    boxSizing: isMobile ? 'border-box' : 'content-box', // `boxSizing` 키 이름 수정
  };

  return (
    <div style={tripWrap}>
      <Cardlist />
    </div>
  );
}
