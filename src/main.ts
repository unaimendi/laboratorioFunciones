const numeroTurno = document.getElementById("numero-turno");
const btnAnterior = document.getElementById("btn-anterior");
const btnReset = document.getElementById("btn-reset");
const btnSiguiente = document.getElementById("btn-siguiente");
const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
const btnInsertTurno = document.getElementById("insert-turno");

let turno: number = 1;

const anteriorTurno = () => {
	turno > 1 && turno--;
	insertTurno();
};

const resetTurno = () => {
	turno = 1;
	insertTurno();
};

const siguienteTurno = () => {
	turno < 99 ? turno++ : (turno = 1);
	insertTurno();
};

const insertTurno = () => {
	if (numeroTurno) numeroTurno.innerHTML = turno.toString().padStart(2, "0");
};

btnAnterior?.addEventListener("click", anteriorTurno);
btnReset?.addEventListener("click", resetTurno);
btnSiguiente?.addEventListener("click", siguienteTurno);
btnInsertTurno?.addEventListener("click", () => {
	turno = parseInt(inputTurno.value);
	inputTurno.value = "";
	insertTurno();
});
