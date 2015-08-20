#pragma strict
var moveSpeed:float=5;
var door:GameObject;
var state:String="goStaion";
var roomTarget:GameObject;
var inRoom:GameObject;
var moveTarget:Transform;
var movestate="moveRoomx";
function Start () {

}

function Update () {
	if(state=="goStation"){
		moveTarget=inRoom.GetComponent.<roomScript>().findStation();
		if(moveToTarget(moveTarget)){
			state="pack";}
	}
	else if (state=='moveToRoom'){
		moveTarget=roomTarget.transform;
		state="moveToPosition";
		if(moveToTarget(moveTarget)){
			state='goStation';
		}

	}
	else if(state=="moveToPosition"){
		moveToTarget(moveTarget);
	}
	else if(state=="pack"){
	
	}
}
function moveToTarget(target:Transform){
	 if(movestate=="moveRoomx"){
		if(target.position.x>this.transform.position.x){
			this.GetComponent.<Rigidbody2D>().velocity.x=moveSpeed;
		}else if(target.transform.position.x<this.transform.position.x){
			this.GetComponent.<Rigidbody2D>().velocity.x=-1*moveSpeed;
		}
		if(this.transform.position.x>target.transform.position.x*.99&&
		this.transform.position.x<target.transform.position.x*1.01){
			this.GetComponent.<Rigidbody2D>().velocity.x=0;
			this.movestate='moveRoomy';
		}
		//this.transform.position.x=Vector2.Lerp
	}
	else if(movestate=="moveRoomy"){
		if(target.transform.position.y>this.transform.position.y){
			this.GetComponent.<Rigidbody2D>().velocity.y=moveSpeed;
		}else if(target.transform.position.y<this.transform.position.y){
			this.GetComponent.<Rigidbody2D>().velocity.y=-1*moveSpeed;
		}
		if(this.transform.position.y<target.transform.position.y*1.03){
			this.GetComponent.<Rigidbody2D>().velocity.y=0;
			this.movestate='moveRoomx';
			return true;
		}
	}
	return false;
}
function generatePath(){
	
}
function OnTriggerStay2D(col: Collider2D){
	if(col.gameObject.tag=="room"){
		this.inRoom=col.gameObject;
	}
}