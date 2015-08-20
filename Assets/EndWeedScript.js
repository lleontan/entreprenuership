#pragma strict

public class EndWeedScript extends pickUp{
	public var endTrigger:GameObject;
	function Start () {
		this.pointVal=100;
		
		super();
	}	

	function Update () {
		
	}
	function OnTriggerEnter2D(collider: Collider2D){
		var triggeredObject=collider.gameObject;
		if(triggeredObject.tag=="player"){
			triggeredObject.GetComponent.<mobScript2>().Heal(healVal);
			gameController.GetComponent.<gameController>().playerScore+=this.pointVal;
			gameController.GetComponent.<gameController>().displayString="Tobacco Cigarette";
			
			endTrigger.GetComponent.<EndScript>().triggerActive=true;
			var spawners=[];
			spawners = GetComponents (SpawnScript);
			for (var spawner : SpawnScript in spawners) {
				Debug.Log("spawnning");
				spawner.spawn();
			}
			/*var changeDisplayString="";
		if(Random.RandomRange(0,1)<.2){
			changeDisplayString="Weeed...";
		}gameController.GetComponent.<gameController>().displayString=changeDisplayString;
*/
			Destroy(this.gameObject);
		}	
	}
}