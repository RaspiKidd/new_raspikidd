---
title: "MicroFit: Your very own Step Counter"
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
image: /learn/microbit/makecode/microfit/microfit-cover.png
youtube: 
pdf: /learn/microbit/makecode/microfit/microfit.pdf
---



::::tutorial-steps

:::step{title="Overview"}
Ever wondered how a smartwatch or fitness band counts your steps? In this project, you're going to build your very own step counter using a micro:bit!

Inside your micro:bit is a clever little sensor called an :g[accelerometer]{slug="accelerometer"}. It can feel when the micro:bit moves. We'll use it to spot every step you take, add them up, and show the total on the :g[LED matrix]{slug="led-matrix"} (the grid of lights on the front).

The best bit? When you're done, you'll have a real working fitness tracker you can pop on and take outside. Don't worry if something doesn't work first time, that's all part of coding. Let's give it a go!


::callout{icon="🎯" color="green"}
**What you'll learn**
- How a light sensor measures the light around it
- How to use an if/else block to make a decision
- How to switch an RGB LED on and off automatically
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="variable,accelerometer,led-matrix,forever-loop,button"}
::
:::

:::step{title="Set up your micro:bit"}
### On a Computer
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge.
2. In the Address bar type [makecode.microbit.org](https://makecode.microbit.org/#).
3. Select **New Project** and give it the name **MicroFit**.

![The MakeCode code area](/learn/microbit/makecode/microfit/CodeArea.webp)

### On a Tablet or Phone
1. Open the **micro:bit app**. If you don't have the app yet you can download it from your devices app store by searching for **micro:bit**.
2. Select **Create Code**.
3. Select **New Project** and name it **MicroFit**.
:::


:::step{title="Set up the Code Area"}
1. Select the `on start` block and drop it on the **bin** icon to delete it.
2. Select **Input**. Select a `on shake` block and drop it within the code area.
3. Select **Input**. Select a `on button A pressed` block and drop it within the code area. 

![Setting up the code area](/learn/microbit/makecode/microfit/S1_SettingUpCodeArea.webp)
:::

:::step{title="Change Steps by 1"}
1. Select **Variables**, choose **Make a Variable**, and name it **steps**.
2. Snap a `change steps by 1` block inside the `on shake` block.

Every time the micro:bit detects a shake, it adds one to your steps :g[variable]{slug="variable"}.

![Adding change steps by 1](/learn/microbit/makecode/microfit/S2_ChangeStepsBy.webp)
:::

:::step{title="Show the number of steps"}
1. Select **Basic**, then snap a `show number` block inside the `forever` block.
2. Select **Variables**, then snap a `steps` block onto the `show number` block, where it says **0**.

This :g[forever loop]{slug="forever-loop"} keeps running and shows your step count on the :g[LED matrix]{slug="led-matrix"}

![Showing the number of steps](/learn/microbit/makecode/microfit/S3_ShowNumberOfSteps.webp)
:::

:::step{title="Reset the steps to zero"}
Select **Variables**, then snap a `set steps to 0` block inside the `on button A pressed` block.

Now, pressing :g[button]{slug="button"} A on the micro:bit resets your step :g[variable]{slug="variable"} back to zero.

![Setting steps to zero](/learn/microbit/makecode/microfit/S4_SetStepsToZero.webp)
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
Shake the micro:bit to watch your steps go up. Pop a battery pack on, attach the micro:bit to your wrist or ankle, and head outside to see how many steps you can rack up!

**Dont Have a microbit** We can test it on the MakeCode editor by selecting the **white dot** next to **shake** on the micro:bit simulator and watch our steps counter climb everytime we select the dot.

![Shake button on the micro:bit Simulator](/learn/microbit/makecode/microfit/SimDemo.webp)


:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Set yourself a step goal! Add an `if` block inside the `forever` loop to check when `steps` reaches a target, like 20. When you hit it, make the micro:bit show a happy face or play a sound to celebrate, then press button A to reset and go again.
::
:::

:::step{title="Stuck? Quick fixes"}

| Problem | Try this |
| --- | --- |
| The number doesn't go up when I shake it | Check your `change steps by 1` block is inside the `on shake` block. Give the micro:bit one firm, clear shake. |
| The count jumps up by lots at once | A big wobble can look like several shakes. Try one single, definite shake each time. |
| Nothing shows on the LED matrix | Make sure the `steps` variable is snapped inside the `show number` block, and that `show number` is inside the `forever` block. |
| The number doesn't change straight away when I shake fast | That's okay, it's still counting! The micro:bit can't show the new number while the last one is still scrolling. Stop shaking for a moment and your latest total will pop up. |
| Button A won't reset the steps | Check the `set steps to 0` block is inside the `on button A pressed` block. |
| My code won't download to the micro:bit | Use a data USB cable (not a charge-only one), make sure the micro:bit is paired, and try a different USB port. |

:::

::::