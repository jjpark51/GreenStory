import Apple from '../assets/img/apple.png'
import AppleRec from '../assets/img/apple_compote.jpg'
import Banana from '../assets/img/banana.png'
import BananaMilk from '../assets/img/banana_milk.jpg'
import AppleJuice from '../assets/img/apple-juice.jpg'
import AppleSauce from '../assets/img/apple-sauce.jpg'
import BananaBread from '../assets/img/banana-bread.jpg'
import Asparagus from '../assets/img/asparagus.png'
import Aspabutter from '../assets/img/asparagus_butter.jpg'
import AvoToast from '../assets/img/avocado_toast.jpg'
import Avocado from '../assets/img/avocado.png'
import BeanSprouts from '../assets/img/bean_sprouts.png'
import BeetApple from '../assets/img/beet_apple_latte.jpg'
import Beet from '../assets/img/beet.png'
import BrocoliJuice from '../assets/img/broccoli_juice.jpeg'
import Broccoli from '../assets/img/brocolli.png'
import Cabbage from '../assets/img/cabbage.png'
import Carrot from '../assets/img/carrot.png'
import CauliflowerCheese from '../assets/img/cauliflower_cheese.jpg'
import Cauliflower from '../assets/img/cauliflower.png'
import ChickenBeanSprouts from '../assets/img/chicken_beansprouts.jpg'
import CrownDaisySalad from '../assets/img/crown_daisy_salad.jpg'
import CrownDaisy from '../assets/img/crown_daisy.png'
import CucGreenTea from '../assets/img/cucumber_greentea.webp'
import Cucumber from '../assets/img/cucumber.png'
import FriedCarrots from '../assets/img/fried_carrots.jpg'
import FriedPakChoi from '../assets/img/fried_pak_choi.jpg'
import GingerFlapjacks from '../assets/img/ginger_flapjacks.jpg'
import Ginger from '../assets/img/ginger.png'
import GrapefruitSyrup from '../assets/img/grapefruit_syrup.webp'
import Grapefruit from '../assets/img/grapefruit.png'
import GreenOnionSauce from '../assets/img/green_onion_sauce.jpg'
import GreenOnion from '../assets/img/green_onion.png'
import Green from '../assets/img/green.jpg'
import KiwiJuice from '../assets/img/kiwi_juice.jpg'
import Kiwi from '../assets/img/kiwi.png'
import LettuceGreen from '../assets/img/lettuceGreen.png'
import Mandarin from '../assets/img/mandarine.png'
import PakChoi from '../assets/img/pak_choi.png'
import PepperCarrot from '../assets/img/pepper_carrot.jpg'
import Pepper from '../assets/img/pepper.png'
import PickedTurnips from '../assets/img/pickled_turnips.jpg'
import Strawberry from '../assets/img/strawberry.jpg'
import Tomato from '../assets/img/tomato.png'
import Turnip from '../assets/img/turnip.png'  


