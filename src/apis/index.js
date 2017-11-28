'use strict'

const github = require('../github-client')
const _ = require('lodash')
const forkRepo = require('./fork-repo')
const deleteTutorial = require('./deleteTutorial')
const submitTutorial = require('./submitTutorial')
const saveTutorial = require('./saveTutorial')
const getTutorials = require('./getTutorials')
const getTutorial = require('./getTutorial')
const reviewTutorial = require('./reviewTutorial')
const express = require('express')
const apiRouter = express.Router()

// middleware that is specific to this router
apiRouter.use((req, res, next) => {
  const authToken = _.get(req, 'cookies.accessToken')
  console.log('Time: ', Date.now(), 'using apiRouter')
  console.log('authToken', authToken)
  github.authenticate({
    type: 'oauth',
    token: authToken
  })
  next()
})

apiRouter.post('/fork', forkRepo)
apiRouter.put('/submit/tutorial', submitTutorial)
apiRouter.put('/save/tutorial', saveTutorial)
apiRouter.delete('/remove/tutorial', deleteTutorial)
apiRouter.get('/tutorials', getTutorials)
apiRouter.get('/review/:user/:tutorialName', reviewTutorial)
apiRouter.get('/tutorial/:tutorialName', getTutorial)

apiRouter.use(function(req, res, next) {
  console.log('the client requested an invalid url')
  res.status(400).send({ code: 'BadRequest', message: 'the url requested does not exist' })
})

module.exports = apiRouter