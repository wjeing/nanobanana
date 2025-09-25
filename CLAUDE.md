# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a simple HTML-based Snake game implemented as a single standalone file. The project is a complete browser-based game using vanilla HTML, CSS, and JavaScript.

## Project Structure

- `snake_game.html` - A complete standalone Snake game implementation with embedded CSS and JavaScript

## Running the Game

To run the Snake game:
```bash
# Open the game in your default browser
start snake_game.html  # Windows
open snake_game.html   # macOS
xdg-open snake_game.html  # Linux
```

Or simply double-click the HTML file to open it in your browser.

## Game Architecture

The game is built using HTML5 Canvas for rendering and vanilla JavaScript for game logic. Key components:

- **Game Loop**: Uses `setInterval()` with 100ms intervals for game updates
- **Canvas Rendering**: 400x400 pixel canvas with 20px grid system
- **Game State**: Tracks snake position, food location, score, and game running status
- **Input System**: Keyboard event listeners for arrow keys and spacebar controls

The game follows a typical game loop pattern: input handling → game state updates → rendering → repeat.