import mongoose from 'mongoose'; 
import server from '../models/notebookModel.js';

exports.getServer = (req, res) => {
    note.findById(req.params.serverId, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.json(server);
    });
};


exports.createServer = (req, res) => {
    const newServer = new server(req.body);

    newServer.save((err, server) => {
        if (err) {
            res.send(err);
        }

        res.json(server);
    });
};

