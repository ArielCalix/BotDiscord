const serverSchema = require(`${process.cwd()}/modelos/servidor.js`);
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
    asegurar,
    asegurar_todo,
}

async function asegurar(schema, id, id2, objeto) {
    let data = await schema.findOne({ id: id2 })
    if (!data) {
        console.log("Creando Base de Datos...")
        data = await new schema(objeto)
        data.save();
    }
    return data;
}

async function asegurar_todo(guildid) {
    let serverdata = await serverSchema.findOne({ guildID: guildid })
    if (!serverdata) {
        console.log(`Asegurado: Config de Server`.green);
        serverdata = await new serverSchema({
            guildID: guildid,
            prefijo: process.env.prefix
        });
        await serverdata.save();
    }
    let setupsdata = await setupSchema.findOne({ guildID: guildid })
    if (!setupsdata) {
        console.log(`Asegurado: Setups`.green);
        setupsdata = await new setupSchema({
            guildID: guildid,
            reaccion_roles: [],
        });
        await setupsdata.save();
    }
}
