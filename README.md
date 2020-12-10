<h1 align="center">
Validation Of Slips
</h1>
<p align="center">REST API NodeJS to validate the digitizable line of bank slips.</p>

This app using all the latest features, tools and practices in web development!

- :blue_book: **Typescript** — TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking.
- 💹 **Node Js** — A open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser

## Getting started

1. Clone this repo using `git clone github.com/wellingtonn96/validation-bar-code.git`
2. Move yourself to the appropriate directory: `cd validation-bar-code/`
3. Run `yarn install` to install dependences

### Getting started with the backend server

1. Move yourself to the server folder: `cd src/`
2. Run `yarn dev:server` to start the server

### Validate the bar code

**URL** : `http://localhost:8080/boleto/34191091646992531293183035710009110110000032152` **Method** : `GET`


## Success Response

```json
{
  "barCode": "34191091646992531293183035710009110110000032152",
  "amount": "321.52",
  "expirationDate": "14-07-2000"
}
```

## Error Responses

```json
{
  "erro": "bar code is invalid!"
}
```
