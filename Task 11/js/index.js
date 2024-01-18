document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const tbody = document.querySelector("table tbody");

    const BASE_URL = "https://testapi.io/api/rpranaitis/resource/skills/";

    async function getAllSkillsFromDatabase() {
        const response = await fetch(BASE_URL);

        return response.json();
    }

    async function deleteSkillFromDatabase(id) {
        const response = await fetch(BASE_URL + id, {
            method: "DELETE",
        });

        return response;
    }

    getAllSkillsFromDatabase().then((response) => {
        if (response.data && response.data.length) {
            table.classList.remove("d-none");

            response.data.forEach((item) => {
                const tr = document.createElement("tr");
                tbody.prepend(tr);

                const id = document.createElement("th");
                id.setAttribute("scope", "row");
                id.textContent = item.id;
                tr.append(id);

                const name = document.createElement("td");
                name.textContent = item.name;
                tr.append(name);

                const createdAt = document.createElement("td");
                createdAt.textContent = item.createdAt;
                tr.append(createdAt);

                const updatedAt = document.createElement("td");
                updatedAt.textContent = item.updatedAt;
                tr.append(updatedAt);

                const deleteButtonWrapper = document.createElement("td");
                tr.append(deleteButtonWrapper);

                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("type", "submit");
                deleteButton.classList.add("btn", "btn-danger", "w-100");
                deleteButton.textContent = "Delete";

                deleteButton.addEventListener("click", () => {
                    deleteSkillFromDatabase(item.id)
                        .then((response) => {
                            alert("Skill successfully deleted");
                            window.location.href = "index.html";
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                });

                deleteButtonWrapper.append(deleteButton);
            });
        }
    });
});
