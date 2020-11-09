class Tree{
    constructor(x,y){
      this.body=Bodies.rectangle(x,y,150,150);
        this.width=400;
        this.height=400;
        this.image = loadImage("images/Pluckingmangoes/tree.png");
      }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}