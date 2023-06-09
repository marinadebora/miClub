const { Router } = require("express");

//importacion rutas de eventos
const {postEvent} = require("./Evento/postEvent");
const {getEvent} = require("./Evento/getEvent")
const {putEvent} = require("./Evento/putEvent")
const {deletEvent} = require("./Evento/deletEvent")
//---------------------------------------------------//

//importacion rutas de Actividades
const {getActivity} = require("./Activity/getActivity")
const {postActivity} = require("./Activity/postActivity");
const {putActivity} = require("./Activity/putActivity")
//---------------------------------------------------//

//importacion de rutas de usuario
const {postUser} = require("./Users/postUser")
const {getUser} = require("./Users/getUsers")
const {logInUser} = require("./Users/logInUser")

const router= Router();

//ruta de eventos
router.get("/event", getEvent)
router.post("/event", postEvent)
router.put("/event/:_id",putEvent)
router.delete("/event/:_id", deletEvent)
//---------------------------------------------------//
router.get("/activity",getActivity)
router.get("/activity/:activityName",getActivity)
router.post("/activity",postActivity)
router.put("/activity/:_id",putActivity)
//---------------------------------------------------//
router.get("/user",getUser)
router.post("/user",postUser)
router.get("/login",logInUser)



module.exports = router


