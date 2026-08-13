---
title: "Rock Paper Scissors"
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
image: /learn/microbit/edublocks/rock-paper-scissors/RockPaperScissors_Cover.png
youtube: 
pdf: /learn/microbit/edublocks/rock-paper-scissors/rock-paper-scissors.pdf
---

::::tutorial-steps

:::step{title="Overview"}
In this project you will learn how to code your :g[micro:bit]{slug="micro-bit"} to play rock, paper, scissors using gestures and the :g[LED matrix]{slug="led-matrix"}. We will start by understanding the basic game logic and how to present rock, paper, and scissors on the LED matrix. You will discover how to use :g[random]{slug="random"} selection for the micro:bit's choice and show it on the LED matrix, so players can see what the micro:bit picked and work out whether they have won. Through this project you will develop fundamental coding concepts like :g[variables]{slug="variable"}, conditionals and random numbers while creating something fun and interactive. By the end you will have a fully functional game that you can play with friends or challenge the micro:bit yourself. 

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to :g[import Python libraries]{slug="importing-libraries"}
- How to use a :g[while loop]{slug="while-loop"}
- How to create and use a :g[variable]{slug="variable"}
- How to use the :g[accelerometer]{slug="accelerometer"}
- How to display your own images on the :g[LED matrix]{slug="led-matrix"}
- How to use :g[if]{slug="if-statement"}, elif and else statements
- How to use :g[comparison operators]{slug="comparison-operators"}
- How to :g[randomise]{slug="random"} choices
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="importing-libraries,variable,while-loop,if-statement,accelerometer,led-matrix,comparison-operators,random"}
::
:::

