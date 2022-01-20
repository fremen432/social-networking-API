# Module 18 - Social Networking API


<!-- <h1 align="center">Module 10 - Team Profile Generator</h1> -->

<!-- <h1 align="center">
    <a>
    <a href="https://youtu.be/-yhBsGr08rw" target="_blank">
     View Walkthrough Video
    </a>
</h1> -->


<!-- <div align="center">
    <img src="./assets/video2.gif" width="600px">
    
</div> -->


## Challenge Description:

* Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Use Express.js for routing, a MongoDB database, and the Mongoose ODM.


### User Story

```
AS A developer
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.JS](https://www.npmjs.com/package/express)
- [mongodb](https://www.npmjs.com/package/mongodb)
