const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const recipes = require('./controller/recipes')
const app = express()

app.set('port', process.env.PORT || 5001)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))

app.use(parser.json()) //handles json post requests
app.use(parser.urlencoded({ extended: true })) // handles form submissions
app.use('/recipes', recipes)

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))



app.get('/', (req, res) => {
  res.render('app-welcome')
})

app.listen(app.get('port'), () => {
  console.log('Aww..yeah!')
})

app.post("/", (req, res) => {
  res.render("app-welcome", {
    // title: req.body.title,
    // description: req.body.description,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients
  })
})
