function spaceShip()
{
   this.x = width/2;
   this.y = height-20;
   this.speed = 4;

   this.update = function()
   {
      this.x = this.x + this.speed;
   }

   this.show = function()
   {
     fill(20,20,50);
     rect(this.x,this.y,40,20);
     ellipse(this.x,this.y,5,5)
   }

   this.dir = function(a)
   {
     if(a==1&&this.speed<0) this.speed = -this.speed;
     else if(a==-1&&this.speed>0) this.speed = -this.speed;
   }
}
