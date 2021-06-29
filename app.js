const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")
const cluckRouter = require("./routes/clucks");
const rootRouter = require("./routes/root");

const app = express();

app.set("view engine", "ejs")

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride((req, res) => {
      if(req.body && req.body._method) {
          const method = req.body._method;
          delete req.body._method; //deleting that property from the form data in the case that we need to use this object later in knex
          return method; //the new http verb
      }
}));


app.use((req, res, next) => {
      res.locals.username = req.cookies.username || "";
      next();
  })


app.use("/", rootRouter);
app.use("/clucks", cluckRouter);




const PORT = process.env.PORT || 9000
const ADDRESS = "localhost"
const environment = app.get('env'); //returns from the app config the environemnt that is set up


app.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening on http://${ADDRESS}:${PORT} in ${environment}`)
})
