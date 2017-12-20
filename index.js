const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const app = express()

app.set('port', process.env.PORT || 5001)
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))

app.use('/assets', express.static('public'))

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
