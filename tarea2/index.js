const { createApp } = require('./app');

const app = createApp();

// escuchar peticiones (levantar aplicacion)
app.listen(3000, () => {
    console.log('api running in http://localhost:3000')
})