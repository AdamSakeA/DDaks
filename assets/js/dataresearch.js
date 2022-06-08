const { DoubleArrow } = require("@mui/icons-material");

var data =[
    [2020,'r2','ANALYSIS OF MACROECONOMIC EFFECTS ON THE YIELD OF CORPORATE BONDS IN INDONESIA','Anastasia Sianturi, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Analysis%20of%20Macroeconomic%20Effect%20on%20The%20Yield%20of%20Corporate%20Bonds%20in%20Indonesia.pdf'],
    [2019,'r2','DETERMINANT OF GOVERNMENT BOND YIELDS','Priyo Adiwibowo, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Determinant%20of%20Government%20Bond%20Yields.pdf'],
    [2019,'r3','OPTIMAL PORTFOLIO ANALYSIS OF IDX-30 AND LQ-45 PORTFOLIO WITH THE CAPM METHOD OF THE INDONESIA STOCK EXCHANGE','Nur Sarva Jayana, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Optimal%20Portfolio%20Analysis%20of%20IDX-30%20and%20Lq-45%20With%20The%20CAPM%20Method%20of%20The%20Indonesia%20Stock%20Exchange.pdf'],
    [2020,'r4','THE EFFECT OF STOCK SPLIT ANNOUNCEMENT ON THE TRADING VOLUME ACTIVITY, ABNORMAL RETURN, AND BID ASK SPREAD (STUDY ON COMPANIES LISTED ON THE IDX FOR THE PERIOD OF 2015 - 2019)','Rimada Diamanta Putri, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/the-effect-of-stock-split-announcement-on-the-trading-volume-activity-abnormal-return-and-bid-ask-spread-study-on-companies-listed-on-the-idx-for-the-period-of-2015-2019.pdf'],
    [2020,'r5','The determinants of idiosyncratic volatility in Indonesia banking industries','Amrie Firmansyah, Pardomuan Sihombing, Sri Yani Kusumastuti','https://daksanaya.id/storage/app/media/The%20Determinants%20of%20Idiosyncratic%20Volatility%20in%20Indonesia%20Banking%20Industries.pdf'],
    [2020,'r6','DETERMINANT ANALYSIS IN PROPERTY STOCKS INDEX AT INDONESIA STOCK EXCHANGE','Alfan Samsuar, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Determinant%20Analysis%20in%20Property%20Stocks%20Index%20at%20Indonesia%20Stock%20Exchange.pdf'],
    [2020,'r6','DETERMINANT ANALYSIS OF FINANCIAL RATIO ON STOCK RETURNS IN CONSTRUCTION COMPANIES REGISTERED AT INDONESIA STOCK EXCHANGE 2015-2019','Muhammad Reza Alfianto Siregar, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Determinant%20Analysis%20of%20Financial%20Ratio%20on%20Stock%20Returns%20in%20Construction%20Companies%20Registered%20at%20Indonesia%20Stock%20Exchange%202015-2019.pdf'],
    [2020,'r7','Financial Distress Analysis of Registered Insurance Companies in Indonesia Stock Exchange 2015-2019','Harjadi, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Financial%20Distress%20Analysis%20of%20Registered%20Insurance%20Companies%20in%20Indonesia%20Stock%20Exchange%202015-2019.pdf'],
    [2021,'r7','Comparative Analysis of Bankruption Prediction Models in Property and Real Estate Sector Companies Listed on the IDX 2017-2019','Fika Andriani, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Comparative%20Analysis%20of%20Bankruption%20Prediction%20Models%20in%20Property%20and%20Real%20Estate%20Sector%20Companies%20Listed%20on%20the%20IDX%202017-2019.pdf'],
    [2020,'r8','The Effect of Good Corporate Governance (GCG) Mechanism on Earnings Management Practices of The Stubben Model (Study Case on Mining Sector Companies Listed on The Indonesia Stock Exchange 2014-2019)','Muhammad Fairus, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/the-effect-of-good-corporate-governance-gcg-mechanism-on-earnings-management-practices-of-the-stubben-model-study-case-on-mining-sector-companies-listed-onthe-indonesia-stock-exchange-2014-2019.pdf'],
    [2017,'r9','Determinants Factor Analysys of Underpricing on Initial Public Offering','Ardhiani Fadila, Muhammad Zilal Hamzah, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Determinants%20Factor%20Analysys%20of%20Underpricing%20on%20Initial%20Public%20Offering.pdf'],
    [2014,'r6','PENGARUH INDEKS SAHAM GLOBAL DAN KONDISI MAKRO INDONESIA TERHADAP INDEKS HARGA SAHAM GABUNGAN BURSA EFEK INDONESIA','Pardomuan Sihombing, Rizal','https://daksanaya.id/storage/app/media/pengaruh-indeks-saham-global-dan-kondisi-makro-indonesia-terhadap-indeks-harga-saham-gabungan-bursa-efek-indonesia.pdf'],
    [2017,'r2','PENGARUH FAKTOR MAKROEKONOMI DAN LIKUIDITAS TERHADAP YIELD CURVE OBLIGASI  PEMERINTAH INDONESIA','Pardomuan Sihombing, Hary Saputra Sundoro','https://daksanaya.id/storage/app/media/pengaruh-faktor-makroekonomi-dan-likuiditas-terhadap-yield-curve-obligasi-pemerintah-indonesia.pdf'],
    [2015,'r2','FACTORS AFFECTING THE YELD CURVE FLUCTUATION OF INDONESIA GOVERNMENT BOND','Perdana Wahyu Santosa, Pardomuan Sihombing','https://daksanaya.id/storage/app/media/Factors%20Affecting%20the%20Yield%20Curve%20Fluctuation%20of%20Indonesia%20Government%20Bond.pdf'],
    [2014,'r2','DETERMINANTS OF THE INDONESIA GOVERNMENT YIELD CURVE','Pardomuan Sihombing, Hermanto Siregar, Adler H. Manurung, Perdana W. Santosa','https://daksanaya.id/storage/app/media/Determinants%20of%20The%20Indonesia%20Government%20Yield%20Curve.pdf'],
    [2013,'r2','DETERMINAN YIELD CURVE SURAT UTANG NEGARA','Pardomuan Sihombing, Hermanto Siregar, Adler H. Manurung, Perdana W. Santosa','https://daksanaya.id/storage/app/media/Determinan%20Yield%20Curve%20Surat%20Utang%20Negara.pdf']
    ];
    var id = ['r1','r2','r3','r4','r5','r6','r7','r8','r9'];

