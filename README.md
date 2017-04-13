# Project473: Snark-A-Boss


# Credits

jquery-comments: https://github.com/Viima/jquery-comments

jquery-ui: http://jqueryui.com/

bootstrap: http://getbootstrap.com/

Theme:
* Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
https://www.pexels.com/photo/access-adult-blur-business-261628/


# Contributors:

- Luis Covarrubias
- Francis Arocha
- Kim Phung Tran
- Crystal Juarez
- Roya Askari
- Andrew Michel

# Project Scope

Snark-A-Boss will allow users to anonymously snark on their bosses. It will allow them to search on any existing bosses that may be in the database and allow for bosses to be added. Under an existing boss, there will be a commenting area where comments will be sorted from newest to oldest. The ability to sort from oldest to newest will also be available.

Let them know how you really feel about them without getting caught!

# Project Functionality

- Users can find a boss
- Users can add a boss
- Users can comment on an existing boss
- Users can sort comments from newest to oldest or oldest to newest
- Users can reply to existing comments


# Prerequisites: 

Install the following tools on your computer before running the application
     
- Google Chrome (Latest version: https://www.google.com/chrome/browser/desktop/)
- Text Editor (Preferably Atom: Download at https://atom.io/
   - Atom Plug-ins: Open Atom and reveal its Settings screen. On a Mac, go to Atom → Preferences... or use the keyboard shortcut Command-, (that is, the Command key plus the comma). On Windows, go to File → Settings or using the keyboard shortcut Ctrl- , (Ctrl + ,)
   - On lefthand side of the Settings screen, click  on +Install. Here you can search for plug-in packages, find and install the following: emmet, atom-beautify, autocomplete-paths, api-docs, linter, linter-csslint, linter-htmlhint, and linter-eslint
- Node.js (Download at https://nodejs.org/en/)
     - Installing browser-sync: Open up a command prompt and run the following on the command line:
         
               npm install -g browser-sync
 
        *You will need superuser privileges when running this command*
 - json-server
     - From the command line, install the json-server tool with
          
               npm install -g json-server

 - Download Project473 onto your computer
        
  You are now ready to have Snark-A-Boss up and running!

# Setup

1) Open up a command line (either in Mac/Windows/Linux). Navigate into the same folder/directory Project473 is located in
2) Within the directory, run the following commands to get the project up and running:

To start the backend server for the project, run the following command (Same instructions given from Assgnmt 8)

     json-server --port=3002 --watch data/db.json


To run automation tool for web development, run the following command:

    browser-sync start --server --files "*.html, css/*.css, js/*.js"

** Run both commands to have website/project running


# Using the Web App

-  In the initial home page, "Find your boss" and "Add your boss" options will be available

    - Find your boss
        - In the initial home page, click on "Find your boss". This will lead you to the "Find your boss" tab. From here you will be able to navigate to "Home" or "Add your boss"
        - Above the comment input field start typing your boss's name and see if it autocompletes. If it does not autocomplete, then the boss does not exist in the database.
        - If the boss exists, then simply choose that boss to start snarking.
    - Add your boss
        - From the initial home page, click on "Add your boss". This will lead you to the "Add your boss" tab. From here you will be able to navigate to "Home" or "Find your boss"
        - Type your boss's first and last name to add your boss. If they exist within the database then it will automatically redirect you to their comment page.
    - Commenting
        - Just start commenting on the your boss's page and you're good to go.
