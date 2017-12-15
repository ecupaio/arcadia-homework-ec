# Homework for Arcadia Power

View the site at [https://ecupaio.github.io/arcadia-homework-ec/](https://ecupaio.github.io/arcadia-homework-ec/)

I built this copy of [evernote.com](https://evernote.com/) with my Jekyll template I have developed over the time I have been with the DNC. Just about everything you see on the page with the exception of the menus and footer are editable through the Jekyll Admin interface.

If I didn't cover any of your question with the docs below, let me know: [ecupaio@gmail.com](mailto:ecupaio@gmail.com) or open an issue. 

## CSS/Frameworks

I use the [PureCSS framework](https://purecss.io/) for simple, lightweight buttons and grids, as well as my own base styles I store in `_sass/base.scss`. I use SASS because that's the standard issue CSS preprocessor for Jekyll. All of my CSS for this project specifically is located in `_sass/custom.scss`. I put everything in one place for simple reviewing and I commented each section of the site with its parent ID.

## JS
I used jQuery for my javascript library. Every function is commented in `_includes/js/site_functions.js` folder.

## Features
The HTML, CSS of this site was fairly simple to recreate, but the features on the site took some extra thought to complete.

### Menu
Evernote's dropdown/sidebar menu is two separate elements, but I chose to make one. That way edits can be easily made to the menu without having to make it in two separate places. If I had some extra time, I would create an include that I could drop in the footer as well and create markdown so users could simply edit it in the admin interface.

### Intro Animation
The intro animation is editable by the user! You can add as many or as little items to the mini slider. Just go to the `signup.md` file in `_sections` and edit the list under intro. I just used a simple add/remove class to get show a CSS transition. Evernote uses keyframes, but it's static and not editable.

### Video player
The links for the video embed are also editable by the user. All you do is pop a youtube link in the `video` frontmatter within each of the `_benefits` pages and the [Youtube Iframe API](https://developers.google.com/youtube/iframe_api_reference) does the rest of the work for you. I used youtube's API because it's cleaner than just creating an iframe element with jquery and you can potentially add events based on video behaviors (track views, redirect to pages after video end, etc.)

### Post slider
You guessed, all posts are editable as well. You just add in the title, content, tag, and image and the [slick carousel plugin](http://kenwheeler.github.io/slick/) does the rest of the work. It's my favorite carousel plugin because it's well documented, updated constantly, and lightweight.

## Development Docs

For engineers, view the docs below to set up on your local machine:

### Ruby

macOS users will have ruby already, but it is recommended to upgrade to a newer version using Homebrew:

* Install [Homebew](https://brew.sh/)
* `brew install ruby`

### Bundle

Bundle is a tool for managing ruby dependencies. It is installed using a ruby package called `gem`, which you should already have from installing ruby:

`gem install bundle`

### Run local Jekyll admin instance

`cd <your-repo>`

Now install Jekyll using Bundle:

`bundle`

You should messages about packages being installed, ending with something like: "Bundle complete! 6 Gemfile dependencies, 33 gems now installed."

Now you should be able to start your local jekyll server:

`jekyll serve --watch`

Go to `localhost:4000` to see it in action and `localhost:4000/admin` to access the admin panel
