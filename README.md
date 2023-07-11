# Decks

**Decks is a micro-project that further explores the combined use of Figma and Astro to design and implement a web application, based on a concept for a deck building social media network.**

- [View the app here](https://preeminent-llama-f7ac01.netlify.app/)

## The design

I took a mobile-first approach to the design of this application, and started with an iPhone 14 frame. I also wanted to design for dark mode, and since I planned to use Tailwind, I grabbed the RGB codes for the grays in TW as well as an accent cyan. The icons were downloaded from Flaticon and masked with the cyan.

![Figma design](https://raw.githubusercontent.com/blair3003/decks/master/public/decks-figma.PNG)

## The implementation

After initatiating a new Astro project, I installed some additional packages including Tailwind and Astro Icons, and imported the required fonts from Google Fonts. I then created some dummy markdown files and stored them in a data/cards folder outside of the src files.

I decided to focus on two main components in this application - the Deck and the Card. I did create an additional Button component for the interactive card buttons, and I could have created more components such as a Profile Pic, but I have chosen the deck and card as the main focus of the implementation phase.

- The **Deck** was given the responsibility of rendering a collection of Cards provided to it via prop drilling. This included the styling of child elements and controlling their behaviour during user interaction. 
- The **Card** was given the responsibility of displaying the data passed to it from the Deck, and providing a set of buttons to Like and Share etc.

For this micro project I decided to keep the scope small such that, the order of the cards in the deck should be controlled by swiping, or dragging to the sides of the screen and the buttons on the card should toggle an increase of 1 when pressed.
