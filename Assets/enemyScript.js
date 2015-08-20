#pragma strict
public class enemyScript extends mobScript2{
	public var targetEnemy:GameObject;
	public var aggro:boolean=false;
	public var minFollowDistance:float=3;
	public var maxFollowDistance:float=8;
	public var maxShootDistance:float=15;
	public var inAccuracy:float=35;
	public var deAggroRange:float=40;
	function Start () {
		super();
	}
	function isDead(){
		//GameObject.Find()
		var changeDisplayString="";
		var val=Random.RandomRange(0.0,1.0);
		if(val<.1){
			changeDisplayString="pop them caps";
		}else if(val>.1&&val<.25){
			changeDisplayString="Workers of the world unite; you have nothing to lose but your chains.";
		}else if(val>.25&&val<.3){
			changeDisplayString="One less goon between you and your trees";
		}
		else if(val>.3&&val<.31){
			changeDisplayString="There are no ponies in this game";
		}
		else if(val>.31&&val<.4){
			changeDisplayString="Recreational Usage of Cannaboids is strictly prohibbited within professional environments";
		}
		else if(val>.4&&val<.5){
			changeDisplayString="Don't Let StalinBall® blaze your trees, Protect Against Deforestation Today!!!!";
		}else if(val>.5&&val<.6){
			changeDisplayString="Communism is not love. Communism is a hammer which we use to crush the enemy.";
		}
		else if(val>.6&&val<.7){
			changeDisplayString="The devils lettuce goes well in a Satan Sandwich";
		}else if(val>.7&&val<.74){
			changeDisplayString="Disregard Currency, Aquire Females";
		}
		else if(val>.74&&val<.82){
			changeDisplayString="Smoke The Popo, Pimp Yo Weave";
		}
		else{
			changeDisplayString="100% of marujuana users will die";
		}
		
		GameObject.Find("gameController").GetComponent.<gameController>().displayString=changeDisplayString;

		super();

	}
	function Update () {
		super();
		var distance = Vector3.Distance(this.transform.position, targetEnemy.transform.position);
		if(distance<17){
			this.aggro=true;
		}
		else if(distance>deAggroRange){
			this.aggro=false;
		}
		if(aggro){		
			this.aimVal=rotateTo(targetEnemy);
			//this.lookat();
			
			if(distance<minFollowDistance){
				rigid.AddRelativeForce(Vector2.up*-moveSpeed);	
				
			}
			else if(distance>maxFollowDistance){
				rigid.AddRelativeForce(Vector2.up*moveSpeed);	

			}
			else{
				
			}
			if(distance<maxShootDistance){
				var reset=this.transform.rotation;
				this.transform.rotation.z+=Random.Range(-.2,.2);
				this.Shoot();
				this.transform.rotation=reset;
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
		if(col.gameObject.tag=='mob'){
			//move away from it
			//var directionTowards=this.rotateTo(col.gameObject);
			
			var direction:Vector2 = transform.position - col.gameObject.transform.position;
			direction=direction*1;
			direction.Normalize();
			
			//this.transform.Translate(direction*.6);
			this.rigid.AddForce(direction*600);
		}
	}
	function OnCollisionStay2D(collided:Collision2D){
		if(collided.gameObject.tag=='mob'){
			//move away from it
			//var directionTowards=this.rotateTo(col.gameObject);
			
			var direction:Vector2 = transform.position - collided.gameObject.transform.position;
			direction=direction*1;
			direction.Normalize();
			
			//this.transform.Translate(direction*.6);
			this.rigid.AddForce(direction*600);
		}
	}
	function OnTriggerEnter2D(col: Collider2D){
		super(col);
	}
	function OnTriggerStay2D(col: Collider2D)
	 {
		super(col);
	 }
	 


}