canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Car1's Characteristics
width1 = 120;
height1 = 70;
x1 = 10;
y1 = 10;
//Car2's Characteristics
width2 = 120;
height2 = 70;
x2 = 10;
y2 = 100;


function add(){
    imgTag = new Image();
    imgTag.onload = uploadBCG;
    imgTag.src = "racing.jpg";

    car1 = new Image();
    car1.onload = uploadCar1;
    car1.src="car.png";

    car2 = new Image();
    car2.onload = uploadCar2;
    car2.src="sports-car.png";
}

function uploadBCG(){
    ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1, x1, y1, width1, height1);
}
function uploadCar2(){
    ctx.drawImage(car2, x2, y2, width2, height2);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    pressedKey = e.keyCode;
    console.log(pressedKey);
    if(pressedKey == "38"){
        car1_up();
        console.log("Going UP");
    }

    if(pressedKey == "40"){
        car1_down();
        console.log("Going DOWN");
    }

    if(pressedKey == "37"){
        car1_left();
        console.log("Going LEFT");
    }

    if(pressedKey == "39"){
        car1_right();
        console.log("Going RIGHT");
    }

    if(pressedKey == "87"){
        car2_up();
        console.log("Going 2 UP: W");
    }

    if(pressedKey == "83"){
        car2_down();
        console.log("Going 2 DOWN: S");
    }

    if(pressedKey == "65"){
        car2_left();
        console.log("Going 2 LEFT: A");
    }

    if(pressedKey == "68"){
        car2_right();
        console.log("Going 2 RIGHT: D");
    }

    if(x1>650){
        document.getElementById("game_stat").innerHTML = "Car 1 Wins!";
    } else if(x2>650){
        document.getElementById("game_stat").innerHTML = "Car 2 Wins!";
    } 
}


function car1_up(){
    if(y1 >= 0){
        y1-=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car2_up(){
    if(y2 >= 0){
        y2-=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car1_down(){
    if(y1 <= 500){
        y1+=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car2_down(){
    if(y2 <= 500){
        y2+=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car1_left(){
    if(x1>=0){
        x1-=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car1_right(){
    if(x1<= 650){
        x1+=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car2_left(){
    if(x2>=0){
        x2-=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}

function car2_right(){
    if(x2<= 650){
        x2+=10;
        uploadBCG()
        uploadCar1()
        uploadCar2()
    }
}