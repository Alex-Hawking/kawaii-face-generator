![Header](https://img.itch.zone/aW1nLzM1OTYzNDQucG5n/original/rnzUQI.png)
# kawaii-face-generator

> # "Kawaii"
> ## In Japanese culture, the art of being lovable or cute


### Generate the most kawaii faces with Kawaii Face Generator.

![Screenshot](https://img.itch.zone/aW1hZ2UvNjY1NjMyLzM1OTY0NTUuanBn/794x1000/ung52R.jpg)

# Install

## itch.io (Preffered)

> Mac or Windows

Download and run the installer from [here](https://alexhawking.itch.io/kawaii-face-generator).

## Command Line

> Any platform

- Clone or download this folder
- `cd` into the folder and run `npm install electron --save-dev`
- The run `electron start`

# How to use
When you open the app you will see a row of five buttons with three rectangle underneath. Below is how to use them:

## Creating a face
Click on any of the three rectangles to cycle forwards through that part
Right click to go backwards
Note: Changing a part will replace any content you added to the text input area

## The buttons
### Copy 📋
Copies the current face to the keyboard
You can also type in the input area to edit the face, this is also copied to the clipboard
### Paste 📄
Paste whatever is currently in your clipboard to the input area
### Clear 🗑️
Removes contents of the input area
### Edit ✏️
See the editing instructions below
### Shuffle 🔀
Creates a random face
### Editing
When you click the edit ([✏️]) button it will open a folder with three  .txt files as below:
```
|-faces
|--ears.txt
|--eyes.txt
|--mouths.txt
 ```
Each of these  .txt files contains a column of various parts. To add a new set of ears, eyes or a new mouth follow the instructions below:

1. Click on the edit button
2. Open the .txt file which corresponds to the part you want to add
3. Create a new line
  - If you want to add a mouth simply add that mouth to a new line
  - If you want to add ears or eyes split the left and right sides with a space and add them to the new line
4. Save the file and close notepad
5. Restart Kawaii Face Generator, you can now used your custom part
6. Keyboard Shortcuts

# Kawaii Face Generator has the following shortcuts:
```
ctrl + q: quit
ctrl + r: random/shuffle
crtl + e: cycle ears
ctrl + i: cycle eyes
ctrl + m: cycle mouths
ctrl + delete: clear face
```
# The Tray (⎚👅⎚)👌

> [ Windows Only | Version 0.1.5 ]
When you open the latest version of Kawaii Face Generator you will notice an icon resembling this :

(⌐■͟ʖ■)
Sitting in the bottom right of your screen, in a location known as the tray.

How to control Kawaii Face Generator from the tray
If you right click on the tray you will be greeted with the following options:

- Copy current face to clipboard
  - Copies the face currently in the input area to the keyboard
  - Helpful for copying faces without bringing the generator in front of the app you are currently using
  - Same function as the 'Copy' button
- Shuffle
  - Performs same function as the 'Shuffle' button
- Generate list
  - Generates list of 60 random faces, saves list to desktop
  - Same function as 'Generate List' button
- Edit
  - Open Kawaii Face Generator 'Faces' folder
  - Same function as the 'Edit' button
- Show Window
  - If Kawaii Face Generator is hidden reveals and focuses on the window
  - Brings the window in front of all other windows
- Hide Window (Main function of the tray icon)
  - Hides the application (hides the window and taskbar icon)
  - Allows the app to run invisibly in the background
  - Allows easy access to window through the 'Show Window' function
- Quit
  - Quits application

# Troubleshooting
## Common Errors:

- Certain parts appear as undefined
    Open the .txt relevant to the part which contains the undefined part
    Remove any blank lines
    Save and restart
- Certain parts such as ears and eyes are both on one side of the face
    Open the .txt relevant to the part which is broken
    Look for the problematic part
    Separate the left and right parts with a space
    Save and restart
If you encounter any other errors email: alexrhawking@gmail.com

# About
Kawaii Face Generator is built in electron using HTML5, SASS and Node.js. It is packaged with electron-builder and is available on [itch.io](https://alexhawking.itch.io/kawaii-face-generator) for download.
