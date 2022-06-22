///function for CountdownTimer timer version1 week 1-2
function start(){
    console.log("start() finction started");
    // created var currTime and set equal to 10
    var currTime = 10; 
    console.log(currTime);
    document.getElementById("CountdownStatus").innerHTML = currTime;
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8 
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function() {
        currTime = currTime - 1;
        //what is done after the delay 
        document.getElementById("CountdownStatus").innerHTML = "BLASTOFF!!";
        console.log(currTime);
    }, 10000)

}