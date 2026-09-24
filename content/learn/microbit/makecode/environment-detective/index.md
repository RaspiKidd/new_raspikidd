---
title: "Environment Detective: Exploring Our World with micro:bit"
platform: microbit
language: makecode
level: Beginner
duration: 45 mins
kit:
    - micro:bit
    - Microsoft MakeCode or the micro:bit app
    - Micro USB cable
    - Battery pack (optional)
image: /learn/microbit/makecode/environment-detective/EnvironmentDetectiveCover.webp
youtube: ""
pdf: /learn/microbit/makecode/environment-detective/environment-detective.pdf
draft: false
---

::::tutorial-steps

:::step{title="Overview"}
Ever wondered how technology can help us understand the world around us?

In this project, you are going to become an environment detective using your :g[micro:bit]{slug="micro-bit"} and its built-in sensors.

Just like your senses help you explore the world, the micro:bit can tell you:

- How warm or cold it is using its :g[temperature sensor]{slug="temperature-sensor"}
- How bright or dark it is using its :g[light sensor]{slug="light-sensor"}
- Which direction you are facing using its :g[compass]{slug="compass"}

You will make the readings appear on the micro:bit’s :g[LED matrix]{slug="led-matrix"}.

::callout{icon="🎯" color="green"}
**What you'll learn**

- Read the temperature using the micro:bit’s temperature sensor
- Measure how bright or dark it is
- Find out which direction you are facing
- Show numbers, letters and a bar graph on the LED matrix
- Use a variable and if blocks to let your code make decisions
::

Are you ready to start exploring? Let’s begin our detective adventure!
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="micro-bit,temperature-sensor,light-sensor,compass,led-matrix,variable,if-statement,comparison-operators"}
::
:::

:::step{title="Set up MakeCode"}
You can complete this project on a computer, tablet or phone.

### Using a computer

