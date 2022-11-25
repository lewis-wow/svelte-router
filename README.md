# Svelte router

```svelte
  <script>
    import { Router, Route, ProtectedRoute, Redirect, link, back, forward, navigate } from './lib/index'
    
    import Home from './Home.svelte'
    import Profile from './Profile.svelte'
    let isLoggedIn = false
  </script>

  <Router>
    <nav>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>

      <button on:click={back}>Back</button>
      <button on:click={() => navigate(-2)}>Back 2</button>      

      <button on:click={forward}>Forward</button>
      <button on:click={() => navigate(2)}>Forward 2</button>  
    </nav>

    <Route path="/" component={Home} />
    <ProtectedRoute path="/profile" allow={isLoggedIn} fallback="/" component={Profile} />
  </Router>
```