export const FruitList = [
    {
        name: "Apple",
        color: "Red",
        info: "The apple's major nutrition is Potassium and Dietary Fiber. Although there are not so many other nutrients, the reason why apples are called 'fruits that make you live long if you eat them' is because of their rich functional ingredients. In addition to the effect of suppressing digestion and absorption of fat and the effect of recovering from fatigue, polyphenols contained in apples are known to have anti-aging effects through anti-aging action.",
        season: "September ~ October",
        img: Apple,
        nutrient: ["Potassium", "Dietary Fiber"],
        pick: "Choose ones that are uniform in color and have no scars on the skin",
        effect: ["Recover from Fatigue", "Hypertension Prevention", "Diabetes Prevention", "Relieve Constipation"],
        recipe: {
            name: "Apple Compote",
            img: AppleRec,
            info: "",
            how: [
                "Wash 1 apple well, cut it into 6 pieces lengthwise with the peel on, and remove the seeds",
                "In a heat-resistant container, add 1/2 cup of white wine and 1/2 cup of water and 40g of sugar and mix well. Add an apple and 4 sliced lemons, cover and heat in the microwave for 5 minutes. Take it out of the microwave, turn it upside down, cover it again and heat it for 5 minutes.",
                "Transfer to a bowl and garnish with an appropriate amount of mint leaves. It is delicious even if you put it in the refrigerator and eat it cold."
            ]
        },
        other: [
            {
                name: "Apple Juice",
                img: AppleJuice,
                info: "Apple juice is a beverage made from the pressed juice of apples. It can be consumed as a standalone drink, or used as an ingredient in various recipes. Apple juice is often sweet and tart in flavor, and can be purchased at many grocery stores either in concentrated form or already mixed and ready to drink. It is a popular beverage, particularly among children, due to its sweet taste and the perception of it being a healthy option.",
                how: [
                    "Blender with a cup of water, sliced kiwis, 1 tablespoon of sugar."
                ]
            },
            {
                name: "Apple Sauce",
                img: AppleSauce,
                info: "A versatile condiment made by cooking apples with sugar and spices until soft and saucy.",
                how: [
                    "In a large saucepan, combine the sliced apples, water, sugar (if using), and cinnamon (if using).",
                    "Cook the mixture over medium heat, stirring occasionally, until the apples are soft and beginning to break down, about 10-15 minutes.",
                    "Use a potato masher or fork to mash the cooked apples into a smooth sauce.",
                    "If desired, continue cooking the sauce for an additional 5-10 minutes, stirring frequently, to allow it to thicken.",
                    "Let the apple sauce cool to room temperature, then transfer it to a container and store it in the refrigerator for up to 1 week."
                ]
            }
        ]
        ,
        youtube: [
           <iframe width="560" height="315" src="https://www.youtube.com/embed/1mXXwqvihVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
           <iframe width="560" height="315" src="https://www.youtube.com/embed/4RAwv500cDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        ],
        filter: "test"


        
    },
    {
        name: "Banana",
        color: "Yellow",
        img : Banana,
		info : "Bananas, which can always be purchased at an affordable price, are fruits that contain a lot of carbohydrates to compete with sweet potatoes or potatoes. The main feature of bananas is that they contain starch, glucose, fructose, and sucrose evenly in carbohydrates. In addition, it is rich in pectin, a water-soluble dietary fiber that prevents constipation or suppresses rises in blood sugar and cholesterol levels, and contains vitamin C, an essential ingredient for skin care.",
        season: "All Season",
        nutrient: ["Vitamin C","Potassium"],
        pick: "Choose one that maintains its original shape and has no scratches on the peel.",
        effect: ["Beauty Skin",
        "Prevention of Arteriosclerosis",
        "Physical Strength",
        "Improving the Intestinal environment"],
        recipe: {
            name: "Banana Milk",
            info: "Banana milk is a beverage made from blended bananas and water. It's a dairy-free, nut-free option you can use just like other types of milk. Due to its main ingredient — banana — banana milk provides a variety of nutrients and may offer health benefits.",
            img: BananaMilk,
            how: [
                "Peel 2 bananas and cut them into bite-sized pieces so you can grind them.",
                "Blender with a cup of milk and sliced bananas",
                "If you put ice in the blender, you can enjoy it as a shake.",
                "Transfer to a bowl and garnish with an appropriate amount of mint leaves. It is delicious even if you put it in the refrigerator and eat it cold."
            ]
        },
        other: [
            {
                name: "Banana Bread",
                info :" A classic and simple recipe that results in a soft, sweet and moist bread. You can add nuts, chocolate chips, or spices to make it extra tasty.",
                img: BananaBread,
                how: [
                    "Preheat your oven to 350°F (175°C). Grease a 9x5 inch loaf pan.",
                    "In a large mixing bowl, combine the mashed bananas, melted butter, baking soda, and salt.",
                    "Stir in the sugar, beaten egg, and vanilla extract.",
                    "In a separate bowl, whisk together the flour and baking powder.",
                    "Gradually add the dry ingredients to the wet ingredients, stirring until just combined.",
                    "Bake for 60-65 minutes, or until a toothpick inserted into the center of the loaf comes out clean.",
                    "Remove the banana bread from the oven and let it cool in the pan for 10 minutes. Then transfer it to a wire rack to cool completely.",
                    
                ]
            }
        ],
        youtube: [
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/Ob8eL4mMOys\" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>,
			<iframe width="100%" height="400" src="https://www.youtube.com/embed/n598U_SOUkc\" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
		],
        filter: "tests"
    },
    {
        name: 'Kiwi',
        color: 'Green',
        info: 'Kiwi is a fruit rich in vitamin C. Its vitamin C is higher than that of lemons, and eating one can provide almost a daily requirement. It contains not only vitamin C, but also vitamin E and polyphenols, so it has a strong antioxidant effect. It is also attractive that it is rich in potassium, which helps prevent high blood pressure, and dietary fiber, which suppresses the rise of blood sugar levels.',
        season: ['All year round'],
        img: Kiwi,
        nutrient: ['Vitamin E, Vitamin C', 'Potassium'],
        pick: 'Choose one with dense hairs on the surface of the shell.',
        effect: ['Beauty Skin',
                'Hypertension Prevention',
                'Prevention of Arteriosclerosis',
                'Stress Relief'],
        recipe: {name: 'Kiwi Juice',
                img: KiwiJuice,
                info: '',
        how: ['Peel 2 kiwi and cut them into bite-sized pieces so you can grind them.',
            'Blender with a cup of water, sliced kiwis, 1 tablespoon of sugar.',
            'If you put ice in the blender, you can enjoy it as a shake.']},
        other: [{name: 'Kiwi Smoothie',
                img: '',
                info: '',
                how: ['We slice the kiwi into small bits and then place them inside a cup. We then go on to poor milk into the cup and add ice. Fin.']}],
        youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/0RvXsbkSGtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/MkF3Zu6-5gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
    {
                        name: 'Grapefruit',
                        color: 'pinkish-red',
                        info: "Grapefruit is rich in vitamin C, which improves immunity, prevents aging, and helps skin beauty. Grapefruit's unique bitter taste is due to a component called naringin, which is a type of polyphenol, and is known to have an antioxidant effect as well as a neutral fat decomposition function. In addition, it activates the sympathetic nervous system, refreshes the mood, and has the effect of increasing metabolism.",
                        season: [12, 4],
                        img: Grapefruit,
                        nutrient: ['Vitamin C', 'Potassium'],
                        pick: 'Choose ones that are uniform in color and have no scars on the peel.',
                        effect: ['Beauty Skin',
   'Anti Aging',
   'Obesity Prevention',
   'Recover from Fatigue'],
                        recipe: {name: 'Grapefruit Syrup',img: GrapefruitSyrup,
   info: '',
   how: ['Peel 3 Grapefruit and cut them into bite-sized pieces so you can put into bottle.',
    'Pour grapefruit and sugar alternately into the bottle.',
    'Let it mature for about a week and eat it with soda.']},
  other: [],
  youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/43FQI0BWPWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
   <iframe width="100%" height="400" src="https://www.youtube.com/embed/8ksLJ9mf-TE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]
},
{
    name: 'Mandarine',
    color: 'Orange',
    info: 'Tangerine is a representative fruit of citrus, rich in beta-carotene and vitamin C. Beta-carotene is about twice that of tomatoes, and vitamin C is enough to meet your daily needs by eating three tangerines. It also contains a lot of citric acid, so it is effective in relieving fatigue and preventing colds. In addition, beta-cryptoxanthin contained in tangerines is known to be effective in preventing osteoporosis and lifestyle-related diseases.',
    season : [11, 3],
    img: Mandarin,
    nutrient: ['Beta carotene', 'potassium'],
    pick: 'Choose ones with a dark, vivid orange color and a glossy finish.',
    effect: ['Beauty Skin',
   'Cold Prevention',
   'Recover from Fatigue',
   'Osteoporosis Prevention'],
    recipe: {name: 'Mandarine Syrup',
    img: '',
    info: '',
    how: ['Peel 3 mandarine and cut them into bite-sized pieces so you can put into bottle.',
    'Pour mandarine and sugar alternately into the bottle.',
    'Let it mature for about a week and eat it with soda.']},
    other: [{name: 'asdf', img: '', info: '', how: ['asdf']},
   {
    name: 'asdf', img: '', info: '', how: ['asdf']}],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/57RB3MakIX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
   <iframe width="100%" height="400" src="https://www.youtube.com/embed/-Re4ZtqoFdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]
},
{
   name: 'Beet',
   color: 'Red',
   info: 'The origin of beet is Europe, and it has been known as a medicinal plant since the 2nd and 3rd centuries. The vivid color of beets is due to pigment components called betacyanin and bexanthin, which are types of polyphenols. Both of these pigments have strong anti-oxidant action to remove active oxygen, prevent aging, or prevent cells from becoming cancer cells.',
   season: [6, 7],
   img: Beet,
   nutrient: ['Folic acid', 'Potassium'],
   pick: 'Choose those that have a smooth surface and a beautiful round shape.',
   effect: ['Beauty Skin',
    'Hypertension Prevention',
    'Prevention of Arteriosclerosis',
    'Edema Relief'],
   recipe: {name: 'Beet Apple Latte',
    img: BeetApple,
    info: '',
    how: ['1/3 of the beets are peeled and shredded. 1/2 of the apples, stems removed, peeled and shredded.',
     'In a bowl, add 1 tablespoon of lemon juice and olive oil, 1/2 teaspoon of sugar, 1/3 teaspoon of salt, and a little bit of black pepper, mix, then add shredded beets and apples and mix well again.',
     'You can keep it in an airtight container in the refrigerator for 3-4 days.']},
   other: [],
   youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/ThNKjcyco24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/1M6ZdIZAdAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
  

    {name: 'Turnip',
    color: 'White',
    info: 'Like radishes, turnips have different nutrients in their leaves and roots. The leaves are rich in beta-carotene and vitamin C, and the root contains not only dietary fiber, vitamin C, and potassium, but also amylase, an enzyme that breaks down starch like radish. In addition, there is a spicy ingredient called glucosinolate in the root, which has the function of activating the detoxification of the liver when heated and eaten.',
    season: [3, 5],
    img: Turnip,
    nutrient: ['Beta-carotene', 'Vitamin C'],
    pick: 'Choose one that has few fibrous root at the root and is elastic and shiny. If the plant has leaves, keep the roots and leaves separate so that nutrients are not taken away from the roots.',
    effect: ['Relieve Constipation',
     'Relieve Indigestion',
     'Prevention of Arteriosclerosis',
     'Osteoporosis Prevention'],
    recipe: {name: 'Pickled Turnips',
     img: PickedTurnips,
     info: '',
     how: ['Remove the leaves of 3 turnips and cut them into 4cm lengths. Wash the roots well and divide them into 8 equal half-moon shapes. Place the turnip roots and leaves in a bowl, mix with 2 teaspoons of salt and mix.',
      'Put the turnips in a ziplock bag, add 1/2 cup of water, 1 tablespoon each of soy sauce, vinegar, and sugar, and finely chop 1 red pepper. Vent the air in the ziplock bag, seal it, mix it by hand, and let it sit for 15 to 20 minutes.',
      'You can keep it for 3-4 days if you put it in the refrigerator.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/8rHrtHdxHmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/IT66AsqaE2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Crown Daisy',
    color: 'Green',
    info: 'Crown daisy, which resembles chrysanthemum leaves, contains vitamins and minerals evenly. Not only is beta-carotene more abundant than spinach, but it also contains a lot of B vitamins, which are indispensable for energy metabolism of carbohydrates, fats and proteins. In addition, perylaldehyde, a component that gives off the unique scent of crown daisy, improves digestion and removes phlegm, which is effective in soothing coughs.',
    season: [11, 3],
    img: CrownDaisy,
    nutrient: ['Beta-carotene', 'Vitamin E'],
    pick: 'Choose those with thick, dark green leaves that grow from the bottom of the stem.',
    effect: ['Beauty Skin',
     'Cold Prevention',
     'Increase Appetite',
     'Promote Digestion'],
    recipe: {name: 'Crown Daisy Salad',
     img: CrownDaisySalad,
     info: '',
     how: ['For 1 layer of crown daisy, use the tender leaf part. Cut the 10cm long green onion in half and shred it. Tear 1 sheet of toasted seaweed into small pieces with your hands.',
      'Chop crown daisy, green onion, and seaweed into a bowl, and sprinkle with a dressing of 2 teaspoons each of soy sauce, vinegar, and salad oil and 1/2 teaspoon of sugar.']},
    other: [{name: 'new_recipe',
      img: '',
      info: '',
      how: ['we make ~~~~']}],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/EtLNZkT6qE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/Tg2ZWLEuWm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Green Onion',
    color: 'Green',
    info: 'Green onion can be largely divided into two types: root green onion with many white parts and leaf onion with green overall. Root green onions, which are classified as white vegetables, are characterized by different nutrients in the white and green parts, like radishes and turnips. The white part contains vitamin C, and the green part, which is classified as green and yellow vegetables, contains beta-carotene, vitamin K, vitamin B group, calcium, and iron.',
    season: [11, 2],
    img: GreenOnion,
    nutrient: ['Vitamin C', 'Potassium'],
    pick: 'The cut section is fresh. Choose ones that have vivid green parts and elastic white parts.',
    effect: ['Promote Blood Circulation',
     'Hypertension Prevention',
     'Recover from Fatigue',
     'Stomach ulcer Prevention'],
    recipe: {name: 'Steamed Green Onion and Mustard Soybean Paste',
     img: '',
     info: '',
     how: ['Cut 1 strip of green onion into 5cm lengths.',
      'Arrange the green onions side by side on a heat-resistant dish, sprinkle with 1 tablespoon of water, cover with plastic wrap, and heat in the microwave for 2 minutes.',
      'Put the green onion in a bowl and pour the sauce made by mixing 1 tablespoon each of soybean paste and vinegar, 1 teaspoon sugar, and 1/2 teaspoon light mustard.']},
    other: [{name: 'Pak Choi Salad',
      img:  '',
      info: '',
      how: ['Chop it up into small pieces and add some other vegetables']}],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/-p_5xjsxESg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/dIIVrMO_fEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Pak Choi',
    color: 'Green',
    info: 'Pak choi is a representative vegetable in China and contains vitamins and minerals evenly. Among vitamins, beta-carotene, which protects the body from active oxygen that causes aging, is rich in calcium, among minerals. Calcium is a nutrient that is effective in preventing osteoporosis, so it is a vegetable that I especially want to recommend to menopausal women who need to pay attention to bone health.',
    season: [9, 1],
    img: PakChoi,
    nutrient: ['Vitamin K', 'Beta-carotene'],
    pick: 'Choose those with thick and large leaves that are firm to the end and have strong roots.',
    effect: ['Anemia Prevention',
     'Beauty Skin',
     'Osteoporosis Prevention',
     'Hypertension Prevention'],
    recipe: {name: 'Fried Pak Choi',
     img: FriedPakChoi,
     info: '',
     how: ['After cutting the root of 1 bok choy, cut it into bite-size pieces.',
      'Fry in a frying pan with minced garlic, beef and oyster sauce',
      'You can also enjoy it deliciously by stir-frying it with seafood or pork instead of beef.']},
    other: [{name: 'aaaa', img: '', info: '', how: ['aaaa']},
     {name: 'new_recipe', img: '', info: '', how: ['new_recipe']}],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/lh1qsGDFLhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/ANisqQXUR7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Tomato',
    color: 'Red',
    info: 'Tomato is a green-yellow vegetable rich in beta-carotene and vitamin C. Among minerals, it contains potassium and selenium, which decomposes hydrogen peroxide, which is the cause of cancer and aging. Potassium has the function of suppressing the increase in blood pressure, so it is one of the vegetables that are good for people with high blood pressure. One of the charms of tomatoes is that if you eat one tomato, you can eat nearly half of the recommended daily vegetable intake of 350g.',
    season: [6, 9],
    img: Tomato,
    nutrient: ['Vitamin C', 'Potassium'],
    pick: 'Choose ones that have elasticity and shine in the skin, are bright red in color, and have a clear sense of weight.',
    effect: ['Beauty Skin',
     'Hypertension Prevention',
     'Cancer Prevention',
     'Osteoporosis Prevention'],
    recipe: {name: 'Tomato Juice',
     img: '',
     info: '',
     how: ['Peel 2 tomato and cut them into bite-sized pieces so you can grind them.',
      'Blender with a cup of water, sliced tomato, 1 tablespoon of sugar.',
      'If you put ice in the blender, you can enjoy it as a shake.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/Wn8ox93Qhus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/IdOo9mOUlaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Carrot',
    color: 'Orange',
    info: "Carrot, the only greenish-yellow vegetable among root vegetables, contains twice as much beta-carotene as Western sweet pumpkin. Beta-carotene is an excellent food ingredient for ingesting beta-carotene. Beta-carotene is converted to vitamin A in the body and functions to maintain eye health, enhance mucosal function, and make skin healthy. Let's get enough beta-carotene through carrots.",
    season: [4, 7],
    img: Carrot,
    nutrient: ['Beta-carotene', 'Potassium'],
    pick: 'Choose those that are bright red, have elasticity, and have smooth skin without scars.',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Stir-fried Bell Pepper Carrots',
     img: PepperCarrot,
     info: '',
     how: ['Peel 1 carrot, cut it in half lengthwise and slice it horizontally',
      'Green peppers in half lengthwise, remove the top and seeds, and cut it horizontally into 1cm wide slices.',
      'Put a frying pan over medium heat, add 1 tablespoon of oil, and stir-fry bell peppers and carrots.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/imWDu1Mw6vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/JHoNi3g-Twk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Broccoli',
    color: 'Green',
    info: 'Broccoli is not only rich in vitamins and minerals, but also has various functional properties and is a vegetable with strong antioxidant ability and high nutritional density',
    season: [11, 3],
    img: Broccoli,
    nutrient: ['beta-carotine',
     'Vitamin E',
     'Vitamin K',
     'Vitamin B',
     'Folic Acid',
     'Vitamin C'],
    pick: 'The buds are not spread out and densely clustered. The color is dark green and color of the stem cross-section remains unchanged',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Broccoli Juice',
     img: BrocoliJuice,
     info: '',
     how: ['Various insects can live on broccoli leaves, so wash them well and cut them into bite-size pieces.',
      'It is somewhat bitter to eat only broccoli, so grind it in a blender with apples and bananas.',
      'If you put ice in the blender, you can enjoy it as a shake.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/OxLWJ3iZLyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/WrHDrcHihRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Asparagus',
    color: 'Green',
    info: 'Asparagus contains beta-carotene, which acts as an antioxidant, folic acid, which is effective in preenting anemia, dietary fiber, and oligosaccharide, which are indespensable for improving the intestinal environment',
    season: [5, 6],
    img: Asparagus,
    nutrient: ['beta-carotine',
     'Vitamin E',
     'Vitamin B',
     'Folic Acid',
     'Vitamin C',
     'Potassium',
     'Dietary fiber'],
    pick: 'Choose one that has a vivid green color and is elastic overall. Avoid the crumpled tips of the buds',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Asparagus with Butter',
     img: Aspabutter,
     info: '',
     how: ['Discard the tough bottoms of the spear, put butter in wide skillet over medium-high heat. Cook until the asparagus is firm-tender about 3 minutes. Add lemon juice and zest to the butter.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/b2loY0YqWn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/eAOTX1Bjfyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Avocado',
    color: 'Green',
    info: 'Avocado is not a vegetable, but it is used in cooking like vegetables because it has a deep taste and is nutritious enough to be called a butter in the forest',
    season: [1, 12],
    img: Avocado,
    nutrient: ['Vitamin E',
     'Vitamin B',
     'Folic Acid',
     'Vitamin C',
     'Potassium',
     'Dietary fiber'],
    pick: 'Choose one that is glossy and elastic on the outside. The darker the outside is, the better it is.',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Smashed avocado on toast',
     img: AvoToast,
     info: '',
     how: ['Cut the avocado in half and carefully remove its stone. Scoop out the flesh into a bowl and squeeze lemon juice then mash with a fork until desired texture. Season to taste with sea salt, black pepper and chilli flakes. Toast your bread, drizzle over the oil then pile the avocado on top']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/FMGArdg4-pY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/23tGra9KBa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Pepper',
    color: 'Green',
    info: 'Green bell peppers, commonly known as peppers, are harvested undercooked. However, it has a significantly higher nutritional value and is rich in antioxidant vitamins',
    season: [6, 9],
    img: Pepper,
    nutrient: ['beta-carotine',
     'Vitamin E',
     'Vitamin C',
     'Potassium',
     'Dietary fiber'],
    pick: 'Choose one whose skin is elastic, glossy, and whose tip is not discolored',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Pepper mixed with carrot',
     img: PepperCarrot,
     info: '',
     how: ['Take out some stored carrot slices and mix it with the pepper in a bowl. Place a wrap over the plate and microwave for two minutes. Add a bit of salt and pepper spice.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/9PjTJDa9070" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/A6t407fXp7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Cucumber',
    color: 'Green',
    info: 'Cucumber is characterized by its fresh and crunchy texture and is an essential vegetables to have on the table during the summer.',
    season: [5, 8],
    img: Cucumber,
    nutrient: ['beta-carotine', 'Vitamin C', 'Potassium'],
    pick: 'Choose one that has a clear surface and is not dark on the tip',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Cucumber green tea seasonings',
     img: CucGreenTea,
     info: '',
     how: ['Remove the cucumber tip and slice it round and thin. Add some salt. Slice the green teas into thick pieces. Add Ponzu sauce, sesame oil and Korean pepper and mix.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/zau-F0L_hrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/ApQUENQbgiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Ginger',
    color: 'White',
    info: 'Garlic is characterized by a particularly high fatigue recovery effect because it contains a substanced called alithiamine, the source of stamina. In addition, it contains Vitamin B12, which is essential for protein metabolism, so it can also keep the skin and mucous membrances healthy',
    season: [1, 12],
    img: Ginger,
    nutrient: ['Vitamin B'],
    pick: 'Pick a big, heavy and round one with a strong tip',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Ginger Flapjacks',
     img: GingerFlapjacks,
     info: '',
     how: ['Heat oven to 200X. Gently melt together the butter, sugar and syrup in a large pan. Tip in the oats, flour and coconut, and mix well. Press the mixture into the tin to flatten evenly. Bake for 30 minutes until golden and crisping. ']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/sp6x9tuDaiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/1P2vAn6hplQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Bean Sprouts',
    color: 'White',
    info: 'Although it contains a small amount of Vitamin C, which is effective in preventing infections and skin beauty, and potassium, which helps relieve edema, it is not so nutritious, but it is low in calories so it is popular as an item that adds volume to dieet foods.',
    season: [1, 12],
    img: BeanSprouts,
    nutrient: ['Dietary fiber'],
    pick: 'Choose on that have a low of roots and whose color did not turn brown.',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Chicken and Bean Sprouts',
     img: ChickenBeanSprouts,
     info: '',
     how: ['Add chicken to the bean sprouts in fry pan with heat around 200C. Stir around for 3 minutes then add the soy sauce, oyster sauce, and Shaoxing wine to give the whole dish a delicious umami flavor.']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/-cACd0cF92Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/lDVgo2A1YmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]},
   {name: 'Cauliflower',
    color: 'White',
    info: 'Cauliflower is an effective nutrient for maintaining skin health as it contains a lot of Vitamin C which helps produce the collagan that binds cells together.',
    season: [11, 3],
    img: Cauliflower,
    nutrient: ['Vitamin B',
     'Folic Acid',
     'Vitamin C',
     'Potassium',
     'Dietary fiber'],
    pick: 'Choose ones that have heavy white buds and are not discolored',
    effect: ['Eye Fatigue Improvement',
     'Eyesight Recovery',
     'Promote Digestion',
     'Increase Appetite'],
    recipe: {name: 'Cauliflower Cheese',
     img: CauliflowerCheese,
     info: '',
     how: ['Add 1 large cauliflower, broken into pieces and cook for 5 minutes. Drain the cauliflower and heat oven to 220C. Add 500ml milk, tbsp flour and 50g butter. Keep whisking fast as the butter melts and the mixture comes to the boil. Turn off the heat and pour 100g grated cheddar cheese and pour over the cauliflower. Put in oven and bake for 20 mins']},
    other: [],
    youtube: [<iframe width="100%" height="400" src="https://www.youtube.com/embed/T7bN3f70B44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/BychJBkhKp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]}
];