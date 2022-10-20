const hello = document.getElementById('hello')

const sel = document.getElementById('select')
let count = 1


window.electronAPI.onSayHello((_event, value) => {
    const myArray = value;
    console.log(value)
    myArray.forEach((obj) => {
        let option = document.createElement("option")
        option.text = obj
        /*option.value = count*/
        sel.add(option);

        count++
        
    })
    /*const oldValue = Number(counter.innerText)
    const newValue = oldValue + value
    counter.innerText = newValue*/
    /* hello.innerHTML = value */

})

/* const arraySongs = []
arraySongs.push(
        {

        }
)

myArray.forEach((obj) => {
    console.log(obj)
})

const sel = document.getElementById('select')
let count = 1

myArray.forEach((obj) => {
    let option = document.createElement("option")
    option.value = count
    sel.add(option);

    count++
})

sel.addEventListener("change", (event) => {
    document.getElementById("selectedOption").innerHTML = event.target.value;
});

*/