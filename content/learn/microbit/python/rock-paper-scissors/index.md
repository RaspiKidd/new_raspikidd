---
title: "Code Rock Paper Scissors on a micro:bit with Python"
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
image: /learn/microbit/python/rock-paper-scissors/RockPaperScissors_Cover.png
youtube: 
pdf: /learn/microbit/python/rock-paper-scissors/rock-paper-scissors.pdf
---

::::tutorial-steps

:::step{title="Overview"}
Can you beat a micro:bit at rock, paper, scissors? In this project you're going to find out, by coding your very own game on a :g[micro:bit]{slug="micro-bit"}!

Give your micro:bit a shake and the :g[accelerometer]{slug="accelerometer"} inside it feels the movement. Your code then picks rock, paper or scissors at :g[random]{slug="random"} and shows it as a little picture on the :g[LED matrix]{slug="led-matrix"} (the grid of lights on the front), so you can see straight away whether you've won.

The best bit? When you're done you'll have a real game you can play against your micro:bit, or challenge a friend. Don't worry if something doesn't work first time, that's all part of coding. Let's give it a go!

::callout{icon="🎯" color="green"}
**What you'll learn**
- Bring in a ready-made library with :g[importing libraries]{slug="importing-libraries"}
- Use a :g[while loop]{slug="while-loop"} to keep your game running
- Make and use your own :g[variable]{slug="variable"}
- Use the micro:bit's shake sensor to spot movement
- Draw your own pictures on the grid of lights
- Make decisions with :g[if statement]{slug="if-statement"}s, plus elif and else
- Compare two things with a :g[comparison operator]{slug="comparison-operators"}
- Let the micro:bit choose at :g[random]{slug="random"}
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="importing-libraries,variable,while-loop,accelerometer,random,if-statement,comparison-operators,led-matrix"}
::
:::

