var spaceship;
var star = [];
var bullet = [];

function setup(){
   createCanvas(400,500);
   spaceship = new spaceShip();
   for(var i = 0;i<4;i++)
   {
      star.push(new Star(105*i+40,100));
   }
  //bullet = new Bullet(202,spaceship.y);

}

function draw()
{
   background(255,202,201);
   spaceship.update();
   spaceship.show();
   for(var i = 0;i<star.length;i++)
   {
      star[i].show();
   }

   for(var i =0;i<bullet.length;i++)
   {

   }

  for(var i =0;i<bullet.length;i++)
   {
     bullet[i].show();
      bullet[i].update();
     for(var j=0;j<star.length;j++)
      {
        /*if(bullet[i].collision(star[j].x,star[j].y,star[j].radius))
        {
          bullet.splice(i,1);
        }*/
        if(bullet[i].collision(star[j].x,star[j].y,star[j].radius))
        {
          bullet[i].evaporate();
          star[j].damage();
        }
     }
  }

  for(var i = bullet.length-1;i>=0;i--)
  {
    if(bullet[i].toDelete==true)
    {
      bullet.splice(i,1);
    }
  }

  for(var i = star.length-1;i>=0;i--)
  {
     if(star[i].health<=0)
     {
       star.splice(i,1);
     }
  }
if(star.length==0)
{
  textSize(30);
  text("You won the game man",100,100,200,200);
}
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    spaceship.dir(1);
  }
  if(keyCode === LEFT_ARROW)
  {
    spaceship.dir(-1);
  }
  if(keyCode === 32)
  {
    bullet.push(new Bullet(spaceship.x,spaceship.y-10));
  }
}
