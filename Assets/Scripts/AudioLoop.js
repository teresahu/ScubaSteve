var sound : AudioSource;

function Start() {
	InvokeRepeating("PlaySound", 10, 30);
}

function PlaySound() {
	sound = GetComponents(AudioSource)[0];
	sound.Play();
}
