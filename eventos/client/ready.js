const mongoose = require('mongoose');

module.exports = client => {
    //Nos conectamos a la base de datos

    let palo = 53;

    mongoose.connect(process.env.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Conectado a la base de datos de MONGODB!`.blue)
    }).catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err)
    })

    console.log(`Conectado como ${client.user.tag}`.green)
}