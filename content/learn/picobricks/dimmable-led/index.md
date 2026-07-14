---
platform: picobricks
level: Beginner
duration: 15 mins
kit:
  - PicoBricks
  - Raspberry Pi Pico
  - USB to MicroUSB cable
image: /learn/picobricks/dimmable-led/cover.png
youtube: https://youtu.be/u5CaiNAMwkI
pdf: /learn/picobricks/dimmable-led/dimmable-led.pdf
---

# Dimmable LED

::::tutorial-steps

:::step{title="Overview"}

In this tutorial we're going to use the :g[RGB LED]{slug="rgb-led"} and the :g[potentiometer]{slug="potentiometer"} on the :g[PicoBricks]{slug="picobricks"} board to make a dimmable lighting system.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to control the RGB LED using the potentiometer.
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="What you'll need"}
::key-words{terms="potentiometer,rgb-led,variable,forever-loop"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Connect the PicoBricks board to your computer using the USB cable.
2. Open your favourite web browser (we recommend Google Chrome or Microsoft Edge), go to [ide.picobricks.com](https://ide.picobricks.com) and select **PicoBlockly**.
3. Connect the board to the coding environment by selecting the **connect** button at the top of the code area.

![The PicoBlockly coding environment](/learn/picobricks/dimmable-led/coding-environment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Drag a `PicoBricks` block into the code area.
2. Select **Loops**. Snap a `forever` block onto the \`PicoBricks\` block.
3. Select **Variables**. Select **Create variable** and type **Colour**. Snap a `set Colour to` block inside the forever block.
4. Select **Math**. Snap a `round` block onto the `set Colour to` block.
5. Select **Math**. Snap a `1 + 1` block onto the `round` block, then change the **+** to a **x**.
6. Select **Bricks**. Snap a `Read Potentiometer` block onto the `round` block, before the **x** sign.
7. Select **Math**. Snap another `1 + 1` block onto the `round` block, after the **x**. Change the first **1** to **255**, the **+** to **÷** and the remaining **1** to **65535**.
8. Select **RGB LED**. Snap a `Set RGB Led Colour R 255 G 255 B 255` block under the `set Colour to` block.
9. Select **Variables**. Snap a `Colour` block into the **R** value of the `Set RGB Led Colour` block.
10. Do the same as **step 9** for the **G** and **B** values.

![The completed dimmable LED code](/learn/picobricks/dimmable-led/completed-code.webp)
:::

:::step{title="Run it and Watch"}
Now the code's finished, let's test it. Select the **Run** button at the top of the code area. Turn the potentiometer to see the LED get brighter or dimmer, right down until it goes out, depending on which way you turn it.

![The dimmable LED fading up and down as the potentiometer turns](/learn/picobricks/dimmable-led/demo.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make your dial control just one colour? Try setting the **G** and **B** values to \`0\` and leave only the **R** value linked to the potentiometer, so your knob fades a red glow from bright to off. Then have a go at swapping it to just green, or just blue. What happens if you mix two colours together?
::
:::

:::step{title="Stuck? Quick fixes"}

| Problem | Try this |
| --- | --- |
| The LED doesn't light up at all | Check PicoBricks is connected using the connect button at the top of the code area, then press **Run** again. |
| The brightness doesn't change when you turn the dial | Check your \`Read Potentiometer\` block is inside the \`round\` block, just before the **x**, and that the maths reads \`x 255 ÷ 65535\`. |
| The colour looks wrong or flickers | Make sure the same \`Colour\` variable is dropped into all three slots (**R**, **G** and **B**). |
| PicoBricks won't connect | Try a different USB cable or port, check you picked **PicoBlockly**, and press the connect button again. |
:::
::::