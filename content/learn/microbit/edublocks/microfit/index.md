---
title: "MicroFit - Your very own Step Counter"
draft: false
platform: microbit
language: edublocks
level: Beginner
duration: 10 mins
kit:
    - The micro:bit EduBlocks editor
    - micro:bit
    - micro USB cable
    - battery pack for the micro:bit (optional)
image: /learn/microbit/edublocks/microfit/microfit-cover.png
youtube: 
pdf: /learn/microbit/edublocks/microfit/microfit.pdf
---

::::tutorial-steps

:::step{title="Overview"}
Ever wondered how a smartwatch or fitness band counts your steps? In this project, you're going to build your very own step counter using a micro:bit!

Inside your micro:bit is a clever little sensor called an :g[accelerometer]{slug="accelerometer"}. It can feel when the micro:bit moves. We'll use it to spot every step you take, add them up, and show the total on the :g[LED matrix]{slug="led-matrix"} (the grid of lights on the front).

The best bit? When you're done, you'll have a real working fitness tracker you can pop on and take outside. Don't worry if something doesn't work first time, that's all part of coding. Let's give it a go!

::callout{icon="🎯" color="green"}
**What you'll learn**
- Make and use your own :g[variable]{slug="variable"}
- Use the micro:bit's shake sensor to spot movement
- Show a number on the grid of lights
- Use the buttons to control your project
- Use a :g[while loop]{slug="while-loop"}
- Make decisions with :g[if statement]{slug="if-statement"}s
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="variable,while-loop,if-statement,accelerometer,led-matrix,button"}
::
:::

