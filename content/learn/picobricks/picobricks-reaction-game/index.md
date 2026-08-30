---
title: "Ready, Set, React! Build a PicoBricks Reaction Game"
platform: picobricks
level: Beginner
duration: 30 mins
kit:
    - PicoBricks Kit
    - PicoBricks Brick IDE
    - MicroUSB to USB cable
    - Laptop or tablet for coding
image: /learn/picobricks/picobricks-reaction-game/cover-picobricks-reaction-game.png
youtube: ""
pdf: /learn/picobricks/picobricks-reaction-game/picobricks-reaction-game.pdf
---

::::tutorial-steps

:::step{title="Overview"}
In this project we are going to design a game to test your reaction times against your friends.

When PicoBricks is turned on, a timer will start. The timer can detect time in :g[milliseconds]{slug="millisecond"}, which are tiny slices of time. Timers are used in lots of household items like ovens, air fryers and microwaves.

We will use the :g[OLED screen]{slug="oled-screen"} to show a welcome message when PicoBricks starts and instructions on how to begin the game. The timer will count down from three. Once it hits zero, the :g[LED]{slug="led"} will turn on randomly anywhere from 1 to 5 seconds later.

When the LED turns on, the player has to press the :g[button]{slug="button"} as fast as they can. This is the player’s reaction time, and it will be measured in milliseconds. The player’s reaction time will then be displayed on the OLED screen.

::callout{icon="🎯" color="green"}
**What you'll learn**
- How to make a countdown timer
- How to use random numbers to surprise the player
- How to measure time in milliseconds
- How to make a button, an LED and a screen work together
::
:::

:::step{title="What you'll need"}
::what-youll-need
::
:::

:::step{title="Key words"}
::key-words{terms="millisecond,integer,random,function,variable,while-loop,forever-loop,button,led,oled-screen,buzzer,picobricks,raspberry-pi-pico,module"}
::
:::

