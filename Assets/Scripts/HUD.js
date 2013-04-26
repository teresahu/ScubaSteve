#pragma strict

var oxygenTime = 3;//in minutes
var diveTime = 1;//in minutes

function Start () {
}

function Update(){
	var alarmSound : AudioSource = (GetComponents(AudioSource))[0];
	if(!alarmSound.isPlaying && 
			(Input.GetKeyDown("t") ||
			diveTime*60 <= Time.realtimeSinceStartup))
		alarmSound.Play();
	if(Input.GetKeyDown("k")||Time.realtimeSinceStartup > (diveTime*60+7.08)){
		alarmSound.Stop();
		diveTime = 100;
	}
	var time = Time.realtimeSinceStartup;
	var breathSound : AudioSource = (GetComponents(AudioSource))[1];
	var oxygenLvl = (100*(oxygenTime*60-time)/(oxygenTime*60));
	if((Input.GetKeyDown("o") || parseInt(oxygenLvl)%25 == 0) 
			&& !breathSound.isPlaying){
		breathSound.pitch = 1+(time)/(oxygenTime*60);
		breathSound.Play();
	}
	
	if(!alarmSound.isPlaying && (Input.GetKeyDown("u")))
	{
		Surfacing();	
	}
	
	if(!alarmSound.isPlaying && (Input.GetKeyDown("z") || oxygenLvl <= 10))
	{
		var sound:AudioSource = (GetComponents(AudioSource))[4];
		sound.Play();
	}
	
		
}

function Surfacing()
{
	var sound1:AudioSource = (GetComponents(AudioSource))[2];
	sound1.Play();
	yield WaitForSeconds(audio.clip.length);
	var sound2:AudioSource = (GetComponents(AudioSource))[3];
	sound2.Play();
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

