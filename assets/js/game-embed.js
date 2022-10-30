var gameModal = document.getElementById("game-modal");
var gameSrc = gameSrc = document.getElementById("game-iframe").src;

gameModal.addEventListener('hidden.bs.modal', function () {
    gameSrc = document.getElementById("game-iframe").src;
    document.getElementById("game-iframe").src="";
});

gameModal.addEventListener('shown.bs.modal', function () {
   document.getElementById("game-iframe").src=gameSrc;
});