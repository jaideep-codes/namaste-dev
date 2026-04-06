> ⚡ These notes are based on Namaste JavaScript + deep understanding of JS internals.
> Designed for revision + interviews + real-world development.

---

# 📚 Concepts Covered (Clickable Index)

1. [JavaScript is Single Threaded & Synchronous](#1️⃣-javascript-is-single-threaded--synchronous)
2. [Execution Context](#2️⃣-execution-context-very-important)
3. [Memory Phase vs Code Phase](#3️⃣-memory-phase-vs-code-phase)
4. [Function Invocation & Execution Context](#4️⃣-function-invocation--execution-context)
5. [Call Stack](#5️⃣-call-stack-execution-stack)
6. [Hoisting](#6️⃣-hoisting)
7. [Execution Flow Example](#7️⃣-execution-flow-example-very-important)
8. [Shortest JavaScript Program](#8️⃣-shortest-javascript-program)
9. [Window Object & Global Scope](#9️⃣-window-object--global-scope)
10. [Undefined vs Not Defined](#-undefined-vs-not-defined)

11. [Lexical Environment](#1️⃣1️⃣-lexical-environment)
12. [Scope Chain](#1️⃣2️⃣-scope-chain)
13. [var vs let vs const](#1️⃣3️⃣-var-vs-let-vs-const-deep-comparison)
14. [Temporal Dead Zone](#1️⃣4️⃣-temporal-dead-zone-tdz)
15. [Rules of let & const](#1️⃣5️⃣-rules-of-let--const)
16. [Block Scope](#1️⃣6️⃣-block-scope)
17. [Shadowing](#1️⃣7️⃣-shadowing)

18. [Closures (Intro)](#1️⃣8️⃣-closures-introduction)
19. [Closures with Return](#1️⃣9️⃣-closures-with-return)
20. [Nested Closures & Scope Chain](#2️⃣0️⃣-nested-closures--scope-chain)
21. [Uses of Closures](#2️⃣1️⃣-uses-of-closures)
22. [setTimeout with Closures](#2️⃣2️⃣-settimeout-with-closures-most-asked)
23. [Solution using let](#2️⃣3️⃣-solution-using-let)
24. [Solution using Closure](#2️⃣4️⃣-solution-using-closure-with-var)
25. [Counter using Closures](#2️⃣5️⃣-counter-using-closures)
26. [Constructor Closures](#2️⃣6️⃣-constructor-closures-data-hiding)

27. [Function Types](#2️⃣7️⃣-function-types)
28. [First-Class Functions](#2️⃣8️⃣-first-class-functions)
29. [Event Listeners + Closures](#2️⃣9️⃣-event-listeners--closures)
30. [Higher Order Functions](#3️⃣0️⃣-higher-order-functions-intro)
31. [Custom Array Methods](#3️⃣1️⃣-custom-array-methods)
32. [map()](#3️⃣2️⃣-map-deep-dive)
33. [filter()](#3️⃣3️⃣-filter-deep-dive)
34. [reduce()](#3️⃣4️⃣-reduce-deep-dive)
35. [Chaining Methods](#3️⃣5️⃣-chaining-methods)
36. [Function Currying](#3️⃣6️⃣-function-currying)

37. [Event Loop](#3️⃣7️⃣-event-loop-very-important)
38. [Task Queue vs Microtask Queue](#3️⃣8️⃣-task-queue-vs-microtask-queue)
39. [Web APIs](#3️⃣9️⃣-web-apis)
40. [JavaScript Engine](#4️⃣0️⃣-javascript-engine)
41. [Callback Hell](#4️⃣1️⃣-callback-hell-pyramid-of-doom)

42. [Promises](#4️⃣2️⃣-promises)
43. [Creating Promises](#4️⃣3️⃣-creating-promises)
44. [Consuming Promises](#4️⃣4️⃣-consuming-promises)
45. [Promise Chaining](#4️⃣5️⃣-promise-chaining)
46. [Promise APIs](#4️⃣6️⃣-promise-apis)
47. [Async / Await](#4️⃣7️⃣-async--await)
48. [Await Behavior](#4️⃣8️⃣-await-behavior-deep)
49. [Fetch API](#4️⃣9️⃣-fetch-api)
50. [Error Handling](#5️⃣0️⃣-error-handling)

51. [this Keyword](#5️⃣1️⃣-this-keyword-core-concept)
52. [this in Global Scope](#5️⃣2️⃣-this-in-global-scope)
53. [Strict Mode](#5️⃣3️⃣-strict-vs-non-strict-mode)
54. [this in Functions](#5️⃣4️⃣-this-in-regular-functions)
55. [this in Objects](#5️⃣5️⃣-this-in-objects-methods)
56. [this in Arrow Functions](#5️⃣6️⃣-this-in-arrow-functions)
57. [Nested Arrow Functions](#5️⃣7️⃣-nested-arrow-functions)
58. [this in DOM](#5️⃣8️⃣-this-in-dom-event-handlers)
59. [call()](#5️⃣9️⃣-call)
60. [apply()](#6️⃣0️⃣-apply)
61. [bind()](#6️⃣1️⃣-bind)

62. [Debouncing](#6️⃣2️⃣-debouncing)
63. [Throttling](#6️⃣3️⃣-throttling)
64. [Event Bubbling & Capturing](#6️⃣4️⃣-event-bubbling--capturing)
65. [async vs defer](#6️⃣5️⃣-async-vs-defer)
66. [LocalStorage vs SessionStorage](#6️⃣6️⃣-localstorage-vs-sessionstorage)
67. [Polyfills](#6️⃣7️⃣-polyfills)
68. [Shallow vs Deep Copy](#6️⃣8️⃣-shallow-vs-deep-copy)

---

# 1️⃣ JavaScript is Single Threaded & Synchronous

---

## 🔹 Single Threaded

JavaScript executes **one operation at a time** using a **single call stack**.

👉 Meaning:

```
Task 1 → completes → Task 2 → completes → Task 3
```

JavaScript is single-threaded, but can handle async operations using the Event Loop.

---

## 🔹 Synchronous

Code runs **line-by-line in order**

```javascript
console.log("A");
console.log("B");
console.log("C");
```

### Output

```
A
B
C
```

---

## 🔹 Important Insight

JavaScript appears async (like setTimeout, fetch), but:

👉 That behavior is achieved using:

- Web APIs
- Event Loop

(covered later)

---

# 2️⃣ Execution Context (VERY IMPORTANT)

---

## 🔹 Definition

Execution Context is the **environment where JavaScript code is executed**

👉 Everything in JS runs inside an execution context

---

## 🔹 Types

| Type                           | Description                     |
| ------------------------------ | ------------------------------- |
| Global Execution Context (GEC) | Created when JS program starts  |
| Function Execution Context     | Created when function is called |

---

## 🔹 Structure

Each Execution Context has 2 parts:

```
Execution Context
   ├── Memory (Variable Environment)
   └── Code (Thread of Execution)
```

---

# 3️⃣ Memory Phase vs Code Phase

Execution happens in **two phases**

---

## 🔹 Phase 1: Memory Phase (Creation Phase)

Before code runs:

- Variables → initialized as `undefined`
- Functions → stored with full code

---

### Example

```javascript
var x = 10;

function greet() {
  console.log("Hello");
}
```

### Memory Representation

```
x → undefined
greet → { function code }
```

---

## 🔹 Phase 2: Code Phase (Execution Phase)

Now JS executes code line-by-line

```
x → 10
greet() → executes when called
```

---

## 🔥 Key Insight

Memory phase happens FIRST → then execution

---

# 4️⃣ Function Invocation & Execution Context

---

## 🔹 When a function is called

```javascript
greet();
```

👉 JavaScript creates a **new execution context**

---

## 🔹 Lifecycle

```
Function call
↓
Create new Execution Context
↓
Push into Call Stack
↓
Execute
↓
Pop from Call Stack
```

---

## 🔥 Important

Every function has its **own memory space**

---

# 5️⃣ Call Stack (Execution Stack)

---

## 🔹 Definition

Call Stack is a **data structure** that keeps track of execution contexts

👉 It follows:

```
LIFO (Last In First Out)
```

---

## 🔹 Flow

```
1. Global Execution Context created
2. Pushed into stack
3. Function call → new context pushed
4. Function ends → popped
5. Finally GEC removed
```

---

## 🔹 Visual

```
|   function b   |
|   function a   |
|   global EC    |
```

---

## 🔹 Other Names

- Execution Context Stack
- Program Stack
- Runtime Stack
- Control Stack

---

# 6️⃣ Hoisting

---

## 🔹 Definition

Hoisting means:

> JavaScript moves declarations to the top of their scope during memory phase

---

## 🔹 Variable Hoisting

```javascript
console.log(x);
var x = 5;
```

### Output

```
undefined
```

---

## 🔹 Why?

Memory phase:

```
x → undefined
```

---

## 🔹 Function Hoisting

```javascript
getName();

function getName() {
  console.log("Namaste");
}
```

✅ Works perfectly

---

## 🔹 Function Expression (Important Difference)

```javascript
getName(); ❌

var getName = function () {};
```

Memory:

```
getName → undefined
```

---

## 🔥 Important Rule

| Type                 | Hoisting              |
| -------------------- | --------------------- |
| Function Declaration | Fully hoisted         |
| Function Expression  | Behaves like variable |

---

# 7️⃣ Execution Flow Example (VERY IMPORTANT)

---

## Code

```javascript
var x = 1;

a();
b();

console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
```

---

## 🔹 Step 1: Memory Phase

```
x → undefined
a → function
b → function
```

---

## 🔹 Step 2: Code Phase

```
x = 1
call a()
```

---

## 🔹 Execution of a()

New Execution Context:

```
x → undefined → 10
console.log → 10
```

---

## 🔹 Execution of b()

```
x → undefined → 100
console.log → 100
```

---

## 🔹 Back to Global

```
console.log(x) → 1
```

---

## ✅ Final Output

```
10
100
1
```

---

# 8️⃣ Shortest JavaScript Program

---

Even if file is empty:

```javascript
// nothing here
```

JavaScript still creates:

- Global Execution Context
- Call Stack

---

# 9️⃣ Window Object & Global Scope

---

## 🔹 What is Window?

In browser:

👉 Global object = `window`

---

## Example

```javascript
var a = 10;

console.log(a); // 10
console.log(window.a); // 10
console.log(this.a); // 10
```

---

## 🔹 Important Rule

```javascript
this === window; // true (browser)
```

---

## 🔹 Key Insight

- Global variables are attached to window (only with var)

---

# 🔟 Undefined vs Not Defined

---

## 🔹 Undefined

Variable exists but has no value

```javascript
var x;
console.log(x); // undefined
```

---

## 🔹 Not Defined

Variable does not exist

```javascript
console.log(x); // ReferenceError
```

---

## 🔥 Interview Difference

| Case        | Meaning                   |
| ----------- | ------------------------- |
| undefined   | declared but not assigned |
| not defined | never declared            |

---

## ⚠️ Bad Practice

```javascript
var x = undefined; ❌
```

👉 Causes confusion

---

# ⚡ JavaScript Fundamentals — Part 2 (Scope, TDZ, let/const Deep Dive)

---

# 1️⃣1️⃣ Lexical Environment

---

## 🔹 Definition

A **Lexical Environment** is created whenever an **execution context is created**

---

## 🔹 Structure

```
Lexical Environment =
   Local Memory (variables + functions)
   +
   Reference to Parent Lexical Environment
```

---

## 🔹 Example

```javascript
function a() {
  var x = 10;

  function b() {
    console.log(x);
  }

  b();
}

a();
```

---

## 🔹 What happens?

- `b()` tries to find `x`
- Not in its own scope → goes to parent (`a`)
- Finds `x = 10`

---

## 🔥 Key Insight

Every function **remembers where it was created**, not where it is called

---

# 1️⃣2️⃣ Scope Chain

---

## 🔹 Definition

Scope Chain is the chain of **lexical environments**

---

## 🔹 How lookup works

```text
Current Scope → Parent → Parent → Global
```

---

## 🔹 Example

```javascript
var x = 100;

function a() {
  var x = 10;

  function b() {
    console.log(x);
  }

  b();
}

a();
```

---

## Output

```
10
```

---

## 🔥 Why?

`b()` finds `x` in `a()` before reaching global

---

## 🔥 Important Rule

👉 JavaScript follows **lexical scoping (static scope)**

---

# 1️⃣3️⃣ var vs let vs const (Deep Comparison)

---

## 🔹 Table

| Feature       | var      | let          | const        |
| ------------- | -------- | ------------ | ------------ |
| Scope         | Function | Block        | Block        |
| Hoisting      | Yes      | Yes          | Yes          |
| TDZ           | No       | Yes          | Yes          |
| Reassignment  | Yes      | Yes          | No           |
| Redeclaration | Yes      | No           | No           |
| Window Object | Attached | Not attached | Not attached |

---

## 🔹 Example (scope difference)

```javascript
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ❌ error
console.log(c); // ❌ error
```

---

## 🔥 Key Insight

👉 `var` ignores block scope  
👉 `let/const` respect block scope

---

# 1️⃣4️⃣ Temporal Dead Zone (TDZ)

---

## 🔹 Definition

TDZ is the time between:

```
Hoisting → Initialization
```

---

## 🔹 Example

```javascript
console.log(a); ❌

let a = 10;
```

---

## Error

```
ReferenceError
```

---

## 🔹 Why?

- `a` is hoisted
- But not initialized yet
- Accessing it → error

---

## 🔥 Important Insight

👉 TDZ exists only for `let` and `const`

---

# 1️⃣5️⃣ Rules of let & const

---

## 🔹 Rule 1: Cannot access before initialization

```javascript
console.log(a); ❌
let a = 10;
```

---

## 🔹 Rule 2: No redeclaration

```javascript
let a = 10;
let a = 20; ❌
```

---

## 🔹 Rule 3: const must be initialized

```javascript
const a; ❌
```

---

## 🔹 Rule 4: const cannot be reassigned

```javascript
const a = 10;
a = 20; ❌
```

---

## 🔥 Important Clarification

```javascript
const obj = { a: 1 };
obj.a = 2; ✅
```

👉 Allowed because object reference doesn't change

---

# 1️⃣6️⃣ Block Scope

---

## 🔹 What is a block?

```javascript
{
  let a = 10;
}
```

---

## 🔹 Scope behavior

- `let` & `const` → block scoped
- `var` → function/global scoped

---

## 🔹 Example

```javascript
{
  let a = 10;
}

console.log(a); ❌
```

---

## 🔥 Key Insight

👉 Block creates **separate memory space**

---

# 1️⃣7️⃣ Shadowing

---

## 🔹 Definition

When inner variable overrides outer variable

---

## 🔹 Example (let)

```javascript
let a = 100;

{
  let a = 10;
  console.log(a); // 10
}

console.log(a); // 100
```

---

## 🔹 Example (var)

```javascript
var a = 100;

{
  var a = 10;
}

console.log(a); // 10
```

---

## 🔴 Illegal Shadowing

```javascript
let a = 10;

{
  var a = 20; ❌
}
```

---

## 🔥 Why?

- `var` is global scoped
- conflicts with `let`

---

# 1️⃣8️⃣ Closures (Introduction)

---

## 🔹 Definition

A closure is:

```
Function + its lexical environment
```

---

## 🔹 Example

```javascript
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  y();
}

x();
```

---

## Output

```
7
```

---

## 🔥 Why?

Function `y` remembers `a`

---

# 1️⃣9️⃣ Closures with Return

---

```javascript
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  return y;
}

var z = x();
z();
```

---

## 🔥 Key Insight

Even after `x()` is gone:

👉 `y` still remembers `a`

---

## VERY IMPORTANT

Closures store a reference to variables, not a snapshot of their value.
So if the variable changes later, the closure sees the updated value.

---

# 2️⃣0️⃣ Nested Closures & Scope Chain

---

```javascript
function a() {
  var x = 10;

  function b() {
    function c() {
      console.log(x);
    }

    c();
  }

  b();
}

a();
```

---

## 🔹 Scope Chain

```
c → b → a → global
```

---

## 🔥 Key Insight

Closures can access **entire scope chain**

---

# 2️⃣1️⃣ Uses of Closures

Closures are not just theory — they are used everywhere in real-world JavaScript.

---

## 🔹 Common Use Cases

### 1. Data Hiding / Encapsulation

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
```

👉 `count` is private (cannot be accessed directly)

---

### 2. Module Pattern

Closures help create **private variables inside modules**

---

### 3. Currying

Breaking functions into smaller reusable functions

(covered later in detail)

---

### 4. Memoization

Caching previous results

---

### 5. setTimeout / setInterval

Closures preserve values for async execution

---

### 6. Event Handlers

Closures maintain state across events

---

# 2️⃣2️⃣ setTimeout with Closures (🔥 MOST ASKED)

---

## Problem Code

```javascript
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste JavaScript");
}

x();
```

---

## Output

```
Namaste JavaScript
6
6
6
6
6
```

---

## 🔥 Why does this happen?

- `var` is function scoped
- Only ONE `i` exists
- Loop finishes → `i = 6`
- All callbacks refer to SAME `i`

---

## 🔥 Key Concept

👉 Closures store **reference, not value**

---

# 2️⃣3️⃣ Solution using let

---

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

---

## Output

```
1
2
3
4
5
```

---

## Why it works?

- `let` creates **new block scope for each iteration**
- Each callback gets its own `i`

---

# 2️⃣4️⃣ Solution using Closure (with var)

---

```javascript
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }

    close(i);
  }
}

x();
```

---

## Why it works?

- `close(x)` creates new scope
- Each `x` is preserved independently

---

# 2️⃣5️⃣ Counter using Closures

---

```javascript
function counter() {
  var count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

var counter1 = counter();

counter1(); // 1
counter1(); // 2
```

---

## 🔥 Key Insight

Each instance has **separate memory**

```javascript
var counter2 = counter();
counter2(); // 1
```

---

# 2️⃣6️⃣ Constructor Closures (Data Hiding)

---

```javascript
function Counter() {
  var count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

var c = new Counter();

c.increment();
```

---

## 🔥 Why powerful?

- `count` is private
- Cannot access directly:

```javascript
c.count ❌
```

---

# 2️⃣7️⃣ Function Types

---

## 🔹 Function Declaration

```javascript
function a() {
  console.log("a called");
}
```

---

## 🔹 Function Expression

```javascript
var b = function () {
  console.log("b called");
};
```

---

## 🔹 Named Function Expression

```javascript
var x = function xyz() {
  console.log("hello");
};
```

---

## ⚠️ Important

```javascript
xyz(); ❌
```

👉 Not accessible outside

---

# 2️⃣8️⃣ First-Class Functions

---

## 🔹 Definition

JavaScript treats functions as **values**

---

## 🔹 What we can do?

- Assign to variables
- Pass as arguments
- Return from functions

---

## Example

```javascript
function greet() {
  return function () {
    console.log("Hello");
  };
}
```

---

# 2️⃣9️⃣ Event Listeners + Closures

---

```javascript
function attachEventListeners() {
  let count = 0;

  document.getElementById("btn").addEventListener("click", function () {
    console.log("Clicked", ++count);
  });
}

attachEventListeners();
```

---

## 🔥 Why closure?

- `count` persists across clicks
- State is maintained

---

# 3️⃣0️⃣ Higher Order Functions (Intro)

---

## 🔹 Definition

A Higher Order Function (HOF) is:

```
Function that takes another function OR returns a function
```

---

## Example

```javascript
function calculate(radius, logic) {
  return logic(radius);
}

function area(r) {
  return Math.PI * r * r;
}

calculate(2, area);
```

---

## 🔥 Why important?

- Makes code reusable
- Used in map, filter, reduce

---

# 3️⃣1️⃣ Custom Array Methods

---

## 🔹 Idea

JavaScript allows extending built-in objects like Array

---

## Example

```javascript
Array.prototype.calculate = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};
```

---

## Usage

```javascript
const arr = [1, 2, 3];

function double(x) {
  return x * 2;
}

arr.calculate(double); // [2, 4, 6]
```

---

## 🔥 Insight

👉 This is how `map()` works internally

---

# 3️⃣2️⃣ map() (Deep Dive)

---

## 🔹 Definition

Transforms each element of array

---

## Syntax

```javascript
arr.map(callback);
```

---

## Example

```javascript
const arr = [1, 2, 3];

const output = arr.map((x) => x * 2);
```

---

## Output

```
[2, 4, 6]
```

---

## 🔥 Key Insight

- Returns NEW array
- Does NOT mutate original array

---

# 3️⃣3️⃣ filter() (Deep Dive)

---

## 🔹 Definition

Filters elements based on condition

---

## Example

```javascript
const arr = [1, 2, 3, 4];

const output = arr.filter((x) => x % 2 === 0);
```

---

## Output

```
[2, 4]
```

---

## 🔥 Key Insight

- Returns elements that satisfy condition
- Skips others

---

# 3️⃣4️⃣ reduce() (Deep Dive)

---

## 🔹 Definition

Reduces array to a single value

---

## Syntax

```javascript
arr.reduce((acc, curr) => {}, initialValue);
```

---

## Example (Sum)

```javascript
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);
```

---

## Output

```
10
```

---

## Example (Grouping)

```javascript
const users = [{ age: 20 }, { age: 30 }, { age: 20 }];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
```

---

## Output

```javascript
{ 20: 2, 30: 1 }
```

---

## 🔥 Key Insight

👉 `reduce` is most powerful — can replace map & filter

---

# 3️⃣5️⃣ Chaining Methods

---

## Example

```javascript
const result = arr
  .filter((x) => x > 2)
  .map((x) => x * 2)
  .reduce((acc, curr) => acc + curr, 0);
```

---

## 🔥 Benefit

- Clean code
- Functional programming style

---

# 3️⃣6️⃣ Function Currying

---

## 🔹 Definition

Breaking function into smaller functions

---

## Example

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5
```

---

## 🔥 Why useful?

- Reusability
- Partial application

---

# 3️⃣7️⃣ Event Loop (VERY IMPORTANT)

---

## 🔹 Components

```
Call Stack
Web APIs
Task Queue
Microtask Queue
Event Loop
```

---

## 🔹 Flow

```
1. Code runs → Call Stack
2. Async task → Web APIs
3. Callback → Queue
4. Event Loop checks:
   If stack empty → move callback
```

---

## 🔥 Key Insight

👉 JS is single-threaded  
👉 Async behavior comes from Event Loop

---

# 3️⃣8️⃣ Task Queue vs Microtask Queue

---

## Table

| Type             | Queue           |
| ---------------- | --------------- |
| setTimeout       | Task Queue      |
| DOM events       | Task Queue      |
| Promises (.then) | Microtask Queue |

---

## 🔥 Priority

```
Microtask Queue > Task Queue
```

---

## 🔹 Event Loop Priority Flow

```
Call Stack empty?
   ↓ YES
Check Microtask Queue
   ↓
Execute ALL microtasks
   ↓
Then Task Queue
```

---

## ⚠️ Starvation

If microtasks keep coming:

👉 Task queue may never execute

---

# 3️⃣9️⃣ Web APIs

---

## 🔹 Provided by browser

- setTimeout
- DOM APIs
- fetch
- localStorage
- console

---

## 🔹 Role

Handles async operations outside JS engine

---

# 4️⃣0️⃣ JavaScript Engine

---

## 🔹 Steps

---

### 1. Parsing

- Code → Tokens
- Syntax Parser → AST (Abstract Syntax Tree)

---

### 2. Compilation

- JIT (Just In Time)
- Interpreter + Compiler

(V8 → Ignition + TurboFan)

---

### 3. Execution

- Code runs
- Memory managed

---

## 🔹 Optimization Concepts (Good to Know)

- Inline caching
- Garbage collection
- Hidden classes

---

# 4️⃣1️⃣ Callback Hell (Pyramid of Doom)

---

## 🔹 Definition

Callback hell occurs when we nest multiple callbacks inside each other

---

## Example

```javascript
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showSummary(function () {
      api.updateWallet();
    });
  });
});
```

---

## Problems

- Hard to read
- Hard to debug
- Hard to maintain
- Leads to deeply nested code

---

## 🔥 Key Issue

👉 **Inversion of Control**

We lose control over our code execution

---

# 4️⃣2️⃣ Promises

---

## 🔹 Definition

A Promise is an object that represents:

```
Future completion OR failure of an async operation
```

---

## 🔹 Promise States

| State     | Meaning       |
| --------- | ------------- |
| Pending   | Initial state |
| Fulfilled | Success       |
| Rejected  | Failure       |

---

## 🔥 Important

Promise can transition:

```
Pending → Fulfilled OR Rejected
```

(only once)

---

# 4️⃣3️⃣ Creating Promises

---

## Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
```

---

## Example

```javascript
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!cart.length) {
      reject("Cart is empty");
    }

    const orderId = "12345";

    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}
```

---

# 4️⃣4️⃣ Consuming Promises

---

```javascript
createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => {
    console.log(err);
  });
```

---

## 🔹 .then()

- Runs when promise is fulfilled

---

## 🔹 .catch()

- Runs when promise is rejected

---

# 4️⃣5️⃣ Promise Chaining

---

## Example

```javascript
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showSummary(paymentInfo))
  .then(() => updateWallet())
  .catch((err) => console.log(err));
```

---

## 🔥 Important Rule

👉 Always return value from `.then()`

---

## 🔥 Error Handling

- `.catch()` handles errors from ALL previous `.then()`

---

# 4️⃣6️⃣ Promise APIs

---

## 🔹 Promise.all()

```javascript
Promise.all([p1, p2, p3]);
```

- Waits for all promises
- Fails if ANY fails

---

## 🔹 Promise.allSettled()

```javascript
Promise.allSettled([p1, p2, p3]);
```

- Returns result of all promises
- Includes both success & failure

---

## 🔹 Promise.race()

```javascript
Promise.race([p1, p2, p3]);
```

- Returns first settled promise

---

## 🔹 Promise.any()

```javascript
Promise.any([p1, p2, p3]);
```

- Returns first successful promise
- If all fail → AggregateError

---

# 4️⃣7️⃣ Async / Await

---

## 🔹 Definition

Async/Await is syntactic sugar over promises

---

## Rule

```
Async function ALWAYS returns a Promise
```

---

## Example

```javascript
async function getData() {
  return "Hello";
}
```

---

## Equivalent

```javascript
getData().then((res) => console.log(res));
```

---

# 4️⃣8️⃣ Await Behavior (Deep)

---

## Example

```javascript
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved!");
  }, 2000);
});

async function handlePromise() {
  console.log("Start");

  const val = await p;

  console.log("After await");
  console.log(val);
}

handlePromise();
```

---

## Output

```
Start
(after 2 sec)
After await
Resolved!
```

---

## 🔥 Key Insight

- `await` pauses function execution
- BUT does NOT block entire JS thread

---

## Compare with .then()

```javascript
p.then((res) => console.log(res));
console.log("End");
```

Output:

```
End
Resolved!
```

---

# 4️⃣9️⃣ Fetch API

---

## 🔹 Definition

Fetch is used to make HTTP requests

---

## Example

```javascript
async function fetchData() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();

  console.log(data);
}
```

---

## 🔥 Important

- `fetch()` returns a Promise
- `res.json()` also returns a Promise

---

# 5️⃣0️⃣ Error Handling

---

## 🔹 Using .catch()

```javascript
fetchData().catch((err) => console.log(err));
```

---

## 🔹 Using try-catch (BEST)

```javascript
async function fetchData() {
  try {
    const res = await fetch("url");
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }
}
```

---

## 🔥 Key Insight

- try-catch works ONLY inside async function
- cleaner than .catch()

---

# 5️⃣1️⃣ this Keyword (Core Concept)

---

## 🔹 Definition

`this` refers to the **object that is executing the current function**

---

## 🔥 MOST IMPORTANT RULE

👉 `this` depends on **HOW a function is called**, NOT where it is written

---

# 5️⃣2️⃣ this in Global Scope

---

## Browser

```javascript
console.log(this);
```

Output:

```
window
```

---

## 🔹 Relation

```javascript
this === window; // true (browser)
```

---

## Node.js (FYI)

```javascript
console.log(this); // {}
```

---

# 5️⃣3️⃣ Strict vs Non-Strict Mode

---

## Non-Strict Mode

```javascript
function x() {
  console.log(this);
}

x();
```

Output:

```
window
```

---

## Strict Mode

```javascript
"use strict";

function x() {
  console.log(this);
}

x();
```

Output:

```
undefined
```

---

## 🔥 Key Insight

Strict mode prevents default binding to window

---

# 5️⃣4️⃣ this in Regular Functions

---

## Case 1: Direct Call

```javascript
function show() {
  console.log(this);
}

show();
```

👉 Same as global behavior

---

## Case 2: Inside Object but Called Separately

```javascript
const obj = {
  name: "JS",
  show: function () {
    console.log(this);
  },
};

const fn = obj.show;
fn();
```

Output:

```
window / undefined
```

---

## 🔥 Why?

Function is NOT called via object

---

# 5️⃣5️⃣ this in Objects (Methods)

---

```javascript
const obj = {
  name: "JavaScript",
  show: function () {
    console.log(this.name);
  },
};

obj.show();
```

Output:

```
JavaScript
```

---

## 🔥 Rule

👉 When function is called using object:

```
this → object
```

---

# 5️⃣6️⃣ this in Arrow Functions

---

## 🔹 Key Difference

Arrow functions DO NOT have their own `this`

👉 They inherit `this` from parent (lexical)

---

## Example

```javascript
const obj = {
  name: "JS",
  show: () => {
    console.log(this.name);
  },
};

obj.show();
```

Output:

```
undefined
```

---

## 🔥 Why?

Arrow function takes `this` from global scope

---

# 5️⃣7️⃣ Nested Arrow Functions

---

```javascript
const obj = {
  name: "JS",
  show: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

obj.show();
```

Output:

```
JS
```

---

## 🔥 Why?

- `inner` is arrow → inherits from `show`
- `show` → called by obj → `this = obj`

---

# 5️⃣8️⃣ this in DOM (Event Handlers)

---

```javascript
document.getElementById("btn").addEventListener("click", function () {
  console.log(this);
});
```

Output:

```
<button>
```

---

## 🔥 Rule

👉 In event handler:

```
this → element
```

---

## Arrow Function Case

```javascript
button.addEventListener("click", () => {
  console.log(this);
});
```

👉 Will NOT refer to button

---

# 5️⃣9️⃣ call()

---

## 🔹 Definition

`call()` invokes function with custom `this`

---

## Example

```javascript
const obj = { name: "JS" };

function greet() {
  console.log(this.name);
}

greet.call(obj);
```

Output:

```
JS
```

---

## Syntax

```
func.call(thisArg, arg1, arg2)
```

---

# 6️⃣0️⃣ apply()

---

## 🔹 Same as call but args in array

```javascript
function greet(age) {
  console.log(this.name, age);
}

greet.apply(obj, [25]);
```

---

## Syntax

```
func.apply(thisArg, [args])
```

---

# 6️⃣1️⃣ bind()

---

## 🔹 Definition

Returns a NEW function with fixed `this`

---

## Example

```javascript
const boundFn = greet.bind(obj);
boundFn();
```

---

## 🔥 Key Difference

| Method | Behavior             |
| ------ | -------------------- |
| call   | invokes immediately  |
| apply  | invokes immediately  |
| bind   | returns new function |

---

# 6️⃣2️⃣ Debouncing

---

## 🔹 Definition

Debouncing ensures that a function is **called only after a delay**,  
and only **after the user stops triggering the event**

---

## 🔹 Real-World Use Cases

- Search bar input
- Auto-save
- Resize events

---

## 🔹 Example

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

---

## 🔹 Usage

```javascript
const handleSearch = debounce(() => {
  console.log("API Call");
}, 500);
```

---

## 🔥 Key Insight

👉 Prevents **unnecessary API calls**

---

## 🔥 Behavior

```
Typing: a → ab → abc → abcd

Only ONE API call happens after user stops typing
```

---

# 6️⃣3️⃣ Throttling

---

## 🔹 Definition

Throttling ensures a function is **executed at regular intervals**

---

## 🔹 Real-World Use Cases

- Scroll events
- Button spam prevention
- Window resize

---

## 🔹 Example

```javascript
function throttle(fn, limit) {
  let flag = true;

  return function (...args) {
    if (!flag) return;

    fn.apply(this, args);
    flag = false;

    setTimeout(() => {
      flag = true;
    }, limit);
  };
}
```

---

## 🔥 Difference from Debounce

| Debounce             | Throttle                |
| -------------------- | ----------------------- |
| Executes after delay | Executes every interval |
| Waits for pause      | Runs continuously       |

---

# 6️⃣4️⃣ Event Bubbling & Capturing

---

## 🔹 Event Bubbling

Event flows:

```
Child → Parent → Grandparent
```

---

## Example

```javascript
<div id="parent">
  <button id="child">Click</button>
</div>
```

```javascript
child.addEventListener("click", () => console.log("Child"));
parent.addEventListener("click", () => console.log("Parent"));
```

---

## Output

```
Child
Parent
```

---

## 🔹 Event Capturing (Trickling)

Event flows:

```
Parent → Child
```

---

## Example

```javascript
parent.addEventListener("click", handler, true);
```

---

## 🔥 stopPropagation()

Stops event flow

```javascript
event.stopPropagation();
```

---

# 6️⃣5️⃣ async vs defer

---

## 🔹 Problem

Scripts block HTML parsing

---

## 🔹 async

```html
<script async src="script.js"></script>
```

- Loads parallel
- Executes immediately
- Order NOT guaranteed

---

## 🔹 defer

```html
<script defer src="script.js"></script>
```

- Loads parallel
- Executes after HTML parsed
- Order maintained

---

## 🔥 Comparison

| Feature          | async          | defer      |
| ---------------- | -------------- | ---------- |
| Execution timing | Immediately    | After HTML |
| Order            | Not guaranteed | Maintained |

---

# 6️⃣6️⃣ LocalStorage vs SessionStorage

---

## 🔹 LocalStorage

- Persistent (no expiry)
- Stored in browser

---

## 🔹 SessionStorage

- Exists only for session
- Cleared when tab closes

---

## 🔹 Comparison

| Feature       | LocalStorage | SessionStorage |
| ------------- | ------------ | -------------- |
| Lifetime      | Permanent    | Tab session    |
| Storage limit | ~5MB         | ~5MB           |

---

## 🔹 Example

```javascript
localStorage.setItem("name", "JS");
localStorage.getItem("name");
```

---

# 6️⃣7️⃣ Polyfills

---

## 🔹 Definition

Polyfill = Custom implementation of built-in functionality

---

## 🔹 Example (map polyfill)

```javascript
Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
```

---

## 🔥 Why important?

- Understand internals
- Helps in interviews

---

# 6️⃣8️⃣ Shallow vs Deep Copy

---

## 🔹 Shallow Copy

Copies reference

```javascript
const obj1 = { a: 1 };
const obj2 = obj1;

obj2.a = 10;

console.log(obj1.a); // 10 ❌
```

---

## 🔹 Deep Copy

Creates independent copy

```javascript
const obj1 = { a: 1 };

const obj2 = JSON.parse(JSON.stringify(obj1));
```

---

## 🔥 Key Difference

| Shallow                 | Deep       |
| ----------------------- | ---------- |
| Shares reference        | New memory |
| Changes affect original | No effect  |

---

# 🧠 Final Takeaways

---

## 🔹 Core JavaScript (Execution Model)

- JavaScript runs inside an **Execution Context**
- Execution happens in two phases:
  - Memory Phase (variables → `undefined`, functions → stored)
  - Code Phase (line-by-line execution)
- Call Stack manages execution using **LIFO**
- Hoisting moves declarations to the top of their scope
- Function declarations are fully hoisted, function expressions are not
- A new execution context is created for every function call
- In browsers, the global object is `window`
- `undefined` ≠ `not defined`

---

## 🔹 Scope & Environment

- Lexical Environment = **local memory + reference to parent**
- Scope Chain determines how variables are resolved
- `let` and `const` are **block scoped**
- `var` is **function scoped**
- Temporal Dead Zone (TDZ) prevents access before initialization
- Shadowing depends on scope rules (legal vs illegal shadowing)

---

## 🔹 Closures (VERY IMPORTANT)

- Closures = **function + its lexical environment**
- Closures allow access to outer variables even after execution ends
- Closures store **reference, not value**
- Closures are widely used in:
  - Data hiding
  - Event handlers
  - Async operations
- `var` in loops causes bugs → prefer `let` or closures
- Closures enable **private variables and state**

---

## 🔹 Functions & Functional Programming

- Functions are **first-class citizens**
- Can be:
  - Passed as arguments
  - Returned from functions
- Higher Order Functions (HOFs) enable reusable logic
- `map`, `filter`, `reduce` are core functional tools
- `reduce` is the most powerful (can replicate others)
- Function currying enables **partial application & reuse**

---

## 🔹 Event Loop & Runtime

- JavaScript is single-threaded but supports async via:
  - Web APIs
  - Event Loop
- Event Loop manages execution between:
  - Call Stack
  - Task Queue
  - Microtask Queue
- **Microtasks (Promises) have higher priority than tasks**
- Continuous microtasks can cause **starvation of task queue**
- JS Engine workflow:
  - Parsing → Compilation → Execution

---

## 🔹 Asynchronous JavaScript

- Callback Hell leads to unreadable code
- Promises solve:
  - Inversion of control
  - Callback nesting
- Promise states:
  - Pending → Fulfilled / Rejected
- Promise chaining improves readability
- Async/Await simplifies promise handling
- `await` pauses function (not entire JS thread)
- Fetch API is promise-based
- Always handle errors using:
  - `.catch()` OR
  - `try...catch`

---

## 🔹 this Keyword & Function Control

- `this` depends on **how a function is called**
- In global (browser) → `window`
- In object method → object itself
- In arrow functions → inherited from parent (lexical `this`)
- In event handlers → refers to DOM element
- call/apply/bind allow manual control of `this`:
  - `call()` → immediate execution
  - `apply()` → arguments as array
  - `bind()` → returns new function

---

## 🔹 Advanced Concepts (Real-World JS)

- Debouncing prevents unnecessary repeated execution (e.g., search input)
- Throttling limits execution rate (e.g., scroll events)
- Event Bubbling: child → parent
- Event Capturing: parent → child
- `async` vs `defer` affects script loading behavior
- LocalStorage vs SessionStorage:
  - Local → persistent
  - Session → tab-based
- Polyfills replicate built-in JS functionality
- Shallow copy shares reference, Deep copy creates independent data

---
