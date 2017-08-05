
## MyReads

![MyReads Preview](http://i.imgur.com/pWcZQiA.gif)

### Installing and launching the app

````bash
$ git clone https://github.com/ldgarcia/reactnd-project-myreads.git
$ cd reactnd-project-myreads
$ npm install
$ npm start
````

### Features
#### Main page
* The main page shows 3 shelves for books.
* The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.
* When the browser is refreshed, the same information is displayed on the page.
* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

#### Search page
* The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
* When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.
* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