:::step{title="Set up your micro:bit EduBlocks Editor"}
1. Open your web browser. We recommend Google Chrome or Microsoft Edge.
2. In the address bar type [app.edublocks.org](https://app.edublocks.org/).
3. Under **Create New Project**, select **micro:bit**. Name your project **Rock Paper Scissors**, and make sure **block** is selected under type.

![Creating a new EduBlocks project](/learn/microbit/edublocks/rock-paper-scissors/ProjectCreation.webp)

4. Select **Create** to open the micro:bit editor.

![The EduBlocks code area](/learn/microbit/edublocks/rock-paper-scissors/CodeArea.webp)

:::

:::step{title="Importing MicroPython libraries"}
1. Select **Basic**, select **Imports**. Select `from microbit import *` and snap it to the `# Start code here` block.
2. Select **Basic**, select **Imports**, select an `import random` block and snap it to the `from microbit import *` block.

This :g[imports the Python libraries]{slug="importing-libraries"} that we need to create our game.

![Importing the MicroPython libraries](/learn/microbit/edublocks/rock-paper-scissors/S1_ImportingPythonLibraries.webp)
:::

:::step{title="Create a While Loop"}
Select **Basic**, select **Loops**. Select a `while True:` block and snap it to the `import random` block.

This creates a loop that goes around and around forever.

![Creating a while loop](/learn/microbit/edublocks/rock-paper-scissors/S2_CreateWhileLoop.webp)
:::

:::step{title="Create the Paper Variable"}
1. Select **Variables**. Select **Create Variable** and name it **paper**.
2. Select a `paper = 0` block and snap it within the `while True` block.
3. Select **Display**. Select an `Image` block and snap it onto the `paper =` block where it says **0**.
4. Create the following pattern within the `Image` block. A **9** means the LED is turned **on** and a **0** means the LED is **off**.

![Creating a representation of paper in lights](/learn/microbit/edublocks/rock-paper-scissors/S3_PaperRepresentation.webp)

Here is the code so far:

![Image of completed code so far](/learn/microbit/edublocks/rock-paper-scissors/S3_CreatePaperVariable.webp)
:::

:::step{title="Create the Rock Variable"}
1. Select **Variables**. Select **Create variable** and name it **rock**.
2. Select a `rock = 0` block and snap it below the `paper = Image ("99999:", "90009:", "90009:", "90009:", "99999")` block.
3. Select **Display**. Select an `Image` block and snap it onto the `rock =` block where it says **0**.
4. Create the following pattern within the `Image` block.

![Representation of rock in code](/learn/microbit/edublocks/rock-paper-scissors/S4_RockRepresentation.webp)

Completed code so far:

![Completed code so far.](/learn/microbit/edublocks/rock-paper-scissors/S4_CreateRockVariable.webp)
:::

:::step{title="Create the Scissors Variable"}
1. Select **Variables**. Select **Create Variable** and name it **scissors**.
2. Select a `scissors = 0` block and snap it below the `rock = Image ("00000:", "09990:", "09990:", "09990:", "00000")` block.
3. Select **Display**. Select an `Image` block and snap it onto the `scissors =` block where it says **0**. 
4. Create the following pattern within the `Image` block.

![Representation of Scissors in code](/learn/microbit/edublocks/rock-paper-scissors/S5_ScissorsRepresentation.webp)

Completed code so far with the scissors variable added.

![Completed code so far](/learn/microbit/edublocks/rock-paper-scissors/S5_CreateScissorsVariable.webp)
:::

:::step{title="Check for a Shake"}
1. Select **Basic**, select **Logic**, select an `if True:` block and snap it to the `scissors = Image ("90099:", "09099:", "00900:", "09099:", "90099")` block.
2. Select **Accelerometer**. Select an `accelerometer.was_gesture ("shake")` block and snap it onto the `if` block where it says **True**.
3. Select **Variables**, select **Create Variable** and name it **choice**. Select a `choice = 0` block and snap it inside the `if accelerometer.was_gesture ("shake"):` block.
4. Within the **0** of the `choice` block type **random.randint(0, 2)**

This will check to see if the micro:bit has been shaken and if it had it will set choice to a random number between 0 and 2.

![Checking to see if the micro:bit has been shaken](/learn/microbit/edublocks/rock-paper-scissors/S6_CheckForShake.webp)
:::

:::step{title="Create the If Condition"}
1. Select **Basic**, select **Logic**, select an `if True:` block and snap it to the `choice = random.randint(0, 2)` block.
2. Select **Basic**, select **Logic**, select a `0 == 0` block and snap it on to the `if` block where it says **True**.
3. Select **Variables.** Select a `choice` block and snap it onto the `if` block before the **==** sign.
4. Select **Display**. Select a `display.show(10)` block and snap it inside the `if choice == 0:` block.
5. Select **Variables**. Select a `paper` block and snap it onto the `display.show` block where it says **10**.

This will check to see if choice is equal to 0 and if it is paper will be displayed on the LED matrix.

![Creating the if condition](/learn/microbit/edublocks/rock-paper-scissors/S7_CreateIfCondition.webp)
:::

:::step{title="Create the elif Condition"}
1. Select **Basic**, select **Logic.** Select an `elif True:` block and snap it to the `if choice == 0:` block.
2. Select **Basic**, select **Logic.** Select a `0 == 0` block and snap it onto the `elif` block where it says **True**. Change the **0** to **1**.
3. Select **Display**. Select a `display.show(10)` block and snap it into the `elif choice == 1:` block.
4. Select **Variables**. Select a `rock` block and snap it onto the `display.show` block where it says **10**.

This will check to see if choice is equal to 1 and if it is rock will be displayed on the LED matrix.

![Creating the elif condition](/learn/microbit/edublocks/rock-paper-scissors/S8_CreateElifCondition.webp)
:::

:::step{title="Create the Else Condition"}
1. Select **Basic**, select **Logic.** Select an `else:` block and snap it to the `elif choice == 1:` block.
2. Select **Display**. Select a `display.show(10)` block and snap it inside the `else:` block.
3. Select **Variables**. Select a `scissors` block and snap it onto the `display.show` block where it says **10**.

This will display scissors on the LED matrix if choice does not equal 0 or 1. 

![Creating the else condition](/learn/microbit/edublocks/rock-paper-scissors/S9_CreateElseCondition.webp)
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
3. Select **Send**. This simulates a shake of the micro:bit and you will see a rock, paper, or scissors icon display on the LED matrix.

![The EduBlocks simulator](/learn/microbit/edublocks/microfit/SimulatorPreview.webp)

### On a real micro:bit
Once the code has downloaded, give the micro:bit a shake and see an icon display on the LED matrix. Why not find a friend and see who can beat the micro:bit? 
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you add a sound so your micro:bit gives a little beep each time it makes a choice? Try snapping an `audio.play(Sound.HAPPY)` block from **Audio** inside your `if accelerometer.was_gesture("shake"):` check, just after you set the choice. For an extra challenge, pick a different sound for rock, paper and scissors!

*Good to know: the sound plays through the built-in speaker, which only the micro:bit V2 has. If you have a V1, you can still try this challenge by clipping a buzzer or headphones to the pins. Everything else in this project works happily on both V1 and V2.*
::
:::

:::step{title="Stuck? Quick fixes"}

|Problem | Try this |
| --- | --- |
| Nothing happens when I shake it | Give it a firm shake, not too gentle. Also check your blocks are snapped inside the `if accelerometer.was_gesture("shake"):` block. |
| The same icon keeps showing | That's normal! The choice is random, so shake a few more times and the others will appear. |
| My icons look wrong or blank | Open each Image block and check you've selected the right squares for rock, paper and scissors. |
| It only ever shows two icons | Check your elif is set to choice == 1, and that random.randint goes from 0 to 2. |
| It won't download to my micro:bit | Make sure the micro:bit is plugged in with the USB cable, then try Connect again. |

:::

::::