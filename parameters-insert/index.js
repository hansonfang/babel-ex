const fs = require('fs')
const path = require('path')
const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default

const code = fs.readFileSync(path.join(__dirname, 'source.js'), 'utf8')

const ast = parse(code, {
  sourceType: 'module',
})

traverse(ast, {
	CallExpression(path){
		console.log(path);
	} 
})