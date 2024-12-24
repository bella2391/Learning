module.exports = {
    development: {
        client: "mysql",
        connection: {
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        },
    },
    staging: {
        client: "mysql",
        connection: {
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        },
    },
    production: {
        client: "mysql",
        connection: {
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};
