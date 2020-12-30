class Food{

constructor(x,y){
    this.image = loadImage("dogfood.png");
this.x = x;
this.y = y;
}
display(){
imageMode(CENTER);
    image(this.image,this.x,this.y,50,50);
}


}