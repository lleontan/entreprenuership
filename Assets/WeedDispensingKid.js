#pragma strict
public class WeedDispensingKid extends mobScript2{
	public var targetEnemy:GameObject;
	public var aggro:boolean=false;
	public var minFollowDistance:float=15;
	public var maxShootDistance:float=15;
	public var inAccuracy:float=35;
	function Start () {
		super();
	}
	function isDead(){
		super();
	}
	function Update () {
		super();
		var distance = Vector3.Distance(this.transform.position, targetEnemy.transform.position);
		if(distance<15){
			this.aggro=true;
		}
		else if(distance>25){
			this.aggro=false;
		}
		if(aggro){		
			this.aimVal=rotateTo(targetEnemy);
			//this.lookat();
			if(distance<minFollowDistance){

				rigid.AddRelativeForce(Vector2.up*-moveSpeed);	
				
			}
		}
	}
	function rotateTo(target:GameObject){
	      var xVal = target.transform.position.x - this.transform.position.x;
	      var yVal = target.transform.position.y - this.transform.position.y;
	     var angle = Mathf.Atan2(yVal, xVal) * Mathf.Rad2Deg;
	     return angle;
	}
	function lookat(){
    var rotation = Quaternion.LookRotation(targetEnemy.transform.position - transform.position);
    var targety=rotation.y;
    //transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    var damping=12;
   	this.aimVal= Mathf.Lerp(this.transform.rotation.y,targety,Time.deltaTime*damping);
	
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
	 


}