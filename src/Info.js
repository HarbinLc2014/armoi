const products =[
  {
    name: "swisse women's ultivite tablets",
    pricelist: {"30粒装":19.99, "60粒装":36.95, "120粒装":69.95},
    description: "Swisse Women’s Ultivite is a premium quality formula containing 50 vitamins, minerals, antioxidants and herbs tailored for women to help provide support during stress and assist with energy production, stamina and vitality. Swisse Women’s Ultivite has been formulated based on scientific evidence to provide nutritional support for a busy, stressful lifestyle.",
    src: require('../assets/Product/swissewomentablets.png')
  },
  {
    name:"SWISSE WOMEN'S POWER ULTIVITE",
    pricelist: {"40粒装":33.95},
    description: "Swisse Women's Power Ultivite is a premium quality, advanced multivitamin containing 29 vitamins, minerals, antioxidants and herbs, to help fill nutritional gaps, support energy production and assist with healthy mental performance.",
    src: require('../assets/Product/swissewomenpowertablets.png')
  },
  {
    name:"SWISSE WOMEN'S ULTIVITE 50+",
    pricelist: {"60粒装":44.95, "90粒装":59.95},
    description: "Swisse Women’s Ultivite 50+ contains 43 premium quality vitamins, minerals, antioxidants and herbs to help support women aged 50+ meet their nutritional needs and maintain general wellbeing.",
    src: require('../assets/Product/swissewomenultivite.png')
  },
  {
    name:"SWISSE WOMEN'S ULTIVITE 65+",
    pricelist: {"60粒装":44.95},
    description: "Swisse Women’s Ultivite 65+ contains over 40 premium quality vitamins, minerals, antioxidants and herbs to help meet the nutritional needs and maintain general wellbeing of women aged 65+.",
    src: require('../assets/Product/swissewomenultivite2.png')
  },
  {
    name:"SWISSE PREGNANCY + ULTIVITE",
    pricelist: {"60粒装":29.95,"90粒装":34.95},
    description: "Swisse Pregnancy + Ultivite is a premium quality formula containing 22 vitamins, minerals, antioxidants, and omega-3 fatty acids to provide nutritional support for the mother and her developing baby, pre-conception, during pregnancy and whilst breastfeeding.",
    src: require('../assets/Product/swissepregnancyultivite.png')
  },
  {
    name:"SWISSE WOMEN'S TEENAGE ULTIVITE",
    pricelist: {"60粒装":29.99},
    description: "Swisse Teenage Women's Ultivite is a premium quality formula containing 38 vitamins, minerals, antioxidants and herbs tailored for teenage girls to support energy production, healthy skin, immune function and provide support during stress.",
    src: require('../assets/Product/swissewomenteenageultivite.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH ORGANIC VITEX",
    pricelist: {"60粒装":27.99},
    description: "Swisse Ultiboost High Strength Organic Vitex is a premium quality, high strength formula to support female reproductive health",
    src: require('../assets/Product/organicvitex.png')
  },
  {
    name:"SWISSE ULTIBOOST IRON",
    pricelist: {"30粒装":11.95},
    description: "Swisse Ultiboost Iron is a premium quality formula to help maintain healthy blood and assist in the management of dietary iron deficiency.",
    src: require('../assets/Product/iron.png')
  },
  {
    name:"SWISSE ULTIBOOST EVENING PRIMROSE OIL",
    pricelist: {"200粒装":45.99},
    description: "Swisse Ultiboost Evening Primrose Oil is a premium quality formula to provide premenstrual support for women, help maintain healthy skin and support general health and wellbeing.",
    src: require('../assets/Product/eveningpromise.png')
  },
  {
    name:"SWISSE MENOPAUSE BALANCE",
    pricelist: {"60粒装":39.99},
    description: "Swisse Ultiboost Menopause Balance is a premium quality, comprehensive formula with nutrients and herbs to help reduce symptoms such as hot flushes, night sweats, trouble sleeping and nervous irritability when associated with menopause.",
    src: require('../assets/Product/menopausebalance.png')
  },
  {
    name:"SWISSE MEN'S ULTIVITE TABLETS",
    pricelist: {"30粒装":19.99,"60粒装":36.95,"120粒装":69.95},
    description: "Swisse Men’s Ultivite is a premium quality formula containing 53 vitamins, minerals, antioxidants and herbs tailored for men to help provide support during stress, assist with energy production, stamina and vitality and contribute to healthy mental performance.",
    src: require('../assets/Product/menultivite.png')
  },
  {
    name:"SWISSE MEN'S POWER ULTIVITE",
    pricelist: {"40粒装":33.95},
    description: "Swisse Men's Power Ultivite is a premium quality, advanced multivitamin containing 30 vitamins, minerals antioxidants and herbs, to help fill nutritional gaps, support energy production and assist with healthy mental performance.",
    src: require('../assets/Product/menpowerultivite.png')
  },
  {
    name:"SWISSE MEN'S ULTIVITE 50+",
    pricelist: {"60粒装":44.95,"90粒装":59.95},
    description: "Swisse Men's Ultivite 50+ contains 40 premium quality vitamins, minerals, antioxidants and herbs to help support men aged 50+ meet their nutritional needs and maintain general wellbeing.",
    src: require('../assets/Product/menultivite2.png')
  },
  {
    name:"SWISSE MEN'S ULTIVITE 65+",
    pricelist: {"60粒装":44.95},
    description: "Swisse Men's Ultivite 65+ contains over 40 premium quality vitamins, minerals, antioxidants and herbs to help support men aged 65+ meet their nutritional needs and maintain general wellbeing.",
    src: require('../assets/Product/menultivite3.png')
  },
  {
    name:"SWISSE MEN'S TEENAGE ULTIVITE",
    pricelist: {"60粒装":29.99},
    description: "Swisse Teenage Men's Ultivite is a premium quality formula containing 36 vitamins, minerals, antioxidants and herbs tailored for teenage boys to support energy production, healthy skin, immune function and provide support during stress.",
    src: require('../assets/Product/menteenage.png')
  },
  {
    name:"SWISSE ULTIBOOST PROSTATE",
    pricelist: {"50粒装":42.99,"90粒装":61.99},
    description: "Swisse Ultiboost Prostate is a premium quality formula containing vitamins, minerals and herbs to support healthy prostate function.",
    src: require('../assets/Product/prostate.png')
  },
  {
    name:"SWISSE ULTIBOOST BLADDER",
    pricelist: {"60粒装":39.99},
    description: "Swisse Ultiboost Bladder is a premium quality formula containing a clinically trialled cranberry powder to support healthy bladder function and help relieve lower urinary tract symptoms.",
    src: require('../assets/Product/bladder.png')
  },
  {
    name:"SWISSE ULTIBOOST GRAPE SEED",
    pricelist: {"60粒装":24.99,"180粒装":44.99,"300粒装":59.99},
    description: "Swisse Ultiboost Grape Seed is a premium quality formula to support collagen formation, provide antioxidant support and help relieve swelling of the legs.",
    src: require('../assets/Product/grapeseed.png')
  },
  {
    name:"SWISSE ULTIBOOST HAIR SKIN NAILS LIQUID",
    pricelist: {"500毫升":47.99},
    description: "Swisse Ultiboost Hair Skin Nails liquid is a great tasting premium quality formula to assist collagen production and provide essential nutrients to support healthy hair, skin and nails.",
    src: require('../assets/Product/hairskinnail.png')
  },
  {
    name:"SWISSE ULTIBOOST HAIR SKIN NAILS+",
    pricelist: {"60粒装":26.99,"100粒装":32.99,"280粒装":59.99},
    description: "Swisse Ultiboost Hair Skin Nails+ is a premium quality beauty formula with vitamins and minerals specifically formulated to support collagen production and assist in the maintenance of glossy hair, radiant skin and healthy nails.",
    src: require('../assets/Product/hairskinnailtab.png')
  },
  {
    name:"SWISSE ULTIBOOST HAIR NUTRITION FOR WOMEN",
    pricelist: {"60粒装":29.99},
    description: "Swisse Ultiboost Hair Nutrition for Women is a premium quality beauty formula that helps support hair growth and strength from within for healthy, lush hair.",
    src: require('../assets/Product/hairwomen.png')
  },
  {
    name:"SWISSE ULTIBOOST HAIR NUTRITION FOR MEN",
    pricelist: {"60粒装":29.99},
    description: "Swisse Ultiboost Hair Nutrition for Men is a premium quality formula with a combination of nutrients and herbs to help support healthy hair growth, and maintain scalp and hair follicle health.",
    src: require('../assets/Product/hairmen.png')
  },
  {
    name:"SWISSE ULTIBOOST RADIANT SKIN",
    pricelist: {"60粒装":29.99},
    description: "Swisse Ultiboost Radiant Skin is a premium quality beauty formula that helps support a healthy, glowing complexion, whilst maintaining healthy skin barrier function and antioxidant activity.",
    src: require('../assets/Product/radiantskin.png')
  },
  {
    name:"SWISSE ULTIBOOST AGE PROTECT",
    pricelist: {"60粒装":29.99},
    description: "Swisse Ultiboost Age Protect is a premium quality beauty formula that helps support skin firmness and elasticity, collagen formation and integrity, and helps protect against free radical damage.",
    src: require('../assets/Product/ageprotect.png')
  },
  {
    name:"SWISSE KIDS MULTI",
    pricelist: {"50粒装":24.99},
    description: "Swisse Kids Multi is a premium quality, 99.9% sugar free, tooth friendly formula, containing 22 vitamins, minerals and herbs to help support nutritional needs and healthy growth and development in children.",
    src: require('../assets/Product/kidmulti.png')
  },
  {
    name:"SWISSE KIDS PROBIOTIC",
    pricelist: {"40粒装":24.99},
    description: "Swisse Kids Probiotic is a premium quality, 99.5% sugar free, tooth friendly formula containing a combination of probiotic strains to support gastrointestinal health and healthy immune function in children.",
    src: require('../assets/Product/kidprobiotic.png')
  },
  {
    name:"SWISSE KIDS FISH OIL",
    pricelist: {"50粒装":24.99},
    description: "Swisse Kids Fish Oil is a premium quality, sugar free, tooth friendly formula containing the omega-3 fatty acids EPA and DHA, along with iodine to support cognitive health and brain function as well as eye development in children.",
    src: require('../assets/Product/kidfishoil.png')
  },
  {
    name:"SWISSE KIDS CALCIUM + D3",
    pricelist: {"50粒装":24.99},
    description: "Swisse Kids Calcium + D3 is a premium quality, sugar free, tooth friendly formula to support healthy growth and development of bones and teeth in children.",
    src: require('../assets/Product/kidcalcium.png')
  },
  {
    name:"SWISSE KIDS VITAMIN C + ZINC",
    pricelist: {"50粒装":24.99},
    description: "Swisse Kids Vitamin C + Zinc is a premium quality, 99.9% sugar free, tooth friendly formula to support immune health and teeth and gum development in children.",
    src: require('../assets/Product/kidvitaminc.png')
  },
  {
    name:"SWISSE KIDS BRAIN DHA",
    pricelist: {"30粒装":24.99},
    description: "Swisse Kids Brain DHA is a premium quality, sugar free, tooth friendly formula containing the omega-3 fatty acid DHA to help support brain function, cognitive health and eye health in children.",
    src: require('../assets/Product/kidbraindha.png')
  },
  {
    name:"SWISSE CHILDREN'S ULTIVITE",
    pricelist: {"60粒装":11.95,"120粒装":19.99},
    description: "Swisse Children's Ultivite is a premium quality, great tasting children's multivitamin, containing 21 vitamins, minerals, antioxidants and herbs to help support nutritional needs, cognitive development and immune health in growing children.",
    src: require('../assets/Product/kidultivite.png')
  },
  {
    name:"SWISSE CHILDREN'S SMART FISH OIL",
    pricelist: {"90粒装":17.95},
    description: "Swisse Ultiboost Children's Smart Fish Oil contains a premium source of omega-3 to help support a child's brain and eye development and help with learning and behaviour.",
    src: require('../assets/Product/childfishoil.png')
  },
  {
    name:"SWISSE ULTIBOOST DEEP SEA KRILL OIL 500MG",
    pricelist: {"30粒装":29.95,"60粒装":45.95,"120粒装":73.95},
    description: "Swisse Ultiboost Deep Sea Krill Oil is a premium quality, sustainably sourced formula to assist with the relief of mild arthritis symptoms and help support heart, brain and eye health.",
    src: require('../assets/Product/krilloil.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH DEEP SEA KRILL OIL 1000MG",
    pricelist: {"30粒装":45.95},
    description: "Swisse Ultiboost High Strength Deep Sea Krill Oil is a premium quality, sustainably sourced formula to assist with the relief of mild arthritis symptoms and help support heart, brain and eye health.",
    src: require('../assets/Product/highkrilloil.png')
  },
  {
    name:"SWISSE ULTIBOOST SUPER STRENGTH DEEP SEA KRILL OIL 1500MG",
    pricelist: {"30粒装":59.99},
    description: "Swisse Ultiboost Super Strength Deep Sea Krill Oil is a premium quality, sustainably sourced formula to assist with the relief of mild arthritis symptoms and help support heart, brain and eye health.",
    src: require('../assets/Product/superkrilloil.png')
  },
  {
    name:"SWISSE ULTIBOOST 4 X STRENGTH WILD FISH OIL CONCENTRATE",
    pricelist: {"60粒装":34.99},
    description: "Swisse Ultiboost Odourless 4 X Strength Wild Fish Oil Concentrate is a premium quality, sustainably sourced formula containing high potency omega-3 fatty acids EPA and DHA to provide anti-inflammatory and joint health support, as well as maintain heart, brain and eye health.",
    src: require('../assets/Product/wildfishoil.png')
  },
  {
    name:"SWISSE ULTIBOOST ODOURLESS WILD FISH OIL 1000MG",
    pricelist: {"200粒装":19.95, "400粒装":34.95},
    description: "Swisse Ultiboost Odourless Wild Fish Oil is a premium quality, sustainably sourced formula containing the omega-3 fatty acids EPA and DHA to support heart, brain, eye and joint health, as well as assist a healthy nervous system and mood balance.",
    src: require('../assets/Product/odwildfishoil.png')
  },
  {
    name:"SWISSE ULTIBOOST ODOURLESS HIGH STRENGTH WILD FISH OIL 1500MG",
    pricelist: {"200粒装":24.49, "400粒装":39.95},
    description: "Swisse Ultiboost Odourless High Strength Wild Fish Oil is a premium quality, sustainably sourced formula containing the omega-3 fatty acids EPA and DHA to support heart, brain, eye and joint health, as well as assist a healthy nervous system and mood balance.",
    src: require('../assets/Product/highfishoil.png')
  },
  {
    name:"SWISSE ULTIBOOST IMMUNE",
    pricelist: {"60粒装":19.95},
    description: "Swisse Ultiboost Immune is a premium quality formula containing vitamins, minerals and herbs to help maintain healthy immune function and provide symptomatic relief from cold symptoms.",
    src: require('../assets/Product/immune.png')
  },
  {
    name:"SWISSE ULTIBOOST VITAMIN C + MANUKA HONEY",
    pricelist: {"120粒装":32.99},
    description: "Swisse Ultiboost Vitamin C + Manuka Honey is a premium quality, great tasting formula containing vitamin C and New Zealand Manuka honey to help reduce the severity and duration of cold symptoms, support immune health and maintain healthy antioxidant activity.",
    src: require('../assets/Product/vitaminc.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH VITAMIN C EFFERVESCENT",
    pricelist: {"60粒装":27.95},
    description: "Swisse High Strength Vitamin C Effervescent is a premium quality, great tasting effervescent formula containing vitamin C to support immune function, help reduce the severity and duration of cold symptoms, maintain skin health and provide healthy antioxidant activity.",
    src: require('../assets/Product/ultivitaminc.png')
  },
  {
    name:"SWISSE ULTIBOOST ZINC+",
    pricelist: {"60粒装":15.95},
    description: "Swisse Ultiboost Zinc + is a premium quality, comprehensive formula to support immune function, healthy skin and assist reproductive health.",
    src: require('../assets/Product/zinc.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH C",
    pricelist: {"150粒装":39.99},
    description: "Swisse Ultiboost High Strength C is a premium quality formula containing a non-acidic form of vitamin C (calcium ascorbate) to support immune function, help reduce the severity and duration of cold symptoms, maintain skin health and support healthy antioxidant activity.",
    src: require('../assets/Product/immunehighstrength.png')
  },
  {
    name:"SWISSE ULTIBOOST VITAMIN C CHEWABLE",
    pricelist: {"310粒装":24.99},
    description: "Swisse Ultiboost Vitamin C Chewable is a premium quality, great tasting formula to help reduce the severity and duration of cold symptoms, support healthy immune function and maintain healthy antioxidant activity.",
    src: require('../assets/Product/immunevitaminc.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH VITAMIN B12",
    pricelist: {"60粒装":17.99},
    description: "Swisse Ultiboost High Strength Vitamin B12 is a premium quality formula to help support energy production, healthy red blood cell formation and brain function.",
    src: require('../assets/Product/energyvitaminb12.png')
  },
  {
    name:"SWISSE ULTIBOOST MEGA B+",
    pricelist: {"60粒装":40.95},
    description: "Swisse Ultiboost Mega B + is a premium quality formula containing vitamins, minerals and antioxidants, to help support the body during times of stress, assist energy production and help reduce fatigue.",
    src: require('../assets/Product/megab+.png')
  },
  {
    name:"SWISSE ULTIBOOST INNER BALANCE PROBIOTIC",
    pricelist: {"30粒装":28.95,"60粒装":63.95},
    description: "Swisse Ultiboost Inner Balance contains premium quality probiotic organisms to help support intestinal health, digestive function and inner wellbeing.",
    src: require('../assets/Product/probiotic.png')
  },
  {
    name:"SWISSE ULTIBOOST INNER BALANCE 100B",
    pricelist: {"40粒装":39.95},
    description: "Swisse Ultiboost Inner Balance Probiotic 100 Billion is a premium quality, super strength probiotic formula to help support intestinal and digestive health as well as a healthy immune system.",
    src: require('../assets/Product/ultiprobiotic.png')
  },
  {
    name:"SWISSE ULTIBOOST PROBIOTIC SHELF STABLE 35B",
    pricelist: {"30粒装":39.99},
    description: "Swisse Ultiboost Inner Balance Probiotic 35 Billion is a premium quality, fridge free probiotic formula to help support intestinal and digestive health as well as a healthy immune system.",
    src: require('../assets/Product/stableprobiotic.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH MILK THISTLE",
    pricelist: {"60粒装":34.99},
    description: "Swisse Ultiboost High Strength Milk Thistle is a premium quality high strength formula to support liver regeneration and detoxification.",
    src: require('../assets/Product/milkdigestiondetox.png')
  },
  {
    name:"SWISSE ULTIBOOST LIVER DETOX",
    pricelist: {"60粒装":20.99,"120粒装":39.99,"200粒装":43.95},
    description: "Swisse Ultiboost Liver Detox is a premium quality formula containing herbs traditionally used to help support liver function and provide relief from indigestion and bloating.",
    src: require('../assets/Product/digestdetox.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH GLOBE ARTICHOKE",
    pricelist: {"60粒装":29.99},
    description: "Swisse Ultiboost High Strength Globe Artichoke is a premium quality formula to help relieve bloating and aid digestion.",
    src: require('../assets/Product/artichokedigestdetox.png')
  },
  {
    name:"SWISSE ULTIBOOST HUNGER CONTROL",
    pricelist: {"30粒装":38.95,"50粒装":46.45},
    description: "Swisse Ultiboost Hunger Control is a premium quality formula containing the key ingredient, Caralluma fimbriata, to help reduce hunger levels.",
    src: require('../assets/Product/hungercontrol.png')
  },
  {
    name:"SWISSE ULTIBOOST LECITHIN",
    pricelist: {"150粒装":41.99,"300粒装":55.99},
    description: "Swisse Ultiboost Lecithin is a premium quality formula to support liver health and fat metabolism.",
    src: require('../assets/Product/lecithin.png')
  },
  {
    name:"SWISSE ULTIBOOST RELAX & SLEEP",
    pricelist: {"60粒装":32.99},
    description: "Swisse Ultiboost Relax & Sleep is a premium quality formula to help relieve nervous tension, restlessness, provide relief from mild symptoms of mental stress and assist with a natural restful sleep.",
    src: require('../assets/Product/relaxsleep.png')
  },
  {
    name:"SWISSE ULTIBOOST HIGH STRENGTH VALERIAN",
    pricelist: {"60粒装":41.99},
    description: "Swisse Ultiboost High Strength Valerian is a premium quality formula to help support restful sleep and help relieve nervous tension.",
    src: require('../assets/Product/highrelaxsleep.png')
  },
  {
    name:"SWISSE ULTIBOOST SLEEP",
    pricelist: {"60粒装":26.99,"100粒装":43.99,"200粒装":55.99},
    description: "Swisse Ultiboost Sleep is a premium quality formula containing magnesium and herbs, including valerian, which helps to relieve nervous tension and assist natural, restful sleep.",
    src: require('../assets/Product/sleep.png')
  },
  {
    name:"SWISSE ULTIBOOST MOOD",
    pricelist: {"50粒装":33.95,"100粒装":54.95},
    description: "Swisse Ultiboost Mood is a premium quality formula to help relieve restlessness, nervousness and support healthy mood balance.",
    src: require('../assets/Product/mood.png')
  },
  {
    name:"SWISSE ULTIBOOST CALCIUM + VITAMIN D",
    pricelist: {"90粒装":17.99,"150粒装":26.99},
    description: "Swisse Ultiboost Calcium + Vitamin D is a premium quality formula to help support healthy bones and teeth and provide a source of calcium which may assist in the prevention and treatment of osteoporosis.",
    src: require('../assets/Product/calciumvitamind.png')
  },
  {
    name:"SWISSE ULTIBOOST MILK CALCIUM",
    pricelist: {"90粒装":31.99},
    description: "Swisse Ultiboost Milk Calcium is a premium quality formula to help support healthy bones and teeth and promote calcium absorption.",
    src: require('../assets/Product/milkcalcium.png')
  }
];

module.exports = {
  products: products
};