:::step{title="Set up your micro:bit Python Editor"}
1. Open your web browser. We recommend Google Chrome or Microsoft Edge.
2. In the address bar type [**python.microbit.org**](https://python.microbit.org).
3. Give your project a name: select the project name box at the top of the editor and type **Rock Paper Scissors**.
4. Close the left-hand panel by selecting the **arrow** pointing to the left.

![Closing the left-hand panel](/learn/microbit/python/rock-paper-scissors/ClosingPanel.webp)

5. Delete the code on lines **5 to 9** in the main code area.

![The Python editor code area](/learn/microbit/python/rock-paper-scissors/CodeArea.webp)
:::

:::step{title="Import the random library"}
On line 3, type `import random`. This is :g[importing libraries]{slug="importing-libraries"}, and it brings in the random library so the micro:bit can pick for itself later on.

![Importing the random library](/learn/microbit/python/rock-paper-scissors/S1_ImportingPythonLibraries.webp)
:::

:::step{title="Create a while True loop"}
Type `while True:` and press **Enter**. This creates a :g[while loop]{slug="while-loop"}, so anything inside it runs while the condition stays true. Python needs the capital **T** in `True` and the colon at the end, or the code won't run. Notice your cursor automatically indents, that's how Python shows what's inside the loop.

![Creating a while True loop](/learn/microbit/python/rock-paper-scissors/S2_CreateWhileLoop.webp)
:::

:::step{title="Create the picture variables"}
Each of these makes a :g[variable]{slug="variable"} holding one of your pictures.

1. Type `paper = Image("99999:90009:90009:90009:99999")` to create the **paper** icon.
2. Type `rock = Image("00000:09990:09990:09990:00000")` to create the **rock** icon.
3. Type `scissors = Image("90099:09099:00900:09099:90099")` to create the **scissors** icon.

The **9**s are the lights that switch on and the **0**s are the lights that stay off, so each row of numbers draws one row of the grid.

![Creating the picture variables](/learn/microbit/python/rock-paper-scissors/S3_CreateVariables.webp)
:::

:::step{title="Detect a shake"}
1. Type `if accelerometer.was_gesture("shake"):` and press **Enter**. Keep it lined up with your picture variables. This :g[if statement]{slug="if-statement"} checks whether the micro:bit has been shaken.
2. Type `choice = random.randint(0, 2)` and press **Enter**. This creates a **choice** variable and sets it to a :g[random]{slug="random"} whole number between **0** and **2**.

![Detecting a shake and picking at random](/learn/microbit/python/rock-paper-scissors/S4_DetectingAShake.webp)
:::

:::step{title="Show paper with an if statement"}
1. Type `if choice == 0:` and press **Enter**. The `==` is a :g[comparison operator]{slug="comparison-operator"}, and it checks whether the two things match.
2. Type `display.show(paper)` and press **Enter**.
3. Delete the indent so your cursor lines back up with the `if choice == 0:` line.

Now, when **choice** is **0**, the **paper** icon appears on the :g[LED matrix]{slug="led-matrix"}.

![Showing paper with an if statement](/learn/microbit/python/rock-paper-scissors/S5_CreateIfCondition.webp)
:::

:::step{title="Show rock with an elif statement"}
1. Type `elif choice == 1:` and press **Enter**. `elif` is short for "else if", so this is the next check to try.
2. Type `display.show(rock)` and press **Enter**.
3. Delete the indent so your cursor lines back up with the `elif choice == 1:` line.

Now, when **choice** is **1**, the **rock** icon appears instead.

![Showing rock with an elif statement](/learn/microbit/python/rock-paper-scissors/S6_CreateElifCondition.webp)
:::

:::step{title="Show scissors with an else statement"}
1. Type `else:` and press **Enter**.
2. Type `display.show(scissors)`.

`else` is the catch-all, so if **choice** isn't **0** or **1** it must be **2**, and the **scissors** icon appears.

![Showing scissors with an else statement](/learn/microbit/python/rock-paper-scissors/S7_CreateElseCondition.webp)
:::

:::step{title="Downloading Your Code"}
1. Connect the micro:bit to the computer with the micro USB cable.
2. Select the **three dots** next to **Send to micro:bit**.
3. Select **Connect** and follow the on-screen prompts.
4. Select **Send to micro:bit** to download the code.

![Downloading your code](/learn/microbit/python/rock-paper-scissors/DownloadingCode.webp)
:::

:::step{title="Run it and Play"}
### In the web browser

The Python editor has a built-in micro:bit simulator, handy if you haven't got a micro:bit to hand. Below the simulator you'll see the **shake** function is already selected. Select the **play** button next to it to simulate a shake and watch paper, rock or scissors appear on the LED matrix.

![The Python editor simulator](/learn/microbit/python/rock-paper-scissors/SimulatorDemo.webp)

### On a real micro:bit

Once your code's downloaded, give the micro:bit a shake and see what it picks. Remember the choice is random, so you might get the same icon twice in a row, that's completely normal. Why not find a friend and see who can beat the micro:bit?
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Give your micro:bit a voice! Add an `audio.play(Sound.HAPPY)` line inside your `if accelerometer.was_gesture("shake"):` check, just after you set the choice, so it beeps every time it plays. For an extra challenge, pick a different sound for rock, paper and scissors.

*Good to know: the sound plays through the built-in speaker, which only the micro:bit V2 has. If you've got a V1, you can still try this by clipping a buzzer or headphones to the pins. Everything else in this project works happily on both.*
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| Nothing happens when I shake it | Give the micro:bit one firm, clear shake, not too gentle. Also check your code is indented inside the `if accelerometer.was_gesture("shake"):` line. |
| The same icon keeps showing | That's okay, it's working! The choice is random, so shake a few more times and the others will turn up. |
| My icons look wrong or blank | Check each `Image("...")` line and make sure the 9s and 0s match the pattern for rock, paper and scissors, with a colon between each row. |
| It only ever shows two icons | Check your `elif` is set to `choice == 1`, and that `random.randint` goes from **0** to **2**. |
| I get an error about `random` | Check `import random` is on its own line at the top, above your `while True:` loop, and spelled all in lower case. |
| My code won't download to the micro:bit | Use a data USB cable (not a charge-only one), make sure the micro:bit is paired, and try a different USB port. |
:::

::::