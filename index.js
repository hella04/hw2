const addButton = document.getElementById('addbutton')
const dataLabel = document.getElementById('data-label')
const nameInput = document.getElementById('nameinput')
const atkInput = document.getElementById('atkinput')
const defInput = document.getElementById('definput')





function addData() {
    console.log('added new data')
    const nameElement = document.createElement("p")
    const textNode = document.createTextNode(nameInput);
    nameElement.appendChild(textNode);
    dataLabel.appendChild(nameElement);
    const atkElement = document.createElement("p")
    const atkNode = document.createTextNode(atkInput.value)
    atkElement.appendChild(atkNode);
    dataLabel.appendChild(atkElement);
    const defElement = document.createElement("p")
    const defNode = document.createTextNode(defInput.value)
    defElement.appendChild(defNode);
    dataLabel.appendChild(defElement);
    const divElement = document.createElement("div")
    divElement.classList.add("value-container")
    divElement.appendChild(nameElement)
    divElement.appendChild(atkElement)
    divElement.appendChild(defElement)

    dataLabel.appendChild(divElement)
    

}
addButton.addEventListener('click', addData)


