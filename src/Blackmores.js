const blackmores =[
  {
    name: "Acidophilus Bifidus",
    pricelist: {"90粒装":35.99},
    description: "Keeps the intestinal flora in balance, which plays an important role in our general health and wellbeing.",
    src: require('../assets/Blackmores/Acidophilus-Bifidus.png')
  },
  {
    name: "B12 Rapi-melt™ 1000 mcg",
    pricelist: {"1盒装":19.99},
    description: "Blackmores B12 Rapi-Melt™ 1000 mcg provides ‘body ready B12’ and supports daily energy production.",
    src: require('../assets/Blackmores/B12Rapi-melt.png')
  },
  {
    name: "Bilberry Eye Support",
    pricelist: {"30粒装":20.99},
    description: "Blackmores Bilberry Eye Support is formulated to support eye health.",
    src: require('../assets/Blackmores/BilberryEyeSupport.png')
  },
  {
    name: "Bio ACE® Excell",
    pricelist: {"80粒装":55.49},
    description: "A powerful combination of vitamins, minerals and herbal antioxidants that more effectively combat free radicals than single antioxidants used on their own.",
    src: require('../assets/Blackmores/BioACEExcell.png')
  },
  {
    name: "Bio C® 1000 mg",
    pricelist: {"150粒装":44.99},
    description: "Gentle on the stomach, Blackmores Bio C® 1000mg helps support immune system function.",
    src: require('../assets/Blackmores/BioC1000mg.png')
  },
  {
    name: "Bio C® Chewable 500mg",
    pricelist: {"50粒装":9.99},
    description: "Gentle on the stomach, Blackmores Bio C® Chewable 500mg helps reduce the severity and duration of colds.",
    src: require('../assets/Blackmores/BioCChewable500mg.png')
  },
  {
    name: "Bio C® Powder",
    pricelist: {"125克":29.49},
    description: "Gentle on the stomach, Bio C® Powder can be mixed with fruit juice or water. It can help to reduce the severity and duration of colds, support skin suppleness, promote wound healing and maintain capillary health.",
    src: require('../assets/Blackmores/BioCPowder.png')
  },
  {
    name: "Bio Magnesium",
    pricelist: {"100粒装":33.49},
    description: "Blackmores Bio Magnesium conveniently supports normal muscle function and may help prevent muscle cramps and spasms, in a high strength one-a-day dose.",
    src: require('../assets/Blackmores/BioMagnesium.png')
  },
  {
    name: "Bio Zinc",
    pricelist: {"84粒装":24.99},
    description: "Essential to good health, zinc is important in the proper functioning of the immune system, wound healing and the maintenance healthy skin.",
    src: require('../assets/Blackmores/BioZinc.png')
  },
  {
    name: "Brain Active™",
    pricelist: {"30粒装":27.99},
    description: "It may support alertness and working memory (part of short-term memory), and aid reduced mental fatigue, to help you think on your feet. It is based on over 10 years of research.",
    src: require('../assets/Blackmores/BrainActive.png')
  },
  {
    name: "Celery 3000",
    pricelist: {"50粒装":19.99},
    description: "Blackmores Celery 3000 has anti-inflammatory and analgesic activity, as well as significant diuretic properties to support the relief of mild arthritis and mild gout.",
    src: require('../assets/Blackmores/Celery3000.png')
  },
  {
    name: "Cholesterol Health®",
    pricelist: {"60粒装":36.99},
    description: "Blackmores Cholesterol Health® provides a relevant dose of plant sterols to help maintain blood cholesterol within normal healthy range in healthy people.",
    src: require('../assets/Blackmores/CholesterolHealth.png')
  },
  {
    name: "Cod Liver Oil 1000mg",
    pricelist: {"80粒装":18.49},
    description: "Blackmores Cod Liver Oil 1000mg is a natural source of vitamins A and D and omega-3 fatty acids. Vitamin A helps to support a healthy immune system, and vitamin D is essential for calcium absorption.",
    src: require('../assets/Blackmores/CodLIverOil.png')
  },
  {
    name: "Cold Combat®",
    pricelist: {"60粒装":22.99},
    description: "Blackmores Cold Combat® contains the herb andrographis, traditionally used in Western herbal and traditional Chinese medicine for relief of the symptoms of mild upper respiratory tract infections such as colds.",
    src: require('../assets/Blackmores/Cold-Combat_(60).png')
  },
  {
    name: "Colon Care",
    pricelist: {"90克装":17.99},
    description: "Blackmores Colon Care is a laxative formula with fibre and herbs to assist the functioning of the colon.",
    src: require('../assets/Blackmores/ColonCare.png')
  },
  {
    name: "Conceive Well Men™",
    pricelist: {"28粒装":27.99},
    description: "Blackmores Conceive Well Men™ is scientifically formulated, providing an advanced combination of key nutrients to support sperm health.",
    src: require('../assets/Blackmores/ConceiveWellMen(28).jpg')
  },
  {
    name: "CoQ10 150mg",
    pricelist: {"30粒装":26.99},
    description: "CoQ10 occurs naturally in every cell in the body with high concentrations found in the heart. CoQ10 assists in maintaining heart health, in particular healthy heart function.",
    src: require('../assets/Blackmores/CoQ10150mg.png')
  },
  {
    name: "CoQ10 75 mg",
    pricelist: {"90粒装":39.99},
    description: "CoQ10 is found in every cell in the body with high concentrations in the heart. CoQ10 is involved with the production of energy in the cells that may decrease with exercise and age.",
    src: require('../assets/Blackmores/CoQ1075mg.png')
  },
  {
    name: "Cranberry 15000",
    pricelist: {"60粒装":36.79},
    description: "A concentrated, potent, cranberry extract to promote urinary tract health.",
    src: require('../assets/Blackmores/Cranberry15000.png')
  },
  {
    name: "Curcumin Active + Boswellia",
    pricelist: {"60粒装":49.99},
    description: "Help relieve inflammation, and reduce joint stiffness and joint pain associated with mild osteoarthritis within 7 days*. It can be taken every day and in conjunction with glucosamine and chondroitin. ",
    src: require('../assets/Blackmores/CurcuminActiveplusBoswelliathumb.png')
  },
  {
    name: "Digestive Bitters",
    pricelist: {"100毫升装":19.99},
    description: "Blackmores Digestive Bitters is a combination of ingredients traditionally used in Western herbal medicine to help maintain healthy digestive function and to help provide relief of indigestion, bloating, flatulence and loss of appetite.",
    src: require('../assets/Blackmores/DigestiveBitters.png')
  },
  {
    name: "Echinacea ACE + Zinc",
    pricelist: {"30粒装":15.99,"60粒装":27.49},
    description: "Blackmores Echinacea ACE + Zinc is a daily supplement for regular use that combines echinacea with antioxidant nutrients to support the immune system. Echinacea and vitamin C may reduce the severity and duration of colds.",
    src: require('../assets/Blackmores/EchinaceaZinc30.png')
  },
  {
    name: "Echinacea Forte",
    pricelist: {"40粒装":19.49,"150粒装":52.99},
    description: "Blackmores Echinacea Forte is a high strength echinacea supplement. Echinacea has traditionally been used in western herbal medicine for the relief of sore throat and cough associated with the common cold and flu.",
    src: require('../assets/Blackmores/Echinacea-Forte-(40).png')
  },
  {
    name: "Evening Primrose Oil",
    pricelist: {"190粒装":39.99},
    description: "Blackmores Evening Primrose Oil 1 g contains cold-pressed EPO. EPO is a natural source of the important omega-6 fatty acid gamma-linolenic acid (GLA). ",
    src: require('../assets/Blackmores/EPO-(190).png')
  },
  {
    name: "Executive B Stress Formula",
    pricelist: {"28粒装":15.49,"60粒装":29.99,"175粒装":64.99},
    description: "Blackmores Executive B Stress Formula is a combination of ingredients which are beneficial in times of ongoing stress.",
    src: require('../assets/Blackmores/Exec-B-(62).png')
  },
  {
    name: "Fish Oil 1000",
    pricelist: {"200粒装":22.99,"400粒装":39.99},
    description: "A high quality source of omega-3 to support daily wellbeing. Helps maintain normal heart, brain and eye health and promote optimal wellbeing. Mercury tested and developed without the use of artificial surfactants (polysorbates).",
    src: require('../assets/Blackmores/Fish-Oil-1000-(200).png')
  },
  {
    name: "Flaxseed Oil",
    pricelist: {"100粒装":21.99},
    description: "Blackmores Flaxeed Oil is a source of beneficial omega-3, -6, and -9 fatty acids, which are important for healthy skin and hair. It may have an anti-inflammatory action and may help maintain healthy heart function. Halal Certified.",
    src: require('../assets/Blackmores/Flaxeed-Oil-(100).png')
  },
  {
    name: "Folate",
    pricelist: {"90粒装":8.99},
    description: "Blackmores Folate is a source of folic acid which, if taken daily for one month before conception and during pregnancy, may reduce the risk of birth defects of the brain and/or spinal cord.",
    src: require('../assets/Blackmores/Folate-(60).png')
  },
  {
    name: "Ginkgo Brahmi",
    pricelist: {"40粒装":30.49},
    description: "Blackmores Ginkgo Brahmi is a source of traditionally used herbs in Ayurvedic medicine to improve memory and mental capacity.",
    src: require('../assets/Blackmores/GinkgoBrahmi_40.png')
  },
  {
    name: "Ginkgoforte®",
    pricelist: {"80粒装":37.49},
    description: "Helps you to enhance your working memory and thought processes. Ginkgo has been shown to increase blood flow and so can increase tissue nutrition.",
    src: require('../assets/Blackmores/GinkgoForte-(40).png')
  },
  {
    name: "Glucosamine Sulfate Complex 1000",
    pricelist: {"300粒装":69.99},
    description: "Blackmores Glucosamine Sulfate Complex 1000 may provide symptomatic relief of osteoarthritis.",
    src: require('../assets/Blackmores/Glucosamine-1000-Vege-(200).png')
  },
  {
    name: "Grape Seed Forte",
    pricelist: {"30粒装":37.99},
    description: "Blackmores Grape Seed Forte is a herbal antioxidant, free radical scavenger and rich source of the plant flavonoids oligomeric proanthocyanidins (OPCs). OPCs help maintain elastin in the skin.",
    src: require('../assets/Blackmores/GrapeSeedForte-(30).png')
  },
  {
    name: "I-Folic™",
    pricelist: {"150粒装":21.49},
    description: "Blackmores I-Folic™ is a combination of iodine and folic acid, both important preconception & pregnancy nutrients.",
    src: require('../assets/Blackmores/iFOlic.png')
  },
  {
    name: "Insolar®",
    pricelist: {"60粒装":15.99},
    description: "Blackmores Insolar® is patent protected and specifically formulated, to support DNA repair  and support skin health.",
    src: require('../assets/Blackmores/Insolar-(60).png')
  },
  {
    name: "Joint Formula Advanced",
    pricelist: {"60粒装":49.99,"120粒装":79.99},
    description: "Two tablets provide a daily dose of glucosamine sulfate and chondroitin. Each tablet is coated to help ease swallowing.",
    src: require('../assets/Blackmores/Joint-Formula-Advanced-(60).png')
  },
  {
    name: "Lecithin 1200",
    pricelist: {"160粒装":33.99},
    description: "Blackmores Lecithin 1200 is derived from soybeans and helps support normal liver function and aids normal fat metabolism.",
    src: require('../assets/Blackmores/Lecithin1200thumb.png')
  },
  {
    name: "Lutein Defence™",
    pricelist: {"60粒装":39.99},
    description: "Blackmores Lutein Defence™ is an antioxidant formula containing lutein and zeaxanthin that may help to defend against free radical damage in the macula.",
    src: require('../assets/Blackmores/Lutein-Defence-(60).png')
  },
  {
    name: "Lyp-Sine®",
    pricelist: {"30粒装":12.49,"100粒装":34.99},
    description: "Blackmores Lyp-Sine® is a dose of the amino acid lysine, which can help reduce the number of outbreaks of cold sores, helps relieve symptoms and helps reduce healing time of lesions.",
    src: require('../assets/Blackmores/Lyp-Sine-(30).png')
  },
  {
    name: "Macu-Vision®",
    pricelist: {"90粒装":44.99,"150粒装":59.99},
    description: "Blackmores Macu-Vision® is a source of antioxidant nutrients. It helps defend against free radical damage in the macular region of the retina and the lens of the eye.",
    src: require('../assets/Blackmores/Macu-Vision-(90).png')
  },
  {
    name: "Macu-Vision® Plus",
    pricelist: {"60粒装":39.99,"120粒装":59.99},
    description: "MacuVision® Plus is a vitamin, mineral and antioxidant eyes formula that provides nutrients such as lutein and zeaxanthin that are deposited in the macula. It contains antioxidants that help protect against free radical damage in the retina. ",
    src: require('../assets/Blackmores/Macu-Vision-Plus-(60).png')
  },
  {
    name: "MagMin®",
    pricelist: {"50粒装":15.79,"100粒装":26.49,"250粒装":49.99},
    description: "Blackmores MagMin® is a highly bioavailable magnesium supplement suitable for the treatment and prevention of magnesium deficiencies.  Blackmores MagMin® may assist with the reduction of tiredness and fatigue due to inadequate dietary intake.  ",
    src: require('../assets/Blackmores/Magmin-(100).png')
  },
  {
    name: "Milk Thistle",
    pricelist: {"42粒装":20.49},
    description: "Blackmores Milk thistle aids normal liver function and may help protect liver cells. It has antioxidant activity. It also supports regeneration of liver cells. ",
    src: require('../assets/Blackmores/Milk-Thistle-(42).png')
  },
  {
    name: "Natural E 1000IU",
    pricelist: {"30粒装":20.49,"100粒装":61.49},
    description: "Natural Vitamin E 1000IU helps maintain heart health as it is an antioxidant and free radical scavenger.",
    src: require('../assets/Blackmores/Natural-E-1000-(100).png')
  },
  {
    name: "Natural E 250IU",
    pricelist: {"50粒装":17.49},
    description: "Blackmores Natural E 250 IU is a source of vitamin E which is an antioxidant and free radical scavenger. Vitamin E also helps reduce oxidation of LDL-cholesterol.",
    src: require('../assets/Blackmores/Natural-E-250-(50).png')
  },
  {
    name: "Natural E 500IU",
    pricelist: {"150粒装":50.99},
    description: "Blackmores Natural E 500IU is a source of vitamin E which is an antioxidant and free radical scavenger. Vitamin E also reduces oxidation of LDL-cholesterol. ",
    src: require('../assets/Blackmores/Natural-E-500IU-(150).png')
  },
  {
    name: "Odourless Fish Oil 1000",
    pricelist: {"200粒装":26.49,"400粒装":44.99},
    description: "A high quality source of odourless omega-3 for daily wellbeing. Helps maintain normal heart, brain and eye health and support daily wellbeing. No fishy aftertaste, developed without the use of artificial surfactants.",
    src: require('../assets/Blackmores/Odourless-Fish-Oil-(200).png')
  },
  {
    name: "Odourless Fish Oil Mini Caps",
    pricelist: {"200粒装":26.49,"400粒装":44.99},
    description: "Blackmores Odourless Fish Oil Mini Caps provide the same strength of omega-3s as a standard fish oil 1000 g but in a half sized capsule. Plus they are developed without the use of artificial surfactants (polysorbates), so you don’t get the fishy aftertaste.",
    src: require('../assets/Blackmores/Odourless-Fish-Oil-Mini-(200).png')
  },
  {
    name: "Odourless Garlic",
    pricelist: {"200粒装":18.49},
    description: "Blackmores Odourless Garlic is a pleasant-tasting garlic supplement with spearmint flavour to minimise odour. It also contains parsley to help mask the characteristic odour of garlic. Halal certified.",
    src: require('../assets/Blackmores/Odourless-Garlic-(200).png')
  },
  {
    name: "Omega Brain",
    pricelist: {"60粒装":32.59},
    description: "Blackmores Omega Brain delivers concentrated omega-3 fatty acids, which are necessary for normal brain structure, with a high level of DHA. DHA assists in the transmission of signals between brain cells. Maintaining optimal DHA levels helps to maintain mental and cognitive function.",
    src: require('../assets/Blackmores/Omega-Brain-(60).png')
  },
  {
    name: "Omega Daily",
    pricelist: {"90粒装":31.99},
    description: "Contains 2 x the omega-3 fatty acids of a standard fish oil capsule for daily wellbeing in the same sized capsule – making it more convenient to get your daily omega-3s.",
    src: require('../assets/Blackmores/Omega-Daily-(90).png')
  },
  {
    name: "Omega Triple",
    pricelist: {"150粒装":52.99},
    description: "A high quality concentrated source of omega-3s to support brain and heart health. It has 3 x the omega-3s of a standard 1,000 mg fish oil capsule.",
    src: require('../assets/Blackmores/Omega-Triple-(150).png')
  }
];

module.exports = {
    products: blackmores
  };
