class trash {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2 
         }
        this.body = Bodies.circle(x,y,35,options);
        this.radius = 35;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }    

    display(){
        var pos = this.body.position;
        fill("blue")
        imageMode(RADIUS);
        image(this.image,pos.x, pos.y, 70, 70);
    }


}