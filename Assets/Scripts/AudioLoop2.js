var sound : AudioSource;

function Start() {
	InvokeRepeating("PlaySound", 5, 10);
}

function PlaySound() {
	sound = GetComponents(AudioSource)[0];
	sound.Play();
}
