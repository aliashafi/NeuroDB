// var MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
var seeder = require('mongoose-seed');
const db = require("./config/keys").mongoURI;

const studyOptions = [
    "pain",
    "depression",
    "speech-language"
]

const EpilepsyOptions = [
    "temporal",
    "benign rolandic",
    "frontal",
    "parietal",
    "occipital",
    "neocortical",
    "interminate"
]

const medicaionOptions = [
    {medicationName: "tegretol", medicationPurpose: "epilepsy"},
    {medicationName: "diamox", medicationPurpose: "epilepsy"},
    {medicationName: "keppra", medicationPurpose: "epilepsy"},
    {medicationName: "trileptal", medicationPurpose: "epilepsy"},
    { medicationName: "banzel", medicationPurpose: "depression"},
    { medicationName: "banzel", medicationPurpose: "depression"},
    { medicationName: "bupropion", medicationPurpose: "depression"},
]

const brainRegions =
    ["Temporal lobe medial aspect",
        "Entorhinal cortex",
        "Parahippocampal gyrus",
        "Amygdala",
        "Hippocampus",
        "Insula",
        "Orbital Frontal Cortex",
        "Temporal pole",
        "Fusiform gyrus",
        "Temporal lobe",
        "Superior temporal gyrus",
        "Middle temporal gyrus",
        "Inferior temporal gyrus",
        "Transverse temporal gyrus",
        "superior temporal sulcus",
        "Frontal lobe",
        "Superior frontal",
        "Middle frontal gyrus",
        "Inferior frontal gyrus",
        "Pars opercularis",
        "Pars triangularis",
        "Pars orbitalis",
        "Orbitofrontal gyrus",
        "Lateral division",
        "Medial division",
        "Frontal pole",
        "Precentral gyrus",
        "Paracentral lobule",
        "Parietal lobe",
        "Postcentral gyrus",
        "Supramarginal gyrus",
        "Superior parietal lobule",
        "Inferior parietal lobule",
        "Precuneus",
        "Occipital lobe",
        "Lingual gyrus",
        "Pericalcarine cortex",
        "Cuneus cortex",
        "Lateral occipital cortex",
        "Cingulate cortex",
        "Rostral anterior",
        "Caudal anterior",
        "Posterior",
        "Isthmus"
]

//get random int
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//get random date 
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//grab random regions
function grabRandomRegions(){
    let regions = [];
    for (let i = 0; i < 7; i++) {
        let idx = getRandomInt(brainRegions.length - 1)
        regions.push(brainRegions[idx])
    }
    return regions;
}

//generate random montage off off regions specified
const generateMontage = (regions,len = [10,4,10,64,8,6,4]) => {
    let montage = []
    let x = 0
    regions.forEach(region => { 
        for (let i = 1; i <= len[x]; i ++){
            let electrode = {
                electrodeNum: i,
                electrodID: `${region}${i}`,
                electrodeRegion: region
            }
            montage.push(electrode)
        }
        x ++
    })
    return montage;
}

const getRandomStudies = () => {
    let amt = getRandomInt(3)
    return studyOptions.slice(amt);
}

const getRandomLanguage = ()=>{
    let languages = ["English", "Spanish", "Mandarin"]
    let idx = getRandomInt(3)
    return languages[idx];
}

const getRandomOption = (options) =>{
    let idx = getRandomInt(2);
    return options[idx]
}

const getRandomEpilepsyDiagnosis = () => {
    let idx = getRandomInt(EpilepsyOptions.length);
    return EpilepsyOptions[idx]
}

const getRandomMedications = () => {
    let idx = getRandomInt(medicaionOptions.length);
    return medicaionOptions[idx]
}

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const generateData = () => {

    let documents = []

    for (let i = 0; i < 100; i++) {
        let regions = grabRandomRegions();
        let montage = generateMontage(regions);
        let birthDate = randomDate(new Date("9/13/60"), new Date("9/18/2000"));
        let age = calculateAge(birthDate)
        let year = birthDate.getFullYear();
        let month = birthDate.getMonth();
        let day = birthDate.getDate();
        let dateOfSurgery = randomDate(new Date(year + 20, month, day), new Date(Date.now()));
        let gender = getRandomOption(["M", "F"]);
        let languageDominance = getRandomOption(["L", "R"]);
        let dominantHand = getRandomOption(["L", "R"]);
        let nativeLanguage = getRandomLanguage();
        let BDI = getRandomInt(40);
        let BAI = getRandomInt(40);
        let epilepsyDiagnosis = getRandomEpilepsyDiagnosis();
        let medications = [getRandomMedications(), getRandomMedications(), getRandomMedications()];
        let studies = getRandomStudies();

        let researchId = "EC"
        if (i < 10){
            researchId += `0${i}`
        }else{
            researchId += `${i}`
        }

        let patient = { researchId: researchId,
                dateOfSurgery: dateOfSurgery,
                consent: getRandomOption([true, false]),
                studies: studies,

                demographics:
                { birthDate: birthDate,
                    age: age,
                    gender: gender,
                    languageDominance: languageDominance,
                    dominantHand: dominantHand,
                    nativeLanguage: nativeLanguage},
                medication: medications,
                medicalHistory:
                { BDI: BDI,
                    BAI: BAI,
                    epilepsyDiagnosis: epilepsyDiagnosis,
                    previousResection: getRandomOption([true, false]),
                    neuroPace: getRandomOption([true, false]) },
                    imaging: {
                        electrodeMontage: montage
                    },
                    relatedRecords: [],
                }
        documents.push(patient)
    }
    let randomData = [{
        'model': 'Patient',
        documents: documents
    }]

    return randomData
}

let data = generateData()

seeder.connect('mongodb+srv://ernestman:H2o41mg!@neurodb-2o2dv.mongodb.net/test?retryWrites=true&w=majority', function () {
    seeder.loadModels([
        './models/Patient.js',
    ]);

    seeder.clearModels(['Patient'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});

// console.log(db)
// db.patients.insertOne(test)