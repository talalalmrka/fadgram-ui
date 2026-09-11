---
outline: deep
title: Modal
---

# Modal

## Basic usage

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#basic-modal"
  >
    Open modal
  </button>
  <div id="basic-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#basic-modal"
>
  Open modal
</button>
<div id="basic-modal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

## Static backdrop

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#static-modal"
  >
    Static modal
  </button>
  <div id="static-modal" class="modal fade static-backdrop">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#static-modal"
>
  Static modal
</button>
<div id="static-modal" class="modal fade static-backdrop">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

## Modal size

### Modal xs

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-xs"
  >
    Modal xs
  </button>
  <div id="modal-size-xs" class="modal fade modal-size-xs">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-xs"
>
  Modal xs
</button>
<div id="modal-size-xs" class="modal fade modal-size-xs">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal sm

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-sm"
  >
    Modal sm
  </button>
  <div id="modal-size-sm" class="modal fade modal-size-sm">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-sm"
>
  Modal sm
</button>
<div id="modal-size-sm" class="modal fade modal-size-sm">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal md

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-md"
  >
    Modal md
  </button>
  <div id="modal-size-md" class="modal fade modal-size-md">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-md"
>
  Modal md
</button>
<div id="modal-size-md" class="modal fade modal-size-md">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal lg

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-lg"
  >
    Modal lg
  </button>
  <div id="modal-size-lg" class="modal fade modal-size-lg">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-lg"
>
  Modal lg
</button>
<div id="modal-size-lg" class="modal fade modal-size-lg">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal xl

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-xl"
  >
    Modal xl
  </button>
  <div id="modal-size-xl" class="modal fade modal-size-xl">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-xl"
>
  Modal xl
</button>
<div id="modal-size-xl" class="modal fade modal-size-xl">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal full

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#modal-size-full"
  >
    Modal full
  </button>
  <div id="modal-size-full" class="modal fade modal-size-full">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#modal-size-full"
>
  Modal full
</button>
<div id="modal-size-full" class="modal fade modal-size-full">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

## Modal scroll

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn"
    data-fg-toggle="modal"
    data-fg-target="#scrollable-modal"
  >
    Scrollable modal
  </button>
  <div id="scrollable-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
            <li>Item 10</li>
            <li>Item 11</li>
            <li>Item 12</li>
            <li>Item 13</li>
            <li>Item 14</li>
            <li>Item 15</li>
            <li>Item 16</li>
            <li>Item 17</li>
            <li>Item 18</li>
            <li>Item 19</li>
            <li>Item 20</li>
            <li>Item 21</li>
            <li>Item 22</li>
            <li>Item 23</li>
            <li>Item 24</li>
            <li>Item 25</li>
            <li>Item 26</li>
            <li>Item 27</li>
            <li>Item 28</li>
            <li>Item 29</li>
            <li>Item 30</li>
            <li>Item 31</li>
            <li>Item 32</li>
            <li>Item 33</li>
            <li>Item 34</li>
            <li>Item 35</li>
            <li>Item 36</li>
            <li>Item 37</li>
            <li>Item 38</li>
            <li>Item 39</li>
            <li>Item 40</li>
            <li>Item 41</li>
            <li>Item 42</li>
            <li>Item 43</li>
            <li>Item 44</li>
            <li>Item 45</li>
            <li>Item 46</li>
            <li>Item 47</li>
            <li>Item 48</li>
            <li>Item 49</li>
            <li>Item 50</li>
            <li>Item 51</li>
            <li>Item 52</li>
            <li>Item 53</li>
            <li>Item 54</li>
            <li>Item 55</li>
            <li>Item 56</li>
            <li>Item 57</li>
            <li>Item 58</li>
            <li>Item 59</li>
            <li>Item 60</li>
            <li>Item 61</li>
            <li>Item 62</li>
            <li>Item 63</li>
            <li>Item 64</li>
            <li>Item 65</li>
            <li>Item 66</li>
            <li>Item 67</li>
            <li>Item 68</li>
            <li>Item 69</li>
            <li>Item 70</li>
            <li>Item 71</li>
            <li>Item 72</li>
            <li>Item 73</li>
            <li>Item 74</li>
            <li>Item 75</li>
            <li>Item 76</li>
            <li>Item 77</li>
            <li>Item 78</li>
            <li>Item 79</li>
            <li>Item 80</li>
            <li>Item 81</li>
            <li>Item 82</li>
            <li>Item 83</li>
            <li>Item 84</li>
            <li>Item 85</li>
            <li>Item 86</li>
            <li>Item 87</li>
            <li>Item 88</li>
            <li>Item 89</li>
            <li>Item 90</li>
            <li>Item 91</li>
            <li>Item 92</li>
            <li>Item 93</li>
            <li>Item 94</li>
            <li>Item 95</li>
            <li>Item 96</li>
            <li>Item 97</li>
            <li>Item 98</li>
            <li>Item 99</li>
            <li>Item 100</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn"
  data-fg-toggle="modal"
  data-fg-target="#scrollable-modal"
