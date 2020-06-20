class Ball2{
    constructor(x, y, width, height){
        var options ={
            isStatic : true
        }
        this.ball2 = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.Visibility = 1000
        this.image1 = loadImage("red balloon.png")
        World.add(world, this.ball2)
    }
    display(){
       
        imageMode(CENTER)
        image(this.image1,this.ball2.position.x, this.ball2.position.y, this.width, this.height)   
    
    }
}