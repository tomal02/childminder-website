import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <h3>
        Rated "Outstanding" by Ofsted Feb 2020 & Feb 2016. I provide a fun,
        educational and homely environment.
      </h3>
      <button>
        <Link to="/contact">Contact me!</Link>
      </button>
    </div>
  );
};

export default Home;

{
  /* <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0"
        nonce="PpyPkNiZ"
      ></script>

<iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWestMoleseychildminder&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="340"
        height="500"
        style={{ border: 'none;', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */
}
