/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.getElementById('output');

fetch('./cars.json')
    .then((response) => response.json())
    .then((cars) => {
        cars.forEach(car => {
            const div = document.createElement('div');
            div.classList.add('brand-container');
            output.append(div);

            const p = document.createElement('p');
            p.textContent = car.brand;
            div.append(p);

            const ul = document.createElement('ul');
            div.append(ul);

            car.models.forEach(model => {
                const li = document.createElement('li');
                li.textContent = model;
                ul.append(li);
            });
        });
    });