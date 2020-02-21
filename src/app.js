const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geolocation = require('./geolocation')
const weather = require('./weather')

const fileDirectory = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname,'../templates/views')
const partialsDirectory = path.join(__dirname,'../templates/partials')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.set('views', viewDirectory)
hbs.registerPartials(partialsDirectory)

app.use(express.static(fileDirectory))
app.get('', (req,res)=>{

    res.render('index',{

        title : 'Web server app',
        name: 'Ajay',
        Author : 'Azay'

    })//just the name of the template

})
app.get('/about',(req, res)=>{

    res.render('about', {

        title : 'This is about us page',
        team: 'Alex Ben Laura',
        Author : 'Azay'

    })

})

app.get('/help', (req, res)=>{

    res.render('help', {
        title: 'Welcome to help page.',
        message : 'We are busy to help you.',
        Author : 'Azay'
    })

})

app.get('/weather', (req, res)=>{

    if(!req.query.address){

        res.send({error:'No input provided'})

    }else{

        geolocation(req.query.address,(error, response)=>{
            if (error) res.send(error)
            else {

                weather(response[1],response[0],(error, response)=>{
                    if (error) res.send(error)
                    else res.send(response)
                })

            }
        })

    }

})

app.get('/help/*', (req, res)=>{
    res.render('404page', {
        pageTitle : 'Help Article',
        message : 'not Found',
        Author : 'Azay'
    })
})

app.get('*',(req, res)=>{

    res.render('404page', {
        pageTitle : 'Page',
        message : 'not Found',
        Author : 'Azay'
    })

})

app.listen(port,()=>{

    console.log('App Started Sucessfully')
    

})