#pragma strict
//Leon Tan, lleontan@gmail.com
public var playerScore:int=0;
public var displayString:String=
"StalinBall® has stolen down all the trees in happy balls land...Rescue your ferns and defeat StalinBalls® insidious deforestation plot!\n";
public var restartButtonShow:boolean=false;
function Start () {
	
}

function  LoadScene( level:String)
    {
//        loadingImage.SetActive(true);
        Application.LoadLevel("asdf");
    }

function OnGUI(){

	 var style=new GUIStyle();
	 style.normal.textColor = Color.red;
     GUI.Label(Rect(0,0,Screen.width,Screen.height),"Cash:"+this.playerScore,style);
     GUI.Label(Rect(Screen.width/4,10,360,200),displayString,style);
     if(restartButtonShow){
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/1.7, 370, 65), "Fight The Evils of Economic Imperialism.\nRestart The Struggle!")){
 		//Here we call the method who will call the level named "LevelName"
 		Application.LoadLevel("asdf");
 		}
 		}
	 }
function makeMob(room:GameObject,mob:GameObject){
	var newPosition=room.transform.position;
	
	Instantiate(mob,newPosition,mob.transform.rotation);
}
function Update () {

}
