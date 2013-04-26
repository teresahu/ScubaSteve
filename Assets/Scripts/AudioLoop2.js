var sound : AudioSource;

function Start() {
	InvokeRepeating("PlaySound", 15, 30);
}

function PlaySound() {
	sound = GetComponents(AudioSource)[0];
	sound.Play();
}
