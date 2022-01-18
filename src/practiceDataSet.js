const cocktailData = [
  { id: 1,
    cocktailName: 'Aviation',
    category: 'unforgettable',
    ingredients: [
      { ingredientName: 'gin', amount: '2 ounces'},
      { ingredientName: 'maraschino liqueur', amount: '1/2 ounce'},
      { ingredientName: 'creme de violette', amount: '1/4 ounce'},
      { ingredientName: 'lemon juice', amount: '3/4 ounce'},
    ],
    garnish: ['brandied cherry'],
    instructions: ['shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'coup',
    averageRating: 0 },
  { id: 2,
    cocktailName: 'Negroni',
    category: 'unforgettable',
    ingredients: [
      { ingredientName: 'gin', amount: '1 ounce'},
      { ingredientName: 'campari', amount: '1 ounce'},
      { ingredientName: 'sweet vermouth', amount: '1 ounce'}
    ],
    garnish: ['orange peel'],
    instructions: ['shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'rocks',
    averageRating: 0 },
  { id: 3,
    cocktailName: 'Sidecar',
    category: 'unforgettable',
    ingredients: [
      { ingredientName: 'cognac', amount: '1 1/2 ounces'},
      { ingredientName: 'orange liqueur', amount: '3/4 ounce'},
      { ingredientName: 'lemon juice', amount: '3/4 ounce'}
    ],
    garnish: ['orange twist', 'sugar rim'],
    instructions: ['coat rim with sugar and set aside (optional)', 'shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'coup',
    averageRating: 0 },
  { id: 4,
    cocktailName: 'French 75',
    category: 'contemporary classic',
    ingredients: [
      { ingredientName: 'gin', amount: '1 ounce'},
      { ingredientName: 'lemon juice', amount: '1/2 ounce'},
      { ingredientName: 'simple syrup', amount: '1/2 ounce'},
      { ingredientName: 'bubbles', amount: '3 ounces'}
    ],
    garnish: ['lemon twist'],
    instructions: ['coat rim with sugar and set aside (optional)', 'shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'flute',
    averageRating: 0 },
  { id: 5,
    cocktailName: 'Sea Breze',
    category: 'contemporary classic',
    ingredients: [
      { ingredientName: 'vodka', amount: '1 1/2 ounces'},
      { ingredientName: 'cranberry juice', amount: '3 ounces'},
      { ingredientName: 'grapefruit juice', amount: '1 1/2 ounces'}
    ],
    garnish: ['lime wheel'],
    instructions: ['add ingredients to glass with ice and stir', 'garnish'],
    glassware: 'highball',
    averageRating: 0 },
  { id: 6,
    cocktailName: 'Tequila Sunrise',
    category: 'contemporary classic',
    ingredients: [
      { ingredientName: 'blanco tequila', amount: '2 ounces'},
      { ingredientName: 'orange juice', amount: '4 ounces'},
      { ingredientName: 'grenadine', amount: '1/4 ounce'}
    ],
    garnish: ['orange slice', 'cherry'],
    instructions: ['add tequila then orange juice to chilled highball filled with ice', 'top with grenadine', 'garnish'],
    glassware: 'highball',
    averageRating: 0 },
  { id: 7,
    cocktailName: 'Bee\'s Knees',
    category: 'new era',
    ingredients: [
      { ingredientName: 'gin', amount: '2 ounces'},
      { ingredientName: 'lemon juice', amount: '3/4 ounce'},
      { ingredientName: 'honey syrup', amount: '1/2 ounce'}
    ],
    garnish: ['lemon twist'],
    instructions: ['shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'coupe',
    averageRating: 0 },
  { id: 8,
    cocktailName: 'Paper Plane',
    category: 'new era',
    ingredients: [
      { ingredientName: 'bourbon', amount: '3/4 ounce'},
      { ingredientName: 'Aperol', amount: '3/4 ounce'},
      { ingredientName: 'Amaro Nonino Quintessentia', amount: '3/4 ounce'},
      { ingredientName: 'lemon juice', amount: '3/4 ounce'}
    ],
    garnish: ['lemon twist'],
    instructions: ['shake ingredients with ice', 'strain into glass', 'garnish'],
    glassware: 'coupe',
    averageRating: 0 },
  { id: 9,
    cocktailName: 'Tipperary',
    category: 'new era',
    ingredients: [
      { ingredientName: 'irish whiskey', amount: '1 1/2 ounces'},
      { ingredientName: 'sweet vermouth', amount: '1 ounce'},
      { ingredientName: 'green Chartreuse', amount: '1/2 ounce'},
      { ingredientName: 'Angostura bitters', amount: '2 dashes'}
    ],
    garnish: ['orange twist'],
    instructions: ['add to mixing glass with ice and stir', 'strain into glass', 'garnish'],
    glassware: 'coupe',
    averageRating: 0 }
  ]

// const userData = [
//   {userName: 'user name',
//   cocktails: [
//     {cocktailName: 'cocktail name',
//     rating: 0,
//     notes: 'notes on cocktail',
//     dates consumed: [{
//       date: 'date',
//       //specific date consumed details - alterations, suggested alterations, etc.
//   }]}
//   ]}
// ]


export default cocktailData