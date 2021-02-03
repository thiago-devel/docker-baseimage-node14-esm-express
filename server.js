import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import session from 'express-session'
import createRoutes from './modules/routes.js'

const app = express()
const server = http.createServer(app)
const router = express.Router()
const port = process.env.PORT || 8080

const routes = createRoutes(router)

app.use(bodyParser.json())
//app.use(express.static('./public'))
app.use(routes)


// used for unit tests purpose
export default {
  server
}

server.listen(port, () => {
    console.log(`listening on *:${port}`)
})