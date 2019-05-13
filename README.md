# Backend

# API for the fantabulous-music-finder

## Base url : https: fantabulous-music-finder.heroukuapp.com

## Endpoints

### POST /api/register/oauth
* Registers a user: User must have a name, email, and a token from google.
* Request example: 
```
{
    name:    "David Albert"
    email:   "davidalbert@email.com"
    token:   "ya29GlwIB9MO2nsd8GcYummrxI2x7lxkWITjIst0QVXxkR6y90yo-bwAupQRbO
            YpcRRuPUrt5HrKz_DGkF6puDJTedweEI6eJ6YNY_ufg5HtbsFHD894mR1w"
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
### POST /api/user/playlists
* Request example: 
```
{
    artist:         "Rihanna"
	track_title:    "Love in the Brain"
	likes:          "2M"
	comments:       "100k"
	total_plays:    "30M"
	mood:           "Love"
	url:            "https://www.songspk.com/love_in_the_brain"
}
```
---
### GET /api/users/{id}
**Must Be Logged in with Token**
* Returns an object with a single user's info. Only accessible by that user.
```
{
    "id": 17,
    "name": "David Albert",
    "email": "davidalbert@email.com"
}
```
---
### GET /api/song-list
**Must Be Logged in with Token**
*Returns the list of all songs
---
### GET /api/user/playlists
**Must Be Logged in with Token**
*Returns the lists of playlist of the user
--- 
### PUT /api/users/{id}
**Must Be logged in and have a valid token**
* Update user info. Only accessible by that user.
---
### DELETE /api/users/{id}
**Must Be logged in and have a valid token**
* Permanently delete the user info. Only permissible by that user.
---
### DELETE /api/user/playlists
**Must Be logged in and have a valid token**
*Permissible user can delete a playlist
---

### User Table

| Column Name     | Attribute                                        |
| --------------- | ------------------------------------------------ |
| id              | integer - auto-increments                        |
| username        | string - 128chars, can't be NULL, must be unique |
| password        | string - no char limit, can't be NULL            |
| email           | string - 128chars, must be unique                |
| patreon_support | boolean - defaults to false                      |
