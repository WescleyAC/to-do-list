let vInput = document.getElementById("entrada")
let vButton = document.getElementById("btn")
let vAdd = document.getElementById("add")
let vAddlist = document.getElementById("listorder")
let vList = document.getElementById("list")



let vArrey = [] // =>>> 2º
torecoverList()   // essa função é chamada quando o navegador é atualizado. 


function processArray() {

    let newLi = ""
    // o forEach pega as tarefas e coloca dentro da variável newLi por meio
    // da variável vCurrent. 
    vArrey.forEach((vCurrent, index) => { // =>>> 3º 

        newLi = newLi + `<li  class=" newLi  ${vCurrent.status == true ? 'complete' : ''}">
<button class="btn-confirm"  onclick="completeItem(${index})" > <i class="fa-solid fa-check-double"></i> </i></button>

<p id="add" class=" paragraf  ${vCurrent.status == true ? 'complete' : ''}">${vCurrent.assignment}</p>

<button class="btn-trash" onclick="deleteIten(${index})"> <i class="fa-solid fa-trash"></i> </button>
</li>`


    })



    vAddlist.innerHTML = newLi  // adiciona newLi a <ul></ul>. 

    localStorage.setItem("list", JSON.stringify(vArrey)) // aramazena as informações após inicialização da página


}





function deleteIten(index) {

    vArrey.splice(index, 1)  // spaice deleta 1 item na posição index

    processArray()

}

function addArray() {

    if (vInput.value) {

        vArrey.push(
            {
                assignment: vInput.value,
                status: false,
            }) // =>>> 1º


    } else {

        alert("Entre com os dados!")
    }


    vInput.value = ""  // quando adiciono ao input essa linha limpa a aba. 
    processArray() // a função é chamada toda vez que adiciono uma nova tarefa.


}


function completeItem(index) {

    vArrey[index].status = !vArrey[index].status

    processArray()


}

function torecoverList() {

    let myList = localStorage.getItem("list")


    if (myList) {

        vArrey = JSON.parse(myList)
        processArray()

    }


}

function keyEnter(ent) {

    if (ent.key == "Enter") {

        addArray()
    }

}




vButton.addEventListener("click", addArray)
document.addEventListener("keypress", keyEnter)

