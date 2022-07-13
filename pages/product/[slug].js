import React, { useState } from 'react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Product } from '../../components';
import { client, urlFor } from '../../lib/client';
function ProductDetails({ products, product }) {
  const { name, image, details, price } = product;
  const [index, setIndex] = useState(0);

  //    todo handle buy now function

  return (
    <section>
      {/* product detail */}
      <div className='product-detail-container'>
        <div>
          {/* show image */}
          <div className='image-container'>
            <img
              src={urlFor(image && image[index])}
              alt='image'
              className='product-detail-image'
            />
          </div>

          {/* small image */}
          <div className='small-images-container'>
            {image?.map((item, i) => {
              <img
                src={urlFor(item)}
                key={i}
                onMouseEnter={() => setIndex(i)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                alt='small image'
              />;
            })}
          </div>
        </div>

        {/* product details */}
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus'>
                <AiOutlineMinus />
              </span>
              <span className='num'>2</span>
              <span className='plus'>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
              <button type="button" className="add-to-cart" onClick={()=>{}}> Add To Cart</button>
              <button type="button" className="buy-now" onClick={()=>{}}> Buy Now</button>
          </div>
        </div>
      </div>
      {/* like products */}
      <div className="maylike-products-wrapper">
          <h2>You also Like</h2>
          <div className="marquee">
              <div className='maylike-products-container track'>
                  {products.map((item)=><Product key={item._id} product={item} />)}
              </div>
          </div>
      </div>
    </section>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{
        slug{current}
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && slug.current =='${slug}'][0]`;

  const productQuery = `*[_type == 'product']`;

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
