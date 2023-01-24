# JavaScript Sprachkonzepte

Mit diesem Projekt können Sie die Code- sowie die Übungsbeispiele aus dem Input JavaScript Sprachkonzepte lokal ausführen.

Die Ausführungsumgebung ist [Node.js](https://nodejs.org/).

## Vorbereitung

- [Installation](https://code.visualstudio.com/download) Visual Studio Code
  - Optional: ESLint VS Code extension installieren
- Installation [Node.js](https://nodejs.org/) latest LTS Version
  - Tipp: Nutzen Sie den Node Version Manager (nvm)
    - [nvm](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - `nvm install` installiert die angegebene Node.js Version vom `.nvmrc`
- Git Repository clonen
  - `git clone github.com/web-programming-lab/javascript-sprachkonzepte.git`
- Abhängigkeiten installieren
  - `npm ci && npm run start`
- Auf der Konsole sollte anschliessend erscheinen: `Hello Web Programming Lab 🤙`

## Struktur

Dieses Repository ist wie folgt strukturiert:

- `./snippets`: Enthält alle im Unterricht besprochenen Code-Snippets
- `./exercises`: Enthält alle zu lösenden Übungen, ggf. mit entsprechenden Tests
- `./index.js`: Ihr Playground, um eigene Code-Fragemente ausführen zu können

## Ausführen

- Snippets oder Übungen: `node ./[snippets | exercises]/[file].js`
- Playground index.js: `node ./index.js`
- Oder im Visual Studio Code in der "Run and Debug" Sicht: "Launch Program"

## Tooling in diesem Projekt

- [Prettier](https://prettier.io/)
  - Formatierung
- [ESLint](https://eslint.org/)
  - JavaScript Linter um potentielle Bugs zu markieren

## FAQ

- Wie debugge ich JavaScript (Node.js) in VS Code?
  - [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
