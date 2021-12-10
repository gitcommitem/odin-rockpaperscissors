# TOP JavaScript Basics Foundations Project - Rock Paper Scissors
First Part: 2021/11/18 ~ 2021/11/18

Second Part: 2021/12/06 ~2021/12/09

## Objectives

### Part 1

Using JavaScript make a Rock Paper Scissors game to be played from the console.

There will be a GUI designed and added later in another lesson.

The game must include:
- A computer player that will be played against
- Uses a prompt to get user's input on rock, paper, or scissors
- be a 5 round game that keeps track of the score and shows who is the winner at the end

### Part 2

Using Javascript event listeners and DOM methods design and add a GUI for the Rock Paper Scissors game.

The game must include:
- A computer player that will be played against
- Buttons that users will click to select rock, paper, or scissors
- Display the running score and declare a winner once one player reaches 5 points


## Learnings

### Part 1

Felt like this was a very fun project. Trying to think through and break down the interactions was a lot of fun. 

Sometimes when code didn't seem like it was working, it was often because I had just forgot to pass through the arguments.

Thinking about function scope and what variables should be global and what should be local was also interesting.

### Part 2

One of my mentors (@joshwaiam) showed me his approach for part 1 and it helped a lot with thinking about the logic for a rock paper scissors game. He used objects to store the counter moves and referenced them when making a decision on who won. This resulted in much more streamlined code and I used this method in part 2.

I wanted to focus on refactoring my code this time around and was able to streamline code here and there. I'm starting to get better at thinking about where code can be reduced or merged together. I feel like there should be a way to reduce the amount of code I have when it comes to inserting DOM elements.

I also learned that chrome and safari render differently than firefox in how they handle javascript and so I needed to use a delay for the alert box that pops up when someone wins 5 rounds.
