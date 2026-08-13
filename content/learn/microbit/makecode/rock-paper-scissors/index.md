---
title: "Rock Paper Scissors"
draft: false
platform: microbit
language: makecode
level: Beginner
duration: 10 mins
kit:
    - The micro:bit MakeCode editor
    - micro:bit
    - micro USB cable
    - battery pack for the micro:bit (optional)
image: /learn/microbit/makecode/rock-paper-scissors/RockPaperscissors_Cover.png
youtube: 
pdf: /learn/microbit/makecode/rock-paper-scissors/rock-paper-scissors.pdf
---



::::tutorial-steps

:::step{title="Overview"}
In this project you will learn how to code your :g[micro:bit]{slug="micro-bit"} to play rock-paper-scissors using gestures and the :g[LED matrix]{slug="led-matrix"}. We will start by understanding the basic game logic and how to present rock, paper, and scissors on the LED matrix. You will discover how to use :g[random]{slug="random"} selection for the micro:bit's choice and show it on the LED matrix, so players can see what the micro:bit picked and work out whether they have won. Through this project you will develop fundamental coding concepts like :g[variables]{slug="variable"}, conditionals and random numbers while creating something fun and interactive. By the end you will have a fully functional game that you can play with friends or challenge the micro:bit yourself. 


::callout{icon="🎯" color="green"}
**What you'll learn**
- How to create a :g[variable]{slug="variable"}
- How to use the on shake function
- How to use :g[if]{slug="if-statement"}, else if and else statements
- How to use :g[random]{slug="random"} numbers
- How to show patterns on the :g[LED matrix]{slug="led-matrix"}
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="variable,random,led-matrix,accelerometer,if-statement"}
::
:::

