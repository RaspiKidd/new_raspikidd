---
platform: picobricks
level: Beginner
duration: 10 mins
kit:
    - PicoBricks Kit
    - PicoBricks Brick IDE
    - MicroUSB to USB cable
    - Laptop or tablet for coding
image: /learn/picobricks/using-the-button/cover.png
youtube: https://youtu.be/HGowhuRMlRM
---

# Using the Button

::::tutorial-steps

:::step{title="Overview"}
Within this guide we're going to use the push :g[button]{slug="button"} to control an :g[LED]{slug="led"} by coding our PicoBricks board.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to control an LED using a button
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{:terms="button, led, forever-loop, if-statement"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge. Type [ide.picobricks.com](http://ide.picobricks.com) into the address bar.
2. Connect the PicoBricks board to your computer using the USB cable.
3. Connect the PicoBricks board to the Brick IDE by selecting the **Connection** button at the top of the code area.

![The PicoBricks Brick IDE coding environment](/learn/picobricks/using-the-button/CodingEnvironment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Select and drag a `PicoBricks` block to the code area and drop it.
2. Select **Loops**. Select a `forever` block and snap it to the `PicoBricks` block.
3. Select **Logic**. Select an `if else` block and snap it inside the `forever` block.
4. Select **Logic**. Select an `=` block and snap it onto the `if` block.
5. Select **Bricks**. Select a `Read Button` block and snap it within the first blank space of the `if` block, before the **=** sign.
6. Select **Math**. Select a `0` block and snap it in the blank space after the **=** sign. Change the **0** to **1**.
7. Select **Bricks**. Select a `Set Led on` block and snap it within the `if` block.
8. Select **Bricks**. Select a `Set Led on` block and snap it within the `else` block. Change the **on** to **off**.

![The completed block code for the button-controlled LED](/learn/picobricks/using-the-button/CompletedButtonCode.webp)

We've now completed the code for our button-controlled LED.
:::

:::step{title="Run it and watch"}
1. Select the **run** button at the top of the code window.
2. Press the button on your PicoBricks board.

When the button is pressed you should see the LED turn on, and switch off again when you let go. 🎉

![The LED turning on while the button is pressed](/learn/picobricks/using-the-button/UsingTheButtonDemo.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Now you can switch a light on with a button, what else could you control? Try swapping a `Set Led` block for a different brick, like making the buzzer beep while the button is held down. Can you get two things to happen from one press?
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| The LED doesn't come on when I press the button | Check the USB cable is pushed in at both ends and that the Brick IDE shows it's connected to your PicoBricks board. Then check the `Read Button` block is snapped into the `if` block, before the `=` sign. |
| The LED stays on all the time | Look at your `if` and `else` blocks and make sure the right `Set Led` block sits inside each one, so the light knows when to switch on and when to switch off. |
| The blocks won't snap together | Drop each block just inside the one above it. The `if else` block needs to sit inside the `forever` loop, and the `Read Button`, `=` and `0` blocks all tuck into the top of the `if`. |
| Nothing happens when I press run | Reconnect the board using the **Connection** button at the top of the code area, then press **run** again. Unplugging the USB cable and plugging it back in often helps too. |
:::

::::
