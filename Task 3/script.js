/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersButton = document.getElementById('btn');
const output = document.getElementById('output');

showUsersButton.addEventListener('click', async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    if (data) {
        output.innerHTML = '';
        
        const ol = document.createElement('ol');
        output.append(ol);
        
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `login: ${user.login}, avatar_url: ${user.avatar_url}`;
            ol.append(li);
        });
    }
});