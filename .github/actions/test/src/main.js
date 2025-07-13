import { getPackageDependentsTree } from './getPackageDependentsTree.js';
import { getDirectDependencies } from './getDirectDependencies.js';
import { readStatsFile } from './stats/readStatsFile.js';
import { getReasons } from './getReasons.js';
import { getComponentTitle } from './getComponentTitle.js';

// test
const changedFiles = [
    'packages/fuselage/src/components/Button/Button.tsx',
    // 'packages/fuselage/src/components/Box/Box.tsx',
    // 'packages/fuselage-toastbar/src/ToastBar.stories.tsx',
    // 'packages/css-in-js/index.ts',
    // 'packages/onboarding-ui/src/common/AgreeTermsField.tsx',
    // 'packages/layout/src/components/ActionLink/ActionLink.tsx',
    // 'packages/layout/src/contexts/LayoutContext.ts'
]
//
const mapPackagesToFilePath = (changedFiles) => {
    const packageToFileMap = {};
    for(const filePath of changedFiles) {
        try {
            const match = filePath.match(/^packages\/([^/]+)/);
            const packageName = match[1];
            if(match){
                if(!packageToFileMap[packageName]) {
                    packageToFileMap[packageName] = [];
                }
            packageToFileMap[packageName].push(filePath);
        } 
        } catch(error) {
            console.log('Ensure file path contains packages ');
            console.log(error.message);
        }
    }
    return packageToFileMap;
}

async function getIndirectDeps(currentPkg, parentPkg) {
    try {
        const stats = await readStatsFile(`../dist/trimmed-${currentPkg}-stats.json`);
        for(const module of stats.modules) {
            if( module.name.split('/')[1] === parentPkg) {
                // means get the reason section
                const reasons = await getReasons(module.name,`../dist/trimmed-${currentPkg}-stats.json`);
                const title = await getComponentTitle(reasons, currentPkg);
                console.log(module.name);
                console.log(reasons);
                console.log(title);
                // console.log('parentPkg:'+parentPkg);
                // console.log('childPkg:'+currentPkg);
            }
        }
    } catch(error) {
        console.log(error.message);
        console.log('getIndirectDeps error something went wrong')
    }
}


// this function will return me the set of component-title along with associated packges
// eg - 
// {
//  package1: Set(2) { 'foo', 'bar' },
//  package2: Set(2) { 'another', 'package' }
// }
async function mapToPackageSet(changedFiles, pkgName) {
    const dependencyTree = {[pkgName]: getPackageDependentsTree(pkgName)};
    // const getIndirectCmp = traverseDependencyTree(dependencyTree);
    /*
    {
        'childPackage1: Set(2){'componet1', 'component2'}
        'childPackage2: Setc(3){'c1','c2','c3'}
    }
    */
   // changeFiles: array of strings
   // pkgName: string
    const getDirectCmp = await getDirectDependencies(changedFiles, pkgName);
    // console.log(getDirectCmp);
    console.log('********************')
}

export const runner = async ()=> {
    const map = mapPackagesToFilePath(changedFiles);
    const ovrerallAffectedComponents = {};
    for(const pkgName in map) {
        const getMapToPackageSet = await mapToPackageSet(map[pkgName], pkgName);
    }
}
runner(changedFiles);

/*
    const overallAffectedComponents = {};
    const getPackagetoFilePathMap = mapPackagesToFilePath(changedFiles);
    const package1 = new Set();
    package1.add('foo');
    package1.add('bar');
    package1.add('foo');
    const package2 = new Set();
    package2.add('another');
    package2.add('package');
    overallAffectedComponents['package1'] = package1;
    overallAffectedComponents['package2'] = package2;
    for(const property in overallAffectedComponents) {
        for(const value of overallAffectedComponents[property]) {
            console.log(property+":"+value);
        }
    }
*/