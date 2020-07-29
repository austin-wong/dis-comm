import server from '../controllers/discommController';

export default (app) => {
    app.route('/servers')
        .post(server.createServer);

    app.route('/servers/:serverId')
        .get(server.getServer)
};