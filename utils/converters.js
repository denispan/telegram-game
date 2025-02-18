const farengToC = (farengate) => Math.round((farengate/10-32) / 1.8);

const barToMm = (bar) => Math.round((bar/1000)*750.064);

module.exports = {
    farengToC,
    barToMm
};
