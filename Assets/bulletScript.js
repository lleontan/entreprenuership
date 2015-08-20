#pragma strict
//Leon Tan, lleontan@gmail.com

public var shotspeed:float;
public var damage:int;
public var lifespan:float=1;
public var exceptTag:String="null";
function Start () {
	var rigid:Rigidbody2D;
		rigid=this.GetComponent.<Rigidbody2D>();
		rigid.AddForce(transform.up*-shotspeed);
}
protected var candestroy=false;
function OnCollisionEnter2D(collision:Collision2D){
	var colTag=collision.gameObject.tag;
	if (colTag == "WaistHigh"||colTag==exceptTag) {
    	Physics2D.IgnoreCollision(collision.gameObject.GetComponent.<Collider2D>(), this.GetComponent.<Collider2D>());
        }
       else{
//       Debug.Log(colTag+":"+this.exceptTag);
	candestroy=true;
	}
	}
	function SetExceptTag(tag:String){
		this.exceptTag=tag;
	}
	var timer1=0.00001;
function Update () {
	//if(this.GetComponent.<rigidbody2D>().
	lifespan-=Time.deltaTime;
	if(candestroy||lifespan<0){
		/*timer1-=Time.deltaTime;
		if(timer1<0){*/
		Destroy(this.gameObject);
		//}
	}
}
 
