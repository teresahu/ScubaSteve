#pragma strict

var oxygenTime = 3;//in minutes
var diveTime = 1;//in minutes
var alarmSound : AudioClip[];

function Start () {
}

function Update(){
	
	if(!audio.isPlaying && 
			(Input.GetKeyDown("t") ||
			diveTime*60 <= Time.realtimeSinceStartup))
			{
				audio.clip = alarmSound[0];
				audio.Play();
			}
	if(Input.GetKeyDown("k"))
		audio.Stop();
		
	if(!audio.isPlaying && (Input.GetKeyDown("u")))
	{
		Surfacing();	
	}
	
		
}

function Surfacing()
{
	audio.clip = alarmSound[1];
	audio.Play();
	yield WaitForSeconds(audio.clip.length);
	audio.clip = alarmSound[2];
	audio.Play();
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
		   "\nTime:"+currentTime+"%"+
		   "\nDive Timer:"+diveTimeRemaining.ToString("n0")+" secs"
		   );
}

