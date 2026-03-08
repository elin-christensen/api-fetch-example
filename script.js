    document.getElementById("Get text").addEventListener("click",getText);
    document.getElementById("Get json").addEventListener("click",getJSON);
    document.getElementById("Get api").addEventListener("click",getAPI);

   
   async function getText() {
    const res = await fetch("mytext.txt");
    const data = await res.text();
    document.getElementById("output").innerText = data;
}


    async function getJSON(){
        const res = await fetch("myjson.json");
        const data = await res.json();
        let output = `<h2 class="section-title">Philosophical Questions</h2>`;
           data.forEach(function(question) {
               output += `
                  <article class="card">
            <h3 class="card-title">${question.branch}</h3>
            <p class="card-body"><strong>Question:</strong> ${question.question}</p>
            <p class="card-body"><strong>Focus:</strong> ${question.focus}</p>
        </article>
                `;
           })
        document.getElementById("output").innerHTML = output;
            }
        


       async function getAPI() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        let output = `<h2 class="section-title">Posts</h2>`;

     data.forEach(function(post) {
        output += `
        <article class="card">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-body">${post.body}</p>
        </article>
        `;
    });
        document.getElementById("output").innerHTML = output;
       }

       