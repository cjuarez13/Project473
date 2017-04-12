# Project473


# Overview:

A Web Application that allows users to anonymously post comments/remarks on their bosses. Let them know how you really feel about them without getting caught!

Snark-A-Boss
 
 ----------------------------------------------------------------------------------
# Installation Requirements 

Prerequisites: 
     Install the following tools on your computer
     
- Google Chrome (Latest version: https://www.google.com/chrome/browser/desktop/)
- Text Editor (Preferably Atom: Download at https://atom.io/
   - Atom Plug-ins: Open Atom and reveal its Settings screen. On a Mac, go to Atom → Preferences... or use the keyboard shortcut Command-, (that is, the Command key plus the comma). On Windows, go to File → Settings or using the keyboard shortcut Ctrl- , (Ctrl + ,)
   - On lefthand side of the Settings screen, click  on +Install. Here you can search for plug-in packages, find and install the following: emmet, atom-beautify, autocomplete-paths, api-docs, linter, linter-csslint, linter-htmlhint, and linter-eslint
- Node.js (Download at https://nodejs.org/en/)
     - Installing browser-sync: Open up a command prompt and run the following on the command line:
         
          *npm install -g browser-sync
 
     You will need superuser privileges when running this command
    
         


- Node.js






jquery-comments
jquery-ui
bootstrap
* Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
https://www.pexels.com/photo/access-adult-blur-business-261628/'

---------------------------------------------------------------------------------------------------

# Setup Instructions for Snark-A-Boss:

1) Open up a command line (either in Mac/Windows/Linux) and navigate into the same folder/directory Project473 is located in
2) Within the directory, run the following commands to get the project up and running:

To start the backend server for the project, run the following command (Same instructions given from Assgnmt 8)

     json-server --port=3002 --watch data/db.json


To run automation tool for web development, run the following command:

    browser-sync start --server --files "*.html, css/*.css, js/*.js"
    
   *If 
    
    
  
**Run both commands to have website/project running

# Using the Web App

-  In landing page choose Find Boss or Add Boss
  - Find Boss
    - Above the comment input field start typing your boss's name and see if it autcompletes! If it Doesn't then it doesnt exist
    - If it exists then start choose that boss and start snarking!
  - Add Boss
    - Type your boss's first and last name and add your boss! If they exist then it will redirect you to their comment page
  - Commenting
    - Just start commenting on the your boss's page and you're good to go!
  
  