const dataResearch = [{
    judul1: "ANALYSIS OF MACROECONOMIC EFFECTS ON THE YIELD OF CORPORATE BONDS IN INDONESIA",
    penulis: "Anastasia Sianturi, Pardomuan Sihombing",
    link: "https://daksanaya.id/storage/app/media/Analysis%20of%20Macroeconomic%20Effect%20on%20The%20Yield%20of%20Corporate%20Bonds%20in%20Indonesia.pdf",
    id: "bond"
}, {
    judul: "DETERMINANT OF GOVERNMENT BOND YIELDS",
    penulis: "Priyo Adiwibowo, Pardomuan Sihombing",
    link: "https://daksanaya.id/storage/app/media/Determinant%20of%20Government%20Bond%20Yields.pdf",
    id: "bond"
}, {
    judul: "PENGARUH FAKTOR MAKROEKONOMI DAN LIKUIDITAS TERHADAP YIELD CURVE OBLIGASI  PEMERINTAH INDONESIA",
    penulis: "Pardomuan Sihombing, Hary Saputra Sundoro",
    link: "https://daksanaya.id/storage/app/media/pengaruh-faktor-makroekonomi-dan-likuiditas-terhadap-yield-curve-obligasi-pemerintah-indonesia.pdf",
    id: "bond"
}, {
    judul: "FACTORS AFFECTING THE YELD CURVE FLUCTUATION OF INDONESIA GOVERNMENT BOND",
    penulis: "Perdana Wahyu Santosa, Pardomuan Sihombing",
    link: "https://daksanaya.id/storage/app/media/Factors%20Affecting%20the%20Yield%20Curve%20Fluctuation%20of%20Indonesia%20Government%20Bond.pdf",
    id: "bond"
}]
dataResearch.forEach()

const penulisFilter = document.querySelector('.penulis.filter');
const linkFilter = document.querySelector('.link-filter');

const btn = document.querySelector('.active');
btn.addEventListener('click', function() {
    dataResearch.forEach((showData) => {
        const judulResearch = showData.judul1;
        const judulFilter = document.querySelector('.title-filter');
        console.log(`${judulResearch}`);
    }) 
})



filterSelection = () => {
    console.log()
}