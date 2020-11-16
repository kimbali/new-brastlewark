
import { storageDataKey } from './config'

export const setStorageJSON = (key, data) => {
    return sessionStorage.setItem(key, JSON.stringify(data) );
}

export const getStorageJSON = (key) => {
    console.log(key)
    return JSON.parse(sessionStorage.getItem(key));
}

export const setStorageValue = (key, data) => {
    return sessionStorage.setItem(key, data);
}

export const getStorageValue = (key) => {
    return sessionStorage.getItem(key);
}

export const findGnomeByID = (gnomeID = null, gnomesData) => {
    if(!gnomesData) return null;
    const gnome = gnomesData.find(item => item.id === gnomeID);
    return gnome;
}

export const createCouncilOfWisdomList = (gnomesData) => {
    if(!gnomesData) return [];
    const eldersFirst = gnomesData.sort((a, b) => b.age - a.age);
    const councilOfWisdom = eldersFirst.slice(0, 10);
    return councilOfWisdom;
}

export const createWarriorsList =  (gnomesData) => {
    if(!gnomesData) return [];
    const strongestAndTallest = gnomesData.filter(gnome => gnome.height > 85 && gnome.weight > 40 && gnome.age < 50);
    return strongestAndTallest;
}

export const createTradesList = (gnomesData) => {
    if(!gnomesData) return [];
    let professions = [];
    gnomesData.forEach(gnome => {
        professions = professions.concat(gnome.professions);
    });

    const gnomeTrades = [...new Set(professions)].map(trade => trade.trim());
    return gnomeTrades.sort();
}

export const createTradesMembersList = (trade, gnomesData) => {
    if(!gnomesData) return [];
    let matchedWorkers = []
    gnomesData.forEach(gnome => {
        return gnome.professions.map(currentProfession => {
            if (currentProfession.trim() === trade) {
                return matchedWorkers.push(gnome)
            }
        })
    })
    return matchedWorkers;
}