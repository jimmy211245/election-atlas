/* Election atlas – national election results
   As of 5 October 2026
   Parties in each election are ordered left to right (seating order in the hemicycle).
   Party:      [id, short name, name, colour, vote %, seats, seat change]
   Candidate:  [id, name, party, colour, % 1st round, % runoff]
   Sources: official final results of the electoral authorities (via the results tables of
   the English-language Wikipedia), Federal Returning Officer (DE), Democracy Club (UK). */
window.WAHL = {
  stand: '2026-10-05',
  upcoming: [
    ['2026-10-25', 'BRA', 'Presidential runoff'],
    ['2026-10-25', 'SRB', 'Snap parliamentary election'],
    ['2026-10-25', 'BGR', 'Presidential election'],
    ['2026-10-27', 'ISR', 'Knesset election'],
    ['2026-11-03', 'USA', 'Congressional midterms'],
    ['2026-11-07', 'NZL', 'Parliamentary election'],
    ['2026-11-29', 'ESP', 'Snap parliamentary election']
  ],
  countries: {

  /* ============================== EUROPEAN UNION ============================== */

  DEU: {
    n: 'Germany', iso: '276', reg: 'eu', sys: 'Federal parliamentary republic',
    hog: ['Chancellor', 'Friedrich Merz', 'union'], hos: ['Federal President', 'Frank-Walter Steinmeier'],
    gov: ['union', 'spd'], govNote: 'CDU/CSU–SPD coalition since 6 May 2025',
    next: 'Bundestag election by 2029 at the latest', sub: 'DEU',
    el: [{
      t: 'Bundestag election 2025', d: '2025-02-23', k: 'parl', ch: 'Bundestag', seats: 630, to: 82.5, vl: 'Second votes',
      src: {
        checked: '2026-10-06',
        origin: { t: 'No individual source was recorded when the national totals were entered. The regional maps use the official open data of the Federal Returning Officer (kerg2.csv, linked below).' },
        official: [
          { t: 'Federal Returning Officer: Bundestag election 2025, result at federal level', u: 'https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html', v: 'The page is marked “final result”. Confirms turnout (82.5%) and the seat distribution (630 seats; stored CDU/CSU 208 = CDU 164 + CSU 44).' },
          { t: 'Federal Returning Officer: open data file kerg2.csv (“official final result”)', u: 'https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/opendata/btw25/csv/kerg2.csv', v: 'The second-vote shares of all nine stored parties agree to two decimals (compared on 6 Oct 2026).' }
        ],
        note: 'No deviations found. Not covered by these sources: the seat changes against 2021.'
      },
      note: 'CDU 22.6% · CSU 6.0%. BSW (4.98%) and FDP fell short of the 5% threshold. 23 constituency winners did not get a seat because their party’s second votes did not cover it.',
      p: [
        ['linke', 'Linke', 'The Left', '#BE3075', 8.77, 64, 25],
        ['bsw', 'BSW', 'Sahra Wagenknecht Alliance', '#7D254F', 4.98, 0, 'neu'],
        ['spd', 'SPD', 'Social Democratic Party of Germany', '#E3000F', 16.41, 120, -86],
        ['gruene', 'Greens', 'Alliance 90/The Greens', '#409A3C', 11.61, 85, -33],
        ['ssw', 'SSW', 'South Schleswig Voters’ Association', '#003C8F', 0.15, 1, 0],
        ['fdp', 'FDP', 'Free Democratic Party', '#FFED00', 4.33, 0, -91],
        ['union', 'CDU/CSU', 'Christian Democratic / Christian Social Union', '#1A1A1A', 28.52, 208, 11],
        ['afd', 'AfD', 'Alternative for Germany', '#009EE0', 20.8, 152, 69],
        ['fw', 'FW', 'Free Voters', '#F7A800', 1.55, 0, 0]
      ]
    }]
  },

  AUT: {
    n: 'Austria', iso: '040', reg: 'eu', sys: 'Federal parliamentary republic',
    hog: ['Chancellor', 'Christian Stocker', 'ovp'], hos: ['Federal President', 'Alexander Van der Bellen'],
    gov: ['ovp', 'spo', 'neos'], govNote: 'ÖVP–SPÖ–NEOS coalition since 3 March 2025',
    next: 'National Council election by 2029 at the latest', sub: 'AUT',
    el: [{
      t: 'National Council election 2024', d: '2024-09-29', k: 'parl', ch: 'National Council', seats: 183, to: 77.7,
      note: 'The FPÖ came first in a National Council election for the first time.',
      p: [
        ['kpo', 'KPÖ', 'KPÖ Plus', '#AA0000', 2.39, 0, 0],
        ['gru', 'Greens', 'The Greens', '#6BA539', 8.24, 16, -10],
        ['spo', 'SPÖ', 'Social Democratic Party of Austria', '#E31E2D', 21.14, 41, 1],
        ['neos', 'NEOS', 'NEOS – The New Austria', '#E84188', 9.14, 18, 3],
        ['bier', 'Bier', 'Beer Party', '#E2B007', 2.02, 0, 'neu'],
        ['ovp', 'ÖVP', 'Austrian People’s Party', '#52B8C9', 26.27, 51, -20],
        ['fpo', 'FPÖ', 'Freedom Party of Austria', '#005DA8', 28.85, 57, 26]
      ]
    }]
  },

  BEL: {
    n: 'Belgium', iso: '056', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Bart De Wever', 'nva'], hos: ['King', 'Philippe'],
    gov: ['nva', 'mr', 'le', 'vooruit', 'cdv'], govNote: '“Arizona” coalition of N-VA, MR, Les Engagés, Vooruit and CD&V since 3 February 2025',
    next: 'Federal election 2029',
    el: [{
      t: 'Federal election 2024', d: '2024-06-09', k: 'parl', ch: 'Chamber of Representatives', seats: 150, to: 88.5,
      note: 'Voting is compulsory in Belgium. Flemish and francophone parties run separately.',
      p: [
        ['ptb', 'PTB-PVDA', 'Workers’ Party', '#8B0000', 9.86, 15, 3],
        ['ecolo', 'Ecolo', 'Ecolo (francophone Greens)', '#5AAD39', 2.93, 3, -10],
        ['groen', 'Groen', 'Groen (Flemish Greens)', '#01796F', 4.65, 6, -2],
        ['ps', 'PS', 'Parti Socialiste', '#FF0000', 8.04, 16, -4],
        ['vooruit', 'Vooruit', 'Vooruit (Flemish social democrats)', '#FF6A4D', 8.11, 13, 4],
        ['defi', 'DéFI', 'Démocrate Fédéraliste Indépendant', '#DD0081', 1.2, 1, -1],
        ['le', 'Les Engagés', 'Les Engagés', '#02C5B6', 6.77, 14, 9],
        ['cdv', 'CD&V', 'Christian Democratic & Flemish', '#FF8200', 7.98, 11, -1],
        ['ovld', 'Open VLD', 'Open Vlaamse Liberalen en Democraten', '#0087DC', 5.45, 7, -5],
        ['mr', 'MR', 'Mouvement Réformateur', '#0047AB', 10.26, 20, 6],
        ['nva', 'N-VA', 'New Flemish Alliance', '#F9CE19', 16.71, 24, -1],
        ['vb', 'VB', 'Vlaams Belang', '#A88B1C', 13.77, 20, 2]
      ]
    }]
  },

  BGR: {
    n: 'Bulgaria', iso: '100', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Rumen Radev', 'pb'], hos: ['President', 'Iliana Iotova'],
    gov: ['pb'], govNote: 'Single-party government of “Progressive Bulgaria” since 8 May 2026',
    next: 'Presidential election on 25 October 2026',
    el: [{
      t: 'Parliamentary election 2026', d: '2026-04-19', k: 'parl', ch: 'National Assembly', seats: 240, to: 50.7,
      note: 'Snap election after the Zhelyazkov government resigned. Former president Rumen Radev’s alliance became the first party in decades to win an absolute majority.',
      p: [
        ['bsp', 'BSP', 'BSP – United Left', '#DB0F28', 2.97, 0, -19],
        ['pb', 'PB', 'Progressive Bulgaria', '#0B6B57', 43.91, 131, 'neu'],
        ['ppdb', 'PP–DB', 'We Continue the Change – Democratic Bulgaria', '#4E3FD6', 12.42, 37, 1],
        ['dps', 'DPS', 'Movement for Rights and Freedoms', '#0E8FD8', 7.01, 21, -8],
        ['gerb', 'GERB–SDS', 'GERB – Union of Democratic Forces', '#1F4E9C', 13.18, 39, -27],
        ['mech', 'MECh', 'Morality, Unity, Honour', '#1A2C44', 3.18, 0, -11],
        ['vel', 'Velichie', 'Velichie (Greatness)', '#AC2225', 3.06, 0, -10],
        ['vaz', 'Vazrazhdane', 'Revival', '#B08D57', 4.19, 12, -21]
      ]
    }]
  },

  HRV: {
    n: 'Croatia', iso: '191', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Andrej Plenković', 'hdz'], hos: ['President', 'Zoran Milanović'],
    gov: ['hdz', 'dp'], govNote: 'Coalition of HDZ and the Homeland Movement (DP) since May 2024',
    next: 'Parliamentary election by 2028 at the latest',
    el: [{
      t: 'Parliamentary election 2024', d: '2024-04-17', k: 'parl', ch: 'Sabor', seats: 151, to: 61.9,
      note: 'Eight seats are reserved for national minorities.',
      p: [
        ['mozemo', 'Možemo!', 'We Can!', '#9DB82E', 9.1, 10, 5],
        ['rp', 'Rijeke pravde', 'Rivers of Justice (SDP-led)', '#ED1C24', 25.4, 42, 2],
        ['ids', 'IDS', 'Istrian Democratic Assembly', '#0CB14B', 2.25, 2, -1],
        ['min', 'Minorities', 'National minority representatives', '#9A9A9A', null, 8, 0],
        ['fokus', 'Fokus', 'Focus – Republic', '#05AACB', 2.25, 1, 0],
        ['nps', 'NPS', 'Independent Platform of the North', '#2C9180', 1.22, 2, 'neu'],
        ['hdz', 'HDZ', 'Croatian Democratic Union (alliance)', '#005BAA', 34.42, 61, -6],
        ['most', 'Most', 'Most – Croatian Sovereignists', '#E85726', 8.02, 11, -1],
        ['dp', 'DP', 'Homeland Movement (Domovinski pokret)', '#5B6B85', 9.56, 14, 2]
      ]
    }]
  },

  CYP: {
    n: 'Cyprus', iso: '196', reg: 'eu', sys: 'Presidential republic',
    hog: ['President', 'Nikos Christodoulides', null], hogColor: '#8A8F98',
    gov: [], govNote: 'Presidential system: President Christodoulides (independent) heads the government, elected 2023',
    next: 'Presidential election 2028',
    el: [{
      t: 'Parliamentary election 2026', d: '2026-05-24', k: 'parl', ch: 'House of Representatives', seats: 56, to: 66.9,
      note: '56 of the 80 seats are filled; the 24 seats of the Turkish Cypriot community remain vacant.',
      p: [
        ['akel', 'AKEL', 'Progressive Party of Working People', '#B31B1B', 23.86, 15, 0],
        ['edek', 'EDEK', 'Socialist Party EDEK', '#175047', 3.25, 0, -4],
        ['volt', 'Volt', 'Volt Cyprus', '#502379', 3.09, 0, 'neu'],
        ['alma', 'ALMA', 'ALMA – Citizens for Cyprus', '#99AC27', 5.83, 4, 'neu'],
        ['adk', 'Direct Democracy', 'Direct Democracy Cyprus', '#2F7FA8', 5.42, 4, 'neu'],
        ['diko', 'DIKO', 'Democratic Party', '#E07C00', 10, 8, -1],
        ['dipa', 'DIPA', 'Democratic Front', '#00AEEF', 3.14, 0, -4],
        ['disy', 'DISY', 'Democratic Rally', '#1569C7', 27.15, 17, 0],
        ['elam', 'ELAM', 'National Popular Front', '#101B3B', 10.9, 8, 4]
      ]
    }, {
      t: 'Presidential election 2023', d: '2023-02-12', k: 'pres', to: null,
      c: [
        ['ind', 'Nikos Christodoulides', 'Independent', '#8A8F98', 32.04, 51.97],
        ['akel', 'Andreas Mavrogiannis', 'Independent (AKEL)', '#B31B1B', 29.59, 48.03],
        ['disy', 'Averof Neofytou', 'DISY', '#1569C7', 26.11, null],
        ['elam', 'Christos Christou', 'ELAM', '#101B3B', 6.04, null]
      ]
    }]
  },

  CZE: {
    n: 'Czechia', iso: '203', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Andrej Babiš', 'ano'], hos: ['President', 'Petr Pavel'],
    gov: ['ano', 'spd', 'auto'], govNote: 'Coalition of ANO, SPD and the Motorists since 9 December 2025',
    next: 'Chamber of Deputies election 2029',
    el: [{
      t: 'Chamber of Deputies election 2025', d: '2025-10-04', k: 'parl', ch: 'Chamber of Deputies', seats: 200, to: 69,
      p: [
        ['stacilo', 'Stačilo!', 'Stačilo! (Enough!)', '#C4161C', 4.31, 0, 0],
        ['pirati', 'Piráti', 'Czech Pirate Party', '#2B2B2B', 8.97, 18, 14],
        ['stan', 'STAN', 'Mayors and Independents', '#CD0F69', 11.23, 22, -11],
        ['spolu', 'SPOLU', 'SPOLU (ODS, KDU-ČSL, TOP 09)', '#2E5BA8', 23.36, 52, -19],
        ['ano', 'ANO', 'ANO 2011', '#2DB8C5', 34.52, 80, 8],
        ['auto', 'Motoristé', 'Motorists for Themselves', '#8A5A9E', 6.77, 13, 'neu'],
        ['spd', 'SPD', 'Freedom and Direct Democracy', '#6A7A3C', 7.78, 15, -5]
      ]
    }]
  },

  DNK: {
    n: 'Denmark', iso: '208', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Mette Frederiksen', 's'], hos: ['King', 'Frederik X'],
    gov: ['s', 'sf', 'm', 'rv'], govNote: 'Frederiksen III government of the Social Democrats, SF, the Moderates and Radikale Venstre since 2 June 2026, supported by Enhedslisten and Alternativet',
    next: 'Folketing election by 2030 at the latest',
    el: [{
      t: 'Folketing election 2026', d: '2026-03-24', k: 'parl', ch: 'Folketing', seats: 179, to: 84,
      note: 'Vote shares for Denmark proper, excluding the Faroe Islands and Greenland, which elect two seats each. Worst Social Democrat result since 1903.',
      p: [
        ['ia', 'IA', 'Inuit Ataqatigiit (Greenland)', '#C8102E', null, 1, 0],
        ['el', 'Ø', 'Enhedslisten – The Red–Green Alliance', '#F7660D', 6.34, 11, 2],
        ['sf', 'SF', 'Socialist People’s Party (Green Left)', '#E07EA8', 11.58, 20, 5],
        ['alt', 'Å', 'Alternativet', '#2B8738', 2.57, 5, -1],
        ['fsd', 'JF', 'Javnaðarflokkurin (Faroe Islands)', '#D20D44', null, 1, 0],
        ['s', 'A', 'Socialdemokratiet', '#C82518', 21.84, 38, -12],
        ['rv', 'B', 'Radikale Venstre', '#733280', 5.81, 10, 3],
        ['m', 'M', 'Moderaterne', '#B48CD2', 7.7, 14, -2],
        ['nal', 'NQ', 'Naleraq (Greenland)', '#4C9E9E', null, 1, 1],
        ['v', 'V', 'Venstre', '#01438E', 10.14, 18, -5],
        ['k', 'C', 'Det Konservative Folkeparti', '#6B9249', 7.59, 13, 3],
        ['sb', 'SB', 'Sambandsflokkurin (Faroe Islands)', '#006CB4', null, 1, 0],
        ['la', 'I', 'Liberal Alliance', '#3FB2BE', 9.37, 16, 2],
        ['dd', 'Æ', 'Danmarksdemokraterne', '#668DD1', 5.75, 10, -4],
        ['bp', 'H', 'Borgernes Parti', '#2B4FB8', 2.13, 4, 'neu'],
        ['df', 'O', 'Dansk Folkeparti', '#E6B800', 9.1, 16, 11]
      ]
    }]
  },

  EST: {
    n: 'Estonia', iso: '233', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Kristen Michal', 'reform'], hos: ['President', 'Alar Karis'],
    gov: ['reform', 'e200'], govNote: 'Coalition of the Reform Party and Eesti 200 since March 2025',
    next: 'Riigikogu election, March 2027',
    el: [{
      t: 'Riigikogu election 2023', d: '2023-03-05', k: 'parl', ch: 'Riigikogu', seats: 101, to: 63.5,
      p: [
        ['sde', 'SDE', 'Social Democratic Party', '#E10600', 9.27, 9, -1],
        ['kesk', 'Kesk', 'Estonian Centre Party', '#00AA54', 15.28, 16, -10],
        ['e200', 'E200', 'Eesti 200', '#2F2A95', 13.33, 14, 14],
        ['reform', 'Reform', 'Estonian Reform Party', '#F2C500', 31.24, 37, 3],
        ['isamaa', 'Isamaa', 'Isamaa (Fatherland)', '#009CE2', 8.21, 8, -4],
        ['ekre', 'EKRE', 'Conservative People’s Party of Estonia', '#0063AF', 16.05, 17, -2]
      ]
    }]
  },

  FIN: {
    n: 'Finland', iso: '246', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Petteri Orpo', 'kok'], hos: ['President', 'Alexander Stubb'],
    gov: ['kok', 'ps', 'rkp', 'kd'], govNote: 'Coalition of the National Coalition Party, the Finns Party, the Swedish People’s Party and the Christian Democrats since June 2023',
    next: 'Parliamentary election, April 2027',
    el: [{
      t: 'Parliamentary election 2023', d: '2023-04-02', k: 'parl', ch: 'Eduskunta', seats: 200, to: 72,
      p: [
        ['vas', 'Vas', 'Left Alliance', '#F00A64', 7.06, 11, -5],
        ['sdp', 'SDP', 'Social Democratic Party', '#F54B4B', 19.95, 43, 3],
        ['vihr', 'Vihr', 'Green League', '#006845', 7.04, 13, -7],
        ['kesk', 'Kesk', 'Centre Party', '#3AAD2E', 11.29, 23, -8],
        ['rkp', 'RKP', 'Swedish People’s Party', '#E8C547', 4.31, 9, 0],
        ['as', 'ÅS', 'For Åland', '#D7DB50', 0.37, 1, 0],
        ['liik', 'Liik', 'Movement Now', '#AE2375', 2.42, 1, 0],
        ['kok', 'Kok', 'National Coalition Party', '#006288', 20.82, 48, 10],
        ['kd', 'KD', 'Christian Democrats', '#2B67C9', 4.22, 5, 0],
        ['ps', 'PS', 'Finns Party', '#FFDE55', 20.06, 46, 7]
      ]
    }, {
      t: 'Presidential election 2024', d: '2024-02-11', k: 'pres', to: 70.7,
      c: [
        ['kok', 'Alexander Stubb', 'Kok', '#006288', 27.21, 51.62],
        ['vihr', 'Pekka Haavisto', 'Independent (Greens)', '#006845', 25.8, 48.38],
        ['ps', 'Jussi Halla-aho', 'PS', '#FFDE55', 18.99, null],
        ['kesk', 'Olli Rehn', 'Independent (Kesk)', '#3AAD2E', 15.33, null]
      ]
    }]
  },

  FRA: {
    n: 'France', iso: '250', reg: 'eu', sys: 'Semi-presidential republic',
    hog: ['Prime Minister', 'Sébastien Lecornu', 'ens'], hos: ['President', 'Emmanuel Macron'],
    gov: ['ens', 'lr'], govNote: 'Minority government of Macron’s camp (Ensemble) backed by Les Républicains; Prime Minister since September 2025',
    next: 'Presidential election, April 2027',
    focus: [[-5.3, 41.3], [9.7, 51.1]],
    el: [{
      t: 'Parliamentary election 2024', d: '2024-06-30', k: 'parl', ch: 'National Assembly', seats: 577, to: 66.7, vl: '1st round',
      note: 'Snap election after the National Assembly was dissolved. Votes from the first round (30 June), seats after the second round (7 July). The RN led on votes, the left-wing NFP alliance on seats.',
      p: [
        ['nfp', 'NFP', 'Nouveau Front populaire (LFI, PS, Greens, PCF)', '#E4032E', 28.21, 180, 49],
        ['dvg', 'DVG', 'Miscellaneous left', '#F4A6A6', 1.53, 12, -9],
        ['eco', 'ECO', 'Ecologists', '#8FBC8F', 0.57, 1, 1],
        ['reg', 'REG', 'Regionalists', '#C9B400', 0.97, 9, -1],
        ['div', 'DIV', 'Others', '#BDBDBD', 0.45, 1, 0],
        ['dvc', 'DVC', 'Miscellaneous centre', '#F5D49A', 1.22, 6, 2],
        ['ens', 'Ensemble', 'Ensemble pour la République (Macron’s camp)', '#F2B705', 21.28, 159, -86],
        ['lr', 'LR', 'Les Républicains', '#1E4FB4', 6.57, 39, -25],
        ['dvd', 'DVD', 'Miscellaneous right', '#8FA8E8', 3.6, 27, 17],
        ['uxd', 'UXD', 'Union des droites (Ciotti)', '#3B4A82', 3.96, 17, 'neu'],
        ['rn', 'RN', 'Rassemblement National', '#1F2F5C', 29.26, 125, 36],
        ['dxd', 'DXD', 'Miscellaneous far right', '#404040', 0.19, 1, 1]
      ]
    }, {
      t: 'Presidential election 2022', d: '2022-04-24', k: 'pres', to: 72,
      c: [
        ['ens', 'Emmanuel Macron', 'LREM', '#F2B705', 27.85, 58.55],
        ['rn', 'Marine Le Pen', 'RN', '#1F2F5C', 23.15, 41.45],
        ['lfi', 'Jean-Luc Mélenchon', 'LFI', '#CC2443', 21.95, null],
        ['rec', 'Éric Zemmour', 'Reconquête', '#170066', 7.07, null],
        ['lr', 'Valérie Pécresse', 'LR', '#1E4FB4', 4.78, null],
        ['eelv', 'Yannick Jadot', 'EELV', '#00A650', 4.63, null],
        ['res', 'Jean Lassalle', 'Résistons!', '#26C4EC', 3.13, null],
        ['pcf', 'Fabien Roussel', 'PCF', '#DD0000', 2.28, null]
      ]
    }]
  },

  GRC: {
    n: 'Greece', iso: '300', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Kyriakos Mitsotakis', 'nd'], hos: ['President', 'Konstantinos Tasoulas'],
    gov: ['nd'], govNote: 'Single-party New Democracy government since June 2023',
    next: 'Parliamentary election by 2027 at the latest',
    el: [{
      t: 'Parliamentary election June 2023', d: '2023-06-25', k: 'parl', ch: 'Hellenic Parliament', seats: 300, to: 53.7,
      note: 'Second election within five weeks; the largest party received up to 50 bonus seats.',
      p: [
        ['kke', 'KKE', 'Communist Party of Greece', '#E30301', 7.69, 21, -5],
        ['syriza', 'SYRIZA', 'Coalition of the Radical Left', '#EE808F', 17.83, 47, -24],
        ['plefsi', 'Plefsi', 'Course of Freedom', '#9F1897', 3.17, 8, 8],
        ['pasok', 'PASOK', 'PASOK – Movement for Change', '#01783D', 11.84, 32, -9],
        ['nd', 'ND', 'Nea Dimokratia', '#1B5CC7', 40.56, 158, 12],
        ['niki', 'Niki', 'Niki (Victory)', '#910048', 3.7, 10, 10],
        ['el', 'EL', 'Greek Solution', '#6BB6E6', 4.44, 12, -4],
        ['spart', 'Spartiates', 'Spartans', '#C9963F', 4.68, 12, 'neu']
      ]
    }]
  },

  HUN: {
    n: 'Hungary', iso: '348', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Péter Magyar', 'tisza'], hos: ['President', 'András Baka'],
    gov: ['tisza'], govNote: 'Single-party Tisza government with a two-thirds majority since May 2026',
    next: 'Parliamentary election 2030',
    el: [{
      t: 'Parliamentary election 2026', d: '2026-04-12', k: 'parl', ch: 'Országgyűlés', seats: 199, to: 79.6, vl: 'List votes',
      note: 'End of Viktor Orbán’s 16 years in power. Tisza won 96 of the 106 constituencies and a constitutional majority; record turnout since 1990.',
      p: [
        ['dk', 'DK', 'Democratic Coalition', '#2A61A4', 1.1, 0, -15],
        ['tisza', 'Tisza', 'Respect and Freedom Party (Tisza)', '#2CA6C9', 53.18, 141, 'neu'],
        ['fidesz', 'Fidesz–KDNP', 'Fidesz – Hungarian Civic Alliance / KDNP', '#FF6A00', 38.61, 52, -83],
        ['mh', 'Mi Hazánk', 'Our Homeland Movement', '#688D1B', 5.63, 6, 0]
      ]
    }]
  },

  IRL: {
    n: 'Ireland', iso: '372', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Taoiseach', 'Micheál Martin', 'ff'], hos: ['President', 'Catherine Connolly'],
    gov: ['ff', 'fg'], govNote: 'Fianna Fáil–Fine Gael coalition supported by independent TDs since January 2025',
    next: 'Parliamentary election by 2030 at the latest',
    el: [{
      t: 'Parliamentary election 2024', d: '2024-11-29', k: 'parl', ch: 'Dáil Éireann', seats: 174, to: 59.7, vl: 'First preferences',
      note: 'Single transferable vote (STV) system.',
      p: [
        ['pbp', 'PBP–S', 'People Before Profit – Solidarity', '#E5007D', 2.84, 3, -2],
        ['sf', 'SF', 'Sinn Féin', '#326760', 19.01, 39, 2],
        ['sd', 'SD', 'Social Democrats', '#752F8B', 4.81, 11, 5],
        ['lab', 'Lab', 'Labour Party', '#CC0000', 4.65, 11, 5],
        ['grn', 'Greens', 'Green Party', '#22AC6F', 3.04, 1, -11],
        ['ind', 'Ind.', 'Independents', '#A3A3A3', 13.2, 16, -3],
        ['red', '100% Redress', '100% Redress', '#B5524E', 0.31, 1, 'neu'],
        ['ff', 'FF', 'Fianna Fáil', '#66BB66', 21.86, 48, 10],
        ['fg', 'FG', 'Fine Gael', '#6699FF', 20.8, 38, 3],
        ['ii', 'II', 'Independent Ireland', '#2F9E5B', 3.55, 4, 'neu'],
        ['aontu', 'Aontú', 'Aontú', '#44532A', 3.91, 2, 1]
      ]
    }]
  },

  ITA: {
    n: 'Italy', iso: '380', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Giorgia Meloni', 'fdi'], hos: ['President', 'Sergio Mattarella'],
    gov: ['fdi', 'lega', 'fi', 'nm'], govNote: 'Centre-right coalition of Fratelli d’Italia, Lega, Forza Italia and Noi Moderati since October 2022',
    next: 'Parliamentary election by 2027 at the latest',
    el: [{
      t: 'Parliamentary election 2022', d: '2022-09-25', k: 'parl', ch: 'Chamber of Deputies', seats: 400, to: 63.9, vl: 'PR votes',
      note: 'First election after the chamber was cut from 630 to 400 seats.',
      p: [
        ['avs', 'AVS', 'Greens and Left Alliance', '#BE3457', 3.64, 12, null],
        ['pd', 'PD', 'Partito Democratico', '#EF1C27', 19.04, 69, null],
        ['pe', '+Europa', 'Più Europa', '#E8B800', 2.83, 2, null],
        ['ic', 'IC', 'Impegno Civico', '#1E889D', 0.6, 1, null],
        ['m5s', 'M5S', 'MoVimento 5 Stelle', '#F5D300', 15.43, 52, null],
        ['aziv', 'Az–IV', 'Azione – Italia Viva', '#5C8FD6', 7.78, 21, 'neu'],
        ['svp', 'SVP', 'South Tyrolean People’s Party – PATT', '#3A3A3A', 0.42, 3, null],
        ['oth', 'Others', 'ScN, Vallée d’Aoste, MAIE', '#A3A3A3', null, 3, null],
        ['nm', 'NM', 'Noi Moderati', '#43528F', 0.91, 7, 'neu'],
        ['fi', 'FI', 'Forza Italia', '#0087DC', 8.11, 45, null],
        ['fdi', 'FdI', 'Fratelli d’Italia', '#03386A', 25.98, 119, null],
        ['lega', 'Lega', 'Lega', '#2E8B2E', 8.79, 66, null]
      ]
    }]
  },

  LVA: {
    n: 'Latvia', iso: '428', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Andris Kulbergs', 'as'], hos: ['President', 'Edgars Rinkēvičs'],
    gov: ['as', 'jv', 'na'], govNote: 'Kulbergs interim government (United List, New Unity, National Alliance, ZZS) since 28 May 2026; post-election government formation pending',
    next: 'Government formation under way',
    el: [{
      t: 'Saeima election 2026', d: '2026-10-03', k: 'parl', ch: 'Saeima', seats: 100, to: 51.8, prelim: true,
      pbase: 'Shares as published by the CVK: percentages of the 804,501 valid ballot envelopes. The seven lists below 5% together received 11.06%; 1.32% of the envelopes (10,655) are not assigned to any list. The shares therefore do not add up to 100%.',
      src: {
        checked: '2026-10-06',
        origin: { t: 'Vote shares: taken from the CVK results page linked below (provisional results; percentages of the valid ballot envelopes). Seats and turnout agree with the CVK. The seat changes against 2022 and the list names come from the English Wikipedia and were not checked against the CVK.', l: 'Wikipedia (EN): 2026 Latvian parliamentary election', u: 'https://en.wikipedia.org/wiki/2026_Latvian_parliamentary_election' },
        official: [
          { t: 'Central Election Commission (CVK): 15th Saeima elections – results', u: 'https://www.cvk.lv/saeima-2026-rezultati', v: 'The page is headed “provisional results” (last updated 5 Oct 2026, 12:23). Source of the stored vote shares: the percentages published there, which relate to the 804,501 valid ballot envelopes (example: United List, 283,892 votes = 35.288%). All seats (41, 17, 15, 10, 10, 7 and 0) and the turnout (51.8%: 806,641 of 1,557,615) agree with the stored values; the seven stored shares equal the published ones (compared on 6 Oct 2026).' }
        ],
        note: 'Not covered by the CVK page: the seat changes against 2022. The result is provisional, as marked by the CVK.'
      },
      note: 'Election on 3 October 2026; preliminary result. The Union of Greens and Farmers (ZZS) failed to return to parliament.',
      p: [
        ['pro', 'PRO', 'The Progressives', '#E85A8C', 7.878, 10, 0],
        ['jv', 'JV', 'New Unity', '#6AB647', 6.362, 7, -19],
        ['zzs', 'ZZS', 'Union of Greens and Farmers', '#02723A', 4.401, 0, -16],
        ['as', 'AS', 'United List', '#F29A00', 35.288, 41, 26],
        ['lpv', 'LPV', 'Latvia First', '#A8343C', 13.076, 17, 8],
        ['sv', 'SV/AJ', 'Sovereign Power / Alliance of Young Latvians', '#6A5ACD', 11.710, 15, 'neu'],
        ['na', 'NA', 'National Alliance', '#5C1A1A', 8.897, 10, -3]
      ]
    }]
  },

  LTU: {
    n: 'Lithuania', iso: '440', reg: 'eu', sys: 'Semi-presidential republic',
    hog: ['Prime Minister', 'Mindaugas Sinkevičius', 'lsdp'], hos: ['President', 'Gitanas Nausėda'],
    gov: ['lsdp', 'dsvl', 'lvzs', 'llra'], govNote: 'Coalition of the LSDP, Democrats “For Lithuania”, the Farmers and Greens and the Electoral Action of Poles since 14 July 2026',
    next: 'Seimas election, October 2028',
    el: [{
      t: 'Seimas election 2024', d: '2024-10-13', k: 'parl', ch: 'Seimas', seats: 141, to: 52.2, vl: 'List votes',
      p: [
        ['lsdp', 'LSDP', 'Social Democratic Party of Lithuania', '#E10514', 19.7, 52, 39],
        ['lvzs', 'LVŽS', 'Farmers and Greens Union', '#00A54F', 7.16, 8, -24],
        ['dsvl', 'DSVL', 'Democrats “For Lithuania”', '#002060', 9.4, 14, 'neu'],
        ['llra', 'LLRA', 'Electoral Action of Poles in Lithuania', '#781323', 3.96, 3, 0],
        ['ind', 'Ind.', 'Independents and others', '#A3A3A3', null, 3, null],
        ['ls', 'LS', 'Liberal Movement', '#FF9300', 7.85, 12, -1],
        ['lp', 'LP', 'Freedom Party', '#E852CC', 4.62, 0, -11],
        ['tslkd', 'TS–LKD', 'Homeland Union – Christian Democrats', '#00A59B', 18.35, 28, -22],
        ['ppna', 'PPNA', 'Dawn of Nemunas', '#F25D23', 15.26, 20, 'neu'],
        ['ns', 'NS', 'National Alliance', '#BB2212', 2.93, 1, 1]
      ]
    }]
  },

  LUX: {
    n: 'Luxembourg', iso: '442', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Luc Frieden', 'csv'], hos: ['Grand Duke', 'Guillaume V'],
    gov: ['csv', 'dp'], govNote: 'CSV–DP coalition since November 2023',
    next: 'Chamber election 2028',
    el: [{
      t: 'Chamber election 2023', d: '2023-10-08', k: 'parl', ch: 'Chamber of Deputies', seats: 60, to: 87.2,
      note: 'Voting is compulsory in Luxembourg.',
      p: [
        ['lenk', 'Lénk', 'Déi Lénk', '#8F0109', 3.93, 2, 0],
        ['lsap', 'LSAP', 'Luxembourg Socialist Workers’ Party', '#F10035', 18.91, 11, 1],
        ['greng', 'Gréng', 'Déi Gréng', '#8EB74A', 8.55, 4, -5],
        ['pirat', 'Pirates', 'Piratepartei', '#993399', 6.74, 3, 1],
        ['dp', 'DP', 'Demokratesch Partei', '#1F6FB5', 18.7, 14, 2],
        ['csv', 'CSV', 'Chrëschtlech-Sozial Vollekspartei', '#F28C00', 29.21, 21, 0],
        ['adr', 'ADR', 'Alternativ Demokratesch Reformpartei', '#00AAE5', 9.27, 5, 1]
      ]
    }]
  },

  MLT: {
    n: 'Malta', iso: '470', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Robert Abela', 'pl'], hos: ['President', 'Myriam Spiteri Debono'],
    gov: ['pl'], govNote: 'Single-party Labour government, fourth consecutive win',
    next: 'Parliamentary election by 2031 at the latest',
    el: [{
      t: 'Parliamentary election 2026', d: '2026-05-30', k: 'parl', ch: 'House of Representatives', seats: 79, to: 87.4, vl: 'First preferences',
      note: 'Including top-up seats for proportionality (+2 PN) and gender balance (+6 each).',
      p: [
        ['pl', 'PL', 'Partit Laburista', '#EE3224', 51.77, 42, -2],
        ['adpd', 'ADPD', 'ADPD – Green Party', '#20AA63', 1.31, 0, 0],
        ['mom', 'Momentum', 'Momentum', '#1BA99E', 1.54, 0, 'neu'],
        ['pn', 'PN', 'Partit Nazzjonalista', '#5087B2', 44.68, 37, 2]
      ]
    }]
  },

  NLD: {
    n: 'Netherlands', iso: '528', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Rob Jetten', 'd66'], hos: ['King', 'Willem-Alexander'],
    gov: ['d66', 'vvd', 'cda'], govNote: 'Jetten minority cabinet of D66, VVD and CDA (66 of 150 seats) since 23 February 2026',
    next: 'Tweede Kamer election by 2030 at the latest',
    focus: [[3.2, 50.7], [7.3, 53.6]],
    el: [{
      t: 'Tweede Kamer election 2025', d: '2025-10-29', k: 'parl', ch: 'Tweede Kamer', seats: 150, to: 78.3,
      note: 'D66 and PVV won 26 seats each; D66 was ahead by just under 30,000 votes.',
      p: [
        ['sp', 'SP', 'Socialistische Partij', '#F60000', 1.89, 3, -2],
        ['pvdd', 'PvdD', 'Partij voor de Dieren', '#006B2D', 2.08, 3, 0],
        ['denk', 'Denk', 'Denk', '#00B7B2', 2.37, 3, 0],
        ['glpvda', 'GL–PvdA', 'GroenLinks–PvdA', '#C8102E', 12.79, 20, -5],
        ['volt', 'Volt', 'Volt Nederland', '#502379', 1.1, 1, -1],
        ['d66', 'D66', 'Democraten 66', '#3DB54A', 16.94, 26, 17],
        ['50plus', '50PLUS', '50PLUS', '#92107D', 1.43, 2, 2],
        ['cu', 'CU', 'ChristenUnie', '#00A7EB', 1.9, 3, 0],
        ['cda', 'CDA', 'Christen-Democratisch Appèl', '#0B6E4F', 11.79, 18, 13],
        ['bbb', 'BBB', 'BoerBurgerBeweging', '#94C11F', 2.65, 4, -3],
        ['vvd', 'VVD', 'Volkspartij voor Vrijheid en Democratie', '#1F3C88', 14.24, 22, -2],
        ['sgp', 'SGP', 'Staatkundig Gereformeerde Partij', '#EA5B0B', 2.25, 3, 0],
        ['ja21', 'JA21', 'JA21', '#4A5A9C', 5.95, 9, 8],
        ['fvd', 'FvD', 'Forum voor Democratie', '#841818', 4.54, 7, 4],
        ['pvv', 'PVV', 'Partij voor de Vrijheid', '#2BA9E0', 16.66, 26, -11]
      ]
    }]
  },

  POL: {
    n: 'Poland', iso: '616', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Donald Tusk', 'ko'], hos: ['President', 'Karol Nawrocki'],
    gov: ['ko', 'td', 'lewica'], govNote: '15 October Coalition of KO, PSL, Polska 2050 and Lewica since December 2023',
    next: 'Sejm election, autumn 2027', sub: 'POL',
    el: [{
      t: 'Sejm election 2023', d: '2023-10-15', k: 'parl', ch: 'Sejm', seats: 460, to: 74.4,
      note: 'PiS came first, but the former opposition formed the government.',
      p: [
        ['lewica', 'Lewica', 'The Left', '#AC145A', 8.61, 26, -23],
        ['ko', 'KO', 'Civic Coalition', '#F68F2D', 30.7, 157, 23],
        ['td', 'TD', 'Third Way (PSL, Polska 2050)', '#3DB53A', 14.4, 65, 35],
        ['pis', 'PiS', 'Law and Justice (United Right)', '#263778', 35.38, 194, -41],
        ['konf', 'Konf.', 'Confederation Liberty and Independence', '#122746', 7.16, 18, 7]
      ]
    }, {
      t: 'Presidential election 2025', d: '2025-06-01', k: 'pres', to: 71.6, subKey: 'pres',
      c: [
        ['pis', 'Karol Nawrocki', 'Independent (PiS)', '#263778', 29.54, 50.89],
        ['ko', 'Rafał Trzaskowski', 'KO', '#F68F2D', 31.36, 49.11],
        ['konf', 'Sławomir Mentzen', 'Konfederacja', '#122746', 14.81, null],
        ['kkp', 'Grzegorz Braun', 'KKP', '#5A3E2B', 6.34, null],
        ['td', 'Szymon Hołownia', 'Polska 2050', '#3DB53A', 4.99, null],
        ['razem', 'Adrian Zandberg', 'Razem', '#870F57', 4.86, null],
        ['lewica', 'Magdalena Biejat', 'Lewica', '#AC145A', 4.23, null]
      ]
    }]
  },

  PRT: {
    n: 'Portugal', iso: '620', reg: 'eu', sys: 'Semi-presidential republic',
    hog: ['Prime Minister', 'Luís Montenegro', 'ad'], hos: ['President', 'António José Seguro'],
    gov: ['ad'], govNote: 'AD (PSD/CDS-PP) minority government since June 2025',
    next: 'Parliamentary election by 2029 at the latest',
    focus: [[-9.6, 36.9], [-6.1, 42.2]],
    el: [{
      t: 'Parliamentary election 2025', d: '2025-05-18', k: 'parl', ch: 'Assembleia da República', seats: 230, to: 58.3,
      note: 'Third parliamentary election in just over three years. Chega became the second-largest party by seats.',
      p: [
        ['be', 'BE', 'Bloco de Esquerda', '#9C1C47', 1.99, 1, -4],
        ['cdu', 'CDU', 'Unitary Democratic Coalition (PCP–PEV)', '#D3121C', 2.91, 3, -1],
        ['livre', 'Livre', 'LIVRE', '#9DBB1E', 4.07, 6, 2],
        ['pan', 'PAN', 'Pessoas–Animais–Natureza', '#008080', 1.38, 1, 0],
        ['ps', 'PS', 'Partido Socialista', '#E8559E', 22.83, 58, -20],
        ['jpp', 'JPP', 'Juntos pelo Povo', '#00A28B', 0.33, 1, 1],
        ['ad', 'AD', 'Aliança Democrática (PSD/CDS-PP)', '#F68A21', 31.78, 91, 11],
        ['il', 'IL', 'Iniciativa Liberal', '#00ADEF', 5.36, 9, 1],
        ['chega', 'Chega', 'Chega', '#222256', 22.76, 60, 10]
      ]
    }, {
      t: 'Presidential election 2026', d: '2026-02-08', k: 'pres', to: 50,
      c: [
        ['ps', 'António José Seguro', 'PS', '#E8559E', 31.11, 66.84],
        ['chega', 'André Ventura', 'Chega', '#222256', 23.52, 33.16],
        ['il', 'João Cotrim de Figueiredo', 'IL', '#00ADEF', 16, null],
        ['ind', 'Henrique Gouveia e Melo', 'Independent', '#A3A3A3', 12.32, null],
        ['ad', 'Luís Marques Mendes', 'PSD', '#F68A21', 11.3, null]
      ]
    }]
  },

  ROU: {
    n: 'Romania', iso: '642', reg: 'eu', sys: 'Semi-presidential republic',
    hog: ['Prime Minister (caretaker)', 'Ilie Bolojan', 'pnl'], hos: ['President', 'Nicușor Dan'],
    gov: ['pnl', 'usr', 'udmr'], govNote: 'Bolojan government in caretaker role since losing a no-confidence vote on 5 May 2026',
    next: 'Parliamentary election 2028',
    el: [{
      t: 'Parliamentary election 2024', d: '2024-12-01', k: 'parl', ch: 'Chamber of Deputies', seats: 331, to: 52.5,
      p: [
        ['psd', 'PSD', 'Social Democratic Party', '#EF3340', 21.96, 86, -24],
        ['usr', 'USR', 'Save Romania Union', '#1F3B73', 12.4, 40, -15],
        ['min', 'Minorities', 'National minorities', '#9A9A9A', 1.4, 19, 1],
        ['udmr', 'UDMR', 'Democratic Alliance of Hungarians', '#15803C', 6.33, 22, 1],
        ['pnl', 'PNL', 'National Liberal Party', '#E5C400', 13.2, 49, -44],
        ['pot', 'POT', 'Party of Young People', '#4B2A99', 6.46, 24, 'neu'],
        ['aur', 'AUR', 'Alliance for the Union of Romanians', '#F2A41F', 18.01, 63, 30],
        ['sos', 'SOS RO', 'S.O.S. Romania', '#4DA9DA', 7.36, 28, 'neu']
      ]
    }, {
      t: 'Presidential election 2025', d: '2025-05-18', k: 'pres', to: 64.7,
      note: 'Rerun of the annulled 2024 election.',
      c: [
        ['ind', 'Nicușor Dan', 'Independent', '#5FA8D3', 20.99, 53.6],
        ['aur', 'George Simion', 'AUR', '#F2A41F', 40.96, 46.4],
        ['pnl', 'Crin Antonescu', 'PSD–PNL–UDMR', '#E5C400', 20.07, null],
        ['ind2', 'Victor Ponta', 'Independent', '#C0392B', 13.04, null],
        ['usr', 'Elena Lasconi', 'USR', '#1F3B73', 2.68, null]
      ]
    }]
  },

  SVK: {
    n: 'Slovakia', iso: '703', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Robert Fico', 'smer'], hos: ['President', 'Peter Pellegrini'],
    gov: ['smer', 'hlas', 'sns'], govNote: 'Smer–Hlas–SNS coalition since October 2023',
    next: 'Parliamentary election by 2027 at the latest',
    el: [{
      t: 'Parliamentary election 2023', d: '2023-09-30', k: 'parl', ch: 'National Council', seats: 150, to: 68.4,
      p: [
        ['smer', 'Smer', 'Smer – Social Democracy', '#D82222', 22.95, 42, null],
        ['hlas', 'Hlas', 'Hlas – Social Democracy', '#830F38', 14.7, 27, 'neu'],
        ['ps', 'PS', 'Progressive Slovakia', '#00A6E6', 17.96, 32, null],
        ['sas', 'SaS', 'Freedom and Solidarity', '#8DC63F', 6.32, 11, null],
        ['kdh', 'KDH', 'Christian Democratic Movement', '#173A70', 6.82, 12, null],
        ['olano', 'OĽaNO', 'OĽaNO and Friends', '#6E7B85', 8.9, 16, null],
        ['rep', 'Republika', 'Republika', '#8A1F1F', 4.75, 0, 'neu'],
        ['sns', 'SNS', 'Slovak National Party', '#253A79', 5.63, 10, null]
      ]
    }]
  },

  SVN: {
    n: 'Slovenia', iso: '705', reg: 'eu', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Janez Janša', 'sds'], hos: ['President', 'Nataša Pirc Musar'],
    gov: ['sds', 'nsi', 'dem'], govNote: 'Centre-right coalition of SDS, NSi–SLS–Fokus and the Democrats (43 of 90 seats), supported by Resni.ca, since June 2026',
    next: 'Parliamentary election 2030',
    el: [{
      t: 'Parliamentary election 2026', d: '2026-03-22', k: 'parl', ch: 'National Assembly', seats: 90, to: 70.3,
      note: 'Robert Golob’s Freedom Movement narrowly came first but found no majority; Janez Janša became prime minister for the fourth time.',
      p: [
        ['levica', 'Levica', 'Levica and Vesna', '#8B1E3F', 5.69, 5, 0],
        ['sd', 'SD', 'Social Democrats', '#E3000F', 6.71, 6, -1],
        ['gs', 'GS', 'Freedom Movement (Gibanje Svoboda)', '#00569D', 28.66, 29, -12],
        ['min', 'Minorities', 'Italian and Hungarian communities', '#9A9A9A', null, 2, 0],
        ['resnica', 'Resni.ca', 'Resni.ca (Truth)', '#7C5199', 5.49, 5, 5],
        ['dem', 'Demokrati', 'Democrats (Anže Logar)', '#2E3F8F', 6.69, 6, 'neu'],
        ['nsi', 'NSi', 'NSi – SLS – Fokus', '#0099C7', 9.26, 9, 1],
        ['sds', 'SDS', 'Slovenian Democratic Party', '#F2C500', 27.88, 28, 1]
      ]
    }]
  },

  ESP: {
    n: 'Spain', iso: '724', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Pedro Sánchez', 'psoe'], hos: ['King', 'Felipe VI'],
    gov: ['psoe', 'sumar'], govNote: 'PSOE–Sumar minority coalition since November 2023',
    next: 'Snap parliamentary election on 29 November 2026',
    focus: [[-9.5, 35.9], [4.5, 43.9]],
    el: [{
      t: 'Parliamentary election 2023', d: '2023-07-23', k: 'parl', ch: 'Congress of Deputies', seats: 350, to: 66.6,
      note: 'The PP came first; Sánchez stayed in office with the support of regional parties.',
      p: [
        ['bildu', 'EH Bildu', 'Euskal Herria Bildu', '#00AC8E', 1.36, 6, 1],
        ['bng', 'BNG', 'Bloque Nacionalista Galego', '#7FB6DF', 0.62, 1, 0],
        ['erc', 'ERC', 'Esquerra Republicana de Catalunya', '#FFB232', 1.89, 7, -6],
        ['sumar', 'Sumar', 'Sumar', '#E5317F', 12.33, 31, -7],
        ['psoe', 'PSOE', 'Partido Socialista Obrero Español', '#EF1C27', 31.68, 121, 1],
        ['pnv', 'PNV', 'Partido Nacionalista Vasco', '#4AAE4A', 1.12, 5, -1],
        ['cca', 'CCa', 'Coalición Canaria', '#E6C200', 0.47, 1, 0],
        ['junts', 'Junts', 'Junts per Catalunya', '#20B7A8', 1.6, 7, 3],
        ['pp', 'PP', 'Partido Popular', '#1D84CE', 33.06, 137, 48],
        ['upn', 'UPN', 'Unión del Pueblo Navarro', '#00599B', 0.21, 1, -1],
        ['vox', 'Vox', 'Vox', '#63BE21', 12.38, 33, -19]
      ]
    }]
  },

  SWE: {
    n: 'Sweden', iso: '752', reg: 'eu', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister (caretaker)', 'Ulf Kristersson', 'm'], hos: ['King', 'Carl XVI Gustaf'],
    gov: ['m', 'kd', 'l'], govNote: 'After the election defeat Kristersson is only caretaker. Magdalena Andersson (S) has been asked to form a government.',
    next: 'Government formation under way',
    el: [{
      t: 'Riksdag election 2026', d: '2026-09-13', k: 'parl', ch: 'Riksdag', seats: 349, to: 84.9,
      note: 'The red-green bloc (S, V, C, MP) won 176 seats, the outgoing government bloc 173.',
      p: [
        ['v', 'V', 'Vänsterpartiet (Left Party)', '#B00000', 8.4, 30, 6],
        ['s', 'S', 'Socialdemokraterna', '#ED1B34', 28.02, 99, -8],
        ['mp', 'MP', 'Miljöpartiet (Green Party)', '#2B912C', 6.12, 22, 4],
        ['c', 'C', 'Centerpartiet', '#0A7A4B', 7.03, 25, 1],
        ['l', 'L', 'Liberalerna', '#006AB3', 5.34, 19, 3],
        ['kd', 'KD', 'Kristdemokraterna', '#231977', 6.17, 22, 3],
        ['m', 'M', 'Moderaterna', '#019CDB', 19.85, 70, 2],
        ['sd', 'SD', 'Sverigedemokraterna', '#E3C200', 17.48, 62, -11]
      ]
    }]
  },

  /* ============================== REST OF EUROPE ============================== */

  GBR: {
    n: 'United Kingdom', iso: '826', reg: 'eur', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Andy Burnham', 'lab'], hos: ['King', 'Charles III'],
    gov: ['lab'], govNote: 'Single-party Labour government. Andy Burnham succeeded Keir Starmer on 20 July 2026.',
    next: 'General election by 2029 at the latest', sub: 'GBR',
    focus: [[-8.2, 49.9], [1.8, 60.9]],
    el: [{
      t: 'General election 2024', d: '2024-07-04', k: 'parl', ch: 'House of Commons', seats: 650, to: 59.7,
      note: 'First past the post in 650 constituencies: Labour won 63% of the seats with 33.7% of the vote; Reform UK got 14.3% and 5 seats.',
      p: [
        ['sf', 'SF', 'Sinn Féin', '#326760', 0.7, 7, null],
        ['sdlp', 'SDLP', 'Social Democratic and Labour Party', '#2AA82C', 0.3, 2, null],
        ['grn', 'Greens', 'Green Party of England and Wales', '#02A95B', 6.4, 4, null],
        ['lab', 'Labour', 'Labour Party', '#E4003B', 33.7, 411, null],
        ['pc', 'PC', 'Plaid Cymru', '#008672', 0.7, 4, null],
        ['snp', 'SNP', 'Scottish National Party', '#F2D930', 2.5, 9, null],
        ['ld', 'LD', 'Liberal Democrats', '#FAA61A', 12.2, 72, null],
        ['all', 'Alliance', 'Alliance Party of Northern Ireland', '#E8B923', 0.4, 1, null],
        ['ind', 'Ind.', 'Independents', '#A3A3A3', 2, 6, null],
        ['spk', 'Speaker', 'Speaker of the House', '#555555', 0.1, 1, null],
        ['con', 'Con', 'Conservative Party', '#0087DC', 23.7, 121, null],
        ['uup', 'UUP', 'Ulster Unionist Party', '#48A5EE', 0.3, 1, null],
        ['dup', 'DUP', 'Democratic Unionist Party', '#D46A4C', 0.6, 5, null],
        ['tuv', 'TUV', 'Traditional Unionist Voice', '#0C3A6A', 0.2, 1, null],
        ['ref', 'Reform', 'Reform UK', '#12B6CF', 14.3, 5, null]
      ]
    }]
  },

  CHE: {
    n: 'Switzerland', iso: '756', reg: 'eur', sys: 'Directorial system',
    hog: ['Federal Council', 'Collegial government (concordance)', null], hogColor: '#8A8F98', hos: ['President of the Confederation 2026', 'Guy Parmelin (SVP)'],
    gov: ['svp', 'sp', 'fdp', 'mitte'], govNote: 'Concordance government (“magic formula”): Federal Councillors SVP 2, SP 2, FDP 2, Centre 1',
    next: 'National Council election, October 2027',
    el: [{
      t: 'National Council election 2023', d: '2023-10-22', k: 'parl', ch: 'National Council', seats: 200, to: 46.6,
      p: [
        ['sp', 'SP', 'Social Democratic Party', '#E4002B', 18.27, 41, 2],
        ['gps', 'Greens', 'Green Party of Switzerland', '#84B414', 9.78, 23, -5],
        ['glp', 'GLP', 'Green Liberal Party', '#B8CF00', 7.55, 10, -6],
        ['evp', 'EVP', 'Evangelical People’s Party', '#EFDA18', 1.95, 2, -1],
        ['mitte', 'Centre', 'The Centre', '#FF9B00', 14.06, 29, 1],
        ['fdp', 'FDP', 'FDP.Die Liberalen', '#0E52A0', 14.25, 28, -1],
        ['mcg', 'MCG', 'Mouvement Citoyens Genevois', '#CE9D24', 0.51, 2, 2],
        ['lega', 'Lega', 'Lega dei Ticinesi', '#6495ED', 0.55, 1, 0],
        ['edu', 'EDU', 'Federal Democratic Union', '#C71585', 1.23, 2, 1],
        ['svp', 'SVP', 'Swiss People’s Party', '#007A3D', 27.93, 62, 9]
      ]
    }]
  },

  NOR: {
    n: 'Norway', iso: '578', reg: 'eur', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Jonas Gahr Støre', 'ap'], hos: ['King', 'Haakon VIII'],
    gov: ['ap'], govNote: 'Labour Party (Arbeiderpartiet) minority government',
    next: 'Storting election, September 2029',
    focus: [[4.5, 57.9], [31.2, 71.2]],
    el: [{
      t: 'Storting election 2025', d: '2025-09-08', k: 'parl', ch: 'Storting', seats: 169, to: 80.1,
      p: [
        ['r', 'R', 'Rødt (Red Party)', '#871212', 5.32, 9, 1],
        ['sv', 'SV', 'Sosialistisk Venstreparti', '#B5317C', 5.63, 9, -4],
        ['ap', 'Ap', 'Arbeiderpartiet', '#E11926', 28.02, 53, 5],
        ['mdg', 'MDG', 'Miljøpartiet De Grønne', '#6AB023', 4.74, 8, 5],
        ['sp', 'Sp', 'Senterpartiet', '#00843D', 5.59, 9, -19],
        ['krf', 'KrF', 'Kristelig Folkeparti', '#E8C800', 4.2, 7, 4],
        ['v', 'V', 'Venstre', '#006666', 3.69, 3, -5],
        ['h', 'H', 'Høyre', '#0065F1', 14.65, 24, -12],
        ['frp', 'FrP', 'Fremskrittspartiet', '#004F80', 23.85, 47, 26]
      ]
    }]
  },

  ISL: {
    n: 'Iceland', iso: '352', reg: 'eur', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Kristrún Frostadóttir', 'sam'], hos: ['President', 'Halla Tómasdóttir'],
    gov: ['sam', 'vid', 'flf'], govNote: 'Coalition of the Social Democratic Alliance, Viðreisn and the People’s Party since December 2024',
    next: 'Althing election by 2028 at the latest',
    el: [{
      t: 'Althing election 2024', d: '2024-11-30', k: 'parl', ch: 'Althing', seats: 63, to: 80.2,
      p: [
        ['sam', 'S', 'Samfylkingin (Social Democratic Alliance)', '#ED1400', 20.75, 15, 9],
        ['vid', 'C', 'Viðreisn (Reform Party)', '#FF7D14', 15.82, 11, 6],
        ['flf', 'F', 'Flokkur fólksins (People’s Party)', '#E6B422', 13.78, 10, 4],
        ['fram', 'B', 'Framsóknarflokkurinn (Progressive Party)', '#3DAA5C', 7.8, 5, -8],
        ['d', 'D', 'Sjálfstæðisflokkurinn (Independence Party)', '#00ADEF', 19.36, 14, -2],
        ['mid', 'M', 'Miðflokkurinn (Centre Party)', '#141F6E', 12.1, 8, 5]
      ]
    }]
  },

  UKR: {
    n: 'Ukraine', iso: '804', reg: 'eur', sys: 'Semi-presidential republic',
    hog: ['Prime Minister', 'Serhii Koretskyi', 'sluha'], hos: ['President', 'Volodymyr Zelenskyy'],
    gov: ['sluha'], govNote: 'No elections have been held under martial law since 2022; the mandates of president and parliament continue.',
    next: 'Elections suspended (martial law)',
    el: [{
      t: 'Parliamentary election 2019', d: '2019-07-21', k: 'parl', ch: 'Verkhovna Rada', seats: 423, to: 49.2, vl: 'List votes',
      note: '26 of the 450 seats could not be filled because of the Russian occupation. The pro-Russian Opposition Platform was banned in 2022.',
      p: [
        ['opzzh', 'OPZZh', 'Opposition Platform – For Life', '#1B62B0', 13.05, 43, 'neu'],
        ['opbl', 'Opp. Bloc', 'Opposition Bloc', '#2F52A0', 3.03, 6, 'neu'],
        ['sluha', 'Sluha Narodu', 'Servant of the People', '#38B34A', 43.16, 254, 'neu'],
        ['ind', 'Ind.', 'Independents and others', '#A3A3A3', null, 48, null],
        ['batk', 'Batkivshchyna', 'Fatherland', '#ED1C24', 8.18, 26, 6],
        ['holos', 'Holos', 'Voice', '#FA4616', 5.82, 20, 'neu'],
        ['es', 'ES', 'European Solidarity', '#8C1D40', 8.1, 25, -106],
        ['svob', 'Svoboda', 'Svoboda (Freedom)', '#0E294D', 2.15, 1, -5]
      ]
    }, {
      t: 'Presidential election 2019', d: '2019-04-21', k: 'pres', to: 62.1,
      c: [
        ['sluha', 'Volodymyr Zelenskyy', 'Servant of the People', '#38B34A', 30.24, 73.22],
        ['es', 'Petro Poroshenko', 'Independent (BPP)', '#8C1D40', 15.95, 24.45],
        ['batk', 'Yulia Tymoshenko', 'Batkivshchyna', '#ED1C24', 13.4, null],
        ['opzzh', 'Yuriy Boyko', 'Independent', '#1B62B0', 11.67, null]
      ]
    }]
  },

  SRB: {
    n: 'Serbia', iso: '688', reg: 'eur', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Đuro Macut', 'sns'], hos: ['President (acting)', 'Ana Brnabić'],
    gov: ['sns', 'sps'], govNote: 'SNS-led government. President Vučić resigned on 27 September 2026 to run in the parliamentary election.',
    next: 'Snap parliamentary election on 25 October 2026',
    el: [{
      t: 'Parliamentary election 2023', d: '2023-12-17', k: 'parl', ch: 'National Assembly', seats: 250, to: 58.8,
      p: [
        ['spn', 'SPN', 'Serbia Against Violence', '#F25C54', 24.32, 65, 25],
        ['sps', 'SPS', 'Socialist Party of Serbia (alliance)', '#B5121B', 6.73, 18, -13],
        ['min', 'Minorities', 'Minority lists (SVM, SDA and others)', '#3E8E5E', null, 12, null],
        ['sns', 'SNS', '“Serbia Must Not Stop” (SNS alliance)', '#1F4E9C', 48.07, 129, 9],
        ['migin', 'MI–GIN', 'We – Voice of the People', '#6B6B4E', 4.82, 13, 'neu'],
        ['nada', 'NADA', 'National Democratic Alternative', '#4E5964', 5.16, 13, -1]
      ]
    }]
  },

  /* ============================== AMERICAS ============================== */

  USA: {
    n: 'United States', iso: '840', reg: 'am', sys: 'Presidential republic',
    hog: ['President', 'Donald Trump', 'rep'],
    gov: ['rep'], govNote: 'Republican administration; Republicans also control the House and the Senate',
    next: 'Congressional midterms on 3 November 2026', sub: 'USA',
    focus: [[-125, 24.4], [-66.9, 49.4]],
    el: [{
      t: 'Presidential election 2024', d: '2024-11-05', k: 'pres', to: 63.9, ev: { rep: 312, dem: 226 },
      src: {
        checked: '2026-10-06',
        origin: { t: 'English Wikipedia, 2024 United States presidential election, table “Results by state” (national total row). The state and county results come from that table and from a county data set (tonmcg).', l: 'Wikipedia (EN): 2024 US presidential election – Results by state', u: 'https://en.wikipedia.org/wiki/2024_United_States_presidential_election#Results_by_state' },
        official: [
          { t: 'Federal Election Commission: Official 2024 Presidential General Election Results (PDF, compiled 16 Jan 2025)', u: 'https://www.fec.gov/resources/cms-content/documents/2024presgeresults.pdf', v: 'Confirms the stored national figures: Trump 77,302,580 votes (49.80%), Harris 75,017,613 (48.32%), Stein 0.56%, Kennedy 0.49%, Oliver 0.42%, 155,238,302 votes in total; electoral votes 312 and 226.' },
          { t: 'U.S. National Archives: 2024 Electoral College results', u: 'https://www.archives.gov/electoral-college/2024', v: 'Confirms 312 electoral votes for Trump and 226 for Harris, 270 needed.' }
        ],
        note: 'Only the national totals were compared; the state and county results were not checked against the states’ election offices. Not covered: turnout (63.9%) and the statement about the swing states.'
      },
      note: 'Trump won all seven swing states and became the first Republican since 2004 to win the national popular vote.',
      c: [
        ['rep', 'Donald Trump', 'Republicans', '#D22532', 49.8, null],
        ['dem', 'Kamala Harris', 'Democrats', '#2E64B5', 48.32, null],
        ['grn', 'Jill Stein', 'Green Party', '#17AA5C', 0.56, null],
        ['ind', 'Robert F. Kennedy Jr.', 'Independent', '#A3A3A3', 0.49, null],
        ['lib', 'Chase Oliver', 'Libertarian Party', '#E8C000', 0.42, null]
      ]
    }, {
      t: 'House of Representatives 2024', d: '2024-11-05', k: 'parl', ch: 'House of Representatives', seats: 435,
      p: [
        ['dem', 'Democrats', 'Democratic Party', '#2E64B5', 47.19, 215, 2],
        ['rep', 'Republicans', 'Republican Party', '#D22532', 49.75, 220, -2]
      ]
    }, {
      t: 'Senate (since January 2025)', d: '2024-11-05', k: 'parl', ch: 'Senate', seats: 100,
      note: 'Composition of the 119th Congress. The two independents (Sanders, King) caucus with the Democrats.',
      p: [
        ['dem', 'Democrats', 'Democratic Party', '#2E64B5', null, 45, -2],
        ['ind', 'Independents', 'Independents (caucus with Democrats)', '#7FA6D9', null, 2, -2],
        ['rep', 'Republicans', 'Republican Party', '#D22532', null, 53, 4]
      ]
    }]
  },

  CAN: {
    n: 'Canada', iso: '124', reg: 'am', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Mark Carney', 'lib'], hos: ['King', 'Charles III'],
    gov: ['lib'], govNote: 'Liberal minority government',
    next: 'General election by 2029 at the latest', sub: 'CAN',
    el: [{
      t: 'General election 2025', d: '2025-04-28', k: 'parl', ch: 'House of Commons', seats: 343, to: 69.5,
      note: 'Fourth consecutive Liberal win, just short of a majority (172).',
      p: [
        ['ndp', 'NDP', 'New Democratic Party', '#F37021', 6.29, 7, -18],
        ['grn', 'Greens', 'Green Party', '#3D9B35', 1.22, 1, -1],
        ['lib', 'Liberals', 'Liberal Party', '#D71920', 43.76, 169, 9],
        ['bq', 'Bloc', 'Bloc Québécois', '#33B2CC', 6.29, 22, -10],
        ['con', 'Conservatives', 'Conservative Party', '#1A4782', 41.31, 144, 25]
      ]
    }]
  },

  MEX: {
    n: 'Mexico', iso: '484', reg: 'am', sys: 'Presidential republic',
    hog: ['President', 'Claudia Sheinbaum', 'morena'],
    gov: ['morena', 'pvem', 'pt'], govNote: '“Sigamos Haciendo Historia” alliance of Morena, PVEM and PT with a two-thirds majority in the Chamber of Deputies',
    next: 'Parliamentary election, June 2027', sub: 'MEX',
    el: [{
      t: 'Presidential election 2024', d: '2024-06-02', k: 'pres', to: 61,
      note: 'Claudia Sheinbaum is Mexico’s first female president.',
      c: [
        ['morena', 'Claudia Sheinbaum', 'Morena, PVEM, PT', '#B5261E', 59.76, null],
        ['pan', 'Xóchitl Gálvez', 'PAN, PRI, PRD', '#1F5AA6', 27.45, null],
        ['mc', 'Jorge Álvarez Máynez', 'Movimiento Ciudadano', '#FF8C00', 10.32, null]
      ]
    }, {
      t: 'Chamber of Deputies 2024', d: '2024-06-02', k: 'parl', ch: 'Cámara de Diputados', seats: 500, to: 61, vl: 'List votes',
      p: [
        ['pt', 'PT', 'Partido del Trabajo', '#E8706A', 5.68, 51, 14],
        ['morena', 'Morena', 'Movimiento Regeneración Nacional', '#B5261E', 42.4, 236, 38],
        ['pvem', 'PVEM', 'Partido Verde Ecologista', '#7DB540', 8.72, 77, 34],
        ['mc', 'MC', 'Movimiento Ciudadano', '#FF8C00', 11.34, 27, 4],
        ['ind', 'Ind.', 'Independents', '#A3A3A3', 0.13, 1, 1],
        ['prd', 'PRD', 'Partido de la Revolución Democrática', '#FFCD00', 2.53, 1, -14],
        ['pri', 'PRI', 'Partido Revolucionario Institucional', '#00923F', 11.56, 35, -35],
        ['pan', 'PAN', 'Partido Acción Nacional', '#1F5AA6', 17.55, 72, -42]
      ]
    }]
  },

  BRA: {
    n: 'Brazil', iso: '076', reg: 'am', sys: 'Presidential republic',
    hog: ['President', 'Luiz Inácio Lula da Silva', 'pt'],
    gov: ['pt'], govNote: 'President Lula (PT) in office until 1 January 2027',
    next: 'Presidential runoff on 25 October 2026', sub: 'BRA',
    el: [{
      t: 'Presidential election 2026 · 1st round', d: '2026-10-04', k: 'pres', to: 78.9, runoffDue: '2026-10-25',
      src: {
        checked: '2026-10-06',
        origin: { t: 'English Wikipedia, 2026 Brazilian general election, table “President” (first round) and the table of results by federative unit. For these figures the Wikipedia page gives no reference link of its own.', l: 'Wikipedia (EN): 2026 Brazilian general election', u: 'https://en.wikipedia.org/wiki/2026_Brazilian_general_election' },
        official: [
          { t: 'TSE (Superior Electoral Court): “Flávio Bolsonaro (PL) e Lula (PT) vão disputar o 2º turno …”, news item of 5 Oct 2026', u: 'https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/flavio-bolsonaro-e-lula-vao-disputar-o-2o-turno-para-a-presidencia-da-republica', v: 'With 99.99% of the ballot boxes counted (0:11 on 5 Oct): Flávio Bolsonaro 47.03%, Lula 45.16% of the valid votes; both advance to the runoff. These shares match the stored values.' },
          { t: 'TSE: Eleições 2026 – principais datas do calendário eleitoral (6 Mar 2026)', u: 'https://www.tse.jus.br/comunicacao/noticias/2026/Marco/eleicoes-2026-confira-as-principais-datas-do-calendario-eleitoral', v: 'Confirms the first round on 4 Oct 2026 and a possible runoff on 25 Oct 2026.' }
        ],
        note: 'The pages load in a normal browser; the TSE server rejects automated requests. Deviation: the TSE item (99.99% counted) gives 56,104,268 votes for Bolsonaro and 53,876,617 for Lula, the Wikipedia table 56,104,503 and 53,879,538; the atlas stores shares only. Not covered: the shares of the other candidates, turnout (78.9%) and the state results. The TSE results portal (resultados.tse.jus.br) is interactive; its content could not be read automatically.'
      },
      note: 'First round on 4 October 2026: Flávio Bolsonaro and Lula face each other in the runoff on 25 October 2026.',
      c: [
        ['pl', 'Flávio Bolsonaro', 'PL', '#1F5AA6', 47.03, null],
        ['pt', 'Luiz Inácio Lula da Silva', 'PT', '#E20E28', 45.16, null],
        ['avante', 'Augusto Cury', 'Avante', '#088F8F', 2.89, null],
        ['missao', 'Renan Santos', 'Missão', '#E8A900', 2.24, null],
        ['psd', 'Ronaldo Caiado', 'PSD', '#F08A00', 2.18, null],
        ['novo', 'Romeu Zema', 'Novo', '#F3701B', 0.27, null]
      ]
    }]
  },

  ARG: {
    n: 'Argentina', iso: '032', reg: 'am', sys: 'Presidential republic',
    hog: ['President', 'Javier Milei', 'lla'],
    gov: ['lla'], govNote: 'La Libertad Avanza; LLA came first in the 2025 midterms with 40.7%',
    next: 'Presidential election 2027',
    el: [{
      t: 'Presidential election 2023', d: '2023-11-19', k: 'pres', to: 76.3,
      c: [
        ['lla', 'Javier Milei', 'La Libertad Avanza', '#6C4C99', 29.99, 55.65],
        ['uxp', 'Sergio Massa', 'Unión por la Patria', '#36B3ED', 36.78, 44.35],
        ['jxc', 'Patricia Bullrich', 'Juntos por el Cambio', '#E6B800', 23.81, null],
        ['hnp', 'Juan Schiaretti', 'Hacemos por Nuestro País', '#4AA3A2', 6.73, null],
        ['fit', 'Myriam Bregman', 'Frente de Izquierda', '#C0392B', 2.7, null]
      ]
    }]
  },

  /* ============================== ASIA & MIDDLE EAST ============================== */

  TUR: {
    n: 'Turkey', iso: '792', reg: 'as', sys: 'Presidential republic',
    hog: ['President', 'Recep Tayyip Erdoğan', 'akp'],
    gov: ['akp', 'mhp'], govNote: 'Presidential system; in parliament Erdoğan’s AKP relies on the “People’s Alliance” with the MHP',
    next: 'Presidential and parliamentary elections 2028',
    el: [{
      t: 'Presidential election 2023', d: '2023-05-28', k: 'pres', to: 84.2,
      c: [
        ['akp', 'Recep Tayyip Erdoğan', 'AKP', '#F59C00', 49.52, 52.18],
        ['chp', 'Kemal Kılıçdaroğlu', 'CHP', '#E30A17', 44.88, 47.82],
        ['ata', 'Sinan Oğan', 'ATA Alliance', '#373736', 5.17, null],
        ['mp', 'Muharrem İnce', 'Memleket', '#0D5DA6', 0.43, null]
      ]
    }, {
      t: 'Parliamentary election 2023', d: '2023-05-14', k: 'parl', ch: 'Grand National Assembly', seats: 600, to: 87,
      p: [
        ['tip', 'TİP', 'Workers’ Party of Turkey', '#BE0A11', 1.77, 4, 2],
        ['ysp', 'YSP', 'Green Left Party (HDP successor)', '#7E2A8C', 8.9, 61, -4],
        ['chp', 'CHP', 'Republican People’s Party', '#E30A17', 25.34, 169, 23],
        ['iyi', 'İYİ', 'İYİ Party (Good Party)', '#3DB5E6', 9.68, 43, 0],
        ['akp', 'AKP', 'Justice and Development Party', '#F59C00', 35.56, 268, -27],
        ['yrp', 'YRP', 'New Welfare Party', '#4A4A4A', 2.8, 5, 'neu'],
        ['mhp', 'MHP', 'Nationalist Movement Party', '#B22222', 10.05, 50, 1]
      ]
    }]
  },

  ISR: {
    n: 'Israel', iso: '376', reg: 'as', sys: 'Parliamentary republic',
    hog: ['Prime Minister', 'Benjamin Netanyahu', 'likud'], hos: ['President', 'Isaac Herzog'],
    gov: ['likud', 'rzp', 'shas', 'utj'], govNote: 'Right-wing religious coalition (Netanyahu VI government, since December 2022); its make-up has changed several times since',
    next: 'Knesset election on 27 October 2026',
    el: [{
      t: 'Knesset election 2022', d: '2022-11-01', k: 'parl', ch: 'Knesset', seats: 120, to: 70.6,
      p: [
        ['hadash', 'Hadash–Ta’al', 'Hadash–Ta’al', '#D42436', 3.75, 5, 0],
        ['raam', 'Ra’am', 'United Arab List', '#15793D', 4.07, 5, 1],
        ['labor', 'Labor', 'Israeli Labor Party', '#F05A28', 3.69, 4, -3],
        ['ya', 'Yesh Atid', 'Yesh Atid (There Is a Future)', '#3FB3E0', 17.79, 24, 7],
        ['nu', 'National Unity', 'HaMachane HaMamlachti', '#7C6CC4', 9.08, 12, -2],
        ['yb', 'Yisrael Beiteinu', 'Yisrael Beiteinu', '#0B4F6C', 4.48, 6, -1],
        ['likud', 'Likud', 'Likud', '#1F5AA5', 23.41, 32, 2],
        ['shas', 'Shas', 'Shas', '#262626', 8.25, 11, 2],
        ['utj', 'UTJ', 'United Torah Judaism', '#5A5A5A', 5.88, 7, 0],
        ['rzp', 'Religious Zionism', 'Religious Zionism – Otzma Yehudit', '#4F9298', 10.84, 14, 8]
      ]
    }]
  },

  JPN: {
    n: 'Japan', iso: '392', reg: 'as', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Sanae Takaichi', 'ldp'], hos: ['Emperor', 'Naruhito'],
    gov: ['ldp', 'ishin'], govNote: 'LDP–Ishin coalition (352 of 465 seats)',
    next: 'House of Councillors election 2028',
    el: [{
      t: 'General election 2026', d: '2026-02-08', k: 'parl', ch: 'Shūgiin (House of Representatives)', seats: 465, to: 56.3, vl: 'PR votes',
      note: 'Record win: the LDP alone won 316 seats, a two-thirds majority.',
      p: [
        ['jcp', 'JCP', 'Japanese Communist Party', '#9E1F63', 4.4, 4, -4],
        ['reiwa', 'Reiwa', 'Reiwa Shinsengumi', '#ED008C', 2.92, 1, -8],
        ['cra', 'CRA', 'Centrist Reform Alliance (CDP + Kōmeitō)', '#0073BD', 18.23, 49, -123],
        ['mirai', 'Mirai', 'Team Mirai', '#4FC7B5', 6.66, 11, 'neu'],
        ['dpfp', 'DPFP', 'Democratic Party for the People', '#FFBA00', 9.73, 28, 0],
        ['ishin', 'Ishin', 'Nippon Ishin no Kai', '#8DB33A', 8.63, 36, -2],
        ['ind', 'Ind.', 'Independents', '#A3A3A3', null, 4, -8],
        ['ldp', 'LDP', 'Liberal Democratic Party', '#D7003A', 36.72, 316, 125],
        ['genzei', 'Genzei', 'Tax Cuts Japan – Yukoku', '#18378A', 1.42, 1, 'neu'],
        ['sanseito', 'Sanseitō', 'Sanseitō', '#EE7300', 7.44, 15, 12]
      ]
    }]
  },

  KOR: {
    n: 'South Korea', iso: '410', reg: 'as', sys: 'Presidential republic',
    hog: ['President', 'Lee Jae-myung', 'dp'],
    gov: ['dp'], govNote: 'President Lee (Democratic Party) since 4 June 2025; the DP holds the majority in the National Assembly',
    next: 'Parliamentary election, April 2028',
    el: [{
      t: 'Presidential election 2025', d: '2025-06-03', k: 'pres', to: 79.4,
      note: 'Snap election after Yoon Suk Yeol was removed from office.',
      c: [
        ['dp', 'Lee Jae-myung', 'Democratic Party', '#152484', 49.42, null],
        ['ppp', 'Kim Moon-soo', 'People Power Party', '#E61E2B', 41.15, null],
        ['reform', 'Lee Jun-seok', 'Reform Party', '#EA5504', 8.34, null]
      ]
    }, {
      t: 'Parliamentary election 2024', d: '2024-04-10', k: 'parl', ch: 'National Assembly', seats: 300, to: 67, vl: 'PR votes',
      p: [
        ['prog', 'Progressive', 'Progressive Party', '#D6001C', null, 3, null],
        ['oth', 'Others', 'Other partners of the Democratic Alliance', '#8C9DD6', null, 4, null],
        ['rkp', 'RKP', 'Rebuilding Korea Party', '#2773BA', 24.25, 12, 'neu'],
        ['dp', 'DP', 'Democratic Party (Democratic Alliance)', '#152484', 26.7, 169, null],
        ['nfp', 'New Future', 'New Future Party', '#45BABD', 1.71, 1, 'neu'],
        ['reform', 'Reform', 'Reform Party', '#EA5504', 3.62, 3, 'neu'],
        ['ppp', 'PPP', 'People Power Party', '#E61E2B', 36.67, 108, null]
      ]
    }]
  },

  IND: {
    n: 'India', iso: '356', reg: 'as', sys: 'Federal parliamentary republic',
    hog: ['Prime Minister', 'Narendra Modi', 'bjp'], hos: ['President', 'Droupadi Murmu'],
    gov: ['bjp', 'tdp', 'jdu', 'shs', 'ljp', 'nda'], govNote: 'National Democratic Alliance coalition (293 of 543 seats), Modi’s third term',
    next: 'Lok Sabha election 2029',
    el: [{
      t: 'Lok Sabha election 2024', d: '2024-06-04', k: 'parl', ch: 'Lok Sabha', seats: 543, to: 66.1,
      note: 'The world’s largest election, with about 642 million voters in seven phases. The BJP lost its absolute majority.',
      p: [
        ['india', 'INDIA (other)', 'Other INDIA bloc parties', '#7FB8E0', null, 30, null],
        ['dmk', 'DMK', 'Dravida Munnetra Kazhagam', '#C8102E', 1.82, 22, -2],
        ['aitc', 'AITC', 'All India Trinamool Congress', '#20C646', 4.37, 29, 7],
        ['sp', 'SP', 'Samajwadi Party', '#E8432A', 4.58, 37, 32],
        ['ncpsp', 'NCP(SP)', 'Nationalist Congress Party (Sharadchandra Pawar)', '#00A3A3', 0.92, 8, 'neu'],
        ['ssubt', 'SS(UBT)', 'Shiv Sena (Uddhav Balasaheb Thackeray)', '#F58220', 1.48, 9, 'neu'],
        ['inc', 'INC', 'Indian National Congress', '#19AAED', 21.19, 99, 47],
        ['oth', 'Others', 'Other parties and independents', '#A3A3A3', null, 16, null],
        ['ljp', 'LJP(RV)', 'Lok Janshakti Party (Ram Vilas)', '#5B006A', 0.44, 5, 'neu'],
        ['shs', 'SHS', 'Shiv Sena', '#E36C0A', 1.15, 7, 'neu'],
        ['jdu', 'JD(U)', 'Janata Dal (United)', '#1F4E79', 1.25, 12, -4],
        ['tdp', 'TDP', 'Telugu Desam Party', '#E8C800', 1.98, 16, 13],
        ['nda', 'NDA (other)', 'Other NDA parties', '#F7B977', null, 13, null],
        ['bjp', 'BJP', 'Bharatiya Janata Party', '#FF9933', 36.56, 240, -63]
      ]
    }]
  },

  /* ============================== OCEANIA & AFRICA ============================== */

  AUS: {
    n: 'Australia', iso: '036', reg: 'oz', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Anthony Albanese', 'alp'], hos: ['King', 'Charles III'],
    gov: ['alp'], govNote: 'Labor government with a clear majority in the House of Representatives',
    next: 'Parliamentary election by 2028 at the latest',
    focus: [[112.5, -44], [154, -10]],
    el: [{
      t: 'Parliamentary election 2025', d: '2025-05-03', k: 'parl', ch: 'House of Representatives', seats: 150, to: 90.7, vl: 'First preferences',
      note: 'Compulsory and preferential voting. Two-party-preferred: Labor 55.2%, Coalition 44.8%.',
      p: [
        ['grn', 'Greens', 'Australian Greens', '#10C25B', 12.2, 1, -3],
        ['alp', 'Labor', 'Australian Labor Party', '#E13940', 34.56, 94, 17],
        ['ind', 'Ind.', 'Independents (incl. “teals”)', '#2BB5B8', 7.27, 10, null],
        ['ca', 'CA', 'Centre Alliance', '#FF944D', 0.24, 1, 0],
        ['kap', 'KAP', 'Katter’s Australian Party', '#B50204', 0.33, 1, 0],
        ['on', 'One Nation', 'Pauline Hanson’s One Nation', '#F36C21', 6.4, 0, 0],
        ['nat', 'Nationals', 'National Party', '#00805C', 3.8, 9, -1],
        ['lnp', 'LNP', 'Liberal National Party (Queensland)', '#3A6FE0', 7.1, 16, -5],
        ['lib', 'Liberals', 'Liberal Party', '#1C3F94', 20.69, 18, -9]
      ]
    }]
  },

  NZL: {
    n: 'New Zealand', iso: '554', reg: 'oz', sys: 'Parliamentary monarchy',
    hog: ['Prime Minister', 'Christopher Luxon', 'nat'], hos: ['King', 'Charles III'],
    gov: ['nat', 'act', 'nzf'], govNote: 'Coalition of National, ACT and NZ First since November 2023',
    next: 'Parliamentary election on 7 November 2026',
    focus: [[166, -47.5], [179, -34]],
    el: [{
      t: 'Parliamentary election 2023', d: '2023-10-14', k: 'parl', ch: 'House of Representatives', seats: 123, to: 78.2, vl: 'Party votes',
      note: 'Including the Port Waikato by-election and the overhang seat.',
      p: [
        ['tpm', 'TPM', 'Te Pāti Māori', '#B2001A', 3.08, 6, 4],
        ['grn', 'Greens', 'Green Party', '#098137', 11.61, 15, 5],
        ['lab', 'Labour', 'Labour Party', '#D82A20', 26.92, 34, -31],
        ['nzf', 'NZ First', 'New Zealand First', '#2B2B2B', 6.09, 8, 8],
        ['nat', 'National', 'National Party', '#00529F', 38.08, 49, 16],
        ['act', 'ACT', 'ACT New Zealand', '#F2D200', 8.64, 11, 1]
      ]
    }]
  },

  ZAF: {
    n: 'South Africa', iso: '710', reg: 'af', sys: 'Parliamentary republic',
    hog: ['President', 'Cyril Ramaphosa', 'anc'],
    gov: ['anc', 'da', 'ifp', 'pa', 'ffp', 'gnu'], govNote: 'Government of National Unity of ten parties, including ANC, DA, IFP, PA and FF+',
    next: 'Parliamentary election 2029',
    focus: [[16.3, -35], [33, -22]],
    el: [{
      t: 'Parliamentary election 2024', d: '2024-05-29', k: 'parl', ch: 'National Assembly', seats: 400, to: 58.6,
      note: 'The ANC lost its absolute majority for the first time since 1994.',
      p: [
        ['eff', 'EFF', 'Economic Freedom Fighters', '#852A2A', 9.52, 39, -5],
        ['mk', 'MK', 'uMkhonto weSizwe', '#4E9A3E', 14.58, 58, 'neu'],
        ['anc', 'ANC', 'African National Congress', '#006600', 40.18, 159, -71],
        ['gnu', 'GNU partners', 'Smaller government partners (UDM, Rise Mzansi, Al Jama-ah, PAC, GOOD)', '#8FB89A', null, 9, null],
        ['oth', 'Others', 'Other parties (ACDP, BOSA, ATM, NCC, UAT)', '#A3A3A3', null, 10, null],
        ['da', 'DA', 'Democratic Alliance', '#005BA6', 21.81, 87, 3],
        ['asa', 'ActionSA', 'ActionSA', '#05B615', 1.2, 6, 'neu'],
        ['pa', 'PA', 'Patriotic Alliance', '#388F35', 2.06, 9, 9],
        ['ifp', 'IFP', 'Inkatha Freedom Party', '#E2231A', 3.85, 17, 3],
        ['ffp', 'FF+', 'Freedom Front Plus', '#FF6600', 1.36, 6, -4]
      ]
    }]
  }
  }
};
