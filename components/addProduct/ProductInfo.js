import React from 'react'
import ProfileSide from './ProfileSide'
import DetailSide from './DetailSide'
import Footer from '../Footer';

function ProductInfo() {
  return (
    <div>
      <div className='flex mt-4 w-full px-10 gap-2'>
          <ProfileSide/>
          <DetailSide/>
      </div>
      <div className='w-full pl-10'>
        <Footer/>
      </div>
    </div>
  );
}

export default ProductInfo
