const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Cuisine = require('../models/cuisine');
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');
const User = require('../models/user');
const config  = require('../config/env');

mongoose.connect(config.db['development']);

Cuisine.collection.drop();
Recipe.collection.drop();
Ingredient.collection.drop();
User.collection.drop();

// const cuisines =  [
//   {
//     'name': 'Indian',
//     'images': {
//       'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
//     }
//   },
//   {
//     'name': 'Mexican',
//     'images': {
//       'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
//     }
//   }
// ];

// const recipes = [
//
//   {
//     'name': 'lamb',
//     'instructions': [{
//       'index': '1' ,
//       'content': 'blah'
//     }],
//     'ingredients': [{
//       'measurement': '1'
//     }],
//     'images': {
//       'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
//     }
//   }
// ];

// users first
const uSunny = new User({
  'username': 'Sunny',
  'email': 'sunny@sunny.com',
  'password': 'password',
  'passwordConfirmation': 'password',
  'recipes': []
});
const uLouis = new User({
  'username': 'Louis',
  'email': 'louis@louis.com',
  'password': 'password',
  'passwordConfirmation': 'password',
  'recipes': []
});
const uDanai = new User({
  'username': 'Danai',
  'email': 'danai@danai.com',
  'password': 'password',
  'passwordConfirmation': 'password',
  'recipes': []
});
const uDavid = new User({
  'username': 'David',
  'email': 'david@david.com',
  'password': 'password',
  'passwordConfirmation': 'password',
  'recipes': []
});
// ingredients second
const iBeastBurger = new Ingredient({
  'name': 'Beast Burger',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPeanutButter = new Ingredient({
  'name': 'Peanut Butter',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iRedOnion = new Ingredient({
  'name': 'Red Onion',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSesameBun = new Ingredient({
  'name': 'Sesame Bun',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVeganBacon = new Ingredient({
  'name': 'Vegan Bacon',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBanana = new Ingredient({
  'name': 'Banana',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});const iFlour = new Ingredient({
  'name': 'Flour',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCornstarch = new Ingredient({
  'name': 'Cornstarch',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBakingPower = new Ingredient({
  'name': 'Baking Power',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSalt = new Ingredient({
  'name': 'Salt',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCarbonatedWater = new Ingredient({
  'name': 'Carbonated Water',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});


const iAvocado = new Ingredient({
  'name': 'Avocado',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iLemonJuice = new Ingredient({
  'name': 'Lemon Juice',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPineapple = new Ingredient({
  'name': 'Pineapple',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iWatermelon = new Ingredient({
  'name': 'Watermelon',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iTeriyaki = new Ingredient({
  'name': 'Salt',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iJerkSeasoning = new Ingredient({
  'name': 'Carbonated Water',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVeganWrap = new Ingredient({
  'name': 'Vegan Wraps',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iMozshreds = new Ingredient({
  'name': 'Mozzarella shreds',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iOliveOil = new Ingredient({
  'name': 'Olive Oil',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGarlic = new Ingredient({
  'name': 'Garlic',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBeyondBeef = new Ingredient({
  'name': 'Beyond Beef',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVeganPasta = new Ingredient({
  'name': 'Vegan Pasta',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});const iTomatoPaste = new Ingredient({
  'name': 'Tomato Paste',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iNutritionalYeast = new Ingredient({
  'name': 'Nutritional Yeast',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iFreshBasil = new Ingredient({
  'name': 'Fresh Basil',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSpinach = new Ingredient({
  'name': 'Spinach',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iChickenStrip = new Ingredient({
  'name': 'Chicken Strip',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});

const iBBQSauce = new Ingredient({
  'name': 'BBQ Sauce',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCilantro = new Ingredient({
  'name': 'Cilantro',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iJalapeno = new Ingredient({
  'name': 'Jalapeno',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVCheese = new Ingredient({
  'name': 'Vegan Cheese',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVPizzaBase= new Ingredient({
  'name': 'Vegan Pizza Base',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCornmeal = new Ingredient({
  'name': 'Cornmeal',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});});const iScallion = new Ingredient({
  'name': 'Scallion',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBroccoli = new Ingredient({
  'name': 'Broccoli',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCauliflower = new Ingredient({
  'name': 'Cauliflower',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iShallot = new Ingredient({
  'name': 'Shallot',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGarlic = new Ingredient({
  'name': 'Garlic',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iLemongrass = new Ingredient({
  'name': 'Lemongrass',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGinger = new Ingredient({
  'name': 'Ginger',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCoconutMilk = new Ingredient({
  'name': 'Coconut Milk',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSoySauce = new Ingredient({
  'name': 'Soy Sauce',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iLimeJuice= new Ingredient({
  'name': 'Lime Juice',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSpaghetti = new Ingredient({
  'name': 'Spaghetti',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPepper = new Ingredient({
  'name': 'Ground Pepper',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iZucchini = new Ingredient({
  'name': 'Zucchini',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPeanut = new Ingredient({
  'name': 'Peanut',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGreenOnion = new Ingredient({
  'name': 'Green Onion',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iKungPaoSauce= new Ingredient({
  'name': 'Kung Pao Sauce',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVegetableStock = new Ingredient({
  'name': 'Vegetable Stock',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iDrySherry = new Ingredient({
  'name': 'Dry Sherry',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iChilliPaste = new Ingredient({
  'name': 'Chilli Paste',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSesameOil = new Ingredient({
  'name': 'Sesame Oil',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iVinegar = new Ingredient({
  'name': 'Vinegar',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iChilliPowder= new Ingredient({
  'name': 'Chilli Powder',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iDryParsley = new Ingredient({
  'name': 'Dry Parsley',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGarlicPowder = new Ingredient({
  'name': 'GarlicPowder',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iOregano = new Ingredient({
  'name': 'Oregano',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGroundCumin = new Ingredient({
  'name': 'Ground Cumin',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iRedEnchiladaSauce = new Ingredient({
  'name': 'Red Enchilada Sauce',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBeyondChicken = new Ingredient({
  'name': 'Beyond Chicken',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iTomato = new Ingredient({
  'name': 'Tomato',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBlackBean = new Ingredient({
  'name': 'Black Bean',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iCorn = new Ingredient({
  'name': 'Corn',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iGreenChilli = new Ingredient({
  'name': 'Green Chilli',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iBellPepper = new Ingredient({
  'name': 'Bell Pepper',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iChaiSeed = new Ingredient({
  'name': 'Chai Seed',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iRawCashews = new Ingredient({
  'name': 'Raw Cashews',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iOnionPowder = new Ingredient({
  'name': 'Onion Powder',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPaprika = new Ingredient({
  'name': 'Paprika',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iRedPepper = new Ingredient({
  'name': 'Red Pepper',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iLemon = new Ingredient({
  'name': 'Lemon',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iPumpkinPuree = new Ingredient({
  'name': 'Pumpkin Puree',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iButternutSquash = new Ingredient({
  'name': 'Butternut Squash',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iJasmineRice = new Ingredient({
  'name': 'Jasmine Rice',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iRice = new Ingredient({
  'name': 'Rice',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iAgaveNectar = new Ingredient({
  'name': 'Agave Nectar',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iMisoPaste = new Ingredient({
  'name': 'Miso Paste',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});
const iSambalOelek = new Ingredient({
  'name': 'Sambal Oelek',
  'images': {
    'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
  }
});


// #################################################// #################################################
// #################################################
// recipes third
const rElvisBurger = new Recipe(
  {
    'name': 'Peanut Butter Tempura Banana Elvis Burger',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.	Cook Beast Burger in a little bit of oil 3-4 minutes per side, cook vegan bacon if using and slice the onion.'
    },{
      'index': '1' ,
      'content': '2.	For the tempura bananas, heat up 2 inches of oil. Combine all the dry ingredients together, setting aside some dredging flour. Mix in the seltzer water and stir just until it comes together.'
    },{
      'index': '2' ,
      'content': '3.	Dredge the bananas in the extra flour and dip in tempura batter. To test if the oil is hot enough, drop a bit of batter in the oil, if small bubbles form around it and the batter starts cooking, it is ready. Fry the bananas for about 5 minutes until lightly golden, flipping halfway.'
    },{
      'index': '3' ,
      'content': '4.	1.	Put a thin layer of red onion on the bun, the vegan bacon, and spread some peanut butter on your Beast patty; top with tempura fried bananas and top bun.'
    }],
    'ingredients': [
      {
        'measurement': '2',
        'ingredient': iBeastBurger._id
      },{
        'measurement': '1 tbsp',
        'ingredient': iPeanutButter._id
      },{
        'measurement': '1',
        'ingredient': iRedOnion._id
      },{
        'measurement': '1',
        'ingredient': iSesameBun._id
      },{
        'measurement': '1',
        'ingredient': iVeganBacon._id
      },{
        'measurement': '1',
        'ingredient': iBanana._id
      },{
        'measurement': '0.75 cup',
        'ingredient': iFlour._id
      },{
        'measurement': '0.2 cup',
        'ingredient': iCornstarch._id
      },{
        'measurement': '0.5 tbsp',
        'ingredient': iBakingPower._id
      },{
        'measurement': '0.25 tbsp',
        'ingredient': iSalt._id
      },{
        'measurement': '0.66 cup',
        'ingredient': iCarbonatedWater._id
      }
    ],
    'images': {
      'small': '/images/recipes/elvisburger.jpg'
    }
  }
);
uSunny.recipes.push(rElvisBurger._id);

// #################################################

const rPineapleBurger = new Recipe(
  {
    'name': 'Grilled Watermelon Pineapple Teriyaki Beast Burger',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.	For the avocado spread, mash the flesh of one avocado with lemon juice and salt.'
    },{
      'index': '1' ,
      'content': '2.	Cook the Beast Burger according to package instructions; cut the pineapple and watermelon to the size of your patty.'
    },{
      'index': '2' ,
      'content': '3.	Season the pineapple with the Jerk seasoning and grill the watermelon on preheated grill until marks are etched onto the watermelon.'
    },{
      'index': '3' ,
      'content': '4.	Build your burger, bottom bun, avocado, Beast burger, teriyaki sauce, pineapple, watermelon, top bun.'
    }],
    'ingredients': [
      {
        'measurement': '1',
        'ingredient': iAvocado._id
      },{
        'measurement': '2 tsp',
        'ingredient': iLemonJuice._id
      },{
        'measurement': '1',
        'ingredient': iSalt._id
      },{
        'measurement': '1',
        'ingredient': iSesameBun._id
      },{
        'measurement': '1',
        'ingredient': iBeastBurger._id
      },{
        'measurement': '1 round',
        'ingredient': iPineapple._id
      },{
        'measurement': '1 round',
        'ingredient': iWatermelon._id
      },{
        'measurement': '0.2 cup',
        'ingredient': iTeriyaki._id
      },{
        'measurement': '0.2 cup',
        'ingredient': iJerkSeasoning._id
      }
    ],
    'images': {
      'small': '/images/recipes/tburger.jpg'
    }
  }
);
uSunny.recipes.push(rPineapleBurger._id);

// #################################################
const rLasagnaCups
 = new Recipe(
  {
    'name': 'Peanut Butter Tempura Banana Elvis Burger',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1. Preheat oven to 350 degrees.'
    },{
      'index': '1' ,
      'content': '2.	Spray a standard, 12-portion muffin tin with non-stick spray and place a wonton wrapper in each opening, pressing down to create a small cup.'
    },{
      'index': '2' ,
      'content': '3.	Sprinkle a teaspoon of mozzarella shreds into each wonton cup, and top with a second wonton wrapper, in a diamond pattern so the corners are not overlapping. Set aside'
    },{
      'index': '3' ,
      'content': '4.	In a large skillet over medium heat, sauté onions in olive oil for 3 to 5 minutes, until browned and wilted.'
    },{
      'index': '4' ,
      'content': '5. Add garlic and Beyond Beef to pan, stirring often for 3 to 5 more minutes.'
    },{
      'index': '5' ,
      'content': '6.	Add pasta sauce, tomato paste, nutritional yeast, basil and spinach. Stir over medium-low heat for 3 to 5 minutes, until ingredients are incorporated. Remove from heat.'
    },{
      'index': '6' ,
      'content': '7.	Spoon Beyond Beef mixture into each wonton cup until they are all equally full and top with more mozzarella shreds'
    },{
      'index': '7' ,
      'content': '8.	Bake at 350 degrees for 20 to 25 minutes until the wonton wrapper edges are crisp and lightly browned, and shreds are melty.'
    },{
      'index': '8' ,
      'content': '9.	Cool in the muffin pan for 10 minutes before removing, to ensure the lasagna cups hold their form.'
    }],

    'ingredients': [
      {
        'measurement': '24',
        'ingredient': iVeganWrap._id
      },{
        'measurement': '2 cup',
        'ingredient': iMozshreds._id
      },{
        'measurement': '1 tbsp',
        'ingredient': iOliveOil._id
      },{
        'measurement': '2 cloves',
        'ingredient': iGarlic._id
      },{
        'measurement': '1',
        'ingredient': iBeyondBeef._id
      },{
        'measurement': '1.5 cup',
        'ingredient': iVeganPasta._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iTomatoPaste._id
      },{
        'measurement': '1 tbs',
        'ingredient': iNutritionalYeast._id
      },{
        'measurement': '1 tbs',
        'ingredient': iFreshBasil._id
      },{
        'measurement': '1 cup',
        'ingredient': iSpinach._id
      }],
    'images': {
      'small': '/images/recipes/01lasgcups.jpg'
    }
  }
);
uSunny.recipes.push(rLasagnaCups._id);

// #################################################
const rChickenPizza = new Recipe(
  {
    'name': 'BBQ Beyond Chicken Pizza',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.	Shred Beyond Meat chicken strips with a fork into pieces.'
    },{
      'index': '1' ,
      'content': '2.	Mix with BBQ sauce, cilantro and jalapeño and allow to marinate several hours or overnight.'
    },{
      'index': '2' ,
      'content': '3.	Roll out pizza crust and dust bottom with cornmeal, so you can move the pizza later.'
    },{
      'index': '3' ,
      'content': '4.	Top with half of the cheddar style shreds.'
    },{
      'index': '4' ,
      'content': '5.	Follow with BBQ Beyond Meat.'
    },{
      'index': '5' ,
      'content': '6.	Cover with remaining cheddar shreds, scallions and a sprinkle of coconut bacon.'
    },{
      'index': '6' ,
      'content': '7.	If you are baking your pizza in an oven, preheat it to 400 and bake on a large cookie sheet or pizza stone for 10-12 minutes, until crust is baked/edges are browned, and the cheddar-shreds are melted and gooey.'
    },{
      'index': '7' ,
      'content': '8.	Cut into slices and devour'
    }],
    'ingredients': [
      {
        'measurement': '1 pack',
        'ingredient': iChickenStrip._id
      },{
        'measurement': '1 cup',
        'ingredient': iBBQSauce._id
      },{
        'measurement': '0.5 cup',
        'ingredient': iCilantro._id
      },{
        'measurement': '1',
        'ingredient': iJalapeno._id
      },{
        'measurement': '2 cup',
        'ingredient': iVCheese._id
      },{
        'measurement': '1',
        'ingredient': iVPizzaBase._id
      },{
        'measurement': '0.25 cup',
        'ingredient': iCornmeal._id
      },{
        'measurement': '0.5 cup',
        'ingredient': iScallion._id
      },{
        'measurement': '0.5 tbsp',
        'ingredient': iVeganBacon._id
  }],
    'images': {
      'small': '/images/recipes/BYMT_BBQPizza_lr.jpg'
    }
  }
);
uSunny.recipes.push(rChickenPizza._id);


// ##############################################

const rChickenGreenCurry = new Recipe(
  {
    'name': 'Beyond Chicken Green Curry',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.	Roast the vegetables with olive oil and salt and pepper in a 400° oven for 30 minutes.'
    },{
      'index': '1' ,
      'content': '2.	Make rice or quinoa to eat with the green curry.'
    },{
      'index': '2' ,
      'content': '3.	Peel and coarsely chop the shallot, garlic, lemongrass and ginger.'
    },{
      'index': '3' ,
      'content': '4.	In a food processor, pulse the aromatics with ½ jalapeno, cilantro, and coconut milk.'
    },{
      'index': '4' ,
      'content': '5.	Follow with BBQ Beyond Meat.'
    },{
      'index': '5' ,
      'content': '6.	Heat up the curry in a pot with the juice of ½ lime, and taste. Season with soy sauce.'
    },{
      'index': '6' ,
      'content': '7.	Serve poured over the roasted vegetables, Beyond Chicken and rice, garnish with a lime wedge.'
    }],
    'ingredients': [
      {
        'measurement': '1/2 a head',
        'ingredient': iBroccoli._id
      },{
        'measurement': '1/2 a head',
        'ingredient': iCauliflower._id
      },{
        'measurement': '1',
        'ingredient': iShallot._id
      },{
        'measurement': '3 cloves',
        'ingredient': iGarlic._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iLemongrass._id
      },{
        'measurement': '1 tbsp',
        'ingredient': iGinger._id
      },{
        'measurement': '1/2 of one',
        'ingredient': iJalapeno._id
      },{
        'measurement': '1 cup',
        'ingredient': iCilantro._id
      },{
        'measurement': '1 can',
        'ingredient': iCoconutMilk._id
      },{
        'measurement': '1 tsp',
        'ingredient': iSoySauce._id
      },{
        'measurement': 'As much as you need',
        'ingredient': iChickenStrip._id
      },{
        'measurement': '1 tbsp',
        'ingredient': iLimeJuice._id
      }
    ],
    'images': {
      'small': '/images/recipes/greencurryimg.jpg'
    }
  }
);
uSunny.recipes.push(rChickenGreenCurry._id);

// ############################################

const rKungPaoChickenSpaghetti = new Recipe(
  {
    'name': 'Kung Pao Chicken Spaghetti',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.	In a large pan, or wok, cook chopped red bell pepper and zucchini with 1 T. oil and garlic for about 5 minutes, then add the Beyond Chicken to the pan'
    },{
      'index': '1' ,
      'content': '2.	Cook and drain pasta'
    },{
      'index': '2' ,
      'content': '3.	Whisk together vegetable broth and cornstarch in a small bowl. Stir in the slurry with the veggies. Add soy sauce, sherry, red chili paste, sesame oil and vinegar and boil for 2 minutes until the sauce has thickened.'
    }],
    'ingredients': [
      {
        'measurement': '1lb',
        'ingredient': iSpaghetti._id
      },{
        'measurement': '2 1/2 cups',
        'ingredient': iCauliflower._id
      },{
        'measurement': '4 cloves',
        'ingredient': iGarlic._id
      },{
        'measurement': '1 Red',
        'ingredient': iPepper._id
      },{
        'measurement': '1 ',
        'ingredient': iZucchini._id
      },{
        'measurement': '1/2 cup',
        'ingredient': iPeanut._id
      },{
        'measurement': '1',
        'ingredient': iGreenOnion._id
      },{
        'measurement': '1 ',
        'ingredient': iKungPaoSauce._id
      },{
        'measurement': '1/2 cup',
        'ingredient': iVegetableStock._id
      },{
        'measurement': '2 tsp',
        'ingredient': iCornstarch._id
      },{
        'measurement': '2/3 Cup ',
        'ingredient': iSoySauce._id
      },{
        'measurement': '1/2 cup',
        'ingredient': iDrySherry._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iChilliPas.te_id
      },{
        'measurement': '1 tbsp',
        'ingredient': iSesameOil._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iVinegar._id
      }
    ],
    'images': {
      'small': '/images/recipes/kungpao1.jpg'
    }
  }
);
uSunny.recipes.push(rKungPaoChickenSpaghetti._id);

// #################################################

const rSpicyChickenEnchiladaSoup = new Recipe(
  {
    'name': 'Spicy Chicken Enchilada Soup',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1. Homemade Red Enchilada Sauce: Heat the oil over high heat & whisk in the flour. When it thickens, add the stock in increments, letting it thicken each time before adding more. When the stock is incorporated, add the spices & tomato paste & whisk to combine. Cook until it has the thickness of tomato sauce. Add water if it gets too thick. Set aside.'
    },{
      'index': '1' ,
      'content': '2.	After chopping, dicing and shredding the chicken, dump everything in either a slow cooker & leave it on high for about 5 hours OR stick it all in a large stock pot & heat until the veggies soften & the soup thickens a bit (30-60 minutes). In either case – if it gets too thick – add some water. If it is too thin – cook it down a bit more. Now – serve it up & garnish as you desire!'
    }],
    'ingredients': [
      {
        'measurement': '2 tbsp',
        'ingredient': iOliveOil._id
      },{
        'measurement': '2 tbs',
        'ingredient': iFlour._id
      },{
        'measurement': '6 oz',
        'ingredient': iTomatoPaste._id
      },{
        'measurement': '4 tbs',
        'ingredient': iChilliPowder._id
      },{
        'measurement': '1 tbs',
        'ingredient': iDryParsley._id
      },{
        'measurement': '1/2 tbsp',
        'ingredient': iGarlicPowder._id
      },{
        'measurement': '1/2 tbsp',
        'ingredient': iOregano._id
      },{
        'measurement': '1/2 tbsp',
        'ingredient': iSalt._id
      },{
        'measurement': '1/4 tbsp',
        'ingredient': iGroundCumin._id
      },{
        'measurement': '2 Cups',
        'ingredient': iVegetableStock._id
      },{
        'measurement': '2 Cups',
        'ingredient': iRedEnchiladaSauce._id
      },{
        'measurement': '12 oz',
        'ingredient': iBeyondChicken._id
      },{
        'measurement': '14 oz',
        'ingredient': iTomato._id
      },{
        'measurement': '2 cans',
        'ingredient': iBlackBeans._id
      },{
        'measurement': '10 oz',
        'ingredient': iCorn._id
      },{
        'measurement': '1 can',
        'ingredient': iGreenChilli._id
      },{
        'measurement': '2 Cups',
        'ingredient': iVegetableStock._id
      },{
        'measurement': '2 cloves',
        'ingredient': iGarlic._id
      },{
        'measurement': '1',
        'ingredient': iRedOnion._id
      },{
        'measurement': '1',
        'ingredient': iBellPepper._id
      },{
        'measurement': '2',
        'ingredient': iJalapeno._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iChiaSeed._id
      }
    ],
    'images': {
      'small': '/images/recipes/mex soup.jpg'
    }
  }
);
uSunny.recipes.push(rSpicyChickenEnchiladaSoup._id);

// #################################################

const rGreenChileNachoCheeseSauce = new Recipe(
  {
    'name': 'Green Chile Nacho Cheese Sauce ',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1.  1 cup raw cashews 1/2 cup nutritional yeast 1 teaspoon garlic powder 1 teaspoon onion powder 1 tablespoon paprika 1/4 cup roasted red bell pepper 1 whole roasted green chili 1 lemon, juiced'
    },{
      'index': '1' ,
      'content': '2.	Pour about 2 cups of very hot water over the cashews.'
    },{
      'index': '2' ,
      'content': '3.	Let sit for about 15 to 20 minutes'
    },{
      'index': '3' ,
      'content': '4.	1.	Remove cashews from water.'
    },{
      'index': '5' ,
      'content': '6.	Place the soaked cashews, 1/2 to 3/4 cup of fresh water, and remaining ingredients in a blender.'
    },{
      'index': '7' ,
      'content': '8.	Blend on high till very smooth. Check for consistency.'
    },{
      'index': '8' ,
      'content': '9.	If too thick, add more water.'
    },{
      'index': '9' ,
      'content': '10.	To assemble, you want everything to be warm so layer warm tortilla chips with sautéed Beyond Meat crumbles, hot white beans, chopped tomato and avocado.'
    },{
      'index': '10' ,
      'content': '11.	Drizzle warm nacho cheese sauce between the different layers and top with some fresh chopped cilantro and more nacho cheese.'
    }],
    'ingredients': [
      {
        'measurement': '1 Cup',
        'ingredient': iRawCashews._id
      },{
        'measurement': '1/2 Cup',
        'ingredient': iNutritionalYeast._id
      },{
        'measurement': '1 tbs',
        'ingredient': iGarlicPowder._id
      },{
        'measurement': '1 tbs',
        'ingredient': iOnionPowder._id
      },{
        'measurement': '1 tbs',
        'ingredient': iPaprika._id
      },{
        'measurement': '1/4 Cup',
        'ingredient': iRedPepper._id
      },{
        'measurement': '1',
        'ingredient': iGreenChilli._id
      },{
        'measurement': '1 ',
        'ingredient': iLemon._id
      }
    ],
    'images': {
      'small': '/images/recipes/nacho.jpg'
    }
  }
);
uSunny.recipes.push(rGreenChileNachoCheeseSauce ._id);

// #################################################

const rPumpkinCoconutCurry = new Recipe(
  {
    'name': 'Pumpkin Coconut Curry',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1. . Roast your veggies. Preheat the oven to 350°. Cut the tomatoes into six wedges, and the butternut squash into ½ inch cubes. Toss them with oil and roast the tomatoes and butternut squash plus other vegetables you like for 30-35 minutes'
    },{
      'index': '1' ,
      'content': '2.	Cook the Beyond Chicken with 1 tablespoon of oil for a couple minutes until heated through, about 5-7. When cool enough to handle, cut the Beyond Meat into smaller pieces.'
    },{
      'index': '2' ,
      'content': '3.	Bring the pumpkin puree, coconut milk, red curry paste, lime juice and red pepper to a boil, cook together for about 1o minutes, add up to 2 tablespoons of water to thin the curry if necessary.'
    },{
      'index': '3' ,
      'content': '4.	Assemble the bowls with steamed rice, pumpkin curry and topped with the roasted vegetables and Beyond Meat Chicken. Garnish with cilantro and serve with an extra wedge of lime.'
    },{
    }],
    'ingredients': [
      {
        'measurement': '1 1/2 Cup',
        'ingredient': iPumpkinPuree._id
      },{
        'measurement': '1 can',
        'ingredient': iCoconutMilk._id
      },{
        'measurement': '2 tbsp',
        'ingredient': iLimeJuice._id
      },{
        'measurement': '1',
        'ingredient': iRedPepper._id
      },{
        'measurement': '2 Cups',
        'ingredient': iChickenStip._id
      },{
        'measurement': '3',
        'ingredient': iTomato._id
      },{
        'measurement': '1/2',
        'ingredient': i.ButternutSquash_id
      },{
        'measurement': '1',
        'ingredient': i.JasmineRice_id
      }
    ],
    'images': {
      'small': '/images/recipes/curry.jpg'
    }
  }
);
uSunny.recipes.push(rPumpKinCoconutCurry._id);

// #################################################

const rSpicyMisoSesameChicken = new Recipe(
  {
    'name': 'Spicy Miso Sesame Chicken',
    'chef': uSunny._id,
    'instructions': [{
      'index': '0' ,
      'content': '1. Steam some rice. I used brown Basmati. I also added some broccoli to the cooking rice in the last 5 minutes.'
    },{
      'index': '1' ,
      'content': '2.	Mix the rice vinegar, agave or honey, miso paste, hot sauce, garlic & sesame oil in a bowl & pour over the chicken.'
    },{
      'index': '2' ,
      'content': '3.	I did this right in the bag the chicken came in.'
    },{
      'index': '3' ,
      'content': '4.	Marinate for an hour or more, if you can – but that isn\'t totally necessary'
    },{
      'index': '4' ,
      'content': '5.	Remove the chicken from the marinade & put the marinade in a pan & heat over high heat until it thickens – maybe 5 minutes.'
    },{
      'index': '5' ,
      'content': '6.	Meanwhile, treat a pan with cooking spray or olive oil & cook the chicken until it browns.'
    },{
      'index': '6' ,
      'content': '7.	If using real chicken – be sure to cook it through.'
    },{
      'index': '7' ,
      'content': '8.	Now – simply serve the chicken over some rice & drizzle with the glaze or add the chicken to the pan with the glaze & then put some on the rice. Your call.'
    },{
      'index': '8' ,
      'content': '9.	Garnish with scallions or cilantro or some greens. Eat it up!'
    }],
    'ingredients': [
      {
        'measurement': '9 oz',
        'ingredient': iChickenStip._id
      },{
        'measurement': '1/4 Cup',
        'ingredient': iRice._id
      },{
        'measurement': '2 tbs',
        'ingredient': iAgaveNectar._id
      },{
        'measurement': '3 tbs',
        'ingredient': iMisoPaste._id
      },{
        'measurement': '2 tbs',
        'ingredient': iSambalOelek._id
      },{
        'measurement': '4 colves',
        'ingredient': iGarlic._id
      },{
        'measurement': '2 tbs',
        'ingredient': iSesameOil._id
      }
    ],
    'images': {
      'small': '/images/recipes/indi.jpg'
    }
  }
);
uSunny.recipes.push(rSpicyMisoSesameChicken._id);

// #################################################

// const r = new Recipe(
//   {
//     'name': '',
//     'chef': uSunny._id,
//     'instructions': [{
//       'index': '0' ,
//       'content': '1. '
//     },{
//       'index': '1' ,
//       'content': '2.	'
//     },{
//       'index': '2' ,
//       'content': '3.	'
//     },{
//       'index': '3' ,
//       'content': '4.	'
//     },{
//       'index': '5' ,
//       'content': '6.	'
//     },{
//       'index': '7' ,
//       'content': '8.	'
//     },{
//       'index': '8' ,
//       'content': '9.	'
//     }],
//     'ingredients': [
//       {
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '1',
//         'ingredient': i._id
//       },{
//         'measurement': '1 ',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i_id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       }
//     ],
//     'images': {
//       'small': '/images/recipes/'
//     }
//   }
// );
// uSunny.recipes.push(r._id);

// #################################################

// const r = new Recipe(
//   {
//     'name': '',
//     'chef': uSunny._id,
//     'instructions': [{
//       'index': '0' ,
//       'content': '1. '
//     },{
//       'index': '1' ,
//       'content': '2.	'
//     },{
//       'index': '2' ,
//       'content': '3.	'
//     },{
//       'index': '3' ,
//       'content': '4.	'
//     },{
//       'index': '5' ,
//       'content': '6.	'
//     },{
//       'index': '7' ,
//       'content': '8.	'
//     },{
//       'index': '8' ,
//       'content': '9.	'
//     }],
//     'ingredients': [
//       {
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '1',
//         'ingredient': i._id
//       },{
//         'measurement': '1 ',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i_id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       },{
//         'measurement': '',
//         'ingredient': i._id
//       }
//     ],
//     'images': {
//       'small': '/images/recipes/'
//     }
//   }
// );
// uSunny.recipes.push(r._id);

// const users = [
//   {
//     'username': 'Sunny',
//     'email': 'sunny@sunny.com',
//     'password': 'password',
//     'passwordConfirmation': 'password'
//   }
// ];



//
// cuisines.forEach(cuisine => {
//   Cuisine
//     .create(cuisine, (err, cuisine) => {
//       console.log(`${cuisine.name} was saved`);
//     });
// });
//
// recipes.forEach(recipe => {
//   Recipe
//     .create(recipe, (err, recipe) => {
//       console.log(`${recipe.name} was saved`);
//     });
// });
//
// ingredients.forEach(ingredient => {
//   Ingredient
//     .create(ingredient, (err, ingredient) => {
//       console.log(`${ingredient.name} was saved`);
//     });
// });

// users.forEach(user => {
//   User
//     .create(user, (err, user) => {
//       console.log(`${user.username} was saved`);
//     });
// });

User
  .create([
    uSunny,
    uLouis,
    uDanai,
    uDavid
  ])
  .then(users => {
    console.log(`${users.length} users created`);

    return Cuisine
      .create([
        {
          'name': 'English',
          'recipes': [rElvisBurger._id, rPineapleBurger._id],
          'images': {
            'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
          }
        },{
          'name': 'Italian',
          'recipes': [rLasagnaCups._id, rChickenPizza._id],
          'images': {
            'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
          }
        },{
          'name': 'Oriential',
          'recipes': [rChickenGreenCurry._id, rKungPaoChickenSpaghetti._id],
          'images': {
            'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
          }
        },{
          'name': 'Mexican',
          'recipes': [rSpicyChickenEnchiladaSoup._id, rGreenChileNachoCheeseSauce._id],
          'images': {
            'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
          }
        },{
          'name': 'Indian',
          'recipes': [rPumpkinCoconutCurry._id, rSpicyMisoSesameChicken._id],
          'images': {
            'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
          }
        // },{
        //   'name': 'Nibbles',
        //   'recipes': [rTapas._id, rLamb._id],
        //   'images': {
        //     'small': 'http://www.kilnford.co.uk/wp-content/uploads/2017/03/Kilnford-indian-lamb-curry-5.jpg'
        //   }
        }
      ]);
  })
  .then(cuisines => {
    console.log(`${cuisines.length} cuisines created`);

    return Ingredient
      .create([
        iPepper,
        iOnion,
        iTomato,
        iCarrot,
        iSeitan,
        iTofu
      ]);
  })
  .then(ingredients => {
    console.log(`${ingredients.length} ingredients created`);

    return Recipe
      .create([
        rLamb,
        rTapas
      ]);
  })
  .then(recipes => {
    console.log(`${recipes.length} recipes created`);
  })
  .finally(() => {
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
