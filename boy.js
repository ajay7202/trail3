class Boy{
    constructor(x,y){
      this.body=Bodies.rectangle(x,y,150,150);
        this.width=160;
        this.height=160;
        this.image = loadImage("images/Pluckingmangoes/boy.png");
      }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}