const inputs = document.querySelectorAll(".input");
const paragrafo = document.getElementById("paragrafo");

const mainDiv = document.getElementById("mainDiv");
const btn = document.getElementById("btn");

let topLeft = 0;
let topRight = 0;

let bottomRight = 0;
let bottomLeft = 0;

async function clipboardCopy() {
	let text = paragrafo.textContent;
	await navigator.clipboard.writeText(text);
}

inputs.forEach(input => {
	input.addEventListener("input", e => {
		if (input.classList.contains("input-topLeft")) {
			input.value === "" ? (topLeft = 0) : (topLeft = input.value);
		} else if (input.classList.contains("input-topRight")) {
			input.value === "" ? (topRight = 0) : (topRight = input.value);
		} else if (input.classList.contains("input-bottomRight")) {
			input.value === ""
				? (bottomRight = 0)
				: (bottomRight = input.value);
		} else if (input.classList.contains("input-bottomLeft")) {
			input.value === "" ? (bottomLeft = 0) : (bottomLeft = input.value);
		}

		const minhaStr = `border-radius: ${
			topLeft === 0 ? "0px" : `${topLeft}px`
		} ${topRight === 0 ? "0px" : topRight + "px"} ${
			bottomRight === 0 ? "0px" : bottomRight + "px"
		} ${bottomLeft === 0 ? "0px" : bottomLeft + "px"};`;
		mainDiv.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
		paragrafo.textContent = minhaStr;
	});
});

btn.addEventListener("click", clipboardCopy);
