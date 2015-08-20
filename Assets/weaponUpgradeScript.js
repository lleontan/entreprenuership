#pragma strict
public var fireUpgrade:float;
public var changeBullet:GameObject;
public class weaponUpgradeScript extends pickUp{
	function Start () {
		super();
	}

	function Update () {
		super();
	}
	function OnTriggerEnter2D(col: Collider2D){
	var triggeredObject=col.gameObject;
	if(triggeredObject.tag=="player"){
		triggeredObject.GetComponent.<mobScript2>().shootTimer+=fireUpgrade;
		triggeredObject.GetComponent.<mobScript2>().bullet=changeBullet;

	
		triggeredObject.GetComponent.<mobScript2>().Heal(healVal);
		gameController.GetComponent.<gameController>().playerScore+=this.pointVal;
		gameController.GetComponent.<gameController>().displayString=onPickUpString;
		Destroy(this.gameObject);
	}	
}
}