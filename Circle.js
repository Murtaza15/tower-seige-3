class Circle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }

   
        

    display(){
        var circle1pos=this.body.position;
        push()
        translate(circle1pos.x,circle1pos.y);
        rectMode(CENTER)
        strokeWeight(2);
        fill("brown")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}