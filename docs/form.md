---
title: "Form"
outline: "deep"
---

# Form

## Input

### Preview

<input type="text" class="form-control" placeholder="Username" />

### Usage

```html
<input type="text" class="form-control" placeholder="Username" />
```

### Input size

#### Xs

##### Preview

<label for="xs-input" class="form-label">Input (xs)</label>
<input
  id="xs-input"
  type="text"
  class="form-control xs"
  placeholder="insert text..."
/>
<div class="form-info">Input xs info.</div>

##### Usage

```html
<label for="xs-input" class="form-label">Input (xs)</label>
<input
  id="xs-input"
  type="text"
  class="form-control xs"
  placeholder="insert text..."
/>
<div class="form-info">Input xs info.</div>
```

#### Sm

##### Preview

<label for="sm-input" class="form-label">Input (sm)</label>
<input
  id="sm-input"
  type="text"
  class="form-control sm"
  placeholder="insert text..."
/>
<div class="form-info">Input sm info.</div>

##### Usage

```html
<label for="sm-input" class="form-label">Input (sm)</label>
<input
  id="sm-input"
  type="text"
  class="form-control sm"
  placeholder="insert text..."
/>
<div class="form-info">Input sm info.</div>
```

#### Default

##### Preview

<label for="default-input" class="form-label">Input (default)</label>
<input
  id="default-input"
  type="text"
  class="form-control default"
  placeholder="insert text..."
/>
<div class="form-info">Input default info.</div>

##### Usage

```html
<label for="default-input" class="form-label">Input (default)</label>
<input
  id="default-input"
  type="text"
  class="form-control default"
  placeholder="insert text..."
/>
<div class="form-info">Input default info.</div>
```

#### Lg

##### Preview

<label for="lg-input" class="form-label">Input (lg)</label>
<input
  id="lg-input"
  type="text"
  class="form-control lg"
  placeholder="insert text..."
/>
<div class="form-info">Input lg info.</div>

##### Usage

```html
<label for="lg-input" class="form-label">Input (lg)</label>
<input
  id="lg-input"
  type="text"
  class="form-control lg"
  placeholder="insert text..."
/>
<div class="form-info">Input lg info.</div>
```

#### Xl

##### Preview

<label for="xl-input" class="form-label">Input (xl)</label>
<input
  id="xl-input"
  type="text"
  class="form-control xl"
  placeholder="insert text..."
/>
<div class="form-info">Input xl info.</div>

##### Usage

```html
<label for="xl-input" class="form-label">Input (xl)</label>
<input
  id="xl-input"
  type="text"
  class="form-control xl"
  placeholder="insert text..."
/>
<div class="form-info">Input xl info.</div>
```

#### Xxl

##### Preview

<label for="xxl-input" class="form-label">Input (xxl)</label>
<input
  id="xxl-input"
  type="text"
  class="form-control xxl"
  placeholder="insert text..."
/>
<div class="form-info">Input xxl info.</div>

##### Usage

```html
<label for="xxl-input" class="form-label">Input (xxl)</label>
<input
  id="xxl-input"
  type="text"
  class="form-control xxl"
  placeholder="insert text..."
/>
<div class="form-info">Input xxl info.</div>
```

## Textarea

### Preview

<textarea class="form-control" placeholder="Insert description..."></textarea>

### Usage

```html
<textarea class="form-control" placeholder="Insert description..."></textarea>
```

## Label & Info

### Preview

<label for="first_name" class="form-label">First name</label>
<input
  id="first_name"
  type="text"
  class="form-control"
  placeholder="insert text first name..."
/>
<div class="form-info">first name info</div>

### Usage

```html
<label for="first_name" class="form-label">First name</label>
<input
  id="first_name"
  type="text"
  class="form-control"
  placeholder="insert text first name..."
/>
<div class="form-info">first name info</div>
```

## Icons

### Start Icon

#### Preview

<div class="form-control-container">
  <span class="start-icon"><i class="icon bi-person"></i></span>
  <input
    type="text"
    class="form-control has-start-icon"
    placeholder="username"
  />
</div>

#### Usage

