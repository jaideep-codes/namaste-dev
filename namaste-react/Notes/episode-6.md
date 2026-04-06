# ⚛️ React Episode 6 — Data Fetching, Conditional Rendering & Performance

---

# 📚 Concepts Covered

- Monolithic Architecture
- Microservices Architecture
- Application Data Loading Flow
- React `useEffect()` Hook
- Dependency Array in `useEffect`
- Optional Chaining (`?.`)
- Shimmer UI (Loading Placeholder)
- Conditional Rendering
- Building a Search Feature
- Lazy Loading
- Login Button using State

---

# 1️⃣ Monolithic Architecture

A **Monolithic Architecture** is a traditional software architecture where the entire application is built as **a single unified system**.

Example structure:

```
Application
 ├── UI
 ├── Backend Logic
 ├── Database
```

All components of the application are tightly connected.

### Characteristics

- Single codebase
- Single deployment
- All modules run together

### Advantages

- Easier to develop initially
- Simple deployment

### Disadvantages

- Hard to scale large applications
- A small change may require redeploying the entire system
- Difficult for large teams to work simultaneously

---

# 2️⃣ Microservices Architecture

Modern applications often use **Microservices Architecture**.

Instead of one large system, the application is divided into **multiple independent services**.

Example:

```
Application
 ├── User Service
 ├── Restaurant Service
 ├── Payment Service
 ├── Search Service
```

Each service:

- runs independently
- has its own API
- can be scaled individually

### Advantages

- Easier scaling
- Independent deployments
- Teams can work on separate services

Example in a food ordering app:

```
Restaurant API
User API
Payment API
Delivery API
```

The frontend calls these APIs separately.

---

# 3️⃣ Application Loading Flow

When a React application loads data from an API, the typical flow is:

```
1️⃣ Component renders
2️⃣ API call is made
3️⃣ State updates with fetched data
4️⃣ Component re-renders with new data
```

This process ensures the UI updates once the data is received.

---

# 4️⃣ React `useEffect()` Hook

`useEffect()` is a **React Hook** used to perform side effects in components.

Examples of side effects:

- API calls
- DOM manipulation
- subscriptions
- timers

Example:

```javascript
useEffect(() => {
  fetchData();
}, []);
```

### Important behavior

`useEffect()` runs **after the component renders**.

---

# 5️⃣ Dependency Array in useEffect

The second argument of `useEffect` is the **dependency array**.

Example:

```javascript
useEffect(() => {
  fetchData();
}, []);
```

### Behavior

| Dependency Array | Behavior                            |
| ---------------- | ----------------------------------- |
| `[]`             | Runs only once (after first render) |
| `[state]`        | Runs when the state changes         |
| No array         | Runs after every render             |

In most API calls, we use:

```
[]
```

so the data is fetched **only once when the component loads**.

---

# 6️⃣ Optional Chaining

Optional chaining (`?.`) helps safely access deeply nested properties.

Example:

```javascript
data?.restaurants?.[0]?.name;
```

Without optional chaining:

```javascript
data.restaurants[0].name;
```

If `restaurants` is `undefined`, the code would throw an error.

Optional chaining prevents this.

If a property does not exist, it simply returns **undefined instead of crashing**.

---

# 7️⃣ Shimmer UI (Loading Placeholder)

When data is being fetched from an API, there may be a **loading delay**.

Instead of showing a blank screen, we display a **Shimmer UI**.

Shimmer UI is a **placeholder layout that mimics the real UI while content loads**.

Example:

```
[ Loading Card ]
[ Loading Card ]
[ Loading Card ]
```

Once data arrives, the shimmer is replaced with the real content.

Benefits:

- Better user experience
- Makes apps feel faster

---

# 8️⃣ Conditional Rendering

Conditional rendering means **displaying different UI based on conditions**.

Example:

```javascript
{
  isLoading ? <Shimmer /> : <RestaurantList />;
}
```

Explanation:

```
If data is loading → show Shimmer UI
Else → show actual content
```

This is commonly used when working with **API data**.

---

# 9️⃣ Building a Search Feature

Search functionality is typically implemented using:

1️⃣ an **input field**

2️⃣ a **state variable**

3️⃣ filtering the list based on user input

Example logic:

```javascript
const filteredRestaurants = restaurants.filter((res) =>
  res.name.toLowerCase().includes(searchText.toLowerCase()),
);
```

Flow:

```
User types in search box
↓
searchText state updates
↓
restaurants list gets filtered
↓
UI re-renders with filtered results
```

---

# 🔟 Lazy Loading

Lazy loading means **loading components only when they are needed**.

Instead of loading the entire application at once, parts of the application are loaded **on demand**.

Benefits:

- Faster initial load time
- Better performance
- Smaller bundle size

Example concept:

```
Main Page loads first
↓
Other pages load only when user navigates to them
```

This is also called **code splitting**.

---

# 1️⃣1️⃣ Login Button (Using State)

A login/logout button can be implemented using **React state**.

Example:

```javascript
const [btnName, setBtnName] = useState("Login");

<button onClick={() => setBtnName("Logout")}>{btnName}</button>;
```

Flow:

```
Initial state → Login
Click button → state updates
Component re-renders → shows Logout
```

This demonstrates **state-driven UI updates**.

---

# 🧠 Key Takeaways

- Monolithic architecture uses a **single large application**
- Microservices architecture splits applications into **independent services**
- React components often follow the **render → fetch → re-render** pattern
- `useEffect()` is used for **side effects like API calls**
- Optional chaining prevents **errors when accessing nested data**
- Shimmer UI improves **user experience during loading**
- Conditional rendering shows **different UI based on conditions**
- Search features commonly use **filtering with state**
- Lazy loading improves **application performance**
- State can be used to **toggle UI elements like login buttons**
