# Backend

# API for the fantabulous-music-finder

## Base url : https: fantabulous-music-finder.heroukuapp.com

## Endpoints

### POST /api/register

### POST /api/login

### User Table

| Column Name     | Attribute                                        |
| --------------- | ------------------------------------------------ |
| id              | integer - auto-increments                        |
| username        | string - 128chars, can't be NULL, must be unique |
| password        | string - no char limit, can't be NULL            |
| email           | string - 128chars, must be unique                |
| patreon_support | boolean - defaults to false                      |
