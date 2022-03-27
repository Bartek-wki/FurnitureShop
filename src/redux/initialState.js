const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'src=../../images/bed/bed_1.jpg',
      price: 30,
      stars: 2,
      promo: '',
      newFurniture: true,
      favorites: false,
      myStars: 3,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/bed/bed_2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: true,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'src=../../images/bed/bed_3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'src=../../images/bed/bed_4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: true,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'src=../../images/bed/bed_5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'src=../../images/bed/bed_6.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'src=../../images/bed/bed_7.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'src=../../images/bed/bed_8.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'src=../../images/bed/bed_9.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'src=../../images/bed/bed_10.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'src=../../images/bed/bed_11.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'src=../../images/bed/bed_12.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'src=../../images/bed/bed_13.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'src=../../images/bed/bed_14.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'src=../../images/bed/bed_15.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'src=../../images/bed/bed_16.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'src=../../images/bed/bed_17.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'src=../../images/bed/bed_18.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'src=../../images/bed/bed_19.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'src=../../images/bed/bed_20.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'src=../../images/bed/bed_21.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'src=../../images/bed/bed_22.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'src=../../images/bed/bed_23.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'src=../../images/bed/bed_24.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
  ],
  cart: {
    products: [],
  },
  compare: [],
  feedbacks: [
    {
      id: 'client1',
      name: 'John Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique dolor sed enim efficitur posuere. Nullam blandit enim libero. Morbi eu ipsum ac justo semper semper a a neque. Fusce sodales tincidunt eleifend. Interdum et.',
      image: 'src=../../images/feedback/client1.jpg',
    },
    {
      id: 'client1',
      name: 'Amanda Doom',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam lacinia sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec condimentum metus nec tellus eleifend finibus varius eget odio. Cras ut tortor.',
      image: 'src=../../images/feedback/client2.jpg',
    },
    {
      id: 'client1',
      name: 'Scott Mad',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu luctus tortor, sed tempor enim. Mauris aliquam vel enim et laoreet. Quisque viverra euismod leo, ac accumsan lorem condimentum sit amet. Mauris ultrices diam sem.',
      image: 'src=../../images/feedback/client3.jpg',
    },
  ],
};

export default initialState;
