document.querySelector(".control-buttons span").onclick = function (){
    let yourname = prompt ("what is your name?")

    if (yourname == null || yourname == "") {
        document.querySelector(".name span ").innerHTML = "unknown"
    } else {
        document.querySelector(".name span ").innerHTML = yourname
    }
document.querySelector(".control-buttons").remove()
}

let duration = 1000

let blockscontainer = document.querySelector(".Memory-game-blocks")
let blocks = Array.from(blockscontainer.children)
let orderrange = Array.from(Array(blocks.length).keys())
shuffle(orderrange)

function fun(block,index) {
    block.style.order = orderrange[index]

    block.addEventListener("click" , function () {
        flipblock(block)
    })

}
blocks.forEach(fun)



blocks

function flipblock(selectedblock) {
    selectedblock.classList.add("is-flipped")

    // filter evvery two flipped
    Allflippedblocks = blocks.filter(f => f.classList.contains("is-flipped"))
    // stop clicking when 2 is flipped
    if (Allflippedblocks.length === 2) {
        console.log("two flipped")
        stopclicking()
    }
    // check match

    checkmatch(Allflippedblocks[0],Allflippedblocks[1])
}


function checkmatch(firstblock,secondblock) {
    if (firstblock.dataset.family ===secondblock.dataset.family ) {
        console.log("match")
        firstblock.classList.remove("is-flipped")
        secondblock.classList.remove("is-flipped")
        firstblock.classList.add("has-match")
        secondblock.classList.add("has-match")

    } else {
        document.querySelector(".tries span").innerHTML = parseInt(document.querySelector(".tries span").innerHTML) + 1
        console.log("notmatch")
        setTimeout(() => {
            firstblock.classList.remove("is-flipped")
        secondblock.classList.remove("is-flipped")
        }, duration);
    }
}



function stopclicking () {
    blockscontainer.classList.add("stopclicking")
    setTimeout(() => {
        blockscontainer.classList.remove("stopclicking")
    }, duration);
}



function shuffle (array) {
    let current = array.length,
    temp,
    random;
    while (current > 0 ) {
        random= Math.floor(Math.random()*current)
        current--; 
            // [1] save current element in stash
    temp = array[current]
// [2] current element = random element
    array[current]=array[random]
console.log(random)
// [3]random element= current element in stash
array[random] = temp
    }
    return array
}