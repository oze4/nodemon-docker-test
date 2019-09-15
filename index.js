const app = require('./app');

app.listen(app.get('port'), () => { 
    console.log(`App started on port ${app.get('port')}`) 
});
