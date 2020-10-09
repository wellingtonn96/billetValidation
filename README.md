<h1 align="center">
Validation Of Slips
</h1>
REST API NodeJS to validate the digitizable line of bank slips.

This app using all the latest features, tools and practices in web development!

- :blue_book: **Typescript** — TypeScript provides highly productive development tools for JavaScript IDEs and practices, like static checking.
- 💹 **Node Js** — A open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser

## Getting started

1. Clone this repo using `git clone github.com/wellingtonn96/validationOfSlips.git`
2. Move yourself to the appropriate directory: `cd validationOfSlips/`
3. Run `yarn install` to install dependences

### Getting started with the backend server

1. Move yourself to the server folder: `cd src/`
2. Run `yarn dev:server` to start the server

### Validate the slip code

**URL** : `http:/localhost:3333/validateSlip` **Method** : `POST`

**Data example** This field must be sent.

```json
{
  "code": "34191091646992531293183035710009183850000038352"
}
```

## Success Response

```json
{
  "dueDate": "22/9/2020",
  "value": "R$383.52",
  "code": "34191091646992531293183035710009183850000038352"
}
```

## Error Responses

```json
{
  "erro": "Code is invalid!"
}
```
