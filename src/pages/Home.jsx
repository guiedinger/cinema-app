import React, { useEffect } from 'react';
import api from '../services/api';

export default () => {
  useEffect(() => {
    api.get('',{
      params: {
        s: 'batman'
      }
    }).then((res) => console.log(res));
  }, []);
  return (
    <>Home</>
  );
}