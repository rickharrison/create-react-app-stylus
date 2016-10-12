#!/usr/bin/env node

const path = require('path');
const spawn = require('cross-spawn');

const script = process.argv[2];
const input = path.join(process.cwd(), process.argv[3] || 'src');

switch(script) {
  case 'start':
    const reactScripts = spawn('react-scripts', ['start'], {
      stdio: 'inherit'
    });

    const stylusWatch = spawn('stylus', ['--watch', '--include-css', input], {
      stdio: 'inherit'
    });

    break;

  case 'build':
    spawn.sync('stylus', ['--include-css', input], {
      stdio: 'inherit'
    });

    spawn.sync('react-scripts', ['build'], {
      stdio: 'inherit'
    });

    break;

  default:
    console.log('Unknown script: ' + script);
    console.log('Perhaps you meant to run `react-scripts` or `react-scripts-with-stylus start`');
    break;
}
