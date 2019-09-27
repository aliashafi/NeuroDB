const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateElectrodeData(data) {

    let valid = true;

    let errors = {};
    data.forEach(electrode => {
        debugger
        
        /// all valid brain regions
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
            
        electrode.electrodeRegion = validText(electrode.electrodeRegion) ? electrode.electrodeRegion : "";
        electrode.electrodeID = validText(electrode.electrodeID) ? electrode.electrodeID : "";
        if (Validator.isEmpty(electrode.electrodeRegion)) {
            errors.electrodeRegionMissing = "Electrode region is required";
        }
        if (Validator.isEmpty(electrode.electrodID)) {
            errors.electrodeID = "Electrode ID is required";
        }
        // if the electrode is not in electrodeRegion
        if (!Validator.isIn(electrode.electrodeRegion, brainRegions)) {
            errors.electrodeRegionInvalid = "Electrode Region must be a valid brain region";
            valid = false;
        }

        
    })
    
    return {
        errors,
        isValid: valid
    };
    
};