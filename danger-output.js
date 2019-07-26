import { schedule, danger, fail, warn, message, markdown } from "danger";
var command = 'cat ios/sdk/oclint.log | grep -i "P[1|2]"'
import shell from "shelljs";
var output = shell.exec(command).output;
warn(output);
