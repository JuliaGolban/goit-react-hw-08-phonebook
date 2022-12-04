**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Preparing a project

1. You have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Creat with [Create React App](https://github.com/facebook/create-react-app).
   To get acquainted and configure additional features
   [refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

# Admission criteria

Use this
[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md)
as a starting point for your application.

- The `goit-react-hw-08-feedback` repository has been created.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages`.
- Redux-state stores the minimum required set of data.
- There are no errors or warnings in the console when running the job code.
- For each component has a separate folder with the React-component file and
  styles file.
- For the components are described `propTypes`.

## Contact Book.

Refactor the "Contact Book" application code. Add to the Contact Book
application the ability to register, login, and user updates, and work with a
private collection of contacts.

### Backend

There is a ready-made backend for this task. Check out the
[documentation](https://connections-api.herokuapp.com/docs/). It supports all
necessary operations on the contact collection, as well as registering, logging
in and user update with JWT. Use it instead of your backend created with the
service [mockapi.io](https://mockapi.io/).

### Routing

Add routing with the React Router library. The application should have several
pages:

- `/register` - public route to register a new user with a form;
- `/login` - public login route of an existing user with a form;
- `/contacts` - a private route for your contact list. Add a navigation
  component `Navigation` with links to navigate routes.

### User menu

Create a component `UserMenu`, that displays the user's email and a logout
button. Here's what its markup might look like.

```html
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

### Styling

This is the final version of the application, so work on styling the interface.
You can use a styling library or components such as
[Chakra UI](https://chakra-ui.com/) or [Material UI](https://mui.com/).