>
  Scrollable modal
</button>
<div id="scrollable-modal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
          <li>Item 11</li>
          <li>Item 12</li>
          <li>Item 13</li>
          <li>Item 14</li>
          <li>Item 15</li>
          <li>Item 16</li>
          <li>Item 17</li>
          <li>Item 18</li>
          <li>Item 19</li>
          <li>Item 20</li>
          <li>Item 21</li>
          <li>Item 22</li>
          <li>Item 23</li>
          <li>Item 24</li>
          <li>Item 25</li>
          <li>Item 26</li>
          <li>Item 27</li>
          <li>Item 28</li>
          <li>Item 29</li>
          <li>Item 30</li>
          <li>Item 31</li>
          <li>Item 32</li>
          <li>Item 33</li>
          <li>Item 34</li>
          <li>Item 35</li>
          <li>Item 36</li>
          <li>Item 37</li>
          <li>Item 38</li>
          <li>Item 39</li>
          <li>Item 40</li>
          <li>Item 41</li>
          <li>Item 42</li>
          <li>Item 43</li>
          <li>Item 44</li>
          <li>Item 45</li>
          <li>Item 46</li>
          <li>Item 47</li>
          <li>Item 48</li>
          <li>Item 49</li>
          <li>Item 50</li>
          <li>Item 51</li>
          <li>Item 52</li>
          <li>Item 53</li>
          <li>Item 54</li>
          <li>Item 55</li>
          <li>Item 56</li>
          <li>Item 57</li>
          <li>Item 58</li>
          <li>Item 59</li>
          <li>Item 60</li>
          <li>Item 61</li>
          <li>Item 62</li>
          <li>Item 63</li>
          <li>Item 64</li>
          <li>Item 65</li>
          <li>Item 66</li>
          <li>Item 67</li>
          <li>Item 68</li>
          <li>Item 69</li>
          <li>Item 70</li>
          <li>Item 71</li>
          <li>Item 72</li>
          <li>Item 73</li>
          <li>Item 74</li>
          <li>Item 75</li>
          <li>Item 76</li>
          <li>Item 77</li>
          <li>Item 78</li>
          <li>Item 79</li>
          <li>Item 80</li>
          <li>Item 81</li>
          <li>Item 82</li>
          <li>Item 83</li>
          <li>Item 84</li>
          <li>Item 85</li>
          <li>Item 86</li>
          <li>Item 87</li>
          <li>Item 88</li>
          <li>Item 89</li>
          <li>Item 90</li>
          <li>Item 91</li>
          <li>Item 92</li>
          <li>Item 93</li>
          <li>Item 94</li>
          <li>Item 95</li>
          <li>Item 96</li>
          <li>Item 97</li>
          <li>Item 98</li>
          <li>Item 99</li>
          <li>Item 100</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

## Modal color

