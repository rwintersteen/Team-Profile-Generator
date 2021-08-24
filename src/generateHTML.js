const generateDentist = (dentist) => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
        <div class="p-3 mb-2 bg-info text-white">
            <h3>${dentist.name}</h3>
            <h4>Manager</h4><i class="material-icons">badge</i>
        </div>
        </div>
        <div class="card-body">
            <p class="id">ID: ${dentist.id}</p>
            <p class="email">Email: <a href="mailto:${dentist.email}">${dentist.email}</a></p>
            <p class="office">Office Number: ${dentist.officeNumber}</p>
        </div>
    </div>`
}