```html
<div class="form-control-container">
  <span class="start-icon"><i class="icon bi-person"></i></span>
  <input
    type="text"
    class="form-control has-start-icon"
    placeholder="username"
  />
</div>
```

### End Icon

#### Preview

<div class="form-control-container">
  <input type="text" class="form-control has-end-icon" placeholder="username" />
  <span class="end-icon"><i class="icon bi-copy"></i></span>
</div>

#### Usage

```html
<div class="form-control-container">
  <input type="text" class="form-control has-end-icon" placeholder="username" />
  <span class="end-icon"><i class="icon bi-copy"></i></span>
</div>
```

### Start & End Icons

#### Preview

<div class="form-control-container">
  <span class="start-icon"><i class="icon bi-person"></i></span>
  <input
    type="text"
    class="form-control has-start-icon has-end-icon"
    placeholder="username"
  />
  <span class="end-icon"><i class="icon bi-copy"></i></span>
</div>

#### Usage

```html
<div class="form-control-container">
  <span class="start-icon"><i class="icon bi-person"></i></span>
  <input
    type="text"
    class="form-control has-start-icon has-end-icon"
    placeholder="username"
  />
  <span class="end-icon"><i class="icon bi-copy"></i></span>
</div>
```

## Password Toggle

### Preview

<input type="password" class="form-control" placeholder="Insert password" />

### Usage

```html
<input type="password" class="form-control" placeholder="Insert password" />
```

## Select

### Preview

<select class="form-select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

### Usage

```html
<select class="form-select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

## Checkbox

### Preview

<div class="form-check">
  <input type="checkbox" id="agree" value="1" />
  <label for="agree">Agree policy</label>
</div>

### Usage

```html
<div class="form-check">
  <input type="checkbox" id="agree" value="1" />
  <label for="agree">Agree policy</label>
</div>
```

## Radio

### Preview

<div class="form-radio">
  <input type="radio" id="country-usa" name="countries" value="usa" />
  <label for="country-usa">United states</label>
</div>

<div class="form-radio">
  <input type="radio" id="country-uk" name="countries" value="uk" />
  <label for="country-uk">United kigdom</label>
</div>

<div class="form-radio">
  <input type="radio" id="country-germany" name="countries" value="germany" />
  <label for="country-germany">Germany</label>
</div>

### Usage

```html
<div class="form-radio">
  <input type="radio" id="country-usa" name="countries" value="usa" />
  <label for="country-usa">United states</label>
</div>

<div class="form-radio">
  <input type="radio" id="country-uk" name="countries" value="uk" />
  <label for="country-uk">United kigdom</label>
</div>

<div class="form-radio">
  <input type="radio" id="country-germany" name="countries" value="germany" />
  <label for="country-germany">Germany</label>
</div>
```

## Toggle / Switch

### Preview

<label class="form-switch">
  <input type="checkbox" />
  <span class="toggle-slider"></span>
  <span class="form-switch-label">Agree all.</span>
</label>

### Usage

```html
<label class="form-switch">
  <input type="checkbox" />
  <span class="toggle-slider"></span>
  <span class="form-switch-label">Agree all.</span>