:::step{title="Set up your micro:bit EduBlocks Editor"}
1. Open your web browser. We recommend Google Chrome or Microsoft Edge.
2. In the address bar type [app.edublocks.org](https://app.edublocks.org/).
3. Under **Create New Project**, select **micro:bit**. Name your project **MicroFit**, and make sure **block** is selected under type.

![Creating a new EduBlocks project](/learn/microbit/edublocks/microfit/ProjectCreation.webp)

4. Select **Create** to open the micro:bit editor.

![The EduBlocks code area](/learn/microbit/edublocks/microfit/CodeArea.webp)

:::

:::step{title="Import the MicroPython library"}
Select **Basic**, then **Imports**, then snap a `from microbit import *` block onto the `#start code here` block.

This imports the micro:bit library into EduBlocks so we can use all the micro:bit's functions.

![Importing the MicroPython library](/learn/microbit/edublocks/microfit/S1_ImportingPythonLibrary.webp)
:::

:::step{title="Set steps to 0"}
1. Select **Variables**, choose **Create a Variable**, and name it **steps**.
2. Snap a `steps = 0` block to the `from microbit import *` block.

This makes a :g[variable]{slug="variable"} called **steps** and starts it at zero.

![Setting steps to zero](/learn/microbit/edublocks/microfit/S2_SettingStepsToZero.webp)
:::

:::step{title="Create a while True loop"}
Select **Basic**, then **Loops**, then snap a `while True:` block onto the `steps = 0` block.

This :g[while loop]{slug="while-loop"} gives us a space to put code that repeats forever.

![Creating a while True loop](/learn/microbit/edublocks/microfit/S3_CreatingWhileLoop.webp)
:::

:::step{title="Detect a shake"}
1. Select **Basic**, then **Logic**, then drag an `if True:` block inside the `while True:` block.
2. Select **Accelerometer**, then snap an `accelerometer.was_gesture("shake")` block onto the `if` block where it says **True**.

This :g[if statement]{slug="if-statement"} runs its code only when the micro:bit feels a shake.

![Creating the shake function](/learn/microbit/edublocks/microfit/S4_CreatingTheShakeFunction.webp)
:::

:::step{title="Increase the steps"}
1. Select **Variables**, then snap a `steps = 0` block inside the `if accelerometer.was_gesture("shake"):` block.
2. Change the **=** to **+=** and the **0** to **1**.

Now every detected shake adds one to your step count.

![Increasing the steps](/learn/microbit/edublocks/microfit/S5_IncreasingStepsBy.webp)
:::

:::step{title="Pause the code"}
Select **Basic**, then **Statements**, then snap a `sleep (1000)` block **below** the `if accelerometer.was_gesture("shake"):` block, lined up with the `if` (inside the `while True:` loop, but not inside the `if`). Change **1000** to **500**.

This pauses for half a second so the loop has time to notice the button press we'll add next.

![Pausing the code](/learn/microbit/edublocks/microfit/S6_PausingTheCode.webp)
:::

:::step{title="Reset the steps with button A"}
1. Select **Basic**, then **Logic**, then snap an `if True:` block onto the `sleep (500)` block.
2. Select **Buttons**, then snap a `button_a.was_pressed()` block onto the `if` block where it says **True**.
3. Select **Variables**, then snap a `steps = 0` block inside the `if button_a.was_pressed():` block.

Pressing :g[button]{slug="button"} A now resets your step count back to zero.

![Resetting steps to zero](/learn/microbit/edublocks/microfit/S7_ResettingSteps.webp)
:::

:::step{title="Show the number of steps"}
1. Select **Display**, then snap a `display.scroll ("Hello World")` block just below the `if button_a.was_pressed():` block.
2. Select **Variables**, then snap a `steps` block onto the `display.scroll` block, over the words **"Hello World"**.

This block sits inside the loop but not inside the button A block, so your steps scroll across the :g[LED matrix]{slug="led-matrix"} all the time, not just when you press A.

![Displaying the number of steps](/learn/microbit/edublocks/microfit/S8_DisplayingSteps.webp)
:::

:::step{title="Downloading the Code"}
1. Connect the micro:bit to the computer with the micro USB cable.
2. Select **Connect** and follow the on-screen prompts to pair the micro:bit with your web browser.
3. Select **Download** to send the code to your micro:bit.
:::

:::step{title="Run it and Watch"}
### In the web browser
EduBlocks has a built-in micro:bit simulator, handy if you haven't got a micro:bit to hand.

1. On the right-hand side of the screen, select **Simulator**.
2. From the accelerometer menu below the simulator, select **Shake**.
3. Select **Send**. This simulates a shake and shows a number on the simulated micro:bit.

![The EduBlocks simulator](/learn/microbit/edublocks/microfit/SimulatorPreview.webp)

### On a real micro:bit
Once your code's downloaded, give the micro:bit a shake. Each shake bumps your step count up by one on the LED matrix. Pop a battery pack on, attach it to your wrist or ankle, and head outside to watch your steps climb.
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Set yourself a step goal! Add another `if` block inside your `while True:` loop that checks when `steps >= 20`. When you hit it, use a `display.show` block to show a happy face to celebrate, then press button A to reset and go again.
::
:::

:::step{title="Stuck? Quick fixes"}

|Problem | Try this |
| --- | --- |
| The number doesn't go up when I shake it | Check your `steps += 1` block is inside the `if accelerometer.was_gesture("shake"):` block. Give the micro:bit one firm, clear shake. |
| The count jumps up by lots at once | A big wobble can look like several shakes. Try one single, definite shake, and check the `sleep(500)` block is inside your `while True:` loop so each shake has time to register. |
| Nothing shows on the LED matrix | Make sure the `steps` block is inside the `display.scroll` block (in place of "Hello World"), and that `display.scroll` is inside your `while True:` loop. |
| Button A won't reset the steps | Check the `steps = 0` block is inside the `if button_a.was_pressed():` block. |
| The number doesn't update while I keep shaking | Don't worry, it's still counting! The micro:bit can't show the new number while it's busy scrolling the last one. Stop shaking for a moment and the latest total will scroll across. |
| My code won't download to the micro:bit | Use a data USB cable (not a charge-only one), make sure the micro:bit is paired, and try a different USB port. |

:::

::::