const generateDentist = (dentist) => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
        <div class="p-3 mb-2 bg-info text-white">
            <h3>${dentist.name}</h3>
            <h4>Dentist</h4><i class="fas fa-user-md"></i>
        </div>
        </div>
        <div class="card-body">
            <p class="id">ID: ${dentist.id}</p>
            <p class="email">Email: <a href="mailto:${dentist.email}">${dentist.email}</a></p>
            <p class="office">Office Number: ${dentist.officeNumber}</p>
        </div>
    </div>`
};

const generateDentalHygienist = (dentalHygienist) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <div class="p-3 mb-2 bg-info text-white">
                <h3>${hygienist.name}</h3>
                <h4>Dental Hygienist</h4><i class="fas fa-user-friends"></i>
            </div>
            </div>
            <div class="card-body">
                <p class="id">ID: ${hygienist.id}</p>
                <p class="email">Email: <a href="mailto:${hygienist.email}">${hygienist.email}</a></p>
                <p class="office">Office Number: ${hygienist.officeNumber}">${hygienist.officeNumber}</a></p>
            </div>
        </div>
    </div>
    `
};

const generateDentalAssistant = (dentalAssistant) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <div class="p-3 mb-2 bg-info text-white">
                <h3>${assistant.name}</h3>
                <h4>Dental Assistant</h4><i class="fas fa-users"></i>
            </div>
            </div>
            <div class="card-body">
                <p class="id">ID: ${assistant.id}</p>
                <p class="email">Email: <a href="mailto:${assistant.email}">${assistant.email}</a></p>
                <p class="office">Office Number: ${assistant.officeNumber}">${assistant.officeNumber}</a></p>
            </div>
        </div>
    </div>
    `
};

generateHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Dentist') {
            const dentistCard = generateDentist(employee);
            pageArray.push(dentistCard);
        }
        if (role === 'Dental Hygienist') {
            const hygienistCard = generateDentalHygienist(employee);
            pageArray.push(hygienistCard);
        }
        if (role === 'Dental Assistant') {
            const assistantCard = generateDentalAssistant(employee);
            pageArray.push(assistantCard);
        }
    }
    const employeeCards = pageArray.join('');
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dental Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/d36c7c889c.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-danger " id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Dental Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }
  
  module.exports = generateHTML; 