</label>
```

## Form layout

### Preview

<div class="grid grid-cols-1 gap-3">
  <div class="col">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="col">
        <label for="first_name" class="form-label">First name</label>
        <input
          id="first_name"
          type="text"
          class="form-control"
          placeholder="insert text first name..."
        />
        <div class="form-info">first name info</div>
      </div>
      <div class="col">
        <label for="last_name" class="form-label">Last name</label>
        <input
          id="last_name"
          type="text"
          class="form-control"
          placeholder="insert text last name..."
        />
        <div class="form-info">last name info</div>
      </div>
      <div class="col">
        <label for="gender" class="form-label">Gender</label>
        <select id="gender" class="form-select">
          <option value="m">Male</option>
          <option value="1">Female</option>
        </select>
        <div class="form-info">select gender info</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-check">
      <input type="checkbox" id="agree" value="1" />
      <label for="agree">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <label class="form-label">Select country</label>
    <div class="form-radio">
      <input type="radio" id="country-1" name="countries" value="usa" />
      <label for="country-1">United states</label>
    </div>
    <div class="form-radio">
      <input type="radio" id="country-2" name="countries" value="uk" />
      <label for="country-2">United kindom</label>
    </div>
    <div class="form-radio disabled">
      <input
        type="radio"
        id="country-3"
        name="countries"
        value="germany"
        disabled
      />
      <label for="country-3">Germany</label>
    </div>
  </div>
  <div class="col">
    <label class="form-switch">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
  <div class="col">
    <label for="bio" class="form-label">Bio</label>
    <textarea
      id="bio"
      class="form-control"
      rows="4"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info">bio info</div>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary">Submit</button>
  </div>
</div>

### Usage

```html
<div class="grid grid-cols-1 gap-3">
  <div class="col">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="col">
        <label for="first_name" class="form-label">First name</label>
        <input
          id="first_name"
          type="text"
          class="form-control"
          placeholder="insert text first name..."
        />
        <div class="form-info">first name info</div>
      </div>
      <div class="col">
        <label for="last_name" class="form-label">Last name</label>
        <input
          id="last_name"
          type="text"
          class="form-control"
          placeholder="insert text last name..."
        />
        <div class="form-info">last name info</div>
      </div>
      <div class="col">
        <label for="gender" class="form-label">Gender</label>
        <select id="gender" class="form-select">
          <option value="m">Male</option>
          <option value="1">Female</option>
        </select>
        <div class="form-info">select gender info</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-check">
      <input type="checkbox" id="agree" value="1" />
      <label for="agree">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <label class="form-label">Select country</label>
    <div class="form-radio">
      <input type="radio" id="country-1" name="countries" value="usa" />
      <label for="country-1">United states</label>
    </div>
    <div class="form-radio">
      <input type="radio" id="country-2" name="countries" value="uk" />
      <label for="country-2">United kindom</label>
    </div>
    <div class="form-radio disabled">
      <input
        type="radio"
        id="country-3"
        name="countries"
        value="germany"
        disabled
      />
      <label for="country-3">Germany</label>
    </div>
  </div>
  <div class="col">
    <label class="form-switch">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
  <div class="col">
    <label for="bio" class="form-label">Bio</label>
    <textarea
      id="bio"
      class="form-control"
      rows="4"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info">bio info</div>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary">Submit</button>
  </div>
</div>
```

## Validations

### Preview

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 has-code">
  <div class="col">
    <label for="success-input" class="form-label success">Success input</label>
    <input
      id="success-input"
      type="text"
      class="form-control success"
      placeholder="insert text..."
    />
    <div class="form-info success">Success input info</div>
  </div>
  <div class="col">
    <label for="error-input" class="form-label error">Error input</label>
    <input
      id="error-input"
      type="text"
      class="form-control error"
      placeholder="insert text..."
    />
    <div class="form-info error">Error input info</div>
  </div>
  <div class="col">
    <label for="bio-success" class="form-label success">Bio</label>
    <textarea
      id="bio-success"
      class="form-control success"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info success">success bio info</div>
  </div>
  <div class="col">
    <label for="bio-error" class="form-label error">Bio</label>
    <textarea
      id="bio-error"
      class="form-control error"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info error">Error bio info</div>
  </div>
  <div class="col">
    <label for="gender-success" class="form-label success">Gender</label>
    <select id="gender-success" class="form-select success">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info success">select gender info</div>
  </div>
  <div class="col">
    <label for="gender-error" class="form-label error">Gender</label>
    <select id="gender-error" class="form-select error">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info error">select gender info</div>
  </div>
  <div class="col">
    <div class="form-check success">
      <input type="checkbox" id="agree-success" value="1" />
      <label for="agree-success">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <div class="form-check error">
      <input type="checkbox" id="agree-error" value="1" />
      <label for="agree-error">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <label class="form-switch success">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
  <div class="col">
    <label class="form-switch error">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
</div>

### Usage

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 has-code">
  <div class="col">
    <label for="success-input" class="form-label success">Success input</label>
    <input
      id="success-input"
      type="text"
      class="form-control success"
      placeholder="insert text..."
    />
    <div class="form-info success">Success input info</div>
  </div>
  <div class="col">
    <label for="error-input" class="form-label error">Error input</label>
    <input
      id="error-input"
      type="text"
      class="form-control error"
      placeholder="insert text..."
    />
    <div class="form-info error">Error input info</div>
  </div>
  <div class="col">
    <label for="bio-success" class="form-label success">Bio</label>
    <textarea
      id="bio-success"
      class="form-control success"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info success">success bio info</div>
  </div>
  <div class="col">
    <label for="bio-error" class="form-label error">Bio</label>
    <textarea
      id="bio-error"
      class="form-control error"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info error">Error bio info</div>
  </div>
  <div class="col">
    <label for="gender-success" class="form-label success">Gender</label>
    <select id="gender-success" class="form-select success">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info success">select gender info</div>
  </div>
  <div class="col">
    <label for="gender-error" class="form-label error">Gender</label>
    <select id="gender-error" class="form-select error">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info error">select gender info</div>
  </div>
  <div class="col">
    <div class="form-check success">
      <input type="checkbox" id="agree-success" value="1" />
      <label for="agree-success">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <div class="form-check error">
      <input type="checkbox" id="agree-error" value="1" />
      <label for="agree-error">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <label class="form-switch success">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
  <div class="col">
    <label class="form-switch error">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
</div>
```

