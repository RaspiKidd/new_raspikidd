---
title: "Blinking LED Project"
platform: picobricks
level: Beginner
duration: 10 mins
kit:
    - PicoBricks Kit
    - PicoBricks Brick IDE
    - MicroUSB to USB cable
    - Laptop or tablet for coding
image: /learn/picobricks/blinking-led/cover-blink.png
youtube: https://youtu.be/iaCOzFQv5NY
pdf: /learn/picobricks/blink-project/blink-project.pdf
---


::::tutorial-steps

:::step{title="Overview"}
In computer programming, when learning a new coding language we typically create a **Hello World** project, which prints **Hello World** to the screen.

When working with robotics and physical computing, our **Hello World** project becomes a blinking :g[LED]{slug="led"} (light-emitting diode).

Let's take a look at how we'd create this on the PicoBricks using the Brick IDE.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to make an LED blink on and off
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{:terms="led, forever-loop"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge. Type [ide.picobricks.com](http://ide.picobricks.com) into the address bar.
2. Connect the PicoBricks board to your computer using the USB cable.
3. Connect the PicoBricks board to the Brick IDE by selecting the **Connection** button at the top of the code area.

![The PicoBricks Brick IDE coding environment](/learn/picobricks/blinking-led/CodingEnvironment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Select a `PicoBricks` block and drop it in the code area.
2. Select **Loops**. Select a `forever` block and snap it to the `PicoBricks` block.
3. Select **Bricks**. Select a `Set Led` block and snap it within the `forever` block. It will be set to **on** by default.
4. Select **Loops**. Select a `wait` block and snap it to the `Set Led on` block. Change the **1** to **0.5**.
5. Select **Bricks**. Select a `Set Led` block and snap it to the `wait 0.5` block. Change the **on** to **off**.
6. Select **Loops**. Select a `wait` block and snap it to the `Set Led off` block. Change the **1** to **0.5**.

![The completed block code for the blinking LED](/learn/picobricks/blinking-led/CompletedCode.webp)

We've now completed the code for our blinking LED.
:::

:::step{title="Run it and watch"}
1. Select the **run** button at the top of the code window.

Your LED should now blink on and off every half a second. 🎉

![The LED blinking on and off every half a second](/learn/picobricks/blinking-led/BlinkingLED.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make your LED blink faster or slower? Try changing both `wait 0.5` blocks to a smaller number like `0.1` for a speedy flash, or a bigger number like `1` for a slow, sleepy blink. What happens if you give the two waits different numbers?
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| The LED isn't lighting up at all | Check the USB cable is pushed in properly at both ends, and make sure the Brick IDE shows it's connected to your PicoBricks board. |
| The blocks won't snap together | Make sure each block is dropped just inside the one above it. The `Set Led` and `wait` blocks need to sit inside the `forever` loop, not below it. |
| The LED comes on but never turns off | Check your second `Set Led` block is set to **off**, and that a `wait` block sits after each `Set Led` block. |
| Nothing happens when I press run | Try reconnecting the board, then press **run** again. Unplugging the USB cable and plugging it back in often helps too. |
:::

::::
