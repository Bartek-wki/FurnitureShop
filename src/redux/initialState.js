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
      isFavourite: true,
      isCompare: true,
      compareActive: true,
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
      isFavourite: true,
      isCompare: false,
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
      favorites: true,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: true,
      compareActive: true,
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
      isFavourite: false, 
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
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
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'chernaya-1',
      name: 'Chernaya',
      category: 'chair',
      image: 'src=../../images/chair/chernaya.jpg',
      price: 30,
      stars: 2,
      promo: '',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'ekrulila-2',
      name: 'Ekrulila',
      category: 'chair',
      image: 'src=../../images/chair/ekrulila.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'johnson-3',
      name: 'Johnson',
      category: 'chair',
      image: 'src=../../images/chair/johnson.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'pavel-4',
      name: 'Pavel',
      category: 'chair',
      image: 'src=../../images/chair/pavel.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'vakhtbovych-5',
      name: 'Vakhtbovych',
      category: 'chair',
      image: 'src=../../images/chair/vakhtbovych.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'valeria-6',
      name: 'Valeria',
      category: 'chair',
      image: 'src=../../images/chair/valeria.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'zvir-7',
      name: 'Zvir',
      category: 'chair',
      image: 'src=../../images/chair/zvir.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'zvolskiy-8',
      name: 'Zvolskiy',
      category: 'chair',
      image: 'src=../../images/chair/zvolskiy.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'dorweiler-9',
      name: 'Dorweiler',
      category: 'chair',
      image: 'src=../../images/chair/dorweiler.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'kobzar-10',
      name: 'Kobzar',
      category: 'chair',
      image: 'src=../../images/chair/kobzar.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'lach-11',
      name: 'Lach',
      category: 'chair',
      image: 'src=../../images/chair/lach.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'lysenko-12',
      name: 'Lysenko',
      category: 'chair',
      image: 'src=../../images/chair/lysenko.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'axo-1',
      name: 'Axo',
      category: 'sofa',
      image: 'src=../../images/sofa/axo.jpg',
      price: 30,
      stars: 2,
      promo: '',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'claire-2',
      name: 'Claire',
      category: 'sofa',
      image: 'src=../../images/sofa/claire.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'karoo-3',
      name: 'Karoo',
      category: 'sofa',
      image: 'src=../../images/sofa/karoo.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'kayo-4',
      name: 'Kayo',
      category: 'sofa',
      image: 'src=../../images/sofa/kayo.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'mad-5',
      name: 'Mad',
      category: 'sofa',
      image: 'src=../../images/sofa/mad.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'max-6',
      name: 'Max',
      category: 'sofa',
      image: 'src=../../images/sofa/max.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'maxis-7',
      name: 'Maxis',
      category: 'sofa',
      image: 'src=../../images/sofa/maxis.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'metz-8',
      name: 'Metz',
      category: 'sofa',
      image: 'src=../../images/sofa/metz.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'oxford-9',
      name: 'Oxford',
      category: 'sofa',
      image: 'src=../../images/sofa/oxford.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'pechy-10',
      name: 'Pechy',
      category: 'sofa',
      image: 'src=../../images/sofa/pechy.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'piacquadio-11',
      name: 'Piacquadio',
      category: 'sofa',
      image: 'src=../../images/sofa/piacquadio.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'vakht-12',
      name: 'Vakht',
      category: 'sofa',
      image: 'src=../../images/sofa/vakht.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'akyurt-1',
      name: 'Akyurt',
      category: 'table',
      image: 'src=../../images/table/akyurt.jpg',
      price: 30,
      stars: 2,
      promo: '',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'arrow-2',
      name: 'Arrow',
      category: 'table',
      image: 'src=../../images/table/arrow.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'ayad-3',
      name: 'Ayad',
      category: 'table',
      image: 'src=../../images/table/ayad.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'dids-4',
      name: 'Dids',
      category: 'table',
      image: 'src=../../images/table/dids.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'henderson-5',
      name: 'Henderson',
      category: 'table',
      image: 'src=../../images/table/henderson.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'juan-6',
      name: 'Juan',
      category: 'table',
      image: 'src=../../images/table/juan.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'marks-7',
      name: 'Marks',
      category: 'table',
      image: 'src=../../images/table/marks.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'moon-8',
      name: 'Moon',
      category: 'table',
      image: 'src=../../images/table/moon.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'natan-9',
      name: 'Natan',
      category: 'table',
      image: 'src=../../images/table/natan.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'pexels-10',
      name: 'Pexels',
      category: 'table',
      image: 'src=../../images/table/pexels.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
    },
    {
      id: 'scream-11',
      name: 'Scream',
      category: 'table',
      image: 'src=../../images/table/scream.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'sun-12',
      name: 'Sun',
      category: 'table',
      image: 'src=../../images/table/sun.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'batt-1',
      name: 'Batt',
      category: 'dining',
      image: 'src=../../images/dining/batt.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'citizen-2',
      name: 'Citizen',
      category: 'dining',
      image: 'src=../../images/dining/citizen.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'houzlook-3',
      name: 'Houzlook',
      category: 'dining',
      image: 'src=../../images/dining/houzlook.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'inter-4',
      name: 'Inter',
      category: 'dining',
      image: 'src=../../images/dining/inter.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'leoshi-5',
      name: 'Leoshi',
      category: 'dining',
      image: 'src=../../images/dining/leoshi.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'malossi-6',
      name: 'Malossi',
      category: 'dining',
      image: 'src=../../images/dining/malossi.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'petiss-7',
      name: 'Petiss',
      category: 'dining',
      image: 'src=../../images/dining/petiss.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'satya-8',
      name: 'Satya',
      category: 'dining',
      image: 'src=../../images/dining/satya.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'scott-9',
      name: 'Scott',
      category: 'dining',
      image: 'src=../../images/dining/scott.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'shevtsova-10',
      name: 'Shevtsova',
      category: 'dining',
      image: 'src=../../images/dining/shevtsova.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'twin-11',
      name: 'Twin',
      category: 'dining',
      image: 'src=../../images/dining/twin.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
    },
    {
      id: 'yang-12',
      name: 'Yang',
      category: 'dining',
      image: 'src=../../images/dining/yang.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorites: false,
      myStars: 0,
      compareActive: false,
      isFavourite: false,
      isCompare: false,
      isFavourite: false,
      isCompare: false,
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
  brands: [
    {
      id: 'brand1',
      name: 'Brand 1',
      image: 'src=../../images/brands/brand1.jpg',
    },
    {
      id: 'brand2',
      name: 'Brand 2',
      image: 'src=../../images/brands/brand2.jpg',
    },
    {
      id: 'brand3',
      name: 'Brand 3',
      image: 'src=../../images/brands/brand3.jpg',
    },
    {
      id: 'brand4',
      name: 'Brand 4',
      image: 'src=../../images/brands/brand4.jpg',
    },
    {
      id: 'brand5',
      name: 'Brand 5',
      image: 'src=../../images/brands/brand5.jpg',
    },
    {
      id: 'brand6',
      name: 'Brand 6',
      image: 'src=../../images/brands/brand6.jpg',
    },
  ],
  posts: [
    {
      id: 'post1',
      date: '15 JAN 2016',
      commentsCount: 4,
      title: 'Duis erat quis pharetra',
      content:
        'Sed scelerisque turpis eu convallis dignissim. Phasellus dapibus sapien sed erat imperdiet, sit amet tincidunt ligula porta. Aenean quis dictum quam. Maecenas sed est eget enim convallis semper sit amet in erat. Mauris sagittis.',
      image: '',
    },
    {
      id: 'post2',
      date: '15 JAN 2016',
      commentsCount: 4,
      title: 'Duis erat quis pharetra',
      content:
        'Sed scelerisque turpis eu convallis dignissim. Phasellus dapibus sapien sed erat imperdiet, sit amet tincidunt ligula porta. Aenean quis dictum quam. Maecenas sed est eget enim convallis semper sit amet in erat. Mauris sagittis.',
      image: '',
    },
    {
      id: 'post3',
      date: '15 JAN 2016',
      commentsCount: 4,
      title: 'Duis erat quis pharetra',
      content:
        'Sed scelerisque turpis eu convallis dignissim. Phasellus dapibus sapien sed erat imperdiet, sit amet tincidunt ligula porta. Aenean quis dictum quam. Maecenas sed est eget enim convallis semper sit amet in erat. Mauris sagittis risus.',
      image: '',
    },
  ],
  mode: ' ',
};

export default initialState;
