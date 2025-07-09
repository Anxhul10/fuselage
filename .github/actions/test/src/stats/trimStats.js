import { readStatsFile } from './readStatsFile.js';
import { writeFile } from 'fs';

const isUserCode = (module) => {
    if(!module.name) return false;
    const isWebpackInternal = module.name.startsWith('(webpack)')
    const isNodeModuleRuntime = module.name.includes('node_modules') || module.name.includes('webpack/runtime/');

    return !isWebpackInternal && !isNodeModuleRuntime;
}
/*
{
    name: 'a'
    id: 1,
    uneccasary: 2,
    reasons:[
        {
            "moduleName":hii
        }
    ]
}
*/
// keep only name, id , and reasons
// keep only moduleName and moduleId from reasons
export const trimStatsFile = async (filePath) => {
    const getStats = await readStatsFile(filePath);
    const trimmedStats = getStats.modules
    .filter(module => isUserCode(module))
    .map(value => {
        return ['name', 'id','reasons'].reduce((result, key) => {
            result[key] = value[key];
            return result; 
        }, {});
    })
    await writeFile("stats.json",JSON.stringify({"modules":trimmedStats},null,4),(err) => {
        if(err) return console.log(err);
        console.log('file created successfully...');
    });
}

trimStatsFile('../../dump/compilation-stats_1.json');
