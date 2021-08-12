class particles
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.4,
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
		var particlespos=this.body.position;	
		var angle=this.body.angle;		
	

		push()
		translate(particlespos.x, particlespos.y);
		rotate(angle)
		ellipseMode (RADIUS)
		fill(this.color)
		ellipse(0,0,this.r, this.r);
		pop()
		
		
        
			
			
			
			
	}

}