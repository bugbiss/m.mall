// 查找子组件
export const findChildrenComponents = (context, componentName) => {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findChildrenComponents(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// 查找兄弟组件
export const findBrothersComponents = (context, componentName, exceptMe = true) => {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}
