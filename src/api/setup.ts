import { server } from '@hapi/hapi';

const setup = async () => {

    const bootstrap = server({
        port: 3000,
        host: 'localhost'
    });

    bootstrap.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await bootstrap.start();
    console.log('Server running on %s', bootstrap.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default setup;