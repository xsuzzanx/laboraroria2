const renderPage = (req,res) => {
    const formFields = [
        {type: 'text', name: 'name', label: 'Imię'},
        { type: 'text', name: 'lastname', label: 'Nazwisko' },
        { type: 'number', name: 'age', label: 'Wiek' },
        { type: 'select', name: 'gender', label: "Płeć",
            options: [
                { value: 'male', label: 'Mężczyzna' },
                {value: 'female', label: 'Kobieta' },
                {value: 'other', label: 'Inna' },
                    ],
        },
        { type: 'number', name: 'code', label: 'Numer albumu' },
        { type: 'text', name: 'studyField', label: 'Kierunek' },   
    ];
    res.render('home', {title: 'Strona główna'});
};

const student = {
    name: 'Zuzanna',
    lastname: 'Ochal',
    age: 21,
    gender: "female",
    code: 42889,
    studyField: Informatyka,
};

module.exports = renderPage;


<html lang="pl">
    <head>
        <meta charset="UTF-8"/>
        <meta name= "viewport" content= "width=device-width, initial-scale=1.0" />
        <title>home</title>
    </head>
    <body>
        <h1>home</h1>
        <form>
            <div>
                <label for="name">Imię:</label>
                <input type="<%= formFields[0].type %>" id="name" name="<%= formFields[0].name %>" />
            </div>
            <div>
                <label for="lastname">Nazwisko:</label>
            </div>    
        </form>
    </body>
</html>