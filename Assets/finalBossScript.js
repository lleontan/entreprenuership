#pragma strict
public class finalBossScript extends enemyScript{
	public var unlockWall:GameObject;
	function Start () {
		super();
	}
	function isDead(){

	var s=unlockWall.GetComponent.<BoxCollider2D>();
	s.enabled=false;
	var s2=unlockWall.GetComponent.<SpriteRenderer>();
	s2.enabled=false;		
	super();
	}
	function Update () {
		super();
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