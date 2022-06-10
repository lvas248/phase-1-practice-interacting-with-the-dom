let counter = 0;

const counterBox = document.querySelector('#counter')

function count(){
    counter = counter + 1
    counterBox.textContent = counter
}

let myInterval = setInterval(count, 1000)


//Plus Button functionality
document.querySelector("#plus").addEventListener('click', ()=> {
    counter++
    counterBox.textContent = counter
})

//Minus Button Functionality
document.querySelector("#minus").addEventListener('click', ()=> {
    counter--
    counterBox.textContent = counter
})

//Pause Button Functionality ----COME BACK AND FIGURE OUT HOW TO RESTART COUNTER
document.querySelector('#pause').addEventListener('click', (e)=>{
    if(e.target.innerText === "pause"){
        e.target.textContent = "resume"
        clearInterval(myInterval)
        console.log(e)
        document.querySelector('#plus').disabled = true
        document.querySelector('#minus').disabled = true
        document.querySelector('#heart').disabled = true
        document.querySelector('#submit').disabled = true
    }
    else{
        e.target.textContent = "pause"
        document.querySelector('#plus').disabled = false
        document.querySelector('#minus').disabled = false
        document.querySelector('#heart').disabled = false
        document.querySelector('#submit').disabled = false
        myInterval = setInterval(count, 1000)
    }  
})

// LIKE button functionality
document.querySelector("#heart").addEventListener('click', ()=>{
    let likeArray = document.querySelectorAll('li')
    let newLine = `${counter} has been clicked 1 time(s)`
    if(likeArray.length === 0){
        let li = document.createElement('li')
        li.textContent = newLine
        document.querySelector('ul').appendChild(li)
    }
    else{
        let stringArray = []
        for(let li of likeArray){
            stringArray.push(li.textContent)
        }
        for(let string of stringArray){
            if(firstIndexWord(string) === firstIndexWord(newLine)){
                let liIndex = stringArray.indexOf(string)
                let something = (linePlusOne(string))
                document.querySelectorAll('li')[liIndex].textContent = something
                return
            }
        }
        // create and Add new li element if conditions aren't met
        let li = document.createElement('li')
        li.textContent = newLine
        document.querySelector('ul').appendChild(li)
    } 
})

//Comment Functionality
document.querySelector('#comment-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = document.querySelector('#comment-input').value
    document.querySelector("#list").appendChild(p)
    document.querySelector('#comment-form').reset()
})

    

function linePlusOne(string){
    let line = string
    splitLine = line.split(" ")
    let qty = parseInt(splitLine[4])
    qty++
    return `${splitLine[0]} has been liked ${qty} time(s)`
}

function firstIndexWord(string){
    let splitString = string.split(' ')
    let number = parseInt(splitString[0])
    return number
}

function createLikeComment(counter){
    let num = counter
    return `${num} has been liked 1 time(s)`
}
