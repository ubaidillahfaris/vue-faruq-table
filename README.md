# Faruq Table
readme_content="# faruqtable

`faruqtable` is a table component built with Vue 3, Tailwind CSS, and Vite. This component supports search, pagination, server-side data management, as well as edit and delete functions through props.

## Features

- **Search:** Allows users to search through the table data.
- **Pagination:** Efficient page navigation for large datasets.
- **Server-side Data Handling:** Manages data directly from the server for optimal performance.
- **Edit and Delete Function Props:** Provides custom functions to edit and delete data.


## Usage/Examples

```
npm i faruqtable
```

```javascript
import Table from 'faruqtable'

export default({
    components:{
        Table
    }
})
```




## Props

- **header**: Array of strings, defines the column headers in the table.
- **data**: Array of objects, the data to be displayed in the table.
- **create-fun**: Function, used to add new data.
- **edit-fun**: Function, used to edit existing data.
- **alert-text**: String, text to display when prompting the user before deletion.
- **delete-fun**: Function, used to delete data.
- **@on-change-page**: Event, triggered when the page changes.
- **@on-search**: Event, triggered when a search is performed.

## Contributing

Contributions are welcome to improve this package. If you have ideas or find bugs, feel free to open an issue or a pull request on the [GitHub repository](https://github.com/ubaidillahfaris).