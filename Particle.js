class Particle {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.01,
            density: 10
        };
        
        this.body = Bodies.circle(x, y, 8, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.x = x;
        this.y = y;
        this.radius = 8;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }

};