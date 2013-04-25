#pragma strict

function Start () {

}

function Update () {
	if(Camera.mainCamera.gameObject.transform.position.y >=0){
		RenderSettings.fog = false;
	}else{
		RenderSettings.fog = true;
	}
}
