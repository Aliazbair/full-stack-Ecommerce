import React from 'react';

import { client } from '../lib/client';
import { Footer, FooterBanner, HeroBanner, Product} from '../components'

const Home = ({ products, bannerData }) => {

  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      {/* loop for all products */}
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* Footer */}
      {/* <Footer /> */}

      <FooterBanner FooterBanner={bannerData.length && bannerData[0]} />

      <Footer />
    </>
  );
};


// get product from sanity

export const getServerSideProps=async()=>{
  // make query to get product
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // make query to get Banner
  const bannerQuery=`*[_type =='banner']`;
  const bannerData=await client.fetch(bannerQuery);

  return {
    props: { products,bannerData },
  };
}
export default Home;
