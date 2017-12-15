
## Homework for Arcadia Power

View the site at [https://ecupaio.github.io/arcadia-homework-ec/](https://ecupaio.github.io/arcadia-homework-ec/)

I built this copy of [evernote.com](https://evernote.com/) 

For engineers, view the docs below to set up on your local machine:

## Development Docs

### Ruby

macOS users will have ruby already, but it is recommended to upgrade to a newer version using Homebrew:

* Install [Homebew](https://brew.sh/)
* `brew install ruby`

### Bundle

Bundle is a tool for managing ruby dependencies. It is installed using a ruby package called `gem`, which you should already have from installing ruby:

`gem install bundle`

### Run local jekyll instance

`cd <your-repo>`

Now install Jekyll using Bundle:

`bundle`

You should messages about packages being installed, ending with something like: "Bundle complete! 6 Gemfile dependencies, 33 gems now installed."

Now you should be able to start your local jekyll server:

`jekyll serve --watch`

Go to `localhost:4000` to see it in action and `localhost:4000/admin` to access the admin panel
