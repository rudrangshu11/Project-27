class Bob{
    constructor(x, y){
        var options_paper = {
            isStatic: false,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 30,options_paper);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("DarkCyan")
        ellipse( pos.x, pos.y, 60, 60);
    }
}