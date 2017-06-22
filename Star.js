function Star(x,y)
{
  this.x = x;
  this.y = y;
  this.health = 35;
  this.radius = 35;

  this.show = function()
  {
    fill(105,100,50);
    this.radius = this.health;
    ellipse(this.x,this.y,this.radius*2,this.radius*2);
  }

  this.damage = function()
  {
    this.health -= 5;
  }
}
