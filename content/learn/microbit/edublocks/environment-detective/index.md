---
title: "Environment Detective: Exploring Our World with micro:bit"
platform: microbit
language: edublocks
level: Beginner
duration: 45 mins
kit:
    - micro:bit
    - EduBlocks coding editor
    - Micro USB cable
    - Battery pack (optional)
image: /learn/microbit/edublocks/environment-detective/EnvironmentDetectiveCover.webp
youtube: ""
pdf: /learn/microbit/edublocks/environment-detective/environment-detective.pdf
draft: false
---

::::tutorial-steps

:::step{title="Overview"}
Ever wondered how technology can help us understand the world around us?

In this project, you are going to become an environment detective using your :g[micro:bit]{slug="micro-bit"} and its built-in sensors.

Just like your senses help you explore the world, the micro:bit can tell you:

- How warm or cold it is using its :g[temperature sensor]{slug="temperature-sensor"}
- How bright or dark it is using its :g[light sensor]{slug="light-sensor"}
- Which direction you are facing using its :g[compass]{slug="compass"}

You will make the readings appear on the micro:bit’s :g[LED matrix]{slug="led-matrix"}.

::callout{icon="🎯" color="green"}
**What you'll learn**

- Read the temperature using the micro:bit’s temperature sensor
- Use the LED matrix to show numbers, pictures and letters
- Detect light levels and make the micro:bit react
- Use the compass to find a direction
- Use buttons and a shake gesture to control your code
- Use blocks based on Python code
::

Are you ready? Let’s begin our detective adventure!
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="micro-bit,temperature-sensor,light-sensor,compass,led-matrix,variable,if-statement,comparison-operators"}
::
:::

:::step{title="Set up EduBlocks"}
First, let’s create a new EduBlocks project.

