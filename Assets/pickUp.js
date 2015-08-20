#pragma strict
public var healVal:int;
public var pointVal:int=50;
public var gameController:GameObject;
public var onPickUpString:String="This game does not endorse the recreational usage of marijuana";
function Start () {

}

function Update () {

}
function OnTriggerEnter2D(col: Collider2D){
	var triggeredObject=col.gameObject;
	if(triggeredObject.tag=="player"){
		triggeredObject.GetComponent.<mobScript2>().Heal(healVal);
		gameController.GetComponent.<gameController>().playerScore+=this.pointVal;
		gameController.GetComponent.<gameController>().displayString=onPickUpString;
		Destroy(this.gameObject);
	}	
}