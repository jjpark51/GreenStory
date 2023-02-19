import Apple from '../assets/img/apple.png'
import AppleRec from '../assets/img/apple_compote.jpg'
import Banana from '../assets/img/banana.png'
import BananaRec from '../assets/img/banana_milk.jpg'
import AppleJuice from '../assets/img/apple-juice.jpg'
import AppleSauce from '../assets/img/apple-sauce.jpg'
import BananaBread from '../assets/img/banana-bread.jpg'


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
            "<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/4RAwv500cDc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
			"<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/1mXXwqvihVs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        ],
        filter: "test"


        
    },
    {
        name: "Banana",
        color: "yellow",
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
            img: BananaRec,
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
            "<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/Ob8eL4mMOys\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
			"<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/n598U_SOUkc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        ],
        filter: "tests"
    },
];