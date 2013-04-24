#pragma strict

var oxygenTime = 3;//in minutes
var diveTime = 1;//in minutes
var alarmSound: AudioSource;

function Start () {
}

function Update(){
	var alarmSound : AudioSource = (GetComponents(AudioSource))[0];
	if(!alarmSound.isPlaying && 
			(Input.GetKeyDown("t") ||
			diveTime*60 <= Time.realtimeSinceStartup))
		alarmSound.Play();
	if(Input.GetKeyDown("k"))
		alarmSound.Stop();
}

function OnGUI(){
	var currentTime = Time.realtimeSinceStartup;
	var diveTimeRemaining = diveTime*60-currentTime;
	if(diveTimeRemaining <= 0){
		diveTimeRemaining = 0;
	}
	GUI.Label(Rect(0,0,Screen.width,Screen.height),
		   "Depth: "+ -Camera.mainCamera.gameObject.transform.position.y+
		   "\nOxygen level:"+(100*(oxygenTime*60-currentTime)/(oxygenTime*60)).ToString("n1")+"%"+
		   "\nDive Timer:"+diveTimeRemaining.ToString("n0")+" secs"
		   );
}

