### Installing Nodejs for the first time

Go to https://nodejs.org/en/ and install the latest version of node. Should be a normal desktop installer

### Installing yarn for the first time

Open a terminal or command prompt and run the following command:

```
npm install --global yarn
```

```yarn``` is a package manager just like ```npm```. We will be using it instead of ```npm```

Once ```yarn``` is installed we need to install all dependencies like: React, Storybook, Material-UI, etc.
I already added the dependencies so simply run:

```
yarn
```

The project should be good to go now.

### Storybook workflow

Run the command ```yarn storybook```

This should start the storybook server at localhost:9009. If thats not correct just check the output in the terminal. It will tell you where storybook is running. When you make changes to files, storybook will automatically reload everything. If things aren't updating just refresh the page. Make sure to watch the terminal for errors.

New components should go into the ```src/components``` folder. All component names should be capitalized. This is a good way to differentiate between standard HTML elements and custom React components since we can mix and match. File names should match the component names. None of this is required by React, just the styleguide that we are following.

### Git workflow

Example for building a button component:

```git pull origin master``` to get the latest version of master
```git checkout -b button``` to create a new feature branch

***Do some work***

```git status``` to print out branch status. Just read it over and make sure that the file changes make sense
```git add .``` adds all changes to the branch
```git commit -m "commit message"``` commits all changes to the branch permanantly
```git push origin button``` push the changes to button branch in the github repo

Then go to github and create a pull request
