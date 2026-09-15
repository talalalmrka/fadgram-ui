---
outline: deep
icon: bi-table
title: Table
---

# Table

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table striped

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table border

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-border">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-border">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table border separate

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-border-separate">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-border-separate">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table divide

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-divide">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-divide">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table hover

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table rounded

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-rounded">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-rounded">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table layout

### Table layout auto

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-auto">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-auto">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

### Table layout fixed

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-fixed">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-fixed">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table shadow

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table shadow">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table shadow">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table shadow rounded

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table table-rounded shadow">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table table-rounded shadow">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

## Table size

### Table xs

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table xs">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table xs">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

### Table sm

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table sm">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table sm">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

### Table lg

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table lg">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table lg">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

### Table xl

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table xl">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table xl">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::

### Table xxl

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <div class="table-container">
    <table class="table xxl">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dan Emard MD</td>
          <td>osinski.cristopher@yahoo.com</td>
          <td>2001-03-13</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sonia Leuschke</td>
          <td>lucy15@schoen.com</td>
          <td>2015-02-27</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celia Hamill</td>
          <td>uwhite@yahoo.com</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. Gilbert Rogahn Sr.</td>
          <td>hpagac@tremblay.biz</td>
          <td>1978-07-31</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Franz Stamm</td>
          <td>deja10@gusikowski.com</td>
          <td>2006-07-26</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>date</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

== HTML

```html
<div class="table-container">
  <table class="table xxl">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dan Emard MD</td>
        <td>osinski.cristopher@yahoo.com</td>
        <td>2001-03-13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sonia Leuschke</td>
        <td>lucy15@schoen.com</td>
        <td>2015-02-27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Celia Hamill</td>
        <td>uwhite@yahoo.com</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Dr. Gilbert Rogahn Sr.</td>
        <td>hpagac@tremblay.biz</td>
        <td>1978-07-31</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Franz Stamm</td>
        <td>deja10@gusikowski.com</td>
        <td>2006-07-26</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>date</th>
      </tr>
    </tfoot>
  </table>
</div>
```

:::
