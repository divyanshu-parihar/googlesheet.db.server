
# googlesheet.db

An open-source Express API to handle CRUD on a google sheet with help of Google Sheet Api and Supabase as a database.



##### Note: Please contact, If you want me to host this for you on - [@Upwork](https://www.upwork.com/freelancers/~017345a6de85fb163d)

## Deployment

To deploy this project run

```bash
  1. git clone https://github.com/divyanshu-parihar/googlesheet.db.server.git
  2. npm install
  3. create and fill credentials.json and .env file as examples
  3. tsc --watch
  4. node out/index.js
  5. Your server is started! 🎉
```


## API Reference

#### Get items with query

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. A1 or R1C1 query |
| `spreedsheetId` | `string` | **Required**. Sheet ID |

Note : set query to blank string to get all the data.
#### Remove a row

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. A1 or R1C1 query |
| `spreedsheetId` | `string` | **Required**. Sheet ID |

#### Append a row- 

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. A1 or R1C1 query |
| `spreedsheetId` | `string` | **Required**. Sheet ID |
| `values` | `Array<any>` | **Required**. New values|

#### Update a row

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. A1 or R1C1 query |
| `spreedsheetId` | `string` | **Required**. Sheet ID |
| `values` | `Array<any>` | **Required**. New values|

## Demo

#### Get items with query


```http
  POST http://localhost:8080/get?query=main!A%3AA&spreedsheetId=1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc
```
Results:
```JSON
[
	[
		"id"
	],
	[
		"1"
	],
	[
		"2"
	],
	[
		"3"
	],
	[
		"4"
	],
	[
		"5"
	]
]

```


#### Remove items with query


```http
  POST http://localhost:8080/remove?spreedsheetId=1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc&query=main!A1%3AA1
```
#### Results
Range is cleard in the google sheet.
```json
{
	"data": "\"main!A1\""
}

```

#### Update items with query


```http
  POST http://localhost:8080/update?spreedsheetId=1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc&query=main!A2&values=%5B10%5D
```
Results:
```JSON
{
	"data": {
		"spreadsheetId": "1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc",
		"updatedRange": "main!A2",
		"updatedRows": 1,
		"updatedColumns": 1,
		"updatedCells": 1,
		"updatedData": {
			"range": "main!A2",
			"majorDimension": "ROWS",
			"values": [
				[
					"10"
				]
			]
		}
	}
}

```


#### Append rows items with query


```http
  POST http://localhost:8080/add?spreedsheetId=1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc&1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc=main!A1%3AC1&values=%5B10,20,30,40%5D
```
Results:
```JSON
{
	"data": {
		"spreadsheetId": "1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc",
		"tableRange": "main!A1:D8",
		"updates": {
			"spreadsheetId": "1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc",
			"updatedRange": "main!A9:D9",
			"updatedRows": 1,
			"updatedColumns": 4,
			"updatedCells": 4
		}
	}
}

```
