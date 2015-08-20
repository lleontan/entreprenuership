#pragma strict
//Leon Tan, lleontan@gmail.com

public var rigid:Rigidbody2D;			//the rigidBody2d
public var shootingPointer:Transform;
protected var canJump=true;
public var jumpHeight:float=120;
public var aimVal:float=90;
public var bullet:GameObject;
public var maxHealth:float=100;
protected var health:float;
public var moveSpeed:float=20;
public var onDeathDrop:GameObject;
public var bar_width:float=1;
public var shootTimer:float=.8;
public var canDie:boolean=true;
protected var shootTimerActual:float;
public var pivotPoint:Transform;
public var bloodSplater:GameObject;
function Start () {
	 //rigid =this.GetComponent(Rigidbody2D);
	health=maxHealth;
	shootTimerActual=shootTimer;
}

function Update () {
	updateArmRotation();
	shootTimerActual-=Time.deltaTime;
	var barWidth=health/100*bar_width;
	if(barWidth<.03){
		barWidth=.03;
	}
}
function OnCollisionEnter2D(col: Collision2D) {
	var colObject=col.gameObject;
	if(colObject.tag=="projectile"){
		if(colObject.GetComponent.<bulletScript>().exceptTag+""!=this.tag){
		//Debug.Log(+" with "+colObject.tag);
		this.takeDamage(col.gameObject.GetComponent.<bulletScript>().damage);
		}
	}
	else if(colObject.tag=="healthPickup"){
		//Heal(GetComponent.<pickUp>().healVal);
	}
}
function OnTriggerEnter2D(col: Collider2D){
	if(col.gameObject.tag=="Wall"){

	canJump=true;
	}
}
function takeDamage(damage:int){
	this.health-=damage;
	Instantiate(this.bloodSplater,this.transform.position,this.transform.rotation);
	if(this.health<=0){
		isDead();
	}
}
function isDead(){
	if(canDie){
		Destroy(this.gameObject);
		Instantiate(this.onDeathDrop,shootingPointer.position,shootingPointer.rotation);
	}
}
function OnTriggerStay2D(col: Collider2D)
 {
 	if(col.gameObject.tag=="Wall"){
 	canJump=true;
 	}
 }

function updateArmRotation(){
	     this.transform.rotation = Quaternion.Euler(Vector3(0, 0, this.aimVal));
}
function Heal(healVal:float){
	health+=healVal;
	if(health>maxHealth){
		health=maxHealth;
	}
}
function Shoot(){
	//instantiate a bullet at shootingPointers transform
	if(shootTimerActual<0){
	shootTimerActual=shootTimer;
	//g.GetComponent.<bulletScript>().exceptTag=this.tag;
	var go:GameObject = Instantiate(bullet,shootingPointer.position,shootingPointer.rotation) as GameObject;
	go.GetComponent.<bulletScript>().exceptTag=this.tag;//("SetExceptTag",this.tag);
	}
}