import patientServices from '../services/patientServices';

let postBookAppointment = async (req, res) => {
    try {
        let info = await patientServices.postBookAppointment(req.body);
        return res.status(200).json(info);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server',
        });
    }
};
let postVerifyAppointment = async (req, res) => {
    try {
        let info = await patientServices.postVerifyAppointment(req.body);
        return res.status(200).json(info);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server',
        });
    }
};
module.exports = {
    postBookAppointment: postBookAppointment,
    postVerifyAppointment: postVerifyAppointment,
};
