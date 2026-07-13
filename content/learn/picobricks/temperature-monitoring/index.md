---
platform: picobricks
level: Beginner
duration: 15 mins
kit:
    - PicoBricks Kit
    - PicoBricks Brick IDE
    - MicroUSB to USB cable
    - Laptop or tablet for coding
image: /learn/picobricks/temperature-monitoring/cover.png
youtube: https://youtu.be/K-ZN9wmLokk
---

# Temperature Monitoring

::::tutorial-steps

:::step{title="Overview"}
Within this PicoBricks tutorial we're going to use the :g[temperature sensor]{slug="temperature-sensor"} to sense the temperature of the room you're in. The temperature is then outputted to the :g[OLED screen]{slug="oled-screen"}.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to sense the temperature of a room through code
- How to output the temperature to the OLED screen
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{:terms="temperature-sensor, oled-screen, forever-loop"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Open your favourite web browser. We recommend either Google Chrome or Microsoft Edge. Type [ide.picobricks.com](http://ide.picobricks.com) into the address bar.
2. Connect the PicoBricks board to your computer using the USB cable.
3. Connect the PicoBricks board to the Brick IDE by selecting the **Connection** button at the top of the code area.

![The PicoBricks Brick IDE coding environment](/learn/picobricks/temperature-monitoring/CodingEnvironment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Select a `PicoBricks` block and drop it in the code area.
2. Select **Loops**. Select a `forever` block and snap it to the `PicoBricks` block.
3. Select **Display**. Select a `Clear Screen Buffer` block and snap it within the `forever` block.
4. Select **Display**. Select a `Write Text to Screen` block and snap it to the `Clear Screen Buffer` block. Change the **X** value to **15**, the **Y** value to **10** and **PicoBricks** to **Temperature:**.
5. Select **Display**. Select a `Write Text to Screen` block and snap it to the `Write Text to Screen X 15 Y 10 "Temperature:"` block. Change the **X** value to **55** and the **Y** value to **30**.
6. Select **Bricks**. Select a `Read Temperature` block and snap it onto the `Write Text to Screen` block where it says **PicoBricks**.
7. Select **Display**. Select a `Write Text to Screen` block and snap it to the `Write Text to Screen X 55 Y 30 Read Temperature` block. Change the **X** value to **35**, the **Y** value to **50** and **PicoBricks** to **Degrees**.
8. Select **Display**. Select a `Show Screen Buffer` block and snap it to the `Write Text to Screen X 35 Y 50 "Degrees"` block.
9. Select **Loops**. Select a `wait` block and snap it to the `Show Screen Buffer` block.

![The completed block code for temperature monitoring](/learn/picobricks/temperature-monitoring/TemperatureSensingCode.webp)

We've now completed the code for our temperature monitor.
:::

:::step{title="Run it and watch"}
1. Select the **run** button at the top of the code window.

You should now see the live temperature displayed on the OLED screen. 🎉

![The live room temperature shown on the OLED screen](/learn/picobricks/temperature-monitoring/TemperatureMonitoring.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make your project react to the temperature? Try adding an **if statement** so the screen shows a message like `Too hot!` when the temperature climbs above a number you choose (your **threshold**). For an extra challenge, light up an **LED** whenever the room gets warm.
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| PicoBricks won't connect, or the connect button stays greyed out | Check the USB cable is pushed in at both ends, click the **Connection** button at the top of the code area, and use Google Chrome or Microsoft Edge. |
| Nothing appears on the OLED screen | Make sure your `Clear Screen Buffer` and `Show Screen Buffer` blocks are in place, and that all your blocks are snapped inside the `forever` loop. |
| The temperature shows once but never changes | Check the `Read Temperature` block is snapped into the `Write Text to Screen` block, and that a `wait` block sits inside the `forever` loop so it keeps refreshing. |
| The words overlap or sit in the wrong place | Have a look at your **X** and **Y** values, they set where each piece of text sits on the screen. |
:::

::::
