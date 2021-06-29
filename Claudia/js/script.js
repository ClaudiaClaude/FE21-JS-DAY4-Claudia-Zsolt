// IT PRINTS ONE FIELD!!
// function createElement(){
//     var a = document.getElementsByClassName("input")[0].value;
//     document.getElementById("result").innerHTML += a + " ";
// }

// document.getElementById("btn").addEventListener("click", createElement);

// THE BUTTONS PRINT THEIR OWN INDEX
// var btns = document.getElementsByClassName("butn");
// console.log(btns);

// for (let i =0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){console.log(i);})
// }


/// TARGETS THE INPUT FIELDS AND PRINTS INDEX
// var myInput = document.getElementsByClassName("input");
// console.log(myInput);

// function printText () {

    
// }



// // THIS DOES PRINT OUT IN ONE GO THE INPUT TEXT

// function createElement(){

//     var a = document.getElementsByClassName("input")[0].value;

//     for (let i=0; i< a.length; i++){
//         var a = document.getElementsByClassName("input")[i].value;
//         document.getElementById("result").innerHTML += a + " ";
//     }
    
// }

// document.getElementById("btn").addEventListener("click", createElement);




// This should change color depending on the lenght



function createElement(){

    var a = document.getElementsByClassName("input")[0].value;

    for (let i=0; i< a.length; i++){
        var a = document.getElementsByClassName("input")[i].value;
        document.getElementById("result").innerHTML += a + " ";

        x= a[i].value.length;
        if (x > 5) {
            var x = document.getElementsByClassName("input")[i];
            x.style.color = "green";
        }
        else {
            a[i].color = "blue";
        }
    }
    
}

document.getElementById("btn").addEventListener("click", createElement);