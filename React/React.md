-dont modify props
-use Component.defaultProps
-setState() is used to re render Component so no calling inside render() //Causes infinte loop
-stateless Componet can inherit state from parent. this.prop in child
-A child can change a parents state. The parent should pass a handler to the child.
-A child can update it's siblings through parent.
-Styles are not youre forte.
-Seperate Components and Containers
--Component.propTypes //Used to document and show warning
Example:
Component.propType = {
title: React.PropTypes.string,
onj: REact.PropTypes.object.isRequired
//Types:- string,object,bool,number,func,array
}

-React LifeCycle
-Mounting //First TIme
-Updating // Updating
-Unmounting //Removing

1. Mounting
   \*FIrst Phase
   Steps:
   -componentWillMount //gets called the first time when a Component is created- only once you can call setState() but don't// just initialize like loading
   -render // gets called after the first Step
   -componentDidMount //after Component renders. It is used for ajax call, loading initial datas,only once // Ajax calls to fetch data

2. Updating
   Only after firts render update occurs.Component updates every time it renders
   Steps:
   -componentWillReceiveProps(nextProps) //If props passed, Can be used to change state
   -shouldComponentUpdate(nextProps,nextState) //Decide whether a component be updated or not. (Predicate value) Ypu can check props state and decide to update or not.Other lifecycle are blocked id false return
   -componentWillUpdate(nextProps,nextState) //Before Rendering
   -render
   -componentDidUpdate(prevProps, prevState) //After Rendering

3. Unmounting
   \*After a component has been detached
   -Used for clean ups.

Think the React Way!
