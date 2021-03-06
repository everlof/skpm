#!/usr/bin/env node
var program = require('commander')
var auth = require('./auth')
var chalk = require('chalk')

program
  .usage('[options]')
  .parse(process.argv)

console.log(chalk.dim('[1/1]') + ' 🗑  Deleting github token...')
try {
  auth.deleteToken()
  console.log(chalk.green('success') + ' Token deleted')
  process.exit(0)
} catch (err) {
  console.error(chalk.red('error') + ' Error while deleting token')
  console.error(err)
  process.exit(1)
}
