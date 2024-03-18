
const getStudentFullName = (student) => student.name + ' ' + student.lastname;
const getStudentId = (student) => student.code;

module.export = {
    getStudentFullName,
    getStudentId,
};


const renderPage = (req,res) => {
    res.render('student', {title: 'Konto studenta'});
};
    <html lang ="pl">
    <head>
        <meta charset="UTF-8"/>
        <meta name= "viewport" content= "width=device-width, initial-scale=1.0" />
    </head>
</html>

module.exports = {
    getStudentFullName,
    getStudentId,
  };