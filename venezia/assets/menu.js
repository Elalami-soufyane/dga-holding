/* ═══════════════════════════════════════════════════════════════════════════
   VENEZIA ICE — CARTE
   Reprise fidèle du menu imprimé « MENU 2026 » (glacier · café · restaurant,
   Larache, depuis 1999). Prix en dirhams.

   ⚙️  MODIFIER UN PRIX : changer la valeur « p » du produit.
       METTRE UN PRODUIT EN RUPTURE : ajouter  off:true  (il disparaît du menu
       sans être supprimé).
       n = nom · d = description · p = prix · t = badges
       t : 'star' (best-seller) · 'new' (nouveauté) · 'veg' (sans viande ni poisson)
       Chaque texte existe dans les quatre langues : fr · ar · en · es.
   ═══════════════════════════════════════════════════════════════════════════ */

const MENU = [
  {
    "id": "dejeuners",
    "ico": "🥐",
    "nom": {
      "fr": "Petits déjeuners",
      "ar": "فطور الصباح",
      "en": "Breakfast",
      "es": "Desayunos"
    },
    "items": [
      {
        "n": {
          "fr": "L'express",
          "ar": "الإكسبريس",
          "en": "The Express",
          "es": "El Exprés"
        },
        "p": 35,
        "d": {
          "fr": "Viennoiserie au choix, pain toasté beurre-confiture, boisson chaude au choix (hors spécialités), eau 33 cl",
          "ar": "معجنات حسب الاختيار، خبز محمص بالزبدة والمربى، مشروب ساخن (ما عدا التخصصات)، ماء 33 سل",
          "en": "Pastry of your choice, toast with butter and jam, hot drink (specialities excluded), 33 cl water",
          "es": "Bollería a elegir, tostada con mantequilla y mermelada, bebida caliente a elegir (especialidades excluidas), agua 33 cl"
        }
      },
      {
        "n": {
          "fr": "Le parisien",
          "ar": "الباريزيان",
          "en": "The Parisian",
          "es": "El Parisino"
        },
        "p": 45,
        "d": {
          "fr": "Viennoiserie, croque-monsieur parisien, yaourt compote de pomme et granola, boisson chaude (hors spécialités), jus d'orange pressé ou jus de carottes, eau 33 cl",
          "ar": "معجنات، كروك موسيو باريزيان، زبادي بكومبوت التفاح والغرانولا، مشروب ساخن (ما عدا التخصصات)، عصير برتقال أو جزر، ماء 33 سل",
          "en": "Pastry, Parisian croque-monsieur, apple compote yoghurt with granola, hot drink (specialities excluded), fresh orange or carrot juice, 33 cl water",
          "es": "Bollería, croque-monsieur parisino, yogur con compota de manzana y granola, bebida caliente (especialidades excluidas), zumo de naranja natural o de zanahoria, agua 33 cl"
        }
      },
      {
        "n": {
          "fr": "Le gourmand",
          "ar": "الݣورمان",
          "en": "The Gourmand",
          "es": "El Goloso"
        },
        "p": 62,
        "d": {
          "fr": "Viennoiserie, œufs au choix, omelette (nature, fromage ou western), poêlée de champignons et tomates, panier du boulanger, jben, olives noires, huile d'olive, yaourt compote et granola, boisson chaude, jus pressé, eau 33 cl",
          "ar": "معجنات، بيض حسب الاختيار، أومليت (عادية، بالجبن أو ويسترن، فطر وطماطم مقلية، سلة الخباز، جبن بلدي، زيتون أسود، زيت الزيتون، زبادي بالكومبوت والغرانولا، مشروب ساخن، عصير طازج، ماء 33 سل",
          "en": "Pastry, eggs your way, omelette (plain, cheese or western), sautéed mushrooms and tomatoes, baker's basket, jben, black olives, olive oil, compote yoghurt with granola, hot drink, fresh juice, 33 cl water",
          "es": "Bollería, huevos a elegir, tortilla (natural, con queso o western), salteado de champiñones y tomate, cesta del panadero, jben, aceitunas negras, aceite de oliva, yogur con compota y granola, bebida caliente, zumo natural, agua 33 cl"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Le p'tit déj junior",
          "ar": "فطور الصغار",
          "en": "Junior breakfast",
          "es": "Desayuno junior"
        },
        "p": 42,
        "d": {
          "fr": "Moins de 12 ans : chocolat chaud, bol de corn flakes au yaourt, salade de fruits, deux pancakes nutella",
          "ar": "أقل من 12 سنة: شوكولاتة ساخنة، كورن فليكس بالزبادي، سلطة فواكه، بانكيكان بالنوتيلا",
          "en": "Under 12s: hot chocolate, corn flakes with yoghurt, fruit salad, two Nutella pancakes",
          "es": "Menores de 12 años: chocolate caliente, bol de corn flakes con yogur, ensalada de frutas, dos tortitas con Nutella"
        }
      },
      {
        "n": {
          "fr": "L'anglais",
          "ar": "الإنجليزي",
          "en": "The English",
          "es": "El Inglés"
        },
        "p": 69,
        "d": {
          "fr": "Deux œufs au plat, saucisses de bœuf, jambon de bœuf, haricots blancs sauce tomate, poêlée de champignons et tomates, panier du boulanger, boisson chaude (hors spécialités), eau 33 cl",
          "ar": "بيضتان مقليتان، نقانق البقر، لحم بقري مقدد، فاصوليا بيضاء بصلصة الطماطم، فطر وطماطم مقلية، سلة الخباز، مشروب ساخن، ماء 33 سل",
          "en": "Two fried eggs, beef sausages, beef ham, baked beans, sautéed mushrooms and tomatoes, baker's basket, hot drink, 33 cl water",
          "es": "Dos huevos fritos, salchichas de ternera, jamón de ternera, alubias blancas con salsa de tomate, salteado de champiñones y tomate, cesta del panadero, bebida caliente (especialidades excluidas), agua 33 cl"
        }
      },
      {
        "n": {
          "fr": "Le beldi",
          "ar": "البلدي",
          "en": "The Beldi",
          "es": "El Beldi"
        },
        "p": 62,
        "d": {
          "fr": "Tajine au khlie, msemen, harcha et pain, jben, miel, olives noires, salade d'orange à la cannelle, yaourt aux amandes grillées, boisson chaude, eau 33 cl",
          "ar": "طاجين بالخليع، مسمن، حرشة وخبز، جبن بلدي، عسل، زيتون أسود، سلطة البرتقال بالقرفة، زبادي باللوز المحمص، مشروب ساخن، ماء 33 سل",
          "en": "Khlie tagine, msemen, harcha and bread, jben, honey, black olives, orange and cinnamon salad, yoghurt with roasted almonds, hot drink, 33 cl water",
          "es": "Tajín de khlie, msemen, harcha y pan, jben, miel, aceitunas negras, ensalada de naranja con canela, yogur con almendras tostadas, bebida caliente, agua 33 cl"
        }
      },
      {
        "n": {
          "fr": "Le turcki",
          "ar": "التركي",
          "en": "The Turkish",
          "es": "El Turco"
        },
        "p": 62,
        "d": {
          "fr": "Viennoiserie, chakchouka aux œufs au choix, fromage edam, dinde fumée, salade de fruits, yaourt et granola, boisson chaude, jus pressé, eau 33 cl",
          "ar": "معجنات، شكشوكة بالبيض حسب الاختيار، جبن إيدام، ديك رومي مدخن، سلطة فواكه، زبادي وغرانولا، مشروب ساخن، عصير طازج، ماء 33 سل",
          "en": "Pastry, shakshuka with eggs your way, edam cheese, smoked turkey, fruit salad, yoghurt and granola, hot drink, fresh juice, 33 cl water",
          "es": "Bollería, shakshuka con huevos a elegir, queso edam, pavo ahumado, ensalada de frutas, yogur y granola, bebida caliente, zumo natural, agua 33 cl"
        }
      },
      {
        "n": {
          "fr": "Le healthy",
          "ar": "الصحي",
          "en": "The Healthy",
          "es": "El Saludable"
        },
        "p": 72,
        "d": {
          "fr": "Tartine œuf poché, avocat et crème cheese ; salade fitness (mesclun, mangue, saumon fumé, tomates cerises, concombre) ; salade d'orange à la cannelle, yaourt nature, granola et fruits de saison, tea time Tchaba, jus d'orange ou jus détox, eau 33 cl",
          "ar": "توست ببيض مسلوق، أفوكادو وجبن كريمي؛ سلطة فيتنس (خضر ورقية، مانجو، سلمون مدخن، طماطم كرزية، خيار)؛ سلطة البرتقال بالقرفة، زبادي طبيعي، غرانولا وفواكه الموسم، شاي تشابا، عصير برتقال أو ديتوكس، ماء 33 سل",
          "en": "Poached egg toast with avocado and cream cheese; fitness salad (mesclun, mango, smoked salmon, cherry tomatoes, cucumber); orange and cinnamon salad, plain yoghurt, granola and seasonal fruit, Tchaba tea, orange or detox juice, 33 cl water",
          "es": "Tostada con huevo poché, aguacate y queso crema; ensalada fitness (mezclum, mango, salmón ahumado, tomates cherry, pepino); ensalada de naranja con canela, yogur natural, granola y fruta de temporada, té Tchaba, zumo de naranja o zumo detox, agua 33 cl"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Chamali",
          "ar": "الشمالي",
          "en": "Chamali",
          "es": "Chamali"
        },
        "p": 59,
        "d": {
          "fr": "Croque-monsieur, viennoiserie au choix, salade de fruits, boisson chaude (hors spécialités), jus d'orange pressé ou jus de carotte, eau 33 cl",
          "ar": "كروك موسيو، معجنات حسب الاختيار، سلطة فواكه، مشروب ساخن، عصير برتقال أو جزر، ماء 33 سل",
          "en": "Croque-monsieur, pastry of your choice, fruit salad, hot drink, fresh orange or carrot juice, 33 cl water",
          "es": "Croque-monsieur, bollería a elegir, ensalada de frutas, bebida caliente (especialidades excluidas), zumo de naranja natural o de zanahoria, agua 33 cl"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Laraychi",
          "ar": "العرايشي",
          "en": "Laraychi",
          "es": "Laraychi"
        },
        "p": 59,
        "d": {
          "fr": "Rghifa zraae, mortadelle du chef, fromage edam, yaourt granola, viennoiserie au choix, boisson chaude (hors spécialités), jus d'orange pressé ou jus de carotte, eau 33 cl",
          "ar": "رغيفة زرع، مرتديلا الشيف، جبن إيدام، زبادي بالغرانولا، معجنات حسب الاختيار، مشروب ساخن، عصير برتقال أو جزر، ماء 33 سل",
          "en": "Rghifa zraae, chef's mortadella, edam cheese, granola yoghurt, pastry of your choice, hot drink, fresh orange or carrot juice, 33 cl water",
          "es": "Rghifa zraae, mortadela del chef, queso edam, yogur con granola, bollería a elegir, bebida caliente (especialidades excluidas), zumo de naranja natural o de zanahoria, agua 33 cl"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Le duo matinal",
          "ar": "ثنائي الصباح",
          "en": "The Morning Duo",
          "es": "El Dúo Matinal"
        },
        "p": 135,
        "d": {
          "fr": "Pour deux : trois œufs au khlie, panier du boulanger, msemen et harcha, toast au fromage, jben, huile d'olive, miel, deux viennoiseries, deux yaourts compote et granola, deux boissons chaudes, deux jus d'orange, deux eaux 33 cl",
          "ar": "لشخصين: ثلاث بيضات بالخليع، سلة الخباز، مسمن وحرشة، توست بالجبن، جبن بلدي، زيت الزيتون، عسل، معجنتان، زباديان بالكومبوت والغرانولا، مشروبان ساخنان، كأسا عصير برتقال، قنينتا ماء 33 سل",
          "en": "For two: three eggs with khlie, baker's basket, msemen and harcha, cheese toast, jben, olive oil, honey, two pastries, two compote yoghurts with granola, two hot drinks, two orange juices, two 33 cl waters",
          "es": "Para dos: tres huevos con khlie, cesta del panadero, msemen y harcha, tostada con queso, jben, aceite de oliva, miel, dos bollerías, dos yogures con compota y granola, dos bebidas calientes, dos zumos de naranja, dos aguas de 33 cl"
        }
      }
    ]
  },
  {
    "id": "suggestions",
    "ico": "🍳",
    "nom": {
      "fr": "Suggestions du matin",
      "ar": "اقتراحات الصباح",
      "en": "Morning extras",
      "es": "Sugerencias de la mañana"
    },
    "items": [
      {
        "n": {
          "fr": "Une viennoiserie",
          "ar": "معجنات",
          "en": "One pastry",
          "es": "Bollería"
        },
        "p": 9
      },
      {
        "n": {
          "fr": "Beurre, miel ou confiture",
          "ar": "زبدة أو عسل أو مربى",
          "en": "Butter, honey or jam",
          "es": "Mantequilla, miel o mermelada"
        },
        "p": 4,
        "d": {
          "fr": "À l'unité",
          "ar": "للوحدة",
          "en": "Per portion",
          "es": "Por unidad"
        }
      },
      {
        "n": {
          "fr": "Toast au fromage",
          "ar": "توست بالجبن",
          "en": "Cheese toast",
          "es": "Tostada con queso"
        },
        "p": 18
      },
      {
        "n": {
          "fr": "Deux œufs au choix",
          "ar": "بيضتان حسب الاختيار",
          "en": "Two eggs your way",
          "es": "Dos huevos a elegir"
        },
        "p": 22,
        "d": {
          "fr": "Au plat, brouillés ou omelette nature",
          "ar": "مقلي، مخفوق أو أومليت عادية",
          "en": "Fried, scrambled or plain omelette",
          "es": "Fritos, revueltos o tortilla natural"
        }
      },
      {
        "n": {
          "fr": "Omelette au choix",
          "ar": "أومليت حسب الاختيار",
          "en": "Omelette your way",
          "es": "Tortilla a elegir"
        },
        "p": 27,
        "d": {
          "fr": "Champignons, fromage ou western",
          "ar": "بالفطر، بالجبن أو ويسترن",
          "en": "Mushroom, cheese or western",
          "es": "Champiñones, queso o western"
        }
      },
      {
        "n": {
          "fr": "Tajine au khlie",
          "ar": "طاجين بالخليع",
          "en": "Khlie tagine",
          "es": "Tajín de khlie"
        },
        "p": 32,
        "t": [
          "star"
        ]
      }
    ]
  },
  {
    "id": "entrees",
    "ico": "🥗",
    "nom": {
      "fr": "Entrées & salades",
      "ar": "المقبلات والسلطات",
      "en": "Starters & salads",
      "es": "Entrantes y ensaladas"
    },
    "items": [
      {
        "n": {
          "fr": "Crème de légumes",
          "ar": "شوربة الخضر",
          "en": "Cream of vegetables",
          "es": "Crema de verduras"
        },
        "p": 40,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Velouté de poulet et champignons",
          "ar": "شوربة الدجاج والفطر",
          "en": "Chicken and mushroom velouté",
          "es": "Crema de pollo y champiñones"
        },
        "p": 65
      },
      {
        "n": {
          "fr": "Soupe de poisson",
          "ar": "شوربة السمك",
          "en": "Fish soup",
          "es": "Sopa de pescado"
        },
        "p": 70
      },
      {
        "n": {
          "fr": "Niçoise",
          "ar": "نيسواز",
          "en": "Niçoise",
          "es": "Nizarda"
        },
        "p": 55,
        "d": {
          "fr": "Cœur de laitue, thon, œuf mollet, haricots verts, tomates fraîches, oignons, pommes grenailles, olives noires, concombre, poivrons, vinaigrette maison",
          "ar": "قلب الخس، تونة، بيضة مسلوقة، فاصوليا خضراء، طماطم، بصل، بطاطس صغيرة، زيتون أسود، خيار، فلفل، صلصة البيت",
          "en": "Lettuce heart, tuna, soft-boiled egg, green beans, tomatoes, onions, baby potatoes, black olives, cucumber, peppers, house vinaigrette",
          "es": "Cogollo de lechuga, atún, huevo mollet, judías verdes, tomate fresco, cebolla, patatas pequeñas, aceitunas negras, pepino, pimientos, vinagreta de la casa"
        }
      },
      {
        "n": {
          "fr": "César",
          "ar": "سيزار",
          "en": "Caesar",
          "es": "César"
        },
        "p": 62,
        "d": {
          "fr": "Salade romaine, poulet croustillant au panko, œuf de caille, tomates cerises, croûtons, copeaux de parmesan, sauce césar maison",
          "ar": "خس روماني، دجاج مقرمش بالبانكو، بيض السمان، طماطم كرزية، خبز محمص، رقائق البارميزان، صلصة سيزار",
          "en": "Romaine lettuce, panko crispy chicken, quail egg, cherry tomatoes, croutons, parmesan shavings, house Caesar dressing",
          "es": "Lechuga romana, pollo crujiente al panko, huevo de codorniz, tomates cherry, picatostes, virutas de parmesano, salsa césar de la casa"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Océane",
          "ar": "أوسيان",
          "en": "Océane",
          "es": "Oceánica"
        },
        "p": 85,
        "d": {
          "fr": "Mesclun de salade, saumon fumé, crevettes marinées, mangue, tomates cerises, avocat, noix, vinaigrette maison",
          "ar": "خضر ورقية، سلمون مدخن، قمرون متبل، مانجو، طماطم كرزية، أفوكادو، جوز، صلصة البيت",
          "en": "Mixed leaves, smoked salmon, marinated prawns, mango, cherry tomatoes, avocado, walnuts, house vinaigrette",
          "es": "Mezclum de ensalada, salmón ahumado, gambas marinadas, mango, tomates cherry, aguacate, nueces, vinagreta de la casa"
        }
      },
      {
        "n": {
          "fr": "Fraîcheur aux gambas",
          "ar": "سلطة القمرون",
          "en": "Prawn freshness",
          "es": "Frescor de gambas"
        },
        "p": 80,
        "d": {
          "fr": "Salade verte, gambas, ananas, avocat, radis, pomme, tomates cerises, concombre, vinaigrette maison",
          "ar": "سلطة خضراء، قمرون، أناناس، أفوكادو، فجل، تفاح، طماطم كرزية، خيار، صلصة البيت",
          "en": "Green salad, king prawns, pineapple, avocado, radish, apple, cherry tomatoes, cucumber, house vinaigrette",
          "es": "Ensalada verde, gambas, piña, aguacate, rábano, manzana, tomates cherry, pepino, vinagreta de la casa"
        }
      }
    ],
    "note": {
      "fr": "Nos salades gourmandes sont à base de légumes frais",
      "ar": "سلطاتنا محضرة من خضر طازجة",
      "en": "Our salads are made with fresh vegetables",
      "es": "Nuestras ensaladas se preparan con verduras frescas"
    }
  },
  {
    "id": "sandwichs",
    "ico": "🥖",
    "nom": {
      "fr": "Sandwichs & paninis",
      "ar": "السندويتشات والبانيني",
      "en": "Sandwiches & paninis",
      "es": "Bocadillos y paninis"
    },
    "items": [
      {
        "n": {
          "fr": "Marocain",
          "ar": "المغربي",
          "en": "Moroccan",
          "es": "Marroquí"
        },
        "p": 63,
        "d": {
          "fr": "Au choix kefta, poulet ou saucisses — baguette à l'ancienne, oignons, tomates et poivrons sautés, sauce légèrement poivrée",
          "ar": "حسب الاختيار: كفتة، دجاج أو نقانق — خبز تقليدي، بصل، طماطم وفلفل مقلي، صلصة بالفلفل الأسود",
          "en": "Kefta, chicken or sausages — country baguette, sautéed onions, tomatoes and peppers, lightly peppered sauce",
          "es": "A elegir kefta, pollo o salchichas — baguette tradicional, cebolla, tomate y pimientos salteados, salsa ligeramente pimentada"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Niçois",
          "ar": "نيسوا",
          "en": "Niçois",
          "es": "Nizardo"
        },
        "p": 57,
        "d": {
          "fr": "Baguette à l'ancienne, thon, œuf dur, salade, olives noires, edam, poivrons, mayonnaise maison",
          "ar": "خبز تقليدي، تونة، بيض مسلوق، سلطة، زيتون أسود، جبن إيدام، فلفل، مايونيز البيت",
          "en": "Country baguette, tuna, hard-boiled egg, salad, black olives, edam, peppers, house mayonnaise",
          "es": "Baguette tradicional, atún, huevo duro, lechuga, aceitunas negras, edam, pimientos, mayonesa de la casa"
        }
      },
      {
        "n": {
          "fr": "Rustique",
          "ar": "روستيك",
          "en": "Rustique",
          "es": "Rústico"
        },
        "p": 57,
        "d": {
          "fr": "Baguette pavot, pastrami de bœuf, laitue, cornichons, edam, sauce au beurre",
          "ar": "خبز بالخشخاش، بسطرمة البقر، خس، مخلل الخيار، جبن إيدام، صلصة الزبدة",
          "en": "Poppy seed baguette, beef pastrami, lettuce, gherkins, edam, butter sauce",
          "es": "Baguette de amapola, pastrami de ternera, lechuga, pepinillos, edam, salsa de mantequilla"
        }
      },
      {
        "n": {
          "fr": "Campagnard",
          "ar": "كامبانيار",
          "en": "Campagnard",
          "es": "Campesino"
        },
        "p": 62,
        "d": {
          "fr": "Baguette sésame, blanc de poulet mariné, edam, tomates, laitue, cornichons",
          "ar": "خبز بالسمسم، صدر دجاج متبل، جبن إيدام، طماطم، خس، مخلل الخيار",
          "en": "Sesame baguette, marinated chicken breast, edam, tomatoes, lettuce, gherkins",
          "es": "Baguette de sésamo, pechuga de pollo marinada, edam, tomate, lechuga, pepinillos"
        }
      },
      {
        "n": {
          "fr": "Panini trois fromages",
          "ar": "بانيني بثلاثة أجبان",
          "en": "Three-cheese panini",
          "es": "Panini tres quesos"
        },
        "p": 48,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Panini thon",
          "ar": "بانيني بالتونة",
          "en": "Tuna panini",
          "es": "Panini de atún"
        },
        "p": 53
      },
      {
        "n": {
          "fr": "Panini poulet",
          "ar": "بانيني بالدجاج",
          "en": "Chicken panini",
          "es": "Panini de pollo"
        },
        "p": 55
      },
      {
        "n": {
          "fr": "Panini viande hachée",
          "ar": "بانيني باللحم المفروم",
          "en": "Minced beef panini",
          "es": "Panini de carne picada"
        },
        "p": 55
      },
      {
        "n": {
          "fr": "Panini charcuterie",
          "ar": "بانيني باللحوم المصنعة",
          "en": "Cold cuts panini",
          "es": "Panini de embutidos"
        },
        "p": 53
      }
    ],
    "note": {
      "fr": "Servis avec frites maison et salade du chef · nos paninis sont garnis de fromage",
      "ar": "تُقدّم مع بطاطس البيت وسلطة الشيف · البانيني محشو بالجبن",
      "en": "Served with house fries and the chef's salad · our paninis are filled with cheese",
      "es": "Servidos con patatas caseras y ensalada del chef · nuestros paninis llevan queso"
    }
  },
  {
    "id": "burgers",
    "ico": "🍔",
    "nom": {
      "fr": "Burgers & co",
      "ar": "البرغر",
      "en": "Burgers & co",
      "es": "Hamburguesas"
    },
    "items": [
      {
        "n": {
          "fr": "Gourmet burger",
          "ar": "غورميه برغر",
          "en": "Gourmet burger",
          "es": "Hamburguesa gourmet"
        },
        "p": 71,
        "d": {
          "fr": "Pain burger, 140 g de steak haché, oignons caramélisés, salade, tomates, gouda, champignons, cornichons, sauce cocktail",
          "ar": "خبز البرغر، 140 غ لحم مفروم، بصل مكرمل، سلطة، طماطم، جبن غودا، فطر، مخلل، صلصة كوكتيل",
          "en": "Burger bun, 140 g beef patty, caramelised onions, salad, tomatoes, gouda, mushrooms, gherkins, cocktail sauce",
          "es": "Pan de hamburguesa, 140 g de carne picada, cebolla caramelizada, lechuga, tomate, gouda, champiñones, pepinillos, salsa cóctel"
        }
      },
      {
        "n": {
          "fr": "Crispy chicken burger",
          "ar": "كريسبي تشيكن برغر",
          "en": "Crispy chicken burger",
          "es": "Hamburguesa de pollo crujiente"
        },
        "p": 69,
        "d": {
          "fr": "Pain burger, poulet croustillant, oignons, salade, tomates, cheddar, sauce césar maison",
          "ar": "خبز البرغر، دجاج مقرمش، بصل، سلطة، طماطم، شيدر، صلصة سيزار",
          "en": "Burger bun, crispy chicken, onions, salad, tomatoes, cheddar, house Caesar sauce",
          "es": "Pan de hamburguesa, pollo crujiente, cebolla, lechuga, tomate, cheddar, salsa césar de la casa"
        }
      },
      {
        "n": {
          "fr": "Burger signature",
          "ar": "برغر سيغنتير",
          "en": "Signature burger",
          "es": "Hamburguesa signature"
        },
        "p": 89,
        "d": {
          "fr": "Pain burger, double steak haché, oignons caramélisés, jambon de bœuf, salade, tomates, cheddar, cornichons, sauce cocktail",
          "ar": "خبز البرغر، قطعتا لحم مفروم، بصل مكرمل، لحم بقري مقدد، سلطة، طماطم، شيدر، مخلل، صلصة كوكتيل",
          "en": "Burger bun, double beef patty, caramelised onions, beef ham, salad, tomatoes, cheddar, gherkins, cocktail sauce",
          "es": "Pan de hamburguesa, doble carne picada, cebolla caramelizada, jamón de ternera, lechuga, tomate, cheddar, pepinillos, salsa cóctel"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Poutine poulet",
          "ar": "بوتين بالدجاج",
          "en": "Chicken poutine",
          "es": "Poutine de pollo"
        },
        "p": 62,
        "d": {
          "fr": "Sauce poutine, poulet, dinde fumée, mozzarella, potatoes",
          "ar": "صلصة البوتين، دجاج، ديك رومي مدخن، موزاريلا، بطاطس",
          "en": "Poutine sauce, chicken, smoked turkey, mozzarella, potatoes",
          "es": "Salsa poutine, pollo, pavo ahumado, mozzarella, patatas"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Poutine cordon bleu",
          "ar": "بوتين كوردون بلو",
          "en": "Cordon bleu poutine",
          "es": "Poutine cordon bleu"
        },
        "p": 67,
        "d": {
          "fr": "Sauce poutine cordon bleu, dinde fumée, mozzarella, potatoes",
          "ar": "صلصة كوردون بلو، ديك رومي مدخن، موزاريلا، بطاطس",
          "en": "Cordon bleu poutine sauce, smoked turkey, mozzarella, potatoes",
          "es": "Salsa poutine cordon bleu, pavo ahumado, mozzarella, patatas"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Venezia kids",
          "ar": "فينيسيا كيدز",
          "en": "Venezia kids",
          "es": "Venezia kids"
        },
        "p": 49,
        "d": {
          "fr": "Mini burger, pizza viande hachée, spaghetti bolognaise ou nuggets + une portion de frites + un soda 33 cl + une boule de glace",
          "ar": "ميني برغر، بيتزا باللحم المفروم، سباغيتي بولونيز أو ناغتس + بطاطس مقلية + مشروب غازي 33 سل + كرة مثلجات",
          "en": "Mini burger, minced beef pizza, spaghetti bolognese or nuggets + fries + 33 cl soda + one scoop of ice cream",
          "es": "Mini hamburguesa, pizza de carne picada, espaguetis boloñesa o nuggets + una ración de patatas + un refresco 33 cl + una bola de helado"
        }
      }
    ],
    "note": {
      "fr": "Servis avec frites maison et salade du chef · suppléments : frites 20 · salade de crudités 17 · légumes grillés 20 DHS",
      "ar": "تُقدّم مع بطاطس البيت وسلطة الشيف · إضافات: بطاطس 20 · سلطة خضر 17 · خضر مشوية 20 درهم",
      "en": "Served with house fries and the chef's salad · extras: fries 20 · raw vegetable salad 17 · grilled vegetables 20 DHS",
      "es": "Servidos con patatas caseras y ensalada del chef · extras: patatas 20 · ensalada 17 · verduras a la parrilla 20 DHS"
    }
  },
  {
    "id": "tacos",
    "ico": "🌯",
    "nom": {
      "fr": "Tacos",
      "ar": "طاكوس",
      "en": "Tacos",
      "es": "Tacos"
    },
    "items": [
      {
        "n": {
          "fr": "Tacos poulet",
          "ar": "طاكوس بالدجاج",
          "en": "Chicken tacos",
          "es": "Tacos de pollo"
        },
        "p": 58
      },
      {
        "n": {
          "fr": "Tacos viande hachée",
          "ar": "طاكوس باللحم المفروم",
          "en": "Minced beef tacos",
          "es": "Tacos de carne picada"
        },
        "p": 60
      },
      {
        "n": {
          "fr": "Tacos mixte",
          "ar": "طاكوس مشكل",
          "en": "Mixed tacos",
          "es": "Tacos mixtos"
        },
        "p": 63,
        "t": [
          "star"
        ]
      }
    ],
    "note": {
      "fr": "Garnis de fromage, servis avec frites maison et salade du chef",
      "ar": "محشو بالجبن، يُقدّم مع بطاطس البيت وسلطة الشيف",
      "en": "Filled with cheese, served with house fries and the chef's salad",
      "es": "Con queso, servidos con patatas caseras y ensalada del chef"
    }
  },
  {
    "id": "pastas",
    "ico": "🍝",
    "nom": {
      "fr": "Pastas",
      "ar": "المعكرونة",
      "en": "Pasta",
      "es": "Pastas"
    },
    "items": [
      {
        "n": {
          "fr": "Bolognaise",
          "ar": "بولونيز",
          "en": "Bolognese",
          "es": "Boloñesa"
        },
        "p": 63,
        "d": {
          "fr": "Viande hachée, tomates fraîches, basilic",
          "ar": "لحم مفروم، طماطم طازجة، ريحان",
          "en": "Minced beef, fresh tomatoes, basil",
          "es": "Carne picada, tomate fresco, albahaca"
        }
      },
      {
        "n": {
          "fr": "Arrabbiata",
          "ar": "أرابياتا",
          "en": "Arrabbiata",
          "es": "Arrabbiata"
        },
        "p": 55,
        "d": {
          "fr": "Sauce tomate, olives noires, piments",
          "ar": "صلصة الطماطم، زيتون أسود، فلفل حار",
          "en": "Tomato sauce, black olives, chilli",
          "es": "Salsa de tomate, aceitunas negras, guindilla"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Alfredo",
          "ar": "ألفريدو",
          "en": "Alfredo",
          "es": "Alfredo"
        },
        "p": 63,
        "d": {
          "fr": "Poulet, champignons de Paris, ciboulette, parmesan, sauce Alfredo",
          "ar": "دجاج، فطر، ثوم معمر، بارميزان، صلصة ألفريدو",
          "en": "Chicken, button mushrooms, chives, parmesan, Alfredo sauce",
          "es": "Pollo, champiñones, cebollino, parmesano, salsa Alfredo"
        }
      },
      {
        "n": {
          "fr": "Carbonara",
          "ar": "كاربونارا",
          "en": "Carbonara",
          "es": "Carbonara"
        },
        "p": 59,
        "d": {
          "fr": "Jambon de dinde, parmesan, crème fraîche",
          "ar": "لحم الديك الرومي، بارميزان، كريمة طازجة",
          "en": "Turkey ham, parmesan, cream",
          "es": "Jamón de pavo, parmesano, nata"
        }
      },
      {
        "n": {
          "fr": "Lasagne bolognaise",
          "ar": "لازانيا بولونيز",
          "en": "Bolognese lasagne",
          "es": "Lasaña boloñesa"
        },
        "p": 65
      },
      {
        "n": {
          "fr": "Gratin de fruits de mer",
          "ar": "غراتان فواكه البحر",
          "en": "Seafood gratin",
          "es": "Gratinado de marisco"
        },
        "p": 75
      },
      {
        "n": {
          "fr": "Frutti di mari",
          "ar": "فروتي دي ماري",
          "en": "Frutti di mare",
          "es": "Frutti di mare"
        },
        "p": 79,
        "d": {
          "fr": "Cocktail de fruits de mer en persillade juste saisis, sauce rose",
          "ar": "فواكه البحر بالبقدونس والثوم، صلصة وردية",
          "en": "Seafood seared with parsley and garlic, rosé sauce",
          "es": "Cóctel de marisco salteado con perejil y ajo, salsa rosa"
        }
      },
      {
        "n": {
          "fr": "Salmone",
          "ar": "سالموني",
          "en": "Salmone",
          "es": "Salmone"
        },
        "p": 80,
        "d": {
          "fr": "Saumon fumé, épinards, crème fraîche, parmesan, aneth",
          "ar": "سلمون مدخن، سبانخ، كريمة، بارميزان، شبت",
          "en": "Smoked salmon, spinach, cream, parmesan, dill",
          "es": "Salmón ahumado, espinacas, nata, parmesano, eneldo"
        }
      }
    ],
    "note": {
      "fr": "Au choix : spaghetti, penne ou tagliatelle",
      "ar": "حسب الاختيار: سباغيتي، بيني أو تالياتيلي",
      "en": "Your choice of spaghetti, penne or tagliatelle",
      "es": "A elegir: espaguetis, penne o tagliatelle"
    }
  },
  {
    "id": "pizzas",
    "ico": "🍕",
    "nom": {
      "fr": "Pizzas",
      "ar": "البيتزا",
      "en": "Pizzas",
      "es": "Pizzas"
    },
    "items": [
      {
        "n": {
          "fr": "Margherita",
          "ar": "مارغريتا",
          "en": "Margherita",
          "es": "Margarita"
        },
        "p": 45,
        "d": {
          "fr": "Sauce tomate, mozzarella, origan",
          "ar": "صلصة الطماطم، موزاريلا، أوريغانو",
          "en": "Tomato sauce, mozzarella, oregano",
          "es": "Salsa de tomate, mozzarella, orégano"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Vegetariana",
          "ar": "نباتية",
          "en": "Vegetariana",
          "es": "Vegetariana"
        },
        "p": 55,
        "d": {
          "fr": "Assortiment de légumes grillés, sauce tomate, mozzarella, origan",
          "ar": "تشكيلة خضر مشوية، صلصة الطماطم، موزاريلا، أوريغانو",
          "en": "Grilled vegetables, tomato sauce, mozzarella, oregano",
          "es": "Surtido de verduras a la parrilla, salsa de tomate, mozzarella, orégano"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Frutti di mari",
          "ar": "فروتي دي ماري",
          "en": "Frutti di mare",
          "es": "Frutti di mare"
        },
        "p": 85,
        "d": {
          "fr": "Fruits de mer en persillade juste saisis, sauce tomate, mozzarella, origan",
          "ar": "فواكه البحر بالبقدونس والثوم، صلصة الطماطم، موزاريلا، أوريغانو",
          "en": "Seared seafood with parsley and garlic, tomato sauce, mozzarella, oregano",
          "es": "Marisco salteado con perejil y ajo, salsa de tomate, mozzarella, orégano"
        }
      },
      {
        "n": {
          "fr": "Saumon fumé",
          "ar": "بالسلمون المدخن",
          "en": "Smoked salmon",
          "es": "Salmón ahumado"
        },
        "p": 80,
        "d": {
          "fr": "Saumon fumé, mozzarella, crème fraîche, origan",
          "ar": "سلمون مدخن، موزاريلا، كريمة، أوريغانو",
          "en": "Smoked salmon, mozzarella, cream, oregano",
          "es": "Salmón ahumado, mozzarella, nata, orégano"
        }
      },
      {
        "n": {
          "fr": "Bismarck",
          "ar": "بيسمارك",
          "en": "Bismarck",
          "es": "Bismarck"
        },
        "p": 73,
        "d": {
          "fr": "Viande hachée, champignons frais, oignons, sauce tomate, mozzarella, origan",
          "ar": "لحم مفروم، فطر طازج، بصل، صلصة الطماطم، موزاريلا، أوريغانو",
          "en": "Minced beef, fresh mushrooms, onions, tomato sauce, mozzarella, oregano",
          "es": "Carne picada, champiñones frescos, cebolla, salsa de tomate, mozzarella, orégano"
        }
      },
      {
        "n": {
          "fr": "Al tonno",
          "ar": "بالتونة",
          "en": "Al tonno",
          "es": "Al tonno"
        },
        "p": 68,
        "d": {
          "fr": "Thon, olives noires, oignons, sauce tomate, poivrons, mozzarella, origan",
          "ar": "تونة، زيتون أسود، بصل، صلصة الطماطم، فلفل، موزاريلا، أوريغانو",
          "en": "Tuna, black olives, onions, tomato sauce, peppers, mozzarella, oregano",
          "es": "Atún, aceitunas negras, cebolla, salsa de tomate, pimientos, mozzarella, orégano"
        }
      },
      {
        "n": {
          "fr": "Con pollo e funghi",
          "ar": "بالدجاج والفطر",
          "en": "Con pollo e funghi",
          "es": "Con pollo y setas"
        },
        "p": 69,
        "d": {
          "fr": "Poulet mariné, poivrons, champignons frais, sauce tomate, mozzarella, origan",
          "ar": "دجاج متبل، فلفل، فطر طازج، صلصة الطماطم، موزاريلا، أوريغانو",
          "en": "Marinated chicken, peppers, fresh mushrooms, tomato sauce, mozzarella, oregano",
          "es": "Pollo marinado, pimientos, champiñones frescos, salsa de tomate, mozzarella, orégano"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Quattro formaggi",
          "ar": "أربعة أجبان",
          "en": "Quattro formaggi",
          "es": "Cuatro quesos"
        },
        "p": 79,
        "d": {
          "fr": "Chèvre, gorgonzola, parmesan, mozzarella, crème fraîche, origan",
          "ar": "جبن الماعز، غورغونزولا، بارميزان، موزاريلا، كريمة، أوريغانو",
          "en": "Goat cheese, gorgonzola, parmesan, mozzarella, cream, oregano",
          "es": "Queso de cabra, gorgonzola, parmesano, mozzarella, nata, orégano"
        },
        "t": [
          "veg"
        ]
      }
    ]
  },
  {
    "id": "plats",
    "ico": "🍽️",
    "nom": {
      "fr": "Nos plats",
      "ar": "الأطباق",
      "en": "Main courses",
      "es": "Nuestros platos"
    },
    "items": [
      {
        "n": {
          "fr": "Cordon bleu",
          "ar": "كوردون بلو",
          "en": "Cordon bleu",
          "es": "Cordon bleu"
        },
        "p": 80,
        "d": {
          "fr": "Sauce au choix : fromage ou champignons",
          "ar": "صلصة حسب الاختيار: الجبن أو الفطر",
          "en": "Choice of cheese or mushroom sauce",
          "es": "Salsa a elegir: queso o champiñones"
        }
      },
      {
        "n": {
          "fr": "Émincé de poulet aux champignons",
          "ar": "شرائح الدجاج بالفطر",
          "en": "Sliced chicken with mushrooms",
          "es": "Pollo en tiras con setas"
        },
        "p": 85
      },
      {
        "n": {
          "fr": "Suprême de poulet",
          "ar": "سوبريم الدجاج",
          "en": "Chicken supreme",
          "es": "Suprema de pollo"
        },
        "p": 85
      },
      {
        "n": {
          "fr": "Poulet parmigiana",
          "ar": "دجاج بارميجانا",
          "en": "Chicken parmigiana",
          "es": "Pollo a la parmesana"
        },
        "p": 75
      },
      {
        "n": {
          "fr": "Filet de bœuf poêlé",
          "ar": "فيليه البقر",
          "en": "Pan-seared beef fillet",
          "es": "Solomillo de ternera"
        },
        "p": 120,
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Bœuf stroganoff",
          "ar": "بقر ستروغانوف",
          "en": "Beef stroganoff",
          "es": "Ternera Stroganoff"
        },
        "p": 95
      },
      {
        "n": {
          "fr": "Bœuf mongole",
          "ar": "بقر منغولي",
          "en": "Mongolian beef",
          "es": "Ternera mongola"
        },
        "p": 95,
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Couscous poulet",
          "ar": "كسكس بالدجاج",
          "en": "Chicken couscous",
          "es": "Cuscús de pollo"
        },
        "p": 58,
        "d": {
          "fr": "Plat du jour — couscous légumes et tfaya, servi avec un verre de lben",
          "ar": "طبق اليوم — كسكس بالخضر والتفاية، مع كأس لبن",
          "en": "Dish of the day — vegetable and tfaya couscous, served with a glass of lben",
          "es": "Plato del día — cuscús de verduras y tfaya, servido con un vaso de lben"
        }
      },
      {
        "n": {
          "fr": "Couscous viande",
          "ar": "كسكس باللحم",
          "en": "Beef couscous",
          "es": "Cuscús de carne"
        },
        "p": 65,
        "d": {
          "fr": "Plat du jour — couscous légumes et tfaya, servi avec un verre de lben",
          "ar": "طبق اليوم — كسكس بالخضر والتفاية، مع كأس لبن",
          "en": "Dish of the day — vegetable and tfaya couscous, served with a glass of lben",
          "es": "Plato del día — cuscús de verduras y tfaya, servido con un vaso de lben"
        }
      }
    ],
    "note": {
      "fr": "Deux accompagnements au choix : riz, légumes sautés, purée de pomme de terre ou pommes frites · accompagnement extra 20 DHS",
      "ar": "طبقان جانبيان حسب الاختيار: أرز، خضر مقلية، بوريه البطاطس أو بطاطس مقلية · إضافة 20 درهم",
      "en": "Two sides of your choice: rice, sautéed vegetables, mashed potato or fries · extra side 20 DHS",
      "es": "Dos guarniciones a elegir: arroz, verduras salteadas, puré de patata o patatas fritas · guarnición extra 20 DHS"
    }
  },
  {
    "id": "crepes-salees",
    "ico": "🥞",
    "nom": {
      "fr": "Crêpes salées",
      "ar": "كريب مالح",
      "en": "Savoury crêpes",
      "es": "Crepes salados"
    },
    "items": [
      {
        "n": {
          "fr": "Fromage",
          "ar": "بالجبن",
          "en": "Cheese",
          "es": "Queso"
        },
        "p": 49,
        "d": {
          "fr": "Edam, mozzarella, cheddar, sauce béchamel",
          "ar": "إيدام، موزاريلا، شيدر، صلصة بشاميل",
          "en": "Edam, mozzarella, cheddar, béchamel",
          "es": "Edam, mozzarella, cheddar, salsa bechamel"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Carbonara",
          "ar": "كاربونارا",
          "en": "Carbonara",
          "es": "Carbonara"
        },
        "p": 53,
        "d": {
          "fr": "Jambon de dinde, fromage, sauce béchamel",
          "ar": "لحم الديك الرومي، جبن، صلصة بشاميل",
          "en": "Turkey ham, cheese, béchamel",
          "es": "Jamón de pavo, queso, salsa bechamel"
        }
      },
      {
        "n": {
          "fr": "Parisienne",
          "ar": "باريزيان",
          "en": "Parisienne",
          "es": "Parisina"
        },
        "p": 55,
        "d": {
          "fr": "Poulet mariné, champignons de Paris, fromage, sauce béchamel",
          "ar": "دجاج متبل، فطر، جبن، صلصة بشاميل",
          "en": "Marinated chicken, button mushrooms, cheese, béchamel",
          "es": "Pollo marinado, champiñones, queso, salsa bechamel"
        }
      },
      {
        "n": {
          "fr": "Saumon",
          "ar": "بالسلمون",
          "en": "Salmon",
          "es": "Salmón"
        },
        "p": 68,
        "d": {
          "fr": "Saumon fumé, aneth, fromage, sauce béchamel",
          "ar": "سلمون مدخن، شبت، جبن، صلصة بشاميل",
          "en": "Smoked salmon, dill, cheese, béchamel",
          "es": "Salmón ahumado, eneldo, queso, salsa bechamel"
        }
      }
    ],
    "note": {
      "fr": "Servies avec salade du chef",
      "ar": "تُقدّم مع سلطة الشيف",
      "en": "Served with the chef's salad",
      "es": "Servidos con ensalada del chef"
    }
  },
  {
    "id": "crepes-sucrees",
    "ico": "🍫",
    "nom": {
      "fr": "Crêpes sucrées",
      "ar": "كريب حلو",
      "en": "Sweet crêpes",
      "es": "Crepes dulces"
    },
    "items": [
      {
        "n": {
          "fr": "Nature",
          "ar": "عادي",
          "en": "Plain",
          "es": "Natural"
        },
        "p": 30,
        "d": {
          "fr": "Sucre, amandes grillées",
          "ar": "سكر، لوز محمص",
          "en": "Sugar, roasted almonds",
          "es": "Azúcar, almendras tostadas"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Au miel, confiture ou chocolat",
          "ar": "بالعسل أو المربى أو الشوكولاتة",
          "en": "Honey, jam or chocolate",
          "es": "Miel, mermelada o chocolate"
        },
        "p": 35,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Nutella",
          "ar": "نوتيلا",
          "en": "Nutella",
          "es": "Nutella"
        },
        "p": 42,
        "t": [
          "star",
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Nutella banane",
          "ar": "نوتيلا وموز",
          "en": "Nutella and banana",
          "es": "Nutella y plátano"
        },
        "p": 47,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Banoffee pie",
          "ar": "بانوفي",
          "en": "Banoffee pie",
          "es": "Banoffee"
        },
        "p": 47,
        "d": {
          "fr": "Caramel, banane, chantilly",
          "ar": "كراميل، موز، شانتيي",
          "en": "Caramel, banana, whipped cream",
          "es": "Caramelo, plátano, nata"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Suprême",
          "ar": "سوبريم",
          "en": "Supreme",
          "es": "Suprema"
        },
        "p": 55,
        "d": {
          "fr": "Nutella, banane, amandes grillées, fruits de saison",
          "ar": "نوتيلا، موز، لوز محمص، فواكه الموسم",
          "en": "Nutella, banana, roasted almonds, seasonal fruit",
          "es": "Nutella, plátano, almendras tostadas, fruta de temporada"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Profiterole",
          "ar": "بروفيترول",
          "en": "Profiterole",
          "es": "Profiterol"
        },
        "p": 49,
        "d": {
          "fr": "Une boule de glace vanille, coulis de chocolat noir, éclats de noix",
          "ar": "كرة مثلجات فانيلا، صلصة شوكولاتة داكنة، قطع الجوز",
          "en": "A scoop of vanilla ice cream, dark chocolate coulis, walnut pieces",
          "es": "Una bola de helado de vainilla, coulis de chocolate negro, trozos de nuez"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Fruits rouges",
          "ar": "بالفواكه الحمراء",
          "en": "Red berries",
          "es": "Frutos rojos"
        },
        "p": 57,
        "d": {
          "fr": "Une boule de glace yaourt fruits des bois, nutella, fruits rouges",
          "ar": "كرة مثلجات زبادي بفواكه الغابة، نوتيلا، فواكه حمراء",
          "en": "A scoop of forest fruit yoghurt ice cream, Nutella, red berries",
          "es": "Una bola de helado de yogur con frutos del bosque, Nutella, frutos rojos"
        },
        "t": [
          "veg"
        ]
      }
    ],
    "note": {
      "fr": "Servies avec chantilly · suppléments : amandes, noix ou noisettes 6 · chantilly 6 · nutella 7 DHS",
      "ar": "تُقدّم مع الشانتيي · إضافات: لوز أو جوز أو بندق 6 · شانتيي 6 · نوتيلا 7 دراهم",
      "en": "Served with whipped cream · extras: almonds, walnuts or hazelnuts 6 · whipped cream 6 · Nutella 7 DHS",
      "es": "Servidos con nata · extras: almendras, nueces o avellanas 6 · nata 6 · Nutella 7 DHS"
    }
  },
  {
    "id": "coupes",
    "ico": "🍨",
    "nom": {
      "fr": "Glaces & coupes",
      "ar": "المثلجات والكؤوس",
      "en": "Ice cream & sundaes",
      "es": "Helados y copas"
    },
    "items": [
      {
        "n": {
          "fr": "La fantaisie Oreo",
          "ar": "فانتيزي أوريو",
          "en": "Oreo fantasy",
          "es": "Fantasía Oreo"
        },
        "p": 65,
        "d": {
          "fr": "Trois boules : chocolat, vanille, variegato cookies · biscuit Oreo, sauce chocolat, chantilly",
          "ar": "ثلاث كرات: شوكولاتة، فانيلا، فاريغاتو كوكيز · بسكويت أوريو، صلصة شوكولاتة، شانتيي",
          "en": "Three scoops: chocolate, vanilla, cookies variegato · Oreo biscuit, chocolate sauce, whipped cream",
          "es": "Tres bolas: chocolate, vainilla, variegato cookies · galleta Oreo, salsa de chocolate, nata"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "La charmeuse",
          "ar": "الشارميز",
          "en": "La charmeuse",
          "es": "La encantadora"
        },
        "p": 65,
        "d": {
          "fr": "Trois boules : vanille, noisette, variegato cookies · coulis caramel, chantilly",
          "ar": "ثلاث كرات: فانيلا، بندق، فاريغاتو كوكيز · صلصة كراميل، شانتيي",
          "en": "Three scoops: vanilla, hazelnut, cookies variegato · caramel coulis, whipped cream",
          "es": "Tres bolas: vainilla, avellana, variegato cookies · coulis de caramelo, nata"
        }
      },
      {
        "n": {
          "fr": "La havana",
          "ar": "هافانا",
          "en": "La havana",
          "es": "La Havana"
        },
        "p": 65,
        "d": {
          "fr": "Trois boules : café, variegato dolce latte et Ferrero · sauce chocolat, chantilly au cacao",
          "ar": "ثلاث كرات: قهوة، فاريغاتو دولتشي لاتي وفيريرو · صلصة شوكولاتة، شانتيي بالكاكاو",
          "en": "Three scoops: coffee, dolce latte and Ferrero variegato · chocolate sauce, cocoa-dusted whipped cream",
          "es": "Tres bolas: café, variegato dolce latte y Ferrero · salsa de chocolate, nata espolvoreada con cacao"
        }
      },
      {
        "n": {
          "fr": "Les trois banquises",
          "ar": "الجبال الثلاثية",
          "en": "The three icebergs",
          "es": "Los tres icebergs"
        },
        "p": 65,
        "d": {
          "fr": "Trois boules : vanille, noisette, nougat · coulis caramel, chantilly",
          "ar": "ثلاث كرات: فانيلا، بندق، نوغا · صلصة كراميل، شانتيي",
          "en": "Three scoops: vanilla, hazelnut, nougat · caramel coulis, whipped cream",
          "es": "Tres bolas: vainilla, avellana, turrón · coulis de caramelo, nata"
        }
      },
      {
        "n": {
          "fr": "La hawaïenne",
          "ar": "الهاوايية",
          "en": "The Hawaiian",
          "es": "La hawaiana"
        },
        "p": 65,
        "d": {
          "fr": "Trois sorbets : fraise, ananas, mangue · tranches de fruits de saison, coulis fraise, chantilly",
          "ar": "ثلاثة سوربي: فراولة، أناناس، مانجو · شرائح فواكه الموسم، صلصة الفراولة، شانتيي",
          "en": "Three sorbets: strawberry, pineapple, mango · seasonal fruit slices, strawberry coulis, whipped cream",
          "es": "Tres sorbetes: fresa, piña, mango · rodajas de fruta de temporada, coulis de fresa, nata"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "L'exotique",
          "ar": "الاستوائية",
          "en": "The exotic",
          "es": "La exótica"
        },
        "p": 72,
        "d": {
          "fr": "Trois sorbets : ananas, mangue, fruits de la passion et une boule de crème glacée yaourt fruits des bois · fruits de saison, coulis fraise, chantilly",
          "ar": "ثلاثة سوربي: أناناس، مانجو، فاكهة العاطفة وكرة زبادي بفواكه الغابة · فواكه الموسم، صلصة الفراولة، شانتيي",
          "en": "Three sorbets: pineapple, mango, passion fruit and a scoop of forest fruit yoghurt ice cream · seasonal fruit, strawberry coulis, whipped cream",
          "es": "Tres sorbetes: piña, mango, maracuyá y una bola de helado de yogur con frutos del bosque · fruta de temporada, coulis de fresa, nata"
        }
      },
      {
        "n": {
          "fr": "Toi et moi",
          "ar": "أنا وأنت",
          "en": "You and me",
          "es": "Tú y yo"
        },
        "p": 120,
        "d": {
          "fr": "Six boules aux parfums de votre choix, pour un tête-à-tête des plus gourmands",
          "ar": "ست كرات بالنكهات التي تختارونها، لشخصين",
          "en": "Six scoops of your chosen flavours, for a sweet tête-à-tête",
          "es": "Seis bolas con los sabores que elijáis, para compartir entre dos"
        }
      },
      {
        "n": {
          "fr": "La coupe enfant",
          "ar": "كأس الأطفال",
          "en": "Children's sundae",
          "es": "Copa infantil"
        },
        "p": 42,
        "d": {
          "fr": "Deux boules : bubble gum, vanille ou fraise · bonbons, coulis fraise, chantilly",
          "ar": "كرتان: علكة، فانيلا أو فراولة · حلويات، صلصة الفراولة، شانتيي",
          "en": "Two scoops: bubble gum, vanilla or strawberry · sweets, strawberry coulis, whipped cream",
          "es": "Dos bolas: chicle, vainilla o fresa · caramelos, coulis de fresa, nata"
        }
      },
      {
        "n": {
          "fr": "Une boule à emporter",
          "ar": "كرة للأخذ",
          "en": "One scoop to go",
          "es": "Una bola para llevar"
        },
        "p": 22
      },
      {
        "n": {
          "fr": "Une boule sur place",
          "ar": "كرة في المحل",
          "en": "One scoop, eat in",
          "es": "Una bola en el local"
        },
        "p": 25
      },
      {
        "n": {
          "fr": "Une boule light",
          "ar": "كرة لايت",
          "en": "One light scoop",
          "es": "Una bola light"
        },
        "p": 30
      },
      {
        "n": {
          "fr": "Supplément chantilly",
          "ar": "إضافة شانتيي",
          "en": "Extra whipped cream",
          "es": "Nata extra"
        },
        "p": 6
      }
    ],
    "note": {
      "fr": "Crèmes glacées : yaourt nature, chocolat, pistache, noisette, caramel, nougat, vanille, café · Variegatos : yaourt fruits de la passion, yaourt fruits des bois, cherry mania, stracciatella, dolce latte, tiramisu, cookies, Ferrero · Sorbets : fruits de la passion, framboise, mangue, ananas, fraise, citron · Venezia Junior : azzuro bleu ciel, bubble gum · Glaces light : vanille, chocolat, mangue, fraise",
      "ar": "مثلجات: زبادي طبيعي، شوكولاتة، فستق، بندق، كراميل، نوغا، فانيلا، قهوة · فاريغاتو: زبادي بفاكهة العاطفة، زبادي بفواكه الغابة، شيري مانيا، ستراتشاتيلا، دولتشي لاتي، تيراميسو، كوكيز، فيريرو · سوربي: فاكهة العاطفة، توت، مانجو، أناناس، فراولة، ليمون · فينيسيا جونيور: أزورو، علكة · لايت: فانيلا، شوكولاتة، مانجو، فراولة",
      "en": "Ice creams: plain yoghurt, chocolate, pistachio, hazelnut, caramel, nougat, vanilla, coffee · Variegato: passion fruit yoghurt, forest fruit yoghurt, cherry mania, stracciatella, dolce latte, tiramisu, cookies, Ferrero · Sorbets: passion fruit, raspberry, mango, pineapple, strawberry, lemon · Venezia Junior: azzuro, bubble gum · Light: vanilla, chocolate, mango, strawberry",
      "es": "Helados: yogur natural, chocolate, pistacho, avellana, caramelo, turrón, vainilla, café · Variegato: yogur de maracuyá, yogur de frutos del bosque, cherry mania, stracciatella, dolce latte, tiramisú, cookies, Ferrero · Sorbetes: maracuyá, frambuesa, mango, piña, fresa, limón · Venezia Junior: azzuro, chicle · Light: vainilla, chocolate, mango, fresa"
    }
  },
  {
    "id": "patisseries",
    "ico": "🍰",
    "nom": {
      "fr": "Pâtisseries & desserts",
      "ar": "الحلويات",
      "en": "Pastries & desserts",
      "es": "Pastelería y postres"
    },
    "items": [
      {
        "n": {
          "fr": "Macaron",
          "ar": "ماكارون",
          "en": "Macaron",
          "es": "Macaron"
        },
        "p": 12
      },
      {
        "n": {
          "fr": "Muffin",
          "ar": "مافن",
          "en": "Muffin",
          "es": "Muffin"
        },
        "p": 27,
        "d": {
          "fr": "Cake moelleux, au choix : vanille, chocolat ou fruits rouges",
          "ar": "كيك هش، حسب الاختيار: فانيلا، شوكولاتة أو فواكه حمراء",
          "en": "Soft cake, choice of vanilla, chocolate or red berries",
          "es": "Bizcocho esponjoso, a elegir: vainilla, chocolate o frutos rojos"
        }
      },
      {
        "n": {
          "fr": "Cookie",
          "ar": "كوكي",
          "en": "Cookie",
          "es": "Cookie"
        },
        "p": 27,
        "d": {
          "fr": "Biscuit croquant, au choix : vanille ou chocolat",
          "ar": "بسكويت مقرمش، حسب الاختيار: فانيلا أو شوكولاتة",
          "en": "Crunchy biscuit, vanilla or chocolate",
          "es": "Galleta crujiente, a elegir: vainilla o chocolate"
        }
      },
      {
        "n": {
          "fr": "Brownie",
          "ar": "براوني",
          "en": "Brownie",
          "es": "Brownie"
        },
        "p": 32,
        "d": {
          "fr": "Moelleux au chocolat et éclats de noix",
          "ar": "كيك الشوكولاتة بقطع الجوز",
          "en": "Soft chocolate cake with walnut pieces",
          "es": "Bizcocho de chocolate con trozos de nuez"
        }
      },
      {
        "n": {
          "fr": "Roulé au chocolat",
          "ar": "رولي بالشوكولاتة",
          "en": "Chocolate roll",
          "es": "Brazo de chocolate"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit au chocolat, crème au beurre au chocolat noir",
          "ar": "بسكويت بالشوكولاتة، كريمة الزبدة بالشوكولاتة الداكنة",
          "en": "Chocolate sponge, dark chocolate buttercream",
          "es": "Bizcocho de chocolate, crema de mantequilla al chocolate negro"
        }
      },
      {
        "n": {
          "fr": "Tarte au choix",
          "ar": "تارت حسب الاختيار",
          "en": "Tart of your choice",
          "es": "Tarta a elegir"
        },
        "p": 32,
        "d": {
          "fr": "Citron, amandes, finger chocolat ou caramel beurre salé",
          "ar": "ليمون، لوز، فينغر شوكولاتة أو كراميل بالزبدة المملحة",
          "en": "Lemon, almond, chocolate finger or salted caramel",
          "es": "Limón, almendra, finger de chocolate o caramelo salado"
        }
      },
      {
        "n": {
          "fr": "Layer cake",
          "ar": "لاير كيك",
          "en": "Layer cake",
          "es": "Layer cake"
        },
        "p": 42,
        "d": {
          "fr": "Biscuit chiffon garni d'une ganache montée, au choix : praliné, fruits rouges ou chocolat",
          "ar": "بسكويت شيفون بغاناش مخفوق، حسب الاختيار: برالين، فواكه حمراء أو شوكولاتة",
          "en": "Chiffon sponge with whipped ganache: praline, red berries or chocolate",
          "es": "Bizcocho chiffon con ganache montada, a elegir: praliné, frutos rojos o chocolate"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Carotte cake",
          "ar": "كيك الجزر",
          "en": "Carrot cake",
          "es": "Tarta de zanahoria"
        },
        "p": 39,
        "d": {
          "fr": "Génoise aux carottes et fruits secs, fourrée d'une mousse au fromage blanc",
          "ar": "جينواز بالجزر والفواكه الجافة، محشوة بموس الجبن الأبيض",
          "en": "Carrot and dried fruit sponge filled with cream cheese mousse",
          "es": "Bizcocho de zanahoria y frutos secos, relleno de mousse de queso fresco"
        },
        "t": [
          "new"
        ]
      },
      {
        "n": {
          "fr": "Brazilia",
          "ar": "برازيليا",
          "en": "Brazilia",
          "es": "Brazilia"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit amande garni d'une crème au café",
          "ar": "بسكويت اللوز بكريمة القهوة",
          "en": "Almond sponge with coffee cream",
          "es": "Bizcocho de almendra con crema de café"
        }
      },
      {
        "n": {
          "fr": "Forêt noire",
          "ar": "فوريه نوار",
          "en": "Black forest",
          "es": "Selva negra"
        },
        "p": 32,
        "d": {
          "fr": "Génoise au chocolat garnie d'une crème montée vanille",
          "ar": "جينواز الشوكولاتة بكريمة الفانيلا المخفوقة",
          "en": "Chocolate sponge with whipped vanilla cream",
          "es": "Bizcocho de chocolate con crema montada de vainilla"
        }
      },
      {
        "n": {
          "fr": "Opéra",
          "ar": "أوبرا",
          "en": "Opéra",
          "es": "Ópera"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit amande garni d'une ganache au chocolat café",
          "ar": "بسكويت اللوز بغاناش الشوكولاتة والقهوة",
          "en": "Almond sponge with chocolate-coffee ganache",
          "es": "Bizcocho de almendra con ganache de chocolate y café"
        }
      },
      {
        "n": {
          "fr": "Casino de Venise",
          "ar": "كازينو البندقية",
          "en": "Venice casino",
          "es": "Casino de Venecia"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit amande garni d'une crème noisette et caramel",
          "ar": "بسكويت اللوز بكريمة البندق والكراميل",
          "en": "Almond sponge with hazelnut and caramel cream",
          "es": "Bizcocho de almendra con crema de avellana y caramelo"
        }
      },
      {
        "n": {
          "fr": "Dolce late",
          "ar": "دولتشي لاتي",
          "en": "Dolce late",
          "es": "Dolce late"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit amande, crème caramel, glaçage au caramel et éclats d'amande",
          "ar": "بسكويت اللوز، كريمة الكراميل، طبقة كراميل وقطع اللوز",
          "en": "Almond sponge, caramel cream, caramel glaze and almond pieces",
          "es": "Bizcocho de almendra, crema de caramelo, glaseado de caramelo y trozos de almendra"
        }
      },
      {
        "n": {
          "fr": "Royal chocolat",
          "ar": "رويال شوكولا",
          "en": "Royal chocolate",
          "es": "Royal chocolate"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit au chocolat garni d'une ganache chocolatée, glaçage au chocolat",
          "ar": "بسكويت الشوكولاتة بغاناش الشوكولاتة وطبقة شوكولاتة",
          "en": "Chocolate sponge with chocolate ganache and chocolate glaze",
          "es": "Bizcocho de chocolate con ganache de chocolate y glaseado de chocolate"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Fondant gourmet",
          "ar": "فوندان غورميه",
          "en": "Gourmet fondant",
          "es": "Coulant gourmet"
        },
        "p": 45,
        "d": {
          "fr": "Fondant au chocolat accompagné d'une boule de glace vanille",
          "ar": "فوندان الشوكولاتة مع كرة مثلجات الفانيلا",
          "en": "Chocolate fondant with a scoop of vanilla ice cream",
          "es": "Coulant de chocolate acompañado de una bola de helado de vainilla"
        }
      },
      {
        "n": {
          "fr": "Venezia brownie",
          "ar": "براوني فينيسيا",
          "en": "Venezia brownie",
          "es": "Brownie Venezia"
        },
        "p": 45,
        "d": {
          "fr": "Brownie accompagné d'une boule de glace vanille",
          "ar": "براوني مع كرة مثلجات الفانيلا",
          "en": "Brownie with a scoop of vanilla ice cream",
          "es": "Brownie acompañado de una bola de helado de vainilla"
        }
      },
      {
        "n": {
          "fr": "Cheesecake citron",
          "ar": "تشيز كيك بالليمون",
          "en": "Lemon cheesecake",
          "es": "Tarta de queso y limón"
        },
        "p": 32,
        "d": {
          "fr": "Biscuit crumble recouvert d'une crème au fromage blanc",
          "ar": "بسكويت كرامبل بكريمة الجبن الأبيض",
          "en": "Crumble base topped with cream cheese",
          "es": "Base de crumble cubierta con crema de queso fresco"
        }
      },
      {
        "n": {
          "fr": "San Sebastien cake",
          "ar": "كيك سان سيباستيان",
          "en": "San Sebastián cake",
          "es": "Tarta San Sebastián"
        },
        "p": 45,
        "d": {
          "fr": "Une crème au fromage blanc servie avec nutella",
          "ar": "كريمة الجبن الأبيض تُقدّم مع النوتيلا",
          "en": "Cream cheese cake served with Nutella",
          "es": "Crema de queso fresco servida con Nutella"
        }
      },
      {
        "n": {
          "fr": "Mousse tiramisu",
          "ar": "موس تيراميسو",
          "en": "Tiramisu mousse",
          "es": "Mousse de tiramisú"
        },
        "p": 32,
        "d": {
          "fr": "Mousse mascarpone, sirop café et poudre de cacao",
          "ar": "موس المسكربوني، شراب القهوة ومسحوق الكاكاو",
          "en": "Mascarpone mousse, coffee syrup and cocoa powder",
          "es": "Mousse de mascarpone, sirope de café y cacao en polvo"
        }
      },
      {
        "n": {
          "fr": "Salade fraîcheur",
          "ar": "سلطة الفواكه",
          "en": "Fresh fruit salad",
          "es": "Ensalada de frutas"
        },
        "p": 48,
        "d": {
          "fr": "Fruits variés découpés avec une boule de glace au choix",
          "ar": "فواكه متنوعة مع كرة مثلجات حسب الاختيار",
          "en": "Assorted cut fruit with a scoop of ice cream",
          "es": "Frutas variadas troceadas con una bola de helado a elegir"
        },
        "t": [
          "veg"
        ]
      }
    ]
  },
  {
    "id": "jus",
    "ico": "🧃",
    "nom": {
      "fr": "Jus, cocktails & shakes",
      "ar": "العصائر والكوكتيلات",
      "en": "Juices, cocktails & shakes",
      "es": "Zumos, cócteles y batidos"
    },
    "items": [
      {
        "n": {
          "fr": "Jus d'orange pressé",
          "ar": "عصير البرتقال",
          "en": "Fresh orange juice",
          "es": "Zumo de naranja natural"
        },
        "p": 30,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Jus de citron",
          "ar": "عصير الليمون",
          "en": "Lemon juice",
          "es": "Zumo de limón"
        },
        "p": 33,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Jus de carotte à l'orange",
          "ar": "عصير الجزر بالبرتقال",
          "en": "Carrot and orange juice",
          "es": "Zumo de zanahoria y naranja"
        },
        "p": 35,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Citronnade menthe gingembre",
          "ar": "ليموناضة بالنعناع والزنجبيل",
          "en": "Mint and ginger lemonade",
          "es": "Limonada de menta y jengibre"
        },
        "p": 37,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Jus de fruit",
          "ar": "عصير الفواكه",
          "en": "Fruit juice",
          "es": "Zumo de fruta"
        },
        "p": 42,
        "d": {
          "fr": "Un fruit mixé au lait ou à l'orange, selon disponibilité",
          "ar": "فاكهة مخلوطة بالحليب أو البرتقال، حسب التوفر",
          "en": "One fruit blended with milk or orange, subject to availability",
          "es": "Una fruta batida con leche o con naranja, según disponibilidad"
        }
      },
      {
        "n": {
          "fr": "Green",
          "ar": "غرين",
          "en": "Green",
          "es": "Green"
        },
        "p": 44,
        "d": {
          "fr": "Pomme verte, concombre, menthe",
          "ar": "تفاح أخضر، خيار، نعناع",
          "en": "Green apple, cucumber, mint",
          "es": "Manzana verde, pepino, menta"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Vitamin",
          "ar": "فيتامين",
          "en": "Vitamin",
          "es": "Vitamin"
        },
        "p": 39,
        "d": {
          "fr": "Jus d'orange, jus de citron et carotte",
          "ar": "عصير البرتقال، الليمون والجزر",
          "en": "Orange, lemon and carrot juice",
          "es": "Zumo de naranja, zumo de limón y zanahoria"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Ginger",
          "ar": "جينجر",
          "en": "Ginger",
          "es": "Ginger"
        },
        "p": 44,
        "d": {
          "fr": "Jus d'orange, carotte, gingembre",
          "ar": "عصير البرتقال، جزر، زنجبيل",
          "en": "Orange juice, carrot, ginger",
          "es": "Zumo de naranja, zanahoria, jengibre"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Tonic",
          "ar": "تونيك",
          "en": "Tonic",
          "es": "Tonic"
        },
        "p": 44,
        "d": {
          "fr": "Concombre, citron, gingembre, menthe",
          "ar": "خيار، ليمون، زنجبيل، نعناع",
          "en": "Cucumber, lemon, ginger, mint",
          "es": "Pepino, limón, jengibre, menta"
        },
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Mojito",
          "ar": "موخيتو",
          "en": "Mojito",
          "es": "Mojito"
        },
        "p": 49,
        "d": {
          "fr": "Virgin, fraise ou bleu curaçao — soda, jus de citron, sirop de canne, menthe fraîche",
          "ar": "فيرجن، فراولة أو كوراساو الأزرق — مشروب غازي، عصير الليمون، شراب القصب، نعناع طازج",
          "en": "Virgin, strawberry or blue curaçao — soda, lemon juice, cane syrup, fresh mint",
          "es": "Virgin, fresa o curaçao azul — refresco, zumo de limón, sirope de caña, menta fresca"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Venise",
          "ar": "البندقية",
          "en": "Venise",
          "es": "Venecia"
        },
        "p": 48,
        "d": {
          "fr": "Banane, pomme, jus d'orange, sirop de fraise",
          "ar": "موز، تفاح، عصير البرتقال، شراب الفراولة",
          "en": "Banana, apple, orange juice, strawberry syrup",
          "es": "Plátano, manzana, zumo de naranja, sirope de fresa"
        }
      },
      {
        "n": {
          "fr": "Hawaii",
          "ar": "هاواي",
          "en": "Hawaii",
          "es": "Hawái"
        },
        "p": 52,
        "d": {
          "fr": "Fraise, mangue, framboise, jus d'orange",
          "ar": "فراولة، مانجو، توت، عصير البرتقال",
          "en": "Strawberry, mango, raspberry, orange juice",
          "es": "Fresa, mango, frambuesa, zumo de naranja"
        }
      },
      {
        "n": {
          "fr": "Tropical",
          "ar": "تروبيكال",
          "en": "Tropical",
          "es": "Tropical"
        },
        "p": 52,
        "d": {
          "fr": "Ananas, mangue, banane, jus d'orange",
          "ar": "أناناس، مانجو، موز، عصير البرتقال",
          "en": "Pineapple, mango, banana, orange juice",
          "es": "Piña, mango, plátano, zumo de naranja"
        }
      },
      {
        "n": {
          "fr": "Piña colada",
          "ar": "بينا كولادا",
          "en": "Piña colada",
          "es": "Piña colada"
        },
        "p": 52,
        "d": {
          "fr": "Ananas, jus d'ananas, crème de noix de coco",
          "ar": "أناناس، عصير الأناناس، كريمة جوز الهند",
          "en": "Pineapple, pineapple juice, coconut cream",
          "es": "Piña, zumo de piña, crema de coco"
        }
      },
      {
        "n": {
          "fr": "L'île Maurice",
          "ar": "جزيرة موريس",
          "en": "Mauritius",
          "es": "Isla Mauricio"
        },
        "p": 52,
        "d": {
          "fr": "Ananas, kiwi, mangue, jus d'orange",
          "ar": "أناناس، كيوي، مانجو، عصير البرتقال",
          "en": "Pineapple, kiwi, mango, orange juice",
          "es": "Piña, kiwi, mango, zumo de naranja"
        }
      },
      {
        "n": {
          "fr": "L'énergétique",
          "ar": "الطاقة",
          "en": "The energiser",
          "es": "El energético"
        },
        "p": 52,
        "d": {
          "fr": "Lait, avocat, fruits secs, miel",
          "ar": "حليب، أفوكادو، فواكه جافة، عسل",
          "en": "Milk, avocado, dried fruit, honey",
          "es": "Leche, aguacate, frutos secos, miel"
        }
      },
      {
        "n": {
          "fr": "Milk-shake",
          "ar": "ميلك شيك",
          "en": "Milkshake",
          "es": "Batido"
        },
        "p": 52,
        "d": {
          "fr": "Deux boules de glace au choix mixées au lait",
          "ar": "كرتا مثلجات حسب الاختيار مع الحليب",
          "en": "Two scoops of your choice blended with milk",
          "es": "Dos bolas de helado a elegir batidas con leche"
        }
      },
      {
        "n": {
          "fr": "Oreo-shake",
          "ar": "أوريو شيك",
          "en": "Oreo shake",
          "es": "Batido Oreo"
        },
        "p": 55,
        "d": {
          "fr": "Deux boules de crème glacée cookies et vanille mixées aux biscuits Oreo, servies avec chantilly",
          "ar": "كرتا مثلجات كوكيز وفانيلا مع بسكويت أوريو والشانتيي",
          "en": "Two scoops of cookies and vanilla ice cream blended with Oreo biscuits, served with whipped cream",
          "es": "Dos bolas de helado de cookies y vainilla batidas con galletas Oreo, servidas con nata"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Orange-shake",
          "ar": "أورانج شيك",
          "en": "Orange shake",
          "es": "Batido de naranja"
        },
        "p": 52,
        "d": {
          "fr": "Deux boules de sorbets de votre choix mixées à l'orange",
          "ar": "كرتا سوربي حسب الاختيار مع البرتقال",
          "en": "Two sorbet scoops of your choice blended with orange",
          "es": "Dos bolas de sorbete a elegir batidas con naranja"
        }
      },
      {
        "n": {
          "fr": "Smoothie",
          "ar": "سموذي",
          "en": "Smoothie",
          "es": "Smoothie"
        },
        "p": 49,
        "d": {
          "fr": "Deux boules de sorbets mixées à l'eau minérale",
          "ar": "كرتا سوربي مع الماء المعدني",
          "en": "Two sorbet scoops blended with mineral water",
          "es": "Dos bolas de sorbete batidas con agua mineral"
        },
        "t": [
          "veg"
        ]
      }
    ],
    "note": {
      "fr": "Cocktails préparés à base de fruits frais",
      "ar": "الكوكتيلات محضرة من فواكه طازجة",
      "en": "Cocktails made with fresh fruit",
      "es": "Cócteles elaborados con fruta fresca"
    }
  },
  {
    "id": "chaudes",
    "ico": "☕",
    "nom": {
      "fr": "Boissons chaudes",
      "ar": "المشروبات الساخنة",
      "en": "Hot drinks",
      "es": "Bebidas calientes"
    },
    "items": [
      {
        "n": {
          "fr": "Espresso",
          "ar": "إسبريسو",
          "en": "Espresso",
          "es": "Espresso"
        },
        "p": 18
      },
      {
        "n": {
          "fr": "Café crème",
          "ar": "قهوة بالحليب",
          "en": "Café crème",
          "es": "Café con leche"
        },
        "p": 20
      },
      {
        "n": {
          "fr": "Café américain",
          "ar": "قهوة أمريكية",
          "en": "Americano",
          "es": "Café americano"
        },
        "p": 19
      },
      {
        "n": {
          "fr": "Double espresso",
          "ar": "إسبريسو مزدوج",
          "en": "Double espresso",
          "es": "Espresso doble"
        },
        "p": 28
      },
      {
        "n": {
          "fr": "Cappuccino italien",
          "ar": "كابوتشينو إيطالي",
          "en": "Italian cappuccino",
          "es": "Capuchino italiano"
        },
        "p": 26,
        "d": {
          "fr": "Avec mousse de lait",
          "ar": "مع رغوة الحليب",
          "en": "With milk foam",
          "es": "Con espuma de leche"
        },
        "t": [
          "star"
        ]
      },
      {
        "n": {
          "fr": "Frappuccino",
          "ar": "فرابوتشينو",
          "en": "Frappuccino",
          "es": "Frappuccino"
        },
        "p": 26
      },
      {
        "n": {
          "fr": "Chocolat chaud",
          "ar": "شوكولاتة ساخنة",
          "en": "Hot chocolate",
          "es": "Chocolate caliente"
        },
        "p": 28
      },
      {
        "n": {
          "fr": "Café moka",
          "ar": "قهوة موكا",
          "en": "Mocha",
          "es": "Café moca"
        },
        "p": 28,
        "d": {
          "fr": "Chocolat chaud mélangé à un espresso, saupoudré de cacao",
          "ar": "شوكولاتة ساخنة مع إسبريسو ورشة كاكاو",
          "en": "Hot chocolate with espresso, dusted with cocoa",
          "es": "Chocolate caliente con un espresso, espolvoreado con cacao"
        }
      },
      {
        "n": {
          "fr": "Lait",
          "ar": "حليب",
          "en": "Milk",
          "es": "Leche"
        },
        "p": 18,
        "d": {
          "fr": "Chaud ou froid",
          "ar": "ساخن أو بارد",
          "en": "Hot or cold",
          "es": "Caliente o frío"
        }
      },
      {
        "n": {
          "fr": "Thé à la menthe",
          "ar": "أتاي بالنعناع",
          "en": "Mint tea",
          "es": "Té con hierbabuena"
        },
        "p": 20,
        "t": [
          "veg"
        ]
      },
      {
        "n": {
          "fr": "Tea time Tchaba",
          "ar": "شاي تشابا",
          "en": "Tchaba tea time",
          "es": "Té Tchaba"
        },
        "p": 25,
        "d": {
          "fr": "Recettes originales et exclusives de thés et infusions",
          "ar": "وصفات أصيلة وحصرية من الشاي والأعشاب",
          "en": "Original and exclusive teas and infusions",
          "es": "Recetas originales y exclusivas de tés e infusiones"
        }
      },
      {
        "n": {
          "fr": "Ice café",
          "ar": "آيس كافي",
          "en": "Iced coffee",
          "es": "Café helado"
        },
        "p": 26
      },
      {
        "n": {
          "fr": "Chocolat fondu",
          "ar": "شوكولاتة مذابة",
          "en": "Melted chocolate",
          "es": "Chocolate fundido"
        },
        "p": 35
      },
      {
        "n": {
          "fr": "Cappuccino viennois",
          "ar": "كابوتشينو فيينوا",
          "en": "Viennese cappuccino",
          "es": "Capuchino vienés"
        },
        "p": 35,
        "d": {
          "fr": "Servi avec crème chantilly",
          "ar": "يُقدّم مع الشانتيي",
          "en": "Served with whipped cream",
          "es": "Servido con nata montada"
        }
      },
      {
        "n": {
          "fr": "Chocolat viennois",
          "ar": "شوكولاتة فيينوا",
          "en": "Viennese chocolate",
          "es": "Chocolate vienés"
        },
        "p": 32,
        "d": {
          "fr": "Chocolat chaud servi avec crème chantilly",
          "ar": "شوكولاتة ساخنة مع الشانتيي",
          "en": "Hot chocolate served with whipped cream",
          "es": "Chocolate caliente servido con nata montada"
        }
      },
      {
        "n": {
          "fr": "Moka viennois",
          "ar": "موكا فيينوا",
          "en": "Viennese mocha",
          "es": "Moca vienés"
        },
        "p": 32,
        "d": {
          "fr": "Café moka servi avec crème chantilly",
          "ar": "قهوة موكا مع الشانتيي",
          "en": "Mocha served with whipped cream",
          "es": "Café moca servido con nata montada"
        }
      },
      {
        "n": {
          "fr": "La duchesse",
          "ar": "الدوقة",
          "en": "La duchesse",
          "es": "La duquesa"
        },
        "p": 39,
        "d": {
          "fr": "Café espresso servi avec une boule de glace au choix",
          "ar": "إسبريسو مع كرة مثلجات حسب الاختيار",
          "en": "Espresso served with a scoop of ice cream",
          "es": "Café espresso servido con una bola de helado a elegir"
        }
      },
      {
        "n": {
          "fr": "Le montecristo",
          "ar": "مونتيكريستو",
          "en": "Le montecristo",
          "es": "El montecristo"
        },
        "p": 49,
        "d": {
          "fr": "Chocolat chaud servi avec une boule de glace et crème chantilly",
          "ar": "شوكولاتة ساخنة مع كرة مثلجات والشانتيي",
          "en": "Hot chocolate with a scoop of ice cream and whipped cream",
          "es": "Chocolate caliente servido con una bola de helado y nata montada"
        }
      },
      {
        "n": {
          "fr": "Pause gourmande",
          "ar": "استراحة حلوة",
          "en": "Sweet break",
          "es": "Pausa golosa"
        },
        "p": 52,
        "d": {
          "fr": "Une pâtisserie au choix + une boisson chaude au choix (hors spécialités et nouveautés)",
          "ar": "حلوى حسب الاختيار + مشروب ساخن (ما عدا التخصصات والجديد)",
          "en": "A pastry of your choice + a hot drink (specialities and new items excluded)",
          "es": "Una pastelería a elegir + una bebida caliente a elegir (especialidades y novedades excluidas)"
        }
      },
      {
        "n": {
          "fr": "Café gourmand",
          "ar": "قهوة غورماند",
          "en": "Café gourmand",
          "es": "Café goloso"
        },
        "p": 39,
        "d": {
          "fr": "Deux macarons + une boisson chaude au choix (hors spécialités)",
          "ar": "ماكارونان + مشروب ساخن (ما عدا التخصصات)",
          "en": "Two macarons + a hot drink (specialities excluded)",
          "es": "Dos macarons + una bebida caliente a elegir (especialidades excluidas)"
        }
      }
    ],
    "note": {
      "fr": "Servies avec une bouteille d'eau minérale 33 cl",
      "ar": "تُقدّم مع قنينة ماء معدني 33 سل",
      "en": "Served with a 33 cl bottle of mineral water",
      "es": "Servidas con una botella de agua mineral de 33 cl"
    }
  },
  {
    "id": "fraiches",
    "ico": "🧊",
    "nom": {
      "fr": "Boissons fraîches",
      "ar": "المشروبات الباردة",
      "en": "Cold drinks",
      "es": "Bebidas frías"
    },
    "items": [
      {
        "n": {
          "fr": "Sodas",
          "ar": "مشروبات غازية",
          "en": "Sodas",
          "es": "Refrescos"
        },
        "p": 18
      },
      {
        "n": {
          "fr": "Eau plate ou gazeuse 50 cl",
          "ar": "ماء عادي أو غازي 50 سل",
          "en": "Still or sparkling water 50 cl",
          "es": "Agua sin o con gas 50 cl"
        },
        "p": 16
      }
    ]
  }
];
