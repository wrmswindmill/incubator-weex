import { fail, warn } from 'danger'

const shell = require('shelljs')
const command = process.env.COMMAND
const child = shell.exec(command)

if (child.stderr !== '') {
  warn(child.stdout)
}
if (child.stderr !== '') {
  fail(child.stderr)
}
