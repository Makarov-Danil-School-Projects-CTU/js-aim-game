Keywords: JavaScript, Game, DOM

# 📝 Task Objective: Create a Clicker Game Class
Create a Clicker game class that functions as a "component" with a renderTo(element) method.

## ⚙️ Configurable Parameters:

- **Game Field Size:**
Configure the game field size in pixels (width = height).
Maximum Weight of the "Ball":
The maximum weight of the ball (the minimum weight is always 1).

- **Ball Switching Frequency:** Configure how often the balls switch positions.

- **Victory Point Limit:** The number of points considered a "win."

## 🎮 Game Requirements:

- **Automatic Start:** The game should start automatically when rendered using the renderTo(element) method.

- **Ball Size vs. Weight:** The larger the ball's weight, the smaller its size should be.

## End of Game:

When the game ends, the balls should stop appearing, and a message with the total game time should be displayed.

## 🛠️ Example of Game Creation and Rendering:

```
// Size: 400px x 400px<br>
// Highest weight: 5<br>
// Delay: 1000ms<br>
// Victory limit: 30<br>

const clicker = new Clicker(400, 5, 1000, 30)<br>
clicker.renderTo(document.body)<br>
```

### 📝 Bonus 1: Expand the Game Class with Additional Methods<br>
Expand the Clicker game class with the following methods:
1. reset() - Resets the game state.<br>
2. pause() - Pauses the game.<br>
3. unpause() - Resumes the game.<br>

Create a control panel with buttons for each of these methods.<br>

### 📝 Bonus 2: Custom Game State Display Behavior<br>
Modify the game so that you can specify custom behavior for displaying the game state when creating the game.

