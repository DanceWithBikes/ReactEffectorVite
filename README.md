- Feature Slice Design (https://feature-sliced.design/)
- Atomic Design
- DDD(not implemented, should be a part of /entities mostly)
- React Effector
- Webpack
- React

1. App — everything that makes the app run — routing, entrypoints, global styles, providers.
2. Pages — full pages or large parts of a page in nested routing.
3. Widgets — large self-contained chunks of functionality or UI, usually delivering an entire use case.
4. Features — reused implementations of entire product features, i.e. actions that bring business value to the user.
5. Entities — business entities that the project works with, like user or product.
6. Shared — reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily.
