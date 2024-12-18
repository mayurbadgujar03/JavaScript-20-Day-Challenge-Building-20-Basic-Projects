


const search_btn = document.getElementById('search-btn');
const username = document.getElementById('username');

search_btn.addEventListener('click', () => getUser(username.value));

async function getUser(name) {
    document.getElementById("loading").style.display = "block";
    document.getElementById("profile").style.display = "none";

    try {
        const response = await fetch(`https://api.github.com/users/${name}`);

        if (response.status == 404) {
            document.getElementById("loading").style.display = "none";
            document.getElementById("error-message").style.display = "block";
            
        } else if (response.ok) {
            const data = await response.json();
            console.log("Data received:", data);
            console.log("new data", data.name, data.bio, data.followers, data.following, "repo" + data.public_repos);

            const publicRepos = data.public_repos !== undefined ? data.public_repos : 'No repositories';
            console.log(publicRepos);
            document.getElementById("loading").style.display = "none";
            document.getElementById("profile").style.display = "block";
            document.getElementById("error-message").style.display = "none";

            document.getElementById('name').innerText = data.name || 'No name available';
            document.getElementById('bio').innerText = data.bio || 'No bio available';
            document.getElementById('repos-count').textContent = publicRepos;
            document.getElementById('followers-count').innerText = data.followers || 0;
            document.getElementById('following-count').innerText = data.following || 0;
            document.getElementById('profile-pic').src = data.avatar_url;

        } else {
            throw new Error("Something went wrong with the API request");
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("loading").style.display = "none";
        document.getElementById("error-message").innerHTML = "An error occurred. Please try again later.";
        document.getElementById("error-message").style.display = "block";
    }
}