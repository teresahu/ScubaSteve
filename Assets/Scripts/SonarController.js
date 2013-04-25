#pragma strict

var sonarObjects:GameObject[];
var pinging = false;

function Start () {
	sonarObjects = GameObject.FindGameObjectsWithTag("SonarObject");
}

function Update () {
	if(Input.GetKeyDown("p") && !pinging){
		sonarObjects[0].GetComponent(AudioSource).Play();
		StartCoroutine("ping");
	}
}

function ping(){
	pinging = true;
	var sonarLength = sonarObjects[0].GetComponent(AudioSource).clip.length;

	for(var i=0;i<sonarObjects.length;i++){
		var sound = sonarObjects[i].GetComponent(AudioSource);
		sound.Play();
		yield WaitForSeconds (sonarLength/2);
	}

	pinging = false;
}
