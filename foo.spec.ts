
function identity(x: number): number {
    return x
}

it('foo', async () => {
    expect(identity(42)).toBe(42)
})