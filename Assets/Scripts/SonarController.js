#pragma strict

var sonarObjects:GameObject[];
var pinging = false;

function Start () {
	sonarObjects = GameObject.FindGameObjectsWithTag("SonarObject");
}

function Update () {
	if(Input.GetKeyDown("p") && !pinging){
		ping();
		sonarObjects[0].GetComponent(AudioSource).Play();
	}
}

function ping(){
	pinging = true;
	var sonarLength = sonarObjects[0].GetComponent(AudioSource).clip.length;
	var nextTime = Time.time;

	for(var i=0;i<sonarObjects.length;i++){
		var sound = sonarObjects[i].GetComponent(AudioSource);
		while(Time.time<nextTime){}
		sound.Play();
		nextTime += sonarLength + 0.5;
	}

	pinging = false;
}
