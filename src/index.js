import server from './server'

server.listen({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!')
})
