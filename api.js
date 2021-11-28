function search(username) {
    fetch("https://api.github.com/users/" + username)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("avatar").src = data.avatar_url;
        if(data.name != null) {
            document.getElementById("Name").innerHTML = data.name;
        } else {
            document.getElementById("Name").innerHTML = data.login;
        }
        if(data.bio !=null) {
            document.getElementById("bio").innerHTML = data.bio;
        } else {
            document.getElementById("bio").innerHTML = "This profile has no bio";
        }
        document.getElementById("repos").innerHTML = data.public_repos;
        document.getElementById("followers").innerHTML = data.followers;
        document.getElementById("following").innerHTML = data.following;
        document.getElementById("login").innerHTML = "@"+data.login;

        if(data.location != null)
        document.getElementById("location").innerHTML = "Location: " + data.location;
        else
        document.getElementById("location").innerHTML = "Location: Not Available";

        if(data.twitter != null)
        document.getElementById("twitter").innerHTML = "Twitter: " +data.twitter_username;
        else
        document.getElementById("twitter").innerHTML = "Twitter: Not Available";

        if(data.blog != null)
        document.getElementById("blog").innerHTML = "Blog: <a href='"+data.blog+"' target='blank_'>" +data.blog + "</a>";
        else
        document.getElementById("blog").innerHTML = "Blog: Not Available";

        if(data.company != null)
        document.getElementById("company").innerHTML = "Company: " +data.company;
        else
        document.getElementById("company").innerHTML = "Company: Not Available";
    })
}

search("octocat");

$("#searchbtn").click(function() {
    var user = document.getElementById("searching").value;

    search(user);
})
