let godOfWar = {
    name: "Kratos",
    type: "God",
    location: ["Sparta", "Olympus", "Greece", "Midgard"],
    family: "all deceased, except Atreus"
}

let navTabs = {
    about: "Kratos is a fictional character and the protagonist of Santa Monica Studio's God of War series, based on Greek mythology and, later, Norse mythology.",
    greece: "In Ghost of Sparta, it is revealed that the oracle had foretold that the demise of Olympus would not happen by the hands of the Titans—imprisoned after the Great War—but rather by a mortal, a marked warrior.",
    norse: "Many years after having survived his apparent death from releasing the power of Hope in Greece, Kratos ended up in ancient Scandinavia in the Norse realm of Midgard and fathered a young son named Atreus, who is unaware of his true nature.",
    life: "Kratos has abandoned his double-chained blades as a symbolism of abandoning his old persona; instead, he uses a battle axe called the Leviathan Axe that originally belonged to his second wife and Atreus' mother Laufey (called Faye by Kratos), who recently passed. Her last wish was for her ashes to be spread at the highest peak of the nine realms."
}

// querySelectors


// functions
const uploadInfo = (tabName) => {
    if (tabName === "about") {
        let mainBox = document.querySelector(".mainContainer")
        mainBox.innerHTML = navTabs.about
        let title = document.querySelector(".currentTitle")

        title.innerHTML = "God Of War: Kratos"

    } else if (tabName === "greece") {
        let mainBox = document.querySelector(".mainContainer")
        mainBox.innerHTML = navTabs.greece


        let title = document.querySelector(".currentTitle")
        title.innerHTML = "Greece"


    } else if (tabName === "norse") {
        let mainBox = document.querySelector(".mainContainer")
        mainBox.innerHTML = navTabs.norse


        let title = document.querySelector(".currentTitle")
        title.innerHTML = "Norse"


    } else if (tabName === "life") {
        let mainBox = document.querySelector(".mainContainer")
        mainBox.innerHTML = navTabs.life


        let title = document.querySelector(".currentTitle")
        title.innerHTML = "Life After"

        // Default to home screen God Of War w/ symbol
        //     else {
        //     let mainBox = document.querySelector(".bod")
        //     mainBox.
        // }
    }

}


// const dancebunny = () => {
//     let danceMeme = document.createElement("img")
//     danceMeme.setAttribute("src", "https://media.tenor.com/M3WEBlqfzDsAAAAd/bugs-bunny.gif")
//     let bottomRow = document.querySelector(".bottomContainer")
//     bottomRow.append(danceMeme)
// }

const switchBg = () => {

}

let prev = document.getElementById("prev")
let next = document.getElementById("next")
let bgChange = document.getElementsByClassName("bgChange", "active_bgChange")
let bod = document.getElementsByClassName("bod")

// let backgroundImg = new Array(
//     "https://i.pinimg.com/736x/9d/d1/ed/9dd1edb00399dfaa4b6d10fb955f323e--animation-background-road-runner.jpg",
//     "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_toystory_16x9_8461039f.jpeg",
//     "https://wallpaperaccess.com/full/2641065.gif",
//     "https://media0.giphy.com/media/fwo7bzEVxbYS4eSNVd/200w.gif?cid=6c09b952zb5nv45c7i1psgd2vz2ma2jjxhobcoygeaw0hk1q&rid=200w.gif&ct=g",
//     "https://i.pinimg.com/originals/63/24/3a/63243aacfe563f25e472f9e187723df1.gif"
// )
