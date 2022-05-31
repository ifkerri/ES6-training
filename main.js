
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(item => {
    return item.length > 0;
}).map(item => {
    return item.toLowerCase().trim();
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO'],
    calcCash: function (own = 0) {
        //console.log(this);
        return sponsors.cash.reduce((acc, current) => {
            return acc + current;
        }, own);    
    }
};

const {cash, eu, eu: [hugeRisk], rus, calcCash} = sponsors;
const money = calcCash();

function makeBusiness(owner, cash, emp, director = 'Victor') {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${hugeRisk}. It's a huge risk.`);
}
makeBusiness(...['Sam', money, employersNames]);