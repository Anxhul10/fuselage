import { getPackageDependentsTree } from './getPackageDependentsTree.js';
import { getReasons } from './getReasons.js';
import { getComponentTitle } from './getComponentTitle.js';

export const traverseDependencyTree = (tree, parent = null, result = {}) => {
  for (const [key, value] of Object.entries(tree)) {
    if (parent) {
      if (!result[parent]) {
        result[parent] = [];
      }
      result[parent].push(key);
    }
    if (value && typeof value === 'object') {
      traverseDependencyTree(value, key, result);
    }
  }
  return result;
};

const dependencyTree = {['fuselage']: getPackageDependentsTree('fuselage')};
const result = traverseDependencyTree(dependencyTree);

for(const pkgName in result) {
    for(const subPkg of result[pkgName]) {
        if(subPkg === 'fuselage'|| subPkg === 'onboarding-ui'|| subPkg === 'fuselage-toastbar' || subPkg === 'layout') {
            const MyStories = await getReasons(pkgName, `../dist/trimmed-${subPkg}-stats.json`);
            const result = await getComponentTitle(MyStories, subPkg);
            console.log({[subPkg]: result});
        }
    }
    console.log("end");
}
