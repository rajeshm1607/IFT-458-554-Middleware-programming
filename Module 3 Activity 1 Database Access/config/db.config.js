const env= require('dotenv').config({ path: 'config.env' });
const sqlConfig = {
    server: "sqlservercentralpublic.database.windows.net",
    user: env.parsed.DBUSERNAME,
    password: env.parsed.PASSWORD,
    database: env.parsed.DATABASE,
    pool: {
    idleTimeoutMillis: 60000
    },
    options:{
    encrypted: true, // for azure
    trustServerCertificate: false,
    useUTC: true
    }
    }
    module.exports = sqlConfig;