### Modal primary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-primary"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-primary"
  >
    Modal primary
  </button>
  <div id="modal-color-primary" class="modal fade modal-primary">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-primary"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-primary"
>
  Modal primary
</button>
<div id="modal-color-primary" class="modal fade modal-primary">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal secondary

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-secondary"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-secondary"
  >
    Modal secondary
  </button>
  <div id="modal-color-secondary" class="modal fade modal-secondary">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-secondary"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-secondary"
>
  Modal secondary
</button>
<div id="modal-color-secondary" class="modal fade modal-secondary">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal light

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-light"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-light"
  >
    Modal light
  </button>
  <div id="modal-color-light" class="modal fade modal-light">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-light"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-light"
>
  Modal light
</button>
<div id="modal-color-light" class="modal fade modal-light">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal dark

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-dark"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-dark"
  >
    Modal dark
  </button>
  <div id="modal-color-dark" class="modal fade modal-dark">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-dark"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-dark"
>
  Modal dark
</button>
<div id="modal-color-dark" class="modal fade modal-dark">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal red

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-red"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-red"
  >
    Modal red
  </button>
  <div id="modal-color-red" class="modal fade modal-red">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-red"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-red"
>
  Modal red
</button>
<div id="modal-color-red" class="modal fade modal-red">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal orange

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-orange"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-orange"
  >
    Modal orange
  </button>
  <div id="modal-color-orange" class="modal fade modal-orange">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-orange"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-orange"
>
  Modal orange
</button>
<div id="modal-color-orange" class="modal fade modal-orange">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal amber

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-amber"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-amber"
  >
    Modal amber
  </button>
  <div id="modal-color-amber" class="modal fade modal-amber">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-amber"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-amber"
>
  Modal amber
</button>
<div id="modal-color-amber" class="modal fade modal-amber">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal yellow

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-yellow"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-yellow"
  >
    Modal yellow
  </button>
  <div id="modal-color-yellow" class="modal fade modal-yellow">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-yellow"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-yellow"
>
  Modal yellow
</button>
<div id="modal-color-yellow" class="modal fade modal-yellow">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal lime

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-lime"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-lime"
  >
    Modal lime
  </button>
  <div id="modal-color-lime" class="modal fade modal-lime">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-lime"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-lime"
>
  Modal lime
</button>
<div id="modal-color-lime" class="modal fade modal-lime">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal green

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-green"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-green"
  >
    Modal green
  </button>
  <div id="modal-color-green" class="modal fade modal-green">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-green"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-green"
>
  Modal green
</button>
<div id="modal-color-green" class="modal fade modal-green">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal emerald

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-emerald"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-emerald"
  >
    Modal emerald
  </button>
  <div id="modal-color-emerald" class="modal fade modal-emerald">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-emerald"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-emerald"
>
  Modal emerald
</button>
<div id="modal-color-emerald" class="modal fade modal-emerald">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal teal

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-teal"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-teal"
  >
    Modal teal
  </button>
  <div id="modal-color-teal" class="modal fade modal-teal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-teal"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-teal"
>
  Modal teal
</button>
<div id="modal-color-teal" class="modal fade modal-teal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal cyan

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-cyan"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-cyan"
  >
    Modal cyan
  </button>
  <div id="modal-color-cyan" class="modal fade modal-cyan">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-cyan"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-cyan"
>
  Modal cyan
</button>
<div id="modal-color-cyan" class="modal fade modal-cyan">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal sky

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-sky"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-sky"
  >
    Modal sky
  </button>
  <div id="modal-color-sky" class="modal fade modal-sky">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-sky"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-sky"
>
  Modal sky
</button>
<div id="modal-color-sky" class="modal fade modal-sky">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal blue

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-blue"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-blue"
  >
    Modal blue
  </button>
  <div id="modal-color-blue" class="modal fade modal-blue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-blue"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-blue"
>
  Modal blue
