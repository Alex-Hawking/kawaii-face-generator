# kawaii-face-generator

"Kawaii"
In Japanese culture, the art of being lovable or cute
Generate the most kawaii faces with Kawaii Face Generator.

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
Kawaii Face Generator is built in electron using HTML5, SASS and Node.js. It is packaged with electron-builder and is available on github
