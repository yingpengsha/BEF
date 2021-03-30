declare interface Array<T> {
  myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}

Array.prototype.myMap = function(callbackFn, thisArg) {
  const newOldMap = new Map()
  const result = new Array(this.length)
  this.forEach((value, index, array) => {
    if(!newOldMap.has(value)) {
      newOldMap.set(value, callbackFn.call(thisArg || this, value, index, array))
    }
    result[index] = newOldMap.get(value)
  })
  return result
}
