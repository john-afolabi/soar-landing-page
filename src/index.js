import { Header } from "./components/Header.js";

const body = document.querySelector(".container");

const app = () => {
	body.innerHTML = `
        ${Header()}
    `;
};

app();
