#pragma strict
var xStationVal:float=2;
var yStationVal:float=.2;
var openStations=[true,true,true,true];
function Start () {

}

function Update () {

}
function findStation(){
	for(var a=0;a<openStations.length;a++){
		if(openStations[a]){
			a++;
			return this.GetComponent("sTag"+a).transform;
		}
	}
}