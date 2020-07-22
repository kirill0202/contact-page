const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');

app.use('/api/auth', require('./routes/auth.routes'));
const PORT = config.get('port') || 5000;


async function start () {
    try{
        await mongoose.connect(config.get("mongoUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

    app.listen(PORT, () => console.log(`Has been starteed on port ${PORT}`));

    }catch(e){
        console.log('Server error', e.message);
        process.exit(1);
    }
}
start();

