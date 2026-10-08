# Wahlatlas · Election Atlas

Interaktive Weltkarte der letzten nationalen Wahlergebnisse in 46 Ländern (EU, USA, Kanada, Türkei u. a.), auf Deutsch und Englisch.

- Länder eingefärbt nach Wahlsieger oder nach Partei der Regierungsspitze
- Ländersuche in der Kopfzeile (Strg+K oder /)
- Länderansicht mit Reitern: Ergebnis (Sitzbalken, Ergebniszeilen), Verlauf, Regierung, Karte, Quellen
- frühere Wahlen (meist die letzten drei bis vier) als Zeitleiste mit Verlaufsdiagramm
- Regionalkarten für Deutschland (Wahlkreise, Bundesländer), USA (Bundesstaaten, Counties), Großbritannien, Kanada, Österreich, Polen, Brasilien und Mexiko

Datenstand: 5. Oktober 2026.

## Starten

Reine statische Seite ohne Build-Schritt. Wegen der Datendateien über einen lokalen Webserver öffnen, z. B.:

```bash
npx serve .
```

## Aufbau

- `index.html`: Seite und Styles
- `app.js`: Kartenlogik (D3 v7 + TopoJSON), UI-Texte als `tr('English', 'Deutsch')`
- `data/elections.js` / `data/elections.de.js`: aktuelle Ergebnisse (EN / DE)
- `data/hist/XXX.js`: frühere Wahlen je Land (EN und DE), werden beim Öffnen des Landes nachgeladen
- `data/world.js`: Weltkarte; `data/c-*.js`: Regionalkarten und -ergebnisse

## Quellen

Amtliche Endergebnisse der nationalen Wahlbehörden, zusammengestellt aus den Ergebnistabellen der Wikipedia; Bundeswahlleiterin (Wahlkreise 2025); Democracy Club (britische Wahlkreise); tonmcg/US County Level Election Results. Karten: Natural Earth, US Census, Bundeswahlleiterin, ONS.
