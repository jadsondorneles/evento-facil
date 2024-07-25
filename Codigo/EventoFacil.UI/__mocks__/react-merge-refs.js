const mergeRefs = jest.fn().mockImplementation((refs) => (node) => {
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref != null) {
      ref.current = node
    }
  })
})

module.exports = {
  mergeRefs,
}
