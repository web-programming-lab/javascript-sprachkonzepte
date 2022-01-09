# Seed Projekt für JavaScript Sprachkonzepte I & II

Mit diesem Projekt können Sie die Code sowie die Übungsbeispiele aus dem Input JavaScript Sprachkonzepte lokal ausführen.

Die Ausführungsumgebung ist dabei [Node.js](https://nodejs.org/).

## Vorbereitung

- [Installation](https://code.visualstudio.com/download) Visual Studio Code
- Installation [Node.js](https://nodejs.org/) latest LTS Version
- Ggf. Repository forken
- `git clone https://...`
- `npm i && npm run start`

## Struktur

Dieses Repository ist wie folgt strukturiert:

* `./snippets`: Enthält alle im Unterricht besprochenen Code-Snippets
* `./exercises`: Enthält alle zu lösenden Übungen, ggf. mit entsprechenden Tests
* `./index.js`: Ihr Playground, um eigene Code-Fragemente ausführen zu können

## Ausführen

* Snippets oder Übungen: `node ./[snippets | exercises]/[file].js`
* Playground index.js: `node ./index.js` oder `npm run start:watch` (Neustarten der Applikation nach einer Änderung)

## Tooling in diesem Projekt

- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Referenzen

- [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
