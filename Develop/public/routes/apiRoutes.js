const fs = require('fs');
const path = require('path');
const notes = require('..db/db.json');
var uniqid = require('uniqid');


module.exports = (app) => {

    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get('/api/notes', (req, res) => {
        return res.json(notes);
    });

    app.post('/api/notes'), (req, res) => {
        let newNote = {
            "title": req.body.title,
            "text": req.body.text,
            "id": uniqid(),
        };
        
        notes.push(newNote);
    }

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) =>
        err ? res.send("Error Occured") : res.json(newNote));

}