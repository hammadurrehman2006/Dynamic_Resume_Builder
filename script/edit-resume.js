"use strict";

// Get the current page URL
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navigation a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"; // Add active class to the current link
  }
}
var _a;
function loadStoredData() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
    const storedData = JSON.parse(localStorage.getItem('resumeData') || '{}');
    if (!storedData) {
        alert('No resume data found. Please create a resume first.');
        return;
    }
    console.log(storedData);
    document.getElementById('firstName').value = storedData.aboutMe.firstName || '';
    document.getElementById('lastName').value = storedData.aboutMe.lastName || '';
    document.getElementById('designation').value = storedData.aboutMe.designation || '';
    document.getElementById('yourself').value = storedData.aboutMe.yourself || '';
    document.getElementById('phoneNumber').value = storedData.contactInfo.phoneNumber || '';
    document.getElementById('email').value = storedData.contactInfo.email || '';
    document.getElementById('linkedin').value = storedData.contactInfo.linkedin || '';
    document.getElementById('address').value = storedData.contactInfo.address || '';
    // Education
    document.getElementById('edu-year-1').value = ((_b = (_a = storedData.education) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.year) || '';
    document.getElementById('edu-degree-1').value = ((_d = (_c = storedData.education) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.degree) || '';
    document.getElementById('edu-institute-1').value = ((_f = (_e = storedData.education) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.institute) || '';
    document.getElementById('edu-year-2').value = ((_h = (_g = storedData.education) === null || _g === void 0 ? void 0 : _g[1]) === null || _h === void 0 ? void 0 : _h.year) || '';
    document.getElementById('edu-degree-2').value = ((_k = (_j = storedData.education) === null || _j === void 0 ? void 0 : _j[1]) === null || _k === void 0 ? void 0 : _k.degree) || '';
    document.getElementById('edu-institute-2').value = ((_m = (_l = storedData.education) === null || _l === void 0 ? void 0 : _l[1]) === null || _m === void 0 ? void 0 : _m.institute) || '';
    // Languages
    document.getElementById('language-1').value = ((_p = (_o = storedData.languages) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.language) || '';
    document.getElementById('proficiency-1').value = ((_r = (_q = storedData.languages) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.proficiency) || '';
    document.getElementById('language-2').value = ((_t = (_s = storedData.languages) === null || _s === void 0 ? void 0 : _s[1]) === null || _t === void 0 ? void 0 : _t.language) || '';
    document.getElementById('proficiency-2').value = ((_v = (_u = storedData.languages) === null || _u === void 0 ? void 0 : _u[1]) === null || _v === void 0 ? void 0 : _v.proficiency) || '';
    // Experience
    document.getElementById('job-title-1').value = ((_x = (_w = storedData.experience) === null || _w === void 0 ? void 0 : _w[0]) === null || _x === void 0 ? void 0 : _x.jobTitle) || '';
    document.getElementById('company-desc-1').value = ((_z = (_y = storedData.experience) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.companyDesc) || '';
    document.getElementById('years-1').value = ((_1 = (_0 = storedData.experience) === null || _0 === void 0 ? void 0 : _0[0]) === null || _1 === void 0 ? void 0 : _1.years) || '';
    document.getElementById('job-title-2').value = ((_3 = (_2 = storedData.experience) === null || _2 === void 0 ? void 0 : _2[1]) === null || _3 === void 0 ? void 0 : _3.jobTitle) || '';
    document.getElementById('company-desc-2').value = ((_5 = (_4 = storedData.experience) === null || _4 === void 0 ? void 0 : _4[1]) === null || _5 === void 0 ? void 0 : _5.companyDesc) || '';
    document.getElementById('years-2').value = ((_7 = (_6 = storedData.experience) === null || _6 === void 0 ? void 0 : _6[1]) === null || _7 === void 0 ? void 0 : _7.years) || '';
    document.getElementById('job-title-3').value = ((_9 = (_8 = storedData.experience) === null || _8 === void 0 ? void 0 : _8[2]) === null || _9 === void 0 ? void 0 : _9.jobTitle) || '';
    document.getElementById('company-desc-3').value = ((_11 = (_10 = storedData.experience) === null || _10 === void 0 ? void 0 : _10[2]) === null || _11 === void 0 ? void 0 : _11.companyDesc) || '';
    document.getElementById('years-3').value = ((_13 = (_12 = storedData.experience) === null || _12 === void 0 ? void 0 : _12[2]) === null || _13 === void 0 ? void 0 : _13.years) || '';
    // Skills
    document.getElementById('skill-1').value = ((_15 = (_14 = storedData.skills) === null || _14 === void 0 ? void 0 : _14[0]) === null || _15 === void 0 ? void 0 : _15.skill) || '';
    document.getElementById('skill-level-1').value = ((_17 = (_16 = storedData.skills) === null || _16 === void 0 ? void 0 : _16[0]) === null || _17 === void 0 ? void 0 : _17.level) || '';
    document.getElementById('skill-2').value = ((_19 = (_18 = storedData.skills) === null || _18 === void 0 ? void 0 : _18[1]) === null || _19 === void 0 ? void 0 : _19.skill) || '';
    document.getElementById('skill-level-2').value = ((_21 = (_20 = storedData.skills) === null || _20 === void 0 ? void 0 : _20[1]) === null || _21 === void 0 ? void 0 : _21.level) || '';
    document.getElementById('skill-3').value = ((_23 = (_22 = storedData.skills) === null || _22 === void 0 ? void 0 : _22[2]) === null || _23 === void 0 ? void 0 : _23.skill) || '';
    document.getElementById('skill-level-3').value = ((_25 = (_24 = storedData.skills) === null || _24 === void 0 ? void 0 : _24[2]) === null || _25 === void 0 ? void 0 : _25.level) || '';
    // Load profile image preview
    if (storedData.profileImage) {
        const profilePreview = document.getElementById('profilePreview');
        profilePreview.src = storedData.profileImage;
        profilePreview.style.display = 'block';
    }
}
(_a = document.getElementById('editResumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const updatedData = {
        aboutMe: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            designation: document.getElementById('designation').value,
            yourself: document.getElementById('yourself').value,
        },
        contactInfo: {
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            linkedin: document.getElementById('linkedin').value,
            address: document.getElementById('address').value,
        },
        education: [
            {
                year: document.getElementById('edu-year-1').value,
                degree: document.getElementById('edu-degree-1').value,
                institute: document.getElementById('edu-institute-1').value,
            },
            {
                year: document.getElementById('edu-year-2').value,
                degree: document.getElementById('edu-degree-2').value,
                institute: document.getElementById('edu-institute-2').value,
            },
        ],
        languages: [
            {
                language: document.getElementById('language-1').value,
                proficiency: document.getElementById('proficiency-1').value,
            },
            {
                language: document.getElementById('language-2').value,
                proficiency: document.getElementById('proficiency-2').value,
            },
        ],
        experience: [
            {
                jobTitle: document.getElementById('job-title-1').value,
                companyDesc: document.getElementById('company-desc-1').value,
                years: document.getElementById('years-1').value,
            },
            {
                jobTitle: document.getElementById('job-title-2').value,
                companyDesc: document.getElementById('company-desc-2').value,
                years: document.getElementById('years-2').value,
            },
            {
                jobTitle: document.getElementById('job-title-3').value,
                companyDesc: document.getElementById('company-desc-3').value,
                years: document.getElementById('years-3').value,
            },
        ],
        skills: [
            {
                skill: document.getElementById('skill-1').value,
                level: document.getElementById('skill-level-1').value,
            },
            {
                skill: document.getElementById('skill-2').value,
                level: document.getElementById('skill-level-2').value,
            },
            {
                skill: document.getElementById('skill-3').value,
                level: document.getElementById('skill-level-3').value,
            },
        ],
        firstName: "",
        lastName: "",
        designation: "",
        yourself: "",
        phoneNumber: "",
        email: "",
        linkedin: "",
        address: ""
    };
    const profileImageInput = document.getElementById('profileImage');
    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            updatedData.profileImage = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            localStorage.setItem('resumeData', JSON.stringify(updatedData));
            alert('Resume updated successfully!');
            window.location.href = './resume.html';
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }
    else {
        localStorage.setItem('resumeData', JSON.stringify(updatedData));
        alert('Resume updated successfully!');
        window.location.href = './resume.html';
    }
});
window.onload = loadStoredData;
