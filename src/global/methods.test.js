import { findGnomeByID, createCouncilOfWisdomList, createWarriorsList, createTradesList } from './methods'
import { Brastlewark } from '../mok.json';

test('Find a gnome by ID', () => {
    const gnomeFound = findGnomeByID(0, Brastlewark);
   
    const gnome = {"id":0,"name":"Tobus Quickwhistle","thumbnail":"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg","age":306,"weight":39.065952,"height":107.75835,"hair_color":"Pink","professions":["Metalworker","Woodcarver","Stonecarver"," Tinker","Tailor","Potter"],"friends":["Cogwitz Chillwidget","Tinadette Chillbuster"]}
   
    expect(gnomeFound).toMatchObject(gnome)
})

test('Return the elder gnomes in town', () => {
    const gnomesFound = createCouncilOfWisdomList(Brastlewark);

    expect(gnomesFound).toHaveLength(10);
    expect(gnomesFound[0]).toHaveProperty('age', 379);
})

test('Return warriors of town', () => {
    const gnomesFound = createWarriorsList(Brastlewark);

    expect(gnomesFound[0].height).toBeGreaterThan(85);
    expect(gnomesFound[0].weight).toBeGreaterThan(40);
    expect(gnomesFound[0].age).toBeLessThan(50);
})

test('Create trades list sorted aphabeticaly', () => {
    const tradesList = createTradesList(Brastlewark);

    expect(tradesList).toContain('Baker');
    expect(tradesList[0]).toEqual('Baker');
    expect(tradesList[tradesList.length - 1]).toEqual('Woodcarver');
})

