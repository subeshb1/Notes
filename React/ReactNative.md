Basics

// react-native run android


Entry point index.js

Indedex.js renders App.js or any Component that is linked

AppRegistry.registerComponent( "Name" , () => App ); //Equivalent to ReactDOM.render();

//All the basic components of React

//Use StyleSheet for Css like styles, props.style rake takes array of styles in cascading order.

//flex is like percentage

flex 1 tells to fill all the space in the current view. Works same as the web flex
Difference: Default mode is set to flexDirection:'column'

* flexDirection determines how the children are aligned
-flexDirection: "row"
-flexDirection: 'column"

* justifyContent  //Determines the distribution of child along primary axis (row or column)
-justifuContent: 'flex-start' //Starting at the top of parent
-justifuContent: 'center' //At Center
-justifuContent: 'flex-end' // At the end or right depending upon the flex dirrection
-justifuContent: 'space-around' //Adds space around children
-justifuContent: 'space-between' //Adds space between children

* Aligin Item //alignment of children along secondary axis ie if primary is row secondary colum and vice versa
-alignItems: 'flex-start' //Starting at the top of parent
-alignItems: 'center' //At Center
-alignItems: 'flex-end' // At the end or right 
-alignItems: 'stretch' // if width or height is not defined along secondary axis.



