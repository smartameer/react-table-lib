# React Table


### Installation

```sh
yarn add react-table-lib
```

### Usage

```js
import Table from 'react-table-lib'

```


- Basic Table

  ```js
  const data = [
    { name: "Earline Stokes", age: 30 },
    { name: "Amina Bergstrom", age: 25 },
    { name: "Kattie Hoppe", age: 20 }
  ]

  return (
    <Table data={data}>
  )
  ```
- Column mapped
  ```js
  const data = [
    { name: "Earline Stokes", age: 30 },
    { name: "Amina Bergstrom", age: 25 },
    { name: "Kattie Hoppe", age: 20 }
  ]

  const columns = {
    name: { label: "Full Name", sortable: true },
    age: { label: "Age", format: (data) => data + 'yrs' }
  }

  return (
    <Table data={data} columns={columns}>
  )
  ```
- Selectable
  ```js
  const data = [
    { name: "Earline Stokes", age: 30 },
    { name: "Amina Bergstrom", age: 25 },
    { name: "Kattie Hoppe", age: 20 }
  ]

  const columns = {
    name: { label: "Full Name", sortable: true },
    age: { label: "Age", format: (data) => data + 'yrs' }
  }

  const handleSelect = (data) => {
    // do something
    // data [{ name: "Earline Stokes", age: 30 }]
  }

  return (
    <Table data={data} columns={columns} selectable="multiple" onSelect={handleSelect}>
  )
  ```

### API

| Props / Methods | Default | Type | Required | Details |
|---|---|---|---|--|
| data | - | array | true | Table Records in array format with each entry holding `key : value` pair |
| columns | {} | object | false |Each property for data's entry's header property <br/>Ref: [Columns](#columns)|
| selectable | - | 'single'<br/> 'multiple' | false | Selectable option to select table record based on type single or multiple |
| onSelect | - | function | false | Callback to get selected records details.<br/> `callback data`: record (or) array of records |


### Columns

| Property | type | Details |
|---|---|---|
| `label` | string | Table Header column name |
| `sortable` | boolean | Column sortable property |
| `format` | function | Formatting table record for the same column |
