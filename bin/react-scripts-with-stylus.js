#!/usr/bin/env node

const path = require('path');
const spawn = require('cross-spawn');

const script = process.argv[2];
const input = path.join(process.cwd(), process.argv[3] || 'src');

// allow use of stylus plugins
function addStylusPlugins(args) {
  const plugins = process.argv[4].split(',');
  if(plugins && plugins.length){
    plugins.map(p =>
      args = args.concat(['--use', p])
    );
  }
  return args;
}

let args;

switch(script) {
  case 'start':
    const reactScripts = spawn('react-scripts', ['start'], {
      stdio: 'inherit'
    });

    args = ['--watch', '--include-css', input];

    if(process.argv[4]){
      args = addStylusPlugins(args);
    }

    const stylusWatch = spawn('stylus', args, {
      stdio: 'inherit'
    });

    break;

  case 'build':
    args = ['--include-css', input];

    if(process.argv[4]){
      args = addStylusPlugins(args);
    }

    spawn.sync('stylus', args, {
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
