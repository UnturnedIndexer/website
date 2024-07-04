import Surreal from 'surrealdb.js';

export const endpoint = process.env.DB_ENDPOINT ?? 'ws://127.0.0.1:8000/rpc';

export const user = process.env.DB_USER ?? 'root';
export const pass = process.env.DB_PASS ?? 'surrealdb';

export const namespace = process.env.DB_NS ?? 'unturned-indexer';
export const database = process.env.DB_DB ?? 'index';

export const surreal = new Surreal(endpoint, {
    prepare: async () => {
        await surreal.use({
            ns: namespace,
            db: database,
        });
    },

    auth: {
        user: user,
        pass: pass,
    }
});