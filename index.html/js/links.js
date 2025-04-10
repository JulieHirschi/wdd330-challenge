const baseURL = "https://juliehirschi.github.io/wdd230/"
const linkURL = "https://juliehirschi.github.io/wdd230/data/links.json"

async function getLinks() {
    const links = await fetch(linkURL);
    const data = await links.json();
    displayLinks(data.lessons);
}

sessions = document.getElementById("session");

function displayLinks(weeks) {
    myNav = document.createElement("div");
    myNav.id = "myNav";

    weeks.forEach(week => {
        const list = document.createElement("li");
        // if (week.links.length === 1) {
        //     const activity = week.links[0];
        //     list.innerHTML = `<a href="${activity.url}">Week ${week.lesson}: ${activity.title}</a>`;
        // } else if (week.links.length > 1) {
        const weekMultiple = document.createElement("span");
        weekMultiple.textContent = `Week ${week.lesson}: `;
        list.appendChild(weekMultiple);
        weekMultiple.style.color = "#c75911";

        week.links.forEach((activity, index) => {
            const anchor = document.createElement("a");
            anchor.href = `${activity.url}`;
            anchor.textContent = activity.title;
            list.appendChild(anchor);

            if (index < week.links.length - 1) {
                const bar = document.createElement("span");
                bar.textContent = "|";
                bar.style.color = "#c75911";
                list.appendChild(bar);
            }
        });
        list.classList.add("multiple");
        // }
        sessions.appendChild(list);
    });
}
getLinks();