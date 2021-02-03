export default function createRoutes(routes) {
    
    //const routes = Router()

    // used for unit tests purposes anfd for healthcheck
    routes.get('/check', (request, response) => {
        console.log('> GET /check called')
        return response.json({ message : 'The App is health :)'})
    })

    return routes
}