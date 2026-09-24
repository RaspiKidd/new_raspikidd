---
title: "Environment Detective: Exploring Our World with micro:bit"
platform: microbit
language: python
level: Beginner
duration: 45 mins
kit:
    - micro:bit
    - micro:bit Python editor
    - Micro USB cable
    - Battery pack (optional)
image: /learn/microbit/python/environment-detective/EnvironmentDetectiveCover.webp
youtube: ""
pdf: /learn/microbit/python/environment-detective/environment-detective.pdf
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

You will write Python code to make the readings appear on the micro:bit’s :g[LED matrix]{slug="led-matrix"}.

::callout{icon="🎯" color="green"}
**What you'll learn**

- Read the micro:bit’s temperature sensor
- Display numbers, pictures and letters on the LED matrix
- Detect light levels and make the micro:bit react
- Use the compass to find a direction
- Use Python if statements to make decisions
- Use buttons, shake gestures and variables in your code
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

:::step{title="Set up the Python editor"}
First, let’s prepare the micro:bit Python editor.

1. Open your favourite web browser. Google Chrome or Microsoft Edge works well.
2. Go to [python.microbit.org](https://python.microbit.org).
3. Close the panel on the left by selecting the arrow pointing left.
4. Find the starter code in the main coding area.
5. Delete the code from line 5 to line 9.
6. Keep this first line:

```python
from microbit import *
```

Your editor should now be ready for your Environment Detective code.

![Closing the side panel and clearing the starter code](/learn/microbit/python/environment-detective/ClosingPanel.webp)

::callout{icon="💡" color="gray"}
`from microbit import *` gives your Python program access to the micro:bit’s display, buttons, sensors and other tools.
::
:::

:::step{title="Prepare your Python code"}
We need to prepare the compass and create a loop that keeps checking the sensors.

Under `from microbit import *`, type:

```python
compass.calibrate()

while True:
```

Press **Enter** after `while True:`.

The cursor should move inwards automatically. This space at the beginning of the line is called an **indent**.

![Setting up the compass and while True loop](/learn/microbit/python/environment-detective/S1_SettingUpCodeArea.webp)

::callout{icon="🔁" color="gray"}
`while True:` creates a loop. Everything indented underneath it will keep running while the micro:bit is switched on.
::

::callout{icon="⌨️" color="gray"}
**Python punctuation matters**

Remember to include the colon at the end of `while True:`. Python uses colons and indentation to work out which instructions belong together.
::
:::

:::step{title="Sense the temperature"}
First, we will make the micro:bit show the temperature when you shake it.

Underneath `while True:`, type:

```python
    if accelerometer.was_gesture("shake"):
        display.scroll(temperature())
        sleep(2000)
        display.clear()
```

Use four spaces for each level of indentation.

Your code should look like this:

![Python code that displays the temperature after a shake](/learn/microbit/python/environment-detective/S2_TemperatureSensing.webp)

Here’s what this bit of code is doing:

- `accelerometer.was_gesture("shake")` checks whether the micro:bit was shaken.
- `display.scroll(temperature())` reads and displays the temperature.
- `sleep(2000)` waits for two seconds.
- `display.clear()` clears the LED matrix.

::callout{icon="🌡️" color="green"}
The micro:bit displays temperature in degrees Celsius.
::

::callout{icon="💡" color="gray"}
The number inside `sleep()` is measured in milliseconds. There are 1,000 milliseconds in one second, so `sleep(2000)` waits for two seconds.
::
:::

:::step{title="Sense the light level"}
Next, we will use button A to check whether the room is dark.

Make sure the new `if` line is aligned with the temperature `if` line.

Add this code underneath the temperature section:

```python
    if button_a.was_pressed():
        if display.read_light_level() < 100:
            display.show(Image.HAPPY)
        else:
            display.clear()
        sleep(500)
```

Your light-sensing code should look like this:

![Python code that shows a happy face when the light level is below 100](/learn/microbit/python/environment-detective/S3_LightSensing.webp)

When you press button A:

- The micro:bit reads the light level.
- If the reading is below `100`, it shows a happy face.
- Otherwise, it clears the display.
- It waits for half a second before checking again.

The code uses an :g[if statement]{slug="if-statement"} and a :g[comparison operator]{slug="comparison-operators"} to make this decision.

::callout{icon="🔦" color="gray"}
Cover the micro:bit with your hand and press button A. Then move it somewhere brighter and try again.
::

::callout{icon="💡" color="gray"}
The `<` symbol means **smaller than**. The line `display.read_light_level() < 100` asks whether the light reading is smaller than 100.
::
:::

:::step{title="Build the compass code"}
Now we will use button B to display the compass direction as a number.

Add this code underneath the button A section:

```python
    if button_b.was_pressed():
        display.scroll(compass.heading())
        sleep(500)
```

Your code should look like this:

![Python code that displays the compass heading as a number](/learn/microbit/python/environment-detective/S4_CompassSensingEasy.webp)

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

Test this version before moving on. Once it works, we will replace it with code that displays letters instead.
:::

:::step{title="Show compass letters"}
Numbers are useful, but letters are easier to recognise quickly.

Remove this version of the button B code:

```python
    if button_b.was_pressed():
        display.scroll(compass.heading())
        sleep(500)
```

Replace it with:

```python
    if button_b.was_pressed():
        direction = compass.heading()

        if direction > 315 or direction < 45:
            display.show("N")
        elif direction < 135:
            display.show("E")
        elif direction < 225:
            display.show("S")
        else:
            display.show("W")

        sleep(500)
```

Your finished compass code should look like this:

![The finished Python compass code showing N, E, S or W](/learn/microbit/python/environment-detective/S5_CompassSensingTricky.webp)

### How the code works

This line creates a :g[variable]{slug="variable"} called `direction`:

```python
direction = compass.heading()
```

It stores the current compass heading as a number.

The code then checks that number:

- More than `315` or less than `45` means north
- Less than `135` means east
- Less than `225` means south
- Anything else means west

::callout{icon="🍕" color="gray"}
**How your code decides**

Imagine the compass is a pizza cut into four slices. The code checks which slice the compass number has landed in, then shows the letter for that direction.
::
:::

:::step{title="Check the finished code"}
Your complete Python program should now look like this:

```python
from microbit import *

compass.calibrate()

while True:
    if accelerometer.was_gesture("shake"):
        display.scroll(temperature())
        sleep(2000)
        display.clear()

    if button_a.was_pressed():
        if display.read_light_level() < 100:
            display.show(Image.HAPPY)
        else:
            display.clear()
        sleep(500)

    if button_b.was_pressed():
        direction = compass.heading()

        if direction > 315 or direction < 45:
            display.show("N")
        elif direction < 135:
            display.show("E")
        elif direction < 225:
            display.show("S")
        else:
            display.show("W")

        sleep(500)
```

Before you run it, check:

- Every `if`, `elif`, `else` and `while` line ends with a colon.
- Each section has the correct indentation.
- Words such as `Image.HAPPY` use the correct capital letters.
- Every opening bracket has a matching closing bracket.
- The words inside quotation marks are spelt correctly.

::callout{icon="🐛" color="gray"}
Python is very precise. A missing colon, bracket or space can stop the program from running, so check one line at a time.
::
:::

:::step{title="Download your code"}
Your environment detector is ready to transfer to the micro:bit.

1. Connect the micro:bit to your computer using the micro USB cable.
2. Select the **three dots** next to **Send to micro:bit**.
3. Follow the instructions on the screen.
4. Select **Connect** when asked.
5. Choose your micro:bit from the list.
6. Select **Send to micro:bit** to download the code.

![Sending the Python code to the micro:bit](/learn/microbit/python/environment-detective/DownloadingCode.webp)

::callout{icon="🔌" color="gray"}
If the editor cannot find the micro:bit, try another USB cable. Some cables can only charge devices and cannot transfer code.
::
:::

:::step{title="Test your environment detector"}
You can test the project using the simulator or a real micro:bit.

### Test the simulator

The Python editor has a built-in micro:bit simulator.

![Testing the Environment Detective project in the Python simulator](/learn/microbit/python/environment-detective/SimDemo.gif)

#### Temperature

1. Find the shake control underneath the simulator.
2. Select the play button next to it.
3. Watch the temperature appear on the LED matrix.
4. Move the temperature slider and test it again.

#### Light

1. Find the sun symbol underneath the simulator.
2. Move its slider to change the light level.
3. Press button A on the simulator.
4. A happy face should appear when the light level is below `100`.

#### Compass

1. Find the compass control underneath the simulator.
2. Move the slider to change the direction.
3. Press button B.
4. Watch the direction letter appear on the LED matrix.

### Test a real micro:bit

- **Temperature:** Shake the micro:bit to display the temperature.
- **Light:** Cover the micro:bit with your hand and press button A.
- **Compass:** Turn in a different direction and press button B.

::callout{icon="💡" color="gray"}
**Compass calibration**

When the micro:bit starts, it may ask you to tilt it around until every LED is switched on.

This is called calibrating. It helps the compass work out which direction is north.
::
:::

:::step{title="Try it yourself"}
::try-it
**Challenge: Build an environment warning system**

Can you make the micro:bit warn you when the room gets too cold?

Inside the temperature section, add another `if` statement that checks whether `temperature()` is below a number you choose, such as `15`.

You could start with:

```python
        if temperature() < 15:
            display.show(Image.SAD)
```

You could make the micro:bit show:

- `Image.SAD`
- `Image.SKULL`
- A picture of your own

Can you create another warning for the light sensor?

Try changing the button A code so the micro:bit shows a warning picture when the room gets too dark.
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| Nothing happens when I shake the micro:bit | Check that the line begins with `if` and ends with a colon: `if accelerometer.was_gesture("shake"):`. Make sure the display instructions are indented underneath it. |
| The temperature looks too warm | This is normal. The sensor is on the micro:bit itself, so it can warm up after the board has been switched on or held in your hand. |
| The happy face does not appear | Cover the micro:bit with your hand. Check that your comparison says `display.read_light_level() < 100` and that `display.show(Image.HAPPY)` is indented underneath it. |
| Button B shows the wrong direction | Complete the compass calibration by tilting the micro:bit until every LED has lit up. |
| The compass always shows W | Check the numbers in your comparisons: `315` and `45` for north, `135` for east and `225` for south. |
| I see an error message | Check your spelling, brackets, quotation marks, colons and indentation. Python needs these to be exact. |
| The code keeps showing a number before the letter | Check that you removed the first, easier button B section before adding the letter version. |
| My code will not download | Try another USB cable or USB socket. Check that the micro:bit is connected to the Python editor. |

::callout{icon="🐛" color="green"}
Don’t worry if it doesn’t work first time. That’s how coding works! Check one line at a time and compare it with the pictures.
::
:::

::::