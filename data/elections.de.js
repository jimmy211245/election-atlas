/* Wahlatlas – nationale Wahlergebnisse
   Stand: 5. Oktober 2026
   Parteien je Wahl von links nach rechts sortiert (Reihenfolge im Halbkreis).
   Partei:    [id, Kürzel, Name, Farbe, Stimmen %, Sitze, Sitzänderung]
   Kandidat:  [id, Name, Partei, Farbe, % 1. Wahlgang, % Stichwahl]
   Quellen: amtliche Endergebnisse der Wahlbehörden (über die Ergebnistabellen der
   englischsprachigen Wikipedia), Bundeswahlleiterin (DE), Democracy Club (UK). */
window.WAHL_DE = {
  stand: '2026-10-05',
  upcoming: [
    ['2026-10-25', 'BRA', 'Stichwahl um die Präsidentschaft'],
    ['2026-10-25', 'SRB', 'Vorgezogene Parlamentswahl'],
    ['2026-10-25', 'BGR', 'Präsidentschaftswahl'],
    ['2026-10-27', 'ISR', 'Knesset-Wahl'],
    ['2026-11-03', 'USA', 'Kongresswahlen (Midterms)'],
    ['2026-11-07', 'NZL', 'Parlamentswahl'],
    ['2026-11-29', 'ESP', 'Vorgezogene Parlamentswahl']
  ],
  countries: {

  /* ============================== EUROPÄISCHE UNION ============================== */

  DEU: {
    n: 'Deutschland', iso: '276', reg: 'eu', sys: 'Parlamentarische Bundesrepublik',
    hog: ['Bundeskanzler', 'Friedrich Merz', 'union'], hos: ['Bundespräsident', 'Frank-Walter Steinmeier'],
    gov: ['union', 'spd'], govNote: 'Koalition aus CDU/CSU und SPD, seit 6. Mai 2025',
    next: 'Bundestagswahl spätestens 2029', sub: 'DEU',
    el: [{
      t: 'Bundestagswahl 2025', d: '2025-02-23', k: 'parl', ch: 'Bundestag', seats: 630, to: 82.5, vl: 'Zweitstimmen',
      note: 'CDU 22,6 % · CSU 6,0 %. BSW (4,98 %) und FDP scheiterten an der Fünf-Prozent-Hürde. 23 Wahlkreissieger erhielten wegen der Zweitstimmendeckung kein Mandat.',
      p: [
        ['linke', 'Linke', 'Die Linke', '#BE3075', 8.77, 64, 25],
        ['bsw', 'BSW', 'Bündnis Sahra Wagenknecht', '#7D254F', 4.98, 0, 'neu'],
        ['spd', 'SPD', 'Sozialdemokratische Partei Deutschlands', '#E3000F', 16.41, 120, -86],
        ['gruene', 'Grüne', 'Bündnis 90/Die Grünen', '#409A3C', 11.61, 85, -33],
        ['ssw', 'SSW', 'Südschleswigscher Wählerverband', '#003C8F', 0.15, 1, 0],
        ['fdp', 'FDP', 'Freie Demokratische Partei', '#FFED00', 4.33, 0, -91],
        ['union', 'CDU/CSU', 'Christlich Demokratische / Christlich-Soziale Union', '#1A1A1A', 28.52, 208, 11],
        ['afd', 'AfD', 'Alternative für Deutschland', '#009EE0', 20.80, 152, 69],
        ['fw', 'FW', 'Freie Wähler', '#F7A800', 1.55, 0, 0]
      ]
    }]
  },

  AUT: {
    n: 'Österreich', iso: '040', reg: 'eu', sys: 'Parlamentarische Bundesrepublik',
    hog: ['Bundeskanzler', 'Christian Stocker', 'ovp'], hos: ['Bundespräsident', 'Alexander Van der Bellen'],
    gov: ['ovp', 'spo', 'neos'], govNote: 'Koalition aus ÖVP, SPÖ und NEOS, seit 3. März 2025',
    next: 'Nationalratswahl spätestens 2029', sub: 'AUT',
    el: [{
      t: 'Nationalratswahl 2024', d: '2024-09-29', k: 'parl', ch: 'Nationalrat', seats: 183, to: 77.7,
      note: 'Erstmals wurde die FPÖ stärkste Partei bei einer Nationalratswahl.',
      p: [
        ['kpo', 'KPÖ', 'KPÖ Plus', '#AA0000', 2.39, 0, 0],
        ['gru', 'Grüne', 'Die Grünen', '#6BA539', 8.24, 16, -10],
        ['spo', 'SPÖ', 'Sozialdemokratische Partei Österreichs', '#E31E2D', 21.14, 41, 1],
        ['neos', 'NEOS', 'NEOS – Das Neue Österreich', '#E84188', 9.14, 18, 3],
        ['bier', 'Bier', 'Bierpartei', '#E2B007', 2.02, 0, 'neu'],
        ['ovp', 'ÖVP', 'Österreichische Volkspartei', '#52B8C9', 26.27, 51, -20],
        ['fpo', 'FPÖ', 'Freiheitliche Partei Österreichs', '#005DA8', 28.85, 57, 26]
      ]
    }]
  },

  BEL: {
    n: 'Belgien', iso: '056', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Bart De Wever', 'nva'], hos: ['König', 'Philippe'],
    gov: ['nva', 'mr', 'le', 'vooruit', 'cdv'], govNote: '„Arizona“-Koalition aus N-VA, MR, Les Engagés, Vooruit und CD&V, seit 3. Februar 2025',
    next: 'Föderalwahl 2029',
    el: [{
      t: 'Föderalwahl 2024', d: '2024-06-09', k: 'parl', ch: 'Abgeordnetenkammer', seats: 150, to: 88.5,
      note: 'In Belgien herrscht Wahlpflicht. Flämische und wallonische Parteien treten getrennt an.',
      p: [
        ['ptb', 'PTB-PVDA', 'Partei der Arbeit', '#8B0000', 9.86, 15, 3],
        ['ecolo', 'Ecolo', 'Ecolo (Grüne, frankophon)', '#5AAD39', 2.93, 3, -10],
        ['groen', 'Groen', 'Groen (Grüne, flämisch)', '#01796F', 4.65, 6, -2],
        ['ps', 'PS', 'Parti Socialiste', '#FF0000', 8.04, 16, -4],
        ['vooruit', 'Vooruit', 'Vooruit (Sozialdemokraten, flämisch)', '#FF6A4D', 8.11, 13, 4],
        ['defi', 'DéFI', 'Démocrate Fédéraliste Indépendant', '#DD0081', 1.20, 1, -1],
        ['le', 'Les Engagés', 'Les Engagés', '#02C5B6', 6.77, 14, 9],
        ['cdv', 'CD&V', 'Christdemokratisch & Flämisch', '#FF8200', 7.98, 11, -1],
        ['ovld', 'Open VLD', 'Open Vlaamse Liberalen en Democraten', '#0087DC', 5.45, 7, -5],
        ['mr', 'MR', 'Mouvement Réformateur', '#0047AB', 10.26, 20, 6],
        ['nva', 'N-VA', 'Neu-Flämische Allianz', '#F9CE19', 16.71, 24, -1],
        ['vb', 'VB', 'Vlaams Belang', '#A88B1C', 13.77, 20, 2]
      ]
    }]
  },

  BGR: {
    n: 'Bulgarien', iso: '100', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Rumen Radew', 'pb'], hos: ['Präsidentin', 'Ilijana Jotowa'],
    gov: ['pb'], govNote: 'Alleinregierung von „Progressives Bulgarien“, seit 8. Mai 2026',
    next: 'Präsidentschaftswahl am 25. Oktober 2026',
    el: [{
      t: 'Parlamentswahl 2026', d: '2026-04-19', k: 'parl', ch: 'Nationalversammlung', seats: 240, to: 50.7,
      note: 'Vorgezogene Wahl nach dem Rücktritt der Regierung Scheljaskow. Das Bündnis des früheren Präsidenten Rumen Radew errang als erste Partei seit Jahrzehnten eine absolute Mehrheit.',
      p: [
        ['bsp', 'BSP', 'BSP – Vereinigte Linke', '#DB0F28', 2.97, 0, -19],
        ['pb', 'PB', 'Progressives Bulgarien', '#0B6B57', 43.91, 131, 'neu'],
        ['ppdb', 'PP–DB', 'Wir setzen den Wandel fort – Demokratisches Bulgarien', '#4E3FD6', 12.42, 37, 1],
        ['dps', 'DPS', 'Bewegung für Rechte und Freiheiten', '#0E8FD8', 7.01, 21, -8],
        ['gerb', 'GERB–SDS', 'GERB – Union der Demokratischen Kräfte', '#1F4E9C', 13.18, 39, -27],
        ['mech', 'MECh', 'Moral, Einheit, Ehre', '#1A2C44', 3.18, 0, -11],
        ['vel', 'Welitschie', 'Welitschie (Größe)', '#AC2225', 3.06, 0, -10],
        ['vaz', 'Wasraschdane', 'Wiedergeburt', '#B08D57', 4.19, 12, -21]
      ]
    }]
  },

  HRV: {
    n: 'Kroatien', iso: '191', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Andrej Plenković', 'hdz'], hos: ['Präsident', 'Zoran Milanović'],
    gov: ['hdz', 'dp'], govNote: 'Koalition aus HDZ und Heimatbewegung (DP), seit Mai 2024',
    next: 'Parlamentswahl spätestens 2028',
    el: [{
      t: 'Parlamentswahl 2024', d: '2024-04-17', k: 'parl', ch: 'Sabor', seats: 151, to: 61.9,
      note: 'Acht Sitze sind für nationale Minderheiten reserviert.',
      p: [
        ['mozemo', 'Možemo!', 'Wir können!', '#9DB82E', 9.10, 10, 5],
        ['rp', 'Rijeke pravde', 'Flüsse der Gerechtigkeit (SDP-geführt)', '#ED1C24', 25.40, 42, 2],
        ['ids', 'IDS', 'Istrische Demokratische Versammlung', '#0CB14B', 2.25, 2, -1],
        ['min', 'Minderheiten', 'Vertreter nationaler Minderheiten', '#9A9A9A', null, 8, 0],
        ['fokus', 'Fokus', 'Fokus – Republik', '#05AACB', 2.25, 1, 0],
        ['nps', 'NPS', 'Unabhängige Plattform des Nordens', '#2C9180', 1.22, 2, 'neu'],
        ['hdz', 'HDZ', 'Kroatische Demokratische Union (Bündnis)', '#005BAA', 34.42, 61, -6],
        ['most', 'Most', 'Most – Kroatische Souveränisten', '#E85726', 8.02, 11, -1],
        ['dp', 'DP', 'Heimatbewegung (Domovinski pokret)', '#5B6B85', 9.56, 14, 2]
      ]
    }]
  },

  CYP: {
    n: 'Zypern', iso: '196', reg: 'eu', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Nikos Christodoulides', null], hogColor: '#8A8F98',
    gov: [], govNote: 'Präsidialsystem: Präsident Christodoulides (parteilos) führt die Regierung, gewählt 2023',
    next: 'Präsidentschaftswahl 2028',
    el: [{
      t: 'Parlamentswahl 2026', d: '2026-05-24', k: 'parl', ch: 'Repräsentantenhaus', seats: 56, to: 66.9,
      note: 'Gewählt werden 56 der 80 Sitze; die 24 Sitze der türkisch-zyprischen Gemeinschaft bleiben unbesetzt.',
      p: [
        ['akel', 'AKEL', 'Fortschrittspartei des werktätigen Volkes', '#B31B1B', 23.86, 15, 0],
        ['edek', 'EDEK', 'Sozialistische Partei EDEK', '#175047', 3.25, 0, -4],
        ['volt', 'Volt', 'Volt Zypern', '#502379', 3.09, 0, 'neu'],
        ['alma', 'ALMA', 'ALMA – Bürger für Zypern', '#99AC27', 5.83, 4, 'neu'],
        ['adk', 'Direkte Demokratie', 'Direkte Demokratie Zypern', '#2F7FA8', 5.42, 4, 'neu'],
        ['diko', 'DIKO', 'Demokratische Partei', '#E07C00', 10.00, 8, -1],
        ['dipa', 'DIPA', 'Demokratische Ausrichtung', '#00AEEF', 3.14, 0, -4],
        ['disy', 'DISY', 'Demokratische Sammlung', '#1569C7', 27.15, 17, 0],
        ['elam', 'ELAM', 'Nationale Volksfront', '#101B3B', 10.90, 8, 4]
      ]
    }, {
      t: 'Präsidentschaftswahl 2023', d: '2023-02-12', k: 'pres', to: null,
      c: [
        ['ind', 'Nikos Christodoulides', 'parteilos', '#8A8F98', 32.04, 51.97],
        ['akel', 'Andreas Mavrogiannis', 'parteilos (AKEL)', '#B31B1B', 29.59, 48.03],
        ['disy', 'Averof Neofytou', 'DISY', '#1569C7', 26.11, null],
        ['elam', 'Christos Christou', 'ELAM', '#101B3B', 6.04, null]
      ]
    }]
  },

  CZE: {
    n: 'Tschechien', iso: '203', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Andrej Babiš', 'ano'], hos: ['Präsident', 'Petr Pavel'],
    gov: ['ano', 'spd', 'auto'], govNote: 'Koalition aus ANO, SPD und Motoristen, seit 9. Dezember 2025',
    next: 'Abgeordnetenhauswahl 2029',
    el: [{
      t: 'Abgeordnetenhauswahl 2025', d: '2025-10-04', k: 'parl', ch: 'Abgeordnetenhaus', seats: 200, to: 69.0,
      p: [
        ['stacilo', 'Stačilo!', 'Stačilo! (Es reicht!)', '#C4161C', 4.31, 0, 0],
        ['pirati', 'Piráti', 'Tschechische Piratenpartei', '#2B2B2B', 8.97, 18, 14],
        ['stan', 'STAN', 'Bürgermeister und Unabhängige', '#CD0F69', 11.23, 22, -11],
        ['spolu', 'SPOLU', 'SPOLU (ODS, KDU-ČSL, TOP 09)', '#2E5BA8', 23.36, 52, -19],
        ['ano', 'ANO', 'ANO 2011', '#2DB8C5', 34.52, 80, 8],
        ['auto', 'Motoristé', 'Motoristen für sich', '#8A5A9E', 6.77, 13, 'neu'],
        ['spd', 'SPD', 'Freiheit und direkte Demokratie', '#6A7A3C', 7.78, 15, -5]
      ]
    }]
  },

  DNK: {
    n: 'Dänemark', iso: '208', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Ministerpräsidentin', 'Mette Frederiksen', 's'], hos: ['König', 'Frederik X.'],
    gov: ['s', 'sf', 'm', 'rv'], govNote: 'Regierung Frederiksen III aus Sozialdemokraten, SF, Moderaten und Radikale Venstre, seit 2. Juni 2026; gestützt von Enhedslisten und Alternativet',
    next: 'Folketingswahl spätestens 2030',
    el: [{
      t: 'Folketingswahl 2026', d: '2026-03-24', k: 'parl', ch: 'Folketing', seats: 179, to: 84.0,
      note: 'Stimmenanteile für Dänemark ohne Färöer und Grönland, die je zwei eigene Sitze wählen. Schlechtestes Ergebnis der Sozialdemokraten seit 1903.',
      p: [
        ['ia', 'IA', 'Inuit Ataqatigiit (Grönland)', '#C8102E', null, 1, 0],
        ['el', 'Ø', 'Enhedslisten – Die Rot-Grünen', '#F7660D', 6.34, 11, 2],
        ['sf', 'SF', 'Socialistisk Folkeparti (Grüne Linke)', '#E07EA8', 11.58, 20, 5],
        ['alt', 'Å', 'Alternativet', '#2B8738', 2.57, 5, -1],
        ['fsd', 'JF', 'Javnaðarflokkurin (Färöer)', '#D20D44', null, 1, 0],
        ['s', 'A', 'Socialdemokratiet', '#C82518', 21.84, 38, -12],
        ['rv', 'B', 'Radikale Venstre', '#733280', 5.81, 10, 3],
        ['m', 'M', 'Moderaterne', '#B48CD2', 7.70, 14, -2],
        ['nal', 'NQ', 'Naleraq (Grönland)', '#4C9E9E', null, 1, 1],
        ['v', 'V', 'Venstre', '#01438E', 10.14, 18, -5],
        ['k', 'C', 'Det Konservative Folkeparti', '#6B9249', 7.59, 13, 3],
        ['sb', 'SB', 'Sambandsflokkurin (Färöer)', '#006CB4', null, 1, 0],
        ['la', 'I', 'Liberal Alliance', '#3FB2BE', 9.37, 16, 2],
        ['dd', 'Æ', 'Danmarksdemokraterne', '#668DD1', 5.75, 10, -4],
        ['bp', 'H', 'Borgernes Parti', '#2B4FB8', 2.13, 4, 'neu'],
        ['df', 'O', 'Dansk Folkeparti', '#E6B800', 9.10, 16, 11]
      ]
    }]
  },

  EST: {
    n: 'Estland', iso: '233', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Kristen Michal', 'reform'], hos: ['Präsident', 'Alar Karis'],
    gov: ['reform', 'e200'], govNote: 'Koalition aus Reformpartei und Eesti 200, seit März 2025',
    next: 'Riigikogu-Wahl März 2027',
    el: [{
      t: 'Riigikogu-Wahl 2023', d: '2023-03-05', k: 'parl', ch: 'Riigikogu', seats: 101, to: 63.5,
      p: [
        ['sde', 'SDE', 'Sozialdemokratische Partei', '#E10600', 9.27, 9, -1],
        ['kesk', 'Kesk', 'Estnische Zentrumspartei', '#00AA54', 15.28, 16, -10],
        ['e200', 'E200', 'Eesti 200', '#2F2A95', 13.33, 14, 14],
        ['reform', 'Reform', 'Estnische Reformpartei', '#F2C500', 31.24, 37, 3],
        ['isamaa', 'Isamaa', 'Isamaa (Vaterland)', '#009CE2', 8.21, 8, -4],
        ['ekre', 'EKRE', 'Estnische Konservative Volkspartei', '#0063AF', 16.05, 17, -2]
      ]
    }]
  },

  FIN: {
    n: 'Finnland', iso: '246', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Petteri Orpo', 'kok'], hos: ['Präsident', 'Alexander Stubb'],
    gov: ['kok', 'ps', 'rkp', 'kd'], govNote: 'Koalition aus Nationaler Sammlungspartei, Finnen-Partei, Schwedischer Volkspartei und Christdemokraten, seit Juni 2023',
    next: 'Parlamentswahl April 2027',
    el: [{
      t: 'Parlamentswahl 2023', d: '2023-04-02', k: 'parl', ch: 'Eduskunta', seats: 200, to: 72.0,
      p: [
        ['vas', 'Vas', 'Linksbündnis', '#F00A64', 7.06, 11, -5],
        ['sdp', 'SDP', 'Sozialdemokratische Partei', '#F54B4B', 19.95, 43, 3],
        ['vihr', 'Vihr', 'Grüner Bund', '#006845', 7.04, 13, -7],
        ['kesk', 'Kesk', 'Zentrumspartei', '#3AAD2E', 11.29, 23, -8],
        ['rkp', 'RKP', 'Schwedische Volkspartei', '#E8C547', 4.31, 9, 0],
        ['as', 'ÅS', 'Für Åland', '#D7DB50', 0.37, 1, 0],
        ['liik', 'Liik', 'Bewegung Jetzt', '#AE2375', 2.42, 1, 0],
        ['kok', 'Kok', 'Nationale Sammlungspartei', '#006288', 20.82, 48, 10],
        ['kd', 'KD', 'Christdemokraten', '#2B67C9', 4.22, 5, 0],
        ['ps', 'PS', 'Finnen-Partei', '#FFDE55', 20.06, 46, 7]
      ]
    }, {
      t: 'Präsidentschaftswahl 2024', d: '2024-02-11', k: 'pres', to: 70.7,
      c: [
        ['kok', 'Alexander Stubb', 'Kok', '#006288', 27.21, 51.62],
        ['vihr', 'Pekka Haavisto', 'parteilos (Grüne)', '#006845', 25.80, 48.38],
        ['ps', 'Jussi Halla-aho', 'PS', '#FFDE55', 18.99, null],
        ['kesk', 'Olli Rehn', 'parteilos (Kesk)', '#3AAD2E', 15.33, null]
      ]
    }]
  },

  FRA: {
    n: 'Frankreich', iso: '250', reg: 'eu', sys: 'Semipräsidentielle Republik',
    hog: ['Premierminister', 'Sébastien Lecornu', 'ens'], hos: ['Präsident', 'Emmanuel Macron'],
    gov: ['ens', 'lr'], govNote: 'Minderheitsregierung aus dem Macron-Lager (Ensemble) mit Unterstützung der Republikaner; Premierminister seit September 2025',
    next: 'Präsidentschaftswahl April 2027',
    focus: [[-5.3, 41.3], [9.7, 51.1]],
    el: [{
      t: 'Parlamentswahl 2024', d: '2024-06-30', k: 'parl', ch: 'Nationalversammlung', seats: 577, to: 66.7, vl: '1. Wahlgang',
      note: 'Vorgezogene Wahl nach der Auflösung der Nationalversammlung. Stimmen im 1. Wahlgang (30. Juni), Sitze nach der Stichwahl (7. Juli). Nach Stimmen lag der RN vorn, nach Sitzen das Linksbündnis NFP.',
      p: [
        ['nfp', 'NFP', 'Nouveau Front populaire (LFI, PS, Grüne, PCF)', '#E4032E', 28.21, 180, 49],
        ['dvg', 'DVG', 'Sonstige Linke', '#F4A6A6', 1.53, 12, -9],
        ['eco', 'ECO', 'Ökologen', '#8FBC8F', 0.57, 1, 1],
        ['reg', 'REG', 'Regionalisten', '#C9B400', 0.97, 9, -1],
        ['div', 'DIV', 'Sonstige', '#BDBDBD', 0.45, 1, 0],
        ['dvc', 'DVC', 'Sonstige Mitte', '#F5D49A', 1.22, 6, 2],
        ['ens', 'Ensemble', 'Ensemble pour la République (Macron-Lager)', '#F2B705', 21.28, 159, -86],
        ['lr', 'LR', 'Les Républicains', '#1E4FB4', 6.57, 39, -25],
        ['dvd', 'DVD', 'Sonstige Rechte', '#8FA8E8', 3.60, 27, 17],
        ['uxd', 'UXD', 'Union des droites (Ciotti)', '#3B4A82', 3.96, 17, 'neu'],
        ['rn', 'RN', 'Rassemblement National', '#1F2F5C', 29.26, 125, 36],
        ['dxd', 'DXD', 'Sonstige extreme Rechte', '#404040', 0.19, 1, 1]
      ]
    }, {
      t: 'Präsidentschaftswahl 2022', d: '2022-04-24', k: 'pres', to: 72.0,
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
    n: 'Griechenland', iso: '300', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Kyriakos Mitsotakis', 'nd'], hos: ['Präsident', 'Konstantinos Tasoulas'],
    gov: ['nd'], govNote: 'Alleinregierung der Nea Dimokratia, seit Juni 2023',
    next: 'Parlamentswahl spätestens 2027',
    el: [{
      t: 'Parlamentswahl Juni 2023', d: '2023-06-25', k: 'parl', ch: 'Parlament', seats: 300, to: 53.7,
      note: 'Zweite Wahl binnen fünf Wochen; die stärkste Partei erhielt bis zu 50 Bonussitze.',
      p: [
        ['kke', 'KKE', 'Kommunistische Partei Griechenlands', '#E30301', 7.69, 21, -5],
        ['syriza', 'SYRIZA', 'Koalition der Radikalen Linken', '#EE808F', 17.83, 47, -24],
        ['plefsi', 'Plefsi', 'Kurs der Freiheit', '#9F1897', 3.17, 8, 8],
        ['pasok', 'PASOK', 'PASOK – Bewegung für den Wandel', '#01783D', 11.84, 32, -9],
        ['nd', 'ND', 'Nea Dimokratia', '#1B5CC7', 40.56, 158, 12],
        ['niki', 'Niki', 'Niki (Sieg)', '#910048', 3.70, 10, 10],
        ['el', 'EL', 'Griechische Lösung', '#6BB6E6', 4.44, 12, -4],
        ['spart', 'Spartiates', 'Spartaner', '#C9963F', 4.68, 12, 'neu']
      ]
    }]
  },

  HUN: {
    n: 'Ungarn', iso: '348', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Péter Magyar', 'tisza'], hos: ['Präsident', 'András Baka'],
    gov: ['tisza'], govNote: 'Alleinregierung der Tisza-Partei mit Zweidrittelmehrheit, seit Mai 2026',
    next: 'Parlamentswahl 2030',
    el: [{
      t: 'Parlamentswahl 2026', d: '2026-04-12', k: 'parl', ch: 'Országgyűlés', seats: 199, to: 79.6, vl: 'Listenstimmen',
      note: 'Ende der 16-jährigen Regierungszeit Viktor Orbáns. Tisza gewann 96 der 106 Wahlkreise und eine verfassungsändernde Mehrheit; Rekordbeteiligung seit 1990.',
      p: [
        ['dk', 'DK', 'Demokratische Koalition', '#2A61A4', 1.10, 0, -15],
        ['tisza', 'Tisza', 'Respekt-und-Freiheit-Partei (Tisza)', '#2CA6C9', 53.18, 141, 'neu'],
        ['fidesz', 'Fidesz–KDNP', 'Fidesz – Ungarischer Bürgerbund / KDNP', '#FF6A00', 38.61, 52, -83],
        ['mh', 'Mi Hazánk', 'Bewegung Unsere Heimat', '#688D1B', 5.63, 6, 0]
      ]
    }]
  },

  IRL: {
    n: 'Irland', iso: '372', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Taoiseach', 'Micheál Martin', 'ff'], hos: ['Präsidentin', 'Catherine Connolly'],
    gov: ['ff', 'fg'], govNote: 'Koalition aus Fianna Fáil und Fine Gael mit Unterstützung unabhängiger Abgeordneter, seit Januar 2025',
    next: 'Parlamentswahl spätestens 2030',
    el: [{
      t: 'Parlamentswahl 2024', d: '2024-11-29', k: 'parl', ch: 'Dáil Éireann', seats: 174, to: 59.7, vl: 'Erstpräferenzen',
      note: 'Wahlsystem der übertragbaren Einzelstimme (STV).',
      p: [
        ['pbp', 'PBP–S', 'People Before Profit – Solidarity', '#E5007D', 2.84, 3, -2],
        ['sf', 'SF', 'Sinn Féin', '#326760', 19.01, 39, 2],
        ['sd', 'SD', 'Social Democrats', '#752F8B', 4.81, 11, 5],
        ['lab', 'Lab', 'Labour Party', '#CC0000', 4.65, 11, 5],
        ['grn', 'Grüne', 'Green Party', '#22AC6F', 3.04, 1, -11],
        ['ind', 'Unabh.', 'Unabhängige', '#A3A3A3', 13.20, 16, -3],
        ['red', '100% Redress', '100% Redress', '#B5524E', 0.31, 1, 'neu'],
        ['ff', 'FF', 'Fianna Fáil', '#66BB66', 21.86, 48, 10],
        ['fg', 'FG', 'Fine Gael', '#6699FF', 20.80, 38, 3],
        ['ii', 'II', 'Independent Ireland', '#2F9E5B', 3.55, 4, 'neu'],
        ['aontu', 'Aontú', 'Aontú', '#44532A', 3.91, 2, 1]
      ]
    }]
  },

  ITA: {
    n: 'Italien', iso: '380', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsidentin', 'Giorgia Meloni', 'fdi'], hos: ['Präsident', 'Sergio Mattarella'],
    gov: ['fdi', 'lega', 'fi', 'nm'], govNote: 'Mitte-rechts-Koalition aus Fratelli d’Italia, Lega, Forza Italia und Noi Moderati, seit Oktober 2022',
    next: 'Parlamentswahl spätestens 2027',
    el: [{
      t: 'Parlamentswahl 2022', d: '2022-09-25', k: 'parl', ch: 'Abgeordnetenkammer', seats: 400, to: 63.9, vl: 'Verhältniswahl-Stimmen',
      note: 'Erste Wahl nach Verkleinerung der Kammer von 630 auf 400 Sitze.',
      p: [
        ['avs', 'AVS', 'Grün-Linke Allianz', '#BE3457', 3.64, 12, null],
        ['pd', 'PD', 'Partito Democratico', '#EF1C27', 19.04, 69, null],
        ['pe', '+Europa', 'Più Europa', '#E8B800', 2.83, 2, null],
        ['ic', 'IC', 'Impegno Civico', '#1E889D', 0.60, 1, null],
        ['m5s', 'M5S', 'MoVimento 5 Stelle', '#F5D300', 15.43, 52, null],
        ['aziv', 'Az–IV', 'Azione – Italia Viva', '#5C8FD6', 7.78, 21, 'neu'],
        ['svp', 'SVP', 'Südtiroler Volkspartei – PATT', '#3A3A3A', 0.42, 3, null],
        ['oth', 'Sonstige', 'ScN, Vallée d’Aoste, MAIE', '#A3A3A3', null, 3, null],
        ['nm', 'NM', 'Noi Moderati', '#43528F', 0.91, 7, 'neu'],
        ['fi', 'FI', 'Forza Italia', '#0087DC', 8.11, 45, null],
        ['fdi', 'FdI', 'Fratelli d’Italia', '#03386A', 25.98, 119, null],
        ['lega', 'Lega', 'Lega', '#2E8B2E', 8.79, 66, null]
      ]
    }]
  },

  LVA: {
    n: 'Lettland', iso: '428', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Andris Kulbergs', 'as'], hos: ['Präsident', 'Edgars Rinkēvičs'],
    gov: ['as', 'jv', 'na'], govNote: 'Übergangsregierung Kulbergs (Vereinigte Liste, Neue Einheit, Nationale Allianz, ZZS) seit 28. Mai 2026; Regierungsbildung nach der Wahl offen',
    next: 'Regierungsbildung läuft',
    el: [{
      t: 'Saeima-Wahl 2026', d: '2026-10-03', k: 'parl', ch: 'Saeima', seats: 100, to: 51.8, prelim: true,
      note: 'Wahl vor drei Tagen; Ergebnis vorläufig. Die Union der Grünen und Bauern (ZZS) verpasste den Wiedereinzug.',
      p: [
        ['pro', 'PRO', 'Die Progressiven', '#E85A8C', 7.98, 10, 0],
        ['jv', 'JV', 'Neue Einheit', '#6AB647', 6.45, 7, -19],
        ['zzs', 'ZZS', 'Union der Grünen und Bauern', '#02723A', 4.46, 0, -16],
        ['as', 'AS', 'Vereinigte Liste', '#F29A00', 35.76, 41, 26],
        ['lpv', 'LPV', 'Lettland zuerst', '#A8343C', 13.25, 17, 8],
        ['sv', 'SV/AJ', 'Souveräne Macht / Allianz junger Letten', '#6A5ACD', 11.87, 15, 'neu'],
        ['na', 'NA', 'Nationale Allianz', '#5C1A1A', 9.02, 10, -3]
      ]
    }]
  },

  LTU: {
    n: 'Litauen', iso: '440', reg: 'eu', sys: 'Semipräsidentielle Republik',
    hog: ['Ministerpräsident', 'Mindaugas Sinkevičius', 'lsdp'], hos: ['Präsident', 'Gitanas Nausėda'],
    gov: ['lsdp', 'dsvl', 'lvzs', 'llra'], govNote: 'Koalition aus LSDP, Demokraten „Für Litauen“, Bauern und Grünen sowie der Polen-Wahlaktion, seit 14. Juli 2026',
    next: 'Seimas-Wahl Oktober 2028',
    el: [{
      t: 'Seimas-Wahl 2024', d: '2024-10-13', k: 'parl', ch: 'Seimas', seats: 141, to: 52.2, vl: 'Listenstimmen',
      p: [
        ['lsdp', 'LSDP', 'Sozialdemokratische Partei Litauens', '#E10514', 19.70, 52, 39],
        ['lvzs', 'LVŽS', 'Bund der Bauern und Grünen', '#00A54F', 7.16, 8, -24],
        ['dsvl', 'DSVL', 'Demokraten „Für Litauen“', '#002060', 9.40, 14, 'neu'],
        ['llra', 'LLRA', 'Wahlaktion der Polen in Litauen', '#781323', 3.96, 3, 0],
        ['ind', 'Unabh.', 'Unabhängige und Sonstige', '#A3A3A3', null, 3, null],
        ['ls', 'LS', 'Liberale Bewegung', '#FF9300', 7.85, 12, -1],
        ['lp', 'LP', 'Freiheitspartei', '#E852CC', 4.62, 0, -11],
        ['tslkd', 'TS–LKD', 'Vaterlandsunion – Christdemokraten', '#00A59B', 18.35, 28, -22],
        ['ppna', 'PPNA', 'Morgenröte an der Memel', '#F25D23', 15.26, 20, 'neu'],
        ['ns', 'NS', 'Nationale Allianz', '#BB2212', 2.93, 1, 1]
      ]
    }]
  },

  LUX: {
    n: 'Luxemburg', iso: '442', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Luc Frieden', 'csv'], hos: ['Großherzog', 'Guillaume V.'],
    gov: ['csv', 'dp'], govNote: 'Koalition aus CSV und DP, seit November 2023',
    next: 'Kammerwahl 2028',
    el: [{
      t: 'Kammerwahl 2023', d: '2023-10-08', k: 'parl', ch: 'Abgeordnetenkammer', seats: 60, to: 87.2,
      note: 'In Luxemburg herrscht Wahlpflicht.',
      p: [
        ['lenk', 'Lénk', 'Déi Lénk', '#8F0109', 3.93, 2, 0],
        ['lsap', 'LSAP', 'Luxemburger Sozialistische Arbeiterpartei', '#F10035', 18.91, 11, 1],
        ['greng', 'Gréng', 'Déi Gréng', '#8EB74A', 8.55, 4, -5],
        ['pirat', 'Piraten', 'Piratepartei', '#993399', 6.74, 3, 1],
        ['dp', 'DP', 'Demokratesch Partei', '#1F6FB5', 18.70, 14, 2],
        ['csv', 'CSV', 'Chrëschtlech-Sozial Vollekspartei', '#F28C00', 29.21, 21, 0],
        ['adr', 'ADR', 'Alternativ Demokratesch Reformpartei', '#00AAE5', 9.27, 5, 1]
      ]
    }]
  },

  MLT: {
    n: 'Malta', iso: '470', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Premierminister', 'Robert Abela', 'pl'], hos: ['Präsidentin', 'Myriam Spiteri Debono'],
    gov: ['pl'], govNote: 'Alleinregierung der Labour Party, vierter Wahlsieg in Folge',
    next: 'Parlamentswahl spätestens 2031',
    el: [{
      t: 'Parlamentswahl 2026', d: '2026-05-30', k: 'parl', ch: 'Repräsentantenhaus', seats: 79, to: 87.4, vl: 'Erstpräferenzen',
      note: 'Inklusive Ausgleichsmandate für Proporz (+2 PN) und Geschlechtergerechtigkeit (je +6).',
      p: [
        ['pl', 'PL', 'Partit Laburista', '#EE3224', 51.77, 42, -2],
        ['adpd', 'ADPD', 'ADPD – Grüne Partei', '#20AA63', 1.31, 0, 0],
        ['mom', 'Momentum', 'Momentum', '#1BA99E', 1.54, 0, 'neu'],
        ['pn', 'PN', 'Partit Nazzjonalista', '#5087B2', 44.68, 37, 2]
      ]
    }]
  },

  NLD: {
    n: 'Niederlande', iso: '528', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Ministerpräsident', 'Rob Jetten', 'd66'], hos: ['König', 'Willem-Alexander'],
    gov: ['d66', 'vvd', 'cda'], govNote: 'Minderheitskabinett Jetten aus D66, VVD und CDA (66 von 150 Sitzen), seit 23. Februar 2026',
    next: 'Tweede-Kamer-Wahl spätestens 2030',
    focus: [[3.2, 50.7], [7.3, 53.6]],
    el: [{
      t: 'Tweede-Kamer-Wahl 2025', d: '2025-10-29', k: 'parl', ch: 'Tweede Kamer', seats: 150, to: 78.3,
      note: 'D66 und PVV erhielten je 26 Sitze; D66 lag mit knapp 30.000 Stimmen vorn.',
      p: [
        ['sp', 'SP', 'Socialistische Partij', '#F60000', 1.89, 3, -2],
        ['pvdd', 'PvdD', 'Partij voor de Dieren', '#006B2D', 2.08, 3, 0],
        ['denk', 'Denk', 'Denk', '#00B7B2', 2.37, 3, 0],
        ['glpvda', 'GL–PvdA', 'GroenLinks–PvdA', '#C8102E', 12.79, 20, -5],
        ['volt', 'Volt', 'Volt Nederland', '#502379', 1.10, 1, -1],
        ['d66', 'D66', 'Democraten 66', '#3DB54A', 16.94, 26, 17],
        ['50plus', '50PLUS', '50PLUS', '#92107D', 1.43, 2, 2],
        ['cu', 'CU', 'ChristenUnie', '#00A7EB', 1.90, 3, 0],
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
    n: 'Polen', iso: '616', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Donald Tusk', 'ko'], hos: ['Präsident', 'Karol Nawrocki'],
    gov: ['ko', 'td', 'lewica'], govNote: 'Koalition des 15. Oktober aus KO, PSL, Polska 2050 und Lewica, seit Dezember 2023',
    next: 'Sejm-Wahl Herbst 2027', sub: 'POL',
    el: [{
      t: 'Sejm-Wahl 2023', d: '2023-10-15', k: 'parl', ch: 'Sejm', seats: 460, to: 74.4,
      note: 'PiS wurde stärkste Kraft, die bisherige Opposition bildete jedoch die Regierung.',
      p: [
        ['lewica', 'Lewica', 'Die Linke', '#AC145A', 8.61, 26, -23],
        ['ko', 'KO', 'Bürgerkoalition', '#F68F2D', 30.70, 157, 23],
        ['td', 'TD', 'Dritter Weg (PSL, Polska 2050)', '#3DB53A', 14.40, 65, 35],
        ['pis', 'PiS', 'Recht und Gerechtigkeit (Vereinigte Rechte)', '#263778', 35.38, 194, -41],
        ['konf', 'Konf.', 'Konföderation Freiheit und Unabhängigkeit', '#122746', 7.16, 18, 7]
      ]
    }, {
      t: 'Präsidentschaftswahl 2025', d: '2025-06-01', k: 'pres', to: 71.6, subKey: 'pres',
      c: [
        ['pis', 'Karol Nawrocki', 'parteilos (PiS)', '#263778', 29.54, 50.89],
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
    n: 'Portugal', iso: '620', reg: 'eu', sys: 'Semipräsidentielle Republik',
    hog: ['Premierminister', 'Luís Montenegro', 'ad'], hos: ['Präsident', 'António José Seguro'],
    gov: ['ad'], govNote: 'Minderheitsregierung der AD (PSD/CDS-PP), seit Juni 2025',
    next: 'Parlamentswahl spätestens 2029',
    focus: [[-9.6, 36.9], [-6.1, 42.2]],
    el: [{
      t: 'Parlamentswahl 2025', d: '2025-05-18', k: 'parl', ch: 'Assembleia da República', seats: 230, to: 58.3,
      note: 'Dritte Parlamentswahl in gut drei Jahren. Chega wurde nach Sitzen zweitstärkste Kraft.',
      p: [
        ['be', 'BE', 'Bloco de Esquerda', '#9C1C47', 1.99, 1, -4],
        ['cdu', 'CDU', 'Demokratische Einheitskoalition (PCP–PEV)', '#D3121C', 2.91, 3, -1],
        ['livre', 'Livre', 'LIVRE', '#9DBB1E', 4.07, 6, 2],
        ['pan', 'PAN', 'Pessoas–Animais–Natureza', '#008080', 1.38, 1, 0],
        ['ps', 'PS', 'Partido Socialista', '#E8559E', 22.83, 58, -20],
        ['jpp', 'JPP', 'Juntos pelo Povo', '#00A28B', 0.33, 1, 1],
        ['ad', 'AD', 'Aliança Democrática (PSD/CDS-PP)', '#F68A21', 31.78, 91, 11],
        ['il', 'IL', 'Iniciativa Liberal', '#00ADEF', 5.36, 9, 1],
        ['chega', 'Chega', 'Chega', '#222256', 22.76, 60, 10]
      ]
    }, {
      t: 'Präsidentschaftswahl 2026', d: '2026-02-08', k: 'pres', to: 50.0,
      c: [
        ['ps', 'António José Seguro', 'PS', '#E8559E', 31.11, 66.84],
        ['chega', 'André Ventura', 'Chega', '#222256', 23.52, 33.16],
        ['il', 'João Cotrim de Figueiredo', 'IL', '#00ADEF', 16.00, null],
        ['ind', 'Henrique Gouveia e Melo', 'parteilos', '#A3A3A3', 12.32, null],
        ['ad', 'Luís Marques Mendes', 'PSD', '#F68A21', 11.30, null]
      ]
    }]
  },

  ROU: {
    n: 'Rumänien', iso: '642', reg: 'eu', sys: 'Semipräsidentielle Republik',
    hog: ['Ministerpräsident (geschäftsführend)', 'Ilie Bolojan', 'pnl'], hos: ['Präsident', 'Nicușor Dan'],
    gov: ['pnl', 'usr', 'udmr'], govNote: 'Regierung Bolojan seit 5. Mai 2026 nach Misstrauensvotum nur geschäftsführend im Amt',
    next: 'Parlamentswahl 2028',
    el: [{
      t: 'Parlamentswahl 2024', d: '2024-12-01', k: 'parl', ch: 'Abgeordnetenkammer', seats: 331, to: 52.5,
      p: [
        ['psd', 'PSD', 'Sozialdemokratische Partei', '#EF3340', 21.96, 86, -24],
        ['usr', 'USR', 'Union Rettet Rumänien', '#1F3B73', 12.40, 40, -15],
        ['min', 'Minderheiten', 'Nationale Minderheiten', '#9A9A9A', 1.40, 19, 1],
        ['udmr', 'UDMR', 'Demokratischer Verband der Ungarn', '#15803C', 6.33, 22, 1],
        ['pnl', 'PNL', 'Nationalliberale Partei', '#E5C400', 13.20, 49, -44],
        ['pot', 'POT', 'Partei der jungen Leute', '#4B2A99', 6.46, 24, 'neu'],
        ['aur', 'AUR', 'Allianz für die Vereinigung der Rumänen', '#F2A41F', 18.01, 63, 30],
        ['sos', 'SOS RO', 'S.O.S. Rumänien', '#4DA9DA', 7.36, 28, 'neu']
      ]
    }, {
      t: 'Präsidentschaftswahl 2025', d: '2025-05-18', k: 'pres', to: 64.7,
      note: 'Wiederholung der annullierten Wahl von 2024.',
      c: [
        ['ind', 'Nicușor Dan', 'parteilos', '#5FA8D3', 20.99, 53.60],
        ['aur', 'George Simion', 'AUR', '#F2A41F', 40.96, 46.40],
        ['pnl', 'Crin Antonescu', 'PSD–PNL–UDMR', '#E5C400', 20.07, null],
        ['ind2', 'Victor Ponta', 'parteilos', '#C0392B', 13.04, null],
        ['usr', 'Elena Lasconi', 'USR', '#1F3B73', 2.68, null]
      ]
    }]
  },

  SVK: {
    n: 'Slowakei', iso: '703', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Robert Fico', 'smer'], hos: ['Präsident', 'Peter Pellegrini'],
    gov: ['smer', 'hlas', 'sns'], govNote: 'Koalition aus Smer, Hlas und SNS, seit Oktober 2023',
    next: 'Parlamentswahl spätestens 2027',
    el: [{
      t: 'Parlamentswahl 2023', d: '2023-09-30', k: 'parl', ch: 'Nationalrat', seats: 150, to: 68.4,
      p: [
        ['smer', 'Smer', 'Smer – Sozialdemokratie', '#D82222', 22.95, 42, null],
        ['hlas', 'Hlas', 'Hlas – Sozialdemokratie', '#830F38', 14.70, 27, 'neu'],
        ['ps', 'PS', 'Progressive Slowakei', '#00A6E6', 17.96, 32, null],
        ['sas', 'SaS', 'Freiheit und Solidarität', '#8DC63F', 6.32, 11, null],
        ['kdh', 'KDH', 'Christlich-Demokratische Bewegung', '#173A70', 6.82, 12, null],
        ['olano', 'OĽaNO', 'OĽaNO und Freunde', '#6E7B85', 8.90, 16, null],
        ['rep', 'Republika', 'Republika', '#8A1F1F', 4.75, 0, 'neu'],
        ['sns', 'SNS', 'Slowakische Nationalpartei', '#253A79', 5.63, 10, null]
      ]
    }]
  },

  SVN: {
    n: 'Slowenien', iso: '705', reg: 'eu', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Janez Janša', 'sds'], hos: ['Präsidentin', 'Nataša Pirc Musar'],
    gov: ['sds', 'nsi', 'dem'], govNote: 'Mitte-rechts-Koalition aus SDS, NSi–SLS–Fokus und Demokraten (43 von 90 Sitzen), gestützt von Resni.ca; seit Juni 2026',
    next: 'Parlamentswahl 2030',
    el: [{
      t: 'Parlamentswahl 2026', d: '2026-03-22', k: 'parl', ch: 'Staatsversammlung', seats: 90, to: 70.3,
      note: 'Die Freiheitsbewegung von Robert Golob wurde knapp stärkste Kraft, fand aber keine Mehrheit; Janez Janša wurde zum vierten Mal Regierungschef.',
      p: [
        ['levica', 'Levica', 'Levica und Vesna', '#8B1E3F', 5.69, 5, 0],
        ['sd', 'SD', 'Sozialdemokraten', '#E3000F', 6.71, 6, -1],
        ['gs', 'GS', 'Freiheitsbewegung (Gibanje Svoboda)', '#00569D', 28.66, 29, -12],
        ['min', 'Minderheiten', 'Italienische und ungarische Gemeinschaft', '#9A9A9A', null, 2, 0],
        ['resnica', 'Resni.ca', 'Resni.ca (Wahrheit)', '#7C5199', 5.49, 5, 5],
        ['dem', 'Demokrati', 'Demokraten (Anže Logar)', '#2E3F8F', 6.69, 6, 'neu'],
        ['nsi', 'NSi', 'NSi – SLS – Fokus', '#0099C7', 9.26, 9, 1],
        ['sds', 'SDS', 'Slowenische Demokratische Partei', '#F2C500', 27.88, 28, 1]
      ]
    }]
  },

  ESP: {
    n: 'Spanien', iso: '724', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Ministerpräsident', 'Pedro Sánchez', 'psoe'], hos: ['König', 'Felipe VI.'],
    gov: ['psoe', 'sumar'], govNote: 'Minderheitskoalition aus PSOE und Sumar, seit November 2023',
    next: 'Vorgezogene Parlamentswahl am 29. November 2026',
    focus: [[-9.5, 35.9], [4.5, 43.9]],
    el: [{
      t: 'Parlamentswahl 2023', d: '2023-07-23', k: 'parl', ch: 'Abgeordnetenhaus', seats: 350, to: 66.6,
      note: 'Die PP wurde stärkste Kraft, Sánchez blieb mit Unterstützung von Regionalparteien im Amt.',
      p: [
        ['bildu', 'EH Bildu', 'Euskal Herria Bildu', '#00AC8E', 1.36, 6, 1],
        ['bng', 'BNG', 'Bloque Nacionalista Galego', '#7FB6DF', 0.62, 1, 0],
        ['erc', 'ERC', 'Esquerra Republicana de Catalunya', '#FFB232', 1.89, 7, -6],
        ['sumar', 'Sumar', 'Sumar', '#E5317F', 12.33, 31, -7],
        ['psoe', 'PSOE', 'Partido Socialista Obrero Español', '#EF1C27', 31.68, 121, 1],
        ['pnv', 'PNV', 'Partido Nacionalista Vasco', '#4AAE4A', 1.12, 5, -1],
        ['cca', 'CCa', 'Coalición Canaria', '#E6C200', 0.47, 1, 0],
        ['junts', 'Junts', 'Junts per Catalunya', '#20B7A8', 1.60, 7, 3],
        ['pp', 'PP', 'Partido Popular', '#1D84CE', 33.06, 137, 48],
        ['upn', 'UPN', 'Unión del Pueblo Navarro', '#00599B', 0.21, 1, -1],
        ['vox', 'Vox', 'Vox', '#63BE21', 12.38, 33, -19]
      ]
    }]
  },

  SWE: {
    n: 'Schweden', iso: '752', reg: 'eu', sys: 'Parlamentarische Monarchie',
    hog: ['Ministerpräsident (geschäftsführend)', 'Ulf Kristersson', 'm'], hos: ['König', 'Carl XVI. Gustaf'],
    gov: ['m', 'kd', 'l'], govNote: 'Kristersson ist nach der Wahlniederlage nur noch geschäftsführend im Amt. Magdalena Andersson (S) wurde mit der Regierungsbildung beauftragt.',
    next: 'Regierungsbildung läuft',
    el: [{
      t: 'Reichstagswahl 2026', d: '2026-09-13', k: 'parl', ch: 'Riksdag', seats: 349, to: 84.9,
      note: 'Das rot-grüne Lager (S, V, C, MP) gewann 176 Sitze, das bisherige Regierungslager 173.',
      p: [
        ['v', 'V', 'Vänsterpartiet (Linke)', '#B00000', 8.40, 30, 6],
        ['s', 'S', 'Socialdemokraterna', '#ED1B34', 28.02, 99, -8],
        ['mp', 'MP', 'Miljöpartiet (Grüne)', '#2B912C', 6.12, 22, 4],
        ['c', 'C', 'Centerpartiet', '#0A7A4B', 7.03, 25, 1],
        ['l', 'L', 'Liberalerna', '#006AB3', 5.34, 19, 3],
        ['kd', 'KD', 'Kristdemokraterna', '#231977', 6.17, 22, 3],
        ['m', 'M', 'Moderaterna', '#019CDB', 19.85, 70, 2],
        ['sd', 'SD', 'Sverigedemokraterna', '#E3C200', 17.48, 62, -11]
      ]
    }]
  },

  /* ============================== WEITERES EUROPA ============================== */

  GBR: {
    n: 'Vereinigtes Königreich', iso: '826', reg: 'eur', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Andy Burnham', 'lab'], hos: ['König', 'Charles III.'],
    gov: ['lab'], govNote: 'Labour-Alleinregierung. Andy Burnham löste Keir Starmer am 20. Juli 2026 ab.',
    next: 'Unterhauswahl spätestens 2029', sub: 'GBR',
    focus: [[-8.2, 49.9], [1.8, 60.9]],
    el: [{
      t: 'Unterhauswahl 2024', d: '2024-07-04', k: 'parl', ch: 'House of Commons', seats: 650, to: 59.7,
      note: 'Mehrheitswahl in 650 Wahlkreisen: Labour gewann mit 33,7 % der Stimmen 63 % der Sitze; Reform UK erhielt 14,3 % und 5 Sitze.',
      p: [
        ['sf', 'SF', 'Sinn Féin', '#326760', 0.7, 7, null],
        ['sdlp', 'SDLP', 'Social Democratic and Labour Party', '#2AA82C', 0.3, 2, null],
        ['grn', 'Grüne', 'Green Party of England and Wales', '#02A95B', 6.4, 4, null],
        ['lab', 'Labour', 'Labour Party', '#E4003B', 33.7, 411, null],
        ['pc', 'PC', 'Plaid Cymru', '#008672', 0.7, 4, null],
        ['snp', 'SNP', 'Scottish National Party', '#F2D930', 2.5, 9, null],
        ['ld', 'LD', 'Liberal Democrats', '#FAA61A', 12.2, 72, null],
        ['all', 'Alliance', 'Alliance Party of Northern Ireland', '#E8B923', 0.4, 1, null],
        ['ind', 'Unabh.', 'Unabhängige', '#A3A3A3', 2.0, 6, null],
        ['spk', 'Speaker', 'Parlamentspräsident', '#555555', 0.1, 1, null],
        ['con', 'Con', 'Conservative Party', '#0087DC', 23.7, 121, null],
        ['uup', 'UUP', 'Ulster Unionist Party', '#48A5EE', 0.3, 1, null],
        ['dup', 'DUP', 'Democratic Unionist Party', '#D46A4C', 0.6, 5, null],
        ['tuv', 'TUV', 'Traditional Unionist Voice', '#0C3A6A', 0.2, 1, null],
        ['ref', 'Reform', 'Reform UK', '#12B6CF', 14.3, 5, null]
      ]
    }]
  },

  CHE: {
    n: 'Schweiz', iso: '756', reg: 'eur', sys: 'Direktorialsystem',
    hog: ['Bundesrat', 'Kollegialregierung (Konkordanz)', null], hogColor: '#8A8F98', hos: ['Bundespräsident 2026', 'Guy Parmelin (SVP)'],
    gov: ['svp', 'sp', 'fdp', 'mitte'], govNote: 'Konkordanzregierung („Zauberformel“): SVP 2, SP 2, FDP 2, Mitte 1 Bundesrat',
    next: 'Nationalratswahl Oktober 2027',
    el: [{
      t: 'Nationalratswahl 2023', d: '2023-10-22', k: 'parl', ch: 'Nationalrat', seats: 200, to: 46.6,
      p: [
        ['sp', 'SP', 'Sozialdemokratische Partei', '#E4002B', 18.27, 41, 2],
        ['gps', 'Grüne', 'Grüne Partei der Schweiz', '#84B414', 9.78, 23, -5],
        ['glp', 'GLP', 'Grünliberale Partei', '#B8CF00', 7.55, 10, -6],
        ['evp', 'EVP', 'Evangelische Volkspartei', '#EFDA18', 1.95, 2, -1],
        ['mitte', 'Mitte', 'Die Mitte', '#FF9B00', 14.06, 29, 1],
        ['fdp', 'FDP', 'FDP.Die Liberalen', '#0E52A0', 14.25, 28, -1],
        ['mcg', 'MCG', 'Mouvement Citoyens Genevois', '#CE9D24', 0.51, 2, 2],
        ['lega', 'Lega', 'Lega dei Ticinesi', '#6495ED', 0.55, 1, 0],
        ['edu', 'EDU', 'Eidgenössisch-Demokratische Union', '#C71585', 1.23, 2, 1],
        ['svp', 'SVP', 'Schweizerische Volkspartei', '#007A3D', 27.93, 62, 9]
      ]
    }]
  },

  NOR: {
    n: 'Norwegen', iso: '578', reg: 'eur', sys: 'Parlamentarische Monarchie',
    hog: ['Ministerpräsident', 'Jonas Gahr Støre', 'ap'], hos: ['König', 'Haakon VIII.'],
    gov: ['ap'], govNote: 'Minderheitsregierung der Arbeiderpartiet',
    next: 'Storting-Wahl September 2029',
    focus: [[4.5, 57.9], [31.2, 71.2]],
    el: [{
      t: 'Storting-Wahl 2025', d: '2025-09-08', k: 'parl', ch: 'Storting', seats: 169, to: 80.1,
      p: [
        ['r', 'R', 'Rødt (Rote)', '#871212', 5.32, 9, 1],
        ['sv', 'SV', 'Sosialistisk Venstreparti', '#B5317C', 5.63, 9, -4],
        ['ap', 'Ap', 'Arbeiderpartiet', '#E11926', 28.02, 53, 5],
        ['mdg', 'MDG', 'Miljøpartiet De Grønne', '#6AB023', 4.74, 8, 5],
        ['sp', 'Sp', 'Senterpartiet', '#00843D', 5.59, 9, -19],
        ['krf', 'KrF', 'Kristelig Folkeparti', '#E8C800', 4.20, 7, 4],
        ['v', 'V', 'Venstre', '#006666', 3.69, 3, -5],
        ['h', 'H', 'Høyre', '#0065F1', 14.65, 24, -12],
        ['frp', 'FrP', 'Fremskrittspartiet', '#004F80', 23.85, 47, 26]
      ]
    }]
  },

  ISL: {
    n: 'Island', iso: '352', reg: 'eur', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsidentin', 'Kristrún Frostadóttir', 'sam'], hos: ['Präsidentin', 'Halla Tómasdóttir'],
    gov: ['sam', 'vid', 'flf'], govNote: 'Koalition aus Sozialdemokratischer Allianz, Viðreisn und Volkspartei, seit Dezember 2024',
    next: 'Althing-Wahl spätestens 2028',
    el: [{
      t: 'Althing-Wahl 2024', d: '2024-11-30', k: 'parl', ch: 'Althing', seats: 63, to: 80.2,
      p: [
        ['sam', 'S', 'Samfylkingin (Sozialdemokratische Allianz)', '#ED1400', 20.75, 15, 9],
        ['vid', 'C', 'Viðreisn (Reform)', '#FF7D14', 15.82, 11, 6],
        ['flf', 'F', 'Flokkur fólksins (Volkspartei)', '#E6B422', 13.78, 10, 4],
        ['fram', 'B', 'Framsóknarflokkurinn (Fortschrittspartei)', '#3DAA5C', 7.80, 5, -8],
        ['d', 'D', 'Sjálfstæðisflokkurinn (Unabhängigkeitspartei)', '#00ADEF', 19.36, 14, -2],
        ['mid', 'M', 'Miðflokkurinn (Zentrumspartei)', '#141F6E', 12.10, 8, 5]
      ]
    }]
  },

  UKR: {
    n: 'Ukraine', iso: '804', reg: 'eur', sys: 'Semipräsidentielle Republik',
    hog: ['Ministerpräsident', 'Serhij Korezkyj', 'sluha'], hos: ['Präsident', 'Wolodymyr Selenskyj'],
    gov: ['sluha'], govNote: 'Wegen des Kriegsrechts finden seit 2022 keine Wahlen statt; Mandate von Präsident und Parlament bestehen fort.',
    next: 'Wahlen ausgesetzt (Kriegsrecht)',
    el: [{
      t: 'Parlamentswahl 2019', d: '2019-07-21', k: 'parl', ch: 'Werchowna Rada', seats: 423, to: 49.2, vl: 'Listenstimmen',
      note: '26 der 450 Sitze konnten wegen der russischen Besetzung nicht gewählt werden. Die prorussische Oppositionsplattform wurde 2022 verboten.',
      p: [
        ['opzzh', 'OPZZh', 'Oppositionsplattform – Für das Leben', '#1B62B0', 13.05, 43, 'neu'],
        ['opbl', 'Opp. Block', 'Oppositionsblock', '#2F52A0', 3.03, 6, 'neu'],
        ['sluha', 'Sluha Narodu', 'Diener des Volkes', '#38B34A', 43.16, 254, 'neu'],
        ['ind', 'Unabh.', 'Unabhängige und Sonstige', '#A3A3A3', null, 48, null],
        ['batk', 'Batkiwschtschyna', 'Vaterland', '#ED1C24', 8.18, 26, 6],
        ['holos', 'Holos', 'Stimme', '#FA4616', 5.82, 20, 'neu'],
        ['es', 'ES', 'Europäische Solidarität', '#8C1D40', 8.10, 25, -106],
        ['svob', 'Swoboda', 'Swoboda (Freiheit)', '#0E294D', 2.15, 1, -5]
      ]
    }, {
      t: 'Präsidentschaftswahl 2019', d: '2019-04-21', k: 'pres', to: 62.1,
      c: [
        ['sluha', 'Wolodymyr Selenskyj', 'Diener des Volkes', '#38B34A', 30.24, 73.22],
        ['es', 'Petro Poroschenko', 'parteilos (BPP)', '#8C1D40', 15.95, 24.45],
        ['batk', 'Julija Tymoschenko', 'Batkiwschtschyna', '#ED1C24', 13.40, null],
        ['opzzh', 'Jurij Bojko', 'parteilos', '#1B62B0', 11.67, null]
      ]
    }]
  },

  SRB: {
    n: 'Serbien', iso: '688', reg: 'eur', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Đuro Macut', 'sns'], hos: ['Präsidentin (kommissarisch)', 'Ana Brnabić'],
    gov: ['sns', 'sps'], govNote: 'Von der SNS geführte Regierung. Präsident Vučić trat am 27. September 2026 zurück, um bei der Parlamentswahl anzutreten.',
    next: 'Vorgezogene Parlamentswahl am 25. Oktober 2026',
    el: [{
      t: 'Parlamentswahl 2023', d: '2023-12-17', k: 'parl', ch: 'Nationalversammlung', seats: 250, to: 58.8,
      p: [
        ['spn', 'SPN', 'Serbien gegen Gewalt', '#F25C54', 24.32, 65, 25],
        ['sps', 'SPS', 'Sozialistische Partei Serbiens (Bündnis)', '#B5121B', 6.73, 18, -13],
        ['min', 'Minderheiten', 'Minderheitenlisten (SVM, SDA, u. a.)', '#3E8E5E', null, 12, null],
        ['sns', 'SNS', '„Serbien darf nicht stehen bleiben“ (SNS-Bündnis)', '#1F4E9C', 48.07, 129, 9],
        ['migin', 'MI–GIN', 'Wir – Stimme des Volkes', '#6B6B4E', 4.82, 13, 'neu'],
        ['nada', 'NADA', 'Nationaldemokratische Alternative', '#4E5964', 5.16, 13, -1]
      ]
    }]
  },

  /* ============================== AMERIKA ============================== */

  USA: {
    n: 'Vereinigte Staaten', iso: '840', reg: 'am', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Donald Trump', 'rep'],
    gov: ['rep'], govNote: 'Republikanische Regierung; Republikaner kontrollieren auch Repräsentantenhaus und Senat',
    next: 'Kongresswahlen (Midterms) am 3. November 2026', sub: 'USA',
    focus: [[-125, 24.4], [-66.9, 49.4]],
    el: [{
      t: 'Präsidentschaftswahl 2024', d: '2024-11-05', k: 'pres', to: 63.9, ev: { rep: 312, dem: 226 },
      note: 'Trump gewann alle sieben Swing States und als erster Republikaner seit 2004 auch die landesweite Stimmenmehrheit.',
      c: [
        ['rep', 'Donald Trump', 'Republikaner', '#D22532', 49.80, null],
        ['dem', 'Kamala Harris', 'Demokraten', '#2E64B5', 48.32, null],
        ['grn', 'Jill Stein', 'Green Party', '#17AA5C', 0.56, null],
        ['ind', 'Robert F. Kennedy Jr.', 'parteilos', '#A3A3A3', 0.49, null],
        ['lib', 'Chase Oliver', 'Libertarian Party', '#E8C000', 0.42, null]
      ]
    }, {
      t: 'Repräsentantenhaus 2024', d: '2024-11-05', k: 'parl', ch: 'Repräsentantenhaus', seats: 435,
      p: [
        ['dem', 'Demokraten', 'Demokratische Partei', '#2E64B5', 47.19, 215, 2],
        ['rep', 'Republikaner', 'Republikanische Partei', '#D22532', 49.75, 220, -2]
      ]
    }, {
      t: 'Senat (seit Januar 2025)', d: '2024-11-05', k: 'parl', ch: 'Senat', seats: 100,
      note: 'Zusammensetzung des 119. Kongresses. Die beiden Unabhängigen (Sanders, King) stimmen mit den Demokraten.',
      p: [
        ['dem', 'Demokraten', 'Demokratische Partei', '#2E64B5', null, 45, -2],
        ['ind', 'Unabhängige', 'Unabhängige (Fraktion der Demokraten)', '#7FA6D9', null, 2, -2],
        ['rep', 'Republikaner', 'Republikanische Partei', '#D22532', null, 53, 4]
      ]
    }]
  },

  CAN: {
    n: 'Kanada', iso: '124', reg: 'am', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Mark Carney', 'lib'], hos: ['König', 'Charles III.'],
    gov: ['lib'], govNote: 'Liberale Minderheitsregierung',
    next: 'Unterhauswahl spätestens 2029', sub: 'CAN',
    el: [{
      t: 'Unterhauswahl 2025', d: '2025-04-28', k: 'parl', ch: 'House of Commons', seats: 343, to: 69.5,
      note: 'Vierter Wahlsieg der Liberalen in Folge, knapp an der absoluten Mehrheit (172) vorbei.',
      p: [
        ['ndp', 'NDP', 'Neue Demokratische Partei', '#F37021', 6.29, 7, -18],
        ['grn', 'Grüne', 'Grüne Partei', '#3D9B35', 1.22, 1, -1],
        ['lib', 'Liberale', 'Liberale Partei', '#D71920', 43.76, 169, 9],
        ['bq', 'Bloc', 'Bloc Québécois', '#33B2CC', 6.29, 22, -10],
        ['con', 'Konservative', 'Konservative Partei', '#1A4782', 41.31, 144, 25]
      ]
    }]
  },

  MEX: {
    n: 'Mexiko', iso: '484', reg: 'am', sys: 'Präsidialrepublik',
    hog: ['Präsidentin', 'Claudia Sheinbaum', 'morena'],
    gov: ['morena', 'pvem', 'pt'], govNote: 'Bündnis „Sigamos Haciendo Historia“ aus Morena, PVEM und PT mit Zweidrittelmehrheit im Abgeordnetenhaus',
    next: 'Parlamentswahl Juni 2027', sub: 'MEX',
    el: [{
      t: 'Präsidentschaftswahl 2024', d: '2024-06-02', k: 'pres', to: 61.0,
      note: 'Claudia Sheinbaum ist die erste Präsidentin Mexikos.',
      c: [
        ['morena', 'Claudia Sheinbaum', 'Morena, PVEM, PT', '#B5261E', 59.76, null],
        ['pan', 'Xóchitl Gálvez', 'PAN, PRI, PRD', '#1F5AA6', 27.45, null],
        ['mc', 'Jorge Álvarez Máynez', 'Movimiento Ciudadano', '#FF8C00', 10.32, null]
      ]
    }, {
      t: 'Abgeordnetenhaus 2024', d: '2024-06-02', k: 'parl', ch: 'Cámara de Diputados', seats: 500, to: 61.0, vl: 'Listenstimmen',
      p: [
        ['pt', 'PT', 'Partido del Trabajo', '#E8706A', 5.68, 51, 14],
        ['morena', 'Morena', 'Movimiento Regeneración Nacional', '#B5261E', 42.40, 236, 38],
        ['pvem', 'PVEM', 'Partido Verde Ecologista', '#7DB540', 8.72, 77, 34],
        ['mc', 'MC', 'Movimiento Ciudadano', '#FF8C00', 11.34, 27, 4],
        ['ind', 'Unabh.', 'Unabhängige', '#A3A3A3', 0.13, 1, 1],
        ['prd', 'PRD', 'Partido de la Revolución Democrática', '#FFCD00', 2.53, 1, -14],
        ['pri', 'PRI', 'Partido Revolucionario Institucional', '#00923F', 11.56, 35, -35],
        ['pan', 'PAN', 'Partido Acción Nacional', '#1F5AA6', 17.55, 72, -42]
      ]
    }]
  },

  BRA: {
    n: 'Brasilien', iso: '076', reg: 'am', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Luiz Inácio Lula da Silva', 'pt'],
    gov: ['pt'], govNote: 'Präsident Lula (PT) regiert bis 1. Januar 2027',
    next: 'Stichwahl um die Präsidentschaft am 25. Oktober 2026', sub: 'BRA',
    el: [{
      t: 'Präsidentschaftswahl 2026 · 1. Wahlgang', d: '2026-10-04', k: 'pres', to: 78.9,
      note: 'Wahl von gestern: Flávio Bolsonaro und Lula treten am 25. Oktober in der Stichwahl gegeneinander an.',
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
    n: 'Argentinien', iso: '032', reg: 'am', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Javier Milei', 'lla'],
    gov: ['lla'], govNote: 'La Libertad Avanza; bei den Zwischenwahlen 2025 wurde LLA mit 40,7 % stärkste Kraft',
    next: 'Präsidentschaftswahl 2027',
    el: [{
      t: 'Präsidentschaftswahl 2023', d: '2023-11-19', k: 'pres', to: 76.3,
      c: [
        ['lla', 'Javier Milei', 'La Libertad Avanza', '#6C4C99', 29.99, 55.65],
        ['uxp', 'Sergio Massa', 'Unión por la Patria', '#36B3ED', 36.78, 44.35],
        ['jxc', 'Patricia Bullrich', 'Juntos por el Cambio', '#E6B800', 23.81, null],
        ['hnp', 'Juan Schiaretti', 'Hacemos por Nuestro País', '#4AA3A2', 6.73, null],
        ['fit', 'Myriam Bregman', 'Frente de Izquierda', '#C0392B', 2.70, null]
      ]
    }]
  },

  /* ============================== ASIEN & NAHOST ============================== */

  TUR: {
    n: 'Türkei', iso: '792', reg: 'as', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Recep Tayyip Erdoğan', 'akp'],
    gov: ['akp', 'mhp'], govNote: 'Präsidialsystem; Erdoğans AKP stützt sich im Parlament auf die „Volksallianz“ mit der MHP',
    next: 'Präsidentschafts- und Parlamentswahl 2028',
    el: [{
      t: 'Präsidentschaftswahl 2023', d: '2023-05-28', k: 'pres', to: 84.2,
      c: [
        ['akp', 'Recep Tayyip Erdoğan', 'AKP', '#F59C00', 49.52, 52.18],
        ['chp', 'Kemal Kılıçdaroğlu', 'CHP', '#E30A17', 44.88, 47.82],
        ['ata', 'Sinan Oğan', 'ATA-Allianz', '#373736', 5.17, null],
        ['mp', 'Muharrem İnce', 'Memleket', '#0D5DA6', 0.43, null]
      ]
    }, {
      t: 'Parlamentswahl 2023', d: '2023-05-14', k: 'parl', ch: 'Große Nationalversammlung', seats: 600, to: 87.0,
      p: [
        ['tip', 'TİP', 'Arbeiterpartei der Türkei', '#BE0A11', 1.77, 4, 2],
        ['ysp', 'YSP', 'Grüne Linkspartei (HDP-Nachfolge)', '#7E2A8C', 8.90, 61, -4],
        ['chp', 'CHP', 'Republikanische Volkspartei', '#E30A17', 25.34, 169, 23],
        ['iyi', 'İYİ', 'İYİ Parti (Gute Partei)', '#3DB5E6', 9.68, 43, 0],
        ['akp', 'AKP', 'Partei für Gerechtigkeit und Aufschwung', '#F59C00', 35.56, 268, -27],
        ['yrp', 'YRP', 'Neue Wohlfahrtspartei', '#4A4A4A', 2.80, 5, 'neu'],
        ['mhp', 'MHP', 'Partei der Nationalistischen Bewegung', '#B22222', 10.05, 50, 1]
      ]
    }]
  },

  ISR: {
    n: 'Israel', iso: '376', reg: 'as', sys: 'Parlamentarische Republik',
    hog: ['Ministerpräsident', 'Benjamin Netanjahu', 'likud'], hos: ['Präsident', 'Jitzchak Herzog'],
    gov: ['likud', 'rzp', 'shas', 'utj'], govNote: 'Rechts-religiöse Koalition (Regierung Netanjahu VI, seit Dezember 2022); die Zusammensetzung hat sich seither mehrfach geändert',
    next: 'Knesset-Wahl am 27. Oktober 2026',
    el: [{
      t: 'Knesset-Wahl 2022', d: '2022-11-01', k: 'parl', ch: 'Knesset', seats: 120, to: 70.6,
      p: [
        ['hadash', 'Hadash–Ta’al', 'Hadash–Ta’al', '#D42436', 3.75, 5, 0],
        ['raam', 'Ra’am', 'Vereinigte Arabische Liste', '#15793D', 4.07, 5, 1],
        ['labor', 'Awoda', 'Israelische Arbeitspartei', '#F05A28', 3.69, 4, -3],
        ['ya', 'Jesch Atid', 'Jesch Atid (Es gibt eine Zukunft)', '#3FB3E0', 17.79, 24, 7],
        ['nu', 'Nationale Einheit', 'HaMachane HaMamlachti', '#7C6CC4', 9.08, 12, -2],
        ['yb', 'Jisrael Beitenu', 'Jisrael Beitenu', '#0B4F6C', 4.48, 6, -1],
        ['likud', 'Likud', 'Likud', '#1F5AA5', 23.41, 32, 2],
        ['shas', 'Schas', 'Schas', '#262626', 8.25, 11, 2],
        ['utj', 'VTJ', 'Vereinigtes Thora-Judentum', '#5A5A5A', 5.88, 7, 0],
        ['rzp', 'Religiöser Zionismus', 'Religiöser Zionismus – Otzma Jehudit', '#4F9298', 10.84, 14, 8]
      ]
    }]
  },

  JPN: {
    n: 'Japan', iso: '392', reg: 'as', sys: 'Parlamentarische Monarchie',
    hog: ['Premierministerin', 'Sanae Takaichi', 'ldp'], hos: ['Kaiser', 'Naruhito'],
    gov: ['ldp', 'ishin'], govNote: 'Koalition aus LDP und Ishin (352 von 465 Sitzen)',
    next: 'Oberhauswahl 2028',
    el: [{
      t: 'Unterhauswahl 2026', d: '2026-02-08', k: 'parl', ch: 'Shūgiin (Unterhaus)', seats: 465, to: 56.3, vl: 'Verhältniswahl-Stimmen',
      note: 'Rekordsieg: Die LDP gewann allein 316 Sitze und damit eine Zweidrittelmehrheit.',
      p: [
        ['jcp', 'KPJ', 'Kommunistische Partei Japans', '#9E1F63', 4.40, 4, -4],
        ['reiwa', 'Reiwa', 'Reiwa Shinsengumi', '#ED008C', 2.92, 1, -8],
        ['cra', 'CRA', 'Zentristische Reformallianz (KDP + Kōmeitō)', '#0073BD', 18.23, 49, -123],
        ['mirai', 'Mirai', 'Team Mirai', '#4FC7B5', 6.66, 11, 'neu'],
        ['dpfp', 'DVP', 'Demokratische Volkspartei', '#FFBA00', 9.73, 28, 0],
        ['ishin', 'Ishin', 'Nippon Ishin no Kai', '#8DB33A', 8.63, 36, -2],
        ['ind', 'Unabh.', 'Unabhängige', '#A3A3A3', null, 4, -8],
        ['ldp', 'LDP', 'Liberaldemokratische Partei', '#D7003A', 36.72, 316, 125],
        ['genzei', 'Genzei', 'Steuersenkung Japan – Yukoku', '#18378A', 1.42, 1, 'neu'],
        ['sanseito', 'Sanseitō', 'Sanseitō', '#EE7300', 7.44, 15, 12]
      ]
    }]
  },

  KOR: {
    n: 'Südkorea', iso: '410', reg: 'as', sys: 'Präsidialrepublik',
    hog: ['Präsident', 'Lee Jae-myung', 'dp'],
    gov: ['dp'], govNote: 'Präsident Lee (Demokratische Partei) seit 4. Juni 2025; die DP hält die Mehrheit in der Nationalversammlung',
    next: 'Parlamentswahl April 2028',
    el: [{
      t: 'Präsidentschaftswahl 2025', d: '2025-06-03', k: 'pres', to: 79.4,
      note: 'Vorgezogene Wahl nach der Amtsenthebung von Yoon Suk Yeol.',
      c: [
        ['dp', 'Lee Jae-myung', 'Demokratische Partei', '#152484', 49.42, null],
        ['ppp', 'Kim Moon-soo', 'Partei der Volksmacht', '#E61E2B', 41.15, null],
        ['reform', 'Lee Jun-seok', 'Reformpartei', '#EA5504', 8.34, null]
      ]
    }, {
      t: 'Parlamentswahl 2024', d: '2024-04-10', k: 'parl', ch: 'Nationalversammlung', seats: 300, to: 67.0, vl: 'Verhältniswahl-Stimmen',
      p: [
        ['prog', 'Progressive', 'Progressive Partei', '#D6001C', null, 3, null],
        ['oth', 'Sonstige', 'Weitere Partner des Demokratischen Bündnisses', '#8C9DD6', null, 4, null],
        ['rkp', 'RKP', 'Partei zum Wiederaufbau Koreas', '#2773BA', 24.25, 12, 'neu'],
        ['dp', 'DP', 'Demokratische Partei (Demokratisches Bündnis)', '#152484', 26.70, 169, null],
        ['nfp', 'Neue Zukunft', 'Neue-Zukunft-Partei', '#45BABD', 1.71, 1, 'neu'],
        ['reform', 'Reform', 'Reformpartei', '#EA5504', 3.62, 3, 'neu'],
        ['ppp', 'PPP', 'Partei der Volksmacht', '#E61E2B', 36.67, 108, null]
      ]
    }]
  },

  IND: {
    n: 'Indien', iso: '356', reg: 'as', sys: 'Parlamentarische Bundesrepublik',
    hog: ['Premierminister', 'Narendra Modi', 'bjp'], hos: ['Präsidentin', 'Droupadi Murmu'],
    gov: ['bjp', 'tdp', 'jdu', 'shs', 'ljp', 'nda'], govNote: 'Koalition der National Democratic Alliance (293 von 543 Sitzen), dritte Amtszeit Modis',
    next: 'Lok-Sabha-Wahl 2029',
    el: [{
      t: 'Lok-Sabha-Wahl 2024', d: '2024-06-04', k: 'parl', ch: 'Lok Sabha', seats: 543, to: 66.1,
      note: 'Größte Wahl der Welt mit rund 642 Millionen Wählern in sieben Phasen. Die BJP verlor ihre absolute Mehrheit.',
      p: [
        ['india', 'INDIA (Sonst.)', 'Weitere Parteien des INDIA-Bündnisses', '#7FB8E0', null, 30, null],
        ['dmk', 'DMK', 'Dravida Munnetra Kazhagam', '#C8102E', 1.82, 22, -2],
        ['aitc', 'AITC', 'All India Trinamool Congress', '#20C646', 4.37, 29, 7],
        ['sp', 'SP', 'Samajwadi Party', '#E8432A', 4.58, 37, 32],
        ['ncpsp', 'NCP(SP)', 'Nationalist Congress Party (Sharadchandra Pawar)', '#00A3A3', 0.92, 8, 'neu'],
        ['ssubt', 'SS(UBT)', 'Shiv Sena (Uddhav Balasaheb Thackeray)', '#F58220', 1.48, 9, 'neu'],
        ['inc', 'INC', 'Indischer Nationalkongress', '#19AAED', 21.19, 99, 47],
        ['oth', 'Sonstige', 'Weitere Parteien und Unabhängige', '#A3A3A3', null, 16, null],
        ['ljp', 'LJP(RV)', 'Lok Janshakti Party (Ram Vilas)', '#5B006A', 0.44, 5, 'neu'],
        ['shs', 'SHS', 'Shiv Sena', '#E36C0A', 1.15, 7, 'neu'],
        ['jdu', 'JD(U)', 'Janata Dal (United)', '#1F4E79', 1.25, 12, -4],
        ['tdp', 'TDP', 'Telugu Desam Party', '#E8C800', 1.98, 16, 13],
        ['nda', 'NDA (Sonst.)', 'Weitere Parteien der NDA', '#F7B977', null, 13, null],
        ['bjp', 'BJP', 'Bharatiya Janata Party', '#FF9933', 36.56, 240, -63]
      ]
    }]
  },

  /* ============================== OZEANIEN & AFRIKA ============================== */

  AUS: {
    n: 'Australien', iso: '036', reg: 'oz', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Anthony Albanese', 'alp'], hos: ['König', 'Charles III.'],
    gov: ['alp'], govNote: 'Labor-Regierung mit klarer Mehrheit im Repräsentantenhaus',
    next: 'Parlamentswahl spätestens 2028',
    focus: [[112.5, -44], [154, -10]],
    el: [{
      t: 'Parlamentswahl 2025', d: '2025-05-03', k: 'parl', ch: 'Repräsentantenhaus', seats: 150, to: 90.7, vl: 'Erstpräferenzen',
      note: 'Wahlpflicht und Präferenzwahl. Nach Zweiparteienpräferenz: Labor 55,2 %, Koalition 44,8 %.',
      p: [
        ['grn', 'Greens', 'Australian Greens', '#10C25B', 12.20, 1, -3],
        ['alp', 'Labor', 'Australian Labor Party', '#E13940', 34.56, 94, 17],
        ['ind', 'Unabh.', 'Unabhängige (u. a. „Teals“)', '#2BB5B8', 7.27, 10, null],
        ['ca', 'CA', 'Centre Alliance', '#FF944D', 0.24, 1, 0],
        ['kap', 'KAP', 'Katter’s Australian Party', '#B50204', 0.33, 1, 0],
        ['on', 'One Nation', 'Pauline Hanson’s One Nation', '#F36C21', 6.40, 0, 0],
        ['nat', 'Nationals', 'National Party', '#00805C', 3.80, 9, -1],
        ['lnp', 'LNP', 'Liberal National Party (Queensland)', '#3A6FE0', 7.10, 16, -5],
        ['lib', 'Liberals', 'Liberal Party', '#1C3F94', 20.69, 18, -9]
      ]
    }]
  },

  NZL: {
    n: 'Neuseeland', iso: '554', reg: 'oz', sys: 'Parlamentarische Monarchie',
    hog: ['Premierminister', 'Christopher Luxon', 'nat'], hos: ['König', 'Charles III.'],
    gov: ['nat', 'act', 'nzf'], govNote: 'Koalition aus National, ACT und NZ First, seit November 2023',
    next: 'Parlamentswahl am 7. November 2026',
    focus: [[166, -47.5], [179, -34]],
    el: [{
      t: 'Parlamentswahl 2023', d: '2023-10-14', k: 'parl', ch: 'Repräsentantenhaus', seats: 123, to: 78.2, vl: 'Parteistimmen',
      note: 'Inklusive Nachwahl in Port Waikato und Überhangmandat.',
      p: [
        ['tpm', 'TPM', 'Te Pāti Māori', '#B2001A', 3.08, 6, 4],
        ['grn', 'Grüne', 'Green Party', '#098137', 11.61, 15, 5],
        ['lab', 'Labour', 'Labour Party', '#D82A20', 26.92, 34, -31],
        ['nzf', 'NZ First', 'New Zealand First', '#2B2B2B', 6.09, 8, 8],
        ['nat', 'National', 'National Party', '#00529F', 38.08, 49, 16],
        ['act', 'ACT', 'ACT New Zealand', '#F2D200', 8.64, 11, 1]
      ]
    }]
  },

  ZAF: {
    n: 'Südafrika', iso: '710', reg: 'af', sys: 'Parlamentarische Republik',
    hog: ['Präsident', 'Cyril Ramaphosa', 'anc'],
    gov: ['anc', 'da', 'ifp', 'pa', 'ffp', 'gnu'], govNote: 'Regierung der Nationalen Einheit aus zehn Parteien, u. a. ANC, DA, IFP, PA und FF+',
    next: 'Parlamentswahl 2029',
    focus: [[16.3, -35], [33, -22]],
    el: [{
      t: 'Parlamentswahl 2024', d: '2024-05-29', k: 'parl', ch: 'Nationalversammlung', seats: 400, to: 58.6,
      note: 'Der ANC verlor erstmals seit 1994 seine absolute Mehrheit.',
      p: [
        ['eff', 'EFF', 'Economic Freedom Fighters', '#852A2A', 9.52, 39, -5],
        ['mk', 'MK', 'uMkhonto weSizwe', '#4E9A3E', 14.58, 58, 'neu'],
        ['anc', 'ANC', 'African National Congress', '#006600', 40.18, 159, -71],
        ['gnu', 'GNU-Partner', 'Kleinere Regierungspartner (UDM, Rise Mzansi, Al Jama-ah, PAC, GOOD)', '#8FB89A', null, 9, null],
        ['oth', 'Sonstige', 'Weitere Parteien (ACDP, BOSA, ATM, NCC, UAT)', '#A3A3A3', null, 10, null],
        ['da', 'DA', 'Democratic Alliance', '#005BA6', 21.81, 87, 3],
        ['asa', 'ActionSA', 'ActionSA', '#05B615', 1.20, 6, 'neu'],
        ['pa', 'PA', 'Patriotic Alliance', '#388F35', 2.06, 9, 9],
        ['ifp', 'IFP', 'Inkatha Freedom Party', '#E2231A', 3.85, 17, 3],
        ['ffp', 'FF+', 'Freedom Front Plus', '#FF6600', 1.36, 6, -4]
      ]
    }]
  }
  }
};
