class stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.stone = loadImage('images/stone.png');
        this.pointB = pointB;
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }
	//attach(body)
	//{
        //this.stone.bodyA = body;
    //}
    
	fly()
	{
        this.stone.bodyA = null;
    }

	display()
	{
      
			var stonePos=this.body.position;	
			push()
			translate(stonePos.x, stonePos.y);
			rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
	 }
}  