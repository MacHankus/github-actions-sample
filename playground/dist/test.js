"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const pg_1 = require("pg");
function createPGCLient() {
    const pgClient = new pg_1.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'postgres',
        port: 9001,
    });
    return pgClient;
}
function createDataSource() {
    const dataSource = new typeorm_1.DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [],
        synchronize: false,
    });
    return dataSource;
}
async function initDB() {
    const pgClient = createPGCLient();
    const pgconn = await pgClient.connect();
    const res = await pgconn.query('select 1');
    console.log(pgconn);
    const conn = await createDataSource().initialize();
    console.log(conn);
}
initDB();
//# sourceMappingURL=test.js.map