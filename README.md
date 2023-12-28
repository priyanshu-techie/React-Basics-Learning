## HERE:
* sibling shows the problem of maintaining the state in the same level 
* parent-child-app solves that problem and tries to maintain global and local states 


# THEORY : lifting the state up

"Lifting state up" is a term used in React to describe the process of managing state in a parent component and passing that state down to its child components. This approach allows you to share and synchronize state between multiple components.

## Here's a step-by-step explanation of lifting state up:

- Identify Shared State:

- Determine if there's a piece of state that multiple components need to access or modify.
- Move State to Common Ancestor (Parent) Component:

- Identify the common ancestor (a parent component) of the components that need to share state.
- Lift the state up by moving it to the nearest common ancestor in the component hierarchy. This common ancestor will become the owner of the state.
- Pass State as Props:

- Once the state is in the common ancestor, pass it down to the child components as props.
- Child components receive the state as props and can use it to render content or update their own local state.
- Handle State Changes in Parent:

- If a child component needs to modify the shared state, pass a callback function from the parent component to the child as a prop.
- When the child needs to update the state, it calls the callback function provided by the parent, allowing the parent to handle state changes.
