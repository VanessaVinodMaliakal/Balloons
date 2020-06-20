class Ball{
    constructor(x, y, width, height){
        var options ={
            isStatic : true
        }
        this.ball = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.Visibility = 1000
        this.image1 = loadImage("red balloon.png")
        World.add(world, this.ball)
    }
    display(){
       
        imageMode(CENTER)
        image(this.image1,this.ball.position.x, this.ball.position.y, this.width, this.height)   
    
    }
}
