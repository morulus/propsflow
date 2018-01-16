const propsflow = require('..')

describe('common', () => {
  it('Www', () => {
    const target = {
        A: 'World'
    };
    const enhancer = propsflow(
      () => () => ({ A, B, C }) => ({
        summary: `${A} ${B} ${C}`
      }),
      () => ({ A }) => ({
        C: 'Web'
      }),
      () => ({
        B: 'Wide'
      }),
    )

    expect(enhancer(target)).toMatchObject({
      A: 'World',
      B: 'Wide',
      C: 'Web',
      summary: 'World Wide Web'
    });
  });

  it('Example', () => {
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

    expect(enhancer({
      A: 2
    })).toMatchObject({
      A: 2,
      B: 4,
      C: 8,
      D: 14
    });
  });

  it('Proxy next if equals (mutable)', () => {
    const target = {
      a: 123,
    }

    const enhancer = propsflow(
      (target) => {
        target.b = 456;
        return target;
      }
    )

    expect(enhancer(target)).toBe(target);
  });
})