:::step{title="Set up your PicoBricks"}
1. Open your favourite web browser. We recommend Google Chrome or Microsoft Edge.
2. Type [ide.picobricks.com](https://ide.picobricks.com/verticalblocks.html?0&_ga=2.232196503.946201499.1699876362-666138695.1699876362) into the address bar to open the PicoBricks coding editor.
3. Connect the PicoBricks board to your computer with the USB cable.
4. Select the **Connection** button at the top of your code editor to pair the Pico with the code editor.

![The PicoBricks Brick IDE coding environment](/learn/picobricks/picobricks-reaction-game/CodingEnvironment.webp)
:::

:::step{title="Create the CountDown function"}
First, we will create a :g[function]{slug="function"} called `CountDown`.

This function shows a countdown on the OLED screen before the game begins.

1. Select **Functions**. Drag a `to do something` block into the code area and drop it.
2. Change **do something** to **CountDown**.
3. Select **Variables**. Select **Create Variable** and type **counter**.
4. Drag a `set counter to` block and snap it inside the `to CountDown` block.
5. Select **Math**. Drag a `0` block and snap it into the blank space on your `set counter to` block.
6. Change the **0** to **3**.
7. Select **Loops**. Drag a :g[while]{slug="while-loop"} block and snap it below the `set counter to 3` block.
8. Select **Logic**. Drag an `=` block and snap it into the blank space on your `while` block.
9. Change the **=** sign to a **>** sign.
10. Select **Variables**. Drag a `counter` block and snap it into the first blank space on your `while` block.
11. Select **Math**. Drag a `0` block and snap it into the other blank space on your `while` block.
12. Select **Display**. Drag a `Clear Screen Buffer` block and snap it inside the `while counter > 0` block.
13. Select **Display**. Drag a `Write Text to Screen` block and snap it under the `Clear Screen Buffer` block.
14. Change the **X** value to **60** and the **Y** value to **30**.
15. Select **Variables**. Drag a `counter` block and snap it into the **PicoBricks** slot on your `Write Text to Screen` block.
16. Select **Display**. Drag a `Show Screen Buffer` block and snap it under the `Write Text to Screen X 60 Y 30 counter` block.
17. Select **Loops**. Drag a `wait` block and snap it below the `Show Screen Buffer` block.
18. Select **Variables**. Drag a `change counter by` block and snap it below the `wait 1` block.
19. Change the **1** to **-1**.

::callout{icon="⏱️" color="blue"}
The countdown starts at 3, then changes the counter by -1 each time, so it counts down: 3, 2, 1.
::

![The completed CountDown function blocks](/learn/picobricks/picobricks-reaction-game/CountDownFunction.webp)
:::

:::step{title="Create the Timer function"}
Next, we will create a function called `TimerFunc`.

This function measures how long it takes the player to press the button after the LED turns on.

1. Select **Functions**. Drag a `to do something` block into the code area and drop it.
2. Change **do something** to **TimerFunc**.
3. Select **Variables**. Select **Create Variable** and type **timer**.
4. Drag a `set timer to` block and snap it inside the `to TimerFunc` block.
5. Select **Math**. Drag a `0` block and snap it into the blank space on your `set timer to` block.
6. Select **Loops**. Drag a `while` block and snap it below the `set timer to 0` block.
7. Select **Logic**. Drag an `=` block and snap it into the blank space on your `while` block.
8. Select **Bricks**. Drag a `Read Button` block and snap it into the first blank space on your `while` block.
9. Select **Math**. Drag a `0` block and snap it into the other blank space on your `while` block.
10. Select **Variables**. Drag a `change timer by` block and snap it inside the `while Read Button = 0` block.
11. Select **Loops**. Drag a `wait` block and snap it under the `change timer by 1` block.
12. Select **Bricks**. Drag a `Set Led` block and snap it under the `while Read Button = 0` block.
13. Change **on** to **off**.
14. Select **Basic**. Drag a `Serial Print` block and snap it under the `Set Led off` block.
15. Select **Variables**. Drag a `timer` block and snap it into the `Serial Print` block where it says **PicoBricks**.
16. Select **Display**. Drag a `Clear Screen Buffer` block and snap it under the `Serial Print timer` block.
17. Select **Display**. Drag a `Write Text to Screen` block and snap it under the `Clear Screen Buffer` block.
18. Change the **Y** value to **10** and change **PicoBricks** to **Press the Button**.
19. Select **Display**. Drag another `Write Text to Screen` block and snap it underneath.
20. Change the **X** and **Y** values to **25** and change **PicoBricks** to **to repeat**.
21. Select **Display**. Drag a `Show Screen Buffer` block and snap it underneath.
22. Select **Display**. Drag another `Write Text to Screen` block and snap it under the `Show Screen Buffer` block.
23. Change the **X** value to **25**, the **Y** value to **40**, and change **PicoBricks** to **Score**.
24. Select **Display**. Drag another `Write Text to Screen` block and snap it underneath.
25. Change the **X** value to **70** and the **Y** value to **40**.
26. Select **Variables**. Drag a `timer` block and snap it into the **PicoBricks** slot on your `Write Text to Screen` block.
27. Select **Display**. Drag another `Write Text to Screen` block and snap it underneath.
28. Change the **X** value to **80**, the **Y** value to **40**, and change **PicoBricks** to **s** for seconds.
29. Select **Loops**. Drag a `wait` block and snap it underneath.
30. Change **1** to **0.3**.
31. Select **Display**. Drag a `Show Screen Buffer` block and snap it under the `wait 0.3` block.

::callout{icon="⚡" color="purple"}
This function keeps counting until the player presses the button. The quicker they press it, the lower their score will be.
::

![The completed TimerFunc blocks](/learn/picobricks/picobricks-reaction-game/TimerFunction.webp)
:::

:::step{title="Create the game start code"}
Now we will create the code that starts the game and shows the player what to do.

1. Select **Basic**. Drag a `PicoBricks` block into the code area and drop it.
2. Select **Bricks**. Drag a `Set Led` block and snap it onto the `PicoBricks` block.
3. Change **on** to **off**.
4. Select **Display**. Drag a `Write Text to Screen` block and snap it under the `Set Led off` block.
5. Change the **Y** value to **10** and change **PicoBricks** to **Press the Button**.
6. Select **Display**. Drag another `Write Text to Screen` block and snap it underneath.
7. Change the **X** value to **25**, the **Y** value to **35**, and change **PicoBricks** to **To Start!**
8. Select **Display**. Drag a `Show Screen Buffer` block and snap it underneath.

![The completed game start code](/learn/picobricks/picobricks-reaction-game/StartTheGame.webp)
:::

:::step{title="Build the forever loop"}
Next, we are going to create the :g[forever]{slug="forever-loop"} code that runs our reaction game.

This code will:

- Clear the OLED screen after the button is pressed
- Start the countdown when the `CountDown` function is called
- Turn the LED on randomly after **Go!!!** has been displayed
- Print the score once we call the `TimerFunc` function

1. Select **Loops**. Drag a `forever` block and snap it under the `Show Screen Buffer` block.
2. Select **Loops**. Drag a `while` block and snap it inside the `forever` block.
3. Select **Logic**. Drag an `=` block and snap it into the blank space on your `while` block.
4. Select **Bricks**. Drag a `Read Button` block and snap it into the first blank space on your `while` block.
5. Select **Math**. Drag a `0` block and snap it into the other blank space on your `while` block.
6. Change the **0** to **1**.
7. Select **Display**. Drag a `Clear Screen Buffer` block and snap it inside the `while Read Button = 1` block.
8. Select **Functions**. Drag a `CountDown` block and snap it below the `Clear Screen Buffer` block.
9. Select **Display**. Drag a `Clear Screen Buffer` block and snap it under the `CountDown` block.
10. Select **Display**. Drag a `Write Text to Screen` block and snap it under the `Clear Screen Buffer` block.
11. Change the **X** value to **60**, the **Y** value to **20**, and change **PicoBricks** to **Go!!!**.
12. Select **Display**. Drag a `Show Screen Buffer` block and snap it below the `Write Text to Screen X 60 Y 20 "Go!!!"` block.
13. Select **Loops**. Drag a `wait` block and snap it below the `Show Screen Buffer` block.
14. Select **Math**. Drag a `random integer from` block and snap it into the **1** slot on your `wait` block.
15. Change the **100** to **5**.
16. Select **Bricks**. Drag a `Set Led` block and snap it under the `wait random integer 1 to 5` block.
17. Select **Functions**. Drag a `TimerFunc` block and snap it under the `Set Led on` block.

::callout{icon="🎲" color="blue"}
The random wait means the LED will not turn on at the same time every round. That makes the game harder because the player cannot guess when to press the button.
::

![The completed forever loop blocks](/learn/picobricks/picobricks-reaction-game/ForeverLoop.webp)
:::

:::step{title="Check your completed code"}
This is now our completed forever loop code and all the code needed to run our reaction time game.

Before you press **Run**, compare your blocks with the completed code below.

![The completed reaction game code](/learn/picobricks/picobricks-reaction-game/CompletedCode.webp)
:::

:::step{title="Run it and test"}
Now the code is finished, let’s test the reaction game.

1. Select the **Run** button at the top of the code area.
2. Press the button to start the game.
3. Watch the countdown on the OLED screen.
4. Wait for the LED to turn on.
5. When the LED turns on, press the button again as fast as you can.
6. Check your reaction time on the OLED screen.
7. Press the button again if you want to repeat the game.

::callout{icon="🏁" color="green"}
You have built your own reaction-time game with PicoBricks. Now challenge someone nearby and see who can react the fastest!
::
:::

:::step{title="Try it yourself"}
::try-it
**Challenge:** Can you make the game even cleverer?

Try adding a buzzer that beeps when the LED lights up, or keep score so you can play **best of 3** against a friend.
::
:::

:::step{title="Stuck? Quick fixes"}

Remember: mistakes are part of learning!

| Problem | Try this |
| --- | --- |
| The screen stays blank | Check the OLED screen is plugged in properly, and that you added a `Show Screen Buffer` block after writing your text. |
| My code won't connect | Make sure the USB cable is pushed in all the way, then click the **Connection** button to pair your Pico. |
| The LED never lights up | Check your `Set Led` block says **on** (not off) in the forever loop, and that the LED module is connected. |
| The timer keeps counting forever | Remember to press the button after the LED lights up, as that's what tells the timer to stop. |

:::

::::