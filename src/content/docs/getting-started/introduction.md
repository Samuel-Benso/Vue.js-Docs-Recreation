---
title: 🧭 Welcome to Vue 3!
description: A guide in my new Starlight docs site.
---

## What Is Vue?

Vue (pronounced like "view") is a **JavaScript framework** that helps you build fast, modern user interfaces. It’s built on HTML, CSS, and JavaScript — tools you probably already know.

Instead of managing complex UIs manually, Vue lets you write **components** that react automatically when your data changes.

---

### 🧪 A Quick Example

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

```html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

**Result:**

> Count is: 0 (clicking the button increases the number)

---

## What You Should Know First

To get the most from this guide, make sure you’re comfortable with:

* HTML basics
* CSS styling
* JavaScript functions and objects

Check your knowledge:

* [HTML Overview](#)
* [CSS Overview](#)
* [JavaScript Overview](#)

---

## Why We Call Vue a "Progressive Framework"

Vue is designed to grow with you. Whether you’re enhancing a static site or building a full web app, Vue adapts to your needs.

You can use Vue for:

* Simple enhancements to static HTML
* Embedding components into existing sites
* Full single-page apps (SPAs)
* Server-side rendering (SSR)
* Static site generation (SSG)
* Even mobile, desktop, or terminal apps!

> 🔍 Want to learn more? Check out [Ways of Using Vue](#).

---

## Single File Components (SFCs)

As projects grow, Vue recommends using **Single File Components (SFCs)**. These `.vue` files bundle everything you need (JS, HTML, and CSS) into one place.

Here’s the earlier example, rewritten as a `.vue` file:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

---

## Two API Styles: Options vs. Composition

Vue lets you write components in **two styles**. Both work the same way under the hood:

### 1. Options API

You organize code into `data`, `methods`, and `lifecycle hooks`.

```vue
<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### 2. Composition API

You write logic inside a setup function using `ref`, `onMounted`, and other utilities.

```vue
<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

---

## Which Should You Use?

Use what feels right to you:

* ✅ **Options API** if you’re new to reactivity or coming from OOP languages.
* ✅ **Composition API** for more control, cleaner logic reuse, and full app building.

---

## Choose Your Learning Path

Pick what works best for you:

* **[Try the Tutorial](#)** – Hands-on, beginner-friendly.
* **[Read the Guide](#)** – Deep dive into every feature.
* **[Explore Examples](#)** – See how Vue solves real-world problems.

> Got questions? Check the [Vue FAQ](#).

---



