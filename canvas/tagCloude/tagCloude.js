class canvas3D{
  constructor(props) {
    this.props3D = {
      fallLength: props ? props.fallLength || 500 : 500,
      originX: props ? props.originX || 0 : 0,
      originY: props ? props.originY || 0 : 0,
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
}

class TagCloude extends canvas3D{
  constructor(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    ctx.translate(canvas.width / 2, canvas.height / 2);

    super();

    this.canvas = canvas;
    this.ctx = ctx;
    this.init();
  }

  init(){
  }



  initPoint(){

  }
}
