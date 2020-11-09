class Mangoes{
    constructor(x,y){
      this.body=Bodies.rectangle(x,y,150,150);
        this.width=50;
        this.height=50;
        this.image = loadImage("images/Pluckingmangoes/mango.png");
      }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}