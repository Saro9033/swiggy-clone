import { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {

    const [selectedItems, setSelectedItem] = useState([]);

    const items = [
        {
            id: 1,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ufryw0c5fuxraq1zx1pq",
            title: "Fruit Shop on Greams Road",
            loc: "Egmore",
            rate: 4.5,
            ratings: '1K+',
            main: 'Juices, Beverages',

            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Pure Sweet Lime Extract Juice", Lprice: 190, Ldesc: "Serves 1 | Sweet lime in its purest extract form",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k8jxtn72laojmmggxmha"
                        },
                        {
                            Ltitle: "Pineapple Juice", Lprice: 145, Ldesc: "Serves 1",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/prrr5qih5y36arj55fno"
                        },
                        {
                            Ltitle: "Falooda", Lprice: 220, Ldesc: "Subject to availability.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rp3mchedgapxrblxvwqb"
                        }]
                },
                {
                    title: "Fresh Fruit Juices",
                    listItems: [
                        {
                            Ltitle: "Grape Juice", Lprice: 145, Ldesc: "serves 1",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/aguq0whl5pfy8vnioafm"
                        },
                        {
                            Ltitle: "Fresh Strawberry Juice ", Lprice: 220, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qj2kezxea6sqyiennv7o"
                        }]
                }
            ]
        },
        {
            id: 2,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oodghmivnc6bxnbrvzzw",
            title: "Sangeetha Veg Restaurant",
            loc: "Egmore",
            rate: 4.4,
            ratings: '10k+',
            main: 'North Indian, Chinese,',
            items: [
                {
                    title: "Breakfast",
                    listItems: [
                        {
                            Ltitle: "Pongal", Lprice: 90, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/68baef46eea9965d30fd5c909614216f"
                        },
                        {
                            Ltitle: "Mini Tiffen", Lprice: 150, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/68baef46eea9965d30fd5c909614216f"
                        },
                        {
                            Ltitle: "Butter Dosai", Lprice: 120, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/271ab8dc82bba93866372d77271f05c6"
                        }]
                },
                {
                    title: "Anytimes",
                    listItems: [
                        {
                            Ltitle: "Onion Rava Dosai", Lprice: 114, Ldesc: "It's a restauraunt top tasty food to eat",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c5b49f091b3786c7e2704e4ffe14519b"
                        },
                        {
                            Ltitle: "Podi Uthappam", Lprice: 102, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5813c427beb5719b3057d0b68098f7da"
                        }]
                }
            ]
        },
        {
            id: 3,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ae16f26b314c18697edc30010d4c21a5",
            title: "Nithya Amirtham Sweets",
            loc: "Kipauk",
            rate: 3.6,
            ratings: '5k+',
            main: 'Sweets & Snacks',
            items: [
                {
                    title: "Sweets",
                    listItems: [
                        {
                            Ltitle: "Malt Cream Barfi", Lprice: 74, Ldesc: "Indian milk fudge made with milk powder flavored with malt",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2bfa9ecd6d8e9bd0f4d43d30885735f0"
                        },
                        {
                            Ltitle: "Moti Pak", Lprice: 79, Ldesc: "It tastes more like laddu, but it has khoya in it which makes it rich and special.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/cd492024b483ea2fe9096f67a22452bf"
                        }]
                },
                {
                    title: "Halwa",
                    listItems: [
                        {
                            Ltitle: "Bombay Halwa", Lprice: 70, Ldesc: "A chewy Indian dessert loaded with the goodness of almonds, pistachios and other dry fruits.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2bcd014ce9aa544e42b8d9ecf2ef057b"
                        },
                        {
                            Ltitle: "Thirunelveli Halwa", Lprice: 80, Ldesc: "This King of halwas, made with wholesome wheat, sugar and ghee, which was native to South Tamil nadu is brought to you like a bite of heaven!",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/720da9ddc1d6ba48deaba9c733fd4ad2"
                        }]
                }
            ]
        },
        {
            id: 4,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
            title: "Subway",
            loc: "Poonamale Highway",
            rate: 4.3,
            ratings: '10k+',
            main: 'Saldes & Snacks',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/9217721b7b7add6e4b971afa2b769354", price: 699.05 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d8f9fce73842cdd47051fff08125a6b6", price: 439 }
            ],
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Paneer Achari", Lprice: 279, Ldesc: "Multigrain toasted Sub with chunks of paneer, achari mayo, pickled onion, capsicum, tomato and chilli mayo. Serving size - 240 g/ 589 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b33b19910a5f966e3afe9149b0326f88"
                        },
                        {
                            Ltitle: "Chilli Cheese", Lprice: 269, Ldesc: "Multigrain, 3-cheese toasted Sub with herby aloo patty, jalapeño, onion & capsicum with chilli mayo. Serving size - 284 g/ 678 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c6b1c34fc51dc5f268ea14834569fb7d"
                        }]
                },
                {
                    title: "Combo",
                    listItems: [
                        {
                            Ltitle: "Veg Sub + Side + Drink (Save upto 199)", Lprice: 349, Ldesc: "Enjoy a veg Create Your Own sub of your choice, with your favourite drink and a cookie or veg kebabs. Drink can be 'pet bottle' or 'can' as per availability.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/9217721b7b7add6e4b971afa2b769354"
                        },
                        {
                            Ltitle: "2 Veg Hotsellers + Drink (Save upto 219 Rs)", Lprice: 489, Ldesc: "Combo of two freshly made veg subs of your choice with a drink. Offers customisation. Drink can be 'pet bottle' or 'can' as per availability.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d8f9fce73842cdd47051fff08125a6b6"
                        }]
                }
            ]
        },
        {
            id: 5,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ltclyiutcsq7twivwsii",
            title: "LunchBox - Meals and Thalis",
            loc: "Purasaiwakkam",
            rate: 4.5,
            ratings: '3k+',
            main: 'Meals',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/RCL", price: 189 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CCJL", price: 271 }
            ],
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Rajma Chawal Lunchbox with Dessert", Lprice: 228, Ldesc: "This is comfort food meeting festive delicacies! Add your favourite choice of dessert with Rajma Chawal LunchBox.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a0ffaf9c11d9f61098a8b0c5a51dca85"
                        },
                        {
                            Ltitle: "Chole Kulcha Lunchbox with Dessert", Lprice: 399, Ldesc: "Pair chatpata and tangy chole kulcha with your favourite choice of dessert to dive straight into festive feels!",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f50e9396b1a36fd69992e9eec0eeb7c2"
                        }]
                }
            ]
        },
        {
            id: 6,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rp0skf7vyz27uxgwdblf",
            title: "Kwality Walls Frozen Dessert and Ice Cream Shop",
            loc: "Purasaiwakkam",
            rate: 3.6,
            ratings: '500+',
            main: 'Desserts & Ice Creams',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/SCMIC", price: 375 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/SCPGIC", price: 375 }
            ],
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Slow Churn Jamun Ice Cream 500 ML", Lprice: 375, Ldesc: "Treat yourself or your family to this creamy gourmet premium icecream made by slowly churning real Jamun fruit and fresh milk cream. Best for those who love desserts and natural fruit. Kcal/Serving: 141",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ff21f118852a8b34f0d9a1ee2d74ae39"
                        },
                        {
                            Ltitle: "Hazelnut Chocolate Ice Cream 500ml", Lprice: 325, Ldesc: "(500ml Tub) Ice Cream Crafted for Indulgence! Decadent Chocolate Ice Cream full of crunchy and roasted hazelnuts and rich chocolate.  A perfect indulgent treat. Kcal/Serving: 165",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c30a941f8010959f4901bee7b8b2317b"
                        },
                        {
                            Ltitle: "Oreo & Cream 700ml", Lprice: 299, Ldesc: "(700ml Tub) The Original Oreo Tub! Crunchy Oreo cookie chunks in rich creamy vanilla.  Kcal/Serving: 126",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/6a60ed96e444ca2cdd4cb4e9bce8e315"
                        }]
                },
                {
                    title: "Family Value Packs",
                    listItems: [
                        {
                            Ltitle: "Creamy Kulfi 700ml", Lprice: 189, Ldesc: "(700ml ) Rich & creamy desi kulfi icecream loaded with almonds and a twist of rose sauce. A perfect companion for hosting! Kcal/Serving: 133",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/77e841fe347b91093b2b59fad0bc1810"
                        },
                        {
                            Ltitle: "Blushing Strawberry 700ml", Lprice: 125, Ldesc: "(700ml) A fruit lover's delight. A scoop that tastes like fresh strawberries.  Kcal/Serving: 112",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7f117972975162d026bc695e8ee2c33a"
                        }]
                }
            ]
        }
        ,
        {
            id: 7,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
            title: "Mc Donald's",
            loc: "Anna Salai",
            rate: 4.8,
            ratings: '400+',
            main: 'Non-Veg',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/5pMcSpFChicBu", price: 425 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/McSpChW4Pc", price: 160 }
            ],
            items: [
                {
                    title: "Match Time Sharers",
                    listItems: [
                        {
                            Ltitle: "2 McAloo Tikki + 2 Fries (L)", Lprice: 319, Ldesc: "Stay home, stay safe and share a combo- 2 McAloo Tikki Burgers + 2 Fries (L)",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/06086646d484e3ca99ce6b2c72da2b8d"
                        },
                        {
                            Ltitle: "Corn & Cheese Burger +McVeggie Burger+Fries (M)", Lprice: 332, Ldesc: "Flat 15% Off on Corn & Cheese Burger +McVeggie Burger+Fries (M)",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a6fae39f2d1210d4746ffb3b5cc474f9"
                        },
                        {
                            Ltitle: "2 McVeggie Burger + Fries (L) + 2 Coke", Lprice: 387, Ldesc: "Get the best value in your meal for 2. Save big on your favourite sharing meal - 2 McVeggie Burger + Fries (L) + 2 Coke",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/09b3cb6130cfae15d486223c313fb6c6"
                        }]
                },
                {
                    title: "Burgers & Wraps",
                    listItems: [
                        {
                            Ltitle: "Piri Piri McSpicy Paneer Burger", Lprice: 200, Ldesc: "Indulge in a flavor-filled adventure with the irresistible Piri Piri McSpicy Paneer burger (no onion and no garlic)! Spicy paneer patty, Piri Piri creamy sauce and crunchy lettuce come together on sesame buns, leaving you craving for more!",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2015eaf489410a07ab006d5c94b1a0b5"
                        },
                        {
                            Ltitle: "Big Spicy Paneer Wrap", Lprice: 148, Ldesc: "Rich & filling cottage cheese patty coated in spicy crispy batter, topped with tom mayo sauce wrapped with lettuce, onions, tomatoes & cheese",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4ec1d2575e44cbb24d345eb14a9ac9bd"
                        }]
                }
            ]
        },
        {
            id: 8,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
            title: "KFC",
            loc: "Thousand Lights",
            rate: 3.2,
            ratings: '400+',
            main: 'Non-Veg',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/USB", price: 699.05 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/S4ChBM", price: 599 }
            ],
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Green Pitch Veg Meal", Lprice: 499, Ldesc: "Rule the pitch by saving 33% on Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET 475ml [Serves 2-3]",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4514e12ac3a704e229d03972378d663f"
                        },
                        {
                            Ltitle: "Green Pitch Veg Meal", Lprice: 499, Ldesc: "Rule the pitch by saving 33% on Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET 475ml [Serves 2-3]",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4514e12ac3a704e229d03972378d663f"
                        }]
                },
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Green Pitch Veg Meal", Lprice: 499, Ldesc: "Rule the pitch by saving 33% on Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET 475ml [Serves 2-3]",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4514e12ac3a704e229d03972378d663f"
                        },
                        {
                            Ltitle: "Green  Veg Meal", Lprice: 499, Ldesc: "Rule the pitch by saving 33% on Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET 475ml [Serves 2-3]",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/4514e12ac3a704e229d03972378d663f"
                        }]
                }
            ]
        },
        {
            id: 9,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327",
            title: "Big Bowl",
            loc: "Perambur",
            rate: 3.8,
            ratings: '100+',
            main: 'North Indian & Chinesh',
            topPicks: [
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/PnrBtrRcBw", price: 299.05 },
                { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/PindChRcBw", price: 259 }
            ],
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Dal Fry Rice Bowl.", Lprice: 199, Ldesc: "Serves 1 | Yellow dal tempered with garlic and jeera served with jeera rice.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/u4ymsp2brexwwetsn7aa"
                        },
                        {
                            Ltitle: "Veg Chilli Garlic Noodles Bowl.", Lprice: 209, Ldesc: "Serves 1 | Noodles tossed with carrot, capsicum & onion flavored with chilli flakes, garlic & soy, garnished with spring onion.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xfjyhe98gcsbiuezyekt"
                        }]
                },
                {
                    title: "Chinesh Bowls",
                    listItems: [
                        {
                            Ltitle: "Veg Fried Rice Bowl", Lprice: 199, Ldesc: "Serves 1 | Rice tossed with carrot, french beans & baby corn, garnished with spring onion.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kwtabo4vx9u8jor9kntd"
                        },
                        {
                            Ltitle: "Veg Schezwan Noodles Bowl", Lprice: 229, Ldesc: "Serves 1 | Mixed veggies tossed in schezwan sauce with noodles.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/epp5hlzbqrdmeml0idat"
                        }]
                }
            ]
        },
        {
            id: 10,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qxgnmm8irjp30pkuvlyc",
            title: "Light House",
            loc: "Poongavanapuram",
            rate: 4.2,
            ratings: '300+',
            main: 'Chinesh & Asian',
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Steamed Classic Veg Momo With Momo Chutney - 6 Pcs.", Lprice: 199, Ldesc: "",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/39ada007cedeaeace712ad916b2579aa"
                        },
                        {
                            Ltitle: "Veg Manchurian Bowl.", Lprice: 99, Ldesc: "serves 1",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b6afd69ad819ed61c325dc45159fc791"
                        }]
                },
                {
                    title: "Match Day Menu",
                    listItems: [
                        {
                            Ltitle: "Veg Manchurian Bowl.", Lprice: 263, Ldesc: "Serves 1 | Mix veg fried fritters, onion and capsicum tossed in classic manchurian sauce, served with choice of Rice / Noodles.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ffa8dcdc3b81acafb0466323ae21de8c"
                        },
                        {
                            Ltitle: "Chilli paneer Bowl ", Lprice: 199, Ldesc: "Serves 1 | Paneer, onion and capsicum tossed in our signature desi chilli sauce, served with choice of Rice / Noodles.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/13bcb76b43e0beb35c8c6a4b4fec7be4"
                        }]
                }
            ]
        }
        ,
        {
            id: 11,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hgkunfeb6higk3ovqynp",
            title: "Chai Waale",
            loc: "Purasawalkam",
            rate: 3.5,
            ratings: '500+',
            main: 'Beverages, Snacks',
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Manchow Soup Flask 500ml", Lprice: 149, Ldesc: "Our Manchow Soup is a flavorful and hearty soup that is perfect for those who love bold and spicy flavors. It is a popular Indo-Chinese soup that is made with a variety of vegetables, herbs, spices, and crispy noodles.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/eruobo70yjaflqnnmhqh"
                        },
                        {
                            Ltitle: "Hot And Sour Soup Flask 500ml", Lprice: 99, Ldesc: "Hot & Sour Soup is a savory and flavorful soup that is popular in Chinese cuisine. It is made with a combination of spicy and sour ingredients, creating a perfect balance of heat and tanginess.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmwdtegpsqvvanbsfpjd"
                        }]
                },
                {
                    title: "Quick Bites",
                    listItems: [
                        {
                            Ltitle: "Samosa", Lprice: 39, Ldesc: "Our Samosas are made with a crispy and flaky pastry shell that's filled with spiced vegetables. They're made with a blend of flavorful spices, such as cumin, coriander, and garam masala, to give it an irresistible aroma and taste.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nvpcb7rwlxcwv9trn4wa"
                        },
                        {
                            Ltitle: "Paneer Puff", Lprice: 49, Ldesc: "Our Paneer Puffs are a delicious and flaky pastry snack that's perfect for vegetarians or anyone who loves paneer. Made with a buttery and crispy puff pastry that's filled with a soft paneer and a blend of aromatic spices, it's a tasty and satisfying option for a quick snack",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4klbwgfewlkfi6sclsw"
                        }]
                }
            ]
        },
        {
            id: 12,
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/fd936juzix6yisz7g8p7",
            title: "DOMINOS",
            loc: "Perambur",
            rate: 4.4,
            ratings: '1k+',
            main: 'Pizzas',
            items: [
                {
                    title: "Recommended",
                    listItems: [
                        {
                            Ltitle: "Blazing Onion & Paprika", Lprice: 399, Ldesc: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/257508279a8ed217b14b01bee97ba9a1"
                        },
                        {
                            Ltitle: "Fiery Jalapeno & Paprika", Lprice: 329, Ldesc: "Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/285d47a0c466347ba3d199a33ea37831"
                        },
                        {
                            Ltitle: "Match Day Non Veg Combo @Rs.85 off", Lprice: 449, Ldesc: "Regular Pepper BBQ Chicken + Regular Chicken Sausage + Garlic Bread + Pepsi",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b2b07382e9a1c33796829dcfab95428c"
                        },
                        {
                            Ltitle: "Margherita Pizza", Lprice: 229, Ldesc: "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/39e8f7a1cb3398d997ce415cc86210db"
                        }]
                },
                {
                    title: "New Lauches",
                    listItems: [
                        {
                            Ltitle: "Blazing Chicken & Paprika", Lprice: 449, Ldesc: "Hot & spicy chicken pizza with a combination of chicken keema & red paprika toppings and a new spicy peri peri sauce.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/79fb72c49aec9dc8c5b422a3a3753693"
                        },
                        {
                            Ltitle: "Fiery Jalapeno & Paprika", Lprice: 329, Ldesc: "Spiciest veg pizza with jalapeno & red paprika toppings and a new spicy peri peri sauce.",
                            Limg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/285d47a0c466347ba3d199a33ea37831"
                        }]
                }
            ]
        }
    ]

    const [total, setTotal] = useState(0)

    function hanldeFin(BigID, smallId, id, quantity) {
        const selectedIndices = [BigID, smallId, id]
        const selectedShop = items.find(m => m.id === parseInt(selectedIndices[0]));
        if (selectedShop) {
            const selectedCategory = selectedShop.items[parseInt(selectedIndices[1])];

            if (selectedCategory) {
                const selectedListItem = selectedCategory.listItems[parseInt(selectedIndices[2])];
                setSelectedItem([...selectedItems, { selectedShop, selectedListItem, quantity }]);
            }
        }
    }

    const [viewSignIn, setViewSignIn] = useState(false)
    const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
    const [placed, setPlaced] = useState(null)
    const [place, setPlace] = useState("")

    const updateQuantity = (title, increase) => {
        setSelectedItem((prevSelectedItems) => {
            const updatedItems = prevSelectedItems.map((item) => {
                if (item.selectedListItem.Ltitle === title) {
                    return { ...item, quantity: increase ? item.quantity + 1 : item.quantity - 1 };
                }
                return item;
            });
            return [...updatedItems];
        });
    };

    return (
        <MyContext.Provider value={{ updateQuantity, place, setPlace, placed, setPlaced, isOffcanvasVisible, setIsOffcanvasVisible, viewSignIn, setViewSignIn, total, setTotal, selectedItems, setSelectedItem, hanldeFin, items }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;

