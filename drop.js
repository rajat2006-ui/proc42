class Drop{
    constructor(x,y){
        this.body=Bodies.circle(x,y,5)
        this.x=x
        this.y=y
        World.add(world,this.body)
    }

    display(){
        push()
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,5,5)
        pop()
    }

    reposition(){
        this.body.position.x=this.x
        this.body.position.y=this.y
        console.log("ye")
    }
}