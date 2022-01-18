console.log("=== Aufgabe 1 js-einführung_2_inner HTML_Lev1_2 ===")


// document.getElementById("info").innerHTML = "<h1>Hello World</h1>";

// document.getElementById("info").innerHTML += "<h2>How are you?</h2>";

// document.getElementById("container").innerHTML = "<p>start of the element</p>";

// document.write("end of the element");



console.log("=== Aufgabe 2 js-einführung_2_inner HTML_Lev1_3 ===")


let gallery = document.getElementById("gallery");

gallery.innerHTML = '<figure> <img src="https://images.unsplash.com/photo-1642452964367-58cb60731412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt=""> <figcaption>Fig. 1</figcaption> </figure> <figure> <img src="https://images.unsplash.com/photo-1642452964367-58cb60731412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt=""> <figcaption>Fig. 2</figcaption> </figure> <figure> <img src="https://images.unsplash.com/photo-1642452964367-58cb60731412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt=""> <figcaption>Fig. 3</figcaption> </figure>';

gallery.style.width = "30vw";



console.log("=== Aufgabe 3 js-einführung_2_intro functions_Lev1_1 ===")


// function intro() {

//     let a = 1 + 3
//     console.log("Hello World")
//     console.log("1 + 3 = " + a)
// }

// intro()



console.log("=== Aufgabe 4 js-einführung_2_intro functions_Lev1_2 ===")


// function intro2(paramName) {

//     let varName = "SuperCoder";
//     console.log("Hi, " + varName + ". Mein Name ist " + paramName + " .");

// }

// intro2("Mercedes")



console.log("=== Aufgabe 5 js-einführung_2_intro functions_Lev1_3 ===")


// function intro3(name, stadt, alter) {

//     console.log("Hallo, mein Name ist " + name + ". " + "Ich bin " + alter + " Jahre alt. " + "Ich komme aus " + stadt + ".");
// }

// intro3("Mercedes", "Hannover", "37")



console.log("=== Aufgabe 6 js-einführung_2_intro functions_Lev1_5 ===")

function math(x, y) {

    console.log(x * y)
    console.log(x / y)

}

math(10, 2)
math(30, 20)
math(100, 100)
math(5, 0)
math(45, 173)
math(1, 1000)

