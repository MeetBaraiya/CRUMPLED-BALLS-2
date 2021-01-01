class Dastbin {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image = loadImage("img/dbin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

       imageMode(CENTER);
        
        rect(this.image,pos.x,pos.y,this.width,this.height);
       image(this.image,800,380,150,190);
    }
}