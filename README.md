# Hex-to-RGB REST API

A simple JavaScript project that converts hexadecimal colour codes into RGB values using an Express REST API. The project includes automated unit and integration tests.

## Technologies Used

- JavaScript (Node.js)
- Express.js
- Mocha and Chai
- Supertest
- cURL for manual API testing

## Installation and Running

Clone or download the repository and open the project folder in a terminal.

Install dependencies:

```bash
npm install
```

Run the automated tests:

```bash
npm test
```

Start the REST API server:

```bash
npm start
```

The server runs at `http://localhost:3000`.

## API Endpoint

**Method:** GET

**Endpoint:**

`http://localhost:3000/api/hex-to-rgb?hex=%233366CC`

**Successful response (HTTP 200):**

```json
{
  "hex": "#3366CC",
  "rgb": {
    "r": 51,
    "g": 102,
    "b": 204
  }
}
```

**Invalid input (HTTP 400):**

```json
{
  "error": "hex must be a six-digit hexadecimal colour"
}
```

The API accepts six-digit hexadecimal colours with or without a leading `#`. The `%23` in the URL represents the encoded `#` character.

## Automated Testing

The project includes 11 automated tests.

**Unit tests (7):**
- Valid hexadecimal conversions
- Uppercase and lowercase input
- Black and white boundary values
- Invalid input handling

**Integration tests (4):**
- Successful HTTP 200 response
- Correct RGB JSON response
- HTTP 400 for invalid hexadecimal values
- HTTP 400 for missing input

Run all tests using:

```bash
npm test
```

**Test results:** 11 passing, 0 failing.

## Manual REST API Testing

Start the server using `npm start`, then open another terminal.

Test a valid hexadecimal value:

```bash
curl -i "http://localhost:3000/api/hex-to-rgb?hex=%233366CC"
```

Test an invalid value:

```bash
curl -i "http://localhost:3000/api/hex-to-rgb?hex=invalid"
```

The first request should return HTTP 200 with RGB values. The second should return HTTP 400 with an error message.

## Project Structure

```text
hex-rgb-api/
├── src/                 # Library and Express application
├── test/                # Unit and integration tests
├── evidence/            # Test screenshots (optional)
├── package.json
├── package-lock.json
└── README.md
```

## Conclusion

The project demonstrates how unit and integration testing can verify the correctness of a JavaScript library and an Express REST API. All 11 automated tests passed successfully. Manual cURL testing also confirmed correct responses for valid and invalid input.
