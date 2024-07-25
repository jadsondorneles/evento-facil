const MUI_ID_REGEXP = /mui-p-\d+-[A-Z]-\d+/g

const replaceMUIIds = (html) => {
  return html.replace(MUI_ID_REGEXP, 'mui-fixed-id')
}

const serialize = (val, config, indentation, depth, refs, printer) => {
  const replacedHtml = replaceMUIIds(val)
  return replacedHtml // Retorna diretamente o HTML substituído como uma string.
}

const cleanMUISerializer = {
  test: (val) => typeof val === 'string' && MUI_ID_REGEXP.test(val),
  serialize,
}

module.exports = cleanMUISerializer
