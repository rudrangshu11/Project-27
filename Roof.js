class Roof {
    constructor(){
        var options_ground = {
            isStatic : true,
            }
        this.body = Bodies.rectangle(400,200,580,80,options_ground);
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        fill('Coral');
        rect(400,200,580,80);
    }
}