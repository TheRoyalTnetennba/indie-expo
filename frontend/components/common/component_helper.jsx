import React from 'react';

import AuthedNavBar from './authed_nav_bar';
import UnauthedNavBar from './unauthed_nav_bar';

export const NavBar = (props) => {
  if (props.state.session.currentUser && Object.keys(props.state.session.currentUser).length) {
    return (
      <AuthedNavBar />
    );
  }
  return (
    <UnauthedNavBar />
  );
};

export const dummyCampaignShow = {
  id: 268,
  title: 'TableTop EnJoyable',
  goal: 37000,
  body: 'Cras dignissim, metus ut lobortis tristique, diam nisl dapibus eros, eu pretium mi nunc non dui. Integer tempus tortor sem, consectetur lobortis dolor rutrum in. Fusce sed purus sit amet nunc laoreet suscipit. Etiam pellentesque lobortis mattis. Fusce efficitur tortor sit amet urna commodo sollicitudin. Nullam vehicula sagittis eros, quis rhoncus orci volutpat at. Morbi mauris diam, sollicitudin vel sem vitae, mattis egestas',
  image_urls: [
    'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278656/pexels-photo-209640_nuareg.jpg',
    'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278817/pexels-photo-208147_zzbz5i.jpg',
    'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278814/pexels-photo-262488_gpkhro.jpg',
    'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278656/pexels-photo-220053_kmilgg.jpg',
    'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278434/yanni-panesa-216327_zf71pu.jpg',
  ],
  category: {
    id: 80,
    title: 'Games',
    created_at: '2017-07-29T00:57:10.267Z',
    updated_at: '2017-07-29T00:57:10.267Z',
    image_url: null,
  },
  progress: 12.16,
  days_left: 31,
  pretty_funds: '4,500',
  pitch: 'We are researching and designing a series of games designed to help people with PTSD and social anxiety. The games will be made with a carefully selected, soothing color pallet, and warm, reassuring materials.',
  tagline: 'Alleviate stress with clinically tested board games',
  city: 'Austin',
  country: 'USA',
  duration: 30,
  overview: 'Cras dignissim, metus ut lobortis tristique, diam nisl dapibus eros, eu pretium mi nunc non dui. Integer tempus tortor sem, consectetur lobortis dolor rutrum in. Fusce sed purus sit amet nunc laoreet suscipit. Etiam pellentesque lobortis mattis. Fusce efficitur tortor sit amet urna commodo sollicitudin. Nullam vehicula sagittis eros, quis rhoncus orci volutpat at. Morbi mauris diam, sollicitudin vel sem vitae, mattis egestas',
  pretty_goal: '37,000',
  creator: {
    creator_id: 34,
    first_name: 'Sissa',
    last_name: 'ibn Dahir',
    image_url: 'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278425/pexels-photo-57018_xbak30.jpg',
  },
  perks: [],
  image_url: 'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1501278656/pexels-photo-209640_nuareg.jpg',
};

export const dummyCampaignIndex = [
  {
    id: 267,
    title: 'Bow Wow Biotics',
    tagline: "Man's best friend. Made to order.",
    image_url: 'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921122/pexels-photo-64658_z3e820.jpg',
    pitch: 'Build your own, unique designer dog breed in four easy steps. 1) Select your base breed. 2) Select a hybrid breed. 3) Love and cherish your beautiful and unique creation.',
    category: 'Pets',
    progress: 0.01,
    daysRemaining: 25,
    prettyFunds: '53,784',
  },
];
