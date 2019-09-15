const app = require('./app');

app.listen(app.get('port'), app.get('ip'), () => { 
    console.log(`App started on port ${app.get('ip')}:${app.get('port')}`) 
});
