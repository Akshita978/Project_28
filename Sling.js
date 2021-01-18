class Sling {
    constructor(bodyA,pointB){

        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
            }
            this.pointB = pointB;
            this.sling = Constraint.create(options);
            World.add(world,this.sling)  
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    } 
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA=null;
    }
}
