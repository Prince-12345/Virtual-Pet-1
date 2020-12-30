var foodS;
var stock = 20;
function preload(){

  bgImg = loadImage("Ground.jpg");
  dogImg = loadImage("dogImg.png");
  dogImg2 = loadImage("dogImg1.png");
  
}







function setup() {

  createCanvas(1000, 500);

  dog = createSprite(800,340,50,50);
  dog.addImage(dogImg);
  dog.scale=0.2;

  database=firebase.database();

  
  dogFood1=new Food(100,100);
  dogFood2 = new Food(150,100);
  dogFood3 = new Food(200,100); 
  dogFood4 = new Food(250,100);
  dogFood5 = new Food(300,100);
  dogFood6 = new Food(100,150);
  dogFood7 = new Food(150,150);
  dogFood8 = new Food(200,150);
  dogFood9 = new Food(250,150);
  dogFood10 = new Food(300,150);
  
}






function draw() {  

  background(bgImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock,ShowError);
  //console.log(foodStock);

 
  if(keyWentDown(UP_ARROW)){
    
    writeStock(foodS);
   
   dog.addImage(dogImg2);

  }

  drawSprites();
  textSize(45);
  strokeWeight(3);
  fill("red")
  textFont("Chiller");
  stroke("yellow");
text("Remaining Food Stock = "+ stock+".",290,100);
text("Press the up Arrow key to feed your Pet Dog.",190,40);
textSize(25);
strokeWeight(5);
fill("YELLOW")
textFont("TIMES NEW ");
stroke("RED");
text("Note : This is version 1.0 of Virtual Pet ! ",10,200);

}




function readStock(data){

  foodS = data.val();
  console.log(foodS);

}

function writeStock(a){
if(a<=0){
 a = 0;
 stock = 0;
}else{
  a = a - 1;
  stock = stock-1;
}
database.ref('/').update({
  Food:a
})

}


function ShowError(){

console.warn("Error is There in fetching Data")
}



















/* dogFood1.display();
  dogFood2.display();
  dogFood3.display();
  dogFood4.display();
  dogFood5.display();
  dogFood6.display();
  dogFood7.display();
  dogFood8.display();
  dogFood9.display();
  dogFood10.display();
*/


/*dogFood1.visible = false;
dogFood2.visible = false;
dogFood3.visible = false;
dogFood4.visible = false;
dogFood5.visible = false;
dogFood6.visible = false;
dogFood7.visible = false;
dogFood8.visible = false;
dogFood9.visible = false;
dogFood10.visible = false;
*/