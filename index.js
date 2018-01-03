const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOver = require('method-override')
const shuffle = require('shuffle-array')
const recipes = require('./controller/recipes')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

const fullRecipe = [
  "THUMBPRINT COOKIES - Hallongrotta is the name of a common Swedish pastry. The name means 'Raspberry cave' in Swedish. In the United States they are known as Thumbprint cookies. It is an easily baked molded cookie, flavored with vanilla.",
  "NEW ORLEANS-STYLE RED BEANS AND RICE RECIPE - New Orleans–style red beans and rice is mind-bendingly delicious. Smoky, spicy, hearty, and supremely comforting. But, for a dish so complex in flavor, the preparation and ingredient list are pretty simple: a few vegetables to start, a handful of common pantry spices, a couple of fresh herbs, some chunks of pork, and some red kidney beans.",
  "MR. B's NEW ORLEANS BBQ SHRIMP - Don’t break out your grill for this dish. Here in New Orleans, barbecued shrimp means sautéed shrimp in Worcestershire-spiked butter sauce. We serve these shrimp with heads and tails on, so you need to dig in to enjoy. I highly recommend a bib."
]

app.set('port', process.env.PORT || 5001)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
app.use('/recipes', recipes)
app.use(methodOver('_method'))

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))

app.listen(app.get('port'), () => {
  console.log('Aww..yeah!')
})

app.get('/', (req, res) => {
  res.render('app-welcome', {fullRecipes: shuffle.pick(fullRecipe)})
})

// app.post("/", (req, res) => {
//   res.render("app-welcome", {
//     // title: req.body.title,
//     // description: req.body.description,
//     instructions: req.body.instructions,
//     ingredients: req.body.ingredients
//   })
// })
