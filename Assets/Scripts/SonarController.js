#pragma strict

var sonarObjects:GameObject[];
var pinging = false;

function Start () {
	sonarObjects = GameObject.FindGameObjectsWithTag("SonarObject");
}

function Update () {
	if(Input.GetKeyDown("p") && !pinging)
		ping();
}

function ping(){
	pinging = !pinging;
	var sonarLength = sonarObjects[0].GetComponent(AudioSource).clip.length;
	Debug.Log(sonarLength);
	Debug.Log(sonarObjects);
}