</button>
<div id="modal-color-blue" class="modal fade modal-blue">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal indigo

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-indigo"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-indigo"
  >
    Modal indigo
  </button>
  <div id="modal-color-indigo" class="modal fade modal-indigo">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-indigo"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-indigo"
>
  Modal indigo
</button>
<div id="modal-color-indigo" class="modal fade modal-indigo">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal violet

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-violet"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-violet"
  >
    Modal violet
  </button>
  <div id="modal-color-violet" class="modal fade modal-violet">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-violet"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-violet"
>
  Modal violet
</button>
<div id="modal-color-violet" class="modal fade modal-violet">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal purple

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-purple"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-purple"
  >
    Modal purple
  </button>
  <div id="modal-color-purple" class="modal fade modal-purple">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-purple"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-purple"
>
  Modal purple
</button>
<div id="modal-color-purple" class="modal fade modal-purple">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal fuchsia

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-fuchsia"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-fuchsia"
  >
    Modal fuchsia
  </button>
  <div id="modal-color-fuchsia" class="modal fade modal-fuchsia">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-fuchsia"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-fuchsia"
>
  Modal fuchsia
</button>
<div id="modal-color-fuchsia" class="modal fade modal-fuchsia">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal pink

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-pink"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-pink"
  >
    Modal pink
  </button>
  <div id="modal-color-pink" class="modal fade modal-pink">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-pink"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-pink"
>
  Modal pink
</button>
<div id="modal-color-pink" class="modal fade modal-pink">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal rose

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-rose"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-rose"
  >
    Modal rose
  </button>
  <div id="modal-color-rose" class="modal fade modal-rose">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-rose"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-rose"
>
  Modal rose
</button>
<div id="modal-color-rose" class="modal fade modal-rose">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal slate

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-slate"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-slate"
  >
    Modal slate
  </button>
  <div id="modal-color-slate" class="modal fade modal-slate">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-slate"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-slate"
>
  Modal slate
</button>
<div id="modal-color-slate" class="modal fade modal-slate">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal gray

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-gray"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-gray"
  >
    Modal gray
  </button>
  <div id="modal-color-gray" class="modal fade modal-gray">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-gray"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-gray"
>
  Modal gray
</button>
<div id="modal-color-gray" class="modal fade modal-gray">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal zinc

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-zinc"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-zinc"
  >
    Modal zinc
  </button>
  <div id="modal-color-zinc" class="modal fade modal-zinc">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-zinc"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-zinc"
>
  Modal zinc
</button>
<div id="modal-color-zinc" class="modal fade modal-zinc">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal neutral

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-neutral"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-neutral"
  >
    Modal neutral
  </button>
  <div id="modal-color-neutral" class="modal fade modal-neutral">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-neutral"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-neutral"
>
  Modal neutral
</button>
<div id="modal-color-neutral" class="modal fade modal-neutral">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::

### Modal stone

::: tabs variant:code key:code
== Preview
<div class="preview-container">
  <button
    type="button"
    class="btn btn-stone"
    data-fg-toggle="modal"
    data-fg-target="#modal-color-stone"
  >
    Modal stone
  </button>
  <div id="modal-color-stone" class="modal fade modal-stone">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-fg-dismiss="modal">
            <i class="icon bi-x-lg"> </i>
          </button>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-fg-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <!-- Modal Content -->
    </div>
    <!-- Modal Dialog -->
  </div>
  <!-- Modal -->
</div>

== HTML

```html
<button
  type="button"
  class="btn btn-stone"
  data-fg-toggle="modal"
  data-fg-target="#modal-color-stone"
>
  Modal stone
</button>
<div id="modal-color-stone" class="modal fade modal-stone">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-fg-dismiss="modal">
          <i class="icon bi-x-lg"> </i>
        </button>
      </div>
      <div class="modal-body">Modal body</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-fg-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
    <!-- Modal Content -->
  </div>
  <!-- Modal Dialog -->
</div>
<!-- Modal -->
```

:::
