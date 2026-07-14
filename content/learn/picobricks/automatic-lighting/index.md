---
platform: picobricks
level: Beginner
duration: 10 mins
kit:
    - PicoBricks Kit
    - PicoBricks Brick IDE
    - MicroUSB to USB cable
    - Laptop or tablet for coding
image: /learn/picobricks/automatic-lighting/cover-automatic-lighting.png
youtube: https://youtu.be/zBP0ivO4ypg
pdf: /learn/picobricks/automatic-lighting/automatic-lighting.pdf
---

# Automatic Lighting

::::tutorial-steps

:::step{title="Overview"}
In this project we'll build our very own automatic light, just like the ones that switch themselves on when it gets dark. We'll use the :g[Light Sensor]{slug="light-sensor"} to measure how bright it is around us. When it gets too dark, the :g[RGB LED]{slug="rgb-led"} will switch on all by itself, and when it's bright again, it turns back off.

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
::key-words{terms="light-sensor,rgb-led,forever-loop,if-statement,threshold"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge. Type [ide.picobricks.com](http://ide.picobricks.com) into the address bar.
2. Connect the PicoBricks board to your computer using the USB cable.
3. Connect the PicoBricks board to the Brick IDE by selecting the **Connection** button at the top of the code area.

![The PicoBricks Brick IDE coding environment](/learn/picobricks/automatic-lighting/CodingEnvironment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Drop a `PicoBricks` block into the code area.
2. Select **Loops**. Snap a :g[forever]{slug="forever-loop"} block to the `PicoBricks` block.
3. Select **Basic**. Snap a `Serial Print` block inside the `forever` block.
4. Select **Bricks**. Snap a `Read Light Sensor` block onto the `Serial Print` block where it says **PicoBricks**.
5. Select **Logic**. Snap an :g[if else]{slug="if-statement"} block to the `Serial Print Read Light Sensor` block.
6. Select **Logic**. Snap an `=` block onto the `if` block, then change the **=** to a **>**.
7. Select **Bricks**. Add a `Read Light Sensor` block into the first blank space of the `if` block, before the **>**.
8. Select **Math**. Snap a `0` block into the space after the **>**, then change **0** to **10,000**.
9. Select **RGB LED**. Snap a `Set RGB Led Colour` block inside the `if` block.
10. Select **RGB LED**. Snap a `Clear RGB Led Colour` block inside the `else` block.

![The finished Automatic Lighting code](/learn/picobricks/automatic-lighting/AutomaticLightingCode.webp)
:::

:::step{title="Run it and Watch"}
Now the code is finished, let's run it and check it works. Select the run button at the top of the code area. If it's daylight the RGB LED should be off. If it's night time, or if you cover the light sensor with your hand, the RGB LED will turn on.

![Automatic Lighting demo](/learn/picobricks/automatic-lighting/AutomaticLightingDemo.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make your night light more colourful? Try changing the **Set RGB Led Colour** block to a different colour, so your light glows blue, green or purple when it gets dark. Feeling brave? Add a **Buzzer** block so it gives a gentle beep the moment the light comes on.
::
:::

:::step{title="Stuck? Quick fixes"}

| Problem | Try this |
| --- | --- |
| The RGB LED won't turn on at all | Cover the light sensor fully with your hand to make it really dark. If it still won't light up, your room might not get dark enough to push the reading past the cut-off, so try lowering the 10,000 value in your `if` block. |
| The RGB LED is always on | Your everyday room light is already reading above the cut-off. Try raising the 10,000 value so the light only comes on when it's properly dark. |
| Nothing happens when I press Run | Check the PicoBricks board is connected (the connection button at the top should show it's linked). Unplugging and replugging the USB cable often does the trick. |
| I can't see the light readings | Make sure the `Serial Print` block is inside the `forever` loop, with the `Read Light Sensor` block snapped into it. |

:::

::::