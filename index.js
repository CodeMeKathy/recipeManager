const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const app = express()

app.set('port', process.env.PORT || 5001)
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }))


app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))



// app.get('/', (req, res) => {
//   res.send('Hello World')
// })



app.get('/', (req, res) => {
<<<<<<< HEAD
  res.render('app-welcome')
=======
    res.render('app-welcome')
>>>>>>> 8185a1fb664ae1b79eaaaca0fd38baac4fbaa353
})

app.listen(app.get('port'), () => {
  console.log('Aww..yeah!')
})
