#pragma strict
public var changeObject:GameObject;
function Start () {

}

function Update () {

}
function OnTriggerEnter2D(collider:Collider2D){
	//Debug.Log(collider.gameObject.tag);
	if(collider.gameObject.tag=="player"){
	var s=changeObject.GetComponent.<BoxCollider2D>();
	s.enabled=true;
	var s2=changeObject.GetComponent.<SpriteRenderer>();
	s2.enabled=true;
	}
}