:::step{title="Navigating to the MakeCode Editor"}
### On a Computer
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge.
2. In the Address bar type [makecode.microbit.org](https://makecode.microbit.org/#).
3. Select **New Project** and give it the name **RockPaperScissors**.

![The MakeCode code area](/learn/microbit/makecode/microfit/CodeArea.webp)

### On a Tablet or Phone
1. Open the **micro:bit app**. If you don't have the app yet you can download it from your devices app store by searching for **micro:bit**.
2. Select **Create Code**.
3. Select **New Project** and name it **RockPaperScissors**.
:::


:::step{title="Set up the Code Area"}
1. Select the `on start` block and drop it on the **bin** icon to delete it.
2. Select the `forever` block and drop it on the **bin** icon to delete it.
3. Select **Input**. Select a `on shake` block and drop it within the code area.

![Setting up the code area](/learn/microbit/makecode/rock-paper-scissors/S1_SettingUpCodeArea.webp)
:::

:::step{title="Create and Set choice Variable"}
1. Select **Variables**, choose **Make a Variable**, and name it **choice**.
2. Snap a `set choice to` block inside the `on shake` block.
3. Select **Math**. Select a `pick random 0 to 10` block and snap it onto the `set choice to` block where it says **0**. Change **10** to **2**.

Everytime the micro:bit is shaken it will choose a number between 0 and 2.

![Create and Set choice Variable](/learn/microbit/makecode/rock-paper-scissors/S2_CreateAndSetChoiceVariable.webp)
:::

:::step{title="Creating the if Condition"}
1. Select **Logic**. Select an `If true then else` block and snap it below the `set choice to pick random 0 to 2` block.
2. Select **Logic**. Select a `0 = 0` block and snap it onto the `if` block where it says **true**.
3. Select **Variables**. Select a `choice` block and snap it onto the `if` block before the **=** sign.
4. Select **Basic**. Select a `show leds` block and snap it inside the `if choice = 0` block.
5. Make the following pattern by selecting the squares to represent **paper**.

![Creating a represenation of paper](/learn/microbit/makecode/rock-paper-scissors/S3_PaperRepresentation.webp)

This piece of code will check to see if choice is equal to zero and if it is it will display the paper icon on the :g[LED Matrix]{slug="led-matrix"}.

![Creating the code for if choice is equal to 0](/learn/microbit/makecode/rock-paper-scissors/S3_CreatingIfCondition.webp)
:::

:::step{title="Create the else Condition"}
1. Select **Basic**. Select a `show leds` block and snap it inside the `else` block.
2. Create the following pattern by selecting the squares to represent **rock**.

![Creating the representation of rock](/learn/microbit/makecode/rock-paper-scissors/S4_RockRepresentation.webp)

For now the else block is the catch-all: if choice isn't 0, it displays the rock icon on the LED matrix. In the next step we'll add an else if branch for choice = 1, which leaves the else handling the last value, 2. 

![Creating the else condition](/learn/microbit/makecode/rock-paper-scissors/S4_CreatingElseCondition.webp)
:::

:::step{title="Create the else if Condition"}
Select the **+** below `else`.

![Adding the else if condition](/learn/microbit/makecode/rock-paper-scissors/S5_AddingElseIfCondition.webp)

2. Select **Logic.** Select a `0 = 0` block and snap it onto the `else if` block where it says **false**.
3. Select **Variables**. Select a `choice` block and snap it onto the `else if` block before the **=** sign. Change the **0** to **1**.
4. Select **Basic**. Select a `show leds` block and snap it inside the `else if choice = 1` block.
5. Create the following pattern by selecting the squares to represent **scissors**.

![Scissors Representation](/learn/microbit/makecode/rock-paper-scissors/S5_ScissorsRepresentation.webp)

This piece of code checks to see if choice is equal to 1. If it is, it displays the scissors icon to the LED matrix. 

![Creating the else if condition](/learn/microbit/makecode/rock-paper-scissors/S5_CreatingElseIfCondition.webp)
:::

:::step{title="Downloading Your Code"}
### Using a Computer
1. Select the **three dots** next to **Download**.
2. Select **Connect Device**.
3. A pop-up will show you how to connect the micro:bit to the computer. Keep following the on-screen instructions.
4. Select **BBC micro:bit XXX** and select **Connect**. The XXX is your own micro:bit's name, so don't worry if it looks a little different.
5. Select **Download**.

![Downloading your code](/learn/microbit/makecode/microfit/DownloadingCode.webp)

### Using a tablet or phone
1. Select **Download**.
2. Follow the on-screen instructions to pair the micro:bit with the micro:bit app.

Once you've finished the on-screen steps, your code downloads to your micro:bit.

:::

:::step{title="Run it and Watch"}
Shake the micro:bit to see either a rock, paper, or scissors icon display on your micro:bit. Remember the choice is random, so you may have to shake it a few times to see all three icons. 

**Don't have a micro:bit?** We can test it on the MakeCode editor by selecting the **white dot** next to **Shake** on the micro:bit Simulator and watch it select the rock, paper, or scissors icon and display it on the virtual LED matrix.

:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you add a sound so your micro:bit gives a little beep each time it makes a choice? Try snapping a `play tone` block from **Music** inside your `on shake` block, just after you set the choice. For an extra challenge, play a different note for rock, paper and scissors!

*Good to know: the sound plays through the built-in speaker, which only the micro:bit V2 has. If you have a V1, you can still try this challenge by clipping a buzzer or headphones to the pins. Everything else in this project works happily on both V1 and V2.*
::
:::

:::step{title="Stuck? Quick fixes"}

| Problem | Try this |
| --- | --- |
| Nothing happens when I shake it | Give it a firm shake, not too gentle. Also check your blocks are snapped inside the `on shake` block.|
| The same icon keeps showing | That's normal! The choice is random, so shake a few more times and the others will appear. |
| My icons look wrong or blank | Open each `show leds` block and check you've selected the right squares for rock, paper and scissors.|
| It only ever shows two icons | Check your `else if` is set to `choice = 1`, and that `pick random` goes from **0** to **2** (not 0 to 10). |
| My code won't download to the micro:bit | Use a data USB cable (not a charge-only one), make sure the micro:bit is paired, and try a different USB port. |

:::

::::