1. Open your favourite web browser. Google Chrome or Microsoft Edge works well.
2. Go to [app.edublocks.org](https://app.edublocks.org).
3. Find **Create New Project**.
4. Select **micro:bit**.
5. Name your project **Environment Detective**.
6. Make sure **Blocks** is selected as the project type.
7. Select **Create**.

The EduBlocks micro:bit editor will now open.

![Creating a new micro:bit project in EduBlocks](/learn/microbit/edublocks/environment-detective/ProjectSetup.webp)

::callout{icon="💡" color="gray"}
EduBlocks lets you build Python code using colourful blocks. The blocks snap together and help you see how the finished Python code is organised.
::
:::

:::step{title="Prepare the code area"}
We need to import the micro:bit tools, prepare the compass and add a loop that keeps checking the sensors.

1. Open **Basic**.
2. Select **Imports**.
3. Drag a `from microbit import *` block onto the `# Start code here` block.
4. Open **Compass**.
5. Drag a `compass.calibrate()` block underneath the import block.
6. Open **Basic**.
7. Select **Loops**.
8. Drag a `while True:` block underneath `compass.calibrate()`.

Your starting code should look like this:

![The EduBlocks coding area with the import, compass calibration and while loop](/learn/microbit/edublocks/environment-detective/CodeArea.webp)

::callout{icon="🔁" color="gray"}
The `while True:` block creates a loop. Everything placed inside it will keep running while the micro:bit is switched on.
::
:::

:::step{title="Sense the temperature"}
First, we will make the micro:bit display the temperature when you shake it.

1. Open **Basic**.
2. Select **Logic**.
3. Drag an `if True:` block inside the `while True:` block.
4. Open **Accelerometer**.
5. Drag `accelerometer.was_gesture("shake")` onto the `True` section of the `if` block.
6. Open **Display**.
7. Drag `display.scroll(0)` inside the shake block.
8. Change the `0` to `temperature()`.
9. Open **Basic**.
10. Select **Statements**.
11. Add `sleep(1000)` underneath `display.scroll(temperature())`.
12. Change `1000` to `2000`.
13. Open **Display**.
14. Add `display.clear()` underneath `sleep(2000)`.

Your code should look like this:

![The EduBlocks code that displays the temperature after a shake](/learn/microbit/edublocks/environment-detective/S1_TemperatureSensing.webp)

Here’s what this bit of code is doing:

- The micro:bit waits until it detects a shake.
- It reads the temperature.
- It scrolls the temperature across the LED matrix.
- It waits for two seconds.
- It clears the display.

::callout{icon="🌡️" color="green"}
The micro:bit displays temperature in degrees Celsius.
::
:::

:::step{title="Sense the light level"}
Next, we will use button A to check whether the room is dark.

1. Open **Basic**.
2. Select **Logic**.
3. Add another `if True:` block underneath the whole temperature section.
4. Open **Buttons**.
5. Drag `button_a.was_pressed()` onto the `True` section.
6. Add another `if True:` block inside the button A block.
7. Open **Basic**, then **Logic**.
8. Drag a `0 == 0` comparison onto `True`.
9. Change `==` to `<`.
10. Add `display.read_light_level()` before the `<` symbol.
11. Change the second `0` to `100`.

Your comparison should now say:

`display.read_light_level() < 100`

### Show a picture when it is dark

1. Open **Display**.
2. Add `display.show(10)` inside the light-level check.
3. Add an `Image.HEART` block to replace `10`.
4. Change `HEART` to `HAPPY`.
5. Open **Basic**, then **Logic**.
6. Add an `else:` block underneath the light-level check.
7. Open **Display**.
8. Add `display.clear()` inside `else:`.
9. Open **Basic**, then **Statements**.
10. Add `sleep(1000)` underneath the light section.
11. Change `1000` to `500`.

Your light-sensing code should look like this:

![The EduBlocks code that shows a happy face when the light level is below 100](/learn/microbit/edublocks/environment-detective/S2_LightSensing.webp)

When you press button A:

- The micro:bit checks the light level.
- If the light level is below `100`, it shows a happy face.
- If the light level is `100` or higher, it clears the display.

The code uses an :g[if statement]{slug="if-statement"} and a :g[comparison operator]{slug="comparison-operators"} to make this decision.

::callout{icon="🔦" color="gray"}
Cover the micro:bit with your hand and press button A. Then move it somewhere brighter and try again.
::
:::

:::step{title="Build the compass code"}
Now we will use button B to display the compass direction as a number.

1. Open **Basic**.
2. Select **Logic**.
3. Add another `if True:` block underneath the whole button A section.
4. Open **Buttons**.
5. Drag `button_b.was_pressed()` onto `True`.
6. Open **Display**.
7. Add `display.scroll(0)` inside the button B block.
8. Open **Compass**.
9. Drag `compass.heading()` onto the `0`.
10. Open **Basic**, then **Statements**.
11. Add `sleep(1000)` underneath the display block.
12. Change `1000` to `500`.

Your code should look like this:

![The EduBlocks code that displays the compass heading as a number](/learn/microbit/edublocks/environment-detective/S3_CompassSensingEasy.webp)

When you press button B, the micro:bit will display a number between `0` and `359`.

| Direction | Compass heading |
| --- | ---: |
| North | 0 |
| East | 90 |
| South | 180 |
| West | 270 |

::callout{icon="🧭" color="gray"}
The compass works like a circle. After 359 degrees, it returns to 0 degrees.
::
:::

:::step{title="Show compass letters"}
Numbers are useful, but letters are easier to recognise quickly.

We will now create a second button B section that shows **N**, **E**, **S** or **W**.

### Create the direction variable

1. Add another `if True:` block underneath the compass-number section.
2. Open **Buttons**.
3. Add `button_b.was_pressed()` to the `True` section.
4. Open **Variables**.
5. Select **Create a Variable**.
6. Name the variable `direction`.
7. Add `direction = 0` inside the button B block.
8. Open **Compass**.
9. Replace `0` with `compass.heading()`.

The block should now say:

`direction = compass.heading()`

A :g[variable]{slug="variable"} stores information that can change. In this project, the `direction` variable stores the current compass heading.

### Add the north check

1. Open **Basic**, then **Logic**.
2. Add an `if True:` block underneath `direction = compass.heading()`.
3. Add a `True and True` block onto `True`.
4. Change `and` to `or`.
5. Add a comparison block to the first `True`.
6. Build the comparison `direction > 315`.
7. Add another comparison to the second `True`.
8. Build the comparison `direction < 45`.
9. Open **Display**.
10. Add `display.show("Hello")` inside the `if` block.
11. Change `Hello` to `N`.

The first check should now say:

`if direction > 315 or direction < 45:`

### Add east

1. Open **Basic**, then **Logic**.
2. Add an `elif True:` block underneath the north section.
3. Build the comparison `direction < 135`.
4. Add `display.show("Hello")` inside it.
5. Change `Hello` to `E`.

### Add south

1. Add another `elif True:` block.
2. Build the comparison `direction < 225`.
3. Add `display.show("Hello")` inside it.
4. Change `Hello` to `S`.

### Add west

1. Add an `else:` block underneath the south section.
2. Add `display.show("Hello")` inside it.
3. Change `Hello` to `W`.
4. Add `sleep(500)` underneath the completed compass section.

Your finished compass code should look like this:

![The finished EduBlocks compass code showing N, E, S or W](/learn/microbit/edublocks/environment-detective/S4_CompassSensingTricky.webp)

::callout{icon="🍕" color="gray"}
**How your code decides**

Imagine the compass is a pizza cut into four slices. The code checks which slice the compass number has landed in, then shows the letter for that direction.
::
:::

:::step{title="Download your code"}
Your environment detector is ready to transfer to the micro:bit.

1. Connect the micro:bit to your computer using the micro USB cable.
2. In EduBlocks, select **Connect**.
3. Follow the instructions on the screen to pair your micro:bit.
4. If your browser asks for permission, choose the micro:bit from the list.
5. Select **Connect**.
6. Select **Flash** to send the code to the micro:bit.

::callout{icon="🔌" color="gray"}
If EduBlocks cannot find the micro:bit, try another USB cable. Some cables can only charge devices and cannot transfer code.
::
:::

:::step{title="Test your environment detector"}
When the micro:bit first starts, it may ask you to tilt it in different directions until all the LEDs have lit up.

This is called calibrating. It helps the compass work out which direction is north.

### Test the temperature

1. Shake the micro:bit.
2. Watch the temperature scroll across the LED matrix.
3. Move to a different room or go outside and try again.

### Test the light level

1. Cover the micro:bit with your hand.
2. Press button A.
3. A happy face should appear if the light level is below `100`.
4. Move the micro:bit somewhere brighter and press button A again.

### Test the compass

1. Face one direction.
2. Press button B.
3. Look at the letter on the LED matrix.
4. Turn around and press button B again.

You should see **N**, **E**, **S** or **W**, depending on which direction the micro:bit is facing.

::callout{icon="💡" color="gray"}
If the compass gives an unexpected answer, calibrate it again and move away from large metal objects or magnets.
::
:::

:::step{title="Try it yourself"}
::try-it
**Challenge: Build an environment warning system**

Can you make the micro:bit warn you when the room gets too cold?

Inside the `if accelerometer.was_gesture("shake"):` section, add another `if` block.

Make it check whether `temperature()` is below a number you choose, such as `15`.

If it is too cold, make the micro:bit show:

- A sad face
- A snowflake
- A warning picture of your own

Can you create another warning for the light sensor?

Try changing the button A code so the micro:bit shows a warning picture when the room gets too dark.
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| Nothing happens when I shake the micro:bit | Check that `display.scroll(temperature())` is inside `if accelerometer.was_gesture("shake"):`. Give the micro:bit one firm, clear shake. |
| The temperature looks too warm | This is normal. The sensor is on the micro:bit itself, so it can warm up after the board has been switched on or held in your hand. |
| The happy face does not appear | Cover the micro:bit with your hand. Check that your comparison says `display.read_light_level() < 100`. |
| Button B shows the wrong direction | Complete the compass calibration by tilting the micro:bit until every LED has lit up. |
| The compass always shows W | Check the numbers in your comparisons: `315` and `45` for north, `135` for east and `225` for south. |
| I cannot find a block | Check the correct category: **Basic**, **Display**, **Buttons**, **Accelerometer**, **Compass**, **Logic**, **Variables** or **Statements**. |
| My code will not download | Try another USB cable or USB socket. Check that the micro:bit is paired with EduBlocks. |

::callout{icon="🐛" color="green"}
Don’t worry if it doesn’t work first time. That’s how coding works! Check one block at a time and compare it with the pictures.
::
:::

::::