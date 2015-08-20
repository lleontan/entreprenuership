#pragma strict
//Leon Tan, lleontan@gmail.com

public class EndScript extends pickUp{
public var triggerActive:boolean=false;
function Start () {

}

function Update () {

}
function OnTriggerEnter2D(col: Collider2D){
	//Debug.Log("trigger entered:"+col.gameObject.tag);
	var triggeredObject=col.gameObject;
	if(triggeredObject.tag=="player"){
		Debug.Log("things happened");
		
		GameObject.Find("gameController").GetComponent.<gameController>().displayString="You've Stopped StalinBalls® devious deforestation, Refresh and Refill with a MountainDew-Doritos combo pack";
		GameObject.Find("gameController").GetComponent.<gameController>().restartButtonShow=true;
		
		triggeredObject.GetComponent.<mobScript2>().Heal(healVal);
		gameController.GetComponent.<gameController>().playerScore+=this.pointVal;
		Destroy(this.gameObject);
	}	
	}
}