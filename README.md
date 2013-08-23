elzar
=====

jQuery-inspired JavaScript tools for Alfresco


## Installation

Copy elzar.js to "/Company Home/Data Dictionary/Scripts"

## Usage

Add
```javascript
<import resource="/Company Home/Data Dictionary/Scripts/elzar.js">
```
as the first line of your script.

## Documentation

### NodeRef selector

```javascript
var node = $("workspace://SpacesStore/683a7581-b138-47be-a367-cceddb5d6bf8");
```

### Search query selector

```javascript
var results = $("name:test")
```

### dir

```javascript
$.dir(object);
```

Prints all properties of the object.

### bean

```javascript
var nodeService = $.bean("NodeService");
```

Returns the Spring bean with the given name.

### Other

* console.log: Alias for logger.log
* JSON.stringify: Alias for jsonUtils.toJSONString


