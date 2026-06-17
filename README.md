# Web Development Project 2 - FlashFlags

Submitted by: Santiago Reyes

This web app: **insert description**

Time spent: 4 hours spent in total

## Required Features

The following **required** functionality is completed:


- [ X ] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X ] Title of card set is displayed 
  - [ X] A short description of the card set is displayed 
  - [ X] A list of card pairs is created
  - [X ] The total number of cards in the set is displayed 
  - [X ] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [ X] **A single card at a time is displayed**
  - [ X] Only one half of the information pair is displayed at a time
- [ X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X ] Clicking on a card flips it over, showing the back with corresponding information 
  - [X ] Clicking on a flipped card again flips it back, showing the front
- [X ] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ X] Cards contain images in addition to or in place of text
  - [ X] Some or all cards have images in place of or in addition to text
- [X ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/wCU5DR6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[peek](https://github.com/phw/peek) for Linux

## Notes

Describe any challenges encountered while building the app.

- Getting the CSS flip for the cards to work was tricky because backface-visibility and perspective have to be applied to specific parent and child elements. Putting them on the wrong element made both sides of the card visible at once.

- Making the Next button truly random required a do-while loop so the same card couldn't appear twice in a row, since a plain Math.random() call can return the same index it just showed.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
