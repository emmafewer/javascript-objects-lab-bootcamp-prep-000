 var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({"prop": "1"},obj,{["prop2"]: "2"}) 
}