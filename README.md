propsflow
==

Create sequence of plain object's enhancers, powered with [extraflow](https://github.com/morulus/extraflow).

Modifications:

- **Auto spread** objects;
- **Type restricted**.

```js
const enhancer = propsflow(
  () => ({ A, B, C }) => ({
    D: A + B + C,
  }),
  ({ A }) => ({
    B: A * 2,
  }),
  ({ B }) => ({
    C: B * 2
  }),
)

enhancer({
  A: 2
});
/*
{
  A: 2,
  B: 4,
  C: 8,
  D: 14
}
*/
```


License
--

MIT, 2018, Vladimir Morulus <vladimirmorulus@gmail.com>
