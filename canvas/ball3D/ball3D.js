class canvas3D{
  constructor(props) {
    this.props3D = {
      fallLength: props && props.fallLength || 500,
      originX: props && props.originX || 0,
      originY: props && props.originY || 0,
    }
  }
  
  get2DXY(x, y, z){
    let scale = -this.props3D.fallLength / (this.props3D.fallLength + z),
      X = scale * x + this.props3D.originX,
      Y = scale * y + this.props3D.originY;
    return {X: X, Y: Y};
  }

  rotateX(x, y, z, angle){
    let cos = Math.cos(angle),
      sin = Math.sin(angle);

    let y1 = cos * y - sin * z,
      z1 = cos * z + sin * y;

    return {x:x, y:y1, z:z1};
  }

  rotateY(x, y, z, angle){
    let cos = Math.cos(angle),
      sin = Math.sin(angle);

    let x1 = cos * x - sin * z,
      z1 = cos * z + sin * x;

    return {x:x1, y:y, z:z1};
  }

  rotateZ(x, y, z, angle){
    let cos = Math.cos(angle),
      sin = Math.sin(angle);

    let x1 = cos * x - sin * y,
      y1 = cos * y + sin * x;

    return {x:x1, y:y1, z:z};
  }

  createBallCoordinate(total, radius){
    let coordinate = [];

    for(let i = 0; i < total; i++){
      let horn1 = Math.acos((2 * (1 + i) - 1) / total - 1),
        horn2 = horn1 * Math.sqrt(total * Math.PI),
        x = radius * Math.sin(horn1) * Math.cos(horn2),
        y = radius * Math.sin(horn1) * Math.sin(horn2),
        z = radius * Math.cos(horn1);

      coordinate.push({x: x, y: y, z: z});
    }

    return coordinate;
  }
}

class Ball3D extends canvas3D{
  constructor(canvas, props) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let originX = props && props.originX || canvas.width / 2,
      originY = props && props.originY || canvas.height / 2,
      props3D = {originX: originX, originY: originY};

    super(props3D);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.props = {
      radius: props && props.radius || this.canvas.width < this.canvas.height ? this.canvas.width / 4 : this.canvas.height / 4,
      r: 1.5,
      total: props && props.radius || 500,
      fallLength: props && props.fallLength || 500,
      originX: originX, 
      originY: originY,
      angleX: 0,
      angleY: 0,
      angleVal: props && props.angleVal || 0.0001
    }

    this.init();
  }

  init(){
    this.drawBG();
    this.initBall();
    this.eachDrawPoint();
    this.mouseMove();
    this.animate();
  }

  initBall(){
    this.ballCoordinate = super.createBallCoordinate(this.props.total, this.props.radius);
  }

  eachDrawPoint(){
    this.ballCoordinate.forEach((item, index) => {
      this.drawPoint(item);
    })
  }

  drawPoint(point){
    let scale = this.props.fallLength / (this.props.fallLength - point.z),
      alpha = (point.z + this.props.radius) / (2 * this.props.radius);

    this.ctx.beginPath();
    this.ctx.arc(point.x + this.props.originX, point.y + this.props.originY, this.props.r * scale, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'rgba(255, 255, 255, ' + (alpha + 0.5) + ')';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBG(){
    this.ctx.beginPath();
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();
  }

  clean(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  mouseMove(){
    window.addEventListener('mousemove', (e) => {
      let x = e.clientX - this.props.originX,
        y = e.clientY - this.props.originY;

      this.props.angleX = y * this.props.angleVal;
      this.props.angleY = x * this.props.angleVal;
    });
  }

  rotate(){
    this.ballCoordinate.forEach((item, index) => {
        this.ballCoordinate[index] = super.rotateX(this.ballCoordinate[index].x, this.ballCoordinate[index].y, this.ballCoordinate[index].z, this.props.angleX);
        this.ballCoordinate[index] = super.rotateY(this.ballCoordinate[index].x, this.ballCoordinate[index].y, this.ballCoordinate[index].z, this.props.angleY);
    })
  }

  animate(){
    window.requestAnimationFrame(() => {
      this.clean();
      this.rotate();
      this.drawBG();
      this.eachDrawPoint();
      this.animate();
    })
  }
}