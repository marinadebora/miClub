const { Router } = require('express')

// importacion rutas de eventos
const { postEvent } = require('./Evento/postEvent')
const { getEvent } = require('./Evento/getEvent')
const { putEvent } = require('./Evento/putEvent')
const { deletEvent } = require('./Evento/deletEvent')

// importacion rutas de Actividades -------------------//
const { getActivity } = require('./Activity/getActivity')
const { postActivity } = require('./Activity/postActivity')
const { putActivity } = require('./Activity/putActivity')

// importacion de rutas de usuario ---------------------//
const { postUser } = require('./Users/postUser')
const { getUser } = require('./Users/getUsers')
const { logInUser } = require('./Users/logInUser')

// importacion de rutas de perfiles -------------------//
const { postProfile } = require('./Profile/postProfile')
const { putProfile } = require('./Profile/putProfile')
const { getProfile } = require('./Profile/getProfile') 

const router = Router()

// ruta de eventos --------------------------------------//
router.get('/event/', getEvent)
router.get('/event/:_id', getEvent)
router.post('/event', postEvent)
router.put('/event/:_id', putEvent)
router.delete('/event/:_id', deletEvent)

// rutas de Actividades --------------------------------//
router.get('/activity', getActivity)
router.get('/activity/:_id', getActivity)
router.post('/activity', postActivity)
router.put('/activity/:_id', putActivity)

// rutas de usuario ------------------------------------//
router.get('/user', getUser)
router.get('/user/:_id', getUser)
router.post('/user', postUser)
router.get('/login', logInUser)

// rutas de perfiles-----------------------------------//
router.get('/profile',getProfile)
router.get('/profile/:_id',getProfile)
router.post('/profile',postProfile)
router.put('/profile/:_id',putProfile)

module.exports = router
