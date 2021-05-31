class SlingShot {
    constructor(bodyA,pointB){
      var option = {
          stiffness : 0.09,
          length : 50,
          bodyA : bodyA,
          pointB : pointB
      }
      this.pointB=pointB
      this.sling = Matter.Constraint.create(option)
      World.add(world,this.sling)
    }
    display(){
        if (this.sling.bodyA){ 

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
      
        strokeWeight(4);
    stroke("blue")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }
}
    fly(){
     this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
            }
}