# Hex-to-RGB REST API

A minimal JavaScript library, Express REST API and automated tests.

## Run

```bash
npm install
npm test
npm start
```

## API

`GET http://localhost:3000/api/hex-to-rgb?hex=%233366CC`

Success (200): `{"hex":"#3366CC","rgb":{"r":51,"g":102,"b":204}}`

Invalid or missing input (400): `{"error":"hex must be a six-digit hexadecimal colour"}`

## Manual REST test

```bash
curl -i 'http://localhost:3000/api/hex-to-rgb?hex=%233366CC'
curl -i 'http://localhost:3000/api/hex-to-rgb?hex=invalid'
```

`%23` is the URL-encoded `#` character.
