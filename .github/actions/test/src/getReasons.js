import { readStatsFile } from './stats/readStatsFile.js';
import { getComponentTitle } from './getComponentTitle.js';

const seenModules = new Set();
// usage
// changedfile = Button.tsx
// const result = await getChangedStories(changedFile, '../dist/trimmed-fuselage-stats.json');
export const getReasons = async (name, statsPath) => {
  const stats = await readStatsFile(statsPath);
  const affectedStories = new Set();

  const walk = (file) => {
    if (seenModules.has(file)) return;
    seenModules.add(file);

    for (const module of stats.modules) {
      if (!module.name) continue;

      if (module.name.includes(file)) {
        if (module.name.includes('.stories')) {
          affectedStories.add(module.name);
        }

        if (module.reasons) {
          for (const reason of module.reasons) {
            if (reason.moduleName) {
              walk(reason.moduleName);
            }
          }
        }
      }
    }
  };

  if (name.includes('.stories')) {
    affectedStories.add(name);
  } else {
    walk(name);
  }

  return [...affectedStories];
};
const changedFile = 'css-supports';
const pkgName = 'fuselage';
const result = await getReasons(changedFile, `../dist/trimmed-${pkgName}-stats.json`);
const cmp = await getComponentTitle(result, pkgName);
console.log(cmp);