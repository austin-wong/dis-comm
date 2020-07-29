import notebook from '../controllers/notebookController';

export default (app) => {
    app.route('/servers')
        .post(notebook.createSerever);

    app.route('/servers/:serverId')
        .get(notebook.getServer)
};