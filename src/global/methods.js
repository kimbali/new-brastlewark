
import { storageDataKey } from './config'

export const setStorageJSON = (key, data) => {
    return sessionStorage.setItem(key, JSON.stringify(data) );
}

export const getStorageJSON = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

export const setStorageValue = (key, data) => {
    return sessionStorage.setItem(key, data);
}

export const getStorageValue = (key) => {
    return sessionStorage.getItem(key);
}

const storageList = getStorageJSON(storageDataKey);

export const findGnomeInStorage = (gnomeID = null) => {
    if(!storageList) return null;
    const gnome = storageList.find(item => item.id === gnomeID);
    return gnome;
}

export const createCouncilOfWisdomList = () => {
    if(!storageList) return [];
    const eldersFirst = storageList.sort((a, b) => b.age - a.age);
    const councilOfWisdom = eldersFirst.slice(0, 10);
    return councilOfWisdom;
}

export const createWarriorsList =  () => {
    if(!storageList) return [];
    const strongestAndTallest = storageList.filter(gnome => gnome.height > 85 && gnome.weight > 40 && gnome.age < 50);
    return strongestAndTallest;
}

export const createTradesList = () => {
    if(!storageList) return [];
    let professions = [];
    storageList.forEach(gnome => {
        professions = professions.concat(gnome.professions);
    });

    const gnomeTrades = [...new Set(professions)].map(trade => trade.trim());
    return gnomeTrades.sort();
}

export const createTradesMembersList = (trade) => {
    if(!storageList) return [];
    let matchedWorkers = []
    storageList.forEach(gnome => {
        return gnome.professions.map(currentProfession => {
            if (currentProfession.trim() === trade) {
                return matchedWorkers.push(gnome)
            }
        })
    })
    return matchedWorkers;
}