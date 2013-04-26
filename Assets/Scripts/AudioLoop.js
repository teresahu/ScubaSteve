var sound : AudioSource;

function Start() {
	InvokeRepeating("PlaySound", 30, 30);
}

function PlaySound() {
	sound = GetComponents(AudioSource)[0];
	sound.Play();
}