1. Open your favourite web browser. Google Chrome or Microsoft Edge works well.
2. Go to [makecode.microbit.org](https://makecode.microbit.org).
3. Select **New Project**.
4. Name your project **Environment Detective**.
5. Select **Create**.

### Using a tablet or phone

1. Open the **micro:bit** app.
2. Select **Create Code**.
3. Select **New Project**.
4. Name your project **Environment Detective**.
5. Select **Create**.

Whichever device you use, your coding area will look similar to this:

![The MakeCode coding area with the on start and forever blocks](/learn/microbit/makecode/environment-detective/CodeArea.webp)
:::

:::step{title="Prepare the code area"}
MakeCode gives you two blocks to begin with, but we do not need them for this project.

Let’s clear the coding area and add the three events that will control our environment detector.

1. Drag the `on start` block over to the menu on the left and drop it into the bin.
2. Delete the `forever` block in the same way.
3. Open **Input**.
4. Drag an `on shake` block into the coding area.
5. Open **Input** again.
6. Drag an `on button A pressed` block into the coding area.
7. Right-click the `on button A pressed` block, or press and hold it on a touchscreen.
8. Select **Duplicate**.
9. On the copied block, change **A** to **B**.

You should now have three event blocks:

- `on shake`
- `on button A pressed`
- `on button B pressed`

![The coding area with the shake, button A and button B event blocks](/learn/microbit/makecode/environment-detective/SettingUpCodeArea.webp)

::callout{icon="💡" color="gray"}
**What is an event?**

An event is something that makes part of your code run. In this project, shaking the micro:bit or pressing one of its buttons will trigger an event.
::
:::

:::step{title="Sense the temperature"}
First, we will make the micro:bit show the temperature when you shake it.

1. Open **Basic**.
2. Drag a `show number` block into the `on shake` block.
3. Open **Input**.
4. Find the `temperature` block.
5. Drag it onto the `0` inside the `show number` block.

Your code should look like this:

![The on shake block containing show number temperature](/learn/microbit/makecode/environment-detective/S1_TemperatureSensing.webp)

Here’s what this bit of code is doing:

- The micro:bit waits until it detects a shake.
- It reads the temperature sensor.
- It shows the temperature as a number on the LED matrix.

::callout{icon="🌡️" color="green"}
The micro:bit displays temperature in degrees Celsius.
::
:::

:::step{title="Sense the light level"}
Next, we will use button A to measure the light around the micro:bit.

1. Open **LED**.
2. Drag a `plot bar graph of` block into the `on button A pressed` block.
3. Open **Input**.
4. Find the `light level` block.
5. Drag it onto the first `0` in the `plot bar graph of` block.
6. Change the number after **up to** from `0` to `255`.

Your code should look like this:

![The button A block containing the light-level bar graph code](/learn/microbit/makecode/environment-detective/S2_LightSensing.webp)

When you press button A, the LED matrix will draw a bar graph showing the light level.

- In a dark place, fewer LEDs will light up.
- In a bright place, more LEDs will light up.

::callout{icon="🔦" color="gray"}
Try covering the micro:bit with your hand, then shine a torch towards it. Press button A after each test and watch how the graph changes.
::
:::

:::step{title="Build the compass code"}
Now we will use button B to read the compass.

Let’s begin with the easy version, which shows the compass direction as a number.

1. Open **Basic**.
2. Drag a `show number` block into the `on button B pressed` block.
3. Open **Input**.
4. Find the `compass heading` block.
5. Drag it onto the `0` in the `show number` block.

Your code should look like this:

![The button B block containing show number compass heading](/learn/microbit/makecode/environment-detective/S3_CompassSensingEasy.webp)

When you press button B, the micro:bit will display a number between `0` and `359`.

The number tells you which direction the micro:bit is pointing:

| Direction | Compass heading |
| --- | ---: |
| North | 0 |
| East | 90 |
| South | 180 |
| West | 270 |

::callout{icon="🧭" color="gray"}
The compass works like a circle. After 359 degrees, it returns to 0 degrees.
::
:::

:::step{title="Show compass letters"}
Numbers are useful, but letters are easier to recognise quickly.

We will now replace the number with **N**, **E**, **S** or **W**.

### Create the direction variable

A :g[variable]{slug="variable"} is like a labelled box that stores information.

1. Remove the `show number compass heading` block from `on button B pressed`.
2. Open **Variables**.
3. Select **Make a Variable**.
4. Name the variable `direction`.
5. Drag `set direction to 0` into the `on button B pressed` block.
6. Open **Input**.
7. Drag `compass heading` onto the `0`.

Your block should now say:

`set direction to compass heading`

### Add the north check

1. Open **Logic**.
2. Drag an `if true then else` block underneath `set direction to compass heading`.
3. Open **Logic** again.
4. Drag an `or` block onto `true`.
5. Add a comparison block to each side of `or`.
6. Build these two comparisons:

   - `direction > 315`
   - `direction < 45`

7. Open **Basic**.
8. Put a `show string` block inside the first `if` section.
9. Change the text from `Hello!` to `N`.

This checks whether the direction is near the top of the compass circle.

### Add east

1. Select the **+** underneath the `else` section to add an `else if`.
2. Add a comparison that says `direction < 135`.
3. Put a `show string` block inside it.
4. Change its text to `E`.

### Add south

1. Select the **+** again to add another `else if`.
2. Add a comparison that says `direction < 225`.
3. Put a `show string` block inside it.
4. Change its text to `S`.

### Add west

1. Put a `show string` block inside the final `else` section.
2. Change its text to `W`.

Your finished compass code should look like this:

![The completed compass code showing N, E, S or W](/learn/microbit/makecode/environment-detective/S4_CompassSensingTricky.webp)

The code uses :g[if statements]{slug="if-statement"} and :g[comparison operators]{slug="comparison-operators"} to decide which letter to show.

::callout{icon="🍕" color="gray"}
**How your code decides**

Imagine the compass is a pizza cut into four slices. The code checks which slice the compass number has landed in, then shows the letter for that direction.
::
:::

:::step{title="Download your code"}
Your environment detector is ready to transfer to the micro:bit.

### Using a computer

1. Connect your micro:bit to the computer with the micro USB cable.
2. In MakeCode, select the **three dots** next to **Download**.
3. Select **Connect Device**.
4. Follow the instructions on the screen.
5. Choose your micro:bit from the list.
6. Select **Connect**.
7. Select **Download** to send the code to the micro:bit.

![The MakeCode screen with the device connection menu open](/learn/microbit/makecode/environment-detective/DownloadingCode.webp)

### Using a tablet or phone

1. Select **Download**.
2. Follow the instructions on the screen to pair the micro:bit with the app.
3. Send the code to your micro:bit.

![Downloading code through the micro:bit app](/learn/microbit/makecode/environment-detective/AppDownload.gif)

::callout{icon="🔌" color="gray"}
If the computer cannot find your micro:bit, try another USB cable. Some cables can only charge devices and cannot transfer code.
::
:::

:::step{title="Test your environment detector"}
You can test the project using the MakeCode simulator or a real micro:bit.

### Test the simulator

The simulator is the pretend micro:bit on the left of the MakeCode screen.

![Testing the environment detector in the MakeCode simulator](/learn/microbit/makecode/environment-detective/SimDemo.gif)

#### Temperature

1. Select the white circle next to **Shake**.
2. Watch the temperature appear on the LED matrix.
3. Move the temperature slider and try shaking it again.

#### Light

1. Find the light control above button A on the simulator.
2. Drag the yellow section to change the light level.
3. Press button A.
4. Watch the LED bar graph change.

#### Compass

1. Press button B.
2. Watch the compass direction appear.
3. Drag the micro:bit logo at the top of the simulator to turn it.
4. Press button B again and see whether the letter changes.

### Test a real micro:bit

- **Temperature:** Shake the micro:bit to display the temperature.
- **Light:** Press button A. Try covering the micro:bit or shining a torch towards it.
- **Compass:** Turn in a different direction and press button B.

::callout{icon="💡" color="gray"}
**Compass calibration**

The first time you use the compass, the micro:bit may ask you to tilt it around until every LED is switched on.

This is called calibrating. It helps the compass work out which direction is north.
::
:::

:::step{title="Try it yourself"}
::try-it
**Challenge: Build an environment warning system**

Can you make the micro:bit warn you when the room gets too cold?

Add an `if` block to the `on shake` code. Make it check whether the temperature is below a number you choose, such as `15`.

If it is too cold, make the micro:bit show:

- A sad face
- A snowflake
- Your own warning picture

Can you create another warning for the light sensor? Try showing a picture when the room gets too dark.
::
:::

:::step{title="Stuck? Quick fixes"}
| Problem | Try this |
| --- | --- |
| Nothing happens when I shake the micro:bit | Check that `show number temperature` is inside the `on shake` block. Give the micro:bit one firm, clear shake. |
| The temperature looks too warm | This is normal. The sensor is on the micro:bit itself, so it can warm up after the board has been switched on or held in your hand. |
| The light graph is always full or empty | Check that the **up to** value is `255`. Cover the micro:bit with your hand or shine a torch towards it, then press button A again. |
| Button B shows the wrong direction | Complete the compass calibration by tilting the micro:bit until every LED has lit up. |
| The compass always shows W | Check the numbers in your comparisons: `315` and `45` for north, `135` for east and `225` for south. |
| I cannot find a block | Check the correct category: **Basic**, **Input**, **LED**, **Logic** or **Variables**. Some blocks may be underneath **More**. |
| My code will not download | Try another USB cable or USB socket. Check that your micro:bit is paired with MakeCode. |

::callout{icon="🐛" color="green"}
Don’t worry if it doesn’t work first time. That’s how coding works! Check one block at a time and compare it with the pictures.
::
:::

::::