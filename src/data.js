const tableData = [
  {
    Name: "Tony Smith",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Chess",
    Bought: true,
    "Bank Balance": 2397,
    Rating: 2,
    "Total Winnings": 569571,
    Jan: 38031,
    Feb: 49473,
    Mar: 68014,
    Apr: 10370,
    May: 37787,
    Jun: 71057,
    Jul: 71433,
    Aug: 56831,
    Sep: 52180,
    Oct: 18825,
    Nov: 9154,
    Dec: 86416
  },
  {
    Name: "Andrew Connell",
    Language: "Swedish",
    Country: "Sweden",
    "Game Name": "Bul",
    Bought: true,
    "Bank Balance": 12749,
    Rating: 3,
    "Total Winnings": 481734,
    Jan: 17697,
    Feb: 2324,
    Mar: 93400,
    Apr: 65628,
    May: 40729,
    Jun: 16473,
    Jul: 4900,
    Aug: 16717,
    Sep: 93218,
    Oct: 23786,
    Nov: 23476,
    Dec: 83386
  },
  {
    Name: "Kevin Flanagan",
    Language: "Spanish",
    Country: "Uruguay",
    "Game Name": "Rithmomachy",
    Bought: false,
    "Bank Balance": 95078,
    Rating: 0,
    "Total Winnings": 747956,
    Jan: 54892,
    Feb: 57907,
    Mar: 96247,
    Apr: 93621,
    May: 88908,
    Jun: 33077,
    Jul: 29398,
    Aug: 28828,
    Sep: 89555,
    Oct: 80006,
    Nov: 68659,
    Dec: 26858
  },
  {
    Name: "Bricker McGee",
    Language: "French",
    Country: "France",
    "Game Name": "Kalah",
    Bought: false,
    "Bank Balance": 65506,
    Rating: 0,
    "Total Winnings": 605384,
    Jan: 81081,
    Feb: 16521,
    Mar: 48734,
    Apr: 49225,
    May: 92547,
    Jun: 46989,
    Jul: 54510,
    Aug: 18286,
    Sep: 20534,
    Oct: 40140,
    Nov: 48995,
    Dec: 87822
  },
  {
    Name: "Dimple Unalkat",
    Language: "Portuguese",
    Country: "Portugal",
    "Game Name": "Game of the Generals",
    Bought: true,
    "Bank Balance": 85310,
    Rating: 2,
    "Total Winnings": 600036,
    Jan: 73947,
    Feb: 41964,
    Mar: 94392,
    Apr: 63619,
    May: 9658,
    Jun: 9844,
    Jul: 55200,
    Aug: 82070,
    Sep: 16642,
    Oct: 56319,
    Nov: 22113,
    Dec: 74268
  },
  {
    Name: "Gil Lopes",
    Language: "Spanish",
    Country: "Colombia",
    "Game Name": "Hare and Hounds",
    Bought: true,
    "Bank Balance": 75701,
    Rating: 2,
    "Total Winnings": 574681,
    Jan: 20479,
    Feb: 2253,
    Mar: 39309,
    Apr: 98710,
    May: 96187,
    Jun: 91926,
    Jul: 1149,
    Aug: 32494,
    Sep: 19279,
    Oct: 21624,
    Nov: 71240,
    Dec: 80031
  },
  {
    Name: "Sophie Beckham",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Sugoroku",
    Bought: false,
    "Bank Balance": 66706,
    Rating: 0,
    "Total Winnings": 651234,
    Jan: 44446,
    Feb: 34521,
    Mar: 10175,
    Apr: 88206,
    May: 67066,
    Jun: 33991,
    Jul: 72878,
    Aug: 22975,
    Sep: 18302,
    Oct: 98398,
    Nov: 79217,
    Dec: 81059
  },
  {
    Name: "Isabelle Black",
    Language: "French",
    Country: "France",
    "Game Name": "Nine Men's Morris",
    Bought: false,
    "Bank Balance": 15749,
    Rating: 3,
    "Total Winnings": 497221,
    Jan: 32411,
    Feb: 95141,
    Mar: 57634,
    Apr: 14032,
    May: 56299,
    Jun: 29516,
    Jul: 46850,
    Aug: 58328,
    Sep: 34745,
    Oct: 51482,
    Nov: 11671,
    Dec: 9112
  },
  {
    Name: "Emily Braxton",
    Language: "Maltese",
    Country: "Malta",
    "Game Name": "Blockade",
    Bought: true,
    "Bank Balance": 4057,
    Rating: 5,
    "Total Winnings": 622755,
    Jan: 82948,
    Feb: 7710,
    Mar: 52176,
    Apr: 52847,
    May: 97766,
    Jun: 92102,
    Jul: 67598,
    Aug: 1922,
    Sep: 98425,
    Oct: 45453,
    Nov: 3530,
    Dec: 20278
  },
  {
    Name: "Olivia Brennan",
    Language: "French",
    Country: "France",
    "Game Name": "Patolli",
    Bought: true,
    "Bank Balance": 32835,
    Rating: 1,
    "Total Winnings": 727405,
    Jan: 93514,
    Feb: 82404,
    Mar: 67869,
    Apr: 19940,
    May: 96463,
    Jun: 42338,
    Jul: 94521,
    Aug: 65063,
    Sep: 79118,
    Oct: 55829,
    Nov: 12158,
    Dec: 18188
  },
  {
    Name: "Lily Brock",
    Language: "Italian",
    Country: "Italy",
    "Game Name": "YINSH",
    Bought: false,
    "Bank Balance": 7440,
    Rating: 5,
    "Total Winnings": 563168,
    Jan: 34466,
    Feb: 83215,
    Mar: 30701,
    Apr: 70008,
    May: 32358,
    Jun: 3206,
    Jul: 38423,
    Aug: 85491,
    Sep: 20275,
    Oct: 61739,
    Nov: 57397,
    Dec: 45889
  },
  {
    Name: "Chloe Bryson",
    Language: "Greek",
    Country: "Greece",
    "Game Name": "Downfall",
    Bought: false,
    "Bank Balance": 65717,
    Rating: 1,
    "Total Winnings": 544903,
    Jan: 48057,
    Feb: 34279,
    Mar: 58712,
    Apr: 25417,
    May: 69635,
    Jun: 23645,
    Jul: 26415,
    Aug: 82338,
    Sep: 43828,
    Oct: 71521,
    Nov: 26543,
    Dec: 34513
  },
  {
    Name: "Isabella Cadwell",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Gipf",
    Bought: true,
    "Bank Balance": 53143,
    Rating: 5,
    "Total Winnings": 598959,
    Jan: 59018,
    Feb: 4237,
    Mar: 60705,
    Apr: 12747,
    May: 20886,
    Jun: 48061,
    Jul: 84232,
    Aug: 65952,
    Sep: 41023,
    Oct: 60261,
    Nov: 48111,
    Dec: 93726
  },
  {
    Name: "Amelia Cage",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Shogi",
    Bought: true,
    "Bank Balance": 28394,
    Rating: 4,
    "Total Winnings": 616276,
    Jan: 50571,
    Feb: 81656,
    Mar: 24586,
    Apr: 45229,
    May: 67687,
    Jun: 72903,
    Jul: 59478,
    Aug: 35052,
    Sep: 89424,
    Oct: 27146,
    Nov: 32634,
    Dec: 29910
  },
  {
    Name: "Jessica Carson",
    Language: "Swedish",
    Country: "Sweden",
    "Game Name": "Mad Gab",
    Bought: false,
    "Bank Balance": 76329,
    Rating: 3,
    "Total Winnings": 793660,
    Jan: 84256,
    Feb: 4112,
    Mar: 97703,
    Apr: 56528,
    May: 33167,
    Jun: 89062,
    Jul: 76488,
    Aug: 91699,
    Sep: 56231,
    Oct: 53475,
    Nov: 90049,
    Dec: 60890
  },
  {
    Name: "Sophia Chandler",
    Language: "French",
    Country: "France",
    "Game Name": "Agon",
    Bought: false,
    "Bank Balance": 81286,
    Rating: 2,
    "Total Winnings": 507707,
    Jan: 48063,
    Feb: 86575,
    Mar: 42786,
    Apr: 35182,
    May: 38283,
    Jun: 46406,
    Jul: 74547,
    Aug: 4181,
    Sep: 25550,
    Oct: 41106,
    Nov: 55141,
    Dec: 9887
  },
  {
    Name: "Ava Cohen",
    Language: "French",
    Country: "Luxembourg",
    "Game Name": "Janggi (Korean Chess)",
    Bought: true,
    "Bank Balance": 43040,
    Rating: 3,
    "Total Winnings": 807069,
    Jan: 17081,
    Feb: 77756,
    Mar: 33930,
    Apr: 68452,
    May: 97171,
    Jun: 72523,
    Jul: 92126,
    Aug: 80588,
    Sep: 74378,
    Oct: 67006,
    Nov: 52198,
    Dec: 73860
  },
  {
    Name: "Charlotte Cole",
    Language: "French",
    Country: "France",
    "Game Name": "Wari",
    Bought: true,
    "Bank Balance": 63581,
    Rating: 3,
    "Total Winnings": 657764,
    Jan: 51737,
    Feb: 55825,
    Mar: 84839,
    Apr: 37734,
    May: 60122,
    Jun: 95539,
    Jul: 23827,
    Aug: 94428,
    Sep: 6177,
    Oct: 53881,
    Nov: 124,
    Dec: 93531
  },
  {
    Name: "Mia Corbin",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Cross and Circle",
    Bought: false,
    "Bank Balance": 77343,
    Rating: 5,
    "Total Winnings": 643371,
    Jan: 80323,
    Feb: 53534,
    Mar: 45402,
    Apr: 96963,
    May: 7811,
    Jun: 29017,
    Jul: 60768,
    Aug: 83638,
    Sep: 87055,
    Oct: 15467,
    Nov: 61656,
    Dec: 21737
  },
  {
    Name: "Lucy Dallas",
    Language: "Icelandic",
    Country: "Iceland",
    "Game Name": "Checkers",
    Bought: false,
    "Bank Balance": 20377,
    Rating: 2,
    "Total Winnings": 683235,
    Jan: 96661,
    Feb: 47531,
    Mar: 62448,
    Apr: 11485,
    May: 48999,
    Jun: 32484,
    Jul: 81331,
    Aug: 44194,
    Sep: 90182,
    Oct: 42922,
    Nov: 55851,
    Dec: 69147
  },
  {
    Name: "Grace Dalton",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Sahkku",
    Bought: true,
    "Bank Balance": 5310,
    Rating: 1,
    "Total Winnings": 505705,
    Jan: 39765,
    Feb: 35304,
    Mar: 86454,
    Apr: 23981,
    May: 16668,
    Jun: 1017,
    Jul: 52999,
    Aug: 39703,
    Sep: 5998,
    Oct: 47333,
    Nov: 77523,
    Dec: 78960
  },
  {
    Name: "Ruby Dane",
    Language: "French",
    Country: "France",
    "Game Name": "Liu po",
    Bought: true,
    "Bank Balance": 25572,
    Rating: 0,
    "Total Winnings": 710002,
    Jan: 68479,
    Feb: 73374,
    Mar: 92154,
    Apr: 93873,
    May: 22524,
    Jun: 17834,
    Jul: 63870,
    Aug: 99859,
    Sep: 61566,
    Oct: 4414,
    Nov: 86081,
    Dec: 25974
  },
  {
    Name: "Ella Donovan",
    Language: "English",
    Country: "United Kingdom",
    "Game Name": "Ghosts",
    Bought: false,
    "Bank Balance": 92202,
    Rating: 0,
    "Total Winnings": 662616,
    Jan: 28688,
    Feb: 89934,
    Mar: 6967,
    Apr: 76506,
    May: 92368,
    Jun: 65613,
    Jul: 16134,
    Aug: 64499,
    Sep: 10191,
    Oct: 98557,
    Nov: 86996,
    Dec: 26163
  },
  {
    Name: "Evie Easton",
    Language: "Spanish",
    Country: "Venezuela",
    "Game Name": "Hijara",
    Bought: false,
    "Bank Balance": 11560,
    Rating: 4,
    "Total Winnings": 677324,
    Jan: 87618,
    Feb: 60686,
    Mar: 94027,
    Apr: 43301,
    May: 53348,
    Jun: 27631,
    Jul: 46489,
    Aug: 7670,
    Sep: 93810,
    Oct: 22169,
    Nov: 57228,
    Dec: 83347
  },
  {
    Name: "Freya Fisher",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Tab",
    Bought: true,
    "Bank Balance": 53263,
    Rating: 3,
    "Total Winnings": 647992,
    Jan: 39018,
    Feb: 88802,
    Mar: 22184,
    Apr: 86213,
    May: 13298,
    Jun: 61708,
    Jul: 92890,
    Aug: 11783,
    Sep: 22838,
    Oct: 94195,
    Nov: 78036,
    Dec: 37027
  },
  {
    Name: "Isla Fletcher",
    Language: "Norwegian",
    Country: "Norway",
    "Game Name": "Othello",
    Bought: true,
    "Bank Balance": 12456,
    Rating: 3,
    "Total Winnings": 474582,
    Jan: 93384,
    Feb: 30618,
    Mar: 29957,
    Apr: 7313,
    May: 25203,
    Jun: 8116,
    Jul: 30763,
    Aug: 49533,
    Sep: 30295,
    Oct: 81859,
    Nov: 52514,
    Dec: 35027
  },
  {
    Name: "Poppy Grady",
    Language: "Spanish",
    Country: "Argentina",
    "Game Name": "Blood Bowl",
    Bought: false,
    "Bank Balance": 48899,
    Rating: 4,
    "Total Winnings": 557754,
    Jan: 86135,
    Feb: 178,
    Mar: 55905,
    Apr: 54634,
    May: 16507,
    Jun: 95652,
    Jul: 33163,
    Aug: 92767,
    Sep: 17562,
    Oct: 64486,
    Nov: 11842,
    Dec: 28923
  },
  {
    Name: "Daisy Greyson",
    Language: "French",
    Country: "France",
    "Game Name": "PUNCT",
    Bought: false,
    "Bank Balance": 56353,
    Rating: 3,
    "Total Winnings": 493705,
    Jan: 34955,
    Feb: 45560,
    Mar: 56376,
    Apr: 37172,
    May: 76562,
    Jun: 45012,
    Jul: 726,
    Aug: 18481,
    Sep: 8741,
    Oct: 48898,
    Nov: 34666,
    Dec: 86556
  },
  {
    Name: "Layla Griffin",
    Language: "Maltese",
    Country: "Malta",
    "Game Name": "ZERTZ",
    Bought: true,
    "Bank Balance": 17242,
    Rating: 2,
    "Total Winnings": 675154,
    Jan: 52075,
    Feb: 73981,
    Mar: 25790,
    Apr: 75422,
    May: 81785,
    Jun: 11786,
    Jul: 82645,
    Aug: 55502,
    Sep: 67570,
    Oct: 23857,
    Nov: 69178,
    Dec: 55563
  },
  {
    Name: "Tony Gunner",
    Language: "Portuguese",
    Country: "Portugal",
    "Game Name": "Fanorona",
    Bought: true,
    "Bank Balance": 58360,
    Rating: 2,
    "Total Winnings": 653978,
    Jan: 73133,
    Feb: 72983,
    Mar: 31331,
    Apr: 4048,
    May: 94250,
    Jun: 33752,
    Jul: 14978,
    Aug: 81067,
    Sep: 47253,
    Oct: 74084,
    Nov: 61169,
    Dec: 65930
  },
  {
    Name: "Andrew Hayden",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Guess Who?",
    Bought: false,
    "Bank Balance": 93192,
    Rating: 5,
    "Total Winnings": 588168,
    Jan: 68817,
    Feb: 46856,
    Mar: 10429,
    Apr: 38213,
    May: 80095,
    Jun: 62177,
    Jul: 1858,
    Aug: 45703,
    Sep: 52340,
    Oct: 25557,
    Nov: 75476,
    Dec: 80647
  },
  {
    Name: "Kevin Hudson",
    Language: "German",
    Country: "Germany",
    "Game Name": "Stratego",
    Bought: false,
    "Bank Balance": 57599,
    Rating: 1,
    "Total Winnings": 687995,
    Jan: 64204,
    Feb: 87256,
    Mar: 10028,
    Apr: 53092,
    May: 13988,
    Jun: 98906,
    Jul: 1866,
    Aug: 33904,
    Sep: 92216,
    Oct: 73911,
    Nov: 68771,
    Dec: 89853
  },
  {
    Name: "Bricker Hunter",
    Language: "Italian",
    Country: "Italy",
    "Game Name": "Master Mind",
    Bought: true,
    "Bank Balance": 47120,
    Rating: 0,
    "Total Winnings": 495293,
    Jan: 54753,
    Feb: 3985,
    Mar: 10114,
    Apr: 57901,
    May: 49950,
    Jun: 71035,
    Jul: 21468,
    Aug: 12706,
    Sep: 68178,
    Oct: 74079,
    Nov: 59605,
    Dec: 11519
  },
  {
    Name: "Dimple Jacoby",
    Language: "French",
    Country: "France",
    "Game Name": "Battleship",
    Bought: true,
    "Bank Balance": 85501,
    Rating: 5,
    "Total Winnings": 564090,
    Jan: 51245,
    Feb: 53381,
    Mar: 5992,
    Apr: 51428,
    May: 79809,
    Jun: 80247,
    Jul: 48415,
    Aug: 73130,
    Sep: 29957,
    Oct: 59508,
    Nov: 14192,
    Dec: 16786
  },
  {
    Name: "Gil Jagger",
    Language: "Greek",
    Country: "Greece",
    "Game Name": "Patolli",
    Bought: false,
    "Bank Balance": 34254,
    Rating: 1,
    "Total Winnings": 552459,
    Jan: 28503,
    Feb: 773,
    Mar: 30217,
    Apr: 21607,
    May: 83522,
    Jun: 86887,
    Jul: 34292,
    Aug: 13451,
    Sep: 81410,
    Oct: 30291,
    Nov: 91222,
    Dec: 50284
  },
  {
    Name: "Sophie Jaxon",
    Language: "French",
    Country: "Luxembourg",
    "Game Name": "Xiangqi (Chinese chess)",
    Bought: false,
    "Bank Balance": 4890,
    Rating: 5,
    "Total Winnings": 797881,
    Jan: 28884,
    Feb: 52614,
    Mar: 73918,
    Apr: 85459,
    May: 93817,
    Jun: 97417,
    Jul: 80866,
    Aug: 97571,
    Sep: 75009,
    Oct: 89534,
    Nov: 20091,
    Dec: 2701
  },
  {
    Name: "Isabelle Jett",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Downfall",
    Bought: true,
    "Bank Balance": 91314,
    Rating: 4,
    "Total Winnings": 771415,
    Jan: 65179,
    Feb: 8847,
    Mar: 99206,
    Apr: 94121,
    May: 87943,
    Jun: 46541,
    Jul: 25165,
    Aug: 58458,
    Sep: 85068,
    Oct: 30068,
    Nov: 88941,
    Dec: 81878
  },
  {
    Name: "Emily Kade",
    Language: "Spanish",
    Country: "Spain",
    "Game Name": "Go",
    Bought: true,
    "Bank Balance": 73085,
    Rating: 4,
    "Total Winnings": 449766,
    Jan: 21784,
    Feb: 71141,
    Mar: 23777,
    Apr: 80544,
    May: 97083,
    Jun: 50615,
    Jul: 20804,
    Aug: 3426,
    Sep: 605,
    Oct: 725,
    Nov: 35910,
    Dec: 43352
  },
  {
    Name: "Olivia Kane",
    Language: "English",
    Country: "United Kingdom",
    "Game Name": "Shogi",
    Bought: false,
    "Bank Balance": 96993,
    Rating: 3,
    "Total Winnings": 732026,
    Jan: 16114,
    Feb: 77560,
    Mar: 39470,
    Apr: 72101,
    May: 6016,
    Jun: 92320,
    Jul: 74535,
    Aug: 77345,
    Sep: 91828,
    Oct: 64602,
    Nov: 58351,
    Dec: 61784
  },
  {
    Name: "Lily Keating",
    Language: "French",
    Country: "France",
    "Game Name": "Lost Cities",
    Bought: false,
    "Bank Balance": 34466,
    Rating: 2,
    "Total Winnings": 496453,
    Jan: 47661,
    Feb: 38136,
    Mar: 54902,
    Apr: 35109,
    May: 35507,
    Jun: 50968,
    Jul: 1701,
    Aug: 33901,
    Sep: 53385,
    Oct: 99458,
    Nov: 4542,
    Dec: 41183
  },
  {
    Name: "Chloe Keegan",
    Language: "Swedish",
    Country: "Sweden",
    "Game Name": "Agon",
    Bought: true,
    "Bank Balance": 5079,
    Rating: 0,
    "Total Winnings": 518440,
    Jan: 12565,
    Feb: 52727,
    Mar: 88767,
    Apr: 16309,
    May: 20214,
    Jun: 8044,
    Jul: 61256,
    Aug: 62154,
    Sep: 41063,
    Oct: 62236,
    Nov: 92430,
    Dec: 675
  },
  {
    Name: "Isabella Kingston",
    Language: "French",
    Country: "Belgium",
    "Game Name": "Isola",
    Bought: true,
    "Bank Balance": 82832,
    Rating: 2,
    "Total Winnings": 506858,
    Jan: 66433,
    Feb: 3655,
    Mar: 52061,
    Apr: 53948,
    May: 95311,
    Jun: 53737,
    Jul: 31183,
    Aug: 32446,
    Sep: 43552,
    Oct: 39159,
    Nov: 1376,
    Dec: 33997
  },
  {
    Name: "Amelia Kobe",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Tantrix",
    Bought: false,
    "Bank Balance": -1624,
    Rating: 1,
    "Total Winnings": 509042,
    Jan: 54363,
    Feb: 49221,
    Mar: 27277,
    Apr: 9591,
    May: 52047,
    Jun: 47208,
    Jul: 30935,
    Aug: 65564,
    Sep: 55519,
    Oct: 42507,
    Nov: 44282,
    Dec: 30528
  },
  {
    Name: "Jessica Smith",
    Language: "Portuguese",
    Country: "Portugal",
    "Game Name": "Chess",
    Bought: false,
    "Bank Balance": 71351,
    Rating: 1,
    "Total Winnings": 552024,
    Jan: 66642,
    Feb: 28758,
    Mar: 18294,
    Apr: 62393,
    May: 28330,
    Jun: 85741,
    Jul: 27354,
    Aug: 15784,
    Sep: 22433,
    Oct: 54169,
    Nov: 99445,
    Dec: 42681
  },
  {
    Name: "Sophia Connell",
    Language: "Spanish",
    Country: "Peru",
    "Game Name": "Camelot",
    Bought: true,
    "Bank Balance": 35644,
    Rating: 4,
    "Total Winnings": 697097,
    Jan: 9097,
    Feb: 91065,
    Mar: 85774,
    Apr: 42398,
    May: 98948,
    Jun: 90867,
    Jul: 69971,
    Aug: 35068,
    Sep: 12555,
    Oct: 19794,
    Nov: 91985,
    Dec: 49575
  },
  {
    Name: "Ava Flanagan",
    Language: "French",
    Country: "France",
    "Game Name": "Rithmomachy",
    Bought: true,
    "Bank Balance": 62340,
    Rating: 1,
    "Total Winnings": 608244,
    Jan: 70344,
    Feb: 25343,
    Mar: 59932,
    Apr: 92790,
    May: 27819,
    Jun: 98896,
    Jul: 35226,
    Aug: 22700,
    Sep: 78818,
    Oct: 57208,
    Nov: 27433,
    Dec: 11735
  },
  {
    Name: "Charlotte McGee",
    Language: "French",
    Country: "France",
    "Game Name": "Kamisado",
    Bought: false,
    "Bank Balance": 20639,
    Rating: 1,
    "Total Winnings": 690270,
    Jan: 43812,
    Feb: 93463,
    Mar: 6861,
    Apr: 76930,
    May: 62576,
    Jun: 81904,
    Jul: 96932,
    Aug: 9353,
    Sep: 54732,
    Oct: 89030,
    Nov: 74029,
    Dec: 648
  },
  {
    Name: "Mia Unalkat",
    Language: "Portuguese",
    Country: "Brazil",
    "Game Name": "Game of the Generals",
    Bought: false,
    "Bank Balance": 91613,
    Rating: 2,
    "Total Winnings": 607503,
    Jan: 57544,
    Feb: 39051,
    Mar: 78481,
    Apr: 40516,
    May: 45807,
    Jun: 9403,
    Jul: 54372,
    Aug: 66081,
    Sep: 74759,
    Oct: 29968,
    Nov: 28686,
    Dec: 82835
  },
  {
    Name: "Lucy Lopes",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Hex",
    Bought: true,
    "Bank Balance": 67948,
    Rating: 1,
    "Total Winnings": 627330,
    Jan: 82171,
    Feb: 80703,
    Mar: 91521,
    Apr: 18270,
    May: 48134,
    Jun: 77155,
    Jul: 7322,
    Aug: 17404,
    Sep: 64756,
    Oct: 34152,
    Nov: 92098,
    Dec: 13644
  },
  {
    Name: "Grace Beckham",
    Language: "Italian",
    Country: "Italy",
    "Game Name": "Sugoroku",
    Bought: true,
    "Bank Balance": 167,
    Rating: 1,
    "Total Winnings": 456890,
    Jan: 65688,
    Feb: 17155,
    Mar: 7167,
    Apr: 72920,
    May: 4342,
    Jun: 99891,
    Jul: 39414,
    Aug: 15969,
    Sep: 47521,
    Oct: 1271,
    Nov: 76372,
    Dec: 9180
  },
  {
    Name: "Ruby Black",
    Language: "Icelandic",
    Country: "Iceland",
    "Game Name": "Obsession",
    Bought: false,
    "Bank Balance": -2149,
    Rating: 3,
    "Total Winnings": 590992,
    Jan: 92905,
    Feb: 84377,
    Mar: 66430,
    Apr: 17020,
    May: 66596,
    Jun: 53316,
    Jul: 22440,
    Aug: 17393,
    Sep: 35701,
    Oct: 33232,
    Nov: 67150,
    Dec: 34432
  },
  {
    Name: "Ella Braxton",
    Language: "French",
    Country: "France",
    "Game Name": "Blood Bowl",
    Bought: false,
    "Bank Balance": 64958,
    Rating: 2,
    "Total Winnings": 624867,
    Jan: 59762,
    Feb: 51614,
    Mar: 37702,
    Apr: 20981,
    May: 26265,
    Jun: 56393,
    Jul: 7914,
    Aug: 99617,
    Sep: 70175,
    Oct: 77045,
    Nov: 53792,
    Dec: 63607
  },
  {
    Name: "Evie Brennan",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Plateau",
    Bought: true,
    "Bank Balance": 88795,
    Rating: 3,
    "Total Winnings": 588944,
    Jan: 91074,
    Feb: 35072,
    Mar: 59387,
    Apr: 27777,
    May: 11358,
    Jun: 3557,
    Jul: 88172,
    Aug: 29168,
    Sep: 24103,
    Oct: 49229,
    Nov: 77525,
    Dec: 92522
  },
  {
    Name: "Freya Brock",
    Language: "Norwegian",
    Country: "Norway",
    "Game Name": "ZERTZ",
    Bought: true,
    "Bank Balance": 72037,
    Rating: 3,
    "Total Winnings": 725657,
    Jan: 21145,
    Feb: 50364,
    Mar: 81335,
    Apr: 81367,
    May: 24704,
    Jun: 91349,
    Jul: 39337,
    Aug: 81678,
    Sep: 74258,
    Oct: 95909,
    Nov: 76928,
    Dec: 7283
  },
  {
    Name: "Isla Bryson",
    Language: "English",
    Country: "Ireland",
    "Game Name": "DVONN",
    Bought: false,
    "Bank Balance": 92844,
    Rating: 2,
    "Total Winnings": 569924,
    Jan: 40820,
    Feb: 84333,
    Mar: 66696,
    Apr: 54449,
    May: 97078,
    Jun: 5247,
    Jul: 72147,
    Aug: 63776,
    Sep: 44095,
    Oct: 35585,
    Nov: 576,
    Dec: 5122
  },
  {
    Name: "Poppy Cadwell",
    Language: "French",
    Country: "Luxembourg",
    "Game Name": "Guess Who?",
    Bought: false,
    "Bank Balance": 37994,
    Rating: 4,
    "Total Winnings": 718528,
    Jan: 56030,
    Feb: 80085,
    Mar: 66073,
    Apr: 41291,
    May: 36521,
    Jun: 53046,
    Jul: 54960,
    Aug: 68412,
    Sep: 86611,
    Oct: 52856,
    Nov: 98552,
    Dec: 24091
  },
  {
    Name: "Daisy Cage",
    Language: "German",
    Country: "Germany",
    "Game Name": "Space Hulk",
    Bought: true,
    "Bank Balance": 69204,
    Rating: 3,
    "Total Winnings": 507323,
    Jan: 66175,
    Feb: 65743,
    Mar: 74848,
    Apr: 37827,
    May: 48568,
    Jun: 82979,
    Jul: 13290,
    Aug: 42483,
    Sep: 31487,
    Oct: 38679,
    Nov: 597,
    Dec: 4647
  },
  {
    Name: "Layla Carson",
    Language: "French",
    Country: "France",
    "Game Name": "Master Mind",
    Bought: true,
    "Bank Balance": 12626,
    Rating: 1,
    "Total Winnings": 699330,
    Jan: 29682,
    Feb: 46658,
    Mar: 16553,
    Apr: 83680,
    May: 21129,
    Jun: 79428,
    Jul: 77675,
    Aug: 75052,
    Sep: 52780,
    Oct: 85043,
    Nov: 57077,
    Dec: 74573
  },
  {
    Name: "Tony Chandler",
    Language: "Icelandic",
    Country: "Iceland",
    "Game Name": "Backgammon",
    Bought: false,
    "Bank Balance": 87562,
    Rating: 3,
    "Total Winnings": 692124,
    Jan: 65109,
    Feb: 96707,
    Mar: 5997,
    Apr: 88211,
    May: 53119,
    Jun: 77638,
    Jul: 52591,
    Aug: 77903,
    Sep: 83093,
    Oct: 72969,
    Nov: 9274,
    Dec: 9513
  },
  {
    Name: "Andrew Cohen",
    Language: "Spanish",
    Country: "Spain",
    "Game Name": "Le Jeu de la Guerre",
    Bought: false,
    "Bank Balance": 12482,
    Rating: 1,
    "Total Winnings": 651806,
    Jan: 83581,
    Feb: 14240,
    Mar: 80327,
    Apr: 97634,
    May: 15340,
    Jun: 71140,
    Jul: 4459,
    Aug: 33620,
    Sep: 99557,
    Oct: 31138,
    Nov: 48419,
    Dec: 72351
  },
  {
    Name: "Kevin Cole",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Wari",
    Bought: true,
    "Bank Balance": 1676,
    Rating: 3,
    "Total Winnings": 715033,
    Jan: 75618,
    Feb: 47952,
    Mar: 24654,
    Apr: 94246,
    May: 19726,
    Jun: 626,
    Jul: 62616,
    Aug: 87675,
    Sep: 88330,
    Oct: 88435,
    Nov: 29278,
    Dec: 95877
  },
  {
    Name: "Bricker Corbin",
    Language: "English",
    Country: "United Kingdom",
    "Game Name": "Daldos",
    Bought: true,
    "Bank Balance": 82517,
    Rating: 5,
    "Total Winnings": 469726,
    Jan: 21598,
    Feb: 9566,
    Mar: 79056,
    Apr: 32840,
    May: 24767,
    Jun: 74022,
    Jul: 55863,
    Aug: 22618,
    Sep: 42769,
    Oct: 48928,
    Nov: 4465,
    Dec: 53234
  },
  {
    Name: "Dimple Dallas",
    Language: "Spanish",
    Country: "Uruguay",
    "Game Name": "Checkers",
    Bought: false,
    "Bank Balance": 82991,
    Rating: 2,
    "Total Winnings": 471444,
    Jan: 34087,
    Feb: 30986,
    Mar: 25790,
    Apr: 16300,
    May: 57380,
    Jun: 33000,
    Jul: 21742,
    Aug: 99116,
    Sep: 2871,
    Oct: 14025,
    Nov: 46026,
    Dec: 90121
  },
  {
    Name: "Gil Dalton",
    Language: "French",
    Country: "France",
    "Game Name": "Senet",
    Bought: false,
    "Bank Balance": 74324,
    Rating: 4,
    "Total Winnings": 328491,
    Jan: 44192,
    Feb: 61010,
    Mar: 41931,
    Apr: 17494,
    May: 18006,
    Jun: 17243,
    Jul: 20878,
    Aug: 30105,
    Sep: 1549,
    Oct: 2687,
    Nov: 21986,
    Dec: 51410
  },
  {
    Name: "Sophie Dane",
    Language: "Norwegian",
    Country: "Norway",
    "Game Name": "Liu po",
    Bought: true,
    "Bank Balance": 56014,
    Rating: 5,
    "Total Winnings": 910598,
    Jan: 84878,
    Feb: 76587,
    Mar: 63271,
    Apr: 68667,
    May: 51936,
    Jun: 96043,
    Jul: 91059,
    Aug: 63941,
    Sep: 75122,
    Oct: 95944,
    Nov: 99779,
    Dec: 43371
  },
  {
    Name: "Isabelle Donovan",
    Language: "Spanish",
    Country: "Colombia",
    "Game Name": "Abalone",
    Bought: true,
    "Bank Balance": 36515,
    Rating: 5,
    "Total Winnings": 508537,
    Jan: 73957,
    Feb: 25775,
    Mar: 56291,
    Apr: 5901,
    May: 7470,
    Jun: 23518,
    Jul: 27265,
    Aug: 44560,
    Sep: 24355,
    Oct: 70065,
    Nov: 89564,
    Dec: 59816
  },
  {
    Name: "Emily Easton",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Hijara",
    Bought: false,
    "Bank Balance": 63569,
    Rating: 5,
    "Total Winnings": 594960,
    Jan: 60517,
    Feb: 90608,
    Mar: 29522,
    Apr: 415,
    May: 21122,
    Jun: 93170,
    Jul: 64342,
    Aug: 12438,
    Sep: 51040,
    Oct: 93549,
    Nov: 77157,
    Dec: 1080
  },
  {
    Name: "Olivia Fisher",
    Language: "Maltese",
    Country: "Malta",
    "Game Name": "Tablut",
    Bought: false,
    "Bank Balance": 91930,
    Rating: 1,
    "Total Winnings": 354876,
    Jan: 48806,
    Feb: 5854,
    Mar: 16905,
    Apr: 78112,
    May: 32195,
    Jun: 12474,
    Jul: 11842,
    Aug: 86582,
    Sep: 25009,
    Oct: 5583,
    Nov: 29912,
    Dec: 1602
  },
  {
    Name: "Lily Fletcher",
    Language: "Maltese",
    Country: "Malta",
    "Game Name": "Chess",
    Bought: true,
    "Bank Balance": 51284,
    Rating: 4,
    "Total Winnings": 639553,
    Jan: 76796,
    Feb: 65934,
    Mar: 88719,
    Apr: 66621,
    May: 50404,
    Jun: 22920,
    Jul: 22562,
    Aug: 43027,
    Sep: 76792,
    Oct: 47005,
    Nov: 3007,
    Dec: 75766
  },
  {
    Name: "Chloe Grady",
    Language: "French",
    Country: "France",
    "Game Name": "Bul",
    Bought: true,
    "Bank Balance": 69278,
    Rating: 1,
    "Total Winnings": 675005,
    Jan: 79773,
    Feb: 96811,
    Mar: 28597,
    Apr: 6001,
    May: 7140,
    Jun: 38831,
    Jul: 79762,
    Aug: 71243,
    Sep: 73594,
    Oct: 83702,
    Nov: 90703,
    Dec: 18848
  },
  {
    Name: "Isabella Greyson",
    Language: "German",
    Country: "Germany",
    "Game Name": "Rithmomachy",
    Bought: false,
    "Bank Balance": 9254,
    Rating: 2,
    "Total Winnings": 524495,
    Jan: 42944,
    Feb: 24156,
    Mar: 29847,
    Apr: 83344,
    May: 33608,
    Jun: 98793,
    Jul: 13700,
    Aug: 3024,
    Sep: 64752,
    Oct: 4954,
    Nov: 71774,
    Dec: 53599
  },
  {
    Name: "Amelia Griffin",
    Language: "Greek",
    Country: "Greece",
    "Game Name": "Kalah",
    Bought: false,
    "Bank Balance": 5480,
    Rating: 5,
    "Total Winnings": 542409,
    Jan: 49582,
    Feb: 20471,
    Mar: 66053,
    Apr: 7816,
    May: 33508,
    Jun: 33830,
    Jul: 46440,
    Aug: 25982,
    Sep: 94660,
    Oct: 96367,
    Nov: 13791,
    Dec: 53909
  },
  {
    Name: "Jessica Gunner",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Game of the Generals",
    Bought: true,
    "Bank Balance": 39098,
    Rating: 5,
    "Total Winnings": 467414,
    Jan: 57182,
    Feb: 50441,
    Mar: 80601,
    Apr: 16337,
    May: 50281,
    Jun: 45675,
    Jul: 34299,
    Aug: 52772,
    Sep: 12160,
    Oct: 47359,
    Nov: 13076,
    Dec: 7231
  },
  {
    Name: "Sophia Hayden",
    Language: "Greek",
    Country: "Greece",
    "Game Name": "Hare and Hounds",
    Bought: true,
    "Bank Balance": 40365,
    Rating: 2,
    "Total Winnings": 553974,
    Jan: 87310,
    Feb: 83621,
    Mar: 10655,
    Apr: 35716,
    May: 9314,
    Jun: 56660,
    Jul: 71174,
    Aug: 31894,
    Sep: 28291,
    Oct: 39767,
    Nov: 8183,
    Dec: 91389
  },
  {
    Name: "Ava Hudson",
    Language: "Swedish",
    Country: "Sweden",
    "Game Name": "Sugoroku",
    Bought: false,
    "Bank Balance": 52679,
    Rating: 4,
    "Total Winnings": 658198,
    Jan: 44092,
    Feb: 85438,
    Mar: 12731,
    Apr: 63998,
    May: 95839,
    Jun: 54935,
    Jul: 60007,
    Aug: 72738,
    Sep: 15866,
    Oct: 82580,
    Nov: 48561,
    Dec: 21413
  },
  {
    Name: "Charlotte Hunter",
    Language: "French",
    Country: "France",
    "Game Name": "Nine Men's Morris",
    Bought: false,
    "Bank Balance": 45275,
    Rating: 4,
    "Total Winnings": 547630,
    Jan: 12816,
    Feb: 35952,
    Mar: 59920,
    Apr: 16491,
    May: 43154,
    Jun: 58918,
    Jul: 69542,
    Aug: 7100,
    Sep: 36099,
    Oct: 83205,
    Nov: 85329,
    Dec: 39104
  },
  {
    Name: "Mia Jacoby",
    Language: "Spanish",
    Country: "Spain",
    "Game Name": "Blockade",
    Bought: true,
    "Bank Balance": 33429,
    Rating: 5,
    "Total Winnings": 517351,
    Jan: 26957,
    Feb: 39349,
    Mar: 26759,
    Apr: 56790,
    May: 85618,
    Jun: 74011,
    Jul: 33027,
    Aug: 5661,
    Sep: 65666,
    Oct: 34191,
    Nov: 33878,
    Dec: 35444
  },
  {
    Name: "Lucy Jagger",
    Language: "French",
    Country: "France",
    "Game Name": "Patolli",
    Bought: true,
    "Bank Balance": 50483,
    Rating: 3,
    "Total Winnings": 666790,
    Jan: 93089,
    Feb: 50732,
    Mar: 50338,
    Apr: 66197,
    May: 12684,
    Jun: 87482,
    Jul: 1872,
    Aug: 25614,
    Sep: 92560,
    Oct: 69533,
    Nov: 23095,
    Dec: 93594
  },
  {
    Name: "Grace Jaxon",
    Language: "English",
    Country: "Ireland",
    "Game Name": "YINSH",
    Bought: false,
    "Bank Balance": 45390,
    Rating: 3,
    "Total Winnings": 490232,
    Jan: 15205,
    Feb: 9204,
    Mar: 36788,
    Apr: 86647,
    May: 34731,
    Jun: 46205,
    Jul: 6620,
    Aug: 56296,
    Sep: 40709,
    Oct: 28071,
    Nov: 74853,
    Dec: 54903
  },
  {
    Name: "Ruby Jett",
    Language: "Swedish",
    Country: "Sweden",
    "Game Name": "Downfall",
    Bought: false,
    "Bank Balance": 21498,
    Rating: 0,
    "Total Winnings": 580882,
    Jan: 64186,
    Feb: 28026,
    Mar: 80972,
    Apr: 29635,
    May: 85654,
    Jun: 33350,
    Jul: 66734,
    Aug: 73789,
    Sep: 72698,
    Oct: 10964,
    Nov: 19610,
    Dec: 15264
  },
  {
    Name: "Ella Kade",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Gipf",
    Bought: true,
    "Bank Balance": 21981,
    Rating: 1,
    "Total Winnings": 663425,
    Jan: 67741,
    Feb: 40228,
    Mar: 99194,
    Apr: 42626,
    May: 63379,
    Jun: 97415,
    Jul: 82719,
    Aug: 18108,
    Sep: 61402,
    Oct: 67339,
    Nov: 7815,
    Dec: 15459
  },
  {
    Name: "Evie Kane",
    Language: "French",
    Country: "France",
    "Game Name": "Shogi",
    Bought: true,
    "Bank Balance": 68345,
    Rating: 1,
    "Total Winnings": 688012,
    Jan: 80722,
    Feb: 32118,
    Mar: 37305,
    Apr: 62984,
    May: 60005,
    Jun: 42103,
    Jul: 55549,
    Aug: 8867,
    Sep: 98925,
    Oct: 37561,
    Nov: 81578,
    Dec: 90295
  },
  {
    Name: "Freya Keating",
    Language: "Portuguese",
    Country: "Portugal",
    "Game Name": "Mad Gab",
    Bought: false,
    "Bank Balance": 33605,
    Rating: 4,
    "Total Winnings": 432133,
    Jan: 63847,
    Feb: 85601,
    Mar: 10391,
    Apr: 25995,
    May: 20498,
    Jun: 7728,
    Jul: 29748,
    Aug: 21015,
    Sep: 14090,
    Oct: 54188,
    Nov: 81115,
    Dec: 17917
  },
  {
    Name: "Isla Keegan",
    Language: "Spanish",
    Country: "Venezuela",
    "Game Name": "Agon",
    Bought: false,
    "Bank Balance": 85320,
    Rating: 4,
    "Total Winnings": 561290,
    Jan: 4298,
    Feb: 50889,
    Mar: 6507,
    Apr: 64130,
    May: 93065,
    Jun: 89937,
    Jul: 66871,
    Aug: 50653,
    Sep: 9315,
    Oct: 38124,
    Nov: 51456,
    Dec: 36045
  },
  {
    Name: "Poppy Kingston",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Janggi (Korean Chess)",
    Bought: true,
    "Bank Balance": 36662,
    Rating: 2,
    "Total Winnings": 376142,
    Jan: 32279,
    Feb: 21402,
    Mar: 25057,
    Apr: 27076,
    May: 6543,
    Jun: 75566,
    Jul: 25457,
    Aug: 20879,
    Sep: 38301,
    Oct: 15685,
    Nov: 38276,
    Dec: 49621
  },
  {
    Name: "Daisy Kobe",
    Language: "French",
    Country: "France",
    "Game Name": "Wari",
    Bought: true,
    "Bank Balance": 1929,
    Rating: 0,
    "Total Winnings": 672259,
    Jan: 45401,
    Feb: 45864,
    Mar: 31487,
    Apr: 82386,
    May: 4540,
    Jun: 61280,
    Jul: 13095,
    Aug: 70462,
    Sep: 81316,
    Oct: 85649,
    Nov: 98029,
    Dec: 52750
  },
  {
    Name: "Layla Smith",
    Language: "Spanish",
    Country: "Argentina",
    "Game Name": "Cross and Circle",
    Bought: false,
    "Bank Balance": 30179,
    Rating: 4,
    "Total Winnings": 289890,
    Jan: 23219,
    Feb: 11523,
    Mar: 54291,
    Apr: 56665,
    May: 10031,
    Jun: 25679,
    Jul: 48014,
    Aug: 691,
    Sep: 46265,
    Oct: 12013,
    Nov: 832,
    Dec: 667
  },
  {
    Name: "Tony Connell",
    Language: "French",
    Country: "France",
    "Game Name": "Checkers",
    Bought: false,
    "Bank Balance": 15003,
    Rating: 0,
    "Total Winnings": 494472,
    Jan: 45794,
    Feb: 86444,
    Mar: 27780,
    Apr: 43262,
    May: 42593,
    Jun: 27358,
    Jul: 27397,
    Aug: 11518,
    Sep: 68239,
    Oct: 13018,
    Nov: 30318,
    Dec: 70751
  },
  {
    Name: "Andrew Flanagan",
    Language: "Italian",
    Country: "Italy",
    "Game Name": "Sahkku",
    Bought: true,
    "Bank Balance": 62546,
    Rating: 2,
    "Total Winnings": 507284,
    Jan: 45607,
    Feb: 48404,
    Mar: 41904,
    Apr: 18258,
    May: 21298,
    Jun: 43432,
    Jul: 75184,
    Aug: 42128,
    Sep: 18687,
    Oct: 69167,
    Nov: 8629,
    Dec: 74586
  },
  {
    Name: "Kevin McGee",
    Language: "Portuguese",
    Country: "Portugal",
    "Game Name": "Liu po",
    Bought: true,
    "Bank Balance": 89609,
    Rating: 2,
    "Total Winnings": 763919,
    Jan: 61527,
    Feb: 83805,
    Mar: 31742,
    Apr: 66052,
    May: 86840,
    Jun: 46653,
    Jul: 86697,
    Aug: 45786,
    Sep: 49488,
    Oct: 88414,
    Nov: 64973,
    Dec: 51942
  },
  {
    Name: "Bricker Unalkat",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Ghosts",
    Bought: false,
    "Bank Balance": 27747,
    Rating: 1,
    "Total Winnings": 520451,
    Jan: 7614,
    Feb: 39044,
    Mar: 32696,
    Apr: 11314,
    May: 44701,
    Jun: 1196,
    Jul: 92132,
    Aug: 33460,
    Sep: 38508,
    Oct: 76396,
    Nov: 84619,
    Dec: 58771
  },
  {
    Name: "Dimple Lopes",
    Language: "English",
    Country: "Ireland",
    "Game Name": "Hijara",
    Bought: false,
    "Bank Balance": 10922,
    Rating: 4,
    "Total Winnings": 603146,
    Jan: 62227,
    Feb: 83254,
    Mar: 73944,
    Apr: 51133,
    May: 11557,
    Jun: 26799,
    Jul: 24302,
    Aug: 18911,
    Sep: 55645,
    Oct: 95364,
    Nov: 52988,
    Dec: 47022
  },
  {
    Name: "Gil Beckham",
    Language: "Italian",
    Country: "Italy",
    "Game Name": "Tab",
    Bought: true,
    "Bank Balance": 35314,
    Rating: 4,
    "Total Winnings": 605803,
    Jan: 48200,
    Feb: 97195,
    Mar: 38976,
    Apr: 32289,
    May: 12043,
    Jun: 32069,
    Jul: 26714,
    Aug: 19202,
    Sep: 56406,
    Oct: 66752,
    Nov: 85215,
    Dec: 90742
  },
  {
    Name: "Sophie Black",
    Language: "French",
    Country: "France",
    "Game Name": "Othello",
    Bought: true,
    "Bank Balance": 64120,
    Rating: 2,
    "Total Winnings": 705176,
    Jan: 64672,
    Feb: 53516,
    Mar: 84903,
    Apr: 89187,
    May: 74515,
    Jun: 86211,
    Jul: 23736,
    Aug: 57592,
    Sep: 65909,
    Oct: 40899,
    Nov: 36479,
    Dec: 27557
  },
  {
    Name: "Isabelle Braxton",
    Language: "French",
    Country: "Luxembourg",
    "Game Name": "Blood Bowl",
    Bought: false,
    "Bank Balance": 52615,
    Rating: 4,
    "Total Winnings": 752870,
    Jan: 32824,
    Feb: 83391,
    Mar: 32564,
    Apr: 38941,
    May: 81146,
    Jun: 92472,
    Jul: 99529,
    Aug: 47317,
    Sep: 94708,
    Oct: 34640,
    Nov: 57369,
    Dec: 57969
  },
  {
    Name: "Emily Brennan",
    Language: "French",
    Country: "Luxembourg",
    "Game Name": "PUNCT",
    Bought: false,
    "Bank Balance": 47815,
    Rating: 2,
    "Total Winnings": 593754,
    Jan: 74837,
    Feb: 95284,
    Mar: 23476,
    Apr: 12947,
    May: 33885,
    Jun: 68912,
    Jul: 15207,
    Aug: 28522,
    Sep: 83712,
    Oct: 84173,
    Nov: 54208,
    Dec: 18591
  },
  {
    Name: "Olivia Brock",
    Language: "English",
    Country: "Ireland",
    "Game Name": "ZERTZ",
    Bought: true,
    "Bank Balance": 20255,
    Rating: 1,
    "Total Winnings": 532848,
    Jan: 33546,
    Feb: 39829,
    Mar: 22074,
    Apr: 10049,
    May: 32715,
    Jun: 88081,
    Jul: 71113,
    Aug: 59954,
    Sep: 83340,
    Oct: 54094,
    Nov: 29351,
    Dec: 8702
  },
  {
    Name: "Lily Bryson",
    Language: "Icelandic",
    Country: "Iceland",
    "Game Name": "Fanorona",
    Bought: true,
    "Bank Balance": 93725,
    Rating: 0,
    "Total Winnings": 521588,
    Jan: 73332,
    Feb: 8217,
    Mar: 28678,
    Apr: 34611,
    May: 9157,
    Jun: 61833,
    Jul: 42308,
    Aug: 53527,
    Sep: 75251,
    Oct: 25291,
    Nov: 91510,
    Dec: 17873
  },
  {
    Name: "Chloe Cadwell",
    Language: "English",
    Country: "United Kingdom",
    "Game Name": "Guess Who?",
    Bought: false,
    "Bank Balance": 19597,
    Rating: 2,
    "Total Winnings": 693658,
    Jan: 85215,
    Feb: 23035,
    Mar: 87704,
    Apr: 85909,
    May: 45211,
    Jun: 42213,
    Jul: 3421,
    Aug: 5967,
    Sep: 81730,
    Oct: 75118,
    Nov: 95259,
    Dec: 62876
  },
  {
    Name: "Isabella Cage",
    Language: "French",
    Country: "France",
    "Game Name": "Stratego",
    Bought: false,
    "Bank Balance": 95059,
    Rating: 0,
    "Total Winnings": 552995,
    Jan: 33476,
    Feb: 58201,
    Mar: 79546,
    Apr: 20869,
    May: 28050,
    Jun: 90840,
    Jul: 2833,
    Aug: 58002,
    Sep: 92182,
    Oct: 21207,
    Nov: 22109,
    Dec: 45680
  }
];

export default tableData;
