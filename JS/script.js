document.querySelector("#btn-add").onclick = () => {
  if (document.querySelector("#task-new").value.length == 0) {
    alert("!!!TEXT BAR VAZIA!!! DIGITE A TAREFA...");
  } 
  
  else {
    document.querySelector("#task-list").innerHTML += `
        <div class="task">
            <span class="span" >
                ${document.querySelector("#task-new").value}
            </span>
            <div class="btn">
                <button class="btn-done">✔</button>
                <button class="btn-remove">X</button>
            </div>
        </div>`;

    document.querySelector("#task-new").value = "";

    let done = document.querySelectorAll(".btn-done");

    for (let i = 0; i < done.length; i++) {
      done[i].onclick = function () {
        this.parentNode.parentNode.classList.toggle("task-done");
        this.parentNode.previousElementSibling.classList.toggle("span-done");
      };
    }
    
    let btnRemove = document.querySelectorAll(".btn-remove");
    for (let i2 = 0; i2 < btnRemove.length; i2++) {
      btnRemove[i2].onclick = function () {
        this.parentNode.parentNode.remove();
      };
    }
  }
};
