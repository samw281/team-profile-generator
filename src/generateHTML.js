const generateManager = function (manager) {
  return `
      <div class="col-4 mt-4">
          <div class="card h-100 shadow">
              <div class="card-header bg-primary text-white">
                  <h3>${manager.name}</h3>
                  <h5><i class="fa-solid fa-mug-hot"></i> Manager</h5>
              </div>
              <div class="card-body" id="card-back">
                  <ul class="list-group list-group-flush border">
                      <li class="list-group-item">ID: ${manager.id}</>
                      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></>
                      <li class="list-group-item">Office Number: ${manager.officeNumber}</>
                  </ul>
              </div>
          </div>
      </div>
      `;
};

const generateEngineer = function (engineer) {
  return `
      <div class="col-4 mt-4">
          <div class="card h-100 shadow">
              <div class="card-header bg-primary text-white">
                  <h3>${engineer.name}</h3>
                  <h5><i class="fa-solid fa-glasses"></i> Engineer</h5>
              </div>
              <div class="card-body" id="card-back">
                  <ul class="list-group list-group-flush border">
                      <li class="list-group-item">ID: ${engineer.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                  </ul>
              </div>
          </div>
      </div>
      `;
};

const generateIntern = function (intern) {
  return `
      <div class="col-4 mt-4">
          <div class="card h-100 shadow">
              <div class="card-header bg-primary text-white">
                  <h3>${intern.name}</h3>
                  <h5><i class="fa-solid fa-user-graduate"></i> Intern</h5>
              </div>
              <div class="card-body" id="card-back">
                  <ul class="list-group list-group-flush border">
                      <li class="list-group-item">ID: ${intern.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                      <li class="list-group-item">School: ${intern.school}</li>
                  </ul>
              </div>
          </div>
      </div>
      `;
};

generateHTML = (data) => {
  pageArr = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArr.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArr.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArr.push(internCard);
    }
  }

  const employeeCards = pageArr.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

const generateTeamPage = function (employeeCards) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Profile</title>
          <script src="https://kit.fontawesome.com/d88746a44a.js" crossorigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      </head>
      <body>
          <header>
              <nav class="navbar p-0">
                  <span class="m-0 w-100 text-center bg-danger text-white py-4 fs-3">My Team</span>
              </nav>
          </header>
          <main>
              <div class="container">
                  <div class="row justify-content-center">
                      ${employeeCards}
                  </div>
              </div>
          </main>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </body>
      </html>
      `;
};

module.exports = generateHTML;
