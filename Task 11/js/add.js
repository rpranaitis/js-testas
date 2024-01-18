document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputSkillName = document.getElementById("inputSkillName");
    const buttonAddSkill = document.getElementById("buttonAddSkill");

    const BASE_URL = "https://testapi.io/api/rpranaitis/resource/skills";

    async function addSkillToDatabase(name) {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
            }),
        });

        return response.json();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addSkillToDatabase(inputSkillName.value)
            .then((response) => {
                alert("Skill successfully added");
                window.location.href = "index.html";
            })
            .catch((error) => {
                alert(error.message);
            });
    });
});
