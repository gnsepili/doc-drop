
## 📁DocDrop

document sharing application that allows to share documents over internet via an URL



### Demo

You can preview the live [demo](https://example.com)

[//]: <> (add some screenshot)


### Installation

**Step 1** first clone the project
    
```bash
git clone https://github.com/gnsepili/doc-drop
cd doc-drop
```
**Step 2** Set Environment Variables

To run this project, you will need to a file names `.env` and add the following environment variables

`PORT = <port number>`

`MONGODB_URL=<mongo db url>`

**Step 3** Install required packages 

```bash 
npm install
```
**Step 4** start the server
```bash 
npm start
```
#### Author

- [@gnsepili](https://www.github.com/gnsepili)


### API Reference

#### upload file

```http
  POST /api/files
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get file

```http
  GET /api/file/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



### todo
- [X]  Server setup
- [X]  DB setup
- [ ]  File Upload endpoint
- [ ]  File Download endpoint
- [ ]  SMTP setup
- [ ]  Swagger Docs