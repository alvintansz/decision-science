# Frontend

# How to run it

run following command:

```
  npm install

  npm run dev
```

open browser: http://localhost:3000

# SCSS

responsive mixin
example:

```
  p {
    font-size: em(16px);
    light-hight: em(24, 30)
    @include max-sm() {
      font-size: em(16px);
    }

    @media(max-width: 400px) {
      font-size: em(12);
    }
  }
```

variable mixin em
example:

```
p {
  font-size: em(16px);
  light-hight: em(24, 30)
}
```
