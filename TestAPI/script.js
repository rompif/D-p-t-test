btn.onclick = () => {
    fetch("https://api.github.com/users/" +champ.value)
    .then(reponse => reponse.json())
    .then (data => {
        output.texContent = "";
        output.innerHTML = "<p>Compte de "+data.name+"</p>";
        const img = document.createElement("img");
        img.scr = data.avatar_url;
        output.innerHTML = "<img src="+data.avatar_url+">"; 
        output.appendChild(img);

    })
} 