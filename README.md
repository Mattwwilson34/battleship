# Battleship Game
This repository contains a browser-based implementation of the classic game of Battleship. The project focuses on using object-oriented programming principles and test-driven development.

[Link to Game](https://mattwwilson34.github.io/battleship/)

![ezgif com-gif-maker (19)](https://user-images.githubusercontent.com/49503056/215547830-9d590768-5602-41dd-8d9d-dfece9033ebc.gif)

## Project Focus
The main focus of this project was to practice and demonstrate ***object-oriented programming and Test-driven development.***

The game consists of multiple objects, such as Ship, Gameboard, and Player, which are all implemented as factory functions. Each object has its own methods and properties that are used to simulate the behavior of the game. The objects interact with each other to make the game work.

For example, the Ship factory function creates objects that have a length property and a hit() method that increases the number of hits the ship has taken. The isSunk() method calculates whether or not the ship has been sunk based on its length and number of hits.

The Gameboard factory function creates objects that can place ships at specific coordinates, receive attacks, and keep track of missed attacks. The Gameboard also has a receiveAttack() method that determines if an attack hit a ship and calls the hit() method on the correct ship, or records the coordinates of the missed shot.

The Player factory function creates objects that can take turns playing the game by attacking the enemy Gameboard. The game is played against a computer player, which makes random plays but ensures that moves are legal (i.e. it doesn't shoot the same coordinate twice).

The project also implements a main game loop and a module for DOM interaction. The game loop sets up a new game by creating Players and Gameboards, and the DOM interaction module is used to display the gameboards and take user input for attacking.

Throughout the development of this project, a test-driven approach was used. Unit tests were written for all public methods and properties that are used outside of the objects. These tests ensure that the objects are functioning as expected and catch any regressions early on in development.

## Usage
To run the game, simply open the index.html file in a browser. You can play against the computer by clicking on a coordinate in the enemy Gameboard. The game ends when all of one player's ships have been sunk.
