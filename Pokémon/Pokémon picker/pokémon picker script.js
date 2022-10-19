/*@media (max-width: 750px) {
  #background-video { display: none; }
  body {
    background: url("https://user-images.githubusercontent.com/109108536/182645143-93e9546c-1276-4e15-ac74-bd58c25b346d.png") no-repeat;
    background-size: cover;
  }
}
*/

/*FORM

//NAME
function pokémonNameInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Name\", National Pokédex number: \"#number\", Type:	\"Type\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayImage(){
        document.getElementById('Pokémon').src="";
  }
	
*/
//BULBASAUR
function bulbasaurInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Bulbasaur\", National Pokédex number: \"#1\", Type: \"Grass / Poison\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayBulbasaur(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/182645143-93e9546c-1276-4e15-ac74-bd58c25b346d.png";
  }
//IVYSAUR
function ivysaurInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Ivysaur\", National Pokédex number: \"#2\", Type: \"Grass / Poison\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayIvysaur(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/186333807-15538d93-20d8-4e9c-b2c3-e97d043fbc65.png";
  }
//VENUSAUR
function venusaurInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Venusaur\", National Pokédex number: \"#3\", Type: \"Grass / Poison\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayVenusaur(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/188745563-b1f30d38-7052-4b21-9335-cf21f1d070a8.png";
  }
//CHARMANDER
function charmanderInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Charmander\", National Pokédex number: \"#4\", Type: \"Fire\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayCharmander(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/182645137-6fdfab30-3986-4769-bb17-687fabb8571d.png";
  }
//CHARMELEON
function charmeleonInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Charmeleon\", National Pokédex number: \"#5\", Type: \"Fire\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayCharmeleon(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/189507323-033fba7d-297e-4fb6-b9e5-872c785282bc.png";
  }
//CHARIZARD
function charizardInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Charizard\", National Pokédex number: \"#6\", Type: \"Fire\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayCharizard(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/190274394-c811d5de-d665-4913-8d0d-bcd57cb8f18f.png";
  }
//SQUIRTLE
function squirtleInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Squirtle\", National Pokédex number: \"#7\", Type: \"Water\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displaySquirtle(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/191074784-42ddb9da-9858-4a26-b27d-d0d0a6faf3d1.png";
  }
//WARTORTLE
function wartortleInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Wartortle\", National Pokédex number: \"#8\", Type: \"Water\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayWartortle(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/192023134-d9f2d56e-88ee-4af6-bdfa-91ee1d788793.png";
  }
//BLASTOISE
function blastoiseInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Blastoise\", National Pokédex number: \"#9\", Type: \"Water\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayBlastoise(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/193122468-2f2868ad-e220-43ac-bb12-60d54a3bad8f.png";
  }
//CATERPIE
function caterpieInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Caterpie\", National Pokédex number: \"#10\", Type: \"Bug\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayCaterpie(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/193480860-10b97d7e-68fa-4697-a332-c6e114b0bbd4.png";
  }
//METAPOD
function metapodInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Metapod\", National Pokédex number: \"#11\", Type: \"Bug\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayMetapod(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/195323722-6d482dd3-f67b-4b66-b33d-80d86e1a14d7.png";
  }
//PIKACHU
function pikachuInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Pikachu\", National Pokédex number:	\"#25\", Type: \"Electric\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayPikachu(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/182130279-8cc77124-9d42-440c-a98f-24385e31247a.png";
  }
//EEVEE
function eeveeInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Eevee\", National Pokédex number: \"#133\", Type: \"Normal\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayEevee(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/185455243-b9cf7aa5-5b17-420b-9494-8720b6676eab.png";
  }
//VAPOREON
function vaporeonInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Vaporeon\", National Pokédex number: \"#134\", Type: \"Water\", Gender:	\"♂ Male / ♀ Female\" ';
  }
function displayVaporeon(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/184548331-c87a476c-18bc-452c-b463-589dda31eabe.png";
  }
//FLAREON
function flareonInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Flareon\", National Pokédex number: \"#136\", Type:	\"Fire\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayFlareon(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/184756655-d8632ee3-ceb1-4aea-89a1-f585c81a255e.png";
  }
//MEWTWO
function mewtwoInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Mewtwo\", National Pokédex number: \"#150\", Type: \"Psychic\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayMewtwo(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/183269522-1178a09a-8d59-45b6-90e9-616ddec1098a.png";
  }
//MEW
function mewInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Mew\", National Pokédex number: \"#151\", Type: \"Psychic\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayMew(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/184548973-d050a180-45d4-433d-ae19-e3a81bcb8bf0.png";
  }

            //  MEGA
// MEGA VENUSAUR
function megaVenusaurInfo() {
  document.getElementById("Info").innerHTML = ' Name: \"Mega Venusaur\", National Pokédex number: \"#3\", Type:	\"Grass/Poison\", Gender: \"♂ Male / ♀ Female\" ';
  }
function displayMegaVenusaur(){
        document.getElementById('Pokémon').src="https://user-images.githubusercontent.com/109108536/189545695-1a76055d-1aaf-492c-821c-4be0fa2385f3.png";
  }
