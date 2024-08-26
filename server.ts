import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Middleware to handle X-Forwarded-For
    server.use((req, res, next) => {
        if (!req.headers['x-forwarded-for']) {
            req.headers['x-forwarded-for'] = req.connection.remoteAddress;
        }
        next();
    });

    // Handle all routes with Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // Start the server
    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
