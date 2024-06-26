# Sommarprojekt 2024: Receptlistan

## Entities

### ListObject

| Property Name | Data Type     | Description                      |
| ------------- | ------------- | -------------------------------- |
| Id            | Guid/ObjectId | Id in database                   |
| Url           | string        | Url for recipe                   |
| Author        | string        | Author of recipe                 |
| ImgUrl        | string        | Image for recipe                 |
| Header        | string        | Recipe name                      |
| MainText      | string        | Recipe text                      |
| Tags          | Tag[]         | List of tags                     |
| Prioritized   | bool          | Prio for object                  |
| Notes         | string        | Notes for object                 |
| DatePlanner   | DateTime      | Reminder for when to cook recipe |

### Tag

| Property Name | Data Type     | Description    |
| ------------- | ------------- | -------------- |
| Id            | Guid/ObjectId | Id in database |
| Name          | string        | Name of tag    |

## Endpoints

### Recipe Endpoints

| Path | Method | Request | Response | ResponseCodes | Description |
| ---- | ------ | ------- | -------- | ------------- | ----------- |
