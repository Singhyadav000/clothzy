import React from 'react';
import './Collection.css';

const collectionData = [
  { title: 'Midnight Muse Bodycon', price: 1999, image: 'public/assets/ocr2jta7ezwll9ufwqad.png' },
  { title: 'Blush Bloom Bodycon', price: 1999, image: 'public/assets/pvewa0fyrcbc7lwvfbsw.png' },
  { title: 'Noir Nights Mini Bodycon', price: 1999, image: 'public/assets/qbgqajb0z4rt7o14xzj9.png' },
  { title: 'Pastel Muse Bodycon', price: 2999, image: 'public/assets/klljnu0aa29rqr5nn9qw (1).png' },
  { title: 'Emerald Allure Bodycon', price: 1899, image: '/assets/pvewa0fyrcbc7lwvfbsw.png' },
  { title: 'Sky Serenity Bodycon', price: 1999, image: '/assets/q3kz4awbmxzoifynrw92.png' },
  { title: 'Midnight Elegance Bodycon', price: 2999, image: '/assets/twf5o2qex89xz5az6ydl.jpg' },
  { title: 'Crimson Allure Bodycon Dress', price: 1999, image: '/assets/wjia23u1efh1yelqydes.png' },
];

function Collection() {
  return (
    <div className="collection-container">
      <aside className="filters">
        <h3>FILTERS</h3>

        <div className="filter-section">
          <h5>CATEGORIES</h5>
          <label><input type="checkbox" /> Men</label>
          <label><input type="checkbox" /> Women</label>
          <label><input type="checkbox" /> Kids</label>
        </div>

        <div className="filter-section">
          <h5>TYPE</h5>
          <label><input type="checkbox" /> Topwear</label>
          <label><input type="checkbox" /> Bottomwear</label>
          <label><input type="checkbox" /> Winterwear</label>
        </div>
      </aside>

      <main className="products">
        <div className="products-header">
          <h2><span>ALL</span> COLLECTIONS</h2>
          <select>
            <option>Sort by: Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="product-grid">
          {collectionData.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>Rs.{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Collection;