## Input group

### Preview

<div class="input-group">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

### Usage

```html
<div class="input-group">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

### Input group size

#### Input group (xs)

##### Preview

<div class="input-group xs">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group xs">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

#### Input group (sm)

##### Preview

<div class="input-group sm">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group sm">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

#### Input group (default)

##### Preview

<div class="input-group default">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group default">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

#### Input group (lg)

##### Preview

<div class="input-group lg">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group lg">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

#### Input group (xl)

##### Preview

<div class="input-group xl">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group xl">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

#### Input group (xxl)

##### Preview

<div class="input-group xxl">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>

##### Usage

```html
<div class="input-group xxl">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
```

## Login form card

### Preview

<div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Sign in
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="login" class="form-label">Username/Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="login"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Username/Email"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login-password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="login-password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label">Remember Me</span>
        </label>
      </div>
      <div class="col text-center text-sm">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Forgot password?</span>
          <a href="#!" class="link">Recover password</a>
        </div>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Sign in
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Don't have an account?</span>
          <a href="#!" class="link">Sign up</a>
        </div>
      </div>
    </div>
  </form>
</div>

### Usage

```html
<div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Sign in
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="login" class="form-label">Username/Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="login"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Username/Email"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login-password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="login-password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label">Remember Me</span>
        </label>
      </div>
      <div class="col text-center text-sm">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Forgot password?</span>
          <a href="#!" class="link">Recover password</a>
        </div>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Sign in
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Don't have an account?</span>
          <a href="#!" class="link">Sign up</a>
        </div>
      </div>
    </div>
  </form>
</div>
```

## Register form card

### Preview

<div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Create account
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="name" class="form-label">Username</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control has-start-icon pill"
            placeholder="Username"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login" class="form-label">Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-envelope"></i>
          </span>
          <input
            type="text"
            id="email"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Email"
            autofocus
            autocomplete="email"
          />
        </div>
      </div>
      <div class="col">
        <label for="password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label for="password_confirmation" class="form-label"
          >Confirm password</label
        >
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Confirm password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label"
            >I aggree <a class="link" href="#!">terms</a> and
            <a class="link" href="#!">conditions</a>.</span
          >
        </label>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Register
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Have an account?</span>
          <a href="#!" class="link">Sign in</a>
        </div>
      </div>
    </div>
  </form>
</div>

### Usage

```html
<div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Create account
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="name" class="form-label">Username</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control has-start-icon pill"
            placeholder="Username"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login" class="form-label">Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-envelope"></i>
          </span>
          <input
            type="text"
            id="email"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Email"
            autofocus
            autocomplete="email"
          />
        </div>
      </div>
      <div class="col">
        <label for="password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label for="password_confirmation" class="form-label"
          >Confirm password</label
        >
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Confirm password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label"
            >I aggree <a class="link" href="#!">terms</a> and
            <a class="link" href="#!">conditions</a>.</span
          >
        </label>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Register
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Have an account?</span>
          <a href="#!" class="link">Sign in</a>
        </div>
      </div>
    </div>
  </form>
</div>
```
