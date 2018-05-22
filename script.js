"use strict";

const movieList = [
	{
		name: "Star Wars",
		emoji: "💫 🌑 🤖 🌌 🚀 🔫"
	},
	{
		name: "Jurassic Park",
		emoji: "🦖 🦕 😱 😵"
	},
	{
		name: "Bridget Jones's Diary",
		emoji: "👩 ✒️ 📖 "
	},
	{
		name: "The Jungle Book",
		emoji: "👶 🐘 🐍 🐺 🐵 🐻"
	},
	{
		name: "Finding Nemo",
		emoji: "🔍 🐠"
	},
	{
		name: "Sound of Music",
		emoji: "👱 👱 ‍👧 👦 👧 👦 👧 👧 👧 ⛰ 🎶"
	},
	{
		name: "Call me by your name",
		emoji: "👬 🇮🇹 🍑"
	},
	{
		name: "Isle of dogs",
		emoji: "🏝 🐶 🐕 🐩 🐾"
	},
	{
		name: "A league of their own",
		emoji: "👩 👩 ⚾ 🧢 🏆 🇺🇸"
	}
];

let userScore = 0;
let list = [];
let listKey = 0;
shuffleMovies(list);
let movieKey = list[listKey];

const answer = document.getElementById("answer-input");
const movieEmoji = document.getElementById("emoji-field");
const submitAnswerButton = document.getElementById("submit-answer");
const scoreBoard = document.getElementById("score-panel");
const startGameButton = document.getElementById("start-game-button");
const form = document.getElementById("answer-field");

form.addEventListener("submit", handleForm);
movieEmoji.textContent = movieList[movieKey].emoji;
submitAnswerButton.addEventListener("click", checkMovie);

function checkMovie() {
	const userInput = answer.value.toLowerCase();
	answer.value = "";
	console.log(userInput);
	console.log(movieList[movieKey].name);
	if (userInput !== movieList[movieKey].name.toLowerCase()) {
		wrongAnswer();
		if (!movieList[movieKey]) {
			gameEnd();
			return;
		}
		nextMovie();
		return;
	}
	rightAnswer();
	if (!movieList[movieKey]) {
		gameEnd();
		return;
	}
	nextMovie();
}

function nextMovie() {
	scoreBoard.textContent = "Your Score: " + userScore;
	movieEmoji.textContent = movieList[movieKey].emoji;
}

function gameEnd() {
	scoreBoard.textContent = "Final Score: " + userScore + "!";
	movieEmoji.textContent = "You finished!";
}

function rightAnswer() {
	userScore = userScore + 5;
	document.getElementById("rating-field").textContent = "Correct 😁!";
	document.getElementById("rating-field").style.color = "green";
	listKey++;
	movieKey = list[listKey];
}

function wrongAnswer() {
	document.getElementById("rating-field").textContent =
		"Incorrect 😔! This movie was: " + movieList[movieKey].name;
	document.getElementById("rating-field").style.color = "red";
	listKey++;
	movieKey = list[listKey];
}

function handleForm(event) {
	event.preventDefault();
}

function randomKeysList() {
	for (let i = movieList.length - 1; i >= 0; i--) {
		list.push(i);
	}
}

function shuffleMovies(a) {
	randomKeysList();
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
}
