const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('views engine', 'ejs');

app.get('/', require('./views/home'));
app.get('/student', require('./views/student'));

const server = http.createServer(app);


app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
    console.log(`Pełne imie i nazwisko ucznia: ${student.getStudentFullName({
        name: 'Zuzanna',
        lastname: 'Ochal',
    })}`);
    console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);
});

module.exports =app;
