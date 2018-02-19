# React Interview App

Project based on [create-react-app](https://github.com/davezuko/react-redux-starter-kit)

Install with `npm install` and run the project `npm start`.

Please consider stylizing the components which you are building using [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/). It is already builtin the project.

# Tasks
1. Create a new route `/search`.
2. The view of the component will contain an input type text and a list group. (please also do the styling) 
3. Once you type in the input more than 2 characters, perform a search using [GitHub API](https://developer.github.com/v3/search/#search-users). Display the results in your list group.
4. Create a new route `/user-profile/:id`
	* On the list group, link each user to this route
	* Here you you will display the user information and repositories list

BONUS:
1. For each profile viewed memorize them the state of the app. Create a new route `/view-history` where you can view the list of your browsing history
2. Add ability to remove users from the view history group
3. Implement a way to have a persistent store. Suggestion: [https://github.com/elgerlambert/redux-localstorage](https://github.com/elgerlambert/redux-localstorage)

Do not feel bounded to use the suggested page. You can use any package of your choosing.

**GOOD LUCK! 👍**# react-small-app
