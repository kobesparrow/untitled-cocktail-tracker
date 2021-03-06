import Mando from '../images/mando-helmet.png';
import Grogu from '../images/grogu.png';

const userData = [
  { userName: 'Din Djarin',
    avatar: `${Mando}`,
    cocktails: [
      { cocktailName: 'French 75',
      rating: 4,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'April 30, 1984',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      },
      { cocktailName: 'Paper Plane',
      rating: 5,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'May 27, 2016',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      },
      { cocktailName: 'Tequila Sunrise',
      rating: 3,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'July 25, 2019',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      }
    ]},
  { userName: 'Grogu',
    avatar: `${Grogu}`,
    cocktails: [
      { cocktailName: 'Aviation',
      rating: 5,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'January 1, 2021',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      },
      { cocktailName: 'French 75',
      rating: 4,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'December 25, 2021',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      },
      { cocktailName: 'Sea Breeze',
      rating: 2,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'October 31, 2021',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      },
      { cocktailName: 'Bee\'s Knees',
      rating: 3,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'May 5, 2021',
        rating: 4,
        note: 'this is a cocktail note'
      }]
      }
    ]}
  ]

export default userData;