> ⚠️⚠️ **DEPRECATED!** ⚠️⚠️ - this project is no longer mantained, if you want a quick frontend scaffolding tool you should definetely check [Vite.js](https://vitejs.dev/).

---

# frontend-starter-kit

> Simple starter kit boilerplate based on Webpack, SASS and Bootstrap 5 (beta)

## How to use

Just clone the project in a new folder:

```bash
git clone https://github.com/mohole/frontend-starter-kit my-new-project
```

install dependencies

```bash
cd my-new-project
npm install
# or "npm i" as shortcut...
```

and get started:

```bash
npm start
```

This will start a `webpack-dev-server` instance in `hot-reload` mode (_this will automatically update your browser when you apply any changes to the source files_), your project will be exposed at `localhost:8080`.

To create the optimized files to publish to whaterver static hosting you choose, just run:

```bash
npm run build
```

the result will be available in the `./dist` folder.

## Customizations

To update the page title edit the `displayName` filed in the `package.json` file:

```json
 "displayName": "Mohole frontend starter kit",
```

to change the port to expose the project and the folder to build to just update the related constants in the `webpack.config.js` file:

```javascript
const dist = "./dist";
const port = 8080;
```

## License

Released under the [MIT license](LICENSE).
