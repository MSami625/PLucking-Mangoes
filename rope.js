class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length:10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(bodyA){
		this.sling.bodyA=bodyA;
	}

    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            stroke(230);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    
}
}