---
title: "MicroFit - Your very own Step Counter"
draft: false
platform: microbit
language: python
level: Beginner
duration: 10 mins
kit:
    - The micro:bit Python editor
    - micro:bit
    - micro USB cable
    - battery pack for the micro:bit (optional)
image: /learn/microbit/python/microfit/microfit-cover.png
youtube: 
pdf: /learn/microbit/python/microfit/microfit.pdf
---

::::tutorial-steps

:::step{title="Overview"}
Ever wondered how a smartwatch or fitness band counts your steps? In this project, you're going to build your very own step counter using a :g[micro:bit]{slug="micro-bit"}!

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

:::step{title="Set up your micro:bit Python Editor"}
1. Open your web browser. We recommend Google Chrome or Microsoft Edge.
2. In the address bar type **[python.microbit.org](https://python.microbit.org)**.
3. Give your project a name: select the project name box at the top of the editor and type **MicroFit**.
4. Close the left-hand panel by selecting the **arrow** pointing to the left.

![Closing the left-hand panel](/learn/microbit/python/microfit/ClosingPanel.webp)

5. Delete the code on lines **5 to 9** in the main code area.

![The Python editor code area](/learn/microbit/python/microfit/CodeArea.webp)
:::

:::step{title="Create a variable"}
On line 3, type `steps = 0` to create a :g[variable]{slug="variable"} called **steps**, set to **0** for when the code starts. Press **Enter** to make a new line.

![Creating the steps variable](/learn/microbit/python/microfit/S1_CreatingVariable.webp)
:::

:::step{title="Create a while True loop"}
Type `while True:` and press **Enter**. This creates a :g[while loop]{slug="while-loop"}, so anything inside it runs while the condition stays true. Notice your cursor automatically indents, that's how Python shows what's inside the loop.

![Creating a while True loop](/learn/microbit/python/microfit/S2_CreatingWhileLoop.webp)
:::

:::step{title="Detect a shake"}
1. Type `if accelerometer.was_gesture('shake'):` and press **Enter**. The cursor indents again.
2. Type `steps += 1`.

This :g[if statement]{slug="if-statement"} adds **1** to your **steps** variable every time the micro:bit detects a shake.

![Detecting a shake](/learn/microbit/python/microfit/S3_DetectingAShake.webp)
:::

:::step{title="Pause the code"}
Type `sleep(500)`. This pauses the code for half a second, giving the micro:bit time to do other things, like check for the button press we'll add next. Press **Enter**, then delete the indent so the cursor lines back up with the `if accelerometer.was_gesture('shake'):` line.

![Pausing the code](/learn/microbit/python/microfit/S4_PausingTheCode.webp)
:::

:::step{title="Reset the steps with button A"}
1. Type `if button_a.was_pressed():` and press **Enter**. This detects a :g[button]{slug="button"} press, and the cursor indents.
2. Type `steps = 0` to reset the **steps** variable back to **0** when button **A** is pressed.
3. Press **Enter**, then delete the indent so the cursor lines back up with the `if button_a.was_pressed():` line.

![Resetting the steps to zero](/learn/microbit/python/microfit/S5_ResettingSteps.webp)
:::

:::step{title="Show the number of steps"}
Type `display.scroll(steps)`. This scrolls the number of steps across the :g[LED matrix]{slug="led-matrix"} on the front of the micro:bit.

![Displaying the number of steps](/learn/microbit/python/microfit/S6_DisplayingSteps.webp)
:::

:::step{title="Downloading Your Code"}
1. Connect the micro:bit to the computer with the micro USB cable.
2. Select the **three dots** next to **Send to micro:bit**.
3. Select **Connect** and follow the on-screen prompts.
4. Select **Send to micro:bit** to download the code.

![Downloading your code](/learn/microbit/python/microfit/DownloadingCode.webp)
:::

:::step{title="Run it and Watch"}
### In the web browser
The Python editor has a built-in micro:bit simulator, handy if you haven't got a micro:bit to hand. Below the simulator you'll see the **shake** function is already selected. Select the **play** button next to it to simulate a shake and show your step count on the LED matrix.

![The Python editor simulator](/learn/microbit/python/microfit/SimulatorDemo.webp)

### On a real micro:bit
Once your code's downloaded, give the micro:bit a shake and watch the step counter climb. Why not go further? Attach a battery pack, strap the micro:bit to you or pop it in your pocket, and head outside to see how many steps you can rack up.
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Set yourself a step goal! Add another `if` statement inside your `while True:` loop that checks `if steps >= 20:`. When you hit it, type `display.show(Image.HAPPY)` to show a happy face and celebrate, then press button A to reset and go again.
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| The number doesn't go up when I shake it | Check your `steps += 1` line is indented inside the `if accelerometer.was_gesture('shake'):` statement. Give the micro:bit one firm, clear shake. |
| The count jumps up by lots at once | A big wobble can look like several shakes. Try one single, definite shake, and check the `sleep(500)` line is inside your `while True:` loop so each shake has time to register. |
| Nothing shows on the LED matrix | Make sure you've typed `display.scroll(steps)` with `steps` inside the brackets, and that the line is indented inside your `while True:` loop. |
| The number doesn't change straight away when I shake fast | That's okay, it's still counting! The micro:bit can't show the new number while the last one is still scrolling. Stop shaking for a moment and your latest total will pop up. |
| Button A won't reset the steps | Check the `steps = 0` line is indented inside the `if button_a.was_pressed():` statement. |
| My code won't download to the micro:bit | Use a data USB cable (not a charge-only one), make sure the micro:bit is paired, and try a different USB port. |

:::
::::