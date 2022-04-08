var AllCar = null;

const getAllCar = () => {
  fetch('/get-cars')
    .then((response) => response.json())
    .then((data) => {
      const body = document.getElementById('cm-cards');
      for (let i = 0; i < data.length; i++) {
        const Car = document.createElement('div');
        Car.className = 'col-sm';

        Car.innerHTML = `
                    <div class="card cm-content" style="width: 280px; height: 580px; border: 1px solid #9999; margin: 20px auto 20px auto;">
                        <img src="${data[i].image}" alt="" style="width: 255px; height: 200px; padding-top: 20px; padding-left: 20px;">
                        <h5 style="padding-top: 20px; padding-left: 20px;"><b>${data[i].manufacture} / ${data[i].model}</b></h5>
                        <h4 style="padding-left: 20px;"><b>Rp. ${data[i].rentPerDay} / hari</b></h4>
                        <p style="height: 100px; padding-left: 20px; padding-right: 20px;">${data[i].description}</p>

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_users.png">
                            </div>
                            <div class="col">
                                <p>${data[i].capacity} orang</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
                            </div>
                            <div class="col">
                                <p>${data[i].transmission}</p>
                            </div>
                        </div>      

                        <div class="row">
                            <div class="col-1">
                                <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
                            </div>
                            <div class="col">
                                <p>${data[i].year}</p>
                            </div>
                        </div>
                        
                        <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px; width: 87%; margin-left: 18px; background-color: #5cb85f !important;">Pilih Mobil</a>
                    </div>
                `;

        body.appendChild(Car);
      }
      AllCar = data;
    });
};

getAllCar();

const filterCar = (avail, tanggal, waktu, kapasitas) => {
  console.log(new Date('2022-03-23T15:49:05.563Z'));
  let newCar = AllCar.filter(
    (car) =>
      // {
      // console.log(new Date(car.availableAt).getHours(), waktu, '==========')
      // return new Date(car.availableAt).getHours() > waktu
      car.available.toString() == avail && new Date(car.availableAt) < new Date(tanggal) && new Date(car.availableAt).getHours() >= waktu && car.capacity == kapasitas
  );
  const body = document.getElementById('cm-cards');
  body.innerHTML = '';

  newCar.forEach((data) => {
    const Car = document.createElement('div');
    Car.className = 'col-sm';

    Car.innerHTML = `
        <div class="card cm-content" style="width: 280px; height: 580px; border: 1px solid #9999; margin: 20px auto 20px auto;">
        <img src="${data.image}" alt="" style="width: 255px; height: 200px; padding-top: 20px; padding-left: 20px;">
        <h5 style="padding-top: 20px; padding-left: 20px;"><b>${data.manufacture} / ${data.model}</b></h5>
        <h4 style="padding-left: 20px;"><b>Rp. ${data.rentPerDay} / hari</b></h4>
        <p style="height: 100px; padding-left: 20px; padding-right: 20px;">${data.description}</p>

        <div class="row">
            <div class="col-1">
                <img class="cm-icon" src="./images/cm-icon/fi_users.png">
            </div>
            <div class="col">
                <p>${data.capacity} orang</p>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
            </div>
            <div class="col">
                <p>${data.transmission}</p>
            </div>
        </div>      

        <div class="row">
            <div class="col-1">
                <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
            </div>
            <div class="col">
                <p>${data.year}</p>
            </div>
        </div>
        <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px; width: 87%; margin-left: 18px; background-color: #5cb85f !important;">Pilih Mobil</a>
    </div>
            `;
    body.appendChild(Car);
  });
};

const filterCarTwo = (avail, tanggal, waktu) => {
  console.log(new Date('2022-03-23T15:49:05.563Z'));
  let newCar = AllCar.filter(
    (car) =>
      // {
      // console.log(new Date(car.availableAt).getHours(), waktu, '==========')
      // return new Date(car.availableAt).getHours() > waktu
      car.available.toString() == avail && new Date(car.availableAt) < new Date(tanggal) && new Date(car.availableAt).getHours() >= waktu
  );
  const body = document.getElementById('cm-cards');
  body.innerHTML = '';

  newCar.forEach((data) => {
    const Car = document.createElement('div');
    Car.className = 'col-sm';

    Car.innerHTML = `
          <div class="card cm-content" style="width: 280px; height: 580px; border: 1px solid #9999; margin: 20px auto 20px auto;">
          <img src="${data.image}" alt="" style="width: 255px; height: 200px; padding-top: 20px; padding-left: 20px;">
          <h5 style="padding-top: 20px; padding-left: 20px;"><b>${data.manufacture} / ${data.model}</b></h5>
          <h4 style="padding-left: 20px;"><b>Rp. ${data.rentPerDay} / hari</b></h4>
          <p style="height: 100px; padding-left: 20px; padding-right: 20px;">${data.description}</p>
  
          <div class="row">
              <div class="col-1">
                  <img class="cm-icon" src="./images/cm-icon/fi_users.png">
              </div>
              <div class="col">
                  <p>${data.capacity} orang</p>
              </div>
          </div>
  
          <div class="row">
              <div class="col-1">
                  <img class="cm-icon" src="./images/cm-icon/fi_settings.png">
              </div>
              <div class="col">
                  <p>${data.transmission}</p>
              </div>
          </div>      
  
          <div class="row">
              <div class="col-1">
                  <img class="cm-icon" src="./images/cm-icon/fi_calendar.png">
              </div>
              <div class="col">
                  <p>${data.year}</p>
              </div>
          </div>
          <a href="#" class="btn btn-success text-white" style="margin-bottom: 5px; width: 87%; margin-left: 18px; background-color: #5cb85f !important;">Pilih Mobil</a>
      </div>
              `;
    body.appendChild(Car);
  });
};
