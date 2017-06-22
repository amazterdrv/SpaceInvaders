function Bullet(x,y)
{
   this.x = x;
   this.y = y;
   this.radius = 5;
   this.speedy = 3;
   this.toDelete = false;

   this.update = function()
   {
     this.y = this.y - this.speedy;
   }

   this.show = function()
   {
     fill(255,100,100);
     ellipse(this.x,this.y,this.radius*2,this.radius*2);
   }

   this.collision = function(x,y,radius){
    if(radius+this.radius >= dist(x,y,this.x,this.y))
    {
      return true;
    }
    else {
      return false;
    }
   }

   this.evaporate = function() {
    this.toDelete = true;
}

}
