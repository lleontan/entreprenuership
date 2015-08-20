#pragma strict
//Leon Tan, lleontan@gmail.com

public class PlayerScript extends mobScript2{
	
	public var cameraTrans:Transform;
	public var dashSpeed:float=2500;
	public var dashTimer:float=1.5;	protected var dashTimerActual:float=0;
	public var trailDurationTime:float=.3; protected var trailDurationTimerActual:float=0;
	function Start () {
		super();
	}
	function isDead(){
		GameObject.Find("gameController").GetComponent.<gameController>().displayString="Democracy is the road to socialism.";
		GameObject.Find("gameController").GetComponent.<gameController>().restartButtonShow=true;
		super();
	}	
	function OnGUI(){
	 var style=new GUIStyle();
	 style.normal.textColor = Color.black;
	 style.fontSize=20;
     GUI.Label(Rect(Screen.width-180,10,120,60),"Health:"+this.health+"\ndash:"+dashTimerActual,style);
	 }
	function Update () {
		super();
		if(dashTimerActual>=0){
		dashTimerActual-=Time.deltaTime;}
		if(trailDurationTimerActual<=Time.time){
			this.GetComponent.<TrailRenderer>().enabled=false;	
		}

		cameraTrans.position=this.transform.position;
		cameraTrans.position.z=-15;
		this.rigid.velocity.x=0;
		this.aimVal=rotateTo();
		
		var isDiag=true;
		if(Input.GetKey("w")){
			rigid.velocity.y=this.moveSpeed;
		}
		else if(Input.GetKey('s')){
			rigid.velocity.y=-1*moveSpeed;
		}
		else{
			isDiag=false;
			rigid.velocity.y=0;
		}

		if(Input.GetKey("a")){
			rigid.velocity.x=-1*moveSpeed;
		}
		else if(Input.GetKey("d")){
			rigid.velocity.x=moveSpeed;
		}
		else{
			isDiag=false;
		}
		if(Input.GetMouseButton(0)){
			this.Shoot();
		}
		if(Input.GetKey("e")&&dashTimerActual<0){
			dashTimerActual=dashTimer;
			var rigid:Rigidbody2D;
			rigid=this.GetComponent.<Rigidbody2D>();
			rigid.AddForce(transform.right*dashSpeed);
			
			this.trailDurationTimerActual=Time.time+this.trailDurationTime;
			this.GetComponent.<TrailRenderer>().enabled=true;	
		}
	}

	function OnCollisionEnter2D(col: Collision2D) {
		super(col);
	}
	function OnTriggerEnter2D(col: Collider2D){
		super(col);
	}
	function OnTriggerStay2D(col: Collider2D)
	 {
		super(col);
	 }
	function rotateTo(){
	     var mouse_pos = Input.mousePosition;
	      mouse_pos.z= 11; //The distance between the camera and object
	     var object_pos = Camera.main.WorldToScreenPoint(this.transform.position);
	      mouse_pos.x = mouse_pos.x - object_pos.x;
	      mouse_pos.y = mouse_pos.y - object_pos.y;
	     var angle = Mathf.Atan2(mouse_pos.y, mouse_pos.x) * Mathf.Rad2Deg;
	     return angle;
	}
}