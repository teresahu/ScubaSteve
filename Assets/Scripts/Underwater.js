//This script enables underwater effects. Attach to main camera.
 
//Define variables
var underwaterLevel = 3;
private var defaultFog;
private var defaultFogColor;
private var defaultFogDensity;
private var defaultSkybox;
 
//The scene's default fog settings
var noSkybox : Material;
 
function Start () {
	defaultFog = RenderSettings.fog;
	defaultFogColor = RenderSettings.fogColor;
	defaultFogDensity = RenderSettings.fogDensity;
	defaultSkybox = RenderSettings.skybox;
	//Set the background color
	camera.backgroundColor = Color (0, 0.4, 0.7, 1);
}
 
function Update () {
	if (transform.position.y < underwaterLevel) {
		RenderSettings.fog = true;
		RenderSettings.fogColor = Color (0, 0.4, 0.7, 0.6);
		RenderSettings.fogDensity = 0.04;
		RenderSettings.skybox = noSkybox;
	}
 
	else {
		RenderSettings.fog = defaultFog;
		RenderSettings.fogColor = defaultFogColor;
		RenderSettings.fogDensity = defaultFogDensity;
		RenderSettings.skybox = defaultSkybox;
	}
}