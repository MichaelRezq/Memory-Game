// let button = document.querySelector(".button")

// button.addEventListener("click",function(){
//     let yourname = prompt("your name")
//     if (yourname.length >0) {
//         // console.log(yourname)
//         document.querySelector(".head span").appendChild(document.createTextNode(yourname))
//         // button.style.cssText="display: none"
//         button.remove()
//     } else{
//         document.querySelector(".head span").innerHTML="unknown"
//         // button.style.cssText="display: none"
//         button.remove()
//     }
// })

// let img = document.querySelectorAll(".photo")
// // console.log(img)
// img.forEach(element => {
//     element.onclick = function(){
//         element.style.cssText = "transform: rotateY(180deg)" 
//     }
// });


// let duration =1000

// let grid = document.querySelector(".grid")

// let photos = [...Array.from(grid.children)]
// // console.log(photos)

// let photoskeys =[...Array.from(photos).keys()] 

// shuffle(photoskeys)

// // flip block function


// function addorder(ele,index) {
//     ele.style.order=photoskeys[index]
//     // add "is-flibed" class to ele on click
//     ele.addEventListener("click",function(){
//         flibblock(ele)
//     })
// }
// photos.forEach(addorder)



// function flibblock(selectedblock) {
//     //add class is-flibed
//     selectedblock.classList.add("is-flibed")
//     //collect all flipped cards
//     let allflippedphotos = photos.filter(fileppedphoto=>fileppedphoto.classList.contains("is-flibed"))

//     //if there is two selected photos
//     if (allflippedphotos.length===2) {
//         console.log("two selected photos")
//         // stop clicking function
//         stopclicking()
//         // check matched photos
//         checkmatchedphotos(allflippedphotos[0],allflippedphotos[1])
//     }
// }

// // check matched photos function

// function checkmatchedphotos(firstphoto,secondphoto) {
//     let triesElement = document.querySelector(".tries")
//     if (firstphoto.dataset.family===secondphoto.dataset.family) {

//         console.log("same")
//         firstphoto.classList.remove("is-flibed")
//         secondphoto.classList.remove("is-flibed")


//         firstphoto.classList.remove("has-match")
//         secondphoto.classList.remove("has-match")
//     } else {
//         triesElement.innerHTML=parseInt(triesElement.innerHTML)+1
//         firstphoto.classList.remove("is-flibed")
//         secondphoto.classList.remove("is-flibed")

//     }
// }

// // stop clicking function
// function stopclicking() {
//     //add class no-clicking
//     grid.classList.add("no-clicking")
    
//     setTimeout(() => {
//     grid.classList.remove("no-clicking")
//         console.log("cli")
//     }, 2000);
// }

// //

// // shuffle function
// function shuffle(array) {
// let 
// current = array.length,
// random,
// temp
// while (current > 0) {
//     // get random number
//     random =Math.floor((Math.random() * current));
//     console.log(`curent ${current}`)
// // decrease length by one
//     current--;
//     console.log(`--curent ${current}`)

//     // [1] save current element in stash
//     temp = array[current]
// // [2] current element = random element
//     array[current]=array[random]
// console.log(random)
// // [3]random element= current element in stash
// array[random] = temp
// console.log(temp)
// } 
// return array
// }

// // //current array [1,2,3,4,5,6,7,8,9,0]
// // //new array [1,2,3,4,5,6,7,8,9,0]
// // /*
// // [1] save current element in stash
// // [2] current element = random element
// // [3]random element=  element in stash
// // */










// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Memory Game</title>
//     <link rel="stylesheet" href="./css/learnjs.css">
// </head>
// <body>
//     <div class="container">
//         <div class="button">
//             <span> start Game</span>
//         </div>
//         <div class="head">
//             <p>Name: <span class="name"></span></p>
//             <p>Wrong Trials: <span class="tries">0</span></p>
//         </div>
//         <div class="grid">
//             <div class="photo" data-family="michael" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/miko.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="michael" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/miko.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="nora" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/nora.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="nora" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/nora.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="mary" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/mary.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="mary" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/mary.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="tota" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/tota.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="tota" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/tota.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="carlos" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/carlos.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="carlos" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/carlos.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="nana" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/nana.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="nana" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/nana.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="tena" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/tena.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="tena" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/tena.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="ereny" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/ereny.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="ereny" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/ereny.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="mama" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/mama.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="mama" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/mama.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="marim" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/marim.jpg" alt="">
//                 </div>
//             </div>
//             <div class="photo" data-family="marim" >
//                 <div class="face front">
//                     <img src="./photos/download.png" alt="">
//                 </div>
//                 <div class="face back">
//                     <img src="./photos/marim.jpg" alt="">
//                 </div>
//             </div>
//         </div>
//     </div>
//     <script src="./main.js"></script>
// </body>
// </html>