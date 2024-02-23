















var btnStyle = `
{
  position: absolute;
  border-radius: 100%;
  border: 10px solid #5B5B5BA3;
}`


var btnOf = `
  
  background: #5B5B5BA3;
  z-index: 999;
  
  transition: .1s;
`

var btnOn= `
  
  background: #3949FD;
  z-index: 999;
  transition: .1s;
`




var styleAria1 = `
  position: absolute;
  touch-action: none;
  border-radius: 100%;
  background: #5B5B5BA3;
 `

var styleJoy =`
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0px;
  top:  0px;
  border-radius: 100%;
  transform: translate(50%,50%);
  background: #5B5B5BEB
`;







var ariaB2 = `
  position: absolute;
  
  
  border-radius: 20%;
  background: #42445A00
`






var btnOff =
`
   width: 33%;
   height: 33%;
   background: #7F8AFF;
   transition: .1s;
    z-index: 999;
`

var btnOnn = 
`
  width: 44%;
  height: 44%;
  background: #3949FD;
  transition: .1s;
  z-index: 999;
 `



var styleLeft = `
  position: absolute;
  width: 33%;
  height: 33%;
  top: 50%;
  border-radius: 10%;
  background: #7F8AFF;
  transform: translateY(-50%);
  z-index: 999;
`
var styleRight = `
  position: absolute;
  width: 33%;
  height: 33%;
  top: 50%;
  right: 0;
  border-radius: 10%;
  background: #7F8AFF;
  transform: translateY(-50%);
  z-index: 999;
`

var styleTop = `
  position: absolute;
  width: 33%;
  height: 33%;
  left: 50%;
  border-radius: 10%;
  background: #7F8AFF;
  transform: translateX(-50%);
  z-index: 999;
`

var styleDow = `
  position: absolute;
  width: 33%;
  height: 33%;
  left: 50%;
  bottom: 0;
  border-radius: 10%;
  background: #7F8AFF;
  transform: translateX(-50%);
  z-index: 999;
`












class Controle {
  constructor() {
    this.dbug = false;
    this.T     = null;
    this.L     = null;
    this.boo   = null;
    this.subX  = 0;
    this.subY  = 0;
    this.dis   = 0;
    this.angle = 0;
    this.Raio  = 10;
    this.pos   = {x: 0, y: 0};
    this.key   = {left: false, right: false, top: false, dow: false, fire: false};
    
    this.p1 = this.Cria("p");
    this.p1.style.cssText = `position: absolute;`
  }
  
  bug(){
    if(this.dbug){
      
      
      this.p1.innerHTML = `
                    subXb ${this.subX} <br>
                    subY  ${this.subY} <br>
                    key: ${JSON.stringify(this.key)} <br>
                    
                   
                    `
    }
  }
  
  
  Cria(e,id,clas){
    var ele =  document.createElement(e);
        ele.id = id;
        ele.className = clas;
        document.body.appendChild(ele);
        return ele;
    
  }
  
  
  button(x,y,r){
    this.button1 = this.Cria("div", "button1", "buttonOf");
    this.button1.style.cssText = `
      position: absolute;
      border-radius: 100%;
      border: 10px solid #5B5B5BA3;
      right: ${x}%; 
      bottom:${y}%; 
      width: ${r}px;
      height: ${r}px;`
    
   // this.button1.
    
    
    this.lsbutton = [button1];
    this.EventButton();
  }
  
