const mapToNegativize = (array) => {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
      const neg_i = array[i] * -1
      new_array.push(neg_i)
    }
    return new_array
  }
  
  const mapToNoChange = (array) => {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(array[i])
    }
    return new_array
  }
  
  const mapToDouble = (array) => {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(array[i] * 2)
    }
    return new_array
  }
  
  const mapToSquare = (array) => {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(array[i] ** 2)
    }
    return new_array
  }
  
  const reduceToTotal = (array, start = null) => {
    let memo = start || 0
    for (let i = 0; i < array.length; i++) {
      memo = memo + array[i]
    }
    return memo
  }
  
  const reduceToAllTrue = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (!array[i]) {
        return false
      }
    }
    return true
  }
  
  const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        return true
      }
    }
    return false
  }