var sound : AudioSource;

function Start() {
	InvokeRepeating("PlaySound", 0, 10);
}

function PlaySound() {
	sound = GetComponents(AudioSource)[0];
	sound.Play();
}
