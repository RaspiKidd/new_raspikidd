---
platform: picobricks
level: Beginner
duration: 15 mins
kit:
  - PicoBricks
  - Servo motor
  - USB to MicroUSB cable
image: /learn/picobricks/controlling-a-servo-motor/servo-cover.png
---

# Controlling a Servo Motor

::::tutorial-steps

:::step{title="Overview"}

In this tutorial we're going to control a :g[servo motor]{slug="servo-motor"} using the :g[motor controller]{slug="motor-controller"} on the :g[PicoBricks]{slug="picobricks"} board.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to connect a servo motor to the PicoBricks through the motor controller.
- How to control the servo motor through code.
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="servo-motor,motor-controller,picobricks,forever-loop"}
::
:::

:::step{title="Wire up the servo motor"}
Connect the servo motor to the top connector of the motor controller with the yellow wire on the left pin. There's also a jumper across three pins. Make sure it's set for the servo motor, which means the jumper should be pushed as far left as it can go.

![Servo motor wiring diagram](/learn/picobricks/controlling-a-servo-motor/wiring-diagram.webp)
:::

:::step{title="Set up your PicoBricks"}
1. Connect the PicoBricks board to your computer using the USB cable.
2. Open your favourite web browser (we recommend Google Chrome or Microsoft Edge), go to [ide.picobricks.com](https://ide.picobricks.com) and select **PicoBlockly**.
3. Connect the board to the coding environment by selecting the **connect** button at the top of the code area.

![The PicoBlockly coding environment](/learn/picobricks/controlling-a-servo-motor/coding-environment.webp)
:::

:::step{title="Build the code"}
1. Select **Basic**. Drag a \`PicoBricks\` block into the code area.
2. Select **Loops**. Snap a :g[forever]{slug="forever-loop"} block onto the \`PicoBricks\` block.
3. Select **Motor**. Snap a \`Set Servo M1 Angle 180\` block inside the forever block. Change **M1** to **M2**, and change **180** to **90**.
4. Select **Loops**. Snap a \`wait\` block under the \`Set Servo M2 Angle 90\` block.
5. Select **Motor**. Add another \`Set Servo M1 Angle 180\` block under the \`wait 1\` block. Change **M1** to **M2** and **180** to **0**.
6. Select **Loops**. Snap a \`wait\` block under the \`Set Servo M2 Angle 0\` block.

![The completed servo motor code](/learn/picobricks/controlling-a-servo-motor/completed-code.webp)
:::

:::step{title="Run your code"}
Now the code's finished, let's run it. Select the **Run** button at the top of the code area. You should see the little arm on the servo motor move between 90 and 0 degrees.

![The servo motor arm moving between 90 and 0 degrees](/learn/picobricks/controlling-a-servo-motor/demo.gif)
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make the arm wave? Try adding more \`Set Servo\` blocks with different angles (like 0, 45 and 90), with a \`wait\` block after each one. What happens if you make the \`wait\` times shorter? Does the arm move faster?
::
:::

:::step{title="Stuck? Quick fixes"}

| Problem | Try this |
| --- | --- |
| The servo isn't moving at all | Check the servo is on the top connector with the yellow wire on the left pin, and that the USB cable is plugged in properly. |
| The servo twitches or buzzes but won't turn | Check the jumper is pushed fully to the left so it's set for the servo. |
| The code won't run | Make sure you pressed the connect button and your board is connected in PicoBlockly before pressing Run. |
| The arm only moves once, then stops | Check all your blocks are inside the forever loop so they keep repeating. |
| The arm moves to the wrong place | Check you changed M1 to M2 on every block, and that your angles are set to 90 and 0. |

:::
::::