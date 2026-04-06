# ⚛️ React Episode 7 — Routing, Hooks & Dynamic Routes

---

# 📚 Concepts Covered

- useEffect Hook Behavior
- useState Best Practices
- Routing in React Applications
- React Router DOM Library
- createBrowserRouter()
- RouterProvider
- Route Configuration
- Custom Error Pages
- useRouteError() Hook
- Nested Routes
- Outlet Component
- Link Component
- Client-side vs Server-side Routing
- Dynamic Routes
- useParams Hook
- Single Page Applications (SPA)
- React List Keys Best Practices

---

# 1️⃣ useEffect Hook

`useEffect` is a React hook used to perform **side effects** in components.

Examples of side effects:

- API calls
- subscriptions
- timers
- logging

Syntax:

```javascript
useEffect(() => {
  // side effect logic
}, dependencyArray);
```

---

## Behavior of Dependency Array

### No Dependency Array

```javascript
useEffect(() => {
  console.log("Runs every render");
});
```

Behavior:

```
Runs after every render
```

---

### Empty Dependency Array

```javascript
useEffect(() => {
  console.log("Runs only once");
}, []);
```

Behavior:

```
Runs only once after the first render
```

This pattern is commonly used for **API calls when the component loads**.

---

### Dependency Array with Variable

```javascript
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

Behavior:

```
Runs when the value of count changes
```

---

# 2️⃣ useState Best Practices

Rules for using `useState`.

### Rule 1

Always create `useState` **inside the component**, never outside.

Correct:

```javascript
const Component = () => {
  const [count, setCount] = useState(0);
};
```

Incorrect:

```javascript
const [count, setCount] = useState(0); // outside component
```

---

### Rule 2 (Good Practice)

Declare all `useState` hooks **at the top of the component**.

Example:

```javascript
const Component = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
};
```

Benefits:

- cleaner code
- consistent structure
- easier debugging

---

### Rule 3

Never create `useState` inside conditions.

Incorrect:

```javascript
if (condition) {
  const [count, setCount] = useState(0);
}
```

Hooks must always be called **in the same order during every render**.

---

# 3️⃣ Routing in React

Routing allows a React application to display **different components for different URLs**.

Example:

```
/ → Home Page
/about → About Page
/contact → Contact Page
```

React uses a popular library called **react-router-dom** for routing.

---

# 4️⃣ React Router DOM

`react-router-dom` is a widely used library for handling routing in React applications.

Install it using:

```bash
npm install react-router-dom
```

---

# 5️⃣ Creating Router Configuration

Routes are defined using `createBrowserRouter()`.

```javascript
import { createBrowserRouter } from "react-router-dom";
```

Example:

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);
```

Explanation:

| Property | Purpose                          |
| -------- | -------------------------------- |
| path     | URL path                         |
| element  | Component rendered for that path |

---

# 6️⃣ RouterProvider

Instead of rendering the app normally using:

```javascript
root.render(<App />);
```

we render the router using `RouterProvider`.

Import:

```javascript
import { RouterProvider } from "react-router-dom";
```

Example:

```javascript
root.render(<RouterProvider router={appRouter} />);
```

This enables routing for the entire application.

---

# 7️⃣ Creating Components Quickly

In VS Code, you can create a component using the shortcut:

```
rafce
```

This generates a **React Arrow Function Component Export** template.

---

# 8️⃣ Custom Error Page

React Router provides a **default error page**, but we can create a custom one.

Example route configuration:

```javascript
{
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />
}
```

Now when an invalid route is accessed, React will show the custom error page.

---

# 9️⃣ useRouteError Hook

React Router provides the hook:

```
useRouteError()
```

This allows access to **detailed error information**.

Example:

```javascript
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <h2>{err.status}</h2>
      <p>{err.statusText}</p>
    </div>
  );
};
```

Now we can display error details on the error page.

---

# 🔟 Nested Routes

Sometimes we want **parts of the UI to stay constant**, such as:

```
Header
Footer
```

while only the **main content changes**.

Example:

```
Header
Body → changes based on route
Footer
```

This can be achieved using **nested routes**.

Example:

```javascript
{
  path: "/",
  element: <AppLayout />,
  children: [
    { path: "/", element: <Body /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> }
  ]
}
```

---

# 1️⃣1️⃣ Outlet Component

To render child routes, React Router provides the `Outlet` component.

Import:

```javascript
import { Outlet } from "react-router-dom";
```

Example:

```javascript
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
```

`Outlet` acts as a **placeholder where child routes are rendered**.

---

# 1️⃣2️⃣ Navigation Using Link

Normally in HTML we use anchor tags.

Example:

```html
<a href="/about">About</a>
```

Problem:

```
The entire page reloads
```

React provides the `Link` component to avoid full page reload.

Import:

```javascript
import { Link } from "react-router-dom";
```

Example:

```javascript
<Link to="/contact">Contact Us</Link>
```

Behind the scenes, `Link` still uses an anchor tag but **prevents full page reload**.

---

# 1️⃣3️⃣ Client-side vs Server-side Routing

### Server-side Routing

Every route request goes to the server.

Example:

```
example.com/about
```

Server sends a **new HTML page**.

---

### Client-side Routing

React handles routing **inside the browser without reloading the page**.

Example:

```
React changes components dynamically
```

This is faster and smoother.

---

# 1️⃣4️⃣ Single Page Application (SPA)

React applications are **Single Page Applications**.

Meaning:

```
Only one HTML page loads initially
```

All navigation happens **within that page using JavaScript**.

---

# 1️⃣5️⃣ Dynamic Routes

Dynamic routes allow rendering pages using **dynamic parameters**.

Example:

```
/restaurant/:resId
```

Here `:resId` is a **dynamic parameter**.

Example URLs:

```
/restaurant/101
/restaurant/205
```

---

# 1️⃣6️⃣ useParams Hook

To access dynamic parameters, React Router provides `useParams`.

Import:

```javascript
import { useParams } from "react-router-dom";
```

Example:

```javascript
const RestaurantMenu = () => {
  const { resId } = useParams();

  return <h1>Restaurant ID: {resId}</h1>;
};
```

Now the component can access the value from the URL.

---

# 1️⃣7️⃣ React Keys (Important Rule)

When rendering lists using `map()`, the `key` must be placed on the **parent JSX element returned by map**.

Correct example:

```javascript
restaurants.map((res) => <RestaurantCard key={res.id} restaurant={res} />);
```

Incorrect example:

```javascript
<div>
  <RestaurantCard key={res.id} />
</div>
```

The `key` should always be on the **top-level element returned in the map function**.

This allows React to efficiently update only the components that change.

---

# 🧠 Key Takeaways

- `useEffect` behavior depends on the dependency array
- `useState` must always be declared at the top of components
- Routing in React is handled using **react-router-dom**
- `createBrowserRouter` defines route configuration
- `RouterProvider` enables routing in the app
- `Outlet` renders nested route components
- `Link` enables navigation without page reload
- React apps are **Single Page Applications**
- Dynamic routes allow rendering pages with parameters
- `useParams` extracts parameters from the URL
- Proper use of `key` helps React optimize list rendering
