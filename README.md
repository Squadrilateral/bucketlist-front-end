# Bucket List App!

Have you ever wanted to have a special place to store your wildest dreams!? Good news, you came to the right place! Our app is specifically designed to allow users to personalize their page by allowing them to store bucket list items and rank them. The first step for new users is to create a personal profile by making a username and password. Once the user is authorized, they are then able to start adding their bucket list items! To add a bucket list item, users will need to fill out the appropriate fields on the page including (name, location, category and rating). Once the form is submitted, the user is then greeted by seeing their new list item displayed on the page. If a user wishes to delete or update an existing bucket list item, they can do that by clicking the appropriate buttons next to the item. Bucket list items are specific to the the authorized user, so only authorized users can see their specific list items. HAPPY BUCKET LISTING!

## Link to Backend-Api Repo: https://github.com/Squadrilateral/bucketlist-api
## Link to Backend-Api Deployed Site: https://stormy-stream-35182.herokuapp.com/

## Planning

At the start of the project on Wednesday morning we decided that a team stand-up would the best way to begin. By brainstorming ideas and talking through some of the tougher issues, we put ourselves in a great place to begin organizing and designing our application. We white boarded our wi reframes, ERD and user stories which can be seen below in the attached links.

## User Stories, Wireframe & ERD

## Link to Wireframe: https://i.imgur.com/AN5UbQU.jpg
## Link to ERD: https://i.imgur.com/LBjiLri.jpg

- User can sign up to make new account
- User can sign-in to their personal account.
- User can change their password.
- User can sign-out of their account.
- Be able to add bucket list items to personal list as registered user
- User can edit their list items.
- User can delete their list items.
- User cannot see any list items until they create one
- User has ability to search for personal list items using 3rd party api (yelp) and add items they like to their list

## Development Process

We tried a couple of different techniques in how to best handle the “group” project theme and found that we did our best work by having one driver. This technique helped our team to stay organized and focused on one problem at a time. We also did some pair programming at the beginning which went well, but once we tried the driver technique we stuck with it throughout the project.

By day 2 we were making progress and agreed to incorporate a stretch goal by attaching Yelp as a 3rd party api. This addition would allow users to search yelps api by name and location and add them to their bucket list. This process proved to be more difficult than originally anticipated, but we eventually broke through and added the yelp resource to our application with success.

One minor issue that we came accross was in our commit messages. The messages themselves were well constructed, but we forgot to add contributors for most of the commits early on. Other than that, everything went smoothly and we all worked very well together!

## API end-points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| GET    | `/listitems`           | `listitems#index` |
| POST   | `/listitems`           | `listitems#create`|
| GET    | `/listitems/:id`       | `listitems#show`  |
| PATCH  | `/listitems/:id`       | `listitems#update`|
| DELETE | `/listitems/:id`       | `listitems#destroy` |
| GET    | `/yelpresults`         | `yelpresults#index` |

## Technologies Used

- Javascript
- JQuery
- Ajax
- Express
- MongoDB
- Mongoose
- Yelp Fusion API
- Handlebars
- Bootstrap
- HTML
- CSS


## Resources Used

- Class Notes
- MDN
- ATOM
- Github
- Stack Overflow
- Yelp Api Documentation 

## Future Plans

As a group, future plans would include adding social features to our application
so you can follow other users. Also, users having the ability to add photos of completed bucket list items through AWS.


## Contributors

Charlie McQueen, Danny Clark, Charlotte Casner, Phuongnhat Nguyen
