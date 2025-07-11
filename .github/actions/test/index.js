import * as github from '@actions/github';
import * as core from '@actions/core';
import { getChangedFile } from './src/git/git.js';

const context = github.context;

async function run(context){
    if(context.eventName === 'pull_request'){
        const changedFiles = await getChangedFile(context);
        core.info('\u001b[48;5;6mSuccess');
        core.startGroup('click to see the changed files');
        console.log(changedFiles);
        core.endGroup();
        
    }
    else {
        core.error('To use Loki OdinSnap please use trigger events like pull request or push');
    }
}
run(context);
core.startGroup('click to see context');
console.log(context);
core.endGroup();

