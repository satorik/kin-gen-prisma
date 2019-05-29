module.exports = async() => {
  console.log('stopping')
  await global.httpServer.close()
}