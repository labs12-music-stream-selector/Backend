# MOODIBEATS
* Free music for everyone!
* Music by mood!
* Copyright free music for video creators!
## Contributors

[Logan Hufstetler](https://github.com/BlissCatalyst)                                                               | [Davina Taylor](https://github.com/lilvina)                                                                      | [Joh Humphreys](https://github.com/johnpharmd)                                                                   | [Md Kawsar Hussen](https://github.com/kkingbd)                                                                   | [Jonathan Bernal](https://github.com/BlueSandWeb)                                                                | [Sammy Lee](github.com/Captmoonshot)                                                                             | [Xander Jake de los Santos](https://github.com/xanderjakeq)                                                      | 
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: | :-----------------------------------------------------------------: |
|  [<img src="https://avatars2.githubusercontent.com/u/46465575?s=400&v=4" width = "200" />](https://github.com/BlissCatalyst)                                                                                                     |  [<img src="https://avatars0.githubusercontent.com/u/10713358?s=400&u=f3dd10a2ecfa7efa5b993fc63fd905cf14311fd3&v=4" width = "200" />](https://github.com/lilvina)                                                                 |  [<img src="https://avatars0.githubusercontent.com/u/6886907?s=400&v=4" width = "200" />](https://github.com/johnpharmd)                                                                                                        |  [<img src="https://avatars0.githubusercontent.com/u/46500263?s=400&v=4" width = "200" />](https://github.com/kkingbd)                                                                                                           |  [<img src="https://avatars3.githubusercontent.com/u/42630698?s=400&v=4" width = "200" />](https://github.com/BlueSandsWeb)                                                                                                      | [<img src="https://avatars1.githubusercontent.com/u/17155841?s=400&v=4" width = "200" />](https://github.com/Captmoonshot)                                                                                                      | [<img src="https://avatars2.githubusercontent.com/u/13279523?s=460&v=4" width = "200" />](https://github.com/xanderjakeq)                                                                                                       |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlissCatalyst)                       | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lilvina)                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/johnpharmd)                          | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kkingbd)                             | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BlueSandsWeb)                        | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Captmoonshot)                        | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/xanderjakeq)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/logan-hufstetler-145611a2/)                                                                                        | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/davinataylor123/)                                                                                                  | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/johnhumphreys/)                                                                                                    | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kkingbd)                                                                                                           |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jon-bernal/)                                                                                                       |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sammy-lee-89944282/)                                                                                               | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/xanderjakeq/)                                                                                                      |

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://moodybeats.netlify.com/)

## Project Overview 
You can find the project at [MOODIBEATS](https://moodibeats.com/).

## Endpoints
### User Table

| Column Name     | Attribute                           |
| --------------- |-------------------------------------|
| id              | integer - auto-increments           |
| name            | string - 128chars, can't be NULL    |     
| email           | string - 128chars, must be unique   |   
| token           | text - import from google directly  |
| patreon_support | boolean - defaults to false         |
----------------------------------------------------------
##### POST   /api/register/oauth
* Register a user: User must have a name, email, and a token from google.
* Request example: 
```
{
    name:    "David Albert"
    email:   "davidalbert@email.com"
    token:   "ya29GlwIB9MO2nsd8GcYummrxI2x7lxkWITjIst0QVXxkR6y90yo-bwAupQRbOYpcRRuPUrt5HrKzdweEeJ6YNY_ufg5HtbsFHD894mR1w"
}
```
* Returns
```
{
  id:  13,
  token:   "ya29GlwIB9MO2nsd8GcYummrxI2x7lxkWITjIst0QVXxkR6y90yo-bwAupQRbO
            YpcRRuPUrt5HrKz_DGkF6puDJTedweEI6eJ6YNY_ufg5HtbsFHD894mR1w"
}
```
---
##### GET /api/users/{user_id}
* **Must Be Logged in with Token**
* Returns an object with a single user's info. Only accessible by that user.
```
{
    "id": 17,
    "name": "David Albert",
    "email": "davidalbert@email.com"
}
```
---
##### DELETE /api/users/{user_id}
* **Must Be logged in and have a valid token**
* Permanently delete the user info. Only permissible by that user.
---
##### PUT /api/users/{user_id}
* **Must Be logged in and have a valid token**
* User can update user's name and email only. Only accessible by that user.
 ********************************************************
##### POST api/user/playlists
* **Must Be Logged in with Token**
* Create a playlist
* Request example:
```
{
	"name": "My Playlist1",
	"user_id" : 16
}
```
* Returns:
```
{ 
    "id": 4,
    "name": "My Playlist1",
    "user_id": 16
}
```
---
##### GET /api/user/playlists/{user_id}/playlists
* **Must Be Logged in with Token**
* Get users list of playlist
* Returns Example:
```
[
    {
        "id": 4,
        "name": "My PlayList1",
        "user_id": 16
    },
    {
        "id": 5,
        "name": "My Playlist2",
        "user_id": 16
    }
]
```
---
##### GET /api/user/playlists/{playlist_id}
* **User Must Be Logged in with Token**
* Returns the requested playlist
* Returns:
 ```
 {
    "id": 4,
    "name": "My Playlist1",
    "user_id": 16
}
 ```
 ---
 ##### DELETE /api/user/playlists/{playlist_id}
 * **User Must Be Logged in with Token**
* Delete the requested playlist
 ********************************************************
##### Post api/user/playlists/{playlist_id}/song
*  **User Must Be Logged in with Token**
* Add a song in a playlist
* Request:
```
{
	"song_id": "fghr_jje34",
	"playlist_index" : 1
}
```
* Returns :
```
{
    "id": 5,
    "playlist_id": 4,
    "song_id": "fghr_jje34",
    "playlist_index": 1
}
```
---
##### GET api/user/playlists/{playlist_id}/songs
* **User Must Be Logged in with Token**
* Returns the list of the songs of the requested playlist
* Returns :
```
[
    {
        "id": 5,
        "song_id": "fghr_jje34",
        "playlist_index": 1
    },
    {
        "id": 6,
        "song_id": "kfjr95_fi",
        "playlist_index": 2
    },
    {
        "id": 7,
        "song_id": "fgfh65_hrt",
        "playlist_index": 3
    }
]
```
---
##### DELETE /api/user/playlists/{playlist_id}/song/{song_id}
* **User Must Be Logged in with Token**
* Remove the song from the requested playlist 
---
##### PUT /api/user/playlists/{playlist_id}/song/{song_id}
* **User Must Be Logged in with Token**
* Update a Song's order in a playlist
* Request Example:
```
   {
	    "playlist_index" : 8
   }
```
* Returns:
```
   {
	    "playlist_index" : 8
   }
```

---
## Environment File
The environment file is required to run this project. The environment file must be in the root directory of the project. For the environment variable to be used in the project, you must have an assignment like this. Where the value is the link to the API that is being used. In our code, this can be used with the variable process.env.DV_ENV.

* SECRET  
* DV_ENV 
---

## Documentation

See [Frontend Documentation](https://github.com/labs12-music-stream-selector/Front-End/blob/master/README.md) for details on the fronend of our project.

