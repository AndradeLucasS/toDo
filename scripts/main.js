let Todo = {
    input: null,
    newEl: null,
    btn: document.querySelector(".button"),
    list: document.querySelector(".list"),

    startApp(){
        this.btn.addEventListener("click", this.btnEvent);
        console.log("Your application started successfully...");
    },

    btnEvent(){
        console.log("Foi?");
        this.newEl = document.createElement("input");
        this.newEl.className = "list-item";
        Todo.list.appendChild(this.newEl);
    }
}

Todo.startApp();