  EventButton(){
     this.lsbutton.forEach((e) =>{
        e.addEventListener("touchstart", ()=>{
          this.key.fire = true;
          e.style.cssText += btnOn;
          this.bug();
        });
        
        e.addEventListener("touchend", ()=>{
          this.key.fire = false;
          e.style.cssText += btnOf;
          this.bug();
        });
     })
  }
  
  
  
  
  Btn(x,y,r){
    this.Aria2    = this.Cria("div","Aria2", "btnOf");
    this.btnRight = this.Cria("div", "btnRight", "btnOf");
    this.btnLeft  = this.Cria("div", "btnLeft", "btnOf");
    this.btnTop   = this.Cria("div", "btnTop", "btnOf");
    this.btnDow   = this.Cria("div", "btnDow", "btnOf");
    
  
    

    
    

    this.Aria2.style.cssText =`left: ${x}%; bottom: ${y}%; width: ${r}px; height: ${r}px;`;
    this.Aria2.style.cssText += ariaB2;
    
    this.btnLeft.style.cssText    = styleLeft;
    this.btnRight.style.cssText   = styleRight;
    this.btnTop.style.cssText     = styleTop;
    this.btnDow.style.cssText     = styleDow;
    
    
    this.Aria2.appendChild(this.btnRight);
    this.Aria2.appendChild(this.btnLeft);
    this.Aria2.appendChild(this.btnTop);
    this.Aria2.appendChild(this.btnDow);
    this.btn =[btnRight,btnLeft, btnTop, btnDow];
    this.EventBtn();
    //document.addEventListener("pointerdown")
  }
  
  
  EventBtn() {
    this.btn.forEach((e) => {
      e.addEventListener("touchstart", () => {
        e.style.cssText += btnOnn;
  
        switch (e.id) {
          case "btnLeft":
            this.key.left = true;
            this.keyright = false;
            this.key.top = false;
            this.key.dow = false;
            break;
          case "btnRight":
            this.key.left = false;
            this.key.right = true;
            this.key.top = false;
            this.key.dow = false;
            break;
          case "btnTop":
            this.key.left = false;
            this.keyright = false;
            this.key.top = true;
            this.key.dow = false;
            break;
  
          case "btnDow":
            this.key.left = false;
            this.keyright = false;
            this.key.top = false;
            this.key.dow = true;
            break;
          case "btnF":
            this.key.fire = true;
            break;
        }
  
  
        navigator.vibrate([50]);
        this.bug();
      });
  
      e.addEventListener("touchend", () => {
        e.style.cssText += btnOff;
  
        this.key.left = false;
        this.key.right = false;
        this.key.top = false;
        this.key.dow = false;
        this.key.fire = false;
  
  
        this.bug();
      });
  
  
  
    })
  }
  
  
  reset(){
    this.joy.style.cssText = `left: 0; top: 0;`;
    this.subX = 0;
    this.subY = 0;
    this.dis = 0;
    this.angle = 0;
    this.Raio = 20;
    this.pos = { x: 0, y: 0 };
    this.key.left = false;  //{ left: false, right: false, top: false, dow: false};
    this.key.right = false;
    this.key.top = false;
    this.key.dow = false;
    
  }
  
  
  
  
  
  
  
  Joystick(x,b,r){
    
    this.start = null;
    this.Raio = 30;
    this.pos  ={x: 0, y: 0};
    this.key  ={left: false, right: false, top: false, dow: false}
    this.touchL = 0;
    this.subX = 0;
    this.subY = 0;
    this.Aria1 = document.createElement("div");
    this.joy   = document.createElement("div");
    this.joy.className = "joystick-stick"
    this.Aria1.appendChild(this.joy);
    document.body.appendChild(this.Aria1);
    
    this.x  = x;
    this.b  = b;
    
    this.r = r;
    this.r2 = r/2;
  
   
   
   
    this.Aria1.style.cssText = `
       position: absolute;
       left: ${x}px;
       bottom: ${b}px;
       border-radius: 100%;
  
       width:  ${r}px;
       height: ${r}px;
       background: #717171B8;
    `
    
    
   this.joy.style.cssText =`
       position: absolute;
	     height: ${this.r2}px;
	     width:   ${this.r2}px;
	     top: calc(50% - ${this.r2/2}px);
	     left: calc(50% - ${this.r2/2}px);
	     border-radius: 100%;
	     background: #6F6F6F;
	     transition: background 0.3s;
	     touch-action: none;
   ` 
    
  
    this.Aria1.addEventListener("touchstart", (e)=>{this.EventStart(e)});
    this.Aria1.addEventListener("pointermove", (e)=>{this.EventMove(e)});
    this.Aria1.addEventListener("touchend",     (e)=>{this.EventEnd(e)});
  }
 
  
    
  
  
    EventStart(e){
        this.joy.style.transition = "0s";
        
        if(e.changedTouches){
          this.start ={
               x: e.changedTouches[0].clientX,
               y: e.changedTouches[0].clientY
          }
          return
        }
    };
    
    
   
    EventMove(e){
      e.preventDefault();
      if(this.start === null) return;
      
      if(e.changedTouches){
        
         e.clientX = e.changedTouches[0].clientX;
         e.clientY = e.changedTouches[0].clientY;
         
         
      }
      
      this.subX      = e.clientX - this.start.x;
      this.subY      = e.clientY - this.start.y;
      const angle     = Math.atan2(this.subY, this.subX);
      const distancia = Math.min(this.Raio, Math.hypot(this.subX,this.subY));
      const x         = distancia * Math.cos( angle );
	    const y         = distancia * Math.sin( angle );
      
      if(x <= 0){
        this.key.left  = true;
        this.key.right = false;
      }
      else{
        this.key.left  = false;
        this.key.right = true;
      }
      if(y <= 0){
        this.key.top  = true;
        this.key.dow = false;
      }
      else{
        this.key.top  = false;
        this.key.dow = true;
      }
      
      this.joy.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      this.pos = {x: x, y: y};
      this.bug();
       
    };
    
    
    
    EventEnd(e){
        this.joy.style.transition = ".5s";
        this.joy.style.transform = `translate3d(0px, 0px, 0px)`;
        this.pos = { x: 0, y: 0 }
        this.key  ={left: false, right: false, top: false, dow: false}
        this.touchL = 0;
        this.bug();
        this.start = null;
    };
    
}



var contro = new Controle();
    //contro.Joystick(10, 75,100);
    contro.Btn(10,10, 100);
    contro.button(0,10,80);
















































