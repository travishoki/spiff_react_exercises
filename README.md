# Spiff Front-end Candidate Coding Exercises

### Purpose
These coding exercises are meant to help Spiff gain insight into how you would tackle actual feature requests by the product team. The exercises are relatively simple, but you are encouraged to treat them as if you were working on the Spiff codebase. **This means applying the same attention to code quality, tests, pull requests, commits, etc as you normally would.** 

**_Quality is valued above quantity. We value simple and readable code_**

### Instructions
1. Clone the repo **(don't fork)**
```bash
  git clone https://github.com/SpiffInc/spiff_react_exercises.git
```
2. Point the remote origin to a new repo under your account 
```bash
  git remote rename origin upstream 
  git remote add origin https://github.com/[URL TO YOUR GIT REPO]
  git push origin master
```
3. Switch to the correct Node version. If using `nvm` run: `nvm run use`
4. Retreive dependencies: `yarn`, and start the dev server: `yarn start`. The app should open on http://localhost:3000
5. This will take you to an index that lists the exercises. For each exercise:
    - click the exercise link from the index page
    - v1:
      - Review v1 specs https://github.com/travishoki/spiff_react_exercises/blob/master/src/docs/ProgressBar.md
      - Create a new branch off of master
      - Complete the `Solution` component for the exercise (the ProgressBar exercise is found in ProgressBar.js)
      - Create a pull request on your repo when finished
    - v2:
      - Review v2 specs: https://github.com/travishoki/spiff_react_exercises/blob/master/src/docs/Parser.md
      - Create a new branch off of v1
      - Build on v1 to meet v2 requirements
      - Create a pull request on your repo when finished
6. Send a link to your repo to casey@spiff.com

### Guidelines

- **If you feel like you don't have enough time to adequately demonstrate your ability and thought process, please add a few comments explaining what you would have done with more time.
- Please leave any comments that will help the reader understand important decisions you made, shortcuts taken, or things you would do differently in the future.
- Testing: write unit tests where you can and don't worry about component tests
- Place css and test files beside the component they relate to (same directory)
- Feel free to use any non-human resources you like: StackOverflow, Google, reference code on Github, etc

Thank you for taking the time to complete this coding assessment! Don't stress too much about any one thing, we evaluate the exercises holistically.
