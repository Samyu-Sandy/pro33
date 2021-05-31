class snow {
    constructor(x, y) {
        var options = {
            restitution: 0.04,
            friction: 0,
            gravity:25
            
        }
        this.x=x;
		this.y=y;
        this.r = 50;
        this.image = loadImage("snow4.webp")
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world,this.body)
    }
    display() {
        var pos=this.body.position
        var angle=this.body.angle
        
       
         push();
         
         translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        noStroke();
      
        
       // ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }

};