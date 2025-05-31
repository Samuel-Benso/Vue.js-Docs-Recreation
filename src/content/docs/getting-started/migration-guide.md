---
title:  Migrating from Vue 2 to Vue 3
description: A guide in my new Starlight docs site.
---

This page will help you smoothly transition your projects from Vue 2 to Vue 3, highlighting key changes, common migration steps, and helpful resources.

---

## Why Migrate to Vue 3?

Vue 3 offers many improvements over Vue 2, including:

* **Better performance** with a smaller bundle size.
* **Improved TypeScript support**.
* A new **Composition API** for more flexible and reusable code.
* Enhanced **Reactiveness system**.
* New features like **Fragments**, **Teleport**, and **Suspense**.
* Continued support and updates (Vue 2 reached end-of-life in December 2023).

---

## Migration Overview

Migrating from Vue 2 to Vue 3 involves several steps:

1. **Review Breaking Changes**: Understand which Vue 2 APIs and features have changed or been removed.
2. **Update Dependencies**: Upgrade related tools and plugins to Vue 3 compatible versions.
3. **Code Refactoring**: Adjust your components to use new APIs and fix any deprecated patterns.
4. **Test Thoroughly**: Ensure your app behaves as expected after migration.
5. **Use the Migration Build**: Vue provides a migration build with compatibility warnings to ease the transition.

---

## Step 1: Review Breaking Changes

Some major breaking changes include:

* Removal of the `.sync` modifier (replaced by `v-model` improvements).
* Changes to lifecycle hooks names (`beforeDestroy` → `beforeUnmount`, `destroyed` → `unmounted`).
* Global API changes (e.g., `Vue.use` and `Vue.component` moved to app instance).
* Removal of filters.
* Changes in custom directive hooks.

> For a full list, see the official [Vue 3 Breaking Changes](https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes) documentation.

---

## Step 2: Update Your Dependencies

* Upgrade Vue CLI or Vite to the latest versions.
* Update Vue Router and Vuex to versions compatible with Vue 3.
* Check third-party plugins for Vue 3 support or alternatives.

---

## Step 3: Refactor Your Code

* Replace deprecated lifecycle hooks.
* Adjust component registration and global API usage.
* Convert filters to computed properties or methods.
* Migrate from Options API to Composition API (optional but recommended for new features).

---

## Step 4: Use the Migration Build

Vue offers a special migration build that includes compatibility warnings for deprecated or changed APIs. This helps you identify what needs to be updated in your code.

```bash
npm install vue@next
```

Use the migration build in your project and fix warnings step-by-step.

---

## Step 5: Test Your Application

Test all parts of your application thoroughly:

* Unit tests
* Integration tests
* Manual testing in browsers

Check for unexpected behavior or performance issues.

---

## Helpful Tools & Resources

* **Vue Migration Guide**: [https://v3.vuejs.org/guide/migration/introduction.html](https://v3.vuejs.org/guide/migration/introduction.html)
* **Migration Build**: [https://v3.vuejs.org/guide/migration/migration-build.html](https://v3.vuejs.org/guide/migration/migration-build.html)
* **Vue CLI Upgrade Guide**: [https://cli.vuejs.org/migration/](https://cli.vuejs.org/migration/)
* **Vue Router 4** (Vue 3 compatible): [https://next.router.vuejs.org/](https://next.router.vuejs.org/)
* **Vuex 4** (Vue 3 compatible): [https://next.vuex.vuejs.org/](https://next.vuex.vuejs.org/)

---

## Tips for a Smooth Migration

* Start with smaller, isolated components or new features.
* Migrate incrementally rather than all at once.
* Use the migration build’s warnings to guide your updates.
* Keep backup copies of your code before major changes.

---

## Need Help?

If you encounter issues during migration, check out the Vue community forums, Discord channels, or open an issue on the Vue GitHub repo.

---

## Summary

Migrating to Vue 3 unlocks powerful new features and performance improvements. Taking it step-by-step with the migration build and thorough testing will help you upgrade your app confidently.

---


